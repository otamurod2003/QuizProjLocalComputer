import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question.component';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input'
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list'

import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
