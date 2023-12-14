import { Component } from '@angular/core';
import { pages } from './pages.data';
import { terms } from './pages/glossary/terms.data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbar = {
    links: pages,
    title: "Climate Change",
    color: 'primary'
  }
  constructor () {
    //Replace matching terms in elements with a class of filter-keywords to bold and linked to definition.
    for (let i = 0; i < terms.length; i++) {
      let entry = terms[i]
      let elements = document.getElementsByClassName('filter-keywords')
      console.log(elements)
      for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML.replace(entry.term,`<b routerLink="${entry.link}">${entry.term}</b>`)
    }
  }
}
}
