import { Injectable } from '@angular/core';
import { SlipResource } from '../interfaces/abstraction/slip-resource.interface';
import { SlipDTO } from '../interfaces/dtos/slip-dto.interface';
import { Slip } from '../interfaces/model/slip.interface';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SlipService implements SlipResource {
  URL_API = environment.rel;
  constructor(private _httpClient: HttpClient) {}
  getSlip(): Observable<Slip> {
    return this._httpClient
      .get<SlipDTO>(this.URL_API)
      .pipe(map((slipDTO: SlipDTO) => this._buildSlip(slipDTO)));
  }

  private _buildSlip(slipDTO: SlipDTO): Slip {
    return {
      slip: {
        idConselho: slipDTO.slip.id,
        conselho: slipDTO.slip.advice,
      },
    };
  }
}
