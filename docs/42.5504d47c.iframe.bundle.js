(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{2656:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(41),__webpack_require__(0)),Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(990),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2661),__webpack_require__(1)),ControlPanel=function ControlPanel(props){var _props$styles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),isHidden=_useState2[0],setIsHidden=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"control-panel",style:Object.assign({},null!==(_props$styles=props.styles)&&void 0!==_props$styles?_props$styles:{}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__control-panel-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"control-panel__buttons",children:[props.sorting||null,props.content?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__button main-window__button--inverted main-window__button--filter",onClick:function onClick(){return setIsHidden((function(isHidden){return!isHidden}))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:props.panelName||"Фильтры"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__.a,{className:"main-window__img ".concat(isHidden?"":"main-window__img--rotated")})]}):null,props.buttons||null,props.itemsCount?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"main-window__amount_table",children:props.itemsCount}):null]}),isHidden?null:props.content]})})};ControlPanel.displayName="ControlPanel",ControlPanel.__docgenInfo={description:"",methods:[],displayName:"ControlPanel"},__webpack_exports__.a=ControlPanel,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/MainWindow/ControlPanel/ControlPanel.jsx"]={name:"ControlPanel",docgenInfo:ControlPanel.__docgenInfo,path:"src/utils/MainWindow/ControlPanel/ControlPanel.jsx"})},2661:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2662);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2662:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.control-panel{width:100%}.control-panel .main-window__control-panel-wrapper{padding-top:5px;padding-bottom:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__button{margin-top:5px;padding:8px 10px;font-size:85%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .switch{margin-top:5px;margin-right:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .searchbar{max-width:50%;margin-right:auto;padding:0;align-self:center;margin-left:-15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__amount_table{color:#666666;align-self:center;margin-top:5px;margin-left:auto}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window{padding:0}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel{width:max-content;margin-bottom:0;margin-right:10px;box-sizing:border-box;padding-top:calc(5px);position:relative;background-color:#ffffff}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel::before{width:100%;height:20px;position:absolute;content:\"Сортировка\";top:8px;left:10px;z-index:0;color:#777777;font-size:95%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px;padding-right:25px;padding-left:9px;height:100%;margin:0;box-sizing:border-box;min-width:150px;z-index:0;background-color:transparent;cursor:pointer;border:1px solid #cccccc;transition:background-color 100ms ease-in-out;-webkit-appearance:none;-moz-appearance:none;background:transparent;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'></path></svg>\");background-repeat:no-repeat;background-position-x:100%;background-position-y:calc(50% + 2px)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter{border-color:#cccccc;justify-content:space-between;padding:8px 8px !important;padding-right:5px !important}.control-panel .main-window__control-panel-wrapper .main-window__button--filter span{margin-right:20px;font-size:95%}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img{filter:none;max-width:18px;margin-top:1px;margin-right:0;transition:200ms cubic-bezier(0.23, 1, 0.32, 1)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img path:nth-child(1){transition:200ms cubic-bezier(0.23, 1, 0.32, 1);fill:#333333}@media (max-width: 768px){.control-panel .main-window__control-panel-wrapper{padding-left:15px;padding-right:15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{width:calc(100% + 30px);padding:0 15px;box-sizing:border-box;flex-wrap:nowrap;margin-left:-15px;overflow:auto;white-space:nowrap}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px !important;padding-right:25px !important;padding-left:9px !important;max-width:240px}}\n",""]),module.exports=exports},2665:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/edit.efe0dc2a.svg"},2677:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/delete.1ad59e4c.svg"},2692:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return getPackaging})),__webpack_require__.d(__webpack_exports__,"g",(function(){return getPackagingById})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addPackaging})),__webpack_require__.d(__webpack_exports__,"e",(function(){return editPackaging})),__webpack_require__.d(__webpack_exports__,"c",(function(){return deletePackaging})),__webpack_require__.d(__webpack_exports__,"b",(function(){return addPackagingToProduct})),__webpack_require__.d(__webpack_exports__,"d",(function(){return deletePackagingFromProduct}));var _utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(637);function getPackaging(signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/packing/",method:"GET",signal:signal})}function getPackagingById(id,signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/packing/"+id,method:"GET",signal:signal})}function addPackaging(packaging,signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/packing/",method:"POST",body:JSON.stringify(packaging),signal:signal})}function editPackaging(id,packaging,signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/packing/"+id,method:"PUT",body:JSON.stringify(packaging),signal:signal})}function deletePackaging(id,signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/packing/"+id,method:"DELETE",signal:signal})}function addPackagingToProduct(newPackaging,id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/product/add/"+id,method:"POST",body:JSON.stringify(newPackaging)})}function deletePackagingFromProduct(productId){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/product/add/"+productId,method:"POST",body:JSON.stringify({packings:[]})})}},2717:function(module,__webpack_exports__,__webpack_require__){"use strict";var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(2718),__webpack_require__(1)),TableLoading=function TableLoading(_ref){var isLoading=_ref.isLoading;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"table-loading ".concat(isLoading?"":"table-loading--hidden"),children:isLoading&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"table-loading__circle"})})};TableLoading.displayName="TableLoading",TableLoading.__docgenInfo={description:"",methods:[],displayName:"TableLoading",props:{isLoading:{type:{name:"bool"},required:!1,description:""}}},__webpack_exports__.a=TableLoading,TableLoading.propTypes={isLoading:prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/TableView/TableLoading/TableLoading.jsx"]={name:"TableLoading",docgenInfo:TableLoading.__docgenInfo,path:"src/utils/TableView/TableLoading/TableLoading.jsx"})},2718:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2719);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2719:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.table-loading{background-color:rgba(255,255,255,0.4);position:absolute;top:0;left:0;width:100%;height:100%;min-height:200px;z-index:1;border-radius:5px}.table-loading--hidden{width:0;height:0}.table-loading__circle{display:block;position:absolute;top:50%;left:50%;height:50px;width:50px;margin:-25px 0 0 -25px;border:4px rgba(70,93,102,0.2) solid;border-top:4px rgba(70,93,102,0.5) solid;border-radius:50%;-webkit-animation:spin4 1s infinite linear;animation:spin4 1s infinite linear}@-webkit-keyframes spin4{from{-webkit-transform:rotate(359deg);transform:rotate(359deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg)}}@keyframes spin4{from{-webkit-transform:rotate(359deg);transform:rotate(359deg);-webkit-transform:rotate(359deg);transform:rotate(359deg)}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform:rotate(0deg);transform:rotate(0deg)}}\n",""]),module.exports=exports},3547:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__(640),__webpack_require__(444),__webpack_require__(181),__webpack_require__(991),__webpack_require__(636),__webpack_require__(638),__webpack_require__(639),__webpack_require__(281),__webpack_require__(241),__webpack_require__(641),__webpack_require__(333),__webpack_require__(0)),_SearchBar_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_16__=(__webpack_require__(3548),__webpack_require__(1585),__webpack_require__(642)),Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(2665),Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_17__),Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(2677),Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_18___default=__webpack_require__.n(Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_18__),Utils_TableView_TableLoading_TableLoading_jsx__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(2717),Utils_RequestsAPI_Products_packaging_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(2692),Utils_MainWindow_FloatingPlus_FloatingPlus_jsx__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(644),Utils_MainWindow_ControlPanel_ControlPanel_jsx__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(2656),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(1),PackagingPage=function PackagingPage(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState,2),packages=_useState2[0],setPackages=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(!1),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3,2),isLoading=_useState4[0],setIsLoading=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)(""),_useState6=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5,2),searchQuery=_useState6[0],setSearchQuery=_useState6[1],_useState7=Object(react__WEBPACK_IMPORTED_MODULE_13__.useState)({curSort:"name",name:"asc",nextDateContact:"asc"}),_useState8=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7,2),sortOrder=_useState8[0],setSortOrder=_useState8[1];Object(react__WEBPACK_IMPORTED_MODULE_13__.useEffect)((function(){setIsLoading(!0);var abortController=new AbortController;return loadData(abortController.signal),setIsLoading(!1),function cancel(){abortController.abort()}}),[]);var loadData=function loadData(signal){Object(Utils_RequestsAPI_Products_packaging_js__WEBPACK_IMPORTED_MODULE_20__.f)(signal).then((function(res){return res.json()})).then((function(res){setPackages(res)}))};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"packaging-page",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div",{className:"main-window",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(Utils_MainWindow_FloatingPlus_FloatingPlus_jsx__WEBPACK_IMPORTED_MODULE_21__.a,{linkTo:"/packaging/new",visibility:["ROLE_ADMIN"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__header main-window__header--full",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__title",children:"Упаковки"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(_SearchBar_SearchBar_jsx__WEBPACK_IMPORTED_MODULE_16__.a,{fullSize:!0,placeholder:"Введите запрос для поиска...",setSearchQuery:setSearchQuery}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(Utils_MainWindow_ControlPanel_ControlPanel_jsx__WEBPACK_IMPORTED_MODULE_22__.a,{sorting:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__sort-panel",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("select",{onChange:function changeSortOrder(event){var name=event.target.value.split(" ")[0],order=event.target.value.split(" ")[1];setSortOrder(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({curSort:name},name,order))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("option",{value:"name asc",children:"По алфавиту (А-Я)"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("option",{value:"name desc",children:"По алфавиту (Я-А)"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("option",{value:"quantity desc",children:"По штукам"})]})}),itemsCount:"Всего: ".concat(packages.length," записей")}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div",{className:"main-window__list main-window__list--full",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)(Utils_TableView_TableLoading_TableLoading_jsx__WEBPACK_IMPORTED_MODULE_19__.a,{isLoading:isLoading}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span",{children:"Название"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span",{children:"Кол-во"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span",{children:"Размер"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("span",{children:"Комментарий"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),packages.filter((function(item){return item.name.toLowerCase().includes(searchQuery.toLowerCase())||item.quantity.toString().toLowerCase().includes(searchQuery.toLowerCase())||item.size.toLowerCase().includes(searchQuery.toLowerCase())||item.comment.toLowerCase().includes(searchQuery.toLowerCase())})).sort((function(a,b){return a[sortOrder.curSort]<b[sortOrder.curSort]?"desc"===sortOrder[sortOrder.curSort]?1:-1:a[sortOrder.curSort]>b[sortOrder.curSort]?"desc"===sortOrder[sortOrder.curSort]?-1:1:0})).map((function(packageItem,packageIndex){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div",{className:"main-window__list-item",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__mobile-text",children:"Название:"}),packageItem.name]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__mobile-text",children:"Кол-во:"}),packageItem.quantity]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__mobile-text",children:"Размер:"}),packageItem.size]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__mobile-text",children:"Комментарий:"}),packageItem.comment]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsxs)("div",{className:"main-window__actions",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__action",title:"Редактирование упаковки",onClick:function onClick(){props.history.push("/packaging/edit/"+packageItem.id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("img",{className:"main-window__img",src:Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_17___default.a})}),props.userHasAccess(["ROLE_ADMIN"])&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("div",{className:"main-window__action",title:"Удаление упаковки",onClick:function onClick(){!function deleteItem(index){var id=packages[index].id;Object(Utils_RequestsAPI_Products_packaging_js__WEBPACK_IMPORTED_MODULE_20__.c)(id).then((function(){loadData()})).catch((function(error){console.log(error),alert("Ошибка при удалении")}))}(packageIndex)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_23__.jsx)("img",{className:"main-window__img",src:Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_18___default.a})})]})]},packageItem.id)}))]})]})})};PackagingPage.displayName="PackagingPage",PackagingPage.__docgenInfo={description:"",methods:[],displayName:"PackagingPage"},__webpack_exports__.default=PackagingPage,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainPage/PackagingPage/PackagingPage.jsx"]={name:"PackagingPage",docgenInfo:PackagingPage.__docgenInfo,path:"src/components/MainPage/PackagingPage/PackagingPage.jsx"})},3548:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(3549);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3549:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.packaging-page .main-window__list .main-window__actions{flex-direction:row}\n",""]),module.exports=exports}}]);