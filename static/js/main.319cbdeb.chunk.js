(this["webpackJsonpzaidoun.me"]=this["webpackJsonpzaidoun.me"]||[]).push([[0],{66:function(e,t,n){e.exports=n(87)},71:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(27),i=n.n(r),c=(n(71),n(9)),l=n(10),s=n(12),u=n(11),m=n(13),d=n(8),h=n(92),f=n(2),g=n(18),p=n(47),E=n(65),b={main:"#21232d",mainLight:"#2D5F73",primary:"#f92672",secondary:"#57c7ff",white:"#d8d8d6"},y=n(89),w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{style:j.header},o.a.createElement(y.a,{style:j.title},"Zaidoun.me"))}}]),t}(a.PureComponent),j=f.a.create({header:{backgroundColor:b.main,alignItems:"center",justifyContent:"center",padding:10,margin:20},title:{color:b.main,padding:20,backgroundColor:b.primary,fontSize:32,fontWeight:"700"}}),O=n(91),I=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{style:{alignItems:"center"}},o.a.createElement(d.a,{style:[S.header,{flexDirection:"row"}]},o.a.createElement(O.a,null,o.a.createElement(y.a,{style:S.calltoaction},"About")),o.a.createElement(O.a,null,o.a.createElement(y.a,{style:S.calltoaction},"Blog")),o.a.createElement(O.a,null,o.a.createElement(y.a,{style:S.calltoaction},"Hire me"))),o.a.createElement(d.a,{style:S.seperator}))}}]),t}(a.PureComponent),S=f.a.create({header:{flex:0,alignItems:"center",justifyContent:"center",padding:20},calltoaction:{color:b.white,fontSize:18,fontWeight:"500",padding:12},seperator:{width:"40vw",height:1,backgroundColor:b.white,marginTop:10,marginBottom:10}}),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{style:v.info},o.a.createElement(y.a,{style:v.infotext},"My name is Maher Zaidoune.","\n","I'm a mobile application developer from ",o.a.createElement(y.a,{style:[v.infotext,{color:b.secondary,fontSize:20,padding:5}]},"Tunisia"),"\n"," I live in ",o.a.createElement(y.a,{style:[v.infotext,{color:b.secondary,fontSize:20,padding:5}]},"Sousse")," and work at ",o.a.createElement(y.a,{style:[v.infotext,{color:b.secondary,fontSize:20,padding:5}]},"Satoripop")," .","\n"," I am a fan of technology, design, and music."))}}]),t}(a.Component),v=f.a.create({infotext:{color:b.white,fontSize:20,padding:20,fontWeight:"400",textAlign:"center"},info:{flex:1,padding:10}}),C=n(42),R={READING_LIST:null},x=Object(g.c)({Refind:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(console.log("action == "+t),t.type){case"READING_LIST_REQUEST":return Object(C.a)({},e,{READING_LIST:null});case"READING_LIST_REQUEST_SUCCESS":return Object(C.a)({},e,{READING_LIST:t.payload});case"READING_LIST_REQUEST_FAILED":return Object(C.a)({},e,{READING_LIST:null});default:return e}}}),z=n(93),L=n(90),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{style:D.footer},o.a.createElement(d.a,{style:D.seperator}),o.a.createElement(d.a,{style:D.footerInfo},o.a.createElement(y.a,{style:D.footerDesc},"Buit with React Native Web"),o.a.createElement(d.a,{style:{flexDirection:"row",marginTop:5}},o.a.createElement(O.a,{onPress:function(){return L.a.openURL("https://www.facebook.com/maher.zaidoune")}},o.a.createElement(z.a,{style:{width:30,height:30,marginLeft:5,marginRight:5},source:{uri:"https://img.icons8.com/doodle/192/000000/facebook-new.png"}})),o.a.createElement(O.a,{onPress:function(){return L.a.openURL("https://github.com/maherzaidoune")}},o.a.createElement(z.a,{style:{width:30,height:30,marginLeft:5,marginRight:5},source:{uri:"https://img.icons8.com/doodle/192/000000/github--v1.png"}})),o.a.createElement(O.a,{onPress:function(){return L.a.openURL("https://www.linkedin.com/in/zaidounemaher")}},o.a.createElement(z.a,{style:{width:30,height:30,marginLeft:5,marginRight:5},source:{uri:"https://img.icons8.com/doodle/192/000000/linkedin.png"}})))))}}]),t}(a.Component),D=f.a.create({footer:{position:"absolute",bottom:0,width:"40vw",alignItems:"center"},seperator:{width:"40vw",height:1,backgroundColor:b.white,marginTop:10},footerInfo:{flex:1,alignItems:"center",justifyContent:"center",padding:30},footerDesc:{color:b.white,fontSize:15,fontWeight:"400",textAlign:"center"}}),A=Object(g.d)((function(e,t){return x(e,t)}),{},Object(g.a)(p.a)),_=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,{style:W.container},o.a.createElement(h.a,null,o.a.createElement(d.a,{style:{alignItems:"center"}},o.a.createElement(w,null),o.a.createElement(I,null),o.a.createElement(k,null))),o.a.createElement(T,null))}}]),t}(a.PureComponent);var W=f.a.create({container:{backgroundColor:b.main,padding:15,height:"100vh",alignItems:"center"},header:{flex:0,backgroundColor:b.main,alignItems:"center",justifyContent:"center",padding:10},title:{color:b.white,padding:15,backgroundColor:b.primary,fontSize:26,fontWeight:"600"},calltoaction:{color:b.white,fontSize:18,fontWeight:"500",padding:12},infotext:{color:b.white,fontSize:18,fontWeight:"400",textAlign:"center"},info:{flexGrow:1,backgroundColor:b.main,padding:10}}),G=function(){return o.a.createElement(E.a,{store:A},o.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[66,1,2]]]);
//# sourceMappingURL=main.319cbdeb.chunk.js.map