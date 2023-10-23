import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  links: { name: string; path: string }[];
  title: string

  constructor(private _nbService: NavbarService) {
    this.links = _nbService.links;
    this.title = _nbService.title;
  }
}