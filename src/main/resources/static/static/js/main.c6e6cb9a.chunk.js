(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),l=n.n(r),u=(n(31),n(0)),o=n(5),m=n(39);var i=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){m.a.get("/api/members").then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]),c.a.createElement("div",null,"members : ",n)};var s=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u.b,null,c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/members/new"}),c.a.createElement(u.a,{path:"/members"}),c.a.createElement(u.a,{path:"/api/hello"}),c.a.createElement(u.a,{path:"/api/members",element:c.a.createElement(i,null)}))))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,38)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})},E=n(17);l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E.a,null,c.a.createElement(s,null)))),p()}},[[22,3,2]]]);
//# sourceMappingURL=main.c6e6cb9a.chunk.js.map