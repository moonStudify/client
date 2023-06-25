"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[578],{6024:function(e,n,t){t.d(n,{U:function(){return h}});var i=t(500),r=t(5989),l=t(5059),a=t(4662),o=t(3179),s=t(6384),d=t(5432),u=t(7294),c=t(5893),h=(0,l.G)(function({children:e,reduceMotion:n,...t},l){let h=(0,a.jC)("Accordion",t),f=(0,o.Lr)(t),{htmlProps:p,descendants:m,...v}=(0,i.As)(f),x=(0,u.useMemo)(()=>({...v,reduceMotion:!!n}),[v,n]);return(0,c.jsx)(r.di,{value:m,children:(0,c.jsx)(i.a2,{value:x,children:(0,c.jsx)(r.lh,{value:h,children:(0,c.jsx)(s.m.div,{ref:l,...p,className:(0,d.cx)("chakra-accordion",t.className),__css:h.root,children:e})})})})});h.displayName="Accordion"},7484:function(e,n,t){t.d(n,{K:function(){return s}});var i=t(5989),r=t(5059),l=t(6384),a=t(5432),o=t(5893),s=(0,r.G)(function(e,n){let{getButtonProps:t}=(0,i.bB)(),r=t(e,n),s=(0,i.YO)(),d={display:"flex",alignItems:"center",width:"100%",outline:0,...s.button};return(0,o.jsx)(l.m.button,{...r,className:(0,a.cx)("chakra-accordion__button",e.className),__css:d})});s.displayName="AccordionButton"},5077:function(e,n,t){t.d(n,{Q:function(){return u}});var i=t(500),r=t(5989),l=t(5059),a=t(6384),o=t(5432),s=t(7294),d=t(5893),u=(0,l.G)(function(e,n){let{children:t,className:l}=e,{htmlProps:u,...c}=(0,i.Zl)(e),h=(0,r.YO)(),f={...h.container,overflowAnchor:"none"},p=(0,s.useMemo)(()=>c,[c]);return(0,d.jsx)(r.ec,{value:p,children:(0,d.jsx)(a.m.div,{ref:n,...u,className:(0,o.cx)("chakra-accordion__item",l),__css:f,children:"function"==typeof t?t({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):t})})});u.displayName="AccordionItem"},1673:function(e,n,t){t.d(n,{X:function(){return s}});var i=t(500),r=t(5989),l=t(6877),a=t(5432),o=t(5893);function s(e){let{isOpen:n,isDisabled:t}=(0,r.bB)(),{reduceMotion:s}=(0,i.EF)(),d=(0,a.cx)("chakra-accordion__icon",e.className),u=(0,r.YO)(),c={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...u.icon};return(0,o.jsx)(l.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:d,__css:c,...e,children:(0,o.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}s.displayName="AccordionIcon"},500:function(e,n,t){t.d(n,{a2:function(){return u},As:function(){return d},EF:function(){return c},Zl:function(){return h}});var i=t(5989),r=t(5227),l=t(7294),a=t(5155),o=t(1103),s=t(5432);function d(e){let{onChange:n,defaultIndex:t,index:r,allowMultiple:o,allowToggle:d,...u}=e;(function(e){let n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,s.ZK)({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})})(e),(0,s.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let c=(0,i._v)(),[h,f]=(0,l.useState)(-1);(0,l.useEffect)(()=>()=>{f(-1)},[]);let[p,m]=function(e){let{value:n,defaultValue:t,onChange:i,shouldUpdate:r=(e,n)=>e!==n}=e,o=(0,a.W)(i),s=(0,a.W)(r),[d,u]=(0,l.useState)(t),c=void 0!==n,h=c?n:d,f=(0,a.W)(e=>{let n="function"==typeof e?e(h):e;s(h,n)&&(c||u(n),o(n))},[c,o,h,s]);return[h,f]}({value:r,defaultValue:()=>o?null!=t?t:[]:null!=t?t:-1,onChange:n}),v=e=>{let n=!1;null!==e&&(n=Array.isArray(p)?p.includes(e):p===e);let t=n=>{if(null!==e){if(o&&Array.isArray(p)){let t=n?p.concat(e):p.filter(n=>n!==e);m(t)}else n?m(e):d&&m(-1)}};return{isOpen:n,onChange:t}};return{index:p,setIndex:m,htmlProps:u,getAccordionItemProps:v,focusedIndex:h,setFocusedIndex:f,descendants:c}}var[u,c]=(0,r.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function h(e){var n;let{isDisabled:t,isFocusable:r,id:a,...d}=e,{getAccordionItemProps:u,setFocusedIndex:h}=c(),f=(0,l.useRef)(null),p=(0,l.useId)(),m=null!=a?a:p,v=`accordion-button-${m}`,x=`accordion-panel-${m}`;(0,s.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:g,index:b,descendants:y}=(0,i.mc)({disabled:t&&!r}),{isOpen:N,onChange:I}=u(-1===b?null:b);n={isOpen:N,isDisabled:t},(0,s.ZK)({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"});let E=()=>{null==I||I(!0)},_=()=>{null==I||I(!1)},C=(0,l.useCallback)(()=>{null==I||I(!N),h(b)},[b,h,N,I]),w=(0,l.useCallback)(e=>{let n={ArrowDown:()=>{let e=y.nextEnabled(b);null==e||e.node.focus()},ArrowUp:()=>{let e=y.prevEnabled(b);null==e||e.node.focus()},Home:()=>{let e=y.firstEnabled();null==e||e.node.focus()},End:()=>{let e=y.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))},[y,b]),A=(0,l.useCallback)(()=>{h(b)},[h,b]),O=(0,l.useCallback)(function(e={},n=null){return{...e,type:"button",ref:(0,o.lq)(g,f,n),id:v,disabled:!!t,"aria-expanded":!!N,"aria-controls":x,onClick:(0,s.v0)(e.onClick,C),onFocus:(0,s.v0)(e.onFocus,A),onKeyDown:(0,s.v0)(e.onKeyDown,w)}},[v,t,N,C,A,w,x,g]),j=(0,l.useCallback)(function(e={},n=null){return{...e,ref:n,role:"region",id:x,"aria-labelledby":v,hidden:!N}},[v,N,x]);return{isOpen:N,isDisabled:t,isFocusable:r,onOpen:E,onClose:_,getButtonProps:O,getPanelProps:j,htmlProps:d}}},5989:function(e,n,t){t.d(n,{di:function(){return I},ec:function(){return y},lh:function(){return g},mc:function(){return C},_v:function(){return _},bB:function(){return N},YO:function(){return b}});var i=t(7294),r=Object.defineProperty,l=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,a=(e,n,t)=>(l(e,"symbol"!=typeof n?n+"":n,t),t);function o(e){return e.sort((e,n)=>{let t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(t&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var s=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function d(e,n,t){let i=e+1;return t&&i>=n&&(i=0),i}function u(e,n,t){let i=e-1;return t&&i<0&&(i=n),i}var c="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,h=e=>e,f=class{constructor(){a(this,"descendants",new Map),a(this,"register",e=>{if(null!=e)return s(e)?this.registerNode(e):n=>{this.registerNode(n,e)}}),a(this,"unregister",e=>{this.descendants.delete(e);let n=o(Array.from(this.descendants.keys()));this.assignIndex(n)}),a(this,"destroy",()=>{this.descendants.clear()}),a(this,"assignIndex",e=>{this.descendants.forEach(n=>{let t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})}),a(this,"count",()=>this.descendants.size),a(this,"enabledCount",()=>this.enabledValues().length),a(this,"values",()=>{let e=Array.from(this.descendants.values());return e.sort((e,n)=>e.index-n.index)}),a(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),a(this,"item",e=>{if(0!==this.count())return this.values()[e]}),a(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),a(this,"first",()=>this.item(0)),a(this,"firstEnabled",()=>this.enabledItem(0)),a(this,"last",()=>this.item(this.descendants.size-1)),a(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),a(this,"indexOf",e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1}),a(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(e))),a(this,"next",(e,n=!0)=>{let t=d(e,this.count(),n);return this.item(t)}),a(this,"nextEnabled",(e,n=!0)=>{let t=this.item(e);if(!t)return;let i=this.enabledIndexOf(t.node),r=d(i,this.enabledCount(),n);return this.enabledItem(r)}),a(this,"prev",(e,n=!0)=>{let t=u(e,this.count()-1,n);return this.item(t)}),a(this,"prevEnabled",(e,n=!0)=>{let t=this.item(e);if(!t)return;let i=this.enabledIndexOf(t.node),r=u(i,this.enabledCount()-1,n);return this.enabledItem(r)}),a(this,"registerNode",(e,n)=>{if(!e||this.descendants.has(e))return;let t=Array.from(this.descendants.keys()).concat(e),i=o(t);(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);let r={node:e,index:-1,...n};this.descendants.set(e,r),this.assignIndex(i)})}},p=t(5227),m=t(1103),[v,x]=(0,p.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),[g,b]=(0,p.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[y,N]=(0,p.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[I,E,_,C]=function(){let e=h(v),n=()=>h(x()),t=e=>(function(e){let n=x(),[t,r]=(0,i.useState)(-1),l=(0,i.useRef)(null);c(()=>()=>{l.current&&n.unregister(l.current)},[]),c(()=>{if(!l.current)return;let e=Number(l.current.dataset.index);t==e||Number.isNaN(e)||r(e)});let a=e?h(n.register(e)):h(n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(l.current),register:(0,m.lq)(a,l)}})(e),r=()=>(function(){let e=(0,i.useRef)(new f);return c(()=>()=>e.current.destroy()),e.current})();return[e,n,r,t]}()},6733:function(e,n,t){t.d(n,{H:function(){return x}});var i=t(500),r=t(5989),l=t(5059),a=t(6384),o=t(9155),s=t(5432),d=t(1526),u=t(2698),c=t(7294),h=t(5893),f=e=>null!=e&&parseInt(e.toString(),10)>0,p={exit:{height:{duration:.2,ease:o.Lj.ease},opacity:{duration:.3,ease:o.Lj.ease}},enter:{height:{duration:.3,ease:o.Lj.ease},opacity:{duration:.4,ease:o.Lj.ease}}},m={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:i,delay:r})=>{var l;return{...e&&{opacity:f(n)?1:0},height:n,transitionEnd:null==i?void 0:i.exit,transition:null!=(l=null==t?void 0:t.exit)?l:o.p$.exit(p.exit,r)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:i,delay:r})=>{var l;return{...e&&{opacity:1},height:n,transitionEnd:null==i?void 0:i.enter,transition:null!=(l=null==t?void 0:t.enter)?l:o.p$.enter(p.enter,r)}}},v=(0,c.forwardRef)((e,n)=>{let{in:t,unmountOnExit:i,animateOpacity:r=!0,startingHeight:l=0,endingHeight:a="auto",style:o,className:f,transition:p,transitionEnd:v,...x}=e,[g,b]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e=setTimeout(()=>{b(!0)});return()=>clearTimeout(e)},[]),(0,s.ZK)({condition:Boolean(l>0&&i),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let y=parseFloat(l.toString())>0,N={startingHeight:l,endingHeight:a,animateOpacity:r,transition:g?p:{enter:{duration:0}},transitionEnd:{enter:null==v?void 0:v.enter,exit:i?null==v?void 0:v.exit:{...null==v?void 0:v.exit,display:y?"block":"none"}}};return(0,h.jsx)(d.M,{initial:!1,custom:N,children:(!i||t)&&(0,h.jsx)(u.E.div,{ref:n,...x,className:(0,s.cx)("chakra-collapse",f),style:{overflow:"hidden",display:"block",...o},custom:N,variants:m,initial:!!i&&"exit",animate:t||i?"enter":"exit",exit:"exit"})})});v.displayName="Collapse";var x=(0,l.G)(function(e,n){let{className:t,motionProps:l,...o}=e,{reduceMotion:d}=(0,i.EF)(),{getPanelProps:u,isOpen:c}=(0,r.bB)(),f=u(o,n),p=(0,s.cx)("chakra-accordion__panel",t),m=(0,r.YO)();d||delete f.hidden;let x=(0,h.jsx)(a.m.div,{...f,__css:m.panel,className:p});return d?x:(0,h.jsx)(v,{in:c,...l,children:x})});x.displayName="AccordionPanel"},9154:function(e,n,t){t.d(n,{h:function(){return o}});var i=t(9222),r=t(5059),l=t(7294),a=t(5893),o=(0,r.G)((e,n)=>{let{icon:t,children:r,isRound:o,"aria-label":s,...d}=e,u=t||r,c=(0,l.isValidElement)(u)?(0,l.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return(0,a.jsx)(i.z,{padding:"0",borderRadius:o?"full":void 0,ref:n,"aria-label":s,...d,children:c})});o.displayName="IconButton"},1983:function(e,n,t){t.d(n,{T:function(){return i}});var i=(0,t(78).I)({d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",displayName:"CopyIcon"})},6168:function(e,n,t){t.d(n,{x:function(){return l}});var i=t(78),r=t(5893),l=(0,i.I)({displayName:"LinkIcon",path:(0,r.jsxs)("g",{fill:"currentColor",children:[(0,r.jsx)("path",{d:"M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"}),(0,r.jsx)("path",{d:"M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"})]})})},7580:function(e,n,t){t.d(n,{d:function(){return l}});var i=t(78),r=t(5893),l=(0,i.I)({displayName:"EditIcon",path:(0,r.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,r.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})},3863:function(e,n,t){t.d(n,{B:function(){return m},m:function(){return p}});var i=t(5227),r=t(2495),l=t(5059),a=t(4662),o=t(3179),s=t(6384),d=t(5432),u=t(888),c=t(7294),h=t(5893),[f,p]=(0,i.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),m=(0,l.G)(function(e,n){let t=(0,a.jC)("Input",e),{children:i,className:l,...p}=(0,o.Lr)(e),m=(0,d.cx)("chakra-input__group",l),v={},x=(0,r.W)(i),g=t.field;x.forEach(e=>{var n,i;t&&(g&&"InputLeftElement"===e.type.id&&(v.paddingStart=null!=(n=g.height)?n:g.h),g&&"InputRightElement"===e.type.id&&(v.paddingEnd=null!=(i=g.height)?i:g.h),"InputRightAddon"===e.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(v.borderStartRadius=0))});let b=x.map(n=>{var t,i;let r=(0,u.oA)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(i=n.props)?void 0:i.variant)||e.variant});return"Input"!==n.type.id?(0,c.cloneElement)(n,r):(0,c.cloneElement)(n,Object.assign(r,v,n.props))});return(0,h.jsx)(s.m.div,{className:m,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"},"data-group":!0,...p,children:(0,h.jsx)(f,{value:t,children:b})})});m.displayName="InputGroup"},3775:function(e,n,t){t.d(n,{x:function(){return c}});var i=t(3863),r=t(6384),l=t(5059),a=t(5432),o=t(5893),s=(0,r.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),d=(0,l.G)(function(e,n){var t,r;let{placement:l="left",...a}=e,d=(0,i.m)(),u=d.field,c={["left"===l?"insetStart":"insetEnd"]:"0",width:null!=(t=null==u?void 0:u.height)?t:null==u?void 0:u.h,height:null!=(r=null==u?void 0:u.height)?r:null==u?void 0:u.h,fontSize:null==u?void 0:u.fontSize,...d.element};return(0,o.jsx)(s,{ref:n,__css:c,...a})});d.id="InputElement",d.displayName="InputElement";var u=(0,l.G)(function(e,n){let{className:t,...i}=e,r=(0,a.cx)("chakra-input__left-element",t);return(0,o.jsx)(d,{ref:n,placement:"left",className:r,...i})});u.id="InputLeftElement",u.displayName="InputLeftElement";var c=(0,l.G)(function(e,n){let{className:t,...i}=e,r=(0,a.cx)("chakra-input__right-element",t);return(0,o.jsx)(d,{ref:n,placement:"right",className:r,...i})});c.id="InputRightElement",c.displayName="InputRightElement"},1708:function(e,n,t){t.d(n,{r:function(){return a}});var i=t(5059),r=t(6384),l=t(5893),a=(0,i.G)(function(e,n){let{templateAreas:t,gap:i,rowGap:a,columnGap:o,column:s,row:d,autoFlow:u,autoRows:c,templateRows:h,autoColumns:f,templateColumns:p,...m}=e;return(0,l.jsx)(r.m.div,{ref:n,__css:{display:"grid",gridTemplateAreas:t,gridGap:i,gridRowGap:a,gridColumnGap:o,gridAutoColumns:f,gridColumn:s,gridRow:d,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:h,gridTemplateColumns:p},...m})});a.displayName="Grid"},776:function(e,n,t){t.d(n,{P:function(){return d}});var i=t(5059),r=t(6384),l=t(888),a=t(3951),o=t(5893);function s(e){return(0,a.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var d=(0,i.G)(function(e,n){let{area:t,colSpan:i,colStart:a,colEnd:d,rowEnd:u,rowSpan:c,rowStart:h,...f}=e,p=(0,l.oA)({gridArea:t,gridColumn:s(i),gridRow:s(c),gridColumnStart:a,gridColumnEnd:d,gridRowStart:h,gridRowEnd:u});return(0,o.jsx)(r.m.div,{ref:n,__css:p,...f})});d.displayName="GridItem"},6979:function(e,n,t){t.d(n,{W:function(){return d}});var i=t(5059),r=t(3179),l=t(4662),a=t(6384),o=t(5432),s=t(5893),d=(0,i.G)(function(e,n){let{className:t,centerContent:i,...d}=(0,r.Lr)(e),u=(0,l.mq)("Container",e);return(0,s.jsx)(a.m.div,{ref:n,className:(0,o.cx)("chakra-container",t),...d,__css:{...u,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});d.displayName="Container"}}]);