import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ParentService} from "../../services/parent.service";
import {AuthenticationService  } from "../../services/authentication.service";
import { AlertsService } from "@jaspero/ng2-alerts";
declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
  '../../../assets/css/material-kit.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  title="login";
  type:any={};
  model:any= {}
  loading=false;
  constructor(
   private route:ActivatedRoute,
    private router:Router,
    private authenticationService: AuthenticationService,
    private alertService:AlertsService
  ) { }

  login(){
     this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.create(this.type.error,error._body);
                    this.loading = false;
                });
    }
  

  ngOnInit() {
    //console.log(this.date.toJSON());
    $.getScript('../../../assets/js/material-kit.js');
      // reset login status
      this.authenticationService.logout();
      
              // get return url from route parameters or default to '/'
              this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home/dashboard';
  }

}