import { Component, inject } from '@angular/core';
import { TextStatic } from '../../shared/text-static/text-static';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
})
export class NotFoundComponent {
  titlePageNotFound = TextStatic.TITLE_NOT_FOUND;
  contentPageNotFound = TextStatic.NOT_FOUND_CONTENT;

  private router = inject(Router);

  goToHome() {
    this.router.navigate(['/']);
  }
}
