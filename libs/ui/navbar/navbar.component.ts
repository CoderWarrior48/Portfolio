import { Component, Input } from '@angular/core';
import { MaterialModule } from './navbar-material.module';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MaterialModule, RouterModule]
})
export class NavbarComponent {

  @Input() data!: any;

  constructor () {
    console.log(this.data)
  }
  
}