(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(41)},31:function(e,t,a){},33:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(19),r=a.n(c),o=(a(31),a(33),a(0)),m=a(4),u=a(43),s=a(6),i=a(7),d=a(11),E=a(9),b=a(10),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},l.a.createElement("div",null,l.a.createElement("a",{href:"/Users/ksm/\ud504\ub85c\uadf8\ub798\ubc0d/SpringProject/Springpractice(20221127)/src/main/frontend/public",className:"navbar-brand"}," Board-FullStack-App")," "))))}}]),t}(n.Component),p=new(function(){function e(){Object(s.a)(this,e)}return Object(i.a)(e,[{key:"getBoards",value:function(){return u.a.get("http://localhost:8080/api/board")}},{key:"createBoard",value:function(e){return u.a.post("http://localhost:8080/api/board",e)}}]),e}()),v=function(){var e=Object(o.l)(),t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)(function(){p.getBoards().then(function(e){r(e.data)}).catch(function(e){return console.log(e)})},[]);return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"Boards List"),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e("/create-board")}},"\uae00 \uc791\uc131")),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uae00 \ubc88\ud638"),l.a.createElement("th",null,"\ud0c0\uc774\ud2c0 "),l.a.createElement("th",null,"\uc791\uc131\uc790 "),l.a.createElement("th",null,"\uc791\uc131\uc77c "),l.a.createElement("th",null,"\uac31\uc2e0\uc77c "),l.a.createElement("th",null,"\uc88b\uc544\uc694\uc218"),l.a.createElement("th",null,"\uc870\ud68c\uc218"))),l.a.createElement("tbody",null,c.map(function(e){return l.a.createElement("tr",{key:e.no},l.a.createElement("td",null," ",e.no," "),l.a.createElement("td",null," ",e.title," "),l.a.createElement("td",null," ",e.memberNo," "),l.a.createElement("td",null," ",e.createdTime," "),l.a.createElement("td",null," ",e.updatedTime," "),l.a.createElement("td",null," ",e.likes," "),l.a.createElement("td",null," ",e.counts," "))})))))},h=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).state={},a}return Object(b.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"text-muted"})))}}]),t}(n.Component),N=function(){var e=Object(o.l)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),s=Object(m.a)(u,2),i=s[0],d=s[1],E=Object(n.useState)(""),b=Object(m.a)(E,2),f=b[0],v=b[1],h=Object(n.useState)(""),N=Object(m.a)(h,2),g=N[0],j=N[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},l.a.createElement("h3",{className:"text-center"},"\uc0c8\uae00\uc744 \uc791\uc131\ud574\uc8fc\uc138\uc694"),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Type "),l.a.createElement("select",{placeholder:"type",name:"type",className:"form-control",value:c,onChange:function(e){r(e.target.value)}},l.a.createElement("option",{value:"1"},"\uc790\uc720\uac8c\uc2dc\ud310"),l.a.createElement("option",{value:"2"},"\uc9c8\ubb38\uacfc \ub2f5\ubcc0"))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Title "),l.a.createElement("input",{type:"text",placeholder:"title",name:"title",className:"form-control",value:i,onChange:function(e){d(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Contents  "),l.a.createElement("textarea",{placeholder:"contents",name:"contents",className:"form-control",value:f,onChange:function(e){v(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," MemberNo  "),l.a.createElement("input",{placeholder:"memberNo",name:"memberNo",className:"form-control",value:g,onChange:function(e){j(e.target.value)}})),l.a.createElement("button",{className:"btn btn-success",onClick:function(t){t.preventDefault();var a={type:c,title:i,contents:f,memberNo:g};console.log("board => "+JSON.stringify(a)),p.createBoard(a).then(function(t){e("/board")})}},"Save"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){e("/board")},style:{marginLeft:"10px"}},"Cancel")))))))};var g=function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{className:"container"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(v,null)}),l.a.createElement(o.a,{path:"board",element:l.a.createElement(v,null)}),l.a.createElement(o.a,{path:"create-board",element:l.a.createElement(N,null)}))),l.a.createElement(h,null))},j=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,42)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})},O=(a(39),a(14));r.a.createRoot(document.getElementById("root")).render(l.a.createElement(O.a,null,l.a.createElement(g,null))),j()}},[[22,3,2]]]);
//# sourceMappingURL=main.c02934d0.chunk.js.map