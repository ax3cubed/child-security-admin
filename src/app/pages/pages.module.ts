import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterModule } from "@angular/router";
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "../services/authentication.service";
import { ComponentsModule } from "../components/components.module";
import { AlertComponent } from "../components/alert/alert.component";
import {  AlertService} from "../services/alert.service";
import { JasperoConfirmationsModule} from "@jaspero/ng2-confirmations";


import { NoopAnimationsModule } from "@angular/platform-browser/animations";
;
import {MatDatepickerModule , MatFormFieldModule,MatCardModule, MatNativeDateModule,MatRadioModule,MatSelectModule,MatButtonModule, MatInputModule,MatIconModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    JasperoConfirmationsModule,
    
   
   // MatCheckboxModule

  ],
  declarations: [
    LoginComponent, 
    SignupComponent, 
    NotFoundComponent,
    AlertComponent
    
  ],
  providers:[AuthenticationService,RouterLink, AlertService]
})
export class PagesModule { }
