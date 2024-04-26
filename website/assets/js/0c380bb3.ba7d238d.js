"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2150],{5420:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(4848),s=i(8453);const o={title:"Quick Start"},r=void 0,c={id:"quick-start",title:"Quick Start",description:"This sample illustrates how to patch containers using vulnerability reports with copa.",source:"@site/versioned_docs/version-v0.2.x/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/copacetic/website/v0.2.x/quick-start",draft:!1,unlisted:!1,tags:[],version:"v0.2.x",frontMatter:{title:"Quick Start"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/copacetic/website/v0.2.x/installation"},next:{title:"Design",permalink:"/copacetic/website/v0.2.x/design"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sample Steps",id:"sample-steps",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This sample illustrates how to patch containers using vulnerability reports with ",(0,t.jsx)(n.code,{children:"copa"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An Ubuntu 22.04 VM configured through the ",(0,t.jsx)(n.a,{href:"/copacetic/website/v0.2.x/installation",children:"setup instructions"})," or a VSCode ",(0,t.jsx)(n.a,{href:"./contributing.md/#visual-studio-code-development-container",children:"devcontainer"})," environment. This includes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"copa"})," tool ",(0,t.jsx)(n.a,{href:"/copacetic/website/v0.2.x/installation",children:"built & pathed"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/moby/buildkit/#quick-start",children:"buildkit"})," daemon installed & pathed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://docs.docker.com/desktop/linux/install/#generic-installation-steps",children:"docker"})," daemon running and CLI installed & pathed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://aquasecurity.github.io/trivy/latest/getting-started/installation/",children:"trivy CLI"})," installed & pathed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sample-steps",children:"Sample Steps"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scan the container image for patchable OS vulnerabilities, outputting the results to a JSON file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"trivy image --vuln-type os --ignore-unfixed -f json -o nginx.1.21.6.json docker.io/library/nginx:1.21.6\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also see the existing patchable vulnerabilities in table form on the shell with:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"trivy image --vuln-type os --ignore-unfixed docker.io/library/nginx:1.21.6\n\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Patch the image using the Trivy report. You will need to start ",(0,t.jsx)(n.code,{children:"buildkitd"})," if it is not already running:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo buildkitd &\nsudo copa patch -i docker.io/library/nginx:1.21.6 -r nginx.1.21.6.json -t 1.21.6-patched\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, you can run ",(0,t.jsx)(n.code,{children:"buildkitd"})," in a container, which allows copa to be run without root access to the local buildkit socket:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'export BUILDKIT_VERSION=v0.11.4\nexport BUILDKIT_PORT=8888\ndocker run \\\n    --detach \\\n    --rm \\\n    --privileged \\\n    -p 127.0.0.1:$BUILDKIT_PORT:$BUILDKIT_PORT/tcp \\\n    --name buildkitd \\\n    --entrypoint buildkitd \\\n    "moby/buildkit:$BUILDKIT_VERSION" \\\n    --addr tcp://0.0.0.0:$BUILDKIT_PORT\ncopa patch \\\n    -i docker.io/library/nginx:1.21.6 \\\n    -r nginx.1.21.6.json \\\n    -t 1.21.6-patched \\\n    -a tcp://0.0.0.0:$BUILDKIT_PORT\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In either case, ",(0,t.jsx)(n.code,{children:"copa"})," is non-destructive and exports a new image with the specified ",(0,t.jsx)(n.code,{children:"1.21.6-patched"})," label to the local Docker daemon."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NOTE:"})," if you're running this sample against an image from a private registry instead,\nensure that the credentials are configured in the default Docker config.json before running ",(0,t.jsx)(n.code,{children:"copa patch"}),",\nfor example, via ",(0,t.jsx)(n.code,{children:"sudo docker login -u <user> -p <password> <registry>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Scan the patched image and verify that the vulnerabilities have been patched:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"trivy image --vuln-type os --ignore-unfixed docker.io/library/nginx:1.21.6-patched\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also inspect the structure of the patched image with ",(0,t.jsx)(n.code,{children:"docker history"})," to see the new patch layer appended to the image:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ docker history docker.io/library/nginx:1.21.6-patched\nIMAGE          CREATED        CREATED BY                                      SIZE      COMMENT\na372df41e06d   1 minute ago   mount / from exec sh -c apt install --no-ins\u2026   26.1MB    buildkit.exporter.image.v0\n<missing>      3 months ago   CMD ["nginx" "-g" "daemon off;"]                0B        buildkit.dockerfile.v0\n<missing>      3 months ago   STOPSIGNAL SIGQUIT                              0B        buildkit.dockerfile.v0\n<missing>      3 months ago   EXPOSE map[80/tcp:{}]                           0B        buildkit.dockerfile.v0\n<missing>      3 months ago   ENTRYPOINT ["/docker-entrypoint.sh"]            0B        buildkit.dockerfile.v0\n<missing>      3 months ago   COPY 30-tune-worker-processes.sh /docker-ent\u2026   4.61kB    buildkit.dockerfile.v0\n<missing>      3 months ago   COPY 20-envsubst-on-templates.sh /docker-ent\u2026   1.04kB    buildkit.dockerfile.v0\n<missing>      3 months ago   COPY 10-listen-on-ipv6-by-default.sh /docker\u2026   1.96kB    buildkit.dockerfile.v0\n<missing>      3 months ago   COPY docker-entrypoint.sh / # buildkit          1.2kB     buildkit.dockerfile.v0\n<missing>      3 months ago   RUN /bin/sh -c set -x     && addgroup --syst\u2026   61.1MB    buildkit.dockerfile.v0\n<missing>      3 months ago   ENV PKG_RELEASE=1~bullseye                      0B        buildkit.dockerfile.v0\n<missing>      3 months ago   ENV NJS_VERSION=0.7.0                           0B        buildkit.dockerfile.v0\n<missing>      3 months ago   ENV NGINX_VERSION=1.20.2                        0B        buildkit.dockerfile.v0\n<missing>      3 months ago   LABEL maintainer=NGINX Docker Maintainers <d\u2026   0B        buildkit.dockerfile.v0\n<missing>      4 months ago   /bin/sh -c #(nop)  CMD ["bash"]                 0B\n<missing>      4 months ago   /bin/sh -c #(nop) ADD file:09675d11695f65c55\u2026   80.4MB\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Run the container to verify that the image has no regressions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ docker run -it --rm --name nginx-test docker.io/library/nginx:1.21.6-patched\n/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration\n/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh\n10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf\n10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh\n/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh\n/docker-entrypoint.sh: Configuration complete; ready for start up\n2022/05/16 18:00:17 [notice] 1#1: using the "epoll" event method\n2022/05/16 18:00:17 [notice] 1#1: nginx/1.20.2\n2022/05/16 18:00:17 [notice] 1#1: built by gcc 10.2.1 20210110 (Debian 10.2.1-6)\n2022/05/16 18:00:17 [notice] 1#1: OS: Linux 5.10.102.1-microsoft-standard-WSL2\n2022/05/16 18:00:17 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576\n2022/05/16 18:00:17 [notice] 1#1: start worker processes\n2022/05/16 18:00:17 [notice] 1#1: start worker process 31\n2022/05/16 18:00:17 [notice] 1#1: start worker process 32\n2022/05/16 18:00:17 [notice] 1#1: start worker process 33\n2022/05/16 18:00:17 [notice] 1#1: start worker process 34\n2022/05/16 18:00:17 [notice] 1#1: start worker process 35\n2022/05/16 18:00:17 [notice] 1#1: start worker process 36\n2022/05/16 18:00:17 [notice] 1#1: start worker process 37\n2022/05/16 18:00:17 [notice] 1#1: start worker process 38\n2022/05/16 18:00:17 [notice] 38#38: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 36#36: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 33#33: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 32#32: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 34#34: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 35#35: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 37#37: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 1#1: signal 28 (SIGWINCH) received\n2022/05/16 18:00:17 [notice] 31#31: signal 28 (SIGWINCH) received\n'})}),"\n",(0,t.jsxs)(n.p,{children:["You can stop the container by opening a new shell instance and running: ",(0,t.jsx)(n.code,{children:"docker stop nginx-test"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>c});var t=i(6540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);