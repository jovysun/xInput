class InputHandler {

    constructor(options) {

        // 默认配置参数
        const defaults = {
            // 【必选】表单元素
            ele: '',
            // 是否去头尾空格
            isTrim: true,
            // 是否限制字符数
            isMax: true,
            // 最大字符数
            max: null,
            // 是否转换非英文字符
            isX2En: true,

            onCutOut: () => {},
            onX2En: () => {},
            // 删除无法转换字符后回调
            onRmLast: () => {},

            // 非英文不包含特殊符号
            pattern: '[^\x00-\x9f\xa1-\xff\u0000-\u009f\u00a1-\u00ff\u0021-\u002c\u002e\u002f\u003a-\u0040\u0043\u0046\u005b-\u0060\u007b-\u007d\u00a1-\u00ac\u00ae-\u0113\u0116-\u0122\u0124-\u012b\u012e-\u014d\u0150-\u017e\u0192\u01b5\u01f5\u0237\u02c6\u02c7\u02d8-\u02dd\u0311\u0391-\u03a1\u03a3-\u03a9\u03b1-\u03c9\u03d1\u03d2\u03d5\u03d6\u03dc\u03dd\u03f0\u03f1\u03f5\u03f6\u0401-\u040c\u040e-\u044f\u0451-\u045c\u045e\u045f\u2010\u2013\u2015\u2016\u2018-\u201a\u201c-\u201e\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203a\u203e\u2041\u2043\u2044\u20ac\u20db\u20dc\u2102\u2105\u210a-\u2113\u2115-\u211e\u2122\u2124\u2127-\u2129\u212c\u212d\u212f-\u2131\u2133-\u2138\u2153-\u215e\u2190-\u219b\u219d-\u21a7\u21a9-\u21ae\u21b0-\u21b3\u21b5-\u21b7\u21ba-\u21db\u21dd\u21e4\u21e5\u2200-\u2205\u2207-\u2209\u220b\u220c\u220f-\u2214\u2216-\u2218\u221a\u221d-\u2238\u223a-\u2257\u2259\u225a\u225c\u225f-\u2262\u2264-\u228b\u228d-\u229b\u229d-\u22a5\u22a7-\u22b0\u22b2-\u22bb\u22bd-\u22db\u22de-\u22e3\u22e6-\u22f1\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231c-\u231f\u2322\u2323\u232d\u232e\u2336\u233d\u233f\u2423\u24c8\u2500\u2502\u250c\u2510\u2514\u2518\u251c\u2524\u252c\u2534\u253c\u2550-\u256c\u2580\u2584\u2588\u2591-\u2593\u25aa\u25ab\u25ad\u25ae\u25b1\u25b3-\u25b5\u25b8\u25b9\u25bd-\u25bf\u25c2\u25c3\u25ca\u25cb\u25ec\u25ef\u2605\u2606\u260e\u2640\u2642\u2660\u2663\u2665\u2666\u266a\u266d-\u266f\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u2935\u2985\u2986\u29bf\u2a00-\u2a02\u2a04\u2a06\u2a0c\u2a0d\u2a10-\u2a17\u2a22-\u2a27\u2a29\u2a2a\u2a2d-\u2a31\u2a33-\u2a3c\u2a3f\u2a40\u2a42-\u2a4d\u2a50\u2a53-\u2a58\u2a5a-\u2a5d\u2a5f\u2a66\u2a6a\u2a6d-\u2a75\u2a77-\u2a9a\u2a9d-\u2aa2\u2aa4-\u2ab0\u2ab3-\u2ac8\u2acb\u2acc\u2acf-\u2adb\u2ae4\u2ae6-\u2ae9\u2aeb-\u2af3\u2afd\ufb00-\ufb04]'
        };

        options = Object.assign(defaults, options);
        this.ele = options.ele;
        this.isTrim = options.isTrim;
        this.isMax = options.isMax;
        this.max = options.max;
        this.isX2En = options.isX2En;
        this.onCutOut = options.onCutOut;
        this.onX2En = options.onX2En;
        this.onRmLast = options.onRmLast;
        this.pattern = options.pattern;

        if (!this.ele) {
            throw new Error('InputHandler: ele is not found!');
        }
        if (typeof this.onCutOut !== 'function') {
            throw new Error('InputHandler: onCutOut is not function!');
        }
        if (typeof this.onX2En !== 'function') {
            throw new Error('InputHandler: onX2En is not function!');
        }
        if (typeof this.onRmLast !== 'function') {
            throw new Error('InputHandler: onRmLast is not function!');
        }

        this.init();

    }

    init() {
        this.$ele = $(this.ele);
    }
    // 去头尾空格
    _trim() {
        this.value = $.trim(this.value);
    }

    // 非英文及全角转英文及半角
    _x2En() {
        let replaceString = new Array(/｀/g, "`", /～/g, "~", /！/g, "!", /＃/g, "#", /＄/g, "$", /％/g, "%", /（/g, "(", /）/g, ")", /“/g, "\"", /”/g, "\"", /；/g, ";", /：/g, ":", /，/g, ",", /。|．/g, ".", /？/g, "?", / /g, " ", /＇/g, "'", /‘/g, "'", /’/g, "'", /／/g, "/", /＂/g, "\"", /＜/g, "<", /＞/g, ">", /＊/g, "*", /＆/g, "&", /＠/g, "@", /＾/g, "^", /＋/g, "+", /｜/g, "|", /＼/g, "\\", /．/g, ".", /＿/g, "_", /＝/g, "=", /－/g, "-", /……/g, "...", /１/g, "1", /２/g, "2", /３/g, "3", /４/g, "4", /５/g, "5", /６/g, "6", /７/g, "7", /８/g, "8", /９/g, "9", /０/g, "0", /、/g, ",", /｛/g, "{", /｝/g, "}", /［/g, "[", /］/g, "]", /Ａ/g, "A", /Ｂ/g, "B", /Ｃ/g, "C", /Ｄ/g, "D", /Ｅ/g, "E", /Ｆ/g, "F", /Ｇ/g, "G", /Ｈ/g, "H", /Ｉ/g, "I", /Ｊ/g, "J", /Ｋ/g, "K", /Ｌ/g, "L", /Ｍ/g, "M", /Ｎ/g, "N", /Ｏ/g, "O", /Ｐ/g, "P", /Ｑ/g, "Q", /Ｒ/g, "R", /Ｓ/g, "S", /Ｔ/g, "T", /Ｕ/g, "U", /Ｖ/g, "V", /Ｗ/g, "W", /Ｘ/g, "X", /Ｙ/g, "Y", /Ｚ/g, "Z", /ａ/g, "a", /ｂ/g, "b", /ｃ/g, "c", /ｄ/g, "d", /ｅ/g, "e", /ｆ/g, "f", /ｇ/g, "g", /ｈ/g, "h", /ｉ/g, "i", /ｊ/g, "j", /ｋ/g, "k", /ｌ/g, "l", /ｍ/g, "m", /ｎ/g, "n", /ｏ/g, "o", /ｐ/g, "p", /ｑ/g, "q", /ｒ/g, "r", /ｓ/g, "s", /ｔ/g, "t", /ｕ/g, "u", /ｖ/g, "v", /ｗ/g, "w", /ｘ/g, "x", /ｙ/g, "y", /ｚ/g, "z", /—/g, "-", /–/g, "-");
        for (let i = 0; i < replaceString.length; i = i + 2) {
            this.value = this.value.replace(replaceString[i], replaceString[i + 1]);
        }  

        if (new RegExp(this.pattern).test(this.value)) {
            // 有无法转换的非英文字符
            this.hasLast = true;
        }
        // 转换完成后回调
        this.onX2En(this);
    }
    // 截取
    _cutOut() {
        this.value = this.value.substr(0, this.max);
        // 截取完成后回调
        this.onCutOut(this);
    }
    // 处理文本
    deal() {
        this.value = this.$ele.val();
        if (this.isTrim) {
            this._trim();
        }
        if (this.isMax && this.value.length > parseInt(this.max)) {
            this._cutOut();   
        }
        if (this.isX2En) {
            this._x2En();        
        }
        this.$ele.val(this.value);
    }
    // 删除无法转换的非英文字符
    rmLast() {
        var reg = new RegExp(this.pattern, 'g');
        this.value = this.value.replace(reg, '');     
        this.$ele.val(this.value);
        this.hasLast = false;
        this.onRmLast();
    }

}

InputHandler.use = (options) => {
    if (!options.ele) {
        throw new Error('InputHandler: ele is not found!');
    }
    
    $(options.ele).each(function(index, element){
        let options = Object.assign(options, {'ele': element});
        new InputHandler(options);
    })
}

export {
    InputHandler
}
