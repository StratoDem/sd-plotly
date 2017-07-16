'use strict';

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _frame = require('pandas-js/dist/core/frame');

var _frame2 = _interopRequireDefault(_frame);

var _series = require('pandas-js/dist/core/series');

var _series2 = _interopRequireDefault(_series);

var _sdplot = require('../_sdplot');

var _sdplot2 = _interopRequireDefault(_sdplot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SDPlot />', function () {
  describe('rendering', function () {
    it('Renders properly', function () {
      var data = new _frame2.default(_immutable2.default.Map({
        x: new _series2.default([1, 2, 3, 4]),
        y: new _series2.default([2, 3, 4, 5])
      }));
      var plot = (0, _enzyme.render)(_react2.default.createElement(_sdplot2.default, {
        id: 'test-id',
        className: 'main-graph',
        data: data,
        yNames: ['x', 'y']
      }));

      expect(plot.find('.main-graph').length).toEqual(1);
      expect(plot.find('.main-graph').find('#test-id').length).toEqual(1);
      expect(plot.find('.main-graph').find('.main-graph-inner').length).toEqual(1);
    });

    it('Handles an empty DataFrame', function () {
      var data = new _frame2.default([]);
      var plot = (0, _enzyme.render)(_react2.default.createElement(_sdplot2.default, {
        id: 'test-id',
        className: 'main-graph',
        data: data,
        yNames: []
      }));

      expect(plot.find('.main-graph').length).toEqual(1);
      expect(plot.find('.main-graph').find('#test-id').length).toEqual(1);
      expect(plot.find('.main-graph').find('.main-graph-inner').length).toEqual(1);
    });

    it('Has the right data after render', function () {
      var data = new _frame2.default(_immutable2.default.Map({
        x: new _series2.default([1, 2, 3, 4]),
        y: new _series2.default([2, 3, 4, 5])
      }));
      var plot = (0, _enzyme.shallow)(_react2.default.createElement(_sdplot2.default, {
        id: 'test-id',
        className: 'main-graph',
        data: data,
        yNames: ['x', 'y']
      }));
      var chartJSON = plot.instance().chartData;

      expect(chartJSON).toBeInstanceOf(Array);
      expect(chartJSON.length).toEqual(2);
      expect(chartJSON[0]).toBeInstanceOf(Object);

      expect(chartJSON[0].x).toEqual([0, 1, 2, 3]);
      expect(chartJSON[0].y).toEqual([1, 2, 3, 4]);

      expect(chartJSON[1].x).toEqual([0, 1, 2, 3]);
      expect(chartJSON[1].y).toEqual([2, 3, 4, 5]);
    });
  });

  describe('layout', function () {
    var title = 'Test title';
    var fontFamily = 'Test font family';
    var fontScale = 2;
    var fontColor = 'blue';
    var showLegend = true;
    var secondaryAxis = false;
    var paperBackgroundColor = 'black';
    var plotBackgroundColor = 'red';

    var xLabel = 'Test x label';
    var xTicksReverse = false;
    var xTicksRotation = 0;
    var horizontalLines = true;
    var verticalLines = false;
    var gridColor = 'orange';
    var xTicksPrefix = 'test x prefix';
    var xType = '.1%';
    var xTicksFormat = '.0%';
    var xRangemode = 'tozero';

    var yLabel = 'Test y label';
    var yTicksReverse = false;
    var yTicksRotation = 0;
    var yTicksPrefix = 'test y prefix';
    var yType = '.1%';
    var yTicksFormat = '.0%';
    var yRangemode = 'tozero';
    var yHoverFormat = '.2f';

    var legendLocation = 'topright';
    var legendBackgroundColor = 'pink';
    var legendBorderColor = 'orange-red';

    var data = new _frame2.default(_immutable2.default.Map({
      x: new _series2.default([1, 2, 3, 4]),
      y: new _series2.default([2, 3, 4, 5])
    }));

    var plot = (0, _enzyme.shallow)(_react2.default.createElement(_sdplot2.default, {
      id: 'test-id',
      className: 'main-graph',
      data: data,
      yNames: ['x', 'y'],
      title: title,
      fontFamily: fontFamily,
      fontScale: fontScale,
      fontColor: fontColor,
      showLegend: showLegend,
      secondaryAxis: secondaryAxis,
      paperBackgroundColor: paperBackgroundColor,
      plotBackgroundColor: plotBackgroundColor,
      xLabel: xLabel,
      xTicksReverse: xTicksReverse,
      xTicksRotation: xTicksRotation,
      xTicksPrefix: xTicksPrefix,
      verticalLines: verticalLines,
      horizontalLines: horizontalLines,
      gridColor: gridColor,
      xType: xType,
      xTicksFormat: xTicksFormat,
      xRangemode: xRangemode,

      yLabel: yLabel,
      yTicksReverse: yTicksReverse,
      yTicksRotation: yTicksRotation,
      yTicksPrefix: yTicksPrefix,
      yType: yType,
      yTicksFormat: yTicksFormat,
      yRangemode: yRangemode,
      yHoverFormat: yHoverFormat,

      legendLocation: legendLocation,
      legendBackgroundColor: legendBackgroundColor,
      legendBorderColor: legendBorderColor
    }));

    var plotInstance = plot.instance();

    it('has the correct layout', function () {
      var chartLayout = plotInstance.layout;
      expect(chartLayout).toBeInstanceOf(Object);

      expect(chartLayout.title).toEqual(title);
      expect(chartLayout.font.family).toEqual(fontFamily);
      expect(chartLayout.font.size).toEqual(fontScale * 16);
      expect(chartLayout.font.color).toEqual(fontColor);
      expect(chartLayout.yaxis2).toBeUndefined();
      expect(chartLayout.paper_bg_color).toEqual(paperBackgroundColor);
      expect(chartLayout.plot_bg_color).toEqual(plotBackgroundColor);
      expect(chartLayout.showlegend).toEqual(showLegend);
      expect(chartLayout.xaxis).toEqual(plotInstance.xAxisStyle);
      expect(chartLayout.yaxis).toEqual(plotInstance.yAxisStyle);
    });

    it('has the proper x axis styling', function () {
      var xAxisStyle = plotInstance.xAxisStyle;
      expect(xAxisStyle).toBeInstanceOf(Object);

      expect(xAxisStyle.title).toEqual(xLabel);
      expect(xAxisStyle.autorange).toEqual(true);
      expect(xAxisStyle.titlefont.size).toEqual(fontScale * 14);
      expect(xAxisStyle.tickangle).toEqual(360);
      expect(xAxisStyle.tickfont.size).toEqual(fontScale * 11);
      expect(xAxisStyle.gridcolor).toEqual(paperBackgroundColor);
      expect(xAxisStyle.tickprefix).toEqual(xTicksPrefix);
      expect(xAxisStyle.type).toEqual(xType);
      expect(xAxisStyle.tickformat).toEqual(xTicksFormat);
      expect(xAxisStyle.rangemode).toEqual(xRangemode);
    });

    it('has the proper y axis styling', function () {
      var yAxisStyle = plotInstance.yAxisStyle;
      expect(yAxisStyle).toBeInstanceOf(Object);

      expect(yAxisStyle.title).toEqual(yLabel);
      expect(yAxisStyle.autorange).toEqual(true);
      expect(yAxisStyle.titlefont.size).toEqual(fontScale * 14);
      expect(yAxisStyle.tickangle).toEqual(360);
      expect(yAxisStyle.tickfont.size).toEqual(fontScale * 11);
      expect(yAxisStyle.gridcolor).toEqual(gridColor);
      expect(yAxisStyle.tickprefix).toEqual(yTicksPrefix);
      expect(yAxisStyle.type).toEqual(yType);
      expect(yAxisStyle.tickformat).toEqual(yTicksFormat);
      expect(yAxisStyle.hoverformat).toEqual(yHoverFormat);
      expect(yAxisStyle.rangemode).toEqual(yRangemode);
    });

    it('has the proper legend', function () {
      var legend = plotInstance.legend;
      expect(legend).toBeInstanceOf(Object);

      expect(legend.x).toEqual(1);
      expect(legend.y).toEqual(1);
      expect(legend.font.size).toEqual(fontScale * 14);
      expect(legend.bgcolor).toEqual(legendBackgroundColor);
      expect(legend.bordercolor).toEqual(legendBorderColor);
    });

    it('has the proper margin', function () {
      var margin = plotInstance.margin;
      expect(margin).toBeInstanceOf(Object);

      expect(margin.l).toEqual(60);
      expect(margin.t).toEqual(20);
      expect(margin.r).toEqual(10);
      expect(margin.b).toEqual(50);
      expect(margin.pad).toEqual(0);
    });
  });

  describe('React Lifecycle Methods', function () {
    describe('shouldComponentUpdate', function () {
      var data = new _frame2.default(_immutable2.default.Map({
        x: new _series2.default([1, 2, 3, 4]),
        y: new _series2.default([2, 3, 4, 5])
      }));
      var plot = (0, _enzyme.shallow)(_react2.default.createElement(_sdplot2.default, {
        id: 'test-id',
        className: 'main-graph',
        data: data,
        yNames: ['x', 'y']
      }));

      it('Returns false if the DataFrame is equal', function () {
        var plotInstance = plot.instance();

        expect(plotInstance.shouldComponentUpdate({ data: data })).toEqual(false);
      });

      it('Returns true if the DataFrame is different', function () {
        var plotInstance = plot.instance();

        expect(plotInstance.shouldComponentUpdate({
          data: new _frame2.default([{ x: 1, y: 2 }])
        })).toEqual(true);
      });
    });
  });
});