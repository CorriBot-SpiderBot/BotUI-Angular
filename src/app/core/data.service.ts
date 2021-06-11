import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = environment.url
  up() {
    return this.http.post(this.url + '/up', {})
  }

  standalone() {
    return this.http.post(this.url + '/stand', {})
  }

  right() {
    return this.http.post(this.url + '/right', {})
  }
  left() {
    return this.http.post(this.url + '/left', {})
  }

  cameraUp() {
    return this.http.post(this.url + '/cameraup', {})
  }
  cameraDown() {
    return this.http.post(this.url + '/cameradown', {})
  }
  cameraRight() {
    return this.http.post(this.url + '/cameraright', {})
  }
  cameraLeft() {
    return this.http.post(this.url + '/cameraleft', {})
  }
}
