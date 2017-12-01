"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PALETTE_MAP = exports.PALETTE_KEY_MATERIAL = exports.PALETTE_KEY_REDS = exports.PALETTE_KEY_PURPLES = exports.PALETTE_KEY_INDIGO = exports.PALETTE_MATERIAL = undefined;

var _immutable = require("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PURPLE_400 = "#7E57C2";
var PURPLE_700 = "#512DA8";
var PURPLE_200 = "#B39DDB";
var INDIGO_400 = "#5C6BC0";
var INDIGO_700 = "#303F9F";
var INDIGO_200 = "#9FA8DA";
var BLUE_400 = "#42A5F5";
var BLUE_700 = "#1976D2";
var BLUE_200 = "#90CAF9";
var TEAL_400 = '#26A69A';
var TEAL_700 = '#00796B';
var TEAL_200 = '#80CBC4';
var AMBER_400 = '#FFCA28';
var AMBER_700 = '#FFA000';
var AMBER_200 = '#FFE082';
var DEEPORANGE_400 = '#FF7043';
var DEEPORANGE_700 = '#E64A19';
var DEEPORANGE_200 = '#FFAB91';
var RED_400 = '#EF5350';
var RED_700 = '#D32F2F';
var RED_200 = '#EF9A9A';

var PALETTE_MATERIAL = exports.PALETTE_MATERIAL = [PURPLE_400, BLUE_400, TEAL_400, AMBER_400, DEEPORANGE_400, RED_400, PURPLE_700, BLUE_700, TEAL_700, AMBER_700, DEEPORANGE_700, RED_700, PURPLE_200, BLUE_200, TEAL_200, AMBER_200, DEEPORANGE_200, RED_200];

var PALETTE_PURPLES_ASCENDING = ['#FFF0FF', '#FDD6FF', '#E4BDFF', '#CBA4FF', '#B18AF5', '#9871DC', PURPLE_400, '#653EA9', '#4B248F', '#320B76', '#18005C', '#000043', '#000029'];

var PALETTE_INDIGO_ASCENDING = ['#F8FDFF', '#DFE4FF', '#C5CAE9', '#9FA8DA', '#7986CB', INDIGO_400, '#3F51B5', '#3949AB', '#303F9F', '#293593', '#1A237E', '#010A65', '#00004B', '#000032', '#000018'];

var PALETTE_REDS_ASCENDING = ['#FFEEEE', '#FFAEAE', '#FF9595', '#FF7C7C', '#FF6262', '#ED4949', RED_400, '#BA1616', '#A00000', '#870000', '#6D0000', '#600000', '#540000', '#3A0000', '#140000'];

var PALETTE_MATERIAL_ASCENDING = [PURPLE_400, BLUE_400, TEAL_400, AMBER_400, DEEPORANGE_400, RED_400, PURPLE_700, BLUE_700, TEAL_700, AMBER_700, DEEPORANGE_700, RED_700];

var PALETTE_PURPLES_ASCENDING_BY_SIZE_MAP = _immutable2.default.Map([[2, [PALETTE_PURPLES_ASCENDING[5], PALETTE_PURPLES_ASCENDING[10]]], [3, [PALETTE_PURPLES_ASCENDING[3], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[12]]], [4, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[12]]], [5, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[5], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[12]]], [6, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4], PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[12]]], [7, [PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4], PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[9], PALETTE_PURPLES_ASCENDING[11], PALETTE_PURPLES_ASCENDING[12]]], [8, [PALETTE_PURPLES_ASCENDING[0], PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4], PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[8], PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[11], PALETTE_PURPLES_ASCENDING[12]]], [9, [PALETTE_PURPLES_ASCENDING[0], PALETTE_PURPLES_ASCENDING[2], PALETTE_PURPLES_ASCENDING[4], PALETTE_PURPLES_ASCENDING[6], PALETTE_PURPLES_ASCENDING[7], PALETTE_PURPLES_ASCENDING[9], PALETTE_PURPLES_ASCENDING[10], PALETTE_PURPLES_ASCENDING[11], PALETTE_PURPLES_ASCENDING[12]]]]);

