import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;
  @Output() selected: EventEmitter<Category> = new EventEmitter<Category>();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(category: Category){
    this.router.navigate(['products'],{queryParams: {category: category.id}})
  }

}
