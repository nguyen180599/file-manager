import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HighchartsChartModule} from "highcharts-angular";
import {ShowProjectComponent} from './show-project/show-project.component';
import {TreeViewModule} from "@progress/kendo-angular-treeview";
import {TreeViewComponent} from './tree-view/tree-view.component';
import {FormViewComponent} from './form-view/form-view.component';
import {FormsModule} from "@angular/forms";
import {MenuTestComponent} from './menu-test/menu-test.component';
import {MarkdownComponent} from "./markdown/markdown.component";
import {IonicModule} from '@ionic/angular';
import {MarkdownModule } from "ngx-markdown";

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';

@NgModule({
  declarations: [
    AppComponent,
    ShowProjectComponent,
    TreeViewComponent,
    FormViewComponent,
    MenuTestComponent,
    MarkdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    HttpClientModule,
    TreeViewModule,
    BrowserAnimationsModule,
    FormsModule,
    MarkdownModule.forRoot(),
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
