(this.webpackJsonpgatherr=this.webpackJsonpgatherr||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(22),s=n.n(o),c=(n(28),n(4)),i=n(5),u=n(7),l=n(6),d=(n(29),n(30),n(0)),h=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).setCollapsed=function(){e.setState((function(e){return{collapsed:!e.collapsed}}))},e.state={collapsed:!0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.collapsed,t=this.props.event,n=t.summary,a=t.location,r=t.start,o=t.htmlLink,s=t.description;return Object(d.jsxs)("div",{className:"event",children:[Object(d.jsx)("h1",{className:"summary",children:n}),Object(d.jsx)("p",{className:"location",children:a}),Object(d.jsx)("p",{className:"start-date",children:r.dateTime}),e?Object(d.jsx)(d.Fragment,{}):Object(d.jsxs)("div",{className:"more-info",children:[Object(d.jsx)("a",{href:o,target:"_blank",rel:"noreferrer"}),Object(d.jsx)("p",{className:"description",children:s})]}),Object(d.jsx)("button",{onClick:this.setCollapsed,className:"details-btn",children:e?"More Details":"Hide Details"})]})}}]),n}(r.a.Component);var m=function(e){var t=e.events;return Object(d.jsx)("ul",{className:"EventList",children:t.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{event:e})},e.id)}))})},p=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=Number(t.target.value);e.setState({eventNumber:n})},e.state={eventNumber:32},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"NumberOfEvents",children:[Object(d.jsx)("label",{htmlFor:"event-number",children:"Number of events: "}),Object(d.jsx)("input",{name:"event-number",type:"number",className:"events-input",value:this.state.eventNumber,min:"1",max:"32",onChange:this.handleChange})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).handleInputChange=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t)},e.state={query:"",suggestions:[],showSuggestions:void 0},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.query,a=t.suggestions,r=t.showSuggestions;return Object(d.jsxs)("div",{className:"CitySearch",children:[Object(d.jsx)("input",{type:"text",className:"city",id:"city",value:n,onChange:this.handleInputChange,onFocus:function(){return e.setState({showSuggestions:!0})}}),Object(d.jsxs)("ul",{className:"suggestions",style:r?{}:{display:"none"},children:[a.map((function(t){return Object(d.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(d.jsx)("li",{className:"city-btn",onClick:function(){return e.handleItemClicked("all")},children:Object(d.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(r.a.Component),v=n(3),b=n.n(v),g=n(8),j=n(23),w=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],x=n(13),k=n.n(x),y=n(11),O=n.n(y),S=function(e){var t=e.map((function(e){return e.location}));return Object(j.a)(new Set(t))},T=function(){var e=Object(g.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(g.a)(b.a.mark((function e(t){var n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),"https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/api/token",e.next=4,fetch("".concat("https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/api/token","/").concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 4:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e,t=window.location,n=t.protocol,a=t.host,r=t.pathname;window.history.pushState&&window.location.pathname?(e="".concat(n,"//").concat(a).concat(r),window.history.pushState("","",e)):(e="".concat(n,"//").concat(a),window.history.pushState("","",e))},Z=function(){var e=Object(g.a)(b.a.mark((function e(){var t,n,a,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return O.a.done(),e.abrupt("return",w);case 4:return e.next=6,I();case 6:if(t=e.sent,"https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/api/get-events",!t){e.next=18;break}return N(),n="".concat("https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/api/get-events","/").concat(t),e.next=13,k.a.get(n);case 13:return a=e.sent,r=a.data.events,a.data&&(o=S(r),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(o))),O.a.done(),e.abrupt("return",r);case 18:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(g.a)(b.a.mark((function e(){var t,n,a,r,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,T(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,k.a.get("https://n1dndio4ce.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&C());case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).updateEvents=function(t){Z().then((function(n){var a="all"===t?n:n.filter((function(e){return e.location===t}));e.setState({events:a})}))},e.state={events:[],locations:[]},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,Z().then((function(t){e.mounted&&e.setState({events:t,locations:S(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.events,n=e.locations;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(f,{locations:n,updateEvents:this.updateEvents}),Object(d.jsx)(p,{}),Object(d.jsx)(m,{events:t})]})}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),E()}},[[51,1,2]]]);
//# sourceMappingURL=main.b3b8c009.chunk.js.map