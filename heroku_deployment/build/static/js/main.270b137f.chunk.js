(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),r=n.n(a),o=(n(11),n(2)),s=n.n(o),i=n(3),l=n(4),d=n(0),u=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(i.a)(s.a.mark((function t(e){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,c={description:n},console.log("Body",c),t.next=6,fetch("http://localhost:3000/todo",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 6:window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-center mt-5",children:"input field"}),Object(d.jsxs)("form",{className:"d-flex mt-5",onSubmit:r,children:[Object(d.jsx)("input",{type:"text",className:"form-control",value:n,onChange:function(t){return a(t.target.value)}}),Object(d.jsx)("button",{className:"btn btn-success",children:"Add"})]})]})},j=function(t){var e=t.todo,n=Object(c.useState)(e.description),a=Object(l.a)(n,2),r=a[0],o=a[1],u=function(t){o(t)},j=function(){var t=Object(i.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,c={description:r},t.next=5,fetch("http://localhost:3000/todo/".concat(e.todo_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("button",{type:"button",className:"btn btn-warning btn-lg","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"Edit"}),Object(d.jsx)("div",{id:"id".concat(e.todo_id),className:"modal fade",role:"dialog",children:Object(d.jsx)("div",{className:"modal-dialog",onChange:function(t){return u(t.target.value)},children:Object(d.jsxs)("div",{className:"modal-content",children:[Object(d.jsx)("div",{className:"modal-header",children:Object(d.jsx)("h4",{className:"modal-title",children:"Edit Todo"})}),Object(d.jsx)("div",{className:"modal-body",children:Object(d.jsx)("input",{type:"text",className:"form-control",value:r,onChange:function(t){return u(t.target.value)}})}),Object(d.jsxs)("div",{className:"modal-footer",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(t){return j(t)},children:"Edit"}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return o(e.description)},children:"Close"})]})]})})})]})},b=function(){var t=Object(c.useState)([]),e=Object(l.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/todo");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,a(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(i.a)(s.a.mark((function t(e){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/todo/".concat(e),{method:"DELETE"});case 3:c=t.sent,console.log("Deleted",c),r=n.filter((function(t){return t.todo_id!==e})),a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(d.jsxs)("table",{className:"table table-hover mt-5",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Edit"}),Object(d.jsx)("th",{children:"Delete"})]})}),Object(d.jsx)("tbody",{children:n.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.description}),Object(d.jsx)("td",{children:Object(d.jsx)(j,{todo:t})}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return o(t.todo_id)},className:"btn btn-danger",children:"Delete"})})]},t.todo_id)}))})]})},h=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(u,{}),Object(d.jsx)(b,{})]})};r.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.270b137f.chunk.js.map