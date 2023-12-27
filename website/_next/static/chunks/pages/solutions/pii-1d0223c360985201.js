(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5706],
  {
    53517: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(84297);
      let r = (0, a.Z)("Construction", [
        [
          "rect",
          { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" },
        ],
        ["path", { d: "M17 14v7", key: "7m2elx" }],
        ["path", { d: "M7 14v7", key: "1cm7wv" }],
        ["path", { d: "M17 3v3", key: "1v4jwn" }],
        ["path", { d: "M7 3v3", key: "7o6guu" }],
        ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
        ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
        ["path", { d: "m8 6 8 8", key: "hl96qh" }],
      ]);
    },
    23579: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(84297);
      let r = (0, a.Z)("ListPlus", [
        ["path", { d: "M11 12H3", key: "51ecnj" }],
        ["path", { d: "M16 6H3", key: "1wxfjs" }],
        ["path", { d: "M16 18H3", key: "12xzn7" }],
        ["path", { d: "M18 9v6", key: "1twb98" }],
        ["path", { d: "M21 12h-6", key: "bt1uis" }],
      ]);
    },
    39455: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(84297);
      let r = (0, a.Z)("Shield", [
        [
          "path",
          { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" },
        ],
      ]);
    },
    87966: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var a = n(84297);
      let r = (0, a.Z)("UserCheck", [
        [
          "path",
          { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
        ],
        ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
        ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
      ]);
    },
    84639: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/pii",
        function () {
          return n(38234);
        },
      ]);
    },
    74098: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Container;
        },
      });
      var a = n(85893),
        r = n(94184),
        i = n.n(r),
        l = n(31555),
        o = n.n(l);
      function Container(e) {
        let { className: t, children: n, ...r } = e;
        return (0, a.jsx)("div", {
          className: i()(o().container, t),
          children: n,
        });
      }
    },
    70406: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return Diagrams;
        },
      });
      var a = n(85893),
        r = n(55141),
        i = n(67294),
        l = n(26049),
        o = n.n(l),
        q = (0, i.forwardRef)(function (e, t) {
          let { href: n, children: r } = e;
          return (0, a.jsxs)("a", {
            ref: t,
            className: o().learnMore,
            href: n,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              r,
              (0, a.jsxs)("svg", {
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
                  (0, a.jsx)("path", {
                    className: o().chevronOne,
                    d: "M6 17L11 12 6 7",
                  }),
                  (0, a.jsx)("path", {
                    className: o().chevronTwo,
                    d: "M13 17L18 12 13 7",
                  }),
                ],
              }),
            ],
          });
        }),
        s = n(8971),
        c = n(94184),
        d = n.n(c);
      function Diagrams(e) {
        var t, n;
        let { diagrams: l, className: s } = e,
          [c, m] = (0, i.useState)(
            null === (t = l[0]) || void 0 === t ? void 0 : t.value,
          ),
          u =
            null === (n = l.find((e) => e.value === c)) || void 0 === n
              ? void 0
              : n.diagram;
        return (0, a.jsxs)("div", {
          className: d()(o().demo, s),
          children: [
            (0, a.jsx)(r.fC, {
              value: c,
              onValueChange: m,
              className: o().accordion,
              children: l.map((e) =>
                (0, a.jsxs)(
                  AccordionItem,
                  {
                    value: e.value,
                    icon: e.icon,
                    title: e.title,
                    children: [
                      (0, a.jsx)("p", { children: e.description }),
                      e.href &&
                        (0, a.jsx)(q, { href: e.href, children: "Learn more" }),
                    ],
                  },
                  e.value,
                ),
              ),
            }),
            (0, a.jsx)("div", { className: o().diagram, children: u }),
          ],
        });
      }
      function AccordionItem(e) {
        let { value: t, title: n, icon: i, children: l } = e;
        return (0, a.jsxs)(r.ck, {
          className: o().accordionItem,
          value: t,
          children: [
            (0, a.jsxs)(r.xz, {
              className: o().accordionTrigger,
              children: [
                (0, a.jsx)("div", {
                  className: o().accordionIcon,
                  children: i,
                }),
                n,
                (0, a.jsx)("div", {
                  className: o().accordionIndicator,
                  children: (0, a.jsx)(s.Z, {}),
                }),
              ],
            }),
            (0, a.jsx)(r.VY, {
              className: o().accordionContent,
              children: (0, a.jsx)("div", {
                className: o().accordionText,
                children: l,
              }),
            }),
          ],
        });
      }
    },
    97004: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Features;
        },
      });
      var a = n(85893),
        r = n(5152),
        i = n.n(r),
        l = n(91452),
        o = n.n(l),
        q = n(94184),
        s = n.n(q),
        c = n(61609);
      let d = i()(() => n.e(3531).then(n.bind(n, 3531)), {
        loadableGenerated: { webpack: () => [3531] },
        ssr: !1,
      });
      function Features(e) {
        let { heading: t, size: n, subheading: r, config: i, className: l } = e;
        return (0, a.jsx)("div", {
          className: s()(o().container, l),
          children: (0, a.jsxs)("div", {
            className: o().maxWidthWrapper,
            children: [
              (0, a.jsxs)("div", {
                className: o().heading,
                "data-size": n,
                children: [
                  (0, a.jsx)(c.Z, {
                    as: "h2",
                    width: "70%",
                    interactive: !0,
                    children: t,
                  }),
                  r &&
                    (0, a.jsx)("p", { className: o().subHeading, children: r }),
                ],
              }),
              (0, a.jsx)("div", {
                className: o().grid,
                children: i.map((e, t) => {
                  let { title: n, features: r } = e;
                  return (0, a.jsxs)(
                    "div",
                    {
                      children: [
                        n &&
                          (0, a.jsx)("div", {
                            className: o().titleContainer,
                            children: (0, a.jsx)(d, { children: n }),
                          }),
                        (0, a.jsx)("div", { className: o().divider }),
                        (0, a.jsx)("div", {
                          className: o().features,
                          children: r.map((e) => {
                            let { icon: t, title: n, description: r } = e;
                            return (0, a.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: o().featureTitle,
                                    children: [
                                      t,
                                      (0, a.jsx)("h5", { children: n }),
                                    ],
                                  }),
                                  (0, a.jsx)("p", { children: r }),
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
    3965: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return useEncryptedText;
        },
        s: function () {
          return useMounted;
        },
      });
      var a = n(67294),
        r = n(70010);
      function useMounted() {
        let [e, t] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
      function useEncryptedText(e) {
        let [t, n] = (0, a.useState)(""),
          i = (0, a.useCallback)(() => {
            n((0, r.D)(e));
          }, [e]);
        return (
          (0, a.useEffect)(() => {
            i();
          }, [i]),
          { text: t, generate: i }
        );
      }
    },
    70010: function (e, t, n) {
      "use strict";
      function generateRandomCharacters(e) {
        let t = "",
          n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+$#!",
          a = n.length;
        for (let r = 0; r < e; r++)
          t += n.charAt(Math.floor(Math.random() * a));
        return "%EVENC".concat(t);
      }
      function randomFloatBetween(e, t) {
        return Math.random() * (t - e) + e;
      }
      n.d(t, {
        D: function () {
          return generateRandomCharacters;
        },
        n: function () {
          return randomFloatBetween;
        },
      });
    },
    32494: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return GradientHero;
        },
      });
      var a = n(85893),
        r = n(18120),
        i = n.n(r);
      function GradientHero(e) {
        let { children: t, className: n } = e,
          r = [i().hero, n].filter(Boolean).join(" ");
        return (0, a.jsx)("div", {
          className: r,
          children: (0, a.jsx)("div", { className: i().gradient, children: t }),
        });
      }
    },
    55578: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return EncryptDiagram;
        },
      });
      var a = n(85893);
      n(50618), n(29405);
      var r = n(92628),
        i = n.n(r),
        l = n(56190),
        o = n(77387),
        q = n(92520);
      n(67294);
      var s = n(3965);
      let c = /^(.*\:\s")(.*)(\".*)$/;
      function randomChar() {
        let e =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return e[Math.floor(Math.random() * e.length)];
      }
      function EncryptedText(e) {
        let { value: t } = e,
          n = (0, s.s)();
        if (!n) return null;
        let r = t
            .split("")
            .map((e, t) =>
              (0, a.jsx)(
                q.E.span,
                {
                  animate: { opacity: [1, 0] },
                  transition: {
                    duration: 0.2,
                    delay: 0.04 * t,
                    repeat: 1 / 0,
                    repeatDelay: 3,
                    repeatType: "mirror",
                  },
                  children: e,
                },
                t,
              ),
            ),
          l = [
            "e",
            "v",
            ":",
            ...Array(t.length - 3)
              .fill(0)
              .map(randomChar),
          ].map((e, t) =>
            (0, a.jsx)(
              q.E.span,
              {
                animate: { opacity: [0, 1] },
                transition: {
                  duration: 0.2,
                  delay: 0.04 * t,
                  repeat: 1 / 0,
                  repeatDelay: 3,
                  repeatType: "mirror",
                },
                children: e,
              },
              t,
            ),
          );
        return (0, a.jsxs)("span", {
          className: i().value,
          children: [
            r,
            (0, a.jsx)("span", { className: i().encryptedValue, children: l }),
          ],
        });
      }
      function EncryptDiagram() {
        let e =
          '{\n  "id": "550e8400-e29b",\n  "name": "Thomas Cullen",\n  "telephone": "+353 1 234 5678",\n  "address": {\n    "street": "123 Fake Street",\n    "city": "Dublin",\n    "country": "Ireland",\n  }\n}'
            .split("\n")
            .map((e, t) => {
              let n = e.split(c),
                r = e.match(c);
              return r
                ? (0, a.jsxs)(
                    "div",
                    {
                      className: i().line,
                      children: [
                        r[1],
                        (0, a.jsx)(EncryptedText, { value: r[2] }),
                        n[3],
                      ],
                    },
                    t,
                  )
                : (0, a.jsx)("div", { className: i().line, children: e }, t);
            });
        return (0, a.jsxs)("div", {
          className: i().codeFrame,
          children: [
            (0, a.jsx)(q.E.div, {
              className: i().highlight,
              animate: { y: [21, 0] },
              transition: {
                duration: 0.2,
                repeat: 1 / 0,
                repeatType: "mirror",
                repeatDelay: 3,
              },
            }),
            (0, a.jsx)("div", {
              className: i().payload,
              children: (0, a.jsx)("pre", { children: e }),
            }),
            (0, a.jsx)("div", {
              className: i().code,
              children: (0, a.jsx)(l.Z, {
                language: "javascript",
                style: o.Z,
                showLineNumbers: !0,
                wrapLines: !0,
                customStyle: { background: "transparent" },
                children:
                  'const data = {...}\nconst evervault = new evervault("TEAM", "APP")\nconst encrypted = await evervault.encrypt(data);\nconst decrypted = await evervault.decrypt(data);',
              }),
            }),
          ],
        });
      }
    },
    83106: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return ProcessDiagram;
        },
      });
      var a = n(85893),
        r = n(92520),
        i = n(50618),
        l = n(29405),
        o = n(25358),
        q = n(28101),
        s = n(92628),
        c = n.n(s);
      function ProcessDiagram() {
        let e = (0, i.Z)("(min-width: 768px)");
        return (0, a.jsxs)(l.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, a.jsxs)(l.S.Nodes, {
              children: [
                (0, a.jsx)(l.S.Group, {
                  children: (0, a.jsx)(l.S.Node, {
                    id: "server",
                    children: (0, a.jsx)(l.S.Service, {
                      payload: {
                        key: "phone",
                        value: "ev:Tk9D",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, a.jsx)(l.S.Group, {
                  children: (0, a.jsxs)("div", {
                    className: c().functions,
                    children: [
                      (0, a.jsx)(r.E.div, {
                        className: c().functionCall,
                        transition: {
                          duration: 1,
                          delay: 1.5,
                          repeatDelay: 3,
                          repeat: 1 / 0,
                        },
                        animate: {
                          y: [20, 0, 0, 0],
                          opacity: [0, 1, 1, 0],
                          rotate: [0, 0, 360, 360],
                          scale: [0.6, 1, 1, 0.6],
                        },
                        children: (0, a.jsx)(o.Z, {}),
                      }),
                      (0, a.jsx)(l.S.Node, {
                        id: "functions",
                        children: (0, a.jsx)(l.S.Service, {
                          icon: (0, a.jsx)(q.Z, {}),
                          glow: !0,
                          children: "Functions",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(l.S.Group, {
                  children: (0, a.jsx)(l.S.Node, {
                    id: "api",
                    children: (0, a.jsx)(l.S.Service, {
                      payload: { key: "isValid", value: "true" },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(l.S.Connection, {
              nodes: ["server", "functions"],
              children: (0, a.jsx)(l.S.Request, {
                delay: 0,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeIn",
              }),
            }),
            (0, a.jsx)(l.S.Connection, {
              nodes: ["functions", "api"],
              children: (0, a.jsx)(l.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeOut",
                delay: 3,
              }),
            }),
          ],
        });
      }
    },
    45509: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return RelayDiagram;
        },
      });
      var a = n(85893),
        r = n(50618),
        i = n(29405),
        l = n(41962),
        o = n(67338);
      function RelayDiagram() {
        let e = (0, r.Z)("(min-width: 768px)");
        return (0, a.jsxs)(i.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, a.jsxs)(i.S.Nodes, {
              children: [
                (0, a.jsx)(i.S.Group, {
                  children: (0, a.jsx)(i.S.Node, {
                    id: "client",
                    children: (0, a.jsx)(i.S.Service, {
                      icon: (0, a.jsx)(l.Z, {}),
                      payload: { key: "name", value: "Thomas" },
                      children: "Client",
                    }),
                  }),
                }),
                (0, a.jsx)(i.S.Group, {
                  children: (0, a.jsx)(i.S.Node, {
                    id: "relay",
                    children: (0, a.jsx)(i.S.Service, {
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, a.jsx)(i.S.Group, {
                  children: (0, a.jsx)(i.S.Node, {
                    id: "server",
                    children: (0, a.jsx)(i.S.Service, {
                      icon: (0, a.jsx)(o.Z, {}),
                      payload: {
                        key: "name",
                        value: "ev:TkDnO",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(i.S.Connection, {
              nodes: ["client", "relay"],
              children: (0, a.jsx)(i.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, a.jsx)(i.S.Connection, {
              nodes: ["relay", "server"],
              children: (0, a.jsx)(i.S.Request, {
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
    },
    87626: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return ShareDiagram;
        },
      });
      var a = n(85893),
        r = n(50618),
        i = n(29405),
        l = n(33587);
      function ShareDiagram() {
        let e = (0, r.Z)("(min-width: 768px)");
        return (0, a.jsxs)(i.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, a.jsxs)(i.S.Nodes, {
              children: [
                (0, a.jsx)(i.S.Group, {
                  children: (0, a.jsx)(i.S.Node, {
                    id: "file",
                    children: (0, a.jsx)(i.S.Service, {
                      icon: (0, a.jsx)(l.Z, {}),
                      payload: {
                        key: "name",
                        value: "ev:TkDnO",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, a.jsx)(i.S.Group, {
                  children: (0, a.jsx)(i.S.Node, {
                    id: "relay",
                    children: (0, a.jsx)(i.S.Service, {
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, a.jsx)(i.S.Group, {
                  children: (0, a.jsx)(i.S.Node, {
                    id: "thirdparty",
                    children: (0, a.jsx)(i.S.Service, {
                      payload: { key: "name", value: "Thomas" },
                      children: "Third Party API",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(i.S.Connection, {
              nodes: ["file", "relay"],
              children: (0, a.jsx)(i.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, a.jsx)(i.S.Connection, {
              nodes: ["relay", "thirdparty"],
              children: (0, a.jsx)(i.S.Request, {
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
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
      var a = n(85893),
        r = n(92520),
        i = n(13589),
        l = n(11544),
        o = n(98814),
        q = n(64998),
        s = n(94184),
        c = n.n(s),
        d = n(67294),
        m = n(35182),
        u = n.n(m);
      function Testimonials(e) {
        let { testimonailsConfig: t, rotationMap: n, logos: s, onClick: m } = e,
          [h, x] = (0, d.useState)(0),
          decrypt = () => {
            let e = document.getElementById(t[h].id),
              n = t[h].quote,
              a = n.split(""),
              r = 0;
            !(function animate() {
              setTimeout(() => {
                let t = e.children[r];
                (t.style.opacity = 1),
                  (t.innerHTML = a[r]),
                  ++r < n.length && animate();
              }, 10);
            })();
          };
        return (0, a.jsx)("div", {
          className: u().container,
          children: (0, a.jsxs)("div", {
            className: u().maxWidthWrapper,
            children: [
              (0, a.jsx)("div", {
                className: u().logosContainer,
                children: (0, a.jsx)(r.E.img, {
                  initial: !1,
                  animate: { rotate: n[h] },
                  src: s,
                  className: u().logosWheel,
                  transition: { duration: 1.5, ease: "anticipate" },
                }),
              }),
              (0, a.jsxs)(i.S, {
                children: [
                  (0, a.jsx)(l.M, {
                    mode: "wait",
                    children: t.map((e, t) => {
                      let { encryptedQuote: n, id: i } = e;
                      return t !== h
                        ? null
                        : (0, a.jsx)(
                            r.E.h3,
                            {
                              className: u().quote,
                              id: i,
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.5 },
                              onAnimationComplete: decrypt,
                              children: n
                                .split("")
                                .map((e, t) =>
                                  (0, a.jsx)(
                                    "span",
                                    { className: u().character, children: e },
                                    t + e,
                                  ),
                                ),
                            },
                            i,
                          );
                    }),
                  }),
                  (0, a.jsx)(r.E.div, {
                    className: u().authors,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: t.map((e, n) => {
                      let { author: r, title: i } = e;
                      return (0, a.jsxs)(
                        "button",
                        {
                          onClick: m || (() => x(n)),
                          className: c()(
                            u().author,
                            n === h && u().active,
                            1 === t.length && u().solo,
                          ),
                          children: [
                            r,
                            " ",
                            (0, a.jsx)("span", {
                              className: u().title,
                              children: i,
                            }),
                          ],
                        },
                        r,
                      );
                    }),
                  }),
                  (0, a.jsxs)(r.E.div, {
                    className: u().authorsMobile,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: [
                      (0, a.jsx)("button", {
                        className: u().mobileNavButton,
                        onClick: () => {
                          if (0 === h) return x(t.length - 1);
                          x((e) => e - 1);
                        },
                        "data-solo": 1 === t.length,
                        children: (0, a.jsx)(o.Z, {}),
                      }),
                      (0, a.jsxs)(
                        "button",
                        {
                          onClick: () => x(index),
                          className: u().mobileAuthor,
                          children: [
                            t[h].author,
                            " ",
                            (0, a.jsx)("span", {
                              className: u().title,
                              children: t[h].title,
                            }),
                          ],
                        },
                        t[h].author,
                      ),
                      (0, a.jsx)("button", {
                        className: u().mobileNavButton,
                        onClick: () => {
                          if (h === t.length - 1) return x(0);
                          x((e) => e + 1);
                        },
                        "data-solo": 1 === t.length,
                        children: (0, a.jsx)(q.Z, {}),
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
    38234: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return pii_PII;
          },
        });
      var a = n(85893),
        r = n(91693),
        i = n(32494),
        l = n(61609),
        o = n(74098),
        q = n(60777),
        s = n(4587),
        c = n.n(s),
        d = n(67294),
        m = n(3965),
        u = n(60279),
        h = n.n(u);
      let x = "MENU",
        p = "PLAYING",
        v = "GAME_OVER",
        f = (0, d.createContext)(),
        useGame = () => (0, d.useContext)(f),
        y = (0, d.createRef)(0),
        useGameState = () => {
          let e = (function () {
              let e = (0, d.useRef)({
                up: !1,
                down: !1,
                left: !1,
                right: !1,
                shoot: !1,
                shift: !1,
              });
              return (
                (0, d.useEffect)(() => {
                  let handleKeyDown = (t) => {
                      "Shift" === t.key &&
                        (t.preventDefault(), (e.current.shift = !0)),
                        ["ArrowUp", "w", "W"].includes(t.key) &&
                          (t.preventDefault(), (e.current.up = !0)),
                        ["ArrowDown", "s", "S"].includes(t.key) &&
                          (t.preventDefault(), (e.current.down = !0)),
                        ["ArrowLeft", "a", "A"].includes(t.key) &&
                          (t.preventDefault(), (e.current.left = !0)),
                        ["ArrowRight", "d", "D"].includes(t.key) &&
                          (t.preventDefault(), (e.current.right = !0)),
                        [" "].includes(t.key) &&
                          (t.preventDefault(), (e.current.shoot = !0));
                    },
                    handleKeyUp = (t) => {
                      "Shift" === t.key &&
                        (t.preventDefault(), (e.current.shift = !1)),
                        ["ArrowUp", "w", "W"].includes(t.key) &&
                          (t.preventDefault(), (e.current.up = !1)),
                        ["ArrowDown", "s", "S"].includes(t.key) &&
                          (t.preventDefault(), (e.current.down = !1)),
                        ["ArrowLeft", "a", "A"].includes(t.key) &&
                          (t.preventDefault(), (e.current.left = !1)),
                        ["ArrowRight", "d", "D"].includes(t.key) &&
                          (t.preventDefault(), (e.current.right = !1)),
                        [" "].includes(t.key) &&
                          (t.preventDefault(), (e.current.shoot = !1));
                    },
                    handleJoyStick = (t) => {
                      let { up: n, down: a, left: r, right: i } = t.detail;
                      (e.current.up = n),
                        (e.current.down = a),
                        (e.current.left = r),
                        (e.current.right = i);
                    },
                    handleCustomEvent = (t) => {
                      Object.keys(t.detail).forEach((n) => {
                        e.current[n] = t.detail[n];
                      });
                    };
                  return (
                    window.addEventListener("CONTROLS", handleCustomEvent),
                    window.addEventListener("JOYSTICK", handleJoyStick),
                    window.addEventListener("keydown", handleKeyDown),
                    window.addEventListener("keyup", handleKeyUp),
                    () => {
                      window.removeEventListener("CONTROLS", handleCustomEvent),
                        window.removeEventListener("JOYSTICK", handleJoyStick),
                        window.removeEventListener("keydown", handleKeyDown),
                        window.removeEventListener("keyup", handleKeyUp);
                    }
                  );
                }, []),
                e
              );
            })(),
            [t, n] = (0, d.useState)(0),
            [a, r] = (0, d.useState)(x),
            i = (0, d.useCallback)(() => {
              n(0), r(p), (y.current = 0);
            }, []);
          return (
            (0, d.useEffect)(() => {
              let handleBulletHit = () => {
                  n((e) => e + 10), (y.current += 1);
                },
                handleGameOver = () => {
                  r(v);
                };
              return (
                window.addEventListener("BULLET_HIT", handleBulletHit),
                window.addEventListener("GAME_OVER", handleGameOver),
                () => {
                  window.removeEventListener("BULLET_HIT", handleBulletHit),
                    window.removeEventListener("GAME_OVER", handleGameOver);
                }
              );
            }, []),
            {
              score: t,
              play: i,
              setScore: n,
              stage: a,
              setStage: r,
              controls: e,
            }
          );
        };
      var _ = n(41766),
        g = n(15029),
        j = n(88849),
        w = n(99477),
        E = n(38715),
        S = n(69542);
      let b = new _.Howl({ src: ["/audio/pii/lazer.mp3"], volume: 3 });
      function Bullets() {
        let e = (0, d.useRef)(!1),
          { controls: t } = useGameState(),
          [n, r] = (0, d.useState)([]),
          shoot = () => {
            b.play();
            let e = $.current.position;
            (e.z = 0),
              r((t) => [
                ...t,
                { id: "".concat("bullet", "_").concat((0, S.DO)()), pos: e },
              ]);
          };
        return (
          (0, d.useEffect)(() => {
            let removeBullet = (e) => {
              let { detail: t } = e,
                { id: n } = t;
              r((e) => e.filter((e) => e.id !== n));
            };
            return (
              window.addEventListener("BULLET_HIT", removeBullet),
              window.addEventListener("REMOVE_BULLET", removeBullet),
              () => {
                window.removeEventListener("BULLET_HIT", removeBullet),
                  window.removeEventListener("REMOVE_BULLET", removeBullet);
              }
            );
          }, []),
          (0, E.A)(() => {
            e.current && t.current.shoot && (shoot(), (e.current = !1)),
              e.current || t.current.shoot || (e.current = !0);
          }),
          n.map((e) => (0, a.jsx)(Bullet, { id: e.id, position: e.pos }, e.id))
        );
      }
      function Bullet(e) {
        let { id: t, position: n } = e,
          r = (0, d.useRef)(),
          i = (0, d.useRef)(!0);
        return (
          (0, E.A)((e, t) => {
            if (!r.current || !i.current) return;
            let n = (0, j.R3)(r.current.translation());
            (n.x += 6 * t), r.current.setTranslation(n, !0);
          }),
          (0, a.jsx)(j.ib, {
            position: n,
            sensor: !0,
            ref: r,
            name: t,
            colliders: "cuboid",
            onIntersectionEnter: (e) => {
              let { other: n } = e;
              if (n.rigidBodyObject.name.startsWith("bounds")) {
                let e = new CustomEvent("REMOVE_BULLET", { detail: { id: t } });
                window.dispatchEvent(e);
              }
            },
            children: (0, a.jsxs)("mesh", {
              children: [
                (0, a.jsx)("boxGeometry", { args: [0.4, 0.06, 0.025] }),
                (0, a.jsx)("meshBasicMaterial", {
                  color: "white",
                  transparent: !0,
                }),
                (0, a.jsx)("shaderMaterial", {
                  transparent: !0,
                  vertexShader: M,
                  fragmentShader: P,
                  uniforms: { uColor: { value: new w.Color("#8C61FF") } },
                }),
              ],
            }),
          })
        );
      }
      let M =
          "\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n}\n",
        P =
          "\nuniform vec3 uColor;\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 white = vec3(1.0);\n  vec3 color = mix(uColor, white, vUv.x - 0.1);\n  gl_FragColor = vec4(color, vUv.x);\n}\n";
      var C = JSON.parse(
          '{"glyphs":{"0":{"ha":556,"x_min":92,"x_max":464,"o":"m 353 722 q 347 667 353 690 l 208 667 q 203 722 203 690 q 208 778 203 756 l 347 778 q 353 722 353 756 m 208 222 q 214 167 214 200 q 208 111 214 135 l 139 111 q 133 167 133 135 q 139 222 133 200 l 97 222 q 92 278 92 246 q 97 333 92 311 q 92 389 92 357 q 97 444 92 422 q 92 500 92 468 q 97 556 92 533 l 139 556 q 133 611 133 579 q 139 667 133 644 l 208 667 q 214 611 214 644 q 208 556 214 579 q 214 500 214 533 q 208 444 214 468 q 214 389 214 422 q 208 333 214 357 q 214 278 214 311 q 208 222 214 246 m 458 444 q 464 389 464 422 q 458 333 464 357 q 464 278 464 311 q 458 222 464 246 l 417 222 q 422 167 422 200 q 417 111 422 135 l 347 111 q 342 167 342 135 q 347 222 342 200 q 342 278 342 246 q 347 333 342 311 q 342 389 342 357 q 347 444 342 422 q 342 500 342 468 q 347 556 342 533 q 342 611 342 579 q 347 667 342 644 l 417 667 q 422 611 422 644 q 417 556 422 579 l 458 556 q 464 500 464 533 q 458 444 464 468 m 203 56 q 208 111 203 89 l 347 111 q 353 56 353 89 q 347 0 353 24 l 208 0 q 203 56 203 24 z "},"1":{"ha":556,"x_min":106,"x_max":450,"o":"m 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 222 111 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 l 139 556 q 133 611 133 579 q 139 667 133 644 l 222 667 q 217 722 217 690 q 222 778 217 756 l 333 778 q 339 722 339 756 q 333 667 339 690 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 l 444 111 z "},"2":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 500 q 472 444 478 468 l 403 444 q 408 389 408 422 q 403 333 408 357 l 333 333 q 339 278 339 311 q 333 222 339 246 l 264 222 q 269 167 269 200 q 264 111 269 135 l 472 111 q 478 56 478 89 q 472 0 478 24 l 83 0 q 78 56 78 24 q 83 111 78 89 l 153 111 q 147 167 147 135 q 153 222 147 200 l 222 222 q 217 278 217 246 q 222 333 217 311 l 292 333 q 286 389 286 357 q 292 444 286 422 l 361 444 q 356 500 356 468 q 361 556 356 533 q 356 611 356 579 q 361 667 356 644 l 167 667 q 172 611 172 644 q 167 556 172 579 l 83 556 q 78 611 78 579 q 83 667 78 644 l 139 667 q 133 722 133 690 q 139 778 133 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 472 667 q 478 611 478 644 q 472 556 478 579 q 478 500 478 533 z "},"3":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 500 q 472 444 478 468 l 417 444 q 422 389 422 422 q 417 333 422 357 l 472 333 q 478 278 478 311 q 472 222 478 246 q 478 167 478 200 q 472 111 478 135 l 417 111 q 422 56 422 89 q 417 0 422 24 l 139 0 q 133 56 133 24 q 139 111 133 89 l 83 111 q 78 167 78 135 q 83 222 78 200 l 194 222 q 200 167 200 200 q 194 111 200 135 l 361 111 q 356 167 356 135 q 361 222 356 200 q 356 278 356 246 q 361 333 356 311 l 222 333 q 217 389 217 357 q 222 444 217 422 l 361 444 q 356 500 356 468 q 361 556 356 533 q 356 611 356 579 q 361 667 356 644 l 194 667 q 200 611 200 644 q 194 556 200 579 l 83 556 q 78 611 78 579 q 83 667 78 644 l 139 667 q 133 722 133 690 q 139 778 133 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 472 667 q 478 611 478 644 q 472 556 478 579 q 478 500 478 533 z "},"4":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 278 q 500 222 506 246 l 444 222 q 450 167 450 200 q 444 111 450 135 q 450 56 450 89 q 444 0 450 24 l 333 0 q 328 56 328 24 q 333 111 328 89 q 328 167 328 135 q 333 222 328 200 l 56 222 q 50 278 50 246 q 56 333 50 311 l 97 333 q 92 389 92 357 q 97 444 92 422 l 139 444 q 133 500 133 468 q 139 556 133 533 l 181 556 q 175 611 175 579 q 181 667 175 644 l 250 667 q 256 611 256 644 q 250 556 256 579 l 208 556 q 214 500 214 533 q 208 444 214 468 l 167 444 q 172 389 172 422 q 167 333 172 357 l 333 333 q 328 389 328 357 q 333 444 328 422 q 328 500 328 468 q 333 556 328 533 q 328 611 328 579 q 333 667 328 644 l 250 667 q 244 722 244 690 q 250 778 244 756 l 444 778 q 450 722 450 756 q 444 667 450 690 q 450 611 450 644 q 444 556 450 579 q 450 500 450 533 q 444 444 450 468 q 450 389 450 422 q 444 333 450 357 l 500 333 q 506 278 506 311 z "},"5":{"ha":556,"x_min":78,"x_max":506,"o":"m 200 500 q 194 444 200 468 l 236 444 q 242 389 242 422 q 236 333 242 357 l 83 333 q 78 389 78 357 q 83 444 78 422 q 78 500 78 468 q 83 556 78 533 q 78 611 78 579 q 83 667 78 644 q 78 722 78 690 q 83 778 78 756 l 458 778 q 464 722 464 756 q 458 667 464 690 l 194 667 q 200 611 200 644 q 194 556 200 579 q 200 500 200 533 m 506 278 q 500 222 506 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 139 0 q 133 56 133 24 q 139 111 133 89 l 83 111 q 78 167 78 135 q 83 222 78 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 347 111 q 342 167 342 135 q 347 222 342 200 l 389 222 q 383 278 383 246 q 389 333 383 311 l 347 333 q 342 389 342 357 q 347 444 342 422 l 236 444 q 231 500 231 468 q 236 556 231 533 l 389 556 q 394 500 394 533 q 389 444 394 468 l 458 444 q 464 389 464 422 q 458 333 464 357 l 500 333 q 506 278 506 311 z "},"6":{"ha":556,"x_min":71,"x_max":485,"o":"m 429 722 q 424 667 429 690 l 229 667 q 224 722 224 690 q 229 778 224 756 l 424 778 q 429 722 429 756 m 229 222 q 235 167 235 200 q 229 111 235 135 l 118 111 q 113 167 113 135 q 118 222 113 200 l 76 222 q 71 278 71 246 q 76 333 71 311 q 71 389 71 357 q 76 444 71 422 q 71 500 71 468 q 76 556 71 533 l 118 556 q 113 611 113 579 q 118 667 113 644 l 229 667 q 235 611 235 644 q 229 556 235 579 l 188 556 q 193 500 193 533 q 188 444 193 468 q 193 389 193 422 q 188 333 193 357 l 229 333 q 235 278 235 311 q 229 222 235 246 m 485 278 q 479 222 485 246 q 485 167 485 200 q 479 111 485 135 l 396 111 q 401 56 401 89 q 396 0 401 24 l 229 0 q 224 56 224 24 q 229 111 224 89 l 368 111 q 363 167 363 135 q 368 222 363 200 q 363 278 363 246 q 368 333 363 311 l 229 333 q 224 389 224 357 q 229 444 224 422 l 424 444 q 429 389 429 422 q 424 333 429 357 l 479 333 q 485 278 485 311 z "},"7":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 722 q 472 667 478 690 q 478 611 478 644 q 472 556 478 579 l 431 556 q 436 500 436 533 q 431 444 436 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 347 333 q 353 278 353 311 q 347 222 353 246 l 306 222 q 311 167 311 200 q 306 111 311 135 l 264 111 q 269 56 269 89 q 264 0 269 24 l 153 0 q 147 56 147 24 q 153 111 147 89 l 194 111 q 189 167 189 135 q 194 222 189 200 l 236 222 q 231 278 231 246 q 236 333 231 311 l 278 333 q 272 389 272 357 q 278 444 272 422 l 319 444 q 314 500 314 468 q 319 556 314 533 l 361 556 q 356 611 356 579 q 361 667 356 644 l 83 667 q 78 722 78 690 q 83 778 78 756 l 472 778 q 478 722 478 756 z "},"8":{"ha":556,"x_min":92,"x_max":464,"o":"m 464 500 q 458 444 464 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 458 333 q 464 278 464 311 q 458 222 464 246 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 97 111 q 92 167 92 135 q 97 222 92 200 q 92 278 92 246 q 97 333 92 311 l 167 333 q 161 389 161 357 q 167 444 161 422 l 97 444 q 92 500 92 468 q 97 556 92 533 q 92 611 92 579 q 97 667 92 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 458 667 q 464 611 464 644 q 458 556 464 579 q 464 500 464 533 m 347 444 q 342 500 342 468 q 347 556 342 533 q 342 611 342 579 q 347 667 342 644 l 208 667 q 214 611 214 644 q 208 556 214 579 q 214 500 214 533 q 208 444 214 468 l 347 444 m 347 222 q 342 278 342 246 q 347 333 342 311 l 208 333 q 214 278 214 311 q 208 222 214 246 q 214 167 214 200 q 208 111 214 135 l 347 111 q 342 167 342 135 q 347 222 342 200 z "},"9":{"ha":556,"x_min":71,"x_max":485,"o":"m 193 500 q 188 444 193 468 l 326 444 q 332 389 332 422 q 326 333 332 357 l 132 333 q 126 389 126 357 q 132 444 126 422 l 76 444 q 71 500 71 468 q 76 556 71 533 q 71 611 71 579 q 76 667 71 644 l 160 667 q 154 722 154 690 q 160 778 154 756 l 326 778 q 332 722 332 756 q 326 667 332 690 l 188 667 q 193 611 193 644 q 188 556 193 579 q 193 500 193 533 m 479 444 q 485 389 485 422 q 479 333 485 357 q 485 278 485 311 q 479 222 485 246 l 438 222 q 443 167 443 200 q 438 111 443 135 l 326 111 q 321 167 321 135 q 326 222 321 200 l 368 222 q 363 278 363 246 q 368 333 363 311 q 363 389 363 357 q 368 444 363 422 l 326 444 q 321 500 321 468 q 326 556 321 533 q 321 611 321 579 q 326 667 321 644 l 438 667 q 443 611 443 644 q 438 556 443 579 l 479 556 q 485 500 485 533 q 479 444 485 468 m 126 56 q 132 111 126 89 l 326 111 q 332 56 332 89 q 326 0 332 24 l 132 0 q 126 56 126 24 z "}," ":{"ha":556,"x_min":0,"x_max":0,"o":""},"A":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 167 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 l 167 222 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 l 97 222 q 92 278 92 246 q 97 333 92 311 q 92 389 92 357 q 97 444 92 422 l 125 444 q 119 500 119 468 q 125 556 119 533 l 167 556 q 161 611 161 579 q 167 667 161 644 l 194 667 q 189 722 189 690 q 194 778 189 756 l 361 778 q 367 722 367 756 q 361 667 367 690 l 389 667 q 394 611 394 644 q 389 556 394 579 l 431 556 q 436 500 436 533 q 431 444 436 468 l 458 444 q 464 389 464 422 q 458 333 464 357 q 464 278 464 311 q 458 222 464 246 l 500 222 q 506 167 506 200 m 347 333 q 342 389 342 357 q 347 444 342 422 l 319 444 q 314 500 314 468 q 319 556 314 533 l 236 556 q 242 500 242 533 q 236 444 242 468 l 208 444 q 214 389 214 422 q 208 333 214 357 l 347 333 z "},"B":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 500 q 500 444 506 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 500 333 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 m 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 389 444 m 389 222 q 383 278 383 246 q 389 333 383 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 389 111 q 383 167 383 135 q 389 222 383 200 z "},"C":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 222 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 111 111 q 106 167 106 135 q 111 222 106 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 111 556 q 106 611 106 579 q 111 667 106 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 222 667 q 228 611 228 644 q 222 556 228 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 222 222 q 228 167 228 200 q 222 111 228 135 l 389 111 q 383 167 383 135 q 389 222 383 200 l 500 222 z "},"D":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 444 222 q 450 167 450 200 q 444 111 450 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 444 667 q 450 611 450 644 q 444 556 450 579 l 500 556 q 506 500 506 533 q 500 444 506 468 m 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 333 556 q 328 611 328 579 q 333 667 328 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 333 111 q 328 167 328 135 q 333 222 328 200 l 389 222 z "},"E":{"ha":556,"x_min":106,"x_max":450,"o":"m 222 333 q 228 278 228 311 q 222 222 228 246 q 228 167 228 200 q 222 111 228 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 q 106 167 106 135 q 111 222 106 200 q 106 278 106 246 q 111 333 106 311 q 106 389 106 357 q 111 444 106 422 q 106 500 106 468 q 111 556 106 533 q 106 611 106 579 q 111 667 106 644 q 106 722 106 690 q 111 778 106 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 222 667 q 228 611 228 644 q 222 556 228 579 q 228 500 228 533 q 222 444 228 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 222 333 z "},"F":{"ha":556,"x_min":106,"x_max":450,"o":"m 444 444 q 450 389 450 422 q 444 333 450 357 l 222 333 q 228 278 228 311 q 222 222 228 246 q 228 167 228 200 q 222 111 228 135 q 228 56 228 89 q 222 0 228 24 l 111 0 q 106 56 106 24 q 111 111 106 89 q 106 167 106 135 q 111 222 106 200 q 106 278 106 246 q 111 333 106 311 q 106 389 106 357 q 111 444 106 422 q 106 500 106 468 q 111 556 106 533 q 106 611 106 579 q 111 667 106 644 q 106 722 106 690 q 111 778 106 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 222 667 q 228 611 228 644 q 222 556 228 579 q 228 500 228 533 q 222 444 228 468 l 444 444 z "},"G":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 111 111 q 106 167 106 135 q 111 222 106 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 111 556 q 106 611 106 579 q 111 667 106 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 222 667 q 228 611 228 644 q 222 556 228 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 222 222 q 228 167 228 200 q 222 111 228 135 l 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 306 333 q 300 389 300 357 q 306 444 300 422 l 500 444 z "},"H":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"I":{"ha":556,"x_min":133,"x_max":422,"o":"m 417 111 q 422 56 422 89 q 417 0 422 24 l 139 0 q 133 56 133 24 q 139 111 133 89 l 222 111 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 l 139 667 q 133 722 133 690 q 139 778 133 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 l 417 111 z "},"J":{"ha":556,"x_min":50,"x_max":478,"o":"m 478 722 q 472 667 478 690 l 389 667 q 394 611 394 644 q 389 556 394 579 q 394 500 394 533 q 389 444 394 468 q 394 389 394 422 q 389 333 394 357 q 394 278 394 311 q 389 222 394 246 q 394 167 394 200 q 389 111 394 135 l 333 111 q 339 56 339 89 q 333 0 339 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 278 111 q 272 167 272 135 q 278 222 272 200 q 272 278 272 246 q 278 333 272 311 q 272 389 272 357 q 278 444 272 422 q 272 500 272 468 q 278 556 272 533 q 272 611 272 579 q 278 667 272 644 l 194 667 q 189 722 189 690 q 194 778 189 756 l 472 778 q 478 722 478 756 z "},"K":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 347 111 q 342 167 342 135 q 347 222 342 200 l 264 222 q 258 278 258 246 q 264 333 258 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 264 444 q 258 500 258 468 q 264 556 258 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 389 667 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 375 556 q 381 500 381 533 q 375 444 381 468 l 306 444 q 311 389 311 422 q 306 333 311 357 l 375 333 q 381 278 381 311 q 375 222 381 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 500 111 z "},"L":{"ha":556,"x_min":106,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 111 0 q 106 56 106 24 q 111 111 106 89 q 106 167 106 135 q 111 222 106 200 q 106 278 106 246 q 111 333 106 311 q 106 389 106 357 q 111 444 106 422 q 106 500 106 468 q 111 556 106 533 q 106 611 106 579 q 111 667 106 644 q 106 722 106 690 q 111 778 106 756 l 222 778 q 228 722 228 756 q 222 667 228 690 q 228 611 228 644 q 222 556 228 579 q 228 500 228 533 q 222 444 228 468 q 228 389 228 422 q 222 333 228 357 q 228 278 228 311 q 222 222 228 246 q 228 167 228 200 q 222 111 228 135 l 500 111 z "},"M":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 347 556 q 353 500 353 533 q 347 444 353 468 q 353 389 353 422 q 347 333 353 357 l 319 333 q 325 278 325 311 q 319 222 325 246 q 325 167 325 200 q 319 111 325 135 l 236 111 q 231 167 231 135 q 236 222 231 200 q 231 278 231 246 q 236 333 231 311 l 208 333 q 203 389 203 357 q 208 444 203 422 q 203 500 203 468 q 208 556 203 533 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 194 778 q 200 722 200 756 q 194 667 200 690 l 236 667 q 242 611 242 644 q 236 556 242 579 l 257 556 q 263 500 263 533 q 257 444 263 468 l 299 444 q 293 500 293 468 q 299 556 293 533 l 319 556 q 314 611 314 579 q 319 667 314 644 l 361 667 q 356 722 356 690 q 361 778 356 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"N":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 319 111 q 314 167 314 135 q 319 222 314 200 l 278 222 q 272 278 272 246 q 278 333 272 311 l 222 333 q 217 389 217 357 q 222 444 217 422 l 167 444 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 194 778 q 200 722 200 756 q 194 667 200 690 l 236 667 q 242 611 242 644 q 236 556 242 579 l 278 556 q 283 500 283 533 q 278 444 283 468 l 333 444 q 339 389 339 422 q 333 333 339 357 l 389 333 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"O":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 97 111 q 92 167 92 135 q 97 222 92 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 97 556 q 92 611 92 579 q 97 667 92 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 500 556 q 506 500 506 533 q 500 444 506 468 m 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 208 667 q 214 611 214 644 q 208 556 214 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 208 222 q 214 167 214 200 q 208 111 214 135 l 347 111 q 342 167 342 135 q 347 222 342 200 l 389 222 z "},"P":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 611 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 m 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 389 444 z "},"Q":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 444 0 q 450 -56 450 -22 q 444 -111 450 -87 l 500 -111 q 506 -167 506 -133 q 500 -222 506 -199 l 389 -222 q 383 -167 383 -199 q 389 -111 383 -133 l 333 -111 q 328 -56 328 -87 q 333 0 328 -22 l 167 0 q 161 56 161 24 q 167 111 161 89 l 97 111 q 92 167 92 135 q 97 222 92 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 97 556 q 92 611 92 579 q 97 667 92 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 500 556 q 506 500 506 533 q 500 444 506 468 m 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 208 667 q 214 611 214 644 q 208 556 214 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 208 222 q 214 167 214 200 q 208 111 214 135 l 347 111 q 342 167 342 135 q 347 222 342 200 l 389 222 z "},"R":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 347 111 q 342 167 342 135 q 347 222 342 200 l 306 222 q 300 278 300 246 q 306 333 300 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 472 556 q 478 500 478 533 q 472 444 478 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 417 333 q 422 278 422 311 q 417 222 422 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 500 111 m 361 444 q 356 500 356 468 q 361 556 356 533 q 356 611 356 579 q 361 667 356 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 361 444 z "},"S":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 333 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 111 333 q 106 389 106 357 q 111 444 106 422 l 56 444 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 l 111 667 q 106 722 106 690 q 111 778 106 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 500 333 z "},"T":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 722 q 500 667 506 690 l 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 l 56 667 q 50 722 50 690 q 56 778 50 756 l 500 778 q 506 722 506 756 z "},"U":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"V":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 l 458 444 q 464 389 464 422 q 458 333 464 357 l 417 333 q 422 278 422 311 q 417 222 422 246 l 389 222 q 394 167 394 200 q 389 111 394 135 l 333 111 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 l 167 111 q 161 167 161 135 q 167 222 161 200 l 139 222 q 133 278 133 246 q 139 333 133 311 l 97 333 q 92 389 92 357 q 97 444 92 422 l 56 444 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 208 444 q 214 389 214 422 q 208 333 214 357 l 250 333 q 256 278 256 311 q 250 222 256 246 l 306 222 q 300 278 300 246 q 306 333 300 311 l 347 333 q 342 389 342 357 q 347 444 342 422 l 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"W":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 l 458 333 q 464 278 464 311 q 458 222 464 246 q 464 167 464 200 q 458 111 464 135 l 431 111 q 436 56 436 89 q 431 0 436 24 l 347 0 q 342 56 342 24 q 347 111 342 89 l 319 111 q 314 167 314 135 q 319 222 314 200 l 236 222 q 242 167 242 200 q 236 111 242 135 l 208 111 q 214 56 214 89 q 208 0 214 24 l 125 0 q 119 56 119 24 q 125 111 119 89 l 97 111 q 92 167 92 135 q 97 222 92 200 q 92 278 92 246 q 97 333 92 311 l 56 333 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 208 222 q 203 278 203 246 q 208 333 203 311 l 236 333 q 231 389 231 357 q 236 444 231 422 q 231 500 231 468 q 236 556 231 533 q 231 611 231 579 q 236 667 231 644 q 231 722 231 690 q 236 778 231 756 l 319 778 q 325 722 325 756 q 319 667 325 690 q 325 611 325 644 q 319 556 325 579 q 325 500 325 533 q 319 444 325 468 q 325 389 325 422 q 319 333 325 357 l 347 333 q 353 278 353 311 q 347 222 353 246 l 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"X":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 347 111 q 342 167 342 135 q 347 222 342 200 l 319 222 q 314 278 314 246 q 319 333 314 311 l 236 333 q 242 278 242 311 q 236 222 242 246 l 208 222 q 214 167 214 200 q 208 111 214 135 l 167 111 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 l 97 111 q 92 167 92 135 q 97 222 92 200 l 153 222 q 147 278 147 246 q 153 333 147 311 l 194 333 q 189 389 189 357 q 194 444 189 422 l 153 444 q 147 500 147 468 q 153 556 147 533 l 97 556 q 92 611 92 579 q 97 667 92 644 l 56 667 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 l 208 667 q 214 611 214 644 q 208 556 214 579 l 236 556 q 242 500 242 533 q 236 444 242 468 l 319 444 q 314 500 314 468 q 319 556 314 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 389 667 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 403 556 q 408 500 408 533 q 403 444 408 468 l 361 444 q 367 389 367 422 q 361 333 367 357 l 403 333 q 408 278 408 311 q 403 222 408 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 500 111 z "},"Y":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 722 q 500 667 506 690 q 506 611 506 644 q 500 556 506 579 l 444 556 q 450 500 450 533 q 444 444 450 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 333 333 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 l 167 333 q 161 389 161 357 q 167 444 161 422 l 111 444 q 106 500 106 468 q 111 556 106 533 l 56 556 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 l 222 556 q 228 500 228 533 q 222 444 228 468 l 333 444 q 328 500 328 468 q 333 556 328 533 l 389 556 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 z "},"Z":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 611 q 472 556 478 579 l 431 556 q 436 500 436 533 q 431 444 436 468 l 347 444 q 353 389 353 422 q 347 333 353 357 l 264 333 q 269 278 269 311 q 264 222 269 246 l 194 222 q 200 167 200 200 q 194 111 200 135 l 472 111 q 478 56 478 89 q 472 0 478 24 l 83 0 q 78 56 78 24 q 83 111 78 89 q 78 167 78 135 q 83 222 78 200 l 153 222 q 147 278 147 246 q 153 333 147 311 l 236 333 q 231 389 231 357 q 236 444 231 422 l 319 444 q 314 500 314 468 q 319 556 314 533 l 361 556 q 356 611 356 579 q 361 667 356 644 l 83 667 q 78 722 78 690 q 83 778 78 756 l 472 778 q 478 722 478 756 q 472 667 478 690 q 478 611 478 644 z "},":":{"ha":556,"x_min":203,"x_max":353,"o":"m 353 611 q 347 556 353 579 q 353 500 353 533 q 347 444 353 468 l 208 444 q 203 500 203 468 q 208 556 203 533 q 203 611 203 579 q 208 667 203 644 l 347 667 q 353 611 353 644 m 347 222 q 353 167 353 200 q 347 111 353 135 q 353 56 353 89 q 347 0 353 24 l 208 0 q 203 56 203 24 q 208 111 203 89 q 203 167 203 135 q 208 222 203 200 l 347 222 z "},"!":{"ha":556,"x_min":217,"x_max":339,"o":"m 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 l 222 222 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 q 217 722 217 690 q 222 778 217 756 l 333 778 q 339 722 339 756 q 333 667 339 690 m 333 111 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 l 333 111 z "},"$":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 333 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 319 0 q 325 -56 325 -22 q 319 -111 325 -87 l 236 -111 q 231 -56 231 -87 q 236 0 231 -22 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 236 111 q 231 167 231 135 q 236 222 231 200 q 231 278 231 246 q 236 333 231 311 l 111 333 q 106 389 106 357 q 111 444 106 422 l 56 444 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 l 111 667 q 106 722 106 690 q 111 778 106 756 l 236 778 q 231 833 231 801 q 236 889 231 867 l 319 889 q 325 833 325 867 q 319 778 325 801 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 319 667 q 325 611 325 644 q 319 556 325 579 q 325 500 325 533 q 319 444 325 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 500 333 m 236 444 q 231 500 231 468 q 236 556 231 533 q 231 611 231 579 q 236 667 231 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 236 444 m 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 319 333 q 325 278 325 311 q 319 222 325 246 q 325 167 325 200 q 319 111 325 135 l 389 111 z "},"\xa3":{"ha":556,"x_min":50,"x_max":506,"o":"m 250 222 q 256 167 256 200 q 250 111 256 135 l 194 111 q 200 56 200 89 q 194 0 200 24 l 56 0 q 50 56 50 24 q 56 111 50 89 l 139 111 q 133 167 133 135 q 139 222 133 200 q 133 278 133 246 q 139 333 133 311 l 56 333 q 50 389 50 357 q 56 444 50 422 l 139 444 q 133 500 133 468 q 139 556 133 533 q 133 611 133 579 q 139 667 133 644 l 194 667 q 189 722 189 690 q 194 778 189 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 472 667 q 478 611 478 644 q 472 556 478 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 250 667 q 256 611 256 644 q 250 556 256 579 q 256 500 256 533 q 250 444 256 468 l 333 444 q 339 389 339 422 q 333 333 339 357 l 250 333 q 256 278 256 311 q 250 222 256 246 m 506 167 q 500 111 506 135 l 472 111 q 478 56 478 89 q 472 0 478 24 l 250 0 q 244 56 244 24 q 250 111 244 89 l 417 111 q 411 167 411 135 q 417 222 411 200 l 500 222 q 506 167 506 200 z "},"+":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 389 q 472 333 478 357 l 333 333 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 l 222 111 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 l 83 333 q 78 389 78 357 q 83 444 78 422 l 222 444 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 l 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 l 472 444 q 478 389 478 422 z "},"=":{"ha":556,"x_min":106,"x_max":450,"o":"m 111 444 q 106 500 106 468 q 111 556 106 533 l 444 556 q 450 500 450 533 q 444 444 450 468 l 111 444 m 444 333 q 450 278 450 311 q 444 222 450 246 l 111 222 q 106 278 106 246 q 111 333 106 311 l 444 333 z "},"%":{"ha":556,"x_min":50,"x_max":506,"o":"m 257 333 q 263 278 263 311 q 257 222 263 246 l 201 222 q 207 167 207 200 q 201 111 207 135 l 139 111 q 144 56 144 89 q 139 0 144 24 l 56 0 q 50 56 50 24 q 56 111 50 89 l 118 111 q 113 167 113 135 q 118 222 113 200 l 174 222 q 168 278 168 246 q 174 333 168 311 l 236 333 q 231 389 231 357 q 236 444 231 422 l 299 444 q 293 500 293 468 q 299 556 293 533 l 354 556 q 349 611 349 579 q 354 667 349 644 l 417 667 q 411 722 411 690 q 417 778 411 756 l 500 778 q 506 722 506 756 q 500 667 506 690 l 438 667 q 443 611 443 644 q 438 556 443 579 l 382 556 q 388 500 388 533 q 382 444 388 468 l 319 444 q 325 389 325 422 q 319 333 325 357 l 257 333 m 56 556 q 50 611 50 579 q 56 667 50 644 l 104 667 q 99 722 99 690 q 104 778 99 756 l 215 778 q 221 722 221 756 q 215 667 221 690 l 264 667 q 269 611 269 644 q 264 556 269 579 l 215 556 q 221 500 221 533 q 215 444 221 468 l 104 444 q 99 500 99 468 q 104 556 99 533 l 56 556 m 139 667 q 144 611 144 644 q 139 556 144 579 l 181 556 q 175 611 175 579 q 181 667 175 644 l 139 667 m 500 222 q 506 167 506 200 q 500 111 506 135 l 451 111 q 457 56 457 89 q 451 0 457 24 l 340 0 q 335 56 335 24 q 340 111 335 89 l 292 111 q 286 167 286 135 q 292 222 286 200 l 340 222 q 335 278 335 246 q 340 333 335 311 l 451 333 q 457 278 457 311 q 451 222 457 246 l 500 222 m 417 111 q 411 167 411 135 q 417 222 411 200 l 375 222 q 381 167 381 200 q 375 111 381 135 l 417 111 z "},"@":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 556 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 278 222 q 272 278 272 246 q 278 333 272 311 l 236 333 q 231 389 231 357 q 236 444 231 422 q 231 500 231 468 q 236 556 231 533 l 278 556 q 272 611 272 579 q 278 667 272 644 l 333 667 q 328 722 328 690 q 333 778 328 756 l 194 778 q 200 722 200 756 q 194 667 200 690 l 139 667 q 144 611 144 644 q 139 556 144 579 q 144 500 144 533 q 139 444 144 468 q 144 389 144 422 q 139 333 144 357 q 144 278 144 311 q 139 222 144 246 l 194 222 q 200 167 200 200 q 194 111 200 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 111 111 q 106 167 106 135 q 111 222 106 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 l 111 667 q 106 722 106 690 q 111 778 106 756 l 167 778 q 161 833 161 801 q 167 889 161 867 l 389 889 q 394 833 394 867 q 389 778 394 801 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 m 417 333 q 411 389 411 357 q 417 444 411 422 q 411 500 411 468 q 417 556 411 533 l 319 556 q 325 500 325 533 q 319 444 325 468 q 325 389 325 422 q 319 333 325 357 l 417 333 z "},"&":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 389 q 500 333 506 357 l 431 333 q 436 278 436 311 q 431 222 436 246 l 472 222 q 478 167 478 200 q 472 111 478 135 l 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 l 347 222 q 353 167 353 200 q 347 111 353 135 l 306 111 q 311 56 311 89 q 306 0 311 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 l 111 333 q 106 389 106 357 q 111 444 106 422 l 167 444 q 161 500 161 468 q 167 556 161 533 l 111 556 q 106 611 106 579 q 111 667 106 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 333 778 q 339 722 339 756 q 333 667 339 690 l 389 667 q 394 611 394 644 q 389 556 394 579 l 306 556 q 300 611 300 579 q 306 667 300 644 l 194 667 q 200 611 200 644 q 194 556 200 579 l 306 556 q 311 500 311 533 q 306 444 311 468 l 347 444 q 353 389 353 422 q 347 333 353 357 l 417 333 q 411 389 411 357 q 417 444 411 422 q 411 500 411 468 q 417 556 411 533 l 500 556 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 m 306 222 q 300 278 300 246 q 306 333 300 311 l 264 333 q 258 389 258 357 q 264 444 258 422 l 222 444 q 228 389 228 422 q 222 333 228 357 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 264 111 q 258 167 258 135 q 264 222 258 200 l 306 222 z "}},"familyName":"VT323","ascender":1111,"descender":-278,"underlinePosition":-172,"underlineThickness":69,"boundingBox":{"yMin":-333,"xMin":-561,"yMax":1444,"xMax":589},"resolution":1000,"original_font_information":{"format":0,"copyright":"Copyright 2011, The VT323 Project Authors (peter.hull@oikoi.com)","fontFamily":"VT323","fontSubfamily":"Regular","uniqueID":"2.000;UKWN;VT323-Regular","fullName":"VT323 Regular","version":"Version 2.000","postScriptName":"VT323-Regular","designer":"Peter Hull","licence":"This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: http://scripts.sil.org/OFL","licenceURL":"http://scripts.sil.org/OFL"},"cssFontWeight":"normal","cssFontStyle":"normal"}',
        ),
        T = n(66673);
      let k = [
          "Name",
          "Address",
          "Phone",
          "Email",
          "IP Address",
          "Passport",
          "ID Number",
          "Medical ID",
          "Birthday",
          "Employment",
          "Location",
          "Credit Card",
          "Bank Account",
          "Social Security",
          "Driver License",
          "Fingerprint",
          "Vehicle",
          "License Plate",
          "MAC Address",
          "Cookies",
          "Browser History",
          "Search History",
        ],
        randomPII = () => k[Math.floor(Math.random() * k.length)],
        useRandomPII = () => {
          let e = (0, d.useRef)(randomPII().toUpperCase());
          return e.current;
        };
      function randomChar() {
        let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+&%$@";
        return e.charAt(Math.floor(Math.random() * e.length));
      }
      var N = n(92520),
        I = n(4960),
        A = n(80578),
        L = n(66354),
        PII_FingerPrint = (e) => {
          let { onComplete: t, active: n, ...r } = e,
            i = (0, d.useRef)(),
            [{ x: l, y: o }, q] = (0, d.useState)({}),
            s = (0, I.c)(0),
            m = (0, A.H)(s, [1, 0], [0, 80]),
            handleMouseDown = () => {
              let e = (0, L.j)(s, 1, {
                duration: 3,
                ease: "linear",
                onComplete: t,
              });
              window.addEventListener(
                "mouseup",
                () => {
                  e.stop(), (0, L.j)(s, 0, { duration: 0.3 });
                },
                { once: !0 },
              );
            };
          return (
            (0, d.useEffect)(() => {
              let handleMouseMove = (e) => {
                let t = i.current.getBoundingClientRect();
                q({
                  x: ((e.clientX - t.x) / t.width) * 100,
                  y: ((e.clientY - t.y) / t.height) * 100,
                });
              };
              return (
                window.addEventListener("mousemove", handleMouseMove),
                () => {
                  window.removeEventListener("mousemove", handleMouseMove);
                }
              );
            }, []),
            (0, a.jsxs)(N.E.svg, {
              ref: i,
              width: 164,
              height: 166,
              fill: "none",
              className: c().fingerPrint,
              onMouseDown: handleMouseDown,
              onTapStart: handleMouseDown,
              xmlns: "http://www.w3.org/2000/svg",
              ...r,
              children: [
                (0, a.jsx)(N.E.path, {
                  d: "M78.99 70.384c6.128-1.642 12.427 1.994 14.068 8.122a179.609 179.609 0 0 1 4.733 24.151m-91.563 8.777a87.148 87.148 0 0 0-1.933-9.144 82.29 82.29 0 0 1-.597-2.367m80.861-7.248a169.016 169.016 0 0 0-2.596-11.196m.737 83.493a166.01 166.01 0 0 0 2.082-9.463m1.014-5.935a165.476 165.476 0 0 0-.156-50.796m3.04 65.929a171.42 171.42 0 0 0 3.707-21.21m-4.51-62.116c-.12-.463-.242-.926-.366-1.388a5.743 5.743 0 0 0-11.096 2.973 161.908 161.908 0 0 1 4.794 26.513m11.731 28.073c1.251-16.583.101-33.598-3.713-50.587m-12.402 77.797a159.741 159.741 0 0 0 4.842-49.311m-10.6 48.624c.515-1.949.993-3.911 1.433-5.884m1.108-5.434a153.991 153.991 0 0 0 1.272-48.123m-.905-6a157.03 157.03 0 0 0-3.107-14.182 11.48 11.48 0 0 1 2.778-10.899m21.083 90.519a177.255 177.255 0 0 0 2.664-14.383m.73-5.796a176.735 176.735 0 0 0 .323-35.168m2.452 54.046a182.553 182.553 0 0 0 3.914-31.968m.102-6.27c-.014-15.691-2.054-31.638-6.308-47.514a17.15 17.15 0 0 0-5.496-8.68M88.3 65.455a17.153 17.153 0 0 0-10.797-.62c-8.725 2.338-14.083 10.969-12.499 19.7m.386 78.533a148.503 148.503 0 0 0 4.893-31.487m.16-6.137a149.259 149.259 0 0 0-4.101-35.47m-6.501 71.608a143.02 143.02 0 0 0 3.746-19.139m.648-6.268c1.292-15.957-.083-32.402-4.464-48.751a22.867 22.867 0 0 1 .398-13.226m2.799-5.644a22.884 22.884 0 0 1 13.048-9.267c9.08-2.433 18.346.928 23.875 7.817m3.004 4.9a23.16 23.16 0 0 1 1.258 3.528 192.094 192.094 0 0 1 3.225 14.15m-.275 71.426c.215-1.094.421-2.189.617-3.288m1.027-6.369a188.324 188.324 0 0 0-.342-55.801m4.97 63.182a193.99 193.99 0 0 0 1.976-13.956m-5.176-69.025c-.155-.602-.313-1.204-.474-1.806-2.261-8.436-8.053-14.984-15.359-18.48m21.556 83.118c1.351-18.682.014-37.84-4.305-56.969M88.679 53.553a28.59 28.59 0 0 0-14.148.187c-12.36 3.312-20.667 14.203-21.258 26.333m.3 5.743c.159 1.031.375 2.064.651 3.096a138.813 138.813 0 0 1 4.037 21.988 136.805 136.805 0 0 1-.851 34.281m-2.99 14.436a137.594 137.594 0 0 0 1.96-8.525m-7.342 6.399a131.369 131.369 0 0 0 4.034-26.797m.139-5.983a131.735 131.735 0 0 0-2.297-24.507m-1.321-6.187a134.633 134.633 0 0 0-.916-3.619c-3.884-14.493 2.075-29.305 13.779-37.338m5.164-2.92a34.694 34.694 0 0 1 5.424-1.947c10.383-2.783 20.93-.513 29.031 5.302m4.594 3.951a34.304 34.304 0 0 1 8.58 15.114 203.072 203.072 0 0 1 4.982 24.53m-.568 59.018c.351-2.206.666-4.422.944-6.645m.675-6.175a199.627 199.627 0 0 0-.35-40.588m5.096 49.622a205.025 205.025 0 0 0 1.856-25.62m-.036-6.301a206.181 206.181 0 0 0-3.301-32.643m-1.199-6.07a210.787 210.787 0 0 0-2.551-10.615c-3.048-11.376-10.683-20.3-20.381-25.313m-5.427-2.32a40.017 40.017 0 0 0-23.432-.795 40.017 40.017 0 0 0-18.527 10.91m-3.839 4.633c-6.692 9.428-9.288 21.656-6.062 33.697a127.686 127.686 0 0 1 2.958 14.221m-2.276 48.624a125.82 125.82 0 0 0 2.413-12.458m.724-6.221c.716-7.858.698-15.856-.108-23.904m-8.201 39.509a119.803 119.803 0 0 0 3.073-28.472m-.236-6.18a121.183 121.183 0 0 0-3.895-23.633 45.799 45.799 0 0 1-1.11-18.433m1.23-5.817c3.987-14.227 14.743-26.185 29.553-31.173m5.405-1.466c11.4-2.368 22.8-.262 32.265 5.198m21.028 26.526c.137.456.268.917.393 1.38a214.183 214.183 0 0 1 6.052 32.272m-22.488-56.854a45.73 45.73 0 0 1 13.92 17.527m8.543 85.266c.427-3.88.748-7.783.96-11.703m.242-6.16a211.05 211.05 0 0 0-.592-21.841m5.676 34.304c.674-8.225.881-16.534.603-24.895m-.29-6.109a218.734 218.734 0 0 0-4.978-34.788m-1.482-6.143c-.201-.788-.408-1.575-.619-2.362-2.179-8.132-6.18-15.29-11.448-21.15M90.527 30.49a51.904 51.904 0 0 1 25.525 12.125M84.404 29.832a51.662 51.662 0 0 0-15.82 1.717 51.636 51.636 0 0 0-15.187 6.832M30.393 85.143a51.961 51.961 0 0 0 1.64 9.715 116.44 116.44 0 0 1 1.869 8.121m-3.583-24.014c.694-14.315 7.356-27.672 18.131-36.857M33.57 147.96c.367-1.761.694-3.534.978-5.316m.765-5.705c1-9.232.884-18.692-.452-28.197m-6.31 34.914c.704-3.947 1.191-7.949 1.453-11.991m.224-6.148a109.232 109.232 0 0 0-3.742-29.173c-.212-.79-.406-1.58-.583-2.37m-1-5.876c-2.766-23.598 9.421-46.417 30.17-57.384m5.275-2.453a58.011 58.011 0 0 1 6.75-2.26c23.176-6.21 46.841 2.682 60.548 20.643m3.272 4.771a57.439 57.439 0 0 1 6.522 15.199 226.796 226.796 0 0 1 4.515 20.642m2.893 48.577c.09-1.799.158-3.601.205-5.407m.073-5.965a222.877 222.877 0 0 0-2.276-31.5m8.008 34.423c.083-7.127-.168-14.3-.765-21.498m-.586-6.086a231.493 231.493 0 0 0-6.519-34.673c-3.582-13.366-11.192-24.578-21.174-32.678M75.746 18.6c14.883-1.49 29.429 2.407 41.336 10.361m-47.481-9.44c-1.33.267-2.66.578-3.99.934C50.485 24.507 38.12 33.72 29.9 45.69m-3.255 5.273c-7.613 13.798-10.107 30.444-5.706 46.868a104.264 104.264 0 0 1 2.779 14.269m-.184 26.509a102.608 102.608 0 0 0 .75-20.418m-5.864 14.356c.125-1.521.213-3.048.266-4.581m.006-6.463a97.93 97.93 0 0 0-3.3-22.186c-2.685-10.016-3.018-20.11-1.339-29.692m1.326-5.98c5.69-21.168 21.346-39.086 43.035-46.943m5.712-1.796c13.88-3.719 27.908-2.924 40.522 1.485m5.592 2.232c15.281 6.885 27.959 19.27 34.935 35.364m2.164 5.664c.436 1.31.836 2.64 1.198 3.99a237.984 237.984 0 0 1 5.55 26.756m2.402 26.56a234.352 234.352 0 0 0-1.589-20.534m2.05-22.401a244.684 244.684 0 0 0-2.866-11.868 74.53 74.53 0 0 0-10.755-23.244m17.967 63.232a241.434 241.434 0 0 0-3.148-22.198M95.197 7.98a74.953 74.953 0 0 1 44.722 26.398M89.177 7.142A74.503 74.503 0 0 0 62.638 9.36a74.642 74.642 0 0 0-20.558 8.976M7.34 84.425a74.923 74.923 0 0 0 2.503 16.379 93.213 93.213 0 0 1 1.372 5.875M7.324 78.884c.779-22.635 11.898-43.711 29.862-57.178m-24.19 102.515a91.46 91.46 0 0 0-.77-11.421M2.543 94.09a79.98 79.98 0 0 1 4.463-41.73m2.404-5.55c7.246-15.146 19.178-27.966 34.472-36.17m5.521-2.695a81.02 81.02 0 0 1 11.748-4.134c19.677-5.273 39.606-2.77 56.524 5.625m5.199 2.822a80.738 80.738 0 0 1 11.5 8.232m28.006 51.482a250.087 250.087 0 0 0-2.602-10.75m-21.058-36.718a79.929 79.929 0 0 1 19.414 31.213",
                  stroke: "url(#gradient)",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                }),
                (0, a.jsx)(N.E.path, {
                  d: "M78.99 70.384c6.128-1.642 12.427 1.994 14.068 8.122a179.609 179.609 0 0 1 4.733 24.151m-91.563 8.777a87.148 87.148 0 0 0-1.933-9.144 82.29 82.29 0 0 1-.597-2.367m80.861-7.248a169.016 169.016 0 0 0-2.596-11.196m.737 83.493a166.01 166.01 0 0 0 2.082-9.463m1.014-5.935a165.476 165.476 0 0 0-.156-50.796m3.04 65.929a171.42 171.42 0 0 0 3.707-21.21m-4.51-62.116c-.12-.463-.242-.926-.366-1.388a5.743 5.743 0 0 0-11.096 2.973 161.908 161.908 0 0 1 4.794 26.513m11.731 28.073c1.251-16.583.101-33.598-3.713-50.587m-12.402 77.797a159.741 159.741 0 0 0 4.842-49.311m-10.6 48.624c.515-1.949.993-3.911 1.433-5.884m1.108-5.434a153.991 153.991 0 0 0 1.272-48.123m-.905-6a157.03 157.03 0 0 0-3.107-14.182 11.48 11.48 0 0 1 2.778-10.899m21.083 90.519a177.255 177.255 0 0 0 2.664-14.383m.73-5.796a176.735 176.735 0 0 0 .323-35.168m2.452 54.046a182.553 182.553 0 0 0 3.914-31.968m.102-6.27c-.014-15.691-2.054-31.638-6.308-47.514a17.15 17.15 0 0 0-5.496-8.68M88.3 65.455a17.153 17.153 0 0 0-10.797-.62c-8.725 2.338-14.083 10.969-12.499 19.7m.386 78.533a148.503 148.503 0 0 0 4.893-31.487m.16-6.137a149.259 149.259 0 0 0-4.101-35.47m-6.501 71.608a143.02 143.02 0 0 0 3.746-19.139m.648-6.268c1.292-15.957-.083-32.402-4.464-48.751a22.867 22.867 0 0 1 .398-13.226m2.799-5.644a22.884 22.884 0 0 1 13.048-9.267c9.08-2.433 18.346.928 23.875 7.817m3.004 4.9a23.16 23.16 0 0 1 1.258 3.528 192.094 192.094 0 0 1 3.225 14.15m-.275 71.426c.215-1.094.421-2.189.617-3.288m1.027-6.369a188.324 188.324 0 0 0-.342-55.801m4.97 63.182a193.99 193.99 0 0 0 1.976-13.956m-5.176-69.025c-.155-.602-.313-1.204-.474-1.806-2.261-8.436-8.053-14.984-15.359-18.48m21.556 83.118c1.351-18.682.014-37.84-4.305-56.969M88.679 53.553a28.59 28.59 0 0 0-14.148.187c-12.36 3.312-20.667 14.203-21.258 26.333m.3 5.743c.159 1.031.375 2.064.651 3.096a138.813 138.813 0 0 1 4.037 21.988 136.805 136.805 0 0 1-.851 34.281m-2.99 14.436a137.594 137.594 0 0 0 1.96-8.525m-7.342 6.399a131.369 131.369 0 0 0 4.034-26.797m.139-5.983a131.735 131.735 0 0 0-2.297-24.507m-1.321-6.187a134.633 134.633 0 0 0-.916-3.619c-3.884-14.493 2.075-29.305 13.779-37.338m5.164-2.92a34.694 34.694 0 0 1 5.424-1.947c10.383-2.783 20.93-.513 29.031 5.302m4.594 3.951a34.304 34.304 0 0 1 8.58 15.114 203.072 203.072 0 0 1 4.982 24.53m-.568 59.018c.351-2.206.666-4.422.944-6.645m.675-6.175a199.627 199.627 0 0 0-.35-40.588m5.096 49.622a205.025 205.025 0 0 0 1.856-25.62m-.036-6.301a206.181 206.181 0 0 0-3.301-32.643m-1.199-6.07a210.787 210.787 0 0 0-2.551-10.615c-3.048-11.376-10.683-20.3-20.381-25.313m-5.427-2.32a40.017 40.017 0 0 0-23.432-.795 40.017 40.017 0 0 0-18.527 10.91m-3.839 4.633c-6.692 9.428-9.288 21.656-6.062 33.697a127.686 127.686 0 0 1 2.958 14.221m-2.276 48.624a125.82 125.82 0 0 0 2.413-12.458m.724-6.221c.716-7.858.698-15.856-.108-23.904m-8.201 39.509a119.803 119.803 0 0 0 3.073-28.472m-.236-6.18a121.183 121.183 0 0 0-3.895-23.633 45.799 45.799 0 0 1-1.11-18.433m1.23-5.817c3.987-14.227 14.743-26.185 29.553-31.173m5.405-1.466c11.4-2.368 22.8-.262 32.265 5.198m21.028 26.526c.137.456.268.917.393 1.38a214.183 214.183 0 0 1 6.052 32.272m-22.488-56.854a45.73 45.73 0 0 1 13.92 17.527m8.543 85.266c.427-3.88.748-7.783.96-11.703m.242-6.16a211.05 211.05 0 0 0-.592-21.841m5.676 34.304c.674-8.225.881-16.534.603-24.895m-.29-6.109a218.734 218.734 0 0 0-4.978-34.788m-1.482-6.143c-.201-.788-.408-1.575-.619-2.362-2.179-8.132-6.18-15.29-11.448-21.15M90.527 30.49a51.904 51.904 0 0 1 25.525 12.125M84.404 29.832a51.662 51.662 0 0 0-15.82 1.717 51.636 51.636 0 0 0-15.187 6.832M30.393 85.143a51.961 51.961 0 0 0 1.64 9.715 116.44 116.44 0 0 1 1.869 8.121m-3.583-24.014c.694-14.315 7.356-27.672 18.131-36.857M33.57 147.96c.367-1.761.694-3.534.978-5.316m.765-5.705c1-9.232.884-18.692-.452-28.197m-6.31 34.914c.704-3.947 1.191-7.949 1.453-11.991m.224-6.148a109.232 109.232 0 0 0-3.742-29.173c-.212-.79-.406-1.58-.583-2.37m-1-5.876c-2.766-23.598 9.421-46.417 30.17-57.384m5.275-2.453a58.011 58.011 0 0 1 6.75-2.26c23.176-6.21 46.841 2.682 60.548 20.643m3.272 4.771a57.439 57.439 0 0 1 6.522 15.199 226.796 226.796 0 0 1 4.515 20.642m2.893 48.577c.09-1.799.158-3.601.205-5.407m.073-5.965a222.877 222.877 0 0 0-2.276-31.5m8.008 34.423c.083-7.127-.168-14.3-.765-21.498m-.586-6.086a231.493 231.493 0 0 0-6.519-34.673c-3.582-13.366-11.192-24.578-21.174-32.678M75.746 18.6c14.883-1.49 29.429 2.407 41.336 10.361m-47.481-9.44c-1.33.267-2.66.578-3.99.934C50.485 24.507 38.12 33.72 29.9 45.69m-3.255 5.273c-7.613 13.798-10.107 30.444-5.706 46.868a104.264 104.264 0 0 1 2.779 14.269m-.184 26.509a102.608 102.608 0 0 0 .75-20.418m-5.864 14.356c.125-1.521.213-3.048.266-4.581m.006-6.463a97.93 97.93 0 0 0-3.3-22.186c-2.685-10.016-3.018-20.11-1.339-29.692m1.326-5.98c5.69-21.168 21.346-39.086 43.035-46.943m5.712-1.796c13.88-3.719 27.908-2.924 40.522 1.485m5.592 2.232c15.281 6.885 27.959 19.27 34.935 35.364m2.164 5.664c.436 1.31.836 2.64 1.198 3.99a237.984 237.984 0 0 1 5.55 26.756m2.402 26.56a234.352 234.352 0 0 0-1.589-20.534m2.05-22.401a244.684 244.684 0 0 0-2.866-11.868 74.53 74.53 0 0 0-10.755-23.244m17.967 63.232a241.434 241.434 0 0 0-3.148-22.198M95.197 7.98a74.953 74.953 0 0 1 44.722 26.398M89.177 7.142A74.503 74.503 0 0 0 62.638 9.36a74.642 74.642 0 0 0-20.558 8.976M7.34 84.425a74.923 74.923 0 0 0 2.503 16.379 93.213 93.213 0 0 1 1.372 5.875M7.324 78.884c.779-22.635 11.898-43.711 29.862-57.178m-24.19 102.515a91.46 91.46 0 0 0-.77-11.421M2.543 94.09a79.98 79.98 0 0 1 4.463-41.73m2.404-5.55c7.246-15.146 19.178-27.966 34.472-36.17m5.521-2.695a81.02 81.02 0 0 1 11.748-4.134c19.677-5.273 39.606-2.77 56.524 5.625m5.199 2.822a80.738 80.738 0 0 1 11.5 8.232m28.006 51.482a250.087 250.087 0 0 0-2.602-10.75m-21.058-36.718a79.929 79.929 0 0 1 19.414 31.213",
                  stroke: "white",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeDasharray: "80 80",
                  strokeDashoffset: n ? 0 : m,
                }),
                (0, a.jsx)("defs", {
                  children: (0, a.jsxs)("radialGradient", {
                    id: "gradient",
                    cx: l ? "".concat(l, "%") : "-100%",
                    cy: o ? "".concat(o, "%") : "-100%",
                    r: "0.8",
                    children: [
                      (0, a.jsx)("stop", {
                        stopColor: "#D6C7FF",
                        stopOpacity: "1",
                      }),
                      (0, a.jsx)("stop", {
                        offset: "1",
                        stopColor: "#8951FF",
                        stopOpacity: "1",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      function Graphic(e) {
        let { onScan: t } = e,
          n = (0, m.s)(),
          [r, i] = (0, d.useState)(!1);
        return n
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: c().center,
                  children: [
                    (0, a.jsx)(PII_FingerPrint, {
                      active: r,
                      onComplete: () => {
                        i(!0),
                          t(),
                          setTimeout(() => {
                            i(!1);
                          }, 1e3);
                      },
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 1.2 },
                    }),
                    (0, a.jsx)(N.E.div, {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.7 },
                      className: c().circle,
                    }),
                  ],
                }),
                (0, a.jsx)("svg", {
                  width: "700",
                  height: "700",
                  viewBox: "0 0 700 700",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: R.map((e, t) =>
                    (0, a.jsx)(
                      Path,
                      { active: r, index: t, points: e.points },
                      t,
                    ),
                  ),
                }),
              ],
            })
          : null;
      }
      function Path(e) {
        let { index: t, points: n, active: r } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(N.E.circle, {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 0.7 },
              transition: { delay: 0.07 * t, duration: 0.5 },
              cx: n[0][0],
              cy: n[0][1],
              r: "5",
              fill: "none",
              stroke: "#EFE9FF",
              strokeWidth: "1.5",
              style: { pointerEvents: "none" },
            }),
            (0, a.jsx)(N.E.path, {
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { delay: 0.08 * t, duration: 0.5, ease: "easeIn" },
              d: generatePath(n),
              fill: "none",
              stroke: "url(#gradient-".concat(t, ")"),
              strokeWidth: "2",
            }),
            (0, a.jsx)(N.E.path, {
              d: generatePath(n),
              fill: "none",
              stroke: "url(#glow-".concat(t, ")"),
              strokeWidth: "2",
            }),
            (0, a.jsx)(N.E.path, {
              d: generatePath(n),
              fill: "none",
              stroke: "url(#active-".concat(t, ")"),
              strokeWidth: "2",
              strokeDasharray: "300 300",
              initial: { strokeDashoffset: -300 },
              animate: { strokeDashoffset: r ? 0 : -300 },
              transition: {
                delay: 0.01 * t,
                duration: randomFloatBetween(0.3, 0.5),
                ease: "easeIn",
              },
            }),
            (0, a.jsx)(PingGradient, { index: t, points: n }),
            (0, a.jsx)(ActiveGradient, { isActive: r, index: t, points: n }, t),
            (0, a.jsxs)("linearGradient", {
              id: "gradient-".concat(t),
              gradientUnits: "userSpaceOnUse",
              x1: n[0][0],
              y1: n[0][1],
              x2: n[n.length - 1][0],
              y2: n[n.length - 1][1],
              children: [
                (0, a.jsx)("stop", {
                  offset: "0%",
                  stopColor: "rgb(239 233 255 / 0.3)",
                }),
                (0, a.jsx)("stop", {
                  offset: "40%",
                  stopColor: "rgb(239 233 255 / 0.12)",
                }),
                (0, a.jsx)("stop", {
                  offset: "100%",
                  stopColor: "rgb(239 233 255 / 0.08)",
                }),
              ],
            }),
          ],
        });
      }
      function PingGradient(e) {
        let { index: t, points: n } = e,
          r = n[0],
          i = n[n.length - 1],
          [l, o] = (function (e, t) {
            let n = t[0] - e[0],
              a = t[1] - e[1],
              r = Math.sqrt(n * n + a * a);
            return (
              (n /= r),
              (a /= r),
              [
                [e[0] - 50 * n, e[1] - 50 * a],
                [t[0] + 50 * n, t[1] + 50 * a],
              ]
            );
          })(r, i);
        return (0, a.jsxs)(
          N.E.linearGradient,
          {
            id: "glow-".concat(t),
            gradientUnits: "userSpaceOnUse",
            initial: { x1: l[0], y1: l[1], x2: r[0], y2: r[1] },
            animate: { x1: i[0], y1: i[1], x2: o[0], y2: o[1] },
            transition: {
              duration: randomFloatBetween(0.7, 1.2),
              ease: "easeIn",
              repeat: 1 / 0,
              delay: 2 + t * randomFloatBetween(0.4, 0.9),
              repeatDelay: randomFloatBetween(3, 8),
            },
            children: [
              (0, a.jsx)("stop", {
                offset: "0%",
                stopColor: "rgba(239, 233, 255, 0)",
              }),
              (0, a.jsx)("stop", {
                offset: "90%",
                stopColor: "rgba(239, 233, 255, 1)",
              }),
              (0, a.jsx)("stop", {
                offset: "100%",
                stopColor: "rgba(239, 233, 255, 0)",
              }),
            ],
          },
          t,
        );
      }
      function ActiveGradient(e) {
        let { index: t, points: n } = e,
          r = n[0],
          i = n[n.length - 1];
        return (0, a.jsxs)(
          "linearGradient",
          {
            id: "active-".concat(t),
            gradientUnits: "userSpaceOnUse",
            x1: r[0],
            y1: r[1],
            x2: i[0],
            y2: i[1],
            children: [
              (0, a.jsx)("stop", {
                offset: "40%",
                stopColor: "rgb(215 200 255 / 0)",
              }),
              (0, a.jsx)("stop", {
                offset: "70%",
                stopColor: "rgb(100 20 255 / 1)",
              }),
              (0, a.jsx)("stop", {
                offset: "100%",
                stopColor: "rgb(240 230 255 / 1)",
              }),
            ],
          },
          t,
        );
      }
      function generatePath(e) {
        let [t, ...n] = e,
          a = e[0][0],
          r = e[0][1];
        return (
          r < n[0][1] && (r += 10),
          r > n[0][1] && (r -= 10),
          a < n[0][0] && (a += 10),
          a > n[0][0] && (a -= 10),
          " M "
            .concat(a, " ")
            .concat(r, " ")
            .concat(n.map((e) => "L ".concat(e[0], " ").concat(e[1])).join(" "))
        );
      }
      let R = (function (e) {
        for (let t = e.length - 1; t > 0; t--) {
          let n = Math.floor(Math.random() * (t + 1)),
            a = e[t];
          (e[t] = e[n]), (e[n] = a);
        }
        return e;
      })([
        {
          points: [
            [170, 10],
            [170, 100],
            [280, 210],
            [280, 268],
          ],
        },
        {
          points: [
            [260, 50],
            [260, 130],
            [320, 190],
            [320, 246],
          ],
        },
        {
          points: [
            [450, 70],
            [450, 120],
            [370, 200],
            [370, 245],
          ],
        },
        {
          points: [
            [570, 20],
            [570, 90],
            [410, 240],
            [410, 260],
          ],
        },
        {
          points: [
            [600, 220],
            [540, 220],
            [480, 280],
            [432, 280],
          ],
        },
        {
          points: [
            [680, 280],
            [600, 280],
            [550, 330],
            [455, 330],
          ],
        },
        {
          points: [
            [640, 440],
            [600, 440],
            [530, 370],
            [455, 370],
          ],
        },
        {
          points: [
            [690, 490],
            [560, 490],
            [490, 420],
            [432, 420],
          ],
        },
        {
          points: [
            [490, 630],
            [490, 560],
            [410, 480],
            [410, 440],
          ],
        },
        {
          points: [
            [440, 690],
            [440, 590],
            [370, 520],
            [370, 455],
          ],
        },
        {
          points: [
            [260, 640],
            [260, 600],
            [330, 530],
            [330, 455],
          ],
        },
        {
          points: [
            [180, 600],
            [180, 560],
            [280, 460],
            [280, 432],
          ],
        },
        {
          points: [
            [30, 500],
            [90, 500],
            [190, 400],
            [255, 400],
          ],
        },
        {
          points: [
            [70, 420],
            [100, 420],
            [160, 360],
            [240, 360],
          ],
        },
        {
          points: [
            [90, 280],
            [140, 280],
            [180, 320],
            [245, 320],
          ],
        },
        {
          points: [
            [40, 180],
            [100, 180],
            [200, 280],
            [268, 280],
          ],
        },
      ]);
      function randomFloatBetween(e, t) {
        return Math.random() * (t - e) + e;
      }
      let D = new _.Howl({ src: ["/audio/pii/hit.mp3"], volume: 1.5 });
      function DataStream() {
        let [e, t] = (0, d.useState)([]),
          n = (0, d.useRef)(0);
        return (
          (0, E.A)((e, a) => {
            let { clock: r } = e,
              i = 3 - Math.min(0.0025 * y.current, 1) * a;
            r.elapsedTime - n.current < i ||
              ((n.current = r.elapsedTime),
              t((e) => [
                ...e,
                { id: (0, S.DO)(), y: randomFloatBetween(-2.5, 2.5) },
              ]));
          }),
          (0, d.useEffect)(() => {
            let handleRemoveData = (e) => {
              let { detail: n } = e,
                { id: a } = n;
              t((e) => e.filter((e) => e.id !== a));
            };
            return (
              window.addEventListener("REMOVE_DATA", handleRemoveData),
              () => {
                window.removeEventListener("REMOVE_DATA", handleRemoveData);
              }
            );
          }, []),
          e.map((e) => (0, a.jsx)(F, { data: e }, e.id))
        );
      }
      let F = (0, d.memo)(function (e) {
          let { data: t } = e,
            n = (0, d.useRef)(),
            r = (0, d.useRef)(),
            i = (0, d.useRef)(),
            l = (0, d.useRef)(!1),
            o = (0, d.useRef)(!1),
            q = useRandomPII();
          return (
            (0, E.A)((e, t) => {
              if (!n.current || l.current) return;
              let a = (0, j.R3)(n.current.translation());
              (a.x -= (2 + 0.1 * y.current) * t),
                n.current.setTranslation(a, !0);
            }),
            (0, a.jsxs)(j.ib, {
              ref: n,
              sensor: !0,
              colliders: "cuboid",
              position: [8, t.y, 0],
              onIntersectionEnter: (e) => {
                let { other: a } = e;
                if (
                  a.rigidBodyObject.name.startsWith("deadZone") &&
                  !o.current
                ) {
                  let e = new CustomEvent("GAME_OVER");
                  window.dispatchEvent(e);
                }
                if (a.rigidBodyObject.name.startsWith("bounds")) {
                  let e = new CustomEvent("REMOVE_DATA", {
                    detail: { id: t.id },
                  });
                  window.dispatchEvent(e);
                }
                if (!o.current && a.rigidBodyObject.name.startsWith("bullet")) {
                  D.play(),
                    (r.current.opacity = 0),
                    (i.current.opacity = 1),
                    a.rigidBody.setEnabled(!1),
                    (o.current = !0);
                  let e = new CustomEvent("BULLET_HIT", {
                    detail: { id: a.rigidBodyObject.name },
                  });
                  window.dispatchEvent(e);
                  let t = new CustomEvent("EXPLOSION", {
                    detail: { position: (0, j.R3)(n.current.translation()) },
                  });
                  window.dispatchEvent(t);
                }
              },
              children: [
                (0, a.jsxs)(T.o, {
                  font: C,
                  size: 0.17,
                  letterSpacing: 0.05,
                  height: 0.001,
                  children: [
                    q,
                    (0, a.jsx)("meshBasicMaterial", {
                      ref: r,
                      color: "white",
                      transparent: !0,
                    }),
                  ],
                }),
                (0, a.jsxs)(T.o, {
                  font: C,
                  size: 0.17,
                  letterSpacing: 0.05,
                  height: 0.001,
                  children: [
                    (function (e) {
                      let t = e.split("").map(randomChar).join("");
                      return "EV:".concat(t.slice(3));
                    })(q),
                    (0, a.jsx)("meshBasicMaterial", {
                      ref: i,
                      color: "#6A6684",
                      transparent: !0,
                      opacity: 0,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        B = (0, d.memo)(function () {
          let e = (0, d.useRef)(),
            t = (0, d.useMemo)(() => {
              let e = new Float32Array(150),
                t = new Float32Array(50);
              for (let n = 0; n < 50; n++)
                (e[3 * n] = Math.random() - 0.5),
                  (e[3 * n + 1] = Math.random() - 0.5),
                  (e[3 * n + 2] = 0),
                  (t[n] = Math.random());
              let n = new w.BufferGeometry();
              return (
                n.setAttribute("position", new w.BufferAttribute(e, 3)),
                n.setAttribute("random", new w.BufferAttribute(t, 1)),
                n
              );
            }, []);
          return (
            (0, E.A)((t) => {
              let { clock: n } = t;
              e.current.uniforms.uTime.value = n.getElapsedTime();
            }),
            (0, a.jsxs)("points", {
              scale: [0.2, 0.06, 1],
              "position-x": -0.45,
              children: [
                (0, a.jsx)("bufferGeometry", { attach: "geometry", ...t }),
                (0, a.jsx)("shaderMaterial", {
                  ref: e,
                  transparent: !0,
                  vertexShader: z,
                  fragmentShader: O,
                  uniforms: {
                    uTime: { value: 0 },
                    uColorPrimary: { value: new w.Color("#FF4F28") },
                    uColorSecondary: { value: new w.Color("#FFFFFF") },
                  },
                }),
              ],
            })
          );
        }),
        z =
          "\nuniform float uTime;\nattribute float random;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  vRandom = random;\n  float speed = 1.0;\n  speed = speed + (speed * random);\n  vec3 pos = position;\n  pos.x -= uTime * speed;\n  pos.x = -0.5 + mod(pos.x, 1.0);\n  x = pos.x;\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n  gl_PointSize = 2.5 + (2.5 * random);\n}\n",
        O =
          "\nuniform vec3 uColorPrimary;\nuniform vec3 uColorSecondary;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  vec3 color = mix(uColorPrimary, uColorSecondary, vRandom);\n  float alpha = clamp(vRandom, 0.0, 0.5);\n  gl_FragColor = vec4(color, 0.5 + x);\n}\n";
      function Player() {
        let { controls: e } = useGameState();
        return (
          (0, E.A)((t, n) => {
            if (!$.current) return;
            let a = (e.current.shift ? 2 : 1) * n,
              r = $.current.position.y,
              i = $.current.position.x;
            if (e.current.up | e.current.down) {
              let t = r + (e.current.up ? 2 * a : -2 * a);
              if (t > 3.5 || t < -3.5) return;
              $.current.position.y = t;
            }
            if (e.current.left | e.current.right) {
              let t = i + (e.current.left ? -2 * a : 2 * a);
              if (t > 6.5 || t < -6.5) return;
              $.current.position.x = t;
            }
          }),
          (0, a.jsxs)("group", {
            ref: $,
            "position-x": -4,
            children: [
              (0, a.jsx)(B, {}),
              (0, a.jsx)(Pixel, {}),
              (0, a.jsx)(Pixel, { x: -1, y: -1 }),
              (0, a.jsx)(Pixel, { x: -1, y: 0 }),
              (0, a.jsx)(Pixel, { x: -1, y: 1 }),
              (0, a.jsx)(Pixel, { x: -2, y: -1 }),
              (0, a.jsx)(Pixel, { x: -2, y: 0, color: "#63e" }),
              (0, a.jsx)(Pixel, { x: -2, y: 1 }),
              (0, a.jsx)(Pixel, { x: -3, y: -2 }),
              (0, a.jsx)(Pixel, { x: -3, y: -1 }),
              (0, a.jsx)(Pixel, { x: -3, y: 0 }),
              (0, a.jsx)(Pixel, { x: -3, y: 1 }),
              (0, a.jsx)(Pixel, { x: -3, y: 2 }),
              (0, a.jsx)(Pixel, { x: -4, y: 3 }),
              (0, a.jsx)(Pixel, { x: -4, y: 2 }),
              (0, a.jsx)(Pixel, { x: -4, y: 1 }),
              (0, a.jsx)(Pixel, { x: -4, y: -1 }),
              (0, a.jsx)(Pixel, { x: -4, y: -2 }),
              (0, a.jsx)(Pixel, { x: -4, y: -3 }),
              (0, a.jsx)(Pixel, { x: -5, y: 3 }),
              (0, a.jsx)(Pixel, { x: -5, y: -3 }),
            ],
          })
        );
      }
      function Pixel(e) {
        let { x: t = 0, y: n = 0, color: r = "white" } = e;
        return (0, a.jsxs)("mesh", {
          "position-x": 0.06 * t,
          "position-y": 0.06 * n,
          "position-z": 0.5,
          children: [
            (0, a.jsx)("planeGeometry", { args: [0.06, 0.06] }),
            (0, a.jsx)("meshBasicMaterial", { color: r }),
          ],
        });
      }
      function Explosions() {
        let [e, t] = (0, d.useState)([]);
        return (
          (0, d.useEffect)(() => {
            let handleExplosion = (e) => {
                t((t) => [
                  ...t,
                  { id: Math.random(), position: e.detail.position },
                ]);
              },
              removeExplosion = (e) => {
                let { detail: n } = e,
                  { id: a } = n;
                t((e) => e.filter((e) => e.id !== a));
              };
            return (
              window.addEventListener("EXPLOSION", handleExplosion),
              window.addEventListener("EXPLOSION_COMPLETE", removeExplosion),
              () => {
                window.removeEventListener("EXPLOSION", handleExplosion),
                  window.removeEventListener(
                    "EXPLOSION_COMPLETE",
                    removeExplosion,
                  );
              }
            );
          }, []),
          e.map((e) => (0, a.jsx)(G, { explosion: e }, e.id))
        );
      }
      let G = (0, d.memo)(function (e) {
          let { explosion: t } = e,
            n = (0, d.useRef)(),
            r = (0, d.useRef)(),
            i = (0, d.useMemo)(() => {
              let e = new Float32Array(75),
                t = new Float32Array(25),
                n = new Float32Array(25),
                a = new Float32Array(25);
              for (let r = 0; r < 25; r++)
                (e[3 * r + 0] = 0),
                  (e[3 * r + 1] = 0),
                  (e[3 * r + 2] = 0),
                  (t[r] = randomFloatBetween(-1, 1)),
                  (n[r] = randomFloatBetween(-1, 1)),
                  (a[r] = randomFloatBetween(0, 1));
              let r = new w.BufferGeometry();
              return (
                r.setAttribute("position", new w.BufferAttribute(e, 3)),
                r.setAttribute("xDirection", new w.BufferAttribute(t, 1)),
                r.setAttribute("yDirection", new w.BufferAttribute(n, 1)),
                r.setAttribute("random", new w.BufferAttribute(a, 1)),
                r
              );
            }, []);
          return (
            (0, E.A)((e, a) => {
              let { clock: i } = e;
              r.current || (r.current = i.elapsedTime);
              let l = i.elapsedTime - r.current;
              if (l > 2) {
                let e = new CustomEvent("EXPLOSION_COMPLETE", {
                  detail: { id: t.id },
                });
                window.dispatchEvent(e);
              }
              n.current && (n.current.uniforms.uTime.value = l);
            }),
            (0, a.jsxs)("points", {
              position: t.position,
              children: [
                (0, a.jsx)("bufferGeometry", { attach: "geometry", ...i }),
                (0, a.jsx)("shaderMaterial", {
                  ref: n,
                  transparent: !0,
                  vertexShader: Z,
                  fragmentShader: H,
                  uniforms: {
                    uTime: { value: 0 },
                    uColor: { value: new w.Color("#8C61FF") },
                  },
                }),
              ],
            })
          );
        }),
        Z =
          "\nuniform float uTime;\nattribute float xDirection;\nattribute float yDirection;\nattribute float random;\n\nvarying float vRandom;\n\nvoid main() {\n  vRandom = random;\n  float speed = 0.8 + (0.8 * random);\n  vec3 particlePosition = position;\n  particlePosition.x += xDirection * uTime * speed;\n  particlePosition.y += yDirection * uTime * speed;\n  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectedPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectedPosition;\n  gl_PointSize = 5.0 + (2.0 * random);\n}\n",
        H =
          "\nuniform float uTime;\nuniform vec3 uColor;\nvarying float vRandom;\n\nvoid main() {\n  float speed = 0.8;\n  vec3 white = vec3(1.0, 1.0, 1.0);\n  vec3 color = mix(white, uColor, vRandom);\n  float alpha = clamp(1.0 - uTime, 0.0, 1.0);\n  gl_FragColor = vec4(color, alpha);\n}\n",
        W = (0, d.memo)(function () {
          let e = (0, d.useRef)(),
            t = (0, d.useMemo)(() => {
              let e = new Float32Array(1500),
                t = new Float32Array(500);
              for (let n = 0; n < 500; n++)
                (e[3 * n] = Math.random() - 0.5),
                  (e[3 * n + 1] = Math.random() - 0.5),
                  (e[3 * n + 2] = Math.random() - 0.5),
                  (t[n] = Math.random());
              let n = new w.BufferGeometry();
              return (
                n.setAttribute("position", new w.BufferAttribute(e, 3)),
                n.setAttribute("random", new w.BufferAttribute(t, 1)),
                n
              );
            }, []);
          return (
            (0, E.A)((t) => {
              let { clock: n } = t;
              e.current.uniforms.uTime.value = n.getElapsedTime();
            }),
            (0, a.jsxs)("points", {
              scale: [20, 10, 1],
              children: [
                (0, a.jsx)("bufferGeometry", { attach: "geometry", ...t }),
                (0, a.jsx)("shaderMaterial", {
                  ref: e,
                  transparent: !0,
                  vertexShader: U,
                  fragmentShader: V,
                  uniforms: { uTime: { value: 0 } },
                }),
              ],
            })
          );
        }),
        U =
          "\nuniform float uTime;\nattribute float random;\nvarying float vRandom;\n\nvoid main() {\n  vRandom = random;\n  float speed = 0.03;\n  speed = speed + (speed * random);\n  vec3 pos = position;\n  pos.x -= uTime * speed;\n  pos.x = -0.5 + mod(pos.x, 1.0);\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n  gl_PointSize = 2.0 + (2.0 * random);\n}\n",
        V =
          "\nvarying float vRandom;\n\nvoid main() {\n  float alpha = clamp(vRandom, 0.0, 0.5);\n  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);\n}\n",
        Q = (0, d.memo)(function () {
          let e = (0, d.useRef)(),
            t = (0, d.useMemo)(() => {
              let e = new Float32Array(3e3),
                t = new Float32Array(1e3);
              for (let n = 0; n < 1e3; n++)
                (e[3 * n] = Math.random() - 0.5),
                  (e[3 * n + 1] = Math.random() - 0.5),
                  (e[3 * n + 2] = Math.random() - 0.5),
                  (t[n] = Math.random());
              let n = new w.BufferGeometry();
              return (
                n.setAttribute("position", new w.BufferAttribute(e, 3)),
                n.setAttribute("random", new w.BufferAttribute(t, 1)),
                n
              );
            }, []);
          return (
            (0, E.A)((t) => {
              let { clock: n } = t;
              e.current.uniforms.uTime.value = n.getElapsedTime();
            }),
            (0, a.jsxs)("group", {
              "position-x": -5.3,
              children: [
                (0, a.jsxs)("points", {
                  scale: [1, 10, 1],
                  children: [
                    (0, a.jsx)("bufferGeometry", { attach: "geometry", ...t }),
                    (0, a.jsx)("shaderMaterial", {
                      ref: e,
                      transparent: !0,
                      vertexShader: X,
                      fragmentShader: Y,
                      uniforms: {
                        uTime: { value: 0 },
                        uColor: { value: new w.Color("#8C61FF") },
                      },
                    }),
                  ],
                }),
                (0, a.jsxs)("mesh", {
                  "position-z": 0.1,
                  "position-x": -0.1,
                  children: [
                    (0, a.jsx)("planeGeometry", { args: [0.5, 10] }),
                    (0, a.jsx)("shaderMaterial", {
                      transparent: !0,
                      vertexShader: K,
                      fragmentShader: J,
                      uniforms: { uColor: { value: new w.Color("#6F47DC") } },
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        X =
          "\nuniform float uTime;\nattribute float random;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  vRandom = random;\n  float speed = 0.1;\n  speed = speed + (speed * random);\n  vec3 pos = position;\n  pos.x += uTime * speed;\n  pos.x = -0.5 + mod(pos.x, 1.0);\n  x = pos.x;\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n  gl_PointSize = 2.5 + (2.5 * random);\n}\n",
        Y =
          "\nvarying float vRandom;\nuniform vec3 uColor;\nvarying float x;\n\nvoid main() {\n  float alpha = x * (1.0 - (abs(x) * 2.0));\n  vec3 white = vec3(1.0);\n  vec3 color = mix(white, uColor, vRandom);\n  gl_FragColor = vec4(color, 1.0 - (0.5 + x));\n}\n",
        K =
          "\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 modelPosition = modelMatrix * vec4(position, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n}\n",
        J =
          "\nvarying vec2 vUv;\nuniform vec3 uColor;\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.0- vUv.x);\n}\n";
      function Zone(e) {
        let { name: t, position: n } = e;
        return (0, a.jsx)(j.ib, {
          position: n,
          colliders: "cuboid",
          name: t,
          sensor: !0,
          children: (0, a.jsxs)("mesh", {
            children: [
              (0, a.jsx)("boxGeometry", { args: [0.5, 10, 1] }),
              (0, a.jsx)("meshBasicMaterial", {
                color: "white",
                opacity: 0,
                transparent: !0,
              }),
            ],
          }),
        });
      }
      function Play() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(HUD, {}),
            (0, a.jsxs)(g.Xz, {
              dpr: window.devicePixelRatio,
              className: h().canvas,
              camera: { fov: 10, position: [0, 0, 50] },
              children: [
                (0, a.jsx)(W, {}),
                (0, a.jsx)(Q, {}),
                (0, a.jsx)(d.Suspense, {
                  fallback: null,
                  children: (0, a.jsxs)(j.wI, {
                    gravity: [0, 0, 0],
                    children: [
                      (0, a.jsx)(Player, {}),
                      (0, a.jsx)(Bullets, {}),
                      (0, a.jsx)(Explosions, {}),
                      (0, a.jsx)(DataStream, {}),
                      (0, a.jsx)(Zone, {
                        name: "deadZone",
                        position: [-6, 0, 0],
                      }),
                      (0, a.jsx)(Zone, {
                        name: "bounds",
                        position: [12, 0, 0],
                      }),
                      (0, a.jsx)(Zone, {
                        name: "bounds",
                        position: [-9, 0, 0],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function HUD() {
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(Score, {}),
            (0, a.jsxs)("div", {
              className: h().hudBottom,
              children: [
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", {
                      className: h().hudLabel,
                      children: "Move",
                    }),
                    (0, a.jsx)("span", {
                      className: h().hudValue,
                      children: "WASD",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", {
                      className: h().hudLabel,
                      children: "Shoot",
                    }),
                    (0, a.jsx)("span", {
                      className: h().hudValue,
                      children: "Space",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("span", {
                      className: h().hudLabel,
                      children: "Boost",
                    }),
                    (0, a.jsx)("span", {
                      className: h().hudValue,
                      children: "Shift",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Score() {
        let { score: e } = useGame();
        return (0, a.jsxs)("div", {
          className: h().score,
          children: [
            (0, a.jsx)("span", { className: h().hudLabel, children: "Score" }),
            (0, a.jsx)("span", { className: h().hudValue, children: e }),
          ],
        });
      }
      var Game_Arrows = (e) =>
        (0, a.jsx)("svg", {
          width: 42,
          height: 42,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "m18 4 3-3 3 3M4 24l-3-3 3-3M18 38l3 3 3-3M38 24l3-3-3-3",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      let $ = (0, d.createRef)(),
        ee = new _.Howl({
          src: ["/audio/pii/music.mp3"],
          loop: !0,
          volume: 0.5,
        });
      function Game(e) {
        let { onQuit: t } = e,
          n = (0, m.s)(),
          r = useGameState(),
          handleQuit = () => {
            ee.stop(), t();
          };
        return ((0, d.useEffect)(
          () => (
            ee.playing() || ee.play(),
            (document.body.style.overflow = "hidden"),
            () => {
              document.body.style.overflow = "visible";
            }
          ),
          [],
        ),
        n)
          ? (0, a.jsx)(f.Provider, {
              value: r,
              children: (0, a.jsxs)("div", {
                className: h().game,
                "data-playing": r.stage === p,
                children: [
                  (0, a.jsxs)("div", {
                    className: h().screen,
                    children: [
                      r.stage === x && (0, a.jsx)(Menu, { onQuit: handleQuit }),
                      r.stage === v &&
                        (0, a.jsx)(GameOver, { onQuit: handleQuit }),
                      r.stage === p && (0, a.jsx)(Play, {}),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: h().controls,
                    children: [
                      (0, a.jsx)(JoyStick, {}),
                      (0, a.jsxs)("div", {
                        className: h().buttons,
                        children: [
                          (0, a.jsx)(SpecialWeaponButton, {}),
                          (0, a.jsx)(ShootButton, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      }
      function SpecialWeaponButton() {
        return (0, a.jsx)("div", {
          className: h().controllerButton,
          "data-variant": "special",
          onTouchStart: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !0 } });
            window.dispatchEvent(e);
          },
          onTouchEnd: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !1 } });
            window.dispatchEvent(e);
          },
          children: "B",
        });
      }
      function ShootButton() {
        return (0, a.jsx)("div", {
          className: h().controllerButton,
          onTouchStart: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !0 } });
            window.dispatchEvent(e);
          },
          onTouchEnd: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !1 } });
            window.dispatchEvent(e);
          },
          children: "A",
        });
      }
      function JoyStick() {
        return (0, a.jsx)("div", {
          onTouchStart: (e) => {
            e.preventDefault();
            let t = e.touches[0],
              handleMove = (e) => {
                e.preventDefault();
                let n = e.touches[0],
                  a = n.clientX - t.clientX,
                  r = n.clientY - t.clientY,
                  i = Math.abs(r) > 20,
                  l = Math.abs(a) > 20,
                  o = new CustomEvent("JOYSTICK", {
                    detail: {
                      up: i && r < 0,
                      down: i && r > 0,
                      left: l && a < 0,
                      right: l && a > 0,
                    },
                  });
                window.dispatchEvent(o);
              },
              handleEnd = (e) => {
                e.preventDefault();
                let t = new CustomEvent("JOYSTICK", {
                  detail: { up: !1, down: !1, left: !1, right: !1 },
                });
                window.dispatchEvent(t),
                  e.target.removeEventListener("touchmove", handleMove),
                  e.target.removeEventListener("touchend", handleEnd);
              };
            e.target.addEventListener("touchmove", handleMove),
              e.target.addEventListener("touchend", handleEnd);
          },
          className: h().control,
          children: (0, a.jsx)(Game_Arrows, {}),
        });
      }
      function Menu(e) {
        let { onQuit: t } = e,
          { play: n } = useGame();
        return (0, a.jsxs)("div", {
          className: h().menu,
          children: [
            (0, a.jsxs)("h1", {
              children: ["PII ", (0, a.jsx)("br", {}), "Defender"],
            }),
            (0, a.jsx)("p", {
              children:
                "Prevent a data breach by encrypting any PII before it reaches your server.",
            }),
            (0, a.jsx)("button", { onClick: n, children: "Play" }),
            (0, a.jsx)("button", { onClick: t, children: "quit" }),
          ],
        });
      }
      let et = new _.Howl({ src: ["/audio/pii/gameOver.mp3"], volume: 2 });
      function GameOver(e) {
        let { onQuit: t } = e,
          { play: n, score: r } = useGame();
        return (
          (0, d.useEffect)(() => {
            et.playing() || et.play();
          }, []),
          (0, a.jsxs)("div", {
            className: h().menu,
            children: [
              (0, a.jsx)("h1", { children: "GAME OVER" }),
              (0, a.jsxs)("p", { children: ["Score: ", r] }),
              (0, a.jsx)("p", {
                children:
                  "Prevent a data breach by encrypting any PII before it reaches your server.",
              }),
              (0, a.jsx)("button", { onClick: n, children: "Play Again" }),
              (0, a.jsx)("button", { onClick: t, children: "quit" }),
            ],
          })
        );
      }
      var en = n(37519),
        ea = n(35800);
      function Hero() {
        let [e, t] = (0, d.useState)(!1),
          { openSalesForm: n } = (0, d.useContext)(en.G);
        return (0, a.jsxs)(i.Z, {
          className: c().hero,
          children: [
            (0, a.jsx)(ea.ErrorBoundary, {
              fallback: (0, a.jsx)("div", {}),
              children: e && (0, a.jsx)(Game, { onQuit: () => t(!1) }),
            }),
            (0, a.jsxs)(o.Z, {
              className: c().container,
              children: [
                (0, a.jsx)(l.Z, {
                  as: "h1",
                  className: c().title,
                  children: "PII Encryption",
                }),
                (0, a.jsx)(l.Z, {
                  as: "p",
                  className: c().subText,
                  children:
                    "Easily encrypt Personally Identifiable Information (PII) within your infrastructure — eliminating the risk of data breaches and streamlining compliance with GDPR, CCPA and more.",
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)(q.Z, {
                      size: "large",
                      onClick: () => n({ context: "HIPAA — Hero" }),
                      children: "API docs",
                    }),
                    (0, a.jsx)(q.Z, {
                      type: "transparent",
                      size: "large",
                      href: "https://app.evervault.com/register",
                      as: "a",
                      target: "_blank",
                      children: "Try for free",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: c().graphic,
                  children: (0, a.jsx)(Graphic, {
                    onScan: () => {
                      setTimeout(() => {
                        t(!0);
                      }, [1e3]);
                    },
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var er = n(39892),
        ei = n(97004),
        el = n(62654),
        eo = n(54463),
        eq = n(84297);
      let es = (0, eq.Z)("Maximize2", [
        ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
        ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
        ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
        ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
      ]);
      var ec = n(87966),
        ed = n(23579),
        em = n(39455),
        eu = n(53517),
        eh = n(18660),
        ex = n(17103),
        ep = n(63494),
        ev = n(57307),
        ef = n(55578),
        ey = n(83106),
        e_ = n(70406),
        eg = n(87626),
        ej = n(45509);
      function PIIDiagrams() {
        return (0, a.jsxs)(o.Z, {
          className: c().container,
          children: [
            (0, a.jsx)("div", {
              className: c().heading,
              children: (0, a.jsx)(l.Z, {
                className: "mb-0",
                as: "h2",
                width: "70%",
                interactive: !0,
                children: "Protect PII anywhere in your stack",
              }),
            }),
            (0, a.jsx)(e_.h, {
              diagrams: [
                {
                  value: "ENCRYPT",
                  title: "Encrypt with our SDKs",
                  icon: (0, a.jsx)(eh.Z, {}),
                  description:
                    "Use our client or server SDKs to encrypt and decrypt sensitive data anywhere in your stack.",
                  diagram: (0, a.jsx)(ef.Q, {}),
                },
                {
                  value: "RELAY",
                  title: "Encrypt at the edge",
                  icon: (0, a.jsx)(ex.Z, {}),
                  description:
                    "Use Relay to encrypt data at the edge before it reaches your infrastructure.",
                  diagram: (0, a.jsx)(ej.l, {}),
                },
                {
                  value: "PROCESS",
                  title: "Process using your own code",
                  icon: (0, a.jsx)(ep.Z, {}),
                  description:
                    "With evervault Functions or Cages, you have the building blocks to process sensitive data using your own code or Docker containers with full code attestation guarantees.",
                  href: "https://docs.evervault.com/products/functions",
                  diagram: (0, a.jsx)(ey.q, {}),
                },
                {
                  value: "SHARE",
                  title: "Share sensitive data anywhere",
                  icon: (0, a.jsx)(ev.Z, {}),
                  description:
                    "Share encrypted PII with third party APIs and decrypt it at the edge so they see the plaintext but you never do.",
                  href: "https://docs.evervault.com/products/outbound-relay",
                  diagram: (0, a.jsx)(eg.p, {}),
                },
              ],
            }),
          ],
        });
      }
      var ew = n(11163);
      function pii_PII() {
        let e = (0, ew.useRouter)();
        return (0, a.jsxs)(er.Z, {
          title: "PII — evervault",
          description:
            "Encrypt Personally Identifiable Information (PII) within your infrastructure — eliminating the risk of data breaches and streamlining compliance with GDPR, CCPA and more.",
          socialImage: "https://evervault.com/social/pii.jpg",
          children: [
            (0, a.jsx)(Hero, {}),
            (0, a.jsx)(ei.Z, {
              heading: "Secure your customers’ PII",
              config: eE,
            }),
            (0, a.jsx)(PIIDiagrams, {}),
            (0, a.jsx)(ei.Z, {
              heading: "Use encrypted PII like plaintext PII",
              config: eS,
            }),
            (0, a.jsx)(el.Z, {
              testimonailsConfig: eb,
              rotationMap: [0, 0],
              logos: "/_next/static/media/logo-wheel.e71e91f2.svg",
              onClick: () => {
                e.push("/customers/swan");
              },
            }),
            (0, a.jsx)(r.Z, {
              maxWidth: 700,
              heading: "Remove plaintext PII from your infrastructure",
              subheading:
                "Get started with evervault in just a few minutes, and show your customers you’ve implemented best-in-class PII security.",
              href: "https://app.evervault.com/register",
              cta: "API docs",
            }),
          ],
        });
      }
      let eE = [
          {
            features: [
              {
                icon: (0, a.jsx)(eo.Z, { width: 16 }),
                title: "Reduced compliance obligations",
                description:
                  "evervault makes it easy to anonymize or pseudonymize sensitive customer PII, so you can easily comply with global privacy regulations like GDPR, CCPA and more.",
              },
              {
                icon: (0, a.jsx)(es, { width: 16 }),
                title: "Low configuration, high flexibility",
                description:
                  "With evervault you can collect sensitive PII anywhere in your stack, process it using your own code (with evervault Functions and Cages) or share it with any third-party — without ever handling the original plaintext PII.",
              },
              {
                icon: (0, a.jsx)(ec.Z, { width: 16 }),
                title: "Pass vendor security reviews with ease",
                description:
                  "Using evervault to secure customer PII makes it easy to pass vendor security reviews with potential customers.\n\nBuilding a mature security posture can increase your revenue growth rates over 40%",
              },
            ],
          },
        ],
        eS = [
          {
            features: [
              {
                icon: (0, a.jsx)(ed.Z, { width: 16 }),
                title: "Full traceability",
                description:
                  "See what data is processed or shared, and when. With evervault you get full audit logs showing exactly how your sensitive PII is used and accessed.",
              },
              {
                icon: (0, a.jsx)(em.Z, { width: 16 }),
                title: "Secure and compliant by design",
                description:
                  "By encrypting PII at the edge, it’s easier than ever to make your software secure and compliant by design.",
              },
              {
                icon: (0, a.jsx)(eu.Z, { width: 16 }),
                title: "Eliminate the risk of a data breach",
                description:
                  "Using evervault, all sensitive PII is encrypted in your database and at runtime — so even if you get breached, there’s no risk of sensitive data going missing.",
              },
            ],
          },
        ],
        eb = [
          {
            quote:
              "Being able to say ‘We use evervault’ ensures that our customers and partners relax as soon as the security question comes up.",
            encryptedQuote:
              "QLLHP X+PQ uh AIL azi Uzl gZsCLvn+XE iG+QTaa VYdo RLc a/WhTzaaL SAo CgLKD$bN @WfCD Mj Dalo wH xWq $+DBrWwY cjATilrG spdqS lQD",
            author: "Swan",
            id: "swan-quote",
          },
        ];
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
    31555: function (e) {
      e.exports = { container: "Container_container__0SGNv" };
    },
    26049: function (e) {
      e.exports = {
        accordion: "styles_accordion__K_LZ0",
        accordionItem: "styles_accordionItem__9GCns",
        accordionIndicator: "styles_accordionIndicator__RxSDr",
        accordionTrigger: "styles_accordionTrigger__9XbC_",
        accordionContent: "styles_accordionContent__kHFeY",
        slideOpen: "styles_slideOpen__Ec60M",
        slideClosed: "styles_slideClosed__oCccV",
        accordionText: "styles_accordionText__w9e__",
        accordionIcon: "styles_accordionIcon__vP10X",
        demo: "styles_demo__R3v0d",
        diagram: "styles_diagram__EM_jm",
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
    92628: function (e) {
      e.exports = {
        functions: "styles_functions__Zh2V0",
        functionCall: "styles_functionCall__2_ViN",
        codeFrame: "styles_codeFrame__MxcTZ",
        code: "styles_code__tGUc_",
        line: "styles_line__4zCra",
        value: "styles_value__QOHWE",
        highlight: "styles_highlight__FYk_W",
        encryptedValue: "styles_encryptedValue__HxVPH",
        payload: "styles_payload__CHZxI",
      };
    },
    60279: function (e) {
      e.exports = {
        game: "styles_game__SGTFp",
        screen: "styles_screen__XYHbW",
        controls: "styles_controls__JDAGm",
        control: "styles_control__z3npM",
        menu: "styles_menu__zQQVH",
        score: "styles_score__E0F2b",
        hudBottom: "styles_hudBottom__lepY1",
        hudLabel: "styles_hudLabel___PNC5",
        hudValue: "styles_hudValue__f6WZ8",
        buttons: "styles_buttons__MNU_d",
        controllerButton: "styles_controllerButton__pTU_q",
      };
    },
    4587: function (e) {
      e.exports = {
        hero: "styles_hero___L_NF",
        container: "styles_container__xxJm8",
        title: "styles_title__QEOV1",
        subText: "styles_subText__lBJ0x",
        heading: "styles_heading__wrQdm",
        graphic: "styles_graphic__R9LPI",
        center: "styles_center__nYO47",
        fingerPrint: "styles_fingerPrint__1o4zT",
        circle: "styles_circle__2QgeG",
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
  },
  function (e) {
    e.O(
      0,
      [3737, 2685, 1140, 5029, 9142, 7842, 1766, 8838, 1044, 9774, 2888, 179],
      function () {
        return e((e.s = 84639));
      },
    ),
      (_N_E = e.O());
  },
]);
