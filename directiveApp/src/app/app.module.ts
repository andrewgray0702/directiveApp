import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouseFocusDirective } from './directives/mouse-focus.directive';
import { MissedBirthdayDirective } from './directives/missed-birthday.directive';
import { BirthdayCompComponent } from './birthday-comp/birthday-comp.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    MouseFocusDirective,
    MissedBirthdayDirective,
    BirthdayCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
