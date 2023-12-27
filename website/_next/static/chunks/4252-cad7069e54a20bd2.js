(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4252],
  {
    95433: function () {
      !(function () {
        "use strict";
        var t,
          e = "ListFormat" in Intl;
        function _defineProperties(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        var n = ["conjunction", "disjunction", "unit"],
          r = ["long", "short", "narrow"],
          o = ["lookup", "best fit"];
        function _typeof2(t) {
          return (_typeof2 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function _typeof(t) {
          return (_typeof =
            "function" == typeof Symbol &&
            "symbol" === _typeof2(Symbol.iterator)
              ? function (t) {
                  return _typeof2(t);
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : _typeof2(t);
                })(t);
        }
        function toObject(t) {
          if (null == t)
            throw TypeError(
              "Argument ".concat(t, " cannot be converted to an Object"),
            );
          return "boolean" == typeof t
            ? new Boolean(t)
            : "number" == typeof t
              ? new Number(t)
              : "string" == typeof t
                ? new String(t)
                : "symbol" === _typeof(t)
                  ? Object(t)
                  : t;
        }
        var a = new WeakMap(),
          l = { localeData: {}, availableLocales: [] };
        function setInternalSlot(t, e, n) {
          var r = a.get(t);
          null == r && ((r = Object.create(null)), a.set(t, r)), (r[e] = n);
        }
        function getInternalSlot(t, e) {
          var n = a.get(t);
          if (null == n)
            throw ReferenceError(
              "No internal slots has been allocated for the given instance of ListFormat",
            );
          return n[e];
        }
        function hasInternalSlot(t, e) {
          var n = a.get(t);
          return null != n && e in n;
        }
        var i = /-u(?:-[0-9a-z]{2,8})+/gi;
        function removeUnicodeExtensionSequences(t) {
          return t.replace(i, "");
        }
        function bestAvailableLocale(t, e) {
          for (var n = e; ; ) {
            if (t.includes(n)) return n;
            var r = n.lastIndexOf("-");
            if (-1 === r) return;
            r >= 2 && "-" === n.charAt(r - 2) && (r -= 2), (n = n.slice(0, r));
          }
        }
        function getOption(t, e, n, r, o) {
          var a = (function (t, e) {
            if ("object" !== _typeof(t))
              throw TypeError(
                "Given argument ".concat(t, " must be of type Object"),
              );
            if (!("string" == typeof e || "symbol" === _typeof(e)))
              throw TypeError(
                "Given argument ".concat(e, " must be a PropertyKey"),
              );
            return t[e];
          })(t, e);
          if (void 0 === a) return o;
          if ("boolean" !== n && "string" !== n)
            throw TypeError(
              "Expected type ".concat(n, " to be 'boolean' or 'string"),
            );
          if (
            ("boolean" === n && (a = !!a),
            "string" === n && (a += ""),
            void 0 !== r && !r.includes(a))
          )
            throw RangeError(
              "Value "
                .concat(a, " out of range for options property ")
                .concat(e),
            );
          return a;
        }
        function stringListFromIterable(t) {
          if (void 0 === t) return [];
          var e =
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = Array(t.length); e < t.length; e++)
                  n[e] = t[e];
                return n;
              }
            })(t) ||
            (function (t) {
              if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
              )
                return Array.from(t);
            })(t) ||
            (function () {
              throw TypeError(
                "Invalid attempt to spread non-iterable instance",
              );
            })();
          if (
            e.some(function (t) {
              return "string" != typeof t;
            })
          )
            throw TypeError("All List items must be strings");
          return e;
        }
        function deconstructPattern(t, e) {
          for (
            var n = [],
              r = String.prototype.indexOf.call(t, "{", 0),
              o = 0,
              a = t.length;
            void 0 !== t[r];

          ) {
            var l = String.prototype.indexOf.call(t, "}", r);
            if (l <= r)
              throw TypeError(
                "Expected endIndex: "
                  .concat(l, " to be greater than beginIndex: ")
                  .concat(r),
              );
            if (r > o) {
              var i = t.slice(o, r);
              n.push({ type: "literal", value: i });
            }
            var c = t.slice(r + 1, l);
            if (null == e[Number(c)])
              throw TypeError(
                "Expected placeables to have a part for PropertyKey: ".concat(
                  c,
                ),
              );
            var u = e[Number(c)];
            if (
              Array.isArray((p = u.value)) ||
              "[object Object]" === Object.prototype.toString.call(p)
            ) {
              var s = !0,
                f = !1,
                d = void 0;
              try {
                for (
                  var p, y, m = u.value[Symbol.iterator]();
                  !(s = (y = m.next()).done);
                  s = !0
                ) {
                  var v = y.value;
                  n.push(v);
                }
              } catch (t) {
                (f = !0), (d = t);
              } finally {
                try {
                  s || null == m.return || m.return();
                } finally {
                  if (f) throw d;
                }
              }
            } else n.push(u);
            (o = l + 1), (r = String.prototype.indexOf.call(t, "{", o));
          }
          if (o < a) {
            var b = t.slice(o, a);
            n.push({ type: "literal", value: b });
          }
          return n;
        }
        function createPartsFromList(t, e) {
          var n,
            r = e.length;
          if (0 === r) return [];
          if (2 === r)
            return deconstructPattern(getInternalSlot(t, "templatePair"), {
              0: { type: "element", value: e[0] },
              1: { type: "element", value: e[1] },
            });
          for (
            var o = [{ type: "element", value: e[r - 1] }], a = r - 2;
            a >= 0;

          )
            (o = deconstructPattern(
              0 === a
                ? getInternalSlot(t, "templateStart")
                : a < r - 2
                  ? getInternalSlot(t, "templateMiddle")
                  : getInternalSlot(t, "templateEnd"),
              {
                0: { type: "element", value: e[a] },
                1: { type: "element", value: o },
              },
            )),
              a--;
          return o;
        }
        var c = (function () {
          var e, a;
          function ListFormat() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw TypeError("Cannot call a class as a function");
            })(this, ListFormat);
            var e,
              a,
              c,
              u = arguments[0],
              s = arguments[1];
            if (
              (this instanceof ListFormat ? this.constructor : void 0) ===
              void 0
            )
              throw TypeError("Constructor Intl.ListFormat requires 'new'");
            var f = Intl.getCanonicalLocales(u);
            s = void 0 === s ? Object.create(null) : toObject(s);
            var d = Object.create(null),
              p = getOption(s, "localeMatcher", "string", o, "best fit");
            d.localeMatcher = p;
            var y = getOption(s, "type", "string", n, "conjunction");
            setInternalSlot(this, "type", y);
            var m = getOption(s, "style", "string", r, "long");
            setInternalSlot(this, "style", m);
            var v = l.localeData,
              b =
                ((e = l.availableLocales),
                (a = (d.localeMatcher,
                (function (e) {
                  var n = e.availableLocales,
                    r = e.requestedLocales,
                    o = Object.create(null),
                    a = !0,
                    l = !1,
                    c = void 0;
                  try {
                    for (
                      var u, s = r[Symbol.iterator]();
                      !(a = (u = s.next()).done);
                      a = !0
                    ) {
                      var f = u.value,
                        d = removeUnicodeExtensionSequences(f),
                        p = bestAvailableLocale(n, d);
                      if (void 0 !== p) {
                        if (((o.locale = p), f !== d)) {
                          var y = f.match(i);
                          o.extension = null == y ? "" : y[0];
                        }
                        return o;
                      }
                    }
                  } catch (t) {
                    (l = !0), (c = t);
                  } finally {
                    try {
                      a || null == s.return || s.return();
                    } finally {
                      if (l) throw c;
                    }
                  }
                  var m = (function () {
                    if (null == t)
                      throw ReferenceError(
                        "Could not determine locale: No default locale has been configured",
                      );
                    return t;
                  })();
                  return (o.locale = m), o;
                })({ availableLocales: e, requestedLocales: f })).locale),
                ((c = Object.create(null)).dataLocale = a),
                (c.locale = a),
                c),
              h = v[b.dataLocale].formats[y][m];
            setInternalSlot(this, "templatePair", h.Pair),
              setInternalSlot(this, "templateStart", h.Start),
              setInternalSlot(this, "templateMiddle", h.Middle),
              setInternalSlot(this, "templateEnd", h.End),
              setInternalSlot(this, "locale", b.locale),
              setInternalSlot(this, "initializedListFormat", this);
          }
          return (
            (e = [
              {
                key: "format",
                value: function (t) {
                  if (
                    !(this instanceof Object) ||
                    !hasInternalSlot(this, "initializedListFormat")
                  )
                    throw TypeError(
                      "Method Intl.ListFormat.prototype.format called on incompatible receiver ".concat(
                        this.toString(),
                      ),
                    );
                  return (function (t, e) {
                    var n = createPartsFromList(t, e),
                      r = "",
                      o = !0,
                      a = !1,
                      l = void 0;
                    try {
                      for (
                        var i, c = n[Symbol.iterator]();
                        !(o = (i = c.next()).done);
                        o = !0
                      ) {
                        var u = i.value;
                        r += u.value;
                      }
                    } catch (t) {
                      (a = !0), (l = t);
                    } finally {
                      try {
                        o || null == c.return || c.return();
                      } finally {
                        if (a) throw l;
                      }
                    }
                    return r;
                  })(this, stringListFromIterable(t));
                },
              },
              {
                key: "formatToParts",
                value: function (t) {
                  if (
                    !(this instanceof Object) ||
                    !hasInternalSlot(this, "initializedListFormat")
                  )
                    throw TypeError(
                      "Method Intl.ListFormat.prototype.formatToParts called on incompatible receiver ".concat(
                        this.toString(),
                      ),
                    );
                  return createPartsFromList(this, stringListFromIterable(t));
                },
              },
              {
                key: "resolvedOptions",
                value: function () {
                  if (
                    !(this instanceof Object) ||
                    !hasInternalSlot(this, "initializedListFormat")
                  )
                    throw TypeError(
                      "Method Intl.ListFormat.prototype.resolvedOptions called on incompatible receiver ".concat(
                        this.toString(),
                      ),
                    );
                  return {
                    locale: getInternalSlot(this, "locale"),
                    type: getInternalSlot(this, "type"),
                    style: getInternalSlot(this, "style"),
                  };
                },
              },
            ]),
            (a = [
              {
                key: "supportedLocalesOf",
                value: function (t) {
                  var e,
                    n,
                    r,
                    a = arguments[1];
                  return (
                    (e = l.availableLocales),
                    (n = Intl.getCanonicalLocales(t)),
                    void 0 !== (r = a) &&
                      getOption(
                        (r = toObject(r)),
                        "localeMatcher",
                        "string",
                        o,
                        "best fit",
                      ),
                    (function (t, e) {
                      var n = [],
                        r = !0,
                        o = !1,
                        a = void 0;
                      try {
                        for (
                          var l, i = e[Symbol.iterator]();
                          !(r = (l = i.next()).done);
                          r = !0
                        ) {
                          var c = l.value,
                            u = removeUnicodeExtensionSequences(c),
                            s = bestAvailableLocale(t, u);
                          void 0 !== s && n.push(c);
                        }
                      } catch (t) {
                        (o = !0), (a = t);
                      } finally {
                        try {
                          r || null == i.return || i.return();
                        } finally {
                          if (o) throw a;
                        }
                      }
                      return n;
                    })(e, n)
                  );
                },
              },
              {
                key: "__addLocaleData",
                value: function (e) {
                  var n = e.data,
                    r = e.locale;
                  null == t && (t = r),
                    (l.localeData[r] = n),
                    l.availableLocales.includes(r) ||
                      l.availableLocales.push(r);
                },
              },
            ]),
            e && _defineProperties(ListFormat.prototype, e),
            a && _defineProperties(ListFormat, a),
            ListFormat
          );
        })();
        Object.defineProperty(c.prototype, Symbol.toStringTag, {
          writable: !1,
          enumerable: !1,
          value: "Intl.ListFormat",
          configurable: !0,
        }),
          e ||
            (function () {
              if ("undefined" == typeof Intl)
                throw TypeError(
                  "Could not define Intl.ListFormat: Expected 'Intl' to exist. Remember to include polyfill for Intl.getCanonicalLocales before applying this polyfill",
                );
              Intl.ListFormat = c;
            })();
      })();
    },
    12047: function () {
      "__addLocaleData" in Intl.ListFormat &&
        Intl.ListFormat.__addLocaleData({
          locale: "en",
          data: {
            formats: {
              conjunction: {
                long: {
                  Pair: "{0} and {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, and {1}",
                },
                short: {
                  Pair: "{0} & {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, & {1}",
                },
                narrow: {
                  Pair: "{0}, {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, {1}",
                },
              },
              disjunction: {
                long: {
                  Pair: "{0} or {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, or {1}",
                },
                short: {
                  Pair: "{0} or {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, or {1}",
                },
                narrow: {
                  Pair: "{0} or {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, or {1}",
                },
              },
              unit: {
                long: {
                  Pair: "{0}, {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, {1}",
                },
                short: {
                  Pair: "{0}, {1}",
                  Start: "{0}, {1}",
                  Middle: "{0}, {1}",
                  End: "{0}, {1}",
                },
                narrow: {
                  Pair: "{0} {1}",
                  Start: "{0} {1}",
                  Middle: "{0} {1}",
                  End: "{0} {1}",
                },
              },
            },
          },
        });
    },
    32746: function (t, e, n) {
      t.exports.jsxRuntime = n(85893);
    },
    67373: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, {
          MDXContext: function () {
            return r.pC;
          },
          MDXProvider: function () {
            return r.Zo;
          },
          useMDXComponents: function () {
            return r.ah;
          },
          withMDXComponents: function () {
            return r.NF;
          },
        });
      var r = n(11151);
    },
    11151: function (t, e, n) {
      "use strict";
      n.d(e, {
        NF: function () {
          return withMDXComponents;
        },
        Zo: function () {
          return MDXProvider;
        },
        ah: function () {
          return useMDXComponents;
        },
        pC: function () {
          return o;
        },
      });
      var r = n(67294);
      let o = r.createContext({});
      function withMDXComponents(t) {
        return function (e) {
          let n = useMDXComponents(e.components);
          return r.createElement(t, { ...e, allComponents: n });
        };
      }
      function useMDXComponents(t) {
        let e = r.useContext(o);
        return r.useMemo(
          () => ("function" == typeof t ? t(e) : { ...e, ...t }),
          [e, t],
        );
      }
      let a = {};
      function MDXProvider({
        components: t,
        children: e,
        disableParentContext: n,
      }) {
        let l;
        return (
          (l = n
            ? "function" == typeof t
              ? t({})
              : t || a
            : useMDXComponents(t)),
          r.createElement(o.Provider, { value: l }, e)
        );
      }
    },
    49438: function (t, e, n) {
      "use strict";
      n.d(e, {
        R: function () {
          return MDXRemote;
        },
      });
      var r = n(67294),
        o = n(32746),
        a = n(67373),
        l = n(11151);
      function MDXRemote({
        compiledSource: t,
        frontmatter: e,
        scope: n,
        components: i = {},
        lazy: c,
      }) {
        let [u, s] = (0, r.useState)(!c || "undefined" == typeof window);
        (0, r.useEffect)(() => {
          if (c) {
            let t = window.requestIdleCallback(() => {
              s(!0);
            });
            return () => window.cancelIdleCallback(t);
          }
        }, []);
        let f = (0, r.useMemo)(() => {
          let r = Object.assign(
              { opts: { ...a, ...o.jsxRuntime } },
              { frontmatter: e },
              n,
            ),
            l = Object.keys(r),
            i = Object.values(r),
            c = Reflect.construct(Function, l.concat(`${t}`));
          return c.apply(c, i).default;
        }, [n, t]);
        if (!u)
          return r.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let d = r.createElement(
          l.Zo,
          { components: i },
          r.createElement(f, null),
        );
        return c ? r.createElement("div", null, d) : d;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (t) {
            var e = Date.now();
            return setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (t) {
            clearTimeout(t);
          }));
    },
  },
]);
