"use strict";(self.webpackChunkmy_crm_app=self.webpackChunkmy_crm_app||[]).push([[385],{385:function(e,n,r){r.r(n),r.d(n,{default:function(){return b}});var t,a,c,s=r(9439),i=r(2791),o=r(5804),u=r(4539),d=r(7799),p=r(5063),f=r(5218),l=r(168),m=r(6444),h=(0,m.ZP)(u.List.Item)(t||(t=(0,l.Z)(["\n  margin-bottom: 8px;\n"]))),x=m.ZP.span(a||(a=(0,l.Z)(["\n  font-weight: bold;\n"]))),v=m.ZP.hr(c||(c=(0,l.Z)(["\n  border: none;\n  border-top: 1px solid #ccc;\n  margin-top: 16px;\n  margin-bottom: 16px;\n"]))),j=r(184),b=function(){var e=(0,i.useState)([]),n=(0,s.Z)(e,2),r=n[0],t=n[1];(0,i.useEffect)((function(){(0,o.Yu)(t)}),[]);return(0,j.jsx)("div",{children:r.map((function(e){return(0,j.jsxs)("div",{children:[(0,j.jsxs)(u.Form.CustomSelect,{defaultValue:"Choose Role",onChange:function(n){return function(e,n){var r=(0,d.JU)(p.db,"users",e);(0,d.r7)(r,{role:n}).then((function(){f.Am.success("Role added"),(0,o.Yu)(t)})).catch((function(e){f.Am.error(e.message)}))}(e.id,n.target.value)},sm:!0,mb:"3",children:[(0,j.jsx)("option",{disabled:!0,children:"Choose Role"}),(0,j.jsx)("option",{value:"Driver",children:"Driver"}),(0,j.jsx)("option",{value:"Passenger",children:"Passenger"}),(0,j.jsx)("option",{value:"Dispatcher",children:"Dispatcher"})]}),(0,j.jsxs)(u.List,{children:[e.displayName&&(0,j.jsxs)(h,{children:[(0,j.jsx)(x,{children:"Name:"})," ",e.displayName]}),e.name&&(0,j.jsxs)(h,{children:[(0,j.jsx)(x,{children:"Name:"})," ",e.name]}),e.email&&(0,j.jsxs)(h,{children:[(0,j.jsx)(x,{children:"Email:"})," ",e.email]}),e.phoneNumber&&(0,j.jsxs)(h,{children:[(0,j.jsx)(x,{children:"Number:"})," ",e.phoneNumber]}),e.role&&(0,j.jsxs)(h,{children:[(0,j.jsx)(x,{children:"Role:"})," ",e.role]}),(0,j.jsx)(v,{})]})]},e.id)}))})}},5063:function(e,n,r){r.d(n,{I8:function(){return i},M3:function(){return p},Vr:function(){return d},db:function(){return o},qV:function(){return u}});var t=r(4702),a=r(5689),c=r(7799),s=(0,t.ZF)({apiKey:"AIzaSyD9vfvfkZR7Jm1x7wNDIhh6PcfI19jMWJg",authDomain:"crm-project-4aaef.firebaseapp.com",projectId:"crm-project-4aaef",storageBucket:"crm-project-4aaef.appspot.com",messagingSenderId:"161287361864",appId:"1:161287361864:web:19d90ee4a5cc4a927ecf7d"}),i=(0,a.v0)(s),o=(0,c.ad)(s),u=new a.hJ,d=new a.GH,p=new a._O},5804:function(e,n,r){r.d(n,{Q2:function(){return f},QK:function(){return p},Yu:function(){return d}});var t=r(1413),a=r(5861),c=r(7757),s=r.n(c),i=r(7799),o=r(5063),u=(0,i.hJ)(o.db,"users"),d=function(){var e=(0,a.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.PL)(u);case 2:r=e.sent,n(r.docs.map((function(e){return(0,t.Z)((0,t.Z)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(n,r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.IO)(u,(0,i.ar)("email","==",n)),e.next=3,(0,i.PL)(t);case 3:if(!e.sent.empty){e.next=7;break}return e.next=7,(0,i.ET)(u,r);case 7:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(n,r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,i.IO)(u,(0,i.ar)("phoneNumber","==",n)),e.next=3,(0,i.PL)(t);case 3:if(!e.sent.empty){e.next=8;break}return console.log("Add user"),e.next=8,(0,i.ET)(u,r);case 8:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=385.a6f08f33.chunk.js.map