"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateData = exports.logMessage = exports.getResponseJson = exports.failJson = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// log
var logMessage = exports.logMessage = function logMessage(level, message, err) {
  var levels = {
    info: 'INFO',
    warn: 'WARN',
    error: 'ERROR'
  };
  console.log("[".concat(levels[level], "] ").concat(message).concat(err ? ": ".concat(err.message || err) : ''));
};
var failJson = exports.failJson = {
  success: false,
  message: 'error'
};
var validateData = exports.validateData = function validateData(data) {
  if (_typeof(data) !== 'object') {
    throw new Error('Invalid data type');
  }
  var keys = Object.keys(data);
  keys.forEach(function (key) {
    if (data[key] === undefined || data[key] === null) {
      throw new Error("Invalid value for ".concat(key));
    }
  });
  return data;
};

// response json
var getResponseJson = exports.getResponseJson = function getResponseJson(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'success' : _ref$message,
    data = _ref.data,
    totalCount = _ref.totalCount;
  var response = {
    success: true,
    message: message
  };
  if (data != null) {
    response.data = data;
  }
  if (totalCount >= 0) {
    response.totalCount = totalCount;
  }
  return response;
};