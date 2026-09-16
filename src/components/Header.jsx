import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path ? 'active' : ''

  return (
    <header>
      <div className="header-area">
        <div className="main-header">
          {/* Top bar */}
          <div className="top-menu-wrapper d-none d-lg-block">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="top-header-left d-flex align-items-center">
                      <div className="top-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2.02618 16.0002C1.92202 15.9752 1.81368 15.9543 1.70952 15.9293C0.651183 15.6585 -0.06965 14.6585 0.00535 13.5585C0.0761833 12.4877 0.909517 11.6044 1.98035 11.4627C3.10535 11.3127 4.16368 12.0169 4.46785 13.1127C4.48035 13.1544 4.49285 13.1918 4.50952 13.2502C4.55535 13.2502 4.60535 13.2502 4.65535 13.2502C6.03452 13.2502 7.40952 13.2502 8.78868 13.2502C8.89285 13.2502 8.94702 13.2252 8.99702 13.121C9.25952 12.5668 9.70535 12.2627 10.3179 12.2627C10.9262 12.2627 11.3762 12.5585 11.6429 13.1127C11.6929 13.2169 11.7429 13.2544 11.8595 13.2544C12.3262 13.246 12.797 13.2543 13.2637 13.2502C14.2845 13.2377 15.0804 12.396 15.0387 11.3752C15.0054 10.4877 14.272 9.71268 13.3845 9.68768C12.272 9.65852 11.1595 9.68352 10.047 9.66685C9.81785 9.66268 9.69285 9.71268 9.56785 9.93352C9.28452 10.4502 8.80952 10.696 8.21785 10.6544C7.65118 10.6168 7.24702 10.3168 7.00118 9.80852C6.95118 9.70018 6.89702 9.66685 6.78035 9.67102C5.98868 9.67518 5.20118 9.67518 4.40952 9.67102C3.44285 9.66685 2.65535 9.07102 2.43868 8.18768C2.12618 6.92102 3.06368 5.72935 4.38035 5.72935C6.79285 5.72518 9.20535 5.72935 11.6137 5.72935C11.6762 5.72935 11.7387 5.72935 11.8387 5.72935C11.7595 5.63352 11.7012 5.56268 11.647 5.49185C11.2637 5.01685 10.9262 4.51685 10.6304 3.97935C9.79702 2.44602 10.7387 0.733516 12.0637 0.221016C12.3179 0.121016 12.5887 0.0751831 12.8554 0.000183105C13.0512 0.000183105 13.2512 0.000183105 13.447 0.000183105C13.4762 0.00851644 13.5054 0.0251831 13.5345 0.0293498C14.6762 0.187683 15.6012 1.02102 15.8845 2.14185C15.9179 2.27102 15.9429 2.40018 15.972 2.53352C15.972 2.71268 15.972 2.88768 15.972 3.06685C15.7595 4.01268 15.2137 4.77518 14.622 5.51268C14.4387 5.74185 14.2345 5.94602 14.0554 6.17518C13.7678 6.54185 13.4054 6.67935 12.9429 6.67518C10.122 6.66268 7.30118 6.67102 4.47618 6.67102C4.39285 6.67102 4.30952 6.67102 4.22618 6.68352C3.59702 6.75852 3.19285 7.34602 3.34285 7.96268C3.45952 8.43352 3.87202 8.73768 4.41368 8.74185C5.19702 8.74602 5.98452 8.74185 6.76785 8.74602C6.88452 8.74602 6.94285 8.71685 7.00118 8.60018C7.26785 8.05852 7.70535 7.75852 8.31368 7.75435C8.92202 7.75018 9.36368 8.04602 9.63452 8.58768C9.69702 8.71268 9.75952 8.74602 9.88868 8.74602C11.0012 8.74185 12.1137 8.73768 13.2262 8.74602C14.522 8.75018 15.597 9.59185 15.9012 10.8335C15.9304 10.9544 15.9512 11.0752 15.9762 11.196C15.9762 11.3835 15.9762 11.571 15.9762 11.7585C15.9679 11.7752 15.9554 11.796 15.9512 11.8127C15.8137 13.0627 14.7012 14.2335 13.147 14.196C12.722 14.1877 12.2929 14.2002 11.8679 14.1919C11.747 14.1877 11.6887 14.2252 11.6345 14.3377C11.3679 14.8919 10.9179 15.1877 10.3095 15.1835C9.70535 15.1793 9.26368 14.8794 8.99702 14.3335C8.94702 14.2294 8.90118 14.1919 8.78035 14.1919C7.40952 14.196 6.03868 14.196 4.66368 14.196C4.61368 14.196 4.55952 14.196 4.50952 14.196C4.49285 14.2502 4.47618 14.296 4.46368 14.3377C4.22202 15.1252 3.70535 15.6502 2.91368 15.9044C2.78452 15.946 2.65535 15.9669 2.52202 16.0002C2.35952 16.0002 2.19285 16.0002 2.02618 16.0002Z" fill="#AD8C5C" />
                        </svg>
                        <Link to="/order-track"><p className="pera text-color-primary">Track Your Order</p></Link>
                      </div>
                      <div className="top-menu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                          <path d="M17.2021 1.33173C17.2021 4.77563 17.2021 8.21953 17.2021 11.6634C17.198 11.6718 17.1897 11.6843 17.1897 11.6926C17.0691 12.4941 16.3995 13.0243 15.5511 12.9992C14.8108 12.9784 14.0664 12.9951 13.3261 12.9951C9.47914 12.9951 5.63219 12.9951 1.78525 12.9951C0.86198 12.9951 0.20488 12.3606 0.20488 11.4547C0.200721 8.15274 0.200721 4.8466 0.209039 1.54045C0.209039 1.31086 0.267263 1.06039 0.362917 0.851674C0.64572 0.258906 1.1531 9.15527e-05 1.80188 9.15527e-05C6.40158 9.15527e-05 11.0013 9.15527e-05 15.5968 9.15527e-05C16.1874 0.0209637 16.5783 0.204638 16.8778 0.576162C17.0607 0.801581 17.1398 1.06457 17.2021 1.33173Z" fill="#AD8C5C" />
                        </svg>
                        <a href="#"><p className="pera text-color-secondary">infoyour@gmail.com</p></a>
                      </div>
                    </div>
                    <div className="top-header-right">
                      <div className="dropdown-side-divider">
                        <select className="country-select" name="country"></select>
                      </div>
                      <div className="dropdown-side-divider ml-40">
                        <select className="select2" name="currency">
                          <option value="usd">USD</option>
                          <option value="bdt">BDT</option>
                          <option value="cad">CAD</option>
                        </select>
                      </div>
                      <div className="login-wrapper ml-48">
                        <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_366_11241)">
                          <path fillRule="evenodd" clipRule="evenodd" d="M13 1.75C6.7868 1.75 1.75 6.7868 1.75 13C1.75 16.0203 2.9395 18.7622 4.8774 20.7837C6.40175 17.853 9.4662 15.85 13 15.85C16.5338 15.85 19.5983 17.853 21.1226 20.7837C23.0605 18.7622 24.25 16.0203 24.25 13C24.25 6.7868 19.2132 1.75 13 1.75Z" fill="black"/>
                          </g>
                          <defs><clipPath id="clip0_366_11241"><rect width="26" height="26" fill="white"/></clipPath></defs>
                        </svg>
                        <Link to="/login"><p className="pera text-color-primary">Login / Register</p></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main navbar */}
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="menu-wrapper">
                    <div className="main-menu">
                      <nav>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="logo logo-large light-logo">
                            <Link to="/"><img src="/assets/images/logo/logo.png" alt="logo" /></Link>
                          </div>
                          <div className="search-header-position d-block d-lg-none">
                            <div className="d-flex gap-15">
                              <div className="search-bar">
                                <a href="#" className="rounded-btn"><i className="ri-search-line"></i></a>
                              </div>
                            </div>
                          </div>
                          <ul className="listing d-none d-lg-block" id="navigation">
                            <li className="single-list">
                              <a href="#" className={`single ${isActive('/')}`}>Home <i className="ri-arrow-down-s-line"></i></a>
                              <ul className="submenu">
                                <li className="single-list"><Link to="/" className="single">Home 01</Link></li>
                                <li className="single-list"><Link to="/home2" className="single">Home 02</Link></li>
                              </ul>
                            </li>
                            <li className="single-list"><Link to="/about" className={`single ${isActive('/about')}`}>About</Link></li>
                            <li className="single-list"><Link to="/shop" className={`single ${isActive('/shop')}`}>Shop</Link></li>
                            <li className="single-list"><Link to="/blog" className={`single ${isActive('/blog')}`}>Blog</Link></li>
                            <li className="single-list">
                              <a href="#" className="single">Pages <i className="ri-arrow-down-s-line"></i></a>
                              <ul className="submenu">
                                <li className="single-list"><Link to="/wishlist" className="single">Wishlist</Link></li>
                                <li className="single-list"><Link to="/blog-details" className="single">Blog Details</Link></li>
                                <li className="single-list"><Link to="/shop-details" className="single">Shop Details</Link></li>
                                <li className="single-list"><Link to="/order-track" className="single">Order Track</Link></li>
                                <li className="single-list"><Link to="/cart" className="single">Shopping Cart</Link></li>
                                <li className="single-list"><Link to="/checkout" className="single">Checkout</Link></li>
                                <li className="single-list">
                                  <a href="#" className="single">Login <i className="ri-arrow-right-s-line"></i></a>
                                  <ul className="submenu">
                                    <li className="single-list"><Link to="/login" className="single">Login</Link></li>
                                    <li className="single-list"><Link to="/register" className="single">Registration</Link></li>
                                    <li className="single-list"><Link to="/forgot-password" className="single">Forgot Password</Link></li>
                                    <li className="single-list"><Link to="/verification" className="single">Verification</Link></li>
                                    <li className="single-list"><Link to="/new-password" className="single">New Password</Link></li>
                                  </ul>
                                </li>
                                <li className="single-list"><Link to="/faq" className="single">FAQs</Link></li>
                                <li className="single-list"><Link to="/privacy-policy" className="single">Privacy Policy</Link></li>
                                <li className="single-list"><Link to="/terms-condition" className="single">Terms & Condition</Link></li>
                              </ul>
                            </li>
                            <li className="single-list"><Link to="/contact" className={`single ${isActive('/contact')}`}>Contact</Link></li>
                            {/* Mobile only links */}
                            <li className="d-block d-lg-none"><div className="login-wrapper"><Link to="/login"><p className="pera text-color-primary">Login / Register</p></Link></div></li>
                            <li className="d-block d-lg-none"><div className="login-wrapper"><Link to="/cart"><p className="pera text-color-primary">Cart</p></Link></div></li>
                            <li className="d-block d-lg-none"><div className="login-wrapper"><Link to="/wishlist"><p className="pera text-color-primary">Wishlist</p></Link></div></li>
                            <li className="d-block d-lg-none"><div className="login-wrapper"><Link to="/order-track"><p className="pera text-color-primary">Track Order</p></Link></div></li>
                          </ul>
                          <div className="d-none d-lg-block">
                            <div className="header-right">
                              <div className="header-icon search-bar">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.785 23.9941C22.5326 23.8063 22.2509 23.6479 22.0337 23.4249C19.9089 21.3181 17.8017 19.1996 15.6886 17.0869C15.624 17.0224 15.583 16.9344 15.5301 16.8522C13.0884 18.7242 10.4177 19.3991 7.47701 18.7653C5.02937 18.2372 3.07479 16.8991 1.67195 14.8334C-1.0046 10.9192 -0.370684 5.87229 2.88109 2.71505C6.52026 -0.811896 11.932 -0.817765 15.5712 2.2045C19.3747 5.36174 20.3021 11.1539 16.8978 15.4672C16.9564 15.5318 17.0151 15.5963 17.0797 15.6609C19.1928 17.7736 21.3117 19.8862 23.4189 22.0106C23.642 22.2395 23.8063 22.5211 24 22.7794C24 22.9202 24 23.061 24 23.2019C23.865 23.6009 23.6009 23.865 23.2017 24C23.0667 23.9941 22.9259 23.9941 22.785 23.9941Z" fill="currentColor"/>
                                </svg>
                              </div>
                              <div className="header-icon">
                                <Link to="/login">
                                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clipUser)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13 1.75C6.7868 1.75 1.75 6.7868 1.75 13C1.75 16.0203 2.9395 18.7622 4.8774 20.7837C6.40175 17.853 9.4662 15.85 13 15.85C16.5338 15.85 19.5983 17.853 21.1226 20.7837C23.0605 18.7622 24.25 16.0203 24.25 13C24.25 6.7868 19.2132 1.75 13 1.75Z" fill="currentColor"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13 12.25C11.6193 12.25 10.5 11.1307 10.5 9.75C10.5 8.36929 11.6193 7.25 13 7.25C14.3807 7.25 15.5 8.36929 15.5 9.75C15.5 11.1307 14.3807 12.25 13 12.25Z" fill="currentColor"/>
                                    </g>
                                    <defs><clipPath id="clipUser"><rect width="26" height="26" fill="white"/></clipPath></defs>
                                  </svg>
                                </Link>
                              </div>
                              <div className="header-icon">
                                <Link to="/wishlist">
                                  <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.36008 0.0339781C5.72822 0.245365 4.36236 0.937658 3.20625 2.14257C2.16779 3.22064 1.54369 4.36213 1.1856 5.84713C0.551267 8.42076 1.01167 10.9574 2.53611 13.3408C3.51318 14.8681 4.77672 16.2685 7.09408 18.4035C8.56736 19.7617 13.0639 23.7252 13.2839 23.8573C13.4885 23.9841 13.5653 24 14.0001 24C14.4349 24 14.5116 23.9841 14.7163 23.8573C14.9362 23.7252 19.4431 19.7564 20.9061 18.4035C23.2337 16.2579 24.487 14.8628 25.4641 13.3408C26.9885 10.9574 27.4489 8.42076 26.8146 5.84713C26.4565 4.36213 25.8324 3.22064 24.7939 2.14257C23.7606 1.06978 22.6556 0.451468 21.2079 0.134387C20.4815 -0.0241534 19.1412 -0.0400074 18.5069 0.107964C16.7369 0.504315 15.3813 1.41856 14.1433 3.04625L14.0001 3.23121L13.862 3.04625C12.6393 1.45027 11.3042 0.536023 9.6007 0.134387C9.09426 0.0128394 7.92791 -0.0400074 7.36008 0.0339781Z" fill="currentColor"/>
                                  </svg>
                                  <div className="count"><span className="count-num">4</span></div>
                                </Link>
                              </div>
                              <div className="header-icon">
                                <Link to="/cart">
                                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7472 6.21264C19.5903 5.81551 19.2308 5.78119 17.464 5.78119H15.9959V5.15364C15.9959 4.17798 15.8541 3.49649 15.5099 2.79539C14.8872 1.52556 13.8443 0.638157 12.4926 0.226322C11.8345 0.0302096 10.8524 -0.053138 10.255 0.0351124C8.59958 0.290058 7.18715 1.31474 6.46828 2.77578C6.11896 3.49159 5.97721 4.17798 5.97721 5.15364V5.7861H4.50403C2.73722 5.7861 2.37778 5.82042 2.22084 6.23225C2.13984 6.4921 1.38047 12.0764 1.05647 14.4837C0.772972 16.5821 0.509722 18.5628 0.317347 20.0532C-0.0167771 22.6223 -0.00665214 22.6615 0.00347284 22.7057V22.7106C0.0490353 22.8773 0.499597 23.3136 0.636284 23.4411L1.2286 24H20.7091L21.1495 23.6225C21.3469 23.4509 22 22.8675 22 22.5782C22 22.3821 19.7877 6.32541 19.7472 6.21264Z" fill="#13172B"/>
                                  </svg>
                                  <div className="count"><span className="count-num">3</span></div>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div className="div">
                      <div className="mobile_menu d-block d-lg-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search overlay */}
        <div className="search-container">
          <div className="top-section">
            <div className="search-icon"><i className="ri-search-line"></i></div>
            <div className="modal-search-box">
              <input type="text" id="searchField" className="search-field" placeholder="Search..." />
              <button id="closeSearch" className="close-search-btn"><kbd className="light-text"> ESC </kbd></button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
