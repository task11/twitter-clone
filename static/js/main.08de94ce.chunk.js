(this.webpackJsonptwitterclone=this.webpackJsonptwitterclone||[]).push([[0],{56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(10),c=n.n(a),r=n(42),s=n.n(r),i=n(11),u=n(35),o=n(12),j=n(0),l=n.n(j),b=n(2),O=n(43),d=n(31),p=n(28),f=n(44);Object(O.a)({apiKey:"AIzaSyB35N1IWdPRuKxsQmeVMjILPhl-CNsD76A",authDomain:"twitterclone-f01bf.firebaseapp.com",projectId:"twitterclone-f01bf",storageBucket:"twitterclone-f01bf.appspot.com",messagingSenderId:"784145596468",appId:"1:784145596468:web:33be123db378b798240a61"});var m=Object(d.c)(),h=Object(p.b)(),x=Object(f.a)(),v=n(22),g=n(32),y=n(23),w=n(6),N=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],j=Object(a.useState)(!0),O=Object(i.a)(j,2),d=O[0],p=O[1],f=Object(a.useState)(""),h=Object(i.a)(f,2),x=h[0],v=h[1],g=function(){var e=Object(b.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,Object(y.c)(m,n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,Object(y.e)(m,n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),N=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{onSubmit:g,className:"container",children:[Object(w.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:N,className:"authInput"}),Object(w.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:N,className:"authInput"}),Object(w.jsx)("input",{type:"submit",className:"authInput authSubmit",value:d?"Create Account":"Log In"}),x&&Object(w.jsx)("span",{className:"authError",children:x})]}),Object(w.jsx)("span",{onClick:function(){return p((function(e){return!e}))},className:"authSwitch",children:d?"Sign In":"Create Account"})]})},k=function(){var e=function(){var e=Object(b.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new d.b:"github"===n&&(a=new d.a),e.next=4,Object(d.d)(m,a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"authContainer",children:[Object(w.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(w.jsx)(N,{}),Object(w.jsxs)("div",{className:"authBtns",children:[Object(w.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(w.jsx)(v.a,{icon:g.b})]}),Object(w.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(w.jsx)(v.a,{icon:g.a})]})]})]})},I=n(45),C=n(25),S=n(26),A=n(27),F=function(e){var t=e.tweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),j=Object(i.a)(o,2),O=j[0],d=j[1],p=Object(C.d)(h,"tweets","".concat(t.id)),f=function(){var e=Object(b.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this tweet?")){e.next=7;break}return e.next=4,Object(C.c)(p);case 4:if(!t.attachmentURL){e.next=7;break}return e.next=7,Object(S.a)(Object(S.d)(x,t.attachmentURL));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(b.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(C.i)(p,{text:O});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){return u((function(e){return!e}))};return Object(w.jsx)("div",{className:"tweet",children:s?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("form",{onSubmit:m,className:"container tweetEdit",children:[Object(w.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:O,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;d(t)},className:"formInput"}),Object(w.jsx)("input",{type:"submit",value:"Update Tweet",className:"formBtn"})]}),Object(w.jsx)("span",{onClick:g,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h4",{children:[t.text,t.attachmentURL&&Object(w.jsx)("img",{src:t.attachmentURL,alt:t.text})]}),n&&Object(w.jsxs)("div",{className:"tweet__actions",children:[Object(w.jsx)("span",{onClick:f,children:Object(w.jsx)(v.a,{icon:A.d})}),Object(w.jsx)("span",{onClick:g,children:Object(w.jsx)(v.a,{icon:A.a})})]})]})})},_=n(59),B=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),j=o[0],O=o[1],d=function(){var e=Object(b.a)(l.a.mark((function e(n){var a,c,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===j){e.next=12;break}return c=Object(S.d)(x,"".concat(t.uid,"/").concat(Object(_.a)())),e.next=8,Object(S.e)(c,j,"data_url");case 8:return i=e.sent,e.next=11,Object(S.b)(i.ref);case 11:a=e.sent;case 12:return u={text:r,createdAt:Date.now(),creatorId:t.uid,attachmentURL:a},e.next=15,Object(C.a)(Object(C.b)(h,"tweets"),u);case 15:s(""),O("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("form",{onSubmit:d,className:"factoryForm",children:[Object(w.jsxs)("div",{className:"factoryInput__container",children:[Object(w.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(w.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(w.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(w.jsx)("span",{children:"Add photos"}),Object(w.jsx)(v.a,{icon:A.b})]}),Object(w.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(w.jsxs)("div",{className:"factoryForm__attachment",children:[Object(w.jsx)("img",{src:j,style:{backgroundImage:j},alt:r}),Object(w.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return O("")},children:[Object(w.jsx)("span",{children:"Remove"}),Object(w.jsx)(v.a,{icon:A.c})]})]})]})},L=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){var e=Object(p.e)(Object(p.a)(h,"tweets"),Object(p.d)("createdAt"));Object(p.c)(e,(function(e){var t=e.docs.map((function(e){return Object(I.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(w.jsxs)("div",{className:"container",children:[Object(w.jsx)(B,{userObj:t}),Object(w.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(w.jsx)(F,{tweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},D=function(e){var t=e.userObj;return console.log(t.displayName),Object(w.jsx)("nav",{children:Object(w.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(w.jsx)("li",{children:Object(w.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(w.jsx)(v.a,{icon:g.c,color:"#04AAFF",size:"2x"})})}),Object(w.jsx)("li",{children:Object(w.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(w.jsx)(v.a,{icon:A.e,color:"#04AAFF",size:"2x"}),Object(w.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},R=function(e){var t=e.refreshAuth,n=e.userObj,c=Object(o.f)(),r=Object(a.useState)(n.displayName),s=Object(i.a)(r,2),u=s[0],j=s[1],O=function(){var e=Object(b.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,Object(y.g)(m.currentUser,{displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"container",children:[Object(w.jsxs)("form",{onSubmit:O,className:"profileForm",children:[Object(w.jsx)("input",{type:"text",placeholder:"Display Name",onChange:function(e){var t=e.target.value;j(t)},value:u,autoFocus:!0,className:"formInput"}),Object(w.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(w.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),c("/")},children:"Log Out"})]})},U=function(e){var t=e.refreshAuth,n=e.isLoggedIn,a=e.userObj;return Object(w.jsxs)(u.a,{children:[n&&Object(w.jsx)(D,{userObj:a}),Object(w.jsx)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:Object(w.jsx)(o.c,{children:n?Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(o.a,{path:"/",element:Object(w.jsx)(L,{userObj:a})}),Object(w.jsx)(o.a,{path:"/profile",element:Object(w.jsx)(R,{userObj:a,refreshAuth:t})})]}):Object(w.jsx)(o.a,{path:"/",element:Object(w.jsx)(k,{})})})})]})};var P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){m.onAuthStateChanged((function(e){o(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return Object(y.g)(e,{displayName:e.displayName})}}:null),c(!0)}))}),[]),Object(w.jsxs)("div",{children:[n?Object(w.jsx)(U,{isLoggedIn:Boolean(u),refreshAuth:function(){var e=m.currentUser;o({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return Object(y.g)(e,{displayName:e.displayName})}})},userObj:u}):"Initializing...",Object(w.jsx)("div",{children:Object(w.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," twitter clone"]})})]})};n(56);s.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(P,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.08de94ce.chunk.js.map