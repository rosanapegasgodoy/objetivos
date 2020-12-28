import { Router } from 'express';
import CreateObjectiveService from '../services/CreateObjectiveService';
import { getCustomRepository, getRepository } from 'typeorm';
import Objective from '../models/Objectives';
import ObjectivesRepository from '../repositories/ObjectivesRepository';

const objectivesRouter = Router();

// Rota POST - criar um objetivo no DB
objectivesRouter.post('/', async (request, response) => {
  const {
    email,
    how,
    goal,
    verb,
    who
  } = request.body;
  const createObjectiveService = new CreateObjectiveService();
  const createdObjective = await createObjectiveService.execute({
    email,
    how,
    goal,
    verb,
    who,
  });
  
  return response.json(createdObjective);
});

// Rota GET - buscar todos os objetivos do DB
objectivesRouter.get('/', async (request, response) => {
  const objectivesRepository = getRepository(Objective);
  const objectives = await objectivesRepository.find();
  
  return response.json(objectives);
});


// Rota GET specific email - buscar todos os objetivos do DB
objectivesRouter.get('/:email', async (request, response) => {
  const { email } = request.params;

  const objectivesRepository = getCustomRepository(ObjectivesRepository);
  const objectives = await objectivesRepository.findByEmail(email);
  
  return response.json(objectives);
});

export default objectivesRouter;