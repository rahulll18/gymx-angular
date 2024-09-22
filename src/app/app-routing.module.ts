import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HomeComponent } from './home/home.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
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
  {
    path: 'editpic/:productId',
    component: FileuploadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
