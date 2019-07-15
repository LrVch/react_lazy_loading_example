import { combineEpics } from 'redux-observable'
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  mapTo,
  tap,
  withLatestFrom,
  switchMap,
  map,
  catchError,
  takeUntil,
  // mergeMap,
  // take,
  startWith,
  distinctUntilChanged,
} from 'rxjs/operators'
import {
  LOADED_USER_SUCCESS,
  LOAD_USER_REQUEST,
  FETCH_USER_CANCELLED,
  CANCEL_WITH_RACE
} from './constants';
import { isUserLoading } from './userReducer';
import { loadUserSuccess, loadUserFail } from './actions';
import {
  of,
  // race,
  interval,
  empty
} from 'rxjs';


export const loadUser$ = (action$, state$) => action$.pipe(
  ofType(LOAD_USER_REQUEST),
  withLatestFrom(state$),
  tap(([action, state]) => console.log(isUserLoading(state))),
  switchMap(([action, state]) => {
    return ajax.getJSON(`https://api.github.com/users/${action.payload.userName}`).pipe(
      map(response => loadUserSuccess(response)),
      takeUntil(action$.pipe(
        ofType(FETCH_USER_CANCELLED)
      )),
      catchError(err => {
        return of(loadUserFail())
      })
    )
  }),
  // switchMap(([action, state]) => race(
  //   ajax.getJSON(`https://api.github.com/users/${action.payload.userName}`).pipe(
  //     map(response => loadUserSuccess(response)),
  //   ),
  //   action$.pipe(
  //     ofType(FETCH_USER_CANCELLED),
  //     map(() => ({type: CANCEL_WITH_RACE})),
  //     take(1)
  //   )
  // )
)
// )

export const loadUserSuccess$ = (action$, state$) => action$.pipe(
  ofType(LOADED_USER_SUCCESS),
  tap((action) => {
    const { info } = action.payload
    const { login } = info
    window.localStorage.setItem(login, JSON.stringify(info))
  }),
  switchMap(() => empty())
)

export const cancelWithRace$ = (action$, state$) => action$.pipe(
  ofType(CANCEL_WITH_RACE),
  tap((action) => {
    console.log(action.type)
  }),
  switchMap(() => empty())
)

export const changeHour$ = (action$, state$) => interval(600).pipe(
  startWith(new Date().getHours() + new Date().getMinutes() / 100),
  map(() => new Date().getHours() + new Date().getMinutes() / 100),
  distinctUntilChanged(),
  map(hour => ({ type: 'CHANGE_TIME', payload: { time: hour } })),
  tap(console.log),
);

// export const changeHourPlain$ = (action$, state$) => action$.pipe(
//   ofType('CHANGE_TIME'),
//   tap((action) => {
//     console.log(action.payload.time)
//   }),
//   mapTo({ type: '' })
// )

const user$ = combineEpics(
  loadUser$,
  loadUserSuccess$,
  cancelWithRace$,
  changeHour$,
  // changeHourPlain$
)

export default user$