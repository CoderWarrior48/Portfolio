import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CogniQuestApp';
  navbar = {
    links: [
      { name: 'About', path: '/about' },
      { name: 'Profile', path: '/profile' },
      { name: 'Explore', path: '/explore' },
    ],
    title: "CogniQuest" }
}
