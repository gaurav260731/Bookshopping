import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorbookComponent } from '../app/Component/authorbook/authorbook.component';
import { ChildrenbookComponent } from '../app/Component/childrenbook/childrenbook.component';
import { SchoolbooksComponent } from '../app/Component/schoolbooks/schoolbooks.component';
import { HomeComponent } from '../app/Component/home/home.component';

const routes: Routes = [
  {
    path: 'authorbook',
    component:AuthorbookComponent
  },
  {
    path: 'childrenbook',
    component: ChildrenbookComponent
  },
  {
    path: 'schoolbook',
    component: SchoolbooksComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
