"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = _axios.default.create({
  baseURL: 'https://edukatech-com-br.umbler.net/'
});

var _default = api;
exports.default = _default;