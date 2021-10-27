import React from 'react'

import PropTypes from 'prop-types'

import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer className={` ${styles['Footer']} ${styles[props.rootClassName]} `}>
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>MARIA-ART.ORG</span>
          <span>
            Copyright Â© 2021
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className={styles['image']}
      />
    </footer>
  )
}

Footer.defaultProps = {
  rootClassName: '',
}

Footer.propTypes = {
  rootClassName: PropTypes.string,
}

export default Footer
