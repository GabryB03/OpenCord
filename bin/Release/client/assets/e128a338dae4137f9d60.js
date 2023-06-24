"use strict";(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[16972],{179839:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=N;var n,a=m(r(667294)),o=v(r(294184)),l=r(536211),u=m(r(609779)),i=v(r(607209)),s=v(r(788739)),f=r(582945),c=r(770348),d=v(r(685125)),p=v(r(3765));function v(e){return e&&e.__esModule?e:{default:e}}function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function S(e,t,r,a){
n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function N(e){var t=e.user,r=(0,l.useStateFromStores)([i.default],(function(){return null!=i.default.getStreamForUser(t.id)})),n=(0,l.useStateFromStores)([s.default],(function(){return s.default.getActivities(t.id)})),v=a.useMemo((function(){return n.filter((function(e){return e.type!==c.ActivityTypes.CUSTOM_STATUS}))}),[n]),y=a.useMemo((function(){return r?v.find((function(e){return e.type===c.ActivityTypes.PLAYING})):null}),[v,r]),m=a.useMemo((function(){return v.filter((function(e){return e!==y}))}),[y,v]);return S(f.ScrollerThin,{className:p.default.listScroller,fade:!0
},void 0,r?S(u.default,{type:u.UserActivityTypes.PROFILE,user:t,source:"Profile Modal",className:(0,o.default)(d.default.userProfileActivity,"newProfileActivityStyles"),activity:y}):null,m.map((function(e){return S(u.default,{type:u.UserActivityTypes.PROFILE,activity:e,user:t,useStoreStream:!1,source:"Profile Modal",className:(0,o.default)(d.default.userProfileActivity,"newProfileActivityStyles")},e.application_id+"-"+e.session_id+"-"+e.name)})))}N.displayName="UserProfileActivity"},299993:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=m;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=d(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e
;r&&r.set(e,n);return n}(r(667294)),o=c(r(294184)),l=c(r(956117)),u=r(770348),i=c(r(247001)),s=c(r(519514)),f=["className"];function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(d=function(e){return e?r:t})(e)}function p(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function v(){v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return v.apply(this,arguments)}function y(e){var t=e.className,r=function(e,t){
if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++){r=o[n];t.indexOf(r)>=0||(a[r]=e[r])}return a}(e,f);return a.createElement(l.default,v({},r,{look:l.default.Looks.FILLED,size:l.default.Sizes.SMALL,className:(0,o.default)(s.default.actionButton,t)}))}y.displayName="RequestActionButton";function m(e){var t=e.isCurrentUser,r=e.user,n=e.relationshipType,a=e.onAddFriend,o=e.onIgnoreFriend,f=e.onSendMessage;return t||n===u.RelationshipTypes.BLOCKED?null:n===u.RelationshipTypes.FRIEND||r.bot?p(y,{color:l.default.Colors.GREEN,onClick:f},void 0,i.default.Messages.SEND_MESSAGE):n===u.RelationshipTypes.PENDING_OUTGOING?p(y,{color:l.default.Colors.GREEN,disabled:!0},void 0,i.default.Messages.ADD_FRIEND_BUTTON_AFTER):n===u.RelationshipTypes.PENDING_INCOMING?p("div",{className:s.default.pendingIncoming},void 0,p(y,{color:l.default.Colors.GREEN,onClick:a},void 0,i.default.Messages.FRIEND_REQUEST_ACCEPT),p(y,{color:l.default.Colors.GREY,onClick:o,
className:s.default.actionRightButton},void 0,i.default.Messages.FRIEND_REQUEST_IGNORE)):p(y,{color:l.default.Colors.GREEN,onClick:a},void 0,i.default.Messages.ADD_FRIEND_BUTTON)}m.displayName="UserProfileFriendRequestButton"},853491:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=U;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=P(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n
}(r(667294)),o=r(536211),l=M(r(547393)),u=M(r(213847)),i=M(r(155502)),s=M(r(663303)),f=M(r(151097)),c=M(r(410208)),d=r(730977),p=M(r(435012)),v=M(r(804080)),y=M(r(971639)),m=r(582945),S=M(r(308920)),N=M(r(715419)),O=M(r(102856)),h=r(770348),_=M(r(247001)),g=M(r(624177)),b=M(r(3765));function M(e){return e&&e.__esModule?e:{default:e}}function P(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(P=function(e){return e?r:t})(e)}function I(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function A(e){var t=e.connectedAccounts,r=e.theme;if(null==t||0===t.length)return null
;var n=t.filter((function(e){return i.default.isSupported(e.type)})).map((function(e,t){var n,a,o,l=i.default.get(e.type),u=null===(n=l.getPlatformUserUrl)||void 0===n?void 0:n.call(l,e);u&&(a=I(f.default,{href:u,onClick:function(){return t=e.type,void S.default.track(h.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED,{platform_type:t});var t}},void 0,I(p.default,{className:g.default.connectedAccountOpenIcon})));e.verified&&(o=I(d.TooltipContainer,{element:"span",text:_.default.Messages.CONNECTION_VERIFIED},void 0,I(c.default,{className:g.default.connectedAccountVerifiedIcon,color:r===h.ThemeTypes.LIGHT?h.Colors.STATUS_GREY_200:h.Colors.PRIMARY_DARK},void 0,I(v.default,{color:r===h.ThemeTypes.LIGHT?h.Colors.STATUS_GREY_500:h.Colors.WHITE}))));return I("div",{className:g.default.connectedAccount},t,I("img",{alt:_.default.Messages.IMG_ALT_LOGO.format({name:l.name}),className:g.default.connectedAccountIcon,src:r===h.ThemeTypes.DARK?l.icon.darkSVG:l.icon.lightSVG}),I("div",{
className:g.default.connectedAccountNameInner},void 0,I("div",{className:g.default.connectedAccountName},void 0,e.name),o),a)}));return I("div",{className:g.default.userInfoSection},void 0,I("div",{className:g.default.connectedAccounts},void 0,n))}A.displayName="ConnectedUserAccounts";function E(){return I("div",{className:b.default.empty},void 0,I("div",{className:b.default.emptyIconStreamerMode}),I("div",{className:b.default.emptyText},void 0,_.default.Messages.STREAMER_MODE_ENABLED))}E.displayName="EmptyState";var T=I(E,{});function U(e){var t=e.user,r=e.autoFocusNote,n=void 0!==r&&r,i=(0,o.useStateFromStores)([N.default],(function(){var e,r;return null!==(e=null===(r=N.default.getUserProfile(t.id))||void 0===r?void 0:r.connectedAccounts)&&void 0!==e?e:[]})),f=(0,o.useStateFromStores)([s.default],(function(){return s.default.hidePersonalInformation})),c=(0,u.default)();return f?T:I(m.ScrollerThin,{fade:!0,className:g.default.infoScroller},void 0,I("div",{
className:g.default.userInfoSection},void 0,null!=t.bio&&""!==t.bio&&a.createElement(a.Fragment,null,I(y.default,{size:y.default.Sizes.SIZE_12,className:g.default.userInfoSectionHeader,uppercase:!0},void 0,_.default.Messages.USER_PROFILE_ABOUT_ME),I(O.default,{className:g.default.userBio,userBio:t.bio})),I(y.default,{size:y.default.Sizes.SIZE_12,className:g.default.userInfoSectionHeader,uppercase:!0},void 0,_.default.Messages.NOTE),I(l.default,{userId:t.id,autoFocus:n,className:g.default.note})),I(A,{connectedAccounts:i,theme:c}))}U.displayName="UserInfoBase"},116972:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=A;var n,a=M(r(667294)),o=g(r(294184)),l=r(536211),u=g(r(284382)),i=r(982437),s=g(r(319879)),f=g(r(607209)),c=g(r(423046)),d=g(r(788739)),p=g(r(728429)),v=M(r(186465)),y=r(3400),m=g(r(168858)),S=g(r(777075)),N=r(248348),O=r(770348),h=g(r(247001)),_=g(r(706643));function g(e){return e&&e.__esModule?e:{default:e}}function b(e){
if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function M(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function P(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}
function I(e){var t=e.user,r=e.isCurrentUser,n=e.section,a=e.setSection,o=e.hasActivity;return P("div",{className:_.default.tabBarContainer},void 0,P(v.default,{selectedItem:n,type:v.Types.TOP,onItemSelect:a,className:_.default.tabBar},void 0,t.isNonUserBot()?null:P(v.Item,{className:_.default.tabBarItem,id:N.UserProfileSections.USER_INFO},void 0,h.default.Messages.USER_INFO),!t.bot&&o?P(v.Item,{className:_.default.tabBarItem,id:N.UserProfileSections.ACTIVITY},void 0,h.default.Messages.USER_PROFILE_ACTIVITY):null,r?null:P(v.Item,{className:_.default.tabBarItem,id:N.UserProfileSections.MUTUAL_GUILDS},void 0,h.default.Messages.MUTUAL_GUILDS),t.bot||r?null:P(v.Item,{className:_.default.tabBarItem,id:N.UserProfileSections.MUTUAL_FRIENDS},void 0,h.default.Messages.MUTUAL_FRIENDS)))}I.displayName="UserProfileTabBar";function A(e){
var t,r,n,v=e.user,g=e.guildId,b=e.friendToken,M=e.autoFocusNote,A=e.initialSection,E=void 0===A?N.UserProfileSections.USER_INFO:A,T=e.transitionState,U=e.onClose,R=null!==(t=(0,l.useStateFromStores)([p.default],(function(){return p.default.getUser(v.id)})))&&void 0!==t?t:v;(0,i.useSubscribeGuildMembers)(((r={})[g]=[R.id],r));var w=(0,l.useStateFromStores)([f.default],(function(){return null!=f.default.getStreamForUser(R.id)})),C=(0,l.useStateFromStores)([d.default],(function(){return d.default.findActivity(R.id,(function(e){return e.type!==O.ActivityTypes.CUSTOM_STATUS}))})),j=a.useState(!1),k=j[0],F=j[1],D=a.useState(R.isNonUserBot()?N.UserProfileSections.MUTUAL_GUILDS:E),L=D[0],G=D[1],B=(0,l.useStateFromStores)([c.default],(function(){return c.default.getId()===R.id})),W=null!=C||w,x=!B||W;W||L!==N.UserProfileSections.ACTIVITY||G(N.UserProfileSections.USER_INFO);var z=a.useCallback((function(e){F(!0);G(e)}),[]);return P(u.default,{section:O.AnalyticsSections.PROFILE_MODAL
},void 0,P(y.ModalRoot,{transitionState:T,className:_.default.root,"aria-label":h.default.Messages.USER_PROFILE_MODAL},void 0,P("div",{className:_.default.topSection},void 0,P(S.default,{user:R,friendToken:b,onClose:U,isStreaming:(0,s.default)(C)}),x?P(I,{user:R,section:L,setSection:z,hasActivity:W,isCurrentUser:B}):null),P("div",{className:(0,o.default)(_.default.body,(n={},n[_.default.noTabBar]=!x,n))},void 0,P(m.default,{user:R,autoFocusNote:M&&!k,selectedSection:L,onClose:U}))))}A.displayName="UserProfileModal"},168858:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=e.user,r=e.selectedSection,n=e.autoFocusNote,s=e.onClose;switch(r){case i.UserProfileSections.ACTIVITY:return c(a.default,{user:t});case i.UserProfileSections.MUTUAL_GUILDS:return c(u.default,{user:t,onClose:s});case i.UserProfileSections.MUTUAL_FRIENDS:return c(l.default,{user:t});case i.UserProfileSections.USER_INFO:default:return c(o.default,{autoFocusNote:n,user:t})}}
;!function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n)}(r(667294));var n,a=s(r(179839)),o=s(r(853491)),l=s(r(883164)),u=s(r(728044)),i=r(248348);function s(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function c(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}
if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}},777075:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=H;var n,a=G(r(667294)),o=r(536211),l=D(r(709403)),u=r(378158),i=r(264720),s=D(r(237923)),f=D(r(226800)),c=D(r(252149)),d=D(r(133464)),p=D(r(423046)),v=D(r(788739)),y=D(r(290629)),m=D(r(956117)),S=D(r(16941)),N=D(r(730977)),O=D(r(435012)),h=D(r(301927)),_=D(r(417184)),g=G(r(628551)),b=D(r(776360)),M=D(r(308920)),P=D(r(608417)),I=r(997069),A=D(r(922629)),E=D(r(715419)),T=r(273845),U=G(r(286004)),R=G(r(674356)),w=D(r(299993)),C=r(770348),j=r(478036),k=D(r(247001)),F=D(r(674198));function D(e){return e&&e.__esModule?e:{default:e}}function L(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(L=function(e){return e?r:t})(e)}function G(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{
default:e};var r=L(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function B(){B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return B.apply(this,arguments)}function W(e,t,r,n,a,o,l){try{var u=e[o](l),i=u.value}catch(e){r(e);return}u.done?t(i):Promise.resolve(i).then(n,a)}function x(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){W(o,n,a,l,u,"next",e)}function u(e){W(o,n,a,l,u,"throw",e)}l(void 0)}))}}function z(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103)
;var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function $(e){var t=e.customStatusActivity;return z("div",{className:F.default.customStatusActivity},void 0,z(b.default,{size:b.default.Sizes.SIZE_14,color:b.default.Colors.HEADER_SECONDARY,className:F.default.customStatusText},void 0,z(d.default,{activity:t,className:F.default.customStatus,emojiClassName:F.default.customStatusEmoji,soloEmojiClassName:F.default.customStatusSoloEmoji})))}$.displayName="CustomStatusActivity";var Y=A.default.getEnableHardwareAcceleration()?g.AnimatedAvatar:g.default;function H(e){var t=e.user,n=e.friendToken,d=e.isStreaming,b=e.onClose,A=(0,T.useAnimatedAvatarSrc)({user:t,size:120}),D=A.avatarSrc,L=A.eventHandlers,G=(0,
o.useStateFromStores)([y.default],(function(){return y.default.getRelationshipType(t.id)})),W=(0,o.useStateFromStores)([v.default],(function(){return v.default.isMobileOnline(t.id)})),H=(0,o.useStateFromStores)([v.default],(function(){return v.default.getStatus(t.id)})),V=(0,o.useStateFromStores)([E.default],(function(){return E.default.getUserProfile(t.id)})),Z=(0,o.useStateFromStores)([p.default],(function(){return p.default.getId()===t.id})),K=(0,o.useStateFromStores)([v.default],(function(){return v.default.findActivity(t.id,(function(e){return e.type===C.ActivityTypes.CUSTOM_STATUS}))}));function q(){b();(0,i.popLayer)()}function Q(){s.default.removeRelationship(t.id,{location:"User Profile"})}function J(){l.default.openPrivateChannel(t.id);q()}function X(){try{s.default.addRelationship(t.id,{location:"User Profile"},C.RelationshipTypes.BLOCKED)}catch(e){q()}}var ee=null==V?void 0:V.application;return z("header",{},void 0,z(U.default,{onClose:q,user:t,
bannerType:U.UserBannerTypes.PROFILE,guildId:void 0}),z("div",{className:F.default.header},void 0,a.createElement("div",L,z(Y,{src:D,size:g.Sizes.SIZE_120,className:F.default.avatar,status:d?j.StatusTypes.STREAMING:H,isMobile:W,statusTooltip:!0,"aria-label":t.username})),z("div",{className:F.default.headerTop},void 0,(null==V?void 0:V.profileFetchFailed)?z(N.default,{text:k.default.Messages.USER_PROFILE_LOAD_ERROR,spacing:20},void 0,(function(e){return a.createElement(_.default,B({},e,{className:F.default.warningCircleIcon,color:C.Colors.STATUS_YELLOW}))})):z(R.default,{user:t,className:F.default.badgeList,premiumSince:null==V?void 0:V.premiumSince,premiumGuildSince:null==V?void 0:V.premiumGuildSince,openPremiumSettings:function(){M.default.track(C.AnalyticEvents.PREMIUM_PROMOTION_OPENED,{location_page:null,location_section:C.AnalyticsSections.PROFILE_MODAL,location_object:C.AnalyticsObjects.TOOLTIP});q();f.default.open(C.UserSettingsSections.PREMIUM)},size:R.BadgeSizes.SIZE_24,
shrinkAtCount:8,shrinkToSize:R.BadgeSizes.SIZE_18}),z("div",{className:F.default.relationshipButtons},void 0,null!=ee&&(0,I.canInstallApplication)(ee.id,ee.customInstallUrl,ee.installParams)?z(m.default,{look:m.default.Looks.FILLED,size:m.default.Sizes.SMALL,onClick:function(){return(0,I.installApplication)(ee.id,ee.customInstallUrl,ee.installParams)},className:F.default.applicationInstallButton},void 0,z("div",{className:F.default.applicationInstallButtonContent},void 0,z("span",{className:F.default.applicationInstallButtonText},void 0,k.default.Messages.APPLICATION_ADD_TO_SERVER),null==ee.customInstallUrl||P.default.isDiscordUrl(ee.customInstallUrl)?null:z(O.default,{className:F.default.launchIcon,width:16,height:16}))):null,z(w.default,{user:t,isCurrentUser:Z,relationshipType:G,onAddFriend:function(){try{s.default.addRelationship(t.id,{location:"User Profile"},void 0,n)}catch(e){q()}},onIgnoreFriend:Q,onSendMessage:J}),Z||t.isNonUserBot()?null:z(S.default,{focusProps:{offset:{left:8
}},onClick:function(e){(0,u.openContextMenuLazy)(e,x(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return r.e(41056).then(r.bind(r,441056));case 2:t=e.sent;n=t.default;return e.abrupt("return",(function(e){return a.createElement(n,B({},e,{relationshipType:G,onRemoveFriend:Q,onBlock:X,onMessage:J}))}));case 5:case"end":return e.stop()}}),e)}))))}},void 0,z(h.default,{className:F.default.additionalActionsIcon}))))),z(c.default,{user:t,className:null!=K?F.default.nameTagWithCustomStatus:F.default.nameTagNoCustomStatus,usernameClass:F.default.username,discriminatorClass:F.default.discriminator,botClass:F.default.botTag}),null!=K?z($,{customStatusActivity:K}):null)}H.displayName="UserProfileModalHeader"},883164:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=I;var n,a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e
};var r=O(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}(r(667294)),o=r(536211),l=r(378158),u=r(483559),i=N(r(252149)),s=N(r(16941)),f=N(r(80828)),c=N(r(628551)),d=r(582945),p=N(r(715419)),v=r(910992),y=r(770348),m=N(r(247001)),S=N(r(3765));function N(e){return e&&e.__esModule?e:{default:e}}function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function h(){h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return h.apply(this,arguments)}function _(e,t,r,n,a,o,l){try{var u=e[o](l),i=u.value}catch(e){r(e);return}
u.done?t(i):Promise.resolve(i).then(n,a)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){_(o,n,a,l,u,"next",e)}function u(e){_(o,n,a,l,u,"throw",e)}l(void 0)}))}}function b(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function M(e){var t=e.user,r=e.status,n=e.onSelect,a=e.onContextMenu;return b(s.default,{className:S.default.listRow,onClick:function(){return n(t.id)},onContextMenu:function(e){return a(e,t)}},void 0,b(c.default,{src:t.getAvatarURL(void 0,40),"aria-label":t.username,size:c.default.Sizes.SIZE_40,status:r,
className:S.default.listAvatar}),b(i.default,{user:t,className:S.default.listName,discriminatorClass:S.default.listDiscriminator}))}M.displayName="FriendRow";var P=b(f.default,{});function I(e){var t,n=e.user,i=(0,o.useStateFromStores)([p.default],(function(){return p.default.getMutualFriends(n.id)}));a.useEffect((function(){null==i&&(0,u.fetchMutualFriends)(n.id)}),[i,n.id]);function s(e){(0,v.openUserProfileModal)({userId:e,analyticsLocation:{section:y.AnalyticsSections.USER_PROFILE_MUTUAL_FRIENDS}})}function f(e,t){(0,l.openContextMenuLazy)(e,g(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([r.e(31626),r.e(1759),r.e(56159)]).then(r.bind(r,856159));case 2:n=e.sent;o=n.default;return e.abrupt("return",(function(e){return a.createElement(o,h({},e,{user:t}))}));case 5:case"end":return e.stop()}}),e)}))))}t=null==i?b("div",{className:S.default.empty},void 0,P):0===i.length?b("div",{
className:S.default.empty},void 0,b("div",{className:S.default.emptyIconFriends}),b("div",{className:S.default.emptyText},void 0,m.default.Messages.NO_MUTUAL_FRIENDS)):i.map((function(e){return b(M,{user:e.user,status:e.status,onSelect:s,onContextMenu:f},e.key)}));return b(d.ScrollerThin,{className:S.default.listScroller,fade:!0},void 0,t)}I.displayName="MutualFriends"},728044:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=T;var n,a=b(r(667294)),o=_(r(294184)),l=r(536211),u=r(378158),i=r(264720),s=_(r(213847)),f=r(139982),c=_(r(211136)),d=_(r(16941)),p=_(r(380439)),v=b(r(628551)),y=r(582945),m=_(r(715419)),S=r(770348),N=_(r(247001)),O=_(r(3765)),h=_(r(131910));function _(e){return e&&e.__esModule?e:{default:e}}function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=g(t)
;if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=a?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(n,o,l):n[o]=e[o]}n.default=e;r&&r.set(e,n);return n}function M(){M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return M.apply(this,arguments)}function P(e,t,r,n,a,o,l){try{var u=e[o](l),i=u.value}catch(e){r(e);return}u.done?t(i):Promise.resolve(i).then(n,a)}function I(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function l(e){P(o,n,a,l,u,"next",e)}function u(e){P(o,n,a,l,u,"throw",e)}l(void 0)}))}}function A(e,t,r,a){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,l=arguments.length-3;if(t||0===l||(t={
children:void 0}),1===l)t.children=a;else if(l>1){for(var u=new Array(l),i=0;i<l;i++)u[i]=arguments[i+3];t.children=u}if(t&&o)for(var s in o)void 0===t[s]&&(t[s]=o[s]);else t||(t=o||{});return{$$typeof:n,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function E(e){var t=e.guild,r=e.nick,n=e.theme,a=e.onSelect,l=e.onContextMenu,u=e.user,i=u.hasAvatarForGuild(t.id);return A(d.default,{focusProps:{offset:{right:8}},className:O.default.listRow,onClick:function(){return a(t.id)},onContextMenu:function(e){return l(e,t)}},void 0,A(p.default,{tabIndex:-1,guild:t,showBadge:!0,className:(0,o.default)(O.default.listAvatar,null==t.icon?h.default.guildAvatarWithoutIcon:null),badgeStrokeColor:n===S.ThemeTypes.DARK?S.Colors.PRIMARY_DARK_600:S.Colors.WHITE,size:p.default.Sizes.MEDIUM,active:!0}),A("div",{className:O.default.listRowContent},void 0,A("div",{className:O.default.listName},void 0,t.toString()),i||null!=r?A("div",{className:h.default.guildNick},void 0,i&&A(v.default,{
src:u.getAvatarURL(t.id,16),size:v.Sizes.SIZE_16,className:h.default.guildAvatar,"aria-hidden":!0}),null!=r?r:u.toString()):null))}E.displayName="GuildRow";function T(e){var t,n=e.user,o=e.onClose,d=(0,l.useStateFromStores)([m.default],(function(){return m.default.getMutualGuilds(n.id)})),p=(0,s.default)();function v(e){(0,f.transitionTo)(S.Routes.CHANNEL(e,c.default.getChannelId(e)));o();(0,i.popLayer)()}function h(e,t){(0,u.openContextMenuLazy)(e,I(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return Promise.all([r.e(40532),r.e(38698),r.e(53734)]).then(r.bind(r,853734));case 2:n=e.sent;o=n.default;return e.abrupt("return",(function(e){return a.createElement(o,M({},e,{guild:t}))}));case 5:case"end":return e.stop()}}),e)}))))}t=null==d||0===d.length?A("div",{className:O.default.empty},void 0,A("div",{className:O.default.emptyIconGuilds}),A("div",{className:O.default.emptyText
},void 0,N.default.Messages.NO_MUTUAL_GUILDS)):d.map((function(e){var t=e.guild,r=e.nick;return A(E,{user:n,guild:t,nick:r,theme:p,onSelect:v,onContextMenu:h},t.id)}));return A(y.ScrollerThin,{className:O.default.listScroller,fade:!0},void 0,t)}T.displayName="MutualGuilds"}}]);
//# sourceMappingURL=e128a338dae4137f9d60.js.map