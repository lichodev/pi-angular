import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiNavComponent } from './common/pi-nav/pi-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { TipsComponent } from './pages/tips/tips.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ExperienceUserComponent } from './pages/experience-user/experience-user.component';
import { ExperienceAdminComponent } from './pages/experience-admin/experience-admin.component';
import { PiFooterComponent } from './common/pi-footer/pi-footer.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { ConfirmPopUpComponent } from './common/confirm-pop-up/confirm-pop-up.component';
import { ImagePopUpComponent } from './common/image-pop-up/image-pop-up.component';
import { PollComponent } from './common/poll/poll.component';
import { QueriesUserComponent } from './pages/queries-user/queries-user.component';
import { QueriesAdminComponent } from './pages/queries-admin/queries-admin.component';
import { JoinUserComponent } from './pages/join-user/join-user.component';
import { JoinAdminComponent } from './pages/join-admin/join-admin.component';
import { FastNoteComponent } from './common/fast-note/fast-note.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { TipComponent } from './pages/tip/tip.component';
import { AddIconComponent } from './common/add-icon/add-icon.component';
import { TipFormComponent } from './common/tip-form/tip-form.component';
import { PodcastFormComponent } from './common/podcast-form/podcast-form.component';
import { ImageGalleryFormComponent } from './common/image-gallery-form/image-gallery-form.component';
import { WelcomePopUpComponent } from './common/welcome-pop-up/welcome-pop-up.component';
import { HttpClientModule } from '@angular/common/http';
import { interceptorProvider } from './interceptors/interceptor.service';
import { ReminderComponent } from './pages/reminder/reminder.component';
import { ResponseFormComponent } from './common/response-form/response-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PiNavComponent,
    HomeComponent,
    TipsComponent,
    WorkshopsComponent,
    TrainingsComponent,
    QueriesComponent,
    JoinComponent,
    LoginComponent,
    RemindersComponent,
    ExperiencesComponent,
    ExperienceUserComponent,
    ExperienceAdminComponent,
    PiFooterComponent,
    PodcastsComponent,
    ConfirmPopUpComponent,
    ImagePopUpComponent,
    PollComponent,
    QueriesUserComponent,
    QueriesAdminComponent,
    JoinUserComponent,
    JoinAdminComponent,
    FastNoteComponent,
    GalleryComponent,
    TipComponent,
    AddIconComponent,
    TipFormComponent,
    PodcastFormComponent,
    ImageGalleryFormComponent,
    WelcomePopUpComponent,
    ReminderComponent,
    ResponseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
