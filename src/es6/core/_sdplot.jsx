/**
 * StratoDem Analytics : _sdplot
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

import debounce from 'lodash/debounce';
import React, { Element } from 'react';

import DataFrame from 'pandas-js/dist/core/frame';
import Series from 'pandas-js/dist/core/series';

// --- LOCAL IMPORTS --- //
import * as constants from './constants';
import Plotly from './_plotly';
import * as utils from './utils';


// --- TYPES --- //
type T_AXIS = {
  title: string,
  autorange: 'reversed' | true,
  titlefont: {size: number},
  tickangle: number,
  tickfont: {size: number},
  gridcolor: string,
  tickprefix: string,
  type: string,
  tickformat: string,
  hoverformat?: string,
  rangemode: 'tozero' | 'nonnegative' | 'normal',
  showticklabels: boolean,
};
type T_AXIS_SECONDARY = T_AXIS & {
  overlaying: 'y',
  side: 'right',
};
type T_LEGEND = {
  x: number,
  y: number,
  font: {size: number},
  bgcolor: string,
  bordercolor: string,
}
type T_MARGIN = {
  l: number,
  t: number,
  r: number,
  b: number,
  pad: number
}
type T_LAYOUT = {
  title: string,
  paper_bg_color: string,
  height?: number,
  width?: number,
  plot_bg_color: string,
  barmode?: 'relative' | 'group' | 'stack',
  bargap?: number,
  font: {family: string, size: number, color: string},
  xaxis: T_AXIS,
  yaxis: T_AXIS,
  legend: T_LEGEND,
  margin: T_MARGIN,
  showlegend: boolean,
  yaxis2?: T_AXIS_SECONDARY,
  height?: number,
  width?: number,
};


// --- COMPONENT DEFINITION --- //
export type Props = {
  /** Div id with which to render the SDPlot */
  id: string,
  /** Data to render in the plot */
  data: DataFrame | Series,
  /** class to give to SDPlot div */
  className: string,
  /** Type of chart */
  chartType: 'bar' | 'scatter' | 'scattergl',
  /** Types of each of the traces in the plot */
  traceTypes: Array<string>,
  /** Title of the chart */
  title: string,
  /** Names for each of the traces */
  traceNames: Array<string>,
  /** Include a secondary axis? */
  secondaryAxis: boolean,
  /** Type of bar chart to plot */
  barmode?: 'relative' | 'group' | 'stack',
  /** Hover info format https://plot.ly/javascript/reference/#scatter-hoverinfo */
  hoverinfo?: string,
  /** Gap between the bars in barplot */
  bargap?: number,
  /** Array of colors to use for the traces */
  palette: Array<string>,
  /** Plot.ly configuration object */ // eslint-disable-next-line
  configuration: {modeBarButtonsToRemove: Array<string>},
  /** Height of plot, in pixels */
  height?: number,
  /** Width of plot, in pixels */
  width?: number,

  /** Name of the x data series */
  xName?: string,
  /** Label for the x data series to display */
  xLabel: string,
  /** Array of tick labels to use */
  xTickLabels: Array<string | number>,
  /** Rotation of x tick labels */
  xTicksRotation: number,
  /** Reverse the x axis? */
  xTicksReverse: boolean,
  /** Prefix to use for x ticks */
  xTicksPrefix: string,
  /** d3 formatting string to format x ticks */
  xTicksFormat: string,
  /** d3 formatting string to format x values */
  xType: string,
  /** Type of range to use for the x axis */
  xRangemode: 'tozero' | 'nonnegative' | 'normal',
  /** x data is a datetime? */
  xIsDate: boolean,
  /** Show x-axis tick labels? */
  xShowTickLabels: boolean,

  /** Names of the y data series */
  yNames: Array<string>,
  /** Label for the y data series to display */
  yLabel: string,
  /** Rotation of y tick labels */
  yTicksRotation: number,
  /** Reverse the y axis? */
  yTicksReverse: boolean,
  /** Prefix to use for y ticks */
  yTicksPrefix: string,
  /** d3 formatting string to format y ticks */
  yTicksFormat: string,
  /** d3 formatting string to format y values on hover */
  yHoverFormat: string,
  /** d3 formatting string to format y values */
  yType: string,
  /** Type of range to use for the y axis */
  yRangemode: 'tozero' | 'nonnegative' | 'normal',
  /** Show y-axis tick labels? */
  yShowTickLabels: boolean,

  /** Padding in pixels */
  padding: number,
  /** Display horizontal lines on the chart? */
  horizontalLines: boolean,
  /** Display vertical lines on the chart? */
  verticalLines: boolean,
  /** Color to make horizontal/vertical lines on the chart */
  gridColor: string,
  /** Color of plot background */
  plotBackgroundColor: string,
  /** Color of paper background */
  paperBackgroundColor: string,
  /** Orientation of chart */
  orientation: 'v' | 'h',
  /** Opacity of data points */
  opacity: number,

  /** Left margin for the plot */
  marginLeft: number,
  /** Top margin for the plot */
  marginTop: number,
  /** Right margin for the plot */
  marginRight: number,
  /** Bottom margin for the plot */
  marginBottom: number,

  /** Display the legend for the chart? */
  showLegend: boolean,
  /** Location of the chart legend, if displayed */
  legendLocation: 'topleft' | 'topright' | 'bottomleft' | 'bottomright',
  /** Background color for the chart legend, if displayed */
  legendBackgroundColor: string,
  /** Border color for the chart legend, if displayed */
  legendBorderColor: string,

  /** Name of the font family to use for text */
  fontFamily: string,
  /** Scaling factor for the font, relative to 1 */
  fontScale: number,
  /** Color to use for the font */
  fontColor: string,

  /** Display a secondary axis? */
  secondaryAxis?: boolean,

  /** ms gap during which only the latest window resize event should cause a redraw */
  resizeDebounce: number,

  /** ms gap during which only the latest redraw requested should occur */
  redrawDebounce: number,

  /** Display the modebar? */
  displayModeBar: boolean,
};

