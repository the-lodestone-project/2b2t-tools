"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9142],
  {
    98814: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(84297);
      let o = (0, r.Z)("ChevronLeft", [
        ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
      ]);
    },
    64998: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(84297);
      let o = (0, r.Z)("ChevronRight", [
        ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
      ]);
    },
    67338: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(84297);
      let o = (0, r.Z)("Terminal", [
        ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
        ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
      ]);
    },
    55141: function (e, t, n) {
      n.d(t, {
        VY: function () {
          return ee;
        },
        ck: function () {
          return Q;
        },
        fC: function () {
          return J;
        },
        xz: function () {
          return X;
        },
      });
      var r = n(87462),
        o = n(67294),
        a = n.t(o, 2),
        l = n(24428);
      function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e) {
        let t = (0, o.useRef)(e);
        return (
          (0, o.useEffect)(() => {
            t.current = e;
          }),
          (0, o.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            [],
          )
        );
      }
      function $71cd76cc60e0454e$export$6f32135080cb4c3({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
      }) {
        let [r, a] = (function ({ defaultProp: e, onChange: t }) {
            let n = (0, o.useState)(e),
              [r] = n,
              a = (0, o.useRef)(r),
              l = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(t);
            return (
              (0, o.useEffect)(() => {
                a.current !== r && (l(r), (a.current = r));
              }, [r, a, l]),
              n
            );
          })({ defaultProp: t, onChange: n }),
          l = void 0 !== e,
          i = l ? e : r,
          u = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(n),
          c = (0, o.useCallback)(
            (t) => {
              if (l) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && u(n);
              } else a(t);
            },
            [l, e, a, u],
          );
        return [i, c];
      }
      var i = n(75320);
      function dist_$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e) {
        let t = (0, o.useRef)(e);
        return (
          (0, o.useEffect)(() => {
            t.current = e;
          }),
          (0, o.useMemo)(
            () =>
              (...e) => {
                var n;
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e);
              },
            [],
          )
        );
      }
      let u = (null == globalThis ? void 0 : globalThis.document)
        ? o.useLayoutEffect
        : () => {};
      function dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e) {
        return (0, o.useCallback)(
          (function (...e) {
            return (t) =>
              e.forEach((e) => {
                "function" == typeof e ? e(t) : null != e && (e.current = t);
              });
          })(...e),
          e,
        );
      }
      var c = n(73935);
      let $921a889cee6df7e8$export$99c2b779aa4e8b8b = (e) => {
        let { present: t, children: n } = e,
          r = (function (e) {
            var t;
            let [n, r] = (0, o.useState)(),
              a = (0, o.useRef)({}),
              l = (0, o.useRef)(e),
              i = (0, o.useRef)("none"),
              d = e ? "mounted" : "unmounted",
              [s, f] =
                ((t = {
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
                (0, o.useReducer)((e, n) => {
                  let r = t[e][n];
                  return null != r ? r : e;
                }, d));
            return (
              (0, o.useEffect)(() => {
                let e = $921a889cee6df7e8$var$getAnimationName(a.current);
                i.current = "mounted" === s ? e : "none";
              }, [s]),
              u(() => {
                let t = a.current,
                  n = l.current,
                  r = n !== e;
                if (r) {
                  let r = i.current,
                    o = $921a889cee6df7e8$var$getAnimationName(t);
                  e
                    ? f("MOUNT")
                    : "none" === o ||
                        (null == t ? void 0 : t.display) === "none"
                      ? f("UNMOUNT")
                      : n && r !== o
                        ? f("ANIMATION_OUT")
                        : f("UNMOUNT"),
                    (l.current = e);
                }
              }, [e, f]),
              u(() => {
                if (n) {
                  let handleAnimationEnd = (e) => {
                      let t = $921a889cee6df7e8$var$getAnimationName(a.current),
                        r = t.includes(e.animationName);
                      e.target === n &&
                        r &&
                        (0, c.flushSync)(() => f("ANIMATION_END"));
                    },
                    handleAnimationStart = (e) => {
                      e.target === n &&
                        (i.current = $921a889cee6df7e8$var$getAnimationName(
                          a.current,
                        ));
                    };
                  return (
                    n.addEventListener("animationstart", handleAnimationStart),
                    n.addEventListener("animationcancel", handleAnimationEnd),
                    n.addEventListener("animationend", handleAnimationEnd),
                    () => {
                      n.removeEventListener(
                        "animationstart",
                        handleAnimationStart,
                      ),
                        n.removeEventListener(
                          "animationcancel",
                          handleAnimationEnd,
                        ),
                        n.removeEventListener(
                          "animationend",
                          handleAnimationEnd,
                        );
                    }
                  );
                }
                f("ANIMATION_END");
              }, [n, f]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: (0, o.useCallback)((e) => {
                  e && (a.current = getComputedStyle(e)), r(e);
                }, []),
              }
            );
          })(t),
          a =
            "function" == typeof n
              ? n({ present: r.isPresent })
              : o.Children.only(n),
          l = dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(r.ref, a.ref),
          i = "function" == typeof n;
        return i || r.isPresent ? (0, o.cloneElement)(a, { ref: l }) : null;
      };
      function $921a889cee6df7e8$var$getAnimationName(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
      let d = a["useId".toString()] || (() => void 0),
        s = 0,
        f = "Collapsible",
        [p, m] = (function (e, t = []) {
          let n = [],
            createScope = () => {
              let t = n.map((e) => (0, o.createContext)(e));
              return function (n) {
                let r = (null == n ? void 0 : n[e]) || t;
                return (0, o.useMemo)(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r],
                );
              };
            };
          return (
            (createScope.scopeName = e),
            [
              function (t, r) {
                let a = (0, o.createContext)(r),
                  l = n.length;
                function Provider(t) {
                  let { scope: n, children: r, ...i } = t,
                    u = (null == n ? void 0 : n[e][l]) || a,
                    c = (0, o.useMemo)(() => i, Object.values(i));
                  return (0, o.createElement)(u.Provider, { value: c }, r);
                }
                return (
                  (n = [...n, r]),
                  (Provider.displayName = t + "Provider"),
                  [
                    Provider,
                    function (n, i) {
                      let u = (null == i ? void 0 : i[e][l]) || a,
                        c = (0, o.useContext)(u);
                      if (c) return c;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let createScope1 = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e),
                        a = o[`__scope${r}`];
                      return { ...t, ...a };
                    }, {});
                    return (0, o.useMemo)(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r],
                    );
                  };
                };
                return (createScope1.scopeName = t.scopeName), createScope1;
              })(createScope, ...t),
            ]
          );
        })(f),
        [v, b] = p(f),
        $ = (0, o.forwardRef)((e, t) => {
          let {
              __scopeCollapsible: n,
              open: a,
              defaultOpen: l,
              disabled: c,
              onOpenChange: f,
              ...p
            } = e,
            [m = !1, b] = (function ({
              prop: e,
              defaultProp: t,
              onChange: n = () => {},
            }) {
              let [r, a] = (function ({ defaultProp: e, onChange: t }) {
                  let n = (0, o.useState)(e),
                    [r] = n,
                    a = (0, o.useRef)(r),
                    l = dist_$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(t);
                  return (
                    (0, o.useEffect)(() => {
                      a.current !== r && (l(r), (a.current = r));
                    }, [r, a, l]),
                    n
                  );
                })({ defaultProp: t, onChange: n }),
                l = void 0 !== e,
                i = l ? e : r,
                u = dist_$b1b2314f5f9a1d84$export$25bec8c6f54ee79a(n),
                c = (0, o.useCallback)(
                  (t) => {
                    if (l) {
                      let n = "function" == typeof t ? t(e) : t;
                      n !== e && u(n);
                    } else a(t);
                  },
                  [l, e, a, u],
                );
              return [i, c];
            })({ prop: a, defaultProp: l, onChange: f });
          return (0, o.createElement)(
            v,
            {
              scope: n,
              disabled: c,
              contentId: (function (e) {
                let [t, n] = o.useState(d());
                return (
                  u(() => {
                    e || n((e) => (null != e ? e : String(s++)));
                  }, [e]),
                  e || (t ? `radix-${t}` : "")
                );
              })(),
              open: m,
              onOpenToggle: (0, o.useCallback)(() => b((e) => !e), [b]),
            },
            (0, o.createElement)(
              i.WV.div,
              (0, r.Z)(
                {
                  "data-state": $409067139f391064$var$getState(m),
                  "data-disabled": c ? "" : void 0,
                },
                p,
                { ref: t },
              ),
            ),
          );
        }),
        h = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, ...a } = e,
            l = b("CollapsibleTrigger", n);
          return (0, o.createElement)(
            i.WV.button,
            (0, r.Z)(
              {
                type: "button",
                "aria-controls": l.contentId,
                "aria-expanded": l.open || !1,
                "data-state": $409067139f391064$var$getState(l.open),
                "data-disabled": l.disabled ? "" : void 0,
                disabled: l.disabled,
              },
              a,
              {
                ref: t,
                onClick: (function (
                  e,
                  t,
                  { checkForDefaultPrevented: n = !0 } = {},
                ) {
                  return function (r) {
                    if ((null == e || e(r), !1 === n || !r.defaultPrevented))
                      return null == t ? void 0 : t(r);
                  };
                })(e.onClick, l.onOpenToggle),
              },
            ),
          );
        }),
        g = "CollapsibleContent",
        y = (0, o.forwardRef)((e, t) => {
          let { forceMount: n, ...a } = e,
            l = b(g, e.__scopeCollapsible);
          return (0, o.createElement)(
            $921a889cee6df7e8$export$99c2b779aa4e8b8b,
            { present: n || l.open },
            ({ present: e }) =>
              (0, o.createElement)(E, (0, r.Z)({}, a, { ref: t, present: e })),
          );
        }),
        E = (0, o.forwardRef)((e, t) => {
          let { __scopeCollapsible: n, present: a, children: l, ...c } = e,
            d = b(g, n),
            [s, f] = (0, o.useState)(a),
            p = (0, o.useRef)(null),
            m = dist_$6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, p),
            v = (0, o.useRef)(0),
            $ = v.current,
            h = (0, o.useRef)(0),
            y = h.current,
            E = d.open || s,
            A = (0, o.useRef)(E),
            N = (0, o.useRef)();
          return (
            (0, o.useEffect)(() => {
              let e = requestAnimationFrame(() => (A.current = !1));
              return () => cancelAnimationFrame(e);
            }, []),
            u(() => {
              let e = p.current;
              if (e) {
                (N.current = N.current || {
                  transitionDuration: e.style.transitionDuration,
                  animationName: e.style.animationName,
                }),
                  (e.style.transitionDuration = "0s"),
                  (e.style.animationName = "none");
                let t = e.getBoundingClientRect();
                (v.current = t.height),
                  (h.current = t.width),
                  A.current ||
                    ((e.style.transitionDuration =
                      N.current.transitionDuration),
                    (e.style.animationName = N.current.animationName)),
                  f(a);
              }
            }, [d.open, a]),
            (0, o.createElement)(
              i.WV.div,
              (0, r.Z)(
                {
                  "data-state": $409067139f391064$var$getState(d.open),
                  "data-disabled": d.disabled ? "" : void 0,
                  id: d.contentId,
                  hidden: !E,
                },
                c,
                {
                  ref: m,
                  style: {
                    "--radix-collapsible-content-height": $ ? `${$}px` : void 0,
                    "--radix-collapsible-content-width": y ? `${y}px` : void 0,
                    ...e.style,
                  },
                },
              ),
              E && l,
            )
          );
        });
      function $409067139f391064$var$getState(e) {
        return e ? "open" : "closed";
      }
      let A = (null == globalThis ? void 0 : globalThis.document)
          ? o.useLayoutEffect
          : () => {},
        N = a["useId".toString()] || (() => void 0),
        C = 0;
      var _ = n(78990);
      let x = "Accordion",
        S = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [w, I, P] = (0, l.B)(x),
        [k, R] = (function (e, t = []) {
          let n = [],
            createScope = () => {
              let t = n.map((e) => (0, o.createContext)(e));
              return function (n) {
                let r = (null == n ? void 0 : n[e]) || t;
                return (0, o.useMemo)(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r],
                );
              };
            };
          return (
            (createScope.scopeName = e),
            [
              function (t, r) {
                let a = (0, o.createContext)(r),
                  l = n.length;
                function Provider(t) {
                  let { scope: n, children: r, ...i } = t,
                    u = (null == n ? void 0 : n[e][l]) || a,
                    c = (0, o.useMemo)(() => i, Object.values(i));
                  return (0, o.createElement)(u.Provider, { value: c }, r);
                }
                return (
                  (n = [...n, r]),
                  (Provider.displayName = t + "Provider"),
                  [
                    Provider,
                    function (n, i) {
                      let u = (null == i ? void 0 : i[e][l]) || a,
                        c = (0, o.useContext)(u);
                      if (c) return c;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let createScope1 = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e),
                        a = o[`__scope${r}`];
                      return { ...t, ...a };
                    }, {});
                    return (0, o.useMemo)(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r],
                    );
                  };
                };
                return (createScope1.scopeName = t.scopeName), createScope1;
              })(createScope, ...t),
            ]
          );
        })(x, [P, m]),
        O = m(),
        T = o.forwardRef((e, t) => {
          let { type: n, ...a } = e;
          return o.createElement(
            w.Provider,
            { scope: e.__scopeAccordion },
            "multiple" === n
              ? o.createElement(V, (0, r.Z)({}, a, { ref: t }))
              : o.createElement(U, (0, r.Z)({}, a, { ref: t })),
          );
        });
      T.propTypes = {
        type(e) {
          let t = e.value || e.defaultValue;
          return e.type && !["single", "multiple"].includes(e.type)
            ? Error(
                "Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.",
              )
            : "multiple" === e.type && "string" == typeof t
              ? Error(
                  "Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.",
                )
              : "single" === e.type && Array.isArray(t)
                ? Error(
                    "Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.",
                  )
                : null;
        },
      };
      let [M, Z] = k(x),
        [D, L] = k(x, { collapsible: !1 }),
        U = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: a,
              onValueChange: l = () => {},
              collapsible: i = !1,
              ...u
            } = e,
            [c, d] = $71cd76cc60e0454e$export$6f32135080cb4c3({
              prop: n,
              defaultProp: a,
              onChange: l,
            });
          return o.createElement(
            M,
            {
              scope: e.__scopeAccordion,
              value: c ? [c] : [],
              onItemOpen: d,
              onItemClose: o.useCallback(() => i && d(""), [i, d]),
            },
            o.createElement(
              D,
              { scope: e.__scopeAccordion, collapsible: i },
              o.createElement(W, (0, r.Z)({}, u, { ref: t })),
            ),
          );
        }),
        V = o.forwardRef((e, t) => {
          let {
              value: n,
              defaultValue: a,
              onValueChange: l = () => {},
              ...i
            } = e,
            [u = [], c] = $71cd76cc60e0454e$export$6f32135080cb4c3({
              prop: n,
              defaultProp: a,
              onChange: l,
            }),
            d = o.useCallback((e) => c((t = []) => [...t, e]), [c]),
            s = o.useCallback(
              (e) => c((t = []) => t.filter((t) => t !== e)),
              [c],
            );
          return o.createElement(
            M,
            {
              scope: e.__scopeAccordion,
              value: u,
              onItemOpen: d,
              onItemClose: s,
            },
            o.createElement(
              D,
              { scope: e.__scopeAccordion, collapsible: !0 },
              o.createElement(W, (0, r.Z)({}, i, { ref: t })),
            ),
          );
        }),
        [q, G] = k(x),
        W = o.forwardRef((e, t) => {
          let {
              __scopeAccordion: n,
              disabled: a,
              dir: l,
              orientation: u = "vertical",
              ...c
            } = e,
            d = o.useRef(null),
            s = (function (...e) {
              return (0, o.useCallback)(
                (function (...e) {
                  return (t) =>
                    e.forEach((e) => {
                      "function" == typeof e
                        ? e(t)
                        : null != e && (e.current = t);
                    });
                })(...e),
                e,
              );
            })(d, t),
            f = I(n),
            p = (0, _.gm)(l),
            m = "ltr" === p,
            v = (function (e, t, { checkForDefaultPrevented: n = !0 } = {}) {
              return function (r) {
                if ((null == e || e(r), !1 === n || !r.defaultPrevented))
                  return null == t ? void 0 : t(r);
              };
            })(e.onKeyDown, (e) => {
              var t;
              if (!S.includes(e.key)) return;
              let n = e.target,
                r = f().filter((e) => {
                  var t;
                  return !(
                    null !== (t = e.ref.current) &&
                    void 0 !== t &&
                    t.disabled
                  );
                }),
                o = r.findIndex((e) => e.ref.current === n),
                a = r.length;
              if (-1 === o) return;
              e.preventDefault();
              let l = o,
                i = a - 1,
                moveNext = () => {
                  (l = o + 1) > i && (l = 0);
                },
                movePrev = () => {
                  (l = o - 1) < 0 && (l = i);
                };
              switch (e.key) {
                case "Home":
                  l = 0;
                  break;
                case "End":
                  l = i;
                  break;
                case "ArrowRight":
                  "horizontal" === u && (m ? moveNext() : movePrev());
                  break;
                case "ArrowDown":
                  "vertical" === u && moveNext();
                  break;
                case "ArrowLeft":
                  "horizontal" === u && (m ? movePrev() : moveNext());
                  break;
                case "ArrowUp":
                  "vertical" === u && movePrev();
              }
              let c = l % a;
              null === (t = r[c].ref.current) || void 0 === t || t.focus();
            });
          return o.createElement(
            q,
            { scope: n, disabled: a, direction: l, orientation: u },
            o.createElement(
              w.Slot,
              { scope: n },
              o.createElement(
                i.WV.div,
                (0, r.Z)({}, c, {
                  "data-orientation": u,
                  ref: s,
                  onKeyDown: a ? void 0 : v,
                }),
              ),
            ),
          );
        }),
        F = "AccordionItem",
        [z, j] = k(F),
        B = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, value: a, ...l } = e,
            i = G(F, n),
            u = Z(F, n),
            c = O(n),
            d = (function (e) {
              let [t, n] = o.useState(N());
              return (
                A(() => {
                  e || n((e) => (null != e ? e : String(C++)));
                }, [e]),
                e || (t ? `radix-${t}` : "")
              );
            })(),
            s = (a && u.value.includes(a)) || !1,
            f = i.disabled || e.disabled;
          return o.createElement(
            z,
            { scope: n, open: s, disabled: f, triggerId: d },
            o.createElement(
              $,
              (0, r.Z)(
                {
                  "data-orientation": i.orientation,
                  "data-state": (function (e) {
                    return e ? "open" : "closed";
                  })(s),
                },
                c,
                l,
                {
                  ref: t,
                  disabled: f,
                  open: s,
                  onOpenChange: (e) => {
                    e ? u.onItemOpen(a) : u.onItemClose(a);
                  },
                },
              ),
            ),
          );
        }),
        H = "AccordionTrigger",
        K = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...a } = e,
            l = G(x, n),
            i = j(H, n),
            u = L(H, n),
            c = O(n);
          return o.createElement(
            w.ItemSlot,
            { scope: n },
            o.createElement(
              h,
              (0, r.Z)(
                {
                  "aria-disabled": (i.open && !u.collapsible) || void 0,
                  "data-orientation": l.orientation,
                  id: i.triggerId,
                },
                c,
                a,
                { ref: t },
              ),
            ),
          );
        }),
        Y = o.forwardRef((e, t) => {
          let { __scopeAccordion: n, ...a } = e,
            l = G(x, n),
            i = j("AccordionContent", n),
            u = O(n);
          return o.createElement(
            y,
            (0, r.Z)(
              {
                role: "region",
                "aria-labelledby": i.triggerId,
                "data-orientation": l.orientation,
              },
              u,
              a,
              {
                ref: t,
                style: {
                  "--radix-accordion-content-height":
                    "var(--radix-collapsible-content-height)",
                  "--radix-accordion-content-width":
                    "var(--radix-collapsible-content-width)",
                  ...e.style,
                },
              },
            ),
          );
        }),
        J = T,
        Q = B,
        X = K,
        ee = Y;
    },
    13589: function (e, t, n) {
      n.d(t, {
        S: function () {
          return LayoutGroup;
        },
      });
      var r = n(67294),
        o = n(25364);
      let a = (0, r.createContext)(null);
      var l = n(6337);
      let notify = (e) => !e.isLayoutDirty && e.willUpdate(!1),
        shouldInheritGroup = (e) => !0 === e,
        shouldInheritId = (e) => shouldInheritGroup(!0 === e) || "id" === e,
        LayoutGroup = ({ children: e, id: t, inherit: n = !0 }) => {
          let i = (0, r.useContext)(o.p),
            u = (0, r.useContext)(a),
            [c, d] = (0, l.N)(),
            s = (0, r.useRef)(null),
            f = i.id || u;
          null === s.current &&
            (shouldInheritId(n) && f && (t = t ? f + "-" + t : f),
            (s.current = {
              id: t,
              group:
                (shouldInheritGroup(n) && i.group) ||
                (function () {
                  let e = new Set(),
                    t = new WeakMap(),
                    dirtyAll = () => e.forEach(notify);
                  return {
                    add: (n) => {
                      e.add(n),
                        t.set(n, n.addEventListener("willUpdate", dirtyAll));
                    },
                    remove: (n) => {
                      e.delete(n);
                      let r = t.get(n);
                      r && (r(), t.delete(n)), dirtyAll();
                    },
                    dirty: dirtyAll,
                  };
                })(),
            }));
          let p = (0, r.useMemo)(() => ({ ...s.current, forceRender: c }), [d]);
          return r.createElement(o.p.Provider, { value: p }, e);
        };
    },
    37301: function (e, t, n) {
      n.d(t, {
        I: function () {
          return resolveElements;
        },
      });
      var r = n(45487);
      function resolveElements(e, t, n) {
        var o;
        if ("string" == typeof e) {
          let a = document;
          t &&
            ((0, r.k)(!!t.current, "Scope provided, but no element detected."),
            (a = t.current)),
            n
              ? ((null !== (o = n[e]) && void 0 !== o) ||
                  (n[e] = a.querySelectorAll(e)),
                (e = n[e]))
              : (e = a.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
  },
]);
