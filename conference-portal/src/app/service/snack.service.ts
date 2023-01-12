import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private snackBar: MatSnackBar, private router: Router) { }

  authError() {
    this.snackBar.open("Please login!", "OK", {
      duration: 5000,
      politeness: 'polite',
      horizontalPosition: 'center',
    });

    return this.snackBar._openedSnackBarRef
      ?.onAction()
      .pipe(
        tap(_ =>
          this.router.navigate(['/login']))
      )
      .subscribe()
  }
}
