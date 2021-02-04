import { ProductCart } from './product-cart.model';
import { ErrorHandler } from './../../app.error-handler';
import { Product } from './product.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(private http: HttpClient) { }

  create(productsCart: ProductCart[]): void{
    localStorage.setItem("productsCart", JSON.stringify(productsCart));
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map(object => object),
      catchError(ErrorHandler.errorHandler)
    );
  }

  readById(id: string | null): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map(object => object),
      catchError(ErrorHandler.errorHandler)
    );
  }

  update(productsCart: ProductCart[], product: ProductCart, productCart: ProductCart): void{
    productsCart[productsCart.indexOf(product)] = productCart;
  }


  delete(productsCart: ProductCart[], productCart: ProductCart): void {
    productsCart.splice(productsCart.indexOf(productCart), 1);
    this.create(productsCart);
  }

}
