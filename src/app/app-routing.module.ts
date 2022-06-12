import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { Error404Component } from './error404/error404.component';
import { MyWorkoutsListComponent } from './my-workouts-list/my-workouts-list.component';
import { WorkoutComponent } from './my-workouts-list/my-workouts/workout/workout.component';


const routes: Routes = [
  {path: 'my-workouts', children: [
    {path: '', component: MyWorkoutsListComponent},
    {path: 'workout', component: WorkoutComponent}
  ]},
  {path: 'tracker', component: ProgressComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }