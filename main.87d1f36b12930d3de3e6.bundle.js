(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1075:function(module,exports,__webpack_require__){"use strict";__webpack_require__(9),__webpack_require__(3),__webpack_require__(51),__webpack_require__(1076),__webpack_require__(40),__webpack_require__(1077);var _clientApi=__webpack_require__(54),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1078);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1078:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var _storybook_theming__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7),parameters={docs:{theme:_storybook_theming__WEBPACK_IMPORTED_MODULE_0__.themes.dark}}},1079:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(361).configure)([__webpack_require__(1080),__webpack_require__(1081)],module,!1)}).call(this,__webpack_require__(97)(module))},1080:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1080},1081:function(module,exports,__webpack_require__){var map={"./stories/main.stories.tsx":1090};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1081},1090:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Example",(function(){return Example})),__webpack_require__.d(__webpack_exports__,"LargeGrid",(function(){return LargeGrid}));__webpack_require__(18),__webpack_require__(4),__webpack_require__(46),__webpack_require__(1082),__webpack_require__(3),__webpack_require__(11),__webpack_require__(13),__webpack_require__(21),__webpack_require__(15),__webpack_require__(14),__webpack_require__(17),__webpack_require__(12),__webpack_require__(5),__webpack_require__(25);var react=__webpack_require__(0),jsx_runtime=__webpack_require__(116),GridCell_GridCell=function GridCell(_ref){var active=_ref.active,hover=_ref.hover,disabled=_ref.disabled,onClick=_ref.onClick,onMouseEnter=_ref.onMouseEnter,cellSize=_ref.cellSize,styles=_ref.styles,baseStyles={cell:Object.assign({width:cellSize,height:cellSize,background:"#bababa",cursor:"pointer",borderRadius:3,border:"1px solid #bababa"},styles.cell),active:Object.assign({border:"1px solid #4d6cdd",background:"#4d6cdd"},styles.active),hover:Object.assign({border:"1px solid #fff"},styles.hover),disabled:Object.assign({filter:"brightness(0.7)"},styles.disabled)};return Object(jsx_runtime.jsx)("div",{style:Object.assign({},baseStyles.cell,active&&baseStyles.active,hover&&baseStyles.hover,!active&&disabled&&baseStyles.disabled),onClick:onClick,onMouseEnter:onMouseEnter})};GridCell_GridCell.displayName="GridCell";try{GridCell_GridCell.displayName="GridCell",GridCell_GridCell.__docgenInfo={description:"",displayName:"GridCell",props:{active:{defaultValue:null,description:"",name:"active",required:!0,type:{name:"boolean"}},hover:{defaultValue:null,description:"",name:"hover",required:!0,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},cellSize:{defaultValue:null,description:"",name:"cellSize",required:!0,type:{name:"number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLDivElement>"}},onMouseEnter:{defaultValue:null,description:"",name:"onMouseEnter",required:!0,type:{name:"MouseEventHandler<HTMLDivElement>"}},styles:{defaultValue:null,description:"",name:"styles",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/GridCell.tsx#GridCell"]={docgenInfo:GridCell_GridCell.__docgenInfo,name:"GridCell",path:"src/GridCell.tsx#GridCell"})}catch(__react_docgen_typescript_loader_error){}var react_jss_esm=__webpack_require__(478),lodash=__webpack_require__(477);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var useStyles=Object(react_jss_esm.a)({grid:{position:"relative",display:"grid",color:"#444",margin:"24px 0",gridGap:"2px 4px"},cell:{}}),GridSelect_GridSelect=function GridSelect(_ref){var onRegionUpdate=_ref.onRegionUpdate,_ref$rows=_ref.rows,rows=void 0===_ref$rows?5:_ref$rows,_ref$cols=_ref.cols,cols=void 0===_ref$cols?5:_ref$cols,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$cellSize=_ref.cellSize,cellSize=void 0===_ref$cellSize?24:_ref$cellSize,styles=_ref.styles,baseClasses=useStyles(),_useState2=_slicedToArray(Object(react.useState)({x:0,y:0}),2),activeCell=_useState2[0],setActiveCell=_useState2[1],_useState4=_slicedToArray(Object(react.useState)(null),2),hoverCell=_useState4[0],setHoverCell=_useState4[1];Object(react.useEffect)((function(){onRegionUpdate({width:activeCell.x+1,height:activeCell.y+1})}),[activeCell]);for(var gridCss={gridTemplateColumns:Array(cols).fill("".concat(cellSize,"px")).join(" ")},onHover=(Object(react.useCallback)((function(_ref2){var x=_ref2.x,y=_ref2.y;return setActiveCell({x:x,y:y})}),[]),Object(react.useCallback)(Object(lodash.debounce)((function(_ref3){var x=_ref3.x,y=_ref3.y;return setHoverCell({x:x,y:y})}),5),[])),cells=[],_loop=function _loop(x){for(var _loop2=function _loop2(y){var isActive=x<=activeCell.x&&y<=activeCell.y,isHover=hoverCell&&x<=hoverCell.x&&y<=hoverCell.y;cells.push(Object(jsx_runtime.jsx)(GridCell_GridCell,{onClick:function onClick(){return setActiveCell({x:x,y:y})},onMouseEnter:onHover.bind(null,{x:x,y:y}),active:isActive,hover:isHover,disabled:disabled,styles:styles,cellSize:cellSize},x+"-"+y))},y=0;y<cols;y++)_loop2(y)},x=0;x<rows;x++)_loop(x);return Object(jsx_runtime.jsx)("div",{className:baseClasses.grid,style:gridCss,onMouseLeave:function onMouseLeave(){return setHoverCell(null)},children:cells})};GridSelect_GridSelect.displayName="GridSelect";try{GridSelect_GridSelect.displayName="GridSelect",GridSelect_GridSelect.__docgenInfo={description:"",displayName:"GridSelect",props:{rows:{defaultValue:{value:5},description:"",name:"rows",required:!1,type:{name:"number"}},cols:{defaultValue:{value:5},description:"",name:"cols",required:!1,type:{name:"number"}},onRegionUpdate:{defaultValue:null,description:"",name:"onRegionUpdate",required:!0,type:{name:"Function"}},cellSize:{defaultValue:{value:24},description:"",name:"cellSize",required:!1,type:{name:"number"}},bounds:{defaultValue:null,description:"",name:"bounds",required:!1,type:{name:"{ maxWidthBlock: { width: number; height: number; }; maxHeightBlock: { width: number; height: number; }; }"}},disabled:{defaultValue:{value:!1},description:"",name:"disabled",required:!1,type:{name:"boolean"}},styles:{defaultValue:null,description:"",name:"styles",required:!1,type:{name:"{ active?: any; hover?: any; cell?: any; grid?: any; disabled?: any; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/GridSelect.tsx#GridSelect"]={docgenInfo:GridSelect_GridSelect.__docgenInfo,name:"GridSelect",path:"src/GridSelect.tsx#GridSelect"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__(7),addon_actions_dist=__webpack_require__(211),getStyles=(__webpack_exports__.default={title:"Region Selection",docs:{theme:dist.themes.dark},parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:{backgroundColor:{control:"color",defaultValue:"#bababa"},activeColor:{control:"color",defaultValue:"#4d6cdd"},gridGap:{defaultValue:4,control:{type:"range"}},cols:{defaultValue:5,control:{type:"range"}},rows:{defaultValue:5,control:{type:"range"}},cellSize:{defaultValue:25,control:{type:"range"}}}},function getStyles(props){return{grid:{gridGap:"".concat(props.gridGap,"px ").concat(props.gridGap+2,"px")},cell:{background:props.backgroundColor,border:"1px solid ".concat(props.backgroundColor)},active:{background:props.activeColor,border:"1px solid ".concat(props.activeColor)}}}),main_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(GridSelect_GridSelect,Object.assign({styles:getStyles(args),cellSize:args.cellSize},args))};main_stories_Template.displayName="Template";var Example=main_stories_Template.bind({});Example.args={onRegionUpdate:function onRegionUpdate(bounds){Object(addon_actions_dist.action)("yooo")},rows:5,cols:5,cellSize:25,disabled:!1};var LargeGrid=main_stories_Template.bind({});LargeGrid.args={onRegionUpdate:function onRegionUpdate(bounds){},rows:25,cols:25,disabled:!1},Example.parameters=Object.assign({storySource:{source:"(args: any) => {\n  return (\n    <GridSelect \n      styles={getStyles(args)}\n      cellSize={args.cellSize}\n      {...args} \n    />\n  \n  )\n}"}},Example.parameters),LargeGrid.parameters=Object.assign({storySource:{source:"(args: any) => {\n  return (\n    <GridSelect \n      styles={getStyles(args)}\n      cellSize={args.cellSize}\n      {...args} \n    />\n  \n  )\n}"}},LargeGrid.parameters)},481:function(module,exports,__webpack_require__){__webpack_require__(482),__webpack_require__(637),__webpack_require__(638),__webpack_require__(796),__webpack_require__(1016),__webpack_require__(1049),__webpack_require__(1054),__webpack_require__(1066),__webpack_require__(1068),__webpack_require__(1073),__webpack_require__(1075),module.exports=__webpack_require__(1079)},549:function(module,exports){},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(361)}},[[481,1,2]]]);
//# sourceMappingURL=main.87d1f36b12930d3de3e6.bundle.js.map