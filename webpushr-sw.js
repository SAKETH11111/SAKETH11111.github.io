/* LFTSTART */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/url.ts":
/*!**************************!*\
  !*** ./src/utils/url.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UrlUtils_build": () => (/* binding */ UrlUtils_build),
/* harmony export */   "UrlUtils_buildSafe": () => (/* binding */ UrlUtils_buildSafe)
/* harmony export */ });
/* harmony import */ var _urlPolyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./urlPolyfill */ "./src/utils/urlPolyfill.ts");


const URLConstructor = typeof URL !== "undefined" ? URL : _urlPolyfill__WEBPACK_IMPORTED_MODULE_0__.URLPolyfill;
function UrlUtils_build(url, base) {
  if (base != null) {
    base = base.toString().replace("liftosaur://", "https://");
  }
  try {
    return new URLConstructor(url, base);
  } catch (e) {
    let json;
    try {
      json = JSON.stringify(url);
    } catch (e2) {
    }
    throw new TypeError(`Failed to construct URL: ${json || url}`);
  }
}
function UrlUtils_buildSafe(url, base) {
  try {
    return { success: true, data: UrlUtils_build(url, base) };
  } catch (e) {
    return { success: false, error: e instanceof Error ? e.message : String(e) };
  }
}


/***/ }),

/***/ "./src/utils/urlPolyfill.ts":
/*!**********************************!*\
  !*** ./src/utils/urlPolyfill.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URLPolyfill": () => (/* binding */ URLPolyfill),
/* harmony export */   "URLSearchParamsPolyfill": () => (/* binding */ URLSearchParamsPolyfill)
/* harmony export */ });

