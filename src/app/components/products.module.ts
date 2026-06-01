import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./pages/product/product.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductCardComponent} from "./common/product-card/product-card.component";
import {TitleComponent} from "./common/title/title.component";
import {RouterModule} from "@angular/router";
import {WordUpperPipe} from "../pipes/word-upper.pipe";

@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
    ProductCardComponent,
    TitleComponent,
    WordUpperPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ProductsModule { }
