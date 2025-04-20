import { Component } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { CardFooterComponent } from "../shared/card/card-footer/card-footer.component";
import { CardBodyComponent } from "../shared/card/card-body/card-body.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, CardFooterComponent, CardBodyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
