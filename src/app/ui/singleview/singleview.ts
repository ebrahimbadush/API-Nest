import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.html',
  styleUrl: './singleview.css',
})
export class Singleview implements OnInit {
  singleproduct:any;
  productId: string | null = null;
  loading = false;
  error: string | null = null;
  singleproductJson: string | null = null;
  constructor(private route:ActivatedRoute,private apiservice:Apiservice){}
  ngOnInit(){
    //parameter mapping
    const productid=this.route.snapshot.paramMap.get('titleid');
    this.productId = productid;
    // use navigation state product as immediate fallback (helps when network blocked)
    const navProduct = (history && (history.state as any)) ? (history.state as any).product : null;
    if (navProduct) {
      this.singleproduct = navProduct;
      try{ this.singleproductJson = JSON.stringify(this.singleproduct, null, 2); }catch(e){}
    }
    // fallback: try reading persisted navProduct from localStorage
    if(!this.singleproduct){
      try{
        const stored = localStorage.getItem('navProduct');
        if(stored){
          const obj = JSON.parse(stored);
          this.singleproduct = obj;
          this.singleproductJson = JSON.stringify(this.singleproduct, null, 2);
          localStorage.removeItem('navProduct');
          console.log('Loaded product from localStorage fallback');
        }
      }catch(err){ console.warn('Error reading navProduct from localStorage', err); }
    }
    console.log('Product ID from route:', productid);
    if(productid){
      this.loading = true;
      this.error = null;
      this.apiservice.getSingleProduct(productid).subscribe(
        (data:any)=>{
          console.log('Single product data:', data);
          this.singleproduct=data;
          this.loading = false;
        },
        (err:any)=>{
          console.error('Error fetching single product:', err);
          this.error = err?.message || 'Failed to load product';
          this.loading = false;
        }
      );
    } else {
      console.warn('No product ID found in route');
      this.error = 'No product ID in route';
    }
}
}