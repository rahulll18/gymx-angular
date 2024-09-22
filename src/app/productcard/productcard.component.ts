import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../customclasses/product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductcardComponent {
  @Input()
  product = new Product();

  @Output()
  emitter = new EventEmitter<number>();

  productImageSrc: string = '';

  ngOnInit(): void {
    this.loadProductImage();
  }

  loadProductImage(): void {
    if (this.product.productImage) {
      this.convertToBase64(this.product.productImage.data);
    } else {
      this.productImageSrc =
        'https://fuaark.com/cdn/shop/files/FuaarkChecksStringerUltimateGrey_1.jpg?v=1716526924&width=580';
    }
  }

  convertToBase64(binaryData: any): void {
    const base64String = btoa(
      new Uint8Array(binaryData).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
    this.productImageSrc = 'data:image/png;base64,' + base64String;
  }

  // Emit the productId when a specific action is triggered
  onAction(): void {
    this.emitter.emit(this.product.productId);
  }
}
