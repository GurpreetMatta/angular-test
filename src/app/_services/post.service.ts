import { AuthHttp } from 'angular2-jwt';
import { DataService } from './dataservice.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Posts } from '../crudform/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService {


  constructor(http: AuthHttp) {
    super(http);
    this.url = 'http://localhost:8080/api/posts';
  }


}
