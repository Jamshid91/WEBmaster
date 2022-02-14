const langArr = {
   'langText': {
      'ru': 'Английский',
      'en': 'Russian',
   },
   'unit': {
      'ru': 'Создаю качественный сайт',
      'en': 'Create a quality website',
   },
    'home': {
       'ru': 'главная',
       'en': 'home',
    },
    'me': {
        'ru': 'обо мне',
        'en': 'about me'
    },
    'portfolio': {
        'ru': 'портфолио',
        'en': 'portfolio'
    },
    'contact': {
        'ru': 'контакт',
        'en': 'contact'
    },
    'homeTitle': {
        'ru': 'Ваш Надежный',
        'en': 'Your Reliable'
    },
    'homeTitleText': {
        'ru': 'Технологический Партнер',
        'en': 'Technology Partner'
    },
    'homeTitleInfoText': {
        'ru': 'В настоящее время очень важно иметь собственный веб-сайт для развития вашего бизнеса.',
        'en': 'Nowadays it is very important to have your own website to grow your business.'
    },
    'cooperateTitle': {
        'ru': 'Сотрудничать со мной',
        'en': 'Cooperate with me'
    },
    'cooperateText': {
       'ru': 'Предлагаю своим клиентам качественные решения исходя из требований бизнеса и бюджета. Я выполняю проекты в срок, в соответствии с бюджетом клиента и четкими спецификациями.Я всегда поддерживаю клиента, когда заканчиваю работу. Моя цель - построить долгосрочные отношения с клиентом, который доверяет нам год за годом.',
       'en': "I offer my clients high-quality solutions based on business requirements and budget. I complete projects on time, within the client's budget and to clear specifications. I always support the client when I'm done. My goal is to build a long term relationship with a client who trusts us year after year.",
    },
    'aboutMe1': {
       'ru': 'Привет!',
       'en': 'Hey!',
    },
    'aboutMe2': {
       'ru': 'Меня зовут Жамшид',
       'en': 'My name is Jamshid',
    },
    'aboutMe3': {
       'ru': 'Я Front-End программист',
       'en': "I'm a Front-End programmer",
    },
    'aboutMeInfo': {
       'ru': 'Имею опыт работы в сфере программирования Front-End более 3-х лет. С того дня я участвовал во многих проектах и ​​набирался опыта.',
       'en': 'I have more than 3 years of experience in Front-End programming. Since that day, I have been involved in many projects and gained experience.',
    },
    'technologyTitle': {
       'ru': 'Технология',
       'en': 'Technology',
    },
    'portfolioTitle': {
       'ru': 'Портфолио',
       'en': 'Portfolio',
    },
    'openSite': {
       'ru': 'Перейти на сайт',
       'en': 'Open site',
    },
    'contactTitle': {
       'ru': 'Напишите мне',
       'en': 'Write me',
    },
    'yourName': {
       'ru': 'Ваше имя',
       'en': 'Your name',
    },
    'yourEmail': {
       'ru': 'Ваше почта',
       'en': 'Your email',
    },
    'yourPass': {
       'ru': 'Ваше пароль',
       'en': 'Your password',
    },
    'comments': {
       'ru': 'Оставить комментарий',
       'en': 'Leave a comment',
    },
    'submit': {
       'ru': 'Отправить',
       'en': 'Submit',
    },
}


const alllLanguge = ['ru', 'en']

function addLang() {
   const toggleLang = document.querySelector('.lang');
   let el = document.documentElement;
   toggleLang.addEventListener('click', () => {
       if(el.hasAttribute('date-lang')) {
           el.removeAttribute('date-lang');
           localStorage.removeItem('lang');
           location.href = window.location.pathname + '#' + 'ru'
       } else {
           el.setAttribute('date-lang', 'lang');
           localStorage.setItem('lang', 'lang');
           location.href = window.location.pathname + '#' + 'en'
       }   
       location.reload()
   });

   if(localStorage.getItem('lang') !== null) {
       el.setAttribute('date-lang', 'lang');
   }
}
addLang();


function changeLanguage() {
  let hash = window.location.hash
  hash = hash.substr(1)
  if(!alllLanguge.includes(hash)) {
     location.href = window.location.pathname + '#ru'
     location.reload();
  }
  document.querySelector('title').textContent = langArr['unit'][hash];

  let btns = document.querySelectorAll('.hidden__btn');

  btns.forEach(btn => {
     btn.innerHTML = langArr['openSite'][hash]
  })

  for(let key in langArr) {
     let element = document.querySelector('.lang-' + key)

     if(element) {
        element.textContent = langArr[key][hash]
     }
  }
}

changeLanguage()