(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{2647:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(23),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(282),__webpack_require__(40),__webpack_require__(2)),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2649),__webpack_require__(1)),InputText=function InputText(_ref){var inputName=_ref.inputName,required=_ref.required,error=_ref.error,type=_ref.type,name=_ref.name,handleInputChange=_ref.handleInputChange,defaultValue=_ref.defaultValue,readOnly=_ref.readOnly,disabled=_ref.disabled,setErrorsArr=_ref.setErrorsArr,errorsArr=_ref.errorsArr;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"input_text",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"input_text__input",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"input_text__input_name",children:inputName+(required?"*":"")}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:!0===error?"input_text__input_field input_text__input_field--error":"input_text__input_field",children:"textarea"===type?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea",{name:name,autoComplete:"off",onChange:handleInputChange,value:defaultValue,readOnly:readOnly,disabled:disabled}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:type||"text",name:name,autoComplete:"off",onChange:handleInputChange,value:defaultValue,readOnly:readOnly,disabled:disabled})})]}),error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"input_text__error",onClick:setErrorsArr?function(){return setErrorsArr(Object.assign({},errorsArr,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},name,!1)))}:null,children:"Поле не заполнено!"})]})};InputText.displayName="InputText",InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{inputName:{type:{name:"string"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""},error:{type:{name:"bool"},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},handleInputChange:{type:{name:"func"},required:!1,description:""},defaultValue:{type:{name:"string"},required:!1,description:""},readOnly:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},setErrorsArr:{type:{name:"func"},required:!1,description:""},errorsArr:{type:{name:"object"},required:!1,description:""}}},__webpack_exports__.a=InputText,InputText.propTypes={inputName:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,required:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,error:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,type:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,name:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,handleInputChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,readOnly:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,setErrorsArr:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,errorsArr:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\utils\\Form\\InputText\\InputText.jsx"]={name:"InputText",docgenInfo:InputText.__docgenInfo,path:"src\\utils\\Form\\InputText\\InputText.jsx"})},2649:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(2650);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2650:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,':root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.input_text{width:calc(100% - 20px);display:flex;flex-direction:column;margin-bottom:20px}.input_text .input_text__error{width:100%;margin-top:1px;font-size:0.75rem;box-sizing:border-box;border:1px solid #d48282;background-color:#fadada;color:#ad1c1c;border-radius:3px;padding:5px 10px;transition:0.2s ease-in-out;cursor:pointer}.input_text .input_text__input{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:100%}.input_text .input_text__input .input_text__input_name{color:#666;padding-right:10px;flex:0 1 calc(20% - 10px);width:100%;margin-bottom:5px}.input_text .input_text__input .input_text__input_field{display:flex;justify-content:center;width:calc(90% - 20px);position:relative;min-height:2rem;width:100%}.input_text .input_text__input .input_text__input_field input[type="text"],.input_text .input_text__input .input_text__input_field input[type="password"],.input_text .input_text__input .input_text__input_field input[type="number"],.input_text .input_text__input .input_text__input_field textarea{border:1px solid #bbbbbb;width:100%;padding:5px 10px;border-radius:3px;transition:100ms ease-in-out;box-sizing:border-box}.input_text .input_text__input .input_text__input_field input[type="text"]:hover,.input_text .input_text__input .input_text__input_field input[type="password"]:hover,.input_text .input_text__input .input_text__input_field input[type="number"]:hover,.input_text .input_text__input .input_text__input_field textarea:hover{border-color:#888888}.input_text .input_text__input .input_text__input_field input[type="text"]:focus,.input_text .input_text__input .input_text__input_field input[type="password"]:focus,.input_text .input_text__input .input_text__input_field input[type="number"]:focus,.input_text .input_text__input .input_text__input_field textarea:focus{border:1px solid #4293b6}.input_text .input_text__input .input_text__input_field input::-webkit-outer-spin-button,.input_text .input_text__input .input_text__input_field input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input_text .input_text__input .input_text__input_field textarea{min-width:calc(100% - 20px);outline:none;min-height:100px;max-height:150px;resize:vertical}.input_text .input_text__input .input_text__input_field input[type="number"]{-moz-appearance:textfield}.input_text .input_text__input .input_text__input_field--error input[type="text"],.input_text .input_text__input .input_text__input_field--error input[type="number"],.input_text .input_text__input .input_text__input_field--error input[type="password"],.input_text .input_text__input .input_text__input_field--error textarea{border:1px solid #d48282 !important}@media (max-width: 768px){.input_text .input_text__input{flex-wrap:wrap;align-items:flex-start;flex-direction:column}.input_text .input_text__input .input_text__input_name{width:100%;margin-bottom:5px}.input_text .input_text__input .input_text__input_field{width:calc(100% - 0px)}.input_text .input_text__input .input_text__input_field input{padding:10px !important}}\n',""]),module.exports=exports},2675:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return getUsers})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getUserById})),__webpack_require__.d(__webpack_exports__,"b",(function(){return deleteUser})),__webpack_require__.d(__webpack_exports__,"c",(function(){return editUser})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addUser}));var _utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(633);function getUsers(signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:"http://localhost:8443/api/v1/admin/user/",method:"GET",signal:signal})}function getUserById(id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:"http://localhost:8443/api/v1/admin/user/"+id,method:"GET"})}function deleteUser(id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:"http://localhost:8443/api/v1/admin/user/"+id,method:"DELETE"})}function editUser(newUser,id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:"http://localhost:8443/api/v1/admin/user/"+id,method:"PUT",body:JSON.stringify(newUser)})}function addUser(newUser){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:"http://localhost:8443/api/v1/admin/user/",method:"POST",body:JSON.stringify(newUser)})}},2883:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return usersDefaultInputs}));var usersDefaultInputs=[{name:"username",defaultValue:"",isRequired:!0},{name:"password",defaultValue:"",isRequired:!0},{name:"email",defaultValue:"",isRequired:!0}]},3390:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(634),__webpack_require__(441),__webpack_require__(1583),__webpack_require__(1581),__webpack_require__(0)),Utils_RequestsAPI_Users_jsx__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(3391),__webpack_require__(2655),__webpack_require__(2675)),Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2647),Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(181),Utils_hooks__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(2656),_objects__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(2883),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(1),EditUser=function EditUser(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(1),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),userId=_useState2[0],setUserId=_useState2[1],_useForm=Object(Utils_hooks__WEBPACK_IMPORTED_MODULE_11__.a)(_objects__WEBPACK_IMPORTED_MODULE_12__.a),_handleInputChange=_useForm.handleInputChange,formInputs=_useForm.formInputs,formErrors=_useForm.formErrors,setFormErrors=_useForm.setFormErrors,updateFormInputs=_useForm.updateFormInputs,formIsValid=_useForm.formIsValid,errorWindow=_useForm.errorWindow,_useState3=Object(react__WEBPACK_IMPORTED_MODULE_5__.useState)(!1),_useState4=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3,2),isLoading=_useState4[0],setIsLoading=_useState4[1];return Object(react__WEBPACK_IMPORTED_MODULE_5__.useEffect)((function(){document.title="Редактирование пользователя";var id=props.history.location.pathname.split("/profile/users/edit/")[1];isNaN(Number.parseInt(id))?(alert("Неправильный индекс заявки!"),props.history.push("/profile/users")):(setUserId(id),Object(Utils_RequestsAPI_Users_jsx__WEBPACK_IMPORTED_MODULE_8__.d)(id).then((function(res){return res.json()})).then((function(oldUser){updateFormInputs({username:oldUser.username,email:oldUser.email})})).catch((function(error){console.log(error),alert("Неправильный индекс заявки!"),props.history.push("/profile/users")})))}),[]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{className:"main-form",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("form",{className:"main-form__form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{className:"main-form__header main-form__header--full",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{className:"main-form__title",children:"Редактирование пользователя"})}),errorWindow,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_9__.a,{inputName:"Имя пользователя",required:!0,error:formErrors.username,defaultValue:formInputs.username,name:"username",handleInputChange:function handleInputChange(_ref){var target=_ref.target;return _handleInputChange("username",target.value)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_9__.a,{inputName:"Пароль",required:!0,error:formErrors.password,name:"password",handleInputChange:function handleInputChange(_ref2){var target=_ref2.target;return _handleInputChange("password",target.value)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_9__.a,{inputName:"Эл. почта",required:!0,error:formErrors.email,defaultValue:formInputs.email,name:"email",handleInputChange:function handleInputChange(_ref3){var target=_ref3.target;return _handleInputChange("email",target.value)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div",{className:"main-form__input_hint",children:"* - поля, обязательные для заполнения"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div",{className:"main-form__buttons main-form__buttons--full",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_10__.a,{className:"main-form__submit main-form__submit--inverted",inverted:!0,onClick:function onClick(){return props.history.push("/profile/users")},text:"Вернуться назад"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_10__.a,{text:"Обновить данные",isLoading:isLoading,className:"main-form__submit",onClick:function handleSubmit(){formIsValid()&&(setIsLoading(!0),Object(Utils_RequestsAPI_Users_jsx__WEBPACK_IMPORTED_MODULE_8__.c)(formInputs,userId).then((function(){props.history.push("/profile/users"),document.location.reload()})).catch((function(error){setIsLoading(!1),alert("Ошибка при добавлении записи"),console.log(error)})))}})]})]})})};EditUser.displayName="EditUser",EditUser.__docgenInfo={description:"",methods:[],displayName:"EditUser"},__webpack_exports__.default=EditUser,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\MainPage\\Profile\\Users\\EditUser\\EditUser.jsx"]={name:"EditUser",docgenInfo:EditUser.__docgenInfo,path:"src\\components\\MainPage\\Profile\\Users\\EditUser\\EditUser.jsx"})},3391:function(module,exports,__webpack_require__){var api=__webpack_require__(47),content=__webpack_require__(3392);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3392:function(module,exports,__webpack_require__){(exports=__webpack_require__(48)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}\n",""]),module.exports=exports}}]);