import { Component, OnInit, Input } from '@angular/core';

import { PurchaseItemService} from '../purchase-item.service';
import { PurchaseItem } from '../purchase-item';
import {Category} from '../category';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {CategoryService} from '../category.service';
@Component({
  selector: 'app-purchase-item-list',
  templateUrl: './purchase-item-list.component.html',
  styleUrls: ['./purchase-item-list.component.css'],
  providers: [CategoryService]
})
export class PurchaseItemListComponent  {
  purchasedItems : PurchaseItem[];
  categories:Category[];
  constructor(private _purchaseItemService: PurchaseItemService, private _categoryService:CategoryService) { 
      console.log('PurchaseItemList constructor');
  }

  ngOnInit() {
    console.log("Loading purchased items");
    this.getItems();
    console.log("Loading categories");
    this.getCategories();
  }    
  getItems():void{
    this._purchaseItemService.getItems().subscribe((data:PurchaseItem[]) => this.purchasedItems = data,
    error=> console.log(error),
    () => console.log('Get all purchase items complete'));
  } 
  getCategories(){
    this._categoryService.getCategories().subscribe((data:Category[]) => this.categories = data,
    error=> console.log(error),
    () => console.log('Get all categories complete'));
  }
  updatePurchaseItem(updatedPurchaseItem:PurchaseItem){
    this._purchaseItemService.updateCategory(updatedPurchaseItem);
  }

}