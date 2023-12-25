(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1044],
  {
    91693: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Cta;
        },
      });
      var a = n(85893),
        i = n(60777),
        o = n(77570),
        s = n.n(o),
        r = n(61609),
        c = n(67294),
        l = n(37519);
      function Cta(e) {
        let {
            heading: t,
            subheading: n,
            primaryCta: o = "API docs",
            secondaryCta: d = "Try for free",
            hideSecondaryCta: u = !1,
            maxWidth: m = 600,
          } = e,
          { openSalesForm: h } = (0, c.useContext)(l.G);
        return (0, a.jsx)("div", {
          className: s().container,
          children: (0, a.jsx)("div", {
            className: s().gradientWrapper,
            children: (0, a.jsx)("div", {
              className: s().maxWidthWrapper,
              children: (0, a.jsxs)("div", {
                className: s().textWrapper,
                style: { "--max-width": m },
                children: [
                  (0, a.jsx)(r.Z, { as: "h2", children: t }),
                  (0, a.jsx)("p", { children: n }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(i.Z, {
                        size: "large",
                        onClick: () =>
                          h({ context: "CTA — General", title: o }),
                        children: o,
                      }),
                      !u &&
                        (0, a.jsx)(i.Z, {
                          type: "transparent",
                          size: "large",
                          href: "https://app.evervault.com/register",
                          as: "a",
                          target: "_blank",
                          children: d,
                        }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
    },
    28101: function (e, t, n) {
      "use strict";
      var a = n(85893);
      n(67294),
        (t.Z = function () {
          return (0, a.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "27",
            fill: "none",
            viewBox: "0 0 24 27",
            children: (0, a.jsx)("path", {
              fill: "#fff",
              fillRule: "evenodd",
              d: "M.936 3.528c-.531.299-.879.852-.93 1.469A2.443 2.443 0 010 4.855v5.974c0-.039.003-.077.006-.116.068.949.685 1.768 1.57 2.067l1.078.364-1.718.966c-.531.3-.879.853-.93 1.47A2.442 2.442 0 010 15.438v5.974c0-.039.003-.078.006-.116.068.948.685 1.768 1.57 2.067l8.668 2.925a11.256 11.256 0 009.138-.865l3.682-2.07c.532-.3.88-.853.93-1.47.003.047.005.094.006.142V16.05c0 .039-.003.077-.006.116-.068-.949-.685-1.768-1.57-2.067l-1.078-.364 1.718-.966c.532-.3.88-.853.93-1.47.003.047.005.094.006.142V5.468c0 .039-.003.078-.006.116-.068-.948-.685-1.768-1.57-2.067L13.756.592a11.256 11.256 0 00-9.138.865L.936 3.527zm2.653 9.931l-2.31 1.3a1.12 1.12 0 00-.563.946v.17c.013.898.609 1.69 1.483 1.97l.487.156 3.695-2.078a6.59 6.59 0 012.223-.77L3.59 13.458zm10.686 2.83c1.77-.068 3.52-.556 5.107-1.448l1.1-.62 1.719.58a1.616 1.616 0 011.083 1.513v.107a1.65 1.65 0 01-.88 1.415l-1.374.733-6.755-2.28zm-3.927-6.415l-6.71-2.15 3.086-1.736a5.853 5.853 0 014.752-.45l8.663 2.924-1.198.64a11.088 11.088 0 01-8.593.772zM11.7 4.837l9.331 3.15 1.373-.734a1.65 1.65 0 00.88-1.415v-.107a1.616 1.616 0 00-1.082-1.512l-8.668-2.925a10.56 10.56 0 00-8.572.81L1.28 4.177a1.12 1.12 0 00-.563.946v.17c.013.899.609 1.69 1.483 1.97l.487.157L6.38 5.34a6.55 6.55 0 015.318-.503zm-1.35 15.62l-6.71-2.15 3.085-1.736a5.854 5.854 0 014.752-.45l8.663 2.924-1.198.64a11.088 11.088 0 01-8.593.772z",
              clipRule: "evenodd",
            }),
          });
        });
    },
    29405: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return Diagram;
        },
        N: function () {
          return m;
        },
      });
      var a = n(85893),
        i = n(94184),
        o = n.n(i),
        s = n(67294),
        r = n(48273),
        c = n.n(r),
        l = n(92520),
        d = n(28101),
        u = n(67338);
      let m = (0, s.createContext)();
      function Diagram(e) {
        let { children: t, className: n, direction: i = "horizontal" } = e,
          r = (0, s.useId)(),
          [l, d] = (0, s.useState)(!1),
          [u, h] = (0, s.useState)(!1),
          p = (0, s.useRef)(null);
        if (
          ((0, s.useEffect)(() => {
            let e =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0 ||
              navigator.msMaxTouchPoints > 0;
            if (e) return;
            let handleResize = () => {
              clearTimeout(p.current),
                h(!0),
                (p.current = setTimeout(() => {
                  h(!1);
                }, 500));
            };
            return (
              window.addEventListener("resize", handleResize),
              () => window.removeEventListener("resize", handleResize)
            );
          }, []),
          (0, s.useEffect)(() => {
            d(!0);
          }, []),
          !l)
        )
          return null;
        let x = o()(c().diagram, n);
        return (0, a.jsx)(m.Provider, {
          value: { id: r, resizing: u, direction: i },
          children: (0, a.jsx)("div", {
            id: "nodes-".concat(r),
            className: x,
            "data-direction": i,
            children: t,
          }),
        });
      }
      (Diagram.Node = function (e) {
        let { id: t, children: n, className: i, ...s } = e,
          r = o()(c().node, i);
        return (0, a.jsx)(l.E.div, {
          id: "node-".concat(t),
          className: r,
          ...s,
          children: n,
        });
      }),
        (Diagram.Group = function (e) {
          let { children: t } = e,
            { direction: n } = (0, s.useContext)(m);
          return (0, a.jsx)("div", {
            "data-direction": n,
            className: c().group,
            children: t,
          });
        }),
        (Diagram.Logo = function (e) {
          let { children: t } = e;
          return (0, a.jsxs)(l.E.div, {
            initial: { opacity: 0, scale: 0 },
            animate: { opacity: 1, scale: 1 },
            className: c().logo,
            children: [
              (0, a.jsx)(d.Z, {}),
              t &&
                (0, a.jsx)(l.E.div, {
                  initial: { opacity: 0, y: 5 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.15, duration: 0.5 },
                  className: c().logoLabel,
                  children: t,
                }),
            ],
          });
        }),
        (Diagram.Connection = function (e) {
          let { nodes: t, children: n, anchors: i, strength: o, ...r } = e,
            { resizing: d } = (0, s.useContext)(m);
          if (d) return null;
          let u = (function (e, t, n) {
            let [a, i] = (0, s.useState)(null),
              { id: o, direction: r } = (0, s.useContext)(m);
            return (
              (0, s.useLayoutEffect)(() => {
                let a = document.getElementById("nodes-".concat(o)),
                  s = e.map((e) => {
                    let n = document.getElementById("node-".concat(e));
                    return (function (e, t) {
                      let n = e.getBoundingClientRect(),
                        a = t.getBoundingClientRect();
                      return {
                        x: a.x + a.width / 2 - n.x,
                        y: a.y + a.height / 2 - n.y,
                        width: a.width,
                        height: a.height,
                      };
                    })(a, n, null == t ? void 0 : t[e]);
                  });
                i(
                  (function (e) {
                    let t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 40,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "horizontal";
                    if (e.length < 2) return null;
                    let a = [];
                    for (let i = 0; i < e.length - 1; i++) {
                      let o = e[i],
                        s = e[i + 1],
                        r = [];
                      if (
                        (0 === i && a.push("M ".concat(o.x, " ").concat(o.y)),
                        "vertical" === n)
                      ) {
                        let e = { x: o.x, y: o.y + o.height / 2 },
                          n = { x: s.x, y: s.y - s.height / 2 };
                        r = [
                          { x: e.x, y: e.y + t },
                          { x: n.x, y: n.y - t },
                          { x: n.x, y: n.y },
                        ];
                      } else {
                        let e = { x: o.x + o.width / 2, y: o.y },
                          n = { x: s.x - s.width / 2, y: s.y };
                        r = [
                          { x: e.x + t, y: e.y },
                          { x: n.x - t, y: n.y },
                          { x: n.x, y: n.y },
                        ];
                      }
                      a.push(
                        "L "
                          .concat(o.x, " ")
                          .concat(o.y, " C ")
                          .concat(r[0].x, " ")
                          .concat(r[0].y, ", ")
                          .concat(r[1].x, " ")
                          .concat(r[1].y, ", ")
                          .concat(r[2].x, " ")
                          .concat(r[2].y, " L ")
                          .concat(s.x, " ")
                          .concat(s.y),
                      );
                    }
                    return a.join(" ");
                  })(s, n, r),
                );
              }, [o]),
              a
            );
          })(t, i, o);
          return u
            ? (0, a.jsxs)("div", {
                className: c().connection,
                style: { "--path": '"'.concat(u, '"') },
                children: [
                  (0, a.jsx)("svg", {
                    children: (0, a.jsx)(l.E.path, {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.8 },
                      d: u,
                      stroke: "white",
                      strokeOpacity: 0.5,
                      fill: "none",
                      strokeWidth: 1.2,
                      strokeDasharray: "1 4",
                      ...r,
                    }),
                  }),
                  (0, a.jsx)(l.E.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { delay: 0.2 },
                    children: n,
                  }),
                ],
              })
            : null;
        }),
        (Diagram.Request = function (e) {
          let {
              className: t,
              encrypted: n,
              children: i,
              ease: s,
              duration: r = 3,
              delay: d = 0,
              repeatDelay: u = 0,
            } = e,
            m = o()(c().request, t);
          return (0, a.jsx)(l.E.div, {
            className: m,
            "data-encrypted": n,
            initial: { offsetDistance: "0%" },
            animate: { offsetDistance: "100%" },
            transition: {
              duration: r,
              delay: d,
              repeatDelay: u,
              ease: s,
              repeat: 1 / 0,
            },
            children: i,
          });
        }),
        (Diagram.Service = function (e) {
          let {
            payload: t,
            glow: n,
            icon: i = (0, a.jsx)(u.Z, {}),
            children: o,
          } = e;
          return (0, a.jsxs)(l.E.div, {
            transition: { duration: 0.3 },
            initial: { scale: 0.8 },
            animate: { scale: 1 },
            className: c().service,
            "data-glow": n,
            children: [
              (0, a.jsxs)("div", {
                className: c().serviceLabel,
                children: [
                  (0, a.jsx)("div", { className: c().nodeIcon, children: i }),
                  (0, a.jsx)("div", { className: c().nodeName, children: o }),
                ],
              }),
              t &&
                (0, a.jsxs)("div", {
                  className: c().payload,
                  children: [
                    '{"',
                    (0, a.jsx)("span", {
                      className: c().payloadKey,
                      children: t.key,
                    }),
                    '":"',
                    (0, a.jsx)("span", {
                      className: c().payloadValue,
                      "data-highlight": t.highlight,
                      children: t.value,
                    }),
                    '"}',
                  ],
                }),
            ],
          });
        }),
        (Diagram.Nodes = function (e) {
          let { children: t } = e,
            { direction: n } = (0, s.useContext)(m);
          return (0, a.jsx)("div", {
            "data-direction": n,
            className: c().nodes,
            children: t,
          });
        });
    },
    61609: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return GradientText;
        },
      });
      var a = n(85893),
        i = n(67294),
        o = n(91590),
        s = n.n(o);
      function clamp(e, t, n) {
        return Math.min(Math.max(n, e), t);
      }
      function GradientText(e) {
        let { as: t, className: n, interactive: o, width: r, ...c } = e,
          l = (0, i.useRef)(),
          d = t || "span",
          u = [s().text, n].filter(Boolean).join(" ");
        return (
          (0, i.useEffect)(() => {
            if (!o) return;
            let handleMouseMove = (e) => {
              let t = l.current,
                n = t.getBoundingClientRect(),
                a = e.clientX - n.left,
                i = e.clientY - n.top,
                o = clamp(0, 100, (a / n.width) * 100),
                s = clamp(0, 100, (i / n.height) * 100);
              t.style.setProperty("--x", "".concat(o, "%")),
                t.style.setProperty("--y", "".concat(s, "%"));
            };
            return (
              window.addEventListener("mousemove", handleMouseMove),
              () => {
                window.removeEventListener("mousemove", handleMouseMove);
              }
            );
          }, [o]),
          (0, a.jsx)(d, { ref: l, style: { "--width": r }, className: u, ...c })
        );
      }
    },
    39892: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Layout;
        },
      });
      var a = n(85893),
        i = n(9008),
        o = n.n(i),
        s = n(4298),
        r = n.n(s),
        c = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        l = n(12034),
        d = n.n(l),
        u = n(41664),
        m = n.n(u);
      function Layout(e) {
        let {
          children: t,
          preview: n,
          title:
            i = "evervault — Developer building blocks for data security and compliance",
          description:
            s = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: l = "https://evervault.com/social/og.jpg",
          head: u,
          ...h
        } = e;
        return (0, a.jsxs)("div", {
          className: d().layout,
          ...h,
          children: [
            (0, a.jsxs)(o(), {
              children: [
                (0, a.jsx)("title", { children: i }),
                (0, a.jsx)("meta", { name: "description", content: s }),
                (0, a.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, user-scalable=no",
                }),
                (0, a.jsx)("meta", { name: "theme-color", content: "#63e" }),
                (0, a.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  href: "/favicon.png",
                }),
                (0, a.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: "/logo192.png",
                }),
                (0, a.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
                (0, a.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, a.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "true",
                }),
                (0, a.jsx)("meta", { property: "og:title", content: i }),
                (0, a.jsx)("meta", { property: "og:description", content: s }),
                (0, a.jsx)("meta", { property: "og:image", content: l }),
                (0, a.jsx)("meta", {
                  property: "og:site_name",
                  content: "evervault",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:site",
                  content: "@evervault",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@evervault",
                }),
                (0, a.jsx)("meta", { name: "twitter:title", content: i }),
                (0, a.jsx)("meta", { name: "twitter:description", content: s }),
                (0, a.jsx)("meta", { name: "twitter:image", content: l }),
                (0, a.jsx)("meta", { name: "twitter:image:alt", content: i }),
                (0, a.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(c) },
                }),
                (0, a.jsx)(r(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                u,
              ],
            }),
            n &&
              (0, a.jsxs)("div", {
                className: d().preview,
                children: [
                  (0, a.jsx)("p", { children: "You are in preview mode" }),
                  (0, a.jsx)(m(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, a.jsx)("main", { className: d().main, children: t }),
          ],
        });
      }
    },
    50618: function (e, t, n) {
      "use strict";
      var a = n(67294);
      t.Z = function (e) {
        let getMatches = (e) => window.matchMedia(e).matches,
          [t, n] = (0, a.useState)(getMatches(e));
        function handleChange() {
          n(getMatches(e));
        }
        return (
          (0, a.useEffect)(() => {
            let t = window.matchMedia(e);
            return (
              handleChange(),
              t.addListener
                ? t.addListener(handleChange)
                : t.addEventListener("change", handleChange),
              () => {
                t.removeListener
                  ? t.removeListener(handleChange)
                  : t.removeEventListener("change", handleChange);
              }
            );
          }, [e]),
          t
        );
      };
    },
    77570: function (e) {
      e.exports = {
        container: "Cta_container__pNx4T",
        gradientWrapper: "Cta_gradientWrapper__lGHRR",
        maxWidthWrapper: "Cta_maxWidthWrapper__su_4C",
        textWrapper: "Cta_textWrapper__d5r6y",
      };
    },
    48273: function (e) {
      e.exports = {
        diagram: "Nodes_diagram__x0qtO",
        node: "Nodes_node__I7o9U",
        nodes: "Nodes_nodes__ODlnK",
        group: "Nodes_group__AJxIk",
        nodeContents: "Nodes_nodeContents__EivJ3",
        connection: "Nodes_connection__t0RgQ",
        request: "Nodes_request__FTxAz",
        logo: "Nodes_logo__zeFEY",
        logoLabel: "Nodes_logoLabel__yPibG",
        service: "Nodes_service__tkD2L",
        serviceLabel: "Nodes_serviceLabel__eytPs",
        nodeIcon: "Nodes_nodeIcon__f9TDZ",
        nodeName: "Nodes_nodeName__bOZwf",
        payload: "Nodes_payload__uY5OL",
        payloadKey: "Nodes_payloadKey__gAhYS",
        payloadValue: "Nodes_payloadValue__9VuFD",
        shimmer: "Nodes_shimmer___K8KA",
      };
    },
    91590: function (e) {
      e.exports = { text: "styles_text__Fvsk7" };
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
  },
]);
