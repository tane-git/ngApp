import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgDocsComponent } from './ng-docs/ng-docs.component';

@NgModule({
  declarations: [
    AppComponent, //
    TodoListComponent, NgDocsComponent,
  ],
  imports: [
    BrowserModule, //
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
