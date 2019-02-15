import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from "./alert.service";
import {  AuthenticationService} from "./authentication.service";
import { ParentService } from "./parent.service";
import { ChildService } from "./child.service";
import {HelperService  } from "./helper.service";
import { CollectionService } from "./collection.service";

@NgModule({
  imports: [
    CommonModule,
    
  ],
  declarations: [],
  providers:[AlertService,CollectionService,AuthenticationService,ParentService,HelperService, ChildService]
})
export class ServicesModule { }
