(this["webpackJsonpmovies-game"]=this["webpackJsonpmovies-game"]||[]).push([[0],{48:function(e,n,t){e.exports=t(81)},73:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(16),o=t.n(c),i=t(11),s=t(15),u=t(9),l=t.n(u),d=t(13),m=t(40),p=t.n(m);t(70).config();var f=p.a.create({baseURL:"https://movies-game-api-edumoreira1506.herokuapp.com/api/",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}}),h=function(){var e=Object(d.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("setup");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(d.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.post("ranking",n);case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(d.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("ranking");case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){return{sentence:e.sentence,options:e.answers.map((function(e){return w(e.answer,e.correct)}))}},w=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{answer:e,correct:n,checked:t,disabled:a}},b=function(){var e=Object(d.a)(l.a.mark((function e(n){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,a=t.quizzes,r=a.map(k),e.abrupt("return",n(r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=function(e){return e.reduce((function(e,n){return function(e){return e.options.find((function(e){return Boolean(e.correct)}))}(n).checked?e+1:e}),0)},C=function(e,n){return 100*e/n},j=Object(a.createContext)(),O=function(e){var n=e.children,t=Object(a.useState)([]),c=Object(i.a)(t,2),o=c[0],u=c[1],l=Object(a.useState)(!1),d=Object(i.a)(l,2),m=d[0],p=d[1],f=Object(a.useState)(!1),h=Object(i.a)(f,2),v=h[0],k=h[1],w=Object(a.useState)(!1),O=Object(i.a)(w,2),_=O[0],y=O[1],N={quizzes:o,started:m,handleStartGame:function(){k(!0);u(b((function(e){u(e),p(!0),k(!1)})))},handleChangeCheck:function(e,n){var t=function(e,n,t){return e.map((function(e,a){if(a===n){var r=e.options.map((function(e){return e.answer===t?Object(s.a)({},e,{checked:!0}):Object(s.a)({},e,{checked:!1})}));return Object(s.a)({},e,{options:r})}return Object(s.a)({},e)}))}(o,e,n);u(t)},handleFinishGame:function(){var e=window.prompt("Digite seu nome para registrarmos no ranking."),n=function(e,n){var t=e.map((function(e){return Object(s.a)({},e,{options:e.options.map((function(e){return Object(s.a)({},e,{disabled:!0})}))})})),a=E(e),r=C(a,e.length);return g({points:r,name:n}),{quizzes:t,points:a}}(o,e),t=n.quizzes,a=n.points;alert("Voc\xea acertou ".concat(a," de ").concat(t.length," perguntas.")),p(!1),u(t)},loading:v,toggleRanking:function(){return y(!_)},showRanking:_};return r.a.createElement(j.Provider,{value:N},n)},_=t(100),y=t(98),N=t(102),x=t(103),R=t(104),A=t(101),z=(t(73),function(e,n){return"\n    Question__answer\n    ".concat(e&&n?"Question__answer--correct":"","\n  ")}),S=function(e){var n=e.sentence,t=e.options,a=e.handleChangeCheck,c=e.finished;return r.a.createElement("div",{className:"Question"},r.a.createElement("h2",{className:"Question__title"},n),r.a.createElement(N.a,{component:"fieldset"},r.a.createElement(x.a,null,t.map((function(e,n){return r.a.createElement("div",{className:z(c,e.correct),key:"".concat(e.answer,"-").concat(n)},r.a.createElement(R.a,{value:e.answer,label:e.answer,control:r.a.createElement(A.a,null),checked:e.checked,onChange:function(){return a(e.answer)},disabled:e.disabled}))})))))},T=function(e){var n=e.quizzes,t=e.handleChangeCheck,a=e.handleFinishGame,c=e.started;return r.a.createElement("div",{className:"Questions"},r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"auto",flexDirection:"column"},n.map((function(e,n){return r.a.createElement(S,{key:"".concat(e.sentence,"-").concat(n),sentence:e.sentence,options:e.options,handleChangeCheck:function(e){return t(n,e)},finished:!c})})),c&&r.a.createElement(_.a,{marginTop:"30px",marginBottom:"30px"},r.a.createElement(y.a,{variant:"contained",onClick:a,color:"primary"},"Checar respostas"))))},P=(t(78),function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("span",{className:"Loading__spinner"}))}),W=function(){var e=Object(d.a)(l.a.mark((function e(n){var t,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:return t=e.sent,a=t.ranking,r=a.map(q),e.abrupt("return",n(r));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),q=function(e){var n=e.id,t=e.points,a=e.created_at;return{name:e.name,id:n,points:t,createdAt:new Date(a)}},F=(t(79),function(e){var n=e.onClose,t=Object(a.useState)([]),c=Object(i.a)(t,2),o=c[0],s=c[1];return Object(a.useEffect)((function(){W(s)}),[]),r.a.createElement("div",{className:"RankingBackground"},r.a.createElement("div",{className:"Ranking"},r.a.createElement("span",{className:"Ranking__close-button",onClick:n},"X"),r.a.createElement("div",{className:"Ranking__header"},r.a.createElement("h2",{className:"Ranking__area"},"Nome"),r.a.createElement("h2",{className:"Ranking__area"},"Pontua\xe7\xe3o"),r.a.createElement("h2",{className:"Ranking__area"},"Data")),r.a.createElement("div",{className:"Ranking__body"},o.map((function(e){return r.a.createElement(a.Fragment,{key:e.id},r.a.createElement("h2",{className:"Ranking__area"},e.name),r.a.createElement("h2",{className:"Ranking__area"},e.points,"%"),r.a.createElement("h2",{className:"Ranking__area"},"".concat(e.createdAt.getDay(),"/").concat(e.createdAt.getMonth()+1,"/").concat(e.createdAt.getFullYear())))})))))}),G=function(){var e=Object(a.useContext)(j),n=e.started,t=e.handleStartGame,c=e.quizzes,o=e.handleChangeCheck,i=e.handleFinishGame,s=e.loading,u=e.toggleRanking,l=e.showRanking;return s?r.a.createElement(P,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{quizzes:c,handleChangeCheck:o,handleFinishGame:i,started:n}),r.a.createElement(_.a,{display:"flex",alignItems:"center",justifyContent:"space-around",width:"100vw",height:"auto",margin:"10px 0"},r.a.createElement(y.a,{variant:"contained",onClick:t,color:"primary",disabled:n},"Come\xe7ar!"),r.a.createElement(y.a,{variant:"contained",onClick:u,color:"primary"},"Ranking")),l&&r.a.createElement(F,{onClose:u}))},D=function(){return r.a.createElement(O,null,r.a.createElement(G,null))},L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(80);o.a.render(r.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/movies-game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/movies-game","/service-worker.js");L?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(n,e)}))}}()}},[[48,1,2]]]);
//# sourceMappingURL=main.1d30bece.chunk.js.map