(this["webpackJsonpemployee-finder"]=this["webpackJsonpemployee-finder"]||[]).push([[0],{31:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(20),s=n.n(a),i=n(21),l=n(22),h=n(23),j=n(26),o=n(25),d=n(56),b=n(57),u=(n(31),n(1));var x=function(){return Object(u.jsx)(d.a,{fluid:!0,className:"bg-dark bottomLine",children:Object(u.jsxs)(b.a,{className:"text-center text-monospace text-white",children:[Object(u.jsx)("h1",{children:"Employee Finder"}),Object(u.jsx)("h5",{className:"text-warning",children:"Welcome, Big Brother. Who are you looking for today?"}),Object(u.jsx)("small",{children:"Unfortunately, the search feature is currently inoperable. Please try again later."})]})})},O=n(59);var m=function(e){return Object(u.jsx)(b.a,{className:"align-items-center",children:Object(u.jsx)(O.a.Row,{className:"justify-content-center",children:Object(u.jsxs)(O.a.Group,{controlId:"searchField",style:{width:"60%"},children:[Object(u.jsx)(O.a.Label,{className:"text-white",children:"Search by Name:"}),Object(u.jsx)(O.a.Control,{type:"text",onChange:e.inputChange,value:e.value,placeholder:"Enter search terms here",className:"bg-dark border-warning text-white"})]})})})},p=n(58);var f=function(e){return Object(u.jsx)(b.a,{children:Object(u.jsxs)(p.a,{striped:!0,bordered:!0,hover:!0,variant:"dark",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Picture"}),Object(u.jsx)("th",{children:"Last Name"}),Object(u.jsx)("th",{children:"First Name"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"E-Mail"}),Object(u.jsx)("th",{children:"DOB"})]})}),Object(u.jsx)("tbody",{children:e.employees.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("img",{alt:"thumbnail",className:"img-fluid",src:e.picture.thumbnail})}),Object(u.jsx)("td",{children:e.name.last}),Object(u.jsx)("td",{children:e.name.first}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:new Date(e.dob.date).toLocaleDateString()})]},t)}))})]})})},g=n(24),y=n.n(g),v={search:function(){return y.a.get("https://randomuser.me/api/?results=50")}},N=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={search:"",searchResults:[]},e.inputChange=function(t){var n=t.target.value,c=t.target.name;e.setState(Object(i.a)({},c,n))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.search().then((function(t){console.log(t),e.setState({searchResults:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"bg-secondary",children:[Object(u.jsx)(x,{}),Object(u.jsx)(m,{}),Object(u.jsx)(f,{employees:this.state.searchResults,onchange:this.inputChange})]})}}]),n}(c.Component);var w=function(){return Object(u.jsx)(N,{})};n(54);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.27d9d5d7.chunk.js.map