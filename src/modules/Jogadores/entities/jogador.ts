import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4} from "uuid";
import { Time } from "../../entities/time";
@Entity('jogadores')
class Jogador {

  @PrimaryGeneratedColumn('uuid')
  "id":string;

  @ManyToOne(() => Time)
  @JoinColumn({ name: "team_id" })
  time: Time;

  @Column()
  "team_id": string;

  @Column()
  "name": string;

  @Column()
  "age":number;

  @Column()
  "position": string;
  
  @Column()
  "goals": number;

constructor() {
  if (!this.id) {
    this.id = uuidv4();
  }
  }
}

export { Jogador };
 
