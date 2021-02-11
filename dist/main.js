/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_mainSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/mainSection */ \"./src/scripts/mainSection.js\");\n/* harmony import */ var _scripts_menuSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/menuSection */ \"./src/scripts/menuSection.js\");\n/* harmony import */ var _scripts_aboutSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/aboutSection */ \"./src/scripts/aboutSection.js\");\n/* harmony import */ var _scripts_contactSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/contactSection */ \"./src/scripts/contactSection.js\");\n/* harmony import */ var _scripts_programSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/programSection */ \"./src/scripts/programSection.js\");\n/* harmony import */ var _scripts_testimonySection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/testimonySection */ \"./src/scripts/testimonySection.js\");\n/* harmony import */ var _scripts_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/footer */ \"./src/scripts/footer.js\");\nvar header = __webpack_require__(/*! ./scripts/header */ \"./src/scripts/header.js\");\n\n\n\n\n\n\n\n\n\nvar _require = __webpack_require__(/*! ./scripts/navMenu */ \"./src/scripts/navMenu.js\"),\n    home = _require.home,\n    menu = _require.menu,\n    about = _require.about,\n    contact = _require.contact;\n\n__webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar content = document.querySelector('#content');\ncontent.className = 'container main';\nvar mainPage = document.createElement('div');\ncontent.appendChild(mainPage);\n\nfunction homePage() {\n  mainPage.innerHTML = '';\n  mainPage.appendChild(header);\n  mainPage.appendChild((0,_scripts_mainSection__WEBPACK_IMPORTED_MODULE_0__.default)());\n  mainPage.appendChild((0,_scripts_programSection__WEBPACK_IMPORTED_MODULE_4__.default)());\n  mainPage.appendChild((0,_scripts_testimonySection__WEBPACK_IMPORTED_MODULE_5__.default)());\n  mainPage.appendChild((0,_scripts_footer__WEBPACK_IMPORTED_MODULE_6__.default)());\n}\n\nfunction menuPage() {\n  mainPage.innerHTML = '';\n  mainPage.appendChild(header);\n  mainPage.appendChild((0,_scripts_menuSection__WEBPACK_IMPORTED_MODULE_1__.default)());\n  mainPage.appendChild((0,_scripts_testimonySection__WEBPACK_IMPORTED_MODULE_5__.default)());\n  mainPage.appendChild((0,_scripts_footer__WEBPACK_IMPORTED_MODULE_6__.default)());\n}\n\nfunction aboutPage() {\n  mainPage.innerHTML = '';\n  mainPage.appendChild(header);\n  mainPage.appendChild((0,_scripts_programSection__WEBPACK_IMPORTED_MODULE_4__.default)());\n  mainPage.appendChild((0,_scripts_aboutSection__WEBPACK_IMPORTED_MODULE_2__.default)());\n  mainPage.appendChild((0,_scripts_footer__WEBPACK_IMPORTED_MODULE_6__.default)());\n}\n\nfunction contactPage() {\n  mainPage.innerHTML = '';\n  mainPage.appendChild(header);\n  mainPage.appendChild((0,_scripts_contactSection__WEBPACK_IMPORTED_MODULE_3__.default)());\n  mainPage.appendChild((0,_scripts_footer__WEBPACK_IMPORTED_MODULE_6__.default)());\n}\n\nhomePage();\nhome.addEventListener('click', homePage);\nmenu.addEventListener('click', menuPage);\nabout.addEventListener('click', aboutPage);\ncontact.addEventListener('click', contactPage);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/scripts/aboutSection.js":
/*!*************************************!*\
  !*** ./src/scripts/aboutSection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_11_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/11-min.png */ \"./src/img/11-min.png\");\n\n\nvar aboutSection = function aboutSection() {\n  var aboutUs = document.createElement('section');\n  aboutUs.className = 'text-center my-4 mb-5';\n  var h3 = document.createElement('h3');\n  h3.className = 'mt-5';\n  h3.textContent = 'What they are saying!';\n  var details = document.createElement('p');\n  details.className = 'text-secondary mt-3 p-5';\n  details.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas numquam eos, iure perferendis, maxime itaque facilis velit hic a illo repellendus, quis repudiandae architecto laboriosam animi cum autem voluptas! Esse.';\n  var div = document.createElement('div');\n  div.className = 'shadow br-custom w-50 mt-5 pb-3 m-auto';\n  var image = document.createElement('img');\n  image.className = 'm-auto w-50';\n  image.setAttribute('alt', 'Food Testimony');\n  image.src = _img_11_min_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  var text = document.createElement('p');\n  text.className = 'small px-5 text-secondary';\n  text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit!';\n  div.appendChild(image);\n  div.appendChild(text);\n  aboutUs.appendChild(h3);\n  aboutUs.appendChild(details);\n  aboutUs.appendChild(div);\n  return aboutUs;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutSection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/aboutSection.js?");

