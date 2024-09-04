import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  result: any;
  akshow 
  delete
  

  constructor(private _tfi:ProductsService){
    

  }
 ngOnInit(){
  this._tfi.getproduct().then(
    (res)=>{
      console.log(res.products);
      this.result=res.products
      
    }
  )
  this._tfi.apidel().subscribe(
    (api)=>{
      this.akshow= api.products
    }
  )
  
 }

 fun(Iid){
  this._tfi.del(Iid).subscribe(
    (res)=>{
      this.delete =res;
    }
  )
 }
 
 
}
