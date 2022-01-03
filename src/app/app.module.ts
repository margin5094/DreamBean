import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { WelcomeComponent } from "./welcome/welcome.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AuthComponent } from "./auth/auth.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner.component";
import { CartMenuComponent } from "./cart/cart-menu/cart-menu.component";
import { CartViewComponent } from "./cart/cart-view/cart-view.component";
import { CategoryCardComponent } from "./category/category-card/category-card.component";
import { CategoryListComponent } from "./category/category-list/category-list.component";
import { CategorySliderComponent } from "./category/category-slider/category-slider.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { ProductCardComponent } from "./product/product-card/product-card.component";
import { ProductGridComponent } from "./product/product-grid/product-grid.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductSearchComponent } from "./product/product-search/product-search.component";
import { ProductViewComponent } from "./product/product-view/product-view.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    CartMenuComponent,
    CartViewComponent,
    CategoryCardComponent,
    CategoryListComponent,
    CategorySliderComponent,
    CheckoutComponent,
    ProductCardComponent,
    ProductGridComponent,
    ProductListComponent,
    ProductSearchComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
