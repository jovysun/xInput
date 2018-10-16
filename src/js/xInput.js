import {
    Tip
} from './tip';
import {
    InputHandler
} from './inputHandler';

class XInput {
    constructor(options) {
        const defaults = {
            // 【必选】表单元素
            ele: '',
            // 是否去头尾空格
            isTrim: true,
            // 是否限制字符数
            isMax: true,
            // 最大字数
            maxlength: null,
            // 是否转换非英文字符
            isX2En: true,

            // 提示自动消失延迟时间
            delay: 5000,

            // 自动定位提示框
            autoPosition: true,

            // alert/ confirm
            type: 'alert',
            // 提示框文本
            tipTxtMax: '您粘贴的内容已超过<span class="J-max"></span>个字符，超出部分已被系统自动删除，请检查。',
            confirmBtnTxtMax: '我知道了',
            onConfirmMax: (tip) => {
                tip.hideTip();
            },

            // ['The system will help you to delete non-English characters. Are you sure to continue?', '系统将帮您删除非英文字符，确定继续操作吗？']
            tipTxtX2En: '系统将帮您删除非英文字符，确定继续操作吗？',
            // 提示框确认按钮文本['Confirm', '确定']
            confirmBtnTxtX2En: '确定',
            // 提示框取消按钮文本['Cancel', '取消']
            cancelBtnTxtX2En: '取消',
            onConfirmX2En: (tip) => {
                tip.hideTip();
            },
            onCancelX2En: (tip) => {
                tip.hideTip();
            },

            confirmBtn: '.J-confirm-btn',
            cancelBtn: '.J-cancel-btn'

        };

        options = Object.assign(defaults, options);
        this.ele = options.ele;
        this.maxlength = options.maxlength;
        this.delay = options.delay;

        this.autoPosition = options.autoPosition;

        this.isMax = options.isMax;
        this.isX2En = options.isX2En;

        this.confirmBtn = options.confirmBtn;
        this.cancelBtn = options.cancelBtn;


        this.type = options.type;

        this.tipTxtMax = options.tipTxtMax;
        this.confirmBtnTxtMax = options.confirmBtnTxtMax;
        this.onConfirmMax = options.onConfirmMax;

        this.tipTxtX2En = options.tipTxtX2En;
        this.confirmBtnTxtX2En = options.confirmBtnTxtX2En;
        this.cancelBtnTxtX2En = options.cancelBtnTxtX2En;
        this.onConfirmX2En = options.onConfirmX2En;
        this.onCancelX2En = options.onCancelX2En;


        if (!this.ele) {
            throw new Error('XInput: ele is not found!');
        }
        this.init();
    }
    init() {
        this.$ele = $(this.ele);
        if (this.isMax) {
            this._getMax();
        }

        this.inputHandler = new InputHandler({
            'ele': this.ele,
            'isMax': this.isMax,
            'max': this.max,
            'isX2En': this.isX2En,
            'onCutOut': () => {
                this._cutOut();
            },
            'onX2En': () => {
                this._x2En();
            },
            'onRmLast': () => {
                this._rmLast();
            }
        });

        this._bind();
    }
    _bind() {
        // 黏贴自动截断及非英文转换
        this.$ele.on('paste', () => {
            // 删除maxlength属性
            if (this.isMax && this.$ele.attr('maxlength')) {
                this.hasMaxlength = true;
                this.$ele.removeAttr('maxlength');
            }
            setTimeout(() => {
                this.$ele.blur();
            });

        });
        // 失焦非英文转换
        this.$ele.on('blur', () => {
            this.inputHandler.deal();
        })
    }
    // 获得最大字符数
    _getMax() {
        this.max = this.maxlength ? this.maxlength : this.$ele.attr('maxlength');
        if (!this.max) {
            throw new Error('XInput: maxlength is not found!')
        }
    }

