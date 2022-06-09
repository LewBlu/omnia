import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogBookComponent } from './log-book/log-book.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {path: 'workout', component: LogBookComponent},
  {path: 'tracker', component: ProgressComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }