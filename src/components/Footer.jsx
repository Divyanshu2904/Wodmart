import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper footer-bg-one">
        <div className="container">
          <div className="footer-area position-relative">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="single-footer-caption">
                  <div className="footer-tittle">
                    <h4 className="title">About Us</h4>
                    <p className="pera">Etoshi is an exciting contemporary brand which focuses on high-quality products graphics with a British style</p>
                    <ul className="info-listing">
                      <li className="footer-info-list">
                        <a href="#" className="single">
                          <i className="ri-mail-fill"></i>
                          <p className="pera">info@mydomain.com</p>
                        </a>
                      </li>
                      <li className="footer-info-list">
                        <a href="#" className="single">
                          <div className="d-flex gap-6">
                            <i className="ri-phone-fill"></i>
                            <p className="pera">+777 2345 7885</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="footer-menu-section">
                  <div className="logo logo-large light-logo">
                    <Link to="/"><img src="/assets/images/logo/logo-dark.png" alt="logo" /></Link>
                  </div>
                  <div className="footer-social-section">
                    <h4 className="title">Follow Us</h4>
                    <ul className="footer-social-lists">
                      <li className="list-icon"><a href="#" className="list"><i className="ri-facebook-fill"></i></a></li>
                      <li className="list-icon"><a href="#" className="list"><i className="ri-whatsapp-fill"></i></a></li>
                      <li className="list-icon"><a href="#" className="list"><i className="ri-twitter-fill"></i></a></li>
                      <li className="list-icon"><a href="#" className="list"><i className="ri-instagram-fill"></i></a></li>
                      <li className="list-icon"><a href="#" className="list"><i className="ri-linkedin-fill"></i></a></li>
                      <li className="list-icon"><a href="#" className="list"><i className="ri-pinterest-fill"></i></a></li>
                    </ul>
                  </div>
                  <div className="footer-menu">
                    <ul className="menu-lists">
                      <li className="list"><Link to="/" className="menu-list">Home</Link></li>
                      <li className="list"><Link to="/about" className="menu-list">About</Link></li>
                      <li className="list"><Link to="/shop" className="menu-list">Shop</Link></li>
                      <li className="list"><Link to="/blog" className="menu-list">Blog</Link></li>
                      <li className="list"><Link to="/contact" className="menu-list">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-4 col-sm-6">
                <div className="single-footer-caption">
                  <div className="footer-tittle">
                    <h4 className="title">My Accounts</h4>
                    <ul className="listing">
                      <li className="single-list"><a href="#" className="single">My Orders</a></li>
                      <li className="single-list"><a href="#" className="single">My Credit Slips</a></li>
                      <li className="single-list"><a href="#" className="single">My Addresses</a></li>
                      <li className="single-list"><a href="#" className="single">My Personal Info</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-area position-relative">
          <div className="container">
            <div className="d-flex justify-content-between gap-14 flex-wrap">
              <div className="privacy-section d-flex">
                <Link to="/privacy-policy"><p className="pera mr-25">Privacy Policy</p></Link>
                <span>|</span>
                <Link to="/terms-condition"><p className="pera ml-25">Terms &amp; Conditions</p></Link>
              </div>
              <div className="payment-list">
                <img src="/assets/images/logo/payment-list.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
