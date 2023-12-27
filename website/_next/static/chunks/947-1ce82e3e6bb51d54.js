(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [947],
  {
    81548: function (e, t, r) {
      "use strict";
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
      }
      function _construct(e, t, r) {
        return (_construct = !(function () {
          if (
            "undefined" == typeof Reflect ||
            !Reflect.construct ||
            Reflect.construct.sham
          )
            return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })()
          ? function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var i = new (Function.bind.apply(e, n))();
              return r && _setPrototypeOf(i, r.prototype), i;
            }
          : Reflect.construct.bind()).apply(null, arguments);
      }
      function _wrapNativeSuper(e) {
        var t = "function" == typeof Map ? new Map() : void 0;
        return (_wrapNativeSuper = function (e) {
          if (
            null === e ||
            -1 === Function.toString.call(e).indexOf("[native code]")
          )
            return e;
          if ("function" != typeof e)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, Wrapper);
          }
          function Wrapper() {
            return _construct(e, arguments, _getPrototypeOf(this).constructor);
          }
          return (
            (Wrapper.prototype = Object.create(e.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            _setPrototypeOf(Wrapper, e)
          );
        })(e);
      }
      r.d(t, {
        hn: function () {
          return getFile;
        },
      });
      var n = (function (e) {
        function UnresolvableError(t, r) {
          var n;
          return (
            void 0 === r && (r = "Failed to resolve asset ID from source"),
            ((n = e.call(this, r) || this).unresolvable = !0),
            (n.input = t),
            n
          );
        }
        return (
          (UnresolvableError.prototype = Object.create(e.prototype)),
          (UnresolvableError.prototype.constructor = UnresolvableError),
          _setPrototypeOf(UnresolvableError, e),
          UnresolvableError
        );
      })(_wrapNativeSuper(Error));
      function getForgivingResolver(e) {
        return function () {
          try {
            return e.apply(void 0, arguments);
          } catch (e) {
            if (e.unresolvable && "input" in e) return;
            throw e;
          }
        };
      }
      var i = "https://cdn.sanity.io",
        o = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+\.[a-z0-9]+$/,
        s = /^file-([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+$/,
        a = /^([a-zA-Z0-9_]{24,40}|[a-f0-9]{40})-\d+x\d+\.[a-z0-9]+$/,
        c = /^(images|files)\/([a-z0-9]+)\/([a-z0-9][-\w]*)\//,
        u =
          /^(?:image-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-\d+x\d+-[a-z0-9]+|file-(?:[a-zA-Z0-9_]{24,40}|[a-f0-9]{40})+-[a-z0-9]+)$/;
      function isReference(e) {
        return isObject(e) && "string" == typeof e._ref;
      }
      function isAssetPathStub(e) {
        return isObject(e) && "string" == typeof e.path;
      }
      function isAssetUrlStub(e) {
        return isObject(e) && "string" == typeof e.url;
      }
      function isAssetObjectStub(e) {
        return isObject(e) && e.asset && "object" == typeof e.asset;
      }
      function isObject(e) {
        return null !== e && !Array.isArray(e) && "object" == typeof e;
      }
      function buildFilePath(e, t) {
        var r = (null == t ? void 0 : t.projectId) || e.projectId,
          n = (null == t ? void 0 : t.dataset) || e.dataset;
        if (!r || !n)
          throw Error(
            "Project details (projectId and dataset) required to resolve path for file",
          );
        var i = "originalFilename" in e ? e.originalFilename : void 0;
        return (
          "files/" +
          r +
          "/" +
          n +
          "/" +
          e.assetId +
          "." +
          e.extension +
          (function (e, t, r) {
            var n = t || e;
            return (null == r ? void 0 : r.useVanityName) !== !1 && n
              ? "/" + n
              : "";
          })(i, e.vanityFilename, t)
        );
      }
      function getUrlPath(e) {
        if (c.test(e)) return e;
        if (!e.startsWith(i + "/"))
          throw new n('Failed to resolve path from URL "' + e + '"');
        var t = e.indexOf("?"),
          r = -1 === t ? void 0 : t;
        return e.slice(i.length + 1, r);
      }
      var l = getForgivingResolver(getUrlPath);
      function getFile(e, t) {
        var r,
          l,
          d,
          h,
          f,
          v,
          b,
          _,
          g = t || p(e);
        return {
          asset:
            ((r = e),
            (l = _extends({}, g || getProject(r), { useVanityName: !1 })),
            (d = (function (e) {
              var t = isAssetObjectStub(e) ? e.asset : e,
                r = "";
              if (
                ("string" == typeof t
                  ? (r = (function (e) {
                      if (u.test(e)) return e;
                      if (
                        0 === e.indexOf(i + "/images") ||
                        0 === e.indexOf(i + "/files")
                      )
                        return idFromUrl(e);
                      if (c.test(e)) return idFromUrl(i + "/" + e);
                      if (o.test(e)) return idFromUrl(i + "/files/a/b/" + e);
                      if (a.test(e)) return idFromUrl(i + "/images/a/b/" + e);
                      throw new n(e);
                    })(t))
                  : isReference(t)
                    ? (r = t._ref)
                    : isObject(t) && "string" == typeof t._id
                      ? (r = t._id)
                      : isAssetPathStub(t)
                        ? (r = idFromUrl(i + "/" + t.path))
                        : isAssetUrlStub(t) && (r = idFromUrl(t.url)),
                !(r && u.test(r)))
              )
                throw new n(e);
              return r;
            })(r)),
            (h = r.asset || r),
            (v = (f = (function (e) {
              if (!s.test(e))
                throw Error(
                  "Malformed file asset ID '" +
                    e +
                    '\'. Expected an id like "file-027401f31c3ac1e6d78c5d539ccd1beff72b9b11-pdf"',
                );
              var t = e.split("-");
              return { type: "file", assetId: t[1], extension: t[2] };
            })(d)).assetId),
            (b = f.extension),
            (_ = _extends(
              {},
              isObject(r) && "sanity.fileAsset" === r._type ? r : {},
              {
                _id: d,
                _type: "sanity.fileAsset",
                assetId: v,
                extension: b,
                metadata: h.metadata || {},
                url: "",
                path: "",
              },
            )),
            _extends({}, _, {
              path: buildFilePath(_, l),
              url: i + "/" + buildFilePath(_, l),
            })),
        };
      }
      function idFromUrl(e) {
        var t = getUrlPath(e).split("/"),
          r = t[0],
          n = t[3];
        return r.replace(/s$/, "") + "-" + n.replace(/\./g, "-");
      }
      function getProject(e) {
        var t = (function tryGetAssetPath(e) {
          if (isAssetObjectStub(e)) return tryGetAssetPath(e.asset);
          if (!isReference(e))
            return "string" == typeof e
              ? c.test(l(e) || "")
                ? getUrlPath(e)
                : void 0
              : isAssetPathStub(e)
                ? e.path
                : isAssetUrlStub(e)
                  ? getUrlPath(e.url)
                  : void 0;
        })(e);
        if (!t)
          throw new n(
            e,
            "Failed to resolve project ID and dataset from source",
          );
        var r = t.match(c) || [],
          i = r[2],
          o = r[3];
        if (!i || !o)
          throw new n(
            e,
            "Failed to resolve project ID and dataset from source",
          );
        return { projectId: i, dataset: o };
      }
      var p = getForgivingResolver(getProject);
    },
    6803: function (e) {
      e.exports = (function () {
        function _extends() {
          return (_extends =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
        }
        function _arrayLikeToArray(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
          return n;
        }
        var e = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
        function urlToId(e) {
          return ("image-" + e.split("/").slice(-1)[0]).replace(
            /\.([a-z]+)$/,
            "-$1",
          );
        }
        var t = [
            ["width", "w"],
            ["height", "h"],
            ["format", "fm"],
            ["download", "dl"],
            ["blur", "blur"],
            ["sharpen", "sharp"],
            ["invert", "invert"],
            ["orientation", "or"],
            ["minHeight", "min-h"],
            ["maxHeight", "max-h"],
            ["minWidth", "min-w"],
            ["maxWidth", "max-w"],
            ["quality", "q"],
            ["fit", "fit"],
            ["crop", "crop"],
            ["saturation", "sat"],
            ["auto", "auto"],
            ["dpr", "dpr"],
            ["pad", "pad"],
          ],
          r = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
          n = [
            "top",
            "bottom",
            "left",
            "right",
            "center",
            "focalpoint",
            "entropy",
          ],
          i = ["format"],
          o = (function () {
            function ImageUrlBuilder(e, t) {
              (this.options = void 0),
                (this.options = e
                  ? _extends({}, e.options || {}, t || {})
                  : _extends({}, t || {}));
            }
            var o = ImageUrlBuilder.prototype;
            return (
              (o.withOptions = function (e) {
                var r = e.baseUrl || this.options.baseUrl,
                  n = { baseUrl: r };
                for (var i in e)
                  e.hasOwnProperty(i) &&
                    (n[
                      (function (e) {
                        for (
                          var r,
                            n = (function (e, t) {
                              var r =
                                ("undefined" != typeof Symbol &&
                                  e[Symbol.iterator]) ||
                                e["@@iterator"];
                              if (r) return (r = r.call(e)).next.bind(r);
                              if (
                                Array.isArray(e) ||
                                (r = (function (e, t) {
                                  if (e) {
                                    if ("string" == typeof e)
                                      return _arrayLikeToArray(e, t);
                                    var r = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    if (
                                      ("Object" === r &&
                                        e.constructor &&
                                        (r = e.constructor.name),
                                      "Map" === r || "Set" === r)
                                    )
                                      return Array.from(e);
                                    if (
                                      "Arguments" === r ||
                                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                        r,
                                      )
                                    )
                                      return _arrayLikeToArray(e, t);
                                  }
                                })(e))
                              ) {
                                r && (e = r);
                                var n = 0;
                                return function () {
                                  return n >= e.length
                                    ? { done: !0 }
                                    : { done: !1, value: e[n++] };
                                };
                              }
                              throw TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                              );
                            })(t);
                          !(r = n()).done;

                        ) {
                          var i = r.value,
                            o = i[0],
                            s = i[1];
                          if (e === o || e === s) return o;
                        }
                        return e;
                      })(i)
                    ] = e[i]);
                return new ImageUrlBuilder(this, _extends({ baseUrl: r }, n));
              }),
              (o.image = function (e) {
                return this.withOptions({ source: e });
              }),
              (o.dataset = function (e) {
                return this.withOptions({ dataset: e });
              }),
              (o.projectId = function (e) {
                return this.withOptions({ projectId: e });
              }),
              (o.bg = function (e) {
                return this.withOptions({ bg: e });
              }),
              (o.dpr = function (e) {
                return this.withOptions(e && 1 !== e ? { dpr: e } : {});
              }),
              (o.width = function (e) {
                return this.withOptions({ width: e });
              }),
              (o.height = function (e) {
                return this.withOptions({ height: e });
              }),
              (o.focalPoint = function (e, t) {
                return this.withOptions({ focalPoint: { x: e, y: t } });
              }),
              (o.maxWidth = function (e) {
                return this.withOptions({ maxWidth: e });
              }),
              (o.minWidth = function (e) {
                return this.withOptions({ minWidth: e });
              }),
              (o.maxHeight = function (e) {
                return this.withOptions({ maxHeight: e });
              }),
              (o.minHeight = function (e) {
                return this.withOptions({ minHeight: e });
              }),
              (o.size = function (e, t) {
                return this.withOptions({ width: e, height: t });
              }),
              (o.blur = function (e) {
                return this.withOptions({ blur: e });
              }),
              (o.sharpen = function (e) {
                return this.withOptions({ sharpen: e });
              }),
              (o.rect = function (e, t, r, n) {
                return this.withOptions({
                  rect: { left: e, top: t, width: r, height: n },
                });
              }),
              (o.format = function (e) {
                return this.withOptions({ format: e });
              }),
              (o.invert = function (e) {
                return this.withOptions({ invert: e });
              }),
              (o.orientation = function (e) {
                return this.withOptions({ orientation: e });
              }),
              (o.quality = function (e) {
                return this.withOptions({ quality: e });
              }),
              (o.forceDownload = function (e) {
                return this.withOptions({ download: e });
              }),
              (o.flipHorizontal = function () {
                return this.withOptions({ flipHorizontal: !0 });
              }),
              (o.flipVertical = function () {
                return this.withOptions({ flipVertical: !0 });
              }),
              (o.ignoreImageParams = function () {
                return this.withOptions({ ignoreImageParams: !0 });
              }),
              (o.fit = function (e) {
                if (-1 === r.indexOf(e))
                  throw Error('Invalid fit mode "' + e + '"');
                return this.withOptions({ fit: e });
              }),
              (o.crop = function (e) {
                if (-1 === n.indexOf(e))
                  throw Error('Invalid crop mode "' + e + '"');
                return this.withOptions({ crop: e });
              }),
              (o.saturation = function (e) {
                return this.withOptions({ saturation: e });
              }),
              (o.auto = function (e) {
                if (-1 === i.indexOf(e))
                  throw Error('Invalid auto mode "' + e + '"');
                return this.withOptions({ auto: e });
              }),
              (o.pad = function (e) {
                return this.withOptions({ pad: e });
              }),
              (o.url = function () {
                return (function (r) {
                  var n = _extends({}, r || {}),
                    i = n.source;
                  delete n.source;
                  var o = (function (e) {
                    var t;
                    if (!e) return null;
                    if ("string" == typeof e && /^https?:\/\//.test("" + e))
                      t = { asset: { _ref: urlToId(e) } };
                    else if ("string" == typeof e) t = { asset: { _ref: e } };
                    else if (e && "string" == typeof e._ref) t = { asset: e };
                    else if (e && "string" == typeof e._id)
                      t = { asset: { _ref: e._id || "" } };
                    else if (e && e.asset && "string" == typeof e.asset.url)
                      t = { asset: { _ref: urlToId(e.asset.url) } };
                    else {
                      if ("object" != typeof e.asset) return null;
                      t = _extends({}, e);
                    }
                    return (
                      e.crop && (t.crop = e.crop),
                      e.hotspot && (t.hotspot = e.hotspot),
                      (function (e) {
                        if (e.crop && e.hotspot) return e;
                        var t = _extends({}, e);
                        return (
                          t.crop ||
                            (t.crop = { left: 0, top: 0, bottom: 0, right: 0 }),
                          t.hotspot ||
                            (t.hotspot = {
                              x: 0.5,
                              y: 0.5,
                              height: 1,
                              width: 1,
                            }),
                          t
                        );
                      })(t)
                    );
                  })(i);
                  if (!o)
                    throw Error(
                      "Unable to resolve image URL from source (" +
                        JSON.stringify(i) +
                        ")",
                    );
                  var s = (function (t) {
                      var r = t.split("-"),
                        n = r[1],
                        i = r[2],
                        o = r[3];
                      if (!n || !i || !o)
                        throw Error(
                          "Malformed asset _ref '" +
                            t +
                            "'. Expected an id like \"" +
                            e +
                            '".',
                        );
                      var s = i.split("x"),
                        a = s[0],
                        c = s[1],
                        u = +a,
                        l = +c;
                      if (!(isFinite(u) && isFinite(l)))
                        throw Error(
                          "Malformed asset _ref '" +
                            t +
                            "'. Expected an id like \"" +
                            e +
                            '".',
                        );
                      return { id: n, width: u, height: l, format: o };
                    })(o.asset._ref || o.asset._id || ""),
                    a = Math.round(o.crop.left * s.width),
                    c = Math.round(o.crop.top * s.height),
                    u = {
                      left: a,
                      top: c,
                      width: Math.round(s.width - o.crop.right * s.width - a),
                      height: Math.round(
                        s.height - o.crop.bottom * s.height - c,
                      ),
                    },
                    l = (o.hotspot.height * s.height) / 2,
                    p = (o.hotspot.width * s.width) / 2,
                    d = o.hotspot.x * s.width,
                    h = o.hotspot.y * s.height;
                  return (
                    n.rect ||
                      n.focalPoint ||
                      n.ignoreImageParams ||
                      n.crop ||
                      (n = _extends(
                        {},
                        n,
                        (function (e, t) {
                          var r,
                            n = t.width,
                            i = t.height;
                          if (!(n && i))
                            return { width: n, height: i, rect: e.crop };
                          var o = e.crop,
                            s = e.hotspot,
                            a = n / i;
                          if (o.width / o.height > a) {
                            var c = Math.round(o.height),
                              u = Math.round(c * a),
                              l = Math.max(0, Math.round(o.top)),
                              p = Math.max(
                                0,
                                Math.round(
                                  Math.round((s.right - s.left) / 2 + s.left) -
                                    u / 2,
                                ),
                              );
                            p < o.left
                              ? (p = o.left)
                              : p + u > o.left + o.width &&
                                (p = o.left + o.width - u),
                              (r = { left: p, top: l, width: u, height: c });
                          } else {
                            var d = o.width,
                              h = Math.round(d / a),
                              f = Math.max(0, Math.round(o.left)),
                              v = Math.max(
                                0,
                                Math.round(
                                  Math.round((s.bottom - s.top) / 2 + s.top) -
                                    h / 2,
                                ),
                              );
                            v < o.top
                              ? (v = o.top)
                              : v + h > o.top + o.height &&
                                (v = o.top + o.height - h),
                              (r = { left: f, top: v, width: d, height: h });
                          }
                          return { width: n, height: i, rect: r };
                        })(
                          {
                            crop: u,
                            hotspot: {
                              left: d - p,
                              top: h - l,
                              right: d + p,
                              bottom: h + l,
                            },
                          },
                          n,
                        ),
                      )),
                    (function (e) {
                      var r = (e.baseUrl || "https://cdn.sanity.io").replace(
                          /\/+$/,
                          "",
                        ),
                        n =
                          e.asset.id +
                          "-" +
                          e.asset.width +
                          "x" +
                          e.asset.height +
                          "." +
                          e.asset.format,
                        i =
                          r +
                          "/images/" +
                          e.projectId +
                          "/" +
                          e.dataset +
                          "/" +
                          n,
                        o = [];
                      if (e.rect) {
                        var s = e.rect,
                          a = s.left,
                          c = s.top,
                          u = s.width,
                          l = s.height;
                        (0 !== a ||
                          0 !== c ||
                          l !== e.asset.height ||
                          u !== e.asset.width) &&
                          o.push("rect=" + a + "," + c + "," + u + "," + l);
                      }
                      e.bg && o.push("bg=" + e.bg),
                        e.focalPoint &&
                          (o.push("fp-x=" + e.focalPoint.x),
                          o.push("fp-y=" + e.focalPoint.y));
                      var p = [e.flipHorizontal && "h", e.flipVertical && "v"]
                        .filter(Boolean)
                        .join("");
                      return (p && o.push("flip=" + p),
                      t.forEach(function (t) {
                        var r = t[0],
                          n = t[1];
                        void 0 !== e[r]
                          ? o.push(n + "=" + encodeURIComponent(e[r]))
                          : void 0 !== e[n] &&
                            o.push(n + "=" + encodeURIComponent(e[n]));
                      }),
                      0 === o.length)
                        ? i
                        : i + "?" + o.join("&");
                    })(_extends({}, n, { asset: s }))
                  );
                })(this.options);
              }),
              (o.toString = function () {
                return this.url();
              }),
              ImageUrlBuilder
            );
          })();
        return function (e) {
          if (e && "config" in e && "function" == typeof e.config) {
            var t = e.config(),
              r = t.apiHost,
              n = t.projectId,
              i = t.dataset;
            return new o(null, {
              baseUrl: (r || "https://api.sanity.io").replace(
                /^https:\/\/api\./,
                "https://cdn.",
              ),
              projectId: n,
              dataset: i,
            });
          }
          if (e && "clientConfig" in e && "object" == typeof e.clientConfig) {
            var s = e.clientConfig,
              a = s.apiHost,
              c = s.projectId,
              u = s.dataset;
            return new o(null, {
              baseUrl: (a || "https://api.sanity.io").replace(
                /^https:\/\/api\./,
                "https://cdn.",
              ),
              projectId: c,
              dataset: u,
            });
          }
          return new o(null, e);
        };
      })();
    },
    11227: function (e, t, r) {
      let n;
      var i = r(34155);
      (t.formatArgs = function (t) {
        if (
          ((t[0] =
            (this.useColors ? "%c" : "") +
            this.namespace +
            (this.useColors ? " %c" : " ") +
            t[0] +
            (this.useColors ? "%c " : " ") +
            "+" +
            e.exports.humanize(this.diff)),
          !this.useColors)
        )
          return;
        let r = "color: " + this.color;
        t.splice(1, 0, r, "color: inherit");
        let n = 0,
          i = 0;
        t[0].replace(/%[a-zA-Z%]/g, (e) => {
          "%%" !== e && (n++, "%c" === e && (i = n));
        }),
          t.splice(i, 0, r);
      }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem("debug");
          } catch (e) {}
          return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e;
        }),
        (t.useColors = function () {
          return (
            ("undefined" != typeof window &&
              !!window.process &&
              ("renderer" === window.process.type ||
                !!window.process.__nwjs)) ||
            (!(
              "undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
            ) &&
              (("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
                ("undefined" != typeof window &&
                  window.console &&
                  (window.console.firebug ||
                    (window.console.exception && window.console.table))) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                  parseInt(RegExp.$1, 10) >= 31) ||
                ("undefined" != typeof navigator &&
                  navigator.userAgent &&
                  navigator.userAgent
                    .toLowerCase()
                    .match(/applewebkit\/(\d+)/))))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.destroy =
          ((n = !1),
          () => {
            n ||
              ((n = !0),
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
              ));
          })),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (t.log = console.debug || console.log || (() => {})),
        (e.exports = r(82447)(t));
      let { formatters: o } = e.exports;
      o.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    },
    82447: function (e, t, r) {
      e.exports = function (e) {
        function createDebug(e) {
          let t, r, n;
          let i = null;
          function debug(...e) {
            if (!debug.enabled) return;
            let r = Number(new Date()),
              n = r - (t || r);
            (debug.diff = n),
              (debug.prev = t),
              (debug.curr = r),
              (t = r),
              (e[0] = createDebug.coerce(e[0])),
              "string" != typeof e[0] && e.unshift("%O");
            let i = 0;
            (e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, r) => {
              if ("%%" === t) return "%";
              i++;
              let n = createDebug.formatters[r];
              if ("function" == typeof n) {
                let r = e[i];
                (t = n.call(debug, r)), e.splice(i, 1), i--;
              }
              return t;
            })),
              createDebug.formatArgs.call(debug, e);
            let o = debug.log || createDebug.log;
            o.apply(debug, e);
          }
          return (
            (debug.namespace = e),
            (debug.useColors = createDebug.useColors()),
            (debug.color = createDebug.selectColor(e)),
            (debug.extend = extend),
            (debug.destroy = createDebug.destroy),
            Object.defineProperty(debug, "enabled", {
              enumerable: !0,
              configurable: !1,
              get: () =>
                null !== i
                  ? i
                  : (r !== createDebug.namespaces &&
                      ((r = createDebug.namespaces),
                      (n = createDebug.enabled(e))),
                    n),
              set: (e) => {
                i = e;
              },
            }),
            "function" == typeof createDebug.init && createDebug.init(debug),
            debug
          );
        }
        function extend(e, t) {
          let r = createDebug(this.namespace + (void 0 === t ? ":" : t) + e);
          return (r.log = this.log), r;
        }
        function toNamespace(e) {
          return e
            .toString()
            .substring(2, e.toString().length - 2)
            .replace(/\.\*\?$/, "*");
        }
        return (
          (createDebug.debug = createDebug),
          (createDebug.default = createDebug),
          (createDebug.coerce = function (e) {
            return e instanceof Error ? e.stack || e.message : e;
          }),
          (createDebug.disable = function () {
            let e = [
              ...createDebug.names.map(toNamespace),
              ...createDebug.skips.map(toNamespace).map((e) => "-" + e),
            ].join(",");
            return createDebug.enable(""), e;
          }),
          (createDebug.enable = function (e) {
            let t;
            createDebug.save(e),
              (createDebug.namespaces = e),
              (createDebug.names = []),
              (createDebug.skips = []);
            let r = ("string" == typeof e ? e : "").split(/[\s,]+/),
              n = r.length;
            for (t = 0; t < n; t++)
              r[t] &&
                ("-" === (e = r[t].replace(/\*/g, ".*?"))[0]
                  ? createDebug.skips.push(RegExp("^" + e.slice(1) + "$"))
                  : createDebug.names.push(RegExp("^" + e + "$")));
          }),
          (createDebug.enabled = function (e) {
            let t, r;
            if ("*" === e[e.length - 1]) return !0;
            for (t = 0, r = createDebug.skips.length; t < r; t++)
              if (createDebug.skips[t].test(e)) return !1;
            for (t = 0, r = createDebug.names.length; t < r; t++)
              if (createDebug.names[t].test(e)) return !0;
            return !1;
          }),
          (createDebug.humanize = r(57824)),
          (createDebug.destroy = function () {
            console.warn(
              "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.",
            );
          }),
          Object.keys(e).forEach((t) => {
            createDebug[t] = e[t];
          }),
          (createDebug.names = []),
          (createDebug.skips = []),
          (createDebug.formatters = {}),
          (createDebug.selectColor = function (e) {
            let t = 0;
            for (let r = 0; r < e.length; r++)
              t = ((t << 5) - t + e.charCodeAt(r)) | 0;
            return createDebug.colors[Math.abs(t) % createDebug.colors.length];
          }),
          createDebug.enable(createDebug.load()),
          createDebug
        );
      };
    },
    57824: function (e) {
      function plural(e, t, r, n) {
        return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "");
      }
      e.exports = function (e, t) {
        t = t || {};
        var r,
          n,
          i = typeof e;
        if ("string" === i && e.length > 0)
          return (function (e) {
            if (!((e = String(e)).length > 100)) {
              var t =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  e,
                );
              if (t) {
                var r = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * r;
                  case "weeks":
                  case "week":
                  case "w":
                    return 6048e5 * r;
                  case "days":
                  case "day":
                  case "d":
                    return 864e5 * r;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return 36e5 * r;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return 6e4 * r;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return 1e3 * r;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return r;
                  default:
                    return;
                }
              }
            }
          })(e);
        if ("number" === i && isFinite(e))
          return t.long
            ? (r = Math.abs(e)) >= 864e5
              ? plural(e, r, 864e5, "day")
              : r >= 36e5
                ? plural(e, r, 36e5, "hour")
                : r >= 6e4
                  ? plural(e, r, 6e4, "minute")
                  : r >= 1e3
                    ? plural(e, r, 1e3, "second")
                    : e + " ms"
            : (n = Math.abs(e)) >= 864e5
              ? Math.round(e / 864e5) + "d"
              : n >= 36e5
                ? Math.round(e / 36e5) + "h"
                : n >= 6e4
                  ? Math.round(e / 6e4) + "m"
                  : n >= 1e3
                    ? Math.round(e / 1e3) + "s"
                    : e + "ms";
        throw Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e),
        );
      };
    },
    4947: function (e) {
      var trim = function (e) {
        return e.replace(/^\s+|\s+$/g, "");
      };
      e.exports = function (e) {
        if (!e) return {};
        for (var t = {}, r = trim(e).split("\n"), n = 0; n < r.length; n++) {
          var i,
            o = r[n],
            s = o.indexOf(":"),
            a = trim(o.slice(0, s)).toLowerCase(),
            c = trim(o.slice(s + 1));
          void 0 === t[a]
            ? (t[a] = c)
            : ((i = t[a]),
                "[object Array]" === Object.prototype.toString.call(i))
              ? t[a].push(c)
              : (t[a] = [t[a], c]);
        }
        return t;
      };
    },
    57178: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return a;
        },
      });
      var n = r(87462),
        i = r(67294),
        o = r(75320);
      let s = (0, i.forwardRef)((e, t) => {
          let { ratio: r = 1, style: s, ...a } = e;
          return (0, i.createElement)(
            "div",
            {
              style: {
                position: "relative",
                width: "100%",
                paddingBottom: `${100 / r}%`,
              },
              "data-radix-aspect-ratio-wrapper": "",
            },
            (0, i.createElement)(
              o.WV.div,
              (0, n.Z)({}, a, {
                ref: t,
                style: {
                  ...s,
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                },
              }),
            ),
          );
        }),
        a = s;
    },
    47613: function (e, t, r) {
      "use strict";
      r.d(t, {
        eI: function () {
          return createClient;
        },
      });
      let n =
          "undefined" != typeof navigator &&
          "ReactNative" === navigator.product,
        i = { timeout: n ? 6e4 : 12e4 };
      function processOptions(e) {
        let t =
            "string" == typeof e
              ? Object.assign({ url: e }, i)
              : Object.assign({}, i, e),
          r = new URL(t.url, "http://localhost");
        if (
          ((t.timeout = (function normalizeTimeout(e) {
            if (!1 === e || 0 === e) return !1;
            if (e.connect || e.socket) return e;
            let t = Number(e);
            return isNaN(t)
              ? normalizeTimeout(i.timeout)
              : { connect: t, socket: t };
          })(t.timeout)),
          t.query)
        ) {
          for (let [e, n] of Object.entries(t.query))
            if (void 0 !== n) {
              if (Array.isArray(n))
                for (let t of n) r.searchParams.append(e, t);
              else r.searchParams.append(e, n);
            }
        }
        return (
          (t.method =
            t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase()),
          (t.url =
            "http://localhost" === r.origin
              ? "".concat(r.pathname, "?").concat(r.searchParams)
              : r.toString()),
          t
        );
      }
      let o = /^https?:\/\//i;
      function validateOptions(e) {
        if (!o.test(e.url))
          throw Error('"'.concat(e.url, '" is not a valid URL'));
      }
      var s,
        a,
        c,
        u,
        l,
        p,
        d,
        h,
        f,
        v,
        b,
        _,
        g,
        m,
        y,
        w,
        C,
        x,
        O,
        E,
        S,
        j,
        A,
        F,
        $,
        k,
        T,
        P,
        D,
        I = r(4947),
        middlewareReducer = (e) =>
          function (t, r) {
            let n = "onError" === t,
              i = r;
            for (
              var o = arguments.length, s = Array(o > 2 ? o - 2 : 0), a = 2;
              a < o;
              a++
            )
              s[a - 2] = arguments[a];
            for (let r = 0; r < e[t].length; r++) {
              let o = e[t][r];
              if (((i = o(i, ...s)), n && !i)) break;
            }
            return i;
          };
      let G = ["request", "response", "progress", "error", "abort"],
        q = [
          "processOptions",
          "validateOptions",
          "interceptRequest",
          "finalizeOptions",
          "onRequest",
          "onResponse",
          "onError",
          "onReturn",
          "onHeaders",
        ];
      var __accessCheck = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet = (e, t, r) => (
          __accessCheck(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet = (e, t, r, n) => (
          __accessCheck(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      (s = new WeakMap()),
        (a = new WeakMap()),
        (c = new WeakMap()),
        (u = new WeakMap()),
        (l = new WeakMap());
      let R = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
        U =
          "xhr" === R
            ? XMLHttpRequest
            : class {
                constructor() {
                  (this.readyState = 0),
                    (this.responseType = ""),
                    __privateAdd(this, s, void 0),
                    __privateAdd(this, a, void 0),
                    __privateAdd(this, c, void 0),
                    __privateAdd(this, u, {}),
                    __privateAdd(this, l, void 0);
                }
                open(e, t, r) {
                  __privateSet(this, s, e),
                    __privateSet(this, a, t),
                    __privateSet(this, c, ""),
                    (this.readyState = 1),
                    this.onreadystatechange(),
                    __privateSet(this, l, void 0);
                }
                abort() {
                  __privateGet(this, l) && __privateGet(this, l).abort();
                }
                getAllResponseHeaders() {
                  return __privateGet(this, c);
                }
                setRequestHeader(e, t) {
                  __privateGet(this, u)[e] = t;
                }
                send(e) {
                  let t = "arraybuffer" !== this.responseType,
                    r = {
                      method: __privateGet(this, s),
                      headers: __privateGet(this, u),
                      body: e,
                    };
                  "function" == typeof AbortController &&
                    (__privateSet(this, l, new AbortController()),
                    "undefined" != typeof EventTarget &&
                      __privateGet(this, l).signal instanceof EventTarget &&
                      (r.signal = __privateGet(this, l).signal)),
                    "undefined" != typeof document &&
                      (r.credentials = this.withCredentials
                        ? "include"
                        : "omit"),
                    fetch(__privateGet(this, a), r)
                      .then(
                        (e) => (
                          e.headers.forEach((e, t) => {
                            __privateSet(
                              this,
                              c,
                              __privateGet(this, c) +
                                "".concat(t, ": ").concat(e, "\r\n"),
                            );
                          }),
                          (this.status = e.status),
                          (this.statusText = e.statusText),
                          (this.readyState = 3),
                          t ? e.text() : e.arrayBuffer()
                        ),
                      )
                      .then((e) => {
                        "string" == typeof e
                          ? (this.responseText = e)
                          : (this.response = e),
                          (this.readyState = 4),
                          this.onreadystatechange();
                      })
                      .catch((e) => {
                        var t;
                        if ("AbortError" === e.name) {
                          this.onabort();
                          return;
                        }
                        null == (t = this.onerror) || t.call(this, e);
                      });
                }
              };
      var httpRequester = (e, t) => {
        let r = e.options,
          n = e.applyMiddleware("finalizeOptions", r),
          i = {},
          o = e.applyMiddleware("interceptRequest", void 0, {
            adapter: R,
            context: e,
          });
        if (o) {
          let e = setTimeout(t, 0, null, o);
          return { abort: () => clearTimeout(e) };
        }
        let s = new U(),
          a = n.headers,
          c = n.timeout,
          u = !1,
          l = !1,
          p = !1;
        if (
          ((s.onerror = onError),
          (s.ontimeout = onError),
          (s.onabort = () => {
            stopTimers(!0), (u = !0);
          }),
          (s.onreadystatechange = () => {
            c &&
              (stopTimers(),
              (i.socket = setTimeout(
                () => timeoutRequest("ESOCKETTIMEDOUT"),
                c.socket,
              ))),
              u ||
                4 !== s.readyState ||
                0 === s.status ||
                (function () {
                  if (!u && !l && !p) {
                    if (0 === s.status) {
                      onError(Error("Unknown XHR error"));
                      return;
                    }
                    stopTimers(),
                      (l = !0),
                      t(null, {
                        body:
                          s.response ||
                          ("" === s.responseType || "text" === s.responseType
                            ? s.responseText
                            : ""),
                        url: n.url,
                        method: n.method,
                        headers: I(s.getAllResponseHeaders()),
                        statusCode: s.status,
                        statusMessage: s.statusText,
                      });
                  }
                })();
          }),
          s.open(n.method, n.url, !0),
          (s.withCredentials = !!n.withCredentials),
          a && s.setRequestHeader)
        )
          for (let e in a) a.hasOwnProperty(e) && s.setRequestHeader(e, a[e]);
        return (
          n.rawBody && (s.responseType = "arraybuffer"),
          e.applyMiddleware("onRequest", {
            options: n,
            adapter: R,
            request: s,
            context: e,
          }),
          s.send(n.body || null),
          c &&
            (i.connect = setTimeout(
              () => timeoutRequest("ETIMEDOUT"),
              c.connect,
            )),
          {
            abort: function () {
              (u = !0), s && s.abort();
            },
          }
        );
        function timeoutRequest(t) {
          (p = !0), s.abort();
          let r = Error(
            "ESOCKETTIMEDOUT" === t
              ? "Socket timed out on request to ".concat(n.url)
              : "Connection timed out on request to ".concat(n.url),
          );
          (r.code = t), e.channels.error.publish(r);
        }
        function stopTimers(e) {
          (e || u || (s.readyState >= 2 && i.connect)) &&
            clearTimeout(i.connect),
            i.socket && clearTimeout(i.socket);
        }
        function onError(e) {
          if (l) return;
          stopTimers(!0), (l = !0), (s = null);
          let r =
            e ||
            Error("Network error while attempting to reach ".concat(n.url));
          (r.isNetworkError = !0), (r.request = n), t(r);
        }
      };
      let getIt = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : httpRequester;
        return (function createRequester(e, t) {
          let r = [],
            n = q.reduce((e, t) => ((e[t] = e[t] || []), e), {
              processOptions: [processOptions],
              validateOptions: [validateOptions],
            });
          function request(e) {
            let r = G.reduce(
                (e, t) => (
                  (e[t] = (function () {
                    let e = Object.create(null),
                      t = 0;
                    return {
                      publish: function (t) {
                        for (let r in e) e[r](t);
                      },
                      subscribe: function (r) {
                        let n = t++;
                        return (
                          (e[n] = r),
                          function () {
                            delete e[n];
                          }
                        );
                      },
                    };
                  })()),
                  e
                ),
                {},
              ),
              i = middlewareReducer(n),
              o = i("processOptions", e);
            i("validateOptions", o);
            let s = { options: o, channels: r, applyMiddleware: i },
              a = null,
              c = r.request.subscribe((e) => {
                a = t(e, (t, n) =>
                  (function (e, t, n) {
                    let o = e,
                      s = t;
                    if (!o)
                      try {
                        s = i("onResponse", t, n);
                      } catch (e) {
                        (s = null), (o = e);
                      }
                    (o = o && i("onError", o, n))
                      ? r.error.publish(o)
                      : s && r.response.publish(s);
                  })(t, n, e),
                );
              });
            r.abort.subscribe(() => {
              c(), a && a.abort();
            });
            let u = i("onReturn", r, s);
            return u === r && r.request.publish(s), u;
          }
          return (
            (request.use = function (e) {
              if (!e)
                throw Error(
                  "Tried to add middleware that resolved to falsey value",
                );
              if ("function" == typeof e)
                throw Error(
                  "Tried to add middleware that was a function. It probably expects you to pass options to it.",
                );
              if (e.onReturn && n.onReturn.length > 0)
                throw Error(
                  "Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event",
                );
              return (
                q.forEach((t) => {
                  e[t] && n[t].push(e[t]);
                }),
                r.push(e),
                request
              );
            }),
            (request.clone = function () {
              return createRequester(r, t);
            }),
            e.forEach(request.use),
            request
          );
        })(e, t);
      };
      /*!
       * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
       *
       * Copyright (c) 2014-2017, Jon Schlinkert.
       * Released under the MIT License.
       */ function isObject(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      r(11227);
      var M = r(48764).lW;
      Object.prototype.hasOwnProperty;
      let N = void 0 === M ? () => !1 : (e) => M.isBuffer(e),
        z = ["boolean", "string", "number"];
      var W =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
                ? self
                : {};
      let promise = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.implementation || Promise;
        if (!t)
          throw Error(
            "`Promise` is not available in global scope, and no implementation was passed",
          );
        return {
          onReturn: (r, n) =>
            new t((t, i) => {
              let o = n.options.cancelToken;
              o &&
                o.promise.then((e) => {
                  r.abort.publish(e), i(e);
                }),
                r.error.subscribe(i),
                r.response.subscribe((r) => {
                  t(e.onlyBody ? r.body : r);
                }),
                setTimeout(() => {
                  try {
                    r.request.publish(n);
                  } catch (e) {
                    i(e);
                  }
                }, 0);
            }),
        };
      };
      let Cancel = class Cancel {
        constructor(e) {
          (this.__CANCEL__ = !0), (this.message = e);
        }
        toString() {
          return "Cancel".concat(this.message ? ": ".concat(this.message) : "");
        }
      };
      let H = class {
        constructor(e) {
          if ("function" != typeof e)
            throw TypeError("executor must be a function.");
          let t = null;
          (this.promise = new Promise((e) => {
            t = e;
          })),
            e((e) => {
              this.reason || ((this.reason = new Cancel(e)), t(this.reason));
            });
        }
      };
      (H.source = () => {
        let e;
        let t = new H((t) => {
          e = t;
        });
        return { token: t, cancel: e };
      }),
        (promise.Cancel = Cancel),
        (promise.CancelToken = H),
        (promise.isCancel = (e) =>
          !!(e && (null == e ? void 0 : e.__CANCEL__)));
      var L = r(70655);
      function isFunction(e) {
        return "function" == typeof e;
      }
      function createErrorClass(e) {
        var t = e(function (e) {
          Error.call(e), (e.stack = Error().stack);
        });
        return (
          (t.prototype = Object.create(Error.prototype)),
          (t.prototype.constructor = t),
          t
        );
      }
      var V = createErrorClass(function (e) {
        return function (t) {
          e(this),
            (this.message = t
              ? t.length +
                " errors occurred during unsubscription:\n" +
                t
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = t);
        };
      });
      function arrRemove(e, t) {
        if (e) {
          var r = e.indexOf(t);
          0 <= r && e.splice(r, 1);
        }
      }
      var B = (function () {
        var e;
        function Subscription(e) {
          (this.initialTeardown = e),
            (this.closed = !1),
            (this._parentage = null),
            (this._finalizers = null);
        }
        return (
          (Subscription.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var e,
                t,
                r,
                n,
                i,
                o = this._parentage;
              if (o) {
                if (((this._parentage = null), Array.isArray(o)))
                  try {
                    for (
                      var s = (0, L.XA)(o), a = s.next();
                      !a.done;
                      a = s.next()
                    )
                      a.value.remove(this);
                  } catch (t) {
                    e = { error: t };
                  } finally {
                    try {
                      a && !a.done && (t = s.return) && t.call(s);
                    } finally {
                      if (e) throw e.error;
                    }
                  }
                else o.remove(this);
              }
              var c = this.initialTeardown;
              if (isFunction(c))
                try {
                  c();
                } catch (e) {
                  i = e instanceof V ? e.errors : [e];
                }
              var u = this._finalizers;
              if (u) {
                this._finalizers = null;
                try {
                  for (
                    var l = (0, L.XA)(u), p = l.next();
                    !p.done;
                    p = l.next()
                  ) {
                    var d = p.value;
                    try {
                      execFinalizer(d);
                    } catch (e) {
                      (i = null != i ? i : []),
                        e instanceof V
                          ? (i = (0, L.ev)(
                              (0, L.ev)([], (0, L.CR)(i)),
                              (0, L.CR)(e.errors),
                            ))
                          : i.push(e);
                    }
                  }
                } catch (e) {
                  r = { error: e };
                } finally {
                  try {
                    p && !p.done && (n = l.return) && n.call(l);
                  } finally {
                    if (r) throw r.error;
                  }
                }
              }
              if (i) throw new V(i);
            }
          }),
          (Subscription.prototype.add = function (e) {
            var t;
            if (e && e !== this) {
              if (this.closed) execFinalizer(e);
              else {
                if (e instanceof Subscription) {
                  if (e.closed || e._hasParent(this)) return;
                  e._addParent(this);
                }
                (this._finalizers =
                  null !== (t = this._finalizers) && void 0 !== t
                    ? t
                    : []).push(e);
              }
            }
          }),
          (Subscription.prototype._hasParent = function (e) {
            var t = this._parentage;
            return t === e || (Array.isArray(t) && t.includes(e));
          }),
          (Subscription.prototype._addParent = function (e) {
            var t = this._parentage;
            this._parentage = Array.isArray(t)
              ? (t.push(e), t)
              : t
                ? [t, e]
                : e;
          }),
          (Subscription.prototype._removeParent = function (e) {
            var t = this._parentage;
            t === e
              ? (this._parentage = null)
              : Array.isArray(t) && arrRemove(t, e);
          }),
          (Subscription.prototype.remove = function (e) {
            var t = this._finalizers;
            t && arrRemove(t, e),
              e instanceof Subscription && e._removeParent(this);
          }),
          (Subscription.EMPTY = (((e = new Subscription()).closed = !0), e)),
          Subscription
        );
      })();
      function isSubscription(e) {
        return (
          e instanceof B ||
          (e &&
            "closed" in e &&
            isFunction(e.remove) &&
            isFunction(e.add) &&
            isFunction(e.unsubscribe))
        );
      }
      function execFinalizer(e) {
        isFunction(e) ? e() : e.unsubscribe();
      }
      B.EMPTY;
      var J = {
          onUnhandledError: null,
          onStoppedNotification: null,
          Promise: void 0,
          useDeprecatedSynchronousErrorHandling: !1,
          useDeprecatedNextContext: !1,
        },
        Z = {
          setTimeout: function (e, t) {
            for (var r = [], n = 2; n < arguments.length; n++)
              r[n - 2] = arguments[n];
            var i = Z.delegate;
            return (null == i ? void 0 : i.setTimeout)
              ? i.setTimeout.apply(i, (0, L.ev)([e, t], (0, L.CR)(r)))
              : setTimeout.apply(void 0, (0, L.ev)([e, t], (0, L.CR)(r)));
          },
          clearTimeout: function (e) {
            var t = Z.delegate;
            return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e);
          },
          delegate: void 0,
        };
      function noop() {}
      var Y = createNotification("C", void 0, void 0);
      function createNotification(e, t, r) {
        return { kind: e, value: t, error: r };
      }
      var Q = null,
        X = (function (e) {
          function Subscriber(t) {
            var r = e.call(this) || this;
            return (
              (r.isStopped = !1),
              t
                ? ((r.destination = t), isSubscription(t) && t.add(r))
                : (r.destination = er),
              r
            );
          }
          return (
            (0, L.ZT)(Subscriber, e),
            (Subscriber.create = function (e, t, r) {
              return new et(e, t, r);
            }),
            (Subscriber.prototype.next = function (e) {
              this.isStopped
                ? handleStoppedNotification(
                    createNotification("N", e, void 0),
                    this,
                  )
                : this._next(e);
            }),
            (Subscriber.prototype.error = function (e) {
              this.isStopped
                ? handleStoppedNotification(
                    createNotification("E", void 0, e),
                    this,
                  )
                : ((this.isStopped = !0), this._error(e));
            }),
            (Subscriber.prototype.complete = function () {
              this.isStopped
                ? handleStoppedNotification(Y, this)
                : ((this.isStopped = !0), this._complete());
            }),
            (Subscriber.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0),
                e.prototype.unsubscribe.call(this),
                (this.destination = null));
            }),
            (Subscriber.prototype._next = function (e) {
              this.destination.next(e);
            }),
            (Subscriber.prototype._error = function (e) {
              try {
                this.destination.error(e);
              } finally {
                this.unsubscribe();
              }
            }),
            (Subscriber.prototype._complete = function () {
              try {
                this.destination.complete();
              } finally {
                this.unsubscribe();
              }
            }),
            Subscriber
          );
        })(B),
        K = Function.prototype.bind;
      function bind(e, t) {
        return K.call(e, t);
      }
      var ee = (function () {
          function ConsumerObserver(e) {
            this.partialObserver = e;
          }
          return (
            (ConsumerObserver.prototype.next = function (e) {
              var t = this.partialObserver;
              if (t.next)
                try {
                  t.next(e);
                } catch (e) {
                  handleUnhandledError(e);
                }
            }),
            (ConsumerObserver.prototype.error = function (e) {
              var t = this.partialObserver;
              if (t.error)
                try {
                  t.error(e);
                } catch (e) {
                  handleUnhandledError(e);
                }
              else handleUnhandledError(e);
            }),
            (ConsumerObserver.prototype.complete = function () {
              var e = this.partialObserver;
              if (e.complete)
                try {
                  e.complete();
                } catch (e) {
                  handleUnhandledError(e);
                }
            }),
            ConsumerObserver
          );
        })(),
        et = (function (e) {
          function SafeSubscriber(t, r, n) {
            var i,
              o,
              s = e.call(this) || this;
            return (
              isFunction(t) || !t
                ? (i = {
                    next: null != t ? t : void 0,
                    error: null != r ? r : void 0,
                    complete: null != n ? n : void 0,
                  })
                : s && J.useDeprecatedNextContext
                  ? (((o = Object.create(t)).unsubscribe = function () {
                      return s.unsubscribe();
                    }),
                    (i = {
                      next: t.next && bind(t.next, o),
                      error: t.error && bind(t.error, o),
                      complete: t.complete && bind(t.complete, o),
                    }))
                  : (i = t),
              (s.destination = new ee(i)),
              s
            );
          }
          return (0, L.ZT)(SafeSubscriber, e), SafeSubscriber;
        })(X);
      function handleUnhandledError(e) {
        J.useDeprecatedSynchronousErrorHandling
          ? J.useDeprecatedSynchronousErrorHandling &&
            Q &&
            ((Q.errorThrown = !0), (Q.error = e))
          : Z.setTimeout(function () {
              var t = J.onUnhandledError;
              if (t) t(e);
              else throw e;
            });
      }
      function handleStoppedNotification(e, t) {
        var r = J.onStoppedNotification;
        r &&
          Z.setTimeout(function () {
            return r(e, t);
          });
      }
      var er = {
          closed: !0,
          next: noop,
          error: function (e) {
            throw e;
          },
          complete: noop,
        },
        en =
          ("function" == typeof Symbol && Symbol.observable) || "@@observable",
        ei = (function () {
          function Observable(e) {
            e && (this._subscribe = e);
          }
          return (
            (Observable.prototype.lift = function (e) {
              var t = new Observable();
              return (t.source = this), (t.operator = e), t;
            }),
            (Observable.prototype.subscribe = function (e, t, r) {
              var n,
                i = this,
                o =
                  ((n = e) && n instanceof X) ||
                  (n &&
                    isFunction(n.next) &&
                    isFunction(n.error) &&
                    isFunction(n.complete) &&
                    isSubscription(n))
                    ? e
                    : new et(e, t, r);
              return (
                (function (e) {
                  if (J.useDeprecatedSynchronousErrorHandling) {
                    var t = !Q;
                    if ((t && (Q = { errorThrown: !1, error: null }), e(), t)) {
                      var r = Q,
                        n = r.errorThrown,
                        i = r.error;
                      if (((Q = null), n)) throw i;
                    }
                  } else e();
                })(function () {
                  var e = i.operator,
                    t = i.source;
                  o.add(
                    e ? e.call(o, t) : t ? i._subscribe(o) : i._trySubscribe(o),
                  );
                }),
                o
              );
            }),
            (Observable.prototype._trySubscribe = function (e) {
              try {
                return this._subscribe(e);
              } catch (t) {
                e.error(t);
              }
            }),
            (Observable.prototype.forEach = function (e, t) {
              var r = this;
              return new (t = getPromiseCtor(t))(function (t, n) {
                var i = new et({
                  next: function (t) {
                    try {
                      e(t);
                    } catch (e) {
                      n(e), i.unsubscribe();
                    }
                  },
                  error: n,
                  complete: t,
                });
                r.subscribe(i);
              });
            }),
            (Observable.prototype._subscribe = function (e) {
              var t;
              return null === (t = this.source) || void 0 === t
                ? void 0
                : t.subscribe(e);
            }),
            (Observable.prototype[en] = function () {
              return this;
            }),
            (Observable.prototype.pipe = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              return (
                0 === e.length
                  ? function (e) {
                      return e;
                    }
                  : 1 === e.length
                    ? e[0]
                    : function (t) {
                        return e.reduce(function (e, t) {
                          return t(e);
                        }, t);
                      }
              )(this);
            }),
            (Observable.prototype.toPromise = function (e) {
              var t = this;
              return new (e = getPromiseCtor(e))(function (e, r) {
                var n;
                t.subscribe(
                  function (e) {
                    return (n = e);
                  },
                  function (e) {
                    return r(e);
                  },
                  function () {
                    return e(n);
                  },
                );
              });
            }),
            (Observable.create = function (e) {
              return new Observable(e);
            }),
            Observable
          );
        })();
      function getPromiseCtor(e) {
        var t;
        return null !== (t = null != e ? e : J.Promise) && void 0 !== t
          ? t
          : Promise;
      }
      var eo = createErrorClass(function (e) {
        return function () {
          e(this),
            (this.name = "EmptyError"),
            (this.message = "no elements in sequence");
        };
      });
      function lastValueFrom(e, t) {
        var r = "object" == typeof t;
        return new Promise(function (n, i) {
          var o,
            s = !1;
          e.subscribe({
            next: function (e) {
              (o = e), (s = !0);
            },
            error: i,
            complete: function () {
              s ? n(o) : r ? n(t.defaultValue) : i(new eo());
            },
          });
        });
      }
      function operate(e) {
        return function (t) {
          if (isFunction(null == t ? void 0 : t.lift))
            return t.lift(function (t) {
              try {
                return e(t, this);
              } catch (e) {
                this.error(e);
              }
            });
          throw TypeError("Unable to lift unknown Observable type");
        };
      }
      var es = (function (e) {
        function OperatorSubscriber(t, r, n, i, o, s) {
          var a = e.call(this, t) || this;
          return (
            (a.onFinalize = o),
            (a.shouldUnsubscribe = s),
            (a._next = r
              ? function (e) {
                  try {
                    r(e);
                  } catch (e) {
                    t.error(e);
                  }
                }
              : e.prototype._next),
            (a._error = i
              ? function (e) {
                  try {
                    i(e);
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._error),
            (a._complete = n
              ? function () {
                  try {
                    n();
                  } catch (e) {
                    t.error(e);
                  } finally {
                    this.unsubscribe();
                  }
                }
              : e.prototype._complete),
            a
          );
        }
        return (
          (0, L.ZT)(OperatorSubscriber, e),
          (OperatorSubscriber.prototype.unsubscribe = function () {
            var t;
            if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var r = this.closed;
              e.prototype.unsubscribe.call(this),
                r ||
                  null === (t = this.onFinalize) ||
                  void 0 === t ||
                  t.call(this);
            }
          }),
          OperatorSubscriber
        );
      })(X);
      function map(e, t) {
        return operate(function (r, n) {
          var i = 0;
          r.subscribe(
            new es(
              n,
              function (r) {
                n.next(e.call(t, r, i++));
              },
              void 0,
              void 0,
              void 0,
            ),
          );
        });
      }
      function filter(e, t) {
        return operate(function (r, n) {
          var i = 0;
          r.subscribe(
            new es(
              n,
              function (r) {
                return e.call(t, r, i++) && n.next(r);
              },
              void 0,
              void 0,
              void 0,
            ),
          );
        });
      }
      let ClientError = class ClientError extends Error {
        constructor(e) {
          let t = extractErrorProps(e);
          super(t.message), (this.statusCode = 400), Object.assign(this, t);
        }
      };
      let ServerError = class ServerError extends Error {
        constructor(e) {
          let t = extractErrorProps(e);
          super(t.message), (this.statusCode = 500), Object.assign(this, t);
        }
      };
      function extractErrorProps(e) {
        let t = e.body,
          r = {
            response: e,
            statusCode: e.statusCode,
            responseBody: (function (e, t) {
              let r = (t.headers["content-type"] || "").toLowerCase(),
                n = -1 !== r.indexOf("application/json");
              return n ? JSON.stringify(e, null, 2) : e;
            })(t, e),
            message: "",
            details: void 0,
          };
        if (t.error && t.message)
          return (r.message = "".concat(t.error, " - ").concat(t.message)), r;
        if (
          index_browser_isPlainObject(t) &&
          index_browser_isPlainObject(t.error) &&
          "mutationError" === t.error.type &&
          "string" == typeof t.error.description
        ) {
          let e = t.error.items || [],
            n = e
              .slice(0, 5)
              .map((e) => {
                var t;
                return null == (t = e.error) ? void 0 : t.description;
              })
              .filter(Boolean),
            i = n.length ? ":\n- ".concat(n.join("\n- ")) : "";
          return (
            e.length > 5 && (i += "\n...and ".concat(e.length - 5, " more")),
            (r.message = "".concat(t.error.description).concat(i)),
            (r.details = t.error),
            r
          );
        }
        return (
          t.error && t.error.description
            ? ((r.message = t.error.description), (r.details = t.error))
            : (r.message =
                t.error ||
                t.message ||
                (function (e) {
                  let t = e.statusMessage ? " ".concat(e.statusMessage) : "";
                  return ""
                    .concat(e.method, "-request to ")
                    .concat(e.url, " resulted in HTTP ")
                    .concat(e.statusCode)
                    .concat(t);
                })(e)),
          r
        );
      }
      function index_browser_isPlainObject(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      let ea = {
          onResponse: (e) => {
            if (e.statusCode >= 500) throw new ServerError(e);
            if (e.statusCode >= 400) throw new ClientError(e);
            return e;
          },
        },
        ec = {
          onResponse: (e) => {
            let t = e.headers["x-sanity-warning"],
              r = Array.isArray(t) ? t : [t];
            return r.filter(Boolean).forEach((e) => console.warn(e)), e;
          },
        };
      function getSelection(e) {
        if ("string" == typeof e || Array.isArray(e)) return { id: e };
        if (
          "object" == typeof e &&
          null !== e &&
          "query" in e &&
          "string" == typeof e.query
        )
          return "params" in e &&
            "object" == typeof e.params &&
            null !== e.params
            ? { query: e.query, params: e.params }
            : { query: e.query };
        throw Error(
          "Unknown selection - must be one of:\n\n".concat(
            "* Document ID (<docId>)\n* Array of document IDs\n* Object containing `query`",
          ),
        );
      }
      let eu = ["image", "file"],
        el = ["before", "after", "replace"],
        dataset = (e) => {
          if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e))
            throw Error(
              "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters",
            );
        },
        projectId = (e) => {
          if (!/^[-a-z0-9]+$/i.test(e))
            throw Error(
              "`projectId` can only contain only a-z, 0-9 and dashes",
            );
        },
        validateAssetType = (e) => {
          if (-1 === eu.indexOf(e))
            throw Error(
              "Invalid asset type: "
                .concat(e, ". Must be one of ")
                .concat(eu.join(", ")),
            );
        },
        validateObject = (e, t) => {
          if (null === t || "object" != typeof t || Array.isArray(t))
            throw Error("".concat(e, "() takes an object of properties"));
        },
        validateDocumentId = (e, t) => {
          if (
            "string" != typeof t ||
            !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) ||
            t.includes("..")
          )
            throw Error(
              "".concat(e, '(): "').concat(t, '" is not a valid document ID'),
            );
        },
        requireDocumentId = (e, t) => {
          if (!t._id)
            throw Error(
              "".concat(
                e,
                '() requires that the document contains an ID ("_id" property)',
              ),
            );
          validateDocumentId(e, t._id);
        },
        validateInsert = (e, t, r) => {
          let n = "insert(at, selector, items)";
          if (-1 === el.indexOf(e)) {
            let e = el.map((e) => '"'.concat(e, '"')).join(", ");
            throw Error(
              ""
                .concat(n, ' takes an "at"-argument which is one of: ')
                .concat(e),
            );
          }
          if ("string" != typeof t)
            throw Error(
              "".concat(
                n,
                ' takes a "selector"-argument which must be a string',
              ),
            );
          if (!Array.isArray(r))
            throw Error(
              "".concat(n, ' takes an "items"-argument which must be an array'),
            );
        },
        hasDataset = (e) => {
          if (!e.dataset)
            throw Error("`dataset` must be provided to perform queries");
          return e.dataset || "";
        },
        requestTag = (e) => {
          if ("string" != typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e))
            throw Error(
              "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.",
            );
          return e;
        },
        encodeQueryString = (e) => {
          let { query: t, params: r = {}, options: n = {} } = e,
            i = new URLSearchParams(),
            { tag: o, ...s } = n;
          for (let [e, n] of (o && i.set("tag", o),
          i.set("query", t),
          Object.entries(r)))
            i.set("$".concat(e), JSON.stringify(n));
          for (let [e, t] of Object.entries(s)) t && i.set(e, "".concat(t));
          return "?".concat(i);
        };
      var __accessCheck$6 = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet$6 = (e, t, r) => (
          __accessCheck$6(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd$6 = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet$6 = (e, t, r, n) => (
          __accessCheck$6(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let BasePatch = class BasePatch {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          (this.selection = e), (this.operations = t);
        }
        set(e) {
          return this._assign("set", e);
        }
        setIfMissing(e) {
          return this._assign("setIfMissing", e);
        }
        diffMatchPatch(e) {
          return (
            validateObject("diffMatchPatch", e),
            this._assign("diffMatchPatch", e)
          );
        }
        unset(e) {
          if (!Array.isArray(e))
            throw Error(
              "unset(attrs) takes an array of attributes to unset, non-array given",
            );
          return (
            (this.operations = Object.assign({}, this.operations, {
              unset: e,
            })),
            this
          );
        }
        inc(e) {
          return this._assign("inc", e);
        }
        dec(e) {
          return this._assign("dec", e);
        }
        insert(e, t, r) {
          return (
            validateInsert(e, t, r),
            this._assign("insert", { [e]: t, items: r })
          );
        }
        append(e, t) {
          return this.insert("after", "".concat(e, "[-1]"), t);
        }
        prepend(e, t) {
          return this.insert("before", "".concat(e, "[0]"), t);
        }
        splice(e, t, r, n) {
          let i = t < 0 ? t - 1 : t,
            o = void 0 === r || -1 === r ? -1 : Math.max(0, t + r),
            s = i < 0 && o >= 0 ? "" : o,
            a = "".concat(e, "[").concat(i, ":").concat(s, "]");
          return this.insert("replace", a, n || []);
        }
        ifRevisionId(e) {
          return (this.operations.ifRevisionID = e), this;
        }
        serialize() {
          return { ...getSelection(this.selection), ...this.operations };
        }
        toJSON() {
          return this.serialize();
        }
        reset() {
          return (this.operations = {}), this;
        }
        _assign(e, t) {
          let r =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
          return (
            validateObject(e, t),
            (this.operations = Object.assign({}, this.operations, {
              [e]: Object.assign({}, (r && this.operations[e]) || {}, t),
            })),
            this
          );
        }
        _set(e, t) {
          return this._assign(e, t, !1);
        }
      };
      let ep = class extends BasePatch {
        constructor(e, t, r) {
          super(e, t),
            __privateAdd$6(this, p, void 0),
            __privateSet$6(this, p, r);
        }
        clone() {
          return new ep(
            this.selection,
            { ...this.operations },
            __privateGet$6(this, p),
          );
        }
        commit(e) {
          if (!__privateGet$6(this, p))
            throw Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method",
            );
          let t = "string" == typeof this.selection,
            r = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
          return __privateGet$6(this, p).mutate({ patch: this.serialize() }, r);
        }
      };
      p = new WeakMap();
      let ed = class extends BasePatch {
        constructor(e, t, r) {
          super(e, t),
            __privateAdd$6(this, d, void 0),
            __privateSet$6(this, d, r);
        }
        clone() {
          return new ed(
            this.selection,
            { ...this.operations },
            __privateGet$6(this, d),
          );
        }
        commit(e) {
          if (!__privateGet$6(this, d))
            throw Error(
              "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method",
            );
          let t = "string" == typeof this.selection,
            r = Object.assign({ returnFirst: t, returnDocuments: !0 }, e);
          return __privateGet$6(this, d).mutate({ patch: this.serialize() }, r);
        }
      };
      d = new WeakMap();
      var __accessCheck$5 = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet$5 = (e, t, r) => (
          __accessCheck$5(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd$5 = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet$5 = (e, t, r, n) => (
          __accessCheck$5(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let eh = { returnDocuments: !1 };
      let BaseTransaction = class BaseTransaction {
        constructor() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = arguments.length > 1 ? arguments[1] : void 0;
          (this.operations = e), (this.trxId = t);
        }
        create(e) {
          return validateObject("create", e), this._add({ create: e });
        }
        createIfNotExists(e) {
          let t = "createIfNotExists";
          return (
            validateObject(t, e), requireDocumentId(t, e), this._add({ [t]: e })
          );
        }
        createOrReplace(e) {
          let t = "createOrReplace";
          return (
            validateObject(t, e), requireDocumentId(t, e), this._add({ [t]: e })
          );
        }
        delete(e) {
          return (
            validateDocumentId("delete", e), this._add({ delete: { id: e } })
          );
        }
        transactionId(e) {
          return e ? ((this.trxId = e), this) : this.trxId;
        }
        serialize() {
          return [...this.operations];
        }
        toJSON() {
          return this.serialize();
        }
        reset() {
          return (this.operations = []), this;
        }
        _add(e) {
          return this.operations.push(e), this;
        }
      };
      let ef = class extends BaseTransaction {
        constructor(e, t, r) {
          super(e, r),
            __privateAdd$5(this, h, void 0),
            __privateSet$5(this, h, t);
        }
        clone() {
          return new ef(
            [...this.operations],
            __privateGet$5(this, h),
            this.trxId,
          );
        }
        commit(e) {
          if (!__privateGet$5(this, h))
            throw Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method",
            );
          return __privateGet$5(this, h).mutate(
            this.serialize(),
            Object.assign({ transactionId: this.trxId }, eh, e || {}),
          );
        }
        patch(e, t) {
          let r = "string" != typeof e && e instanceof ed;
          if (r) return this._add({ patch: e.serialize() });
          if ("function" == typeof t) {
            let r = t(new ed(e, {}, __privateGet$5(this, h)));
            if (!(r instanceof ed))
              throw Error("function passed to `patch()` must return the patch");
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: { id: e, ...t } });
        }
      };
      h = new WeakMap();
      let ev = class extends BaseTransaction {
        constructor(e, t, r) {
          super(e, r),
            __privateAdd$5(this, f, void 0),
            __privateSet$5(this, f, t);
        }
        clone() {
          return new ev(
            [...this.operations],
            __privateGet$5(this, f),
            this.trxId,
          );
        }
        commit(e) {
          if (!__privateGet$5(this, f))
            throw Error(
              "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method",
            );
          return __privateGet$5(this, f).mutate(
            this.serialize(),
            Object.assign({ transactionId: this.trxId }, eh, e || {}),
          );
        }
        patch(e, t) {
          let r = "string" != typeof e && e instanceof ep;
          if (r) return this._add({ patch: e.serialize() });
          if ("function" == typeof t) {
            let r = t(new ep(e, {}, __privateGet$5(this, f)));
            if (!(r instanceof ep))
              throw Error("function passed to `patch()` must return the patch");
            return this._add({ patch: r.serialize() });
          }
          return this._add({ patch: { id: e, ...t } });
        }
      };
      f = new WeakMap();
      let excludeFalsey = (e, t) => (!1 === e ? void 0 : void 0 === e ? t : e),
        getMutationQuery = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            dryRun: e.dryRun,
            returnIds: !0,
            returnDocuments: excludeFalsey(e.returnDocuments, !0),
            visibility: e.visibility || "sync",
            autoGenerateArrayKeys: e.autoGenerateArrayKeys,
            skipCrossDatasetReferenceValidation:
              e.skipCrossDatasetReferenceValidation,
          };
        },
        isResponse = (e) => "response" === e.type,
        getBody = (e) => e.body,
        indexBy = (e, t) =>
          e.reduce((e, r) => ((e[t(r)] = r), e), Object.create(null));
      function _fetch(e, t, r, n) {
        let i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o = !1 === i.filterResponse ? (e) => e : (e) => e.result;
        return _dataRequest(e, t, "query", { query: r, params: n }, i).pipe(
          map(o),
        );
      }
      function _getDocument(e, t, r) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = { uri: _getDataUrl(e, "doc", r), json: !0, tag: n.tag };
        return _requestObservable(e, t, i).pipe(
          filter(isResponse),
          map((e) => e.body.documents && e.body.documents[0]),
        );
      }
      function _getDocuments(e, t, r) {
        let n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          i = { uri: _getDataUrl(e, "doc", r.join(",")), json: !0, tag: n.tag };
        return _requestObservable(e, t, i).pipe(
          filter(isResponse),
          map((e) => {
            let t = indexBy(e.body.documents || [], (e) => e._id);
            return r.map((e) => t[e] || null);
          }),
        );
      }
      function _createIfNotExists(e, t, r, n) {
        return (
          requireDocumentId("createIfNotExists", r),
          _create(e, t, r, "createIfNotExists", n)
        );
      }
      function _createOrReplace(e, t, r, n) {
        return (
          requireDocumentId("createOrReplace", r),
          _create(e, t, r, "createOrReplace", n)
        );
      }
      function _delete(e, t, r, n) {
        return _dataRequest(
          e,
          t,
          "mutate",
          { mutations: [{ delete: getSelection(r) }] },
          n,
        );
      }
      function _mutate(e, t, r, n) {
        let i;
        i =
          r instanceof ed || r instanceof ep
            ? { patch: r.serialize() }
            : r instanceof ef || r instanceof ev
              ? r.serialize()
              : r;
        let o = Array.isArray(i) ? i : [i],
          s = (n && n.transactionId) || void 0;
        return _dataRequest(
          e,
          t,
          "mutate",
          { mutations: o, transactionId: s },
          n,
        );
      }
      function _dataRequest(e, t, r, n) {
        let i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o = "mutate" === r,
          s = "query" === r,
          a = o ? "" : encodeQueryString(n),
          c = !o && a.length < 11264,
          u = i.returnFirst,
          { timeout: l, token: p, tag: d, headers: h } = i,
          f = _getDataUrl(e, r, c ? a : ""),
          v = {
            method: c ? "GET" : "POST",
            uri: f,
            json: !0,
            body: c ? void 0 : n,
            query: o && getMutationQuery(i),
            timeout: l,
            headers: h,
            token: p,
            tag: d,
            canUseCdn: s,
            signal: i.signal,
          };
        return _requestObservable(e, t, v).pipe(
          filter(isResponse),
          map(getBody),
          map((e) => {
            if (!o) return e;
            let t = e.results || [];
            if (i.returnDocuments)
              return u ? t[0] && t[0].document : t.map((e) => e.document);
            let r = u ? t[0] && t[0].id : t.map((e) => e.id);
            return {
              transactionId: e.transactionId,
              results: t,
              [u ? "documentId" : "documentIds"]: r,
            };
          }),
        );
      }
      function _create(e, t, r, n) {
        let i =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
          o = Object.assign({ returnFirst: !0, returnDocuments: !0 }, i);
        return _dataRequest(e, t, "mutate", { mutations: [{ [n]: r }] }, o);
      }
      function _requestObservable(e, t, r) {
        var n;
        let i = r.url || r.uri,
          o = e.config(),
          s =
            void 0 === r.canUseCdn
              ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 &&
                0 === i.indexOf("/data/")
              : r.canUseCdn,
          a = o.useCdn && s,
          c =
            r.tag && o.requestTagPrefix
              ? [o.requestTagPrefix, r.tag].join(".")
              : r.tag || o.requestTagPrefix;
        c && (r.query = { tag: requestTag(c), ...r.query });
        let u = (function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = {},
              n = t.token || e.token;
            n && (r.Authorization = "Bearer ".concat(n)),
              t.useGlobalApi ||
                e.useProjectHostname ||
                !e.projectId ||
                (r["X-Sanity-Project-ID"] = e.projectId);
            let i = !!(void 0 === t.withCredentials
                ? e.token || e.withCredentials
                : t.withCredentials),
              o = void 0 === t.timeout ? e.timeout : t.timeout;
            return Object.assign({}, t, {
              headers: Object.assign({}, r, t.headers || {}),
              timeout: void 0 === o ? 3e5 : o,
              proxy: t.proxy || e.proxy,
              json: !0,
              withCredentials: i,
            });
          })(o, Object.assign({}, r, { url: _getUrl(e, i, a) })),
          l = new ei((e) => t(u, o.requester).subscribe(e));
        return r.signal
          ? l.pipe(
              ((n = r.signal),
              (e) =>
                new ei((t) => {
                  let abort = () =>
                    t.error(
                      (function (e) {
                        var t, r;
                        if (eb)
                          return new DOMException(
                            null != (t = null == e ? void 0 : e.reason)
                              ? t
                              : "The operation was aborted.",
                            "AbortError",
                          );
                        let n = Error(
                          null != (r = null == e ? void 0 : e.reason)
                            ? r
                            : "The operation was aborted.",
                        );
                        return (n.name = "AbortError"), n;
                      })(n),
                    );
                  if (n && n.aborted) {
                    abort();
                    return;
                  }
                  let r = e.subscribe(t);
                  return (
                    n.addEventListener("abort", abort),
                    () => {
                      n.removeEventListener("abort", abort), r.unsubscribe();
                    }
                  );
                })),
            )
          : l;
      }
      function _request(e, t, r) {
        let n = _requestObservable(e, t, r).pipe(
          filter((e) => "response" === e.type),
          map((e) => e.body),
        );
        return n;
      }
      function _getDataUrl(e, t, r) {
        let n = e.config(),
          i = hasDataset(n),
          o = "/".concat(t, "/").concat(i),
          s = r ? "".concat(o, "/").concat(r) : o;
        return "/data".concat(s).replace(/\/($|\?)/, "$1");
      }
      function _getUrl(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          { url: n, cdnUrl: i } = e.config();
        return "".concat(r ? i : n, "/").concat(t.replace(/^\//, ""));
      }
      let eb = !!globalThis.DOMException;
      var __accessCheck$4 = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet$4 = (e, t, r) => (
          __accessCheck$4(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd$4 = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet$4 = (e, t, r, n) => (
          __accessCheck$4(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let ObservableAssetsClient = class ObservableAssetsClient {
        constructor(e, t) {
          __privateAdd$4(this, v, void 0),
            __privateAdd$4(this, b, void 0),
            __privateSet$4(this, v, e),
            __privateSet$4(this, b, t);
        }
        upload(e, t, r) {
          return _upload(
            __privateGet$4(this, v),
            __privateGet$4(this, b),
            e,
            t,
            r,
          );
        }
      };
      (v = new WeakMap()), (b = new WeakMap());
      let AssetsClient = class AssetsClient {
        constructor(e, t) {
          __privateAdd$4(this, _, void 0),
            __privateAdd$4(this, g, void 0),
            __privateSet$4(this, _, e),
            __privateSet$4(this, g, t);
        }
        upload(e, t, r) {
          let n = _upload(
            __privateGet$4(this, _),
            __privateGet$4(this, g),
            e,
            t,
            r,
          );
          return lastValueFrom(
            n.pipe(
              filter((e) => "response" === e.type),
              map((e) => e.body.document),
            ),
          );
        }
      };
      function _upload(e, t, r, n) {
        let i =
          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        validateAssetType(r);
        let o = i.extract || void 0;
        o && !o.length && (o = ["none"]);
        let s = hasDataset(e.config()),
          a = "image" === r ? "images" : "files",
          c =
            "undefined" != typeof File && n instanceof File
              ? Object.assign(
                  {
                    filename: !1 === i.preserveFilename ? void 0 : n.name,
                    contentType: n.type,
                  },
                  i,
                )
              : i,
          {
            tag: u,
            label: l,
            title: p,
            description: d,
            creditLine: h,
            filename: f,
            source: v,
          } = c,
          b = {
            label: l,
            title: p,
            description: d,
            filename: f,
            meta: o,
            creditLine: h,
          };
        return (
          v &&
            ((b.sourceId = v.id),
            (b.sourceName = v.name),
            (b.sourceUrl = v.url)),
          _requestObservable(e, t, {
            tag: u,
            method: "POST",
            timeout: c.timeout || 0,
            uri: "/assets/".concat(a, "/").concat(s),
            headers: c.contentType ? { "Content-Type": c.contentType } : {},
            query: b,
            body: n,
          })
        );
      }
      function generateHelpUrl(e) {
        return "https://www.sanity.io/help/" + e;
      }
      (_ = new WeakMap()), (g = new WeakMap());
      let createWarningPrinter = (e) => {
          var t;
          let r, n;
          return (
            (t = function () {
              for (var t = arguments.length, r = Array(t), n = 0; n < t; n++)
                r[n] = arguments[n];
              return console.warn(e.join(" "), ...r);
            }),
            (n = !1),
            function () {
              return n || ((r = t(...arguments)), (n = !0)), r;
            }
          );
        },
        e_ = createWarningPrinter([
          "You are not using the Sanity CDN. That means your data is always fresh, but the CDN is faster and",
          "cheaper. Think about it! For more info, see ".concat(
            generateHelpUrl("js-client-cdn-configuration"),
            " ",
          ),
          "To hide this warning, please set the `useCdn` option to either `true` or `false` when creating",
          "the client.",
        ]),
        eg = createWarningPrinter([
          "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
          "See ".concat(
            generateHelpUrl("js-client-browser-token"),
            " for more information and how to hide this warning.",
          ),
        ]),
        em = createWarningPrinter([
          "Using the Sanity client without specifying an API version is deprecated.",
          "See ".concat(generateHelpUrl("js-client-api-version")),
        ]);
      createWarningPrinter([
        "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead",
      ]);
      let ey = {
          apiHost: "https://api.sanity.io",
          apiVersion: "1",
          useProjectHostname: !0,
        },
        ew = ["localhost", "127.0.0.1", "0.0.0.0"],
        isLocal = (e) => -1 !== ew.indexOf(e),
        validateApiVersion = function (e) {
          if ("1" === e || "X" === e) return;
          let t = new Date(e),
            r =
              /^\d{4}-\d{2}-\d{2}$/.test(e) &&
              t instanceof Date &&
              t.getTime() > 0;
          if (!r)
            throw Error(
              "Invalid API version string, expected `1` or date in format `YYYY-MM-DD`",
            );
        },
        initConfig = (e, t) => {
          let r = Object.assign({}, t, e);
          r.apiVersion || em();
          let n = Object.assign({}, ey, r),
            i = n.useProjectHostname;
          if ("undefined" == typeof Promise) {
            let e = generateHelpUrl("js-client-promise-polyfill");
            throw Error(
              "No native Promise-implementation found, polyfill needed - see ".concat(
                e,
              ),
            );
          }
          if (i && !n.projectId)
            throw Error("Configuration must contain `projectId`");
          let o =
              "undefined" != typeof window &&
              window.location &&
              window.location.hostname,
            s = o && isLocal(window.location.hostname);
          o && s && n.token && !0 !== n.ignoreBrowserTokenWarning
            ? eg()
            : void 0 === n.useCdn && e_(),
            i && projectId(n.projectId),
            n.dataset && dataset(n.dataset),
            "requestTagPrefix" in n &&
              (n.requestTagPrefix = n.requestTagPrefix
                ? requestTag(n.requestTagPrefix).replace(/\.+$/, "")
                : void 0),
            (n.apiVersion = "".concat(n.apiVersion).replace(/^v/, "")),
            (n.isDefaultApi = n.apiHost === ey.apiHost),
            (n.useCdn = !!n.useCdn && !n.withCredentials),
            validateApiVersion(n.apiVersion);
          let a = n.apiHost.split("://", 2),
            c = a[0],
            u = a[1],
            l = n.isDefaultApi ? "apicdn.sanity.io" : u;
          return (
            n.useProjectHostname
              ? ((n.url = ""
                  .concat(c, "://")
                  .concat(n.projectId, ".")
                  .concat(u, "/v")
                  .concat(n.apiVersion)),
                (n.cdnUrl = ""
                  .concat(c, "://")
                  .concat(n.projectId, ".")
                  .concat(l, "/v")
                  .concat(n.apiVersion)))
              : ((n.url = "".concat(n.apiHost, "/v").concat(n.apiVersion)),
                (n.cdnUrl = n.url)),
            n
          );
        };
      var defaults = (e, t) =>
        Object.keys(t)
          .concat(Object.keys(e))
          .reduce((r, n) => ((r[n] = void 0 === e[n] ? t[n] : e[n]), r), {});
      let pick = (e, t) =>
          t.reduce((t, r) => (void 0 === e[r] || (t[r] = e[r]), t), {}),
        eC = [
          "includePreviousRevision",
          "includeResult",
          "visibility",
          "effectFormat",
          "tag",
        ],
        ex = { includeResult: !0 };
      function _listen(e, t) {
        let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          {
            url: i,
            token: o,
            withCredentials: s,
            requestTagPrefix: a,
          } = this.config(),
          c = n.tag && a ? [a, n.tag].join(".") : n.tag,
          u = { ...defaults(n, ex), tag: c },
          l = pick(u, eC),
          p = encodeQueryString({
            query: e,
            params: t,
            options: { tag: c, ...l },
          }),
          d = "".concat(i).concat(_getDataUrl(this, "listen", p));
        if (d.length > 14800)
          return new ei((e) => e.error(Error("Query too large for listener")));
        let h = u.events ? u.events : ["mutation"],
          f = -1 !== h.indexOf("reconnect"),
          v = {};
        return (
          (o || s) && (v.withCredentials = !0),
          o && (v.headers = { Authorization: "Bearer ".concat(o) }),
          new ei((e) => {
            let t, n;
            getEventSource()
              .then((e) => {
                t = e;
              })
              .catch((t) => {
                e.error(t), stop();
              });
            let i = !1;
            function onError() {
              !i &&
                (f && e.next({ type: "reconnect" }),
                i ||
                  t.readyState !== t.CLOSED ||
                  (unsubscribe(),
                  clearTimeout(n),
                  (n = setTimeout(open, 100))));
            }
            function onChannelError(t) {
              e.error(
                (function (e) {
                  if (e instanceof Error) return e;
                  let t = parseEvent(e);
                  return t instanceof Error
                    ? t
                    : Error(
                        t.error
                          ? t.error.description
                            ? t.error.description
                            : "string" == typeof t.error
                              ? t.error
                              : JSON.stringify(t.error, null, 2)
                          : t.message || "Unknown listener error",
                      );
                })(t),
              );
            }
            function onMessage(t) {
              let r = parseEvent(t);
              return r instanceof Error ? e.error(r) : e.next(r);
            }
            function onDisconnect() {
              (i = !0), unsubscribe(), e.complete();
            }
            function unsubscribe() {
              t &&
                (t.removeEventListener("error", onError),
                t.removeEventListener("channelError", onChannelError),
                t.removeEventListener("disconnect", onDisconnect),
                h.forEach((e) => t.removeEventListener(e, onMessage)),
                t.close());
            }
            async function getEventSource() {
              let { default: e } = await r.e(3699).then(r.t.bind(r, 33699, 19)),
                t = new e(d, v);
              return (
                t.addEventListener("error", onError),
                t.addEventListener("channelError", onChannelError),
                t.addEventListener("disconnect", onDisconnect),
                h.forEach((e) => t.addEventListener(e, onMessage)),
                t
              );
            }
            function open() {
              getEventSource()
                .then((e) => {
                  t = e;
                })
                .catch((t) => {
                  e.error(t), stop();
                });
            }
            function stop() {
              (i = !0), unsubscribe();
            }
            return stop;
          })
        );
      }
      function parseEvent(e) {
        try {
          let t = (e.data && JSON.parse(e.data)) || {};
          return Object.assign({ type: e.type }, t);
        } catch (e) {
          return e;
        }
      }
      var __accessCheck$3 = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet$3 = (e, t, r) => (
          __accessCheck$3(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd$3 = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet$3 = (e, t, r, n) => (
          __accessCheck$3(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let ObservableDatasetsClient = class ObservableDatasetsClient {
        constructor(e, t) {
          __privateAdd$3(this, m, void 0),
            __privateAdd$3(this, y, void 0),
            __privateSet$3(this, m, e),
            __privateSet$3(this, y, t);
        }
        create(e, t) {
          return _modify(
            __privateGet$3(this, m),
            __privateGet$3(this, y),
            "PUT",
            e,
            t,
          );
        }
        edit(e, t) {
          return _modify(
            __privateGet$3(this, m),
            __privateGet$3(this, y),
            "PATCH",
            e,
            t,
          );
        }
        delete(e) {
          return _modify(
            __privateGet$3(this, m),
            __privateGet$3(this, y),
            "DELETE",
            e,
          );
        }
        list() {
          return _request(__privateGet$3(this, m), __privateGet$3(this, y), {
            uri: "/datasets",
          });
        }
      };
      (m = new WeakMap()), (y = new WeakMap());
      let DatasetsClient = class DatasetsClient {
        constructor(e, t) {
          __privateAdd$3(this, w, void 0),
            __privateAdd$3(this, C, void 0),
            __privateSet$3(this, w, e),
            __privateSet$3(this, C, t);
        }
        create(e, t) {
          return lastValueFrom(
            _modify(
              __privateGet$3(this, w),
              __privateGet$3(this, C),
              "PUT",
              e,
              t,
            ),
          );
        }
        edit(e, t) {
          return lastValueFrom(
            _modify(
              __privateGet$3(this, w),
              __privateGet$3(this, C),
              "PATCH",
              e,
              t,
            ),
          );
        }
        delete(e) {
          return lastValueFrom(
            _modify(
              __privateGet$3(this, w),
              __privateGet$3(this, C),
              "DELETE",
              e,
            ),
          );
        }
        list() {
          return lastValueFrom(
            _request(__privateGet$3(this, w), __privateGet$3(this, C), {
              uri: "/datasets",
            }),
          );
        }
      };
      function _modify(e, t, r, n, i) {
        return (
          dataset(n),
          _request(e, t, { method: r, uri: "/datasets/".concat(n), body: i })
        );
      }
      (w = new WeakMap()), (C = new WeakMap());
      var __accessCheck$2 = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet$2 = (e, t, r) => (
          __accessCheck$2(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd$2 = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet$2 = (e, t, r, n) => (
          __accessCheck$2(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let ObservableProjectsClient = class ObservableProjectsClient {
        constructor(e, t) {
          __privateAdd$2(this, x, void 0),
            __privateAdd$2(this, O, void 0),
            __privateSet$2(this, x, e),
            __privateSet$2(this, O, t);
        }
        list() {
          return _request(__privateGet$2(this, x), __privateGet$2(this, O), {
            uri: "/projects",
          });
        }
        getById(e) {
          return _request(__privateGet$2(this, x), __privateGet$2(this, O), {
            uri: "/projects/".concat(e),
          });
        }
      };
      (x = new WeakMap()), (O = new WeakMap());
      let ProjectsClient = class ProjectsClient {
        constructor(e, t) {
          __privateAdd$2(this, E, void 0),
            __privateAdd$2(this, S, void 0),
            __privateSet$2(this, E, e),
            __privateSet$2(this, S, t);
        }
        list() {
          return lastValueFrom(
            _request(__privateGet$2(this, E), __privateGet$2(this, S), {
              uri: "/projects",
            }),
          );
        }
        getById(e) {
          return lastValueFrom(
            _request(__privateGet$2(this, E), __privateGet$2(this, S), {
              uri: "/projects/".concat(e),
            }),
          );
        }
      };
      (E = new WeakMap()), (S = new WeakMap());
      var __accessCheck$1 = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        __privateGet$1 = (e, t, r) => (
          __accessCheck$1(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        __privateAdd$1 = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        __privateSet$1 = (e, t, r, n) => (
          __accessCheck$1(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let ObservableUsersClient = class ObservableUsersClient {
        constructor(e, t) {
          __privateAdd$1(this, j, void 0),
            __privateAdd$1(this, A, void 0),
            __privateSet$1(this, j, e),
            __privateSet$1(this, A, t);
        }
        getById(e) {
          return _request(__privateGet$1(this, j), __privateGet$1(this, A), {
            uri: "/users/".concat(e),
          });
        }
      };
      (j = new WeakMap()), (A = new WeakMap());
      let UsersClient = class UsersClient {
        constructor(e, t) {
          __privateAdd$1(this, F, void 0),
            __privateAdd$1(this, $, void 0),
            __privateSet$1(this, F, e),
            __privateSet$1(this, $, t);
        }
        getById(e) {
          return lastValueFrom(
            _request(__privateGet$1(this, F), __privateGet$1(this, $), {
              uri: "/users/".concat(e),
            }),
          );
        }
      };
      (F = new WeakMap()), ($ = new WeakMap());
      var index_browser_accessCheck = (e, t, r) => {
          if (!t.has(e)) throw TypeError("Cannot " + r);
        },
        index_browser_privateGet = (e, t, r) => (
          index_browser_accessCheck(e, t, "read from private field"),
          r ? r.call(e) : t.get(e)
        ),
        index_browser_privateAdd = (e, t, r) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, r);
        },
        index_browser_privateSet = (e, t, r, n) => (
          index_browser_accessCheck(e, t, "write to private field"),
          n ? n.call(e, r) : t.set(e, r),
          r
        );
      let eO = class {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey;
          index_browser_privateAdd(this, k, void 0),
            index_browser_privateAdd(this, T, void 0),
            (this.listen = _listen),
            this.config(t),
            index_browser_privateSet(this, T, e),
            (this.assets = new ObservableAssetsClient(
              this,
              index_browser_privateGet(this, T),
            )),
            (this.datasets = new ObservableDatasetsClient(
              this,
              index_browser_privateGet(this, T),
            )),
            (this.projects = new ObservableProjectsClient(
              this,
              index_browser_privateGet(this, T),
            )),
            (this.users = new ObservableUsersClient(
              this,
              index_browser_privateGet(this, T),
            ));
        }
        clone() {
          return new eO(index_browser_privateGet(this, T), this.config());
        }
        config(e) {
          if (void 0 === e) return { ...index_browser_privateGet(this, k) };
          if (
            index_browser_privateGet(this, k) &&
            !1 === index_browser_privateGet(this, k).allowReconfigure
          )
            throw Error(
              "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client",
            );
          return (
            index_browser_privateSet(
              this,
              k,
              initConfig(e, index_browser_privateGet(this, k) || {}),
            ),
            this
          );
        }
        withConfig(e) {
          return new eO(index_browser_privateGet(this, T), {
            ...this.config(),
            ...e,
          });
        }
        fetch(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return _fetch(this, index_browser_privateGet(this, T), e, t, r);
        }
        getDocument(e, t) {
          return _getDocument(this, index_browser_privateGet(this, T), e, t);
        }
        getDocuments(e, t) {
          return _getDocuments(this, index_browser_privateGet(this, T), e, t);
        }
        create(e, t) {
          return _create(
            this,
            index_browser_privateGet(this, T),
            e,
            "create",
            t,
          );
        }
        createIfNotExists(e, t) {
          return _createIfNotExists(
            this,
            index_browser_privateGet(this, T),
            e,
            t,
          );
        }
        createOrReplace(e, t) {
          return _createOrReplace(
            this,
            index_browser_privateGet(this, T),
            e,
            t,
          );
        }
        delete(e, t) {
          return _delete(this, index_browser_privateGet(this, T), e, t);
        }
        mutate(e, t) {
          return _mutate(this, index_browser_privateGet(this, T), e, t);
        }
        patch(e, t) {
          return new ep(e, t, this);
        }
        transaction(e) {
          return new ev(e, this);
        }
        request(e) {
          return _request(this, index_browser_privateGet(this, T), e);
        }
        getUrl(e, t) {
          return _getUrl(this, e, t);
        }
        getDataUrl(e, t) {
          return _getDataUrl(this, e, t);
        }
      };
      (k = new WeakMap()), (T = new WeakMap());
      let eE = class {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ey;
          index_browser_privateAdd(this, P, void 0),
            index_browser_privateAdd(this, D, void 0),
            (this.listen = _listen),
            this.config(t),
            index_browser_privateSet(this, D, e),
            (this.assets = new AssetsClient(
              this,
              index_browser_privateGet(this, D),
            )),
            (this.datasets = new DatasetsClient(
              this,
              index_browser_privateGet(this, D),
            )),
            (this.projects = new ProjectsClient(
              this,
              index_browser_privateGet(this, D),
            )),
            (this.users = new UsersClient(
              this,
              index_browser_privateGet(this, D),
            )),
            (this.observable = new eO(e, t));
        }
        clone() {
          return new eE(index_browser_privateGet(this, D), this.config());
        }
        config(e) {
          if (void 0 === e) return { ...index_browser_privateGet(this, P) };
          if (
            index_browser_privateGet(this, P) &&
            !1 === index_browser_privateGet(this, P).allowReconfigure
          )
            throw Error(
              "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client",
            );
          return (
            this.observable && this.observable.config(e),
            index_browser_privateSet(
              this,
              P,
              initConfig(e, index_browser_privateGet(this, P) || {}),
            ),
            this
          );
        }
        withConfig(e) {
          return new eE(index_browser_privateGet(this, D), {
            ...this.config(),
            ...e,
          });
        }
        fetch(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return lastValueFrom(
            _fetch(this, index_browser_privateGet(this, D), e, t, r),
          );
        }
        getDocument(e, t) {
          return lastValueFrom(
            _getDocument(this, index_browser_privateGet(this, D), e, t),
          );
        }
        getDocuments(e, t) {
          return lastValueFrom(
            _getDocuments(this, index_browser_privateGet(this, D), e, t),
          );
        }
        create(e, t) {
          return lastValueFrom(
            _create(this, index_browser_privateGet(this, D), e, "create", t),
          );
        }
        createIfNotExists(e, t) {
          return lastValueFrom(
            _createIfNotExists(this, index_browser_privateGet(this, D), e, t),
          );
        }
        createOrReplace(e, t) {
          return lastValueFrom(
            _createOrReplace(this, index_browser_privateGet(this, D), e, t),
          );
        }
        delete(e, t) {
          return lastValueFrom(
            _delete(this, index_browser_privateGet(this, D), e, t),
          );
        }
        mutate(e, t) {
          return lastValueFrom(
            _mutate(this, index_browser_privateGet(this, D), e, t),
          );
        }
        patch(e, t) {
          return new ed(e, t, this);
        }
        transaction(e) {
          return new ef(e, this);
        }
        request(e) {
          return lastValueFrom(
            _request(this, index_browser_privateGet(this, D), e),
          );
        }
        dataRequest(e, t, r) {
          return lastValueFrom(
            _dataRequest(this, index_browser_privateGet(this, D), e, t, r),
          );
        }
        getUrl(e, t) {
          return _getUrl(this, e, t);
        }
        getDataUrl(e, t) {
          return _getDataUrl(this, e, t);
        }
      };
      (P = new WeakMap()), (D = new WeakMap());
      let eS = (function (e) {
        var t;
        let r = getIt([
          ...e,
          ec,
          {
            processOptions: (e) => {
              var t, r;
              let n = e.body;
              if (!n) return e;
              let i = "function" == typeof n.pipe,
                o =
                  !i &&
                  !N(n) &&
                  (-1 !== z.indexOf(typeof n) ||
                    Array.isArray(n) ||
                    (!1 !== isObject(n) &&
                      (void 0 === (t = n.constructor) ||
                        (!1 !== isObject((r = t.prototype)) &&
                          !1 !== r.hasOwnProperty("isPrototypeOf")))));
              return o
                ? Object.assign({}, e, {
                    body: JSON.stringify(e.body),
                    headers: Object.assign({}, e.headers, {
                      "Content-Type": "application/json",
                    }),
                  })
                : e;
            },
          },
          {
            onResponse: (e) => {
              let r = e.headers["content-type"] || "",
                n = (t && t.force) || -1 !== r.indexOf("application/json");
              return e.body && r && n
                ? Object.assign({}, e, {
                    body: (function (e) {
                      try {
                        return JSON.parse(e);
                      } catch (e) {
                        throw (
                          ((e.message =
                            "Failed to parsed response body as JSON: ".concat(
                              e.message,
                            )),
                          e)
                        );
                      }
                    })(e.body),
                  })
                : e;
            },
            processOptions: (e) =>
              Object.assign({}, e, {
                headers: Object.assign(
                  { Accept: "application/json" },
                  e.headers,
                ),
              }),
          },
          {
            onRequest: (e) => {
              if ("xhr" !== e.adapter) return;
              let t = e.request,
                r = e.context;
              function handleProgress(e) {
                return (t) => {
                  let n = t.lengthComputable ? (t.loaded / t.total) * 100 : -1;
                  r.channels.progress.publish({
                    stage: e,
                    percent: n,
                    total: t.total,
                    loaded: t.loaded,
                    lengthComputable: t.lengthComputable,
                  });
                };
              }
              "upload" in t &&
                "onprogress" in t.upload &&
                (t.upload.onprogress = handleProgress("upload")),
                "onprogress" in t &&
                  (t.onprogress = handleProgress("download"));
            },
          },
          ea,
          (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.implementation || W.Observable;
            if (!t)
              throw Error(
                "`Observable` is not available in global scope, and no implementation was passed",
              );
            return {
              onReturn: (e, r) =>
                new t(
                  (t) => (
                    e.error.subscribe((e) => t.error(e)),
                    e.progress.subscribe((e) =>
                      t.next(Object.assign({ type: "progress" }, e)),
                    ),
                    e.response.subscribe((e) => {
                      t.next(Object.assign({ type: "response" }, e)),
                        t.complete();
                    }),
                    e.request.publish(r),
                    () => e.abort.publish()
                  ),
                ),
            };
          })({ implementation: ei }),
        ]);
        function httpRequest(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
          return t({ maxRedirects: 0, ...e });
        }
        return (httpRequest.defaultRequester = r), httpRequest;
      })([]);
      eS.defaultRequester;
      let createClient = (e) => new eE(eS, e);
    },
    93725: function (e, t, r) {
      "use strict";
      r.d(t, {
        Dz: function () {
          return PreviewSuspense;
        },
        R2: function () {
          return definePreview;
        },
      });
      var n = r(67294);
      let i = [],
        suspend = (e, t, r) =>
          (function (e, t, r = !1, n = {}) {
            for (let e of i)
              if (
                (function (e, t, r = (e, t) => e === t) {
                  if (e === t) return !0;
                  if (!e || !t) return !1;
                  let n = e.length;
                  if (t.length !== n) return !1;
                  for (let i = 0; i < n; i++) if (!r(e[i], t[i])) return !1;
                  return !0;
                })(t, e.keys, e.equal)
              ) {
                if (r) return;
                if (Object.prototype.hasOwnProperty.call(e, "error"))
                  throw e.error;
                if (Object.prototype.hasOwnProperty.call(e, "response"))
                  return e.response;
                if (!r) throw e.promise;
              }
            let o = {
              keys: t,
              equal: n.equal,
              promise: e(...t)
                .then((e) => (o.response = e))
                .then(() => {
                  n.lifespan &&
                    n.lifespan > 0 &&
                    setTimeout(() => {
                      let e = i.indexOf(o);
                      -1 !== e && i.splice(e, 1);
                    }, n.lifespan);
                })
                .catch((e) => (o.error = e)),
            };
            if ((i.push(o), !r)) throw o.promise;
          })(e, t, !1, r);
      var o = r(85893);
      let _checkAuth = async (e, t) => {
          let r = await fetch(
              "https://".concat(e, ".api.sanity.io/v1/users/me"),
              {
                credentials: "include",
                headers: t ? { Authorization: "Bearer ".concat(t) } : void 0,
              },
            ),
            n = await r.json();
          return !!(null == n ? void 0 : n.id);
        },
        _lazyGroqStore = async () => {
          let e = await r.e(6595).then(r.bind(r, 26595)),
            { groqStore: t } = "default" in e ? e.default : e;
          return t;
        },
        _lazyEventSourcePolyfill = async () => {
          let e = await r.e(3699).then(r.t.bind(r, 33699, 19)),
            t = "default" in e ? e.default : e;
          return t;
        },
        _definePreview = (e) => {
          let t,
            {
              projectId: r,
              dataset: i,
              documentLimit: o = 3e3,
              subscriptionThrottleMs: s = 10,
              overlayDrafts: a = !0,
              importEventSourcePolyfill: c,
              importGroqStore: u,
              preload: l,
              onPublicAccessOnly: p,
              checkAuth: d,
              includeTypes: h,
            } = e;
          return r
            ? function (e, f, v, b) {
                if ("undefined" == typeof document)
                  throw Error(
                    "Calling usePreview outside a browser environment isn't supported. Ensure the component using the hook is only rendering on the client. For example by wrapping it in PreviewSuspense.",
                  );
                if (!e && null !== e)
                  throw Error(
                    "No `token` given to usePreview hook, if this is intentional then set it to `null`",
                  );
                let [_] = (0, n.useState)(() => b),
                  g = (function (e) {
                    let t = (0, n.useMemo)(() => JSON.stringify(e || {}), [e]);
                    return (0, n.useMemo)(() => JSON.parse(t), [t]);
                  })(v);
                if (!t) {
                  if (p) {
                    let t = d(r, e);
                    t || p();
                  }
                  let n = u();
                  t = n({
                    projectId: r,
                    dataset: i,
                    documentLimit: o,
                    subscriptionThrottleMs: s,
                    includeTypes: h,
                    token: null === e ? void 0 : e,
                    EventSource: null === e ? void 0 : c(),
                    listen: !0,
                    overlayDrafts: a,
                  });
                }
                let m = null != _ ? _ : l(t, f, g),
                  y = (0, n.useMemo)(() => {
                    let e = m;
                    return {
                      getServerSnapshot: void 0 === _ ? void 0 : () => _,
                      getSnapshot: () => e,
                      subscribe: (r) => {
                        let n = t.subscribe(
                          f,
                          void 0 === g ? {} : g,
                          (t, n) => {
                            if (t)
                              throw (
                                (console.error(
                                  "Error thrown in the usePreviewHook subscription",
                                  t,
                                ),
                                t)
                              );
                            (e = n), r();
                          },
                        );
                        return () => n.unsubscribe();
                      },
                    };
                  }, [m, g, f, _]);
                return (
                  (0, n.useEffect)(() => {
                    let callback = () => {
                      t.close();
                    };
                    return (
                      window.addEventListener("beforeunload", callback),
                      () => window.removeEventListener("beforeunload", callback)
                    );
                  }, []),
                  (0, n.useSyncExternalStore)(
                    y.subscribe,
                    y.getSnapshot,
                    y.getServerSnapshot,
                  )
                );
              }
            : (console.warn(
                "No projectId set for createPreviewHook, returning dummy hook",
              ),
              function () {
                return (
                  console.warn(
                    "The hook returned by createPreviewHook is a dummy as there is no projectId set, returning null",
                  ),
                  null
                );
              });
        },
        _preloadQuery = (e, t, r) => e.query(t, r),
        definePreview = (e) =>
          _definePreview({
            ...e,
            importEventSourcePolyfill: () =>
              suspend(
                () => _lazyEventSourcePolyfill(),
                ["@sanity/preview-kit", "@sanity/eventsource/browser"],
              ),
            importGroqStore: () =>
              suspend(
                () => _lazyGroqStore(),
                ["@sanity/preview-kit", "@sanity/groq-store"],
              ),
            preload: (e, t, r) =>
              suspend(
                () => _preloadQuery(e, t, r),
                [
                  "@sanity/preview-kit",
                  "preload",
                  t,
                  JSON.stringify(null != r ? r : {}),
                ],
              ),
            checkAuth: (e, t) =>
              suspend(
                () => _checkAuth(e, t),
                ["@sanity/preview-kit", "checkAuth", e, t],
              ),
          });
      function PreviewSuspense(e) {
        let { children: t, fallback: r } = e,
          [i, s] = (0, n.useReducer)(() => !0, !1);
        return (
          (0, n.useEffect)(s, [s]),
          (0, o.jsx)(n.Suspense, { fallback: r, children: i ? t : r })
        );
      }
    },
    61979: function (e, t, r) {
      "use strict";
      r.d(t, {
        J: function () {
          return useNextSanityImage;
        },
      });
      var n = r(6803),
        i = r(67294);
      let DEFAULT_IMAGE_BUILDER = (e, t) => {
        let r = e.quality(t.quality || 75).fit("clip");
        return null !== t.width ? r.width(t.width) : r;
      };
      function useNextSanityImage(e, t, r) {
        let o = (null == r ? void 0 : r.imageBuilder) || DEFAULT_IMAGE_BUILDER;
        return (0, i.useMemo)(() => {
          if (!t) return null;
          let r = t
            ? "string" == typeof t
              ? t
              : t.asset
                ? t.asset._ref || t.asset._id
                : t._ref || t._id || ""
            : null;
          if (!r) return null;
          let i = (function (e) {
              let t = e.split("-")[2],
                [r, n] = t.split("x").map((e) => parseInt(e, 10));
              return { width: r, height: n, aspectRatio: r / n };
            })(r),
            s = (function (e, t) {
              let r = e.crop;
              if (!r) return t;
              let { width: n, height: i } = t,
                o = n * (1 - (r.left + r.right)),
                s = i * (1 - (r.top + r.bottom));
              return { width: o, height: s, aspectRatio: o / s };
            })(t, i),
            a = o(n(e).image(t).auto("format"), {
              width: null,
              originalImageDimensions: i,
              croppedImageDimensions: s,
              quality: null,
            }),
            c =
              a.options.width ||
              (a.options.maxWidth
                ? Math.min(a.options.maxWidth, s.width)
                : s.width),
            u =
              a.options.height ||
              (a.options.maxHeight
                ? Math.min(a.options.maxHeight, s.height)
                : Math.round(c / s.aspectRatio));
          return {
            loader: (r) => {
              let { width: a, quality: c } = r;
              return (
                o(n(e).image(t).auto("format"), {
                  width: a,
                  originalImageDimensions: i,
                  croppedImageDimensions: s,
                  quality: c || null,
                }).url() || ""
              );
            },
            src: a.url(),
            width: c,
            height: u,
          };
        }, [o, t, e]);
      }
    },
  },
]);
