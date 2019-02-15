import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestMethod ,RequestOptions} from "@angular/http";
import { collectionRecord } from "../models/index";
import {  AppConfig} from "../app.config";
@Injectable()
export class CollectionService {

constructor(private http:Http, private config:AppConfig) { }


getAllbyParentId(parent_id:string){
    this.http.get(this.config.ApiUrl+'collection/'+parent_id,this.jwt()).map((res:Response)=>res.json());
}
getSingleCollection(id:string){
    this.http.get(this.config.ApiUrl+ 'collection/'+ id, this.jwt()).map((res:Response)=>res.json());
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