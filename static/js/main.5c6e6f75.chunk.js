(this.webpackJsonphomework_02=this.webpackJsonphomework_02||[]).push([[0],[,function(e,t,a){e.exports={mainHeader:"ContactForm_mainHeader__2_H-x",bookForm:"ContactForm_bookForm__3jrAY",bookName:"ContactForm_bookName__yzluw",inputStyles:"ContactForm_inputStyles__5dzX2",bookInputName:"ContactForm_bookInputName__WU3oS ContactForm_inputStyles__5dzX2",bookInputNumber:"ContactForm_bookInputNumber__14Wrv ContactForm_inputStyles__5dzX2",bookBtn:"ContactForm_bookBtn__9YL4n"}},,,,,,function(e,t,a){e.exports={general:"AppPhoneBook_general__1jftk",bookHeader:"AppPhoneBook_bookHeader__2bF-y",contactHeader:"AppPhoneBook_contactHeader__3g1t2"}},function(e,t,a){e.exports={contactItem:"ContactListItem_contactItem__TWc5R",contactName:"ContactListItem_contactName__3W40q",deleteBtn:"ContactListItem_deleteBtn__1UUTs"}},function(e,t,a){e.exports={btnList:"FeedbackOptions_btnList__2BYWL",btn:"FeedbackOptions_btn__3rzUt"}},function(e,t,a){e.exports={secondaryHeader:"ContactList_secondaryHeader__1OtDT",contactList:"ContactList_contactList__auKlA"}},function(e,t,a){e.exports={contactSearch:"Filter_contactSearch__p_Oge",inputSearch:"Filter_inputSearch__1dlfT"}},,,function(e,t,a){e.exports={statList:"Statistics_statList__2Uqux"}},function(e,t,a){e.exports={title:"Section_title__3dtBB"}},function(e,t,a){e.exports={message:"Notification_message__32uc7"}},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports={App:"AppFeedback_App__VKPYO"}},function(e){e.exports=JSON.parse("{}")},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),l=(a(23),a(24),a(6)),i=a(2),s=a(3),u=a(5),m=a(4),d=(a(25),a(14)),b=a.n(d),p=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return o.a.createElement("div",null,o.a.createElement("ul",{className:b.a.statList},o.a.createElement("li",null,"Good: ",t),o.a.createElement("li",null,"Neutral: ",a),o.a.createElement("li",null,"Bad: ",n),o.a.createElement("li",null,"Total: ",c),o.a.createElement("li",null,"Positive feedback: ",r," %")))},_=a(9),f=a.n(_),h=function(e){var t=e.options,a=e.onLeaveFeedback;return o.a.createElement("div",{className:f.a.btnList},t.map((function(e){return o.a.createElement("button",{className:f.a.btn,type:"button","data-source":e,onClick:a},e)})))},v=a(15),E=a.n(v),N=function(e){var t=e.title,a=e.children;return o.a.createElement("section",null,o.a.createElement("h2",{className:E.a.title},t),a)},k=a(16),g=a.n(k),C=function(e){var t=e.message;return o.a.createElement("p",{className:g.a.message},t)},F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue},e.handleIncrement=function(t){var a=t.target.dataset.source;e.setState((function(e,t){return Object(l.a)({},a,e[a]+t.step)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.countPositiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.countTotalFeedback())},e}return Object(s.a)(a,[{key:"render",value:function(){var e=Object.keys(this.state),t=this.countTotalFeedback(),a=this.countPositiveFeedbackPercentage(),n=this.state,c=n.good,r=n.neutral,l=n.bad;return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,{title:"Please leave feedback"},o.a.createElement(h,{options:e,onLeaveFeedback:this.handleIncrement})),o.a.createElement(N,{title:"Statistic"},t>0?o.a.createElement(p,{good:c,neutral:r,bad:l,total:t,positivePercentage:a}):o.a.createElement(C,{message:"No feedback given"})))}}]),a}(n.Component);F.defaultProps={initialValue:0,step:1};var y=a(17),S=a(7),O=a.n(S),j=a(1),L=a.n(j),x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleChange=function(t){var a=t.target,n=a.name,o=a.value;e.setState(Object(l.a)({},n,o))},e.hadleSubpmit=function(t){var a=e.state,n=a.name,o=a.number;t.preventDefault(),e.props.onAddName(n,o),e.setState({name:"",number:""})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.number;return o.a.createElement("div",{className:L.a.mainHeader},o.a.createElement("form",{className:L.a.bookForm,onSubmit:this.hadleSubpmit},o.a.createElement("label",{className:L.a.bookName},"Name",o.a.createElement("br",null),o.a.createElement("input",{className:L.a.bookInputName,placeholder:"Name",type:"text",value:t,onChange:this.handleChange,name:"name"}),o.a.createElement("br",null),o.a.createElement("input",{className:L.a.bookInputNumber,placeholder:"Number",type:"text",value:a,onChange:this.handleChange,name:"number"})),o.a.createElement("br",null),o.a.createElement("button",{className:L.a.bookBtn,type:"submit"},"Add contact")))}}]),a}(n.Component);x.defaultProps={};var P=x,A=a(10),I=a.n(A),B=a(8),H=a.n(B),w=function(e){var t=e.name,a=e.number,n=e.onRemove;return o.a.createElement("li",{className:H.a.contactItem},o.a.createElement("p",{className:H.a.contactName},t,": ",a),o.a.createElement("section",null,o.a.createElement("button",{className:H.a.deleteBtn,type:"button",onClick:n},"Delete!")))},T=function(e){var t=e.contacts,a=e.onRemoveName;return o.a.createElement("div",{className:I.a.secondaryHeader},o.a.createElement("ul",{className:I.a.contactList},t.map((function(e){var t=e.name,n=e.id,c=e.number;return o.a.createElement(w,{name:t,key:n,number:c,onRemove:function(){return a(n)}})}))))},V=a(11),R=a.n(V),z=function(e){var t=e.value,a=e.onChangeFilter;return o.a.createElement("div",null,o.a.createElement("h3",{className:R.a.contactSearch},"Find contacts by name"),o.a.createElement("input",{className:R.a.inputSearch,placeholder:"Search contact",type:"text",value:t,onChange:function(e){return a(e.target.value)}}))},U=a(29),W=(a(26),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addName=function(t,a){var n={id:Object(U.a)(),name:t,number:a};e.state.contacts.find((function(e){return e.name===t}))?alert("".concat(t," is allready in contacts")):e.setState((function(e){return{contacts:[].concat(Object(y.a)(e.contacts),[n])}}))},e.removeName=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t})},e.getVisibleContact=function(){var t=e.state,a=t.contacts,n=t.filter;return a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.contacts,e.filter),a=this.getVisibleContact();return o.a.createElement("div",{className:O.a.general},o.a.createElement("h2",{className:O.a.bookHeader},"Phonebook"),o.a.createElement(P,{onAddName:this.addName}),o.a.createElement("h2",{className:O.a.contactHeader},"Contacts"),o.a.createElement(z,{value:t,onChangeFilter:this.changeFilter}),o.a.createElement(T,{contacts:a,onRemoveName:this.removeName}))}}]),a}(n.Component));W.defaultProps={};var Y=W,D=function(){return o.a.createElement("div",null,o.a.createElement(Y,null))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.5c6e6f75.chunk.js.map