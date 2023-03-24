/**
* Template Name: Moderna - v4.8.0
* Template URL: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 20
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

})()
let a1 = document.querySelector('#a1');
let a2 = document.querySelector('#a2');
let a3 = document.querySelector('#a3');
let para = document.querySelector('#para');
a1.addEventListener('click', aim);
a2.addEventListener('click', activity);
a3.addEventListener('click', achievement);
function aim(){
  para.innerHTML = "CZSSC was established primarily as an avenue where students interested about science stuff could freely share their opinions, questions & ideas with folks of their own kind. Now, The Club primarily aims to assist the adolscent science-enthusiasts of this school reach their full potentianl. It attempts to respond to the scientific inquiries of its members as best as it can whilst training and guiding them through the correct pathway of science-based knowledge-seeking. CZSSC also encourages non-member students to apprehend the true beauty and power of science and plant in themselves the seeds of eternal science-love.";
  a1.style.background = "#7EC8E3";
  a1.style.color = "#0b212d";
  a2.style.background = "#1e5069";
  a2.style.color = "#7EC8E3";
  a3.style.background = "#1e5069";
  a3.style.color = "#7EC8E3";
}
function activity(){
  para.innerHTML = "CZSSC conducts its activities such that it can best suit its members' science voyages. In order to do so, the Club carries out some enhancing tasks regularly. It conducts a session every week on various science-subjects in consecutive manner taken by the club's own academic trainers. A workshop is also arranged every month on a fundamental science topic which is taken by renowned and experienced educators of that specific field. Other than this, CZSSC also organizes various science-based events throught the entire calendar year most notably the CZSSC Science Carnival, which is one of the biggest non-government school-level science events in Bangladesh.";
  a2.style.background = "#7EC8E3";
  a2.style.color = "#0b212d";
  a1.style.background = "#1e5069";
  a1.style.color = "#7EC8E3";
  a3.style.background = "#1e5069";
  a3.style.color = "#7EC8E3";
}
function achievement(){
  para.innerHTML = "CZSSC prioritizes learning and acquiring knowledge more than any empirical accomplishment. Nevertheless, it also instructs its members on how they can apply this knowledge in their practical lives. Based on this, its members are earning various awards and prizes in regional, divisional and national level government and non-government science related competitions. Some of them have even represented Bangladesh in international level events";
  a3.style.background = "#7EC8E3";
  a3.style.color = "#0b212d";
  a1.style.background = "#1e5069";
  a1.style.color = "#7EC8E3";
  a2.style.background = "#1e5069";
  a2.style.color = "#7EC8E3";
}
var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.reveal'); 
function loop() {            
  Array.prototype.forEach.call(elementsToShow, function(element){
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
      }
      });
    scroll(loop);
  }
loop();
function isElementInViewport(el) {
              // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
    }
  var rect = el.getBoundingClientRect();
              return (
                (rect.top <= 0
                  && rect.bottom >= 0)
                ||
                (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.top <= (window.innerHeight || document.documentElement.clientHeight))
                ||
                (rect.top >= 0 &&
                  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
              );
            }            