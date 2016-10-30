import {Component, OnInit} from '@angular/core';
import {DavisCupService} from './../services/purchaseItem.service';
import {DavisCup} from '../model/purchaseItem';
import {HttpModule} from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>Spring + AngularJS 2 + TypeScript</h2>
      <ul>
          <li *ngFor="let purchaseItem of purchaseItems">
              {{purchaseItem.purchaseDate}} {{purchaseItem.description}} {{purchaseItem.price}}
         </li>
      </ul>
    `,
        providers: [HttpModule, PurchaseItemService]
    })


export class AppComponent implements OnInit{

    constructor(private _purchaseItemService : PurchaseItemService){}

    errorMessage: string;
    purchaseItems : PurchaseItem[];
    public title = 'Purchase Items';

    getPurchaseItems(){

       /* this._davisService.getDavisCups().then(davis => this.davisCups = davis)*/
        this._purchaseItemService.getPurchaseItems().subscribe(
            purchaseItem => this.purchaseItems = items,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getPurchaseItems();
    }

} // export -> create a module


