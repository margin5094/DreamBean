import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { Observable } from "rxjs";
import { Category } from "../category/category.model";
import { CategoryService } from "../category/category.service";
import { Product } from "../product/product.model";
import { ProductService } from "../product/product.service";


@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http:HttpClient,private categoryService: CategoryService
        ,private productService:ProductService,
        private db:AngularFireDatabase){}
    
    storeCategories(){
        const categories = this.categoryService.getCategory();
        return this.http.put('https://dreambean-f3a46-default-rtdb.firebaseio.com/categories.json', categories)
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchCategories():Observable<Category[]>{
        return this.http.get<Category[]>('https://dreambean-f3a46-default-rtdb.firebaseio.com/categories.json');
    }

    fetchCategoryById(category:Category):Observable<Category>{
        let params=new HttpParams();
        params=params.append("id",category.id);
        return this.http.get<Category>('https://dreambean-f3a46-default-rtdb.firebaseio.com/categories.json',{params:params});
    }

    storeProducts(){
        const products= this.productService.getProducts();
        return this.http.put('https://dreambean-f3a46-default-rtdb.firebaseio.com/products.json', products)
        .subscribe(response=>{
            console.log(response);
        });
    }

    fetchProducts(category?: string, search?:string): AngularFireList<Product>{
        if (category || search) {
          let query = <any>{};
          if (category) {
            return this.db.list("/products",
              ref=>{
                      return ref.orderByChild('categoryId').equalTo(category);
                   }
            );
          } else if(search) {
            return this.db.list("/products",
              ref=>{
                      return ref.orderByChild('title').startAt(search.toUpperCase()).
                      endAt(ref.startAt(search.toUpperCase())+"\uf8ff");
                   }
            );
          }
        } else {
          return this.db
            .list("products");
        }
      }


      fetchProduct(id: string): AngularFireObject<Product> {
        return this.db.object("products" + `/${+id - 1}`);
      }
  

}