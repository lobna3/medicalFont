import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { Sector } from 'src/app/viewModels/sector';
@Component({
  selector: 'app-add-sector',
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.css']
})
export class AddSectorComponent implements OnInit {
  auth=JSON.parse(localStorage.getItem('user'))
  sector:Sector= new Sector();
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:OrganisationService) { }

  ngOnInit(): void {
    this.sector.user_id=this.auth.id;
    this.form=new FormGroup({
      'designation': new FormControl(Validators.required),
       'description': new FormControl(),
      
     
    });
  }


  signup(){
    this.api.createS(this.sector)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Departements Create!');
     this.router.navigate(['/medical/sectors']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }

}
