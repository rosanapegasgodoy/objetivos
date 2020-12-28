"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents.default.div`
  height: 100%;
  min-height: 100vh;
  background: #f3f7f9;
  width: 100%;
  min-width: 1000px;
`;
exports.Container = Container;