import Swal from 'sweetalert2';
import { ProductCart } from './../../product/product-cart.model';
import { ProductService } from './../../product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-cart',
  templateUrl: './payment-cart.component.html',
  styleUrls: ['./payment-cart.component.scss']
})
export class PaymentCartComponent implements OnInit {

  productsCart: ProductCart[];

  constructor(public productService: ProductService) {
    this.productsCart = [];
  }

  ngOnInit(): void {
    this.readProductsCart();
    this.calculeTotal();
  }

  calculeTotal(): number {
    this.readProductsCart();

    return this.productsCart
      .map(({price, quantity}) => {
        if (price && quantity)
          return price * quantity;
        return 0;
      })
      .reduce((prevent, value) =>
        prevent + value, 0);
  }

  readProductsCart() {
    let productsCartStorage = localStorage.getItem("productsCart");

    this.productsCart = productsCartStorage ? JSON.parse(productsCartStorage) : [];
    this.productsCart.sort();
  }

  deleteProductCart(productCart: ProductCart) {
    Swal.fire({
      title: productCart.name,
      text: "Tem certeza que deseja excluir este item?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.delete(this.productsCart, productCart);
        this.readProductsCart();
        this.calculeTotal();

        Swal.fire(
          'Deletado!',
          'Deletado com sucesso.',
          'success'
        );
      }
    });
  }
}
