import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DataStorageService } from '../../shared/data-storage.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  productsRow: any;

  constructor(private dataStorageService:DataStorageService,
              private route: ActivatedRoute,
              private db: AngularFireDatabase) {
  }

  transformProducts(products: Product[]) {
    let index = 0;
    let length = products.length;
    let productsRow = [] as any;

    while (length) {
      let row: Product[] = [];
      if (length >= 3) {
        for (let i = 0; i < 3; i++) {
          row.push(products[index++]);
        }
        productsRow.push(row);
        length -= 3;
      } else {
        for (; length > 0; length--) {
          row.push(products[index++]);
        }
        productsRow.push(row);
      }
    }
    return productsRow;
  }

  ngOnInit() {




    this.route.queryParams
      .pipe(debounceTime(300),
      distinctUntilChanged())
      .subscribe(params => {
      let category: string = params['category'];
      let search: string = params['search'];

        console.log(search);
      this.productsRow = [];

      this.dataStorageService.fetchProducts(category,search).valueChanges()
      .subscribe((products: Product[]) =>
      this.productsRow = this.transformProducts(products));
  })
 }
}
