import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-tdfprc',
  templateUrl: './tdfprc.component.html',
  styleUrls: ['./tdfprc.component.css']
})
export class TDFPRCComponent {
result: any;
postdata(data: any) {
  
  console.log(data.value)
}
coding=["java","c","angular"]
userForm: any;
  

 

constructor(private _tfi:ProductsService){

}
ngOnInit(){
this._tfi.getproduct().then(
  (res)=>{
    console.log(res.products);
    this.result=res.products
    
  }
)
}
 
}
