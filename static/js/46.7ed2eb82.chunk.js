"use strict";(self.webpackChunkmy_crm_app=self.webpackChunkmy_crm_app||[]).push([[46],{9046:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(1413),a=n(4942),u=n(9439),o=n(4539),c=n(2791),s=n(5689),i=n(1087),p=n(5063),l=n(7689),m=n(5804),d=n(5218),f=n(184),h=function(){var e=(0,c.useState)({email:"",password:""}),r=(0,u.Z)(e,2),n=r[0],h=r[1],x=(0,l.s0)(),w=function(e){var r=(0,a.Z)({},e.target.name,e.target.value);h((0,t.Z)((0,t.Z)({},n),r))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("h1",{children:"Create your account"}),(0,f.jsxs)(o.Form,{onSubmit:function(e){e.preventDefault();var r=n.email,t=n.password;(0,s.Xb)(p.I8,r,t).then((function(e){console.log(e.user),(0,m.QK)(r,{email:r,password:t}),x("/users"),d.Am.success("Welcome to your CRM")})).catch((function(e){"Firebase: Error (auth/email-already-in-use)."===e.message&&d.Am.error("You already have an account, go to link below")}))},children:[(0,f.jsxs)(o.Form.Group,{children:[(0,f.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),(0,f.jsx)(o.Form.Input,{onChange:w,name:"email",type:"email",id:"exampleInputEmail1",placeholder:"Enter email",lg:!0})]}),(0,f.jsxs)(o.Form.Group,{children:[(0,f.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),(0,f.jsx)(o.Form.Input,{onChange:w,name:"password",type:"password",id:"exampleInputPassword1",placeholder:"Password",lg:!0})]}),(0,f.jsx)(o.Button,{primary:!0,type:"submit",children:"Sign Up"}),(0,f.jsxs)(o.Form.Text,{children:["Already have an account? ",(0,f.jsx)(i.rU,{to:"/sign-in-with-email",children:"Click here"})]})]})]})}},5063:function(e,r,n){n.d(r,{I8:function(){return c},M3:function(){return l},Vr:function(){return p},db:function(){return s},qV:function(){return i}});var t=n(4702),a=n(5689),u=n(7799),o=(0,t.ZF)({apiKey:"AIzaSyD9vfvfkZR7Jm1x7wNDIhh6PcfI19jMWJg",authDomain:"crm-project-4aaef.firebaseapp.com",projectId:"crm-project-4aaef",storageBucket:"crm-project-4aaef.appspot.com",messagingSenderId:"161287361864",appId:"1:161287361864:web:19d90ee4a5cc4a927ecf7d"}),c=(0,a.v0)(o),s=(0,u.ad)(o),i=new a.hJ,p=new a.GH,l=new a._O},5804:function(e,r,n){n.d(r,{Q2:function(){return m},QK:function(){return l},Yu:function(){return p}});var t=n(1413),a=n(5861),u=n(7757),o=n.n(u),c=n(7799),s=n(5063),i=(0,c.hJ)(s.db,"users"),p=function(){var e=(0,a.Z)(o().mark((function e(r){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.PL)(i);case 2:n=e.sent,r(n.docs.map((function(e){return(0,t.Z)((0,t.Z)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(o().mark((function e(r,n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,c.IO)(i,(0,c.ar)("email","==",r)),e.next=3,(0,c.PL)(t);case 3:if(!e.sent.empty){e.next=7;break}return e.next=7,(0,c.ET)(i,n);case 7:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),m=function(){var e=(0,a.Z)(o().mark((function e(r,n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,c.IO)(i,(0,c.ar)("phoneNumber","==",r)),e.next=3,(0,c.PL)(t);case 3:if(!e.sent.empty){e.next=8;break}return console.log("Add user"),e.next=8,(0,c.ET)(i,n);case 8:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=46.7ed2eb82.chunk.js.map