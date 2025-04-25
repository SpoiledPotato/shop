import { Component, Input } from '@angular/core';
import { AccordionComponent } from '../shared/ui/accordion/accordion.component';
import { AccordionItem } from '../shared/ui/accordion/accordion-item.interface';

@Component({
  selector: 'app-profile',
  imports: [AccordionComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  // private profileService = inject(ProfileService);

  @Input()
  set foo(_: string) {
    console.log(_);
  }
  @Input()
  set id(id: string) {
    // this.profileData = this.service.getProfile(id);
    console.log('id', id);
  }
  profileData: any = null;

  accordionItems: AccordionItem[] = [
    {
      title: 'First',
      body:
        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.",
      isOpen: true,
      icon: 'bi-person',
    },
    {
      title: 'Settings',
      body: `
      <h1>Settings</h1>
      <p>Settings content lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      `,
      isOpen: false,
      icon: 'bi-star',
    },
    {
      title: 'Notifications',
      body:
        'Notifications content lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      isOpen: false,
      icon: 'bi-chevron-down',
      isDisabled: true,
    },
  ];
}
