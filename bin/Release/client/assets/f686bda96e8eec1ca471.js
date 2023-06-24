"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[91948],{921052:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.logoutUnderageNewUser=function(){n.default.dispatch({type:o.ActionTypes.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER})};t.preventUnderageRegistration=function(){n.default.dispatch({type:o.ActionTypes.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION})};t.submitDateOfBirth=function(e,t){(0,r.default)(e,t);return l.default.patch({url:o.Endpoints.ME,body:{date_of_birth:e.format("YYYY-MM-DD")},oldFormErrors:!0}).then((function(e){var t=e.body;n.default.dispatch({type:o.ActionTypes.CURRENT_USER_UPDATE,user:t})}))};var l=u(a(118915)),n=u(a(636602)),r=u(a(132699)),o=a(770348);function u(e){return e&&e.__esModule?e:{default:e}}},732741:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var l,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=p(t)
;if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e;a&&a.set(e,l);return l}(a(667294)),r=c(a(294184)),o=c(a(730381)),u=c(a(474257)),i=a(688388),s=c(a(776360)),d=c(a(247001)),f=c(a(108083));function c(e){return e&&e.__esModule?e:{default:e}}function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}function v(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),i=0;i<o;i++)u[i]=arguments[i+3];t.children=u}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,
key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var m=(0,o.default)().localeData().months(),E=Array.from(Array(31).keys()).map((function(e){return{value:e+1,label:""+(e+1)}})),_=Array.from(Array(12).keys()).map((function(e){return{value:e+1,label:m[e]}}));var N=/[a-zA-Z0-9]/;function y(e){var t=e.options,a=e.selectOption,l=e.children,r=n.useState(""),o=r[0],u=r[1];n.useEffect((function(){if(""!==o){var e=setTimeout((function(){return u("")}),1e3);return function(){return clearTimeout(e)}}}),[o,u]);return v("div",{onKeyDown:n.useCallback((function(e){if(N.test(e.key)){var l=""+o+e.key.toLowerCase(),n=t.find((function(e){return e.label.toLowerCase().startsWith(l)}));null!=n&&a(n.value);u(l)}}),[a,u,o,t])},void 0,l)}y.displayName="DropdownSuggestionWrapper";function S(){var e=(0,o.default)().localeData().longDateFormat("L"),t=e.indexOf("D"),a=e.indexOf("M"),l=e.indexOf("Y");if(-1===t||-1===a||-1===l){t=0;a=1;l=2}return[{index:t,type:"day"},{index:a,type:"month"},{index:l,
type:"year"}].sort((function(e,t){return e.index<t.index?-1:1}))}var O=n.forwardRef((function(e,t){var a=e.value,l=e.wrapperClassName,c=e.onChange,p=e.onPopulated,m=e.error,N=e.autoFocus,O=function(e){var t=null,a=null,l=null;if(null!=e){t=e.date();a=e.month()+1;l=e.year()}var r=n.useState(t),o=r[0],u=r[1],i=n.useState(a),s=i[0],d=i[1],f=n.useState(l);return{day:o,setDay:u,month:s,setMonth:d,year:f[0],setYear:f[1]}}(a),T=O.day,h=O.setDay,A=O.month,M=O.setMonth,I=O.year,b=O.setYear,C=n.useMemo((function(){return null!=T&&null!=A&&null!=I?(0,o.default)(T+"/"+A+"/"+I,"DD/MM/YYYY"):null}),[T,A,I]);n.useEffect((function(){c((null==C?void 0:C.isValid())?C:null)}),[C,c]);var g=m;null==C||C.isValid()||(g=d.default.Messages.AGE_GATE_INVALID_BIRTHDAY);var D=function(){var e=(new Date).getFullYear(),t=n.useRef(Array.from(Array(150).keys()).map((function(t){return{value:e-t-3,label:""+(e-t-3)}})));n.useEffect((function(){t.current=Array.from(Array(150).keys()).map((function(t){return{value:e-t-3,
label:""+(e-t-3)}}))}),[e]);return t.current}(),P=n.useState(N?0:-1),U=P[0],R=P[1],w=n.useRef(null),G=n.useRef(null),k=n.useRef(null),F=n.useMemo(S,[]),L=n.useCallback((function(){var e,t,a,l;switch(null===(e=F[U])||void 0===e?void 0:e.type){case"day":null===(t=w.current)||void 0===t||t.focus();break;case"month":null===(a=G.current)||void 0===a||a.focus();break;case"year":null===(l=k.current)||void 0===l||l.focus()}}),[U,w,G,k,F]);n.useEffect((function(){setTimeout(L,500)}),[]);n.useEffect((function(){U>=F.length?null==p||p():L()}),[U,L]);for(var j=[],B=function(e){switch(F[e].type){case"day":j.push({key:"day",input:v(y,{options:E,selectOption:h},void 0,n.createElement(u.default,{ref:w,className:f.default.inputDay,"aria-label":d.default.Messages.AGE_GATE_DOB_DAY,menuPlacement:u.default.MenuPlacements.TOP,placeholder:v("span",{"aria-hidden":!0},void 0,d.default.Messages.AGE_GATE_DOB_DAY),options:E,value:T,onChange:function(t){var a=t.value;h(a);R(e+1)},maxMenuHeight:215}))});break
;case"month":j.push({key:"month",input:v(y,{options:_,selectOption:M},void 0,n.createElement(u.default,{ref:G,className:f.default.inputMonth,"aria-label":d.default.Messages.AGE_GATE_DOB_MONTH,menuPlacement:u.default.MenuPlacements.TOP,placeholder:v("span",{"aria-hidden":!0},void 0,d.default.Messages.AGE_GATE_DOB_MONTH),options:_,value:A,onChange:function(t){var a=t.value;M(a);R(e+1)},maxMenuHeight:215}))});break;case"year":j.push({key:"year",input:v(y,{options:D,selectOption:b},void 0,n.createElement(u.default,{ref:k,className:f.default.inputYear,"aria-label":d.default.Messages.AGE_GATE_DOB_YEAR,menuPlacement:u.default.MenuPlacements.TOP,placeholder:v("span",{"aria-hidden":!0},void 0,d.default.Messages.AGE_GATE_DOB_YEAR),options:D,value:I,onChange:function(t){var a=t.value;b(a);R(e+1)},maxMenuHeight:215}))})}},H=0;H<3;H++)B(H);return v("div",{className:(0,r.default)(f.default.container,l)},void 0,v(i.FormTitle,{tag:i.FormTitle.Tags.H5
},void 0,d.default.Messages.AGE_GATE_DATE_OF_BIRTH),v("div",{className:f.default.inputs},void 0,j.map((function(e,t){var a=e.key,l=e.input;return v("div",{tabIndex:t+1,className:f.default[a]},a,l)}))),v(s.default,{className:f.default.errors},void 0,g))}));t.default=O},132699:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e,t){n.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED,{dob:(0,l.default)().diff(e,"years")<18?e.format("YYYY-MM-DD"):null,dob_day:e.date(),dob_month:e.month()+1,dob_year:e.year(),source:{section:t}})};var l=o(a(730381)),n=o(a(308920)),r=a(770348);function o(e){return e&&e.__esModule?e:{default:e}}},194040:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=M;var l,n=O(a(667294)),r=y(a(441143)),o=a(536211),u=O(a(921052)),i=y(a(732741)),s=y(a(728429)),d=y(a(956117)),f=y(a(594050)),c=y(a(355232)),p=y(a(971639)),v=y(a(776360)),m=y(a(550270)),E=a(770348),_=y(a(247001)),N=y(a(128905));function y(e){return e&&e.__esModule?e:{
default:e}}function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(S=function(e){return e?a:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=S(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e;a&&a.set(e,l);return l}function T(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),i=0;i<o;i++)u[i]=arguments[i+3];t.children=u}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,key:void 0===a?null:""+a,ref:null,props:t,
_owner:null}}function h(e,t,a,l,n,r,o){try{var u=e[r](o),i=u.value}catch(e){a(e);return}u.done?t(i):Promise.resolve(i).then(l,n)}function A(e){return function(){var t=this,a=arguments;return new Promise((function(l,n){var r=e.apply(t,a);function o(e){h(r,l,n,o,u,"next",e)}function u(e){h(r,l,n,o,u,"throw",e)}o(void 0)}))}}function M(e){var t=e.onComplete,a=e.onClose,l=n.useState(null),y=l[0],S=l[1],O=n.useState(null),h=O[0],M=O[1],I=n.useState(!1),b=I[0],C=I[1],g=(0,o.useStateFromStores)([s.default],(function(){return s.default.getCurrentUser()})),D=n.createRef();n.useEffect((function(){null!=g&&null!=g.nsfwAllowed&&t()}),[g,t]);function P(){return(P=A(regeneratorRuntime.mark((function e(l){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.preventDefault();(0,r.default)(null!=y,"Cannot submit null birthday.");C(!0);e.prev=3;e.next=6;return u.submitDateOfBirth(y,"NUF");case 6:t();e.next=12;break;case 9:e.prev=9;e.t0=e.catch(3)
;if(null!=e.t0.body&&null!=e.t0.body.date_of_birth){u.preventUnderageRegistration();u.logoutUnderageNewUser();a()}else null!=(null===e.t0||void 0===e.t0||null===(n=e.t0.body)||void 0===n?void 0:n.username)?M(_.default.Messages.USER_SETTINGS_UPDATE_FAILURE):M(null===e.t0||void 0===e.t0?void 0:e.t0.body.message);case 12:C(!1);case 13:case"end":return e.stop()}}),e,null,[[3,9]])})))).apply(this,arguments)}var U=n.useCallback((function(e){S(e)}),[S]),R=n.useCallback((function(){var e;null===(e=D.current)||void 0===e||e.focus()}),[D]);return null==g?null:T("form",{className:N.default.content,onSubmit:function(e){return P.apply(this,arguments)}},void 0,T(c.default,{width:56,height:40,className:N.default.logo,color:E.Colors.BRAND}),T(p.default,{className:N.default.title,size:p.default.Sizes.SIZE_24},void 0,_.default.Messages.NUF_JOIN_SERVER_TITLE_2),T(v.default,{color:v.default.Colors.STANDARD,className:N.default.description,size:v.default.Sizes.SIZE_16
},void 0,_.default.Messages.NUF_AGE_GATE_BODY.format({helpURL:m.default.getArticleURL(E.HelpdeskArticles.AGE_GATE)})),T(f.default.Provider,{value:E.ThemeTypes.LIGHT},void 0,T(i.default,{required:!0,autoFocus:!0,wrapperClassName:N.default.formItem,label:_.default.Messages.AGE_GATE_YOUR_BIRTHDAY,name:"birthday",onChange:U,onPopulated:R,error:h,value:y})),T("div",{className:N.default.footer},void 0,T("div",{className:N.default.buttonWrapper},void 0,T(d.default,{buttonRef:D,type:"submit",size:d.default.Sizes.LARGE,submitting:b,disabled:null==y,fullWidth:!0},void 0,_.default.Messages.NEXT))))}M.displayName="AgeGate"},241210:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=p;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e;a&&a.set(e,l)}(a(667294));var l,n=d(a(294184)),r=d(a(956117)),o=d(a(16941)),u=d(a(776360)),i=d(a(247001)),s=d(a(464057));function d(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}function c(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),i=0;i<o;i++)u[i]=arguments[i+3];t.children=u}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function p(e){var t=e.onComplete;return c(o.default,{
className:s.default.container,onClick:t},void 0,c(u.default,{size:u.default.Sizes.SIZE_24,className:s.default.title},void 0,i.default.Messages.NUF_COMPLETE_TITLE),c(u.default,{size:u.default.Sizes.SIZE_24,className:(0,n.default)(s.default.title,s.default.subtitle)},void 0,i.default.Messages.NUF_COMPLETE_SUBTITLE),c(r.default,{color:r.default.Colors.WHITE,onClick:t},void 0,i.default.Messages.NUF_COMPLETE_CTA))}p.displayName="Complete"},79100:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t,a=e.onBack,l=e.onComplete,S=e.onConnect,O=e.isSlideReady,A=(0,c.useUID)(),M=n.useState(""),I=M[0],b=M[1],C=n.useState(!1),g=C[0],D=C[1],P=n.useState(null),U=P[0],R=P[1],w=n.useRef(null);n.useEffect((function(){var e;O&&(null===(e=w.current)||void 0===e||e.focus())}),[O]);var G=n.useCallback((function(e){e.preventDefault();var t=I.trim();if(""!==t){R(null);D(!0);var a=t.split("/"),n=a[a.length-1];o.default.resolveInvite(n,"Join Guild",{inputValue:t
}).then((function(e){var t=e.invite;D(!1);if(null!=t){if(null!=t.channel){var a=o.default.getInviteContext("Join Guild",t);o.default.acceptInvite(t.code,a,(function(e){l();o.default.transitionToInvite(e)})).catch((function(e){if(e instanceof i.V6OrEarlierAPIError){var t=(0,E.getInviteError)(e.code);R(t)}else R(N.default.Messages.INVITE_MODAL_ERROR_DEFAULT)}))}}else R(N.default.Messages.INSTANT_INVITE_EXPIRED)}),(function(e){D(!1);var t=new i.V6OrEarlierAPIError(e),a=(0,E.getInviteError)(t.code);R(a)}))}else R(N.default.Messages.INVALID_INVITE_LINK_ERROR)}),[I,D,R,l]),k=n.createElement(n.Fragment,null,T(v.ModalHeader,{className:y.default.header,direction:d.default.Direction.VERTICAL,separator:!1,id:A},void 0,T(m.default,{className:y.default.title,size:m.default.Sizes.SIZE_24,color:m.default.Colors.HEADER_PRIMARY},void 0,N.default.Messages.JOIN_SERVER_TITLE),T(m.default,{size:m.default.Sizes.SIZE_16,color:m.default.Colors.HEADER_SECONDARY
},void 0,N.default.Messages.JOIN_SERVER_DESCRIPTION_NUF)),T(v.ModalContent,{},void 0,T("form",{onSubmit:G,className:y.default.inputForm},void 0,T(p.FormItem,{title:N.default.Messages.FORM_LABEL_INVITE_LINK,error:U,titleClassName:(0,r.default)(y.default.formTitle,(t={},t[y.default.error]=null!=U,t))},void 0,T(f.default,{value:I,onChange:b,className:y.default.input,inputClassName:y.default.inputInner,inputRef:w}))),T(m.default,{color:m.default.Colors.HEADER_SECONDARY,size:m.default.Sizes.SIZE_12},void 0,N.default.Messages.JOIN_SERVER_EXAMPLES.format({examples:h+"cool-people, hTKzmak"})),T(m.default,{size:m.default.Sizes.SIZE_12,color:m.default.Colors.HEADER_SECONDARY,className:y.default.connectCTA},void 0,N.default.Messages.JOIN_GUILD_CONNECT.format({onClick:function(){S();u.default.open(_.UserSettingsSections.CONNECTIONS)}})))),F=n.createElement(n.Fragment,null,T(s.default,{color:s.default.Colors.BRAND,onClick:G,disabled:0===I.length,submitting:g
},void 0,N.default.Messages.JOIN),T(s.default,{className:y.default.skipButton,look:s.default.Looks.BLANK,size:s.default.Sizes.MIN,onClick:a},void 0,N.default.Messages.BACK));return{content:k,footer:F}};var l,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e;a&&a.set(e,l);return l}(a(667294)),r=S(a(294184)),o=S(a(23170)),u=S(a(226800)),i=a(327269),s=S(a(956117)),d=S(a(530250)),f=S(a(279950)),c=a(354479),p=a(688388),v=a(3400),m=S(a(776360)),E=a(813079),_=a(770348),N=S(a(247001)),y=S(a(345719));function S(e){return e&&e.__esModule?e:{default:e}}function O(e){if("function"!=typeof WeakMap)return null
;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}function T(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),i=0;i<o;i++)u[i]=arguments[i+3];t.children=u}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var h=function(){var e=window.GLOBAL_ENV.INVITE_HOST,t="";if(null==e){e=location.host;t=_.Routes.INVITE("")}return location.protocol+"//"+e+t+"/"}()},91948:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=F;var l,n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=w(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor
;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e;a&&a.set(e,l);return l}(a(667294)),r=R(a(294184)),o=a(47354),u=a(536211),i=a(971517),s=a(805146),d=a(655251),f=R(a(574942)),c=R(a(728429)),p=R(a(151097)),v=R(a(530250)),m=a(477537),E=a(354479),_=a(3400),N=R(a(776360)),y=R(a(308920)),S=a(518802),O=R(a(322033)),T=R(a(194040)),h=R(a(241210)),A=R(a(79100)),M=R(a(458401)),I=a(754949),b=a(763840),C=a(770348),g=a(124874),D=R(a(247001)),P=R(a(242943)),U=["onSlideChange"];function R(e){return e&&e.__esModule?e:{default:e}}function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(w=function(e){return e?a:t})(e)}function G(){G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e};return G.apply(this,arguments)}
function k(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),i=0;i<o;i++)u[i]=arguments[i+3];t.children=u}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function F(e){var t=(0,E.useUID)(),a=e.onSlideChange,l=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++){a=r[l];t.indexOf(a)>=0||(n[a]=e[a])}return n}(e,U),R=l.onClose,w=n.useState(!1),F=w[0],L=w[1],j=(0,u.useStateFromStores)([c.default],(function(){return c.default.getCurrentUser()})),B=null!=j&&null==j.nsfwAllowed,H=n.useState(B?b.NUFSlides.AGE_GATE:b.NUFSlides.CHOOSE_TEMPLATE),z=H[0],Y=H[1],W=n.useState(null),V=W[0],x=W[1];n.useEffect((function(){a(F?b.NUFSlides.COMPLETE:z)}),[a,z,F])
;var J,Z=n.useState(null),$=Z[0],K=Z[1],X=n.useState(null),q=X[0],Q=X[1],ee=n.useState(!1),te=ee[0],ae=ee[1],le=(0,u.useStateFromStores)([O.default],(function(){return O.default.getType()===I.NewUserTypes.INVITE_UNCLAIMED})),ne=n.useCallback((function(e){Q(e);Y(b.NUFSlides.CREATION_INTENT);y.default.track(C.AnalyticEvents.GUILD_TEMPLATE_SELECTED,{template_name:e.label,template_code:e.code})}),[Q,Y]),re=(0,s.useCreationIntentSlide)({hasFooter:!1,onBack:function(){Q(null);Y(b.NUFSlides.CHOOSE_TEMPLATE)},onCreationIntentChosen:function(e){ae(e);Y(b.NUFSlides.CUSTOMIZE_GUILD)}}),oe=re.content,ue=re.footer,ie=(0,d.useCustomizeGuildSlide)({guildTemplate:q,titleClassName:P.default.customizeGuildTitle,hasFooter:!1,onGuildCreated:function(e){K(e);(null==q?void 0:q.id)===g.GuildTemplateId.CREATE?Y(b.NUFSlides.CHANNEL_PROMPT):L(!0)},onBack:function(){Y(b.NUFSlides.CREATION_INTENT)},isSlideReady:V===b.NUFSlides.CUSTOMIZE_GUILD,isCommunity:te}),se=ie.content,de=ie.footer,fe=(0,
i.useChannelPromptSlide)({createdGuildId:$,hasFooter:!1,onChannelPromptCompleted:function(){L(!0)},isSlideReady:V===b.NUFSlides.CHANNEL_PROMPT}),ce=fe.content,pe=fe.footer,ve=(0,A.default)({onBack:function(){return Y(b.NUFSlides.CHOOSE_TEMPLATE)},onComplete:function(){R()},onConnect:R,isSlideReady:V===b.NUFSlides.JOIN_GUILD}),me=ve.content,Ee=ve.footer;switch(z){case b.NUFSlides.CUSTOMIZE_GUILD:J=de;break;case b.NUFSlides.CHANNEL_PROMPT:J=pe;break;case b.NUFSlides.JOIN_GUILD:J=Ee;break;case b.NUFSlides.CREATION_INTENT:J=ue}if(F)return n.createElement(_.ModalRoot,G({},l,{size:_.ModalSize.MEDIUM,className:(0,r.default)(P.default.modal,P.default.completed),"aria-labelledby":t}),k(h.default,{onComplete:R}));var _e={impression_group:o.ImpressionGroups.GUILD_ADD_NUF};return n.createElement(_.ModalRoot,G({},l,{size:_.ModalSize.MEDIUM,className:P.default.modal,"aria-labelledby":t}),k("div",{className:P.default.sidebar},void 0,k(M.default,{step:z})),k("div",{className:(0,
r.default)(P.default.content,(0,S.getThemeClass)(C.ThemeTypes.LIGHT))},void 0,k(m.Slides,{activeSlide:z,onSlideReady:function(e){return x(e)},centered:!1},void 0,k(m.Slide,{id:b.NUFSlides.AGE_GATE},void 0,k("div",{className:P.default.container},void 0,k(T.default,{onComplete:function(){le?R():Y(b.NUFSlides.CHOOSE_TEMPLATE)},onClose:R}))),k(m.Slide,{id:b.NUFSlides.CHOOSE_TEMPLATE,impressionName:o.ImpressionNames.GUILD_ADD_LANDING,impressionProperties:_e},void 0,k("div",{className:(0,r.default)(P.default.container,P.default.shortFooter)},void 0,k(f.default,{className:P.default.templates,onChooseTemplate:ne,isNewUser:!0}))),k(m.Slide,{id:b.NUFSlides.CREATION_INTENT,impressionName:o.ImpressionNames.GUILD_ADD_INTENT_SELECTION,impressionProperties:_e},void 0,k("div",{className:(0,r.default)(P.default.container,P.default.standardFooter)},void 0,oe)),k(m.Slide,{id:b.NUFSlides.CUSTOMIZE_GUILD,impressionName:o.ImpressionNames.GUILD_ADD_CUSTOMIZE,impressionProperties:_e},void 0,k("div",{
className:(0,r.default)(P.default.container,P.default.standardFooter)},void 0,se)),k(m.Slide,{id:b.NUFSlides.CHANNEL_PROMPT,impressionName:o.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,impressionProperties:_e},void 0,k("div",{className:(0,r.default)(P.default.container,P.default.standardFooter)},void 0,ce)),k(m.Slide,{id:b.NUFSlides.JOIN_GUILD,impressionName:o.ImpressionNames.GUILD_ADD_JOIN,impressionProperties:_e},void 0,k("div",{className:(0,r.default)(P.default.container,P.default.standardFooter)},void 0,me))),z!==b.NUFSlides.AGE_GATE?k(_.ModalCloseButton,{onClick:R,className:P.default.closeButton}):null,z===b.NUFSlides.CHOOSE_TEMPLATE?k(_.ModalFooter,{justify:v.default.Justify.BETWEEN,className:(0,r.default)(P.default.footer,P.default.join)},void 0,k(p.default,{className:P.default.joinCTA,onClick:function(){Y(b.NUFSlides.JOIN_GUILD)}},void 0,k(N.default,{size:N.default.Sizes.SIZE_14,className:P.default.joinCTA
},void 0,D.default.Messages.NUF_HAVE_AN_INVITE_ALREADY," ",D.default.Messages.JOIN_SERVER_BUTTON_CTA))):null,null!=J?k(_.ModalFooter,{justify:v.default.Justify.BETWEEN,className:P.default.footer},void 0,J):null))}F.displayName="NUFModal"},458401:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=d;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=i(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=n?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e;a&&a.set(e,l)}(a(667294));var l,n=u(a(294184)),r=a(763840),o=u(a(304516));function u(e){return e&&e.__esModule?e:{default:e}}function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(i=function(e){return e?a:t})(e)}
function s(e,t,a,n){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var u=new Array(o),i=0;i<o;i++)u[i]=arguments[i+3];t.children=u}if(t&&r)for(var s in r)void 0===t[s]&&(t[s]=r[s]);else t||(t=r||{});return{$$typeof:l,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function d(e){var t,a,l,u,i,d,f,c,p,v,m,E=e.step,_=E===r.NUFSlides.AGE_GATE,N=E===r.NUFSlides.CHOOSE_TEMPLATE||E===r.NUFSlides.CREATION_INTENT,y=E===r.NUFSlides.CUSTOMIZE_GUILD,S=E===r.NUFSlides.CHANNEL_PROMPT||E===r.NUFSlides.JOIN_GUILD,O=y||S,T=N||O;return s("div",{className:o.default.sidebar},void 0,s("div",{className:(0,n.default)(o.default.step1,(t={},t[o.default.show]=_,t))}),s("div",{className:(0,n.default)(o.default.step24Clouds,(a={},a[o.default.show]=T,a))}),s("div",{className:(0,n.default)(o.default.step34Flag,(l={},l[o.default.show]=O,l))}),s("div",{
className:(0,n.default)(o.default.step24Base,(u={},u[o.default.show]=T,u))}),s("div",{className:(0,n.default)(o.default.step24Ground,(i={},i[o.default.show]=T,i))}),s("div",{className:(0,n.default)(o.default.step2Base,(d={},d[o.default.show]=N,d))}),s("div",{className:(0,n.default)(o.default.step2Character,(f={},f[o.default.show]=N,f))}),s("div",{className:(0,n.default)(o.default.step34Base,(c={},c[o.default.show]=O,c))}),s("div",{className:(0,n.default)(o.default.step3Character,(p={},p[o.default.show]=y,p))}),s("div",{className:(0,n.default)(o.default.step4Character,(v={},v[o.default.show]=S,v))}),s("div",{className:(0,n.default)(o.default.step24Foreground,(m={},m[o.default.show]=T,m))}))}d.displayName="SidebarArt"}}]);
//# sourceMappingURL=f686bda96e8eec1ca471.js.map