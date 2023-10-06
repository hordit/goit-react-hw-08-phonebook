"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[490],{6727:function(e,n,r){r.d(n,{$7:function(){return v},Pj:function(){return h},Pl:function(){return g},yM:function(){return x},yV:function(){return f}});var a,t,i,s,l,o=r(168),c=r(7870),u=r(6747),d=r(3736),m=r(1087),p=r(8789),f=p.ZP.form(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),x=(0,p.ZP)(c.Z)(t||(t=(0,o.Z)(["\n  & .MuiOutlinedInput-notchedOutline {\n    border-color: #3e7ca9;\n  }\n  &::placeholder {\n    color: #3e7ca9;\n  }\n"]))),h=(0,p.ZP)(u.Z)(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n"]))),g=(0,p.ZP)(d.Z)(s||(s=(0,o.Z)(["\n   && {\n    color: #3e7ca9;\n    background-color: transparent;\n    box-shadow: 1px 1px 8px rgba(62, 124, 169);\n    transition: background-color 0.3s, color 0.3s;\n\n    &:hover {\n      color: #01191f;\n      background-color: #3e7ca9;\n    }\n  }\n"]))),v=(0,p.ZP)(m.OL)(l||(l=(0,o.Z)(["\n  color: #3e7ca9;\n  text-decoration: underline;\n  padding: 5px;\n\n  &:hover {\n    color: #01191f;\n  }\n"])))},4490:function(e,n,r){r.r(n),r.d(n,{default:function(){return Z}});var a,t,i=r(4165),s=r(5861),l=(r(2791),r(9434)),o=r(6323),c=r(6727),u=r(5985),d=r(5401),m=r(1243),p=r(184),f=function(){var e=(0,l.I0)(),n=d.Ry().shape({name:d.Z_().required("Name is required"),email:d.Z_().email("Invalid email address").required("Email is required"),password:d.Z_().matches(/^(?=.*[a-zA-Z].*[a-zA-Z])(?=.*\d).{6,}$/,"Password must contain at least 6 characters, including 2 letters").required("Password is required")}),r=function(){var r=(0,s.Z)((0,i.Z)().mark((function r(a){var t,s,l;return(0,i.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.preventDefault(),t=a.currentTarget,r.prev=2,r.next=5,n.validate({name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value});case 5:return r.next=7,m.Z.get("/users?email=".concat(t.elements.email.value));case 7:if(200!==r.sent.status){r.next=11;break}return u.Am.error("Email already exists"),r.abrupt("return");case 11:return s={name:t.elements.name.value,email:t.elements.email.value,password:t.elements.password.value},r.next=14,e((0,o.register)(s));case 14:l=r.sent,o.register.fulfilled.match(l)?(u.Am.success("Registration successful"),t.reset()):u.Am.error("Registration failed"),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(2),u.Am.error("Email already exists");case 21:case"end":return r.stop()}}),r,null,[[2,18]])})));return function(e){return r.apply(this,arguments)}}();return(0,p.jsxs)(c.yV,{onSubmit:r,autoComplete:"off",children:[(0,p.jsx)(c.yM,{label:"Username",name:"name",variant:"outlined",size:"small",fullWidth:!0,margin:"normal"}),(0,p.jsx)(c.yM,{label:"Email",name:"email",variant:"outlined",size:"small",fullWidth:!0,margin:"normal"}),(0,p.jsx)(c.yM,{label:"Password",name:"password",type:"password",variant:"outlined",size:"small",fullWidth:!0,margin:"normal"}),(0,p.jsx)(c.Pj,{children:(0,p.jsx)(c.Pl,{type:"submit",variant:"contained",color:"primary",children:"Register"})})]})},x=r(168),h=r(8789),g=r(1942),v=h.ZP.main(a||(a=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),g),b=h.ZP.div(t||(t=(0,x.Z)(["\n  max-width: 400px;\n  padding: 20px;\n  border: 1px solid #3e7ca9;\n  border-radius: 4px;\n  background-color: #fefefe29;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);\n"]))),Z=function(){return(0,p.jsx)(v,{children:(0,p.jsxs)(b,{children:[(0,p.jsx)("h2",{children:"Registration"}),(0,p.jsx)(f,{}),(0,p.jsxs)("p",{children:["Have you already signed up?",(0,p.jsx)(c.$7,{to:"/login",children:"Sign in"})]})]})})}},1942:function(e,n,r){e.exports=r.p+"static/media/background.313f628454b190901595.jpg"}}]);
//# sourceMappingURL=490.1fe287a0.chunk.js.map