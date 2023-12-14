import { Component } from '@angular/core';
import { terms } from './terms.data'
@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent {

  constructor () {
    function search(query: any) {
      return function(item: any) {
        for(var i in query) {
          if(query[i] != item[i]) {
            return false;
          }
        }
        return true;
      }
    }
  }
  

  search: any = []

  

//white screen of death & redirect... code below is the issue, remove to fix
 view: any = terms.filter(this.search(this.search))
// view: any = this.terms
}
