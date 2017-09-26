import React from 'react'
import PropTypes from 'prop-types'

import styles from './Box.scss'

export const Box = ({ children }) => {
  return (
    <div className={styles.boxContinaer}>
      {React.Children.map(children, (child) => {
        return <div className={styles.boxContent}>{React.cloneElement(child)}</div>
      })}
    </div>
  );
}

Box.propTypes = {

}

export default Box
