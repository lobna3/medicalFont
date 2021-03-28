import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formData = new FormData()
  upload(event){
  let files = event.target.files
    if(files && files.length >0){
      let file= files[0];
      
      this.formData.append('avatar' , file , file.name)
     
    }
  }
}
