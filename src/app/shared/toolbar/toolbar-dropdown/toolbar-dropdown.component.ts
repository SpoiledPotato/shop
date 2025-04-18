import { Component, Input } from '@angular/core';
import { ToolbarLink } from '../interfaces/toolbar-link';
import { ToolbarLinkComponent } from '../toolbar-link/toolbar-link.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toolbar-dropdown',
  imports: [ToolbarLinkComponent, NgbDropdownModule],
  templateUrl: './toolbar-dropdown.component.html',
  styleUrl: './toolbar-dropdown.component.scss'
})
export class ToolbarDropdownComponent {
  @Input() link!: ToolbarLink;
}
