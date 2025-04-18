import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { ToolbarLink } from './shared/toolbar/interfaces/toolbar-link';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  links: ToolbarLink[] = [
    { title: 'Home', url: 'home' },
    { title: 'Contact', url: 'https://mail.google.com', isExternal: true },
    { title: 'Cart', url: 'cart' },
    {
      title: 'Account',
      dropdownList: [
        { title: 'Profile', url: 'profile' },
        { title: 'Orders', url: 'orders' },
        { title: 'Settings', url: 'settings' },
      ],
    },
  ];
  title = 'Best Shop';
}
