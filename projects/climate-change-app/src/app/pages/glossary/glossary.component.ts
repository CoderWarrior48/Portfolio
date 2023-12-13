import { Component } from '@angular/core';

@Component({
  selector: 'app-glossary',
  templateUrl: './glossary.component.html',
  styleUrls: ['./glossary.component.scss']
})
export class GlossaryComponent {


  search: any 

  terms = [
    {
      term: 'climate',
      definition: 'The average weather in an area.'
    },
    {
      term: 'weather',
      definition: 'Conditions such as humitity, temperature...'
    }
]


view: any = this.terms 
}
