import { Component, OnInit } from '@angular/core';
import { PurchaseItemService} from '../purchase-item.service';
import { PurchaseItem } from '../purchase-item';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CategoryService} from '../category.service';
@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css'],
  providers: [CategoryService]
})
export class PurchaseItemComponent implements OnInit {
  public items:PurchaseItem[];
  public page:number=4;
  public totalItems:number=200;
  public maxSize:number=10;
  public total:number;

  constructor(private _purchaseItemService: PurchaseItemService) { }

  ngOnInit() {
    this.getItems();
  }
  getItems():void{
    this._purchaseItemService.getItems().subscribe((data:PurchaseItem[]) => this.items = data,
    error=> console.log(error),
    () => console.log('Get all purchase items complete'));
  }
  update(){
    console.log('update');
  }
 
}
