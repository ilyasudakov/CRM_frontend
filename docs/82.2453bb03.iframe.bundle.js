(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{2866:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/work_time_icon.43fae195.svg"},3384:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(181),__webpack_require__(2663),__webpack_require__(281);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),_App_js__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(3385),__webpack_require__(1585),__webpack_require__(214)),Assets_sidemenu_work_time_icon_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2866),Assets_sidemenu_work_time_icon_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(Assets_sidemenu_work_time_icon_svg__WEBPACK_IMPORTED_MODULE_7__),Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(182),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1),ReportsPage=function ReportsPage(props){var userContext=Object(react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_App_js__WEBPACK_IMPORTED_MODULE_6__.a);Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){document.title="Отчеты"}),[]);var menuItems={"Учет времени":[{linkTo:"/reports/employee",name:"Отчет сотрудника",access:["ROLE_ADMIN"],icon:Assets_sidemenu_work_time_icon_svg__WEBPACK_IMPORTED_MODULE_7___default.a}]};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"reports-page",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"main-window",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"main-window__header main-window__header--full",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"main-window__title",children:"Отчеты"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"reports-page__buttons",children:Object.entries(menuItems).map((function(category,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"reports-page__category",children:category[1].map((function(item){if(userContext.userHasAccess(item.access))return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_8__.a,{onClick:function onClick(){props.history.push(item.linkTo)},imgSrc:item.icon,text:item.name,className:"main-window__button"})}))},index)}))})]})})};ReportsPage.displayName="ReportsPage",ReportsPage.__docgenInfo={description:"",methods:[],displayName:"ReportsPage"},__webpack_exports__.default=ReportsPage,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainPage/ReportsPage/ReportsPage.jsx"]={name:"ReportsPage",docgenInfo:ReportsPage.__docgenInfo,path:"src/components/MainPage/ReportsPage/ReportsPage.jsx"})},3385:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(3386);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3386:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.reports-page .main-window__title{width:100%;padding:0;box-sizing:border-box;text-align:left}.reports-page__buttons{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;width:100%;box-sizing:border-box;padding:0 40px}.reports-page__buttons .main-window__button{margin-top:5px}.reports-page__buttons .main-window__button .button__img{filter:brightness(3) !important}.reports-page__buttons .reports-page__category{display:flex;flex-direction:column;margin-right:10px;margin-bottom:10px}.reports-page__buttons .reports-page__category .reports-page__category-name{color:#333333;padding:2.5px 0px;width:fit-content;border-bottom:2px solid #bbbbbb;margin-bottom:2px;font-size:115%}\n",""]),module.exports=exports}}]);