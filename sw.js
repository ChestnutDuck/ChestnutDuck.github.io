/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","54fc12c8531cc4dd6deaffaa6f67dcb9"],["/about/index.html","cb91545057ddd1ac676e196b777d9094"],["/anzhiyu/random.js","a46d4372da8af47a7a019373f56945c8"],["/archives/2026/08/index.html","f73df4d07db1c34da8dd443e0882c820"],["/archives/2026/index.html","5d3f2b7b2e3f7a94a11ba99404d09f1b"],["/archives/index.html","05d91a162323e9dd2efe3d33e6c39d11"],["/baidu_verify_codeva-vcKVtmLEJf.html","5922e64f1e1941bf3f0ceef43a5cfc84"],["/categories/index.html","0e5544f09f973cb468d08e1463611aeb"],["/css/custom.css","0967f567087d4ffb8fd4ca7d11fe3169"],["/css/github-calendar.css","448810de6a0345bb074ed2bdd7cb4df8"],["/css/github-test.css","d10f54ade245a4998e8ffecb73e30046"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","e28149a9a23d7033b9836f84f3447e28"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/10.png","5146c986872b7036a8d340d2709ce708"],["/images/11.png","c5f1a6ad621adabfe136a0066ef6ed84"],["/images/12.png","5d02daa99a366fc70d939ffcfacfce5c"],["/images/13.png","da7a8a1e68ec33af5374521d27f92957"],["/images/14.png","343ba19fcf7ccd9e3b53323e727f9fe9"],["/images/15.png","50ac8815e180d6ee6cccbaeefff0bbe6"],["/images/16.png","23ca518a493a5ead1a80c2712d9f787e"],["/images/17.png","c1f65c6f465f38e4b6bdc7b921964832"],["/images/18.png","d62dc6adebae87c1e8ef429df0e493f6"],["/images/19.png","b0b34c98c3d34a7a67a750db413c8ca5"],["/images/8.png","05637fdf90f941d16e78656e724614e7"],["/images/9.png","835ec15553eb834b932f0834b5f32906"],["/images/study/image-20260825215231193.png","9f0f55007107d84ed86600d14ba47f15"],["/images/study/image-20260825215438963.png","77c8414a1b8fa708bbc9f56908ff46fe"],["/images/study/image-20260825215708114.png","77c8414a1b8fa708bbc9f56908ff46fe"],["/images/study/image-20260825215721209.png","77c8414a1b8fa708bbc9f56908ff46fe"],["/images/study/image-20260825215724797.png","77c8414a1b8fa708bbc9f56908ff46fe"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/MySQL.png","08e9a2902bc3a161aa5cfd519bbfa747"],["/img/Redis.png","364a7fc3b29ec533b2028e255a28d02e"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","afabe5e1237b9f87c79fb67347ce0bb6"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/emoji_line (66).png","d6bcd1714f0cb71814e4725b8c0cdbca"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/prefixdoc.png","bd60b46d850a1c2c61b41958192b7131"],["/img/rabbitmq.png","d8c1359edd13a29615fe44247313faaa"],["/img/siteicon/128.png","4fbec11a260542ad4e1c7788c45f8a2c"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/256.png","58ebd05cf37a456b201386a2fb31c4fc"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/48.png","c009ddbce7b82cd21c95024554124df9"],["/img/siteicon/64.png","2e14d420713f9cb4f54e0ac9968748ed"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/github.png","e45ec88bd50ddedc1d38c69e260950cb"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/img/spring.png","a4e115f7ee42e268f8d5db97efbc8d34"],["/img/touxiang.jpg","28a545a18c4ffbe97382d4404774f52f"],["/img/wechat.jpg","10eecfb030e3a4adeea9745480634106"],["/img/地图1.png","bdb3f7fb05d0e0e44f20aab4e658f0e5"],["/img/地图2.png","e0164a6c99da97126bc4e4a6bad7fbd4"],["/img/微信.jpg","ac217a101af9c37dfb917c3130ead32f"],["/img/音乐背景.png","64b03f6f7e787734ce3d196948076692"],["/index.html","2c69745ffd830574b5fb14479b6cc452"],["/js/anzhiyu/ai_abstract.js","e4baa11685a6c14d4130b5b74d9222dc"],["/js/anzhiyu/comment_barrage.js","c5ca32eab1b5db6744df49cffaefa3a6"],["/js/anzhiyu/people.js","b946db8294a26b0b91e93dca5abda935"],["/js/anzhiyu/random_friends_post.js","30e5b8070503360d29e26e1b6db29efd"],["/js/anzhiyu/right_click_menu.js","53aaa1f5e7f59ab1acdf7621f98a48c0"],["/js/github-calendar.js","b8a74d450abc0b6ce428b61d78be3599"],["/js/main.js","0a25defe2cf66b045ed8876fc4707172"],["/js/search/algolia.js","3ce06f0458bccd45a20ae797cccb6561"],["/js/search/local-search.js","0f5dddc0c88389610bae38a044ee7a8a"],["/js/tw_cn.js","80822f672b15a8105128e305e9acbed4"],["/js/utils.js","cfa47a86f9ae79d6d2ba165d33fdd9d0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","693fda0ccd2c886042353ad3549d1c36"],["/posts/56c3f59a.html","3182be6793f27ed5c1641bc2061ee81f"],["/posts/9a4b3cda.html","9dc99e0ff36f2d37c2eb2d8bb9594efc"],["/posts/bdc86207.html","c269a724337fcfda96315572fa1ddc76"],["/posts/e460eaa8.html","9c425a28f09d547f2f8f6233be69bf06"],["/sw-register.js","3a3576e41b19c651b723e6522e7dabd5"],["/tags/index.html","acc0f377bbe87cc6acde274544d59386"],["/tags/暖通/index.html","bb87685275d9e86bf1f8a1215a61abdd"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
