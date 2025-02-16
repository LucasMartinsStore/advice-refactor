import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Slip } from '../../interfaces/model/slip.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-home',
  imports: [CommonModule],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.scss',
})
export class CardHomeComponent {
  @Input() isLoading = true;
  @Input() cardList: Slip = {} as Slip;
  @Output() cardClick = new EventEmitter<void>();
}
