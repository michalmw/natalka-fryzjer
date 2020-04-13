import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'view',
    component: ViewComponent
  }
];


@NgModule({
  declarations: [ListComponent, AddComponent, EditComponent, ViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
