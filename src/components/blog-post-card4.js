import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card4.module.css'

const BlogPostCard4 = (props) => {
  return (
    <div className={styles['BlogPostCard']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <div className={styles['container']}>
        <span className={styles['text']}>{props.date}</span>
        <span className={styles['text1']}>{props.description}</span>
        <div className={styles['Separator']}></div>
        <span className={styles['text2']}>{props.label}</span>
      </div>
    </div>
  )
}

BlogPostCard4.defaultProps = {
  description:
    'Lorem ipsum lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHZlbmljZXxlbnwwfHx8fDE2MjYyNzIyOTA&ixlib=rb-1.2.1&w=1000',
  rootClassName: '',
  label: 'Food & Drink',
  date: 'JULY 24',
}

BlogPostCard4.propTypes = {
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  date: PropTypes.string,
}

export default BlogPostCard4
