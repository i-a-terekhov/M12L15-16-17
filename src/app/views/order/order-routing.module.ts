import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "../../core/auth/auth.guard";
import {OrderComponent} from "./order.component";

const routes: Routes = [
  { path: '', component: OrderComponent, canActivate: [AuthGuard] },  // оставили путь как '', т.к. теперь путь указывается в app-routing.module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
