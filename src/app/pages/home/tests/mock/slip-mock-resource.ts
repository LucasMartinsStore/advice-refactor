import { delay, Observable, of } from 'rxjs';
import { SlipResource } from '../../interfaces/abstraction/slip-resource.interface';
import { SlipDTO } from '../../interfaces/dtos/slip-dto.interface';
import { Injectable } from '@angular/core';
import { SlipDataDtoStub } from '../stubs/slip-data-dto-stub';

@Injectable()
export class slipMockResource implements SlipResource {
  getSlip(): Observable<SlipDTO> {
    return of(SlipDataDtoStub).pipe(delay(2000));
  }
}
