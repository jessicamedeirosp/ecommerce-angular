import { PaymentCartComponent } from './../../payment-cart/payment-cart/payment-cart.component';
import  Swal from 'sweetalert2';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent
  extends PaymentCartComponent implements OnInit {

  products: Product[];
  quantity: number;
  constructor(
    public productService: ProductService
  ) {
    super(productService);
    this.products = [];
    this.quantity = 1;
    this.readProductsCart();
  }

  ngOnInit(): void {
    this.getProducts();
    this.readProductsCart();
    this.calculeTotal();
  }


  valueForInstallment(price : number | null, installments:  number | null ) : number {
    if (price && installments)
      return price / installments;
    return 0;
  };

  getProducts() {
    this.productService.read().subscribe(products => {
      this.products = products;
    });

    this.products.sort();
  }

  hasProductCart(productAdd: Product, quantity: number = 1, total: number): Object {
    return this.productsCart.filter(item => {
      if (item.id === productAdd.id) {
        quantity = parseInt(String(quantity)) + parseInt(String(item.quantity));
        total = parseFloat(String(productAdd.price)) * quantity;

        this.productService.update(this.productsCart, item, {...item, quantity, total });
        return item;
      }
      return;
    }).reduce((value, item) => item, {});
  }

  addItemCart(productAdd: Product, quantity: number = 1): void {
    let total: number = parseFloat(String(productAdd.price)) *  parseFloat(String(quantity));
    let newProduct = {
      ...productAdd,
      quantity,
      total
    }

    if (!Object.keys(this.hasProductCart(productAdd, quantity, total)).length ||
        !this.productsCart.length)
      this.productsCart.push(newProduct);

    this.productService.create(this.productsCart);
    this.readProductsCart();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Produto adicionado com sucesso!',
      showConfirmButton: false,
      timer: 1500
    });
  }
}
