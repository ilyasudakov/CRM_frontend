(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{2648:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(40),__webpack_require__(241),__webpack_require__(213),__webpack_require__(0)),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(2652),__webpack_require__(1)),PlaceholderLoading=function PlaceholderLoading(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?3:_ref$items,itemClassName=_ref.itemClassName,_ref$minHeight=_ref.minHeight,minHeight=void 0===_ref$minHeight?"1.5rem":_ref$minHeight,placeholderContent=_ref.placeholderContent,wrapperClassName=_ref.wrapperClassName,_ref$itemStyles=_ref.itemStyles,itemStyles=void 0===_ref$itemStyles?{}:_ref$itemStyles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),elements=_useState2[0],setElements=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){for(var temp=[],count=items,i=1;i<=count;i++)temp.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading__item ".concat(itemClassName),style:Object.assign({minHeight:minHeight},itemStyles)}));setElements([].concat(temp))}),[]),placeholderContent?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:itemClassName,style:{minHeight:minHeight},children:placeholderContent},index)}))}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item){return item}))})};PlaceholderLoading.displayName="PlaceholderLoading",PlaceholderLoading.__docgenInfo={description:"",methods:[],displayName:"PlaceholderLoading",props:{items:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},minHeight:{defaultValue:{value:"'1.5rem'",computed:!1},type:{name:"string"},required:!1,description:""},itemStyles:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemClassName:{type:{name:"string"},required:!1,description:""},wrapperClassName:{type:{name:"string"},required:!1,description:""},placeholderContent:{type:{name:"any"},required:!1,description:""}}},__webpack_exports__.a=PlaceholderLoading,PlaceholderLoading.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,minHeight:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,itemClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,placeholderContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,itemStyles:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"]={name:"PlaceholderLoading",docgenInfo:PlaceholderLoading.__docgenInfo,path:"src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"})},2652:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2653);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2653:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,'@keyframes pulse-placeholder-loading{0%,100%{background-color:#e7e7e7}50%{background-color:#efefef}}@keyframes load{from{left:-150px}to{left:100%}}.placeholder-loading__item{height:1rem;background-color:#ddd;animation:pulse-placeholder-loading 1s infinite ease-in-out;position:relative;overflow:hidden;border-bottom:1px solid #bbb}.placeholder-loading__item::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n',""]),module.exports=exports},2654:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(40),__webpack_require__(0)),Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(988),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2657),__webpack_require__(1)),ControlPanel=function ControlPanel(props){var _props$styles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),isHidden=_useState2[0],setIsHidden=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"control-panel",style:Object.assign({},null!==(_props$styles=props.styles)&&void 0!==_props$styles?_props$styles:{}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__control-panel-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"control-panel__buttons",children:[props.sorting||null,props.content?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__button main-window__button--inverted main-window__button--filter",onClick:function onClick(){return setIsHidden((function(isHidden){return!isHidden}))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:props.panelName||"Фильтры"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__.a,{className:"main-window__img ".concat(isHidden?"":"main-window__img--rotated")})]}):null,props.buttons||null,props.itemsCount?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"main-window__amount_table",children:props.itemsCount}):null]}),isHidden?null:props.content]})})};ControlPanel.displayName="ControlPanel",ControlPanel.__docgenInfo={description:"",methods:[],displayName:"ControlPanel"},__webpack_exports__.a=ControlPanel,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"]={name:"ControlPanel",docgenInfo:ControlPanel.__docgenInfo,path:"src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"})},2657:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2658);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2658:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.control-panel{width:100%}.control-panel .main-window__control-panel-wrapper{padding-top:5px;padding-bottom:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__button{margin-top:5px;padding:8px 10px;font-size:85%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .switch{margin-top:5px;margin-right:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .searchbar{max-width:50%;margin-right:auto;padding:0;align-self:center;margin-left:-15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__amount_table{color:#666666;align-self:center;margin-top:5px;margin-left:auto}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window{padding:0}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel{width:max-content;margin-bottom:0;margin-right:10px;box-sizing:border-box;padding-top:calc(5px);position:relative;background-color:#ffffff}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel::before{width:100%;height:20px;position:absolute;content:\"Сортировка\";top:8px;left:10px;z-index:0;color:#777777;font-size:95%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px;padding-right:25px;padding-left:9px;height:100%;margin:0;box-sizing:border-box;min-width:150px;z-index:0;background-color:transparent;cursor:pointer;border:1px solid #cccccc;transition:background-color 100ms ease-in-out;-webkit-appearance:none;-moz-appearance:none;background:transparent;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'></path></svg>\");background-repeat:no-repeat;background-position-x:100%;background-position-y:calc(50% + 2px)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter{border-color:#cccccc;justify-content:space-between;padding:8px 8px !important;padding-right:5px !important}.control-panel .main-window__control-panel-wrapper .main-window__button--filter span{margin-right:20px;font-size:95%}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img{filter:none;max-width:18px;margin-top:1px;margin-right:0;transition:200ms cubic-bezier(0.23, 1, 0.32, 1)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img path:nth-child(1){transition:200ms cubic-bezier(0.23, 1, 0.32, 1);fill:#333333}@media (max-width: 768px){.control-panel .main-window__control-panel-wrapper{padding-left:15px;padding-right:15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{width:calc(100% + 30px);padding:0 15px;box-sizing:border-box;flex-wrap:nowrap;margin-left:-15px;overflow:auto;white-space:nowrap}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px !important;padding-right:25px !important;padding-left:9px !important;max-width:240px}}\n",""]),module.exports=exports},2659:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/edit.efe0dc2a.svg"},2672:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/delete.1ad59e4c.svg"},3459:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(3460);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3460:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.work{width:100%;display:flex;flex-direction:column;align-items:center}.work .main-window{padding-top:10px;padding-bottom:10px}.work .main-window__title{font-size:24px}.work .main-window__link{margin-bottom:15px}@media (max-width: 768px){.work .main-window__amount_table{margin-left:10px;align-self:flex-start}}\n",""]),module.exports=exports},3461:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(3462);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3462:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.tableview-work{display:flex;flex-direction:column;width:calc(100%)}.tableview-work .main-window{padding:0}.tableview-work .main-window__list-item span:nth-child(1){flex:0 1 50%}.tableview-work .main-window__list-item span:nth-child(2){flex:0 1 25%}.tableview-work .main-window__list-item .main-window__actions{flex:0 1 10%;flex-direction:row}\n",""]),module.exports=exports},3603:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var slicedToArray=__webpack_require__(15),slicedToArray_default=__webpack_require__.n(slicedToArray),react=__webpack_require__(0),SearchBar=(__webpack_require__(3459),__webpack_require__(636)),react_router_dom=(__webpack_require__(632),__webpack_require__(983),__webpack_require__(984),__webpack_require__(242),__webpack_require__(635),__webpack_require__(332),__webpack_require__(213),__webpack_require__(52)),edit=__webpack_require__(2659),edit_default=__webpack_require__.n(edit),tableview_delete=__webpack_require__(2672),delete_default=__webpack_require__.n(tableview_delete),PlaceholderLoading=(__webpack_require__(3461),__webpack_require__(1582),__webpack_require__(2648)),sorting=__webpack_require__(985),jsx_runtime=__webpack_require__(1),TableView_TableView_TableView=function TableView(props){var _useState=Object(react.useState)(!0),_useState2=slicedToArray_default()(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1];return Object(react.useEffect)((function(){props.data.length>0&&setIsLoading(!1)}),[props.data]),Object(jsx_runtime.jsx)("div",{className:"tableview-work",children:Object(jsx_runtime.jsx)("div",{className:"main-window",children:Object(jsx_runtime.jsxs)("div",{className:"main-window__list main-window__list--full",children:[Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(jsx_runtime.jsx)("span",{children:"Название"}),Object(jsx_runtime.jsx)("span",{children:"Тип"}),Object(jsx_runtime.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),isLoading&&Object(jsx_runtime.jsx)(PlaceholderLoading.a,{itemClassName:"main-window__list-item",minHeight:"35px",items:8}),function sortWorkItems(data){return function searchQuery(data){var query=props.searchQuery.toLowerCase();return data.filter((function(item){return item.work.toLowerCase().includes(query)||item.id.toString().includes(query)}))}(Object(sorting.a)(data,{fieldName:"work",direction:"asc"}))}(props.data).map((function(work,work_id){return Object(jsx_runtime.jsxs)("div",{className:"main-window__list-item",children:[Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Название:"}),work.work]}),Object(jsx_runtime.jsxs)("span",{children:[Object(jsx_runtime.jsx)("div",{className:"main-window__mobile-text",children:"Тип:"}),work.typeOfWork]}),Object(jsx_runtime.jsxs)("div",{className:"main-window__actions",children:[props.userHasAccess&&props.userHasAccess(["ROLE_ADMIN","ROLE_MANAGER"])&&Object(jsx_runtime.jsx)(react_router_dom.a,{to:"/work-list/edit/"+work.id,className:"main-window__action",title:"Редактирование",children:Object(jsx_runtime.jsx)("img",{className:"main-window__img",src:edit_default.a})}),props.userHasAccess&&props.userHasAccess(["ROLE_ADMIN"])&&Object(jsx_runtime.jsx)("div",{className:"main-window__action",title:"Удаление",onClick:function onClick(){return props.deleteItem(work.id)},children:Object(jsx_runtime.jsx)("img",{className:"main-window__img",src:delete_default.a})})]})]},work_id)}))]})})})};TableView_TableView_TableView.displayName="TableView",TableView_TableView_TableView.__docgenInfo={description:"",methods:[],displayName:"TableView"};var Work_TableView_TableView=TableView_TableView_TableView;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Work\\TableView\\TableView.jsx"]={name:"TableView",docgenInfo:TableView_TableView_TableView.__docgenInfo,path:"src\\components\\MainPage\\Work\\TableView\\TableView.jsx"});var WorkList=__webpack_require__(2735),FloatingPlus=__webpack_require__(638),ControlPanel=__webpack_require__(2654),Work_Work_Work=function Work(props){var _useState=Object(react.useState)([]),_useState2=slicedToArray_default()(_useState,2),work=_useState2[0],setWork=_useState2[1],_useState3=Object(react.useState)(""),_useState4=slicedToArray_default()(_useState3,2),searchQuery=_useState4[0],setSearchQuery=_useState4[1];Object(react.useEffect)((function(){document.title="Работы";var abortController=new AbortController;return loadWork(abortController.signal),function cancel(){abortController.abort()}}),[]);var loadWork=function loadWork(signal){Object(WorkList.d)(signal).then((function(response){return response.json()})).then((function(response){console.log(response),setWork(response)})).catch((function(error){console.log(error)}))};return Object(jsx_runtime.jsx)("div",{className:"work",children:Object(jsx_runtime.jsxs)("div",{className:"main-window",children:[Object(jsx_runtime.jsx)(FloatingPlus.a,{linkTo:"/work-list/new",visibility:["ROLE_ADMIN"]}),Object(jsx_runtime.jsx)("div",{className:"main-window__header main-window__header--full",children:Object(jsx_runtime.jsx)("div",{className:"main-window__title",children:"Работы"})}),Object(jsx_runtime.jsx)(SearchBar.a,{fullSize:!0,placeholder:"Введите название работы для поиска...",setSearchQuery:setSearchQuery}),Object(jsx_runtime.jsx)(ControlPanel.a,{itemsCount:"Всего: ".concat(work.length," записей")}),Object(jsx_runtime.jsx)(Work_TableView_TableView,{data:work,searchQuery:searchQuery,userHasAccess:props.userHasAccess,deleteItem:function deleteItem(id){Object(WorkList.b)(id).then((function(){return loadWork()}))}})]})})};Work_Work_Work.displayName="Work",Work_Work_Work.__docgenInfo={description:"",methods:[],displayName:"Work"};__webpack_exports__.default=Work_Work_Work;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Work\\Work.jsx"]={name:"Work",docgenInfo:Work_Work_Work.__docgenInfo,path:"src\\components\\MainPage\\Work\\Work.jsx"})}}]);