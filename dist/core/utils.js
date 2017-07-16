'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dateFromISO = exports.dateFromISO = function dateFromISO(isoDate) {
  return new Date(isoDate).toISOString().split('T')[0];
};

var webGLSupported = exports.webGLSupported = function webGLSupported() {
  try {
    var canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (e) {
    return false;
  }
};