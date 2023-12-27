(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7842],
  {
    25358: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return a;
        },
      });
      var n = r(84297);
      let a = (0, n.Z)("Cog", [
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
                  var n = Object.getOwnPropertyDescriptor(e, r);
                  Object.defineProperty(
                    t,
                    r,
                    n.get
                      ? n
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
        var n = { error: null },
          a = (function (e) {
            function ErrorBoundary() {
              for (var t, r = arguments.length, a = Array(r), o = 0; o < r; o++)
                a[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(a)) || this).state = n),
                (t.resetErrorBoundary = function () {
                  for (
                    var e, r = arguments.length, n = Array(r), a = 0;
                    a < r;
                    a++
                  )
                    n[a] = arguments[a];
                  null == t.props.onReset || (e = t.props).onReset.apply(e, n),
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
                this.setState(n);
              }),
              (t.componentDidCatch = function (e, t) {
                var r, n;
                null == (r = (n = this.props).onError) || r.call(n, e, t);
              }),
              (t.componentDidUpdate = function (e, t) {
                var r,
                  n,
                  a,
                  o,
                  l = this.state.error,
                  u = this.props.resetKeys;
                null !== l &&
                  null !== t.error &&
                  (void 0 === (r = e.resetKeys) && (r = []),
                  void 0 === (n = u) && (n = []),
                  r.length !== n.length ||
                    r.some(function (e, t) {
                      return !Object.is(e, n[t]);
                    })) &&
                  (null == (a = (o = this.props).onResetKeysChange) ||
                    a.call(o, e.resetKeys, u),
                  this.reset());
              }),
              (t.render = function () {
                var e = this.state.error,
                  t = this.props,
                  n = t.fallbackRender,
                  a = t.FallbackComponent,
                  o = t.fallback;
                if (null !== e) {
                  var l = {
                    error: e,
                    resetErrorBoundary: this.resetErrorBoundary,
                  };
                  if (r.isValidElement(o)) return o;
                  if ("function" == typeof n) return n(l);
                  if (a) return r.createElement(a, l);
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
              n = t[0],
              a = t[1];
            if (null != e) throw e;
            if (null != n) throw n;
            return a;
          }),
          (e.withErrorBoundary = function (e, t) {
            var Wrapped = function (n) {
                return r.createElement(a, t, r.createElement(e, n));
              },
              n = e.displayName || e.name || "Unknown";
            return (
              (Wrapped.displayName = "withErrorBoundary(" + n + ")"), Wrapped
            );
          }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      })(t, r(67294));
    },
    66354: function (e, t, r) {
      "use strict";
      r.d(t, {
        j: function () {
          return A;
        },
        n: function () {
          return createScopedAnimate;
        },
      });
      var n = r(37301),
        a = r(56955),
        o = r(45487);
      let GroupPlaybackControls = class GroupPlaybackControls {
        constructor(e) {
          this.animations = e.filter(Boolean);
        }
        then(e, t) {
          return Promise.all(this.animations).then(e).catch(t);
        }
        getAll(e) {
          return this.animations[0][e];
        }
        setAll(e, t) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][e] = t;
        }
        get timeline() {
          return this.getAll("timeline");
        }
        set timeline(e) {
          this.setAll("timeline", e);
        }
        get time() {
          return this.getAll("time");
        }
        set time(e) {
          this.setAll("time", e);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(e) {
          this.setAll("speed", e);
        }
        get duration() {
          let e = 0;
          for (let t = 0; t < this.animations.length; t++)
            e = Math.max(e, this.animations[t].duration);
          return e;
        }
        runAll(e) {
          this.animations.forEach((t) => t[e]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        stop() {
          this.runAll("stop");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      };
      var l = r(18254),
        u = r(75194),
        i = r(25794),
        s = r(34547),
        c = r(61059),
        f = r(85086),
        p = r(42284),
        h = r(86917),
        y = r(60599),
        d = r(26615),
        m = r(23967),
        g = r(40406);
      function calcNextTime(e, t, r, n) {
        var a;
        return "number" == typeof t
          ? t
          : t.startsWith("-") || t.startsWith("+")
            ? Math.max(0, e + parseFloat(t))
            : "<" === t
              ? r
              : null !== (a = n.get(t)) && void 0 !== a
                ? a
                : e;
      }
      let wrap = (e, t, r) => {
        let n = t - e;
        return ((((r - e) % n) + n) % n) + e;
      };
      var v = r(43338),
        b = r(10010),
        k = r(80022);
      function compareByTime(e, t) {
        return e.at !== t.at
          ? e.at - t.at
          : null === e.value
            ? 1
            : null === t.value
              ? -1
              : 0;
      }
      function getSubjectSequence(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e);
      }
      function getValueSequence(e, t) {
        return t[e] || (t[e] = []), t[e];
      }
      let isNumber = (e) => "number" == typeof e,
        isNumberKeyframesArray = (e) => e.every(isNumber);
      function animateElements(e, t, r, c) {
        let f = (0, n.I)(e, c),
          p = f.length;
        (0, o.k)(!!p, "No valid element provided.");
        let h = [];
        for (let e = 0; e < p; e++) {
          let n = f[e];
          a.R.has(n) ||
            (function (e) {
              let t = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                r = (0, u.v)(e)
                  ? new i.e(t, { enableHardwareAcceleration: !1 })
                  : new s.W(t, { enableHardwareAcceleration: !0 });
              r.mount(e), a.R.set(e, r);
            })(n);
          let o = a.R.get(n),
            c = { ...r };
          "function" == typeof c.delay && (c.delay = c.delay(e, p)),
            h.push(...(0, l.w)(o, { ...t, transition: c }, {}));
        }
        return new GroupPlaybackControls(h);
      }
      let isSequence = (e) => Array.isArray(e) && Array.isArray(e[0]),
        createScopedAnimate = (e) =>
          function (t, r, a) {
            let o;
            return (
              (o = isSequence(t)
                ? (function (e, t, r) {
                    let a = [],
                      o = (function (
                        e,
                        { defaultTransition: t = {}, ...r } = {},
                        a,
                      ) {
                        let o = t.duration || 0.3,
                          l = new Map(),
                          u = new Map(),
                          i = {},
                          s = new Map(),
                          c = 0,
                          A = 0,
                          E = 0;
                        for (let r = 0; r < e.length; r++) {
                          let l = e[r];
                          if ("string" == typeof l) {
                            s.set(l, A);
                            continue;
                          }
                          if (!Array.isArray(l)) {
                            s.set(l.name, calcNextTime(A, l.at, c, s));
                            continue;
                          }
                          let [m, w, S = {}] = l;
                          void 0 !== S.at && (A = calcNextTime(A, S.at, c, s));
                          let M = 0,
                            resolveValueSequence = (e, r, n, a = 0, l = 0) => {
                              let u = Array.isArray(e) ? e : [e],
                                {
                                  delay: i = 0,
                                  times: s = (0, y.Y)(u),
                                  type: c = "keyframes",
                                  ...m
                                } = r,
                                { ease: g = t.ease || "easeOut", duration: w } =
                                  r,
                                S = "function" == typeof i ? i(a, l) : i,
                                B = u.length;
                              if (B <= 2 && "spring" === c) {
                                let e = 100;
                                if (2 === B && isNumberKeyframesArray(u)) {
                                  let t = u[1] - u[0];
                                  e = Math.abs(t);
                                }
                                let t = { ...m };
                                void 0 !== w && (t.duration = (0, h.w)(w));
                                let r = (function (e, t = 100) {
                                  let r = (0, f.S)({ keyframes: [0, t], ...e }),
                                    n = Math.min((0, p.i)(r), p.E);
                                  return {
                                    type: "keyframes",
                                    ease: (e) => r.next(n * e).value / t,
                                    duration: (0, h.X)(n),
                                  };
                                })(t, e);
                                (g = r.ease), (w = r.duration);
                              }
                              null != w || (w = o);
                              let O = A + S,
                                _ = O + w;
                              1 === s.length && 0 === s[0] && (s[1] = 1);
                              let j = s.length - u.length;
                              j > 0 && (0, d.c)(s, j),
                                1 === u.length && u.unshift(null),
                                (function (e, t, r, n, a, o) {
                                  !(function (e, t, r) {
                                    for (let n = 0; n < e.length; n++) {
                                      let a = e[n];
                                      a.at > t &&
                                        a.at < r &&
                                        ((0, b.cl)(e, a), n--);
                                    }
                                  })(e, a, o);
                                  for (let u = 0; u < t.length; u++) {
                                    var l;
                                    e.push({
                                      value: t[u],
                                      at: (0, k.C)(a, o, n[u]),
                                      easing:
                                        ((l = u),
                                        (0, v.N)(r)
                                          ? r[wrap(0, r.length, l)]
                                          : r),
                                    });
                                  }
                                })(n, u, g, s, O, _),
                                (M = Math.max(S + w, M)),
                                (E = Math.max(_, E));
                            };
                          if ((0, g.i)(m)) {
                            let e = getSubjectSequence(m, u);
                            resolveValueSequence(
                              w,
                              S,
                              getValueSequence("default", e),
                            );
                          } else {
                            let e = (0, n.I)(m, a, i),
                              t = e.length;
                            for (let r = 0; r < t; r++) {
                              let n = e[r],
                                a = getSubjectSequence(n, u);
                              for (let e in w)
                                resolveValueSequence(
                                  w[e],
                                  S[e] ? { ...S, ...S[e] } : { ...S },
                                  getValueSequence(e, a),
                                  r,
                                  t,
                                );
                            }
                            (c = A), (A += M);
                          }
                        }
                        return (
                          u.forEach((e, n) => {
                            for (let a in e) {
                              let o = e[a];
                              o.sort(compareByTime);
                              let u = [],
                                i = [],
                                s = [];
                              for (let e = 0; e < o.length; e++) {
                                let { at: t, value: r, easing: n } = o[e];
                                u.push(r),
                                  i.push((0, m.Y)(0, E, t)),
                                  s.push(n || "easeOut");
                              }
                              0 !== i[0] &&
                                (i.unshift(0),
                                u.unshift(u[0]),
                                s.unshift("easeInOut")),
                                1 !== i[i.length - 1] &&
                                  (i.push(1), u.push(null)),
                                l.has(n) ||
                                  l.set(n, { keyframes: {}, transition: {} });
                              let c = l.get(n);
                              (c.keyframes[a] = u),
                                (c.transition[a] = {
                                  ...t,
                                  duration: E,
                                  ease: s,
                                  times: i,
                                  ...r,
                                });
                            }
                          }),
                          l
                        );
                      })(e, t, r);
                    return (
                      o.forEach(({ keyframes: e, transition: t }, r) => {
                        let n;
                        (n = (0, g.i)(r)
                          ? (0, c.D)(r, e.default, t.default)
                          : animateElements(r, e, t)),
                          a.push(n);
                      }),
                      new GroupPlaybackControls(a)
                    );
                  })(t, r, e)
                : "object" != typeof r || Array.isArray(r)
                  ? (0, c.D)(t, r, a)
                  : animateElements(t, r, a, e)),
              e && e.animations.push(o),
              o
            );
          },
        A = createScopedAnimate();
    },
    4960: function (e, t, r) {
      "use strict";
      r.d(t, {
        c: function () {
          return useMotionValue;
        },
      });
      var n = r(67294),
        a = r(33234),
        o = r(16014),
        l = r(96681);
      function useMotionValue(e) {
        let t = (0, l.h)(() => (0, a.B)(e)),
          { isStatic: r } = (0, n.useContext)(o._);
        if (r) {
          let [, r] = (0, n.useState)(e);
          (0, n.useEffect)(() => t.on("change", r), []);
        }
        return t;
      }
    },
  },
]);
