'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _palette = require('./palette');

Object.keys(_palette).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _palette[key];
    }
  });
});