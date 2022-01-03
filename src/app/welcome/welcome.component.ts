import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  categories:Category[]=[];
  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit(): void {
   // this.dataStorageService.storeCategories();
    this.dataStorageService.fetchCategories()
    .subscribe(data => this.categories = data)
    ;
  }
}
