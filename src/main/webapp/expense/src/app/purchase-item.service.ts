import { Injectable } from '@angular/core';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {PurchaseItem} from './purchase-item'
@Injectable()
export class PurchaseItemService {
  private endpoint_url = "/sct-angular2/purchase/item/";
  constructor(private http: Http) { 
    console.log('PurchaseItemService Initialized.');
  }
  getItems(): Observable<PurchaseItem[]>{
    //fetch...
    return this.http.get(this.endpoint_url).map((res: Response)=> <PurchaseItem[]>res.json()).catch(this.handleError);
  }
  updateCategory(updatedPurcahseItem:PurchaseItem): void{
    console.log('PurchaseItemService::update:' + updatedPurcahseItem.referenceId + ',with newCategory:' + updatedPurcahseItem.categoryName);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let bodyString = JSON.stringify(updatedPurcahseItem);
    console.log('body string:' + bodyString);
    let url = (this.endpoint_url + updatedPurcahseItem.referenceId).replace(/#/gi,'%23');
    console.log("using url:" + url);
    this.http.post(url, bodyString , options)
                    .map(this.extractData)
                    .catch(this.handleError)
                    .subscribe(
                        data => {
                        // refresh the list
                        console.log('added successfully.');

                        return true;
                      },
                      error => {
                        console.error("Error saving purchase item!");
                        return Observable.throw(error);
                      }                     
                    );
    //this.http.post(this.endpoint_url
  }
  private extractData(res: Response) {
    console.log('extractData');
    let body = {};
    if( res == null){
      body = {};
    } else{
      if( res.status != 200){
        body = res.json().data;
      }
    }

    return body;
  }
  private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
  }
}