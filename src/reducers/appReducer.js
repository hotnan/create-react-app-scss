import { handleActions } from 'redux-actions'
import { sayHello } from 'actions/AppAction'

const initialState = {
  hello: '',
}

const appReducer = handleActions({
  [sayHello](state, action) {
    return {
      hello: `Hello there ${state.counter + 1}`
    }
  },
}, initialState);

export default appReducer
