(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),l=n.n(r),u=(n(31),n(20)),o=n(0),i=n(5),m=n(39);var p=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){m.a.get("/api/members").then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]),c.a.createElement("div",null,"members : ",n)};var s=function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/members/new"},"\uba64\ubc84 \uc0dd\uc131"),c.a.createElement(o.a,{path:"/members"},"\uba64\ubc84 \ubaa9\ub85d"),c.a.createElement(o.a,{path:"/api/hello"},"api \ud14c\uc2a4\ud2b8"),c.a.createElement(o.a,{path:"/api/member",element:c.a.createElement(p,null)},"api \uba64\ubc84 \ubaa9\ub85d"))))},f=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,38)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s,null))),f()}},[[22,3,2]]]);
//# sourceMappingURL=main.0fc44330.chunk.js.map