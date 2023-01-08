import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Component } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  // ...$ indicates a rxjs subject observable
  // Creates an observable which listens to Breakpoints.Handset
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()  // As several different places will use this async we use shareReplay to ensure they all have the most recent
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
