import { Sector } from "./sector";
import { User } from "./user";

export class Document {
    id:number;
    designation:string;
    date:any;
    sector_id:number;
    patient_id:number;
    doctor_id:number;
    file : string
    type : string;
    size : number;

    patient? : any;
    doctor?: User;
    sector?: Sector;

}