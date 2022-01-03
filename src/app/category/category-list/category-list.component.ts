import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service';
import { Category } from '../category.model';


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];
  constructor(private router: Router, private dataStorageService:DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.fetchCategories().
    subscribe(data => this.categories = data)
  }

  filterProducts(category: Category){
    this.router.navigate(['/products'],{
      queryParams:{category:category.id}
    });
  }

}
