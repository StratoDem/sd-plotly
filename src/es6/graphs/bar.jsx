/** @flow
 * StratoDem Analytics : bar
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


/** Bar | A React Plotly component extending SDPlot for bar plots */
export default class BarPlot extends React.PureComponent {
  props: Props;

  static defaultProps = SDPlot.defaultProps;

  render() {
    return (
      <SDPlot
        {...{...this.props, chartType: 'bar'}}
      />);
  }
}
