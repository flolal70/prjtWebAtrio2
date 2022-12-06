import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  { path: 'progress', component: ProgressBarComponent },
  { path: '', component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
