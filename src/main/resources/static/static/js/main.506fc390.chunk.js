(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(18),l=n.n(c),o=(n(31),n(17)),u=n(0),m=n(5),i=n(39);var s=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)(function(){console.log("hello!!!"),i.a.get("/api/members").then(function(e){return c(e.data)}).catch(function(e){return console.log(e)})},[]),r.a.createElement("div",null,"members : ",n)};var f=function(){return r.a.createElement("div",null,r.a.createElement(o.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/members/new"}),r.a.createElement(u.a,{path:"/members"}),r.a.createElement(u.a,{path:"/api/hello"}),r.a.createElement(u.a,{path:"/api/member",element:r.a.createElement(s,null)}))),r.a.createElement("a",{href:"/api/member"},"\ub9c1\ud06c"))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,38)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),a(e),r(e),c(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(f,null)),p()}},[[22,3,2]]]);
//# sourceMappingURL=main.506fc390.chunk.js.map