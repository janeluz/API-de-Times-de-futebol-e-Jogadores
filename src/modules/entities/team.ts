import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Player } from '../Jogadores/entities/player';

@Entity('teams')
class Team {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  coach: string;

  @Column()
  stadium: string;

  @Column()
  city: string;

  @OneToMany(() => Player, player => player.team)
  players: Player[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Team };
