import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { PictureUploaderComponent } from './pictureUploader/pictureUploader.component';
import { BaFileUploader } from "./baFileUploader/baFileUploader.component";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent, 
    NavbarComponent, 
    SidebarComponent,
    LoaderComponent,
    PictureUploaderComponent,
    BaFileUploader
],
  exports: [
    FooterComponent, 
    NavbarComponent, 
    SidebarComponent, 
    LoaderComponent,
    PictureUploaderComponent,
    BaFileUploader

  ],
  
})
export class ComponentsModule { }