/***/ }),

/***/ "./src/scripts/contactSection.js":
/*!***************************************!*\
  !*** ./src/scripts/contactSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar contactSection = function contactSection() {\n  var contactUs = document.createElement('section');\n  contactUs.className = 'my-4 mb-5';\n  var divHeader = document.createElement('div');\n  divHeader.className = 'py-5 text-center';\n  var h2 = document.createElement('h2');\n  h2.className = 'mt-5';\n  h2.textContent = 'Contact form!';\n  var details = document.createElement('p');\n  details.className = 'lead px-3';\n  details.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas numquam eos, iure perferendis, maxime itaque facilis velit hic a illo repellendus, quis repudiandae architecto laboriosam animi cum autem voluptas! Esse.';\n  var divForm = document.createElement('div');\n  divForm.className = 'row g-3 w-50 m-auto';\n  var divformInputFn = document.createElement('div');\n  divformInputFn.className = 'col-sm-6';\n  var labelFn = document.createElement('label');\n  labelFn.className = 'form-label';\n  labelFn.textContent = 'First name';\n  labelFn.setAttribute('for', 'firstName');\n  var inputFn = document.createElement('input');\n  inputFn.className = 'form-control';\n  inputFn.setAttribute('id', 'firstName');\n  inputFn.setAttribute('type', 'text');\n  inputFn.setAttribute('placeholder', 'First name');\n  var divformInputLn = document.createElement('div');\n  divformInputLn.className = 'col-sm-6';\n  var labelLn = document.createElement('label');\n  labelLn.className = 'form-label';\n  labelLn.textContent = 'Last name';\n  labelLn.setAttribute('for', 'lastName');\n  var inputLn = document.createElement('input');\n  inputLn.className = 'form-control';\n  inputLn.setAttribute('id', 'lastName');\n  inputLn.setAttribute('type', 'text');\n  inputLn.setAttribute('placeholder', 'Last name');\n  var divformInputTa = document.createElement('div');\n  var textArea = document.createElement('textarea');\n  textArea.className = 'form-control h-100\"';\n  textArea.setAttribute('placeholder', 'Leave a comment here');\n  var button = document.createElement('button');\n  button.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';\n  button.textContent = 'Submit';\n  divHeader.appendChild(h2);\n  divHeader.appendChild(details);\n  divformInputFn.appendChild(labelFn);\n  divformInputFn.appendChild(inputFn);\n  divformInputLn.appendChild(labelLn);\n  divformInputLn.appendChild(inputLn);\n  divformInputTa.appendChild(textArea);\n  divForm.appendChild(divformInputFn);\n  divForm.appendChild(divformInputLn);\n  divForm.appendChild(divformInputTa);\n  divForm.appendChild(button);\n  contactUs.appendChild(divHeader);\n  contactUs.appendChild(divForm);\n  return contactUs;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactSection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/contactSection.js?");

/***/ }),

