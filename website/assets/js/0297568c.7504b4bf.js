"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5939],{631:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=i(4848),a=i(8453);const s={title:"Design"},o=void 0,r={id:"design",title:"Design",description:"Design Tenets",source:"@site/versioned_docs/version-v0.8.x/design.md",sourceDirName:".",slug:"/design",permalink:"/copacetic/website/design",draft:!1,unlisted:!1,tags:[],version:"v0.8.x",frontMatter:{title:"Design"},sidebar:"sidebar",previous:{title:"Code of Conduct",permalink:"/copacetic/website/code-of-conduct"},next:{title:"Development and Testing Tips",permalink:"/copacetic/website/development-tips"}},c={},l=[{value:"Design Tenets",id:"design-tenets",level:2},{value:"Design Reasoning",id:"design-reasoning",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Tradeoffs",id:"tradeoffs",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"design-tenets",children:"Design Tenets"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Copa is intended to accelerate container patching by eliminating waiting on base image dependency chains to update."})," This is a raison d\u2019etre for the Copa project, so if we figured out a different way to patch containers that still relied on waiting for base images to be rebuilt and republished, we would consider spinning that off into a different project instead of making it part of Copa."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Copa is intended to work with the existing ecosystem of container images."})," The project should have a strong preference for solutions that do not require image producers to create or modify their images in special ways to use Copa."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Copa is intended to allow parties other than the image authors to address container vulnerabilities."})," Copa should require a minimum of special knowledge about the lineage and construction of an image from the user to patch it successfully."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Copa is intended to do one thing well and be composable with other tools and processes."})," Copa does not have to be a universal multitool for container patching. For example, it is preferable that it integrates with popular container scanning tools rather than incorporating custom container scanning into the project itself. Similarly, it does not need to become a general container manipulation tool in the vein of crane."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"design-reasoning",children:"Design Reasoning"}),"\n",(0,n.jsxs)(t.p,{children:["The design of copa arises from the application of those tenets to the observed issues in previous efforts directly update container images via rebasing, for example, the experimental ",(0,n.jsx)(t.a,{href:"https://github.com/google/go-containerregistry/blob/main/cmd/crane/rebase.md",children:(0,n.jsx)(t.code,{children:"crane rebase"})}),":"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Rebasing requires that all actors involved in creation of the image are coordinated so that some layers can be switched out without breaking the image. Attempting to switch out layers in the container overlay structure is brittle because most existing containers are created by writing over shared configuration files and data stores in base images. For example, an ",(0,n.jsx)(t.code,{children:"apt install"})," during image creation will overwrite the dpkg ",(0,n.jsx)(t.code,{children:"status"})," file in the base image, which will mask any package updates in a rebased layer. Since many existing container scanners rely on the reported package status to find vulnerable package versions, this can cause new vulnerabilities to not be reported or for patched binaries not to be recognized by the scanners."]}),"\n",(0,n.jsx)(t.p,{children:"To avoid breaking integration with the existing container ecosystem, copa patches the filesystem bundle as a whole instead of as a collection of layers so that the resulting image state is consistent. This strategy also allows copa to patch vulnerabilties introduced at any layer in the image, including OS packages added in the app layers that is not addressed by a simple rebase. It also supports the core tenet of supporting patching without requiring coordination with all the publishers of the base images that a given image transitively depends on."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Rebasing also requires that the user knows ",(0,n.jsx)(t.em,{children:"a priori"})," what base image (or transitive base image) is in the target image to determine which appropriate rebase image to use. This makes it very difficult for anyone not intimately involved with authoring the image from being able to remediate it, which is one of our tenets."]}),"\n",(0,n.jsx)(t.p,{children:"While it is possible to embed extra metadata or annotations into the target image to facilitate this base image (or transitive base image) lookup, that would require that the images to be patched be modified or created especially to support updates, which goes against another of our tenets to be able to patch images without requiring them to be customized explicitly for that purpose."}),"\n",(0,n.jsx)(t.p,{children:"The design of copa addresses this by reframing the problem of updating containers and understanding the structure or lineage of a container image to the more specific problem of what packages in a given container image need to be updated. This allows copa to tap into the expertise embedded in the much more robust ecosystem for detecting and remediating vulnerabilities at the package level that already exists today. By making copa an additional remediation step that can be run after a container scan in existing workflows, we avoid both of those issues with an additional benefit: it incurs no additional work on the part of base image publishers to support patching of images based on their base images, the existing channels for publishing update packages is sufficient to service those container images as well."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,n.jsx)("img",{title:"report-driven vulnerability patching",src:"/copacetic/website/img/vulnerability-patch.png"}),"\n",(0,n.jsx)(t.p,{children:"The requirements presented encourage an extensible model in order to support broad applicability. Specifically, there are two areas that the tool will need to accommodate multiple implementations to support more use cases:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The data schema of various vulnerability scanners producing the input vulnerability report."}),"\n",(0,n.jsx)(t.li,{children:"The state management of various package managers and process for applying patches appropriately through them."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Effectively, ",(0,n.jsx)(t.code,{children:"copa patch"})," can be considered a command that bridges an extensible ",(0,n.jsx)(t.code,{children:"Parse"})," action with an extensible ",(0,n.jsx)(t.code,{children:"Apply"})," action as illustrated in the diagram; the implementation can be thought of as an engine that uses this abstract Go interface to apply security update packages:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:"type UpdatePackage struct {\n    Name    string\n    Version string\n}\n\ntype UpdateManifest struct {\n    OSType    string\n    OSVersion string\n    Arch      string\n    Updates   []UpdatePackage\n}\n\ntype ScanReportParser interface {\n    Parse(reportPath string) (*UpdateManifest, error)\n}\n\ntype PackageManager interface {\n    Apply(imagePath string, report *UpdateManifest) error\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,n.jsx)("img",{title:"buildkit graph execution",src:"/copacetic/website/img/graph-execution.png"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"copa"})," is a pseudo-frontend to ",(0,n.jsx)(t.a,{href:"https://github.com/moby/buildkit",children:"buildkit"})," implemented as a CLI tool. Effectively, instead of taking a container definition to create from scratch, it takes the reference to the target image to patch and a container scan report and builds a series of ",(0,n.jsx)(t.a,{href:"https://github.com/moby/buildkit/tree/99f6199fa6f0c34dbb3acfa57e00b7189a6a79d4#exploring-llb",children:"LLB graphs"})," for buildkit to execute:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Actions to probe the image as a filesystem bundle, for example, retrieving the package manager status in the image.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Within each distribution type identified by the scanner report (e.g. Debian) there can be different ways of applying patches to the target image (e.g. distroless), which can be differentiated through these actions."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Actions to fetch and deploy tools that can be injected into the target image to perform the patching.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In cases where the package tools are not available in the target image, a standard version of the OS container matching the target image's is used to stage the necessary tooling for patches."}),"\n",(0,n.jsx)(t.li,{children:"In the case of distroless images for example, where there is no valid package status file in the target image, the tooling container is also used to pull down and process the necessary package updates for copy to the target image."}),"\n",(0,n.jsx)(t.li,{children:"Although not pictured, this can also be used to obtain tools (e.g. busybox) to be used in the image probing stage as well."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Actions to deploy the required patch packages to the target image.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"copa"})," integrates with buildkit at the API level because it uses the ",(0,n.jsx)(t.a,{href:"https://github.com/moby/buildkit/blob/99f6199fa6f0c34dbb3acfa57e00b7189a6a79d4/docs/merge%2Bdiff.md",children:"diff and merge"})," graph operations directly so that it can stage all the necessary tooling in the target image while producing a resulting image that only contains the original image plus a new layer with all the deployed patches."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"tradeoffs",children:"Tradeoffs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The core architectural choice of relying on packages as the unit of patching creates a couple of constraints:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"By relying on existing vulnerability scanner behavior that only detects vulnerabilities via presence/absence of vulnerable packages, copa is limited in the kinds of vulnerabilities it can address and false positive/negatives from scanners flow downstream to copa."}),"\n",(0,n.jsx)(t.li,{children:"copa depends on individual package manager adapters to correctly deploy patches to the target images, but there is a long tail of compatibility issues that arise depending on the target image itself (e.g. outdated package manager config/keys, invalid/missing package graph, etc.). Overall, the maintenance cost of the project is expected to be non-trivial to address this."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"No support for windows containers given the dependency on buildkit."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>r});var n=i(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);