import { Component, Input } from '@angular/core';
import { ToolbarLink } from './interfaces/toolbar-link';
import { ToolbarLinkComponent } from './toolbar-link/toolbar-link.component';
import { ToolbarDropdownComponent } from './toolbar-dropdown/toolbar-dropdown.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ui-toolbar',
  imports: [ToolbarLinkComponent, ToolbarDropdownComponent, NgbCollapseModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  @Input() title: string = 'Toolbar';
  @Input() links: ToolbarLink[] = [];

  isCollapsed: boolean = true;
}
