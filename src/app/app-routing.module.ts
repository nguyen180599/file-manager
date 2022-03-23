import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormViewComponent} from "./form-view/form-view.component";
import {ShowProjectComponent} from "./show-project/show-project.component";

const routes: Routes = [
  {
    path: '',
    component: ShowProjectComponent
  },
  {
    path: 'form',
    component: FormViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
