(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[87960],{63882:(e,t,o)=>{"use strict";o.d(t,{B:()=>b});var n=o(72791),r=o(54164),i=o(80184),c=o(2043),a=o(13966),s=o(90356);const l=({className:e,containerRef:t,containerProps:o,children:r,isOpen:l,theming:u,transition:f,onClose:d})=>{const p=(0,c.us)(f,"item");return(0,i.jsx)("div",{...(0,c.dG)({onKeyDown:({key:e})=>{if(e===s.R8.ESC)(0,c.Dx)(d,{key:e,reason:s.GB.CANCEL})},onBlur:e=>{l&&!e.currentTarget.contains(e.relatedTarget)&&(0,c.Dx)(d,{reason:s.GB.BLUR})}},o),className:(0,a.l)({block:s.Kk,modifiers:(0,n.useMemo)((()=>({theme:u,itemTransition:p})),[u,p]),className:e}),style:{position:"absolute",...null==o?void 0:o.style},ref:t,children:r})},u=()=>{let e,t=0;return{toggle:e=>{e?t++:t--,t=Math.max(t,0)},on:(o,n,r)=>{t?e||(e=setTimeout((()=>{e=0,n()}),o)):null==r||r()},off:()=>{e&&(clearTimeout(e),e=0)}}},f=({anchorRect:e,containerRect:t,menuRect:o,placeLeftorRightY:n,placeLeftX:r,placeRightX:i,getLeftOverflow:c,getRightOverflow:a,confineHorizontally:s,confineVertically:l,arrowRef:u,arrow:f,direction:d,position:p})=>{let m,h,b,y=d,g=n;"initial"!==p&&(g=l(g),"anchor"===p&&(g=Math.min(g,e.bottom-t.top),g=Math.max(g,e.top-t.top-o.height))),"left"===y?(m=r,"initial"!==p&&(h=c(m),h<0&&(b=a(i),(b<=0||-h>b)&&(m=i,y="right")))):(m=i,"initial"!==p&&(b=a(m),b>0&&(h=c(r),(h>=0||-h<b)&&(m=r,y="left")))),"auto"===p&&(m=s(m));const v=f?(({arrowRef:e,menuY:t,anchorRect:o,containerRect:n,menuRect:r})=>{let i=o.top-n.top-t+o.height/2;const c=1.25*e.current.offsetHeight;return i=Math.max(c,i),i=Math.min(i,r.height-c),i})({menuY:g,arrowRef:u,anchorRect:e,containerRect:t,menuRect:o}):void 0;return{arrowY:v,x:m,y:g,computedDirection:y}},d=({anchorRect:e,containerRect:t,menuRect:o,placeToporBottomX:n,placeTopY:r,placeBottomY:i,getTopOverflow:c,getBottomOverflow:a,confineHorizontally:s,confineVertically:l,arrowRef:u,arrow:f,direction:d,position:p})=>{let m,h,b,y="top"===d?"top":"bottom",g=n;"initial"!==p&&(g=s(g),"anchor"===p&&(g=Math.min(g,e.right-t.left),g=Math.max(g,e.left-t.left-o.width))),"top"===y?(m=r,"initial"!==p&&(h=c(m),h<0&&(b=a(i),(b<=0||-h>b)&&(m=i,y="bottom")))):(m=i,"initial"!==p&&(b=a(m),b>0&&(h=c(r),(h>=0||-h<b)&&(m=r,y="top")))),"auto"===p&&(m=l(m));const v=f?(({arrowRef:e,menuX:t,anchorRect:o,containerRect:n,menuRect:r})=>{let i=o.left-n.left-t+o.width/2;const c=1.25*e.current.offsetWidth;return i=Math.max(c,i),i=Math.min(i,r.width-c),i})({menuX:g,arrowRef:u,anchorRect:e,containerRect:t,menuRect:o}):void 0;return{arrowX:v,x:g,y:m,computedDirection:y}};var p=o(94863),m=o(63365);const h=({ariaLabel:e,menuClassName:t,menuStyle:o,arrow:h,arrowProps:b={},anchorPoint:y,anchorRef:g,containerRef:v,containerProps:R,focusProps:w,externalRef:x,parentScrollingRef:C,align:E="start",direction:O="bottom",position:S="auto",overflow:k="visible",setDownOverflow:T,repositionFlag:D,captureFocus:P=!0,state:j,endTransition:N,isDisabled:A,menuItemFocus:M,gap:L=0,shift:U=0,children:I,onClose:B,...$})=>{const[_,H]=(0,n.useState)({x:-9999,y:-9999}),[X,z]=(0,n.useState)({}),[G,K]=(0,n.useState)(),[F,Y]=(0,n.useState)(O),[J]=(0,n.useState)(u),[W,Z]=(0,n.useReducer)((e=>e+1),1),{transition:Q,boundingBoxRef:V,boundingBoxPadding:q,rootMenuRef:ee,rootAnchorRef:te,scrollNodesRef:oe,reposition:ne,viewScroll:re,submenuCloseDelay:ie}=(0,n.useContext)(s.J6),{submenuCtx:ce,reposSubmenu:ae=D}=(0,n.useContext)(s.b7),se=(0,n.useRef)(null),le=(0,n.useRef)(),ue=(0,n.useRef)(),fe=(0,n.useRef)(!1),de=(0,n.useRef)({width:0,height:0}),pe=(0,n.useRef)((()=>{})),{hoverItem:me,dispatch:he,updateItems:be}=((e,t)=>{const[o,r]=(0,n.useState)(),i=(0,n.useRef)({items:[],hoverIndex:-1,sorted:!1}).current,a=(0,n.useCallback)(((e,o)=>{const{items:n}=i;if(e)if(o)n.push(e);else{const o=n.indexOf(e);o>-1&&(n.splice(o,1),e.contains(document.activeElement)&&(t.current.focus(),r()))}else i.items=[];i.hoverIndex=-1,i.sorted=!1}),[i,t]);return{hoverItem:o,dispatch:(0,n.useCallback)(((t,o,n)=>{const{items:a,hoverIndex:l}=i,u=()=>{if(i.sorted)return;const t=e.current.querySelectorAll(".szh-menu__item");a.sort(((e,o)=>(0,c.O)(t,e)-(0,c.O)(t,o))),i.sorted=!0};let f,d=-1;switch(t){case s.$U.RESET:break;case s.$U.SET:f=o;break;case s.$U.UNSET:f=e=>e===o?void 0:e;break;case s.$U.FIRST:u(),d=0,f=a[d];break;case s.$U.LAST:u(),d=a.length-1,f=a[d];break;case s.$U.SET_INDEX:u(),d=n,f=a[d];break;case s.$U.INCREASE:u(),d=l,d<0&&(d=a.indexOf(o)),d++,d>=a.length&&(d=0),f=a[d];break;case s.$U.DECREASE:u(),d=l,d<0&&(d=a.indexOf(o)),d--,d<0&&(d=a.length-1),f=a[d]}f||(d=-1),r(f),i.hoverIndex=d}),[e,i]),updateItems:a}})(se,le),ye=(0,c.tr)(j),ge=(0,c.us)(Q,"open"),ve=(0,c.us)(Q,"close"),Re=oe.current,we=(0,n.useCallback)((e=>{var t;const o=g?null==(t=g.current)?void 0:t.getBoundingClientRect():y?{left:y.x,right:y.x,top:y.y,bottom:y.y,width:0,height:0}:null;if(!o)return void 0;Re.menu||(Re.menu=(V?V.current:(0,c.GZ)(ee.current))||window);const n=((e,t,o,n)=>{const r=t.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),a=o===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:o.getBoundingClientRect(),s=(0,c.dj)(n),l=e=>e+i.left-a.left-s.left,u=e=>e+i.left+r.width-a.right+s.right,f=e=>e+i.top-a.top-s.top,d=e=>e+i.top+r.height-a.bottom+s.bottom;return{menuRect:r,containerRect:i,getLeftOverflow:l,getRightOverflow:u,getTopOverflow:f,getBottomOverflow:d,confineHorizontally:e=>{let t=l(e);if(t<0)e-=t;else{const o=u(e);o>0&&(t=l(e-=o),t<0&&(e-=t))}return e},confineVertically:e=>{let t=f(e);if(t<0)e-=t;else{const o=d(e);o>0&&(t=f(e-=o),t<0&&(e-=t))}return e}}})(v,se,Re.menu,q);let{arrowX:r,arrowY:i,x:a,y:s,computedDirection:l}=(({arrow:e,align:t,direction:o,gap:n,shift:r,position:i,anchorRect:c,arrowRef:a,positionHelpers:s})=>{const{menuRect:l,containerRect:u}=s,p="left"===o||"right"===o;let m=p?n:r,h=p?r:n;if(e){const e=a.current;p?m+=e.offsetWidth:h+=e.offsetHeight}const b=c.left-u.left-l.width-m,y=c.right-u.left+m,g=c.top-u.top-l.height-h,v=c.bottom-u.top+h;let R,w;"end"===t?(R=c.right-u.left-l.width,w=c.bottom-u.top-l.height):"center"===t?(R=c.left-u.left-(l.width-c.width)/2,w=c.top-u.top-(l.height-c.height)/2):(R=c.left-u.left,w=c.top-u.top),R+=m,w+=h;const x={...s,anchorRect:c,placeLeftX:b,placeRightX:y,placeLeftorRightY:w,placeTopY:g,placeBottomY:v,placeToporBottomX:R,arrowRef:a,arrow:e,direction:o,position:i};switch(o){case"left":case"right":return f(x);default:return d(x)}})({arrow:h,align:E,direction:O,gap:L,shift:U,position:S,anchorRect:o,arrowRef:ue,positionHelpers:n});const{menuRect:u}=n;let p=u.height;if(!e&&"visible"!==k){const{getTopOverflow:e,getBottomOverflow:t}=n;let o,r;const i=de.current.height,a=t(s);if(a>0||(0,c.eO)(a,0)&&(0,c.eO)(p,i))o=p-a,r=a;else{const t=e(s);(t<0||(0,c.eO)(t,0)&&(0,c.eO)(p,i))&&(o=p+t,r=0-t,o>=0&&(s-=t))}o>=0?(p=o,K({height:o,overflowAmt:r})):K()}h&&z({x:r,y:i}),H({x:a,y:s}),Y(l),de.current={width:u.width,height:p}}),[h,E,q,O,L,U,S,k,y,g,v,V,ee,Re]);(0,p.b)((()=>{ye&&(we(),fe.current&&Z()),fe.current=ye,pe.current=we}),[ye,we,ae]),(0,p.b)((()=>{G&&!T&&(se.current.scrollTop=0)}),[G,T]),(0,p.b)((()=>be),[be]),(0,n.useEffect)((()=>{let{menu:e}=Re;if(!ye||!e)return;if(e=e.addEventListener?e:window,!Re.anchors){Re.anchors=[];let t=(0,c.GZ)(te&&te.current);for(;t&&t!==e;)Re.anchors.push(t),t=(0,c.GZ)(t)}let t=re;if(Re.anchors.length&&"initial"===t&&(t="auto"),"initial"===t)return;const o=()=>{"auto"===t?(0,c.MA)((()=>we(!0))):(0,c.Dx)(B,{reason:s.GB.SCROLL})},n=Re.anchors.concat("initial"!==re?e:[]);return n.forEach((e=>e.addEventListener("scroll",o))),()=>n.forEach((e=>e.removeEventListener("scroll",o)))}),[te,Re,ye,B,re,we]);const xe=!!G&&G.overflowAmt>0;(0,n.useEffect)((()=>{if(xe||!ye||!C)return;const e=()=>(0,c.MA)(we),t=C.current;return t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}),[ye,xe,C,we]),(0,n.useEffect)((()=>{if("function"!==typeof ResizeObserver||"initial"===ne)return;const e=new ResizeObserver((([e])=>{const{borderBoxSize:t,target:o}=e;let n,i;if(t){const{inlineSize:e,blockSize:o}=t[0]||t;n=e,i=o}else{const e=o.getBoundingClientRect();n=e.width,i=e.height}0!==n&&0!==i&&((0,c.eO)(n,de.current.width,1)&&(0,c.eO)(i,de.current.height,1)||(0,r.flushSync)((()=>{pe.current(),Z()})))})),t=se.current;return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}),[ne]),(0,n.useEffect)((()=>{if(!ye)return he(s.$U.RESET),void(ve||K());const{position:e,alwaysUpdate:t}=M||{},o=()=>{e===s.td.FIRST?he(s.$U.FIRST):e===s.td.LAST?he(s.$U.LAST):e>=-1&&he(s.$U.SET_INDEX,void 0,e)};if(t)o();else if(P){const e=setTimeout((()=>{const e=se.current;e&&!e.contains(document.activeElement)&&(le.current.focus(),o())}),ge?170:100);return()=>clearTimeout(e)}}),[ye,ge,ve,P,M,he]);const Ce=(0,n.useMemo)((()=>({isParentOpen:ye,submenuCtx:J,dispatch:he,updateItems:be})),[ye,J,he,be]);let Ee,Oe;G&&(T?Oe=G.overflowAmt:Ee=G.height);const Se=(0,n.useMemo)((()=>({reposSubmenu:W,submenuCtx:J,overflow:k,overflowAmt:Oe,parentMenuRef:se,parentDir:F})),[W,J,k,Oe,F]),ke=Ee>=0?{maxHeight:Ee,overflow:k}:void 0,Te=(0,n.useMemo)((()=>({state:j,dir:F})),[j,F]),De=(0,n.useMemo)((()=>({dir:F})),[F]),Pe=(0,a.l)({block:s.nJ,element:s.fM,modifiers:De,className:b.className}),je=(0,i.jsxs)("ul",{role:"menu","aria-label":e,...(0,c.$7)(A),...(0,c.dG)({onPointerEnter:null==ce?void 0:ce.off,onPointerMove:e=>{e.stopPropagation(),J.on(ie,(()=>{he(s.$U.RESET),le.current.focus()}))},onPointerLeave:e=>{e.target===e.currentTarget&&J.off()},onKeyDown:e=>{switch(e.key){case s.R8.HOME:he(s.$U.FIRST);break;case s.R8.END:he(s.$U.LAST);break;case s.R8.UP:he(s.$U.DECREASE,me);break;case s.R8.DOWN:he(s.$U.INCREASE,me);break;case s.R8.SPACE:return void(e.target&&-1!==e.target.className.indexOf(s.nJ)&&e.preventDefault());default:return}e.preventDefault(),e.stopPropagation()},onAnimationEnd:()=>{"closing"===j&&K(),(0,c.Dx)(N)}},$),ref:(0,m.Q)(x,se),className:(0,a.l)({block:s.nJ,modifiers:Te,className:t}),style:{...o,...ke,margin:0,display:"closed"===j?"none":void 0,position:s.vK,left:_.x,top:_.y},children:[(0,i.jsx)("li",{tabIndex:-1,style:{position:s.vK,left:0,top:0,display:"block",outline:"none"},ref:le,...s.yo,...w}),h&&(0,i.jsx)("li",{...s.yo,...b,className:Pe,style:{display:"block",position:s.vK,left:X.x,top:X.y,...b.style},ref:ue}),(0,i.jsx)(s.b7.Provider,{value:Se,children:(0,i.jsx)(s._X.Provider,{value:Ce,children:(0,i.jsx)(s.c9.Provider,{value:me,children:(0,c.Dx)(I,Te)})})})]});return R?(0,i.jsx)(l,{...R,isOpen:ye,children:je}):je},b=(0,n.forwardRef)((function({"aria-label":e,className:t,containerProps:o,initialMounted:a,unmountOnClose:l,transition:u,transitionTimeout:f,boundingBoxRef:d,boundingBoxPadding:p,reposition:m="auto",submenuOpenDelay:b=300,submenuCloseDelay:y=150,viewScroll:g="initial",portal:v,theming:R,onItemClick:w,...x},C){const E=(0,n.useRef)(null),O=(0,n.useRef)({}),{anchorRef:S,state:k,onClose:T}=x,D=(0,n.useMemo)((()=>({initialMounted:a,unmountOnClose:l,transition:u,transitionTimeout:f,boundingBoxRef:d,boundingBoxPadding:p,rootMenuRef:E,rootAnchorRef:S,scrollNodesRef:O,reposition:m,viewScroll:g,submenuOpenDelay:b,submenuCloseDelay:y})),[a,l,u,f,S,d,p,m,g,b,y]),P=(0,n.useMemo)((()=>({handleClick(e,t){e.stopPropagation||(0,c.Dx)(w,e);let o=e.keepOpen;void 0===o&&(o=t&&e.key===s.R8.SPACE),o||(0,c.Dx)(T,{value:e.value,key:e.key,reason:s.GB.CLICK})},handleClose(e){(0,c.Dx)(T,{key:e,reason:s.GB.CLICK})}})),[w,T]);if(!k)return null;const j=(0,i.jsx)(s.J6.Provider,{value:D,children:(0,i.jsx)(s.AH.Provider,{value:P,children:(0,i.jsx)(h,{...x,ariaLabel:e||"Menu",externalRef:C,containerRef:E,containerProps:{className:t,containerRef:E,containerProps:o,theming:R,transition:u,onClose:T}})})});return!0===v&&"undefined"!==typeof document?(0,r.createPortal)(j,document.body):v?v.target?(0,r.createPortal)(j,v.target):v.stablePosition?null:j:j}))},23797:(e,t,o)=>{"use strict";o.d(t,{s:()=>d});var n=o(72791),r=o(80184),i=o(94863);var c=o(90356);const a=(e,t,o,r)=>{const{submenuCloseDelay:a}=(0,n.useContext)(c.J6),{isParentOpen:s,submenuCtx:l,dispatch:u,updateItems:f}=(0,n.useContext)(c._X),d=()=>{!o&&!r&&u(c.$U.SET,e.current)},p=()=>{!r&&u(c.$U.UNSET,e.current)};return((e,t,o)=>{(0,i.b)((()=>{if(e)return;const n=t.current;return o(n,!0),()=>{o(n)}}),[e,t,o])})(r,e,f),(0,n.useEffect)((()=>{o&&s&&t.current&&t.current.focus()}),[t,o,s]),{setHover:d,onBlur:e=>{o&&!e.currentTarget.contains(e.relatedTarget)&&p()},onPointerMove:e=>{r||(e.stopPropagation(),l.on(a,d,d))},onPointerLeave:(e,t)=>{l.off(),!t&&p()}}};var s=o(63365),l=o(13966);const u=(e,t)=>{const o=(0,n.memo)(t),i=(0,n.forwardRef)(((e,t)=>{const i=(0,n.useRef)(null);return(0,r.jsx)(o,{...e,itemRef:i,externalRef:t,isHovering:(0,n.useContext)(c.c9)===i.current})}));return i.displayName=`WithHovering(${e})`,i};var f=o(2043);const d=u("MenuItem",(function({className:e,value:t,href:o,type:i,checked:u,disabled:d,children:p,onClick:m,isHovering:h,itemRef:b,externalRef:y,...g}){const v=!!d,{setHover:R,...w}=a(b,b,h,v),x=(0,n.useContext)(c.AH),C=(0,n.useContext)(c.L1),E="radio"===i,O="checkbox"===i,S=!!o&&!v&&!E&&!O,k=E?C.value===t:!!O&&!!u,T=e=>{if(v)return e.stopPropagation(),void e.preventDefault();const o={value:t,syntheticEvent:e};void 0!==e.key&&(o.key=e.key),O&&(o.checked=!k),E&&(o.name=C.name),(0,f.Dx)(m,o),E&&(0,f.Dx)(C.onRadioChange,o),x.handleClick(o,O||E)},D=(0,n.useMemo)((()=>({type:i,disabled:v,hover:h,checked:k,anchor:S})),[i,v,h,k,S]),P=(0,f.dG)({...w,onPointerDown:R,onKeyDown:e=>{if(h)switch(e.key){case c.R8.ENTER:e.preventDefault();case c.R8.SPACE:S?b.current.click():T(e)}},onClick:T},g),j={role:E?"menuitemradio":O?"menuitemcheckbox":c.CM,"aria-checked":E||O?k:void 0,...(0,f.$7)(v,h),...P,ref:(0,s.Q)(y,b),className:(0,l.l)({block:c.nJ,element:c.np,modifiers:D,className:e}),children:(0,n.useMemo)((()=>(0,f.Dx)(p,D)),[p,D])};return S?(0,r.jsx)("li",{role:c.dW,children:(0,r.jsx)("a",{href:o,...j})}):(0,r.jsx)("li",{...j})}))},13966:(e,t,o)=>{"use strict";o.d(t,{l:()=>r});var n=o(72791);const r=({block:e,element:t,modifiers:o,className:r})=>(0,n.useMemo)((()=>{const n=t?`${e}__${t}`:e;let i=n;o&&Object.keys(o).forEach((e=>{const t=o[e];t&&(i+=` ${n}--${!0===t?e:`${e}-${t}`}`)}));let c="function"===typeof r?r(o):r;return"string"===typeof c&&(c=c.trim(),c&&(i+=` ${c}`)),i}),[e,t,o,r])},63365:(e,t,o)=>{"use strict";o.d(t,{Q:()=>i});var n=o(72791);function r(e,t){"function"===typeof e?e(t):e.current=t}const i=(e,t)=>(0,n.useMemo)((()=>e?t?o=>{r(e,o),r(t,o)}:e:t),[e,t])},94863:(e,t,o)=>{"use strict";o.d(t,{b:()=>r});var n=o(72791);const r="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect},83236:(e,t,o)=>{"use strict";o.d(t,{w:()=>f});var n=o(72791);const r=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>({_s:e,status:r[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),c=e=>e?6:5,a=(e,t,o,n,r)=>{clearTimeout(n.current);const c=i(e);t(c),o.current=c,r&&r({current:c})},s=({enter:e=!0,exit:t=!0,preEnter:o,preExit:r,timeout:s,initialEntered:l,mountOnEnter:u,unmountOnExit:f,onStateChange:d}={})=>{const[p,m]=(0,n.useState)((()=>i(l?2:c(u)))),h=(0,n.useRef)(p),b=(0,n.useRef)(),[y,g]=(e=>"object"===typeof e?[e.enter,e.exit]:[e,e])(s),v=(0,n.useCallback)((()=>{const e=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return c(t)}})(h.current._s,f);e&&a(e,m,h,b,d)}),[d,f]),R=(0,n.useCallback)((n=>{const i=e=>{switch(a(e,m,h,b,d),e){case 1:y>=0&&(b.current=setTimeout(v,y));break;case 4:g>=0&&(b.current=setTimeout(v,g));break;case 0:case 3:b.current=((e,t)=>setTimeout((()=>{isNaN(document.body.offsetTop)||e(t+1)}),0))(i,e)}},s=h.current.isEnter;"boolean"!==typeof n&&(n=!s),n?!s&&i(e?o?0:1:2):s&&i(t?r?3:4:c(f))}),[v,d,e,t,o,r,y,g,f]);return(0,n.useEffect)((()=>()=>clearTimeout(b.current)),[]),[p,R,v]};var l=o(2043),u=o(90356);const f=({initialOpen:e,initialMounted:t,unmountOnClose:o,transition:n,transitionTimeout:r=500}={})=>{const[{status:i},c,a]=s({initialEntered:e,mountOnEnter:!t,unmountOnExit:o,timeout:r,enter:(0,l.us)(n,"open"),exit:(0,l.us)(n,"close")});return[{state:u._f[i],endTransition:a},c]}},90356:(e,t,o)=>{"use strict";o.d(t,{$U:()=>h,AH:()=>f,CM:()=>w,GB:()=>b,J6:()=>p,Kk:()=>r,L1:()=>d,R8:()=>m,_X:()=>l,_f:()=>g,b7:()=>u,c9:()=>s,dW:()=>R,fM:()=>c,nJ:()=>i,np:()=>a,td:()=>y,vK:()=>v,yo:()=>x});var n=o(72791);const r="szh-menu-container",i="szh-menu",c="arrow",a="item",s=(0,n.createContext)(),l=(0,n.createContext)({}),u=(0,n.createContext)({}),f=(0,n.createContext)({}),d=(0,n.createContext)({}),p=(0,n.createContext)({}),m=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),h=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6,SET_INDEX:7}),b=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),y=Object.freeze({FIRST:"first",LAST:"last"}),g=Object.freeze({entering:"opening",entered:"open",exiting:"closing",exited:"closed"}),v="absolute",R="presentation",w="menuitem",x={"aria-hidden":!0,role:w}},2043:(e,t,o)=>{"use strict";o.d(t,{$7:()=>d,Dx:()=>s,GZ:()=>f,MA:()=>i,O:()=>p,dG:()=>l,dj:()=>u,eO:()=>c,tr:()=>r,us:()=>a});var n=o(54164);const r=e=>!!e&&"o"===e[0],i=n.unstable_batchedUpdates||(e=>e()),c=(Object.values,(e,t,o=1e-4)=>Math.abs(e-t)<o),a=(e,t)=>!0===e||!(!e||!e[t]),s=(e,t)=>"function"===typeof e?e(t):e,l=(e,t)=>(t&&Object.keys(t).forEach((o=>{const n=e[o],r=t[o];e[o]="function"===typeof r&&n?(...e)=>{r(...e),n(...e)}:r})),e),u=e=>{if("string"!==typeof e)return{top:0,right:0,bottom:0,left:0};const t=e.trim().split(/\s+/,4).map(parseFloat),o=isNaN(t[0])?0:t[0],n=isNaN(t[1])?o:t[1];return{top:o,right:n,bottom:isNaN(t[2])?o:t[2],left:isNaN(t[3])?n:t[3]}},f=e=>{for(;e;){if(!(e=e.parentNode)||e===document.body||!e.parentNode)return;const{overflow:t,overflowX:o,overflowY:n}=getComputedStyle(e);if(/auto|scroll|overlay|hidden/.test(t+n+o))return e}};function d(e,t){return{"aria-disabled":e||void 0,tabIndex:t?0:-1}}function p(e,t){for(let o=0;o<e.length;o++)if(e[o]===t)return o;return-1}},5677:(e,t,o)=>{"use strict";var n=o(42458),r={"text/plain":"Text","text/html":"Url",default:"Text"},i="Copy to clipboard: #{key}, Enter";e.exports=function(e,t){var o,c,a,s,l,u,f=!1;t||(t={}),o=t.debug||!1;try{if(a=n(),s=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(n){if(n.stopPropagation(),t.format)if(n.preventDefault(),"undefined"===typeof n.clipboardData){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e);t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))})),document.body.appendChild(u),s.selectNodeContents(u),l.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");f=!0}catch(d){o&&console.error("unable to copy using execCommand: ",d),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(d){o&&console.error("unable to copy using clipboardData: ",d),o&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:i),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(s):l.removeAllRanges()),u&&document.body.removeChild(u),a()}return f}},568:(e,t,o)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(o(72791)),i=a(o(5677)),c=["text","onCopy","options","children"];function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){b(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function f(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,r=h(e);if(t){var i=h(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,o)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,o,n,a=p(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];return b(m(e=a.call.apply(a,[this].concat(o))),"onClick",(function(t){var o=e.props,n=o.text,c=o.onCopy,a=o.children,s=o.options,l=r.default.Children.only(a),u=(0,i.default)(n,s);c&&c(n,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=s,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),o=u(e,c),n=r.default.Children.only(t);return r.default.cloneElement(n,l(l({},o),{},{onClick:this.onClick}))}}])&&f(t.prototype,o),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.PureComponent);t.CopyToClipboard=y,b(y,"defaultProps",{onCopy:void 0,options:void 0})},78029:(e,t,o)=>{"use strict";var n=o(568).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},42458:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=87960.409e0439.chunk.js.map