import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public afAuth: AngularFireAuth) {}

  eventEdition = 'InteRact 2023';
  about = "Welcome to Simpósio de Engenharia Informática 2022 - InteRact23  In this fourth edition of InteRact, students and professionals in the field of Informatics Engineering will meet again to share, debate and reflect on research, development and practices in the field of Informatics Engineering. SEI remains strongly committed to fostering scientific publication by students at different levels of higher education – BSc, MSc and PhD – in Informatics Engineering or related areas, providing a space for discussion between academia and the business community. During the sessions, students have the opportunity to present and expose their academic work developed and implemented in recent years, the results achieved and the impact produced. We count on your contribution and participation in SEI22 to continue this successful event. We look forward to seeing you on December 7th! Papers accepted at SEI'22 will be published in the Symposium Proceeding Book with ISBN.";
  themes = [
    "Analysis and Specification of Information Systems",
    "Artificial Intelligence",
    "Computational Tools for Collaborative Work",
    "Computer Graphics, Vision and Applications",
  ]
  startDate = new Date();
  endDate = new Date();
  headerSource = "/assets/interact.png";
  homeImageSource = "/assets/people_talking.jpg";

  form = new FormControl('');

  submitChanges() {
    console.log();
  }
}
