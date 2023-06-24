(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[57349],{825185:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.accountDetailsClose=function(){r.default.dirtyDispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_CLOSE})};t.accountDetailsInit=function(){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_INIT})};t.disableAccount=function(e,t){var a={title:t?f.default.Messages.DELETE_ACCOUNT:f.default.Messages.DISABLE_ACCOUNT},i=t?d.Endpoints.DELETE_ACCOUNT:d.Endpoints.DISABLE_ACCOUNT;return(0,u.default)(a,(function(t){return n.default.post({url:i,body:m({password:e},t),oldFormErrors:!0})}),{checkEnabled:!1}).then((function(){r.default.dispatch({type:d.ActionTypes.LOGOUT});(0,o.transitionTo)(d.Routes.DEFAULT_LOGGED_OUT)}))};t.getHarvestStatus=function(){return n.default.get({url:d.Endpoints.USER_HARVEST,oldFormErrors:!0})};t.requestHarvest=function(){return n.default.post({url:d.Endpoints.USER_HARVEST,oldFormErrors:!0})}
;t.resetAllPending=function(){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_RESET_ALL_PENDING})};t.saveAccountChanges=function(e){var t=e.username,a=e.discriminator,n=e.email,o=e.password,c=e.avatar,p=e.newPassword,E=e.banner,I=e.accentColor,_=e.bio;r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SUBMIT});return(0,u.default)({title:f.default.Messages.TWO_FA_CHANGE_ACCOUNT},(function(e){var r=m({username:t,email:n,password:o,avatar:c,discriminator:a,banner:E,accent_color:I,bio:_,new_password:p},e),s=i.default.get(d.DEVICE_TOKEN);if(null!=d.DEVICE_PUSH_PROVIDER&&null!=s){r.push_provider=d.DEVICE_PUSH_PROVIDER;r.push_token=s}var l=i.default.get(d.DEVICE_VOIP_TOKEN);if(null!=d.DEVICE_PUSH_VOIP_PROVIDER&&null!=l){r.push_voip_provider=d.DEVICE_PUSH_VOIP_PROVIDER;r.push_voip_token=l}return v(r)}),{checkEnabled:!1,hooks:{onEarlyClose:function(){return r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE,errors:{}})}}}).then((function(e){var t=e.body
;s.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED,{animated:(0,l.isAnimatedIconHash)(t.avatar)});r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS});return e}),(function(e){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE,errors:e.body});return e}))};t.saveAccountRequest=v;t.setDisableSubmit=function(e){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT,disable:e})};t.setPendingAccentColor=function(e){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR,color:e})};t.setPendingAvatar=function(e){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR,avatar:e})};t.setPendingBanner=function(e){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER,banner:e})};t.setPendingBio=function(e){r.default.dispatch({type:d.ActionTypes.USER_SETTINGS_ACCOUNT_SET_PENDING_BIO,bio:e})}
;var n=c(a(118915)),i=c(a(972247)),r=c(a(636602)),o=a(139982),s=c(a(308920)),l=a(692711),u=c(a(40856)),d=a(770348),f=c(a(247001));function c(e){return e&&e.__esModule?e:{default:e}}function p(e,t,a,n,i,r,o){try{var s=e[r](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function E(e){return function(){var t=this,a=arguments;return new Promise((function(n,i){var r=e.apply(t,a);function o(e){p(r,n,i,o,s,"next",e)}function s(e){p(r,n,i,o,s,"throw",e)}o(void 0)}))}}function m(){m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};return m.apply(this,arguments)}function v(e){return I.apply(this,arguments)}function I(){return(I=E(regeneratorRuntime.mark((function e(t){var a,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;return n.default.patch({url:d.Endpoints.ME,body:t,oldFormErrors:!0});case 2:a=e.sent
;if((i=a.body).token){o=i.token;delete i.token;r.default.dispatch({type:d.ActionTypes.UPDATE_TOKEN,token:o,userId:i.id})}r.default.dispatch({type:d.ActionTypes.CURRENT_USER_UPDATE,user:i});return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},757349:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,i=Z(a(667294)),r=z(a(294184)),o=a(536211),s=z(a(939949)),l=a(825185),u=z(a(235879)),d=z(a(268660)),f=z(a(539563)),c=z(a(433385)),p=z(a(311492)),E=z(a(876874)),m=z(a(30098)),v=z(a(728429)),I=z(a(956117)),_=z(a(530250)),N=z(a(380439)),S=z(a(230047)),g=z(a(279950)),C=z(a(730977)),h=a(688388),A=z(a(662197)),T=a(3400),R=z(a(971639)),O=z(a(776360)),M=z(a(308920)),y=z(a(692711)),b=z(a(542307)),F=Z(a(849997)),P=a(237639),U=a(41787),V=a(327769),D=z(a(233915)),L=a(602175),w=a(770348),B=z(a(247001)),H=z(a(133766)),k=z(a(698242)),G=z(a(483683)),j=z(a(63685)),x=z(a(634737));function z(e){return e&&e.__esModule?e:{
default:e}}function W(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(W=function(e){return e?a:t})(e)}function Z(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=W(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e;a&&a.set(e,n);return n}function Y(){Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};return Y.apply(this,arguments)}function q(e,t,a,n,i,r,o){try{var s=e[r](o),l=s.value}catch(e){a(e);return}s.done?t(l):Promise.resolve(l).then(n,i)}function K(e){return function(){var t=this,a=arguments;return new Promise((function(n,i){
var r=e.apply(t,a);function o(e){q(r,n,i,o,s,"next",e)}function s(e){q(r,n,i,o,s,"throw",e)}o(void 0)}))}}function $(e,t,a,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=i;else if(o>1){for(var s=new Array(o),l=0;l<o;l++)s[l]=arguments[l+3];t.children=s}if(t&&r)for(var u in r)void 0===t[u]&&(t[u]=r[u]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var J;!function(e){e[e.CLAIM_ACCOUNT=0]="CLAIM_ACCOUNT";e[e.EMAIL_CONFIRMATION=1]="EMAIL_CONFIRMATION";e[e.VERIFICATION_FORM=2]="VERIFICATION_FORM"}(J||(J={}));var X=function(e){var t=e.email,a=e.password,n=e.setEmail,i=e.setPassword,r=e.emailError,o=e.passwordError;return $("div",{className:H.default.content},void 0,$("img",{alt:B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_ICON,src:k.default,className:H.default.applicationIcon}),$(R.default,{
size:R.default.Sizes.SIZE_24,className:H.default.header},void 0,B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_TITLE),$(O.default,{size:O.default.Sizes.SIZE_14,color:O.default.Colors.HEADER_SECONDARY},void 0,B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_SUBTITLE),$("hr",{className:H.default.divider}),$(h.FormItem,{title:B.default.Messages.FORM_LABEL_EMAIL,className:H.default.formItem},void 0,$(g.default,{value:t,error:r,onChange:n,autoFocus:!0})),$(h.FormItem,{title:B.default.Messages.FORM_LABEL_PASSWORD,className:H.default.formItem},void 0,$(g.default,{type:"password",value:a,error:o,onChange:i})))};X.displayName="MemberVerificationClaimAccountStep";var Q=function(e){var t=e.email;return $("div",{className:H.default.content},void 0,$("img",{alt:B.default.Messages.MEMBER_VERIFICATION_VERIFY_EMAIL_ICON,src:x.default,className:H.default.applicationIcon}),$(R.default,{size:R.default.Sizes.SIZE_24,className:H.default.header
},void 0,B.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_TITLE.format({email:t})),$(O.default,{size:O.default.Sizes.SIZE_14,color:O.default.Colors.HEADER_SECONDARY},void 0,B.default.Messages.MEMBER_VERIFICATION_EMAIL_CONFIRMATION_SUBTITLE),$(I.default,{className:H.default.resendButton,size:I.default.Sizes.NONE,look:I.default.Looks.LINK,onClick:function(){return s.default.verifyResend()}},void 0,B.default.Messages.MEMBER_VERIFICATION_EMAIL_RESEND))};Q.displayName="MemberVerificationEmailConfirmationStep";var ee=function(){return a.e(61029).then(a.t.bind(a,640002,19)).then((function(e){return e.default}))},te=function(e){var t=e.guildId,a=e.formState,n=e.updateFormState,i=e.useReducedMotion,o=e.isPreview,s=void 0!==o&&o;return $("div",{className:H.default.content},void 0,$("div",{className:H.default.animationAndSparklesContainer},void 0,$("img",{alt:B.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:j.default,className:(0,
r.default)(H.default.sparkleIcon,H.default.sparkleBottom)}),$(S.default,{importData:ee,shouldAnimate:!i,className:H.default.animation}),$("img",{alt:B.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,src:G.default,className:(0,r.default)(H.default.sparkleIcon,H.default.sparkleTop)})),$(R.default,{size:R.default.Sizes.SIZE_24,className:H.default.header},void 0,B.default.Messages.MEMBER_VERIFICATION_MODAL_TITLE),$(O.default,{size:O.default.Sizes.SIZE_14,color:O.default.Colors.HEADER_SECONDARY,className:H.default.subheader},void 0,B.default.Messages.MEMBER_VERIFICATION_MODAL_SUBTITLE),$("hr",{className:H.default.divider}),$(D.default,{className:H.default.verificationForm,guildId:t,formState:a,updateFormState:n,isPreview:s}))};te.displayName="MemberVerificationFormStep";var ae=function(e){var t,a,n,s=e.guildId,S=e.onClose,g=e.onComplete,h=e.inviteCode,D=e.isPreview,k=void 0!==D&&D,G=(0,V.useMemberVerificationFormNoticeStore)((function(e){return e.hasUnsubmittedChanges})),j=(0,
o.useStateFromStores)([m.default],(function(){return m.default.getGuild(s)})),x=(0,o.useStateFromStores)([F.default],(function(){return F.default.get(s)})),z=(0,o.useStateFromStores)([v.default],(function(){return v.default.getCurrentUser()})),W=!(null==z?void 0:z.isClaimed()),Z=null==z?void 0:z.verified,q=null==z?void 0:z.isPhoneVerified(),ee=(0,o.useStateFromStores)([c.default],(function(){return c.default.getGuildEmoji(s)})),ae=(0,o.useStateFromStoresObject)([p.default],(function(){return{storeMemberCount:p.default.getMemberCount(s),storeOnlineCount:p.default.getOnlineCount(s)}
})),ne=ae.storeMemberCount,ie=ae.storeOnlineCount,re=i.useState(null!==(t=null==x?void 0:x.formFields)&&void 0!==t?t:[]),oe=re[0],se=re[1],le=i.useState(!1),ue=le[0],de=le[1],fe=i.useState(null),ce=fe[0],pe=fe[1],Ee=i.useState(W?J.CLAIM_ACCOUNT:J.VERIFICATION_FORM),me=Ee[0],ve=Ee[1],Ie=i.useState(""),_e=Ie[0],Ne=Ie[1],Se=i.useState(""),ge=Se[0],Ce=Se[1],he=i.useState(null),Ae=he[0],Te=he[1],Re=i.useState(null),Oe=Re[0],Me=Re[1],ye=null==x?void 0:x.guild,be=i.useMemo((function(){return null!=j?j:null!=ye?new f.default(ye):null}),[j,ye]),Fe=i.useMemo((function(){var e,t=null!==(e=0===ee.length?null==ye?void 0:ye.emojis:ee)&&void 0!==e?e:[],a=[].concat(t).reverse(),n=0,i=a.length;if(i>12&&null!=a){a=a.slice(0,11);n=Math.min(i-a.length,99)}return{emojisToRender:a,remainingEmojis:n,numGuildEmoji:i}}),[ye,ee]),Pe=Fe.emojisToRender,Ue=Fe.remainingEmojis,Ve=Fe.numGuildEmoji,De=null!=ne?ne:null==ye?void 0:ye.approximate_member_count,Le=null!=ie?ie:null==ye?void 0:ye.approximate_presence_count
;i.useEffect((function(){(0,V.setHasUnsubmittedChanges)(!1);return function(){(0,V.setHasUnsubmittedChanges)(!1)}}),[]);i.useEffect((function(){b.default.fetchVerificationForm(s,h)}),[s,h]);i.useEffect((function(){null!=x&&se(x.formFields)}),[x]);i.useEffect((function(){null!=z&&z.isClaimed()&&ve(J.VERIFICATION_FORM)}),[z]);i.useEffect((function(){me===J.EMAIL_CONFIRMATION&&Z&&ve(J.VERIFICATION_FORM)}),[me,Z]);i.useEffect((function(){null!=s&&M.default.track(w.AnalyticEvents.OPEN_MODAL,{type:L.MEMBER_VERIFICATION_TYPE,guild_id:s})}),[s]);i.useEffect((function(){var e=oe.some((function(e){return e.field_type!==P.VerificationFormFieldTypes.TERMS&&(0,U.isValidFormResponse)(e)}));e&&!G?(0,V.setHasUnsubmittedChanges)(!0):!e&&G&&(0,V.setHasUnsubmittedChanges)(!1)}),[oe,G]);var we=i.useMemo((function(){return!(((null==be?void 0:be.verificationLevel)!==w.VerificationLevels.VERY_HIGH||(null==z?void 0:z.isStaff()))&&Z||q)||oe.some((function(e){return!(0,U.isValidFormResponse)(e)}))
}),[oe,be,q,Z,z]),Be=(0,o.useStateFromStores)([u.default],(function(){return u.default.useReducedMotion}));if(null==be)return null;var He=function(){var e=K(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:de(!0);Te(null);Me(null);e.prev=3;e.next=6;return(0,l.saveAccountRequest)({email:_e,password:ge});case 6:de(!1);ve(J.EMAIL_CONFIRMATION);e.next=14;break;case 10:e.prev=10;e.t0=e.catch(3);Te(null===e.t0||void 0===e.t0||null===(t=e.t0.body)||void 0===t?void 0:t.email);Me(null===e.t0||void 0===e.t0||null===(a=e.t0.body)||void 0===a?void 0:a.password);case 14:e.prev=14;de(!1);return e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,10,14,17]])})));return function(){return e.apply(this,arguments)}}(),ke=function(){var e=K(regeneratorRuntime.mark((function e(){var t,a,n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:de(!0);pe(null)
;if(null==(t=null!=z?E.default.getMember(s,z.id):null)||t.isPending){e.next=6;break}null==S||S(!0);return e.abrupt("return");case 6:e.prev=6;e.next=9;return null==g?void 0:g(Y({},null!=x?x:F.NO_MEMBER_VERIFICATION_FORM,{formFields:oe}));case 9:null==S||S(!0);e.next=17;break;case 12:e.prev=12;e.t0=e.catch(6);null!=(null==(i=null===e.t0||void 0===e.t0?void 0:e.t0.body)||null===(a=i.errors)||void 0===a?void 0:a.version)||null!=(null==i||null===(n=i.errors)||void 0===n?void 0:n.form_fields)?pe(B.default.Messages.MEMBER_VERIFICATION_VERSION_MISMATCH_ERROR):pe(null==i?void 0:i.message);de(!1);case 17:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(){return e.apply(this,arguments)}}(),Ge=$(X,{email:_e,password:ge,setEmail:Ne,setPassword:Ce,emailError:Ae,passwordError:Oe}),je=$(Q,{email:_e}),xe=$(te,{guildId:s,formState:oe,updateFormState:se,isPreview:k,useReducedMotion:Be});return i.createElement(i.Fragment,null,$(_.default,{direction:_.default.Direction.VERTICAL,
justify:_.default.Justify.BETWEEN,className:H.default.guildSidebar,shrink:0},void 0,$("div",{},void 0,$(N.default,{guild:be,active:!0,className:(0,r.default)(H.default.guildIcon,(a={},a[H.default.guildIconNoIcon]=null==be.icon,a))}),$(R.default,{size:R.default.Sizes.SIZE_20,className:H.default.guildName},void 0,null==be?void 0:be.name),$(O.default,{className:H.default.guildDescription,size:O.default.Sizes.SIZE_14,color:O.default.Colors.HEADER_SECONDARY},void 0,null==x?void 0:x.description),null!=Pe&&Pe.length>0?i.createElement(i.Fragment,null,$("hr",{className:H.default.divider}),$(A.default,{},void 0,B.default.Messages.MEMBER_VERIFICATION_NUM_EMOJIS.format({emojis:Ve})),$("div",{className:H.default.emojisContainer},void 0,Pe.map((function(e){var t=y.default.getEmojiURL({id:e.id,animated:!1,size:24});return $(C.default,{text:":"+e.name+":"},e.id,(function(e){return i.createElement("img",Y({},e,{width:24,height:24,src:t,className:H.default.emoji,alt:""}))}))
})),null!=Ue&&Ue>0?$(R.default,{size:R.default.Sizes.SIZE_12,muted:!0,className:H.default.emoji},void 0,"+"+Ue):null)):null),$("div",{},void 0,null!=Le&&$(_.default,{align:_.default.Align.CENTER,className:H.default.onlineCount},void 0,$("div",{className:H.default.dotOnline}),$(O.default,{},void 0,B.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({membersOnline:Le}))),null!=De&&$(_.default,{align:_.default.Align.CENTER},void 0,$("div",{className:H.default.dotMembers}),$(O.default,{},void 0,B.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({members:De}))))),$("div",{className:H.default.modal},void 0,$(T.ModalContent,{className:H.default.modalContent},void 0,$(d.default,{className:(0,r.default)(H.default.sequencer,(n={},n[H.default.centerContent]=me!==J.VERIFICATION_FORM,n)),steps:[J.CLAIM_ACCOUNT,J.EMAIL_CONFIRMATION,J.VERIFICATION_FORM],step:me},void 0,function(){switch(me){case J.CLAIM_ACCOUNT:return Ge;case J.EMAIL_CONFIRMATION:return je;case J.VERIFICATION_FORM:
return xe}}())),function(){switch(me){case J.CLAIM_ACCOUNT:return $(T.ModalFooter,{className:H.default.footer},void 0,$(I.default,{className:H.default.submitButton,type:"submit",submitting:ue,onClick:He,disabled:0===_e.length||0===ge.length},void 0,B.default.Messages.NEXT),$(O.default,{size:O.default.Sizes.SIZE_12,color:O.default.Colors.HEADER_SECONDARY},void 0,B.default.Messages.MEMBER_VERIFICATION_CLAIM_ACCOUNT_INFO));case J.EMAIL_CONFIRMATION:return null;case J.VERIFICATION_FORM:return $(T.ModalFooter,{className:H.default.footer},void 0,$(I.default,{className:H.default.submitButton,type:"submit",submitting:ue,onClick:ke,color:I.default.Colors.GREEN,disabled:null==g||we},void 0,B.default.Messages.SUBMIT),null!=ce?$(O.default,{size:O.default.Sizes.SIZE_12,color:O.default.Colors.STATUS_RED},void 0,ce):$(O.default,{color:O.default.Colors.HEADER_SECONDARY,size:O.default.Sizes.SIZE_12},void 0,B.default.Messages.MEMBER_VERIFICATION_WARNING))}}()))};t.default=ae},268660:(e,t,a)=>{
"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var n,i,r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e;a&&a.set(e,n);return n}(a(667294)),o=f(a(294184)),s=f(a(74854)),l=f(a(550024)),u=a(836233),d=f(a(913165));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function p(e,t,a,i){n||(n="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),
1===o)t.children=i;else if(o>1){for(var s=new Array(o),l=0;l<o;l++)s[l]=arguments[l+3];t.children=s}if(t&&r)for(var u in r)void 0===t[u]&&(t[u]=r[u]);else t||(t=r||{});return{$$typeof:n,type:e,key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}function E(){E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};return E.apply(this,arguments)}function m(e,t){e.prototype=Object.create(t.prototype);e.prototype.constructor=e;v(e,t)}function v(e,t){v=Object.setPrototypeOf||function(e,t){e.__proto__=t;return e};return v(e,t)}!function(e){e[e.ENTERING=0]="ENTERING";e[e.LEAVING=1]="LEAVING";e[e.APPEARING=2]="APPEARING";e[e.STATIC=3]="STATIC"}(i||(i={}));var I=function(e){m(t,e);function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];(t=e.call.apply(e,[this].concat(n))||this).state={animationProgress:new s.default.Value(0),targetHeight:0,baseHeight:0,
animationState:null};t.direction=t.props.getDirection();t._measureRef=r.createRef();return t}var a=t.prototype;a.componentDidMount=function(){if(null!=this._measureRef.current){var e=this._measureRef.current.getBoundingClientRect().height;this.setState({targetHeight:e,baseHeight:this.props.getBaseHeight()})}};a.componentDidUpdate=function(e,t){t.targetHeight!==this.state.targetHeight&&this.props.setHeight(this.state.targetHeight)};a.componentWillAppear=function(e){this.setState({animationState:i.APPEARING});e()};a.componentDidAppear=function(){var e=this.state,t=e.animationProgress,a=e.targetHeight;t.setValue(2);this.setState({animationState:i.STATIC,baseHeight:a})};a.componentWillEnter=function(e){var t=this.props.duration,a=this.state.animationProgress;this.setState({animationState:i.ENTERING});this.props.setHeight(this.state.targetHeight);s.default.timing(a,{toValue:2,duration:t,delay:t/2}).start(e)};a.componentDidEnter=function(){this.setState({animationState:i.STATIC})}
;a.componentWillLeave=function(e){var t=this.state.animationProgress,a=this.props,n=a.duration,r=a.getDirection;this.direction=r();this.setState({animationState:i.LEAVING});s.default.timing(t,{toValue:0,duration:n}).start(e)};a.componentDidLeave=function(){this.setState({animationState:i.STATIC})};a.getAnimatedStyle=function(){var e,t,a=this.context.reducedMotion,n=this.props.fillParent,r=this.state,o=r.animationProgress,l=r.animationState,u=r.baseHeight,d=r.targetHeight,f=null!==(e=this.props.sideMargin)&&void 0!==e?e:0,c=null!==(t=this.props.verticalMargin)&&void 0!==t?t:0,p=l===i.LEAVING,m=l===i.ENTERING,v=(p?-1:1)*this.direction,I={overflow:m||p?"hidden":"visible",position:p?"absolute":void 0,top:p?c:void 0,left:p?f:void 0,right:p?f:void 0,bottom:p?c:void 0},_={transform:[{translateX:o.interpolate({inputRange:[0,2],outputRange:[150*v+"%","0%"],extrapolate:"clamp",easing:s.default.Easing.inOut(s.default.Easing.ease)})}]};return E({},I,{},a.enabled?null:_,{opacity:o.interpolate({
inputRange:[0,2],outputRange:[0,1],extrapolate:"clamp",easing:s.default.Easing.inOut(s.default.Easing.ease)}),height:m?o.interpolate({inputRange:[0,1],outputRange:[u,d],extrapolate:"clamp",easing:s.default.Easing.inOut(s.default.Easing.ease)}):n?"100%":"auto"})};a.render=function(){var e,t=this.props,a=t.fillParent,n=t.className,l=t.animatedNodeClassName,u=t.staticClassName,f=this.state.animationState;return a?r.createElement("div",{ref:this._measureRef,className:(0,o.default)(d.default.measurementFill,n,(e={},e[(0,o.default)(d.default.measurementFillStatic,u)]=f===i.STATIC,e))},p(s.default.div,{className:(0,o.default)(d.default.animatedNode,l),style:this.getAnimatedStyle()},void 0,this.props.children)):r.createElement("div",{ref:this._measureRef,className:(0,o.default)(d.default.measurement,n)},p(s.default.div,{className:(0,o.default)(d.default.animatedNode,l),style:this.getAnimatedStyle()},void 0,this.props.children))};return t}(r.PureComponent);I.displayName="SequenceAnimation"
;I.contextType=u.AccessibilityPreferencesContext;I.defaultProps={duration:300};var _=function(e){m(t,e);function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];(t=e.call.apply(e,[this].concat(n))||this).stepHeights={};t.prevStep=null;t.prevSteps=[];t.getBaseHeight=function(){return null!=t.prevStep&&null!=t.stepHeights[t.prevStep]?t.stepHeights[t.prevStep]:0};t.getDirection=function(){var e=t.props,a=e.steps,n=e.step,i=null!=t.prevStep?a.indexOf(t.prevStep):-1,r=-1===i&&null!=t.prevStep?t.prevSteps.indexOf(t.prevStep):-1;return Math.max(i,r)>a.indexOf(n)?-1:1};t.setHeight=function(e){var a=t.props.step;t.stepHeights[a]=e};return t}var a=t.prototype;a.componentDidMount=function(){this.setPrevSteps()};a.componentDidUpdate=function(){this.setPrevSteps()};a.setPrevSteps=function(){var e=this.props,t=e.step,a=e.steps;this.prevStep=t;this.prevSteps=a};a.render=function(){
var e=this.props,t=e.step,a=e.className,n=e.innerClassName,i=e.animatedNodeClassName,r=e.staticClassName,s=e.sideMargin,u=e.verticalMargin,f=e.children,c=e.fillParent;return p(l.default,{component:"div",className:(0,o.default)(d.default.transitionGroup,a)},void 0,p(I,{fillParent:c,sideMargin:s,verticalMargin:u,getDirection:this.getDirection,getBaseHeight:this.getBaseHeight,className:n,animatedNodeClassName:i,staticClassName:r,setHeight:this.setHeight},""+t,f))};return t}(r.Component);t.default=_;_.displayName="Sequencer";_.defaultProps={fillParent:!1}},698242:(e,t,a)=>{e.exports=a.p+"f3767d455e70dcdd1c8a3102e42c6d34.svg"},483683:(e,t,a)=>{e.exports=a.p+"72db7a1fbe5d3c861fe63c26f634b5d2.svg"},63685:(e,t,a)=>{e.exports=a.p+"a4e25b25c89b862150e6eeb520e67dd5.svg"},634737:(e,t,a)=>{e.exports=a.p+"8d224aa39e763dff664f330fdadeda3e.svg"}}]);
//# sourceMappingURL=3be530507fdef571621b.js.map