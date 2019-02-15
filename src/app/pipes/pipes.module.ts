import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChildFilterPipe } from './childFilter.pipe';
import { BaAppPicturePipe } from "./baAppPicture/baAppPicture.pipe";
import { BaKameleonPicturePipe } from "./baKameleonPicture/baKameleonPicture.pipe";
import { BaProfilePicturePipe } from "./baProfilePicture/baProfilePicture.pipe";
// import { NgUploaderModule } from "ngx-uploader";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
 
  ],
  declarations: [
    ChildFilterPipe,BaAppPicturePipe,BaKameleonPicturePipe,BaProfilePicturePipe
  ],
  exports: [ChildFilterPipe, BaAppPicturePipe, BaKameleonPicturePipe, BaProfilePicturePipe],

  providers: [ChildFilterPipe, BaAppPicturePipe, BaKameleonPicturePipe, BaProfilePicturePipe]
})
export class PipesModule { }
