import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'ui-card',
  imports: [NgClass],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title: string = 'Card Title';
  @Input() subtitle?: string;
  @Input() icon?: string;
}
