import { createAction } from 'redux-actions'

export const sayHello = createAction({
  'SAY_HELLO': count => ({ count: 0 })
})

// Example of action
// const { increment, decrement } = createActions({
//   'INCREMENT': amount => ({ amount: 1 }),
//   'DECREMENT': amount => ({ amount: -1 })
// })
