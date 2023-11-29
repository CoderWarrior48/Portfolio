import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  projects: any

  projects$: Observable<any> = new Observable<any>;

  constructor(public apiService: ApiService) {}
  
  ngOnInit() {
    this.projects$ = this.apiService.getDataFromServer('/projects')
  }
}