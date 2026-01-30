import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservice {
  constructor(private https:HttpClient){ }
  getProduct(){
    return this.https.get("https://fakestoreapi.com/products");
  }
  getSingleProduct(id:string){
    return this.https.get(`https://fakestoreapi.com/products/${id}`);
  }
}
