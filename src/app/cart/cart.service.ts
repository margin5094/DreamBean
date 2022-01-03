import { Injectable } from "@angular/core";
import { Product } from "../product/product.model";


export interface CartItem {
    product: Product;
    count: number;
    amount: number;
}

export class Cart {
    count: number = 0;
    amount: number = 0;
    items: CartItem[] = [];
}
@Injectable({providedIn:'root'})
export class CartService{
    cart: Cart = new Cart();

    addProduct(product: Product): CartItem {
        let item: CartItem = this.findItem(product.id);
    
        if(item){
            item.count++;
            item.amount += product.price;
        } else {
            
            item = {
              product: product,
              count: 1,
              amount: product.price
            };
            
            this.cart.items.push(item);
        }
        
        this.cart.count++;
        this.cart.amount += product.price;
        return item
    }
    findItem(id: string): CartItem {
        for (let i = 0; i < this.cart.items.length; i++) {
          if (this.cart.items[i].product.id === id) {
            return this.cart.items[i];
          }
        }
        return null;
    }

    removeProduct(product: Product): CartItem {
      
        let item: CartItem = this.findItem(product.id);
        
        if (item) {
         
          item.count--;
    
          item.amount -= product.price;
          
          if (!item.count) {
       
            this.remove(item);
          }
         
          this.cart.count--;

          this.cart.amount -= product.price;
          return item
        }
    }

    private remove(item: CartItem) {
        
        let indx: number = this.cart.items.indexOf(item);
    
        if (indx !== -1) {
        
          this.cart.items.splice(indx, 1);
        }
    }


    removeItem(item: CartItem) {
        
        this.remove(item);
        
        this.cart.count -= item.count;
        this.cart.amount -= item.amount;
      }
    
      clearCart() {
        this.cart.items = [];
        this.cart.amount = 0;
        this.cart.count = 0;
    }

}   