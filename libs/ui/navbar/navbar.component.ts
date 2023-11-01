import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    RouterModule, 
    MatIconModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatListModule, 
    BrowserModule,
    ],

})
export class NavbarComponent {

  @Input() data!: any;

  constructor () {
    console.log(this.data)
  }
  
}