(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__1sjDp",label:"ContactForm_label__2JjGw ContactForm_form__1sjDp",input:"ContactForm_input__3RQGW",button:"ContactForm_button__2lcJG ContactForm_input__3RQGW"}},,,,,function(t,e,n){t.exports={app:"App_app__3mWuc",title:"App_title__35tfG"}},,function(t,e,n){t.exports={item:"ContactListItem_item__23_K7",button:"ContactListItem_button__2Jf9B"}},function(t,e,n){t.exports={label:"Filter_label__1HMfY",input:"Filter_input__gU4h2"}},,,function(t,e,n){t.exports={list:"ContactList_list__1NuZf"}},,,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(20),n(14)),i=n(3),l=n(4),u=n(6),m=n(5),b=n(7),d=n.n(b),j=n(12),p=n(23),h=n(2),f=n.n(h),C=n(0),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){t.setState(Object(j.a)({},e.target.name,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(p.a)(),name:t.state.name,number:t.state.number},a=t.props.contactList.find((function(t){return t.name.toLowerCase()===n.name.toLowerCase()}));a?alert("".concat(a.name," is already in contacts")):t.props.addNewContact(n),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:f.a.form,children:[Object(C.jsxs)("label",{className:f.a.label,children:["Name",Object(C.jsx)("input",{className:f.a.input,onChange:this.handleChange,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(C.jsxs)("label",{className:f.a.label,children:["Number",Object(C.jsx)("input",{className:f.a.input,onChange:this.handleChange,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(C.jsx)("button",{type:"submit",className:f.a.button,children:"Add contact"})]})}}]),n}(a.Component),O=n(9),x=n.n(O);function N(t){var e=t.contacts,n=t.deleteContact;return Object(C.jsx)(C.Fragment,{children:e.map((function(t){return Object(C.jsxs)("li",{className:x.a.item,children:[t.name,": ",t.number,Object(C.jsx)("button",{className:x.a.button,onClick:n,"data-id":t.id,children:"X"})]},Object(p.a)())}))})}var v=n(13),g=n.n(v);function y(t){var e=t.contacts,n=t.deleteContact;return Object(C.jsx)("ul",{className:g.a.list,children:Object(C.jsx)(N,{contacts:e,deleteContact:n})})}var w=n(10),F=n.n(w);function A(t){var e=t.filterContactByName;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)("label",{className:F.a.label,children:["Find contact by name",Object(C.jsx)("input",{className:F.a.input,type:"text",onChange:e})]})})}var S=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[e])}}))},t.deleteContact=function(e){var n=e.target.dataset.id;t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==n}))}}))},t.filterContactByName=function(e){t.setState({filter:e.target.value.toLowerCase()})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter)}));return Object(C.jsxs)("div",{className:d.a.app,children:[Object(C.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(C.jsx)(_,{addNewContact:this.addNewContact,contactList:this.state.contacts}),Object(C.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(C.jsx)(A,{filterContactByName:this.filterContactByName}),Object(C.jsx)(y,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component),L=S;o.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(L,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.b3343f4a.chunk.js.map