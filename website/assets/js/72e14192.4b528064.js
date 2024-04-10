"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Quick Start"},o=void 0,s={unversionedId:"quick-start",id:"quick-start",title:"Quick Start",description:"This sample illustrates how to patch containers using vulnerability reports with copa.",source:"@site/docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/copacetic/website/next/quick-start",draft:!1,tags:[],version:"current",frontMatter:{title:"Quick Start"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/copacetic/website/next/installation"},next:{title:"Tagging Guidelines",permalink:"/copacetic/website/next/best-practices"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sample Steps",id:"sample-steps",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This sample illustrates how to patch containers using vulnerability reports with ",(0,i.kt)("inlineCode",{parentName:"p"},"copa"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux or macOS configured through the ",(0,i.kt)("a",{parentName:"li",href:"/copacetic/website/next/installation"},"setup instructions"),". This includes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"copa")," tool ",(0,i.kt)("a",{parentName:"li",href:"/copacetic/website/next/installation"},"built & pathed"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/moby/buildkit/#quick-start"},"buildkit")," daemon installed & pathed. ",(0,i.kt)("a",{parentName:"li",href:"#buildkit-connection-examples"},"Examples"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"docker")," daemon runs a buildkit service in-process. If you are using this for your buildkit instance, Docker must have the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/containerd/"},"containerd image store feature")," enabled."),(0,i.kt)("li",{parentName:"ul"},"If you are using a buildx instance, or using buildkitd directly, there is no need to enable the containerd image store. However, only images in a remote registry can be patched using these methods."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/desktop/linux/install/#generic-installation-steps"},"docker")," daemon running and CLI installed & pathed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aquasecurity.github.io/trivy/latest/getting-started/installation/"},"trivy CLI")," installed & pathed.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Alternatively, see ",(0,i.kt)("a",{parentName:"li",href:"#scanner-plugins"},"scanner plugins")," for custom scanner support.")))))),(0,i.kt)("h2",{id:"sample-steps"},"Sample Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan the container image for patchable OS vulnerabilities, outputting the results to a JSON file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --vuln-type os --ignore-unfixed -f json -o nginx.1.21.6.json docker.io/library/nginx:1.21.6\n")),(0,i.kt)("p",{parentName:"li"},"You can also see the existing patchable vulnerabilities in table form on the shell with:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --vuln-type os --ignore-unfixed docker.io/library/nginx:1.21.6\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To patch the image, use the Trivy report and specify a buildkit instance to connect to:"),(0,i.kt)("p",{parentName:"li"},"By default copa will attempt to auto-connect to an instance in order:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Default docker buildkit endpoint (requires at least docker v24.0 with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/storage/containerd/#enable-containerd-image-store-on-docker-engine"},"containerd image store")," support enabled)"),(0,i.kt)("li",{parentName:"ol"},"Currently selected buildx builder (see: ",(0,i.kt)("inlineCode",{parentName:"li"},"docker buildx --help"),")"),(0,i.kt)("li",{parentName:"ol"},"buildkit daemon at the default address ",(0,i.kt)("inlineCode",{parentName:"li"},"/run/buildkit/buildkitd.sock"))),(0,i.kt)("p",{parentName:"li"},"If an instance doesn't exist or that instance doesn't support all the features copa needs the next will be attempted. Please see ",(0,i.kt)("a",{parentName:"p",href:"/copacetic/website/next/custom-address"},"custom buildkit addresses")," for more information."),(0,i.kt)("p",{parentName:"li"},"After setting up the buildkit instance, run the following command to patch the image:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"copa patch -r nginx.1.21.6.json -i docker.io/library/nginx:1.21.6\n")),(0,i.kt)("p",{parentName:"li"},"In any of these cases, ",(0,i.kt)("inlineCode",{parentName:"p"},"copa")," is non-destructive and exports a new image with the specified ",(0,i.kt)("inlineCode",{parentName:"p"},"1.21.6-patched")," label to the local Docker daemon."),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you're running this sample against an image from a private registry instead,ensure that the credentials are configured in the default Docker config.json before running ",(0,i.kt)("inlineCode",{parentName:"p"},"copa patch"),", for example, via ",(0,i.kt)("inlineCode",{parentName:"p"},"docker login -u <user> -p <password> <registry>"),".")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you're scanning and patching an image that is local-only (i.e. built or tagged locally but not pushed to a registry), ",(0,i.kt)("inlineCode",{parentName:"p"},"copa")," is limited to using ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),"'s built-in buildkit service, and must use the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/storage/containerd/"},(0,i.kt)("inlineCode",{parentName:"a"},"containerd image store"))," feature. This is because only ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),"'s built-in buildkit service has access to the docker image store (see ",(0,i.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," for more information.)"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scan the patched image and verify that the vulnerabilities have been patched:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"trivy image --vuln-type os --ignore-unfixed docker.io/library/nginx:1.21.6-patched\n")),(0,i.kt)("p",{parentName:"li"},"You can also inspect the structure of the patched image with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker history")," to see the new patch layer appended to the image:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker history docker.io/library/nginx:1.21.6-patched\nIMAGE          CREATED              CREATED BY                                      SIZE      COMMENT\n262dacfeb193   About a minute ago   mount / from exec sh -c apt install --no-ins\u2026   41.1MB    buildkit.exporter.image.v0\n<missing>      20 months ago        /bin/sh -c #(nop)  CMD ["nginx" "-g" "daemon\u2026   0B\n<missing>      20 months ago        /bin/sh -c #(nop)  STOPSIGNAL SIGQUIT           0B\n<missing>      20 months ago        /bin/sh -c #(nop)  EXPOSE 80                    0B\n<missing>      20 months ago        /bin/sh -c #(nop)  ENTRYPOINT ["/docker-entr\u2026   0B\n<missing>      20 months ago        /bin/sh -c #(nop) COPY file:09a214a3e07c919a\u2026   16.4kB\n<missing>      20 months ago        /bin/sh -c #(nop) COPY file:0fd5fca330dcd6a7\u2026   12.3kB\n<missing>      20 months ago        /bin/sh -c #(nop) COPY file:0b866ff3fc1ef5b0\u2026   12.3kB\n<missing>      20 months ago        /bin/sh -c #(nop) COPY file:65504f71f5855ca0\u2026   8.19kB\n<missing>      20 months ago        /bin/sh -c set -x     && addgroup --system -\u2026   64.5MB\n<missing>      20 months ago        /bin/sh -c #(nop)  ENV PKG_RELEASE=1~bullseye   0B\n<missing>      20 months ago        /bin/sh -c #(nop)  ENV NJS_VERSION=0.7.3        0B\n<missing>      20 months ago        /bin/sh -c #(nop)  ENV NGINX_VERSION=1.21.6     0B\n<missing>      20 months ago        /bin/sh -c #(nop)  LABEL maintainer=NGINX Do\u2026   0B\n<missing>      20 months ago        /bin/sh -c #(nop)  CMD ["bash"]                 0B\n<missing>      20 months ago        /bin/sh -c #(nop) ADD file:134f25aec8adf83cb\u2026   91.8MB\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the container to verify that the image has no regressions:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ docker run -it --rm --name nginx-test docker.io/library/nginx:1.21.6-patched\n/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration\n/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh\n10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf\n10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh\n/docker-entrypoint.sh: Configuration complete; ready for start up\n2024/01/22 23:32:54 [notice] 1#1: using the "epoll" event method\n2024/01/22 23:32:54 [notice] 1#1: nginx/1.21.6\n2024/01/22 23:32:54 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)\n2024/01/22 23:32:54 [notice] 1#1: OS: Linux 6.2.0-1018-azure\n2024/01/22 23:32:54 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576\n2024/01/22 23:32:54 [notice] 1#1: start worker processes\n')),(0,i.kt)("p",{parentName:"li"},"You can stop the container by opening a new shell instance and running: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker stop nginx-test")))))}m.isMDXComponent=!0}}]);