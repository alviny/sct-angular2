import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {DavisCup} from './../model/purchaseItem';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PurchaseItemService {

    constructor (private http: Http) {}

    private _purchaseItemsUrl = 'http://localhost:8080/purchase/item';  // URL to web api
    getPurchaseItems() {
        return this.http.get(this._purchaseItemsUrl)
            .map(res => <PurchaseItem[]> res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}