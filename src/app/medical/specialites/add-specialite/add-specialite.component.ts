import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{OrganisationService} from 'src/app/apis/organisation.service'
import {Specialite} from 'src/app/viewModels/specialite';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-specialite',
  templateUrl: './add-specialite.component.html',
  styleUrls: ['./add-specialite.component.css']
})
export class AddSpecialiteComponent implements OnInit {
  specialite: Specialite = new Specialite();
  form:FormGroup

  constructor(private toastr: ToastrService, private router: Router, private api: OrganisationService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
       'nomspecialite': new FormControl(),
      
    });

  }

  addSpecialite(){
    this.api.create(this.specialite)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Create Specialite', 'specialite Create!');
     this.router.navigate(['/medical']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }

}
