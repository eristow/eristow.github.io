(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{eeb009d636c9616a5a7b:function(e,t,n){"use strict";n.r(t),n.d(t,"Work",(function(){return m}));var o,r=n("8af190b70a6bc55c6f1b"),i=n.n(r),a=n("0b3cb19af78752326f59"),c=n("d7dd51e1bf6bfc2c9c3d"),d=n("ab4cb61bcb2dc161defb"),u=n("e95a63b25fb92ed15721"),f=n("a8ec0c2a8b14558544ed");function l(e,t,n,r){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&i)for(var c in i)void 0===t[c]&&(t[c]=i[c]);else t||(t=i||{});if(1===a)t.children=r;else if(a>1){for(var d=new Array(a),u=0;u<a;u++)d[u]=arguments[u+3];t.children=d}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{o||null==c.return||c.return()}finally{if(r)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=a.default.div.withConfig({displayName:"Work__ButtonContainer",componentId:"ejvr5h-0"})(["display:flex;flex-direction:row;"]),v=l("h1",{},void 0,"My Work"),s=l(u.Redirect,{to:"stocks"}),h=l(u.Redirect,{to:"tictactoe"}),y=l("h3",{},void 0,"Web DAW"),w=l(p,{},void 0,l(f.a,{type:"button"},void 0,l("a",{href:"https://web-daw-frontend.herokuapp.com/"},void 0,"Web DAW Project")),l(f.a,{type:"button",margin:"0px 10px"},void 0,l("a",{href:"https://github.com/eristow/web-daw"},void 0,"Web DAW Front-End Code")),l(f.a,{type:"button",margin:"0px 10px"},void 0,l("a",{href:"https://github.com/eristow/web-daw-backend"},void 0,"Web DAW Back-End Code")));function m(){var e=b(Object(r.useState)(!1),2),t=e[0],n=e[1],o=b(Object(r.useState)(!1),2),a=o[0],c=o[1];return l("div",{},void 0,v,t?s:i.a.createElement(i.a.Fragment,null),a?h:i.a.createElement(i.a.Fragment,null),l(p,{},void 0,l(f.a,{type:"button",onClick:function(){return n(!0)}},void 0,"Stock App"),l(f.a,{type:"button",margin:"0px 10px",onClick:function(){return c(!0)}},void 0,"TicTacToe")),y,w)}var k=Object(c.connect)(null,(function(e){return{dispatch:e}}));t.default=Object(d.compose)(k)(m)}}]);