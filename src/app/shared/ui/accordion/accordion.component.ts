import { Component, input } from '@angular/core';
import { AccordionItem } from './accordion-item.interface';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'ui-accordion',
  imports: [NgbAccordionModule, NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          transform: 'rotate(-180deg)',
        }),
      ),
      state(
        'closed',
        style({
          transform: 'rotate(0deg)',
        }),
      ),
      transition('open <=> closed', [animate('0.2s ease-in-out')]),
    ]),
  ],
})
export class AccordionComponent {
  readonly items = input<AccordionItem[]>([]);
}
