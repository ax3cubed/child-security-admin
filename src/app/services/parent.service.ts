

import { Injectable } from '@angular/core';
import {Parent} from '../models/index'
import { AppConfig } from "../app.config";
import { Headers,Http , RequestOptions, Response} from "@angular/http";

@Injectable()
export class ParentService{

constructor(private http:Http, private config:AppConfig ) { }

create(parent:Parent){
   return this.http.post(this.config.ApiUrl + 'parent/register',parent);
}

getParentCurrentParentData(_id:string){
    return this.http.get(this.config.ApiUrl + 'parent/'+ _id, this.jwt()).map((response:Response)=> response.json());
}
upload(parentId:string,formData){
    return this.http.post(this.config.ApiUrl+ "image/"+parentId+"create",formData);
}


getAll(){
   return this.http.get(this.config.ApiUrl + 'parent', this.jwt()).map((response: Response) => response.json());
}

update(parent:Parent){
    return this.http.put(this.config.ApiUrl+ 'parent/'+ parent._id, parent, this.jwt());
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