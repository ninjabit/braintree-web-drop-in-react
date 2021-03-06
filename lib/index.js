"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _braintreeWebDropIn = _interopRequireDefault(require("braintree-web-drop-in"));

var DropIn =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(DropIn, _React$Component);

  function DropIn() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, DropIn);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(DropIn)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "wrapper", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "instance", void 0);
    return _this;
  }

  (0, _createClass2["default"])(DropIn, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _braintreeWebDropIn["default"].create((0, _objectSpread2["default"])({
                  container: _reactDom["default"].findDOMNode(this.wrapper)
                }, this.props.options));

              case 2:
                this.instance = _context.sent;

                if (this.props.onNoPaymentMethodRequestable) {
                  this.instance.on("noPaymentMethodRequestable", this.props.onNoPaymentMethodRequestable);
                }

                if (this.props.onPaymentMethodRequestable) {
                  this.instance.on("paymentMethodRequestable", this.props.onPaymentMethodRequestable);
                }

                if (this.props.onPaymentOptionSelected) {
                  this.instance.on("paymentOptionSelected", this.props.onPaymentOptionSelected);
                }

                if (this.props.onInstance) {
                  this.props.onInstance(this.instance);
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "componentWillUnmount",
    value: function () {
      var _componentWillUnmount = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.instance) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.instance.teardown();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillUnmount() {
        return _componentWillUnmount.apply(this, arguments);
      }

      return componentWillUnmount;
    }()
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // Static
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement("div", {
        ref: function ref(_ref) {
          return _this2.wrapper = _ref;
        }
      });
    }
  }]);
  return DropIn;
}(_react["default"].Component);

exports["default"] = DropIn;
(0, _defineProperty2["default"])(DropIn, "displayName", "BraintreeWebDropIn");
(0, _defineProperty2["default"])(DropIn, "propTypes", {
  options: _propTypes["default"].object.isRequired,
  preselectVaultedPaymentMethod: _propTypes["default"].bool,
  onInstance: _propTypes["default"].func,
  onNoPaymentMethodRequestable: _propTypes["default"].func,
  onPaymentMethodRequestable: _propTypes["default"].func,
  onPaymentOptionSelected: _propTypes["default"].func
});
(0, _defineProperty2["default"])(DropIn, "defaultProps", {
  preselectVaultedPaymentMethod: true
});
//# sourceMappingURL=index.js.map