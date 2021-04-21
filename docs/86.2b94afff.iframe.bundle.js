(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{3380:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(37),_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(18),_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(20),_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__),react__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(51),__webpack_require__(165),__webpack_require__(134),__webpack_require__(83),__webpack_require__(23),__webpack_require__(0)),API_Products_products__WEBPACK_IMPORTED_MODULE_12__=(__webpack_require__(3381),__webpack_require__(2854),__webpack_require__(683)),Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2851),_SelectCategory_SelectCategory_jsx__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(3097),Components_Form_FileUploader_FileUploader_jsx__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(677),Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(63),Components_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(153),_PackagingPage_SelectPackaging_SelectPackaging_jsx__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(2981),API_Products_packaging_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(2874),Utils_hooks__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(472),_objects_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(2900),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(1),NewProduct=function NewProduct(props){var _useForm=Object(Utils_hooks__WEBPACK_IMPORTED_MODULE_20__.a)(_objects_js__WEBPACK_IMPORTED_MODULE_21__.b),_handleInputChange=_useForm.handleInputChange,formInputs=_useForm.formInputs,formErrors=_useForm.formErrors,setFormErrors=_useForm.setFormErrors,formIsValid=_useForm.formIsValid,errorWindow=_useForm.errorWindow,_useState=Object(react__WEBPACK_IMPORTED_MODULE_9__.useState)(!1),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_9__.useEffect)((function(){document.title="Создание продукции"}),[]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("form",{className:"main-form__form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__header main-form__header--full",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__title",children:"Новая продукция"})}),errorWindow,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{inputName:"Наименование",required:!0,error:formErrors.name,name:"name",handleInputChange:function handleInputChange(_ref){var target=_ref.target;return _handleInputChange("name",target.value)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_SelectCategory_SelectCategory_jsx__WEBPACK_IMPORTED_MODULE_14__.a,{inputName:"Категория",required:!0,error:formErrors.category,name:"category",handleCategoryChange:function handleCategoryChange(category){return _handleInputChange("category",category)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"main-form__fieldset",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__group-name",children:"Характеристика продукции"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{inputName:"Артикул",defaultValue:formInputs.vendor,type:"text",name:"vendor",handleInputChange:function handleInputChange(_ref2){var target=_ref2.target;return _handleInputChange("vendor",target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{inputName:"Вес изделия",required:!0,error:formErrors.weight,type:"number",name:"weight",handleInputChange:function handleInputChange(_ref3){var target=_ref3.target;return _handleInputChange("weight",target.value)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{inputName:"Описание",type:"text",name:"description",handleInputChange:function handleInputChange(_ref4){var target=_ref4.target;return _handleInputChange("description",target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{inputName:"Штрихкод",type:"text",name:"barcode",handleInputChange:function handleInputChange(_ref5){var target=_ref5.target;return _handleInputChange("barcode",target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_PackagingPage_SelectPackaging_SelectPackaging_jsx__WEBPACK_IMPORTED_MODULE_18__.a,{required:!0,onChange:function onChange(packages){return _handleInputChange("packages",packages)},errorName:"packages",errorsArr:formErrors,setErrorsArr:setFormErrors,error:formErrors.packages})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_13__.a,{inputName:"Комментарий",name:"comment",handleInputChange:function handleInputChange(_ref6){var target=_ref6.target;return _handleInputChange("comment",target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"main-form__item",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__input_name",children:"Место производства*"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__input_field",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("select",{name:"productionLocation",onChange:function onChange(_ref7){var target=_ref7.target;return _handleInputChange("productionLocation",target.value)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("option",{children:"ЦехЛЭМЗ"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("option",{children:"ЦехЛиговский"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("option",{children:"ЦехЛепсари"})]})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"main-form__item",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__input_name",children:"Фотография"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_FileUploader_FileUploader_jsx__WEBPACK_IMPORTED_MODULE_15__.a,{onChange:function(){var _ref8=_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark((function _callee(result){var downgraded;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(""===result[0]||!result[0]){_context.next=6;break}return _context.next=3,Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_16__.l)(result[0],"jpeg",.3);case 3:_context.t0=_context.sent,_context.next=7;break;case 6:_context.t0="";case 7:downgraded=_context.t0,_handleInputChange("photo",downgraded);case 9:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref8.apply(this,arguments)}}(),type:"readAsDataURL",defaultValue:""!==formInputs.photo?[formInputs.photo]:[],error:formErrors.photo,hideError:function hideError(){return setFormErrors(Object.assign({},formErrors,{photo:!1}))}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div",{className:"main-form__input_hint",children:"* - поля, обязательные для заполнения"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div",{className:"main-form__buttons main-form__buttons--full",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_17__.a,{className:"main-form__submit main-form__submit--inverted",inverted:!0,onClick:function onClick(){return props.history.push("/products")},text:"Вернуться назад"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Components_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_17__.a,{text:"Добавить продукцию",isLoading:isLoading,className:"main-form__submit",onClick:function handleSubmit(){console.log(formInputs),formIsValid()&&(setIsLoading(!0),Object(API_Products_products__WEBPACK_IMPORTED_MODULE_12__.a)(formInputs).then((function(res){return res.json()})).then((function(res){return Object(API_Products_packaging_js__WEBPACK_IMPORTED_MODULE_19__.b)({packings:_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(formInputs.packages.map((function(item){return item.id})))},res.id)})).then((function(){return props.history.push("/products")})).catch((function(){setIsLoading(!1),alert("Ошибка при добавлении записи")})))}})]})]})})};NewProduct.displayName="NewProduct",NewProduct.__docgenInfo={description:"",methods:[],displayName:"NewProduct"},__webpack_exports__.default=NewProduct,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainPage/Products/NewProduct/NewProduct.jsx"]={name:"NewProduct",docgenInfo:NewProduct.__docgenInfo,path:"src/components/MainPage/Products/NewProduct/NewProduct.jsx"})},3381:function(module,exports,__webpack_require__){var api=__webpack_require__(45),content=__webpack_require__(3382);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3382:function(module,exports,__webpack_require__){(exports=__webpack_require__(46)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}\n",""]),module.exports=exports}}]);