import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { CommitteesComponent } from './committees/committees.component';
import { PapersComponent } from './papers/papers.component';
import { DatesComponent } from './dates/dates.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProgramComponent } from './program/program.component';
import { PhotosComponent } from './photos/photos.component';
import { PreviousComponent } from './previous/previous.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'speakers', component: SpeakersComponent},
  { path: 'papers', component: PapersComponent},
  { path: 'committees', component: CommitteesComponent},
  { path: 'dates', component: DatesComponent},
  { path: 'program', component: ProgramComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'previous', component: PreviousComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'support', component: SupportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
