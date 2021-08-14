"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var port = _app["default"].get('port');

_app["default"].listen(port);

console.log('server on port', port);