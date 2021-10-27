import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import projectStyles from '../style.module.css'
import styles from './app-page1.module.css'

const AppPage1 = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½ - Maria Art</title>
        <meta property="og:title" content="Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½ - Maria Art " />
      </Helmet>
      <Header></Header>
      <div className={styles['container01']}>
        <div className={styles['Main']}>
          <div className={styles['container02']}>
            <div className={styles['Contact']}>
              <div className={styles['container03']}>
                <div className={styles['Form']}>
                  <h1
                    className={` ${styles['text']} ${projectStyles['headingOne']} `}
                  >
                    Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½
                  </h1>
                  <p
                    className={` ${styles['text1']} ${projectStyles['lead']} `}
                  >
                    <span className={styles['text2']}>
                      Ð©Ðµ ÑÐµ ÑÐ°Ð´Ð²Ð°Ð¼ Ð´Ð° ÑÑÐ´ÐµÐ¹ÑÑÐ²Ð°Ð¼ Ñ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸ÑÐµ Ð¸ Ð¸Ð´ÐµÐ¸ÑÐµ ÑÐ¸!
                    </span>
                  </p>
                  <div className={styles['container04']}></div>
                </div>
                <div className={styles['Info']}>
                  <div className={styles['container05']}>
                    <h3
                      className={` ${styles['text3']} ${projectStyles['headingTwo']} `}
                    >
                      <span>ÐÐ½ÑÐ¾ÑÐ¼Ð°ÑÐ¸Ñ Ð·Ð° ÐºÐ¾Ð½ÑÐ°ÐºÑ</span>
                    </h3>
                    <div className={styles['container06']}>
                      <div className={styles['container07']}>
                        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                          <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                        </svg>
                        <a
                          href="tel:+40 772 100 200"
                          className={` ${styles['link']} ${projectStyles['small']} `}
                        >
                          (+359) 888888888
                        </a>
                      </div>
                      <div className={styles['container08']}>
                        <svg
                          viewBox="0 0 1024 1024"
                          className={styles['icon2']}
                        >
                          <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                        </svg>
                        <a
                          href="mailto:hello@creative-tim.com?subject="
                          className={` ${styles['link1']} ${projectStyles['small']} `}
                        >
                          maria-art@gmail.com
                        </a>
                      </div>
                      <div className={styles['container09']}>
                        <svg
                          viewBox="0 0 1024 1024"
                          className={styles['icon4']}
                        >
                          <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                        </svg>
                        <span
                          className={` ${styles['text5']} ${projectStyles['small']} `}
                        >
                          Ð¡Ð¾ÑÐ¸Ñ, ÐÑÐ»Ð³Ð°ÑÐ¸Ñ
                        </span>
                      </div>
                    </div>
                  </div>
                  <img
                    alt="image"
                    src="/playground_assets/wave-1.svg"
                    className={styles['image']}
                  />
                  <div className={styles['container10']}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterGray rootClassName="rootClassName"></FooterGray>
    </div>
  )
}

export default AppPage1
