"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[49],{6727:function(n,e,r){r.d(e,{$7:function(){return g},Pj:function(){return f},Pl:function(){return b},yM:function(){return h},yV:function(){return m}});var t,o,i,a,c,l=r(168),s=r(7870),d=r(6747),u=r(3736),p=r(1087),x=r(8789),m=x.ZP.form(t||(t=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),h=(0,x.ZP)(s.Z)(o||(o=(0,l.Z)(["\n  & .MuiOutlinedInput-notchedOutline {\n    border-color: #3e7ca9;\n  }\n  &::placeholder {\n    color: #3e7ca9;\n  }\n"]))),f=(0,x.ZP)(d.Z)(i||(i=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n"]))),b=(0,x.ZP)(u.Z)(a||(a=(0,l.Z)(["\n   && {\n    color: #3e7ca9;\n    background-color: transparent;\n    box-shadow: 1px 1px 8px rgba(62, 124, 169);\n    transition: background-color 0.3s, color 0.3s;\n\n    &:hover {\n      color: #01191f;\n      background-color: #3e7ca9;\n    }\n  }\n"]))),g=(0,x.ZP)(p.OL)(c||(c=(0,l.Z)(["\n  color: #3e7ca9;\n  text-decoration: underline;\n  padding: 5px;\n\n  &:hover {\n    color: #01191f;\n  }\n"])))},6532:function(n,e,r){r.r(e),r.d(e,{default:function(){return pn}});var t,o,i,a,c,l,s,d,u,p,x,m,h,f,b,g,Z=r(2506),j=r(168),v=r(8789),P=(0,v.ZP)(Z.l0)(t||(t=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),k=v.ZP.label(o||(o=(0,j.Z)(["\n  display: block;\n  margin-bottom: 20px;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),w=(0,v.ZP)(Z.gN)(i||(i=(0,j.Z)(["\n  width: 100%;\n  padding: 8px;\n  margin-top: 3px;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  outline: none;\n  background-color: transparent;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.activeNavLink})),y=(0,v.ZP)(Z.Bc)(a||(a=(0,j.Z)(["\n  color: red;\n"]))),C=r(9434),z=r(6916),L=function(n){return n.contacts.items},A=function(n){return n.contacts.filter},N=function(n){return n.contacts.isLoading},F=function(n){return n.contacts.error},I=(0,z.P1)([L,A],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),S=r(5162),_=function(n){return"string"!==typeof n?"":n.split(" ").map((function(n){return n.charAt(0).toUpperCase()+n.slice(1)})).join(" ")},B=r(6727),M=r(1413),O=r(5987),q=r(2791),J=r(7630),K=r(3736),T=r(184),V=["children"],$=(0,J.ZP)(K.Z)((function(){return{boxShadow:"0px 0px 8px 2px rgba(235, 241, 241, 0.7), 0px 0px 8px 2px rgba(209, 216, 216, 0.7)",color:"#fff",borderRadius:"4px",padding:"5px 20px","&:hover":{boxShadow:"0px 0px 8px 2px rgba(235, 241, 241, 0.7), 0px 0px 8px 2px rgba(209, 216, 216, 0.7)",backgroundColor:"#032c4b"}}})),D=function(n){var e=n.children,r=(0,O.Z)(n,V);return(0,T.jsx)($,(0,M.Z)((0,M.Z)({},r),{},{children:e}))},E=function(){var n=(0,C.I0)(),e=(0,C.v9)(L);return(0,T.jsx)(Z.J9,{initialValues:{name:"",number:""},onSubmit:function(r,t){var o=t.resetForm,i={name:r.name,number:r.number};if(e.find((function(n){return n.name.toLowerCase()===i.name.toLowerCase()})))return alert("".concat(_(i.name)," is already in contacts")),o();n((0,S.uK)({name:_(i.name),number:i.number})),o()},children:(0,T.jsxs)(P,{children:[(0,T.jsxs)(k,{children:["Name",(0,T.jsx)(w,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,T.jsx)(y,{name:"name",component:"div"}),(0,T.jsxs)(k,{children:["Number",(0,T.jsx)(w,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,T.jsx)(y,{name:"number",component:"div"}),(0,T.jsx)(B.Pj,{children:(0,T.jsx)(D,{type:"submit",children:"Add contact"})})]})})},G=v.ZP.div(c||(c=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n"]))),R=v.ZP.p(l||(l=(0,j.Z)(["\n  padding-right: 15px;\n"]))),U=v.ZP.button(s||(s=(0,j.Z)(["\n  color: ",";\n  background-color: transparent;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n"])),(function(n){return n.theme.colors.white})),Y=r(7247),H=function(n){var e=n.id,r=n.name,t=n.number,o=(0,C.I0)();return(0,T.jsxs)(G,{children:[(0,T.jsxs)(R,{children:[r,": ",t]}),(0,T.jsx)(U,{"aria-label":"Delete",onClick:function(){return o((0,S.GK)(e))},disableBackground:!0,children:(0,T.jsx)(Y.Z,{fontSize:"small"})})]})},Q=v.ZP.ul(d||(d=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  padding: 10px;\n"]))),W=v.ZP.li(u||(u=(0,j.Z)(["\n  padding-bottom: 5px;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),X=function(){var n=(0,C.v9)(I),e=(0,C.v9)(F);return(0,T.jsxs)(T.Fragment,{children:[e&&(0,T.jsx)("div",{children:e}),(0,T.jsx)(Q,{children:n.map((function(n){return(0,T.jsx)(W,{children:(0,T.jsx)(H,{id:n.id,name:n.name,number:n.number})},n.id)}))})]})},nn=v.ZP.div(p||(p=(0,j.Z)([""]))),en=v.ZP.label(x||(x=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.white})),rn=v.ZP.input(m||(m=(0,j.Z)(["\n  width: 100%;\n  padding: 8px;\n  margin-top: 3px;\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n  outline: none;\n  background-color: transparent;\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.activeNavLink})),tn=r(6748),on=function(){var n=(0,C.I0)(),e=(0,C.v9)(A);return(0,T.jsx)(nn,{children:(0,T.jsxs)(en,{children:["Fined contacts by name",(0,T.jsx)(rn,{type:"text",value:e,onChange:function(e){n((0,tn.T)(e.currentTarget.value))}})]})})},an=r.p+"static/media/backgroundPhonebook.e2292c4b8fc1ae26e6eb.jpg",cn=r(6747),ln=(0,v.ZP)(cn.Z)(h||(h=(0,j.Z)(["\n  display: flex;\n  justify-content: space-evenly;\n  background: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 100vh;\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n  }\n"])),an),sn=v.ZP.section(f||(f=(0,j.Z)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 16px;\n  max-width: 400px;\n  background-color: transparent;\n  border-radius: 4px;\n  margin: 0 8px;\n\n  &:first-child {\n    margin-left: 0;\n    align-items: center;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  @media (max-width: 640px) {\n    margin: 8px 0;\n\n    &:first-child {\n      margin-top: 0;\n    }\n\n    &:last-child {\n      margin-bottom: 0;\n      align-items: center;\n    }\n  }\n"]))),dn=(v.ZP.h2(b||(b=(0,j.Z)(["\n  font-size: 20px;\n  margin-bottom: 16px;\n"]))),v.ZP.h1(g||(g=(0,j.Z)(["\n  font-size: 24px;\n  margin: 20px auto;\n  color: white;\n"])))),un=r(7060),pn=function(){var n=(0,C.I0)(),e=(0,C.v9)(N);return(0,q.useEffect)((function(){n((0,S.yF)())}),[n]),(0,T.jsx)("div",{children:(0,T.jsxs)(ln,{children:[(0,T.jsxs)(sn,{title:"Phonebook",children:[(0,T.jsx)(dn,{children:"Your phonebook"}),(0,T.jsx)(E,{})]}),(0,T.jsxs)(sn,{title:"Contacts",children:[(0,T.jsx)(dn,{children:"Contacts"}),(0,T.jsx)(on,{}),e&&(0,T.jsx)(un.Z,{color:"#fff",size:80}),(0,T.jsx)(X,{})]})]})})}}}]);
//# sourceMappingURL=49.923e33b2.chunk.js.map