import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomepageComponent } from './homepage/homepage.component';
import { SpeakersComponent } from './speakers/speakers.component';

import { environment } from 'environments/environment';

// Firebase imports
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { AuthModule } from '@angular/fire/auth';
import { CommitteesComponent } from './committees/committees.component';
import { PapersComponent } from './papers/papers.component';
import { DatesComponent } from './dates/dates.component';
import { RegistrationComponent } from './registration/registration.component';
import { PhotosComponent } from './photos/photos.component';
import { PreviousComponent } from './previous/previous.component';
import { ContactComponent } from './contact/contact.component';
import { ProgramComponent } from './program/program.component';
import { SupportComponent } from './support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpeakersComponent,
    CommitteesComponent,
    PapersComponent,
    DatesComponent,
    RegistrationComponent,
    PhotosComponent,
    PreviousComponent,
    ContactComponent,
    ProgramComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
