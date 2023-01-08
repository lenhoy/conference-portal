import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SpeakersComponent } from './speakers/speakers.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'speakers', component: SpeakersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
