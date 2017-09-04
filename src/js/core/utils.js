'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/** 
 * StratoDem Analytics : utils
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

/** Convert a string ISO date to a date string */
var dateFromISO = exports.dateFromISO = function dateFromISO(isoDate) {
  return new Date(isoDate).toISOString().split('T')[0];
};

/** Return true if the browser supports WebGL */
var webGLSupported = exports.webGLSupported = function webGLSupported() {
  try {
    var canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext // $FlowFixMe
    && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (e) {
    return false;
  }
};

//# sourceMappingURL=utils.js.map