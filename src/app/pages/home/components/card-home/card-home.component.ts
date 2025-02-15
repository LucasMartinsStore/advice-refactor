import { Component, Input } from '@angular/core';
import { SlipDTO } from '../../interfaces/dtos/slip-dto.interface';

@Component({
  selector: 'app-card-home',
  imports: [],
  templateUrl: './card-home.component.html',
  styleUrl: './card-home.component.scss',
})
export class CardHomeComponent {
  @Input() cardList: SlipDTO = {} as SlipDTO;
}
