import { Observable } from 'rxjs';

import { Slip } from '../model/slip.interface';

export interface SlipResource {
  getSlip(): Observable<Slip>;
}
