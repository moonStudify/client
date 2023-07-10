"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[809],{6024:function(e,n,t){t.d(n,{U:function(){return f}});var i=t(500),r=t(5989),a=t(5059),o=t(1639),l=t(3179),s=t(6384),d=t(5432),u=t(7294),c=t(5893),f=(0,a.G)(function({children:e,reduceMotion:n,...t},a){let f=(0,o.jC)("Accordion",t),h=(0,l.Lr)(t),{htmlProps:m,descendants:p,...x}=(0,i.As)(h),v=(0,u.useMemo)(()=>({...x,reduceMotion:!!n}),[x,n]);return(0,c.jsx)(r.di,{value:p,children:(0,c.jsx)(i.a2,{value:v,children:(0,c.jsx)(r.lh,{value:f,children:(0,c.jsx)(s.m.div,{ref:a,...m,className:(0,d.cx)("chakra-accordion",t.className),__css:f.root,children:e})})})})});f.displayName="Accordion"},7484:function(e,n,t){t.d(n,{K:function(){return s}});var i=t(5989),r=t(5059),a=t(6384),o=t(5432),l=t(5893),s=(0,r.G)(function(e,n){let{getButtonProps:t}=(0,i.bB)(),r=t(e,n),s=(0,i.YO)(),d={display:"flex",alignItems:"center",width:"100%",outline:0,...s.button};return(0,l.jsx)(a.m.button,{...r,className:(0,o.cx)("chakra-accordion__button",e.className),__css:d})});s.displayName="AccordionButton"},5077:function(e,n,t){t.d(n,{Q:function(){return u}});var i=t(500),r=t(5989),a=t(5059),o=t(6384),l=t(5432),s=t(7294),d=t(5893),u=(0,a.G)(function(e,n){let{children:t,className:a}=e,{htmlProps:u,...c}=(0,i.Zl)(e),f=(0,r.YO)(),h={...f.container,overflowAnchor:"none"},m=(0,s.useMemo)(()=>c,[c]);return(0,d.jsx)(r.ec,{value:m,children:(0,d.jsx)(o.m.div,{ref:n,...u,className:(0,l.cx)("chakra-accordion__item",a),__css:h,children:"function"==typeof t?t({isExpanded:!!c.isOpen,isDisabled:!!c.isDisabled}):t})})});u.displayName="AccordionItem"},1673:function(e,n,t){t.d(n,{X:function(){return s}});var i=t(500),r=t(5989),a=t(6877),o=t(5432),l=t(5893);function s(e){let{isOpen:n,isDisabled:t}=(0,r.bB)(),{reduceMotion:s}=(0,i.EF)(),d=(0,o.cx)("chakra-accordion__icon",e.className),u=(0,r.YO)(),c={opacity:t?.4:1,transform:n?"rotate(-180deg)":void 0,transition:s?void 0:"transform 0.2s",transformOrigin:"center",...u.icon};return(0,l.jsx)(a.J,{viewBox:"0 0 24 24","aria-hidden":!0,className:d,__css:c,...e,children:(0,l.jsx)("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})}s.displayName="AccordionIcon"},500:function(e,n,t){t.d(n,{a2:function(){return u},As:function(){return d},EF:function(){return c},Zl:function(){return f}});var i=t(5989),r=t(5227),a=t(7294),o=t(5155),l=t(1103),s=t(5432);function d(e){let{onChange:n,defaultIndex:t,index:r,allowMultiple:l,allowToggle:d,...u}=e;(function(e){let n=e.index||e.defaultIndex,t=null!=n&&!Array.isArray(n)&&e.allowMultiple;(0,s.ZK)({condition:!!t,message:`If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof n},`})})(e),(0,s.ZK)({condition:!!(e.allowMultiple&&e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"});let c=(0,i._v)(),[f,h]=(0,a.useState)(-1);(0,a.useEffect)(()=>()=>{h(-1)},[]);let[m,p]=function(e){let{value:n,defaultValue:t,onChange:i,shouldUpdate:r=(e,n)=>e!==n}=e,l=(0,o.W)(i),s=(0,o.W)(r),[d,u]=(0,a.useState)(t),c=void 0!==n,f=c?n:d,h=(0,o.W)(e=>{let n="function"==typeof e?e(f):e;s(f,n)&&(c||u(n),l(n))},[c,l,f,s]);return[f,h]}({value:r,defaultValue:()=>l?null!=t?t:[]:null!=t?t:-1,onChange:n}),x=e=>{let n=!1;null!==e&&(n=Array.isArray(m)?m.includes(e):m===e);let t=n=>{if(null!==e){if(l&&Array.isArray(m)){let t=n?m.concat(e):m.filter(n=>n!==e);p(t)}else n?p(e):d&&p(-1)}};return{isOpen:n,onChange:t}};return{index:m,setIndex:p,htmlProps:u,getAccordionItemProps:x,focusedIndex:f,setFocusedIndex:h,descendants:c}}var[u,c]=(0,r.k)({name:"AccordionContext",hookName:"useAccordionContext",providerName:"Accordion"});function f(e){var n;let{isDisabled:t,isFocusable:r,id:o,...d}=e,{getAccordionItemProps:u,setFocusedIndex:f}=c(),h=(0,a.useRef)(null),m=(0,a.useId)(),p=null!=o?o:m,x=`accordion-button-${p}`,v=`accordion-panel-${p}`;(0,s.ZK)({condition:!!(e.isFocusable&&!e.isDisabled),message:`Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `});let{register:b,index:g,descendants:N}=(0,i.mc)({disabled:t&&!r}),{isOpen:y,onChange:I}=u(-1===g?null:g);n={isOpen:y,isDisabled:t},(0,s.ZK)({condition:n.isOpen&&!!n.isDisabled,message:"Cannot open a disabled accordion item"});let E=()=>{null==I||I(!0)},C=()=>{null==I||I(!1)},_=(0,a.useCallback)(()=>{null==I||I(!y),f(g)},[g,f,y,I]),w=(0,a.useCallback)(e=>{let n={ArrowDown:()=>{let e=N.nextEnabled(g);null==e||e.node.focus()},ArrowUp:()=>{let e=N.prevEnabled(g);null==e||e.node.focus()},Home:()=>{let e=N.firstEnabled();null==e||e.node.focus()},End:()=>{let e=N.lastEnabled();null==e||e.node.focus()}}[e.key];n&&(e.preventDefault(),n(e))},[N,g]),O=(0,a.useCallback)(()=>{f(g)},[f,g]),A=(0,a.useCallback)(function(e={},n=null){return{...e,type:"button",ref:(0,l.lq)(b,h,n),id:x,disabled:!!t,"aria-expanded":!!y,"aria-controls":v,onClick:(0,s.v0)(e.onClick,_),onFocus:(0,s.v0)(e.onFocus,O),onKeyDown:(0,s.v0)(e.onKeyDown,w)}},[x,t,y,_,O,w,v,b]),k=(0,a.useCallback)(function(e={},n=null){return{...e,ref:n,role:"region",id:v,"aria-labelledby":x,hidden:!y}},[x,y,v]);return{isOpen:y,isDisabled:t,isFocusable:r,onOpen:E,onClose:C,getButtonProps:A,getPanelProps:k,htmlProps:d}}},5989:function(e,n,t){t.d(n,{di:function(){return I},ec:function(){return N},lh:function(){return b},mc:function(){return _},_v:function(){return C},bB:function(){return y},YO:function(){return g}});var i=t(7294),r=Object.defineProperty,a=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,o=(e,n,t)=>(a(e,"symbol"!=typeof n?n+"":n,t),t);function l(e){return e.sort((e,n)=>{let t=e.compareDocumentPosition(n);if(t&Node.DOCUMENT_POSITION_FOLLOWING||t&Node.DOCUMENT_POSITION_CONTAINED_BY)return -1;if(t&Node.DOCUMENT_POSITION_PRECEDING||t&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(!(t&Node.DOCUMENT_POSITION_DISCONNECTED)&&!(t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC))return 0;throw Error("Cannot sort the given nodes.")})}var s=e=>"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE;function d(e,n,t){let i=e+1;return t&&i>=n&&(i=0),i}function u(e,n,t){let i=e-1;return t&&i<0&&(i=n),i}var c="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,f=e=>e,h=class{constructor(){o(this,"descendants",new Map),o(this,"register",e=>{if(null!=e)return s(e)?this.registerNode(e):n=>{this.registerNode(n,e)}}),o(this,"unregister",e=>{this.descendants.delete(e);let n=l(Array.from(this.descendants.keys()));this.assignIndex(n)}),o(this,"destroy",()=>{this.descendants.clear()}),o(this,"assignIndex",e=>{this.descendants.forEach(n=>{let t=e.indexOf(n.node);n.index=t,n.node.dataset.index=n.index.toString()})}),o(this,"count",()=>this.descendants.size),o(this,"enabledCount",()=>this.enabledValues().length),o(this,"values",()=>{let e=Array.from(this.descendants.values());return e.sort((e,n)=>e.index-n.index)}),o(this,"enabledValues",()=>this.values().filter(e=>!e.disabled)),o(this,"item",e=>{if(0!==this.count())return this.values()[e]}),o(this,"enabledItem",e=>{if(0!==this.enabledCount())return this.enabledValues()[e]}),o(this,"first",()=>this.item(0)),o(this,"firstEnabled",()=>this.enabledItem(0)),o(this,"last",()=>this.item(this.descendants.size-1)),o(this,"lastEnabled",()=>{let e=this.enabledValues().length-1;return this.enabledItem(e)}),o(this,"indexOf",e=>{var n,t;return e&&null!=(t=null==(n=this.descendants.get(e))?void 0:n.index)?t:-1}),o(this,"enabledIndexOf",e=>null==e?-1:this.enabledValues().findIndex(n=>n.node.isSameNode(e))),o(this,"next",(e,n=!0)=>{let t=d(e,this.count(),n);return this.item(t)}),o(this,"nextEnabled",(e,n=!0)=>{let t=this.item(e);if(!t)return;let i=this.enabledIndexOf(t.node),r=d(i,this.enabledCount(),n);return this.enabledItem(r)}),o(this,"prev",(e,n=!0)=>{let t=u(e,this.count()-1,n);return this.item(t)}),o(this,"prevEnabled",(e,n=!0)=>{let t=this.item(e);if(!t)return;let i=this.enabledIndexOf(t.node),r=u(i,this.enabledCount()-1,n);return this.enabledItem(r)}),o(this,"registerNode",(e,n)=>{if(!e||this.descendants.has(e))return;let t=Array.from(this.descendants.keys()).concat(e),i=l(t);(null==n?void 0:n.disabled)&&(n.disabled=!!n.disabled);let r={node:e,index:-1,...n};this.descendants.set(e,r),this.assignIndex(i)})}},m=t(5227),p=t(1103),[x,v]=(0,m.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"}),[b,g]=(0,m.k)({name:"AccordionStylesContext",hookName:"useAccordionStyles",providerName:"<Accordion />"}),[N,y]=(0,m.k)({name:"AccordionItemContext",hookName:"useAccordionItemContext",providerName:"<AccordionItem />"}),[I,E,C,_]=function(){let e=f(x),n=()=>f(v()),t=e=>(function(e){let n=v(),[t,r]=(0,i.useState)(-1),a=(0,i.useRef)(null);c(()=>()=>{a.current&&n.unregister(a.current)},[]),c(()=>{if(!a.current)return;let e=Number(a.current.dataset.index);t==e||Number.isNaN(e)||r(e)});let o=e?f(n.register(e)):f(n.register);return{descendants:n,index:t,enabledIndex:n.enabledIndexOf(a.current),register:(0,p.lq)(o,a)}})(e),r=()=>(function(){let e=(0,i.useRef)(new h);return c(()=>()=>e.current.destroy()),e.current})();return[e,n,r,t]}()},6733:function(e,n,t){t.d(n,{H:function(){return v}});var i=t(500),r=t(5989),a=t(5059),o=t(6384),l=t(9155),s=t(5432),d=t(1526),u=t(2698),c=t(7294),f=t(5893),h=e=>null!=e&&parseInt(e.toString(),10)>0,m={exit:{height:{duration:.2,ease:l.Lj.ease},opacity:{duration:.3,ease:l.Lj.ease}},enter:{height:{duration:.3,ease:l.Lj.ease},opacity:{duration:.4,ease:l.Lj.ease}}},p={exit:({animateOpacity:e,startingHeight:n,transition:t,transitionEnd:i,delay:r})=>{var a;return{...e&&{opacity:h(n)?1:0},height:n,transitionEnd:null==i?void 0:i.exit,transition:null!=(a=null==t?void 0:t.exit)?a:l.p$.exit(m.exit,r)}},enter:({animateOpacity:e,endingHeight:n,transition:t,transitionEnd:i,delay:r})=>{var a;return{...e&&{opacity:1},height:n,transitionEnd:null==i?void 0:i.enter,transition:null!=(a=null==t?void 0:t.enter)?a:l.p$.enter(m.enter,r)}}},x=(0,c.forwardRef)((e,n)=>{let{in:t,unmountOnExit:i,animateOpacity:r=!0,startingHeight:a=0,endingHeight:o="auto",style:l,className:h,transition:m,transitionEnd:x,...v}=e,[b,g]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let e=setTimeout(()=>{g(!0)});return()=>clearTimeout(e)},[]),(0,s.ZK)({condition:Boolean(a>0&&i),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});let N=parseFloat(a.toString())>0,y={startingHeight:a,endingHeight:o,animateOpacity:r,transition:b?m:{enter:{duration:0}},transitionEnd:{enter:null==x?void 0:x.enter,exit:i?null==x?void 0:x.exit:{...null==x?void 0:x.exit,display:N?"block":"none"}}};return(0,f.jsx)(d.M,{initial:!1,custom:y,children:(!i||t)&&(0,f.jsx)(u.E.div,{ref:n,...v,className:(0,s.cx)("chakra-collapse",h),style:{overflow:"hidden",display:"block",...l},custom:y,variants:p,initial:!!i&&"exit",animate:t||i?"enter":"exit",exit:"exit"})})});x.displayName="Collapse";var v=(0,a.G)(function(e,n){let{className:t,motionProps:a,...l}=e,{reduceMotion:d}=(0,i.EF)(),{getPanelProps:u,isOpen:c}=(0,r.bB)(),h=u(l,n),m=(0,s.cx)("chakra-accordion__panel",t),p=(0,r.YO)();d||delete h.hidden;let v=(0,f.jsx)(o.m.div,{...h,__css:p.panel,className:m});return d?v:(0,f.jsx)(x,{in:c,...a,children:v})});v.displayName="AccordionPanel"},9154:function(e,n,t){t.d(n,{h:function(){return l}});var i=t(9222),r=t(5059),a=t(7294),o=t(5893),l=(0,r.G)((e,n)=>{let{icon:t,children:r,isRound:l,"aria-label":s,...d}=e,u=t||r,c=(0,a.isValidElement)(u)?(0,a.cloneElement)(u,{"aria-hidden":!0,focusable:!1}):null;return(0,o.jsx)(i.z,{padding:"0",borderRadius:l?"full":void 0,ref:n,"aria-label":s,...d,children:c})});l.displayName="IconButton"},1983:function(e,n,t){t.d(n,{T:function(){return i}});var i=(0,t(78).I)({d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z",displayName:"CopyIcon"})},6168:function(e,n,t){t.d(n,{x:function(){return a}});var i=t(78),r=t(5893),a=(0,i.I)({displayName:"LinkIcon",path:(0,r.jsxs)("g",{fill:"currentColor",children:[(0,r.jsx)("path",{d:"M10.458,18.374,7.721,21.11a2.853,2.853,0,0,1-3.942,0l-.892-.891a2.787,2.787,0,0,1,0-3.941l5.8-5.8a2.789,2.789,0,0,1,3.942,0l.893.892A1,1,0,0,0,14.94,9.952l-.893-.892a4.791,4.791,0,0,0-6.771,0l-5.8,5.8a4.787,4.787,0,0,0,0,6.77l.892.891a4.785,4.785,0,0,0,6.771,0l2.736-2.735a1,1,0,1,0-1.414-1.415Z"}),(0,r.jsx)("path",{d:"M22.526,2.363l-.892-.892a4.8,4.8,0,0,0-6.77,0l-2.905,2.9a1,1,0,0,0,1.414,1.414l2.9-2.9a2.79,2.79,0,0,1,3.941,0l.893.893a2.786,2.786,0,0,1,0,3.942l-5.8,5.8a2.769,2.769,0,0,1-1.971.817h0a2.766,2.766,0,0,1-1.969-.816,1,1,0,1,0-1.415,1.412,4.751,4.751,0,0,0,3.384,1.4h0a4.752,4.752,0,0,0,3.385-1.4l5.8-5.8a4.786,4.786,0,0,0,0-6.771Z"})]})})},7580:function(e,n,t){t.d(n,{d:function(){return a}});var i=t(78),r=t(5893),a=(0,i.I)({displayName:"EditIcon",path:(0,r.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,r.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,r.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})},1708:function(e,n,t){t.d(n,{r:function(){return o}});var i=t(5059),r=t(6384),a=t(5893),o=(0,i.G)(function(e,n){let{templateAreas:t,gap:i,rowGap:o,columnGap:l,column:s,row:d,autoFlow:u,autoRows:c,templateRows:f,autoColumns:h,templateColumns:m,...p}=e;return(0,a.jsx)(r.m.div,{ref:n,__css:{display:"grid",gridTemplateAreas:t,gridGap:i,gridRowGap:o,gridColumnGap:l,gridAutoColumns:h,gridColumn:s,gridRow:d,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:f,gridTemplateColumns:m},...p})});o.displayName="Grid"},776:function(e,n,t){t.d(n,{P:function(){return d}});var i=t(5059),r=t(6384),a=t(888),o=t(3951),l=t(5893);function s(e){return(0,o.XQ)(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}var d=(0,i.G)(function(e,n){let{area:t,colSpan:i,colStart:o,colEnd:d,rowEnd:u,rowSpan:c,rowStart:f,...h}=e,m=(0,a.oA)({gridArea:t,gridColumn:s(i),gridRow:s(c),gridColumnStart:o,gridColumnEnd:d,gridRowStart:f,gridRowEnd:u});return(0,l.jsx)(r.m.div,{ref:n,__css:m,...h})});d.displayName="GridItem"},6979:function(e,n,t){t.d(n,{W:function(){return d}});var i=t(5059),r=t(3179),a=t(1639),o=t(6384),l=t(5432),s=t(5893),d=(0,i.G)(function(e,n){let{className:t,centerContent:i,...d}=(0,r.Lr)(e),u=(0,a.mq)("Container",e);return(0,s.jsx)(o.m.div,{ref:n,className:(0,l.cx)("chakra-container",t),...d,__css:{...u,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});d.displayName="Container"}}]);