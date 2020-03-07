import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  MainComponent,
  ComponentChildAComponent,
  ComponentChildBComponent
} from './component/index';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'component-a',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'component-a', component: ComponentChildAComponent },
      { path: 'component-b', component: ComponentChildBComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
