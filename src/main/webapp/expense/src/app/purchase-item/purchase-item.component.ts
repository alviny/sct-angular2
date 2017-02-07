import { Component, OnInit, Input } from '@angular/core';

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
  selectedCategory:Category;
  
  ngOnInit(){
    console.log("PurchaseItemComponent:init()");
  }

  update(){
    console.log('update:' +this.purchasedItem.referenceId + ', category:' + this.selectedCategory.type);
  }
  updateCategory(eCategory:Category){
    console.log("updateCategory:" + eCategory.type);
    this.selectedCategory = eCategory;
  }
 
}
