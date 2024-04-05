function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Artists-D9ZJVbYv.js","assets/main-DEVcnqxg.js","assets/main-CGJl1YdZ.css","assets/Title-CLZYIPtj.js","assets/Releases-PrmrCn_V.js","assets/AboutSection-5YU9vyrj.js","assets/DemoSection-B62Vlhzp.js","assets/Footer-y8c0hxJL.js","assets/ContactSection-DFz_S7Kz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as s,_ as l,u as i,j as e}from"./main-DEVcnqxg.js";const n=s.lazy(()=>l(()=>import("./Artists-D9ZJVbYv.js"),__vite__mapDeps([0,1,2,3]))),t=s.lazy(()=>l(()=>import("./Releases-PrmrCn_V.js"),__vite__mapDeps([4,1,2,3]))),c=s.lazy(()=>l(()=>import("./AboutSection-5YU9vyrj.js"),__vite__mapDeps([5,1,2,3]))),o=s.lazy(()=>l(()=>import("./DemoSection-B62Vlhzp.js"),__vite__mapDeps([6,1,2,3]))),r=s.lazy(()=>l(()=>import("./Footer-y8c0hxJL.js"),__vite__mapDeps([7,1,2]))),d=s.lazy(()=>l(()=>import("./ContactSection-DFz_S7Kz.js"),__vite__mapDeps([8,1,2,3])));function m(){const{language:a}=i();return e.jsxs("div",{id:"home",className:"home bg-slate-950",children:[e.jsx("div",{className:"parallax-container flex",children:e.jsx("div",{className:"parallax-content flex w-full",children:e.jsx("div",{className:"container mx-auto my-24",children:e.jsxs("section",{id:"main",className:"main h-full flex flex-col",children:[e.jsx("div",{className:"logo-main flex items-center h-full w-full",children:e.jsx("img",{alt:"main",className:"h-full mx-auto",src:"/img/main.png"})}),e.jsxs("div",{className:"text-center text-white flex flex-col",children:[e.jsx("h1",{className:"title-main font-extrabold text-5xl",children:"HARD TECHNO IS LIFE"}),e.jsx("h2",{className:"text-3xl",children:a==="en"?"LABEL":"SELLO DISCOGRÁFICO"})]})]})})})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading Artists..."}),children:e.jsx(n,{})}),";",e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading Releases..."}),children:e.jsx(t,{})}),";",e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading AboutSection..."}),children:e.jsx(c,{})}),";",e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading DemosSection..."}),children:e.jsx(o,{})}),";",e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading ContactSection..."}),children:e.jsx(d,{})}),";",e.jsx(s.Suspense,{fallback:e.jsx("div",{children:"Loading Footer..."}),children:e.jsx(r,{})})]})}export{m as default};