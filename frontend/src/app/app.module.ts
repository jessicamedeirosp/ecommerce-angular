import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PaymentCartMinimumComponent } from './components/nav/payment-cart-minimum/payment-cart-minimum.component';
import { ProductListComponent } from './views/product/product-list/product-list.component';
import { DetailsProductComponent } from './views/product/details-product/details-product.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentCartComponent } from './views/payment-cart/payment-cart/payment-cart.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PaymentCartMinimumComponent,
    ProductListComponent,
    DetailsProductComponent,
    PaymentCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
