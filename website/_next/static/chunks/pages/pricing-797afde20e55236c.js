(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9939],
  {
    74223: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/pricing",
        function () {
          return a(98037);
        },
      ]);
    },
    90218: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return Hero;
        },
      });
      var l = a(85893),
        i = a(93296),
        c = a.n(i);
      function Hero(e) {
        let { title: s, subtitle: a, description: i } = e;
        return (0, l.jsx)("section", {
          className: c().hero,
          children: (0, l.jsx)("div", {
            className: "container",
            children: (0, l.jsx)(
              "div",
              {
                className: "row justify-content-center",
                children: (0, l.jsxs)("div", {
                  className: "col-12",
                  children: [
                    (0, l.jsx)("h1", { className: c().title, children: s }),
                    a &&
                      (0, l.jsx)("h3", {
                        className: c().subtitle,
                        children: a,
                      }),
                    i && i,
                  ],
                }),
              },
              s.split(" ").join("-").toLowerCase(),
            ),
          }),
        });
      }
    },
    39892: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return Layout;
        },
      });
      var l = a(85893),
        i = a(9008),
        c = a.n(i),
        n = a(4298),
        r = a.n(n),
        t = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        d = a(12034),
        o = a.n(d),
        m = a(41664),
        h = a.n(m);
      function Layout(e) {
        let {
          children: s,
          preview: a,
          title:
            i = "evervault — Developer building blocks for data security and compliance",
          description:
            n = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: d = "https://evervault.com/social/og.jpg",
          head: m,
          ...x
        } = e;
        return (0, l.jsxs)("div", {
          className: o().layout,
          ...x,
          children: [
            (0, l.jsxs)(c(), {
              children: [
                (0, l.jsx)("title", { children: i }),
                (0, l.jsx)("meta", { name: "description", content: n }),
                (0, l.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, user-scalable=no",
                }),
                (0, l.jsx)("meta", { name: "theme-color", content: "#63e" }),
                (0, l.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  href: "/favicon.png",
                }),
                (0, l.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: "/logo192.png",
                }),
                (0, l.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
                (0, l.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, l.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "true",
                }),
                (0, l.jsx)("meta", { property: "og:title", content: i }),
                (0, l.jsx)("meta", { property: "og:description", content: n }),
                (0, l.jsx)("meta", { property: "og:image", content: d }),
                (0, l.jsx)("meta", {
                  property: "og:site_name",
                  content: "evervault",
                }),
                (0, l.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, l.jsx)("meta", {
                  name: "twitter:site",
                  content: "@evervault",
                }),
                (0, l.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@evervault",
                }),
                (0, l.jsx)("meta", { name: "twitter:title", content: i }),
                (0, l.jsx)("meta", { name: "twitter:description", content: n }),
                (0, l.jsx)("meta", { name: "twitter:image", content: d }),
                (0, l.jsx)("meta", { name: "twitter:image:alt", content: i }),
                (0, l.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(t) },
                }),
                (0, l.jsx)(r(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                m,
              ],
            }),
            a &&
              (0, l.jsxs)("div", {
                className: o().preview,
                children: [
                  (0, l.jsx)("p", { children: "You are in preview mode" }),
                  (0, l.jsx)(h(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, l.jsx)("main", { className: o().main, children: s }),
          ],
        });
      }
    },
    98037: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return Pricing;
          },
        });
      var l = a(85893),
        i = a(90218),
        c = a(39892),
        n = a(67294),
        r = a(60777),
        t = a(25321),
        d = a(37519),
        o = a(13585),
        m = a.n(o),
        h = a(41664),
        x = a.n(h);
      function Cards() {
        let { openSalesForm: e } = (0, n.useContext)(d.G);
        return (0, l.jsxs)("div", {
          className: m().container,
          children: [
            (0, l.jsxs)("div", {
              className: m().card,
              children: [
                (0, l.jsx)("h3", { className: "mb-24", children: "Free" }),
                (0, l.jsxs)("h4", {
                  className: "mb-8",
                  children: [
                    "$0 ",
                    (0, l.jsx)("span", {
                      className: m().small,
                      children: "per month",
                    }),
                  ],
                }),
                (0, l.jsx)("p", {
                  children:
                    "Explore the product and power small, personal projects.",
                }),
                (0, l.jsxs)("ul", {
                  className: m().features,
                  children: [
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Unlimited Encrypts",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "5,000 Decrypts",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "500 File Decrypts",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [(0, l.jsx)(t.ZP.Badge, {}), "1 Environment"],
                      }),
                    }),
                  ],
                }),
                (0, l.jsx)(r.Z, {
                  size: "large",
                  href: "https://app.evervault.com/register",
                  target: "_blank",
                  children: "Try for free",
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: m().card,
              children: [
                (0, l.jsxs)("h3", {
                  className: "mb-24",
                  children: [
                    "Pro ",
                    (0, l.jsx)("span", {
                      className: m().popularTag,
                      children: "Popular",
                    }),
                  ],
                }),
                (0, l.jsxs)("h4", {
                  className: "mb-8",
                  children: [
                    "$395 ",
                    (0, l.jsx)("span", {
                      className: m().small,
                      children: "per month",
                    }),
                  ],
                }),
                (0, l.jsx)("p", {
                  children: "Run production apps with full functionality.",
                }),
                (0, l.jsxs)("ul", {
                  className: m().features,
                  children: [
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Unlimited Encrypts",
                        ],
                      }),
                    }),
                    (0, l.jsxs)("li", {
                      children: [
                        (0, l.jsxs)("p", {
                          children: [
                            (0, l.jsx)(t.ZP.Badge, {}),
                            "15,000 Decrypts",
                          ],
                        }),
                        (0, l.jsx)("p", {
                          children: "Then $0.005 per Decrypt",
                        }),
                      ],
                    }),
                    (0, l.jsxs)("li", {
                      children: [
                        (0, l.jsxs)("p", {
                          children: [
                            (0, l.jsx)(t.ZP.Badge, {}),
                            "1,500 File Decrypts",
                          ],
                        }),
                        (0, l.jsx)("p", {
                          children: "Then $0.02 per File Decrypts",
                        }),
                      ],
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Unlimited Environments",
                        ],
                      }),
                    }),
                    (0, l.jsxs)("li", {
                      children: [
                        (0, l.jsxs)("p", {
                          children: [
                            (0, l.jsx)(t.ZP.Badge, {}),
                            (0, l.jsx)("span", {
                              className: m().cages,
                              children: "Cages",
                            }),
                          ],
                        }),
                        (0, l.jsx)("p", {
                          children: (0, l.jsxs)("span", {
                            children: [
                              "Available as an add-on.",
                              " ",
                              (0, l.jsx)(x(), {
                                href: "/cages",
                                className: m().betaButton,
                                children: "Join the waitlist",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(r.Z, {
                  size: "large",
                  onClick: () => e({ context: "Pricing — Pro" }),
                  children: "API docs",
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: m().card,
              children: [
                (0, l.jsx)("h3", {
                  className: "mb-24",
                  children: "Enterprise",
                }),
                (0, l.jsx)("h4", {
                  className: "mb-8",
                  children: (0, l.jsx)("span", {
                    className: m().small,
                    children: "Custom pricing",
                  }),
                }),
                (0, l.jsx)("p", {
                  children:
                    "Run compliant production apps with full functionality, onboarding and support.",
                }),
                (0, l.jsxs)("ul", {
                  className: m().features,
                  children: [
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Unlimited Encrypts",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Custom Decrypts",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Custom File Decrypts",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Unlimited Environments",
                        ],
                      }),
                    }),
                    (0, l.jsx)("li", {
                      children: (0, l.jsxs)("p", {
                        children: [
                          (0, l.jsx)(t.ZP.Badge, {}),
                          "Fast-tracked PCI & HIPAA",
                        ],
                      }),
                    }),
                    (0, l.jsxs)("li", {
                      children: [
                        (0, l.jsxs)("p", {
                          children: [
                            (0, l.jsx)(t.ZP.Badge, {}),
                            (0, l.jsx)("span", {
                              className: m().cages,
                              children: "Cages",
                            }),
                          ],
                        }),
                        (0, l.jsx)(x(), {
                          href: "/cages",
                          legacyBehavior: !0,
                          children: (0, l.jsx)("p", {
                            className: m().betaButton,
                            children: "Join the waitlist",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("p", {
                  children: [
                    "Startup program available,",
                    " ",
                    (0, l.jsx)("span", {
                      className: m().betaButton,
                      onClick: () => e({ context: "Pricing — Startups" }),
                      children: "see if you’re eligible",
                    }),
                  ],
                }),
                (0, l.jsx)(r.Z, {
                  size: "large",
                  onClick: () => e({ context: "Pricing — Enterprise" }),
                  children: "API docs",
                }),
              ],
            }),
          ],
        });
      }
      var p = a(50724),
        j = a.n(p),
        u = a(11544),
        v = a(92520);
      function Grid() {
        let { openSalesForm: e } = (0, n.useContext)(d.G),
          [s, a] = (0, n.useState)(!1),
          [i, c] = (0, n.useState)("free");
        return (
          (0, n.useEffect)(() => {
            a(!1);
          }, [i]),
          (0, l.jsxs)("div", {
            children: [
              (0, l.jsx)("div", {
                className: j().mobileSwitcher,
                children: (0, l.jsxs)("div", {
                  className: j().activeContainer,
                  onClick: () => a(!0),
                  children: [
                    i[0].toUpperCase() + i.slice(1),
                    (0, l.jsx)(t.ZP.CaretDown, {}),
                  ],
                }),
              }),
              (0, l.jsxs)("div", {
                className: j().container,
                children: [
                  (0, l.jsxs)("div", {
                    className: j().column,
                    "data-active": i,
                    children: [
                      (0, l.jsxs)("div", {
                        className: j().header,
                        children: [
                          (0, l.jsx)("h4", {
                            className: "mb-4",
                            children: "Compare plans",
                          }),
                          (0, l.jsx)("p", {
                            className: "mb-0",
                            children: "Find one that’s right for you",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Encrypts included",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Decrypts included",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "File Decrypts included",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Environments included",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Multiple Users per Team",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Multiple Teams",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Compliance Onboarding",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Solutions Engineer Support",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Dedicated Account Manager",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "SLA for 99.99% Uptime",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Email Support",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Advanced Support Scope",
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: j().column,
                    "data-active": i,
                    children: [
                      (0, l.jsxs)("div", {
                        className: j().header,
                        children: [
                          (0, l.jsx)("h4", {
                            className: "mb-8",
                            children: "Free",
                          }),
                          (0, l.jsx)(r.Z, {
                            href: "https://app.evervault.com/register",
                            target: "_blank",
                            children: "Try for free",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Unlimited",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "5,000 p/m",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "500 p/m",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "1",
                        }),
                      }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", { className: j().cell }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: j().column,
                    "data-active": i,
                    children: [
                      (0, l.jsxs)("div", {
                        className: j().header,
                        children: [
                          (0, l.jsx)("h4", {
                            className: "mb-8",
                            children: "Pro",
                          }),
                          (0, l.jsx)(r.Z, {
                            onClick: () => e({ context: "Pricing — Pro" }),
                            children: "API docs",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Unlimited",
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: j().cell,
                        children: [
                          (0, l.jsx)("p", {
                            className: "mb-0",
                            children: "15,000 p/m",
                          }),
                          (0, l.jsx)("p", {
                            className: "mb-0",
                            children: "Then $0.005 per Decrypt",
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: j().cell,
                        children: [
                          (0, l.jsx)("p", {
                            className: "mb-0",
                            children: "1,500 p/m",
                          }),
                          (0, l.jsx)("p", {
                            className: "mb-0",
                            children: "Then $0.02 per File Decrypt",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Unlimited",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", { className: j().cell }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", { className: j().cell }),
                      " ",
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: j().column,
                    "data-active": i,
                    children: [
                      (0, l.jsxs)("div", {
                        className: j().header,
                        children: [
                          (0, l.jsx)("h4", {
                            className: "mb-8",
                            children: "Enterprise",
                          }),
                          (0, l.jsx)(r.Z, {
                            onClick: () =>
                              e({ context: "Pricing — Enterprise" }),
                            children: "API docs",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Unlimited",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Custom",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Custom",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)("p", {
                          className: "mb-0",
                          children: "Unlimited",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                      (0, l.jsx)("div", {
                        className: j().cell,
                        children: (0, l.jsx)(t.ZP.Badge, {}),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)(u.M, {
                children:
                  s &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsx)(v.E.div, {
                        className: j().overlay,
                        onClick: () => a(!1),
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.35, ease: "easeOut" },
                      }),
                      (0, l.jsxs)(v.E.div, {
                        className: j().plansPanel,
                        initial: { y: "100%" },
                        animate: { y: 0 },
                        exit: { y: "100%" },
                        transition: { duration: 0.35, ease: "easeOut" },
                        children: [
                          (0, l.jsxs)("div", {
                            className: j().option,
                            "data-active": "free" === i,
                            onClick: () => c("free"),
                            children: [
                              (0, l.jsx)("h4", { children: "Free" }),
                              "free" === i && (0, l.jsx)(t.ZP.Badge, {}),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: j().option,
                            "data-active": "pro" === i,
                            onClick: () => c("pro"),
                            children: [
                              (0, l.jsx)("h4", { children: "Pro" }),
                              "pro" === i && (0, l.jsx)(t.ZP.Badge, {}),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: j().option,
                            "data-active": "enterprise" === i,
                            onClick: () => c("enterprise"),
                            children: [
                              (0, l.jsx)("h4", { children: "Enterprise" }),
                              "enterprise" === i && (0, l.jsx)(t.ZP.Badge, {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              }),
            ],
          })
        );
      }
      var N = a(77209),
        _ = a.n(N);
      function Compliance() {
        let { openSalesForm: e } = (0, n.useContext)(d.G);
        return (0, l.jsxs)("div", {
          className: _().container,
          children: [
            (0, l.jsxs)("div", {
              className: _().card,
              children: [
                (0, l.jsx)("h3", {
                  className: "mb-12",
                  children: "PCI DSS Compliance",
                }),
                (0, l.jsxs)("p", {
                  className: "mb-12",
                  children: [
                    "Included with ",
                    (0, l.jsx)("span", {
                      className: _().tag,
                      children: "Enterprise",
                    }),
                    " plans",
                  ],
                }),
                (0, l.jsx)("p", {
                  children:
                    "Any organisation that accepts or processes cardholder data must be compliant under PCI DSS. evervault does the heavy lifting for PCI compliance allowing you to stay focused on building your product.",
                }),
                (0, l.jsx)(r.Z, {
                  size: "large",
                  onClick: () => e({ context: "Pricing — PCI" }),
                  children: "API docs",
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: _().card,
              children: [
                (0, l.jsx)("h3", {
                  className: "mb-12",
                  children: "HIPAA Compliance",
                }),
                (0, l.jsxs)("p", {
                  className: "mb-12",
                  children: [
                    "Included with ",
                    (0, l.jsx)("span", {
                      className: _().tag,
                      children: "Enterprise",
                    }),
                    " plans",
                  ],
                }),
                (0, l.jsx)("p", {
                  children:
                    "Use evervault to secure, process, and transmit customers' ePHI, adhering to HIPAA compliance.",
                }),
                (0, l.jsx)(r.Z, {
                  size: "large",
                  onClick: () => e({ context: "Pricing —\xa0HIPAA" }),
                  children: "API docs",
                }),
              ],
            }),
          ],
        });
      }
      function Pricing() {
        return (0, l.jsxs)(c.Z, {
          title: "Pricing — evervault",
          description:
            "Safely collect, process, and share your data with the plan that’s right for you.",
          children: [
            (0, l.jsx)(i.Z, {
              title: "Pricing",
              subtitle:
                "Safely collect, process, and share your data with the plan that’s right for you.",
            }),
            (0, l.jsx)(Cards, {}),
            (0, l.jsx)(Grid, {}),
            (0, l.jsx)(Compliance, {}),
          ],
        });
      }
    },
    93296: function (e) {
      e.exports = {
        hero: "Hero_hero__Q5FaL",
        title: "Hero_title__JisBU",
        subtitle: "Hero_subtitle__sB1Gj",
      };
    },
    12034: function (e) {
      e.exports = {
        layout: "Layout_layout__6J70X",
        main: "Layout_main__k2ohw",
        section: "Layout_section__n31V6",
        card: "Layout_card__4Gxa5 p-24 p-sm-32 py-lg-56 px-lg-64",
        cardSm:
          "Layout_cardSm__wzRPG Layout_card__4Gxa5 p-24 p-sm-32 py-lg-56 px-lg-64",
        containedSection:
          "Layout_containedSection__F3yCP mx-n24 mx-sm-n48 mx-md-n56 mx-lg-n64 mb-32 p-24 p-sm-48 p-sm-56 p-lg-64",
        postList: "Layout_postList__ngm8u",
        teamList: "Layout_teamList__Zp6Sg",
        glow: "Layout_glow__5fr_J",
        preview: "Layout_preview__dBvbE",
      };
    },
    13585: function (e) {
      e.exports = {
        container: "Cards_container__VP5px container",
        card: "Cards_card__0VQtS",
        small: "Cards_small__ru0CK",
        popularTag: "Cards_popularTag__WkyC9",
        features: "Cards_features__soAsL",
        subtext: "Cards_subtext__fhDLC",
        tag: "Cards_tag__1R2Aj",
        cages: "Cards_cages__dnV0M",
        startupsContainer: "Cards_startupsContainer__C4A8_",
        startups: "Cards_startups__ZLldB",
        betaButton: "Cards_betaButton__6kjms",
      };
    },
    77209: function (e) {
      e.exports = {
        container: "Compliance_container__CSWWj container",
        card: "Compliance_card__W4IOC",
        tag: "Compliance_tag__eLVbM",
      };
    },
    50724: function (e) {
      e.exports = {
        container: "Grid_container__t0Aa9 container",
        mobileSwitcher: "Grid_mobileSwitcher__aydYf container",
        activeContainer: "Grid_activeContainer__C0EGl",
        plansPanel: "Grid_plansPanel__VahRo Text_light__lmRM0",
        overlay: "Grid_overlay__Jl_Ev",
        option: "Grid_option__UOUTE",
        header: "Grid_header__gAbXA",
        cell: "Grid_cell__g_MPO",
        column: "Grid_column__gcK2S",
      };
    },
    9008: function (e, s, a) {
      e.exports = a(79201);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 74223));
    }),
      (_N_E = e.O());
  },
]);
