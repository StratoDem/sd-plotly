/** @flow
 * StratoDem Analytics : scatter
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */


import React from 'react';

// --- LOCAL IMPORTS --- //
import { SDPlot, utils } from '../core';
import type { Props } from '../core';


/** ScatterPlot | A React Plotly component extending SDPlot for scatter plots */
export default class ScatterPlot extends React.PureComponent {
  props: Props;

  static defaultProps = SDPlot.defaultProps;

  render() {
    return (
      <SDPlot
        {...{...this.props, chartType: utils.webGLSupported() ? 'scattergl' : 'scatter'}}
      />);
  }
}
