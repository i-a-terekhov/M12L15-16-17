import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {ProductsComponent} from "./components/pages/products/products.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ProductComponent} from "./components/pages/product/product.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
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
