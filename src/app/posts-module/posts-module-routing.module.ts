import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsModuleComponent } from './posts-module.component';

const routes: Routes = [{ path: '', component: PostsModuleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsModuleRoutingModule { }
