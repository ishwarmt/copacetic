"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5899],{1456:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(4848),a=n(8453);const s={title:"Introduction",slug:"/"},r="Project Copacetic: Directly patch container image vulnerabilities",o={id:"introduction",title:"Introduction",description:"copa is a CLI tool written in Go and based on buildkit that can be used to directly patch container images given the vulnerability scanning results from popular tools like Trivy.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/copacetic/website/next/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/"},sidebar:"sidebar",next:{title:"Installation",permalink:"/copacetic/website/next/installation"}},c={},l=[{value:"Why?",id:"why",level:2},{value:"How?",id:"how",level:2}];function d(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"project-copacetic-directly-patch-container-image-vulnerabilities",children:"Project Copacetic: Directly patch container image vulnerabilities"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.code,{children:"copa"})," is a CLI tool written in ",(0,t.jsx)(i.a,{href:"https://golang.org",children:"Go"})," and based on ",(0,t.jsx)(i.a,{href:"https://github.com/moby/buildkit",children:"buildkit"})," that can be used to directly patch container images given the vulnerability scanning results from popular tools like ",(0,t.jsx)(i.a,{href:"https://github.com/aquasecurity/trivy",children:"Trivy"}),"."]}),"\n",(0,t.jsx)(i.h2,{id:"why",children:"Why?"}),"\n",(0,t.jsxs)(i.p,{children:["We needed the ability to patch containers quickly without going upstream for a full rebuild. As the window between ",(0,t.jsx)(i.a,{href:"https://www.bleepingcomputer.com/news/security/hackers-scan-for-vulnerabilities-within-15-minutes-of-disclosure/",children:"vulnerability disclosure and active exploitation continues to narrow"}),", there is a growing operational need to patch critical security vulnerabilities in container images so they can be quickly redeployed into production. The need is especially acute when those vulnerabilities are:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"inherited from base images several levels deep and waiting on updated releases to percolate through the supply chain is not an option"}),"\n",(0,t.jsx)(i.li,{children:"found in 3rd party app images you don't maintain with update cadences that don't meet your security SLAs."}),"\n"]}),"\n",(0,t.jsx)("img",{title:"direct image patching",src:"/copacetic/website/img/direct-image-patching.png"}),"\n",(0,t.jsxs)(i.p,{children:["In addition to filling the operational gap not met by left-shift security practices and tools, the ability of ",(0,t.jsx)(i.code,{children:"copa"})," to patch a container without requiring a rebuild of the container image provides other benefits:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Allows users other than the image publishers to also patch container images, such as DevSecOps engineers."}),"\n",(0,t.jsx)(i.li,{children:"Reduces the storage and transmission costs of redistributing patched images by only creating an additional patch layer, instead of rebuilding the entire image which usually results in different layer hashes that break layer caching."}),"\n",(0,t.jsx)(i.li,{children:"Reduces the turnaround time for patching a container image by not having to wait for base image updates and being a faster operation than a full image rebuild."}),"\n",(0,t.jsx)(i.li,{children:"Reduces the complexity of patching the image from running a rebuild pipeline to running a single tool on the image."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"how",children:"How?"}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"copa"})," tool is an extensible engine that:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Parses the needed update packages from the container image\u2019s vulnerability report produced by a scanner like Trivy. New adapters can be written to accommodate more report formats."}),"\n",(0,t.jsx)(i.li,{children:"Obtains and processes the needed update packages using the appropriate package manager tools such as apt, apk, etc. New adapters can be written to support more package managers."}),"\n",(0,t.jsx)(i.li,{children:"Applies the resulting update binaries to the container image using buildkit."}),"\n"]}),"\n",(0,t.jsx)("img",{title:"report-driven vulnerability patching",src:"/copacetic/website/img/vulnerability-patch.png"}),"\n",(0,t.jsx)(i.p,{children:"This approach is motivated by the core principles of making direct container patching broadly applicable and accessible:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsxs)(i.strong,{children:["Copa supports patching ",(0,t.jsx)(i.em,{children:"existing"})," container images"]}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Devs don't need to build their images using specific tools or modify them in some way just to support container patching."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsxs)(i.strong,{children:["Copa supports containers without package managers ",(0,t.jsx)(i.em,{children:"including"})," distroless containers"]})}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Copa works with the existing vulnerability scanning and mitigation ecosystems"}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Image publishers don't need to create new workflows for container patching since Copa supports patching container images using the security update packages already being published today."}),"\n",(0,t.jsx)(i.li,{children:"Consumers do not need to migrate to a new and potentially more limited support ecosystem for custom distros or change their container vulnerability scanning pipelines to include remediation, since Copa can be integrated seamlessly as an extra step to patch containers based on those scanning reports."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Copa reduces the technical expertise needed and waiting on dependencies needed to patch an image"}),".","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"For OS package vulnerabilities, no specialized knowledge about a specific image is needed to be patch it as Copa relies on the vulnerability remediation knowledge already embedded in the reports produced by popular container scanning tools today."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For more details, refer to the ",(0,t.jsx)(i.a,{href:"/copacetic/website/next/design",children:"copa design"})," documentation."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(6540);const a={},s=t.createContext(a);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);