import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbar = {
    links: [
      { name: 'About', path: '/about' },
      { name: 'New', path: '/profile' },
      { name: 'Explore', path: '/explore' },
    ],
    title: "DH Portfolio" 
  }
}
