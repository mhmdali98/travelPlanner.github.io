"use strict";(self["webpackChunkvue3temp"]=self["webpackChunkvue3temp"]||[]).push([[116],{116:function(e,l,t){t.r(l),t.d(l,{default:function(){return W}});t(7658);var a=t(3396),r=t(7139),o=t(4870),n=t(3815),i=t(9221),s=t(2483),u=t(4239),c=t(7771),d=t(7312),v=t(1489),p=t(6572),m=t(4075),y=t(3369),f=t(6824),h=t(8521),b=t(165);const g=(0,a._)("p",{class:"py-4"},"او",-1),k={class:"text-right pt-6"};var x={__name:"login",setup(e){const l=(0,u.A)(),t=(0,o.iH)([]),x=["#fff3f3","#fff9f3","#ffe9e3"],w=(0,o.iH)(""),W=(0,o.iH)(""),_=(0,s.tv)(),C=(0,o.iH)({required:e=>!!e||"الحقل مطلوب",min:e=>e.length>=8||"يجب ان يتكون من 8 رموز او اكثر"}),S=(0,o.iH)(!1),V=(0,o.iH)(),U=(0,o.iH)(!1),H=()=>{V.value=null,U.value=!0,(0,i.e5)(n.I,w.value,W.value).then((e=>{l.userData=e.user,localStorage.setItem("userData",JSON.stringify(e.user)),_.push("/dashboard/allTravelsPage")})).catch((e=>{switch(e.code){case"auth/invalid-email":V.value=" البريد او كلمة المرور غير صحيحة  ";break;case"auth/user-not-found":V.value="المستخدم غير موجود";break;case"auth/wrong-password":V.value=" البريد او كلمة المرور غير صحيحة";break;default:V.value="البريد او كلمة المرور غير صحيحة";break}})).finally((()=>{U.value=!1}))},z=()=>{const e=new i.hJ;(0,i.rh)((0,i.v0)(),e).then((e=>{l.userData=e.user,localStorage.setItem("userData",JSON.stringify(e.user)),_.push("/dashboard/allTravelsPage")})).catch((e=>{}))},D=()=>{const e=T(),l=Array.from({length:10},(()=>({style:{top:Math.floor(Math.random()*window.innerHeight)+"px",left:Math.floor(Math.random()*window.innerWidth)+"px",backgroundColor:I(),width:e+"px",height:e+"px"}})));t.value=l},I=()=>x[Math.floor(Math.random()*x.length)],T=()=>Math.floor(50*Math.random())+20;return(0,a.bv)((()=>{D()})),(e,l)=>{const o=(0,a.Q2)("motion");return(0,a.wg)(),(0,a.j4)(y.K,null,{default:(0,a.w5)((()=>[(0,a.Wm)(f.o,{class:"pt-12"},{default:(0,a.w5)((()=>[(0,a.Wm)(h.D,{class:"text-center"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.value,((e,l)=>(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{initial:{opacity:.9,y:10},enter:{opacity:1,y:0,transition:{delay:500,repeat:1/0,duration:1500,repeatType:"mirror"}},key:l,class:"circle",style:(0,r.j5)(e.style)},null,4)),[[o]]))),128)),(0,a.wy)(((0,a.wg)(),(0,a.j4)(v._,{elevation:"12",style:{margin:"auto"},"max-width":"350",rounded:"xl",class:"pa-6",initial:{opacity:0,x:100},enter:{opacity:1,x:0,scale:1,transition:{duration:200}},variants:{custom:{scale:2}},delay:200},{default:(0,a.w5)((()=>[(0,a.Wm)(p.E,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" الدخول لحسابي ")])),_:1}),V.value?((0,a.wg)(),(0,a.j4)(c.w,{key:0,class:"my-4",color:"error"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,r.zw)(V.value),1)])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(b.h,{variant:"outlined","prepend-inner-icon":"mdi-email",placeholder:"البريد الالكتروني ",color:"primary",clearable:"",rounded:"xl",modelValue:w.value,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value=e),type:"text",label:"البريد الالكتروني",rules:[C.value.required],class:"my-4"},null,8,["modelValue","rules"]),(0,a.Wm)(b.h,{variant:"outlined","prepend-inner-icon":"mdi-lock",placeholder:"كلمة المرور  ",color:"primary",clearable:"",rounded:"xl",modelValue:W.value,"onUpdate:modelValue":l[1]||(l[1]=e=>W.value=e),label:"كلمة المرور ","append-inner-icon":S.value?"mdi-eye":"mdi-eye-off",rules:[C.value.required,C.value.min],type:S.value?"text":"password","onClick:appendInner":l[2]||(l[2]=e=>S.value=!S.value),hint:"يجب ان يتكون من 8 رموز"},null,8,["modelValue","append-inner-icon","rules","type"]),(0,a.Wm)(d.T,{loading:U.value,color:"primary",block:"",onClick:H},{default:(0,a.w5)((()=>[(0,a.Uk)("الدخول")])),_:1},8,["loading"]),g,(0,a.Wm)(d.T,{color:"primary",variant:"outlined",onClick:z,block:""},{default:(0,a.w5)((()=>[(0,a.Uk)("التسجيل بحساب google")])),_:1}),(0,a.Wm)(m.J,{color:"grey"}),(0,a._)("p",k,[(0,a.Uk)(" ليس لديك حساب ؟ "),(0,a.Wm)(d.T,{class:"px-0 mx-0",variant:"text",to:"register",color:"primary"},{default:(0,a.w5)((()=>[(0,a.Uk)("التسجيل")])),_:1})])])),_:1})),[[o]])])),_:1})])),_:1})])),_:1})}}};const w=x;var W=w},7771:function(e,l,t){t.d(l,{w:function(){return U}});var a=t(3396),r=t(1114);const o=(0,r.J)("v-alert-title");var n=t(7312),i=t(836),s=t(3289),u=t(2370),c=t(9166),d=t(9694),v=t(4544),p=t(2465),m=t(4960),y=t(6037),f=t(5180),h=t(489),b=t(8717),g=t(4231),k=t(1138),x=t(5935),w=t(5221),W=t(4870),_=t(3766),C=t(1107);const S=["success","info","warning","error"],V=(0,_.U)({border:{type:[Boolean,String],validator:e=>"boolean"===typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:m.lE,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>S.includes(e)},...(0,c.l)(),...(0,d.f)(),...(0,v.x)(),...(0,p.c)(),...(0,f.y)(),...(0,h.F)(),...(0,g.I)(),...(0,k.Q)(),...(0,x.x$)(),...(0,w.bk)({variant:"flat"})},"VAlert"),U=(0,C.ev)()({name:"VAlert",props:V(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,l){let{emit:t,slots:r}=l;const c=(0,b.z)(e,"modelValue"),m=(0,a.Fl)((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),k=(0,a.Fl)((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:_}=(0,x.ER)(e),{colorClasses:C,colorStyles:S,variantClasses:V}=(0,w.c1)(k),{densityClasses:U}=(0,d.t)(e),{dimensionStyles:H}=(0,v.$)(e),{elevationClasses:z}=(0,p.Y)(e),{locationStyles:D}=(0,f.T)(e),{positionClasses:I}=(0,h.K)(e),{roundedClasses:T}=(0,g.b)(e),{textColorClasses:$,textColorStyles:B}=(0,u.rY)((0,W.Vh)(e,"borderColor")),{t:M}=(0,y.bU)(),F=(0,a.Fl)((()=>({"aria-label":M(e.closeLabel),onClick(e){c.value=!1,t("click:close",e)}})));return()=>{const l=!(!r.prepend&&!m.value),t=!(!r.title&&!e.title),u=!(!r.close&&!e.closable);return c.value&&(0,a.Wm)(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},_.value,C.value,U.value,z.value,I.value,T.value,V.value,e.class],style:[S.value,H.value,D.value,e.style],role:"alert"},{default:()=>[(0,w.Ux)(!1,"v-alert"),e.border&&(0,a.Wm)("div",{key:"border",class:["v-alert__border",$.value],style:B.value},null),l&&(0,a.Wm)("div",{key:"prepend",class:"v-alert__prepend"},[r.prepend?(0,a.Wm)(i.z,{key:"prepend-defaults",disabled:!m.value,defaults:{VIcon:{density:e.density,icon:m.value,size:e.prominent?44:28}}},r.prepend):(0,a.Wm)(s.t,{key:"prepend-icon",density:e.density,icon:m.value,size:e.prominent?44:28},null)]),(0,a.Wm)("div",{class:"v-alert__content"},[t&&(0,a.Wm)(o,{key:"title"},{default:()=>[r.title?.()??e.title]}),r.text?.()??e.text,r.default?.()]),r.append&&(0,a.Wm)("div",{key:"append",class:"v-alert__append"},[r.append()]),u&&(0,a.Wm)("div",{key:"close",class:"v-alert__close"},[r.close?(0,a.Wm)(i.z,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[r.close?.({props:F.value})]}):(0,a.Wm)(n.T,(0,a.dG)({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},F.value),null)])]})}}})},4075:function(e,l,t){t.d(l,{J:function(){return p}});var a=t(3396),r=t(2370),o=t(9166),n=t(5935),i=t(4870),s=t(3766),u=t(1107),c=t(131),d=t(9888);const v=(0,s.U)({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...(0,o.l)(),...(0,n.x$)()},"VDivider"),p=(0,u.ev)()({name:"VDivider",props:v(),setup(e,l){let{attrs:t}=l;const{themeClasses:o}=(0,n.ER)(e),{textColorClasses:s,textColorStyles:u}=(0,r.rY)((0,i.Vh)(e,"color")),v=(0,a.Fl)((()=>{const l={};return e.length&&(l[e.vertical?"maxHeight":"maxWidth"]=(0,c.kb)(e.length)),e.thickness&&(l[e.vertical?"borderRightWidth":"borderTopWidth"]=(0,c.kb)(e.thickness)),l}));return(0,d.L)((()=>(0,a.Wm)("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,s.value,e.class],style:[v.value,u.value,e.style],"aria-orientation":t.role&&"separator"!==t.role?void 0:e.vertical?"vertical":"horizontal",role:`${t.role||"separator"}`},null))),{}}})}}]);
//# sourceMappingURL=116.f9be5f12.js.map