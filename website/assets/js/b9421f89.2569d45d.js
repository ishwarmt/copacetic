"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(l,".").concat(b)]||u[b]||f[b]||i;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"FAQ"},o=void 0,c={unversionedId:"faq",id:"version-v0.4.x/faq",title:"FAQ",description:"What kind of vulnerabilities can Copa patch?",source:"@site/versioned_docs/version-v0.4.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/copacetic/website/faq",draft:!1,tags:[],version:"v0.4.x",frontMatter:{title:"FAQ"},sidebar:"sidebar",previous:{title:"Design",permalink:"/copacetic/website/design"},next:{title:"Contributing",permalink:"/copacetic/website/contributing"}},l={},p=[{value:"What kind of vulnerabilities can Copa patch?",id:"what-kind-of-vulnerabilities-can-copa-patch",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"what-kind-of-vulnerabilities-can-copa-patch"},"What kind of vulnerabilities can Copa patch?"),(0,a.kt)("p",null,'Copa is capable of patching "OS level" vulnerabilities. This includes packages (like ',(0,a.kt)("inlineCode",{parentName:"p"},"openssl"),") in the image that are managed by a package manager such as ",(0,a.kt)("inlineCode",{parentName:"p"},"apt")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yum"),'. Copa is not currently capable of patching vulnerabilities at the "application level" such as Python packages or Go modules.'))}u.isMDXComponent=!0}}]);