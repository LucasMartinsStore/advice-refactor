import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { CommonModule } from '@angular/common';
import { SlipService } from './service/slip.service';
import { Slip } from './interfaces/model/slip.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardHomeComponent],

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit, OnDestroy {
  SlipList!: Slip;
  isLoading = true;
  private _subs = new Subscription();

  private slipService = inject(SlipService);

  ngOnInit(): void {
    this._getSlipData();
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
  private _getSlipData(): void {
    let sub = this.slipService.getSlip().subscribe({
      next: (slip) => {
        this.isLoading = false;
        this.SlipList = slip;
      },
      error: (error) => {
        console.error(error);
      },
    });
    this._subs.add(sub);
  }
  onCardClick() {
    this.isLoading = true;
    this._getSlipData();
  }
}
