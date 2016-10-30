import { Component } from '@angular/core';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import {PurchaseItemService} from './purchase-item.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PurchaseItemService]
})
export class AppComponent {
  title = 'app works!';
}
