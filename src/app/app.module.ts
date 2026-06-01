import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { CoolInputDirective } from './directives/cool-input.directive';
import { IsChickenDirective } from './directives/is-chicken.directive';
import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
import { MainComponent } from './components/pages/main/main.component';
import { AboutComponent } from './components/pages/about/about.component';
import {ProductService} from "./services/product.service";
import { OrderComponent } from './components/pages/order/order.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductsModule} from "./components/products.module";
import {CoreModule} from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    MainComponent,
    AboutComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    CoreModule,
    AppRoutingModule,  // AppRoutingModule должен быть подключен позже остальных модулей
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
