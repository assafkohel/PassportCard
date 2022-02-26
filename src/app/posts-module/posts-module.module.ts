import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsModuleRoutingModule } from './posts-module-routing.module';
import { PostsModuleComponent } from './posts-module.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [PostsModuleComponent],
  imports: [
    CommonModule,
    PostsModuleRoutingModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PostsModuleModule { }
