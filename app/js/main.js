(function() {
  'use strict';

  // Service worker registeration

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceworker.js").then(function(registration) {
      console.log("Service worker registration done, scope is:", registration.scope);
    }).catch(function(err) {
      console.log("ServiceWorker registration failed: ", err);
    });
  }

  // All necessary elements

  const container = document.querySelector(".container");
  const prev = document.querySelector(".projects__prev");
  const next = document.querySelector(".projects__next");
  const navInfo = document.querySelector(".projects__nav-info");
  const overlay = document.querySelector(".overlay");
  const overlayText = document.querySelector(".overlay__text");
  const sectionTitleStart = document.querySelector(".section__title--start");
  const sectionSubtitleStart = document.querySelector(".section__subtitle--start");
  const body = document.getElementById("body");
  const start = document.getElementById("start");
  const about = document.getElementById("about");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");
  const navLinkStart = document.querySelector(".nav__link--start");
  const navLinks = document.querySelectorAll(".nav__link");
  const hamburger = document.querySelector(".nav__hamburger");
  const closeHamburger = document.querySelector(".nav__close-menu");
  const navList = document.querySelector(".nav__list");
  const infoCookies = document.querySelector(".cookie-info");
  const closeCookiesInfo = document.querySelector(".cookie-info__close");
  const myAge = document.getElementById("myAge");
  const footerYear = document.getElementById("footer__year");
  const buttonTheme = document.querySelector(".button--theme");
  const buttonBlob = document.querySelector(".button__blob");
  const buttonFlag = document.querySelectorAll(".button--flag");
  const iconMoon = document.querySelector(".icon-moon");
  const iconSun = document.querySelector(".icon-sun");
  const bodyBorder = document.querySelectorAll(".body-border");
  const bodyBorderTop = document.querySelector(".body-border--top");
  const bodyBorderBottom = document.querySelector(".body-border--bottom");
  const bodyBorderLeft = document.querySelector(".body-border--left");
  const bodyBorderRight = document.querySelector(".body-border--right");
  const nav = document.querySelector(".nav");
  const footer = document.querySelector(".footer");
  const formButton = document.querySelector(".form__button");
  const langPL = document.querySelector(".langPL");
  const langENG = document.querySelector(".langENG");
  const inputMail = document.querySelector(".form__input--mail");
  const inputPhone = document.querySelector(".form__input--phone");
  const textarea = document.querySelector(".form__textarea");
  //const inputName = document.querySelector(".form__input--name");
  const allLinks = document.getElementsByTagName("a");
  const footerLink = document.querySelector(".footer__link");
  const projectsLinks = document.querySelectorAll(".projects__link");
  const projectPhoto = document.querySelectorAll(".projects__photo");
  const projectTitle = document.querySelectorAll(".projects__title");
  const projectsDot = document.querySelectorAll(".projects__dot");
  const socialItems = document.querySelectorAll(".socials__item");
  const navLogo = document.querySelector(".nav__logo");
  const projectTag = document.querySelectorAll(".projects__tag");
  const navAbout = document.querySelector(".navAbout");
  const navProjects = document.querySelector(".navProjects");
  const navContact = document.querySelector(".navContact");
  const mainTitle = document.querySelector(".mainTitle");
  const mainSubtitle = document.querySelector(".mainSubtitle");
  const aboutTitle = document.querySelector(".aboutTitle");
  const aboutDescription = document.querySelector(".aboutDescription");
  const skillsSubtitle = document.querySelector(".skillsSubtitle");
  const projectsNavInfo = document.querySelector(".projects__nav-info");
  const gridDescription = document.querySelector(".gridDescription");
  const weatherDescription = document.querySelector(".weatherDescription");
  const challengeDescription = document.querySelector(".challengeDescription");
  const interiorDescription = document.querySelector(".interiorDescription");
  const sleszynskiDescription = document.querySelector(".sleszynskiDescription");
  const todoDescription = document.querySelector(".todoDescription");
  const interiorv1Description = document.querySelector(".interiorv1Description");
  const dobrywebdevDescription = document.querySelector(".dobrywebdevDescription");
  const interactiveDescription = document.querySelector(".interactiveDescription");
  const projectLive = document.querySelectorAll(".projectLive");
  const projectCode = document.querySelectorAll(".projectCode");
  const contactTitle = document.querySelector(".contactTitle");
  const mailLabel = document.querySelector(".mailLabel");
  const phoneLabel = document.querySelector(".phoneLabel");
  const textLabel = document.querySelector(".textLabel");
  const github = document.querySelector(".github");
  const linkedin = document.querySelector(".linkedin");
  const infoCookiesText = document.querySelector(".cookie-info__text");
  const form = document.querySelector(".form");
  const inputFail = document.querySelector(".input__fail");
  const checkPhone = /(^[5-9]{1}[0-9]{8}$)|(^$)/;
  const checkmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* const checkname = /^([a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{2,}\s[a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{1,}'?-?[a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{2,}\s?([a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{1,})?)/;*/

  // Siema settings

  class mySiema extends Siema {
    // Create dots for all slides
    addDots() {
      this.dots = document.createElement("div");
      this.dots.classList.add("projects__dots");
      for (let i = 0; i < this.innerElements.length; i++) {
        const dot = document.createElement("span");
        dot.classList.add("projects__dot");
        dot.classList.add("projects__dot--light-theme");
        dot.addEventListener("click", () => {
          this.goTo(i);
        })
        this.dots.appendChild(dot);
      }
      this.selector.parentNode.insertBefore(this.dots, this.selector.nextSibling);
    }

    checkSlide() {
      // Add or remove a "active" class for current slide
      this.slides = document.querySelectorAll(".projects__project");
      let currentActiveSlide = this.slides.item(this.currentSlide);
      for (let slide of this.slides) {
        slide.classList.remove("projects__project--active");
      }
      currentActiveSlide.classList.add("projects__project--active");
      for (let link of projectsLinks) {
        link.setAttribute("tabIndex", "-1");
      }
      // TODO: 
      // Need to improve that so that it works only in projects section
      let activeLinks = currentActiveSlide.querySelectorAll(".projects__link");
      for (let link of activeLinks) {
        link.setAttribute("tabIndex", "0");
      }
      // Disable or enable nav buttons depending of current slide index
      if (this.currentSlide === 0) {
        prev.classList.add("projects__prev--disabled");
        navInfo.classList.remove("projects__nav-info--hidden");
      } else if (this.currentSlide === 8) {
        next.classList.add("projects__next--disabled");
      } else {
        navInfo.classList.add("projects__nav-info--hidden");
        prev.classList.remove("projects__prev--disabled");
        next.classList.remove("projects__next--disabled");
      }
    }

    updateDots() {
      // Add or remove a "active" class for current dot
      for (let i = 0; i < this.dots.querySelectorAll("span").length; i++) {
        const addOrRemove = this.currentSlide === i ? "add" : "remove";
        this.dots.querySelectorAll("span")[i].classList[addOrRemove]("projects__dot--active");
      }
    }
  }

  const mySiemaWithDots = new mySiema({
    selector: ".projects",
    duration: 500,
    easing: "cubic-bezier(0.250, 0.100, 0.250, 1.000)",
    perPage: 1,
    draggable: true,
    threshold: 0,
    onInit: function(){
      this.addDots();
      this.updateDots();
      this.checkSlide();
    },
    onChange: function(){
      this.updateDots();
      this.checkSlide();
    },
  });

  prev.addEventListener("click", () => mySiemaWithDots.prev());
  next.addEventListener("click", () => mySiemaWithDots.next());

  document.addEventListener("keyup", (event) => {
    if (window.location.hash === "#projects") {
      if (event.key === "ArrowRight") {
        mySiemaWithDots.next();
      } else if (event.key === "ArrowLeft") {
        mySiemaWithDots.prev();
      }
    }
  })
  
  // Main function that loads theme settings from localStorage, displays welcome text and block projects links

  document.addEventListener("DOMContentLoaded", () => {
    checkTime();
    howOldAmI();
    hideOrShowSections();
    if (window.localStorage.length === 0 || window.localStorage.length === 1) {
      ;
    } else if (localStorage.getItem("buttonBlob") !== null) {
      container.className = JSON.parse(localStorage.getItem("container"));
      infoCookies.className = JSON.parse(localStorage.getItem("infoCookies"));
      buttonTheme.className = JSON.parse(localStorage.getItem("buttonTheme"));
      buttonBlob.className = JSON.parse(localStorage.getItem("buttonBlob"));
      iconMoon.className = JSON.parse(localStorage.getItem("iconMoon"));
      iconSun.className = JSON.parse(localStorage.getItem("iconSun"));
      bodyBorderTop.className = JSON.parse(localStorage.getItem("bodyBorderTop"));
      bodyBorderBottom.className = JSON.parse(localStorage.getItem("bodyBorderBottom"));
      bodyBorderLeft.className = JSON.parse(localStorage.getItem("bodyBorderLeft"));
      bodyBorderRight.className = JSON.parse(localStorage.getItem("bodyBorderRight"));
      nav.className = JSON.parse(localStorage.getItem("nav"));
      footer.className = JSON.parse(localStorage.getItem("footer"));
      hamburger.className = JSON.parse(localStorage.getItem("hamburger"));
      closeHamburger.className = JSON.parse(localStorage.getItem("closeHamburger"));
      prev.className = JSON.parse(localStorage.getItem("projectsPrev"));
      next.className = JSON.parse(localStorage.getItem("projectsNext"));
      formButton.className = JSON.parse(localStorage.getItem("formButton"));
      langPL.className = JSON.parse(localStorage.getItem("langPL"));
      langENG.className = JSON.parse(localStorage.getItem("langENG"));
      for (let tag of projectTag) {
        tag.className = JSON.parse(localStorage.getItem("projectTag"));
      }
      inputMail.className = JSON.parse(localStorage.getItem("inputMail"));
      inputPhone.className = JSON.parse(localStorage.getItem("inputPhone"));
      // inputName.className = JSON.parse(localStorage.getItem("inputName"));
      textarea.className = JSON.parse(localStorage.getItem("textarea"));
      closeCookiesInfo.className = JSON.parse(localStorage.getItem("closeCookiesInfo"));
      closeCookiesInfo.style.borderBottom = "none";
      footerLink.style.borderBottom = "none";
      for (let link of projectsLinks) {
        link.style.borderBottom = "none";
      }
      for (let item of socialItems) {
        item.style.borderBottom = "none";
      }
      for (let link of allLinks) {
        link.classList.remove("light-theme--link");
        link.classList.remove("dark-theme--link");
      }
    }
    if (buttonBlob.classList.contains("button__blob--sun")) {
      navLogo.setAttribute("src", "img/logo-light.png")
      for (let link of allLinks) {
        link.classList.add("light-theme--link");
      }
      for (let dot of projectsDot) {
        dot.classList.remove("projects__dot--light-theme");
      }
      navLinkStart.classList.remove("light-theme--link")
      body.classList.add("light-theme");
    } else if (buttonBlob.classList.contains("button__blob--moon")) {
      navLogo.setAttribute("src", "img/logo-dark.png")
      for (let link of allLinks) {
        link.classList.add("dark-theme--link");
      }
      for (let dot of projectsDot) {
        dot.classList.remove("projects__dot--light-theme");
      }
      navLinkStart.classList.remove("dark-theme--link")
      body.classList.add("dark-theme");
    }
    if (langENG.classList.contains("button--lang--active")) {
      langENG.classList.remove("button--lang--active");
      langPL.classList.add("button--lang--active");
    } else if (langPL.classList.contains("button--lang--active")) {
      ;
    }
    setTimeout(function(){
      if (localStorage.getItem("cookiesOff") === "true" && infoCookies.classList.contains("visuallyhidden") === false) {
        infoCookies.classList.add("visuallyhidden");
      } else {
        return;
      }
    }, 500);
  });

  window.addEventListener("hashchange", () => {
    hideOrShowSections();
  })

  // Check what time it is and display welcome text based on that

  function checkTime() {
    const date = new Date();
    const currentTime = date.getHours();
    if (currentTime >= 6 && currentTime <= 18) {
      overlay.classList.add("overlay--light");
      overlayText.innerText = "Dzień dobry";
    } else {
      overlay.classList.add("overlay--dark");
      overlayText.innerText = "Dobry wieczór";
    }
  }

  // Smaller functions

  function overflowOn() {
    body.classList.remove("overflow-off");
    body.classList.add("overflow-on");
  }

  function overflowOff() {
    body.classList.remove("overflow-on");
    body.classList.add("overflow-off");
  }

  function showStart() {
    start.classList.remove("visuallyhidden--section");
    about.classList.add("visuallyhidden--section");
    projects.classList.add("visuallyhidden--section");
    contact.classList.add("visuallyhidden--section");
  }

  function showAbout() {
    start.classList.add("visuallyhidden--section");
    about.classList.remove("visuallyhidden--section");
    projects.classList.add("visuallyhidden--section");
    contact.classList.add("visuallyhidden--section");
  }

  function showProjects() {
    start.classList.add("visuallyhidden--section");
    about.classList.add("visuallyhidden--section");
    projects.classList.remove("visuallyhidden--section");
    contact.classList.add("visuallyhidden--section");
  }

  function showContact() {
    start.classList.add("visuallyhidden--section");
    about.classList.add("visuallyhidden--section");
    projects.classList.add("visuallyhidden--section");
    contact.classList.remove("visuallyhidden--section");
  }

  // Show or hide sections and turn overflow on or off based on windows hash 

  function hideOrShowSections() {
    if (window.location.hash === "#start" || window.location.hash === "") {
      overflowOff();
      showStart();
    } else if (window.location.hash === "#about") {
      overflowOn();
      showAbout();
    } else if (window.location.hash === "#projects") {
      overflowOn();
      showProjects();
    } else if (window.location.hash === "#contact") {
      overflowOn();
      showContact();
    }
  }

  // Turn on or off overflow-x depending on current hash

  function checkHashAndHideSections(e) {
    if (e.target.getAttribute("href") !== "#start") {
      overflowOn();
    } else if (e.target.getAttribute("href") === "#start") {
      overflowOff();
    }
  }

  navLinkStart.addEventListener("click", checkHashAndHideSections);

  // Hide the overlay after animation is finished

  overlay.addEventListener("animationend", function(e){
    e.target.style.display = "none";
  })

  sectionTitleStart.addEventListener("animationend", function(e){
    e.target.classList.remove("fade-in");
  })

  sectionSubtitleStart.addEventListener("animationend", function(e){
    e.target.classList.remove("fade-in");
  })

  // Mobile menu scripts, showing hamburger etc.

  hamburger.addEventListener("click", () => {
    hamburger.style.display = "none";
    closeHamburger.style.display = "block";
    navList.classList.add("nav__list--expanded");
  })

  closeHamburger.addEventListener("click", () => {
    hamburger.style.display = "block";
    closeHamburger.style.display = "none";
    navList.classList.remove("nav__list--expanded");
  })

  for (let link of navLinks) {
    link.addEventListener("click", (e) => {
      checkHashAndHideSections(e);
      if (window.matchMedia("(max-width: 851px)").matches) {
        hamburger.style.display = "block";
        closeHamburger.style.display = "none";
        navList.classList.remove("nav__list--expanded")
      } else {
        return;
      }
    })
  }

  navLinkStart.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 851px)").matches) {
      if (navList.classList.contains("nav__list--expanded")) {
        navList.classList.remove("nav__list--expanded");
        hamburger.style.display = "block";
        closeHamburger.style.display = "none";
      } else {
        return;
      }
    } else {
      return;
    }
  })

  // Theme changing script that also saves settings in localStorage

  function toggleMultipleClasses(element, firstClass, secondClass, thirdClass) {
    element.classList.toggle(firstClass);
    element.classList.toggle(secondClass);
    if (thirdClass !== undefined) {
      element.classList.toggle(thirdClass);
    }
  }

  function toggleMutlipleClassesOnList(elementsList, firstClass, secondClass, thirdClass) {
    for (let item of elementsList) {
      item.classList.toggle(firstClass);
      item.classList.toggle(secondClass);
      if (thirdClass !== undefined) {
        item.classList.toggle(thirdClass);
      }
    }
  }

  function toggleAttribute(element, attribute, firstValue, secondaValue) {
    if (element.getAttribute(attribute) === firstValue) {
      element.setAttribute(attribute, secondaValue)
    } else if (element.getAttribute(attribute) === secondaValue) {
      element.setAttribute(attribute, firstValue)
    } else {
      console.log("Coś tu nie gra");
    }
  }

  buttonTheme.addEventListener("click", () => {
    window.localStorage.clear();
    toggleMultipleClasses(buttonBlob, "button__blob--sun", "button__blob--moon");
    toggleMultipleClasses(buttonTheme, "button--theme--light", "button--theme--dark");
    toggleMultipleClasses(iconMoon, "icon--light", "icon--dark");
    toggleMultipleClasses(iconSun, "icon--light", "icon--dark");
    toggleMutlipleClassesOnList(bodyBorder, "light-theme", "dark-theme");
    toggleMultipleClasses(container, "light-theme", "dark-theme");
    toggleMultipleClasses(nav, "light-theme", "dark-theme");
    toggleMultipleClasses(footer, "light-theme", "dark-theme");
    toggleMultipleClasses(hamburger, "light-theme", "dark-theme");
    toggleMultipleClasses(closeHamburger, "light-theme", "dark-theme");
    toggleMultipleClasses(body, "light-theme", "dark-theme");
    toggleMutlipleClassesOnList(allLinks, "light-theme--link", "dark-theme--link");
    toggleMutlipleClassesOnList(projectsDot, "projects__dot--light-theme", "projects__dot--dark-theme");
    buttonTheme.classList.toggle("dark-outline");
    for (let item of buttonFlag) {
      item.classList.toggle("dark-outline");
    }
    toggleMultipleClasses(prev, "projects__prev--light", "projects__prev--dark", "dark-outline");
    toggleMultipleClasses(next, "projects__prev--light", "projects__prev--dark", "dark-outline");
    toggleMutlipleClassesOnList(projectTag, "light-theme", "dark-theme");
    toggleMultipleClasses(formButton, "light-theme--button", "dark-theme--button", "dark-outline");
    toggleMultipleClasses(langPL, "light-theme--link", "dark-theme--link", "dark-outline");
    toggleMultipleClasses(langENG, "light-theme--link", "dark-theme--link", "dark-outline");
    toggleMultipleClasses(infoCookies, "light-theme", "dark-theme");
    toggleMultipleClasses(overlay, "overlay--light", "overlay--dark");
    toggleMultipleClasses(inputMail, "input-light", "input-dark");
    toggleMultipleClasses(inputPhone, "input-light", "input-dark");
    // toggleMultipleClasses(inputName, "input-light", "input-dark");
    toggleMultipleClasses(textarea, "input-light", "input-dark");
    toggleMultipleClasses(closeCookiesInfo, "dark-theme--link", "light-theme--link", "dark-outline");
    toggleMultipleClasses(navLinkStart, "light-theme--link", "dark-theme--link");
    // Items for localStorage
    localStorage.setItem("container", JSON.stringify(container.className));
    localStorage.setItem("buttonTheme", JSON.stringify(buttonTheme.className));
    localStorage.setItem("buttonBlob", JSON.stringify(buttonBlob.className));
    localStorage.setItem("iconMoon", JSON.stringify(iconMoon.className));
    localStorage.setItem("iconSun", JSON.stringify(iconSun.className));
    localStorage.setItem("bodyBorderTop", JSON.stringify(bodyBorderTop.className));
    localStorage.setItem("bodyBorderBottom", JSON.stringify(bodyBorderBottom.className));
    localStorage.setItem("bodyBorderLeft", JSON.stringify(bodyBorderLeft.className));
    localStorage.setItem("bodyBorderRight", JSON.stringify(bodyBorderRight.className));
    localStorage.setItem("nav", JSON.stringify(nav.className));
    localStorage.setItem("footer", JSON.stringify(footer.className));
    localStorage.setItem("hamburger", JSON.stringify(hamburger.className));
    localStorage.setItem("closeHamburger", JSON.stringify(closeHamburger.className));
    localStorage.setItem("projectsPrev", JSON.stringify(prev.className));
    localStorage.setItem("projectsNext", JSON.stringify(next.className));
    localStorage.setItem("formButton", JSON.stringify(formButton.className));
    localStorage.setItem("langPL", JSON.stringify(langPL.className));
    localStorage.setItem("langENG", JSON.stringify(langENG.className));
    localStorage.setItem("infoCookies", JSON.stringify(infoCookies.className));
    localStorage.setItem("closeCookiesInfo", JSON.stringify(closeCookiesInfo.className));
    localStorage.setItem("overlay", JSON.stringify(overlay.className));
    localStorage.setItem("inputMail", JSON.stringify(inputMail.className));
    localStorage.setItem("inputPhone", JSON.stringify(inputPhone.className));
    // localStorage.setItem("inputName", JSON.stringify(inputName.className));
    localStorage.setItem("textarea", JSON.stringify(textarea.className));
    localStorage.setItem("projectTag", JSON.stringify(projectTag[0].className));
    toggleAttribute(navLogo, "src", "img/logo-light.png", "img/logo-dark.png");
  });

  // Click function to hide cookies info

  closeCookiesInfo.addEventListener("click", () => {
    infoCookies.classList.add("visuallyhidden");
    localStorage.setItem("cookiesOff", "true");
  })

  // Function that changes language based on JSON data

  function changeLanguage(data) {
    // Main texts
    navAbout.innerText = data.navAbout;
    navAbout.setAttribute("title", data.navAbout);
    navProjects.innerText = data.navProjects;
    navProjects.setAttribute("title", data.navProjects);
    navContact.innerText = data.navContact;
    navContact.setAttribute("title", data.navContact);
    buttonTheme.setAttribute("aria-label", data.buttonTheme);
    buttonTheme.setAttribute("title", data.buttonTheme);
    langPL.setAttribute("title", data.langPL);
    langENG.setAttribute("title", data.langENG);
    langPL.setAttribute("aria-label", data.langPL);
    langENG.setAttribute("aria-label", data.langENG);
    hamburger.setAttribute("aria-label", data.hamburger);
    hamburger.setAttribute("title", data.hamburger);
    closeHamburger.setAttribute("aria-label", data.closeMenu);
    closeHamburger.setAttribute("title", data.closeMenu);
    mainTitle.innerText = data.mainTitle;
    mainSubtitle.innerText = data.mainSubtitle;
    aboutTitle.innerText = data.aboutTitle;
    // TODO: age not showing up after change
    aboutDescription.innerHTML = data.aboutDescription;
    skillsSubtitle.innerText = data.skillsSubtitle;
    howOldAmI();
    gridDescription.innerText = data.gridDescription;
    weatherDescription.innerText = data.weatherDescription;
    challengeDescription.innerText = data.challengeDescription;
    interiorDescription.innerText = data.interiorDescription;
    sleszynskiDescription.innerText = data.sleszynskiDescription;
    todoDescription.innerText = data.todoDescription;
    interiorv1Description.innerText = data.interiorv1Description;
    dobrywebdevDescription.innerText = data.dobrywebdevDescription;
    interactiveDescription.innerText = data.interactiveDescription;
    projectsNavInfo.innerText = data.projectsNavInfo;
    for (let item of projectLive) {
      item.innerText = data.projectLive;
    }
    for (let item of projectCode) {
      item.innerText = data.projectCode;
    }
    prev.setAttribute("aria-label", data.projectsPrev);
    next.setAttribute("aria-label", data.projectsNext)
    contactTitle.innerText = data.contactTitle;
    mailLabel.innerText = data.contactTitle;
    phoneLabel.innerHTML = data.phoneLabel;
    // nameLabel.innerText = data.nameLabel;
    textLabel.innerText = data.textLabel;
    formButton.innerText = data.sendButton;
    formButton.setAttribute("aria-label", data.sendButtonAria);
    formButton.setAttribute("value", data.sendButton);
    inputMail.setAttribute("placeholder", data.mailPlaceholder);
    // inputName.setAttribute("placeholder", data.namePlaceholder);
    textarea.setAttribute("placeholder", data.textPlaceholder);
    github.innerText = data.github;
    linkedin.innerText = data.linkedin;
    closeCookiesInfo.setAttribute("title", data.cookiesClose);
    closeCookiesInfo.setAttribute("aria-label", data.cookiesClose);
    infoCookiesText.innerText = data.cookies;
    // Main titles
    projectTitle[1].innerText = data.weatherMaintitle;
    projectTitle[5].innerText = data.todoMaintitle;
    // Projects links titles
    projectsLinks[0].setAttribute("title", data.gridTitle);
    projectsLinks[1].setAttribute("title", data.gridCode);
    projectsLinks[2].setAttribute("title", data.weatherTitle);
    projectsLinks[3].setAttribute("title", data.weatherCode);
    projectsLinks[4].setAttribute("title", data.challengeTitle);
    projectsLinks[5].setAttribute("title", data.challengeCode);
    projectsLinks[6].setAttribute("title", data.interiorTitle);
    projectsLinks[7].setAttribute("title", data.interiorCode);
    projectsLinks[8].setAttribute("title", data.sleszynskiTitle);
    projectsLinks[9].setAttribute("title", data.sleszynskiCode);
    projectsLinks[10].setAttribute("title", data.todoTitle);
    projectsLinks[11].setAttribute("title", data.todoCode);
    projectsLinks[12].setAttribute("title", data.interiorv1Title);
    projectsLinks[13].setAttribute("title", data.interiorv1Code);
    projectsLinks[14].setAttribute("title", data.dobrywebdevTitle);
    projectsLinks[15].setAttribute("title", data.dobrywebdevCode);
    projectsLinks[16].setAttribute("title", data.interactiveTitle);
    projectsLinks[17].setAttribute("title", data.interactiveCode);
    // Projects photos alts
    projectPhoto[0].setAttribute("alt", data.gridAlt);
    projectPhoto[1].setAttribute("alt", data.weatherAlt);
    projectPhoto[2].setAttribute("alt", data.challengeAlt);
    projectPhoto[3].setAttribute("alt", data.interiorAlt);
    projectPhoto[4].setAttribute("alt", data.sleszynskiAlt);
    projectPhoto[5].setAttribute("alt", data.todoAlt);
    projectPhoto[6].setAttribute("alt", data.interiorv1Alt);
    projectPhoto[7].setAttribute("alt", data.dobrywebdevAlt);
    projectPhoto[8].setAttribute("alt", data.interactiveAlt);
  }

  // Language changing on button click

  langENG.addEventListener("click", () => {
    if (langENG.classList.contains("button--lang--active")) {
      return;
    } else {
      langENG.classList.toggle("button--lang--active");
      langPL.classList.toggle("button--lang--active");
    }
    fetch("json/content-eng.json")
      .then(response => response.json())
      .then(data => {
        changeLanguage(data);
      })
      .catch(function(error) {
        console.log(error);
      })
  })

  langPL.addEventListener("click", () => {
    if (langPL.classList.contains("button--lang--active")) {
      return;
    } else {
      langPL.classList.toggle("button--lang--active");
      langENG.classList.toggle("button--lang--active");
    }
    fetch("json/content-pl.json")
      .then(response => response.json())
      .then(data => {
        changeLanguage(data);
      })
      .catch(function(error) {
        console.log(error);
      })
  })

