(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{38:function(e,t,n){e.exports=n(67)},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(34),c=n.n(l),o=(n(43),n(1)),i=n(11),u=n(3),m=n(2);n(8);function s(){var e=Object(o.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 100%;\n\theight: auto;\n"]);return s=function(){return e},e}var f=m.a.div(s());var p=function(e){var t=e.w,n=e.h,a=5+e.x,l=105+e.y;return r.a.createElement(f,null,r.a.createElement(i.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("svg",{width:"250",height:"250",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("line",{x1:a,x2:a,y1:l,y2:l+n,stroke:"cornflowerblue",strokeWidth:"5"}),r.a.createElement("line",{x1:a+t,x2:a+t,y1:l,y2:l+n,stroke:"cornflowerblue",strokeWidth:"5"}),r.a.createElement("line",{x1:a,x2:a+t,y1:l+n/2,y2:l,stroke:"cornflowerblue",strokeWidth:"5"}),r.a.createElement("line",{x1:a,x2:a+t,y1:l+n/2,y2:l+n,stroke:"cornflowerblue",strokeWidth:"5"}),r.a.createElement("circle",{cx:a,cy:l,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:a,cy:l+n/2,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:a,cy:l+n,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:a+t,cy:l,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),r.a.createElement("circle",{cx:a+t,cy:l+n,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}))))};function d(){var e=Object(o.a)(["\n\ttext-decoration: none;\n\tcolor: cornflowerblue;\n\tfont-weight: bold;\n\tdisplay: inline;\n\tmargin: 0.5em 0;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tfont-size: 1.25vw;\n\t&:hover {\n\t\tcolor: white;\n\t}\n\tpadding: 0 10px;\n\ttransition: all .3s;\n\n"]);return d=function(){return e},e}function v(){var e=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tlist-style-type: none;\n\twidth: 100%;\n\tmargin: 0;\n\toverflow: hidden;\n\tpadding: 5px;\n"]);return v=function(){return e},e}function E(){var e=Object(o.a)(["\n\tposition: relative;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 10vh;\n\tdisplay: flex;\n\tbackground-color: #252525;\n"]);return E=function(){return e},e}var h=m.a.div(E()),g=m.a.ul(v()),b=Object(m.a)(i.b)(d());var x=function(e){return r.a.createElement(h,null,r.a.createElement(p,{x:35,y:0,w:100,h:40})," ",r.a.createElement(g,{className:"navigation-sub"},r.a.createElement(b,{to:"/"},"Home"),r.a.createElement(b,{to:"/projects"},"Projects"),r.a.createElement(b,{to:"/about"},"About Me"),r.a.createElement(b,{to:"/contact"},"Contact")))};function y(){var e=Object(o.a)(["\n\twidth: 100%;\n\ttext-align: center;\n\tfont-size: ","vw;\n\tmargin-left: ","%;\n\tcolor: #555555;\n\tpadding: 0;\n"]);return y=function(){return e},e}function w(){var e=Object(o.a)(["\n\tmargin-left: ","%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left;\n\tfont-family: 'Orbitron', sans-serif;\n\tfont-size: ","vw;\n\ttext-shadow: 1px 1px 3px #3f7fbf;\n\tmix-blend-mode: screen;\n\tanimation: fadeIn 2.5s linear forwards;\n\tanimation: color-change 30s infinite;\n\t@keyframes fadeIn {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t@keyframes color-change {\n\t\t15% {\n\t\t\tcolor: red;\n\t\t}\n\t\t30% {\n\t\t\tcolor: orange;\n\t\t}\n\t\t45% {\n\t\t\tcolor: yellow;\n\t\t}\n\t\t60% {\n\t\t\tcolor: green;\n\t\t}\n\t\t75% {\n\t\t\tcolor: blue;\n\t\t}\n\t\t75% {\n\t\t\tcolor: indigo;\n\t\t}\n\t\t75% {\n\t\t\tcolor: purple;\n\t\t}\n\t}\n"]);return w=function(){return e},e}function j(){var e=Object(o.a)(["\n\tmargin-left: 20px;\n\twidth: 100%;\n"]);return j=function(){return e},e}var O=m.a.div(j()),k=m.a.h1(w(),(function(e){return e.left}),(function(e){return e.scale})),H=m.a.h3(y(),(function(e){return e.scale/4}),(function(e){return 6*e.left}));var S=function(e){return r.a.createElement(O,null,r.a.createElement(k,{left:e.left,top:e.top,scale:e.scale},e.name),r.a.createElement(H,{left:e.left,scale:e.scale},e.subheading))};n(49);function W(){var e=Object(o.a)(["\n\twidth: 35px;\n\tmargin-top: 20px;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-family: 'Orbitron', sans-serif;\n\tletter-spacing: 10px;\n\tfont-weight: bold;\n\tcolor: darkgrey;\n"]);return W=function(){return e},e}function N(){var e=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: flex-start;\n\tmargin-top: 15%;\n"]);return N=function(){return e},e}var M=m.a.div(N()),A=m.a.div(W()),q={height:"10px",transformOrigin:"center",transform:"rotate(-90deg)"};var z=function(e){return r.a.createElement(M,null,r.a.createElement(A,null,r.a.createElement("div",{style:q},"Skills:")),r.a.createElement("div",{className:"perspective-text"},r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null),r.a.createElement("p",null,"React")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"JavaScript")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"JavaScript"),r.a.createElement("p",null,"CSS")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"HTML")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"HTML"),r.a.createElement("p",null))))},D=n(16),I=(n(50),n(18)),J=n.n(I);function P(){var e=Object(o.a)(["\n\twidth: 80%;\n\tfont-size: 22px;\n\tpadding: 10px;\n"]);return P=function(){return e},e}var T=m.a.div(P()),_=function(e){var t=Object(a.useState)([]),n=Object(D.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)([]),i=Object(D.a)(o,2),u=i[0],m=i[1];return Object(a.useEffect)((function(){J.a.get("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json").then((function(e){console.log(e.data.quoteText),c(e.data.quoteText),m(e.data.quoteAuthor)}))}),[]),r.a.createElement(T,null,r.a.createElement("blockquote",null,l,r.a.createElement("footer",null,r.a.createElement("cite",null,u))))};function K(){var e=Object(o.a)(["\n  display: flex;\n  width: 50%;\n"]);return K=function(){return e},e}function L(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 5%;\n  align-items: flex-start;\n\n  height: 80vh;\n  width: 100%;\n"]);return L=function(){return e},e}var R=m.a.div(L()),C=m.a.div(K()),B=function(e){return r.a.createElement(R,null,r.a.createElement(C,null,r.a.createElement(S,{name:"Kevin Niemeyer",subheading:"Developer / Musician / Human",top:"-3",left:"5",scale:"7"})),r.a.createElement(C,null,r.a.createElement(z,null)),r.a.createElement(C,null,r.a.createElement(_,null)))},G=n(22);function U(){var e=Object(o.a)(["\n  padding: 20px;\n  text-decoration: none;\n"]);return U=function(){return e},e}function V(){var e=Object(o.a)(["\n  display: flex;\n  list-style-type: none;\n"]);return V=function(){return e},e}function Y(){var e=Object(o.a)(["\n  position: relative;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  width: 100%;\n"]);return Y=function(){return e},e}var F=m.a.div(Y()),Q=m.a.ul(V()),$=m.a.li(U());var X=function(e){console.log(e.repo.name);var t="https://kevinniemeyer.github.io/".concat(e.repo.name,"/");return console.log(e.repo.pic),r.a.createElement(F,null,r.a.createElement(Q,null,r.a.createElement($,null,r.a.createElement("h3",null,"Project: ",r.a.createElement("span",{style:{color:"orange"}},e.repo.name)),r.a.createElement("h3",null,"Description:"," ",r.a.createElement("span",{style:{color:"orange"}},e.repo.description)),r.a.createElement("h3",null,"GitHub Repository:\xa0",r.a.createElement("a",{href:e.repo.html_url},e.repo.html_url)),r.a.createElement("h3",null,r.a.createElement("a",{href:t},"Live Demo")),r.a.createElement("img",{src:"#",alt:e.repo.name}))))};function Z(){var e=Object(o.a)(["\n  position: relative;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n"]);return Z=function(){return e},e}var ee=m.a.div(Z());var te=function(e){var t=Object(a.useState)([]),n=Object(D.a)(t,2),l=n[0],c=n[1];return Object(a.useEffect)((function(){J.a.get("https://api.github.com/users/KevinNiemeyer/repos?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE",{private:"false",fork:"false"}).then((function(e){var t=e.data;c([].concat(Object(G.a)(l),Object(G.a)(t)))}))}),[]),0===l.length?null:r.a.createElement(ee,null,r.a.createElement(S,{left:"3",top:"3",scale:"3",name:"Projects"}),l.map((function(e){return!1===e.private&&!1===e.fork?r.a.createElement(X,{repo:e,key:e.id,id:e.id,git_url:e.git_url,description:e.description,pic:""}):null})),";")};function ne(){var e=Object(o.a)(["\n\tposition: relative;\n\twidth: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n"]);return ne=function(){return e},e}var ae=m.a.div(ne());var re=function(e){return r.a.createElement(ae,null,r.a.createElement(S,{left:"3",top:"3",scale:"3",name:"About Me"}),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null),r.a.createElement("p",null,"Hello"),r.a.createElement("br",null)," ",r.a.createElement("p",null,"Hello"),r.a.createElement("br",null))};function le(){var e=Object(o.a)(["\n\theight: 80vh;\n\twidth: 100%;\n\tposition: relative;\n\tdisplay: flex;\n"]);return le=function(){return e},e}var ce=m.a.div(le());var oe=function(e){return r.a.createElement(ce,null)};function ie(){var e=Object(o.a)(["\n\tposition: relative;\n\tbottom: 0;\n\tleft: 0;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 10vh;\n\tdisplay: flex;\n\tbackground-color: #252525;\n\tfont-size: 12px;\n\tcolor: lightgrey;\n"]);return ie=function(){return e},e}var ue=m.a.div(ie());var me=function(e){return r.a.createElement(ue,null,"@Kevin Niemeyer 2020")};function se(){var e=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 80vh;\n\twidth: 100%;\n\tposition: relative;\n\tdisplay: flex;\n"]);return se=function(){return e},e}var fe=m.a.div(se());var pe=function(e){return console.log(e),r.a.createElement(fe,null,r.a.createElement("h1",null,e.location.pathname," Page Not Found "))};function de(){var e=Object(o.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all .3s;\n\tmax-height: 100vh;\n"]);return de=function(){return e},e}var ve=m.a.div(de());var Ee=function(){return r.a.createElement(i.a,null,r.a.createElement(ve,null,r.a.createElement(x,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:B}),r.a.createElement(u.a,{exact:!0,path:"/home",component:B}),r.a.createElement(u.a,{exact:!0,path:"/portfolio",component:B}),r.a.createElement(u.a,{exact:!0,path:"/about",component:re}),r.a.createElement(u.a,{exact:!0,path:"/projects",component:te}),r.a.createElement(u.a,{exact:!0,path:"/contact",component:oe}),r.a.createElement(u.a,{path:"/*",component:pe})),r.a.createElement(me,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){}},[[38,1,2]]]);
//# sourceMappingURL=main.b77902f0.chunk.js.map