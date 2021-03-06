"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _path = _interopRequireDefault(require("path"));

var _objectives = _interopRequireDefault(require("./objectives.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const configs = {
  caminho: "build",
  forcarHTTPS: false,
  port: process.env.PORT || 3000
};
const app = (0, _express.default)();
const routes = (0, _express.Router)();
routes.use((req, res, next) => {
  next();
});
routes.use('/objectives', _objectives.default);
routes.use('/objetivos', _express.default.static(configs.caminho), () => {
  routes.get("*", (req, res) => {
    console.log('Hello, nothing here.');
  });
});
routes.use('/', _express.default.static(configs.caminho), () => {
  routes.get("*", (req, res) => {
    res.sendFile(_path.default.join(__dirname, '..', '..', configs.caminho, "index.html"));
  });
});
var _default = routes;
exports.default = _default;