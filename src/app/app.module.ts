

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {  GuardsModule} from "./guards/guards.module";
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import {AppConfig  } from "./app.config";
import { AppComponent } from './app.component';
import { PipesModule } from "./pipes/pipes.module";
import { NgUploaderModule } from "ngx-uploader";
import { ServicesModule } from "./services/services.module";
import { JasperoAlertsModule } from "@jaspero/ng2-alerts";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    GuardsModule,
    ServicesModule,
    JasperoAlertsModule,
    PipesModule,
    NgUploaderModule
   
   
  ],
  providers: [AppConfig ],
  bootstrap: [AppComponent]
})
export class AppModule { }
