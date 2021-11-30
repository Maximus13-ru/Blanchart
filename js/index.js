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

//header form search

document.querySelector(".header-search__open").addEventListener("click", function() {
  document.querySelector(".header-form").classList.add("header-form__active");
  this.classList.add("active");
})


//не получилось скрыть при клике на поиск лого и бургер
// document.querySelector(".header-search__open").addEventListener("click", function() {
//   document.querySelector(".open-burger__btn").classList.add(".search-open");
//   document.querySelector(".header-logo").classList.add(".search-open");
//   this.classList.add("active");
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


// gallery select

const element = document.querySelector('.gallery-form__list');
    const choices = new Choices(element, {
      searchEnabled: false
    });



//gallery swiper

let gallerySwiper = new Swiper(".gallery__swiper", {
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

    500: {
      slidesPerView: 2,
      grid: {
        rows: 2,
      },
      spaceBetween: 20
    },

    // 576: {
    //   slidesPerView: 2,
    //   grid: {
    //     rows: 2,
    //   },
    //   spaceBetween: 30,
    // },

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
