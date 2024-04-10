function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ReleaseCard-BqcGRx_E.js","assets/main-1yEd1KeW.js","assets/main-1Oxq6TrE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as a,_ as t,j as i}from"./main-1yEd1KeW.js";const e=a.lazy(()=>t(()=>import("./ReleaseCard-BqcGRx_E.js"),__vite__mapDeps([0,1,2])));function l({releasesData:r}){return i.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:i.jsx(a.Suspense,{fallback:i.jsx("div",{children:"Loading ReleaseCard..."}),children:Array.isArray(r)&&r.map(d=>i.jsx(e,{title:d.title,artist:d.artist,bandcampLink:d.bandcampLink,embeddedPlayer:d.embeddedPlayer},d.id))})})}export{l as default};
