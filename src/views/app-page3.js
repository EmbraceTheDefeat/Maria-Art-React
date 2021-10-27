import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './app-page3.module.css'

const AppPage3 = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Maria Art</title>
        <meta property="og:title" content="Maria Art " />
      </Helmet>
      <Header></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <div className={styles['Card']}>
              <h1
                className={` ${styles['text']} ${projectStyles['headingOne']} `}
              >
                <span className={styles['text01']}></span>
                <span className={styles['text02']}></span>
                <span className={styles['text03']}>
                  ÐÐ°ÐºÐ²Ð¾ Ð¿Ð¾-Ð´Ð¾Ð±ÑÐ¾ Ð¾Ñ ÑÐ½Ð¸ÐºÐ°Ð»ÐµÐ½, ÑÑÑÐ½Ð¾ Ð½Ð°Ð¿ÑÐ°Ð²ÐµÐ½ Ð¿Ð¾Ð´Ð°ÑÑÐº?
                </span>
              </h1>
              <div className={styles['container03']}>
                <div className={styles['container04']}>
                  <div className={styles['container05']}></div>
                </div>
                <span
                  className={` ${styles['text04']} ${projectStyles['lead']} `}
                >
                  <span className={styles['text05']}></span>
                  <span className={styles['text06']}></span>
                  <br></br>
                  <span className={styles['text08']}>
                    ÐÐ·Ð±ÐµÑÐ¸ Ð½Ð°Ð¹-Ð´Ð¾Ð±ÑÐ¾ÑÐ¾, ÑÐ°ÑÐµÑÐ°Ð¹ ÑÐ¾Ð²Ð° Ð¾Ñ ÐºÐ¾ÐµÑÐ¾ Ð¸Ð¼Ð°Ñ Ð½ÑÐ¶Ð´Ð°, Ð·Ð° Ð´Ð°
                    Ð¿Ð¾Ð³Ð»ÐµÐ·Ð¸Ñ ÑÐµÐ±Ðµ ÑÐ¸, ÑÐ¾Ð´Ð½Ð¸Ð½Ð° Ð¸Ð»Ð¸ Ð¿ÑÐ¸ÑÑÐµÐ» - Ð¸Ð»Ð¸ Ð¿ÑÐ¾ÑÑÐ¾ ÑÐ°Ð·ÐºÑÐ°ÑÐ¸
                    Ð´Ð¾Ð¼Ð° ÑÐ¸!
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className={styles['text10']}></span>
                  <br></br>
                  <span className={styles['text12']}>
                    Ð¥Ð°ÑÐµÑÐ°Ð¹ Ð´Ð¸Ð·Ð°Ð¹Ð½ Ð¸ Ð½Ð°Ð¿ÑÐ°Ð²Ð¸ Ð¿Ð¾ÑÑÑÐºÐ°.
                  </span>
                </span>
              </div>
              <div className={styles['container06']}>
                <Link to="/app-page" className={styles['navlink']}>
                  <PrimaryPinkButton
                    button="Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹"
                    rootClassName="rootClassName"
                    className={styles['Contact-me']}
                  ></PrimaryPinkButton>
                </Link>
                <OutlineGrayButton
                  button="ÐÑÐ¾ÑÐµÑÐ¸ Ð¿Ð¾Ð²ÐµÑÐµ"
                  rootClassName="rootClassName"
                ></OutlineGrayButton>
              </div>
              <div className={styles['container07']}>
                <div className={styles['container08']}>
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                    className={styles['image']}
                  />
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                    <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                    <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['Image1']}></div>
      <section className={styles['Features']}>
        <FeatureCard
          text="ÐÐ°ÐºÑÐ¿Ð¸ ÐµÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½ Ð¿Ð¾ ÑÐ¾Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð´Ð°ÑÑÐº Ð¾Ñ Ð¾Ð½Ð»Ð°Ð¹Ð½ Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½Ð° Ð¸Ð»Ð¸ ÑÐµ ÑÐ²ÑÑÐ¶Ð¸ Ñ Ð¼ÐµÐ½ Ð¸ Ð½Ð°Ð¿ÑÐ°Ð²Ð¸ Ð¿Ð¾ÑÑÑÐºÐ°."
          title="ÐÐ¼Ð°Ñ Ð´Ð²Ð° Ð²Ð°ÑÐ¸Ð°Ð½ÑÐ°:"
          image_src="/playground_assets/cube1.svg"
          rootClassName="rootClassName"
        ></FeatureCard>
      </section>
      <section className={styles['container09']}>
        <div className={styles['container10']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
            <path d="M771.516 320c18.126-12.88 35.512-27.216 51.444-43.148 33.402-33.402 55.746-74.5 62.912-115.722 7.858-45.186-3.672-87.14-31.63-115.1-22.3-22.298-52.51-34.086-87.364-34.086-49.632 0-101.922 23.824-143.46 65.362-66.476 66.476-105.226 158.238-126.076 223.722-15.44-65.802-46.206-154.644-106.018-214.458-32.094-32.092-73.114-48.57-111.846-48.57-31.654 0-61.78 11.004-84.26 33.486-49.986 49.988-43.232 137.786 15.086 196.104 20.792 20.792 45.098 38.062 70.72 52.412h-217.024v256h64v448h768v-448.002h64v-256h-188.484zM674.326 128.218c27.724-27.724 62.322-44.274 92.55-44.274 10.7 0 25.708 2.254 36.45 12.998 26.030 26.028 11.412 86.308-31.28 128.998-43.946 43.946-103.060 74.168-154.432 94.060h-50.672c18.568-57.548 52.058-136.456 107.384-191.782zM233.934 160.89c-0.702-9.12-0.050-26.248 12.196-38.494 10.244-10.244 23.788-12.396 33.348-12.396v0c21.258 0 43.468 10.016 60.932 27.48 33.872 33.872 61.766 87.772 80.668 155.876 0.51 1.84 1.008 3.67 1.496 5.486-1.816-0.486-3.646-0.984-5.486-1.496-68.104-18.904-122.002-46.798-155.874-80.67-15.828-15.826-25.77-36.16-27.28-55.786zM448 960h-256v-416h256v416zM448 512h-320v-128h320v128zM832 960h-256v-416h256v416zM896 512h-320v-128h320v128z"></path>
          </svg>
        </div>
        <h1 className={` ${styles['text13']} ${projectStyles['headingOne']} `}>
          <span className={styles['text14']}>ÐÑ Ð¸Ð´ÐµÑ - Ð² ÑÐµÐ°Ð»Ð½Ð¾ÑÑ</span>
        </h1>
        <div className={styles['container11']}>
          <span className={styles['text15']}>
            <span className={styles['text16']}>
              ÐÐ°ÑÐ¾ Ð´Ð° Ð½Ðµ Ð¿Ð¾Ð²ÐµÑÐ¸Ñ Ð¼ÐµÑÑÐ°Ð½Ð¸Ñ Ð¿Ð¾Ð´Ð°ÑÑÐº Ð½Ð° Ð¿ÑÐ¾ÑÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð¸ÑÑ, ÐºÐ¾Ð¹ÑÐ¾ Ð´Ð° Ð³Ð¾
              Ð¸Ð·Ð³Ð¾ÑÐ²Ð¸ Ð¿Ð¾ ÑÐ²Ð¾ÑÑÐ° Ð¿ÑÐµÐ´ÑÑÐ°Ð²Ð°?
            </span>
          </span>
        </div>
        <div className={styles['container12']}>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxhcnQlMjBjcmFmdHxlbnwwfHx8fDE2MzI5Mjc3Nzc&amp;ixlib=rb-1.2.1&amp;h=1000"
            className={styles['image2']}
          />
          <div className={styles['container13']}>
            <h2
              className={` ${styles['text17']} ${projectStyles['headingTwo']} `}
            >
              <span className={styles['text18']}>
                ÐÐ° ÑÐ°ÑÑÐ¸Ðµ Ð½Ðµ Ðµ Ð½ÑÐ¶Ð½Ð¾ Ð´Ð° ÑÑÑÑÐ¸Ñ ÑÐ°Ð¼!
              </span>
            </h2>
            <p className={styles['text19']}>
              <br></br>
              <span className={styles['text20']}>
                Ð¡Ð²Ð°ÑÐ±ÐµÐ½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸, ÑÐ¾Ð¶Ð´ÐµÐ½Ð½Ð¸ Ð´Ð½Ð¸, ÐºÐ¾Ð»ÐµÐ´Ð½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸ - Ð¼Ð¾Ð¶ÐµÑ Ð´Ð°
                Ð½Ð°Ð¿ÑÐ°Ð²Ð¸Ñ Ð²ÑÐ¸ÑÐºÐ¸ Ð¿ÑÐ°Ð·Ð½Ð¸ÑÐ¸ Ð¿Ð¾-ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð½Ð¸ Ñ Ð¸Ð½Ð¾Ð²Ð°ÑÐ¸Ð²ÐµÐ½, Ð»Ð¸ÑÐµÐ½ Ð¸
                ÐµÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½ Ð¿Ð¾ ÑÐ¾Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð´Ð°ÑÑÐº. Ð Ð°Ð· ÑÑÐ¼ ÑÑÐº, Ð·Ð° Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð½Ð°!
              </span>
              <br></br>
            </p>
          </div>
        </div>
        <div className={styles['container14']}>
          <div className={styles['container15']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1632819449265-869a22fcbb2c?ixid=Mnw5MTMyMXwwfDF8YWxsfDY5fHx8fHx8Mnx8MTYzMjkyNzc1MQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              className={styles['image3']}
            />
            <span className={` ${styles['text21']} ${projectStyles['small']} `}>
              <span className={styles['text22']}>
                &quot;To handle yourself, use your head; to handle others, use
                your heart.&quot;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span className={styles['text24']}>- Eleanor Roosevelt</span>
            </span>
          </div>
        </div>
        <section className={styles['Contaier']}>
          <div className={styles['container16']}>
            <div className={styles['container17']}>
              <svg
                viewBox="0 0 1022.8297142857142 1024"
                className={styles['icon6']}
              >
                <path d="M922.857 0c52 0 100 38.857 100 93.143 0 30.286-12 59.429-25.714 86.286-44.571 84.571-194.286 364-265.714 429.714-34.857 32.571-76 52-124.571 52-96.571 0-175.429-82.286-175.429-178.286 0-45.714 18.857-90.286 52.571-121.143l364.571-330.857c20-18.286 46.286-30.857 74.286-30.857zM403.429 590.857c29.714 57.714 84 101.143 146.857 117.714l0.571 40.571c3.429 162.857-109.714 274.857-273.143 274.857-193.714 0-277.714-154.286-277.714-329.714 21.143 14.286 94.857 73.143 118.857 73.143 14.286 0 26.286-8 31.429-21.143 48.571-126.857 124.571-149.714 253.143-155.429z"></path>
              </svg>
            </div>
            <h1
              className={` ${styles['text25']} ${projectStyles['headingOne']} `}
            >
              <span className={styles['text26']}>Ð£ÑÐ»ÑÐ³Ð¸</span>
            </h1>
            <span className={styles['text27']}>
              <span className={styles['text28']}>
                ÐÑÐ¾ Ð·Ð°ÑÐ¾ Ð¼Ð¾Ð¶ÐµÑ Ð´Ð° ÑÐ°Ð·ÑÐ¸ÑÐ°Ñ Ð½Ð° Ð¼ÐµÐ½.
              </span>
            </span>
          </div>
          <div className={styles['Divider']}></div>
          <ListItem
            title="1. ÐÑÐ¾ÑÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð½Ð¾ Ð¾ÑÐ½Ð¾ÑÐµÐ½Ð¸Ðµ"
            description="ÐÐ¾Ð¶ÐµÑ Ð´Ð° ÑÐµ Ð´Ð¾Ð²ÐµÑÐ¸Ñ Ð½Ð° Ð¼ÐµÐ½ Ð·Ð° Ð´Ð¾Ð±ÑÐ°ÑÐ° Ð¸ Ð½Ð°Ð²ÑÐµÐ¼ÐµÐ½Ð½Ð°  ÐºÐ¾Ð¼ÑÐ½Ð¸ÐºÐ°ÑÐ¸Ñ  Ð¾ÑÐ½Ð¾ÑÑÐ½Ð¾ Ð¿Ð¾ÑÑÑÐºÐ¸ Ð¾Ñ Ð½Ð°Ð»Ð¸ÑÐ½Ð¸ÑÐµ Ð¿ÑÐ¾Ð´ÑÐºÑÐ¸ Ð¸ Ð¿Ð¾ÑÑÑÐºÐ¸ÑÐµ ÑÐ¸ Ð·Ð° Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸ Ð¿Ð¾ ÑÐ²Ð¾Ñ Ð¸Ð´ÐµÑ."
          ></ListItem>
          <ListItem
            title="2. ÐÑÐ¾ÑÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð½Ð° Ð¸Ð·ÑÐ°Ð±Ð¾ÑÐºÐ°"
            description="ÐÐ¼Ð°Ð¼ Ð´ÑÐ»Ð³Ð¾Ð³Ð¾Ð´Ð¸ÑÐµÐ½ Ð¾Ð¿Ð¸Ñ Ð²ÑÐ² Ð²ÑÐ¸ÑÐºÐ¸ Ð½Ð°Ð¿ÑÐ°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¾Ñ ÐºÐ¾Ð¸ÑÐ¾ Ð¸Ð·Ð´Ð°Ð²Ð°Ð¼ Ð¿ÑÐ¾Ð´ÑÐºÑÐ¸. ÐÐ¾Ð¶ÐµÑ Ð´Ð° ÑÐ°Ð·ÑÐ¸ÑÐ°Ñ, ÑÐµ Ð²ÑÑÐºÐ° ÑÐ²Ð¾Ñ Ð¸Ð´ÐµÑ, ÑÐ»ÐµÐ´ Ð´ÐµÑÐ°Ð¹Ð»Ð½Ð¾ Ð¸Ð·Ð³Ð¾Ð²Ð°ÑÑÐ½Ðµ, ÑÐµ Ð·Ð°Ð¶Ð¸Ð²ÐµÐµ ÑÐ¾ÑÐ½Ð¾ ÑÐ°ÐºÐ° ÐºÐ°ÐºÑÐ¾ ÑÐ¸ Ñ Ð¿ÑÐµÐ´ÑÑÐ°Ð²ÑÑ."
          ></ListItem>
          <ListItem
            title="3. ÐÐ¾ÑÐµÐºÑÐ½Ð¸ Ð´Ð¾ÑÑÐ°Ð²ÐºÐ¸ Ð¸ Ð¿Ð»Ð°ÑÐ°Ð½Ð¸Ñ"
            description="ÐÐ° Ð¼ÐµÐ½ Ðµ Ð±ÐµÐ·ÐºÑÐ°Ð¹Ð½Ð¾ Ð²Ð°Ð¶Ð½Ð¾, Ð´Ð° Ð´Ð¾Ð¿ÑÐ¸Ð½Ð°ÑÑÐ¼ Ñ Ð¸Ð·ÐºÑÑÑÐ²Ð¾ÑÐ¾ ÑÐ¸ - Ð·Ð° ÑÐ¾Ð²Ð° Ð¸ Ð¼Ð¾Ð¶ÐµÑ Ð´Ð° Ð¾ÑÐ°ÐºÐ²Ð°Ñ Ð°Ð±ÑÐ¾Ð»ÑÑÐ½Ð° Ð¿ÑÐ¾Ð·ÑÐ°ÑÐ½Ð¾ÑÑ Ð·Ð°Ð´ ÑÐµÐ½Ð¸ÑÐµ Ð¸ Ð´Ð¾ÑÑÐ°Ð²ÐºÐ¸ÑÐµ Ð¼Ð¸. "
          ></ListItem>
          <div className={styles['container18']}>
            <div className={styles['container19']}></div>
          </div>
        </section>
      </section>
      <section className={styles['Testimonials']}>
        <div className={styles['container20']}>
          <div className={styles['container21']}>
            <img
              alt="image"
              src="/playground_assets/top.svg"
              className={styles['TopWaveImage']}
            />
            <div className={styles['container22']}>
              <div className={styles['container23']}>
                <div className={styles['container24']}>
                  <div className={styles['container25']}>
                    <div className={styles['container26']}>
                      <div className={styles['container27']}>
                        <div>
                          <p
                            className={` ${styles['text29']} ${projectStyles['body']} `}
                          >
                            <span className={styles['text30']}>
                              ÐÐ¾Ð³Ð° Ð´Ð° Ð¿ÑÐµÐ´Ð»Ð¾Ð¶Ð° Ð»Ð¸ÑÐ½Ð¸ ÑÑÐ¾ÑÐ¸ Ð¿Ð¾
                              ..................................... .
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span className={styles['text32']}>
                              ÐÑÐ¾Ð²ÐµÐ¶Ð´Ð°Ñ ÑÐµ Ð¸Ð»Ð¸ Ð¿ÑÐµÐ· ÑÐ¸ÐºÐµÐ½Ð´Ð° Ð¸Ð»Ð¸ Ð¿Ð¾ Ð´Ð¾Ð³Ð¾Ð²Ð°ÑÑÐ½Ðµ
                              Ð¿ÑÐµÐ· ÑÐµÐ´Ð¼Ð¸ÑÐ°ÑÐ°.
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <br></br>
                            <span></span>
                            <br></br>
                            <span className={styles['text36']}>
                              Ð¦ÐµÐ½Ð¸ÑÐµ Ð·Ð° ÑÑÐ¾ÑÐ¸ÑÐµ ÑÐµ Ð´Ð¾Ð³Ð¾Ð²Ð°ÑÑÑ Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑ Ð¾Ñ
                              Ð½Ð°ÑÐ¾ÐºÐ°ÑÐ° Ð¸ ÑÐ°ÑÐ¾Ð²ÐµÑÐµ Ð½Ð° Ð¿ÑÐ¾Ð²ÐµÐ¶Ð´Ð°Ð½Ðµ.
                            </span>
                            <br></br>
                            <span></span>
                            <br></br>
                            <span></span>
                          </p>
                          <p className={styles['text41']}>ÐÐ°ÑÐ¸Ñ</p>
                          <p
                            className={` ${styles['text42']} ${projectStyles['small']} `}
                          >
                            Ð¢Ð²Ð¾ÑÑ Ð°ÑÑ Ð¸Ð½ÑÑÑÑÐºÑÐ¾Ñ Ð² Ð¡Ð¾ÑÐ¸Ñ
                          </p>
                        </div>
                      </div>
                    </div>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1621973846559-325975fdd4cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxkcmF3fGVufDB8fHx8MTYzMzQ2ODA3Mg&amp;ixlib=rb-1.2.1"
                      className={styles['image4']}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/playground_assets/bottom.svg" />
      </section>
      <Footer rootClassName="rootClassName"></Footer>
    </div>
  )
}

export default AppPage3
