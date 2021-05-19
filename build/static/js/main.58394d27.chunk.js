(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{11:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(6),r=n.n(a),o=(n(11),n(2)),s=n.n(o),i=n(3),d=n(4),l=n(0),u=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(i.a)(s.a.mark((function t(e){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,c={description:n},console.log("Body",c),t.next=6,fetch("".concat("/todo"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 6:window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"text-center mt-5",children:"ToDo App"}),Object(l.jsxs)("form",{className:"d-flex mt-5",onSubmit:r,children:[Object(l.jsx)("input",{type:"text",id:"newTodo",className:"form-control",value:n,onChange:function(t){return a(t.target.value)}}),Object(l.jsx)("button",{id:"createTodo",className:"btn btn-success",children:"Add"})]})]})},j=function(t){var e=t.todo,n=Object(c.useState)(e.description),a=Object(d.a)(n,2),r=a[0],o=a[1],u=function(t){o(t)},j=function(){var t=Object(i.a)(s.a.mark((function t(n){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,c={description:r},t.next=5,fetch("".concat("/todo","/").concat(e.todo_id),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 5:t.sent,window.location="/",t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{type:"button",className:"btn btn-warning btn-lg","data-toggle":"modal","data-target":"#id".concat(e.todo_id),children:"Edit"}),Object(l.jsx)("div",{id:"id".concat(e.todo_id),className:"modal fade",role:"dialog",children:Object(l.jsx)("div",{className:"modal-dialog",onChange:function(t){return u(t.target.value)},children:Object(l.jsxs)("div",{className:"modal-content",children:[Object(l.jsx)("div",{className:"modal-header",children:Object(l.jsx)("h4",{className:"modal-title",children:"Edit Todo"})}),Object(l.jsx)("div",{className:"modal-body",children:Object(l.jsx)("input",{type:"text",className:"form-control",value:r,onChange:function(t){return u(t.target.value)}})}),Object(l.jsxs)("div",{className:"modal-footer",children:[Object(l.jsx)("button",{type:"button",className:"btn btn-warning","data-dismiss":"modal",onClick:function(t){return j(t)},children:"Edit"}),Object(l.jsx)("button",{type:"button",className:"btn btn-danger","data-dismiss":"modal",onClick:function(){return o(e.description)},children:"Close"})]})]})})})]})},b="/todo",h=function(){var t=Object(c.useState)([]),e=Object(d.a)(t,2),n=e[0],a=e[1],r=function(){var t=Object(i.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(b));case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,a(n),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(i.a)(s.a.mark((function t(e){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(b,"/").concat(e),{method:"DELETE"});case 3:c=t.sent,console.log("Deleted",c),r=n.filter((function(t){return t.todo_id!==e})),a(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){r()}),[]),Object(l.jsxs)("table",{className:"table table-hover mt-5",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Description"}),Object(l.jsx)("th",{children:"Edit"}),Object(l.jsx)("th",{children:"Delete"})]})}),Object(l.jsx)("tbody",{children:n.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t.description}),Object(l.jsx)("td",{children:Object(l.jsx)(j,{todo:t})}),Object(l.jsx)("td",{children:Object(l.jsx)("button",{id:"deleteTodo",onClick:function(){return o(t.todo_id)},className:"btn btn-danger",children:"Delete"})})]},t.todo_id)}))})]})},p=function(){return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{}),Object(l.jsx)(h,{})]})};r.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.58394d27.chunk.js.map