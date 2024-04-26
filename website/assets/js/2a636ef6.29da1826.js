"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1866],{5865:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>r});var i=t(4848),n=t(8453);const o={title:"FAQ"},c=void 0,s={id:"faq",title:"FAQ",description:"What kind of vulnerabilities can Copa patch?",source:"@site/versioned_docs/version-v0.3.x/faq.md",sourceDirName:".",slug:"/faq",permalink:"/copacetic/website/v0.3.x/faq",draft:!1,unlisted:!1,tags:[],version:"v0.3.x",frontMatter:{title:"FAQ"},sidebar:"sidebar",previous:{title:"Design",permalink:"/copacetic/website/v0.3.x/design"},next:{title:"Contributing",permalink:"/copacetic/website/v0.3.x/contributing"}},l={},r=[{value:"What kind of vulnerabilities can Copa patch?",id:"what-kind-of-vulnerabilities-can-copa-patch",level:2},{value:"What kind of vulnerabilities can Copa not patch?",id:"what-kind-of-vulnerabilities-can-copa-not-patch",level:2}];function p(e){const a={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.h2,{id:"what-kind-of-vulnerabilities-can-copa-patch",children:"What kind of vulnerabilities can Copa patch?"}),"\n",(0,i.jsxs)(a.p,{children:['Copa is capable of patching "OS level" vulnerabilities. This includes packages (like ',(0,i.jsx)(a.code,{children:"openssl"}),") in the image that are managed by a package manager such as ",(0,i.jsx)(a.code,{children:"apt"})," or ",(0,i.jsx)(a.code,{children:"yum"}),'. Copa is not currently capable of patching vulnerabilities at the "application level" such as Python packages or Go modules (see ',(0,i.jsx)(a.a,{href:"#what-kind-of-vulnerabilities-can-copa-not-patch",children:"below"})," for more details)."]}),"\n",(0,i.jsx)(a.h2,{id:"what-kind-of-vulnerabilities-can-copa-not-patch",children:"What kind of vulnerabilities can Copa not patch?"}),"\n",(0,i.jsxs)(a.p,{children:['Copa is not capable of patching vulnerabilities for compiled languages, like Go, at the "application level", for instance, Go modules. If your application uses a vulnerable version of the ',(0,i.jsx)(a.code,{children:"golang.org/x/net"})," module, Copa will be unable to patch it. This is because Copa doesn't have access to the application's source code or the knowledge of how to build it, such as compiler flags, preventing it from patching vulnerabilities at the application level."]}),"\n",(0,i.jsxs)(a.p,{children:["To patch vulnerabilities for applications, you can package these applications and consume them from package repositories, like ",(0,i.jsx)(a.code,{children:"http://archive.ubuntu.com/ubuntu/"})," for Ubuntu, and ensure Trivy can scan and report vulnerabilities for these packages. This way, Copa can patch the applications as a whole, though it cannot patch specific modules within the applications."]})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>s});var i=t(6540);const n={},o=i.createContext(n);function c(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);