import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'posts', loadChildren: () => import('./posts-module/posts-module.module').then(m => m.PostsModuleModule) },
  { path: 'userDescription', loadChildren: () => import('./user-description-module/user-description-module.module').then(m => m.UserDescriptionModuleModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
