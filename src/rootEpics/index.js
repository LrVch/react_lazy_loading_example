import { mergeMap } from 'rxjs/operators'
import { BehaviorSubject } from 'rxjs'
import { combineEpics } from 'redux-observable'

const mainEpics$ = combineEpics(
  /* 
    List of main epics
  */
);

const rootEpic$ = new BehaviorSubject(combineEpics(mainEpics$));

const rootEpic = (action$, state$) => rootEpic$.pipe(
  mergeMap(epic => epic(action$, state$)),
);

export default rootEpic
export { rootEpic$ }