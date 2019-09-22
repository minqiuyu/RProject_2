import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class S3Service {
  downloadImage: any;
  // uploadImage: any;
  constructor(private http: HttpClient) { }

  putImage(uploadImage){
    return this.http.put('http://localhost:9005/SpringMVCPractice/s3/', uploadImage).pipe(res => res as any)
  }
  getImage(downloadImage: any){
    return this.http.get('http://localhost:9005/SpringMVCPractice/s3/' + downloadImage).pipe(res => res as any)


  }
}
