(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2840],
  {
    32249: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/papers/[[...paper]]",
        function () {
          return r(8197);
        },
      ]);
    },
    90218: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return Hero;
        },
      });
      var o = r(85893),
        a = r(93296),
        n = r.n(a);
      function Hero(e) {
        let { title: t, subtitle: r, description: a } = e;
        return (0, o.jsx)("section", {
          className: n().hero,
          children: (0, o.jsx)("div", {
            className: "container",
            children: (0, o.jsx)(
              "div",
              {
                className: "row justify-content-center",
                children: (0, o.jsxs)("div", {
                  className: "col-12",
                  children: [
                    (0, o.jsx)("h1", { className: n().title, children: t }),
                    r &&
                      (0, o.jsx)("h3", {
                        className: n().subtitle,
                        children: r,
                      }),
                    a && a,
                  ],
                }),
              },
              t.split(" ").join("-").toLowerCase(),
            ),
          }),
        });
      }
    },
    39892: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return Layout;
        },
      });
      var o = r(85893),
        a = r(9008),
        n = r.n(a),
        s = r(4298),
        i = r.n(s),
        l = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        c = r(12034),
        _ = r.n(c),
        d = r(41664),
        p = r.n(d);
      function Layout(e) {
        let {
          children: t,
          preview: r,
          title:
            a = "evervault — Developer building blocks for data security and compliance",
          description:
            s = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: c = "https://evervault.com/social/og.jpg",
          head: d,
          ...m
        } = e;
        return (0, o.jsxs)("div", {
          className: _().layout,
          ...m,
          children: [
            (0, o.jsxs)(n(), {
              children: [
                (0, o.jsx)("title", { children: a }),
                (0, o.jsx)("meta", { name: "description", content: s }),
                (0, o.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, user-scalable=no",
                }),
                (0, o.jsx)("meta", { name: "theme-color", content: "#63e" }),
                (0, o.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  href: "/favicon.png",
                }),
                (0, o.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: "/logo192.png",
                }),
                (0, o.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
                (0, o.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, o.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "true",
                }),
                (0, o.jsx)("meta", { property: "og:title", content: a }),
                (0, o.jsx)("meta", { property: "og:description", content: s }),
                (0, o.jsx)("meta", { property: "og:image", content: c }),
                (0, o.jsx)("meta", {
                  property: "og:site_name",
                  content: "evervault",
                }),
                (0, o.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, o.jsx)("meta", {
                  name: "twitter:site",
                  content: "@evervault",
                }),
                (0, o.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@evervault",
                }),
                (0, o.jsx)("meta", { name: "twitter:title", content: a }),
                (0, o.jsx)("meta", { name: "twitter:description", content: s }),
                (0, o.jsx)("meta", { name: "twitter:image", content: c }),
                (0, o.jsx)("meta", { name: "twitter:image:alt", content: a }),
                (0, o.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(l) },
                }),
                (0, o.jsx)(i(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                d,
              ],
            }),
            r &&
              (0, o.jsxs)("div", {
                className: _().preview,
                children: [
                  (0, o.jsx)("p", { children: "You are in preview mode" }),
                  (0, o.jsx)(p(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, o.jsx)("main", { className: _().main, children: t }),
          ],
        });
      }
    },
    99397: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return h;
        },
      });
      var o = r(85893),
        a = r(41664),
        n = r.n(a),
        s = r(18277),
        i = r.n(s),
        l = r(70479),
        c = r.n(l),
        _ = r(7358),
        d = r.n(_),
        p = r(56190),
        m = r(77387),
        h = {
          a: (e) =>
            e.href.includes(".pdf")
              ? (0, o.jsx)("a", {
                  target: "_blank",
                  rel: "noreferrer",
                  className: c().link,
                  ...e,
                })
              : (0, o.jsx)(n(), {
                  className: c().link,
                  scroll: !1,
                  ...e,
                  legacyBehavior: !0,
                }),
          dl: (e) => (0, o.jsx)("dl", { className: c().dl, ...e }),
          dt: (e) => (0, o.jsx)("dl", { className: c().dt, ...e }),
          dd: (e) => (0, o.jsx)("dl", { className: c().dd, ...e }),
          ul: (e) => (0, o.jsx)("ul", { className: c().ul, ...e }),
          ol: (e) => (0, o.jsx)("ol", { className: c().ol, ...e }),
          strong: (e) => (0, o.jsx)("strong", { className: c().strong, ...e }),
          b: (e) => (0, o.jsx)("b", { className: c().strong, ...e }),
          blockquote: (e) =>
            (0, o.jsx)("blockquote", { className: c().quote, ...e }),
          inlineCode: (e) =>
            (0, o.jsx)("code", { className: c().inlineCode, ...e }),
          pre: (e) => {
            var t;
            return (0, o.jsx)("div", {
              className: d().pre,
              children: (0, o.jsx)(p.Z, {
                ...e,
                language:
                  null === (t = e.children.props.className) || void 0 === t
                    ? void 0
                    : t.split("-")[1],
                style: m.Z,
                showLineNumbers: !0,
                wrapLines: !0,
                customStyle: { background: "transparent" },
                children: e.children.props.children.trim(),
              }),
            });
          },
          img: function (e) {
            return (0, o.jsx)("span", {
              className: i().wrapper,
              children: (0, o.jsx)("img", { className: i().image, ...e }),
            });
          },
          hr: (e) => (0, o.jsx)("hr", { className: c().hr, ...e }),
          table: (e) =>
            (0, o.jsx)("div", {
              className: d().table,
              children: (0, o.jsx)("table", { ...e }),
            }),
        };
    },
    8197: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __N_SSG: function () {
            return D;
          },
          default: function () {
            return Papers;
          },
        });
      var o = r(85893),
        a = r(27484),
        n = r.n(a),
        s = r(94184),
        i = r.n(s),
        l = r(11163),
        c = r(49438),
        _ = r(90218),
        d = r(39892),
        p = r(67294),
        m = r(41664),
        h = r.n(m),
        u = r(9008),
        g = r.n(u),
        x = r(25675),
        y = r.n(x),
        v = r(92520),
        f = r(11544),
        j = r(60777),
        w = r(25321);
      r(95433), r(12047);
      var b = r(66229),
        k = r.n(b),
        T = r(70479),
        C = r.n(T),
        N = r(30760),
        L = r.n(N);
      let S = { resting: { y: 0 }, hover: { y: -4 }, tap: { scale: 0.99 } },
        E = {
          hidden: { pointerEvents: "none" },
          visible: { pointerEvents: "auto" },
        },
        H = { hidden: { opacity: 0 }, visible: { opacity: 0.8 } },
        M = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };
      function Paper(e) {
        let {
            activePaper: t,
            title: r,
            authors: a = [],
            content: s,
            slug: i,
            date: l,
            cover: c,
            pdf: _,
            socialImage: d,
            shortDescription: m,
          } = e,
          [u, x] = (0, p.useState)(!1),
          b = (0, p.useRef)(null),
          T = (0, p.useCallback)((e) => {
            if (27 === e.keyCode) {
              var t;
              null == b ||
                null === (t = b.current) ||
                void 0 === t ||
                t.click();
            }
          }, []);
        (0, p.useEffect)(() => {
          t && t.length > 0 && t[0] === i ? x(!0) : x(!1);
        }, [t]),
          (0, p.useEffect)(
            () => (
              u
                ? (document.addEventListener("keydown", T),
                  document.body.classList.add("overflow-hidden"))
                : (document.removeEventListener("keydown", T),
                  document.body.classList.remove("overflow-hidden")),
              () => document.removeEventListener("keydown", T)
            ),
            [u],
          );
        let N = t && t.length > 0 && t[0] === i,
          P = n()(l).format("MMMM YYYY"),
          D = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = new Intl.ListFormat("en", {
                style: "short",
                type: "conjunction",
              });
            if (e) return t.format(e);
          })(a),
          z = {
            className: C().imgFluid,
            src: c,
            alt: r,
            width: 256,
            height: 374,
          };
        return (0, o.jsxs)("div", {
          className: "col-12 col-xs-6 col-md-4 col-lg-3 mb-md-32",
          children: [
            N &&
              (0, o.jsxs)(g(), {
                children: [
                  (0, o.jsxs)("title", { children: [r, " — evervault"] }),
                  (0, o.jsx)("meta", { name: "description", content: m }),
                  (0, o.jsx)("meta", { name: "twitter:image", content: d }),
                ],
              }),
            (0, o.jsxs)("article", {
              className: L().paper,
              children: [
                (0, o.jsx)(h(), {
                  scroll: !1,
                  href: "/papers/".concat(i),
                  legacyBehavior: !0,
                  children: (0, o.jsxs)(v.E.figure, {
                    className: L().cover,
                    initial: "resting",
                    whileHover: "hover",
                    whileTap: "tap",
                    variants: S,
                    children: [
                      (0, o.jsx)(y(), { ...z }),
                      (0, o.jsx)(v.E.figcaption, {
                        className: L().coverInfo,
                        variants: {
                          resting: { opacity: 0 },
                          hover: { opacity: 1 },
                        },
                        children: (0, o.jsx)(v.E.div, {
                          variants: { resting: { y: 4 }, hover: { y: 0 } },
                          children: (0, o.jsx)(j.Z, {
                            "data-type": "primary",
                            "data-size": "small",
                            tag: "div",
                            children: i.includes("subscribe")
                              ? "Subscribe"
                              : "Read more",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, o.jsxs)("header", {
                  className: L().info,
                  children: [
                    (0, o.jsx)("h6", { className: L().title, children: r }),
                    (0, o.jsx)("p", { className: L().author, children: D }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)(f.M, {
              initial: !1,
              children:
                N &&
                (0, o.jsxs)(
                  v.E.div,
                  {
                    className: L().modal,
                    variants: E,
                    initial: "hidden",
                    animate: "visible",
                    exit: "hidden",
                    transition: { duration: 0 },
                    children: [
                      (0, o.jsxs)(v.E.div, {
                        className: L().modalContent,
                        variants: M,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 30,
                        },
                        children: [
                          (0, o.jsx)(h(), {
                            scroll: !1,
                            href: "/papers",
                            title: "Close (⎋)",
                            legacyBehavior: !0,
                            children: (0, o.jsx)("div", {
                              ref: b,
                              className: L().close,
                              children: (0, o.jsx)(w.ZP.Close, {}),
                            }),
                          }),
                          (0, o.jsx)("div", {
                            className: "container",
                            children: (0, o.jsxs)("div", {
                              className: "row align-items-center",
                              children: [
                                (0, o.jsx)("div", {
                                  className:
                                    "col-xs-4 col-sm-3 col-md-4 mb-24 mb-md-0 d-flex align-items-center justify-content-center",
                                  children: (0, o.jsx)("figure", {
                                    className: L().cover,
                                    children: (0, o.jsx)(y(), { ...z }),
                                  }),
                                }),
                                (0, o.jsxs)("div", {
                                  className:
                                    "col-xs-8 col-sm-9 col-sm-9 col-md-8",
                                  children: [
                                    (0, o.jsx)("h4", {
                                      className: "mb-8",
                                      children: r,
                                    }),
                                    (0, o.jsxs)("p", {
                                      className: k().muted,
                                      children: [D, " — Published ", P],
                                    }),
                                    s,
                                    (0, o.jsx)(j.Z, {
                                      href: _,
                                      "data-type": "primary",
                                      target: "_blank",
                                      children: "Download PDF",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      (0, o.jsx)(v.E.div, {
                        className: L().overlay,
                        variants: H,
                        transition: { duration: 0.2 },
                        children: (0, o.jsx)(h(), {
                          scroll: !1,
                          href: "/papers",
                          title: "Close (⎋)",
                          children: "See all Papers",
                        }),
                      }),
                    ],
                  },
                  r,
                ),
            }),
          ],
        });
      }
      var P = r(99397),
        D = !0;
      function Papers(e) {
        let { papers: t } = e,
          { query: r } = (0, l.useRouter)(),
          { paper: a } = r,
          s = n()();
        return (0, o.jsxs)(d.Z, {
          title: "Papers — evervault",
          description:
            "The most important cryptography papers spanning the past, present, and future of cryptosystems & cryptology.",
          socialImage: "https://evervault.com/social/papers.png",
          head: (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("link", {
                rel: "alternate",
                type: "application/rss+xml",
                href: "https://evervault.com/api/rss/rss2",
                title: "evervault Papers RSS Feed (RSS 2.0)",
              }),
              (0, o.jsx)("link", {
                rel: "alternate",
                type: "application/feed+json",
                href: "https://evervault.com/api/rss/json",
                title: "evervault Papers RSS Feed (JSON)",
              }),
            ],
          }),
          children: [
            (0, o.jsx)(_.Z, {
              title: "evervault Papers",
              subtitle: "Crypto means cryptography",
              description: (0, o.jsx)("div", {
                className: "row justify-content-center",
                children: (0, o.jsx)("div", {
                  className: i()(C().lg, "col-sm-10 col-md-8"),
                  children: (0, o.jsx)("p", {
                    className: "mt-12",
                    children:
                      "The most important cryptography papers spanning the past, present, and future of cryptosystems & cryptology.",
                  }),
                }),
              }),
            }),
            (0, o.jsx)("div", {
              className: "container",
              children: (0, o.jsx)("div", {
                className: "row align-items-stretch",
                children: t
                  .filter((e) => {
                    let { publishedAt: t } = e;
                    return n()(t).isBefore(s);
                  })
                  .map((e) => {
                    let {
                      title: t,
                      slug: r,
                      authors: n,
                      content: s,
                      publishedDate: i,
                      cover: l,
                      pdf: _,
                    } = e;
                    return (0, o.jsx)(
                      Paper,
                      {
                        slug: r,
                        title: t,
                        authors: n,
                        content: (0, o.jsx)(c.R, { ...s, components: P.Z }),
                        date: i,
                        cover: l,
                        pdf: _,
                        activePaper: a,
                      },
                      r,
                    );
                  }),
              }),
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
    7358: function (e) {
      e.exports = {
        table: "MDXComponents_table__kGX2w",
        pre: "MDXComponents_pre__pyCTn",
      };
    },
    66229: function (e) {
      e.exports = {
        primary20: "Color_primary20__3Jyxj",
        primary40: "Color_primary40__eiD7g",
        primary60: "Color_primary60__XloOj",
        primary80: "Color_primary80__HIh_w",
        primary100: "Color_primary100__FC51Y",
        secondary20: "Color_secondary20__pUTTB",
        secondary40: "Color_secondary40__2UPHa",
        secondary60: "Color_secondary60__16qLG",
        secondary80: "Color_secondary80__S16Dg",
        secondary100: "Color_secondary100__UwKWQ",
        greenLightest: "Color_greenLightest__5Jgs3",
        greenLight: "Color_greenLight__zrQrl",
        greenMedium: "Color_greenMedium__h12zi",
        greenDark: "Color_greenDark__M0kBb",
        greenDarkest: "Color_greenDarkest__ZpgPB",
        blueLightest: "Color_blueLightest__AsEZV",
        blueLight: "Color_blueLight__zkW15",
        blueMedium: "Color_blueMedium__pn7wx",
        blueDark: "Color_blueDark__jXa6V",
        blueDarkest: "Color_blueDarkest__HUomo",
        orangeLightest: "Color_orangeLightest__A97K_",
        orangeLight: "Color_orangeLight__daCpQ",
        orangeMedium: "Color_orangeMedium__F6dOr",
        orangeDark: "Color_orangeDark__uCCyV",
        orangeDarkest: "Color_orangeDarkest__jZB_2",
        redLightest: "Color_redLightest__3HUq8",
        redLight: "Color_redLight__ndyGG",
        redMedium: "Color_redMedium__UqEda",
        redDark: "Color_redDark__r0dk0",
        redDarkest: "Color_redDarkest__qldxp",
        muted: "Color_muted__eIBoc",
        body: "Color_body__LvC_F",
        headings: "Color_headings__Gogy7",
        link: "Color_link__x5WTI",
      };
    },
    18277: function (e) {
      e.exports = {
        wrapper: "Image_wrapper__zMDwk",
        image: "Image_image__XDK_5",
      };
    },
    30760: function (e) {
      e.exports = {
        paper: "Paper_paper__Bfs18",
        cover: "Paper_cover__KgD7k",
        coverInfo: "Paper_coverInfo__8JXIA",
        info: "Paper_info__dN0mJ py-20",
        title: "Paper_title__HBUq0",
        author: "Paper_author__jjH6D",
        overlay: "Paper_overlay__7Vh9B",
        modal: "Paper_modal__kCypk",
        modalContent: "Paper_modalContent__0n6fa",
        close: "Paper_close__06z_1",
      };
    },
    70479: function (e) {
      e.exports = {
        light: "Text_light__lmRM0",
        lowercase: "Text_lowercase___q6H3",
        uppercase: "Text_uppercase__YCzKb",
        capitalize: "Text_capitalize__hgtn1",
        left: "Text_left__I2sBq",
        right: "Text_right__O7gCL",
        center: "Text_center__uX_8k",
        justify: "Text_justify___V_E0",
        break: "Text_break__1PiEY",
        wrap: "Text_wrap__SAdI1",
        nowrap: "Text_nowrap__cNcII",
        truncate: "Text_truncate__CUrhb",
        h1: "Text_h1__qO08q",
        h2: "Text_h2__rM6ht",
        h3: "Text_h3__1XqHu",
        h4: "Text_h4__Hwzj6",
        h5: "Text_h5__TiHwU",
        h6: "Text_h6__DT7nD",
        lg: "Text_lg__E1tes",
        sm: "Text_sm__L_eVA",
        xs: "Text_xs__P5SvJ",
        weightHair: "Text_weightHair__eKFgi",
        weightThin: "Text_weightThin__6SAqm",
        weightExtraLight: "Text_weightExtraLight__T7SWd",
        weightLight: "Text_weightLight__sCOEV",
        weightBook: "Text_weightBook__Cj7Qv",
        weightRegular: "Text_weightRegular__fNF3i",
        weightMedium: "Text_weightMedium__zZyDh",
        weightSemibold: "Text_weightSemibold__LwrdL",
        weightBold: "Text_weightBold__6Ovw3",
        weightBlack: "Text_weightBlack__CQsDb",
        weightHeavy: "Text_weightHeavy__dNOIZ",
        italic: "Text_italic__Cy64n",
        ul: "Text_ul__994aX",
        ol: "Text_ol__yR2tF",
        dl: "Text_dl__Moiyn",
        dt: "Text_dt__cYS8V",
        dd: "Text_dd___oq9_",
        listStyleNone: "Text_listStyleNone__KAVVO",
        listGroupFlush: "Text_listGroupFlush__EMs9b",
        listGroupFlushLink: "Text_listGroupFlushLink__zq59f",
        quote: "Text_quote__ohCTc",
        link: "Text_link__nsvjc",
        hr: "Text_hr__4magj",
        monospace: "Text_monospace__jOCPv",
        underline: "Text_underline__GDHsk",
        decorationNone: "Text_decorationNone__7_g8q",
        stretchedLink: "Text_stretchedLink__qos1E",
        prose: "Text_prose___eH_n",
        imgFluid: "Text_imgFluid__Tt3RL",
        strong: "Text_strong__VWYbB",
        subtle: "Text_subtle__qAtAw",
        inlineCode: "Text_inlineCode__Hr8zN",
        scrollHorizontally: "Text_scrollHorizontally__OKEyW",
      };
    },
  },
  function (e) {
    e.O(0, [1140, 9663, 4252, 9774, 2888, 179], function () {
      return e((e.s = 32249));
    }),
      (_N_E = e.O());
  },
]);
