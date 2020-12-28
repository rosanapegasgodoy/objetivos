"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

class CreateObjectives1606262846065 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "objectives",
      columns: [{
        name: "id",
        type: "varchar",
        isPrimary: true,
        generationStrategy: "uuid"
      }, {
        name: "who",
        type: "varchar"
      }, {
        name: "verb",
        type: "varchar"
      }, {
        name: "goal",
        type: "varchar"
      }, {
        name: "how",
        type: "varchar"
      }, {
        name: "email",
        type: "varchar"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("objectives");
  }

}

exports.default = CreateObjectives1606262846065;