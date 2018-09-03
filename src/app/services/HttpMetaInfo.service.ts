
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable()
export class HttpMetaInfoService {
    titleOpenTag: String = '<title>';
    titleCloseTag: String = '</title>';
    MetaInfo: any;
    HtmlResponse: any;
    constructor(private _http: HttpClient) {

    }

    getMetaInfo(url: string) {
        const headers = new HttpHeaders();
        headers.append('Context-Type', 'text/html');
        this._http.get(url, { responseType: 'text' }).pipe(map(m => m.toString())).subscribe(
            (res) => {
                this.HtmlResponse = res;
                // Get Title
                const titleStart = this.HtmlResponse.toString().indexOf(this.titleOpenTag) + this.titleOpenTag.length;
                const titleEnd = this.HtmlResponse.toString().indexOf(this.titleCloseTag);
                const title = this.HtmlResponse.substring(titleStart, titleEnd);

                // Get faviicon
                console.log(title);
            },
            (err) => {
                console.log("Error: ", err);
            }
        );
    }
}
