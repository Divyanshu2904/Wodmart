import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollTop from '../components/ScrollTop'

function Checkout() {
  return (
    <>
      
      <Header />
      
    <main>
        
        <section className="breadcrumb-section breadcrumb-bg">
            <div className="container">
                <div className="row">
					<div className="col-lg-12">
                        <div className="breadcrumb-text">
                            <h1 className="title wow fadeInUp" data-wow-delay="0.1s">Checout</h1>
                            <nav aria-label="breadcrumb" className="breadcrumb-nav wow fadeInUp" data-wow-delay="0.0s">
                                <ul className="breadcrumb listing">
                                    <li className="breadcrumb-item single-list"><a href="/" className="single">Home</a></li>
                                    <li className="breadcrumb-item single-list" aria-current="page"><a href="#"
                                            className="single active">Checout</a></li>
                                </ul>
                            </nav>
                        </div>						
					</div>
				</div>
            </div>
        </section>
        
        
        <div className="checkout-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="alert alert-primary d-flex gap-15 flex-wrap align-items-center mb-20" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                                fill="none">
                                <rect x="0.5" y="0.5" width="21" height="21" rx="1.5" stroke="#AD8C5C" />
                                <rect x="1.5" y="1.5" width="19" height="1" fill="#7ABFFF" stroke="#AD8C5C" />
                            </svg>
                            <p className="pera">
                                Have a coupon? <a href="#"><span className="highlight">Click here to enter
                                        your
                                        code</span></a>
                            </p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="alert alert-primary d-flex gap-15 flex-wrap align-items-center mb-0" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18"
                                fill="none">
                                <path
                                    d="M3.8882 5.84839C6.05114 5.84839 7.0777 6.71918 7.18585 8.45035C7.22745 9.11926 7.08519 9.77536 6.87056 10.4162C6.45461 11.6595 6.00871 12.8996 5.79574 14.1926C5.75196 14.4693 5.73138 14.749 5.73418 15.0289C5.73418 15.5609 5.90056 15.7003 6.46376 15.7203C6.91465 15.7363 7.34474 15.6402 7.77068 15.5168C7.95952 15.4623 8.15086 15.3951 8.31807 15.5473C8.50192 15.7139 8.40126 15.9118 8.37547 16.108C8.27148 16.8554 7.84139 17.2616 7.08269 17.4619C6.18757 17.6982 5.31907 18.0154 4.3707 17.9994C3.46056 17.9896 2.58167 17.6784 1.88165 17.1182C1.16871 16.5574 1.10715 15.7563 1.16788 14.9593C1.3118 13.0671 1.98481 11.2902 2.50974 9.48136C2.58603 9.25256 2.62723 9.01425 2.63203 8.77399C2.62371 8.34861 2.454 8.17237 2.0081 8.13712C1.5622 8.10187 1.12629 8.18679 0.697026 8.30295C0.100553 8.46317 -0.0358789 8.30295 0.0073799 7.72776C0.064781 6.9547 0.472412 6.5894 1.21696 6.38993C2.19361 6.13438 3.16112 5.87322 3.8882 5.84839Z"
                                    fill="#AD8C5C" />
                                <path
                                    d="M3.59592 2.346C3.59197 2.0357 3.65277 1.72779 3.77473 1.44054C3.89668 1.15329 4.0773 0.892549 4.30587 0.673787C4.53444 0.455025 4.80631 0.282696 5.10534 0.167021C5.40438 0.051347 5.7245 -0.00531641 6.0467 0.000392182C6.37097 -0.00504508 6.69311 0.0518025 6.9943 0.167614C7.2955 0.283425 7.5697 0.455877 7.8009 0.674894C8.0321 0.893912 8.21565 1.1551 8.34084 1.44321C8.46602 1.73131 8.53032 2.04055 8.52999 2.35286C8.52966 2.66516 8.4647 2.97427 8.3389 3.26213C8.21311 3.54999 8.029 3.81082 7.79734 4.02938C7.56568 4.24794 7.29111 4.41985 6.98967 4.53507C6.68823 4.65029 6.36597 4.7065 6.04171 4.70042C5.71936 4.70473 5.39938 4.64678 5.10067 4.53C4.80197 4.41322 4.5306 4.23996 4.3026 4.02048C4.0746 3.801 3.8946 3.53974 3.77322 3.25214C3.65184 2.96453 3.59156 2.65642 3.59592 2.346Z"
                                    fill="#AD8C5C" />
                            </svg>
                            <p className="pera">
                                Returning customer? <a href="#">Click here to login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <section className="billing-area bottom-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xxl-6 col-xl-6">
                        <div className="billing-box">
                            <h4 className="title">Billing Details</h4>
                            <form className="custom-form">
                                <div className="row g-4">
                                    <div className="col-sm-6">
                                        <input className="form-control custom-form-control" type="text"
                                            placeholder="First Name*" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="form-control custom-form-control" type="text"
                                            placeholder="Last Name*" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="form-control custom-form-control" type="text"
                                            placeholder="Email Address*" />
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="form-control custom-form-control" type="text"
                                            placeholder="Phone Number*" />
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group floating-group floating-diff">
                                            <label className="floating-label">Country*</label>
                                            <select name="country2"
                                                className="form-control custom-form-control floating-control">
                                                <option value="">Country*</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Albania">Albania</option>
                                                <option value="India">India</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <input className="form-control custom-form-control" type="text"
                                            placeholder="Address*" />
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group floating-group floating-diff">
                                            <label className="floating-label">Town / City*</label>
                                            <select name="country2"
                                                className="form-control custom-form-control floating-control">
                                                <option value="">Town / City*</option>
                                                <option value="Manhattan">Manhattan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="India">India</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <input className="form-control custom-form-control" type="text"
                                            placeholder="Postcode / ZIP*" />
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex gap-9 billing-checkbox">
                                            <label className="checkbox-label">
                                                <input className="checkbox-style" type="checkbox" value="remember"
                                                    name="remember" />
                                                <span className="checkmark-style"></span>
                                            </label>
                                            <p className="pera">Save this information for next time</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="cart-button d-flex justify-content-between flex-wrap gap-16">
                                    <a href="/shop" className="outline-pill-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="19"
                                            viewBox="0 0 78 19" fill="none">
                                            <path
                                                d="M10.4307 8.08519C10.45 8.00902 10.4733 7.93404 10.5005 7.86057C11.0144 6.48086 11.4919 5.08506 11.9655 3.69049C12.0652 3.39928 12.3056 3.10909 12.0209 2.67218C8.41924 5.58385 4.25553 7.51216 0 9.34863C4.377 11.2685 8.53825 13.4042 12.2683 16.3829C12.4931 15.9325 12.2509 15.6395 12.1415 15.3422C11.6228 13.9377 11.1054 12.5293 10.5522 11.141C10.1633 10.1548 10.1204 9.0761 10.4307 8.08519Z"
                                                fill="currentColor" />
                                            <rect x="77.3496" y="10.0935" width="68" height="1" rx="0.5"
                                                transform="rotate(-180 77.3496 10.0935)" fill="currentColor" />
                                        </svg>
                                        Return to cart
                                    </a>
                                    <a href="#" className=" cart-btn">Continue to shipping</a>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6">
                        <div className="billing-box">
                            <h4 className="title mb-22">Order Summary</h4>
                            <div className="table-responsive">
                                <table className="table summary-table">
                                    <thead className="thead">
                                        <tr>
                                            <th colspan="2">Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody className="tbody">
                                        <tr>
                                            <td className="product-name">
                                                <p className="pera text-color-tertiary mr-30">Kelly Bracelet Amchair</p>
                                            </td>
                                            <td className="product-qty">
                                                <p className="pera text-color-tertiary mr-30">2</p>
                                            </td>
                                            <td>
                                                <p className="pera">$640</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-name">
                                                <p className="pera text-color-tertiary mr-30">Candelaria Fabric Sofa</p>
                                            </td>
                                            <td className="product-qty">
                                                <p className="pera text-color-tertiary mr-30">1</p>
                                            </td>
                                            <td>
                                                <p className="pera">$600</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-name">
                                                <p className="pera text-color-tertiary mr-30">Envole Pendant Light</p>
                                            </td>
                                            <td className="product-qty">
                                                <p className="pera text-color-tertiary mr-30">1</p>
                                            </td>
                                            <td>
                                                <p className="pera">$110</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-name">
                                                <p className="pera text-color-tertiary mr-30">Otello Armchair Ghini</p>
                                            </td>
                                            <td className="product-qty">
                                                <p className="pera text-color-tertiary mr-30">1</p>
                                            </td>
                                            <td>
                                                <p className="pera">$640</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="divider"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <p className="pera text-color-primary">Subtotal</p>
                                            </td>
                                            <td>
                                                <p className="pera text-color-primary">$1990</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <p className="pera text-color-primary">Shipping</p>
                                            </td>
                                            <td>
                                                <p className="pera">Free Shipping</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <p className="pera text-color-primary">Tax</p>
                                            </td>
                                            <td>
                                                <p className="pera">$00</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <p className="pera text-color-primary">Local Delivery</p>
                                            </td>
                                            <td>
                                                <p className="pera">$20</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="3">
                                                <div className="divider"></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">
                                                <p className="pera font-700 text-color-primary">Total</p>
                                            </td>
                                            <td>
                                                <p className="pera font-700 text-color-primary2">$2010</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="payment-btn">
                                <div className="payment-wrapper">
                                    <div className="custom-radio-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                            Direct Bank Transfer
                                            <span className="custom-radio"></span>
                                        </label>
                                    </div>
                                    <div className="payment-info">
                                        <p className="pera">There are many variations of passages of Lorem Ipsum available,
                                            as
                                            alteration in some form, by injected humour</p>
                                    </div>
                                </div>
                                <div className="payment-wrapper payment-wrapper-blank">
                                    <div className="custom-radio-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault3" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                                            Cash on Delivery
                                            <span className="custom-radio"></span>
                                        </label>
                                    </div>
                                    <div className="custom-radio-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault4" />
                                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                                            Credit/Debit Cards or Paypal
                                            <span className="custom-radio"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-18 payment-done">
                                <a href="#" className=" cart-btn d-inline-block">Place Order Now</a>
                            </div>

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

export default Checkout
