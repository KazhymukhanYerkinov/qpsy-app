(this["webpackJsonpqpsy-app"]=this["webpackJsonpqpsy-app"]||[]).push([[0],{265:function(e,t,n){},410:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n(0),a=n.n(r),c=n(14),i=n.n(c),o=(n(265),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,469)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),s(e),r(e),a(e),c(e)}))}),l=n(19),d=n(16),j=n(17),u=n(202),b=n(200),p=n(13),x=n(34),h=n.n(x),m=n(65),O=n(56),f=n.n(O),g=n(60),v=n(203).create({baseURL:"https://qpsy.herokuapp.com/"});v.interceptors.request.use((function(e){return f.a.get("access")?(e.headers.Authorization="JWT ".concat(f.a.get("access")),e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e):(e.headers["Content-Type"]="application/json",e.headers.Accept="application/json",e)}));var y=function(e,t){var n=JSON.stringify({email:e,password:t});return v.post("api/auth/jwt/create",n).then((function(e){return e.data}))},S=function(){return v.get("api/auth/users/me").then((function(e){return e.data}))},w=function(e){var t=JSON.stringify({email:e});return v.post("api/auth/users/reset_password/",t).then((function(e){return e.data}))},k=function(e,t,n){var s=JSON.stringify({uid:e,token:t,new_password:n});return v.post("api/auth/users/reset_password_confirm/",s).then((function(e){return e.data}))},F="LOGIN_SUCCESS",T="LOGIN_FAIL",N="LOAD_USER_SUCCESS",C="LOAD_USER_FAIL",P="AUTHENTICATED_SUCCESS",E="AUTHENTICATED_FAIL",A="PASSWORD_RESET_CONFIRM_SUCCESS",z="LOGOUT",D={access:f.a.get("access"),isAuth:!1,user:{},confirmSuccess:!1,isAdmin:"\u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433",isSuperPsy:"\u0421\u0443\u043f\u0435\u0440\u041f\u0441\u0438\u0445\u043e\u043b\u043e\u0433",isPsy:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440"},I=function(){return function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!f.a.get("access")){e.next=14;break}return e.prev=1,e.next=4,S();case 4:n=e.sent,console.log(n),t({type:N,payload:n}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:C});case 12:e.next=15;break;case 14:t({type:C});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,n=t.type,s=t.payload;switch(n){case F:return Object(p.a)(Object(p.a)({},e),{},{isAuth:!0,access:s.access});case N:return Object(p.a)(Object(p.a)({},e),{},{user:s});case P:return Object(p.a)(Object(p.a)({},e),{},{isAuth:!0});case A:return Object(p.a)(Object(p.a)({},e),{},{confirmSuccess:t.confirmSuccess});case E:return Object(p.a)(Object(p.a)({},e),{},{isAuth:!1});case C:return Object(p.a)(Object(p.a)({},e),{},{user:null});case T:case z:return f.a.remove("access"),Object(p.a)(Object(p.a)({},e),{},{access:null,isAuth:!1,user:null});default:return e}},B="SET_TOGGLE_SIDEBAR",L="INITIALIZED_SUCESS",W={openSidebar:!1,initialized:!1},H=function(){return{type:B}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(p.a)(Object(p.a)({},e),{},{openSidebar:!e.openSidebar});case L:return Object(p.a)(Object(p.a)({},e),{},{initialized:!0});default:return e}},U="SET_USERS_LIST",G={users:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14}]},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(p.a)(Object(p.a)({},e),{},{users:e.users.concat(t.users)});default:return e}},Y=Object(j.c)({form:b.a,appPage:R,authPage:_,usersPage:M}),q=Object(j.e)(Y,Object(j.a)(u.a));window.store=q;var J=q,Q=n(205),Z=n(206),$=n(225),K=n(224),X=n(22),V=n(443),ee=n(23),te=n(464),ne=n(467),se=n(6),re=n(70),ae=n(445),ce=n(446),ie=n(466),oe=n(447),le=n(210),de=n.n(le),je=n(448),ue=n(211),be=n.n(ue),pe=n(212),xe=n.n(pe),he=n(213),me=n.n(he),Oe=n(214),fe=n.n(Oe),ge=n(452),ve=n(449),ye=n(451),Se=n(450),we=Object(V.a)((function(e){return{logoText:{fontFamily:"Poppins",fontSize:"30px",fontWeight:"bold",color:"#2d1674"},listText:{fontFamily:"Poppins",fontSize:"15px"},listEmail:{fontFamily:"Poppins",fontSize:"12px"},listItem:{fontFamily:"Poppins",fontSize:"15px",color:"#334D6E"},dialogTitle:{fontFamily:"Poppins",fontSize:"16px"}}})),ke=function(e){var t=we(),n=function(){e.setOpen(!1)};return Object(s.jsx)("div",{children:Object(s.jsxs)(ve.a,{open:e.open,onClose:n,"aria-labelledby":"alert-dialog-title",children:[Object(s.jsxs)(Se.a,{id:"alert-dialog-title",children:[" ",Object(s.jsx)("span",{className:t.dialogTitle,children:" \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438 ? "})," "]}),Object(s.jsxs)(ye.a,{children:[Object(s.jsx)(ge.a,{color:"secondary",onClick:n,children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(s.jsx)(ge.a,{color:"primary",onClick:function(){e.logoutThunk()},children:"\u041e\u041a"})]})]})})},Fe=function(e){var t=we(),n=Object(r.useState)(1),a=Object(re.a)(n,2),c=a[0],i=a[1],o=Object(r.useState)(!1),d=Object(re.a)(o,2),j=d[0],u=d[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("div",{className:"d-flex justify-content-center pt-2",children:Object(s.jsx)("div",{children:Object(s.jsxs)("span",{className:t.logoText,children:[Object(s.jsx)("span",{style:{color:"#109CF1"},children:"Q"}),"PSY"]})})}),Object(s.jsxs)(ae.a,{dense:!0,style:{marginTop:"-5%"},children:[Object(s.jsx)("hr",{}),Object(s.jsxs)(ce.a,{children:[Object(s.jsx)(ie.a,{alt:"",style:{marginRight:"5%"}}),Object(s.jsx)(oe.a,{classes:{primary:t.listText,secondary:t.listEmail},primary:"".concat(e.user.first_name," ").concat(e.user.last_name),secondary:e.user.email})]})]}),Object(s.jsxs)("div",{className:"mt-4",children:[Object(s.jsx)("div",{onClick:function(){return i(1)},children:Object(s.jsx)(l.b,{to:"/",style:{textDecoration:"none"},children:Object(s.jsxs)(ce.a,{button:!0,selected:1===c,children:[Object(s.jsx)(je.a,{children:Object(s.jsx)(de.a,{style:{color:"#334D6E"}})}),Object(s.jsx)(oe.a,{primary:"\u0427\u0430\u0442\u044b",classes:{primary:t.listItem}})]})})}),Object(s.jsx)("div",{onClick:function(){return i(2)},children:Object(s.jsx)(l.b,{to:"/tape",style:{textDecoration:"none"},children:Object(s.jsxs)(ce.a,{button:!0,selected:2===c,children:[Object(s.jsx)(je.a,{children:Object(s.jsx)(be.a,{style:{color:"#334D6E"}})}),Object(s.jsx)(oe.a,{primary:"\u041b\u0435\u043d\u0442\u0430",classes:{primary:t.listItem}})]})})}),Object(s.jsx)("div",{onClick:function(){return i(3)},children:Object(s.jsx)(l.b,{to:"/stat",style:{textDecoration:"none"},children:Object(s.jsxs)(ce.a,{button:!0,selected:3===c,children:[Object(s.jsx)(je.a,{children:Object(s.jsx)(xe.a,{style:{color:"#334D6E"}})}),Object(s.jsx)(oe.a,{primary:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",classes:{primary:t.listItem}})]})})})]}),Object(s.jsxs)("div",{className:"mt-4",children:[Object(s.jsx)("hr",{}),Object(s.jsx)(l.b,{to:"/settings",style:{textDecoration:"none"},children:Object(s.jsx)("div",{onClick:function(){return i(6)},children:Object(s.jsxs)(ce.a,{button:!0,selected:6===c,children:[Object(s.jsx)(je.a,{children:Object(s.jsx)(me.a,{style:{color:"#334D6E"}})}),Object(s.jsx)(oe.a,{primary:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",classes:{primary:t.listItem}})]})})})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("hr",{}),Object(s.jsx)("div",{onClick:function(){u(!0)},children:Object(s.jsxs)(ce.a,{button:!0,children:[Object(s.jsx)(je.a,{children:Object(s.jsx)(fe.a,{style:{color:"#334D6E"}})}),Object(s.jsx)(oe.a,{primary:"\u0412\u044b\u0439\u0442\u0438",classes:{primary:t.listItem}})]})})]}),Object(s.jsx)(ke,{open:j,setOpen:u,logoutThunk:e.logoutThunk})]})},Te=Object(se.a)((function(e){return{drawerPaper:Object(ee.a)({width:270,height:"100vh"},e.breakpoints.up("md"),{position:"relative"})}}),{withTheme:!0})((function(e){var t=e.classes;e.theme;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(te.a,{mdUp:!0,children:Object(s.jsx)(ne.a,{variant:"temporary",anchor:"left",open:e.openSidebar,onClose:e.setToggleSidebar,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0},children:Object(s.jsx)(Fe,{logoutThunk:e.logoutThunk,user:e.user,isAdmin:e.isAdmin,isSuperPsy:e.isSuperPsy,isPsy:e.isPsy})})}),Object(s.jsx)(te.a,{smDown:!0,implementation:"css",children:Object(s.jsx)(ne.a,{variant:"permanent",open:!0,classes:{paper:t.drawerPaper},children:Object(s.jsx)(Fe,{logoutThunk:e.logoutThunk,user:e.user,isAdmin:e.isAdmin,isSuperPsy:e.isSuperPsy,isPsy:e.isPsy})})})]})})),Ne=Object(d.b)((function(e){return{openSidebar:e.appPage.openSidebar,user:e.authPage.user,isAdmin:e.authPage.isAdmin,isSuperPsy:e.authPage.isSuperPsy,isPsy:e.authPage.isPsy}}),{setToggleSidebar:H,logoutThunk:function(){return function(e){e({type:z})}}})((function(e){return Object(s.jsx)(Te,{openSidebar:e.openSidebar,setToggleSidebar:e.setToggleSidebar,logoutThunk:e.logoutThunk,user:e.user,isAdmin:e.isAdmin,isSuperPsy:e.isSuperPsy,isPsy:e.isPsy})})),Ce=n(453),Pe=n(454),Ee=n(184),Ae=n(455),ze=n(153),De=n.n(ze),Ie=n(215),_e=n.n(Ie),Be=n(216),Le=n.n(Be),We=Object(V.a)((function(e){return{appBar:Object(ee.a)({position:"absolute",marginLeft:270},e.breakpoints.up("md"),{width:"calc(100% - ".concat(270,"px)")}),navIconHide:Object(ee.a)({},e.breakpoints.up("md"),{display:"none"}),searchInput:{boxShadow:"none",marginRight:"5%",width:"90%"}}})),He=function(e){var t=We(),n=Object(X.g)();return Object(s.jsx)(Ce.a,{className:t.appBar,children:Object(s.jsxs)(Pe.a,{style:{backgroundColor:"#FFFFFF"},children:[Object(s.jsx)(Ee.a,{color:"primary","aria-label":"Open drawer",onClick:e.setToggleSidebar,className:t.navIconHide,children:Object(s.jsx)(_e.a,{})}),n.pathname.includes("/chat/")&&Object(s.jsx)(De.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439...",className:t.searchInput}),"/"===n.pathname&&Object(s.jsx)(De.a,{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439...",className:t.searchInput}),Object(s.jsx)(Ae.a,{color:"secondary",variant:"dot",children:Object(s.jsx)(Le.a,{style:{color:"#C2CFE0"}})})]})})},Re=Object(d.b)((function(e){return{}}),{setToggleSidebar:H})((function(e){return Object(s.jsx)(He,{setToggleSidebar:e.setToggleSidebar})})),Ue=n(83),Ge=(Object(V.a)((function(e){return{session:{position:"relative",zIndex:4e3,minHeight:"100vh",display:"flex",flexDirection:"column"},content:{padding:"40px ".concat(e.spacing(1),"px"),display:"flex",alignItems:"center",justifyContent:"center",flex:"1 0 auto",flexDirection:"column",minHeight:"100%",textAlign:"center"},title:{fontSize:"150px",lineHeight:1.2,fontWeight:100,display:"inline-table",position:"relative",background:e.palette.primary.main,color:"#fff",padding:"0 ".concat(3*e.spacing(1),"px"),borderRadius:"60px",cursor:"pointer",margin:"0 0 ".concat(e.spacing(1),"px"),"&:after":{top:"100%",left:"50%",border:"solid transparent",content:'""',height:0,width:0,position:"absolute",pointerEvents:"none",borderColor:"rgba(0, 0, 0, 0)",borderTopColor:e.palette.primary.main,borderWidth:"8px",marginLeft:"-8px"}},subtitle:{fontSize:"32px",fontWeight:900},content2:{flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing(1)}}})),n(32)),Me=n.n(Ge),Ye=n(456),qe=n(185),Je=n(457),Qe=n(458),Ze=n(219),$e=n.n(Ze),Ke=n(217),Xe=n.n(Ke),Ve=n(218),et=n.n(Ve),tt=Object(V.a)((function(e){var t;return{main:Object(ee.a)({flexGrow:1,backgroundColor:e.palette.background.default,padding:3*e.spacing(3)},e.breakpoints.down("sm"),{padding:3*e.spacing(1)}),toolBar:e.mixins.toolbar,conversation:(t={boxSizing:"border-box",width:"100%",marginBottom:2*e.spacing(1)},Object(ee.a)(t,e.breakpoints.down("sm"),{padding:"0 ".concat(1*e.spacing(1),"px")}),Object(ee.a)(t,e.breakpoints.up("sm"),{padding:"0 ".concat(3*e.spacing(1),"px")}),Object(ee.a)(t,"display","flex"),t),conversationSent:{justifyContent:"flex-end"},body:{position:"relative",padding:".625rem 1rem",backgroundColor:"#1F7BB3",borderRadius:"3px",boxShadow:e.shadows[1]},bodyReceived:{"&::after":{position:"absolute",top:0,width:0,height:0,content:'""',border:"5px solid #1F7BB3",borderBottomColor:"transparent",left:"-7px",borderLeftColor:"transparent"}},bodySent:{position:"relative",backgroundColor:"#109CF1",float:"right",order:1,"&::after":{position:"absolute",bottom:0,width:0,height:0,content:'""',border:"5px solid #109CF1",borderTopColor:"transparent",borderRightColor:"transparent",right:"-7px"}},content:{backgroundColor:"#FFFFFF",border:"1px solid white",marginTop:"0.3%",padding:"2%",height:"calc(100% - 30%)",boxSizing:"border-box",flex:1,position:"relative",overflowX:"hidden",overflowY:"auto"},messageChat:{color:"white",fontFamily:"Poppins",fontSize:"100%"},headerChat:Object(ee.a)({padding:"2%",backgroundColor:"#FFFFFF",fontFamily:"Poppins",fontSize:"100%",color:"#323C47"},e.breakpoints.down("sm"),{padding:"4%"}),date:{display:"block",fontSize:"10px",paddingTop:"2px",fontFamily:"Poppins",fontWeight:"600",color:e.palette.primary.contrastText},dateSent:{textAlign:"right"},input:Object(ee.a)({flex:"1 1 0%",padding:"1%",backgroundColor:"white"},e.breakpoints.down("sm"),{padding:"2%"})}})),nt=[{message:"Hey.",type:"received"},{message:"How are the wife and kids Taylor?",type:"received"},{message:"Pretty good Samuel.",type:"sent"},{message:"Cras mattis consectetur purus sit amet fermentum.",type:"received"},{message:"Goodnight.",type:"sent"},{message:"Hey.",type:"received"},{message:"How are the wife and kids Taylor?",type:"received"},{message:"Pretty good Samuel.",type:"sent"},{message:"Cras mattis consectetur purus sit amet fermentum.",type:"received"},{message:"Goodnight.",type:"sent"},{message:"Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",type:"received"}],st=Object(X.h)((function(e){var t=tt();return Object(s.jsxs)("main",{className:t.main,children:[Object(s.jsx)("div",{className:t.toolBar}),Object(s.jsx)("div",{className:t.headerChat,children:"Yerkinov Kazhymukhan"}),Object(s.jsx)("div",{className:t.content,children:nt.map((function(e,n){return Object(s.jsx)("div",{className:Me()(t.conversation,"sent"===e.type?t.conversationSent:t.conversationReceived),children:Object(s.jsxs)("div",{className:Me()(t.body,"sent"===e.type?t.bodySent:t.bodyReceived),children:[Object(s.jsxs)(Ue.a,{className:t.messageChat,children:[" ",e.message," "]}),Object(s.jsx)(Ue.a,{variant:"caption",className:Me()(t.date,"sent"===e.type?t.dateSent:t.dateReceived),children:"12:30"})]})},n)}))}),Object(s.jsx)("div",{className:"mt-2",children:Object(s.jsxs)(Ye.a,{container:!0,spacing:0,justify:"center",alignItems:"center",children:[Object(s.jsx)(qe.a,{placeholder:"Write a message",type:"text",margin:"normal",className:t.input,startAdornment:Object(s.jsx)(Je.a,{position:"start",children:Object(s.jsx)(Xe.a,{style:{color:"#90A0B7",cursor:"pointer"}})}),endAdornment:Object(s.jsx)(Je.a,{position:"end",children:Object(s.jsx)(et.a,{style:{color:"#90A0B7",cursor:"pointer"}})})}),Object(s.jsx)(Qe.a,{color:"primary",size:"medium",style:{marginLeft:"1%"},"aria-label":"send",children:Object(s.jsx)($e.a,{})})]})})]})})),rt=n(220),at=n.n(rt),ct=Object(V.a)((function(e){return{root:{background:"#FFFFFF",borderRadius:"1%",padding:"1%",marginBottom:"1%"},root2:{background:"#FFFFFF",width:"60%",padding:"1%"},buttonPer:{color:"white",fontFamily:"Poppins",fontSize:"80%",marginTop:"7%"},large:{width:e.spacing(7),height:e.spacing(7),backgroundColor:"black",color:"white"},userName:{fontFamily:"Poppins",fontSize:"18px"},userText:{fontFamily:"Poppins",fontSize:"15px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}})),it=function(e){var t=ct();return Object(s.jsx)("div",{className:t.root,children:Object(s.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(s.jsx)("div",{className:t.root2,children:Object(s.jsx)(l.b,{to:"/chat/"+e.id,style:{textDecoration:"none"},children:Object(s.jsx)(ae.a,{dense:!0,children:Object(s.jsxs)(ce.a,{children:[Object(s.jsx)(ie.a,{style:{marginRight:"3%"},className:t.large,children:" Y "}),Object(s.jsx)(oe.a,{classes:{primary:t.userName,secondary:t.userText},primary:"Yersultan",secondary:"blin u mneya trabli"})]})})})}),Object(s.jsx)("div",{className:"d-flex align-items-center mr-3",children:Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsx)(Ae.a,{color:"secondary",overlap:"circle",badgeContent:"+1",children:Object(s.jsx)(at.a,{style:{color:"#109CF1"},fontSize:"large"})}),Object(s.jsx)("div",{children:Object(s.jsx)(ge.a,{style:{backgroundColor:"#F7685B"},className:t.buttonPer,children:" \u041f\u0435\u0440\u0435\u0434\u0430\u0442\u044c "})})]})})]})})},ot=n(221),lt=Object(V.a)((function(e){return{main:Object(ee.a)({flexGrow:1,backgroundColor:"#E5E5E5",padding:3*e.spacing(3)},e.breakpoints.down("sm"),{padding:3*e.spacing(1)}),toolBar:e.mixins.toolbar}})),dt=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:1},{id:1}],jt=function(e){var t=lt(),n=Object(r.useState)(!0),a=Object(re.a)(n,2),c=a[0],i=a[1];return Object(s.jsxs)("main",{className:t.main,children:[Object(s.jsx)("div",{className:t.toolBar}),Object(s.jsx)("div",{id:"scrollableDiv",style:{height:"75vh",overflow:"auto"},children:Object(s.jsx)(ot.a,{dataLength:e.users.length,next:function(){e.users.length>=200?i(!1):setTimeout((function(){e.setUsersList(dt)}),1500)},hasMore:c,loader:Object(s.jsx)("h4",{children:" Loading... "}),scrollableTarget:"scrollableDiv",endMessage:Object(s.jsx)("p",{children:" that's all "}),children:e.users.map((function(e,t){return Object(s.jsx)(it,{id:e.id})}))})})]})},ut=Object(d.b)((function(e){return{users:e.usersPage.users}}),{setUsersList:function(e){return{type:U,users:e}}})((function(e){return Object(s.jsx)(jt,{setUsersList:e.setUsersList,users:e.users})})),bt=Object(V.a)((function(e){return{main:Object(ee.a)({flexGrow:1,backgroundColor:"#E5E5E5",padding:3*e.spacing(3)},e.breakpoints.down("sm"),{padding:3*e.spacing(1)}),toolBar:e.mixins.toolbar}})),pt=function(){var e=bt();return Object(s.jsxs)("main",{className:e.main,children:[Object(s.jsx)("div",{className:e.toolBar}),Object(s.jsx)("div",{children:" Welcome to Settings page "})]})},xt=Object(V.a)((function(e){return{main:Object(ee.a)({flexGrow:1,backgroundColor:"#E5E5E5",padding:3*e.spacing(3)},e.breakpoints.down("sm"),{padding:3*e.spacing(1)}),toolBar:e.mixins.toolbar}})),ht=function(){var e=xt();return Object(s.jsxs)("main",{className:e.main,children:[Object(s.jsx)("div",{className:e.toolBar}),Object(s.jsx)("div",{children:"Welcome to Tape page"})]})},mt=Object(V.a)((function(e){return{root:{flexGrow:1,height:"100vh",zIndex:1,overflow:"hidden",position:"relative",display:"flex",backgroundColor:"#E5E5E5"}}})),Ot=Object(j.d)((function(e){return Object(d.b)((function(e){return{isAuth:e.authPage.isAuth}}))((function(t){return t.isAuth?Object(s.jsx)(e,Object(p.a)({},t)):Object(s.jsx)(X.a,{to:"/login"})}))}),Object(d.b)((function(e){return{user:e.authPage.user}}),{}))((function(e){var t=mt();return e.user?Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)(Re,{}),Object(s.jsx)(Ne,{}),Object(s.jsx)(X.b,{exact:!0,path:"/",render:function(){return Object(s.jsx)(ut,{})}}),Object(s.jsx)(X.b,{exact:!0,path:"/chat/:id/",render:function(){return Object(s.jsx)(st,{})}}),Object(s.jsx)(X.b,{exact:!0,path:"/settings",render:function(){return Object(s.jsx)(pt,{})}}),Object(s.jsx)(X.b,{exact:!0,path:"/tape",render:function(){return Object(s.jsx)(ht,{})}})]}):Object(s.jsx)("div",{})})),ft=n.p+"static/media/successLogo.693b0fb4.svg",gt=n(459),vt=n(460),yt=Object(V.a)((function(e){return{titleSuc:{fontFamily:"Poppins",color:"#4C5862",fontSize:"20px"},buttonSuc:{fontSize:"14px",color:"#FFFFFF",height:"32px",width:"120px",fontFamily:"Poppins"},card:{overflow:"visible"},session:{position:"relative",zIndex:4e3,minHeight:"100vh",display:"flex",flexDirection:"column"},background:{backgroundColor:"#E5E5E5;"},content:{padding:"40px ".concat(e.spacing(1),"px"),display:"flex",alignItems:"center",justifyContent:"center",flex:"1 0 auto",flexDirection:"column",minHeight:"100%",textAlign:"center"},wrapper:{flex:"none",maxWidth:"420px",width:"100%",margin:"0 auto"},logoT1:{color:"#109CF1"},logoT2:{fontFamily:"Poppins",fontSize:"26px",fontWeight:"bold",color:"#2d1674"}}})),St=function(){var e=yt();return Object(s.jsx)("div",{className:Me()(e.session,e.background),children:Object(s.jsx)("div",{className:e.content,children:Object(s.jsx)("div",{className:e.wrapper,children:Object(s.jsxs)(gt.a,{children:[Object(s.jsxs)("div",{className:"mt-2",children:[Object(s.jsxs)("span",{className:e.logoT2,children:[Object(s.jsx)("span",{className:e.logoT1,children:"Q"}),"PSY"]}),Object(s.jsx)("hr",{})]}),Object(s.jsx)(vt.a,{children:Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"mb-2",children:Object(s.jsx)("img",{src:ft})}),Object(s.jsx)("div",{className:"mb-3",children:Object(s.jsx)("span",{className:e.titleSuc,children:" \u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0412\u0430\u0448 \u043f\u0430\u0440\u043e\u043b\u044c \u0431\u044b\u043b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d! "})}),Object(s.jsx)(l.b,{to:"/login",style:{textDecoration:"none"},children:Object(s.jsx)(ge.a,{variant:"contained",style:{backgroundColor:"#098EDF"},className:e.buttonSuc,children:" \u0412\u043e\u0439\u0442\u0438 "})})]})})]})})})})},wt=n(198),kt=n(199),Ft=function(e){if(!e)return"\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},Tt=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 (@)":e?void 0:"\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"},Nt=function(e,t){return function(n){return n.length>t?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(t," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):n.length<e?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 ".concat(e," \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"):void 0}},Ct=function(e){if(null===/^(?=.*[a-zA-Z]).{1,}$/.exec(e))return"\u0425\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0430 \u0431\u0443\u043a\u0432\u0430"},Pt=n(463),Et=n(461),At=n(468),zt=n(462),Dt=n(465),It=n(222),_t=n.n(It),Bt=n(223),Lt=n.n(Bt),Wt=function(e){var t=e.label,n=e.input,r=e.meta,a=r.touched,c=r.invalid,i=r.error;return Object(s.jsx)(Pt.a,Object(p.a)({label:t,placeholder:t,type:"text",error:a&&c,helperText:a&&i,fullWidth:!0},n))},Ht=function(e){var t=e.input;return Object(s.jsx)(Dt.a,Object(p.a)({style:{color:"#098EDF"}},t))},Rt=function(e){var t=e.label,n=e.input,r=e.meta,c=r.touched,i=r.invalid,o=r.error,l=a.a.useState({showPassword:!1}),d=Object(re.a)(l,2),j=d[0],u=d[1];return Object(s.jsxs)(Et.a,{fullWidth:!0,error:c&&o,children:[Object(s.jsxs)(At.a,{children:[" ",t," "]}),Object(s.jsx)(qe.a,Object(p.a)({fullWidth:!0,error:c&&i,helperText:c&&o,type:j.showPassword?"text":"password",endAdornment:Object(s.jsx)(Je.a,{position:"end",children:Object(s.jsx)(Ee.a,{"aria-label":"toggle password visibility",onClick:function(){u(Object(p.a)(Object(p.a)({},j),{},{showPassword:!j.showPassword}))},onMouseDown:function(e){e.preventDefault()},children:j.showPassword?Object(s.jsx)(_t.a,{}):Object(s.jsx)(Lt.a,{})})})},n)),c&&o&&Object(s.jsxs)(zt.a,{id:"component-error-text",children:[" ",o," "]})]})},Ut=Object(V.a)((function(e){return{rememberMe:{fontFamily:"Poppins",fontSize:"13px",color:"#4C5862"},forgotPassword:{fontFamily:"Poppins",fontSize:"13px",color:"#109CF1",fontWeight:"bold"},card:{overflow:"visible"},session:{position:"relative",zIndex:4e3,minHeight:"100vh",display:"flex",flexDirection:"column"},background:{backgroundColor:"#E5E5E5;"},content:{padding:"40px ".concat(e.spacing(1),"px"),display:"flex",alignItems:"center",justifyContent:"center",flex:"1 0 auto",flexDirection:"column",minHeight:"100%",textAlign:"center"},wrapper:{flex:"none",maxWidth:"420px",width:"100%",margin:"0 auto"},logoT1:{color:"#109CF1"},logoT2:{fontFamily:"Poppins",fontSize:"26px",fontWeight:"bold",color:"#2d1674"},errorText:{fontFamily:"Poppins",color:"red",padding:"1% 0 1% 0",fontSize:"14px",marginBottom:"4%"}}})),Gt=Nt(5,50),Mt=Object(kt.a)({form:"login"})((function(e){var t=Ut();return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[e.error&&Object(s.jsx)("div",{className:t.errorText,children:e.error}),Object(s.jsx)("div",{children:Object(s.jsx)(wt.a,{name:"email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",component:Wt,validate:[Tt,Gt]})}),Object(s.jsx)("div",{className:"mt-5 mb-4",children:Object(s.jsx)(wt.a,{name:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",component:Rt,validate:[Ft,Gt]})}),Object(s.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(s.jsxs)("div",{children:[Object(s.jsx)(wt.a,{name:"remember_me",component:Ht,type:"checkbox"})," ",Object(s.jsx)("span",{className:t.rememberMe,children:" \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c "})]}),Object(s.jsx)("div",{children:Object(s.jsx)(ge.a,{variant:"contained",type:"submit",style:{backgroundColor:"#098EDF",color:"#FFFFFF",width:"120px",height:"30px"},children:" \u0412\u043e\u0439\u0442\u0438 "})})]}),Object(s.jsx)("div",{className:"d-flex justify-content-start pl-5",children:Object(s.jsx)(l.b,{to:"/email_recovery",style:{textDecoration:"none"},children:Object(s.jsx)("span",{className:t.forgotPassword,children:" \u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c? "})})})]})})),Yt=function(e){var t=Ut();return e.isAuth?Object(s.jsx)(X.a,{to:"/"}):Object(s.jsx)("div",{className:Me()(t.session,t.background),children:Object(s.jsx)("div",{className:t.content,children:Object(s.jsx)("div",{className:t.wrapper,children:Object(s.jsxs)(gt.a,{children:[Object(s.jsxs)("div",{className:"mt-2",children:[Object(s.jsxs)("span",{className:t.logoT2,children:[Object(s.jsx)("span",{className:t.logoT1,children:"Q"}),"PSY"]}),Object(s.jsx)("hr",{})]}),Object(s.jsx)(vt.a,{children:Object(s.jsx)(Mt,{onSubmit:function(t){var n=!!t.remember_me;e.loginThunk(t.email,t.password,n)}})})]})})})})},qt=Object(d.b)((function(e){return{isAuth:e.authPage.isAuth}}),{loginThunk:function(e,t,n){return function(){var s=Object(m.a)(h.a.mark((function s(r){var a,c;return h.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,y(e,t);case 3:a=s.sent,c=n?7:1,f.a.set("access",a.access,{expires:c}),r({type:F,payload:a}),r(I()),s.next=14;break;case 10:s.prev=10,s.t0=s.catch(0),r(Object(g.b)("login",{_error:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"})),r({type:T});case 14:case"end":return s.stop()}}),s,null,[[0,10]])})));return function(e){return s.apply(this,arguments)}}()}})((function(e){return Object(s.jsx)(Yt,{loginThunk:e.loginThunk,isAuth:e.isAuth})})),Jt=Object(d.b)(null,{loadUserThunk:I})((function(e){return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsx)(s.Fragment,{children:e.children})})),Qt=Object(V.a)((function(e){return{root:{fontFamily:"Poppins"},titleEmail:{color:"#4C5862",fontSize:"14px"},buttonEmail:{fontSize:"14px",color:"#FFFFFF",height:"30px",fontFamily:"Poppins"},card:{overflow:"visible"},session:{position:"relative",zIndex:4e3,minHeight:"100vh",display:"flex",flexDirection:"column"},background:{backgroundColor:"#E5E5E5;"},content:{padding:"40px ".concat(e.spacing(1),"px"),display:"flex",alignItems:"center",justifyContent:"center",flex:"1 0 auto",flexDirection:"column",minHeight:"100%",textAlign:"center"},wrapper:{flex:"none",maxWidth:"420px",width:"100%",margin:"0 auto"},logoT1:{color:"#109CF1"},logoT2:{fontFamily:"Poppins",fontSize:"26px",fontWeight:"bold",color:"#2d1674"}}})),Zt=Nt(5,50),$t=Object(kt.a)({form:"email_recovery"})((function(e){var t=Qt();return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{className:"my-4",children:Object(s.jsx)(wt.a,{name:"email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",component:Wt,validate:[Tt,Zt]})}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)(ge.a,{variant:"contained",type:"submit",className:t.buttonEmail,style:{backgroundColor:"#098EDF"},children:" \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c "})})]})})),Kt=function(e){var t=Qt();return Object(s.jsx)("div",{className:Me()(t.session,t.background),children:Object(s.jsx)("div",{className:t.content,children:Object(s.jsx)("div",{className:t.wrapper,children:Object(s.jsxs)(gt.a,{children:[Object(s.jsxs)("div",{className:"mt-2",children:[Object(s.jsxs)("span",{className:t.logoT2,children:[Object(s.jsx)("span",{className:t.logoT1,children:"Q"}),"PSY"]}),Object(s.jsx)("hr",{})]}),Object(s.jsx)(vt.a,{children:Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)("div",{className:"d-flex justify-content-start",children:Object(s.jsx)("span",{className:t.titleEmail,children:" \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043f\u043e\u0447\u0442\u0443. "})}),Object(s.jsx)("div",{children:Object(s.jsx)($t,{onSubmit:function(t){e.resetPasswordThunk(t.email)}})})]})})]})})})})},Xt=Object(d.b)((function(e){return{}}),{resetPasswordThunk:function(e){return function(){var t=Object(m.a)(h.a.mark((function t(n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:n(Object(g.a)("email_recovery")),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){return Object(s.jsx)(Kt,{resetPasswordThunk:e.resetPasswordThunk})})),Vt=Object(V.a)((function(e){return{titlePas:{fontFamily:"Poppins",color:"#4C5862",fontSize:"14px"},buttonPass:{fontSize:"14px",color:"#FFFFFF",height:"32px",fontFamily:"Poppins"},card:{overflow:"visible"},session:{position:"relative",zIndex:4e3,minHeight:"100vh",display:"flex",flexDirection:"column"},background:{backgroundColor:"#E5E5E5;"},content:{padding:"40px ".concat(e.spacing(1),"px"),display:"flex",alignItems:"center",justifyContent:"center",flex:"1 0 auto",flexDirection:"column",minHeight:"100%",textAlign:"center"},wrapper:{flex:"none",maxWidth:"420px",width:"100%",margin:"0 auto"},logoT1:{color:"#109CF1"},logoT2:{fontFamily:"Poppins",fontSize:"26px",fontWeight:"bold",color:"#2d1674"},errorText:{fontFamily:"Poppins",fontSize:"14px",color:"red",marginBottom:"5%"}}})),en=Nt(5,50),tn=Object(kt.a)({form:"password_recovery"})((function(e){var t=Vt();return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[e.error&&Object(s.jsx)("div",{className:t.errorText,children:e.error}),Object(s.jsx)("div",{className:"d-flex justify-content-start",children:Object(s.jsx)("span",{className:t.titlePas,children:" \u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u043e\u043b\u044f "})}),Object(s.jsx)("div",{className:"my-3",children:Object(s.jsx)(wt.a,{name:"new_password",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",component:Rt,validate:[Ft,en,Ct]})}),Object(s.jsx)("div",{className:"my-4",children:Object(s.jsx)(wt.a,{name:"re_new_password",label:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c",component:Rt,validate:[Ft,en,Ct]})}),Object(s.jsx)("div",{className:"d-flex justify-content-end",children:Object(s.jsx)(ge.a,{variant:"contained",type:"submit",style:{backgroundColor:"#098EDF"},className:t.buttonPass,children:" \u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u0440\u043e\u043b\u044c "})})]})})),nn=function(e){var t=Vt();if(e.confirmSuccess)return Object(s.jsx)(X.a,{to:"/success"});console.log(e.confirmSuccess);return Object(s.jsx)("div",{className:Me()(t.session,t.background),children:Object(s.jsx)("div",{className:t.content,children:Object(s.jsx)("div",{className:t.wrapper,children:Object(s.jsxs)(gt.a,{children:[Object(s.jsxs)("div",{className:"mt-2",children:[Object(s.jsxs)("span",{className:t.logoT2,children:[Object(s.jsx)("span",{className:t.logoT1,children:"Q"}),"PSY"]}),Object(s.jsx)("hr",{})]}),Object(s.jsx)(vt.a,{children:Object(s.jsx)("div",{children:Object(s.jsx)("div",{children:Object(s.jsx)(tn,{onSubmit:function(t){e.resetConfirmThunk(e.uid,e.token,t.new_password,t.re_new_password)}})})})})]})})})})},sn=Object(j.d)(X.h,Object(d.b)((function(e){return{confirmSuccess:e.authPage.confirmSuccess}}),{resetConfirmThunk:function(e,t,n,s){return function(){var r=Object(m.a)(h.a.mark((function r(a){return h.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n!==s){r.next=12;break}return r.prev=1,r.next=4,k(e,t,n);case 4:a({type:A,confirmSuccess:!0}),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),console.log(r.t0);case 10:r.next=13;break;case 12:a(Object(g.b)("password_recovery",{_error:" \u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u043f\u0430\u0440\u043e\u043b\u044c \u0438 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435."}));case 13:case"end":return r.stop()}}),r,null,[[1,7]])})));return function(e){return r.apply(this,arguments)}}()}}))((function(e){var t=e.match.params.uid,n=e.match.params.token;return Object(s.jsx)(nn,{uid:t,token:n,resetConfirmThunk:e.resetConfirmThunk,confirmSuccess:e.confirmSuccess})})),rn=function(e){Object($.a)(n,e);var t=Object(K.a)(n);function n(){return Object(Q.a)(this,n),t.apply(this,arguments)}return Object(Z.a)(n,[{key:"componentDidMount",value:function(){this.props.initSuccessThunk()}},{key:"render",value:function(){return this.props.initialized?Object(s.jsx)(Jt,{children:Object(s.jsxs)(X.d,{children:[Object(s.jsx)(X.b,{exact:!0,path:"/login",render:function(){return Object(s.jsx)(qt,{})}}),Object(s.jsx)(X.b,{exact:!0,path:"/email_recovery",render:function(){return Object(s.jsx)(Xt,{})}}),Object(s.jsx)(X.b,{exact:!0,path:"/password/reset/confirm/:uid/:token",render:function(){return Object(s.jsx)(sn,{})}}),Object(s.jsx)(X.b,{exact:!0,path:"/success",render:function(){return Object(s.jsx)(St,{})}}),Object(s.jsx)(Ot,{})]})}):Object(s.jsx)("div",{})}}]),n}(a.a.Component),an=Object(d.b)((function(e){return{initialized:e.appPage.initialized}}),{initSuccessThunk:function(){return function(e){var t=e(function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("access")?t({type:P}):t({type:E});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n=e(I());Promise.all([t,n]).then((function(){e({type:L})}))}}})(rn);i.a.render(Object(s.jsx)(l.a,{basename:"/qpsy-app",children:Object(s.jsx)(d.a,{store:J,children:Object(s.jsx)(an,{})})}),document.getElementById("root")),o()}},[[410,1,2]]]);
//# sourceMappingURL=main.f68ed480.chunk.js.map