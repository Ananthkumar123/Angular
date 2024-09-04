import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  
  link1 ="https://dummyjson.com/products/";

  constructor(private _client:HttpClient){}

  public getproduct():Promise<any>{

    return this._client.get(this.link1).toPromise(); //alternate
    
   // return  firstValueFrom(this._client.get(this.link1))
  }
  
  
  public apidel():Observable<any>{
    return this._client.get(this.link1)
  }
   public del(Iid){
    return this._client.delete(this.link1+Iid)
    
   }
  
  
}
