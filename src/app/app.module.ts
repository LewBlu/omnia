import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { environment } from '../environments/environment';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';

import { ExerciseComponent } from './my-workouts-list/my-workouts/exercise/exercise.component';
import { ChartComponent } from './progress/chart/chart.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { ExercisesComponent } from './settings/exercises/exercises.component';
import { ExerciseItemComponent } from './settings/exercises/exercise-item/exercise-item.component';
import { WeightFormComponent } from './progress/weight-form/weight-form.component';

import { Error404Component } from './error404/error404.component';
import { MyWorkoutsComponent } from './my-workouts-list/my-workouts/my-workouts.component';
import { MyWorkoutsListComponent } from './my-workouts-list/my-workouts-list.component';
import { WorkoutComponent } from './my-workouts-list/my-workouts/workout/workout.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    ProgressComponent,
    ChartComponent,
    SettingsComponent,
    ExercisesComponent,
    ExerciseItemComponent,
    WeightFormComponent,
    MyWorkoutsComponent,
    MyWorkoutsListComponent,
    WorkoutComponent
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
