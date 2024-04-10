function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ReleaseSection-zf3hNPJq.js","assets/main-1yEd1KeW.js","assets/main-1Oxq6TrE.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{R as t,_ as r,u as n,j as e,T as l,r as i}from"./main-1yEd1KeW.js";const c=t.lazy(()=>r(()=>import("./ReleaseSection-zf3hNPJq.js"),__vite__mapDeps([0,1,2])));function o(){const{language:s}=n(),a=[{id:1,title:"INSANITY",artist:"RODRO",bandcampLink:"https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002",embeddedPlayer:e.jsx("iframe",{style:{border:"0",width:"350px",height:"442px"},src:"https://bandcamp.com/EmbeddedPlayer/track=1762528373/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/",children:e.jsx("a",{href:"https://atklrecords.bandcamp.com/track/insanity-free-download-hpn002",children:"INSANITY - (FREE DOWNLOAD) de RODRO"})})}];return console.log(a),e.jsxs("div",{className:"inline-block m-32",id:"releases",children:[e.jsxs(l,{children:[" ",s==="en"?"Releases":"Lanzamientos"]}),e.jsxs(i.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:[e.jsx(c,{releasesData:a})," "]})]})}export{o as default};
