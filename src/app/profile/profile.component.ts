import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
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
}
