"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Objectives = _interopRequireDefault(require("../models/Objectives"));

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ObjectivesRepository = (_dec = (0, _typeorm.EntityRepository)(_Objectives.default), _dec(_class = class ObjectivesRepository extends _typeorm.Repository {
  async findByEmail(email) {
    const findByEmail = await this.find({
      where: {
        email
      }
    });
    return findByEmail || [];
  }

}) || _class);
var _default = ObjectivesRepository;
exports.default = _default;