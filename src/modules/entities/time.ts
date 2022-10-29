import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4} from "uuid";
import { Jogador } from "../Jogadores/entities/jogador";

@Entity('teams')
class Team {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column()
name: string;

@Column()
coach: string;

@Column()
stadium:string;

@Column()
city: string;

@OneToMany(()=> Jogador, jogador => jogador.team)
jogadores: Jogador[];


constructor() {
  if (!this.id) {
    this.id = uuidv4();
  }
}

}


export { Team };

