import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './primary-pink-button.module.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  rootClassName: '',
  button: 'Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹ ÐºÐ°ÐºÐ²Ð¾ Ð¿ÑÐµÐ´Ð»Ð°Ð³Ð°Ð¼',
}

PrimaryPinkButton.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default PrimaryPinkButton
