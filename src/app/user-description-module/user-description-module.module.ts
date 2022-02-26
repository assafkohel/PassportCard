import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDescriptionModuleRoutingModule } from './user-description-module-routing.module';
import { UserDescriptionModuleComponent } from './user-description-module.component';


@NgModule({
  declarations: [UserDescriptionModuleComponent],
  imports: [
    CommonModule,
    UserDescriptionModuleRoutingModule
  ]
})
export class UserDescriptionModuleModule { }
