!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="ontouchstart"in window?function(t){var e=t.touches[0]||t.changedTouches[0];return e?{x:e.pageX,y:e.pageY}:{x:0,y:0}}:function(t){return{x:(t=event||window.event).pageX||t.clientX+o().x,y:t.pageY||t.clientY+o().y}},r=document.documentElement||document.body;function o(){return{x:window.pageXOffset||r.scrollLeft||r.scrollLeft,y:window.pageYOffset||r.scrollTop||r.scrollTop}}e.gotoPosition=function(t,e,n){var i=setInterval(function(){var l=o(),a=l.x,u=l.y;!function(t,e){r.scrollLeft=t,r.scrollTop=e,window.scrollTo(t,e)}(a+(t-a)/6,u+(e-u)/6);var s=o(),c=s.x;u===s.y&&a===c&&(clearInterval(i),"function"==typeof n&&n())},30);return i},e.getXY=i,e.hightLightElement=function(t,e,n){if(t&&e){for(var i=t.querySelectorAll("b[data-highlight='y']"),r=0;r<i.length;r++){var o=i[r],l=o.dataset.origintext||o.outerHTML;l==e&&(o.outerHTML=l)}if(n){var a='<b data-highlight="y" data-origintext="'+e+'">',u=">.*?"+e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+".*?<";t.dataset.highlightbk="y",t.outerHTML=t.outerHTML.replace(new RegExp(u,"g"),function(t){return t.replace(e,a+e+"</b>")})}else t.dataset.highlightbk="n"}},e.getViewPosition=function(t){var e=t.getBoundingClientRect();return{top:e.top,left:e.left}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var i=o(n(2)),r=o(n(4));function o(t){return t&&t.__esModule?t:{default:t}}function l(t){var e=new i.default(t);return(0,r.default)(e),e}window.EasyShare=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=o;var i=n(0);var r=new(function(t){return t&&t.__esModule?t:{default:t}}(n(3)).default);function o(t,e){var n=this;this.id=t||"easyshare-container",this.options=Object.assign({playSetting:{auto:!0,dura:100},maxMarkNumber:10,stepSplit:"e_o",valueSplit:":)",blacklist:[this.id]},e),this.recordedSteps=[],this.runindex=s,this.target={},this.url=window.location.href;var o=s,l=s,a=s,u=this.target,s=null,c=this.CONSTANT,d=this.options,h=d.stepSplit,f=d.valueSplit,p=d.playSetting,g=Object.assign({},p),v=c.ID,y=window.location,m=[h,f],w=this.recordedSteps,x=[];window.addEventListener("load",function(){for(var t=decodeURI(y.search).replace(new RegExp("_hash-","g"),"#").substr(1).split("&"),e={},i=0;i<t.length;i++){var o=t[i],l=o.indexOf("=");e[o.substring(0,l)]=o.substring(l+1)}var a=e[v],u=e.esplay;a&&(a.split(h).forEach(function(t){var e=t.split(f),n={x:e[0],y:e[1],id:e[2],text:e[3],tip:e[4]||e[3]};w.push(n)}),n.status=c.READY),u&&(u.split("_").forEach(function(t){var e=t.split("-");p[e[0]]=e[1]}),p.auto=p.auto&&"true"==p.auto),p.auto&&easyshare.replay(0,!1,!0,!0,null,p.dura),setTimeout(function(){n.options.blacklist.forEach(function(t){var e=r.getTarget(t);e&&x.push(e)})},0)});var b=null;function N(t){var e=document.getSelection(),n=e.anchorNode.parentNode,i=!0,o=!1,l=void 0;try{for(var a,s=x[Symbol.iterator]();!(i=(a=s.next()).done);i=!0){if(a.value.contains(n))return}}catch(t){o=!0,l=t}finally{try{!i&&s.return&&s.return()}finally{if(o)throw l}}var d=e.toString().trim();this.status==c.WAITING&&d===u.text||(d?(this.target=u={x:t.x,y:t.y,text:d.substring(0,30),tip:d,id:r.getUniqueId(n).wid},this.status=this.status===c.REPLAYING||this.status===c.PLAYANDWAIT?c.PLAYANDWAIT:c.WAITING):(this.target=u={},this.status=c.PAUSE))}"ontouchstart"in window?(document.addEventListener("touchstart",function(t){b=t}),document.onselectionchange=function(t){if(b.target&&"record"!=b.target.id){var e=(0,i.getXY)(b),r=e.x,o=e.y;N.call(n,{x:r,y:o+24})}}):document.addEventListener("mouseup",function(t){N.call(n,{x:t.pageX,y:t.pageY})}),this.onStateChange=function(){},this.record=function(t){var e=d.maxMarkNumber;if(w.length>=e)return alert("标记失败！最大标记数量为 "+e),!1;if(!t&&this.status!=c.WAITING)return!1;this.status=c.RECORDING,w.push(u);var n=this.makelink();return n?(alert(n),w.splice(-1,1),this.status=c.RECORDFAIL,!1):((0,i.hightLightElement)(r.getTarget(u.id),u.text,!0),u.isActive=!0,this.status=c.RECORDED,!0)},this.remove=function(t){if(t<0){for(;w.length>0;)this.replay(0,!1,!1),w.splice(0,1);this.status=c.PAUSE}else this.replay(t,!1,!1),w.splice(t,1);this.makelink()},this.replay=function(t,e,n,o,u,d){var h=this;t=t||0,e=void 0==e||e,n=void 0==n||n,d=void 0!=d?d:p.dura;var f=(u=u||w)[t];if(!f)return this.runindex=s,void(this.status=c.DONE);var g=f.x,v=f.y,y=f.id,m=f.text,x=y?r.getTarget(y):s;clearInterval(a),clearTimeout(l),a=l=s,this.runindex=t,this.status=c.REPLAYING,f.isActive=n,x&&(0,i.hightLightElement)(x,m,n),e?a=(0,i.gotoPosition)(g-window.innerWidth/2,v-window.innerHeight/3,function(){h.runindex=s,o?l=setTimeout(function(){return h.replay(t+1,e,n,o,u,d)},d):(h.status=c.DONE,clearTimeout(l))}):o?l=setTimeout(function(){return h.replay(t+1,e,n,o,u,d)},d):(this.runindex=s,this.status=c.DONE)},this.makelink=function(){try{var t="&"+v+"=",e=y.href,i=e.indexOf("&"+v);if(""==y.search&&(e+="?"),i>-1&&(e=e.substr(0,i)),0===w.length)t="";else{w.forEach(function(e,n){t+=0!=n?h:"";["x","y","id","text","tip"].forEach(function(n,i){var r=(e[n]||"").toString().replace(new RegExp("#","g"),"_hash-");m.forEach(function(t){if(r.indexOf(t)>-1)throw Error("不得包含："+t)}),("id"==n&&r.length>35||"tip"==n&&e.tip===e.text)&&(r=""),t+=0!=i?f+r:r})});var r=0;for(var o in p)if(p[o]!=g[o]){var l=o+"-"+p[o];t+=r?"_"+l:"&esplay="+l,r++}}n.url=e+t,history.pushState("",v,e+t)}catch(t){return t.message}},Object.defineProperty(this,"status",{get:function(){return o},set:function(t){o=t,n.onStateChange(o)}})}o.prototype.CONSTANT={ID:"easyshare",WAITING:0,READY:1,RECORDING:2,PAUSE:3,RECORDED:4,RECORDFAIL:5,FINNISHED:6,REPLAYING:7,PLAYANDWAIT:8,DONE:9},o.prototype.version="0.1.0"},function(t,e,n){var i=n(7);t.exports=i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e={status:"",steps:t.recordedSteps,targetInfo:t.target,runindex:null,url:t.url,ballPos:{},showBall:!1,showMenu:!1},n=t.CONSTANT,l={refershState:function(e){return function(e){return{status:t.status,steps:t.recordedSteps,targetInfo:t.target,runindex:t.runindex,url:t.url}}},setBallPos:function(t){return function(e){return{ballPos:t}}},toggleShowBall:function(t){return function(e){return{showBall:t}}},toggleMenu:function(t){return function(t){return{showMenu:!t.showMenu}}}},a=function(){t.replay(0,!1,1==t.highlightAll,!0,null,200),t.highlightAll=!t.highlightAll},u=function(t){var e=t.status,r=t.onclick;return(0,i.h)("button",{id:"record",onclick:r},e===n.WAITING&&"标记此处",[n.REPLAYING,n.PLAYANDWAIT].indexOf(e)>-1&&"结束播放后可进行记录")},s=function(e){var n=e.state,o=e.actions;return(0,i.h)("div",{id:"easyshare-menu",style:{position:"absolute",visibility:n.steps.length>0?"visible":"hidden",right:0,top:15*n.steps.length+20+"px"}},(0,i.h)("div",{className:r.default.menu,onclick:o.toggleMenu},(0,i.h)("svg",{viewBox:"0 0 8 16",version:"1.1",width:"20",height:"16","aria-hidden":"true"},(0,i.h)("path",{"fill-rule":"evenodd",d:"M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z"}))),n.showMenu&&(0,i.h)("div",{className:r.default.menuContainer},(0,i.h)("a",{href:"javascript:;",className:r.default.close,onclick:o.toggleMenu},(0,i.h)("svg",{style:"",viewBox:"0 0 1024 1024",version:"1.1",width:"20",height:"20"},(0,i.h)("path",{d:"M804.470121 1015.46665c-24.911366 0-49.225121-10.026354-66.707284-27.508517L507.016499 757.210771 276.268114 987.958132c-17.48114 17.482163-41.794895 27.508517-66.707284 27.508517-24.941042 0-49.27117-10.026354-66.75231-27.508517L31.057343 876.205932c-17.48114-17.48114-27.507494-41.811268-27.507494-66.751287 0-24.912389 10.026354-49.225121 27.507494-66.707284l230.747361-230.748385L31.057343 281.251615c-17.48114-17.48114-27.507494-41.794895-27.507494-66.706261 0-24.941042 10.026354-49.27117 27.507494-66.75231L142.809543 36.040844c17.48114-17.48114 41.812291-27.507494 66.75231-27.507494 24.911366 0 49.225121 10.026354 66.707284 27.507494l230.747361 230.747361L737.76386 36.040844C755.245 18.558681 779.558755 8.53335 804.470121 8.53335c24.941042 0 49.27117 10.026354 66.75231 27.507494l111.7522 111.7522c17.48114 17.48114 27.507494 41.811268 27.507494 66.75231 0 24.911366-10.026354 49.225121-27.507494 66.706261L752.228293 512l230.747361 230.748385c17.48114 17.48114 27.507494 41.794895 27.507494 66.707284 0 24.940019-10.026354 49.270147-27.507494 66.751287L871.223454 987.958132C853.742315 1005.440295 829.41014 1015.46665 804.470121 1015.46665zM507.016499 713.795982 759.471254 966.250738c11.768021 11.766998 28.169573 18.516726 44.99989 18.516726 16.859993 0 33.277918-6.749728 45.045939-18.516726l111.7522-111.7522c11.766998-11.766998 18.515702-28.184923 18.515702-45.044916 0-16.830317-6.748704-33.232892-18.515702-44.99989L708.813504 512l252.454756-252.454756c11.766998-11.766998 18.515702-28.16855 18.515702-44.998867 0-16.859993-6.748704-33.278941-18.515702-45.045939L849.51606 57.748239c-11.766998-11.766998-28.185946-18.515702-45.045939-18.515702-16.830317 0-33.232892 6.748704-44.99989 18.515702L507.016499 310.202994 254.561743 57.748239c-11.768021-11.766998-28.16855-18.515702-44.99989-18.515702-16.859993 0-33.277918 6.748704-45.045939 18.515702L52.764738 169.500439c-11.766998 11.768021-18.515702 28.185946-18.515702 45.045939 0 16.830317 6.748704 33.231869 18.515702 44.998867l252.455779 252.454756L52.764738 764.454756c-11.766998 11.766998-18.515702 28.16855-18.515702 44.99989 0 16.85897 6.748704 33.277918 18.515702 45.044916l111.7522 111.7522c11.768021 11.766998 28.185946 18.516726 45.045939 18.516726 16.830317 0 33.231869-6.749728 44.99989-18.516726L507.016499 713.795982z",fill:"#000"}))),(0,i.h)("p",null,(0,i.h)("label",null,(0,i.h)("input",{type:"checkbox",checked:t.options.playSetting.auto,onclick:function(e){t.options.playSetting.auto=1==e.target.checked,t.makelink(),o.refershState()}}),"打开网页时候自动点亮标记")),(0,i.h)("div",null,(0,i.h)("button",{onclick:function(){var e=window.confirm("确认删除所有标记？");e&&(t.remove(-1),o.toggleMenu())}},"删除所有标记"),(0,i.h)("button",{onclick:a},(1==t.highlightAll?"点亮":"隐藏")+"所有标记")),"\b",(0,i.h)("input",{style:{opacity:0},value:n.url,readonly:!0,id:"easyshare-url"}),(0,i.h)("div",{style:"color:#b7b7b7"},"已记录 ",(0,i.h)("b",null,n.steps.length)," 条标记。",(0,i.h)("br",null),"复制地址栏URL或 ",(0,i.h)("a",{href:"javascript:;",onclick:function(t){var e=document.getElementById("easyshare-url");e.focus(),e.setSelectionRange(0,e.value.length),document.execCommand("copy",!0),t.target.innerText="已复制"}},"获取链接"),(0,i.h)("br",null),"分享给好友，即可让对方看见你的标记。")))},c=function(e){var n=e.step,o=e.running,l=void 0!==o&&o,a=e.index;return(0,i.h)("span",{title:"点击",className:r.default.stepSign+" "+(l?r.default.running:"")+" "+(n.isActive?r.default.isActive:""),style:{top:15*(a+1)+"px"},onclick:function(){t.replay(a,!0,!n.isActive)}})},d=function(e){var n=e.step,o=e.index,l=e.actions;return(0,i.h)("div",{style:{position:"absolute",top:n.y+"px",left:n.x+"px"}},(0,i.h)("div",{title:"查看",class:r.default.point+" "+(n.isActive?r.default.active:""),onclick:function(){n.writing=!1,t.replay(o,!1,!n.isActive)}},(0,i.h)("svg",{style:{position:"absolute",display:n.isActive?"":"none"},viewBox:"0 0 1024 1024",version:"1.1",width:"10",height:"10"},(0,i.h)("path",{d:"M192 448l640 0 0 128-640 0 0-128Z","p-id":"4227",fill:"#fff"}))),n.isActive&&(0,i.h)("div",{className:r.default.box},(0,i.h)("div",{contentEditable:n.writing?"plaintext-only":"false",oninput:function(t){var e=t.target.innerText;n.modify=e},innerText:n.tip,style:{width:"100%",border:(n.writing?1:0)+"px solid"}}),(0,i.h)("span",{className:r.default.edit,onclick:function(){n.writing=!0,t.replay(o,!1)}},(0,i.h)("svg",{style:"",viewBox:"0 0 1024 1024",version:"1.1",width:"20",height:"20"},(0,i.h)("path",{d:"M924.766 187.485c-32.297-32.412-62.339-68.774-99.757-95.411-34.261-7.093-50.787 29.928-74.311 47.237 39.777 46.201 86.117 87.013 128.923 130.718 19.407-23.095 65.369-46.724 45.145-82.543zM903.499 362.026c-27.158 27.294-55.258 53.806-81.519 82.146-0.648 109.327 0.273 218.642-0.375 327.946-0.545 40.3-35.851 76.004-76.13 77.445-165.797 0.65-331.717 0.65-497.513 0.127-44.75-1.191-80.6-44.103-77.048-88.058-0.125-158.274-0.125-316.403 0-474.533-3.406-43.84 32.55-85.968 76.797-87.535 109.85-1.451 219.739 0.125 329.462-0.794 28.495-25.717 54.737-53.942 82.063-80.976-146.242 0-292.337-0.773-438.557 0.397-68.274 1.18-129.445 60.898-130.614 129.403-0.272 184.515-0.793 368.895 0.25 553.399 0.272 66.414 56.7 124.012 122.091 130.322l574.541 0c61.944-10.884 115.115-64.972 115.907-129.403 1.839-146.576 0.399-293.297 0.649-439.883zM859.669 290.243c-43.058-43.309-86.365-86.357-129.946-129.142-95.309 94.619-190.867 188.987-285.63 284.128 42.91 43.182 86.094 86.22 129.674 128.871 95.433-94.484 190.718-189.238 285.902-283.856zM373.604 643.78c58.392-15.877 89.499-25.874 147.911-41.616 15.607-4.973 25.989-7.98 33.992-11.167-41.345-39.369-88.852-87.891-130.072-127.523-17.32 60.106-34.534 120.201-51.832 180.305z","p-id":"2079",fill:"#ffffff"}))),n.writing&&(0,i.h)("div",{style:{marginTop:"5px"}},(0,i.h)("a",{className:r.default.delete,onclick:function(){return t.remove(o)},title:"删除"},(0,i.h)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"20",height:"20"},(0,i.h)("path",{d:"M223.595474 318.284043l24.022113 480.742089c0 54.376445 44.989657 98.456383 100.485599 98.456383l331.963601 0c55.494918 0 100.489692-44.078914 100.489692-98.456383l23.109324-480.742089L223.595474 318.284043zM831.749418 284.181341c0.099261-20.274766 0.158612-21.623483 0.158612-22.981411 0-52.871161-31.298843-81.888032-73.29533-81.888032l-116.892267 0.122797c0-27.751041-27.105335-50.245358-54.855352-50.245358L441.349917 129.189338c-27.744901 0-55.727209 22.494317-55.727209 50.245358l-117.013017-0.122797c-46.387493 0-73.29533 35.359322-73.29533 81.888032 0 1.363044 0.054235 2.706645 0.158612 22.981411l636.281561 0L831.749418 284.181341zM614.168937 444.615287c0-15.32708 12.421914-27.750017 27.744901-27.750017 15.32708 0 27.750017 12.422937 27.750017 27.750017l0 317.882907c0 15.328104-12.422937 27.751041-27.750017 27.751041-15.322987 0-27.744901-12.422937-27.744901-27.751041L614.168937 444.615287 614.168937 444.615287zM485.85862 444.615287c0-15.32708 12.42703-27.750017 27.751041-27.750017 15.32708 0 27.750017 12.422937 27.750017 27.750017l0 317.882907c0 15.328104-12.422937 27.751041-27.750017 27.751041-15.322987 0-27.751041-12.422937-27.751041-27.751041L485.85862 444.615287 485.85862 444.615287zM357.63733 444.615287c0-15.32708 12.422937-27.750017 27.751041-27.750017 15.321964 0 27.750017 12.422937 27.750017 27.750017l0 317.882907c0 15.328104-12.42703 27.751041-27.750017 27.751041-15.328104 0-27.751041-12.422937-27.751041-27.751041L357.63733 444.615287 357.63733 444.615287zM357.63733 444.615287",fill:"#fff"}))),(0,i.h)("span",null,(0,i.h)("span",{style:{fontSize:"12px",color:"#bbb"}}," Tip:放弃保存请点击左上角，关闭编辑窗口"),(0,i.h)("a",{style:{float:"right",height:"20px",background:"#fff",borderRadius:"5px"},href:"javascript:;",title:"保存",onclick:function(){var e=void 0!=n.modify?n.modify:n.tip,i=n.tip;n.tip=e;var r=t.makelink(),o=void 0==r;!o&&alert(r),n.writing=!o,n.tip=o?e:i,l.refershState()}},(0,i.h)("svg",{viewBox:"0 0 1024 1024",version:"1.1",width:"20",height:"20"},(0,i.h)("path",{d:"M725.333333 128 213.333333 128C166.4 128 128 166.4 128 213.333333l0 597.333333c0 46.933333 38.4 85.333333 85.333333 85.333333l597.333333 0c46.933333 0 85.333333-38.4 85.333333-85.333333L896 298.666667 725.333333 128zM512 810.666667c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128c72.533333 0 128 55.466667 128 128S584.533333 810.666667 512 810.666667zM640 384 213.333333 384 213.333333 213.333333l426.666667 0L640 384z",fill:"#949494"})))))))},h=document.createElement("div");h.id=t.id,document.body.append(h),(0,i.app)(e,l,function(e,l){return(0,i.h)("div",{oncreate:function(){t.onStateChange=l.refershState,setTimeout(function(){l.refershState()},0)}},(0,i.h)("div",{style:{position:"absolute",left:e.targetInfo.x+"px",top:e.targetInfo.y+"px",transition:".5s",userSelect:"none"}},(e.status===n.WAITING||e.status===n.PLAYANDWAIT)&&(0,i.h)(u,{status:e.status,onclick:function(e){!function(e,n){e.stopPropagation();var i=(0,o.getViewPosition)(e.currentTarget),r=i.top,l=i.left,a=(0,o.getViewPosition)(document.getElementById("easyshare-menu")),u=a.top,s=a.left,c=(u/s-r/l)/(s-l),d=u/s-c*s;n.toggleShowBall(!0);var h=setInterval(function(){l<=s?(r=c*(l+=s-l<=10?1:30)*l+d*l,n.setBallPos({left:l,top:r})):(n.toggleShowBall(!1),t.record(),clearInterval(h))},10)}(e,l)}})),(0,i.h)("div",{className:r.default.recordBall+" "+(e.showBall?r.default.recording:""),style:{top:e.ballPos.top+"px",left:e.ballPos.left+"px"}}),e.steps.map(function(t,e){return(0,i.h)(d,{key:e,step:t,index:e,actions:l})}),(0,i.h)("aside",{style:{position:"fixed",right:0,top:window.innerHeight/2-15*(e.steps.length+7)/2+"px"}},e.steps.length>0&&(0,i.h)("a",{href:"javascript:;",className:r.default.esLight+" "+(t.highlightAll?"":r.default.lightAll),onclick:a},(0,i.h)("svg",{viewBox:"0 0 1000 1000",version:"1.1",width:"25",height:"25"},(0,i.h)("path",{d:"M634.9 770.3l-4.4 28H393.6l-4.4-28h245.7zM512 931c-30.4 0-55.9-21.6-62-50.2h124c-6.1 28.6-31.6 50.2-62 50.2z m103.5-79.3h-207c-3.4 0-6.4-2.2-7.4-5.5l-2.9-18.9H626l-3 18.9c-1 3.3-4 5.5-7.5 5.5zM384.7 741.3l-8.1-51.9-0.1-0.6c-7.4-30.4-22.6-58.6-43.8-81.7-42.5-46.2-65.9-106.1-65.9-168.7 0-135.1 109.9-245.1 245-245.3h0.3c134 0 244 108.9 245.3 242.9 0.6 62.7-22.5 122.6-65 168.6-21.5 23.2-36.8 51.7-44.3 82.4l-0.1 0.6-8.4 53.6H384.7z",fill:"#FFFFFF","p-id":"10480"}),(0,i.h)("g",{id:r.default.light},(0,i.h)("path",{d:"M357 741.1l-8-51.9-0.1-0.6c-7.4-30.4-22.4-58.6-43.5-81.7-42.2-46.2-65.4-106.1-65.4-168.7 0-135.1 109-245.1 243.1-245.3h0.3c133 0 242.1 108.9 243.3 242.9 0.6 62.7-22.3 122.6-64.5 168.6-21.3 23.2-36.5 51.7-43.9 82.4l-0.1 0.6-8.3 53.6H357z","p-id":"10481"})),(0,i.h)("path",{d:"M605.8 770.8l-4.3 28H370.4l-4.3-28h239.7zM587 852.2H384.9c-3.3 0-6.3-2.2-7.2-5.5l-2.9-18.9h222.3l-2.9 18.9c-1 3.3-3.9 5.5-7.2 5.5z",fill:"#E87A66","p-id":"10482"}),(0,i.h)("path",{d:"M484.9 931c-29 0-53.4-21.6-59.2-50.2H544c-5.8 28.6-30.1 50.2-59.1 50.2z",fill:"#65D5EF","p-id":"10483"}),(0,i.h)("path",{d:"M512 164.1h-0.3c-73.2 0.1-142 28.6-193.7 80.4-51.7 51.8-80.2 120.6-80.2 193.9 0 35.2 6.6 69.7 19.7 102.6 12.7 31.8 30.8 60.7 53.8 85.7 17.8 19.3 30.5 42.9 36.8 68.4l24.5 157 0.1 0.6c4 16.5 18.7 28 35.7 28h12c6.4 44.7 45 79.2 91.5 79.2s85.1-34.5 91.5-79.2h12c17 0 31.7-11.5 35.7-28l0.1-0.6 5.6-35.7c0.2-0.9 0.4-1.8 0.4-2.7l18.9-120.4c6.4-25.7 19.3-49.6 37.3-69.1 47.5-51.5 73.3-118.5 72.7-188.6-0.7-72.6-29.6-140.9-81.5-192.2-51.6-51.1-120.1-79.3-192.6-79.3z m122.9 606.2l-4.4 28H393.6l-4.4-28h245.7zM512 931c-30.4 0-55.9-21.6-62-50.2h124c-6.1 28.6-31.6 50.2-62 50.2z m103.5-79.3h-207c-3.4 0-6.4-2.2-7.4-5.5l-2.9-18.9H626l-3 18.9c-1 3.3-4 5.5-7.5 5.5z m76.8-247c-21.5 23.2-36.8 51.7-44.3 82.4l-0.1 0.6-8.4 53.6h-113V570.8c0-8-6.5-14.5-14.5-14.5s-14.5 6.5-14.5 14.5v170.5H384.7l-8.1-51.9-0.1-0.6c-7.4-30.4-22.6-58.6-43.8-81.7-42.5-46.2-65.9-106.1-65.9-168.7 0-135.1 109.9-245.1 245-245.3h0.3c134 0 244 108.9 245.3 242.9 0.4 62.8-22.6 122.6-65.1 168.7z",fill:"#274359","p-id":"10484"}),(0,i.h)("g",{id:r.default.sunshine},(0,i.h)("path",{d:"M512 467c-8 0-14.5 6.5-14.5 14.5v29.7c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5v-29.7c0-8-6.5-14.5-14.5-14.5zM511.4 146.9c8 0 14.5-6.5 14.5-14.5V78.5c0-8-6.5-14.5-14.5-14.5s-14.5 6.5-14.5 14.5v53.8c0 8.1 6.5 14.6 14.5 14.6zM281.4 234.1c2.8 2.8 6.5 4.3 10.3 4.3 3.7 0 7.4-1.4 10.3-4.3 5.7-5.7 5.7-14.9 0-20.5l-38.1-38.1c-5.7-5.7-14.9-5.7-20.5 0-5.7 5.7-5.7 14.9 0 20.5l38 38.1zM201 429.4h-53.8c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5H201c8 0 14.5-6.5 14.5-14.5 0.1-8-6.4-14.5-14.5-14.5zM282.3 653.4l-38.1 38.1c-5.7 5.7-5.7 14.9 0 20.5 2.8 2.8 6.5 4.3 10.3 4.3 3.7 0 7.4-1.4 10.3-4.3l38.1-38.1c5.7-5.7 5.7-14.9 0-20.5-5.8-5.7-14.9-5.7-20.6 0zM742.6 652.5c-5.7-5.7-14.9-5.7-20.5 0-5.7 5.7-5.7 14.9 0 20.5l38.1 38.1c2.8 2.8 6.5 4.3 10.3 4.3s7.4-1.4 10.3-4.3c5.7-5.7 5.7-14.9 0-20.5l-38.2-38.1zM876.8 428.2H823c-8 0-14.5 6.5-14.5 14.5s6.5 14.5 14.5 14.5h53.8c8 0 14.5-6.5 14.5-14.5s-6.5-14.5-14.5-14.5zM731.4 237.5c3.7 0 7.4-1.4 10.3-4.3l38.1-38.1c5.7-5.7 5.7-14.9 0-20.5-5.7-5.7-14.9-5.7-20.5 0l-38.1 38.1c-5.7 5.7-5.7 14.9 0 20.5 2.8 2.9 6.5 4.3 10.2 4.3z",fill:"#274359","p-id":"10485"})))),(0,i.h)("div",{style:{position:"relative",right:"6px"}},e.steps.map(function(t,n){return(0,i.h)(c,{key:n,step:t,running:n===e.runindex,index:n})})),(0,i.h)(s,{state:e,actions:l})))},h)};var i=n(5),r=function(t){return t&&t.__esModule?t:{default:t}}(n(6)),o=n(0)},function(t,e,n){"use strict";function i(t,e){for(var n=[],i=[],r=arguments.length;r-- >2;)n.push(arguments[r]);for(;n.length;){var o=n.pop();if(o&&o.pop)for(r=o.length;r--;)n.push(o[r]);else null!=o&&!0!==o&&!1!==o&&i.push(o)}return"function"==typeof t?t(e||{},i):{nodeName:t,attributes:e||{},children:i,key:e&&e.key}}function r(t,e,n,i){var r,o=[].map,l=i&&i.children[0]||null,a=l&&function t(e){return{nodeName:e.nodeName.toLowerCase(),attributes:{},children:o.call(e.childNodes,function(e){return 3===e.nodeType?e.nodeValue:t(e)})}}(l),u=[],s=!0,c=g(t),d=function t(e,n,i){for(var r in i)"function"==typeof i[r]?function(t,r){i[t]=function(t){var o=r(t);return"function"==typeof o&&(o=o(y(e,c),i)),o&&o!==(n=y(e,c))&&!o.then&&p(c=v(e,g(n,o),c)),o}}(r,i[r]):t(e.concat(r),n[r]=g(n[r]),i[r]=g(i[r]));return i}([],c,g(e));return p(),d;function h(t){return"function"==typeof t?h(t(c,d)):null!=t?t:""}function f(){r=!r;var t=h(n);for(i&&!r&&(l=function t(e,n,i,r,o){if(r===i);else if(null==i||i.nodeName!==r.nodeName){var l=function t(e,n){var i="string"==typeof e||"number"==typeof e?document.createTextNode(e):(n=n||"svg"===e.nodeName)?document.createElementNS("http://www.w3.org/2000/svg",e.nodeName):document.createElement(e.nodeName);var r=e.attributes;if(r){r.oncreate&&u.push(function(){r.oncreate(i)});for(var o=0;o<e.children.length;o++)i.appendChild(t(e.children[o]=h(e.children[o]),n));for(var l in r)x(i,l,r[l],null,n)}return i}(r,o);e.insertBefore(l,n),null!=i&&b(e,n,i),n=l}else if(null==i.nodeName)n.nodeValue=r;else{!function(t,e,n,i){for(var r in g(e,n))n[r]!==("value"===r||"checked"===r?t[r]:e[r])&&x(t,r,n[r],e[r],i);var o=s?n.oncreate:n.onupdate;o&&u.push(function(){o(t,e)})}(n,i.attributes,r.attributes,o=o||"svg"===r.nodeName);for(var a={},c={},d=[],f=i.children,p=r.children,v=0;v<f.length;v++){d[v]=n.childNodes[v];var y=m(f[v]);null!=y&&(a[y]=[d[v],f[v]])}for(var v=0,w=0;w<p.length;){var y=m(f[v]),N=m(p[w]=h(p[w]));if(c[y])v++;else if(null==N||N!==m(f[v+1]))if(null==N||s)null==y&&(t(n,d[v],f[v],p[w],o),w++),v++;else{var M=a[N]||[];y===N?(t(n,M[0],M[1],p[w],o),v++):M[0]?t(n,n.insertBefore(M[0],d[v]),M[1],p[w],o):t(n,d[v],null,p[w],o),c[N]=p[w],w++}else null==y&&b(n,d[v],f[v]),v++}for(;v<f.length;)null==m(f[v])&&b(n,d[v],f[v]),v++;for(var v in a)c[v]||b(n,a[v][0],a[v][1])}return n}(i,l,a,a=t)),s=!1;u.length;)u.pop()()}function p(){r||(r=!0,setTimeout(f))}function g(t,e){var n={};for(var i in t)n[i]=t[i];for(var i in e)n[i]=e[i];return n}function v(t,e,n){var i={};return t.length?(i[t[0]]=t.length>1?v(t.slice(1),e,n[t[0]]):e,g(n,i)):e}function y(t,e){for(var n=0;n<t.length;)e=e[t[n++]];return e}function m(t){return t?t.key:null}function w(t){return t.currentTarget.events[t.type](t)}function x(t,e,n,i,r){if("key"===e);else if("style"===e)if("string"==typeof n)t.style.cssText=n;else for(var o in"string"==typeof i&&(i=t.style.cssText=""),g(i,n)){var l=null==n||null==n[o]?"":n[o];"-"===o[0]?t.style.setProperty(o,l):t.style[o]=l}else"o"===e[0]&&"n"===e[1]?(e=e.slice(2),t.events?i||(i=t.events[e]):t.events={},t.events[e]=n,n?i||t.addEventListener(e,w):t.removeEventListener(e,w)):e in t&&"list"!==e&&"type"!==e&&"draggable"!==e&&"spellcheck"!==e&&"translate"!==e&&!r?t[e]=null==n?"":n:null!=n&&!1!==n&&t.setAttribute(e,n),null!=n&&!1!==n||t.removeAttribute(e)}function b(t,e,n){function i(){t.removeChild(function t(e,n){var i=n.attributes;if(i){for(var r=0;r<n.children.length;r++)t(e.childNodes[r],n.children[r]);i.ondestroy&&i.ondestroy(e)}return e}(e,n))}var r=n.attributes&&n.attributes.onremove;r?r(e,i):i()}}n.r(e),n.d(e,"h",function(){return i}),n.d(e,"app",function(){return r})},function(t,e,n){t.exports={box:"_3Dr",point:"zzj",active:"QVz",edit:"_1Dn",delete:"_2kz",menu:"_3lO",menuContainer:"_1Cv",stepSign:"_3ls",running:"_23u",isActive:"T7x",close:"_2PK",recordBall:"_3P0",recording:"_1k7",esLight:"_1QK",light:"zWp",sunshine:"_27C",lightAll:"onb"}},function(t,e,n){"use strict";function i(t){var e=t.getBoundingClientRect(),n=document.body,i=document.documentElement,r=window.pageYOffset||i.scrollTop||n.scrollTop,o=window.pageXOffset||i.scrollLeft||n.scrollLeft,l=i.clientTop||n.clientTop||0,a=i.clientLeft||n.clientLeft||0,u=e.top+r-l,s=e.left+o-a;return{top:Math.round(u),left:Math.round(s)}}n.r(e);var r=window.document,o=function(){},l=function(){var t=function(e){this.options=Object.assign({},{draw:!0,simpleId:!0},e),this.lastClick=document.body;var n=this;document.addEventListener("mousedown",function(e){n.lastClick=e.target,n.focusedElement!==n.lastClick&&t.prototype.clean()})};return t}(),a=l.prototype;a.getUniqueId=function(t,e){if(!((t=t||this.lastClick)instanceof HTMLElement))return console.error("input is not a HTML element"),{};var n={wid:"",type:"",top:i(t).top,left:i(t).left,viewLeft:t.getBoundingClientRect().left,viewTop:t.getBoundingClientRect().top,text:t.innerText},o=t.id,u=t.name,s=t.tagName.toLowerCase(),c=t.type?t.type.toLowerCase():"",d="",h=t.classList||[];if(h.forEach(function(t){d+="."+t}),"body"!==s&&"html"!==s||(n.wid=s,n.type=s),o&&r.getElementById(o)===t){var f=new RegExp("^[a-zA-Z]+");!e&&this.options.simpleId?n.wid=o:f.test(o)&&(n.wid=s+"#"+o),n.type="document.getElementById()"}if(!n.wid&&u&&r.getElementsByName(u)[0]===t&&(n.wid=u,n.type="document.getElementsByName()"),!n.wid&&d&&r.querySelector(s+d)===t){n.wid=s+d,n.type="document.querySelector()";var p=h.length;if(p>2){for(var g=1,v=[];Math.pow(2,g)<p;)v.push(Math.pow(2,g)),g++;v.push(p);for(var y=0;y<v.length;y++)v[y]}}if("radio"===c){var m=s+"[value='"+t.value+"']";u&&(m+="[name='"+u+"']"),r.querySelector(m)===t&&(n.wid=m,n.type="document.querySelector()")}if(n.wid||(m=s,m=d?m+d:m,m=u?m+"[name='"+u+"']":m,a.getTarget(m)===t&&(n.wid=m,n.type="document.querySelector()")),!n.wid){m=s,m=d?m+d:m;var w=r.querySelectorAll(m);if(w&&w.length>0){for(var x=null,b=0;b<w.length;b++)if(t===w[b]){x=b+1;break}x&&(m=m+":nth-child("+x+")",r.querySelector(m)===t&&(n.wid=m,n.type="document.querySelector()"))}}if(!n.wid){if(!t.parentNode)return;var N=l.prototype.getUniqueId(t.parentNode,!0),M=N?N.wid:"";if(!M)return{wid:"",type:"NO_LOCATION"};var E=s;if(d&&(E+=d),m=M+">"+E,r.querySelectorAll(m).length>1){m=null;x=null;for(var L=0;L<t.parentNode.children.length;L++)if(t.parentNode.children[L]===t){x=L+1;break}if(x>=1)m=M+">"+E+":nth-child("+x+")",r.querySelector(m)!=t&&(m=null)}n.wid=m,n.type="document.querySelector()"}return this.focusedElement=a.getTarget(n.wid),!e&&this.options.draw&&this.__proto__.draw(n),n},a.getTarget=function(t){return r.getElementById(t)||r.getElementsByName(t)[0]||r.querySelector(t)},a.clean=o,a.draw=o,window.whatsElement=l;e.default=l}]);
//# sourceMappingURL=easyshare.js.map