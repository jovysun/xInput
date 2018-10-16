class Tip {
    constructor(options) {
        const defaults = {
            // alert confirm
            type: 'alert',
            // 提示框文本
            // ['The system will help you to delete non-English characters. Are you sure to continue?', '系统将帮您删除非英文字符，确定继续操作吗？']
            tipTxt: '系统将帮您删除非英文字符，确定继续操作吗？',
            // 提示框确认按钮文本['Confirm', '确定']
            confirmBtnTxt: '确定',
            // 提示框取消按钮文本['Cancel', '取消']
            cancelBtnTxt: '取消',
            confirmBtn: '.J-confirm-btn',
            cancelBtn: '.J-cancel-btn',
            onConfirm: (tip) => {
                tip.hideTip();
            },
            onCancel: (tip) => {
                tip.hideTip();
            }
        };

        options = Object.assign(defaults, options);
        this.type = options.type;
        this.tipTxt = options.tipTxt;
        this.confirmBtnTxt = options.confirmBtnTxt;
        this.cancelBtnTxt = options.cancelBtnTxt;
        this.confirmBtn = options.confirmBtn;
        this.cancelBtn = options.cancelBtn;
        this.onConfirm = options.onConfirm;
        this.onCancel = options.onCancel;

        if (typeof this.onConfirm !== 'function') {
            throw new Error('Tip: onConfirm is not function!');
        }
        if (typeof this.onCancel !== 'function') {
            throw new Error('Tip: onCancel is not function!');
        }

        this.init();
    }
    init() {

        let alertHtml = '' +
            '<div class="m-tip arrow-left limit-tip J-limit-tip">' +
            '<div class="tip-con">' +
            this.tipTxt + '<br>' +
            '<a href="javascript:void(0);" class="confirm-btn J-confirm-btn">' + this.confirmBtnTxt + '</a>' +
            '</div>' +
            '<div class="arrow arrow-out">' +
            '<span class="arrow arrow-in"></span>' +
            '</div>' +
            '</div>';

        let confirmHtml = '' +
            '<div class="m-tip arrow-bottom x2en-tip J-x2en-tip">' +
            '<div class="tip-con">' +
            this.tipTxt + '<br>' +
            '<a href="javascript:void(0);" class="btn btn-main J-confirm-btn" style="margin-right: 8px;margin-top: 10px;">' + this.confirmBtnTxt + '</a>' +
            '<a href="javascript:void(0);" class="btn J-cancel-btn" style="margin-top: 10px;">' + this.cancelBtnTxt + '</a>' +
            '</div>' +
            '<div class="arrow arrow-out J-arrow-out">' +
            '<span class="arrow arrow-in"></span>' +
            '</div>' +
            '</div>';

        if (this.type === 'alert') {
            this.tipHtml = alertHtml;
        } else {
            this.tipHtml = confirmHtml;
        }
        this.$tip = $(this.tipHtml);
        this.$confirmBtn = this.$tip.find(this.confirmBtn);
        this.$cancelBtn = this.$tip.find(this.cancelBtn);

        this._bind();
    }
    _bind() {
        this.$confirmBtn.on('click', () => {
            this.onConfirm(this);
        })
        this.$cancelBtn.on('click', () => {
            this.onCancel(this);
        })
    }
    showTip() {
        this.$tip.show();
    }
    hideTip() {
        this.$tip.hide();
    }
}

export {Tip}
