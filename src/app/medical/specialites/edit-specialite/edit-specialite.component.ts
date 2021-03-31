import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import{Router} from '@angular/router';
import{OrganisationService} from 'src/app/apis/organisation.service'
import {Specialite} from 'src/app/viewModels/specialite';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-specialite',
  templateUrl: './edit-specialite.component.html',
  styleUrls: ['./edit-specialite.component.css']
})
export class EditSpecialiteComponent implements OnInit {
  specialite: Specialite = JSON.parse(localStorage.getItem('specialite'));
  form:FormGroup
  constructor(private toastr: ToastrService, private router: Router, private api: OrganisationService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'nomspecialite': new FormControl(),
     
   });
  }


  updateSpecialite(){
    this.api.update(this.specialite)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Update Specialite!', 'Specialite fun!');
      localStorage.setItem('specialite' , JSON.stringify(result))
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  }
}

