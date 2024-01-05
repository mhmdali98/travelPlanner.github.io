"use strict";(self["webpackChunkvue3temp"]=self["webpackChunkvue3temp"]||[]).push([[883],{4883:function(e,t,l){l.d(t,{L:function(){return N}});var a=l(3396),o=l(9166),u=l(1138),n=l(3766),i=l(1107),r=l(9888);const s=(0,n.U)({text:String,...(0,o.l)(),...(0,u.Q)()},"VToolbarTitle"),v=(0,i.ev)()({name:"VToolbarTitle",props:s(),setup(e,t){let{slots:l}=t;return(0,r.L)((()=>{const t=!!(l.default||l.text||e.text);return(0,a.Wm)(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[t&&(0,a.Wm)("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,l.default?.()])]})})),{}}});var c=l(8952),d=l(836),m=l(8694),p=l(2718),f=l(2370),y=l(6107),g=l(2465),h=l(6037),b=l(4231),S=l(5935),x=l(4870),I=l(131);const F=[null,"prominent","default","comfortable","compact"],w=(0,n.U)({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>F.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...(0,p.m)(),...(0,o.l)(),...(0,g.c)(),...(0,b.I)(),...(0,u.Q)({tag:"header"}),...(0,S.x$)()},"VToolbar"),V=(0,i.ev)()({name:"VToolbar",props:w(),setup(e,t){let{slots:l}=t;const{backgroundColorClasses:o,backgroundColorStyles:u}=(0,f.Y5)((0,x.Vh)(e,"color")),{borderClasses:n}=(0,p.P)(e),{elevationClasses:i}=(0,g.Y)(e),{roundedClasses:s}=(0,b.b)(e),{themeClasses:F}=(0,S.ER)(e),{rtlClasses:w}=(0,h.Vw)(),V=(0,x.XI)(!(!e.extended&&!l.extension?.())),k=(0,a.Fl)((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),$=(0,a.Fl)((()=>V.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0));return(0,y.AF)({VBtn:{variant:"text"}}),(0,r.L)((()=>{const t=!(!e.title&&!l.title),r=!(!l.image&&!e.image),p=l.extension?.();return V.value=!(!e.extended&&!p),(0,a.Wm)(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,n.value,i.value,s.value,F.value,w.value,e.class],style:[u.value,e.style]},{default:()=>[r&&(0,a.Wm)("div",{key:"image",class:"v-toolbar__image"},[l.image?(0,a.Wm)(d.z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):(0,a.Wm)(m.f,{key:"image-img",cover:!0,src:e.image},null)]),(0,a.Wm)(d.z,{defaults:{VTabs:{height:(0,I.kb)(k.value)}}},{default:()=>[(0,a.Wm)("div",{class:"v-toolbar__content",style:{height:(0,I.kb)(k.value)}},[l.prepend&&(0,a.Wm)("div",{class:"v-toolbar__prepend"},[l.prepend?.()]),t&&(0,a.Wm)(v,{key:"title",text:e.title},{text:l.title}),l.default?.(),l.append&&(0,a.Wm)("div",{class:"v-toolbar__append"},[l.append?.()])])]}),(0,a.Wm)(d.z,{defaults:{VTabs:{height:(0,I.kb)($.value)}}},{default:()=>[(0,a.Wm)(c.Fx,null,{default:()=>[V.value&&(0,a.Wm)("div",{class:"v-toolbar__extension",style:{height:(0,I.kb)($.value)}},[p])]})]})]})})),{contentHeight:k,extensionHeight:$}}});var k=l(7396),$=l(8717),T=l(6033);const W=(0,n.U)({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function B(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{canScroll:l}=t;let o=0;const u=(0,x.iH)(null),n=(0,x.XI)(0),i=(0,x.XI)(0),r=(0,x.XI)(0),s=(0,x.XI)(!1),v=(0,x.XI)(!1),c=(0,a.Fl)((()=>Number(e.scrollThreshold))),d=(0,a.Fl)((()=>(0,I.uZ)((c.value-n.value)/c.value||0))),m=()=>{const e=u.value;!e||l&&!l.value||(o=n.value,n.value="window"in e?e.pageYOffset:e.scrollTop,v.value=n.value<o,r.value=Math.abs(n.value-c.value))};return(0,a.YP)(v,(()=>{i.value=i.value||n.value})),(0,a.YP)(s,(()=>{i.value=0})),(0,a.bv)((()=>{(0,a.YP)((()=>e.scrollTarget),(e=>{const t=e?document.querySelector(e):window;t?t!==u.value&&(u.value?.removeEventListener("scroll",m),u.value=t,u.value.addEventListener("scroll",m,{passive:!0})):(0,T.Kd)(`Unable to locate element with identifier ${e}`)}),{immediate:!0})})),(0,a.Jd)((()=>{u.value?.removeEventListener("scroll",m)})),l&&(0,a.YP)(l,m,{immediate:!0}),{scrollThreshold:c,currentScroll:n,currentThreshold:r,isScrollActive:s,scrollRatio:d,isScrollingUp:v,savedScroll:i}}var z=l(1372),C=l(4770);const L=(0,n.U)({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...w(),...(0,k.o8)(),...W(),height:{type:[Number,String],default:64}},"VAppBar"),N=(0,i.ev)()({name:"VAppBar",props:L(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:l}=t;const o=(0,x.iH)(),u=(0,$.z)(e,"modelValue"),n=(0,a.Fl)((()=>{const t=new Set(e.scrollBehavior?.split(" ")??[]);return{hide:t.has("hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}})),i=(0,a.Fl)((()=>{const e=n.value;return e.hide||e.inverted||e.collapse||e.elevate||e.fadeImage||!u.value})),{currentScroll:s,scrollThreshold:v,isScrollingUp:c,scrollRatio:d}=B(e,{canScroll:i}),m=(0,a.Fl)((()=>e.collapse||n.value.collapse&&(n.value.inverted?d.value>0:0===d.value))),p=(0,a.Fl)((()=>e.flat||n.value.elevate&&(n.value.inverted?s.value>0:0===s.value))),f=(0,a.Fl)((()=>n.value.fadeImage?n.value.inverted?1-d.value:d.value:void 0)),y=(0,a.Fl)((()=>{if(n.value.hide&&n.value.inverted)return 0;const e=o.value?.contentHeight??0,t=o.value?.extensionHeight??0;return e+t}));(0,C.U)((0,a.Fl)((()=>!!e.scrollBehavior)),(()=>{(0,a.m0)((()=>{n.value.hide?n.value.inverted?u.value=s.value>v.value:u.value=c.value||s.value<v.value:u.value=!0}))}));const{ssrBootStyles:g}=(0,z.u)(),{layoutItemStyles:h}=(0,k.eW)({id:e.name,order:(0,a.Fl)((()=>parseInt(e.order,10))),position:(0,x.Vh)(e,"location"),layoutSize:y,elementSize:(0,x.XI)(void 0),active:u,absolute:(0,x.Vh)(e,"absolute")});return(0,r.L)((()=>{const t=V.filterProps(e);return(0,a.Wm)(V,(0,a.dG)({ref:o,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{...h.value,"--v-toolbar-image-opacity":f.value,height:void 0,...g.value},e.style]},t,{collapse:m.value,flat:p.value}),l)})),{}}})},7396:function(e,t,l){l.d(t,{$Y:function(){return p},GB:function(){return d},eW:function(){return f},o8:function(){return m},te:function(){return g}});l(7658);var a=l(3712),o=l(3396),u=l(4870),n=l(3766),i=l(7514),r=l(131);const s=Symbol.for("vuetify:layout"),v=Symbol.for("vuetify:layout-item"),c=1e3,d=(0,n.U)({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),m=(0,n.U)({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function p(){const e=(0,o.f3)(s);if(!e)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function f(e){const t=(0,o.f3)(s);if(!t)throw new Error("[Vuetify] Could not find injected layout");const l=e.id??`layout-item-${(0,i.sq)()}`,a=(0,i.FN)("useLayoutItem");(0,o.JJ)(v,{id:l});const n=(0,u.XI)(!1);(0,o.se)((()=>n.value=!0)),(0,o.dl)((()=>n.value=!1));const{layoutItemStyles:r,layoutItemScrimStyles:c}=t.register(a,{...e,active:(0,o.Fl)((()=>!n.value&&e.active.value)),id:l});return(0,o.Jd)((()=>t.unregister(l))),{layoutItemStyles:r,layoutRect:t.layoutRect,layoutItemScrimStyles:c}}const y=(e,t,l,a)=>{let o={top:0,left:0,right:0,bottom:0};const u=[{id:"",layer:{...o}}];for(const n of e){const e=t.get(n),i=l.get(n),r=a.get(n);if(!e||!i||!r)continue;const s={...o,[e.value]:parseInt(o[e.value],10)+(r.value?parseInt(i.value,10):0)};u.push({id:n,layer:s}),o=s}return u};function g(e){const t=(0,o.f3)(s,null),l=(0,o.Fl)((()=>t?t.rootZIndex.value-100:c)),n=(0,u.iH)([]),d=(0,u.qj)(new Map),m=(0,u.qj)(new Map),p=(0,u.qj)(new Map),f=(0,u.qj)(new Map),g=(0,u.qj)(new Map),{resizeRef:h,contentRect:b}=(0,a.y)(),S=(0,o.Fl)((()=>{const t=new Map,l=e.overlaps??[];for(const e of l.filter((e=>e.includes(":")))){const[l,a]=e.split(":");if(!n.value.includes(l)||!n.value.includes(a))continue;const o=d.get(l),u=d.get(a),i=m.get(l),r=m.get(a);o&&u&&i&&r&&(t.set(a,{position:o.value,amount:parseInt(i.value,10)}),t.set(l,{position:u.value,amount:-parseInt(r.value,10)}))}return t})),x=(0,o.Fl)((()=>{const e=[...new Set([...p.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[];for(const l of e){const e=n.value.filter((e=>p.get(e)?.value===l));t.push(...e)}return y(t,d,m,f)})),I=(0,o.Fl)((()=>!Array.from(g.values()).some((e=>e.value)))),F=(0,o.Fl)((()=>x.value[x.value.length-1].layer)),w=(0,o.Fl)((()=>({"--v-layout-left":(0,r.kb)(F.value.left),"--v-layout-right":(0,r.kb)(F.value.right),"--v-layout-top":(0,r.kb)(F.value.top),"--v-layout-bottom":(0,r.kb)(F.value.bottom),...I.value?void 0:{transition:"none"}}))),V=(0,o.Fl)((()=>x.value.slice(1).map(((e,t)=>{let{id:l}=e;const{layer:a}=x.value[t],o=m.get(l),u=d.get(l);return{id:l,...a,size:Number(o.value),position:u.value}})))),k=e=>V.value.find((t=>t.id===e)),$=(0,i.FN)("createLayout"),T=(0,u.XI)(!1);(0,o.bv)((()=>{T.value=!0})),(0,o.JJ)(s,{register:(e,t)=>{let{id:a,order:u,position:i,layoutSize:s,elementSize:y,active:h,disableTransitions:b,absolute:F}=t;p.set(a,u),d.set(a,i),m.set(a,s),f.set(a,h),b&&g.set(a,b);const w=(0,r.bY)(v,$?.vnode),k=w.indexOf(e);k>-1?n.value.splice(k,0,a):n.value.push(a);const W=(0,o.Fl)((()=>V.value.findIndex((e=>e.id===a)))),B=(0,o.Fl)((()=>l.value+2*x.value.length-2*W.value)),z=(0,o.Fl)((()=>{const e="left"===i.value||"right"===i.value,t="right"===i.value,o="bottom"===i.value,u={[i.value]:0,zIndex:B.value,transform:`translate${e?"X":"Y"}(${(h.value?0:-110)*(t||o?-1:1)}%)`,position:F.value||l.value!==c?"absolute":"fixed",...I.value?void 0:{transition:"none"}};if(!T.value)return u;const n=V.value[W.value];if(!n)throw new Error(`[Vuetify] Could not find layout item "${a}"`);const r=S.value.get(a);return r&&(n[r.position]+=r.amount),{...u,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:y.value?`${y.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==i.value?`${n.top}px`:void 0,bottom:"top"!==i.value?`${n.bottom}px`:void 0,width:e?y.value?`${y.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),C=(0,o.Fl)((()=>({zIndex:B.value-1})));return{layoutItemStyles:z,layoutItemScrimStyles:C,zIndex:B}},unregister:e=>{p.delete(e),d.delete(e),m.delete(e),f.delete(e),g.delete(e),n.value=n.value.filter((t=>t!==e))},mainRect:F,mainStyles:w,getLayoutItem:k,items:V,layoutRect:b,rootZIndex:l});const W=(0,o.Fl)((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),B=(0,o.Fl)((()=>({zIndex:t?l.value:void 0,position:t?"relative":void 0,overflow:t?"hidden":void 0})));return{layoutClasses:W,layoutStyles:B,getLayoutItem:k,items:V,layoutRect:b,layoutRef:h}}}}]);
//# sourceMappingURL=883.d18becfe.js.map