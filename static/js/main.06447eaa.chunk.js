(this.webpackJsonpairbib_clone7=this.webpackJsonpairbib_clone7||[]).push([[0],{64:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(0),i=c.n(n),a=c(21),r=c.n(a),o=(c(64),c(65),c(66),c(31)),j=c(104),h=c(5),l=(c(67),c(68),c(48));c(77),c(78);var d=function(){var e=Object(h.f)(),t=Object(n.useState)(new Date),c=Object(o.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)(new Date),d=Object(o.a)(r,2),b=d[0],u=d[1],m={startDate:i,endDate:b,key:"selection"};return Object(s.jsxs)("div",{className:"search",children:[Object(s.jsx)(l.DateRangePicker,{ranges:[m],onChange:function(e){a(e.selection.startDate),u(e.selection.endDate)}}),Object(s.jsxs)("h2",{children:["Number of guests",Object(s.jsx)("peopleIcon",{})]}),Object(s.jsx)("input",{min:0,defuaultValue:2,type:"number"}),Object(s.jsx)(j.a,{onClick:function(){return e.push("/search")},children:"Search Airbnb"})]})};var b=function(){var e=Object(h.f)(),t=Object(n.useState)(!1),c=Object(o.a)(t,2),i=c[0],a=c[1];return Object(s.jsxs)("div",{className:"banner",children:[Object(s.jsxs)("div",{className:"banner_search",children:[i&&Object(s.jsx)(d,{}),Object(s.jsx)(j.a,{onClick:function(){return a(!i)},className:"banner_searchButton",variant:"outlined",children:i?"Hide":"Search Dates"})]}),Object(s.jsxs)("div",{className:"banner_info",children:[Object(s.jsx)("h1",{children:"Get out and stretch your imagination"}),Object(s.jsx)("h5",{children:"plan a different kind of getaway to uncover the hiddengems near you."}),Object(s.jsx)(j.a,{onClick:function(){return e.push("/search")},variant:"outlined",children:"Explore Nearby"})]})]})};c(82);var u=function(e){var t=e.src,c=e.title,n=e.description,i=e.price;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:t,alt:""}),Object(s.jsxs)("div",{className:"card_info",children:[Object(s.jsx)("h2",{children:c}),Object(s.jsx)("h4",{children:n}),Object(s.jsx)("h3",{children:i})]})]})};var m=function(){return Object(s.jsxs)("div",{className:"home",children:[Object(s.jsx)(b,{}),Object(s.jsxs)("div",{className:"home_section",children:[Object(s.jsx)(u,{src:"https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",title:"Online Experiences",description:"Unique activities we can do togther, led by a world of hosts."}),Object(s.jsx)(u,{src:"https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",title:"Unique stays",description:"Spaces that are more than just a place to sleep."}),Object(s.jsx)(u,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with for friends or family."})]}),Object(s.jsxs)("div",{className:"home_section",children:[Object(s.jsx)(u,{src:"https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg",title:"3 Beadroom Flat in Bournemouth",description:"Superhost with a stunning view of the beachside in sunny Bournemouth",price:"$125/night"}),Object(s.jsx)(u,{src:"https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg",title:"Penthouse in London",description:"Enjoy the amazing sights of London with this stunning penthouse",price:"$350/night"}),Object(s.jsx)(u,{src:"https://media.nomadicmatt.com/2018/apartment.jpg",title:"1 Bedroom apartment",description:"Superhost with great amenities and a fabolous shopping complex nearby",price:"$110/night"})]})]})},p=(c(83),c(52)),O=c.n(p),x=c(54),f=c.n(x),g=c(53),v=c.n(g),N=c(105),_=c(20);var y=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)(_.b,{to:"/",children:Object(s.jsx)("img",{className:"header_icon",src:"https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png",alt:""})}),Object(s.jsxs)("div",{className:"header_center",children:[Object(s.jsx)("input",{type:"text"}),Object(s.jsx)(O.a,{})]}),Object(s.jsxs)("div",{className:"header_right",children:[Object(s.jsx)("p",{children:"Become a host"}),Object(s.jsx)(v.a,{}),Object(s.jsx)(f.a,{}),Object(s.jsx)(N.a,{})]})]})};c(85);var w=function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("p",{children:"@ 2020 Airbnb clone! No rights reserved - this is a demo!"}),Object(s.jsx)("p",{children:"Privacy . Terms . Sitemap . Company details"})]})},S=(c(86),c(87),c(55)),P=c.n(S),C=c(56),k=c.n(C);var B=function(e){var t=e.img,c=e.location,n=e.title,i=e.description,a=e.star,r=e.price,o=e.total;return Object(s.jsxs)("div",{className:"searchResult",children:[Object(s.jsx)("img",{src:t,alt:""}),Object(s.jsx)(P.a,{className:"searchResult_heart"}),Object(s.jsxs)("div",{className:"searchResult_heart",children:[Object(s.jsxs)("div",{className:"searchResult_infoTop",children:[Object(s.jsx)("p",{children:c}),Object(s.jsx)("h3",{children:n}),Object(s.jsx)("p",{children:"__"}),Object(s.jsx)("p",{children:i})]}),Object(s.jsxs)("div",{className:"searchResult_infoBottom",children:[Object(s.jsxs)("div",{className:"searchResult_stars",children:[Object(s.jsx)(k.a,{className:"searchResult_star"}),Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:a})})]}),Object(s.jsxs)("div",{className:"searchResults_price",children:[Object(s.jsx)("h2",{children:r}),Object(s.jsx)("p",{children:o})]})]})]})]})};var R=function(){return Object(s.jsxs)("div",{className:"searchPage",children:[Object(s.jsxs)("div",{className:"searchPage_info",children:[Object(s.jsx)("p",{children:"62 stays . 26 august to 30 august . 2 guest"}),Object(s.jsx)("h1",{children:"Stays nearby"}),Object(s.jsx)(j.a,{variant:"outlined",children:"Cancellation Flexibility"}),Object(s.jsx)(j.a,{variant:"outlined",children:"Type of place"}),Object(s.jsx)(j.a,{variant:"outlined",children:"Price"}),Object(s.jsx)(j.a,{variant:"outlined",children:"Rooms and beds"}),Object(s.jsx)(j.a,{variant:"outlined",children:"More filters"})]}),Object(s.jsx)(B,{img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU",location:"Private room in center of london",title:"Stay at this spacious Edwaridin House",description:"1 guest . 1 bearoom . 1 bed .1.5 shared bthrooms . Wifi . Kitchen . Free parking . Washing Machine",star:"4.72",price:"$98 / night",total:"$294 total"}),Object(s.jsx)(B,{img:"https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp",location:"Private room in center of London",title:"London Studio Apartments",description:"4 guest .4 bedroom . 4 bed . 2 bathrooms .Free parking",star:3.8,price:"$70 / night",total:"$430 / total"})]})};var A=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(_.a,{children:[Object(s.jsx)(y,{}),Object(s.jsxs)(h.c,{children:[Object(s.jsx)(h.a,{path:"/search",children:Object(s.jsx)(R,{})}),Object(s.jsx)(h.a,{path:"/",children:Object(s.jsx)(m,{})})]}),Object(s.jsx)(w,{})]})})},D=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),i(e),a(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(A,{})}),document.getElementById("root")),D()}},[[88,1,2]]]);
//# sourceMappingURL=main.06447eaa.chunk.js.map