/** SDPlot | The base React Plotly component for plots */
export default class SDPlot extends React.Component {
  props: Props;
  plotComponent: Element;
  redraw: () => void;

  static defaultProps = {
    ...constants.CHART_STYLE_DEFAULTS,
    ...constants.X_AXIS_STYLE_DEFAULTS,
    ...constants.Y_AXIS_STYLE_DEFAULTS,
    ...constants.PAPER_STYLE_DEFAULTS,
    ...constants.LEGEND_STYLE_DEFAULTS,
    ...constants.FONT_STYLE_DEFAULTS,
  };

  constructor(props: Props) {
    super(props);

    this.redraw = debounce(this._redraw, props.redrawDebounce);
  }

  // ***** React lifecycle methods ***** //
  componentDidMount(): void {
    this.redraw();
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    const dataEqual = nextProps.data.values === this.props.data.values;
    const columnsEqual = nextProps.data.columns === this.props.data.columns;
    const indexEqual = nextProps.data.index === this.props.data.index;

    return !dataEqual || !columnsEqual || !indexEqual;
  }

  componentDidUpdate(prevProps: Props): void {
    if (this.props.redrawDebounce !== prevProps.redrawDebounce)
      this.redraw = debounce(this._redraw, this.props.redrawDebounce);

    this.redraw();
  }

  toString(): string {
    return `SDPlot<${this.props.id}>`;
  }

  /** Resize the plot on window resize events */
  plotlyResize(): void {
    const thisNode = this.plotComponent;
    window.addEventListener('resize',
      debounce(() => Plotly.Plots.resize(thisNode), this.props.resizeDebounce));
  }

