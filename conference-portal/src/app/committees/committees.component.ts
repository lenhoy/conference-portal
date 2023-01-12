import { Component } from '@angular/core';


@Component({
  selector: 'app-committees',
  templateUrl: './committees.component.html',
  styleUrls: ['./committees.component.scss']
})
export class CommitteesComponent {
  aboutTechCom: string = 'Text about Technical-Scientific Committee';
  aboutOrgCom: string = 'Text about Organizing committee Committee';

  techpersons = [
    "Constantino Martins (ISEP)",
    "Dulce Mota (ISEP)",
    "Emanuel Silva (ISEP)",
    "José Marinho (ISEP)",
    "Marílio Cardoso (ISEP)",
    "Nuno Morgado (ISEP)",
  ]

  orgpersons = [
    "Constantino Martins (ISEP)",
    "Dulce Mota (ISEP)",
    "Emanuel Silva (ISEP)",
    "José Marinho (ISEP)",
    "Marílio Cardoso (ISEP)",
    "Nuno Morgado (ISEP)",
  ]
}
