import {Component} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CartService} from "../../../services/cart.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, map, of, retry, tap, throwError} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit() {
    // this.products = this.productService.getProducts();
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('Демонстрация того, что observable переходит в next, несмотря на ошибку (потому что оператор of вернул новый observable)');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }

}
