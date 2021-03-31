import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/apis/documents.service';
import { Document } from 'src/app/viewModels/document';
import{User} from'src/app/viewModels/user';
import { AuthService } from 'src/app/apis/auth.service';
import{CrudService} from'src/app/apis/crud.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private toastr: ToastrService,private api: DocumentsService, private route: ActivatedRoute,private apii:AuthService,private apiii:CrudService) { }
  id = this.route.snapshot.params['id']
 id1=this.route.snapshot.params['id1']
  doctor: User
  laboratorist: User
  document: Document
  ngOnInit(): void {
    this.getIdDocors(this.id)
    this.getIdLaboratorist(this.id1)
    this.getIdDocument(this.id)
  }
  getIdDocors(id){
    this.apii.getById(id)
    .subscribe((result : User)=>{
      this.doctor = result
      console.log(result) 
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
  getIdDocument(id){
    this.api.getById(id)
    .subscribe((result : Document)=>{
      this.document = result
      console.log(result) 
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
  getIdLaboratorist(id1){
    this.apiii.getByIdL(id1)
    .subscribe((result : User)=>{
      this.doctor = result
      console.log(result) 
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
  server="http://localhost/blog/storage/app/"
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
        d.doctor_id = this.id;
        d.file = path.path

        console.log(d)
        this.api.create(d).subscribe(()=>{})
      })

    }
  }
}
