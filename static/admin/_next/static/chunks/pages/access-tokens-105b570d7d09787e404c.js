(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[874],{73171:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(1413),c=n(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},o=n(30076),s=function(e,t){return c.createElement(o.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:a}))};s.displayName="DeleteOutlined";var i=c.forwardRef(s)},98082:function(e,t,n){"use strict";var r=n(29439),c=n(67294),a=n(31808);t.Z=function(){var e=c.useState(!1),t=(0,r.Z)(e,2),n=t[0],o=t[1];return c.useEffect((function(){o((0,a.fk)())}),[]),n}},1635:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(4942),c=n(87462),a=n(71002),o=n(67294),s=n(94184),i=n.n(s),l=n(99134),u=n(65632),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n};var f=["xs","sm","md","lg","xl","xxl"],d=o.forwardRef((function(e,t){var n,s=o.useContext(u.E_),d=s.getPrefixCls,m=s.direction,v=o.useContext(l.Z),h=v.gutter,y=v.wrap,x=v.supportFlexGap,Z=e.prefixCls,b=e.span,g=e.order,w=e.offset,k=e.push,j=e.pull,O=e.className,C=e.children,E=e.flex,S=e.style,N=p(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),P=d("col",Z),_={};f.forEach((function(t){var n,o={},s=e[t];"number"===typeof s?o.span=s:"object"===(0,a.Z)(s)&&(o=s||{}),delete N[t],_=(0,c.Z)((0,c.Z)({},_),(n={},(0,r.Z)(n,"".concat(P,"-").concat(t,"-").concat(o.span),void 0!==o.span),(0,r.Z)(n,"".concat(P,"-").concat(t,"-order-").concat(o.order),o.order||0===o.order),(0,r.Z)(n,"".concat(P,"-").concat(t,"-offset-").concat(o.offset),o.offset||0===o.offset),(0,r.Z)(n,"".concat(P,"-").concat(t,"-push-").concat(o.push),o.push||0===o.push),(0,r.Z)(n,"".concat(P,"-").concat(t,"-pull-").concat(o.pull),o.pull||0===o.pull),(0,r.Z)(n,"".concat(P,"-rtl"),"rtl"===m),n))}));var z=i()(P,(n={},(0,r.Z)(n,"".concat(P,"-").concat(b),void 0!==b),(0,r.Z)(n,"".concat(P,"-order-").concat(g),g),(0,r.Z)(n,"".concat(P,"-offset-").concat(w),w),(0,r.Z)(n,"".concat(P,"-push-").concat(k),k),(0,r.Z)(n,"".concat(P,"-pull-").concat(j),j),n),O,_),A={};if(h&&h[0]>0){var T=h[0]/2;A.paddingLeft=T,A.paddingRight=T}if(h&&h[1]>0&&!x){var I=h[1]/2;A.paddingTop=I,A.paddingBottom=I}return E&&(A.flex=function(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}(E),"auto"!==E||!1!==y||A.minWidth||(A.minWidth=0)),o.createElement("div",(0,c.Z)({},N,{style:(0,c.Z)((0,c.Z)({},A),S),className:z,ref:t}),C)}));d.displayName="Col";var m=d},99134:function(e,t,n){"use strict";var r=(0,n(67294).createContext)({});t.Z=r},36725:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(87462),c=n(4942),a=n(71002),o=n(29439),s=n(67294),i=n(94184),l=n.n(i),u=n(65632),p=n(99134),f=n(93355),d=n(24308),m=n(98082),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},h=((0,f.b)("top","middle","bottom","stretch"),(0,f.b)("start","end","center","space-around","space-between"),s.forwardRef((function(e,t){var n,i=e.prefixCls,f=e.justify,h=e.align,y=e.className,x=e.style,Z=e.children,b=e.gutter,g=void 0===b?0:b,w=e.wrap,k=v(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),j=s.useContext(u.E_),O=j.getPrefixCls,C=j.direction,E=s.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),S=(0,o.Z)(E,2),N=S[0],P=S[1],_=(0,m.Z)(),z=s.useRef(g);s.useEffect((function(){var e=d.ZP.subscribe((function(e){var t=z.current||0;(!Array.isArray(t)&&"object"===(0,a.Z)(t)||Array.isArray(t)&&("object"===(0,a.Z)(t[0])||"object"===(0,a.Z)(t[1])))&&P(e)}));return function(){return d.ZP.unsubscribe(e)}}),[]);var A=O("row",i),T=function(){var e=[0,0];return(Array.isArray(g)?g:[g,0]).forEach((function(t,n){if("object"===(0,a.Z)(t))for(var r=0;r<d.c4.length;r++){var c=d.c4[r];if(N[c]&&void 0!==t[c]){e[n]=t[c];break}}else e[n]=t||0})),e}(),I=l()(A,(n={},(0,c.Z)(n,"".concat(A,"-no-wrap"),!1===w),(0,c.Z)(n,"".concat(A,"-").concat(f),f),(0,c.Z)(n,"".concat(A,"-").concat(h),h),(0,c.Z)(n,"".concat(A,"-rtl"),"rtl"===C),n),y),R={},G=T[0]>0?T[0]/-2:void 0,M=T[1]>0?T[1]/-2:void 0;if(G&&(R.marginLeft=G,R.marginRight=G),_){var F=(0,o.Z)(T,2);R.rowGap=F[1]}else M&&(R.marginTop=M,R.marginBottom=M);var B=s.useMemo((function(){return{gutter:T,wrap:w,supportFlexGap:_}}),[T,w,_]);return s.createElement(p.Z.Provider,{value:B},s.createElement("div",(0,r.Z)({},k,{className:I,style:(0,r.Z)((0,r.Z)({},R),x),ref:t}),Z))})));h.displayName="Row";var y=h},19650:function(e,t,n){"use strict";n.d(t,{u:function(){return m},Z:function(){return h}});var r=n(87462),c=n(4942),a=n(29439),o=n(67294),s=n(94184),i=n.n(s),l=n(50344),u=n(65632);function p(e){var t=e.className,n=e.direction,a=e.index,s=e.marginDirection,i=e.children,l=e.split,u=e.wrap,p=o.useContext(m),f=p.horizontalSize,d=p.verticalSize,v=p.latestIndex,h={};return p.supportFlexGap||("vertical"===n?a<v&&(h={marginBottom:f/(l?2:1)}):h=(0,r.Z)((0,r.Z)({},a<v&&(0,c.Z)({},s,f/(l?2:1))),u&&{paddingBottom:d})),null===i||void 0===i?null:o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:h},i),a<v&&l&&o.createElement("span",{className:"".concat(t,"-split"),style:h},l))}var f=n(98082),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},m=o.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),v={small:8,middle:16,large:24};var h=function(e){var t,n=o.useContext(u.E_),s=n.getPrefixCls,h=n.space,y=n.direction,x=e.size,Z=void 0===x?(null===h||void 0===h?void 0:h.size)||"small":x,b=e.align,g=e.className,w=e.children,k=e.direction,j=void 0===k?"horizontal":k,O=e.prefixCls,C=e.split,E=e.style,S=e.wrap,N=void 0!==S&&S,P=d(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=(0,f.Z)(),z=o.useMemo((function(){return(Array.isArray(Z)?Z:[Z,Z]).map((function(e){return function(e){return"string"===typeof e?v[e]:e||0}(e)}))}),[Z]),A=(0,a.Z)(z,2),T=A[0],I=A[1],R=(0,l.Z)(w,{keepEmpty:!0}),G=void 0===b&&"horizontal"===j?"center":b,M=s("space",O),F=i()(M,"".concat(M,"-").concat(j),(t={},(0,c.Z)(t,"".concat(M,"-rtl"),"rtl"===y),(0,c.Z)(t,"".concat(M,"-align-").concat(G),G),t),g),B="".concat(M,"-item"),D="rtl"===y?"marginLeft":"marginRight",H=0,L=R.map((function(e,t){return null!==e&&void 0!==e&&(H=t),o.createElement(p,{className:B,key:"".concat(B,"-").concat(t),direction:j,index:t,marginDirection:D,split:C,wrap:N},e)})),U=o.useMemo((function(){return{horizontalSize:T,verticalSize:I,latestIndex:H,supportFlexGap:_}}),[T,I,H,_]);if(0===R.length)return null;var W={};return N&&(W.flexWrap="wrap",_||(W.marginBottom=-I)),_&&(W.columnGap=T,W.rowGap=I),o.createElement("div",(0,r.Z)({className:F,style:(0,r.Z)((0,r.Z)({},W),E)},P),o.createElement(m.Provider,{value:U},L))}},60331:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(4942),c=n(87462),a=n(29439),o=n(67294),s=n(94184),i=n.n(s),l=n(98423),u=n(54549),p=n(65632),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},d=function(e){var t,n=e.prefixCls,a=e.className,s=e.checked,l=e.onChange,u=e.onClick,d=f(e,["prefixCls","className","checked","onChange","onClick"]),m=(0,o.useContext(p.E_).getPrefixCls)("tag",n),v=i()(m,(t={},(0,r.Z)(t,"".concat(m,"-checkable"),!0),(0,r.Z)(t,"".concat(m,"-checkable-checked"),s),t),a);return o.createElement("span",(0,c.Z)({},d,{className:v,onClick:function(e){null===l||void 0===l||l(!s),null===u||void 0===u||u(e)}}))},m=n(98787),v=n(97202),h=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n},y=new RegExp("^(".concat(m.Y.join("|"),")(-inverse)?$")),x=new RegExp("^(".concat(m.E.join("|"),")$")),Z=function(e,t){var n,s=e.prefixCls,f=e.className,d=e.style,m=e.children,Z=e.icon,b=e.color,g=e.onClose,w=e.closeIcon,k=e.closable,j=void 0!==k&&k,O=h(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=o.useContext(p.E_),E=C.getPrefixCls,S=C.direction,N=o.useState(!0),P=(0,a.Z)(N,2),_=P[0],z=P[1];o.useEffect((function(){"visible"in O&&z(O.visible)}),[O.visible]);var A=function(){return!!b&&(y.test(b)||x.test(b))},T=(0,c.Z)({backgroundColor:b&&!A()?b:void 0},d),I=A(),R=E("tag",s),G=i()(R,(n={},(0,r.Z)(n,"".concat(R,"-").concat(b),I),(0,r.Z)(n,"".concat(R,"-has-color"),b&&!I),(0,r.Z)(n,"".concat(R,"-hidden"),!_),(0,r.Z)(n,"".concat(R,"-rtl"),"rtl"===S),n),f),M=function(e){e.stopPropagation(),null===g||void 0===g||g(e),e.defaultPrevented||"visible"in O||z(!1)},F="onClick"in O||m&&"a"===m.type,B=(0,l.Z)(O,["visible"]),D=Z||null,H=D?o.createElement(o.Fragment,null,D,o.createElement("span",null,m)):m,L=o.createElement("span",(0,c.Z)({},B,{ref:t,className:G,style:T}),H,j?w?o.createElement("span",{className:"".concat(R,"-close-icon"),onClick:M},w):o.createElement(u.Z,{className:"".concat(R,"-close-icon"),onClick:M}):null);return F?o.createElement(v.Z,null,L):L},b=o.forwardRef(Z);b.displayName="Tag",b.CheckableTag=d;var g=b},80089:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(15861),c=n(87757),a=n.n(c),o=n(67294),s=n(4525),i=n(31097),l=n(60331),u=n(1635),p=n(9676),f=n(37614),d=n(4107),m=n(36725),v=n(71577),h=n(19650),y=n(2023),x=n(73171),Z=n(12924),b=n(94853),g=n(85893),w=s.Z.Title,k=s.Z.Paragraph,j={CAN_SEND_SYSTEM_MESSAGES:{name:"System messages",description:"Can send official messages on behalf of the system.",color:"purple"},CAN_SEND_MESSAGES:{name:"User chat messages",description:"Can send chat messages on behalf of the owner of this token.",color:"green"},HAS_ADMIN_ACCESS:{name:"Has admin access",description:"Can perform administrative actions such as moderation, get server statuses, etc.",color:"red"}};function O(e){var t=e.onOk,n=e.onCancel,r=e.visible,c=(0,o.useState)([]),a=c[0],s=c[1],i=(0,o.useState)(""),l=i[0],h=i[1],y=Object.keys(j).map((function(e){return{value:e,label:j[e].description}}));var x={disabled:0===a.length||""===l};var Z=y.map((function(e){return(0,g.jsx)(u.Z,{span:8,children:(0,g.jsx)(p.Z,{value:e.value,children:e.label})},e.value)}));return(0,g.jsxs)(f.Z,{title:"Create New Access token",visible:r,onOk:function(){t(l,a),s([]),h("")},onCancel:n,okButtonProps:x,children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("p",{children:"The name will be displayed as the chat user when sending messages with this access token."}),(0,g.jsx)(d.Z,{value:l,placeholder:"Name of bot, service, or integration",onChange:function(e){return h(e.currentTarget.value)}})]}),(0,g.jsx)("p",{children:"Select the permissions this access token will have. It cannot be edited after it's created."}),(0,g.jsx)(p.Z.Group,{style:{width:"100%"},value:a,onChange:function(e){s(e)},children:(0,g.jsx)(m.Z,{children:Z})}),(0,g.jsx)("p",{children:(0,g.jsx)(v.Z,{type:"primary",onClick:function(){s(Object.keys(j))},children:"Select all"})})]})}function C(){var e=(0,o.useState)([]),t=e[0],n=e[1],c=(0,o.useState)(!1),s=c[0],u=c[1];function p(e){console.error("error",e)}function f(){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.rQ)(b.ms);case 3:t=e.sent,n(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function C(){return(C=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.rQ)(b.Wr,{method:"POST",data:{token:t}});case 3:f(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),p(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function E(){return(E=(0,r.Z)(a().mark((function e(r,c){var o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.rQ)(b.IO,{method:"POST",data:{name:r,scopes:c}});case 3:o=e.sent,n(t.concat(o)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}(0,o.useEffect)((function(){f()}),[]);var S=[{title:"",key:"delete",render:function(e,t){return(0,g.jsx)(h.Z,{size:"middle",children:(0,g.jsx)(v.Z,{onClick:function(){return function(e){return C.apply(this,arguments)}(t.accessToken)},icon:(0,g.jsx)(x.Z,{})})})}},{title:"Name",dataIndex:"displayName",key:"displayName"},{title:"Token",dataIndex:"accessToken",key:"accessToken",render:function(e){return(0,g.jsx)(d.Z.Password,{size:"small",bordered:!1,value:e})}},{title:"Scopes",dataIndex:"scopes",key:"scopes",render:function(e){return(0,g.jsx)(g.Fragment,{children:e.map((function(e){return function(e){if(!e||!j[e])return null;var t=j[e];return(0,g.jsx)(i.Z,{title:t.description,children:(0,g.jsx)(l.Z,{color:t.color,children:t.name})},e)}(e)}))})}},{title:"Last Used",dataIndex:"lastUsed",key:"lastUsed",render:function(e){if(!e)return"Never";var t=new Date(e);return(0,Z.Z)(t,"P p")}}];return(0,g.jsxs)("div",{children:[(0,g.jsx)(w,{children:"Access Tokens"}),(0,g.jsx)(k,{children:"Access tokens are used to allow external, 3rd party tools to perform specific actions on your Owncast server. They should be kept secure and never included in client code, instead they should be kept on a server that you control."}),(0,g.jsxs)(k,{children:["Read more about how to use these tokens, with examples, at"," ",(0,g.jsx)("a",{href:"https://owncast.online/docs/integrations/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,g.jsx)(y.Z,{rowKey:"token",columns:S,dataSource:t,pagination:!1}),(0,g.jsx)("br",{}),(0,g.jsx)(v.Z,{type:"primary",onClick:function(){u(!0)},children:"Create Access Token"}),(0,g.jsx)(O,{visible:s,onOk:function(e,t){u(!1),function(e,t){E.apply(this,arguments)}(e,t)},onCancel:function(){u(!1)}})]})}},17554:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/access-tokens",function(){return n(80089)}])}},function(e){e.O(0,[23,614,924,774,888,179],(function(){return t=17554,e(e.s=t);var t}));var t=e.O();_N_E=t}]);