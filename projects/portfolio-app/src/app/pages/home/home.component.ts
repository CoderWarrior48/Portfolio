import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects = [
    {
      name: 'Del Oro App',
      tags: [
        'Angular',
        'HTML',
        'Typescript',
        'Nodejs',
      ],
      image: 'assets/images/none',
      path: 'apps/deloroapp' 
    },
    {
      name: 'CogniQuest',
      tags: [
        'Angular',
        'HTML',
        'Typescript',
        'Nodejs',
      ],
      image: 'assets/images/none',
      path: 'apps/cogniquest' 
    },
    {
      name: 'Decoder/Encoder',
      tags: [
        'Python',
      ],
      image: 'assets/images/none',
      path: 'apps/decoder-encoder' 
    },
    {
      name: 'Del Oro App',
      tags: [
        'Angular',
        'HTML',
        'Typescript',
        'Nodejs',
      ],
      image: 'assets/images/none',
      path: 'apps/deloroapp' 
    },
    {
      name: 'CogniQuest',
      tags: [
        'Angular',
        'HTML',
        'Typescript',
        'Nodejs',
      ],
      image: 'assets/images/none',
      path: 'apps/cogniquest' 
    },
    {
      name: 'Decoder/Encoder',
      tags: [
        'Python',
      ],
      image: 'assets/images/none',
      path: 'apps/decoder-encoder' 
    }
  ]
}
