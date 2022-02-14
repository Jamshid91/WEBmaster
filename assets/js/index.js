const navigation = document.querySelectorAll('.header-list');
let settings = document.querySelector('.fa-cog');
let header = document.querySelector('.header');
let infoBox = document.querySelector('.open-text');
let closeInfo = document.querySelector('.open-text .fa-times-circle');
let borderBottomOne = document.querySelector('.home-title__text .borderOne');
let borderBottomTwo = document.querySelector('.home-title__text .borderTwo');
let allPortfolioBtn = document.querySelector('.allProjects-btn');
let allPortfolio = document.querySelector('.portfolio-item');
let loader = document.querySelector('.loader');

window.onload = function() {
    setTimeout(() => {
        loader.style.display = 'none'
        window.scrollTo(0, 0)
    }, 1500);
    
    setTimeout(() => {
        borderBottomOne.classList.add('borderBottom')
    }, 2000);
    setTimeout(() => {
        borderBottomTwo.classList.add('borderBottom')
    }, 2500);

}


window.addEventListener('scroll', () => {
    // title text scroll anim
    const cooperate = document.querySelector('.cooperate .border');
    const technology = document.querySelector('.technology .border');
    const portfolio = document.querySelector('.portfolio .border');
    const mobilePortfolio = document.querySelector('.mobile-portfolio .border');
    const contact = document.querySelector('.contact .border');
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
            items:1
        },
        992:{
            items: 2,
        }
    }
    });


