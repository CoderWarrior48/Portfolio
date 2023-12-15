import { Component } from '@angular/core';
import { terms } from './terms.data'
import { filter } from 'rxjs';
@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent {


  search(query: any) {
    
    let res: any = terms.filter(c => c.term.includes(query) || c.definition.includes(query))
    return res
  }
  
  searchTerms() {
    let res = this.search(this.query)
    return res
  }
  query: any = ''
}