(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3126,7018],{61357:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/embed/video",function(){return s(29942)}])},51513:function(e,n,s){"use strict";s.d(n,{R:function(){return l}});var t=s(85893),a=s(27049),i=s(24019),r=s(45938),o=s(88335),c=s.n(o);let l=e=>{let n,{streamName:s,customText:o,lastLive:l,notificationsEnabled:d,fediverseAccount:u,onNotifyClick:f,onFollowClick:_}=e;return n=o||(!o&&d&&u?(0,t.jsxs)("span",{children:["This stream is offline. You can"," ",(0,t.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:f,children:"be notified"})," ","the next time ",s," goes live or"," ",(0,t.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:_,children:"follow"})," ",u," on the Fediverse."]}):!o&&d?(0,t.jsxs)("span",{children:["This stream is offline."," ",(0,t.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:f,children:"Be notified"})," ","the next time ",s," goes live."]}):!o&&u?(0,t.jsxs)("span",{children:["This stream is offline."," ",(0,t.jsx)("span",{role:"link",tabIndex:0,className:c().actionLink,onClick:_,children:"Follow"})," ",u," on the Fediverse to see the next time ",s," goes live."]}):"This stream is offline. Check back soon!"),(0,t.jsx)("div",{className:c().outerContainer,children:(0,t.jsxs)("div",{className:c().innerContainer,children:[(0,t.jsx)("div",{className:c().header,children:s}),(0,t.jsx)(a.Z,{className:c().separator}),(0,t.jsx)("div",{className:c().bodyText,children:n}),l&&(0,t.jsxs)("div",{className:c().lastLiveDate,children:[(0,t.jsx)(i.Z,{className:c().clockIcon}),"Last live ".concat((0,r.Z)(new Date(l))," ago.")]})]})})}},69357:function(e,n,s){"use strict";s.d(n,{X:function(){return d}});var t=s(85893),a=s(45938),i=s(68730),r=s(67294),o=s(31326),c=s(37970),l=s.n(c);let d=e=>{let n,{online:s,lastConnectTime:c,lastDisconnectTime:d,viewerCount:u}=e,[,f]=(0,r.useState)(new Date);(0,r.useEffect)(()=>{let e=setInterval(()=>f(new Date),1e3);return()=>{clearInterval(e)}},[]);let _="";if(s&&c){let x=function(e){let n=(0,i.Z)({start:e,end:new Date});return n.days>1?"".concat(n.days," days ").concat(n.hours," hours"):n.hours>=1?"".concat(n.hours," hours ").concat(n.minutes," minutes"):"".concat(n.minutes," minutes ").concat(n.seconds," seconds")}(new Date(c));_=s?"Live for  ".concat(x):"Offline",n=u>0&&(0,t.jsxs)("div",{className:l().right,children:[(0,t.jsx)("span",{children:(0,t.jsx)(o.Z,{})}),(0,t.jsx)("span",{children:" ".concat(u)})]})}else!s&&(_="Offline",d&&(n="Last live ".concat((0,a.Z)(new Date(d))," ago.")));return(0,t.jsxs)("div",{className:l().statusbar,children:[(0,t.jsx)("div",{children:_}),(0,t.jsx)("div",{children:n})]})};d.defaultProps={lastConnectTime:null,lastDisconnectTime:null}},29942:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return l}});var t=s(85893);s(67294);var a=s(4480),i=s(77466),r=s(51513),o=s(69357),c=s(8888);function l(){let e=(0,a.sJ)(i.RI),n=(0,a.sJ)(i.g1),{name:s}=n,{offlineMessage:l}=n,{viewerCount:d,lastConnectTime:u,lastDisconnectTime:f}=e,_=(0,a.sJ)(i.YW);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.me,{}),(0,t.jsxs)("div",{className:"video-embed",children:[_&&(0,t.jsx)(c.OwncastPlayer,{source:"/hls/stream.m3u8",online:_}),!_&&(0,t.jsx)(r.R,{streamName:s,customText:l,notificationsEnabled:!1}),_&&(0,t.jsx)(o.X,{online:_,lastConnectTime:u,lastDisconnectTime:f,viewerCount:d})]})]})}},88335:function(e){e.exports={outerContainer:"OfflineBanner_outerContainer__3AbsB",innerContainer:"OfflineBanner_innerContainer__zTm13",bodyText:"OfflineBanner_bodyText__nNNy0",separator:"OfflineBanner_separator___j_Ss",lastLiveDate:"OfflineBanner_lastLiveDate___UZdO",clockIcon:"OfflineBanner_clockIcon__s0DB_",header:"OfflineBanner_header__Vu20o",footer:"OfflineBanner_footer__o3Zl5",actionLink:"OfflineBanner_actionLink__b4Mwa"}},37970:function(e){e.exports={statusbar:"Statusbar_statusbar__AtVnB"}},10434:function(e){function n(){return e.exports=n=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,n.apply(this,arguments)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports}},function(e){e.O(0,[2544,5938,6395,7902,8245,7466,2239,9774,2888,179],function(){return e(e.s=61357)}),_N_E=e.O()}]);