import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {from, map, Observable, Subject, Subscription} from "rxjs";

declare var bootstrap: any; // декларирование переменной bootstrap для обхода ограничений TS

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {


  // private observable: Observable<number>;
  private subject: Subject<number>

  constructor(public cartService: CartService) {
    this.subject = new Subject<number>();  // в subject сразу НЕ передается функция
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 4100);


    // this.observable = from([1, 2, 3, 4, 5])

    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete();
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('text of error');
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    //
    // });
  }

  private subscription: Subscription | null = null;

  ngOnInit() {
    const myModalAlternative = new bootstrap.Modal('#myModal', {});
    myModalAlternative.show();

    this.subscription = this.subject        // у subject такой же принцип работы подписки, что и у observable
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber 1:', param);
          },
          error: (error: string) => {
            console.log('ERROR!' + error);
          }
        }
      );
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();  // отписка в subject такая же, как в observable
  }

  test() {
    this.subject
      .pipe(
        map((number) => {
          return 'Число:' + number;
        })
      )
      .subscribe((param: string) => {
      console.log('subscriber 2:', param);
    });
  }
}
