(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(2),o=n.n(i),l=n(1),d=n.n(l),r=(n(10),n(11),"http://localhost:8100/"===window.location.href?"http://localhost:8000/":window.location.href),s=n.p+"static/media/co2.51a3ac8e.svg",a=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"saved-total-section",children:[Object(c.jsx)("img",{alt:"co2",src:s}),Object(c.jsx)("h4",{children:" Total CO\u2082 Saved "})]}),Object(c.jsx)("h2",{id:"co2-saved-total",className:"saved-total",children:" -- "}),Object(c.jsxs)("div",{className:"saved-total-section",children:[Object(c.jsx)("img",{alt:"co2",src:s}),Object(c.jsx)("h4",{children:" Total Water Saved "})]}),Object(c.jsx)("h2",{className:"saved-total",children:" -- "}),Object(c.jsxs)("div",{className:"saved-total-section",children:[Object(c.jsx)("img",{alt:"co2",src:s}),Object(c.jsx)("h4",{children:" Total Waste Saved "})]}),Object(c.jsx)("h2",{className:"saved-total",children:" -- "}),void fetch("".concat(r,"api/total/co2")).then((function(e){e.json().then((function(e){document.getElementById("co2-saved-total").innerText=e.save_co2__sum+"kg"}))}))]})},j=(n(12),n(13),function(e,t,n,c){return"<div\n        id=".concat(e,"\n        class='pledge-entry'\n    >\n        <p> ").concat(t," </p>\n        <h4> Saving ").concat(n,"kg of CO2 </h4>\n        <h6> ").concat(c," </h6>\n    </div>")}),h=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{id:"my_pledges",children:void fetch("".concat(r,"api/fetch/0")).then((function(e){e.json().then((function(e){if("data"in e){var t=e.data,n=document.getElementById("my_pledges");for(var c in t)console.log(t[c]),n.innerHTML+=j(t[c].id,t[c].pledge,t[c].co2,t[c].timestamp.split("T")[0])}}))}))})})},u=(n(14),n(4),n(15),function(e,t){return Object(c.jsx)("button",{id:"commit-button",onClick:function(){e()&&(t(),w())},children:" Commit Pledge "})}),p=function(){var e=document.getElementById("my-energy-supplier"),t=e.options[e.selectedIndex].text,n=document.getElementById("people-in-house").value,c=document.getElementById("my-heating-type"),i=c.options[c.selectedIndex].text,o=encodeURIComponent("Within the next two months,\nI pledge to switch from my current energy supplier \u2013 which is ".concat(t," \u2013 to a green energy supplier.\n").concat(n," people live in our home.\nMy house is mainly heated by ").concat(i,"."));fetch("".concat(r,"api/post/0/").concat(o,"/").concat(g()))},b=function(){return"none"===document.getElementById("my-energy-supplier").value?(alert("select your energy supplier"),!1):""===document.getElementById("people-in-house").value?(alert("input the number of people in your home"),!1):"none"!==document.getElementById("my-heating-type").value||(alert("select your main source of heating"),!1)},m=function(){document.getElementById("co2-saved").innerText=g()+"kg"},g=function(){var e=document.getElementById("my-energy-supplier").value;if("none"===e)return"--";var t=document.getElementById("people-in-house").value;if(""===t)return"--";var n=document.getElementById("my-heating-type").value;return"none"===n?"--":49*n*t*e},v={pledge_energy:function(){return Object(c.jsxs)("div",{id:"pledge_energy",children:[Object(c.jsxs)("p",{id:"pledge_energy_text",children:["Within the next two months, I pledge to switch from my current energy supplier \u2013 which is",Object(c.jsxs)("select",{id:"my-energy-supplier",defaultValue:"none",onClick:m,children:[Object(c.jsx)("option",{value:"none",disabled:!0,children:" --- "}),Object(c.jsx)("option",{value:"0.5",children:" Bog Standard "}),Object(c.jsx)("option",{value:"0",children:" Great Green "}),Object(c.jsx)("option",{value:"1",children:" Other "})]}),"\u2013 to a green energy supplier.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{id:"people-in-house",type:"number",placeholder:"4",min:"1",onBlur:m}),"people live in our home.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"My house is mainly heated by",Object(c.jsxs)("select",{id:"my-heating-type",defaultValue:"none",onClick:m,children:[Object(c.jsx)("option",{value:"none",disabled:!0,children:" --- "}),Object(c.jsx)("option",{value:"3",children:" Electric "}),Object(c.jsx)("option",{value:"5",children:" Gas "}),Object(c.jsx)("option",{value:"5",children:" Oil "})]}),"."]}),u(b,p)]})},pledge_diet:function(){return Object(c.jsx)("div",{id:"pledge_diet",children:"diet pledge"})}},x=function(){var e=document.getElementById("pledge-select"),t=document.getElementById("my-pledges");"none"!==e.value&&Object(l.render)(v[e.value](),t)},O=function(e){var t="pledge_"+e.replace(/ /g,"_");return Object(c.jsx)("option",{value:t,children:e})},y=function(){return Object(c.jsxs)("div",{id:"pledge-section",children:[Object(c.jsx)("h2",{children:" Make Pledge "}),Object(c.jsxs)("select",{id:"pledge-select",style:{width:"100%"},onClick:x,defaultValue:"none",children:[Object(c.jsx)("option",{value:"none",disabled:!0,children:" --- select --- "}),O("energy")]}),Object(c.jsx)("div",{id:"my-pledges"})]})},f=(n(16),function(){return Object(c.jsxs)("div",{id:"pledge-results",children:[Object(c.jsx)("h2",{children:" Saves "}),Object(c.jsx)("div",{id:"pledge-saves",children:(e="--kg",Object(c.jsxs)("div",{style:{display:"flex"},children:[Object(c.jsx)("h2",{id:"co2-saved",style:{color:"peru"},children:e}),Object(c.jsx)("h3",{children:"\xa0 of CO\u2082"})]}))}),Object(c.jsx)("h2",{children:" Impacts "}),Object(c.jsx)("div",{id:"pledge-impacts",children:Object(c.jsx)("img",{alt:"co2",src:s,width:"48px",height:"48px"})})]});var e}),_=["navbar_home","navbar_make_pledge","navbar_view_profile"],I=function(e){var t=document.getElementById(e);for(var n in _){var c=document.getElementById(_[n]);c.style.color="darkgrey",c.style.borderBottom="1px solid lightgrey"}t.style.color="black",t.style.borderBottom="1px solid black"},B=function(){I("navbar_home"),Object(l.render)(Object(c.jsx)(a,{}),document.getElementById("app"))},k=function(){I("navbar_make_pledge"),Object(l.render)(Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{}),Object(c.jsx)(f,{})]}),document.getElementById("app"))},w=function(){I("navbar_view_profile"),Object(l.render)(Object(c.jsx)(h,{}),document.getElementById("app"))},E=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{id:"app-header",children:[Object(c.jsx)("h2",{children:" DoNation "}),Object(c.jsx)("h1",{children:" Tech Test "})]}),Object(c.jsxs)("div",{id:"app-navbar",children:[Object(c.jsx)("button",{id:"navbar_home",style:{color:"black",borderBottom:"1px solid black"},onClick:B,children:" Home "}),Object(c.jsx)("button",{id:"navbar_make_pledge",onClick:k,children:" Make Pledge "}),Object(c.jsx)("button",{id:"navbar_view_profile",onClick:w,children:" View Profile "})]})]})},C=(n(17),function(){return Object(c.jsx)("footer",{children:Object(c.jsxs)("p",{children:["by \xa0",Object(c.jsx)("a",{href:"https://github.com/oceaster",children:"Owen Cameron Easter"}),"\xa0 for \xa0",Object(c.jsx)("a",{href:"https://www.wearedonation.com/",children:"DoNation"})]})})});d.a.render(Object(c.jsxs)(o.a.StrictMode,{children:[Object(c.jsx)(E,{}),Object(c.jsx)("div",{id:"app",children:Object(c.jsx)(a,{})}),Object(c.jsx)(C,{})]}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.a5ce5d52.chunk.js.map