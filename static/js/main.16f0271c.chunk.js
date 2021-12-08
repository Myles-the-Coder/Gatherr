(this.webpackJsonpgatherr=this.webpackJsonpgatherr||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(23),c=n.n(o),i=(n(30),n(3)),s=n(6),u=n(5),l=n(4),A=(n(31),n(32),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).setCollapsed=function(){e.setState((function(e){return{collapsed:!e.collapsed}}))},e.state={collapsed:!0},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.collapsed,t=this.props.event,n=t.summary,r=t.location,a=t.start,o=t.htmlLink,c=t.description;return Object(A.jsxs)("div",{className:"event",children:[Object(A.jsx)("h1",{className:"summary",children:n}),Object(A.jsx)("p",{className:"location",children:r}),Object(A.jsx)("p",{className:"start-date",children:a.dateTime}),!e&&Object(A.jsxs)("div",{className:"more-info",children:[Object(A.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:"View Event in Calendar"}),Object(A.jsx)("p",{className:"description",children:c})]}),Object(A.jsx)("button",{onClick:this.setCollapsed,className:"details-btn",children:e?"More Details":"Hide Details"})]})}}]),n}(a.a.Component);var f=function(e){var t=e.events;return Object(A.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(A.jsx)("li",{children:Object(A.jsx)(d,{event:e})},e.id)}))})},p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).getStyle=function(){return{color:r.color,fontSize:"1.2rem",backgroundColor:"whitesmoke",padding:"10px",borderRadius:"5px"}},r.color=null,r}return Object(s.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"Alert",children:Object(A.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(r.Component),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="#f8b500",r}return n}(p),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).color="#cc0202",r}return n}(p),m=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=e.props.updateEventNumber,r=t.target.value;r<0||r>32?e.setState({errorText:"Please enter an event number between 0 and 32"}):(e.setState({errorText:""}),n(r))},e.state={errorText:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.errorText,t=this.props.numberOfEvents;return Object(A.jsxs)("div",{className:"NumberOfEvents",children:[Object(A.jsx)("label",{htmlFor:"event-number",children:"Number of events: "}),Object(A.jsx)("input",{name:"event-number",type:"number",className:"events-input",value:t,onChange:this.handleChange}),e&&Object(A.jsx)(v,{text:e})]})}}]),n}(r.Component),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=e.props.locations,r=t.target.value,a=n.filter((function(e){return e.toUpperCase().indexOf(r.toUpperCase())>-1}));0===a.length?e.setState({query:r,infoText:"Cannot find events for that city. Please try another city"}):e.setState({query:r,suggestions:a,infoText:""})},e.handleItemClicked=function(t){var n=e.props.updateEvents;e.setState({query:t,showSuggestions:!1}),n(t)},e.state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,r=t.suggestions,a=t.showSuggestions,o=t.infoText;return Object(A.jsxs)("div",{className:"CitySearch",children:[Object(A.jsx)("input",{type:"text",className:"city",value:n,style:{marginTop:"90px",width:"200px"},placeholder:"Search event by city...",onChange:this.handleInputChange,onFocus:function(){return e.setState({showSuggestions:!0})}}),o&&Object(A.jsx)(h,{text:o}),Object(A.jsxs)("ul",{className:"suggestions",style:a?{}:{display:"none"},children:[r.map((function(t){return Object(A.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(A.jsx)("li",{className:"city-btn",onClick:function(){return e.handleItemClicked("all")},children:Object(A.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.a.Component),g=n(7),j=n.n(g),w=n(8),x=n(25),O=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],k=n(13),C=n.n(k),y=n(9),S=n.n(y),L="https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/",W=function(e){var t=e.map((function(e){return e.location}));return Object(x.a)(new Set(t))},T=function(){var e=Object(w.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(w.a)(j.a.mark((function e(t){var n,r,a,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),r="".concat(L,"api/token"),e.next=4,fetch("".concat(r,"/").concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(o=a.access_token)&&localStorage.setItem("access_token",o),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e,t=window.location,n=t.protocol,r=t.host,a=t.pathname;window.history.pushState&&window.location.pathname?(e="".concat(n,"//").concat(r).concat(a),window.history.pushState("","",e)):(e="".concat(n,"//").concat(r),window.history.pushState("","",e))},E=function(){var e=Object(w.a)(j.a.mark((function e(){var t,n,r,a,o,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return S.a.done(),e.abrupt("return",O);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),S.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,U();case 10:if(!(n=e.sent)){e.next=22;break}return q(),r="".concat(L,"api/get-events"),a="".concat(r,"/").concat(n),e.next=17,C.a.get(a);case 17:return o=e.sent,c=o.data.events,o.data&&(i=W(c),localStorage.setItem("lastEvents",JSON.stringify(o.data)),localStorage.setItem("locations",JSON.stringify(i))),S.a.done(),e.abrupt("return",c);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(w.a)(j.a.mark((function e(){var t,n,r,a,o,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return r=new URLSearchParams(window.location.search),e.next=13,r.get("code");case 13:if(a=e.sent){e.next=20;break}return e.next=17,C.a.get("https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,c=o.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",a&&V(a));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).componentDidMount=function(){e.mounted=!0,E().then((function(t){e.mounted&&e.setState({events:t,locations:W(t)})}))},e.componentWillUnmount=function(){return e.mounted=!1},e.updateEvents=function(t){E().then((function(n){var r="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,e.state.numberOfEvents)})}))},e.updateEventNumber=function(t){var n=e.state.currentLocation;e.setState({numberOfEvents:t}),e.updateEvents(n)},e.state={events:[],locations:[],currentLocation:"all",numberOfEvents:32},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations,r=e.numberOfEvents;return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("img",{src:"data:image/png;base64,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",alt:"Gatherr-logo",className:"logo"}),!navigator.onLine&&Object(A.jsx)(h,{text:"Offline Mode: Data may not be up to date"}),Object(A.jsx)(b,{locations:n,updateEvents:this.updateEvents,numberOfEvents:r}),Object(A.jsx)(m,{numberOfEvents:r,updateEventNumber:this.updateEventNumber}),Object(A.jsx)(f,{events:t})]})}}]),n}(a.a.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),o(e),c(e)}))};n(24).config("af660d4cc6db4544a2dfe42d5349d462").install(),c.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(H,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Gatherr",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Gatherr","/service-worker.js");N?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Z(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Z(t,e)}))}}(),R()}},[[53,1,2]]]);
//# sourceMappingURL=main.16f0271c.chunk.js.map