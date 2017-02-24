/**
 * This file and `main.node.ts` are identical, at the moment(!)
 * By splitting these, you're able to create logic, imports, etc that are "Platform" specific.
 * If you want your code to be completely Universal and don't need that
 * You can also just have 1 file, that is imported into both
 * client.ts and server.ts
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './index';
import { ShellComponent } from './shell/shell.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';

import { PostListComponent } from './post-list/post-list.component';

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

/**
 * Top-level NgModule "container"
 */
@NgModule({
  /** Root App Component */
  bootstrap: [ AppComponent ],
  /** Our Components */
  declarations: [ AppComponent, ShellComponent, PostListComponent ],
  imports: [
    /**
     * NOTE: Needs to be your first import (!)
     * BrowserModule, HttpModule, and JsonpModule are included
     */
    UniversalModule,
    FormsModule,
    /**
     * using routes
     */
    RouterModule.forRoot(appRoutes),
  ]
})
export class AppModule {

}
