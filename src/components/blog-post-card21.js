import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card21.module.css'

const BlogPostCard21 = (props) => {
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

BlogPostCard21.defaultProps = {
  when: '3 days ago',
  profile_alt: 'profile',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  label: 'Ð¦ÐµÐ½Ð°: 40 ÐÐ',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  title: 'Lorem ipsum dolor sit amet',
  image_alt: 'image',
  author: 'Jane Doe',
}

BlogPostCard21.propTypes = {
  when: PropTypes.string,
  profile_alt: PropTypes.string,
  image_src: PropTypes.string,
  profile_src: PropTypes.string,
  label: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
  image_alt: PropTypes.string,
  author: PropTypes.string,
}

export default BlogPostCard21
