import { getRepository } from 'typeorm';
import ObjectivesRepository from '../repositories/ObjectivesRepository';
import Objective from '../models/Objectives';
import sgMail from '@sendgrid/mail';

interface RequestDTO {
  email: string,
  how: string,
  verb: string,
  goal: string,
  who: string,
}

export default class CreateObjectiveService {
  public async execute({ email, how, verb, goal, who }: RequestDTO): Promise<Objective> {
    
    const objectivesRepository = getRepository(Objective);
    
    const createdObjective = objectivesRepository.create({
      email: email.toLowerCase(),
      how: how.toLowerCase(),
      verb: verb.toLowerCase(),
      goal: goal.toLowerCase(),
      who: who.toLowerCase(),
    });
    await objectivesRepository.save(createdObjective);
    		
		sgMail.setApiKey(process.env.SENDGRID_API || '');
    

    const msg = {
      to: email, // Change to your recipient
      from: process.env.SENDER_MAIL || 'no_reply@eduka.tech', // Change to your verified sender
      subject: 'Sua nova frase de Objetivo!',
      text: `${who[0].toUpperCase()}${who.slice(1,who.length).toLowerCase()} será capaz de ${verb.toLowerCase()} ${goal.toLowerCase()} ${how.toLowerCase()}`,
      html: `</br><title>Confira a sua frase de objetivo criada:</title></br><strong>${who[0].toUpperCase()}${who.slice(1,who.length).toLowerCase()} será capaz de ${verb.toLowerCase()} ${goal.toLowerCase()} ${how.toLowerCase()}</strong>`,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      });

    return createdObjective;
  }
}