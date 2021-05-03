import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { Sector } from 'src/app/viewModels/sector';
@Component({
  selector: 'app-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.css']
})
export class EditSectorComponent implements OnInit {
  auth=JSON.parse(localStorage.getItem('user'))
  sector:Sector= new Sector();
  constructor(private toastr: ToastrService, private router:Router,private api:OrganisationService,private route:ActivatedRoute) { }
 id=this.route.snapshot.params['id']
 form:FormGroup
  ngOnInit(): void {
     
    if(this.id){
      this.api.getByIdS(this.id).subscribe((res: Sector)=>{

        this.form.patchValue(res)
        console.log(res)
      })
    }
    this.sector.user_id=this.auth.id;
    this.form=new FormGroup({
      'designation': new FormControl(Validators.required),
       'description': new FormControl(),
      
     
    });
  }

  updateSector(){
    this.api.updateS(this.form.value)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Departements Update!');
     this.router.navigate(['/medical/sectors']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
}
