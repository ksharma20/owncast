(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7095],{62433:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/messages",function(){return n(57641)}])},94538:function(e,t,n){"use strict";n.d(t,{e:function(){return u}});var r=n(85893),s=n(85402),a=n(71577),c=n(21640),o=n(82911),i=n(84674),l=n(64777);let u=e=>{let{user:t,isEnabled:n,label:u,onClick:d}=e;async function h(e){let{id:t}=e;try{let r=await (0,l.rQ)(l.NM,{data:{userId:t,enabled:!n},method:"POST",auth:!0});return r.success}catch(s){console.error(s)}return!1}let m=n?"ban":"unban",f=n?(0,r.jsx)(c.Z,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(o.Z,{style:{color:"var(--ant-warning)"}}),p=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",m," ",(0,r.jsx)("strong",{children:t.displayName}),n?" and remove their messages?":"?"]}),x=()=>{s.Z.confirm({title:"Confirm ".concat(m),content:p,onCancel:()=>{},onOk:()=>new Promise((e,n)=>{let r=h(t);r?setTimeout(()=>{e(r),null==d||d()},3e3):n()}),okType:"danger",okText:n?"Absolutely":null,icon:f})};return(0,r.jsx)(a.Z,{type:"primary",onClick:x,size:"small",icon:n?(0,r.jsx)(i.Z,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:u||m})};u.defaultProps={label:"",onClick:null}},6491:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var r=n(85893),s=n(67294),a=n(94199),c=n(85402),o=n(6880),i=n(71230),l=n(15746),u=n(27049),d=n(26713),h=n(45938),m=n(58091),f=n(96486),p=n(94538),x=n(71577),g=n(21640),j=n(82911),y=n(84674),b=n(24478),w=n(64777);let v=e=>{var t;let{user:n,onClick:s}=e;async function a(e,t){let{id:n}=e;try{let r=await (0,w.rQ)(w.jr,{data:{userId:n,isModerator:t},method:"POST",auth:!0});return r.success}catch(s){console.error(s)}return!1}let o=null===(t=n.scopes)||void 0===t?void 0:t.includes("MODERATOR"),i=o?"remove moderator":"add moderator",l=o?(0,r.jsx)(g.Z,{style:{color:"var(--ant-error)"}}):(0,r.jsx)(j.Z,{style:{color:"var(--ant-warning)"}}),u=(0,r.jsxs)(r.Fragment,{children:["Are you sure you want to ",i," ",(0,r.jsx)("strong",{children:n.displayName}),"?"]}),d=()=>{c.Z.confirm({title:"Confirm ".concat(i),content:u,onCancel:()=>{},onOk:()=>new Promise((e,t)=>{let r=a(n,!o);r?setTimeout(()=>{e(r),null==s||s()},3e3):t()}),okType:"danger",okText:o?"Yup!":null,icon:l})};return(0,r.jsx)(x.Z,{type:"primary",onClick:d,size:"small",icon:o?(0,r.jsx)(y.Z,{twoToneColor:"#ff4d4f"}):(0,r.jsx)(b.Z,{twoToneColor:"#22bb44"}),className:"block-user-button",children:i})};v.defaultProps={onClick:null};var k=n(45840),N=n(70241);let T=e=>{let{user:t,connectionInfo:n,children:x}=e,[g,j]=(0,s.useState)(!1),y=()=>{j(!0)},b=()=>{j(!1)},{displayName:w,createdAt:T,previousNames:Z,nameChangedAt:C,disabledAt:A}=t,{connectedAt:E,messageCount:S,userAgent:_}=n||{},M=null,O=Z&&[...Z];Z&&Z.length>1&&C&&(M=new Date(C),O.reverse());let I=new Date(T),P=(0,m.Z)(I,"PP pp"),D=M?(0,h.Z)(M):null;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Z,{title:(0,r.jsxs)(r.Fragment,{children:["Created at: ",P,".",(0,r.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,r.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:y,children:x})}),(0,r.jsx)(c.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(w),open:g,onOk:b,onCancel:b,children:(0,r.jsxs)("div",{className:"user-details",children:[(0,r.jsx)(o.Z.Title,{level:4,children:w}),(0,r.jsxs)("p",{className:"created-at",children:["User created at ",P,"."]}),(0,r.jsxs)(i.Z,{gutter:16,children:[n&&(0,r.jsxs)(l.Z,{md:M?12:24,children:[(0,r.jsx)(o.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,r.jsxs)("ul",{className:"connection-info",children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Active for:"})," ",(0,h.Z)(new Date(E))]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"Messages sent:"})," ",S]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"User Agent:"}),(0,r.jsx)("br",{}),(0,N.AB)(_)]})]})]}),M&&(0,r.jsxs)(l.Z,{md:n?12:24,children:[(0,r.jsx)(o.Z.Title,{level:5,children:"This user is also seen as:"}),(0,r.jsx)("ul",{className:"previous-names-list",children:(0,f.uniq)(O).map((e,t)=>(0,r.jsxs)("li",{className:0===t?"latest":"",children:[(0,r.jsx)("span",{className:"user-name-item",children:e}),0===t?" (Changed ".concat(D," ago)"):""]}))})]})]}),(0,r.jsx)(u.Z,{}),(0,r.jsxs)(d.Z,{direction:"horizontal",children:[A?(0,r.jsxs)(r.Fragment,{children:["This user was banned on ",(0,r.jsx)("code",{children:(0,k.u)(A)}),".",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(p.e,{label:"Unban this user",user:t,isEnabled:!1,onClick:b})]}):(0,r.jsx)(p.e,{label:"Ban this user",user:t,isEnabled:!0,onClick:b}),(0,r.jsx)(v,{user:t,onClick:b})]})]})})]})};T.defaultProps={connectionInfo:null}},45840:function(e,t,n){"use strict";n.d(t,{K:function(){return l},u:function(){return i}});var r=n(85893),s=n(48213),a=n(58091),c=n(6491),o=n(94538);function i(e){return(0,a.Z)(new Date(e),"MMM d H:mma")}let l=e=>{let{data:t}=e;return(0,r.jsx)(s.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:(e,t)=>(0,r.jsx)(c.Z,{user:t,children:(0,r.jsx)("span",{className:"display-name",children:e})})},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>i(e),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:e=>e?i(e):null,sorter:(e,t)=>new Date(e.disabledAt).getTime()-new Date(t.disabledAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,r.jsx)(o.e,{user:t,isEnabled:!t.disabledAt})}],dataSource:t,size:"small",rowKey:"id"})}},57641:function(e,t,n){"use strict";n.r(t),n.d(t,{OUTCOME_TIMEOUT:function(){return w},default:function(){return v}});var r=n(85893),s=n(67294),a=n(6880),c=n(71577),o=n(48213),i=n(89739),l=n(21640),u=n(94184),d=n.n(u),h=n(58091),m=n(64777),f=n(70241),p=n(94199),x=n(99611),g=n(90420);let j=e=>{let{isVisible:t,message:n,setMessage:a}=e;if(!n||(0,f.Qr)(n))return null;let o=null,[u,d]=(0,s.useState)(0),{id:h}=n||{},j=()=>{o=setTimeout(()=>{d(0)},3e3)};(0,s.useEffect)(()=>()=>{clearTimeout(o)});let y=async()=>{clearTimeout(o),d(0);let e=await (0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:!t,idArray:[h]}});e.success&&"changed"===e.message?(a({...n,visible:!t}),d(1)):(a({...n,visible:t}),d(-1)),j()},b=(0,r.jsx)(i.Z,{style:{color:"transparent"}});return u&&(b=u>0?(0,r.jsx)(i.Z,{style:{color:"var(--ant-success)"}}):(0,r.jsx)(l.Z,{style:{color:"var(--ant-warning)"}})),(0,r.jsxs)("div",{className:"toggle-switch ".concat(t?"":"hidden"),children:[(0,r.jsx)("span",{className:"outcome-icon",children:b}),(0,r.jsx)(p.Z,{title:"Click to ".concat(t?"hide":"show"," this message"),placement:"topRight",children:(0,r.jsx)(c.Z,{shape:"circle",size:"small",type:"text",icon:t?(0,r.jsx)(x.Z,{}):(0,r.jsx)(g.Z,{}),onClick:y})})]})};var y=n(6491);let{Title:b}=a.Z,w=3e3;function v(){let[e,t]=(0,s.useState)([]),[n,a]=(0,s.useState)([]),[u,p]=(0,s.useState)(!1),[x,g]=(0,s.useState)(null),[v,k]=(0,s.useState)(""),N=null,T=null,Z=async()=>{try{let e=await (0,m.rQ)(m.WE,{auth:!0});(0,f.Qr)(e)?t([]):t(e)}catch(n){console.log("==== error",n)}};(0,s.useEffect)(()=>(Z(),T=setInterval(()=>{Z()},m.NE),()=>{clearTimeout(N),clearTimeout(T)}),[]);let C=function(e){let t=e.reduce((e,t)=>{let n=t.user.id;return e.some(e=>e.text===n)||e.push({text:n,value:n}),e},[]);return t.sort((e,t)=>{let n=e.text.toUpperCase(),r=t.text.toUpperCase();return n<r?-1:n>r?1:0})}(e),A=n=>{let r=e.findIndex(e=>e.id===n.id);e.splice(r,1,n),t([...e])},E=()=>{N=setTimeout(()=>{g(null),k("")},w)},S=async s=>{p(!0);let c=await (0,m.rQ)(m.hn,{auth:!0,method:"POST",data:{visible:s,idArray:n}});if(c.success&&"changed"===c.message){g((0,r.jsx)(i.Z,{})),E();let o=[...e];n.map(t=>{let n=o.findIndex(e=>e.id===t),r={...e[n],visible:s};return o.splice(n,1,r),null}),t(o),a([])}else g((0,r.jsx)(l.Z,{})),E();p(!1)},_=()=>{k("show"),S(!0)},M=()=>{k("hide"),S(!1)},O=d()({"bulk-editor":!0,active:n.length});return(0,r.jsxs)("div",{className:"chat-messages",children:[(0,r.jsx)(b,{children:"Chat Messages"}),(0,r.jsx)("p",{children:"Manage the messages from viewers that show up on your stream."}),(0,r.jsxs)("div",{className:O,children:[(0,r.jsx)("span",{className:"label",children:"Check multiple messages to change their visibility to: "}),(0,r.jsx)(c.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"show"===v&&u,icon:"show"===v&&x,disabled:!n.length||v&&"show"!==v,onClick:_,children:"Show"}),(0,r.jsx)(c.Z,{type:"primary",size:"small",shape:"round",className:"button",loading:"hide"===v&&u,icon:"hide"===v&&x,disabled:!n.length||v&&"hide"!==v,onClick:M,children:"Hide"})]}),(0,r.jsx)(o.Z,{size:"small",className:"table-container",pagination:{defaultPageSize:100,showSizeChanger:!0},scroll:{y:540},rowClassName:e=>e.hiddenAt?"hidden":"",dataSource:e,columns:[{title:"Time",dataIndex:"timestamp",key:"timestamp",className:"timestamp-col",defaultSortOrder:"descend",render:e=>{let t=new Date(e);return(0,h.Z)(t,"PP pp")},sorter:(e,t)=>new Date(e.timestamp).getTime()-new Date(t.timestamp).getTime(),width:90},{title:"User",dataIndex:"user",key:"user",className:"name-col",filters:C,onFilter:(e,t)=>t.user.id===e,sorter:(e,t)=>e.user.displayName.localeCompare(t.user.displayName),sortDirections:["ascend","descend"],ellipsis:!0,render:e=>{let{displayName:t}=e;return(0,r.jsx)(y.Z,{user:e,children:t})},width:110},{title:"Message",dataIndex:"body",key:"body",className:"message-col",width:320,render:e=>(0,r.jsx)("div",{className:"message-contents",dangerouslySetInnerHTML:{__html:e}})},{title:"",dataIndex:"hiddenAt",key:"hiddenAt",className:"toggle-col",filters:[{text:"Visible messages",value:!0},{text:"Hidden messages",value:!1}],onFilter:(e,t)=>t.visible===e,render:(e,t)=>(0,r.jsx)(j,{isVisible:!e,message:t,setMessage:A}),width:30}],rowKey:e=>e.id,rowSelection:{selectedRowKeys:n,onChange:e=>{a(e)}}})]})}},64777:function(e,t,n){"use strict";n.d(t,{$i:function(){return I},$l:function(){return L},Bu:function(){return g},E8:function(){return U},Ff:function(){return C},GC:function(){return b},GR:function(){return $},HP:function(){return D},IO:function(){return S},Kp:function(){return f},Kt:function(){return W},M_:function(){return M},N$:function(){return F},NE:function(){return i},NM:function(){return x},Q_:function(){return l},Qc:function(){return Z},RB:function(){return j},UJ:function(){return R},WB:function(){return c},WE:function(){return N},WQ:function(){return k},Wr:function(){return E},XA:function(){return _},Y9:function(){return Q},a_:function(){return m},ao:function(){return d},bl:function(){return u},e_:function(){return P},hn:function(){return T},iG:function(){return O},iV:function(){return h},jr:function(){return y},kb:function(){return z},kg:function(){return H},ms:function(){return A},nx:function(){return w},op:function(){return B},qk:function(){return p},rQ:function(){return G},sG:function(){return v},um:function(){return K}});var r=n(34155);let s=r.env.NEXT_PUBLIC_ADMIN_USERNAME,a=r.env.NEXT_PUBLIC_ADMIN_STREAMKEY,c="/",o="".concat(c,"api/admin/"),i=15e3,l="".concat(o,"status"),u="".concat(o,"serverconfig"),d="".concat(o,"config"),h="".concat(o,"viewersOverTime"),m="".concat(o,"viewers"),f="".concat(o,"chat/clients"),p="".concat(o,"chat/users/disabled"),x="".concat(o,"chat/users/setenabled"),g="".concat(o,"chat/users/ipbans"),j="".concat(o,"chat/users/ipbans/remove"),y="".concat(o,"chat/users/setmoderator"),b="".concat(o,"chat/users/moderators"),w="".concat(o,"hardwarestats"),v="".concat(o,"logs"),k="".concat(o,"logs/warnings"),N="".concat(o,"chat/messages"),T="/api/admin/chat/messagevisibility",Z="".concat(o,"emoji/upload"),C="".concat(o,"emoji/delete"),A="".concat(o,"accesstokens"),E="".concat(o,"accesstokens/delete"),S="".concat(o,"accesstokens/create"),_="".concat(o,"webhooks"),M="".concat(o,"webhooks/delete"),O="".concat(o,"webhooks/create"),I="".concat(c,"api/socialplatforms"),P="".concat(o,"federation/send"),D="".concat(o,"followers"),U="".concat(o,"followers/pending"),Q="".concat(o,"followers/blocked"),z="".concat(o,"followers/approve"),B="".concat(o,"federation/actions"),F="".concat(o,"metrics/video"),K="".concat(o,"config/streamkeys"),R="".concat(o,"yp/reset");async function G(e,t){let{data:n,method:r="GET",auth:c=!0}=t||{},o={method:r};if(n&&(o.body=JSON.stringify(n)),c&&s&&a){let i=btoa("".concat(s,":").concat(a));o.headers={Authorization:"Basic ".concat(i)},o.mode="cors",o.credentials="include"}try{let l=await fetch(e,o),u=await l.json();if(!l.ok){let d=u.message||"An error has occurred: ".concat(l.status);throw Error(d)}return u}catch(h){return console.error(h),h}}async function L(e,t){let n={method:"GET",auth:!1,...t};return G(e,n)}async function H(e){try{let t=await fetch(e,{referrerPolicy:"no-referrer",referrer:""});if(!t.ok){let n="An error has occured: ".concat(t.status);throw Error(n)}let r=await t.json();return r}catch(s){console.log(s)}return{}}async function W(){return H("https://api.github.com/repos/owncast/owncast/releases/latest")}let X=/^\d+(\.\d+){0,2}$/;async function $(e){let t=await W(),n=t.tag_name;return("v"===n.substr(0,1)&&(n=n.substr(1)),!function(e,t){if(!e||!t||0===e.length||0===t.length)return!1;if(e===t)return!0;if(X.test(e)&&X.test(t)){let n=e.split(".");for(;n.length<3;)n.push("0");let r=t.split(".");for(;r.length<3;)r.push("0");for(let s=0;s<3;s++){let a=parseInt(n[s],10),c=parseInt(r[s],10);if(a!==c)return a>c}return!0}return e>=t}(e,n))?n:null}},70241:function(e,t,n){"use strict";n.d(t,{AB:function(){return l},Qr:function(){return c},t5:function(){return a},wS:function(){return i}});var r=n(42238),s=n.n(r);function a(e){let t=e.split(":");t[t.length-1]="";let n=t.join(":");return"[::1]"===(n=n.slice(0,n.length-1))||"127.0.0.1"===n?"Localhost":n}function c(e){return!e||0===Object.keys(e).length&&e.constructor===Object}function o(e,t,n){return String(t.repeat(n)+e).slice(-n)}function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Number.isFinite(+e)?Math.abs(e):0,n=Math.floor(t/86400),r=n>0?"".concat(n," day").concat(n>1?"s":""," "):"",s=Math.floor(t/3600%24),a=s||n?o("".concat(s,":"),"0",3):"",c=o("".concat(Math.floor(t/60%60),":"),"0",3),i=o("".concat(Math.floor(t%60)),"0",2);return r+a+c+i}function l(e){let t=s()(e),{device:n,os:r,browser:a}=t,{major:c,name:o}=a,{version:i,name:l}=r,{model:u,type:d}=n;return"libmpv"===e?"mpv media player":o&&c&&l?"".concat(o," ").concat(c," on ").concat(l," ").concat(i,"\n  ").concat(u||d?" (".concat(u||d,")"):""):e}}},function(e){e.O(0,[3662,5596,481,173,1407,4083,1577,6880,3174,2459,6386,3013,3698,8213,6754,195,5402,1834,8067,5938,450,9774,2888,179],function(){return e(e.s=62433)}),_N_E=e.O()}]);
//# sourceMappingURL=messages-b00daf6e555de80f.js.map