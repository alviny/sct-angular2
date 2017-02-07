import { Component, OnInit } from '@angular/core';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import {PurchaseItemService} from './purchase-item.service';
import {CategoryService} from './category.service';
import {PurchaseItem} from './purchase-item';
import {Category} from './category';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PurchaseItemService, CategoryService]
})
export class AppComponent{

 
}
