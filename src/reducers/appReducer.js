import { handleActions } from 'redux-actions'
import { sayHello } from 'actions/AppAction'

const initialState = {
  hello: null,
  count: 0,
}

const appReducer = handleActions({
  [sayHello](state, action) {
    return {
      hello: `Hello there ${state.count}`,
      count: state.count + 1
    }
  },
}, initialState);

export default appReducer
