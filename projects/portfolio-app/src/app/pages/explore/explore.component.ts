import { Component } from '@angular/core';
import { projects } from './projects';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  projects = projects
}
