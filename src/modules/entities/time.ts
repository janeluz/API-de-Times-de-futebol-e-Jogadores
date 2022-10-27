import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidv4} from "uuid";

@Entity('times')
class Time {

@PrimaryGeneratedColumn('uuid')
"id": string;

@Column()
"name": string;

@Column()
"coach": string;

@Column()
"stadium":string;

@Column()
"city": string;

constructor() {
  if (!this.id) {
    this.id = uuidv4();
  }
}

}


export { Time };

