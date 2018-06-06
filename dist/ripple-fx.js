"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
var Ripple = function Ripple(elem, color) {
  var _this = this;
  _classCallCheck(this, Ripple);
  this.$elements = document.querySelectorAll(elem);
  this.$color = color;
  this.$elements.forEach(function (el) {
    el.addEventListener("click", function (e) {
      el.classList.add("ripple-fx");
      var wave = document.createElement("div");
      wave.classList.add("ripple__wave");
      wave.style.backgroundColor = _this.$color;
      el.insertBefore(wave, null);
      var click_pos = {
        x: e.clientX - el.offsetLeft,
        y: e.clientY - el.offsetTop
      };
      wave.style.top = click_pos.y - wave.clientHeight / 2 + "px";
      wave.style.left = click_pos.x - wave.clientWidth / 2 + "px";
      wave.style.animationPlayState = "running";
      wave.addEventListener("animationend", function () {
        wave.style.animationPlayState = "stopped";
        el.removeChild(wave);
      });
    });
  });
  this.getColor = function () {
    return _this.$color;
  };
  this.setColor = function (newColor) {
    _this.$color = newColor;
  };
};