import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { Router } from "@angular/router";

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {

  products: any[] = [];
  constructor(private apiservice: Apiservice, private router: Router) {}
  ngOnInit(): void {
    this.apiservice.getProduct().subscribe((data: any) => {
      this.products = data;
    })
  }

  goToSingle(product: any) {
    const id = product?.id;
    try {
      localStorage.setItem('navProduct', JSON.stringify(product));
    } catch (e) {
      console.warn('Could not write navProduct to localStorage', e);
    }
    this.router.navigate(['/singleview-titleid', id], { state: { product } });
  }
}