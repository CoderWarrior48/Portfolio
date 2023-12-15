import { Component } from '@angular/core';
import { pages } from './pages.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  navbar = {
    links: pages,
    title: "Climate Change",
    color: 'primary'
  }

}
