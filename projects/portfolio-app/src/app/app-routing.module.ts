import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ExploreComponent } from './pages/explore/explore.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'explore', component: ExploreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