var PALETTE_INDIGO_ASCENDING_BY_SIZE_MAP = _immutable2.default.Map([[2, [PALETTE_INDIGO_ASCENDING[5], PALETTE_INDIGO_ASCENDING[10]]], [3, [PALETTE_INDIGO_ASCENDING[3], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[13]]], [4, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[10], PALETTE_INDIGO_ASCENDING[14]]], [5, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[5], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[11], PALETTE_INDIGO_ASCENDING[14]]], [6, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4], PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[10], PALETTE_INDIGO_ASCENDING[12]]], [7, [PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4], PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[10], PALETTE_INDIGO_ASCENDING[12], PALETTE_INDIGO_ASCENDING[14]]], [8, [PALETTE_INDIGO_ASCENDING[0], PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4], PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[8], PALETTE_INDIGO_ASCENDING[10], PALETTE_INDIGO_ASCENDING[12], PALETTE_INDIGO_ASCENDING[14]]], [9, [PALETTE_INDIGO_ASCENDING[0], PALETTE_INDIGO_ASCENDING[2], PALETTE_INDIGO_ASCENDING[4], PALETTE_INDIGO_ASCENDING[6], PALETTE_INDIGO_ASCENDING[7], PALETTE_INDIGO_ASCENDING[9], PALETTE_INDIGO_ASCENDING[11], PALETTE_INDIGO_ASCENDING[13], PALETTE_INDIGO_ASCENDING[14]]]]);

var PALETTE_REDS_ASCENDING_BY_SIZE_MAP = _immutable2.default.Map([[2, [PALETTE_REDS_ASCENDING[5], PALETTE_REDS_ASCENDING[10]]], [3, [PALETTE_REDS_ASCENDING[3], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[13]]], [4, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[10], PALETTE_REDS_ASCENDING[14]]], [5, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[5], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[11], PALETTE_REDS_ASCENDING[14]]], [6, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4], PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[10], PALETTE_REDS_ASCENDING[12]]], [7, [PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4], PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[10], PALETTE_REDS_ASCENDING[12], PALETTE_REDS_ASCENDING[14]]], [8, [PALETTE_REDS_ASCENDING[0], PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4], PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[8], PALETTE_REDS_ASCENDING[10], PALETTE_REDS_ASCENDING[12], PALETTE_REDS_ASCENDING[14]]], [9, [PALETTE_REDS_ASCENDING[0], PALETTE_REDS_ASCENDING[2], PALETTE_REDS_ASCENDING[4], PALETTE_REDS_ASCENDING[6], PALETTE_REDS_ASCENDING[7], PALETTE_REDS_ASCENDING[9], PALETTE_REDS_ASCENDING[11], PALETTE_REDS_ASCENDING[13], PALETTE_REDS_ASCENDING[14]]]]);

var PALETTE_MATERIAL_ASCENDING_BY_SIZE_MAP = _immutable2.default.Map(_immutable2.default.Range(2, 10).map(function (idx) {
  return [idx, PALETTE_MATERIAL_ASCENDING.slice(0, idx)];
}).toList());

var PALETTE_KEY_INDIGO = exports.PALETTE_KEY_INDIGO = 'Indigo';
var PALETTE_KEY_PURPLES = exports.PALETTE_KEY_PURPLES = 'Purples';
var PALETTE_KEY_REDS = exports.PALETTE_KEY_REDS = 'Reds';
var PALETTE_KEY_MATERIAL = exports.PALETTE_KEY_MATERIAL = 'Qualitative';

var PALETTE_MAP = exports.PALETTE_MAP = _immutable2.default.OrderedMap([[PALETTE_KEY_INDIGO, PALETTE_INDIGO_ASCENDING_BY_SIZE_MAP], [PALETTE_KEY_PURPLES, PALETTE_PURPLES_ASCENDING_BY_SIZE_MAP], [PALETTE_KEY_MATERIAL, PALETTE_MATERIAL_ASCENDING_BY_SIZE_MAP], [PALETTE_KEY_REDS, PALETTE_REDS_ASCENDING_BY_SIZE_MAP]]);