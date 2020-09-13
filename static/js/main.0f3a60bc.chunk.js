(this["webpackJsonptextsearch-frontend"]=this["webpackJsonptextsearch-frontend"]||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(7),c=n.n(s),r=n(8),i=(n(27),n(6)),l=n(15),u=n(16),d=n.n(u),m=n(1),p={questions:[],isVisibleHomePage:!0,isVisibleAddButton:!1};var h={result:[],showSearchResults:!1};var b=Object(i.c)({question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_QUESTION":return Object(m.a)(Object(m.a)({},e),{},{questions:t.question});case"SHOW_HOME_PAGE":return Object(m.a)(Object(m.a)({},e),{},{isVisibleHomePage:t.isVisibleHomePage,isVisibleAddButton:!1});case"UPDATE_SEARCH_QUESTION":return Object(m.a)(Object(m.a)({},e),{},{isVisibleHomePage:!1,isVisibleAddButton:!1});case"SHOW_ADD_BUTTON":return Object(m.a)(Object(m.a)({},e),{},{isVisibleAddButton:t.isVisibleAddButton,isVisibleHomePage:!1});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SEARCH_QUESTION":return Object(m.a)(Object(m.a)({},e),{},{result:t.question,showSearchResults:!0});case"SHOW_HOME_PAGE":return{showSearchResults:!1};case"SHOW_ADD_BUTTON":return Object(m.a)(Object(m.a)({},e),{},{showSearchResults:!1});default:return e}}});var f=n(2),E=n(3),v=n(5),O=n(4);function g(e){var t=[];for(var n in e){var a=encodeURIComponent(n),o=encodeURIComponent(e[n]);t.push(a+"="+o)}return t.join("&")}function j(){return function(e){fetch("http://54.156.127.15/api/v1/questions",{mode:"cors"}).then((function(e){return console.log(e),e.json()})).then((function(t){e({type:"UPDATE_QUESTION",question:t.questions})}))}}function y(e,t,n){return function(a){fetch("http://54.156.127.15/api/v1/insert",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:g({question:e,topic:t,tags:n})}).then((function(e){return console.log(e),e.json()})).then((function(e){}))}}function N(e){return console.log(e),function(t){fetch("http://54.156.127.15/api/v1/search/tags",{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:g({tags:e})}).then((function(e){return console.log("response",e),e.json()})).then((function(e){console.log("search data",e.question),t({type:"UPDATE_SEARCH_QUESTION",question:e.question})}))}}function A(e){return{type:"SHOW_HOME_PAGE",isVisibleHomePage:e}}function q(e){return{type:"SHOW_ADD_BUTTON",isVisibleAddButton:e}}var S=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleAddQuestion=function(t){t.preventDefault();var n=document.getElementById("question").value,a=document.getElementById("topic").value,o=document.getElementById("tags").value;0!==n.trim().length&&0!==a.trim().length&&0!==o.length&&e.props.dispatch(y(n,a,o))},e}return Object(E.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{id:"question-card",className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",{className:"text-center"},"Add Question"),o.a.createElement("br",null),o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"question",placeholder:"Enter Question",name:"question",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"topic",placeholder:"Enter topic",name:"topic",required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",className:"form-control",id:"tags",placeholder:"Enter tags",name:"tags",required:!0})),o.a.createElement("button",{type:"Add",id:"button",className:"btn btn-primary deep-purple btn-block ",onClick:this.handleAddQuestion},"Submit"))))}}]),n}(a.Component),T=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).handleSearchQuestion=function(t){var n=document.getElementById("search-box").value;0!==n.length&&e.props.dispatch(N(n))},e.handleHomeButton=function(t){e.props.dispatch(A(t)),e.props.dispatch(j())},e.handleAddQuestion=function(t){e.props.dispatch(q(t))},e}return Object(E.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.isVisibleHomePage,a=t.isVisibleAddButton;return o.a.createElement("div",{className:"nav"},o.a.createElement("button",{id:"add-btn",className:"btn btn-light btn-outline-success btn-block ".concat(a?"active":""),onClick:function(){return e.handleAddQuestion(!0)}},"Add Question"),o.a.createElement("button",{id:"home-btn",className:"btn btn-light btn-outline-dark btn-block ".concat(n?"active":""),onClick:function(){return e.handleHomeButton(!0)}},"Home"),o.a.createElement("div",{className:"search-container"},o.a.createElement("input",{id:"search-box",placeholder:"Search Question or Tags..."}),o.a.createElement("button",{id:"search-btn",onClick:this.handleSearchQuestion},"Search")))}}]),n}(a.Component),H=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.no;return o.a.createElement("div",{className:"q-card"},o.a.createElement("div",{className:"left"},o.a.createElement("div",{className:"left-topic"},"Topic"),o.a.createElement("div",{className:"left-question"},"Question:-",n+1),o.a.createElement("div",{className:"left-tags"},"Tags")),o.a.createElement("div",{className:"right"},o.a.createElement("div",{className:"topic"},t.topic),o.a.createElement("div",{className:"question-description"},t.question),o.a.createElement("div",{className:"footer"},t.tags.map((function(e,t){return o.a.createElement("div",{className:"tags",key:"tag-".concat(t)}," ",e)})))))}}]),n}(a.Component),P=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(j())}},{key:"render",value:function(){var e=this,t=this.props.state.question,n=t.isVisibleHomePage,a=t.isVisibleAddButton,s=t.questions,c=this.props.state.search,r=c.result,i=c.showSearchResults,l=i?r:s;return o.a.createElement("div",null,o.a.createElement(T,{dispatch:this.props.dispatch,isVisibleHomePage:n,isVisibleAddButton:a}),a&&o.a.createElement(S,{dispatch:this.props.dispatch}),i?o.a.createElement("div",null,"Search Results..."):null,0===l.length?o.a.createElement("h3",null,"Question Not Found: Please Enter Valid Query or Tags"):null,!a&&l.map((function(t,n){return o.a.createElement(H,{question:t,key:"question-".concat(n),no:n,dispatch:e.props.dispatch})})))}}]),n}(a.Component);var _=Object(r.b)((function(e){return{state:e}}))(P),B=Object(i.d)(b,Object(i.a)(l.a,d.a));c.a.render(o.a.createElement(r.a,{store:B},o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null))),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0f3a60bc.chunk.js.map