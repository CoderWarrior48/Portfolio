import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from 'libs/ui/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GlossaryComponent } from './pages/glossary/glossary.component';
import { CausesComponent } from './pages/causes/causes.component';
import { VideoBannerComponent } from './components/video-banner/video-banner.component';
import { FossilfuelsComponent } from './pages/causes/children/fossilfuels/fossilfuels.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlossaryComponent,
    CausesComponent,
    VideoBannerComponent,
    FossilfuelsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NavbarComponent,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
