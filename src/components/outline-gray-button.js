import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './outline-gray-button.module.css'

const OutlineGrayButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['buttonSmall']} `}
      >
        <span>
          ÐÑÐ¾ÑÐµÑÐ¸ Ð¿Ð¾Ð²ÐµÑÐµ
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M854 512l-342 342-342-342 62-60 238 238v-520h84v520l240-238z"></path>
        </svg>
      </button>
    </div>
  )
}

OutlineGrayButton.defaultProps = {
  rootClassName: '',
}

OutlineGrayButton.propTypes = {
  rootClassName: PropTypes.string,
}

export default OutlineGrayButton
