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

var _class, _temp; /**
                    * StratoDem Analytics : _sdplot
                    * Principal Author(s) : Michael Clawar
                    * Secondary Author(s) :
                    * Description :
                    *
                    *  (c) 2016- StratoDem Analytics, LLC
                    *  All Rights Reserved
                    */

// --- LOCAL IMPORTS --- //


var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _frame = require('pandas-js/dist/core/frame');

var _frame2 = _interopRequireDefault(_frame);

var _series = require('pandas-js/dist/core/series');

var _series2 = _interopRequireDefault(_series);

var _constants = require('./constants');

var constants = _interopRequireWildcard(_constants);

var _plotly = require('./_plotly');

var _plotly2 = _interopRequireDefault(_plotly);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** SDPlot | The base React Plotly component for plots */


// --- TYPES --- //


// --- COMPONENT DEFINITION --- //
var SDPlot = (_temp = _class = function (_React$Component) {
  (0, _inherits3.default)(SDPlot, _React$Component);

  function SDPlot(props) {
    (0, _classCallCheck3.default)(this, SDPlot);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SDPlot.__proto__ || Object.getPrototypeOf(SDPlot)).call(this, props));

    _this.redraw = (0, _debounce2.default)(_this._redraw, props.redrawDebounce);
    return _this;
  }

  // ***** React lifecycle methods ***** //


  (0, _createClass3.default)(SDPlot, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.redraw();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var dataEqual = nextProps.data.values === this.props.data.values;
      var columnsEqual = nextProps.data.columns === this.props.data.columns;
      var indexEqual = nextProps.data.index === this.props.data.index;

      return !dataEqual || !columnsEqual || !indexEqual;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.redrawDebounce !== prevProps.redrawDebounce) this.redraw = (0, _debounce2.default)(this._redraw, this.props.redrawDebounce);

      this.redraw();
    }
  }, {
    key: 'toString',
    value: function toString() {
      return 'SDPlot<' + this.props.id + '>';
    }

    /** Resize the plot on window resize events */

  }, {
    key: 'plotlyResize',
    value: function plotlyResize() {
      var thisNode = this.plotComponent;
      window.addEventListener('resize', (0, _debounce2.default)(function () {
        return _plotly2.default.Plots.resize(thisNode);
      }, this.props.resizeDebounce));
    }

    /** Redraw the chart when data is updated */

  }, {
    key: '_redraw',
    value: function _redraw() {
      var _props = this.props,
          id = _props.id,
          configuration = _props.configuration,
          displayModeBar = _props.displayModeBar;


      _plotly2.default.newPlot(id, this.chartData, this.layout, displayModeBar ? configuration : { displayModeBar: displayModeBar });
      this.plotlyResize();
    }

    // --- GETTERS --- //
    /** Plotly layout object */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          className = _props2.className,
          id = _props2.id;

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement('div', {
          ref: function ref(component) {
            _this2.plotComponent = component;
          },
          id: id,
          className: className + '-inner'
        })
      );
    }
  }, {
    key: 'layout',
    get: function get() {
      var _props3 = this.props,
          title = _props3.title,
          paperBackgroundColor = _props3.paperBackgroundColor,
          plotBackgroundColor = _props3.plotBackgroundColor,
          barmode = _props3.barmode,
          fontFamily = _props3.fontFamily,
          fontScale = _props3.fontScale,
          fontColor = _props3.fontColor,
          secondaryAxis = _props3.secondaryAxis,
          showLegend = _props3.showLegend,
          bargap = _props3.bargap,
          height = _props3.height,
          width = _props3.width;


      var layout = {
        title: title,
        paper_bg_color: paperBackgroundColor,
        plot_bg_color: plotBackgroundColor,
        barmode: barmode,
        bargap: bargap,
        height: height,
        width: width,
        font: { family: fontFamily, size: fontScale * constants.BASE_FONT_SIZE, color: fontColor },
        xaxis: this.xAxisStyle,
        yaxis: this.yAxisStyle,
        legend: this.legend,
        margin: this.margin,
        showlegend: showLegend
      };

      if (secondaryAxis) {
        // $FlowFixMe
        layout.yaxis2 = this.secondaryAxis;
      }
      return layout;
    }

    /** Plotly x-axis style object */

  }, {
    key: 'xAxisStyle',
    get: function get() {
      var _props4 = this.props,
          xLabel = _props4.xLabel,
          xTicksReverse = _props4.xTicksReverse,
          fontScale = _props4.fontScale,
          xTicksRotation = _props4.xTicksRotation,
          verticalLines = _props4.verticalLines,
          gridColor = _props4.gridColor,
          paperBackgroundColor = _props4.paperBackgroundColor,
          xTicksPrefix = _props4.xTicksPrefix,
          xType = _props4.xType,
          xTicksFormat = _props4.xTicksFormat,
          xRangemode = _props4.xRangemode,
          xShowTickLabels = _props4.xShowTickLabels;


      var autorange = void 0;
      if (xTicksReverse) autorange = 'reversed';else autorange = true;

      return {
        title: xLabel,
        autorange: autorange,
        titlefont: { size: fontScale * constants.TITLE_FONT_SIZE },
        tickangle: constants.STARTING_FIXED_ROTATION - xTicksRotation,
        tickfont: { size: fontScale * constants.TICK_FONT_SIZE },
        gridcolor: verticalLines ? gridColor : paperBackgroundColor,
        tickprefix: xTicksPrefix,
        type: xType,
        tickformat: xTicksFormat,
        rangemode: xRangemode,
        showticklabels: xShowTickLabels
      };
    }

    /** Plotly y-axis style object */

  }, {
    key: 'yAxisStyle',
    get: function get() {
      var _props5 = this.props,
          yLabel = _props5.yLabel,
          yTicksReverse = _props5.yTicksReverse,
          fontScale = _props5.fontScale,
          yTicksRotation = _props5.yTicksRotation,
          horizontalLines = _props5.horizontalLines,
          gridColor = _props5.gridColor,
          paperBackgroundColor = _props5.paperBackgroundColor,
          yTicksPrefix = _props5.yTicksPrefix,
          yType = _props5.yType,
          yTicksFormat = _props5.yTicksFormat,
          yHoverFormat = _props5.yHoverFormat,
          yRangemode = _props5.yRangemode,
          yShowTickLabels = _props5.yShowTickLabels;


      var autorange = void 0;
      if (yTicksReverse) autorange = 'reversed';else autorange = true;

      return {
        title: yLabel,
        autorange: autorange,
        titlefont: { size: fontScale * constants.TITLE_FONT_SIZE },
        tickangle: constants.STARTING_FIXED_ROTATION - yTicksRotation,
        tickfont: { size: fontScale * constants.TICK_FONT_SIZE },
        gridcolor: horizontalLines ? gridColor : paperBackgroundColor,
        tickprefix: yTicksPrefix,
        type: yType,
        tickformat: yTicksFormat,
        hoverformat: yHoverFormat,
        rangemode: yRangemode,
        showticklabels: yShowTickLabels
      };
    }

    /** Plotly legend style object */

  }, {
    key: 'legend',
    get: function get() {
      var _props6 = this.props,
          chartType = _props6.chartType,
          legendLocation = _props6.legendLocation,
          fontScale = _props6.fontScale,
          legendBackgroundColor = _props6.legendBackgroundColor,
          legendBorderColor = _props6.legendBorderColor;

      return {
        x: chartType === 'multiple' ? constants.LEGEND_LOCATIONS[legendLocation].x : 1,
        y: constants.LEGEND_LOCATIONS[legendLocation].y,
        font: { size: fontScale * constants.TITLE_FONT_SIZE },
        bgcolor: legendBackgroundColor,
        bordercolor: legendBorderColor
      };
    }

    /** Plotly margin style object */

  }, {
    key: 'margin',
    get: function get() {
      var _props7 = this.props,
          padding = _props7.padding,
          marginLeft = _props7.marginLeft,
          marginRight = _props7.marginRight,
          marginTop = _props7.marginTop,
          marginBottom = _props7.marginBottom;

      return {
        l: marginLeft,
        t: marginTop,
        r: marginRight,
        b: marginBottom,
        pad: padding
      };
    }

    /** Plotly secondary axis style object */

  }, {
    key: 'secondaryAxis',
    get: function get() {
      var yAxis2 = (0, _extends3.default)({}, this.yAxisStyle);
      yAxis2.tickangle = constants.STARTING_FIXED_ROTATION - this.props.yTicksRotation;
      yAxis2.overlaying = 'y';
      yAxis2.title = '';
      yAxis2.side = 'right';

      return yAxis2;
    }

    /** Convert the Immutable.List passed in to the appropriate array format for Plotly.js */

  }, {
    key: 'chartData',
    get: function get() {
      var chartType = this.props.chartType;


      if (chartType === 'multiple') return this.chartDataMultiple;

      var _props8 = this.props,
          data = _props8.data,
          traceNames = _props8.traceNames,
          orientation = _props8.orientation,
          xName = _props8.xName,
          xIsDate = _props8.xIsDate,
          xTickLabels = _props8.xTickLabels,
          palette = _props8.palette,
          secondaryAxis = _props8.secondaryAxis,
          opacity = _props8.opacity,
          yNames = _props8.yNames,
          hoverinfo = _props8.hoverinfo;


      if (data.length === 0) // If we have empty data, let's just skip quickly
        return [];

      var xDate = false;
      if (typeof xName !== 'undefined') xDate = xName.toUpperCase() === 'DATE';else xDate = xIsDate;

      var yaxis = this.yAxisStyle;

      if (data instanceof _series2.default) {
        // Only plotting one data series
        var xVals = void 0;
        if (typeof xTickLabels === 'undefined') xVals = xTickLabels;else if (xDate) xVals = data.index.map(function (v) {
          return utils.dateFromISO(v);
        }).toArray();else xVals = data.index.toArray();

        return [constants.dataToTrace({
          xVals: orientation === 'v' ? xVals : data.values.toArray(),
          yVals: orientation === 'v' ? data.values.toArray() : xVals,
          traceName: traceNames[0],
          color: palette[0],
          chartType: chartType,
          orientation: orientation,
          yaxis: yaxis,
          markerColor: palette[0],
          secondaryAxis: secondaryAxis,
          opacity: opacity,
          hoverinfo: hoverinfo
        })];
      } else if (data instanceof _frame2.default) {
        // Potentially plotting multiple data series
        var _xVals = void 0;

        if (typeof xName === 'undefined') {
          _xVals = xDate ? data.index.map(function (v) {
            return utils.dateFromISO(v);
          }).toArray() : data.index.toArray();
        } else {
          _xVals = xDate ? data.get(xName).values.map(function (v) {
            return utils.dateFromISO(v);
          }).toArray() : data.get(xName).values.toArray();
        }

        return yNames.map(function (yName, idx) {
          return constants.dataToTrace({
            xVals: _xVals,
            yVals: data.get(yName).values.toArray(),
            traceName: traceNames[idx],
            color: palette[idx],
            chartType: chartType,
            orientation: orientation,
            yaxis: yaxis,
            markerColor: palette[idx],
            secondaryAxis: secondaryAxis,
            opacity: opacity,
            hoverinfo: hoverinfo });
        });
      }
      throw new Error('Must be either pandas.Series or pandas.DataFrame');
    }

    /** Convert the Immutable.List for multiple plot to the appropriate array format for Plotly.js */

  }, {
    key: 'chartDataMultiple',
    get: function get() {
      var _props9 = this.props,
          traceNames = _props9.traceNames,
          traceTypes = _props9.traceTypes,
          data = _props9.data,
          yNames = _props9.yNames,
          xName = _props9.xName,
          palette = _props9.palette,
          orientation = _props9.orientation,
          opacity = _props9.opacity;


      if (data instanceof _frame2.default && typeof xName === 'string') {
        var xVals = xName.toUpperCase() === 'DATE' ? data.index.map(function (v) {
          return utils.dateFromISO(v);
        }).toArray() : data.index.toArray();
        return yNames.map(function (yName, idx) {
          return constants.dataToTrace({
            xVals: xVals,
            yVals: data.get(yName).values.toArray(),
            traceName: traceNames[idx],
            color: palette[idx],
            opacity: opacity,
            chartType: traceTypes[idx],
            orientation: orientation,
            yaxis: idx === 1 ? 'y2' : 'y1',
            markerColor: palette[idx],
            secondaryAxis: idx === 1 });
        });
      }

      throw new Error('Multiple chart must be a DataFrame');
    }
  }]);
  return SDPlot;
}(_react2.default.Component), _class.defaultProps = (0, _extends3.default)({}, constants.CHART_STYLE_DEFAULTS, constants.X_AXIS_STYLE_DEFAULTS, constants.Y_AXIS_STYLE_DEFAULTS, constants.PAPER_STYLE_DEFAULTS, constants.LEGEND_STYLE_DEFAULTS, constants.FONT_STYLE_DEFAULTS), _temp);
exports.default = SDPlot;

//# sourceMappingURL=_sdplot.js.map