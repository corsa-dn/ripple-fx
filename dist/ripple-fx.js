"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ripple =
/*#__PURE__*/
function () {
  function Ripple(elem, color) {
    var _this = this;

    _classCallCheck(this, Ripple);

    // входные параметры: целевой элемент, цвет волны
    this.$elements = document.querySelectorAll(elem); // выбор целевых элементов DOM

    this.$color = color;
    this.$elements.forEach(function (el) {
      el.addEventListener("click", function (e) {
        // клик на элементе
        el.classList.add("ripple-fx");
        var wave = document.createElement("div"); // создаем волну

        wave.classList.add("ripple__wave"); // добавляем ей класс

        wave.style.backgroundColor = _this.$color; // устанавливаем цвет со входных параметров по умолчанию #ffffff - белый

        el.insertBefore(wave, null); // вставляем волну в целевой элемент

        var click_pos = {
          // собираем координаты клика для правильного позициорования волны
          x: e.clientX - el.offsetLeft,
          y: e.clientY - el.offsetTop
        };
        wave.style.top = click_pos.y - wave.clientHeight / 2 + "px"; // позиционируем волну внутри кнопки по Y

        wave.style.left = click_pos.x - wave.clientWidth / 2 + "px"; // позиционируем волну внутри кнопки по X

        wave.style.animationPlayState = "running"; // запускаем анимацию

        wave.addEventListener("animationend", function () {
          // следим, когда анимация закончится
          wave.style.animationPlayState = "stopped"; // останавливаем анимацию

          el.removeChild(wave); // удаляем волну, которая прошла
        });
      });
    });
  }

  _createClass(Ripple, [{
    key: "color",
    set: function set(newColor) {
      this.$color = newColor;
    },
    get: function get() {
      return this.$color;
    }
  }]);

  return Ripple;
}();