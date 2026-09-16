import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Contact() {
  return (
    <>
      
      <Header />
      
    <main>
        
        <section className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
					<div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">Contact Us</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                                <ul className="breadcrumb listing">
                                    <li className="breadcrumb-item single-list"><a href="/" className="single">Home</a></li>
                                    <li className="breadcrumb-item single-list" aria-current="page"><a href="#"
                                            className="single active">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>						
					</div>
				</div>
            </div>
        </section>
        
        
        <div className="product-area section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xxl-6 col-xl-4">
                        <iframe className="map-frame"
                            src="https://www.google.com/maps/embed/v1/place?q=Dhaka,+Bangladesh&amp;key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-xxl-6 col-xl-8">
                        <div className="get-touch-box">
                            <div className="row g-4">
                                <div className="col-xl-6">
                                    <div className="contact-card">
                                        <div className="circle-icon">
                                            <img src="/assets/images/icon/call.png" alt="img" />
                                        </div>
                                        <a href="#">
                                            <p className="pera text-color-tertiary">+(323) 9847 3847 383 +(434) 5466 5467
                                                443</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="contact-card">
                                        <div className="circle-icon">
                                            <img src="/assets/images/icon/mail.png" alt="img" />
                                        </div>
                                        <a href="#">
                                            <p className="pera text-color-tertiary">infoyour@gmail.com
                                                Demoinfoemail@gmail.com</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="contact-card">
                                        <div className="circle-icon">
                                            <img src="/assets/images/icon/map.png" alt="img" />
                                        </div>
                                        <a href="#">
                                            <p className="pera text-color-tertiary">4517 Washington Ave. Manchester, Road,
                                                234 Kentucky USA</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-xl-6">
                                    <div className="contact-card">
                                        <div className="circle-icon">
                                            <img src="/assets/images/icon/time.png" alt="img" />
                                        </div>
                                        <a href="#">
                                            <p className="pera text-color-tertiary">Mon - Sat : 9am - 11pm
                                                Sunday: 11am - 5pm</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <section className="comment-area">
                                <div className="comment-box">
                                    <h4 className="title">Get In Touch With Us</h4>
                                    <p className="pera">Duis gravida augue velit eu dignissim felis posuere quis. Integ ante
                                        urna gravid nec
                                        est
                                        tincidunt orci at turpis gravida. Phasellus acdr egestas odio.</p>
                                    <form className="custom-form">
                                        <div className="row g-4">
                                            <div className="col-xl-4 col-sm-6">
                                                <input className="form-control custom-form-control" type="text"
                                                    placeholder="Name*" />
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <input className="form-control custom-form-control" type="text"
                                                    placeholder="Email*" />
                                            </div>
                                            <div className="col-xl-4 col-sm-6">
                                                <input className="form-control custom-form-control" type="text"
                                                    placeholder="Phone Number*" />
                                            </div>
                                            <div className="col-12">
                                                <textarea className="form-control custom-form-control custom-form-textarea"
                                                    placeholder="Comment" id="floatingTextarea2"></textarea>
                                            </div>
                                            <div className="col-12 mt-36">
                                                <a href="#" className="submit-btn d-inline-block">Send Message</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
        <section className="subscription-area subscription-bg">
            <div className="container">
                <div className="row">
					<div className="col-lg-12">
                        <div className="subscription-wrapper">
                            <div className="left-wrapper">
                                <div className="subscription-content">
                                    <h4 className="title">Get a surprise discount</h4>
                                    <p className="pera">Join our email subscription now</p>
                                </div>
                                <div className="subscription-input-section">
                                    <input type="text" className="subscription-input" placeholder="Enter your email address" />
                                    <button type="submit" className="subscribe-btn"><span className="btn-text">Subscribe</span><span
                                            className="icon"><i className="ri-arrow-right-line"></i></span></button>
                                </div>
                            </div>
                            <div className="right-wrapper">
                                <div className="subscription-content">
                                    <h4 className="title">Download App</h4>
                                    <p className="pera">Save $3 With App & New User only</p>
                                </div>
                                <div className="download-app">
                                    <a href="#" target="_blank">
                                        <img src="/assets/images/icon/google-play.png" alt="img" />
                                    </a>
                                    <a href="#" target="_blank">
                                        <img src="/assets/images/icon/app-store.png" alt="img" />
                                    </a>
                                </div>
                            </div>
                        </div>						
					</div>
				</div>
            </div>
        </section>
        
    </main>
    
    
      <Footer />
      <ScrollTop />
    </>
  )
}

export default Contact
