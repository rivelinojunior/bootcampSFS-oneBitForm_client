import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { Angular2TokenService } from 'angular2-token';

import { FormService } from './shared/form.service';
import { QuestionService } from './shared/question.service';
import { AnswerService } from './answers/shared/answer.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
import { UsersModule } from './users/users.module';

import { RouterModule } from '@angular/router';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    UsersModule,
    RouterModule,
    routing
  ],
  providers: [
    Angular2TokenService, 
    FormService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
