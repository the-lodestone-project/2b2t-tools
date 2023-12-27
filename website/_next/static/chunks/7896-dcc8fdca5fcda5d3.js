(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7896],
  {
    70406: function (e, n, r) {
      "use strict";
      r.d(n, {
        h: function () {
          return Diagrams;
        },
      });
      var i = r(85893),
        s = r(55141),
        a = r(67294),
        c = r(26049),
        o = r.n(c),
        d = (0, a.forwardRef)(function (e, n) {
          let { href: r, children: s } = e;
          return (0, i.jsxs)("a", {
            ref: n,
            className: o().learnMore,
            href: r,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              s,
              (0, i.jsxs)("svg", {
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
                  (0, i.jsx)("path", {
                    className: o().chevronOne,
                    d: "M6 17L11 12 6 7",
                  }),
                  (0, i.jsx)("path", {
                    className: o().chevronTwo,
                    d: "M13 17L18 12 13 7",
                  }),
                ],
              }),
            ],
          });
        }),
        l = r(8971),
        t = r(94184),
        h = r.n(t);
      function Diagrams(e) {
        var n, r;
        let { diagrams: c, className: l } = e,
          [t, u] = (0, a.useState)(
            null === (n = c[0]) || void 0 === n ? void 0 : n.value,
          ),
          x =
            null === (r = c.find((e) => e.value === t)) || void 0 === r
              ? void 0
              : r.diagram;
        return (0, i.jsxs)("div", {
          className: h()(o().demo, l),
          children: [
            (0, i.jsx)(s.fC, {
              value: t,
              onValueChange: u,
              className: o().accordion,
              children: c.map((e) =>
                (0, i.jsxs)(
                  AccordionItem,
                  {
                    value: e.value,
                    icon: e.icon,
                    title: e.title,
                    children: [
                      (0, i.jsx)("p", { children: e.description }),
                      e.href &&
                        (0, i.jsx)(d, { href: e.href, children: "Learn more" }),
                    ],
                  },
                  e.value,
                ),
              ),
            }),
            (0, i.jsx)("div", { className: o().diagram, children: x }),
          ],
        });
      }
      function AccordionItem(e) {
        let { value: n, title: r, icon: a, children: c } = e;
        return (0, i.jsxs)(s.ck, {
          className: o().accordionItem,
          value: n,
          children: [
            (0, i.jsxs)(s.xz, {
              className: o().accordionTrigger,
              children: [
                (0, i.jsx)("div", {
                  className: o().accordionIcon,
                  children: a,
                }),
                r,
                (0, i.jsx)("div", {
                  className: o().accordionIndicator,
                  children: (0, i.jsx)(l.Z, {}),
                }),
              ],
            }),
            (0, i.jsx)(s.VY, {
              className: o().accordionContent,
              children: (0, i.jsx)("div", {
                className: o().accordionText,
                children: c,
              }),
            }),
          ],
        });
      }
    },
    18792: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return EncryptFileDiagram;
        },
      });
      var i = r(85893),
        s = r(50618),
        a = r(29405),
        c = r(28101),
        o = r(13542);
      function EncryptFileDiagram() {
        let e = (0, s.Z)("(min-width: 768px)");
        return (0, i.jsxs)(a.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(a.S.Nodes, {
              children: [
                (0, i.jsx)(a.S.Group, {
                  children: (0, i.jsx)(a.S.Node, {
                    id: "client",
                    children: (0, i.jsx)(a.S.Service, {
                      icon: (0, i.jsx)(o.Z, {}),
                      payload: { key: "file", value: "xray.pdf" },
                      children: "User",
                    }),
                  }),
                }),
                (0, i.jsx)(a.S.Group, {
                  children: (0, i.jsx)(a.S.Node, {
                    id: "relay",
                    children: (0, i.jsx)(a.S.Service, {
                      icon: (0, i.jsx)(c.Z, {}),
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, i.jsx)(a.S.Group, {
                  children: (0, i.jsx)(a.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(a.S.Service, {
                      payload: { key: "file", value: "ev:Tk9D", highlight: !0 },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(a.S.Connection, {
              nodes: ["client", "relay"],
              children: (0, i.jsx)(a.S.Request, {
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(a.S.Connection, {
              nodes: ["relay", "server"],
              children: (0, i.jsx)(a.S.Request, {
                encrypted: !0,
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
    24561: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return ProcessDiagram;
        },
      });
      var i = r(85893),
        s = r(92520),
        a = r(50618),
        c = r(29405),
        o = r(25358),
        d = r(28101),
        l = r(11187),
        t = r.n(l);
      function ProcessDiagram() {
        let e = (0, a.Z)("(min-width: 768px)");
        return (0, i.jsxs)(c.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(c.S.Nodes, {
              children: [
                (0, i.jsx)(c.S.Group, {
                  children: (0, i.jsx)(c.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(c.S.Service, {
                      payload: {
                        key: "phone",
                        value: "ev:Tk9D",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, i.jsx)(c.S.Group, {
                  children: (0, i.jsxs)("div", {
                    className: t().functions,
                    children: [
                      (0, i.jsx)(s.E.div, {
                        className: t().functionCall,
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
                        children: (0, i.jsx)(o.Z, {}),
                      }),
                      (0, i.jsx)(c.S.Node, {
                        id: "functions",
                        children: (0, i.jsx)(c.S.Service, {
                          icon: (0, i.jsx)(d.Z, {}),
                          glow: !0,
                          children: "Functions",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(c.S.Group, {
                  children: (0, i.jsx)(c.S.Node, {
                    id: "api",
                    children: (0, i.jsx)(c.S.Service, {
                      payload: { key: "isValid", value: "true" },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(c.S.Connection, {
              nodes: ["server", "functions"],
              children: (0, i.jsx)(c.S.Request, {
                delay: 0,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(c.S.Connection, {
              nodes: ["functions", "api"],
              children: (0, i.jsx)(c.S.Request, {
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
    9714: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return ShareDiagram;
        },
      });
      var i = r(85893),
        s = r(50618),
        a = r(29405),
        c = r(33587),
        o = r(41962);
      function ShareDiagram() {
        let e = (0, s.Z)("(min-width: 768px)");
        return (0, i.jsxs)(a.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(a.S.Nodes, {
              children: [
                (0, i.jsx)(a.S.Group, {
                  children: (0, i.jsx)(a.S.Node, {
                    id: "file",
                    children: (0, i.jsx)(a.S.Service, {
                      icon: (0, i.jsx)(c.Z, {}),
                      payload: {
                        key: "file",
                        value: "ev:TkDnO",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, i.jsx)(a.S.Group, {
                  children: (0, i.jsx)(a.S.Node, {
                    id: "relay",
                    children: (0, i.jsx)(a.S.Service, {
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, i.jsxs)(a.S.Group, {
                  children: [
                    (0, i.jsx)(a.S.Node, {
                      id: "thirdparty",
                      children: (0, i.jsx)(a.S.Service, {
                        payload: { key: "file", value: "xray.pdf" },
                        children: "Third Party API",
                      }),
                    }),
                    e &&
                      (0, i.jsx)(a.S.Node, {
                        id: "client",
                        children: (0, i.jsx)(a.S.Service, {
                          icon: (0, i.jsx)(o.Z, {}),
                          payload: { key: "file", value: "xray.pdf" },
                          children: "User",
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(a.S.Connection, {
              nodes: ["file", "relay"],
              children: (0, i.jsx)(a.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(a.S.Connection, {
              nodes: ["relay", "thirdparty"],
              children: (0, i.jsx)(a.S.Request, {
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
            e &&
              (0, i.jsx)(a.S.Connection, {
                nodes: ["relay", "client"],
                children: (0, i.jsx)(a.S.Request, {
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
    27863: function (e, n, r) {
      "use strict";
      r.d(n, {
        Z: function () {
          return StorageDiagram;
        },
      });
      var i = r(85893),
        s = r(50618),
        a = r(29405),
        c = r(13542);
      function StorageDiagram() {
        let e = (0, s.Z)("(min-width: 768px)");
        return (0, i.jsxs)(a.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(a.S.Nodes, {
              children: [
                (0, i.jsx)(a.S.Group, {
                  children: (0, i.jsx)(a.S.Node, {
                    id: "data",
                    children: (0, i.jsx)(a.S.Service, {
                      icon: (0, i.jsx)(c.Z, {}),
                      payload: { key: "name", value: "Tom Cullen" },
                      children: "Patient",
                    }),
                  }),
                }),
                (0, i.jsxs)(a.S.Group, {
                  children: [
                    (0, i.jsx)(a.S.Node, {
                      id: "postgres",
                      style: { marginLeft: e ? -10 : 0 },
                      children: (0, i.jsx)(a.S.Service, {
                        payload: e && {
                          key: "name",
                          value: "ev:Tk8Df",
                          highlight: !0,
                        },
                        children: "Postgres",
                      }),
                    }),
                    e &&
                      (0, i.jsx)(a.S.Node, {
                        id: "mysql",
                        children: (0, i.jsx)(a.S.Service, {
                          payload: {
                            key: "name",
                            value: "ev:Tk8Df",
                            highlight: !0,
                          },
                          children: "MySQL",
                        }),
                      }),
                    (0, i.jsx)(a.S.Node, {
                      id: "dynamo",
                      style: { marginLeft: e ? -10 : 0 },
                      children: (0, i.jsx)(a.S.Service, {
                        payload: e && {
                          key: "name",
                          value: "ev:Tk8Df",
                          highlight: !0,
                        },
                        children: "DynamoDB",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(a.S.Connection, {
              nodes: ["data", "postgres"],
              anchors: { data: "right", postgres: "left" },
              children: (0, i.jsx)(a.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
            e &&
              (0, i.jsx)(a.S.Connection, {
                nodes: ["data", "mysql"],
                anchors: { data: "right", mysql: "left" },
                children: (0, i.jsx)(a.S.Request, {
                  encrypted: !0,
                  duration: 1.5,
                  repeatDelay: 1.5,
                  ease: "easeOut",
                  delay: 1.5,
                }),
              }),
            (0, i.jsx)(a.S.Connection, {
              nodes: ["data", "dynamo"],
              anchors: { data: "right", dynamo: "left" },
              children: (0, i.jsx)(a.S.Request, {
                encrypted: !0,
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
    11187: function (e) {
      e.exports = {
        functions: "styles_functions__kBKzn",
        functionCall: "styles_functionCall__A76e_",
      };
    },
  },
]);
