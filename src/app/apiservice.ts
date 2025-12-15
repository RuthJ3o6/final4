import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private http: HttpClient) { }


  getProduct() {
    return this.http.get("http://dummyjson.com/products");
  }


  getsingleProducts(id: string) {
    return this.http.get(`http://dummyjson.com/products/${id}`);
  }
}
