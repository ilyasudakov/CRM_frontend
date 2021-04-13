(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{2841:function(module,exports,__webpack_require__){"use strict";var $=__webpack_require__(21),DESCRIPTORS=__webpack_require__(81),global=__webpack_require__(31),has=__webpack_require__(100),isObject=__webpack_require__(87),defineProperty=__webpack_require__(133).f,copyConstructorProperties=__webpack_require__(1765),NativeSymbol=global.Symbol;if(DESCRIPTORS&&"function"==typeof NativeSymbol&&(!("description"in NativeSymbol.prototype)||void 0!==NativeSymbol().description)){var EmptyStringDescriptionStore={},SymbolWrapper=function Symbol(){var description=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),result=this instanceof SymbolWrapper?new NativeSymbol(description):void 0===description?NativeSymbol():NativeSymbol(description);return""===description&&(EmptyStringDescriptionStore[result]=!0),result};copyConstructorProperties(SymbolWrapper,NativeSymbol);var symbolPrototype=SymbolWrapper.prototype=NativeSymbol.prototype;symbolPrototype.constructor=SymbolWrapper;var symbolToString=symbolPrototype.toString,native="Symbol(test)"==String(NativeSymbol("test")),regexp=/^Symbol\((.*)\)[^)]+$/;defineProperty(symbolPrototype,"description",{configurable:!0,get:function description(){var symbol=isObject(this)?this.valueOf():this,string=symbolToString.call(symbol);if(has(EmptyStringDescriptionStore,symbol))return"";var desc=native?string.slice(7,-1):string.replace(regexp,"$1");return""===desc?void 0:desc}}),$({global:!0,forced:!0},{Symbol:SymbolWrapper})}},2884:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return getMainTasks})),__webpack_require__.d(__webpack_exports__,"e",(function(){return getMainTaskById})),__webpack_require__.d(__webpack_exports__,"b",(function(){return deleteMainTask})),__webpack_require__.d(__webpack_exports__,"a",(function(){return addMainTask})),__webpack_require__.d(__webpack_exports__,"c",(function(){return editMainTask})),__webpack_require__.d(__webpack_exports__,"d",(function(){return editTaskStatus}));var _utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(10);function getMainTasks(signal){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/mainTask/",method:"GET",signal:signal})}function getMainTaskById(id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/mainTask/"+id,method:"GET"})}function deleteMainTask(id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/mainTask/"+id,method:"DELETE"})}function addMainTask(newTask){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/mainTask/",method:"POST",body:JSON.stringify(newTask)})}function editMainTask(newTask,id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/mainTask/"+id,method:"PUT",body:JSON.stringify(newTask)})}function editTaskStatus(newStatus,id){return Object(_utilsAPI_jsx__WEBPACK_IMPORTED_MODULE_0__.b)({url:Object({NODE_ENV:"production",NODE_PATH:[],STORYBOOK:"true",PUBLIC_URL:"."}).API_BASE_URL+"/api/v1/mainTask/condition/"+id,method:"PUT",body:JSON.stringify(newStatus)})}},2950:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return filterCompletedTasks})),__webpack_require__.d(__webpack_exports__,"c",(function(){return filterTasksUsers})),__webpack_require__.d(__webpack_exports__,"b",(function(){return filterSearchQuery})),__webpack_require__.d(__webpack_exports__,"d",(function(){return getTasksDefaultInputs}));__webpack_require__(255),__webpack_require__(50),__webpack_require__(1006),__webpack_require__(660),__webpack_require__(661),__webpack_require__(80),__webpack_require__(466),__webpack_require__(198),__webpack_require__(1763),__webpack_require__(2841);var Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(61),filterCompletedTasks=function filterCompletedTasks(tasks,curPage){return tasks.filter((function(task){return"В процессе"===curPage&&"Выполнено"!==task.condition||"Завершено"===curPage&&"Выполнено"===task.condition}))},filterTasksUsers=function filterTasksUsers(tasks,taskUsers){return tasks.filter((function(item){var check=!1,noActiveStatuses=!0;return Object.entries(taskUsers).map((function(user){Object.entries(taskUsers).map((function(user){user[1]&&(noActiveStatuses=!1)})),(!0===noActiveStatuses||user[1]&&user[0]===item.responsible)&&(check=!0)})),check}))},filterSearchQuery=function filterSearchQuery(data,searchQuery){var query=searchQuery.toLowerCase();return data.filter((function(item){return item.id.toString().includes(query)||item.description.toLowerCase().includes(query)||item.responsible.toLowerCase().includes(query)||item.status.toLowerCase().includes(query)||Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__.f)(item.dateCreated).includes(query)||Object(Utils_functions_jsx__WEBPACK_IMPORTED_MODULE_10__.f)(item.dateControl).includes(query)}))},getTasksDefaultInputs=function getTasksDefaultInputs(){var username=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[{name:"dateCreated",defaultValue:new Date,isRequired:!0,isValid:!0},{name:"dateControl",defaultValue:new Date((new Date).setDate((new Date).getDate()+7)),isRequired:!0,isValid:!0},{name:"description",defaultValue:"",isRequired:!0},{name:"responsible",defaultValue:username,isRequired:!0,isValid:!0},{name:"status",defaultValue:""},{name:"condition",defaultValue:"В процессе"}]}},3472:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(1763),__webpack_require__(2841),__webpack_require__(0)),API_tasks__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__(3473),__webpack_require__(2836),__webpack_require__(2884)),Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2832),Utils_Form_InputDate_InputDate_jsx__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(2842),Utils_Form_InputUser_InputUser_jsx__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(2921),Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(150),_App_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(132),Utils_hooks__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(1004),_functions__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(2950),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(1),NewTask=function NewTask(props){var userContext=Object(react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_App_js__WEBPACK_IMPORTED_MODULE_11__.a),_useForm=Object(Utils_hooks__WEBPACK_IMPORTED_MODULE_12__.a)(Object(_functions__WEBPACK_IMPORTED_MODULE_13__.d)(userContext.userData.username)),_handleInputChange=_useForm.handleInputChange,formInputs=_useForm.formInputs,formErrors=_useForm.formErrors,setFormErrors=_useForm.setFormErrors,formIsValid=_useForm.formIsValid,errorWindow=_useForm.errorWindow,_useState=Object(react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1];return Object(react__WEBPACK_IMPORTED_MODULE_3__.useEffect)((function(){document.title="Создание основной задачи"}),[]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"main-form",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("form",{className:"main-form__form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"main-form__header main-form__header--full",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"main-form__title",children:"Новая задача"})}),errorWindow,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_InputDate_InputDate_jsx__WEBPACK_IMPORTED_MODULE_8__.a,{inputName:"Дата постановки",required:!0,error:formErrors.dateCreated,name:"dateCreated",selected:formInputs.dateCreated,errorsArr:formErrors,setErrorsArr:setFormErrors,handleDateChange:function handleDateChange(date){return _handleInputChange("dateCreated",date)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"main-form__fieldset",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"main-form__group-name",children:"Сведения"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_7__.a,{inputName:"Описание",required:!0,type:"textarea",error:formErrors.description,name:"description",handleInputChange:function handleInputChange(_ref){var target=_ref.target;return _handleInputChange("description",target.value)},errorsArr:formErrors,setErrorsArr:setFormErrors}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_InputUser_InputUser_jsx__WEBPACK_IMPORTED_MODULE_9__.a,{inputName:"Ответственный",userData:props.userData,required:!0,error:formErrors.responsible,defaultValue:formInputs.responsible,name:"responsible",errorsArr:formErrors,setErrorsArr:setFormErrors,handleUserChange:function handleUserChange(user){return _handleInputChange("responsible",user)},searchPlaceholder:"Введите имя пользователя для поиска..."})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_InputDate_InputDate_jsx__WEBPACK_IMPORTED_MODULE_8__.a,{inputName:"Дата контроля",required:!0,error:formErrors.dateControl,errorsArr:formErrors,setErrorsArr:setFormErrors,name:"dateControl",selected:formInputs.dateControl,handleDateChange:function handleDateChange(date){return _handleInputChange("dateControl",date)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_InputText_InputText_jsx__WEBPACK_IMPORTED_MODULE_7__.a,{inputName:"Состояние",name:"status",type:"textarea",handleInputChange:function handleInputChange(_ref2){var target=_ref2.target;return _handleInputChange("status",target.value)}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("div",{className:"main-form__input_hint",children:"* - поля, обязательные для заполнения"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)("div",{className:"main-form__buttons main-form__buttons--full",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_10__.a,{text:"Вернуться назад",className:"main-form__submit main-form__submit--inverted",inverted:!0,onClick:function onClick(){return props.history.push("/dispatcher/general-tasks")}}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Utils_Form_Button_Button_jsx__WEBPACK_IMPORTED_MODULE_10__.a,{text:"Добавить задачу",isLoading:isLoading,className:"main-form__submit",onClick:function handleSubmit(){formIsValid()&&(setIsLoading(!0),Object(API_tasks__WEBPACK_IMPORTED_MODULE_6__.a)(formInputs).then((function(){return props.history.push("/dispatcher/general-tasks")})).catch((function(error){setIsLoading(!1),alert("Ошибка при добавлении записи"),console.log(error)})))}})]})]})})};NewTask.displayName="NewTask",NewTask.__docgenInfo={description:"",methods:[],displayName:"NewTask"},__webpack_exports__.default=NewTask,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MainPage/Dispatcher/GeneralTasks/NewTask/NewTask.jsx"]={name:"NewTask",docgenInfo:NewTask.__docgenInfo,path:"src/components/MainPage/Dispatcher/GeneralTasks/NewTask/NewTask.jsx"})},3473:function(module,exports,__webpack_require__){var api=__webpack_require__(44),content=__webpack_require__(3474);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},3474:function(module,exports,__webpack_require__){(exports=__webpack_require__(45)(!1)).push([module.i,":root{--accent-color--light: #f8f1f1;--accent-color--contrast: #16c79a;--main-color: #4293b6;--main-color--dark: #19456b}\n",""]),module.exports=exports}}]);