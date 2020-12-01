import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminSectionsModule } from './admin-sections/admin-sections.module';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent
  }
];

@NgModule({
  declarations: [AdminContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminSectionsModule
  ]
})
export class AdminModule { }
