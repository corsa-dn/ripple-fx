"use strict";

function Ripple(elem, color) {
  // входные параметры: целевой элемент, цвет волны
  var btn = document.querySelectorAll(elem); // выбор целевых элементов DOM
  btn.forEach(function (el) {
    el.addEventListener('click', function (e) {
      el.classList.add('ripple-fx')
      // клик на элементе
      var wave = document.createElement('div'); // создаем волну
      wave.classList.add('ripple__wave'); // добавляем ей класс
      wave.style.backgroundColor = color; // устанавливаем цвет со входных параметров по умолчанию #ffffff - белый
      el.insertBefore(wave, null); // вставляем волну в целевой элемент
      var click_pos = {
        // собираем координаты клика для правильного позициорования волны
        x: e.clientX - el.offsetLeft,
        y: e.clientY - el.offsetTop
      };
      wave.style.top = click_pos.y - wave.clientHeight / 2 + 'px'; // позиционируем волну внутри кнопки по Y
      wave.style.left = click_pos.x - wave.clientWidth / 2 + 'px'; // позиционируем волну внутри кнопки по X
      wave.style.animationPlayState = "running"; // запускаем анимацию
      wave.addEventListener('animationend', function () {
        // следим, когда анимация закончится
        wave.style.animationPlayState = "stopped"; // останавливаем анимацию
        el.removeChild(wave); // удаляем волну, которая прошла
      });
    });
  });
}