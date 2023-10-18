"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[193],{2782:function(e,t,n){var r=n(3547),a=n(184);t.Z=function(e){var t=e.title,n=e.children,s=e.topMargin,i=e.TopSideButtons;return(0,a.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(s||"mt-6"),children:[(0,a.jsxs)(r.Z,{styleClass:i?"inline-block":"",children:[t,i&&(0,a.jsx)("div",{className:"inline-block float-right",children:i})]}),(0,a.jsx)("div",{className:"divider mt-2"}),(0,a.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:n})]})}},1878:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(4165),a=n(5861),s=n(9439),i=n(2791),c=n(6887),l=n(9396),o=n(184);function d(e){var t=e.url,n=e.results,d=(e.isNoData,(0,i.useState)("")),u=(0,s.Z)(d,2),h=u[0],x=u[1],f=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var a,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,console.log(t,"uel"),h){e.next=4;break}return e.abrupt("return");case 4:return a=localStorage.getItem(c.i.TOKEN_DETAIL),e.next=7,l.A.postData(t,{query:h},a);case 7:if(!(s=e.sent).error){e.next=10;break}throw s;case 10:n(s.data.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),n([]);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)("div",{style:{padding:10,marginBottom:10,borderRadius:5,borderWidth:1,borderColor:"grey",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{className:"searchInput",type:"text",placeholder:"Search name",value:h,onChange:function(e){""===e.target.value&&n([]),x(e.target.value)},style:{width:"80%",paddingLeft:20,fontWeight:"500",borderStyle:"none",border:0}}),(0,o.jsx)("button",{className:"btn px-6 btn-sm normal-case btn-primary",onClick:f,children:"Search"})]})}},3547:function(e,t,n){var r=n(184);t.Z=function(e){var t=e.styleClass,n=e.children;return(0,r.jsx)("div",{className:"text-xl font-semibold ".concat(t),children:n})}},7193:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});var r=n(2791),a=n(9434),s=n(5054),i=n(4165),c=n(5861),l=n(9439),o=(n(2426),n(2782)),d=n(8060),u=(n(190),n(9313)),h=n(9396),x=n(6041),f=n(6887),p=n(9085),v=(n(5462),n(1694),n(184)),m=n(6048),b=n.n(m),g=(n(2668),n(1878)),j=function(){var e=(0,a.I0)();return(0,v.jsx)("div",{className:"inline-block float-right",children:(0,v.jsx)("button",{className:"btn px-6 btn-sm normal-case btn-primary",onClick:function(){e((0,d.h7)({title:"Add New User",bodyType:u.MODAL_BODY_TYPES.LEAD_ADD_NEW}))},children:"Add New"})})},E=function(){var e=(0,a.I0)();return(0,v.jsx)("div",{className:"inline-block float-right",style:{marginLeft:10},children:(0,v.jsx)("button",{className:"btn px-6 btn-sm normal-case btn-primary",onClick:function(){e((0,d.h7)({title:"Add Excel File",bodyType:u.MODAL_BODY_TYPES.MODAL_EXCEL_ADD}))},children:"Add Excel File"})})},_=0;var A=function(){var e=(0,a.I0)(),t=(0,r.useState)([]),n=(0,l.Z)(t,2),s=n[0],m=n[1],A=(0,r.useState)([]),N=(0,l.Z)(A,2),k=N[0],D=N[1],y=(0,r.useState)(1),S=(0,l.Z)(y,2),w=S[0],C=(S[1],(0,r.useState)(1)),T=(0,l.Z)(C,2),L=(T[0],T[1]);(0,r.useEffect)((function(){Z(w)}),[]);var Z=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t){var n,r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=localStorage.getItem(f.i.TOKEN_DETAIL),e.next=4,h.A.getData(x.i.GET_USER,n,{page:t});case 4:if(200!=(r=e.sent).data.status){e.next=12;break}console.log(r.data.data),m(null===r||void 0===r||null===(a=r.data)||void 0===a?void 0:a.data.users),_=null===r||void 0===r?void 0:r.data.data.pagination.totalPages,L(null===r||void 0===r?void 0:r.data.data.pagination.page),e.next=13;break;case 12:throw r;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem(f.i.TOKEN_DETAIL),e.next=4,h.A.postData(x.i.DELETE_USER,{id:t.id},r);case 4:if(200===(a=e.sent).data.status){e.next=7;break}throw a;case 7:m((function(e){return e.map((function(e,t){return t===n&&(e.is_delete=e.is_delete?0:1),e}))})),(0,p.Am)("Delete Status Updated Successfully"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),(0,p.Am)("User not deleted"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}(),O=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(t,n){var r,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem(f.i.TOKEN_DETAIL),e.next=4,h.A.postData(x.i.UPDATE_STAUS_USER,{id:t.id},r);case 4:if(200===(a=e.sent).data.status){e.next=7;break}throw a;case 7:m((function(e){return e.map((function(e,t){return t===n&&(e.is_active=e.is_active?0:1),e}))})),(0,p.Am)("User Active Status Changed"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),(0,p.Am)("User Active Status not Changes"),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(o.Z,{title:"Current Users",topMargin:"mt-2",TopSideButtons:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E,{}),(0,v.jsx)(j,{})]}),children:[(0,v.jsx)(g.Z,{url:x.i.SEARHC_USER,results:function(e){return D(e)}}),(0,v.jsx)("div",{className:"overflow-x-auto w-full",children:(0,v.jsxs)("table",{className:"table w-full",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[(0,v.jsx)("th",{children:"Name"}),(0,v.jsx)("th",{children:"Email Id"}),(0,v.jsx)("th",{children:"Phone"}),(0,v.jsx)("th",{children:"Age"}),(0,v.jsx)("th",{children:"Gender"}),(0,v.jsx)("th",{children:"Occupation"}),(0,v.jsx)("th",{children:"Gotra"}),(0,v.jsx)("th",{children:"Activity"}),(0,v.jsx)("th",{children:"Delete Status"}),(0,v.jsx)("th",{children:"Actions"})]})}),(0,v.jsx)("tbody",{children:(0==k.length?s:k).length>0&&(0==k.length?s:k).map((function(t,n){return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:(0,v.jsx)("div",{className:"flex items-center space-x-3",children:(0,v.jsx)("div",{children:(0,v.jsx)("div",{className:"font-bold",children:t.full_name})})})}),(0,v.jsx)("td",{children:t.email}),(0,v.jsx)("td",{children:t.phone}),(0,v.jsx)("td",{children:t.age}),(0,v.jsx)("td",{children:t.gender}),(0,v.jsx)("td",{children:t.occupation}),(0,v.jsx)("td",{children:t.gotra}),(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn btn-square btn-ghost",onClick:function(){return O(t,n)},children:(0,v.jsx)("td",{style:{color:t.is_active?"green":"red"},children:t.is_active?"ACTIVE":"InActive"})})}),(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn btn-square btn-ghost",onClick:function(){return I(t,n)},children:(0,v.jsx)("td",{style:{color:t.is_delete?"green":"red"},children:t.is_delete?"DELETED":"DELETE"})})}),(0,v.jsx)("td",{children:(0,v.jsx)("button",{className:"btn btn-square btn-ghost",onClick:function(){return e((0,d.h7)({title:"Edit User",bodyType:u.MODAL_BODY_TYPES.EDIT_LEAD_MODAL,extraObject:t}))},children:(0,v.jsx)("td",{style:{color:"green"},children:"Edit"})})})]},n)}))})]})})]}),0==k.length&&(0,v.jsx)(b(),{onPageChange:function(e){var t=e.selected;L(t+1),Z(t+1)},pageCount:_,previousLabel:"Prev",nextLabel:"Next",containerClassName:"pagination",pageLinkClassName:"page-number",previousLinkClassName:"page-number",nextLinkClassName:"page-number",activeLinkClassName:"active"}),(0,v.jsx)(p.Ix,{})]})};var N=function(){var e=(0,a.I0)();return(0,r.useEffect)((function(){e((0,s.Iw)({title:"Users"}))}),[]),(0,v.jsx)(A,{})}},2668:function(){}}]);
//# sourceMappingURL=193.264a4f5d.chunk.js.map