"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pool = void 0;
var _mariadb = _interopRequireDefault(require("mariadb"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var configure = {
  // host: '127.0.0.1',
  host: 'svc.sel4.cloudtype.app',
  user: 'root',
  password: '1234',
  database: 'test',
  connectionLimit: 5,
  port: 30089
};

// DB 연결을 위한 풀 생성
var pool = exports.pool = _mariadb["default"].createPool(configure);