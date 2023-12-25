(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5991],
  {
    5246: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(84297);
      let i = (0, r.Z)("Box", [
        [
          "path",
          {
            d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
            key: "hh9hay",
          },
        ],
        ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
        ["path", { d: "M12 22V12", key: "d0xqtd" }],
      ]);
    },
    6279: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(84297);
      let i = (0, r.Z)("Code2", [
        ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
        ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
        ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
      ]);
    },
    4844: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(84297);
      let i = (0, r.Z)("Globe", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        [
          "path",
          {
            d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
            key: "13o1zl",
          },
        ],
        ["path", { d: "M2 12h20", key: "9i4pu4" }],
      ]);
    },
    17836: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(84297);
      let i = (0, r.Z)("Hammer", [
        [
          "path",
          {
            d: "m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9",
            key: "1afvon",
          },
        ],
        ["path", { d: "M17.64 15 22 10.64", key: "zsji6s" }],
        [
          "path",
          {
            d: "m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91",
            key: "lehyy1",
          },
        ],
      ]);
    },
    8276: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/credentials",
        function () {
          return n(26662);
        },
      ]);
    },
    336: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return CalloutLink;
        },
      });
      var r = n(85893),
        i = n(74098),
        a = n(24057),
        o = n(67294),
        s = n(9737),
        l = n.n(s),
        c = n(94184),
        d = n.n(c);
      function CalloutLink(e) {
        let {
            href: t,
            hrefTitle: n,
            title: s,
            tagline: c,
            children: u,
            asset: h,
            className: _,
          } = e,
          p = (0, o.useRef)();
        return (0, r.jsx)(i.Z, {
          children: (0, r.jsxs)("div", {
            className: d()(l().container, _),
            onClick: () => {
              p.current.click();
            },
            children: [
              (0, r.jsxs)("div", {
                className: l().content,
                children: [
                  (0, r.jsx)("h6", { className: l().guidesLabel, children: c }),
                  (0, r.jsx)("h4", { className: l().title, children: s }),
                  (0, r.jsx)("p", { className: l().description, children: u }),
                  (0, r.jsx)(a.Z, { ref: p, href: t, children: n }),
                ],
              }),
              h,
            ],
          }),
        });
      }
    },
    75964: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return CodeTabs;
        },
      });
      var r = n(85893),
        i = n(94184),
        a = n.n(i),
        o = n(898),
        s = n.n(o);
      function CodeTabs(e) {
        let { tabs: t, onChange: n, value: i, className: o } = e,
          l = t.indexOf(i || t[0]);
        return (0, r.jsx)("div", {
          className: a()(s().container, o),
          children: (0, r.jsxs)("div", {
            className: s().tabs,
            children: [
              t.map((e, i) =>
                (0, r.jsx)(
                  "button",
                  {
                    className: a()(
                      s().tab,
                      l === i && s().active,
                      l + 1 === i && s().afterActive,
                      l - 1 === i && s().beforeActive,
                      0 === i && 0 !== l && s().firstActive,
                    ),
                    onClick: () => n && n(t[i]),
                    children: e,
                  },
                  e,
                ),
              ),
              (0, r.jsx)("div", {
                className: a()(
                  s().filler,
                  l === t.length - 1 && s().fillerAfterActive,
                ),
              }),
            ],
          }),
        });
      }
    },
    74098: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Container;
        },
      });
      var r = n(85893),
        i = n(94184),
        a = n.n(i),
        o = n(31555),
        s = n.n(o);
      function Container(e) {
        let { className: t, children: n, ...i } = e;
        return (0, r.jsx)("div", {
          className: a()(s().container, t),
          children: n,
        });
      }
    },
    24057: function (e, t, n) {
      "use strict";
      var r = n(85893),
        i = n(67294),
        a = n(68592),
        o = n.n(a);
      t.Z = (0, i.forwardRef)(function (e, t) {
        let { href: n, children: i } = e;
        return (0, r.jsxs)("a", {
          ref: t,
          className: o().learnMore,
          href: n,
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            i,
            (0, r.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "none",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              children: [
                (0, r.jsx)("path", {
                  className: o().chevronOne,
                  d: "M6 17L11 12 6 7",
                }),
                (0, r.jsx)("path", {
                  className: o().chevronTwo,
                  d: "M13 17L18 12 13 7",
                }),
              ],
            }),
          ],
        });
      });
    },
    97004: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Features;
        },
      });
      var r = n(85893),
        i = n(5152),
        a = n.n(i),
        o = n(91452),
        s = n.n(o),
        l = n(94184),
        c = n.n(l),
        d = n(61609);
      let u = a()(() => n.e(3531).then(n.bind(n, 3531)), {
        loadableGenerated: { webpack: () => [3531] },
        ssr: !1,
      });
      function Features(e) {
        let { heading: t, size: n, subheading: i, config: a, className: o } = e;
        return (0, r.jsx)("div", {
          className: c()(s().container, o),
          children: (0, r.jsxs)("div", {
            className: s().maxWidthWrapper,
            children: [
              (0, r.jsxs)("div", {
                className: s().heading,
                "data-size": n,
                children: [
                  (0, r.jsx)(d.Z, {
                    as: "h2",
                    width: "70%",
                    interactive: !0,
                    children: t,
                  }),
                  i &&
                    (0, r.jsx)("p", { className: s().subHeading, children: i }),
                ],
              }),
              (0, r.jsx)("div", {
                className: s().grid,
                children: a.map((e, t) => {
                  let { title: n, features: i } = e;
                  return (0, r.jsxs)(
                    "div",
                    {
                      children: [
                        n &&
                          (0, r.jsx)("div", {
                            className: s().titleContainer,
                            children: (0, r.jsx)(u, { children: n }),
                          }),
                        (0, r.jsx)("div", { className: s().divider }),
                        (0, r.jsx)("div", {
                          className: s().features,
                          children: i.map((e) => {
                            let { icon: t, title: n, description: i } = e;
                            return (0, r.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: s().featureTitle,
                                    children: [
                                      t,
                                      (0, r.jsx)("h5", { children: n }),
                                    ],
                                  }),
                                  (0, r.jsx)("p", { children: i }),
                                ],
                              },
                              n,
                            );
                          }),
                        }),
                      ],
                    },
                    n || t,
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    32494: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return GradientHero;
        },
      });
      var r = n(85893),
        i = n(18120),
        a = n.n(i);
      function GradientHero(e) {
        let { children: t, className: n } = e,
          i = [a().hero, n].filter(Boolean).join(" ");
        return (0, r.jsx)("div", {
          className: i,
          children: (0, r.jsx)("div", { className: a().gradient, children: t }),
        });
      }
    },
    62654: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Testimonials;
        },
      });
      var r = n(85893),
        i = n(92520),
        a = n(13589),
        o = n(11544),
        s = n(98814),
        l = n(64998),
        c = n(94184),
        d = n.n(c),
        u = n(67294),
        h = n(35182),
        _ = n.n(h);
      function Testimonials(e) {
        let { testimonailsConfig: t, rotationMap: n, logos: c, onClick: h } = e,
          [p, m] = (0, u.useState)(0),
          decrypt = () => {
            let e = document.getElementById(t[p].id),
              n = t[p].quote,
              r = n.split(""),
              i = 0;
            !(function animate() {
              setTimeout(() => {
                let t = e.children[i];
                (t.style.opacity = 1),
                  (t.innerHTML = r[i]),
                  ++i < n.length && animate();
              }, 10);
            })();
          };
        return (0, r.jsx)("div", {
          className: _().container,
          children: (0, r.jsxs)("div", {
            className: _().maxWidthWrapper,
            children: [
              (0, r.jsx)("div", {
                className: _().logosContainer,
                children: (0, r.jsx)(i.E.img, {
                  initial: !1,
                  animate: { rotate: n[p] },
                  src: c,
                  className: _().logosWheel,
                  transition: { duration: 1.5, ease: "anticipate" },
                }),
              }),
              (0, r.jsxs)(a.S, {
                children: [
                  (0, r.jsx)(o.M, {
                    mode: "wait",
                    children: t.map((e, t) => {
                      let { encryptedQuote: n, id: a } = e;
                      return t !== p
                        ? null
                        : (0, r.jsx)(
                            i.E.h3,
                            {
                              className: _().quote,
                              id: a,
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.5 },
                              onAnimationComplete: decrypt,
                              children: n
                                .split("")
                                .map((e, t) =>
                                  (0, r.jsx)(
                                    "span",
                                    { className: _().character, children: e },
                                    t + e,
                                  ),
                                ),
                            },
                            a,
                          );
                    }),
                  }),
                  (0, r.jsx)(i.E.div, {
                    className: _().authors,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: t.map((e, n) => {
                      let { author: i, title: a } = e;
                      return (0, r.jsxs)(
                        "button",
                        {
                          onClick: h || (() => m(n)),
                          className: d()(
                            _().author,
                            n === p && _().active,
                            1 === t.length && _().solo,
                          ),
                          children: [
                            i,
                            " ",
                            (0, r.jsx)("span", {
                              className: _().title,
                              children: a,
                            }),
                          ],
                        },
                        i,
                      );
                    }),
                  }),
                  (0, r.jsxs)(i.E.div, {
                    className: _().authorsMobile,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: [
                      (0, r.jsx)("button", {
                        className: _().mobileNavButton,
                        onClick: () => {
                          if (0 === p) return m(t.length - 1);
                          m((e) => e - 1);
                        },
                        "data-solo": 1 === t.length,
                        children: (0, r.jsx)(s.Z, {}),
                      }),
                      (0, r.jsxs)(
                        "button",
                        {
                          onClick: () => m(index),
                          className: _().mobileAuthor,
                          children: [
                            t[p].author,
                            " ",
                            (0, r.jsx)("span", {
                              className: _().title,
                              children: t[p].title,
                            }),
                          ],
                        },
                        t[p].author,
                      ),
                      (0, r.jsx)("button", {
                        className: _().mobileNavButton,
                        onClick: () => {
                          if (p === t.length - 1) return m(0);
                          m((e) => e + 1);
                        },
                        "data-solo": 1 === t.length,
                        children: (0, r.jsx)(l.Z, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    26662: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Credentials;
          },
        });
      var r = n(85893),
        i = n(91693),
        a = n(53756),
        o = n(60777),
        s = n(41766),
        l = n(66354),
        c = n(92520),
        d = n(11544),
        u = n(14025),
        h = n(4960),
        _ = n(67294),
        p = n(68592),
        m = n.n(p),
        OuterGlow = function (e) {
          let { className: t } = e;
          return (0, r.jsxs)("svg", {
            className: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: "600",
            height: "600",
            fill: "none",
            viewBox: "0 0 600 600",
            children: [
              (0, r.jsx)("path", {
                d: "M 300 0.5 A 299.5 299.5 0 0 1 599.5 300",
                stroke: "url(#gradient)",
                strokeLinecap: "round",
              }),
              (0, r.jsx)("defs", {
                children: (0, r.jsxs)("linearGradient", {
                  id: "gradient",
                  gradientTransform: "rotate(90)",
                  children: [
                    (0, r.jsx)("stop", {
                      offset: "40%",
                      stopOpacity: "0",
                      stopColor: "white",
                    }),
                    (0, r.jsx)("stop", {
                      offset: "100%",
                      stopOpacity: "1",
                      stopColor: "white",
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        v = n(32494),
        f = n(35800),
        g = n(37519);
      let y = 180 / Math.PI,
        x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");
      function Ring(e) {
        let { cipher: t, rotation: n } = e,
          [i, a] = (0, _.useState)(!1),
          handleMouseDown = (e) => {
            if (!t.allowUserInteraction) return;
            a(!0);
            let r = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
              i = e.pageX - r.x,
              o = e.pageY - r.y,
              s = y * Math.atan2(o, i) - n.get(),
              c = 0,
              d = !1,
              u = 0,
              h = { x: e.pageX, y: e.pageY },
              _ = h,
              p = setInterval(() => {
                let e = Math.abs(h.x - _.x),
                  t = Math.abs(h.y - _.y);
                (u = Math.sqrt(e * e + t + t)), (_ = h);
              }, 20),
              handleMouseMove = (e) => {
                e.preventDefault(), (h = { x: e.pageX, y: e.pageY });
                let t = e.pageX - r.x,
                  i = e.pageY - r.y;
                (c = y * Math.atan2(i, t) - s) <= 0 && (c = 360 + c),
                  (c %= 360),
                  (d = n.get() < c),
                  n.stop(),
                  n.set(c);
              },
              handleMouseUp = (e) => {
                e.preventDefault(), a(!1);
                let t = 4 * u,
                  r = d ? t : -t;
                clearInterval(p),
                  (0, l.j)(n, n.get(), {
                    velocity: r,
                    type: "inertia",
                    restDelta: 0.001,
                    modifyTarget: (e) => 10 * Math.round(e / 10),
                  }),
                  document.removeEventListener("mousemove", handleMouseMove),
                  document.removeEventListener("touchmove", handleMouseMove),
                  document.removeEventListener("mouseup", handleMouseUp),
                  document.removeEventListener("touchend", handleMouseUp);
              };
            document.addEventListener("mousemove", handleMouseMove),
              document.addEventListener("touchmove", handleMouseMove),
              document.addEventListener("mouseup", handleMouseUp),
              document.addEventListener("touchend", handleMouseUp);
          };
        return (0, r.jsxs)(c.E.div, {
          "data-dragging": i,
          className: m().ring,
          onTouchStart: (e) => handleMouseDown(e.nativeEvent),
          onMouseDown: handleMouseDown,
          style: { rotate: n },
          children: [
            (0, r.jsx)("div", { className: m().outer }),
            (0, r.jsx)("div", { className: m().inner }),
            x.map((e, n) =>
              (0, r.jsxs)(
                _.Fragment,
                {
                  children: [
                    (0, r.jsx)("div", {
                      className: m().slice,
                      style: { "--index": n },
                    }),
                    (0, r.jsx)("div", {
                      className: m().char,
                      "data-correct": t.isCorrect,
                      "data-cipher-key": n === t.cipherKey,
                      style: { "--index": n },
                      children: e,
                    }),
                  ],
                },
                e,
              ),
            ),
          ],
        });
      }
      function Dial() {
        return (0, r.jsxs)("div", {
          className: m().dial,
          children: [
            Array(180)
              .fill(0)
              .map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: m().tick,
                    "data-large": t % 5 == 0,
                    style: { "--index": t },
                  },
                  t,
                ),
              ),
            x.map((e, t) =>
              (0, r.jsx)(
                "div",
                {
                  className: m().dialChar,
                  "data-dot": 0 === t,
                  style: { "--index": t },
                  children: e,
                },
                e,
              ),
            ),
          ],
        });
      }
      function CipherWheel(e) {
        let { cipher: t, rotation: n } = e;
        return (0, r.jsxs)("div", {
          className: m().cipher,
          children: [
            (0, r.jsx)(d.M, {
              children:
                t.isCorrect &&
                (0, r.jsx)(c.E.div, {
                  className: m().cipherCorrect,
                  transition: { duration: 0.6 },
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                }),
            }),
            (0, r.jsx)(OuterGlow, { className: m().outerGlow }),
            (0, r.jsx)(OuterGlow, { className: m().innerGlow }),
            (0, r.jsx)(Ring, { cipher: t, rotation: n }),
            (0, r.jsx)(Dial, {}),
          ],
        });
      }
      function CredentialsHero() {
        let e = (0, h.c)(-350),
          t = (function (e, t) {
            let [n, r] = (0, _.useState)(!1),
              [i, a] = (0, _.useState)(0),
              [o, l] = (0, _.useState)(!1),
              c = (0, _.useMemo)(
                () => new s.Howl({ src: ["/audio/click.wav"], volume: 1 }),
                [],
              );
            (0, _.useEffect)(() => {
              o || i !== e || l(!0);
            }, [i]),
              (0, _.useEffect)(() => {
                if (n) return;
                let handleClick = () => r(!0);
                return (
                  document.addEventListener("mousedown", handleClick),
                  () => document.removeEventListener("mousedown", handleClick)
                );
              }, [n]),
              (0, _.useEffect)(() => {
                n && c.play();
              }, [i, n]),
              (0, u.W)(t, "change", (e) => {
                a(Math.abs(36 - Math.round(e / 10)) % 36);
              });
            let d = (0, _.useMemo)(
                () => x.map((t, n) => x[(n + e) % x.length]).join(""),
                [e],
              ),
              h = (0, _.useMemo)(
                () => x.map((e, t) => x[(t + i) % x.length]).join(""),
                [i],
              ),
              p = (0, _.useCallback)(
                (e) =>
                  e
                    .split("")
                    .map((e) => {
                      let t = h.indexOf(e.toUpperCase());
                      if (-1 === t) return e;
                      let n = e === e.toUpperCase(),
                        r = d[t];
                      return n ? r : null == r ? void 0 : r.toLowerCase();
                    })
                    .join(""),
                [i, d, h],
              ),
              m = (0, _.useMemo)(() => i === e, [i, e]);
            return {
              decrypt: p,
              cipherKey: e,
              isCorrect: m,
              setOffset: a,
              offset: i,
              allowUserInteraction: o,
            };
          })(31, e),
          { openSalesForm: n } = (0, _.useContext)(g.G),
          i = (0, _.useCallback)(() => {
            (0, l.j)(e, 0, {
              type: "inertia",
              restDelta: 0.1,
              timeConstant: 400,
              modifyTarget: () => 50,
            });
          }, []);
        return (
          (0, _.useEffect)(i, [i]),
          (0, r.jsx)(v.Z, {
            children: (0, r.jsxs)("div", {
              className: m().heroContent,
              onDoubleClick: i,
              children: [
                (0, r.jsx)(f.ErrorBoundary, {
                  fallback: (0, r.jsx)("div", {}),
                  children: (0, r.jsx)(CipherWheel, {
                    rotation: e,
                    offset: t.offset,
                    correctOffset: 5,
                    cipher: t,
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: m().heroCopy,
                  children: [
                    (0, r.jsx)("h1", {
                      className: m().title,
                      children: t.decrypt("Credentials"),
                    }),
                    (0, r.jsx)("p", {
                      className: m().subTitle,
                      children: t.decrypt(
                        "Securely encrypt and use third-party API secrets & credentials",
                      ),
                    }),
                    (0, r.jsx)(o.Z, {
                      size: "large",
                      onClick: () => n({ context: "Credentials — Hero" }),
                      children: t.decrypt("API docs"),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      var C = n(97004),
        j = n(39892),
        b = n(54463),
        w = n(17836),
        k = n(6279),
        N = n(5246),
        M = n(67884),
        T = n(84297);
      let E = (0, T.Z)("LogIn", [
          [
            "path",
            { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" },
          ],
          ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
          ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
        ]),
        A = [
          {
            title: "Built for Developers",
            features: [
              {
                icon: (0, r.jsx)(b.Z, { width: 16 }),
                title: "Store OAuth tokens safely",
                description:
                  "By encrypting OAuth tokens, you mitigate the risk of exposing your customers to a serious security breach.",
              },
              {
                icon: (0, r.jsx)(w.Z, { width: 16 }),
                title: "Build more integrations",
                description:
                  "With evervault, convincing your customers that you handle third-party integrations securely is easy.",
              },
              {
                icon: (0, r.jsx)(k.Z, { width: 16 }),
                title: "Minimal changes required",
                description:
                  "Credentials can be encrypted and decrypted using Outbound Relay, our invisible encryption proxy.",
              },
            ],
          },
          {
            title: "Effortless encryption",
            features: [
              {
                icon: (0, r.jsx)(N.Z, { width: 16 }),
                title: "Out-of-the-box support",
                description:
                  "There’s no need to re-architect software or deploy new services to use evervault, just configure your existing integration to encrypt credentials in just a few minutes.",
              },
              {
                icon: (0, r.jsx)(M.Z, { width: 16 }),
                title: "Audit logs",
                description:
                  "With evervault, all decryption operations are logged — so you can easily track how and when your sensitive credentials have been used.",
              },
              {
                icon: (0, r.jsx)(E, { width: 16 }),
                title: "Supports all auth standards",
                description:
                  "Encrypt any credentials that are sent or received from HTTPS APIs. Customers can encrypt OAuth tokens, Bearer Tokens, Basic Auth tokens and proprietary API keys.",
              },
            ],
          },
        ];
      var Z = n(62654),
        W = n(336);
      let S = [
        {
          quote:
            "evervault contributed to our security efforts and allowed us to sign larger, security-conscious customers.",
          encryptedQuote:
            "esbB/Ba8P mdjrihwnslf /R pYx n+3nfi=l dngw$jk f/s nif=wjd n= ag m/j= jqFknf, nv/fjd+=-jfAeN/jsd kdjfWker/.",
          author: "Karolis",
          title: "CTO - Humaans",
          id: "humaans-quote",
        },
      ];
      var L = n(75964),
        I = n(56190),
        B = n(77387);
      function GuidesCodeBlock() {
        return (0, r.jsxs)("div", {
          className: m().guidesCodeBlock,
          children: [
            (0, r.jsx)(L.Z, { tabs: ["server.js"] }),
            (0, r.jsx)(I.Z, {
              language: "javascript",
              style: B.Z,
              showLineNumbers: !0,
              wrapLines: !0,
              customStyle: { background: "transparent" },
              children:
                "const evervault = require('@evervault/sdk');\nconst evervault = new evervault('<API_KEY>');\nevervault.enableOutboundRelay();\n\n(async () => {\n	const ssn = await evervault.encrypt('123-4567-123');\n	const result = await axios.post(\"[YOUR_API]\", {\n		name: 'Claude Shannon',\n		ssn\n	});\n	console.log(result);\n})();\n",
            }),
          ],
        });
      }
      function Credentials() {
        return (0, r.jsxs)(j.Z, {
          title: "Credentials — evervault",
          description:
            "Securely encrypt and use third-party API secrets & credentials",
          socialImage: "https://evervault.com/social/credentials.jpg",
          children: [
            (0, r.jsx)(CredentialsHero, {}),
            (0, r.jsx)(a.aw, {}),
            (0, r.jsx)(W.Z, {
              asset: (0, r.jsx)(GuidesCodeBlock, {}),
              href: "https://docs.evervault.com/guides/access-tokens",
              hrefTitle: "Read Guide",
              tagline: "Developer Guides",
              title: "Encrypt Credentials with Outbound Relay",
              children:
                "With Outbound Relay, you can interact with third-party REST APIs without ever handling your customers’ sensitive access tokens in plaintext.",
            }),
            (0, r.jsx)(C.Z, {
              heading: "Securely integrate with third-party APIs",
              subheading:
                "With evervault, you can encrypt your users’ most sensitive credentials for third-party APIs without ever handling them in plaintext.",
              config: A,
            }),
            (0, r.jsx)(Z.Z, {
              testimonailsConfig: S,
              rotationMap: [0, 0],
              logos: "/images/logos/credentials-logoswheel.svg",
            }),
            (0, r.jsx)(i.Z, {
              heading: "Build secure API integrations",
              subheading:
                "Encrypt your third-party access tokens and secrets with evervault.",
              href: "https://app.evervault.com/register",
              cta: "Get Started",
            }),
          ],
        });
      }
    },
    77387: function (e, t) {
      "use strict";
      (t.Z = void 0),
        (t.Z = {
          'code[class*="language-"]': {
            color: "var(--grey-30)",
            background: "none",
            textShadow: "none",
            fontFamily:
              "var(--font-family-monospace), Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            fontSize: ".8em",
            textAlign: "left",
            whiteSpace: "pre",
            wordSpacing: "normal",
            wordBreak: "normal",
            wordWrap: "normal",
            lineHeight: "1.4",
            MozTabSize: "2",
            OTabSize: "2",
            tabSize: "2",
            WebkitHyphens: "none",
            MozHyphens: "none",
            msHyphens: "none",
            hyphens: "none",
          },
          'pre[class*="language-"]': {
            color: "var(--grey-20)",
            background: "var(--grey-100)",
            textShadow: "0 1px rgba(0, 0, 0, 0.3)",
            fontFamily:
              "var(--font-family-monospace), Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
            fontSize: ".95em",
            textAlign: "left",
            whiteSpace: "pre",
            wordSpacing: "normal",
            wordBreak: "normal",
            wordWrap: "normal",
            lineHeight: "1.4",
            MozTabSize: "2",
            OTabSize: "2",
            tabSize: "2",
            WebkitHyphens: "none",
            MozHyphens: "none",
            msHyphens: "none",
            hyphens: "none",
            padding: "1em",
            margin: "0",
            overflow: "auto",
            borderRadius: "0.3em",
          },
          ':not(pre) > code[class*="language-"]': {
            background: "#272822",
            padding: ".1em",
            borderRadius: ".3em",
            whiteSpace: "normal",
          },
          comment: { color: "var(--grey-60)" },
          prolog: { color: "var(--grey-60)" },
          doctype: { color: "var(--grey-60)" },
          cdata: { color: "var(--grey-60)" },
          namespace: { Opacity: ".7" },
          property: { color: "#f92672" },
          tag: { color: "#f92672" },
          constant: { color: "#f92672" },
          symbol: { color: "#f92672" },
          deleted: { color: "#f92672" },
          boolean: { color: "#7546F9" },
          number: { color: "#f8f8f2" },
          selector: { color: "#a6e22e" },
          "attr-name": { color: "#a6e22e" },
          string: { color: "var(--grey-50)" },
          char: { color: "#a6e22e" },
          builtin: { color: "#a6e22e" },
          inserted: { color: "#a6e22e" },
          operator: { color: "var(--grey-30)" },
          entity: { color: "#7546F9", cursor: "help" },
          url: { color: "#7546F9" },
          ".language-css .token.string": { color: "#7546F9" },
          ".style .token.string": { color: "#7546F9" },
          variable: { color: "#7546F9" },
          atrule: { color: "var(--primary-light)" },
          "attr-value": { color: "var(--primary-light)" },
          function: { color: "var(--primary-light)" },
          "class-name": { color: "var(--primary-light)" },
          keyword: { color: "#f92672" },
          regex: { color: "#fd971f" },
          important: { color: "#fd971f", fontWeight: "bold" },
          bold: { fontWeight: "bold" },
          italic: { fontStyle: "italic" },
        });
    },
    9737: function (e) {
      e.exports = {
        container: "CalloutLink_container__QZ6v8",
        guidesLabel: "CalloutLink_guidesLabel__B_WSN",
        title: "CalloutLink_title__U_XBy",
        description: "CalloutLink_description__iRb39",
      };
    },
    898: function (e) {
      e.exports = {
        container: "CodeTabs_container___fKbI",
        tabs: "CodeTabs_tabs__JW7qa",
        filler: "CodeTabs_filler__Dwp7Z",
        tab: "CodeTabs_tab__LO7L_",
        active: "CodeTabs_active__JXkR1",
        afterActive: "CodeTabs_afterActive__tesWW",
        beforeActive: "CodeTabs_beforeActive___mviz",
        fillerAfterActive: "CodeTabs_fillerAfterActive__vFWtt",
        firstActive: "CodeTabs_firstActive__pEGBw",
      };
    },
    31555: function (e) {
      e.exports = { container: "Container_container__0SGNv" };
    },
    68592: function (e) {
      e.exports = {
        heroContent: "Credentials_heroContent__SC60Q",
        fadeIn: "Credentials_fadeIn__0I5tQ",
        heroCopy: "Credentials_heroCopy___kPch",
        title: "Credentials_title__jZW6s",
        subTitle: "Credentials_subTitle__IglkR",
        heroButton: "Credentials_heroButton__Tlwb5",
        cipher: "Credentials_cipher__1K6fo",
        outerGlow: "Credentials_outerGlow__GqrVP",
        spin: "Credentials_spin__dx8Wg",
        innerGlow: "Credentials_innerGlow__ckKX7",
        cipherCorrect: "Credentials_cipherCorrect__U2ibq",
        ring: "Credentials_ring__f3DZt",
        inner: "Credentials_inner__ZOw85",
        width: "Credentials_width__33b95",
        outer: "Credentials_outer__3WIkD",
        char: "Credentials_char__A7KwD",
        slice: "Credentials_slice__753Q9",
        dial: "Credentials_dial__4AXQz",
        tick: "Credentials_tick___ZBXf",
        dialChar: "Credentials_dialChar__gj4w7",
        demo: "Credentials_demo__j8kKL",
        diagram: "Credentials_diagram__MMTkf",
        shift: "Credentials_shift__vtyS2",
        request: "Credentials_request___GRuW",
        encryptedRequest: "Credentials_encryptedRequest__Cjbr8",
        heading: "Credentials_heading__jLdkd",
        accordion: "Credentials_accordion__dgNp_",
        accordionItem: "Credentials_accordionItem__twnlL",
        accordionIndicator: "Credentials_accordionIndicator__LFe2u",
        accordionTrigger: "Credentials_accordionTrigger__lhu9e",
        accordionContent: "Credentials_accordionContent__FkQGh",
        slideOpen: "Credentials_slideOpen__23HtP",
        slideClosed: "Credentials_slideClosed__o_0zu",
        accordionText: "Credentials_accordionText__7b04A",
        accordionIcon: "Credentials_accordionIcon__tqe_Z",
        functions: "Credentials_functions__przq3",
        functionCall: "Credentials_functionCall__qkZB3",
        learnMore: "Credentials_learnMore__E8hvx",
        chevronOne: "Credentials_chevronOne__Wi4uo",
        chevronTwo: "Credentials_chevronTwo___M6Fe",
        glow: "Credentials_glow__sIz_w",
        guidesCodeBlock: "Credentials_guidesCodeBlock__uGePE",
      };
    },
    91452: function (e) {
      e.exports = {
        container: "Features_container__Cb2SR",
        maxWidthWrapper: "Features_maxWidthWrapper__hDSPE",
        heading: "Features_heading__0Kk_5",
        subHeading: "Features_subHeading__N7HnS",
        title: "Features_title__rPQTe",
        slide: "Features_slide__2BwyB",
        divider: "Features_divider__1WGjU",
        features: "Features_features__aEjtw",
        featureTitle: "Features_featureTitle__oyjT_",
        titleContainer: "Features_titleContainer__p9cmI",
      };
    },
    18120: function (e) {
      e.exports = {
        hero: "GradientHero_hero__XyNzf",
        gradient: "GradientHero_gradient___P5iQ",
      };
    },
    35182: function (e) {
      e.exports = {
        container: "Testimonials_container__6YNup",
        maxWidthWrapper: "Testimonials_maxWidthWrapper__qThI_",
        logosContainer: "Testimonials_logosContainer__89AxU",
        logosWheel: "Testimonials_logosWheel__UhyCV",
        quote: "Testimonials_quote__HOJXC",
        character: "Testimonials_character__XOkar",
        authors: "Testimonials_authors__Nm6XL",
        author: "Testimonials_author__8AteI",
        title: "Testimonials_title__5O5kn",
        active: "Testimonials_active__8e8fR",
        authorsMobile: "Testimonials_authorsMobile__hhKJP",
        mobileAuthor:
          "Testimonials_mobileAuthor__gqG_l Testimonials_active__8e8fR Testimonials_author__8AteI",
        mobileNavButton: "Testimonials_mobileNavButton__XH6Yj",
      };
    },
    14025: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return useMotionValueEvent;
        },
      });
      var r = n(67294);
      function useMotionValueEvent(e, t, n) {
        (0, r.useInsertionEffect)(() => e.on(t, n), [e, t, n]);
      }
    },
  },
  function (e) {
    e.O(
      0,
      [1140, 9142, 7842, 1766, 1044, 2670, 3756, 9774, 2888, 179],
      function () {
        return e((e.s = 8276));
      },
    ),
      (_N_E = e.O());
  },
]);