/***/ "./src/scripts/footer.js":
/*!*******************************!*\
  !*** ./src/scripts/footer.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_14_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/14-min.png */ \"./src/img/14-min.png\");\n\n\nvar footerSection = function footerSection() {\n  var footer = document.createElement('footer');\n  footer.className = 'py-5 bg-gray-200 my-5';\n  var container = document.createElement('div');\n  container.className = 'container';\n  var row = document.createElement('div');\n  row.className = 'row';\n  var left = document.createElement('div');\n  left.className = 'col-12 col-md-4 col-lg-3';\n  var image = document.createElement('img');\n  image.className = 'footer-brand img-fluid mb-2';\n  image.setAttribute('width', 60);\n  image.setAttribute('alt', 'Food logo');\n  image.src = _img_14_min_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  var slogan = document.createElement('p');\n  slogan.className = 'text-gray-700 mb-2';\n  slogan.textContent = 'Best restaurent for you';\n  var icons = document.createElement('div');\n  var icon1 = document.createElement('i');\n  icon1.className = 'fab fa-twitter c-main fs-4 m-1';\n  var icon2 = document.createElement('i');\n  icon2.className = 'fab fa-linkedin-in c-main fs-4 m-1';\n  var icon3 = document.createElement('i');\n  icon3.className = 'fab fa-google-plus-g c-main fs-4 m-1';\n  var icon4 = document.createElement('i');\n  icon4.className = 'fab fa-git c-main fs-4 m-1';\n  var menuFooter = [{\n    menu: 'Products',\n    subMenu: ['Lorem 1', 'Lorem 2', 'Lorem 3', 'Lorem 4']\n  }, {\n    menu: 'Services',\n    subMenu: ['Lorem 5', 'Lorem 6', 'Lorem 7', 'Lorem 8', 'Lorem 9']\n  }, {\n    menu: 'Connect',\n    subMenu: ['Lorem 10', 'Lorem 11', 'Lorem 12']\n  }, {\n    menu: 'Legal',\n    subMenu: ['Lorem 13', 'Lorem 14', 'Lorem 15', 'Lorem 16', 'Lorem 17', 'Lorem 18', 'Lorem 19']\n  }];\n  icons.appendChild(icon1);\n  icons.appendChild(icon2);\n  icons.appendChild(icon3);\n  icons.appendChild(icon4);\n  left.appendChild(image);\n  left.appendChild(slogan);\n  left.appendChild(icons);\n  row.appendChild(left);\n\n  for (var i = 0; i < menuFooter.length; i += 1) {\n    var column = document.createElement('div');\n    column.className = 'col-6 col-md-4 col-lg-2';\n    var h6 = document.createElement('h6');\n    h6.className = 'font-weight-bold text-uppercase text-gray-700';\n    h6.textContent = menuFooter[i].menu;\n    var list = document.createElement('ul');\n    list.className = 'list-unstyled text-muted mb-6 mb-md-8 mb-lg-0';\n\n    for (var j = 0; j < menuFooter[i].subMenu.length; j += 1) {\n      var item = document.createElement('li');\n      item.className = 'mb-3';\n      var itemSpan = document.createElement('span');\n      itemSpan.className = 'text-reset';\n      itemSpan.textContent = menuFooter[i].subMenu[j];\n      item.appendChild(itemSpan);\n      list.appendChild(item);\n    }\n\n    column.appendChild(h6);\n    column.appendChild(list);\n    row.appendChild(column);\n  }\n\n  container.appendChild(row);\n  footer.appendChild(container);\n  return footer;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerSection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/footer.js?");

/***/ }),

/***/ "./src/scripts/header.js":
/*!*******************************!*\
  !*** ./src/scripts/header.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./navMenu */ \"./src/scripts/navMenu.js\"),\n    brand = _require.brand,\n    home = _require.home,\n    menu = _require.menu,\n    about = _require.about,\n    shopping = _require.shopping,\n    contact = _require.contact;\n\nvar navBar = function navBar() {\n  var header = document.createElement('header');\n  var nav = document.createElement('nav');\n  nav.className = 'd-flex justify-content-between my-4 pt-5';\n  var listMenu = document.createElement('ul');\n  var homeLi = document.createElement('li');\n  homeLi.className = 'nav-item ms-5';\n  homeLi.appendChild(home);\n  var menuLi = document.createElement('li');\n  menuLi.className = 'nav-item ms-5';\n  menuLi.appendChild(menu);\n  var aboutLi = document.createElement('li');\n  aboutLi.className = 'nav-item ms-5';\n  aboutLi.appendChild(about);\n  var shoppingLi = document.createElement('li');\n  shoppingLi.className = 'nav-item ms-5';\n  shoppingLi.appendChild(shopping);\n  var contactLi = document.createElement('li');\n  contactLi.className = 'nav-item ms-5 me-5';\n  contactLi.appendChild(contact);\n  listMenu.className = 'nav fw-bold';\n  listMenu.appendChild(homeLi);\n  listMenu.appendChild(menuLi);\n  listMenu.appendChild(aboutLi);\n  listMenu.appendChild(shoppingLi);\n  listMenu.appendChild(contactLi);\n  nav.appendChild(brand);\n  nav.appendChild(listMenu);\n  header.appendChild(nav);\n  return header;\n};\n\nmodule.exports = navBar();\n\n//# sourceURL=webpack://restaurant/./src/scripts/header.js?");

