/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","7f0eab2e6e441a8b0edd4bc6e627bddb"],["browserconfig.xml","67c3113b1574fecc6015d56d774e1d38"],["categories/index.html","bcfa840458e775a26272cbe4ec06bbb8"],["categories/index.xml","fe701d7c15c08ebd2978ac380f28b337"],["css/fonts/miriamlibre-bold.woff","96496f6f06535d25b3bcba876917ca35"],["css/fonts/miriamlibre-bold.woff2","668defa44d9a74dd709ce0c826a5eb11"],["css/images/arrow_effect.svg","1434d178461f70c16b77acb4bdbc51e3"],["css/images/icon-tick.svg","35d4d4728ea80d254508b2bca4109d70"],["css/images/stripe.svg","fa3f32a026b6a1bb04ee98d963432e15"],["css/prism.css","004029c8c70ed2bbaa5d9debcf14f8c7"],["css/styles.css","fa4d0c82a6e480aecc189bf5d87fa267"],["images/android-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/android-icon-192x192.png","4c07782e52e0ab714074e6d3d69dc3ec"],["images/android-icon-36x36.png","3b2cd8c925a66bf84c89b68bb30e5f62"],["images/android-icon-48x48.png","45dc386eea1d8a46216a8b6de9b156c6"],["images/android-icon-512x512.png","42d6b28cc7eb41810a5392c81368340a"],["images/android-icon-72x72.png","b04c64637efed2b04fa900ddfcbfe75d"],["images/android-icon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/apple-icon-precomposed.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-icon.png","478755b1c3e0d2c8aea975033cff9ac8"],["images/apple-touch-icon-114x114.png","95804b2192b0cea406b54cb31345c47d"],["images/apple-touch-icon-120x120.png","b5da0625c9e876bdf9768875f7dd9cca"],["images/apple-touch-icon-144x144.png","976151c9ecd72311dc6024917292209d"],["images/apple-touch-icon-152x152.png","8bd6a2e592c1c8463b5205ba8436227e"],["images/apple-touch-icon-180x180.png","56a93f4271dea903196794095e9f9ccc"],["images/apple-touch-icon-57x57.png","977183ab3bfb98da8d79e025f1cb4946"],["images/apple-touch-icon-60x60.png","55e9e05103a9b472a52f4c572a73b2b2"],["images/apple-touch-icon-72x72.png","1ef87a2887baab846f2501beb27445ee"],["images/apple-touch-icon-76x76.png","769826cd7526df4db7f4ba1a820158bd"],["images/bad_design_system.png","9c0e87a34e7d842b0e2831dc947249aa"],["images/browser-chrome-android.svg","3100b2a9c5f0e34982c717fc2aa46d73"],["images/browser-chrome.svg","fa39b4be6727525330e928f582fbe80a"],["images/browser-edge.svg","9e8265ab8f6a701587a4271dd3aa6a73"],["images/browser-firefox-android.svg","452df7b9e83c70a07e8e03b4e8dab9c4"],["images/browser-firefox.svg","d3093eda664be3d0cc6d791e1386420f"],["images/browser-ie.svg","13e192cf2b3fe17e7049a49b7d085caa"],["images/browser-opera.svg","95d65630c9f7deef6a3098af8f5baf9f"],["images/browser-safari-ios.svg","f729e629ec998ec40d313495d7257741"],["images/browser-safari.svg","523ee9491f5a937b8975f4d23aa77f62"],["images/dehsi2021.png","26afc16f9bc17cfe7b820e7bebacc960"],["images/favicon-16x16.png","7a99c20d6c00babddd26d03607b8721d"],["images/favicon-32x32.png","129881474a1bf130027bff7a1e89febd"],["images/favicon-96x96.png","bd9c126a4d6baf7ce442122ce0e89e11"],["images/favicon.ico","81c46feedbfcc6c6dc9495e4fd5adfad"],["images/icon-info.svg","53a6c555ce41f818556c71ab0dfc533b"],["images/icon-tag.svg","f067bbbc072941b2a0335679300bfc6c"],["images/icon-warning.svg","2a4322abbee9aed694fadb50e98a1f61"],["images/logo.svg","2170d24d27ddfcd9c3b2e3e70c7f6c8b"],["images/ms-icon-144x144.png","43e1f47f182b13d0dee15f510213e928"],["images/ms-icon-150x150.png","e73370837ab9060772a18d62aaacd0f0"],["images/ms-icon-310x310.png","8a7143516b929702e3309bb537a99c5c"],["images/ms-icon-70x70.png","d7c6e7368733d53b5f979546d5aa4fe9"],["images/open_in_desktop.png","e899d6679b011aa7b0e783683d90d99b"],["images/samsung_homescreen.jpg","4462178424f5ce79b5757748ba5f1ec4"],["images/serve_from_docs.png","15ae9eac3737a21593ebe00a9312bf9e"],["index.html","dfac65fece77dca6aaa7af97a9452964"],["index.xml","be54c1671b95e36d3f4f07b4f571ccad"],["js/dom-scripts.js","d1226c17a56c156113ee538031a0b6bf"],["js/prism.js","0c1fb8d3a69ee7c91dbf0f361ded7763"],["js/service-worker-registration.js","d60f01dc1393cbaaf4f7435339074d5e"],["manifest.json","381e6af4fc2816f9a137f1ef30c10ebd"],["patterns/background/code-blocks/index.html","b686ea36c4de18df6c8bc124be2d7af6"],["patterns/background/color-palettes/index.html","a5c84001958b453e6dfdd10cc6cf6c14"],["patterns/background/command-line/index.html","14b4fdb28cd1e03b80943bccc3b83f4e"],["patterns/background/demo-embedding/index.html","3ea587669e30f7bf88fb6958998bdcd3"],["patterns/background/file-trees/index.html","921f4128a44628922773b79b9a5b7b72"],["patterns/background/index.html","b756fd7d906374621137a1fa566c9deb"],["patterns/background/index.xml","e04d045736cb7d520e5f2eea912f4d7d"],["patterns/background/tested/index.html","1dcc414b5d701fe91e6d8a4c6f84cec0"],["patterns/background/writing-inline-demos/index.html","4c3a4f3c70d6b39118615f00b58e47ad"],["patterns/coding/code-blocks/index.html","b686ea36c4de18df6c8bc124be2d7af6"],["patterns/coding/color-palettes/index.html","a5c84001958b453e6dfdd10cc6cf6c14"],["patterns/coding/command-line/index.html","14b4fdb28cd1e03b80943bccc3b83f4e"],["patterns/coding/demo-embedding/index.html","3ea587669e30f7bf88fb6958998bdcd3"],["patterns/coding/file-trees/index.html","921f4128a44628922773b79b9a5b7b72"],["patterns/coding/index.html","f5f83cde2c9f98a9d00bb41cef903e5d"],["patterns/coding/index.xml","bc0c02d23bc548b61c622b3c683ce9b7"],["patterns/coding/tested/index.html","1dcc414b5d701fe91e6d8a4c6f84cec0"],["patterns/coding/writing-inline-demos/index.html","4c3a4f3c70d6b39118615f00b58e47ad"],["patterns/day1/code-blocks/index.html","b686ea36c4de18df6c8bc124be2d7af6"],["patterns/day1/color-palettes/index.html","a5c84001958b453e6dfdd10cc6cf6c14"],["patterns/day1/command-line/index.html","14b4fdb28cd1e03b80943bccc3b83f4e"],["patterns/day1/demo-embedding/index.html","3ea587669e30f7bf88fb6958998bdcd3"],["patterns/day1/file-trees/index.html","921f4128a44628922773b79b9a5b7b72"],["patterns/day1/index.html","39805766068d525573835db089b93ec1"],["patterns/day1/index.xml","4940de6d57019119beef0b057e16be5e"],["patterns/day1/tested/index.html","1dcc414b5d701fe91e6d8a4c6f84cec0"],["patterns/day1/writing-inline-demos/index.html","4c3a4f3c70d6b39118615f00b58e47ad"],["patterns/day2/code-blocks/index.html","b686ea36c4de18df6c8bc124be2d7af6"],["patterns/day2/color-palettes/index.html","a5c84001958b453e6dfdd10cc6cf6c14"],["patterns/day2/command-line/index.html","14b4fdb28cd1e03b80943bccc3b83f4e"],["patterns/day2/demo-embedding/index.html","3ea587669e30f7bf88fb6958998bdcd3"],["patterns/day2/file-trees/index.html","921f4128a44628922773b79b9a5b7b72"],["patterns/day2/index.html","0eb4c9205bfcbec35f500a252f2c7bf3"],["patterns/day2/index.xml","47bfd6779dbbb9ad3a2d98979296e401"],["patterns/day2/tested/index.html","1dcc414b5d701fe91e6d8a4c6f84cec0"],["patterns/day2/writing-inline-demos/index.html","4c3a4f3c70d6b39118615f00b58e47ad"],["patterns/index.html","2e6f5db6bff29f180b0016dba04e7143"],["patterns/index.xml","da8315fba0dec307841b03038aca294d"],["patterns/installation/index.html","7ff9f0bc4b513f348459bb78950ca21f"],["patterns/installation2/index.html","ba2666ef343c8ad3f274e953228ff7a4"],["patterns/media/including-images/index.html","134f15e83b629c73fb783e61d6f809fe"],["patterns/media/including-videos/index.html","fbea4f8ef48b826491b155f7f4dac554"],["patterns/media/index.html","e90a1cf973e00604bc059c5b30247538"],["patterns/media/index.xml","00e662d01d34a3194acb2c03fd725050"],["patterns/printing/index.html","fb703e4efeaea21696e4996bda647fc1"],["patterns/serving/index.html","594cd7fdb70bdd9b64c18d6b6f86a916"],["patterns/setup/index.html","f9ba6609007d2398b3bdebb4cba06bfc"],["patterns/updating/index.html","8dc87c4e6471b95e757e073fa97f491d"],["patterns/writing/expandable-sections/index.html","6fb494c90ae30bcd76abc193d4173859"],["patterns/writing/index.html","860b052fe043138668a6827bf3f2059f"],["patterns/writing/index.xml","d9dae9870345d36f483a037efdf253e3"],["patterns/writing/markdown-and-metadata/index.html","e3c7c38eb1de661de993084f36cc187e"],["patterns/writing/notes-and-warnings/index.html","e9ef75a561829a20c871790c9693778d"],["patterns/writing/project-structure/index.html","dffb51fb79a223095e4805c5cb783ea1"],["patterns/writing/references/index.html","687e487382f01378184b3d5be52118bf"],["patterns/writing/snippets/index.html","3f556af49c7cc6abbb8dd41dc1151e0c"],["patterns/writing/tables-of-contents/index.html","79badb16eb9f9430d22232b423727a25"],["print-version/index.html","423832ce8e80a5a6bce06c1c3ff645b8"],["sitemap.xml","48eaedd2b19a02ecec2d95d40f81deab"],["tags/index.html","146c3cfe71eb1d3a5e3b02e00ed7cf86"],["tags/index.xml","f3f2485e3b032899ae86b26bcf01a800"],["tags/markdown/index.html","19d78106ef250ce0b766e9ab9f8e2c63"],["tags/markdown/index.xml","13724b013281d519ef942bc5a578cf93"],["tags/metadata/index.html","f9d28a13717af62f3cec73385eabb7dd"],["tags/metadata/index.xml","44ce1ab5daf6fe7af0ca88f0dd58b4c8"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







