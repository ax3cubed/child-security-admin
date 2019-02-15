import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AlertsService } from "@jaspero/ng2-alerts";

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    type:any={};
    constructor(private http: Http, private config: AppConfig, private alert:AlertsService) { }

    login(email: string, password: string) {
        return this.http.post(this.config.ApiUrl + 'parent/authenticate', { email:email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let parent = response.json();
                if (parent && parent.token) {
                    // store admin details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentParent', JSON.stringify(parent));
                }
                if (!localStorage.getItem('currentParent')) {
                    this.alert.create(this.type.error, "Make sure Cookies is Enabled in your Browser");
                    
                }
            }); 
           
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentParent');
       
       
    }
}