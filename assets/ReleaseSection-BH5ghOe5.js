function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ReleaseCard-CBH458nh.js","./main-BOLHcn9O.js","./main-B1yTgSeI.css","./Button-ImcgPWLM.js","./Button-BwS4aKQq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as a,_ as t,j as r}from"./main-BOLHcn9O.js";const e=a.lazy(()=>t(()=>import("./ReleaseCard-CBH458nh.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url));function l({releasesData:d}){return r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.jsx(a.Suspense,{fallback:r.jsx("div",{children:"Loading ReleaseCard..."}),children:Array.isArray(d)&&d.map(i=>r.jsx(e,{title:i.title,artist:i.artist,bandcampLink:i.bandcampLink,embeddedPlayer:i.embeddedPlayer},i.id))})})}export{l as default};
