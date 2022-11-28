!function(){function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(T){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),s=new M(r||[]);return i(a,"_invoke",{value:k(t,n,s)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}e.wrap=l;var d={};function h(){}function b(){}function f(){}var v={};u(v,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==n&&r.call(m,a)&&(v=m);var y=f.prototype=h.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){var n;i(this,"_invoke",{value:function(i,o){function a(){return new e((function(n,a){!function n(i,o,a,s){var c=p(t[i],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(i,o,n,a)}))}return n=n?n.then(a,a):a()}})}function k(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return Q()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=L(a,n);if(s){if(s===d)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=p(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=p(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:Q}}function Q(){return{value:void 0,done:!0}}return b.prototype=f,i(y,"constructor",{value:f,configurable:!0}),i(f,"constructor",{value:b,configurable:!0}),b.displayName=u(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},w(P.prototype),u(P.prototype,s,(function(){return this})),e.AsyncIterator=P,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new P(l(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(y),u(y,c,"Generator"),u(y,a,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=O,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;E(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(i=r.key,o=void 0,"symbol"==typeof(o=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(i,"string"))?o:String(o)),r)}var i,o}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Iab2:function(t,e,n){var r,i;void 0===(i="function"==typeof(r=function(){"use strict";function e(t,e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){a(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function n(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function r(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,o=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),a=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(t,o,a){var s=i.URL||i.webkitURL,c=document.createElement("a");c.download=o=o||t.name||"download",c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?r(c):n(c.href)?e(t,o,a):r(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){r(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,i,o){if(i=i||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,o),i);else if(n(t))e(t,i,o);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout((function(){r(a)}))}}:function(t,n,r,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,r);var s="application/octet-stream"===t.type,c=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||s&&c||o)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=u?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=t:location=t,a=null},l.readAsDataURL(t)}else{var p=i.URL||i.webkitURL,d=p.createObjectURL(t);a?a.location=d:location.href=d,a=null,setTimeout((function(){p.revokeObjectURL(d)}),4e4)}});i.saveAs=a.saveAs=a,t.exports=a})?r.apply(e,[]):r)||(t.exports=i)},rgPk:function(n,i,o){"use strict";o.r(i),o.d(i,"MyAppModule",(function(){return z}));var a=o("ofXK"),s=o("3Pt+"),c=o("tyNb"),u=o("mrSG"),l=o("tk/3"),p=o("F5nt"),d=o("Kqap"),h=o("fXoL"),b=o("Iab2"),f=new h.q("saver");function v(){return b.saveAs}var g,m=o("LgUO"),y=o("5eHb"),w=((g=function(){function n(t,r,i,o,a){e(this,n),this.oauthService=t,this.http=r,this.appService=i,this.toastr=o,this.save=a,this.things=[],this.apiURL=this.appService.settings.apiURL}return r(n,[{key:"find",value:function(){var t=this.apiURL+"/things",e=this.getHeader();return this.http.get(t,{headers:e}).toPromise()}},{key:"getProperties",value:function(t){var e=this.apiURL+"/things/"+t+"/properties",n=this.getHeader();return this.http.get(e,{headers:n}).toPromise()}},{key:"findOrCreatePropertyByName",value:function(e,n,r){return Object(u.a)(this,void 0,void 0,t().mark((function i(){var o=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getProperties(e).then((function(t){for(var i in t)if(t[i].name==n)return Promise.resolve(t[i]);return o.createProperty(e,{name:n,typeId:r})})));case 1:case"end":return t.stop()}}),i,this)})))}},{key:"getPropertyValues",value:function(t,e,n,r){var i=this.apiURL+"/things/"+t+"/properties/"+e,o=(new l.f).set("from",n.from+"").set("to",n.to+"");void 0!==n.fctInterval&&o.set("fctInterval",n.fctInterval+""),void 0!==n.timeInterval&&o.set("timeInterval",n.timeInterval),void 0!==n.fill&&o.set("fill",n.fill);var a=this.getHeader();return a=a.set("Accept",r?"text/csv":"application/json"),this.http.get(i,{headers:a,params:o,responseType:"blob"}).toPromise()}},{key:"createThing",value:function(t){var e=this.apiURL+"/things",n=this.getHeader();return this.http.post(e,t,{headers:n}).toPromise()}},{key:"edit",value:function(t,e){var n=this.apiURL+"/things/"+t,r=this.getHeader(),i={};return void 0!==e.name&&""!==e.name&&(i.name=e.name),void 0!==e.description&&""!==e.description&&(i.description=e.description),this.http.patch(n,i,{headers:r}).toPromise()}},{key:"updatePEM",value:function(t,e){var n=this.apiURL+"/things/"+t+"/pem",r=this.getHeader();return this.http.patch(n,{pem:e},{headers:r}).toPromise()}},{key:"delete",value:function(t){var e=this.apiURL+"/things/"+t,n=this.getHeader();return this.http.delete(e,{headers:n}).toPromise()}},{key:"grant",value:function(t,e,n,r){var i=this.apiURL+"/things/"+t+"/properties/"+e+"/consents",o=this.getHeader();return this.http.post(i,{subjects:n,actions:r},{headers:o}).toPromise()}},{key:"revoke",value:function(t,e,n){var r=this.apiURL+"/things/"+t+"/properties/"+e+"/consents/"+n,i=this.getHeader();return this.http.delete(r,{headers:i}).toPromise()}},{key:"createProperty",value:function(t,e){var n=this.getHeader();return this.http.post(this.apiURL+"/things/"+t+"/properties",e,{headers:n}).toPromise()}},{key:"editProperty",value:function(t,e,n){var r=this.apiURL+"/things/"+t+"/properties/"+e,i=this.getHeader(),o={};return void 0!==n.name&&""!==n.name&&(o.name=n.name),void 0!==n.description&&""!==n.description&&(o.description=n.description),this.http.patch(r,o,{headers:i}).toPromise()}},{key:"deleteProperty",value:function(t,e){var n=this.apiURL+"/things/"+t+"/properties/"+e,r=this.getHeader();return this.http.delete(n,{headers:r}).toPromise()}},{key:"lastValues",value:function(t,e){var n=this.apiURL+"/things/"+t+"/properties/"+e+"/last",r=this.getHeader();return this.http.get(n,{headers:r}).toPromise()}},{key:"dpCount",value:function(t,e){var n=this.apiURL+"/things/count?from="+t;void 0!==e&&(n+="&timeInterval="+e);var r=this.getHeader();return this.http.get(n,{headers:r}).toPromise()}},{key:"sharedProperties",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"*",n=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0;return Object(u.a)(this,void 0,void 0,t().mark((function i(){var o,a;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=this.apiURL+"/properties?sharedWith="+e,void 0!==n&&void 0!==r&&(o+="&from="+n+"&timeInterval="+r),a=this.getHeader(),t.abrupt("return",this.http.get(o,{headers:a}).toPromise());case 4:case"end":return t.stop()}}),i,this)})))}},{key:"getPropertyTypes",value:function(){return Object(u.a)(this,void 0,void 0,t().mark((function e(){var n,r,i=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.propertyTypes){t.next=2;break}return t.abrupt("return",Promise.resolve(this.propertyTypes));case 2:return n=this.apiURL+"/types",r=this.getHeader(),t.next=5,this.http.get(n,{headers:r}).subscribe((function(t){i.propertyTypes=t}),(function(t){console.warn("status",t.status)}));case 5:return t.abrupt("return",Promise.resolve(this.propertyTypes));case 6:case"end":return t.stop()}}),e,this)})))}},{key:"csvFileUpload",value:function(t,e,n,r){var i=this.apiURL+"/things/"+t+"/properties/"+e+"?hasLabel="+(r?"true":"false"),o=this.getHeader(),a=new FormData;return a.append("fileKey",n,n.name),this.http.put(i,a,{headers:o}).toPromise()}},{key:"updatePropertyValues",value:function(t,e){var n=this.apiURL+"/things/"+t+"/properties/"+e.id,r=this.getHeader();return this.http.put(n,e,{headers:r}).toPromise()}},{key:"dpiStatus",value:function(t){var e=this.apiURL+"/things/"+t+"/types/dpi",n=this.getHeader();return this.http.get(e,{headers:n}).toPromise()}},{key:"dpiCreate",value:function(t,e){var n=this.apiURL+"/things/"+t+"/types/dpi",r=this.getHeader();return this.http.post(n,e,{headers:r}).toPromise()}},{key:"dpiCancel",value:function(t){var e=this.apiURL+"/things/"+t+"/types/dpi/cancel",n=new l.e({timeout:"20000"}).set("Authorization","Bearer "+this.oauthService.getAccessToken());return this.http.get(e,{headers:n}).toPromise()}},{key:"dpiDelete",value:function(t){var e=this.apiURL+"/things/"+t+"/types/dpi",n=this.getHeader();return this.http.delete(e,{headers:n}).toPromise()}},{key:"dpiDownload",value:function(t){var e,n=this,r=this.apiURL+"/things/"+t+"/types/dpi",i=this.getHeader(),o=(new l.f).set("download","true"),a="dpi_image_"+t.replace("dcd:things:","")+".zip";return this.http.get(r,{headers:i,params:o,reportProgress:!0,observe:"events",responseType:"blob"}).pipe((e=function(t){return n.save(t,a)},function(t){return t.pipe(Object(d.a)((function(t,n){if(k(n)){var r=Math.round(100*n.loaded/1166082792);r>100&&(r=100);var i=document.getElementById("download-dpi-image-progress");return i&&(i.style.width=r+"%"),{progress:Math.round(100*n.loaded/1166082792),state:"IN_PROGRESS",content:null}}if(P(n)){e&&n.body&&e(n.body);var o=document.getElementById("downloadImage");o&&(o.disabled=!1);var a=document.getElementById("spinnerDownloadImage");a&&(a.style.display="none");var s=document.getElementById("download-dpi-image-progress-bar");return s&&(s.style.display="none"),{progress:100,state:"DONE",content:n.body}}return t}),{state:"PENDING",progress:0,content:null}))}))}},{key:"takeout",value:function(){var t,e=this,n=this.apiURL+"/takeout",r=this.getHeader();return this.http.get(n,{headers:r,reportProgress:!0,observe:"events",responseType:"blob"}).pipe((t=function(t){return e.save(t,"takeout.zip")},function(e){return e.pipe(Object(d.a)((function(e,n){if(k(n)){var r=Math.round(100*n.loaded/1166082792);return r>100&&(r=100),{progress:Math.round(100*n.loaded/1166082792),state:"IN_PROGRESS",content:null}}if(P(n)){t&&n.body&&t(n.body);var i=document.getElementById("nav-progress-bar");return i&&(i.style.display="none"),{progress:100,state:"DONE",content:n.body}}return e}),{state:"PENDING",progress:0,content:null}))}))}},{key:"createGrafanaThing",value:function(t){var e=this.apiURL+"/things/"+t+"/apps/grafana",n=this.getHeader();return this.http.post(e,{},{headers:n}).toPromise()}},{key:"getGrafanaId",value:function(t){var e=this.apiURL+"/things/"+t+"/apps/grafana/user",n=this.getHeader();return this.http.get(e,{headers:n}).toPromise()}},{key:"getDPiHealth",value:function(){var t=this.apiURL+"/things/types/dpi/health",e=this.getHeader();return this.http.get(t,{headers:e}).toPromise()}},{key:"getHeader",value:function(){return(new l.e).set("Accept","application/json").set("Authorization","Bearer "+this.oauthService.getAccessToken())}},{key:"toast",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"danger",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"nc-alert-circle-i",r="";"string"==typeof t?r=t:void 0!==t.error&&"string"!=typeof t.error?(r=t.error.name+" -- "+t.error.message,t.error.requirement&&(r+="<br>Requirement: "+t.error.requirement),t.error.hint&&(r+="<br>Hint: "+t.error.hint)):r="Bucket service unavailable.",this.toastr.info('<span data-notify="icon" class="nc-icon '+n+'"></span><span data-notify="message">'+r+"</span>","",{timeOut:4e3,closeButton:!0,enableHtml:!0,toastClass:"alert alert-"+e+" alert-with-icon",positionClass:"toast-top-center"})}}]),n}()).\u0275fac=function(t){return new(t||g)(h.Yb(m.b),h.Yb(l.b),h.Yb(p.a),h.Yb(y.b),h.Yb(f))},g.\u0275prov=h.Hb({token:g,factory:g.\u0275fac}),g);function P(t){return t.type===l.d.Response}function k(t){return t.type===l.d.DownloadProgress||t.type===l.d.UploadProgress}function L(t,e){if(1&t&&(h.Qb(0,"ul"),h.Qb(1,"li"),h.Bc(2),h.Mb(3,"br"),h.Qb(4,"span",11),h.Bc(5),h.Mb(6,"br"),h.Bc(7),h.Mb(8,"br"),h.Bc(9),h.Pb(),h.Pb(),h.Pb()),2&t){var n=e.$implicit;h.xb(2),h.Dc(" Name: ",n.name,""),h.xb(3),h.Dc(" Id: ",n.id,""),h.xb(2),h.Dc(" Description: ",n.description,""),h.xb(2),h.Dc(" Type Id: ",n.type.id," ")}}function x(t,e){if(1&t&&(h.Qb(0,"tr"),h.Qb(1,"td",10),h.Bc(2),h.Mb(3,"br"),h.Qb(4,"span",11),h.Bc(5),h.Mb(6,"br"),h.Bc(7),h.Mb(8,"br"),h.Bc(9),h.Pb(),h.Pb(),h.Qb(10,"td"),h.zc(11,L,10,4,"ul",8),h.Pb(),h.Pb()),2&t){var n=e.$implicit;h.xb(2),h.Dc(" Name: ",n.name,""),h.xb(3),h.Dc(" Id: ",n.id,""),h.xb(2),h.Dc(" Description: ",n.description,""),h.xb(2),h.Dc(" Type: ",n.type," "),h.xb(2),h.jc("ngForOf",n.properties)}}var E,M,O=((M=function(){function n(t){e(this,n),this.bucketService=t}return r(n,[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,t().mark((function e(){return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.bucketService.find();case 2:this.things=t.sent;case 3:case"end":return t.stop()}}),e,this)})))}}]),n}()).\u0275fac=function(t){return new(t||M)(h.Lb(w))},M.\u0275cmp=h.Fb({type:M,selectors:[["app-things"]],decls:27,vars:1,consts:[[1,"card","card-chart"],[1,"card-header"],[1,"card-title"],[1,"card-category"],[1,"card-body"],[1,"table-responsive"],[1,"table"],[1,"text-primary"],[4,"ngFor","ngForOf"],[1,"card-footer"],[2,"vertical-align","top"],[2,"font-size","x-small"]],template:function(t,e){1&t&&(h.Qb(0,"div",0),h.Qb(1,"div",1),h.Qb(2,"h5",2),h.Bc(3," List of Things "),h.Pb(),h.Qb(4,"p",3),h.Bc(5," This table list your things and the properties it contains. "),h.Pb(),h.Pb(),h.Qb(6,"div",4),h.Qb(7,"div",5),h.Qb(8,"table",6),h.Qb(9,"thead",7),h.Qb(10,"th"),h.Bc(11," Thing "),h.Pb(),h.Qb(12,"th"),h.Bc(13," Properties "),h.Pb(),h.Pb(),h.Qb(14,"tbody"),h.zc(15,x,12,5,"tr",8),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Qb(16,"div",9),h.Mb(17,"hr"),h.Qb(18,"p"),h.Bc(19," The HTTP request for this is: "),h.Pb(),h.Qb(20,"code"),h.Bc(21," /bucket/api/things "),h.Pb(),h.Mb(22,"hr"),h.Qb(23,"p"),h.Bc(24," In Angular, you can use the Bucket service of this template and get the list of Things as follows. You can find it in the code of this component in src/app/myapp/things/things.componentt.ts "),h.Pb(),h.Qb(25,"code"),h.Bc(26," things = await this.bucketService.find() "),h.Pb(),h.Pb(),h.Pb()),2&t&&(h.xb(15),h.jc("ngForOf",e.things))},directives:[a.j],encapsulation:2}),M),Q=((E=function(){function n(t,r){e(this,n),this.route=t,this.bucketService=r}return r(n,[{key:"ngOnInit",value:function(){return Object(u.a)(this,void 0,void 0,t().mark((function e(){var n=this;return t().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.route.queryParams.subscribe((function(t){void 0!==t.success?n.bucketService.toast(t.success,"success"):void 0!==t.error&&n.bucketService.toast(t.error,"danger")}));case 1:case"end":return t.stop()}}),e,this)})))}}]),n}()).\u0275fac=function(t){return new(t||E)(h.Lb(c.a),h.Lb(w))},E.\u0275cmp=h.Fb({type:E,selectors:[["app-dashboard-cmp"]],decls:3,vars:0,consts:[[1,"row"],[1,"col-lg-12","col-md-12","col-sm-12"]],template:function(t,e){1&t&&(h.Qb(0,"div",0),h.Qb(1,"div",1),h.Mb(2,"app-things"),h.Pb(),h.Pb())},directives:[O],encapsulation:2}),E),T=o("WoVx"),B=function(t){return[t]};function I(t,e){if(1&t&&(h.Qb(0,"li",8),h.Qb(1,"a",9),h.Mb(2,"i"),h.Qb(3,"p"),h.Bc(4),h.Pb(),h.Pb(),h.Pb()),2&t){var n=e.$implicit;h.zb(n.class),h.xb(1),h.jc("routerLink",h.mc(9,B,n.path)),h.xb(1),h.Bb("nc-icon ",n.icon," ",n.type,""),h.xb(2),h.Cc(n.title)}}var j,S,R,C,U,H=[{path:"/dashboard",title:"Dashboard",icon:"nc-layout-11",class:""}],D=((j=function(){function t(n){e(this,t),this.bucketService=n}return r(t,[{key:"ngOnInit",value:function(){this.menuItems=H.filter((function(t){return t}))}}]),t}()).\u0275fac=function(t){return new(t||j)(h.Lb(w))},j.\u0275cmp=h.Fb({type:j,selectors:[["app-sidebar-cmp"]],decls:9,vars:1,consts:[[1,"sidebar-wrapper"],[1,"logo"],["href","./",1,"simple-text","logo-mini"],[1,"logo-image-small"],["src","./assets/img/logo.png"],["href","./",1,"simple-text","logo-normal"],[1,"nav"],["routerLinkActive","active",3,"class",4,"ngFor","ngForOf"],["routerLinkActive","active"],[3,"routerLink"]],template:function(t,e){1&t&&(h.Qb(0,"div",0),h.Qb(1,"div",1),h.Qb(2,"a",2),h.Qb(3,"div",3),h.Mb(4,"img",4),h.Pb(),h.Pb(),h.Qb(5,"a",5),h.Bc(6," DCD Lab Angular "),h.Pb(),h.Pb(),h.Qb(7,"ul",6),h.zc(8,I,5,11,"li",7),h.Pb(),h.Pb()),2&t&&(h.xb(8),h.jc("ngForOf",e.menuItems))},directives:[a.j,c.c,c.d],styles:[".property[_ngcontent-%COMP%]{padding-left:15px}"]}),j),_=o("1kSV"),A=["app-navbar-cmp"],N=((S=function(){function t(n,r,i,o,a,s){e(this,t),this.renderer=r,this.element=i,this.router=o,this.oauthService=a,this.bucketService=s,this.takeoutInProgress=!1,this.isCollapsed=!0,this.location=n,this.nativeElement=i.nativeElement,this.sidebarVisible=!1}return r(t,[{key:"ngOnInit",value:function(){var t=this;if(this.listTitles=H.filter((function(t){return t})),this.toggleButton=this.element.nativeElement.getElementsByClassName("navbar-toggle")[0],this.router.events.subscribe((function(e){t.sidebarClose()})),this.oauthService.hasValidAccessToken()&&this.oauthService.hasValidIdToken()){var e=this.oauthService.getIdentityClaims();this.userProfile={name:e.name,email:e.email}}}},{key:"getTitle",value:function(){var t=this.location.prepareExternalUrl(this.location.path());"#"===t.charAt(0)&&(t=t.slice(1));for(var e=0;e<this.listTitles.length;e++)if(this.listTitles[e].path===t)return this.listTitles[e].title;return"Dashboard"}},{key:"sidebarToggle",value:function(){!1===this.sidebarVisible?this.sidebarOpen():this.sidebarClose()}},{key:"sidebarOpen",value:function(){var t=this.toggleButton,e=document.getElementsByTagName("html")[0],n=document.getElementsByClassName("main-panel")[0];setTimeout((function(){t.classList.add("toggled")}),500),e.classList.add("nav-open"),window.innerWidth<991&&(n.style.position="fixed"),this.sidebarVisible=!0}},{key:"sidebarClose",value:function(){var t=document.getElementsByTagName("html")[0],e=document.getElementsByClassName("main-panel")[0];window.innerWidth<991&&setTimeout((function(){e.style.position=""}),500),this.toggleButton.classList.remove("toggled"),this.sidebarVisible=!1,t.classList.remove("nav-open")}},{key:"collapse",value:function(){this.isCollapsed=!this.isCollapsed;var t=document.getElementsByTagName("nav")[0];this.isCollapsed?(t.classList.add("navbar-transparent"),t.classList.remove("bg-white")):(t.classList.remove("navbar-transparent"),t.classList.add("bg-white"))}},{key:"logout",value:function(){this.oauthService.logOut(),this.oauthService.revokeTokenAndLogout()}},{key:"editProfile",value:function(){window.open("https://dwd.tudelft.nl/profile","_blank").focus()}},{key:"takeout",value:function(){var t=this;console.log("takeout");var e=document.getElementById("nav-spinner");e.style.display="block",this.takeoutInProgress?console.log("ignoring takeout, already ongoing"):(this.takeoutInProgress=!0,this.download$=this.bucketService.takeout(),this.download$.subscribe((function(n){"PENDING"===n.state||"DONE"===n.state&&(e.style.display="none",t.takeoutInProgress=!1,t.bucketService.toast("Takeout ready.","success","nc-single-copy-04"))}),(function(n){t.takeoutInProgress=!1,e.style.display="none",t.bucketService.toast("Takeout failed.","danger","nc-single-copy-04")})))}}]),t}()).\u0275fac=function(t){return new(t||S)(h.Lb(a.h),h.Lb(h.D),h.Lb(h.l),h.Lb(c.b),h.Lb(m.b),h.Lb(w))},S.\u0275cmp=h.Fb({type:S,selectors:[["app-navbar-cmp"]],viewQuery:function(t,e){var n;1&t&&h.Fc(A,!0),2&t&&h.pc(n=h.cc())&&(e.button=n.first)},decls:53,vars:5,consts:[[1,"navbar","navbar-expand-lg","navbar-absolute","fixed-top","navbar-transparent"],[1,"container-fluid"],[1,"navbar-wrapper"],[1,"navbar-toggle"],["type","button",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-bar","bar1"],[1,"navbar-toggler-bar","bar2"],[1,"navbar-toggler-bar","bar3"],["href","javascript:void(0)",1,"navbar-brand"],["type","button","aria-controls","collapseExample",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-bar","navbar-kebab"],["id","collapseExample",1,"collapse","navbar-collapse","justify-content-end",3,"ngbCollapse"],["id","nav-progress-bar",1,"progress",2,"display","none"],["id","nav-progress","role","progressbar",1,"progress-bar","progress-bar-info"],["id","nav-spinner",1,"spinner",2,"display","none"],[1,"rect1"],[1,"rect2"],[1,"rect3"],[1,"rect4"],[1,"rect5"],[1,"navbar-nav"],["ngbDropdown","","placement","bottom-left",1,"nav-item","btn-rotate"],["ngbDropdownToggle","","id","navbarDropdownMenuLink",1,"nav-link"],[1,"nc-icon","nc-single-02"],[1,"d-lg-none","d-md-block"],["ngbDropdownMenu","","aria-labelledby","navbarDropdownMenuLink",1,"dropdown-menu","dropdown-menu-right"],["ngbDropdownItem",""],[1,"nc-icon","nc-email-85"],[1,"dropdown-divider"],["ngbDropdownItem","","id","download-takeout",3,"click"],[1,"nc-icon","nc-cloud-download-93"],["ngbDropdownItem","",3,"click"],[1,"nc-icon","nc-settings-gear-65"],[1,"nc-icon","nc-simple-remove"],[1,"nav-item"],["href","./","target","_blank","alt","Help","title","Help",1,"nav-link","btn-rotate"],[1,"nc-icon","nc-support-17"]],template:function(t,e){1&t&&(h.Qb(0,"nav",0),h.Qb(1,"div",1),h.Qb(2,"div",2),h.Qb(3,"div",3),h.Qb(4,"button",4),h.bc("click",(function(){return e.sidebarToggle()})),h.Mb(5,"span",5),h.Mb(6,"span",6),h.Mb(7,"span",7),h.Pb(),h.Pb(),h.Qb(8,"a",8),h.Bc(9),h.Pb(),h.Pb(),h.Qb(10,"button",9),h.bc("click",(function(){return e.collapse()})),h.Mb(11,"span",10),h.Mb(12,"span",10),h.Mb(13,"span",10),h.Pb(),h.Qb(14,"div",11),h.Qb(15,"div",12),h.Mb(16,"div",13),h.Pb(),h.Qb(17,"div",14),h.Mb(18,"div",15),h.Mb(19,"div",16),h.Mb(20,"div",17),h.Mb(21,"div",18),h.Mb(22,"div",19),h.Pb(),h.Qb(23,"ul",20),h.Qb(24,"li",21),h.Qb(25,"a",22),h.Mb(26,"i",23),h.Qb(27,"p"),h.Qb(28,"span",24),h.Bc(29,"User"),h.Pb(),h.Pb(),h.Pb(),h.Qb(30,"div",25),h.Qb(31,"a",26),h.Mb(32,"i",23),h.Bc(33),h.Pb(),h.Qb(34,"a",26),h.Mb(35,"i",27),h.Bc(36),h.Pb(),h.Mb(37,"div",28),h.Qb(38,"a",29),h.bc("click",(function(){return e.takeout()})),h.Mb(39,"i",30),h.Bc(40," Takeout "),h.Pb(),h.Qb(41,"a",31),h.bc("click",(function(){return e.editProfile()})),h.Mb(42,"i",32),h.Bc(43," Profile Settings "),h.Pb(),h.Qb(44,"a",31),h.bc("click",(function(){return e.logout()})),h.Mb(45,"i",33),h.Bc(46," Log out "),h.Pb(),h.Pb(),h.Pb(),h.Qb(47,"li",34),h.Qb(48,"a",35),h.Mb(49,"i",36),h.Qb(50,"p"),h.Qb(51,"span",24),h.Bc(52,"Help"),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb(),h.Pb()),2&t&&(h.xb(9),h.Cc(e.getTitle()),h.xb(1),h.yb("aria-expanded",!e.isCollapsed),h.xb(4),h.jc("ngbCollapse",e.isCollapsed),h.xb(19),h.Dc(" ",e.userProfile.name," "),h.xb(3),h.Dc(" ",e.userProfile.email," "))},directives:[_.g,_.a,_.b,_.e,_.d,_.c],styles:[".progress[_ngcontent-%COMP%]{height:5px;width:300px}.progress-bar-info[_ngcontent-%COMP%]{background-color:#51bcda}.progress-bar-danger[_ngcontent-%COMP%]{background-color:#ef8157}.spinner[_ngcontent-%COMP%]{width:50px;height:10px;text-align:center;display:inline-block}.spinner[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{background-color:#000;height:100%;width:4px;margin:0 1px;display:inline-block;animation:sk-stretchdelay 1.2s ease-in-out infinite}.spinner[_ngcontent-%COMP%]   .rect2[_ngcontent-%COMP%]{animation-delay:-1.1s}.spinner[_ngcontent-%COMP%]   .rect3[_ngcontent-%COMP%]{animation-delay:-1s}.spinner[_ngcontent-%COMP%]   .rect4[_ngcontent-%COMP%]{animation-delay:-.9s}.spinner[_ngcontent-%COMP%]   .rect5[_ngcontent-%COMP%]{animation-delay:-.8s}"]}),S),F=o("jQpT"),G=c.e.forChild([{path:"",component:(R=function(){function t(){e(this,t)}return r(t,[{key:"ngOnInit",value:function(){}}]),t}(),R.\u0275fac=function(t){return new(t||R)},R.\u0275cmp=h.Fb({type:R,selectors:[["app-myapp"]],decls:8,vars:0,consts:[[1,"wrapper"],["data-color","white","data-active-color","danger",1,"sidebar"],[1,"main-panel"],[1,"content"]],template:function(t,e){1&t&&(h.Qb(0,"div",0),h.Qb(1,"div",1),h.Mb(2,"app-sidebar-cmp"),h.Pb(),h.Qb(3,"div",2),h.Mb(4,"app-navbar-cmp"),h.Qb(5,"div",3),h.Mb(6,"router-outlet"),h.Pb(),h.Mb(7,"app-footer-cmp"),h.Pb(),h.Pb())},directives:[D,N,c.f,F.a],styles:[""]}),R),canActivate:[T.a],children:[{path:"",component:Q}]}]),V=[{name:"example",src:"https://someservice.com"}],q=((U=function(){function t(){var n=this;e(this,t),this.scripts={},V.forEach((function(t){n.scripts[t.name]={loaded:!1,src:t.src}}))}return r(t,[{key:"load",value:function(){for(var t=this,e=[],n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return r.forEach((function(n){return e.push(t.loadScript(n))})),Promise.all(e)}},{key:"loadScript",value:function(t){var e=this;return new Promise((function(n,r){if(e.scripts[t].loaded)n({script:t,loaded:!0,status:"Already Loaded"});else{var i=document.createElement("script");i.type="text/javascript",i.src=e.scripts[t].src,i.onload=function(){e.scripts[t].loaded=!0,console.log(t+" Loaded."),n({script:t,loaded:!0,status:"Loaded"})},i.onerror=function(e){return n({script:t,loaded:!1,status:"Loaded"})},document.getElementsByTagName("head")[0].appendChild(i)}}))}}]),t}()).\u0275fac=function(t){return new(t||U)},U.\u0275prov=h.Hb({token:U,factory:U.\u0275fac,providedIn:"root"}),U),z=((C=r((function t(){e(this,t)}))).\u0275mod=h.Jb({type:C}),C.\u0275inj=h.Ib({factory:function(t){return new(t||C)},providers:[w,q,{provide:f,useFactory:v}],imports:[[a.b,s.a,_.f,s.e,G]]}),C)}}])}();