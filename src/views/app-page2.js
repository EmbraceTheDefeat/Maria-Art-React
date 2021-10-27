import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import PrimaryPinkButton from '../components/primary-pink-button'
import projectStyles from '../style.module.css'
import styles from './app-page2.module.css'

const AppPage2 = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>ÐÐ° Ð¼ÐµÐ½ - Maria Art</title>
        <meta property="og:title" content="ÐÐ° Ð¼ÐµÐ½ - Maria Art " />
      </Helmet>
      <div className={styles['Profile']}>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE4fHx3b21hbnxlbnwwfHx8fDE2MzM0Njc2NDE&amp;ixlib=rb-1.2.1&amp;h=1000"
          className={styles['image']}
        />
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h4 className={styles['text']}>ÐÐ°ÑÐ¸Ñ ÐÐµÐ¾ÑÐ³Ð¸ÐµÐ²Ð°</h4>
            <OutlineBlueButton button="follow"></OutlineBlueButton>
          </div>
          <div className={styles['container03']}>
            <span className={styles['text01']}>
              <span className={styles['text02']}>323</span>
              <span> Posts</span>
            </span>
            <span className={styles['text04']}>
              <span className={styles['text05']}>3.5k</span>
              <span> Followers</span>
            </span>
            <span>
              <span className={styles['text08']}>260</span>
              <span> Following</span>
            </span>
          </div>
          <span className={projectStyles['medium']}>
            Decisions: If you canât decide, the answer is no. If two equally
            difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality). Choose the path that
            leaves you more equanimous.
          </span>
          <NextButton button="More about me"></NextButton>
        </div>
        <div className={styles['Header']}></div>
      </div>
      <div className={styles['BlogPosts']}>
        <h1 className={` ${styles['text11']} ${projectStyles['headingTwo']} `}>
          <span></span>
          <span>Check my latest blogposts</span>
          <br></br>
        </h1>
        <div className={styles['container04']}>
          <BlogCard></BlogCard>
          <BlogCard
            image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
            description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
          ></BlogCard>
          <BlogCard
            title="MateLabs machine learning"
            image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-wall.jpg"
            description="If youâve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with"
          ></BlogCard>
          <div className={styles['container05']}>
            <div className={styles['Card']}>
              <div className={styles['container06']}>
                <h1 className={styles['text14']}>Flexible work hours</h1>
                <span className={styles['text15']}>
                  <span className={styles['text16']}>
                    Rather than worrying about switching offices every couple
                    years, you stay in the same place.
                  </span>
                </span>
                <div className={styles['container07']}>
                  <button
                    className={` ${styles['button']} ${projectStyles['button']} `}
                  >
                    <span className={styles['text17']}>Read more</span>
                    <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                      <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className={styles['container08']}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <div className={styles['Header1']}>
        <div className={styles['Header2']}>
          <nav className={styles['Nav']}>
            <div className={styles['container09']}>
              <Link to="/" className={styles['navlink']}>
                <img
                  alt="image"
                  src="/playground_assets/maria%20art_free-file1-200h.png"
                  className={styles['image1']}
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
              <div className={styles['container10']}>
                <div className={styles['container11']}>
                  <Link to="/app-page" className={styles['navlink4']}>
                    <PrimaryPinkButton
                      button="ÐÐ°Ð³Ð°Ð·Ð¸Ð½"
                      className={styles['component6']}
                    ></PrimaryPinkButton>
                  </Link>
                </div>
                <svg
                  viewBox="0 0 1022.8297142857142 1024"
                  className={styles['icon2']}
                >
                  <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                  <path d="M736 0h-448c-52.8 0-96 43.2-96 96v832c0 52.8 43.2 96 96 96h448c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM384 48h256v32h-256v-32zM512 960c-35.346 0-64-28.654-64-64s28.654-64 64-64 64 28.654 64 64-28.654 64-64 64zM768 768h-512v-640h512v640z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className={styles['icon6']}
                >
                  <path d="M365.714 877.714c0 40-33.143 73.143-73.143 73.143s-73.143-33.143-73.143-73.143 33.143-73.143 73.143-73.143 73.143 33.143 73.143 73.143zM877.714 877.714c0 40-33.143 73.143-73.143 73.143s-73.143-33.143-73.143-73.143 33.143-73.143 73.143-73.143 73.143 33.143 73.143 73.143zM950.857 256v292.571c0 18.286-14.286 34.286-32.571 36.571l-596.571 69.714c2.857 13.143 7.429 26.286 7.429 40 0 13.143-8 25.143-13.714 36.571h525.714c20 0 36.571 16.571 36.571 36.571s-16.571 36.571-36.571 36.571h-585.143c-20 0-36.571-16.571-36.571-36.571 0-17.714 25.714-60.571 34.857-78.286l-101.143-470.286h-116.571c-20 0-36.571-16.571-36.571-36.571s16.571-36.571 36.571-36.571h146.286c38.286 0 39.429 45.714 45.143 73.143h686.286c20 0 36.571 16.571 36.571 36.571z"></path>
                </svg>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default AppPage2
