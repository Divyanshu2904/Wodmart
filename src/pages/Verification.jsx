import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Verification() {
  return (
    <>
      
      <Header />
      
    <main>
        
        <section className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
					<div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">Verification</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                                <ul className="breadcrumb listing">
                                    <li className="breadcrumb-item single-list"><a href="/" className="single">Home</a></li>
                                    <li className="breadcrumb-item single-list" aria-current="page"><a href="#"
                                            className="single active">Verification</a></li>
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
                                <div className="contact-form">
                                    <label className="contact-label">Verification Code </label>
                                </div>

                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="contact-form mb-24">
                                            <input className="form-control contact-input text-center" type="text"
                                                placeholder="5" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="contact-form mb-24">
                                            <input className="form-control contact-input text-center" type="text"
                                                placeholder="0" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="contact-form mb-24">
                                            <input className="form-control contact-input text-center" type="text"
                                                placeholder="3" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="contact-form mb-24">
                                            <input className="form-control contact-input text-center" type="text"
                                                placeholder="1" />
                                        </div>
                                    </div>
                                </div>

                                <a href="/new-password" className="btn-primary-fill justify-content-center w-100">
                                    <span className="d-flex justify-content-center gap-6">
                                        <i className="ri-lock-line"></i>
                                        <span>Verify</span>
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

export default Verification
