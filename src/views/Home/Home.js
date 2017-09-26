import React from 'react'
import Sliders from 'components/Sliders'
import PropTypes from 'prop-types'
import Cards from 'components/Cards'
import { Container, Row, Col } from 'reactstrap';

import Box from 'components/Box'

class Home extends React.Component {

  static propTypes = {

  }

  render() {
    return (
      <div>
        <Container>
          <Box>
            <h1>Hello, Word</h1>
          </Box>
        </Container>
      </div>
    );
  }

}

export default Home
