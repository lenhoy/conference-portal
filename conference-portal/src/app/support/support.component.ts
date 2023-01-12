import { Component } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  sponsors = [
    {source: "/assets/iseplogo.png"},
    {source: "/assets/pporto.png"},
  ]
}
