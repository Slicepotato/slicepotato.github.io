(function(e){function t(t){for(var s,i,c=t[0],o=t[1],d=t[2],f=0,l=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&l.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(l.length)l.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var u=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"50c1":function(e,t,n){"use strict";n("b71d")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("7a23"),a={class:"page-wrapper"};function r(e,t,n,r,i,c){var o=Object(s["t"])("Header"),d=Object(s["t"])("UpNext"),u=Object(s["t"])("router-view"),f=Object(s["t"])("Footer");return Object(s["o"])(),Object(s["d"])("div",a,[Object(s["f"])(o),Object(s["f"])(d),Object(s["f"])(u),Object(s["f"])(f)])}var i=Object(s["f"])("h1",null,"FilmSack",-1),c=Object(s["f"])("p",{class:"subtitle"},"QuickSack",-1),o=Object(s["f"])("p",null,[Object(s["e"])("Looking to see if "),Object(s["f"])("b",null,"FilmSack"),Object(s["e"])(" has already covered a film? You can search here to find when they talked about it and listen to the fun.")],-1);function d(e,t,n,a,r,d){return Object(s["o"])(),Object(s["d"])("header",null,[i,c,o])}var u={};u.render=d;var f=u,l=Object(s["f"])("h2",null,"Coming Soon",-1);function b(e,t,n,a,r,i){return Object(s["o"])(),Object(s["d"])("div",null,[l,Object(s["f"])("p",null,Object(s["v"])(r.comingSoon),1)])}var j=n("bc3a"),p=n.n(j),h="https://spreadsheets.google.com/feeds/cells/1LfDJd7_731VeKbXcYJMBJnK23kE6MbipC7mH2a0FWXk/1/public/full?alt=json",m={data:function(){return{comingSoon:""}},mounted:function(){var e=this;p.a.get(h).then((function(t){e.comingSoon=t.data.feed.entry[2].content.$t}))}};m.render=b;var v=m;function y(e,t,n,a,r,i){return Object(s["o"])(),Object(s["d"])("div")}var O={};O.render=y;var g=O,k={name:"App",components:{Header:f,UpNext:v,Footer:g}};n("50c1");k.render=r;var L=k,w=n("6c02"),T=(n("a4d3"),n("e01a"),n("9911"),{class:"feed"}),x={class:"search-wrapper panel-heading col-sm-12"},z={class:"recent-items"},P={class:"title"},_=Object(s["e"])("give link"),M={class:"pubdate"},$={class:"desc"};function S(e,t,n,a,r,i){var c=Object(s["t"])("router-link"),o=Object(s["t"])("AudioPlayer");return Object(s["o"])(),Object(s["d"])("div",T,[Object(s["f"])("div",x,[Object(s["B"])(Object(s["f"])("input",{class:"form-control",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.searchQuery=e}),placeholder:"Search"},null,512),[[s["x"],r.searchQuery]])]),Object(s["f"])("div",z,[(Object(s["o"])(!0),Object(s["d"])(s["a"],null,Object(s["s"])(i.resultQuery,(function(e){return Object(s["o"])(),Object(s["d"])("div",{key:e,class:"card"},[Object(s["f"])("h3",null,Object(s["v"])(i.episodeNumber(e.title)),1),Object(s["f"])("h3",P,Object(s["v"])(i.formatTitle(e.title)),1),Object(s["f"])(c,{to:{name:"Details",params:{episodeId:i.formatLink(e.title),title:i.formatTitle(e.title),epNum:i.episodeNumber(e.title),pubdate:i.formatDate(e.pubDate),desc:e.description,url:e.enclosure.link,type:e.enclosure.type,objectid:e.guid}}},{default:Object(s["A"])((function(){return[_]})),_:2},1032,["to"]),Object(s["f"])("p",M,Object(s["v"])(i.formatDate(e.pubDate)),1),Object(s["f"])("p",$,Object(s["v"])(e.description),1),Object(s["f"])(o,{url:e.enclosure.link,type:e.enclosure.type,objectid:e.guid},null,8,["url","type","objectid"])])})),128))])])}n("1276"),n("ac1f"),n("5319"),n("498a"),n("99af"),n("4de4"),n("caad"),n("2532");var A=n("c1df"),D=n.n(A),E={class:"audio-player"},q={class:"progress-bar"},F={class:""},U=Object(s["f"])("span",null,"Loading please wait...",-1),C={class:""},H=Object(s["e"])(" / ");function N(e,t,n,a,r,i){var c=Object(s["t"])("fa");return Object(s["o"])(),Object(s["d"])("div",E,[Object(s["f"])("audio",{ref:"player",preload:"none",id:n.objectid},[Object(s["f"])("source",{src:n.url,type:n.type},null,8,["src","type"])],8,["id"]),Object(s["f"])("div",null,[Object(s["B"])(Object(s["f"])("button",{type:"button",onClick:t[1]||(t[1]=function(e){return i.toggleAudio()})},[Object(s["f"])(c,{icon:["fas","play"]})],512),[[s["y"],!r.isPlaying]]),Object(s["B"])(Object(s["f"])("button",{type:"button",onClick:t[2]||(t[2]=function(e){return i.toggleAudio()})},[Object(s["f"])(c,{icon:["fas","stop"]})],512),[[s["y"],r.isPlaying]])]),Object(s["f"])("div",q,[Object(s["f"])("div",null,[Object(s["B"])(Object(s["f"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.playbackTime=e}),type:"range",min:"0",max:r.audioDuration,name:"position"},null,8,["max"]),[[s["x"],r.playbackTime]]),Object(s["B"])(Object(s["f"])("div",F,[U],512),[[s["y"],!r.audioLoaded]]),Object(s["B"])(Object(s["f"])("div",C,[Object(s["f"])("span",{innerHTML:i.elapsedTime()},null,8,["innerHTML"]),H,Object(s["f"])("span",{innerHTML:i.totalTime()},null,8,["innerHTML"])],512),[[s["y"],r.audioLoaded]])])])])}n("fb6a"),n("a15b"),n("d81d");var Q={name:"AudioPlayer",props:["url","type","objectid"],data:function(){return{playbackTime:0,audioDuration:100,audioLoaded:!1,isPlaying:!1}},methods:{initSlider:function(){var e=this.$refs.player;e&&(this.audioDuration=Math.round(e.duration))},convertTime:function(e){var t=function(e){return"0".concat(Math.floor(e)).slice(-2)},n=e/3600,s=e%3600/60;return[n,s,e%60].map(t).join(":")},totalTime:function(){var e=this.$refs.player;if(e){var t=e.duration;return this.convertTime(t)}return"00:00"},elapsedTime:function(){var e=this.$refs.player;if(e){var t=e.currentTime;return this.convertTime(t)}return"00:00"},playbackListener:function(){var e=this.$refs.player;this.playbackTime=e.currentTime,e.addEventListener("ended",this.endListener),e.addEventListener("pause",this.pauseListener)},pauseListener:function(){this.isPlaying=!1,this.listenerActive=!1,this.cleanupListeners()},endListener:function(){this.isPlaying=!1,this.listenerActive=!1,this.cleanupListeners()},cleanupListeners:function(){var e=this.$refs.player;e.removeEventListener("timeupdate",this.playbackListener),e.removeEventListener("ended",this.endListener),e.removeEventListener("pause",this.pauseListener)},toggleAudio:function(){var e=this.$refs.player;e.paused?(e.play(),this.isPlaying=!0):(e.pause(),this.isPlaying=!1)}},mounted:function(){this.$nextTick((function(){var e=this.$refs.player;e.addEventListener("loadedmetadata",function(){this.initSlider()}.bind(this)),e.addEventListener("canplay",function(){this.audioLoaded=!0}.bind(this)),this.$watch("isPlaying",(function(){if(this.isPlaying){var e=this.$refs.player;this.initSlider(),this.listenerActive||(this.listenerActive=!0,e.addEventListener("timeupdate",this.playbackListener))}})),this.$watch("playbackTime",(function(){var e=Math.abs(this.playbackTime-this.$refs.player.currentTime);e>.01&&(this.$refs.player.currentTime=this.playbackTime)}))}))}};Q.render=N;var B=Q,Y="https://api.rss2json.com/v1/api.json",J="http://api.themoviedb.org/3/search/movie",I="67d23767771b66aa28d6965682f3d5f3",V={name:"Episode List",components:{AudioPlayer:B},data:function(){return{searchQuery:null,items:[],posterImg:[],posterPath:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2",recents:{title:"Recents",items:[],feedUrl:"http://feeds.frogpants.com/filmsack_feed.xml"},archive:{title:"Archive",items:[],feedUrl:"http://feeds.frogpants.com/filmsack_feed_old.xml"}}},methods:{formatDate:function(e){return D()(e).format("MMMM Do YYYY")},formatLink:function(e){if(-1!==e.indexOf(":")){var t=e.split(":")[1];return t=t.replace(/[^\w\s]/gi,""),t=t.trim(),t=t.replace(/\s+/g,"-").toLowerCase(),t}},episodeNumber:function(e){var t=e.substring(0,e.indexOf(":")),n=t.replace(/\D/g,"");return n=n.substring(0,3),n},formatTitle:function(e){if(-1!==e.indexOf(":")){var t=e.split(":")[1];return t=t.trim(),t}},recentFeed:function(){return p.a.get(Y,{params:{rss_url:this.recents.feedUrl,api_key:"pwgv1pkesdnf8nxq84azuasbprpspqbccbiqqhd4",count:1e3}})},archiveFeed:function(){return p.a.get(Y,{params:{rss_url:this.archive.feedUrl,api_key:"pwgv1pkesdnf8nxq84azuasbprpspqbccbiqqhd4",count:1e3}})},fetchPoster:function(e,t){var n=this;p.a.get(J,{params:{query:e,api_key:I}}).then((function(e){(!0===e.data.results||e.data.results.length>0)&&n.posterImg.push({path:e.data.results[0].poster_path,id:t})}))}},mounted:function(){var e=this;p.a.all([this.recentFeed(),this.archiveFeed()]).then(p.a.spread((function(t,n){e.recents.items=t.data.items,e.archive.items=n.data.items,e.items=t.data.items.concat(n.data.items)})))},computed:{resultQuery:function(){var e=this;return this.searchQuery?this.items.filter((function(t){return e.searchQuery.toLowerCase().split(" ").every((function(e){return t.title.toLowerCase().includes(e)}))})):this.items}}};n("fc3c");V.render=S;var K=V;function X(e,t,n,a,r,i){var c=Object(s["t"])("AudioPlayer");return Object(s["o"])(),Object(s["d"])("div",null,[Object(s["f"])("pre",null,Object(s["v"])(e.$route.params.title),1),Object(s["f"])(c,{url:e.$route.params.url,type:e.$route.params.type,objectid:e.$route.params.objectid},null,8,["url","type","objectid"])])}var R={props:["details"],components:{AudioPlayer:B},data:function(){}};R.render=X;var W=R,G=[{path:"/",name:"Home",component:K},{path:"/:episodeId",name:"Details",component:W}],Z=Object(w["a"])({history:Object(w["b"])(),routes:G}),ee=Z,te=n("ecee"),ne=n("c074"),se=n("ad3d"),ae=Object(s["c"])(L);te["c"].add(ne["a"]),ae.use(ee).component("fa",se["a"]).mount("#app")},b71d:function(e,t,n){},e714:function(e,t,n){},fc3c:function(e,t,n){"use strict";n("e714")}});
//# sourceMappingURL=app.f444f728.js.map