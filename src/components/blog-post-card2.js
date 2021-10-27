import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card2.module.css'

const BlogPostCard2 = (props) => {
  return (
    <div className={styles['BlogPostCard']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.label}</span>
          <span className={styles['text1']}>{props.when}</span>
        </div>
        <h1 className={styles['text2']}>{props.title}</h1>
        <span className={styles['text3']}>{props.description}</span>
        <div className={styles['Container2']}>
          <div className={styles['Profile']}>
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className={styles['image1']}
            />
            <span className={styles['text4']}>{props.author}</span>
          </div>
          <span className={styles['text5']}>Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  when: '3 days ago',
  rootClassName: '',
  title: 'Lorem ipsum dolor sit amet',
  author: 'Jane Doe',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_alt: 'image',
  label: 'ENTERPRISE',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
}

BlogPostCard2.propTypes = {
  when: PropTypes.string,
  rootClassName: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  label: PropTypes.string,
  image_src: PropTypes.string,
}

export default BlogPostCard2
