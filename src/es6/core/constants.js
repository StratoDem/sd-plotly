/** @flow
 * StratoDem Analytics : constants
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

import DataFrame from 'pandas-js/dist/core/frame';

import * as styles from './styles';


type T_TRACE_PARAMS = {
  xVals: Array<string | number>,
  yVals: Array<string | number>,
  traceName: string,
  color: string,
  opacity: number,
  mode?: string,
  chartType?: string,
  orientation: 'v' | 'h',
  yaxis?: string | Object,
  markerColor: string,
  hoverinfo?: string,
  secondaryAxis?: boolean,
};
export type T_TRACE = {
  x: Array<string | number>,
  y: Array<string | number>,
  name: string,
  marker: {color: string, opacity: number},
  opacity: number,
  mode?: string,
  type?: string,
  orientation: 'v' | 'h',
  yaxis?: string | Object,
  hoverinfo?: string,
};


export const LEGEND_LOCATIONS = {
  topright: {x: 1.1, y: 1},
  topleft: {x: 0, y: 1},
  bottomleft: {x: 0, y: 0},
  bottomright: {x: 1, y: 0},
};


/** Convert data from params to a Plotly tract object */
export const dataToTrace = (params: T_TRACE_PARAMS): T_TRACE => {
  const trace = {
    x: params.xVals,
    y: params.yVals,
    name: params.traceName,
    marker: {
      color: params.color,
      opacity: params.opacity,
    },
    opacity: params.opacity,
    mode: params.mode,
    type: params.chartType,
    orientation: params.orientation,
    hoverinfo: params.hoverinfo,
  };
  if (params.secondaryAxis) {
    // $FlowFixMe
    trace.yaxis = params.yaxis;
    trace.marker.color = params.markerColor;
  }

  return trace;
};


export const MARGIN_WITH_LEGEND = {left: 60, top: 50, right: 50, bottom: 60};
export const MARGIN_WITHOUT_LEGEND = {left: 60, top: 20, right: 10, bottom: 50};


/** X AXIS STYLE */
export const X_AXIS_STYLE_DEFAULTS = {
  xLabel: '',
  xTickLabels: [],
  xTicksRotation: 0,
  xTicksReverse: false,
  xTicksPrefix: '',
  xType: '-',
  xTicksFormat: '',
  xRangemode: 'normal',
  xShowTickLabels: true,
  xIsDate: false,
};

/** Y AXIS STYLE */
export const Y_AXIS_STYLE_DEFAULTS = {
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
  yShowTickLabels: true,
};

/** PAPER_STYLE */
export const PAPER_STYLE_DEFAULTS = {
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
  padding: 0,
};

/** LEGEND STYLE */
export const LEGEND_STYLE_DEFAULTS = {
  showLegend: false,
  legendLocation: 'topright',
  legendBackgroundColor: '#FFFFFF',
  legendBorderColor: '#FFFFFF',
};

export const FONT_STYLE_DEFAULTS = {
  fontFamily: 'adelle-sans',
  fontScale: 1,
  fontColor: '#000000',
};


const PLOTLY_CONFIGURATION = {
  modeBarButtonsToRemove: [
    'sendDataToCloud',
    'zoom2d',
    'pan2d',
    'lasso2d',
    'zoomIn2d',
    'zoomOut2d',
    'autoScale2d',
    'toggleSpikelines',
  ],
};

export const CHART_STYLE_DEFAULTS = {
  className: 'main-graph-inner',
  chartType: 'scatter',
  data: new DataFrame([]),
  title: '',
  traceNames: [],
  secondaryAxis: false,
  palette: styles.PALETTE_MATERIAL,
  configuration: PLOTLY_CONFIGURATION,
  resizeDelay: 500,
  hoverinfo: 'all',
  displayModeBar: true,
};

export const BASE_FONT_SIZE = 16;
export const TITLE_FONT_SIZE = 14;
export const TICK_FONT_SIZE = 11;
export const STARTING_FIXED_ROTATION = 360;
