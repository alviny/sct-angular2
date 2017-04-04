import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

import { PurchaseItemService} from '../purchase-item.service';
import { PurchaseItem } from '../purchase-item';
import {Category} from '../category';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {CategoryService} from '../category.service';
@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css'],
  providers: [CategoryService]
})
export class PurchaseItemComponent implements OnInit {
  @Input() purchasedItem:PurchaseItem;
  @Input() categories:Category[];
  @Output() updatePurchaseItem:EventEmitter<PurchaseItem> = new EventEmitter();

  selectedCategory:Category;
  
  ngOnInit(){
    console.log("PurchaseItemComponent:init()");
    console.log('category:' + this.purchasedItem.categoryName);
    if( this.purchasedItem.categoryName != null ){
      console.log('looping..');
      for( var i=0;i<this.categories.length; i++){
        if( this.categories[i].type === this.purchasedItem.categoryName){
          this.selectedCategory = this.categories[i];
          console.log('found the object');
          break;
        }
      }
    }
  }

  update(){
    console.log('update:' +this.purchasedItem.referenceId + ', category:' + this.selectedCategory.type);
    this.purchasedItem.categoryName = this.selectedCategory.type;
    this.updatePurchaseItem.emit(this.purchasedItem);
  }
  updateCategory(eCategory:Category){
    console.log("updateCategory:" + eCategory.type);
    this.selectedCategory = eCategory;
  }
 
}
