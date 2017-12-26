import { Component } from '@angular/core';

@Component({
  templateUrl: 'bubble.html'
})
export class BubbleComponent {
  constructor(private color: string, private size: number ) {
    color = color;
    size = size;
  }


}

