import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {PurchaseItem} from './purchase-item'
@Injectable()
export class PurchaseItemService {
  private endpoint_url = "http://localhost:8080/sct-angular2/purchase/item/";
  constructor(private http: Http) { 
    console.log('PurchaseItemService Initialized.');
  }
  getItems(): Observable<PurchaseItem[]>{
    //fetch...
    return this.http.get(this.endpoint_url).map((res: Response)=> <PurchaseItem[]>res.json()).catch(this.handleError);
  }
  private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
  }
}