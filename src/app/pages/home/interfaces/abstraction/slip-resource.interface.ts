import { Observable } from 'rxjs';
import { SlipDTO } from '../dtos/slip-dto.interface';

export interface SlipResource {
  getSlip(): Observable<SlipDTO>;
}
