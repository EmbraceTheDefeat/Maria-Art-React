import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import projectStyles from '../style.module.css'
import styles from './header.module.css'

const Header = (props) => {
  return (
    <div className={styles['Header']}>
      <nav className={styles['Nav']}>
        <div className={styles['container']}>
          <Link to="/" className={styles['navlink']}>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image']}
            />
          </Link>
          <div className={styles['Menu']}>
            <Link
              to="/"
              className={` ${styles['navlink1']} ${projectStyles['large']} `}
            >
              ÐÐ°ÑÐ°Ð»Ð¾
            </Link>
            <Link
              to="/app-page2"
              className={` ${styles['navlink2']} ${projectStyles['large']} `}
            >
              ÐÐ° Ð¼ÐµÐ½
            </Link>
            <Link
              to="/app-page1"
              className={` ${styles['navlink3']} ${projectStyles['large']} `}
            >
              Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½
            </Link>
          </div>
          <div className={styles['container1']}>
            <div className={styles['container2']}>
              <Link to="/app-page" className={styles['navlink4']}>
                <PrimaryPinkButton
                  button="ÐÐ°Ð³Ð°Ð·Ð¸Ð½"
                  className={styles['component']}
                ></PrimaryPinkButton>
              </Link>
            </div>
            <Link to="/app-page2" className={styles['navlink5']}>
              <svg
                viewBox="0 0 1022.8297142857142 1024"
                className={styles['icon']}
              >
                <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
              </svg>
            </Link>
            <Link to="/app-page1" className={styles['navlink6']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                <path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"></path>
              </svg>
            </Link>
            <Link to="/app-page" className={styles['navlink7']}>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className={styles['icon4']}
              >
                <path d="M365.714 877.714c0 40-33.143 73.143-73.143 73.143s-73.143-33.143-73.143-73.143 33.143-73.143 73.143-73.143 73.143 33.143 73.143 73.143zM877.714 877.714c0 40-33.143 73.143-73.143 73.143s-73.143-33.143-73.143-73.143 33.143-73.143 73.143-73.143 73.143 33.143 73.143 73.143zM950.857 256v292.571c0 18.286-14.286 34.286-32.571 36.571l-596.571 69.714c2.857 13.143 7.429 26.286 7.429 40 0 13.143-8 25.143-13.714 36.571h525.714c20 0 36.571 16.571 36.571 36.571s-16.571 36.571-36.571 36.571h-585.143c-20 0-36.571-16.571-36.571-36.571 0-17.714 25.714-60.571 34.857-78.286l-101.143-470.286h-116.571c-20 0-36.571-16.571-36.571-36.571s16.571-36.571 36.571-36.571h146.286c38.286 0 39.429 45.714 45.143 73.143h686.286c20 0 36.571 16.571 36.571 36.571z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

Header.defaultProps = {
  image_src: '/playground_assets/maria%20art_free-file1-200h.png',
  image_alt: 'image',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Header