    _cutOut() {
        if (this.hasMaxlength) {
            this.$ele.attr('maxlength', this.max);
        }

        this.maxTip = new Tip({
            type: 'alert',
            tipTxt: this.tipTxtMax,
            confirmBtnTxt: this.confirmBtnTxtMax,
            onConfirm: (tip) => {
                this.onConfirmMax(tip);
            }
        });
        let $tip = this.maxTip.$tip;

        $tip.find('.J-max').text(this.max);

        this.$ele.parent().append($tip);
        // 提示框定位
        if (this.autoPosition) {
            var left = this.$ele.position().left,
                top = this.$ele.position().top,
                width = this.$ele.outerWidth(),
                height = this.$ele.outerHeight();

            if ($(window).width() > 768) {
                $tip.css({
                    'left': left + width + 10,
                    'top': top
                });
            } else {
                $tip.removeClass('arrow-left').addClass('arrow-bottom');
                $tip.css({
                    'position': 'absolute',
                    'top': -height - 2,
                    'width': '100%',
                    'margin': 0,
                    'box-sizing': 'border-box'
                });
            }
        }


        this.maxTip.showTip();
        setTimeout(() => {
            this.maxTip.hideTip();
        }, this.delay);

    }
    _x2En() {

        if (this.inputHandler.hasLast) {

            // console.log('存在无法转换的非英文字符，直接删除方法：rmLast');
            let wrapforVal = this.$ele.attr('name') ? this.$ele.attr('name') : this.$ele.attr('id');
            this.$feedbackBlock = $('.feedback-block[wrapfor=' + wrapforVal + ']');

            if (this.$feedbackBlock.length < 1) { //该表单元素对应的feedback-block元素不存在
                let feedbackHtml = '<div class="feedback-block x2en-feedback-block" wrapfor="' + wrapforVal + '"><label for="' + wrapforVal + '" generated="true" class="error">不支持输入非英文字符。<a href="javascript:void(0)" class="J-show-btn">没找到？</a></label></div>';
                this.$ele.parent().append(feedbackHtml);
                this.$feedbackBlock = this.$ele.parent().find('.feedback-block[wrapfor=' + wrapforVal + ']');
            }

            this.$feedbackBlock.show();
            this.$feedbackBlock.find('.J-show-btn').on('click', () => {

                this.x2EnTip = new Tip({
                    type: 'confirm',
                    tipTxt: this.tipTxtX2En,
                    onConfirm: (tip) => {
                        this.inputHandler.rmLast();
                        this.onConfirmX2En(tip);
                    },
                    onCancel: (tip) => {
                        this.onCancelX2En(tip);
                    }
                });
                let $tip = this.x2EnTip.$tip;
                this.$feedbackBlock.append($tip);
                // 提示框定位
                if (this.autoPosition) {
                    this.$feedbackBlock.css('position', 'relative');
                    var $this = this.$feedbackBlock.find('.J-show-btn'),
                        left = $this.position().left,
                        width = $this.outerWidth();

                    if ($(window).width() > 768) {
                        $tip.find('.J-arrow-out').css({
                            'left': width / 2 - 8
                        });
                        $tip.css({
                            'left': left,
                            'top': 'auto',
                            'bottom': '25px'
                        });
                    } else {
                        $tip.find('.J-arrow-out').css({
                            'left': left + width / 2 - 8
                        });
                        $tip.css({
                            'left': 'auto',
                            'top': 'auto',
                            'bottom': '25px'
                        });
                    }
                }

                this.x2EnTip.showTip();
            })
        }
    }
    _rmLast() {
        this.$feedbackBlock.hide();
    }

}

XInput.use = (options) => {
    if (!options.ele) {
        throw new Error('XInput: ele is not found!');
    }

    Array.prototype.slice.call(document.querySelectorAll(options.ele)).forEach(element => {
        options = Object.assign({}, options, {
            'ele': element
        });
        new XInput(options);
    });
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = XInput;
} else if (typeof define === "function" && define.amd) {
    define(function () {
        return XInput;
    });
} else {
    (function(){ return this || (0,eval)('this'); }()).XInput = XInput;
}
