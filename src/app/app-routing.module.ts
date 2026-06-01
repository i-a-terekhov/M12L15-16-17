import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  { path: 'pizzas', redirectTo: 'products' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled', useHash: true})], /* реализаци HashLocationStrategy (для url) */
  exports: [RouterModule]
})
export class AppRoutingModule { }
