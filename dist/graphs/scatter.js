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

var React = _interopRequireWildcard(_react);

var _core = require('../core');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ScatterPlot = (_temp = _class = function (_React$PureComponent) {
  (0, _inherits3.default)(ScatterPlot, _React$PureComponent);

  function ScatterPlot() {
    (0, _classCallCheck3.default)(this, ScatterPlot);
    return (0, _possibleConstructorReturn3.default)(this, (ScatterPlot.__proto__ || Object.getPrototypeOf(ScatterPlot)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScatterPlot, [{
    key: 'render',
    value: function render() {
      return React.createElement(_core.SDPlot, (0, _extends3.default)({}, this.props, { chartType: _core.utils.webGLSupported() ? 'scattergl' : 'scatter' }));
    }
  }]);
  return ScatterPlot;
}(React.PureComponent), _class.defaultProps = _core.SDPlot.defaultProps, _temp);
exports.default = ScatterPlot;