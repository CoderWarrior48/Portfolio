import { Component } from '@angular/core';

@Component({
  selector: 'app-fossilfuels',
  templateUrl: './fossilfuels.component.html',
  styleUrls: ['./fossilfuels.component.scss']
})
export class FossilfuelsComponent {

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
