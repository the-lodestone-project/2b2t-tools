"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3756],
  {
    53756: function (e, n, s) {
      s.d(n, {
        aw: function () {
          return CredentialsDemo;
        },
        $9: function () {
          return FunctionsDiagram;
        },
      });
      var i = s(85893),
        r = s(55141),
        a = s(92520),
        l = s(29405),
        t = s(13542),
        c = s(25358),
        d = s(8971),
        o = s(46609),
        h = s(4844),
        u = s(54463),
        x = s(67294),
        j = s(68592),
        p = s.n(j),
        Credentials_PlanetScale = function () {
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "14",
            fill: "none",
            viewBox: "0 0 14 14",
            children: (0, i.jsx)("path", {
              fill: "#fff",
              d: "M0 7a7 7 0 0113.386-2.872l-9.258 9.258a6.992 6.992 0 01-1.129-.641L8.744 7H7l-4.95 4.95A6.978 6.978 0 010 7zM14 7.002L7.002 14A7 7 0 0014 7.002z",
            }),
          });
        },
        Credentials_Plaid = function () {
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "15",
            fill: "none",
            viewBox: "0 0 14 15",
            children: (0, i.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M5.504 0L1.208 1.125.024 5.445l1.48 1.52L0 8.462l1.114 4.34 4.278 1.194L6.897 12.5l1.48 1.52 4.297-1.125 1.183-4.32-1.48-1.52 1.505-1.496-1.115-4.34L8.49.026 6.985 1.52 5.504 0zM2.868 1.956l2.263-.593.99 1.016-1.444 1.434-1.81-1.857zm4.968.437l1.005-1 2.254.63-1.84 1.827-1.42-1.457zM1.38 5.09l.623-2.276 1.81 1.857-1.444 1.434-.99-1.015zm8.726-.367l1.839-1.828.586 2.286-1.005 1-1.42-1.458zm-4.578-.038L6.97 3.252 8.39 4.71 6.947 6.144l-1.42-1.458zM3.22 6.98l1.443-1.434 1.42 1.458L4.64 8.437 3.22 6.98zm4.578.038l1.443-1.434 1.42 1.458-1.443 1.434-1.42-1.458zM1.35 8.838l1.006-1 1.42 1.459-1.84 1.826-.586-2.285zm4.14.472l1.444-1.434 1.42 1.458-1.443 1.434L5.49 9.31zm4.579.038l1.443-1.434.99 1.015-.624 2.276-1.81-1.857zm-7.282 2.649l1.839-1.828 1.42 1.458-1.006 1-2.253-.63zm4.974-.356l1.443-1.434 1.81 1.857-2.263.593-.99-1.016z",
              clipRule: "evenodd",
            }),
          });
        },
        Credentials_Rippling = function () {
          return (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "14",
            height: "10",
            fill: "none",
            viewBox: "0 0 14 10",
            children: (0, i.jsx)("path", {
              fill: "#fff",
              d: "M1.608 2.773C1.608 1.673 1.048.763 0 0h2.435a3.482 3.482 0 011.378 2.773 3.462 3.462 0 01-1.378 2.772c.79.328 1.24 1.128 1.24 2.273V10H1.47V7.818c0-1.09-.523-1.854-1.47-2.272 1.048-.764 1.608-1.673 1.608-2.773zm4.778 0c0-1.1-.56-2.01-1.608-2.773h2.435a3.482 3.482 0 011.378 2.773 3.462 3.462 0 01-1.378 2.772c.79.328 1.24 1.128 1.24 2.273V10H6.248V7.818c0-1.09-.524-1.854-1.47-2.272 1.047-.764 1.608-1.673 1.608-2.773zm4.779 0c0-1.1-.56-2.01-1.608-2.773h2.435a3.482 3.482 0 011.378 2.773 3.462 3.462 0 01-1.378 2.772c.79.328 1.24 1.128 1.24 2.273V10h-2.205V7.818c0-1.09-.524-1.854-1.47-2.272 1.047-.764 1.608-1.673 1.608-2.773z",
            }),
          });
        },
        y = s(74098),
        S = s(50618),
        v = s(24057),
        m = s(28101),
        f = s(35800);
      function InboundDiagram() {
        let e = (0, S.Z)("(min-width: 768px)");
        return (0, i.jsxs)(l.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(l.S.Nodes, {
              children: [
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "client",
                    children: (0, i.jsx)(l.S.Service, {
                      icon: (0, i.jsx)(t.Z, {}),
                      payload: { key: "key", value: "1234" },
                      children: "User",
                    }),
                  }),
                }),
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "relay",
                    children: (0, i.jsx)(l.S.Service, {
                      icon: (0, i.jsx)(m.Z, {}),
                      glow: !0,
                      children: "Inbound Relay",
                    }),
                  }),
                }),
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(l.S.Service, {
                      payload: { key: "key", value: "ev:Tk9D", highlight: !0 },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["client", "relay"],
              children: (0, i.jsx)(l.S.Request, {
                className: p().request,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["relay", "server"],
              children: (0, i.jsx)(l.S.Request, {
                className: p().encryptedRequest,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
      function OutboundDiagram() {
        let e = (0, S.Z)("(min-width: 768px)");
        return (0, i.jsxs)(l.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(l.S.Nodes, {
              children: [
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(l.S.Service, {
                      payload: { key: "key", value: "ev:Tk9D", highlight: !0 },
                      children: "Your Server",
                    }),
                  }),
                }),
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "relay",
                    children: (0, i.jsx)(l.S.Service, {
                      icon: (0, i.jsx)(m.Z, {}),
                      glow: !0,
                      children: "Outbound Relay",
                    }),
                  }),
                }),
                (0, i.jsxs)(l.S.Group, {
                  children: [
                    e &&
                      (0, i.jsx)(l.S.Node, {
                        className: p().shift,
                        id: "planetScale",
                        children: (0, i.jsx)(l.S.Service, {
                          icon: (0, i.jsx)(Credentials_PlanetScale, {}),
                          payload: { key: "key", value: "1234" },
                          children: "PlanetScale",
                        }),
                      }),
                    (0, i.jsx)(l.S.Node, {
                      id: "plaid",
                      children: (0, i.jsx)(l.S.Service, {
                        icon: (0, i.jsx)(Credentials_Plaid, {}),
                        payload: { key: "key", value: "1234" },
                        children: "Plaid",
                      }),
                    }),
                    (0, i.jsx)(l.S.Node, {
                      className: p().shift,
                      id: "rippling",
                      children: (0, i.jsx)(l.S.Service, {
                        icon: (0, i.jsx)(Credentials_Rippling, {}),
                        payload: { key: "key", value: "1234" },
                        children: "Rippling",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["server", "relay"],
              children: (0, i.jsx)(l.S.Request, {
                className: p().request,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            e &&
              (0, i.jsx)(l.S.Connection, {
                nodes: ["relay", "planetScale"],
                anchors: { planetScale: "left" },
                children: (0, i.jsx)(l.S.Request, {
                  className: p().encryptedRequest,
                  duration: 1.5,
                  repeatDelay: 1.5,
                  ease: "easeOut",
                  delay: 1.5,
                }),
              }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["relay", "plaid"],
              anchors: { plaid: "left" },
              children: (0, i.jsx)(l.S.Request, {
                className: p().encryptedRequest,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["relay", "rippling"],
              anchors: { rippling: "left" },
              children: (0, i.jsx)(l.S.Request, {
                className: p().encryptedRequest,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
      function FunctionsDiagram() {
        let e = (0, S.Z)("(min-width: 768px)");
        return (0, i.jsxs)(l.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, i.jsxs)(l.S.Nodes, {
              children: [
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "server",
                    children: (0, i.jsx)(l.S.Service, {
                      payload: { key: "key", value: "ev:Tk9D", highlight: !0 },
                      children: "Your Server",
                    }),
                  }),
                }),
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsxs)("div", {
                    className: p().functions,
                    children: [
                      (0, i.jsx)(a.E.div, {
                        className: p().functionCall,
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
                        children: (0, i.jsx)(c.Z, {}),
                      }),
                      (0, i.jsx)(l.S.Node, {
                        id: "functions",
                        children: (0, i.jsx)(l.S.Service, {
                          icon: (0, i.jsx)(m.Z, {}),
                          glow: !0,
                          children: "Functions",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(l.S.Group, {
                  children: (0, i.jsx)(l.S.Node, {
                    id: "api",
                    children: (0, i.jsx)(l.S.Service, {
                      payload: { key: "key", value: "d08d72", highlight: !0 },
                      children: "External API",
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["server", "functions"],
              children: (0, i.jsx)(l.S.Request, {
                className: p().request,
                delay: 0,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeIn",
              }),
            }),
            (0, i.jsx)(l.S.Connection, {
              nodes: ["functions", "api"],
              children: (0, i.jsx)(l.S.Request, {
                className: p().encryptedRequest,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeOut",
                delay: 3,
              }),
            }),
          ],
        });
      }
      let g = "INBOUND",
        N = "OUTBOUND",
        w = "FUNCTIONS";
      function AccordionItem(e) {
        let { value: n, title: s, icon: a, children: l } = e;
        return (0, i.jsxs)(r.ck, {
          className: p().accordionItem,
          value: n,
          children: [
            (0, i.jsxs)(r.xz, {
              className: p().accordionTrigger,
              children: [
                (0, i.jsx)("div", {
                  className: p().accordionIcon,
                  children: a,
                }),
                s,
                (0, i.jsx)("div", {
                  className: p().accordionIndicator,
                  children: (0, i.jsx)(d.Z, {}),
                }),
              ],
            }),
            (0, i.jsx)(r.VY, {
              className: p().accordionContent,
              children: (0, i.jsx)("div", {
                className: p().accordionText,
                children: l,
              }),
            }),
          ],
        });
      }
      function CredentialsDiagrams() {
        let [e, n] = (0, x.useState)(g);
        return (0, i.jsxs)("div", {
          className: p().demo,
          children: [
            (0, i.jsxs)(r.fC, {
              value: e,
              onValueChange: n,
              className: p().accordion,
              children: [
                (0, i.jsxs)(AccordionItem, {
                  value: g,
                  icon: (0, i.jsx)(o.Z, {}),
                  title: "Encrypt credentials",
                  children: [
                    (0, i.jsx)("p", {
                      children:
                        "Collect third-party API credentials from your users and encrypt them before they touch your infrastructure, using Inbound Relay or any of our client-side SDKs.",
                    }),
                    (0, i.jsx)(v.Z, {
                      href: "https://docs.evervault.com/products/inbound-relay",
                      children: "Learn more",
                    }),
                  ],
                }),
                (0, i.jsxs)(AccordionItem, {
                  value: N,
                  icon: (0, i.jsx)(h.Z, {}),
                  title: "Authenticate with APIs",
                  children: [
                    (0, i.jsx)("p", {
                      children:
                        "Easily use encrypted authentication tokens with any HTTP API through Outbound Relay. OAuth 2, Bearer Tokens, Basic Auth and API keys are all supported.",
                    }),
                    (0, i.jsx)(v.Z, {
                      href: "https://docs.evervault.com/products/outbound-relay",
                      children: "Learn more",
                    }),
                  ],
                }),
                (0, i.jsxs)(AccordionItem, {
                  value: w,
                  icon: (0, i.jsx)(u.Z, {}),
                  title: "Sign transactions",
                  children: [
                    (0, i.jsx)("p", {
                      children:
                        "For any APIs or services that require signatures, evervault Functions can be used to sign requests. You never handle authentication tokens or private keys in plaintext.",
                    }),
                    (0, i.jsx)(v.Z, {
                      href: "https://docs.evervault.com/products/functions",
                      children: "Learn more",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: p().diagram,
              children: (0, i.jsxs)(f.ErrorBoundary, {
                fallback: (0, i.jsx)("div", {}),
                children: [
                  e === g && (0, i.jsx)(InboundDiagram, {}),
                  e === N && (0, i.jsx)(OutboundDiagram, {}),
                  e === w && (0, i.jsx)(FunctionsDiagram, {}),
                ],
              }),
            }),
          ],
        });
      }
      function CredentialsDemo() {
        return (0, i.jsxs)(y.Z, {
          children: [
            (0, i.jsxs)("div", {
              className: p().heading,
              children: [
                (0, i.jsx)("h2", { children: "Secure Credentials" }),
                (0, i.jsx)("p", {
                  children:
                    "Use evervault as a secure gateway between your software and third-party services. Encrypt credentials and access tokens, and use them to authenticate with APIs.",
                }),
              ],
            }),
            (0, i.jsx)(CredentialsDiagrams, {}),
            (0, i.jsx)("div", { className: p().glow }),
          ],
        });
      }
    },
  },
]);
