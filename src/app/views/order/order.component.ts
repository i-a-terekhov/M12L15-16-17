import {Component, OnDestroy} from '@angular/core';
import {CartService} from "../../shared/services/cart.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnDestroy{

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute, private productService: ProductService) {

  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  private subscribtion: Subscription | null = null;  // чтобы отписать от события, надо поместить результат подписки в переменную (не функция обработки внутри подписки)
  private subscribtionOrder: Subscription | null = null;

  ngOnInit() {
    // if (this.cartService.product-card) {
    //   this.formValues.productTitle = this.cartService.product-card;
    // }
    this.subscribtion = this.activatedRoute.queryParams.subscribe((params) => {  // "this.activatedRoute.queryParams" - это обзервайбл объект - объект, за изменением которого мы следим
      if (params['product']) {
        this.formValues.productTitle = params['product'];
      }
    })
  }

  ngOnDestroy() {
    this.subscribtion?.unsubscribe();  // отписываемся от добавления query параметра при завершении работы компонента
    this.subscribtionOrder?.unsubscribe();
  }

  createOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните пиццу');
      return;
    }
    if (!this.formValues.address) {
      alert('Заполните адрес');
      return;
    }
    if (!this.formValues.phone) {
      alert('Заполните телефон');
      return;
    }

    // ajax
    this.subscribtionOrder = this.productService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          alert('Спасибо за заказ');

          this.formValues = {
            productTitle: '',
            address: '',
            phone: '',
          }
        } else {
          alert('Ошибка');
        }
      })


  }
}
