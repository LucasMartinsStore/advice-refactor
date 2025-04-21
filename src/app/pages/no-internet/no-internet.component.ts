import { Component } from '@angular/core';
import { TextStatic } from '../../shared/text-static/text-static';

@Component({
  selector: 'app-no-internet',
  imports: [],
  templateUrl: './no-internet.component.html',
  styleUrl: './no-internet.component.scss',
})
export class NoInternetComponent {
  noInternetTitle = TextStatic.TITLE_NO_INTERNET;
}
