(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{2653:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(41),__webpack_require__(213),__webpack_require__(181),__webpack_require__(0)),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(2657),__webpack_require__(1)),PlaceholderLoading=function PlaceholderLoading(_ref){var _ref$items=_ref.items,items=void 0===_ref$items?3:_ref$items,itemClassName=_ref.itemClassName,_ref$minHeight=_ref.minHeight,minHeight=void 0===_ref$minHeight?"1.5rem":_ref$minHeight,placeholderContent=_ref.placeholderContent,wrapperClassName=_ref.wrapperClassName,_ref$itemStyles=_ref.itemStyles,itemStyles=void 0===_ref$itemStyles?{}:_ref$itemStyles,_useState=Object(react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),elements=_useState2[0],setElements=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_4__.useEffect)((function(){for(var temp=[],count=items,i=1;i<=count;i++)temp.push(Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading__item ".concat(itemClassName),style:Object.assign({minHeight:minHeight},itemStyles)}));setElements([].concat(temp))}),[]),placeholderContent?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item,index){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:itemClassName,style:{minHeight:minHeight},children:placeholderContent},index)}))}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div",{className:"placeholder-loading ".concat(wrapperClassName),children:elements.map((function(item){return item}))})};PlaceholderLoading.displayName="PlaceholderLoading",PlaceholderLoading.__docgenInfo={description:"",methods:[],displayName:"PlaceholderLoading",props:{items:{defaultValue:{value:"3",computed:!1},type:{name:"number"},required:!1,description:""},minHeight:{defaultValue:{value:"'1.5rem'",computed:!1},type:{name:"string"},required:!1,description:""},itemStyles:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},itemClassName:{type:{name:"string"},required:!1,description:""},wrapperClassName:{type:{name:"string"},required:!1,description:""},placeholderContent:{type:{name:"any"},required:!1,description:""}}},__webpack_exports__.a=PlaceholderLoading,PlaceholderLoading.propTypes={items:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,minHeight:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,itemClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,wrapperClassName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,placeholderContent:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any,itemStyles:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/TableView/PlaceholderLoading/PlaceholderLoading.jsx"]={name:"PlaceholderLoading",docgenInfo:PlaceholderLoading.__docgenInfo,path:"src/utils/TableView/PlaceholderLoading/PlaceholderLoading.jsx"})},2657:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2658);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2658:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,'@keyframes pulse-placeholder-loading{0%,100%{background-color:#e7e7e7}50%{background-color:#efefef}}@keyframes load{from{left:-150px}to{left:100%}}.placeholder-loading__item{height:1rem;background-color:#ddd;animation:pulse-placeholder-loading 1s infinite ease-in-out;position:relative;overflow:hidden;border-bottom:1px solid #bbb}.placeholder-loading__item::after{content:"";display:block;position:absolute;left:-150px;top:0;height:100%;width:150px;background:linear-gradient(to right, transparent 0%, #e8e8e8 50%, transparent 100%);animation:load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite}\n',""]),module.exports=exports},3533:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(65),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(181),__webpack_require__(640),__webpack_require__(444),__webpack_require__(0)),_App_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(214),Utils_RequestsAPI_Clients_price_list_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2805),styled_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(23),Utils_TableView_TableActions_Actions_DeleteItemAction_jsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(647),Utils_TableView_PlaceholderLoading_PlaceholderLoading_jsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(2653),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(1),PricesListPage=function PricesListPage(_ref){var onSelect=_ref.onSelect,_useState=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)([]),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState,2),ltdData=_useState2[0],setLtdData=_useState2[1],userContext=Object(react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_App_js__WEBPACK_IMPORTED_MODULE_6__.a),_useState3=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(!0),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3,2),isLoading=_useState4[0],setIsLoading=_useState4[1],loadLTDList=function loadLTDList(){Object(Utils_RequestsAPI_Clients_price_list_js__WEBPACK_IMPORTED_MODULE_7__.c)().then((function(_ref2){var data=_ref2.data;setLtdData(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data)),setIsLoading(!1)})).catch((function(error){setIsLoading(!1),console.log(error)}))};Object(react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((function(){loadLTDList()}),[]);var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_8__.b.div.withConfig({displayName:"PricesListPage__Wrapper",componentId:"sc-157zut5-0"})(["display:flex;flex-direction:column;width:100%;"]),Text=styled_components__WEBPACK_IMPORTED_MODULE_8__.b.div.withConfig({displayName:"PricesListPage__Text",componentId:"sc-157zut5-1"})(["margin-bottom:5px;font-size:1rem;color:#777;"]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(Wrapper,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Text,{children:"Вы можете выбрать загруженные прайсы"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(TableView,{data:ltdData,deleteItem:function deleteItem(id){Object(Utils_RequestsAPI_Clients_price_list_js__WEBPACK_IMPORTED_MODULE_7__.b)(id).then((function(){return loadLTDList()}))},userHasAccess:userContext.userHasAccess,isLoading:isLoading,onSelect:onSelect})]})};PricesListPage.displayName="PricesListPage",PricesListPage.__docgenInfo={description:"",methods:[],displayName:"PricesListPage"},__webpack_exports__.default=PricesListPage;var TableView=function TableView(_ref3){var data=_ref3.data,deleteItem=_ref3.deleteItem,isLoading=_ref3.isLoading,setShowWindow=_ref3.setShowWindow,selectedItem=_ref3.selectedItem,onSelect=_ref3.onSelect;Object(react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((function(){setShowWindow&&setShowWindow(!1)}),[selectedItem]);var List=styled_components__WEBPACK_IMPORTED_MODULE_8__.b.div.withConfig({displayName:"PricesListPage__List",componentId:"sc-157zut5-2"})(["display:flex;margin-bottom:20px;width:100%;"]),ListItem=styled_components__WEBPACK_IMPORTED_MODULE_8__.b.div.withConfig({displayName:"PricesListPage__ListItem",componentId:"sc-157zut5-3"})(["display:flex;flex-direction:column;justify-content:flex-start;align-items:center;margin-right:10px;margin-bottom:5px;border:1px solid #ccc;border-radius:5px;min-height:80px;cursor:pointer;background-color:#fff;transition:100ms ease-in-out;&:hover{background-color:#eee;}"]),ItemBar=styled_components__WEBPACK_IMPORTED_MODULE_8__.b.div.withConfig({displayName:"PricesListPage__ItemBar",componentId:"sc-157zut5-4"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:flex-end;min-width:200px;height:100%;padding:8px 20px;padding-right:10px;font-size:0.9rem;color:#777;"]),FilenameColumn=styled_components__WEBPACK_IMPORTED_MODULE_8__.b.span.withConfig({displayName:"PricesListPage__FilenameColumn",componentId:"sc-157zut5-5"})(["align-self:flex-start;"]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(List,{className:"prices__tableview",children:isLoading?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Utils_TableView_PlaceholderLoading_PlaceholderLoading_jsx__WEBPACK_IMPORTED_MODULE_10__.a,{itemClassName:"prices__item",minHeight:"30px",items:3}):data.map((function(item){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(ListItem,{onClick:onSelect?function(){return onSelect(item)}:null,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(ItemBar,{title:"Выбрать ".concat(item.uri.split("downloadFile/")[1]),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(FilenameColumn,{children:item.uri.split("downloadFile/")[1]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(Utils_TableView_TableActions_Actions_DeleteItemAction_jsx__WEBPACK_IMPORTED_MODULE_9__.a,{title:"Удаление прайса",onClick:function onClick(){return deleteItem(item.id)}})]})},item.id)}))})};TableView.displayName="TableView","undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainPage/PriceList/PricesListPage/PricesListPage.jsx"]={name:"PricesListPage",docgenInfo:PricesListPage.__docgenInfo,path:"src/components/MainPage/PriceList/PricesListPage/PricesListPage.jsx"})}}]);