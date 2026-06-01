import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./views/products/products/products.component";
import {OrderComponent} from "./views/order/order.component";
import {ProductComponent} from "./views/products/product/product.component";
import {AuthGuard} from "./core/auth/auth.guard";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] },
  // { path: '**', component: MainComponent }, /* компонент, который сработает если страница не найдена (обычно 404) */
  { path: 'pizzas', redirectTo: 'products' },           /* а это переадресация (например, если страница сменила адрес) */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})], /* реализаци HashLocationStrategy (для url) */
  exports: [RouterModule]
})
export class AppRoutingModule { }
