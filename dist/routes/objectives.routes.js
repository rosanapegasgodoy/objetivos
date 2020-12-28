"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _CreateObjectiveService = _interopRequireDefault(require("../services/CreateObjectiveService"));

var _typeorm = require("typeorm");

var _Objectives = _interopRequireDefault(require("../models/Objectives"));

var _ObjectivesRepository = _interopRequireDefault(require("../repositories/ObjectivesRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const objectivesRouter = (0, _express.Router)(); // Rota POST - criar um objetivo no DB

objectivesRouter.post('/', async (request, response) => {
  const {
    email,
    how,
    goal,
    verb,
    who
  } = request.body;
  const createObjectiveService = new _CreateObjectiveService.default();
  const createdObjective = await createObjectiveService.execute({
    email,
    how,
    goal,
    verb,
    who
  });
  return response.json(createdObjective);
}); // Rota GET - buscar todos os objetivos do DB

objectivesRouter.get('/', async (request, response) => {
  const objectivesRepository = (0, _typeorm.getRepository)(_Objectives.default);
  const objectives = await objectivesRepository.find();
  return response.json(objectives);
}); // Rota GET specific email - buscar todos os objetivos do DB

objectivesRouter.get('/:email', async (request, response) => {
  const {
    email
  } = request.params;
  const objectivesRepository = (0, _typeorm.getCustomRepository)(_ObjectivesRepository.default);
  const objectives = await objectivesRepository.findByEmail(email);
  return response.json(objectives);
});
var _default = objectivesRouter;
exports.default = _default;