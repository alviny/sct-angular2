import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {CategoryService} from '../category.service';
import {Category} from '../category';
@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() categories:Category[];
  @Input() category:Category; //selected category
  @Output() selectedCategoryEvent:EventEmitter<Category> = new EventEmitter();;

  constructor(private _categoryService:CategoryService) { 
    console.log('Category component constructor');
  }

  ngOnInit() {
    console.log('Category Component init');

  }
  update(){
    console.log('current category:' + this.category.type);
    this.selectedCategoryEvent.emit(this.category);
  }

}
