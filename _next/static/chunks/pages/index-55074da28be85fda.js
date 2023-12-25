(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5405],
  {
    75557: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return i(49366);
        },
      ]);
    },
    49366: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return Index;
          },
        });
      var a,
        n = i(85893),
        s = i(91693),
        r = i(97004),
        o = i(60777),
        l = i(37519),
        c = i(92520),
        d = i(5152),
        p = i.n(d),
        u = i(67294),
        m = i(35800),
        h = i(31345),
        x = i.n(h);
      let v = p()(
        () =>
          Promise.all([
            i.e(3737),
            i.e(694),
            i.e(5029),
            i.e(8764),
            i.e(8243),
            i.e(5890),
            i.e(7351),
          ]).then(i.bind(i, 67351)),
        { loadableGenerated: { webpack: () => [67351] }, ssr: !1 },
      );
      function Hero() {
        let { openSalesForm: e } = (0, u.useContext)(l.G),
          [t, i] = (0, u.useState)(!1);
        return (0, n.jsx)("div", {
          className: x().container,
          children: (0, n.jsx)("div", {
            className: x().gradientWrapper,
            children: (0, n.jsxs)("div", {
              className: x().maxWidthWrapper,
              children: [
                (0, n.jsxs)("div", {
                  className: x().textWrapper,
                  children: [
                    (0, n.jsx)("h1", {
                      children:
                        "The data behind the oldest anarchy server in Minecraft",
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
                    }),
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(o.Z, {
                          size: "large",
                          onClick: () => e({ context: "Home — Hero" }),
                          children: "API docs",
                        }),
                        (0, n.jsx)(o.Z, {
                          type: "transparent",
                          size: "large",
                          href: "https://app.evervault.com/register",
                          as: "a",
                          target: "_blank",
                          children: "Or try a search",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: x().aspectWrapper,
                  children: (0, n.jsx)(c.E.div, {
                    className: x().modelWrapper,
                    initial: { opacity: 0 },
                    animate: { opacity: t ? 1 : 0 },
                    transition: { duration: 1 },
                    children: (0, n.jsx)(m.ErrorBoundary, {
                      fallback: (0, n.jsx)("div", {}),
                      children: (0, n.jsx)(v, {
                        setModelIsReady: i,
                        modelIsReady: t,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      let _ = [
        "/images/logos/sorare.svg",
        "/images/logos/visa.svg",
        "/images/logos/ness.svg",
        "/images/logos/safety-wing.svg",
        "/images/logos/unqork.svg",
        "/images/logos/stitch.svg",
        "/images/logos/xp.svg",
        "/images/logos/vital.svg",
        "/images/logos/resly.svg",
        "/images/logos/humaans.svg",
      ];
      var y = i(98067),
        g = i.n(y);
      function Logos() {
        return (0, n.jsx)("div", {
          className: g().container,
          children: (0, n.jsxs)("div", {
            className: g().maxWidthWrapper,
            children: [
              (0, n.jsx)("div", {
                className: g().logoGrid,
                children: _.map((e) =>
                  (0, n.jsx)("img", { src: e, className: g().logo }, e),
                ),
              }),
              (0, n.jsx)("p", {
                className: g().subtitle,
                children:
                  "Engineering leaders trust evervault to protect their most sensitive data",
              }),
            ],
          }),
        });
      }
      var j = i(39892),
        b = i(70131),
        f = i(17103),
        w = i(67338),
        N = i(92546),
        k = i(57349),
        C = i(2025),
        L = i(54463);
      let S = [
        {
          icon: (0, n.jsx)(f.Z, { width: 15 }),
          user: "Claude",
          action: "created Inbound Relay",
          resource: "api-stripe-com",
          index: 7,
        },
        {
          icon: (0, n.jsx)(w.Z, { width: 15 }),
          user: "Nev",
          action: "created API Key",
          resource: "EU Resources Key",
          index: 6,
        },
        {
          icon: (0, n.jsx)(N.Z, { width: 15 }),
          user: "Eoin",
          action: "deleted Function",
          resource: "validate-credit-card",
          index: 5,
        },
        {
          icon: (0, n.jsx)(k.Z, { width: 15 }),
          user: "Anna",
          action: "invited",
          resource: "steve@acme.co",
          index: 4,
        },
        {
          icon: (0, n.jsx)(C.Z, { width: 15 }),
          user: "Thomas",
          action: "updated Outbound Relay",
          resource: "api.adyen.com",
          index: 3,
        },
        {
          icon: (0, n.jsx)(C.Z, { width: 15 }),
          user: "Thomas",
          action: "created Outbound Relay",
          resource: "api.adyen.com",
          index: 2,
        },
        {
          icon: (0, n.jsx)(w.Z, { width: 15 }),
          user: "Sara",
          action: "deleted API Key",
          resource: "Synthetics Test",
          index: 1,
        },
        {
          icon: (0, n.jsx)(L.Z, { width: 15 }),
          user: "Dylan",
          action: "created Cage",
          resource: "hello-cage",
          index: 0,
        },
      ];
      var E = i(74266),
        W = i.n(E);
      function AuditLogging() {
        let [e, t] = (0, u.useState)(S),
          [i, a] = (0, b.YD)(),
          s = (0, u.useRef)(0);
        return (
          (0, u.useEffect)(() => {
            let i;
            if (!a) {
              (s.current = 0), t(S), clearInterval(i);
              return;
            }
            return (
              (i = setInterval(() => {
                let i = { ...S[S.length - 1 - (s.current % S.length)] };
                (i.index = e.length), t((e) => [i, ...e]), s.current++;
              }, 3e3)),
              () => clearInterval(i)
            );
          }, [a, e]),
          (0, n.jsx)(c.E.div, {
            className: W().container,
            layout: !0,
            layoutRoot: !0,
            ref: i,
            children: e.map((e) =>
              (0, n.jsxs)(
                c.E.div,
                {
                  className: W().log,
                  layout: !0,
                  initial: { opacity: 0, x: 5 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.35 },
                  children: [
                    (0, n.jsx)("div", {
                      className: W().icon,
                      children: e.icon,
                    }),
                    (0, n.jsx)("span", { children: e.user }),
                    (0, n.jsx)("span", {
                      className: W().muted,
                      children: e.action,
                    }),
                    (0, n.jsx)("span", { children: e.resource }),
                  ],
                },
                "audit-log-".concat(e.index),
              ),
            ),
          })
        );
      }
      var I = i(76952),
        Z = i(4844),
        P = i(31012),
        A = i(45077),
        F = i(18962),
        O = i.n(F),
        R = i(94184),
        M = i.n(R);
      function DataPolicies() {
        return (0, n.jsxs)("div", {
          className: O().container,
          children: [
            (0, n.jsxs)("div", {
              className: O().policy,
              children: [
                (0, n.jsxs)("div", {
                  className: O().header,
                  children: [
                    (0, n.jsx)("div", {
                      className: O().icon,
                      children: (0, n.jsx)(L.Z, { width: 15 }),
                    }),
                    (0, n.jsx)("span", {
                      className: O().text,
                      children: "Allow Decryption",
                    }),
                    (0, n.jsx)("span", {
                      className: M()(O().text, O().muted),
                      children: "for",
                    }),
                    (0, n.jsx)("div", {
                      className: O().input,
                      children: "api.stripe.com",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: O().rules,
                  children: [
                    (0, n.jsxs)("div", {
                      className: O().rule,
                      children: [
                        (0, n.jsx)("div", {
                          className: O().ruleIcon,
                          children: (0, n.jsx)(I.Z, { width: 14 }),
                        }),
                        (0, n.jsx)("span", {
                          className: O().text,
                          children: "when Request IP equals",
                        }),
                        (0, n.jsx)("div", {
                          className: O().input,
                          children: "92.158.1.38",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: O().rule,
                      children: [
                        (0, n.jsx)("div", {
                          className: O().ruleIcon,
                          children: (0, n.jsx)(Z.Z, { width: 15 }),
                        }),
                        (0, n.jsx)("span", {
                          className: O().text,
                          children: "and Region equals",
                        }),
                        (0, n.jsx)("div", {
                          className: O().input,
                          children: "US (Virginia)",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: O().rule,
                      children: [
                        (0, n.jsx)("div", {
                          className: O().ruleIcon,
                          children: (0, n.jsx)(P.Z, { width: 12 }),
                        }),
                        (0, n.jsx)("span", {
                          className: O().text,
                          children: "Add condition",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: O().policy,
              children: [
                (0, n.jsxs)("div", {
                  className: O().header,
                  children: [
                    (0, n.jsx)("div", {
                      className: O().icon,
                      children: (0, n.jsx)(L.Z, { width: 15 }),
                    }),
                    (0, n.jsx)("span", {
                      className: O().text,
                      children: "Allow Decryption",
                    }),
                    (0, n.jsx)("span", {
                      className: M()(O().text, O().muted),
                      children: "for",
                    }),
                    (0, n.jsx)("div", {
                      className: O().input,
                      children: "api.twilio.com",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: O().rules,
                  children: [
                    (0, n.jsxs)("div", {
                      className: O().rule,
                      children: [
                        (0, n.jsx)("div", {
                          className: O().ruleIcon,
                          children: (0, n.jsx)(A.Z, { width: 14 }),
                        }),
                        (0, n.jsx)("span", {
                          className: O().text,
                          children: "when Timestamp is before",
                        }),
                        (0, n.jsx)("div", {
                          className: O().input,
                          children: "20/08/2024",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: O().rule,
                      children: [
                        (0, n.jsx)("div", {
                          className: O().ruleIcon,
                          children: (0, n.jsx)(Z.Z, { width: 15 }),
                        }),
                        (0, n.jsx)("span", {
                          className: O().text,
                          children: "and Region equals",
                        }),
                        (0, n.jsx)("div", {
                          className: O().input,
                          children: "EU (Ireland)",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: O().rule,
                      children: [
                        (0, n.jsx)("div", {
                          className: O().ruleIcon,
                          children: (0, n.jsx)(P.Z, { width: 12 }),
                        }),
                        (0, n.jsx)("span", {
                          className: O().text,
                          children: "Add condition",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var z = i(38767),
        D = i.n(z);
      function GridItem(e) {
        let { heading: t, subheading: i, asset: a, className: s } = e;
        return (0, n.jsxs)("div", {
          className: M()(a ? D().containerWithAsset : D().container, s),
          children: [
            (0, n.jsxs)("div", {
              className: M()(a ? D().textWithAsset : D().text),
              children: [
                (0, n.jsx)("h3", { className: D().heading, children: t }),
                (0, n.jsx)("p", { className: "mb-0", children: i }),
              ],
            }),
            a && (0, n.jsx)("div", { className: D().asset, children: a }),
          ],
        });
      }
      var q = i(79645),
        G = i(80578),
        B = i(44992),
        T = i.n(B);
      function SDKs() {
        let { scrollYProgress: e } = (0, q.v)(),
          t = (0, G.H)(e, [0, 1], [-60, 0]),
          i = (0, G.H)(e, [0, 1], [-40, 20]),
          a = (0, G.H)(e, [0, 1], [-40, 80]);
        return (0, n.jsx)("div", {
          className: T().container,
          children: (0, n.jsxs)("div", {
            className: T().orbitContainer,
            children: [
              (0, n.jsx)(c.E.div, {
                className: T().outerOrbitContainer,
                style: { rotate: t },
                children: (0, n.jsx)("div", {
                  className: T().outerOrbit,
                  children: (0, n.jsx)("div", {
                    className: T().planet,
                    children: (0, n.jsx)("img", {
                      src: "/images/logos/react.svg",
                    }),
                  }),
                }),
              }),
              (0, n.jsx)(c.E.div, {
                className: T().middleOrbitContainer,
                style: { rotate: i },
                children: (0, n.jsx)("div", {
                  className: T().middleOrbit,
                  children: (0, n.jsx)("div", {
                    className: T().planet,
                    children: (0, n.jsx)("img", {
                      src: "/images/logos/node.svg",
                    }),
                  }),
                }),
              }),
              (0, n.jsx)(c.E.div, {
                className: T().innerOrbitContainer,
                style: { rotate: a },
                children: (0, n.jsx)("div", {
                  className: T().innerOrbit,
                  children: (0, n.jsx)("div", {
                    className: T().planet,
                    children: (0, n.jsx)("img", {
                      src: "/images/logos/python.svg",
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var H = i(42231),
        U = i.n(H);
      function Platform() {
        return (0, n.jsx)("div", {
          className: U().container,
          children: (0, n.jsxs)("div", {
            className: U().maxWidthWrapper,
            children: [
              (0, n.jsxs)("div", {
                className: U().heading,
                children: [
                  (0, n.jsx)("h2", {
                    className: "mb-16",
                    children:
                      "Powered by an easy-to-use, developer-friendly platform",
                  }),
                  (0, n.jsx)("p", {
                    children:
                      "All Primitives share a common suite of platform features that enhance security and ensure evervault fits neatly into your existing infrastructure.",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: U().grid,
                children: [
                  (0, n.jsx)(GridItem, {
                    className: U().sdks,
                    heading: "SDKs and REST API",
                    subheading:
                      "Use language-specific SDKs or our REST API to integrate evervault seamlessly.",
                    asset: (0, n.jsx)(SDKs, {}),
                  }),
                  (0, n.jsx)(GridItem, {
                    heading: "Usage Logs",
                    subheading:
                      "Get full visibility into how your Primitives are being used.",
                  }),
                  (0, n.jsx)(GridItem, {
                    heading: "Alerting",
                    subheading:
                      "Configure alerts on Primitives to notify you when specific events occur.",
                  }),
                  (0, n.jsx)(GridItem, {
                    className: U().dataPolicies,
                    heading: "Data Policies",
                    subheading:
                      "Set clear rules that dictate how and when encrypted data can be decrypted.",
                    asset: (0, n.jsx)(DataPolicies, {}),
                  }),
                  (0, n.jsx)(GridItem, {
                    className: U().auditLogging,
                    heading: "Audit Logging",
                    subheading:
                      "Keep track of all user activity within your evervault Team.",
                    asset: (0, n.jsx)(AuditLogging, {}),
                  }),
                  (0, n.jsx)(GridItem, {
                    heading: "Access Control",
                    subheading:
                      "Control which members of your team can access and modify Primitives.",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var V = i(27125),
        K = i.n(V);
      let X = p()(() => i.e(5092).then(i.bind(i, 55092)), {
        loadableGenerated: { webpack: () => [55092] },
        ssr: !1,
      });
      var Q = i(73445),
        Y = i.n(Q),
        J = i(32233),
        $ = i(11544),
        ee = i(56190),
        et = i(23191),
        ei = i(19037),
        ea = i(75964),
        en = i(77387),
        es = i(73819),
        er = i.n(es);
      let eo = p()(() => i.e(3847).then(i.bind(i, 63847)), {
        loadableGenerated: { webpack: () => [63847] },
        ssr: !1,
      });
      function FunctionsAnimation() {
        let [e, t] = (0, u.useState)(void 0),
          [i, a] = (0, u.useState)(void 0),
          [s, r] = (0, u.useState)([]),
          [o, l] = (0, u.useState)("server.js"),
          [d, p] = (0, u.useState)("validateEmail.js"),
          m = (0, J.E)(),
          animate = async () => {
            t("animateIn"),
              await wait(1e3),
              await m.start({
                boxShadow: [
                  "0px 0px 0px 0px rgba(255,255,255,.3)",
                  "0px 0px 0px 20px rgba(255,255,255,0)",
                ],
                transition: { duration: 1, ease: "easeOut" },
              }),
              t("animateOut"),
              a("animateIn"),
              await wait(1e3),
              a("animateOut");
            let e = [...s];
            e.unshift({ id: 10 * Math.random(), language: o }),
              r(e),
              await wait(1e3),
              t(void 0),
              a(void 0);
          },
          wait = async (e) =>
            new Promise((t) => {
              setTimeout(() => {
                t();
              }, e);
            });
        return (
          (0, u.useEffect)(
            () =>
              "validateEmail.js" === d && "server.py" === o
                ? p("validate-email.py")
                : "validate-email.py" === d && "server.js" === o
                  ? p("validateEmail.js")
                  : void 0,
            [o],
          ),
          (0, u.useEffect)(
            () =>
              "server.js" === o && "validate-email.py" === d
                ? l("server.py")
                : "server.py" === o && "validateEmail.js" === d
                  ? l("server.js")
                  : void 0,
            [d],
          ),
          (0, n.jsxs)("div", {
            className: er().container,
            children: [
              (0, n.jsxs)("div", {
                className: er().serverCode,
                children: [
                  (0, n.jsxs)("div", {
                    className: er().playgroundControl,
                    children: [
                      (0, n.jsxs)("div", {
                        className: er().playground,
                        children: [
                          (0, n.jsx)(et.Z, { size: 12, className: "me-4" }),
                          "Playground",
                        ],
                      }),
                      (0, n.jsxs)(eo, {
                        onClick: animate,
                        type: "tertiary",
                        size: "extra-small",
                        pulse: !0,
                        children: [
                          (0, n.jsx)(ei.Z, { size: 12, className: "me-4" }),
                          "Run",
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(ea.Z, {
                    tabs: ["server.js", "server.py"],
                    onChange: (e) => l(e),
                    value: o,
                  }),
                  (0, n.jsxs)($.M, {
                    mode: "wait",
                    children: [
                      "server.js" === o &&
                        (0, n.jsx)(
                          c.E.div,
                          {
                            initial: { opacity: 0, y: -5 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 5 },
                            transition: { duration: 0.3 },
                            children: (0, n.jsx)(ee.Z, {
                              language: "javascript",
                              style: en.Z,
                              showLineNumbers: !0,
                              wrapLines: !0,
                              customStyle: { background: "transparent" },
                              lineProps: (t) => {
                                let a;
                                let n = {};
                                return (
                                  1 === t &&
                                    e &&
                                    ((n.paddingBottom = "3px"),
                                    (n.paddingTop = "1px"),
                                    (n.borderRadius = "3px"),
                                    (a = e)),
                                  2 === t &&
                                    i &&
                                    ((n.paddingBottom = "3px"),
                                    (n.paddingTop = "1px"),
                                    (n.borderRadius = "3px"),
                                    (a = i)),
                                  { style: n, "data-animate": a }
                                );
                              },
                              children:
                                "const isValid = await ev.run('validateEmail', { encrypted });\nconsole.log(isValid ? 'Valid Email' : 'Invalid Email')",
                            }),
                          },
                          "server.js-code",
                        ),
                      "server.py" === o &&
                        (0, n.jsx)(
                          c.E.div,
                          {
                            initial: { opacity: 0, y: -5 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 5 },
                            transition: { duration: 0.35 },
                            children: (0, n.jsx)(ee.Z, {
                              language: "python",
                              style: en.Z,
                              showLineNumbers: !0,
                              wrapLines: !0,
                              customStyle: { background: "transparent" },
                              lineProps: (t) => {
                                let a;
                                let n = {};
                                return (
                                  1 === t &&
                                    e &&
                                    ((n.paddingBottom = "3px"),
                                    (n.paddingTop = "1px"),
                                    (n.borderRadius = "3px"),
                                    (a = e)),
                                  2 === t &&
                                    i &&
                                    ((n.paddingBottom = "3px"),
                                    (n.paddingTop = "1px"),
                                    (n.borderRadius = "3px"),
                                    (a = i)),
                                  { style: n, "data-animate": a }
                                );
                              },
                              children:
                                "is_valid = ev.run('validateEmail', { \"encrypted\": encrypted })\nconsole.log('Valid Email' if is_valid else 'Invalid Email')",
                            }),
                          },
                          "server.py-code",
                        ),
                    ],
                  }),
                  (0, n.jsx)("div", { className: er().divider }),
                  (0, n.jsx)(ea.Z, {
                    tabs: ["Terminal"],
                    className: er().terminalTabs,
                  }),
                  (0, n.jsx)(c.E.div, {
                    className: er().terminal,
                    layout: !0,
                    layoutRoot: !0,
                    children: s.map((e, t) => {
                      let { id: i, language: a } = e;
                      return (0, n.jsxs)(
                        c.E.div,
                        {
                          layout: !0,
                          initial: { opacity: 0, y: -5 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0 === t ? 0.25 : 0,
                            duration: 0.25,
                          },
                          className: er().log,
                          children: [
                            (0, n.jsx)("p", { children: "Valid Email" }),
                            (0, n.jsx)("p", {
                              children:
                                "server.js" === a
                                  ? "server.js:2"
                                  : "server.py:2",
                            }),
                          ],
                        },
                        i,
                      );
                    }),
                  }),
                ],
              }),
              (0, n.jsx)(c.E.div, {
                className: er().functionCodeWrapper,
                animate: m,
                children: (0, n.jsxs)("div", {
                  className: er().functionCode,
                  children: [
                    (0, n.jsx)(ea.Z, {
                      tabs: ["validateEmail.js", "validate-email.py"],
                      onChange: (e) => p(e),
                      value: d,
                    }),
                    (0, n.jsxs)($.M, {
                      mode: "wait",
                      children: [
                        "validateEmail.js" === d &&
                          (0, n.jsx)(
                            c.E.div,
                            {
                              initial: { opacity: 0, y: -5 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 5 },
                              transition: { duration: 0.3 },
                              children: (0, n.jsx)(ee.Z, {
                                language: "javascript",
                                style: en.Z,
                                showLineNumbers: !0,
                                wrapLines: !0,
                                customStyle: { background: "transparent" },
                                children:
                                  "// Encrypted payloads are automatically decrypted\nexports.handler = async function({ encrypted }){\n  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]');\n  return regex.test(encrypted.emailAddress);\n};",
                              }),
                            },
                            "validateEmail.js-code",
                          ),
                        "validate-email.py" === d &&
                          (0, n.jsx)(
                            c.E.div,
                            {
                              initial: { opacity: 0, y: -5 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 5 },
                              transition: { duration: 0.3 },
                              children: (0, n.jsx)(ee.Z, {
                                language: "javascript",
                                style: en.Z,
                                showLineNumbers: !0,
                                wrapLines: !0,
                                customStyle: { background: "transparent" },
                                children:
                                  "import re\n// Encrypted payloads are automatically decrypted\ndef handler(data, context):\n  regex = re.search('[a-z0-9]+@[a-z]+.[a-z]', data.encrypted)\n  return bool(regex)",
                              }),
                            },
                            "validate-email.py-code",
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var el = i(93762),
        ec = i(38237),
        ed = i.n(ec);
      let ep = p()(() => i.e(3847).then(i.bind(i, 63847)), {
        loadableGenerated: { webpack: () => [63847] },
        ssr: !1,
      });
      var eu =
          ((a = function (e) {
            let { active: t } = e,
              i = (0, el.useEvervault)(),
              [a, s] = (0, u.useState)([]),
              [r, l] = (0, u.useState)("4242 4242 4242 4242"),
              encrypt = async () => {
                let e = await i.encrypt(r || "cardNumber"),
                  t = [...a];
                t.unshift(e), s(t);
              };
            return (0, n.jsxs)("div", {
              className: ed().container,
              "data-active": t,
              children: [
                (0, n.jsxs)("div", {
                  className: ed().text,
                  children: [
                    (0, n.jsx)("h3", {
                      className: "mb-4",
                      children: "UI Components",
                    }),
                    (0, n.jsx)("p", {
                      className: "mb-0",
                      children:
                        "Embeddable components which minimize your compliance burden by allowing you to collect and display cardholder data without touching it in plaintext.",
                    }),
                    (0, n.jsx)(o.Z, {
                      className: "mt-16",
                      type: "tertiary",
                      href: "https://docs.evervault.com/products/inputs",
                      target: "_blank",
                      size: "small",
                      children: "Read the docs",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: ed().inputsContainer,
                  children: [
                    (0, n.jsxs)("div", {
                      className: ed().inputs,
                      children: [
                        (0, n.jsxs)("div", {
                          className: ed().playground,
                          children: [
                            (0, n.jsx)(et.Z, { size: 12, className: "me-4" }),
                            "Playground",
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className: ed().inputContainer,
                          children: [
                            (0, n.jsx)("input", {
                              className: ed().input,
                              placeholder: "4242424242424242",
                              value: r,
                              onChange: (e) => l(e.target.value),
                            }),
                            (0, n.jsx)("div", {
                              className: ed().encryptButtonContainer,
                              children: (0, n.jsxs)(ep, {
                                onClick: encrypt,
                                size: "extra-small",
                                type: "tertiary",
                                className: "me-12",
                                pulse: !0,
                                children: [
                                  (0, n.jsx)(ei.Z, {
                                    size: 12,
                                    className: "me-4",
                                  }),
                                  "Encrypt",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: ed().terminal,
                      children: [
                        (0, n.jsx)(ea.Z, { tabs: ["Terminal"] }),
                        (0, n.jsx)(c.E.div, {
                          className: ed().terminalOutput,
                          layout: !0,
                          layoutRoot: !0,
                          children: a.map((e, t) =>
                            (0, n.jsxs)(
                              c.E.p,
                              {
                                layout: "position",
                                initial: { opacity: 0, y: -5 },
                                animate: { opacity: 1, y: 0 },
                                transition: {
                                  delay: 0 === t ? 0.25 : 0,
                                  duration: 0.25,
                                },
                                className: ed().encryptedString,
                                children: [
                                  (0, n.jsx)("span", {
                                    className: ed().key,
                                    children: "Card number:",
                                  }),
                                  " ",
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
          (e) => {
            let { active: t } = e;
            return (0, n.jsx)(el.EvervaultProvider, {
              teamId: "team_40d916301f58",
              appId: "app_f8359ae223fb",
              children: (0, n.jsx)(a, { active: t }),
            });
          }),
        em = i(66820),
        eh = i(4960),
        ex = i(62989),
        ev = i.n(ex);
      let e_ = [
        { key: "CustomCapes", plaintext: "Hi everyone", encrypted: "ev:ybCk5..." },
        {
          key: "Popbob",
          plaintext: "-100 64 432",
          encrypted: "ev:F/kSPiMA8a=f",
        },
        {
          key: "C1yd3i",
          plaintext: "1234 40 345",
          encrypted: "ev:DjOpXSdjn4",
        },
        { key: "ITristan", plaintext: "/command", encrypted: "ev:iO=x" },
        {
          key: "MAC TONIGHT",
          plaintext: "new base!",
          encrypted: "ev:l$9jAtm1SW",
        },
        {
          key: "Fit",
          plaintext: "oldest server",
          encrypted: "ev:7pB2&6hq",
        },
        { key: "0x22", plaintext: "no comment", encrypted: "ev:ybCk5" },
        {
          key: "AlphaComputer",
          plaintext: "/op",
          encrypted: "ev:F/kSPiMA8a=f",
        },
        {
          key: "Babbaj",
          plaintext: "/give @e",
          encrypted: "ev:DjOpXSdjn4",
        },
        { key: "Odpay", plaintext: "123 12 123", encrypted: "ev:iO=x" },
        {
          key: "Harrissssonn",
          plaintext: "69 69 69",
          encrypted: "ev:l$9jAtm1SW",
        },
        {
          key: "ChromeCrusher",
          plaintext: "Chrome user",
          encrypted: "ev:7pB2&6hq",
        },
      ];
      var ey = i(3804),
        eg = i.n(ey),
        ej = i(45338),
        eb = i(61609);
      let ef = {
        primitives: [
          function (e) {
            let { active: t } = e,
              [i, a] = (0, em.H)(),
              s = (0, J.E)(),
              [r, l] = (0, u.useState)(0),
              d = (0, eh.c)(0),
              p = (0, u.useRef)();
            return (
              (0, u.useEffect)(() => {
                if (!window.safari)
                  return (
                    (p.current = setTimeout(() => {
                      a(d, d.get() - 40, {
                        duration: 0.35,
                        onComplete: () => {
                          r === e_.length / 2 - 1 ? (d.set(0), l(0)) : l(r + 1);
                        },
                      });
                    }, 1750)),
                    () => {
                      clearTimeout(p.current);
                    }
                  );
              }, [r]),
              (0, n.jsxs)("div", {
                className: ev().container,
                "data-active": t,
                ref: i,
                children: [
                  (0, n.jsxs)("div", {
                    className: ev().text,
                    children: [
                      (0, n.jsx)("h3", {
                        className: "mb-4",
                        children: "Chat",
                      }),
                      (0, n.jsx)("p", {
                        className: "mb-0",
                        children:
                          "Easily send and receive chat messages from 2b2t using the API.",
                      }),
                      (0, n.jsx)(o.Z, {
                        className: "mt-16",
                        type: "tertiary",
                        href: "https://docs.evervault.com/primitives/inbound-relay",
                        target: "_blank",
                        size: "small",
                        children: "Read the docs",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    className: ev().animation,
                    children: [
                      (0, n.jsxs)("div", {
                        className: ev().server,
                        children: [
                          (0, n.jsx)("div", {
                            className: ev().console,
                            children: (0, n.jsxs)("p", {
                              children: [
                                "Server listening on ",
                                (0, n.jsx)("span", { children: "port 25565" }),
                              ],
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className: ev().cursor,
                            children: "▮",
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className: ev().requestsContainer,
                        children: [
                          (0, n.jsx)(c.E.div, {
                            className: ev().requests,
                            style: { y: d },
                            transition: { duration: 0.35 },
                            children: e_.map((e, t) => {
                              let { plaintext: i, key: a, encrypted: o } = e;
                              return (0, n.jsx)(
                                "div",
                                {
                                  className: ev().requestBlock,
                                  style: {
                                    gridColumnStart: (t % 2) + 1,
                                    gridRowStart: t + 1,
                                    justifyContent:
                                      t % 2 ? "flex-start" : "flex-end",
                                  },
                                  children: (0, n.jsxs)("div", {
                                    custom: t,
                                    animate: s,
                                    className: ev().request,
                                    id: "request-".concat(t),
                                    children: [
                                      (0, n.jsxs)("p", { children: [a, ":"] }),
                                      (0, n.jsxs)("div", {
                                        className: ev().valueContainer,
                                        children: [
                                          (0, n.jsx)(c.E.p, {
                                            initial: { y: 0, opacity: 0 },
                                            animate: {
                                              y: r + 3 > t ? -16 : 0,
                                              opacity: r + 3 > t ? 0 : 1,
                                            },
                                            transition: {
                                              delay: 0 === r ? 0 : 0.75,
                                              duration: 0 === r ? 0 : 0.3,
                                            },
                                            children: i,
                                          }),
                                          (0, n.jsx)(c.E.p, {
                                            initial: { y: 16, opacity: 0 },
                                            animate: {
                                              y: r + 3 > t ? 0 : 16,
                                              opacity: r + 3 > t ? 1 : 0,
                                            },
                                            className: ev().encryptedValue,
                                            transition: {
                                              delay: 0 === r ? 0 : 0.75,
                                              duration: 0 === r ? 0 : 0.3,
                                            },
                                            children: o,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                "request-block-".concat(t),
                              );
                            }),
                          }),
                          (0, n.jsx)("div", { className: ev().spinner }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: ev().client,
                        children: (0, n.jsx)("div", {
                          className: ev().toolbar,
                          children: (0, n.jsx)("div", {
                            className: ev().addressBar,
                            children: "https://",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          function (e) {
            let { active: t } = e;
            return (0, n.jsxs)("div", {
              className: Y().container,
              "data-active": t,
              children: [
                (0, n.jsxs)("div", {
                  className: Y().text,
                  children: [
                    (0, n.jsx)("h3", {
                      className: "mb-4",
                      children: "Functions",
                    }),
                    (0, n.jsx)("p", {
                      className: "mb-0",
                      children:
                        "Secure serverless functions that allow you to run logic on encrypted data, without exposing your infrastructure to sensitive information.",
                    }),
                    (0, n.jsx)(o.Z, {
                      className: "mt-16",
                      type: "tertiary",
                      href: "https://docs.evervault.com/primitives/functions",
                      target: "_blank",
                      size: "small",
                      children: "Read the docs",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: Y().animation,
                  children: (0, n.jsx)(FunctionsAnimation, {}),
                }),
              ],
            });
          },
          eu,
          function (e) {
            let { active: t } = e;
            return (0, n.jsxs)("div", {
              className: K().container,
              "data-active": t,
              children: [
                (0, n.jsxs)("div", {
                  className: K().text,
                  children: [
                    (0, n.jsx)("h3", { className: "mb-4", children: "Cages" }),
                    (0, n.jsx)("p", {
                      className: "mb-0",
                      children:
                        "Deploy any Docker Container to a Secure Enclave with no additional configuring or provisioning required. Verify the integrity of your code using built-in attestation.",
                    }),
                    (0, n.jsxs)("div", {
                      className: K().buttonGroup,
                      children: [
                        (0, n.jsx)(o.Z, {
                          size: "small",
                          className: "mt-16",
                          type: "tertiary",
                          href: "/cages",
                          children: "Learn more",
                        }),
                        (0, n.jsx)(o.Z, {
                          size: "small",
                          className: "mt-16",
                          type: "transparent",
                          href: "https://docs.evervault.com/primitives/cages",
                          children: "Read the docs",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: K().animation,
                  children: (0, n.jsx)(X, {}),
                }),
              ],
            });
          },
        ],
        icons: [
          function (e) {
            let { active: t } = e;
            return (0, n.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              opacity: t ? 1 : 0.4,
              children: [
                (0, n.jsx)("rect", { width: "128", height: "128" }),
                (0, n.jsx)("path", {
                  d: "M91.9237 13.7622L70.2151 26.3105C67.7419 27.7401 66.2186 30.38 66.2186 33.2367V58.1515C66.2186 60.9917 67.7245 63.6189 70.1753 65.0544L91.8839 77.7701C94.381 79.2328 97.4735 79.2328 99.9706 77.7701L121.679 65.0544C124.13 63.6189 125.636 60.9917 125.636 58.1515V33.2367C125.636 30.38 124.113 27.7401 121.639 26.3105L99.9308 13.7622C97.4538 12.3304 94.4007 12.3304 91.9237 13.7622Z",
                  stroke: "white",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M66.7778 29.5476L95.9275 45.9647L124.863 28.9253",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, n.jsx)("path", {
                  d: "M95.9274 45.9363V78.9201",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
                  d: "M28.7051 50.2956L6.99645 62.844C4.52324 64.2736 3 66.9135 3 69.7701V94.6849C3 97.5251 4.50589 100.152 6.95663 101.588L28.6653 114.304C31.1624 115.766 34.2548 115.766 36.752 114.304L58.4606 101.588C60.9114 100.152 62.4173 97.5251 62.4173 94.6849V69.7701C62.4173 66.9135 60.894 64.2736 58.4208 62.844L36.7122 50.2956C34.2352 48.8638 31.1821 48.8638 28.7051 50.2956Z",
                  stroke: "white",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M4.03027 65.8411L32.7085 82.4985L61.3868 65.8411",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, n.jsx)("path", {
                  d: "M32.7085 82.4985V115.298",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("circle", {
                  cx: "1.88881",
                  cy: "1.88881",
                  r: "1.88881",
                  transform:
                    "matrix(0.866009 0.500028 3.1686e-05 1 79.5233 51.2886)",
                  fill: "white",
                }),
                (0, n.jsx)("path", {
                  d: "M81.1589 54.1223L61.6702 65.4631",
                  stroke: "white",
                  strokeWidth: "0.75",
                }),
              ],
            });
          },
          function (e) {
            let { active: t } = e;
            return (0, n.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              opacity: t ? 1 : 0.4,
              children: [
                (0, n.jsx)("rect", { width: "128", height: "128" }),
                (0, n.jsx)("path", {
                  d: "M60.0022 32.3064L29.0022 50.191C26.5258 51.6198 25 54.2615 25 57.1205V92.6101C25 95.4527 26.5084 98.0818 28.9624 99.5165L59.9624 117.64C62.4567 119.098 65.5433 119.098 68.0376 117.64L99.0376 99.5165C101.492 98.0818 103 95.4527 103 92.6101V57.1205C103 54.2615 101.474 51.6198 98.9978 50.191L67.9978 32.3064C65.5237 30.8791 62.4763 30.8791 60.0022 32.3064Z",
                  stroke: "white",
                  strokeWidth: "1",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M26 54.6778L64.4129 76L102 54",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, n.jsx)("path", {
                  d: "M64 76V119",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
                  d: "M60.0223 9.27945L27.514 27.9088C25.9591 28.7998 25 30.4549 25 32.247V38.4742C25 40.256 25.9483 41.9032 27.4891 42.798L59.9826 61.6671C62.4666 63.1096 65.5334 63.1096 68.0174 61.6671L100.511 42.798C102.052 41.9032 103 40.256 103 38.4742V32.247C103 30.4549 102.041 28.7998 100.486 27.9088L67.9777 9.27945C65.5138 7.86752 62.4862 7.86752 60.0223 9.27945Z",
                  stroke: "white",
                  strokeWidth: "1",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M26 30L63.8699 52L102 30",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, n.jsx)("path", {
                  d: "M64 52V63",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
              ],
            });
          },
          function (e) {
            let { active: t } = e;
            return (0, n.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              shapeRendering: "optimizeSpeed",
              opacity: t ? 1 : 0.4,
              children: [
                (0, n.jsx)("rect", { width: "128", height: "128" }),
                (0, n.jsx)("path", {
                  d: "M35.6477 6.75776L28.981 10.6393C27.1353 11.714 26 13.6887 26 15.8245V82.6755C26 84.8113 27.1353 86.786 28.981 87.8607L86.3144 121.242C88.1804 122.329 90.4863 122.329 92.3523 121.242L99.019 117.361C100.865 116.286 102 114.311 102 112.176V45.3245C102 43.1887 100.865 41.214 99.019 40.1393L41.6856 6.75776C39.8196 5.67129 37.5137 5.67129 35.6477 6.75776Z",
                  stroke: "white",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M36.9275 35.0145L33.7488 36.8513C32.6666 37.4767 32 38.6318 32 39.8818V80.5683C32 81.8091 32.657 82.9572 33.7268 83.5858L68.3633 103.939C69.4748 104.592 70.8554 104.582 71.9566 103.911L75.3135 101.868C76.3603 101.23 76.9975 100.092 76.9934 98.8665L76.8582 58.1758C76.854 56.9328 76.1909 55.7852 75.116 55.1609L40.4366 35.0184C39.3521 34.3885 38.0134 34.387 36.9275 35.0145Z",
                  stroke: "white",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  opacity: "0.4",
                  d: "M89 49V122",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
                  opacity: "0.4",
                  d: "M70 60V104",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, n.jsx)("path", {
                  opacity: "0.4",
                  d: "M27 13L89.0359 49L101 42.0656",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, n.jsx)("path", {
                  opacity: "0.4",
                  d: "M33 39L70.1895 60L76 56.6311",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
              ],
            });
          },
          function (e) {
            let { active: t } = e;
            return (0, n.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              shapeRendering: "geometricPrecision",
              opacity: t ? 1 : 0.4,
              children: [
                (0, n.jsx)("rect", { width: "128", height: "128" }),
                (0, n.jsx)("path", {
                  d: "M56.7887 10.0711L20.9781 30.8329C16.6588 33.337 14 37.9519 14 42.9445V84.2382C14 89.202 16.6285 93.7948 20.9084 96.3092L56.719 117.348C61.0969 119.92 66.5243 119.92 70.9023 117.348L106.713 96.3092C110.993 93.7947 113.621 89.202 113.621 84.2382V42.9445C113.621 37.9519 110.962 33.337 106.643 30.8329L70.8325 10.0711C66.4898 7.5533 61.1314 7.5533 56.7887 10.0711Z",
                  stroke: "white",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M59.0318 28.0837L33.5017 42.841C31.0285 44.2706 29.5052 46.9105 29.5052 49.7671V79.0704C29.5052 81.9106 31.0111 84.5379 33.4619 85.9734L58.992 100.927C61.4891 102.39 64.5816 102.39 67.0787 100.927L92.6088 85.9734C95.0595 84.5379 96.5654 81.9106 96.5654 79.0704V49.7672C96.5654 46.9105 95.0422 44.2706 92.569 42.841L67.0389 28.0837C64.5619 26.6519 61.5088 26.6519 59.0318 28.0837Z",
                  fillOpacity: "1",
                  stroke: "white",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, n.jsx)("path", {
                  d: "M15.873 36.3143L63.475 64.0613L111.394 35.967",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, n.jsx)("path", {
                  d: "M63.6332 64.0615L63.6332 119.314",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
              ],
            });
          },
        ],
        labels: ["Chat", "Players", "Coordinates", "Queue"],
      };
      function Primitives() {
        let [e, t] = (0, u.useState)(0),
          i = (0, ej.QS)({
            onSwiped: function (i) {
              "Left" === i.dir && e < ef.primitives.length - 1 && t(e + 1),
                "Right" === i.dir && e > 0 && t(e - 1);
            },
          });
        return (0, n.jsx)("div", {
          className: eg().container,
          children: (0, n.jsxs)("div", {
            className: eg().maxWidthWrapper,
            children: [
              (0, n.jsxs)("div", {
                className: eg().heading,
                children: [
                  (0, n.jsx)(eb.Z, {
                    as: "h2",
                    className: "mb-16",
                    children: "Our API endpoints",
                  }),
                  (0, n.jsx)("p", {
                    children:
                      "2b2t tools has a wide range of API endpoints that can be used to interact with the server. Here are a few:",
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: eg().controls,
                children: (0, n.jsx)(c.E.div, {
                  className: eg().primitivesTrack,
                  animate: { x: "".concat(-(25 * e), "%") },
                  transition: {
                    type: "spring",
                    damping: 40,
                    mass: 3,
                    stiffness: 160,
                  },
                  children: ef.icons.map((i, a) =>
                    (0, n.jsxs)(
                      "button",
                      {
                        className: eg().primitive,
                        onClick: () => t(a),
                        children: [
                          (0, n.jsx)(i, { active: a === e }),
                          (0, n.jsx)("span", {
                            className: eg().label,
                            "data-active": e === a,
                            children: ef.labels[a],
                          }),
                        ],
                      },
                      "primitive-icon-".concat(a),
                    ),
                  ),
                }),
              }),
              (0, n.jsx)("div", {
                className: eg().carouselWrapper,
                ...i,
                children: (0, n.jsx)(c.E.div, {
                  className: eg().carouselSlides,
                  animate: {
                    x: "calc(".concat(-(25 * e), "% - ").concat(20 * e, "px)"),
                  },
                  transition: {
                    type: "spring",
                    damping: 40,
                    mass: 3,
                    stiffness: 160,
                  },
                  children: ef.primitives.map((t, i) =>
                    (0, n.jsx)(
                      "div",
                      {
                        className: eg().slide,
                        style: {
                          transform: "translateX(".concat(20 * i, "px)"),
                        },
                        children: (0, n.jsx)(t, { active: i === e }),
                      },
                      "primitive-".concat(i),
                    ),
                  ),
                }),
              }),
            ],
          }),
        });
      }
      let ew = p()(() => i.e(9743).then(i.bind(i, 19743)), {
        loadableGenerated: { webpack: () => [19743] },
        ssr: !1,
      });
      p()(() => i.e(394).then(i.bind(i, 394)), {
        loadableGenerated: { webpack: () => [394] },
        ssr: !1,
      });
      let eN = p()(() => i.e(3337).then(i.bind(i, 3337)), {
          loadableGenerated: { webpack: () => [3337] },
          ssr: !1,
        }),
        ek = p()(() => i.e(4824).then(i.bind(i, 44824)), {
          loadableGenerated: { webpack: () => [44824] },
          ssr: !1,
        }),
        eC = {
          "PCI Compliance": {
            title: "No Rules",
            description:
              "2b2t is a Minecraft server with no rules that has been running on the same map since February 2011, and is owned anonymously. It has had over 600,000 players join throughout the years, and is often called the worst Minecraft server for the toxic playerbase it has maintained.",
            diagram: (0, n.jsx)(ew, {}),
            button: (0, n.jsx)(o.Z, {
              size: "large",
              as: "a",
              href: "https://2b2t.miraheze.org/wiki/Front_Page",
              children: "Learn more",
            }),
          },
        };
      var eL = i(44008),
        eS = i.n(eL);
      function Solution(e) {
        let { title: t, description: i, diagram: a, button: s } = e;
        return (0, n.jsx)("div", {
          className: eS().container,
          children: (0, n.jsxs)("div", {
            className: eS().animatedWrapper,
            children: [
              (0, n.jsxs)(c.E.div, {
                className: eS().copy,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.5 },
                children: [
                  (0, n.jsx)("h3", { className: eS().title, children: t }),
                  (0, n.jsx)("p", { className: eS().description, children: i }),
                  s,
                ],
              }),
              (0, n.jsx)(c.E.div, {
                className: eS().diagram,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5 },
                children: a,
              }),
            ],
          }),
        });
      }
      var eE = i(86411),
        eW = i.n(eE);
      let eI = p()(() => i.e(2732).then(i.bind(i, 12732)), {
          loadableGenerated: { webpack: () => [12732] },
          ssr: !1,
        }),
        eZ = Object.keys(eC);
      function Solutions() {
        let [e, t] = (0, u.useState)(eZ[0]);
        return (0, n.jsx)("div", {
          className: eW().container,
          children: (0, n.jsx)("div", {
            className: eW().gradientWrapper,
            children: (0, n.jsxs)("div", {
              className: eW().maxWidthWrapper,
              children: [
                (0, n.jsx)("h2", {
                  className: eW().heading,
                  children: "What is 2b2t?",
                }),
                (0, n.jsx)(eI, {
                  className: eW().tabs,
                  value: e,
                  onChange: (e) => t(e),
                  tabs: eZ,
                }),
                (0, n.jsx)(
                  Solution,
                  {
                    title: eC[e].title,
                    description: eC[e].description,
                    diagram: eC[e].diagram,
                    button: eC[e].button,
                  },
                  eC[e].title,
                ),
              ],
            }),
          }),
        });
      }
      var eP = i(62654),
        eA = i(46174),
        eF = i.n(eA),
        eO = i(25358),
        eR = i(43777),
        eM = i(77447),
        ez = i(39455),
        eD = i(53642),
        eq = i(5246),
        eG = i(63494),
        eB = i(82938),
        eT = i(95067);
      let eH = [
          {
            title: "Built for Developers",
            features: [
              {
                icon: (0, n.jsx)(eO.Z, { width: 16 }),
                title: "Fundamentally Configurable",
                description:
                  "evervault products work together and can be adapted to any type of solution.",
              },
              {
                icon: (0, n.jsx)(eR.Z, { width: 16 }),
                title: "Ultra-Low Latency",
                description:
                  "Encryption and decryption operations introduce a minimal latency penalty.",
              },
              {
                icon: (0, n.jsx)(eM.Z, { width: 16 }),
                title: "Write and Deploy in Seconds",
                description:
                  "Built so developers spend less time and money on data security and compliance.",
              },
            ],
          },
          {
            title: "Secure by Default",
            features: [
              {
                icon: (0, n.jsx)(ez.Z, { width: 16 }),
                title: "Dual Security Model",
                description:
                  "We store encryption keys, you store data as you normally would — but fully encrypted.",
              },
              {
                icon: (0, n.jsx)(eD.Z, { width: 16 }),
                title: "Compliance",
                description:
                  "We’re fully compliant under PCI DSS, HIPAA, GDPR and SOC2.",
              },
              {
                icon: (0, n.jsx)(eq.Z, { width: 16 }),
                title: "Enclave-backed",
                description:
                  "Built on isolated, hardened, and highly constrained secure enclaves.",
              },
            ],
          },
          {
            title: "Designed for Scale",
            features: [
              {
                icon: (0, n.jsx)(eG.Z, { width: 16 }),
                title: "Volume",
                description:
                  "evervault processes millions of encryption operations every day.",
              },
              {
                icon: (0, n.jsx)(eB.Z, { width: 16 }),
                title: "Globally Distributed",
                description:
                  "evervault resources are deployed in multiple regions to optimize uptime.",
              },
              {
                icon: (0, n.jsx)(eT.Z, { width: 16 }),
                title: "Scalable Pricing",
                description:
                  "Affordable, scalable pricing where you only get charged for what you use.",
              },
            ],
          },
        ],
        eU = [
          {
            quote:
              "Being able to process data without touching it in plaintext is a game-changer.",
            encryptedQuote:
              "Tog5G ZeJ/ bI 9AjmglP rh23 fBrfS9X kL4K8BrO kz pC isI9QaYA4 ZO h mvCE-ZM5I/tWN",
            author: "Dylan Field",
            title: "Figma Founder & CEO",
            id: "dylan-field-quote",
          },
          {
            quote:
              "Effective companies focus on their core competencies and outsource everything else. evervault relentlessly focuses on encryption — so that you don't have to.",
            encryptedQuote:
              "Nu2Me+r4n FLYZt9TGQ iuYJO 5D 4I+1k ICjB bZWzIFZOn+P7 Rji X+iF0xUpx ku3icXZBlw g9H3L sW4vA4hEs +C07gS7yFi1i 6IorlhQ 2N YqNwZY18i+ N yA 67Et 7nC JXxZy /EEi Bjh",
            author: "Jeff Weiner",
            title: "LinkedIn Exec. Chairman",
            id: "jeff-weiner-quote",
          },
          {
            quote:
              "If we tried to build everything that evervault gives us, it would take at least two full time security engineers.",
            encryptedQuote:
              "5v al q7wEy lc cbcTc 3+M04I9Po/ k+SU 5neFfQ0t3 xJCQd TZL ZZ KuzCY BimO j0 oMjNx /dI wDFC wibH yi3XAC+p q2Fn8Fy8QN",
            author: "Jessica Carta",
            title: "Ness Head of Product",
            id: "quote-3",
          },
        ];
      function Index() {
        return (0, n.jsx)(j.Z, {
          children: (0, n.jsxs)("div", {
            className: eF().container,
            children: [
              (0, n.jsx)(Hero, {}),
              (0, n.jsx)(Logos, {}),
              (0, n.jsx)(Solutions, {}),
              (0, n.jsx)(Primitives, {}),
              (0, n.jsx)(Platform, {}),
              (0, n.jsx)(r.Z, {
                heading: "Why trust us?",
                subheading:
                  "evervault is secure by default. We build, manage, and implement security best practices into the platform so you don't have to.",
                config: eH,
              }),
              (0, n.jsx)(eP.Z, {
                testimonailsConfig: eU,
                logos: "/images/logos/logoswheel.svg",
                rotationMap: [90, 0, -90],
              }),
              (0, n.jsx)(s.Z, {
                heading: "Meet compliance requirements. Build customer trust. ",
                subheading:
                  "Use Evervault’s flexible building blocks to keep your customers’ data secure and compliant at all times.",
                cta: "Get started",
                href: "https://app.evervault.com/register",
              }),
            ],
          }),
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
    31345: function (e) {
      e.exports = {
        container: "Hero_container__I589b",
        gradientWrapper: "Hero_gradientWrapper__W5Hg_",
        maxWidthWrapper: "Hero_maxWidthWrapper__nfQ3Q Home_maxWidth__uUqbF",
        textWrapper: "Hero_textWrapper__QPzbE",
        aspectWrapper: "Hero_aspectWrapper__Bbf3p",
        modelWrapper: "Hero_modelWrapper___Fe1k",
      };
    },
    46174: function (e) {
      e.exports = {
        container: "Home_container__Fqt_9",
        maxWidth: "Home_maxWidth__uUqbF",
      };
    },
    98067: function (e) {
      e.exports = {
        container: "Logos_container__04_qv",
        maxWidthWrapper: "Logos_maxWidthWrapper__sVy_G Home_maxWidth__uUqbF",
        logoGrid: "Logos_logoGrid___OFR7",
        subtitle: "Logos_subtitle__ATLQY",
      };
    },
    74266: function (e) {
      e.exports = {
        container: "AuditLogging_container__vG8ru",
        log: "AuditLogging_log__LiIlI",
        icon: "AuditLogging_icon__yPQz4",
        muted: "AuditLogging_muted__se5ef",
      };
    },
    18962: function (e) {
      e.exports = {
        container: "DataPolicies_container__2eg7M",
        policy: "DataPolicies_policy__p5LOF",
        header: "DataPolicies_header__2sSsi",
        icon: "DataPolicies_icon__vlZ1g",
        text: "DataPolicies_text__BavI1",
        muted: "DataPolicies_muted__oPnu_",
        input: "DataPolicies_input__M1bGX",
        rules: "DataPolicies_rules__kqX2_",
        rule: "DataPolicies_rule__Cekzb",
        ruleIcon: "DataPolicies_ruleIcon__B9_7w",
      };
    },
    38767: function (e) {
      e.exports = {
        containerWithAsset: "GridItem_containerWithAsset__6ejfo",
        container: "GridItem_container__ov_ey",
        textWithAsset: "GridItem_textWithAsset__nFqve",
        text: "GridItem_text__vx_GH",
        heading: "GridItem_heading__FZokP",
        asset: "GridItem_asset___ix8N",
      };
    },
    42231: function (e) {
      e.exports = {
        container: "Platform_container__ehe5p Home_maxWidth__uUqbF",
        heading: "Platform_heading__O87XU",
        grid: "Platform_grid__24Ejb",
        sdks: "Platform_sdks__OAa_I",
        dataPolicies: "Platform_dataPolicies__EDB3J",
        auditLogging: "Platform_auditLogging__3EWFa",
      };
    },
    44992: function (e) {
      e.exports = {
        container: "SDKs_container__75P2Z",
        orbitContainer: "SDKs_orbitContainer__U3_gL",
        outerOrbitContainer: "SDKs_outerOrbitContainer__wxHgx",
        outerOrbit: "SDKs_outerOrbit__nKdEw",
        middleOrbitContainer: "SDKs_middleOrbitContainer___vQT_",
        middleOrbit: "SDKs_middleOrbit__z01WP",
        innerOrbitContainer: "SDKs_innerOrbitContainer__hidCV",
        innerOrbit: "SDKs_innerOrbit__5rEyb",
        planet: "SDKs_planet__AGujz",
      };
    },
    27125: function (e) {
      e.exports = {
        container: "Cages_container__cc5JF",
        text: "Cages_text__K1hvG",
        buttonGroup: "Cages_buttonGroup__JmVcP",
        animation: "Cages_animation__VpER8",
      };
    },
    73445: function (e) {
      e.exports = {
        container: "Functions_container__ICtoP",
        text: "Functions_text__Zl0ud",
        animation: "Functions_animation__BUcuY",
      };
    },
    73819: function (e) {
      e.exports = {
        container: "FunctionsAnimation_container__621Z1",
        serverCode: "FunctionsAnimation_serverCode__rWL77",
        animateIn: "FunctionsAnimation_animateIn__uc60f",
        animateOut: "FunctionsAnimation_animateOut__baLfa",
        playgroundControl: "FunctionsAnimation_playgroundControl__tBIw3",
        playground: "FunctionsAnimation_playground__nz9Yo",
        runButton: "FunctionsAnimation_runButton__LRz_Y",
        functionCodeWrapper: "FunctionsAnimation_functionCodeWrapper__Al3zg",
        functionCode: "FunctionsAnimation_functionCode__mECF_",
        terminal: "FunctionsAnimation_terminal__IWvJ4",
        terminalTabs: "FunctionsAnimation_terminalTabs__SHoPP",
        divider: "FunctionsAnimation_divider__3TWXE",
        log: "FunctionsAnimation_log__Ts7oC",
        cursor: "FunctionsAnimation_cursor__s3o3s",
        blink: "FunctionsAnimation_blink___wa92",
        screen: "FunctionsAnimation_screen__F2qUv",
      };
    },
    3804: function (e) {
      e.exports = {
        container: "Primitives_container__GNwka",
        heading: "Primitives_heading__lLiUF",
        carouselWrapper:
          "Primitives_carouselWrapper__hOEcp Home_maxWidth__uUqbF",
        carouselSlides: "Primitives_carouselSlides__5ejW_",
        slide: "Primitives_slide__E8fH9",
        controls: "Primitives_controls__EODKt",
        primitivesTrack: "Primitives_primitivesTrack__SdnXK",
        primitive: "Primitives_primitive__n3saq",
        label: "Primitives_label__oXK0N",
      };
    },
    62989: function (e) {
      e.exports = {
        container: "Relay_container__i0eEN",
        text: "Relay_text__wcW6f",
        animation: "Relay_animation__d8JNY",
        server: "Relay_server__3q_cj",
        console: "Relay_console__HInvD",
        cursor: "Relay_cursor__fNutX",
        blink: "Relay_blink__AByxM",
        requestsContainer: "Relay_requestsContainer__9bNhJ",
        requests: "Relay_requests__Szte_",
        requestBlock: "Relay_requestBlock__JLzXx",
        request: "Relay_request__o6Z64",
        valueContainer: "Relay_valueContainer__j3ZEa",
        encryptedValue: "Relay_encryptedValue__GIBgA",
        client: "Relay_client__Irhrr",
        toolbar: "Relay_toolbar__ukxST",
        addressBar: "Relay_addressBar__XUZJf",
      };
    },
    38237: function (e) {
      e.exports = {
        container: "UIComponents_container__O_N78",
        text: "UIComponents_text__4cnnw",
        playground: "UIComponents_playground__QGS1L",
        inputsContainer: "UIComponents_inputsContainer__1IM7j",
        inputs: "UIComponents_inputs___yGSE",
        inputContainer: "UIComponents_inputContainer__YTI9d",
        input: "UIComponents_input__AaYak",
        encryptButtonContainer: "UIComponents_encryptButtonContainer__4Mw8Z",
        terminal: "UIComponents_terminal__dnDwa",
        terminalOutput: "UIComponents_terminalOutput__Lm4fe",
        key: "UIComponents_key__gdSb6",
        encryptedString: "UIComponents_encryptedString__DPQrG",
      };
    },
    44008: function (e) {
      e.exports = {
        container: "Solution_container__z2g_Y",
        animatedWrapper: "Solution_animatedWrapper__hG8Wd",
        title: "Solution_title__6cj3E",
        diagram: "Solution_diagram__m4_A0",
      };
    },
    86411: function (e) {
      e.exports = {
        container: "Solutions_container__XOLFH",
        gradientWrapper: "Solutions_gradientWrapper__SfS_W",
        maxWidthWrapper:
          "Solutions_maxWidthWrapper__mT1pE Home_maxWidth__uUqbF",
        heading: "Solutions_heading__ToTsf",
        tabs: "Solutions_tabs__VIToR",
      };
    },
  },
  function (e) {
    e.O(0, [1140, 7842, 8729, 1195, 9060, 9774, 2888, 179], function () {
      return e((e.s = 75557));
    }),
      (_N_E = e.O());
  },
]);
