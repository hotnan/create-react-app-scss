import { createAction } from 'redux-actions'

export const sayHello = createAction('SAY_HELLO')

// Example of action
// const { increment, decrement } = createActions({
//   'INCREMENT': amount => ({ amount: 1 }),
//   'DECREMENT': amount => ({ amount: -1 })
// })
