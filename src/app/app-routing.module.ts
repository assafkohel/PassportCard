import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './tabs/posts/posts.component';
import { UserdetailsComponent } from './tabs/userdetails/userdetails.component';

const routes: Routes = [
  {path : 'posts', component : PostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
