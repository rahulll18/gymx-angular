import { Component, Input } from '@angular/core';
import { Product } from '../customclasses/product';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductcardComponent {
  @Input()
  product = new Product();
}
