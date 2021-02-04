import { ProductListComponent } from './../../../views/product/product-list/product-list.component';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../../views/product/product.service';

@Component({
  selector: 'app-payment-cart-minimum',
  templateUrl: './payment-cart-minimum.component.html',
  styleUrls: ['./payment-cart-minimum.component.scss']
})
export class PaymentCartMinimumComponent
  extends ProductListComponent implements OnInit {

  constructor(public productService: ProductService) {
    super(productService);
  }
 
  ngOnInit() {    
    this.readProductsCart();
    this.calculeTotal();
  }
}
