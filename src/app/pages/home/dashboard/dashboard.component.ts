import { Component, OnInit } from '@angular/core';
import { ChildService, HelperService, ParentService, } from "../../../services/index";
import { JasperoChipsModule } from "@jaspero/ng2-chips";
import {  } from "@angular/common";
import { Parent, child,collectionRecord,helpers } from "../../../models/index";
declare function require(path: string): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="Dashboard";
date:Date;
currentParent:Parent;
current:any;
children:any=[];
helpers:any=[];
hideNote:boolean=false;
collectionRecords:collectionRecord[];


  constructor(public parentService:ParentService,
    public helperService:HelperService,
    public childService:ChildService
  ) { }

  ngOnInit() {
    this.currentParent = JSON.parse(localStorage.getItem('currentParent'));
    this.getCurrentUser(this.currentParent._id);
    this.getchildren(this.currentParent._id);
    this.getHelpers(this.currentParent._id);
  
  }
  hideNotification(){
    if (this.hideNote==true) {
    this.hideNote=false;   
    }
    this.hideNote=true;
  }

 
  getCurrentUser(id: any) {
    this.parentService.getParentCurrentParentData(id).subscribe(
      parent => { this.current = parent; }

    );
  }
  getchildren(id:any){
    this.childService.getByParentId(id).subscribe(
      data=>{this.children=  data; }
    );
  }
  getHelpers(id: any){
    this.helperService.getAllbyParent(id).subscribe(
      data=> { this.helpers= data; }
    );
  }
  // getCollectionRecords(){
  //   TODO COLLECTION VIEW BY PARENT
  // }

}
