(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2651:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),prop_types__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(281),__webpack_require__(41),__webpack_require__(2)),prop_types__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(2654),__webpack_require__(1)),InputText=function InputText(_ref){var inputName=_ref.inputName,required=_ref.required,error=_ref.error,type=_ref.type,name=_ref.name,handleInputChange=_ref.handleInputChange,defaultValue=_ref.defaultValue,readOnly=_ref.readOnly,disabled=_ref.disabled,setErrorsArr=_ref.setErrorsArr,errorsArr=_ref.errorsArr;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"input_text",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{className:"input_text__input",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"input_text__input_name",children:inputName+(required?"*":"")}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:!0===error?"input_text__input_field input_text__input_field--error":"input_text__input_field",children:"textarea"===type?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("textarea",{name:name,autoComplete:"off",onChange:handleInputChange,value:defaultValue,readOnly:readOnly,disabled:disabled}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input",{type:type||"text",name:name,autoComplete:"off",onChange:handleInputChange,value:defaultValue,readOnly:readOnly,disabled:disabled})})]}),error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"input_text__error",onClick:setErrorsArr?function(){return setErrorsArr(Object.assign({},errorsArr,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},name,!1)))}:null,children:"Поле не заполнено!"})]})};InputText.displayName="InputText",InputText.__docgenInfo={description:"",methods:[],displayName:"InputText",props:{inputName:{type:{name:"string"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""},error:{type:{name:"bool"},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},handleInputChange:{type:{name:"func"},required:!1,description:""},defaultValue:{type:{name:"string"},required:!1,description:""},readOnly:{type:{name:"bool"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},setErrorsArr:{type:{name:"func"},required:!1,description:""},errorsArr:{type:{name:"object"},required:!1,description:""}}},__webpack_exports__.a=InputText,InputText.propTypes={inputName:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,required:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,error:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,type:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,name:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,handleInputChange:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,defaultValue:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,readOnly:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,disabled:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,setErrorsArr:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,errorsArr:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/Form/InputText/InputText.jsx"]={name:"InputText",docgenInfo:InputText.__docgenInfo,path:"src/utils/Form/InputText/InputText.jsx"})},2654:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2655);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2655:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,':root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.input_text{width:calc(100% - 20px);display:flex;flex-direction:column;margin-bottom:20px}.input_text .input_text__error{width:100%;margin-top:1px;font-size:0.75rem;box-sizing:border-box;border:1px solid #d48282;background-color:#fadada;color:#ad1c1c;border-radius:3px;padding:5px 10px;transition:0.2s ease-in-out;cursor:pointer}.input_text .input_text__input{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:100%}.input_text .input_text__input .input_text__input_name{color:#666;padding-right:10px;flex:0 1 calc(20% - 10px);width:100%;margin-bottom:5px}.input_text .input_text__input .input_text__input_field{display:flex;justify-content:center;width:calc(90% - 20px);position:relative;min-height:2rem;width:100%}.input_text .input_text__input .input_text__input_field input[type="text"],.input_text .input_text__input .input_text__input_field input[type="password"],.input_text .input_text__input .input_text__input_field input[type="number"],.input_text .input_text__input .input_text__input_field textarea{border:1px solid #bbbbbb;width:100%;padding:5px 10px;border-radius:3px;transition:100ms ease-in-out;box-sizing:border-box}.input_text .input_text__input .input_text__input_field input[type="text"]:hover,.input_text .input_text__input .input_text__input_field input[type="password"]:hover,.input_text .input_text__input .input_text__input_field input[type="number"]:hover,.input_text .input_text__input .input_text__input_field textarea:hover{border-color:#888888}.input_text .input_text__input .input_text__input_field input[type="text"]:focus,.input_text .input_text__input .input_text__input_field input[type="password"]:focus,.input_text .input_text__input .input_text__input_field input[type="number"]:focus,.input_text .input_text__input .input_text__input_field textarea:focus{border:1px solid #4293b6}.input_text .input_text__input .input_text__input_field input::-webkit-outer-spin-button,.input_text .input_text__input .input_text__input_field input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.input_text .input_text__input .input_text__input_field textarea{min-width:calc(100% - 20px);outline:none;min-height:100px;max-height:150px;resize:vertical}.input_text .input_text__input .input_text__input_field input[type="number"]{-moz-appearance:textfield}.input_text .input_text__input .input_text__input_field--error input[type="text"],.input_text .input_text__input .input_text__input_field--error input[type="number"],.input_text .input_text__input .input_text__input_field--error input[type="password"],.input_text .input_text__input .input_text__input_field--error textarea{border:1px solid #d48282 !important}@media (max-width: 768px){.input_text .input_text__input{flex-wrap:wrap;align-items:flex-start;flex-direction:column}.input_text .input_text__input .input_text__input_name{width:100%;margin-bottom:5px}.input_text .input_text__input .input_text__input_field{width:calc(100% - 0px)}.input_text .input_text__input .input_text__input_field input{padding:10px !important}}\n',""]),module.exports=exports},2666:function(module,__webpack_exports__,__webpack_require__){"use strict";var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(18),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),react_datepicker__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(41),__webpack_require__(281),__webpack_require__(333),__webpack_require__(2698)),react_datepicker__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_4__),prop_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),prop_types__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__),date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(2699),date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=(__webpack_require__(2697),__webpack_require__(2673),__webpack_require__(1)),InputDate=function InputDate(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"input_date",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{className:"input_date__input",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"input_date__input_name",children:props.inputName+(props.required?"*":"")}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:!0===props.error?"input_date__input_field input_date__input_field--error":"input_date__input_field",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_datepicker__WEBPACK_IMPORTED_MODULE_4___default.a,Object.assign({},props,{onChange:props.handleDateChange,disabledKeyboardNavigation:!0,dateFormat:props.showMonthYearPicker?"MM.yyyy":"dd.MM.yyyy",locale:date_fns_locale_ru__WEBPACK_IMPORTED_MODULE_6___default.a}))})]}),!0===props.error&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{className:"input_date__error",onClick:props.setErrorsArr?function(){return props.setErrorsArr(Object.assign({},props.errorsArr,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({},props.name,!1)))}:null,children:"Поле не заполнено!"})]})};InputDate.displayName="InputDate",InputDate.__docgenInfo={description:"",methods:[],displayName:"InputDate",props:{inputName:{type:{name:"string"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""},error:{type:{name:"bool"},required:!1,description:""},type:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},handleDateChange:{type:{name:"func"},required:!1,description:""},selected:{type:{name:"instanceOf",value:"Date"},required:!1,description:""},readOnly:{type:{name:"bool"},required:!1,description:""},showMonthYearPicker:{type:{name:"bool"},required:!1,description:""},setErrorsArr:{type:{name:"func"},required:!1,description:""},errorsArr:{type:{name:"object"},required:!1,description:""}}},__webpack_exports__.a=InputDate,InputDate.propTypes={inputName:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,required:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,error:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,type:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,name:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,handleDateChange:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,selected:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.instanceOf(Date),readOnly:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,showMonthYearPicker:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,setErrorsArr:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,errorsArr:prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/Form/InputDate/InputDate.jsx"]={name:"InputDate",docgenInfo:InputDate.__docgenInfo,path:"src/utils/Form/InputDate/InputDate.jsx"})},2673:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2674);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2674:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,':root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.input_date{width:calc(100% - 20px);display:flex;flex-direction:column;margin-bottom:20px}.input_date .input_date__error{width:100%;box-sizing:border-box;margin-top:1px;font-size:0.75rem;border:1px solid #d48282;background-color:#fadada;color:#ad1c1c;border-radius:3px;padding:5px 10px;transition:0.2s ease-in-out;cursor:pointer}.input_date .input_date__input{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:100%}.input_date .input_date__input .input_date__input_name{color:#666;flex:0 1 calc(20% - 10px);padding-right:10px;width:100%;margin-bottom:5px}.input_date .input_date__input .input_date__input_field{display:flex;justify-content:center;width:calc(90% - 20px);position:relative;width:100%}.input_date .input_date__input .input_date__input_field .react-datepicker-wrapper{width:100%}.input_date .input_date__input .input_date__input_field .react-datepicker-wrapper .react-datepicker{z-index:999}.input_date .input_date__input .input_date__input_field .react-datepicker-wrapper .react-datepicker .react-datepicker__day--selected{background-color:#4293b6 !important}.input_date .input_date__input .input_date__input_field .react-datepicker-popper{z-index:999}.input_date .input_date__input .input_date__input_field input[type="text"],.input_date .input_date__input .input_date__input_field input[type="password"]{border:1px solid #bbbbbb;width:100%;padding:5px 10px;border-radius:3px;box-sizing:border-box;transition:100ms ease-in-out;min-height:2rem}.input_date .input_date__input .input_date__input_field input[type="text"]:hover,.input_date .input_date__input .input_date__input_field input[type="password"]:hover{border-color:#888888}.input_date .input_date__input .input_date__input_field input[type="text"]:focus,.input_date .input_date__input .input_date__input_field input[type="password"]:focus{border:1px solid #4293b6}.input_date .input_date__input .input_date__input_field--error input[type="text"],.input_date .input_date__input .input_date__input_field--error input[type="password"]{border:1px solid #d48282 !important}.input_date .input_date__input .input_date__input_field:focus{border:1px solid #4293b6}@media (max-width: 768px){.input_date .input_date__input{flex-wrap:wrap;flex-direction:column;align-items:flex-start}.input_date .input_date__input .input_date__input_name{width:100%;margin-bottom:5px}.input_date .input_date__input .input_date__input_field{width:100%}.input_date .input_date__input .input_date__input_field input{padding:10px !important}}\n',""]),module.exports=exports},2709:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"e",(function(){return getUsers})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getUserById})),__webpack_require__.d(__webpack_exports__,"b",(function(){return deleteUser})),__webpack_require__.d(__webpack_exports__,"c",(function(){return editUser})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addUser}));var _utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(637);function getUsers(signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/admin/user/",method:"GET",signal:signal})}function getUserById(id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/admin/user/"+id,method:"GET"})}function deleteUser(id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/admin/user/"+id,method:"DELETE"})}function editUser(newUser,id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/admin/user/"+id,method:"PUT",body:JSON.stringify(newUser)})}function addUser(newUser){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/admin/user/",method:"POST",body:JSON.stringify(newUser)})}},2768:function(module,__webpack_exports__,__webpack_require__){"use strict";var defineProperty=__webpack_require__(18),defineProperty_default=__webpack_require__.n(defineProperty),slicedToArray=(__webpack_require__(41),__webpack_require__(281),__webpack_require__(2843),__webpack_require__(15)),slicedToArray_default=__webpack_require__.n(slicedToArray),react=(__webpack_require__(636),__webpack_require__(2668),__webpack_require__(181),__webpack_require__(638),__webpack_require__(639),__webpack_require__(0)),users=(__webpack_require__(2845),__webpack_require__(2709)),jsx_runtime=__webpack_require__(1),SelectUser_SelectUser_SelectUser=function SelectUser(props){var _useState=Object(react.useState)(""),_useState2=slicedToArray_default()(_useState,2),searchQuery=_useState2[0],setSearchQuery=_useState2[1],_useState3=Object(react.useState)([]),_useState4=slicedToArray_default()(_useState3,2),options=_useState4[0],setOptions=_useState4[1],_useState5=Object(react.useState)(""),_useState6=slicedToArray_default()(_useState5,2),selectedUser=_useState6[0],setSelectedUser=_useState6[1],_useState7=Object(react.useState)(!1),_useState8=slicedToArray_default()(_useState7,2),showOptions=_useState8[0],setShowOptions=_useState8[1],search=function search(){return options.filter((function(item){return(!props.filteredRoles||item.roles.reduce((function(prevRole,curRole){var check=!1;return props.filteredRoles.map((function(filteredRole){filteredRole!==curRole.name||(check=!0)})),check}),!1))&&item.username.toLowerCase().includes(searchQuery.toLowerCase())}))},clickOnInput=function clickOnInput(){showOptions||0==search().length?0!=search().length&&setShowOptions(!1):setShowOptions(!0)},pressEscKey=Object(react.useCallback)((function(event){27===event.keyCode&&showOptions&&setShowOptions(!showOptions)}),[]);return Object(react.useEffect)((function(){return 0===options.length&&Object(users.e)().then((function(res){return res.json()})).then((function(res){setOptions(res)})).catch((function(){!props.defaultValue&&setSelectedUser(props.userData.username)})),props.defaultValue&&setSelectedUser(props.defaultValue),document.addEventListener("keydown",pressEscKey,!1),function(){document.removeEventListener("keydown",pressEscKey,!1)}}),[props.defaultValue]),Object(jsx_runtime.jsxs)("div",{className:"select_user",children:[0!=search().length&&Object(jsx_runtime.jsx)("div",{className:showOptions?"select_user__overlay":"select_user__overlay select_user__overlay--hidden",onClick:function onClick(){return setShowOptions(!showOptions)}}),Object(jsx_runtime.jsx)("input",{type:"text",className:"select_user__input",onChange:function handleInputChange(event){var value=event.target.value;setSearchQuery(value),setSelectedUser(value),props.onChange(value)},onClick:props.readOnly?null:clickOnInput,value:props.readOnly?props.defaultValue:selectedUser,placeholder:props.searchPlaceholder,readOnly:props.readOnly||0===options.length}),options&&Object(jsx_runtime.jsx)("div",{className:showOptions?"select_user__options":"select_user__options select_user__options--hidden",children:search().map((function(item){return Object(jsx_runtime.jsx)("div",{className:"select_user__option_item",onClick:function onClick(){return function clickOnOption(name,id){clickOnInput(),setSelectedUser(name),props.onChange(name,id)}(item.username,item.id)},children:item.username},item.id)}))})]})};SelectUser_SelectUser_SelectUser.displayName="SelectUser",SelectUser_SelectUser_SelectUser.__docgenInfo={description:"",methods:[],displayName:"SelectUser"};var MainPage_SelectUser_SelectUser=SelectUser_SelectUser_SelectUser;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainPage/SelectUser/SelectUser.jsx"]={name:"SelectUser",docgenInfo:SelectUser_SelectUser_SelectUser.__docgenInfo,path:"src/components/MainPage/SelectUser/SelectUser.jsx"});var InputUser_InputUser_InputUser=function InputUser(props){return Object(jsx_runtime.jsxs)("div",{className:"input_user",children:[Object(jsx_runtime.jsxs)("div",{className:"input_user__input",children:[Object(jsx_runtime.jsx)("div",{className:"input_user__input_name",children:props.inputName+(props.required?"*":"")}),Object(jsx_runtime.jsx)("div",{className:!0===props.error?"input_user__input_field input_user__input_field--error":"input_user__input_field",children:Object(jsx_runtime.jsx)(MainPage_SelectUser_SelectUser,{onChange:props.handleUserChange,searchPlaceholder:props.searchPlaceholder,defaultValue:props.defaultValue,readOnly:props.readOnly,userData:props.userData,filteredRoles:props.filteredRoles})})]}),!0===props.error&&Object(jsx_runtime.jsx)("div",{className:"input_user__error",onClick:props.setErrorsArr?function(){return props.setErrorsArr(Object.assign({},props.errorsArr,defineProperty_default()({},props.name,!1)))}:null,children:"Поле не заполнено!"})]})};InputUser_InputUser_InputUser.displayName="InputUser",InputUser_InputUser_InputUser.__docgenInfo={description:"",methods:[],displayName:"InputUser"};__webpack_exports__.a=InputUser_InputUser_InputUser;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/utils/Form/InputUser/InputUser.jsx"]={name:"InputUser",docgenInfo:InputUser_InputUser_InputUser.__docgenInfo,path:"src/utils/Form/InputUser/InputUser.jsx"})},2843:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2844);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2844:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,':root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.input_user{width:calc(100% - 20px);display:flex;flex-direction:column;margin-bottom:20px}.input_user .input_user__error{width:100%;margin-top:1px;font-size:0.75rem;box-sizing:border-box;border:1px solid #d48282;background-color:#fadada;color:#ad1c1c;border-radius:3px;padding:5px 10px;cursor:pointer;transition:0.2s ease-in-out}.input_user .input_user__input{display:flex;justify-content:space-between;flex-direction:column;align-items:flex-start;width:100%}.input_user .input_user__input .input_user__input_name{color:#666;flex:0 1 calc(20% - 10px);padding-right:10px;width:100%;margin-bottom:5px}.input_user .input_user__input .input_user__input_field{display:flex;justify-content:center;width:calc(90% - 20px);position:relative;width:100%}.input_user .input_user__input .input_user__input_field input[type="text"],.input_user .input_user__input .input_user__input_field input[type="password"]{border:1px solid #bbbbbb;width:100%;padding:5px 10px;border-radius:3px;transition:100ms ease-in-out;box-sizing:border-box}.input_user .input_user__input .input_user__input_field input[type="text"]:hover,.input_user .input_user__input .input_user__input_field input[type="password"]:hover{border-color:#888888}.input_user .input_user__input .input_user__input_field input[type="text"]:focus,.input_user .input_user__input .input_user__input_field input[type="password"]:focus{border:1px solid #4293b6}.input_user .input_user__input .input_user__input_field--error input[type="text"],.input_user .input_user__input .input_user__input_field--error input[type="password"]{border:1px solid #d48282 !important}.input_user .input_user__input .input_user__input_field:focus{border:1px solid #4293b6}@media (max-width: 768px){.input_user .input_user__input{flex-wrap:wrap;flex-direction:column;align-items:flex-start}.input_user .input_user__input .input_user__input_name{width:100%}.input_user .input_user__input .input_user__input_field{width:100%}.input_user .input_user__input .input_user__input_field input{padding:10px !important}.input_user .input_user__error{margin-top:1px}}\n',""]),module.exports=exports},2845:function(module,exports,__webpack_require__){var api=__webpack_require__(48),content=__webpack_require__(2846);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},2846:function(module,exports,__webpack_require__){(exports=__webpack_require__(49)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}.select_user{width:100%;height:max-content;position:relative;box-sizing:border-box}.select_user .select_user__overlay{width:100vw;height:100vh;position:fixed;top:0;left:0;z-index:1}.select_user .select_user__overlay--hidden{display:none}.select_user__input{border:1px solid #bbbbbb;width:100%;padding:5px 10px;border-radius:5px;z-index:2;min-height:2rem}.select_user__input:focus{border:1px solid #4293b6}.select_user__options{position:absolute;width:100%;max-height:200px;overflow-y:auto;background-color:#fff;display:flex;flex-direction:column;font-size:80%;z-index:2;transform:scaleX(1);transition:0.1s ease-in-out;box-shadow:0 4px 4px rgba(0,0,0,0.22),0 0px 5px rgba(0,0,0,0.24);transform-origin:0 0;padding:5px 0}.select_user__options--hidden{transform:scaleY(0)}.select_user__options .select_user__option_item{padding:10px 10px;cursor:pointer;background-color:#ffffff;transition:0.1s ease-in-out;display:flex;flex-direction:row;align-items:center}.select_user__options .select_user__option_item:hover{color:#fff;background-color:#4293b6}.select_user__select_usered{font-size:80%;display:flex;flex-direction:column}.select_user__select_usered_title{margin-top:10px;margin-left:15px;font-size:85%;color:#666}.select_user__select_usered_row{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-top:10px}.select_user__select_usered_row:first-of-type{margin-top:5px}.select_user__select_usered_row .select_user__select_usered_item{display:flex;padding:5px 10px;border-radius:5px;width:50%;margin-right:30px;position:relative;font-size:90%;align-items:center;border:1px solid #4293b6;cursor:pointer;background-color:#ffffff}.select_user__select_usered_row .select_user__select_usered_item:last-child{margin-bottom:0}.select_user__select_usered_row .select_user__select_usered_item .select_user__img{position:absolute;left:calc(100% + 10px);width:30px}@media (max-width: 768px){.select_user{width:100% !important}.select_user__select_usered_row{flex-direction:column}}\n",""]),module.exports=exports}}]);