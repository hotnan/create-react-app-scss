import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  static propTypes = {
    children: PropTypes.object,
  }

  static defaultProps = {
    children: null,
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child)
        })}
      </div>
    );
  }
}

export default App
