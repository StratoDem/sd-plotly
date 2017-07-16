/**
 * StratoDem Analytics : bar.test
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

import Immutable from 'immutable';
import React from 'react';

import { render, shallow } from 'enzyme';
import DataFrame from 'pandas-js/dist/core/frame';
import Series from 'pandas-js/dist/core/series';

// --- LOCAL IMPORTS --- //
import SDPlot from '../../core/_sdplot';
import BarPlot from '../bar';


describe('<BarPlot />', () => {
  describe('rendering', () => {
    it('Renders properly', () => {
      const data = new DataFrame(Immutable.Map({
        x: new Series([1, 2, 3, 4]),
        y: new Series([2, 3, 4, 5]),
      }));
      const plot = render(<BarPlot
        id="test-id"
        className="main-graph"
        data={data}
        yNames={['x', 'y']}
      />);

      expect(plot.find('.main-graph').length).toEqual(1);
      expect(plot.find('.main-graph').find('#test-id').length).toEqual(1);
      expect(plot.find('.main-graph').find('.main-graph-inner').length).toEqual(1);
    });

    it('Has the right data after render', () => {
      const data = new DataFrame(Immutable.Map({
        x: new Series([1, 2, 3, 4]),
        y: new Series([2, 3, 4, 5]),
      }));
      const plot = shallow(<BarPlot
        id="test-id"
        className="main-graph"
        data={data}
        yNames={['x', 'y']}
      />);
      const chartJSON = plot.find(SDPlot).shallow().instance().chartData;

      expect(chartJSON).toBeInstanceOf(Array);
      expect(chartJSON.length).toEqual(2);
      expect(chartJSON[0]).toBeInstanceOf(Object);

      expect(chartJSON[0].x).toEqual([0, 1, 2, 3]);
      expect(chartJSON[0].y).toEqual([1, 2, 3, 4]);

      expect(chartJSON[1].x).toEqual([0, 1, 2, 3]);
      expect(chartJSON[1].y).toEqual([2, 3, 4, 5]);
    });
  });

  describe('layout', () => {
    const title = 'Test title';
    const fontFamily = 'Test font family';
    const fontScale = 2;
    const fontColor = 'blue';
    const showLegend = true;
    const secondaryAxis = false;
    const paperBackgroundColor = 'black';
    const plotBackgroundColor = 'red';

    const xLabel = 'Test x label';
    const xTicksReverse = false;
    const xTicksRotation = 0;
    const horizontalLines = true;
    const verticalLines = false;
    const gridColor = 'orange';
    const xTicksPrefix = 'test x prefix';
    const xType = '.1%';
    const xTicksFormat = '.0%';
    const xRangemode = 'tozero';

    const yLabel = 'Test y label';
    const yTicksReverse = false;
    const yTicksRotation = 0;
    const yTicksPrefix = 'test y prefix';
    const yType = '.1%';
    const yTicksFormat = '.0%';
    const yRangemode = 'tozero';
    const yHoverFormat = '.2f';

    const legendLocation = 'topright';
    const legendBackgroundColor = 'pink';
    const legendBorderColor = 'orange-red';

    const data = new DataFrame(Immutable.Map({
      x: new Series([1, 2, 3, 4]),
      y: new Series([2, 3, 4, 5]),
    }));

    const plot = shallow(<BarPlot
      id="test-id"
      className="main-graph"
      data={data}
      yNames={['x', 'y']}
      title={title}
      fontFamily={fontFamily}
      fontScale={fontScale}
      fontColor={fontColor}
      showLegend={showLegend}
      secondaryAxis={secondaryAxis}
      paperBackgroundColor={paperBackgroundColor}
      plotBackgroundColor={plotBackgroundColor}
      xLabel={xLabel}
      xTicksReverse={xTicksReverse}
      xTicksRotation={xTicksRotation}
      xTicksPrefix={xTicksPrefix}
      verticalLines={verticalLines}
      horizontalLines={horizontalLines}
      gridColor={gridColor}
      xType={xType}
      xTicksFormat={xTicksFormat}
      xRangemode={xRangemode}

      yLabel={yLabel}
      yTicksReverse={yTicksReverse}
      yTicksRotation={yTicksRotation}
      yTicksPrefix={yTicksPrefix}
      yType={yType}
      yTicksFormat={yTicksFormat}
      yRangemode={yRangemode}
      yHoverFormat={yHoverFormat}

      legendLocation={legendLocation}
      legendBackgroundColor={legendBackgroundColor}
      legendBorderColor={legendBorderColor}
    />);

    const plotInstance = plot.find(SDPlot).shallow().instance();

    it('has the correct layout', () => {
      const chartLayout = plotInstance.layout;
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

    it('has the proper x axis styling', () => {
      const xAxisStyle = plotInstance.xAxisStyle;
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

    it('has the proper y axis styling', () => {
      const yAxisStyle = plotInstance.yAxisStyle;
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

    it('has the proper legend', () => {
      const legend = plotInstance.legend;
      expect(legend).toBeInstanceOf(Object);

      expect(legend.x).toEqual(1);
      expect(legend.y).toEqual(1);
      expect(legend.font.size).toEqual(fontScale * 14);
      expect(legend.bgcolor).toEqual(legendBackgroundColor);
      expect(legend.bordercolor).toEqual(legendBorderColor);
    });

    it('has the proper margin', () => {
      const margin = plotInstance.margin;
      expect(margin).toBeInstanceOf(Object);

      expect(margin.l).toEqual(60);
      expect(margin.t).toEqual(20);
      expect(margin.r).toEqual(10);
      expect(margin.b).toEqual(50);
      expect(margin.pad).toEqual(0);
    });
  });

  describe('React Lifecycle Methods', () => {
    describe('shouldComponentUpdate', () => {
      const data = new DataFrame(Immutable.Map({
        x: new Series([1, 2, 3, 4]),
        y: new Series([2, 3, 4, 5]),
      }));
      const plot = shallow(<BarPlot
        id="test-id"
        className="main-graph"
        data={data}
        yNames={['x', 'y']}
      />);

      it('Returns false if the DataFrame is equal', () => {
        const plotInstance = plot.find(SDPlot).shallow().instance();

        expect(plotInstance.shouldComponentUpdate({data})).toEqual(false);
      });

      it('Returns true if the DataFrame is different', () => {
        const plotInstance = plot.find(SDPlot).shallow().instance();

        expect(plotInstance.shouldComponentUpdate({
          data: new DataFrame([{x: 1, y: 2}]),
        })).toEqual(true);
      });
    });
  });
});
