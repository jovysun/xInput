function getRandom(min, max) {
  var Range = max - min;
  var Rand = Math.random();
  return (min + Math.round(Rand * Range));
}

function getTime() {
  return new Date().getTime();
}

// 选择器
function $$(el) {
    return (typeof el === "string" ? document.querySelectorAll(el) : el);
}

function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}
// 去除头尾空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

export {getRandom, getTime, $$, toArray}
