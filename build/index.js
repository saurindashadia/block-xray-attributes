!function(){var e={703:function(e,t,n){"use strict";var r=n(414);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=window.wp.element,t=window.wp.plugins,r=window.wp.editPost,o=window.wp.i18n,c=window.wp.data,i=n(697),a=n.n(i);const u={display:"block",overflow:"auto"};function l(t){let{object:n}=t;return(0,e.createElement)("pre",null,(0,e.createElement)("code",{style:u},(e=>JSON.stringify(e,null,2))(n)))}function s(){const t=(0,c.useSelect)((e=>e("core/block-editor").getSelectedBlock()));return t?(0,e.createElement)(l,{object:t}):(0,e.createElement)("p",null,(0,o.__)("No block is selected.","block-xray-attributes"))}function p(){return(0,e.createElement)(r.PluginDocumentSettingPanel,{icon:"code-standards",title:(0,o.__)("Block X-ray","block-xray-attributes")},(0,e.createElement)(s,null))}l.propTypes={object:a().object.isRequired},(0,t.registerPlugin)("block-xray-attributes",{render:()=>(0,e.createElement)(p,null)})}()}();