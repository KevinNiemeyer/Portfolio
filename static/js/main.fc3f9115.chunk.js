(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(t,e,n){t.exports=n(65)},40:function(t,e,n){},46:function(t,e,n){},47:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(31),i=n.n(l),o=(n(40),n(1)),c=n(10),u=n(3),s=n(2);n(8);function f(){var t=Object(o.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 100%;\n\theight: auto;\n"]);return f=function(){return t},t}var m=s.a.div(f());var d=function(t){var e=t.w,n=t.h,a=5+t.x,l=105+t.y;return r.a.createElement(m,null,r.a.createElement(c.b,{style:{textDecoration:"none"},to:"/"},r.a.createElement("svg",{width:"250",height:"250",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},"// left vertical",r.a.createElement("line",{x1:a,x2:a,y1:l,y2:l+n,stroke:"cornflowerblue",strokeWidth:"5"}),"// right vertical",r.a.createElement("line",{x1:a+e,x2:a+e,y1:l,y2:l+n,stroke:"cornflowerblue",strokeWidth:"5"}),"// top diagonal",r.a.createElement("line",{x1:a,x2:a+e,y1:l+n/2,y2:l,stroke:"cornflowerblue",strokeWidth:"5"}),"// bottom diagonal",r.a.createElement("line",{x1:a,x2:a+e,y1:l+n/2,y2:l+n,stroke:"cornflowerblue",strokeWidth:"5"}),"// top left",r.a.createElement("circle",{cx:a,cy:l,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),"// middle",r.a.createElement("circle",{cx:a,cy:l+n/2,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),"// bottom left",r.a.createElement("circle",{cx:a,cy:l+n,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),"// top right",r.a.createElement("circle",{cx:a+e,cy:l,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}),"// bottom right",r.a.createElement("circle",{cx:a+e,cy:l+n,r:"3",stroke:"red",fill:"transparent",strokeWidth:"3"}))))};function p(){var t=Object(o.a)(["\n\ttext-decoration: none;\n\tcolor: cornflowerblue;\n\tfont-weight: bold;\n\tdisplay: inline;\n\tmargin: 0.5em 0;\n\tfont-family: Helvetica, Arial, sans-serif;\n\tfont-size: 1.25vw;\n\t&:hover {\n\t\tcolor: white;\n\t}\n\tpadding: 0 10px;\n\ttransition: all .3s;\n\n"]);return p=function(){return t},t}function v(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: space-around;\n\tlist-style-type: none;\n\twidth: 100%;\n\tmargin: 0;\n\toverflow: hidden;\n\tpadding: 5px;\n"]);return v=function(){return t},t}function h(){var t=Object(o.a)(["\n\tposition: relative;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 10vh;\n\tdisplay: flex;\n\tbackground-color: #252525;\n"]);return h=function(){return t},t}var g=s.a.div(h()),E=s.a.ul(v()),x=Object(s.a)(c.b)(p());var b=function(t){return r.a.createElement(g,null,r.a.createElement(d,{x:35,y:0,w:100,h:40})," ",r.a.createElement(E,{className:"navigation-sub"},r.a.createElement(x,{to:"/"},"Home"),r.a.createElement(x,{to:"/projects"},"Projects"),r.a.createElement(x,{to:"/about"},"About Me"),r.a.createElement(x,{to:"/contact"},"Contact")))},y=n(13);function w(){var t=Object(o.a)(["\n\twidth: 100%;\n\ttext-align: right;\n\tfont-size: ","vw;\n\tmargin-left: ","%;\n\tcolor: #555555;\n\tpadding: 0;\n"]);return w=function(){return t},t}function j(){var t=Object(o.a)(["\n\tmargin-left: ","%;\n\tpadding: 0;\n\tmargin: 0;\n\ttext-align: left;\n\tfont-family: 'Orbitron', sans-serif;\n\tfont-size: ","vw;\n\ttext-shadow: 1px 1px 3px #3f7fbf;\n\tmix-blend-mode: screen;\n\tanimation: fadeIn 2.5s linear forwards;\n\tanimation: color-change 30s infinite;\n\t@keyframes fadeIn {\n\t\t0% {\n\t\t\topacity: 0;\n\t\t}\n\n\t\t100% {\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t@keyframes color-change {\n\t\t15% {\n\t\t\tcolor: red;\n\t\t}\n\t\t30% {\n\t\t\tcolor: orange;\n\t\t}\n\t\t45% {\n\t\t\tcolor: yellow;\n\t\t}\n\t\t60% {\n\t\t\tcolor: green;\n\t\t}\n\t\t75% {\n\t\t\tcolor: blue;\n\t\t}\n\t\t75% {\n\t\t\tcolor: indigo;\n\t\t}\n\t\t75% {\n\t\t\tcolor: purple;\n\t\t}\n\t}\n"]);return j=function(){return t},t}function O(){var t=Object(o.a)(["\n\tmargin-left: 20px;\n\twidth: 100%;\n"]);return O=function(){return t},t}var k=s.a.div(O()),S=s.a.h1(j(),(function(t){return t.left}),(function(t){return t.scale})),W=s.a.h3(w(),(function(t){return t.scale/4}),(function(t){return 6*t.left}));var N=function(t){return r.a.createElement(k,null,r.a.createElement(S,{left:t.left,top:t.top,scale:t.scale},t.name),r.a.createElement(W,{left:t.left,scale:t.scale},t.subheading))};n(46);function M(){var t=Object(o.a)(["\n\twidth: 35px;\n\tmargin-top: 20px;\n\theight: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tfont-family: 'Orbitron', sans-serif;\n\tletter-spacing: 10px;\n\tfont-weight: bold;\n\tcolor: darkgrey;\n"]);return M=function(){return t},t}function A(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\talign-items: flex-start;\n\tmargin-top: 15%;\n"]);return A=function(){return t},t}var z=s.a.div(A()),C=s.a.div(M()),H={height:"10px",transformOrigin:"center",transform:"rotate(-90deg)"};var I=function(t){return r.a.createElement(z,null,r.a.createElement(C,null,r.a.createElement("div",{style:H},"Skills:")),r.a.createElement("div",{className:"perspective-text"},r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null),r.a.createElement("p",null,"React")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"React"),r.a.createElement("p",null,"JavaScript")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"JavaScript"),r.a.createElement("p",null,"CSS")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"CSS"),r.a.createElement("p",null,"HTML")),r.a.createElement("div",{className:"perspective-line"},r.a.createElement("p",null,"HTML"),r.a.createElement("p",null))))};n(47);function J(){var t=Object(o.a)(["\n\twidth: 80%;\n\tfont-size: 22px;\n\tpadding: 10px;\n"]);return J=function(){return t},t}var P=n(16),q=s.a.div(J()),T=function(t){var e=Object(a.useState)([]),n=Object(y.a)(e,2),l=n[0],i=n[1],o=Object(a.useState)([]),c=Object(y.a)(o,2),u=c[0],s=c[1];return Object(a.useEffect)((function(){P({method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},url:"https://quotes.stormconsultancy.co.uk/random.json"}).then((function(t){i(t.data.quote),s(t.data.author)}))}),[]),0===l.length?null:(""===u&&s("Anonymous"),r.a.createElement(q,null,r.a.createElement("blockquote",null,l,r.a.createElement("footer",null,r.a.createElement("cite",null,u)))))};function D(){var t=Object(o.a)(["\n\tdisplay: flex;\n\twidth: 50%;\n"]);return D=function(){return t},t}function K(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tmargin-top: 5%;\n\talign-items: flex-start;\n\n\theight: 80vh;\n\twidth: 100%;\n"]);return K=function(){return t},t}n(16);var L=s.a.div(K()),R=s.a.div(D()),B=function(t){var e=Object(a.useState)([]),n=Object(y.a)(e,2),l=n[0],i=(n[1],Object(a.useState)([])),o=Object(y.a)(i,2),c=o[0];o[1];return Object(a.useEffect)((function(){}),[]),0===l.length?null:(""===c&&console.log("yes"),r.a.createElement(L,null,r.a.createElement(R,null,r.a.createElement(N,{name:"Kevin Niemeyer",subheading:"Developer / Musician / Human",top:"-3",left:"5",scale:"7"})),r.a.createElement(R,null,r.a.createElement(I,null)),r.a.createElement(R,null,r.a.createElement(T,null))))},U=(n(64),n(16)),V=n.n(U);function Y(){var t=Object(o.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n\twidth: 100%;\n\theight: auto;\n"]);return Y=function(){return t},t}var F=s.a.div(Y());var G=function(t){return Object(a.useEffect)((function(){V.a.get("https://api.github.com/users/yoloonthebattlefield?fbclid=IwAR2stMhMjngpObVKnSVLthIUb6J4oMsix7PmYw_T3kqkWDSuyyNaYvAGWUE",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){var e=t.data;console.log(e)}))}),[]),r.a.createElement(F,null,"Projects")};function $(){var t=Object(o.a)(["\n\twidth: 100vw;\n\t&:nth-of-type(even) {\n\t\ttext-align: left;\n\t}\n\t&:nth-of-type(odd) {\n\t\ttext-align: right;\n\t}\n"]);return $=function(){return t},t}function _(){var t=Object(o.a)(["\n\theight: 80vh;\n\twidth: 100vv;\n\tmax-width: 100vw;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return _=function(){return t},t}var Q=s.a.div(_()),X=s.a.div($());var Z=function(t){return r.a.createElement(Q,null,r.a.createElement(N,{left:"3",top:"3",scale:"3",name:"Projects"}),r.a.createElement(X,null,r.a.createElement(G,null)))};function tt(){var t=Object(o.a)(["\n\theight: 80vh;\n\twidth: 100%;\n\tposition: relative;\n\tdisplay: flex;\n"]);return tt=function(){return t},t}var et=s.a.div(tt());var nt=function(t){return r.a.createElement(et,null,r.a.createElement(N,{left:"3",top:"3",scale:"3",name:"About Me"}))};function at(){var t=Object(o.a)(["\n\theight: 80vh;\n\twidth: 100%;\n\tposition: relative;\n\tdisplay: flex;\n"]);return at=function(){return t},t}var rt=s.a.div(at());var lt=function(t){return r.a.createElement(rt,null)};function it(){var t=Object(o.a)(["\n\tposition: relative;\n\tbottom: 0;\n\tleft: 0;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\theight: 10vh;\n\tdisplay: flex;\n\tbackground-color: #252525;\n\tfont-size: 12px;\n\tcolor: lightgrey;\n"]);return it=function(){return t},t}var ot=s.a.div(it());var ct=function(t){return r.a.createElement(ot,null,"@Kevin Niemeyer 2020")};function ut(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 80vh;\n\twidth: 100%;\n\tposition: relative;\n\tdisplay: flex;\n"]);return ut=function(){return t},t}var st=s.a.div(ut());var ft=function(t){return console.log(t),r.a.createElement(st,null,r.a.createElement("h1",null,t.location.pathname," Page Not Found "))};function mt(){var t=Object(o.a)(["\n\tposition: relative;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\ttransition: all .3s;\n\tmax-height: 100vh;\n"]);return mt=function(){return t},t}var dt=s.a.div(mt());var pt=function(){return r.a.createElement(c.a,null,r.a.createElement(dt,null,r.a.createElement(b,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:B}),r.a.createElement(u.a,{exact:!0,path:"/home",component:B}),r.a.createElement(u.a,{exact:!0,path:"/portfolio",component:B}),r.a.createElement(u.a,{exact:!0,path:"/about",component:nt}),r.a.createElement(u.a,{exact:!0,path:"/projects",component:Z}),r.a.createElement(u.a,{exact:!0,path:"/contact",component:lt}),r.a.createElement(u.a,{path:"/",component:ft})),r.a.createElement(ct,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},8:function(t,e,n){}},[[35,1,2]]]);
//# sourceMappingURL=main.fc3f9115.chunk.js.map