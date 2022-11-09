import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Team } from '../../team/entities/team';

@Entity('players')
class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Team, team => team.players)
  @JoinColumn({ name: 'team_id' })
  team: Team;

  @Column()
  team_id: string;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  position: string;

  @Column()
  goals: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Player };
