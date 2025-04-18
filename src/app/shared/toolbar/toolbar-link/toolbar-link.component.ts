import { Component, Input } from '@angular/core';
import { ToolbarLink } from '../interfaces/toolbar-link';
import { RouterLink, RouterLinkActive } from '@angular/router';

/**
 * ToolbarLinkComponent is a reusable component that renders a navigation link.
 * It supports both internal and external links, and applies appropriate styles and behaviors.
 */
@Component({
  selector: 'app-toolbar-link',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './toolbar-link.component.html',
  styleUrl: './toolbar-link.component.scss',
})
export class ToolbarLinkComponent {
  /**
   * The link object containing the URL, title, and whether the link is external.
   * @type {ToolbarLink}
   */
  @Input() link!: ToolbarLink;
}
