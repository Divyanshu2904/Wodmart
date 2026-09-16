function Preloader() {
  return (
    <div className="loading-page" id="preloader-active">
      <div className="counter">
        <img src="/assets/images/logo/logo.png" alt="img" />
        <span className="number">0%</span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>
  )
}
export default Preloader
