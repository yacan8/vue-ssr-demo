(function(e){function t(t){for(var r,i,a=t[0],c=t[1],l=t[2],f=0,p=[];f<a.length;f++)i=a[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={main:0},u=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=c;u.push(["c96c","chunk-vendors"]),n()})({c96c:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-link",{attrs:{to:{path:"/"}}},[e._v("Home")]),n("router-link",{attrs:{to:{path:"/about"}}},[e._v("About")]),n("router-view")],1)},u=[],i=n("2877"),a={},c=Object(i["a"])(a,o,u,!1,null,null,null),l=c.exports,s=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("id: "+e._s(e.item.id))]),n("div",[e._v("name: "+e._s(e.item.name))])])},p=[],d={asyncData:function(e){var t=e.store,n=e.route;return console.log(n.query.id),t.dispatch("fetchItem",n.query.id)},computed:{item:function(){return this.$store.state.item}}},m=d,v=Object(i["a"])(m,f,p,!1,null,null,null),b=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("About Page")])},y=[],_={},g=Object(i["a"])(_,h,y,!1,null,null,null),w=g.exports;r["a"].use(s["a"]);var O=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:w}];function j(){return new s["a"]({mode:"history",routes:O})}var P=n("2f62");n("7db0"),n("d3b7");function x(e){var t=[{name:"item1",id:1},{name:"item2",id:2},{name:"item3",id:3}],n=t.find((function(t){return t.id==e}));return Promise.resolve(n)}function S(){return new P["a"].Store({state:{item:{}},actions:{fetchItem:function(e,t){var n=e.commit;return x(t).then((function(e){n("setItem",e)}))}},mutations:{setItem:function(e,t){r["a"].set(e.item,t)}}})}function k(e){var t=j(),n=S(),o=new r["a"]({router:t,store:n,render:function(e){return e(l)}});return{router:t,store:n,app:o}}r["a"].use(P["a"]),r["a"].config.productionTip=!1;var $=k(),I=$.app,M=$.router;M.onReady((function(){I.$mount("#app",!0)}))}});
//# sourceMappingURL=main.4531fdfb.js.map