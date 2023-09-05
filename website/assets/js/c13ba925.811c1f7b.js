"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=n,u=d["".concat(l,".").concat(h)]||d[h]||g[h]||r;return a?i.createElement(u,o(o({ref:t},c),{},{components:a})):i.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=a(7462),n=(a(7294),a(3905));const r={title:"Design"},o=void 0,s={unversionedId:"design",id:"version-v0.4.x/design",title:"Design",description:"Design Tenets",source:"@site/versioned_docs/version-v0.4.x/design.md",sourceDirName:".",slug:"/design",permalink:"/copacetic/website/design",draft:!1,tags:[],version:"v0.4.x",frontMatter:{title:"Design"},sidebar:"sidebar",previous:{title:"Troubleshooting",permalink:"/copacetic/website/troubleshooting"},next:{title:"FAQ",permalink:"/copacetic/website/faq"}},l={},p=[{value:"Design Tenets",id:"design-tenets",level:2},{value:"Design Reasoning",id:"design-reasoning",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Tradeoffs",id:"tradeoffs",level:2}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"design-tenets"},"Design Tenets"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copa is intended to accelerate container patching by eliminating waiting on base image dependency chains to update.")," This is a raison d\u2019etre for the Copa project, so if we figured out a different way to patch containers that still relied on waiting for base images to be rebuilt and republished, we would consider spinning that off into a different project instead of making it part of Copa.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copa is intended to work with the existing ecosystem of container images.")," The project should have a strong preference for solutions that do not require image producers to create or modify their images in special ways to use Copa.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copa is intended to allow parties other than the image authors to address container vulnerabilities.")," Copa should require a minimum of special knowledge about the lineage and construction of an image from the user to patch it successfully.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Copa is intended to do one thing well and be composable with other tools and processes.")," Copa does not have to be a universal multitool for container patching. For example, it is preferable that it integrates with popular container scanning tools rather than incorporating custom container scanning into the project itself. Similarly, it does not need to become a general container manipulation tool in the vein of crane."))),(0,n.kt)("h2",{id:"design-reasoning"},"Design Reasoning"),(0,n.kt)("p",null,"The design of copa arises from the application of those tenets to the observed issues in previous efforts directly update container images via rebasing, for example, the experimental ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane/rebase.md"},(0,n.kt)("inlineCode",{parentName:"a"},"crane rebase")),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rebasing requires that all actors involved in creation of the image are coordinated so that some layers can be switched out without breaking the image. Attempting to switch out layers in the container overlay structure is brittle because most existing containers are created by writing over shared configuration files and data stores in base images. For example, an ",(0,n.kt)("inlineCode",{parentName:"p"},"apt install")," during image creation will overwrite the dpkg ",(0,n.kt)("inlineCode",{parentName:"p"},"status")," file in the base image, which will mask any package updates in a rebased layer. Since many existing container scanners rely on the reported package status to find vulnerable package versions, this can cause new vulnerabilities to not be reported or for patched binaries not to be recognized by the scanners."),(0,n.kt)("p",{parentName:"li"},"To avoid breaking integration with the existing container ecosystem, copa patches the filesystem bundle as a whole instead of as a collection of layers so that the resulting image state is consistent. This strategy also allows copa to patch vulnerabilties introduced at any layer in the image, including OS packages added in the app layers that is not addressed by a simple rebase. It also supports the core tenet of supporting patching without requiring coordination with all the publishers of the base images that a given image transitively depends on.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Rebasing also requires that the user knows ",(0,n.kt)("em",{parentName:"p"},"a priori")," what base image (or transitive base image) is in the target image to determine which appropriate rebase image to use. This makes it very difficult for anyone not intimately involved with authoring the image from being able to remediate it, which is one of our tenets."),(0,n.kt)("p",{parentName:"li"},"While it is possible to embed extra metadata or annotations into the target image to facilitate this base image (or transitive base image) lookup, that would require that the images to be patched be modified or created especially to support updates, which goes against another of our tenets to be able to patch images without requiring them to be customized explicitly for that purpose."),(0,n.kt)("p",{parentName:"li"},"The design of copa addresses this by reframing the problem of updating containers and understanding the structure or lineage of a container image to the more specific problem of what packages in a given container image need to be updated. This allows copa to tap into the expertise embedded in the much more robust ecosystem for detecting and remediating vulnerabilities at the package level that already exists today. By making copa an additional remediation step that can be run after a container scan in existing workflows, we avoid both of those issues with an additional benefit: it incurs no additional work on the part of base image publishers to support patching of images based on their base images, the existing channels for publishing update packages is sufficient to service those container images as well."))),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("img",{title:"report-driven vulnerability patching",src:"/copacetic/website/img/vulnerability-patch.png"}),(0,n.kt)("p",null,"The requirements presented encourage an extensible model in order to support broad applicability. Specifically, there are two areas that the tool will need to accommodate multiple implementations to support more use cases:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The data schema of various vulnerability scanners producing the input vulnerability report."),(0,n.kt)("li",{parentName:"ul"},"The state management of various package managers and process for applying patches appropriately through them.")),(0,n.kt)("p",null,"Effectively, ",(0,n.kt)("inlineCode",{parentName:"p"},"copa patch")," can be considered a command that bridges an extensible ",(0,n.kt)("inlineCode",{parentName:"p"},"Parse")," action with an extensible ",(0,n.kt)("inlineCode",{parentName:"p"},"Apply")," action as illustrated in the diagram; the implementation can be thought of as an engine that uses this abstract Go interface to apply security update packages:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type UpdatePackage struct {\n    Name    string\n    Version string\n}\n\ntype UpdateManifest struct {\n    OSType    string\n    OSVersion string\n    Arch      string\n    Updates   []UpdatePackage\n}\n\ntype ScanReportParser interface {\n    Parse(reportPath string) (*UpdateManifest, error)\n}\n\ntype PackageManager interface {\n    Apply(imagePath string, report *UpdateManifest) error\n}\n")),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("img",{title:"buildkit graph execution",src:"/copacetic/website/img/graph-execution.png"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"copa")," is a pseudo-frontend to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moby/buildkit"},"buildkit")," implemented as a CLI tool. Effectively, instead of taking a container definition to create from scratch, it takes the reference to the target image to patch and a container scan report and builds a series of ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/moby/buildkit/tree/99f6199fa6f0c34dbb3acfa57e00b7189a6a79d4#exploring-llb"},"LLB graphs")," for buildkit to execute:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Actions to probe the image as a filesystem bundle, for example, retrieving the package manager status in the image.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Within each distribution type identified by the scanner report (e.g. Debian) there can be different ways of applying patches to the target image (e.g. distroless), which can be differentiated through these actions."))),(0,n.kt)("li",{parentName:"ol"},"Actions to fetch and deploy tools that can be injected into the target image to perform the patching.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"In cases where the package tools are not available in the target image, a standard version of the OS container matching the target image's is used to stage the necessary tooling for patches."),(0,n.kt)("li",{parentName:"ul"},"In the case of distroless images for example, where there is no valid package status file in the target image, the tooling container is also used to pull down and process the necessary package updates for copy to the target image."),(0,n.kt)("li",{parentName:"ul"},"Although not pictured, this can also be used to obtain tools (e.g. busybox) to be used in the image probing stage as well."))),(0,n.kt)("li",{parentName:"ol"},"Actions to deploy the required patch packages to the target image.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"copa")," integrates with buildkit at the API level because it uses the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/moby/buildkit/blob/99f6199fa6f0c34dbb3acfa57e00b7189a6a79d4/docs/merge%2Bdiff.md"},"diff and merge")," graph operations directly so that it can stage all the necessary tooling in the target image while producing a resulting image that only contains the original image plus a new layer with all the deployed patches.")))),(0,n.kt)("h2",{id:"tradeoffs"},"Tradeoffs"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The core architectural choice of relying on packages as the unit of patching creates a couple of constraints:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"By relying on existing vulnerability scanner behavior that only detects vulnerabilities via presence/absence of vulnerable packages, copa is limited in the kinds of vulnerabilities it can address and false positive/negatives from scanners flow downstream to copa."),(0,n.kt)("li",{parentName:"ul"},"copa depends on individual package manager adapters to correctly deploy patches to the target images, but there is a long tail of compatibility issues that arise depending on the target image itself (e.g. outdated package manager config/keys, invalid/missing package graph, etc.). Overall, the maintenance cost of the project is expected to be non-trivial to address this."))),(0,n.kt)("li",{parentName:"ul"},"No support for windows containers given the dependency on buildkit.")))}d.isMDXComponent=!0}}]);