function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ContactForm-3RWsXCld.js","./main-BOLHcn9O.js","./main-B1yTgSeI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as t,_ as e,u as o,j as a,r as n}from"./main-BOLHcn9O.js";import{T as r}from"./Title-BDtg3pdj.js";const c=t.lazy(()=>e(()=>import("./ContactForm-3RWsXCld.js"),__vite__mapDeps([0,1,2]),import.meta.url)),l=()=>{const{language:s}=o();return a.jsx("div",{id:"contact",className:"py-12",children:a.jsxs("div",{className:"max-w-4xl mx-auto",children:[a.jsx(r,{children:s==="en"?"Contact Us":"Contáctanos"}),a.jsx("div",{className:"bg-white rounded shadow-md p-6 w-6/12 mx-auto",children:a.jsxs(n.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:[a.jsx(c,{})," "]})})]})})};export{l as default};
