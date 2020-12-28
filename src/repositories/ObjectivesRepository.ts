import { EntityRepository, Repository } from 'typeorm';
import Objective from '../models/Objectives';

@EntityRepository(Objective)
class ObjectivesRepository extends Repository<Objective> {
  public async findByEmail(email: string): Promise<Objective[] | []> {
    const findByEmail = await this.find({
      where: { email },
    })
    return findByEmail || []
  }
}

export default ObjectivesRepository