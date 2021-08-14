"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  port: process.env.PORT || 4000,
  db_user: process.env.DB_USER || "",
  db_password: process.env.DB_PASSWORD || "",
  db_server: process.env.DB_SERVER || "",
  db_database: process.env.DB_DATABASE || ""
};
exports["default"] = _default;