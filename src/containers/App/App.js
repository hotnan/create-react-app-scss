import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import App from 'views/App'

const mapStateToProps = (state) => {
  return {
    ...state,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {}
// }

export default withRouter(connect(
  mapStateToProps,
  null,
  // mapDispatchToProps
)(App))
