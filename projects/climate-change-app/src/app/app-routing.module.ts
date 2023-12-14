import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';
import { CausesComponent } from './pages/causes/causes.component';
import { FossilfuelsComponent } from './pages/causes/children/fossilfuels/fossilfuels.component';
import { DeforestationComponent } from './pages/causes/children/deforestation/deforestation.component';

const routes: Routes = [
  {path: '', pathMatch:"full", redirectTo: 'home'},
  {path:'home', component: HomeComponent},
  {path:'glossary', component: GlossaryComponent},
  {path:'causes', component: CausesComponent,
   children: [
    {path:'fossilfuels', component:FossilfuelsComponent},
    {path:'deforestation', component:DeforestationComponent}

    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

