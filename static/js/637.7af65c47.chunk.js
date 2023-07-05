"use strict";(self.webpackChunkfilmlibrary_react=self.webpackChunkfilmlibrary_react||[]).push([[637],{5872:function(n,t,e){e.d(t,{AW:function(){return p},Hx:function(){return g},Ny:function(){return u},Y5:function(){return x},uV:function(){return f}});var r=e(4165),i=e(5861),a=e(4569),c=e.n(a),o={key:"d7b55c78972af1312b499784f8cdaa54",baseUrl:"https://api.themoviedb.org/3/"},s=new URLSearchParams({api_key:o.key,language:"en-US"});function u(n){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o.baseUrl,"search/movie?").concat(s,"&query=").concat(t),n.next=3,c().get(e);case 3:return i=n.sent,a=i.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return(d=(0,i.Z)((0,r.Z)().mark((function n(){var t,e,i;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o.baseUrl,"movie/top_rated?").concat(s),n.next=3,c().get(t);case 3:return e=n.sent,i=e.data,n.abrupt("return",i.results);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o.baseUrl,"movie/").concat(t,"?").concat(s),n.next=3,c().get(e);case 3:return i=n.sent,a=i.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o.baseUrl,"movie/").concat(t,"/credits?").concat(s),n.next=3,c().get(e);case 3:return i=n.sent,a=i.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o.baseUrl,"movie/").concat(t,"/reviews?").concat(s),n.next=3,c().get(e);case 3:return i=n.sent,a=i.data,n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6637:function(n,t,e){e.r(t),e.d(t,{default:function(){return N}});var r,i,a,c,o,s,u,l,p,d,x,h,f,m=e(4165),g=e(5861),v=e(9439),Z=e(2791),j=e(7689),b=e(5872),w=e(168),y=e(6444),k=e(1087),P=y.ZP.div(r||(r=(0,w.Z)(["\n\tdisplay: flex;\n\tmargin-top: 30px;\n"]))),U=y.ZP.div(i||(i=(0,w.Z)(["\n\tborder-radius: 24px;\n\theight: auto;\n\tmax-height: 693px;\n\tmax-width: 460px;\n"]))),S=y.ZP.img(a||(a=(0,w.Z)(["\n\tobject-fit: contain;\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: 24px;\n"]))),_=y.ZP.div(c||(c=(0,w.Z)(["\n\tmargin-left: 30px;\n\tpadding: 15px;\n"]))),z=y.ZP.h4(o||(o=(0,w.Z)(["\n\tfont-weight: 700;\n\tfont-size: 24px;\n\tcolor: #475069;\n\tmargin: 0;\n\tmargin-bottom: 20px;\n"]))),R=y.ZP.p(s||(s=(0,w.Z)(["\n\tmax-width: 700px;\n\tfont-weight: 400;\n\tfont-size: 20px;\n\tline-height: 32px;\n\tmargin-bottom: 24px;\n"]))),C=y.ZP.ul(u||(u=(0,w.Z)(["\n\tmargin-top: 24px;\n\tlist-style: none;\n\tpadding: 0;\n\tmargin: 0;\n\tmargin-top: 15px;\n"]))),F=y.ZP.li(l||(l=(0,w.Z)(["\n  margin-bottom: 24px;\n}\n"]))),L=y.ZP.p(p||(p=(0,w.Z)(["\n\tcolor: #475069;\n\tmargin-bottom: 8px;\n"]))),O=y.ZP.div(d||(d=(0,w.Z)(["\n\tfont-weight: 400;\n\tfont-size: 20px;\n"]))),A=(0,y.ZP)(k.rU)(x||(x=(0,w.Z)(["\n\tfont-size: 18px;\n\tcolor: #475069;\n\ttext-decoration: underline;\n\n\t&:hover {\n\t\tcolor: #9c92f8;\n\t}\n"]))),G=y.ZP.h5(h||(h=(0,w.Z)(["\n\tfont-weight: 600;\n\tfont-size: 18px;\n\tcolor: #475069;\n\tmargin-bottom: 20px;\n"]))),H=e(2299),T=e.n(H),Y=e(184),q={display:"block",margin:"50px auto"},B=function(n){var t=n.movie,e=t.genres.map((function(n){return n.name})),r=t.production_countries.map((function(n){return n.name}));return(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(P,{"data-id":t.id,children:[(0,Y.jsx)(U,{children:(0,Y.jsx)(S,{src:"http://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title})}),(0,Y.jsxs)(_,{children:[(0,Y.jsx)(z,{children:t.title}),(0,Y.jsx)(R,{children:t.overview}),(0,Y.jsxs)(C,{children:[(0,Y.jsxs)(F,{children:[(0,Y.jsx)(L,{children:"Rating"}),(0,Y.jsx)(O,{children:t.vote_average.toFixed(1)})]}),(0,Y.jsxs)(F,{children:[(0,Y.jsx)(L,{children:"Genres"}),(0,Y.jsx)(O,{children:e.join(", ")})]}),(0,Y.jsxs)(F,{children:[(0,Y.jsx)(L,{children:"Country"}),(0,Y.jsx)(O,{children:r.join(", ")})]}),(0,Y.jsxs)(F,{children:[(0,Y.jsx)(L,{children:"Release Date"}),(0,Y.jsx)(O,{children:t.release_date})]}),(0,Y.jsxs)(F,{children:[(0,Y.jsx)(L,{children:"Run time"}),(0,Y.jsxs)(O,{children:[t.runtime," min"]})]})]}),(0,Y.jsxs)(C,{children:[(0,Y.jsx)(G,{children:"Additional information"}),(0,Y.jsx)(F,{children:(0,Y.jsx)(A,{to:"cast",children:"Cast"})}),(0,Y.jsx)(F,{children:(0,Y.jsx)(A,{to:"reviews",children:"Reviews"})})]})]})]}),(0,Y.jsx)(Z.Suspense,{fallback:(0,Y.jsx)(T(),{color:"#9c92f8",cssOverride:q,size:150,"aria-label":"Loading Spinner","data-testid":"loader"}),children:(0,Y.jsx)(j.j3,{})})]})},D=(0,y.ZP)(k.rU)(f||(f=(0,w.Z)(["\ndisplay: inline-block;\ntext-decoration: none;\npadding: 10px 15px;\nmargin-top: 20px;\nbackground-color: #9c92f8;\nborder-radius: 18px;\ncolor: #fff;\n"]))),E=function(n){var t=n.to;return(0,Y.jsx)(D,{to:t,children:"Go Back"})},I={display:"block",margin:"100px auto"},N=function(){var n,t,e=(0,Z.useState)(null),r=(0,v.Z)(e,2),i=r[0],a=r[1],c=(0,Z.useState)(!1),o=(0,v.Z)(c,2),s=o[0],u=o[1],l=(0,Z.useState)(!1),p=(0,v.Z)(l,2),d=p[0],x=p[1],h=(0,j.UO)().movieId,f=(0,j.TH)(),w=(0,Z.useRef)(null!==(n=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies");return console.log(w.current),(0,Z.useEffect)((function(){function n(){return(n=(0,g.Z)((0,m.Z)().mark((function n(){var t;return(0,m.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,u(!0),x(!1),n.next=5,(0,b.Y5)(h);case 5:t=n.sent,a(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),x(!0);case 12:return n.prev=12,u(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[h]),(0,Y.jsxs)("main",{children:[d&&(0,Y.jsx)("p",{children:"Sorry, something went wrong! Try reloading the page!"}),s&&(0,Y.jsx)(T(),{color:"#9c92f8",loading:s,cssOverride:I,size:150,"aria-label":"Loading Spinner","data-testid":"loader"}),i&&!s&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(E,{to:w.current}),(0,Y.jsx)(B,{movie:i})]})]})}}}]);
//# sourceMappingURL=637.7af65c47.chunk.js.map