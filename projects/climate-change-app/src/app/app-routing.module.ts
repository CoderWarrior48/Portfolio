import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo: 'home'},
  {path:'home', component: HomeComponent},
  {path:'glossary', component: GlossaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

