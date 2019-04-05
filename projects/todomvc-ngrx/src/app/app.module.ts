import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { TodoStoreModule } from './store/todo/todo-store.module';
import { TodosComponent } from './view/container/todos/todos.component';

@NgModule({
  declarations: [AppComponent, TodosComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    TodoStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
