(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7608],
  {
    31072: function (e, a, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/pci",
        function () {
          return t(78172);
        },
      ]);
    },
    75964: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return CodeTabs;
        },
      });
      var i = t(85893),
        s = t(94184),
        n = t.n(s),
        r = t(898),
        o = t.n(r);
      function CodeTabs(e) {
        let { tabs: a, onChange: t, value: s, className: r } = e,
          l = a.indexOf(s || a[0]);
        return (0, i.jsx)("div", {
          className: n()(o().container, r),
          children: (0, i.jsxs)("div", {
            className: o().tabs,
            children: [
              a.map((e, s) =>
                (0, i.jsx)(
                  "button",
                  {
                    className: n()(
                      o().tab,
                      l === s && o().active,
                      l + 1 === s && o().afterActive,
                      l - 1 === s && o().beforeActive,
                      0 === s && 0 !== l && o().firstActive,
                    ),
                    onClick: () => t && t(a[s]),
                    children: e,
                  },
                  e,
                ),
              ),
              (0, i.jsx)("div", {
                className: n()(
                  o().filler,
                  l === a.length - 1 && o().fillerAfterActive,
                ),
              }),
            ],
          }),
        });
      }
    },
    74098: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return Container;
        },
      });
      var i = t(85893),
        s = t(94184),
        n = t.n(s),
        r = t(31555),
        o = t.n(r);
      function Container(e) {
        let { className: a, children: t, ...s } = e;
        return (0, i.jsx)("div", {
          className: n()(o().container, a),
          children: t,
        });
      }
    },
    97004: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return Features;
        },
      });
      var i = t(85893),
        s = t(5152),
        n = t.n(s),
        r = t(91452),
        o = t.n(r),
        l = t(94184),
        c = t.n(l),
        d = t(61609);
      let u = n()(() => t.e(3531).then(t.bind(t, 3531)), {
        loadableGenerated: { webpack: () => [3531] },
        ssr: !1,
      });
      function Features(e) {
        let { heading: a, size: t, subheading: s, config: n, className: r } = e;
        return (0, i.jsx)("div", {
          className: c()(o().container, r),
          children: (0, i.jsxs)("div", {
            className: o().maxWidthWrapper,
            children: [
              (0, i.jsxs)("div", {
                className: o().heading,
                "data-size": t,
                children: [
                  (0, i.jsx)(d.Z, {
                    as: "h2",
                    width: "70%",
                    interactive: !0,
                    children: a,
                  }),
                  s &&
                    (0, i.jsx)("p", { className: o().subHeading, children: s }),
                ],
              }),
              (0, i.jsx)("div", {
                className: o().grid,
                children: n.map((e, a) => {
                  let { title: t, features: s } = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      children: [
                        t &&
                          (0, i.jsx)("div", {
                            className: o().titleContainer,
                            children: (0, i.jsx)(u, { children: t }),
                          }),
                        (0, i.jsx)("div", { className: o().divider }),
                        (0, i.jsx)("div", {
                          className: o().features,
                          children: s.map((e) => {
                            let { icon: a, title: t, description: s } = e;
                            return (0, i.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: o().featureTitle,
                                    children: [
                                      a,
                                      (0, i.jsx)("h5", { children: t }),
                                    ],
                                  }),
                                  (0, i.jsx)("p", { children: s }),
                                ],
                              },
                              t,
                            );
                          }),
                        }),
                      ],
                    },
                    t || a,
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    32494: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return GradientHero;
        },
      });
      var i = t(85893),
        s = t(18120),
        n = t.n(s);
      function GradientHero(e) {
        let { children: a, className: t } = e,
          s = [n().hero, t].filter(Boolean).join(" ");
        return (0, i.jsx)("div", {
          className: s,
          children: (0, i.jsx)("div", { className: n().gradient, children: a }),
        });
      }
    },
    62811: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return HeroBreadcrumb;
        },
      });
      var i = t(85893),
        s = t(70184),
        n = t.n(s);
      function HeroBreadcrumb(e) {
        let { parent: a, child: t } = e;
        return (0, i.jsxs)("div", {
          className: n().container,
          children: [
            (0, i.jsx)("div", { className: n().parent, children: a }),
            (0, i.jsx)("div", { className: n().divider }),
            (0, i.jsx)("div", { className: n().child, children: t }),
          ],
        });
      }
    },
    62654: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return Testimonials;
        },
      });
      var i = t(85893),
        s = t(92520),
        n = t(13589),
        r = t(11544),
        o = t(98814),
        l = t(64998),
        c = t(94184),
        d = t.n(c),
        u = t(67294),
        m = t(35182),
        h = t.n(m);
      function Testimonials(e) {
        let { testimonailsConfig: a, rotationMap: t, logos: c, onClick: m } = e,
          [_, p] = (0, u.useState)(0),
          decrypt = () => {
            let e = document.getElementById(a[_].id),
              t = a[_].quote,
              i = t.split(""),
              s = 0;
            !(function animate() {
              setTimeout(() => {
                let a = e.children[s];
                (a.style.opacity = 1),
                  (a.innerHTML = i[s]),
                  ++s < t.length && animate();
              }, 10);
            })();
          };
        return (0, i.jsx)("div", {
          className: h().container,
          children: (0, i.jsxs)("div", {
            className: h().maxWidthWrapper,
            children: [
              (0, i.jsx)("div", {
                className: h().logosContainer,
                children: (0, i.jsx)(s.E.img, {
                  initial: !1,
                  animate: { rotate: t[_] },
                  src: c,
                  className: h().logosWheel,
                  transition: { duration: 1.5, ease: "anticipate" },
                }),
              }),
              (0, i.jsxs)(n.S, {
                children: [
                  (0, i.jsx)(r.M, {
                    mode: "wait",
                    children: a.map((e, a) => {
                      let { encryptedQuote: t, id: n } = e;
                      return a !== _
                        ? null
                        : (0, i.jsx)(
                            s.E.h3,
                            {
                              className: h().quote,
                              id: n,
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.5 },
                              onAnimationComplete: decrypt,
                              children: t
                                .split("")
                                .map((e, a) =>
                                  (0, i.jsx)(
                                    "span",
                                    { className: h().character, children: e },
                                    a + e,
                                  ),
                                ),
                            },
                            n,
                          );
                    }),
                  }),
                  (0, i.jsx)(s.E.div, {
                    className: h().authors,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: a.map((e, t) => {
                      let { author: s, title: n } = e;
                      return (0, i.jsxs)(
                        "button",
                        {
                          onClick: m || (() => p(t)),
                          className: d()(
                            h().author,
                            t === _ && h().active,
                            1 === a.length && h().solo,
                          ),
                          children: [
                            s,
                            " ",
                            (0, i.jsx)("span", {
                              className: h().title,
                              children: n,
                            }),
                          ],
                        },
                        s,
                      );
                    }),
                  }),
                  (0, i.jsxs)(s.E.div, {
                    className: h().authorsMobile,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: [
                      (0, i.jsx)("button", {
                        className: h().mobileNavButton,
                        onClick: () => {
                          if (0 === _) return p(a.length - 1);
                          p((e) => e - 1);
                        },
                        "data-solo": 1 === a.length,
                        children: (0, i.jsx)(o.Z, {}),
                      }),
                      (0, i.jsxs)(
                        "button",
                        {
                          onClick: () => p(index),
                          className: h().mobileAuthor,
                          children: [
                            a[_].author,
                            " ",
                            (0, i.jsx)("span", {
                              className: h().title,
                              children: a[_].title,
                            }),
                          ],
                        },
                        a[_].author,
                      ),
                      (0, i.jsx)("button", {
                        className: h().mobileNavButton,
                        onClick: () => {
                          if (_ === a.length - 1) return p(0);
                          p((e) => e + 1);
                        },
                        "data-solo": 1 === a.length,
                        children: (0, i.jsx)(l.Z, {}),
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
    78172: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return Payments;
          },
        });
      var i = t(85893),
        s = t(97004),
        n = t(39892),
        r = t(35800),
        o = t(67294),
        l = t(4002),
        c = t(92520),
        d = t(714),
        u = t.n(d),
        m = t(73794),
        h = t.n(m);
      function LightInputsElement() {
        return (0, i.jsxs)("div", {
          className: h().elementContainer,
          children: [
            (0, i.jsxs)("div", {
              className: h().inputContainer,
              children: [
                (0, i.jsx)("label", {
                  className: h().label,
                  children: "Card number",
                }),
                (0, i.jsx)("input", {
                  type: "text",
                  className: h().input,
                  placeholder: "4242 4242 4242 4242",
                  disabled: !0,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: h().inputGroup,
              children: [
                (0, i.jsxs)("div", {
                  className: h().inputContainer,
                  children: [
                    (0, i.jsx)("label", {
                      className: h().label,
                      children: "Expiry",
                    }),
                    (0, i.jsx)("input", {
                      type: "text",
                      className: h().input,
                      placeholder: "02/24",
                      disabled: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: h().inputContainer,
                  children: [
                    (0, i.jsx)("label", {
                      className: h().label,
                      children: "CVC",
                    }),
                    (0, i.jsx)("input", {
                      type: "text",
                      className: h().input,
                      placeholder: "123",
                      disabled: !0,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var _ = t(56884),
        p = t.n(_);
      function Layout_Layout(e) {
        let { children: a, backgroundColor: t = "var(--grey-00)" } = e,
          s = o.Children.toArray(a).find((e) => e.type === Layout_Layout.Top),
          n = o.Children.toArray(a).find(
            (e) => e.type === Layout_Layout.Bottom,
          );
        return (0, i.jsxs)("div", {
          className: p().container,
          style: { backgroundColor: t },
          children: [s, (0, i.jsx)("div", { className: p().placeholder }), n],
        });
      }
      function LightInputsUI() {
        return (0, i.jsxs)(Layout_Layout, {
          backgroundColor: "var(--grey-10)",
          children: [
            (0, i.jsx)(Layout_Layout.Top, {
              children: (0, i.jsxs)("div", {
                className: h().topContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: h().inputContainer,
                    children: [
                      (0, i.jsx)("label", {
                        className: h().label,
                        children: "Full name",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        className: h().input,
                        placeholder: "Claude Shannon",
                        disabled: !0,
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: h().inputContainer,
                    children: [
                      (0, i.jsx)("label", {
                        className: h().label,
                        children: "Email",
                      }),
                      (0, i.jsx)("input", {
                        type: "text",
                        className: h().input,
                        placeholder: "claude@shannon.org",
                        disabled: !0,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)(Layout_Layout.Bottom, {
              children: (0, i.jsxs)("div", {
                className: h().bottomContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: h().lineItem,
                    children: [
                      (0, i.jsx)("div", {
                        className: h().item,
                        children: "Subtotal",
                      }),
                      (0, i.jsx)("div", {
                        className: h().value,
                        children: "€100.00",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: h().lineItem,
                    children: [
                      (0, i.jsx)("div", {
                        className: h().item,
                        children: "Tax",
                      }),
                      (0, i.jsx)("div", {
                        className: h().value,
                        children: "€23.00",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { className: h().divider }),
                  (0, i.jsxs)("div", {
                    className: h().lineItem,
                    children: [
                      (0, i.jsx)("div", {
                        className: h().item,
                        children: "Total",
                      }),
                      (0, i.jsx)("div", {
                        className: h().value,
                        children: "€123.00",
                      }),
                    ],
                  }),
                  (0, i.jsx)("button", {
                    className: h().button,
                    children: "Pay €123.00",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      (Layout_Layout.Top = function (e) {
        let { children: a } = e;
        return (0, i.jsx)("div", { className: p().top, children: a });
      }),
        (Layout_Layout.Bottom = function (e) {
          let { children: a } = e;
          return (0, i.jsx)("div", { className: p().bottom, children: a });
        });
      var v = t(34464),
        x = t(71476),
        j = t.n(x);
      function DarkRevealElement() {
        return (0, i.jsxs)("div", {
          className: j().elementContainer,
          children: [
            (0, i.jsxs)("div", {
              className: j().cardDetails,
              children: [
                (0, i.jsx)("div", {
                  className: j().cardholderName,
                  children: "Nev Flynn",
                }),
                (0, i.jsx)("img", {
                  src: "/_next/static/media/mastercard.4aaec2b1.png",
                  className: j().mastercard,
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: j().cardNumberContainer,
              children: [
                (0, i.jsxs)("div", {
                  className: j().cardNumber,
                  children: [
                    (0, i.jsx)("div", { children: "••••" }),
                    (0, i.jsx)("div", { children: "••••" }),
                    (0, i.jsx)("div", { children: "••••" }),
                    (0, i.jsx)("div", { children: "1024" }),
                  ],
                }),
                (0, i.jsx)(v.Z, {
                  color: "var(--grey-50)",
                  width: 16,
                  strokeWidth: 1.5,
                }),
              ],
            }),
          ],
        });
      }
      var y = t(72167);
      let g = new Date(),
        N = [
          {
            name: "Free Now",
            date: (0, y.Z)(g, "dd/MM/yyyy"),
            amount: "$10.54",
            icon: {
              src: "/_next/static/media/free-now.9fe514f8.png",
              height: 150,
              width: 150,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXdARzcABXkPlDfEyftg5Hrbn/hJjzxnafqhhenAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVR4nGNggANGRihmYmIEYQYGBlYmNhZmkBQzOyszSICRjYUBRGMAAAo3AEVkzkzXAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Asian Food Market",
            date: (0, y.Z)(g.setDate(g.getDate() - 5), "dd/MM/yyyy"),
            amount: "$11.50",
            icon: {
              src: "/_next/static/media/asian-food-market.ebfce8b6.png",
              height: 150,
              width: 150,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEWYRESDHh6HJCSIJiadTEynX1+iVlbCj4/p19ewcHDSra39+/v7cTG4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nBXKORKAQAzEQI3sPYD//5dyoqSFpiqK0j0NbCBU8123FOs+q4fOmx7KOntmKzH6AxebALF/rdIhAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
          {
            name: "Notion Labs Inc",
            date: (0, y.Z)(g.setDate(g.getDate() - 10), "dd/MM/yyyy"),
            amount: "$8.00",
            icon: {
              src: "/_next/static/media/notion.6b7847fa.png",
              height: 150,
              width: 150,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX////g4ODT09OgoKCXl5fGxsbr6+tQUFCnp6dHR0eGhobs7OzKysp6enpoaGhr+OrjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nEWJyQ0AIAzD0gPacu0/LsoD4U8sB/h00cnVMtsCoJVbKiUynKUf80GBLOXzuBgPAKqGeAeJAAAAAElFTkSuQmCC",
              blurWidth: 8,
              blurHeight: 8,
            },
          },
        ];
      function DarkRevealUI() {
        return (0, i.jsxs)(Layout_Layout, {
          backgroundColor: "var(--grey-90)",
          children: [
            (0, i.jsx)(Layout_Layout.Top, {
              children: (0, i.jsxs)("div", {
                className: j().topContainer,
                children: [
                  (0, i.jsx)("h4", { className: j().name, children: "Nev" }),
                  (0, i.jsx)("p", {
                    className: j().cardType,
                    children: "Virtual Card",
                  }),
                  (0, i.jsxs)("div", {
                    className: j().tabs,
                    children: [
                      (0, i.jsx)("div", {
                        className: j().tab,
                        children: "Overview",
                      }),
                      (0, i.jsx)("div", {
                        className: j().tab,
                        children: "Transactions",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    children: [
                      (0, i.jsxs)("div", {
                        className: j().spendLabels,
                        children: [
                          (0, i.jsx)("div", {
                            className: j().spendAmount,
                            children: "$30.04",
                          }),
                          (0, i.jsx)("div", {
                            className: j().spendLimit,
                            children: "$150.00/month",
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: j().spendProgress,
                        children: (0, i.jsx)("div", {
                          className: j().spendProgressFill,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, i.jsx)(Layout_Layout.Bottom, {
              children: (0, i.jsx)("div", {
                className: j().bottomContainer,
                children: N.map((e) => {
                  let { name: a, date: t, amount: s, icon: n } = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      className: j().transaction,
                      children: [
                        (0, i.jsxs)("div", {
                          className: j().transactionGroup,
                          children: [
                            (0, i.jsx)("img", {
                              className: j().icon,
                              src: n.src,
                            }),
                            (0, i.jsxs)("div", {
                              children: [
                                (0, i.jsx)("div", {
                                  className: j().transactionName,
                                  children: a,
                                }),
                                (0, i.jsx)("div", {
                                  className: j().transactionDate,
                                  children: t,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: j().transactionAmount,
                          children: s,
                        }),
                      ],
                    },
                    a,
                  );
                }),
              }),
            }),
          ],
        });
      }
      var C = t(9287),
        b = t.n(C),
        f = t(64998),
        A = t(13742),
        I = t(5882),
        w = t.n(I),
        k = t(76789),
        D = t(45977),
        S = t(71408);
      let L = [
          LightInputsElement,
          DarkRevealElement,
          function () {
            return (0, i.jsxs)("div", {
              className: b().elementContainer,
              children: [
                (0, i.jsx)("h5", {
                  className: b().title,
                  children: "Add a new card",
                }),
                (0, i.jsxs)("div", {
                  className: b().inputsContainer,
                  children: [
                    (0, i.jsx)("input", {
                      className: b().input,
                      placeholder: "Card number",
                      disabled: !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: b().inputGroup,
                      children: [
                        (0, i.jsx)("input", {
                          className: b().input,
                          placeholder: "MM/YY",
                          disabled: !0,
                        }),
                        (0, i.jsx)("input", {
                          className: b().input,
                          placeholder: "CVC",
                          disabled: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          },
          function () {
            return (0, i.jsxs)("div", {
              className: w().elementContainer,
              children: [
                (0, i.jsx)("img", {
                  src: "/_next/static/media/pattern.e0aa02ce.svg",
                  className: w().pattern,
                }),
                (0, i.jsxs)("div", {
                  className: w().cardDetails,
                  children: [
                    (0, i.jsx)("div", {
                      className: w().cardholderName,
                      children: "Martin Hellman",
                    }),
                    (0, i.jsx)("img", {
                      src: "/_next/static/media/visa.25751020.png",
                      className: w().visa,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: w().cardNumberContainer,
                  children: (0, i.jsx)("div", {
                    className: w().cardNumber,
                    children: "•••• 0210",
                  }),
                }),
              ],
            });
          },
          LightInputsElement,
          DarkRevealElement,
        ],
        R = [
          LightInputsUI,
          DarkRevealUI,
          function () {
            return (0, i.jsxs)(Layout_Layout, {
              backgroundColor: "var(--grey-20)",
              children: [
                (0, i.jsx)(Layout_Layout.Top, {
                  children: (0, i.jsx)("div", {
                    className: b().topContainer,
                    children: (0, i.jsxs)("div", {
                      className: b().savedCards,
                      children: [
                        (0, i.jsxs)("div", {
                          className: b().savedCard,
                          children: [
                            (0, i.jsxs)("div", {
                              className: b().cardGroup,
                              children: [
                                (0, i.jsx)("div", {
                                  className: b().cardType,
                                  children: (0, i.jsx)("img", {
                                    src: "/_next/static/media/mastercard.e249604a.png",
                                    className: b().cardLogo,
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: b().cardNumber,
                                  children: "*0242",
                                }),
                              ],
                            }),
                            (0, i.jsx)(f.Z, {
                              width: 12,
                              color: "var(--grey-40)",
                              strokeWidth: 3,
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: b().savedCard,
                          children: [
                            (0, i.jsxs)("div", {
                              className: b().cardGroup,
                              children: [
                                (0, i.jsx)("div", {
                                  className: b().cardType,
                                  children: (0, i.jsx)("img", {
                                    src: "/_next/static/media/visa.718d88e3.png",
                                    className: b().cardLogo,
                                    "data-visa": !0,
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: b().cardNumber,
                                  children: "*2401",
                                }),
                              ],
                            }),
                            (0, i.jsx)(f.Z, {
                              width: 12,
                              color: "var(--grey-40)",
                              strokeWidth: 3,
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: b().savedCard,
                          children: [
                            (0, i.jsxs)("div", {
                              className: b().cardGroup,
                              children: [
                                (0, i.jsx)("div", {
                                  className: b().cardType,
                                  children: (0, i.jsx)("img", {
                                    src: "/_next/static/media/apple-pay.9fb203fd.png",
                                    className: b().cardLogo,
                                  }),
                                }),
                                (0, i.jsx)("div", {
                                  className: b().cardNumber,
                                  children: "Apple Pay",
                                }),
                              ],
                            }),
                            (0, i.jsx)(f.Z, {
                              width: 12,
                              color: "var(--grey-40)",
                              strokeWidth: 3,
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)(Layout_Layout.Bottom, {
                  children: (0, i.jsxs)("div", {
                    className: b().bottomContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: b().makeDefaultContainer,
                        children: [
                          (0, i.jsx)("div", {
                            className: b().checkbox,
                            children: (0, i.jsx)(A.Z, {
                              width: 9,
                              strokeWidth: 4,
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: b().makeDefault,
                            children: "Set as default card",
                          }),
                        ],
                      }),
                      (0, i.jsx)("button", {
                        className: b().button,
                        children: "Add Card",
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          function () {
            return (0, i.jsxs)(Layout_Layout, {
              backgroundColor: "var(--grey-90)",
              children: [
                (0, i.jsx)(Layout_Layout.Top, {
                  children: (0, i.jsxs)("div", {
                    className: w().topContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: w().user,
                        children: [
                          (0, i.jsx)("div", {
                            className: w().avatar,
                            children: (0, i.jsx)("img", {
                              src: "/_next/static/media/user.340610c4.jpg",
                              className: w().avatarImage,
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("h4", {
                                className: w().firstName,
                                children: "Martin",
                              }),
                              (0, i.jsx)("p", {
                                className: w().surname,
                                children: "Hellman",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: w().notifications,
                            children: (0, i.jsx)(k.Z, {
                              width: 12,
                              strokeWidth: 2.5,
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: w().tabs,
                        children: [
                          (0, i.jsx)("div", {
                            className: w().tab,
                            children: "Dashboard",
                          }),
                          (0, i.jsx)("div", {
                            className: w().tab,
                            children: "Cards",
                          }),
                          (0, i.jsx)("div", {
                            className: w().tab,
                            children: "Activity",
                          }),
                          (0, i.jsx)("div", {
                            className: w().tab,
                            children: "Settings",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(Layout_Layout.Bottom, {
                  children: (0, i.jsxs)("div", {
                    className: w().bottomContainer,
                    children: [
                      (0, i.jsxs)("div", {
                        className: w().actions,
                        children: [
                          (0, i.jsxs)("div", {
                            className: w().action,
                            children: [
                              (0, i.jsx)("button", {
                                className: w().actionButton,
                                children: (0, i.jsx)(v.Z, {
                                  width: 15,
                                  color: "var(--grey-00)",
                                }),
                              }),
                              (0, i.jsx)("label", {
                                className: w().actionLabel,
                                children: "View",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: w().action,
                            children: [
                              (0, i.jsx)("button", {
                                className: w().actionButton,
                                children: (0, i.jsx)(D.Z, {
                                  width: 14,
                                  color: "var(--grey-00)",
                                }),
                              }),
                              (0, i.jsx)("label", {
                                className: w().actionLabel,
                                children: "Unlock",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: w().action,
                            children: [
                              (0, i.jsx)("button", {
                                className: w().actionButton,
                                children: (0, i.jsx)(S.Z, {
                                  width: 15,
                                  color: "var(--grey-00)",
                                }),
                              }),
                              (0, i.jsx)("label", {
                                className: w().actionLabel,
                                children: "Settings",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: w().chart,
                        children: (0, i.jsxs)("svg", {
                          width: "252",
                          height: "110",
                          viewBox: "0 0 252 110",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          className: w().line,
                          children: [
                            (0, i.jsxs)("g", {
                              clipPath: "url(#clip0_118_79)",
                              children: [
                                (0, i.jsx)("path", {
                                  d: "M140 35.0289C139.063 34.8484 138.068 34.75 137 34.75C129.033 34.75 123.964 38.5898 119.035 42.5827C118.936 42.6624 118.838 42.7423 118.74 42.8222C118.62 42.9191 118.501 43.0162 118.381 43.1133C113.707 46.9121 108.985 50.75 102 50.75C98.7973 50.75 96.3078 49.1755 94.1684 46.8136C92.0478 44.4724 90.2008 41.2795 88.2834 37.9059L88.0184 37.4394C84.2122 30.7377 79.9971 23.3162 72.6311 19.1529C67.4403 16.2189 62.7149 17.341 56.4852 18.8203L56.4823 18.8209C56.1744 18.894 55.8628 18.968 55.5474 19.0424C48.8793 20.6151 40.7349 22.2721 29.3069 19.2246C20.2455 16.8082 12.807 13.5329 7.495 10.4089C4.84021 8.84767 2.70367 7.31664 1.15763 5.9397C0.384763 5.25136 -0.250485 4.59273 -0.730881 3.97939C-0.825602 3.85845 -0.915493 3.73777 -1 3.61755V110H140V35.0289Z",
                                  fill: "url(#paint0_linear_118_79)",
                                  fillOpacity: "0.25",
                                }),
                                (0, i.jsx)("path", {
                                  d: "M-1 3C0 6.5 11.5 14.7 29.5 19.5C52 25.5 61.5 13 73 19.5C88.5 28.2609 90.3274 51 102 51C116 51 120.5 35 137 35C151.5 35 153.5 52.5 170 47.5C186.5 42.5 188.018 28.9674 199 19.5C213.5 7 225 19.5 254.5 19.5",
                                  stroke: "var(--primary)",
                                  strokeLinecap: "round",
                                  strokeLinejoin: "round",
                                  strokeWidth: 1,
                                }),
                                (0, i.jsx)("circle", {
                                  cx: "140",
                                  cy: "35",
                                  r: "2",
                                  fill: "var(--primary-light)",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("defs", {
                              children: [
                                (0, i.jsxs)("linearGradient", {
                                  id: "paint0_linear_118_79",
                                  x1: "69.5",
                                  y1: "3.61755",
                                  x2: "69.5",
                                  y2: "110",
                                  gradientUnits: "userSpaceOnUse",
                                  children: [
                                    (0, i.jsx)("stop", {
                                      stopColor: "var(--primary)",
                                    }),
                                    (0, i.jsx)("stop", {
                                      offset: "1",
                                      stopColor: "var(--primary)",
                                      stopOpacity: "0",
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("clipPath", {
                                  id: "clip0_118_79",
                                  children: (0, i.jsx)("rect", {
                                    width: "252",
                                    height: "110",
                                    fill: "white",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          LightInputsUI,
          DarkRevealUI,
        ];
      function Animation() {
        let [e, a] = (0, o.useState)(0),
          t = (0, l.q)(0, { stiffness: 80, damping: 15 }),
          s = (0, o.useRef)();
        return (
          (0, o.useEffect)(() => {
            let e = s.current.offsetWidth,
              i = 0;
            setInterval(() => {
              i === L.length - 2 ? (t.jump(0), (i = 1)) : (i += 1),
                a(i % 4),
                t.set((-e / L.length) * i);
            }, 3e3);
          }, []),
          (0, i.jsx)("div", {
            className: u().container,
            children: (0, i.jsx)("div", {
              className: u().device,
              children: (0, i.jsxs)("div", {
                className: u().absoluteWrapper,
                children: [
                  (0, i.jsx)(c.E.div, {
                    className: u().uiContainer,
                    children: R.map((a, t) =>
                      (0, i.jsx)(
                        c.E.div,
                        {
                          className: u().uiMask,
                          style: { zIndex: t === (e - 1 + 4) % 4 ? 1 : 0 },
                          animate: {
                            clipPath:
                              t === e ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                          },
                          transition: {
                            type: "spring",
                            damping: 12,
                            stiffness: 50,
                            delay: e === t ? 0 : 1,
                          },
                          children: (0, i.jsx)(a, {}),
                        },
                        "ui-".concat(t),
                      ),
                    ),
                  }),
                  (0, i.jsx)("div", { className: u().origin }),
                  (0, i.jsx)(c.E.div, {
                    ref: s,
                    className: u().track,
                    style: { x: t },
                    children: L.map((a, t) =>
                      (0, i.jsx)(
                        c.E.div,
                        {
                          className: u().card,
                          initial: !1,
                          animate: { scale: e === t % 4 ? [1.07, 1] : 1.07 },
                          transition: {
                            duration: 3,
                            times: [0, 0.075],
                            delay: 1,
                          },
                          children: (0, i.jsx)(a, {}),
                        },
                        "element-".concat(t),
                      ),
                    ),
                  }),
                ],
              }),
            }),
          })
        );
      }
      var T = t(60777),
        E = t(74098),
        P = t(32494),
        Z = t(61609),
        B = t(37519),
        O = t(50511),
        G = t.n(O),
        W = t(62811),
        Hero_Hero = function () {
          let { openSalesForm: e } = (0, o.useContext)(B.G);
          return (0, i.jsxs)(P.Z, {
            className: G().hero,
            children: [
              (0, i.jsx)(E.Z, {
                className: G().heroContent,
                children: (0, i.jsxs)("div", {
                  className: G().wrapper,
                  children: [
                    (0, i.jsx)(W.Z, {
                      parent: "Solution",
                      child: "PCI Compliance",
                    }),
                    (0, i.jsx)(Z.Z, {
                      as: "h1",
                      className: G().title,
                      children: "PCI DSS for Developers",
                    }),
                    (0, i.jsx)(Z.Z, {
                      as: "p",
                      className: G().subText,
                      children:
                        "Use evervault to encrypt cardholder data and become PCI DSS compliant in days, not months.",
                    }),
                    (0, i.jsx)("div", {
                      children: (0, i.jsx)(T.Z, {
                        size: "large",
                        onClick: () =>
                          e({
                            context: "PCI — Hero",
                            title: "Book a consultation",
                          }),
                        children: "Book a consultation",
                      }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(r.ErrorBoundary, {
                fallback: (0, i.jsx)("div", {}),
                children: (0, i.jsx)(Animation, {}),
              }),
            ],
          });
        },
        H = t(93762),
        M = t(55141),
        F = t(8971),
        U = t(57498),
        q = t(15306),
        K = t(83321),
        z = t(23579),
        V = t(16893),
        X = t(56190),
        Y = t(75964),
        Q = t(77387),
        J = t(34049),
        $ = t.n(J);
      function Collect() {
        let e = (0, o.useRef)(),
          a = (0, V.Y)(e),
          t = (0, H.useEvervault)(),
          [s, n] = (0, o.useState)(""),
          [r, l] = (0, o.useState)(""),
          [d, u] = (0, o.useState)(""),
          [m, h] = (0, o.useState)({ cardNumber: "", expiry: "", cvc: "" });
        async function handleEncryption() {
          let e = await getEncryptedData();
          h(e);
        }
        async function getEncryptedData() {
          return {
            cardNumber: s ? await t.encrypt("cardNumber", s) : "",
            expiry: r ? await t.encrypt("cardExpiry", r) : "",
            cvc: d ? await t.encrypt("cardCVC", d) : "",
          };
        }
        return (
          (0, o.useEffect)(() => {
            a && e.current.focus();
          }, [a]),
          (0, o.useEffect)(() => {
            t && handleEncryption();
          }, [s, r, d]),
          (0, i.jsxs)("div", {
            className: $().container,
            children: [
              (0, i.jsx)(c.E.div, {
                className: $().inputs,
                initial: { y: 15, opacity: 0, scale: 0.98 },
                animate: { y: 0, opacity: 1, scale: 1 },
                transition: { delay: 0.01, duration: 0.3 },
                children: (0, i.jsxs)("div", {
                  className: $().fields,
                  children: [
                    (0, i.jsx)("input", {
                      className: $().input,
                      placeholder: "4242 4242 4242 4242",
                      maxLength: 16,
                      value: s,
                      onChange: (e) => n(e.target.value),
                      ref: e,
                    }),
                    (0, i.jsxs)("div", {
                      className: $().inputGroup,
                      children: [
                        (0, i.jsx)("input", {
                          className: $().input,
                          placeholder: "02/29",
                          maxLength: 5,
                          value: r,
                          onChange: (e) => l(e.target.value),
                        }),
                        (0, i.jsx)("input", {
                          className: $().input,
                          placeholder: "123",
                          maxLength: 3,
                          value: d,
                          onChange: (e) => u(e.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, i.jsxs)("div", {
                className: $().terminal,
                children: [
                  (0, i.jsx)(Y.Z, { tabs: ["Console"] }),
                  (0, i.jsx)("div", {
                    className: $().terminalData,
                    children: (0, i.jsx)(X.Z, {
                      language: "javascript",
                      style: Q.Z,
                      wrapLines: !0,
                      customStyle: { background: "transparent" },
                      children: JSON.stringify(m, null, 2),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      var ee = t(29405),
        ea = t(58591),
        et = t.n(ea),
        ei = t(28101),
        es = t(58621);
      function DecryptToProcessor() {
        return (0, i.jsxs)("div", {
          className: et().container,
          children: [
            (0, i.jsxs)(ee.S.Nodes, {
              children: [
                (0, i.jsx)(ee.S.Group, {
                  children: (0, i.jsx)(ee.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(ee.S.Service, {
                      payload: {
                        key: "pan",
                        value: "ev:ek8x..",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, i.jsx)(ee.S.Group, {
                  children: (0, i.jsx)(ee.S.Node, {
                    id: "relay",
                    children: (0, i.jsx)(ee.S.Service, {
                      icon: (0, i.jsx)(ei.Z, {}),
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, i.jsx)(ee.S.Group, {
                  children: (0, i.jsx)(ee.S.Node, {
                    id: "processor",
                    children: (0, i.jsx)(ee.S.Service, {
                      payload: { key: "pan", value: "4242.." },
                      icon: (0, i.jsx)(es.Z, {}),
                      children: "Processor",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(ee.S.Connection, {
              nodes: ["server", "relay"],
              children: (0, i.jsx)(ee.S.Request, {
                className: et().encryptedRequest,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(ee.S.Connection, {
              nodes: ["relay", "processor"],
              children: (0, i.jsx)(ee.S.Request, {
                className: et().request,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
      var en = t(33436),
        er = t.n(en);
      function EncryptFromIssuer() {
        return (0, i.jsxs)("div", {
          className: er().container,
          children: [
            (0, i.jsxs)(ee.S.Nodes, {
              children: [
                (0, i.jsx)(ee.S.Group, {
                  children: (0, i.jsx)(ee.S.Node, {
                    id: "issuer",
                    children: (0, i.jsx)(ee.S.Service, {
                      payload: { key: "pan", value: "4242.." },
                      icon: (0, i.jsx)(es.Z, {}),
                      children: "Issuer",
                    }),
                  }),
                }),
                (0, i.jsx)(ee.S.Group, {
                  children: (0, i.jsx)(ee.S.Node, {
                    id: "relay",
                    children: (0, i.jsx)(ee.S.Service, {
                      icon: (0, i.jsx)(ei.Z, {}),
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, i.jsx)(ee.S.Group, {
                  children: (0, i.jsx)(ee.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(ee.S.Service, {
                      payload: {
                        key: "pan",
                        value: "ev:ek8x..",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(ee.S.Connection, {
              nodes: ["issuer", "relay"],
              children: (0, i.jsx)(ee.S.Request, {
                className: er().request,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(ee.S.Connection, {
              nodes: ["relay", "server"],
              children: (0, i.jsx)(ee.S.Request, {
                className: er().encryptedRequest,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
      var eo = t(11544),
        el = t(11607),
        ec = t(85425),
        ed = t.n(ec);
      function Reveal() {
        let [e, a] = (0, o.useState)(!1),
          t = (0, o.useRef)();
        (0, o.useEffect)(() => {
          a(!0),
            setTimeout(() => {
              reveal();
            }, 1e3);
        }, []);
        let reveal = () => {
          let e = t.current,
            a = "4242 4242 4242 4242".split(""),
            i = 0;
          !(function animate() {
            setTimeout(() => {
              if (!e) return;
              let t = e.children[i];
              (t.style.opacity = 1),
                (t.innerHTML = a[i]),
                ++i < a.length && animate();
            }, 25);
          })();
        };
        return (0, i.jsx)("div", {
          className: ed().container,
          children: (0, i.jsx)(c.E.div, {
            className: ed().card,
            initial: { y: 15, opacity: 0, scale: 0.95 },
            animate: { y: 0, opacity: 1, scale: 1 },
            transition: { delay: 0.01, duration: 0.3 },
            children: (0, i.jsxs)("div", {
              children: [
                (0, i.jsxs)("div", {
                  className: ed().cardDetails,
                  children: [
                    (0, i.jsx)("div", {
                      className: ed().cardholderName,
                      children: "Claude Shannon",
                    }),
                    (0, i.jsx)("img", {
                      src: "/_next/static/media/mastercard.4aaec2b1.png",
                      className: ed().mastercard,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: ed().cardNumberContainer,
                  children: [
                    (0, i.jsx)("div", {
                      className: ed().cardNumber,
                      ref: t,
                      children: "•••• •••• •••• ••••"
                        .split("")
                        .map((e, a) =>
                          (0, i.jsx)(
                            "span",
                            {
                              className: ed().character,
                              style: {
                                marginRight: [3, 8, 13].includes(a) ? "4px" : 0,
                                opacity: 0.5,
                              },
                              children: e,
                            },
                            a + e,
                          ),
                        ),
                    }),
                    (0, i.jsx)(eo.M, {
                      mode: "wait",
                      children: e
                        ? (0, i.jsx)(
                            c.E.div,
                            {
                              initial: { opacity: 0, scale: 0.5 },
                              animate: { opacity: 1, scale: 1 },
                              transition: { delay: 0.25, duration: 0.25 },
                              children: (0, i.jsx)(v.Z, {
                                width: 16,
                                strokeWidth: 1.5,
                              }),
                            },
                            "eye",
                          )
                        : (0, i.jsx)(
                            c.E.div,
                            {
                              initial: { opacity: 1, scale: 1 },
                              exit: { opacity: 0, scale: 0.5 },
                              transition: { delay: 0.25, duration: 0.25 },
                              children: (0, i.jsx)(el.Z, {
                                width: 16,
                                strokeWidth: 1.5,
                              }),
                            },
                            "eye-off",
                          ),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var eu = t(82829),
        em = t.n(eu),
        eh = t(50618);
      let e_ = "COLLECT",
        ep = "REVEAL",
        ev = "ISSUER",
        ex = "PROCESSOR";
      function AccordionItem(e) {
        let { value: a, title: t, icon: s, children: n } = e;
        return (0, i.jsxs)(M.ck, {
          className: em().accordionItem,
          value: a,
          children: [
            (0, i.jsxs)(M.xz, {
              className: em().accordionTrigger,
              children: [
                (0, i.jsx)("div", {
                  className: em().accordionIcon,
                  children: s,
                }),
                t,
                (0, i.jsx)("div", {
                  className: em().accordionIndicator,
                  children: (0, i.jsx)(F.Z, {}),
                }),
              ],
            }),
            (0, i.jsx)(M.VY, {
              className: em().accordionContent,
              children: (0, i.jsx)("div", {
                className: em().accordionText,
                children: n,
              }),
            }),
          ],
        });
      }
      function Diagrams() {
        let [e, a] = (0, o.useState)(e_),
          t = (0, eh.Z)("(min-width: 768px)");
        return (0, i.jsxs)("div", {
          className: em().demo,
          children: [
            (0, i.jsxs)(M.fC, {
              value: e,
              onValueChange: a,
              className: em().accordion,
              children: [
                (0, i.jsx)(AccordionItem, {
                  value: e_,
                  icon: (0, i.jsx)(U.Z, {}),
                  title: "Collect",
                  children: (0, i.jsx)("p", {
                    children:
                      "Collect and encrypt cardholder data using an evervault Inputs iFrame, so your mobile or web app never touches any cardholder data in plaintext.",
                  }),
                }),
                (0, i.jsx)(AccordionItem, {
                  value: ep,
                  icon: (0, i.jsx)(q.Z, {}),
                  title: "Reveal",
                  children: (0, i.jsx)("p", {
                    children:
                      "Display card details to your users in your mobile or web app without any compliance headaches.",
                  }),
                }),
                (0, i.jsx)(AccordionItem, {
                  value: ev,
                  icon: (0, i.jsx)(K.Z, {}),
                  title: "Encrypt from Issuer",
                  children: (0, i.jsx)("p", {
                    children:
                      "Fetch cardholder data from your card issuer using Relay and encrypt it before it touches your server.",
                  }),
                }),
                (0, i.jsx)(AccordionItem, {
                  value: ex,
                  icon: (0, i.jsx)(z.Z, {}),
                  title: "Decrypt to Processor",
                  children: (0, i.jsx)("p", {
                    children:
                      "Share encrypted cardholder data with third-party processor APIs, like Stripe, and Relay will decrypt it on the way out.",
                  }),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: em().diagram,
              children: (0, i.jsx)(r.ErrorBoundary, {
                fallback: (0, i.jsx)("div", {}),
                children: (0, i.jsxs)(ee.S, {
                  direction: t ? "horizontal" : "vertical",
                  children: [
                    e === e_ &&
                      (0, i.jsx)(H.EvervaultProvider, {
                        teamId: "team_40d916301f58",
                        appId: "app_f8359ae223fb",
                        children: (0, i.jsx)(Collect, {}),
                      }),
                    e === ep && (0, i.jsx)(Reveal, {}),
                    e === ev && (0, i.jsx)(EncryptFromIssuer, {}),
                    e === ex && (0, i.jsx)(DecryptToProcessor, {}),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function PCIDemo() {
        return (0, i.jsxs)(E.Z, {
          className: em().container,
          children: [
            (0, i.jsxs)("div", {
              className: em().heading,
              children: [
                (0, i.jsx)("h2", { children: "Solve PCI DSS using code" }),
                (0, i.jsx)("p", {
                  children:
                    "With evervault, you can easily collect, process and share cardholder data without worrying about the PCI DSS headache.",
                }),
              ],
            }),
            (0, i.jsx)(Diagrams, {}),
            (0, i.jsx)("div", { className: em().glow }),
          ],
        });
      }
      var ej = t(43777),
        ey = t(65420),
        eg = t(54463);
      let eN = [
        {
          features: [
            {
              icon: (0, i.jsx)(ej.Z, { width: 16 }),
              title: "Become compliant in record time",
              description:
                "Go from zero to audit-ready in less than a day using evervault to encrypt cardholder data.",
            },
            {
              icon: (0, i.jsx)(ey.Z, { width: 16 }),
              title: "Flexible building blocks for payments",
              description:
                "evervault works with all typical cardholder data flows, so you can compliantly collect PCI data for processing, issuing or storage.",
            },
            {
              icon: (0, i.jsx)(eg.Z, { width: 16 }),
              title: "Maximum PCI scope reduction",
              description:
                "In most cases, we’ll reduce your PCI scope to the SAQ A control set — the smallest set of PCI DSS controls.",
            },
          ],
        },
      ];
      var eC = t(92639),
        eb = t.n(eC);
      function PCIComplianceOverview() {
        return (0, i.jsx)("div", {
          className: eb().container,
          children: (0, i.jsxs)("div", {
            className: eb().maxWidthWrapper,
            children: [
              (0, i.jsx)("div", {
                className: eb().heading,
                children: (0, i.jsx)(Z.Z, {
                  as: "h2",
                  width: "70%",
                  interactive: !0,
                  children: "The security platform for cardholder data",
                }),
              }),
              (0, i.jsx)("div", {
                className: eb().benefits,
                children: eN.map((e, a) => {
                  let { title: t, features: s } = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      children: [
                        (0, i.jsx)("div", { className: eb().divider }),
                        (0, i.jsx)("div", {
                          className: eb().features,
                          children: s.map((e) => {
                            let { icon: a, title: t, description: s } = e;
                            return (0, i.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: eb().featureTitle,
                                    children: [
                                      a,
                                      (0, i.jsx)("h5", { children: t }),
                                    ],
                                  }),
                                  (0, i.jsx)("p", { children: s }),
                                ],
                              },
                              t,
                            );
                          }),
                        }),
                      ],
                    },
                    t || a,
                  );
                }),
              }),
              (0, i.jsxs)("div", {
                className: eb().process,
                children: [
                  (0, i.jsx)("div", {
                    className: eb().heading,
                    children: (0, i.jsx)(Z.Z, {
                      as: "h2",
                      width: "70%",
                      interactive: !0,
                      children: "End-to-end PCI DSS compliance in days",
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: eb().steps,
                    children: [
                      (0, i.jsxs)("div", {
                        className: eb().step,
                        children: [
                          (0, i.jsx)("h5", {
                            className: eb().stepTitle,
                            "data-index": 1,
                            children: "Initial consultation",
                          }),
                          (0, i.jsx)("p", {
                            className: eb().stepBody,
                            children:
                              "We’ll work with you to understand your architecture and provide recommendations on how to integrate evervault to reduce your compliance scope as much as possible.",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: eb().step,
                        children: [
                          (0, i.jsx)("h5", {
                            className: eb().stepTitle,
                            "data-index": 2,
                            children: "Technical integration",
                          }),
                          (0, i.jsx)("p", {
                            className: eb().stepBody,
                            children:
                              "You’ll integrate evervault based on one of our architecture templates and we’ll validate your integration to ensure it’s fully compliant.",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: eb().step,
                        children: [
                          (0, i.jsx)("h5", {
                            className: eb().stepTitle,
                            "data-index": 3,
                            children: "Auditor introduction",
                          }),
                          (0, i.jsx)("p", {
                            className: eb().stepBody,
                            children:
                              "We’ll give you an audit-ready PCI DSS policies and procedures bundle, as well as our PCI DSS Attestation of Compliance (AoC). We’ll also introduce you to an auditor that’s familiar with evervault’s architecture.",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var ef = t(64154);
      let eA = [
          {
            features: [
              {
                icon: (0, i.jsx)(ej.Z, { width: 16 }),
                title: "Reduce time-to-compliance by 90%",
                description:
                  "Build fully PCI-compliant software that lets you handle credit card data, in some cases in less than a day, so you can be ready for your audit or self-assessment in record time.",
              },
              {
                icon: (0, i.jsx)(ef.Z, { width: 16 }),
                title: "Save over $100k on compliance costs",
                description:
                  "Using evervault means most (or all) of your software is removed from PCI DSS scope, reducing your audit costs and eliminating the need to buy third-party firewalls and pentests.",
              },
              {
                icon: (0, i.jsx)(ey.Z, { width: 16 }),
                title: "Full payment processor flexibility",
                description:
                  "Using evervault to collect cardholder data means you have full flexibility to use multiple payment processors or issuers under the hood — increasing acceptance rates, reducing transaction fees and improving geographic coverage.",
              },
            ],
          },
        ],
        eI = [
          {
            quote:
              "If we tried to build everything that evervault gives us, it would take at least two full time security engineers.",
            encryptedQuote:
              "71 n5 Z+tUP KD 5CG2f U+nat0Mp5G tmBu YbHtG4XBw QaHX9 hOP /A TfQm3 y6B9 MB nrlha +fS hRqP vZ2H xafnZJKK tNbXrzIj6q",
            author: "Zachary Sweeney",
            title: "Product Lead, Ness",
            id: "ness",
          },
          {
            quote:
              "Using evervault allowed us to ship a fully PCI DSS compliant product in days instead of months.",
            encryptedQuote:
              "RFppu b4UBsnP+8 kuZ2Bwm DO qF CKHk v 5Ziig B1L PnZ thbT64mnK gEZeBO6 dt wZUL onMItOy do JBS9C9Q",
            author: "Tunde Adewole",
            title: "CEO, Bridgecard",
            id: "bridgecard",
          },
        ];
      var ew = t(62654),
        ek = t(91693);
      function Payments() {
        return (0, i.jsxs)(n.Z, {
          title: "PCI Compliance — evervault",
          description: "Become PCI DSS compliant in days, not months.",
          socialImage: "https://evervault.com/social/pci.jpg",
          children: [
            (0, i.jsx)(Hero_Hero, {}),
            (0, i.jsx)(PCIComplianceOverview, {}),
            (0, i.jsx)(PCIDemo, {}),
            (0, i.jsx)(s.Z, {
              heading: "Painless PCI DSS compliance",
              subheading:
                "evervault will guide you through becoming PCI compliant in record time, at a fraction of the cost.",
              config: eA,
            }),
            (0, i.jsx)(ew.Z, {
              testimonailsConfig: eI,
              rotationMap: [90, 0],
              logos: "/_next/static/media/logos-wheel.a19b4bd6.svg",
            }),
            (0, i.jsx)(ek.Z, {
              heading: "Become PCI DSS compliant",
              subheading:
                "Book an initial consultation and we’ll work with you to become compliant in days.",
              primaryCta: "Book a consultation",
              hideSecondaryCta: !0,
            }),
          ],
        });
      }
    },
    77387: function (e, a) {
      "use strict";
      (a.Z = void 0),
        (a.Z = {
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
    70184: function (e) {
      e.exports = {
        container: "HeroBreadcrumb_container__uJCQO",
        divider: "HeroBreadcrumb_divider__OxtTZ",
      };
    },
    714: function (e) {
      e.exports = {
        container: "Animation_container__UMO_q",
        device: "Animation_device__JRSzc",
        absoluteWrapper: "Animation_absoluteWrapper__K_T_q",
        uiContainer: "Animation_uiContainer__6BEhs",
        uiMask: "Animation_uiMask__44OL4",
        origin: "Animation_origin__lJo90",
        track: "Animation_track__GYuBQ",
        card: "Animation_card__XdOOC",
      };
    },
    9287: function (e) {
      e.exports = {
        topContainer: "DarkInputs_topContainer__nC1lj",
        title: "DarkInputs_title__Ga9eo",
        savedCards: "DarkInputs_savedCards__Zga0S",
        savedCard: "DarkInputs_savedCard__Ogk9v",
        cardGroup: "DarkInputs_cardGroup__Vm61c",
        cardType: "DarkInputs_cardType__kVULD",
        cardLogo: "DarkInputs_cardLogo__ZNaj1",
        elementContainer: "DarkInputs_elementContainer__9NW3C",
        inputsContainer: "DarkInputs_inputsContainer__Xm_Zj",
        input: "DarkInputs_input__wguhj",
        inputGroup: "DarkInputs_inputGroup__S7nvp",
        bottomContainer: "DarkInputs_bottomContainer__KGsjb",
        makeDefaultContainer: "DarkInputs_makeDefaultContainer__9bdQd",
        checkbox: "DarkInputs_checkbox__Ed_aV",
        button: "DarkInputs_button__C3s1E",
      };
    },
    71476: function (e) {
      e.exports = {
        topContainer: "DarkReveal_topContainer__y3WQA",
        name: "DarkReveal_name__FtGag",
        cardType: "DarkReveal_cardType__iR_hb",
        tabs: "DarkReveal_tabs__JitXM",
        tab: "DarkReveal_tab__Kh8_N",
        spendLabels: "DarkReveal_spendLabels__O9kuZ",
        spendLimit: "DarkReveal_spendLimit__YY9wu",
        spendProgress: "DarkReveal_spendProgress__hrGU1",
        spendProgressFill: "DarkReveal_spendProgressFill__An811",
        elementContainer: "DarkReveal_elementContainer__h2AQs",
        cardNumberContainer: "DarkReveal_cardNumberContainer__dwgjI",
        cardNumber: "DarkReveal_cardNumber__eHx2O",
        cardDetails: "DarkReveal_cardDetails__pdnYC",
        mastercard: "DarkReveal_mastercard__7KfV_",
        cardholderName: "DarkReveal_cardholderName__hoefg",
        bottomContainer: "DarkReveal_bottomContainer__36E44",
        transaction: "DarkReveal_transaction__STTp_",
        transactionGroup: "DarkReveal_transactionGroup__FQ6KN",
        icon: "DarkReveal_icon__Gj7ZE",
        transactionName: "DarkReveal_transactionName__tJaRT",
        transactionDate: "DarkReveal_transactionDate__vd3sd",
        transactionAmount: "DarkReveal_transactionAmount__MeStT",
      };
    },
    56884: function (e) {
      e.exports = {
        container: "Layout_container__wLLMN",
        top: "Layout_top__HIn2X",
        bottom: "Layout_bottom__MI_hK",
        placeholder: "Layout_placeholder__6195V",
      };
    },
    73794: function (e) {
      e.exports = {
        elementContainer: "LightInputs_elementContainer__GkHXl",
        topContainer: "LightInputs_topContainer__7sqJB",
        bottomContainer: "LightInputs_bottomContainer__5pvfb",
        inputGroup: "LightInputs_inputGroup__VImV0",
        inputContainer: "LightInputs_inputContainer__42HZ_",
        label: "LightInputs_label__fHGXa",
        input: "LightInputs_input__ZA50B",
        button: "LightInputs_button__dGw_A",
        lineItem: "LightInputs_lineItem__snxcp",
        divider: "LightInputs_divider__g9rpK",
        item: "LightInputs_item__T05Gq",
        value: "LightInputs_value__HKoAH",
      };
    },
    5882: function (e) {
      e.exports = {
        topContainer: "LightReveal_topContainer___GVVd",
        user: "LightReveal_user__lvKps",
        avatar: "LightReveal_avatar__WEZup",
        avatarImage: "LightReveal_avatarImage__uvwKG",
        firstName: "LightReveal_firstName__VyS4p",
        surname: "LightReveal_surname__gjQ_b",
        notifications: "LightReveal_notifications__tz8Y3",
        tabs: "LightReveal_tabs__aNybj",
        tab: "LightReveal_tab__CajIj",
        elementContainer: "LightReveal_elementContainer__3Zutw",
        cardNumberContainer: "LightReveal_cardNumberContainer__d4Fnn",
        cardNumber: "LightReveal_cardNumber__PlJNs",
        cardDetails: "LightReveal_cardDetails__cJWUU",
        visa: "LightReveal_visa__T9qxn",
        cardholderName: "LightReveal_cardholderName__7w_Cv",
        pattern: "LightReveal_pattern__iMs5Z",
        bottomContainer: "LightReveal_bottomContainer__ALAPe",
        actions: "LightReveal_actions__dPwOK",
        action: "LightReveal_action__1OA6g",
        actionButton: "LightReveal_actionButton__BC3Ic",
        actionLabel: "LightReveal_actionLabel__Y_cis",
        chart: "LightReveal_chart__SgRjN",
        line: "LightReveal_line__Xcv4e",
      };
    },
    50511: function (e) {
      e.exports = {
        hero: "Hero_hero__GcvsP",
        heroContent: "Hero_heroContent__GNfOs",
        wrapper: "Hero_wrapper__oJZQ4",
        title: "Hero_title__CKbTP",
        subText: "Hero_subText__uG3pB",
      };
    },
    34049: function (e) {
      e.exports = {
        container: "Collect_container__Wexcm",
        inputs: "Collect_inputs__fKJ3d",
        fields: "Collect_fields__xQudf",
        input: "Collect_input__4DuM0",
        inputGroup: "Collect_inputGroup__ffYYL",
        terminal: "Collect_terminal__EQe_Q",
        terminalData: "Collect_terminalData__RHoY_",
      };
    },
    58591: function (e) {
      e.exports = {
        container: "DecryptToProcessor_container__NUwvL",
        request: "DecryptToProcessor_request__g5p3x",
        encryptedRequest: "DecryptToProcessor_encryptedRequest__GJnB1",
      };
    },
    33436: function (e) {
      e.exports = {
        container: "EncryptFromIssuer_container__9DGec",
        request: "EncryptFromIssuer_request__Y2UJF",
        encryptedRequest: "EncryptFromIssuer_encryptedRequest__Dxf86",
      };
    },
    82829: function (e) {
      e.exports = {
        container: "PCIDemo_container__6BTZY",
        demo: "PCIDemo_demo__UlSWc",
        diagram: "PCIDemo_diagram__C_KKj",
        request: "PCIDemo_request__iyyCi",
        encryptedRequest: "PCIDemo_encryptedRequest__tUYWK",
        heading: "PCIDemo_heading__Wb_SH",
        accordion: "PCIDemo_accordion__R_5_d",
        accordionItem: "PCIDemo_accordionItem__XhykF",
        accordionIndicator: "PCIDemo_accordionIndicator__6MKYR",
        accordionTrigger: "PCIDemo_accordionTrigger__1KZ3S",
        accordionContent: "PCIDemo_accordionContent__wl9Em",
        slideOpen: "PCIDemo_slideOpen__R6nWE",
        slideClosed: "PCIDemo_slideClosed__eh1YF",
        accordionText: "PCIDemo_accordionText__6wHvU",
        accordionIcon: "PCIDemo_accordionIcon__HehT0",
      };
    },
    85425: function (e) {
      e.exports = {
        container: "Reveal_container___nTeS",
        card: "Reveal_card__8Xbb8",
        cardNumberContainer: "Reveal_cardNumberContainer__GAmbe",
        cardNumber: "Reveal_cardNumber__3jH6X",
        cardDetails: "Reveal_cardDetails__RtqzJ",
        mastercard: "Reveal_mastercard__Kvz6o",
        cardholderName: "Reveal_cardholderName___Wc5d",
      };
    },
    92639: function (e) {
      e.exports = {
        container: "PCIComplianceOverview_container__FAuwd",
        maxWidthWrapper: "PCIComplianceOverview_maxWidthWrapper__9Og_V",
        heading: "PCIComplianceOverview_heading__AbjXx",
        subHeading: "PCIComplianceOverview_subHeading__JMz6c",
        title: "PCIComplianceOverview_title__DO8uV",
        slide: "PCIComplianceOverview_slide__NgNYh",
        divider: "PCIComplianceOverview_divider__ETcjL",
        features: "PCIComplianceOverview_features__UGlHF",
        featureTitle: "PCIComplianceOverview_featureTitle__5iHbl",
        titleContainer: "PCIComplianceOverview_titleContainer__X6Tjs",
        benefits: "PCIComplianceOverview_benefits__LpeQx",
        process: "PCIComplianceOverview_process__XBdDa",
        steps: "PCIComplianceOverview_steps__Tax1A",
        step: "PCIComplianceOverview_step___VIdu",
        stepTitle: "PCIComplianceOverview_stepTitle__vdqaw",
        stepBody: "PCIComplianceOverview_stepBody__kOj2D",
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
    e.O(0, [1140, 9142, 7020, 1044, 9774, 2888, 179], function () {
      return e((e.s = 31072));
    }),
      (_N_E = e.O());
  },
]);
