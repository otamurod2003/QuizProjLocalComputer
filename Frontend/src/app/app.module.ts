import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
