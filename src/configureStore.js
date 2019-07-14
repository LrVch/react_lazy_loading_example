import { applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './rootEpics'
import { createStore } from "redux-dynamic-modules-core";
import { getPingPongModule } from './pingModule/redux/module'
import { getCounterModule } from './counterModule/redux/module'
import { getUserModule } from './userModule/redux/module'

const epicMiddleware = createEpicMiddleware()

const store = createStore({
    initialState: {
      counter: 10,
      pingpong: {
        isPining: true
      }
    },
    enhancers: [applyMiddleware(epicMiddleware)],
    extensions: [],
  },
  [
    getCounterModule(),
    getPingPongModule(),
    getUserModule()
  ]
)

epicMiddleware.run(rootEpic)

export default store