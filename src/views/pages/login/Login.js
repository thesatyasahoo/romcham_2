import React from 'react'
import { FaUserAlt, FaLockOpen, FaEye } from 'react-icons/fa'
import mask from './assets/mask.png'
import styles from './login.module.css'
import pic8 from './assets/pic8.png'
import pic9 from './assets/pic9.png'
import NavBar from '../../../components/NavBar'
import Footer from '../footer/Footer'
import { Link } from 'react-router-dom'

const Login1 = () => {
  return (
    <>
      <NavBar />
      <div className={`${styles.loginPosition}`}>
        <img src={mask} className={`img-fluid w-100 ${styles.ig}`} alt="banner1" />
        <div className={`${styles.bannerHeadAlign}`}>
          <h2 className={`${styles.bannerHead}`}>Login</h2>
        </div>
        <div className={`${styles.memberHeight}`}>
          <div style={{ position: 'relative' }}>
            <img src={pic9} alt="pic7" className={`w-100 ${styles.orangeBanner}`} />
            <img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />

            <div className={`card ${styles.loginCard}`}>
              <div className={`card-body`}>
                <div className={`${styles.loginHead}`}>
                  <h5>log in</h5>
                  <form action="" className="mt-5">
                    <div className={`${styles.loginInputs}`}>
                      <span className={`${styles.loginIcon}`}>
                        <FaUserAlt />
                      </span>
                      <input type="text" placeholder="| User Id" />
                    </div>

                    <div className={`mt-4 ${styles.loginInputs}`}>
                      <span className={`${styles.loginIcon}`}>
                        <FaLockOpen />
                      </span>
                      <input type="password" placeholder="| Password" />
                      <span className={`${styles.loginIcon}`}>
                        <FaEye />
                      </span>
                    </div>
                    <div className={`d-flex justify-content-between mt-4 ${styles.loginForgot}`}>
                      <div>
                        <a href="#">Forgot your password?</a>
                      </div>
                      <div>
                        <p>
                          Don&apos;t have a password?
                          <span>
                            <a href="#">Contact us</a>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <Link to={'/page'} className={`btn btn-primary mb-4 ${styles.loginBtn}`}>
                        login
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div>
          <img src={pic9} alt="pic7" className={`w-100 ${styles.greenBanner}`} />
        </div>

        <div className={`${styles.greenBannerText}`}>
          <div>
            <h1>need help to decide?</h1>
            <h5>contact managemaent and develpement team</h5>
          </div>

          <div className={`${styles.greenBtnAlign}`}>
            <button className={`btn btn-primary ${styles.greenBtn}`}>contact us</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Login1
