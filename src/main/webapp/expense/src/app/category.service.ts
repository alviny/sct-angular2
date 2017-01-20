import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Category} from './category';
@Injectable()
export class CategoryService {
  private endpoint_url = "http://localhost:8080/sct-angular2/category/";
  categories:Category[];
  constructor(private http: Http) { 
    console.log('CategoryService Initialized.');
  }

  getCategories(): Observable<Category[]>{
    //fetch...
    return this.http.get(this.endpoint_url).map((res: Response)=> <Category[]>res.json()).catch(this.handleError);
  }
  private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
  }
}
