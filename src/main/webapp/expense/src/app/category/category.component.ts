import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public categories:Category[];
  public selectedCategoryObj:Category; 

  constructor(private _categoryService:CategoryService) { 
    console.log('Category component init.');
  }

  ngOnInit() {
    this.getCategories();
    
    //this.selectedCategoryObj = this.categories[0];
  }
  onChangeObj(newValue) {
    console.log(newValue);
    this.selectedCategoryObj = newValue;
  } 
  getCategories(){
    this._categoryService.getCategories().subscribe((data:Category[]) => this.categories = data,
    error=> console.log(error),
    () => console.log('Get all categories complete'));
    
  }
}
