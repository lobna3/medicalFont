import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { DocumentsService } from 'src/app/apis/documents.service';
import { Document } from 'src/app/viewModels/document';
import { User } from 'src/app/viewModels/user';
import { AuthService } from 'src/app/apis/auth.service';
import { CrudService } from 'src/app/apis/crud.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private toastr: ToastrService, private api: DocumentsService, private route: ActivatedRoute, private apii: AuthService, private apiii: CrudService) { }
  id = this.route.snapshot.params['id']
  type = this.route.snapshot.params['type']
  user: User
  users: User[]
  document: Document
  documents: Document[]
  form:FormGroup
  auth = JSON.parse(localStorage.getItem('user'))
  ngOnInit(): void {
    this.apiii.getAllP().subscribe((result:User[])=>{
      this.users= result
    })
    this.form=new FormGroup({

      'patient_id': new FormControl(Validators.required),
   
     
      
    });
    this.allDocument()
    if(this.type=='doctor'){
      this.getIdDocors(this.id)
    }else{
      this.getIdPatient(this.id)
    }
    

  }
  getIdDocors(id) {
    this.apii.getById(id)
      .subscribe((result: User) => {
        this.user = result
        console.log(result)

      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }
  getIdPatient(id) {
    this.apiii.getByIdP(id)
      .subscribe((result: User) => {
        this.user = result
        console.log(result)

      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }


  server = "http://localhost/blog/storage/app/"
  formData = new FormData()
  upload(event) {
    let files = event.target.files
    if (files && files.length > 0) {
      let file = files[0];
      console.log(file)
      this.formData.append('file', file, file.name)
      this.api.upload(this.formData).subscribe((path: any) => {
        console.log(path)
        let d = new Document()
        d.date = '02-02-2020';
        d.designation = file.name;
        if(this.type == 'doctor'){

          d.doctor_id = this.id;
          //d.sector_id = this.auth.sector.id
        }else{
          
        d.doctor_id = this.auth.id
        d.patient_id = this.id
        }
        d.file = path.path
        d.size = file.size;
        d.type = file.type

        console.log(d)
        this.api.create(d).subscribe(() => {
          this.allDocument()
        })
      })

    }
  }
  allDocument() {
    if(this.type=='doctor'){
      this.api.getAll(this.id)
      .subscribe((result: Document[]) => {
        this.documents = result
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })
    } else {
      this.api.getAllPatient(this.id)
      .subscribe((result: Document[]) => {
        if(this.id == 0){
          this.documents = result.filter((x)=> x.doctor_id == this.auth.id )
        }else{
          this.documents = result
        }
       
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })
    }
    

  }
 show = false;
 selected_file;

  showModal(item){
    this.show=true
    this.selected_file = item
  }

  hideModal(){
    this.show=false
    this.selected_file = undefined
  }

  updateFile(){

    this.api.update(this.selected_file).subscribe(()=>{

      this.show=false

      this.selected_file = undefined
      this.allDocument();
    })


  }

}
