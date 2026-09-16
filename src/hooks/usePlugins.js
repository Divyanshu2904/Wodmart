import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function usePlugins() {
  const location = useLocation()

  useEffect(() => {
    const init = () => {
      // Hide preloader
      if (typeof window.$ !== 'undefined') {
        $('#preloader-active').fadeOut('slow');
        $('body').css({ 'overflow': 'visible' });
      }

      if (typeof window.$ === 'undefined') return

      // Re-run main.js plugin initializations
      if (typeof window.initWodmart === 'function') {
        window.initWodmart()
        return
      }

      // Swiper sliders
      if (typeof window.Swiper !== 'undefined') {
        // Hero slider
        document.querySelectorAll('.heroSwiperOne-active').forEach(el => {
          if (el.swiper) el.swiper.destroy(true, true)
          new window.Swiper(el, {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            navigation: {
              nextEl: el.querySelector('.swiper-button-next'),
              prevEl: el.querySelector('.swiper-button-prev'),
            },
          })
        })

        // Brand swiper
        document.querySelectorAll('.brandSwiper-active').forEach(el => {
          if (el.swiper) el.swiper.destroy(true, true)
          new window.Swiper(el, {
            loop: true,
            autoplay: { delay: 2000, disableOnInteraction: false },
            slidesPerView: 5,
            spaceBetween: 30,
            navigation: {
              nextEl: el.querySelector('.swiper-button-next'),
              prevEl: el.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
              320: { slidesPerView: 2 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            },
          })
        })

        // Feature swiper
        document.querySelectorAll('.featureSwiper-active').forEach(el => {
          if (el.swiper) el.swiper.destroy(true, true)
          new window.Swiper(el, {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
              nextEl: el.querySelector('.swiper-button-next'),
              prevEl: el.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
              320: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            },
          })
        })

        // News swiper
        document.querySelectorAll('.newsSwiper-active').forEach(el => {
          if (el.swiper) el.swiper.destroy(true, true)
          new window.Swiper(el, {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
              nextEl: el.querySelector('.swiper-button-next'),
              prevEl: el.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            },
          })
        })

        // Any other swipers
        document.querySelectorAll('.swiper:not(.heroSwiperOne-active):not(.brandSwiper-active):not(.featureSwiper-active):not(.newsSwiper-active)').forEach(el => {
          if (!el.swiper) {
            new window.Swiper(el, {
              loop: true,
              navigation: {
                nextEl: el.querySelector('.swiper-button-next'),
                prevEl: el.querySelector('.swiper-button-prev'),
              },
            })
          }
        })
      }

      // WOW animations
      if (typeof window.WOW !== 'undefined') {
        new window.WOW({ live: false }).init()
      }

      // Sticky header
      window.$(window).on('scroll', function () {
        if (window.$(this).scrollTop() > 250) {
          window.$('.header-sticky').addClass('sticky')
        } else {
          window.$('.header-sticky').removeClass('sticky')
        }
      })

      // Mobile menu
      if (window.$('.mobile_menu').length && typeof window.$.fn.meanmenu !== 'undefined') {
        window.$('.mobile_menu').meanmenu({
          meanMenuContainer: '.mobile_menu',
          meanScreenWidth: '991',
        })
      }

      // Search overlay
      window.$('.search-bar').on('click', function () {
        window.$('.search-container').addClass('open')
        window.$('#searchField').focus()
      })
      window.$('#closeSearch').on('click', function () {
        window.$('.search-container').removeClass('open')
      })
      window.$(document).on('keydown', function (e) {
        if (e.key === 'Escape') window.$('.search-container').removeClass('open')
      })

      // Back to top
      window.$('#back-top').on('click', function () {
        window.$('html, body').animate({ scrollTop: 0 }, 800)
      })
      window.$(window).on('scroll', function () {
        if (window.$(this).scrollTop() > 300) {
          window.$('#back-top').addClass('show')
        } else {
          window.$('#back-top').removeClass('show')
        }
      })

      // Overlay / mobile menu toggle
      window.$('.mobile_menu').on('click', function () {
        window.$('.overlay').toggleClass('active')
      })
      window.$('.overlay').on('click', function () {
        window.$('.overlay').removeClass('active')
      })

      // Preloader
      window.$('#preloader-active').delay(450).fadeOut('slow')
    }

    // Wait for DOM + scripts to be ready
    setTimeout(init, 300)
  }, [location.pathname])
}
