import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  eventEdition: string = 'InteRact 2023';
  about: string = 'blah blah blah, sett inn masse text og forklar, kanskje bilde også';
}
