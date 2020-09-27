(this.webpackJsonpatis=this.webpackJsonpatis||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),i=n.n(r),c=n(15),s=n(5),u=n(44),l=n(14),p=n(4),m=n(28),f=n.n(m),d=n(45),b=n(23),_=n.n(b),h=_.a.create({baseURL:"https://atis-f5916.firebaseio.com/",headers:{Accept:"application/json","Content-Type":"application/json"}}),E="[CANCELLATION PROCESS] Operation canceled due to the API limits.",O=function(e){return{type:"POST_ANSWER_REQUEST",payload:e}},w=function(e){return{type:"GET_TEST_REQUEST",payload:e}},v=function(e){return{type:"GET_TOPICS_REQUEST",payload:e}},T=function(e){return{type:"REQUEST_FAILURE",payload:e}},g=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var o;return function(){var t=Object(d.a)(f.a.mark((function t(a){var r,i,c,s,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a({type:"INITIALIZE_REQUEST"}),o&&o.cancel(E),r=_.a.CancelToken,o=r.source(),t.prev=4,"POST_ANSWER"!==e){t.next=13;break}return c=n[0],s=n[1],t.next=9,h.post("/gathered/".concat(c,"/answers.json"),JSON.stringify(s),{cancelToken:o.token});case 9:i=t.sent,a(O(i.data)),t.next=26;break;case 13:if("GET_TEST"!==e){t.next=21;break}return u=n,t.next=17,h.get("/test/".concat(u,".json"),{cancelToken:o.token});case 17:i=t.sent,a(w(i.data)),t.next=26;break;case 21:if("GET_TOPICS"!==e){t.next=26;break}return t.next=24,h.get("/topics.json",{cancelToken:o.token});case 24:i=t.sent,a(v(i.data));case 26:t.next=31;break;case 28:t.prev=28,t.t0=t.catch(4),a(T(t.t0));case 31:case"end":return t.stop()}}),t,null,[[4,28]])})));return function(e){return t.apply(this,arguments)}}()},y=function(e){return Object(s.d)(e,s.b)},k=n(3),N=n(20),j=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},S=function(e,t){"Enter"===e.key&&t()},R=function(e,t,n){return e?t:"".concat(t," ").concat(n)},q=function(e){return JSON.parse(JSON.stringify(e,Object.getOwnPropertyNames(e)))},A=function(e){return Object.keys(e).length},C=n(21),x=n.n(C),I=function(e){var t,n=e.direction,a=e.outerClass,r=e.title,i=e.clickHandler;switch(n){case"top":t=x.a.arrowTop;break;case"right":t=x.a.arrowRight;break;case"bottom":t=x.a.arrowBottom;break;case"left":t=x.a.arrowLeft}return o.a.createElement("div",{className:a},o.a.createElement("span",{role:"button",tabIndex:0,className:t,title:r,onClick:i,onKeyDown:function(e){return S(e,i)}}))};I.defaultProps={direction:"top",title:"Control button"};var L=n(11),W=n.n(L),F=function(e){var t,n=e.label,r=e.options,i=e.isActive,c=Object(s.c)(),u=Object(p.g)(),l=Object(a.useState)({activeOption:0,filteredOptions:[],showOptions:!1,userInput:""}),m=Object(N.a)(l,2),f=m[0],d=m[1],b=f.activeOption,_=f.filteredOptions,h=f.showOptions,E=f.userInput,O=Object(a.useState)(!i),w=Object(N.a)(O,2),v=w[0],T=w[1],y=function(e){d({activeOption:0,filteredOptions:[],showOptions:!1,userInput:e.currentTarget.innerText})},j=function(e){d((function(t){return Object(k.a)(Object(k.a)({},t),{},{activeOption:e})}))};0!==E.length&&h&&(t=0!==_.length?o.a.createElement("ul",{className:W.a.options},_.map((function(e,t){return o.a.createElement("li",{role:"menuitem",className:t===b?W.a.optionActive:"",key:e,onClick:y,onKeyDown:function(e){return S(e,y)}},e)}))):o.a.createElement("div",{className:W.a.noShow},"Nothing to show. You are on your own!"));var R=o.a.createElement(I,{direction:"right",outerClass:W.a.continueWrapper,title:"Continue to the test",clickHandler:function(){c(g("GET_TEST",E)),u.push("/aTis/test")}}),q=Object(a.useMemo)((function(){return"".concat(W.a.inputField," ").concat((i?v||0!==E.length:v)&&W.a.active||""," ").concat(!i&&!v&&W.a.inactive||"")}),[i,E,v]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:q},o.a.createElement("input",{id:"autocomplete-field",type:"text",name:"Autocomplete input field",value:E,placeholder:i?n:"",onChange:function(e){var t=e.currentTarget.value,n=r.filter((function(e){return e.toLowerCase().indexOf(t.toLowerCase())>-1}));d({activeOption:0,filteredOptions:n,showOptions:!0,userInput:e.currentTarget.value})},onKeyDown:function(e){13===e.keyCode?d((function(e){return Object(k.a)(Object(k.a)({},e),{},{activeOption:0,showOptions:!1,userInput:_[b]||e.userInput})})):38===e.keyCode?j(0===b?_.length-1:b-1):40===e.keyCode&&(b===_.length-1?j(0):j(b+1))},onFocus:function(){return i&&T(!0)},onBlur:function(){return i&&T(!1)},disabled:!i,autoComplete:"off"}),o.a.createElement("label",{htmlFor:"autocomplete-field"},i&&n),i&&E&&r.includes(E)&&R),t)};F.defaultProps={label:"I am a default label! My owner is too lazy to change me.",isActive:!0};var Q=n(25),P=n.n(Q),U=Object(a.memo)((function(){var e=Object(s.c)();Object(a.useEffect)((function(){e(g("GET_TOPICS"))}),[e]);var t=y((function(e){return e.availableTopics})),n=Object(s.d)((function(e){return e.isLoading}));return o.a.createElement("main",{className:P.a.main},o.a.createElement("h1",{className:P.a.title},n?"Wait a second ...":"Just start typing ..."),o.a.createElement(F,{label:"Anonymous Testing Intelligent Service",options:t,isActive:!n}),o.a.createElement("footer",{className:P.a.footer},"v".concat("1.0.1"),o.a.createElement("a",{href:"https://github.com/AshenNagamaki",rel:"noopener noreferrer",target:"_blank"},"Change my mind")))})),D=n(46),B=n(47),J=n.n(B),G=n(1),M=n.n(G),H=n(31),K=n.n(H),Y=Object(a.memo)((function(e){var t=e.qNum,n=e.oNum,a=e.option,r=Object(s.c)(),i=Object(s.d)((function(e){return e.answers[t]})),c=Object(s.d)((function(e){return e.isLoading})),u=String.fromCharCode(65+n),l=function(e,t){return r(function(e,t){return{type:"ADD_ANSWER",questionNumber:e,optionNumber:t}}(e,t))},p=R(i!==u,K.a.option,K.a.active);return o.a.createElement("li",{role:"button",className:p,onClick:function(){!c&&l(t,u)},onKeyDown:function(e){return S(e,l(t,u))}},u," ",a)})),Z=n(48),V=n.n(Z),X=Object(a.memo)((function(e){var t=e.qNum,n=e.options.map((function(e,n){return o.a.createElement(Y,{key:e,qNum:t,oNum:n,option:e})}));return o.a.createElement("ol",{className:V.a.options},n)})),z=n(16),$=n.n(z),ee=Object(a.memo)((function(e){var t=e.qNum,n=e.question,a=e.options,r=e.answers;return o.a.createElement("li",{className:$.a.question},o.a.createElement("span",{className:R(!r[t],$.a.indicator,$.a.inactive)}),o.a.createElement("p",{className:$.a.questionText},t+1,". ",n),o.a.createElement("p",{className:$.a.answerTitle},"Answer"),o.a.createElement(X,{qNum:t,options:a}))}));ee.propTypes={qNum:M.a.number.isRequired,question:M.a.oneOfType([M.a.string,M.a.number]).isRequired,options:M.a.arrayOf(M.a.oneOfType([M.a.string,M.a.number])).isRequired,answers:M.a.arrayOf(M.a.string).isRequired};var te=n(49),ne=n.n(te),ae=function(e){var t=e.bName,n=e.bValue,a=e.isDisabled,r=e.clickHandler,i=e.children;return o.a.createElement("button",{className:ne.a.button,type:"button",name:t,value:n,disabled:a,onClick:r},i)};ae.defaultProps={isDisabled:!1};var oe=n(12),re=n.n(oe),ie=Object(D.a)((function(e){return e.reqResponse}),(function(e){return A(e)})),ce=Object(a.memo)((function(e){var t=e.history,n=Object(s.c)(),r=y((function(e){return e.test})),i=r.topic,c=r.author,u=r.questions,l=r.options,m=y((function(e){return e.answers})),f=Object(s.d)((function(e){return e.isLoading})),d=Object(s.d)(ie),b=Object(a.useState)(!1),_=Object(N.a)(b,2),h=_[0],E=_[1],O=function(){n({type:"CLEAR_STATE"}),t.push("/aTis")},w=Object(a.useCallback)((function(){return n(g("POST_ANSWER",i,m))}),[i,m,n]),v=Object(a.useCallback)((function(){!h&&window.pageYOffset>325?E(!0):h&&window.pageYOffset<=325&&E(!1)}),[h]);Object(a.useEffect)((function(){return document.addEventListener("scroll",v),function(){window.removeEventListener("scroll",v)}}),[v]),Object(a.useEffect)((function(){d>1&&t.push("/aTis/outcome")}),[d,t]);var T=u&&0!==u.length&&m.length===u.length,k=o.a.createElement(I,{direction:"left",outerClass:re.a.returnWrapper,title:"Return to the initial window",clickHandler:O}),S=o.a.createElement(I,{direction:"top",outerClass:re.a.backToTopWrapper,title:"Back to top",clickHandler:j}),R=o.a.createElement(J.a,{type:"Bars",width:60,height:60,color:"#f7f7f7",visible:f}),q=u&&0!==u.length&&u.map((function(e,t){return o.a.createElement(ee,{key:"".concat(e),qNum:t,question:e,options:l&&l[t],answers:m})})),C=o.a.createElement(o.a.Fragment,null,o.a.createElement(ae,{bName:"Answers submit button",bValue:"Submit answers",isDisabled:!T,clickHandler:w},T?"Submit answers":"Please answer all the questions to proceed"),o.a.createElement("button",{className:re.a.questionsReturn,type:"button",name:"Return button",value:"OR return to the initial window",onClick:O},"OR return to the initial window")),x=o.a.createElement("section",{className:re.a.questionsWrapper},o.a.createElement("h1",{className:re.a.title},i),o.a.createElement("h3",{className:re.a.author},c&&"by ".concat(c)),!f&&k,o.a.createElement("ul",{className:re.a.questions},q),f?R:C,h&&S);return f||A(r)>1?x:o.a.createElement(p.a,{exact:!0,strict:!0,sensitive:!0,from:"/aTis/test",to:"/aTis"})})),se=n(50),ue=(n(99),n(13)),le=n.n(ue),pe=n(32),me=n.n(pe),fe=Object(a.memo)((function(e){var t=e.history,n=y((function(e){return e.reqResponse})),a=!n.reqFailed,r=R(a,le.a.image,le.a.onFailure),i=o.a.createElement("div",{className:le.a.outcome},o.a.createElement(se.LazyLoadImage,{className:r,src:me.a,alt:a?"Successfully completed":"Something went wrong",delayMethod:"debounce",effect:"blur",placeholderSrc:me.a}),o.a.createElement("h1",{className:le.a.status},a?"Success!":"What the ...?"),o.a.createElement("h5",{className:le.a.topic},a?"Your results were successfully submitted for review!":"Looks like something went wrong!"),o.a.createElement("h5",{className:le.a.message},a?"Don't know what to do next? Go back and explore some other stuff.":"We had some issues submitting your answers. Please try again later."),o.a.createElement(ae,{bName:"Return button",bValue:"Return to the initial window",clickHandler:function(){return t.push("/aTis")}},"Take me back"));return A(n)>1?i:o.a.createElement(p.a,{exact:!0,strict:!0,sensitive:!0,from:"/aTis/outcome",to:"/aTis"})})),de=function(){return o.a.createElement(p.d,null,o.a.createElement(p.b,{exact:!0,sensitive:!0,path:"/aTis/outcome",component:fe}),o.a.createElement(p.b,{exact:!0,sensitive:!0,path:"/aTis/test",component:ce}),o.a.createElement(p.b,{path:"*",component:U}))},be=n(51),_e={availableTopics:[],test:{},answers:[],isLoading:!1,reqResponse:{}},he=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(100);var Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||c.c,we=Object(c.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ANSWER":var n=Object(be.a)(e.answers);return n[t.questionNumber]=t.optionNumber,Object(k.a)(Object(k.a)({},e),{},{answers:n});case"INITIALIZE_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{isLoading:!0});case"GET_TOPICS_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{availableTopics:t.payload,isLoading:!1,reqResponse:{reqFailed:!1}});case"GET_TEST_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{test:t.payload,isLoading:!1,reqResponse:{reqFailed:!1}});case"POST_ANSWER_REQUEST":return Object(k.a)(Object(k.a)({},e),{},{test:{},answers:[],isLoading:!1,reqResponse:Object(k.a)(Object(k.a)({},t.payload),{},{reqFailed:!1})});case"REQUEST_FAILURE":return Object(k.a)(Object(k.a)({},e),{},{test:{},answers:[],isLoading:!1,reqResponse:Object(k.a)(Object(k.a)({},q(t.payload)),{},{reqFailed:!0})});case"CLEAR_STATE":return _e;default:return e}}),Oe(Object(c.a)(u.a)));i.a.render(o.a.createElement(l.a,{forceRefresh:!1,keyLength:12},o.a.createElement(s.a,{store:we},o.a.createElement(de,null))),document.getElementById("react-root")),function(e){if("serviceWorker"in navigator){if(new URL("/aTis",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/aTis","/service-worker.js");he?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ee(t,e)}))}}()},11:function(e,t,n){e.exports={inputField:"AutocompleteField_inputField__UV0rQ",active:"AutocompleteField_active__2JxcN",inactive:"AutocompleteField_inactive__1kscu",continueWrapper:"AutocompleteField_continueWrapper__bQGhU",options:"AutocompleteField_options__X7dk7",optionActive:"AutocompleteField_optionActive__wZMI9",noShow:"AutocompleteField_noShow__30k3_"}},12:function(e,t,n){e.exports={questionsWrapper:"QuestionsTablet_questionsWrapper__1fS4C",questions:"QuestionsTablet_questions__2WxQD",title:"QuestionsTablet_title__2RZ9E",author:"QuestionsTablet_author__16q5q",questionsReturn:"QuestionsTablet_questionsReturn__SDy6u",backToTopWrapper:"QuestionsTablet_backToTopWrapper__1sKZh",returnWrapper:"QuestionsTablet_returnWrapper__2xOIa"}},13:function(e,t,n){e.exports={outcome:"Outcome_outcome__XAoEu",image:"Outcome_image__1Ipwo",onFailure:"Outcome_onFailure__BsfsD",status:"Outcome_status__3PnwX",topic:"Outcome_topic__1b8v8",message:"Outcome_message__M0G3t"}},16:function(e,t,n){e.exports={question:"Question_question__1Joyc",indicator:"Question_indicator__1JFCy",inactive:"Question_inactive__3p87E",questionText:"Question_questionText__1QfqT",answerTitle:"Question_answerTitle__1tHsi"}},21:function(e,t,n){e.exports={arrowTop:"ControlButton_arrowTop__1Z2BW",arrowRight:"ControlButton_arrowRight__1rR7i",arrowBottom:"ControlButton_arrowBottom__2gaaY",arrowLeft:"ControlButton_arrowLeft__qFRij"}},25:function(e,t,n){e.exports={main:"Main_main__3JhNz",title:"Main_title__2sJBY",footer:"Main_footer__3AekE"}},31:function(e,t,n){e.exports={option:"Option_option__3JaSi",active:"Option_active__13yNC"}},32:function(e,t,n){e.exports=n.p+"static/media/outcomeImage.e6e4d7b7.png"},48:function(e,t,n){e.exports={options:"Options_options__19g0J"}},49:function(e,t,n){e.exports={button:"Button_button__32FwK"}},52:function(e,t,n){e.exports=n(101)}},[[52,1,2]]]);
//# sourceMappingURL=main.69de1b4d.chunk.js.map