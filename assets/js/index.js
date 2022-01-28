const navigation = document.querySelectorAll('.header-list');
let settings = document.querySelector('.fa-cog');
let header = document.querySelector('.header');
let infoBox = document.querySelector('.open-text');
let closeInfo = document.querySelector('.open-text .fa-times-circle');
let homeImg = document.querySelector('.home .home-img')
let homeTitle = document.querySelector('.home .home-title')
let borderBottomOne = document.querySelector('.home-title__text .borderOne');
let borderBottomTwo = document.querySelector('.home-title__text .borderTwo');
let allPortfolioBtn = document.querySelector('.allProjects-btn');
let allPortfolio = document.querySelector('.portfolio-item');
let loader = document.querySelector('.loader');

window.onload = function() {
    homeImg.classList.add('addHomeImg');
    homeTitle.classList.add('addHomeTitle');
    
    setTimeout(() => {
        loader.style.display = 'none'
    }, 0);
    
    setTimeout(() => {
        borderBottomOne.classList.add('borderBottom')
    }, 1000);
    setTimeout(() => {
        borderBottomTwo.classList.add('borderBottom')
    }, 2000);

}

// closeInfo.addEventListener('click', () => {
//     infoBox.style.display = 'none'
// })

window.addEventListener('scroll', () => {
    // title text scroll anim
    const cooperate = document.querySelector('.cooperate span');
    const technology = document.querySelector('.technology span');
    const portfolio = document.querySelector('.portfolio span');
    const mobilePortfolio = document.querySelector('.mobile-portfolio span');
    const contact = document.querySelector('.contact span');
    const aboutMe = document.querySelector('.aboutMe');
    const advertising = document.querySelector('.advertising');

    const positioncooperate = cooperate.getBoundingClientRect().top;
    const positiontechnology = technology.getBoundingClientRect().top;
    const positionportfolio = portfolio.getBoundingClientRect().top;
    const positionMobportfolio = mobilePortfolio.getBoundingClientRect().top;
    const positionContact = contact.getBoundingClientRect().top;
    const positionAboutMe = aboutMe.getBoundingClientRect().top;

    const screenPosition = window.innerHeight;


    if(screenPosition > positioncooperate) {
        cooperate.classList.add('animTitleText')
      } else {
        cooperate.classList.remove('animTitleText')
      }

    if(screenPosition > positiontechnology) {
    technology.classList.add('animTitleText')
    } else {
        technology.classList.remove('animTitleText')
    }

    if(screenPosition > positionportfolio) {
        portfolio.classList.add('animTitleText')
      } else {
        portfolio.classList.remove('animTitleText')
      }

      if(screenPosition > positionMobportfolio) {
        mobilePortfolio.classList.add('animTitleText')
        } else {
            mobilePortfolio.classList.remove('animTitleText')
        }

      if(screenPosition > positionContact) {
        contact.classList.add('animTitleText')
      } else {
        contact.classList.remove('animTitleText')
      }

    //   if(screenPosition > positionAboutMe) {
    //     advertising.style.display = 'flex'
    //   } else {
    //     advertising.classList.remove('animTitleText')
    //   }
    //   Scrollbar
    let totalHight = document.body.scrollHeight - window.innerHeight;
    let progressHight = (window.pageYOffset / totalHight) * 100;
    let scrolled = window.scrollY;

    settings.style.transform = `rotate(${-scrolled * 2}deg`
    settings.style.top = progressHight + '%'

    
    if(scrolled > 10) {
        header.classList.add('headerShadow')
    } else {
        header.classList.remove('headerShadow')
    }

    window.onclick = function(event) {
        if (event.target == advertising) {
            advertising.style.display = "none";
        }
      }
});

function activeNavigation() {
    navigation.forEach(elem =>
        elem.classList.remove('active'));
        this.classList.add('active');    
};

navigation.forEach(elem => 
    elem.addEventListener('click', activeNavigation)
);

let checkNum = 0;
allPortfolioBtn.addEventListener('click', () => {
    allPortfolio.classList.toggle('openAllPortfolio')
    if(checkNum == 0) {
        allPortfolioBtn.textContent = 'Закрыть проекты'
        return checkNum = 1;
    } else {
        allPortfolioBtn.textContent = 'Все проекты'
        return checkNum = 0;
    }
});

// Start carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots:false,
    touchDrag: true,
    mouseDrag:true,
    responsive:{
        0:{
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            items:1
        },
        992:{
            items: 2,
        }
    }
    });

    var typed = new Typed('.typed', {
        strings: ["Чистый и понятный код (БЭМ)", "Быстро и качественно", "Адаптивный и анимированный"],
              stringsElement: null,
              typeSpeed: 40,
              startDelay: 1200,
              backSpeed: 20,
              backDelay: 500,
              loop: true,
              cursorChar: "|",
      });


