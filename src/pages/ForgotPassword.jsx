import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function ForgotPassword() {
  return (
    <>
      
      <Header />
      
    <main>
        
        <section className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="breadcrumb-text">
                    <h1 className="title wow fadeInUp" data-wow-delay="0.1s">Forgot Password</h1>
                    <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                        <ul className="breadcrumb listing">
                            <li className="breadcrumb-item single-list"><a href="/" className="single">Home</a></li>
                            <li className="breadcrumb-item single-list" aria-current="page"><a href="#"
                                    className="single active">Forgot Password</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
        
        
        <div className="login-area section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10">
                        <div className="login-card">
                            
                            <form action="#" method="POST">
                                <div className="contact-form mb-24">
                                    <label className="contact-label">Email </label>
                                    <input className="form-control contact-input" type="email" placeholder="Email" />
                                </div>

                                <a href="/verification" className="btn-primary-fill justify-content-center w-100">
                                    <span className="d-flex justify-content-center gap-6">
                                        <span>Reset Password</span>
                                    </span>
                                </a>
                            </form>

                            <div className="login-footer">
                                <div className="create-account">
                                    <p className="mb-0">
                                        Go back to
                                        <a href="/login">
                                            <span className="text-primary">Login</span>
                                        </a>
                                    </p>
                                </div>
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

export default ForgotPassword
