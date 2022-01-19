import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HighchartsChartModule} from "highcharts-angular";
import { ShowProjectComponent } from './show-project/show-project.component';
import {TreeViewModule} from "@progress/kendo-angular-treeview";
import { TreeViewComponent } from './tree-view/tree-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowProjectComponent,
    TreeViewComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HighchartsChartModule,
        HttpClientModule,
        TreeViewModule,
        BrowserAnimationsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
