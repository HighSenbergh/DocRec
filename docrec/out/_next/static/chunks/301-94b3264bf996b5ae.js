"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{2549:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(5531);/**
 * @license lucide-react v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let u=(0,r.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},5744:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},3651:function(e,t,n){n.d(t,{B:function(){return s}});var r=n(2265),u=n(7437),o=n(2210),i=n(7256);function s(e){let t=e+"CollectionProvider",[n,s]=function(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),s=n.length;function a(t){let{scope:n,children:o,...a}=t,l=n?.[e][s]||i,c=r.useMemo(()=>a,Object.values(a));return(0,u.jsx)(l.Provider,{value:c,children:o})}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,u){let a=u?.[e][s]||i,l=r.useContext(a);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e),o=u[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}(t),[a,l]=n(t,{collectionRef:{current:null},itemMap:new Map}),c=e=>{let{scope:t,children:n}=e,o=r.useRef(null),i=r.useRef(new Map).current;return(0,u.jsx)(a,{scope:t,itemMap:i,collectionRef:o,children:n})};c.displayName=t;let d=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,s=l(d,n),a=(0,o.e)(t,s.collectionRef);return(0,u.jsx)(i.g7,{ref:a,children:r})});f.displayName=d;let m=e+"CollectionItemSlot",p="data-radix-collection-item",v=r.forwardRef((e,t)=>{let{scope:n,children:s,...a}=e,c=r.useRef(null),d=(0,o.e)(t,c),f=l(m,n);return r.useEffect(()=>(f.itemMap.set(c,{ref:c,...a}),()=>void f.itemMap.delete(c))),(0,u.jsx)(i.g7,{[p]:"",ref:d,children:s})});return v.displayName=m,[{Provider:c,Slot:f,ItemSlot:v},function(t){let n=l(e+"CollectionConsumer",t),u=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),r=Array.from(n.itemMap.values()),u=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return u},[n.collectionRef,n.itemMap]);return u},s]}},6989:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return o}});var r=n(2265),u=n(7437);function o(e,t){let n=r.createContext(t),o=e=>{let{children:t,...o}=e,i=r.useMemo(()=>o,Object.values(o));return(0,u.jsx)(n.Provider,{value:i,children:t})};return o.displayName=e+"Provider",[o,function(u){let o=r.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${u}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(n){let u=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:u}}),[n,u])}};return o.scopeName=e,[function(t,o){let i=r.createContext(o),s=n.length;n=[...n,o];let a=t=>{let{scope:n,children:o,...a}=t,l=n?.[e]?.[s]||i,c=r.useMemo(()=>a,Object.values(a));return(0,u.jsx)(l.Provider,{value:c,children:o})};return a.displayName=t+"Provider",[a,function(n,u){let a=u?.[e]?.[s]||i,l=r.useContext(a);if(l)return l;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let u=n.reduce((t,{useScope:n,scopeName:r})=>{let u=n(e),o=u[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}(o,...t)]}},9249:function(e,t,n){n.d(t,{I0:function(){return E},XB:function(){return f},fC:function(){return y}});var r,u=n(2265),o=n(5744),i=n(9381),s=n(2210),a=n(6459),l=n(7437),c="dismissableLayer.update",d=u.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=u.forwardRef((e,t)=>{let{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:f,onPointerDownOutside:m,onFocusOutside:y,onInteractOutside:E,onDismiss:b,...w}=e,N=u.useContext(d),[h,C]=u.useState(null),g=h?.ownerDocument??globalThis?.document,[,M]=u.useState({}),O=(0,s.e)(t,e=>C(e)),P=Array.from(N.layers),[R]=[...N.layersWithOutsidePointerEventsDisabled].slice(-1),x=P.indexOf(R),T=h?P.indexOf(h):-1,L=N.layersWithOutsidePointerEventsDisabled.size>0,W=T>=x,D=function(e,t=globalThis?.document){let n=(0,a.W)(e),r=u.useRef(!1),o=u.useRef(()=>{});return u.useEffect(()=>{let e=e=>{if(e.target&&!r.current){let r=function(){v("dismissableLayer.pointerDownOutside",n,u,{discrete:!0})},u={originalEvent:e};"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=r,t.addEventListener("click",o.current,{once:!0})):r()}else t.removeEventListener("click",o.current);r.current=!1},u=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(u),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));!W||n||(m?.(e),E?.(e),e.defaultPrevented||b?.())},g),S=function(e,t=globalThis?.document){let n=(0,a.W)(e),r=u.useRef(!1);return u.useEffect(()=>{let e=e=>{e.target&&!r.current&&v("dismissableLayer.focusOutside",n,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}(e=>{let t=e.target,n=[...N.branches].some(e=>e.contains(t));n||(y?.(e),E?.(e),e.defaultPrevented||b?.())},g);return!function(e,t=globalThis?.document){let n=(0,a.W)(e);u.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{let t=T===N.layers.size-1;t&&(f?.(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},g),u.useEffect(()=>{if(h)return n&&(0===N.layersWithOutsidePointerEventsDisabled.size&&(r=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),N.layersWithOutsidePointerEventsDisabled.add(h)),N.layers.add(h),p(),()=>{n&&1===N.layersWithOutsidePointerEventsDisabled.size&&(g.body.style.pointerEvents=r)}},[h,g,n,N]),u.useEffect(()=>()=>{h&&(N.layers.delete(h),N.layersWithOutsidePointerEventsDisabled.delete(h),p())},[h,N]),u.useEffect(()=>{let e=()=>M({});return document.addEventListener(c,e),()=>document.removeEventListener(c,e)},[]),(0,l.jsx)(i.WV.div,{...w,ref:O,style:{pointerEvents:L?W?"auto":"none":void 0,...e.style},onFocusCapture:(0,o.M)(e.onFocusCapture,S.onFocusCapture),onBlurCapture:(0,o.M)(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:(0,o.M)(e.onPointerDownCapture,D.onPointerDownCapture)})});f.displayName="DismissableLayer";var m=u.forwardRef((e,t)=>{let n=u.useContext(d),r=u.useRef(null),o=(0,s.e)(t,r);return u.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.WV.div,{...e,ref:o})});function p(){let e=new CustomEvent(c);document.dispatchEvent(e)}function v(e,t,n,{discrete:r}){let u=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),r?(0,i.jH)(u,o):u.dispatchEvent(o)}m.displayName="DismissableLayerBranch";var y=f,E=m},2730:function(e,t,n){n.d(t,{h:function(){return a}});var r=n(2265),u=n(4887),o=n(9381),i=n(1030),s=n(7437),a=r.forwardRef((e,t)=>{let{container:n,...a}=e,[l,c]=r.useState(!1);(0,i.b)(()=>c(!0),[]);let d=n||l&&globalThis?.document?.body;return d?u.createPortal((0,s.jsx)(o.WV.div,{...a,ref:t}),d):null});a.displayName="Portal"},5606:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(2265),u=n(2210),o=n(1030),i=e=>{let t,n;let{present:i,children:a}=e,l=function(e){var t;let[n,u]=r.useState(),i=r.useRef({}),a=r.useRef(e),l=r.useRef("none"),c=e?"mounted":"unmounted",[d,f]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,n)=>{let r=t[e][n];return r??e},c));return r.useEffect(()=>{let e=s(i.current);l.current="mounted"===d?e:"none"},[d]),(0,o.b)(()=>{let t=i.current,n=a.current,r=n!==e;if(r){let r=l.current,u=s(t);e?f("MOUNT"):"none"===u||t?.display==="none"?f("UNMOUNT"):n&&r!==u?f("ANIMATION_OUT"):f("UNMOUNT"),a.current=e}},[e,f]),(0,o.b)(()=>{if(n){let e;let t=n.ownerDocument.defaultView??window,r=r=>{let u=s(i.current),o=u.includes(r.animationName);if(r.target===n&&o&&(f("ANIMATION_END"),!a.current)){let r=n.style.animationFillMode;n.style.animationFillMode="forwards",e=t.setTimeout(()=>{"forwards"===n.style.animationFillMode&&(n.style.animationFillMode=r)})}},u=e=>{e.target===n&&(l.current=s(i.current))};return n.addEventListener("animationstart",u),n.addEventListener("animationcancel",r),n.addEventListener("animationend",r),()=>{t.clearTimeout(e),n.removeEventListener("animationstart",u),n.removeEventListener("animationcancel",r),n.removeEventListener("animationend",r)}}f("ANIMATION_END")},[n,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(i.current=getComputedStyle(e)),u(e)},[])}}(i),c="function"==typeof a?a({present:l.isPresent}):r.Children.only(a),d=(0,u.e)(l.ref,(t=Object.getOwnPropertyDescriptor(c.props,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?c.ref:(t=Object.getOwnPropertyDescriptor(c,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning?c.props.ref:c.props.ref||c.ref),f="function"==typeof a;return f||l.isPresent?r.cloneElement(c,{ref:d}):null};function s(e){return e?.animationName||"none"}i.displayName="Presence"},9381:function(e,t,n){n.d(t,{WV:function(){return s},jH:function(){return a}});var r=n(2265),u=n(4887),o=n(7256),i=n(7437),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...u}=e,s=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(s,{...u,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function a(e,t){e&&u.flushSync(()=>e.dispatchEvent(t))}},6459:function(e,t,n){n.d(t,{W:function(){return u}});var r=n(2265);function u(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},3763:function(e,t,n){n.d(t,{T:function(){return o}});var r=n(2265),u=n(6459);function o({prop:e,defaultProp:t,onChange:n=()=>{}}){let[o,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[o]=n,i=r.useRef(o),s=(0,u.W)(t);return r.useEffect(()=>{i.current!==o&&(s(o),i.current=o)},[o,i,s]),n}({defaultProp:t,onChange:n}),s=void 0!==e,a=s?e:o,l=(0,u.W)(n),c=r.useCallback(t=>{if(s){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[s,e,i,l]);return[a,c]}},1030:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(2265),u=globalThis?.document?r.useLayoutEffect:()=>{}},8281:function(e,t,n){n.d(t,{T:function(){return i}});var r=n(2265),u=n(9381),o=n(7437),i=r.forwardRef((e,t)=>(0,o.jsx)(u.WV.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));i.displayName="VisuallyHidden"}}]);