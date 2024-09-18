import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductFormComponent } from './product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'adminlogin',
    pathMatch: 'full',
  },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
  },
  {
    path: 'products',
    component: ProductsContainerComponent,
  },
  {
    path: 'addProduct',
    component: ProductFormComponent,
  },
  {
    path: 'editProduct/:productId',
    component: ProductFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
