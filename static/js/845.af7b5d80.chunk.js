"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[845],{845:function(e,n,i){i.r(n),i.d(n,{default:function(){return j}});var r,t,s=i(439),c=i(791),d=i(689),o=i(87),l=i(309),a=i(168),h=i(867).default,x=h.div(r||(r=(0,a.Z)(["\n  margin-right: 15px;\n  margin-left: 15px;\n"]))),u=h.div(t||(t=(0,a.Z)(["\n  display: flex;\n  gap: 10px;\n\n  padding: 10px;\n  border-bottom: 1px solid #000;\n"]))),v=i(184),j=function(){var e,n,i,r=(0,c.useState)(null),t=(0,s.Z)(r,2),a=t[0],h=t[1],j=(0,d.UO)().movieId,p=null!==(e=null===(n=(0,d.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",f=(0,c.useRef)(p);return(0,c.useEffect)((function(){(0,l.TP)(j).then((function(e){var n=e.data;h(n)})).catch((function(e){console.error("Error fetching movie details:",e)}))}),[j]),a?a?(0,v.jsxs)(x,{children:[(0,v.jsx)(o.rU,{to:f.current,children:"Back"}),(0,v.jsxs)(u,{children:[(0,v.jsx)("img",{srcSet:"".concat("https://image.tmdb.org/t/p/w500/").concat(a.poster_path),width:250,alt:"poster"}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:a.title}),(0,v.jsxs)("p",{children:["User score: ",a.vote_count]}),(0,v.jsx)("h2",{children:"Overview"}),(0,v.jsx)("p",{children:a.overview}),(0,v.jsx)("h3",{children:"Genres"}),null===(i=a.genres)||void 0===i?void 0:i.map((function(e){return(0,v.jsxs)("span",{children:[e.name," "]},e.id)}))]})]}),(0,v.jsxs)("div",{children:[(0,v.jsx)("h3",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(j,"/cast"),children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(o.rU,{to:"/movies/".concat(j,"/reviews"),children:"Reviews"})})]})]}),(0,v.jsx)(c.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading info..."}),children:(0,v.jsx)(d.j3,{})})]}):void 0:(0,v.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=845.af7b5d80.chunk.js.map