import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './app-page.module.css'

const AppPage = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>ÐÐ°Ð³Ð°Ð·Ð¸Ð½ - Maria Art</title>
        <meta property="og:title" content="ÐÐ°Ð³Ð°Ð·Ð¸Ð½ - Maria Art " />
      </Helmet>
      <Header></Header>
      <span className={styles['text']}>.</span>
      <span className={styles['text01']}>.</span>
      <div className={styles['container01']}>
        <span className={styles['text02']}>.</span>
        <span className={styles['text03']}>.</span>
        <span className={styles['text04']}>.</span>
        <span className={styles['text05']}>.</span>
        <span>.</span>
      </div>
      <div className={styles['container02']}>
        <div className={styles['container03']}>
          <div className={styles['Banner']}>
            <h1 className={styles['text07']}>
              <span></span>
              <span></span>
              <span className={styles['text10']}></span>
              <span className={styles['text11']}></span>
              <span>
                ÐÐ°Ð»Ð¸ÑÐ½Ð¸ Ð·Ð°
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Ð¿Ð¾ÐºÑÐ¿ÐºÐ°</span>
            </h1>
          </div>
          <div className={styles['Main']}>
            <div className={styles['Blog']}>
              <div className={styles['container04']}>
                <div className={styles['BlogPostCard']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGFydHxlbnwwfHx8fDE2MzMwMDg5Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                    image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                    className={styles['image']}
                  />
                  <div className={styles['container05']}>
                    <div className={styles['container06']}>
                      <span className={styles['text15']}>
                        Ð¦ÐµÐ½Ð°: 40 ÐÐ
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className={styles['text16']}>
                        ÐÐ°Ð»Ð¸ÑÐµÐ½ Ð¾Ñ 10 Ð´Ð½Ð¸
                      </span>
                    </div>
                    <h1 className={styles['text17']}>
                      Lorem ipsum dolor sit amet
                    </h1>
                    <span className={styles['text18']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non volutpat turpis. Mauris luctus rutrum mi ut
                      rhoncus. Integer in dignissim tortor. Lorem ipsum dolor
                      sit amet, consectetur adipiscing ...
                    </span>
                    <div className={styles['Container07']}>
                      <div className={styles['Profile']}>
                        <span className={styles['text19']}>
                          ÐÐºÐ¾ Ð¶ÐµÐ»Ð°ÐµÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÐµÐ½ Ð¿ÑÐ¾Ð´ÑÐºÑ, Ð½Ð¾ Ñ Ð´Ð°Ð¹Ð½ Ð¿Ð¾ Ð²Ð°Ñ Ð¸Ð·Ð±Ð¾Ñ,
                          Ð¼Ð¾Ð»Ñ Ð¿Ð¾ÑÑÑÑÐµÑÐµ Ð¼Ðµ Ð½Ð° ÑÐµÐ»ÐµÑÐ¾Ð½ 0888888888.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['container08']}>
                <div className={styles['BlogPostCard1']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxhcnR8ZW58MHx8fHwxNjMzMDA4OTI3&amp;ixlib=rb-1.2.1&amp;h=1000"
                    image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                    className={styles['image01']}
                  />
                  <div className={styles['container09']}>
                    <div className={styles['container10']}>
                      <span className={styles['text20']}>
                        Ð¦ÐµÐ½Ð°: 89 ÐÐ
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className={styles['text21']}>ÐÐ°Ð»Ð¸ÑÐµÐ½ Ð¾Ñ 3 Ð´Ð½Ð¸</span>
                    </div>
                    <h1 className={styles['text22']}>
                      Lorem ipsum dolor sit amet
                    </h1>
                    <span className={styles['text23']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non volutpat turpis. Mauris luctus rutrum mi ut
                      rhoncus. Integer in dignissim tortor. Lorem ipsum dolor
                      sit amet, consectetur adipiscing ...
                    </span>
                    <div className={styles['Container11']}>
                      <div className={styles['Profile1']}>
                        <span className={styles['text24']}>
                          ÐÐºÐ¾ Ð¶ÐµÐ»Ð°ÐµÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÐµÐ½ Ð¿ÑÐ¾Ð´ÑÐºÑ, Ð½Ð¾ Ñ Ð´Ð°Ð¹Ð½ Ð¿Ð¾ Ð²Ð°Ñ Ð¸Ð·Ð±Ð¾Ñ,
                          Ð¼Ð¾Ð»Ñ Ð¿Ð¾ÑÑÑÑÐµÑÐµ Ð¼Ðµ Ð½Ð° ÑÐµÐ»ÐµÑÐ¾Ð½ 0888888888.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles['BlogPostCard2']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGFydHxlbnwwfHx8fDE2MzMwMDg5Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                  className={styles['image02']}
                />
                <div className={styles['container12']}>
                  <div className={styles['container13']}>
                    <span className={styles['text25']}>
                      Ð¦ÐµÐ½Ð°: 100 ÐÐ
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className={styles['text26']}>ÐÐ°Ð»Ð¸ÑÐµÐ½ Ð¾Ñ 1 Ð´ÐµÐ½</span>
                  </div>
                  <h1 className={styles['text27']}>
                    Lorem ipsum dolor sit amet
                  </h1>
                  <span className={styles['text28']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                    Integer in dignissim tortor. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ...
                  </span>
                  <div className={styles['Container14']}>
                    <div className={styles['Profile2']}>
                      <span className={styles['text29']}>
                        ÐÐºÐ¾ Ð¶ÐµÐ»Ð°ÐµÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÐµÐ½ Ð¿ÑÐ¾Ð´ÑÐºÑ, Ð½Ð¾ Ñ Ð´Ð°Ð¹Ð½ Ð¿Ð¾ Ð²Ð°Ñ Ð¸Ð·Ð±Ð¾Ñ,
                        Ð¼Ð¾Ð»Ñ Ð¿Ð¾ÑÑÑÑÐµÑÐµ Ð¼Ðµ Ð½Ð° ÑÐµÐ»ÐµÑÐ¾Ð½ 0888888888.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h1 className={styles['text30']}>Ð¡Ð¿ÐµÑÐ¸Ð°Ð»Ð½Ð¸ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ:</h1>
              <div className={styles['Gallery']}>
                <div className={styles['GalleryCard']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1482160549825-59d1b23cb208?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxhcnR8ZW58MHx8fHwxNjMzMDA4OTI3&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className={styles['image03']}
                  />
                  <span className={styles['text31']}>
                    Ð¦ÐµÐ½Ð¸ Ð¾Ñ 50 Ð´Ð¾ 100 Ð»ÐµÐ²Ð°
                  </span>
                  <h2 className={styles['text32']}>Project Title</h2>
                  <span className={styles['text33']}>
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className={styles['GalleryCard1']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGFydHxlbnwwfHx8fDE2MzMwMDg5Mjc&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className={styles['image04']}
                  />
                  <span className={styles['text34']}>
                    Ð¦ÐµÐ½Ð¸ Ð¾Ñ 50 Ð´Ð¾ 100 Ð»ÐµÐ²Ð°
                  </span>
                  <h2 className={styles['text35']}>Project Title</h2>
                  <span className={styles['text36']}>
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className={styles['GalleryCard2']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGFydHxlbnwwfHx8fDE2MzMwMDg5Mjc&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className={styles['image05']}
                  />
                  <span className={styles['text37']}>
                    Ð¦ÐµÐ½Ð¸ Ð¾Ñ 50 Ð´Ð¾ 100 Ð»ÐµÐ²Ð°
                  </span>
                  <h2 className={styles['text38']}>Project Title</h2>
                  <span className={styles['text39']}>
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className={styles['GalleryCard3']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGFydHxlbnwwfHx8fDE2MzQ4MDM1NTY&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className={styles['image06']}
                  />
                  <span className={styles['text40']}>
                    Ð¦ÐµÐ½Ð¸ Ð¾Ñ 50 Ð´Ð¾ 100 Ð»ÐµÐ²Ð°
                  </span>
                  <h2 className={styles['text41']}>Project Title</h2>
                  <span className={styles['text42']}>
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className={styles['GalleryCard4']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1570393080660-de4e4a15a247?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIxfHxhcnR8ZW58MHx8fHwxNjM0ODAzNTU2&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className={styles['image07']}
                  />
                  <span className={styles['text43']}>
                    Ð¦ÐµÐ½Ð¸ Ð¾Ñ 50 Ð´Ð¾ 100 Ð»ÐµÐ²Ð°
                  </span>
                  <h2 className={styles['text44']}>Project Title</h2>
                  <span className={styles['text45']}>
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className={styles['GalleryCard5']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1456086272160-b28b0645b729?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxhcnR8ZW58MHx8fHwxNjMzMDA4OTI3&amp;ixlib=rb-1.2.1&amp;h=1200"
                    className={styles['image08']}
                  />
                  <span className={styles['text46']}>
                    Ð¦ÐµÐ½Ð¸ Ð¾Ñ 50 Ð´Ð¾ 100 Ð»ÐµÐ²Ð°
                  </span>
                  <h2 className={styles['text47']}>Project Title</h2>
                  <span className={styles['text48']}>
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
              <div className={styles['Blog1']}>
                <div className={styles['container15']}>
                  <div className={styles['BlogPostCard3']}>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGFydHxlbnwwfHx8fDE2MzMwMDg5Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                      className={styles['image09']}
                    />
                    <div className={styles['container16']}>
                      <div className={styles['container17']}>
                        <span className={styles['text49']}>
                          Ð¦ÐµÐ½Ð°: 40 ÐÐ
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className={styles['text50']}>
                          ÐÐ°Ð»Ð¸ÑÐµÐ½ Ð¾Ñ 10 Ð´Ð½Ð¸
                        </span>
                      </div>
                      <h1 className={styles['text51']}>
                        Lorem ipsum dolor sit amet
                      </h1>
                      <span className={styles['text52']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non volutpat turpis. Mauris luctus rutrum mi ut
                        rhoncus. Integer in dignissim tortor. Lorem ipsum dolor
                        sit amet, consectetur adipiscing ...
                      </span>
                      <div className={styles['Container18']}>
                        <div className={styles['Profile3']}>
                          <span className={styles['text53']}>
                            ÐÐºÐ¾ Ð¶ÐµÐ»Ð°ÐµÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÐµÐ½ Ð¿ÑÐ¾Ð´ÑÐºÑ, Ð½Ð¾ Ñ Ð´Ð°Ð¹Ð½ Ð¿Ð¾ Ð²Ð°Ñ Ð¸Ð·Ð±Ð¾Ñ,
                            Ð¼Ð¾Ð»Ñ Ð¿Ð¾ÑÑÑÑÐµÑÐµ Ð¼Ðµ Ð½Ð° ÑÐµÐ»ÐµÑÐ¾Ð½ 0888888888.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['container19']}>
                  <div className={styles['BlogPostCard4']}>
                    <img
                      alt="image"
                      src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxhcnR8ZW58MHx8fHwxNjMzMDA4OTI3&amp;ixlib=rb-1.2.1&amp;h=1000"
                      image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                      className={styles['image10']}
                    />
                    <div className={styles['container20']}>
                      <div className={styles['container21']}>
                        <span className={styles['text54']}>
                          Ð¦ÐµÐ½Ð°: 89 ÐÐ
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <span className={styles['text55']}>
                          ÐÐ°Ð»Ð¸ÑÐµÐ½ Ð¾Ñ 3 Ð´Ð½Ð¸
                        </span>
                      </div>
                      <h1 className={styles['text56']}>
                        Lorem ipsum dolor sit amet
                      </h1>
                      <span className={styles['text57']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed non volutpat turpis. Mauris luctus rutrum mi ut
                        rhoncus. Integer in dignissim tortor. Lorem ipsum dolor
                        sit amet, consectetur adipiscing ...
                      </span>
                      <div className={styles['Container22']}>
                        <div className={styles['Profile4']}>
                          <span className={styles['text58']}>
                            ÐÐºÐ¾ Ð¶ÐµÐ»Ð°ÐµÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÐµÐ½ Ð¿ÑÐ¾Ð´ÑÐºÑ, Ð½Ð¾ Ñ Ð´Ð°Ð¹Ð½ Ð¿Ð¾ Ð²Ð°Ñ Ð¸Ð·Ð±Ð¾Ñ,
                            Ð¼Ð¾Ð»Ñ Ð¿Ð¾ÑÑÑÑÐµÑÐµ Ð¼Ðµ Ð½Ð° ÑÐµÐ»ÐµÑÐ¾Ð½ 0888888888.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['BlogPostCard5']}>
                  <img
                    alt="image"
                    src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGFydHxlbnwwfHx8fDE2MzMwMDg5Mjc&amp;ixlib=rb-1.2.1&amp;h=1000"
                    image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                    className={styles['image11']}
                  />
                  <div className={styles['container23']}>
                    <div className={styles['container24']}>
                      <span className={styles['text59']}>
                        Ð¦ÐµÐ½Ð°: 100 ÐÐ
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className={styles['text60']}>ÐÐ°Ð»Ð¸ÑÐµÐ½ Ð¾Ñ 1 Ð´ÐµÐ½</span>
                    </div>
                    <h1 className={styles['text61']}>
                      Lorem ipsum dolor sit amet
                    </h1>
                    <span className={styles['text62']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed non volutpat turpis. Mauris luctus rutrum mi ut
                      rhoncus. Integer in dignissim tortor. Lorem ipsum dolor
                      sit amet, consectetur adipiscing ...
                    </span>
                    <div className={styles['Container25']}>
                      <div className={styles['Profile5']}>
                        <span className={styles['text63']}>
                          ÐÐºÐ¾ Ð¶ÐµÐ»Ð°ÐµÑÐµ Ð¿Ð¾Ð´Ð¾Ð±ÐµÐ½ Ð¿ÑÐ¾Ð´ÑÐºÑ, Ð½Ð¾ Ñ Ð´Ð°Ð¹Ð½ Ð¿Ð¾ Ð²Ð°Ñ Ð¸Ð·Ð±Ð¾Ñ,
                          Ð¼Ð¾Ð»Ñ Ð¿Ð¾ÑÑÑÑÐµÑÐµ Ð¼Ðµ Ð½Ð° ÑÐµÐ»ÐµÑÐ¾Ð½ 0888888888.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles['BlogPostCard6']}>
                  <div className={styles['container26']}></div>
                  <div className={styles['container27']}>
                    <h1
                      className={` ${styles['text64']} ${projectStyles['headingOne']} `}
                    >
                      Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½
                    </h1>
                    <div className={styles['container28']}>
                      <div className={styles['container29']}>
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
                      <div className={styles['container30']}>
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
                      <div className={styles['container31']}>
                        <svg
                          viewBox="0 0 1024 1024"
                          className={styles['icon4']}
                        >
                          <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                        </svg>
                        <span
                          className={` ${styles['text65']} ${projectStyles['small']} `}
                        >
                          <span className={styles['text66']}>
                            Ð¡Ð¾ÑÐ¸Ñ, ÐÑÐ»Ð³Ð°ÑÐ¸Ñ
                          </span>
                        </span>
                      </div>
                    </div>
                    <p
                      className={` ${styles['text67']} ${projectStyles['lead']} `}
                    >
                      <span className={styles['text68']}>
                        Ð©Ðµ ÑÐµ ÑÐ°Ð´Ð²Ð°Ð¼ Ð´Ð° ÑÑÐ´ÐµÐ¹ÑÑÐ²Ð°Ð¼.
                      </span>
                    </p>
                  </div>
                </div>
                <div className={styles['Stats']}></div>
                <div className={styles['Stats1']}></div>
              </div>
              <div className={styles['Stats2']}></div>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="rootClassName1"></Footer>
    </div>
  )
}

export default AppPage
