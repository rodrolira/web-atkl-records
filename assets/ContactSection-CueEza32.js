function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ContactForm-C2zS_F1f.js","assets/main-1yEd1KeW.js","assets/main-1Oxq6TrE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as t,_ as e,u as n,j as a,T as o,r as c}from"./main-1yEd1KeW.js";const i=t.lazy(()=>e(()=>import("./ContactForm-C2zS_F1f.js"),__vite__mapDeps([0,1,2]))),d=()=>{const{language:s}=n();return a.jsx("div",{id:"contact",className:"py-12",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx(o,{children:s==="en"?"Contact Us":"Contáctanos"}),a.jsx("div",{className:"bg-white rounded shadow-md p-6 w-6/12 mx-auto",children:a.jsxs(c.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:[a.jsx(i,{})," "]})})]})})};export{d as default};
