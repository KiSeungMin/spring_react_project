(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(37)},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(18),l=n.n(r),u=(n(31),n(17)),o=n(0),m=n(5),i=n(39);var s=function(){var e=Object(a.useState)(null),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){i.a.get("/api/members").then(function(e){return r(e.data)}).catch(function(e){return console.log(e)})},[]),c.a.createElement("div",null,"members : ",n)};var f=function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/members/new"}),c.a.createElement(o.a,{path:"/members"}),c.a.createElement(o.a,{path:"/api/hello"}),c.a.createElement(o.a,{path:"/api/member",element:c.a.createElement(s,null)}))))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,38)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(f,null)),p()}},[[22,3,2]]]);
//# sourceMappingURL=main.f4977bfe.chunk.js.map