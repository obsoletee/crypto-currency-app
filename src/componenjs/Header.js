"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;
var _react = _interopRequireDefault(require("react"));
require("../css/header.css");
var _btc2xicon = _interopRequireDefault(require("/btc2xicon.png"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Header() {
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container__info"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container__info__title"
  }, "CryptoApp"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container__info__logo"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _btc2xicon.default,
    alt: "logo"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "container__crypto"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container__crypto__elem"
  }, "BTC"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container__crypto__elem"
  }, "ETH"), /*#__PURE__*/_react.default.createElement("div", {
    className: "container__crypto__elem"
  }, "BNB"))));
}