import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      productId: new FormControl(),
      productHeading: new FormControl(),
      productDescription: new FormControl(),
      productPrice: new FormControl(),
      productStrike: new FormControl(),
      productOffer: new FormControl(),
    });
  }

  get productFormId() {
    return this.productForm.get('productId');
  }

  collectProductData() {
    console.log(this.productForm);
    console.log(this.productFormId?.value);
  }
}
