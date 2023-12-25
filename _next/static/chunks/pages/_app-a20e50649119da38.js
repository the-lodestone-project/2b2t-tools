(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2888],
  {
    1052: function (h) {
      "use strict";
      /*!
       * assign-symbols <https://github.com/jonschlinkert/assign-symbols>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ h.exports = function (h, g) {
        if (null == h)
          throw TypeError("expected first argument to be an object.");
        if (
          void 0 === g ||
          "undefined" == typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return h;
        for (
          var _ = Object.prototype.propertyIsEnumerable,
            b = Object(h),
            y = arguments.length,
            A = 0;
          ++A < y;

        )
          for (
            var N = Object(arguments[A]),
              F = Object.getOwnPropertySymbols(N),
              B = 0;
            B < F.length;
            B++
          ) {
            var H = F[B];
            _.call(N, H) && (b[H] = N[H]);
          }
        return b;
      };
    },
    58363: function (h, g) {
      "use strict";
      g.Z = function (h, g) {
        if (h && g) {
          var _ = Array.isArray(g) ? g : g.split(","),
            b = h.name || "",
            y = (h.type || "").toLowerCase(),
            A = y.replace(/\/.*$/, "");
          return _.some(function (h) {
            var g = h.trim().toLowerCase();
            return "." === g.charAt(0)
              ? b.toLowerCase().endsWith(g)
              : g.endsWith("/*")
                ? A === g.replace(/\/.*$/, "")
                : y === g;
          });
        }
        return !0;
      };
    },
    9669: function (h, g, _) {
      h.exports = _(51609);
    },
    55448: function (h, g, _) {
      "use strict";
      var b = _(64867),
        y = _(36026),
        A = _(4372),
        N = _(15327),
        F = _(94097),
        B = _(84109),
        H = _(67985),
        U = _(85061),
        K = _(45655),
        q = _(65263);
      h.exports = function (h) {
        return new Promise(function (g, _) {
          var Y,
            X = h.data,
            Q = h.headers,
            et = h.responseType;
          function done() {
            h.cancelToken && h.cancelToken.unsubscribe(Y),
              h.signal && h.signal.removeEventListener("abort", Y);
          }
          b.isFormData(X) && delete Q["Content-Type"];
          var en = new XMLHttpRequest();
          if (h.auth) {
            var er = h.auth.username || "",
              ei = h.auth.password
                ? unescape(encodeURIComponent(h.auth.password))
                : "";
            Q.Authorization = "Basic " + btoa(er + ":" + ei);
          }
          var eo = F(h.baseURL, h.url);
          function onloadend() {
            if (en) {
              var b =
                "getAllResponseHeaders" in en
                  ? B(en.getAllResponseHeaders())
                  : null;
              y(
                function (h) {
                  g(h), done();
                },
                function (h) {
                  _(h), done();
                },
                {
                  data:
                    et && "text" !== et && "json" !== et
                      ? en.response
                      : en.responseText,
                  status: en.status,
                  statusText: en.statusText,
                  headers: b,
                  config: h,
                  request: en,
                },
              ),
                (en = null);
            }
          }
          if (
            (en.open(
              h.method.toUpperCase(),
              N(eo, h.params, h.paramsSerializer),
              !0,
            ),
            (en.timeout = h.timeout),
            "onloadend" in en
              ? (en.onloadend = onloadend)
              : (en.onreadystatechange = function () {
                  en &&
                    4 === en.readyState &&
                    (0 !== en.status ||
                      (en.responseURL &&
                        0 === en.responseURL.indexOf("file:"))) &&
                    setTimeout(onloadend);
                }),
            (en.onabort = function () {
              en &&
                (_(U("Request aborted", h, "ECONNABORTED", en)), (en = null));
            }),
            (en.onerror = function () {
              _(U("Network Error", h, null, en)), (en = null);
            }),
            (en.ontimeout = function () {
              var g = h.timeout
                  ? "timeout of " + h.timeout + "ms exceeded"
                  : "timeout exceeded",
                b = h.transitional || K.transitional;
              h.timeoutErrorMessage && (g = h.timeoutErrorMessage),
                _(
                  U(
                    g,
                    h,
                    b.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED",
                    en,
                  ),
                ),
                (en = null);
            }),
            b.isStandardBrowserEnv())
          ) {
            var ea =
              (h.withCredentials || H(eo)) && h.xsrfCookieName
                ? A.read(h.xsrfCookieName)
                : void 0;
            ea && (Q[h.xsrfHeaderName] = ea);
          }
          "setRequestHeader" in en &&
            b.forEach(Q, function (h, g) {
              void 0 === X && "content-type" === g.toLowerCase()
                ? delete Q[g]
                : en.setRequestHeader(g, h);
            }),
            b.isUndefined(h.withCredentials) ||
              (en.withCredentials = !!h.withCredentials),
            et && "json" !== et && (en.responseType = h.responseType),
            "function" == typeof h.onDownloadProgress &&
              en.addEventListener("progress", h.onDownloadProgress),
            "function" == typeof h.onUploadProgress &&
              en.upload &&
              en.upload.addEventListener("progress", h.onUploadProgress),
            (h.cancelToken || h.signal) &&
              ((Y = function (h) {
                en &&
                  (_(!h || (h && h.type) ? new q("canceled") : h),
                  en.abort(),
                  (en = null));
              }),
              h.cancelToken && h.cancelToken.subscribe(Y),
              h.signal &&
                (h.signal.aborted
                  ? Y()
                  : h.signal.addEventListener("abort", Y))),
            X || (X = null),
            en.send(X);
        });
      };
    },
    51609: function (h, g, _) {
      "use strict";
      var b = _(64867),
        y = _(91849),
        A = _(30321),
        N = _(47185),
        F = (function createInstance(h) {
          var g = new A(h),
            _ = y(A.prototype.request, g);
          return (
            b.extend(_, A.prototype, g),
            b.extend(_, g),
            (_.create = function (g) {
              return createInstance(N(h, g));
            }),
            _
          );
        })(_(45655));
      (F.Axios = A),
        (F.Cancel = _(65263)),
        (F.CancelToken = _(14972)),
        (F.isCancel = _(26502)),
        (F.VERSION = _(97288).version),
        (F.all = function (h) {
          return Promise.all(h);
        }),
        (F.spread = _(8713)),
        (F.isAxiosError = _(16268)),
        (h.exports = F),
        (h.exports.default = F);
    },
    65263: function (h) {
      "use strict";
      function Cancel(h) {
        this.message = h;
      }
      (Cancel.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (Cancel.prototype.__CANCEL__ = !0),
        (h.exports = Cancel);
    },
    14972: function (h, g, _) {
      "use strict";
      var b = _(65263);
      function CancelToken(h) {
        if ("function" != typeof h)
          throw TypeError("executor must be a function.");
        this.promise = new Promise(function (h) {
          g = h;
        });
        var g,
          _ = this;
        this.promise.then(function (h) {
          if (_._listeners) {
            var g,
              b = _._listeners.length;
            for (g = 0; g < b; g++) _._listeners[g](h);
            _._listeners = null;
          }
        }),
          (this.promise.then = function (h) {
            var g,
              b = new Promise(function (h) {
                _.subscribe(h), (g = h);
              }).then(h);
            return (
              (b.cancel = function () {
                _.unsubscribe(g);
              }),
              b
            );
          }),
          h(function (h) {
            _.reason || ((_.reason = new b(h)), g(_.reason));
          });
      }
      (CancelToken.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason;
      }),
        (CancelToken.prototype.subscribe = function (h) {
          if (this.reason) {
            h(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(h) : (this._listeners = [h]);
        }),
        (CancelToken.prototype.unsubscribe = function (h) {
          if (this._listeners) {
            var g = this._listeners.indexOf(h);
            -1 !== g && this._listeners.splice(g, 1);
          }
        }),
        (CancelToken.source = function () {
          var h;
          return {
            token: new CancelToken(function (g) {
              h = g;
            }),
            cancel: h,
          };
        }),
        (h.exports = CancelToken);
    },
    26502: function (h) {
      "use strict";
      h.exports = function (h) {
        return !!(h && h.__CANCEL__);
      };
    },
    30321: function (h, g, _) {
      "use strict";
      var b = _(64867),
        y = _(15327),
        A = _(80782),
        N = _(13572),
        F = _(47185),
        B = _(54875),
        H = B.validators;
      function Axios(h) {
        (this.defaults = h),
          (this.interceptors = { request: new A(), response: new A() });
      }
      (Axios.prototype.request = function (h) {
        "string" == typeof h
          ? ((h = arguments[1] || {}), (h.url = arguments[0]))
          : (h = h || {}),
          (h = F(this.defaults, h)).method
            ? (h.method = h.method.toLowerCase())
            : this.defaults.method
              ? (h.method = this.defaults.method.toLowerCase())
              : (h.method = "get");
        var g,
          _ = h.transitional;
        void 0 !== _ &&
          B.assertOptions(
            _,
            {
              silentJSONParsing: H.transitional(H.boolean),
              forcedJSONParsing: H.transitional(H.boolean),
              clarifyTimeoutError: H.transitional(H.boolean),
            },
            !1,
          );
        var b = [],
          y = !0;
        this.interceptors.request.forEach(function (g) {
          ("function" != typeof g.runWhen || !1 !== g.runWhen(h)) &&
            ((y = y && g.synchronous), b.unshift(g.fulfilled, g.rejected));
        });
        var A = [];
        if (
          (this.interceptors.response.forEach(function (h) {
            A.push(h.fulfilled, h.rejected);
          }),
          !y)
        ) {
          var U = [N, void 0];
          for (
            Array.prototype.unshift.apply(U, b),
              U = U.concat(A),
              g = Promise.resolve(h);
            U.length;

          )
            g = g.then(U.shift(), U.shift());
          return g;
        }
        for (var K = h; b.length; ) {
          var q = b.shift(),
            Y = b.shift();
          try {
            K = q(K);
          } catch (h) {
            Y(h);
            break;
          }
        }
        try {
          g = N(K);
        } catch (h) {
          return Promise.reject(h);
        }
        for (; A.length; ) g = g.then(A.shift(), A.shift());
        return g;
      }),
        (Axios.prototype.getUri = function (h) {
          return y(
            (h = F(this.defaults, h)).url,
            h.params,
            h.paramsSerializer,
          ).replace(/^\?/, "");
        }),
        b.forEach(["delete", "get", "head", "options"], function (h) {
          Axios.prototype[h] = function (g, _) {
            return this.request(
              F(_ || {}, { method: h, url: g, data: (_ || {}).data }),
            );
          };
        }),
        b.forEach(["post", "put", "patch"], function (h) {
          Axios.prototype[h] = function (g, _, b) {
            return this.request(F(b || {}, { method: h, url: g, data: _ }));
          };
        }),
        (h.exports = Axios);
    },
    80782: function (h, g, _) {
      "use strict";
      var b = _(64867);
      function InterceptorManager() {
        this.handlers = [];
      }
      (InterceptorManager.prototype.use = function (h, g, _) {
        return (
          this.handlers.push({
            fulfilled: h,
            rejected: g,
            synchronous: !!_ && _.synchronous,
            runWhen: _ ? _.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }),
        (InterceptorManager.prototype.eject = function (h) {
          this.handlers[h] && (this.handlers[h] = null);
        }),
        (InterceptorManager.prototype.forEach = function (h) {
          b.forEach(this.handlers, function (g) {
            null !== g && h(g);
          });
        }),
        (h.exports = InterceptorManager);
    },
    94097: function (h, g, _) {
      "use strict";
      var b = _(91793),
        y = _(7303);
      h.exports = function (h, g) {
        return h && !b(g) ? y(h, g) : g;
      };
    },
    85061: function (h, g, _) {
      "use strict";
      var b = _(80481);
      h.exports = function (h, g, _, y, A) {
        return b(Error(h), g, _, y, A);
      };
    },
    13572: function (h, g, _) {
      "use strict";
      var b = _(64867),
        y = _(18527),
        A = _(26502),
        N = _(45655),
        F = _(65263);
      function throwIfCancellationRequested(h) {
        if (
          (h.cancelToken && h.cancelToken.throwIfRequested(),
          h.signal && h.signal.aborted)
        )
          throw new F("canceled");
      }
      h.exports = function (h) {
        return (
          throwIfCancellationRequested(h),
          (h.headers = h.headers || {}),
          (h.data = y.call(h, h.data, h.headers, h.transformRequest)),
          (h.headers = b.merge(
            h.headers.common || {},
            h.headers[h.method] || {},
            h.headers,
          )),
          b.forEach(
            ["delete", "get", "head", "post", "put", "patch", "common"],
            function (g) {
              delete h.headers[g];
            },
          ),
          (h.adapter || N.adapter)(h).then(
            function (g) {
              return (
                throwIfCancellationRequested(h),
                (g.data = y.call(h, g.data, g.headers, h.transformResponse)),
                g
              );
            },
            function (g) {
              return (
                !A(g) &&
                  (throwIfCancellationRequested(h),
                  g &&
                    g.response &&
                    (g.response.data = y.call(
                      h,
                      g.response.data,
                      g.response.headers,
                      h.transformResponse,
                    ))),
                Promise.reject(g)
              );
            },
          )
        );
      };
    },
    80481: function (h) {
      "use strict";
      h.exports = function (h, g, _, b, y) {
        return (
          (h.config = g),
          _ && (h.code = _),
          (h.request = b),
          (h.response = y),
          (h.isAxiosError = !0),
          (h.toJSON = function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          }),
          h
        );
      };
    },
    47185: function (h, g, _) {
      "use strict";
      var b = _(64867);
      h.exports = function (h, g) {
        g = g || {};
        var _ = {};
        function getMergedValue(h, g) {
          return b.isPlainObject(h) && b.isPlainObject(g)
            ? b.merge(h, g)
            : b.isPlainObject(g)
              ? b.merge({}, g)
              : b.isArray(g)
                ? g.slice()
                : g;
        }
        function mergeDeepProperties(_) {
          return b.isUndefined(g[_])
            ? b.isUndefined(h[_])
              ? void 0
              : getMergedValue(void 0, h[_])
            : getMergedValue(h[_], g[_]);
        }
        function valueFromConfig2(h) {
          if (!b.isUndefined(g[h])) return getMergedValue(void 0, g[h]);
        }
        function defaultToConfig2(_) {
          return b.isUndefined(g[_])
            ? b.isUndefined(h[_])
              ? void 0
              : getMergedValue(void 0, h[_])
            : getMergedValue(void 0, g[_]);
        }
        function mergeDirectKeys(_) {
          return _ in g
            ? getMergedValue(h[_], g[_])
            : _ in h
              ? getMergedValue(void 0, h[_])
              : void 0;
        }
        var y = {
          url: valueFromConfig2,
          method: valueFromConfig2,
          data: valueFromConfig2,
          baseURL: defaultToConfig2,
          transformRequest: defaultToConfig2,
          transformResponse: defaultToConfig2,
          paramsSerializer: defaultToConfig2,
          timeout: defaultToConfig2,
          timeoutMessage: defaultToConfig2,
          withCredentials: defaultToConfig2,
          adapter: defaultToConfig2,
          responseType: defaultToConfig2,
          xsrfCookieName: defaultToConfig2,
          xsrfHeaderName: defaultToConfig2,
          onUploadProgress: defaultToConfig2,
          onDownloadProgress: defaultToConfig2,
          decompress: defaultToConfig2,
          maxContentLength: defaultToConfig2,
          maxBodyLength: defaultToConfig2,
          transport: defaultToConfig2,
          httpAgent: defaultToConfig2,
          httpsAgent: defaultToConfig2,
          cancelToken: defaultToConfig2,
          socketPath: defaultToConfig2,
          responseEncoding: defaultToConfig2,
          validateStatus: mergeDirectKeys,
        };
        return (
          b.forEach(Object.keys(h).concat(Object.keys(g)), function (h) {
            var g = y[h] || mergeDeepProperties,
              A = g(h);
            (b.isUndefined(A) && g !== mergeDirectKeys) || (_[h] = A);
          }),
          _
        );
      };
    },
    36026: function (h, g, _) {
      "use strict";
      var b = _(85061);
      h.exports = function (h, g, _) {
        var y = _.config.validateStatus;
        !_.status || !y || y(_.status)
          ? h(_)
          : g(
              b(
                "Request failed with status code " + _.status,
                _.config,
                null,
                _.request,
                _,
              ),
            );
      };
    },
    18527: function (h, g, _) {
      "use strict";
      var b = _(64867),
        y = _(45655);
      h.exports = function (h, g, _) {
        var A = this || y;
        return (
          b.forEach(_, function (_) {
            h = _.call(A, h, g);
          }),
          h
        );
      };
    },
    45655: function (h, g, _) {
      "use strict";
      var b,
        y = _(34155),
        A = _(64867),
        N = _(16016),
        F = _(80481),
        B = { "Content-Type": "application/x-www-form-urlencoded" };
      function setContentTypeIfUnset(h, g) {
        !A.isUndefined(h) &&
          A.isUndefined(h["Content-Type"]) &&
          (h["Content-Type"] = g);
      }
      var H = {
        transitional: {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        },
        adapter:
          ("undefined" != typeof XMLHttpRequest
            ? (b = _(55448))
            : void 0 !== y &&
              "[object process]" === Object.prototype.toString.call(y) &&
              (b = _(55448)),
          b),
        transformRequest: [
          function (h, g) {
            return (N(g, "Accept"),
            N(g, "Content-Type"),
            A.isFormData(h) ||
              A.isArrayBuffer(h) ||
              A.isBuffer(h) ||
              A.isStream(h) ||
              A.isFile(h) ||
              A.isBlob(h))
              ? h
              : A.isArrayBufferView(h)
                ? h.buffer
                : A.isURLSearchParams(h)
                  ? (setContentTypeIfUnset(
                      g,
                      "application/x-www-form-urlencoded;charset=utf-8",
                    ),
                    h.toString())
                  : A.isObject(h) ||
                      (g && "application/json" === g["Content-Type"])
                    ? (setContentTypeIfUnset(g, "application/json"),
                      (function (h, g, _) {
                        if (A.isString(h))
                          try {
                            return (0, JSON.parse)(h), A.trim(h);
                          } catch (h) {
                            if ("SyntaxError" !== h.name) throw h;
                          }
                        return (0, JSON.stringify)(h);
                      })(h))
                    : h;
          },
        ],
        transformResponse: [
          function (h) {
            var g = this.transitional || H.transitional,
              _ = g && g.silentJSONParsing,
              b = g && g.forcedJSONParsing,
              y = !_ && "json" === this.responseType;
            if (y || (b && A.isString(h) && h.length))
              try {
                return JSON.parse(h);
              } catch (h) {
                if (y) {
                  if ("SyntaxError" === h.name)
                    throw F(h, this, "E_JSON_PARSE");
                  throw h;
                }
              }
            return h;
          },
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        validateStatus: function (h) {
          return h >= 200 && h < 300;
        },
        headers: { common: { Accept: "application/json, text/plain, */*" } },
      };
      A.forEach(["delete", "get", "head"], function (h) {
        H.headers[h] = {};
      }),
        A.forEach(["post", "put", "patch"], function (h) {
          H.headers[h] = A.merge(B);
        }),
        (h.exports = H);
    },
    97288: function (h) {
      h.exports = { version: "0.24.0" };
    },
    91849: function (h) {
      "use strict";
      h.exports = function (h, g) {
        return function () {
          for (var _ = Array(arguments.length), b = 0; b < _.length; b++)
            _[b] = arguments[b];
          return h.apply(g, _);
        };
      };
    },
    15327: function (h, g, _) {
      "use strict";
      var b = _(64867);
      function encode(h) {
        return encodeURIComponent(h)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      h.exports = function (h, g, _) {
        if (!g) return h;
        if (_) y = _(g);
        else if (b.isURLSearchParams(g)) y = g.toString();
        else {
          var y,
            A = [];
          b.forEach(g, function (h, g) {
            null != h &&
              (b.isArray(h) ? (g += "[]") : (h = [h]),
              b.forEach(h, function (h) {
                b.isDate(h)
                  ? (h = h.toISOString())
                  : b.isObject(h) && (h = JSON.stringify(h)),
                  A.push(encode(g) + "=" + encode(h));
              }));
          }),
            (y = A.join("&"));
        }
        if (y) {
          var N = h.indexOf("#");
          -1 !== N && (h = h.slice(0, N)),
            (h += (-1 === h.indexOf("?") ? "?" : "&") + y);
        }
        return h;
      };
    },
    7303: function (h) {
      "use strict";
      h.exports = function (h, g) {
        return g ? h.replace(/\/+$/, "") + "/" + g.replace(/^\/+/, "") : h;
      };
    },
    4372: function (h, g, _) {
      "use strict";
      var b = _(64867);
      h.exports = b.isStandardBrowserEnv()
        ? {
            write: function (h, g, _, y, A, N) {
              var F = [];
              F.push(h + "=" + encodeURIComponent(g)),
                b.isNumber(_) && F.push("expires=" + new Date(_).toGMTString()),
                b.isString(y) && F.push("path=" + y),
                b.isString(A) && F.push("domain=" + A),
                !0 === N && F.push("secure"),
                (document.cookie = F.join("; "));
            },
            read: function (h) {
              var g = document.cookie.match(
                RegExp("(^|;\\s*)(" + h + ")=([^;]*)"),
              );
              return g ? decodeURIComponent(g[3]) : null;
            },
            remove: function (h) {
              this.write(h, "", Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
    },
    91793: function (h) {
      "use strict";
      h.exports = function (h) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(h);
      };
    },
    16268: function (h) {
      "use strict";
      h.exports = function (h) {
        return "object" == typeof h && !0 === h.isAxiosError;
      };
    },
    67985: function (h, g, _) {
      "use strict";
      var b = _(64867);
      h.exports = b.isStandardBrowserEnv()
        ? (function () {
            var h,
              g = /(msie|trident)/i.test(navigator.userAgent),
              _ = document.createElement("a");
            function resolveURL(h) {
              var b = h;
              return (
                g && (_.setAttribute("href", b), (b = _.href)),
                _.setAttribute("href", b),
                {
                  href: _.href,
                  protocol: _.protocol ? _.protocol.replace(/:$/, "") : "",
                  host: _.host,
                  search: _.search ? _.search.replace(/^\?/, "") : "",
                  hash: _.hash ? _.hash.replace(/^#/, "") : "",
                  hostname: _.hostname,
                  port: _.port,
                  pathname:
                    "/" === _.pathname.charAt(0)
                      ? _.pathname
                      : "/" + _.pathname,
                }
              );
            }
            return (
              (h = resolveURL(window.location.href)),
              function (g) {
                var _ = b.isString(g) ? resolveURL(g) : g;
                return _.protocol === h.protocol && _.host === h.host;
              }
            );
          })()
        : function () {
            return !0;
          };
    },
    16016: function (h, g, _) {
      "use strict";
      var b = _(64867);
      h.exports = function (h, g) {
        b.forEach(h, function (_, b) {
          b !== g &&
            b.toUpperCase() === g.toUpperCase() &&
            ((h[g] = _), delete h[b]);
        });
      };
    },
    84109: function (h, g, _) {
      "use strict";
      var b = _(64867),
        y = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent",
        ];
      h.exports = function (h) {
        var g,
          _,
          A,
          N = {};
        return (
          h &&
            b.forEach(h.split("\n"), function (h) {
              (A = h.indexOf(":")),
                (g = b.trim(h.substr(0, A)).toLowerCase()),
                (_ = b.trim(h.substr(A + 1))),
                g &&
                  !(N[g] && y.indexOf(g) >= 0) &&
                  ("set-cookie" === g
                    ? (N[g] = (N[g] ? N[g] : []).concat([_]))
                    : (N[g] = N[g] ? N[g] + ", " + _ : _));
            }),
          N
        );
      };
    },
    8713: function (h) {
      "use strict";
      h.exports = function (h) {
        return function (g) {
          return h.apply(null, g);
        };
      };
    },
    54875: function (h, g, _) {
      "use strict";
      var b = _(97288).version,
        y = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach(
        function (h, g) {
          y[h] = function (_) {
            return typeof _ === h || "a" + (g < 1 ? "n " : " ") + h;
          };
        },
      );
      var A = {};
      (y.transitional = function (h, g, _) {
        function formatMessage(h, g) {
          return (
            "[Axios v" +
            b +
            "] Transitional option '" +
            h +
            "'" +
            g +
            (_ ? ". " + _ : "")
          );
        }
        return function (_, b, y) {
          if (!1 === h)
            throw Error(
              formatMessage(b, " has been removed" + (g ? " in " + g : "")),
            );
          return (
            g &&
              !A[b] &&
              ((A[b] = !0),
              console.warn(
                formatMessage(
                  b,
                  " has been deprecated since v" +
                    g +
                    " and will be removed in the near future",
                ),
              )),
            !h || h(_, b, y)
          );
        };
      }),
        (h.exports = {
          assertOptions: function (h, g, _) {
            if ("object" != typeof h)
              throw TypeError("options must be an object");
            for (var b = Object.keys(h), y = b.length; y-- > 0; ) {
              var A = b[y],
                N = g[A];
              if (N) {
                var F = h[A],
                  B = void 0 === F || N(F, A, h);
                if (!0 !== B) throw TypeError("option " + A + " must be " + B);
                continue;
              }
              if (!0 !== _) throw Error("Unknown option " + A);
            }
          },
          validators: y,
        });
    },
    64867: function (h, g, _) {
      "use strict";
      var b = _(91849),
        y = Object.prototype.toString;
      function isArray(h) {
        return "[object Array]" === y.call(h);
      }
      function isUndefined(h) {
        return void 0 === h;
      }
      function isObject(h) {
        return null !== h && "object" == typeof h;
      }
      function isPlainObject(h) {
        if ("[object Object]" !== y.call(h)) return !1;
        var g = Object.getPrototypeOf(h);
        return null === g || g === Object.prototype;
      }
      function isFunction(h) {
        return "[object Function]" === y.call(h);
      }
      function forEach(h, g) {
        if (null != h) {
          if (("object" != typeof h && (h = [h]), isArray(h)))
            for (var _ = 0, b = h.length; _ < b; _++) g.call(null, h[_], _, h);
          else
            for (var y in h)
              Object.prototype.hasOwnProperty.call(h, y) &&
                g.call(null, h[y], y, h);
        }
      }
      h.exports = {
        isArray: isArray,
        isArrayBuffer: function (h) {
          return "[object ArrayBuffer]" === y.call(h);
        },
        isBuffer: function (h) {
          return (
            null !== h &&
            !isUndefined(h) &&
            null !== h.constructor &&
            !isUndefined(h.constructor) &&
            "function" == typeof h.constructor.isBuffer &&
            h.constructor.isBuffer(h)
          );
        },
        isFormData: function (h) {
          return "undefined" != typeof FormData && h instanceof FormData;
        },
        isArrayBufferView: function (h) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(h)
            : h && h.buffer && h.buffer instanceof ArrayBuffer;
        },
        isString: function (h) {
          return "string" == typeof h;
        },
        isNumber: function (h) {
          return "number" == typeof h;
        },
        isObject: isObject,
        isPlainObject: isPlainObject,
        isUndefined: isUndefined,
        isDate: function (h) {
          return "[object Date]" === y.call(h);
        },
        isFile: function (h) {
          return "[object File]" === y.call(h);
        },
        isBlob: function (h) {
          return "[object Blob]" === y.call(h);
        },
        isFunction: isFunction,
        isStream: function (h) {
          return isObject(h) && isFunction(h.pipe);
        },
        isURLSearchParams: function (h) {
          return (
            "undefined" != typeof URLSearchParams &&
            h instanceof URLSearchParams
          );
        },
        isStandardBrowserEnv: function () {
          return (
            ("undefined" == typeof navigator ||
              ("ReactNative" !== navigator.product &&
                "NativeScript" !== navigator.product &&
                "NS" !== navigator.product)) &&
            "undefined" != typeof window &&
            "undefined" != typeof document
          );
        },
        forEach: forEach,
        merge: function merge() {
          var h = {};
          function assignValue(g, _) {
            isPlainObject(h[_]) && isPlainObject(g)
              ? (h[_] = merge(h[_], g))
              : isPlainObject(g)
                ? (h[_] = merge({}, g))
                : isArray(g)
                  ? (h[_] = g.slice())
                  : (h[_] = g);
          }
          for (var g = 0, _ = arguments.length; g < _; g++)
            forEach(arguments[g], assignValue);
          return h;
        },
        extend: function (h, g, _) {
          return (
            forEach(g, function (g, y) {
              _ && "function" == typeof g ? (h[y] = b(g, _)) : (h[y] = g);
            }),
            h
          );
        },
        trim: function (h) {
          return h.trim ? h.trim() : h.replace(/^\s+|\s+$/g, "");
        },
        stripBOM: function (h) {
          return 65279 === h.charCodeAt(0) && (h = h.slice(1)), h;
        },
      };
    },
    94184: function (h, g) {
      var _;
      /*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
        var b = {}.hasOwnProperty;
        function classNames() {
          for (var h = [], g = 0; g < arguments.length; g++) {
            var _ = arguments[g];
            if (_) {
              var y = typeof _;
              if ("string" === y || "number" === y) h.push(_);
              else if (Array.isArray(_)) {
                if (_.length) {
                  var A = classNames.apply(null, _);
                  A && h.push(A);
                }
              } else if ("object" === y) {
                if (
                  _.toString !== Object.prototype.toString &&
                  !_.toString.toString().includes("[native code]")
                ) {
                  h.push(_.toString());
                  continue;
                }
                for (var N in _) b.call(_, N) && _[N] && h.push(N);
              }
            }
          }
          return h.join(" ");
        }
        h.exports
          ? ((classNames.default = classNames), (h.exports = classNames))
          : void 0 !==
              (_ = function () {
                return classNames;
              }.apply(g, [])) && (h.exports = _);
      })();
    },
    36919: function (h, g, _) {
      "use strict";
      var b = _(86104);
      h.exports = function (h) {
        b(h) || (h = {});
        for (var g = arguments.length, _ = 1; _ < g; _++) {
          var y = arguments[_];
          b(y) &&
            (function (h, g) {
              for (var _ in g)
                Object.prototype.hasOwnProperty.call(g, _) && (h[_] = g[_]);
            })(h, y);
        }
        return h;
      };
    },
    86104: function (h) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ h.exports = function (h) {
        return null != h && ("object" == typeof h || "function" == typeof h);
      };
    },
    52561: function (h) {
      "use strict";
      /*!
       * for-in <https://github.com/jonschlinkert/for-in>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ h.exports = function (h, g, _) {
        for (var b in h) if (!1 === g.call(_, h[b], b, h)) break;
      };
    },
    43200: function (h) {
      /*!
       * get-value <https://github.com/jonschlinkert/get-value>
       *
       * Copyright (c) 2014-2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ h.exports = function (h, g, _, b, y) {
        var A;
        if (
          !(
            null !== (A = h) &&
            ("object" == typeof A || "function" == typeof A)
          ) ||
          !g
        )
          return h;
        if (
          ((g = toString(g)),
          _ && (g += "." + toString(_)),
          b && (g += "." + toString(b)),
          y && (g += "." + toString(y)),
          g in h)
        )
          return h[g];
        for (var N = g.split("."), F = N.length, B = -1; h && ++B < F; ) {
          for (var H = N[B]; "\\" === H[H.length - 1]; )
            H = H.slice(0, -1) + "." + N[++B];
          h = h[H];
        }
        return h;
      };
      function toString(h) {
        return h ? (Array.isArray(h) ? h.join(".") : h) : "";
      }
    },
    51833: function (h, g, _) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var b = _(77452);
      h.exports = function (h) {
        return b(h) || "function" == typeof h || Array.isArray(h);
      };
    },
    77452: function (h, g, _) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var b = _(47798);
      function isObjectObject(h) {
        return (
          !0 === b(h) && "[object Object]" === Object.prototype.toString.call(h)
        );
      }
      h.exports = function (h) {
        var g, _;
        return (
          !1 !== isObjectObject(h) &&
          "function" == typeof (g = h.constructor) &&
          !1 !== isObjectObject((_ = g.prototype)) &&
          !1 !== _.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    47798: function (h) {
      "use strict";
      /*!
       * isobject <https://github.com/jonschlinkert/isobject>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ h.exports = function (h) {
        return null != h && "object" == typeof h && !1 === Array.isArray(h);
      };
    },
    3271: function (h, g, _) {
      "use strict";
      let b, y, A;
      _.d(g, {
        Zf: function () {
          return Leva;
        },
        M4: function () {
          return useControls;
        },
      });
      var N = _(73935),
        F = _(67294),
        B = _.t(F, 2),
        H = _(87462),
        U = _(75320);
      let K = (0, F.forwardRef)((h, g) => {
        var _;
        let {
          container: b = null == globalThis
            ? void 0
            : null === (_ = globalThis.document) || void 0 === _
              ? void 0
              : _.body,
          ...y
        } = h;
        return b
          ? N.createPortal(
              (0, F.createElement)(U.WV.div, (0, H.Z)({}, y, { ref: g })),
              b,
            )
          : null;
      });
      var q = Object.prototype.hasOwnProperty;
      function dequal(h, g) {
        var _, b;
        if (h === g) return !0;
        if (h && g && (_ = h.constructor) === g.constructor) {
          if (_ === Date) return h.getTime() === g.getTime();
          if (_ === RegExp) return h.toString() === g.toString();
          if (_ === Array) {
            if ((b = h.length) === g.length)
              for (; b-- && dequal(h[b], g[b]); );
            return -1 === b;
          }
          if (!_ || "object" == typeof h) {
            for (_ in ((b = 0), h))
              if (
                (q.call(h, _) && ++b && !q.call(g, _)) ||
                !(_ in g) ||
                !dequal(h[_], g[_])
              )
                return !1;
            return Object.keys(g).length === b;
          }
        }
        return h != h && g != g;
      }
      function shallow(h, g) {
        if (Object.is(h, g)) return !0;
        if (
          "object" != typeof h ||
          null === h ||
          "object" != typeof g ||
          null === g
        )
          return !1;
        let _ = Object.keys(h);
        if (_.length !== Object.keys(g).length) return !1;
        for (let b = 0; b < _.length; b++)
          if (
            !Object.prototype.hasOwnProperty.call(g, _[b]) ||
            !Object.is(h[_[b]], g[_[b]])
          )
            return !1;
        return !0;
      }
      var Rule = function (h, g, _, b) {
        (this.name = h), (this.fn = g), (this.args = _), (this.modifiers = b);
      };
      function pickFn(h, g) {
        return void 0 === g && (g = "simple"), "object" == typeof h ? h[g] : h;
      }
      function testAux(h, g, _) {
        if (!h.length) return pickFn(g);
        var b = h.shift(),
          y = testAux(h, g, _);
        return b.perform(y, _);
      }
      (Rule.prototype._test = function (h) {
        var g = this.fn;
        try {
          testAux(this.modifiers.slice(), g, this)(h);
        } catch (h) {
          g = function () {
            return !1;
          };
        }
        try {
          return testAux(this.modifiers.slice(), g, this)(h);
        } catch (h) {
          return !1;
        }
      }),
        (Rule.prototype._check = function (h) {
          try {
            testAux(this.modifiers.slice(), this.fn, this)(h);
          } catch (h) {
            if (
              testAux(
                this.modifiers.slice(),
                function (h) {
                  return h;
                },
                this,
              )(!1)
            )
              return;
          }
          if (!testAux(this.modifiers.slice(), this.fn, this)(h)) throw null;
        }),
        (Rule.prototype._testAsync = function (h) {
          var g = this;
          return new Promise(function (_, b) {
            (function testAsyncAux(h, g, _) {
              if (!h.length)
                return function (h) {
                  return Promise.resolve(pickFn(g, "async")(h));
                };
              var b = h.shift(),
                y = testAsyncAux(h, g, _);
              return b.performAsync(y, _);
            })(
              g.modifiers.slice(),
              g.fn,
              g,
            )(h)
              .then(function (g) {
                g ? _(h) : b(null);
              })
              .catch(function (h) {
                return b(h);
              });
          });
        });
      var Modifier = function (h, g, _) {
          (this.name = h), (this.perform = g), (this.performAsync = _);
        },
        Y = (function (h) {
          function ValidationError(g, _, b, y) {
            for (var A = [], N = arguments.length - 4; N-- > 0; )
              A[N] = arguments[N + 4];
            h.call(this, A),
              h.captureStackTrace && h.captureStackTrace(this, ValidationError),
              (this.rule = g),
              (this.value = _),
              (this.cause = b),
              (this.target = y);
          }
          return (
            h && (ValidationError.__proto__ = h),
            (ValidationError.prototype = Object.create(h && h.prototype)),
            (ValidationError.prototype.constructor = ValidationError),
            ValidationError
          );
        })(Error),
        Context = function (h, g) {
          void 0 === h && (h = []),
            void 0 === g && (g = []),
            (this.chain = h),
            (this.nextRuleModifiers = g);
        };
      (Context.prototype._applyRule = function (h, g) {
        var _ = this;
        return function () {
          for (var b = [], y = arguments.length; y--; ) b[y] = arguments[y];
          return (
            _.chain.push(new Rule(g, h.apply(_, b), b, _.nextRuleModifiers)),
            (_.nextRuleModifiers = []),
            _
          );
        };
      }),
        (Context.prototype._applyModifier = function (h, g) {
          return (
            this.nextRuleModifiers.push(new Modifier(g, h.simple, h.async)),
            this
          );
        }),
        (Context.prototype._clone = function () {
          return new Context(
            this.chain.slice(),
            this.nextRuleModifiers.slice(),
          );
        }),
        (Context.prototype.test = function (h) {
          return this.chain.every(function (g) {
            return g._test(h);
          });
        }),
        (Context.prototype.testAll = function (h) {
          var g = [];
          return (
            this.chain.forEach(function (_) {
              try {
                _._check(h);
              } catch (b) {
                g.push(new Y(_, h, b));
              }
            }),
            g
          );
        }),
        (Context.prototype.check = function (h) {
          this.chain.forEach(function (g) {
            try {
              g._check(h);
            } catch (_) {
              throw new Y(g, h, _);
            }
          });
        }),
        (Context.prototype.testAsync = function (h) {
          var g = this;
          return new Promise(function (_, b) {
            (function executeAsyncRules(h, g, _, b) {
              if (g.length) {
                var y = g.shift();
                y._testAsync(h).then(
                  function () {
                    executeAsyncRules(h, g, _, b);
                  },
                  function (g) {
                    b(new Y(y, h, g));
                  },
                );
              } else _(h);
            })(h, g.chain.slice(), _, b);
          });
        });
      var consideredEmpty = function (h, g) {
        return (
          (!!g && "string" == typeof h && 0 === h.trim().length) || null == h
        );
      };
      function v8n() {
        return "undefined" != typeof Proxy
          ? (function proxyContext(h) {
              return new Proxy(h, {
                get: function (g, _) {
                  if (_ in g) return g[_];
                  var b = proxyContext(h._clone());
                  return _ in Q
                    ? b._applyModifier(Q[_], _)
                    : _ in X
                      ? b._applyRule(X[_], _)
                      : _ in et
                        ? b._applyRule(et[_], _)
                        : void 0;
                },
              });
            })(new Context())
          : (function proxylessContext(h) {
              var addRuleSet = function (h, g) {
                  return (
                    Object.keys(h).forEach(function (_) {
                      g[_] = function () {
                        for (var b = [], y = arguments.length; y--; )
                          b[y] = arguments[y];
                        return proxylessContext(g._clone())
                          ._applyRule(h[_], _)
                          .apply(void 0, b);
                      };
                    }),
                    g
                  );
                },
                g = addRuleSet(et, h),
                _ = addRuleSet(X, g);
              return (
                Object.keys(Q).forEach(function (h) {
                  Object.defineProperty(_, h, {
                    get: function () {
                      return proxylessContext(_._clone())._applyModifier(
                        Q[h],
                        h,
                      );
                    },
                  });
                }),
                _
              );
            })(new Context());
      }
      var X = {};
      (v8n.extend = function (h) {
        Object.assign(X, h);
      }),
        (v8n.clearCustomRules = function () {
          X = {};
        });
      var Q = {
        not: {
          simple: function (h) {
            return function (g) {
              return !h(g);
            };
          },
          async: function (h) {
            return function (g) {
              return Promise.resolve(h(g))
                .then(function (h) {
                  return !h;
                })
                .catch(function () {
                  return !0;
                });
            };
          },
        },
        some: {
          simple: function (h) {
            return function (g) {
              return split(g).some(function (g) {
                try {
                  return h(g);
                } catch (h) {
                  return !1;
                }
              });
            };
          },
          async: function (h) {
            return function (g) {
              return Promise.all(
                split(g).map(function (g) {
                  try {
                    return h(g).catch(function () {
                      return !1;
                    });
                  } catch (h) {
                    return !1;
                  }
                }),
              ).then(function (h) {
                return h.some(Boolean);
              });
            };
          },
        },
        every: {
          simple: function (h) {
            return function (g) {
              return !1 !== g && split(g).every(h);
            };
          },
          async: function (h) {
            return function (g) {
              return Promise.all(split(g).map(h)).then(function (h) {
                return h.every(Boolean);
              });
            };
          },
        },
        strict: {
          simple: function (h, g) {
            return function (_) {
              return isSchemaRule(g) && _ && "object" == typeof _
                ? Object.keys(g.args[0]).length === Object.keys(_).length &&
                    h(_)
                : h(_);
            };
          },
          async: function (h, g) {
            return function (_) {
              return Promise.resolve(h(_))
                .then(function (h) {
                  return isSchemaRule(g) && _ && "object" == typeof _
                    ? Object.keys(g.args[0]).length === Object.keys(_).length &&
                        h
                    : h;
                })
                .catch(function () {
                  return !1;
                });
            };
          },
        },
      };
      function isSchemaRule(h) {
        return (
          h &&
          "schema" === h.name &&
          h.args.length > 0 &&
          "object" == typeof h.args[0]
        );
      }
      function split(h) {
        return "string" == typeof h ? h.split("") : h;
      }
      var et = {
        equal: function (h) {
          return function (g) {
            return g == h;
          };
        },
        exact: function (h) {
          return function (g) {
            return g === h;
          };
        },
        number: function (h) {
          return (
            void 0 === h && (h = !0),
            function (g) {
              return "number" == typeof g && (h || isFinite(g));
            }
          );
        },
        integer: function () {
          return function (h) {
            return (
              Number.isInteger ||
              function (h) {
                return (
                  "number" == typeof h && isFinite(h) && Math.floor(h) === h
                );
              }
            )(h);
          };
        },
        numeric: function () {
          return function (h) {
            return !isNaN(parseFloat(h)) && isFinite(h);
          };
        },
        string: function () {
          return testType("string");
        },
        boolean: function () {
          return testType("boolean");
        },
        undefined: function () {
          return testType("undefined");
        },
        null: function () {
          return testType("null");
        },
        array: function () {
          return testType("array");
        },
        object: function () {
          return testType("object");
        },
        instanceOf: function (h) {
          return function (g) {
            return g instanceof h;
          };
        },
        pattern: function (h) {
          return function (g) {
            return h.test(g);
          };
        },
        lowercase: function () {
          return function (h) {
            return (
              "boolean" == typeof h ||
              (h === h.toLowerCase() && "" !== h.trim())
            );
          };
        },
        uppercase: function () {
          return function (h) {
            return h === h.toUpperCase() && "" !== h.trim();
          };
        },
        vowel: function () {
          return function (h) {
            return /^[aeiou]+$/i.test(h);
          };
        },
        consonant: function () {
          return function (h) {
            return /^(?=[^aeiou])([a-z]+)$/i.test(h);
          };
        },
        first: function (h) {
          return function (g) {
            return g[0] == h;
          };
        },
        last: function (h) {
          return function (g) {
            return g[g.length - 1] == h;
          };
        },
        empty: function () {
          return function (h) {
            return 0 === h.length;
          };
        },
        length: function (h, g) {
          return function (_) {
            return _.length >= h && _.length <= (g || h);
          };
        },
        minLength: function (h) {
          return function (g) {
            return g.length >= h;
          };
        },
        maxLength: function (h) {
          return function (g) {
            return g.length <= h;
          };
        },
        negative: function () {
          return function (h) {
            return h < 0;
          };
        },
        positive: function () {
          return function (h) {
            return h >= 0;
          };
        },
        between: function (h, g) {
          return function (_) {
            return _ >= h && _ <= g;
          };
        },
        range: function (h, g) {
          return function (_) {
            return _ >= h && _ <= g;
          };
        },
        lessThan: function (h) {
          return function (g) {
            return g < h;
          };
        },
        lessThanOrEqual: function (h) {
          return function (g) {
            return g <= h;
          };
        },
        greaterThan: function (h) {
          return function (g) {
            return g > h;
          };
        },
        greaterThanOrEqual: function (h) {
          return function (g) {
            return g >= h;
          };
        },
        even: function () {
          return function (h) {
            return h % 2 == 0;
          };
        },
        odd: function () {
          return function (h) {
            return h % 2 != 0;
          };
        },
        includes: function (h) {
          return function (g) {
            return ~g.indexOf(h);
          };
        },
        schema: function (h) {
          return {
            simple: function (g) {
              var _ = [];
              if (
                (Object.keys(h).forEach(function (b) {
                  var y = h[b];
                  try {
                    y.check((g || {})[b]);
                  } catch (h) {
                    (h.target = b), _.push(h);
                  }
                }),
                _.length > 0)
              )
                throw _;
              return !0;
            },
            async: function (g) {
              var _ = [];
              return Promise.all(
                Object.keys(h).map(function (b) {
                  return h[b].testAsync((g || {})[b]).catch(function (h) {
                    (h.target = b), _.push(h);
                  });
                }),
              ).then(function () {
                if (_.length > 0) throw _;
                return !0;
              });
            },
          };
        },
        passesAnyOf: function () {
          for (var h = [], g = arguments.length; g--; ) h[g] = arguments[g];
          return function (g) {
            return h.some(function (h) {
              return h.test(g);
            });
          };
        },
        optional: function (h, g) {
          return (
            void 0 === g && (g = !1),
            {
              simple: function (_) {
                return consideredEmpty(_, g) || void 0 === h.check(_);
              },
              async: function (_) {
                return consideredEmpty(_, g) || h.testAsync(_);
              },
            }
          );
        },
      };
      function testType(h) {
        return function (g) {
          return (
            (Array.isArray(g) && "array" === h) ||
            (null === g && "null" === h) ||
            typeof g === h
          );
        };
      }
      var en = "colors",
        er = "sizes",
        ei = "space",
        eo = {
          gap: ei,
          gridGap: ei,
          columnGap: ei,
          gridColumnGap: ei,
          rowGap: ei,
          gridRowGap: ei,
          inset: ei,
          insetBlock: ei,
          insetBlockEnd: ei,
          insetBlockStart: ei,
          insetInline: ei,
          insetInlineEnd: ei,
          insetInlineStart: ei,
          margin: ei,
          marginTop: ei,
          marginRight: ei,
          marginBottom: ei,
          marginLeft: ei,
          marginBlock: ei,
          marginBlockEnd: ei,
          marginBlockStart: ei,
          marginInline: ei,
          marginInlineEnd: ei,
          marginInlineStart: ei,
          padding: ei,
          paddingTop: ei,
          paddingRight: ei,
          paddingBottom: ei,
          paddingLeft: ei,
          paddingBlock: ei,
          paddingBlockEnd: ei,
          paddingBlockStart: ei,
          paddingInline: ei,
          paddingInlineEnd: ei,
          paddingInlineStart: ei,
          top: ei,
          right: ei,
          bottom: ei,
          left: ei,
          scrollMargin: ei,
          scrollMarginTop: ei,
          scrollMarginRight: ei,
          scrollMarginBottom: ei,
          scrollMarginLeft: ei,
          scrollMarginX: ei,
          scrollMarginY: ei,
          scrollMarginBlock: ei,
          scrollMarginBlockEnd: ei,
          scrollMarginBlockStart: ei,
          scrollMarginInline: ei,
          scrollMarginInlineEnd: ei,
          scrollMarginInlineStart: ei,
          scrollPadding: ei,
          scrollPaddingTop: ei,
          scrollPaddingRight: ei,
          scrollPaddingBottom: ei,
          scrollPaddingLeft: ei,
          scrollPaddingX: ei,
          scrollPaddingY: ei,
          scrollPaddingBlock: ei,
          scrollPaddingBlockEnd: ei,
          scrollPaddingBlockStart: ei,
          scrollPaddingInline: ei,
          scrollPaddingInlineEnd: ei,
          scrollPaddingInlineStart: ei,
          fontSize: "fontSizes",
          background: en,
          backgroundColor: en,
          backgroundImage: en,
          borderImage: en,
          border: en,
          borderBlock: en,
          borderBlockEnd: en,
          borderBlockStart: en,
          borderBottom: en,
          borderBottomColor: en,
          borderColor: en,
          borderInline: en,
          borderInlineEnd: en,
          borderInlineStart: en,
          borderLeft: en,
          borderLeftColor: en,
          borderRight: en,
          borderRightColor: en,
          borderTop: en,
          borderTopColor: en,
          caretColor: en,
          color: en,
          columnRuleColor: en,
          fill: en,
          outline: en,
          outlineColor: en,
          stroke: en,
          textDecorationColor: en,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: er,
          minBlockSize: er,
          maxBlockSize: er,
          inlineSize: er,
          minInlineSize: er,
          maxInlineSize: er,
          width: er,
          minWidth: er,
          maxWidth: er,
          height: er,
          minHeight: er,
          maxHeight: er,
          flexBasis: er,
          gridTemplateColumns: er,
          gridTemplateRows: er,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices",
        },
        i = (h, g) =>
          "function" == typeof g
            ? { "()": Function.prototype.toString.call(g) }
            : g,
        dist_o = () => {
          let h = Object.create(null);
          return (g, _, ...b) => {
            let y = JSON.stringify(g, i);
            return y in h ? h[y] : (h[y] = _(g, ...b));
          };
        },
        ea = Symbol.for("sxs.internal"),
        s = (h, g) =>
          Object.defineProperties(h, Object.getOwnPropertyDescriptors(g)),
        dist_a = (h) => {
          for (let g in h) return !0;
          return !1;
        },
        { hasOwnProperty: es } = Object.prototype,
        d = (h) =>
          h.includes("-")
            ? h
            : h.replace(/[A-Z]/g, (h) => "-" + h.toLowerCase()),
        el = /\s+(?![^()]*\))/,
        p = (h) => (g) =>
          h(...("string" == typeof g ? String(g).split(el) : [g])),
        eu = {
          appearance: (h) => ({ WebkitAppearance: h, appearance: h }),
          backfaceVisibility: (h) => ({
            WebkitBackfaceVisibility: h,
            backfaceVisibility: h,
          }),
          backdropFilter: (h) => ({
            WebkitBackdropFilter: h,
            backdropFilter: h,
          }),
          backgroundClip: (h) => ({
            WebkitBackgroundClip: h,
            backgroundClip: h,
          }),
          boxDecorationBreak: (h) => ({
            WebkitBoxDecorationBreak: h,
            boxDecorationBreak: h,
          }),
          clipPath: (h) => ({ WebkitClipPath: h, clipPath: h }),
          content: (h) => ({
            content:
              h.includes('"') ||
              h.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                h,
              )
                ? h
                : `"${h}"`,
          }),
          hyphens: (h) => ({ WebkitHyphens: h, hyphens: h }),
          maskImage: (h) => ({ WebkitMaskImage: h, maskImage: h }),
          maskSize: (h) => ({ WebkitMaskSize: h, maskSize: h }),
          tabSize: (h) => ({ MozTabSize: h, tabSize: h }),
          textSizeAdjust: (h) => ({
            WebkitTextSizeAdjust: h,
            textSizeAdjust: h,
          }),
          userSelect: (h) => ({ WebkitUserSelect: h, userSelect: h }),
          marginBlock: p((h, g) => ({
            marginBlockStart: h,
            marginBlockEnd: g || h,
          })),
          marginInline: p((h, g) => ({
            marginInlineStart: h,
            marginInlineEnd: g || h,
          })),
          maxSize: p((h, g) => ({ maxBlockSize: h, maxInlineSize: g || h })),
          minSize: p((h, g) => ({ minBlockSize: h, minInlineSize: g || h })),
          paddingBlock: p((h, g) => ({
            paddingBlockStart: h,
            paddingBlockEnd: g || h,
          })),
          paddingInline: p((h, g) => ({
            paddingInlineStart: h,
            paddingInlineEnd: g || h,
          })),
        },
        ec = /([\d.]+)([^]*)/,
        f = (h, g) =>
          h.length
            ? h.reduce(
                (h, _) => (
                  h.push(
                    ...g.map((h) =>
                      h.includes("&")
                        ? h.replace(
                            /&/g,
                            /[ +>|~]/.test(_) && /&.*&/.test(h)
                              ? `:is(${_})`
                              : _,
                          )
                        : _ + " " + h,
                    ),
                  ),
                  h
                ),
                [],
              )
            : g,
        m = (h, g) =>
          h in ed && "string" == typeof g
            ? g.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (g, _, b, y) =>
                  _ +
                  ("stretch" === b
                    ? `-moz-available${y};${d(h)}:${_}-webkit-fill-available`
                    : `-moz-fit-content${y};${d(h)}:${_}fit-content`) +
                  y,
              )
            : String(g),
        ed = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1,
        },
        S = (h) => (h ? h + "-" : ""),
        k = (h, g, _) =>
          h.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (h, b, y, A, N) =>
              ("$" == A) == !!y
                ? h
                : (b || "--" == A ? "calc(" : "") +
                  "var(--" +
                  ("$" === A
                    ? S(g) +
                      (N.includes("$") ? "" : S(_)) +
                      N.replace(/\$/g, "-")
                    : N) +
                  ")" +
                  (b || "--" == A ? "*" + (b || "") + (y || "1") + ")" : ""),
          ),
        ef = /\s*,\s*(?![^()]*\))/,
        ep = Object.prototype.toString,
        $ = (h, g, _, b, y) => {
          let A, N, F;
          let a = (h, g, _) => {
            let B, H;
            let p = (h) => {
              var U;
              for (B in h) {
                let K = 64 === B.charCodeAt(0),
                  q = K && Array.isArray(h[B]) ? h[B] : [h[B]];
                for (H of q) {
                  let h = /[A-Z]/.test((U = B))
                      ? U
                      : U.replace(/-[^]/g, (h) => h[1].toUpperCase()),
                    q =
                      "object" == typeof H &&
                      H &&
                      H.toString === ep &&
                      (!b.utils[h] || !g.length);
                  if (h in b.utils && !q) {
                    let g = b.utils[h];
                    if (g !== N) {
                      (N = g), p(g(H)), (N = null);
                      continue;
                    }
                  } else if (h in eu) {
                    let g = eu[h];
                    if (g !== F) {
                      (F = g), p(g(H)), (F = null);
                      continue;
                    }
                  }
                  if (
                    (K &&
                      (B = (
                        B.slice(1) in b.media
                          ? "@media " + b.media[B.slice(1)]
                          : B
                      ).replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (h, g, _, b, y, A) => {
                          let N = ec.test(g),
                            F = 0.0625 * (N ? -1 : 1),
                            [B, H] = N ? [b, g] : [g, b];
                          return (
                            "(" +
                            ("=" === _[0]
                              ? ""
                              : (">" === _[0]) === N
                                ? "max-"
                                : "min-") +
                            B +
                            ":" +
                            ("=" !== _[0] && 1 === _.length
                              ? H.replace(
                                  ec,
                                  (h, g, b) =>
                                    Number(g) + F * (">" === _ ? 1 : -1) + b,
                                )
                              : H) +
                            (y
                              ? ") and (" +
                                (">" === y[0] ? "min-" : "max-") +
                                B +
                                ":" +
                                (1 === y.length
                                  ? A.replace(
                                      ec,
                                      (h, g, _) =>
                                        Number(g) +
                                        F * (">" === y ? -1 : 1) +
                                        _,
                                    )
                                  : A)
                              : "") +
                            ")"
                          );
                        },
                      )),
                    q)
                  ) {
                    let h = K ? _.concat(B) : [..._],
                      b = K ? [...g] : f(g, B.split(ef));
                    void 0 !== A && y(x(...A)), (A = void 0), a(H, b, h);
                  } else
                    void 0 === A && (A = [[], g, _]),
                      (B =
                        K || 36 !== B.charCodeAt(0)
                          ? B
                          : `--${S(b.prefix)}${B.slice(1).replace(
                              /\$/g,
                              "-",
                            )}`),
                      (H = q
                        ? H
                        : "number" == typeof H
                          ? H && h in eh
                            ? String(H) + "px"
                            : String(H)
                          : k(
                              m(h, null == H ? "" : H),
                              b.prefix,
                              b.themeMap[h],
                            )),
                      A[0].push(`${K ? `${B} ` : `${d(B)}:`}${H}`);
                }
              }
            };
            p(h), void 0 !== A && y(x(...A)), (A = void 0);
          };
          a(h, g, _);
        },
        x = (h, g, _) =>
          `${_.map((h) => `${h}{`).join("")}${
            g.length ? `${g.join(",")}{` : ""
          }${h.join(";")}${g.length ? "}" : ""}${Array(
            _.length ? _.length + 1 : 0,
          ).join("}")}`,
        eh = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1,
        },
        R = (h) => String.fromCharCode(h + (h > 25 ? 39 : 97)),
        z = (h) =>
          ((h) => {
            let g,
              _ = "";
            for (g = Math.abs(h); g > 52; g = (g / 52) | 0) _ = R(g % 52) + _;
            return R(g % 52) + _;
          })(
            ((h, g) => {
              let _ = g.length;
              for (; _; ) h = (33 * h) ^ g.charCodeAt(--_);
              return h;
            })(5381, JSON.stringify(h)) >>> 0,
          ),
        em = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline",
        ],
        j = (h) => {
          if (h.href && !h.href.startsWith(location.origin)) return !1;
          try {
            return !!h.cssRules;
          } catch (h) {
            return !1;
          }
        },
        E = (h) => {
          let g;
          let r = () => {
              let { cssRules: h } = g.sheet;
              return [].map
                .call(h, (_, b) => {
                  let { cssText: y } = _,
                    A = "";
                  if (y.startsWith("--sxs")) return "";
                  if (h[b - 1] && (A = h[b - 1].cssText).startsWith("--sxs")) {
                    if (!_.cssRules.length) return "";
                    for (let h in g.rules)
                      if (g.rules[h].group === _)
                        return `--sxs{--sxs:${[...g.rules[h].cache].join(
                          " ",
                        )}}${y}`;
                    return _.cssRules.length ? `${A}${y}` : "";
                  }
                  return y;
                })
                .join("");
            },
            n = () => {
              if (g) {
                let { rules: h, sheet: _ } = g;
                if (!_.deleteRule) {
                  for (; 3 === Object(Object(_.cssRules)[0]).type; )
                    _.cssRules.splice(0, 1);
                  _.cssRules = [];
                }
                for (let g in h) delete h[g];
              }
              let _ = Object(h).styleSheets || [];
              for (let h of _)
                if (j(h)) {
                  for (let _ = 0, b = h.cssRules; b[_]; ++_) {
                    let y = Object(b[_]);
                    if (1 !== y.type) continue;
                    let A = Object(b[_ + 1]);
                    if (4 !== A.type) continue;
                    ++_;
                    let { cssText: N } = y;
                    if (!N.startsWith("--sxs")) continue;
                    let F = N.slice(14, -3).trim().split(/\s+/),
                      B = em[F[0]];
                    B &&
                      (g ||
                        (g = { sheet: h, reset: n, rules: {}, toString: r }),
                      (g.rules[B] = { group: A, index: _, cache: new Set(F) }));
                  }
                  if (g) break;
                }
              if (!g) {
                let i = (h, g) => ({
                  type: g,
                  cssRules: [],
                  insertRule(h, g) {
                    this.cssRules.splice(
                      g,
                      0,
                      i(
                        h,
                        { import: 3, undefined: 1 }[
                          (h.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                        ] || 4,
                      ),
                    );
                  },
                  get cssText() {
                    return "@media{}" === h
                      ? `@media{${[].map
                          .call(this.cssRules, (h) => h.cssText)
                          .join("")}}`
                      : h;
                  },
                });
                g = {
                  sheet: h
                    ? (h.head || h).appendChild(document.createElement("style"))
                        .sheet
                    : i("", "text/css"),
                  rules: {},
                  reset: n,
                  toString: r,
                };
              }
              let { sheet: b, rules: y } = g;
              for (let h = em.length - 1; h >= 0; --h) {
                let g = em[h];
                if (!y[g]) {
                  let _ = em[h + 1],
                    A = y[_] ? y[_].index : b.cssRules.length;
                  b.insertRule("@media{}", A),
                    b.insertRule(`--sxs{--sxs:${h}}`, A),
                    (y[g] = {
                      group: b.cssRules[A + 1],
                      index: A,
                      cache: new Set([h]),
                    });
                }
                v(y[g]);
              }
            };
          return n(), g;
        },
        v = (h) => {
          let g = h.group,
            _ = g.cssRules.length;
          h.apply = (h) => {
            try {
              g.insertRule(h, _), ++_;
            } catch (h) {}
          };
        },
        eg = Symbol(),
        ev = dist_o(),
        M = (h, g) =>
          ev(h, () => (..._) => {
            let b = { type: null, composers: new Set() };
            for (let g of _)
              if (null != g) {
                if (g[ea])
                  for (let h of (null == b.type && (b.type = g[ea].type),
                  g[ea].composers))
                    b.composers.add(h);
                else
                  g.constructor !== Object || g.$$typeof
                    ? null == b.type && (b.type = g)
                    : b.composers.add(C(g, h));
              }
            return (
              null == b.type && (b.type = "span"),
              b.composers.size || b.composers.add(["PJLV", {}, [], [], {}, []]),
              P(h, b, g)
            );
          }),
        C = (
          { variants: h, compoundVariants: g, defaultVariants: _, ...b },
          y,
        ) => {
          let A = `${S(y.prefix)}c-${z(b)}`,
            N = [],
            F = [],
            B = Object.create(null),
            H = [];
          for (let h in _) B[h] = String(_[h]);
          if ("object" == typeof h && h)
            for (let g in h) {
              es.call(B, g) || (B[g] = "undefined");
              let _ = h[g];
              for (let h in _) {
                let b = { [g]: String(h) };
                "undefined" === String(h) && H.push(g);
                let y = _[h],
                  A = [b, y, !dist_a(y)];
                N.push(A);
              }
            }
          if ("object" == typeof g && g)
            for (let h of g) {
              let { css: g, ..._ } = h;
              for (let h in ((g = ("object" == typeof g && g) || {}), _))
                _[h] = String(_[h]);
              let b = [_, g, !dist_a(g)];
              F.push(b);
            }
          return [A, b, N, F, B, H];
        },
        P = (h, g, _) => {
          let [b, y, A, N] = L(g.composers),
            F =
              "function" == typeof g.type || g.type.$$typeof
                ? ((h) => {
                    function t() {
                      for (let g = 0; g < t[eg].length; g++) {
                        let [_, b] = t[eg][g];
                        h.rules[_].apply(b);
                      }
                      return (t[eg] = []), null;
                    }
                    return (
                      (t[eg] = []),
                      (t.rules = {}),
                      em.forEach(
                        (h) =>
                          (t.rules[h] = { apply: (g) => t[eg].push([h, g]) }),
                      ),
                      t
                    );
                  })(_)
                : null,
            B = (F || _).rules,
            H = `.${b}${
              y.length > 1 ? `:where(.${y.slice(1).join(".")})` : ""
            }`,
            p = (U) => {
              U = ("object" == typeof U && U) || e_;
              let { css: K, ...q } = U,
                Y = {};
              for (let h in A)
                if ((delete q[h], h in U)) {
                  let g = U[h];
                  "object" == typeof g && g
                    ? (Y[h] = { "@initial": A[h], ...g })
                    : ((g = String(g)),
                      (Y[h] = "undefined" !== g || N.has(h) ? g : A[h]));
                } else Y[h] = A[h];
              let X = new Set([...y]);
              for (let [b, y, A, N] of g.composers) {
                _.rules.styled.cache.has(b) ||
                  (_.rules.styled.cache.add(b),
                  $(y, [`.${b}`], [], h, (h) => {
                    B.styled.apply(h);
                  }));
                let g = O(A, Y, h.media),
                  F = O(N, Y, h.media, !0);
                for (let y of g)
                  if (void 0 !== y)
                    for (let [g, A, N] of y) {
                      let y = `${b}-${z(A)}-${g}`;
                      X.add(y);
                      let F = (N ? _.rules.resonevar : _.rules.onevar).cache,
                        H = N ? B.resonevar : B.onevar;
                      F.has(y) ||
                        (F.add(y),
                        $(A, [`.${y}`], [], h, (h) => {
                          H.apply(h);
                        }));
                    }
                for (let g of F)
                  if (void 0 !== g)
                    for (let [y, A] of g) {
                      let g = `${b}-${z(A)}-${y}`;
                      X.add(g),
                        _.rules.allvar.cache.has(g) ||
                          (_.rules.allvar.cache.add(g),
                          $(A, [`.${g}`], [], h, (h) => {
                            B.allvar.apply(h);
                          }));
                    }
              }
              if ("object" == typeof K && K) {
                let g = `${b}-i${z(K)}-css`;
                X.add(g),
                  _.rules.inline.cache.has(g) ||
                    (_.rules.inline.cache.add(g),
                    $(K, [`.${g}`], [], h, (h) => {
                      B.inline.apply(h);
                    }));
              }
              for (let h of String(U.className || "")
                .trim()
                .split(/\s+/))
                h && X.add(h);
              let Q = (q.className = [...X].join(" "));
              return {
                type: g.type,
                className: Q,
                selector: H,
                props: q,
                toString: () => Q,
                deferredInjector: F,
              };
            };
          return s(p, {
            className: b,
            selector: H,
            [ea]: g,
            toString: () => (_.rules.styled.cache.has(b) || p(), b),
          });
        },
        L = (h) => {
          let g = "",
            _ = [],
            b = {},
            y = [];
          for (let [A, , , , N, F] of h)
            for (let h in ("" === g && (g = A), _.push(A), y.push(...F), N)) {
              let g = N[h];
              (void 0 === b[h] || "undefined" !== g || F.includes(g)) &&
                (b[h] = g);
            }
          return [g, _, b, new Set(y)];
        },
        O = (h, g, _, b) => {
          let y = [];
          e: for (let [A, N, F] of h) {
            if (F) continue;
            let h,
              B = 0,
              H = !1;
            for (h in A) {
              let b = A[h],
                y = g[h];
              if (y !== b) {
                if ("object" != typeof y || !y) continue e;
                {
                  let h,
                    g,
                    A = 0;
                  for (let N in y) {
                    if (b === String(y[N])) {
                      if ("@initial" !== N) {
                        let h = N.slice(1);
                        (g = g || []).push(
                          h in _ ? _[h] : N.replace(/^@media ?/, ""),
                        ),
                          (H = !0);
                      }
                      (B += A), (h = !0);
                    }
                    ++A;
                  }
                  if (
                    (g && g.length && (N = { ["@media " + g.join(", ")]: N }),
                    !h)
                  )
                    continue e;
                }
              }
            }
            (y[B] = y[B] || []).push([b ? "cv" : `${h}-${A[h]}`, N, H]);
          }
          return y;
        },
        e_ = {},
        eb = dist_o(),
        D = (h, g) =>
          eb(h, () => (..._) => {
            let n = () => {
              for (let b of _) {
                let _ = z((b = ("object" == typeof b && b) || {}));
                if (!g.rules.global.cache.has(_)) {
                  if ((g.rules.global.cache.add(_), "@import" in b)) {
                    let h =
                      [].indexOf.call(g.sheet.cssRules, g.rules.themed.group) -
                      1;
                    for (let _ of [].concat(b["@import"]))
                      (_ = _.includes('"') || _.includes("'") ? _ : `"${_}"`),
                        g.sheet.insertRule(`@import ${_};`, h++);
                    delete b["@import"];
                  }
                  $(b, [], [], h, (h) => {
                    g.rules.global.apply(h);
                  });
                }
              }
              return "";
            };
            return s(n, { toString: n });
          }),
        ey = dist_o(),
        V = (h, g) =>
          ey(h, () => (_) => {
            let b = `${S(h.prefix)}k-${z(_)}`,
              i = () => {
                if (!g.rules.global.cache.has(b)) {
                  g.rules.global.cache.add(b);
                  let y = [];
                  $(_, [], [], h, (h) => y.push(h));
                  let A = `@keyframes ${b}{${y.join("")}}`;
                  g.rules.global.apply(A);
                }
                return b;
              };
            return s(i, {
              get name() {
                return i();
              },
              toString: i,
            });
          }),
        ex = class {
          constructor(h, g, _, b) {
            (this.token = null == h ? "" : String(h)),
              (this.value = null == g ? "" : String(g)),
              (this.scale = null == _ ? "" : String(_)),
              (this.prefix = null == b ? "" : String(b));
          }
          get computedValue() {
            return "var(" + this.variable + ")";
          }
          get variable() {
            return "--" + S(this.prefix) + S(this.scale) + this.token;
          }
          toString() {
            return this.computedValue;
          }
        },
        ew = dist_o(),
        J = (h, g) =>
          ew(h, () => (_, b) => {
            b = ("object" == typeof _ && _) || Object(b);
            let y = `.${(_ =
                (_ = "string" == typeof _ ? _ : "") ||
                `${S(h.prefix)}t-${z(b)}`)}`,
              A = {},
              N = [];
            for (let g in b)
              for (let _ in ((A[g] = {}), b[g])) {
                let y = `--${S(h.prefix)}${g}-${_}`,
                  F = k(String(b[g][_]), h.prefix, g);
                (A[g][_] = new ex(_, F, g, h.prefix)), N.push(`${y}:${F}`);
              }
            let s = () => {
              if (N.length && !g.rules.themed.cache.has(_)) {
                g.rules.themed.cache.add(_);
                let y = `${b === h.theme ? ":root," : ""}.${_}{${N.join(";")}}`;
                g.rules.themed.apply(y);
              }
              return _;
            };
            return {
              ...A,
              get className() {
                return s();
              },
              selector: y,
              toString: s,
            };
          }),
        eC = dist_o(),
        eS = dist_o();
      let eE = {
        toVector: (h, g) => (
          void 0 === h && (h = g), Array.isArray(h) ? h : [h, h]
        ),
        add: (h, g) => [h[0] + g[0], h[1] + g[1]],
        sub: (h, g) => [h[0] - g[0], h[1] - g[1]],
        addTo(h, g) {
          (h[0] += g[0]), (h[1] += g[1]);
        },
        subTo(h, g) {
          (h[0] -= g[0]), (h[1] -= g[1]);
        },
      };
      function rubberband(h, g, _) {
        return 0 === g || Math.abs(g) === 1 / 0
          ? Math.pow(h, 5 * _)
          : (h * g * _) / (g + _ * h);
      }
      function rubberbandIfOutOfBounds(h, g, _, b = 0.15) {
        return 0 === b
          ? Math.max(g, Math.min(h, _))
          : h < g
            ? -rubberband(g - h, _ - g, b) + g
            : h > _
              ? +rubberband(h - _, _ - g, b) + _
              : h;
      }
      function _defineProperty(h, g, _) {
        return (
          g in h
            ? Object.defineProperty(h, g, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (h[g] = _),
          h
        );
      }
      function ownKeys(h, g) {
        var _ = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var b = Object.getOwnPropertySymbols(h);
          g &&
            (b = b.filter(function (g) {
              return Object.getOwnPropertyDescriptor(h, g).enumerable;
            })),
            _.push.apply(_, b);
        }
        return _;
      }
      function actions_e3d93fde_esm_objectSpread2(h) {
        for (var g = 1; g < arguments.length; g++) {
          var _ = null != arguments[g] ? arguments[g] : {};
          g % 2
            ? ownKeys(Object(_), !0).forEach(function (g) {
                _defineProperty(h, g, _[g]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(_))
              : ownKeys(Object(_)).forEach(function (g) {
                  Object.defineProperty(
                    h,
                    g,
                    Object.getOwnPropertyDescriptor(_, g),
                  );
                });
        }
        return h;
      }
      let eP = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function capitalize(h) {
        return h ? h[0].toUpperCase() + h.slice(1) : "";
      }
      let eT = ["enter", "leave"],
        ej = ["gotpointercapture", "lostpointercapture"];
      function isTouch(h) {
        return "touches" in h;
      }
      function getPointerType(h) {
        return isTouch(h)
          ? "touch"
          : "pointerType" in h
            ? h.pointerType
            : "mouse";
      }
      function getValueEvent(h) {
        return isTouch(h)
          ? ("touchend" === h.type || "touchcancel" === h.type
              ? h.changedTouches
              : h.targetTouches)[0]
          : h;
      }
      function pointerId(h) {
        let g = getValueEvent(h);
        return isTouch(h) ? g.identifier : g.pointerId;
      }
      function pointerValues(h) {
        let g = getValueEvent(h);
        return [g.clientX, g.clientY];
      }
      function call(h, ...g) {
        return "function" == typeof h ? h(...g) : h;
      }
      function noop() {}
      function assignDefault(h, g) {
        return Object.assign({}, g, h || {});
      }
      let Engine = class Engine {
        constructor(h, g, _) {
          (this.ctrl = h),
            (this.args = g),
            (this.key = _),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(h) {
          this.ctrl.state[this.key] = h;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          let { state: h, shared: g, ingKey: _, args: b } = this;
          (g[_] = h._active = h.active = h._blocked = h._force = !1),
            (h._step = [!1, !1]),
            (h.intentional = !1),
            (h._movement = [0, 0]),
            (h._distance = [0, 0]),
            (h._direction = [0, 0]),
            (h._delta = [0, 0]),
            (h._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (h.args = b),
            (h.axis = void 0),
            (h.memo = void 0),
            (h.elapsedTime = 0),
            (h.direction = [0, 0]),
            (h.distance = [0, 0]),
            (h.overflow = [0, 0]),
            (h._movementBound = [!1, !1]),
            (h.velocity = [0, 0]),
            (h.movement = [0, 0]),
            (h.delta = [0, 0]),
            (h.timeStamp = 0);
        }
        start(h) {
          let g = this.state,
            _ = this.config;
          g._active ||
            (this.reset(),
            this.computeInitial(),
            (g._active = !0),
            (g.target = h.target),
            (g.currentTarget = h.currentTarget),
            (g.lastOffset = _.from ? call(_.from, g) : g.offset),
            (g.offset = g.lastOffset)),
            (g.startTime = g.timeStamp = h.timeStamp);
        }
        computeValues(h) {
          let g = this.state;
          (g._values = h), (g.values = this.config.transform(h));
        }
        computeInitial() {
          let h = this.state;
          (h._initial = h._values), (h.initial = h.values);
        }
        compute(h) {
          let { state: g, config: _, shared: b } = this;
          g.args = this.args;
          let y = 0;
          if (
            (h &&
              ((g.event = h),
              _.preventDefault && h.cancelable && g.event.preventDefault(),
              (g.type = h.type),
              (b.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (b.locked = !!document.pointerLockElement),
              Object.assign(
                b,
                (function (h) {
                  let g = {};
                  if (
                    ("buttons" in h && (g.buttons = h.buttons), "shiftKey" in h)
                  ) {
                    let { shiftKey: _, altKey: b, metaKey: y, ctrlKey: A } = h;
                    Object.assign(g, {
                      shiftKey: _,
                      altKey: b,
                      metaKey: y,
                      ctrlKey: A,
                    });
                  }
                  return g;
                })(h),
              ),
              (b.down = b.pressed = b.buttons % 2 == 1 || b.touches > 0),
              (y = h.timeStamp - g.timeStamp),
              (g.timeStamp = h.timeStamp),
              (g.elapsedTime = g.timeStamp - g.startTime)),
            g._active)
          ) {
            let h = g._delta.map(Math.abs);
            eE.addTo(g._distance, h);
          }
          this.axisIntent && this.axisIntent(h);
          let [A, N] = g._movement,
            [F, B] = _.threshold,
            { _step: H, values: U } = g;
          if (
            (_.hasCustomTransform
              ? (!1 === H[0] && (H[0] = Math.abs(A) >= F && U[0]),
                !1 === H[1] && (H[1] = Math.abs(N) >= B && U[1]))
              : (!1 === H[0] && (H[0] = Math.abs(A) >= F && Math.sign(A) * F),
                !1 === H[1] && (H[1] = Math.abs(N) >= B && Math.sign(N) * B)),
            (g.intentional = !1 !== H[0] || !1 !== H[1]),
            !g.intentional)
          )
            return;
          let K = [0, 0];
          if (_.hasCustomTransform) {
            let [h, g] = U;
            (K[0] = !1 !== H[0] ? h - H[0] : 0),
              (K[1] = !1 !== H[1] ? g - H[1] : 0);
          } else
            (K[0] = !1 !== H[0] ? A - H[0] : 0),
              (K[1] = !1 !== H[1] ? N - H[1] : 0);
          this.restrictToAxis && !g._blocked && this.restrictToAxis(K);
          let q = g.offset,
            Y = (g._active && !g._blocked) || g.active;
          Y &&
            ((g.first = g._active && !g.active),
            (g.last = !g._active && g.active),
            (g.active = b[this.ingKey] = g._active),
            h &&
              (g.first &&
                ("bounds" in _ && (g._bounds = call(_.bounds, g)),
                this.setup && this.setup()),
              (g.movement = K),
              this.computeOffset()));
          let [X, Q] = g.offset,
            [[et, en], [er, ei]] = g._bounds;
          (g.overflow = [
            X < et ? -1 : X > en ? 1 : 0,
            Q < er ? -1 : Q > ei ? 1 : 0,
          ]),
            (g._movementBound[0] =
              !!g.overflow[0] &&
              (!1 === g._movementBound[0]
                ? g._movement[0]
                : g._movementBound[0])),
            (g._movementBound[1] =
              !!g.overflow[1] &&
              (!1 === g._movementBound[1]
                ? g._movement[1]
                : g._movementBound[1]));
          let eo = (g._active && _.rubberband) || [0, 0];
          if (
            ((g.offset = (function (h, [g, _], [b, y]) {
              let [[A, N], [F, B]] = h;
              return [
                rubberbandIfOutOfBounds(g, A, N, b),
                rubberbandIfOutOfBounds(_, F, B, y),
              ];
            })(g._bounds, g.offset, eo)),
            (g.delta = eE.sub(g.offset, q)),
            this.computeMovement(),
            Y && (!g.last || y > 32))
          ) {
            g.delta = eE.sub(g.offset, q);
            let h = g.delta.map(Math.abs);
            eE.addTo(g.distance, h),
              (g.direction = g.delta.map(Math.sign)),
              (g._direction = g._delta.map(Math.sign)),
              !g.first && y > 0 && (g.velocity = [h[0] / y, h[1] / y]);
          }
        }
        emit() {
          let h = this.state,
            g = this.shared,
            _ = this.config;
          if (
            (h._active || this.clean(),
            (h._blocked || !h.intentional) && !h._force && !_.triggerAllEvents)
          )
            return;
          let b = this.handler(
            actions_e3d93fde_esm_objectSpread2(
              actions_e3d93fde_esm_objectSpread2(
                actions_e3d93fde_esm_objectSpread2({}, g),
                h,
              ),
              {},
              { [this.aliasKey]: h.values },
            ),
          );
          void 0 !== b && (h.memo = b);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      };
      let CoordinatesEngine = class CoordinatesEngine extends Engine {
        constructor(...h) {
          super(...h), _defineProperty(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = eE.add(
            this.state.lastOffset,
            this.state.movement,
          );
        }
        computeMovement() {
          this.state.movement = eE.sub(
            this.state.offset,
            this.state.lastOffset,
          );
        }
        axisIntent(h) {
          let g = this.state,
            _ = this.config;
          if (!g.axis && h) {
            let b =
              "object" == typeof _.axisThreshold
                ? _.axisThreshold[getPointerType(h)]
                : _.axisThreshold;
            g.axis = (function ([h, g], _) {
              let b = Math.abs(h),
                y = Math.abs(g);
              return b > y && b > _ ? "x" : y > b && y > _ ? "y" : void 0;
            })(g._movement, b);
          }
          g._blocked =
            ((_.lockDirection || !!_.axis) && !g.axis) ||
            (!!_.axis && _.axis !== g.axis);
        }
        restrictToAxis(h) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                h[1] = 0;
                break;
              case "y":
                h[0] = 0;
            }
        }
      };
      let identity = (h) => h,
        ek = {
          enabled: (h = !0) => h,
          eventOptions: (h, g, _) =>
            actions_e3d93fde_esm_objectSpread2(
              actions_e3d93fde_esm_objectSpread2({}, _.shared.eventOptions),
              h,
            ),
          preventDefault: (h = !1) => h,
          triggerAllEvents: (h = !1) => h,
          rubberband(h = 0) {
            switch (h) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return eE.toVector(h);
            }
          },
          from: (h) =>
            "function" == typeof h ? h : null != h ? eE.toVector(h) : void 0,
          transform(h, g, _) {
            let b = h || _.shared.transform;
            return (this.hasCustomTransform = !!b), b || identity;
          },
          threshold: (h) => eE.toVector(h, 0),
        },
        e$ = 0,
        eR = actions_e3d93fde_esm_objectSpread2(
          actions_e3d93fde_esm_objectSpread2({}, ek),
          {},
          {
            axis(h, g, { axis: _ }) {
              if (((this.lockDirection = "lock" === _), !this.lockDirection))
                return _;
            },
            axisThreshold: (h = e$) => h,
            bounds(h = {}) {
              if ("function" == typeof h) return (g) => eR.bounds(h(g));
              if ("current" in h) return () => h.current;
              if ("function" == typeof HTMLElement && h instanceof HTMLElement)
                return h;
              let {
                left: g = -1 / 0,
                right: _ = 1 / 0,
                top: b = -1 / 0,
                bottom: y = 1 / 0,
              } = h;
              return [
                [g, _],
                [b, y],
              ];
            },
          },
        ),
        eA = {
          ArrowRight: (h = 1) => [10 * h, 0],
          ArrowLeft: (h = 1) => [-10 * h, 0],
          ArrowUp: (h = 1) => [0, -10 * h],
          ArrowDown: (h = 1) => [0, 10 * h],
        },
        eO =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement;
      function isTouchScreen() {
        return (
          (eO && "ontouchstart" in window) ||
          (eO && window.navigator.maxTouchPoints > 1)
        );
      }
      let eD = {
          isBrowser: eO,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (h) {
              return !1;
            }
          })(),
          touch: isTouchScreen(),
          touchscreen: isTouchScreen(),
          pointer: eO && "onpointerdown" in window,
          pointerLock: eO && "exitPointerLock" in window.document,
        },
        eL = { mouse: 0, touch: 0, pen: 8 },
        eM = actions_e3d93fde_esm_objectSpread2(
          actions_e3d93fde_esm_objectSpread2({}, eR),
          {},
          {
            device(
              h,
              g,
              { pointer: { touch: _ = !1, lock: b = !1, mouse: y = !1 } = {} },
            ) {
              return ((this.pointerLock = b && eD.pointerLock), eD.touch && _)
                ? "touch"
                : this.pointerLock
                  ? "mouse"
                  : eD.pointer && !y
                    ? "pointer"
                    : eD.touch
                      ? "touch"
                      : "mouse";
            },
            preventScrollAxis(h, g, { preventScroll: _ }) {
              if (
                ((this.preventScrollDelay =
                  "number" == typeof _
                    ? _
                    : _ || (void 0 === _ && h)
                      ? 250
                      : void 0),
                eD.touchscreen && !1 !== _)
              )
                return h || (void 0 !== _ ? "y" : void 0);
            },
            pointerCapture(
              h,
              g,
              {
                pointer: { capture: _ = !0, buttons: b = 1, keys: y = !0 } = {},
              },
            ) {
              return (
                (this.pointerButtons = b),
                (this.keys = y),
                !this.pointerLock && "pointer" === this.device && _
              );
            },
            threshold(
              h,
              g,
              { filterTaps: _ = !1, tapsThreshold: b = 3, axis: y },
            ) {
              let A = eE.toVector(h, _ ? b : y ? 1 : 0);
              return (this.filterTaps = _), (this.tapsThreshold = b), A;
            },
            swipe({
              velocity: h = 0.5,
              distance: g = 50,
              duration: _ = 250,
            } = {}) {
              return {
                velocity: this.transform(eE.toVector(h)),
                distance: this.transform(eE.toVector(g)),
                duration: _,
              };
            },
            delay(h = 0) {
              switch (h) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return h;
              }
            },
            axisThreshold: (h) =>
              h
                ? actions_e3d93fde_esm_objectSpread2(
                    actions_e3d93fde_esm_objectSpread2({}, eL),
                    h,
                  )
                : eL,
          },
        );
      actions_e3d93fde_esm_objectSpread2(
        actions_e3d93fde_esm_objectSpread2({}, ek),
        {},
        {
          device(h, g, { shared: _, pointer: { touch: b = !1 } = {} }) {
            if (_.target && !eD.touch && eD.gesture) return "gesture";
            if (eD.touch && b) return "touch";
            if (eD.touchscreen) {
              if (eD.pointer) return "pointer";
              if (eD.touch) return "touch";
            }
          },
          bounds(h, g, { scaleBounds: _ = {}, angleBounds: b = {} }) {
            let _scaleBounds = (h) => {
                let g = assignDefault(call(_, h), { min: -1 / 0, max: 1 / 0 });
                return [g.min, g.max];
              },
              _angleBounds = (h) => {
                let g = assignDefault(call(b, h), { min: -1 / 0, max: 1 / 0 });
                return [g.min, g.max];
              };
            return "function" != typeof _ && "function" != typeof b
              ? [_scaleBounds(), _angleBounds()]
              : (h) => [_scaleBounds(h), _angleBounds(h)];
          },
          threshold(h, g, _) {
            this.lockDirection = "lock" === _.axis;
            let b = eE.toVector(h, this.lockDirection ? [0.1, 3] : 0);
            return b;
          },
          modifierKey: (h) => (void 0 === h ? "ctrlKey" : h),
          pinchOnWheel: (h = !0) => h,
        },
      ),
        actions_e3d93fde_esm_objectSpread2(
          actions_e3d93fde_esm_objectSpread2({}, eR),
          {},
          { mouseOnly: (h = !0) => h },
        ),
        actions_e3d93fde_esm_objectSpread2(
          actions_e3d93fde_esm_objectSpread2({}, eR),
          {},
          { mouseOnly: (h = !0) => h },
        );
      let eI = new Map(),
        eN = new Map(),
        eV = {
          key: "drag",
          engine: class extends CoordinatesEngine {
            constructor(...h) {
              super(...h), _defineProperty(this, "ingKey", "dragging");
            }
            reset() {
              super.reset();
              let h = this.state;
              (h._pointerId = void 0),
                (h._pointerActive = !1),
                (h._keyboardActive = !1),
                (h._preventScroll = !1),
                (h._delayed = !1),
                (h.swipe = [0, 0]),
                (h.tap = !1),
                (h.canceled = !1),
                (h.cancel = this.cancel.bind(this));
            }
            setup() {
              let h = this.state;
              if (h._bounds instanceof HTMLElement) {
                let g = h._bounds.getBoundingClientRect(),
                  _ = h.currentTarget.getBoundingClientRect(),
                  b = {
                    left: g.left - _.left + h.offset[0],
                    right: g.right - _.right + h.offset[0],
                    top: g.top - _.top + h.offset[1],
                    bottom: g.bottom - _.bottom + h.offset[1],
                  };
                h._bounds = eR.bounds(b);
              }
            }
            cancel() {
              let h = this.state;
              h.canceled ||
                ((h.canceled = !0),
                (h._active = !1),
                setTimeout(() => {
                  this.compute(), this.emit();
                }, 0));
            }
            setActive() {
              this.state._active =
                this.state._pointerActive || this.state._keyboardActive;
            }
            clean() {
              this.pointerClean(),
                (this.state._pointerActive = !1),
                (this.state._keyboardActive = !1),
                super.clean();
            }
            pointerDown(h) {
              let g = this.config,
                _ = this.state;
              if (
                null != h.buttons &&
                (Array.isArray(g.pointerButtons)
                  ? !g.pointerButtons.includes(h.buttons)
                  : -1 !== g.pointerButtons && g.pointerButtons !== h.buttons)
              )
                return;
              let b = this.ctrl.setEventIds(h);
              g.pointerCapture && h.target.setPointerCapture(h.pointerId),
                (b && b.size > 1 && _._pointerActive) ||
                  (this.start(h),
                  this.setupPointer(h),
                  (_._pointerId = pointerId(h)),
                  (_._pointerActive = !0),
                  this.computeValues(pointerValues(h)),
                  this.computeInitial(),
                  g.preventScrollAxis && "mouse" !== getPointerType(h)
                    ? ((_._active = !1), this.setupScrollPrevention(h))
                    : g.delay > 0
                      ? (this.setupDelayTrigger(h),
                        g.triggerAllEvents && (this.compute(h), this.emit()))
                      : this.startPointerDrag(h));
            }
            startPointerDrag(h) {
              let g = this.state;
              (g._active = !0),
                (g._preventScroll = !0),
                (g._delayed = !1),
                this.compute(h),
                this.emit();
            }
            pointerMove(h) {
              let g = this.state,
                _ = this.config;
              if (
                !g._pointerActive ||
                (g.type === h.type && h.timeStamp === g.timeStamp)
              )
                return;
              let b = pointerId(h);
              if (void 0 !== g._pointerId && b !== g._pointerId) return;
              let y = pointerValues(h);
              if (
                (document.pointerLockElement === h.target
                  ? (g._delta = [h.movementX, h.movementY])
                  : ((g._delta = eE.sub(y, g._values)), this.computeValues(y)),
                eE.addTo(g._movement, g._delta),
                this.compute(h),
                g._delayed && g.intentional)
              ) {
                this.timeoutStore.remove("dragDelay"),
                  (g.active = !1),
                  this.startPointerDrag(h);
                return;
              }
              if (_.preventScrollAxis && !g._preventScroll) {
                if (!g.axis) return;
                if (
                  g.axis === _.preventScrollAxis ||
                  "xy" === _.preventScrollAxis
                ) {
                  (g._active = !1), this.clean();
                  return;
                }
                this.timeoutStore.remove("startPointerDrag"),
                  this.startPointerDrag(h);
                return;
              }
              this.emit();
            }
            pointerUp(h) {
              this.ctrl.setEventIds(h);
              try {
                this.config.pointerCapture &&
                  h.target.hasPointerCapture(h.pointerId) &&
                  h.target.releasePointerCapture(h.pointerId);
              } catch (h) {}
              let g = this.state,
                _ = this.config;
              if (!g._active || !g._pointerActive) return;
              let b = pointerId(h);
              if (void 0 !== g._pointerId && b !== g._pointerId) return;
              (this.state._pointerActive = !1),
                this.setActive(),
                this.compute(h);
              let [y, A] = g._distance;
              if (
                ((g.tap = y <= _.tapsThreshold && A <= _.tapsThreshold),
                g.tap && _.filterTaps)
              )
                g._force = !0;
              else {
                let [h, b] = g.direction,
                  [y, A] = g.velocity,
                  [N, F] = g.movement,
                  [B, H] = _.swipe.velocity,
                  [U, K] = _.swipe.distance,
                  q = _.swipe.duration;
                g.elapsedTime < q &&
                  (Math.abs(y) > B && Math.abs(N) > U && (g.swipe[0] = h),
                  Math.abs(A) > H && Math.abs(F) > K && (g.swipe[1] = b));
              }
              this.emit();
            }
            pointerClick(h) {
              !this.state.tap &&
                h.detail > 0 &&
                (h.preventDefault(), h.stopPropagation());
            }
            setupPointer(h) {
              let g = this.config,
                _ = g.device;
              g.pointerLock && h.currentTarget.requestPointerLock(),
                g.pointerCapture ||
                  (this.eventStore.add(
                    this.sharedConfig.window,
                    _,
                    "change",
                    this.pointerMove.bind(this),
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    _,
                    "end",
                    this.pointerUp.bind(this),
                  ),
                  this.eventStore.add(
                    this.sharedConfig.window,
                    _,
                    "cancel",
                    this.pointerUp.bind(this),
                  ));
            }
            pointerClean() {
              this.config.pointerLock &&
                document.pointerLockElement === this.state.currentTarget &&
                document.exitPointerLock();
            }
            preventScroll(h) {
              this.state._preventScroll && h.cancelable && h.preventDefault();
            }
            setupScrollPrevention(h) {
              (this.state._preventScroll = !1),
                "persist" in h && "function" == typeof h.persist && h.persist();
              let g = this.eventStore.add(
                this.sharedConfig.window,
                "touch",
                "change",
                this.preventScroll.bind(this),
                { passive: !1 },
              );
              this.eventStore.add(this.sharedConfig.window, "touch", "end", g),
                this.eventStore.add(
                  this.sharedConfig.window,
                  "touch",
                  "cancel",
                  g,
                ),
                this.timeoutStore.add(
                  "startPointerDrag",
                  this.startPointerDrag.bind(this),
                  this.config.preventScrollDelay,
                  h,
                );
            }
            setupDelayTrigger(h) {
              (this.state._delayed = !0),
                this.timeoutStore.add(
                  "dragDelay",
                  () => {
                    (this.state._step = [0, 0]), this.startPointerDrag(h);
                  },
                  this.config.delay,
                );
            }
            keyDown(h) {
              let g = eA[h.key];
              if (g) {
                let _ = this.state,
                  b = h.shiftKey ? 10 : h.altKey ? 0.1 : 1;
                this.start(h),
                  (_._delta = g(b)),
                  (_._keyboardActive = !0),
                  eE.addTo(_._movement, _._delta),
                  this.compute(h),
                  this.emit();
              }
            }
            keyUp(h) {
              h.key in eA &&
                ((this.state._keyboardActive = !1),
                this.setActive(),
                this.compute(h),
                this.emit());
            }
            bind(h) {
              let g = this.config.device;
              h(g, "start", this.pointerDown.bind(this)),
                this.config.pointerCapture &&
                  (h(g, "change", this.pointerMove.bind(this)),
                  h(g, "end", this.pointerUp.bind(this)),
                  h(g, "cancel", this.pointerUp.bind(this)),
                  h("lostPointerCapture", "", this.pointerUp.bind(this))),
                this.config.keys &&
                  (h("key", "down", this.keyDown.bind(this)),
                  h("key", "up", this.keyUp.bind(this))),
                this.config.filterTaps &&
                  h("click", "", this.pointerClick.bind(this), {
                    capture: !0,
                    passive: !1,
                  });
            }
          },
          resolver: eM,
        },
        eF = {
          target(h) {
            if (h) return () => ("current" in h ? h.current : h);
          },
          enabled: (h = !0) => h,
          window: (h = eD.isBrowser ? window : void 0) => h,
          eventOptions: ({ passive: h = !0, capture: g = !1 } = {}) => ({
            passive: h,
            capture: g,
          }),
          transform: (h) => h,
        },
        eB = ["target", "eventOptions", "window", "enabled", "transform"];
      function resolveWith(h = {}, g) {
        let _ = {};
        for (let [b, y] of Object.entries(g))
          switch (typeof y) {
            case "function":
              _[b] = y.call(_, h[b], b, h);
              break;
            case "object":
              _[b] = resolveWith(h[b], y);
              break;
            case "boolean":
              y && (_[b] = h[b]);
          }
        return _;
      }
      let EventStore = class EventStore {
        constructor(h, g) {
          _defineProperty(this, "_listeners", new Set()),
            (this._ctrl = h),
            (this._gestureKey = g);
        }
        add(h, g, _, b, y) {
          let A = this._listeners,
            N = (function (h, g = "") {
              let _ = eP[h],
                b = (_ && _[g]) || g;
              return h + b;
            })(g, _),
            F = this._gestureKey
              ? this._ctrl.config[this._gestureKey].eventOptions
              : {},
            B = actions_e3d93fde_esm_objectSpread2(
              actions_e3d93fde_esm_objectSpread2({}, F),
              y,
            );
          h.addEventListener(N, b, B);
          let remove = () => {
            h.removeEventListener(N, b, B), A.delete(remove);
          };
          return A.add(remove), remove;
        }
        clean() {
          this._listeners.forEach((h) => h()), this._listeners.clear();
        }
      };
      let TimeoutStore = class TimeoutStore {
        constructor() {
          _defineProperty(this, "_timeouts", new Map());
        }
        add(h, g, _ = 140, ...b) {
          this.remove(h), this._timeouts.set(h, window.setTimeout(g, _, ...b));
        }
        remove(h) {
          let g = this._timeouts.get(h);
          g && window.clearTimeout(g);
        }
        clean() {
          this._timeouts.forEach((h) => void window.clearTimeout(h)),
            this._timeouts.clear();
        }
      };
      let Controller = class Controller {
        constructor(h) {
          _defineProperty(this, "gestures", new Set()),
            _defineProperty(this, "_targetEventStore", new EventStore(this)),
            _defineProperty(this, "gestureEventStores", {}),
            _defineProperty(this, "gestureTimeoutStores", {}),
            _defineProperty(this, "handlers", {}),
            _defineProperty(this, "config", {}),
            _defineProperty(this, "pointerIds", new Set()),
            _defineProperty(this, "touchIds", new Set()),
            _defineProperty(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            h.drag && setupGesture(this, "drag"),
            h.wheel && setupGesture(this, "wheel"),
            h.scroll && setupGesture(this, "scroll"),
            h.move && setupGesture(this, "move"),
            h.pinch && setupGesture(this, "pinch"),
            h.hover && setupGesture(this, "hover");
        }
        setEventIds(h) {
          return isTouch(h)
            ? ((this.touchIds = new Set(
                Array.from(h.touches)
                  .filter((g) => {
                    var _, b;
                    return (
                      g.target === h.currentTarget ||
                      (null === (_ = h.currentTarget) || void 0 === _
                        ? void 0
                        : null === (b = _.contains) || void 0 === b
                          ? void 0
                          : b.call(_, g.target))
                    );
                  })
                  .map((h) => h.identifier),
              )),
              this.touchIds)
            : "pointerId" in h
              ? ("pointerup" === h.type || "pointercancel" === h.type
                  ? this.pointerIds.delete(h.pointerId)
                  : "pointerdown" === h.type &&
                    this.pointerIds.add(h.pointerId),
                this.pointerIds)
              : void 0;
        }
        applyHandlers(h, g) {
          (this.handlers = h), (this.nativeHandlers = g);
        }
        applyConfig(h, g) {
          this.config = (function (h, g, _ = {}) {
            let {
                target: b,
                eventOptions: y,
                window: A,
                enabled: N,
                transform: F,
              } = h,
              B = (function (h, g) {
                if (null == h) return {};
                var _,
                  b,
                  y = (function (h, g) {
                    if (null == h) return {};
                    var _,
                      b,
                      y = {},
                      A = Object.keys(h);
                    for (b = 0; b < A.length; b++)
                      (_ = A[b]), g.indexOf(_) >= 0 || (y[_] = h[_]);
                    return y;
                  })(h, g);
                if (Object.getOwnPropertySymbols) {
                  var A = Object.getOwnPropertySymbols(h);
                  for (b = 0; b < A.length; b++)
                    (_ = A[b]),
                      !(g.indexOf(_) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(h, _) &&
                        (y[_] = h[_]);
                }
                return y;
              })(h, eB);
            if (
              ((_.shared = resolveWith(
                {
                  target: b,
                  eventOptions: y,
                  window: A,
                  enabled: N,
                  transform: F,
                },
                eF,
              )),
              g)
            ) {
              let h = eN.get(g);
              _[g] = resolveWith(
                actions_e3d93fde_esm_objectSpread2({ shared: _.shared }, B),
                h,
              );
            } else
              for (let h in B) {
                let g = eN.get(h);
                g &&
                  (_[h] = resolveWith(
                    actions_e3d93fde_esm_objectSpread2(
                      { shared: _.shared },
                      B[h],
                    ),
                    g,
                  ));
              }
            return _;
          })(h, g, this.config);
        }
        clean() {
          for (let h of (this._targetEventStore.clean(), this.gestures))
            this.gestureEventStores[h].clean(),
              this.gestureTimeoutStores[h].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...h) {
          let g;
          let _ = this.config.shared,
            b = {};
          if (!_.target || (g = _.target())) {
            if (_.enabled) {
              for (let _ of this.gestures) {
                let y = this.config[_],
                  A = bindToProps(b, y.eventOptions, !!g);
                if (y.enabled) {
                  let g = eI.get(_);
                  new g(this, h, _).bind(A);
                }
              }
              let y = bindToProps(b, _.eventOptions, !!g);
              for (let g in this.nativeHandlers)
                y(
                  g,
                  "",
                  (_) =>
                    this.nativeHandlers[g](
                      actions_e3d93fde_esm_objectSpread2(
                        actions_e3d93fde_esm_objectSpread2(
                          {},
                          this.state.shared,
                        ),
                        {},
                        { event: _, args: h },
                      ),
                    ),
                  void 0,
                  !0,
                );
            }
            for (let h in b)
              b[h] = (function (...h) {
                return 0 === h.length
                  ? noop
                  : 1 === h.length
                    ? h[0]
                    : function () {
                        let g;
                        for (let _ of h) g = _.apply(this, arguments) || g;
                        return g;
                      };
              })(...b[h]);
            if (!g) return b;
            for (let h in b) {
              let {
                device: _,
                capture: y,
                passive: A,
              } = (function (h) {
                let g = h.substring(2).toLowerCase(),
                  _ = !!~g.indexOf("passive");
                _ && (g = g.replace("passive", ""));
                let b = ej.includes(g) ? "capturecapture" : "capture",
                  y = !!~g.indexOf(b);
                return (
                  y && (g = g.replace("capture", "")),
                  { device: g, capture: y, passive: _ }
                );
              })(h);
              this._targetEventStore.add(g, _, "", b[h], {
                capture: y,
                passive: A,
              });
            }
          }
        }
      };
      function setupGesture(h, g) {
        h.gestures.add(g),
          (h.gestureEventStores[g] = new EventStore(h, g)),
          (h.gestureTimeoutStores[g] = new TimeoutStore());
      }
      let bindToProps =
        (h, g, _) =>
        (b, y, A, N = {}, F = !1) => {
          var B, H;
          let U = null !== (B = N.capture) && void 0 !== B ? B : g.capture,
            K = null !== (H = N.passive) && void 0 !== H ? H : g.passive,
            q = F
              ? b
              : (function (h, g = "", _ = !1) {
                  let b = eP[h],
                    y = (b && b[g]) || g;
                  return (
                    "on" +
                    capitalize(h) +
                    capitalize(y) +
                    (!(function (h = !1, g) {
                      return h && !eT.includes(g);
                    })(_, y)
                      ? ""
                      : "Capture")
                  );
                })(b, y, U);
          _ && K && (q += "Passive"), (h[q] = h[q] || []), h[q].push(A);
        };
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        h,
        g,
        { checkForDefaultPrevented: _ = !0 } = {},
      ) {
        return function (b) {
          if ((null == h || h(b), !1 === _ || !b.defaultPrevented))
            return null == g ? void 0 : g(b);
        };
      }
      function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...h) {
        return (0, F.useCallback)(
          (function (...h) {
            return (g) =>
              h.forEach((h) => {
                "function" == typeof h ? h(g) : null != h && (h.current = g);
              });
          })(...h),
          h,
        );
      }
      var ez = _(13024);
      let eH = (null == globalThis ? void 0 : globalThis.document)
          ? F.useLayoutEffect
          : () => {},
        eW = B["useId".toString()] || (() => void 0),
        eU = 0;
      function floating_ui_core_browser_min_t(h) {
        return h.split("-")[1];
      }
      function floating_ui_core_browser_min_e(h) {
        return "y" === h ? "height" : "width";
      }
      function floating_ui_core_browser_min_n(h) {
        return h.split("-")[0];
      }
      function floating_ui_core_browser_min_o(h) {
        return ["top", "bottom"].includes(floating_ui_core_browser_min_n(h))
          ? "x"
          : "y";
      }
      function floating_ui_core_browser_min_i(h, g, _) {
        let b,
          { reference: y, floating: A } = h,
          N = y.x + y.width / 2 - A.width / 2,
          F = y.y + y.height / 2 - A.height / 2,
          B = floating_ui_core_browser_min_o(g),
          H = floating_ui_core_browser_min_e(B),
          U = y[H] / 2 - A[H] / 2,
          K = "x" === B;
        switch (floating_ui_core_browser_min_n(g)) {
          case "top":
            b = { x: N, y: y.y - A.height };
            break;
          case "bottom":
            b = { x: N, y: y.y + y.height };
            break;
          case "right":
            b = { x: y.x + y.width, y: F };
            break;
          case "left":
            b = { x: y.x - A.width, y: F };
            break;
          default:
            b = { x: y.x, y: y.y };
        }
        switch (floating_ui_core_browser_min_t(g)) {
          case "start":
            b[B] -= U * (_ && K ? -1 : 1);
            break;
          case "end":
            b[B] += U * (_ && K ? -1 : 1);
        }
        return b;
      }
      let floating_ui_core_browser_min_r = async (h, g, _) => {
        let {
            placement: b = "bottom",
            strategy: y = "absolute",
            middleware: A = [],
            platform: N,
          } = _,
          F = A.filter(Boolean),
          B = await (null == N.isRTL ? void 0 : N.isRTL(g)),
          H = await N.getElementRects({
            reference: h,
            floating: g,
            strategy: y,
          }),
          { x: U, y: K } = floating_ui_core_browser_min_i(H, b, B),
          q = b,
          Y = {},
          X = 0;
        for (let _ = 0; _ < F.length; _++) {
          let { name: A, fn: Q } = F[_],
            {
              x: et,
              y: en,
              data: er,
              reset: ei,
            } = await Q({
              x: U,
              y: K,
              initialPlacement: b,
              placement: q,
              strategy: y,
              middlewareData: Y,
              rects: H,
              platform: N,
              elements: { reference: h, floating: g },
            });
          (U = null != et ? et : U),
            (K = null != en ? en : K),
            (Y = { ...Y, [A]: { ...Y[A], ...er } }),
            ei &&
              X <= 50 &&
              (X++,
              "object" == typeof ei &&
                (ei.placement && (q = ei.placement),
                ei.rects &&
                  (H =
                    !0 === ei.rects
                      ? await N.getElementRects({
                          reference: h,
                          floating: g,
                          strategy: y,
                        })
                      : ei.rects),
                ({ x: U, y: K } = floating_ui_core_browser_min_i(H, q, B))),
              (_ = -1));
        }
        return { x: U, y: K, placement: q, strategy: y, middlewareData: Y };
      };
      function floating_ui_core_browser_min_a(h, g) {
        return "function" == typeof h ? h(g) : h;
      }
      function floating_ui_core_browser_min_l(h) {
        return "number" != typeof h
          ? { top: 0, right: 0, bottom: 0, left: 0, ...h }
          : { top: h, right: h, bottom: h, left: h };
      }
      function floating_ui_core_browser_min_s(h) {
        return {
          ...h,
          top: h.y,
          left: h.x,
          right: h.x + h.width,
          bottom: h.y + h.height,
        };
      }
      async function floating_ui_core_browser_min_c(h, g) {
        var _;
        void 0 === g && (g = {});
        let { x: b, y: y, platform: A, rects: N, elements: F, strategy: B } = h,
          {
            boundary: H = "clippingAncestors",
            rootBoundary: U = "viewport",
            elementContext: K = "floating",
            altBoundary: q = !1,
            padding: Y = 0,
          } = floating_ui_core_browser_min_a(g, h),
          X = floating_ui_core_browser_min_l(Y),
          Q = F[q ? ("floating" === K ? "reference" : "floating") : K],
          et = floating_ui_core_browser_min_s(
            await A.getClippingRect({
              element:
                null ==
                  (_ = await (null == A.isElement ? void 0 : A.isElement(Q))) ||
                _
                  ? Q
                  : Q.contextElement ||
                    (await (null == A.getDocumentElement
                      ? void 0
                      : A.getDocumentElement(F.floating))),
              boundary: H,
              rootBoundary: U,
              strategy: B,
            }),
          ),
          en = "floating" === K ? { ...N.floating, x: b, y: y } : N.reference,
          er = await (null == A.getOffsetParent
            ? void 0
            : A.getOffsetParent(F.floating)),
          ei = ((await (null == A.isElement ? void 0 : A.isElement(er))) &&
            (await (null == A.getScale ? void 0 : A.getScale(er)))) || {
            x: 1,
            y: 1,
          },
          eo = floating_ui_core_browser_min_s(
            A.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await A.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: en,
                  offsetParent: er,
                  strategy: B,
                })
              : en,
          );
        return {
          top: (et.top - eo.top + X.top) / ei.y,
          bottom: (eo.bottom - et.bottom + X.bottom) / ei.y,
          left: (et.left - eo.left + X.left) / ei.x,
          right: (eo.right - et.right + X.right) / ei.x,
        };
      }
      let eZ = Math.min,
        eG = Math.max,
        floating_ui_core_browser_min_g = (h) => ({
          name: "arrow",
          options: h,
          async fn(g) {
            let {
                x: _,
                y: b,
                placement: y,
                rects: A,
                platform: N,
                elements: F,
              } = g,
              { element: B, padding: H = 0 } =
                floating_ui_core_browser_min_a(h, g) || {};
            if (null == B) return {};
            let U = floating_ui_core_browser_min_l(H),
              K = { x: _, y: b },
              q = floating_ui_core_browser_min_o(y),
              Y = floating_ui_core_browser_min_e(q),
              X = await N.getDimensions(B),
              Q = "y" === q,
              et = Q ? "clientHeight" : "clientWidth",
              en = A.reference[Y] + A.reference[q] - K[q] - A.floating[Y],
              er = K[q] - A.reference[q],
              ei = await (null == N.getOffsetParent
                ? void 0
                : N.getOffsetParent(B)),
              eo = ei ? ei[et] : 0;
            (eo && (await (null == N.isElement ? void 0 : N.isElement(ei)))) ||
              (eo = F.floating[et] || A.floating[Y]);
            let ea = eo / 2 - X[Y] / 2 - 1,
              es = eZ(U[Q ? "top" : "left"], ea),
              el = eZ(U[Q ? "bottom" : "right"], ea),
              eu = eo - X[Y] - el,
              ec = eo / 2 - X[Y] / 2 + (en / 2 - er / 2),
              ed = eG(es, eZ(ec, eu)),
              ef =
                null != floating_ui_core_browser_min_t(y) &&
                ec != ed &&
                A.reference[Y] / 2 - (ec < es ? es : el) - X[Y] / 2 < 0
                  ? ec < es
                    ? es - ec
                    : eu - ec
                  : 0;
            return {
              [q]: K[q] - ef,
              data: { [q]: ed, centerOffset: ec - ed + ef },
            };
          },
        }),
        eK = ["top", "right", "bottom", "left"],
        eq =
          (eK.reduce((h, g) => h.concat(g, g + "-start", g + "-end"), []),
          { left: "right", right: "left", bottom: "top", top: "bottom" });
      function floating_ui_core_browser_min_y(h) {
        return h.replace(/left|right|bottom|top/g, (h) => eq[h]);
      }
      let eY = { start: "end", end: "start" };
      function floating_ui_core_browser_min_v(h) {
        return h.replace(/start|end/g, (h) => eY[h]);
      }
      function floating_ui_core_browser_min_R(h, g) {
        return {
          top: h.top - g.height,
          right: h.right - g.width,
          bottom: h.bottom - g.height,
          left: h.left - g.width,
        };
      }
      function floating_ui_core_browser_min_P(h) {
        return eK.some((g) => h[g] >= 0);
      }
      function floating_ui_core_browser_min_k(h) {
        return "x" === h ? "y" : "x";
      }
      function floating_ui_dom_browser_min_n(h) {
        var g;
        return (
          (null == h || null == (g = h.ownerDocument)
            ? void 0
            : g.defaultView) || window
        );
      }
      function floating_ui_dom_browser_min_o(h) {
        return floating_ui_dom_browser_min_n(h).getComputedStyle(h);
      }
      function floating_ui_dom_browser_min_i(h) {
        return h instanceof floating_ui_dom_browser_min_n(h).Node;
      }
      function floating_ui_dom_browser_min_r(h) {
        return floating_ui_dom_browser_min_i(h)
          ? (h.nodeName || "").toLowerCase()
          : "#document";
      }
      function floating_ui_dom_browser_min_c(h) {
        return (
          h instanceof HTMLElement ||
          h instanceof floating_ui_dom_browser_min_n(h).HTMLElement
        );
      }
      function floating_ui_dom_browser_min_l(h) {
        return (
          "undefined" != typeof ShadowRoot &&
          (h instanceof floating_ui_dom_browser_min_n(h).ShadowRoot ||
            h instanceof ShadowRoot)
        );
      }
      function floating_ui_dom_browser_min_s(h) {
        let {
          overflow: g,
          overflowX: _,
          overflowY: b,
          display: y,
        } = floating_ui_dom_browser_min_o(h);
        return (
          /auto|scroll|overlay|hidden|clip/.test(g + b + _) &&
          !["inline", "contents"].includes(y)
        );
      }
      function floating_ui_dom_browser_min_u(h) {
        let g = floating_ui_dom_browser_min_a(),
          _ = floating_ui_dom_browser_min_o(h);
        return (
          "none" !== _.transform ||
          "none" !== _.perspective ||
          (!!_.containerType && "normal" !== _.containerType) ||
          (!g && !!_.backdropFilter && "none" !== _.backdropFilter) ||
          (!g && !!_.filter && "none" !== _.filter) ||
          ["transform", "perspective", "filter"].some((h) =>
            (_.willChange || "").includes(h),
          ) ||
          ["paint", "layout", "strict", "content"].some((h) =>
            (_.contain || "").includes(h),
          )
        );
      }
      function floating_ui_dom_browser_min_a() {
        return (
          !("undefined" == typeof CSS || !CSS.supports) &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function floating_ui_dom_browser_min_d(h) {
        return ["html", "body", "#document"].includes(
          floating_ui_dom_browser_min_r(h),
        );
      }
      let eX = Math.min,
        eJ = Math.max,
        eQ = Math.round,
        e0 = Math.floor,
        floating_ui_dom_browser_min_y = (h) => ({ x: h, y: h });
      function floating_ui_dom_browser_min_w(h) {
        let g = floating_ui_dom_browser_min_o(h),
          _ = parseFloat(g.width) || 0,
          b = parseFloat(g.height) || 0,
          y = floating_ui_dom_browser_min_c(h),
          A = y ? h.offsetWidth : _,
          N = y ? h.offsetHeight : b,
          F = eQ(_) !== A || eQ(b) !== N;
        return F && ((_ = A), (b = N)), { width: _, height: b, $: F };
      }
      function floating_ui_dom_browser_min_x(h) {
        return (
          h instanceof Element ||
          h instanceof floating_ui_dom_browser_min_n(h).Element
        );
      }
      function floating_ui_dom_browser_min_v(h) {
        return floating_ui_dom_browser_min_x(h) ? h : h.contextElement;
      }
      function floating_ui_dom_browser_min_b(h) {
        let g = floating_ui_dom_browser_min_v(h);
        if (!floating_ui_dom_browser_min_c(g))
          return floating_ui_dom_browser_min_y(1);
        let _ = g.getBoundingClientRect(),
          { width: b, height: y, $: A } = floating_ui_dom_browser_min_w(g),
          N = (A ? eQ(_.width) : _.width) / b,
          F = (A ? eQ(_.height) : _.height) / y;
        return (
          (N && Number.isFinite(N)) || (N = 1),
          (F && Number.isFinite(F)) || (F = 1),
          { x: N, y: F }
        );
      }
      let e1 = floating_ui_dom_browser_min_y(0);
      function floating_ui_dom_browser_min_T(h) {
        let g = floating_ui_dom_browser_min_n(h);
        return floating_ui_dom_browser_min_a() && g.visualViewport
          ? { x: g.visualViewport.offsetLeft, y: g.visualViewport.offsetTop }
          : e1;
      }
      function floating_ui_dom_browser_min_R(h, g, _, b) {
        var y;
        void 0 === g && (g = !1), void 0 === _ && (_ = !1);
        let A = h.getBoundingClientRect(),
          N = floating_ui_dom_browser_min_v(h),
          F = floating_ui_dom_browser_min_y(1);
        g &&
          (b
            ? floating_ui_dom_browser_min_x(b) &&
              (F = floating_ui_dom_browser_min_b(b))
            : (F = floating_ui_dom_browser_min_b(h)));
        let B = (void 0 === (y = _) && (y = !1),
          !(!b || (y && b !== floating_ui_dom_browser_min_n(N))) && y)
            ? floating_ui_dom_browser_min_T(N)
            : floating_ui_dom_browser_min_y(0),
          H = (A.left + B.x) / F.x,
          U = (A.top + B.y) / F.y,
          K = A.width / F.x,
          q = A.height / F.y;
        if (N) {
          let h = floating_ui_dom_browser_min_n(N),
            g =
              b && floating_ui_dom_browser_min_x(b)
                ? floating_ui_dom_browser_min_n(b)
                : b,
            _ = h.frameElement;
          for (; _ && b && g !== h; ) {
            let h = floating_ui_dom_browser_min_b(_),
              g = _.getBoundingClientRect(),
              b = getComputedStyle(_),
              y = g.left + (_.clientLeft + parseFloat(b.paddingLeft)) * h.x,
              A = g.top + (_.clientTop + parseFloat(b.paddingTop)) * h.y;
            (H *= h.x),
              (U *= h.y),
              (K *= h.x),
              (q *= h.y),
              (H += y),
              (U += A),
              (_ = floating_ui_dom_browser_min_n(_).frameElement);
          }
        }
        return floating_ui_core_browser_min_s({
          width: K,
          height: q,
          x: H,
          y: U,
        });
      }
      function floating_ui_dom_browser_min_E(h) {
        return floating_ui_dom_browser_min_x(h)
          ? { scrollLeft: h.scrollLeft, scrollTop: h.scrollTop }
          : { scrollLeft: h.pageXOffset, scrollTop: h.pageYOffset };
      }
      function floating_ui_dom_browser_min_S(h) {
        var g;
        return null ==
          (g =
            (floating_ui_dom_browser_min_i(h) ? h.ownerDocument : h.document) ||
            window.document)
          ? void 0
          : g.documentElement;
      }
      function floating_ui_dom_browser_min_C(h) {
        return (
          floating_ui_dom_browser_min_R(floating_ui_dom_browser_min_S(h)).left +
          floating_ui_dom_browser_min_E(h).scrollLeft
        );
      }
      function floating_ui_dom_browser_min_F(h) {
        if ("html" === floating_ui_dom_browser_min_r(h)) return h;
        let g =
          h.assignedSlot ||
          h.parentNode ||
          (floating_ui_dom_browser_min_l(h) && h.host) ||
          floating_ui_dom_browser_min_S(h);
        return floating_ui_dom_browser_min_l(g) ? g.host : g;
      }
      function floating_ui_dom_browser_min_D(h, g) {
        var _;
        void 0 === g && (g = []);
        let b = (function floating_ui_dom_browser_min_O(h) {
            let g = floating_ui_dom_browser_min_F(h);
            return floating_ui_dom_browser_min_d(g)
              ? h.ownerDocument
                ? h.ownerDocument.body
                : h.body
              : floating_ui_dom_browser_min_c(g) &&
                  floating_ui_dom_browser_min_s(g)
                ? g
                : floating_ui_dom_browser_min_O(g);
          })(h),
          y = b === (null == (_ = h.ownerDocument) ? void 0 : _.body),
          A = floating_ui_dom_browser_min_n(b);
        return y
          ? g.concat(
              A,
              A.visualViewport || [],
              floating_ui_dom_browser_min_s(b) ? b : [],
            )
          : g.concat(b, floating_ui_dom_browser_min_D(b));
      }
      function floating_ui_dom_browser_min_H(h, g, _) {
        let b;
        if ("viewport" === g)
          b = (function (h, g) {
            let _ = floating_ui_dom_browser_min_n(h),
              b = floating_ui_dom_browser_min_S(h),
              y = _.visualViewport,
              A = b.clientWidth,
              N = b.clientHeight,
              F = 0,
              B = 0;
            if (y) {
              (A = y.width), (N = y.height);
              let h = floating_ui_dom_browser_min_a();
              (!h || (h && "fixed" === g)) &&
                ((F = y.offsetLeft), (B = y.offsetTop));
            }
            return { width: A, height: N, x: F, y: B };
          })(h, _);
        else if ("document" === g)
          b = (function (h) {
            let g = floating_ui_dom_browser_min_S(h),
              _ = floating_ui_dom_browser_min_E(h),
              b = h.ownerDocument.body,
              y = eJ(
                g.scrollWidth,
                g.clientWidth,
                b.scrollWidth,
                b.clientWidth,
              ),
              A = eJ(
                g.scrollHeight,
                g.clientHeight,
                b.scrollHeight,
                b.clientHeight,
              ),
              N = -_.scrollLeft + floating_ui_dom_browser_min_C(h),
              F = -_.scrollTop;
            return (
              "rtl" === floating_ui_dom_browser_min_o(b).direction &&
                (N += eJ(g.clientWidth, b.clientWidth) - y),
              { width: y, height: A, x: N, y: F }
            );
          })(floating_ui_dom_browser_min_S(h));
        else if (floating_ui_dom_browser_min_x(g))
          b = (function (h, g) {
            let _ = floating_ui_dom_browser_min_R(h, !0, "fixed" === g),
              b = _.top + h.clientTop,
              y = _.left + h.clientLeft,
              A = floating_ui_dom_browser_min_c(h)
                ? floating_ui_dom_browser_min_b(h)
                : floating_ui_dom_browser_min_y(1);
            return {
              width: h.clientWidth * A.x,
              height: h.clientHeight * A.y,
              x: y * A.x,
              y: b * A.y,
            };
          })(g, _);
        else {
          let _ = floating_ui_dom_browser_min_T(h);
          b = { ...g, x: g.x - _.x, y: g.y - _.y };
        }
        return floating_ui_core_browser_min_s(b);
      }
      function floating_ui_dom_browser_min_z(h, g) {
        return floating_ui_dom_browser_min_c(h) &&
          "fixed" !== floating_ui_dom_browser_min_o(h).position
          ? g
            ? g(h)
            : h.offsetParent
          : null;
      }
      function floating_ui_dom_browser_min_P(h, g) {
        let _ = floating_ui_dom_browser_min_n(h);
        if (!floating_ui_dom_browser_min_c(h)) return _;
        let b = floating_ui_dom_browser_min_z(h, g);
        for (
          ;
          b &&
          ["table", "td", "th"].includes(floating_ui_dom_browser_min_r(b)) &&
          "static" === floating_ui_dom_browser_min_o(b).position;

        )
          b = floating_ui_dom_browser_min_z(b, g);
        return b &&
          ("html" === floating_ui_dom_browser_min_r(b) ||
            ("body" === floating_ui_dom_browser_min_r(b) &&
              "static" === floating_ui_dom_browser_min_o(b).position &&
              !floating_ui_dom_browser_min_u(b)))
          ? _
          : b ||
              (function (h) {
                let g = floating_ui_dom_browser_min_F(h);
                for (
                  ;
                  floating_ui_dom_browser_min_c(g) &&
                  !floating_ui_dom_browser_min_d(g);

                ) {
                  if (floating_ui_dom_browser_min_u(g)) return g;
                  g = floating_ui_dom_browser_min_F(g);
                }
                return null;
              })(h) ||
              _;
      }
      let e2 = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (h) {
          let { rect: g, offsetParent: _, strategy: b } = h,
            y = floating_ui_dom_browser_min_c(_),
            A = floating_ui_dom_browser_min_S(_);
          if (_ === A) return g;
          let N = { scrollLeft: 0, scrollTop: 0 },
            F = floating_ui_dom_browser_min_y(1),
            B = floating_ui_dom_browser_min_y(0);
          if (
            (y || (!y && "fixed" !== b)) &&
            (("body" !== floating_ui_dom_browser_min_r(_) ||
              floating_ui_dom_browser_min_s(A)) &&
              (N = floating_ui_dom_browser_min_E(_)),
            floating_ui_dom_browser_min_c(_))
          ) {
            let h = floating_ui_dom_browser_min_R(_);
            (F = floating_ui_dom_browser_min_b(_)),
              (B.x = h.x + _.clientLeft),
              (B.y = h.y + _.clientTop);
          }
          return {
            width: g.width * F.x,
            height: g.height * F.y,
            x: g.x * F.x - N.scrollLeft * F.x + B.x,
            y: g.y * F.y - N.scrollTop * F.y + B.y,
          };
        },
        getDocumentElement: floating_ui_dom_browser_min_S,
        getClippingRect: function (h) {
          let { element: g, boundary: _, rootBoundary: b, strategy: y } = h,
            A = [
              ...("clippingAncestors" === _
                ? (function (h, g) {
                    let _ = g.get(h);
                    if (_) return _;
                    let b = floating_ui_dom_browser_min_D(h).filter(
                        (h) =>
                          floating_ui_dom_browser_min_x(h) &&
                          "body" !== floating_ui_dom_browser_min_r(h),
                      ),
                      y = null,
                      A = "fixed" === floating_ui_dom_browser_min_o(h).position,
                      N = A ? floating_ui_dom_browser_min_F(h) : h;
                    for (
                      ;
                      floating_ui_dom_browser_min_x(N) &&
                      !floating_ui_dom_browser_min_d(N);

                    ) {
                      let g = floating_ui_dom_browser_min_o(N),
                        _ = floating_ui_dom_browser_min_u(N);
                      _ || "fixed" !== g.position || (y = null),
                        (
                          A
                            ? !_ && !y
                            : (!_ &&
                                "static" === g.position &&
                                y &&
                                ["absolute", "fixed"].includes(y.position)) ||
                              (floating_ui_dom_browser_min_s(N) &&
                                !_ &&
                                (function floating_ui_dom_browser_min_W(h, g) {
                                  let _ = floating_ui_dom_browser_min_F(h);
                                  return (
                                    !(
                                      _ === g ||
                                      !floating_ui_dom_browser_min_x(_) ||
                                      floating_ui_dom_browser_min_d(_)
                                    ) &&
                                    ("fixed" ===
                                      floating_ui_dom_browser_min_o(_)
                                        .position ||
                                      floating_ui_dom_browser_min_W(_, g))
                                  );
                                })(h, N))
                        )
                          ? (b = b.filter((h) => h !== N))
                          : (y = g),
                        (N = floating_ui_dom_browser_min_F(N));
                    }
                    return g.set(h, b), b;
                  })(g, this._c)
                : [].concat(_)),
              b,
            ],
            N = A[0],
            F = A.reduce(
              (h, _) => {
                let b = floating_ui_dom_browser_min_H(g, _, y);
                return (
                  (h.top = eJ(b.top, h.top)),
                  (h.right = eX(b.right, h.right)),
                  (h.bottom = eX(b.bottom, h.bottom)),
                  (h.left = eJ(b.left, h.left)),
                  h
                );
              },
              floating_ui_dom_browser_min_H(g, N, y),
            );
          return {
            width: F.right - F.left,
            height: F.bottom - F.top,
            x: F.left,
            y: F.top,
          };
        },
        getOffsetParent: floating_ui_dom_browser_min_P,
        getElementRects: async function (h) {
          let { reference: g, floating: _, strategy: b } = h,
            y = this.getOffsetParent || floating_ui_dom_browser_min_P,
            A = this.getDimensions;
          return {
            reference: (function (h, g, _) {
              let b = floating_ui_dom_browser_min_c(g),
                y = floating_ui_dom_browser_min_S(g),
                A = "fixed" === _,
                N = floating_ui_dom_browser_min_R(h, !0, A, g),
                F = { scrollLeft: 0, scrollTop: 0 },
                B = floating_ui_dom_browser_min_y(0);
              if (b || (!b && !A)) {
                if (
                  (("body" !== floating_ui_dom_browser_min_r(g) ||
                    floating_ui_dom_browser_min_s(y)) &&
                    (F = floating_ui_dom_browser_min_E(g)),
                  floating_ui_dom_browser_min_c(g))
                ) {
                  let h = floating_ui_dom_browser_min_R(g, !0, A, g);
                  (B.x = h.x + g.clientLeft), (B.y = h.y + g.clientTop);
                } else y && (B.x = floating_ui_dom_browser_min_C(y));
              }
              return {
                x: N.left + F.scrollLeft - B.x,
                y: N.top + F.scrollTop - B.y,
                width: N.width,
                height: N.height,
              };
            })(g, await y(_), b),
            floating: { x: 0, y: 0, ...(await A(_)) },
          };
        },
        getClientRects: function (h) {
          return Array.from(h.getClientRects());
        },
        getDimensions: function (h) {
          return floating_ui_dom_browser_min_w(h);
        },
        getScale: floating_ui_dom_browser_min_b,
        isElement: floating_ui_dom_browser_min_x,
        isRTL: function (h) {
          return "rtl" === getComputedStyle(h).direction;
        },
      };
      function floating_ui_dom_browser_min_A(h, g, _, b) {
        void 0 === b && (b = {});
        let {
            ancestorScroll: y = !0,
            ancestorResize: A = !0,
            elementResize: N = "function" == typeof ResizeObserver,
            layoutShift: F = "function" == typeof IntersectionObserver,
            animationFrame: B = !1,
          } = b,
          H = floating_ui_dom_browser_min_v(h),
          U =
            y || A
              ? [
                  ...(H ? floating_ui_dom_browser_min_D(H) : []),
                  ...floating_ui_dom_browser_min_D(g),
                ]
              : [];
        U.forEach((h) => {
          y && h.addEventListener("scroll", _, { passive: !0 }),
            A && h.addEventListener("resize", _);
        });
        let K =
            H && F
              ? (function (h, g) {
                  let _,
                    b = null,
                    y = floating_ui_dom_browser_min_S(h);
                  function r() {
                    clearTimeout(_), b && b.disconnect(), (b = null);
                  }
                  return (
                    (function c(A, N) {
                      void 0 === A && (A = !1), void 0 === N && (N = 1), r();
                      let {
                        left: F,
                        top: B,
                        width: H,
                        height: U,
                      } = h.getBoundingClientRect();
                      if ((A || g(), !H || !U)) return;
                      let K = {
                          rootMargin:
                            -e0(B) +
                            "px " +
                            -e0(y.clientWidth - (F + H)) +
                            "px " +
                            -e0(y.clientHeight - (B + U)) +
                            "px " +
                            -e0(F) +
                            "px",
                          threshold: eJ(0, eX(1, N)) || 1,
                        },
                        q = !0;
                      function w(h) {
                        let g = h[0].intersectionRatio;
                        if (g !== N) {
                          if (!q) return c();
                          g
                            ? c(!1, g)
                            : (_ = setTimeout(() => {
                                c(!1, 1e-7);
                              }, 100));
                        }
                        q = !1;
                      }
                      try {
                        b = new IntersectionObserver(w, {
                          ...K,
                          root: y.ownerDocument,
                        });
                      } catch (h) {
                        b = new IntersectionObserver(w, K);
                      }
                      b.observe(h);
                    })(!0),
                    r
                  );
                })(H, _)
              : null,
          q,
          Y = -1,
          X = null;
        N &&
          ((X = new ResizeObserver((h) => {
            let [b] = h;
            b &&
              b.target === H &&
              X &&
              (X.unobserve(g),
              cancelAnimationFrame(Y),
              (Y = requestAnimationFrame(() => {
                X && X.observe(g);
              }))),
              _();
          })),
          H && !B && X.observe(H),
          X.observe(g));
        let Q = B ? floating_ui_dom_browser_min_R(h) : null;
        return (
          B &&
            (function e() {
              let g = floating_ui_dom_browser_min_R(h);
              Q &&
                (g.x !== Q.x ||
                  g.y !== Q.y ||
                  g.width !== Q.width ||
                  g.height !== Q.height) &&
                _(),
                (Q = g),
                (q = requestAnimationFrame(e));
            })(),
          _(),
          () => {
            U.forEach((h) => {
              y && h.removeEventListener("scroll", _),
                A && h.removeEventListener("resize", _);
            }),
              K && K(),
              X && X.disconnect(),
              (X = null),
              B && cancelAnimationFrame(q);
          }
        );
      }
      let floating_ui_dom_browser_min_B = (h, g, _) => {
          let b = new Map(),
            y = { platform: e2, ..._ },
            A = { ...y.platform, _c: b };
          return floating_ui_core_browser_min_r(h, g, { ...y, platform: A });
        },
        floating_ui_react_dom_esm_arrow = (h) => ({
          name: "arrow",
          options: h,
          fn(g) {
            let { element: _, padding: b } = "function" == typeof h ? h(g) : h;
            if (_ && {}.hasOwnProperty.call(_, "current")) {
              if (null != _.current)
                return floating_ui_core_browser_min_g({
                  element: _.current,
                  padding: b,
                }).fn(g);
            } else if (_)
              return floating_ui_core_browser_min_g({
                element: _,
                padding: b,
              }).fn(g);
            return {};
          },
        });
      var e3 = "undefined" != typeof document ? F.useLayoutEffect : F.useEffect;
      function deepEqual(h, g) {
        let _, b, y;
        if (h === g) return !0;
        if (typeof h != typeof g) return !1;
        if ("function" == typeof h && h.toString() === g.toString()) return !0;
        if (h && g && "object" == typeof h) {
          if (Array.isArray(h)) {
            if ((_ = h.length) != g.length) return !1;
            for (b = _; 0 != b--; ) if (!deepEqual(h[b], g[b])) return !1;
            return !0;
          }
          if ((_ = (y = Object.keys(h)).length) !== Object.keys(g).length)
            return !1;
          for (b = _; 0 != b--; )
            if (!{}.hasOwnProperty.call(g, y[b])) return !1;
          for (b = _; 0 != b--; ) {
            let _ = y[b];
            if (("_owner" !== _ || !h.$$typeof) && !deepEqual(h[_], g[_]))
              return !1;
          }
          return !0;
        }
        return h != h && g != g;
      }
      function getDPR(h) {
        if ("undefined" == typeof window) return 1;
        let g = h.ownerDocument.defaultView || window;
        return g.devicePixelRatio || 1;
      }
      function roundByDPR(h, g) {
        let _ = getDPR(h);
        return Math.round(g * _) / _;
      }
      function useLatestRef(h) {
        let g = F.useRef(h);
        return (
          e3(() => {
            g.current = h;
          }),
          g
        );
      }
      let e6 = (0, F.forwardRef)((h, g) => {
        let { children: _, width: b = 10, height: y = 5, ...A } = h;
        return (0, F.createElement)(
          U.WV.svg,
          (0, H.Z)({}, A, {
            ref: g,
            width: b,
            height: y,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
          }),
          h.asChild
            ? _
            : (0, F.createElement)("polygon", { points: "0,0 30,0 15,10" }),
        );
      });
      function dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(...h) {
        return (0, F.useCallback)(
          (function (...h) {
            return (g) =>
              h.forEach((h) => {
                "function" == typeof h ? h(g) : null != h && (h.current = g);
              });
          })(...h),
          h,
        );
      }
      let e4 = (null == globalThis ? void 0 : globalThis.document)
          ? F.useLayoutEffect
          : () => {},
        e5 = (null == globalThis ? void 0 : globalThis.document)
          ? F.useLayoutEffect
          : () => {},
        e8 = "Popper",
        [e9, e7] = (function (h, g = []) {
          let _ = [],
            createScope = () => {
              let g = _.map((h) => (0, F.createContext)(h));
              return function (_) {
                let b = (null == _ ? void 0 : _[h]) || g;
                return (0, F.useMemo)(
                  () => ({ [`__scope${h}`]: { ..._, [h]: b } }),
                  [_, b],
                );
              };
            };
          return (
            (createScope.scopeName = h),
            [
              function (g, b) {
                let y = (0, F.createContext)(b),
                  A = _.length;
                function Provider(g) {
                  let { scope: _, children: b, ...N } = g,
                    B = (null == _ ? void 0 : _[h][A]) || y,
                    H = (0, F.useMemo)(() => N, Object.values(N));
                  return (0, F.createElement)(B.Provider, { value: H }, b);
                }
                return (
                  (_ = [..._, b]),
                  (Provider.displayName = g + "Provider"),
                  [
                    Provider,
                    function (_, N) {
                      let B = (null == N ? void 0 : N[h][A]) || y,
                        H = (0, F.useContext)(B);
                      if (H) return H;
                      if (void 0 !== b) return b;
                      throw Error(`\`${_}\` must be used within \`${g}\``);
                    },
                  ]
                );
              },
              (function (...h) {
                let g = h[0];
                if (1 === h.length) return g;
                let createScope1 = () => {
                  let _ = h.map((h) => ({
                    useScope: h(),
                    scopeName: h.scopeName,
                  }));
                  return function (h) {
                    let b = _.reduce((g, { useScope: _, scopeName: b }) => {
                      let y = _(h),
                        A = y[`__scope${b}`];
                      return { ...g, ...A };
                    }, {});
                    return (0, F.useMemo)(
                      () => ({ [`__scope${g.scopeName}`]: b }),
                      [b],
                    );
                  };
                };
                return (createScope1.scopeName = g.scopeName), createScope1;
              })(createScope, ...g),
            ]
          );
        })(e8),
        [te, tt] = e9(e8),
        tn = (0, F.forwardRef)((h, g) => {
          let { __scopePopper: _, virtualRef: b, ...y } = h,
            A = tt("PopperAnchor", _),
            N = (0, F.useRef)(null),
            B = dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(g, N);
          return (
            (0, F.useEffect)(() => {
              A.onAnchorChange((null == b ? void 0 : b.current) || N.current);
            }),
            b
              ? null
              : (0, F.createElement)(U.WV.div, (0, H.Z)({}, y, { ref: B }))
          );
        }),
        tr = "PopperContent",
        [ti, to] = e9(tr),
        ta = (0, F.forwardRef)((h, g) => {
          var _, b, y, A, B, K, q, Y, X, Q, et, en, er, ei;
          let {
              __scopePopper: eo,
              side: ea = "bottom",
              sideOffset: es = 0,
              align: el = "center",
              alignOffset: eu = 0,
              arrowPadding: ec = 0,
              collisionBoundary: ed = [],
              collisionPadding: ef = 0,
              sticky: ep = "partial",
              hideWhenDetached: eh = !1,
              avoidCollisions: em = !0,
              onPlaced: eg,
              ...ev
            } = h,
            e_ = tt(tr, eo),
            [eb, ey] = (0, F.useState)(null),
            ex = dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(g, (h) =>
              ey(h),
            ),
            [ew, eC] = (0, F.useState)(null),
            eS = (function (h) {
              let [g, _] = (0, F.useState)(void 0);
              return (
                e5(() => {
                  if (h) {
                    _({ width: h.offsetWidth, height: h.offsetHeight });
                    let g = new ResizeObserver((g) => {
                      let b, y;
                      if (!Array.isArray(g) || !g.length) return;
                      let A = g[0];
                      if ("borderBoxSize" in A) {
                        let h = A.borderBoxSize,
                          g = Array.isArray(h) ? h[0] : h;
                        (b = g.inlineSize), (y = g.blockSize);
                      } else (b = h.offsetWidth), (y = h.offsetHeight);
                      _({ width: b, height: y });
                    });
                    return (
                      g.observe(h, { box: "border-box" }), () => g.unobserve(h)
                    );
                  }
                  _(void 0);
                }, [h]),
                g
              );
            })(ew),
            eE =
              null !== (_ = null == eS ? void 0 : eS.width) && void 0 !== _
                ? _
                : 0,
            eP =
              null !== (b = null == eS ? void 0 : eS.height) && void 0 !== b
                ? b
                : 0,
            eT =
              "number" == typeof ef
                ? ef
                : { top: 0, right: 0, bottom: 0, left: 0, ...ef },
            ej = Array.isArray(ed) ? ed : [ed],
            ek = ej.length > 0,
            e$ = {
              padding: eT,
              boundary: ej.filter($cf1ac5d9fe0e8206$var$isNotNull),
              altBoundary: ek,
            },
            {
              refs: eR,
              floatingStyles: eA,
              placement: eO,
              isPositioned: eD,
              middlewareData: eL,
            } = (function (h) {
              void 0 === h && (h = {});
              let {
                  placement: g = "bottom",
                  strategy: _ = "absolute",
                  middleware: b = [],
                  platform: y,
                  elements: { reference: A, floating: B } = {},
                  transform: H = !0,
                  whileElementsMounted: U,
                  open: K,
                } = h,
                [q, Y] = F.useState({
                  x: 0,
                  y: 0,
                  strategy: _,
                  placement: g,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                [X, Q] = F.useState(b);
              deepEqual(X, b) || Q(b);
              let [et, en] = F.useState(null),
                [er, ei] = F.useState(null),
                eo = F.useCallback(
                  (h) => {
                    h != eu.current && ((eu.current = h), en(h));
                  },
                  [en],
                ),
                ea = F.useCallback(
                  (h) => {
                    h !== ec.current && ((ec.current = h), ei(h));
                  },
                  [ei],
                ),
                es = A || et,
                el = B || er,
                eu = F.useRef(null),
                ec = F.useRef(null),
                ed = F.useRef(q),
                ef = useLatestRef(U),
                ep = useLatestRef(y),
                eh = F.useCallback(() => {
                  if (!eu.current || !ec.current) return;
                  let h = { placement: g, strategy: _, middleware: X };
                  ep.current && (h.platform = ep.current),
                    floating_ui_dom_browser_min_B(
                      eu.current,
                      ec.current,
                      h,
                    ).then((h) => {
                      let g = { ...h, isPositioned: !0 };
                      em.current &&
                        !deepEqual(ed.current, g) &&
                        ((ed.current = g),
                        N.flushSync(() => {
                          Y(g);
                        }));
                    });
                }, [X, g, _, ep]);
              e3(() => {
                !1 === K &&
                  ed.current.isPositioned &&
                  ((ed.current.isPositioned = !1),
                  Y((h) => ({ ...h, isPositioned: !1 })));
              }, [K]);
              let em = F.useRef(!1);
              e3(
                () => (
                  (em.current = !0),
                  () => {
                    em.current = !1;
                  }
                ),
                [],
              ),
                e3(() => {
                  if (
                    (es && (eu.current = es), el && (ec.current = el), es && el)
                  ) {
                    if (ef.current) return ef.current(es, el, eh);
                    eh();
                  }
                }, [es, el, eh, ef]);
              let eg = F.useMemo(
                  () => ({
                    reference: eu,
                    floating: ec,
                    setReference: eo,
                    setFloating: ea,
                  }),
                  [eo, ea],
                ),
                ev = F.useMemo(
                  () => ({ reference: es, floating: el }),
                  [es, el],
                ),
                e_ = F.useMemo(() => {
                  let h = { position: _, left: 0, top: 0 };
                  if (!ev.floating) return h;
                  let g = roundByDPR(ev.floating, q.x),
                    b = roundByDPR(ev.floating, q.y);
                  return H
                    ? {
                        ...h,
                        transform: "translate(" + g + "px, " + b + "px)",
                        ...(getDPR(ev.floating) >= 1.5 && {
                          willChange: "transform",
                        }),
                      }
                    : { position: _, left: g, top: b };
                }, [_, H, ev.floating, q.x, q.y]);
              return F.useMemo(
                () => ({
                  ...q,
                  update: eh,
                  refs: eg,
                  elements: ev,
                  floatingStyles: e_,
                }),
                [q, eh, eg, ev, e_],
              );
            })({
              strategy: "fixed",
              placement: ea + ("center" !== el ? "-" + el : ""),
              whileElementsMounted: floating_ui_dom_browser_min_A,
              elements: { reference: e_.anchor },
              middleware: [
                {
                  name: "offset",
                  options: (X = { mainAxis: es + eP, alignmentAxis: eu }),
                  async fn(h) {
                    let { x: g, y: _ } = h,
                      b = await (async function (h, g) {
                        let { placement: _, platform: b, elements: y } = h,
                          A = await (null == b.isRTL
                            ? void 0
                            : b.isRTL(y.floating)),
                          N = floating_ui_core_browser_min_n(_),
                          F = floating_ui_core_browser_min_t(_),
                          B = "x" === floating_ui_core_browser_min_o(_),
                          H = ["left", "top"].includes(N) ? -1 : 1,
                          U = A && B ? -1 : 1,
                          K = floating_ui_core_browser_min_a(g, h),
                          {
                            mainAxis: q,
                            crossAxis: Y,
                            alignmentAxis: X,
                          } = "number" == typeof K
                            ? { mainAxis: K, crossAxis: 0, alignmentAxis: null }
                            : {
                                mainAxis: 0,
                                crossAxis: 0,
                                alignmentAxis: null,
                                ...K,
                              };
                        return (
                          F &&
                            "number" == typeof X &&
                            (Y = "end" === F ? -1 * X : X),
                          B ? { x: Y * U, y: q * H } : { x: q * H, y: Y * U }
                        );
                      })(h, X);
                    return { x: g + b.x, y: _ + b.y, data: b };
                  },
                },
                em && {
                  name: "shift",
                  options: (et = {
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter:
                      "partial" === ep
                        ? (void 0 === Q && (Q = {}),
                          {
                            options: Q,
                            fn(h) {
                              let {
                                  x: g,
                                  y: _,
                                  placement: b,
                                  rects: y,
                                  middlewareData: A,
                                } = h,
                                {
                                  offset: N = 0,
                                  mainAxis: F = !0,
                                  crossAxis: B = !0,
                                } = floating_ui_core_browser_min_a(Q, h),
                                H = { x: g, y: _ },
                                U = floating_ui_core_browser_min_o(b),
                                K = floating_ui_core_browser_min_k(U),
                                q = H[U],
                                Y = H[K],
                                X = floating_ui_core_browser_min_a(N, h),
                                et =
                                  "number" == typeof X
                                    ? { mainAxis: X, crossAxis: 0 }
                                    : { mainAxis: 0, crossAxis: 0, ...X };
                              if (F) {
                                let h = "y" === U ? "height" : "width",
                                  g =
                                    y.reference[U] -
                                    y.floating[h] +
                                    et.mainAxis,
                                  _ =
                                    y.reference[U] +
                                    y.reference[h] -
                                    et.mainAxis;
                                q < g ? (q = g) : q > _ && (q = _);
                              }
                              if (B) {
                                var en, er;
                                let h = "y" === U ? "width" : "height",
                                  g = ["top", "left"].includes(
                                    floating_ui_core_browser_min_n(b),
                                  ),
                                  _ =
                                    y.reference[K] -
                                    y.floating[h] +
                                    ((g &&
                                      (null == (en = A.offset)
                                        ? void 0
                                        : en[K])) ||
                                      0) +
                                    (g ? 0 : et.crossAxis),
                                  N =
                                    y.reference[K] +
                                    y.reference[h] +
                                    (g
                                      ? 0
                                      : (null == (er = A.offset)
                                          ? void 0
                                          : er[K]) || 0) -
                                    (g ? et.crossAxis : 0);
                                Y < _ ? (Y = _) : Y > N && (Y = N);
                              }
                              return { [U]: q, [K]: Y };
                            },
                          })
                        : void 0,
                    ...e$,
                  }),
                  async fn(h) {
                    let { x: g, y: _, placement: b } = h,
                      {
                        mainAxis: y = !0,
                        crossAxis: A = !1,
                        limiter: N = {
                          fn: (h) => {
                            let { x: g, y: _ } = h;
                            return { x: g, y: _ };
                          },
                        },
                        ...F
                      } = floating_ui_core_browser_min_a(et, h),
                      B = { x: g, y: _ },
                      H = await floating_ui_core_browser_min_c(h, F),
                      U = floating_ui_core_browser_min_o(
                        floating_ui_core_browser_min_n(b),
                      ),
                      K = floating_ui_core_browser_min_k(U),
                      q = B[U],
                      Y = B[K];
                    if (y) {
                      let h = "y" === U ? "bottom" : "right";
                      q = eG(
                        q + H["y" === U ? "top" : "left"],
                        eZ(q, q - H[h]),
                      );
                    }
                    A &&
                      (Y = eG(
                        Y + H["y" === K ? "top" : "left"],
                        eZ(Y, Y - H["y" === K ? "bottom" : "right"]),
                      ));
                    let X = N.fn({ ...h, [U]: q, [K]: Y });
                    return { ...X, data: { x: X.x - g, y: X.y - _ } };
                  },
                },
                em && {
                  name: "flip",
                  options: (en = { ...e$ }),
                  async fn(h) {
                    var g, _, b, y;
                    let {
                        placement: A,
                        middlewareData: N,
                        rects: F,
                        initialPlacement: B,
                        platform: H,
                        elements: U,
                      } = h,
                      {
                        mainAxis: K = !0,
                        crossAxis: q = !0,
                        fallbackPlacements: Y,
                        fallbackStrategy: X = "bestFit",
                        fallbackAxisSideDirection: Q = "none",
                        flipAlignment: et = !0,
                        ...er
                      } = floating_ui_core_browser_min_a(en, h),
                      ei = floating_ui_core_browser_min_n(A),
                      eo = floating_ui_core_browser_min_n(B) === B,
                      ea = await (null == H.isRTL
                        ? void 0
                        : H.isRTL(U.floating)),
                      es =
                        Y ||
                        (eo || !et
                          ? [floating_ui_core_browser_min_y(B)]
                          : (function (h) {
                              let g = floating_ui_core_browser_min_y(h);
                              return [
                                floating_ui_core_browser_min_v(h),
                                g,
                                floating_ui_core_browser_min_v(g),
                              ];
                            })(B));
                    Y ||
                      "none" === Q ||
                      es.push(
                        ...(function (h, g, _, b) {
                          let y = floating_ui_core_browser_min_t(h),
                            A = (function (h, g, _) {
                              let b = ["left", "right"],
                                y = ["right", "left"];
                              switch (h) {
                                case "top":
                                case "bottom":
                                  return _ ? (g ? y : b) : g ? b : y;
                                case "left":
                                case "right":
                                  return g
                                    ? ["top", "bottom"]
                                    : ["bottom", "top"];
                                default:
                                  return [];
                              }
                            })(
                              floating_ui_core_browser_min_n(h),
                              "start" === _,
                              b,
                            );
                          return (
                            y &&
                              ((A = A.map((h) => h + "-" + y)),
                              g &&
                                (A = A.concat(
                                  A.map(floating_ui_core_browser_min_v),
                                ))),
                            A
                          );
                        })(B, et, Q, ea),
                      );
                    let el = [B, ...es],
                      eu = await floating_ui_core_browser_min_c(h, er),
                      ec = [],
                      ed = (null == (g = N.flip) ? void 0 : g.overflows) || [];
                    if ((K && ec.push(eu[ei]), q)) {
                      let { main: h, cross: g } = (function (h, g, _) {
                        void 0 === _ && (_ = !1);
                        let b = floating_ui_core_browser_min_t(h),
                          y = floating_ui_core_browser_min_o(h),
                          A = floating_ui_core_browser_min_e(y),
                          N =
                            "x" === y
                              ? b === (_ ? "end" : "start")
                                ? "right"
                                : "left"
                              : "start" === b
                                ? "bottom"
                                : "top";
                        return (
                          g.reference[A] > g.floating[A] &&
                            (N = floating_ui_core_browser_min_y(N)),
                          { main: N, cross: floating_ui_core_browser_min_y(N) }
                        );
                      })(A, F, ea);
                      ec.push(eu[h], eu[g]);
                    }
                    if (
                      ((ed = [...ed, { placement: A, overflows: ec }]),
                      !ec.every((h) => h <= 0))
                    ) {
                      let h =
                          ((null == (_ = N.flip) ? void 0 : _.index) || 0) + 1,
                        g = el[h];
                      if (g)
                        return {
                          data: { index: h, overflows: ed },
                          reset: { placement: g },
                        };
                      let F =
                        null ==
                        (b = ed
                          .filter((h) => h.overflows[0] <= 0)
                          .sort((h, g) => h.overflows[1] - g.overflows[1])[0])
                          ? void 0
                          : b.placement;
                      if (!F)
                        switch (X) {
                          case "bestFit": {
                            let h =
                              null ==
                              (y = ed
                                .map((h) => [
                                  h.placement,
                                  h.overflows
                                    .filter((h) => h > 0)
                                    .reduce((h, g) => h + g, 0),
                                ])
                                .sort((h, g) => h[1] - g[1])[0])
                                ? void 0
                                : y[0];
                            h && (F = h);
                            break;
                          }
                          case "initialPlacement":
                            F = B;
                        }
                      if (A !== F) return { reset: { placement: F } };
                    }
                    return {};
                  },
                },
                {
                  name: "size",
                  options: (er = {
                    ...e$,
                    apply: ({
                      elements: h,
                      rects: g,
                      availableWidth: _,
                      availableHeight: b,
                    }) => {
                      let { width: y, height: A } = g.reference,
                        N = h.floating.style;
                      N.setProperty("--radix-popper-available-width", `${_}px`),
                        N.setProperty(
                          "--radix-popper-available-height",
                          `${b}px`,
                        ),
                        N.setProperty("--radix-popper-anchor-width", `${y}px`),
                        N.setProperty("--radix-popper-anchor-height", `${A}px`);
                    },
                  }),
                  async fn(h) {
                    let g, _;
                    let {
                        placement: b,
                        rects: y,
                        platform: A,
                        elements: N,
                      } = h,
                      { apply: F = () => {}, ...B } =
                        floating_ui_core_browser_min_a(er, h),
                      H = await floating_ui_core_browser_min_c(h, B),
                      U = floating_ui_core_browser_min_n(b),
                      K = floating_ui_core_browser_min_t(b),
                      q = "x" === floating_ui_core_browser_min_o(b),
                      { width: Y, height: X } = y.floating;
                    "top" === U || "bottom" === U
                      ? ((g = U),
                        (_ =
                          K ===
                          ((await (null == A.isRTL
                            ? void 0
                            : A.isRTL(N.floating)))
                            ? "start"
                            : "end")
                            ? "left"
                            : "right"))
                      : ((_ = U), (g = "end" === K ? "top" : "bottom"));
                    let Q = X - H[g],
                      et = Y - H[_],
                      en = !h.middlewareData.shift,
                      ei = Q,
                      eo = et;
                    if (q) {
                      let h = Y - H.left - H.right;
                      eo = K || en ? eZ(et, h) : h;
                    } else {
                      let h = X - H.top - H.bottom;
                      ei = K || en ? eZ(Q, h) : h;
                    }
                    if (en && !K) {
                      let h = eG(H.left, 0),
                        g = eG(H.right, 0),
                        _ = eG(H.top, 0),
                        b = eG(H.bottom, 0);
                      q
                        ? (eo =
                            Y -
                            2 *
                              (0 !== h || 0 !== g
                                ? h + g
                                : eG(H.left, H.right)))
                        : (ei =
                            X -
                            2 *
                              (0 !== _ || 0 !== b
                                ? _ + b
                                : eG(H.top, H.bottom)));
                    }
                    await F({ ...h, availableWidth: eo, availableHeight: ei });
                    let ea = await A.getDimensions(N.floating);
                    return Y !== ea.width || X !== ea.height
                      ? { reset: { rects: !0 } }
                      : {};
                  },
                },
                ew &&
                  floating_ui_react_dom_esm_arrow({ element: ew, padding: ec }),
                $cf1ac5d9fe0e8206$var$transformOrigin({
                  arrowWidth: eE,
                  arrowHeight: eP,
                }),
                eh && {
                  name: "hide",
                  options: (ei = { strategy: "referenceHidden" }),
                  async fn(h) {
                    let { rects: g } = h,
                      { strategy: _ = "referenceHidden", ...b } =
                        floating_ui_core_browser_min_a(ei, h);
                    switch (_) {
                      case "referenceHidden": {
                        let _ = floating_ui_core_browser_min_R(
                          await floating_ui_core_browser_min_c(h, {
                            ...b,
                            elementContext: "reference",
                          }),
                          g.reference,
                        );
                        return {
                          data: {
                            referenceHiddenOffsets: _,
                            referenceHidden: floating_ui_core_browser_min_P(_),
                          },
                        };
                      }
                      case "escaped": {
                        let _ = floating_ui_core_browser_min_R(
                          await floating_ui_core_browser_min_c(h, {
                            ...b,
                            altBoundary: !0,
                          }),
                          g.floating,
                        );
                        return {
                          data: {
                            escapedOffsets: _,
                            escaped: floating_ui_core_browser_min_P(_),
                          },
                        };
                      }
                      default:
                        return {};
                    }
                  },
                },
              ],
            }),
            [eM, eI] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(eO),
            eN = (function (h) {
              let g = (0, F.useRef)(h);
              return (
                (0, F.useEffect)(() => {
                  g.current = h;
                }),
                (0, F.useMemo)(
                  () =>
                    (...h) => {
                      var _;
                      return null === (_ = g.current) || void 0 === _
                        ? void 0
                        : _.call(g, ...h);
                    },
                  [],
                )
              );
            })(eg);
          e4(() => {
            eD && (null == eN || eN());
          }, [eD, eN]);
          let eV = null === (y = eL.arrow) || void 0 === y ? void 0 : y.x,
            eF = null === (A = eL.arrow) || void 0 === A ? void 0 : A.y,
            eB =
              (null === (B = eL.arrow) || void 0 === B
                ? void 0
                : B.centerOffset) !== 0,
            [ez, eH] = (0, F.useState)();
          return (
            e4(() => {
              eb && eH(window.getComputedStyle(eb).zIndex);
            }, [eb]),
            (0, F.createElement)(
              "div",
              {
                ref: eR.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                  ...eA,
                  transform: eD ? eA.transform : "translate(0, -200%)",
                  minWidth: "max-content",
                  zIndex: ez,
                  "--radix-popper-transform-origin": [
                    null === (K = eL.transformOrigin) || void 0 === K
                      ? void 0
                      : K.x,
                    null === (q = eL.transformOrigin) || void 0 === q
                      ? void 0
                      : q.y,
                  ].join(" "),
                },
                dir: h.dir,
              },
              (0, F.createElement)(
                ti,
                {
                  scope: eo,
                  placedSide: eM,
                  onArrowChange: eC,
                  arrowX: eV,
                  arrowY: eF,
                  shouldHideArrow: eB,
                },
                (0, F.createElement)(
                  U.WV.div,
                  (0, H.Z)({ "data-side": eM, "data-align": eI }, ev, {
                    ref: ex,
                    style: {
                      ...ev.style,
                      animation: eD ? void 0 : "none",
                      opacity:
                        null !== (Y = eL.hide) &&
                        void 0 !== Y &&
                        Y.referenceHidden
                          ? 0
                          : void 0,
                    },
                  }),
                ),
              ),
            )
          );
        }),
        ts = { top: "bottom", right: "left", bottom: "top", left: "right" },
        tl = (0, F.forwardRef)(function (h, g) {
          let { __scopePopper: _, ...b } = h,
            y = to("PopperArrow", _),
            A = ts[y.placedSide];
          return (0, F.createElement)(
            "span",
            {
              ref: y.onArrowChange,
              style: {
                position: "absolute",
                left: y.arrowX,
                top: y.arrowY,
                [A]: 0,
                transformOrigin: {
                  top: "",
                  right: "0 0",
                  bottom: "center 0",
                  left: "100% 0",
                }[y.placedSide],
                transform: {
                  top: "translateY(100%)",
                  right: "translateY(50%) rotate(90deg) translateX(-50%)",
                  bottom: "rotate(180deg)",
                  left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[y.placedSide],
                visibility: y.shouldHideArrow ? "hidden" : void 0,
              },
            },
            (0, F.createElement)(
              e6,
              (0, H.Z)({}, b, {
                ref: g,
                style: { ...b.style, display: "block" },
              }),
            ),
          );
        });
      function $cf1ac5d9fe0e8206$var$isNotNull(h) {
        return null !== h;
      }
      let $cf1ac5d9fe0e8206$var$transformOrigin = (h) => ({
        name: "transformOrigin",
        options: h,
        fn(g) {
          var _, b, y, A, N;
          let { placement: F, rects: B, middlewareData: H } = g,
            U =
              (null === (_ = H.arrow) || void 0 === _
                ? void 0
                : _.centerOffset) !== 0,
            K = U ? 0 : h.arrowWidth,
            q = U ? 0 : h.arrowHeight,
            [Y, X] = $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(F),
            Q = { start: "0%", center: "50%", end: "100%" }[X],
            et =
              (null !==
                (b = null === (y = H.arrow) || void 0 === y ? void 0 : y.x) &&
              void 0 !== b
                ? b
                : 0) +
              K / 2,
            en =
              (null !==
                (A = null === (N = H.arrow) || void 0 === N ? void 0 : N.y) &&
              void 0 !== A
                ? A
                : 0) +
              q / 2,
            er = "",
            ei = "";
          return (
            "bottom" === Y
              ? ((er = U ? Q : `${et}px`), (ei = `${-q}px`))
              : "top" === Y
                ? ((er = U ? Q : `${et}px`),
                  (ei = `${B.floating.height + q}px`))
                : "right" === Y
                  ? ((er = `${-q}px`), (ei = U ? Q : `${en}px`))
                  : "left" === Y &&
                    ((er = `${B.floating.width + q}px`),
                    (ei = U ? Q : `${en}px`)),
            { data: { x: er, y: ei } }
          );
        },
      });
      function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(h) {
        let [g, _ = "center"] = h.split("-");
        return [g, _];
      }
      let $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9 = (h) => {
          let { __scopePopper: g, children: _ } = h,
            [b, y] = (0, F.useState)(null);
          return (0, F.createElement)(
            te,
            { scope: g, anchor: b, onAnchorChange: y },
            _,
          );
        },
        tu =
          ((h, g) => {
            var _;
            let {
              container: b = null == globalThis
                ? void 0
                : null === (_ = globalThis.document) || void 0 === _
                  ? void 0
                  : _.body,
              ...y
            } = h;
            return b
              ? N.createPortal(
                  (0, F.createElement)(U.WV.div, (0, H.Z)({}, y, { ref: g })),
                  b,
                )
              : null;
          },
          (h) => {
            let { present: g, children: _ } = h,
              b = (function (h) {
                var g;
                let [_, b] = (0, F.useState)(),
                  y = (0, F.useRef)({}),
                  A = (0, F.useRef)(h),
                  B = (0, F.useRef)("none"),
                  H = h ? "mounted" : "unmounted",
                  [U, K] =
                    ((g = {
                      mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended",
                      },
                      unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted",
                      },
                      unmounted: { MOUNT: "mounted" },
                    }),
                    (0, F.useReducer)((h, _) => {
                      let b = g[h][_];
                      return null != b ? b : h;
                    }, H));
                return (
                  (0, F.useEffect)(() => {
                    let h = $921a889cee6df7e8$var$getAnimationName(y.current);
                    B.current = "mounted" === U ? h : "none";
                  }, [U]),
                  eH(() => {
                    let g = y.current,
                      _ = A.current,
                      b = _ !== h;
                    if (b) {
                      let b = B.current,
                        y = $921a889cee6df7e8$var$getAnimationName(g);
                      h
                        ? K("MOUNT")
                        : "none" === y ||
                            (null == g ? void 0 : g.display) === "none"
                          ? K("UNMOUNT")
                          : _ && b !== y
                            ? K("ANIMATION_OUT")
                            : K("UNMOUNT"),
                        (A.current = h);
                    }
                  }, [h, K]),
                  eH(() => {
                    if (_) {
                      let handleAnimationEnd = (h) => {
                          let g = $921a889cee6df7e8$var$getAnimationName(
                              y.current,
                            ),
                            b = g.includes(h.animationName);
                          h.target === _ &&
                            b &&
                            (0, N.flushSync)(() => K("ANIMATION_END"));
                        },
                        handleAnimationStart = (h) => {
                          h.target === _ &&
                            (B.current = $921a889cee6df7e8$var$getAnimationName(
                              y.current,
                            ));
                        };
                      return (
                        _.addEventListener(
                          "animationstart",
                          handleAnimationStart,
                        ),
                        _.addEventListener(
                          "animationcancel",
                          handleAnimationEnd,
                        ),
                        _.addEventListener("animationend", handleAnimationEnd),
                        () => {
                          _.removeEventListener(
                            "animationstart",
                            handleAnimationStart,
                          ),
                            _.removeEventListener(
                              "animationcancel",
                              handleAnimationEnd,
                            ),
                            _.removeEventListener(
                              "animationend",
                              handleAnimationEnd,
                            );
                        }
                      );
                    }
                    K("ANIMATION_END");
                  }, [_, K]),
                  {
                    isPresent: ["mounted", "unmountSuspended"].includes(U),
                    ref: (0, F.useCallback)((h) => {
                      h && (y.current = getComputedStyle(h)), b(h);
                    }, []),
                  }
                );
              })(g),
              y =
                "function" == typeof _
                  ? _({ present: b.isPresent })
                  : F.Children.only(_),
              A = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(b.ref, y.ref),
              B = "function" == typeof _;
            return B || b.isPresent ? (0, F.cloneElement)(y, { ref: A }) : null;
          });
      function $921a889cee6df7e8$var$getAnimationName(h) {
        return (null == h ? void 0 : h.animationName) || "none";
      }
      tu.displayName = "Presence";
      var tc = _(4222);
      function dist_$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(h) {
        let g = (0, F.useRef)(h);
        return (
          (0, F.useEffect)(() => {
            g.current = h;
          }),
          (0, F.useMemo)(
            () =>
              (...h) => {
                var _;
                return null === (_ = g.current) || void 0 === _
                  ? void 0
                  : _.call(g, ...h);
              },
            [],
          )
        );
      }
      var td = _(96219);
      let [tf, tp] = (function (h, g = []) {
          let _ = [],
            createScope = () => {
              let g = _.map((h) => (0, F.createContext)(h));
              return function (_) {
                let b = (null == _ ? void 0 : _[h]) || g;
                return (0, F.useMemo)(
                  () => ({ [`__scope${h}`]: { ..._, [h]: b } }),
                  [_, b],
                );
              };
            };
          return (
            (createScope.scopeName = h),
            [
              function (g, b) {
                let y = (0, F.createContext)(b),
                  A = _.length;
                function Provider(g) {
                  let { scope: _, children: b, ...N } = g,
                    B = (null == _ ? void 0 : _[h][A]) || y,
                    H = (0, F.useMemo)(() => N, Object.values(N));
                  return (0, F.createElement)(B.Provider, { value: H }, b);
                }
                return (
                  (_ = [..._, b]),
                  (Provider.displayName = g + "Provider"),
                  [
                    Provider,
                    function (_, N) {
                      let B = (null == N ? void 0 : N[h][A]) || y,
                        H = (0, F.useContext)(B);
                      if (H) return H;
                      if (void 0 !== b) return b;
                      throw Error(`\`${_}\` must be used within \`${g}\``);
                    },
                  ]
                );
              },
              (function (...h) {
                let g = h[0];
                if (1 === h.length) return g;
                let createScope1 = () => {
                  let _ = h.map((h) => ({
                    useScope: h(),
                    scopeName: h.scopeName,
                  }));
                  return function (h) {
                    let b = _.reduce((g, { useScope: _, scopeName: b }) => {
                      let y = _(h),
                        A = y[`__scope${b}`];
                      return { ...g, ...A };
                    }, {});
                    return (0, F.useMemo)(
                      () => ({ [`__scope${g.scopeName}`]: b }),
                      [b],
                    );
                  };
                };
                return (createScope1.scopeName = g.scopeName), createScope1;
              })(createScope, ...g),
            ]
          );
        })("Tooltip", [e7]),
        th = e7(),
        tm = "tooltip.open",
        [tg, tv] = tf("TooltipProvider"),
        t_ = "Tooltip",
        [tb, ty] = tf(t_),
        tx = "TooltipTrigger",
        tw = (0, F.forwardRef)((h, g) => {
          let { __scopeTooltip: _, ...b } = h,
            y = ty(tx, _),
            A = tv(tx, _),
            N = th(_),
            B = (0, F.useRef)(null),
            K = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
              g,
              B,
              y.onTriggerChange,
            ),
            q = (0, F.useRef)(!1),
            Y = (0, F.useRef)(!1),
            X = (0, F.useCallback)(() => (q.current = !1), []);
          return (
            (0, F.useEffect)(
              () => () => document.removeEventListener("pointerup", X),
              [X],
            ),
            (0, F.createElement)(
              tn,
              (0, H.Z)({ asChild: !0 }, N),
              (0, F.createElement)(
                U.WV.button,
                (0, H.Z)(
                  {
                    "aria-describedby": y.open ? y.contentId : void 0,
                    "data-state": y.stateAttribute,
                  },
                  b,
                  {
                    ref: K,
                    onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onPointerMove,
                      (h) => {
                        "touch" === h.pointerType ||
                          Y.current ||
                          A.isPointerInTransitRef.current ||
                          (y.onTriggerEnter(), (Y.current = !0));
                      },
                    ),
                    onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onPointerLeave,
                      () => {
                        y.onTriggerLeave(), (Y.current = !1);
                      },
                    ),
                    onPointerDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onPointerDown,
                      () => {
                        (q.current = !0),
                          document.addEventListener("pointerup", X, {
                            once: !0,
                          });
                      },
                    ),
                    onFocus: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onFocus,
                      () => {
                        q.current || y.onOpen();
                      },
                    ),
                    onBlur: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onBlur,
                      y.onClose,
                    ),
                    onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onClick,
                      y.onClose,
                    ),
                  },
                ),
              ),
            )
          );
        }),
        [tC, tS] = tf("TooltipPortal", { forceMount: void 0 }),
        tE = "TooltipContent",
        tP = (0, F.forwardRef)((h, g) => {
          let _ = tS(tE, h.__scopeTooltip),
            { forceMount: b = _.forceMount, side: y = "top", ...A } = h,
            N = ty(tE, h.__scopeTooltip);
          return (0, F.createElement)(
            tu,
            { present: b || N.open },
            N.disableHoverableContent
              ? (0, F.createElement)(t$, (0, H.Z)({ side: y }, A, { ref: g }))
              : (0, F.createElement)(tT, (0, H.Z)({ side: y }, A, { ref: g })),
          );
        }),
        tT = (0, F.forwardRef)((h, g) => {
          let _ = ty(tE, h.__scopeTooltip),
            b = tv(tE, h.__scopeTooltip),
            y = (0, F.useRef)(null),
            A = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(g, y),
            [N, B] = (0, F.useState)(null),
            { trigger: U, onClose: K } = _,
            q = y.current,
            { onPointerInTransitChange: Y } = b,
            X = (0, F.useCallback)(() => {
              B(null), Y(!1);
            }, [Y]),
            Q = (0, F.useCallback)(
              (h, g) => {
                let _ = h.currentTarget,
                  b = { x: h.clientX, y: h.clientY },
                  y = (function (h, g) {
                    let _ = Math.abs(g.top - h.y),
                      b = Math.abs(g.bottom - h.y),
                      y = Math.abs(g.right - h.x),
                      A = Math.abs(g.left - h.x);
                    switch (Math.min(_, b, y, A)) {
                      case A:
                        return "left";
                      case y:
                        return "right";
                      case _:
                        return "top";
                      case b:
                        return "bottom";
                      default:
                        throw Error("unreachable");
                    }
                  })(b, _.getBoundingClientRect()),
                  A = (function (h, g, _ = 5) {
                    let b = [];
                    switch (g) {
                      case "top":
                        b.push(
                          { x: h.x - _, y: h.y + _ },
                          { x: h.x + _, y: h.y + _ },
                        );
                        break;
                      case "bottom":
                        b.push(
                          { x: h.x - _, y: h.y - _ },
                          { x: h.x + _, y: h.y - _ },
                        );
                        break;
                      case "left":
                        b.push(
                          { x: h.x + _, y: h.y - _ },
                          { x: h.x + _, y: h.y + _ },
                        );
                        break;
                      case "right":
                        b.push(
                          { x: h.x - _, y: h.y - _ },
                          { x: h.x - _, y: h.y + _ },
                        );
                    }
                    return b;
                  })(b, y),
                  N = (function (h) {
                    let { top: g, right: _, bottom: b, left: y } = h;
                    return [
                      { x: y, y: g },
                      { x: _, y: g },
                      { x: _, y: b },
                      { x: y, y: b },
                    ];
                  })(g.getBoundingClientRect()),
                  F = (function (h) {
                    let g = h.slice();
                    return (
                      g.sort((h, g) =>
                        h.x < g.x
                          ? -1
                          : h.x > g.x
                            ? 1
                            : h.y < g.y
                              ? -1
                              : h.y > g.y
                                ? 1
                                : 0,
                      ),
                      (function (h) {
                        if (h.length <= 1) return h.slice();
                        let g = [];
                        for (let _ = 0; _ < h.length; _++) {
                          let b = h[_];
                          for (; g.length >= 2; ) {
                            let h = g[g.length - 1],
                              _ = g[g.length - 2];
                            if (
                              (h.x - _.x) * (b.y - _.y) >=
                              (h.y - _.y) * (b.x - _.x)
                            )
                              g.pop();
                            else break;
                          }
                          g.push(b);
                        }
                        g.pop();
                        let _ = [];
                        for (let g = h.length - 1; g >= 0; g--) {
                          let b = h[g];
                          for (; _.length >= 2; ) {
                            let h = _[_.length - 1],
                              g = _[_.length - 2];
                            if (
                              (h.x - g.x) * (b.y - g.y) >=
                              (h.y - g.y) * (b.x - g.x)
                            )
                              _.pop();
                            else break;
                          }
                          _.push(b);
                        }
                        return (_.pop(),
                        1 === g.length &&
                          1 === _.length &&
                          g[0].x === _[0].x &&
                          g[0].y === _[0].y)
                          ? g
                          : g.concat(_);
                      })(g)
                    );
                  })([...A, ...N]);
                B(F), Y(!0);
              },
              [Y],
            );
          return (
            (0, F.useEffect)(() => () => X(), [X]),
            (0, F.useEffect)(() => {
              if (U && q) {
                let handleTriggerLeave = (h) => Q(h, q),
                  handleContentLeave = (h) => Q(h, U);
                return (
                  U.addEventListener("pointerleave", handleTriggerLeave),
                  q.addEventListener("pointerleave", handleContentLeave),
                  () => {
                    U.removeEventListener("pointerleave", handleTriggerLeave),
                      q.removeEventListener("pointerleave", handleContentLeave);
                  }
                );
              }
            }, [U, q, Q, X]),
            (0, F.useEffect)(() => {
              if (N) {
                let handleTrackPointerGrace = (h) => {
                  let g = h.target,
                    _ = { x: h.clientX, y: h.clientY },
                    b =
                      (null == U ? void 0 : U.contains(g)) ||
                      (null == q ? void 0 : q.contains(g)),
                    y = !(function (h, g) {
                      let { x: _, y: b } = h,
                        y = !1;
                      for (let h = 0, A = g.length - 1; h < g.length; A = h++) {
                        let N = g[h].x,
                          F = g[h].y,
                          B = g[A].x,
                          H = g[A].y,
                          U =
                            F > b != H > b &&
                            _ < ((B - N) * (b - F)) / (H - F) + N;
                        U && (y = !y);
                      }
                      return y;
                    })(_, N);
                  b ? X() : y && (X(), K());
                };
                return (
                  document.addEventListener(
                    "pointermove",
                    handleTrackPointerGrace,
                  ),
                  () =>
                    document.removeEventListener(
                      "pointermove",
                      handleTrackPointerGrace,
                    )
                );
              }
            }, [U, q, N, K, X]),
            (0, F.createElement)(t$, (0, H.Z)({}, h, { ref: A }))
          );
        }),
        [tj, tk] = tf(t_, { isInside: !1 }),
        t$ = (0, F.forwardRef)((h, g) => {
          let {
              __scopeTooltip: _,
              children: b,
              "aria-label": y,
              onEscapeKeyDown: A,
              onPointerDownOutside: N,
              ...B
            } = h,
            U = ty(tE, _),
            K = th(_),
            { onClose: q } = U;
          return (
            (0, F.useEffect)(
              () => (
                document.addEventListener(tm, q),
                () => document.removeEventListener(tm, q)
              ),
              [q],
            ),
            (0, F.useEffect)(() => {
              if (U.trigger) {
                let handleScroll = (h) => {
                  let g = h.target;
                  null != g && g.contains(U.trigger) && q();
                };
                return (
                  window.addEventListener("scroll", handleScroll, {
                    capture: !0,
                  }),
                  () =>
                    window.removeEventListener("scroll", handleScroll, {
                      capture: !0,
                    })
                );
              }
            }, [U.trigger, q]),
            (0, F.createElement)(
              ez.XB,
              {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: A,
                onPointerDownOutside: N,
                onFocusOutside: (h) => h.preventDefault(),
                onDismiss: q,
              },
              (0, F.createElement)(
                ta,
                (0, H.Z)({ "data-state": U.stateAttribute }, K, B, {
                  ref: g,
                  style: {
                    ...B.style,
                    "--radix-tooltip-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-tooltip-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-tooltip-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-tooltip-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-tooltip-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
                (0, F.createElement)(tc.A4, null, b),
                (0, F.createElement)(
                  tj,
                  { scope: _, isInside: !0 },
                  (0, F.createElement)(
                    td.f,
                    { id: U.contentId, role: "tooltip" },
                    y || b,
                  ),
                ),
              ),
            )
          );
        }),
        tR = (0, F.forwardRef)((h, g) => {
          let { __scopeTooltip: _, ...b } = h,
            y = th(_),
            A = tk("TooltipArrow", _);
          return A.isInside
            ? null
            : (0, F.createElement)(tl, (0, H.Z)({}, y, b, { ref: g }));
        }),
        $a093c7e1ec25a057$export$be92b6f5f03c0fe9 = (h) => {
          let {
              __scopeTooltip: g,
              children: _,
              open: b,
              defaultOpen: y = !1,
              onOpenChange: A,
              disableHoverableContent: N,
              delayDuration: B,
            } = h,
            H = tv(t_, h.__scopeTooltip),
            U = th(g),
            [K, q] = (0, F.useState)(null),
            Y = (function (h) {
              let [g, _] = F.useState(eW());
              return (
                eH(() => {
                  h || _((h) => (null != h ? h : String(eU++)));
                }, [h]),
                h || (g ? `radix-${g}` : "")
              );
            })(),
            X = (0, F.useRef)(0),
            Q = null != N ? N : H.disableHoverableContent,
            et = null != B ? B : H.delayDuration,
            en = (0, F.useRef)(!1),
            [er = !1, ei] = (function ({
              prop: h,
              defaultProp: g,
              onChange: _ = () => {},
            }) {
              let [b, y] = (function ({ defaultProp: h, onChange: g }) {
                  let _ = (0, F.useState)(h),
                    [b] = _,
                    y = (0, F.useRef)(b),
                    A = dist_$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(g);
                  return (
                    (0, F.useEffect)(() => {
                      y.current !== b && (A(b), (y.current = b));
                    }, [b, y, A]),
                    _
                  );
                })({ defaultProp: g, onChange: _ }),
                A = void 0 !== h,
                N = A ? h : b,
                B = dist_$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(_),
                H = (0, F.useCallback)(
                  (g) => {
                    if (A) {
                      let _ = "function" == typeof g ? g(h) : g;
                      _ !== h && B(_);
                    } else y(g);
                  },
                  [A, h, y, B],
                );
              return [N, H];
            })({
              prop: b,
              defaultProp: y,
              onChange: (h) => {
                h
                  ? (H.onOpen(), document.dispatchEvent(new CustomEvent(tm)))
                  : H.onClose(),
                  null == A || A(h);
              },
            }),
            eo = (0, F.useMemo)(
              () =>
                er ? (en.current ? "delayed-open" : "instant-open") : "closed",
              [er],
            ),
            ea = (0, F.useCallback)(() => {
              window.clearTimeout(X.current), (en.current = !1), ei(!0);
            }, [ei]),
            es = (0, F.useCallback)(() => {
              window.clearTimeout(X.current), ei(!1);
            }, [ei]),
            el = (0, F.useCallback)(() => {
              window.clearTimeout(X.current),
                (X.current = window.setTimeout(() => {
                  (en.current = !0), ei(!0);
                }, et));
            }, [et, ei]);
          return (
            (0, F.useEffect)(() => () => window.clearTimeout(X.current), []),
            (0, F.createElement)(
              $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,
              U,
              (0, F.createElement)(
                tb,
                {
                  scope: g,
                  contentId: Y,
                  open: er,
                  stateAttribute: eo,
                  trigger: K,
                  onTriggerChange: q,
                  onTriggerEnter: (0, F.useCallback)(() => {
                    H.isOpenDelayed ? el() : ea();
                  }, [H.isOpenDelayed, el, ea]),
                  onTriggerLeave: (0, F.useCallback)(() => {
                    Q ? es() : window.clearTimeout(X.current);
                  }, [es, Q]),
                  onOpen: ea,
                  onClose: es,
                  disableHoverableContent: Q,
                },
                _,
              ),
            )
          );
        };
      function vector_plugin_6f82aee9_esm_objectWithoutProperties(h, g) {
        if (null == h) return {};
        var _,
          b,
          y = (function (h, g) {
            if (null == h) return {};
            var _,
              b,
              y = {},
              A = Object.keys(h);
            for (b = 0; b < A.length; b++)
              (_ = A[b]), g.indexOf(_) >= 0 || (y[_] = h[_]);
            return y;
          })(h, g);
        if (Object.getOwnPropertySymbols) {
          var A = Object.getOwnPropertySymbols(h);
          for (b = 0; b < A.length; b++)
            (_ = A[b]),
              !(g.indexOf(_) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(h, _) &&
                (y[_] = h[_]);
        }
        return y;
      }
      ((n8 = b || (b = {}))[(n8.UNSUPPORTED_INPUT = 0)] = "UNSUPPORTED_INPUT"),
        (n8[(n8.NO_COMPONENT_FOR_TYPE = 1)] = "NO_COMPONENT_FOR_TYPE"),
        (n8[(n8.UNKNOWN_INPUT = 2)] = "UNKNOWN_INPUT"),
        (n8[(n8.DUPLICATE_KEYS = 3)] = "DUPLICATE_KEYS"),
        (n8[(n8.ALREADY_REGISTERED_TYPE = 4)] = "ALREADY_REGISTERED_TYPE"),
        (n8[(n8.CLIPBOARD_ERROR = 5)] = "CLIPBOARD_ERROR"),
        (n8[(n8.THEME_ERROR = 6)] = "THEME_ERROR"),
        (n8[(n8.PATH_DOESNT_EXIST = 7)] = "PATH_DOESNT_EXIST"),
        (n8[(n8.INPUT_TYPE_OVERRIDE = 8)] = "INPUT_TYPE_OVERRIDE"),
        (n8[(n8.EMPTY_KEY = 9)] = "EMPTY_KEY");
      let tA = {
        [b.UNSUPPORTED_INPUT]: (h, g) => [
          `An input with type \`${h}\` input was found at path \`${g}\` but it's not supported yet.`,
        ],
        [b.NO_COMPONENT_FOR_TYPE]: (h, g) => [
          `Type \`${h}\` found at path \`${g}\` can't be displayed in panel because no component supports it yet.`,
        ],
        [b.UNKNOWN_INPUT]: (h, g) => [
          `input at path \`${h}\` is not recognized.`,
          g,
        ],
        [b.DUPLICATE_KEYS]: (h, g, _) => [
          `Key \`${h}\` of path \`${g}\` already exists at path \`${_}\`. Even nested keys need to be unique. Rename one of the keys.`,
        ],
        [b.ALREADY_REGISTERED_TYPE]: (h) => [
          `Type ${h} has already been registered. You can't register a component with the same type.`,
        ],
        [b.CLIPBOARD_ERROR]: (h) => ["Error copying the value", h],
        [b.THEME_ERROR]: (h, g) => [
          `Error accessing the theme \`${h}.${g}\` value.`,
        ],
        [b.PATH_DOESNT_EXIST]: (h) => [
          `Error getting the value at path \`${h}\`. There is probably an error in your \`render\` function.`,
        ],
        [b.PATH_DOESNT_EXIST]: (h) => [
          `Error accessing the value at path \`${h}\``,
        ],
        [b.INPUT_TYPE_OVERRIDE]: (h, g, _) => [
          `Input at path \`${h}\` already exists with type: \`${g}\`. Its type cannot be overridden with type \`${_}\`.`,
        ],
        [b.EMPTY_KEY]: () => [
          "Keys can not be empty, if you want to hide a label use whitespace.",
        ],
      };
      function _log(h, g, ..._) {
        let [b, ...y] = tA[g](..._);
        console[h]("LEVA: " + b, ...y);
      }
      let tO = _log.bind(null, "warn"),
        tD = _log.bind(null, "log"),
        tL = ["value"],
        tM = ["schema"],
        tI = ["value"],
        tN = [],
        tV = {};
      function getValueType(h) {
        let { value: g } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, tL);
        for (let h of tN) {
          let b = h(g, _);
          if (b) return b;
        }
      }
      function register(h, g) {
        let { schema: _ } = g,
          y = vector_plugin_6f82aee9_esm_objectWithoutProperties(g, tM);
        if (h in tV) {
          tO(b.ALREADY_REGISTERED_TYPE, h);
          return;
        }
        tN.push((g, b) => _(g, b) && h), (tV[h] = y);
      }
      function normalize$3(h, g, _, b) {
        let { normalize: y } = tV[h];
        if (y) return y(g, _, b);
        if ("object" != typeof g || !("value" in g)) return { value: g };
        let { value: A } = g,
          N = vector_plugin_6f82aee9_esm_objectWithoutProperties(g, tI);
        return { value: A, settings: N };
      }
      function format$2(h, g, _) {
        let { format: b } = tV[h];
        return b ? b(g, _) : g;
      }
      function vector_plugin_6f82aee9_esm_ownKeys(h, g) {
        var _ = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var b = Object.getOwnPropertySymbols(h);
          g &&
            (b = b.filter(function (g) {
              return Object.getOwnPropertyDescriptor(h, g).enumerable;
            })),
            _.push.apply(_, b);
        }
        return _;
      }
      function vector_plugin_6f82aee9_esm_objectSpread2(h) {
        for (var g = 1; g < arguments.length; g++) {
          var _ = null != arguments[g] ? arguments[g] : {};
          g % 2
            ? vector_plugin_6f82aee9_esm_ownKeys(Object(_), !0).forEach(
                function (g) {
                  var b;
                  (b = _[g]),
                    g in h
                      ? Object.defineProperty(h, g, {
                          value: b,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (h[g] = b);
                },
              )
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(_))
              : vector_plugin_6f82aee9_esm_ownKeys(Object(_)).forEach(
                  function (g) {
                    Object.defineProperty(
                      h,
                      g,
                      Object.getOwnPropertyDescriptor(_, g),
                    );
                  },
                );
        }
        return h;
      }
      let vector_plugin_6f82aee9_esm_clamp = (h, g, _) =>
          h > _ ? _ : h < g ? g : h,
        parseNumber = (h) => {
          if ("" === h || "number" == typeof h) return h;
          try {
            let g = (function evaluate(h) {
              if (isNaN(Number(h))) {
                if (tB.test(h)) {
                  let g = h.replace(tB, (h, g) => String(evaluate(g)));
                  return evaluate(g);
                }
                if (tz.test(h)) {
                  let g = h.replace(tz, (h, g, _) =>
                    String(Math.pow(Number(g), Number(_))),
                  );
                  return evaluate(g);
                }
                if (tH.test(h)) {
                  let g = h.replace(tH, (h, g, _) =>
                    String(Number(g) * Number(_)),
                  );
                  return evaluate(g);
                }
                if (tW.test(h)) {
                  let g = h.replace(tW, (h, g, _) => {
                    if (0 != _) return String(Number(g) / Number(_));
                    throw Error("Division by zero");
                  });
                  return evaluate(g);
                } else if (tU.test(h)) {
                  let g = h.replace(tU, (h, g, _) =>
                    String(Number(g) + Number(_)),
                  );
                  return evaluate(g);
                } else if (tZ.test(h)) {
                  let g = h.replace(tZ, (h, g, _) =>
                    String(Number(g) - Number(_)),
                  );
                  return evaluate(g);
                }
              }
              return Number(h);
            })(h);
            if (!isNaN(g)) return g;
          } catch (h) {}
          return parseFloat(h);
        },
        tF = Math.log(10);
      function getStep(h) {
        let g = Math.abs(+String(h).replace(".", ""));
        if (0 === g) return 0.01;
        for (; 0 !== g && g % 10 == 0; ) g /= 10;
        let _ = Math.floor(Math.log(g) / tF) + 1;
        return Math.max(
          Math.pow(10, Math.floor(Math.log10(Math.abs(h))) - _),
          0.001,
        );
      }
      let range = (h, g, _) => {
          if (_ === g) return 0;
          let b = vector_plugin_6f82aee9_esm_clamp(h, g, _);
          return (b - g) / (_ - g);
        },
        invertedRange = (h, g, _) => h * (_ - g) + g,
        getUid = () => "_" + Math.random().toString(36).substr(2, 9),
        tB = /\(([0-9+\-*/^ .]+)\)/,
        tz = /(\d+(?:\.\d+)?) ?\^ ?(\d+(?:\.\d+)?)/,
        tH = /(\d+(?:\.\d+)?) ?\* ?(\d+(?:\.\d+)?)/,
        tW = /(\d+(?:\.\d+)?) ?\/ ?(\d+(?:\.\d+)?)/,
        tU = /(\d+(?:\.\d+)?) ?\+ ?(\d+(?:\.\d+)?)/,
        tZ = /(\d+(?:\.\d+)?) ?- ?(\d+(?:\.\d+)?)/;
      function isObject(h) {
        return "[object Object]" === Object.prototype.toString.call(h);
      }
      let isEmptyObject = (h) => isObject(h) && 0 === Object.keys(h).length;
      ((n9 = y || (y = {})).BUTTON = "BUTTON"),
        (n9.BUTTON_GROUP = "BUTTON_GROUP"),
        (n9.MONITOR = "MONITOR"),
        (n9.FOLDER = "FOLDER"),
        ((n7 = A || (A = {})).SELECT = "SELECT"),
        (n7.IMAGE = "IMAGE"),
        (n7.NUMBER = "NUMBER"),
        (n7.COLOR = "COLOR"),
        (n7.STRING = "STRING"),
        (n7.BOOLEAN = "BOOLEAN"),
        (n7.INTERVAL = "INTERVAL"),
        (n7.VECTOR3D = "VECTOR3D"),
        (n7.VECTOR2D = "VECTOR2D");
      let tG = ["type", "__customInput"],
        tK = [
          "render",
          "label",
          "optional",
          "order",
          "disabled",
          "hint",
          "onChange",
          "onEditStart",
          "onEditEnd",
          "transient",
        ],
        tq = ["type"];
      function updateInput(h, g, _, b, y) {
        let { value: A, type: N, settings: F } = h;
        (h.value = sanitizeValue({ type: N, value: A, settings: F }, g, _, b)),
          (h.fromPanel = y);
      }
      let ValueError = function (h, g, _) {
        (this.type = "LEVA_ERROR"),
          (this.message = "LEVA: " + h),
          (this.previousValue = g),
          (this.error = _);
      };
      function sanitizeValue({ type: h, value: g, settings: _ }, b, y, A) {
        let N;
        let F = "SELECT" !== h && "function" == typeof b ? b(g) : b;
        try {
          N = (function (h, g, _, b, y, A) {
            let { sanitize: N } = tV[h];
            return N ? N(g, _, b, y, A) : g;
          })(h, F, _, g, y, A);
        } catch (h) {
          throw new ValueError(
            `The value \`${b}\` did not result in a correct value.`,
            g,
            h,
          );
        }
        return dequal(N, g) ? g : N;
      }
      let debounce = (h, g, _ = !1) => {
          let b = 0;
          return function () {
            let y = arguments,
              A = _ && !b,
              next = () => h.apply(this, y);
            window.clearTimeout(b),
              (b = window.setTimeout(next, g)),
              A && next();
          };
        },
        multiplyStep = (h) => (h.shiftKey ? 5 : h.altKey ? 0.2 : 1),
        tY = ["value"],
        tX = ["min", "max"],
        sanitize$3 = (h, { min: g = -1 / 0, max: _ = 1 / 0, suffix: b }) => {
          let y = parseFloat(h);
          if ("" === h || isNaN(y)) throw Error("Invalid number");
          let A = vector_plugin_6f82aee9_esm_clamp(y, g, _);
          return b ? A + b : A;
        },
        normalize$2 = (h) => {
          let { value: g } = h,
            _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, tY),
            { min: b = -1 / 0, max: y = 1 / 0 } = _,
            A = vector_plugin_6f82aee9_esm_objectWithoutProperties(_, tX),
            N = parseFloat(g),
            F = "string" == typeof g ? g.substring(("" + N).length) : void 0;
          N = vector_plugin_6f82aee9_esm_clamp(N, b, y);
          let B = _.step;
          !B &&
            (Number.isFinite(b)
              ? (B = Number.isFinite(y)
                  ? +(Math.abs(y - b) / 100).toPrecision(1)
                  : +(Math.abs(N - b) / 100).toPrecision(1))
              : Number.isFinite(y) &&
                (B = +(Math.abs(y - N) / 100).toPrecision(1)));
          let H = B ? 10 * getStep(B) : getStep(N);
          B = B || H / 10;
          let U = Math.round(
            vector_plugin_6f82aee9_esm_clamp(Math.log10(1 / H), 0, 2),
          );
          return {
            value: F ? N + F : N,
            settings: vector_plugin_6f82aee9_esm_objectSpread2(
              { initialValue: N, step: B, pad: U, min: b, max: y, suffix: F },
              A,
            ),
          };
        },
        sanitizeStep$1 = (h, { step: g, initialValue: _ }) =>
          _ + Math.round((h - _) / g) * g;
      var tJ = Object.freeze({
        __proto__: null,
        schema: (h) => {
          if ("number" == typeof h) return !0;
          if ("string" == typeof h) {
            let g = parseFloat(h);
            if (isNaN(g)) return !1;
            let _ = h.substring(("" + g).length).trim();
            return _.length < 4;
          }
          return !1;
        },
        sanitize: sanitize$3,
        format: (h, { pad: g = 0, suffix: _ }) => {
          let b = parseFloat(h).toFixed(g);
          return _ ? b + _ : b;
        },
        normalize: normalize$2,
        sanitizeStep: sanitizeStep$1,
      });
      function vector_plugin_6f82aee9_esm_extends() {
        return (vector_plugin_6f82aee9_esm_extends = Object.assign
          ? Object.assign.bind()
          : function (h) {
              for (var g = 1; g < arguments.length; g++) {
                var _ = arguments[g];
                for (var b in _)
                  Object.prototype.hasOwnProperty.call(_, b) && (h[b] = _[b]);
              }
              return h;
            }).apply(this, arguments);
      }
      let tQ = (0, F.createContext)({});
      function useInputContext() {
        return (0, F.useContext)(tQ);
      }
      let t0 = (0, F.createContext)(null),
        t1 = (0, F.createContext)(null),
        t2 = (0, F.createContext)(null);
      function vector_plugin_6f82aee9_esm_useStoreContext() {
        return (0, F.useContext)(t1);
      }
      let getDefaultTheme = () => ({
        colors: {
          elevation1: "#292d39",
          elevation2: "#181c20",
          elevation3: "#373c4b",
          accent1: "#0066dc",
          accent2: "#007bff",
          accent3: "#3c93ff",
          highlight1: "#535760",
          highlight2: "#8c92a4",
          highlight3: "#fefefe",
          vivid1: "#ffcc00",
          folderWidgetColor: "$highlight2",
          folderTextColor: "$highlight3",
          toolTipBackground: "$highlight3",
          toolTipText: "$elevation2",
        },
        radii: { xs: "2px", sm: "3px", lg: "10px" },
        space: {
          xs: "3px",
          sm: "6px",
          md: "10px",
          rowGap: "7px",
          colGap: "7px",
        },
        fonts: {
          mono: "ui-monospace, SFMono-Regular, Menlo, 'Roboto Mono', monospace",
          sans: "system-ui, sans-serif",
        },
        fontSizes: { root: "11px", toolTip: "$root" },
        sizes: {
          rootWidth: "280px",
          controlWidth: "160px",
          numberInputMinWidth: "38px",
          scrubberWidth: "8px",
          scrubberHeight: "16px",
          rowHeight: "24px",
          folderTitleHeight: "20px",
          checkboxSize: "16px",
          joystickWidth: "100px",
          joystickHeight: "100px",
          colorPickerWidth: "$controlWidth",
          colorPickerHeight: "100px",
          imagePreviewWidth: "$controlWidth",
          imagePreviewHeight: "100px",
          monitorHeight: "60px",
          titleBarHeight: "39px",
        },
        shadows: {
          level1: "0 0 9px 0 #00000088",
          level2: "0 4px 14px #00000033",
        },
        borderWidths: {
          root: "0px",
          input: "1px",
          focus: "1px",
          hover: "1px",
          active: "1px",
          folder: "1px",
        },
        fontWeights: { label: "normal", folder: "normal", button: "normal" },
      });
      function createStateClass(h, g) {
        let [_, b] = h.split(" "),
          y = {};
        return (
          "none" !== _ &&
            (y.boxShadow = `${g.inset ? "inset " : ""}0 0 0 $borderWidths${[
              g.key,
            ]} $colors${("default" !== _ && _) || g.borderColor}`),
          b && (y.backgroundColor = b),
          y
        );
      }
      let t3 = {
          $inputStyle: () => (h) =>
            createStateClass(h, {
              key: "$input",
              borderColor: "$highlight1",
              inset: !0,
            }),
          $focusStyle: () => (h) =>
            createStateClass(h, { key: "$focus", borderColor: "$accent2" }),
          $hoverStyle: () => (h) =>
            createStateClass(h, {
              key: "$hover",
              borderColor: "$accent1",
              inset: !0,
            }),
          $activeStyle: () => (h) =>
            createStateClass(h, {
              key: "$active",
              borderColor: "$accent1",
              inset: !0,
            }),
        },
        {
          styled: t6,
          css: t4,
          createTheme: t5,
          globalCss: t8,
          keyframes: t9,
        } = ((h) => {
          let g = ((h) => {
            let g = !1,
              _ = eC(h, (h) => {
                g = !0;
                let _ =
                    "prefix" in (h = ("object" == typeof h && h) || {})
                      ? String(h.prefix)
                      : "",
                  b = ("object" == typeof h.media && h.media) || {},
                  y =
                    "object" == typeof h.root
                      ? h.root || null
                      : globalThis.document || null,
                  A = ("object" == typeof h.theme && h.theme) || {},
                  N = {
                    prefix: _,
                    media: b,
                    theme: A,
                    themeMap: ("object" == typeof h.themeMap && h.themeMap) || {
                      ...eo,
                    },
                    utils: ("object" == typeof h.utils && h.utils) || {},
                  },
                  F = E(y),
                  B = {
                    css: M(N, F),
                    globalCss: D(N, F),
                    keyframes: V(N, F),
                    createTheme: J(N, F),
                    reset() {
                      F.reset(), B.theme.toString();
                    },
                    theme: {},
                    sheet: F,
                    config: N,
                    prefix: _,
                    getCssText: F.toString,
                    toString: F.toString,
                  };
                return String((B.theme = B.createTheme(A))), B;
              });
            return g || _.reset(), _;
          })(h);
          return (
            (g.styled = (({ config: h, sheet: g }) =>
              eS(h, () => {
                let _ = M(h, g);
                return (...h) => {
                  let g = _(...h),
                    b = g[ea].type,
                    y = F.forwardRef((h, _) => {
                      let y = (h && h.as) || b,
                        { props: A, deferredInjector: N } = g(h);
                      return (
                        delete A.as,
                        (A.ref = _),
                        N
                          ? F.createElement(
                              F.Fragment,
                              null,
                              F.createElement(y, A),
                              F.createElement(N, null),
                            )
                          : F.createElement(y, A)
                      );
                    });
                  return (
                    (y.className = g.className),
                    (y.displayName = `Styled.${b.displayName || b.name || b}`),
                    (y.selector = g.selector),
                    (y.toString = () => g.selector),
                    (y[ea] = g[ea]),
                    y
                  );
                };
              }))(g)),
            g
          );
        })({
          prefix: "leva",
          theme: getDefaultTheme(),
          utils: vector_plugin_6f82aee9_esm_objectSpread2(
            vector_plugin_6f82aee9_esm_objectSpread2({}, t3),
            {},
            {
              $flex: () => ({ display: "flex", alignItems: "center" }),
              $flexCenter: () => ({
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }),
              $reset: () => ({
                outline: "none",
                fontSize: "inherit",
                fontWeight: "inherit",
                color: "inherit",
                fontFamily: "inherit",
                border: "none",
                backgroundColor: "transparent",
                appearance: "none",
              }),
              $draggable: () => ({
                touchAction: "none",
                WebkitUserDrag: "none",
                userSelect: "none",
              }),
              $focus: (h) => ({ "&:focus": t3.$focusStyle()(h) }),
              $focusWithin: (h) => ({ "&:focus-within": t3.$focusStyle()(h) }),
              $hover: (h) => ({ "&:hover": t3.$hoverStyle()(h) }),
              $active: (h) => ({ "&:active": t3.$activeStyle()(h) }),
            },
          ),
        }),
        t7 = t8({
          ".leva__panel__dragged": {
            WebkitUserDrag: "none",
            userSelect: "none",
            input: { userSelect: "none" },
            "*": { cursor: "ew-resize !important" },
          },
        });
      function useTh(h, g) {
        let { theme: _ } = (0, F.useContext)(t0);
        if (!(h in _) || !(g in _[h])) return tO(b.THEME_ERROR, h, g), "";
        let y = g;
        for (;;) {
          let g = _[h][y];
          if ("string" != typeof g || "$" !== g.charAt(0)) return g;
          y = g.substr(1);
        }
      }
      let ne = t6("input", {
          $reset: "",
          padding: "0 $sm",
          width: 0,
          minWidth: 0,
          flex: 1,
          height: "100%",
          variants: {
            levaType: { number: { textAlign: "right" } },
            as: { textarea: { padding: "$sm" } },
          },
        }),
        nt = t6("div", {
          $draggable: "",
          height: "100%",
          $flexCenter: "",
          position: "relative",
          padding: "0 $xs",
          fontSize: "0.8em",
          opacity: 0.8,
          cursor: "default",
          touchAction: "none",
          [`& + ${ne}`]: { paddingLeft: 0 },
        }),
        nn = t6(nt, {
          cursor: "ew-resize",
          marginRight: "-$xs",
          textTransform: "uppercase",
          opacity: 0.3,
          "&:hover": { opacity: 1 },
          variants: {
            dragging: { true: { backgroundColor: "$accent2", opacity: 1 } },
          },
        }),
        nr = t6("div", {
          $flex: "",
          position: "relative",
          borderRadius: "$sm",
          overflow: "hidden",
          color: "inherit",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          $inputStyle: "$elevation1",
          $hover: "",
          $focusWithin: "",
          variants: { textArea: { true: { height: "auto" } } },
        }),
        ni = [
          "innerLabel",
          "value",
          "onUpdate",
          "onChange",
          "onKeyDown",
          "type",
          "id",
          "inputType",
          "rows",
        ],
        no = ["onUpdate"];
      function ValueInput(h) {
        let {
            innerLabel: g,
            value: _,
            onUpdate: b,
            onChange: y,
            onKeyDown: A,
            type: N,
            id: B,
            inputType: H = "text",
            rows: U = 0,
          } = h,
          K = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, ni),
          {
            id: q,
            emitOnEditStart: Y,
            emitOnEditEnd: X,
            disabled: Q,
          } = useInputContext(),
          et = (0, F.useRef)(null),
          en = U > 0,
          er = en ? "textarea" : "input",
          ei = (0, F.useCallback)(
            (h) => (g) => {
              let _ = g.currentTarget.value;
              h(_);
            },
            [],
          );
        F.useEffect(() => {
          let h = et.current,
            g = ei((h) => {
              b(h), X();
            });
          return (
            null == h || h.addEventListener("blur", g),
            () => (null == h ? void 0 : h.removeEventListener("blur", g))
          );
        }, [ei, b, X]);
        let eo = (0, F.useCallback)(
            (h) => {
              "Enter" === h.key && ei(b)(h);
            },
            [ei, b],
          ),
          ea = Object.assign({ as: er }, en ? { rows: U } : {}, K);
        return F.createElement(
          nr,
          { textArea: en },
          g && "string" == typeof g ? F.createElement(nt, null, g) : g,
          F.createElement(
            ne,
            vector_plugin_6f82aee9_esm_extends(
              {
                levaType: N,
                ref: et,
                id: B || q,
                type: H,
                autoComplete: "off",
                spellCheck: "false",
                value: _,
                onChange: ei(y),
                onFocus: () => Y(),
                onKeyPress: eo,
                onKeyDown: A,
                disabled: Q,
              },
              ea,
            ),
          ),
        );
      }
      function NumberInput(h) {
        let { onUpdate: g } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, no),
          b = (0, F.useCallback)((h) => g(parseNumber(h)), [g]),
          y = (0, F.useCallback)(
            (h) => {
              let _ = "ArrowUp" === h.key ? 1 : "ArrowDown" === h.key ? -1 : 0;
              if (_) {
                h.preventDefault();
                let b = h.altKey ? 0.1 : h.shiftKey ? 10 : 1;
                g((h) => parseFloat(h) + _ * b);
              }
            },
            [g],
          );
        return F.createElement(
          ValueInput,
          vector_plugin_6f82aee9_esm_extends({}, _, {
            onUpdate: b,
            onKeyDown: y,
            type: "number",
          }),
        );
      }
      let na = t6("div", {}),
        ns = t6("div", {
          position: "relative",
          background: "$elevation2",
          transition: "height 300ms ease",
          variants: {
            fill: { true: {}, false: {} },
            flat: { false: {}, true: {} },
            isRoot: {
              true: {},
              false: {
                paddingLeft: "$md",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "$borderWidths$folder",
                  height: "100%",
                  backgroundColor: "$folderWidgetColor",
                  opacity: 0.4,
                  transform: "translateX(-50%)",
                },
              },
            },
          },
          compoundVariants: [
            {
              isRoot: !0,
              fill: !1,
              css: {
                overflowY: "auto",
                maxHeight: "calc(100vh - 20px - $$titleBarHeight)",
              },
            },
            { isRoot: !0, flat: !1, css: { borderRadius: "$lg" } },
          ],
        }),
        nl = t6("div", {
          $flex: "",
          color: "$folderTextColor",
          userSelect: "none",
          cursor: "pointer",
          height: "$folderTitleHeight",
          fontWeight: "$folder",
          "> svg": {
            marginLeft: -4,
            marginRight: 4,
            cursor: "pointer",
            fill: "$folderWidgetColor",
            opacity: 0.6,
          },
          "&:hover > svg": { fill: "$folderWidgetColor" },
          [`&:hover + ${ns}::after`]: { opacity: 0.6 },
          [`${na}:hover > & + ${ns}::after`]: { opacity: 0.6 },
          [`${na}:hover > & > svg`]: { opacity: 1 },
        }),
        nu = t6("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "100%",
          rowGap: "$rowGap",
          transition: "opacity 250ms ease",
          variants: {
            toggled: {
              true: { opacity: 1, transitionDelay: "250ms" },
              false: {
                opacity: 0,
                transitionDelay: "0ms",
                pointerEvents: "none",
              },
            },
            isRoot: {
              true: {
                "& > div": { paddingLeft: "$md", paddingRight: "$md" },
                "& > div:first-of-type": { paddingTop: "$sm" },
                "& > div:last-of-type": { paddingBottom: "$sm" },
                [`> ${na}:not(:first-of-type)`]: {
                  paddingTop: "$sm",
                  marginTop: "$md",
                  borderTop: "$borderWidths$folder solid $colors$elevation1",
                },
              },
            },
          },
        }),
        nc = t6("div", {
          position: "relative",
          zIndex: 100,
          display: "grid",
          rowGap: "$rowGap",
          gridTemplateRows: "minmax($sizes$rowHeight, max-content)",
          alignItems: "center",
          color: "$highlight2",
          [`${nu} > &`]: {
            "&:first-of-type": { marginTop: "$rowGap" },
            "&:last-of-type": { marginBottom: "$rowGap" },
          },
          variants: {
            disabled: {
              true: { pointerEvents: "none" },
              false: { "&:hover,&:focus-within": { color: "$highlight3" } },
            },
          },
        }),
        nd = t6(nc, {
          gridTemplateColumns: "auto $sizes$controlWidth",
          columnGap: "$colGap",
        }),
        nf = t6("div", {
          $flex: "",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          "& > div": { marginLeft: "$colGap", padding: "0 $xs", opacity: 0.4 },
          "& > div:hover": { opacity: 0.8 },
          "& > div > svg": {
            display: "none",
            cursor: "pointer",
            width: 13,
            minWidth: 13,
            height: 13,
            backgroundColor: "$elevation2",
          },
          "&:hover > div > svg": { display: "block" },
          variants: {
            align: {
              top: {
                height: "100%",
                alignItems: "flex-start",
                paddingTop: "$sm",
              },
            },
          },
        }),
        np = t6("input", {
          $reset: "",
          height: 0,
          width: 0,
          opacity: 0,
          margin: 0,
          "& + label": {
            position: "relative",
            $flexCenter: "",
            height: "100%",
            userSelect: "none",
            cursor: "pointer",
            paddingLeft: 2,
            paddingRight: "$sm",
            pointerEvents: "auto",
          },
          "& + label:after": {
            content: '""',
            width: 6,
            height: 6,
            backgroundColor: "$elevation3",
            borderRadius: "50%",
            $activeStyle: "",
          },
          "&:focus + label:after": { $focusStyle: "" },
          "& + label:active:after": {
            backgroundColor: "$accent1",
            $focusStyle: "",
          },
          "&:checked + label:after": { backgroundColor: "$accent1" },
        }),
        nh = t6("label", {
          fontWeight: "$label",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          "& > svg": { display: "block" },
        }),
        nm = t6("div", {
          opacity: 1,
          variants: {
            disabled: {
              true: {
                opacity: 0.6,
                pointerEvents: "none",
                [`& ${nh}`]: { pointerEvents: "auto" },
              },
            },
          },
        }),
        ng = t6("div", {
          position: "fixed",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: 1e3,
          userSelect: "none",
        }),
        nv = t6("div", {
          background: "$toolTipBackground",
          fontFamily: "$sans",
          fontSize: "$toolTip",
          padding: "$xs $sm",
          color: "$toolTipText",
          borderRadius: "$xs",
          boxShadow: "$level2",
          maxWidth: 260,
        }),
        n_ = t6(tR, { fill: "$toolTipBackground" });
      function Portal({ children: h }) {
        let { className: g } = (0, F.useContext)(t0);
        return F.createElement(K, { className: g }, h);
      }
      let nb = ["align"];
      function OptionalToggle() {
        let { id: h, disable: g, disabled: _ } = useInputContext();
        return F.createElement(
          F.Fragment,
          null,
          F.createElement(np, {
            id: h + "__disable",
            type: "checkbox",
            checked: !_,
            onChange: () => g(!_),
          }),
          F.createElement("label", { htmlFor: h + "__disable" }),
        );
      }
      function RawLabel(h) {
        let { id: g, optional: _, hint: b } = useInputContext(),
          y = h.htmlFor || (g ? { htmlFor: g } : null),
          A = b || "string" != typeof h.children ? null : { title: h.children };
        return F.createElement(
          F.Fragment,
          null,
          _ && F.createElement(OptionalToggle, null),
          void 0 !== b
            ? F.createElement(
                $a093c7e1ec25a057$export$be92b6f5f03c0fe9,
                null,
                F.createElement(
                  tw,
                  { asChild: !0 },
                  F.createElement(
                    nh,
                    vector_plugin_6f82aee9_esm_extends({}, y, h),
                  ),
                ),
                F.createElement(
                  tP,
                  { side: "top", sideOffset: 2 },
                  F.createElement(nv, null, b, F.createElement(n_, null)),
                ),
              )
            : F.createElement(
                nh,
                vector_plugin_6f82aee9_esm_extends({}, y, A, h),
              ),
        );
      }
      function Label(h) {
        let { align: g } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, nb),
          { value: y, label: A, key: N, disabled: B } = useInputContext(),
          { hideCopyButton: H } = (0, F.useContext)(t2),
          [U, K] = (0, F.useState)(!1),
          handleClick = async () => {
            try {
              await navigator.clipboard.writeText(
                JSON.stringify({ [N]: null != y ? y : "" }),
              ),
                K(!0);
            } catch (h) {
              tO(b.CLIPBOARD_ERROR, { [N]: y });
            }
          };
        return F.createElement(
          nf,
          { align: g, onPointerLeave: () => K(!1) },
          F.createElement(RawLabel, _),
          !H &&
            void 0 !== N &&
            !B &&
            F.createElement(
              "div",
              { title: `Click to copy ${"string" == typeof A ? A : N} value` },
              U
                ? F.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    F.createElement("path", {
                      d: "M9 2a1 1 0 000 2h2a1 1 0 100-2H9z",
                    }),
                    F.createElement("path", {
                      fillRule: "evenodd",
                      d: "M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                      clipRule: "evenodd",
                    }),
                  )
                : F.createElement(
                    "svg",
                    {
                      onClick: handleClick,
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 20 20",
                      fill: "currentColor",
                    },
                    F.createElement("path", {
                      d: "M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",
                    }),
                    F.createElement("path", {
                      d: "M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z",
                    }),
                  ),
            ),
        );
      }
      let ny = ["toggled"],
        nx = t6("svg", {
          fill: "currentColor",
          transition: "transform 350ms ease, fill 250ms ease",
        });
      function Chevron(h) {
        let { toggled: g } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, ny);
        return F.createElement(
          nx,
          vector_plugin_6f82aee9_esm_extends(
            {
              width: "9",
              height: "5",
              viewBox: "0 0 9 5",
              xmlns: "http://www.w3.org/2000/svg",
              style: { transform: `rotate(${g ? 0 : -90}deg)` },
            },
            _,
          ),
          F.createElement("path", {
            d: "M3.8 4.4c.4.3 1 .3 1.4 0L8 1.7A1 1 0 007.4 0H1.6a1 1 0 00-.7 1.7l3 2.7z",
          }),
        );
      }
      let nw = ["input"];
      function Row(h) {
        let { input: g } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, nw);
        return g ? F.createElement(nd, _) : F.createElement(nc, _);
      }
      function useInputSetters({
        value: h,
        type: g,
        settings: _,
        setValue: b,
      }) {
        let [y, A] = (0, F.useState)(format$2(g, h, _)),
          N = (0, F.useRef)(h),
          B = (0, F.useRef)(_);
        B.current = _;
        let H = (0, F.useCallback)((h) => A(format$2(g, h, B.current)), [g]),
          U = (0, F.useCallback)(
            (h) => {
              try {
                b(h);
              } catch (_) {
                let { type: h, previousValue: g } = _;
                if ("LEVA_ERROR" !== h) throw _;
                H(g);
              }
            },
            [H, b],
          );
        return (
          (0, F.useEffect)(() => {
            dequal(h, N.current) || H(h), (N.current = h);
          }, [h, H]),
          { displayValue: y, onChange: A, onUpdate: U }
        );
      }
      function vector_plugin_6f82aee9_esm_useDrag(h, g) {
        let { emitOnEditStart: _, emitOnEditEnd: b } = useInputContext();
        return (
          eI.set(eV.key, eV.engine),
          eN.set(eV.key, eV.resolver),
          (function (h, g = {}, _, b) {
            let y = F.useMemo(() => new Controller(h), []);
            if (
              (y.applyHandlers(h, void 0),
              y.applyConfig(g, _),
              F.useEffect(y.effect.bind(y)),
              F.useEffect(() => y.clean.bind(y), []),
              void 0 === g.target)
            )
              return y.bind.bind(y);
          })(
            {
              drag: (g) => {
                g.first &&
                  (document.body.classList.add("leva__panel__dragged"),
                  null == _ || _());
                let y = h(g);
                return (
                  g.last &&
                    (document.body.classList.remove("leva__panel__dragged"),
                    null == b || b()),
                  y
                );
              },
            },
            g || {},
            "drag",
          )
        );
      }
      function useTransform() {
        let h = (0, F.useRef)(null),
          g = (0, F.useRef)({ x: 0, y: 0 }),
          _ = (0, F.useCallback)((_) => {
            Object.assign(g.current, _),
              h.current &&
                (h.current.style.transform = `translate3d(${g.current.x}px, ${g.current.y}px, 0)`);
          }, []);
        return [h, _];
      }
      let nC = ["__refCount"],
        getInputAtPath = (h, g) => {
          if (!h[g]) return null;
          let _ = h[g],
            b = vector_plugin_6f82aee9_esm_objectWithoutProperties(_, nC);
          return b;
        },
        nS = t6("div", {
          variants: {
            hasRange: {
              true: {
                position: "relative",
                display: "grid",
                gridTemplateColumns: "auto $sizes$numberInputMinWidth",
                columnGap: "$colGap",
                alignItems: "center",
              },
            },
          },
        }),
        nE = t6("div", {
          position: "relative",
          width: "100%",
          height: 2,
          borderRadius: "$xs",
          backgroundColor: "$elevation1",
        }),
        nP = t6("div", {
          position: "absolute",
          width: "$scrubberWidth",
          height: "$scrubberHeight",
          borderRadius: "$xs",
          boxShadow: "0 0 0 2px $colors$elevation2",
          backgroundColor: "$accent2",
          cursor: "pointer",
          $active: "none $accent1",
          $hover: "none $accent3",
          variants: {
            position: {
              left: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                transform:
                  "translateX(calc(-0.5 * ($sizes$scrubberWidth + 4px)))",
              },
              right: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                transform:
                  "translateX(calc(0.5 * ($sizes$scrubberWidth + 4px)))",
              },
            },
          },
        }),
        nT = t6("div", {
          position: "relative",
          $flex: "",
          height: "100%",
          cursor: "pointer",
          touchAction: "none",
        }),
        nj = t6("div", {
          position: "absolute",
          height: "100%",
          backgroundColor: "$accent2",
        });
      function RangeSlider({
        value: h,
        min: g,
        max: _,
        onDrag: b,
        step: y,
        initialValue: A,
      }) {
        let N = (0, F.useRef)(null),
          B = (0, F.useRef)(null),
          H = (0, F.useRef)(0),
          U = useTh("sizes", "scrubberWidth"),
          K = vector_plugin_6f82aee9_esm_useDrag(
            ({ event: F, first: K, xy: [q], movement: [Y], memo: X }) => {
              if (K) {
                let { width: b, left: y } = N.current.getBoundingClientRect();
                H.current = b - parseFloat(U);
                let A = (null == F ? void 0 : F.target) === B.current;
                X = A ? h : invertedRange((q - y) / b, g, _);
              }
              let Q = X + invertedRange(Y / H.current, 0, _ - g);
              return b(sanitizeStep$1(Q, { step: y, initialValue: A })), X;
            },
          ),
          q = range(h, g, _);
        return F.createElement(
          nT,
          vector_plugin_6f82aee9_esm_extends({ ref: N }, K()),
          F.createElement(
            nE,
            null,
            F.createElement(nj, {
              style: { left: 0, right: `${(1 - q) * 100}%` },
            }),
          ),
          F.createElement(nP, {
            ref: B,
            style: { left: `calc(${q} * (100% - ${U}))` },
          }),
        );
      }
      let nk = F.memo(
        ({ label: h, onUpdate: g, step: _, innerLabelTrim: b }) => {
          let [y, A] = (0, F.useState)(!1),
            N = vector_plugin_6f82aee9_esm_useDrag(
              ({ active: h, delta: [b], event: y, memo: N = 0 }) => (
                A(h),
                Math.abs((N += b / 2)) >= 1 &&
                  (g(
                    (h) => parseFloat(h) + Math.floor(N) * _ * multiplyStep(y),
                  ),
                  (N = 0)),
                N
              ),
            );
          return F.createElement(
            nn,
            vector_plugin_6f82aee9_esm_extends(
              { dragging: y, title: h.length > 1 ? h : "" },
              N(),
            ),
            h.slice(0, b),
          );
        },
      );
      function Number$1({
        label: h,
        id: g,
        displayValue: _,
        onUpdate: b,
        onChange: y,
        settings: A,
        innerLabelTrim: N = 1,
      }) {
        let B =
          N > 0 &&
          F.createElement(nk, {
            label: h,
            step: A.step,
            onUpdate: b,
            innerLabelTrim: N,
          });
        return F.createElement(NumberInput, {
          id: g,
          value: String(_),
          onUpdate: b,
          onChange: y,
          innerLabel: B,
        });
      }
      let { sanitizeStep: n$ } = tJ,
        nR = vector_plugin_6f82aee9_esm_objectWithoutProperties(tJ, [
          "sanitizeStep",
        ]);
      var nA = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let h = useInputContext(),
                { label: g, value: _, onUpdate: b, settings: y, id: A } = h,
                { min: N, max: B } = y,
                H = B !== 1 / 0 && N !== -1 / 0;
              return F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, null, g),
                F.createElement(
                  nS,
                  { hasRange: H },
                  H &&
                    F.createElement(
                      RangeSlider,
                      vector_plugin_6f82aee9_esm_extends(
                        { value: parseFloat(_), onDrag: b },
                        y,
                      ),
                    ),
                  F.createElement(
                    Number$1,
                    vector_plugin_6f82aee9_esm_extends({}, h, {
                      id: A,
                      label: "value",
                      innerLabelTrim: H ? 0 : 1,
                    }),
                  ),
                ),
              );
            },
          },
          nR,
        ),
        nO = Object.freeze({
          __proto__: null,
          schema: (h, g) =>
            v8n()
              .schema({
                options: v8n().passesAnyOf(v8n().object(), v8n().array()),
              })
              .test(g),
          sanitize: (h, { values: g }) => {
            if (0 > g.indexOf(h))
              throw Error("Selected value doesn't match Select options");
            return h;
          },
          format: (h, { values: g }) => g.indexOf(h),
          normalize: (h) => {
            let g,
              _,
              { value: b, options: y } = h;
            return (
              Array.isArray(y)
                ? ((_ = y), (g = y.map((h) => String(h))))
                : ((_ = Object.values(y)), (g = Object.keys(y))),
              "value" in h
                ? _.includes(b) || (g.unshift(String(b)), _.unshift(b))
                : (b = _[0]),
              Object.values(y).includes(b) || (y[String(b)] = b),
              { value: b, settings: { keys: g, values: _ } }
            );
          },
        });
      let nD = t6("div", {
          $flexCenter: "",
          position: "relative",
          "> svg": {
            pointerEvents: "none",
            position: "absolute",
            right: "$md",
          },
        }),
        nL = t6("select", {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
        }),
        nM = t6("div", {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "$rowHeight",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          padding: "0 $sm",
          cursor: "pointer",
          [`${nL}:focus + &`]: { $focusStyle: "" },
          [`${nL}:hover + &`]: { $hoverStyle: "" },
        });
      function Select({
        displayValue: h,
        value: g,
        onUpdate: _,
        id: b,
        settings: y,
        disabled: A,
      }) {
        let { keys: N, values: B } = y,
          H = (0, F.useRef)();
        return (
          g === B[h] && (H.current = N[h]),
          F.createElement(
            nD,
            null,
            F.createElement(
              nL,
              {
                id: b,
                value: h,
                onChange: (h) => _(B[Number(h.currentTarget.value)]),
                disabled: A,
              },
              N.map((h, g) =>
                F.createElement("option", { key: h, value: g }, h),
              ),
            ),
            F.createElement(nM, null, H.current),
            F.createElement(Chevron, { toggled: !0 }),
          )
        );
      }
      var nI = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                label: h,
                value: g,
                displayValue: _,
                onUpdate: b,
                id: y,
                disabled: A,
                settings: N,
              } = useInputContext();
              return F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, null, h),
                F.createElement(Select, {
                  id: y,
                  value: g,
                  displayValue: _,
                  onUpdate: b,
                  settings: N,
                  disabled: A,
                }),
              );
            },
          },
          nO,
        ),
        nN = Object.freeze({
          __proto__: null,
          schema: (h) => v8n().string().test(h),
          sanitize: (h) => {
            if ("string" != typeof h) throw Error("Invalid string");
            return h;
          },
          normalize: ({ value: h, editable: g = !0, rows: _ = !1 }) => ({
            value: h,
            settings: {
              editable: g,
              rows: "number" == typeof _ ? _ : _ ? 5 : 0,
            },
          }),
        });
      let nV = ["displayValue", "onUpdate", "onChange", "editable"],
        nF = t6("div", { whiteSpace: "pre-wrap" });
      function String$1(h) {
        let { displayValue: g, onUpdate: _, onChange: b, editable: y = !0 } = h,
          A = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, nV);
        return y
          ? F.createElement(
              ValueInput,
              vector_plugin_6f82aee9_esm_extends(
                { value: g, onUpdate: _, onChange: b },
                A,
              ),
            )
          : F.createElement(nF, null, g);
      }
      var nB = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                label: h,
                settings: g,
                displayValue: _,
                onUpdate: b,
                onChange: y,
              } = useInputContext();
              return F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, null, h),
                F.createElement(
                  String$1,
                  vector_plugin_6f82aee9_esm_extends(
                    { displayValue: _, onUpdate: b, onChange: y },
                    g,
                  ),
                ),
              );
            },
          },
          nN,
        ),
        nz = Object.freeze({
          __proto__: null,
          schema: (h) => v8n().boolean().test(h),
          sanitize: (h) => {
            if ("boolean" != typeof h) throw Error("Invalid boolean");
            return h;
          },
        });
      let nH = t6("div", {
        position: "relative",
        $flex: "",
        height: "$rowHeight",
        input: { $reset: "", height: 0, width: 0, opacity: 0, margin: 0 },
        label: {
          position: "relative",
          $flexCenter: "",
          userSelect: "none",
          cursor: "pointer",
          height: "$checkboxSize",
          width: "$checkboxSize",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          $hover: "",
        },
        "input:focus + label": { $focusStyle: "" },
        "input:focus:checked + label, input:checked + label:hover": {
          $hoverStyle: "$accent3",
        },
        "input + label:active": { backgroundColor: "$accent1" },
        "input:checked + label:active": { backgroundColor: "$accent1" },
        "label > svg": {
          display: "none",
          width: "90%",
          height: "90%",
          stroke: "$highlight3",
        },
        "input:checked + label": { backgroundColor: "$accent2" },
        "input:checked + label > svg": { display: "block" },
      });
      function vector_plugin_6f82aee9_esm_Boolean({
        value: h,
        onUpdate: g,
        id: _,
        disabled: b,
      }) {
        return F.createElement(
          nH,
          null,
          F.createElement("input", {
            id: _,
            type: "checkbox",
            checked: h,
            onChange: (h) => g(h.currentTarget.checked),
            disabled: b,
          }),
          F.createElement(
            "label",
            { htmlFor: _ },
            F.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              F.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M5 13l4 4L19 7",
              }),
            ),
          ),
        );
      }
      var nW = vector_plugin_6f82aee9_esm_objectSpread2(
        {
          component: function () {
            let {
              label: h,
              value: g,
              onUpdate: _,
              disabled: b,
              id: y,
            } = useInputContext();
            return F.createElement(
              Row,
              { input: !0 },
              F.createElement(Label, null, h),
              F.createElement(vector_plugin_6f82aee9_esm_Boolean, {
                value: g,
                onUpdate: _,
                id: y,
                disabled: b,
              }),
            );
          },
        },
        nz,
      );
      let nU = ["locked"];
      function Coordinate({
        value: h,
        id: g,
        valueKey: _,
        settings: b,
        onUpdate: y,
        innerLabelTrim: A,
      }) {
        let N = (0, F.useRef)(h[_]);
        N.current = h[_];
        let B = (0, F.useCallback)(
            (h) =>
              y({
                [_]: sanitizeValue(
                  { type: "NUMBER", value: N.current, settings: b },
                  h,
                ),
              }),
            [y, b, _],
          ),
          H = useInputSetters({
            type: "NUMBER",
            value: h[_],
            settings: b,
            setValue: B,
          });
        return F.createElement(Number$1, {
          id: g,
          label: _,
          value: h[_],
          displayValue: H.displayValue,
          onUpdate: H.onUpdate,
          onChange: H.onChange,
          settings: b,
          innerLabelTrim: A,
        });
      }
      let nZ = t6("div", {
        display: "grid",
        columnGap: "$colGap",
        gridAutoFlow: "column dense",
        alignItems: "center",
        variants: {
          withLock: {
            true: {
              gridTemplateColumns: "10px auto",
              "> svg": { cursor: "pointer" },
            },
          },
        },
      });
      function Lock(h) {
        let { locked: g } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, nU);
        return F.createElement(
          "svg",
          vector_plugin_6f82aee9_esm_extends(
            {
              width: "10",
              height: "10",
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            _,
          ),
          g
            ? F.createElement("path", {
                d: "M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              })
            : F.createElement("path", {
                d: "M9 3.63601C9 2.76044 9.24207 2.11211 9.64154 1.68623C10.0366 1.26502 10.6432 1 11.5014 1C12.4485 1 13.0839 1.30552 13.4722 1.80636C13.8031 2.23312 14 2.84313 14 3.63325H15C15 2.68242 14.7626 1.83856 14.2625 1.19361C13.6389 0.38943 12.6743 0 11.5014 0C10.4294 0 9.53523 0.337871 8.91218 1.0021C8.29351 1.66167 8 2.58135 8 3.63601V6H1C0.447715 6 0 6.44772 0 7V13C0 13.5523 0.447715 14 1 14H10C10.5523 14 11 13.5523 11 13V7C11 6.44772 10.5523 6 10 6H9V3.63601ZM1 7H10V13H1V7Z",
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }),
        );
      }
      function Vector({
        value: h,
        onUpdate: g,
        settings: _,
        innerLabelTrim: b,
      }) {
        let { id: y, setSettings: A } = useInputContext(),
          { lock: N, locked: B } = _;
        return F.createElement(
          nZ,
          { withLock: N },
          N &&
            F.createElement(Lock, {
              locked: B,
              onClick: () => A({ locked: !B }),
            }),
          Object.keys(h).map((A, N) =>
            F.createElement(Coordinate, {
              id: 0 === N ? y : `${y}.${A}`,
              key: A,
              valueKey: A,
              value: h,
              settings: _[A],
              onUpdate: g,
              innerLabelTrim: b,
            }),
          ),
        );
      }
      let normalizeKeyedNumberSettings = (h, g) => {
          let _ = {},
            b = 0,
            y = 1 / 0;
          for (let A in (Object.entries(h).forEach(([h, A]) => {
            (_[h] = normalize$2(
              vector_plugin_6f82aee9_esm_objectSpread2({ value: A }, g[h]),
            ).settings),
              (b = Math.max(b, _[h].step)),
              (y = Math.min(y, _[h].pad));
          }),
          _)) {
            let { step: h, min: N, max: F } = g[A] || {};
            isFinite(h) ||
              (isFinite(N) && isFinite(F)) ||
              ((_[A].step = b), (_[A].pad = y));
          }
          return _;
        },
        nG = ["lock"],
        nK = ["value"];
      function convert(h, g, _) {
        return (Array.isArray(h) ? "array" : "object") === g
          ? h
          : "array" === g
            ? Object.values(h)
            : h.reduce((h, g, b) => Object.assign(h, { [_[b]]: g }), {});
      }
      let sanitizeVector = (h, g, _) => {
          let b = convert(h, "object", g.keys);
          for (let h in b) b[h] = sanitize$3(b[h], g[h]);
          let y = Object.keys(b),
            A = {};
          if (y.length === g.keys.length) A = b;
          else {
            let h = convert(_, "object", g.keys);
            if (1 === y.length && g.locked) {
              let g = y[0],
                _ = b[g],
                N = h[g],
                F = 0 !== N ? _ / N : 1;
              for (let b in h) b === g ? (A[g] = _) : (A[b] = h[b] * F);
            } else
              A = vector_plugin_6f82aee9_esm_objectSpread2(
                vector_plugin_6f82aee9_esm_objectSpread2({}, h),
                b,
              );
          }
          return convert(A, g.format, g.keys);
        },
        formatVector = (h, g) => convert(h, "object", g.keys),
        isNumberSettings = (h) =>
          !!h && ("step" in h || "min" in h || "max" in h);
      function getVectorPlugin(h) {
        return {
          schema: (function (h) {
            let g = v8n().array().length(h).every.number(),
              isVectorObject = (g) => {
                if (!g || "object" != typeof g) return !1;
                let _ = Object.values(g);
                return _.length === h && _.every((h) => isFinite(h));
              };
            return (h) => g.test(h) || isVectorObject(h);
          })(h.length),
          normalize: (g) => {
            let { value: _ } = g;
            return (function (h, g, _ = []) {
              let { lock: b = !1 } = g,
                y = vector_plugin_6f82aee9_esm_objectWithoutProperties(g, nG),
                A = Array.isArray(h) ? "array" : "object",
                N = "object" === A ? Object.keys(h) : _,
                F = convert(h, "object", N),
                B = isNumberSettings(y)
                  ? N.reduce((h, g) => Object.assign(h, { [g]: y }), {})
                  : y,
                H = normalizeKeyedNumberSettings(F, B);
              return {
                value: "array" === A ? h : F,
                settings: vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2({}, H),
                  {},
                  { format: A, keys: N, lock: b, locked: !1 },
                ),
              };
            })(_, vector_plugin_6f82aee9_esm_objectWithoutProperties(g, nK), h);
          },
          format: (h, g) => formatVector(h, g),
          sanitize: (h, g, _) => sanitizeVector(h, g, _),
        };
      }
      var nq = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) },
        colord_t = function (h) {
          return "string" == typeof h ? h.length > 0 : "number" == typeof h;
        },
        colord_n = function (h, g, _) {
          return (
            void 0 === g && (g = 0),
            void 0 === _ && (_ = Math.pow(10, g)),
            Math.round(_ * h) / _ + 0
          );
        },
        colord_e = function (h, g, _) {
          return (
            void 0 === g && (g = 0),
            void 0 === _ && (_ = 1),
            h > _ ? _ : h > g ? h : g
          );
        },
        colord_u = function (h) {
          return (h = isFinite(h) ? h % 360 : 0) > 0 ? h : h + 360;
        },
        colord_a = function (h) {
          return {
            r: colord_e(h.r, 0, 255),
            g: colord_e(h.g, 0, 255),
            b: colord_e(h.b, 0, 255),
            a: colord_e(h.a),
          };
        },
        colord_o = function (h) {
          return {
            r: colord_n(h.r),
            g: colord_n(h.g),
            b: colord_n(h.b),
            a: colord_n(h.a, 3),
          };
        },
        nY = /^#([0-9a-f]{3,8})$/i,
        colord_s = function (h) {
          var g = h.toString(16);
          return g.length < 2 ? "0" + g : g;
        },
        colord_h = function (h) {
          var g = h.r,
            _ = h.g,
            b = h.b,
            y = h.a,
            A = Math.max(g, _, b),
            N = A - Math.min(g, _, b),
            F = N
              ? A === g
                ? (_ - b) / N
                : A === _
                  ? 2 + (b - g) / N
                  : 4 + (g - _) / N
              : 0;
          return {
            h: 60 * (F < 0 ? F + 6 : F),
            s: A ? (N / A) * 100 : 0,
            v: (A / 255) * 100,
            a: y,
          };
        },
        colord_b = function (h) {
          var g = h.h,
            _ = h.s,
            b = h.v,
            y = h.a;
          (g = (g / 360) * 6), (_ /= 100), (b /= 100);
          var A = Math.floor(g),
            N = b * (1 - _),
            F = b * (1 - (g - A) * _),
            B = b * (1 - (1 - g + A) * _),
            H = A % 6;
          return {
            r: 255 * [b, F, N, N, B, b][H],
            g: 255 * [B, b, b, F, N, N][H],
            b: 255 * [N, N, B, b, b, F][H],
            a: y,
          };
        },
        colord_g = function (h) {
          return {
            h: colord_u(h.h),
            s: colord_e(h.s, 0, 100),
            l: colord_e(h.l, 0, 100),
            a: colord_e(h.a),
          };
        },
        colord_d = function (h) {
          return {
            h: colord_n(h.h),
            s: colord_n(h.s),
            l: colord_n(h.l),
            a: colord_n(h.a, 3),
          };
        },
        colord_f = function (h) {
          var g, _;
          return colord_b(
            ((g = h.s),
            {
              h: h.h,
              s:
                (g *= ((_ = h.l) < 50 ? _ : 100 - _) / 100) > 0
                  ? ((2 * g) / (_ + g)) * 100
                  : 0,
              v: _ + g,
              a: h.a,
            }),
          );
        },
        colord_c = function (h) {
          var g, _, b, y;
          return {
            h: (g = colord_h(h)).h,
            s:
              (y = ((200 - (_ = g.s)) * (b = g.v)) / 100) > 0 && y < 200
                ? ((_ * b) / 100 / (y <= 100 ? y : 200 - y)) * 100
                : 0,
            l: y / 2,
            a: g.a,
          };
        },
        nX =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        nJ =
          /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        nQ =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        n0 =
          /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
        n1 = {
          string: [
            [
              function (h) {
                var g = nY.exec(h);
                return g
                  ? (h = g[1]).length <= 4
                    ? {
                        r: parseInt(h[0] + h[0], 16),
                        g: parseInt(h[1] + h[1], 16),
                        b: parseInt(h[2] + h[2], 16),
                        a:
                          4 === h.length
                            ? colord_n(parseInt(h[3] + h[3], 16) / 255, 2)
                            : 1,
                      }
                    : 6 === h.length || 8 === h.length
                      ? {
                          r: parseInt(h.substr(0, 2), 16),
                          g: parseInt(h.substr(2, 2), 16),
                          b: parseInt(h.substr(4, 2), 16),
                          a:
                            8 === h.length
                              ? colord_n(parseInt(h.substr(6, 2), 16) / 255, 2)
                              : 1,
                        }
                      : null
                  : null;
              },
              "hex",
            ],
            [
              function (h) {
                var g = nQ.exec(h) || n0.exec(h);
                return g
                  ? g[2] !== g[4] || g[4] !== g[6]
                    ? null
                    : colord_a({
                        r: Number(g[1]) / (g[2] ? 100 / 255 : 1),
                        g: Number(g[3]) / (g[4] ? 100 / 255 : 1),
                        b: Number(g[5]) / (g[6] ? 100 / 255 : 1),
                        a:
                          void 0 === g[7] ? 1 : Number(g[7]) / (g[8] ? 100 : 1),
                      })
                  : null;
              },
              "rgb",
            ],
            [
              function (h) {
                var g,
                  _,
                  b = nX.exec(h) || nJ.exec(h);
                return b
                  ? colord_f(
                      colord_g({
                        h:
                          ((g = b[1]),
                          void 0 === (_ = b[2]) && (_ = "deg"),
                          Number(g) * (nq[_] || 1)),
                        s: Number(b[3]),
                        l: Number(b[4]),
                        a:
                          void 0 === b[5] ? 1 : Number(b[5]) / (b[6] ? 100 : 1),
                      }),
                    )
                  : null;
              },
              "hsl",
            ],
          ],
          object: [
            [
              function (h) {
                var g = h.r,
                  _ = h.g,
                  b = h.b,
                  y = h.a;
                return colord_t(g) && colord_t(_) && colord_t(b)
                  ? colord_a({
                      r: Number(g),
                      g: Number(_),
                      b: Number(b),
                      a: Number(void 0 === y ? 1 : y),
                    })
                  : null;
              },
              "rgb",
            ],
            [
              function (h) {
                var g = h.h,
                  _ = h.s,
                  b = h.l,
                  y = h.a;
                return colord_t(g) && colord_t(_) && colord_t(b)
                  ? colord_f(
                      colord_g({
                        h: Number(g),
                        s: Number(_),
                        l: Number(b),
                        a: Number(void 0 === y ? 1 : y),
                      }),
                    )
                  : null;
              },
              "hsl",
            ],
            [
              function (h) {
                var g,
                  _ = h.h,
                  b = h.s,
                  y = h.v,
                  A = h.a;
                return colord_t(_) && colord_t(b) && colord_t(y)
                  ? colord_b({
                      h: colord_u(
                        (g = {
                          h: Number(_),
                          s: Number(b),
                          v: Number(y),
                          a: Number(void 0 === A ? 1 : A),
                        }).h,
                      ),
                      s: colord_e(g.s, 0, 100),
                      v: colord_e(g.v, 0, 100),
                      a: colord_e(g.a),
                    })
                  : null;
              },
              "hsv",
            ],
          ],
        },
        colord_N = function (h, g) {
          for (var _ = 0; _ < g.length; _++) {
            var b = g[_][0](h);
            if (b) return [b, g[_][1]];
          }
          return [null, void 0];
        },
        colord_x = function (h) {
          return "string" == typeof h
            ? colord_N(h.trim(), n1.string)
            : "object" == typeof h && null !== h
              ? colord_N(h, n1.object)
              : [null, void 0];
        },
        colord_M = function (h, g) {
          var _ = colord_c(h);
          return { h: _.h, s: colord_e(_.s + 100 * g, 0, 100), l: _.l, a: _.a };
        },
        colord_H = function (h) {
          return (299 * h.r + 587 * h.g + 114 * h.b) / 1e3 / 255;
        },
        colord_$ = function (h, g) {
          var _ = colord_c(h);
          return { h: _.h, s: _.s, l: colord_e(_.l + 100 * g, 0, 100), a: _.a };
        },
        n2 = (function () {
          function r(h) {
            (this.parsed = colord_x(h)[0]),
              (this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 });
          }
          return (
            (r.prototype.isValid = function () {
              return null !== this.parsed;
            }),
            (r.prototype.brightness = function () {
              return colord_n(colord_H(this.rgba), 2);
            }),
            (r.prototype.isDark = function () {
              return 0.5 > colord_H(this.rgba);
            }),
            (r.prototype.isLight = function () {
              return colord_H(this.rgba) >= 0.5;
            }),
            (r.prototype.toHex = function () {
              var h, g, _, b, y, A;
              return (
                (g = (h = colord_o(this.rgba)).r),
                (_ = h.g),
                (b = h.b),
                (A = (y = h.a) < 1 ? colord_s(colord_n(255 * y)) : ""),
                "#" + colord_s(g) + colord_s(_) + colord_s(b) + A
              );
            }),
            (r.prototype.toRgb = function () {
              return colord_o(this.rgba);
            }),
            (r.prototype.toRgbString = function () {
              var h, g, _, b, y;
              return (
                (g = (h = colord_o(this.rgba)).r),
                (_ = h.g),
                (b = h.b),
                (y = h.a) < 1
                  ? "rgba(" + g + ", " + _ + ", " + b + ", " + y + ")"
                  : "rgb(" + g + ", " + _ + ", " + b + ")"
              );
            }),
            (r.prototype.toHsl = function () {
              return colord_d(colord_c(this.rgba));
            }),
            (r.prototype.toHslString = function () {
              var h, g, _, b, y;
              return (
                (g = (h = colord_d(colord_c(this.rgba))).h),
                (_ = h.s),
                (b = h.l),
                (y = h.a) < 1
                  ? "hsla(" + g + ", " + _ + "%, " + b + "%, " + y + ")"
                  : "hsl(" + g + ", " + _ + "%, " + b + "%)"
              );
            }),
            (r.prototype.toHsv = function () {
              var h;
              return {
                h: colord_n((h = colord_h(this.rgba)).h),
                s: colord_n(h.s),
                v: colord_n(h.v),
                a: colord_n(h.a, 3),
              };
            }),
            (r.prototype.invert = function () {
              var h;
              return colord_w({
                r: 255 - (h = this.rgba).r,
                g: 255 - h.g,
                b: 255 - h.b,
                a: h.a,
              });
            }),
            (r.prototype.saturate = function (h) {
              return (
                void 0 === h && (h = 0.1), colord_w(colord_M(this.rgba, h))
              );
            }),
            (r.prototype.desaturate = function (h) {
              return (
                void 0 === h && (h = 0.1), colord_w(colord_M(this.rgba, -h))
              );
            }),
            (r.prototype.grayscale = function () {
              return colord_w(colord_M(this.rgba, -1));
            }),
            (r.prototype.lighten = function (h) {
              return (
                void 0 === h && (h = 0.1), colord_w(colord_$(this.rgba, h))
              );
            }),
            (r.prototype.darken = function (h) {
              return (
                void 0 === h && (h = 0.1), colord_w(colord_$(this.rgba, -h))
              );
            }),
            (r.prototype.rotate = function (h) {
              return void 0 === h && (h = 15), this.hue(this.hue() + h);
            }),
            (r.prototype.alpha = function (h) {
              var g;
              return "number" == typeof h
                ? colord_w({ r: (g = this.rgba).r, g: g.g, b: g.b, a: h })
                : colord_n(this.rgba.a, 3);
            }),
            (r.prototype.hue = function (h) {
              var g = colord_c(this.rgba);
              return "number" == typeof h
                ? colord_w({ h: h, s: g.s, l: g.l, a: g.a })
                : colord_n(g.h);
            }),
            (r.prototype.isEqual = function (h) {
              return this.toHex() === colord_w(h).toHex();
            }),
            r
          );
        })(),
        colord_w = function (h) {
          return h instanceof n2 ? h : new n2(h);
        },
        n3 = [];
      function dist_u() {
        return (dist_u =
          Object.assign ||
          function (h) {
            for (var g = 1; g < arguments.length; g++) {
              var _ = arguments[g];
              for (var b in _)
                Object.prototype.hasOwnProperty.call(_, b) && (h[b] = _[b]);
            }
            return h;
          }).apply(this, arguments);
      }
      function dist_c(h, g) {
        if (null == h) return {};
        var _,
          b,
          y = {},
          A = Object.keys(h);
        for (b = 0; b < A.length; b++)
          g.indexOf((_ = A[b])) >= 0 || (y[_] = h[_]);
        return y;
      }
      function dist_i(h) {
        var g = (0, F.useRef)(h),
          _ = (0, F.useRef)(function (h) {
            g.current && g.current(h);
          });
        return (g.current = h), _.current;
      }
      var dist_s = function (h, g, _) {
          return (
            void 0 === g && (g = 0),
            void 0 === _ && (_ = 1),
            h > _ ? _ : h < g ? g : h
          );
        },
        dist_f = function (h) {
          return "touches" in h;
        },
        dist_v = function (h) {
          return (h && h.ownerDocument.defaultView) || self;
        },
        dist_d = function (h, g, _) {
          var b = h.getBoundingClientRect(),
            y = dist_f(g)
              ? (function (h, g) {
                  for (var _ = 0; _ < h.length; _++)
                    if (h[_].identifier === g) return h[_];
                  return h[0];
                })(g.touches, _)
              : g;
          return {
            left: dist_s(
              (y.pageX - (b.left + dist_v(h).pageXOffset)) / b.width,
            ),
            top: dist_s((y.pageY - (b.top + dist_v(h).pageYOffset)) / b.height),
          };
        },
        dist_h = function (h) {
          dist_f(h) || h.preventDefault();
        },
        n6 = F.memo(function (h) {
          var g = h.onMove,
            _ = h.onKey,
            b = dist_c(h, ["onMove", "onKey"]),
            y = (0, F.useRef)(null),
            A = dist_i(g),
            N = dist_i(_),
            B = (0, F.useRef)(null),
            H = (0, F.useRef)(!1),
            U = (0, F.useMemo)(
              function () {
                var e = function (h) {
                    dist_h(h),
                      (dist_f(h) ? h.touches.length > 0 : h.buttons > 0) &&
                      y.current
                        ? A(dist_d(y.current, h, B.current))
                        : t(!1);
                  },
                  r = function () {
                    return t(!1);
                  };
                function t(h) {
                  var g = H.current,
                    _ = dist_v(y.current),
                    b = h ? _.addEventListener : _.removeEventListener;
                  b(g ? "touchmove" : "mousemove", e),
                    b(g ? "touchend" : "mouseup", r);
                }
                return [
                  function (h) {
                    var g = h.nativeEvent,
                      _ = y.current;
                    if (_ && (dist_h(g), (!H.current || dist_f(g)) && _)) {
                      if (dist_f(g)) {
                        H.current = !0;
                        var b = g.changedTouches || [];
                        b.length && (B.current = b[0].identifier);
                      }
                      _.focus(), A(dist_d(_, g, B.current)), t(!0);
                    }
                  },
                  function (h) {
                    var g = h.which || h.keyCode;
                    g < 37 ||
                      g > 40 ||
                      (h.preventDefault(),
                      N({
                        left: 39 === g ? 0.05 : 37 === g ? -0.05 : 0,
                        top: 40 === g ? 0.05 : 38 === g ? -0.05 : 0,
                      }));
                  },
                  t,
                ];
              },
              [N, A],
            ),
            K = U[0],
            q = U[1],
            Y = U[2];
          return (
            (0, F.useEffect)(
              function () {
                return Y;
              },
              [Y],
            ),
            F.createElement(
              "div",
              dist_u({}, b, {
                onTouchStart: K,
                onMouseDown: K,
                className: "react-colorful__interactive",
                ref: y,
                onKeyDown: q,
                tabIndex: 0,
                role: "slider",
              }),
            )
          );
        }),
        dist_g = function (h) {
          return h.filter(Boolean).join(" ");
        },
        dist_p = function (h) {
          var g = h.color,
            _ = h.left,
            b = h.top,
            y = dist_g(["react-colorful__pointer", h.className]);
          return F.createElement(
            "div",
            {
              className: y,
              style: {
                top: 100 * (void 0 === b ? 0.5 : b) + "%",
                left: 100 * _ + "%",
              },
            },
            F.createElement("div", {
              className: "react-colorful__pointer-fill",
              style: { backgroundColor: g },
            }),
          );
        },
        dist_b = function (h, g, _) {
          return (
            void 0 === g && (g = 0),
            void 0 === _ && (_ = Math.pow(10, g)),
            Math.round(_ * h) / _
          );
        },
        dist_y = function (h) {
          var g = h.s,
            _ = h.v,
            b = h.a,
            y = ((200 - g) * _) / 100;
          return {
            h: dist_b(h.h),
            s: dist_b(
              y > 0 && y < 200
                ? ((g * _) / 100 / (y <= 100 ? y : 200 - y)) * 100
                : 0,
            ),
            l: dist_b(y / 2),
            a: dist_b(b, 2),
          };
        },
        dist_q = function (h) {
          var g = dist_y(h);
          return "hsl(" + g.h + ", " + g.s + "%, " + g.l + "%)";
        },
        dist_k = function (h) {
          var g = dist_y(h);
          return "hsla(" + g.h + ", " + g.s + "%, " + g.l + "%, " + g.a + ")";
        },
        dist_I = function (h) {
          var g = h.h,
            _ = h.s,
            b = h.v,
            y = h.a;
          (g = (g / 360) * 6), (_ /= 100), (b /= 100);
          var A = Math.floor(g),
            N = b * (1 - _),
            F = b * (1 - (g - A) * _),
            B = b * (1 - (1 - g + A) * _),
            H = A % 6;
          return {
            r: dist_b(255 * [b, F, N, N, B, b][H]),
            g: dist_b(255 * [B, b, b, F, N, N][H]),
            b: dist_b(255 * [N, N, B, b, b, F][H]),
            a: dist_b(y, 2),
          };
        },
        dist_L = function (h) {
          var g = h.r,
            _ = h.g,
            b = h.b,
            y = h.a,
            A = Math.max(g, _, b),
            N = A - Math.min(g, _, b),
            F = N
              ? A === g
                ? (_ - b) / N
                : A === _
                  ? 2 + (b - g) / N
                  : 4 + (g - _) / N
              : 0;
          return {
            h: dist_b(60 * (F < 0 ? F + 6 : F)),
            s: dist_b(A ? (N / A) * 100 : 0),
            v: dist_b((A / 255) * 100),
            a: y,
          };
        },
        n4 = F.memo(function (h) {
          var g = h.hue,
            _ = h.onChange,
            b = dist_g(["react-colorful__hue", h.className]);
          return F.createElement(
            "div",
            { className: b },
            F.createElement(
              n6,
              {
                onMove: function (h) {
                  _({ h: 360 * h.left });
                },
                onKey: function (h) {
                  _({ h: dist_s(g + 360 * h.left, 0, 360) });
                },
                "aria-label": "Hue",
                "aria-valuenow": dist_b(g),
                "aria-valuemax": "360",
                "aria-valuemin": "0",
              },
              F.createElement(dist_p, {
                className: "react-colorful__hue-pointer",
                left: g / 360,
                color: dist_q({ h: g, s: 100, v: 100, a: 1 }),
              }),
            ),
          );
        }),
        n5 = F.memo(function (h) {
          var g = h.hsva,
            _ = h.onChange,
            b = { backgroundColor: dist_q({ h: g.h, s: 100, v: 100, a: 1 }) };
          return F.createElement(
            "div",
            { className: "react-colorful__saturation", style: b },
            F.createElement(
              n6,
              {
                onMove: function (h) {
                  _({ s: 100 * h.left, v: 100 - 100 * h.top });
                },
                onKey: function (h) {
                  _({
                    s: dist_s(g.s + 100 * h.left, 0, 100),
                    v: dist_s(g.v - 100 * h.top, 0, 100),
                  });
                },
                "aria-label": "Color",
                "aria-valuetext":
                  "Saturation " +
                  dist_b(g.s) +
                  "%, Brightness " +
                  dist_b(g.v) +
                  "%",
              },
              F.createElement(dist_p, {
                className: "react-colorful__saturation-pointer",
                top: 1 - g.v / 100,
                left: g.s / 100,
                color: dist_q(g),
              }),
            ),
          );
        }),
        dist_F = function (h, g) {
          if (h === g) return !0;
          for (var _ in h) if (h[_] !== g[_]) return !1;
          return !0;
        };
      function dist_Y(h, g, _) {
        var b = dist_i(_),
          y = (0, F.useState)(function () {
            return h.toHsva(g);
          }),
          A = y[0],
          N = y[1],
          B = (0, F.useRef)({ color: g, hsva: A });
        return (
          (0, F.useEffect)(
            function () {
              if (!h.equal(g, B.current.color)) {
                var _ = h.toHsva(g);
                (B.current = { hsva: _, color: g }), N(_);
              }
            },
            [g, h],
          ),
          (0, F.useEffect)(
            function () {
              var g;
              dist_F(A, B.current.hsva) ||
                h.equal((g = h.fromHsva(A)), B.current.color) ||
                ((B.current = { hsva: A, color: g }), b(g));
            },
            [A, h, b],
          ),
          [
            A,
            (0, F.useCallback)(function (h) {
              N(function (g) {
                return Object.assign({}, g, h);
              });
            }, []),
          ]
        );
      }
      var n8,
        n9,
        n7,
        re,
        rt = "undefined" != typeof window ? F.useLayoutEffect : F.useEffect,
        rn = new Map(),
        dist_Q = function (h) {
          rt(function () {
            var g = h.current ? h.current.ownerDocument : document;
            if (void 0 !== g && !rn.has(g)) {
              var b = g.createElement("style");
              (b.innerHTML =
                '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}'),
                rn.set(g, b);
              var y = re || _.nc;
              y && b.setAttribute("nonce", y), g.head.appendChild(b);
            }
          }, []);
        },
        dist_U = function (h) {
          var g = h.className,
            _ = h.colorModel,
            b = h.color,
            y = void 0 === b ? _.defaultColor : b,
            A = h.onChange,
            N = dist_c(h, ["className", "colorModel", "color", "onChange"]),
            B = (0, F.useRef)(null);
          dist_Q(B);
          var H = dist_Y(_, y, A),
            U = H[0],
            K = H[1],
            q = dist_g(["react-colorful", g]);
          return F.createElement(
            "div",
            dist_u({}, N, { ref: B, className: q }),
            F.createElement(n5, { hsva: U, onChange: K }),
            F.createElement(n4, {
              hue: U.h,
              onChange: K,
              className: "react-colorful__last-control",
            }),
          );
        },
        dist_ee = function (h) {
          var g = h.className,
            _ = h.hsva,
            b = h.onChange,
            y = {
              backgroundImage:
                "linear-gradient(90deg, " +
                dist_k(Object.assign({}, _, { a: 0 })) +
                ", " +
                dist_k(Object.assign({}, _, { a: 1 })) +
                ")",
            },
            A = dist_g(["react-colorful__alpha", g]),
            N = dist_b(100 * _.a);
          return F.createElement(
            "div",
            { className: A },
            F.createElement("div", {
              className: "react-colorful__alpha-gradient",
              style: y,
            }),
            F.createElement(
              n6,
              {
                onMove: function (h) {
                  b({ a: h.left });
                },
                onKey: function (h) {
                  b({ a: dist_s(_.a + h.left) });
                },
                "aria-label": "Alpha",
                "aria-valuetext": N + "%",
                "aria-valuenow": N,
                "aria-valuemin": "0",
                "aria-valuemax": "100",
              },
              F.createElement(dist_p, {
                className: "react-colorful__alpha-pointer",
                left: _.a,
                color: dist_k(_),
              }),
            ),
          );
        },
        dist_re = function (h) {
          var g = h.className,
            _ = h.colorModel,
            b = h.color,
            y = void 0 === b ? _.defaultColor : b,
            A = h.onChange,
            N = dist_c(h, ["className", "colorModel", "color", "onChange"]),
            B = (0, F.useRef)(null);
          dist_Q(B);
          var H = dist_Y(_, y, A),
            U = H[0],
            K = H[1],
            q = dist_g(["react-colorful", g]);
          return F.createElement(
            "div",
            dist_u({}, N, { ref: B, className: q }),
            F.createElement(n5, { hsva: U, onChange: K }),
            F.createElement(n4, { hue: U.h, onChange: K }),
            F.createElement(dist_ee, {
              hsva: U,
              onChange: K,
              className: "react-colorful__last-control",
            }),
          );
        },
        rr = {
          defaultColor: { r: 0, g: 0, b: 0, a: 1 },
          toHsva: dist_L,
          fromHsva: dist_I,
          equal: dist_F,
        },
        Ce = function (h) {
          return F.createElement(dist_re, dist_u({}, h, { colorModel: rr }));
        },
        ri = {
          defaultColor: { r: 0, g: 0, b: 0 },
          toHsva: function (h) {
            return dist_L({ r: h.r, g: h.g, b: h.b, a: 1 });
          },
          fromHsva: function (h) {
            var g;
            return { r: (g = dist_I(h)).r, g: g.g, b: g.b };
          },
          equal: dist_F,
        },
        Ne = function (h) {
          return F.createElement(dist_U, dist_u({}, h, { colorModel: ri }));
        },
        ro = _(45697),
        ra = _.n(ro),
        rs = _(70655),
        rl = new Map([
          ["aac", "audio/aac"],
          ["abw", "application/x-abiword"],
          ["arc", "application/x-freearc"],
          ["avif", "image/avif"],
          ["avi", "video/x-msvideo"],
          ["azw", "application/vnd.amazon.ebook"],
          ["bin", "application/octet-stream"],
          ["bmp", "image/bmp"],
          ["bz", "application/x-bzip"],
          ["bz2", "application/x-bzip2"],
          ["cda", "application/x-cdf"],
          ["csh", "application/x-csh"],
          ["css", "text/css"],
          ["csv", "text/csv"],
          ["doc", "application/msword"],
          [
            "docx",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ],
          ["eot", "application/vnd.ms-fontobject"],
          ["epub", "application/epub+zip"],
          ["gz", "application/gzip"],
          ["gif", "image/gif"],
          ["heic", "image/heic"],
          ["heif", "image/heif"],
          ["htm", "text/html"],
          ["html", "text/html"],
          ["ico", "image/vnd.microsoft.icon"],
          ["ics", "text/calendar"],
          ["jar", "application/java-archive"],
          ["jpeg", "image/jpeg"],
          ["jpg", "image/jpeg"],
          ["js", "text/javascript"],
          ["json", "application/json"],
          ["jsonld", "application/ld+json"],
          ["mid", "audio/midi"],
          ["midi", "audio/midi"],
          ["mjs", "text/javascript"],
          ["mp3", "audio/mpeg"],
          ["mp4", "video/mp4"],
          ["mpeg", "video/mpeg"],
          ["mpkg", "application/vnd.apple.installer+xml"],
          ["odp", "application/vnd.oasis.opendocument.presentation"],
          ["ods", "application/vnd.oasis.opendocument.spreadsheet"],
          ["odt", "application/vnd.oasis.opendocument.text"],
          ["oga", "audio/ogg"],
          ["ogv", "video/ogg"],
          ["ogx", "application/ogg"],
          ["opus", "audio/opus"],
          ["otf", "font/otf"],
          ["png", "image/png"],
          ["pdf", "application/pdf"],
          ["php", "application/x-httpd-php"],
          ["ppt", "application/vnd.ms-powerpoint"],
          [
            "pptx",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          ],
          ["rar", "application/vnd.rar"],
          ["rtf", "application/rtf"],
          ["sh", "application/x-sh"],
          ["svg", "image/svg+xml"],
          ["swf", "application/x-shockwave-flash"],
          ["tar", "application/x-tar"],
          ["tif", "image/tiff"],
          ["tiff", "image/tiff"],
          ["ts", "video/mp2t"],
          ["ttf", "font/ttf"],
          ["txt", "text/plain"],
          ["vsd", "application/vnd.visio"],
          ["wav", "audio/wav"],
          ["weba", "audio/webm"],
          ["webm", "video/webm"],
          ["webp", "image/webp"],
          ["woff", "font/woff"],
          ["woff2", "font/woff2"],
          ["xhtml", "application/xhtml+xml"],
          ["xls", "application/vnd.ms-excel"],
          [
            "xlsx",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          ],
          ["xml", "application/xml"],
          ["xul", "application/vnd.mozilla.xul+xml"],
          ["zip", "application/zip"],
          ["7z", "application/x-7z-compressed"],
          ["mkv", "video/x-matroska"],
          ["mov", "video/quicktime"],
          ["msg", "application/vnd.ms-outlook"],
        ]);
      function toFileWithPath(h, g) {
        var _ = (function (h) {
          var g = h.name;
          if (g && -1 !== g.lastIndexOf(".") && !h.type) {
            var _ = g.split(".").pop().toLowerCase(),
              b = rl.get(_);
            b &&
              Object.defineProperty(h, "type", {
                value: b,
                writable: !1,
                configurable: !1,
                enumerable: !0,
              });
          }
          return h;
        })(h);
        if ("string" != typeof _.path) {
          var b = h.webkitRelativePath;
          Object.defineProperty(_, "path", {
            value:
              "string" == typeof g
                ? g
                : "string" == typeof b && b.length > 0
                  ? b
                  : h.name,
            writable: !1,
            configurable: !1,
            enumerable: !0,
          });
        }
        return _;
      }
      var ru = [".DS_Store", "Thumbs.db"];
      function file_selector_isObject(h) {
        return "object" == typeof h && null !== h;
      }
      function noIgnoredFiles(h) {
        return h.filter(function (h) {
          return -1 === ru.indexOf(h.name);
        });
      }
      function fromList(h) {
        if (null === h) return [];
        for (var g = [], _ = 0; _ < h.length; _++) {
          var b = h[_];
          g.push(b);
        }
        return g;
      }
      function toFilePromises(h) {
        if ("function" != typeof h.webkitGetAsEntry)
          return fromDataTransferItem(h);
        var g = h.webkitGetAsEntry();
        return g && g.isDirectory ? fromDirEntry(g) : fromDataTransferItem(h);
      }
      function fromDataTransferItem(h) {
        var g = h.getAsFile();
        return g
          ? Promise.resolve(toFileWithPath(g))
          : Promise.reject(h + " is not a File");
      }
      function fromEntry(h) {
        return (0, rs.mG)(this, void 0, void 0, function () {
          return (0, rs.Jh)(this, function (g) {
            return [
              2,
              h.isDirectory
                ? fromDirEntry(h)
                : (function (h) {
                    return (0, rs.mG)(this, void 0, void 0, function () {
                      return (0, rs.Jh)(this, function (g) {
                        return [
                          2,
                          new Promise(function (g, _) {
                            h.file(
                              function (_) {
                                g(toFileWithPath(_, h.fullPath));
                              },
                              function (h) {
                                _(h);
                              },
                            );
                          }),
                        ];
                      });
                    });
                  })(h),
            ];
          });
        });
      }
      function fromDirEntry(h) {
        var g = h.createReader();
        return new Promise(function (h, _) {
          var b = [];
          !(function readEntries() {
            var y = this;
            g.readEntries(
              function (g) {
                return (0, rs.mG)(y, void 0, void 0, function () {
                  var y;
                  return (0, rs.Jh)(this, function (A) {
                    switch (A.label) {
                      case 0:
                        if (g.length) return [3, 5];
                        A.label = 1;
                      case 1:
                        return A.trys.push([1, 3, , 4]), [4, Promise.all(b)];
                      case 2:
                        return h(A.sent()), [3, 4];
                      case 3:
                        return _(A.sent()), [3, 4];
                      case 4:
                        return [3, 6];
                      case 5:
                        (y = Promise.all(g.map(fromEntry))),
                          b.push(y),
                          readEntries(),
                          (A.label = 6);
                      case 6:
                        return [2];
                    }
                  });
                });
              },
              function (h) {
                _(h);
              },
            );
          })();
        });
      }
      var rc = _(58363);
      function utils_ownKeys(h, g) {
        var _ = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var b = Object.getOwnPropertySymbols(h);
          g &&
            (b = b.filter(function (g) {
              return Object.getOwnPropertyDescriptor(h, g).enumerable;
            })),
            _.push.apply(_, b);
        }
        return _;
      }
      function _objectSpread(h) {
        for (var g = 1; g < arguments.length; g++) {
          var _ = null != arguments[g] ? arguments[g] : {};
          g % 2
            ? utils_ownKeys(Object(_), !0).forEach(function (g) {
                utils_defineProperty(h, g, _[g]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(_))
              : utils_ownKeys(Object(_)).forEach(function (g) {
                  Object.defineProperty(
                    h,
                    g,
                    Object.getOwnPropertyDescriptor(_, g),
                  );
                });
        }
        return h;
      }
      function utils_defineProperty(h, g, _) {
        return (
          g in h
            ? Object.defineProperty(h, g, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (h[g] = _),
          h
        );
      }
      function _slicedToArray(h, g) {
        return (
          (function (h) {
            if (Array.isArray(h)) return h;
          })(h) ||
          (function (h, g) {
            var _,
              b,
              y =
                null == h
                  ? null
                  : ("undefined" != typeof Symbol && h[Symbol.iterator]) ||
                    h["@@iterator"];
            if (null != y) {
              var A = [],
                N = !0,
                F = !1;
              try {
                for (
                  y = y.call(h);
                  !(N = (_ = y.next()).done) &&
                  (A.push(_.value), !g || A.length !== g);
                  N = !0
                );
              } catch (h) {
                (F = !0), (b = h);
              } finally {
                try {
                  N || null == y.return || y.return();
                } finally {
                  if (F) throw b;
                }
              }
              return A;
            }
          })(h, g) ||
          (function (h, g) {
            if (h) {
              if ("string" == typeof h) return _arrayLikeToArray(h, g);
              var _ = Object.prototype.toString.call(h).slice(8, -1);
              if (
                ("Object" === _ && h.constructor && (_ = h.constructor.name),
                "Map" === _ || "Set" === _)
              )
                return Array.from(h);
              if (
                "Arguments" === _ ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
              )
                return _arrayLikeToArray(h, g);
            }
          })(h, g) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function _arrayLikeToArray(h, g) {
        (null == g || g > h.length) && (g = h.length);
        for (var _ = 0, b = Array(g); _ < g; _++) b[_] = h[_];
        return b;
      }
      var getInvalidTypeRejectionErr = function (h) {
          var g = Array.isArray(
            (h = Array.isArray(h) && 1 === h.length ? h[0] : h),
          )
            ? "one of ".concat(h.join(", "))
            : h;
          return {
            code: "file-invalid-type",
            message: "File type must be ".concat(g),
          };
        },
        getTooLargeRejectionErr = function (h) {
          return {
            code: "file-too-large",
            message: "File is larger than "
              .concat(h, " ")
              .concat(1 === h ? "byte" : "bytes"),
          };
        },
        getTooSmallRejectionErr = function (h) {
          return {
            code: "file-too-small",
            message: "File is smaller than "
              .concat(h, " ")
              .concat(1 === h ? "byte" : "bytes"),
          };
        },
        rd = { code: "too-many-files", message: "Too many files" };
      function fileAccepted(h, g) {
        var _ = "application/x-moz-file" === h.type || (0, rc.Z)(h, g);
        return [_, _ ? null : getInvalidTypeRejectionErr(g)];
      }
      function fileMatchSize(h, g, _) {
        if (isDefined(h.size)) {
          if (isDefined(g) && isDefined(_)) {
            if (h.size > _) return [!1, getTooLargeRejectionErr(_)];
            if (h.size < g) return [!1, getTooSmallRejectionErr(g)];
          } else if (isDefined(g) && h.size < g)
            return [!1, getTooSmallRejectionErr(g)];
          else if (isDefined(_) && h.size > _)
            return [!1, getTooLargeRejectionErr(_)];
        }
        return [!0, null];
      }
      function isDefined(h) {
        return null != h;
      }
      function isPropagationStopped(h) {
        return "function" == typeof h.isPropagationStopped
          ? h.isPropagationStopped()
          : void 0 !== h.cancelBubble && h.cancelBubble;
      }
      function isEvtWithFiles(h) {
        return h.dataTransfer
          ? Array.prototype.some.call(h.dataTransfer.types, function (h) {
              return "Files" === h || "application/x-moz-file" === h;
            })
          : !!h.target && !!h.target.files;
      }
      function onDocumentDragOver(h) {
        h.preventDefault();
      }
      function composeEventHandlers() {
        for (var h = arguments.length, g = Array(h), _ = 0; _ < h; _++)
          g[_] = arguments[_];
        return function (h) {
          for (
            var _ = arguments.length, b = Array(_ > 1 ? _ - 1 : 0), y = 1;
            y < _;
            y++
          )
            b[y - 1] = arguments[y];
          return g.some(function (g) {
            return (
              !isPropagationStopped(h) && g && g.apply(void 0, [h].concat(b)),
              isPropagationStopped(h)
            );
          });
        };
      }
      var rf = ["children"],
        rp = ["open"],
        rh = [
          "refKey",
          "role",
          "onKeyDown",
          "onFocus",
          "onBlur",
          "onClick",
          "onDragEnter",
          "onDragOver",
          "onDragLeave",
          "onDrop",
        ],
        rm = ["refKey", "onChange", "onClick"];
      function es_slicedToArray(h, g) {
        return (
          (function (h) {
            if (Array.isArray(h)) return h;
          })(h) ||
          (function (h, g) {
            var _,
              b,
              y =
                null == h
                  ? null
                  : ("undefined" != typeof Symbol && h[Symbol.iterator]) ||
                    h["@@iterator"];
            if (null != y) {
              var A = [],
                N = !0,
                F = !1;
              try {
                for (
                  y = y.call(h);
                  !(N = (_ = y.next()).done) &&
                  (A.push(_.value), !g || A.length !== g);
                  N = !0
                );
              } catch (h) {
                (F = !0), (b = h);
              } finally {
                try {
                  N || null == y.return || y.return();
                } finally {
                  if (F) throw b;
                }
              }
              return A;
            }
          })(h, g) ||
          es_unsupportedIterableToArray(h, g) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function es_unsupportedIterableToArray(h, g) {
        if (h) {
          if ("string" == typeof h) return es_arrayLikeToArray(h, g);
          var _ = Object.prototype.toString.call(h).slice(8, -1);
          if (
            ("Object" === _ && h.constructor && (_ = h.constructor.name),
            "Map" === _ || "Set" === _)
          )
            return Array.from(h);
          if (
            "Arguments" === _ ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_)
          )
            return es_arrayLikeToArray(h, g);
        }
      }
      function es_arrayLikeToArray(h, g) {
        (null == g || g > h.length) && (g = h.length);
        for (var _ = 0, b = Array(g); _ < g; _++) b[_] = h[_];
        return b;
      }
      function es_ownKeys(h, g) {
        var _ = Object.keys(h);
        if (Object.getOwnPropertySymbols) {
          var b = Object.getOwnPropertySymbols(h);
          g &&
            (b = b.filter(function (g) {
              return Object.getOwnPropertyDescriptor(h, g).enumerable;
            })),
            _.push.apply(_, b);
        }
        return _;
      }
      function es_objectSpread(h) {
        for (var g = 1; g < arguments.length; g++) {
          var _ = null != arguments[g] ? arguments[g] : {};
          g % 2
            ? es_ownKeys(Object(_), !0).forEach(function (g) {
                es_defineProperty(h, g, _[g]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(_))
              : es_ownKeys(Object(_)).forEach(function (g) {
                  Object.defineProperty(
                    h,
                    g,
                    Object.getOwnPropertyDescriptor(_, g),
                  );
                });
        }
        return h;
      }
      function es_defineProperty(h, g, _) {
        return (
          g in h
            ? Object.defineProperty(h, g, {
                value: _,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (h[g] = _),
          h
        );
      }
      function es_objectWithoutProperties(h, g) {
        if (null == h) return {};
        var _,
          b,
          y = (function (h, g) {
            if (null == h) return {};
            var _,
              b,
              y = {},
              A = Object.keys(h);
            for (b = 0; b < A.length; b++)
              (_ = A[b]), g.indexOf(_) >= 0 || (y[_] = h[_]);
            return y;
          })(h, g);
        if (Object.getOwnPropertySymbols) {
          var A = Object.getOwnPropertySymbols(h);
          for (b = 0; b < A.length; b++)
            (_ = A[b]),
              !(g.indexOf(_) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(h, _) &&
                (y[_] = h[_]);
        }
        return y;
      }
      var rg = (0, F.forwardRef)(function (h, g) {
        var _ = h.children,
          b = useDropzone(es_objectWithoutProperties(h, rf)),
          y = b.open,
          A = es_objectWithoutProperties(b, rp);
        return (
          (0, F.useImperativeHandle)(
            g,
            function () {
              return { open: y };
            },
            [y],
          ),
          F.createElement(
            F.Fragment,
            null,
            _(es_objectSpread(es_objectSpread({}, A), {}, { open: y })),
          )
        );
      });
      rg.displayName = "Dropzone";
      var rv = {
        disabled: !1,
        getFilesFromEvent: function (h) {
          return (0, rs.mG)(this, void 0, void 0, function () {
            return (0, rs.Jh)(this, function (g) {
              return file_selector_isObject(h) &&
                file_selector_isObject(h.dataTransfer)
                ? [
                    2,
                    (function (h, g) {
                      return (0, rs.mG)(this, void 0, void 0, function () {
                        var _;
                        return (0, rs.Jh)(this, function (b) {
                          switch (b.label) {
                            case 0:
                              if (null === h) return [2, []];
                              if (!h.items) return [3, 2];
                              if (
                                ((_ = fromList(h.items).filter(function (h) {
                                  return "file" === h.kind;
                                })),
                                "drop" !== g)
                              )
                                return [2, _];
                              return [4, Promise.all(_.map(toFilePromises))];
                            case 1:
                              return [
                                2,
                                noIgnoredFiles(
                                  (function flatten(h) {
                                    return h.reduce(function (h, g) {
                                      return (0, rs.fl)(
                                        h,
                                        Array.isArray(g) ? flatten(g) : [g],
                                      );
                                    }, []);
                                  })(b.sent()),
                                ),
                              ];
                            case 2:
                              return [
                                2,
                                noIgnoredFiles(
                                  fromList(h.files).map(function (h) {
                                    return toFileWithPath(h);
                                  }),
                                ),
                              ];
                          }
                        });
                      });
                    })(h.dataTransfer, h.type),
                  ]
                : file_selector_isObject(h) && file_selector_isObject(h.target)
                  ? [
                      2,
                      fromList(h.target.files).map(function (h) {
                        return toFileWithPath(h);
                      }),
                    ]
                  : Array.isArray(h) &&
                      h.every(function (h) {
                        return "getFile" in h && "function" == typeof h.getFile;
                      })
                    ? [
                        2,
                        (function (h) {
                          return (0, rs.mG)(this, void 0, void 0, function () {
                            return (0, rs.Jh)(this, function (g) {
                              switch (g.label) {
                                case 0:
                                  return [
                                    4,
                                    Promise.all(
                                      h.map(function (h) {
                                        return h.getFile();
                                      }),
                                    ),
                                  ];
                                case 1:
                                  return [
                                    2,
                                    g.sent().map(function (h) {
                                      return toFileWithPath(h);
                                    }),
                                  ];
                              }
                            });
                          });
                        })(h),
                      ]
                    : [2, []];
            });
          });
        },
        maxSize: 1 / 0,
        minSize: 0,
        multiple: !0,
        maxFiles: 0,
        preventDropOnDocument: !0,
        noClick: !1,
        noKeyboard: !1,
        noDrag: !1,
        noDragEventsBubbling: !1,
        validator: null,
        useFsAccessApi: !0,
      };
      (rg.defaultProps = rv),
        (rg.propTypes = {
          children: ra().func,
          accept: ra().oneOfType([ra().string, ra().arrayOf(ra().string)]),
          multiple: ra().bool,
          preventDropOnDocument: ra().bool,
          noClick: ra().bool,
          noKeyboard: ra().bool,
          noDrag: ra().bool,
          noDragEventsBubbling: ra().bool,
          minSize: ra().number,
          maxSize: ra().number,
          maxFiles: ra().number,
          disabled: ra().bool,
          getFilesFromEvent: ra().func,
          onFileDialogCancel: ra().func,
          onFileDialogOpen: ra().func,
          useFsAccessApi: ra().bool,
          onDragEnter: ra().func,
          onDragLeave: ra().func,
          onDragOver: ra().func,
          onDrop: ra().func,
          onDropAccepted: ra().func,
          onDropRejected: ra().func,
          validator: ra().func,
        });
      var r_ = {
        isFocused: !1,
        isFileDialogActive: !1,
        isDragActive: !1,
        isDragAccept: !1,
        isDragReject: !1,
        draggedFiles: [],
        acceptedFiles: [],
        fileRejections: [],
      };
      function useDropzone() {
        var h,
          g,
          _,
          b,
          y,
          A,
          N,
          B =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          H = es_objectSpread(es_objectSpread({}, rv), B),
          U = H.accept,
          K = H.disabled,
          q = H.getFilesFromEvent,
          Y = H.maxSize,
          X = H.minSize,
          Q = H.multiple,
          et = H.maxFiles,
          en = H.onDragEnter,
          er = H.onDragLeave,
          ei = H.onDragOver,
          eo = H.onDrop,
          ea = H.onDropAccepted,
          es = H.onDropRejected,
          el = H.onFileDialogCancel,
          eu = H.onFileDialogOpen,
          ec = H.useFsAccessApi,
          ed = H.preventDropOnDocument,
          ef = H.noClick,
          ep = H.noKeyboard,
          eh = H.noDrag,
          em = H.noDragEventsBubbling,
          eg = H.validator,
          ev = (0, F.useMemo)(
            function () {
              return "function" == typeof eu ? eu : es_noop;
            },
            [eu],
          ),
          e_ = (0, F.useMemo)(
            function () {
              return "function" == typeof el ? el : es_noop;
            },
            [el],
          ),
          eb = (0, F.useRef)(null),
          ey = (0, F.useRef)(null),
          ex = es_slicedToArray((0, F.useReducer)(reducer, r_), 2),
          ew = ex[0],
          eC = ex[1],
          eS = ew.isFocused,
          eE = ew.isFileDialogActive,
          eP = ew.draggedFiles,
          eT = (0, F.useRef)(
            "undefined" != typeof window &&
              window.isSecureContext &&
              ec &&
              "showOpenFilePicker" in window,
          ),
          onWindowFocus = function () {
            !eT.current &&
              eE &&
              setTimeout(function () {
                ey.current &&
                  !ey.current.files.length &&
                  (eC({ type: "closeDialog" }), e_());
              }, 300);
          };
        (0, F.useEffect)(
          function () {
            return (
              window.addEventListener("focus", onWindowFocus, !1),
              function () {
                window.removeEventListener("focus", onWindowFocus, !1);
              }
            );
          },
          [ey, eE, e_, eT],
        );
        var ej = (0, F.useRef)([]),
          onDocumentDrop = function (h) {
            (eb.current && eb.current.contains(h.target)) ||
              (h.preventDefault(), (ej.current = []));
          };
        (0, F.useEffect)(
          function () {
            return (
              ed &&
                (document.addEventListener("dragover", onDocumentDragOver, !1),
                document.addEventListener("drop", onDocumentDrop, !1)),
              function () {
                ed &&
                  (document.removeEventListener("dragover", onDocumentDragOver),
                  document.removeEventListener("drop", onDocumentDrop));
              }
            );
          },
          [eb, ed],
        );
        var ek = (0, F.useCallback)(
            function (h) {
              var g;
              h.preventDefault(),
                h.persist(),
                stopPropagation(h),
                (ej.current = [].concat(
                  (function (h) {
                    if (Array.isArray(h)) return es_arrayLikeToArray(h);
                  })((g = ej.current)) ||
                    (function (h) {
                      if (
                        ("undefined" != typeof Symbol &&
                          null != h[Symbol.iterator]) ||
                        null != h["@@iterator"]
                      )
                        return Array.from(h);
                    })(g) ||
                    es_unsupportedIterableToArray(g) ||
                    (function () {
                      throw TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                      );
                    })(),
                  [h.target],
                )),
                isEvtWithFiles(h) &&
                  Promise.resolve(q(h)).then(function (g) {
                    (!isPropagationStopped(h) || em) &&
                      (eC({
                        draggedFiles: g,
                        isDragActive: !0,
                        type: "setDraggedFiles",
                      }),
                      en && en(h));
                  });
            },
            [q, en, em],
          ),
          e$ = (0, F.useCallback)(
            function (h) {
              h.preventDefault(), h.persist(), stopPropagation(h);
              var g = isEvtWithFiles(h);
              if (g && h.dataTransfer)
                try {
                  h.dataTransfer.dropEffect = "copy";
                } catch (h) {}
              return g && ei && ei(h), !1;
            },
            [ei, em],
          ),
          eR = (0, F.useCallback)(
            function (h) {
              h.preventDefault(), h.persist(), stopPropagation(h);
              var g = ej.current.filter(function (h) {
                  return eb.current && eb.current.contains(h);
                }),
                _ = g.indexOf(h.target);
              -1 !== _ && g.splice(_, 1),
                (ej.current = g),
                !(g.length > 0) &&
                  (eC({
                    isDragActive: !1,
                    type: "setDraggedFiles",
                    draggedFiles: [],
                  }),
                  isEvtWithFiles(h) && er && er(h));
            },
            [eb, er, em],
          ),
          eA = (0, F.useCallback)(
            function (h, g) {
              var _ = [],
                b = [];
              h.forEach(function (h) {
                var g = es_slicedToArray(fileAccepted(h, U), 2),
                  y = g[0],
                  A = g[1],
                  N = es_slicedToArray(fileMatchSize(h, X, Y), 2),
                  F = N[0],
                  B = N[1],
                  H = eg ? eg(h) : null;
                if (y && F && !H) _.push(h);
                else {
                  var K = [A, B];
                  H && (K = K.concat(H)),
                    b.push({
                      file: h,
                      errors: K.filter(function (h) {
                        return h;
                      }),
                    });
                }
              }),
                ((!Q && _.length > 1) || (Q && et >= 1 && _.length > et)) &&
                  (_.forEach(function (h) {
                    b.push({ file: h, errors: [rd] });
                  }),
                  _.splice(0)),
                eC({ acceptedFiles: _, fileRejections: b, type: "setFiles" }),
                eo && eo(_, b, g),
                b.length > 0 && es && es(b, g),
                _.length > 0 && ea && ea(_, g);
            },
            [eC, Q, U, X, Y, et, eo, ea, es, eg],
          ),
          eO = (0, F.useCallback)(
            function (h) {
              h.preventDefault(),
                h.persist(),
                stopPropagation(h),
                (ej.current = []),
                isEvtWithFiles(h) &&
                  Promise.resolve(q(h)).then(function (g) {
                    (!isPropagationStopped(h) || em) && eA(g, h);
                  }),
                eC({ type: "reset" });
            },
            [q, eA, em],
          ),
          eD = (0, F.useCallback)(
            function () {
              if (eT.current) {
                eC({ type: "openDialog" }), ev();
                var h,
                  g = {
                    multiple: Q,
                    types: [
                      {
                        description: "everything",
                        accept: Array.isArray(
                          (h = "string" == typeof (h = U) ? h.split(",") : h),
                        )
                          ? h
                              .filter(function (h) {
                                return (
                                  "audio/*" === h ||
                                  "video/*" === h ||
                                  "image/*" === h ||
                                  "text/*" === h ||
                                  /\w+\/[-+.\w]+/g.test(h)
                                );
                              })
                              .reduce(function (h, g) {
                                return _objectSpread(
                                  _objectSpread({}, h),
                                  {},
                                  utils_defineProperty({}, g, []),
                                );
                              }, {})
                          : {},
                      },
                    ],
                  };
                window
                  .showOpenFilePicker(g)
                  .then(function (h) {
                    return q(h);
                  })
                  .then(function (h) {
                    eA(h, null), eC({ type: "closeDialog" });
                  })
                  .catch(function (h) {
                    h instanceof DOMException &&
                    ("AbortError" === h.name || h.code === h.ABORT_ERR)
                      ? (e_(h), eC({ type: "closeDialog" }))
                      : h instanceof DOMException &&
                        ("SecurityError" === h.name ||
                          h.code === h.SECURITY_ERR) &&
                        ((eT.current = !1),
                        ey.current &&
                          ((ey.current.value = null), ey.current.click()));
                  });
                return;
              }
              ey.current &&
                (eC({ type: "openDialog" }),
                ev(),
                (ey.current.value = null),
                ey.current.click());
            },
            [eC, ev, e_, ec, eA, U, Q],
          ),
          eL = (0, F.useCallback)(
            function (h) {
              eb.current &&
                eb.current.isEqualNode(h.target) &&
                (" " === h.key ||
                  "Enter" === h.key ||
                  32 === h.keyCode ||
                  13 === h.keyCode) &&
                (h.preventDefault(), eD());
            },
            [eb, eD],
          ),
          eM = (0, F.useCallback)(function () {
            eC({ type: "focus" });
          }, []),
          eI = (0, F.useCallback)(function () {
            eC({ type: "blur" });
          }, []),
          eN = (0, F.useCallback)(
            function () {
              ef ||
                ((function () {
                  var h =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : window.navigator.userAgent;
                  return (
                    -1 !== h.indexOf("MSIE") ||
                    -1 !== h.indexOf("Trident/") ||
                    -1 !== h.indexOf("Edge/")
                  );
                })()
                  ? setTimeout(eD, 0)
                  : eD());
            },
            [ef, eD],
          ),
          composeHandler = function (h) {
            return K ? null : h;
          },
          composeKeyboardHandler = function (h) {
            return ep ? null : composeHandler(h);
          },
          composeDragHandler = function (h) {
            return eh ? null : composeHandler(h);
          },
          stopPropagation = function (h) {
            em && h.stopPropagation();
          },
          eV = (0, F.useMemo)(
            function () {
              return function () {
                var h =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  g = h.refKey,
                  _ = void 0 === g ? "ref" : g,
                  b = h.role,
                  y = h.onKeyDown,
                  A = h.onFocus,
                  N = h.onBlur,
                  F = h.onClick,
                  B = h.onDragEnter,
                  H = h.onDragOver,
                  U = h.onDragLeave,
                  q = h.onDrop,
                  Y = es_objectWithoutProperties(h, rh);
                return es_objectSpread(
                  es_objectSpread(
                    es_defineProperty(
                      {
                        onKeyDown: composeKeyboardHandler(
                          composeEventHandlers(y, eL),
                        ),
                        onFocus: composeKeyboardHandler(
                          composeEventHandlers(A, eM),
                        ),
                        onBlur: composeKeyboardHandler(
                          composeEventHandlers(N, eI),
                        ),
                        onClick: composeHandler(composeEventHandlers(F, eN)),
                        onDragEnter: composeDragHandler(
                          composeEventHandlers(B, ek),
                        ),
                        onDragOver: composeDragHandler(
                          composeEventHandlers(H, e$),
                        ),
                        onDragLeave: composeDragHandler(
                          composeEventHandlers(U, eR),
                        ),
                        onDrop: composeDragHandler(composeEventHandlers(q, eO)),
                        role: "string" == typeof b && "" !== b ? b : "button",
                      },
                      _,
                      eb,
                    ),
                    K || ep ? {} : { tabIndex: 0 },
                  ),
                  Y,
                );
              };
            },
            [eb, eL, eM, eI, eN, ek, e$, eR, eO, ep, eh, K],
          ),
          eF = (0, F.useCallback)(function (h) {
            h.stopPropagation();
          }, []),
          eB = (0, F.useMemo)(
            function () {
              return function () {
                var h =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  g = h.refKey,
                  _ = void 0 === g ? "ref" : g,
                  b = h.onChange,
                  y = h.onClick,
                  A = es_objectWithoutProperties(h, rm);
                return es_objectSpread(
                  es_objectSpread(
                    {},
                    es_defineProperty(
                      {
                        accept: U,
                        multiple: Q,
                        type: "file",
                        style: { display: "none" },
                        onChange: composeHandler(composeEventHandlers(b, eO)),
                        onClick: composeHandler(composeEventHandlers(y, eF)),
                        tabIndex: -1,
                      },
                      _,
                      ey,
                    ),
                  ),
                  A,
                );
              };
            },
            [ey, U, Q, eO, K],
          ),
          ez = eP.length,
          eH =
            ez > 0 &&
            ((g = (h = {
              files: eP,
              accept: U,
              minSize: X,
              maxSize: Y,
              multiple: Q,
              maxFiles: et,
            }).files),
            (_ = h.accept),
            (b = h.minSize),
            (y = h.maxSize),
            (A = h.multiple),
            (N = h.maxFiles),
            (!!A || !(g.length > 1)) &&
              (!A || !(N >= 1) || !(g.length > N)) &&
              g.every(function (h) {
                var g = _slicedToArray(fileAccepted(h, _), 1)[0],
                  A = _slicedToArray(fileMatchSize(h, b, y), 1)[0];
                return g && A;
              }));
        return es_objectSpread(
          es_objectSpread({}, ew),
          {},
          {
            isDragAccept: eH,
            isDragReject: ez > 0 && !eH,
            isFocused: eS && !K,
            getRootProps: eV,
            getInputProps: eB,
            rootRef: eb,
            inputRef: ey,
            open: composeHandler(eD),
          },
        );
      }
      function reducer(h, g) {
        switch (g.type) {
          case "focus":
            return es_objectSpread(
              es_objectSpread({}, h),
              {},
              { isFocused: !0 },
            );
          case "blur":
            return es_objectSpread(
              es_objectSpread({}, h),
              {},
              { isFocused: !1 },
            );
          case "openDialog":
            return es_objectSpread(
              es_objectSpread({}, r_),
              {},
              { isFileDialogActive: !0 },
            );
          case "closeDialog":
            return es_objectSpread(
              es_objectSpread({}, h),
              {},
              { isFileDialogActive: !1 },
            );
          case "setDraggedFiles":
            var _ = g.isDragActive,
              b = g.draggedFiles;
            return es_objectSpread(
              es_objectSpread({}, h),
              {},
              { draggedFiles: b, isDragActive: _ },
            );
          case "setFiles":
            return es_objectSpread(
              es_objectSpread({}, h),
              {},
              {
                acceptedFiles: g.acceptedFiles,
                fileRejections: g.fileRejections,
              },
            );
          case "reset":
            return es_objectSpread({}, r_);
          default:
            return h;
        }
      }
      function es_noop() {}
      var rb = _(14671);
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      let subscribeWithSelector = (h) => (g, _, b) => {
        let y = b.subscribe;
        b.subscribe = (h, g, _) => {
          let A = h;
          if (g) {
            let y = (null == _ ? void 0 : _.equalityFn) || Object.is,
              N = h(b.getState());
            (A = (_) => {
              let b = h(_);
              if (!y(N, b)) {
                let h = N;
                g((N = b), h);
              }
            }),
              (null == _ ? void 0 : _.fireImmediately) && g(N, N);
          }
          return y(A);
        };
        let A = h(g, _, b);
        return A;
      };
      Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      var ry = _(34529),
        rx = _.n(ry);
      let join = (...h) => h.filter(Boolean).join(".");
      function useDeepMemo(h, g) {
        return (0, F.useMemo)(
          h,
          (function (h, g) {
            let _ = (0, F.useRef)(),
              b = g ? dequal : shallow;
            return b(h, _.current) || (_.current = h), _.current;
          })(g, !0),
        );
      }
      let useVisiblePaths = (h) => {
        let [g, _] = (0, F.useState)(h.getVisiblePaths());
        return (
          (0, F.useEffect)(() => {
            _(h.getVisiblePaths());
            let g = h.useStore.subscribe(h.getVisiblePaths, _, {
              equalityFn: shallow,
            });
            return () => g();
          }, [h]),
          g
        );
      };
      function usePopin(h = 3) {
        let g = (0, F.useRef)(null),
          _ = (0, F.useRef)(null),
          [b, y] = (0, F.useState)(!1),
          A = (0, F.useCallback)(() => y(!0), []),
          N = (0, F.useCallback)(() => y(!1), []);
        return (
          (0, F.useLayoutEffect)(() => {
            if (b) {
              let {
                  bottom: b,
                  top: y,
                  left: A,
                } = g.current.getBoundingClientRect(),
                { height: N } = _.current.getBoundingClientRect(),
                F = b + N > window.innerHeight - 40 ? "up" : "down";
              (_.current.style.position = "fixed"),
                (_.current.style.zIndex = "10000"),
                (_.current.style.left = A + "px"),
                "down" === F
                  ? (_.current.style.top = b + h + "px")
                  : (_.current.style.bottom =
                      window.innerHeight - y + h + "px");
            }
          }, [h, b]),
          { popinRef: g, wrapperRef: _, shown: b, show: A, hide: N }
        );
      }
      !(function (h) {
        h.forEach(function (h) {
          0 > n3.indexOf(h) && (h(n2, n1), n3.push(h));
        });
      })([
        function (h, g) {
          var _ = {
              white: "#ffffff",
              bisque: "#ffe4c4",
              blue: "#0000ff",
              cadetblue: "#5f9ea0",
              chartreuse: "#7fff00",
              chocolate: "#d2691e",
              coral: "#ff7f50",
              antiquewhite: "#faebd7",
              aqua: "#00ffff",
              azure: "#f0ffff",
              whitesmoke: "#f5f5f5",
              papayawhip: "#ffefd5",
              plum: "#dda0dd",
              blanchedalmond: "#ffebcd",
              black: "#000000",
              gold: "#ffd700",
              goldenrod: "#daa520",
              gainsboro: "#dcdcdc",
              cornsilk: "#fff8dc",
              cornflowerblue: "#6495ed",
              burlywood: "#deb887",
              aquamarine: "#7fffd4",
              beige: "#f5f5dc",
              crimson: "#dc143c",
              cyan: "#00ffff",
              darkblue: "#00008b",
              darkcyan: "#008b8b",
              darkgoldenrod: "#b8860b",
              darkkhaki: "#bdb76b",
              darkgray: "#a9a9a9",
              darkgreen: "#006400",
              darkgrey: "#a9a9a9",
              peachpuff: "#ffdab9",
              darkmagenta: "#8b008b",
              darkred: "#8b0000",
              darkorchid: "#9932cc",
              darkorange: "#ff8c00",
              darkslateblue: "#483d8b",
              gray: "#808080",
              darkslategray: "#2f4f4f",
              darkslategrey: "#2f4f4f",
              deeppink: "#ff1493",
              deepskyblue: "#00bfff",
              wheat: "#f5deb3",
              firebrick: "#b22222",
              floralwhite: "#fffaf0",
              ghostwhite: "#f8f8ff",
              darkviolet: "#9400d3",
              magenta: "#ff00ff",
              green: "#008000",
              dodgerblue: "#1e90ff",
              grey: "#808080",
              honeydew: "#f0fff0",
              hotpink: "#ff69b4",
              blueviolet: "#8a2be2",
              forestgreen: "#228b22",
              lawngreen: "#7cfc00",
              indianred: "#cd5c5c",
              indigo: "#4b0082",
              fuchsia: "#ff00ff",
              brown: "#a52a2a",
              maroon: "#800000",
              mediumblue: "#0000cd",
              lightcoral: "#f08080",
              darkturquoise: "#00ced1",
              lightcyan: "#e0ffff",
              ivory: "#fffff0",
              lightyellow: "#ffffe0",
              lightsalmon: "#ffa07a",
              lightseagreen: "#20b2aa",
              linen: "#faf0e6",
              mediumaquamarine: "#66cdaa",
              lemonchiffon: "#fffacd",
              lime: "#00ff00",
              khaki: "#f0e68c",
              mediumseagreen: "#3cb371",
              limegreen: "#32cd32",
              mediumspringgreen: "#00fa9a",
              lightskyblue: "#87cefa",
              lightblue: "#add8e6",
              midnightblue: "#191970",
              lightpink: "#ffb6c1",
              mistyrose: "#ffe4e1",
              moccasin: "#ffe4b5",
              mintcream: "#f5fffa",
              lightslategray: "#778899",
              lightslategrey: "#778899",
              navajowhite: "#ffdead",
              navy: "#000080",
              mediumvioletred: "#c71585",
              powderblue: "#b0e0e6",
              palegoldenrod: "#eee8aa",
              oldlace: "#fdf5e6",
              paleturquoise: "#afeeee",
              mediumturquoise: "#48d1cc",
              mediumorchid: "#ba55d3",
              rebeccapurple: "#663399",
              lightsteelblue: "#b0c4de",
              mediumslateblue: "#7b68ee",
              thistle: "#d8bfd8",
              tan: "#d2b48c",
              orchid: "#da70d6",
              mediumpurple: "#9370db",
              purple: "#800080",
              pink: "#ffc0cb",
              skyblue: "#87ceeb",
              springgreen: "#00ff7f",
              palegreen: "#98fb98",
              red: "#ff0000",
              yellow: "#ffff00",
              slateblue: "#6a5acd",
              lavenderblush: "#fff0f5",
              peru: "#cd853f",
              palevioletred: "#db7093",
              violet: "#ee82ee",
              teal: "#008080",
              slategray: "#708090",
              slategrey: "#708090",
              aliceblue: "#f0f8ff",
              darkseagreen: "#8fbc8f",
              darkolivegreen: "#556b2f",
              greenyellow: "#adff2f",
              seagreen: "#2e8b57",
              seashell: "#fff5ee",
              tomato: "#ff6347",
              silver: "#c0c0c0",
              sienna: "#a0522d",
              lavender: "#e6e6fa",
              lightgreen: "#90ee90",
              orange: "#ffa500",
              orangered: "#ff4500",
              steelblue: "#4682b4",
              royalblue: "#4169e1",
              turquoise: "#40e0d0",
              yellowgreen: "#9acd32",
              salmon: "#fa8072",
              saddlebrown: "#8b4513",
              sandybrown: "#f4a460",
              rosybrown: "#bc8f8f",
              darksalmon: "#e9967a",
              lightgoldenrodyellow: "#fafad2",
              snow: "#fffafa",
              lightgrey: "#d3d3d3",
              lightgray: "#d3d3d3",
              dimgray: "#696969",
              dimgrey: "#696969",
              olivedrab: "#6b8e23",
              olive: "#808000",
            },
            b = {};
          for (var y in _) b[_[y]] = y;
          var A = {};
          (h.prototype.toName = function (g) {
            if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b))
              return "transparent";
            var y,
              N = b[this.toHex()];
            if (N) return N;
            if (null == g ? void 0 : g.closest) {
              var F = this.toRgb(),
                B = 1 / 0,
                H = "black";
              if (!A.length) for (var U in _) A[U] = new h(_[U]).toRgb();
              for (var K in _) {
                var q =
                  ((y = A[K]),
                  Math.pow(F.r - y.r, 2) +
                    Math.pow(F.g - y.g, 2) +
                    Math.pow(F.b - y.b, 2));
                q < B && ((B = q), (H = K));
              }
              return H;
            }
          }),
            g.string.push([
              function (g) {
                var b = g.toLowerCase(),
                  y = "transparent" === b ? "#0000" : _[b];
                return y ? new h(y).toRgb() : null;
              },
              "name",
            ]);
        },
      ]);
      let rw = { rgb: "toRgb", hsl: "toHsl", hsv: "toHsv", hex: "toHex" };
      function leva_esm_convert(h, { format: g, hasAlpha: _, isString: b }) {
        let y = rw[g] + (b && "hex" !== g ? "String" : ""),
          A = h[y]();
        return "object" != typeof A || _
          ? A
          : (function (h, g) {
              let _ = vector_plugin_6f82aee9_esm_objectSpread2({}, h);
              return g.forEach((g) => g in h && delete _[g]), _;
            })(A, ["a"]);
      }
      v8n.extend({ color: () => (h) => colord_w(h).isValid() });
      let leva_esm_sanitize$2 = (h, g) => {
        let _ = colord_w(h);
        if (!_.isValid()) throw Error("Invalid color");
        return leva_esm_convert(_, g);
      };
      var rC = Object.freeze({
        __proto__: null,
        schema: (h) => v8n().color().test(h),
        sanitize: leva_esm_sanitize$2,
        format: (h, g) =>
          leva_esm_convert(
            colord_w(h),
            vector_plugin_6f82aee9_esm_objectSpread2(
              vector_plugin_6f82aee9_esm_objectSpread2({}, g),
              {},
              { isString: !0, format: "hex" },
            ),
          ),
        normalize: ({ value: h }) => {
          let g = colord_x(h)[1],
            _ =
              "object" == typeof h
                ? "a" in h
                : ("hex" === g && 8 === h.length) ||
                  /^(rgba)|(hsla)|(hsva)/.test(h),
            b = {
              format: "name" === g ? "hex" : g,
              hasAlpha: _,
              isString: "string" == typeof h,
            };
          return { value: leva_esm_sanitize$2(h, b), settings: b };
        },
      });
      let rS = t6("div", {
          position: "relative",
          boxSizing: "border-box",
          borderRadius: "$sm",
          overflow: "hidden",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          backgroundColor: "#fff",
          backgroundImage:
            'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
          $inputStyle: "",
          $hover: "",
          zIndex: 1,
          variants: { active: { true: { $inputStyle: "$accent1" } } },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "currentColor",
            zIndex: 1,
          },
        }),
        rE = t6("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        rP = t6("div", {
          width: "$colorPickerWidth",
          height: "$colorPickerHeight",
          ".react-colorful": {
            width: "100%",
            height: "100%",
            boxShadow: "$level2",
            cursor: "crosshair",
          },
          ".react-colorful__saturation": { borderRadius: "$sm $sm 0 0" },
          ".react-colorful__alpha, .react-colorful__hue": { height: 10 },
          ".react-colorful__last-control": { borderRadius: "0 0 $sm $sm" },
          ".react-colorful__pointer": { height: 12, width: 12 },
        });
      function convertToRgb(h, g) {
        return "rgb" !== g ? colord_w(h).toRgb() : h;
      }
      function Color({ value: h, displayValue: g, settings: _, onUpdate: b }) {
        let { emitOnEditStart: y, emitOnEditEnd: A } = useInputContext(),
          { format: N, hasAlpha: B } = _,
          {
            popinRef: H,
            wrapperRef: U,
            shown: K,
            show: q,
            hide: Y,
          } = usePopin(),
          X = (0, F.useRef)(0),
          [Q, et] = (0, F.useState)(() => convertToRgb(h, N)),
          en = B ? Ce : Ne,
          showPicker = () => {
            et(convertToRgb(h, N)), q(), y();
          },
          hidePicker = () => {
            Y(), A(), window.clearTimeout(X.current);
          },
          hideAfterDelay = () => {
            X.current = window.setTimeout(hidePicker, 500);
          };
        return (
          (0, F.useEffect)(() => () => window.clearTimeout(X.current), []),
          F.createElement(
            F.Fragment,
            null,
            F.createElement(rS, {
              ref: H,
              active: K,
              onClick: () => showPicker(),
              style: { color: g },
            }),
            K &&
              F.createElement(
                Portal,
                null,
                F.createElement(ng, { onPointerUp: hidePicker }),
                F.createElement(
                  rP,
                  {
                    ref: U,
                    onMouseEnter: () => window.clearTimeout(X.current),
                    onMouseLeave: (h) => 0 === h.buttons && hideAfterDelay(),
                  },
                  F.createElement(en, { color: Q, onChange: b }),
                ),
              ),
          )
        );
      }
      var rT = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                value: h,
                displayValue: g,
                label: _,
                onChange: b,
                onUpdate: y,
                settings: A,
              } = useInputContext();
              return F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, null, _),
                F.createElement(
                  rE,
                  null,
                  F.createElement(Color, {
                    value: h,
                    displayValue: g,
                    onChange: b,
                    onUpdate: y,
                    settings: A,
                  }),
                  F.createElement(ValueInput, {
                    value: g,
                    onChange: b,
                    onUpdate: y,
                  }),
                ),
              );
            },
          },
          rC,
        ),
        rj = vector_plugin_6f82aee9_esm_objectSpread2(
          {
            component: function () {
              let {
                label: h,
                displayValue: g,
                onUpdate: _,
                settings: b,
              } = useInputContext();
              return F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, null, h),
                F.createElement(Vector, { value: g, settings: b, onUpdate: _ }),
              );
            },
          },
          getVectorPlugin(["x", "y", "z"]),
        );
      let rk = t6("div", {
          $flexCenter: "",
          position: "relative",
          backgroundColor: "$elevation3",
          borderRadius: "$sm",
          cursor: "pointer",
          height: "$rowHeight",
          width: "$rowHeight",
          touchAction: "none",
          $draggable: "",
          $hover: "",
          "&:active": { cursor: "none" },
          "&::after": {
            content: '""',
            backgroundColor: "$accent2",
            height: 4,
            width: 4,
            borderRadius: 2,
          },
        }),
        r$ = t6("div", {
          $flexCenter: "",
          width: "$joystickWidth",
          height: "$joystickHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          position: "fixed",
          zIndex: 1e4,
          overflow: "hidden",
          $draggable: "",
          transform: "translate(-50%, -50%)",
          variants: {
            isOutOfBounds: {
              true: { backgroundColor: "$elevation1" },
              false: { backgroundColor: "$elevation3" },
            },
          },
          "> div": {
            position: "absolute",
            $flexCenter: "",
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "$highlight1",
            backgroundColor: "$elevation3",
            width: "80%",
            height: "80%",
            "&::after,&::before": {
              content: '""',
              position: "absolute",
              zindex: 10,
              backgroundColor: "$highlight1",
            },
            "&::before": { width: "100%", height: 1 },
            "&::after": { height: "100%", width: 1 },
          },
          "> span": {
            position: "relative",
            zindex: 100,
            width: 10,
            height: 10,
            backgroundColor: "$accent2",
            borderRadius: "50%",
          },
        });
      function Joystick({ value: h, settings: g, onUpdate: _ }) {
        let b = (0, F.useRef)(),
          y = (0, F.useRef)(0),
          A = (0, F.useRef)(0),
          N = (0, F.useRef)(1),
          [B, H] = (0, F.useState)(!1),
          [U, K] = (0, F.useState)(!1),
          [q, Y] = useTransform(),
          X = (0, F.useRef)(null),
          Q = (0, F.useRef)(null);
        (0, F.useLayoutEffect)(() => {
          if (B) {
            let {
              top: h,
              left: g,
              width: _,
              height: b,
            } = X.current.getBoundingClientRect();
            (Q.current.style.left = g + _ / 2 + "px"),
              (Q.current.style.top = h + b / 2 + "px");
          }
        }, [B]);
        let {
            keys: [et, en],
            joystick: er,
          } = g,
          ei = "invertY" === er ? 1 : -1,
          {
            [et]: { step: eo },
            [en]: { step: ea },
          } = g,
          es = useTh("sizes", "joystickWidth"),
          el = useTh("sizes", "joystickHeight"),
          eu = (0.8 * parseFloat(es)) / 2,
          ec = (0.8 * parseFloat(el)) / 2,
          ed = (0, F.useCallback)(() => {
            b.current ||
              (K(!0),
              y.current && Y({ x: y.current * eu }),
              A.current && Y({ y: -(A.current * ec) }),
              (b.current = window.setInterval(() => {
                _((h) => {
                  let g = eo * y.current * N.current,
                    _ = ei * ea * A.current * N.current;
                  return Array.isArray(h)
                    ? { [et]: h[0] + g, [en]: h[1] + _ }
                    : { [et]: h[et] + g, [en]: h[en] + _ };
                });
              }, 16)));
          }, [eu, ec, _, Y, eo, ea, et, en, ei]),
          ef = (0, F.useCallback)(() => {
            window.clearTimeout(b.current), (b.current = void 0), K(!1);
          }, []);
        (0, F.useEffect)(() => {
          function setStepMultiplier(h) {
            N.current = multiplyStep(h);
          }
          return (
            window.addEventListener("keydown", setStepMultiplier),
            window.addEventListener("keyup", setStepMultiplier),
            () => {
              window.clearTimeout(b.current),
                window.removeEventListener("keydown", setStepMultiplier),
                window.removeEventListener("keyup", setStepMultiplier);
            }
          );
        }, []);
        let ep = vector_plugin_6f82aee9_esm_useDrag(
          ({ first: g, active: b, delta: [F, B], movement: [U, K] }) => {
            g && H(!0);
            let q = vector_plugin_6f82aee9_esm_clamp(U, -eu, eu),
              X = vector_plugin_6f82aee9_esm_clamp(K, -ec, ec);
            (y.current = Math.abs(U) > Math.abs(q) ? Math.sign(U - q) : 0),
              (A.current = Math.abs(K) > Math.abs(X) ? Math.sign(X - K) : 0);
            let Q = h[et],
              er = h[en];
            b
              ? (y.current || ((Q += F * eo * N.current), Y({ x: q })),
                A.current || ((er -= ei * B * ea * N.current), Y({ y: X })),
                y.current || A.current ? ed() : ef(),
                _({ [et]: Q, [en]: er }))
              : (H(!1),
                (y.current = 0),
                (A.current = 0),
                Y({ x: 0, y: 0 }),
                ef());
          },
        );
        return F.createElement(
          rk,
          vector_plugin_6f82aee9_esm_extends({ ref: X }, ep()),
          B &&
            F.createElement(
              Portal,
              null,
              F.createElement(
                r$,
                { ref: Q, isOutOfBounds: U },
                F.createElement("div", null),
                F.createElement("span", { ref: q }),
              ),
            ),
        );
      }
      let rR = t6("div", {
          display: "grid",
          columnGap: "$colGap",
          variants: {
            withJoystick: {
              true: { gridTemplateColumns: "$sizes$rowHeight auto" },
              false: { gridTemplateColumns: "auto" },
            },
          },
        }),
        rA = ["joystick"],
        rO = getVectorPlugin(["x", "y"]);
      var rD = vector_plugin_6f82aee9_esm_objectSpread2(
          vector_plugin_6f82aee9_esm_objectSpread2(
            {
              component: function () {
                let {
                  label: h,
                  displayValue: g,
                  onUpdate: _,
                  settings: b,
                } = useInputContext();
                return F.createElement(
                  Row,
                  { input: !0 },
                  F.createElement(Label, null, h),
                  F.createElement(
                    rR,
                    { withJoystick: !!b.joystick },
                    b.joystick &&
                      F.createElement(Joystick, {
                        value: g,
                        settings: b,
                        onUpdate: _,
                      }),
                    F.createElement(Vector, {
                      value: g,
                      settings: b,
                      onUpdate: _,
                    }),
                  ),
                );
              },
            },
            rO,
          ),
          {},
          {
            normalize: (h) => {
              let { joystick: g = !0 } = h,
                _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, rA),
                { value: b, settings: y } = rO.normalize(_);
              return {
                value: b,
                settings: vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2({}, y),
                  {},
                  { joystick: g },
                ),
              };
            },
          },
        ),
        rL = Object.freeze({
          __proto__: null,
          sanitize: (h) => {
            if (void 0 !== h) {
              if (h instanceof File)
                try {
                  return URL.createObjectURL(h);
                } catch (h) {
                  return;
                }
              if ("string" == typeof h && 0 === h.indexOf("blob:")) return h;
              throw Error(`Invalid image format [undefined | blob |\xa0File].`);
            }
          },
          schema: (h, g) => "object" == typeof g && "image" in g,
          normalize: ({ image: h }) => ({ value: h }),
        });
      let rM = t6("div", {
          position: "relative",
          display: "grid",
          gridTemplateColumns: "$sizes$rowHeight auto 20px",
          columnGap: "$colGap",
          alignItems: "center",
        }),
        rI = t6("div", {
          $flexCenter: "",
          overflow: "hidden",
          height: "$rowHeight",
          background: "$elevation3",
          textAlign: "center",
          color: "inherit",
          borderRadius: "$sm",
          outline: "none",
          userSelect: "none",
          cursor: "pointer",
          $inputStyle: "",
          $hover: "",
          $focusWithin: "",
          $active: "$accent1 $elevation1",
          variants: {
            isDragAccept: {
              true: { $inputStyle: "$accent1", backgroundColor: "$elevation1" },
            },
          },
        }),
        rN = t6("div", {
          boxSizing: "border-box",
          borderRadius: "$sm",
          height: "$rowHeight",
          width: "$rowHeight",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          variants: {
            hasImage: { true: { cursor: "pointer", $hover: "", $active: "" } },
          },
        }),
        rV = t6("div", {
          $flexCenter: "",
          width: "$imagePreviewWidth",
          height: "$imagePreviewHeight",
          borderRadius: "$sm",
          boxShadow: "$level2",
          pointerEvents: "none",
          $inputStyle: "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }),
        rF = t6("div", {
          fontSize: "0.8em",
          height: "100%",
          padding: "$rowGap $md",
        }),
        rB = t6("div", {
          $flexCenter: "",
          top: "0",
          right: "0",
          marginRight: "$sm",
          height: "100%",
          cursor: "pointer",
          variants: {
            disabled: { true: { color: "$elevation3", cursor: "default" } },
          },
          "&::after,&::before": {
            content: '""',
            position: "absolute",
            height: 2,
            width: 10,
            borderRadius: 1,
            backgroundColor: "currentColor",
          },
          "&::after": { transform: "rotate(45deg)" },
          "&::before": { transform: "rotate(-45deg)" },
        });
      var rz = vector_plugin_6f82aee9_esm_objectSpread2(
        {
          component: function () {
            let {
                label: h,
                value: g,
                onUpdate: _,
                disabled: b,
              } = useInputContext(),
              {
                popinRef: y,
                wrapperRef: A,
                shown: N,
                show: B,
                hide: H,
              } = usePopin(),
              U = (0, F.useCallback)(
                (h) => {
                  h.length && _(h[0]);
                },
                [_],
              ),
              K = (0, F.useCallback)(
                (h) => {
                  h.stopPropagation(), _(void 0);
                },
                [_],
              ),
              {
                getRootProps: q,
                getInputProps: Y,
                isDragAccept: X,
              } = useDropzone({
                maxFiles: 1,
                accept: "image/*",
                onDrop: U,
                disabled: b,
              });
            return F.createElement(
              Row,
              { input: !0 },
              F.createElement(Label, null, h),
              F.createElement(
                rM,
                null,
                F.createElement(rN, {
                  ref: y,
                  hasImage: !!g,
                  onPointerDown: () => !!g && B(),
                  onPointerUp: H,
                  style: { backgroundImage: g ? `url(${g})` : "none" },
                }),
                N &&
                  !!g &&
                  F.createElement(
                    Portal,
                    null,
                    F.createElement(ng, {
                      onPointerUp: H,
                      style: { cursor: "pointer" },
                    }),
                    F.createElement(rV, {
                      ref: A,
                      style: { backgroundImage: `url(${g})` },
                    }),
                  ),
                F.createElement(
                  rI,
                  q({ isDragAccept: X }),
                  F.createElement("input", Y()),
                  F.createElement(rF, null, X ? "drop image" : "click or drop"),
                ),
                F.createElement(rB, { onClick: K, disabled: !g }),
              ),
            );
          },
        },
        rL,
      );
      let rH = v8n().number(),
        leva_esm_format = (h) => ({ min: h[0], max: h[1] }),
        leva_esm_sanitize = (h, { bounds: [g, _] }, b) => {
          let y = Array.isArray(h) ? leva_esm_format(h) : h,
            A = { min: b[0], max: b[1] },
            { min: N, max: F } = vector_plugin_6f82aee9_esm_objectSpread2(
              vector_plugin_6f82aee9_esm_objectSpread2({}, A),
              y,
            );
          return [
            vector_plugin_6f82aee9_esm_clamp(Number(N), g, Math.max(g, F)),
            vector_plugin_6f82aee9_esm_clamp(Number(F), Math.min(_, N), _),
          ];
        };
      var rW = Object.freeze({
        __proto__: null,
        schema: (h, g) =>
          v8n().array().length(2).every.number().test(h) &&
          v8n().schema({ min: rH, max: rH }).test(g),
        format: leva_esm_format,
        sanitize: leva_esm_sanitize,
        normalize: ({ value: h, min: g, max: _ }) => {
          let b = { min: g, max: _ },
            y = normalizeKeyedNumberSettings(leva_esm_format(h), {
              min: b,
              max: b,
            }),
            A = vector_plugin_6f82aee9_esm_objectSpread2(
              vector_plugin_6f82aee9_esm_objectSpread2({}, y),
              {},
              { bounds: [g, _] },
            ),
            N = leva_esm_sanitize(leva_esm_format(h), A, h);
          return { value: N, settings: A };
        },
      });
      let rU = ["value", "bounds", "onDrag"],
        rZ = ["bounds"],
        rG = t6("div", {
          display: "grid",
          columnGap: "$colGap",
          gridTemplateColumns:
            "auto calc($sizes$numberInputMinWidth * 2 + $space$rowGap)",
        });
      function IntervalSlider(h) {
        let {
            value: g,
            bounds: [_, b],
            onDrag: y,
          } = h,
          A = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, rU),
          N = (0, F.useRef)(null),
          B = (0, F.useRef)(null),
          H = (0, F.useRef)(null),
          U = (0, F.useRef)(0),
          K = useTh("sizes", "scrubberWidth"),
          q = vector_plugin_6f82aee9_esm_useDrag(
            ({ event: h, first: F, xy: [q], movement: [Y], memo: X = {} }) => {
              if (F) {
                let { width: y, left: A } = N.current.getBoundingClientRect();
                U.current = y - parseFloat(K);
                let F =
                  (null == h ? void 0 : h.target) === B.current ||
                  (null == h ? void 0 : h.target) === H.current;
                X.pos = invertedRange((q - A) / y, _, b);
                let Y = Math.abs(X.pos - g.min) - Math.abs(X.pos - g.max);
                (X.key = Y < 0 || (0 === Y && X.pos <= g.min) ? "min" : "max"),
                  F && (X.pos = g[X.key]);
              }
              let Q = X.pos + invertedRange(Y / U.current, 0, b - _);
              return y({ [X.key]: n$(Q, A[X.key]) }), X;
            },
          ),
          Y = `calc(${range(g.min, _, b)} * (100% - ${K} - 8px) + 4px)`,
          X = `calc(${1 - range(g.max, _, b)} * (100% - ${K} - 8px) + 4px)`;
        return F.createElement(
          nT,
          vector_plugin_6f82aee9_esm_extends({ ref: N }, q()),
          F.createElement(
            nE,
            null,
            F.createElement(nj, { style: { left: Y, right: X } }),
          ),
          F.createElement(nP, { position: "left", ref: B, style: { left: Y } }),
          F.createElement(nP, {
            position: "right",
            ref: H,
            style: { right: X },
          }),
        );
      }
      var rK = vector_plugin_6f82aee9_esm_objectSpread2(
        {
          component: function () {
            let {
                label: h,
                displayValue: g,
                onUpdate: _,
                settings: b,
              } = useInputContext(),
              y = vector_plugin_6f82aee9_esm_objectWithoutProperties(b, rZ);
            return F.createElement(
              F.Fragment,
              null,
              F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, null, h),
                F.createElement(
                  rG,
                  null,
                  F.createElement(
                    IntervalSlider,
                    vector_plugin_6f82aee9_esm_extends({ value: g }, b, {
                      onDrag: _,
                    }),
                  ),
                  F.createElement(Vector, {
                    value: g,
                    settings: y,
                    onUpdate: _,
                    innerLabelTrim: 0,
                  }),
                ),
              ),
            );
          },
        },
        rW,
      );
      let createEventEmitter = () => {
          let h = new Map();
          return {
            on: (g, _) => {
              let b = h.get(g);
              void 0 === b && ((b = new Set()), h.set(g, b)), b.add(_);
            },
            off: (g, _) => {
              let b = h.get(g);
              void 0 !== b && (b.delete(_), 0 === b.size && h.delete(g));
            },
            emit: (g, ..._) => {
              let b = h.get(g);
              if (void 0 !== b) for (let h of b) h(..._);
            },
          };
        },
        rq = ["type", "value"],
        rY = ["onChange", "transient", "onEditStart", "onEditEnd"],
        rX = new (function () {
          let h = (0, rb.Z)(subscribeWithSelector(() => ({ data: {} }))),
            g = createEventEmitter();
          (this.storeId = getUid()), (this.useStore = h);
          let _ = {},
            A = new Set();
          (this.getVisiblePaths = () => {
            let h = this.getData(),
              g = Object.keys(h),
              b = [];
            Object.entries(_).forEach(([h, _]) => {
              _.render &&
                g.some((g) => 0 === g.indexOf(h)) &&
                !_.render(this.get) &&
                b.push(h + ".");
            });
            let y = [];
            return (
              A.forEach((g) => {
                g in h &&
                  h[g].__refCount > 0 &&
                  b.every((h) => -1 === g.indexOf(h)) &&
                  (!h[g].render || h[g].render(this.get)) &&
                  y.push(g);
              }),
              y
            );
          }),
            (this.setOrderedPaths = (h) => {
              h.forEach((h) => A.add(h));
            }),
            (this.orderPaths = (h) => (this.setOrderedPaths(h), h)),
            (this.disposePaths = (g) => {
              h.setState((h) => {
                let _ = h.data;
                return (
                  g.forEach((h) => {
                    if (h in _) {
                      let g = _[h];
                      g.__refCount--,
                        0 === g.__refCount && g.type in y && delete _[h];
                    }
                  }),
                  { data: _ }
                );
              });
            }),
            (this.dispose = () => {
              h.setState(() => ({ data: {} }));
            }),
            (this.getFolderSettings = (h) => _[h] || {}),
            (this.getData = () => h.getState().data),
            (this.addData = (g, _) => {
              h.setState((h) => {
                let y = h.data;
                return (
                  Object.entries(g).forEach(([h, g]) => {
                    let A = y[h];
                    if (A) {
                      let { type: h, value: y } = g,
                        N = vector_plugin_6f82aee9_esm_objectWithoutProperties(
                          g,
                          rq,
                        );
                      h !== A.type
                        ? tO(b.INPUT_TYPE_OVERRIDE, h)
                        : ((0 === A.__refCount || _) && Object.assign(A, N),
                          A.__refCount++);
                    } else
                      y[h] = vector_plugin_6f82aee9_esm_objectSpread2(
                        vector_plugin_6f82aee9_esm_objectSpread2({}, g),
                        {},
                        { __refCount: 1 },
                      );
                  }),
                  { data: y }
                );
              });
            }),
            (this.setValueAtPath = (g, _, b) => {
              h.setState((h) => {
                let y = h.data;
                return updateInput(y[g], _, g, this, b), { data: y };
              });
            }),
            (this.setSettingsAtPath = (g, _) => {
              h.setState((h) => {
                let b = h.data;
                return (
                  (b[g].settings = vector_plugin_6f82aee9_esm_objectSpread2(
                    vector_plugin_6f82aee9_esm_objectSpread2({}, b[g].settings),
                    _,
                  )),
                  { data: b }
                );
              });
            }),
            (this.disableInputAtPath = (g, _) => {
              h.setState((h) => {
                let b = h.data;
                return (b[g].disabled = _), { data: b };
              });
            }),
            (this.set = (g, _) => {
              h.setState((h) => {
                let b = h.data;
                return (
                  Object.entries(g).forEach(([h, g]) => {
                    try {
                      updateInput(b[h], g, void 0, void 0, _);
                    } catch (h) {}
                  }),
                  { data: b }
                );
              });
            }),
            (this.getInput = (h) => {
              try {
                return this.getData()[h];
              } catch (g) {
                tO(b.PATH_DOESNT_EXIST, h);
              }
            }),
            (this.get = (h) => {
              var g;
              return null === (g = this.getInput(h)) || void 0 === g
                ? void 0
                : g.value;
            }),
            (this.emitOnEditStart = (h) => {
              g.emit(
                `onEditStart:${h}`,
                this.get(h),
                h,
                vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2(
                    {},
                    this.getInput(h),
                  ),
                  {},
                  { get: this.get },
                ),
              );
            }),
            (this.emitOnEditEnd = (h) => {
              g.emit(
                `onEditEnd:${h}`,
                this.get(h),
                h,
                vector_plugin_6f82aee9_esm_objectSpread2(
                  vector_plugin_6f82aee9_esm_objectSpread2(
                    {},
                    this.getInput(h),
                  ),
                  {},
                  { get: this.get },
                ),
              );
            }),
            (this.subscribeToEditStart = (h, _) => {
              let b = `onEditStart:${h}`;
              return g.on(b, _), () => g.off(b, _);
            }),
            (this.subscribeToEditEnd = (h, _) => {
              let b = `onEditEnd:${h}`;
              return g.on(b, _), () => g.off(b, _);
            });
          let _getDataFromSchema = (h, g, A) => {
            let N = {};
            return (
              Object.entries(h).forEach(([h, F]) => {
                if ("" === h) return tO(b.EMPTY_KEY);
                let B = join(g, h);
                if (F.type === y.FOLDER) {
                  let h = _getDataFromSchema(F.schema, B, A);
                  Object.assign(N, h), B in _ || (_[B] = F.settings);
                } else if (h in A) tO(b.DUPLICATE_KEYS, h, B, A[h].path);
                else {
                  let g = (function (h, g, _, b) {
                    let A = (function parseOptions(h, g, _ = {}, b) {
                        var A, N;
                        if ("object" != typeof h || Array.isArray(h))
                          return {
                            type: b,
                            input: h,
                            options: vector_plugin_6f82aee9_esm_objectSpread2(
                              {
                                key: g,
                                label: g,
                                optional: !1,
                                disabled: !1,
                                order: 0,
                              },
                              _,
                            ),
                          };
                        if ("__customInput" in h) {
                          let { type: _, __customInput: b } = h,
                            y =
                              vector_plugin_6f82aee9_esm_objectWithoutProperties(
                                h,
                                tG,
                              );
                          return parseOptions(b, g, y, _);
                        }
                        let {
                            render: F,
                            label: B,
                            optional: H,
                            order: U = 0,
                            disabled: K,
                            hint: q,
                            onChange: Y,
                            onEditStart: X,
                            onEditEnd: Q,
                            transient: et,
                          } = h,
                          en =
                            vector_plugin_6f82aee9_esm_objectWithoutProperties(
                              h,
                              tK,
                            ),
                          er = vector_plugin_6f82aee9_esm_objectSpread2(
                            {
                              render: F,
                              key: g,
                              label: null != B ? B : g,
                              hint: q,
                              transient: null != et ? et : !!Y,
                              onEditStart: X,
                              onEditEnd: Q,
                              disabled: K,
                              optional: H,
                              order: U,
                            },
                            _,
                          ),
                          { type: ei } = en,
                          eo =
                            vector_plugin_6f82aee9_esm_objectWithoutProperties(
                              en,
                              tq,
                            );
                        return (ei = null != b ? b : ei) in y
                          ? { type: ei, input: eo, options: er }
                          : {
                              type: ei,
                              input:
                                b && isObject(eo) && "value" in eo
                                  ? eo.value
                                  : isEmptyObject(eo)
                                    ? void 0
                                    : eo,
                              options: vector_plugin_6f82aee9_esm_objectSpread2(
                                vector_plugin_6f82aee9_esm_objectSpread2(
                                  {},
                                  er,
                                ),
                                {},
                                {
                                  onChange: Y,
                                  optional:
                                    null !== (A = er.optional) &&
                                    void 0 !== A &&
                                    A,
                                  disabled:
                                    null !== (N = er.disabled) &&
                                    void 0 !== N &&
                                    N,
                                },
                              ),
                            };
                      })(h, g),
                      { type: N, input: F, options: B } = A;
                    if (N)
                      return N in y
                        ? A
                        : {
                            type: N,
                            input: normalize$3(N, F, _, b),
                            options: B,
                          };
                    let H = getValueType(F);
                    return H
                      ? { type: H, input: normalize$3(H, F, _, b), options: B }
                      : !!(H = getValueType({ value: F })) && {
                          type: H,
                          input: normalize$3(H, { value: F }, _, b),
                          options: B,
                        };
                  })(F, h, B, N);
                  if (g) {
                    let { type: _, options: b, input: y } = g,
                      {
                        onChange: F,
                        transient: H,
                        onEditStart: U,
                        onEditEnd: K,
                      } = b,
                      q = vector_plugin_6f82aee9_esm_objectWithoutProperties(
                        b,
                        rY,
                      );
                    (N[B] = vector_plugin_6f82aee9_esm_objectSpread2(
                      vector_plugin_6f82aee9_esm_objectSpread2(
                        vector_plugin_6f82aee9_esm_objectSpread2(
                          { type: _ },
                          q,
                        ),
                        y,
                      ),
                      {},
                      { fromPanel: !0 },
                    )),
                      (A[h] = {
                        path: B,
                        onChange: F,
                        transient: H,
                        onEditStart: U,
                        onEditEnd: K,
                      });
                  } else tO(b.UNKNOWN_INPUT, B, F);
                }
              }),
              N
            );
          };
          this.getDataFromSchema = (h) => {
            let g = {},
              _ = _getDataFromSchema(h, "", g);
            return [_, g];
          };
        })(),
        rJ = { collapsed: !1 },
        isInput = (h) => "__levaInput" in h,
        buildTree = (h, g) => {
          let _ = {},
            b = g ? g.toLowerCase() : null;
          return (
            h.forEach((h) => {
              let [g, y] = (function (h) {
                let g = h.split(".");
                return [g.pop(), g.join(".") || void 0];
              })(h);
              (!b || g.toLowerCase().indexOf(b) > -1) &&
                rx()(_, y, { [g]: { __levaInput: !0, path: h } });
            }),
            _
          );
        },
        rQ = [
          "type",
          "label",
          "path",
          "valueKey",
          "value",
          "settings",
          "setValue",
          "disabled",
        ];
      function ControlInput(h) {
        let {
            type: g,
            label: _,
            path: y,
            valueKey: A,
            value: N,
            settings: B,
            setValue: H,
            disabled: U,
          } = h,
          K = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, rQ),
          {
            displayValue: q,
            onChange: Y,
            onUpdate: X,
          } = useInputSetters({ type: g, value: N, settings: B, setValue: H }),
          Q = tV[g].component;
        return Q
          ? F.createElement(
              tQ.Provider,
              {
                value: vector_plugin_6f82aee9_esm_objectSpread2(
                  {
                    key: A,
                    path: y,
                    id: "" + y,
                    label: _,
                    displayValue: q,
                    value: N,
                    onChange: Y,
                    onUpdate: X,
                    settings: B,
                    setValue: H,
                    disabled: U,
                  },
                  K,
                ),
              },
              F.createElement(nm, { disabled: U }, F.createElement(Q, null)),
            )
          : (tO(b.NO_COMPONENT_FOR_TYPE, g, y), null);
      }
      let r0 = t6("button", {
          display: "block",
          $reset: "",
          fontWeight: "$button",
          height: "$rowHeight",
          borderStyle: "none",
          borderRadius: "$sm",
          backgroundColor: "$elevation1",
          color: "$highlight1",
          "&:not(:disabled)": {
            color: "$highlight3",
            backgroundColor: "$accent2",
            cursor: "pointer",
            $hover: "$accent3",
            $active: "$accent3 $accent1",
            $focus: "",
          },
        }),
        r1 = t6("div", {
          $flex: "",
          justifyContent: "flex-end",
          gap: "$colGap",
        }),
        r2 = t6("button", {
          $reset: "",
          cursor: "pointer",
          borderRadius: "$xs",
          "&:hover": { backgroundColor: "$elevation3" },
        }),
        getOpts = ({ label: h, opts: g }) => {
          let _ = "string" == typeof h && "" === h.trim() ? null : h,
            b = g;
          return (
            "object" == typeof g.opts &&
              (void 0 !== b.label && (_ = g.label), (b = g.opts)),
            { label: _, opts: b }
          );
        },
        r3 = t6("canvas", {
          height: "$monitorHeight",
          width: "100%",
          display: "block",
          borderRadius: "$sm",
        }),
        r6 = (0, F.forwardRef)(function ({ initialValue: h }, g) {
          let _ = useTh("colors", "highlight3"),
            b = useTh("colors", "elevation2"),
            y = useTh("colors", "highlight1"),
            [A, N] = (0, F.useMemo)(
              () => [
                colord_w(y).alpha(0.4).toRgbString(),
                colord_w(y).alpha(0.1).toRgbString(),
              ],
              [y],
            ),
            B = (0, F.useRef)([h]),
            H = (0, F.useRef)(h),
            U = (0, F.useRef)(h),
            K = (0, F.useRef)(),
            q = (0, F.useCallback)(
              (h, g) => {
                if (!h) return;
                let { width: y, height: F } = h,
                  K = new Path2D(),
                  q = y / 100,
                  Y = 0.05 * F;
                for (let h = 0; h < B.current.length; h++) {
                  let g = range(B.current[h], H.current, U.current),
                    _ = q * h,
                    b = F - g * (F - 2 * Y) - Y;
                  K.lineTo(_, b);
                }
                g.clearRect(0, 0, y, F);
                let X = new Path2D(K);
                X.lineTo(q * (B.current.length + 1), F),
                  X.lineTo(0, F),
                  X.lineTo(0, 0);
                let Q = g.createLinearGradient(0, 0, 0, F);
                Q.addColorStop(0, A),
                  Q.addColorStop(1, N),
                  (g.fillStyle = Q),
                  g.fill(X),
                  (g.strokeStyle = b),
                  (g.lineJoin = "round"),
                  (g.lineWidth = 14),
                  g.stroke(K),
                  (g.strokeStyle = _),
                  (g.lineWidth = 2),
                  g.stroke(K);
              },
              [_, b, A, N],
            ),
            [Y, X] = (function (h) {
              let g = (0, F.useRef)(null),
                _ = (0, F.useRef)(null),
                b = (0, F.useRef)(!1);
              return (
                (0, F.useEffect)(() => {
                  let y = debounce(() => {
                    (g.current.width =
                      g.current.offsetWidth * window.devicePixelRatio),
                      (g.current.height =
                        g.current.offsetHeight * window.devicePixelRatio),
                      h(g.current, _.current);
                  }, 250);
                  return (
                    window.addEventListener("resize", y),
                    b.current || (y(), (b.current = !0)),
                    () => window.removeEventListener("resize", y)
                  );
                }, [h]),
                (0, F.useEffect)(() => {
                  _.current = g.current.getContext("2d");
                }, []),
                [g, _]
              );
            })(q);
          return (
            (0, F.useImperativeHandle)(
              g,
              () => ({
                frame: (h) => {
                  var g;
                  (void 0 === H.current || h < H.current) && (H.current = h),
                    (void 0 === U.current || h > U.current) && (U.current = h),
                    (g = B.current).push(h),
                    g.length > 100 && g.shift(),
                    (K.current = requestAnimationFrame(() =>
                      q(Y.current, X.current),
                    ));
                },
              }),
              [Y, X, q],
            ),
            (0, F.useEffect)(() => () => cancelAnimationFrame(K.current), []),
            F.createElement(r3, { ref: Y })
          );
        }),
        leva_esm_parse = (h) =>
          Number.isFinite(h) ? h.toPrecision(2) : h.toString(),
        r4 = (0, F.forwardRef)(function ({ initialValue: h }, g) {
          let [_, b] = (0, F.useState)(leva_esm_parse(h));
          return (
            (0, F.useImperativeHandle)(
              g,
              () => ({ frame: (h) => b(leva_esm_parse(h)) }),
              [],
            ),
            F.createElement("div", null, _)
          );
        });
      function getValue(h) {
        return "function" == typeof h ? h() : h.current;
      }
      let r5 = ["type", "label", "key"],
        r8 = {
          [y.BUTTON]: function ({ onClick: h, settings: g, label: _ }) {
            let b = vector_plugin_6f82aee9_esm_useStoreContext();
            return F.createElement(
              Row,
              null,
              F.createElement(
                r0,
                { disabled: g.disabled, onClick: () => h(b.get) },
                _,
              ),
            );
          },
          [y.BUTTON_GROUP]: function (h) {
            let { label: g, opts: _ } = getOpts(h),
              b = vector_plugin_6f82aee9_esm_useStoreContext();
            return F.createElement(
              Row,
              { input: !!g },
              g && F.createElement(Label, null, g),
              F.createElement(
                r1,
                null,
                Object.entries(_).map(([h, g]) =>
                  F.createElement(r2, { key: h, onClick: () => g(b.get) }, h),
                ),
              ),
            );
          },
          [y.MONITOR]: function ({ label: h, objectOrFn: g, settings: _ }) {
            let b = (0, F.useRef)(),
              y = (0, F.useRef)(getValue(g));
            return (
              (0, F.useEffect)(() => {
                let h = window.setInterval(() => {
                  var h;
                  document.hidden ||
                    null === (h = b.current) ||
                    void 0 === h ||
                    h.frame(getValue(g));
                }, _.interval);
                return () => window.clearInterval(h);
              }, [g, _.interval]),
              F.createElement(
                Row,
                { input: !0 },
                F.createElement(Label, { align: "top" }, h),
                _.graph
                  ? F.createElement(r6, { ref: b, initialValue: y.current })
                  : F.createElement(r4, { ref: b, initialValue: y.current }),
              )
            );
          },
        },
        r9 = F.memo(({ path: h }) => {
          let [
            g,
            {
              set: _,
              setSettings: A,
              disable: N,
              storeId: B,
              emitOnEditStart: H,
              emitOnEditEnd: U,
            },
          ] = (function (h) {
            let g = vector_plugin_6f82aee9_esm_useStoreContext(),
              [_, b] = (0, F.useState)(getInputAtPath(g.getData(), h)),
              y = (0, F.useCallback)((_) => g.setValueAtPath(h, _, !0), [h, g]),
              A = (0, F.useCallback)((_) => g.setSettingsAtPath(h, _), [h, g]),
              N = (0, F.useCallback)((_) => g.disableInputAtPath(h, _), [h, g]),
              B = (0, F.useCallback)(() => g.emitOnEditStart(h), [h, g]),
              H = (0, F.useCallback)(() => g.emitOnEditEnd(h), [h, g]);
            return (
              (0, F.useEffect)(() => {
                b(getInputAtPath(g.getData(), h));
                let _ = g.useStore.subscribe(
                  (g) => getInputAtPath(g.data, h),
                  b,
                  { equalityFn: shallow },
                );
                return () => _();
              }, [g, h]),
              [
                _,
                {
                  set: y,
                  setSettings: A,
                  disable: N,
                  storeId: g.storeId,
                  emitOnEditStart: B,
                  emitOnEditEnd: H,
                },
              ]
            );
          })(h);
          if (!g) return null;
          let { type: K, label: q, key: Y } = g,
            X = vector_plugin_6f82aee9_esm_objectWithoutProperties(g, r5);
          if (K in y) {
            let g = r8[K];
            return F.createElement(
              g,
              vector_plugin_6f82aee9_esm_extends({ label: q, path: h }, X),
            );
          }
          return K in tV
            ? F.createElement(
                ControlInput,
                vector_plugin_6f82aee9_esm_extends(
                  {
                    key: B + h,
                    type: K,
                    label: q,
                    storeId: B,
                    path: h,
                    valueKey: Y,
                    setValue: _,
                    setSettings: A,
                    disable: N,
                    emitOnEditStart: H,
                    emitOnEditEnd: U,
                  },
                  X,
                ),
              )
            : (tD(b.UNSUPPORTED_INPUT, K, h), null);
        });
      function FolderTitle({ toggle: h, toggled: g, name: _ }) {
        return F.createElement(
          nl,
          { onClick: () => h() },
          F.createElement(Chevron, { toggled: g }),
          F.createElement("div", null, _),
        );
      }
      let Folder = ({ name: h, path: g, tree: _ }) => {
          let b = vector_plugin_6f82aee9_esm_useStoreContext(),
            y = join(g, h),
            { collapsed: A, color: N } = b.getFolderSettings(y),
            [B, H] = (0, F.useState)(!A),
            U = (0, F.useRef)(null),
            K = useTh("colors", "folderWidgetColor"),
            q = useTh("colors", "folderTextColor");
          return (
            (0, F.useLayoutEffect)(() => {
              U.current.style.setProperty(
                "--leva-colors-folderWidgetColor",
                N || K,
              ),
                U.current.style.setProperty(
                  "--leva-colors-folderTextColor",
                  N || q,
                );
            }, [N, K, q]),
            F.createElement(
              na,
              { ref: U },
              F.createElement(FolderTitle, {
                name: h,
                toggled: B,
                toggle: () => H((h) => !h),
              }),
              F.createElement(r7, { parent: y, tree: _, toggled: B }),
            )
          );
        },
        r7 = F.memo(
          ({
            isRoot: h = !1,
            fill: g = !1,
            flat: _ = !1,
            parent: b,
            tree: y,
            toggled: A,
          }) => {
            let { wrapperRef: N, contentRef: B } = (function (h) {
                let g = (0, F.useRef)(null),
                  _ = (0, F.useRef)(null),
                  b = (0, F.useRef)(!0);
                return (
                  (0, F.useLayoutEffect)(() => {
                    h ||
                      ((g.current.style.height = "0px"),
                      (g.current.style.overflow = "hidden"));
                  }, []),
                  (0, F.useEffect)(() => {
                    let y;
                    if (b.current) {
                      b.current = !1;
                      return;
                    }
                    let A = g.current,
                      fixHeight = () => {
                        h &&
                          (A.style.removeProperty("height"),
                          A.style.removeProperty("overflow"),
                          _.current.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                          }));
                      };
                    A.addEventListener("transitionend", fixHeight, {
                      once: !0,
                    });
                    let { height: N } = _.current.getBoundingClientRect();
                    return (
                      (A.style.height = N + "px"),
                      h ||
                        ((A.style.overflow = "hidden"),
                        (y = window.setTimeout(
                          () => (A.style.height = "0px"),
                          50,
                        ))),
                      () => {
                        A.removeEventListener("transitionend", fixHeight),
                          clearTimeout(y);
                      }
                    );
                  }, [h]),
                  { wrapperRef: g, contentRef: _ }
                );
              })(A),
              H = vector_plugin_6f82aee9_esm_useStoreContext(),
              getOrder = ([h, g]) => {
                var _;
                let y = isInput(g)
                  ? null === (_ = H.getInput(g.path)) || void 0 === _
                    ? void 0
                    : _.order
                  : H.getFolderSettings(join(b, h)).order;
                return y || 0;
              },
              U = Object.entries(y).sort((h, g) => getOrder(h) - getOrder(g));
            return F.createElement(
              ns,
              { ref: N, isRoot: h, fill: g, flat: _ },
              F.createElement(
                nu,
                { ref: B, isRoot: h, toggled: A },
                U.map(([h, g]) =>
                  isInput(g)
                    ? F.createElement(r9, {
                        key: g.path,
                        valueKey: g.valueKey,
                        path: g.path,
                      })
                    : F.createElement(Folder, {
                        key: h,
                        name: h,
                        path: b,
                        tree: g,
                      }),
                ),
              ),
            );
          },
        ),
        ie = t6("div", {
          position: "relative",
          fontFamily: "$mono",
          fontSize: "$root",
          color: "$rootText",
          backgroundColor: "$elevation1",
          variants: {
            fill: {
              false: {
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 1e3,
                width: "$rootWidth",
              },
              true: { position: "relative", width: "100%" },
            },
            flat: { false: { borderRadius: "$lg", boxShadow: "$level1" } },
            oneLineLabels: {
              true: {
                [`${nd}`]: {
                  gridTemplateColumns: "auto",
                  gridAutoColumns: "minmax(max-content, 1fr)",
                  gridAutoRows: "minmax($sizes$rowHeight), auto)",
                  rowGap: 0,
                  columnGap: 0,
                  marginTop: "$rowGap",
                },
              },
            },
            hideTitleBar: {
              true: { $$titleBarHeight: "0px" },
              false: { $$titleBarHeight: "$sizes$titleBarHeight" },
            },
          },
          "&,*,*:after,*:before": { boxSizing: "border-box" },
          "*::selection": { backgroundColor: "$accent2" },
        }),
        it = t6("i", {
          $flexCenter: "",
          width: 40,
          userSelect: "none",
          cursor: "pointer",
          "> svg": {
            fill: "$highlight1",
            transition: "transform 350ms ease, fill 250ms ease",
          },
          "&:hover > svg": { fill: "$highlight3" },
          variants: { active: { true: { "> svg": { fill: "$highlight2" } } } },
        }),
        ir = t6("div", {
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          height: "$titleBarHeight",
          variants: { mode: { drag: { cursor: "grab" } } },
        }),
        ii = t6("div", {
          $flex: "",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          transition: "height 250ms ease",
          color: "$highlight3",
          paddingLeft: "$md",
          [`> ${it}`]: { height: 30 },
          variants: { toggled: { true: { height: 30 }, false: { height: 0 } } },
        }),
        io = t6("input", {
          $reset: "",
          flex: 1,
          position: "relative",
          height: 30,
          width: "100%",
          backgroundColor: "transparent",
          fontSize: "10px",
          borderRadius: "$root",
          "&:focus": {},
          "&::placeholder": { color: "$highlight2" },
        }),
        ia = t6("div", {
          touchAction: "none",
          $flexCenter: "",
          flex: 1,
          "> svg": { fill: "$highlight1" },
          color: "$highlight1",
          variants: {
            drag: {
              true: {
                $draggable: "",
                "> svg": { transition: "fill 250ms ease" },
                "&:hover": { color: "$highlight3" },
                "&:hover > svg": { fill: "$highlight3" },
              },
            },
            filterEnabled: { false: { paddingRight: 40 } },
          },
        }),
        is = F.forwardRef(({ setFilter: h, toggle: g }, _) => {
          let [b, y] = (0, F.useState)(""),
            A = (0, F.useMemo)(() => debounce(h, 250), [h]),
            clear = () => {
              h(""), y("");
            };
          return (
            (0, F.useEffect)(() => {
              A(b);
            }, [b, A]),
            F.createElement(
              F.Fragment,
              null,
              F.createElement(io, {
                ref: _,
                value: b,
                placeholder: "[Open filter with CMD+SHIFT+L]",
                onPointerDown: (h) => h.stopPropagation(),
                onChange: (h) => {
                  let _ = h.currentTarget.value;
                  g(!0), y(_);
                },
              }),
              F.createElement(
                it,
                {
                  onClick: () => clear(),
                  style: { visibility: b ? "visible" : "hidden" },
                },
                F.createElement(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    height: "14",
                    width: "14",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                  },
                  F.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                    clipRule: "evenodd",
                  }),
                ),
              ),
            )
          );
        });
      function TitleWithFilter({
        setFilter: h,
        onDrag: g,
        onDragStart: _,
        onDragEnd: b,
        toggle: y,
        toggled: A,
        title: N,
        drag: B,
        filterEnabled: H,
        from: U,
      }) {
        let [K, q] = (0, F.useState)(!1),
          Y = (0, F.useRef)(null);
        (0, F.useEffect)(() => {
          var h, g;
          K
            ? null === (h = Y.current) || void 0 === h || h.focus()
            : null === (g = Y.current) || void 0 === g || g.blur();
        }, [K]);
        let X = vector_plugin_6f82aee9_esm_useDrag(
          ({ offset: [h, y], first: A, last: N }) => {
            g({ x: h, y }), A && _({ x: h, y }), N && b({ x: h, y });
          },
          {
            filterTaps: !0,
            from: ({ offset: [h, g] }) => [
              (null == U ? void 0 : U.x) || h,
              (null == U ? void 0 : U.y) || g,
            ],
          },
        );
        return (
          (0, F.useEffect)(() => {
            let handleShortcut = (h) => {
              "L" === h.key && h.shiftKey && h.metaKey && q((h) => !h);
            };
            return (
              window.addEventListener("keydown", handleShortcut),
              () => window.removeEventListener("keydown", handleShortcut)
            );
          }, []),
          F.createElement(
            F.Fragment,
            null,
            F.createElement(
              ir,
              { mode: B ? "drag" : void 0 },
              F.createElement(
                it,
                { active: !A, onClick: () => y() },
                F.createElement(Chevron, { toggled: A, width: 12, height: 8 }),
              ),
              F.createElement(
                ia,
                vector_plugin_6f82aee9_esm_extends({}, B ? X() : {}, {
                  drag: B,
                  filterEnabled: H,
                }),
                void 0 === N && B
                  ? F.createElement(
                      "svg",
                      {
                        width: "20",
                        height: "10",
                        viewBox: "0 0 28 14",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      F.createElement("circle", { cx: "2", cy: "2", r: "2" }),
                      F.createElement("circle", { cx: "14", cy: "2", r: "2" }),
                      F.createElement("circle", { cx: "26", cy: "2", r: "2" }),
                      F.createElement("circle", { cx: "2", cy: "12", r: "2" }),
                      F.createElement("circle", { cx: "14", cy: "12", r: "2" }),
                      F.createElement("circle", { cx: "26", cy: "12", r: "2" }),
                    )
                  : N,
              ),
              H &&
                F.createElement(
                  it,
                  { active: K, onClick: () => q((h) => !h) },
                  F.createElement(
                    "svg",
                    {
                      xmlns: "http://www.w3.org/2000/svg",
                      height: "20",
                      viewBox: "0 0 20 20",
                    },
                    F.createElement("path", {
                      d: "M9 9a2 2 0 114 0 2 2 0 01-4 0z",
                    }),
                    F.createElement("path", {
                      fillRule: "evenodd",
                      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z",
                      clipRule: "evenodd",
                    }),
                  ),
                ),
            ),
            F.createElement(
              ii,
              { toggled: K },
              F.createElement(is, { ref: Y, setFilter: h, toggle: y }),
            ),
          )
        );
      }
      let il = ["store", "hidden", "theme", "collapsed"];
      function LevaRoot(h) {
        let { store: g, hidden: _ = !1, theme: b, collapsed: y = !1 } = h,
          A = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, il),
          N = useDeepMemo(
            () =>
              (function (h) {
                let g = getDefaultTheme();
                if (!h) return { theme: g, className: "" };
                Object.keys(h).forEach((_) => {
                  Object.assign(g[_], h[_]);
                });
                let _ = t5(g);
                return { theme: g, className: _.className };
              })(b),
            [b],
          ),
          [B, H] = (0, F.useState)(!y),
          U = "object" == typeof y ? !y.collapsed : B,
          K = (0, F.useMemo)(
            () =>
              "object" == typeof y
                ? (h) => {
                    "function" == typeof h
                      ? y.onChange(!h(!y.collapsed))
                      : y.onChange(!h);
                  }
                : H,
            [y],
          );
        return !g || _
          ? null
          : F.createElement(
              t0.Provider,
              { value: N },
              F.createElement(
                iu,
                vector_plugin_6f82aee9_esm_extends({ store: g }, A, {
                  toggled: U,
                  setToggle: K,
                  rootClass: N.className,
                }),
              ),
            );
      }
      let iu = F.memo(
          ({
            store: h,
            rootClass: g,
            fill: _ = !1,
            flat: b = !1,
            neverHide: y = !1,
            oneLineLabels: A = !1,
            titleBar: N = {
              title: void 0,
              drag: !0,
              filter: !0,
              position: void 0,
              onDrag: void 0,
              onDragStart: void 0,
              onDragEnd: void 0,
            },
            hideCopyButton: B = !1,
            toggled: H,
            setToggle: U,
          }) => {
            var K, q;
            let Y = useVisiblePaths(h),
              [X, Q] = (0, F.useState)(""),
              et = (0, F.useMemo)(() => buildTree(Y, X), [Y, X]),
              [en, er] = useTransform(),
              ei = y || Y.length > 0,
              eo = ("object" == typeof N && N.title) || void 0,
              ea =
                "object" != typeof N ||
                null === (K = N.drag) ||
                void 0 === K ||
                K,
              es =
                "object" != typeof N ||
                null === (q = N.filter) ||
                void 0 === q ||
                q,
              el = ("object" == typeof N && N.position) || void 0,
              eu = ("object" == typeof N && N.onDrag) || void 0,
              ec = ("object" == typeof N && N.onDragStart) || void 0,
              ed = ("object" == typeof N && N.onDragEnd) || void 0;
            return (
              F.useEffect(() => {
                er({
                  x: null == el ? void 0 : el.x,
                  y: null == el ? void 0 : el.y,
                });
              }, [el, er]),
              t7(),
              F.createElement(
                t2.Provider,
                { value: { hideCopyButton: B } },
                F.createElement(
                  ie,
                  {
                    ref: en,
                    className: g,
                    fill: _,
                    flat: b,
                    oneLineLabels: A,
                    hideTitleBar: !N,
                    style: { display: ei ? "block" : "none" },
                  },
                  N &&
                    F.createElement(TitleWithFilter, {
                      onDrag: (h) => {
                        er(h), null == eu || eu(h);
                      },
                      onDragStart: (h) => (null == ec ? void 0 : ec(h)),
                      onDragEnd: (h) => (null == ed ? void 0 : ed(h)),
                      setFilter: Q,
                      toggle: (h) => U((g) => (null != h ? h : !g)),
                      toggled: H,
                      title: eo,
                      drag: ea,
                      filterEnabled: es,
                      from: el,
                    }),
                  ei &&
                    F.createElement(
                      t1.Provider,
                      { value: h },
                      F.createElement(r7, {
                        isRoot: !0,
                        fill: _,
                        flat: b,
                        tree: et,
                        toggled: H,
                      }),
                    ),
                ),
              )
            );
          },
        ),
        ic = ["isRoot"],
        id = !1,
        ip = null;
      function Leva(h) {
        let { isRoot: g = !1 } = h,
          _ = vector_plugin_6f82aee9_esm_objectWithoutProperties(h, ic);
        return (
          (0, F.useEffect)(
            () => (
              (id = !0),
              !g && ip && (ip.remove(), (ip = null)),
              () => {
                g || (id = !1);
              }
            ),
            [g],
          ),
          F.createElement(
            LevaRoot,
            vector_plugin_6f82aee9_esm_extends({ store: rX }, _),
          )
        );
      }
      function useControls(h, g, _, b, A) {
        let B, H, U, K, q;
        let {
            folderName: Y,
            schema: X,
            folderSettings: Q,
            hookSettings: et,
            deps: en,
          } = ("string" == typeof h
            ? ((q = h),
              (B = g),
              Array.isArray(_)
                ? (K = _)
                : _ &&
                  ("store" in _
                    ? ((U = _), (K = b))
                    : ((H = _),
                      Array.isArray(b) ? (K = b) : ((U = b), (K = A)))))
            : ((B = h), Array.isArray(g) ? (K = g) : ((U = g), (K = _))),
          {
            schema: B,
            folderName: q,
            folderSettings: H,
            hookSettings: U,
            deps: K || [],
          }),
          er = "function" == typeof X,
          ei = (0, F.useRef)(!1),
          eo = (0, F.useRef)(!0),
          ea = useDeepMemo(() => {
            ei.current = !0;
            let h = "function" == typeof X ? X() : X;
            return Y
              ? {
                  [Y]: {
                    type: y.FOLDER,
                    schema: h,
                    settings: vector_plugin_6f82aee9_esm_objectSpread2(
                      vector_plugin_6f82aee9_esm_objectSpread2({}, rJ),
                      Q,
                    ),
                  },
                }
              : h;
          }, en),
          es = !(null != et && et.store);
        (0, F.useEffect)(() => {
          es &&
            !id &&
            (!ip &&
              ((ip =
                document.getElementById("leva__root") ||
                Object.assign(document.createElement("div"), {
                  id: "leva__root",
                })),
              document.body &&
                (document.body.appendChild(ip),
                (function (h, g) {
                  let _ = console.error;
                  (console.error = () => {}),
                    N.render(h, g),
                    (console.error = _);
                })(F.createElement(Leva, { isRoot: !0 }), ip))),
            (id = !0));
        }, [es]);
        let [el] = (0, F.useState)(
            () => (null == et ? void 0 : et.store) || rX,
          ),
          [eu, ec] = (0, F.useMemo)(() => el.getDataFromSchema(ea), [el, ea]),
          [ed, ef, ep, eh, em] = (0, F.useMemo)(() => {
            let h = [],
              g = [],
              _ = {},
              b = {},
              y = {};
            return (
              Object.values(ec).forEach(
                ({
                  path: A,
                  onChange: N,
                  onEditStart: F,
                  onEditEnd: B,
                  transient: H,
                }) => {
                  h.push(A),
                    N ? ((_[A] = N), H || g.push(A)) : g.push(A),
                    F && (b[A] = F),
                    B && (y[A] = B);
                },
              ),
              [h, g, _, b, y]
            );
          }, [ec]),
          eg = (0, F.useMemo)(() => el.orderPaths(ed), [ed, el]),
          ev = (function (h, g, _) {
            let b = h.useStore((h) => {
              let b = vector_plugin_6f82aee9_esm_objectSpread2(
                vector_plugin_6f82aee9_esm_objectSpread2({}, _),
                h.data,
              );
              return Object.entries(
                g.reduce(
                  (h, g) => (b && b.hasOwnProperty(g) && (h[g] = b[g]), h),
                  {},
                ),
              ).reduce(
                (h, [, { value: g, disabled: _, key: b }]) => (
                  (h[b] = _ ? void 0 : g), h
                ),
                {},
              );
            }, shallow);
            return b;
          })(el, ef, eu),
          e_ = (0, F.useCallback)(
            (h) => {
              let g = Object.entries(h).reduce(
                (h, [g, _]) => Object.assign(h, { [ec[g].path]: _ }),
                {},
              );
              el.set(g, !1);
            },
            [el, ec],
          ),
          eb = (0, F.useCallback)((h) => el.get(ec[h].path), [el, ec]);
        return ((0, F.useEffect)(() => {
          let h = !eo.current && ei.current;
          return (
            el.addData(eu, h),
            (eo.current = !1),
            (ei.current = !1),
            () => el.disposePaths(eg)
          );
        }, [el, eg, eu]),
        (0, F.useEffect)(() => {
          let h = [];
          return (
            Object.entries(ep).forEach(([g, _]) => {
              _(
                el.get(g),
                g,
                vector_plugin_6f82aee9_esm_objectSpread2(
                  { initial: !0, get: el.get },
                  el.getInput(g),
                ),
              );
              let b = el.useStore.subscribe(
                (h) => {
                  let _ = h.data[g],
                    b = _.disabled ? void 0 : _.value;
                  return [b, _];
                },
                ([h, b]) =>
                  _(
                    h,
                    g,
                    vector_plugin_6f82aee9_esm_objectSpread2(
                      { initial: !1, get: el.get },
                      b,
                    ),
                  ),
                { equalityFn: shallow },
              );
              h.push(b);
            }),
            () => h.forEach((h) => h())
          );
        }, [el, ep]),
        (0, F.useEffect)(() => {
          let h = [];
          return (
            Object.entries(eh).forEach(([g, _]) =>
              h.push(el.subscribeToEditStart(g, _)),
            ),
            Object.entries(em).forEach(([g, _]) =>
              h.push(el.subscribeToEditEnd(g, _)),
            ),
            () => h.forEach((h) => h())
          );
        }, [eh, em, el]),
        er)
          ? [ev, e_, eb]
          : ev;
      }
      register(A.SELECT, nI),
        register(A.IMAGE, rz),
        register(A.NUMBER, nA),
        register(A.COLOR, rT),
        register(A.STRING, nB),
        register(A.BOOLEAN, nW),
        register(A.INTERVAL, rK),
        register(A.VECTOR3D, rj),
        register(A.VECTOR2D, rD);
    },
    84297: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return createLucideIcon;
        },
      });
      var b = _(67294),
        y = {
          xmlns: "http://www.w3.org/2000/svg",
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      let toKebabCase = (h) =>
          h.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        createLucideIcon = (h, g) => {
          let _ = (0, b.forwardRef)(
            (
              {
                color: _ = "currentColor",
                size: A = 24,
                strokeWidth: N = 2,
                absoluteStrokeWidth: F,
                children: B,
                ...H
              },
              U,
            ) =>
              (0, b.createElement)(
                "svg",
                {
                  ref: U,
                  ...y,
                  width: A,
                  height: A,
                  stroke: _,
                  strokeWidth: F ? (24 * Number(N)) / Number(A) : N,
                  className: `lucide lucide-${toKebabCase(h)}`,
                  ...H,
                },
                [
                  ...g.map(([h, g]) => (0, b.createElement)(h, g)),
                  ...((Array.isArray(B) ? B : [B]) || []),
                ],
              ),
          );
          return (_.displayName = `${h}`), _;
        };
    },
    67884: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("AlignLeft", [
        ["line", { x1: "21", x2: "3", y1: "6", y2: "6", key: "1fp77t" }],
        ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
        ["line", { x1: "17", x2: "3", y1: "18", y2: "18", key: "1awlsn" }],
      ]);
    },
    82701: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("ArrowRight", [
        ["path", { d: "M5 12h14", key: "1ays0h" }],
        ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
      ]);
    },
    8971: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("ChevronDown", [
        ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
      ]);
    },
    13766: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("FileText", [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2",
          },
        ],
        ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
        ["line", { x1: "16", x2: "8", y1: "13", y2: "13", key: "14keom" }],
        ["line", { x1: "16", x2: "8", y1: "17", y2: "17", key: "17nazh" }],
        ["line", { x1: "10", x2: "8", y1: "9", y2: "9", key: "1a5vjj" }],
      ]);
    },
    46609: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("Key", [
        ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
        ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
        ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }],
      ]);
    },
    13542: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("MousePointer2", [
        ["path", { d: "m4 4 7.07 17 2.51-7.39L21 11.07z", key: "1vqm48" }],
      ]);
    },
    54463: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return y;
        },
      });
      var b = _(84297);
      let y = (0, b.Z)("ShieldCheck", [
        [
          "path",
          { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]);
    },
    34529: function (h, g, _) {
      "use strict";
      var b = _(51833),
        y = _(89386),
        A = _(43200),
        N = _(41086);
      h.exports = function (h, g, _) {
        if (!b(h)) throw TypeError("expected an object");
        if ("string" != typeof g || null == _) return y.apply(null, arguments);
        if ("string" == typeof _) return N(h, g, _), h;
        var F = A(h, g);
        return b(_) && b(F) && (_ = y({}, F, _)), N(h, g, _), h;
      };
    },
    89386: function (h, g, _) {
      "use strict";
      var b = _(51833),
        y = _(52561);
      function mixinDeep(h, g) {
        for (var _ = arguments.length, b = 0; ++b < _; ) {
          var A = arguments[b];
          isObject(A) && y(A, copy, h);
        }
        return h;
      }
      function copy(h, g) {
        if ("__proto__" !== g && "constructor" !== g && "prototype" !== g) {
          var _ = this[g];
          isObject(h) && isObject(_) ? mixinDeep(_, h) : (this[g] = h);
        }
      }
      function isObject(h) {
        return b(h) && !Array.isArray(h);
      }
      h.exports = mixinDeep;
    },
    91118: function (h, g, _) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return _(39820);
        },
      ]);
    },
    60777: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return Button;
        },
      });
      var b = _(85893),
        y = _(94184),
        A = _.n(y),
        N = _(49246),
        F = _.n(N);
      function Button(h) {
        let {
            children: g,
            href: _,
            as: y,
            size: N = "regular",
            type: B = "primary",
            disabled: H,
            className: U,
            pulse: K = !1,
            ...q
          } = h,
          Y = y || "a";
        return (0, b.jsx)(Y, {
          className: A()(F().container, U),
          href: _,
          "data-size": N,
          "data-type": B,
          "data-disabled": H,
          "data-pulse": !H && K,
          disabled: H,
          tabIndex: H ? -1 : 0,
          ...q,
          children: g,
        });
      }
    },
    60412: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return GAScripts;
        },
        j: function () {
          return gtagConversion;
        },
      });
      var b = _(85893),
        y = _(31955),
        A = _(4298),
        N = _.n(A);
      let F = "G-H4WXQP8ZTW";
      function GAScripts(h) {
        let { enabled: g } = h;
        return g
          ? (0, b.jsxs)(b.Fragment, {
              children: [
                (0, b.jsx)(N(), {
                  strategy: "lazyOnload",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(F),
                }),
                (0, b.jsx)(N(), {
                  id: "ga-analytics",
                  children:
                    "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', '"
                      .concat(F, "');\n          gtag('config', '")
                      .concat("AW-561480865", "');\n        "),
                }),
              ],
            })
          : null;
      }
      function gtagConversion(h) {
        let g =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : void 0,
          _ = !!y.Z.get("_ga");
        return !_ && g
          ? (window.location = g)
          : _
            ? (window.gtag("event", "conversion", {
                send_to: h,
                event_callback: g ? () => (window.location = g) : void 0,
              }),
              !1)
            : void 0;
      }
    },
    25321: function (h, g, _) {
      "use strict";
      _.d(g, {
        ZP: function () {
          return Icons;
        },
      });
      var b = _(85893);
      let y = {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          fill: "currentColor",
        },
        A = {
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        };
      function Icons() {
        return null;
      }
      (Icons.CaretUp = (h) =>
        (0, b.jsx)("svg", {
          ...y,
          ...h,
          children: (0, b.jsx)("path", {
            d: "M10.9998 9L7.99976 6L4.99976 9",
            ...A,
          }),
        })),
        (Icons.CaretRight = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", { d: "M7 11L10 8L7 5", ...A }),
          })),
        (Icons.CaretDown = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M10.9998 7L7.99976 10L4.99976 7",
              ...A,
            }),
          })),
        (Icons.CaretLeft = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", { d: "M9 11L6 8L9 5", ...A }),
          })),
        (Icons.ArrowRight = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M12.832 7.65636C12.7881 7.54992 12.7229 7.4502 12.6364 7.3637L9.63637 4.3637C9.2849 4.01223 8.71505 4.01223 8.36358 4.3637C8.01211 4.71517 8.01211 5.28502 8.36358 5.63649L9.82718 7.1001H3.99973C3.50268 7.1001 3.09973 7.50304 3.09973 8.0001C3.09973 8.49715 3.50268 8.9001 3.99973 8.9001H9.82718L8.36358 10.3637C8.01211 10.7152 8.01211 11.285 8.36358 11.6365C8.71505 11.988 9.2849 11.988 9.63637 11.6365L12.6364 8.63649C12.81 8.46287 12.8979 8.23596 12.8999 8.00841C12.9 8.00564 12.9 8.00287 12.9 8.0001C12.9 7.99733 12.9 7.99456 12.8999 7.99179C12.8989 7.87308 12.8748 7.75986 12.832 7.65636Z",
            }),
          })),
        (Icons.ArrowDown = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M8.89998 4.0001C8.89998 3.50304 8.49703 3.1001 7.99998 3.1001C7.50292 3.1001 7.09998 3.50304 7.09998 4.0001V9.82731L5.63637 8.3637C5.2849 8.01223 4.71505 8.01223 4.36358 8.3637C4.01211 8.71517 4.01211 9.28502 4.36358 9.63649L7.36358 12.6365C7.44987 12.7228 7.54932 12.7879 7.65547 12.8318C7.75918 12.8748 7.87266 12.899 7.99167 12.9001C7.99443 12.9001 7.9972 12.9001 7.99998 12.9001C8.00275 12.9001 8.00552 12.9001 8.00828 12.9001C8.12729 12.899 8.24078 12.8748 8.34448 12.8318C8.45063 12.7879 8.55008 12.7228 8.63637 12.6365L11.6364 9.63649C11.9878 9.28502 11.9878 8.71517 11.6364 8.3637C11.2849 8.01223 10.7151 8.01223 10.3636 8.3637L8.89998 9.82731V4.0001Z",
            }),
          })),
        (Icons.ArrowUpRight = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M11.6993 4.94405C11.6604 4.79422 11.5822 4.65247 11.4648 4.53509C11.2839 4.3542 11.0452 4.26641 10.8081 4.27171H6.58573C6.08867 4.27171 5.68573 4.67465 5.68573 5.17171C5.68573 5.66877 6.08867 6.07171 6.58573 6.07171H8.65537L4.53497 10.1921C4.18349 10.5436 4.18349 11.1134 4.53497 11.4649C4.88644 11.8164 5.45629 11.8164 5.80776 11.4649L9.92837 7.34429L9.92837 9.41435C9.92837 9.91141 10.3313 10.3144 10.8284 10.3144C11.3254 10.3144 11.7284 9.91141 11.7284 9.41435V5.1771V5.17171C11.7284 5.14162 11.7269 5.11187 11.724 5.08253",
            }),
          })),
        (Icons.Google = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M8.28,7.37 L8.28,9.28333333 L12.8533333,9.28333333 C12.7133333,10.3566667 12.35575,11.1424167 11.8109167,11.69425 C11.1418333,12.3633333 10.1,13.09425 8.28,13.09425 C5.46425,13.09425 3.26333333,10.8233333 3.26333333,8.00758333 C3.26333333,5.19183333 5.46425,2.92091667 8.28,2.92091667 C9.79666667,2.92091667 10.9090833,3.52 11.72575,4.29 L13.0715,2.94425 C11.93575,1.84 10.4109167,1 8.28,1 C4.42241667,1 1.17908333,4.14241667 1.17908333,8 C1.17908333,11.8575833 4.42241667,15 8.28,15 C10.36425,15 11.93575,14.31575 13.16425,13.04 C14.42425,11.78 14.8209167,9.99908333 14.8209167,8.56758333 C14.8209167,8.12425 14.79,7.71183333 14.72,7.37 L8.28,7.37 Z",
            }),
          })),
        (Icons.GitHub = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M8,1.17325 C4.1325,1.17325 1,4.3075 1,8.17325 C1,11.2666667 3.0055,13.8899167 5.78625,14.8145 C6.13625,14.8804167 6.26458333,14.664 6.26458333,14.4779167 C6.26458333,14.3116667 6.25875,13.87125 6.25583333,13.2879167 C4.30866667,13.71025 3.898,12.34875 3.898,12.34875 C3.5795,11.5408333 3.11925,11.325 3.11925,11.325 C2.48516667,10.891 3.16825,10.89975 3.16825,10.89975 C3.87116667,10.94875 4.24041667,11.62075 4.24041667,11.62075 C4.86458333,12.6911667 5.879,12.382 6.27916667,12.2029167 C6.34216667,11.75025 6.52241667,11.4416667 6.7225,11.2666667 C5.16791667,11.0916667 3.534,10.4896667 3.534,7.8075 C3.534,7.04333333 3.80525,6.41916667 4.25441667,5.92916667 C4.17566667,5.75241667 3.93941667,5.04075 4.31566667,4.0765 C4.31566667,4.0765 4.90191667,3.88866667 6.24066667,4.794 C6.80066667,4.63825 7.39566667,4.56125 7.99066667,4.55775 C8.58566667,4.56125 9.18066667,4.63825 9.74066667,4.794 C11.0706667,3.88866667 11.6569167,4.0765 11.6569167,4.0765 C12.0331667,5.04075 11.7969167,5.75241667 11.7269167,5.92916667 C12.1731667,6.41916667 12.4444167,7.04333333 12.4444167,7.8075 C12.4444167,10.4966667 10.8081667,11.08875 9.25066667,11.2608333 C9.49566667,11.4708333 9.72316667,11.9001667 9.72316667,12.5558333 C9.72316667,13.4926667 9.71441667,14.2451667 9.71441667,14.4726667 C9.71441667,14.6564167 9.83691667,14.8751667 10.1956667,14.8051667 C12.99625,13.887 15,11.262 15,8.17325 C15,4.3075 11.86575,1.17325 8,1.17325",
            }),
          })),
        (Icons.Close = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M13.1364 4.13649C13.4878 3.78502 13.4878 3.21517 13.1364 2.8637C12.7849 2.51223 12.2151 2.51223 11.8636 2.8637L8.00026 6.72703L4.13696 2.86373C3.78548 2.51225 3.21564 2.51225 2.86416 2.86373C2.51269 3.2152 2.51269 3.78505 2.86416 4.13652L6.72746 7.99982L2.86358 11.8637C2.51211 12.2152 2.51211 12.785 2.86358 13.1365C3.21505 13.488 3.7849 13.488 4.13637 13.1365L8.00026 9.27261L11.8642 13.1365C12.2156 13.488 12.7855 13.488 13.137 13.1365C13.4884 12.785 13.4884 12.2152 13.137 11.8637L9.27305 7.99982L13.1364 4.13649Z",
            }),
          })),
        (Icons.LockClosed = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8 1C6.93913 1 5.92172 1.42143 5.17157 2.17157C4.42143 2.92172 4 3.93913 4 5V6C3.44772 6 3 6.44772 3 7V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44772 12.5523 6 12 6V5C12 3.93913 11.5786 2.92172 10.8284 2.17157C10.0783 1.42143 9.06087 1 8 1ZM10 6V5C10 4.46957 9.78929 3.96086 9.41421 3.58579C9.03914 3.21071 8.53043 3 8 3C7.46957 3 6.96086 3.21071 6.58579 3.58579C6.21071 3.96086 6 4.46957 6 5V6H10ZM9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z",
            }),
          })),
        (Icons.LockOpen = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M8 1C6.93913 1 5.92172 1.42143 5.17157 2.17157C4.42143 2.92172 4 3.93913 4 5V6C3.44772 6 3 6.44772 3 7V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V7C13 6.44772 12.5523 6 12 6H6V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3C8.53043 3 9.03914 3.21071 9.41421 3.58579C9.80474 3.97631 10.4379 3.97631 10.8284 3.58579C11.219 3.19526 11.219 2.5621 10.8284 2.17157C10.0783 1.42143 9.06087 1 8 1ZM9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9C8.55228 9 9 9.44772 9 10Z",
            }),
          })),
        (Icons.Logs = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M6.57484 1.00282C7.00474 1.03508 7.36558 1.33924 7.47014 1.75748L9.73799 10.8288L11.0769 7.61539C11.2322 7.24274 11.5963 7 12 7H14C14.5523 7 15 7.44772 15 8C15 8.55228 14.5523 9 14 9H12.6667L10.4231 14.3846C10.2573 14.7826 9.85507 15.0294 9.42516 14.9972C8.99526 14.9649 8.63442 14.6608 8.52986 14.2425L6.26201 5.17117L4.92308 8.38461C4.76781 8.75726 4.4037 9 4 9H2C1.44771 9 1 8.55228 1 8C1 7.44772 1.44771 7 2 7H3.33333L5.57692 1.6154C5.74274 1.21745 6.14493 0.970559 6.57484 1.00282Z",
            }),
          })),
        (Icons.Calendar = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              d: "M3 2C3 1.44772 3.44772 1 4 1C4.55228 1 5 1.44772 5 2V2.01732C5.575 2 6.2359 2 7 2H9C9.7641 2 10.425 2 11 2.01732V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V2.25125C13.4594 2.38137 13.8215 2.57888 14.1213 2.87868C15 3.75736 15 5.17157 15 8V9C15 11.8284 15 13.2426 14.1213 14.1213C13.2426 15 11.8284 15 9 15H7C4.17157 15 2.75736 15 1.87868 14.1213C1 13.2426 1 11.8284 1 9V8C1 5.17157 1 3.75736 1.87868 2.87868C2.17848 2.57888 2.54062 2.38137 3 2.25125V2ZM8.91508 5.90909H7.90336L6.64307 6.70703V7.66158L7.8089 6.93075H7.83873V11H8.91508V5.90909Z",
            }),
          })),
        (Icons.Badge = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.29001 1.08883C8.54496 0.459973 7.45504 0.459974 6.70999 1.08883L6.03146 1.66154C5.71479 1.92882 5.32292 2.09115 4.91 2.12607L4.02524 2.20089C3.05374 2.28305 2.28305 3.05374 2.20089 4.02524L2.12607 4.91C2.09115 5.32292 1.92882 5.71479 1.66154 6.03147L1.08883 6.70999C0.459973 7.45504 0.459974 8.54496 1.08883 9.29001L1.66154 9.96853C1.92882 10.2852 2.09115 10.6771 2.12607 11.09L2.20089 11.9748C2.28305 12.9463 3.05374 13.717 4.02524 13.7991L4.91 13.8739C5.32292 13.9089 5.71479 14.0712 6.03147 14.3385L6.70999 14.9112C7.45504 15.54 8.54496 15.54 9.29001 14.9112L9.96853 14.3385C10.2852 14.0712 10.6771 13.9089 11.09 13.8739L11.9748 13.7991C12.9463 13.717 13.717 12.9463 13.7991 11.9748L13.8739 11.09C13.9089 10.6771 14.0712 10.2852 14.3385 9.96853L14.9112 9.29001C15.54 8.54496 15.54 7.45504 14.9112 6.70999L14.3385 6.03146C14.0712 5.71479 13.9089 5.32292 13.8739 4.91L13.7991 4.02524C13.717 3.05374 12.9463 2.28305 11.9748 2.20089L11.09 2.12607C10.6771 2.09115 10.2852 1.92882 9.96853 1.66154L9.29001 1.08883ZM11.6368 6.63644C11.9883 6.28497 11.9883 5.71512 11.6368 5.36365C11.2854 5.01217 10.7155 5.01217 10.364 5.36365L7.00043 8.72725L5.63683 7.36365C5.28536 7.01217 4.71551 7.01217 4.36404 7.36365C4.01256 7.71512 4.01256 8.28497 4.36404 8.63644L6.36404 10.6364C6.71551 10.9879 7.28536 10.9879 7.63683 10.6364L11.6368 6.63644Z",
            }),
          })),
        (Icons.BadgeWarning = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              d: "M6.21118 2.57774L1.44725 12.1056C0.782345 13.4354 1.74934 15 3.2361 15H12.764C14.2507 15 15.2177 13.4354 14.5528 12.1056L9.78889 2.57774C9.05184 1.10364 6.94823 1.10364 6.21118 2.57774ZM8.85873 4.92206C8.72273 4.74606 8.52273 4.65806 8.25873 4.65806C7.97873 4.65806 7.75473 4.77006 7.58673 4.99406C7.41873 5.21806 7.34273 5.47006 7.35873 5.75006L7.55073 10.6941H8.35473L9.05073 5.75006C9.05873 5.71006 9.06273 5.64606 9.06273 5.55806C9.06273 5.31006 8.99473 5.09806 8.85873 4.92206ZM8.49873 11.8461C8.34673 11.6621 8.14673 11.5701 7.89873 11.5701C7.65873 11.5701 7.44673 11.6701 7.26273 11.8701C7.07873 12.0621 6.98673 12.2901 6.98673 12.5541C6.98673 12.8021 7.06273 13.0141 7.21473 13.1901C7.37473 13.3581 7.56673 13.4421 7.79073 13.4421C8.02273 13.4421 8.23073 13.3501 8.41473 13.1661C8.59873 12.9821 8.69873 12.7621 8.71473 12.5061C8.72273 12.2421 8.65073 12.0221 8.49873 11.8461Z",
            }),
          })),
        (Icons.BadgeError = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              d: "M7.99951 0L10.4548 2.07239L13.6564 2.34315L13.9271 5.5447L15.9995 8L13.9271 10.4553L13.6564 13.6569L10.4548 13.9276L7.99951 16L5.54422 13.9276L2.34266 13.6569L2.0719 10.4553L-0.000488281 8L2.0719 5.5447L2.34266 2.34315L5.54422 2.07239L7.99951 0ZM11.1364 4.86365C11.4879 5.21512 11.4879 5.78497 11.1364 6.13644L9.27279 8.00005L11.1364 9.86365C11.4879 10.2151 11.4879 10.785 11.1364 11.1364C10.7849 11.4879 10.2151 11.4879 9.8636 11.1364L8 9.27284L6.1364 11.1364C5.78492 11.4879 5.21508 11.4879 4.8636 11.1364C4.51213 10.785 4.51213 10.2151 4.8636 9.86365L6.72721 8.00005L4.8636 6.13644C4.51213 5.78497 4.51213 5.21512 4.8636 4.86365C5.21508 4.51218 5.78492 4.51218 6.1364 4.86365L8 6.72725L9.8636 4.86365C10.2151 4.51218 10.7849 4.51218 11.1364 4.86365Z",
            }),
          })),
        (Icons.Copy = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3 0C1.89543 0 1 0.895431 1 2V9C1 10.1046 1.89543 11 3 11H4V9.2H3.80005C3.24776 9.2 2.80005 8.75229 2.80005 8.2V2.8C2.80005 2.24772 3.24776 1.8 3.80005 1.8H8.20005C8.75233 1.8 9.20005 2.24772 9.20005 2.8V3H11V2C11 0.895431 10.1046 0 9 0H3ZM5 6C5 4.89543 5.89543 4 7 4H13C14.1046 4 15 4.89543 15 6V13C15 14.1046 14.1046 15 13 15H7C5.89543 15 5 14.1046 5 13V6ZM6.80005 6.8C6.80005 6.24772 7.24776 5.8 7.80005 5.8H12.2C12.7523 5.8 13.2 6.24771 13.2 6.8V12.2C13.2 12.7523 12.7523 13.2 12.2 13.2H7.80005C7.24776 13.2 6.80005 12.7523 6.80005 12.2V6.8Z",
            }),
          })),
        (Icons.Remove = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM5.17152 5.1714C5.56204 4.78087 6.19521 4.78087 6.58573 5.1714L7.99995 6.58561L9.41416 5.1714C9.80468 4.78087 10.4378 4.78087 10.8284 5.1714C11.2189 5.56192 11.2189 6.19509 10.8284 6.58561L9.41416 7.99983L10.8284 9.41404C11.2189 9.80456 11.2189 10.4377 10.8284 10.8283C10.4378 11.2188 9.80469 11.2188 9.41416 10.8283L7.99995 9.41404L6.58573 10.8283C6.19521 11.2188 5.56204 11.2188 5.17152 10.8283C4.781 10.4377 4.781 9.80456 5.17152 9.41404L6.58573 7.99983L5.17152 6.58561C4.781 6.19509 4.781 5.56192 5.17152 5.1714Z",
            }),
          })),
        (Icons.Filters = (h) =>
          (0, b.jsxs)("svg", {
            ...y,
            ...h,
            children: [
              (0, b.jsx)("path", {
                opacity: "0.6",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M2 4C1.44772 4 1 4.44772 1 5C1 5.55228 1.44772 6 2 6H14C14.5523 6 15 5.55228 15 5C15 4.44772 14.5523 4 14 4H2ZM2 10C1.44772 10 1 10.4477 1 11C1 11.5523 1.44772 12 2 12H14C14.5523 12 15 11.5523 15 11C15 10.4477 14.5523 10 14 10H2Z",
              }),
              (0, b.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.5 7.5C4.88071 7.5 6 6.38071 6 5C6 3.61929 4.88071 2.5 3.5 2.5C2.11929 2.5 1 3.61929 1 5C1 6.38071 2.11929 7.5 3.5 7.5ZM10.4998 13.5C11.8805 13.5 12.9998 12.3807 12.9998 11C12.9998 9.61929 11.8805 8.5 10.4998 8.5C9.11904 8.5 7.99976 9.61929 7.99976 11C7.99976 12.3807 9.11904 13.5 10.4998 13.5Z",
              }),
            ],
          })),
        (Icons.Gear = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.4478 2.68218C3.76713 2.40856 4.23043 2.41475 4.57432 2.65678L4.81927 2.82917C5.13243 3.04957 5.53841 3.06526 5.89207 2.91839V2.91839C6.24561 2.77158 6.52733 2.47148 6.5929 2.09433L6.64424 1.79907C6.71629 1.38465 7.03968 1.05264 7.45909 1.02059C7.63761 1.00695 7.81799 1 8 1C8.18211 1 8.3626 1.00695 8.54122 1.02061C8.96062 1.05268 9.28399 1.38468 9.35604 1.79909L9.4074 2.0945C9.47296 2.4716 9.75463 2.77166 10.1081 2.91848V2.91848C10.4617 3.06535 10.8677 3.04966 11.1808 2.82928L11.4258 2.65688C11.7697 2.41485 12.233 2.40867 12.5523 2.6823C12.8268 2.9175 13.0829 3.17358 13.3181 3.44809C13.5917 3.76742 13.5855 4.23069 13.3434 4.57457L13.1709 4.81977C12.9505 5.13283 12.9348 5.53868 13.0816 5.89223V5.89223C13.2284 6.24568 13.5284 6.52733 13.9055 6.59289L14.2009 6.64425C14.6154 6.7163 14.9474 7.03969 14.9794 7.45911C14.9931 7.63762 15 7.818 15 8C15 8.18217 14.993 8.36271 14.9794 8.54137C14.9473 8.96077 14.6153 9.28413 14.2009 9.35617L13.9052 9.40758C13.5282 9.47312 13.2283 9.75469 13.0815 10.108V10.108C12.9347 10.4616 12.9504 10.8674 13.1707 11.1804L13.3433 11.4256C13.5853 11.7695 13.5915 12.2328 13.3179 12.5521C13.0827 12.8267 12.8266 13.0828 12.552 13.318C12.2327 13.5916 11.7694 13.5854 11.4255 13.3433L11.1803 13.1707C10.8672 12.9504 10.4615 12.9347 10.108 13.0815V13.0815C9.75462 13.2283 9.47306 13.5282 9.40752 13.9052L9.35611 14.2009C9.28406 14.6153 8.9607 14.9473 8.5413 14.9794C8.36266 14.993 8.18214 15 8 15C7.81796 15 7.63755 14.9931 7.45901 14.9794C7.0396 14.9473 6.71621 14.6153 6.64416 14.2009L6.59278 13.9054C6.52723 13.5284 6.24561 13.2284 5.89221 13.0816V13.0816C5.5387 12.9348 5.13289 12.9505 4.81986 13.1708L4.57458 13.3435C4.23071 13.5855 3.76743 13.5917 3.4481 13.3181C3.17358 13.0829 2.91749 12.8268 2.68228 12.5523C2.40866 12.233 2.41484 11.7697 2.65687 11.4258L2.82932 11.1808C3.04968 10.8676 3.06537 10.4617 2.91851 10.1081V10.1081C2.77171 9.7547 2.47168 9.47306 2.09463 9.40751L1.7991 9.35613C1.3847 9.28408 1.0527 8.96071 1.02062 8.54132C1.00696 8.36267 1 8.18215 1 8C1 7.81802 1.00694 7.63765 1.02058 7.45916C1.05263 7.03974 1.38464 6.71635 1.79907 6.6443L2.09434 6.59296C2.47148 6.52739 2.77157 6.24567 2.91837 5.89214V5.89214C3.06523 5.53851 3.04953 5.13255 2.82914 4.81941L2.65671 4.5744C2.41469 4.23051 2.40849 3.76722 2.6821 3.44789C2.91727 3.17341 3.17332 2.91735 3.4478 2.68218ZM10.5 7.99998C10.5 9.38069 9.3807 10.5 7.99999 10.5C6.61928 10.5 5.49999 9.38069 5.49999 7.99998C5.49999 6.61926 6.61928 5.49998 7.99999 5.49998C9.3807 5.49998 10.5 6.61926 10.5 7.99998Z",
            }),
          })),
        (Icons.Chat = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            ...h,
            children: (0, b.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1.54251 2.98197C1 3.8392 1 4.8928 1 7C1 9.1072 1 10.1608 1.54251 11.018C1.78838 11.4065 2.15347 11.7836 2.53384 12.0419C2.77255 12.204 3.0345 12.3229 3.33899 12.4118C3.75 12.6484 3.75 13.32 3.75 13.9506C3.75 14.6237 3.75 15.25 4.25 15.25C4.72214 15.25 5.36146 14.6927 6.0364 14.1044C6.79102 13.4466 7.59017 12.75 8.25 12.75L8.25247 12.7475C8.50633 12.7432 8.85002 12.7337 9.24754 12.7209C11.5004 12.6481 12.6269 12.6118 13.4662 12.0419C13.8465 11.7836 14.2116 11.4065 14.4575 11.018C15 10.1608 15 9.1072 15 7C15 4.8928 15 3.8392 14.4575 2.98197C14.2116 2.59347 13.8465 2.2164 13.4662 1.95812C12.6269 1.38823 11.5004 1.35186 9.24754 1.27912C8.69604 1.26131 8.24813 1.25 8 1.25C7.75187 1.25 7.30396 1.26131 6.75246 1.27912C4.49956 1.35186 3.37311 1.38823 2.53384 1.95812C2.15347 2.2164 1.78838 2.59347 1.54251 2.98197ZM4 5.4C4 4.90294 4.40294 4.5 4.9 4.5H11.1C11.5971 4.5 12 4.90294 12 5.4C12 5.89706 11.5971 6.3 11.1 6.3H4.9C4.40294 6.3 4 5.89706 4 5.4ZM4.9 7.5C4.40294 7.5 4 7.90294 4 8.4C4 8.89706 4.40294 9.3 4.9 9.3H7.1C7.59706 9.3 8 8.89706 8 8.4C8 7.90294 7.59706 7.5 7.1 7.5H4.9Z",
            }),
          })),
        (Icons.Help = (h) =>
          (0, b.jsx)("svg", {
            ...y,
            style: { cursor: "help" },
            ...h,
            children: (0, b.jsx)("path", {
              d: "M8 1C4.13425 1 1 4.13425 1 8C1 11.8657 4.13425 15 8 15C11.8657 15 15 11.8657 15 8C15 4.13425 11.8657 1 8 1ZM8 12.375C7.517 12.375 7.125 11.983 7.125 11.5C7.125 11.017 7.517 10.625 8 10.625C8.483 10.625 8.875 11.017 8.875 11.5C8.875 11.983 8.483 12.375 8 12.375ZM9.20633 8.29167C8.82017 8.64808 8.58333 8.882 8.58333 9.16667H7.41667C7.41667 8.35642 7.97025 7.84542 8.41475 7.43417C8.88083 7.00367 9.16667 6.71608 9.16667 6.25C9.16667 5.60658 8.64342 5.08333 8 5.08333C7.35658 5.08333 6.83333 5.60658 6.83333 6.25H5.66667C5.66667 4.96317 6.71317 3.91667 8 3.91667C9.28683 3.91667 10.3333 4.96317 10.3333 6.25C10.3333 7.25042 9.70858 7.82733 9.20633 8.29167Z",
            }),
          }));
    },
    37519: function (h, g, _) {
      "use strict";
      _.d(g, {
        G: function () {
          return ec;
        },
        Z: function () {
          return SalesFormProvider;
        },
      });
      var b = _(85893),
        y = _(11544),
        A = _(67294),
        N = _(92520);
      function _assertThisInitialized(h) {
        if (void 0 === h)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return h;
      }
      function _setPrototypeOf(h, g) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (h, g) {
              return (h.__proto__ = g), h;
            })(h, g);
      }
      function getFrame(h) {
        var g = (h && h.ownerDocument) || document,
          _ = g.defaultView || g.parentWindow || window;
        return { document: g, window: _ };
      }
      function getMountElement(h) {
        return h || document.head;
      }
      var F = "hcaptcha-api-script-id",
        B = "hcaptchaOnLoad",
        H = [],
        mountCaptchaScript = function (h) {
          void 0 === h && (h = {});
          var g = getMountElement(h.scriptLocation);
          delete h.scriptLocation;
          var _ = getFrame(g),
            b = H.find(function (h) {
              return h.scope === _.window;
            });
          if (_.document.getElementById(F) && b) return b.promise;
          var y = new Promise(function (b, y) {
            _.window[B] = b;
            var A = h.apihost || "https://js.hcaptcha.com";
            delete h.apihost;
            var N = _.document.createElement("script");
            (N.id = F),
              (N.src = A + "/1/api.js?render=explicit&onload=" + B),
              (N.async = void 0 === h.loadAsync || h.loadAsync),
              delete h.loadAsync,
              (N.onerror = function (h) {
                return y("script-error");
              });
            var H = Object.entries(h)
              .filter(function (h) {
                h[0];
                var g = h[1];
                return g || !1 === g;
              })
              .map(function (h) {
                var g = h[0],
                  _ = h[1];
                return encodeURIComponent(g) + "=" + encodeURIComponent(_);
              })
              .join("&");
            (N.src += "" !== H ? "&" + H : ""), g.appendChild(N);
          });
          return H.push({ promise: y, scope: _.window }), y;
        },
        U = (function (h) {
          function HCaptcha(g) {
            var _;
            return (
              ((_ = h.call(this, g) || this)._hcaptcha = void 0),
              (_.renderCaptcha = _.renderCaptcha.bind(
                _assertThisInitialized(_),
              )),
              (_.resetCaptcha = _.resetCaptcha.bind(_assertThisInitialized(_))),
              (_.removeCaptcha = _.removeCaptcha.bind(
                _assertThisInitialized(_),
              )),
              (_.isReady = _.isReady.bind(_assertThisInitialized(_))),
              (_.loadCaptcha = _.loadCaptcha.bind(_assertThisInitialized(_))),
              (_.handleOnLoad = _.handleOnLoad.bind(_assertThisInitialized(_))),
              (_.handleSubmit = _.handleSubmit.bind(_assertThisInitialized(_))),
              (_.handleExpire = _.handleExpire.bind(_assertThisInitialized(_))),
              (_.handleError = _.handleError.bind(_assertThisInitialized(_))),
              (_.handleOpen = _.handleOpen.bind(_assertThisInitialized(_))),
              (_.handleClose = _.handleClose.bind(_assertThisInitialized(_))),
              (_.handleChallengeExpired = _.handleChallengeExpired.bind(
                _assertThisInitialized(_),
              )),
              (_.ref = A.createRef()),
              (_.apiScriptRequested = !1),
              (_.state = {
                isApiReady: !1,
                isRemoved: !1,
                elementId: g.id,
                captchaId: "",
              }),
              _
            );
          }
          (HCaptcha.prototype = Object.create(h.prototype)),
            (HCaptcha.prototype.constructor = HCaptcha),
            _setPrototypeOf(HCaptcha, h);
          var g = HCaptcha.prototype;
          return (
            (g.componentDidMount = function () {
              var h = this,
                g = getFrame(getMountElement(this.props.scriptLocation));
              if (
                ((this._hcaptcha = g.window.hcaptcha || void 0),
                void 0 !== this._hcaptcha)
              ) {
                this.setState({ isApiReady: !0 }, function () {
                  h.renderCaptcha();
                });
                return;
              }
              this.loadCaptcha();
            }),
            (g.componentWillUnmount = function () {
              var h = this.state.captchaId,
                g = this._hcaptcha;
              this.isReady() && (g.reset(h), g.remove(h));
            }),
            (g.shouldComponentUpdate = function (h, g) {
              return (
                this.state.isApiReady === g.isApiReady &&
                this.state.isRemoved === g.isRemoved
              );
            }),
            (g.componentDidUpdate = function (h) {
              var g = this;
              [
                "sitekey",
                "size",
                "theme",
                "tabindex",
                "languageOverride",
                "endpoint",
              ].every(function (_) {
                return h[_] === g.props[_];
              }) ||
                this.removeCaptcha(function () {
                  g.renderCaptcha();
                });
            }),
            (g.loadCaptcha = function () {
              if (!this.apiScriptRequested) {
                var h = this.props,
                  g = h.apihost,
                  _ = h.assethost,
                  b = h.endpoint,
                  y = h.host,
                  A = h.imghost;
                mountCaptchaScript({
                  apihost: g,
                  assethost: _,
                  endpoint: b,
                  hl: h.languageOverride,
                  host: y,
                  imghost: A,
                  recaptchacompat: !1 === h.reCaptchaCompat ? "off" : null,
                  reportapi: h.reportapi,
                  sentry: h.sentry,
                  custom: h.custom,
                  loadAsync: h.loadAsync,
                  scriptLocation: h.scriptLocation,
                })
                  .then(this.handleOnLoad)
                  .catch(this.handleError),
                  (this.apiScriptRequested = !0);
              }
            }),
            (g.renderCaptcha = function (h) {
              if (this.state.isApiReady) {
                var g = Object.assign(
                    {
                      "open-callback": this.handleOpen,
                      "close-callback": this.handleClose,
                      "error-callback": this.handleError,
                      "chalexpired-callback": this.handleChallengeExpired,
                      "expired-callback": this.handleExpire,
                      callback: this.handleSubmit,
                    },
                    this.props,
                    {
                      hl: this.props.hl || this.props.languageOverride,
                      languageOverride: void 0,
                    },
                  ),
                  _ = this._hcaptcha.render(this.ref.current, g);
                this.setState({ isRemoved: !1, captchaId: _ }, function () {
                  h && h();
                });
              }
            }),
            (g.resetCaptcha = function () {
              var h = this.state.captchaId,
                g = this._hcaptcha;
              this.isReady() && g.reset(h);
            }),
            (g.removeCaptcha = function (h) {
              var g = this.state.captchaId,
                _ = this._hcaptcha;
              this.isReady() &&
                this.setState({ isRemoved: !0 }, function () {
                  _.remove(g), h && h();
                });
            }),
            (g.handleOnLoad = function () {
              var h = this;
              this.setState({ isApiReady: !0 }, function () {
                var g = getFrame(getMountElement(h.props.scriptLocation));
                (h._hcaptcha = g.window.hcaptcha),
                  h.renderCaptcha(function () {
                    var g = h.props.onLoad;
                    g && g();
                  });
              });
            }),
            (g.handleSubmit = function (h) {
              var g = this.props.onVerify,
                _ = this.state,
                b = _.isRemoved,
                y = _.captchaId,
                A = this._hcaptcha;
              if (void 0 !== A && !b) {
                var N = A.getResponse(y),
                  F = A.getRespKey(y);
                g && g(N, F);
              }
            }),
            (g.handleExpire = function () {
              var h = this.props.onExpire,
                g = this.state.captchaId,
                _ = this._hcaptcha;
              this.isReady() && (_.reset(g), h && h());
            }),
            (g.handleError = function (h) {
              var g = this.props.onError,
                _ = this.state.captchaId,
                b = this._hcaptcha;
              this.isReady() && b.reset(_), g && g(h);
            }),
            (g.isReady = function () {
              var h = this.state,
                g = h.isApiReady,
                _ = h.isRemoved;
              return g && !_;
            }),
            (g.handleOpen = function () {
              this.isReady() && this.props.onOpen && this.props.onOpen();
            }),
            (g.handleClose = function () {
              this.isReady() && this.props.onClose && this.props.onClose();
            }),
            (g.handleChallengeExpired = function () {
              this.isReady() &&
                this.props.onChalExpired &&
                this.props.onChalExpired();
            }),
            (g.execute = function (h) {
              void 0 === h && (h = null);
              var g = this.state.captchaId,
                _ = this._hcaptcha;
              if (this.isReady())
                return h && "object" != typeof h && (h = null), _.execute(g, h);
            }),
            (g.setData = function (h) {
              var g = this.state.captchaId,
                _ = this._hcaptcha;
              this.isReady() &&
                (h && "object" != typeof h && (h = null), _.setData(g, h));
            }),
            (g.getResponse = function () {
              return this._hcaptcha.getResponse(this.state.captchaId);
            }),
            (g.getRespKey = function () {
              return this._hcaptcha.getRespKey(this.state.captchaId);
            }),
            (g.render = function () {
              var h = this.state.elementId;
              return A.createElement("div", { ref: this.ref, id: h });
            }),
            HCaptcha
          );
        })(A.Component),
        K = _(9669),
        q = _.n(K),
        Y = _(60777);
      let formatLabel = (h) => h.replace(/\s+/g, "-").toLowerCase();
      var X = _(61610),
        Q = _.n(X),
        et = _(94184),
        en = _.n(et);
      function Input(h) {
        let { autoFocus: g, label: _, className: y, error: A, ...N } = h;
        return (0, b.jsxs)("div", {
          className: en()(Q().container, y),
          "data-error": A,
          children: [
            _ && (0, b.jsx)("label", { htmlFor: formatLabel(_), children: _ }),
            (0, b.jsx)("input", {
              autoFocus: g,
              className: Q().input,
              name: _ && formatLabel(_),
              ...N,
            }),
          ],
        });
      }
      let helpers_formatLabel = (h) => h.replace(/\s+/g, "-").toLowerCase();
      var er = _(64788),
        ei = _.n(er);
      function TextInput(h) {
        let { autoFocus: g, label: _, className: y, error: A, ...N } = h;
        return (0, b.jsxs)("div", {
          className: en()(ei().container, y),
          "data-error": A,
          children: [
            _ &&
              (0, b.jsx)("label", {
                htmlFor: helpers_formatLabel(_),
                children: _,
              }),
            (0, b.jsx)("textarea", {
              autoFocus: g,
              className: ei().input,
              name: _ && helpers_formatLabel(_),
              ...N,
            }),
          ],
        });
      }
      let Select_helpers_formatLabel = (h) =>
        h.replace(/\s+/g, "-").toLowerCase();
      var eo = _(61773),
        ea = _.n(eo);
      function Select(h) {
        let { autoFocus: g, label: _, className: F, error: B, onChange: H } = h,
          [U, K] = (0, A.useState)(""),
          [q, Y] = (0, A.useState)(!1),
          [X, Q] = (0, A.useState)("");
        return (
          (0, A.useEffect)(() => {
            H(U + X);
          }, [U, X]),
          (0, b.jsxs)("div", {
            className: en()(ea().container, F),
            "data-error": B,
            children: [
              _ &&
                (0, b.jsx)("label", {
                  htmlFor: Select_helpers_formatLabel(_),
                  children: _,
                }),
              (0, b.jsxs)("div", {
                className: ea().inputContainer,
                children: [
                  (0, b.jsxs)("div", {
                    className: ea().selectWrapper,
                    children: [
                      (0, b.jsx)("button", {
                        className: ea().selected,
                        onClick: () => Y((h) => !h),
                        children:
                          U ||
                          (0, b.jsx)("span", {
                            className: ea().countryCodePlaceholder,
                            children: "+353",
                          }),
                      }),
                      (0, b.jsx)(y.M, {
                        children:
                          q &&
                          (0, b.jsx)(N.E.div, {
                            className: ea().dropdown,
                            initial: { opacity: 0, y: -4 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: -4 },
                            transition: { duration: 0.15 },
                            children: [
                              { value: "+93", text: "(+93) Afghanistan" },
                              { value: "+355", text: "(+355) Albania" },
                              { value: "+213", text: "(+213) Algeria" },
                              { value: "+1", text: "(+1) American Samoa" },
                              { value: "+376", text: "(+376) Andorra" },
                              { value: "+244", text: "(+244) Angola" },
                              { value: "+1", text: "(+1) Anguilla" },
                              { value: "+1", text: "(+1) Antigua and Barbuda" },
                              { value: "+54", text: "(+54) Argentina" },
                              { value: "+374", text: "(+374) Armenia" },
                              { value: "+297", text: "(+297) Aruba" },
                              { value: "+247", text: "(+247) Ascension" },
                              { value: "+61", text: "(+61) Australia" },
                              { value: "+43", text: "(+43) Austria" },
                              { value: "+994", text: "(+994) Azerbaijan" },
                              { value: "+1", text: "(+1) Bahamas" },
                              { value: "+973", text: "(+973) Bahrain" },
                              { value: "+880", text: "(+880) Bangladesh" },
                              { value: "+1", text: "(+1) Barbados" },
                              { value: "+375", text: "(+375) Belarus" },
                              { value: "+32", text: "(+32) Belgium" },
                              { value: "+501", text: "(+501) Belize" },
                              { value: "+229", text: "(+229) Benin" },
                              { value: "+1", text: "(+1) Bermuda" },
                              { value: "+975", text: "(+975) Bhutan" },
                              { value: "+591", text: "(+591) Bolivia" },
                              {
                                value: "+387",
                                text: "(+387) Bosnia and Herzegovina",
                              },
                              { value: "+267", text: "(+267) Botswana" },
                              { value: "+55", text: "(+55) Brazil" },
                              {
                                value: "+1",
                                text: "(+1) British Virgin Islands",
                              },
                              { value: "+673", text: "(+673) Brunei" },
                              { value: "+359", text: "(+359) Bulgaria" },
                              { value: "+226", text: "(+226) Burkina Faso" },
                              { value: "+257", text: "(+257) Burundi" },
                              { value: "+855", text: "(+855) Cambodia" },
                              { value: "+237", text: "(+237) Cameroon" },
                              { value: "+1", text: "(+1) Canada" },
                              { value: "+238", text: "(+238) Cape Verde" },
                              { value: "+1", text: "(+1) Cayman Islands" },
                              {
                                value: "+236",
                                text: "(+236) Central African Republic",
                              },
                              { value: "+235", text: "(+235) Chad" },
                              { value: "+56", text: "(+56) Chile" },
                              { value: "+86", text: "(+86) China" },
                              { value: "+57", text: "(+57) Colombia" },
                              { value: "+269", text: "(+269) Comoros" },
                              { value: "+242", text: "(+242) Congo" },
                              { value: "+682", text: "(+682) Cook Islands" },
                              { value: "+506", text: "(+506) Costa Rica" },
                              { value: "+385", text: "(+385) Croatia" },
                              { value: "+53", text: "(+53) Cuba" },
                              { value: "+357", text: "(+357) Cyprus" },
                              { value: "+420", text: "(+420) Czech Republic" },
                              {
                                value: "+243",
                                text: "(+243) Democratic Republic of Congo",
                              },
                              { value: "+45", text: "(+45) Denmark" },
                              { value: "+246", text: "(+246) Diego Garcia" },
                              { value: "+253", text: "(+253) Djibouti" },
                              { value: "+1", text: "(+1) Dominica" },
                              { value: "+1", text: "(+1) Dominican Republic" },
                              { value: "+670", text: "(+670) East Timor" },
                              { value: "+593", text: "(+593) Ecuador" },
                              { value: "+20", text: "(+20) Egypt" },
                              { value: "+503", text: "(+503) El Salvador" },
                              {
                                value: "+240",
                                text: "(+240) Equatorial Guinea",
                              },
                              { value: "+291", text: "(+291) Eritrea" },
                              { value: "+372", text: "(+372) Estonia" },
                              { value: "+251", text: "(+251) Ethiopia" },
                              {
                                value: "+500",
                                text: "(+500) Falkland (Malvinas) Islands",
                              },
                              { value: "+298", text: "(+298) Faroe Islands" },
                              { value: "+679", text: "(+679) Fiji" },
                              { value: "+358", text: "(+358) Finland" },
                              { value: "+33", text: "(+33) France" },
                              { value: "+594", text: "(+594) French Guiana" },
                              {
                                value: "+689",
                                text: "(+689) French Polynesia",
                              },
                              { value: "+241", text: "(+241) Gabon" },
                              { value: "+220", text: "(+220) Gambia" },
                              { value: "+995", text: "(+995) Georgia" },
                              { value: "+49", text: "(+49) Germany" },
                              { value: "+233", text: "(+233) Ghana" },
                              { value: "+350", text: "(+350) Gibraltar" },
                              { value: "+30", text: "(+30) Greece" },
                              { value: "+299", text: "(+299) Greenland" },
                              { value: "+1", text: "(+1) Grenada" },
                              { value: "+590", text: "(+590) Guadeloupe" },
                              { value: "+1", text: "(+1) Guam" },
                              { value: "+502", text: "(+502) Guatemala" },
                              { value: "+224", text: "(+224) Guinea" },
                              { value: "+245", text: "(+245) Guinea-Bissau" },
                              { value: "+592", text: "(+592) Guyana" },
                              { value: "+509", text: "(+509) Haiti" },
                              { value: "+504", text: "(+504) Honduras" },
                              { value: "+852", text: "(+852) Hong Kong" },
                              { value: "+36", text: "(+36) Hungary" },
                              { value: "+354", text: "(+354) Iceland" },
                              { value: "+91", text: "(+91) India" },
                              { value: "+62", text: "(+62) Indonesia" },
                              {
                                value: "+870",
                                text: "(+870) Inmarsat Satellite",
                              },
                              { value: "+98", text: "(+98) Iran" },
                              { value: "+964", text: "(+964) Iraq" },
                              { value: "+353", text: "(+353) Ireland" },
                              { value: "+972", text: "(+972) Israel" },
                              { value: "+39", text: "(+39) Italy" },
                              { value: "+225", text: "(+225) Ivory Coast" },
                              { value: "+1", text: "(+1) Jamaica" },
                              { value: "+81", text: "(+81) Japan" },
                              { value: "+962", text: "(+962) Jordan" },
                              { value: "+7", text: "(+7) Kazakhstan" },
                              { value: "+254", text: "(+254) Kenya" },
                              { value: "+686", text: "(+686) Kiribati" },
                              { value: "+965", text: "(+965) Kuwait" },
                              { value: "+996", text: "(+996) Kyrgyzstan" },
                              { value: "+856", text: "(+856) Laos" },
                              { value: "+371", text: "(+371) Latvia" },
                              { value: "+961", text: "(+961) Lebanon" },
                              { value: "+266", text: "(+266) Lesotho" },
                              { value: "+231", text: "(+231) Liberia" },
                              { value: "+218", text: "(+218) Libya" },
                              { value: "+423", text: "(+423) Liechtenstein" },
                              { value: "+370", text: "(+370) Lithuania" },
                              { value: "+352", text: "(+352) Luxembourg" },
                              { value: "+853", text: "(+853) Macau" },
                              { value: "+389", text: "(+389) Macedonia" },
                              { value: "+261", text: "(+261) Madagascar" },
                              { value: "+265", text: "(+265) Malawi" },
                              { value: "+60", text: "(+60) Malaysia" },
                              { value: "+960", text: "(+960) Maldives" },
                              { value: "+223", text: "(+223) Mali" },
                              { value: "+356", text: "(+356) Malta" },
                              {
                                value: "+692",
                                text: "(+692) Marshall Islands",
                              },
                              { value: "+596", text: "(+596) Martinique" },
                              { value: "+222", text: "(+222) Mauritania" },
                              { value: "+230", text: "(+230) Mauritius" },
                              { value: "+262", text: "(+262) Mayotte" },
                              { value: "+52", text: "(+52) Mexico" },
                              { value: "+691", text: "(+691) Micronesia" },
                              { value: "+373", text: "(+373) Moldova" },
                              { value: "+377", text: "(+377) Monaco" },
                              { value: "+976", text: "(+976) Mongolia" },
                              { value: "+382", text: "(+382) Montenegro" },
                              { value: "+1", text: "(+1) Montserrat" },
                              { value: "+212", text: "(+212) Morocco" },
                              { value: "+258", text: "(+258) Mozambique" },
                              { value: "+95", text: "(+95) Myanmar" },
                              { value: "+264", text: "(+264) Namibia" },
                              { value: "+674", text: "(+674) Nauru" },
                              { value: "+977", text: "(+977) Nepal" },
                              { value: "+31", text: "(+31) Netherlands" },
                              {
                                value: "+599",
                                text: "(+599) Netherlands Antilles",
                              },
                              { value: "+687", text: "(+687) New Caledonia" },
                              { value: "+64", text: "(+64) New Zealand" },
                              { value: "+505", text: "(+505) Nicaragua" },
                              { value: "+227", text: "(+227) Niger" },
                              { value: "+234", text: "(+234) Nigeria" },
                              { value: "+683", text: "(+683) Niue Island" },
                              { value: "+850", text: "(+850) North Korea" },
                              { value: "+1", text: "(+1) Northern Marianas" },
                              { value: "+47", text: "(+47) Norway" },
                              { value: "+968", text: "(+968) Oman" },
                              { value: "+92", text: "(+92) Pakistan" },
                              { value: "+680", text: "(+680) Palau" },
                              { value: "+507", text: "(+507) Panama" },
                              {
                                value: "+675",
                                text: "(+675) Papua New Guinea",
                              },
                              { value: "+595", text: "(+595) Paraguay" },
                              { value: "+51", text: "(+51) Peru" },
                              { value: "+63", text: "(+63) Philippines" },
                              { value: "+48", text: "(+48) Poland" },
                              { value: "+351", text: "(+351) Portugal" },
                              { value: "+1", text: "(+1) Puerto Rico" },
                              { value: "+974", text: "(+974) Qatar" },
                              { value: "+262", text: "(+262) Reunion" },
                              { value: "+40", text: "(+40) Romania" },
                              { value: "+7", text: "(+7) Russian Federation" },
                              { value: "+250", text: "(+250) Rwanda" },
                              { value: "+290", text: "(+290) Saint Helena" },
                              {
                                value: "+1",
                                text: "(+1) Saint Kitts and Nevis",
                              },
                              { value: "+1", text: "(+1) Saint Lucia" },
                              {
                                value: "+508",
                                text: "(+508) Saint Pierre and Miquelon",
                              },
                              {
                                value: "+1",
                                text: "(+1) Saint Vincent and the Grenadines",
                              },
                              { value: "+685", text: "(+685) Samoa" },
                              { value: "+378", text: "(+378) San Marino" },
                              {
                                value: "+239",
                                text: "(+239) Sao Tome and Principe",
                              },
                              { value: "+966", text: "(+966) Saudi Arabia" },
                              { value: "+221", text: "(+221) Senegal" },
                              { value: "+381", text: "(+381) Serbia" },
                              { value: "+248", text: "(+248) Seychelles" },
                              { value: "+232", text: "(+232) Sierra Leone" },
                              { value: "+65", text: "(+65) Singapore" },
                              { value: "+421", text: "(+421) Slovakia" },
                              { value: "+386", text: "(+386) Slovenia" },
                              { value: "+677", text: "(+677) Solomon Islands" },
                              { value: "+252", text: "(+252) Somalia" },
                              { value: "+27", text: "(+27) South Africa" },
                              { value: "+82", text: "(+82) South Korea" },
                              { value: "+34", text: "(+34) Spain" },
                              { value: "+94", text: "(+94) Sri Lanka" },
                              { value: "+249", text: "(+249) Sudan" },
                              { value: "+597", text: "(+597) Suriname" },
                              { value: "+268", text: "(+268) Swaziland" },
                              { value: "+46", text: "(+46) Sweden" },
                              { value: "+41", text: "(+41) Switzerland" },
                              { value: "+963", text: "(+963) Syria" },
                              { value: "+886", text: "(+886) Taiwan" },
                              { value: "+992", text: "(+992) Tajikistan" },
                              { value: "+255", text: "(+255) Tanzania" },
                              { value: "+66", text: "(+66) Thailand" },
                              { value: "+228", text: "(+228) Togo" },
                              { value: "+690", text: "(+690) Tokelau" },
                              { value: "+1", text: "(+1) Trinidad and Tobago" },
                              { value: "+216", text: "(+216) Tunisia" },
                              { value: "+90", text: "(+90) Turkey" },
                              { value: "+993", text: "(+993) Turkmenistan" },
                              {
                                value: "+1",
                                text: "(+1) Turks and Caicos Islands",
                              },
                              { value: "+688", text: "(+688) Tuvalu" },
                              { value: "+256", text: "(+256) Uganda" },
                              { value: "+380", text: "(+380) Ukraine" },
                              {
                                value: "+971",
                                text: "(+971) United Arab Emirates",
                              },
                              { value: "+44", text: "(+44) United Kingdom" },
                              {
                                value: "+1",
                                text: "(+1) United States of America",
                              },
                              { value: "+1", text: "(+1) US Virgin Islands" },
                              { value: "+598", text: "(+598) Uruguay" },
                              { value: "+998", text: "(+998) Uzbekistan" },
                              { value: "+678", text: "(+678) Vanuatu" },
                              { value: "+379", text: "(+379) Vatican City" },
                              { value: "+58", text: "(+58) Venezuela" },
                              { value: "+84", text: "(+84) Vietnam" },
                              {
                                value: "+681",
                                text: "(+681) Wallis and Futuna",
                              },
                              { value: "+967", text: "(+967) Yemen" },
                              { value: "+260", text: "(+260) Zambia" },
                              { value: "+263", text: "(+263) Zimbabwe" },
                            ].map((h, g) =>
                              (0, b.jsx)(
                                "div",
                                {
                                  className: ea().option,
                                  onClick: () => {
                                    K(h.value), Y(!1);
                                  },
                                  children: h.text,
                                },
                                "option-".concat(g),
                              ),
                            ),
                          }),
                      }),
                    ],
                  }),
                  (0, b.jsx)("input", {
                    autoFocus: g,
                    className: ea().input,
                    onChange: (h) => Q(h.target.value),
                    placeholder: "1234 1234",
                  }),
                ],
              }),
            ],
          })
        );
      }
      var es = _(97208),
        el = _.n(es);
      let validateEmail = (h) =>
        String(h)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          );
      var eu = _(60412);
      function SalesForm(h) {
        let { context: g, title: _ = "API docs" } = h,
          F = (0, A.useRef)(),
          [B, H] = (0, A.useState)(""),
          [K, X] = (0, A.useState)(""),
          [Q, et] = (0, A.useState)(""),
          [en, er] = (0, A.useState)(""),
          [ei, eo] = (0, A.useState)(""),
          [ea, es] = (0, A.useState)(!1),
          [ed, ef] = (0, A.useState)(!1),
          [ep, eh] = (0, A.useState)(!1),
          { closeSalesForm: em } = (0, A.useContext)(ec),
          eg = (0, A.useCallback)((h) => {
            27 === h.keyCode && em(), 13 === h.keyCode && submitForm();
          }, []);
        (0, A.useEffect)(
          () => (
            document.body.classList.add("overflow-hidden"),
            document.addEventListener("keydown", eg),
            () => {
              document.body.classList.remove("overflow-hidden"),
                document.removeEventListener("keydown", eg);
            }
          ),
        );
        let handleFailedVerification = () => {
            ef(!1), es(!0);
          },
          submitForm = async (h) => {
            try {
              await q().post("/api/salesForm", {
                firstName: B,
                lastName: K,
                email: Q,
                phone: en,
                textField: ei,
                context: g,
                token: h,
              }),
                (0, eu.j)("AW-561480865/DfNVCPThoIIYEKGJ3osC"),
                eh(!0);
            } catch (h) {
              console.log(h);
            } finally {
              ef(!1);
            }
          };
        return (0, b.jsxs)("div", {
          className: el().container,
          children: [
            (0, b.jsx)(U, {
              ref: F,
              size: "invisible",
              onVerify: submitForm,
              onError: handleFailedVerification,
              onExpired: handleFailedVerification,
              sitekey: "4abf2368-5b5a-4f22-88cd-24cade89ae2a",
            }),
            (0, b.jsx)(N.E.div, {
              className: el().overlay,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.35, ease: "easeOut" },
              onClick: em,
            }),
            (0, b.jsxs)(N.E.div, {
              className: el().panel,
              initial: { x: "100%" },
              animate: { x: 0 },
              exit: { x: "100%" },
              transition: { duration: 0.35, ease: "easeOut" },
              children: [
                (0, b.jsx)("button", {
                  className: el().closeButton,
                  onClick: em,
                  children: (0, b.jsx)("img", { src: "/images/close.svg" }),
                }),
                (0, b.jsx)("h3", { className: "mb-12", children: _ }),
                (0, b.jsx)("p", {
                  className: "mb-24",
                  children:
                    "One of our security experts will get in touch as soon as possible.",
                }),
                (0, b.jsx)(Input, {
                  placeholder: "Claude",
                  value: B,
                  label: "First name *",
                  className: "mb-20",
                  onChange: (h) => H(h.target.value),
                  autoFocus: !0,
                  error: ea && !B,
                }),
                (0, b.jsx)(Input, {
                  placeholder: "Shannon",
                  value: K,
                  label: "Last name *",
                  className: "mb-20",
                  onChange: (h) => X(h.target.value),
                  error: ea && !K,
                }),
                (0, b.jsx)(Input, {
                  placeholder: "claude@shannon.com",
                  value: Q,
                  label: "Work Email *",
                  className: "mb-20",
                  onChange: (h) => et(h.target.value),
                  error: ea && (!Q || !validateEmail(Q)),
                }),
                (0, b.jsx)(Select, {
                  placeholder: "(444) 4444",
                  label: "Phone",
                  className: "mb-20",
                  onChange: er,
                }),
                (0, b.jsx)(TextInput, {
                  placeholder: "Let us know how we can help ",
                  value: ei,
                  label: "Message",
                  className: "mb-32",
                  onChange: (h) => eo(h.target.value),
                }),
                (0, b.jsx)(Y.Z, {
                  onClick: () => {
                    if ((ef(!0), !B || !K || !Q || !validateEmail(Q)))
                      return es(!0);
                    F.current.execute();
                  },
                  type: "secondary",
                  size: "large",
                  as: "button",
                  disabled: ed,
                  children: "Send message",
                }),
                ep &&
                  (0, b.jsx)(y.M, {
                    children: (0, b.jsxs)(N.E.div, {
                      className: el().isFinishedOverlay,
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.3 },
                      children: [
                        (0, b.jsx)("h3", {
                          className: "mb-12",
                          children: "Your request has been sent",
                        }),
                        (0, b.jsx)("p", {
                          className: "mb-12",
                          children:
                            "A member of the team will be in touch shortly.",
                        }),
                        (0, b.jsx)(Y.Z, {
                          onClick: em,
                          type: "secondary",
                          size: "large",
                          children: "Go back",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      let ec = (0, A.createContext)();
      function SalesFormProvider(h) {
        let { children: g } = h,
          [_, N] = (0, A.useState)(void 0);
        return (0, b.jsxs)(ec.Provider, {
          value: {
            activeConfig: _,
            openSalesForm: (h) => N(h),
            closeSalesForm: () => N(void 0),
          },
          children: [
            g,
            (0, b.jsx)(y.M, { children: _ && (0, b.jsx)(SalesForm, { ..._ }) }),
          ],
        });
      }
    },
    97498: function (h, g) {
      "use strict";
      var _, b;
      Object.defineProperty(g, "__esModule", { value: !0 }),
        (function (h, g) {
          for (var _ in g)
            Object.defineProperty(h, _, { enumerable: !0, get: g[_] });
        })(g, {
          PrefetchKind: function () {
            return _;
          },
          ACTION_REFRESH: function () {
            return y;
          },
          ACTION_NAVIGATE: function () {
            return A;
          },
          ACTION_RESTORE: function () {
            return N;
          },
          ACTION_SERVER_PATCH: function () {
            return F;
          },
          ACTION_PREFETCH: function () {
            return B;
          },
          ACTION_FAST_REFRESH: function () {
            return H;
          },
          ACTION_SERVER_ACTION: function () {
            return U;
          },
        });
      let y = "refresh",
        A = "navigate",
        N = "restore",
        F = "server-patch",
        B = "prefetch",
        H = "fast-refresh",
        U = "server-action";
      ((b = _ || (_ = {})).AUTO = "auto"),
        (b.FULL = "full"),
        (b.TEMPORARY = "temporary"),
        ("function" == typeof g.default ||
          ("object" == typeof g.default && null !== g.default)) &&
          void 0 === g.default.__esModule &&
          (Object.defineProperty(g.default, "__esModule", { value: !0 }),
          Object.assign(g.default, g),
          (h.exports = g.default));
    },
    10030: function (h, g, _) {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: !0 }),
        Object.defineProperty(g, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return getDomainLocale;
          },
        });
      let b = _(22866);
      function getDomainLocale(h, g, y, A) {
        {
          let N = _(33530).normalizeLocalePath,
            F = _(16728).detectDomainLocale,
            B = g || N(h, y).detectedLocale,
            H = F(A, void 0, B);
          if (H) {
            let g = "http" + (H.http ? "" : "s") + "://",
              _ = B === H.defaultLocale ? "" : "/" + B;
            return (
              "" + g + H.domain + (0, b.normalizePathTrailingSlash)("" + _ + h)
            );
          }
          return !1;
        }
      }
      ("function" == typeof g.default ||
        ("object" == typeof g.default && null !== g.default)) &&
        void 0 === g.default.__esModule &&
        (Object.defineProperty(g.default, "__esModule", { value: !0 }),
        Object.assign(g.default, g),
        (h.exports = g.default));
    },
    65170: function (h, g, _) {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: !0 }),
        Object.defineProperty(g, "default", {
          enumerable: !0,
          get: function () {
            return er;
          },
        });
      let b = _(38754),
        y = b._(_(67294)),
        A = _(74450),
        N = _(92227),
        F = _(64364),
        B = _(10109),
        H = _(73607),
        U = _(11823),
        K = _(89031),
        q = _(40920),
        Y = _(10030),
        X = _(77192),
        Q = _(97498),
        et = new Set();
      function prefetch(h, g, _, b, y, A) {
        if (!A && !(0, N.isLocalURL)(g)) return;
        if (!b.bypassPrefetchedCheck) {
          let y =
              void 0 !== b.locale
                ? b.locale
                : "locale" in h
                  ? h.locale
                  : void 0,
            A = g + "%" + _ + "%" + y;
          if (et.has(A)) return;
          et.add(A);
        }
        let F = A ? h.prefetch(g, y) : h.prefetch(g, _, b);
        Promise.resolve(F).catch((h) => {});
      }
      function formatStringOrUrl(h) {
        return "string" == typeof h ? h : (0, F.formatUrl)(h);
      }
      let en = y.default.forwardRef(function (h, g) {
          let _, b;
          let {
            href: F,
            as: et,
            children: en,
            prefetch: er = null,
            passHref: ei,
            replace: eo,
            shallow: ea,
            scroll: es,
            locale: el,
            onClick: eu,
            onMouseEnter: ec,
            onTouchStart: ed,
            legacyBehavior: ef = !1,
            ...ep
          } = h;
          (_ = en),
            ef &&
              ("string" == typeof _ || "number" == typeof _) &&
              (_ = y.default.createElement("a", null, _));
          let eh = y.default.useContext(U.RouterContext),
            em = y.default.useContext(K.AppRouterContext),
            eg = null != eh ? eh : em,
            ev = !eh,
            e_ = !1 !== er,
            eb = null === er ? Q.PrefetchKind.AUTO : Q.PrefetchKind.FULL,
            { href: ey, as: ex } = y.default.useMemo(() => {
              if (!eh) {
                let h = formatStringOrUrl(F);
                return { href: h, as: et ? formatStringOrUrl(et) : h };
              }
              let [h, g] = (0, A.resolveHref)(eh, F, !0);
              return { href: h, as: et ? (0, A.resolveHref)(eh, et) : g || h };
            }, [eh, F, et]),
            ew = y.default.useRef(ey),
            eC = y.default.useRef(ex);
          ef && (b = y.default.Children.only(_));
          let eS = ef ? b && "object" == typeof b && b.ref : g,
            [eE, eP, eT] = (0, q.useIntersection)({ rootMargin: "200px" }),
            ej = y.default.useCallback(
              (h) => {
                (eC.current !== ex || ew.current !== ey) &&
                  (eT(), (eC.current = ex), (ew.current = ey)),
                  eE(h),
                  eS &&
                    ("function" == typeof eS
                      ? eS(h)
                      : "object" == typeof eS && (eS.current = h));
              },
              [ex, eS, ey, eT, eE],
            );
          y.default.useEffect(() => {
            eg &&
              eP &&
              e_ &&
              prefetch(eg, ey, ex, { locale: el }, { kind: eb }, ev);
          }, [ex, ey, eP, el, e_, null == eh ? void 0 : eh.locale, eg, ev, eb]);
          let ek = {
            ref: ej,
            onClick(h) {
              ef || "function" != typeof eu || eu(h),
                ef &&
                  b.props &&
                  "function" == typeof b.props.onClick &&
                  b.props.onClick(h),
                eg &&
                  !h.defaultPrevented &&
                  (function (h, g, _, b, A, F, B, H, U, K) {
                    let { nodeName: q } = h.currentTarget,
                      Y = "A" === q.toUpperCase();
                    if (
                      Y &&
                      ((function (h) {
                        let g = h.currentTarget,
                          _ = g.getAttribute("target");
                        return (
                          (_ && "_self" !== _) ||
                          h.metaKey ||
                          h.ctrlKey ||
                          h.shiftKey ||
                          h.altKey ||
                          (h.nativeEvent && 2 === h.nativeEvent.which)
                        );
                      })(h) ||
                        (!U && !(0, N.isLocalURL)(_)))
                    )
                      return;
                    h.preventDefault();
                    let navigate = () => {
                      let h = null == B || B;
                      "beforePopState" in g
                        ? g[A ? "replace" : "push"](_, b, {
                            shallow: F,
                            locale: H,
                            scroll: h,
                          })
                        : g[A ? "replace" : "push"](b || _, {
                            forceOptimisticNavigation: !K,
                            scroll: h,
                          });
                    };
                    U ? y.default.startTransition(navigate) : navigate();
                  })(h, eg, ey, ex, eo, ea, es, el, ev, e_);
            },
            onMouseEnter(h) {
              ef || "function" != typeof ec || ec(h),
                ef &&
                  b.props &&
                  "function" == typeof b.props.onMouseEnter &&
                  b.props.onMouseEnter(h),
                eg &&
                  (e_ || !ev) &&
                  prefetch(
                    eg,
                    ey,
                    ex,
                    { locale: el, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: eb },
                    ev,
                  );
            },
            onTouchStart(h) {
              ef || "function" != typeof ed || ed(h),
                ef &&
                  b.props &&
                  "function" == typeof b.props.onTouchStart &&
                  b.props.onTouchStart(h),
                eg &&
                  (e_ || !ev) &&
                  prefetch(
                    eg,
                    ey,
                    ex,
                    { locale: el, priority: !0, bypassPrefetchedCheck: !0 },
                    { kind: eb },
                    ev,
                  );
            },
          };
          if ((0, B.isAbsoluteUrl)(ex)) ek.href = ex;
          else if (!ef || ei || ("a" === b.type && !("href" in b.props))) {
            let h = void 0 !== el ? el : null == eh ? void 0 : eh.locale,
              g =
                (null == eh ? void 0 : eh.isLocaleDomain) &&
                (0, Y.getDomainLocale)(
                  ex,
                  h,
                  null == eh ? void 0 : eh.locales,
                  null == eh ? void 0 : eh.domainLocales,
                );
            ek.href =
              g ||
              (0, X.addBasePath)(
                (0, H.addLocale)(ex, h, null == eh ? void 0 : eh.defaultLocale),
              );
          }
          return ef
            ? y.default.cloneElement(b, ek)
            : y.default.createElement("a", { ...ep, ...ek }, _);
        }),
        er = en;
      ("function" == typeof g.default ||
        ("object" == typeof g.default && null !== g.default)) &&
        void 0 === g.default.__esModule &&
        (Object.defineProperty(g.default, "__esModule", { value: !0 }),
        Object.assign(g.default, g),
        (h.exports = g.default));
    },
    33530: function (h, g, _) {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: !0 }),
        Object.defineProperty(g, "normalizeLocalePath", {
          enumerable: !0,
          get: function () {
            return normalizeLocalePath;
          },
        });
      let normalizeLocalePath = (h, g) => _(11774).normalizeLocalePath(h, g);
      ("function" == typeof g.default ||
        ("object" == typeof g.default && null !== g.default)) &&
        void 0 === g.default.__esModule &&
        (Object.defineProperty(g.default, "__esModule", { value: !0 }),
        Object.assign(g.default, g),
        (h.exports = g.default));
    },
    40920: function (h, g, _) {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: !0 }),
        Object.defineProperty(g, "useIntersection", {
          enumerable: !0,
          get: function () {
            return useIntersection;
          },
        });
      let b = _(67294),
        y = _(63436),
        A = "function" == typeof IntersectionObserver,
        N = new Map(),
        F = [];
      function useIntersection(h) {
        let { rootRef: g, rootMargin: _, disabled: B } = h,
          H = B || !A,
          [U, K] = (0, b.useState)(!1),
          q = (0, b.useRef)(null),
          Y = (0, b.useCallback)((h) => {
            q.current = h;
          }, []);
        (0, b.useEffect)(() => {
          if (A) {
            if (H || U) return;
            let h = q.current;
            if (h && h.tagName) {
              let b = (function (h, g, _) {
                let {
                  id: b,
                  observer: y,
                  elements: A,
                } = (function (h) {
                  let g;
                  let _ = { root: h.root || null, margin: h.rootMargin || "" },
                    b = F.find(
                      (h) => h.root === _.root && h.margin === _.margin,
                    );
                  if (b && (g = N.get(b))) return g;
                  let y = new Map(),
                    A = new IntersectionObserver((h) => {
                      h.forEach((h) => {
                        let g = y.get(h.target),
                          _ = h.isIntersecting || h.intersectionRatio > 0;
                        g && _ && g(_);
                      });
                    }, h);
                  return (
                    (g = { id: _, observer: A, elements: y }),
                    F.push(_),
                    N.set(_, g),
                    g
                  );
                })(_);
                return (
                  A.set(h, g),
                  y.observe(h),
                  function () {
                    if ((A.delete(h), y.unobserve(h), 0 === A.size)) {
                      y.disconnect(), N.delete(b);
                      let h = F.findIndex(
                        (h) => h.root === b.root && h.margin === b.margin,
                      );
                      h > -1 && F.splice(h, 1);
                    }
                  }
                );
              })(h, (h) => h && K(h), {
                root: null == g ? void 0 : g.current,
                rootMargin: _,
              });
              return b;
            }
          } else if (!U) {
            let h = (0, y.requestIdleCallback)(() => K(!0));
            return () => (0, y.cancelIdleCallback)(h);
          }
        }, [H, _, g, U, q.current]);
        let X = (0, b.useCallback)(() => {
          K(!1);
        }, []);
        return [Y, U, X];
      }
      ("function" == typeof g.default ||
        ("object" == typeof g.default && null !== g.default)) &&
        void 0 === g.default.__esModule &&
        (Object.defineProperty(g.default, "__esModule", { value: !0 }),
        Object.assign(g.default, g),
        (h.exports = g.default));
    },
    1342: function (h, g, _) {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: !0 }),
        (function (h, g) {
          for (var _ in g)
            Object.defineProperty(h, _, { enumerable: !0, get: g[_] });
        })(g, {
          noSSR: function () {
            return noSSR;
          },
          default: function () {
            return dynamic;
          },
        });
      let b = _(38754),
        y = (_(67294), b._(_(24304)));
      function convertModule(h) {
        return { default: (null == h ? void 0 : h.default) || h };
      }
      function noSSR(h, g) {
        return delete g.webpack, delete g.modules, h(g);
      }
      function dynamic(h, g) {
        let _ = y.default,
          b = {
            loading: (h) => {
              let { error: g, isLoading: _, pastDelay: b } = h;
              return null;
            },
          };
        h instanceof Promise
          ? (b.loader = () => h)
          : "function" == typeof h
            ? (b.loader = h)
            : "object" == typeof h && (b = { ...b, ...h }),
          (b = { ...b, ...g });
        let A = b.loader;
        return (b.loadableGenerated &&
          ((b = { ...b, ...b.loadableGenerated }), delete b.loadableGenerated),
        "boolean" != typeof b.ssr || b.ssr)
          ? _({
              ...b,
              loader: () =>
                null != A
                  ? A().then(convertModule)
                  : Promise.resolve(convertModule(() => null)),
            })
          : (delete b.webpack, delete b.modules, noSSR(_, b));
      }
      ("function" == typeof g.default ||
        ("object" == typeof g.default && null !== g.default)) &&
        void 0 === g.default.__esModule &&
        (Object.defineProperty(g.default, "__esModule", { value: !0 }),
        Object.assign(g.default, g),
        (h.exports = g.default));
    },
    30043: function (h, g, _) {
      "use strict";
      Object.defineProperty(g, "__esModule", { value: !0 }),
        Object.defineProperty(g, "LoadableContext", {
          enumerable: !0,
          get: function () {
            return A;
          },
        });
      let b = _(38754),
        y = b._(_(67294)),
        A = y.default.createContext(null);
    },
    24304: function (h, g, _) {
      "use strict";
      /**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/ Object.defineProperty(g, "__esModule", { value: !0 }),
        Object.defineProperty(g, "default", {
          enumerable: !0,
          get: function () {
            return H;
          },
        });
      let b = _(38754),
        y = b._(_(67294)),
        A = _(30043),
        N = [],
        F = [],
        B = !1;
      function load(h) {
        let g = h(),
          _ = { loading: !0, loaded: null, error: null };
        return (
          (_.promise = g
            .then((h) => ((_.loading = !1), (_.loaded = h), h))
            .catch((h) => {
              throw ((_.loading = !1), (_.error = h), h);
            })),
          _
        );
      }
      let LoadableSubscription = class LoadableSubscription {
        promise() {
          return this._res.promise;
        }
        retry() {
          this._clearTimeouts(),
            (this._res = this._loadFn(this._opts.loader)),
            (this._state = { pastDelay: !1, timedOut: !1 });
          let { _res: h, _opts: g } = this;
          h.loading &&
            ("number" == typeof g.delay &&
              (0 === g.delay
                ? (this._state.pastDelay = !0)
                : (this._delay = setTimeout(() => {
                    this._update({ pastDelay: !0 });
                  }, g.delay))),
            "number" == typeof g.timeout &&
              (this._timeout = setTimeout(() => {
                this._update({ timedOut: !0 });
              }, g.timeout))),
            this._res.promise
              .then(() => {
                this._update({}), this._clearTimeouts();
              })
              .catch((h) => {
                this._update({}), this._clearTimeouts();
              }),
            this._update({});
        }
        _update(h) {
          (this._state = {
            ...this._state,
            error: this._res.error,
            loaded: this._res.loaded,
            loading: this._res.loading,
            ...h,
          }),
            this._callbacks.forEach((h) => h());
        }
        _clearTimeouts() {
          clearTimeout(this._delay), clearTimeout(this._timeout);
        }
        getCurrentValue() {
          return this._state;
        }
        subscribe(h) {
          return (
            this._callbacks.add(h),
            () => {
              this._callbacks.delete(h);
            }
          );
        }
        constructor(h, g) {
          (this._loadFn = h),
            (this._opts = g),
            (this._callbacks = new Set()),
            (this._delay = null),
            (this._timeout = null),
            this.retry();
        }
      };
      function Loadable(h) {
        return (function (h, g) {
          let _ = Object.assign(
              {
                loader: null,
                loading: null,
                delay: 200,
                timeout: null,
                webpack: null,
                modules: null,
              },
              g,
            ),
            b = null;
          function init() {
            if (!b) {
              let g = new LoadableSubscription(h, _);
              b = {
                getCurrentValue: g.getCurrentValue.bind(g),
                subscribe: g.subscribe.bind(g),
                retry: g.retry.bind(g),
                promise: g.promise.bind(g),
              };
            }
            return b.promise();
          }
          if (!B) {
            let h = _.webpack ? _.webpack() : _.modules;
            h &&
              F.push((g) => {
                for (let _ of h) if (g.includes(_)) return init();
              });
          }
          function LoadableComponent(h, g) {
            !(function () {
              init();
              let h = y.default.useContext(A.LoadableContext);
              h &&
                Array.isArray(_.modules) &&
                _.modules.forEach((g) => {
                  h(g);
                });
            })();
            let N = y.default.useSyncExternalStore(
              b.subscribe,
              b.getCurrentValue,
              b.getCurrentValue,
            );
            return (
              y.default.useImperativeHandle(g, () => ({ retry: b.retry }), []),
              y.default.useMemo(() => {
                var g;
                return N.loading || N.error
                  ? y.default.createElement(_.loading, {
                      isLoading: N.loading,
                      pastDelay: N.pastDelay,
                      timedOut: N.timedOut,
                      error: N.error,
                      retry: b.retry,
                    })
                  : N.loaded
                    ? y.default.createElement(
                        (g = N.loaded) && g.default ? g.default : g,
                        h,
                      )
                    : null;
              }, [h, N])
            );
          }
          return (
            (LoadableComponent.preload = () => init()),
            (LoadableComponent.displayName = "LoadableComponent"),
            y.default.forwardRef(LoadableComponent)
          );
        })(load, h);
      }
      function flushInitializers(h, g) {
        let _ = [];
        for (; h.length; ) {
          let b = h.pop();
          _.push(b(g));
        }
        return Promise.all(_).then(() => {
          if (h.length) return flushInitializers(h, g);
        });
      }
      (Loadable.preloadAll = () =>
        new Promise((h, g) => {
          flushInitializers(N).then(h, g);
        })),
        (Loadable.preloadReady = (h) => (
          void 0 === h && (h = []),
          new Promise((g) => {
            let res = () => ((B = !0), g());
            flushInitializers(F, h).then(res, res);
          })
        )),
        (window.__NEXT_PRELOADREADY = Loadable.preloadReady);
      let H = Loadable;
    },
    597: function (h, g, _) {
      var b = _(34155);
      _(91479);
      var y = _(67294),
        A = y && "object" == typeof y && "default" in y ? y : { default: y };
      function _defineProperties(h, g) {
        for (var _ = 0; _ < g.length; _++) {
          var b = g[_];
          (b.enumerable = b.enumerable || !1),
            (b.configurable = !0),
            "value" in b && (b.writable = !0),
            Object.defineProperty(h, b.key, b);
        }
      }
      var N = void 0 !== b && b.env && !0,
        isString = function (h) {
          return "[object String]" === Object.prototype.toString.call(h);
        },
        F = (function () {
          function StyleSheet(h) {
            var g = void 0 === h ? {} : h,
              _ = g.name,
              b = void 0 === _ ? "stylesheet" : _,
              y = g.optimizeForSpeed,
              A = void 0 === y ? N : y;
            invariant$1(isString(b), "`name` must be a string"),
              (this._name = b),
              (this._deletedRulePlaceholder = "#" + b + "-deleted-rule____{}"),
              invariant$1(
                "boolean" == typeof A,
                "`optimizeForSpeed` must be a boolean",
              ),
              (this._optimizeForSpeed = A),
              (this._serverSheet = void 0),
              (this._tags = []),
              (this._injected = !1),
              (this._rulesCount = 0);
            var F = document.querySelector('meta[property="csp-nonce"]');
            this._nonce = F ? F.getAttribute("content") : null;
          }
          var h,
            g = StyleSheet.prototype;
          return (
            (g.setOptimizeForSpeed = function (h) {
              invariant$1(
                "boolean" == typeof h,
                "`setOptimizeForSpeed` accepts a boolean",
              ),
                invariant$1(
                  0 === this._rulesCount,
                  "optimizeForSpeed cannot be when rules have already been inserted",
                ),
                this.flush(),
                (this._optimizeForSpeed = h),
                this.inject();
            }),
            (g.isOptimizeForSpeed = function () {
              return this._optimizeForSpeed;
            }),
            (g.inject = function () {
              var h = this;
              if (
                (invariant$1(!this._injected, "sheet already injected"),
                (this._injected = !0),
                this._optimizeForSpeed)
              ) {
                (this._tags[0] = this.makeStyleTag(this._name)),
                  (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                  this._optimizeForSpeed ||
                    (N ||
                      console.warn(
                        "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.",
                      ),
                    this.flush(),
                    (this._injected = !0));
                return;
              }
              this._serverSheet = {
                cssRules: [],
                insertRule: function (g, _) {
                  return (
                    "number" == typeof _
                      ? (h._serverSheet.cssRules[_] = { cssText: g })
                      : h._serverSheet.cssRules.push({ cssText: g }),
                    _
                  );
                },
                deleteRule: function (g) {
                  h._serverSheet.cssRules[g] = null;
                },
              };
            }),
            (g.getSheetForTag = function (h) {
              if (h.sheet) return h.sheet;
              for (var g = 0; g < document.styleSheets.length; g++)
                if (document.styleSheets[g].ownerNode === h)
                  return document.styleSheets[g];
            }),
            (g.getSheet = function () {
              return this.getSheetForTag(this._tags[this._tags.length - 1]);
            }),
            (g.insertRule = function (h, g) {
              if (
                (invariant$1(isString(h), "`insertRule` accepts only strings"),
                this._optimizeForSpeed)
              ) {
                var _ = this.getSheet();
                "number" != typeof g && (g = _.cssRules.length);
                try {
                  _.insertRule(h, g);
                } catch (g) {
                  return (
                    N ||
                      console.warn(
                        "StyleSheet: illegal rule: \n\n" +
                          h +
                          "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                      ),
                    -1
                  );
                }
              } else {
                var b = this._tags[g];
                this._tags.push(this.makeStyleTag(this._name, h, b));
              }
              return this._rulesCount++;
            }),
            (g.replaceRule = function (h, g) {
              if (this._optimizeForSpeed) {
                var _ = this.getSheet();
                if (
                  (g.trim() || (g = this._deletedRulePlaceholder),
                  !_.cssRules[h])
                )
                  return h;
                _.deleteRule(h);
                try {
                  _.insertRule(g, h);
                } catch (b) {
                  N ||
                    console.warn(
                      "StyleSheet: illegal rule: \n\n" +
                        g +
                        "\n\nSee https://stackoverflow.com/q/20007992 for more info",
                    ),
                    _.insertRule(this._deletedRulePlaceholder, h);
                }
              } else {
                var b = this._tags[h];
                invariant$1(b, "old rule at index `" + h + "` not found"),
                  (b.textContent = g);
              }
              return h;
            }),
            (g.deleteRule = function (h) {
              if (this._optimizeForSpeed) this.replaceRule(h, "");
              else {
                var g = this._tags[h];
                invariant$1(g, "rule at index `" + h + "` not found"),
                  g.parentNode.removeChild(g),
                  (this._tags[h] = null);
              }
            }),
            (g.flush = function () {
              (this._injected = !1),
                (this._rulesCount = 0),
                this._tags.forEach(function (h) {
                  return h && h.parentNode.removeChild(h);
                }),
                (this._tags = []);
            }),
            (g.cssRules = function () {
              var h = this;
              return this._tags.reduce(function (g, _) {
                return (
                  _
                    ? (g = g.concat(
                        Array.prototype.map.call(
                          h.getSheetForTag(_).cssRules,
                          function (g) {
                            return g.cssText === h._deletedRulePlaceholder
                              ? null
                              : g;
                          },
                        ),
                      ))
                    : g.push(null),
                  g
                );
              }, []);
            }),
            (g.makeStyleTag = function (h, g, _) {
              g &&
                invariant$1(
                  isString(g),
                  "makeStyleTag accepts only strings as second parameter",
                );
              var b = document.createElement("style");
              this._nonce && b.setAttribute("nonce", this._nonce),
                (b.type = "text/css"),
                b.setAttribute("data-" + h, ""),
                g && b.appendChild(document.createTextNode(g));
              var y = document.head || document.getElementsByTagName("head")[0];
              return _ ? y.insertBefore(b, _) : y.appendChild(b), b;
            }),
            _defineProperties(StyleSheet.prototype, [
              {
                key: "length",
                get: function () {
                  return this._rulesCount;
                },
              },
            ]),
            h && _defineProperties(StyleSheet, h),
            StyleSheet
          );
        })();
      function invariant$1(h, g) {
        if (!h) throw Error("StyleSheet: " + g + ".");
      }
      var stringHash = function (h) {
          for (var g = 5381, _ = h.length; _; )
            g = (33 * g) ^ h.charCodeAt(--_);
          return g >>> 0;
        },
        B = {};
      function computeId(h, g) {
        if (!g) return "jsx-" + h;
        var _ = String(g),
          b = h + _;
        return B[b] || (B[b] = "jsx-" + stringHash(h + "-" + _)), B[b];
      }
      function computeSelector(h, g) {
        var _ = h + g;
        return (
          B[_] || (B[_] = g.replace(/__jsx-style-dynamic-selector/g, h)), B[_]
        );
      }
      var H = (function () {
          function StyleSheetRegistry(h) {
            var g = void 0 === h ? {} : h,
              _ = g.styleSheet,
              b = void 0 === _ ? null : _,
              y = g.optimizeForSpeed,
              A = void 0 !== y && y;
            (this._sheet =
              b || new F({ name: "styled-jsx", optimizeForSpeed: A })),
              this._sheet.inject(),
              b &&
                "boolean" == typeof A &&
                (this._sheet.setOptimizeForSpeed(A),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {});
          }
          var h = StyleSheetRegistry.prototype;
          return (
            (h.add = function (h) {
              var g = this;
              void 0 === this._optimizeForSpeed &&
                ((this._optimizeForSpeed = Array.isArray(h.children)),
                this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
                (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
                this._fromServer ||
                  ((this._fromServer = this.selectFromServer()),
                  (this._instancesCounts = Object.keys(this._fromServer).reduce(
                    function (h, g) {
                      return (h[g] = 0), h;
                    },
                    {},
                  )));
              var _ = this.getIdAndRules(h),
                b = _.styleId,
                y = _.rules;
              if (b in this._instancesCounts) {
                this._instancesCounts[b] += 1;
                return;
              }
              var A = y
                .map(function (h) {
                  return g._sheet.insertRule(h);
                })
                .filter(function (h) {
                  return -1 !== h;
                });
              (this._indices[b] = A), (this._instancesCounts[b] = 1);
            }),
            (h.remove = function (h) {
              var g = this,
                _ = this.getIdAndRules(h).styleId;
              if (
                ((function (h, g) {
                  if (!h) throw Error("StyleSheetRegistry: " + g + ".");
                })(
                  _ in this._instancesCounts,
                  "styleId: `" + _ + "` not found",
                ),
                (this._instancesCounts[_] -= 1),
                this._instancesCounts[_] < 1)
              ) {
                var b = this._fromServer && this._fromServer[_];
                b
                  ? (b.parentNode.removeChild(b), delete this._fromServer[_])
                  : (this._indices[_].forEach(function (h) {
                      return g._sheet.deleteRule(h);
                    }),
                    delete this._indices[_]),
                  delete this._instancesCounts[_];
              }
            }),
            (h.update = function (h, g) {
              this.add(g), this.remove(h);
            }),
            (h.flush = function () {
              this._sheet.flush(),
                this._sheet.inject(),
                (this._fromServer = void 0),
                (this._indices = {}),
                (this._instancesCounts = {});
            }),
            (h.cssRules = function () {
              var h = this,
                g = this._fromServer
                  ? Object.keys(this._fromServer).map(function (g) {
                      return [g, h._fromServer[g]];
                    })
                  : [],
                _ = this._sheet.cssRules();
              return g.concat(
                Object.keys(this._indices)
                  .map(function (g) {
                    return [
                      g,
                      h._indices[g]
                        .map(function (h) {
                          return _[h].cssText;
                        })
                        .join(h._optimizeForSpeed ? "" : "\n"),
                    ];
                  })
                  .filter(function (h) {
                    return !!h[1];
                  }),
              );
            }),
            (h.styles = function (h) {
              var g, _;
              return (
                (g = this.cssRules()),
                void 0 === (_ = h) && (_ = {}),
                g.map(function (h) {
                  var g = h[0],
                    b = h[1];
                  return A.default.createElement("style", {
                    id: "__" + g,
                    key: "__" + g,
                    nonce: _.nonce ? _.nonce : void 0,
                    dangerouslySetInnerHTML: { __html: b },
                  });
                })
              );
            }),
            (h.getIdAndRules = function (h) {
              var g = h.children,
                _ = h.dynamic,
                b = h.id;
              if (_) {
                var y = computeId(b, _);
                return {
                  styleId: y,
                  rules: Array.isArray(g)
                    ? g.map(function (h) {
                        return computeSelector(y, h);
                      })
                    : [computeSelector(y, g)],
                };
              }
              return {
                styleId: computeId(b),
                rules: Array.isArray(g) ? g : [g],
              };
            }),
            (h.selectFromServer = function () {
              return Array.prototype.slice
                .call(document.querySelectorAll('[id^="__jsx-"]'))
                .reduce(function (h, g) {
                  return (h[g.id.slice(2)] = g), h;
                }, {});
            }),
            StyleSheetRegistry
          );
        })(),
        U = y.createContext(null);
      U.displayName = "StyleSheetContext";
      var K = A.default.useInsertionEffect || A.default.useLayoutEffect,
        q = new H();
      function JSXStyle(h) {
        var g = q || y.useContext(U);
        return (
          g &&
            K(
              function () {
                return (
                  g.add(h),
                  function () {
                    g.remove(h);
                  }
                );
              },
              [h.id, String(h.dynamic)],
            ),
          null
        );
      }
      (JSXStyle.dynamic = function (h) {
        return h
          .map(function (h) {
            return computeId(h[0], h[1]);
          })
          .join(" ");
      }),
        (g.style = JSXStyle);
    },
    5379: function (h, g, _) {
      "use strict";
      h.exports = _(597).style;
    },
    39820: function (h, g, _) {
      "use strict";
      let b, y;
      _.r(g),
        _.d(g, {
          default: function () {
            return MyApp;
          },
        });
      var A,
        N = _(85893),
        F = _(96232),
        B = _.n(F),
        H = _(26434),
        U = _.n(H),
        K = _(63676),
        q = _.n(K),
        Y = _(5379),
        X = _.n(Y),
        Q = _(31955),
        et = _(5152),
        en = _.n(et),
        er = _(67294),
        ei = _.t(er, 2);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (h) {
            for (var g = 1; g < arguments.length; g++) {
              var _ = arguments[g];
              for (var b in _)
                Object.prototype.hasOwnProperty.call(_, b) && (h[b] = _[b]);
            }
            return h;
          }).apply(this, arguments);
      }
      var log = function (h, g) {},
        eo = "undefined" == typeof window,
        IntercomAPI = function (h) {
          if (!eo && window.Intercom) {
            for (
              var g = arguments.length, _ = Array(g > 1 ? g - 1 : 0), b = 1;
              b < g;
              b++
            )
              _[b - 1] = arguments[b];
            return window.Intercom.apply(null, [h].concat(_));
          }
          log("error", h + " Intercom instance is not initalized yet");
        },
        ea = (0, er.createContext)(void 0),
        initialize = function (h, g) {
          void 0 === g && (g = 0);
          var _ = window,
            b = _.Intercom;
          if ("function" == typeof b)
            b("reattach_activator"), b("update", _.intercomSettings);
          else {
            var y = document,
              i = function i() {
                i.c(arguments);
              };
            (i.q = []),
              (i.c = function (h) {
                i.q.push(h);
              }),
              (_.Intercom = i);
            var l = function () {
              setTimeout(function () {
                var g = y.createElement("script");
                (g.type = "text/javascript"),
                  (g.async = !0),
                  (g.src = "https://widget.intercom.io/widget/" + h);
                var _ = y.getElementsByTagName("script")[0];
                _.parentNode.insertBefore(g, _);
              }, g);
            };
            "complete" === document.readyState
              ? l()
              : _.attachEvent
                ? _.attachEvent("onload", l)
                : _.addEventListener("load", l, !1);
          }
        },
        mapDataAttributesCompanyToRawDataAttributesCompany = function (h) {
          return _extends(
            {
              company_id: h.companyId,
              name: h.name,
              created_at: h.createdAt,
              plan: h.plan,
              monthly_spend: h.monthlySpend,
              user_count: h.userCount,
              size: h.size,
              website: h.website,
              industry: h.industry,
            },
            h.customAttributes,
          );
        },
        mapDataAttributesToRawDataAttributes = function (h) {
          var g, _;
          return _extends(
            {
              email: h.email,
              user_id: h.userId,
              created_at: h.createdAt,
              name: h.name,
              phone: h.phone,
              last_request_at: h.lastRequestAt,
              unsubscribed_from_emails: h.unsubscribedFromEmails,
              language_override: h.languageOverride,
              utm_campaign: h.utmCampaign,
              utm_content: h.utmContent,
              utm_medium: h.utmMedium,
              utm_source: h.utmSource,
              utm_term: h.utmTerm,
              avatar: h.avatar && {
                type: (_ = h.avatar).type,
                image_url: _.imageUrl,
              },
              user_hash: h.userHash,
              company:
                h.company &&
                mapDataAttributesCompanyToRawDataAttributesCompany(h.company),
              companies:
                null == (g = h.companies)
                  ? void 0
                  : g.map(mapDataAttributesCompanyToRawDataAttributesCompany),
            },
            h.customAttributes,
          );
        },
        mapIntercomPropsToRawIntercomProps = function (h) {
          return (function removeUndefined(h) {
            return (
              Object.keys(h).forEach(function (g) {
                h[g] && "object" == typeof h[g]
                  ? removeUndefined(h[g])
                  : void 0 === h[g] && delete h[g];
              }),
              h
            );
          })(
            _extends(
              {},
              {
                custom_launcher_selector: h.customLauncherSelector,
                alignment: h.alignment,
                vertical_padding: h.verticalPadding,
                horizontal_padding: h.horizontalPadding,
                hide_default_launcher: h.hideDefaultLauncher,
                session_duration: h.sessionDuration,
                action_color: h.actionColor,
                background_color: h.backgroundColor,
              },
              mapDataAttributesToRawDataAttributes(h),
            ),
          );
        },
        IntercomProvider = function (h) {
          var g = h.appId,
            _ = h.autoBoot,
            b = h.autoBootProps,
            y = h.children,
            A = h.onHide,
            N = h.onShow,
            F = h.onUnreadCountChange,
            B = h.shouldInitialize,
            H = void 0 === B ? !eo : B,
            U = h.apiBase,
            K = h.initializeDelay;
          !(function (h, g) {
            if (null != h) {
              var _,
                b,
                y = {},
                A = Object.keys(h);
              for (b = 0; b < A.length; b++)
                g.indexOf((_ = A[b])) >= 0 || (y[_] = h[_]);
            }
          })(h, [
            "appId",
            "autoBoot",
            "autoBootProps",
            "children",
            "onHide",
            "onShow",
            "onUnreadCountChange",
            "shouldInitialize",
            "apiBase",
            "initializeDelay",
          ]);
          var q = (0, er.useRef)(!1),
            Y = (0, er.useRef)(!1),
            X = (0, er.useCallback)(
              function (h) {
                if (!window.Intercom && !H) {
                  log(
                    "warn",
                    "Intercom instance is not initialized because `shouldInitialize` is set to `false` in `IntercomProvider`",
                  );
                  return;
                }
                if (!q.current) {
                  var _ = _extends(
                    { app_id: g },
                    U && { api_base: U },
                    h && mapIntercomPropsToRawIntercomProps(h),
                  );
                  (window.intercomSettings = _),
                    IntercomAPI("boot", _),
                    (q.current = !0);
                }
              },
              [U, g, H],
            );
          eo ||
            !H ||
            Y.current ||
            (initialize(g, K),
            A && IntercomAPI("onHide", A),
            N && IntercomAPI("onShow", N),
            F && IntercomAPI("onUnreadCountChange", F),
            void 0 !== _ && _ && X(b),
            (Y.current = !0));
          var Q = (0, er.useCallback)(
              function (h, g) {
                if (
                  (void 0 === h && (h = "A function"), !window.Intercom && !H)
                ) {
                  log(
                    "warn",
                    "Intercom instance is not initialized because `shouldInitialize` is set to `false` in `IntercomProvider`",
                  );
                  return;
                }
                if (!q.current) {
                  log(
                    "warn",
                    [
                      "'" +
                        h +
                        "' was called but Intercom has not booted yet. ",
                      "Please call 'boot' before calling '" + h + "' or ",
                      "set 'autoBoot' to true in the IntercomProvider.",
                    ].join(""),
                  );
                  return;
                }
                return g();
              },
              [H],
            ),
            et = (0, er.useCallback)(function () {
              q.current && (IntercomAPI("shutdown"), (q.current = !1));
            }, []),
            en = (0, er.useCallback)(function () {
              q.current &&
                (IntercomAPI("shutdown"),
                delete window.Intercom,
                delete window.intercomSettings,
                (q.current = !1));
            }, []),
            ei = (0, er.useCallback)(
              function () {
                Q("update", function () {
                  IntercomAPI("update", {
                    last_requested_at: new Date().getTime(),
                  });
                });
              },
              [Q],
            ),
            es = (0, er.useCallback)(
              function (h) {
                Q("update", function () {
                  if (!h) {
                    ei();
                    return;
                  }
                  var g = mapIntercomPropsToRawIntercomProps(h);
                  (window.intercomSettings = _extends(
                    {},
                    window.intercomSettings,
                    g,
                  )),
                    IntercomAPI("update", g);
                });
              },
              [Q, ei],
            ),
            el = (0, er.useCallback)(
              function () {
                Q("hide", function () {
                  IntercomAPI("hide");
                });
              },
              [Q],
            ),
            eu = (0, er.useCallback)(
              function () {
                Q("show", function () {
                  return IntercomAPI("show");
                });
              },
              [Q],
            ),
            ec = (0, er.useCallback)(
              function () {
                Q("showMessages", function () {
                  IntercomAPI("showMessages");
                });
              },
              [Q],
            ),
            ed = (0, er.useCallback)(
              function (h) {
                Q("showNewMessage", function () {
                  h
                    ? IntercomAPI("showNewMessage", h)
                    : IntercomAPI("showNewMessage");
                });
              },
              [Q],
            ),
            ef = (0, er.useCallback)(
              function () {
                return Q("getVisitorId", function () {
                  return IntercomAPI("getVisitorId");
                });
              },
              [Q],
            ),
            ep = (0, er.useCallback)(
              function (h) {
                Q("startTour", function () {
                  IntercomAPI("startTour", h);
                });
              },
              [Q],
            ),
            eh = (0, er.useCallback)(
              function (h, g) {
                Q("trackEvent", function () {
                  g
                    ? IntercomAPI("trackEvent", h, g)
                    : IntercomAPI("trackEvent", h);
                });
              },
              [Q],
            ),
            em = (0, er.useCallback)(
              function (h) {
                return Q("showArticle", function () {
                  IntercomAPI("showArticle", h);
                });
              },
              [Q],
            ),
            eg = (0, er.useMemo)(
              function () {
                return {
                  boot: X,
                  shutdown: et,
                  hardShutdown: en,
                  update: es,
                  hide: el,
                  show: eu,
                  showMessages: ec,
                  showNewMessages: ed,
                  getVisitorId: ef,
                  startTour: ep,
                  trackEvent: eh,
                  showArticle: em,
                };
              },
              [X, et, en, es, el, eu, ec, ed, ef, ep, eh, em],
            );
          return (0, er.createElement)(ea.Provider, { value: eg }, y);
        },
        es = _(4298),
        el = _.n(es),
        eu = _(34155);
      let getScriptPath = (h, ...g) => {
          var _, b;
          let y = null !== (_ = h.basePath) && void 0 !== _ ? _ : "";
          return (
            h.subdirectory && (y += `/${h.subdirectory}`),
            `${y}/js/${[
              null !== (b = h.scriptName) && void 0 !== b ? b : "script",
              ...g.sort().filter((h) => null !== h),
            ].join(".")}.js`
          );
        },
        getRemoteScriptName = (h) => (h ? "plausible" : "script"),
        getDomain = (h) => {
          var g;
          return null !== (g = h.customDomain) && void 0 !== g
            ? g
            : "https://plausible.io";
        },
        getApiEndpoint = (h) => {
          var g, _;
          return `${null !== (g = h.basePath) && void 0 !== g ? g : ""}/${
            null !== (_ = h.subdirectory) && void 0 !== _ ? _ : "proxy"
          }/api/event${h.trailingSlash ? "/" : ""}`;
        };
      function PlausibleProvider(h) {
        let { enabled: g = !0 } = h,
          _ = eu.env.next_plausible_proxy
            ? {
                trailingSlash: "true" === eu.env.next_plausible_trailingSlash,
                basePath: eu.env.next_plausible_basePath,
                customDomain: eu.env.next_plausible_customDomain,
                scriptName: eu.env.next_plausible_scriptName,
                subdirectory: eu.env.next_plausible_subdirectory,
              }
            : void 0;
        return er.createElement(
          er.Fragment,
          null,
          g &&
            er.createElement(
              el(),
              Object.assign(
                {
                  async: !0,
                  defer: !0,
                  "data-api": _ ? getApiEndpoint(_) : void 0,
                  "data-domain": h.domain,
                  "data-exclude": h.exclude,
                  src:
                    (_ ? "" : getDomain(h)) +
                    getScriptPath(
                      Object.assign(Object.assign({}, _), {
                        scriptName: _
                          ? _.scriptName
                          : getRemoteScriptName(h.selfHosted),
                      }),
                      h.trackLocalhost ? "local" : null,
                      h.manualPageviews ? "manual" : null,
                      h.pageviewProps ? "pageview-props" : null,
                      h.trackOutboundLinks ? "outbound-links" : null,
                      h.exclude ? "exclusions" : null,
                      h.revenue ? "revenue" : null,
                      h.trackFileDownloads ? "file-downloads" : null,
                      h.taggedEvents ? "tagged-events" : null,
                    ),
                  integrity: h.integrity,
                  crossOrigin: h.integrity ? "anonymous" : void 0,
                },
                "object" == typeof h.pageviewProps
                  ? Object.fromEntries(
                      Object.entries(h.pageviewProps).map(([h, g]) => [
                        `event-${h}`,
                        g,
                      ]),
                    )
                  : void 0,
                h.scriptProps,
              ),
            ),
          g &&
            er.createElement(el(), {
              id: "next-plausible-init",
              dangerouslySetInnerHTML: {
                __html:
                  "window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }",
              },
            }),
          h.children,
        );
      }
      var ec = _(11163),
        ed = _(3271),
        ef = _(41664),
        ep = _.n(ef),
        eh = _(3766),
        em = _.n(eh);
      function Footer() {
        let h = new Date().getFullYear();
        return (0, N.jsxs)("footer", {
          className: em().footer,
          role: "contentinfo",
          children: [
            (0, N.jsxs)("div", {
              className: em().container,
              children: [
                (0, N.jsx)("img", {
                  src: "/images/icon-white.svg",
                  className: em().logo,
                }),
                (0, N.jsxs)("div", {
                  className: em().navigation,
                  children: [
                    (0, N.jsxs)("ul", {
                      className: em().list,
                      children: [
                        (0, N.jsx)("li", { children: "Company" }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/blog",
                            children: "Blog",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/careers",
                            children: "Careers",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/pricing",
                            children: "Pricing",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/customers",
                            children: "Customers",
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsxs)("ul", {
                      className: em().list,
                      children: [
                        (0, N.jsx)("li", { children: "Resources" }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsxs)("a", {
                            href: "https://docs.evervault.com/",
                            children: [
                              (0, N.jsx)("span", {
                                className: "d-none d-xs-inline",
                                children: "Documentation",
                              }),
                              (0, N.jsx)("span", {
                                className: "d-inline d-xs-none",
                                children: "Docs",
                              }),
                            ],
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/papers",
                            children: "Papers",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/press",
                            children: "Press",
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsxs)("ul", {
                      className: em().list,
                      children: [
                        (0, N.jsx)("li", { children: "Solutions" }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/solutions/pci",
                            children: "PCI Compliance",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/solutions/encryption-as-a-service",
                            children: "Encryption as a Service",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/solutions/credentials",
                            children: "Credentials Encryption",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/solutions/file-encryption",
                            children: "File Encryption",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/solutions/pii",
                            children: "PII Encryption",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/solutions/hipaa",
                            children: "HIPAA Compliance",
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsxs)("ul", {
                      className: em().list,
                      children: [
                        (0, N.jsx)("li", { children: "Legal" }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/legal/terms",
                            children: "Terms of Service",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/legal/privacy",
                            children: "Privacy Policy",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/legal/cookies",
                            children: "Cookies Policy",
                          }),
                        }),
                        (0, N.jsx)("li", {
                          children: (0, N.jsx)(ep(), {
                            href: "/legal/data-processing-agreement",
                            children: "Data Processing",
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsxs)("ul", {
                      className: em().list,
                      children: [
                        (0, N.jsx)("li", { children: "Compliance" }),
                        (0, N.jsxs)("li", {
                          className: em().complianceLink,
                          children: [
                            (0, N.jsx)("img", { src: "/images/logos/pci.svg" }),
                            (0, N.jsx)(ep(), {
                              href: "/legal/privacy",
                              children: "PCI Level 1",
                            }),
                          ],
                        }),
                        (0, N.jsxs)("li", {
                          className: em().complianceLink,
                          children: [
                            (0, N.jsx)("img", { src: "/images/logos/soc.svg" }),
                            (0, N.jsx)(ep(), {
                              href: "/legal/privacy",
                              children: "SOC 2 Type II",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, N.jsx)("div", {
              className: em().copyright,
              children: (0, N.jsxs)("div", {
                className: em().copyrightContent,
                children: [
                  (0, N.jsxs)("p", {
                    children: [
                      "\xa9 ",
                      h,
                      " evervault Inc.",
                      " ",
                      (0, N.jsx)("br", { className: em().copyrightBreak }),
                      "All rights reserved.",
                    ],
                  }),
                  (0, N.jsx)("a", {
                    className: em().status,
                    href: "https://status.evervault.com/",
                    children: (0, N.jsx)("p", {
                      children: "All systems normal",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      var eg = _(60412),
        ev = _(60777),
        e_ = _(41570),
        eb = _.n(e_),
        ey = _(92520),
        ex = _(11544),
        ew = _(87462),
        eC = _(73935);
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        h,
        g,
        { checkForDefaultPrevented: _ = !0 } = {},
      ) {
        return function (b) {
          if ((null == h || h(b), !1 === _ || !b.defaultPrevented))
            return null == g ? void 0 : g(b);
        };
      }
      var eS = _(75320);
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(h) {
        let g = (0, er.useRef)(h);
        return (
          (0, er.useEffect)(() => {
            g.current = h;
          }),
          (0, er.useMemo)(
            () =>
              (...h) => {
                var _;
                return null === (_ = g.current) || void 0 === _
                  ? void 0
                  : _.call(g, ...h);
              },
            [],
          )
        );
      }
      function $6ed0406888f73fc4$export$43e446d32b3d21af(...h) {
        return (g) =>
          h.forEach((h) => {
            "function" == typeof h ? h(g) : null != h && (h.current = g);
          });
      }
      function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...h) {
        return (0, er.useCallback)(
          $6ed0406888f73fc4$export$43e446d32b3d21af(...h),
          h,
        );
      }
      var eE = _(78990);
      let eP = (null == globalThis ? void 0 : globalThis.document)
          ? er.useLayoutEffect
          : () => {},
        $921a889cee6df7e8$export$99c2b779aa4e8b8b = (h) => {
          let { present: g, children: _ } = h,
            b = (function (h) {
              var g;
              let [_, b] = (0, er.useState)(),
                y = (0, er.useRef)({}),
                A = (0, er.useRef)(h),
                N = (0, er.useRef)("none"),
                F = h ? "mounted" : "unmounted",
                [B, H] =
                  ((g = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  (0, er.useReducer)((h, _) => {
                    let b = g[h][_];
                    return null != b ? b : h;
                  }, F));
              return (
                (0, er.useEffect)(() => {
                  let h = $921a889cee6df7e8$var$getAnimationName(y.current);
                  N.current = "mounted" === B ? h : "none";
                }, [B]),
                eP(() => {
                  let g = y.current,
                    _ = A.current,
                    b = _ !== h;
                  if (b) {
                    let b = N.current,
                      y = $921a889cee6df7e8$var$getAnimationName(g);
                    h
                      ? H("MOUNT")
                      : "none" === y ||
                          (null == g ? void 0 : g.display) === "none"
                        ? H("UNMOUNT")
                        : _ && b !== y
                          ? H("ANIMATION_OUT")
                          : H("UNMOUNT"),
                      (A.current = h);
                  }
                }, [h, H]),
                eP(() => {
                  if (_) {
                    let handleAnimationEnd = (h) => {
                        let g = $921a889cee6df7e8$var$getAnimationName(
                            y.current,
                          ),
                          b = g.includes(h.animationName);
                        h.target === _ &&
                          b &&
                          (0, eC.flushSync)(() => H("ANIMATION_END"));
                      },
                      handleAnimationStart = (h) => {
                        h.target === _ &&
                          (N.current = $921a889cee6df7e8$var$getAnimationName(
                            y.current,
                          ));
                      };
                    return (
                      _.addEventListener(
                        "animationstart",
                        handleAnimationStart,
                      ),
                      _.addEventListener("animationcancel", handleAnimationEnd),
                      _.addEventListener("animationend", handleAnimationEnd),
                      () => {
                        _.removeEventListener(
                          "animationstart",
                          handleAnimationStart,
                        ),
                          _.removeEventListener(
                            "animationcancel",
                            handleAnimationEnd,
                          ),
                          _.removeEventListener(
                            "animationend",
                            handleAnimationEnd,
                          );
                      }
                    );
                  }
                  H("ANIMATION_END");
                }, [_, H]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(B),
                  ref: (0, er.useCallback)((h) => {
                    h && (y.current = getComputedStyle(h)), b(h);
                  }, []),
                }
              );
            })(g),
            y =
              "function" == typeof _
                ? _({ present: b.isPresent })
                : er.Children.only(_),
            A = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(b.ref, y.ref),
            N = "function" == typeof _;
          return N || b.isPresent ? (0, er.cloneElement)(y, { ref: A }) : null;
        };
      function $921a889cee6df7e8$var$getAnimationName(h) {
        return (null == h ? void 0 : h.animationName) || "none";
      }
      $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
      let eT = ei["useId".toString()] || (() => void 0),
        ej = 0;
      function $1746a345f3d73bb7$export$f680877a34711e37(h) {
        let [g, _] = er.useState(eT());
        return (
          eP(() => {
            h || _((h) => (null != h ? h : String(ej++)));
          }, [h]),
          h || (g ? `radix-${g}` : "")
        );
      }
      var ek = _(24428),
        e$ = _(13024),
        eR = _(96219);
      let eA = "NavigationMenu",
        [eO, eD, eL] = (0, ek.B)(eA),
        [eM, eI, eN] = (0, ek.B)(eA),
        [eV, eF] = (function (h, g = []) {
          let _ = [],
            createScope = () => {
              let g = _.map((h) => (0, er.createContext)(h));
              return function (_) {
                let b = (null == _ ? void 0 : _[h]) || g;
                return (0, er.useMemo)(
                  () => ({ [`__scope${h}`]: { ..._, [h]: b } }),
                  [_, b],
                );
              };
            };
          return (
            (createScope.scopeName = h),
            [
              function (g, b) {
                let y = (0, er.createContext)(b),
                  A = _.length;
                function Provider(g) {
                  let { scope: _, children: b, ...N } = g,
                    F = (null == _ ? void 0 : _[h][A]) || y,
                    B = (0, er.useMemo)(() => N, Object.values(N));
                  return (0, er.createElement)(F.Provider, { value: B }, b);
                }
                return (
                  (_ = [..._, b]),
                  (Provider.displayName = g + "Provider"),
                  [
                    Provider,
                    function (_, N) {
                      let F = (null == N ? void 0 : N[h][A]) || y,
                        B = (0, er.useContext)(F);
                      if (B) return B;
                      if (void 0 !== b) return b;
                      throw Error(`\`${_}\` must be used within \`${g}\``);
                    },
                  ]
                );
              },
              (function (...h) {
                let g = h[0];
                if (1 === h.length) return g;
                let createScope1 = () => {
                  let _ = h.map((h) => ({
                    useScope: h(),
                    scopeName: h.scopeName,
                  }));
                  return function (h) {
                    let b = _.reduce((g, { useScope: _, scopeName: b }) => {
                      let y = _(h),
                        A = y[`__scope${b}`];
                      return { ...g, ...A };
                    }, {});
                    return (0, er.useMemo)(
                      () => ({ [`__scope${g.scopeName}`]: b }),
                      [b],
                    );
                  };
                };
                return (createScope1.scopeName = g.scopeName), createScope1;
              })(createScope, ...g),
            ]
          );
        })(eA, [eL, eN]),
        [eB, ez] = eV(eA),
        [eH, eW] = eV(eA),
        eU = (0, er.forwardRef)((h, g) => {
          let {
              __scopeNavigationMenu: _,
              value: b,
              onValueChange: y,
              defaultValue: A,
              delayDuration: N = 200,
              skipDelayDuration: F = 300,
              orientation: B = "horizontal",
              dir: H,
              ...U
            } = h,
            [K, q] = (0, er.useState)(null),
            Y = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(g, (h) => q(h)),
            X = (0, eE.gm)(H),
            Q = (0, er.useRef)(0),
            et = (0, er.useRef)(0),
            en = (0, er.useRef)(0),
            [ei, eo] = (0, er.useState)(!0),
            [ea = "", es] = (function ({
              prop: h,
              defaultProp: g,
              onChange: _ = () => {},
            }) {
              let [b, y] = (function ({ defaultProp: h, onChange: g }) {
                  let _ = (0, er.useState)(h),
                    [b] = _,
                    y = (0, er.useRef)(b),
                    A = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(g);
                  return (
                    (0, er.useEffect)(() => {
                      y.current !== b && (A(b), (y.current = b));
                    }, [b, y, A]),
                    _
                  );
                })({ defaultProp: g, onChange: _ }),
                A = void 0 !== h,
                N = A ? h : b,
                F = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(_),
                B = (0, er.useCallback)(
                  (g) => {
                    if (A) {
                      let _ = "function" == typeof g ? g(h) : g;
                      _ !== h && F(_);
                    } else y(g);
                  },
                  [A, h, y, F],
                );
              return [N, B];
            })({
              prop: b,
              onChange: (h) => {
                let g = "" !== h,
                  _ = F > 0;
                g
                  ? (window.clearTimeout(en.current), _ && eo(!1))
                  : (window.clearTimeout(en.current),
                    (en.current = window.setTimeout(() => eo(!0), F))),
                  null == y || y(h);
              },
              defaultProp: A,
            }),
            el = (0, er.useCallback)(() => {
              window.clearTimeout(et.current),
                (et.current = window.setTimeout(() => es(""), 150));
            }, [es]),
            eu = (0, er.useCallback)(
              (h) => {
                window.clearTimeout(et.current), es(h);
              },
              [es],
            ),
            ec = (0, er.useCallback)(
              (h) => {
                let g = ea === h;
                g
                  ? window.clearTimeout(et.current)
                  : (Q.current = window.setTimeout(() => {
                      window.clearTimeout(et.current), es(h);
                    }, N));
              },
              [ea, es, N],
            );
          return (
            (0, er.useEffect)(
              () => () => {
                window.clearTimeout(Q.current),
                  window.clearTimeout(et.current),
                  window.clearTimeout(en.current);
              },
              [],
            ),
            (0, er.createElement)(
              $322c88a641701f3b$var$NavigationMenuProvider,
              {
                scope: _,
                isRootMenu: !0,
                value: ea,
                dir: X,
                orientation: B,
                rootNavigationMenu: K,
                onTriggerEnter: (h) => {
                  window.clearTimeout(Q.current), ei ? ec(h) : eu(h);
                },
                onTriggerLeave: () => {
                  window.clearTimeout(Q.current), el();
                },
                onContentEnter: () => window.clearTimeout(et.current),
                onContentLeave: el,
                onItemSelect: (h) => {
                  es((g) => (g === h ? "" : h));
                },
                onItemDismiss: () => es(""),
              },
              (0, er.createElement)(
                eS.WV.nav,
                (0, ew.Z)(
                  { "aria-label": "Main", "data-orientation": B, dir: X },
                  U,
                  { ref: Y },
                ),
              ),
            )
          );
        }),
        $322c88a641701f3b$var$NavigationMenuProvider = (h) => {
          let {
              scope: g,
              isRootMenu: _,
              rootNavigationMenu: b,
              dir: y,
              orientation: A,
              children: N,
              value: F,
              onItemSelect: B,
              onItemDismiss: H,
              onTriggerEnter: U,
              onTriggerLeave: K,
              onContentEnter: q,
              onContentLeave: Y,
            } = h,
            [X, Q] = (0, er.useState)(null),
            [et, en] = (0, er.useState)(new Map()),
            [ei, eo] = (0, er.useState)(null);
          return (0, er.createElement)(
            eB,
            {
              scope: g,
              isRootMenu: _,
              rootNavigationMenu: b,
              value: F,
              previousValue: (function (h) {
                let g = (0, er.useRef)({ value: h, previous: h });
                return (0, er.useMemo)(
                  () => (
                    g.current.value !== h &&
                      ((g.current.previous = g.current.value),
                      (g.current.value = h)),
                    g.current.previous
                  ),
                  [h],
                );
              })(F),
              baseId: $1746a345f3d73bb7$export$f680877a34711e37(),
              dir: y,
              orientation: A,
              viewport: X,
              onViewportChange: Q,
              indicatorTrack: ei,
              onIndicatorTrackChange: eo,
              onTriggerEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(U),
              onTriggerLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(K),
              onContentEnter: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(q),
              onContentLeave: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(Y),
              onItemSelect: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(B),
              onItemDismiss: $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(H),
              onViewportContentChange: (0, er.useCallback)((h, g) => {
                en((_) => (_.set(h, g), new Map(_)));
              }, []),
              onViewportContentRemove: (0, er.useCallback)((h) => {
                en((g) => (g.has(h) ? (g.delete(h), new Map(g)) : g));
              }, []),
            },
            (0, er.createElement)(
              eO.Provider,
              { scope: g },
              (0, er.createElement)(eH, { scope: g, items: et }, N),
            ),
          );
        },
        eZ = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, ...b } = h,
            y = ez("NavigationMenuList", _),
            A = (0, er.createElement)(
              eS.WV.ul,
              (0, ew.Z)({ "data-orientation": y.orientation }, b, { ref: g }),
            );
          return (0, er.createElement)(
            eS.WV.div,
            { style: { position: "relative" }, ref: y.onIndicatorTrackChange },
            (0, er.createElement)(
              eO.Slot,
              { scope: _ },
              y.isRootMenu ? (0, er.createElement)(e9, { asChild: !0 }, A) : A,
            ),
          );
        }),
        [eG, eK] = eV("NavigationMenuItem"),
        eq = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, value: b, ...y } = h,
            A = $1746a345f3d73bb7$export$f680877a34711e37(),
            N = (0, er.useRef)(null),
            F = (0, er.useRef)(null),
            B = (0, er.useRef)(null),
            H = (0, er.useRef)(() => {}),
            U = (0, er.useRef)(!1),
            K = (0, er.useCallback)((h = "start") => {
              if (N.current) {
                H.current();
                let g = $322c88a641701f3b$var$getTabbableCandidates(N.current);
                g.length &&
                  $322c88a641701f3b$var$focusFirst(
                    "start" === h ? g : g.reverse(),
                  );
              }
            }, []),
            q = (0, er.useCallback)(() => {
              if (N.current) {
                let h = $322c88a641701f3b$var$getTabbableCandidates(N.current);
                h.length &&
                  (H.current =
                    (h.forEach((h) => {
                      (h.dataset.tabindex = h.getAttribute("tabindex") || ""),
                        h.setAttribute("tabindex", "-1");
                    }),
                    () => {
                      h.forEach((h) => {
                        let g = h.dataset.tabindex;
                        h.setAttribute("tabindex", g);
                      });
                    }));
              }
            }, []);
          return (0, er.createElement)(
            eG,
            {
              scope: _,
              value: b || A || "LEGACY_REACT_AUTO_VALUE",
              triggerRef: F,
              contentRef: N,
              focusProxyRef: B,
              wasEscapeCloseRef: U,
              onEntryKeyDown: K,
              onFocusProxyEnter: K,
              onRootContentClose: q,
              onContentFocusOutside: q,
            },
            (0, er.createElement)(eS.WV.li, (0, ew.Z)({}, y, { ref: g })),
          );
        }),
        eY = "NavigationMenuTrigger",
        eX = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, disabled: b, ...y } = h,
            A = ez(eY, h.__scopeNavigationMenu),
            N = eK(eY, h.__scopeNavigationMenu),
            F = (0, er.useRef)(null),
            B = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(F, N.triggerRef, g),
            H = $322c88a641701f3b$var$makeTriggerId(A.baseId, N.value),
            U = $322c88a641701f3b$var$makeContentId(A.baseId, N.value),
            K = (0, er.useRef)(!1),
            q = (0, er.useRef)(!1),
            Y = N.value === A.value;
          return (0, er.createElement)(
            er.Fragment,
            null,
            (0, er.createElement)(
              eO.ItemSlot,
              { scope: _, value: N.value },
              (0, er.createElement)(
                te,
                { asChild: !0 },
                (0, er.createElement)(
                  eS.WV.button,
                  (0, ew.Z)(
                    {
                      id: H,
                      disabled: b,
                      "data-disabled": b ? "" : void 0,
                      "data-state": $322c88a641701f3b$var$getOpenState(Y),
                      "aria-expanded": Y,
                      "aria-controls": U,
                    },
                    y,
                    {
                      ref: B,
                      onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onPointerEnter,
                        () => {
                          (q.current = !1), (N.wasEscapeCloseRef.current = !1);
                        },
                      ),
                      onPointerMove: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onPointerMove,
                        $322c88a641701f3b$var$whenMouse(() => {
                          b ||
                            q.current ||
                            N.wasEscapeCloseRef.current ||
                            K.current ||
                            (A.onTriggerEnter(N.value), (K.current = !0));
                        }),
                      ),
                      onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onPointerLeave,
                        $322c88a641701f3b$var$whenMouse(() => {
                          b || (A.onTriggerLeave(), (K.current = !1));
                        }),
                      ),
                      onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onClick,
                        () => {
                          A.onItemSelect(N.value), (q.current = Y);
                        },
                      ),
                      onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onKeyDown,
                        (h) => {
                          let g = "rtl" === A.dir ? "ArrowLeft" : "ArrowRight",
                            _ = { horizontal: "ArrowDown", vertical: g }[
                              A.orientation
                            ];
                          Y &&
                            h.key === _ &&
                            (N.onEntryKeyDown(), h.preventDefault());
                        },
                      ),
                    },
                  ),
                ),
              ),
            ),
            Y &&
              (0, er.createElement)(
                er.Fragment,
                null,
                (0, er.createElement)(eR.f, {
                  "aria-hidden": !0,
                  tabIndex: 0,
                  ref: N.focusProxyRef,
                  onFocus: (h) => {
                    let g = N.contentRef.current,
                      _ = h.relatedTarget,
                      b = _ === F.current,
                      y = null == g ? void 0 : g.contains(_);
                    (b || !y) && N.onFocusProxyEnter(b ? "start" : "end");
                  },
                }),
                A.viewport && (0, er.createElement)("span", { "aria-owns": U }),
              ),
          );
        }),
        eJ = "navigationMenu.linkSelect",
        eQ = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, active: b, onSelect: y, ...A } = h;
          return (0, er.createElement)(
            te,
            { asChild: !0 },
            (0, er.createElement)(
              eS.WV.a,
              (0, ew.Z)(
                {
                  "data-active": b ? "" : void 0,
                  "aria-current": b ? "page" : void 0,
                },
                A,
                {
                  ref: g,
                  onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    h.onClick,
                    (h) => {
                      let g = h.target,
                        _ = new CustomEvent(eJ, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                      if (
                        (g.addEventListener(
                          eJ,
                          (h) => (null == y ? void 0 : y(h)),
                          { once: !0 },
                        ),
                        (0, eS.jH)(g, _),
                        !_.defaultPrevented && !h.metaKey)
                      ) {
                        let h = new CustomEvent(e3, {
                          bubbles: !0,
                          cancelable: !0,
                        });
                        (0, eS.jH)(g, h);
                      }
                    },
                    { checkForDefaultPrevented: !1 },
                  ),
                },
              ),
            ),
          );
        }),
        e0 =
          ((h, g) => {
            let { __scopeNavigationMenu: _, ...b } = h,
              y = ez("NavigationMenuIndicator", _),
              A = eD(_),
              [N, F] = (0, er.useState)(null),
              [B, H] = (0, er.useState)(null),
              U = "horizontal" === y.orientation,
              K = !!y.value;
            (0, er.useEffect)(() => {
              var h;
              let g = A(),
                _ =
                  null === (h = g.find((h) => h.value === y.value)) ||
                  void 0 === h
                    ? void 0
                    : h.ref.current;
              _ && F(_);
            }, [A, y.value]);
            let handlePositionChange = () => {
              N &&
                H({
                  size: U ? N.offsetWidth : N.offsetHeight,
                  offset: U ? N.offsetLeft : N.offsetTop,
                });
            };
            return (
              $322c88a641701f3b$var$useResizeObserver(N, handlePositionChange),
              $322c88a641701f3b$var$useResizeObserver(
                y.indicatorTrack,
                handlePositionChange,
              ),
              B
                ? (0, er.createElement)(
                    eS.WV.div,
                    (0, ew.Z)(
                      {
                        "aria-hidden": !0,
                        "data-state": K ? "visible" : "hidden",
                        "data-orientation": y.orientation,
                      },
                      b,
                      {
                        ref: g,
                        style: {
                          position: "absolute",
                          ...(U
                            ? {
                                left: 0,
                                width: B.size + "px",
                                transform: `translateX(${B.offset}px)`,
                              }
                            : {
                                top: 0,
                                height: B.size + "px",
                                transform: `translateY(${B.offset}px)`,
                              }),
                          ...b.style,
                        },
                      },
                    ),
                  )
                : null
            );
          },
          "NavigationMenuContent"),
        e1 = (0, er.forwardRef)((h, g) => {
          let { forceMount: _, ...b } = h,
            y = ez(e0, h.__scopeNavigationMenu),
            A = eK(e0, h.__scopeNavigationMenu),
            N = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(A.contentRef, g),
            F = A.value === y.value,
            B = {
              value: A.value,
              triggerRef: A.triggerRef,
              focusProxyRef: A.focusProxyRef,
              wasEscapeCloseRef: A.wasEscapeCloseRef,
              onContentFocusOutside: A.onContentFocusOutside,
              onRootContentClose: A.onRootContentClose,
              ...b,
            };
          return y.viewport
            ? (0, er.createElement)(
                e2,
                (0, ew.Z)({ forceMount: _ }, B, { ref: N }),
              )
            : (0, er.createElement)(
                $921a889cee6df7e8$export$99c2b779aa4e8b8b,
                { present: _ || F },
                (0, er.createElement)(
                  e6,
                  (0, ew.Z)(
                    { "data-state": $322c88a641701f3b$var$getOpenState(F) },
                    B,
                    {
                      ref: N,
                      onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onPointerEnter,
                        y.onContentEnter,
                      ),
                      onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                        h.onPointerLeave,
                        $322c88a641701f3b$var$whenMouse(y.onContentLeave),
                      ),
                      style: {
                        pointerEvents: !F && y.isRootMenu ? "none" : void 0,
                        ...B.style,
                      },
                    },
                  ),
                ),
              );
        }),
        e2 = (0, er.forwardRef)((h, g) => {
          let _ = ez(e0, h.__scopeNavigationMenu),
            { onViewportContentChange: b, onViewportContentRemove: y } = _;
          return (
            eP(() => {
              b(h.value, { ref: g, ...h });
            }, [h, g, b]),
            eP(() => () => y(h.value), [h.value, y]),
            null
          );
        }),
        e3 = "navigationMenu.rootContentDismiss",
        e6 = (0, er.forwardRef)((h, g) => {
          let {
              __scopeNavigationMenu: _,
              value: b,
              triggerRef: y,
              focusProxyRef: A,
              wasEscapeCloseRef: N,
              onRootContentClose: F,
              onContentFocusOutside: B,
              ...H
            } = h,
            U = ez(e0, _),
            K = (0, er.useRef)(null),
            q = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(K, g),
            Y = $322c88a641701f3b$var$makeTriggerId(U.baseId, b),
            X = $322c88a641701f3b$var$makeContentId(U.baseId, b),
            Q = eD(_),
            et = (0, er.useRef)(null),
            { onItemDismiss: en } = U;
          (0, er.useEffect)(() => {
            let h = K.current;
            if (U.isRootMenu && h) {
              let handleClose = () => {
                var g;
                en(),
                  F(),
                  h.contains(document.activeElement) &&
                    (null === (g = y.current) || void 0 === g || g.focus());
              };
              return (
                h.addEventListener(e3, handleClose),
                () => h.removeEventListener(e3, handleClose)
              );
            }
          }, [U.isRootMenu, h.value, y, en, F]);
          let ei = (0, er.useMemo)(() => {
            let h = Q(),
              g = h.map((h) => h.value);
            "rtl" === U.dir && g.reverse();
            let _ = g.indexOf(U.value),
              y = g.indexOf(U.previousValue),
              A = b === U.value,
              N = y === g.indexOf(b);
            if (!A && !N) return et.current;
            let F = (() => {
              if (_ !== y) {
                if (A && -1 !== y) return _ > y ? "from-end" : "from-start";
                if (N && -1 !== _) return _ > y ? "to-start" : "to-end";
              }
              return null;
            })();
            return (et.current = F), F;
          }, [U.previousValue, U.value, U.dir, Q, b]);
          return (0, er.createElement)(
            e9,
            { asChild: !0 },
            (0, er.createElement)(
              e$.XB,
              (0, ew.Z)(
                {
                  id: X,
                  "aria-labelledby": Y,
                  "data-motion": ei,
                  "data-orientation": U.orientation,
                },
                H,
                {
                  ref: q,
                  onDismiss: () => {
                    var h;
                    let g = new Event(e3, { bubbles: !0, cancelable: !0 });
                    null === (h = K.current) ||
                      void 0 === h ||
                      h.dispatchEvent(g);
                  },
                  onFocusOutside: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    h.onFocusOutside,
                    (h) => {
                      var g;
                      B();
                      let _ = h.target;
                      null !== (g = U.rootNavigationMenu) &&
                        void 0 !== g &&
                        g.contains(_) &&
                        h.preventDefault();
                    },
                  ),
                  onPointerDownOutside:
                    $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                      h.onPointerDownOutside,
                      (h) => {
                        var g;
                        let _ = h.target,
                          b = Q().some((h) => {
                            var g;
                            return null === (g = h.ref.current) || void 0 === g
                              ? void 0
                              : g.contains(_);
                          }),
                          y =
                            U.isRootMenu &&
                            (null === (g = U.viewport) || void 0 === g
                              ? void 0
                              : g.contains(_));
                        (b || y || !U.isRootMenu) && h.preventDefault();
                      },
                    ),
                  onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    h.onKeyDown,
                    (h) => {
                      let g = h.altKey || h.ctrlKey || h.metaKey,
                        _ = "Tab" === h.key && !g;
                      if (_) {
                        let g = $322c88a641701f3b$var$getTabbableCandidates(
                            h.currentTarget,
                          ),
                          _ = document.activeElement,
                          y = g.findIndex((h) => h === _),
                          N = h.shiftKey,
                          F = N
                            ? g.slice(0, y).reverse()
                            : g.slice(y + 1, g.length);
                        if ($322c88a641701f3b$var$focusFirst(F))
                          h.preventDefault();
                        else {
                          var b;
                          null === (b = A.current) || void 0 === b || b.focus();
                        }
                      }
                    },
                  ),
                  onEscapeKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    h.onEscapeKeyDown,
                    (h) => {
                      N.current = !0;
                    },
                  ),
                },
              ),
            ),
          );
        }),
        e4 = "NavigationMenuViewport",
        e5 = (0, er.forwardRef)((h, g) => {
          let { forceMount: _, ...b } = h,
            y = ez(e4, h.__scopeNavigationMenu),
            A = !!y.value;
          return (0, er.createElement)(
            $921a889cee6df7e8$export$99c2b779aa4e8b8b,
            { present: _ || A },
            (0, er.createElement)(e8, (0, ew.Z)({}, b, { ref: g })),
          );
        }),
        e8 = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, children: b, ...y } = h,
            A = ez(e4, _),
            N = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(
              g,
              A.onViewportChange,
            ),
            F = eW(e0, h.__scopeNavigationMenu),
            [B, H] = (0, er.useState)(null),
            [U, K] = (0, er.useState)(null),
            q = B ? (null == B ? void 0 : B.width) + "px" : void 0,
            Y = B ? (null == B ? void 0 : B.height) + "px" : void 0,
            X = !!A.value,
            Q = X ? A.value : A.previousValue;
          return (
            $322c88a641701f3b$var$useResizeObserver(U, () => {
              U && H({ width: U.offsetWidth, height: U.offsetHeight });
            }),
            (0, er.createElement)(
              eS.WV.div,
              (0, ew.Z)(
                {
                  "data-state": $322c88a641701f3b$var$getOpenState(X),
                  "data-orientation": A.orientation,
                },
                y,
                {
                  ref: N,
                  style: {
                    pointerEvents: !X && A.isRootMenu ? "none" : void 0,
                    "--radix-navigation-menu-viewport-width": q,
                    "--radix-navigation-menu-viewport-height": Y,
                    ...y.style,
                  },
                  onPointerEnter: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    h.onPointerEnter,
                    A.onContentEnter,
                  ),
                  onPointerLeave: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                    h.onPointerLeave,
                    $322c88a641701f3b$var$whenMouse(A.onContentLeave),
                  ),
                },
              ),
              Array.from(F.items).map(
                ([h, { ref: g, forceMount: _, ...b }]) => {
                  let y = Q === h;
                  return (0, er.createElement)(
                    $921a889cee6df7e8$export$99c2b779aa4e8b8b,
                    { key: h, present: _ || y },
                    (0, er.createElement)(
                      e6,
                      (0, ew.Z)({}, b, {
                        ref: $6ed0406888f73fc4$export$43e446d32b3d21af(
                          g,
                          (h) => {
                            y && h && K(h);
                          },
                        ),
                      }),
                    ),
                  );
                },
              ),
            )
          );
        }),
        e9 = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, ...b } = h,
            y = ez("FocusGroup", _);
          return (0, er.createElement)(
            eM.Provider,
            { scope: _ },
            (0, er.createElement)(
              eM.Slot,
              { scope: _ },
              (0, er.createElement)(
                eS.WV.div,
                (0, ew.Z)({ dir: y.dir }, b, { ref: g }),
              ),
            ),
          );
        }),
        e7 = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        te = (0, er.forwardRef)((h, g) => {
          let { __scopeNavigationMenu: _, ...b } = h,
            y = eI(_),
            A = ez("FocusGroupItem", _);
          return (0, er.createElement)(
            eM.ItemSlot,
            { scope: _ },
            (0, er.createElement)(
              eS.WV.button,
              (0, ew.Z)({}, b, {
                ref: g,
                onKeyDown: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  h.onKeyDown,
                  (h) => {
                    let g = ["Home", "End", ...e7].includes(h.key);
                    if (g) {
                      let g = y().map((h) => h.ref.current),
                        _ = "rtl" === A.dir ? "ArrowRight" : "ArrowLeft";
                      if (
                        ([_, "ArrowUp", "End"].includes(h.key) && g.reverse(),
                        e7.includes(h.key))
                      ) {
                        let _ = g.indexOf(h.currentTarget);
                        g = g.slice(_ + 1);
                      }
                      setTimeout(() => $322c88a641701f3b$var$focusFirst(g)),
                        h.preventDefault();
                    }
                  },
                ),
              }),
            ),
          );
        });
      function $322c88a641701f3b$var$getTabbableCandidates(h) {
        let g = [],
          _ = document.createTreeWalker(h, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (h) => {
              let g = "INPUT" === h.tagName && "hidden" === h.type;
              return h.disabled || h.hidden || g
                ? NodeFilter.FILTER_SKIP
                : h.tabIndex >= 0
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        for (; _.nextNode(); ) g.push(_.currentNode);
        return g;
      }
      function $322c88a641701f3b$var$focusFirst(h) {
        let g = document.activeElement;
        return h.some(
          (h) => h === g || (h.focus(), document.activeElement !== g),
        );
      }
      function $322c88a641701f3b$var$useResizeObserver(h, g) {
        let _ = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(g);
        eP(() => {
          let g = 0;
          if (h) {
            let b = new ResizeObserver(() => {
              cancelAnimationFrame(g), (g = window.requestAnimationFrame(_));
            });
            return (
              b.observe(h),
              () => {
                window.cancelAnimationFrame(g), b.unobserve(h);
              }
            );
          }
        }, [h, _]);
      }
      function $322c88a641701f3b$var$getOpenState(h) {
        return h ? "open" : "closed";
      }
      function $322c88a641701f3b$var$makeTriggerId(h, g) {
        return `${h}-trigger-${g}`;
      }
      function $322c88a641701f3b$var$makeContentId(h, g) {
        return `${h}-content-${g}`;
      }
      function $322c88a641701f3b$var$whenMouse(h) {
        return (g) => ("mouse" === g.pointerType ? h(g) : void 0);
      }
      var tt = _(37519),
        tn = _(54463),
        tr = _(46609),
        ti = _(84297);
      let to = (0, ti.Z)("Wallet", [
        ["path", { d: "M21 12V7H5a2 2 0 0 1 0-4h14v4", key: "195gfw" }],
        ["path", { d: "M3 5v14a2 2 0 0 0 2 2h16v-5", key: "195n9w" }],
        ["path", { d: "M18 12a2 2 0 0 0 0 4h4v-4Z", key: "vllfpd" }],
      ]);
      var ta = _(67884),
        ts = _(13766),
        tl = _(13542),
        tu = _(82701);
      function DesktopNavigation() {
        let h = (0, ec.useRouter)(),
          [g, _] = (0, er.useState)(!1),
          { openSalesForm: b } = (0, er.useContext)(tt.G);
        return (
          (0, er.useEffect)(() => {
            let handleScroll = () => {
              window.scrollY > tp && !g && _(!0),
                window.scrollY < tp && g && _(!1);
            };
            return (
              window.addEventListener("scroll", handleScroll),
              () => window.removeEventListener("scroll", handleScroll)
            );
          }, [g]),
          (0, N.jsxs)(eU, {
            className: eb().navigation,
            delayDuration: 0,
            children: [
              (0, N.jsxs)(
                ey.E.div,
                {
                  className: eb().island,
                  layout: !0,
                  children: [
                    (0, N.jsxs)(eZ, {
                      className: eb().navbar,
                      children: [
                        (0, N.jsx)(tc, {
                          children: (0, N.jsx)(td, {
                            href: "/",
                            children: "Home",
                          }),
                        }),
                        (0, N.jsx)(NavigationDropdown, {
                          title: "Solutions",
                          children: (0, N.jsxs)(DropdownLinks, {
                            children: [
                              (0, N.jsx)(tf, {
                                icon: (0, N.jsx)(tn.Z, {}),
                                href: "/solutions/pci",
                                title: "PCI Compliance",
                                children:
                                  "Become PCI DSS compliant in days, not months",
                              }),
                              (0, N.jsx)(tf, {
                                icon: (0, N.jsx)(tr.Z, {}),
                                href: "/solutions/encryption-as-a-service",
                                title: "Encryption as a Service",
                                children:
                                  "Secure building blocks to encrypt, process and share sensitive data",
                              }),
                              (0, N.jsx)(tf, {
                                onClick: (h) => {
                                  h.preventDefault(),
                                    b({ context: "Nav — CTA" });
                                },
                                icon: (0, N.jsx)(to, {}),
                                href: "#",
                                title: "Crypto Custody",
                                children:
                                  "Secure and process wallet keys without becoming a custodian",
                              }),
                            ],
                          }),
                        }),
                        (0, N.jsx)(tc, {
                          children: (0, N.jsx)(td, {
                            href: "/customers",
                            children: "Customers",
                          }),
                        }),
                        (0, N.jsx)(tc, {
                          children: (0, N.jsx)(td, {
                            href: "/pricing",
                            children: "Pricing",
                          }),
                        }),
                        (0, N.jsx)(NavigationDropdown, {
                          title: "Resources",
                          children: (0, N.jsxs)(DropdownLinks, {
                            children: [
                              (0, N.jsx)(tf, {
                                icon: (0, N.jsx)(ta.Z, {}),
                                title: "Blog",
                                href: "/blog",
                                children: "Read our latest news and updates",
                              }),
                              (0, N.jsx)(tf, {
                                icon: (0, N.jsx)(ts.Z, {}),
                                title: "Papers",
                                href: "/papers",
                                children:
                                  "Our collection of Cryptography papers",
                              }),
                              (0, N.jsx)(tf, {
                                icon: (0, N.jsx)(tl.Z, {}),
                                title: "Guides",
                                href: "https://docs.evervault.com/guides",
                                children:
                                  "Get started with our Developer Guides",
                              }),
                            ],
                          }),
                        }),
                        (0, N.jsx)(tc, {
                          children: (0, N.jsx)(td, {
                            href: "https://docs.evervault.com",
                            children: "Docs",
                          }),
                        }),
                      ],
                    }),
                    (0, N.jsx)(ex.M, {
                      children: g && (0, N.jsx)(GetStartedButton, {}),
                    }),
                  ],
                },
                h.asPath,
              ),
              (0, N.jsx)("div", {
                className: eb().viewportPosition,
                children: (0, N.jsx)(e5, { className: eb().viewport }),
              }),
            ],
          })
        );
      }
      let tc = (0, er.forwardRef)(function (h, g) {
          let { className: _, ...b } = h,
            y = [eb().item, _].filter(Boolean).join(" ");
          return (0, N.jsx)(eq, {
            asChild: !0,
            children: (0, N.jsx)(ey.E.li, {
              ref: g,
              className: y,
              layout: !0,
              ...b,
            }),
          });
        }),
        td = (0, er.forwardRef)(function (h, g) {
          let { className: _, ...b } = h,
            y = [eb().link, _].filter(Boolean).join(" ");
          return (0, N.jsx)(eQ, {
            ref: g,
            className: y,
            asChild: !0,
            children: (0, N.jsx)(ep(), { ...b }),
          });
        });
      function NavigationDropdown(h) {
        let { title: g, children: _ } = h;
        return (0, N.jsxs)(tc, {
          children: [
            (0, N.jsx)(eX, {
              onClick: (h) => {
                h.preventDefault();
              },
              className: eb().trigger,
              children: g,
            }),
            (0, N.jsx)(e1, { className: eb().content, children: _ }),
          ],
        });
      }
      let tf = (0, er.forwardRef)(function (h, g) {
        let { href: _, icon: b, title: y, children: A, ...F } = h;
        return (0, N.jsx)(eQ, {
          className: eb().dropdownLink,
          asChild: !0,
          children: (0, N.jsxs)(ep(), {
            ref: g,
            href: _,
            ...F,
            children: [
              (0, N.jsx)("div", {
                className: eb().dropdownLinkIcon,
                children: b,
              }),
              (0, N.jsxs)("div", {
                className: eb().dropdownLinkLabels,
                children: [
                  (0, N.jsx)("h6", { children: y }),
                  (0, N.jsx)("p", { children: A }),
                ],
              }),
              (0, N.jsx)("div", {
                className: eb().dropdownLinkArrow,
                children: (0, N.jsx)(tu.Z, {}),
              }),
            ],
          }),
        });
      });
      function DropdownLinks(h) {
        let { children: g } = h;
        return (0, N.jsx)("div", {
          className: eb().dropdownLinks,
          children: g,
        });
      }
      let tp = 70;
      function GetStartedButton() {
        let { openSalesForm: h } = (0, er.useContext)(tt.G);
        return (0, N.jsx)(tc, {
          children: (0, N.jsx)(eQ, {
            asChild: !0,
            children: (0, N.jsx)(ey.E.button, {
              initial: { x: 20 },
              animate: { x: 0 },
              exit: { x: 20, width: 0 },
              className: eb().getStarted,
              onClick: () => h({ context: "Nav — CTA" }),
              children: (0, N.jsx)("span", {
                className: eb().getStartedInner,
                children: "API docs",
              }),
            }),
          }),
        });
      }
      var th = _(8971);
      function MobileNavigation(h) {
        let { isOpen: g } = h,
          { openSalesForm: _ } = (0, er.useContext)(tt.G);
        return (0, N.jsx)(N.Fragment, {
          children: (0, N.jsx)(ex.M, {
            children:
              g &&
              (0, N.jsxs)(ey.E.div, {
                className: eb().navigationMobile,
                initial: { opacity: 0, y: -10 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -10 },
                transition: { duration: 0.3 },
                children: [
                  (0, N.jsx)(ep(), {
                    href: "/",
                    legacyBehavior: !0,
                    children: (0, N.jsx)("div", {
                      className: eb().navigationItemMobile,
                      children: (0, N.jsx)("a", { children: "Home" }),
                    }),
                  }),
                  (0, N.jsxs)(MobileDropdownMenu, {
                    title: "Solutions",
                    children: [
                      (0, N.jsx)(MobileDropdownMenuLink, {
                        icon: (0, N.jsx)(tn.Z, {}),
                        title: "PCI Compliance",
                        href: "/solutions/pci",
                      }),
                      (0, N.jsx)(MobileDropdownMenuLink, {
                        icon: (0, N.jsx)(tr.Z, {}),
                        title: "Encryption as a Service",
                        href: "/solutions/encryption-as-a-service",
                      }),
                      (0, N.jsx)(MobileDropdownMenuLink, {
                        icon: (0, N.jsx)(to, {}),
                        title: "Crypto Custody",
                        pill: "API docs",
                        href: "#",
                        onClick: (h) => {
                          h.preventDefault(), _({});
                        },
                      }),
                    ],
                  }),
                  (0, N.jsx)(ep(), {
                    href: "/customers",
                    legacyBehavior: !0,
                    children: (0, N.jsx)("div", {
                      className: eb().navigationItemMobile,
                      children: (0, N.jsx)("a", { children: "Customers" }),
                    }),
                  }),
                  (0, N.jsx)(ep(), {
                    href: "/pricing",
                    legacyBehavior: !0,
                    children: (0, N.jsx)("div", {
                      className: eb().navigationItemMobile,
                      children: (0, N.jsx)("a", { children: "Pricing" }),
                    }),
                  }),
                  (0, N.jsxs)(MobileDropdownMenu, {
                    title: "Resources",
                    children: [
                      (0, N.jsx)(MobileDropdownMenuLink, {
                        icon: (0, N.jsx)(ta.Z, {}),
                        title: "Blog",
                        href: "/blog",
                      }),
                      (0, N.jsx)(MobileDropdownMenuLink, {
                        icon: (0, N.jsx)(ts.Z, {}),
                        title: "Papers",
                        href: "/papers",
                      }),
                      (0, N.jsx)(MobileDropdownMenuLink, {
                        icon: (0, N.jsx)(tl.Z, {}),
                        title: "Guides",
                        href: "https://docs.evervault.com/guides",
                      }),
                    ],
                  }),
                  (0, N.jsx)(ep(), {
                    href: "/blog",
                    legacyBehavior: !0,
                    children: (0, N.jsx)("div", {
                      className: eb().navigationItemMobile,
                      children: (0, N.jsx)("a", { children: "Blog" }),
                    }),
                  }),
                  (0, N.jsx)("a", {
                    href: "https://docs.evervault.com",
                    target: "_blank",
                    children: (0, N.jsx)("div", {
                      className: eb().navigationItemMobile,
                      children: "Docs",
                    }),
                  }),
                ],
              }),
          }),
        });
      }
      function MobileDropdownMenu(h) {
        let { title: g, children: _ } = h,
          [b, y] = (0, er.useState)(!1);
        return (0, N.jsxs)(N.Fragment, {
          children: [
            (0, N.jsxs)("div", {
              className: eb().navigationItemMobile,
              onClick: () => y(!b),
              children: [
                (0, N.jsx)("div", {
                  className: eb().mobileDropdown,
                  children: g,
                }),
                (0, N.jsx)(ey.E.div, {
                  animate: { rotate: b ? 180 : 0 },
                  children: (0, N.jsx)(th.Z, {}),
                }),
              ],
            }),
            (0, N.jsx)(ey.E.div, {
              className: eb().useCasesMenuMobile,
              initial: { height: 0 },
              animate: { height: b ? "auto" : 0, opacity: b ? 1 : 0 },
              style: { pointerEvents: b ? "auto" : "none" },
              transition: { duration: 0.4 },
              children: _,
            }),
          ],
        });
      }
      function MobileDropdownMenuLink(h) {
        let { title: g, icon: _, pill: b, ...y } = h;
        return (0, N.jsxs)(ep(), {
          ...y,
          className: eb().navigationItemMobile,
          children: [
            _ && (0, N.jsx)("div", { className: eb().mobileIcon, children: _ }),
            (0, N.jsx)("span", { children: g }),
            b && (0, N.jsx)("div", { className: eb().pill, children: b }),
          ],
        });
      }
      var tm = _(28378),
        tg = _.n(tm);
      function Header(h) {
        let { lightTheme: g } = h,
          { openSalesForm: _ } = (0, er.useContext)(tt.G),
          [b, y] = (0, er.useState)(!1),
          { events: A } = (0, ec.useRouter)();
        return (
          (0, er.useEffect)(() => {
            A.on("routeChangeComplete", () => {
              y(!1);
            });
          }, [A]),
          (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(MobileNavigation, { isOpen: b }),
              (0, N.jsxs)("header", {
                className: tg().header,
                "data-light-theme": g,
                children: [
                  (0, N.jsx)(ep(), {
                    href: "/",
                    legacyBehavior: !0,
                    children: (0, N.jsx)("img", {
                      src: g
                        ? "/images/logo-color.svg"
                        : "/images/logo-white.svg",
                      className: tg().logo,
                    }),
                  }),
                  (0, N.jsx)(ep(), {
                    href: "/",
                    legacyBehavior: !0,
                    children: (0, N.jsx)("img", {
                      src: g
                        ? "/images/icon-color.svg"
                        : "/images/icon-white.svg",
                      className: tg().logoMobile,
                    }),
                  }),
                  (0, N.jsx)(DesktopNavigation, {}),
                  (0, N.jsxs)("div", {
                    className: tg().group,
                    children: [
                      (0, N.jsx)(ev.Z, {
                        type: "transparent",
                        href: "https://app.evervault.com/login",
                        children: "Log in",
                      }),
                      (0, N.jsx)(ev.Z, {
                        onClick: () => _({ context: "Nav — CTA" }),
                        children: "API docs",
                      }),
                      (0, N.jsx)("button", {
                        className: tg().hamburger,
                        onClick: () => y((h) => !h),
                        children: (0, N.jsxs)("svg", {
                          width: "14",
                          height: "12",
                          viewBox: "0 0 14 12",
                          fill: "none",
                          children: [
                            (0, N.jsx)("path", {
                              d: "M0 1H14",
                              stroke: "white",
                            }),
                            (0, N.jsx)("path", {
                              d: "M0 6H14",
                              stroke: "white",
                            }),
                            (0, N.jsx)("path", {
                              d: "M0 11H14",
                              stroke: "white",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      _(48400), _(70415);
      let tv = { data: "" },
        t = (h) =>
          "object" == typeof window
            ? (
                (h ? h.querySelector("#_goober") : window._goober) ||
                Object.assign(
                  (h || document.head).appendChild(
                    document.createElement("style"),
                  ),
                  { innerHTML: " ", id: "_goober" },
                )
              ).firstChild
            : h || tv,
        t_ =
          /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        tb = /\/\*[^]*?\*\/|  +/g,
        ty = /\n+/g,
        o = (h, g) => {
          let _ = "",
            b = "",
            y = "";
          for (let A in h) {
            let N = h[A];
            "@" == A[0]
              ? "i" == A[1]
                ? (_ = A + " " + N + ";")
                : (b +=
                    "f" == A[1]
                      ? o(N, A)
                      : A + "{" + o(N, "k" == A[1] ? "" : g) + "}")
              : "object" == typeof N
                ? (b += o(
                    N,
                    g
                      ? g.replace(/([^,])+/g, (h) =>
                          A.replace(/(^:.*)|([^,])+/g, (g) =>
                            /&/.test(g)
                              ? g.replace(/&/g, h)
                              : h
                                ? h + " " + g
                                : g,
                          ),
                        )
                      : A,
                  ))
                : null != N &&
                  ((A = /^--/.test(A)
                    ? A
                    : A.replace(/[A-Z]/g, "-$&").toLowerCase()),
                  (y += o.p ? o.p(A, N) : A + ":" + N + ";"));
          }
          return _ + (g && y ? g + "{" + y + "}" : y) + b;
        },
        tx = {},
        s = (h) => {
          if ("object" == typeof h) {
            let g = "";
            for (let _ in h) g += _ + s(h[_]);
            return g;
          }
          return h;
        },
        i = (h, g, _, b, y) => {
          var A;
          let N = s(h),
            F =
              tx[N] ||
              (tx[N] = ((h) => {
                let g = 0,
                  _ = 11;
                for (; g < h.length; ) _ = (101 * _ + h.charCodeAt(g++)) >>> 0;
                return "go" + _;
              })(N));
          if (!tx[F]) {
            let g =
              N !== h
                ? h
                : ((h) => {
                    let g,
                      _,
                      b = [{}];
                    for (; (g = t_.exec(h.replace(tb, ""))); )
                      g[4]
                        ? b.shift()
                        : g[3]
                          ? ((_ = g[3].replace(ty, " ").trim()),
                            b.unshift((b[0][_] = b[0][_] || {})))
                          : (b[0][g[1]] = g[2].replace(ty, " ").trim());
                    return b[0];
                  })(h);
            tx[F] = o(y ? { ["@keyframes " + F]: g } : g, _ ? "" : "." + F);
          }
          let B = _ && tx.g ? tx.g : null;
          return (
            _ && (tx.g = tx[F]),
            (A = tx[F]),
            B
              ? (g.data = g.data.replace(B, A))
              : -1 === g.data.indexOf(A) &&
                (g.data = b ? A + g.data : g.data + A),
            F
          );
        },
        p = (h, g, _) =>
          h.reduce((h, b, y) => {
            let A = g[y];
            if (A && A.call) {
              let h = A(_),
                g = (h && h.props && h.props.className) || (/^go/.test(h) && h);
              A = g
                ? "." + g
                : h && "object" == typeof h
                  ? h.props
                    ? ""
                    : o(h, "")
                  : !1 === h
                    ? ""
                    : h;
            }
            return h + b + (null == A ? "" : A);
          }, "");
      function u(h) {
        let g = this || {},
          _ = h.call ? h(g.p) : h;
        return i(
          _.unshift
            ? _.raw
              ? p(_, [].slice.call(arguments, 1), g.p)
              : _.reduce(
                  (h, _) => Object.assign(h, _ && _.call ? _(g.p) : _),
                  {},
                )
            : _,
          t(g.target),
          g.g,
          g.o,
          g.k,
        );
      }
      u.bind({ g: 1 });
      let tw,
        tC,
        tS,
        tE = u.bind({ k: 1 });
      function j(h, g) {
        let _ = this || {};
        return function () {
          let b = arguments;
          function a(y, A) {
            let N = Object.assign({}, y),
              F = N.className || a.className;
            (_.p = Object.assign({ theme: tC && tC() }, N)),
              (_.o = / *go\d+/.test(F)),
              (N.className = u.apply(_, b) + (F ? " " + F : "")),
              g && (N.ref = A);
            let B = h;
            return (
              h[0] && ((B = N.as || h), delete N.as),
              tS && B[0] && tS(N),
              tw(B, N)
            );
          }
          return g ? g(a) : a;
        };
      }
      var W = (h) => "function" == typeof h,
        T = (h, g) => (W(h) ? h(g) : h),
        tP = ((b = 0), () => (++b).toString()),
        dist_b = () => {
          if (void 0 === y && "u" > typeof window) {
            let h = matchMedia("(prefers-reduced-motion: reduce)");
            y = !h || h.matches;
          }
          return y;
        },
        tT = new Map(),
        $ = (h) => {
          if (tT.has(h)) return;
          let g = setTimeout(() => {
            tT.delete(h), dist_u({ type: 4, toastId: h });
          }, 1e3);
          tT.set(h, g);
        },
        J = (h) => {
          let g = tT.get(h);
          g && clearTimeout(g);
        },
        v = (h, g) => {
          switch (g.type) {
            case 0:
              return { ...h, toasts: [g.toast, ...h.toasts].slice(0, 20) };
            case 1:
              return (
                g.toast.id && J(g.toast.id),
                {
                  ...h,
                  toasts: h.toasts.map((h) =>
                    h.id === g.toast.id ? { ...h, ...g.toast } : h,
                  ),
                }
              );
            case 2:
              let { toast: _ } = g;
              return h.toasts.find((h) => h.id === _.id)
                ? v(h, { type: 1, toast: _ })
                : v(h, { type: 0, toast: _ });
            case 3:
              let { toastId: b } = g;
              return (
                b
                  ? $(b)
                  : h.toasts.forEach((h) => {
                      $(h.id);
                    }),
                {
                  ...h,
                  toasts: h.toasts.map((h) =>
                    h.id === b || void 0 === b ? { ...h, visible: !1 } : h,
                  ),
                }
              );
            case 4:
              return void 0 === g.toastId
                ? { ...h, toasts: [] }
                : { ...h, toasts: h.toasts.filter((h) => h.id !== g.toastId) };
            case 5:
              return { ...h, pausedAt: g.time };
            case 6:
              let y = g.time - (h.pausedAt || 0);
              return {
                ...h,
                pausedAt: void 0,
                toasts: h.toasts.map((h) => ({
                  ...h,
                  pauseDuration: h.pauseDuration + y,
                })),
              };
          }
        },
        tj = [],
        tk = { toasts: [], pausedAt: void 0 },
        dist_u = (h) => {
          (tk = v(tk, h)),
            tj.forEach((h) => {
              h(tk);
            });
        },
        t$ = {
          blank: 4e3,
          error: 4e3,
          success: 2e3,
          loading: 1 / 0,
          custom: 4e3,
        },
        I = (h = {}) => {
          let [g, _] = (0, er.useState)(tk);
          (0, er.useEffect)(
            () => (
              tj.push(_),
              () => {
                let h = tj.indexOf(_);
                h > -1 && tj.splice(h, 1);
              }
            ),
            [g],
          );
          let b = g.toasts.map((g) => {
            var _, b;
            return {
              ...h,
              ...h[g.type],
              ...g,
              duration:
                g.duration ||
                (null == (_ = h[g.type]) ? void 0 : _.duration) ||
                (null == h ? void 0 : h.duration) ||
                t$[g.type],
              style: {
                ...h.style,
                ...(null == (b = h[g.type]) ? void 0 : b.style),
                ...g.style,
              },
            };
          });
          return { ...g, toasts: b };
        },
        G = (h, g = "blank", _) => ({
          createdAt: Date.now(),
          visible: !0,
          type: g,
          ariaProps: { role: "status", "aria-live": "polite" },
          message: h,
          pauseDuration: 0,
          ..._,
          id: (null == _ ? void 0 : _.id) || tP(),
        }),
        dist_h = (h) => (g, _) => {
          let b = G(g, h, _);
          return dist_u({ type: 2, toast: b }), b.id;
        },
        dist_n = (h, g) => dist_h("blank")(h, g);
      (dist_n.error = dist_h("error")),
        (dist_n.success = dist_h("success")),
        (dist_n.loading = dist_h("loading")),
        (dist_n.custom = dist_h("custom")),
        (dist_n.dismiss = (h) => {
          dist_u({ type: 3, toastId: h });
        }),
        (dist_n.remove = (h) => dist_u({ type: 4, toastId: h })),
        (dist_n.promise = (h, g, _) => {
          let b = dist_n.loading(g.loading, {
            ..._,
            ...(null == _ ? void 0 : _.loading),
          });
          return (
            h
              .then(
                (h) => (
                  dist_n.success(T(g.success, h), {
                    id: b,
                    ..._,
                    ...(null == _ ? void 0 : _.success),
                  }),
                  h
                ),
              )
              .catch((h) => {
                dist_n.error(T(g.error, h), {
                  id: b,
                  ..._,
                  ...(null == _ ? void 0 : _.error),
                });
              }),
            h
          );
        });
      var Z = (h, g) => {
          dist_u({ type: 1, toast: { id: h, height: g } });
        },
        ee = () => {
          dist_u({ type: 5, time: Date.now() });
        },
        D = (h) => {
          let { toasts: g, pausedAt: _ } = I(h);
          (0, er.useEffect)(() => {
            if (_) return;
            let h = Date.now(),
              b = g.map((g) => {
                if (g.duration === 1 / 0) return;
                let _ = (g.duration || 0) + g.pauseDuration - (h - g.createdAt);
                if (_ < 0) {
                  g.visible && dist_n.dismiss(g.id);
                  return;
                }
                return setTimeout(() => dist_n.dismiss(g.id), _);
              });
            return () => {
              b.forEach((h) => h && clearTimeout(h));
            };
          }, [g, _]);
          let b = (0, er.useCallback)(() => {
              _ && dist_u({ type: 6, time: Date.now() });
            }, [_]),
            y = (0, er.useCallback)(
              (h, _) => {
                let {
                    reverseOrder: b = !1,
                    gutter: y = 8,
                    defaultPosition: A,
                  } = _ || {},
                  N = g.filter(
                    (g) => (g.position || A) === (h.position || A) && g.height,
                  ),
                  F = N.findIndex((g) => g.id === h.id),
                  B = N.filter((h, g) => g < F && h.visible).length;
                return N.filter((h) => h.visible)
                  .slice(...(b ? [B + 1] : [0, B]))
                  .reduce((h, g) => h + (g.height || 0) + y, 0);
              },
              [g],
            );
          return {
            toasts: g,
            handlers: {
              updateHeight: Z,
              startPause: ee,
              endPause: b,
              calculateOffset: y,
            },
          };
        },
        tR = tE`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
        tA = tE`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        tO = tE`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
        tD = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(h) => h.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${tA} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(h) => h.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${tO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
        tL = tE`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
        tM = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(h) => h.secondary || "#e0e0e0"};
  border-right-color: ${(h) => h.primary || "#616161"};
  animation: ${tL} 1s linear infinite;
`,
        tI = tE`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
        tN = tE`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
        tV = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(h) => h.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${tI} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${tN} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(h) => h.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
        tF = j("div")`
  position: absolute;
`,
        tB = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
        tz = tE`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        tH = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${tz} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
        M = ({ toast: h }) => {
          let { icon: g, type: _, iconTheme: b } = h;
          return void 0 !== g
            ? "string" == typeof g
              ? er.createElement(tH, null, g)
              : g
            : "blank" === _
              ? null
              : er.createElement(
                  tB,
                  null,
                  er.createElement(tM, { ...b }),
                  "loading" !== _ &&
                    er.createElement(
                      tF,
                      null,
                      "error" === _
                        ? er.createElement(tD, { ...b })
                        : er.createElement(tV, { ...b }),
                    ),
                );
        },
        ye = (h) => `
0% {transform: translate3d(0,${-200 * h}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
        ge = (h) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * h}%,-1px) scale(.6); opacity:0;}
`,
        tW = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
        tU = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
        Ae = (h, g) => {
          let _ = h.includes("top") ? 1 : -1,
            [b, y] = dist_b()
              ? [
                  "0%{opacity:0;} 100%{opacity:1;}",
                  "0%{opacity:1;} 100%{opacity:0;}",
                ]
              : [ye(_), ge(_)];
          return {
            animation: g
              ? `${tE(b)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
              : `${tE(y)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
          };
        },
        tZ = er.memo(({ toast: h, position: g, style: _, children: b }) => {
          let y = h.height
              ? Ae(h.position || g || "top-center", h.visible)
              : { opacity: 0 },
            A = er.createElement(M, { toast: h }),
            N = er.createElement(tU, { ...h.ariaProps }, T(h.message, h));
          return er.createElement(
            tW,
            { className: h.className, style: { ...y, ..._, ...h.style } },
            "function" == typeof b
              ? b({ icon: A, message: N })
              : er.createElement(er.Fragment, null, A, N),
          );
        });
      (A = er.createElement),
        (o.p = void 0),
        (tw = A),
        (tC = void 0),
        (tS = void 0);
      var Ee = ({
          id: h,
          className: g,
          style: _,
          onHeightUpdate: b,
          children: y,
        }) => {
          let A = er.useCallback(
            (g) => {
              if (g) {
                let i = () => {
                  b(h, g.getBoundingClientRect().height);
                };
                i(),
                  new MutationObserver(i).observe(g, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                  });
              }
            },
            [h, b],
          );
          return er.createElement("div", { ref: A, className: g, style: _ }, y);
        },
        Re = (h, g) => {
          let _ = h.includes("top"),
            b = h.includes("center")
              ? { justifyContent: "center" }
              : h.includes("right")
                ? { justifyContent: "flex-end" }
                : {};
          return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: dist_b()
              ? void 0
              : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${g * (_ ? 1 : -1)}px)`,
            ...(_ ? { top: 0 } : { bottom: 0 }),
            ...b,
          };
        },
        tG = u`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
        Ie = ({
          reverseOrder: h,
          position: g = "top-center",
          toastOptions: _,
          gutter: b,
          children: y,
          containerStyle: A,
          containerClassName: N,
        }) => {
          let { toasts: F, handlers: B } = D(_);
          return er.createElement(
            "div",
            {
              style: {
                position: "fixed",
                zIndex: 9999,
                top: 16,
                left: 16,
                right: 16,
                bottom: 16,
                pointerEvents: "none",
                ...A,
              },
              className: N,
              onMouseEnter: B.startPause,
              onMouseLeave: B.endPause,
            },
            F.map((_) => {
              let A = _.position || g,
                N = Re(
                  A,
                  B.calculateOffset(_, {
                    reverseOrder: h,
                    gutter: b,
                    defaultPosition: g,
                  }),
                );
              return er.createElement(
                Ee,
                {
                  id: _.id,
                  key: _.id,
                  onHeightUpdate: B.updateHeight,
                  className: _.visible ? tG : "",
                  style: N,
                },
                "custom" === _.type
                  ? T(_.message, _)
                  : y
                    ? y(_)
                    : er.createElement(tZ, { toast: _, position: A }),
              );
            }),
          );
        },
        tK = _(25321);
      function ToastContainer() {
        return (0, N.jsx)(Ie, {
          position: "bottom-right",
          containerStyle: { top: 32, right: 32, left: 32, bottom: 32 },
          toastOptions: {
            className: "py-8 px-12 color-body",
            style: { boxShadow: "0 8px 64px rgb(0 0 0 / 18%)" },
            success: { icon: (0, N.jsx)(tK.ZP.Badge, {}) },
            error: { icon: (0, N.jsx)(tK.ZP.BadgeError, {}) },
          },
        });
      }
      _(94184);
      var hooks_useUTMCookie = function () {
        let [h, g] = (0, er.useState)(!1);
        (0, er.useEffect)(() => {
          if (!h) {
            let h = new URL(window.location.href),
              _ = new URLSearchParams(h.search),
              b = parseReferrer(document.referrer),
              y = "";
            _.forEach((h, g) => {
              "utm_" === g.substring(0, 4) &&
                (y += "".concat(g, "=").concat(h, "&"));
            }),
              0 == y.length &&
                (y +=
                  "utm_source=direct&utm_medium=direct&utm_campaign=direct&utm_term=direct&utm_content=direct"),
              b && (y += "&referrer=".concat(b.hostname + b.pathname)),
              encodeAndSetCookie(y),
              g(!0);
          }
        });
        let encodeAndSetCookie = (h) => {
            let g = btoa(h);
            Q.Z.set("evervault_utm", g, {
              expires: 14,
              domain: ".evervault.com",
              sameSite: "lax",
              secure: !0,
            });
          },
          parseReferrer = (h) => {
            try {
              return new URL(h);
            } catch (h) {
              return;
            }
          };
      };
      let tq = en()(() => _.e(1978).then(_.bind(_, 41978)), {
          loadableGenerated: { webpack: () => [41978] },
          ssr: !1,
        }),
        tY =
          '\n  :root {\n    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";\n    --font-family-base: '
            .concat(
              B().style.fontFamily,
              ", var(--system-fonts);\n    --font-family-headings: ",
            )
            .concat(
              U().style.fontFamily,
              ", var(--system-fonts);\n    --font-family-monospace: ",
            )
            .concat(q().style.fontFamily, ", monospace;\n  }\n");
      function MyApp(h) {
        let { Component: g, pageProps: _ } = h,
          { events: b, query: y } = (0, ec.useRouter)();
        hooks_useUTMCookie();
        let [A, F] = (0, er.useState)(Q.Z.get("cookie-directive"));
        return (0, N.jsx)(PlausibleProvider, {
          domain: "evervault.com",
          trackOutboundLinks: !0,
          enabled: !A || "accepted" === A,
          children: (0, N.jsxs)(IntercomProvider, {
            autoBoot: !0,
            appId: "dgsq17jc",
            shouldInitialize: !A || "accepted" === A,
            children: [
              (0, N.jsx)(X(), { id: tY.__hash, children: tY }),
              (0, N.jsx)(ed.Zf, { hidden: !(null == y ? void 0 : y.debug) }),
              (0, N.jsxs)(tt.Z, {
                children: [
                  (0, N.jsx)(ToastContainer, {}),
                  (0, N.jsx)(Header, { lightTheme: "light" === _.header }),
                  (0, N.jsx)(eg.Z, { enabled: !A || "accepted" === A }),
                  (0, N.jsx)(g, {
                    ..._,
                    className: (_ && null != _.className && _.className) || "",
                  }),
                  (0, N.jsx)(tq, { cookieDirective: A, setCookieDirective: F }),
                  (0, N.jsx)(Footer, {}),
                ],
              }),
            ],
          }),
        });
      }
    },
    91479: function () {},
    70415: function () {},
    48400: function () {},
    96232: function (h) {
      h.exports = {
        style: {
          fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
          fontStyle: "normal",
        },
        className: "__className_e66fe9",
      };
    },
    63676: function (h) {
      h.exports = {
        style: {
          fontFamily: "'__Roboto_Mono_829659', '__Roboto_Mono_Fallback_829659'",
          fontStyle: "normal",
        },
        className: "__className_829659",
      };
    },
    26434: function (h) {
      h.exports = {
        style: {
          fontFamily: "'__roobert_30c87b', '__roobert_Fallback_30c87b'",
        },
        className: "__className_30c87b",
      };
    },
    49246: function (h) {
      h.exports = {
        container: "Button_container__i_Vit",
        pulse: "Button_pulse__XxOVu",
      };
    },
    3766: function (h) {
      h.exports = {
        footer: "Footer_footer__o4_Ec",
        container: "Footer_container__Mn8SS container",
        navigation: "Footer_navigation__Yj_7L",
        list: "Footer_list__FsWR4",
        logo: "Footer_logo__ZNv_V",
        copyright: "Footer_copyright__sqw0C",
        copyrightContent: "Footer_copyrightContent__aDxfB container",
        status: "Footer_status__X2ZDd",
        copyrightBreak: "Footer_copyrightBreak__yeGun",
        complianceLink: "Footer_complianceLink__QDmX8",
      };
    },
    28378: function (h) {
      h.exports = {
        header: "Header_header__pXml_",
        logo: "Header_logo__sUWiP",
        hamburger: "Header_hamburger__X_hhy",
        logoMobile: "Header_logoMobile__MEikt",
        group: "Header_group__Kgpdq",
        animatedLink: "Header_animatedLink__Jb4dS",
        pill: "Header_pill__gpeGd",
      };
    },
    41570: function (h) {
      h.exports = {
        navigation: "Navigation_navigation__SaCR1",
        island: "Navigation_island__hx7CL",
        navbar: "Navigation_navbar__drXfa",
        item: "Navigation_item__hApMP",
        link: "Navigation_link__p_0Vi",
        trigger: "Navigation_trigger__w4v0H",
        dropdownLinks: "Navigation_dropdownLinks__kvtQ6",
        dropdownLink: "Navigation_dropdownLink__QeIWf",
        dropdownLinkIcon: "Navigation_dropdownLinkIcon__mfQHc",
        dropdownLinkArrow: "Navigation_dropdownLinkArrow__5heV6",
        dropdownLinkLabels: "Navigation_dropdownLinkLabels__y3Lqa",
        getStarted: "Navigation_getStarted__oTfVF",
        getStartedInner: "Navigation_getStartedInner__UDW_u",
        indicator: "Navigation_indicator__Ob8wz",
        fadeIn: "Navigation_fadeIn__5QaHZ",
        slideUp: "Navigation_slideUp__N348C",
        fadeOut: "Navigation_fadeOut__j_QRy",
        slideDown: "Navigation_slideDown__YJLBl",
        arrow: "Navigation_arrow__U08Kx",
        viewportPosition: "Navigation_viewportPosition__zEjBF",
        viewport: "Navigation_viewport__H3qwm",
        scaleIn: "Navigation_scaleIn__4neZY",
        scaleOut: "Navigation_scaleOut___jlp_",
        content: "Navigation_content__raRlm",
        enterFromLeft: "Navigation_enterFromLeft__Z5U4F",
        enterFromRight: "Navigation_enterFromRight__YaDeo",
        exitToLeft: "Navigation_exitToLeft__m_zSP",
        exitToRight: "Navigation_exitToRight__JodW_",
        navigationMobile: "Navigation_navigationMobile__SOXkZ",
        navigationItemMobile: "Navigation_navigationItemMobile__NwoRk",
        mobileDropdown: "Navigation_mobileDropdown__xMTIT",
        pill: "Navigation_pill__VH1um",
        useCasesMenuMobile: "Navigation_useCasesMenuMobile__3c1eV",
      };
    },
    61610: function (h) {
      h.exports = {
        container: "Input_container__FmRsd",
        input: "Input_input__MPP3N",
      };
    },
    97208: function (h) {
      h.exports = {
        container: "SalesForm_container__nWFvZ Text_light__lmRM0",
        overlay: "SalesForm_overlay__PzQ3I",
        panel: "SalesForm_panel__u87e3",
        closeButton: "SalesForm_closeButton__t_2rh",
        isLoadingOverlay: "SalesForm_isLoadingOverlay__laWHS",
        isFinishedOverlay: "SalesForm_isFinishedOverlay__6Xe66",
      };
    },
    61773: function (h) {
      h.exports = {
        container: "Select_container__Pe9g7",
        inputContainer: "Select_inputContainer__SO4Cv",
        selected: "Select_selected__2Tdrk",
        dropdown: "Select_dropdown__9JnWh",
        option: "Select_option__SgkOW",
        input: "Select_input__AJ7K2",
        carat: "Select_carat__mu09V",
        countryCodePlaceholder: "Select_countryCodePlaceholder__nwgSn",
      };
    },
    64788: function (h) {
      h.exports = {
        container: "TextInput_container__OsOWL",
        input: "TextInput_input__2ayV_",
      };
    },
    5152: function (h, g, _) {
      h.exports = _(1342);
    },
    41664: function (h, g, _) {
      h.exports = _(65170);
    },
    11163: function (h, g, _) {
      h.exports = _(59974);
    },
    4298: function (h, g, _) {
      h.exports = _(85354);
    },
    34155: function (h) {
      var g,
        _,
        b,
        y = (h.exports = {});
      function defaultSetTimout() {
        throw Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw Error("clearTimeout has not been defined");
      }
      function runTimeout(h) {
        if (g === setTimeout) return setTimeout(h, 0);
        if ((g === defaultSetTimout || !g) && setTimeout)
          return (g = setTimeout), setTimeout(h, 0);
        try {
          return g(h, 0);
        } catch (_) {
          try {
            return g.call(null, h, 0);
          } catch (_) {
            return g.call(this, h, 0);
          }
        }
      }
      !(function () {
        try {
          g = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
        } catch (h) {
          g = defaultSetTimout;
        }
        try {
          _ =
            "function" == typeof clearTimeout
              ? clearTimeout
              : defaultClearTimeout;
        } catch (h) {
          _ = defaultClearTimeout;
        }
      })();
      var A = [],
        N = !1,
        F = -1;
      function cleanUpNextTick() {
        N &&
          b &&
          ((N = !1),
          b.length ? (A = b.concat(A)) : (F = -1),
          A.length && drainQueue());
      }
      function drainQueue() {
        if (!N) {
          var h = runTimeout(cleanUpNextTick);
          N = !0;
          for (var g = A.length; g; ) {
            for (b = A, A = []; ++F < g; ) b && b[F].run();
            (F = -1), (g = A.length);
          }
          (b = null),
            (N = !1),
            (function (h) {
              if (_ === clearTimeout) return clearTimeout(h);
              if ((_ === defaultClearTimeout || !_) && clearTimeout)
                return (_ = clearTimeout), clearTimeout(h);
              try {
                _(h);
              } catch (g) {
                try {
                  return _.call(null, h);
                } catch (g) {
                  return _.call(this, h);
                }
              }
            })(h);
        }
      }
      function Item(h, g) {
        (this.fun = h), (this.array = g);
      }
      function noop() {}
      (y.nextTick = function (h) {
        var g = Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var _ = 1; _ < arguments.length; _++) g[_ - 1] = arguments[_];
        A.push(new Item(h, g)), 1 !== A.length || N || runTimeout(drainQueue);
      }),
        (Item.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (y.title = "browser"),
        (y.browser = !0),
        (y.env = {}),
        (y.argv = []),
        (y.version = ""),
        (y.versions = {}),
        (y.on = noop),
        (y.addListener = noop),
        (y.once = noop),
        (y.off = noop),
        (y.removeListener = noop),
        (y.removeAllListeners = noop),
        (y.emit = noop),
        (y.prependListener = noop),
        (y.prependOnceListener = noop),
        (y.listeners = function (h) {
          return [];
        }),
        (y.binding = function (h) {
          throw Error("process.binding is not supported");
        }),
        (y.cwd = function () {
          return "/";
        }),
        (y.chdir = function (h) {
          throw Error("process.chdir is not supported");
        }),
        (y.umask = function () {
          return 0;
        });
    },
    92703: function (h, g, _) {
      "use strict";
      var b = _(50414);
      function emptyFunction() {}
      function emptyFunctionWithReset() {}
      (emptyFunctionWithReset.resetWarningCache = emptyFunction),
        (h.exports = function () {
          function shim(h, g, _, y, A, N) {
            if (N !== b) {
              var F = Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
              );
              throw ((F.name = "Invariant Violation"), F);
            }
          }
          function getShim() {
            return shim;
          }
          shim.isRequired = shim;
          var h = {
            array: shim,
            bigint: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,
            any: shim,
            arrayOf: getShim,
            element: shim,
            elementType: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim,
            checkPropTypes: emptyFunctionWithReset,
            resetWarningCache: emptyFunction,
          };
          return (h.PropTypes = h), h;
        });
    },
    45697: function (h, g, _) {
      h.exports = _(92703)();
    },
    50414: function (h) {
      "use strict";
      h.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    41086: function (h, g, _) {
      "use strict";
      /*!
       * set-value <https://github.com/jonschlinkert/set-value>
       *
       * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var b = _(7853),
        y = _(36919),
        A = _(322),
        N = _(84642);
      function isValidKey(h) {
        return "__proto__" !== h && "constructor" !== h && "prototype" !== h;
      }
      h.exports = function (h, g, _) {
        if (
          !N(h) ||
          (Array.isArray(g) && (g = [].concat.apply([], g).join(".")),
          "string" != typeof g)
        )
          return h;
        for (
          var F = b(g, { sep: ".", brackets: !0 }).filter(isValidKey),
            B = F.length,
            H = -1,
            U = h;
          ++H < B;

        ) {
          var K = F[H];
          if (H !== B - 1) {
            N(U[K]) || (U[K] = {}), (U = U[K]);
            continue;
          }
          A(U[K]) && A(_) ? (U[K] = y({}, U[K], _)) : (U[K] = _);
        }
        return h;
      };
    },
    84642: function (h) {
      "use strict";
      /*!
       * is-extendable <https://github.com/jonschlinkert/is-extendable>
       *
       * Copyright (c) 2015, Jon Schlinkert.
       * Licensed under the MIT License.
       */ h.exports = function (h) {
        return null != h && ("object" == typeof h || "function" == typeof h);
      };
    },
    322: function (h, g, _) {
      "use strict";
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var b = _(47798);
      function isObjectObject(h) {
        return (
          !0 === b(h) && "[object Object]" === Object.prototype.toString.call(h)
        );
      }
      h.exports = function (h) {
        var g, _;
        return (
          !1 !== isObjectObject(h) &&
          "function" == typeof (g = h.constructor) &&
          !1 !== isObjectObject((_ = g.prototype)) &&
          !1 !== _.hasOwnProperty("isPrototypeOf")
        );
      };
    },
    7853: function (h, g, _) {
      "use strict";
      /*!
       * split-string <https://github.com/jonschlinkert/split-string>
       *
       * Copyright (c) 2015-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ var b = _(98071);
      function getClosingQuote(h, g, _, b) {
        var y = h.indexOf(g, _);
        return "\\" === h.charAt(y - 1) ? getClosingQuote(h, g, y + 1) : y;
      }
      h.exports = function (h, g, _) {
        if ("string" != typeof h) throw TypeError("expected a string");
        "function" == typeof g && ((_ = g), (g = null)),
          "string" == typeof g && (g = { sep: g });
        var y,
          A,
          N = b({ sep: "." }, g),
          F = N.quotes || ['"', "'", "`"];
        !0 === N.brackets
          ? (y = { "<": ">", "(": ")", "[": "]", "{": "}" })
          : N.brackets && (y = N.brackets);
        var B = [],
          H = [],
          U = [""],
          K = N.sep,
          q = h.length,
          Y = -1;
        function expected() {
          if (y && H.length) return y[H[H.length - 1]];
        }
        for (; ++Y < q; ) {
          var X,
            Q,
            et = h[Y],
            en = h[Y + 1],
            er = { val: et, idx: Y, arr: U, str: h };
          if ((B.push(er), "\\" === et)) {
            (er.val =
              !0 ===
              ((X = Y),
              "function" == typeof N.keepEscaping
                ? N.keepEscaping(h, X)
                : !0 === N.keepEscaping || "\\" === h[X + 1])
                ? et + en
                : en),
              (er.escaped = !0),
              "function" == typeof _ && _(er),
              (U[U.length - 1] += er.val),
              Y++;
            continue;
          }
          if (y && y[et]) {
            H.push(et);
            var ei = expected(),
              eo = Y + 1;
            if (-1 !== h.indexOf(ei, eo + 1))
              for (; H.length && eo < q; ) {
                var ea = h[++eo];
                if ("\\" === ea) {
                  ea++;
                  continue;
                }
                if (-1 !== F.indexOf(ea)) {
                  eo = getClosingQuote(h, ea, eo + 1);
                  continue;
                }
                if (
                  ((ei = expected()), H.length && -1 === h.indexOf(ei, eo + 1))
                )
                  break;
                if (y[ea]) {
                  H.push(ea);
                  continue;
                }
                ei === ea && H.pop();
              }
            if (-1 === (A = eo)) {
              U[U.length - 1] += et;
              continue;
            }
            (et = h.slice(Y, A + 1)), (er.val = et), (er.idx = Y = A);
          }
          if (-1 !== F.indexOf(et)) {
            if (-1 === (A = getClosingQuote(h, et, Y + 1))) {
              U[U.length - 1] += et;
              continue;
            }
            (et =
              !0 ===
              ((Q = et),
              (!0 === N.keepDoubleQuotes && '"' === Q) ||
                (!0 === N.keepSingleQuotes && "'" === Q) ||
                N.keepQuotes)
                ? h.slice(Y, A + 1)
                : h.slice(Y + 1, A)),
              (er.val = et),
              (er.idx = Y = A);
          }
          if (
            ("function" == typeof _ && (_(er, B), (et = er.val), (Y = er.idx)),
            er.val === K && !1 !== er.split)
          ) {
            U.push("");
            continue;
          }
          U[U.length - 1] += er.val;
        }
        return U;
      };
    },
    98071: function (h, g, _) {
      "use strict";
      var b = _(51833),
        y = _(1052);
      function isObject(h) {
        return (h && "object" == typeof h) || b(h);
      }
      h.exports =
        Object.assign ||
        function (h) {
          if (null == h)
            throw TypeError("Cannot convert undefined or null to object");
          isObject(h) || (h = {});
          for (var g = 1; g < arguments.length; g++) {
            var _,
              b = arguments[g];
            (_ = b) &&
              "string" == typeof _ &&
              (b = (function (h) {
                var g = {};
                for (var _ in h) g[_] = h[_];
                return g;
              })(b)),
              isObject(b) &&
                ((function (h, g) {
                  for (var _ in g)
                    Object.prototype.hasOwnProperty.call(g, _) && (h[_] = g[_]);
                })(h, b),
                y(h, b));
          }
          return h;
        };
    },
    70655: function (h, g, _) {
      "use strict";
      _.d(g, {
        CR: function () {
          return __read;
        },
        Jh: function () {
          return __generator;
        },
        XA: function () {
          return __values;
        },
        ZT: function () {
          return __extends;
        },
        _T: function () {
          return __rest;
        },
        ev: function () {
          return __spreadArray;
        },
        fl: function () {
          return __spread;
        },
        mG: function () {
          return __awaiter;
        },
        pi: function () {
          return __assign;
        },
      });
      var extendStatics = function (h, g) {
        return (extendStatics =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (h, g) {
              h.__proto__ = g;
            }) ||
          function (h, g) {
            for (var _ in g)
              Object.prototype.hasOwnProperty.call(g, _) && (h[_] = g[_]);
          })(h, g);
      };
      function __extends(h, g) {
        if ("function" != typeof g && null !== g)
          throw TypeError(
            "Class extends value " +
              String(g) +
              " is not a constructor or null",
          );
        function __() {
          this.constructor = h;
        }
        extendStatics(h, g),
          (h.prototype =
            null === g
              ? Object.create(g)
              : ((__.prototype = g.prototype), new __()));
      }
      var __assign = function () {
        return (__assign =
          Object.assign ||
          function (h) {
            for (var g, _ = 1, b = arguments.length; _ < b; _++)
              for (var y in (g = arguments[_]))
                Object.prototype.hasOwnProperty.call(g, y) && (h[y] = g[y]);
            return h;
          }).apply(this, arguments);
      };
      function __rest(h, g) {
        var _ = {};
        for (var b in h)
          Object.prototype.hasOwnProperty.call(h, b) &&
            0 > g.indexOf(b) &&
            (_[b] = h[b]);
        if (null != h && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var y = 0, b = Object.getOwnPropertySymbols(h);
            y < b.length;
            y++
          )
            0 > g.indexOf(b[y]) &&
              Object.prototype.propertyIsEnumerable.call(h, b[y]) &&
              (_[b[y]] = h[b[y]]);
        return _;
      }
      function __awaiter(h, g, _, b) {
        return new (_ || (_ = Promise))(function (y, A) {
          function fulfilled(h) {
            try {
              step(b.next(h));
            } catch (h) {
              A(h);
            }
          }
          function rejected(h) {
            try {
              step(b.throw(h));
            } catch (h) {
              A(h);
            }
          }
          function step(h) {
            var g;
            h.done
              ? y(h.value)
              : ((g = h.value) instanceof _
                  ? g
                  : new _(function (h) {
                      h(g);
                    })
                ).then(fulfilled, rejected);
          }
          step((b = b.apply(h, g || [])).next());
        });
      }
      function __generator(h, g) {
        var _,
          b,
          y,
          A,
          N = {
            label: 0,
            sent: function () {
              if (1 & y[0]) throw y[1];
              return y[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (A = { next: verb(0), throw: verb(1), return: verb(2) }),
          "function" == typeof Symbol &&
            (A[Symbol.iterator] = function () {
              return this;
            }),
          A
        );
        function verb(A) {
          return function (F) {
            return (function (A) {
              if (_) throw TypeError("Generator is already executing.");
              for (; N; )
                try {
                  if (
                    ((_ = 1),
                    b &&
                      (y =
                        2 & A[0]
                          ? b.return
                          : A[0]
                            ? b.throw || ((y = b.return) && y.call(b), 0)
                            : b.next) &&
                      !(y = y.call(b, A[1])).done)
                  )
                    return y;
                  switch (((b = 0), y && (A = [2 & A[0], y.value]), A[0])) {
                    case 0:
                    case 1:
                      y = A;
                      break;
                    case 4:
                      return N.label++, { value: A[1], done: !1 };
                    case 5:
                      N.label++, (b = A[1]), (A = [0]);
                      continue;
                    case 7:
                      (A = N.ops.pop()), N.trys.pop();
                      continue;
                    default:
                      if (
                        !(y = (y = N.trys).length > 0 && y[y.length - 1]) &&
                        (6 === A[0] || 2 === A[0])
                      ) {
                        N = 0;
                        continue;
                      }
                      if (3 === A[0] && (!y || (A[1] > y[0] && A[1] < y[3]))) {
                        N.label = A[1];
                        break;
                      }
                      if (6 === A[0] && N.label < y[1]) {
                        (N.label = y[1]), (y = A);
                        break;
                      }
                      if (y && N.label < y[2]) {
                        (N.label = y[2]), N.ops.push(A);
                        break;
                      }
                      y[2] && N.ops.pop(), N.trys.pop();
                      continue;
                  }
                  A = g.call(h, N);
                } catch (h) {
                  (A = [6, h]), (b = 0);
                } finally {
                  _ = y = 0;
                }
              if (5 & A[0]) throw A[1];
              return { value: A[0] ? A[1] : void 0, done: !0 };
            })([A, F]);
          };
        }
      }
      function __values(h) {
        var g = "function" == typeof Symbol && Symbol.iterator,
          _ = g && h[g],
          b = 0;
        if (_) return _.call(h);
        if (h && "number" == typeof h.length)
          return {
            next: function () {
              return (
                h && b >= h.length && (h = void 0),
                { value: h && h[b++], done: !h }
              );
            },
          };
        throw TypeError(
          g ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function __read(h, g) {
        var _ = "function" == typeof Symbol && h[Symbol.iterator];
        if (!_) return h;
        var b,
          y,
          A = _.call(h),
          N = [];
        try {
          for (; (void 0 === g || g-- > 0) && !(b = A.next()).done; )
            N.push(b.value);
        } catch (h) {
          y = { error: h };
        } finally {
          try {
            b && !b.done && (_ = A.return) && _.call(A);
          } finally {
            if (y) throw y.error;
          }
        }
        return N;
      }
      function __spread() {
        for (var h = [], g = 0; g < arguments.length; g++)
          h = h.concat(__read(arguments[g]));
        return h;
      }
      function __spreadArray(h, g, _) {
        if (_ || 2 == arguments.length)
          for (var b, y = 0, A = g.length; y < A; y++)
            (!b && y in g) ||
              (b || (b = Array.prototype.slice.call(g, 0, y)), (b[y] = g[y]));
        return h.concat(b || Array.prototype.slice.call(g));
      }
    },
    14671: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return create;
        },
      });
      var b = _(67294);
      let y =
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        A = y ? b.useEffect : b.useLayoutEffect;
      function create(h) {
        let g =
            "function" == typeof h
              ? (function (h) {
                  let g;
                  let _ = new Set(),
                    setState = (h, b) => {
                      let y = "function" == typeof h ? h(g) : h;
                      if (y !== g) {
                        let h = g;
                        (g = b ? y : Object.assign({}, g, y)),
                          _.forEach((_) => _(g, h));
                      }
                    },
                    getState = () => g,
                    subscribeWithSelector = (
                      h,
                      b = getState,
                      y = Object.is,
                    ) => {
                      console.warn(
                        "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                      );
                      let A = b(g);
                      function listenerToAdd() {
                        let _ = b(g);
                        if (!y(A, _)) {
                          let g = A;
                          h((A = _), g);
                        }
                      }
                      return (
                        _.add(listenerToAdd), () => _.delete(listenerToAdd)
                      );
                    },
                    b = {
                      setState,
                      getState,
                      subscribe: (h, g, b) =>
                        g || b
                          ? subscribeWithSelector(h, g, b)
                          : (_.add(h), () => _.delete(h)),
                      destroy: () => _.clear(),
                    };
                  return (g = h(setState, getState, b)), b;
                })(h)
              : h,
          useStore = (h = g.getState, _ = Object.is) => {
            let y;
            let [, N] = (0, b.useReducer)((h) => h + 1, 0),
              F = g.getState(),
              B = (0, b.useRef)(F),
              H = (0, b.useRef)(h),
              U = (0, b.useRef)(_),
              K = (0, b.useRef)(!1),
              q = (0, b.useRef)();
            void 0 === q.current && (q.current = h(F));
            let Y = !1;
            (B.current !== F ||
              H.current !== h ||
              U.current !== _ ||
              K.current) &&
              ((y = h(F)), (Y = !_(q.current, y))),
              A(() => {
                Y && (q.current = y),
                  (B.current = F),
                  (H.current = h),
                  (U.current = _),
                  (K.current = !1);
              });
            let X = (0, b.useRef)(F);
            A(() => {
              let listener = () => {
                  try {
                    let h = g.getState(),
                      _ = H.current(h);
                    U.current(q.current, _) ||
                      ((B.current = h), (q.current = _), N());
                  } catch (h) {
                    (K.current = !0), N();
                  }
                },
                h = g.subscribe(listener);
              return g.getState() !== X.current && listener(), h;
            }, []);
            let Q = Y ? y : q.current;
            return (0, b.useDebugValue)(Q), Q;
          };
        return (
          Object.assign(useStore, g),
          (useStore[Symbol.iterator] = function () {
            console.warn(
              "[useStore, api] = create() is deprecated and will be removed in v4",
            );
            let h = [useStore, g];
            return {
              next() {
                let g = h.length <= 0;
                return { value: h.shift(), done: g };
              },
            };
          }),
          useStore
        );
      }
    },
    87462: function (h, g, _) {
      "use strict";
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (h) {
              for (var g = 1; g < arguments.length; g++) {
                var _ = arguments[g];
                for (var b in _)
                  Object.prototype.hasOwnProperty.call(_, b) && (h[b] = _[b]);
              }
              return h;
            }).apply(this, arguments);
      }
      _.d(g, {
        Z: function () {
          return _extends;
        },
      });
    },
    24428: function (h, g, _) {
      "use strict";
      _.d(g, {
        B: function () {
          return $e02a7d9cb1dc128c$export$c74125a8e3af6bb2;
        },
      });
      var b = _(67294);
      function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...h) {
        return (0, b.useCallback)(
          (function (...h) {
            return (g) =>
              h.forEach((h) => {
                "function" == typeof h ? h(g) : null != h && (h.current = g);
              });
          })(...h),
          h,
        );
      }
      var y = _(4222);
      function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(h) {
        let g = h + "CollectionProvider",
          [_, A] = (function (h, g = []) {
            let _ = [],
              createScope = () => {
                let g = _.map((h) => (0, b.createContext)(h));
                return function (_) {
                  let y = (null == _ ? void 0 : _[h]) || g;
                  return (0, b.useMemo)(
                    () => ({ [`__scope${h}`]: { ..._, [h]: y } }),
                    [_, y],
                  );
                };
              };
            return (
              (createScope.scopeName = h),
              [
                function (g, y) {
                  let A = (0, b.createContext)(y),
                    N = _.length;
                  function Provider(g) {
                    let { scope: _, children: y, ...F } = g,
                      B = (null == _ ? void 0 : _[h][N]) || A,
                      H = (0, b.useMemo)(() => F, Object.values(F));
                    return (0, b.createElement)(B.Provider, { value: H }, y);
                  }
                  return (
                    (_ = [..._, y]),
                    (Provider.displayName = g + "Provider"),
                    [
                      Provider,
                      function (_, F) {
                        let B = (null == F ? void 0 : F[h][N]) || A,
                          H = (0, b.useContext)(B);
                        if (H) return H;
                        if (void 0 !== y) return y;
                        throw Error(`\`${_}\` must be used within \`${g}\``);
                      },
                    ]
                  );
                },
                (function (...h) {
                  let g = h[0];
                  if (1 === h.length) return g;
                  let createScope1 = () => {
                    let _ = h.map((h) => ({
                      useScope: h(),
                      scopeName: h.scopeName,
                    }));
                    return function (h) {
                      let y = _.reduce((g, { useScope: _, scopeName: b }) => {
                        let y = _(h),
                          A = y[`__scope${b}`];
                        return { ...g, ...A };
                      }, {});
                      return (0, b.useMemo)(
                        () => ({ [`__scope${g.scopeName}`]: y }),
                        [y],
                      );
                    };
                  };
                  return (createScope1.scopeName = g.scopeName), createScope1;
                })(createScope, ...g),
              ]
            );
          })(g),
          [N, F] = _(g, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          B = h + "CollectionSlot",
          H = b.forwardRef((h, g) => {
            let { scope: _, children: A } = h,
              N = F(B, _),
              H = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(g, N.collectionRef);
            return b.createElement(y.g7, { ref: H }, A);
          }),
          U = h + "CollectionItemSlot",
          K = "data-radix-collection-item",
          q = b.forwardRef((h, g) => {
            let { scope: _, children: A, ...N } = h,
              B = b.useRef(null),
              H = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(g, B),
              q = F(U, _);
            return (
              b.useEffect(
                () => (
                  q.itemMap.set(B, { ref: B, ...N }),
                  () => void q.itemMap.delete(B)
                ),
              ),
              b.createElement(y.g7, { [K]: "", ref: H }, A)
            );
          });
        return [
          {
            Provider: (h) => {
              let { scope: g, children: _ } = h,
                y = b.useRef(null),
                A = b.useRef(new Map()).current;
              return b.createElement(
                N,
                { scope: g, itemMap: A, collectionRef: y },
                _,
              );
            },
            Slot: H,
            ItemSlot: q,
          },
          function (g) {
            let _ = F(h + "CollectionConsumer", g),
              y = b.useCallback(() => {
                let h = _.collectionRef.current;
                if (!h) return [];
                let g = Array.from(h.querySelectorAll(`[${K}]`)),
                  b = Array.from(_.itemMap.values()),
                  y = b.sort(
                    (h, _) =>
                      g.indexOf(h.ref.current) - g.indexOf(_.ref.current),
                  );
                return y;
              }, [_.collectionRef, _.itemMap]);
            return y;
          },
          A,
        ];
      }
    },
    78990: function (h, g, _) {
      "use strict";
      _.d(g, {
        gm: function () {
          return $f631663db3294ace$export$b39126d51d94e6f3;
        },
      });
      var b = _(67294);
      let y = (0, b.createContext)(void 0);
      function $f631663db3294ace$export$b39126d51d94e6f3(h) {
        let g = (0, b.useContext)(y);
        return h || g || "ltr";
      }
    },
    13024: function (h, g, _) {
      "use strict";
      let b;
      _.d(g, {
        XB: function () {
          return H;
        },
      });
      var y = _(87462),
        A = _(67294);
      function $e42e1063c40fb3ef$export$b9ecd428b558ff10(
        h,
        g,
        { checkForDefaultPrevented: _ = !0 } = {},
      ) {
        return function (b) {
          if ((null == h || h(b), !1 === _ || !b.defaultPrevented))
            return null == g ? void 0 : g(b);
        };
      }
      var N = _(75320);
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(h) {
        let g = (0, A.useRef)(h);
        return (
          (0, A.useEffect)(() => {
            g.current = h;
          }),
          (0, A.useMemo)(
            () =>
              (...h) => {
                var _;
                return null === (_ = g.current) || void 0 === _
                  ? void 0
                  : _.call(g, ...h);
              },
            [],
          )
        );
      }
      let F = "dismissableLayer.update",
        B = (0, A.createContext)({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        H = (0, A.forwardRef)((h, g) => {
          var _;
          let {
              disableOutsidePointerEvents: H = !1,
              onEscapeKeyDown: U,
              onPointerDownOutside: K,
              onFocusOutside: q,
              onInteractOutside: Y,
              onDismiss: X,
              ...Q
            } = h,
            et = (0, A.useContext)(B),
            [en, er] = (0, A.useState)(null),
            ei =
              null !== (_ = null == en ? void 0 : en.ownerDocument) &&
              void 0 !== _
                ? _
                : null == globalThis
                  ? void 0
                  : globalThis.document,
            [, eo] = (0, A.useState)({}),
            ea = (function (...h) {
              return (0, A.useCallback)(
                (function (...h) {
                  return (g) =>
                    h.forEach((h) => {
                      "function" == typeof h
                        ? h(g)
                        : null != h && (h.current = g);
                    });
                })(...h),
                h,
              );
            })(g, (h) => er(h)),
            es = Array.from(et.layers),
            [el] = [...et.layersWithOutsidePointerEventsDisabled].slice(-1),
            eu = es.indexOf(el),
            ec = en ? es.indexOf(en) : -1,
            ed = et.layersWithOutsidePointerEventsDisabled.size > 0,
            ef = ec >= eu,
            ep = (function (
              h,
              g = null == globalThis ? void 0 : globalThis.document,
            ) {
              let _ = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(h),
                b = (0, A.useRef)(!1),
                y = (0, A.useRef)(() => {});
              return (
                (0, A.useEffect)(() => {
                  let handlePointerDown = (h) => {
                      if (h.target && !b.current) {
                        let b = { originalEvent: h };
                        function handleAndDispatchPointerDownOutsideEvent() {
                          $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                            "dismissableLayer.pointerDownOutside",
                            _,
                            b,
                            { discrete: !0 },
                          );
                        }
                        "touch" === h.pointerType
                          ? (g.removeEventListener("click", y.current),
                            (y.current =
                              handleAndDispatchPointerDownOutsideEvent),
                            g.addEventListener("click", y.current, {
                              once: !0,
                            }))
                          : handleAndDispatchPointerDownOutsideEvent();
                      }
                      b.current = !1;
                    },
                    h = window.setTimeout(() => {
                      g.addEventListener("pointerdown", handlePointerDown);
                    }, 0);
                  return () => {
                    window.clearTimeout(h),
                      g.removeEventListener("pointerdown", handlePointerDown),
                      g.removeEventListener("click", y.current);
                  };
                }, [g, _]),
                { onPointerDownCapture: () => (b.current = !0) }
              );
            })((h) => {
              let g = h.target,
                _ = [...et.branches].some((h) => h.contains(g));
              !ef ||
                _ ||
                (null == K || K(h),
                null == Y || Y(h),
                h.defaultPrevented || null == X || X());
            }, ei),
            eh = (function (
              h,
              g = null == globalThis ? void 0 : globalThis.document,
            ) {
              let _ = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(h),
                b = (0, A.useRef)(!1);
              return (
                (0, A.useEffect)(() => {
                  let handleFocus = (h) => {
                    h.target &&
                      !b.current &&
                      $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
                        "dismissableLayer.focusOutside",
                        _,
                        { originalEvent: h },
                        { discrete: !1 },
                      );
                  };
                  return (
                    g.addEventListener("focusin", handleFocus),
                    () => g.removeEventListener("focusin", handleFocus)
                  );
                }, [g, _]),
                {
                  onFocusCapture: () => (b.current = !0),
                  onBlurCapture: () => (b.current = !1),
                }
              );
            })((h) => {
              let g = h.target,
                _ = [...et.branches].some((h) => h.contains(g));
              _ ||
                (null == q || q(h),
                null == Y || Y(h),
                h.defaultPrevented || null == X || X());
            }, ei);
          return (
            !(function (
              h,
              g = null == globalThis ? void 0 : globalThis.document,
            ) {
              let _ = (function (h) {
                let g = (0, A.useRef)(h);
                return (
                  (0, A.useEffect)(() => {
                    g.current = h;
                  }),
                  (0, A.useMemo)(
                    () =>
                      (...h) => {
                        var _;
                        return null === (_ = g.current) || void 0 === _
                          ? void 0
                          : _.call(g, ...h);
                      },
                    [],
                  )
                );
              })(h);
              (0, A.useEffect)(() => {
                let handleKeyDown = (h) => {
                  "Escape" === h.key && _(h);
                };
                return (
                  g.addEventListener("keydown", handleKeyDown),
                  () => g.removeEventListener("keydown", handleKeyDown)
                );
              }, [_, g]);
            })((h) => {
              let g = ec === et.layers.size - 1;
              g &&
                (null == U || U(h),
                !h.defaultPrevented && X && (h.preventDefault(), X()));
            }, ei),
            (0, A.useEffect)(() => {
              if (en)
                return (
                  H &&
                    (0 === et.layersWithOutsidePointerEventsDisabled.size &&
                      ((b = ei.body.style.pointerEvents),
                      (ei.body.style.pointerEvents = "none")),
                    et.layersWithOutsidePointerEventsDisabled.add(en)),
                  et.layers.add(en),
                  $5cb92bef7577960e$var$dispatchUpdate(),
                  () => {
                    H &&
                      1 === et.layersWithOutsidePointerEventsDisabled.size &&
                      (ei.body.style.pointerEvents = b);
                  }
                );
            }, [en, ei, H, et]),
            (0, A.useEffect)(
              () => () => {
                en &&
                  (et.layers.delete(en),
                  et.layersWithOutsidePointerEventsDisabled.delete(en),
                  $5cb92bef7577960e$var$dispatchUpdate());
              },
              [en, et],
            ),
            (0, A.useEffect)(() => {
              let handleUpdate = () => eo({});
              return (
                document.addEventListener(F, handleUpdate),
                () => document.removeEventListener(F, handleUpdate)
              );
            }, []),
            (0, A.createElement)(
              N.WV.div,
              (0, y.Z)({}, Q, {
                ref: ea,
                style: {
                  pointerEvents: ed ? (ef ? "auto" : "none") : void 0,
                  ...h.style,
                },
                onFocusCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  h.onFocusCapture,
                  eh.onFocusCapture,
                ),
                onBlurCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  h.onBlurCapture,
                  eh.onBlurCapture,
                ),
                onPointerDownCapture: $e42e1063c40fb3ef$export$b9ecd428b558ff10(
                  h.onPointerDownCapture,
                  ep.onPointerDownCapture,
                ),
              }),
            )
          );
        });
      function $5cb92bef7577960e$var$dispatchUpdate() {
        let h = new CustomEvent(F);
        document.dispatchEvent(h);
      }
      function $5cb92bef7577960e$var$handleAndDispatchCustomEvent(
        h,
        g,
        _,
        { discrete: b },
      ) {
        let y = _.originalEvent.target,
          A = new CustomEvent(h, { bubbles: !1, cancelable: !0, detail: _ });
        g && y.addEventListener(h, g, { once: !0 }),
          b ? (0, N.jH)(y, A) : y.dispatchEvent(A);
      }
    },
    75320: function (h, g, _) {
      "use strict";
      _.d(g, {
        WV: function () {
          return F;
        },
        jH: function () {
          return $8927f6f2acc4f386$export$6d1a0317bde7de7f;
        },
      });
      var b = _(87462),
        y = _(67294),
        A = _(73935),
        N = _(4222);
      let F = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "span",
        "svg",
        "ul",
      ].reduce((h, g) => {
        let _ = (0, y.forwardRef)((h, _) => {
          let { asChild: A, ...F } = h,
            B = A ? N.g7 : g;
          return (
            (0, y.useEffect)(() => {
              window[Symbol.for("radix-ui")] = !0;
            }, []),
            (0, y.createElement)(B, (0, b.Z)({}, F, { ref: _ }))
          );
        });
        return (_.displayName = `Primitive.${g}`), { ...h, [g]: _ };
      }, {});
      function $8927f6f2acc4f386$export$6d1a0317bde7de7f(h, g) {
        h && (0, A.flushSync)(() => h.dispatchEvent(g));
      }
    },
    4222: function (h, g, _) {
      "use strict";
      _.d(g, {
        g7: function () {
          return A;
        },
        A4: function () {
          return $5e63c961fc1ce211$export$d9f1ccf0bdb05d45;
        },
      });
      var b = _(87462),
        y = _(67294);
      let A = (0, y.forwardRef)((h, g) => {
        let { children: _, ...A } = h,
          F = y.Children.toArray(_),
          B = F.find($5e63c961fc1ce211$var$isSlottable);
        if (B) {
          let h = B.props.children,
            _ = F.map((g) =>
              g !== B
                ? g
                : y.Children.count(h) > 1
                  ? y.Children.only(null)
                  : (0, y.isValidElement)(h)
                    ? h.props.children
                    : null,
            );
          return (0, y.createElement)(
            N,
            (0, b.Z)({}, A, { ref: g }),
            (0, y.isValidElement)(h) ? (0, y.cloneElement)(h, void 0, _) : null,
          );
        }
        return (0, y.createElement)(N, (0, b.Z)({}, A, { ref: g }), _);
      });
      A.displayName = "Slot";
      let N = (0, y.forwardRef)((h, g) => {
        let { children: _, ...b } = h;
        return (0, y.isValidElement)(_)
          ? (0, y.cloneElement)(_, {
              ...(function (h, g) {
                let _ = { ...g };
                for (let b in g) {
                  let y = h[b],
                    A = g[b],
                    N = /^on[A-Z]/.test(b);
                  N
                    ? y && A
                      ? (_[b] = (...h) => {
                          A(...h), y(...h);
                        })
                      : y && (_[b] = y)
                    : "style" === b
                      ? (_[b] = { ...y, ...A })
                      : "className" === b &&
                        (_[b] = [y, A].filter(Boolean).join(" "));
                }
                return { ...h, ..._ };
              })(b, _.props),
              ref: g
                ? (function (...h) {
                    return (g) =>
                      h.forEach((h) => {
                        "function" == typeof h
                          ? h(g)
                          : null != h && (h.current = g);
                      });
                  })(g, _.ref)
                : _.ref,
            })
          : y.Children.count(_) > 1
            ? y.Children.only(null)
            : null;
      });
      N.displayName = "SlotClone";
      let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({ children: h }) =>
        (0, y.createElement)(y.Fragment, null, h);
      function $5e63c961fc1ce211$var$isSlottable(h) {
        return (
          (0, y.isValidElement)(h) &&
          h.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
        );
      }
    },
    96219: function (h, g, _) {
      "use strict";
      _.d(g, {
        f: function () {
          return F;
        },
      });
      var b = _(87462),
        y = _(67294),
        A = _(75320);
      let N = (0, y.forwardRef)((h, g) =>
          (0, y.createElement)(
            A.WV.span,
            (0, b.Z)({}, h, {
              ref: g,
              style: {
                position: "absolute",
                border: 0,
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                wordWrap: "normal",
                ...h.style,
              },
            }),
          ),
        ),
        F = N;
    },
    27159: function (h, g, _) {
      "use strict";
      _.d(g, {
        y: function () {
          return animateValue;
        },
      });
      var b = _(81662);
      let calcBezier = (h, g, _) =>
        (((1 - 3 * _ + 3 * g) * h + (3 * _ - 6 * g)) * h + 3 * g) * h;
      function cubicBezier(h, g, _, y) {
        if (h === g && _ === y) return b.Z;
        let getTForX = (g) =>
          (function (h, g, _, b, y) {
            let A, N;
            let F = 0;
            do
              (A = calcBezier((N = g + (_ - g) / 2), b, y) - h) > 0
                ? (_ = N)
                : (g = N);
            while (Math.abs(A) > 1e-7 && ++F < 12);
            return N;
          })(g, 0, 1, h, _);
        return (h) => (0 === h || 1 === h ? h : calcBezier(getTForX(h), g, y));
      }
      let y = cubicBezier(0.42, 0, 1, 1),
        A = cubicBezier(0, 0, 0.58, 1),
        N = cubicBezier(0.42, 0, 0.58, 1);
      var F = _(43338),
        B = _(45487),
        H = _(27255),
        U = _(90415),
        K = _(75129);
      let q = cubicBezier(0.33, 1.53, 0.69, 0.99),
        Y = (0, K.M)(q),
        X = (0, U.o)(Y),
        Q = {
          linear: b.Z,
          easeIn: y,
          easeInOut: N,
          easeOut: A,
          circIn: H.Z7,
          circInOut: H.X7,
          circOut: H.Bn,
          backIn: Y,
          backInOut: X,
          backOut: q,
          anticipate: (h) =>
            (h *= 2) < 1 ? 0.5 * Y(h) : 0.5 * (2 - Math.pow(2, -10 * (h - 1))),
        },
        easingDefinitionToFunction = (h) => {
          if (Array.isArray(h)) {
            (0, B.k)(
              4 === h.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [g, _, b, y] = h;
            return cubicBezier(g, _, b, y);
          }
          return "string" == typeof h
            ? ((0, B.k)(void 0 !== Q[h], `Invalid easing type '${h}'`), Q[h])
            : h;
        };
      var et = _(64606),
        en = _(60599);
      function keyframes({
        duration: h = 300,
        keyframes: g,
        times: _,
        ease: b = "easeInOut",
      }) {
        let y = (0, F.N)(b)
            ? b.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(b),
          A = { done: !1, value: g[0] },
          B = (_ && _.length === g.length ? _ : (0, en.Y)(g)).map((g) => g * h),
          H = (0, et.s)(B, g, {
            ease: Array.isArray(y)
              ? y
              : g.map(() => y || N).splice(0, g.length - 1),
          });
        return {
          calculatedDuration: h,
          next: (g) => ((A.value = H(g)), (A.done = g >= h), A),
        };
      }
      var er = _(85086),
        ei = _(25753);
      function inertia({
        keyframes: h,
        velocity: g = 0,
        power: _ = 0.8,
        timeConstant: b = 325,
        bounceDamping: y = 10,
        bounceStiffness: A = 500,
        modifyTarget: N,
        min: F,
        max: B,
        restDelta: H = 0.5,
        restSpeed: U,
      }) {
        let K, q;
        let Y = h[0],
          X = { done: !1, value: Y },
          isOutOfBounds = (h) =>
            (void 0 !== F && h < F) || (void 0 !== B && h > B),
          nearestBoundary = (h) =>
            void 0 === F
              ? B
              : void 0 === B
                ? F
                : Math.abs(F - h) < Math.abs(B - h)
                  ? F
                  : B,
          Q = _ * g,
          et = Y + Q,
          en = void 0 === N ? et : N(et);
        en !== et && (Q = en - Y);
        let calcDelta = (h) => -Q * Math.exp(-h / b),
          calcLatest = (h) => en + calcDelta(h),
          applyFriction = (h) => {
            let g = calcDelta(h),
              _ = calcLatest(h);
            (X.done = Math.abs(g) <= H), (X.value = X.done ? en : _);
          },
          checkCatchBoundary = (h) => {
            isOutOfBounds(X.value) &&
              ((K = h),
              (q = (0, er.S)({
                keyframes: [X.value, nearestBoundary(X.value)],
                velocity: (0, ei.P)(calcLatest, h, X.value),
                damping: y,
                stiffness: A,
                restDelta: H,
                restSpeed: U,
              })));
          };
        return (
          checkCatchBoundary(0),
          {
            calculatedDuration: null,
            next: (h) => {
              let g = !1;
              return (q ||
                void 0 !== K ||
                ((g = !0), applyFriction(h), checkCatchBoundary(h)),
              void 0 !== K && h > K)
                ? q.next(h - K)
                : (g || applyFriction(h), X);
            },
          }
        );
      }
      var eo = _(2074);
      let frameloopDriver = (h) => {
        let passTimestamp = ({ timestamp: g }) => h(g);
        return {
          start: () => eo.Wi.update(passTimestamp, !0),
          stop: () => (0, eo.Pn)(passTimestamp),
          now: () =>
            eo.frameData.isProcessing
              ? eo.frameData.timestamp
              : performance.now(),
        };
      };
      var ea = _(24169),
        es = _(86917),
        el = _(42284);
      let eu = {
        decay: inertia,
        inertia: inertia,
        tween: keyframes,
        keyframes: keyframes,
        spring: er.S,
      };
      function animateValue({
        autoplay: h = !0,
        delay: g = 0,
        driver: _ = frameloopDriver,
        keyframes: b,
        type: y = "keyframes",
        repeat: A = 0,
        repeatDelay: N = 0,
        repeatType: F = "loop",
        onPlay: B,
        onStop: H,
        onComplete: U,
        onUpdate: K,
        ...q
      }) {
        let Y,
          X,
          Q,
          en,
          er,
          ei = 1,
          eo = !1,
          updateFinishedPromise = () => {
            X = new Promise((h) => {
              Y = h;
            });
          };
        updateFinishedPromise();
        let ec = eu[y] || keyframes;
        ec !== keyframes &&
          "number" != typeof b[0] &&
          ((en = (0, et.s)([0, 100], b, { clamp: !1 })), (b = [0, 100]));
        let ed = ec({ ...q, keyframes: b });
        "mirror" === F &&
          (er = ec({
            ...q,
            keyframes: [...b].reverse(),
            velocity: -(q.velocity || 0),
          }));
        let ef = "idle",
          ep = null,
          eh = null,
          em = null;
        null === ed.calculatedDuration &&
          A &&
          (ed.calculatedDuration = (0, el.i)(ed));
        let { calculatedDuration: eg } = ed,
          ev = 1 / 0,
          e_ = 1 / 0;
        null !== eg && (e_ = (ev = eg + N) * (A + 1) - N);
        let eb = 0,
          tick = (h) => {
            if (null === eh) return;
            ei > 0 && (eh = Math.min(eh, h)),
              ei < 0 && (eh = Math.min(h - e_ / ei, eh)),
              (eb = null !== ep ? ep : Math.round(h - eh) * ei);
            let _ = eb - g * (ei >= 0 ? 1 : -1),
              y = ei >= 0 ? _ < 0 : _ > e_;
            (eb = Math.max(_, 0)),
              "finished" === ef && null === ep && (eb = e_);
            let B = eb,
              H = ed;
            if (A) {
              let h = eb / ev,
                g = Math.floor(h),
                _ = h % 1;
              !_ && h >= 1 && (_ = 1), 1 === _ && g--, (g = Math.min(g, A + 1));
              let b = !!(g % 2);
              b &&
                ("reverse" === F
                  ? ((_ = 1 - _), N && (_ -= N / ev))
                  : "mirror" === F && (H = er));
              let y = (0, ea.u)(0, 1, _);
              eb > e_ && (y = "reverse" === F && b ? 1 : 0), (B = y * ev);
            }
            let U = y ? { done: !1, value: b[0] } : H.next(B);
            en && (U.value = en(U.value));
            let { done: q } = U;
            y || null === eg || (q = ei >= 0 ? eb >= e_ : eb <= 0);
            let Y =
              null === ep && ("finished" === ef || ("running" === ef && q));
            return K && K(U.value), Y && finish(), U;
          },
          stopAnimationDriver = () => {
            Q && Q.stop(), (Q = void 0);
          },
          cancel = () => {
            (ef = "idle"),
              stopAnimationDriver(),
              Y(),
              updateFinishedPromise(),
              (eh = em = null);
          },
          finish = () => {
            (ef = "finished"), U && U(), stopAnimationDriver(), Y();
          },
          play = () => {
            if (eo) return;
            Q || (Q = _(tick));
            let h = Q.now();
            B && B(),
              null !== ep
                ? (eh = h - ep)
                : (eh && "finished" !== ef) || (eh = h),
              "finished" === ef && updateFinishedPromise(),
              (em = eh),
              (ep = null),
              (ef = "running"),
              Q.start();
          };
        h && play();
        let ey = {
          then: (h, g) => X.then(h, g),
          get time() {
            return (0, es.X)(eb);
          },
          set time(newTime) {
            (eb = newTime = (0, es.w)(newTime)),
              null === ep && Q && 0 !== ei
                ? (eh = Q.now() - newTime / ei)
                : (ep = newTime);
          },
          get duration() {
            let h =
              null === ed.calculatedDuration
                ? (0, el.i)(ed)
                : ed.calculatedDuration;
            return (0, es.X)(h);
          },
          get speed() {
            return ei;
          },
          set speed(newSpeed) {
            if (newSpeed === ei || !Q) return;
            (ei = newSpeed), (ey.time = (0, es.X)(eb));
          },
          get state() {
            return ef;
          },
          play,
          pause: () => {
            (ef = "paused"), (ep = eb);
          },
          stop: () => {
            (eo = !0), "idle" !== ef && ((ef = "idle"), H && H(), cancel());
          },
          cancel: () => {
            null !== em && tick(em), cancel();
          },
          complete: () => {
            ef = "finished";
          },
          sample: (h) => ((eh = 0), tick(h)),
        };
        return ey;
      }
    },
    85086: function (h, g, _) {
      "use strict";
      _.d(g, {
        S: function () {
          return spring;
        },
      });
      var b = _(86917),
        y = _(25753),
        A = _(45487),
        N = _(24169);
      function calcAngularFreq(h, g) {
        return h * Math.sqrt(1 - g * g);
      }
      let F = ["duration", "bounce"],
        B = ["stiffness", "damping", "mass"];
      function isSpringType(h, g) {
        return g.some((g) => void 0 !== h[g]);
      }
      function spring({ keyframes: h, restDelta: g, restSpeed: _, ...H }) {
        let U;
        let K = h[0],
          q = h[h.length - 1],
          Y = { done: !1, value: K },
          {
            stiffness: X,
            damping: Q,
            mass: et,
            velocity: en,
            duration: er,
            isResolvedFromDuration: ei,
          } = (function (h) {
            let g = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...h,
            };
            if (!isSpringType(h, B) && isSpringType(h, F)) {
              let _ = (function ({
                duration: h = 800,
                bounce: g = 0.25,
                velocity: _ = 0,
                mass: y = 1,
              }) {
                let F, B;
                (0, A.K)(
                  h <= (0, b.w)(10),
                  "Spring duration must be 10 seconds or less",
                );
                let H = 1 - g;
                (H = (0, N.u)(0.05, 1, H)),
                  (h = (0, N.u)(0.01, 10, (0, b.X)(h))),
                  H < 1
                    ? ((F = (g) => {
                        let b = g * H,
                          y = b * h,
                          A = calcAngularFreq(g, H);
                        return 0.001 - ((b - _) / A) * Math.exp(-y);
                      }),
                      (B = (g) => {
                        let b = g * H,
                          y = b * h,
                          A = Math.pow(H, 2) * Math.pow(g, 2) * h,
                          N = calcAngularFreq(Math.pow(g, 2), H),
                          B = -F(g) + 0.001 > 0 ? -1 : 1;
                        return (B * ((y * _ + _ - A) * Math.exp(-y))) / N;
                      }))
                    : ((F = (g) => {
                        let b = Math.exp(-g * h),
                          y = (g - _) * h + 1;
                        return -0.001 + b * y;
                      }),
                      (B = (g) => {
                        let b = Math.exp(-g * h),
                          y = (_ - g) * (h * h);
                        return b * y;
                      }));
                let U = 5 / h,
                  K = (function (h, g, _) {
                    let b = _;
                    for (let _ = 1; _ < 12; _++) b -= h(b) / g(b);
                    return b;
                  })(F, B, U);
                if (((h = (0, b.w)(h)), isNaN(K)))
                  return { stiffness: 100, damping: 10, duration: h };
                {
                  let g = Math.pow(K, 2) * y;
                  return {
                    stiffness: g,
                    damping: 2 * H * Math.sqrt(y * g),
                    duration: h,
                  };
                }
              })(h);
              (g = {
                ...g,
                ..._,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return g;
          })(H),
          eo = en ? -(0, b.X)(en) : 0,
          ea = Q / (2 * Math.sqrt(X * et)),
          es = q - K,
          el = (0, b.X)(Math.sqrt(X / et)),
          eu = 5 > Math.abs(es);
        if ((_ || (_ = eu ? 0.01 : 2), g || (g = eu ? 0.005 : 0.5), ea < 1)) {
          let h = calcAngularFreq(el, ea);
          U = (g) => {
            let _ = Math.exp(-ea * el * g);
            return (
              q -
              _ *
                (((eo + ea * el * es) / h) * Math.sin(h * g) +
                  es * Math.cos(h * g))
            );
          };
        } else if (1 === ea)
          U = (h) => q - Math.exp(-el * h) * (es + (eo + el * es) * h);
        else {
          let h = el * Math.sqrt(ea * ea - 1);
          U = (g) => {
            let _ = Math.exp(-ea * el * g),
              b = Math.min(h * g, 300);
            return (
              q -
              (_ *
                ((eo + ea * el * es) * Math.sinh(b) + h * es * Math.cosh(b))) /
                h
            );
          };
        }
        return {
          calculatedDuration: (ei && er) || null,
          next: (h) => {
            let b = U(h);
            if (ei) Y.done = h >= er;
            else {
              let A = eo;
              0 !== h && (A = ea < 1 ? (0, y.P)(U, h, b) : 0);
              let N = Math.abs(A) <= _,
                F = Math.abs(q - b) <= g;
              Y.done = N && F;
            }
            return (Y.value = Y.done ? q : b), Y;
          },
        };
      }
    },
    42284: function (h, g, _) {
      "use strict";
      _.d(g, {
        E: function () {
          return b;
        },
        i: function () {
          return calcGeneratorDuration;
        },
      });
      let b = 2e4;
      function calcGeneratorDuration(h) {
        let g = 0,
          _ = h.next(g);
        for (; !_.done && g < b; ) (g += 50), (_ = h.next(g));
        return g >= b ? 1 / 0 : g;
      }
    },
    25753: function (h, g, _) {
      "use strict";
      _.d(g, {
        P: function () {
          return calcGeneratorVelocity;
        },
      });
      var b = _(3038);
      function calcGeneratorVelocity(h, g, _) {
        let y = Math.max(g - 5, 0);
        return (0, b.R)(_ - h(y), g - y);
      }
    },
    67218: function (h, g, _) {
      "use strict";
      let b;
      _.d(g, {
        v: function () {
          return animateMotionValue;
        },
      });
      var y,
        A = _(45487),
        N = _(86917);
      let F = { current: !1 },
        isBezierDefinition = (h) => Array.isArray(h) && "number" == typeof h[0],
        cubicBezierAsString = ([h, g, _, b]) =>
          `cubic-bezier(${h}, ${g}, ${_}, ${b})`,
        B = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
          circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
          backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
          backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
        };
      var H = _(27159),
        U = _(2074);
      let K =
          ((y = () => Object.hasOwnProperty.call(Element.prototype, "animate")),
          () => (void 0 === b && (b = y()), b)),
        q = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        requiresPregeneratedKeyframes = (h, g) =>
          "spring" === g.type ||
          "backgroundColor" === h ||
          !(function isWaapiSupportedEasing(h) {
            return !!(
              !h ||
              ("string" == typeof h && B[h]) ||
              isBezierDefinition(h) ||
              (Array.isArray(h) && h.every(isWaapiSupportedEasing))
            );
          })(g.ease);
      var Y = _(81662),
        X = _(94714);
      let Q = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        criticallyDampedSpring = (h) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === h ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        et = { type: "keyframes", duration: 0.8 },
        en = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        getDefaultTransition = (h, { keyframes: g }) =>
          g.length > 2
            ? et
            : X.G.has(h)
              ? h.startsWith("scale")
                ? criticallyDampedSpring(g[1])
                : Q
              : en;
      var er = _(51550);
      let isAnimatable = (h, g) =>
        "zIndex" !== h &&
        !!(
          "number" == typeof g ||
          Array.isArray(g) ||
          ("string" == typeof g &&
            (er.P.test(g) || "0" === g) &&
            !g.startsWith("url("))
        );
      var ei = _(79135),
        eo = _(30681),
        ea = _(31056);
      let animateMotionValue =
        (h, g, _, b = {}) =>
        (y) => {
          let X = (0, ea.e)(b, h) || {},
            Q = X.delay || b.delay || 0,
            { elapsed: et = 0 } = b;
          et -= (0, N.w)(Q);
          let en = (function (h, g, _, b) {
              let y, A;
              let N = isAnimatable(g, _);
              y = Array.isArray(_) ? [..._] : [null, _];
              let F = void 0 !== b.from ? b.from : h.get(),
                B = [];
              for (let h = 0; h < y.length; h++) {
                var H;
                null === y[h] && (y[h] = 0 === h ? F : y[h - 1]),
                  ("number" == typeof (H = y[h])
                    ? 0 === H
                    : null !== H
                      ? "none" === H || "0" === H || (0, eo.W)(H)
                      : void 0) && B.push(h),
                  "string" == typeof y[h] &&
                    "none" !== y[h] &&
                    "0" !== y[h] &&
                    (A = y[h]);
              }
              if (N && B.length && A)
                for (let h = 0; h < B.length; h++) {
                  let _ = B[h];
                  y[_] = (0, ei.T)(g, A);
                }
              return y;
            })(g, h, _, X),
            er = en[0],
            es = en[en.length - 1],
            el = isAnimatable(h, er),
            eu = isAnimatable(h, es);
          (0, A.K)(
            el === eu,
            `You are trying to animate ${h} from "${er}" to "${es}". ${er} is not an animatable value - to enable this animation set ${er} to a value animatable to ${es} via the \`style\` property.`,
          );
          let ec = {
            keyframes: en,
            velocity: g.getVelocity(),
            ease: "easeOut",
            ...X,
            delay: -et,
            onUpdate: (h) => {
              g.set(h), X.onUpdate && X.onUpdate(h);
            },
            onComplete: () => {
              y(), X.onComplete && X.onComplete();
            },
          };
          if (
            ((0, ea.r)(X) || (ec = { ...ec, ...getDefaultTransition(h, ec) }),
            ec.duration && (ec.duration = (0, N.w)(ec.duration)),
            ec.repeatDelay && (ec.repeatDelay = (0, N.w)(ec.repeatDelay)),
            !el || !eu || F.current || !1 === X.type)
          )
            return (function ({
              keyframes: h,
              delay: g,
              onUpdate: _,
              onComplete: b,
            }) {
              let setValue = () => (
                _ && _(h[h.length - 1]),
                b && b(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: Y.Z,
                  pause: Y.Z,
                  stop: Y.Z,
                  then: (h) => (h(), Promise.resolve()),
                  cancel: Y.Z,
                  complete: Y.Z,
                }
              );
              return g
                ? (0, H.y)({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: g,
                    onComplete: setValue,
                  })
                : setValue();
            })(F.current ? { ...ec, delay: 0 } : ec);
          if (
            g.owner &&
            g.owner.current instanceof HTMLElement &&
            !g.owner.getProps().onUpdate
          ) {
            let _ = (function (h, g, { onUpdate: _, onComplete: b, ...y }) {
              let A, F;
              let Y =
                K() &&
                q.has(g) &&
                !y.repeatDelay &&
                "mirror" !== y.repeatType &&
                0 !== y.damping &&
                "inertia" !== y.type;
              if (!Y) return !1;
              let X = !1,
                updateFinishedPromise = () => {
                  F = new Promise((h) => {
                    A = h;
                  });
                };
              updateFinishedPromise();
              let { keyframes: Q, duration: et = 300, ease: en, times: er } = y;
              if (requiresPregeneratedKeyframes(g, y)) {
                let h = (0, H.y)({ ...y, repeat: 0, delay: 0 }),
                  g = { done: !1, value: Q[0] },
                  _ = [],
                  b = 0;
                for (; !g.done && b < 2e4; )
                  (g = h.sample(b)), _.push(g.value), (b += 10);
                (er = void 0), (Q = _), (et = b - 10), (en = "linear");
              }
              let ei = (function (
                  h,
                  g,
                  _,
                  {
                    delay: b = 0,
                    duration: y,
                    repeat: A = 0,
                    repeatType: N = "loop",
                    ease: F,
                    times: H,
                  } = {},
                ) {
                  let U = { [g]: _ };
                  H && (U.offset = H);
                  let K = (function mapEasingToNativeEasing(h) {
                    if (h)
                      return isBezierDefinition(h)
                        ? cubicBezierAsString(h)
                        : Array.isArray(h)
                          ? h.map(mapEasingToNativeEasing)
                          : B[h];
                  })(F);
                  return (
                    Array.isArray(K) && (U.easing = K),
                    h.animate(U, {
                      delay: b,
                      duration: y,
                      easing: Array.isArray(K) ? "linear" : K,
                      fill: "both",
                      iterations: A + 1,
                      direction: "reverse" === N ? "alternate" : "normal",
                    })
                  );
                })(h.owner.current, g, Q, {
                  ...y,
                  duration: et,
                  ease: en,
                  times: er,
                }),
                cancelAnimation = () => ei.cancel(),
                safeCancel = () => {
                  U.Wi.update(cancelAnimation), A(), updateFinishedPromise();
                };
              return (
                (ei.onfinish = () => {
                  h.set(
                    (function (h, { repeat: g, repeatType: _ = "loop" }) {
                      let b =
                        g && "loop" !== _ && g % 2 == 1 ? 0 : h.length - 1;
                      return h[b];
                    })(Q, y),
                  ),
                    b && b(),
                    safeCancel();
                }),
                {
                  then: (h, g) => F.then(h, g),
                  get timeline() {
                    return ei.timeline;
                  },
                  set timeline(timeline) {
                    (ei.timeline = timeline), (ei.onfinish = null);
                  },
                  get time() {
                    return (0, N.X)(ei.currentTime || 0);
                  },
                  set time(newTime) {
                    ei.currentTime = (0, N.w)(newTime);
                  },
                  get speed() {
                    return ei.playbackRate;
                  },
                  set speed(newSpeed) {
                    ei.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, N.X)(et);
                  },
                  play: () => {
                    X || (ei.play(), (0, U.Pn)(cancelAnimation));
                  },
                  pause: () => ei.pause(),
                  stop: () => {
                    if (((X = !0), "idle" === ei.playState)) return;
                    let { currentTime: g } = ei;
                    if (g) {
                      let _ = (0, H.y)({ ...y, autoplay: !1 });
                      h.setWithVelocity(
                        _.sample(g - 10).value,
                        _.sample(g).value,
                        10,
                      );
                    }
                    safeCancel();
                  },
                  complete: () => ei.finish(),
                  cancel: safeCancel,
                }
              );
            })(g, h, ec);
            if (_) return _;
          }
          return (0, H.y)(ec);
        };
    },
    61059: function (h, g, _) {
      "use strict";
      _.d(g, {
        D: function () {
          return animateSingleValue;
        },
      });
      var b = _(67218),
        y = _(33234),
        A = _(40406);
      function animateSingleValue(h, g, _) {
        let N = (0, A.i)(h) ? h : (0, y.B)(h);
        return N.start((0, b.v)("", N, g, _)), N.animation;
      }
    },
    18254: function (h, g, _) {
      "use strict";
      _.d(g, {
        w: function () {
          return animateTarget;
        },
      });
      var b = _(94714),
        y = _(93193);
      let A = "data-" + (0, y.D)("framerAppearId");
      var N = _(67218),
        F = _(12490),
        B = _(58172),
        H = _(2074);
      function animateTarget(
        h,
        g,
        { delay: _ = 0, transitionOverride: y, type: U } = {},
      ) {
        let {
            transition: K = h.getDefaultTransition(),
            transitionEnd: q,
            ...Y
          } = h.makeTargetAnimatable(g),
          X = h.getValue("willChange");
        y && (K = y);
        let Q = [],
          et = U && h.animationState && h.animationState.getState()[U];
        for (let g in Y) {
          let y = h.getValue(g),
            B = Y[g];
          if (
            !y ||
            void 0 === B ||
            (et &&
              (function ({ protectedKeys: h, needsAnimating: g }, _) {
                let b = h.hasOwnProperty(_) && !0 !== g[_];
                return (g[_] = !1), b;
              })(et, g))
          )
            continue;
          let U = { delay: _, elapsed: 0, ...K };
          if (window.HandoffAppearAnimations && !y.hasAnimated) {
            let _ = h.getProps()[A];
            _ && (U.elapsed = window.HandoffAppearAnimations(_, g, y, H.Wi));
          }
          y.start(
            (0, N.v)(
              g,
              y,
              B,
              h.shouldReduceMotion && b.G.has(g) ? { type: !1 } : U,
            ),
          );
          let q = y.animation;
          (0, F.L)(X) && (X.add(g), q.then(() => X.remove(g))), Q.push(q);
        }
        return (
          q &&
            Promise.all(Q).then(() => {
              q && (0, B.CD)(h, q);
            }),
          Q
        );
      }
    },
    96912: function (h, g, _) {
      "use strict";
      _.d(g, {
        d: function () {
          return animateVisualElement;
        },
      });
      var b = _(52248),
        y = _(18254);
      function animateVariant(h, g, _ = {}) {
        let A = (0, b.x)(h, g, _.custom),
          { transition: N = h.getDefaultTransition() || {} } = A || {};
        _.transitionOverride && (N = _.transitionOverride);
        let F = A
            ? () => Promise.all((0, y.w)(h, A, _))
            : () => Promise.resolve(),
          B =
            h.variantChildren && h.variantChildren.size
              ? (b = 0) => {
                  let {
                    delayChildren: y = 0,
                    staggerChildren: A,
                    staggerDirection: F,
                  } = N;
                  return (function (h, g, _ = 0, b = 0, y = 1, A) {
                    let N = [],
                      F = (h.variantChildren.size - 1) * b,
                      B = 1 === y ? (h = 0) => h * b : (h = 0) => F - h * b;
                    return (
                      Array.from(h.variantChildren)
                        .sort(sortByTreeOrder)
                        .forEach((h, b) => {
                          h.notify("AnimationStart", g),
                            N.push(
                              animateVariant(h, g, {
                                ...A,
                                delay: _ + B(b),
                              }).then(() => h.notify("AnimationComplete", g)),
                            );
                        }),
                      Promise.all(N)
                    );
                  })(h, g, y + b, A, F, _);
                }
              : () => Promise.resolve(),
          { when: H } = N;
        if (!H) return Promise.all([F(), B(_.delay)]);
        {
          let [h, g] = "beforeChildren" === H ? [F, B] : [B, F];
          return h().then(() => g());
        }
      }
      function sortByTreeOrder(h, g) {
        return h.sortNodePosition(g);
      }
      function animateVisualElement(h, g, _ = {}) {
        let A;
        if ((h.notify("AnimationStart", g), Array.isArray(g))) {
          let b = g.map((g) => animateVariant(h, g, _));
          A = Promise.all(b);
        } else if ("string" == typeof g) A = animateVariant(h, g, _);
        else {
          let N = "function" == typeof g ? (0, b.x)(h, g, _.custom) : g;
          A = Promise.all((0, y.w)(h, N, _));
        }
        return A.then(() => h.notify("AnimationComplete", g));
      }
    },
    2445: function (h, g, _) {
      "use strict";
      function isAnimationControls(h) {
        return "object" == typeof h && "function" == typeof h.start;
      }
      _.d(g, {
        H: function () {
          return isAnimationControls;
        },
      });
    },
    48488: function (h, g, _) {
      "use strict";
      _.d(g, {
        C: function () {
          return isKeyframesTarget;
        },
      });
      let isKeyframesTarget = (h) => Array.isArray(h);
    },
    31056: function (h, g, _) {
      "use strict";
      function isTransitionDefined({
        when: h,
        delay: g,
        delayChildren: _,
        staggerChildren: b,
        staggerDirection: y,
        repeat: A,
        repeatType: N,
        repeatDelay: F,
        from: B,
        elapsed: H,
        ...U
      }) {
        return !!Object.keys(U).length;
      }
      function getValueTransition(h, g) {
        return h[g] || h.default || h;
      }
      _.d(g, {
        e: function () {
          return getValueTransition;
        },
        r: function () {
          return isTransitionDefined;
        },
      });
    },
    11544: function (h, g, _) {
      "use strict";
      _.d(g, {
        M: function () {
          return AnimatePresence;
        },
      });
      var b = _(67294),
        y = _(6337),
        A = _(4454),
        N = _(240),
        F = _(96681);
      let PopChildMeasure = class PopChildMeasure extends b.Component {
        getSnapshotBeforeUpdate(h) {
          let g = this.props.childRef.current;
          if (g && h.isPresent && !this.props.isPresent) {
            let h = this.props.sizeRef.current;
            (h.height = g.offsetHeight || 0),
              (h.width = g.offsetWidth || 0),
              (h.top = g.offsetTop),
              (h.left = g.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      };
      function PopChild({ children: h, isPresent: g }) {
        let _ = (0, b.useId)(),
          y = (0, b.useRef)(null),
          A = (0, b.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, b.useInsertionEffect)(() => {
            let { width: h, height: b, top: N, left: F } = A.current;
            if (g || !y.current || !h || !b) return;
            y.current.dataset.motionPopId = _;
            let B = document.createElement("style");
            return (
              document.head.appendChild(B),
              B.sheet &&
                B.sheet.insertRule(`
          [data-motion-pop-id="${_}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${b}px !important;
            top: ${N}px !important;
            left: ${F}px !important;
          }
        `),
              () => {
                document.head.removeChild(B);
              }
            );
          }, [g]),
          b.createElement(
            PopChildMeasure,
            { isPresent: g, childRef: y, sizeRef: A },
            b.cloneElement(h, { ref: y }),
          )
        );
      }
      let PresenceChild = ({
        children: h,
        initial: g,
        isPresent: _,
        onExitComplete: y,
        custom: A,
        presenceAffectsLayout: B,
        mode: H,
      }) => {
        let U = (0, F.h)(newChildrenMap),
          K = (0, b.useId)(),
          q = (0, b.useMemo)(
            () => ({
              id: K,
              initial: g,
              isPresent: _,
              custom: A,
              onExitComplete: (h) => {
                for (let g of (U.set(h, !0), U.values())) if (!g) return;
                y && y();
              },
              register: (h) => (U.set(h, !1), () => U.delete(h)),
            }),
            B ? void 0 : [_],
          );
        return (
          (0, b.useMemo)(() => {
            U.forEach((h, g) => U.set(g, !1));
          }, [_]),
          b.useEffect(() => {
            _ || U.size || !y || y();
          }, [_]),
          "popLayout" === H &&
            (h = b.createElement(PopChild, { isPresent: _ }, h)),
          b.createElement(N.O.Provider, { value: q }, h)
        );
      };
      function newChildrenMap() {
        return new Map();
      }
      var B = _(25364),
        H = _(58868),
        U = _(65411),
        K = _(45487);
      let getChildKey = (h) => h.key || "",
        AnimatePresence = ({
          children: h,
          custom: g,
          initial: _ = !0,
          onExitComplete: N,
          exitBeforeEnter: F,
          presenceAffectsLayout: q = !0,
          mode: Y = "sync",
        }) => {
          (0, K.k)(!F, "Replace exitBeforeEnter with mode='wait'");
          let X = (0, b.useContext)(B.p).forceRender || (0, y.N)()[0],
            Q = (0, A.t)(),
            et = (function (h) {
              let g = [];
              return (
                b.Children.forEach(h, (h) => {
                  (0, b.isValidElement)(h) && g.push(h);
                }),
                g
              );
            })(h),
            en = et,
            er = (0, b.useRef)(new Map()).current,
            ei = (0, b.useRef)(en),
            eo = (0, b.useRef)(new Map()).current,
            ea = (0, b.useRef)(!0);
          if (
            ((0, H.L)(() => {
              (ea.current = !1),
                (function (h, g) {
                  h.forEach((h) => {
                    let _ = getChildKey(h);
                    g.set(_, h);
                  });
                })(et, eo),
                (ei.current = en);
            }),
            (0, U.z)(() => {
              (ea.current = !0), eo.clear(), er.clear();
            }),
            ea.current)
          )
            return b.createElement(
              b.Fragment,
              null,
              en.map((h) =>
                b.createElement(
                  PresenceChild,
                  {
                    key: getChildKey(h),
                    isPresent: !0,
                    initial: !!_ && void 0,
                    presenceAffectsLayout: q,
                    mode: Y,
                  },
                  h,
                ),
              ),
            );
          en = [...en];
          let es = ei.current.map(getChildKey),
            el = et.map(getChildKey),
            eu = es.length;
          for (let h = 0; h < eu; h++) {
            let g = es[h];
            -1 !== el.indexOf(g) || er.has(g) || er.set(g, void 0);
          }
          return (
            "wait" === Y && er.size && (en = []),
            er.forEach((h, _) => {
              if (-1 !== el.indexOf(_)) return;
              let y = eo.get(_);
              if (!y) return;
              let A = es.indexOf(_),
                F = h;
              F ||
                ((F = b.createElement(
                  PresenceChild,
                  {
                    key: getChildKey(y),
                    isPresent: !1,
                    onExitComplete: () => {
                      eo.delete(_), er.delete(_);
                      let h = ei.current.findIndex((h) => h.key === _);
                      if ((ei.current.splice(h, 1), !er.size)) {
                        if (((ei.current = et), !1 === Q.current)) return;
                        X(), N && N();
                      }
                    },
                    custom: g,
                    presenceAffectsLayout: q,
                    mode: Y,
                  },
                  y,
                )),
                er.set(_, F)),
                en.splice(A, 0, F);
            }),
            (en = en.map((h) => {
              let g = h.key;
              return er.has(g)
                ? h
                : b.createElement(
                    PresenceChild,
                    {
                      key: getChildKey(h),
                      isPresent: !0,
                      presenceAffectsLayout: q,
                      mode: Y,
                    },
                    h,
                  );
            })),
            b.createElement(
              b.Fragment,
              null,
              er.size ? en : en.map((h) => (0, b.cloneElement)(h)),
            )
          );
        };
    },
    25364: function (h, g, _) {
      "use strict";
      _.d(g, {
        p: function () {
          return y;
        },
      });
      var b = _(67294);
      let y = (0, b.createContext)({});
    },
    16014: function (h, g, _) {
      "use strict";
      _.d(g, {
        _: function () {
          return y;
        },
      });
      var b = _(67294);
      let y = (0, b.createContext)({
        transformPagePoint: (h) => h,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (h, g, _) {
      "use strict";
      _.d(g, {
        O: function () {
          return y;
        },
      });
      var b = _(67294);
      let y = (0, b.createContext)(null);
    },
    27255: function (h, g, _) {
      "use strict";
      _.d(g, {
        Bn: function () {
          return A;
        },
        X7: function () {
          return N;
        },
        Z7: function () {
          return circIn;
        },
      });
      var b = _(90415),
        y = _(75129);
      let circIn = (h) => 1 - Math.sin(Math.acos(h)),
        A = (0, y.M)(circIn),
        N = (0, b.o)(A);
    },
    90415: function (h, g, _) {
      "use strict";
      _.d(g, {
        o: function () {
          return mirrorEasing;
        },
      });
      let mirrorEasing = (h) => (g) =>
        g <= 0.5 ? h(2 * g) / 2 : (2 - h(2 * (1 - g))) / 2;
    },
    75129: function (h, g, _) {
      "use strict";
      _.d(g, {
        M: function () {
          return reverseEasing;
        },
      });
      let reverseEasing = (h) => (g) => 1 - h(1 - g);
    },
    43338: function (h, g, _) {
      "use strict";
      _.d(g, {
        N: function () {
          return isEasingArray;
        },
      });
      let isEasingArray = (h) => Array.isArray(h) && "number" != typeof h[0];
    },
    2074: function (h, g, _) {
      "use strict";
      _.d(g, {
        Pn: function () {
          return N;
        },
        Wi: function () {
          return A;
        },
        frameData: function () {
          return F;
        },
        S6: function () {
          return B;
        },
      });
      var b = _(81662);
      let y = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: A,
          cancel: N,
          state: F,
          steps: B,
        } = (function (h, g) {
          let _ = !1,
            b = !0,
            A = { delta: 0, timestamp: 0, isProcessing: !1 },
            N = y.reduce(
              (h, g) => (
                (h[g] = (function (h) {
                  let g = [],
                    _ = [],
                    b = 0,
                    y = !1,
                    A = !1,
                    N = new WeakSet(),
                    F = {
                      schedule: (h, A = !1, F = !1) => {
                        let B = F && y,
                          H = B ? g : _;
                        return (
                          A && N.add(h),
                          -1 === H.indexOf(h) &&
                            (H.push(h), B && y && (b = g.length)),
                          h
                        );
                      },
                      cancel: (h) => {
                        let g = _.indexOf(h);
                        -1 !== g && _.splice(g, 1), N.delete(h);
                      },
                      process: (B) => {
                        if (y) {
                          A = !0;
                          return;
                        }
                        if (
                          ((y = !0),
                          ([g, _] = [_, g]),
                          (_.length = 0),
                          (b = g.length))
                        )
                          for (let _ = 0; _ < b; _++) {
                            let b = g[_];
                            b(B), N.has(b) && (F.schedule(b), h());
                          }
                        (y = !1), A && ((A = !1), F.process(B));
                      },
                    };
                  return F;
                })(() => (_ = !0))),
                h
              ),
              {},
            ),
            processStep = (h) => N[h].process(A),
            processBatch = (N) => {
              (_ = !1),
                (A.delta = b
                  ? 1e3 / 60
                  : Math.max(Math.min(N - A.timestamp, 40), 1)),
                (A.timestamp = N),
                (A.isProcessing = !0),
                y.forEach(processStep),
                (A.isProcessing = !1),
                _ && g && ((b = !1), h(processBatch));
            },
            wake = () => {
              (_ = !0), (b = !0), A.isProcessing || h(processBatch);
            },
            F = y.reduce((h, g) => {
              let b = N[g];
              return (
                (h[g] = (h, g = !1, y = !1) => (
                  _ || wake(), b.schedule(h, g, y)
                )),
                h
              );
            }, {});
          return {
            schedule: F,
            cancel: (h) => y.forEach((g) => N[g].cancel(h)),
            state: A,
            steps: N,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : b.Z,
          !0,
        );
    },
    9442: function (h, g, _) {
      "use strict";
      _.d(g, {
        A: function () {
          return y;
        },
      });
      let b = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        y = {};
      for (let h in b) y[h] = { isEnabled: (g) => b[h].some((h) => !!g[h]) };
    },
    56816: function (h, g, _) {
      "use strict";
      _.d(g, {
        j: function () {
          return isForcedMotionValue;
        },
      });
      var b = _(64561),
        y = _(94714);
      function isForcedMotionValue(h, { layout: g, layoutId: _ }) {
        return (
          y.G.has(h) ||
          h.startsWith("origin") ||
          ((g || void 0 !== _) && (!!b.P[h] || "opacity" === h))
        );
      }
    },
    76117: function (h, g, _) {
      "use strict";
      function convertBoundingBoxToBox({
        top: h,
        left: g,
        right: _,
        bottom: b,
      }) {
        return { x: { min: g, max: _ }, y: { min: h, max: b } };
      }
      function convertBoxToBoundingBox({ x: h, y: g }) {
        return { top: g.min, right: h.max, bottom: g.max, left: h.min };
      }
      function transformBoxPoints(h, g) {
        if (!g) return h;
        let _ = g({ x: h.left, y: h.top }),
          b = g({ x: h.right, y: h.bottom });
        return { top: _.y, left: _.x, bottom: b.y, right: b.x };
      }
      _.d(g, {
        d7: function () {
          return transformBoxPoints;
        },
        i8: function () {
          return convertBoundingBoxToBox;
        },
        z2: function () {
          return convertBoxToBoundingBox;
        },
      });
    },
    16e3: function (h, g, _) {
      "use strict";
      _.d(g, {
        D2: function () {
          return transformBox;
        },
        YY: function () {
          return applyTreeDeltas;
        },
        am: function () {
          return translateAxis;
        },
        o2: function () {
          return applyBoxDelta;
        },
        q2: function () {
          return scalePoint;
        },
      });
      var b = _(80022),
        y = _(99527);
      function scalePoint(h, g, _) {
        return _ + g * (h - _);
      }
      function applyPointDelta(h, g, _, b, y) {
        return void 0 !== y && (h = b + y * (h - b)), b + _ * (h - b) + g;
      }
      function applyAxisDelta(h, g = 0, _ = 1, b, y) {
        (h.min = applyPointDelta(h.min, g, _, b, y)),
          (h.max = applyPointDelta(h.max, g, _, b, y));
      }
      function applyBoxDelta(h, { x: g, y: _ }) {
        applyAxisDelta(h.x, g.translate, g.scale, g.originPoint),
          applyAxisDelta(h.y, _.translate, _.scale, _.originPoint);
      }
      function applyTreeDeltas(h, g, _, b = !1) {
        let A, N;
        let F = _.length;
        if (F) {
          g.x = g.y = 1;
          for (let B = 0; B < F; B++) {
            N = (A = _[B]).projectionDelta;
            let F = A.instance;
            (!F || !F.style || "contents" !== F.style.display) &&
              (b &&
                A.options.layoutScroll &&
                A.scroll &&
                A !== A.root &&
                transformBox(h, {
                  x: -A.scroll.offset.x,
                  y: -A.scroll.offset.y,
                }),
              N &&
                ((g.x *= N.x.scale), (g.y *= N.y.scale), applyBoxDelta(h, N)),
              b &&
                (0, y.ud)(A.latestValues) &&
                transformBox(h, A.latestValues));
          }
          (g.x = snapToDefault(g.x)), (g.y = snapToDefault(g.y));
        }
      }
      function snapToDefault(h) {
        return Number.isInteger(h)
          ? h
          : h > 1.0000000000001 || h < 0.999999999999
            ? h
            : 1;
      }
      function translateAxis(h, g) {
        (h.min = h.min + g), (h.max = h.max + g);
      }
      function transformAxis(h, g, [_, y, A]) {
        let N = void 0 !== g[A] ? g[A] : 0.5,
          F = (0, b.C)(h.min, h.max, N);
        applyAxisDelta(h, g[_], g[y], F, g.scale);
      }
      let A = ["x", "scaleX", "originX"],
        N = ["y", "scaleY", "originY"];
      function transformBox(h, g) {
        transformAxis(h.x, g, A), transformAxis(h.y, g, N);
      }
    },
    61512: function (h, g, _) {
      "use strict";
      _.d(g, {
        dO: function () {
          return createBox;
        },
        wc: function () {
          return createDelta;
        },
      });
      let createAxisDelta = () => ({
          translate: 0,
          scale: 1,
          origin: 0,
          originPoint: 0,
        }),
        createDelta = () => ({ x: createAxisDelta(), y: createAxisDelta() }),
        createAxis = () => ({ min: 0, max: 0 }),
        createBox = () => ({ x: createAxis(), y: createAxis() });
    },
    64561: function (h, g, _) {
      "use strict";
      _.d(g, {
        B: function () {
          return addScaleCorrector;
        },
        P: function () {
          return b;
        },
      });
      let b = {};
      function addScaleCorrector(h) {
        Object.assign(b, h);
      }
    },
    99527: function (h, g, _) {
      "use strict";
      function isIdentityScale(h) {
        return void 0 === h || 1 === h;
      }
      function hasScale({ scale: h, scaleX: g, scaleY: _ }) {
        return (
          !isIdentityScale(h) || !isIdentityScale(g) || !isIdentityScale(_)
        );
      }
      function hasTransform(h) {
        return (
          hasScale(h) ||
          has2DTranslate(h) ||
          h.z ||
          h.rotate ||
          h.rotateX ||
          h.rotateY
        );
      }
      function has2DTranslate(h) {
        var g, _;
        return ((g = h.x) && "0%" !== g) || ((_ = h.y) && "0%" !== _);
      }
      _.d(g, {
        D_: function () {
          return has2DTranslate;
        },
        Lj: function () {
          return hasScale;
        },
        ud: function () {
          return hasTransform;
        },
      });
    },
    56460: function (h, g, _) {
      "use strict";
      _.d(g, {
        J: function () {
          return measureViewportBox;
        },
        z: function () {
          return measurePageBox;
        },
      });
      var b = _(76117),
        y = _(16e3);
      function measureViewportBox(h, g) {
        return (0, b.i8)((0, b.d7)(h.getBoundingClientRect(), g));
      }
      function measurePageBox(h, g, _) {
        let b = measureViewportBox(h, _),
          { scroll: A } = g;
        return A && ((0, y.am)(b.x, A.offset.x), (0, y.am)(b.y, A.offset.y)), b;
      }
    },
    81760: function (h, g, _) {
      "use strict";
      _.d(g, {
        J: function () {
          return DOMVisualElement;
        },
      });
      var b = _(58172),
        y = _(45487),
        A = _(57630);
      let N = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function getVariableValue(h, g, _ = 1) {
        (0, y.k)(
          _ <= 4,
          `Max CSS variable fallback depth detected in property "${h}". This may indicate a circular fallback dependency.`,
        );
        let [b, F] = (function (h) {
          let g = N.exec(h);
          if (!g) return [,];
          let [, _, b] = g;
          return [_, b];
        })(h);
        if (!b) return;
        let B = window.getComputedStyle(g).getPropertyValue(b);
        return B ? B.trim() : (0, A.tm)(F) ? getVariableValue(F, g, _ + 1) : F;
      }
      var F = _(48488),
        B = _(94714),
        H = _(56440),
        U = _(11741),
        K = _(61649),
        q = _(96190);
      let Y = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        isPositionalKey = (h) => Y.has(h),
        hasPositionalKey = (h) => Object.keys(h).some(isPositionalKey),
        isNumOrPxType = (h) => h === K.Rx || h === q.px,
        getPosFromMatrix = (h, g) => parseFloat(h.split(", ")[g]),
        getTranslateFromMatrix =
          (h, g) =>
          (_, { transform: b }) => {
            if ("none" === b || !b) return 0;
            let y = b.match(/^matrix3d\((.+)\)$/);
            if (y) return getPosFromMatrix(y[1], g);
            {
              let g = b.match(/^matrix\((.+)\)$/);
              return g ? getPosFromMatrix(g[1], h) : 0;
            }
          },
        X = new Set(["x", "y", "z"]),
        Q = B._.filter((h) => !X.has(h)),
        et = {
          width: ({ x: h }, { paddingLeft: g = "0", paddingRight: _ = "0" }) =>
            h.max - h.min - parseFloat(g) - parseFloat(_),
          height: ({ y: h }, { paddingTop: g = "0", paddingBottom: _ = "0" }) =>
            h.max - h.min - parseFloat(g) - parseFloat(_),
          top: (h, { top: g }) => parseFloat(g),
          left: (h, { left: g }) => parseFloat(g),
          bottom: ({ y: h }, { top: g }) => parseFloat(g) + (h.max - h.min),
          right: ({ x: h }, { left: g }) => parseFloat(g) + (h.max - h.min),
          x: getTranslateFromMatrix(4, 13),
          y: getTranslateFromMatrix(5, 14),
        };
      (et.translateX = et.x), (et.translateY = et.y);
      let convertChangedValueTypes = (h, g, _) => {
          let b = g.measureViewportBox(),
            y = g.current,
            A = getComputedStyle(y),
            { display: N } = A,
            F = {};
          "none" === N && g.setStaticValue("display", h.display || "block"),
            _.forEach((h) => {
              F[h] = et[h](b, A);
            }),
            g.render();
          let B = g.measureViewportBox();
          return (
            _.forEach((_) => {
              let b = g.getValue(_);
              b && b.jump(F[_]), (h[_] = et[_](B, A));
            }),
            h
          );
        },
        checkAndConvertChangedValueTypes = (h, g, _ = {}, b = {}) => {
          (g = { ...g }), (b = { ...b });
          let A = Object.keys(g).filter(isPositionalKey),
            N = [],
            B = !1,
            K = [];
          if (
            (A.forEach((A) => {
              let U;
              let Y = h.getValue(A);
              if (!h.hasValue(A)) return;
              let X = _[A],
                et = (0, H.C)(X),
                en = g[A];
              if ((0, F.C)(en)) {
                let h = en.length,
                  g = null === en[0] ? 1 : 0;
                (X = en[g]), (et = (0, H.C)(X));
                for (let _ = g; _ < h && null !== en[_]; _++)
                  U
                    ? (0, y.k)(
                        (0, H.C)(en[_]) === U,
                        "All keyframes must be of the same type",
                      )
                    : ((U = (0, H.C)(en[_])),
                      (0, y.k)(
                        U === et || (isNumOrPxType(et) && isNumOrPxType(U)),
                        "Keyframes must be of the same dimension as the current value",
                      ));
              } else U = (0, H.C)(en);
              if (et !== U) {
                if (isNumOrPxType(et) && isNumOrPxType(U)) {
                  let h = Y.get();
                  "string" == typeof h && Y.set(parseFloat(h)),
                    "string" == typeof en
                      ? (g[A] = parseFloat(en))
                      : Array.isArray(en) &&
                        U === q.px &&
                        (g[A] = en.map(parseFloat));
                } else
                  (null == et ? void 0 : et.transform) &&
                  (null == U ? void 0 : U.transform) &&
                  (0 === X || 0 === en)
                    ? 0 === X
                      ? Y.set(U.transform(X))
                      : (g[A] = et.transform(en))
                    : (B ||
                        ((N = (function (h) {
                          let g = [];
                          return (
                            Q.forEach((_) => {
                              let b = h.getValue(_);
                              void 0 !== b &&
                                (g.push([_, b.get()]),
                                b.set(_.startsWith("scale") ? 1 : 0));
                            }),
                            g.length && h.render(),
                            g
                          );
                        })(h)),
                        (B = !0)),
                      K.push(A),
                      (b[A] = void 0 !== b[A] ? b[A] : g[A]),
                      Y.jump(en));
              }
            }),
            !K.length)
          )
            return { target: g, transitionEnd: b };
          {
            let _ = K.indexOf("height") >= 0 ? window.pageYOffset : null,
              y = convertChangedValueTypes(g, h, K);
            return (
              N.length &&
                N.forEach(([g, _]) => {
                  h.getValue(g).set(_);
                }),
              h.render(),
              U.j && null !== _ && window.scrollTo({ top: _ }),
              { target: y, transitionEnd: b }
            );
          }
        },
        parseDomVariant = (h, g, _, b) => {
          var y, N;
          let F = (function (h, { ...g }, _) {
            let b = h.current;
            if (!(b instanceof Element)) return { target: g, transitionEnd: _ };
            for (let y in (_ && (_ = { ..._ }),
            h.values.forEach((h) => {
              let g = h.get();
              if (!(0, A.tm)(g)) return;
              let _ = getVariableValue(g, b);
              _ && h.set(_);
            }),
            g)) {
              let h = g[y];
              if (!(0, A.tm)(h)) continue;
              let N = getVariableValue(h, b);
              N && ((g[y] = N), _ || (_ = {}), void 0 === _[y] && (_[y] = h));
            }
            return { target: g, transitionEnd: _ };
          })(h, g, b);
          return (
            (g = F.target),
            (b = F.transitionEnd),
            (y = g),
            (N = b),
            hasPositionalKey(y)
              ? checkAndConvertChangedValueTypes(h, y, _, N)
              : { target: y, transitionEnd: N }
          );
        };
      var en = _(61512),
        er = _(51804);
      let ei = { current: null },
        eo = { current: !1 };
      var ea = _(21560),
        es = _(33234),
        el = _(12490),
        eu = _(40406),
        ec = _(7504),
        ed = _(97732),
        ef = _(79432),
        ep = _(9442),
        eh = _(22963),
        em = _(56955),
        eg = _(2074);
      let ev = Object.keys(ep.A),
        e_ = ev.length,
        eb = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        ey = eh.V.length;
      let VisualElement = class VisualElement {
        constructor(
          {
            parent: h,
            props: g,
            presenceContext: _,
            reducedMotionConfig: b,
            visualState: y,
          },
          A = {},
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.scheduleRender = () => eg.Wi.render(this.render, !1, !0));
          let { latestValues: N, renderState: F } = y;
          (this.latestValues = N),
            (this.baseTarget = { ...N }),
            (this.initialValues = g.initial ? { ...N } : {}),
            (this.renderState = F),
            (this.parent = h),
            (this.props = g),
            (this.presenceContext = _),
            (this.depth = h ? h.depth + 1 : 0),
            (this.reducedMotionConfig = b),
            (this.options = A),
            (this.isControllingVariants = (0, ec.G)(g)),
            (this.isVariantNode = (0, ec.M)(g)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(h && h.current));
          let { willChange: B, ...H } = this.scrapeMotionValuesFromProps(g, {});
          for (let h in H) {
            let g = H[h];
            void 0 !== N[h] &&
              (0, eu.i)(g) &&
              (g.set(N[h], !1), (0, el.L)(B) && B.add(h));
          }
        }
        scrapeMotionValuesFromProps(h, g) {
          return {};
        }
        mount(h) {
          (this.current = h),
            em.R.set(h, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(h),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((h, g) => this.bindToMotionValue(g, h)),
            eo.current ||
              (function () {
                if (((eo.current = !0), U.j)) {
                  if (window.matchMedia) {
                    let h = window.matchMedia("(prefers-reduced-motion)"),
                      setReducedMotionPreferences = () =>
                        (ei.current = h.matches);
                    h.addListener(setReducedMotionPreferences),
                      setReducedMotionPreferences();
                  } else ei.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || ei.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let h in (em.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, eg.Pn)(this.notifyUpdate),
          (0, eg.Pn)(this.render),
          this.valueSubscriptions.forEach((h) => h()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[h].clear();
          for (let h in this.features) this.features[h].unmount();
          this.current = null;
        }
        bindToMotionValue(h, g) {
          let _ = B.G.has(h),
            b = g.on("change", (g) => {
              (this.latestValues[h] = g),
                this.props.onUpdate && eg.Wi.update(this.notifyUpdate, !1, !0),
                _ && this.projection && (this.projection.isTransformDirty = !0);
            }),
            y = g.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(h, () => {
            b(), y();
          });
        }
        sortNodePosition(h) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === h.type
            ? this.sortInstanceNodePosition(this.current, h.current)
            : 0;
        }
        loadFeatures({ children: h, ...g }, _, b, y) {
          let A, N;
          for (let h = 0; h < e_; h++) {
            let _ = ev[h],
              {
                isEnabled: b,
                Feature: y,
                ProjectionNode: F,
                MeasureLayout: B,
              } = ep.A[_];
            F && (A = F),
              b(g) &&
                (!this.features[_] && y && (this.features[_] = new y(this)),
                B && (N = B));
          }
          if (!this.projection && A) {
            this.projection = new A(
              this.latestValues,
              this.parent && this.parent.projection,
            );
            let {
              layoutId: h,
              layout: _,
              drag: b,
              dragConstraints: N,
              layoutScroll: F,
              layoutRoot: B,
            } = g;
            this.projection.setOptions({
              layoutId: h,
              layout: _,
              alwaysMeasureLayout: !!b || (N && (0, er.I)(N)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof _ ? _ : "both",
              initialPromotionConfig: y,
              layoutScroll: F,
              layoutRoot: B,
            });
          }
          return N;
        }
        updateFeatures() {
          for (let h in this.features) {
            let g = this.features[h];
            g.isMounted ? g.update() : (g.mount(), (g.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props,
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, en.dO)();
        }
        getStaticValue(h) {
          return this.latestValues[h];
        }
        setStaticValue(h, g) {
          this.latestValues[h] = g;
        }
        makeTargetAnimatable(h, g = !0) {
          return this.makeTargetAnimatableFromInstance(h, this.props, g);
        }
        update(h, g) {
          (h.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = h),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = g);
          for (let g = 0; g < eb.length; g++) {
            let _ = eb[g];
            this.propEventSubscriptions[_] &&
              (this.propEventSubscriptions[_](),
              delete this.propEventSubscriptions[_]);
            let b = h["on" + _];
            b && (this.propEventSubscriptions[_] = this.on(_, b));
          }
          (this.prevMotionValues = (function (h, g, _) {
            let { willChange: b } = g;
            for (let y in g) {
              let A = g[y],
                N = _[y];
              if ((0, eu.i)(A)) h.addValue(y, A), (0, el.L)(b) && b.add(y);
              else if ((0, eu.i)(N))
                h.addValue(y, (0, es.B)(A, { owner: h })),
                  (0, el.L)(b) && b.remove(y);
              else if (N !== A) {
                if (h.hasValue(y)) {
                  let g = h.getValue(y);
                  g.hasAnimated || g.set(A);
                } else {
                  let g = h.getStaticValue(y);
                  h.addValue(y, (0, es.B)(void 0 !== g ? g : A, { owner: h }));
                }
              }
            }
            for (let b in _) void 0 === g[b] && h.removeValue(b);
            return g;
          })(
            this,
            this.scrapeMotionValuesFromProps(h, this.prevProps),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(h) {
          return this.props.variants ? this.props.variants[h] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        getVariantContext(h = !1) {
          if (h) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let h = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (h.initial = this.props.initial),
              h
            );
          }
          let g = {};
          for (let h = 0; h < ey; h++) {
            let _ = eh.V[h],
              b = this.props[_];
            ((0, ed.$)(b) || !1 === b) && (g[_] = b);
          }
          return g;
        }
        addVariantChild(h) {
          let g = this.getClosestVariantNode();
          if (g)
            return (
              g.variantChildren && g.variantChildren.add(h),
              () => g.variantChildren.delete(h)
            );
        }
        addValue(h, g) {
          g !== this.values.get(h) &&
            (this.removeValue(h), this.bindToMotionValue(h, g)),
            this.values.set(h, g),
            (this.latestValues[h] = g.get());
        }
        removeValue(h) {
          this.values.delete(h);
          let g = this.valueSubscriptions.get(h);
          g && (g(), this.valueSubscriptions.delete(h)),
            delete this.latestValues[h],
            this.removeValueFromRenderState(h, this.renderState);
        }
        hasValue(h) {
          return this.values.has(h);
        }
        getValue(h, g) {
          if (this.props.values && this.props.values[h])
            return this.props.values[h];
          let _ = this.values.get(h);
          return (
            void 0 === _ &&
              void 0 !== g &&
              ((_ = (0, es.B)(g, { owner: this })), this.addValue(h, _)),
            _
          );
        }
        readValue(h) {
          var g;
          return void 0 === this.latestValues[h] && this.current
            ? null !== (g = this.getBaseTargetFromProps(this.props, h)) &&
              void 0 !== g
              ? g
              : this.readValueFromInstance(this.current, h, this.options)
            : this.latestValues[h];
        }
        setBaseTarget(h, g) {
          this.baseTarget[h] = g;
        }
        getBaseTarget(h) {
          var g;
          let { initial: _ } = this.props,
            b =
              "string" == typeof _ || "object" == typeof _
                ? null === (g = (0, ef.o)(this.props, _)) || void 0 === g
                  ? void 0
                  : g[h]
                : void 0;
          if (_ && void 0 !== b) return b;
          let y = this.getBaseTargetFromProps(this.props, h);
          return void 0 === y || (0, eu.i)(y)
            ? void 0 !== this.initialValues[h] && void 0 === b
              ? void 0
              : this.baseTarget[h]
            : y;
        }
        on(h, g) {
          return (
            this.events[h] || (this.events[h] = new ea.L()),
            this.events[h].add(g)
          );
        }
        notify(h, ...g) {
          this.events[h] && this.events[h].notify(...g);
        }
      };
      let DOMVisualElement = class DOMVisualElement extends VisualElement {
        sortInstanceNodePosition(h, g) {
          return 2 & h.compareDocumentPosition(g) ? 1 : -1;
        }
        getBaseTargetFromProps(h, g) {
          return h.style ? h.style[g] : void 0;
        }
        removeValueFromRenderState(h, { vars: g, style: _ }) {
          delete g[h], delete _[h];
        }
        makeTargetAnimatableFromInstance(
          { transition: h, transitionEnd: g, ..._ },
          { transformValues: y },
          A,
        ) {
          let N = (0, b.P$)(_, h || {}, this);
          if ((y && (g && (g = y(g)), _ && (_ = y(_)), N && (N = y(N))), A)) {
            (0, b.GJ)(this, _, N);
            let h = parseDomVariant(this, _, N, g);
            (g = h.transitionEnd), (_ = h.target);
          }
          return { transition: h, transitionEnd: g, ..._ };
        }
      };
    },
    92520: function (h, g, _) {
      "use strict";
      let b;
      _.d(g, {
        E: function () {
          return td;
        },
      });
      var y,
        A = _(67294),
        N = _(16014);
      let F = (0, A.createContext)({});
      var B = _(240),
        H = _(58868);
      let U = (0, A.createContext)({ strict: !1 });
      var K = _(51804),
        q = _(97732),
        Y = _(7504);
      function variantLabelsAsDependency(h) {
        return Array.isArray(h) ? h.join(" ") : h;
      }
      var X = _(9442),
        Q = _(11741),
        et = _(25364);
      let en = (0, A.createContext)({}),
        er = Symbol.for("motionComponentSymbol"),
        ei = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function isSVGComponent(h) {
        if ("string" != typeof h || h.includes("-"));
        else if (ei.indexOf(h) > -1 || /[A-Z]/.test(h)) return !0;
        return !1;
      }
      var eo = _(56816),
        ea = _(40406),
        es = _(38057);
      let createHtmlRenderState = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function copyRawValuesOnly(h, g, _) {
        for (let b in g) (0, ea.i)(g[b]) || (0, eo.j)(b, _) || (h[b] = g[b]);
      }
      function useHTMLProps(h, g, _) {
        let b = {},
          y = (function (h, g, _) {
            let b = h.style || {},
              y = {};
            return (
              copyRawValuesOnly(y, b, h),
              Object.assign(
                y,
                (function ({ transformTemplate: h }, g, _) {
                  return (0, A.useMemo)(() => {
                    let b = createHtmlRenderState();
                    return (
                      (0, es.r)(b, g, { enableHardwareAcceleration: !_ }, h),
                      Object.assign({}, b.vars, b.style)
                    );
                  }, [g]);
                })(h, g, _),
              ),
              h.transformValues ? h.transformValues(y) : y
            );
          })(h, g, _);
        return (
          h.drag &&
            !1 !== h.dragListener &&
            ((b.draggable = !1),
            (y.userSelect = y.WebkitUserSelect = y.WebkitTouchCallout = "none"),
            (y.touchAction =
              !0 === h.drag ? "none" : `pan-${"x" === h.drag ? "y" : "x"}`)),
          void 0 === h.tabIndex &&
            (h.onTap || h.onTapStart || h.whileTap) &&
            (b.tabIndex = 0),
          (b.style = y),
          b
        );
      }
      let el = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function isValidMotionProp(h) {
        return (
          h.startsWith("while") ||
          (h.startsWith("drag") && "draggable" !== h) ||
          h.startsWith("layout") ||
          h.startsWith("onTap") ||
          h.startsWith("onPan") ||
          el.has(h)
        );
      }
      let shouldForward = (h) => !isValidMotionProp(h);
      try {
        (y = require("@emotion/is-prop-valid").default) &&
          (shouldForward = (h) =>
            h.startsWith("on") ? !isValidMotionProp(h) : y(h));
      } catch (h) {}
      var eu = _(85415);
      let createSvgRenderState = () => ({
        ...createHtmlRenderState(),
        attrs: {},
      });
      var ec = _(79854);
      function useSVGProps(h, g, _, b) {
        let y = (0, A.useMemo)(() => {
          let _ = createSvgRenderState();
          return (
            (0, eu.i)(
              _,
              g,
              { enableHardwareAcceleration: !1 },
              (0, ec.a)(b),
              h.transformTemplate,
            ),
            { ..._.attrs, style: { ..._.style } }
          );
        }, [g]);
        if (h.style) {
          let g = {};
          copyRawValuesOnly(g, h.style, h), (y.style = { ...g, ...y.style });
        }
        return y;
      }
      var ed = _(68504),
        ef = _(16832),
        ep = _(2445),
        eh = _(79432),
        em = _(96681),
        eg = _(8715);
      function resolveMotionValue(h) {
        let g = (0, ea.i)(h) ? h.get() : h;
        return (0, eg.p)(g) ? g.toValue() : g;
      }
      let makeUseVisualState = (h) => (g, _) => {
          let b = (0, A.useContext)(F),
            y = (0, A.useContext)(B.O),
            make = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: h,
                  createRenderState: g,
                  onMount: _,
                },
                b,
                y,
                A,
              ) {
                let N = {
                  latestValues: (function (h, g, _, b) {
                    let y = {},
                      A = b(h, {});
                    for (let h in A) y[h] = resolveMotionValue(A[h]);
                    let { initial: N, animate: F } = h,
                      B = (0, Y.G)(h),
                      H = (0, Y.M)(h);
                    g &&
                      H &&
                      !B &&
                      !1 !== h.inherit &&
                      (void 0 === N && (N = g.initial),
                      void 0 === F && (F = g.animate));
                    let U = !!_ && !1 === _.initial;
                    U = U || !1 === N;
                    let K = U ? F : N;
                    if (K && "boolean" != typeof K && !(0, ep.H)(K)) {
                      let g = Array.isArray(K) ? K : [K];
                      g.forEach((g) => {
                        let _ = (0, eh.o)(h, g);
                        if (!_) return;
                        let { transitionEnd: b, transition: A, ...N } = _;
                        for (let h in N) {
                          let g = N[h];
                          if (Array.isArray(g)) {
                            let h = U ? g.length - 1 : 0;
                            g = g[h];
                          }
                          null !== g && (y[h] = g);
                        }
                        for (let h in b) y[h] = b[h];
                      });
                    }
                    return y;
                  })(b, y, A, h),
                  renderState: g(),
                };
                return _ && (N.mount = (h) => _(b, h, N)), N;
              })(h, g, b, y);
          return _ ? make() : (0, em.h)(make);
        },
        ev = {
          useVisualState: makeUseVisualState({
            scrapeMotionValuesFromProps: ef.U,
            createRenderState: createSvgRenderState,
            onMount: (h, g, { renderState: _, latestValues: b }) => {
              try {
                _.dimensions =
                  "function" == typeof g.getBBox
                    ? g.getBBox()
                    : g.getBoundingClientRect();
              } catch (h) {
                _.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              (0, eu.i)(
                _,
                b,
                { enableHardwareAcceleration: !1 },
                (0, ec.a)(g.tagName),
                h.transformTemplate,
              ),
                (0, ed.K)(g, _);
            },
          }),
        };
      var e_ = _(50189);
      let eb = {
        useVisualState: makeUseVisualState({
          scrapeMotionValuesFromProps: e_.U,
          createRenderState: createHtmlRenderState,
        }),
      };
      function addDomEvent(h, g, _, b = { passive: !0 }) {
        return h.addEventListener(g, _, b), () => h.removeEventListener(g, _);
      }
      let isPrimaryPointer = (h) =>
        "mouse" === h.pointerType
          ? "number" != typeof h.button || h.button <= 0
          : !1 !== h.isPrimary;
      function extractEventInfo(h, g = "page") {
        return { point: { x: h[g + "X"], y: h[g + "Y"] } };
      }
      let addPointerInfo = (h) => (g) =>
        isPrimaryPointer(g) && h(g, extractEventInfo(g));
      function addPointerEvent(h, g, _, b) {
        return addDomEvent(h, g, addPointerInfo(_), b);
      }
      var ey = _(83624);
      function createLock(h) {
        let g = null;
        return () =>
          null === g &&
          ((g = h),
          () => {
            g = null;
          });
      }
      let ex = createLock("dragHorizontal"),
        ew = createLock("dragVertical");
      function getGlobalLock(h) {
        let g = !1;
        if ("y" === h) g = ew();
        else if ("x" === h) g = ex();
        else {
          let h = ex(),
            _ = ew();
          h && _
            ? (g = () => {
                h(), _();
              })
            : (h && h(), _ && _());
        }
        return g;
      }
      function isDragActive() {
        let h = getGlobalLock(!0);
        return !h || (h(), !1);
      }
      let Feature = class Feature {
        constructor(h) {
          (this.isMounted = !1), (this.node = h);
        }
        update() {}
      };
      var eC = _(2074);
      function addHoverEvent(h, g) {
        let _ = "pointer" + (g ? "enter" : "leave"),
          b = "onHover" + (g ? "Start" : "End");
        return addPointerEvent(
          h.current,
          _,
          (_, y) => {
            if ("touch" === _.type || isDragActive()) return;
            let A = h.getProps();
            h.animationState &&
              A.whileHover &&
              h.animationState.setActive("whileHover", g),
              A[b] && eC.Wi.update(() => A[b](_, y));
          },
          { passive: !h.getProps()[b] },
        );
      }
      let isNodeOrChild = (h, g) =>
        !!g && (h === g || isNodeOrChild(h, g.parentElement));
      var eS = _(81662);
      function fireSyntheticPointerEvent(h, g) {
        if (!g) return;
        let _ = new PointerEvent("pointer" + h);
        g(_, extractEventInfo(_));
      }
      let eE = new WeakMap(),
        eP = new WeakMap(),
        fireObserverCallback = (h) => {
          let g = eE.get(h.target);
          g && g(h);
        },
        fireAllObserverCallbacks = (h) => {
          h.forEach(fireObserverCallback);
        },
        eT = { some: 0, all: 1 };
      var ej = _(48488);
      function shallowCompare(h, g) {
        if (!Array.isArray(g)) return !1;
        let _ = g.length;
        if (_ !== h.length) return !1;
        for (let b = 0; b < _; b++) if (g[b] !== h[b]) return !1;
        return !0;
      }
      var ek = _(52248),
        e$ = _(22963),
        eR = _(96912);
      let eA = [...e$.e].reverse(),
        eO = e$.e.length;
      function createTypeState(h = !1) {
        return {
          isActive: h,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let eD = 0;
      var eL = _(45487),
        eM = _(86917);
      let distance = (h, g) => Math.abs(h - g);
      let PanSession = class PanSession {
        constructor(h, g, { transformPagePoint: _ } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let h = getPanInfo(this.lastMoveEventInfo, this.history),
                g = null !== this.startEvent,
                _ =
                  (function (h, g) {
                    let _ = distance(h.x, g.x),
                      b = distance(h.y, g.y);
                    return Math.sqrt(_ ** 2 + b ** 2);
                  })(h.offset, { x: 0, y: 0 }) >= 3;
              if (!g && !_) return;
              let { point: b } = h,
                { timestamp: y } = eC.frameData;
              this.history.push({ ...b, timestamp: y });
              let { onStart: A, onMove: N } = this.handlers;
              g ||
                (A && A(this.lastMoveEvent, h),
                (this.startEvent = this.lastMoveEvent)),
                N && N(this.lastMoveEvent, h);
            }),
            (this.handlePointerMove = (h, g) => {
              (this.lastMoveEvent = h),
                (this.lastMoveEventInfo = transformPoint(
                  g,
                  this.transformPagePoint,
                )),
                eC.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (h, g) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: _, onSessionEnd: b } = this.handlers,
                y = getPanInfo(
                  "pointercancel" === h.type
                    ? this.lastMoveEventInfo
                    : transformPoint(g, this.transformPagePoint),
                  this.history,
                );
              this.startEvent && _ && _(h, y), b && b(h, y);
            }),
            !isPrimaryPointer(h))
          )
            return;
          (this.handlers = g), (this.transformPagePoint = _);
          let b = extractEventInfo(h),
            y = transformPoint(b, this.transformPagePoint),
            { point: A } = y,
            { timestamp: N } = eC.frameData;
          this.history = [{ ...A, timestamp: N }];
          let { onSessionStart: F } = g;
          F && F(h, getPanInfo(y, this.history)),
            (this.removeListeners = (0, ey.z)(
              addPointerEvent(window, "pointermove", this.handlePointerMove),
              addPointerEvent(window, "pointerup", this.handlePointerUp),
              addPointerEvent(window, "pointercancel", this.handlePointerUp),
            ));
        }
        updateHandlers(h) {
          this.handlers = h;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, eC.Pn)(this.updatePoint);
        }
      };
      function transformPoint(h, g) {
        return g ? { point: g(h.point) } : h;
      }
      function subtractPoint(h, g) {
        return { x: h.x - g.x, y: h.y - g.y };
      }
      function getPanInfo({ point: h }, g) {
        return {
          point: h,
          delta: subtractPoint(h, lastDevicePoint(g)),
          offset: subtractPoint(h, g[0]),
          velocity: (function (h, g) {
            if (h.length < 2) return { x: 0, y: 0 };
            let _ = h.length - 1,
              b = null,
              y = lastDevicePoint(h);
            for (
              ;
              _ >= 0 &&
              ((b = h[_]), !(y.timestamp - b.timestamp > (0, eM.w)(0.1)));

            )
              _--;
            if (!b) return { x: 0, y: 0 };
            let A = (0, eM.X)(y.timestamp - b.timestamp);
            if (0 === A) return { x: 0, y: 0 };
            let N = { x: (y.x - b.x) / A, y: (y.y - b.y) / A };
            return N.x === 1 / 0 && (N.x = 0), N.y === 1 / 0 && (N.y = 0), N;
          })(g, 0),
        };
      }
      function lastDevicePoint(h) {
        return h[h.length - 1];
      }
      var eI = _(23967),
        eN = _(80022);
      function calcLength(h) {
        return h.max - h.min;
      }
      function isNear(h, g = 0, _ = 0.01) {
        return Math.abs(h - g) <= _;
      }
      function calcAxisDelta(h, g, _, b = 0.5) {
        (h.origin = b),
          (h.originPoint = (0, eN.C)(g.min, g.max, h.origin)),
          (h.scale = calcLength(_) / calcLength(g)),
          (isNear(h.scale, 1, 1e-4) || isNaN(h.scale)) && (h.scale = 1),
          (h.translate = (0, eN.C)(_.min, _.max, h.origin) - h.originPoint),
          (isNear(h.translate) || isNaN(h.translate)) && (h.translate = 0);
      }
      function calcBoxDelta(h, g, _, b) {
        calcAxisDelta(h.x, g.x, _.x, b ? b.originX : void 0),
          calcAxisDelta(h.y, g.y, _.y, b ? b.originY : void 0);
      }
      function calcRelativeAxis(h, g, _) {
        (h.min = _.min + g.min), (h.max = h.min + calcLength(g));
      }
      function calcRelativeAxisPosition(h, g, _) {
        (h.min = g.min - _.min), (h.max = h.min + calcLength(g));
      }
      function calcRelativePosition(h, g, _) {
        calcRelativeAxisPosition(h.x, g.x, _.x),
          calcRelativeAxisPosition(h.y, g.y, _.y);
      }
      var eV = _(24169);
      function calcRelativeAxisConstraints(h, g, _) {
        return {
          min: void 0 !== g ? h.min + g : void 0,
          max: void 0 !== _ ? h.max + _ - (h.max - h.min) : void 0,
        };
      }
      function calcViewportAxisConstraints(h, g) {
        let _ = g.min - h.min,
          b = g.max - h.max;
        return (
          g.max - g.min < h.max - h.min && ([_, b] = [b, _]), { min: _, max: b }
        );
      }
      function resolveAxisElastic(h, g, _) {
        return {
          min: resolvePointElastic(h, g),
          max: resolvePointElastic(h, _),
        };
      }
      function resolvePointElastic(h, g) {
        return "number" == typeof h ? h : h[g] || 0;
      }
      var eF = _(61512);
      function eachAxis(h) {
        return [h("x"), h("y")];
      }
      var eB = _(56460),
        ez = _(76117),
        eH = _(96190),
        eW = _(67218);
      let eU = new WeakMap();
      let VisualElementDragControls = class VisualElementDragControls {
        constructor(h) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, eF.dO)()),
            (this.visualElement = h);
        }
        start(h, { snapToCursor: g = !1 } = {}) {
          let { presenceContext: _ } = this.visualElement;
          (_ && !1 === _.isPresent) ||
            (this.panSession = new PanSession(
              h,
              {
                onSessionStart: (h) => {
                  this.stopAnimation(),
                    g && this.snapToCursor(extractEventInfo(h, "page").point);
                },
                onStart: (h, g) => {
                  let {
                    drag: _,
                    dragPropagation: b,
                    onDragStart: y,
                  } = this.getProps();
                  if (
                    _ &&
                    !b &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = getGlobalLock(_)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    eachAxis((h) => {
                      let g = this.getAxisMotionValue(h).get() || 0;
                      if (eH.aQ.test(g)) {
                        let { projection: _ } = this.visualElement;
                        if (_ && _.layout) {
                          let b = _.layout.layoutBox[h];
                          if (b) {
                            let h = calcLength(b);
                            g = h * (parseFloat(g) / 100);
                          }
                        }
                      }
                      this.originPoint[h] = g;
                    }),
                    y && eC.Wi.update(() => y(h, g), !1, !0);
                  let { animationState: A } = this.visualElement;
                  A && A.setActive("whileDrag", !0);
                },
                onMove: (h, g) => {
                  let {
                    dragPropagation: _,
                    dragDirectionLock: b,
                    onDirectionLock: y,
                    onDrag: A,
                  } = this.getProps();
                  if (!_ && !this.openGlobalLock) return;
                  let { offset: N } = g;
                  if (b && null === this.currentDirection) {
                    (this.currentDirection = (function (h, g = 10) {
                      let _ = null;
                      return (
                        Math.abs(h.y) > g
                          ? (_ = "y")
                          : Math.abs(h.x) > g && (_ = "x"),
                        _
                      );
                    })(N)),
                      null !== this.currentDirection &&
                        y &&
                        y(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", g.point, N),
                    this.updateAxis("y", g.point, N),
                    this.visualElement.render(),
                    A && A(h, g);
                },
                onSessionEnd: (h, g) => this.stop(h, g),
              },
              {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
              },
            ));
        }
        stop(h, g) {
          let _ = this.isDragging;
          if ((this.cancel(), !_)) return;
          let { velocity: b } = g;
          this.startAnimation(b);
          let { onDragEnd: y } = this.getProps();
          y && eC.Wi.update(() => y(h, g));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: h, animationState: g } = this.visualElement;
          h && (h.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: _ } = this.getProps();
          !_ &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            g && g.setActive("whileDrag", !1);
        }
        updateAxis(h, g, _) {
          let { drag: b } = this.getProps();
          if (!_ || !shouldDrag(h, b, this.currentDirection)) return;
          let y = this.getAxisMotionValue(h),
            A = this.originPoint[h] + _[h];
          this.constraints &&
            this.constraints[h] &&
            (A = (function (h, { min: g, max: _ }, b) {
              return (
                void 0 !== g && h < g
                  ? (h = b ? (0, eN.C)(g, h, b.min) : Math.max(h, g))
                  : void 0 !== _ &&
                    h > _ &&
                    (h = b ? (0, eN.C)(_, h, b.max) : Math.min(h, _)),
                h
              );
            })(A, this.constraints[h], this.elastic[h])),
            y.set(A);
        }
        resolveConstraints() {
          let { dragConstraints: h, dragElastic: g } = this.getProps(),
            { layout: _ } = this.visualElement.projection || {},
            b = this.constraints;
          h && (0, K.I)(h)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : h && _
              ? (this.constraints = (function (
                  h,
                  { top: g, left: _, bottom: b, right: y },
                ) {
                  return {
                    x: calcRelativeAxisConstraints(h.x, _, y),
                    y: calcRelativeAxisConstraints(h.y, g, b),
                  };
                })(_.layoutBox, h))
              : (this.constraints = !1),
            (this.elastic = (function (h = 0.35) {
              return (
                !1 === h ? (h = 0) : !0 === h && (h = 0.35),
                {
                  x: resolveAxisElastic(h, "left", "right"),
                  y: resolveAxisElastic(h, "top", "bottom"),
                }
              );
            })(g)),
            b !== this.constraints &&
              _ &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              eachAxis((h) => {
                this.getAxisMotionValue(h) &&
                  (this.constraints[h] = (function (h, g) {
                    let _ = {};
                    return (
                      void 0 !== g.min && (_.min = g.min - h.min),
                      void 0 !== g.max && (_.max = g.max - h.min),
                      _
                    );
                  })(_.layoutBox[h], this.constraints[h]));
              });
        }
        resolveRefConstraints() {
          var h;
          let { dragConstraints: g, onMeasureDragConstraints: _ } =
            this.getProps();
          if (!g || !(0, K.I)(g)) return !1;
          let b = g.current;
          (0, eL.k)(
            null !== b,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
          );
          let { projection: y } = this.visualElement;
          if (!y || !y.layout) return !1;
          let A = (0, eB.z)(
              b,
              y.root,
              this.visualElement.getTransformPagePoint(),
            ),
            N = {
              x: calcViewportAxisConstraints((h = y.layout.layoutBox).x, A.x),
              y: calcViewportAxisConstraints(h.y, A.y),
            };
          if (_) {
            let h = _((0, ez.z2)(N));
            (this.hasMutatedConstraints = !!h), h && (N = (0, ez.i8)(h));
          }
          return N;
        }
        startAnimation(h) {
          let {
              drag: g,
              dragMomentum: _,
              dragElastic: b,
              dragTransition: y,
              dragSnapToOrigin: A,
              onDragTransitionEnd: N,
            } = this.getProps(),
            F = this.constraints || {},
            B = eachAxis((N) => {
              if (!shouldDrag(N, g, this.currentDirection)) return;
              let B = (F && F[N]) || {};
              A && (B = { min: 0, max: 0 });
              let H = {
                type: "inertia",
                velocity: _ ? h[N] : 0,
                bounceStiffness: b ? 200 : 1e6,
                bounceDamping: b ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...y,
                ...B,
              };
              return this.startAxisValueAnimation(N, H);
            });
          return Promise.all(B).then(N);
        }
        startAxisValueAnimation(h, g) {
          let _ = this.getAxisMotionValue(h);
          return _.start((0, eW.v)(h, _, 0, g));
        }
        stopAnimation() {
          eachAxis((h) => this.getAxisMotionValue(h).stop());
        }
        getAxisMotionValue(h) {
          let g = "_drag" + h.toUpperCase(),
            _ = this.visualElement.getProps(),
            b = _[g];
          return (
            b ||
            this.visualElement.getValue(
              h,
              (_.initial ? _.initial[h] : void 0) || 0,
            )
          );
        }
        snapToCursor(h) {
          eachAxis((g) => {
            let { drag: _ } = this.getProps();
            if (!shouldDrag(g, _, this.currentDirection)) return;
            let { projection: b } = this.visualElement,
              y = this.getAxisMotionValue(g);
            if (b && b.layout) {
              let { min: _, max: A } = b.layout.layoutBox[g];
              y.set(h[g] - (0, eN.C)(_, A, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: h, dragConstraints: g } = this.getProps(),
            { projection: _ } = this.visualElement;
          if (!(0, K.I)(g) || !_ || !this.constraints) return;
          this.stopAnimation();
          let b = { x: 0, y: 0 };
          eachAxis((h) => {
            let g = this.getAxisMotionValue(h);
            if (g) {
              let _ = g.get();
              b[h] = (function (h, g) {
                let _ = 0.5,
                  b = calcLength(h),
                  y = calcLength(g);
                return (
                  y > b
                    ? (_ = (0, eI.Y)(g.min, g.max - b, h.min))
                    : b > y && (_ = (0, eI.Y)(h.min, h.max - y, g.min)),
                  (0, eV.u)(0, 1, _)
                );
              })({ min: _, max: _ }, this.constraints[h]);
            }
          });
          let { transformTemplate: y } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = y ? y({}, "") : "none"),
            _.root && _.root.updateScroll(),
            _.updateLayout(),
            this.resolveConstraints(),
            eachAxis((g) => {
              if (!shouldDrag(g, h, null)) return;
              let _ = this.getAxisMotionValue(g),
                { min: y, max: A } = this.constraints[g];
              _.set((0, eN.C)(y, A, b[g]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          eU.set(this.visualElement, this);
          let h = this.visualElement.current,
            g = addPointerEvent(h, "pointerdown", (h) => {
              let { drag: g, dragListener: _ = !0 } = this.getProps();
              g && _ && this.start(h);
            }),
            measureDragConstraints = () => {
              let { dragConstraints: h } = this.getProps();
              (0, K.I)(h) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: _ } = this.visualElement,
            b = _.addEventListener("measure", measureDragConstraints);
          _ && !_.layout && (_.root && _.root.updateScroll(), _.updateLayout()),
            measureDragConstraints();
          let y = addDomEvent(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            A = _.addEventListener(
              "didUpdate",
              ({ delta: h, hasLayoutChanged: g }) => {
                this.isDragging &&
                  g &&
                  (eachAxis((g) => {
                    let _ = this.getAxisMotionValue(g);
                    _ &&
                      ((this.originPoint[g] += h[g].translate),
                      _.set(_.get() + h[g].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            y(), g(), b(), A && A();
          };
        }
        getProps() {
          let h = this.visualElement.getProps(),
            {
              drag: g = !1,
              dragDirectionLock: _ = !1,
              dragPropagation: b = !1,
              dragConstraints: y = !1,
              dragElastic: A = 0.35,
              dragMomentum: N = !0,
            } = h;
          return {
            ...h,
            drag: g,
            dragDirectionLock: _,
            dragPropagation: b,
            dragConstraints: y,
            dragElastic: A,
            dragMomentum: N,
          };
        }
      };
      function shouldDrag(h, g, _) {
        return (!0 === g || g === h) && (null === _ || _ === h);
      }
      let asyncHandler = (h) => (g, _) => {
          h && eC.Wi.update(() => h(g, _));
        },
        eZ = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function pixelsToPercent(h, g) {
        return g.max === g.min ? 0 : (h / (g.max - g.min)) * 100;
      }
      let eG = {
        correct: (h, g) => {
          if (!g.target) return h;
          if ("string" == typeof h) {
            if (!eH.px.test(h)) return h;
            h = parseFloat(h);
          }
          let _ = pixelsToPercent(h, g.target.x),
            b = pixelsToPercent(h, g.target.y);
          return `${_}% ${b}%`;
        },
      };
      var eK = _(51550),
        eq = _(64561);
      let MeasureLayoutWithContext = class MeasureLayoutWithContext extends A.Component {
        componentDidMount() {
          let {
              visualElement: h,
              layoutGroup: g,
              switchLayoutGroup: _,
              layoutId: b,
            } = this.props,
            { projection: y } = h;
          (0, eq.B)(eY),
            y &&
              (g.group && g.group.add(y),
              _ && _.register && b && _.register(y),
              y.root.didUpdate(),
              y.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              y.setOptions({
                ...y.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (eZ.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(h) {
          let {
              layoutDependency: g,
              visualElement: _,
              drag: b,
              isPresent: y,
            } = this.props,
            A = _.projection;
          return (
            A &&
              ((A.isPresent = y),
              b || h.layoutDependency !== g || void 0 === g
                ? A.willUpdate()
                : this.safeToRemove(),
              h.isPresent === y ||
                (y
                  ? A.promote()
                  : A.relegate() ||
                    eC.Wi.postRender(() => {
                      let h = A.getStack();
                      (h && h.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: h } = this.props.visualElement;
          h &&
            (h.root.didUpdate(),
            queueMicrotask(() => {
              !h.currentAnimation && h.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: h,
              layoutGroup: g,
              switchLayoutGroup: _,
            } = this.props,
            { projection: b } = h;
          b &&
            (b.scheduleCheckAfterUnmount(),
            g && g.group && g.group.remove(b),
            _ && _.deregister && _.deregister(b));
        }
        safeToRemove() {
          let { safeToRemove: h } = this.props;
          h && h();
        }
        render() {
          return null;
        }
      };
      function MeasureLayout(h) {
        let [g, _] = (function () {
            let h = (0, A.useContext)(B.O);
            if (null === h) return [!0, null];
            let { isPresent: g, onExitComplete: _, register: b } = h,
              y = (0, A.useId)();
            return (
              (0, A.useEffect)(() => b(y), []),
              !g && _ ? [!1, () => _ && _(y)] : [!0]
            );
          })(),
          b = (0, A.useContext)(et.p);
        return A.createElement(MeasureLayoutWithContext, {
          ...h,
          layoutGroup: b,
          switchLayoutGroup: (0, A.useContext)(en),
          isPresent: g,
          safeToRemove: _,
        });
      }
      let eY = {
        borderRadius: {
          ...eG,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: eG,
        borderTopRightRadius: eG,
        borderBottomLeftRadius: eG,
        borderBottomRightRadius: eG,
        boxShadow: {
          correct: (h, { treeScale: g, projectionDelta: _ }) => {
            let b = eK.P.parse(h);
            if (b.length > 5) return h;
            let y = eK.P.createTransformer(h),
              A = "number" != typeof b[0] ? 1 : 0,
              N = _.x.scale * g.x,
              F = _.y.scale * g.y;
            (b[0 + A] /= N), (b[1 + A] /= F);
            let B = (0, eN.C)(N, F, 0.5);
            return (
              "number" == typeof b[2 + A] && (b[2 + A] /= B),
              "number" == typeof b[3 + A] && (b[3 + A] /= B),
              y(b)
            );
          },
        },
      };
      var eX = _(21560),
        eJ = _(27255);
      let eQ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        e0 = eQ.length,
        asNumber = (h) => ("string" == typeof h ? parseFloat(h) : h),
        isPx = (h) => "number" == typeof h || eH.px.test(h);
      function getRadius(h, g) {
        return void 0 !== h[g] ? h[g] : h.borderRadius;
      }
      let e1 = compress(0, 0.5, eJ.Bn),
        e2 = compress(0.5, 0.95, eS.Z);
      function compress(h, g, _) {
        return (b) => (b < h ? 0 : b > g ? 1 : _((0, eI.Y)(h, g, b)));
      }
      function copyAxisInto(h, g) {
        (h.min = g.min), (h.max = g.max);
      }
      function copyBoxInto(h, g) {
        copyAxisInto(h.x, g.x), copyAxisInto(h.y, g.y);
      }
      var e3 = _(16e3);
      function removePointDelta(h, g, _, b, y) {
        return (
          (h -= g),
          (h = (0, e3.q2)(h, 1 / _, b)),
          void 0 !== y && (h = (0, e3.q2)(h, 1 / y, b)),
          h
        );
      }
      function removeAxisTransforms(h, g, [_, b, y], A, N) {
        !(function (h, g = 0, _ = 1, b = 0.5, y, A = h, N = h) {
          if (eH.aQ.test(g)) {
            g = parseFloat(g);
            let h = (0, eN.C)(N.min, N.max, g / 100);
            g = h - N.min;
          }
          if ("number" != typeof g) return;
          let F = (0, eN.C)(A.min, A.max, b);
          h === A && (F -= g),
            (h.min = removePointDelta(h.min, g, _, F, y)),
            (h.max = removePointDelta(h.max, g, _, F, y));
        })(h, g[_], g[b], g[y], g.scale, A, N);
      }
      let e6 = ["x", "scaleX", "originX"],
        e4 = ["y", "scaleY", "originY"];
      function removeBoxTransforms(h, g, _, b) {
        removeAxisTransforms(h.x, g, e6, _ ? _.x : void 0, b ? b.x : void 0),
          removeAxisTransforms(h.y, g, e4, _ ? _.y : void 0, b ? b.y : void 0);
      }
      var e5 = _(31056);
      function isAxisDeltaZero(h) {
        return 0 === h.translate && 1 === h.scale;
      }
      function isDeltaZero(h) {
        return isAxisDeltaZero(h.x) && isAxisDeltaZero(h.y);
      }
      function boxEquals(h, g) {
        return (
          h.x.min === g.x.min &&
          h.x.max === g.x.max &&
          h.y.min === g.y.min &&
          h.y.max === g.y.max
        );
      }
      function aspectRatio(h) {
        return calcLength(h.x) / calcLength(h.y);
      }
      var e8 = _(10010);
      let NodeStack = class NodeStack {
        constructor() {
          this.members = [];
        }
        add(h) {
          (0, e8.y4)(this.members, h), h.scheduleRender();
        }
        remove(h) {
          if (
            ((0, e8.cl)(this.members, h),
            h === this.prevLead && (this.prevLead = void 0),
            h === this.lead)
          ) {
            let h = this.members[this.members.length - 1];
            h && this.promote(h);
          }
        }
        relegate(h) {
          let g;
          let _ = this.members.findIndex((g) => h === g);
          if (0 === _) return !1;
          for (let h = _; h >= 0; h--) {
            let _ = this.members[h];
            if (!1 !== _.isPresent) {
              g = _;
              break;
            }
          }
          return !!g && (this.promote(g), !0);
        }
        promote(h, g) {
          let _ = this.lead;
          if (h !== _ && ((this.prevLead = _), (this.lead = h), h.show(), _)) {
            _.instance && _.scheduleRender(),
              h.scheduleRender(),
              (h.resumeFrom = _),
              g && (h.resumeFrom.preserveOpacity = !0),
              _.snapshot &&
                ((h.snapshot = _.snapshot),
                (h.snapshot.latestValues =
                  _.animationValues || _.latestValues)),
              h.root && h.root.isUpdating && (h.isLayoutDirty = !0);
            let { crossfade: b } = h.options;
            !1 === b && _.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((h) => {
            let { options: g, resumingFrom: _ } = h;
            g.onExitComplete && g.onExitComplete(),
              _ && _.options.onExitComplete && _.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((h) => {
            h.instance && h.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      };
      function buildProjectionTransform(h, g, _) {
        let b = "",
          y = h.x.translate / g.x,
          A = h.y.translate / g.y;
        if (
          ((y || A) && (b = `translate3d(${y}px, ${A}px, 0) `),
          (1 !== g.x || 1 !== g.y) && (b += `scale(${1 / g.x}, ${1 / g.y}) `),
          _)
        ) {
          let { rotate: h, rotateX: g, rotateY: y } = _;
          h && (b += `rotate(${h}deg) `),
            g && (b += `rotateX(${g}deg) `),
            y && (b += `rotateY(${y}deg) `);
        }
        let N = h.x.scale * g.x,
          F = h.y.scale * g.y;
        return (1 !== N || 1 !== F) && (b += `scale(${N}, ${F})`), b || "none";
      }
      var e9 = _(99527);
      let compareByDepth = (h, g) => h.depth - g.depth;
      let FlatTree = class FlatTree {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(h) {
          (0, e8.y4)(this.children, h), (this.isDirty = !0);
        }
        remove(h) {
          (0, e8.cl)(this.children, h), (this.isDirty = !0);
        }
        forEach(h) {
          this.isDirty && this.children.sort(compareByDepth),
            (this.isDirty = !1),
            this.children.forEach(h);
        }
      };
      var e7 = _(75194),
        te = _(61059);
      let tt = ["", "X", "Y", "Z"],
        tn = 0,
        tr = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function createProjectionNode({
        attachResizeListener: h,
        defaultParent: g,
        measureScroll: _,
        checkIsScrollRoot: y,
        resetTransform: A,
      }) {
        return class {
          constructor(h = {}, _ = null == g ? void 0 : g()) {
            (this.id = tn++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (tr.totalNodes =
                  tr.resolvedTargetDeltas =
                  tr.recalculatedProjection =
                    0),
                  this.nodes.forEach(propagateDirtyNodes),
                  this.nodes.forEach(resolveTargetDelta),
                  this.nodes.forEach(calcProjection),
                  this.nodes.forEach(cleanDirtyNodes),
                  window.MotionDebug && window.MotionDebug.record(tr);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = h),
              (this.root = _ ? _.root || _ : this),
              (this.path = _ ? [..._.path, _] : []),
              (this.parent = _),
              (this.depth = _ ? _.depth + 1 : 0);
            for (let h = 0; h < this.path.length; h++)
              this.path[h].shouldResetTransform = !0;
            this.root === this && (this.nodes = new FlatTree());
          }
          addEventListener(h, g) {
            return (
              this.eventHandlers.has(h) ||
                this.eventHandlers.set(h, new eX.L()),
              this.eventHandlers.get(h).add(g)
            );
          }
          notifyListeners(h, ...g) {
            let _ = this.eventHandlers.get(h);
            _ && _.notify(...g);
          }
          hasListeners(h) {
            return this.eventHandlers.has(h);
          }
          mount(g, _ = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, e7.v)(g)), (this.instance = g);
            let { layoutId: b, layout: y, visualElement: A } = this.options;
            if (
              (A && !A.current && A.mount(g),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              _ && (y || b) && (this.isLayoutDirty = !0),
              h)
            ) {
              let _;
              let resizeUnblockUpdate = () =>
                (this.root.updateBlockedByResize = !1);
              h(g, () => {
                (this.root.updateBlockedByResize = !0),
                  _ && _(),
                  (_ = (function (h, g) {
                    let _ = performance.now(),
                      checkElapsed = ({ timestamp: b }) => {
                        let y = b - _;
                        y >= g && ((0, eC.Pn)(checkElapsed), h(y - g));
                      };
                    return (
                      eC.Wi.read(checkElapsed, !0),
                      () => (0, eC.Pn)(checkElapsed)
                    );
                  })(resizeUnblockUpdate, 250)),
                  eZ.hasAnimatedSinceResize &&
                    ((eZ.hasAnimatedSinceResize = !1),
                    this.nodes.forEach(finishAnimation));
              });
            }
            b && this.root.registerSharedNode(b, this),
              !1 !== this.options.animate &&
                A &&
                (b || y) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: h,
                    hasLayoutChanged: g,
                    hasRelativeTargetChanged: _,
                    layout: b,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let y =
                        this.options.transition ||
                        A.getDefaultTransition() ||
                        ti,
                      {
                        onLayoutAnimationStart: N,
                        onLayoutAnimationComplete: F,
                      } = A.getProps(),
                      B =
                        !this.targetLayout ||
                        !boxEquals(this.targetLayout, b) ||
                        _,
                      H = !g && _;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      H ||
                      (g && (B || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(h, H);
                      let g = {
                        ...(0, e5.e)(y, "layout"),
                        onPlay: N,
                        onComplete: F,
                      };
                      (A.shouldReduceMotion || this.options.layoutRoot) &&
                        ((g.delay = 0), (g.type = !1)),
                        this.startAnimation(g);
                    } else
                      g || finishAnimation(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = b;
                  },
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let h = this.getStack();
            h && h.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, eC.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(resetRotation),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: h } = this.options;
            return h && h.getProps().transformTemplate;
          }
          willUpdate(h = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let h = 0; h < this.path.length; h++) {
              let g = this.path[h];
              (g.shouldResetTransform = !0),
                g.updateScroll("snapshot"),
                g.options.layoutRoot && g.willUpdate(!1);
            }
            let { layoutId: g, layout: _ } = this.options;
            if (void 0 === g && !_) return;
            let b = this.getTransformTemplate();
            (this.prevTransformTemplateValue = b
              ? b(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              h && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let h = this.isUpdateBlocked();
            if (h) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(clearMeasurements);
              return;
            }
            this.isUpdating || this.nodes.forEach(clearIsLayoutDirty),
              (this.isUpdating = !1),
              this.nodes.forEach(resetTransformStyle),
              this.nodes.forEach(updateLayout),
              this.nodes.forEach(notifyLayoutUpdate),
              this.clearAllSnapshots();
            let g = performance.now();
            (eC.frameData.delta = (0, eV.u)(
              0,
              1e3 / 60,
              g - eC.frameData.timestamp,
            )),
              (eC.frameData.timestamp = g),
              (eC.frameData.isProcessing = !0),
              eC.S6.update.process(eC.frameData),
              eC.S6.preRender.process(eC.frameData),
              eC.S6.render.process(eC.frameData),
              (eC.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(clearSnapshot),
              this.sharedNodes.forEach(removeLeadSnapshots);
          }
          scheduleUpdateProjection() {
            eC.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            eC.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let h = 0; h < this.path.length; h++) {
                let g = this.path[h];
                g.updateScroll();
              }
            let h = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, eF.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: g } = this.options;
            g &&
              g.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                h ? h.layoutBox : void 0,
              );
          }
          updateScroll(h = "measure") {
            let g = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === h &&
              (g = !1),
              g &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: h,
                  isRoot: y(this.instance),
                  offset: _(this.instance),
                });
          }
          resetTransform() {
            if (!A) return;
            let h = this.isLayoutDirty || this.shouldResetTransform,
              g = this.projectionDelta && !isDeltaZero(this.projectionDelta),
              _ = this.getTransformTemplate(),
              b = _ ? _(this.latestValues, "") : void 0,
              y = b !== this.prevTransformTemplateValue;
            h &&
              (g || (0, e9.ud)(this.latestValues) || y) &&
              (A(this.instance, b),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(h = !0) {
            var g;
            let _ = this.measurePageBox(),
              y = this.removeElementScroll(_);
            return (
              h && (y = this.removeTransform(y)),
              (g = y),
              b || (b = isWebKit() ? Math.round : (h) => Math.round(2 * h) / 2),
              roundAxis(g.x),
              roundAxis(g.y),
              {
                animationId: this.root.animationId,
                measuredBox: _,
                layoutBox: y,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: h } = this.options;
            if (!h) return (0, eF.dO)();
            let g = h.measureViewportBox(),
              { scroll: _ } = this.root;
            return (
              _ && ((0, e3.am)(g.x, _.offset.x), (0, e3.am)(g.y, _.offset.y)), g
            );
          }
          removeElementScroll(h) {
            let g = (0, eF.dO)();
            copyBoxInto(g, h);
            for (let _ = 0; _ < this.path.length; _++) {
              let b = this.path[_],
                { scroll: y, options: A } = b;
              if (b !== this.root && y && A.layoutScroll) {
                if (y.isRoot) {
                  copyBoxInto(g, h);
                  let { scroll: _ } = this.root;
                  _ &&
                    ((0, e3.am)(g.x, -_.offset.x),
                    (0, e3.am)(g.y, -_.offset.y));
                }
                (0, e3.am)(g.x, y.offset.x), (0, e3.am)(g.y, y.offset.y);
              }
            }
            return g;
          }
          applyTransform(h, g = !1) {
            let _ = (0, eF.dO)();
            copyBoxInto(_, h);
            for (let h = 0; h < this.path.length; h++) {
              let b = this.path[h];
              !g &&
                b.options.layoutScroll &&
                b.scroll &&
                b !== b.root &&
                (0, e3.D2)(_, { x: -b.scroll.offset.x, y: -b.scroll.offset.y }),
                (0, e9.ud)(b.latestValues) && (0, e3.D2)(_, b.latestValues);
            }
            return (
              (0, e9.ud)(this.latestValues) && (0, e3.D2)(_, this.latestValues),
              _
            );
          }
          removeTransform(h) {
            let g = (0, eF.dO)();
            copyBoxInto(g, h);
            for (let h = 0; h < this.path.length; h++) {
              let _ = this.path[h];
              if (!_.instance || !(0, e9.ud)(_.latestValues)) continue;
              (0, e9.Lj)(_.latestValues) && _.updateSnapshot();
              let b = (0, eF.dO)(),
                y = _.measurePageBox();
              copyBoxInto(b, y),
                removeBoxTransforms(
                  g,
                  _.latestValues,
                  _.snapshot ? _.snapshot.layoutBox : void 0,
                  b,
                );
            }
            return (
              (0, e9.ud)(this.latestValues) &&
                removeBoxTransforms(g, this.latestValues),
              g
            );
          }
          setTargetDelta(h) {
            (this.targetDelta = h),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(h) {
            this.options = {
              ...this.options,
              ...h,
              crossfade: void 0 === h.crossfade || h.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                eC.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(h = !1) {
            var g, _, b, y;
            let A = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = A.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = A.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = A.isSharedProjectionDirty);
            let N = !!this.resumingFrom || this !== A,
              F = !(
                h ||
                (N && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (g = this.parent) || void 0 === g
                  ? void 0
                  : g.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (F) return;
            let { layout: B, layoutId: H } = this.options;
            if (this.layout && (B || H)) {
              if (
                ((this.resolvedRelativeTargetAt = eC.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let h = this.getClosestProjectingParent();
                h && h.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = h),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, eF.dO)()),
                    (this.relativeTargetOrigin = (0, eF.dO)()),
                    calcRelativePosition(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      h.layout.layoutBox,
                    ),
                    copyBoxInto(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, eF.dO)()),
                    (this.targetWithTransforms = (0, eF.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (_ = this.target),
                      (b = this.relativeTarget),
                      (y = this.relativeParent.target),
                      calcRelativeAxis(_.x, b.x, y.x),
                      calcRelativeAxis(_.y, b.y, y.y))
                    : this.targetDelta
                      ? (this.resumingFrom
                          ? (this.target = this.applyTransform(
                              this.layout.layoutBox,
                            ))
                          : copyBoxInto(this.target, this.layout.layoutBox),
                        (0, e3.o2)(this.target, this.targetDelta))
                      : copyBoxInto(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let h = this.getClosestProjectingParent();
                  h &&
                  !!h.resumingFrom == !!this.resumingFrom &&
                  !h.options.layoutScroll &&
                  h.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = h),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, eF.dO)()),
                      (this.relativeTargetOrigin = (0, eF.dO)()),
                      calcRelativePosition(
                        this.relativeTargetOrigin,
                        this.target,
                        h.target,
                      ),
                      copyBoxInto(
                        this.relativeTarget,
                        this.relativeTargetOrigin,
                      ))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tr.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, e9.Lj)(this.parent.latestValues) ||
              (0, e9.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var h;
            let g = this.getLead(),
              _ = !!this.resumingFrom || this !== g,
              b = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (h = this.parent) || void 0 === h
                  ? void 0
                  : h.isProjectionDirty)) &&
                (b = !1),
              _ &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (b = !1),
              this.resolvedRelativeTargetAt === eC.frameData.timestamp &&
                (b = !1),
              b)
            )
              return;
            let { layout: y, layoutId: A } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(y || A))
            )
              return;
            copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
            let N = this.treeScale.x,
              F = this.treeScale.y;
            (0, e3.YY)(this.layoutCorrected, this.treeScale, this.path, _),
              g.layout &&
                !g.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (g.target = g.layout.layoutBox);
            let { target: B } = g;
            if (!B) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, eF.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, eF.wc)()),
              (this.projectionDeltaWithTransform = (0, eF.wc)()));
            let H = this.projectionTransform;
            calcBoxDelta(
              this.projectionDelta,
              this.layoutCorrected,
              B,
              this.latestValues,
            ),
              (this.projectionTransform = buildProjectionTransform(
                this.projectionDelta,
                this.treeScale,
              )),
              (this.projectionTransform !== H ||
                this.treeScale.x !== N ||
                this.treeScale.y !== F) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", B)),
              tr.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(h = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), h)
            ) {
              let h = this.getStack();
              h && h.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(h, g = !1) {
            let _;
            let b = this.snapshot,
              y = b ? b.latestValues : {},
              A = { ...this.latestValues },
              N = (0, eF.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !g);
            let F = (0, eF.dO)(),
              B = b ? b.source : void 0,
              H = this.layout ? this.layout.source : void 0,
              U = B !== H,
              K = this.getStack(),
              q = !K || K.members.length <= 1,
              Y = !!(
                U &&
                !q &&
                !0 === this.options.crossfade &&
                !this.path.some(hasOpacityCrossfade)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (g) => {
                var b, B;
                let H = g / 1e3;
                mixAxisDelta(N.x, h.x, H),
                  mixAxisDelta(N.y, h.y, H),
                  this.setTargetDelta(N),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout &&
                    (calcRelativePosition(
                      F,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox,
                    ),
                    (b = this.relativeTarget),
                    (B = this.relativeTargetOrigin),
                    mixAxis(b.x, B.x, F.x, H),
                    mixAxis(b.y, B.y, F.y, H),
                    _ &&
                      boxEquals(this.relativeTarget, _) &&
                      (this.isProjectionDirty = !1),
                    _ || (_ = (0, eF.dO)()),
                    copyBoxInto(_, this.relativeTarget)),
                  U &&
                    ((this.animationValues = A),
                    (function (h, g, _, b, y, A) {
                      y
                        ? ((h.opacity = (0, eN.C)(
                            0,
                            void 0 !== _.opacity ? _.opacity : 1,
                            e1(b),
                          )),
                          (h.opacityExit = (0, eN.C)(
                            void 0 !== g.opacity ? g.opacity : 1,
                            0,
                            e2(b),
                          )))
                        : A &&
                          (h.opacity = (0, eN.C)(
                            void 0 !== g.opacity ? g.opacity : 1,
                            void 0 !== _.opacity ? _.opacity : 1,
                            b,
                          ));
                      for (let y = 0; y < e0; y++) {
                        let A = `border${eQ[y]}Radius`,
                          N = getRadius(g, A),
                          F = getRadius(_, A);
                        if (void 0 === N && void 0 === F) continue;
                        N || (N = 0), F || (F = 0);
                        let B = 0 === N || 0 === F || isPx(N) === isPx(F);
                        B
                          ? ((h[A] = Math.max(
                              (0, eN.C)(asNumber(N), asNumber(F), b),
                              0,
                            )),
                            (eH.aQ.test(F) || eH.aQ.test(N)) && (h[A] += "%"))
                          : (h[A] = F);
                      }
                      (g.rotate || _.rotate) &&
                        (h.rotate = (0, eN.C)(g.rotate || 0, _.rotate || 0, b));
                    })(A, y, this.latestValues, H, Y, q)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = H);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(h) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, eC.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = eC.Wi.update(() => {
                (eZ.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, te.D)(0, 1e3, {
                    ...h,
                    onUpdate: (g) => {
                      this.mixTargetDelta(g), h.onUpdate && h.onUpdate(g);
                    },
                    onComplete: () => {
                      h.onComplete && h.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let h = this.getStack();
            h && h.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let h = this.getLead(),
              {
                targetWithTransforms: g,
                target: _,
                layout: b,
                latestValues: y,
              } = h;
            if (g && _ && b) {
              if (
                this !== h &&
                this.layout &&
                b &&
                shouldAnimatePositionOnly(
                  this.options.animationType,
                  this.layout.layoutBox,
                  b.layoutBox,
                )
              ) {
                _ = this.target || (0, eF.dO)();
                let g = calcLength(this.layout.layoutBox.x);
                (_.x.min = h.target.x.min), (_.x.max = _.x.min + g);
                let b = calcLength(this.layout.layoutBox.y);
                (_.y.min = h.target.y.min), (_.y.max = _.y.min + b);
              }
              copyBoxInto(g, _),
                (0, e3.D2)(g, y),
                calcBoxDelta(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  g,
                  y,
                );
            }
          }
          registerSharedNode(h, g) {
            this.sharedNodes.has(h) || this.sharedNodes.set(h, new NodeStack());
            let _ = this.sharedNodes.get(h);
            _.add(g);
            let b = g.options.initialPromotionConfig;
            g.promote({
              transition: b ? b.transition : void 0,
              preserveFollowOpacity:
                b && b.shouldPreserveFollowOpacity
                  ? b.shouldPreserveFollowOpacity(g)
                  : void 0,
            });
          }
          isLead() {
            let h = this.getStack();
            return !h || h.lead === this;
          }
          getLead() {
            var h;
            let { layoutId: g } = this.options;
            return (
              (g &&
                (null === (h = this.getStack()) || void 0 === h
                  ? void 0
                  : h.lead)) ||
              this
            );
          }
          getPrevLead() {
            var h;
            let { layoutId: g } = this.options;
            return g
              ? null === (h = this.getStack()) || void 0 === h
                ? void 0
                : h.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: h } = this.options;
            if (h) return this.root.sharedNodes.get(h);
          }
          promote({
            needsReset: h,
            transition: g,
            preserveFollowOpacity: _,
          } = {}) {
            let b = this.getStack();
            b && b.promote(this, _),
              h && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              g && this.setOptions({ transition: g });
          }
          relegate() {
            let h = this.getStack();
            return !!h && h.relegate(this);
          }
          resetRotation() {
            let { visualElement: h } = this.options;
            if (!h) return;
            let g = !1,
              { latestValues: _ } = h;
            if (
              ((_.rotate || _.rotateX || _.rotateY || _.rotateZ) && (g = !0),
              !g)
            )
              return;
            let b = {};
            for (let g = 0; g < tt.length; g++) {
              let y = "rotate" + tt[g];
              _[y] && ((b[y] = _[y]), h.setStaticValue(y, 0));
            }
            for (let g in (h.render(), b)) h.setStaticValue(g, b[g]);
            h.scheduleRender();
          }
          getProjectionStyles(h = {}) {
            var g, _;
            let b = {};
            if (!this.instance || this.isSVG) return b;
            if (!this.isVisible) return { visibility: "hidden" };
            b.visibility = "";
            let y = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (b.opacity = ""),
                (b.pointerEvents = resolveMotionValue(h.pointerEvents) || ""),
                (b.transform = y ? y(this.latestValues, "") : "none"),
                b
              );
            let A = this.getLead();
            if (!this.projectionDelta || !this.layout || !A.target) {
              let g = {};
              return (
                this.options.layoutId &&
                  ((g.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (g.pointerEvents =
                    resolveMotionValue(h.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, e9.ud)(this.latestValues) &&
                  ((g.transform = y ? y({}, "") : "none"),
                  (this.hasProjected = !1)),
                g
              );
            }
            let N = A.animationValues || A.latestValues;
            this.applyTransformsToTarget(),
              (b.transform = buildProjectionTransform(
                this.projectionDeltaWithTransform,
                this.treeScale,
                N,
              )),
              y && (b.transform = y(N, b.transform));
            let { x: F, y: B } = this.projectionDelta;
            for (let h in ((b.transformOrigin = `${100 * F.origin}% ${
              100 * B.origin
            }% 0`),
            A.animationValues
              ? (b.opacity =
                  A === this
                    ? null !==
                        (_ =
                          null !== (g = N.opacity) && void 0 !== g
                            ? g
                            : this.latestValues.opacity) && void 0 !== _
                      ? _
                      : 1
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : N.opacityExit)
              : (b.opacity =
                  A === this
                    ? void 0 !== N.opacity
                      ? N.opacity
                      : ""
                    : void 0 !== N.opacityExit
                      ? N.opacityExit
                      : 0),
            eq.P)) {
              if (void 0 === N[h]) continue;
              let { correct: g, applyTo: _ } = eq.P[h],
                y = "none" === b.transform ? N[h] : g(N[h], A);
              if (_) {
                let h = _.length;
                for (let g = 0; g < h; g++) b[_[g]] = y;
              } else b[h] = y;
            }
            return (
              this.options.layoutId &&
                (b.pointerEvents =
                  A === this
                    ? resolveMotionValue(h.pointerEvents) || ""
                    : "none"),
              b
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((h) => {
              var g;
              return null === (g = h.currentAnimation) || void 0 === g
                ? void 0
                : g.stop();
            }),
              this.root.nodes.forEach(clearMeasurements),
              this.root.sharedNodes.clear();
          }
        };
      }
      function updateLayout(h) {
        h.updateLayout();
      }
      function notifyLayoutUpdate(h) {
        var g;
        let _ =
          (null === (g = h.resumeFrom) || void 0 === g ? void 0 : g.snapshot) ||
          h.snapshot;
        if (h.isLead() && h.layout && _ && h.hasListeners("didUpdate")) {
          let { layoutBox: g, measuredBox: b } = h.layout,
            { animationType: y } = h.options,
            A = _.source !== h.layout.source;
          "size" === y
            ? eachAxis((h) => {
                let b = A ? _.measuredBox[h] : _.layoutBox[h],
                  y = calcLength(b);
                (b.min = g[h].min), (b.max = b.min + y);
              })
            : shouldAnimatePositionOnly(y, _.layoutBox, g) &&
              eachAxis((b) => {
                let y = A ? _.measuredBox[b] : _.layoutBox[b],
                  N = calcLength(g[b]);
                (y.max = y.min + N),
                  h.relativeTarget &&
                    !h.currentAnimation &&
                    ((h.isProjectionDirty = !0),
                    (h.relativeTarget[b].max = h.relativeTarget[b].min + N));
              });
          let N = (0, eF.wc)();
          calcBoxDelta(N, g, _.layoutBox);
          let F = (0, eF.wc)();
          A
            ? calcBoxDelta(F, h.applyTransform(b, !0), _.measuredBox)
            : calcBoxDelta(F, g, _.layoutBox);
          let B = !isDeltaZero(N),
            H = !1;
          if (!h.resumeFrom) {
            let b = h.getClosestProjectingParent();
            if (b && !b.resumeFrom) {
              let { snapshot: y, layout: A } = b;
              if (y && A) {
                let N = (0, eF.dO)();
                calcRelativePosition(N, _.layoutBox, y.layoutBox);
                let F = (0, eF.dO)();
                calcRelativePosition(F, g, A.layoutBox),
                  boxEquals(N, F) || (H = !0),
                  b.options.layoutRoot &&
                    ((h.relativeTarget = F),
                    (h.relativeTargetOrigin = N),
                    (h.relativeParent = b));
              }
            }
          }
          h.notifyListeners("didUpdate", {
            layout: g,
            snapshot: _,
            delta: F,
            layoutDelta: N,
            hasLayoutChanged: B,
            hasRelativeTargetChanged: H,
          });
        } else if (h.isLead()) {
          let { onExitComplete: g } = h.options;
          g && g();
        }
        h.options.transition = void 0;
      }
      function propagateDirtyNodes(h) {
        tr.totalNodes++,
          h.parent &&
            (h.isProjecting() ||
              (h.isProjectionDirty = h.parent.isProjectionDirty),
            h.isSharedProjectionDirty ||
              (h.isSharedProjectionDirty = !!(
                h.isProjectionDirty ||
                h.parent.isProjectionDirty ||
                h.parent.isSharedProjectionDirty
              )),
            h.isTransformDirty ||
              (h.isTransformDirty = h.parent.isTransformDirty));
      }
      function cleanDirtyNodes(h) {
        h.isProjectionDirty =
          h.isSharedProjectionDirty =
          h.isTransformDirty =
            !1;
      }
      function clearSnapshot(h) {
        h.clearSnapshot();
      }
      function clearMeasurements(h) {
        h.clearMeasurements();
      }
      function clearIsLayoutDirty(h) {
        h.isLayoutDirty = !1;
      }
      function resetTransformStyle(h) {
        let { visualElement: g } = h.options;
        g &&
          g.getProps().onBeforeLayoutMeasure &&
          g.notify("BeforeLayoutMeasure"),
          h.resetTransform();
      }
      function finishAnimation(h) {
        h.finishAnimation(),
          (h.targetDelta = h.relativeTarget = h.target = void 0),
          (h.isProjectionDirty = !0);
      }
      function resolveTargetDelta(h) {
        h.resolveTargetDelta();
      }
      function calcProjection(h) {
        h.calcProjection();
      }
      function resetRotation(h) {
        h.resetRotation();
      }
      function removeLeadSnapshots(h) {
        h.removeLeadSnapshot();
      }
      function mixAxisDelta(h, g, _) {
        (h.translate = (0, eN.C)(g.translate, 0, _)),
          (h.scale = (0, eN.C)(g.scale, 1, _)),
          (h.origin = g.origin),
          (h.originPoint = g.originPoint);
      }
      function mixAxis(h, g, _, b) {
        (h.min = (0, eN.C)(g.min, _.min, b)),
          (h.max = (0, eN.C)(g.max, _.max, b));
      }
      function hasOpacityCrossfade(h) {
        return h.animationValues && void 0 !== h.animationValues.opacityExit;
      }
      let ti = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        isWebKit = () =>
          navigator.userAgent.toLowerCase().includes("applewebkit/");
      function roundAxis(h) {
        (h.min = b(h.min)), (h.max = b(h.max));
      }
      function shouldAnimatePositionOnly(h, g, _) {
        return (
          "position" === h ||
          ("preserve-aspect" === h &&
            !isNear(aspectRatio(g), aspectRatio(_), 0.2))
        );
      }
      let to = createProjectionNode({
          attachResizeListener: (h, g) => addDomEvent(h, "resize", g),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ta = { current: void 0 },
        ts = createProjectionNode({
          measureScroll: (h) => ({ x: h.scrollLeft, y: h.scrollTop }),
          defaultParent: () => {
            if (!ta.current) {
              let h = new to({});
              h.mount(window),
                h.setOptions({ layoutScroll: !0 }),
                (ta.current = h);
            }
            return ta.current;
          },
          resetTransform: (h, g) => {
            h.style.transform = void 0 !== g ? g : "none";
          },
          checkIsScrollRoot: (h) =>
            "fixed" === window.getComputedStyle(h).position,
        });
      var tl = _(34547),
        tu = _(25794);
      let create_visual_element_createDomVisualElement = (h, g) =>
          isSVGComponent(h)
            ? new tu.e(g, { enableHardwareAcceleration: !1 })
            : new tl.W(g, { enableHardwareAcceleration: !0 }),
        tc = {
          animation: {
            Feature: class extends Feature {
              constructor(h) {
                super(h),
                  h.animationState ||
                    (h.animationState = (function (h) {
                      let animate = (g) =>
                          Promise.all(
                            g.map(({ animation: g, options: _ }) =>
                              (0, eR.d)(h, g, _),
                            ),
                          ),
                        g = {
                          animate: createTypeState(!0),
                          whileInView: createTypeState(),
                          whileHover: createTypeState(),
                          whileTap: createTypeState(),
                          whileDrag: createTypeState(),
                          whileFocus: createTypeState(),
                          exit: createTypeState(),
                        },
                        _ = !0,
                        buildResolvedTypeValues = (g, _) => {
                          let b = (0, ek.x)(h, _);
                          if (b) {
                            let { transition: h, transitionEnd: _, ...y } = b;
                            g = { ...g, ...y, ..._ };
                          }
                          return g;
                        };
                      function animateChanges(b, y) {
                        let A = h.getProps(),
                          N = h.getVariantContext(!0) || {},
                          F = [],
                          B = new Set(),
                          H = {},
                          U = 1 / 0;
                        for (let Y = 0; Y < eO; Y++) {
                          var K;
                          let X = eA[Y],
                            Q = g[X],
                            et = void 0 !== A[X] ? A[X] : N[X],
                            en = (0, q.$)(et),
                            er = X === y ? Q.isActive : null;
                          !1 === er && (U = Y);
                          let ei = et === N[X] && et !== A[X] && en;
                          if (
                            (ei && _ && h.manuallyAnimateOnMount && (ei = !1),
                            (Q.protectedKeys = { ...H }),
                            (!Q.isActive && null === er) ||
                              (!et && !Q.prevProp) ||
                              (0, ep.H)(et) ||
                              "boolean" == typeof et)
                          )
                            continue;
                          let eo =
                              ((K = Q.prevProp),
                              "string" == typeof et
                                ? et !== K
                                : !!Array.isArray(et) &&
                                  !shallowCompare(et, K)),
                            ea =
                              eo ||
                              (X === y && Q.isActive && !ei && en) ||
                              (Y > U && en),
                            es = Array.isArray(et) ? et : [et],
                            el = es.reduce(buildResolvedTypeValues, {});
                          !1 === er && (el = {});
                          let { prevResolvedValues: eu = {} } = Q,
                            ec = { ...eu, ...el },
                            markToAnimate = (h) => {
                              (ea = !0),
                                B.delete(h),
                                (Q.needsAnimating[h] = !0);
                            };
                          for (let h in ec) {
                            let g = el[h],
                              _ = eu[h];
                            H.hasOwnProperty(h) ||
                              (g !== _
                                ? (0, ej.C)(g) && (0, ej.C)(_)
                                  ? !shallowCompare(g, _) || eo
                                    ? markToAnimate(h)
                                    : (Q.protectedKeys[h] = !0)
                                  : void 0 !== g
                                    ? markToAnimate(h)
                                    : B.add(h)
                                : void 0 !== g && B.has(h)
                                  ? markToAnimate(h)
                                  : (Q.protectedKeys[h] = !0));
                          }
                          (Q.prevProp = et),
                            (Q.prevResolvedValues = el),
                            Q.isActive && (H = { ...H, ...el }),
                            _ && h.blockInitialAnimation && (ea = !1),
                            ea &&
                              !ei &&
                              F.push(
                                ...es.map((h) => ({
                                  animation: h,
                                  options: { type: X, ...b },
                                })),
                              );
                        }
                        if (B.size) {
                          let g = {};
                          B.forEach((_) => {
                            let b = h.getBaseTarget(_);
                            void 0 !== b && (g[_] = b);
                          }),
                            F.push({ animation: g });
                        }
                        let Y = !!F.length;
                        return (
                          _ &&
                            !1 === A.initial &&
                            !h.manuallyAnimateOnMount &&
                            (Y = !1),
                          (_ = !1),
                          Y ? animate(F) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges,
                        setActive: function (_, b, y) {
                          var A;
                          if (g[_].isActive === b) return Promise.resolve();
                          null === (A = h.variantChildren) ||
                            void 0 === A ||
                            A.forEach((h) => {
                              var g;
                              return null === (g = h.animationState) ||
                                void 0 === g
                                ? void 0
                                : g.setActive(_, b);
                            }),
                            (g[_].isActive = b);
                          let N = animateChanges(y, _);
                          for (let h in g) g[h].protectedKeys = {};
                          return N;
                        },
                        setAnimateFunction: function (g) {
                          animate = g(h);
                        },
                        getState: () => g,
                      };
                    })(h));
              }
              updateAnimationControlsSubscription() {
                let { animate: h } = this.node.getProps();
                this.unmount(),
                  (0, ep.H)(h) && (this.unmount = h.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: h } = this.node.getProps(),
                  { animate: g } = this.node.prevProps || {};
                h !== g && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends Feature {
              constructor() {
                super(...arguments), (this.id = eD++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: h,
                    onExitComplete: g,
                    custom: _,
                  } = this.node.presenceContext,
                  { isPresent: b } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || h === b) return;
                let y = this.node.animationState.setActive("exit", !h, {
                  custom: null != _ ? _ : this.node.getProps().custom,
                });
                g && !h && y.then(() => g(this.id));
              }
              mount() {
                let { register: h } = this.node.presenceContext || {};
                h && (this.unmount = h(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends Feature {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: h = {} } = this.node.getProps(),
                  { root: g, margin: _, amount: b = "some", once: y } = h,
                  A = {
                    root: g ? g.current : void 0,
                    rootMargin: _,
                    threshold: "number" == typeof b ? b : eT[b],
                  };
                return (function (h, g, _) {
                  let b = (function ({ root: h, ...g }) {
                    let _ = h || document;
                    eP.has(_) || eP.set(_, {});
                    let b = eP.get(_),
                      y = JSON.stringify(g);
                    return (
                      b[y] ||
                        (b[y] = new IntersectionObserver(
                          fireAllObserverCallbacks,
                          { root: h, ...g },
                        )),
                      b[y]
                    );
                  })(g);
                  return (
                    eE.set(h, _),
                    b.observe(h),
                    () => {
                      eE.delete(h), b.unobserve(h);
                    }
                  );
                })(this.node.current, A, (h) => {
                  let { isIntersecting: g } = h;
                  if (
                    this.isInView === g ||
                    ((this.isInView = g), y && !g && this.hasEnteredView)
                  )
                    return;
                  g && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", g);
                  let { onViewportEnter: _, onViewportLeave: b } =
                      this.node.getProps(),
                    A = g ? _ : b;
                  A && A(h);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: h, prevProps: g } = this.node,
                  _ = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: h = {} },
                      { viewport: g = {} } = {},
                    ) {
                      return (_) => h[_] !== g[_];
                    })(h, g),
                  );
                _ && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends Feature {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = eS.Z),
                  (this.removeEndListeners = eS.Z),
                  (this.removeAccessibleListeners = eS.Z),
                  (this.startPointerPress = (h, g) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let _ = this.node.getProps(),
                      b = addPointerEvent(
                        window,
                        "pointerup",
                        (h, g) => {
                          if (!this.checkPressEnd()) return;
                          let { onTap: _, onTapCancel: b } =
                            this.node.getProps();
                          eC.Wi.update(() => {
                            isNodeOrChild(this.node.current, h.target)
                              ? _ && _(h, g)
                              : b && b(h, g);
                          });
                        },
                        { passive: !(_.onTap || _.onPointerUp) },
                      ),
                      y = addPointerEvent(
                        window,
                        "pointercancel",
                        (h, g) => this.cancelPress(h, g),
                        { passive: !(_.onTapCancel || _.onPointerCancel) },
                      );
                    (this.removeEndListeners = (0, ey.z)(b, y)),
                      this.startPress(h, g);
                  }),
                  (this.startAccessiblePress = () => {
                    let h = addDomEvent(this.node.current, "keydown", (h) => {
                        "Enter" !== h.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = addDomEvent(
                            this.node.current,
                            "keyup",
                            (h) => {
                              "Enter" === h.key &&
                                this.checkPressEnd() &&
                                fireSyntheticPointerEvent("up", (h, g) => {
                                  let { onTap: _ } = this.node.getProps();
                                  _ && eC.Wi.update(() => _(h, g));
                                });
                            },
                          )),
                          fireSyntheticPointerEvent("down", (h, g) => {
                            this.startPress(h, g);
                          }));
                      }),
                      g = addDomEvent(this.node.current, "blur", () => {
                        this.isPressing &&
                          fireSyntheticPointerEvent("cancel", (h, g) =>
                            this.cancelPress(h, g),
                          );
                      });
                    this.removeAccessibleListeners = (0, ey.z)(h, g);
                  });
              }
              startPress(h, g) {
                this.isPressing = !0;
                let { onTapStart: _, whileTap: b } = this.node.getProps();
                b &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  _ && eC.Wi.update(() => _(h, g));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let h = this.node.getProps();
                return (
                  h.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !isDragActive()
                );
              }
              cancelPress(h, g) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: _ } = this.node.getProps();
                _ && eC.Wi.update(() => _(h, g));
              }
              mount() {
                let h = this.node.getProps(),
                  g = addPointerEvent(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(h.onTapStart || h.onPointerStart) },
                  ),
                  _ = addDomEvent(
                    this.node.current,
                    "focus",
                    this.startAccessiblePress,
                  );
                this.removeStartListeners = (0, ey.z)(g, _);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends Feature {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let h = !1;
                try {
                  h = this.node.current.matches(":focus-visible");
                } catch (g) {
                  h = !0;
                }
                h &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = (0, ey.z)(
                  addDomEvent(this.node.current, "focus", () => this.onFocus()),
                  addDomEvent(this.node.current, "blur", () => this.onBlur()),
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends Feature {
              mount() {
                this.unmount = (0, ey.z)(
                  addHoverEvent(this.node, !0),
                  addHoverEvent(this.node, !1),
                );
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends Feature {
              constructor() {
                super(...arguments), (this.removePointerDownListener = eS.Z);
              }
              onPointerDown(h) {
                this.session = new PanSession(h, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: h,
                  onPanStart: g,
                  onPan: _,
                  onPanEnd: b,
                } = this.node.getProps();
                return {
                  onSessionStart: asyncHandler(h),
                  onStart: asyncHandler(g),
                  onMove: _,
                  onEnd: (h, g) => {
                    delete this.session, b && eC.Wi.update(() => b(h, g));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = addPointerEvent(
                  this.node.current,
                  "pointerdown",
                  (h) => this.onPointerDown(h),
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends Feature {
              constructor(h) {
                super(h),
                  (this.removeGroupControls = eS.Z),
                  (this.removeListeners = eS.Z),
                  (this.controls = new VisualElementDragControls(h));
              }
              mount() {
                let { dragControls: h } = this.node.getProps();
                h && (this.removeGroupControls = h.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || eS.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: ts,
            MeasureLayout: MeasureLayout,
          },
          layout: { ProjectionNode: ts, MeasureLayout: MeasureLayout },
        },
        td = (function (h) {
          function custom(g, _ = {}) {
            return (function ({
              preloadedFeatures: h,
              createVisualElement: g,
              useRender: _,
              useVisualState: b,
              Component: y,
            }) {
              h &&
                (function (h) {
                  for (let g in h) X.A[g] = { ...X.A[g], ...h[g] };
                })(h);
              let ei = (0, A.forwardRef)(function (X, er) {
                var ei;
                let eo;
                let ea = {
                    ...(0, A.useContext)(N._),
                    ...X,
                    layoutId: (function ({ layoutId: h }) {
                      let g = (0, A.useContext)(et.p).id;
                      return g && void 0 !== h ? g + "-" + h : h;
                    })(X),
                  },
                  { isStatic: es } = ea,
                  el = (function (h) {
                    let { initial: g, animate: _ } = (function (h, g) {
                      if ((0, Y.G)(h)) {
                        let { initial: g, animate: _ } = h;
                        return {
                          initial: !1 === g || (0, q.$)(g) ? g : void 0,
                          animate: (0, q.$)(_) ? _ : void 0,
                        };
                      }
                      return !1 !== h.inherit ? g : {};
                    })(h, (0, A.useContext)(F));
                    return (0, A.useMemo)(
                      () => ({ initial: g, animate: _ }),
                      [
                        variantLabelsAsDependency(g),
                        variantLabelsAsDependency(_),
                      ],
                    );
                  })(X),
                  eu = b(X, es);
                if (!es && Q.j) {
                  el.visualElement = (function (h, g, _, b) {
                    let { visualElement: y } = (0, A.useContext)(F),
                      K = (0, A.useContext)(U),
                      q = (0, A.useContext)(B.O),
                      Y = (0, A.useContext)(N._).reducedMotion,
                      X = (0, A.useRef)();
                    (b = b || K.renderer),
                      !X.current &&
                        b &&
                        (X.current = b(h, {
                          visualState: g,
                          parent: y,
                          props: _,
                          presenceContext: q,
                          blockInitialAnimation: !!q && !1 === q.initial,
                          reducedMotionConfig: Y,
                        }));
                    let Q = X.current;
                    (0, A.useInsertionEffect)(() => {
                      Q && Q.update(_, q);
                    }),
                      (0, H.L)(() => {
                        Q && Q.render();
                      }),
                      (0, A.useEffect)(() => {
                        Q && Q.updateFeatures();
                      });
                    let et = window.HandoffAppearAnimations ? H.L : A.useEffect;
                    return (
                      et(() => {
                        Q &&
                          Q.animationState &&
                          Q.animationState.animateChanges();
                      }),
                      Q
                    );
                  })(y, eu, ea, g);
                  let _ = (0, A.useContext)(en),
                    b = (0, A.useContext)(U).strict;
                  el.visualElement &&
                    (eo = el.visualElement.loadFeatures(ea, b, h, _));
                }
                return A.createElement(
                  F.Provider,
                  { value: el },
                  eo && el.visualElement
                    ? A.createElement(eo, {
                        visualElement: el.visualElement,
                        ...ea,
                      })
                    : null,
                  _(
                    y,
                    X,
                    ((ei = el.visualElement),
                    (0, A.useCallback)(
                      (h) => {
                        h && eu.mount && eu.mount(h),
                          ei && (h ? ei.mount(h) : ei.unmount()),
                          er &&
                            ("function" == typeof er
                              ? er(h)
                              : (0, K.I)(er) && (er.current = h));
                      },
                      [ei],
                    )),
                    eu,
                    es,
                    el.visualElement,
                  ),
                );
              });
              return (ei[er] = y), ei;
            })(h(g, _));
          }
          if ("undefined" == typeof Proxy) return custom;
          let g = new Map();
          return new Proxy(custom, {
            get: (h, _) => (g.has(_) || g.set(_, custom(_)), g.get(_)),
          });
        })((h, g) =>
          (function (h, { forwardMotionProps: g = !1 }, _, b) {
            let y = isSVGComponent(h) ? ev : eb;
            return {
              ...y,
              preloadedFeatures: _,
              useRender: (function (h = !1) {
                return (g, _, b, { latestValues: y }, N) => {
                  let F = isSVGComponent(g) ? useSVGProps : useHTMLProps,
                    B = F(_, y, N, g),
                    H = (function (h, g, _) {
                      let b = {};
                      for (let y in h)
                        ("values" !== y || "object" != typeof h.values) &&
                          (shouldForward(y) ||
                            (!0 === _ && isValidMotionProp(y)) ||
                            (!g && !isValidMotionProp(y)) ||
                            (h.draggable && y.startsWith("onDrag"))) &&
                          (b[y] = h[y]);
                      return b;
                    })(_, "string" == typeof g, h),
                    U = { ...H, ...B, ref: b },
                    { children: K } = _,
                    q = (0, A.useMemo)(() => ((0, ea.i)(K) ? K.get() : K), [K]);
                  return (0, A.createElement)(g, { ...U, children: q });
                };
              })(g),
              createVisualElement: b,
              Component: h,
            };
          })(h, g, tc, create_visual_element_createDomVisualElement),
        );
    },
    93193: function (h, g, _) {
      "use strict";
      _.d(g, {
        D: function () {
          return camelToDash;
        },
      });
      let camelToDash = (h) =>
        h.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    57630: function (h, g, _) {
      "use strict";
      _.d(g, {
        Xp: function () {
          return A;
        },
        f9: function () {
          return b;
        },
        tm: function () {
          return y;
        },
      });
      let checkStringStartsWith = (h) => (g) =>
          "string" == typeof g && g.startsWith(h),
        b = checkStringStartsWith("--"),
        y = checkStringStartsWith("var(--"),
        A =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    75194: function (h, g, _) {
      "use strict";
      function isSVGElement(h) {
        return h instanceof SVGElement && "svg" !== h.tagName;
      }
      _.d(g, {
        v: function () {
          return isSVGElement;
        },
      });
    },
    79135: function (h, g, _) {
      "use strict";
      _.d(g, {
        T: function () {
          return getAnimatableNone;
        },
      });
      var b = _(51550),
        y = _(97197),
        A = _(2728);
      function getAnimatableNone(h, g) {
        let _ = (0, A.A)(h);
        return (
          _ !== y.h && (_ = b.P),
          _.getAnimatableNone ? _.getAnimatableNone(g) : void 0
        );
      }
    },
    2728: function (h, g, _) {
      "use strict";
      _.d(g, {
        A: function () {
          return getDefaultValueType;
        },
      });
      var b = _(85385),
        y = _(97197),
        A = _(36173);
      let N = {
          ...A.j,
          color: b.$,
          backgroundColor: b.$,
          outlineColor: b.$,
          fill: b.$,
          stroke: b.$,
          borderColor: b.$,
          borderTopColor: b.$,
          borderRightColor: b.$,
          borderBottomColor: b.$,
          borderLeftColor: b.$,
          filter: y.h,
          WebkitFilter: y.h,
        },
        getDefaultValueType = (h) => N[h];
    },
    56440: function (h, g, _) {
      "use strict";
      _.d(g, {
        $: function () {
          return N;
        },
        C: function () {
          return findDimensionValueType;
        },
      });
      var b = _(61649),
        y = _(96190),
        A = _(88340);
      let N = [
          b.Rx,
          y.px,
          y.aQ,
          y.RW,
          y.vw,
          y.vh,
          { test: (h) => "auto" === h, parse: (h) => h },
        ],
        findDimensionValueType = (h) => N.find((0, A.l)(h));
    },
    36173: function (h, g, _) {
      "use strict";
      _.d(g, {
        j: function () {
          return N;
        },
      });
      var b = _(61649),
        y = _(96190);
      let A = { ...b.Rx, transform: Math.round },
        N = {
          borderWidth: y.px,
          borderTopWidth: y.px,
          borderRightWidth: y.px,
          borderBottomWidth: y.px,
          borderLeftWidth: y.px,
          borderRadius: y.px,
          radius: y.px,
          borderTopLeftRadius: y.px,
          borderTopRightRadius: y.px,
          borderBottomRightRadius: y.px,
          borderBottomLeftRadius: y.px,
          width: y.px,
          maxWidth: y.px,
          height: y.px,
          maxHeight: y.px,
          size: y.px,
          top: y.px,
          right: y.px,
          bottom: y.px,
          left: y.px,
          padding: y.px,
          paddingTop: y.px,
          paddingRight: y.px,
          paddingBottom: y.px,
          paddingLeft: y.px,
          margin: y.px,
          marginTop: y.px,
          marginRight: y.px,
          marginBottom: y.px,
          marginLeft: y.px,
          rotate: y.RW,
          rotateX: y.RW,
          rotateY: y.RW,
          rotateZ: y.RW,
          scale: b.bA,
          scaleX: b.bA,
          scaleY: b.bA,
          scaleZ: b.bA,
          skew: y.RW,
          skewX: y.RW,
          skewY: y.RW,
          distance: y.px,
          translateX: y.px,
          translateY: y.px,
          translateZ: y.px,
          x: y.px,
          y: y.px,
          z: y.px,
          perspective: y.px,
          transformPerspective: y.px,
          opacity: b.Fq,
          originX: y.$C,
          originY: y.$C,
          originZ: y.px,
          zIndex: A,
          fillOpacity: b.Fq,
          strokeOpacity: b.Fq,
          numOctaves: A,
        };
    },
    88340: function (h, g, _) {
      "use strict";
      _.d(g, {
        l: function () {
          return testValueType;
        },
      });
      let testValueType = (h) => (g) => g.test(h);
    },
    34547: function (h, g, _) {
      "use strict";
      _.d(g, {
        W: function () {
          return HTMLVisualElement;
        },
      });
      var b = _(38057),
        y = _(57630),
        A = _(94714),
        N = _(50189),
        F = _(34242),
        B = _(2728),
        H = _(56460),
        U = _(81760),
        K = _(40406);
      let HTMLVisualElement = class HTMLVisualElement extends U.J {
        readValueFromInstance(h, g) {
          if (A.G.has(g)) {
            let h = (0, B.A)(g);
            return (h && h.default) || 0;
          }
          {
            let _ = window.getComputedStyle(h),
              b = ((0, y.f9)(g) ? _.getPropertyValue(g) : _[g]) || 0;
            return "string" == typeof b ? b.trim() : b;
          }
        }
        measureInstanceViewportBox(h, { transformPagePoint: g }) {
          return (0, H.J)(h, g);
        }
        build(h, g, _, y) {
          (0, b.r)(h, g, _, y.transformTemplate);
        }
        scrapeMotionValuesFromProps(h, g) {
          return (0, N.U)(h, g);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: h } = this.props;
          (0, K.i)(h) &&
            (this.childSubscription = h.on("change", (h) => {
              this.current && (this.current.textContent = `${h}`);
            }));
        }
        renderInstance(h, g, _, b) {
          (0, F.N)(h, g, _, b);
        }
      };
    },
    38057: function (h, g, _) {
      "use strict";
      _.d(g, {
        r: function () {
          return buildHTMLStyles;
        },
      });
      var b = _(94714);
      let y = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        A = b._.length;
      var N = _(57630);
      let getValueAsType = (h, g) =>
        g && "number" == typeof h ? g.transform(h) : h;
      var F = _(36173);
      function buildHTMLStyles(h, g, _, B) {
        let { style: H, vars: U, transform: K, transformOrigin: q } = h,
          Y = !1,
          X = !1,
          Q = !0;
        for (let h in g) {
          let _ = g[h];
          if ((0, N.f9)(h)) {
            U[h] = _;
            continue;
          }
          let y = F.j[h],
            A = getValueAsType(_, y);
          if (b.G.has(h)) {
            if (((Y = !0), (K[h] = A), !Q)) continue;
            _ !== (y.default || 0) && (Q = !1);
          } else h.startsWith("origin") ? ((X = !0), (q[h] = A)) : (H[h] = A);
        }
        if (
          (!g.transform &&
            (Y || B
              ? (H.transform = (function (
                  h,
                  {
                    enableHardwareAcceleration: g = !0,
                    allowTransformNone: _ = !0,
                  },
                  N,
                  F,
                ) {
                  let B = "";
                  for (let g = 0; g < A; g++) {
                    let _ = b._[g];
                    if (void 0 !== h[_]) {
                      let g = y[_] || _;
                      B += `${g}(${h[_]}) `;
                    }
                  }
                  return (
                    g && !h.z && (B += "translateZ(0)"),
                    (B = B.trim()),
                    F ? (B = F(h, N ? "" : B)) : _ && N && (B = "none"),
                    B
                  );
                })(h.transform, _, Q, B))
              : H.transform && (H.transform = "none")),
          X)
        ) {
          let { originX: h = "50%", originY: g = "50%", originZ: _ = 0 } = q;
          H.transformOrigin = `${h} ${g} ${_}`;
        }
      }
    },
    34242: function (h, g, _) {
      "use strict";
      function renderHTML(h, { style: g, vars: _ }, b, y) {
        for (let A in (Object.assign(h.style, g, y && y.getProjectionStyles(b)),
        _))
          h.style.setProperty(A, _[A]);
      }
      _.d(g, {
        N: function () {
          return renderHTML;
        },
      });
    },
    50189: function (h, g, _) {
      "use strict";
      _.d(g, {
        U: function () {
          return scrapeMotionValuesFromProps;
        },
      });
      var b = _(56816),
        y = _(40406);
      function scrapeMotionValuesFromProps(h, g) {
        let { style: _ } = h,
          A = {};
        for (let N in _)
          ((0, y.i)(_[N]) ||
            (g.style && (0, y.i)(g.style[N])) ||
            (0, b.j)(N, h)) &&
            (A[N] = _[N]);
        return A;
      }
    },
    94714: function (h, g, _) {
      "use strict";
      _.d(g, {
        G: function () {
          return y;
        },
        _: function () {
          return b;
        },
      });
      let b = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        y = new Set(b);
    },
    56955: function (h, g, _) {
      "use strict";
      _.d(g, {
        R: function () {
          return b;
        },
      });
      let b = new WeakMap();
    },
    25794: function (h, g, _) {
      "use strict";
      _.d(g, {
        e: function () {
          return SVGVisualElement;
        },
      });
      var b = _(16832),
        y = _(81760),
        A = _(85415),
        N = _(93193),
        F = _(77302),
        B = _(94714),
        H = _(68504),
        U = _(2728),
        K = _(61512),
        q = _(79854);
      let SVGVisualElement = class SVGVisualElement extends y.J {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(h, g) {
          return h[g];
        }
        readValueFromInstance(h, g) {
          if (B.G.has(g)) {
            let h = (0, U.A)(g);
            return (h && h.default) || 0;
          }
          return (g = F.s.has(g) ? g : (0, N.D)(g)), h.getAttribute(g);
        }
        measureInstanceViewportBox() {
          return (0, K.dO)();
        }
        scrapeMotionValuesFromProps(h, g) {
          return (0, b.U)(h, g);
        }
        build(h, g, _, b) {
          (0, A.i)(h, g, _, this.isSVGTag, b.transformTemplate);
        }
        renderInstance(h, g, _, b) {
          (0, H.K)(h, g, _, b);
        }
        mount(h) {
          (this.isSVGTag = (0, q.a)(h.tagName)), super.mount(h);
        }
      };
    },
    85415: function (h, g, _) {
      "use strict";
      _.d(g, {
        i: function () {
          return buildSVGAttrs;
        },
      });
      var b = _(38057),
        y = _(96190);
      function calcOrigin(h, g, _) {
        return "string" == typeof h ? h : y.px.transform(g + _ * h);
      }
      let A = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        N = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function buildSVGAttrs(
        h,
        {
          attrX: g,
          attrY: _,
          attrScale: F,
          originX: B,
          originY: H,
          pathLength: U,
          pathSpacing: K = 1,
          pathOffset: q = 0,
          ...Y
        },
        X,
        Q,
        et,
      ) {
        if (((0, b.r)(h, Y, X, et), Q)) {
          h.style.viewBox && (h.attrs.viewBox = h.style.viewBox);
          return;
        }
        (h.attrs = h.style), (h.style = {});
        let { attrs: en, style: er, dimensions: ei } = h;
        en.transform &&
          (ei && (er.transform = en.transform), delete en.transform),
          ei &&
            (void 0 !== B || void 0 !== H || er.transform) &&
            (er.transformOrigin = (function (h, g, _) {
              let b = calcOrigin(g, h.x, h.width),
                y = calcOrigin(_, h.y, h.height);
              return `${b} ${y}`;
            })(ei, void 0 !== B ? B : 0.5, void 0 !== H ? H : 0.5)),
          void 0 !== g && (en.x = g),
          void 0 !== _ && (en.y = _),
          void 0 !== F && (en.scale = F),
          void 0 !== U &&
            (function (h, g, _ = 1, b = 0, F = !0) {
              h.pathLength = 1;
              let B = F ? A : N;
              h[B.offset] = y.px.transform(-b);
              let H = y.px.transform(g),
                U = y.px.transform(_);
              h[B.array] = `${H} ${U}`;
            })(en, U, K, q, !1);
      }
    },
    77302: function (h, g, _) {
      "use strict";
      _.d(g, {
        s: function () {
          return b;
        },
      });
      let b = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    79854: function (h, g, _) {
      "use strict";
      _.d(g, {
        a: function () {
          return isSVGTag;
        },
      });
      let isSVGTag = (h) => "string" == typeof h && "svg" === h.toLowerCase();
    },
    68504: function (h, g, _) {
      "use strict";
      _.d(g, {
        K: function () {
          return renderSVG;
        },
      });
      var b = _(93193),
        y = _(34242),
        A = _(77302);
      function renderSVG(h, g, _, N) {
        for (let _ in ((0, y.N)(h, g, void 0, N), g.attrs))
          h.setAttribute(A.s.has(_) ? _ : (0, b.D)(_), g.attrs[_]);
      }
    },
    16832: function (h, g, _) {
      "use strict";
      _.d(g, {
        U: function () {
          return scrapeMotionValuesFromProps;
        },
      });
      var b = _(40406),
        y = _(50189),
        A = _(94714);
      function scrapeMotionValuesFromProps(h, g) {
        let _ = (0, y.U)(h, g);
        for (let y in h)
          if ((0, b.i)(h[y]) || (0, b.i)(g[y])) {
            let g =
              -1 !== A._.indexOf(y)
                ? "attr" + y.charAt(0).toUpperCase() + y.substring(1)
                : y;
            _[g] = h[y];
          }
        return _;
      }
    },
    7504: function (h, g, _) {
      "use strict";
      _.d(g, {
        G: function () {
          return isControllingVariants;
        },
        M: function () {
          return isVariantNode;
        },
      });
      var b = _(2445),
        y = _(97732),
        A = _(22963);
      function isControllingVariants(h) {
        return (0, b.H)(h.animate) || A.V.some((g) => (0, y.$)(h[g]));
      }
      function isVariantNode(h) {
        return !!(isControllingVariants(h) || h.variants);
      }
    },
    97732: function (h, g, _) {
      "use strict";
      function isVariantLabel(h) {
        return "string" == typeof h || Array.isArray(h);
      }
      _.d(g, {
        $: function () {
          return isVariantLabel;
        },
      });
    },
    52248: function (h, g, _) {
      "use strict";
      _.d(g, {
        x: function () {
          return resolveVariant;
        },
      });
      var b = _(79432);
      function resolveVariant(h, g, _) {
        let y = h.getProps();
        return (0, b.o)(
          y,
          g,
          void 0 !== _ ? _ : y.custom,
          (function (h) {
            let g = {};
            return h.values.forEach((h, _) => (g[_] = h.get())), g;
          })(h),
          (function (h) {
            let g = {};
            return h.values.forEach((h, _) => (g[_] = h.getVelocity())), g;
          })(h),
        );
      }
    },
    79432: function (h, g, _) {
      "use strict";
      function resolveVariantFromProps(h, g, _, b = {}, y = {}) {
        return (
          "function" == typeof g && (g = g(void 0 !== _ ? _ : h.custom, b, y)),
          "string" == typeof g && (g = h.variants && h.variants[g]),
          "function" == typeof g && (g = g(void 0 !== _ ? _ : h.custom, b, y)),
          g
        );
      }
      _.d(g, {
        o: function () {
          return resolveVariantFromProps;
        },
      });
    },
    58172: function (h, g, _) {
      "use strict";
      _.d(g, {
        GJ: function () {
          return checkTargetForNewValues;
        },
        P$: function () {
          return getOrigin;
        },
        CD: function () {
          return setTarget;
        },
        gg: function () {
          return setValues;
        },
      });
      let isNumericalString = (h) => /^\-?\d*\.?\d+$/.test(h);
      var b = _(30681),
        y = _(8715),
        A = _(33234),
        N = _(51550),
        F = _(79135),
        B = _(85385),
        H = _(56440),
        U = _(88340);
      let K = [...H.$, B.$, N.P],
        findValueType = (h) => K.find((0, U.l)(h));
      var q = _(52248);
      function setTarget(h, g) {
        let _ = (0, q.x)(h, g),
          {
            transitionEnd: b = {},
            transition: N = {},
            ...F
          } = _ ? h.makeTargetAnimatable(_, !1) : {};
        for (let g in (F = { ...F, ...b })) {
          let _ = (0, y.Y)(F[g]);
          h.hasValue(g) ? h.getValue(g).set(_) : h.addValue(g, (0, A.B)(_));
        }
      }
      function setVariants(h, g) {
        let _ = [...g].reverse();
        _.forEach((_) => {
          let b = h.getVariant(_);
          b && setTarget(h, b),
            h.variantChildren &&
              h.variantChildren.forEach((h) => {
                setVariants(h, g);
              });
        });
      }
      function setValues(h, g) {
        return Array.isArray(g)
          ? setVariants(h, g)
          : "string" == typeof g
            ? setVariants(h, [g])
            : void setTarget(h, g);
      }
      function checkTargetForNewValues(h, g, _) {
        var y, B;
        let H = Object.keys(g).filter((g) => !h.hasValue(g)),
          U = H.length;
        if (U)
          for (let K = 0; K < U; K++) {
            let U = H[K],
              q = g[U],
              Y = null;
            Array.isArray(q) && (Y = q[0]),
              null === Y &&
                (Y =
                  null !==
                    (B =
                      null !== (y = _[U]) && void 0 !== y
                        ? y
                        : h.readValue(U)) && void 0 !== B
                    ? B
                    : g[U]),
              null != Y &&
                ("string" == typeof Y && (isNumericalString(Y) || (0, b.W)(Y))
                  ? (Y = parseFloat(Y))
                  : !findValueType(Y) && N.P.test(q) && (Y = (0, F.T)(U, q)),
                h.addValue(U, (0, A.B)(Y, { owner: h })),
                void 0 === _[U] && (_[U] = Y),
                null !== Y && h.setBaseTarget(U, Y));
          }
      }
      function getOrigin(h, g, _) {
        let b = {};
        for (let y in h) {
          let h = (function (h, g) {
            if (!g) return;
            let _ = g[h] || g.default || g;
            return _.from;
          })(y, g);
          if (void 0 !== h) b[y] = h;
          else {
            let h = _.getValue(y);
            h && (b[y] = h.get());
          }
        }
        return b;
      }
    },
    22963: function (h, g, _) {
      "use strict";
      _.d(g, {
        V: function () {
          return y;
        },
        e: function () {
          return b;
        },
      });
      let b = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        y = ["initial", ...b];
    },
    10010: function (h, g, _) {
      "use strict";
      function addUniqueItem(h, g) {
        -1 === h.indexOf(g) && h.push(g);
      }
      function removeItem(h, g) {
        let _ = h.indexOf(g);
        _ > -1 && h.splice(_, 1);
      }
      _.d(g, {
        cl: function () {
          return removeItem;
        },
        y4: function () {
          return addUniqueItem;
        },
      });
    },
    24169: function (h, g, _) {
      "use strict";
      _.d(g, {
        u: function () {
          return clamp;
        },
      });
      let clamp = (h, g, _) => Math.min(Math.max(_, h), g);
    },
    45487: function (h, g, _) {
      "use strict";
      _.d(g, {
        K: function () {
          return y;
        },
        k: function () {
          return A;
        },
      });
      var b = _(81662);
      let y = b.Z,
        A = b.Z;
    },
    64606: function (h, g, _) {
      "use strict";
      _.d(g, {
        s: function () {
          return interpolate;
        },
      });
      var b = _(45487),
        y = _(85385),
        A = _(24169),
        N = _(80022);
      function hueToRgb(h, g, _) {
        return (_ < 0 && (_ += 1), _ > 1 && (_ -= 1), _ < 1 / 6)
          ? h + (g - h) * 6 * _
          : _ < 0.5
            ? g
            : _ < 2 / 3
              ? h + (g - h) * (2 / 3 - _) * 6
              : h;
      }
      var F = _(26382),
        B = _(40819),
        H = _(93184);
      let mixLinearColor = (h, g, _) => {
          let b = h * h;
          return Math.sqrt(Math.max(0, _ * (g * g - b) + b));
        },
        U = [F.$, B.m, H.J],
        getColorType = (h) => U.find((g) => g.test(h));
      function asRGBA(h) {
        let g = getColorType(h);
        (0, b.k)(
          !!g,
          `'${h}' is not an animatable color. Use the equivalent color code instead.`,
        );
        let _ = g.parse(h);
        return (
          g === H.J &&
            (_ = (function ({ hue: h, saturation: g, lightness: _, alpha: b }) {
              (h /= 360), (_ /= 100);
              let y = 0,
                A = 0,
                N = 0;
              if ((g /= 100)) {
                let b = _ < 0.5 ? _ * (1 + g) : _ + g - _ * g,
                  F = 2 * _ - b;
                (y = hueToRgb(F, b, h + 1 / 3)),
                  (A = hueToRgb(F, b, h)),
                  (N = hueToRgb(F, b, h - 1 / 3));
              } else y = A = N = _;
              return {
                red: Math.round(255 * y),
                green: Math.round(255 * A),
                blue: Math.round(255 * N),
                alpha: b,
              };
            })(_)),
          _
        );
      }
      let mixColor = (h, g) => {
        let _ = asRGBA(h),
          b = asRGBA(g),
          y = { ..._ };
        return (h) => (
          (y.red = mixLinearColor(_.red, b.red, h)),
          (y.green = mixLinearColor(_.green, b.green, h)),
          (y.blue = mixLinearColor(_.blue, b.blue, h)),
          (y.alpha = (0, N.C)(_.alpha, b.alpha, h)),
          B.m.transform(y)
        );
      };
      var K = _(83624),
        q = _(51550);
      let mixImmediate = (h, g) => (_) => `${_ > 0 ? g : h}`;
      function getMixer(h, g) {
        return "number" == typeof h
          ? (_) => (0, N.C)(h, g, _)
          : y.$.test(h)
            ? mixColor(h, g)
            : h.startsWith("var(")
              ? mixImmediate(h, g)
              : mixComplex(h, g);
      }
      let mixArray = (h, g) => {
          let _ = [...h],
            b = _.length,
            y = h.map((h, _) => getMixer(h, g[_]));
          return (h) => {
            for (let g = 0; g < b; g++) _[g] = y[g](h);
            return _;
          };
        },
        mixObject = (h, g) => {
          let _ = { ...h, ...g },
            b = {};
          for (let y in _)
            void 0 !== h[y] && void 0 !== g[y] && (b[y] = getMixer(h[y], g[y]));
          return (h) => {
            for (let g in b) _[g] = b[g](h);
            return _;
          };
        },
        mixComplex = (h, g) => {
          let _ = q.P.createTransformer(g),
            y = (0, q.V)(h),
            A = (0, q.V)(g),
            N =
              y.numVars === A.numVars &&
              y.numColors === A.numColors &&
              y.numNumbers >= A.numNumbers;
          return N
            ? (0, K.z)(mixArray(y.values, A.values), _)
            : ((0, b.K)(
                !0,
                `Complex values '${h}' and '${g}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              mixImmediate(h, g));
        };
      var Y = _(23967),
        X = _(81662);
      let mixNumber = (h, g) => (_) => (0, N.C)(h, g, _);
      function interpolate(h, g, { clamp: _ = !0, ease: N, mixer: F } = {}) {
        let B = h.length;
        if (
          ((0, b.k)(
            B === g.length,
            "Both input and output ranges must be the same length",
          ),
          1 === B)
        )
          return () => g[0];
        h[0] > h[B - 1] && ((h = [...h].reverse()), (g = [...g].reverse()));
        let H = (function (h, g, _) {
            let b = [],
              A =
                _ ||
                (function (h) {
                  if ("number" == typeof h);
                  else if ("string" == typeof h)
                    return y.$.test(h) ? mixColor : mixComplex;
                  else if (Array.isArray(h)) return mixArray;
                  else if ("object" == typeof h) return mixObject;
                  return mixNumber;
                })(h[0]),
              N = h.length - 1;
            for (let _ = 0; _ < N; _++) {
              let y = A(h[_], h[_ + 1]);
              if (g) {
                let h = Array.isArray(g) ? g[_] || X.Z : g;
                y = (0, K.z)(h, y);
              }
              b.push(y);
            }
            return b;
          })(g, N, F),
          U = H.length,
          interpolator = (g) => {
            let _ = 0;
            if (U > 1) for (; _ < h.length - 2 && !(g < h[_ + 1]); _++);
            let b = (0, Y.Y)(h[_], h[_ + 1], g);
            return H[_](b);
          };
        return _
          ? (g) => interpolator((0, A.u)(h[0], h[B - 1], g))
          : interpolator;
      }
    },
    11741: function (h, g, _) {
      "use strict";
      _.d(g, {
        j: function () {
          return b;
        },
      });
      let b = "undefined" != typeof document;
    },
    51804: function (h, g, _) {
      "use strict";
      function isRefObject(h) {
        return (
          "object" == typeof h &&
          Object.prototype.hasOwnProperty.call(h, "current")
        );
      }
      _.d(g, {
        I: function () {
          return isRefObject;
        },
      });
    },
    30681: function (h, g, _) {
      "use strict";
      _.d(g, {
        W: function () {
          return isZeroValueString;
        },
      });
      let isZeroValueString = (h) => /^0[^.\s]+$/.test(h);
    },
    80022: function (h, g, _) {
      "use strict";
      _.d(g, {
        C: function () {
          return mix;
        },
      });
      let mix = (h, g, _) => -_ * h + _ * g + h;
    },
    81662: function (h, g, _) {
      "use strict";
      _.d(g, {
        Z: function () {
          return noop;
        },
      });
      let noop = (h) => h;
    },
    60599: function (h, g, _) {
      "use strict";
      _.d(g, {
        Y: function () {
          return defaultOffset;
        },
      });
      var b = _(26615);
      function defaultOffset(h) {
        let g = [0];
        return (0, b.c)(g, h.length - 1), g;
      }
    },
    26615: function (h, g, _) {
      "use strict";
      _.d(g, {
        c: function () {
          return fillOffset;
        },
      });
      var b = _(80022),
        y = _(23967);
      function fillOffset(h, g) {
        let _ = h[h.length - 1];
        for (let A = 1; A <= g; A++) {
          let N = (0, y.Y)(0, g, A);
          h.push((0, b.C)(_, 1, N));
        }
      }
    },
    83624: function (h, g, _) {
      "use strict";
      _.d(g, {
        z: function () {
          return pipe;
        },
      });
      let combineFunctions = (h, g) => (_) => g(h(_)),
        pipe = (...h) => h.reduce(combineFunctions);
    },
    23967: function (h, g, _) {
      "use strict";
      _.d(g, {
        Y: function () {
          return progress;
        },
      });
      let progress = (h, g, _) => {
        let b = g - h;
        return 0 === b ? 1 : (_ - h) / b;
      };
    },
    8715: function (h, g, _) {
      "use strict";
      _.d(g, {
        Y: function () {
          return resolveFinalValueInKeyframes;
        },
        p: function () {
          return isCustomValue;
        },
      });
      var b = _(48488);
      let isCustomValue = (h) =>
          !!(h && "object" == typeof h && h.mix && h.toValue),
        resolveFinalValueInKeyframes = (h) =>
          (0, b.C)(h) ? h[h.length - 1] || 0 : h;
    },
    21560: function (h, g, _) {
      "use strict";
      _.d(g, {
        L: function () {
          return SubscriptionManager;
        },
      });
      var b = _(10010);
      let SubscriptionManager = class SubscriptionManager {
        constructor() {
          this.subscriptions = [];
        }
        add(h) {
          return (
            (0, b.y4)(this.subscriptions, h),
            () => (0, b.cl)(this.subscriptions, h)
          );
        }
        notify(h, g, _) {
          let b = this.subscriptions.length;
          if (b) {
            if (1 === b) this.subscriptions[0](h, g, _);
            else
              for (let y = 0; y < b; y++) {
                let b = this.subscriptions[y];
                b && b(h, g, _);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      };
    },
    86917: function (h, g, _) {
      "use strict";
      _.d(g, {
        X: function () {
          return millisecondsToSeconds;
        },
        w: function () {
          return secondsToMilliseconds;
        },
      });
      let secondsToMilliseconds = (h) => 1e3 * h,
        millisecondsToSeconds = (h) => h / 1e3;
    },
    96681: function (h, g, _) {
      "use strict";
      _.d(g, {
        h: function () {
          return useConstant;
        },
      });
      var b = _(67294);
      function useConstant(h) {
        let g = (0, b.useRef)(null);
        return null === g.current && (g.current = h()), g.current;
      }
    },
    6337: function (h, g, _) {
      "use strict";
      _.d(g, {
        N: function () {
          return useForceUpdate;
        },
      });
      var b = _(67294),
        y = _(4454),
        A = _(2074);
      function useForceUpdate() {
        let h = (0, y.t)(),
          [g, _] = (0, b.useState)(0),
          N = (0, b.useCallback)(() => {
            h.current && _(g + 1);
          }, [g]),
          F = (0, b.useCallback)(() => A.Wi.postRender(N), [N]);
        return [F, g];
      }
    },
    4454: function (h, g, _) {
      "use strict";
      _.d(g, {
        t: function () {
          return useIsMounted;
        },
      });
      var b = _(67294),
        y = _(58868);
      function useIsMounted() {
        let h = (0, b.useRef)(!1);
        return (
          (0, y.L)(
            () => (
              (h.current = !0),
              () => {
                h.current = !1;
              }
            ),
            [],
          ),
          h
        );
      }
    },
    58868: function (h, g, _) {
      "use strict";
      _.d(g, {
        L: function () {
          return A;
        },
      });
      var b = _(67294),
        y = _(11741);
      let A = y.j ? b.useLayoutEffect : b.useEffect;
    },
    65411: function (h, g, _) {
      "use strict";
      _.d(g, {
        z: function () {
          return useUnmountEffect;
        },
      });
      var b = _(67294);
      function useUnmountEffect(h) {
        return (0, b.useEffect)(() => () => h(), []);
      }
    },
    3038: function (h, g, _) {
      "use strict";
      function velocityPerSecond(h, g) {
        return g ? h * (1e3 / g) : 0;
      }
      _.d(g, {
        R: function () {
          return velocityPerSecond;
        },
      });
    },
    33234: function (h, g, _) {
      "use strict";
      _.d(g, {
        B: function () {
          return motionValue;
        },
      });
      var b = _(21560),
        y = _(3038),
        A = _(2074);
      let isFloat = (h) => !isNaN(parseFloat(h));
      let MotionValue = class MotionValue {
        constructor(h, g = {}) {
          (this.version = "10.13.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (h, g = !0) => {
              (this.prev = this.current), (this.current = h);
              let { delta: _, timestamp: b } = A.frameData;
              this.lastUpdated !== b &&
                ((this.timeDelta = _),
                (this.lastUpdated = b),
                A.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                g &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              A.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: h }) => {
              h !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = h),
            (this.canTrackVelocity = isFloat(this.current)),
            (this.owner = g.owner);
        }
        onChange(h) {
          return this.on("change", h);
        }
        on(h, g) {
          this.events[h] || (this.events[h] = new b.L());
          let _ = this.events[h].add(g);
          return "change" === h
            ? () => {
                _(),
                  A.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : _;
        }
        clearListeners() {
          for (let h in this.events) this.events[h].clear();
        }
        attach(h, g) {
          (this.passiveEffect = h), (this.stopPassiveEffect = g);
        }
        set(h, g = !0) {
          g && this.passiveEffect
            ? this.passiveEffect(h, this.updateAndNotify)
            : this.updateAndNotify(h, g);
        }
        setWithVelocity(h, g, _) {
          this.set(g), (this.prev = h), (this.timeDelta = _);
        }
        jump(h) {
          this.updateAndNotify(h),
            (this.prev = h),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, y.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta,
              )
            : 0;
        }
        start(h) {
          return (
            this.stop(),
            new Promise((g) => {
              (this.hasAnimated = !0),
                (this.animation = h(g)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      };
      function motionValue(h, g) {
        return new MotionValue(h, g);
      }
    },
    26382: function (h, g, _) {
      "use strict";
      _.d(g, {
        $: function () {
          return A;
        },
      });
      var b = _(40819),
        y = _(98834);
      let A = {
        test: (0, y.i)("#"),
        parse: function (h) {
          let g = "",
            _ = "",
            b = "",
            y = "";
          return (
            h.length > 5
              ? ((g = h.substring(1, 3)),
                (_ = h.substring(3, 5)),
                (b = h.substring(5, 7)),
                (y = h.substring(7, 9)))
              : ((g = h.substring(1, 2)),
                (_ = h.substring(2, 3)),
                (b = h.substring(3, 4)),
                (y = h.substring(4, 5)),
                (g += g),
                (_ += _),
                (b += b),
                (y += y)),
            {
              red: parseInt(g, 16),
              green: parseInt(_, 16),
              blue: parseInt(b, 16),
              alpha: y ? parseInt(y, 16) / 255 : 1,
            }
          );
        },
        transform: b.m.transform,
      };
    },
    93184: function (h, g, _) {
      "use strict";
      _.d(g, {
        J: function () {
          return F;
        },
      });
      var b = _(61649),
        y = _(96190),
        A = _(36430),
        N = _(98834);
      let F = {
        test: (0, N.i)("hsl", "hue"),
        parse: (0, N.d)("hue", "saturation", "lightness"),
        transform: ({ hue: h, saturation: g, lightness: _, alpha: N = 1 }) =>
          "hsla(" +
          Math.round(h) +
          ", " +
          y.aQ.transform((0, A.Nw)(g)) +
          ", " +
          y.aQ.transform((0, A.Nw)(_)) +
          ", " +
          (0, A.Nw)(b.Fq.transform(N)) +
          ")",
      };
    },
    85385: function (h, g, _) {
      "use strict";
      _.d(g, {
        $: function () {
          return F;
        },
      });
      var b = _(36430),
        y = _(26382),
        A = _(93184),
        N = _(40819);
      let F = {
        test: (h) => N.m.test(h) || y.$.test(h) || A.J.test(h),
        parse: (h) =>
          N.m.test(h)
            ? N.m.parse(h)
            : A.J.test(h)
              ? A.J.parse(h)
              : y.$.parse(h),
        transform: (h) =>
          (0, b.HD)(h)
            ? h
            : h.hasOwnProperty("red")
              ? N.m.transform(h)
              : A.J.transform(h),
      };
    },
    40819: function (h, g, _) {
      "use strict";
      _.d(g, {
        m: function () {
          return B;
        },
      });
      var b = _(24169),
        y = _(61649),
        A = _(36430),
        N = _(98834);
      let clampRgbUnit = (h) => (0, b.u)(0, 255, h),
        F = { ...y.Rx, transform: (h) => Math.round(clampRgbUnit(h)) },
        B = {
          test: (0, N.i)("rgb", "red"),
          parse: (0, N.d)("red", "green", "blue"),
          transform: ({ red: h, green: g, blue: _, alpha: b = 1 }) =>
            "rgba(" +
            F.transform(h) +
            ", " +
            F.transform(g) +
            ", " +
            F.transform(_) +
            ", " +
            (0, A.Nw)(y.Fq.transform(b)) +
            ")",
        };
    },
    98834: function (h, g, _) {
      "use strict";
      _.d(g, {
        d: function () {
          return splitColor;
        },
        i: function () {
          return isColorString;
        },
      });
      var b = _(36430);
      let isColorString = (h, g) => (_) =>
          !!(
            ((0, b.HD)(_) && b.mj.test(_) && _.startsWith(h)) ||
            (g && Object.prototype.hasOwnProperty.call(_, g))
          ),
        splitColor = (h, g, _) => (y) => {
          if (!(0, b.HD)(y)) return y;
          let [A, N, F, B] = y.match(b.KP);
          return {
            [h]: parseFloat(A),
            [g]: parseFloat(N),
            [_]: parseFloat(F),
            alpha: void 0 !== B ? parseFloat(B) : 1,
          };
        };
    },
    97197: function (h, g, _) {
      "use strict";
      _.d(g, {
        h: function () {
          return F;
        },
      });
      var b = _(51550),
        y = _(36430);
      let A = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function applyDefaultFilter(h) {
        let [g, _] = h.slice(0, -1).split("(");
        if ("drop-shadow" === g) return h;
        let [b] = _.match(y.KP) || [];
        if (!b) return h;
        let N = _.replace(b, ""),
          F = A.has(g) ? 1 : 0;
        return b !== _ && (F *= 100), g + "(" + F + N + ")";
      }
      let N = /([a-z-]*)\(.*?\)/g,
        F = {
          ...b.P,
          getAnimatableNone: (h) => {
            let g = h.match(N);
            return g ? g.map(applyDefaultFilter).join(" ") : h;
          },
        };
    },
    51550: function (h, g, _) {
      "use strict";
      _.d(g, {
        P: function () {
          return K;
        },
        V: function () {
          return analyseComplexValue;
        },
      });
      var b = _(57630),
        y = _(81662),
        A = _(85385),
        N = _(61649),
        F = _(36430);
      let B = { regex: b.Xp, countKey: "Vars", token: "${v}", parse: y.Z },
        H = {
          regex: F.dA,
          countKey: "Colors",
          token: "${c}",
          parse: A.$.parse,
        },
        U = {
          regex: F.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: N.Rx.parse,
        };
      function tokenise(h, { regex: g, countKey: _, token: b, parse: y }) {
        let A = h.tokenised.match(g);
        A &&
          ((h["num" + _] = A.length),
          (h.tokenised = h.tokenised.replace(g, b)),
          h.values.push(...A.map(y)));
      }
      function analyseComplexValue(h) {
        let g = h.toString(),
          _ = {
            value: g,
            tokenised: g,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return (
          _.value.includes("var(--") && tokenise(_, B),
          tokenise(_, H),
          tokenise(_, U),
          _
        );
      }
      function parseComplexValue(h) {
        return analyseComplexValue(h).values;
      }
      function createTransformer(h) {
        let {
            values: g,
            numColors: _,
            numVars: b,
            tokenised: y,
          } = analyseComplexValue(h),
          N = g.length;
        return (h) => {
          let g = y;
          for (let y = 0; y < N; y++)
            g =
              y < b
                ? g.replace(B.token, h[y])
                : y < b + _
                  ? g.replace(H.token, A.$.transform(h[y]))
                  : g.replace(U.token, (0, F.Nw)(h[y]));
          return g;
        };
      }
      let convertNumbersToZero = (h) => ("number" == typeof h ? 0 : h),
        K = {
          test: function (h) {
            var g, _;
            return (
              isNaN(h) &&
              (0, F.HD)(h) &&
              ((null === (g = h.match(F.KP)) || void 0 === g
                ? void 0
                : g.length) || 0) +
                ((null === (_ = h.match(F.dA)) || void 0 === _
                  ? void 0
                  : _.length) || 0) >
                0
            );
          },
          parse: parseComplexValue,
          createTransformer,
          getAnimatableNone: function (h) {
            let g = parseComplexValue(h),
              _ = createTransformer(h);
            return _(g.map(convertNumbersToZero));
          },
        };
    },
    61649: function (h, g, _) {
      "use strict";
      _.d(g, {
        Fq: function () {
          return A;
        },
        Rx: function () {
          return y;
        },
        bA: function () {
          return N;
        },
      });
      var b = _(24169);
      let y = {
          test: (h) => "number" == typeof h,
          parse: parseFloat,
          transform: (h) => h,
        },
        A = { ...y, transform: (h) => (0, b.u)(0, 1, h) },
        N = { ...y, default: 1 };
    },
    96190: function (h, g, _) {
      "use strict";
      _.d(g, {
        $C: function () {
          return H;
        },
        RW: function () {
          return y;
        },
        aQ: function () {
          return A;
        },
        px: function () {
          return N;
        },
        vh: function () {
          return F;
        },
        vw: function () {
          return B;
        },
      });
      var b = _(36430);
      let createUnitType = (h) => ({
          test: (g) =>
            (0, b.HD)(g) && g.endsWith(h) && 1 === g.split(" ").length,
          parse: parseFloat,
          transform: (g) => `${g}${h}`,
        }),
        y = createUnitType("deg"),
        A = createUnitType("%"),
        N = createUnitType("px"),
        F = createUnitType("vh"),
        B = createUnitType("vw"),
        H = {
          ...A,
          parse: (h) => A.parse(h) / 100,
          transform: (h) => A.transform(100 * h),
        };
    },
    36430: function (h, g, _) {
      "use strict";
      _.d(g, {
        HD: function () {
          return isString;
        },
        KP: function () {
          return b;
        },
        Nw: function () {
          return sanitize;
        },
        dA: function () {
          return y;
        },
        mj: function () {
          return A;
        },
      });
      let sanitize = (h) => Math.round(1e5 * h) / 1e5,
        b = /(-)?([\d]*\.?[\d])+/g,
        y =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        A =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function isString(h) {
        return "string" == typeof h;
      }
    },
    12490: function (h, g, _) {
      "use strict";
      _.d(g, {
        L: function () {
          return isWillChangeMotionValue;
        },
      });
      var b = _(40406);
      function isWillChangeMotionValue(h) {
        return !!((0, b.i)(h) && h.add);
      }
    },
    40406: function (h, g, _) {
      "use strict";
      _.d(g, {
        i: function () {
          return isMotionValue;
        },
      });
      let isMotionValue = (h) => !!(h && h.getVelocity);
    },
    31955: function (h, g, _) {
      "use strict";
      /*! js-cookie v3.0.5 | MIT */ function assign(h) {
        for (var g = 1; g < arguments.length; g++) {
          var _ = arguments[g];
          for (var b in _) h[b] = _[b];
        }
        return h;
      }
      _.d(g, {
        Z: function () {
          return b;
        },
      });
      var b = (function init(h, g) {
        function set(_, b, y) {
          if ("undefined" != typeof document) {
            "number" == typeof (y = assign({}, g, y)).expires &&
              (y.expires = new Date(Date.now() + 864e5 * y.expires)),
              y.expires && (y.expires = y.expires.toUTCString()),
              (_ = encodeURIComponent(_)
                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                .replace(/[()]/g, escape));
            var A = "";
            for (var N in y)
              y[N] &&
                ((A += "; " + N),
                !0 !== y[N] && (A += "=" + y[N].split(";")[0]));
            return (document.cookie = _ + "=" + h.write(b, _) + A);
          }
        }
        return Object.create(
          {
            set,
            get: function (g) {
              if ("undefined" != typeof document && (!arguments.length || g)) {
                for (
                  var _ = document.cookie ? document.cookie.split("; ") : [],
                    b = {},
                    y = 0;
                  y < _.length;
                  y++
                ) {
                  var A = _[y].split("="),
                    N = A.slice(1).join("=");
                  try {
                    var F = decodeURIComponent(A[0]);
                    if (((b[F] = h.read(N, F)), g === F)) break;
                  } catch (h) {}
                }
                return g ? b[g] : b;
              }
            },
            remove: function (h, g) {
              set(h, "", assign({}, g, { expires: -1 }));
            },
            withAttributes: function (h) {
              return init(this.converter, assign({}, this.attributes, h));
            },
            withConverter: function (h) {
              return init(assign({}, this.converter, h), this.attributes);
            },
          },
          {
            attributes: { value: Object.freeze(g) },
            converter: { value: Object.freeze(h) },
          },
        );
      })(
        {
          read: function (h) {
            return (
              '"' === h[0] && (h = h.slice(1, -1)),
              h.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
            );
          },
          write: function (h) {
            return encodeURIComponent(h).replace(
              /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
              decodeURIComponent,
            );
          },
        },
        { path: "/" },
      );
    },
  },
  function (h) {
    var __webpack_exec__ = function (g) {
      return h((h.s = g));
    };
    h.O(0, [9774, 179], function () {
      return __webpack_exec__(91118), __webpack_exec__(59974);
    }),
      (_N_E = h.O());
  },
]);
