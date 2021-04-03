(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{2648:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(40),__webpack_require__(241),__webpack_require__(213),__webpack_require__(0)),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(2652),__webpack_require__(1)),PlaceholderLoading=function PlaceholderLoading(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?3:_ref$items,itemClassName=_ref.itemClassName,_ref$minHeight=_ref.minHeight,minHeight=void 0===_ref$minHeight?"1.5rem":_ref$minHeight,placeholderContent=_ref.placeholderContent,wrapperClassName=_ref.wrapperClassName,_ref$itemStyles=_ref.itemStyles,itemStyles=void 0===_ref$itemStyles?{}:_ref$itemStyles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),elements=_useState2[0],setElements=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){for(var temp=[],count=items,i=1;i<=count;i++)temp.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading__item ".concat(itemClassName),style:Object.assign({minHeight:minHeight},itemStyles)}));setElements([].concat(temp))}),[]),placeholderContent?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:itemClassName,style:{minHeight:minHeight},children:placeholderContent},index)}))}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item){return item}))})};PlaceholderLoading.displayName="PlaceholderLoading",PlaceholderLoading.__docgenInfo={description:"",methods:[],displayName:"PlaceholderLoading",props:{items:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},minHeight:{defaultValue:{value:"'1.5rem'",computed:!1},type:{name:"string"},required:!1,description:""},itemStyles:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemClassName:{type:{name:"string"},required:!1,description:""},wrapperClassName:{type:{name:"string"},required:!1,description:""},placeholderContent:{type:{name:"any"},required:!1,description:""}}},__webpack_exports__.a=PlaceholderLoading,PlaceholderLoading.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,minHeight:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,itemClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,placeholderContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,itemStyles:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"]={name:"PlaceholderLoading",docgenInfo:PlaceholderLoading.__docgenInfo,path:"src\\utils\\TableView\\PlaceholderLoading\\PlaceholderLoading.jsx"})},2652:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2653);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2653:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,'@keyframes pulse-placeholder-loading{0%,100%{background-color:#e7e7e7}50%{background-color:#efefef}}@keyframes load{from{left:-150px}to{left:100%}}.placeholder-loading__item{height:1rem;background-color:#ddd;animation:pulse-placeholder-loading 1s infinite ease-in-out;position:relative;overflow:hidden;border-bottom:1px solid #bbb}.placeholder-loading__item::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n',""]),module.exports=exports},2654:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(40),__webpack_require__(0)),Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(988),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2657),__webpack_require__(1)),ControlPanel=function ControlPanel(props){var _props$styles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),isHidden=_useState2[0],setIsHidden=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"control-panel",style:Object.assign({},null!==(_props$styles=props.styles)&&void 0!==_props$styles?_props$styles:{}),children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__control-panel-wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"control-panel__buttons",children:[props.sorting||null,props.content?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"main-window__button main-window__button--inverted main-window__button--filter",onClick:function onClick(){return setIsHidden((function(isHidden){return!isHidden}))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:props.panelName||"Фильтры"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Assets_tableview_chevron_down_inline_svg__WEBPACK_IMPORTED_MODULE_3__.a,{className:"main-window__img ".concat(isHidden?"":"main-window__img--rotated")})]}):null,props.buttons||null,props.itemsCount?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"main-window__amount_table",children:props.itemsCount}):null]}),isHidden?null:props.content]})})};ControlPanel.displayName="ControlPanel",ControlPanel.__docgenInfo={description:"",methods:[],displayName:"ControlPanel"},__webpack_exports__.a=ControlPanel,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"]={name:"ControlPanel",docgenInfo:ControlPanel.__docgenInfo,path:"src\\utils\\MainWindow\\ControlPanel\\ControlPanel.jsx"})},2657:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2658);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2658:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.control-panel{width:100%}.control-panel .main-window__control-panel-wrapper{padding-top:5px;padding-bottom:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{display:flex;flex-direction:row;flex-wrap:wrap;width:100%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__button{margin-top:5px;padding:8px 10px;font-size:85%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .switch{margin-top:5px;margin-right:10px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .searchbar{max-width:50%;margin-right:auto;padding:0;align-self:center;margin-left:-15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__amount_table{color:#666666;align-self:center;margin-top:5px;margin-left:auto}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window{padding:0}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel{width:max-content;margin-bottom:0;margin-right:10px;box-sizing:border-box;padding-top:calc(5px);position:relative;background-color:#ffffff}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel::before{width:100%;height:20px;position:absolute;content:\"Сортировка\";top:8px;left:10px;z-index:0;color:#777777;font-size:95%}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px;padding-right:25px;padding-left:9px;height:100%;margin:0;box-sizing:border-box;min-width:150px;z-index:0;background-color:transparent;cursor:pointer;border:1px solid #cccccc;transition:background-color 100ms ease-in-out;-webkit-appearance:none;-moz-appearance:none;background:transparent;background-image:url(\"data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'></path></svg>\");background-repeat:no-repeat;background-position-x:100%;background-position-y:calc(50% + 2px)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter{border-color:#cccccc;justify-content:space-between;padding:8px 8px !important;padding-right:5px !important}.control-panel .main-window__control-panel-wrapper .main-window__button--filter span{margin-right:20px;font-size:95%}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img{filter:none;max-width:18px;margin-top:1px;margin-right:0;transition:200ms cubic-bezier(0.23, 1, 0.32, 1)}.control-panel .main-window__control-panel-wrapper .main-window__button--filter .main-window__img path:nth-child(1){transition:200ms cubic-bezier(0.23, 1, 0.32, 1);fill:#333333}@media (max-width: 768px){.control-panel .main-window__control-panel-wrapper{padding-left:15px;padding-right:15px}.control-panel .main-window__control-panel-wrapper .control-panel__buttons{width:calc(100% + 30px);padding:0 15px;box-sizing:border-box;flex-wrap:nowrap;margin-left:-15px;overflow:auto;white-space:nowrap}.control-panel .main-window__control-panel-wrapper .control-panel__buttons .main-window__sort-panel select{padding-top:18px !important;padding-right:25px !important;padding-left:9px !important;max-width:240px}}\n",""]),module.exports=exports},2659:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/edit.efe0dc2a.svg"},2672:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/delete.1ad59e4c.svg"},2692:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/no_img.60f1f667.png"},2710:function(module,__webpack_exports__,__webpack_require__){"use strict";var Assets_priceList_no_img_png__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2692),Assets_priceList_no_img_png__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(Assets_priceList_no_img_png__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(2714),__webpack_require__(1)),ImgLoader=function ImgLoader(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"img-loader",children:props.imgSrc||""===props.imgSrc?""===props.imgSrc&&props.noPhotoTemplate?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:props.imgClass,src:Assets_priceList_no_img_png__WEBPACK_IMPORTED_MODULE_0___default.a,alt:""}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img",{className:props.imgClass,src:props.imgSrc,alt:"",loading:"lazy"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"img-loader__img--placeholder ".concat(props.imgClass)})})};ImgLoader.displayName="ImgLoader",ImgLoader.__docgenInfo={description:"",methods:[],displayName:"ImgLoader"},__webpack_exports__.a=ImgLoader,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\TableView\\ImgLoader\\ImgLoader.jsx"]={name:"ImgLoader",docgenInfo:ImgLoader.__docgenInfo,path:"src\\utils\\TableView\\ImgLoader\\ImgLoader.jsx"})},2714:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2715);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2715:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,':root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}@keyframes pulse{0%{border-color:#dbdbdb;background-color:#dbdbdb}50%{border-color:#c5c5c5;background-color:#c5c5c5}100%{border-color:#dbdbdb;background-color:#dbdbdb}}@keyframes load{from{background:linear-gradient(to right, transparent 0%, #fafafa 50%, transparent 100%);left:-150px}to{background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);left:100%}}.img-loader .img-loader__img--placeholder{width:80px;height:80px;position:relative;border-radius:5px;animation:pulse 1s infinite ease-in-out;position:relative;overflow:hidden}.img-loader .img-loader__img--placeholder::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}.img-loader .sk-circle{width:80px;height:80px;position:relative}.img-loader .sk-circle .sk-child{width:100%;height:100%;position:absolute;left:0;top:0}.img-loader .sk-circle .sk-child:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#4293b6;border-radius:100%;-webkit-animation:sk-circleBounceDelay 1.2s infinite ease-in-out both;animation:sk-circleBounceDelay 1.2s infinite ease-in-out both}.img-loader .sk-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.img-loader .sk-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.img-loader .sk-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.img-loader .sk-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.img-loader .sk-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.img-loader .sk-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.img-loader .sk-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.img-loader .sk-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.img-loader .sk-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.img-loader .sk-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.img-loader .sk-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.img-loader .sk-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.img-loader .sk-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.img-loader .sk-circle .sk-circle4:before{-webkit-animation-delay:-0.9s;animation-delay:-0.9s}.img-loader .sk-circle .sk-circle5:before{-webkit-animation-delay:-0.8s;animation-delay:-0.8s}.img-loader .sk-circle .sk-circle6:before{-webkit-animation-delay:-0.7s;animation-delay:-0.7s}.img-loader .sk-circle .sk-circle7:before{-webkit-animation-delay:-0.6s;animation-delay:-0.6s}.img-loader .sk-circle .sk-circle8:before{-webkit-animation-delay:-0.5s;animation-delay:-0.5s}.img-loader .sk-circle .sk-circle9:before{-webkit-animation-delay:-0.4s;animation-delay:-0.4s}.img-loader .sk-circle .sk-circle10:before{-webkit-animation-delay:-0.3s;animation-delay:-0.3s}.img-loader .sk-circle .sk-circle11:before{-webkit-animation-delay:-0.2s;animation-delay:-0.2s}.img-loader .sk-circle .sk-circle12:before{-webkit-animation-delay:-0.1s;animation-delay:-0.1s}@-webkit-keyframes sk-circleBounceDelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes sk-circleBounceDelay{0%,80%,100%{-webkit-transform:scale(0);transform:scale(0)}40%{-webkit-transform:scale(1);transform:scale(1)}}.img-loader .lds-roller{display:inline-block;position:relative;width:80px;height:80px}.img-loader .lds-roller div{animation:lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;transform-origin:40px 40px}.img-loader .lds-roller div:after{content:" ";display:block;position:absolute;width:7px;height:7px;border-radius:50%;background:#4293b6;margin:-4px 0 0 -4px}.img-loader .lds-roller div:nth-child(1){animation-delay:-0.036s}.img-loader .lds-roller div:nth-child(1):after{top:63px;left:63px}.img-loader .lds-roller div:nth-child(2){animation-delay:-0.072s}.img-loader .lds-roller div:nth-child(2):after{top:68px;left:56px}.img-loader .lds-roller div:nth-child(3){animation-delay:-0.108s}.img-loader .lds-roller div:nth-child(3):after{top:71px;left:48px}.img-loader .lds-roller div:nth-child(4){animation-delay:-0.144s}.img-loader .lds-roller div:nth-child(4):after{top:72px;left:40px}.img-loader .lds-roller div:nth-child(5){animation-delay:-0.18s}.img-loader .lds-roller div:nth-child(5):after{top:71px;left:32px}.img-loader .lds-roller div:nth-child(6){animation-delay:-0.216s}.img-loader .lds-roller div:nth-child(6):after{top:68px;left:24px}.img-loader .lds-roller div:nth-child(7){animation-delay:-0.252s}.img-loader .lds-roller div:nth-child(7):after{top:63px;left:17px}.img-loader .lds-roller div:nth-child(8){animation-delay:-0.288s}.img-loader .lds-roller div:nth-child(8):after{top:56px;left:12px}@keyframes lds-roller{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}\n',""]),module.exports=exports},3073:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(1583),__webpack_require__(1581),__webpack_require__(213),__webpack_require__(241),__webpack_require__(632),__webpack_require__(282),__webpack_require__(0)),react_router_dom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(177),Assets_tableview_add_item_png__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(3280),Assets_tableview_add_item_png__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(Assets_tableview_add_item_png__WEBPACK_IMPORTED_MODULE_10__),Assets_tableview_add_cont_png__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(3281),Assets_tableview_add_cont_png__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(Assets_tableview_add_cont_png__WEBPACK_IMPORTED_MODULE_11__),Utils_TableView_ImgLoader_ImgLoader_jsx__WEBPACK_IMPORTED_MODULE_13__=(__webpack_require__(3282),__webpack_require__(2710)),Assets_tableview_view_svg__WEBPACK_IMPORTED_MODULE_15__=(__webpack_require__(1582),__webpack_require__(3284)),Assets_tableview_view_svg__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(Assets_tableview_view_svg__WEBPACK_IMPORTED_MODULE_15__),Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(2659),Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_16___default=__webpack_require__.n(Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_16__),Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(2672),Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_17___default=__webpack_require__.n(Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_17__),Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(982),Utils_TableView_PlaceholderLoading_PlaceholderLoading_jsx__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(2648),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(1),TableView=function TableView(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)(!0),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_8__.useState)([]),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3,2),productsVisible=_useState4[0],setProductsVisible=_useState4[1],isProductsHidden=function isProductsHidden(index){index=Number.parseInt(index);var check=!0;return productsVisible.map((function(element){element.id===index&&(check=element.hidden)})),check};return Object(react__WEBPACK_IMPORTED_MODULE_8__.useEffect)((function(){var temp=[];props.categories.map((function(element){return temp.push({id:element.id,hidden:!0})})),setProductsVisible([].concat(temp)),props.closeWindow&&props.setShowWindow(!1),props.categories.length>0&&setIsLoading(!1)}),[props.categories,props.closeWindow]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"tableview_products",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__list main-window__list--full",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:"Категория"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),props.categories.map((function(category){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__list-item",onClick:function onClick(){setProductsVisible(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_18__.c)(productsVisible,category.id)))},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__mobile-text",children:"Категория:"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:category.category}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{className:"tableview_products__items-count",children:"".concat(props.products.filter((function(product){return product.category===category.category})).length)})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__actions",children:[props.userHasAccess&&props.userHasAccess(["ROLE_ADMIN","ROLE_MANAGER"])&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__action",title:"Редактирование категории",onClick:function onClick(){props.history.push("/products/category/edit/"+category.id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img",src:Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_16___default.a})}),props.userHasAccess&&props.userHasAccess(["ROLE_ADMIN"])&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__action",onClick:null,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img",src:Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_17___default.a})})]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:isProductsHidden(category.id)?"main-window__list-options main-window__list-options--hidden":"main-window__list-options",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__list",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__list-item main-window__list-item--header",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:"Фото"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:"Название"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:"Вес"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:"Место производства"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("span",{children:"Комментарий"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__actions",children:"Действия"})]}),isLoading&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(Utils_TableView_PlaceholderLoading_PlaceholderLoading_jsx__WEBPACK_IMPORTED_MODULE_19__.a,{itemClassName:"main-window__list-item",minHeight:"35px",items:8}),props.products.map((function(product,product_id){return product.category===category.category&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__list-item",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__mobile-text",children:"Фото:"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(Utils_TableView_ImgLoader_ImgLoader_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{imgSrc:product.photo,noPhotoTemplate:!0,imgClass:"tableview_products__product_img"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__mobile-text",children:"Название:"}),product.name]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__mobile-text",children:"Вес:"}),Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_18__.a)(product.weight)]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__mobile-text",children:"Место производства:"}),product.productionLocation]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("span",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__mobile-text",children:"Комментарий:"}),product.comment]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__actions",children:[props.selectProduct?null:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__action",title:"Просмотр продукции",onClick:function onClick(){return props.history.push("/products/view/"+product.id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img",src:Assets_tableview_view_svg__WEBPACK_IMPORTED_MODULE_15___default.a})}),props.userHasAccess&&props.userHasAccess(["ROLE_ADMIN","ROLE_MANAGER"])&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__action",title:"Редактирование продукции",onClick:function onClick(){return props.history.push("/products/edit/"+product.id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img",src:Assets_tableview_edit_svg__WEBPACK_IMPORTED_MODULE_16___default.a})}),props.userHasAccess&&props.userHasAccess(["ROLE_ADMIN"])&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{className:"main-window__action",title:"Удаление продукции",onClick:props.deleteItem,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img","data-id":product.id,src:Assets_tableview_delete_svg__WEBPACK_IMPORTED_MODULE_17___default.a})}),props.selectProduct&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)("div",{className:"main-window__action main-window__action--row",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{"data-id":product.id,title:"Выбрать и продолжить",className:"main-window__action main-window__action--continue",onClick:function onClick(){props.selectProduct(product.id,product.name,product.id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img",src:Assets_tableview_add_cont_png__WEBPACK_IMPORTED_MODULE_11___default.a,alt:""})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("div",{"data-id":product.id,title:"Выбрать и закрыть",className:"main-window__action main-window__action--close",onClick:function onClick(){props.selectProduct(product.id,product.name,product.id),props.setCloseWindow(!props.closeWindow)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("img",{className:"main-window__img",src:Assets_tableview_add_item_png__WEBPACK_IMPORTED_MODULE_10___default.a,alt:""})})]})]})]},product_id)}))]})})]})}))]})})};TableView.displayName="TableView",TableView.__docgenInfo={description:"",methods:[],displayName:"TableView"},__webpack_exports__.a=Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.j)(TableView),"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Products\\TableView\\TableView.jsx"]={name:"TableView",docgenInfo:TableView.__docgenInfo,path:"src\\components\\MainPage\\Products\\TableView\\TableView.jsx"})},3280:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/add_item.08eba0e6.png"},3281:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/add_cont.9bf680a8.png"},3282:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(3283);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3283:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.tableview_products{display:flex;flex-direction:column;width:100%;padding-top:0}.tableview_products .main-window__list{width:100%}.tableview_products .main-window__list .main-window__list-item span{font-size:105%}.tableview_products .main-window__list .main-window__list-item span:nth-child(1){flex:0 1 80%}.tableview_products .main-window__list .main-window__list-item .main-window__actions{font-size:110%;flex:0 1 10%;flex-direction:row}.tableview_products .main-window__list .main-window__list-item:not(.main-window__list-item--header) span{cursor:pointer;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;margin-bottom:0;padding-top:5px;padding-bottom:5px}.tableview_products .main-window__list .main-window__list-item:not(.main-window__list-item--header) span span{width:fit-content;white-space:nowrap;flex:none;padding-left:0;margin-right:5px}.tableview_products .main-window__list .main-window__list-item:not(.main-window__list-item--header) span .tableview_products__items-count{font-size:90%;align-self:flex-start;padding:0;color:#888888;transition:100ms ease-in-out;font-size:100%;align-self:center}.tableview_products .main-window__list .main-window__list-item:not(.main-window__list-item--header) span .main-window__mobile-text{font-weight:normal}.tableview_products .main-window__list .main-window__list-options{flex-direction:column}.tableview_products .main-window__list .main-window__list-options .main-window__list{width:calc(100% - 15px)}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item{padding:5px 10px}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item span{font-size:110%;cursor:auto;padding:5px 10px;font-weight:normal;line-height:unset}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(1){flex:0 1 10%;min-width:90px;max-width:100px;font-weight:normal;padding:0px 10px}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(2){flex:0 1 30%}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(3){flex:0 1 10%;max-width:80px}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item .main-window__actions{flex:0 1 12%;flex-wrap:wrap}.tableview_products .main-window__list .main-window__list-options .main-window__list .main-window__list-item .main-window__actions .main-window__action--row .main-window__action:hover{background-color:#bbbbbb}.tableview_products__product_img{max-width:90px;max-height:90px;border-radius:3px}.tableview_products .main-window__action--row{display:flex;flex-direction:row;width:100%}.tableview_products .main-window__action--row .main-window__action{margin-bottom:0;font-size:100% !important;margin-right:0 !important}.tableview_products .main-window__action--row .main-window__action:nth-of-type(1){background-color:#666666;border-top-right-radius:0;border-bottom-right-radius:0;display:flex;justify-content:center;align-items:center}.tableview_products .main-window__action--row .main-window__action:nth-of-type(2){background-color:green;border-top-left-radius:0;border-bottom-left-radius:0;display:flex;justify-content:center;align-items:center}.tableview_products .main-window__action--row .main-window__img{margin:0;height:15px;width:auto !important;filter:none !important;transform:scale(1) !important}@media (max-width: 768px){.main-window__list{margin-top:-20px !important}.main-window__list .main-window__list-item:not(.main-window__list-item--header) span{font-size:110%}.main-window__list .main-window__list-item:not(.main-window__list-item--header) span:nth-child(1){padding:5px 10px}.main-window__list .main-window__list-item:not(.main-window__list-item--header) span span{white-space:normal !important;flex:0 1 100% !important;max-width:fit-content;margin-left:auto;line-height:normal !important}.main-window__list .main-window__list-item:not(.main-window__list-item--header) span .tableview_products__items-count{max-width:fit-content;margin-left:0;font-size:100% !important;align-self:center !important;color:#aaaaaa !important}.main-window__list .main-window__list-options .main-window__list{margin-top:0 !important}.main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(1){flex:0 1 100% !important;max-width:none !important}.main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(1) .main-window__mobile-text{margin-right:auto}.main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(1) .img-loader{width:100%;display:flex;justify-content:center}.main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(1) .tableview_products__product_img{min-width:150px;max-height:none}.main-window__list .main-window__list-options .main-window__list .main-window__list-item span:nth-child(3){max-width:none !important}.main-window__list .main-window__list-options .main-window__list .main-window__list-item span .main-window__mobile-text{margin-right:auto}.main-window__list .main-window__list-options .main-window__list .main-window__list-item .main-window__actions .main-window__action--row{width:fit-content}.main-window__list .main-window__list-options .main-window__list .main-window__list-item .main-window__actions .main-window__action--row .main-window__action{padding:10px}}\n",""]),module.exports=exports},3284:function(module,exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/view.ea032517.svg"}}]);