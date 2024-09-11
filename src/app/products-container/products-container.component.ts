import { Component } from '@angular/core';
import { Product } from '../customclasses/product';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css',
})
export class ProductsContainerComponent {
  products: Product[] = [
  new Product(1, 'Stringer', 'Checks Stringer Ultimate Grey', 'Rs. 399', 'Rs. 900', '60% off'),
  new Product(2, 'T-Shirt', 'Compression Fullsleeves T-shirt', 'Rs. 379', 'Rs. 749', '49% off'),
  new Product(3, 'OverSized Shirt', 'Blurred Oversized T-shirts', 'Rs. 499', 'Rs. 1499', '66% off'),
  new Product(4, 'Compression fit', 'Compression 2.0 T-shirt Black', 'Rs. 484', 'Rs. 749', '35% off'),
  new Product(5, 'Crop Top', 'Legacy Crop Top T-shirt Mustard', 'Rs. 699', 'Rs. 999', '30% off'),
  new Product(6, 'Slim Fit', 'Legacy T-shirt Bottle Green', 'Rs. 499', 'Rs. 749', '33% off'),
  new Product(7, 'Sports Bra', 'Pro Sports Bra Rust', 'Rs. 699', 'Rs. 1499', '53% off'),
  new Product(8, 'Tank Top', 'Bold Melange Tank Orange', 'Rs. 549', 'Rs. 999', '45% off'),
  new Product(9, 'Yoga Mat', 'Non-Slip Yoga Mat Carrying Strap', 'Rs. 999', 'Rs. 1,499', '33% off'),
  new Product(10, 'Dumbbell Set', 'Adjustable Dumbbell Set (2kg - 20kg)', 'Rs. 3,499', 'Rs. 4,999', '30% off'),
  new Product(11, 'Kettlebell', 'Cast Iron Kettlebell 16kg', 'Rs. 1,799', 'Rs. 2,499', '28% off'),
  new Product(12, 'Resistance Bands', 'Set of 5 Resistance Bands with Door Anchor', 'Rs. 799', 'Rs. 1,199', '33% off'),
  new Product(13, 'Foam Roller', 'High-Density Foam Roller', 'Rs. 599', 'Rs. 999', '40% off'),
  new Product(14, 'Pull-Up Bar', 'Adjustable Doorway Pull-Up Bar', 'Rs. 1,499', 'Rs. 2,199', '32% off'),
  new Product(15, 'Jump Rope', 'Speed Jump Rope with Adjustable Length', 'Rs. 399', 'Rs. 699', '43% off'),
  new Product(16, 'Exercise Ball', 'Anti-Burst Exercise Ball 65cm', 'Rs. 899', 'Rs. 1,399', '36% off'),
  new Product(17, 'Whey Protein', 'Premium Whey Protein Powder 2kg', 'Rs. 2,999', 'Rs. 4,999', '40% off'),
  new Product(18, 'BCAA', 'BCAA Powder 400g', 'Rs. 1,499', 'Rs. 2,499', '40% off'),
  new Product(19, 'Pre-Workout', 'High Energy Pre-Workout 300g', 'Rs. 1,999', 'Rs. 3,299', '39% off'),
  new Product(20, 'Creatine', 'Micronized Creatine Monohydrate 300g', 'Rs. 899', 'Rs. 1,499', '40% off'),
  new Product(21, 'Multivitamin', 'Daily Multivitamin Tablets - 60 Count', 'Rs. 699', 'Rs. 999', '30% off'),
  new Product(22, 'Fish Oil', 'Omega-3 Fish Oil Capsules - 90 Count', 'Rs. 799', 'Rs. 1,199', '33% off'),
  new Product(23, 'Glutamine', 'L-Glutamine Powder 300g', 'Rs. 1,299', 'Rs. 1,999', '35% off'),
  new Product(24, 'Mass Gainer', 'Advanced Mass Gainer 3kg', 'Rs. 3,499', 'Rs. 5,499', '36% off'),
  ];
}
