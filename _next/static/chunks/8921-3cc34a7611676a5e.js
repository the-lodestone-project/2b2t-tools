(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8921],
  {
    98814: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(84297);
      let a = (0, o.Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    25358: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(84297);
      let a = (0, o.Z)("Cog", [
        ["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }],
        ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M12 22v-2", key: "1osdcq" }],
        ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }],
        ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }],
        ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }],
        ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }],
        ["path", { d: "M14 12h8", key: "4f43i9" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }],
        ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }],
        ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }],
        ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }],
      ]);
    },
    33587: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(84297);
      let a = (0, o.Z)("Database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
      ]);
    },
    15662: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(84297);
      let a = (0, o.Z)("MousePointer", [
        [
          "path",
          { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z", key: "y2ucgo" },
        ],
        ["path", { d: "m13 13 6 6", key: "1nhxnf" }],
      ]);
    },
    41962: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(84297);
      let a = (0, o.Z)("Smartphone", [
        [
          "rect",
          {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3",
          },
        ],
        ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ]);
    },
    67338: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var o = r(84297);
      let a = (0, o.Z)("Terminal", [
        ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
        ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
      ]);
    },
    9008: function (e, t, r) {
      e.exports = r(79201);
    },
    35800: function (e, t, r) {
      !(function (e, t) {
        "use strict";
        var r = (function (e) {
          if (e && e.__esModule) return e;
          var t = Object.create(null);
          return (
            e &&
              Object.keys(e).forEach(function (r) {
                if ("default" !== r) {
                  var o = Object.getOwnPropertyDescriptor(e, r);
                  Object.defineProperty(
                    t,
                    r,
                    o.get
                      ? o
                      : {
                          enumerable: !0,
                          get: function () {
                            return e[r];
                          },
                        },
                  );
                }
              }),
            (t.default = e),
            Object.freeze(t)
          );
        })(t);
        function _setPrototypeOf(e, t) {
          return (_setPrototypeOf =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            })(e, t);
        }
        var o = { error: null },
          a = (function (e) {
            function ErrorBoundary() {
              for (var t, r = arguments.length, a = Array(r), i = 0; i < r; i++)
                a[i] = arguments[i];
              return (
                ((t = e.call.apply(e, [this].concat(a)) || this).state = o),
                (t.resetErrorBoundary = function () {
                  for (
                    var e, r = arguments.length, o = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  null == t.props.onReset || (e = t.props).onReset.apply(e, o),
                    t.reset();
                }),
                t
              );
            }
            (ErrorBoundary.prototype = Object.create(e.prototype)),
              (ErrorBoundary.prototype.constructor = ErrorBoundary),
              _setPrototypeOf(ErrorBoundary, e),
              (ErrorBoundary.getDerivedStateFromError = function (e) {
                return { error: e };
              });
            var t = ErrorBoundary.prototype;
            return (
              (t.reset = function () {
                this.setState(o);
              }),
              (t.componentDidCatch = function (e, t) {
                var r, o;
                null == (r = (o = this.props).onError) || r.call(o, e, t);
              }),
              (t.componentDidUpdate = function (e, t) {
                var r,
                  o,
                  a,
                  i,
                  u = this.state.error,
                  l = this.props.resetKeys;
                null !== u &&
                  null !== t.error &&
                  (void 0 === (r = e.resetKeys) && (r = []),
                  void 0 === (o = l) && (o = []),
                  r.length !== o.length ||
                    r.some(function (e, t) {
                      return !Object.is(e, o[t]);
                    })) &&
                  (null == (a = (i = this.props).onResetKeysChange) ||
                    a.call(i, e.resetKeys, l),
                  this.reset());
              }),
              (t.render = function () {
                var e = this.state.error,
                  t = this.props,
                  o = t.fallbackRender,
                  a = t.FallbackComponent,
                  i = t.fallback;
                if (null !== e) {
                  var u = {
                    error: e,
                    resetErrorBoundary: this.resetErrorBoundary,
                  };
                  if (r.isValidElement(i)) return i;
                  if ("function" == typeof o) return o(u);
                  if (a) return r.createElement(a, u);
                  throw Error(
                    "react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop",
                  );
                }
                return this.props.children;
              }),
              ErrorBoundary
            );
          })(r.Component);
        (e.ErrorBoundary = a),
          (e.useErrorHandler = function (e) {
            var t = r.useState(null),
              o = t[0],
              a = t[1];
            if (null != e) throw e;
            if (null != o) throw o;
            return a;
          }),
          (e.withErrorBoundary = function (e, t) {
            var Wrapped = function (o) {
                return r.createElement(a, t, r.createElement(e, o));
              },
              o = e.displayName || e.name || "Unknown";
            return (
              (Wrapped.displayName = "withErrorBoundary(" + o + ")"), Wrapped
            );
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, r(67294));
    },
    57178: function (e, t, r) {
      "use strict";
      r.d(t, {
        f: function () {
          return l;
        },
      });
      var o = r(87462),
        a = r(67294),
        i = r(75320);
      let u = (0, a.forwardRef)((e, t) => {
          let { ratio: r = 1, style: u, ...l } = e;
          return (0, a.createElement)(
            "div",
            {
              style: {
                position: "relative",
                width: "100%",
                paddingBottom: `${100 / r}%`,
              },
              "data-radix-aspect-ratio-wrapper": "",
            },
            (0, a.createElement)(
              i.WV.div,
              (0, o.Z)({}, l, {
                ref: t,
                style: {
                  ...u,
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
        l = u;
    },
    9849: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return B;
        },
      });
      var o,
        a = r(67294),
        i = r(62249),
        u =
          "u" > typeof globalThis
            ? globalThis
            : "u" > typeof window
              ? window
              : "u" > typeof global
                ? global
                : "u" > typeof self
                  ? self
                  : {},
        l = {},
        c = {};
      ({
        get exports() {
          return l;
        },
        set exports(n) {
          l = n;
        },
      }).exports = (function () {
        if (o) return c;
        o = 1;
        var e = Symbol.for("react.element"),
          t = Symbol.for("react.fragment"),
          r = Object.prototype.hasOwnProperty,
          i =
            a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = { key: !0, ref: !0, __self: !0, __source: !0 };
        function _(t, o, a) {
          var l,
            c = {},
            f = null,
            p = null;
          for (l in (void 0 !== a && (f = "" + a),
          void 0 !== o.key && (f = "" + o.key),
          void 0 !== o.ref && (p = o.ref),
          o))
            r.call(o, l) && !u.hasOwnProperty(l) && (c[l] = o[l]);
          if (t && t.defaultProps)
            for (l in (o = t.defaultProps)) void 0 === c[l] && (c[l] = o[l]);
          return {
            $$typeof: e,
            type: t,
            key: f,
            ref: p,
            props: c,
            _owner: i.current,
          };
        }
        return (c.Fragment = t), (c.jsx = _), (c.jsxs = _), c;
      })();
      let f = l.jsx;
      var p = 0 / 0,
        d = /^\s+|\s+$/g,
        h = /^[-+]0x[0-9a-f]+$/i,
        m = /^0b[01]+$/i,
        v = /^0o[0-7]+$/i,
        b = parseInt,
        w = "object" == typeof u && u && u.Object === Object && u,
        k = "object" == typeof self && self && self.Object === Object && self,
        E = w || k || Function("return this")(),
        g = Object.prototype.toString,
        O = Math.max,
        j = Math.min,
        ue = function () {
          return E.Date.now();
        };
      function le(e) {
        var t = typeof e;
        return !!e && ("object" == t || "function" == t);
      }
      function Le(e) {
        if ("number" == typeof e) return e;
        if (
          "symbol" == typeof (t = e) ||
          (t && "object" == typeof t && "[object Symbol]" == g.call(t))
        )
          return p;
        if (le(e)) {
          var t,
            r = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = le(r) ? r + "" : r;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var o = m.test(e);
        return o || v.test(e) ? b(e.slice(2), o ? 2 : 8) : h.test(e) ? p : +e;
      }
      var Lr = function (e, t, r) {
        var o,
          a,
          i,
          u,
          l,
          c,
          f = 0,
          p = !1,
          d = !1,
          h = !0;
        if ("function" != typeof e) throw TypeError("Expected a function");
        function C(t) {
          var r = o,
            i = a;
          return (o = a = void 0), (f = t), (u = e.apply(i, r));
        }
        function P(e) {
          var r = e - c,
            o = e - f;
          return void 0 === c || r >= t || r < 0 || (d && o >= i);
        }
        function y() {
          var e,
            r,
            o,
            a = ue();
          if (P(a)) return s(a);
          l = setTimeout(
            y,
            ((e = a - c), (r = a - f), (o = t - e), d ? j(o, i - r) : o),
          );
        }
        function s(e) {
          return (l = void 0), h && o ? C(e) : ((o = a = void 0), u);
        }
        function S() {
          var e,
            r = ue(),
            i = P(r);
          if (((o = arguments), (a = this), (c = r), i)) {
            if (void 0 === l)
              return (f = e = c), (l = setTimeout(y, t)), p ? C(e) : u;
            if (d) return (l = setTimeout(y, t)), C(c);
          }
          return void 0 === l && (l = setTimeout(y, t)), u;
        }
        return (
          (t = Le(t) || 0),
          le(r) &&
            ((p = !!r.leading),
            (i = (d = "maxWait" in r) ? O(Le(r.maxWait) || 0, t) : i),
            (h = "trailing" in r ? !!r.trailing : h)),
          (S.cancel = function () {
            void 0 !== l && clearTimeout(l), (f = 0), (o = c = a = l = void 0);
          }),
          (S.flush = function () {
            return void 0 === l ? u : s(ue());
          }),
          S
        );
      };
      let x = [],
        M = { width: "100%", height: "100%" },
        R = (0, a.forwardRef)(function (
          {
            className: e,
            children: t,
            debounceTime: r = 300,
            ignoreDimensions: o = x,
            parentSizeStyles: i,
            enableDebounceLeadingCall: u = !0,
            resizeObserverPolyfill: l,
            ...c
          },
          p,
        ) {
          var d;
          let h = (0, a.useRef)(null),
            m = (0, a.useRef)(0),
            [v, b] = (0, a.useState)({ width: 0, height: 0, top: 0, left: 0 }),
            w = (0, a.useMemo)(() => {
              let e = Array.isArray(o) ? o : [o];
              return Lr(
                (t) => {
                  b((r) =>
                    Object.keys(r)
                      .filter((e) => r[e] !== t[e])
                      .every((t) => e.includes(t))
                      ? r
                      : t,
                  );
                },
                r,
                { leading: u },
              );
            }, [r, u, o]);
          return (
            (0, a.useEffect)(() => {
              let e = l || window.ResizeObserver,
                t = new e((e) => {
                  e.forEach((e) => {
                    let {
                      left: t,
                      top: r,
                      width: o,
                      height: a,
                    } = (null == e ? void 0 : e.contentRect) ?? {};
                    m.current = window.requestAnimationFrame(() => {
                      w({ width: o, height: a, top: r, left: t });
                    });
                  });
                });
              return (
                h.current && t.observe(h.current),
                () => {
                  window.cancelAnimationFrame(m.current),
                    t.disconnect(),
                    w.cancel();
                }
              );
            }, [w, l]),
            f("div", {
              style: { ...M, ...i },
              ref:
                ((d = [p, h]),
                (e) => {
                  d.forEach((t) => {
                    "function" == typeof t
                      ? t(e)
                      : null != t && (t.current = e);
                  });
                }),
              className: e,
              ...c,
              children: t({ ...v, ref: h.current, resize: w }),
            })
          );
        }),
        B = (0, a.forwardRef)(
          (
            {
              scene: e,
              style: t,
              onMouseDown: r,
              onMouseUp: o,
              onMouseHover: u,
              onKeyDown: l,
              onKeyUp: c,
              onStart: p,
              onLookAt: d,
              onFollow: h,
              onWheel: m,
              onLoad: v,
              renderOnDemand: b = !0,
              ...w
            },
            k,
          ) => {
            let E = (0, a.useRef)(null),
              [g, O] = (0, a.useState)(!0);
            return (
              (0, a.useEffect)(() => {
                let t;
                O(!0);
                let a = [
                  { name: "mouseDown", cb: r },
                  { name: "mouseUp", cb: o },
                  { name: "mouseHover", cb: u },
                  { name: "keyDown", cb: l },
                  { name: "keyUp", cb: c },
                  { name: "start", cb: p },
                  { name: "lookAt", cb: d },
                  { name: "follow", cb: h },
                  { name: "scroll", cb: m },
                ];
                return (
                  E.current &&
                    ((t = new i.M(E.current, { renderOnDemand: b })),
                    (async function () {
                      for (let r of (await t.load(e), a))
                        r.cb && t.addEventListener(r.name, r.cb);
                      O(!1), null == v || v(t);
                    })()),
                  () => {
                    for (let e of a)
                      e.cb && t.removeEventListener(e.name, e.cb);
                    t.dispose();
                  }
                );
              }, [e]),
              f(R, {
                ref: k,
                parentSizeStyles: t,
                debounceTime: 50,
                ...w,
                children: () =>
                  f("canvas", {
                    ref: E,
                    style: { display: g ? "none" : "block" },
                  }),
              })
            );
          },
        );
    },
  },
]);
