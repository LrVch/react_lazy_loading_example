import counterReducer from './conterReducer';

export function getCounterModule() {
  return {
      id: "counter",
      reducerMap: {
        counter: counterReducer,
      },
      // Actions to fire when this module is added/removed
      initialActions: [{type: 'INIT_COUNTER'}],
      // finalActions: []
  };
}

