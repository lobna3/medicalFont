export class Appointment {
    id:number;
    appointment_date:string ;
    appointment_time: string;
    patient_id:number;
    doctor_id:number;
    sector_id: number;
    message: string;

    users : any[]
    sectors: any []
}