(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{2648:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(40),__webpack_require__(241),__webpack_require__(213),__webpack_require__(0)),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(2652),__webpack_require__(1)),PlaceholderLoading=function PlaceholderLoading(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?3:_ref$items,itemClassName=_ref.itemClassName,_ref$minHeight=_ref.minHeight,minHeight=void 0===_ref$minHeight?"1.5rem":_ref$minHeight,placeholderContent=_ref.placeholderContent,wrapperClassName=_ref.wrapperClassName,_ref$itemStyles=_ref.itemStyles,itemStyles=void 0===_ref$itemStyles?{}:_ref$itemStyles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),elements=_useState2[0],setElements=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){for(var temp=[],count=items,i=1;i<=count;i++)temp.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading__item ".concat(itemClassName),style:Object.assign({minHeight:minHeight},itemStyles)}));setElements([].concat(temp))}),[]),placeholderContent?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:itemClassName,style:{minHeight:minHeight},children:placeholderContent},index)}))}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item){return item}))})};PlaceholderLoading.displayName="PlaceholderLoading",PlaceholderLoading.__docgenInfo={description:"",methods:[],displayName:"PlaceholderLoading",props:{items:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},minHeight:{defaultValue:{value:"'1.5rem'",computed:!1},type:{name:"string"},required:!1,description:""},itemStyles:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemClassName:{type:{name:"string"},required:!1,description:""},wrapperClassName:{type:{name:"string"},required:!1,description:""},placeholderContent:{type:{name:"any"},required:!1,description:""}}},__webpack_exports__.a=PlaceholderLoading,PlaceholderLoading.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,minHeight:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,itemClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,placeholderContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,itemStyles:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"]={name:"PlaceholderLoading",docgenInfo:PlaceholderLoading.__docgenInfo,path:"src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"})},2652:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2653);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2653:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,'@keyframes pulse-placeholder-loading{0%,100%{background-color:#e7e7e7}50%{background-color:#efefef}}@keyframes load{from{left:-150px}to{left:100%}}.placeholder-loading__item{height:1rem;background-color:#ddd;animation:pulse-placeholder-loading 1s infinite ease-in-out;position:relative;overflow:hidden;border-bottom:1px solid #bbb}.placeholder-loading__item::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n',""]),module.exports=exports},2659:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/edit.efe0dc2a.svg"},2705:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"c",(function(){return rigTypes})),__webpack_require__.d(__webpack_exports__,"b",(function(){return rigStatuses})),__webpack_require__.d(__webpack_exports__,"a",(function(){return checkRiggingTypesInputs})),__webpack_require__.d(__webpack_exports__,"d",(function(){return workshopsLocations}));var rigTypes={stamp:{name:"штамп",redirectURL:"/dispatcher/rigging/stamp",type:"stamp",title:"Штамп"},machine:{name:"станок",redirectURL:"/dispatcher/rigging/machine",type:"machine",title:"Станок"},pressForm:{name:"пресс-форма",redirectURL:"/dispatcher/rigging/press-form",type:"pressForm",title:"Пресс-форма"},parts:{name:"запчасти",redirectURL:"/dispatcher/rigging/parts",type:"parts",title:"Запчасти"}},rigStatuses={production:{name:"В производстве",className:"production"},completed:{name:"Завершено",className:"completed"},defect:{name:"Приоритет",className:"defect"}},riggingTypeList={cuttingDimensions:{prev:null},milling:{prev:"cuttingDimensions"},harding:{prev:"milling"},grinding:{prev:"harding"},erosion:{prev:"grinding"},controll:{prev:"erosion"}},checkRiggingTypesInputs=function checkRiggingTypesInputs(inputs){for(var type=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"controll",check=!0,curType=riggingTypeList[type].prev;null!==curType;){if(""===inputs[curType]||null===inputs[curType])return void(check=!1);curType=riggingTypeList[curType].prev}return check},workshopsLocations={lemz:{name:"ЦехЛЭМЗ"},lepsari:{name:"ЦехЛепсари"},ligovskiy:{name:"ЦехЛиговский"}}},2711:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/chevron-down.d0a0493c.svg"},3296:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(3297);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3297:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,':root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.rigging-list{--cuttingDimensions: #ffe500;--milling: #e5ac00;--harding: #a1ac00;--grinding: #a0e22d;--erosion: #00ff73}.rigging-list .main-window__header{margin-bottom:0}.rigging-list .main-window__control-panel-wrapper{margin-bottom:10px}.rigging-list .main-window__status-panel{margin-right:0}.rigging-list .main-window__status-panel .main-window__list-item--cuttingDimensions::before{background-color:var(--cuttingDimensions)}.rigging-list .main-window__status-panel .main-window__list-item--milling::before{background-color:var(--milling)}.rigging-list .main-window__status-panel .main-window__list-item--harding::before{background-color:var(--harding)}.rigging-list .main-window__status-panel .main-window__list-item--grinding::before{background-color:var(--grinding)}.rigging-list .main-window__status-panel .main-window__list-item--erosion::before{background-color:var(--erosion)}.rigging-list .main-window__status-panel .main-window__button{padding:15px 25px;font-size:120%}.rigging-list .main-window__status-panel .main-window__button::before{width:10px;height:10px;top:calc(50% - 5px);border:1px solid #bbbbbb;display:none}.rigging-list .main-window__status-panel .main-window__button:not(:last-child){margin-right:35px !important}.rigging-list .main-window__status-panel .main-window__button:not(:last-child)::after{position:absolute;right:-40px;content:"";border:15px solid transparent;border-left:15px solid #bbbbbb}\n',""]),module.exports=exports},3298:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(3299);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3299:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,'.rigging-list-tableview{font-size:100%;margin-top:-10px;width:100%;display:flex;flex-direction:column;align-items:center;--defect: #e08989;--completed: #77c78a;--production: #d4d688}.rigging-list-tableview__list{width:calc(100% - 50px)}.rigging-list-tableview__list .rigging-list-tableview__workshop{margin-right:100%;margin-bottom:5px;padding:0 5px;color:#666666;border-bottom:1.5px solid #aaaaaa;font-size:85%;width:fit-content;white-space:nowrap;margin-bottom:5px}.rigging-list-tableview__list .rigging-list-tableview__workshop:not(:first-child){margin-top:5px}.rigging-list-tableview .main-window__list .rigging-list-tableview__workshop{margin-right:100%;margin-bottom:5px;padding:0 5px;color:#666666;border-bottom:1.5px solid #aaaaaa;font-size:90%;width:fit-content;white-space:nowrap;margin-bottom:5px}.rigging-list-tableview .main-window__list .rigging-list-tableview__workshop:not(:first-child){margin-top:5px}.rigging-list-tableview .main-window__list-item--divider{cursor:pointer;width:100%;box-sizing:border-box}.rigging-list-tableview .main-window__list-item--divider span{padding-left:5px;margin-right:auto;max-width:fit-content !important}.rigging-list-tableview .main-window__list-item--defect::before{background-color:var(--defect) !important}.rigging-list-tableview .main-window__list-item--completed::before{background-color:var(--completed) !important}.rigging-list-tableview .main-window__list-item--production::before{background-color:var(--production) !important}.rigging-list-tableview .main-window__list-item span:nth-child(1){flex:0 1 20%;max-width:125px}.rigging-list-tableview .main-window__list-item span:nth-child(2){flex:0 1 30%}.rigging-list-tableview .main-window__list-item span:nth-child(3){max-width:80px}.rigging-list-tableview .main-window__list-item span:nth-child(4){flex:0 1 15%}.rigging-list-tableview .main-window__list-item span:nth-child(5){max-width:140px;padding-left:25px;position:relative;font-size:90%}.rigging-list-tableview .main-window__list-item:not(.main-window__list-item--header) span:nth-child(5)::before{content:"";display:inline-block;position:absolute;width:12.5px;height:12.5px;left:7.5px;top:calc(50% - 6px);border-radius:999px;background-color:#cccccc}@media (max-width: 768px){.rigging-list-tableview .main-window__list-item span:nth-child(1){max-width:none}.rigging-list-tableview .main-window__list-item span:nth-child(3){max-width:none}.rigging-list-tableview .main-window__list-item span:nth-child(4){max-width:none}.rigging-list-tableview .main-window__list-item span:nth-child(5){max-width:none;padding:0 5px;padding-right:25px;width:calc(100% - 20px)}.rigging-list-tableview .main-window__list-item span:nth-child(5)::before{left:auto !important;right:5px}.rigging-list-tableview .main-window__list-item--divider{margin:20px auto}.rigging-list-tableview .main-window__list-item--divider span{margin-left:auto}}\n',""]),module.exports=exports},3596:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var toConsumableArray=__webpack_require__(65),toConsumableArray_default=__webpack_require__.n(toConsumableArray),asyncToGenerator=__webpack_require__(284),asyncToGenerator_default=__webpack_require__.n(asyncToGenerator),slicedToArray=__webpack_require__(15),slicedToArray_default=__webpack_require__.n(slicedToArray),regenerator=__webpack_require__(147),regenerator_default=__webpack_require__.n(regenerator),react=(__webpack_require__(440),__webpack_require__(242),__webpack_require__(213),__webpack_require__(2662),__webpack_require__(632),__webpack_require__(241),__webpack_require__(40),__webpack_require__(282),__webpack_require__(0)),react_router_dom=(__webpack_require__(3296),__webpack_require__(989),__webpack_require__(52)),App=(__webpack_require__(3298),__webpack_require__(214)),chevron_down=__webpack_require__(2711),chevron_down_default=__webpack_require__.n(chevron_down),edit=__webpack_require__(2659),edit_default=__webpack_require__.n(edit),rigsVariables=__webpack_require__(2705),PlaceholderLoading=__webpack_require__(2648),jsx_runtime=__webpack_require__(1),TableView_TableView_TableView=function TableView(props){var _useState=Object(react.useState)([{name:"ЦехЛЭМЗ",alternatives:["ЛЭМЗ","lemz"],isMinimized:!1,visibility:["ROLE_ADMIN","ROLE_LEMZ"]},{name:"ЦехЛиговский",alternatives:["Лиговка","ligoskiy"],isMinimized:!1,visibility:["ROLE_ADMIN","ROLE_LIGOVSKIY"]},{name:"ЦехЛепсари",alternatives:["Лепсари","lepsari"],isMinimized:!1,visibility:["ROLE_ADMIN","ROLE_LEPSARI"]}]),_useState2=slicedToArray_default()(_useState,2),workshops=_useState2[0],setWorkshops=_useState2[1],userContext=Object(react.useContext)(App.a);return Object(jsx_runtime.jsx)("div",{className:"rigging-list-tableview",children:Object(jsx_runtime.jsx)("div",{className:"main-window__list main-window__list--full",children:workshops.filter((function(workshop){return userContext.userHasAccess(workshop.visibility)})).map((function(workshop,workshopIndex){var filteredData=props.data.filter((function(item){return item.location===workshop.name||void 0!==workshop.alternatives.find((function(oldName){return oldName===item.location}))}));return Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[filteredData.length>0&&Object(jsx_runtime.jsx)("div",{className:"main-window__list-item main-window__list-item--divider",onClick:function onClick(){var temp=workshops;temp[workshopIndex].isMinimized=!temp[workshopIndex].isMinimized,setWorkshops(toConsumableArray_default()(temp))},children:Object(jsx_runtime.jsxs)("span",{children:[workshop.name,Object(jsx_runtime.jsx)("img",{className:workshop.isMinimized?"main-window__img":"main-window__img main-window__img--rotated",src:chevron_down_default.a})]})}),props.isLoading?Object(jsx_runtime.jsx)(PlaceholderLoading.a,{itemClassName:"main-window__list-item",minHeight:"35px",items:3}):Object(jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[filteredData.length>0&&!workshop.isMinimized&&Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(jsx_runtime.jsx)("span",{children:"Артикул"}),Object(jsx_runtime.jsx)("span",{children:"Название"}),Object(jsx_runtime.jsx)("span",{children:"Кол-во"}),Object(jsx_runtime.jsx)("span",{children:"Комментарий"}),Object(jsx_runtime.jsx)("span",{children:"Статус"}),Object(jsx_runtime.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),filteredData.map((function(item){var _rigStatuses;if(!workshop.isMinimized)return Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item",children:[Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Артикул:"}),item.number]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Название:"}),item.name]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Кол-во:"}),item.amount]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Комментарий:"}),item.comment]}),Object(jsx_runtime.jsxs)("span",{className:"main-window__list-item--".concat(null===(_rigStatuses=rigsVariables.b[item.color||"production"])||void 0===_rigStatuses?void 0:_rigStatuses.className),children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Статус"}),rigsVariables.b[item.color||"production"].name]}),console.log(item),Object(jsx_runtime.jsx)("div",{className:"main-window__actions",children:Object(jsx_runtime.jsx)(react_router_dom.a,{className:"main-window__action",to:"".concat(rigsVariables.c[item.status].redirectURL,"/edit/").concat(item.itemId,"?part=").concat(item.id),title:"Редактирование",children:Object(jsx_runtime.jsx)("img",{className:"main-window__img",src:edit_default.a,alt:""})})})]})}))]})]})}))})})};TableView_TableView_TableView.displayName="TableView",TableView_TableView_TableView.__docgenInfo={description:"",methods:[],displayName:"TableView"};var RiggingList_TableView_TableView=TableView_TableView_TableView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Dispatcher\\Rigging\\RiggingList\\TableView\\TableView.jsx"]={name:"TableView",docgenInfo:TableView_TableView_TableView.__docgenInfo,path:"src\\components\\MainPage\\Dispatcher\\Rigging\\RiggingList\\TableView\\TableView.jsx"});var Stamp=__webpack_require__(2713),RiggingList_RiggingList_RiggingList=function RiggingList(){var _useState=Object(react.useState)([]),_useState2=slicedToArray_default()(_useState,2),drafts=_useState2[0],setDrafts=_useState2[1],_useState3=Object(react.useState)([]),_useState4=slicedToArray_default()(_useState3,2),filteredData=_useState4[0],setFilteredData=_useState4[1],_useState5=Object(react.useState)(!1),_useState6=slicedToArray_default()(_useState5,2),isLoading=_useState6[0],setIsLoading=_useState6[1],_useState7=Object(react.useState)(!1),_useState8=slicedToArray_default()(_useState7,2),dataLoaded=_useState8[0],setDataLoaded=_useState8[1],_useState9=Object(react.useState)({cuttingDimensions:{name:"Распил/Габариты",visibility:["ROLE_ADMIN"],active:!0,previous:null},milling:{name:"Фрезеровка/Точение",visibility:["ROLE_ADMIN"],active:!1,previous:"cuttingDimensions"},harding:{name:"Закалка",visibility:["ROLE_ADMIN"],active:!1,previous:"milling"},grinding:{name:"Шлифовка",visibility:["ROLE_ADMIN"],active:!1,previous:"harding"},erosion:{name:"Эрозия",visibility:["ROLE_ADMIN"],active:!1,previous:"grinding"}}),_useState10=slicedToArray_default()(_useState9,2),statuses=_useState10[0],setStatuses=_useState10[1];function _loadDrafts(){return(_loadDrafts=asyncToGenerator_default()(regenerator_default.a.mark((function _callee(){var newDrafts;return regenerator_default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:newDrafts=[],setIsLoading(!0),Object(Stamp.i)().then((function(response){return response.json()})).then((function(response){response.map((function(item){return item.stampParts.filter((function(stamp){return"completed"!==stamp.color})).map((function(stamp){newDrafts.push(Object.assign({},stamp,{type:"Stamp",itemId:item.id,status:item.status}))}))})),setIsLoading(!1),setDrafts([].concat(newDrafts)),setDataLoaded(!0)})).catch((function(error){console.log(error),setIsLoading(!1)}));case 3:case"end":return _context.stop()}}),_callee)})))).apply(this,arguments)}return Object(react.useEffect)((function(){if(document.title="Очередь инструментального производства",dataLoaded){var temp=[];Object.entries(statuses).map((function(status){return temp.push.apply(temp,toConsumableArray_default()(drafts.filter((function(draft){return!(!status[1].active||""!==draft[status[0]]&&null!==draft[status[0]]||!Object(rigsVariables.a)(draft,status[0]))}))))})),console.log(temp),setFilteredData([].concat(temp))}dataLoaded||isLoading||function loadDrafts(){return _loadDrafts.apply(this,arguments)}()}),[dataLoaded,drafts,statuses]),Object(jsx_runtime.jsx)("div",{className:"rigging-list",children:Object(jsx_runtime.jsxs)("div",{className:"main-window",children:[Object(jsx_runtime.jsx)("div",{className:"main-window__header main-window__header--full",children:Object(jsx_runtime.jsx)("div",{className:"main-window__title",children:"Очередь инструментального производства"})}),Object(jsx_runtime.jsx)("div",{className:"main-window__control-panel-wrapper",children:Object(jsx_runtime.jsx)("div",{className:"main-window__status-panel",children:Object.entries(statuses).map((function(status,index){return Object(jsx_runtime.jsx)("div",{className:"main-window__button ".concat(status[1].active?"":"main-window__button--inverted"," main-window__list-item--").concat(status[0]),onClick:function onClick(){var temp=statuses;Object.entries(statuses).map((function(status){temp[status[0]]=Object.assign({},temp[status[0]],{active:!1})})),temp[status[0]]=Object.assign({},status[1],{active:!status[0].active}),setStatuses(Object.assign({},temp))},children:status[1].name},index)}))})}),Object(jsx_runtime.jsx)(RiggingList_TableView_TableView,{isLoading:isLoading,data:filteredData})]})})};RiggingList_RiggingList_RiggingList.displayName="RiggingList",RiggingList_RiggingList_RiggingList.__docgenInfo={description:"",methods:[],displayName:"RiggingList"};__webpack_exports__.default=RiggingList_RiggingList_RiggingList;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Dispatcher\\Rigging\\RiggingList\\RiggingList.jsx"]={name:"RiggingList",docgenInfo:RiggingList_RiggingList_RiggingList.__docgenInfo,path:"src\\components\\MainPage\\Dispatcher\\Rigging\\RiggingList\\RiggingList.jsx"})}}]);