"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProductById = exports.deleteProduct = exports.getProductById = exports.CreateNewProducts = exports.getProducts = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = require("../database");

var getProducts = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _database.getConnection)();

          case 3:
            pool = _context.sent;
            _context.next = 6;
            return pool.request().query(_database.queries.getAllProducts);

          case 6:
            result = _context.sent;
            res.json(result.recordset);
            (0, _database.closeConnetion)();
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            res.status(500).send(_context.t0.message);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function getProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getProducts = getProducts;

var CreateNewProducts = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, id, name, description, quantity, pool, result;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, name = _req$body.name, description = _req$body.description;
            quantity = req.body.quantity;
            if (quantity === undefined) quantity = 0;

            if (!(name === null || description === null || id === null)) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              msg: "bad request, please fill all fields"
            }));

          case 7:
            _context2.prev = 7;
            _context2.next = 10;
            return (0, _database.getConnection)();

          case 10:
            pool = _context2.sent;
            _context2.next = 13;
            return pool.request().input("Id", id).query(_database.queries.getProductsById);

          case 13:
            result = _context2.sent;

            if (!(result.rowsAffected[0] != 0)) {
              _context2.next = 19;
              break;
            }

            res.status(400).send("The product with id: ".concat(id, " already exists, if you want can update it"));
            (0, _database.closeConnetion)();
            _context2.next = 23;
            break;

          case 19:
            _context2.next = 21;
            return pool.request().input("id", _database.sql.Int, id).input("name", _database.sql.VarChar, name).input("description", _database.sql.Text, description).input("quantity", _database.sql.Int, quantity).query(_database.queries.createNewProduct);

          case 21:
            (0, _database.closeConnetion)();
            res.json("New product created ".concat(name, " ").concat(description, " ").concat(quantity));

          case 23:
            _context2.next = 28;
            break;

          case 25:
            _context2.prev = 25;
            _context2.t0 = _context2["catch"](7);
            res.status(500).send(_context2.t0.message);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[7, 25]]);
  }));

  return function CreateNewProducts(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.CreateNewProducts = CreateNewProducts;

var getProductById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context3.sent;
            _context3.next = 7;
            return pool.request().input("Id", id).query(_database.queries.getProductsById);

          case 7:
            result = _context3.sent;
            (0, _database.closeConnetion)();

            if (!(result.rowsAffected[0] === 0)) {
              _context3.next = 13;
              break;
            }

            return _context3.abrupt("return", res.send("Product was not found with id: ".concat(id)));

          case 13:
            return _context3.abrupt("return", res.json(result.recordset[0]));

          case 14:
            _context3.next = 19;
            break;

          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](1);
            res.status(500).send(_context3.t0.message);

          case 19:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 16]]);
  }));

  return function getProductById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //Delete product by id from database


exports.getProductById = getProductById;

var deleteProduct = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, pool, result, name;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return (0, _database.getConnection)();

          case 4:
            pool = _context4.sent;
            _context4.next = 7;
            return pool.request().input("Id", id).query(_database.queries.getProductsById);

          case 7:
            result = _context4.sent;

            if (result.rowsAffected[0] === 0) {
              res.send("Product with id: ".concat(id, " was not found"));
            } else {
              name = result.recordset[0].name;
              res.send("Product: ".concat(name, " with id: ").concat(id, " was deleted"));
            }

            _context4.next = 11;
            return pool.request().input("Id", id).query(_database.queries.deleteProductById);

          case 11:
            (0, _database.closeConnetion)();
            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](1);
            res.status(500).send(_context4.t0.message);

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 14]]);
  }));

  return function deleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //Update Product


exports.deleteProduct = deleteProduct;

var updateProductById = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, name, description, quantity, id, pool, result;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, quantity = _req$body2.quantity;
            id = req.params.id;

            if (!(name == undefined || description == null || id == null || quantity == null)) {
              _context5.next = 4;
              break;
            }

            return _context5.abrupt("return", res.status(400).json({
              msg: "bad request, please fill all fields"
            }));

          case 4:
            _context5.prev = 4;
            _context5.next = 7;
            return (0, _database.getConnection)();

          case 7:
            pool = _context5.sent;
            _context5.next = 10;
            return pool.request().input("Id", id).query(_database.queries.getProductsById);

          case 10:
            result = _context5.sent;
            _context5.next = 13;
            return pool.request().input("id", id).input("name", _database.sql.VarChar, name).input("description", _database.sql.Text, description).input("quantity", _database.sql.Int, quantity).query(_database.queries.updateProduct);

          case 13:
            (0, _database.closeConnetion)();

            if (!(result.rowsAffected[0] === 0)) {
              _context5.next = 18;
              break;
            }

            return _context5.abrupt("return", res.send("The product with id: ".concat(id, " was not found.")));

          case 18:
            return _context5.abrupt("return", res.send("The product: ".concat(name, " by id:").concat(id, " was update")));

          case 19:
            _context5.next = 23;
            break;

          case 21:
            _context5.prev = 21;
            _context5.t0 = _context5["catch"](4);

          case 23:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[4, 21]]);
  }));

  return function updateProductById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateProductById = updateProductById;