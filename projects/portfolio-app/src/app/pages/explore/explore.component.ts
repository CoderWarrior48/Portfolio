import { Component } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  projects = [
    {
      name: 'Del Oro App',
      tags: [
        'Angular',
        'HTML',
        'Typescript',
        'Nodejs',
      ],
      image: 'assets/images/DelOroApp-Screenshot.png',
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
      image: 'assets/images/DelOroApp-Screenshot.png',
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
