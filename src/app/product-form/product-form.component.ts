import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../customclasses/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductcrudserviceService } from '../customservice/productcrudservice.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  productForm: FormGroup;
  product = new Product();

  constructor(
    private productcrud: ProductcrudserviceService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    const routeParam = activeRoute.snapshot.paramMap.get('productId');
    if (routeParam != null) {
      let productId = parseInt(routeParam);
      console.log(productId);
      this.getProd(productId);
    }
    this.productForm = new FormGroup({
      productId: new FormControl(),
      productHeading: new FormControl(),
      productDescription: new FormControl(),
      productPrice: new FormControl(),
      productStrike: new FormControl(),
      productOffer: new FormControl(),
    });
  }

  get productId() {
    return this.productForm.get('productId');
  }

  get productHeading() {
    return this.productForm.get('productHeading');
  }

  get productDescription() {
    return this.productForm.get('productDescription');
  }

  get productPrice() {
    return this.productForm.get('productPrice');
  }

  get productStrike() {
    return this.productForm.get('productStrike');
  }

  get productOffer() {
    return this.productForm.get('productOffer');
  }

  collectProductData() {
    console.log(this.productForm.value);
    console.log(this.productId?.value);
    this.product = this.productForm.value;
    if (this.activeRoute.snapshot.routeConfig?.path?.includes('addProduct')) {
      this.addProducts();
    } else {
    }
  }

  addProducts() {
    const obs = this.productcrud.addProduct(this.product);
    obs.subscribe({
      next: (product) => {
        window.alert(
          `Product added successfully....`
        );
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.log(err);
        window.alert('something went wrong while adding...');
      },
    });
  }

  getProd(_id:number){
    const obs=this.productcrud.getProductById(_id);
    obs.subscribe({
      next:(prod:any)=>{
      //  console.log(prod);
        // this.productForm.setValue(prod); // setValue : strict
        this.productForm.patchValue(prod[0]); // :not strict
      },
      error: (err)=>{
        console.log(err); 
        window.alert("something went wrong while searching...")
      }
    });
  }
}
