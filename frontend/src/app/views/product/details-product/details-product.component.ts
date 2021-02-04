import { Product } from './../product.model';
import { ProductListComponent } from './../product-list/product-list.component';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent extends
ProductListComponent implements OnInit {

  product: Product  = {
    id: "",
    name: "",
    description: "",
    price: null,
    installments: 10,
    image: ""
  };

  quantity: number;
  id: string =  "";

  constructor(
    public productService: ProductService,
    private route: ActivatedRoute
  ) {
    super(productService);
    this.readProductsCart();
    this.calculeTotal();
    this.quantity = 1;
  }

  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.readById(this.id).subscribe(product => {
      this.product = product;
    });
  }

  setQuantity(event: any) {
    this.quantity = event.target.value;
  }

  getQuantity() {
    return this.quantity;
  }

}

