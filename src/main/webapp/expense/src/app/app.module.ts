import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule  } from '@angular/http';
import { AppComponent } from './app.component';
import { PurchaseItemComponent } from './purchase-item/purchase-item.component';
import { CategoryComponent } from './category/category.component';
import { PurchaseItemListComponent } from './purchase-item-list/purchase-item-list.component';
@NgModule({
  declarations: [
    AppComponent,
    PurchaseItemComponent,
    CategoryComponent,
    PurchaseItemListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
