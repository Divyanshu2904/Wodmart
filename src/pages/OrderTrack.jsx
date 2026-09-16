import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function OrderTrack() {
  return (
    <>
      
      <Header />
      
    <main>
        
        <section className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
					<div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">Order Tracking</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                                <ul className="breadcrumb listing">
                                    <li className="breadcrumb-item single-list"><a href="/" className="single">Home</a></li>
                                    <li className="breadcrumb-item single-list" aria-current="page"><a href="#"
                                            className="single active">Order Tracking</a></li>
                                </ul>
                            </nav>
                        </div>						
					</div>
				</div>
            </div>
        </section>
        
        
        <section className="order-track-area section-padding2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="tracking-content text-center">
                            <h4 className="title">Order Tracking</h4>
                            <p className="pera">To track your order please enter your Order ID in the box below and press
                                the "Track"
                                button. This was given
                                to you on your receipt and in the confirmation email you should have received.</p>
                            <form className="form-floating tracking-form">
                                <div className="form-floating mb-38">
                                    <input type="email" className="form-control" id="floatingInputValue"
                                        placeholder="Found in your order confirmation email" />
                                    <label className="floating-label" htmlFor="floatingInputValue">Order ID</label>
                                </div>
                                <div className="form-floating mb-39">
                                    <input type="email" className="form-control" id="floatingInputValueOne"
                                        placeholder="email you used during checkout" />
                                    <label className="floating-label" htmlFor="floatingInputValueOne">Billing Email</label>
                                </div>
                                <button type="submit" className="fill-pill-btn">Track Now <svg className="ml-15"
                                        xmlns="http://www.w3.org/2000/svg" width="78" height="19" viewBox="0 0 78 19"
                                        fill="none">
                                        <path
                                            d="M66.9189 10.9147C66.8996 10.9909 66.8763 11.0658 66.8491 11.1393C66.3352 12.519 65.8577 13.9148 65.3841 15.3094C65.2844 15.6006 65.0441 15.8908 65.3287 16.3277C68.9304 13.416 73.0941 11.4877 77.3496 9.65125C72.9726 7.73135 68.8114 5.5957 65.0813 2.61696C64.8565 3.06738 65.0987 3.36038 65.2082 3.65764C65.7268 5.06217 66.2442 6.47055 66.7974 7.85887C67.1863 8.84509 67.2292 9.92378 66.9189 10.9147Z"
                                            fill="white" />
                                        <rect y="8.90649" width="68" height="1" rx="0.5" fill="white" />
                                    </svg></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        
        
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

export default OrderTrack
