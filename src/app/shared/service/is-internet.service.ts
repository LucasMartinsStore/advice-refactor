import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IsInternetService {
  private router = inject(Router);

  isVerifyConnection() {
    window.addEventListener('online', () => {
      this.router.navigate(['/']);
    });
    window.addEventListener('offline', () => {
      this.router.navigate(['/no-internet']);
    });
  }
}
