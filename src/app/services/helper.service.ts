import { Injectable } from '@angular/core';
import { helpers } from "../models/index";
import { AppConfig } from "../app.config";
import {Headers,Http , RequestOptions, Response } from "@angular/http";
@Injectable()
export class HelperService {

constructor(private http:Http, private config:AppConfig) { }
 




getAllbyParent(parentId:string){
  return this.http.get(this.config.ApiUrl + 'delegate/all/' + parentId, this.jwt()).map((response: Response) => response.json());}
getHelper(id:string){
  return  this.http.get(this.config.ApiUrl+'delegate/'+id, this.jwt()).map((res:Response)=>res.json());
}
create(Helper:helpers){
  return  this.http.post(this.config.ApiUrl+'delegate/create', Helper,this.jwt());
}

update(Helper:helpers){
   return this.http.put(this.config.ApiUrl+ 'delegate/'+ Helper._id, Helper, this.jwt());
}
 delete(id:string){
   return this.http.delete(this.config.ApiUrl+'delegate/' +id, this.jwt());
 }

private jwt() {
    // create authorization header with jwt token
    let currentParent = JSON.parse(localStorage.getItem('currentParent'));
    if (currentParent && currentParent.token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + currentParent.token });
        return new RequestOptions({ headers: headers });
    }

}
}
