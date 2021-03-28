import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { Sector } from 'src/app/viewModels/sector';
@Component({
  selector: 'app-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.css']
})
export class EditSectorComponent implements OnInit {
  sector:Sector= new Sector();
  constructor(private toastr: ToastrService, private router:Router,private api:OrganisationService) { }

  ngOnInit(): void {
  }

  updateSector(){
    this.api.updateS(this.sector)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Departements Update!');
     this.router.navigate(['/sectors']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
}
