(this["webpackJsonpmovies-game"]=this["webpackJsonpmovies-game"]||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"Toy Story":["Ao infinito e al\xe9m!","Isso n\xe3o \xe9 voar. \xc9 cair, com estilo!"],"Vida de Inseto":["Agora, pode parecer que voc\xea n\xe3o consegue fazer qualquer coisa, mas \xe9 s\xf3 porque voc\xea n\xe3o \xe9 uma \xe1rvore ainda. Voc\xea s\xf3 precisa se dar mais tempo, voc\xea ainda \xe9 uma semente."],"Monstros SA":["No susto e no grito, fazemos bonito!","Tu \xe9s para mim um chuchu que colhi na vida."],"Procurando Nemo":["P Sherman 42 Wallaby Way Sydney","Minhoca Hu! Ha! Ha!","Ta me ouvindo minhoca?","Eu sei falar balei\xeas"],"Os Incr\xedveis":["Eu nuca olho para tr\xe1s, querida. Isso distrai do agora"],"Carros":["\xc9 tipo tomate, mas sem o to.","Antigamente os carros n\xe3o dirigiam para ganhar tempo, dirigiam para aproveitar o tempo"],"Ratatouille":["Todo mundo pode cozinhar!"]}')},37:function(e,n,t){e.exports=t(50)},44:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),i=t(10),u=t(12),s=t(19),l=t(25),m=function(){var e=d(),n=s[e];return Object(l.sample)(n)},d=function(){var e=Object.keys(s);return Object(l.sample)(e)},h=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{answer:e,correct:n,checked:t,disabled:a}},p=function(e){return e.map((function(e){var n=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=n;do{var a=d();t.includes(a)||t.push(a)}while(t.length<e);return t}(5,[function(e){return Object.keys(s).find((function(n){return s[n].includes(e)}))}(e)]).map((function(e,n){return h(e,!n)}));return{sentence:e,options:Object(l.shuffle)(n)}}))},f=function(){var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=n;do{var a=m();t.includes(a)||t.push(a)}while(t.length<e);return t}(5);return p(e)},v=function(e){return e.reduce((function(e,n){return function(e){return e.options.find((function(e){return Boolean(e.correct)}))}(n).checked?e+1:e}),0)},g=Object(a.createContext)(),b=function(e){var n=e.children,t=Object(a.useState)([]),o=Object(i.a)(t,2),c=o[0],s=o[1],l=Object(a.useState)(!1),m=Object(i.a)(l,2),d=m[0],h=m[1],p={quizzes:c,started:d,handleStartGame:function(){h(!0),s(f())},handleChangeCheck:function(e,n){var t=function(e,n,t){return e.map((function(e,a){if(a===n){var r=e.options.map((function(e){return e.answer===t?Object(u.a)({},e,{checked:!0}):Object(u.a)({},e,{checked:!1})}));return Object(u.a)({},e,{options:r})}return Object(u.a)({},e)}))}(c,e,n);s(t)},handleFinishGame:function(){var e=function(e){return{quizzes:e.map((function(e){return Object(u.a)({},e,{options:e.options.map((function(e){return Object(u.a)({},e,{disabled:!0})}))})})),points:v(e)}}(c),n=e.quizzes,t=e.points;alert("Voc\xea acertou ".concat(t," de ").concat(n.length," perguntas.")),h(!1),s(n)}};return r.a.createElement(g.Provider,{value:p},n)},C=t(69),E=t(67),k=t(71),j=t(74),O=t(72),y=t(70),z=(t(44),function(e){var n=e.sentence,t=e.options,a=e.handleChangeCheck;return r.a.createElement("div",{className:"Question"},r.a.createElement("h2",{className:"Question__title"},n),r.a.createElement(k.a,{component:"fieldset"},r.a.createElement(j.a,null,t.map((function(e,n){return r.a.createElement(O.a,{key:"".concat(e.answer,"-").concat(n),value:e.answer,label:e.answer,control:r.a.createElement(y.a,null),checked:e.checked,onChange:function(){return a(e.answer)},disabled:e.disabled})})))))}),w=function(e){var n=e.quizzes,t=e.handleChangeCheck,a=e.handleFinishGame;return r.a.createElement("div",{className:"Questions"},r.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"auto",flexDirection:"column"},n.map((function(e,n){return r.a.createElement(z,{key:"".concat(e.sentence,"-").concat(n),sentence:e.sentence,options:e.options,handleChangeCheck:function(e){return t(n,e)}})})),r.a.createElement(C.a,{marginTop:"30px",marginBottom:"30px"},r.a.createElement(E.a,{variant:"contained",onClick:a,color:"primary"},"Checar respostas"))))},q=function(){var e=Object(a.useContext)(g),n=e.started,t=e.handleStartGame,o=e.quizzes,c=e.handleChangeCheck,i=e.handleFinishGame;return n?r.a.createElement(r.a.Fragment,null,r.a.createElement(w,{quizzes:o,handleChangeCheck:c,handleFinishGame:i})):r.a.createElement(C.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100vw",height:"100vh"},r.a.createElement(E.a,{variant:"contained",onClick:t,color:"primary"},"Come\xe7ar!"))},x=function(){return r.a.createElement(b,null,r.a.createElement(q,null))};t(49);c.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.b1a5793a.chunk.js.map