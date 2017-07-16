/** @flow
 * StratoDem Analytics : histogram
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

import React from 'react';

// --- LOCAL IMPORTS --- //
import { SDPlot } from '../core';
import type { Props } from '../core';


/** HistogramPlot | A React Plotly component extending SDPlot for histogram plots */
export default class HistogramPlot extends React.PureComponent {
  props: Props;

  static defaultProps = SDPlot.defaultProps;

  render() {
    return (
      <SDPlot
        {...{...this.props, chartType: 'histogram'}}
      />);
  }
}