function parseURL(url) {
  const match = url.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/);
  if (!match) {
    return null;
  }
  const authority = match[4] || "";
  let userInfo = "";
  let host = authority;
  const atIndex = authority.indexOf("@");
  if (atIndex !== -1) {
    userInfo = authority.substring(0, atIndex);
    host = authority.substring(atIndex + 1);
  }
  let username = "";
  let password = "";
  if (userInfo) {
    const colonIndex = userInfo.indexOf(":");
    if (colonIndex !== -1) {
      username = userInfo.substring(0, colonIndex);
      password = userInfo.substring(colonIndex + 1);
    } else {
      username = userInfo;
    }
  }
  let hostname = host;
  let port = "";
  const portMatch = host.match(/^(.+):(\d+)$/);
  if (portMatch) {
    hostname = portMatch[1];
    port = portMatch[2];
  }
  return {
    protocol: match[2] ? match[2] + ":" : "",
    hostname,
    port,
    host,
    pathname: match[5] || "",
    search: match[6] || "",
    hash: match[8] || "",
    username,
    password
  };
}
class URLSearchParamsPolyfill {
  constructor(init) {
    this.params = /* @__PURE__ */ new Map();
    if (typeof init === "string") {
      this._parseFromString(init);
    } else if (init instanceof URLSearchParamsPolyfill) {
      init.forEach((value, key) => this.append(key, value));
    } else if (Array.isArray(init)) {
      for (const [key, value] of init) {
        this.append(key, value);
      }
    } else if (init && typeof init === "object") {
      for (const key of Object.keys(init)) {
        this.append(key, init[key]);
      }
    }
  }
  _parseFromString(query) {
    if (query.startsWith("?")) {
      query = query.slice(1);
    }
    if (!query) {
      return;
    }
    for (const pair of query.split("&")) {
      const eqIndex = pair.indexOf("=");
      if (eqIndex === -1) {
        this.append(decodeURIComponent(pair), "");
      } else {
        const key = decodeURIComponent(pair.substring(0, eqIndex));
        const value = decodeURIComponent(pair.substring(eqIndex + 1));
        this.append(key, value);
      }
    }
  }
  append(name, value) {
    const values = this.params.get(name) || [];
    values.push(value);
    this.params.set(name, values);
  }
  delete(name, value) {
    if (value === void 0) {
      this.params.delete(name);
    } else {
      const values = this.params.get(name);
      if (values) {
        const filtered = values.filter((v) => v !== value);
        if (filtered.length === 0) {
          this.params.delete(name);
        } else {
          this.params.set(name, filtered);
        }
      }
    }
  }
  get(name) {
    const values = this.params.get(name);
    return values ? values[0] : null;
  }
  getAll(name) {
    return this.params.get(name) || [];
  }
  has(name, value) {
    if (!this.params.has(name)) {
      return false;
    }
    if (value === void 0) {
      return true;
    }
    const values = this.params.get(name);
    return values.includes(value);
  }
  set(name, value) {
    this.params.set(name, [value]);
  }
  sort() {
    const sorted = new Map([...this.params.entries()].sort((a, b) => a[0].localeCompare(b[0])));
    this.params = sorted;
  }
  toString() {
    const parts = [];
    this.params.forEach((values, key) => {
      for (const value of values) {
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
      }
    });
    return parts.join("&");
  }
  forEach(callback, thisArg) {
    this.params.forEach((values, key) => {
      for (const value of values) {
        callback.call(thisArg, value, key, this);
      }
    });
  }
  entries() {
    const result = [];
    this.params.forEach((values, key) => {
      for (const value of values) {
        result.push([key, value]);
      }
    });
    return result[Symbol.iterator]();
  }
  keys() {
    const result = [];
    this.params.forEach((values, key) => {
      for (let i = 0; i < values.length; i++) {
        result.push(key);
      }
    });
    return result[Symbol.iterator]();
  }
  values() {
    const result = [];
    this.params.forEach((values) => {
      for (const value of values) {
        result.push(value);
      }
    });
    return result[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    let count = 0;
    this.params.forEach((values) => {
      count += values.length;
    });
    return count;
  }
}
class URLPolyfill {
  constructor(url, base) {
    this._protocol = "";
    this._hostname = "";
    this._port = "";
    this._pathname = "";
    this._search = "";
    this._hash = "";
    this._username = "";
    this._password = "";
    url = String(url);
    if (base !== void 0) {
      base = String(base);
      const baseP = parseURL(base);
      if (!baseP || !baseP.protocol) {
        throw new TypeError("Invalid base URL");
      }
      if (/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) {
        const p = parseURL(url);
        if (p) {
          this._protocol = p.protocol;
          this._hostname = p.hostname;
          this._port = p.port;
          this._pathname = p.pathname;
          this._search = p.search;
          this._hash = p.hash;
          this._username = p.username;
          this._password = p.password;
        }
      } else if (url.indexOf("//") === 0) {
        const p = parseURL(baseP.protocol + url);
        if (p) {
          this._protocol = p.protocol;
          this._hostname = p.hostname;
          this._port = p.port;
          this._pathname = p.pathname;
          this._search = p.search;
          this._hash = p.hash;
          this._username = p.username;
          this._password = p.password;
        }
      } else if (url.indexOf("/") === 0) {
        this._protocol = baseP.protocol;
        this._hostname = baseP.hostname;
        this._port = baseP.port;
        this._username = baseP.username;
        this._password = baseP.password;
        let urlPart = url;
        const hashIndex = urlPart.indexOf("#");
        if (hashIndex !== -1) {
          this._hash = urlPart.substring(hashIndex);
          urlPart = urlPart.substring(0, hashIndex);
        }
        const searchIndex = urlPart.indexOf("?");
        if (searchIndex !== -1) {
          this._search = urlPart.substring(searchIndex);
          this._pathname = urlPart.substring(0, searchIndex);
        } else {
          this._pathname = urlPart;
        }
      } else {
        this._protocol = baseP.protocol;
        this._hostname = baseP.hostname;
        this._port = baseP.port;
        this._username = baseP.username;
        this._password = baseP.password;
        const basePath = baseP.pathname.substring(0, baseP.pathname.lastIndexOf("/") + 1);
        let urlPart = url;
        const hashIndex = urlPart.indexOf("#");
        if (hashIndex !== -1) {
          this._hash = urlPart.substring(hashIndex);
          urlPart = urlPart.substring(0, hashIndex);
        }
        const searchIndex = urlPart.indexOf("?");
        if (searchIndex !== -1) {
          this._search = urlPart.substring(searchIndex);
          this._pathname = basePath + urlPart.substring(0, searchIndex);
        } else {
          this._pathname = basePath + urlPart;
        }
      }
    } else {
      const p = parseURL(url);
      if (!p || !p.protocol) {
        throw new TypeError("Invalid URL");
      }
      this._protocol = p.protocol;
      this._hostname = p.hostname;
      this._port = p.port;
      this._pathname = p.pathname;
      this._search = p.search;
      this._hash = p.hash;
      this._username = p.username;
      this._password = p.password;
    }
    this._searchParams = new URLSearchParamsPolyfill(this._search);
  }
  get protocol() {
    return this._protocol;
  }
  set protocol(value) {
    this._protocol = value.endsWith(":") ? value : value + ":";
  }
  get hostname() {
    return this._hostname;
  }
  set hostname(value) {
    this._hostname = value;
  }
  get port() {
    return this._port;
  }
  set port(value) {
    this._port = value;
  }
  get host() {
    return this._port ? this._hostname + ":" + this._port : this._hostname;
  }
  set host(value) {
    const portMatch = value.match(/^(.+):(\d+)$/);
    if (portMatch) {
      this._hostname = portMatch[1];
      this._port = portMatch[2];
    } else {
      this._hostname = value;
      this._port = "";
    }
  }
  get pathname() {
    return this._pathname;
  }
  set pathname(value) {
    this._pathname = value.startsWith("/") ? value : "/" + value;
  }
  get search() {
    return this._search;
  }
  set search(value) {
    this._search = value.startsWith("?") ? value : value ? "?" + value : "";
    this._searchParams = new URLSearchParamsPolyfill(this._search);
  }
  get searchParams() {
    return this._searchParams;
  }
  get hash() {
    return this._hash;
  }
  set hash(value) {
    this._hash = value.startsWith("#") ? value : value ? "#" + value : "";
  }
  get username() {
    return this._username;
  }
  set username(value) {
    this._username = value;
  }
  get password() {
    return this._password;
  }
  set password(value) {
    this._password = value;
  }
  get origin() {
    return this._protocol + "//" + this.host;
  }
  get href() {
    let userinfo = "";
    if (this._username) {
      userinfo = this._username;
      if (this._password) {
        userinfo += ":" + this._password;
      }
      userinfo += "@";
    }
    return this._protocol + "//" + userinfo + this.host + this._pathname + this._search + this._hash;
  }
  set href(value) {
    const p = parseURL(value);
    if (!p || !p.protocol) {
      throw new TypeError("Invalid URL");
    }
    this._protocol = p.protocol;
    this._hostname = p.hostname;
    this._port = p.port;
    this._pathname = p.pathname;
    this._search = p.search;
    this._hash = p.hash;
    this._username = p.username;
    this._password = p.password;
    this._searchParams = new URLSearchParamsPolyfill(this._search);
  }
  toString() {
    return this.href;
  }
  toJSON() {
    return this.href;
  }
  static canParse(url, base) {
    try {
      new URLPolyfill(url, base);
      return true;
    } catch (e) {
      return false;
    }
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/webpushr-sw.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/url */ "./src/utils/url.ts");

var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

const cacheName = `liftosaur-sw-${"18a7dd1"}`;
const filesToCache = [
  `/main.css?version=${"18a7dd1"}`,
  `/main.js?version=${"18a7dd1"}`,
  `/vendors.css?vendor=${"18a7dd1"}`,
  `/vendors.js?vendor=${"18a7dd1"}`,
  `/images/back-muscles.svg`,
  `/images/front-muscles.svg`,
  `/images/svgs/muscles-combined.svg`,
  `/images/svgs/musclegroups-combined.svg`,
  /\/fonts\/.*/,
  /\/externalimages\/exercises\//,
  "/",
  "/index.html",
  "/app",
  "/app/index.html",
  "/icons/icon192.png",
  "/icons/icon512.png",
  "/notification.m4r"
];
function cacheRequest(request, response) {
  return caches.open(cacheName).then((cache) => {
    console.log("[Service Worker] Caching new resource: " + request.url);
    cache.put(request, response.clone());
    return response;
  });
}
function initialize(service) {
  service.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(cacheName).then((cache) => {
        return cache.addAll(filesToCache.filter((f) => typeof f === "string"));
      })
    );
  });
  service.addEventListener("fetch", (e) => {
    const url = (0,_utils_url__WEBPACK_IMPORTED_MODULE_0__.UrlUtils_build)(e.request.url);
    if (e.request.method === "GET" && (url.pathname === "/" || url.pathname === "index.html" || url.pathname === "/app")) {
      console.log("[Service Worker] Fetching " + e.request.url);
      e.respondWith(
        caches.match(e.request).then((r) => {
          return fetch(e.request).then((response) => cacheRequest(e.request, response)).catch((err) => {
            if (r != null) {
              console.log("[Service Worker] Can't fetch, so using cache for: " + e.request.url);
              console.error(err);
              return r;
            } else {
              throw e;
            }
          });
        })
      );
    } else {
      console.log("[Service Worker] Checking the resource in cache: " + e.request.url);
      e.respondWith(
        caches.match(e.request).then((r) => {
          if (r) {
            console.log("[Service Worker] Returning from cache: " + e.request.url);
            return r;
          } else {
            console.log("[Service Worker] Missing from cache, fetching resource: " + e.request.url);
            return fetch(e.request).then((response) => {
              if (e.request.method === "GET" && filesToCache.some((f) => {
                if (typeof f === "string") {
                  const u = (0,_utils_url__WEBPACK_IMPORTED_MODULE_0__.UrlUtils_build)(e.request.url);
                  return `${u.pathname}${u.search}` === f;
                } else {
                  const u = (0,_utils_url__WEBPACK_IMPORTED_MODULE_0__.UrlUtils_build)(e.request.url);
                  return f.test(`${u.pathname}${u.search}`);
                }
              })) {
                return cacheRequest(e.request, response);
              } else {
                return response;
              }
            });
          }
        })
      );
    }
  });
  self.addEventListener("activate", (event) => __async(null, null, function* () {
    console.log("Activate Service Worker", event);
    const keys = (yield caches.keys()).filter((k) => k !== cacheName);
    console.log(keys);
    for (const key of keys) {
      yield caches.delete(key);
    }
  }));
}
initialize(self);

})();

/******/ })()
;
/* LFTEND */
//# sourceMappingURL=webpushr-sw.js.map?version=18a7dd1