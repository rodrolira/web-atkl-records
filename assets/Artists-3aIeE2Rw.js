function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ArtistCard-DNwzsxS-.js","assets/main-Tx2cbAr2.js","assets/main-CGJl1YdZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as s,_ as i,u as t,j as a}from"./main-Tx2cbAr2.js";import{T as n}from"./Title-CqK7Efkt.js";const r=s.lazy(()=>i(()=>import("./ArtistCard-DNwzsxS-.js"),__vite__mapDeps([0,1,2])));function l(){const{language:e}=t();return a.jsxs("div",{className:"m-32 inline-block",id:"artists",children:[a.jsx(n,{children:e==="en"?"Artists":"Artistas"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:a.jsxs(s.Suspense,{fallback:a.jsx("div",{children:"Loading..."}),children:[a.jsx(r,{id:1,name:"RODRO",role:"DJ",image:"/img/avatar.jpg"}),a.jsx(r,{id:2,name:"Sweet_Hate",role:"DJ",image:"/img/avatar.jpg"}),a.jsx(r,{id:3,name:"Abstracto",role:e==="en"?"Producer":"Productor",image:"/img/avatar.jpg"}),a.jsx(r,{id:4,name:"DARKNOISE",role:e==="en"?"Producer":"Productor",image:"/img/avatar.jpg"})]})})]})}export{l as default};
