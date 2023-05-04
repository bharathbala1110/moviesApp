import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MovieDetailComponent } from './component/movie-detail/movie-detail.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'movie-detail/:id',component:MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
