import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExerciseComponent } from './log-book/exercise/exercise.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogBookComponent } from './log-book/log-book.component';
import { Error404Component } from './error404/error404.component';
import { ChartComponent } from './progress/chart/chart.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { ExercisesComponent } from './settings/exercises/exercises.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExerciseItemComponent } from './settings/exercises/exercise-item/exercise-item.component';
import { WeightFormComponent } from './progress/weight-form/weight-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    HeaderComponent,
    FooterComponent,
    LogBookComponent,
    Error404Component,
    ProgressComponent,
    ChartComponent,
    SettingsComponent,
    ExercisesComponent,
    ExerciseItemComponent,
    WeightFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgChartsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
