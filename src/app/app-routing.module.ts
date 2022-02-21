import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { PodcastsComponent } from './pages/podcasts/podcasts.component';
import { QueriesComponent } from './pages/queries/queries.component';
import { RemindersComponent } from './pages/reminders/reminders.component';
import { TipComponent } from './pages/tip/tip.component';
import { TipsComponent } from './pages/tips/tips.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { WorkshopsComponent } from './pages/workshops/workshops.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
    },
    {
        path: 'inicio',
        component: HomeComponent,
    },
    {
        path: 'tips',
        component: TipsComponent,
    },
    {
        path: 'recordatorios',
        component: RemindersComponent,
    },
    {
        path: 'podcasts',
        component: PodcastsComponent,
    },
    {
        path: 'talleres',
        component: WorkshopsComponent,
    },
    {
        path: 'experiencias',
        component: ExperiencesComponent,
    },
    {
        path: 'galeria',
        component: GalleryComponent,
    },
    {
        path: 'consultas',
        component: QueriesComponent,
    },
    {
        path: 'sumarme',
        component: JoinComponent,
    },
    {
        path: 'iniciar-sesion',
        component: LoginComponent,
    },
    {
        path: 'tip/:id',
        component: TipComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
