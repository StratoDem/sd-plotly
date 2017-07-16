'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STARTING_FIXED_ROTATION = exports.TICK_FONT_SIZE = exports.TITLE_FONT_SIZE = exports.BASE_FONT_SIZE = exports.CHART_STYLE_DEFAULTS = exports.FONT_STYLE_DEFAULTS = exports.LEGEND_STYLE_DEFAULTS = exports.PAPER_STYLE_DEFAULTS = exports.Y_AXIS_STYLE_DEFAULTS = exports.X_AXIS_STYLE_DEFAULTS = exports.MARGIN_WITHOUT_LEGEND = exports.MARGIN_WITH_LEGEND = exports.dataToTrace = exports.LEGEND_LOCATIONS = undefined;

var _frame = require('pandas-js/dist/core/frame');

var _frame2 = _interopRequireDefault(_frame);

var _styles = require('./styles');

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LEGEND_LOCATIONS = exports.LEGEND_LOCATIONS = {
  topright: { x: 1.1, y: 1 },
  topleft: { x: 0, y: 1 },
  bottomleft: { x: 0, y: 0 },
  bottomright: { x: 1, y: 0 }
};

var dataToTrace = exports.dataToTrace = function dataToTrace(params) {
  var trace = {
    x: params.xVals,
    y: params.yVals,
    name: params.traceName,
    marker: {
      color: params.color,
      opacity: params.opacity
    },
    opacity: params.opacity,
    mode: params.mode,
    type: params.chartType,
    orientation: params.orientation,
    hoverinfo: params.hoverinfo
  };
  if (params.secondaryAxis) {
    trace.yaxis = params.yaxis;
    trace.marker.color = params.markerColor;
  }

  return trace;
};

var MARGIN_WITH_LEGEND = exports.MARGIN_WITH_LEGEND = { left: 60, top: 50, right: 50, bottom: 60 };
var MARGIN_WITHOUT_LEGEND = exports.MARGIN_WITHOUT_LEGEND = { left: 60, top: 20, right: 10, bottom: 50 };

var X_AXIS_STYLE_DEFAULTS = exports.X_AXIS_STYLE_DEFAULTS = {
  xLabel: '',
  xTickLabels: [],
  xTicksRotation: 0,
  xTicksReverse: false,
  xTicksPrefix: '',
  xType: '-',
  xTicksFormat: '',
  xRangemode: 'normal',
  xShowTickLabels: true,
  xIsDate: false
};

var Y_AXIS_STYLE_DEFAULTS = exports.Y_AXIS_STYLE_DEFAULTS = {
  yNames: [''],
  yLabel: '',
  yTickLabels: [],
  yTicksRotation: 0,
  yTicksReverse: false,
  yTicksPrefix: '',
  yTicksFormat: '',
  yHoverFormat: '-',
  yType: '-',
  yRangemode: 'normal',
  yShowTickLabels: true
};

var PAPER_STYLE_DEFAULTS = exports.PAPER_STYLE_DEFAULTS = {
  horizontalLines: true,
  verticalLines: false,
  gridColor: '#E3E3E3',
  plotBackgroundColor: '#000000',
  paperBackgroundColor: '#FFFFFF',
  orientation: 'v',
  opacity: 0.9,
  marginLeft: MARGIN_WITHOUT_LEGEND.left,
  marginTop: MARGIN_WITHOUT_LEGEND.top,
  marginRight: MARGIN_WITHOUT_LEGEND.right,
  marginBottom: MARGIN_WITHOUT_LEGEND.bottom,
  padding: 0
};

var LEGEND_STYLE_DEFAULTS = exports.LEGEND_STYLE_DEFAULTS = {
  showLegend: false,
  legendLocation: 'topright',
  legendBackgroundColor: '#FFFFFF',
  legendBorderColor: '#FFFFFF'
};

var FONT_STYLE_DEFAULTS = exports.FONT_STYLE_DEFAULTS = {
  fontFamily: 'adelle-sans',
  fontScale: 1,
  fontColor: '#000000'
};

var PLOTLY_CONFIGURATION = {
  modeBarButtonsToRemove: ['sendDataToCloud', 'zoom2d', 'pan2d', 'lasso2d', 'zoomIn2d', 'zoomOut2d', 'autoScale2d', 'toggleSpikelines']
};

var CHART_STYLE_DEFAULTS = exports.CHART_STYLE_DEFAULTS = {
  className: 'main-graph-inner',
  chartType: 'scatter',
  data: new _frame2.default([]),
  title: '',
  traceNames: [],
  secondaryAxis: false,
  palette: styles.PALETTE_MATERIAL,
  configuration: PLOTLY_CONFIGURATION,
  resizeDelay: 500,
  hoverinfo: 'all',
  displayModeBar: true
};

var BASE_FONT_SIZE = exports.BASE_FONT_SIZE = 16;
var TITLE_FONT_SIZE = exports.TITLE_FONT_SIZE = 14;
var TICK_FONT_SIZE = exports.TICK_FONT_SIZE = 11;
var STARTING_FIXED_ROTATION = exports.STARTING_FIXED_ROTATION = 360;