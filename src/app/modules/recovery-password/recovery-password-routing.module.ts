import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecoveryPasswordComponent } from './recovery-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'id'
  },
  {
    path: 'id',
    component: RecoveryPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecoveryPasswordRoutingModule { }
