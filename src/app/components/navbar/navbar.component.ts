import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar-routes.config';
import { Parent } from "../../models/index";
import { ParentService } from "../../services/parent.service";
import {AuthenticationService  } from "../../services/authentication.service";
import { Router } from "@angular/router";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
    
    current:Parent;

    constructor(location: Location,private parentService:ParentService,private route:Router, private auth:AuthenticationService, )
      
     {
      this.location = location;
    }

    ngOnInit(){
      this.listTitles = ROUTES.filter(listTitle => listTitle);
      this.current = JSON.parse(localStorage.getItem('currentParent'));
      this.getCurrentUser(this.current._id);
    }

  getCurrentUser(id:any){
  
    this.parentService.getParentCurrentParentData(id).subscribe(
      parent=>{this.current = parent; }
      
    )}
 
    

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }
}
