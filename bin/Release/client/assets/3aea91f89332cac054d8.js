(this.webpackChunkdiscord_app=this.webpackChunkdiscord_app||[]).push([[13643],{313643:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=void 0;var l,i=z(a(667294)),s=k(a(294184)),d=k(a(267258)),n=a(536211),o=a(678928),u=k(a(964285)),f=a(799357),r=k(a(243336)),E=k(a(192631)),c=z(a(517286)),_=k(a(30098)),N=k(a(290629)),M=k(a(871778)),L=k(a(728429)),p=k(a(789446)),I=k(a(160629)),T=k(a(730977)),O=a(354479),v=z(a(37241)),C=k(a(662197)),A=k(a(700113)),S=k(a(971639)),m=k(a(614617)),g=k(a(776360)),y=k(a(308920)),D=k(a(550270)),b=k(a(656016)),h=a(402821),U=a(732978),R=a(770348),P=k(a(247001)),B=k(a(124715)),F=k(a(191696)),Y=k(a(78205)),x=k(a(901182)),G=k(a(277329)),V=k(a(99846)),H=k(a(277292)),w=k(a(864244));function k(e){return e&&e.__esModule?e:{default:e}}function W(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(W=function(e){return e?a:t})(e)}function z(e,t){if(!t&&e&&e.__esModule)return e
;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=W(t);if(a&&a.has(e))return a.get(e);var l={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var d=i?Object.getOwnPropertyDescriptor(e,s):null;d&&(d.get||d.set)?Object.defineProperty(l,s,d):l[s]=e[s]}l.default=e;a&&a.set(e,l);return l}function j(){j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e};return j.apply(this,arguments)}function K(e,t,a,i){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var s=e&&e.defaultProps,d=arguments.length-3;if(t||0===d||(t={children:void 0}),1===d)t.children=i;else if(d>1){for(var n=new Array(d),o=0;o<d;o++)n[o]=arguments[o+3];t.children=n}if(t&&s)for(var u in s)void 0===t[u]&&(t[u]=s[u]);else t||(t=s||{});return{$$typeof:l,type:e,
key:void 0===a?null:""+a,ref:null,props:t,_owner:null}}var Z=function(e){var t=e.guild,a=e.onAcceptVerificationLevel,l=e.onAcceptContentFilter,i=e.disableContentFilter,s=e.disableVerificationLevel,d=e.headerId,o=e.theme,u=(0,n.useStateFromStores)([_.default],(function(){return _.default.getGuild(t.id)}),[t.id]),f=null!=u&&u.verificationLevel>R.VerificationLevels.NONE,r=(null==u?void 0:u.explicitContentFilter)===R.GuildExplicitContentFilterTypes.ALL_MEMBERS,E=o===R.ThemeTypes.DARK?V.default:H.default;return K("div",{className:B.default.container},void 0,K("div",{className:B.default.content},void 0,K("img",{alt:"",src:E,width:80}),K(S.default,{size:S.default.Sizes.SIZE_24,className:B.default.header,id:d},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_HEADER),K(g.default,{color:g.default.Colors.CUSTOM,size:g.default.Sizes.SIZE_16,className:B.default.headerCaption},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_BODY)),K("div",{className:B.default.form
},void 0,K(C.default,{},void 0,P.default.Messages.FORM_LABEL_VERIFICATION_LEVEL),K(v.default,{type:v.Types.DESCRIPTION,className:B.default.description},void 0,f?P.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_MET:P.default.Messages.ENABLE_COMMUNITY_MODAL_VERIFICATION_LEVEL_HELP),K(p.default,{type:p.default.Types.ROW,disabled:s,value:t.verificationLevel>R.VerificationLevels.NONE,onChange:a},void 0,K(g.default,{},void 0,P.default.Messages.ENABLE_PUBLIC_MODAL_VERIFICATION_LEVEL_DESCRIPTION))),K("div",{className:B.default.form},void 0,K(C.default,{},void 0,P.default.Messages.FORM_LABEL_EXPLICIT_CONTENT_FILTER),K(v.default,{type:v.Types.DESCRIPTION,className:B.default.description},void 0,r?P.default.Messages.ENABLE_COMMUNITY_MODAL_CONTENT_FILTER_MET:P.default.Messages.ENABLE_PUBLIC_MODAL_CONTENT_FILTER_HELP),K(p.default,{type:p.default.Types.ROW,disabled:i,value:t.explicitContentFilter===R.GuildExplicitContentFilterTypes.ALL_MEMBERS,onChange:l
},void 0,K(g.default,{},void 0,P.default.Messages.EXPLICIT_CONTENT_FILTER_HIGH))))};Z.displayName="EnableCommunityModalFirstStep";var Q=function(e){var t=e.selectableChannels,a=e.onRuleChannelChange,l=e.ruleChannel,s=e.onPublicUpdatesChannelChange,d=e.publicUpdatesChannel,n=e.headerId,o=e.theme,u=e.guildId;i.useEffect((function(){(0,h.trackEnableCommunityFlow)({fromStep:U.EnableCommunityModalSteps.SAFETY_CHECK,toStep:U.EnableCommunityModalSteps.BASICS,guildId:u})}),[u]);var f=o===R.ThemeTypes.DARK?F.default:Y.default;return K("div",{className:B.default.container},void 0,K("div",{className:B.default.content},void 0,K("img",{alt:"",src:f,width:80}),K(S.default,{size:S.default.Sizes.SIZE_24,className:B.default.header,id:n},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_HEADER),K(g.default,{color:g.default.Colors.CUSTOM,size:g.default.Sizes.SIZE_16,className:B.default.headerCaption},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_BODY)),K("div",{className:B.default.form
},void 0,K(C.default,{},void 0,P.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_TITLE),K(v.default,{type:v.Types.DESCRIPTION,className:B.default.description},void 0,P.default.Messages.ENABLE_PUBLIC_MODAL_RULES_CHANNEL_HELP),K(m.default,{options:t,onChange:a,value:l,maxVisibleItems:4})),K("div",{className:B.default.form},void 0,K(C.default,{},void 0,P.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_TITLE),K(v.default,{type:v.Types.DESCRIPTION,className:B.default.description},void 0,P.default.Messages.GUILD_SETTINGS_COMMUNITY_MOD_CHANNEL_HELP),K(m.default,{options:t,onChange:s,value:d,popoutPosition:I.default.Positions.TOP,maxVisibleItems:4})))};Q.displayName="EnableCommunityModalSecondStep";var X=function(e){
var t=e.guild,a=e.policyAccepted,l=e.everyoneRolePermissionsAccepted,d=e.onAcceptPolicy,n=e.onAcceptDefaultNotifications,o=e.onAcceptEveryoneRolePermissions,u=e.disableDefaultNotifications,f=e.disableEveryoneRolePermissions,r=e.headerId,E=e.theme===R.ThemeTypes.DARK?x.default:G.default;i.useEffect((function(){(0,h.trackEnableCommunityFlow)({fromStep:U.EnableCommunityModalSteps.BASICS,toStep:U.EnableCommunityModalSteps.FINISH,guildId:t.id})}),[t.id]);return K("div",{className:B.default.container},void 0,K("div",{className:B.default.content},void 0,K("img",{alt:"",src:E,width:80}),K(S.default,{size:S.default.Sizes.SIZE_24,className:B.default.header,id:r},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_HEADER),K(g.default,{color:g.default.Colors.CUSTOM,size:g.default.Sizes.SIZE_16,className:B.default.headerCaption},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_BODY)),K("div",{className:B.default.form},void 0,K(T.default,{
text:u?P.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP:null,"aria-label":!!u&&P.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP},void 0,(function(e){var a;return i.createElement("div",e,K(p.default,{type:p.default.Types.ROW,disabled:u,value:t.defaultMessageNotifications===R.UserNotificationSettings.ONLY_MENTIONS,onChange:n,className:(0,s.default)((a={},a[B.default.disabled]=u,a))},void 0,K(g.default,{},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_LABEL.format({infoHook:function(){return K(T.default,{text:P.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP,"aria-label":P.default.Messages.ENABLE_COMMUNITY_MODAL_DEFAULT_NOTIFICATIONS_TOOLTIP},void 0,(function(e){return i.createElement(A.default,j({className:B.default.icon},e))}))}}))))}))),K(T.default,{text:f?P.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP:null,
"aria-label":!!f&&P.default.Messages.ENABLE_COMMUNITY_MODAL_REQUIREMENT_SATISFIED_TOOLTIP},void 0,(function(e){var t;return i.createElement("div",j({},e,{className:B.default.checkboxOption}),K(p.default,{type:p.default.Types.ROW,disabled:f,value:l,onChange:o,className:(0,s.default)((t={},t[B.default.disabled]=f,t))},void 0,K(g.default,{},void 0,P.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_LABEL.format({infoHook:function(){return K(T.default,{text:P.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP,"aria-label":P.default.Messages.ENABLE_COMMUNITY_MODAL_EVERYONE_ROLE_PERMISSION_TOOLTIP},void 0,(function(e){return i.createElement(A.default,j({className:B.default.icon},e))}))}}))))})),K("div",{className:B.default.form},void 0,K(C.default,{},void 0,P.default.Messages.PUBLIC_GUILD_POLICY_TITLE),K(v.default,{type:v.Types.DESCRIPTION,className:B.default.description},void 0,P.default.Messages.COMMUNITY_POLICY_HELP.format({
helpdeskArticle:D.default.getArticleURL(R.HelpdeskArticles.PUBLIC_GUILD_GUILDLINES)})),K(p.default,{type:p.default.Types.ROW,value:a,onChange:d},void 0,K(g.default,{},void 0,P.default.Messages.PUBLIC_GUILD_POLICY_ACCEPT))))};X.displayName="EnableCommunityModalFinalStep";var $=function(e){var t=e.transitionState,a=e.onClose;i.useEffect((function(){y.default.track(R.AnalyticEvents.OPEN_MODAL,{type:U.ENABLE_COMMUNITY_FLOW_MODAL_KEY})}),[]);var l=(0,n.useStateFromStoresObject)([r.default],(function(){return r.default.getProps()})).guild,s=(0,n.useStateFromStores)([M.default],(function(){return M.default.theme})),_=i.useState(!1),p=_[0],I=_[1],T=i.useState(!U.MODERATOR_PERMISSIONS.some((function(e){return b.default.canEveryone(e,l)
}))),v=T[0],C=T[1],A=i.useState(U.CREATE_NEW_CHANNEL_VALUE),S=A[0],m=A[1],g=i.useState(U.CREATE_NEW_CHANNEL_VALUE),D=g[0],h=g[1],F=i.useState(null==l?void 0:l.defaultMessageNotifications)[0],Y=i.useState(null==l?void 0:l.verificationLevel)[0],x=i.useState(null==l?void 0:l.explicitContentFilter)[0],G=i.useState(v)[0],V=null==l?void 0:l.getRole(null==l?void 0:l.id),H=(0,n.useStateFromStores)([c.default],(function(){return null!=l?c.default.getChannels(l.id):null}),[l]),k=(0,O.useUID)();if(null==l)return null;var W=[{value:U.CREATE_NEW_CHANNEL_VALUE,label:P.default.Messages.ENABLE_PUBLIC_MODAL_CREATE_CHANNEL}];H[c.GUILD_SELECTABLE_CHANNELS_KEY].forEach((function(e){var t=e.channel;t.type===R.ChannelTypes.GUILD_TEXT&&W.push({value:t.id,label:(0,o.computeChannelName)(t,L.default,N.default,!0)})}));var z=Y!==R.VerificationLevels.NONE,$=x===R.GuildExplicitContentFilterTypes.ALL_MEMBERS,q=F===R.UserNotificationSettings.ONLY_MENTIONS,J=G,ee=K(Z,{guild:l,disableVerificationLevel:z,
disableContentFilter:$,onAcceptVerificationLevel:function(e,t){t?t&&u.default.updateGuild({verificationLevel:R.VerificationLevels.LOW}):u.default.updateGuild({verificationLevel:Y})},onAcceptContentFilter:function(e,t){t?u.default.updateGuild({explicitContentFilter:R.GuildExplicitContentFilterTypes.ALL_MEMBERS}):u.default.updateGuild({explicitContentFilter:x})},headerId:k,theme:s}),te=K(Q,{selectableChannels:W,onRuleChannelChange:function(e){m(e)},onPublicUpdatesChannelChange:function(e){h(e)},ruleChannel:S,publicUpdatesChannel:D,headerId:k,theme:s,guildId:l.id}),ae=K(X,{guild:l,disableDefaultNotifications:q,disableEveryoneRolePermissions:J,policyAccepted:p,everyoneRolePermissionsAccepted:v,onAcceptPolicy:function(e,t){I(!!t)},onAcceptDefaultNotifications:function(e,t){t?u.default.updateGuild({defaultMessageNotifications:R.UserNotificationSettings.ONLY_MENTIONS}):u.default.updateGuild({defaultMessageNotifications:F})},onAcceptEveryoneRolePermissions:function(e,t){null!=V&&C(!!t)},
headerId:k,theme:s}),le=K("img",{alt:"",src:w.default,className:B.default.footerImage,width:240}),ie=[{modalContent:ee,disableNextStep:l.explicitContentFilter!==R.GuildExplicitContentFilterTypes.ALL_MEMBERS||l.verificationLevel===R.VerificationLevels.NONE,overviewTitle:P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_1_TITLE},{modalContent:te,disableNextStep:null==S||null==D,overviewTitle:P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_2_TITLE},{modalContent:ae,disableNextStep:!p,overviewTitle:P.default.Messages.ENABLE_COMMUNITY_MODAL_STEP_3_TITLE}];return K(E.default,{stepData:ie,title:P.default.Messages.ENABLE_COMMUNITY_MODAL_TITLE,transitionState:t,onClose:function(){a();y.default.track(R.AnalyticEvents.MODAL_DISMISSED,{type:U.ENABLE_COMMUNITY_FLOW_MODAL_KEY})},completeButtonText:P.default.Messages.ENABLE_COMMUNITY_BUTTON_TEXT,onComplete:function(){if(null!=V&&p){var e=new Set(l.features);e.add(R.GuildFeatures.COMMUNITY)
;var t=v?d.default.remove(V.permissions,U.MODERATOR_PERMISSIONS_FLAG):V.permissions,a=j({},V,{permissions:t});u.default.updateGuild({features:e,rulesChannelId:S,publicUpdatesChannelId:D});u.default.saveGuild(l.id,{features:e,rulesChannelId:S,verificationLevel:l.verificationLevel,explicitContentFilter:l.explicitContentFilter,publicUpdatesChannelId:D,defaultMessageNotifications:l.defaultMessageNotifications});t!==V.permissions&&(0,f.saveRoleSettings)(l.id,[a])}},overviewFooter:le,sequencerClassName:B.default.container})};$.displayName="EnableCommunityModal";var q=$;t.default=q},191696:(e,t,a)=>{e.exports=a.p+"d8a03b9985d824edc78c6eb4785dc949.svg"},78205:(e,t,a)=>{e.exports=a.p+"7e09d40fdac796955aae9fbe0eaba1f9.svg"},901182:(e,t,a)=>{e.exports=a.p+"b6193b9564ca0ecbbd1ed6b80f47646d.svg"},277329:(e,t,a)=>{e.exports=a.p+"148f1855747994b4d58b685f8a36c591.svg"},99846:(e,t,a)=>{e.exports=a.p+"070f1b98adc8ce07c7823021133efed5.svg"},277292:(e,t,a)=>{
e.exports=a.p+"447512eae624cde892775ce45dfb53ab.svg"}}]);
//# sourceMappingURL=3aea91f89332cac054d8.js.map