import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';

export const appRoutes: Routes = [
  { path: '', component: PostListComponent },
];

//export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);