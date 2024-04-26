"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2898],{8389:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var c=i(4848),s=i(8453);const n={title:"Release Process"},r=void 0,o={id:"release",title:"Release Process",description:"Overview",source:"@site/versioned_docs/version-v0.4.x/release.md",sourceDirName:".",slug:"/release",permalink:"/copacetic/website/v0.4.x/release",draft:!1,unlisted:!1,tags:[],version:"v0.4.x",frontMatter:{title:"Release Process"},sidebar:"sidebar",previous:{title:"Copa Github Action",permalink:"/copacetic/website/v0.4.x/github-action"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Publishing",id:"publishing",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(t.p,{children:["The release process for Copacetic uses ",(0,c.jsx)(t.a,{href:"https://goreleaser.com/",children:"GoReleaser"}),"."]}),"\n",(0,c.jsx)(t.p,{children:"Once you are ready to cut a new release, checkout the release branch and tag it with the respective version."}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"git checkout <BRANCH NAME>\ngit pull origin <BRANCH NAME>\ngit tag -a <NEW VERSION> -m '<NEW VERSION>'\ngit push origin <NEW VERSION>\n"})}),"\n",(0,c.jsx)(t.h2,{id:"publishing",children:"Publishing"}),"\n",(0,c.jsxs)(t.ol,{children:["\n",(0,c.jsxs)(t.li,{children:["GoReleaser will create a new release, review and edit it at ",(0,c.jsx)(t.a,{href:"https://github.com/project-copacetic/copacetic/releases",children:"https://github.com/project-copacetic/copacetic/releases"})]}),"\n",(0,c.jsxs)(t.li,{children:["Review the respective copa-action image at: ",(0,c.jsx)(t.a,{href:"https://github.com/orgs/project-copacetic/packages/container/package/copa-action",children:"https://github.com/orgs/project-copacetic/packages/container/package/copa-action"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>o});var c=i(6540);const s={},n=c.createContext(s);function r(e){const t=c.useContext(n);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),c.createElement(n.Provider,{value:t},e.children)}}}]);