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
  public imgURL: any = null; // 'https://iceclog.com/wp-content/uploads/2016/09/596px-Internet1.jpg';
  public youtubeLink: String = 'https://www.youtube.com/watch?v=nSDgHBxUbVQ';
  public youtubeDefaultImageLink: String = 'http://i4.ytimg.com/vi/XXXXX/default.jpg';
  ngOnInit() { }

  constructor(private http: HttpClient) { }



  getyoutubeURL() {
    const len = this.youtubeLink.length;
    const code = this.youtubeLink.split('?v=')[1];
    console.log(this.youtubeDefaultImageLink.replace('XXXXX', code))
    return this.youtubeDefaultImageLink.replace('XXXXX', code);
  }

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
