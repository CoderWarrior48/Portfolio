import { Injectable } from '@angular/core';
import { Links, Title} from './navbar.data';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  
  links = Links
  title = Title

  constructor() {}
}