import { ofType } from 'redux-observable';
import {
  delay,
  mapTo
} from 'rxjs/operators'
import {pong} from './actions'

const ping$ = (action$, state$) => action$.pipe(
  ofType('PING'),
  delay(1000),
  mapTo(pong())
);

export default ping$