// Form validation



/*form.addEventListener("submit", (e) => {
  event.preventDefault();
  let emailValue = inputMail.value;
  let phoneValue = inputPhone.value;
  // let nameValue = inputName.value;
  let message = textarea.value;
  inputFail.parentNode.removeChild(inputFail);
})*/

$(function() {
  $(".form").submit(function(event) {
    event.preventDefault();
    var form = $(this);
    var checkphone = /(^[5-9]{1}[0-9]{8}$)|(^$)/;
    var checkmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    /*var checkname = /^([a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{2,}\s[a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-zęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{1,}'?-?[a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{2,}\s?([a-zęóąśłżźćńĘÓĄŚŁŻŹĆŃA-ZęóąśłżźćńĘÓĄŚŁŻŹĆŃ]{1,})?)/;*/
    var email = $(".form__input--mail").val();
    var phone = $(".form__input--phone").val();
    //var name = $(".form__input--name").val();
    var message = $(".form__textarea").val();
    $(".input__fail").remove();
      if (checkmail.test(email) === false) {
        var mailfail;
        if ($(".langPL").hasClass("button--lang--active")) {
          mailfail = "<p class='input__fail'>Podaj prawidłowy adres e-mail</p>";
        } else {
          mailfail = "<p class='input__fail'>Please provide a valid email address</p>";
        }
        $(mailfail).hide().appendTo(".form__group--mail").fadeIn(500);
        return false;
      } else if (checkphone.test(phone) === false) {
        var phonefail;
        if ($(".langPL").hasClass("button--lang--active")) {
          phonefail = "<p class='input__fail'>Podaj prawidłowy, 9 cyfrowy numer telefonu</p>";
        } else {
          phonefail = "<p class='input__fail'>Please provide a valid, 9 digit mobile number</p>";
        }
        $(phonefail).hide().appendTo(".form__group--phone").fadeIn(500);
        return false;
      } /*else if (checkname.test(name) === false) {
        var namefail;
        if ($(".langPL").hasClass("button--lang--active")) {
          namefail = "<p class='input__fail'>Podaj prawidłowe imię i nazwisko</p>";
        } else {
          namefail = "<p class='input__fail'>Please provide a valid first and last name</p>";
        }
        $(namefail).hide().appendTo(".form__group--name").fadeIn(500);
        return false;
      } */else if (message === "") {
        var msgfail;
        if ($(".langPL").hasClass("button--lang--active")) {
          msgfail = "<p class='input__fail'>Wiadomość nie może być pusta</p>";
        } else {
          msgfail = "<p class='input__fail'>The message cannot be empty</p>";
        }
        $(msgfail).hide().appendTo(".form__group--msg").fadeIn(500);
        return false;
      } else {
        $(".input__fail").remove();
        $.ajax({
          type: form.attr('method'),
          url: form.attr('action'),
          data: form.serialize()
        }).done(function(data) {
          var successPl = '<div class="form__success"><p>Dziękuję za wiadomość!</p></div>';
          var successEng = '<div class="form__success"><p>Thank you for your message!</p></div>';
          $(".form").trigger("reset");
          if ($(".langPL").hasClass("button--lang--active")) {
            $(successPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
          } else {
            $(successEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
          }
        }).fail(function(data) {
          var failPl = '<div class="form__fail"><p>Nie udało się, spróbuj jeszcze raz.</p></div>';
          var failEng = '<div class="form__fail"><p>Something went wrong, please try again.</p></div>';
          if ($(".langPL").hasClass("button--lang--active")) {
            $(failPl).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
          } else {
            $(failEng).hide().appendTo(".form").fadeIn(1000).fadeOut(4000);
          }
        });
      }
  });
});

// Copyright year in the footer

(function getCurrentYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  footerYear.innerText = currentYear;
})();

// Get my current age and display it in "About" section

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function howOldAmI() {
  myAge.innerText = getAge("1991/05/16");
}

})();