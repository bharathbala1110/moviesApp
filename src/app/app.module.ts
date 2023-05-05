// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
// import { NgxSpinnerModule } from "ngx-spinner";

import {HttpClientModule} from '@angular/common/http'
// import { NgxSpinnerModule } from "ngx-spinner";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { 
  
}
