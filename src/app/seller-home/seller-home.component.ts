import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../datatype';
import { faTrash} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList:undefined| product[];
  productMessage: undefined| string;
  icon = faTrash;
  constructor(private product:ProductService){}

  ngOnInit(): void {
      this.List();
  }
  deleteProduct(id:number){
    console.warn("testing id to delete....",id)
    this.product.deleteProduct(id).subscribe((result)=>{
      if (result) {
        this.productMessage="Product is deleted successfully....."
        this.List();
      }
    })
    setTimeout(() => {
      this.productMessage=undefined;
    }, 3000);
  }

  List(){
    this.product.productList().subscribe((result)=>{
      console.warn("Seller home component result.....",result)
      this.productList= result;
    })
  }
}
