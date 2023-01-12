import { Component } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent {
  speakers = [
    {
      name: "Joao Joao",
      about: "Professor",
      subject: "AI",
      when: "Day 1 14.30"
    },
    {
      name: "Ola Nordmann",
      about: "Scientist",
      subject: "Human Machine Interface",
      when: "Day 2 10.30",
    },
    {
      name: "Per Hagan",
      about: "Professor",
      subject: "Intellegent robotics",
      when: "Day 3 12.00",
    }
  ]
}
