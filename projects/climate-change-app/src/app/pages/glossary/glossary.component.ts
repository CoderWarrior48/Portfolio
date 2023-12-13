import { Component } from '@angular/core';

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

  terms: any = [
    {
      term: 'climate',
      definition: 'The average weather in an area.'
    },
    {
      term: 'weather',
      definition: 'Conditions such as humitity, temperature...'
    }
]

//white screen of death & redirect... code below is the issue, remove to fix
 view: any = this.terms.filter(this.search(this.search))
// view: any = this.terms
}