/***/ }),

/***/ "./src/scripts/mainSection.js":
/*!************************************!*\
  !*** ./src/scripts/mainSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_2_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/2-min.png */ \"./src/img/2-min.png\");\n\n\nvar mainSection = function mainSection() {\n  var homeMainSection = document.createElement('section');\n  homeMainSection.className = 'row mb-2 pb-2 bg-bl';\n  var divtext = document.createElement('div');\n  divtext.className = 'title col-7 mt-5 pt-5';\n  var welcometext = document.createElement('h1');\n  welcometext.textContent = 'Your Favorite food Delivered Hot & Fresh';\n  var loremtext = document.createElement('p');\n  loremtext.className = 'gray-600';\n  loremtext.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam praesentium optio nam.';\n  var bookingbtn = document.createElement('button');\n  bookingbtn.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';\n  bookingbtn.textContent = 'Book now';\n  var icon = document.createElement('i');\n  icon.className = 'fas fa-arrow-right mx-3';\n  var divimg = document.createElement('div');\n  divimg.className = 'pic col-5';\n  var image = document.createElement('img');\n  image.className = 'img w-100';\n  image.setAttribute('alt', 'Food 1');\n  image.src = _img_2_min_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  bookingbtn.appendChild(icon);\n  divtext.appendChild(welcometext);\n  divtext.appendChild(loremtext);\n  divtext.appendChild(bookingbtn);\n  divimg.appendChild(image);\n  homeMainSection.appendChild(divtext);\n  homeMainSection.appendChild(divimg);\n  return homeMainSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainSection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/mainSection.js?");

/***/ }),

/***/ "./src/scripts/menuSection.js":
/*!************************************!*\
  !*** ./src/scripts/menuSection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_2_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/2-min.png */ \"./src/img/2-min.png\");\n/* harmony import */ var _img_3_min_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/3-min.png */ \"./src/img/3-min.png\");\n/* harmony import */ var _img_4_min_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/4-min.png */ \"./src/img/4-min.png\");\n/* harmony import */ var _img_9_min_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/9-min.png */ \"./src/img/9-min.png\");\n/* harmony import */ var _img_10_min_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/10-min.png */ \"./src/img/10-min.png\");\n/* harmony import */ var _img_17_min_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/17-min.png */ \"./src/img/17-min.png\");\n/* harmony import */ var _img_15_min_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/15-min.png */ \"./src/img/15-min.png\");\n/* harmony import */ var _img_12_min_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/12-min.png */ \"./src/img/12-min.png\");\n\n\n\n\n\n\n\n\n\nvar menuSection = function menuSection() {\n  var foodsSection = document.createElement('section');\n  foodsSection.className = 'row mb-2 pb-2';\n  var imagesList = [{\n    src: _img_2_min_png__WEBPACK_IMPORTED_MODULE_0__.default,\n    details: 'Meat',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_3_min_png__WEBPACK_IMPORTED_MODULE_1__.default,\n    details: 'Vegetables',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_4_min_png__WEBPACK_IMPORTED_MODULE_2__.default,\n    details: 'Vlegumes/beans',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_9_min_png__WEBPACK_IMPORTED_MODULE_3__.default,\n    details: 'beans',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_10_min_png__WEBPACK_IMPORTED_MODULE_4__.default,\n    details: 'Meat',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_17_min_png__WEBPACK_IMPORTED_MODULE_5__.default,\n    details: 'Vegetables',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_15_min_png__WEBPACK_IMPORTED_MODULE_6__.default,\n    details: 'Vlegumes/beans',\n    text: 'enjoy a variety of nutritious foods.'\n  }, {\n    src: _img_12_min_png__WEBPACK_IMPORTED_MODULE_7__.default,\n    details: 'beans',\n    text: 'enjoy a variety of nutritious foods.'\n  }];\n\n  for (var i = 0; i < imagesList.length; i += 1) {\n    var container = document.createElement('div');\n    container.className = 'col-xs-12 col-sm-6 col-md-3';\n    var div = document.createElement('div');\n    div.className = 'm-lg-2 m-sm-1 shadow bg-light pt-3 br-custom';\n    var image = document.createElement('img');\n    image.className = 'img w-100';\n    image.setAttribute('alt', imagesList[i].details);\n    image.src = imagesList[i].src;\n    var text = document.createElement('p');\n    text.className = 'fw-bold text-center';\n    text.textContent = imagesList[i].details;\n    var textSmall = document.createElement('p');\n    textSmall.className = 'small text-center';\n    textSmall.textContent = imagesList[i].text;\n    var button = document.createElement('button');\n    button.className = 'btn btn-danger plus text-left';\n    button.textContent = ' + ';\n    div.appendChild(image);\n    div.appendChild(text);\n    div.appendChild(textSmall);\n    div.appendChild(button);\n    container.appendChild(div);\n    foodsSection.appendChild(container);\n  }\n\n  return foodsSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuSection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/menuSection.js?");

