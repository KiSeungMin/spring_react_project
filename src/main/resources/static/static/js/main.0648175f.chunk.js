(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},32:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(18),r=a.n(c),m=(a(30),a(32),a(0)),u=a(9),i=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},l.a.createElement("div",null,l.a.createElement(u.b,{to:"/"}," Board-FullStack-App")," "))))},o=a(4),s=a(6),E=a(7),d=a(43),b=new(function(){function e(){Object(s.a)(this,e)}return Object(E.a)(e,[{key:"getItem",value:function(e){return d.a.get("http://localhost:8080/api/item/"+e)}},{key:"getItems",value:function(){return d.a.get("http://localhost:8080/api/items")}},{key:"createItem",value:function(e){return d.a.post("http://localhost:8080/api/item",e)}}]),e}()),f=function(e){var t=Object(n.useState)({}),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)(function(){console.log("ItemComponent init"),console.log("itemId : "+e.itemId),b.getItem(e.itemId).then(function(e){r(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement("div",null,l.a.createElement("div",null,"id : ",c.id),l.a.createElement("br",null),l.a.createElement("div",null,"item_name : ",c.itemName," "),l.a.createElement("br",null),l.a.createElement("div",null,"item_category : ",c.category," "),l.a.createElement("br",null),l.a.createElement("div",null,"item_description : ",c.description," "),l.a.createElement("br",null),l.a.createElement("div",null,"item_memberName : ",c.memberName," "),l.a.createElement("br",null),l.a.createElement("div",null,"item_price : ",c.price,"\uc6d0 "),l.a.createElement("br",null),l.a.createElement("div",null,"item_createdTime : ",c.createdTime," "),l.a.createElement("br",null),l.a.createElement("div",null,"item_updatedTime : ",c.updatedTime," "),l.a.createElement("br",null))},p=function(){var e=Object(m.l)(),t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1];Object(n.useEffect)(function(){b.getItems().then(function(e){r(e.data)}).catch(function(e){return console.log(e)})},[]);return l.a.createElement("div",null,l.a.createElement("h2",{className:"text-center"},"Boards List"),l.a.createElement("div",{className:"row"},l.a.createElement("button",{className:"btn btn-primary",onClick:function(){e("/create-item")}},"\uc544\uc774\ud15c \ub4f1\ub85d")),l.a.createElement("div",{className:"row"},l.a.createElement("table",{className:"table table-striped table-bordered"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\uc0c1\ud488 \ubc88\ud638"),l.a.createElement("th",null,"\uc0c1\ud488 \uc774\ub984"),l.a.createElement("th",null,"\uce74\ud14c\uace0\ub9ac"),l.a.createElement("th",null,"\uc124\uba85 "),l.a.createElement("th",null,"\ud310\ub9e4\uc790 "),l.a.createElement("th",null,"\uac00\uaca9 "),l.a.createElement("th",null,"\ud310\ub9e4\uc2dc\uc791\uc77c\uc2dc"),l.a.createElement("th",null,"\ucd5c\uadfc\uc218\uc815\uc77c\uc2dc"))),l.a.createElement("tbody",null,c.map(function(t){return l.a.createElement("tr",{key:t.id,onClick:function(t){!function(t,a){a.preventDefault(),e("/item/"+t)}(1,t)}},l.a.createElement("td",null," ",t.id),l.a.createElement("td",null," ",t.itemName," "),l.a.createElement("td",null," ",t.category," "),l.a.createElement("td",null," ",t.description," "),l.a.createElement("td",null," ",t.memberName," "),l.a.createElement("td",null," ",t.price,"\uc6d0"),l.a.createElement("td",null," ",t.createdTime," "),l.a.createElement("td",null," ",t.updatedTime," "))})))))},v=function(){return l.a.createElement("div",null,l.a.createElement("footer",{className:"footer"},l.a.createElement("span",{className:"text-muted"})))},h=function(){var e=Object(m.l)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),s=i[0],E=i[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),N=g[0],O=g[1];return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"card col-md-6 offset-md-3 offset-md-3"},l.a.createElement("h3",{className:"text-center"},"\uc544\uc774\ud15c\uc744 \ub4f1\ub85d\ud574\uc8fc\uc138\uc694."),l.a.createElement("div",{className:"card-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," itemName "),l.a.createElement("input",{type:"text",placeholder:"itemName",name:"itemName",className:"form-control",value:c,onChange:function(e){r(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Title "),l.a.createElement("input",{type:"text",placeholder:"category",name:"category",className:"form-control",value:s,onChange:function(e){E(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," Contents  "),l.a.createElement("textarea",{placeholder:"description",name:"description",className:"form-control",value:p,onChange:function(e){v(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null," MemberNo  "),l.a.createElement("input",{placeholder:"price",name:"price",className:"form-control",value:N,onChange:function(e){O(e.target.value)}})),l.a.createElement("button",{className:"btn btn-success",onClick:function(t){t.preventDefault();var a={itemName:c,category:s,description:p,price:N};console.log("item => "+JSON.stringify(a)),b.createItem(a).then(function(t){e("/items")})}},"Save"),l.a.createElement("button",{className:"btn btn-danger",onClick:function(){e("/items")},style:{marginLeft:"10px"}},"Cancel")))))))},g=function(){return l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"{1}",element:l.a.createElement(f,{itemId:Number(1)})}))};var N=function(){return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement("div",{className:"container"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"item/*",element:l.a.createElement(g,null)}),l.a.createElement(m.a,{path:"items",element:l.a.createElement(p,null)}),l.a.createElement(m.a,{path:"create-item",element:l.a.createElement(h,null)}))),l.a.createElement(v,null))},O=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,42)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),c(e),r(e)})};a(38);r.a.createRoot(document.getElementById("root")).render(l.a.createElement(u.a,null,l.a.createElement(N,null))),O()}},[[21,3,2]]]);
//# sourceMappingURL=main.0648175f.chunk.js.map