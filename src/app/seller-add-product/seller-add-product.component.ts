import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage : string| undefined;
  constructor( private product:ProductService, private router:Router){}

  ngOnInit(): void {
        
  }

  submit(data:product){
      console.warn("Clicked on Submit add product data......",data);
      this.product.addProduct(data).subscribe((result)=>{
        console.warn(result);
        if (result) {
          this.addProductMessage="Product is Successfully Added..."
        }
        setTimeout(() => {
          this.addProductMessage=undefined
          this.router.navigate(['seller-home']);
        }, 3000);
      })
  }
}
