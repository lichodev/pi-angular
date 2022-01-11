import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/join/join.component';
import { LoginComponent } from './pages/login/login.component';
import { QueriesComponent } from './pages/queries/queries.component';
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
        path: 'talleres',
        component: WorkshopsComponent,
    },
    {
        path: 'experiencias',
        component: HomeComponent,
    },
    {
        path: 'capacitaciones',
        component: TrainingsComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
