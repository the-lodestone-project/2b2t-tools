(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5672],
  {
    63665: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/ai-privacy",
        function () {
          return t(84263);
        },
      ]);
    },
    336: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return CalloutLink;
        },
      });
      var r = t(85893),
        i = t(74098),
        a = t(24057),
        o = t(67294),
        s = t(9737),
        c = t.n(s),
        l = t(94184),
        d = t.n(l);
      function CalloutLink(e) {
        let {
            href: n,
            hrefTitle: t,
            title: s,
            tagline: l,
            children: u,
            asset: m,
            className: v,
          } = e,
          h = (0, o.useRef)();
        return (0, r.jsx)(i.Z, {
          children: (0, r.jsxs)("div", {
            className: d()(c().container, v),
            onClick: () => {
              h.current.click();
            },
            children: [
              (0, r.jsxs)("div", {
                className: c().content,
                children: [
                  (0, r.jsx)("h6", { className: c().guidesLabel, children: l }),
                  (0, r.jsx)("h4", { className: c().title, children: s }),
                  (0, r.jsx)("p", { className: c().description, children: u }),
                  (0, r.jsx)(a.Z, { ref: h, href: n, children: t }),
                ],
              }),
              m,
            ],
          }),
        });
      }
    },
    75964: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return CodeTabs;
        },
      });
      var r = t(85893),
        i = t(94184),
        a = t.n(i),
        o = t(898),
        s = t.n(o);
      function CodeTabs(e) {
        let { tabs: n, onChange: t, value: i, className: o } = e,
          c = n.indexOf(i || n[0]);
        return (0, r.jsx)("div", {
          className: a()(s().container, o),
          children: (0, r.jsxs)("div", {
            className: s().tabs,
            children: [
              n.map((e, i) =>
                (0, r.jsx)(
                  "button",
                  {
                    className: a()(
                      s().tab,
                      c === i && s().active,
                      c + 1 === i && s().afterActive,
                      c - 1 === i && s().beforeActive,
                      0 === i && 0 !== c && s().firstActive,
                    ),
                    onClick: () => t && t(n[i]),
                    children: e,
                  },
                  e,
                ),
              ),
              (0, r.jsx)("div", {
                className: a()(
                  s().filler,
                  c === n.length - 1 && s().fillerAfterActive,
                ),
              }),
            ],
          }),
        });
      }
    },
    74098: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Container;
        },
      });
      var r = t(85893),
        i = t(94184),
        a = t.n(i),
        o = t(31555),
        s = t.n(o);
      function Container(e) {
        let { className: n, children: t, ...i } = e;
        return (0, r.jsx)("div", {
          className: a()(s().container, n),
          children: t,
        });
      }
    },
    24057: function (e, n, t) {
      "use strict";
      var r = t(85893),
        i = t(67294),
        a = t(68592),
        o = t.n(a);
      n.Z = (0, i.forwardRef)(function (e, n) {
        let { href: t, children: i } = e;
        return (0, r.jsxs)("a", {
          ref: n,
          className: o().learnMore,
          href: t,
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
    97004: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Features;
        },
      });
      var r = t(85893),
        i = t(5152),
        a = t.n(i),
        o = t(91452),
        s = t.n(o),
        c = t(94184),
        l = t.n(c),
        d = t(61609);
      let u = a()(() => t.e(3531).then(t.bind(t, 3531)), {
        loadableGenerated: { webpack: () => [3531] },
        ssr: !1,
      });
      function Features(e) {
        let { heading: n, size: t, subheading: i, config: a, className: o } = e;
        return (0, r.jsx)("div", {
          className: l()(s().container, o),
          children: (0, r.jsxs)("div", {
            className: s().maxWidthWrapper,
            children: [
              (0, r.jsxs)("div", {
                className: s().heading,
                "data-size": t,
                children: [
                  (0, r.jsx)(d.Z, {
                    as: "h2",
                    width: "70%",
                    interactive: !0,
                    children: n,
                  }),
                  i &&
                    (0, r.jsx)("p", { className: s().subHeading, children: i }),
                ],
              }),
              (0, r.jsx)("div", {
                className: s().grid,
                children: a.map((e, n) => {
                  let { title: t, features: i } = e;
                  return (0, r.jsxs)(
                    "div",
                    {
                      children: [
                        t &&
                          (0, r.jsx)("div", {
                            className: s().titleContainer,
                            children: (0, r.jsx)(u, { children: t }),
                          }),
                        (0, r.jsx)("div", { className: s().divider }),
                        (0, r.jsx)("div", {
                          className: s().features,
                          children: i.map((e) => {
                            let { icon: n, title: t, description: i } = e;
                            return (0, r.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: s().featureTitle,
                                    children: [
                                      n,
                                      (0, r.jsx)("h5", { children: t }),
                                    ],
                                  }),
                                  (0, r.jsx)("p", { children: i }),
                                ],
                              },
                              t,
                            );
                          }),
                        }),
                      ],
                    },
                    t || n,
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    32494: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return GradientHero;
        },
      });
      var r = t(85893),
        i = t(18120),
        a = t.n(i);
      function GradientHero(e) {
        let { children: n, className: t } = e,
          i = [a().hero, t].filter(Boolean).join(" ");
        return (0, r.jsx)("div", {
          className: i,
          children: (0, r.jsx)("div", { className: a().gradient, children: n }),
        });
      }
    },
    62654: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Testimonials;
        },
      });
      var r = t(85893),
        i = t(92520),
        a = t(13589),
        o = t(11544),
        s = t(98814),
        c = t(64998),
        l = t(94184),
        d = t.n(l),
        u = t(67294),
        m = t(35182),
        v = t.n(m);
      function Testimonials(e) {
        let { testimonailsConfig: n, rotationMap: t, logos: l, onClick: m } = e,
          [h, _] = (0, u.useState)(0),
          decrypt = () => {
            let e = document.getElementById(n[h].id),
              t = n[h].quote,
              r = t.split(""),
              i = 0;
            !(function animate() {
              setTimeout(() => {
                let n = e.children[i];
                (n.style.opacity = 1),
                  (n.innerHTML = r[i]),
                  ++i < t.length && animate();
              }, 10);
            })();
          };
        return (0, r.jsx)("div", {
          className: v().container,
          children: (0, r.jsxs)("div", {
            className: v().maxWidthWrapper,
            children: [
              (0, r.jsx)("div", {
                className: v().logosContainer,
                children: (0, r.jsx)(i.E.img, {
                  initial: !1,
                  animate: { rotate: t[h] },
                  src: l,
                  className: v().logosWheel,
                  transition: { duration: 1.5, ease: "anticipate" },
                }),
              }),
              (0, r.jsxs)(a.S, {
                children: [
                  (0, r.jsx)(o.M, {
                    mode: "wait",
                    children: n.map((e, n) => {
                      let { encryptedQuote: t, id: a } = e;
                      return n !== h
                        ? null
                        : (0, r.jsx)(
                            i.E.h3,
                            {
                              className: v().quote,
                              id: a,
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.5 },
                              onAnimationComplete: decrypt,
                              children: t
                                .split("")
                                .map((e, n) =>
                                  (0, r.jsx)(
                                    "span",
                                    { className: v().character, children: e },
                                    n + e,
                                  ),
                                ),
                            },
                            a,
                          );
                    }),
                  }),
                  (0, r.jsx)(i.E.div, {
                    className: v().authors,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: n.map((e, t) => {
                      let { author: i, title: a } = e;
                      return (0, r.jsxs)(
                        "button",
                        {
                          onClick: m || (() => _(t)),
                          className: d()(
                            v().author,
                            t === h && v().active,
                            1 === n.length && v().solo,
                          ),
                          children: [
                            i,
                            " ",
                            (0, r.jsx)("span", {
                              className: v().title,
                              children: a,
                            }),
                          ],
                        },
                        i,
                      );
                    }),
                  }),
                  (0, r.jsxs)(i.E.div, {
                    className: v().authorsMobile,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: [
                      (0, r.jsx)("button", {
                        className: v().mobileNavButton,
                        onClick: () => {
                          if (0 === h) return _(n.length - 1);
                          _((e) => e - 1);
                        },
                        "data-solo": 1 === n.length,
                        children: (0, r.jsx)(s.Z, {}),
                      }),
                      (0, r.jsxs)(
                        "button",
                        {
                          onClick: () => _(index),
                          className: v().mobileAuthor,
                          children: [
                            n[h].author,
                            " ",
                            (0, r.jsx)("span", {
                              className: v().title,
                              children: n[h].title,
                            }),
                          ],
                        },
                        n[h].author,
                      ),
                      (0, r.jsx)("button", {
                        className: v().mobileNavButton,
                        onClick: () => {
                          if (h === n.length - 1) return _(0);
                          _((e) => e + 1);
                        },
                        "data-solo": 1 === n.length,
                        children: (0, r.jsx)(c.Z, {}),
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
    84263: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return AIPrivacy;
          },
        });
      var r = t(85893),
        i = t(67294),
        a = t(16893),
        o = t(97004),
        s = t(97668),
        c = t.n(s);
      function randomChars(e) {
        return Array.from({ length: e }, () =>
          String.fromCharCode(Math.floor(26 * Math.random()) + 97),
        ).join("");
      }
      var l = t(54463),
        d = t(98476),
        u = t(65420),
        m = t(15306),
        v = t(23579),
        h = t(83377),
        _ = t(30800),
        f = t(49461),
        p = t(53642);
      let x = [
          "third-party LLMs",
          "OpenAI",
          "GPT-4",
          "Llama 2",
          "Stability AI",
        ],
        g = [
          {
            features: [
              {
                icon: (0, r.jsx)(l.Z, { width: 16 }),
                title: "Only share necessary data with LLMs",
                description:
                  "Leverage the power of a third-party LLM in your product, without compromising on data security. Using evervault’s Relay Redaction ensures your customers’ PII is removed before reaching a service like OpenAI.",
              },
              {
                icon: (0, r.jsx)(d.Z, { width: 16 }),
                title: "Build customer trust compliantly",
                description:
                  "Easily assure your customers that their sensitive data isn’t being shared with black-box third-party LLM providers, like OpenAI. Protect their data, and maintain your existing compliance status in HIPAA, GDPR, CCPA and more.",
              },
              {
                icon: (0, r.jsx)(u.Z, { width: 16 }),
                title: "Minimal infrastructure changes",
                description:
                  "No need to re-architect your integration or data flow. Simply put evervault Relay in front of the request and the PII is redacted before sharing.",
              },
            ],
          },
        ],
        y = [
          {
            title: "World-class Redaction",
            features: [
              {
                icon: (0, r.jsx)(m.Z, { width: 16 }),
                title: "Detect 35+ PII data fields",
                description:
                  "evervault uses best-in-class PII detection to ensure the highest level of detection and redaction precision.",
              },
              {
                icon: (0, r.jsx)(v.Z, { width: 16 }),
                title: "Inject realistic synthetic data",
                description:
                  "Maintain prompt and result accuracy by replacing sensitive PII with realistic synthetic data.",
              },
              {
                icon: (0, r.jsx)(h.Z, { width: 16 }),
                title: "PII never touches your infrastructure",
                description:
                  "evervault can be configured to redact PII before it touches your infrastructure, so you never handle any sensitive PII.",
              },
            ],
          },
          {
            title: "Seamless Integration",
            features: [
              {
                icon: (0, r.jsx)(_.Z, { width: 16 }),
                title: "Works with all major LLMs",
                description:
                  "Easily share redacted PII with any third-party LLM provider, including OpenAI, Anthropic and Stability AI.",
              },
              {
                icon: (0, r.jsx)(f.Z, { width: 16 }),
                title: "Low-latency",
                description:
                  "evervault’s PII redaction adds less than 100ms of latency overhead to your requests.",
              },
              {
                icon: (0, r.jsx)(p.Z, { width: 16 }),
                title: "Fully compliant",
                description:
                  "evervault is fully compliant with standards like PCI DSS, HIPAA and GDPR, and using evervault’s redaction greatly reduces your compliance burden.",
              },
            ],
          },
        ],
        C = [
          {
            quote:
              "evervault allows us to convince the most security-conscious, compliance-bound customers that we could be trusted to keep their sensitive data safe.",
            encryptedQuote:
              "O14ikm4pZ XnTn0G O4 IW 5L7E3wEg Cq8 52es KX0cnYFj-8idW4/tRyZ fSPbBF4gf0-tcAK4 FWWIeMhEf 4PuY Dg qSBQW WE 8LOL2PQ rS vxcz A2MG0 8E7gMrwct oPmY HjKWB",
            author: "Maitham Dib",
            title: "Founder, Vital",
            id: "vital",
          },
        ];
      function AIPrivacyFeatures() {
        let e = (0, i.useRef)(),
          {
            chars: n,
            scramble: t,
            cancel: s,
          } = (function (e) {
            let [n, t] = (0, i.useState)(0),
              [r, a] = (0, i.useState)({ prefix: e[0], suffix: "" }),
              o = (0, i.useRef)(null),
              s = (0, i.useCallback)(() => {
                clearInterval(o.current),
                  a({ prefix: "", suffix: randomChars(e[n].length) }),
                  (o.current = setInterval(() => {
                    a((t) => {
                      let { prefix: r } = t,
                        i = e[n].charAt(r.length);
                      return "" === i
                        ? (clearInterval(o.current), t)
                        : {
                            prefix: r + i,
                            suffix: randomChars(e[n].length - 1 - r.length),
                          };
                    });
                  }, 50));
              }, [e, n]),
              c = (0, i.useCallback)(() => {
                a({ prefix: e[n], suffix: "" }), clearInterval(o.current);
              }, [e, n]);
            return (
              (0, i.useEffect)(() => {
                let n = setInterval(() => {
                  t((n) => (n + 1) % e.length);
                }, 3e3);
                return () => clearInterval(n);
              }, [e]),
              (0, i.useEffect)(() => (s(), () => c()), [n, s, c]),
              { chars: r, scramble: s, cancel: c }
            );
          })(x),
          l = (0, a.Y)(e);
        return (
          (0, i.useEffect)(() => {
            l ? t(x) : s();
          }, [l]),
          (0, r.jsx)(o.Z, {
            heading: (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("span", { children: "Privacy proxy for" }),
                (0, r.jsxs)("div", {
                  children: [
                    n.prefix,
                    (0, r.jsx)("span", {
                      className: c().suffix,
                      children: n.suffix,
                    }),
                  ],
                }),
              ],
            }),
            config: g,
          })
        );
      }
      var j = t(336),
        w = t(91693),
        b = t(55141),
        I = t(8971),
        P = t(17103),
        T = t(83321),
        M = t(74098),
        D = t(29405),
        k = t(35800),
        z = t(48545),
        L = t.n(z),
        A = (0, i.forwardRef)(function (e, n) {
          let { href: t, children: i } = e;
          return (0, r.jsxs)("a", {
            ref: n,
            className: L().learnMore,
            href: t,
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
                    className: L().chevronOne,
                    d: "M6 17L11 12 6 7",
                  }),
                  (0, r.jsx)("path", {
                    className: L().chevronTwo,
                    d: "M13 17L18 12 13 7",
                  }),
                ],
              }),
            ],
          });
        }),
        S = t(92520),
        N = t(11544),
        E = t(76164),
        R = t.n(E);
      let Z = {
        name: {
          DETECT: "Oliver Williams",
          REDACT: "REDACTED_NAME_1",
          REPLACE: "Daniel Johnston",
        },
        location: {
          DETECT: "Oakland, California",
          REDACT: "REDACTED_LOCATION_1",
          REPLACE: "Thunder Bay, Canada",
        },
        email: {
          DETECT: "hey@williams.com",
          REDACT: "REDACTED_EMAIL_1",
          REPLACE: "danny@acmeco.com",
        },
        ip: {
          DETECT: "192.168.1.100",
          REDACT: "REDACTED_IP_1",
          REPLACE: "123.45.67.890",
        },
      };
      function TextDemo(e) {
        let { active: n } = e,
          t = Z.name[n],
          i = Z.location[n],
          a = Z.email[n],
          o = Z.ip[n];
        return (0, r.jsx)(S.E.div, {
          className: R().container,
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.25 },
          children: (0, r.jsxs)("p", {
            children: [
              "My name is ",
              (0, r.jsx)(PII, { children: t }),
              ". I’m trying to access your service from",
              " ",
              (0, r.jsx)(PII, { delay: 0.1, children: i }),
              ". I’ve tried signing in with my email address, ",
              (0, r.jsx)(PII, { delay: 0.2, children: a }),
              ", but I’m getting the following error: Your IP address, ",
              (0, r.jsx)(PII, { delay: 0.3, children: o }),
              ", is blocked in this region.",
            ],
          }),
        });
      }
      function PII(e) {
        let { children: n, delay: t = 0 } = e;
        return (0, r.jsx)("span", {
          className: R().pii,
          children: (0, r.jsx)(N.M, {
            mode: "wait",
            initial: !1,
            children: (0, r.jsx)(
              S.E.span,
              {
                initial: { y: -4, opacity: 0, rotate: -4 },
                animate: { y: 0, opacity: 1, rotate: 0 },
                exit: { y: 4, opacity: 0, rotate: 2 },
                transition: { delay: t },
                children: n,
              },
              n,
            ),
          }),
        });
      }
      var F = t(50618),
        B = t(28101),
        q = t(19477),
        W = t.n(q);
      function OpenAI() {
        return (0, r.jsx)("svg", {
          width: "65",
          height: "66",
          viewBox: "0 0 65 66",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsx)("path", {
            d: "M59.9096 27.5453C61.3811 23.1287 60.8744 18.2904 58.5211 14.2731C54.9821 8.11127 47.8677 4.94118 40.9194 6.43298C37.8284 2.95075 33.3874 0.970459 28.7316 0.998836C21.6293 0.982621 15.3276 5.55533 13.1426 12.3131C8.58006 13.2475 4.64177 16.1034 2.33717 20.1511C-1.22817 26.2967 -0.415376 34.0436 4.34786 39.3135C2.87633 43.7302 3.38306 48.5684 5.7363 52.5858C9.27529 58.7476 16.3897 61.9177 23.338 60.4258C26.427 63.9081 30.87 65.8884 35.5258 65.858C42.6322 65.8762 48.9359 61.2994 51.1209 54.5356C55.6834 53.6012 59.6217 50.7453 61.9263 46.6976C65.4876 40.552 64.6728 32.8112 59.9116 27.5412L59.9096 27.5453ZM35.5299 61.6197C32.6861 61.6238 29.9315 60.6285 27.7486 58.8063C27.8479 58.7536 28.0202 58.6584 28.1316 58.5895L41.0471 51.1304C41.7079 50.7555 42.1133 50.0521 42.1092 49.292V31.0843L47.5677 34.2361C47.6265 34.2645 47.665 34.3213 47.6731 34.3861V49.4643C47.665 56.1693 42.2349 61.6055 35.5299 61.6197ZM9.41514 50.4656C7.99022 48.0049 7.47742 45.1206 7.9659 42.3215C8.06117 42.3782 8.2294 42.4816 8.34899 42.5505L21.2645 50.0095C21.9192 50.3926 22.7299 50.3926 23.3866 50.0095L39.154 40.9047V47.2084C39.158 47.2732 39.1276 47.3361 39.077 47.3766L26.0216 54.9147C20.2064 58.2631 12.7798 56.2727 9.41717 50.4656H9.41514ZM6.01601 22.2733C7.43485 19.8086 9.67459 17.9235 12.342 16.9445C12.342 17.056 12.3359 17.2526 12.3359 17.3905V32.3106C12.3319 33.0686 12.7373 33.772 13.396 34.1469L29.1633 43.2498L23.7049 46.4016C23.6501 46.4381 23.5812 46.4442 23.5204 46.4179L10.4631 38.8737C4.66001 35.5131 2.66958 28.0885 6.01399 22.2753L6.01601 22.2733ZM50.8635 32.7099L35.0961 23.605L40.5546 20.4552C40.6093 20.4187 40.6782 20.4126 40.739 20.4389L53.7964 27.977C59.6096 31.3356 61.602 38.7724 58.2434 44.5855C56.8226 47.0462 54.5849 48.9312 51.9195 49.9123V34.5462C51.9256 33.7882 51.5222 33.0869 50.8655 32.7099H50.8635ZM56.2956 24.5333C56.2003 24.4745 56.0321 24.3732 55.9125 24.3043L42.997 16.8452C42.3423 16.4621 41.5316 16.4621 40.8748 16.8452L25.1075 25.9501V19.6464C25.1034 19.5816 25.1338 19.5187 25.1845 19.4782L38.2398 11.9462C44.0551 8.59165 51.4898 10.5882 54.8423 16.4054C56.2591 18.862 56.7719 21.7382 56.2915 24.5333H56.2956ZM22.1401 35.7685L16.6796 32.6166C16.6208 32.5882 16.5823 32.5315 16.5742 32.4666V17.3884C16.5782 10.6753 22.0246 5.23508 28.7377 5.23913C31.5774 5.23913 34.3259 6.23637 36.5089 8.05249C36.4095 8.10519 36.2393 8.20045 36.1258 8.26937L23.2103 15.7284C22.5495 16.1034 22.1441 16.8047 22.1482 17.5648L22.1401 35.7644V35.7685ZM25.1055 29.3756L32.1287 25.3197L39.152 29.3736V37.4832L32.1287 41.5371L25.1055 37.4832V29.3756Z",
            fill: "white",
          }),
        });
      }
      function Workflow() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsxs)(D.S.Nodes, {
              children: [
                (0, r.jsx)(D.S.Group, {
                  children: (0, r.jsx)(D.S.Node, {
                    id: "server",
                    children: (0, r.jsx)(D.S.Service, {
                      payload: { key: "name", value: "Claude" },
                      children: "Server",
                    }),
                  }),
                }),
                (0, r.jsx)(D.S.Group, {
                  children: (0, r.jsx)(D.S.Node, {
                    id: "relay",
                    children: (0, r.jsx)(D.S.Service, {
                      icon: (0, r.jsx)(B.Z, {}),
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, r.jsx)(D.S.Group, {
                  children: (0, r.jsx)(D.S.Node, {
                    id: "llm",
                    children: (0, r.jsx)(D.S.Service, {
                      icon: (0, r.jsx)(OpenAI, {}),
                      payload: { key: "name", value: "John", highlight: !0 },
                      children: "OpenAI",
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsx)(D.S.Connection, {
              nodes: ["server", "relay"],
              children: (0, r.jsx)(D.S.Request, {
                className: W().request,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, r.jsx)(D.S.Connection, {
              nodes: ["relay", "llm"],
              children: (0, r.jsx)(D.S.Request, {
                className: W().encryptedRequest,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
      let O = "WORKFLOW",
        H = "DETECT",
        G = "REDACT",
        U = "REPLACE";
      function AccordionItem(e) {
        let { value: n, title: t, icon: i, children: a } = e;
        return (0, r.jsxs)(b.ck, {
          className: L().accordionItem,
          value: n,
          children: [
            (0, r.jsxs)(b.xz, {
              className: L().accordionTrigger,
              children: [
                (0, r.jsx)("div", {
                  className: L().accordionIcon,
                  children: i,
                }),
                t,
                (0, r.jsx)("div", {
                  className: L().accordionIndicator,
                  children: (0, r.jsx)(I.Z, {}),
                }),
              ],
            }),
            (0, r.jsx)(b.VY, {
              className: L().accordionContent,
              children: (0, r.jsx)("div", {
                className: L().accordionText,
                children: a,
              }),
            }),
          ],
        });
      }
      function Diagrams() {
        let [e, n] = (0, i.useState)(O),
          t = (0, F.Z)("(min-width: 768px)");
        return (0, r.jsxs)("div", {
          className: L().demo,
          children: [
            (0, r.jsxs)(b.fC, {
              value: e,
              onValueChange: n,
              className: L().accordion,
              children: [
                (0, r.jsxs)(AccordionItem, {
                  value: O,
                  icon: (0, r.jsx)(P.Z, {}),
                  title: "Proxy your requests via Relay",
                  children: [
                    (0, r.jsx)("p", {
                      children:
                        "Proxy your existing network requests to any LLM API via evervault Relay and configure the fields you want to redact.",
                    }),
                    (0, r.jsx)(A, {
                      href: "https://docs.evervault.com/products/inbound-relay",
                      children: "Learn more",
                    }),
                  ],
                }),
                (0, r.jsx)(AccordionItem, {
                  value: H,
                  icon: (0, r.jsx)(m.Z, {}),
                  title: "Relay Detects PII",
                  children: (0, r.jsx)("p", {
                    children:
                      "Before your request is forwarded to the LLM, Relay detects the type and location of any PII in the payload. 35+ PII types are natively supported, including names, addresses, and phone numbers.",
                  }),
                }),
                (0, r.jsx)(AccordionItem, {
                  value: G,
                  icon: (0, r.jsx)(T.Z, {}),
                  title: "Relay Redacts PII",
                  children: (0, r.jsx)("p", {
                    children:
                      "To ensure that no sensitive customer data is shared with the LLM, Relay redacts previously detected PII from the request payload.",
                  }),
                }),
                (0, r.jsx)(AccordionItem, {
                  value: U,
                  icon: (0, r.jsx)(v.Z, {}),
                  title: "Relay Replaces PII",
                  children: (0, r.jsx)("p", {
                    children:
                      "Relay replaces the redacted PII with a synthetic format-preserving placeholder value to ensure that the LLM can still provide an accurate output.",
                  }),
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: L().diagram,
              children: (0, r.jsx)(k.ErrorBoundary, {
                fallback: (0, r.jsx)("div", {}),
                children: (0, r.jsxs)(D.S, {
                  direction: t ? "horizontal" : "vertical",
                  children: [
                    e === O && (0, r.jsx)(Workflow, {}),
                    [H, G, U].includes(e) &&
                      (0, r.jsx)(TextDemo, { active: e }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function Demo() {
        return (0, r.jsxs)(M.Z, {
          children: [
            (0, r.jsxs)("div", {
              className: L().heading,
              children: [
                (0, r.jsx)("h2", {
                  children: "Powerful redaction for any data workflow",
                }),
                (0, r.jsx)("p", {
                  children:
                    "Detect, redact, and replace PII in unstructured data – like support tickets, chat transcripts, and patient medical records – before sharing with a third-party LLM.",
                }),
              ],
            }),
            (0, r.jsx)(Diagrams, {}),
            (0, r.jsx)("div", { className: L().glow }),
          ],
        });
      }
      var V = t(77674),
        K = t.n(V),
        X = t(75964),
        Q = t(56190),
        J = t(77387);
      function GuidesCodeBlock() {
        return (0, r.jsxs)("div", {
          className: K().guidesCodeBlock,
          children: [
            (0, r.jsx)(X.Z, { tabs: ["JSON"] }),
            (0, r.jsx)(Q.Z, {
              language: "javascript",
              style: J.Z,
              showLineNumbers: !0,
              wrapLines: !0,
              customStyle: { background: "transparent" },
              children:
                '{\n  "tickets": [\n    {\n      "id": 1,\n      "subject": "Computer Order Issue",\n      "description": "Hi, my name is Claude and I placed an order for 3 supercomputers on June 13th. The tracking portal says they were delivered to 123 Front Street, but I never received the shipping containers. Can I please have a refund?"\n    },\n      {\n      "id": 2,\n      "subject": "Exchange Graphics Card",\n      "description": "Hello, my name is Ada and I purchased a graphics card on July 9th, 2023. Unfortunately I ordered the wrong card for my machine. Can I exchange the card? I can be reached at ada@gmail.com and +18185552222"\n    },\n    {\n      "id": 3,\n      "subject": "Laptop Key Broken",\n      "description": "Hi, I ordered a laptop three weeks ago on my credit card 4242 4242 4242 4242 and the U key is not working. I would like to order a replacement and have it sent to 456 Back Lane."\n    }\n  ]\n}\n',
            }),
          ],
        });
      }
      var Y = t(60777),
        $ = t(32494),
        ee = t(61609),
        en = t(32727),
        et = t.n(en);
      function HeroBanner(e) {
        let { children: n, href: t, ...i } = e;
        return (0, r.jsx)("a", {
          className: et().button,
          href: t,
          ...i,
          children: (0, r.jsx)("span", { className: et().inner, children: n }),
        });
      }
      var er = t(37519),
        ei = t(99477),
        ea = t(15029),
        eo = t(70131),
        es = t(38715);
      function BlastRadius(e) {
        let { position: n, delay: t, totalDuration: a } = e,
          o = (0, i.useMemo)(() => {
            let e = new ei.Vector3(...n);
            return e.normalize();
          }, [n]),
          s = (0, i.useMemo)(() => {
            let e = new ei.Vector3(0, 1, 0);
            return new ei.Quaternion().setFromUnitVectors(e, o);
          }, [o]),
          c = (0, i.useMemo)(
            () =>
              new ei.Quaternion().setFromAxisAngle(
                new ei.Vector3(1, 0, 0),
                Math.PI / 2,
              ),
            [],
          ),
          l = {
            uTime: { value: 0 },
            uDelay: { value: t + 1.9 },
            uMaxScale: { value: 2 },
            uDuration: { value: 1.5 },
          };
        return (
          (0, es.A)((e) => {
            let { clock: n } = e,
              t = n.elapsedTime;
            l.uTime.value = t > a ? t % a : t;
          }),
          (0, r.jsxs)("mesh", {
            position: n,
            quaternion: s.multiply(c),
            children: [
              (0, r.jsx)("circleGeometry", { args: [0.05, 32] }),
              (0, r.jsx)("shaderMaterial", {
                uniforms: l,
                vertexShader:
                  "\n  varying vec2 vUv;\n\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",
                fragmentShader:
                  "\n  varying vec2 vUv;\n  \n  uniform float uTime;\n  uniform float uDelay;\n  uniform float uMaxScale;\n  uniform float uDuration;\n\n  void main() {\n    float timePassed = max(uTime - uDelay, 0.0);\n    if (timePassed > uDuration) {\n      discard; // discard fragment if its time has passed\n    }\n\n    // calculate scale and opacity\n    float scale = mix(0.0, uMaxScale, timePassed / uDuration);\n    float opacity = 1.0 - (timePassed / uDuration);\n\n    // calculate distance from center (taking into account that uv's range is [0, 1])\n    vec2 centeredUv = 2.0 * (vUv - 0.5);\n    float dist = length(centeredUv);\n\n    // discard pixels that are not within the current radius\n    float outerRing = scale;\n    float innerRing = scale - 0.1;\n    if (dist < innerRing || dist > outerRing) {\n      discard;\n    }\n\n    // output the final color\n    gl_FragColor = vec4(vec3(1.0), opacity);\n  }\n",
                side: ei.DoubleSide,
                transparent: !0,
              }),
            ],
          })
        );
      }
      function Orb() {
        let e = (0, i.useRef)();
        (0, es.A)((n) => {
          let { clock: t } = n;
          e.current &&
            (e.current.material.uniforms.uTime.value = t.getElapsedTime());
        });
        let n = (0, i.useMemo)(
          () => ({
            uTime: { value: 0 },
            uDisplacement: { value: 0.1 },
            uFrequency: { value: 2 },
          }),
          [],
        );
        return (0, r.jsxs)("mesh", {
          ref: e,
          children: [
            (0, r.jsx)("sphereGeometry", { args: [1, 100, 100] }),
            (0, r.jsx)("shaderMaterial", {
              uniforms: n,
              vertexShader:
                "\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nuniform float uTime;\nuniform float uDisplacement;\nuniform float uFrequency;\n\n// 3D Perlin noise function taken from:\n// https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n     return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise, 3D version\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n\nvoid main() {\n  vUv = uv;\n\n  // Use Perlin noise for displacement\n  float displacement = cnoise(vec3(uFrequency * position.xz, uTime/5.0)) * uDisplacement;\n\n  vec3 displacedPosition = position + normal * displacement;\n  \n  gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);\n}\n",
              fragmentShader:
                "\nuniform float uTime;\nvarying vec2 vUv;\nvarying vec3 vViewDirection;\n\nuint hash(uint x){\n  x = ((x >> 16u) ^ x) * 0x45d9f3bu;\n  x = ((x >> 16u) ^ x) * 0x45d9f3bu;\n  x = (x >> 16u) ^ x;\n  return x;\n}\n\nuint combine(uint v, uint seed){\n  return seed ^ (v + 0x9e3779b9u + (seed << 6) + (seed >> 2));\n}\n\nfloat uniformFloat(uint h){\n  return uintBitsToFloat(h & 0x007FFFFFu | 0x3F800000u) - 1.0;\n}\n\nvec3 normal(vec3 p, uint seed){\n  uvec3 u = floatBitsToUint(p);\n  seed = combine(hash(u.x), seed);\n  seed = combine(hash(u.y), seed);\n  seed = combine(hash(u.z), seed);\n  float a = uniformFloat(seed);\n  seed = combine(0x6d04955du, seed);\n  float z = uniformFloat(seed) * 2.0 - 1.0;\n  float s = sqrt(1.0 - z * z);\n  return vec3(s * cos(a * 6.0 + vec2(0.0, -1.5)), z);\n}\n\nvec3 ss(vec3 x){\n  return x * x * (3.0 - 2.0 * x);\n}\n\nfloat gnoise(vec3 p, uint seed){\n  vec3 i = floor(p);\n  vec3 f = fract(p);\n  vec3 a = ss(f);\n  float n000 = dot(normal(i, seed), f);\n  float n100 = dot(normal(i + vec3(1.0, 0.0, 0.0), seed), f - vec3(1.0, 0.0, 0.0));\n  float n010 = dot(normal(i + vec3(0.0, 1.0, 0.0), seed), f - vec3(0.0, 1.0, 0.0));\n  float n110 = dot(normal(i + vec3(1.0, 1.0, 0.0), seed), f - vec3(1.0, 1.0, 0.0));\n  float n001 = dot(normal(i + vec3(0.0, 0.0, 1.0), seed), f - vec3(0.0, 0.0, 1.0));\n  float n101 = dot(normal(i + vec3(1.0, 0.0, 1.0), seed), f - vec3(1.0, 0.0, 1.0));\n  float n011 = dot(normal(i + vec3(0.0, 1.0, 1.0), seed), f - vec3(0.0, 1.0, 1.0));\n  float n111 = dot(normal(i + vec3(1.0, 1.0, 1.0), seed), f - vec3(1.0, 1.0, 1.0));\n  return mix(\n    mix(mix(n000, n100, a.x), mix(n010, n110, a.x), a.y),\n    mix(mix(n001, n101, a.x), mix(n011, n111, a.x), a.y), a.z);\n}\n\nvec3 gnoise3(vec3 p, uvec3 seed){\n  return vec3(gnoise(p, seed.x), gnoise(p, seed.y), gnoise(p, seed.z));\n}\n\n\nvec3 n(vec3 p, uvec3 seed){ \n  return max(1.0 - abs(gnoise3(p, seed) * 1.5), vec3(0.0));\n}\n\nvec3 q(vec3 v){\n  return pow(v, vec3(1.0, 1.0, 3.5));\n}\n\nvec3 r(vec3 n){\n  return pow(n, vec3(6.0, 9.0, 9.0));\n}\n\nvec3 cnoise(vec3 p){\n	vec3 n0 = n(p * 1.0, uvec3(0xa7886e74u, 0x4433f369u, 0x5842edddu));\n  vec3 n1 = n(p * 2.0, uvec3(0x41a2b27au, 0x14dede03u, 0x509a02aau));\n  vec3 n2 = n(p * 4.0, uvec3(0xd5bf21b3u, 0x1d6adb70u, 0xc47ed64cu));\n  vec3 n3 = n(p * 8.0, uvec3(0x7279fef1u, 0x120a704eu, 0x845b7178u));\n  vec3 n4 = n(p * 16.0, uvec3(0xace62131u, 0x7e861b25u, 0x9f51d60cu));\n  return (\n      n1 * r(n0) * 0.25 +\n      q(n0) * r(n1) * vec3(0.25, 0.25, 0.5) +\n      q(n0 * n1) * r(n2) * vec3(0.125, 0.125, 0.5) +\n      q(n0 * n1 * n2) * r(n3) * vec3(0.0625, 0.0625, 0.5) +\n      q(n0 * n1 * n2 * n3) * r(n4) * vec3(0.03125, 0.03125, 0.5)\n  );\n}\n\nvoid main(){\n  vec2 uv = vUv;\n  float t = 0.05 * uTime;\n  vec3 n = cnoise(vec3(uv, t));\n\n  // Add the 3 complex noise values together with different colors\n  gl_FragColor = vec4(\n    (vec3(0.2, 0.1, 0.45) * n.x + \n    vec3(0.9, 0.2, 0.9) * n.y +\n    vec3(0.9, 0.9, 2.7) * n.z),\n    1.0);\n  }\n",
              side: ei.FrontSide,
            }),
          ],
        });
      }
      function Path(e) {
        let {
            start: n,
            intersection: t,
            delay: a,
            biasCoefficient: o,
            totalDuration: s,
          } = e,
          c = (0, i.useRef)(),
          l = (0, i.useMemo)(
            () => ({
              uTime: { value: 0 },
              uColor: { value: new ei.Color(14536959) },
              uLength: { value: 0.4 },
              uOpacity: { value: 0.8 },
              uDelay: { value: a },
              uSpeed: { value: 0.25 },
            }),
            [],
          );
        (0, es.A)((e) => {
          let { clock: n } = e;
          if (c.current) {
            let e = n.getElapsedTime();
            c.current.material.uniforms.uTime.value = e > s ? e % s : e;
          }
        });
        let { tubeGeometry: d } = (0, i.useMemo)(() => {
          let e = new ei.Vector3(0, 0, 0),
            r = new ei.Vector3(...n),
            i = r.clone().multiplyScalar(0.5),
            a = new ei.Vector3(Math.random(), Math.random(), Math.random());
          a.sub(a.clone().projectOnVector(r)),
            a.normalize().multiplyScalar(r.distanceTo(e) * o),
            i.add(a);
          let s = new ei.CatmullRomCurve3([r, i, t, e]),
            c = new ei.TubeGeometry(s, 128, 0.004, 4, !1);
          return { tubeGeometry: c };
        }, [n]);
        return (0, r.jsx)("mesh", {
          geometry: d,
          ref: c,
          children: (0, r.jsx)("shaderMaterial", {
            uniforms: l,
            vertexShader:
              "\nvarying vec2 vUv;\nuniform float uTime;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n",
            fragmentShader:
              "\nvarying vec2 vUv;\nuniform float uTime;\nuniform vec3 uColor;\nuniform float uLength;\nuniform float uOpacity;\nuniform float uDelay;\nuniform float uSpeed;\n\nfloat easeInOut(float t) {\n    return t < 0.5 ? 2.0 * t * t : -1.0 + (4.0 - 2.0 * t) * t;\n}\n\nvoid main() {\n  float t = (uTime - uDelay) * uSpeed;\n  float start = t;\n  float end = t + uLength;\n\n  if (vUv.x < start || vUv.x > end) {\n    discard;\n  }\n\n  float head = 0.1;\n  float alpha = smoothstep(start, end, vUv.x);\n  alpha *= 1.0 - smoothstep(end - head, end, vUv.x);\n\n  alpha = clamp(alpha, 0.0, uOpacity);\n  gl_FragColor = vec4(uColor, alpha);\n}\n",
            transparent: !0,
          }),
        });
      }
      var ec = t(48243);
      function Shield() {
        let e = (0, i.useRef)(),
          n = (0, i.useRef)(0.002),
          t = (0, i.useRef)(),
          [a, o] = (0, i.useState)(!1),
          s = (0, i.useMemo)(() => ({ uTime: { value: 0 } }), []);
        return (
          (0, es.A)((r) => {
            e.current &&
              ((t.current.uniforms.uTime.value = r.clock.getElapsedTime()),
              (e.current.rotation.y += n.current),
              (e.current.rotation.x += n.current),
              (e.current.rotation.z += n.current),
              0.002 != n.current &&
                (n.current = ei.MathUtils.lerp(n.current, 0.002, 0.08)));
          }),
          (0, i.useEffect)(() => {
            let handleMouseMove = (e) => {
                n.current = e.movementX / (500 * window.devicePixelRatio);
              },
              handleMouseUp = () => {
                o(!1),
                  document.removeEventListener("mouseup", handleMouseUp),
                  document.removeEventListener("mousemove", handleMouseMove);
              },
              handleMouseDown = () => {
                o(!0),
                  document.addEventListener("mouseup", handleMouseUp),
                  document.addEventListener("mousemove", handleMouseMove);
              };
            return (
              document.addEventListener("mousedown", handleMouseDown),
              () => {
                document.removeEventListener("mousedown", handleMouseDown);
              }
            );
          }, []),
          (0, r.jsx)(ec.E.mesh, {
            ref: e,
            animate: { scale: a ? 1.025 : 1 },
            transition: { duration: 0.3 },
            children: (0, r.jsxs)("points", {
              children: [
                (0, r.jsx)("sphereGeometry", { args: [1.25, 128, 128] }),
                (0, r.jsx)("shaderMaterial", {
                  ref: t,
                  side: ei.DoubleSide,
                  uniforms: s,
                  vertexShader:
                    "\n  varying vec2 vUv;\n  varying vec3 vPosition;\n  \n  void main() {\n    vUv = uv;\n    vPosition = position;\n    gl_PointSize = 1.5;  // Set the point size here\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",
                  fragmentShader:
                    "\n  varying vec2 vUv;\n  varying vec3 vPosition;\n  uniform float uTime;\n  uniform float uFrequency;\n\n  float random(vec2 st) {\n    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);\n  }\n\n  float noise (in vec2 st) {\n    vec2 i = floor(st);\n    vec2 f = fract(st);\n    \n    float a = random(i);\n    float b = random(i + vec2(1.0, 0.0));\n    float c = random(i + vec2(0.0, 1.0));\n    float d = random(i + vec2(1.0, 1.0));\n    \n    vec2 u = f*f*(3.0-2.0*f);\n    \n    return mix(a, b, u.x) +\n            (c - a)* u.y * (1.0 - u.x) +\n            (d - b) * u.x * u.y;\n  }\n\n  void main() {\n    float n = noise((vUv + uTime/10.0) * 10.0);\n    float alpha = smoothstep(0.25, 1.0, n);\n\n    alpha *= 1.0 - smoothstep(1.0, 1.25, abs(vPosition.y));\n\n    vec3 color = vec3(0.4, 0.2, 0.9);\n    gl_FragColor = vec4(color, alpha);\n  }\n",
                  blending: ei.AdditiveBlending,
                  transparent: !0,
                  depthWrite: !1,
                }),
              ],
            }),
          })
        );
      }
      var el = t(90457),
        ed = t.n(el);
      function Scene() {
        let { ref: e, inView: n } = (0, eo.YD)(),
          t = (0, F.Z)("(max-width: 768px)"),
          a = (0, i.useMemo)(
            () =>
              Array.from({ length: 24 }, () => {
                let e = 2 * Math.PI * Math.random(),
                  n = (Math.PI / 2) * Math.random(),
                  t = 10 * Math.sin(n) * Math.cos(e),
                  r = 10 * Math.sin(n) * Math.sin(e),
                  i = 10 * Math.cos(n);
                return new ei.Vector3(t, r, i);
              }),
            [],
          ),
          o = (0, i.useMemo)(
            () => a.map((e) => e.clone().normalize().multiplyScalar(1.25)),
            [a],
          ),
          s = (0, i.useMemo)(
            () => Array.from({ length: 24 }, (e, n) => (n + 1) / 2),
            [],
          );
        return (0, r.jsx)("div", {
          ref: e,
          className: ed().container,
          children: (0, r.jsx)(ea.Xz, {
            camera: { position: [0, 0, 22], fov: 12 },
            children:
              n &&
              (0, r.jsxs)("group", {
                position: [t ? 0 : 2, t ? -2.25 : 0, 0],
                children: [
                  a.map((e, n) =>
                    (0, r.jsx)(
                      Path,
                      {
                        start: e.toArray(),
                        intersection: o[n],
                        delay: s[n],
                        biasCoefficient: 0.25,
                        totalDuration: 15,
                      },
                      n,
                    ),
                  ),
                  o.map((e, n) =>
                    (0, r.jsx)(
                      BlastRadius,
                      { position: e.toArray(), delay: s[n], totalDuration: 15 },
                      n,
                    ),
                  ),
                  (0, r.jsx)(Orb, {}),
                  (0, r.jsx)(Shield, {}),
                ],
              }),
          }),
        });
      }
      var eu = t(79438),
        em = t.n(eu),
        Hero_Hero = function () {
          let { openSalesForm: e } = (0, i.useContext)(er.G);
          return (0, r.jsxs)($.Z, {
            className: em().hero,
            children: [
              (0, r.jsxs)(M.Z, {
                className: em().heroContent,
                children: [
                  (0, r.jsxs)(HeroBanner, {
                    href: "https://youtu.be/bEYWw_cJ-58",
                    target: "_blank",
                    children: ["Watch the Introduction Video ", "->"],
                  }),
                  (0, r.jsx)(ee.Z, {
                    as: "h1",
                    className: em().title,
                    children: "AI Privacy",
                  }),
                  (0, r.jsx)(ee.Z, {
                    as: "p",
                    className: em().subText,
                    children:
                      "Securely integrate with OpenAI without sharing sensitive customer PII or compromising on AI output.",
                  }),
                  (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsx)(Y.Z, {
                        size: "large",
                        onClick: () => e({ context: "AI Privacy — Hero" }),
                        children: "API docs",
                      }),
                      (0, r.jsx)(Y.Z, {
                        type: "transparent",
                        size: "large",
                        href: "https://app.evervault.com/register",
                        as: "a",
                        target: "_blank",
                        children: "Try for free",
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(k.ErrorBoundary, {
                fallback: (0, r.jsx)("div", {}),
                children: (0, r.jsx)(S.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: { duration: 1.5 },
                  className: em().scene,
                  children: (0, r.jsx)(Scene, {}),
                }),
              }),
            ],
          });
        },
        ev = t(39892),
        eh = t(62654);
      function AIPrivacy() {
        return (0, r.jsxs)(ev.Z, {
          title: "AI Privacy — evervault",
          socialImage: "https://evervault.com/social/ai-privacy.jpg",
          description:
            "Safely leverage LLMs without compromising your users' privacy.",
          children: [
            (0, r.jsx)(Hero_Hero, {}),
            (0, r.jsx)(AIPrivacyFeatures, {}),
            (0, r.jsx)(Demo, {}),
            (0, r.jsx)(j.Z, {
              asset: (0, r.jsx)(GuidesCodeBlock, {}),
              href: "https://docs.evervault.com/guides/relay-redaction",
              hrefTitle: "Read Guide",
              tagline: "Developer Guides",
              title: "Relay Redaction with OpenAI",
              children:
                "Use OpenAI and evervault's Relay Redaction to Categorize Support Tickets Containing PII.",
            }),
            (0, r.jsx)(o.Z, {
              heading: "Securely build product features using AI APIs",
              subheading:
                "Leverage third-party LLMs, like OpenAI, without compromising on data security.",
              config: y,
            }),
            (0, r.jsx)(eh.Z, {
              testimonailsConfig: C,
              rotationMap: [0, 0],
              logos: "/_next/static/media/logo-wheel.8614af0a.svg",
            }),
            (0, r.jsx)(w.Z, {
              heading: "Solve AI data security with a simple proxy",
              subheading:
                "Use evervault to detect, redact, and replace sensitive PII before sharing with a third-party LLM.",
              href: "https://app.evervault.com/register",
              cta: "Get Started",
            }),
          ],
        });
      }
    },
    77387: function (e, n) {
      "use strict";
      (n.Z = void 0),
        (n.Z = {
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
    97668: function (e) {
      e.exports = { suffix: "AIPrivacyFeatures_suffix__CgdM7" };
    },
    48545: function (e) {
      e.exports = {
        heroContent: "Demo_heroContent__J7qyT",
        fadeIn: "Demo_fadeIn__PlE5s",
        heroCopy: "Demo_heroCopy__9BKga",
        title: "Demo_title__MxFJX",
        subTitle: "Demo_subTitle__DW78N",
        heroButton: "Demo_heroButton__nDUUd",
        cipher: "Demo_cipher__Y7fKb",
        outerGlow: "Demo_outerGlow__ZYtV1",
        spin: "Demo_spin__bUaSH",
        innerGlow: "Demo_innerGlow__YJCDV",
        cipherCorrect: "Demo_cipherCorrect__gp3XC",
        ring: "Demo_ring__3J_A_",
        inner: "Demo_inner__vJTvL",
        width: "Demo_width__d7a3q",
        outer: "Demo_outer__ginvc",
        char: "Demo_char__9sDtM",
        slice: "Demo_slice__qYEmB",
        dial: "Demo_dial__3eAQD",
        tick: "Demo_tick__L3RWi",
        dialChar: "Demo_dialChar__vkoyB",
        demo: "Demo_demo__ZNC4h",
        diagram: "Demo_diagram__NpbQK",
        shift: "Demo_shift__NNCpV",
        request: "Demo_request___Quj_",
        encryptedRequest: "Demo_encryptedRequest__OfI_C",
        heading: "Demo_heading__5Fkzt",
        accordion: "Demo_accordion__xm_M8",
        accordionItem: "Demo_accordionItem__amzez",
        accordionIndicator: "Demo_accordionIndicator__E_GiV",
        accordionTrigger: "Demo_accordionTrigger__YIfRY",
        accordionContent: "Demo_accordionContent__IBtuv",
        slideOpen: "Demo_slideOpen__boh7z",
        slideClosed: "Demo_slideClosed__IKweP",
        accordionText: "Demo_accordionText__7sHeB",
        accordionIcon: "Demo_accordionIcon__rkM2j",
        functions: "Demo_functions__6fKQ2",
        functionCall: "Demo_functionCall__om82D",
        learnMore: "Demo_learnMore__sRnjd",
        chevronOne: "Demo_chevronOne__rnXnK",
        chevronTwo: "Demo_chevronTwo__vGRNS",
        glow: "Demo_glow__OKU9w",
        guidesCodeBlock: "Demo_guidesCodeBlock__1iP8m",
      };
    },
    76164: function (e) {
      e.exports = {
        container: "TextDemo_container__Qmu01",
        pii: "TextDemo_pii___5IJC",
      };
    },
    19477: function (e) {
      e.exports = {
        request: "Workflow_request__7upoh",
        encryptedRequest: "Workflow_encryptedRequest__Wcu6J",
      };
    },
    77674: function (e) {
      e.exports = { guidesCodeBlock: "GuidesCodeBlock_guidesCodeBlock__RgKk1" };
    },
    79438: function (e) {
      e.exports = {
        hero: "Hero_hero__R05qu",
        heroContent: "Hero_heroContent__24dTg",
        title: "Hero_title__TSICG",
        subText: "Hero_subText__bxHfg",
        container: "Hero_container__QzCiz",
        scene: "Hero_scene__o9vBs",
      };
    },
    90457: function (e) {
      e.exports = { container: "Scene_container__d_Wqc" };
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
    32727: function (e) {
      e.exports = {
        button: "HeroBanner_button__vesm_",
        inner: "HeroBanner_inner__fcI9d",
        spin: "HeroBanner_spin__bAzMM",
        shimmer: "HeroBanner_shimmer__x6X71",
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
      [3737, 1140, 5029, 9142, 8243, 7622, 1044, 2670, 9774, 2888, 179],
      function () {
        return e((e.s = 63665));
      },
    ),
      (_N_E = e.O());
  },
]);
