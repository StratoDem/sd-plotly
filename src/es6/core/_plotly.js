/**
 * StratoDem Analytics : _plotly
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

import Plotly from 'plotly.js/lib/core';
import Scatter from 'plotly.js/lib/scatter';
import Bar from 'plotly.js/lib/bar';
import Histogram from 'plotly.js/lib/histogram';


// Register the trace types with Plotly
Plotly.register([
  Scatter,
  Bar,
  Histogram,
]);

export default Plotly;
