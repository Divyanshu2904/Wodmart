import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Login() {
  return (
    <>
      
      <Header />
      
    <main>
        
        <section className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">Login</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                                <ul className="breadcrumb listing">
                                    <li className="breadcrumb-item single-list"><a href="/" className="single">Home</a>
                                    </li>
                                    <li className="breadcrumb-item single-list" aria-current="page"><a
                                            href="#" className="single active">Login</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        
        <div className="login-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                        <div className="login-card">
                            
                            <form action="#" method="POST">
                                <div className="position-relative contact-form mb-24">
                                    <label className="contact-label">Email </label>
                                    <input className="form-control contact-input" type="text"
                                        placeholder="Enter Your Email" />
                                </div>

                                <div className="contact-form mb-24">
                                    <div className="position-relative ">
                                        <div className="d-flex justify-content-between aligin-items-center">
                                            <label className="contact-label">Password</label>
                                            <a href="/forgot-password"><span className="text-primary text-15"> Forgot
                                                    password? </span></a>
                                        </div>
                                        <input type="password" className="form-control contact-input password-input"
                                            id="txtPasswordLogin" placeholder="Enter Password" />
                                        <i className="toggle-password ri-eye-line"></i>
                                    </div>
                                </div>

                                <a href="#" className="btn-primary-fill justify-content-center w-100">
                                    <span className="d-flex justify-content-center gap-6">
                                        Login
                                    </span>
                                </a>
                            </form>

                            <div className="login-footer">
                                <div className="create-account">
                                    <p>
                                        Don’t have an account?
                                        <a href="/register">
                                            <span className="text-primary">Register</span>
                                        </a>
                                    </p>
                                </div>
                                <a href="#"
                                    className="login-btn d-flex align-items-center justify-content-center gap-10">
                                    <img src="/assets/images/icon/google-icon.png" alt="img" className="m-0" />
                                    <span> login with Google</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </main>
    
    
      <Footer />
      <ScrollTop />
    </>
  )
}

export default Login
