(function(e){function t(t){for(var r,u,c=t[0],i=t[1],s=t[2],l=0,f=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={index:0},a=[];function u(e){return c.p+"tt/js/"+({about:"about"}[e]||e)+"."+{about:"52fc12ca"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/test-vue/pages/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"072d":function(e,t,n){},1651:function(e,t,n){},"7c55":function(e,t,n){"use strict";n("072d")},"9ca6":function(e,t,n){"use strict";n("1651")},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("a")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("b")])],1),n("router-view")],1)},a=[],u=(n("7c55"),n("0c7c")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:e.msg,src:e.src}})],1)},f=[],p=n("1da1"),m=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))]),n("img",{attrs:{src:e.src}}),n("h6",[e._v(e._s(e.aa))])])}),h=[],v=r["a"].extend({name:"HelloWorld",props:{msg:Object,src:String},data:function(){return{aa:"hehe"}}}),b=v,g=(n("9ca6"),Object(u["a"])(b,m,h,!1,null,"534189ad",null)),y=g.exports,j=n("d4ec"),w=n("bee2"),_=n("bc3a"),O=n.n(_),x=O.a.create({baseURL:"/",headers:{"Content-Type":"application/json"}});x.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),x.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var k=x,M="",P=function(){function e(){Object(j["a"])(this,e)}return Object(w["a"])(e,null,[{key:"userinfo",value:function(e){return k({method:"get",url:"".concat(M,"/userinfo")})}},{key:"getimg",value:function(){return k({method:"get",url:"".concat(M,"/img")})}},{key:"shayebushi",value:function(e){return k({method:"post",url:"".concat(M,"/img"),data:e})}}]),e}(),S=r["a"].extend({name:"Home",data:function(){return{msg:{},src:""}},components:{HelloWorld:y},mounted:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,P.userinfo();case 2:return n=t.sent,0===n.errcode&&(e.msg=n.data),t.next=6,P.getimg();case 6:r=t.sent,o=r.errcode,r.message,a=r.data,0===o&&(e.src=a);case 11:case"end":return t.stop()}}),t)})))()}}),E=S,T=Object(u["a"])(E,d,f,!1,null,null,null),C=T.exports;r["a"].use(l["a"]);var H=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"0737"))}}],R=new l["a"]({mode:"history",base:"/test-vue/pages/",routes:H}),$=R,L=n("2f62");r["a"].use(L["a"]);var W=new L["a"].Store({state:{count:0},getters:{},mutations:{increment:function(e){e.count+=Math.floor(10*Math.random())},decrement:function(e){e.count--}},actions:{},modules:{}}),q=n("96eb"),A=n.n(q);A.a.setup({timeout:400});var J="http://192.168.6.191:3336";A.a.mock("".concat(J,"/userinfo"),{errcode:0,message:"ok",data:{name:"@cname","id|+1":1,"age|18-28":0,birthday:'@date("yyyy-MM-dd")',city:"@city(true)","isMale|1":!0,"isFat|1-2":!0}}),A.a.mock("".concat(J,"/img"),{errcode:0,message:"ok",data:q["Random"].dataImage("200x100",q["Random"].date("yyyy-MM-dd"))}),r["a"].config.productionTip=!1,new r["a"]({router:$,store:W,render:function(e){return e(s)}}).$mount("#app")}});
//# sourceMappingURL=index.110bec11.js.map