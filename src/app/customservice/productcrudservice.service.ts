import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../customclasses/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductcrudserviceService {
  url = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url + '/addProducts', product);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '/getAllProducts');
  }

  getProductById(_id: number): Observable<Product> {
    return this.http.get<Product>(this.url + '/getProduct/' + _id);
  }

  deleteEmployeeById(_id: number): Observable<Object> {
    return this.http.delete<Object>(this.url + '/deleteProduct/' + _id);
  }
}
