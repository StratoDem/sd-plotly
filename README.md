# sd-plotly
React implementations of Plotly with Immutable for rendering logic 


## Installation and use
`sd-plotly` requires [`pandas-js`](https://github.com/StratoDem/pandas-js) `DataFrame` or `Series` objects for plotting in order to make rendering logic faster for API-based visualization. 

```
npm install sd-plotly pandas-js
```

Importing 
[`BarPlot`](#BarPlot)

```js
import ReactDOM from 'react-dom'; 
import { BarPlot } from 'sd-plotly';
import { DataFrame } from 'pandas-js';

const component = <BarPlot 
    id="my-id-to-render-into"
    data={new DataFrame([{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}])}
    xName="x"
    yNames=["y"]
    xTickLabels=["One", "Two", "Three"]
    yType="$,.0f"
    yTicksFormat="$,.0f"
/>;

ReactDOM.render(component, myDocumentElement);
```

## Components

### ScatterPlot

### BarPlot

### SDPlot
The base React Plotly component for plots

#### Props
|Prop|Type|Description|
|----|----|-----------|
`bargap`|`number`|Gap between the bars in barplot|
`barmode`|`union`|Type of bar chart to plot|
`chartType`|`union`|Type of chart|
`className`|`string`|class to give to SDPlot div|
`configuration`|`signature`|Plot.ly configuration object|
`data`|`union`|Data to render in the plot|
`displayModeBar`|`boolean`|Display the modebar?|
`fontColor`|`string`|Color to use for the font|
`fontFamily`|`string`|Name of the font family to use for text|
`fontScale`|`number`|Scaling factor for the font, relative to 1|
`gridColor`|`string`|Color to make horizontal/vertical lines on the chart|
`height`|`number`|Height of plot, in pixels|
`horizontalLines`|`boolean`|Display horizontal lines on the chart?|
`hoverinfo`|`string`|Hover info format https://plot.ly/javascript/reference/#scatter-hoverinfo|
`id`|`string`|Div id with which to render the SDPlot|
`legendBackgroundColor`|`string`|Background color for the chart legend, if displayed|
`legendBorderColor`|`string`|Border color for the chart legend, if displayed|
`legendLocation`|`union`|Location of the chart legend, if displayed|
`marginBottom`|`number`|Bottom margin for the plot|
`marginLeft`|`number`|Left margin for the plot|
`marginRight`|`number`|Right margin for the plot|
`marginTop`|`number`|Top margin for the plot|
`opacity`|`number`|Opacity of data points|
`orientation`|`union`|Orientation of chart|
`padding`|`number`|Padding in pixels|
`palette`|`Array`|Array of colors to use for the traces|
`paperBackgroundColor`|`string`|Color of paper background|
`plotBackgroundColor`|`string`|Color of plot background|
`redrawDebounce`|`number`|ms gap during which only the latest redraw requested should occur|
`resizeDebounce`|`number`|ms gap during which only the latest window resize event should cause a redraw|
`secondaryAxis`|`boolean`|Include a secondary axis?|
`showLegend`|`boolean`|Display the legend for the chart?|
`title`|`string`|Title of the chart|
`traceNames`|`Array`|Names for each of the traces|
`traceTypes`|`Array`|Types of each of the traces in the plot|
`verticalLines`|`boolean`|Display vertical lines on the chart?|
`width`|`number`|Width of plot, in pixels|
`xIsDate`|`boolean`|x data is a datetime?|
`xLabel`|`string`|Label for the x data series to display|
`xName`|`string`|Name of the x data series|
`xRangemode`|`union`|Type of range to use for the x axis|
`xShowTickLabels`|`boolean`|Show x-axis tick labels?|
`xTickLabels`|`Array`|Array of tick labels to use|
`xTicksFormat`|`string`|d3 formatting string to format x ticks|
`xTicksPrefix`|`string`|Prefix to use for x ticks|
`xTicksReverse`|`boolean`|Reverse the x axis?|
`xTicksRotation`|`number`|Rotation of x tick labels|
`xType`|`string`|d3 formatting string to format x values|
`yHoverFormat`|`string`|d3 formatting string to format y values on hover|
`yLabel`|`string`|Label for the y data series to display|
`yNames`|`Array`|Names of the y data series|
`yRangemode`|`union`|Type of range to use for the y axis|
`yShowTickLabels`|`boolean`|Show y-axis tick labels?|
`yTicksFormat`|`string`|d3 formatting string to format y ticks|
`yTicksPrefix`|`string`|Prefix to use for y ticks|
`yTicksReverse`|`boolean`|Reverse the y axis?|
`yTicksRotation`|`number`|Rotation of y tick labels|
`yType`|`string`|d3 formatting string to format y values|


#### Methods
##### toString

Returns

string
```js

```
##### plotlyResize
Resize the plot on window resize events

##### _redraw
Redraw the chart when data is updated

##### layout
Plotly layout object

Returns

signature
```js
{
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
}
```
##### xAxisStyle
Plotly x-axis style object

Returns

signature
```js
{
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
}
```
##### yAxisStyle
Plotly y-axis style object

Returns

signature
```js
{
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
}
```
##### legend
Plotly legend style object

Returns

signature
```js
{
  x: number,
  y: number,
  font: {size: number},
  bgcolor: string,
  bordercolor: string,
}
```
##### margin
Plotly margin style object

Returns

signature
```js
{
  l: number,
  t: number,
  r: number,
  b: number,
  pad: number
}
```
##### secondaryAxis
Plotly secondary axis style object

Returns

intersection
```js
T_AXIS & {
  overlaying: 'y',
  side: 'right',
}
```
##### chartData
Convert the Immutable.List passed in to the appropriate array format for Plotly.js

Returns

Array
```js
Array<constants.T_TRACE>
```
##### chartDataMultiple
Convert the Immutable.List for multiple plot to the appropriate array format for Plotly.js

Returns

Array
```js
Array<constants.T_TRACE>
```

## Development

### Testing and build
```
$ npm run test
$ npm run build
```
Testing uses [Jest](https://facebook.github.io/jest/). Building requires the babel compiler.
