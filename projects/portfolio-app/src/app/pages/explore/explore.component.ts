import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {
  projects: any

  projects$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.projects$ = this.apiService.getDataFromServer('/projects').pipe(take(1))
  }

}
