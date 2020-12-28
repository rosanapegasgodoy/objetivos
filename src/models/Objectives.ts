import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("objectives")
class Objective {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  who: string;

  @Column()
  verb: string;

  @Column()
  goal: string;

  @Column()
  how: string;

  @Column()
  email: string;
}

export default Objective;