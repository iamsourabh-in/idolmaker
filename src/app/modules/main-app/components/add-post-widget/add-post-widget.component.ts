import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-post-widget',
  templateUrl: './add-post-widget.component.html',
  styleUrls: ['./add-post-widget.component.css']
})
export class AddPostWidgetComponent implements OnInit {
  public progress: number;
  public message: string;
  public imgURL: String = 'https://iceclog.com/wp-content/uploads/2016/09/596px-Internet1.jpg';
  ngOnInit() { }

  constructor(private http: HttpClient) { }

  upload(files) {


    if (files.length === 0) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (event: ProgressEvent) => {
      this.imgURL = (<FileReader>event.target).result;
    };
    reader.readAsDataURL(files[0]);
    const formData = new FormData();

    for (const file of files) {
      formData.append(file.name, file);
    }

    const uploadReq = new HttpRequest('POST', `http://localhost:51033/api/user/setProfilePic`, formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();
      }
    });
  }

}
