import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HelperService } from "../../../services/helper.service";
import { AlertsService } from "@jaspero/ng2-alerts";
import { ActivatedRoute, Router } from "@angular/router";
import { helpers} from "../../../models/index";

declare function require(path: string): any;
@Component({
  selector: 'app-delegate',
  templateUrl: './delegate.component.html',
  styleUrls: ['./delegate.component.css',],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DelegateComponent implements OnInit {
  title="Delegate Registration";
  currentParent: any;
  model: any = {}
  public submitted: boolean = false;
  isDisabled=true;
  type: any = {};
  delegates: helpers[] = [];

  constructor(private alert: AlertsService,
    private helperService: HelperService) { }

  ngOnInit() {
    require('../../../../assets/js/jquery.bootstrap.wizard.js');
    require('../../../../assets/js/bootstrap-datepicker.js');
    require('../../../../assets/js/gsdk-bootstrap-wizard.js');
    this.currentParent = JSON.parse(localStorage.getItem('currentParent'));
    this.loadAllUsers();
  }
  clear(){
    this.model =={};
  }
  delete(id: any) {
    this.helperService.delete(id).subscribe(
      data => {
        this.loadAllUsers();
      }
    )
  }
  private loadAllUsers() {
    if (this.model=="") {
      
    }
    this.helperService.getAllbyParent(this.currentParent._id).subscribe(

      delegate=> { this.delegates = delegate; console.log(delegate) });
    console.log(this.delegates);


  }
  getDelegate(id:string){
    this.helperService.getHelper(id).subscribe(
      data=>{
        this.model= data;
      console.log(data);
      this.isDisabled=false;
      },
      error=>{
        this.alert.create(this.type.error, "an error occured");
      }
    );
  }

  deleted(model: any) {
    model.deleted = true;
    this.helperService.update(model).subscribe(
      data => {
        this.alert.create(this.type.success, "operation Successful");
        this.loadAllUsers();
        console.log(model);
      },
      error => {
        this.alert.create(this.type.error, "Error performing operation");
      }

    );
  }


  public onSubmit() {

    this.submitted = true;
    this.model.parentId = this.currentParent._id;
    if (this.model != null) {
      console.log(this.model);
      this.helperService.create(this.model).subscribe(

        data => {
          this.alert.create(this.type.success, 'Registration successful');
          this.loadAllUsers();
          this.model = {};

        },
        error => {
          this.alert.create(this.type.error, error._body);

        });


    }
  }


}
