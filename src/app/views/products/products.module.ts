import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products.component";
import {ProductCardComponent} from "../../components/common/product-card/product-card.component";
import {TitleComponent} from "../../components/common/title/title.component";
import {RouterModule} from "@angular/router";
import {WordUpperPipe} from "../../pipes/word-upper.pipe";

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
