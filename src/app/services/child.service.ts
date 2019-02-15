import { Injectable } from '@angular/core';
import {child } from "../models/index";
import { AppConfig } from "../app.config";
import {Headers,Http , RequestOptions, Response } from "@angular/http";

@Injectable()
export class ChildService {

constructor(private http:Http, private config:AppConfig) { }


getByParentId(parentId:string){
return this.http.get(this.config.ApiUrl+ 'child/all/' + parentId, this.jwt()).map((response:Response)=> response.json());
   
}
getchild(id:string){
   return this.http.get(this.config.ApiUrl+'child/'+id,this.jwt()).map((res:Response)=>res.json());
}

create(child:child){
   return this.http.post(this.config.ApiUrl+'child/create', child,this.jwt());
}

delete(id:string){
    return this.http.delete(this.config.ApiUrl+'child/'+ id,this.jwt());
}

update(child:child){
   return this.http.put(this.config.ApiUrl+ 'child/'+ child._id, child, this.jwt());
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