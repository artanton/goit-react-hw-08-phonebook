"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[850],{9850:function(n,e,r){r.r(e),r.d(e,{default:function(){return O}});var t,o,i,a,s,c,d,l,u,m,h=r(5705),x=r(8007),f=r(168),p=r(2978),b=(0,p.ZP)(h.l0)(t||(t=(0,f.Z)(["\n  width: 400px;\n  margin-bottom: 40px;\n  border: 1px solid ",";\n  border-radius: ",";\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);\n\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n"])),(function(n){return n.theme.colors.borderGray}),(function(n){return n.theme.borderRad.norm}),(function(n){return n.theme.padding.big})),g=p.ZP.label(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: ",";\n  height: 70px;\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.gap.small})),j=(0,p.ZP)(h.Bc)(i||(i=(0,f.Z)(["\n  padding: 0;\n  color: red;\n  font-size: 12px;\n"]))),v=(0,p.ZP)(h.gN)(a||(a=(0,f.Z)(["\n  width: 300px;\n  border: 1px solid ",";\n  border-radius: ",";\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);\n"])),(function(n){return n.theme.colors.borderGray}),(function(n){return n.theme.borderRad.small})),y=p.ZP.button(s||(s=(0,f.Z)(["\n  width: 150px;\n  border: 1px solid ",";\n  border-radius: ",";\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])),(function(n){return n.theme.colors.borderGray}),(function(n){return n.theme.borderRad.small})),Z=r(4420),w=r(2414),P=r(1686),k=r.n(P),C=r(3553),R=function(n){return n.cont.contacts},q=function(n){return n.filt.filter},z=function(n){return n.cont.isLoading},G=function(n){return n.cont.error},I=(0,C.P1)([R,q],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),S=r(184),_=x.Ry().shape({name:x.Z_().matches(/^[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/,"Insert Name and Surname please").required("Required"),number:x.Z_().matches(/^\d{7}$/,"Please enter 7 digits").required("Required")}),N=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(R);return(0,S.jsx)(h.J9,{initialValues:{name:"",number:""},validationSchema:_,onSubmit:function(r,t){e.some((function(n){return n.name===r.name}))?k().Notify.failure(" ".concat(r.name," is already in the phonebook")):(n((0,w.uK)(r)),t.resetForm())},children:(0,S.jsxs)(b,{children:[(0,S.jsxs)(g,{children:["Name",(0,S.jsx)(v,{name:"name",type:"string",placeholder:"John Smith"}),(0,S.jsx)(j,{name:"name",component:"span"})]}),(0,S.jsxs)(g,{children:["Phone Number",(0,S.jsx)(v,{name:"number",type:"string",placeholder:"1234567"}),(0,S.jsx)(j,{name:"number",component:"span"})]}),(0,S.jsx)(y,{type:"submit",children:"Add Contact"})]})})},L=r(8787),A=p.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n\n  justify-content: space-between;\n"]))),F=p.ZP.button(d||(d=(0,f.Z)(["\n  background-color: transparent;\n\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  &:hover {\n    transform: rotate(180deg);\n    transition: transform 0.5s ease;\n  }\n"]))),J=p.ZP.span(l||(l=(0,f.Z)(["\n  color: red;\n"]))),K=r(4029),$=function(n){var e=n.contact,r=e.name,t=e.number,o=(0,Z.I0)(),i=function(){var n=t.toString();return n.slice(0,3)+"-"+n.slice(3,5)+"-"+n.slice(5,n.length)}();return(0,S.jsxs)(A,{children:[(0,S.jsxs)("p",{children:[r,": ",i]}),(0,S.jsx)(F,{onClick:function(){return o((0,w.GK)(e.id))},children:(0,S.jsx)(J,{children:(0,S.jsx)(K.q5L,{size:"25"})})})]})},B=p.ZP.ul(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: ",";\n"])),(function(n){return n.theme.gap.big})),D=function(){var n=(0,Z.v9)(I);return(0,S.jsx)(B,{children:n.map((function(n){return(0,S.jsx)("li",{children:(0,S.jsx)($,{contact:n})},n.id)}))})},E=p.ZP.input(m||(m=(0,f.Z)(["\n  width: 200px;\n  border: 1px solid ",";\n  border-radius: ",";\n  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);\n\n  font-size: 16px;\n  padding: ",";\n  margin-bottom: 20px;\n"])),(function(n){return n.theme.colors.borderGray}),(function(n){return n.theme.borderRad.small}),(function(n){return n.theme.padding.small})),V=r(1592),Y=function(){var n=(0,Z.I0)(),e=(0,Z.v9)(q);return(0,S.jsx)(E,{type:"text",value:e,onChange:function(e){return n((0,V.G)(e.target.value))}})},H=r(2791),M=r(4270);function O(){var n=(0,Z.v9)(I),e=(0,Z.v9)(R),r=(0,Z.I0)(),t=(0,Z.v9)(z),o=(0,Z.v9)(G);return(0,H.useEffect)((function(){r((0,w.yF)())}),[r]),(0,S.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",fontSize:20,color:"#010101"},children:[(0,S.jsxs)("div",{children:[(0,S.jsx)(M.q,{children:(0,S.jsx)("title",{children:"Your contacts"})}),(0,S.jsx)("h1",{children:"Phonebook"}),(0,S.jsx)(N,{}),(0,S.jsx)("h2",{children:"Contacts"}),t&&!o&&(0,S.jsx)("b",{children:"Request in progress..."}),e.length>0&&(0,S.jsxs)("div",{children:[(0,S.jsx)("p",{children:"Find contacts by name"}),(0,S.jsx)(Y,{})]}),n.length>0&&(0,S.jsx)("div",{children:(0,S.jsx)(D,{})})]}),(0,S.jsx)(L.Z,{})]})}}}]);
//# sourceMappingURL=850.7e7b9158.chunk.js.map