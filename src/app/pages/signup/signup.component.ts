import { Component, OnInit , ViewChild,ViewEncapsulation} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ParentService} from "../../services/parent.service";
import {  AlertsService} from "@jaspero/ng2-alerts";
import {AuthenticationService  } from "../../services/authentication.service";
import { ConfirmationService } from "@jaspero/ng2-confirmations";
declare var $:any;

@Component({
moduleId:module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
styleUrls: ['bootstrap.min.css','demo.css','material-kit.css','gsdk-bootstrap-wizard.css'],
encapsulation: ViewEncapsulation.Emulated

})
export class SignupComponent implements OnInit {

title = "Register";
model: any= {};
    @ViewChild('photo') photo;
loading = false;
password:any={};
type:any={};
securityQuestions=[
    {value:'Mother Maiden Name', viewValue:'Mother"s Maiden Name'},
    {value:'Favourite Teacher', viewValue:'what is the Name of your Favourite teacher'},
    {value:'where did you meet your first love', viewValue:'Where did you meet your first Love'},
    {value:'favourite food', viewValue:'what is the name of your favourite food'},
    {value:'best friend name', viewValue:'what is the name of your best friend'},
    {value:'favourite time of the year', viewValue:'when in your favourite time of the year'}
]

designations=[
    {value:'Mr'},
    {value:'Mrs'},
    {value:'Miss'},
   
]

maritalStatuses =[
    {value:'Divorced'},
    {value:'Married'},
    {value:'Complicated'},
    {value:'Separated'},
    {value:'Widowed'},
    {value:'single'},
    {value:'Engaged'}
]

relationships =[
    {value:'Father', viewValue:'Father'},
    {value:'Mother', viewValue:'Mother'},
    {value:'Brother', viewValue:'Brother'},
    {value:'Sister', viewValue:'Sister'},
    {value:'Cousin', viewValue:'Cousin'},
    {value:'Nephew', viewValue:'Nephew'},
    {value:'other', viewValue:'other'}
]

  constructor(
    private parentService:ParentService,
    private router:Router,
    private alertService:AlertsService,
    private confirmationService:ConfirmationService,
    private authenticationService:AuthenticationService) { }

ngOnInit() { 
    this.authenticationService.logout();


          $.getScript('../../../assets/js/jquery.bootstrap.wizard.js');
    
          $.getScript('../../../assets/js/jquery.validate.min.js');
          $.getScript('../../../assets/js/bootstrap-datepicker.js');
          $.getScript('../../../assets/js/gsdk-bootstrap-wizard.js');
          
        }

        open(){
            this.confirmationService.create('Are You Okay','Make Sure all Data filled are true in their correctness',{overlay:true,overlayClickToClose:true,showCloseButton:false,confirmText:'Yes',declineText:'No'}).
            subscribe((ans:any)=>this.register(ans));            

        }

        upload(){
            let filebrowser = this.photo.nativeElement;
            if (filebrowser.files && filebrowser.files[0]) {
                const formData = new FormData();
                formData.append("image",filebrowser.files[0]);
                this.parentService.upload(this.model._id,formData);
            }
        }
   

  register(ans:any){
    this.loading = true;
    
    if (ans.resolved==true) {
       console.log(ans.resolved);
   
  
   this.parentService.create(this.model)
       .subscribe(
           
           data => {
               this.alertService.create(this.type.success,'Registration successful You can now login');
              
           },
           error => {
               this.alertService.create(this.type.error,error._body);
               this.loading = false;
           });

  }
  console.log(ans.resolved);
}
}
