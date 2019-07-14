import userReducer from './userReducer';

export function getUserModule() {
  return {
      id: "user",
      reducerMap: {
        user: userReducer,
      },
      // Actions to fire when this module is added/removed
      initialActions: [{type: 'INIT_USER'}],
      // finalActions: []
  };
}

