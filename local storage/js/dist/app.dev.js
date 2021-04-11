"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var input = document.querySelector('input');
var allspan = document.querySelectorAll('.buttons span');
var results = document.querySelector('.results span');
allspan.forEach(function (span) {
  span.addEventListener('click', function (e) {
    console.log(localStorage.length);

    if (e.target.classList.contains('check')) {
      if (input.value !== "") {
        if (localStorage.getItem(input.value)) {
          results.innerHTML = " we found local called <span>".concat(input.value, "</span>");
        } else {
          results.innerHTML = " we not found local  <span>".concat(input.value, "</span>");
        }
      } else {
        showMassege();
      }

      input.value = "";
    }

    if (e.target.classList.contains('delete')) {
      if (input.value !== "") {
        if (localStorage.getItem(input.value)) {
          localStorage.removeItem(input.value);
          results.innerHTML = " we remove local called <span>".concat(input.value, "</span>");
        } else {
          results.innerHTML = " we not found local called  <span>".concat(input.value, "</span>");
        }
      } else {
        showMassege();
      }

      input.value = "";
    }

    if (e.target.classList.contains('show')) {
      if (localStorage.length) {
        results.innerHTML = "";

        for (var _i = 0, _Object$entries = Object.entries(localStorage); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          results.innerHTML += "<span>".concat(key, " <br></span>");
        }
      }
    }

    if (e.target.classList.contains('add')) {
      if (input.value !== "") {
        localStorage.setItem(input.value, 'test');
        results.innerHTML = "we added item ".concat(input.value);
        input.value = "";
      } else {
        showMassege();
      }
    }
  });
});

function showMassege() {
  results.innerHTML = "you cant check empty value";
}