  /** Redraw the chart when data is updated */
  _redraw(): void {
    const { id, configuration, displayModeBar } = this.props;

    if (document.getElementById(id) !== null) {
      Plotly.newPlot(id, this.chartData, this.layout,
        displayModeBar ? configuration : {displayModeBar});
      this.plotlyResize();
    }
  }

  // --- GETTERS --- //
  /** Plotly layout object */
  get layout(): T_LAYOUT {
    const { title, paperBackgroundColor, plotBackgroundColor, barmode,
      fontFamily, fontScale, fontColor, secondaryAxis, showLegend, bargap,
      height, width } = this.props;

    const layout = {
      title,
      paper_bg_color: paperBackgroundColor,
      plot_bg_color: plotBackgroundColor,
      barmode,
      bargap,
      height,
      width,
      font: {family: fontFamily, size: fontScale * constants.BASE_FONT_SIZE, color: fontColor},
      xaxis: this.xAxisStyle,
      yaxis: this.yAxisStyle,
      legend: this.legend,
      margin: this.margin,
      showlegend: showLegend,
    };

    if (secondaryAxis) {
      // $FlowFixMe
      layout.yaxis2 = this.secondaryAxis;
    }
    return layout;
  }

  /** Plotly x-axis style object */
  get xAxisStyle(): T_AXIS {
    const { xLabel, xTicksReverse, fontScale, xTicksRotation, verticalLines,
      gridColor, paperBackgroundColor, xTicksPrefix, xType, xTicksFormat, xRangemode,
      xShowTickLabels } = this.props;

    let autorange;
    if (xTicksReverse) autorange = 'reversed';
    else autorange = true;

    return {
      title: xLabel,
      autorange,
      titlefont: {size: fontScale * constants.TITLE_FONT_SIZE},
      tickangle: constants.STARTING_FIXED_ROTATION - xTicksRotation,
      tickfont: {size: fontScale * constants.TICK_FONT_SIZE},
      gridcolor: verticalLines ? gridColor : paperBackgroundColor,
      tickprefix: xTicksPrefix,
      type: xType,
      tickformat: xTicksFormat,
      rangemode: xRangemode,
      showticklabels: xShowTickLabels,
    };
  }

  /** Plotly y-axis style object */
  get yAxisStyle(): T_AXIS {
    const { yLabel, yTicksReverse, fontScale, yTicksRotation, horizontalLines,
      gridColor, paperBackgroundColor, yTicksPrefix, yType, yTicksFormat,
      yHoverFormat, yRangemode, yShowTickLabels } = this.props;

    let autorange;
    if (yTicksReverse) autorange = 'reversed';
    else autorange = true;

    return {
      title: yLabel,
      autorange,
      titlefont: {size: fontScale * constants.TITLE_FONT_SIZE},
      tickangle: constants.STARTING_FIXED_ROTATION - yTicksRotation,
      tickfont: {size: fontScale * constants.TICK_FONT_SIZE},
      gridcolor: horizontalLines ? gridColor : paperBackgroundColor,
      tickprefix: yTicksPrefix,
      type: yType,
      tickformat: yTicksFormat,
      hoverformat: yHoverFormat,
      rangemode: yRangemode,
      showticklabels: yShowTickLabels,
    };
  }

  /** Plotly legend style object */
  get legend(): T_LEGEND {
    const { chartType, legendLocation, fontScale, legendBackgroundColor,
      legendBorderColor } = this.props;
    return {
      x: chartType === 'multiple' ? constants.LEGEND_LOCATIONS[legendLocation].x : 1,
      y: constants.LEGEND_LOCATIONS[legendLocation].y,
      font: {size: fontScale * constants.TITLE_FONT_SIZE},
      bgcolor: legendBackgroundColor,
      bordercolor: legendBorderColor,
    };
  }

  /** Plotly margin style object */
  get margin(): T_MARGIN {
    const { padding, marginLeft, marginRight, marginTop, marginBottom } = this.props;
    return {
      l: marginLeft,
      t: marginTop,
      r: marginRight,
      b: marginBottom,
      pad: padding,
    };
  }

