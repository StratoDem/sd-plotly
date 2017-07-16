'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('../core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BarPlot = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(BarPlot, _React$PureComponent);

  function BarPlot() {
    (0, _classCallCheck3.default)(this, BarPlot);
    return (0, _possibleConstructorReturn3.default)(this, (BarPlot.__proto__ || Object.getPrototypeOf(BarPlot)).apply(this, arguments));
  }

  (0, _createClass3.default)(BarPlot, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_core.SDPlot, (0, _extends3.default)({}, this.props, { chartType: 'bar' }));
    }
  }]);
  return BarPlot;
}(_react2.default.PureComponent), _class.defaultProps = _core.SDPlot.defaultProps, _temp);
exports.default = BarPlot;