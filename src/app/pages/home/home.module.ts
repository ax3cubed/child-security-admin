import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';
import { FormsModule , ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ChildComponent } from './child/child.component';
import { DelegateComponent } from './delegate/delegate.component';
import { CollectionComponent } from './collection/collection.component';
import { JasperoConfirmationsModule } from "@jaspero/ng2-confirmations";
import {MatDatepickerModule , MatFormFieldModule,MatCardModule, MatNativeDateModule,MatRadioModule,MatSelectModule,MatButtonModule, MatInputModule,MatIconModule } from "@angular/material";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";
import { JasperoChipsModule } from "@jaspero/ng2-chips";
import { PipesModule } from "../../pipes/pipes.module";
// import { NgUploaderModule } from "ngx-uploader";
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    JasperoConfirmationsModule,
    NgxQRCodeModule,
    JasperoChipsModule,
    PipesModule,
    // NgUploaderModule
    
  ],
  declarations: [
    HomeComponent, 
    DashboardComponent, 
    UserProfileComponent, 
    TableListComponent, 
    TypographyComponent, 
    IconsComponent, 
    MapsComponent, 
    NotificationsComponent, 
    UpgradeComponent,
    UsersListComponent,
    ChildComponent,
    DelegateComponent,
    CollectionComponent,
    
    
]
})
export class HomeModule { }
