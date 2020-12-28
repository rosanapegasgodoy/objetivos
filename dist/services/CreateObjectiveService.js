"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Objectives = _interopRequireDefault(require("../models/Objectives"));

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CreateObjectiveService {
  async execute({
    email,
    how,
    verb,
    goal,
    who
  }) {
    const objectivesRepository = (0, _typeorm.getRepository)(_Objectives.default);
    const createdObjective = objectivesRepository.create({
      email: email.toLowerCase(),
      how: how.toLowerCase(),
      verb: verb.toLowerCase(),
      goal: goal.toLowerCase(),
      who: who.toLowerCase()
    });
    await objectivesRepository.save(createdObjective);

    _mail.default.setApiKey(process.env.SENDGRID_API || '');

    const msg = {
      to: email,
      // Change to your recipient
      from: process.env.SENDER_MAIL || 'no_reply@eduka.tech',
      // Change to your verified sender
      subject: 'Sua nova frase de Objetivo!',
      text: `${who[0].toUpperCase()}${who.slice(1, who.length).toLowerCase()} será capaz de ${verb.toLowerCase()} ${goal.toLowerCase()} ${how.toLowerCase()}`,
      html: `</br><title>Confira a sua frase de objetivo criada:</title></br><strong>${who[0].toUpperCase()}${who.slice(1, who.length).toLowerCase()} será capaz de ${verb.toLowerCase()} ${goal.toLowerCase()} ${how.toLowerCase()}</strong>`
    };

    _mail.default.send(msg).then(() => {
      console.log('Email sent');
    }).catch(error => {
      console.error(error);
    });

    return createdObjective;
  }

}

exports.default = CreateObjectiveService;