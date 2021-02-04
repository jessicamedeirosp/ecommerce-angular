import { PaymentCartComponent } from './views/payment-cart/payment-cart/payment-cart.component';
import { DetailsProductComponent } from './views/product/details-product/details-product.component';
import { ProductListComponent } from './views/product/product-list/product-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: "product/details/:id",
    component: DetailsProductComponent
  },
  {
    path: 'payment-cart',
    component: PaymentCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
