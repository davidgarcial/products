import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { productCreateComponent } from './components/product-create/product-create.component';
import { productListComponent } from './components/product-list/product-list.component';
import { productEditComponent } from './components/product-edit/product-edit.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-product' },
  { path: 'create-product', component: productCreateComponent },
  { path: 'edit-product/:id', component: productEditComponent },
  { path: 'products-list', component: productListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