  /** Plotly secondary axis style object */
  get secondaryAxis(): T_AXIS_SECONDARY {
    const yAxis2 = {...this.yAxisStyle};
    yAxis2.tickangle = constants.STARTING_FIXED_ROTATION - this.props.yTicksRotation;
    yAxis2.overlaying = 'y';
    yAxis2.title = '';
    yAxis2.side = 'right';

    return yAxis2;
  }

  /** Convert the Immutable.List passed in to the appropriate array format for Plotly.js */
  get chartData(): Array<constants.T_TRACE> {
    const { chartType } = this.props;

    if (chartType === 'multiple')
      return this.chartDataMultiple;

    const { data, traceNames, orientation, xName, xIsDate, xTickLabels,
      palette, secondaryAxis, opacity, yNames, hoverinfo } = this.props;

    if (data.length === 0)  // If we have empty data, let's just skip quickly
      return [];

    let xDate = false;
    if (typeof xName !== 'undefined')
      xDate = xName.toUpperCase() === 'DATE';
    else xDate = xIsDate;

    const yaxis = this.yAxisStyle;

    if (data instanceof Series) {
      // Only plotting one data series
      let xVals;
      if (typeof xTickLabels === 'undefined')
        xVals = xTickLabels;
      else if (xDate)
        xVals = data.index.map(v => utils.dateFromISO(v)).toArray();
      else
        xVals = data.index.toArray();

      return [
        constants.dataToTrace({
          xVals: orientation === 'v' ? xVals : data.values.toArray(),
          yVals: orientation === 'v' ? data.values.toArray() : xVals,
          traceName: traceNames[0],
          color: palette[0],
          chartType,
          orientation,
          yaxis,
          markerColor: palette[0],
          secondaryAxis,
          opacity,
          hoverinfo,
        })];
    } else if (data instanceof DataFrame) {
      // Potentially plotting multiple data series
      let xVals;

      if (typeof xName === 'undefined') {
        xVals = xDate
          ? data.index.map(v => utils.dateFromISO(v)).toArray()
          : data.index.toArray();
      } else {
        xVals = xDate
          ? data.get(xName).values.map(v => utils.dateFromISO(v)).toArray()
          : data.get(xName).values.toArray();
      }

      return yNames.map((yName, idx) => constants.dataToTrace({
        xVals,
        yVals: data.get(yName).values.toArray(),
        traceName: traceNames[idx],
        color: palette[idx],
        chartType,
        orientation,
        yaxis,
        markerColor: palette[idx],
        secondaryAxis,
        opacity,
        hoverinfo}));
    }
    throw new Error('Must be either pandas.Series or pandas.DataFrame');
  }

  /** Convert the Immutable.List for multiple plot to the appropriate array format for Plotly.js */
  get chartDataMultiple(): Array<constants.T_TRACE> {
    const { traceNames, traceTypes, data, yNames, xName, palette,
      orientation, opacity } = this.props;

    if (data instanceof DataFrame && typeof xName === 'string') {
      const xVals = xName.toUpperCase() === 'DATE'
        ? data.index.map(v => utils.dateFromISO(v)).toArray()
        : data.index.toArray();
      return yNames.map((yName, idx) => constants.dataToTrace({
        xVals,
        yVals: data.get(yName).values.toArray(),
        traceName: traceNames[idx],
        color: palette[idx],
        opacity,
        chartType: traceTypes[idx],
        orientation,
        yaxis: idx === 1 ? 'y2' : 'y1',
        markerColor: palette[idx],
        secondaryAxis: idx === 1}));
    }

    throw new Error('Multiple chart must be a DataFrame');
  }

  render() {
    const { className, id } = this.props;
    return (
      <div className={className}>
        <div
          ref={(component) => { this.plotComponent = component; }}
          id={id}
          className={`${className}-inner`}
        />
      </div>
    );
  }
}
