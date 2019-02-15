import { Component, OnInit, Input } from '@angular/core';
import { ChildService } from "../../../services/child.service";
import { AlertsService } from "@jaspero/ng2-alerts";
import { ActivatedRoute, Router } from "@angular/router";
import { child } from "../../../models/index";
import { ChildFilterPipe } from "../../../pipes/childFilter.pipe";
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title="Child Registration"
  currentParent: any;
  model: any = {}
  public submitted: boolean = false;
  hidden = true;
  type: any = {};
  children: child[] = [];



  constructor(
    private alert: AlertsService,
    private childService: ChildService) {

  }




  ngOnInit() {
    this.currentParent = JSON.parse(localStorage.getItem('currentParent'));
    this.loadAllUsers();


  }

  clear() {
    this.model == {};
  }
  delete(id: any) {
    this.childService.delete(id).subscribe(
      data => {
        this.loadAllUsers();
      }
    )
  }
  getChildById(id: string) {
    this.childService.getchild(id).subscribe(
      data => {
        this.model = data;
        this.hidden = false;
      },
      error => {
        this.alert.create(this.type.error, "an error has occured", { duration: 300, overlay: true, overlayClickToClose: true, showCloseButton: false });
      },

    );
  }
  private loadAllUsers() {
    this.hidden = true;
    this.childService.getByParentId(this.currentParent._id).subscribe(

      child => {
        this.children = child; console.log(child)
      });
    console.log(this.children);


  }

  deleted(model: any) {
    model.deleted = true;
    this.childService.update(model).subscribe(
      data => {
        this.alert.create(this.type.success, "Successful");
        this.loadAllUsers();
        console.log(model);
      },
      error => {
        this.alert.create(this.type.error, "Error Performing operation");
      }

    );
  }


  public onSubmit() {

    this.submitted = true;
    this.model.parentId = this.currentParent._id;
    if (this.model != null) {
      console.log(this.model);
      this.childService.create(this.model).subscribe(

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
