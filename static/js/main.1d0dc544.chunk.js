(this["webpackJsonpmovies-game"]=this["webpackJsonpmovies-game"]||[]).push([[0],{48:function(e,n,t){e.exports=t(81)},73:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),o=t.n(c),i=t(4),s=t.n(i),u=t(9),l=t(11),f=t(15),p=t(40),d=t.n(p);t(70).config();var m=d.a.create({baseURL:"https://movies-game-api-edumoreira1506.herokuapp.com/api/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),h=function(){var e=Object(u.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("setup");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.post("ranking",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("ranking");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("category");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.get("category/".concat(n,"/movie"));case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(n.id);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=function(e){return{sentence:e.sentence,options:e.answers.map((function(e){return O(e.answer,e.correct)}))}},O=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{answer:e,correct:n,checked:t,disabled:a}},y=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,a=t.quizzes,r=a.map(j),e.abrupt("return",n(r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(s.a.mark((function e(n,t){var a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(n);case 2:return a=e.sent,r=a.quizzes,c=r.map(j),e.abrupt("return",t(c));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),x=function(e){return e.reduce((function(e,n){return function(e){return e.options.find((function(e){return Boolean(e.correct)}))}(n).checked?e+1:e}),0)},_=function(e,n){return 100*e/n},N=function(){return window.localStorage.getItem("username")},R=function(){!function(e){window.localStorage.setItem("username",e)}(window.prompt("Como essa \xe9 a primeira vez que voc\xea est\xe1 jogando, qual seu nome?"))},S=Object(a.createContext)(),z=function(e){var n=e.children,t=Object(a.useState)([]),c=Object(l.a)(t,2),o=c[0],i=c[1],p=Object(a.useState)([]),d=Object(l.a)(p,2),m=d[0],h=d[1],v=Object(a.useState)(!1),w=Object(l.a)(v,2),k=w[0],E=w[1],j=Object(a.useState)(!0),O=Object(l.a)(j,2),z=O[0],A=O[1],q=Object(a.useState)(!1),T=Object(l.a)(q,2),P=T[0],W=T[1];Object(a.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var n,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:n=e.sent,t=n.categories,h(t),A(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var F={quizzes:o,started:k,handleStartGame:function(){A(!0);i(y((function(e){i(e),E(!0),A(!1)})))},handleChangeCheck:function(e,n){var t=function(e,n,t){return e.map((function(e,a){if(a===n){var r=e.options.map((function(e){return e.answer===t?Object(f.a)({},e,{checked:!0}):Object(f.a)({},e,{checked:!1})}));return Object(f.a)({},e,{options:r})}return Object(f.a)({},e)}))}(o,e,n);i(t)},handleFinishGame:function(){var e=N(),n=function(e,n){var t=e.map((function(e){return Object(f.a)({},e,{options:e.options.map((function(e){return Object(f.a)({},e,{disabled:!0})}))})})),a=x(e),r=_(a,e.length);return g({points:r,name:n}),{quizzes:t,points:a}}(o,e),t=n.quizzes,a=n.points;alert("Voc\xea acertou ".concat(a," de ").concat(t.length," perguntas.")),E(!1),i(t)},loading:z,toggleRanking:function(){return W(!P)},showRanking:P,categories:m,handleSelectCategory:function(e){A(!0);i(C(e,(function(e){i(e),E(!0),A(!1)})))}};return Boolean(N())||R(),r.a.createElement(S.Provider,{value:F},n)},A=t(100),q=t(98),T=t(102),P=t(103),W=t(104),F=t(101),G=(t(73),function(e,n){return"\n    Question__answer\n    ".concat(e&&n?"Question__answer--correct":"","\n  ")}),B=function(e){var n=e.sentence,t=e.options,a=e.handleChangeCheck,c=e.finished;return r.a.createElement("div",{className:"Question"},r.a.createElement("h2",{className:"Question__title"},n),r.a.createElement(T.a,{component:"fieldset"},r.a.createElement(P.a,null,t.map((function(e,n){return r.a.createElement("div",{className:G(c,e.correct),key:"".concat(e.answer,"-").concat(n)},r.a.createElement(W.a,{value:e.answer,label:e.answer,control:r.a.createElement(F.a,null),checked:e.checked,onChange:function(){return a(e.answer)},disabled:e.disabled}))})))))},D=function(e){var n=e.quizzes,t=e.handleChangeCheck,a=e.handleFinishGame,c=e.started;return r.a.createElement("div",{className:"Questions"},r.a.createElement(A.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"auto",flexDirection:"column"},n.map((function(e,n){return r.a.createElement(B,{key:"".concat(e.sentence,"-").concat(n),sentence:e.sentence,options:e.options,handleChangeCheck:function(e){return t(n,e)},finished:!c})})),c&&r.a.createElement(A.a,{marginTop:"30px",marginBottom:"30px"},r.a.createElement(q.a,{variant:"contained",onClick:a,color:"primary"},"Checar respostas"))))},I=(t(78),function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("span",{className:"Loading__spinner"}))}),L=function(){var e=Object(u.a)(s.a.mark((function e(n){var t,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,a=t.ranking,r=a.map(Q),e.abrupt("return",n(r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(e){var n=e.id,t=e.points,a=e.created_at;return{name:e.name,id:n,points:t,createdAt:new Date(a)}},U=(t(79),function(e){var n=e.onClose,t=Object(a.useState)([]),c=Object(l.a)(t,2),o=c[0],i=c[1];return Object(a.useEffect)((function(){L(i)}),[]),r.a.createElement("div",{className:"RankingBackground"},r.a.createElement("div",{className:"Ranking"},r.a.createElement("span",{className:"Ranking__close-button",onClick:n},"X"),r.a.createElement("div",{className:"Ranking__header"},r.a.createElement("h2",{className:"Ranking__area"},"Nome"),r.a.createElement("h2",{className:"Ranking__area"},"Pontua\xe7\xe3o"),r.a.createElement("h2",{className:"Ranking__area"},"Data")),r.a.createElement("div",{className:"Ranking__body"},o.map((function(e){return r.a.createElement(a.Fragment,{key:e.id},r.a.createElement("h2",{className:"Ranking__area"},e.name),r.a.createElement("h2",{className:"Ranking__area"},e.points,"%"),r.a.createElement("h2",{className:"Ranking__area"},"".concat(e.createdAt.getDay(),"/").concat(e.createdAt.getMonth()+1,"/").concat(e.createdAt.getFullYear())))})))))}),J=function(){var e=Object(a.useContext)(S),n=e.started,t=e.handleStartGame,c=e.quizzes,o=e.handleChangeCheck,i=e.handleFinishGame,s=e.loading,u=e.toggleRanking,l=e.showRanking,f=e.handleSelectCategory,p=e.categories;return s?r.a.createElement(I,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{quizzes:c,handleChangeCheck:o,handleFinishGame:i,started:n}),r.a.createElement(A.a,{display:"flex",alignItems:"center",justifyContent:"space-around",flexDirection:"column",width:"100vw",height:"100vh"},r.a.createElement(q.a,{variant:"contained",onClick:t,color:"primary",disabled:n},"Jogar com todos temas"),p.map((function(e){return r.a.createElement(q.a,{variant:"contained",onClick:function(){return f(e)},color:"primary",disabled:n,key:e.id},e.name)})),r.a.createElement(q.a,{variant:"contained",onClick:u,color:"primary"},"Ranking")),l&&r.a.createElement(U,{onClose:u}))},M=function(){return r.a.createElement(z,null,r.a.createElement(J,null))},H=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(80);o.a.render(r.a.createElement(M,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/movies-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/movies-game","/service-worker.js");H?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(n,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.1d0dc544.chunk.js.map