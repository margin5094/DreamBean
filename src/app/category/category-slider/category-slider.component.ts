import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {
  @Input() category;
  @Output() selected: EventEmitter<Category> = new EventEmitter<Category>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(){
    this.selected.emit(this.category)
  }
}
