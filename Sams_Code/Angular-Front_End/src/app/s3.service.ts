import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  downloadImage: any;
  // uploadImage: any;
  // filename: string;
  constructor(private http: HttpClient) { }

  putImage(imageName:string, payload){
    return this.http.put('http://localhost:9005/SpringMVCPractice/s3/' +imageName,{}).pipe(res => res as any)
  }
  getImage(downloadImage: any){
    return this.http.get('http://localhost:9005/SpringMVCPractice/s3/' + downloadImage).pipe(res => res as any)


  }

  // async uploadFile(event: any) {
  //   const file = event.target.files[0];
  //   this.filename = file.name;
  //   const urlResponse = await fetch('http://localhost:9005/P2FB_Application/s3/' + file.name, { method: 'PUT' });
  //   const signedUrl = await urlResponse.text();
  //   const s3Response = await fetch(signedUrl, { method: 'PUT', body: file });
  // }
}
