interface ICreatePlayerDTO {

  id?:string;
  team_id: string;
  name: string;
  age:number;
  position: string;
  goals: number;
}

export{ ICreatePlayerDTO };