/***/ }),

/***/ "./src/scripts/navMenu.js":
/*!********************************!*\
  !*** ./src/scripts/navMenu.js ***!
  \********************************/
/***/ ((module) => {

eval("var navMenu = function navMenu() {\n  var brand = document.createElement('h3');\n  brand.className = 'text-secondary';\n  brand.textContent = 'Restaurant';\n  var home = document.createElement('a');\n  home.className = 'nav-link text-dark';\n  home.textContent = 'Home';\n  var menu = document.createElement('a');\n  menu.className = 'nav-link text-dark';\n  menu.textContent = 'Our menu';\n  var about = document.createElement('a');\n  about.className = 'nav-link text-dark';\n  about.textContent = 'About us';\n  var shopping = document.createElement('i');\n  shopping.className = 'fas fa-shopping-cart pt-2 mx-3 fs-2';\n  var contact = document.createElement('a');\n  contact.className = 'nav-link btn btn btn-light btn-main fw-bold shadow';\n  contact.textContent = 'contact';\n  return {\n    brand: brand,\n    home: home,\n    menu: menu,\n    about: about,\n    shopping: shopping,\n    contact: contact\n  };\n};\n\nmodule.exports = navMenu();\n\n//# sourceURL=webpack://restaurant/./src/scripts/navMenu.js?");

/***/ }),

/***/ "./src/scripts/programSection.js":
/*!***************************************!*\
  !*** ./src/scripts/programSection.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar programSection = function programSection() {\n  var progSection = document.createElement('section');\n  progSection.className = 'program row text-center';\n  var cssClass = [{\n    myClass: 'fa-clock',\n    details: 'Today, 10am to 7pm',\n    text: 'Working hours'\n  }, {\n    myClass: 'fa-map-marker-alt',\n    details: 'Lorem dolor sit amet',\n    text: 'Get position'\n  }, {\n    myClass: 'fa-phone',\n    details: '+243 000 000 000',\n    text: 'Call online'\n  }];\n\n  for (var i = 0; i < cssClass.length; i += 1) {\n    var div = document.createElement('div');\n    div.className = 'col bg-light shadow m-lg-5 m-sm-3 pt-3 br-custom';\n    var icon = document.createElement('i');\n    icon.className = \"fas c-main fs-2 \".concat(cssClass[i].myClass);\n    var text = document.createElement('p');\n    text.className = 'fw-bold';\n    text.textContent = cssClass[i].details;\n    var textSmall = document.createElement('p');\n    textSmall.className = 'small';\n    textSmall.textContent = cssClass[i].text;\n    div.appendChild(icon);\n    div.appendChild(text);\n    div.appendChild(textSmall);\n    progSection.appendChild(div);\n  }\n\n  return progSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (programSection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/programSection.js?");

/***/ }),

