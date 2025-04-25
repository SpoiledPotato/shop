import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ToolbarLink } from '../interfaces/toolbar-link';
import { ToolbarLinkComponent } from '../toolbar-link/toolbar-link.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-toolbar-dropdown',
  imports: [ToolbarLinkComponent, NgbDropdownModule],
  templateUrl: './toolbar-dropdown.component.html',
  styleUrl: './toolbar-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarDropdownComponent {
  readonly link = input.required<ToolbarLink>();
}
