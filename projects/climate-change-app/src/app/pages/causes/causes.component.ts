import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class CausesComponent {

  @ViewChild('myElement') set(el) {
    if (el) {
      console.log('element loaded!');
    }
  }

  scrollToElementById(id: string) {
    let element = this.__getElementById(id);
    this.scrollToElement(element);
  }

  private __getElementById(id: string): HTMLElement {
    console.log("element id : ", id);
    let element: any = document.getElementById(id);
    return element;
  }

  scrollToElement(element: HTMLElement) {
    element.scrollIntoView({ behavior: "smooth", block: 'center' });
    console.log('element:', element)
  }
}
