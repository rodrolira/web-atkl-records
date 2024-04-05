function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ReleaseSection-BH5ghOe5.js","./main-BOLHcn9O.js","./main-B1yTgSeI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as t,_ as r,u as n,j as e,r as l}from"./main-BOLHcn9O.js";import{T as i}from"./Title-BDtg3pdj.js";const o=t.lazy(()=>r(()=>import("./ReleaseSection-BH5ghOe5.js"),__vite__mapDeps([0,1,2]),import.meta.url));function m(){const{language:s}=n(),a=[{id:1,title:"INSANITY",artist:"RODRO",bandcampLink:"https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002",embeddedPlayer:e.jsx("iframe",{style:{border:"0",width:"350px",height:"442px"},src:"https://bandcamp.com/EmbeddedPlayer/track=1762528373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",children:e.jsx("a",{href:"https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002",children:"INSANITY - (FREE DOWNLOAD) de RODRO"})})}];return console.log(a),e.jsxs("div",{className:"inline-block m-32",id:"releases",children:[e.jsxs(i,{children:[" ",s==="en"?"Releases":"Lanzamientos"]}),e.jsxs(l.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:[e.jsx(o,{releasesData:a})," "]})]})}export{m as default};
