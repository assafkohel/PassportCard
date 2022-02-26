import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDescriptionModuleComponent } from './user-description-module.component';

const routes: Routes = [{ path: '', component: UserDescriptionModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDescriptionModuleRoutingModule { }
