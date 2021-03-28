export class User {
    id :number;
    email: string;
    password: string;
    firstname : string;
    lastname: string;
    username:string;
    confirmpassword:string;
    role:string;
    genre:string;
    phone:string;
    adress: string;
    datenaissance:String;
    image:String;
    shortBiography:string;
    state:string;
    status:string;
    codePostal:string;
    country:string;
    city:string;
    n_cnss:string;
    specialites : any[]
    doctor : any
    
    constructor(role?){
        if(role)
        this.role=role
    }
}
