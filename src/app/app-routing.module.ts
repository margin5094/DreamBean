import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CartViewComponent } from './cart/cart-view/cart-view.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path:'welcome', component: WelcomeComponent},
  {path:'auth', component:AuthComponent},
  {path:'cart', component:CartViewComponent},
  {path:'products', component:ProductListComponent,},
  {path: 'products/:id', component: ProductViewComponent,},
  {path: 'cart', component: CartViewComponent},
  {path: 'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
