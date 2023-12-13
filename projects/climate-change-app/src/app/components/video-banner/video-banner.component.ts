import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-banner',
  templateUrl: './video-banner.component.html',
  styleUrls: ['./video-banner.component.scss']
})
export class VideoBannerComponent {

  @Input() text!: any
}
