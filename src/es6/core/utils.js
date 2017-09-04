/** @flow
 * StratoDem Analytics : utils
 * Principal Author(s) : Michael Clawar
 * Secondary Author(s) :
 * Description :
 *
 *  (c) 2016- StratoDem Analytics, LLC
 *  All Rights Reserved
 */

/** Convert a string ISO date to a date string */
export const dateFromISO = (isoDate: string): string =>
  new Date(isoDate).toISOString().split('T')[0];


/** Return true if the browser supports WebGL */
export const webGLSupported = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext // $FlowFixMe
      && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (e) { return false; }
};
