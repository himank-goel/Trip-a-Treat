"use strict";var precacheConfig=[["/Trip-a-Treat/index.html","6f52898683617926e3a68e85377481d6"],["/Trip-a-Treat/static/css/main.4af5e636.css","2cd448a3270eec5d697236d25360cfd3"],["/Trip-a-Treat/static/js/main.f88e3bf2.js","aff52adb2b192b109a386ce3dd764803"],["/Trip-a-Treat/static/media/avenir-book.253b43e7.woff2","253b43e7fcaf44c9db0e2417e99e5781"],["/Trip-a-Treat/static/media/avenir-book.dba08089.woff","dba0808970c4aa2f6c7377975efeaef3"],["/Trip-a-Treat/static/media/caviardreams-webfont.084787da.woff","084787dab9d37416a999a59374edaa93"],["/Trip-a-Treat/static/media/caviardreams-webfont.7f555d4e.woff2","7f555d4e0252a6f00810c5f55fc80594"],["/Trip-a-Treat/static/media/heading-pro-smallcase-thin-trial-webfont.71420f04.woff","71420f04d6795eb8f4f64beca25414dc"],["/Trip-a-Treat/static/media/heading-pro-smallcase-thin-trial-webfont.757c14e8.woff2","757c14e8aa2f5843eb8cbd083adb3080"],["/Trip-a-Treat/static/media/logo.71c56969.svg","71c56969bccbdfc4856a41bb9cf1a3c5"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/Trip-a-Treat/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});