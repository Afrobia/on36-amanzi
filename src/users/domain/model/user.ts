import { Expose } from "class-transformer";
import { randomUUID } from "crypto";

export class User {
  @Expose()
  private id: string;
  @Expose()
  private name: string;
  @Expose()
  private email: string;
  @Expose()
  private password: string;
  @Expose()
  private weight: number;
  @Expose()
<<<<<<< HEAD
  private waterIntake:number;
  @Expose()
  private city:string;
  @Expose()
  private state:string
=======
  private waterIntake: number;
  @Expose()
  private city: string;
  @Expose()
  private state: string;
>>>>>>> f012bb23df4452132c2df88b0bfc539a08f4216a

  constructor(){
    this.id = randomUUID()
    this.weight = 0
    this.waterIntake = 0
    this.city = ''
    this.state = ''
  }

  getId():string{
    return this.id
  }

  setId(id:string) {
    return this.id = id
  }

  getName():string {
    return this.name
  }
  
  setName(name:string){
    return this.name = name
  }

  getEmail():string {
    return this.email
  }
  
  setEmail(email:string){
    return this.email = email
  }

  getPassword():string {
    return this.password
  }
  
  setPassword(password:string){
    return this.password = password
  }

  getWeight(){
    return this.weight;
  }

  setWeight(weight:number){
    return this.weight=weight;
  }

  getWaterIntake(){
    return this.waterIntake;
  }

  setWaterIntake(waterIntake:number){
    return this.waterIntake = waterIntake;
  }

  getCity():string {
<<<<<<< HEAD
    return this.city
  }
  
  setCity(city :string){
    return this.city = city
  }

  getState():string {
    return this.city
  }
  
  setState(state :string){
    return this.state = state
=======
    return this.city;
  }
  
  setCity(city:string){
    return this.city = city;
  }

  getState():string {
    return this.state;
  }
  
  setState(state:string){
    return this.state = state;
>>>>>>> f012bb23df4452132c2df88b0bfc539a08f4216a
  }
  
}