/***/ "./src/scripts/testimonySection.js":
/*!*****************************************!*\
  !*** ./src/scripts/testimonySection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_4_min_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/4-min.png */ \"./src/img/4-min.png\");\n\n\nvar testimonySection = function testimonySection() {\n  var testSection = document.createElement('section');\n  testSection.className = 'text-center my-4 mb-5';\n  var button = document.createElement('button');\n  button.className = 'btn btn-primary shadow fw-bold p-3 mb-2 bg-main btn-main';\n  button.textContent = 'See more foods';\n  var icon = document.createElement('i');\n  icon.className = 'fas fa-arrow-down mx-3';\n  var h3 = document.createElement('h3');\n  h3.className = 'mt-5';\n  h3.textContent = 'What they are saying!';\n  var details = document.createElement('p');\n  details.className = 'text-secondary mt-3';\n  details.textContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla dolore culpa, ratione doloremque dignissimos quae earum laboriosam architecto neque soluta veniam at nostrum sit perspiciatis sequi exercitationem quia blanditiis veritatis?';\n  var div = document.createElement('div');\n  div.className = 'shadow br-custom w-50 mt-5 pb-3 m-auto';\n  var image = document.createElement('img');\n  image.className = 'm-auto w-50';\n  image.setAttribute('alt', 'Food Testimony');\n  image.src = _img_4_min_png__WEBPACK_IMPORTED_MODULE_0__.default;\n  var text = document.createElement('p');\n  text.className = 'small px-5 text-secondary';\n  text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit!';\n  button.appendChild(icon);\n  div.appendChild(image);\n  div.appendChild(text);\n  testSection.appendChild(button);\n  testSection.appendChild(h3);\n  testSection.appendChild(details);\n  testSection.appendChild(div);\n  return testSection;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (testimonySection);\n\n//# sourceURL=webpack://restaurant/./src/scripts/testimonySection.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _img_bg_min_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/bg-min.png */ \"./src/img/bg-min.png\");\n/* harmony import */ var _img_8_min_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/8-min.png */ \"./src/img/8-min.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_bg_min_png__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_8_min_png__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin-top: -30px;\\n}\\n\\n.bg-main {\\n  background: #ff9f0d;\\n}\\n\\n.c-main {\\n  color: #ff9f0d;\\n}\\n\\n.btn-main {\\n  border-radius: 30px;\\n  border-color: transparent !important;\\n}\\n\\n.btn-main:hover {\\n  background: #ff9e0dd8;\\n}\\n\\n.br-custom {\\n  border-radius: 45px 0;\\n}\\n\\n.main {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat top right;\\n  background-size: 50%;\\n}\\n\\n.bg-bl {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat bottom left;\\n  background-size: 14%;\\n}\\n\\n.nav-link {\\n  cursor: pointer;\\n}\\n\\n.h-100 {\\n  height: 100px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== \"string\") {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/img/10-min.png":
/*!****************************!*\
  !*** ./src/img/10-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"f4150df66d29dbc01261f653b2123e8d.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/10-min.png?");

/***/ }),

/***/ "./src/img/11-min.png":
/*!****************************!*\
  !*** ./src/img/11-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"707784bc42c806bf8f288d9825ba0491.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/11-min.png?");

/***/ }),

/***/ "./src/img/12-min.png":
/*!****************************!*\
  !*** ./src/img/12-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"eaee5e1c082fdadb65eb2cd1b8a6b9ab.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/12-min.png?");

/***/ }),

/***/ "./src/img/14-min.png":
/*!****************************!*\
  !*** ./src/img/14-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"caece8935d25b8529430a7da98bf5c40.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/14-min.png?");

/***/ }),

/***/ "./src/img/15-min.png":
/*!****************************!*\
  !*** ./src/img/15-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"0ca30fc5576aa1f6b76b2e2fcc657c04.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/15-min.png?");

/***/ }),

/***/ "./src/img/17-min.png":
/*!****************************!*\
  !*** ./src/img/17-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6ef8779b0124cfb4aeb24e9f141088a0.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/17-min.png?");

/***/ }),

/***/ "./src/img/2-min.png":
/*!***************************!*\
  !*** ./src/img/2-min.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"325ac4dc7ffa46cf111821b3a9c39a6f.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/2-min.png?");

/***/ }),

/***/ "./src/img/3-min.png":
/*!***************************!*\
  !*** ./src/img/3-min.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"e8393f4bdbb312f07a9ad67b78bf7eb1.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/3-min.png?");

/***/ }),

/***/ "./src/img/4-min.png":
/*!***************************!*\
  !*** ./src/img/4-min.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"10a02580162394ade57250a1283224fe.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/4-min.png?");

/***/ }),

/***/ "./src/img/8-min.png":
/*!***************************!*\
  !*** ./src/img/8-min.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"56f0493730655a2dbca66b9ec6fe9b6a.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/8-min.png?");

/***/ }),

/***/ "./src/img/9-min.png":
/*!***************************!*\
  !*** ./src/img/9-min.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"c14bdb8602ead2238889b2d8404c1186.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/9-min.png?");

/***/ }),

/***/ "./src/img/bg-min.png":
/*!****************************!*\
  !*** ./src/img/bg-min.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"d75feb2097eb88efdfb8b92888360021.png\");\n\n//# sourceURL=webpack://restaurant/./src/img/bg-min.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;