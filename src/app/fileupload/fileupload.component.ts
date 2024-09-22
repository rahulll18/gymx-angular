import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductcrudserviceService } from '../customservice/productcrudservice.service';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css',
})
export class FileuploadComponent {
  productId = 0;
  productImage: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private prodcrud: ProductcrudserviceService
  ) {
    const routeParam = this.activeRoute.snapshot.paramMap.get('productId');
    if (routeParam != null) {
      this.productId = parseInt(routeParam);
    }
  }
  getFile(ev: any) {
    console.log(ev.target.files[0]);
    this.productImage = ev.target.files[0];
  }
  upload() {
    if (this.productImage != undefined) {
      const obs = this.prodcrud.uploadProductPicture(
        this.productId,
        this.productImage
      );
      obs.subscribe({
        next: (obj: any) => {
          if (obj.modifiedCount > 0) {
            window.alert('Image uploaded successfully....');
            this.router.navigate(['/products']);
          } else window.alert('No change....');
        },
        error: (err) => {
          console.log(err);
          window.alert('Something went wrong while uploading image....');
        },
      });
    }
  }
}
