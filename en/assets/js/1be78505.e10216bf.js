"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[29514,579],{80519:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var a=n(93106),l=n(88039),r=n(39186),o=n(3132),c=n(26679),i=n(59254);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e){return a.createElement("svg",s({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=n(66130),m="collapseSidebarButton_QgmU",b="collapseSidebarButtonIcon_bHAW";function p({onClick:e}){return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",m),onClick:e},a.createElement(d,{className:b}))}var f=n(14624),h=n(55123),v=n(64689),E="menuHtmlItem_XEwS",g="menuExternalLink_cmuS",k=n(69938);function _(){return _=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function S(e){var{item:t}=e,n=y(e,["item"]);switch(t.type){case"category":return a.createElement(C,_({item:t},n));case"html":return a.createElement(I,_({item:t},n));default:return a.createElement(N,_({item:t},n))}}function C(e){var{item:t,onItemClick:n,activePath:l,level:r,index:i}=e,s=y(e,["item","onItemClick","activePath","level","index"]);const{items:d,label:m,collapsible:b,className:p,href:h}=t,v=function(e){const t=(0,k.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0),[e,t])}(t),E=(0,o._F)(t,l),g=(0,o.Mg)(h,l),{collapsed:S,setCollapsed:C}=(0,o.uR)({initialState:()=>!!b&&(!E&&t.collapsed)});!function({isActive:e,collapsed:t,setCollapsed:n}){const l=(0,o.D9)(e);(0,a.useEffect)((()=>{e&&!l&&t&&n(!1)}),[e,l,t,n])}({isActive:E,collapsed:S,setCollapsed:C});const{expandedItem:I,setExpandedItem:N}=(0,o.fP)();function T(e=!S){N(e?null:i),C(e)}const{autoCollapseSidebarCategories:M}=(0,o.LU)();return(0,a.useEffect)((()=>{b&&I&&I!==i&&M&&C(!0)}),[b,I,i,C,M]),a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":S},p)},a.createElement("div",{className:(0,c.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},a.createElement(f.Z,_({className:(0,c.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h,"menu__link--active":E}),onClick:b?e=>{null==n||n(t),h?T(!1):(e.preventDefault(),T())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=v?v:"#":v},s),m),h&&b&&a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:m}),type:"button",className:"clean-btn menu__caret",onClick:e=>{e.preventDefault(),T()}})),a.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},a.createElement(x,{items:d,tabIndex:S?-1:0,onItemClick:n,activePath:l,level:r+1})))}function I({item:e,level:t,index:n}){const{value:l,defaultStyle:r,className:i}=e;return a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(t),r&&`${E} menu__list-item`,i),key:n,dangerouslySetInnerHTML:{__html:l}})}function N(e){var{item:t,onItemClick:n,activePath:l,level:r,index:i}=e,s=y(e,["item","onItemClick","activePath","level","index"]);const{href:d,label:u,className:m}=t,b=(0,o._F)(t,l),p=(0,h.Z)(d);return a.createElement("li",{className:(0,c.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:u},a.createElement(f.Z,_({className:(0,c.Z)("menu__link",!p&&g,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:n?()=>n(t):void 0},s),u,!p&&a.createElement(v.Z,null)))}function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function O(e){var{items:t}=e,n=M(e,["items"]);return a.createElement(o.D_,null,t.map(((e,t)=>a.createElement(S,T({key:t,item:e,index:t},n)))))}var x=(0,a.memo)(O),Z="menu_MTkJ",w="menuWithAnnouncementBar_h27U";function P({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,o.nT)(),[t,n]=(0,a.useState)(e);return(0,o.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",Z,l&&w,n)},a.createElement("ul",{className:(0,c.Z)(o.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:t,activePath:e,level:1})))}var A="sidebar_Vyic",L="sidebarWithHideableNavbar_quU9",j="sidebarHidden_Lo8l",B="sidebarLogo_n5XX";function H({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:r},hideableSidebar:s}=(0,o.LU)();return a.createElement("div",{className:(0,c.Z)(A,r&&L,l&&j)},r&&a.createElement(i.Z,{tabIndex:-1,className:B}),a.createElement(P,{path:e,sidebar:t}),s&&a.createElement(p,{onClick:n}))}var R=a.memo(H);const D=({sidebar:e,path:t})=>{const n=(0,o.el)();return a.createElement("ul",{className:(0,c.Z)(o.kM.docs.docSidebarMenu,"menu__list")},a.createElement(x,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};function F(e){return a.createElement(o.Zo,{component:D,props:e})}var W=a.memo(F);function U(){return U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}function q(e){const t=(0,o.iP)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(R,U({},e)),l&&a.createElement(W,U({},e)))}var z=n(579),X="backToTopButton_K8eC",Y="backToTopButtonShow_br6d";function K(){const e=(0,a.useRef)(null);return{smoothScrollTop:function(){e.current=function(){let e=null;return function t(){const n=document.documentElement.scrollTop;n>0&&(e=requestAnimationFrame(t),window.scrollTo(0,Math.floor(.85*n)))}(),()=>e&&cancelAnimationFrame(e)}()},cancelScrollToTop:()=>{var t;return null===(t=e.current)||void 0===t?void 0:t.call(e)}}}function V(){const[e,t]=(0,a.useState)(!1),n=(0,a.useRef)(!1),{smoothScrollTop:l,cancelScrollToTop:r}=K();return(0,o.RF)((({scrollY:e},a)=>{const l=null==a?void 0:a.scrollY;if(!l)return;if(n.current)return void(n.current=!1);const o=e<l;if(o||r(),e<300)t(!1);else if(o){const n=document.documentElement.scrollHeight;e+window.innerHeight<n&&t(!0)}else t(!1)})),(0,o.SL)((e=>{e.location.hash&&(n.current=!0,t(!1))})),a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,c.Z)("clean-btn",o.kM.common.backToTopButton,X,e&&Y),type:"button",onClick:()=>l()})}var G=n(28257),J={docPage:"docPage_E0RT",docMainContainer:"docMainContainer_agAA",docSidebarContainer:"docSidebarContainer_Dy3T",docMainContainerEnhanced:"docMainContainerEnhanced_SME7",docSidebarContainerHidden:"docSidebarContainerHidden_bneT",collapsedDocSidebar:"collapsedDocSidebar_q5mE",expandSidebarButtonIcon:"expandSidebarButtonIcon_uvYs",docItemWrapperEnhanced:"docItemWrapperEnhanced_E6pA"},Q=n(74814);function $({currentDocRoute:e,versionMetadata:t,children:n,sidebarName:l}){const i=(0,o.Vq)(),{pluginId:s,version:m}=t,[b,p]=(0,a.useState)(!1),[f,h]=(0,a.useState)(!1),v=(0,a.useCallback)((()=>{f&&h(!1),p((e=>!e))}),[f]);return a.createElement(a.Fragment,null,a.createElement(Q.Z,{version:m,tag:(0,o.os)(s,m)}),a.createElement(r.Z,null,a.createElement("div",{className:J.docPage},a.createElement(V,null),i&&a.createElement("aside",{className:(0,c.Z)(o.kM.docs.docSidebarContainer,J.docSidebarContainer,b&&J.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(J.docSidebarContainer)&&b&&h(!0)}},a.createElement(q,{key:l,sidebar:i,path:e.path,onCollapse:v,isHidden:f}),f&&a.createElement("div",{className:J.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:v,onClick:v},a.createElement(d,{className:J.expandSidebarButtonIcon}))),a.createElement("main",{className:(0,c.Z)(J.docMainContainer,(b||!i)&&J.docMainContainerEnhanced)},a.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",J.docItemWrapper,b&&J.docItemWrapperEnhanced)},n)))))}function ee(e){const{route:{routes:t},versionMetadata:n,location:r}=e,i=t.find((e=>(0,G.LX)(r.pathname,e)));if(!i)return a.createElement(z.default,null);const s=i.sidebar,d=s?n.docsSidebars[s]:null;return a.createElement(o.FG,{className:(0,c.Z)(o.kM.wrapper.docsPages,o.kM.page.docsDocPage,n.className)},a.createElement(o.qu,{version:n},a.createElement(o.bT,{sidebar:null!=d?d:null},a.createElement($,{currentDocRoute:i,versionMetadata:n,sidebarName:s},(0,l.H)(t,{versionMetadata:n})))))}},579:function(e,t,n){n.r(t);var a=n(93106),l=n(39186),r=n(28257),o=n(74848),c=n(60552);t.default=function(){const{pathname:e=""}=(0,r.TH)(),{siteConfig:{baseUrl:t=""}}=(0,o.Z)(),n=(0,c.Z)(e);if(n.endsWith(".html")){const e=function(e,t){let n=t||"/",a=new RegExp(n+"{1,}","g");return e.join(n).replace(a,n)}([t,t]);return a.createElement(r.l_,{to:n.slice(n.startsWith(e)?t.length-1:0,-5)})}return a.createElement(l.Z,{title:"Page Not Found"},a.createElement("div",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"404"),a.createElement("p",null,"We could not find what you were looking for."),a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);