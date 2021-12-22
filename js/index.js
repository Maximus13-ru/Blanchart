// бургер

document.querySelector(".open-burger__btn").addEventListener("click", function() {
  document.querySelector(".header-top__nav").classList.add("active");
})
document.querySelector(".close-burger__btn").addEventListener("click", function() {
  document.querySelector(".header-top__nav").classList.remove("active");
})

//hero swiper

const swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',

   autoplay: {
     delay: 4000,
     disableOnInteraction: false,
   }
});

//кастомный скроллбвр

new SimpleBar(document.querySelector(".dropdown-scroll-1"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-2"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-3"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-4"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});

new SimpleBar(document.querySelector(".dropdown-scroll-5"), {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 25,
});


//выпадающеи хедер-бот пункты

document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".header-bot__item_btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".header__dropdown-content");

    document.querySelectorAll(".header-bot__item_btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active--btn");
      }
    });

    document.querySelectorAll(".header__dropdown-content").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list--item");
      }
    })
    dropdown.classList.toggle("active-list--item");
    btn.classList.toggle("active--btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header-bot__nav_list")) {
    document.querySelectorAll(".header__dropdown-content").forEach(el => {
        el.classList.remove("active-list--item");
    })
     document.querySelectorAll(".header-bot__item_btn").forEach(el => {
        el.classList.remove("active--btn");
    });
  }
})
})

// стрелка на ххэдер бот
document.querySelector(".header-bot__item_btn").addEventListener("click", function() {
  document.querySelector(".header-bot__item_btn-image").classList.add("header-bot__item_btn-image--active");
  this.classList.add("active");
})


//header form search

document.querySelector(".header-search__open").addEventListener("click", function() {
  document.querySelector(".header-form").classList.add("header-form__active");
  document.querySelector(".header-logo").classList.add("header-logo__none");
  document.querySelector(".open-burger__btn").classList.add("open-burger__btn--none");
  document.querySelector(".header-search__close").classList.add("header-search__close--block")
  this.classList.add("active");
})

//попытки скрыть крестик при клике
// document.querySelector(".header-search__close").addEventListener("click", function() {
//   document.querySelector(".header-form").classList.remove("header-form__active");
//   document.querySelector(".header-search__close").classList.remove("header-search__close--block");
//   document.querySelector(".header-search__open").classList.remove("active");

// })


document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header-form");
  if (!target.closest(".header-form__content")) {
  form.classList.remove("header-form__active");
    form.querySelector(".header-form__input").value = "";
    document.querySelector(".header-search__open").classList.remove("active")
  }
})


//возвращается логотип по клику на экран
document.addEventListener("click", function(e) {
  let target = e.target;
  let logo = document.querySelector(".header-logo");
  if (!target.closest(".header-form__content")) {
  logo.classList.remove("header-logo__none");
    document.querySelector(".header-search__open").classList.remove("active")
  }
})

//возвращается кнопка бургера по клику на экран
document.addEventListener("click", function(e) {
  let target = e.target;
  let burgerBtn = document.querySelector(".open-burger__btn");
  if (!target.closest(".header-form__content")) {
    burgerBtn.classList.remove("open-burger__btn--none");
    document.querySelector(".header-search__open").classList.remove("active")
  }
})






// gallery select

const element = document.querySelector('.gallery-form__list');
    const choices = new Choices(element, {
      searchEnabled: false
    });

const element1 = document.querySelector('.gallery-form__list--320');
    const choices1 = new Choices(element1, {
      searchEnabled: false
    });





//gallery swiper

const gallerySwiper = new Swiper(".gallery__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 2
  },
  spaceBetween: 50,
  pagination: {
    el: ".gallery-swiper__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev"
  },

   breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    // 500: {
    //   slidesPerView: 2,
    //   grid: {
    //     rows: 1,
    //   },
    //   spaceBetween: 20
    // },

     576: {
       slidesPerView: 2,
       grid: {
         rows: 1,
       },
       spaceBetween: 30,
     },

     700: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 30,
     },

     1200: {
       slidesPerView: 2,
       grid: {
         rows: 2
       },
       spaceBetween: 34,
     },

     1500: {
       slidesPerView: 3,
       grid: {
         rows: 2
       },
       spaceBetween: 45,
     }
   },

   a11y: {
     prevSlideMessage: 'Предыдущий',
     nextSlideMessage: 'Следующий',
   }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});


//tabs catalog

// document.addEventListener ('DOMContentLoaded', function() {
//   document.querySelectorAll('.title-row__btn').forEach(function(tabsBtn) {
//     tabsBtn.addEventListener('click', function(event) {
//       const path = event.currentTarget.dataset.path

//       document.querySelectorAll('.catalog-main').forEach(function(tabContent) {
//         tabContent.classList.remove('visible')
//     })
//     document.querySelector(`[data-target="${path}"]`).classList.add('visible')
//   })
//   })
// })

// document.addEventListener ('DOMContentLoaded', function() {
//   document.querySelectorAll('.catalog-accordion__btn--tabs').forEach(function(tabsBtn) {
//     tabsBtn.addEventListener('click', function(event) {
//       const path = event.currentTarget.dataset.path

