import { Component, inject, OnInit } from '@angular/core';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CommonModule } from '@angular/common';
import { SlipService } from './service/slip.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardHomeComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  isLoading = true;

  private slipService = inject(SlipService);
  ngOnInit(): void {}
}
