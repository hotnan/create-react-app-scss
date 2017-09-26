import React from 'react'
import PropTypes from 'prop-types'
import { Container, Button } from 'reactstrap';

import Box from 'components/Box'

class Home extends React.Component {

  static propTypes = {
    hello: PropTypes.string,
    handleSayHello: PropTypes.func,
  }

  static defaultProps = {
    hello: null,
    handleSayHello: null,
  }

  constructor(props) {
    super(props)
    this.handleSayHello = this.handleSayHello.bind(this)
  }

  handleSayHello() {
    this.props.sayHello()
  }

  render() {
    const { hello } = this.props
    return (
      <div>
        <Container>
          <Box>
            <h1>Hello, Word</h1>
            {(hello) && <p>{hello}</p>}
            <Button onClick={this.handleSayHello}></Button>
          </Box>
        </Container>
      </div>
    );
  }

}

export default Home
