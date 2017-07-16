'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _core = require('plotly.js/lib/core');

var _core2 = _interopRequireDefault(_core);

var _scatter = require('plotly.js/lib/scatter');

var _scatter2 = _interopRequireDefault(_scatter);

var _bar = require('plotly.js/lib/bar');

var _bar2 = _interopRequireDefault(_bar);

var _histogram = require('plotly.js/lib/histogram');

var _histogram2 = _interopRequireDefault(_histogram);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_core2.default.register([_scatter2.default, _bar2.default, _histogram2.default]);

exports.default = _core2.default;