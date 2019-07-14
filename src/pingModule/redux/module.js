import pingpongReducer from './pingpongReducer';

export function getPingPongModule() {
  return {
      id: "pingpong",
      reducerMap: {
        pingpong: pingpongReducer,
      },
      // Actions to fire when this module is added/removed
      initialActions: [{type: 'INIT_PINGPONG'}],
      finalActions: [{type: 'FINAL_PINGPONG'}]
  };
}

