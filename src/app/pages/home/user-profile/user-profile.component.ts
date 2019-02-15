import { Component, OnInit } from '@angular/core';
import { ParentService } from "../../../services/parent.service";
import { Parent } from "../../../models/index";
import { AlertsService } from "@jaspero/ng2-alerts";
import { ConfirmationService } from "@jaspero/ng2-confirmations";

declare var $: any;
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  currentParent: Parent;
  model: any = {}

  type: any = {};
  loading = false;

  securityQuestions = [
    { value: 'Mother Maiden Name', viewValue: 'Mother"s Maiden Name' },
    { value: 'Favourite Teacher', viewValue: 'what is the Name of your Favourite teacher' },
    { value: 'where did you meet your first love', viewValue: 'Where did you meet your first Love' },
    { value: 'favourite food', viewValue: 'what is the name of your favourite food' },
    { value: 'best friend name', viewValue: 'what is the name of your best friend' },
    { value: 'favourite time of the year', viewValue: 'when in your favourite time of the year' }
  ]

  designations = [
    { value: 'Mr' },
    { value: 'Mrs' },
    { value: 'Miss' },

  ]

  maritalStatuses = [
    { value: 'Divorced' },
    { value: 'Married' },
    { value: 'Complicated' },
    { value: 'Separated' },
    { value: 'Widowed' },
    { value: 'single' },
    { value: 'Engaged' }
  ]

  relationships = [
    { value: 'Father', viewValue: 'Father' },
    { value: 'Mother', viewValue: 'Mother' },
    { value: 'Brother', viewValue: 'Brother' },
    { value: 'Sister', viewValue: 'Sister' },
    { value: 'Cousin', viewValue: 'Cousin' },
    { value: 'Nephew', viewValue: 'Nephew' },
    { value: 'other', viewValue: 'other' }
  ]



  constructor(private parentService: ParentService,
    private alert: AlertsService,
    private confirm: ConfirmationService) { }

  ngOnInit() {

    $.getScript('../../../assets/js/jquery.bootstrap.wizard.js');

    $.getScript('../../../assets/js/jquery.validate.min.js');
    $.getScript('../../../assets/js/bootstrap-datepicker.js');
    $.getScript('../../../assets/js/gsdk-bootstrap-wizard.js');
    this.getCurrentUser();
  }
  open() {
    this.confirm.create('Are You Okay', 'Make Sure all Data filled are true in their correctness', { overlay: true, overlayClickToClose: true, showCloseButton: false, confirmText: 'Yes', declineText: 'No' }).
      subscribe(() => this.update());

  }

  getCurrentUser() {
    this.currentParent = JSON.parse(localStorage.getItem('currentParent'));
    this.parentService.getParentCurrentParentData(this.currentParent._id).subscribe(
      parent => { this.model = parent; }

    );
  }
  
  update() {
    this.loading = true;
    console.log(this.model);
    this.parentService.update(this.model).subscribe(
      data => {
        this.alert.create(this.type.success, "Parent Successfully Updated");

        error => {
          this.alert.create(this.type.error, "Sorry, Any error as Occured");
        }
      }
    );
    //     this.confirm.create("Update?", "Are you sure",{confirmText:"Yes", declineText:'No',overlay:true,showCloseButton:true,overlayClickToClose:true}).subscribe(

    //      ConfirmEmit=>
    //      { 






    //   }

    // );
    resolveEmit => {

    }

  }
}
