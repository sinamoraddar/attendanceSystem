(this["webpackJsonpattendance-system"]=this["webpackJsonpattendance-system"]||[]).push([[0],{100:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a,c,i,r,s,o=n(2),l=n(0),j=n.n(l),u=n(10),b=n.n(u),d=(n(99),n(100),n(83)),h=n(12),O=n(16),m=n(17),x=n.n(m),g=n(84),p={name:"",phoneNumber:"",activityLog:[]},f=Object(l.createContext)({isAuthenticated:!1,currentUser:p,setIsAuthenticated:function(){},signUpTheUser:function(){}});!function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(a||(a={})),function(e){e.All="\u0647\u0645\u0647",e.InOffice="\u062d\u0636\u0648\u0631\u06cc",e.Remote="\u0631\u06cc\u0645\u0648\u062a"}(c||(c={})),function(e){e.Name="\u0646\u0627\u0645",e.PhoneNumber="\u0634\u0645\u0627\u0631\u0647 \u062a\u0644\u0641\u0646"}(i||(i={})),function(e){e.AuthenticatedUser="AuthenticatedUser",e.SignUp="SignUp",e.LogIn="LogIn"}(r||(r={})),function(e){e.Home="/",e.Reports="/reports",e.Authentication="/authentication"}(s||(s={}));var v=n(65),_=n.n(v),y=n(82),C=n.n(y),S=n(81),k=n.n(S),N=n(159),T=n(149),A=n(150),U=n(155),w=n(160),D=n(151),P=n(137),E=n(43),I=n(11),L=n(61),F=function(e){var t=e.children,n=e.component,a=e.path,c=Object(L.a)(e,["children","component","path"]),i=Object(l.useContext)(f).isAuthenticated;return Object(o.jsx)(I.b,Object(h.a)(Object(h.a)({},c),{},{path:a,render:function(e){return i?Object(o.jsx)(I.a,{to:{pathname:s.Home}}):t||Object(o.jsx)(n,Object(h.a)({},e))}}))},M=function(e){var t=e.children,n=e.component,a=Object(L.a)(e,["children","component"]),c=Object(l.useContext)(f).isAuthenticated;return Object(o.jsx)(I.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return c?t||Object(o.jsx)(n,Object(h.a)({},e)):Object(o.jsx)(I.a,{to:{pathname:s.Authentication}})}}))},R=n(68),H=n.n(R),B=function(e){var t=e.onExit,n=Object(l.useContext)(f).currentUser;return Object(o.jsxs)("header",{className:H.a.header,children:[Object(o.jsx)("h1",{children:"\u0633\u0627\u0645\u0627\u0646\u0647 \u062d\u0636\u0648\u0631 \u0648 \u063a\u06cc\u0627\u0628"}),""!==n.name?Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(P.a,{color:"secondary",variant:"contained",className:H.a.button,onClick:t,children:"\u062e\u0631\u0648\u062c \u0627\u0632 \u0633\u06cc\u0633\u062a\u0645"})}):null]})},Y=n(154),q=n(79),J=n.n(q),W=function(e){var t=e.type,n=Object(l.useContext)(f),a=n.currentUser,c=n.setIsAuthenticated,s=(n.isAuthenticated,n.signUpTheUser),j=Object(l.useState)(""),u=Object(O.a)(j,2),b=u[0],d=u[1],h=Object(l.useState)(""),m=Object(O.a)(h,2),x=m[0],g=m[1],p=Object(l.useCallback)((function(e){e.preventDefault(),t===r.SignUp?s({name:b,phoneNumber:x}):x===a.phoneNumber?c(!0):alert("\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0646\u0627 \u0645\u0639\u062a\u0628\u0631 \u0627\u0633\u062a")}),[b,x,c,a,t,s]),v=Object(l.useCallback)((function(e,t){var n=t.target.value;switch(e){case i.Name:d(n);break;case i.PhoneNumber:g(n)}}),[]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("form",{onSubmit:p,className:J.a.form,children:[t===r.SignUp?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"\u062b\u0628\u062a \u0646\u0627\u0645"}),Object(o.jsx)(Y.a,{autoFocus:!0,required:!0,id:"standard-required",label:i.Name,value:b,onChange:v.bind(null,i.Name),type:"text"}),Object(o.jsx)(Y.a,{required:!0,id:"standard-required",label:i.PhoneNumber,type:"number",value:x,onChange:v.bind(null,i.PhoneNumber)})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"\u0648\u0631\u0648\u062f"}),Object(o.jsx)(Y.a,{required:!0,id:"standard-required",label:i.PhoneNumber,type:"number",value:x,autoFocus:!0,onChange:v.bind(null,i.PhoneNumber)})]}),Object(o.jsx)(P.a,{type:"submit",variant:"contained",color:"secondary",children:t})]})})},K=n(80),z=n.n(K),V=function(){var e=Object(l.useContext)(f).currentUser;return Object(o.jsx)("div",{className:z.a.container,children:Object(o.jsx)(W,{type:""===e.name?r.SignUp:r.LogIn})})},Z=n(157),G=n(152),Q=n(158),X=n(50),$=n.n(X),ee=function(e){var t=e.SubmitEntrance,n=e.SubmitExit,i=Object(l.useContext)(f).currentUser,r=Object(l.useState)(""),s=Object(O.a)(r,2),j=s[0],u=s[1],b=Object(l.useState)(c.InOffice),d=Object(O.a)(b,2),h=d[0],m=d[1],g=Object(l.useState)(""),p=Object(O.a)(g,2),v=p[0],_=p[1],y=Object(l.useCallback)((function(e){var t=e.target.value;m(t)}),[]),C=Object(l.useCallback)((function(e){var t=e.target.value;_(t)}),[]);return Object(l.useEffect)((function(){var e=(new Date).getDay();e!==a.Thursday&&e!==a.Friday||u("\u062b\u0628\u062a \u0648\u0631\u0648\u062f \u0648 \u062e\u0631\u0648\u062c \u062f\u0631 \u0631\u0648\u0632 \u0647\u0627\u06cc \u062a\u0639\u0637\u06cc\u0644 \u0627\u0645\u06a9\u0627\u0646 \u067e\u0630\u06cc\u0631 \u0646\u06cc\u0633\u062a")}),[]),Object(o.jsx)("div",{className:$.a.container,children:j.length>0?Object(o.jsx)("h3",{children:j}):Object(o.jsx)("div",{className:$.a.innerBox,children:i.activityLog.length>0&&i.activityLog[i.activityLog.length-1].hasEntered&&null===i.activityLog[i.activityLog.length-1].exitTime?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("h3",{children:["\u0634\u0645\u0627 \u062f\u0631",Object(o.jsx)("span",{className:$.a.time,children:x()(i.activityLog[i.activityLog.length-1].entranceTime).format("HH:mm:ss")}),"\u0648\u0627\u0631\u062f \u0634\u0631\u06a9\u062a \u0634\u062f\u06cc\u062f"]}),Object(o.jsx)("label",{htmlFor:"activityDetails",children:"\u062e\u0644\u0627\u0635\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a \u0647\u0627\u062a\u0648\u0646 \u0631\u0648 \u0627\u06cc\u0646\u062c\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"}),Object(o.jsx)("textarea",{name:"activityDetails",id:"activityDetails",placeholder:"\u062e\u0644\u0627\u0635\u0647 \u0641\u0639\u0627\u0644\u06cc\u062a \u0647\u0627...",onChange:C,value:v}),Object(o.jsx)(P.a,{variant:"contained",color:"secondary",onClick:n.bind(null,{workDescription:v}),children:"\u062b\u0628\u062a \u062e\u0631\u0648\u062c \u0627\u0632 \u0634\u0631\u06a9\u062a"})]}):Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(Z.a,{id:"demo-simple-select-helper-label",children:"\u0644\u0637\u0641\u0627 \u0646\u0648\u0639 \u06a9\u0627\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),Object(o.jsxs)(G.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:h,onChange:y,name:"workType",className:$.a.select,children:[Object(o.jsx)(Q.a,{value:c.Remote,children:c.Remote}),Object(o.jsx)(Q.a,{value:c.InOffice,children:c.InOffice})]}),Object(o.jsx)(P.a,{variant:"contained",color:"primary",onClick:t.bind(null,{workType:h}),children:"\u062b\u0628\u062a \u0648\u0631\u0648\u062f \u0628\u0647 \u0634\u0631\u06a9\u062a"})]})})})},te=n(144),ne=n(145),ae=n(146),ce=n(147),ie=n(148),re=n(34),se=n.n(re),oe=function(){var e=Object(l.useContext)(f).currentUser.activityLog,t=Object(l.useState)(""),n=Object(O.a)(t,2),a=n[0],i=n[1],r=Object(l.useState)(c.All),s=Object(O.a)(r,2),j=s[0],u=s[1],b=Object(l.useState)(""),d=Object(O.a)(b,2),h=d[0],m=d[1],g=Object(l.useCallback)((function(e){var t=e.target.value;i(t)}),[]),p=Object(l.useCallback)((function(e){var t=e.target.value;u(t)}),[]),v=Object(l.useCallback)((function(e){var t=e.exitTime,n=e.entranceTime;return"\n          ".concat(x.a.duration(x()(null===t?new Date:t).diff(x()(n))).hours(),"\n          \u0633\u0627\u0639\u062a\n          ").concat(x.a.duration(x()(null===t?new Date:t).diff(x()(n))).minutes(),"\n          \u062f\u0642\u06cc\u0642\u0647\n          ").concat(x.a.duration(x()(null===t?new Date:t).diff(x()(n))).seconds(),"\n          \u062b\u0627\u0646\u06cc\u0647\n   ")}),[]),_=Object(l.useCallback)((function(){if(e.length>0){var t=v({exitTime:new Date,entranceTime:e[e.length-1].entranceTime});m(t)}}),[e,v]);return Object(l.useEffect)((function(){_();var e=setInterval(_,1e3);return function(){return clearInterval(e)}}),[e,_]),Object(o.jsx)("div",{className:se.a.container,children:Object(o.jsxs)("div",{className:se.a.innerBox,children:[Object(o.jsxs)("div",{className:se.a.header,children:[Object(o.jsx)(Y.a,{label:"\u062c\u0633\u062a\u062c\u0648 \u062f\u0631 \u0645\u06cc\u0627\u0646 \u0641\u0639\u0627\u0644\u06cc\u062a \u0647\u0627",value:a,onChange:g,type:"text"}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Z.a,{id:"demo-simple-select-helper-label",children:"\u0644\u0637\u0641\u0627 \u0646\u0648\u0639 \u06a9\u0627\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f"}),Object(o.jsxs)(G.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:j,onChange:p,name:"workType",className:se.a.select,children:[Object(o.jsx)(Q.a,{value:c.All,children:c.All}),Object(o.jsx)(Q.a,{value:c.Remote,children:c.Remote}),Object(o.jsx)(Q.a,{value:c.InOffice,children:c.InOffice})]})]})]}),e.length>0?Object(o.jsx)("div",{className:se.a.tableContainer,children:Object(o.jsxs)(te.a,{"aria-label":"simple table",children:[Object(o.jsx)(ne.a,{children:Object(o.jsxs)(ae.a,{children:[Object(o.jsx)(ce.a,{children:"\u0646\u0648\u0639"}),Object(o.jsx)(ce.a,{align:"right",children:"\u0632\u0645\u0627\u0646 \u0648\u0631\u0648\u062f"}),Object(o.jsx)(ce.a,{align:"right",children:"\u0632\u0645\u0627\u0646 \u062e\u0631\u0648\u062c"}),Object(o.jsx)(ce.a,{align:"right",children:"\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u06a9\u0627\u0631\u06a9\u0631\u062f"}),Object(o.jsx)(ce.a,{align:"right",children:"\u0634\u0631\u062d \u0641\u0639\u0627\u0644\u06cc\u062a \u0647\u0627"})]})}),Object(o.jsx)(ie.a,{children:e.filter((function(e){var t=e.workDescription,n=e.workType;return(null===t||void 0===t?void 0:t.includes(a))&&(j===c.All||n===j)})).map((function(e){var t=e.workType,n=e.entranceTime,a=e.exitTime,c=e.id,i=e.workDescription;return Object(o.jsxs)(ae.a,{children:[Object(o.jsx)(ce.a,{component:"th",scope:"row",align:"right",children:t}),Object(o.jsx)(ce.a,{align:"right",children:x()(n).format("MMMM Do YYYY, HH:mm:ss")}),Object(o.jsx)(ce.a,{align:"right",children:null!==a?x()(a).format("MMMM Do YYYY, HH:mm:ss"):Object(o.jsx)("span",{className:se.a.red,children:"\u0647\u0646\u0648\u0632 \u062e\u0627\u0631\u062c \u0646\u0634\u062f\u0647 \u0627\u06cc\u062f"})}),Object(o.jsx)(ce.a,{align:"right",children:null!==a?v({exitTime:a,entranceTime:n}):Object(o.jsx)("span",{className:se.a.orange,children:h})}),Object(o.jsx)(ce.a,{align:"right",children:i})]},c)}))})]})}):Object(o.jsx)("p",{children:"\u0641\u0639\u0627\u0644\u06cc\u062a\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f"})]})})},le=function(e){var t=e.SubmitEntrance,n=e.SubmitExit,a=e.setCurrentUser,c=e.dialogMessage,i=e.setDialogMessage,j=Object(l.useContext)(f),u=j.isAuthenticated,b=j.currentUser,d=j.setIsAuthenticated,m=Object(l.useState)(!1),x=Object(O.a)(m,2),g=x[0],v=x[1],y=Object(l.useState)(0),S=Object(O.a)(y,2),L=S[0],R=S[1],H=Object(l.useCallback)((function(){v(!1)}),[]),Y=Object(l.useCallback)((function(){v(!1),localStorage.removeItem(r.AuthenticatedUser),a(p),d(!1)}),[a,d]),q=Object(l.useCallback)((function(){v(!0)}),[]);return Object(l.useEffect)((function(){u&&i("\u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0648\u0627\u0631\u062f \u0634\u062f\u06cc\u062f")}),[u,i]),Object(l.useEffect)((function(){return c&&setTimeout((function(){i("")}),1e3),function(){return clearTimeout(undefined)}}),[c,i]),Object(o.jsxs)(E.a,{children:[Object(o.jsx)(B,Object(h.a)({},{onExit:q})),""!==b.name&&Object(o.jsx)("div",{className:_.a.avatar,children:Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{children:b.name}),Object(o.jsx)(N.a,{children:b.name.slice(0,1).toUpperCase()})]})}),Object(o.jsxs)(I.d,{children:[Object(o.jsx)(M,{path:s.Home,exact:!0,children:Object(o.jsx)(ee,Object(h.a)({},{SubmitEntrance:t,SubmitExit:n}))}),Object(o.jsx)(M,{path:s.Reports,exact:!0,component:oe}),Object(o.jsx)(F,{path:s.Authentication,exact:!0,component:V}),Object(o.jsx)(I.a,{to:s.Home})]}),u&&Object(o.jsxs)(T.a,{value:L,onChange:function(e,t){R(t)},showLabels:!0,children:[Object(o.jsx)(A.a,{component:E.b,to:s.Home,label:"\u062e\u0627\u0646\u0647",icon:Object(o.jsx)(k.a,{})}),Object(o.jsx)(A.a,{label:"\u0644\u06cc\u0633\u062a \u06af\u0632\u0627\u0631\u0634 \u0647\u0627",component:E.b,to:s.Reports,icon:Object(o.jsx)(C.a,{})})]}),Object(o.jsx)(U.a,{"aria-labelledby":"simple-dialog-title",open:""!==c,children:Object(o.jsx)(w.a,{id:"simple-dialog-title",children:c})}),Object(o.jsxs)(U.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"md","aria-labelledby":"confirmation-dialog-title",open:g,children:[Object(o.jsx)(w.a,{id:"confirmation-dialog-title",children:"\u062f\u0631 \u0635\u0648\u0631\u062a \u062e\u0631\u0648\u062c \u062a\u0645\u0627\u0645 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0634\u0645\u0627 \u067e\u0627\u06a9 \u062e\u0648\u0627\u0647\u062f \u0634\u062f . \u0622\u06cc\u0627 \u0645\u0637\u0645\u0626\u0646 \u0647\u0633\u062a\u06cc\u062f\u061f"}),Object(o.jsxs)(D.a,{children:[Object(o.jsx)(P.a,{autoFocus:!0,onClick:H,color:"primary",children:"\u062e\u06cc\u0631"}),Object(o.jsx)(P.a,{onClick:Y,color:"primary",children:"\u0628\u0644\u0647"})]})]})]})};var je=function(){var e=Object(l.useState)(!1),t=Object(O.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(p),i=Object(O.a)(c,2),s=i[0],j=i[1],u=Object(l.useState)(""),b=Object(O.a)(u,2),m=b[0],v=b[1],_=Object(l.useCallback)((function(e){var t=e.name,n=e.phoneNumber;j((function(e){return Object(h.a)(Object(h.a)({},e),{},{name:t,phoneNumber:n})})),a(!0)}),[]),y=Object(l.useCallback)((function(e){var t=e.workType;j((function(e){return Object(h.a)(Object(h.a)({},e),{},{activityLog:[].concat(Object(d.a)(e.activityLog),[{id:Object(g.a)(),hasEntered:!0,hasExited:!1,entranceTime:new Date,exitTime:null,workType:t,workDescription:""}])})}))}),[]),C=Object(l.useCallback)((function(e){var t=e.workDescription;if(s.activityLog.length>0){var n=x()(),a=x()(s.activityLog[s.activityLog.length-1].entranceTime);n.diff(a,"minute")>10?j((function(e){var n=e.activityLog.map((function(e,n,a){return n===a.length-1?Object(h.a)(Object(h.a)({},e),{},{hasExited:!0,exitTime:new Date,workDescription:t}):e}));return Object(h.a)(Object(h.a)({},e),{},{activityLog:n})})):v("\u062e\u0637\u0627!\u0628\u0631\u0627\u06cc \u062b\u0628\u062a \u062e\u0631\u0648\u062c \u0628\u0627\u06cc\u062f \u0627\u0632 \u0622\u062e\u0631\u06cc\u0646 \u0648\u0631\u0648\u062f \u0634\u0645\u0627 \u0628\u06cc\u0634 \u0627\u0632 10 \u062f\u0642\u06cc\u0642\u0647 \u06af\u0630\u0634\u062a\u0647 \u0628\u0627\u0634\u062f")}}),[s]);return Object(l.useEffect)((function(){var e=localStorage.getItem(r.AuthenticatedUser);null!==e&&j(JSON.parse(e))}),[]),Object(l.useEffect)((function(){""!==s.name&&localStorage.setItem(r.AuthenticatedUser,JSON.stringify(s))}),[s]),Object(o.jsx)(f.Provider,{value:{isAuthenticated:n,currentUser:s,setIsAuthenticated:a,signUpTheUser:_},children:Object(o.jsx)(le,Object(h.a)({},{SubmitEntrance:y,SubmitExit:C,setCurrentUser:j,dialogMessage:m,setDialogMessage:v}))})},ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};b.a.render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(je,{})}),document.getElementById("root")),ue()},34:function(e,t,n){e.exports={root:"ReportsPage_root__29JoB",container:"ReportsPage_container__2Oq-D",header:"ReportsPage_header__1VkpH",innerBox:"ReportsPage_innerBox__2FIRC",select:"ReportsPage_select__2_3QJ",tableContainer:"ReportsPage_tableContainer__SBrpz",red:"ReportsPage_red__3Jti_",orange:"ReportsPage_orange__1C1uc"}},50:function(e,t,n){e.exports={root:"MainPage_root__yAt6B",container:"MainPage_container__3RnYP",innerBox:"MainPage_innerBox__h8TRZ",select:"MainPage_select__2tpws",button:"MainPage_button__3AjZ-",time:"MainPage_time__1NhK4",bottomNavigation:"MainPage_bottomNavigation__2bThF"}},65:function(e,t,n){e.exports={root:"App_root__q_3Rb",button:"App_button__3e7IS",avatar:"App_avatar__FNADU"}},68:function(e,t,n){e.exports={root:"Header_root__3EG4e",header:"Header_header__3xDoK"}},79:function(e,t,n){e.exports={root:"AuthForm_root__1E3pV",form:"AuthForm_form__3za7T"}},80:function(e,t,n){e.exports={root:"AuthenticationPage_root__17uym",container:"AuthenticationPage_container__WLNyi"}}},[[108,1,2]]]);
//# sourceMappingURL=main.73fe90b1.chunk.js.map