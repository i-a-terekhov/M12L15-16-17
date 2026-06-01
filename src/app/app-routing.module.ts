import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./views/products/products/products.component";
import {OrderComponent} from "./views/order/order.component";
import {ProductComponent} from "./views/products/product/product.component";
import {AuthGuard} from "./core/auth/auth.guard";

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'pizzas', redirectTo: 'products' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})], /* реализаци HashLocationStrategy (для url) */
  exports: [RouterModule]
})
export class AppRoutingModule { }