//       document.querySelectorAll('.catalog-content__left').forEach(function(tabContent) {
//         tabContent.classList.remove('visible')
//     })
//     document.querySelector(`[data-target="${path}"]`).classList.add('visible')
//   })
//   })
// })

 document.addEventListener("DOMContentLoaded", function() {
   function tabsActive(tabPath, tabTarget) {
     document.querySelectorAll(tabPath).forEach(item => {
     item.addEventListener("click", function(e) {
       let path = e.currentTarget.dataset.path;
       document.querySelectorAll(tabTarget).forEach(el => {
         el.classList.remove("visible");
       });
       document.querySelectorAll(tabPath).forEach(el => {
         el.classList.remove("visible");
       });
       document.querySelector(`[data-target="${path}"]`).classList.add("visible");

       this.classList.add("visible");
     })
   });
   };
   tabsActive(".title-row__btn", ".catalog-main");
   tabsActive(".catalog-accordion__btn--tabs", ".catalog-content__left");
 })

// accordion catalog

$(function () {
  $(".accordion-plug").accordion();
});

$(function () {
  $("#accordion").accordion();
});

$( "#accordion" ).accordion({
  heightStyle: "contant"
});

const heightStyle = $( "#accordion" ).accordion( "option", "heightStyle" );


//events

const eventsSwiper = new Swiper(".events-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  //loop: true,
  grid: {
    rows: 1,
  },
  spaceBetween: 50,
  pagination: {
    el: ".events-swiper__pagination",
    type: "bullets",
    clickable: true,
  },
   navigation: {
     nextEl: ".events-next",
     prevEl: ".events-prev"
   },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1,
      },
      spaceBetween: 0,
    },

    450: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 34,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 34,
    },

     1024: {
       slidesPerView: 3,
       slidesPerGroup: 3,
       grid: {
         rows: 1
       },
       spaceBetween: 27,
     },
    },

   a11y: {
     prevSlideMessage: 'Предыдущий',
     nextSlideMessage: 'Следующий',
   }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});

const eventsPrev = document.getElementById('eventsPrev')
const eventsNext = document.getElementById('eventsNext')

eventsPrev.addEventListener('click', () => {
  eventsSwiper.eventsPrev();
});
eventsNext.addEventListener('click', () => {
  eventsSwiper.eventsNext();
});

// public

const publicSwiper = new Swiper(".public__swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
  },
  spaceBetween: 50,
  pagination: {
     el: ".public-pagination",
     type: "fraction",
     clickable: true,
  },
  navigation: {
    nextEl: ".public-next",
    prevEl: ".public-prev"
  },
  breakpoints: {
    320: {
      slidesPerView: 7,
      spaceBetween: 34,
      grid: {
        rows: 4,
      },
    },
    321: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      spaceBetween: 50,

    },

    1201: {
      slidesPerView: 3,
    },
  },



});


//public spoiler

let btn = document.querySelector(".form-categories__title");
let checklist = document.querySelector(".form-categories__list");
btn.addEventListener("click", function() {
  checklist.classList.toggle("form-categories__list--active");
  document.querySelectorAll(".form-categories__label").forEach(el => {
    el.classList.toggle("active");
    let checkbox = el.querySelector(".form-categories__input");

    if (checkbox.checked) {
      el.classList.add("active");
    }
  })
});

document.querySelectorAll(".form-categories__label").forEach(el => {
  el.addEventListener("click", function() {
    let label = this;
    if (!checklist.classList.contains("form-categories__list--active")) {
      label.classList.remove("active");
    }
  });
});


//projects

const projectsSwiper = new Swiper(".projects-swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
  },
  spaceBetween: 50,
  navigation: {
    nextEl: ".projects-next",
    prevEl: ".projects-prev"
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    321: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
    }
  }
});

//projects-tooltips

tippy('#projects-tooltip1', {
  content: 'Пример современных тенденций - современная методология разработки',
  maxWidth: 264,
  theme: 'lilac',
});

tippy('#projects-tooltip2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 264,
  theme: 'lilac',
});


tippy('#projects-tooltip3', {
  content: 'В стремлении повысить качество',
  maxWidth: 264,
  theme: 'lilac',
});


//contacts
//contacts map

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75846806898367,37.60108849999989],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 17

    });
    myPlacemark = new ymaps.Placemark(myMap.getCenter([55.75846806898367,37.60108849999989]), {
      hintContent: 'Собственный значок метки',
      balloonContent: 'Это красивая метка'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/contacts/icon-map.svg',
      // Размеры метки.
      iconImageSize: [20, 20],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      //iconImageOffset: [-5, -38]
    })
    myMap.geoObjects.add(myPlacemark);
}

//contacts validate

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999) 999-99-99");

im.mask(selector);

const contactsFormValidation = new window.JustValidate('#form-contacts');

contactsFormValidation
  .addField('#form-contacts__name', [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения!',
    },

    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Недопустимый формат'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Недопустимый формат'
    },
  ])
  .addField('#form-contacts__tel', [
    {
      rule: 'required',
      errorMessage: 'Обязательно для заполнения!',
    },
    {
      rule: 'number',
      errorMessage: 'Недопустимый формат',
    },
  ]);
  // contactsFormValidation.addField('#text', [
  //   {
  //     validator: (value) => value[value.length - 1] === '.',
  //   },
  // ]);




