import { Component, OnInit } from '@angular/core';
import { DocumentsService } from 'src/app/apis/documents.service';
import { Document } from 'src/app/viewModels/document';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor(private api: DocumentsService, private route: ActivatedRoute) { }
  id = this.route.snapshot.params['id']
  ngOnInit(): void {
  }
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
