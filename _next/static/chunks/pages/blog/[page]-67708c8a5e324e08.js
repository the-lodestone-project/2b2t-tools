(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5989],
  {
    48535: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog/[page]",
        function () {
          return n(69008);
        },
      ]);
    },
    6155: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return Author;
        },
      });
      var o = n(85893),
        s = n(78272),
        r = n(25675),
        a = n.n(r),
        l = n(67233),
        i = n.n(l);
      function Author(e) {
        let { author: t, variant: n } = e,
          r = (0, s.W6)(null == t ? void 0 : t.image);
        return (0, o.jsxs)("div", {
          className: i().author,
          "data-variant": n,
          children: [
            "By",
            (0, o.jsx)(a(), { ...r, className: i().image }),
            (0, o.jsx)("strong", { children: null == t ? void 0 : t.name }),
          ],
        });
      }
    },
    52490: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Cell;
        },
      });
      var o = n(85893),
        s = n(49277),
        r = n.n(s);
      function Cell(e) {
        let { children: t, className: n, onClick: s, dark: a = !1 } = e,
          l = [r().cell, n].filter(Boolean).join(" ");
        return (0, o.jsxs)("div", {
          className: l,
          "data-dark": a,
          onClick: s,
          children: [
            (0, o.jsx)("div", {
              className: r().border,
              "data-position": "top",
            }),
            (0, o.jsx)("div", {
              className: r().border,
              "data-position": "right",
            }),
            (0, o.jsx)("div", {
              className: r().border,
              "data-position": "bottom",
            }),
            (0, o.jsx)("div", {
              className: r().border,
              "data-position": "left",
            }),
            (0, o.jsx)("div", {
              className: r().joint,
              "data-position": "top-left",
            }),
            (0, o.jsx)("div", {
              className: r().joint,
              "data-position": "top-right",
            }),
            (0, o.jsx)("div", {
              className: r().joint,
              "data-position": "bottom-right",
            }),
            (0, o.jsx)("div", {
              className: r().joint,
              "data-position": "bottom-left",
            }),
            t,
          ],
        });
      }
    },
    15433: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Post;
        },
      });
      var o = n(85893),
        s = n(27484),
        r = n.n(s),
        a = n(218),
        l = n.n(a),
        i = n(25675),
        c = n.n(i),
        u = n(57178),
        d = n(78272),
        m = n(6155),
        h = n(11163);
      function Post(e) {
        let { post: t } = e,
          n = (0, h.useRouter)(),
          s = (0, d.W6)(t.img, 1e3);
        return (0, o.jsxs)("div", {
          className: l().post,
          onClick: () => {
            n.push("/blog/".concat(t.slug.current));
          },
          children: [
            (0, o.jsx)("div", {
              className: l().cover,
              children: (0, o.jsx)(u.f, {
                ratio: 16 / 9,
                children: (0, o.jsx)(c(), { className: l().postImage, ...s }),
              }),
            }),
            (0, o.jsxs)("div", {
              className: l().postContent,
              children: [
                (0, o.jsx)("div", {
                  className: l().joint,
                  "data-position": "top-right",
                }),
                (0, o.jsx)("div", {
                  className: l().joint,
                  "data-position": "bottom-right",
                }),
                (0, o.jsxs)("ul", {
                  className: l().meta,
                  children: [
                    (0, o.jsx)("li", {
                      children: r()(t.publishedAt).format("DD MMMM YYYY"),
                    }),
                    (0, o.jsx)("li", { children: t.timeToRead }),
                  ],
                }),
                (0, o.jsx)("h4", {
                  className: l().postTitle,
                  children: t.title,
                }),
                (0, o.jsx)("p", {
                  className: l().postSubTitle,
                  children: t.subtitle,
                }),
                (0, o.jsx)(m.S, { author: t.author }),
              ],
            }),
          ],
        });
      }
    },
    39892: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Layout;
        },
      });
      var o = n(85893),
        s = n(9008),
        r = n.n(s),
        a = n(4298),
        l = n.n(a),
        i = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        c = n(12034),
        u = n.n(c),
        d = n(41664),
        m = n.n(d);
      function Layout(e) {
        let {
          children: t,
          preview: n,
          title:
            s = "evervault — Developer building blocks for data security and compliance",
          description:
            a = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: c = "https://evervault.com/social/og.jpg",
          head: d,
          ...h
        } = e;
        return (0, o.jsxs)("div", {
          className: u().layout,
          ...h,
          children: [
            (0, o.jsxs)(r(), {
              children: [
                (0, o.jsx)("title", { children: s }),
                (0, o.jsx)("meta", { name: "description", content: a }),
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
                (0, o.jsx)("meta", { property: "og:title", content: s }),
                (0, o.jsx)("meta", { property: "og:description", content: a }),
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
                (0, o.jsx)("meta", { name: "twitter:title", content: s }),
                (0, o.jsx)("meta", { name: "twitter:description", content: a }),
                (0, o.jsx)("meta", { name: "twitter:image", content: c }),
                (0, o.jsx)("meta", { name: "twitter:image:alt", content: s }),
                (0, o.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(i) },
                }),
                (0, o.jsx)(l(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                d,
              ],
            }),
            n &&
              (0, o.jsxs)("div", {
                className: u().preview,
                children: [
                  (0, o.jsx)("p", { children: "You are in preview mode" }),
                  (0, o.jsx)(m(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, o.jsx)("main", { className: u().main, children: t }),
          ],
        });
      }
    },
    69008: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return G;
          },
          default: function () {
            return PostPage;
          },
        });
      var o = n(82729),
        s = n(85893),
        r = n(37288),
        a = n(93725),
        l = n(78272),
        i = n(94279),
        c = n(41664),
        u = n.n(c),
        d = n(39892),
        m = n(25675),
        h = n.n(m),
        p = n(59994),
        _ = n.n(p),
        g = n(56190),
        x = n(77387);
      function Strong(e) {
        return (0, s.jsx)("strong", { className: _().bold, ...e });
      }
      function Paragraph(e) {
        return (0, s.jsx)("p", { className: _().paragraph, ...e });
      }
      function H1(e) {
        return (0, s.jsx)("h1", { className: _().heading, ...e });
      }
      function H2(e) {
        return (0, s.jsx)("h2", { className: _().heading, ...e });
      }
      function H3(e) {
        return (0, s.jsx)("h3", { className: _().heading, ...e });
      }
      function H4(e) {
        return (0, s.jsx)("h4", { className: _().heading, ...e });
      }
      function H5(e) {
        return (0, s.jsx)("h5", { className: _().heading, ...e });
      }
      function H6(e) {
        return (0, s.jsx)("h6", { className: _().heading, ...e });
      }
      function Anchor(e) {
        let t = (e.href || "").startsWith("/") ? "noreferrer noopener" : void 0,
          n = (e.href || "").startsWith("http") ? "_blank" : void 0;
        return (0, s.jsx)(u(), {
          className: _().link,
          scroll: !1,
          target: n,
          rel: t,
          ...e,
        });
      }
      function UnorderedList(e) {
        return (0, s.jsx)("ul", { className: _().list, ...e });
      }
      function OrderedList(e) {
        return (0, s.jsx)("ol", { className: _().list, ...e });
      }
      function Quote(e) {
        let { author: t, role: n, ...o } = e;
        return (0, s.jsxs)("div", {
          className: _().quote,
          children: [
            (0, s.jsx)("blockquote", { ...o }),
            t &&
              (0, s.jsxs)("p", {
                className: _().quoteAuthor,
                children: [
                  t,
                  n &&
                    (0, s.jsxs)("span", {
                      className: _().quoteRole,
                      children: [", ", n],
                    }),
                ],
              }),
          ],
        });
      }
      function Code(e) {
        return (0, s.jsx)("code", { className: _().inlineCode, ...e });
      }
      function Pre(e) {
        let { language: t, code: n } = e;
        return (0, s.jsx)("div", {
          className: _().codeBlock,
          children: (0, s.jsx)(g.Z, {
            language: t,
            style: x.Z,
            showLineNumbers: !0,
            wrapLines: !0,
            customStyle: { background: "transparent" },
            children: null == n ? void 0 : n.trim(),
          }),
        });
      }
      function Video(e) {
        let { src: t, caption: n, maxWidth: o } = e;
        return (0, s.jsxs)("div", {
          className: _().video,
          style: { maxWidth: o },
          children: [
            (0, s.jsx)("video", {
              src: t,
              autoPlay: !0,
              muted: !0,
              controls: !0,
              loop: !0,
              playsInline: !0,
            }),
            n && (0, s.jsx)("caption", { children: n }),
          ],
        });
      }
      function Image(e) {
        let { src: t, ...n } = e;
        return (0, s.jsx)("div", {
          className: _().image,
          children: (0, s.jsx)("img", { src: t, ...n }),
        });
      }
      function SanityImage(e) {
        let { width: t, image: n } = e,
          o = (0, l.W6)(n);
        return (0, s.jsxs)("div", {
          className: _().image,
          style: { width: t || n.maxWidth || o.width || "100%" },
          children: [
            (0, s.jsx)(h(), { ...o, sizes: "100vw" }),
            n.caption && (0, s.jsx)("caption", { children: n.caption }),
          ],
        });
      }
      function ImageCollection(e) {
        let { value: t } = e,
          n = (null == t ? void 0 : t.images) || [];
        return (0, s.jsx)("div", {
          className: _().imageCollection,
          children: n.map((e) =>
            (0, s.jsx)(
              "div",
              {
                className: _().collectionImage,
                children: (0, s.jsx)(SanityImage, { width: "100%", image: e }),
              },
              e._key,
            ),
          ),
        });
      }
      var j = n(60777),
        v = n(73675),
        y = n.n(v);
      function CallToAction(e) {
        let {
          title: t = "Effortless Encryption for Developers",
          content:
            n = "The first encryption platform that allows you to encrypt, process, and share sensitive customer data - without touching it in plaintext.",
          buttonText: o = "Get Started",
          url: r = "https://app.evervault.com/register",
        } = e;
        return (0, s.jsx)("div", {
          className: y().callToAction,
          children: (0, s.jsxs)("div", {
            className: y().content,
            children: [
              (0, s.jsx)("h4", { className: y().title, children: t }),
              (0, s.jsx)("p", { className: y().text, children: n }),
              (0, s.jsx)(j.Z, { size: "large", href: r, children: o }),
            ],
          }),
        });
      }
      var f = n(56989),
        b = n(70132),
        N = n.n(b);
      function Callout(e) {
        let {
          content:
            t = "Quantum computation concerns a quantum physical theory of information and computation. In this brief post, we provide an overview of quantum computation and how it relates to cryptography and cryptanalysis.",
        } = e;
        return (0, s.jsxs)("div", {
          className: N().callout,
          children: [
            (0, s.jsx)("div", {
              className: N().icon,
              children: (0, s.jsx)(f.Z, { width: 20 }),
            }),
            (0, s.jsx)("div", { className: N().content, children: t }),
          ],
        });
      }
      var w = {
          p: Paragraph,
          h1: H1,
          h2: H2,
          h3: H3,
          h4: H4,
          h5: H5,
          h6: H6,
          a: Anchor,
          ul: UnorderedList,
          ol: OrderedList,
          strong: Strong,
          b: Strong,
          code: Code,
          inlineCode: Code,
          pre: (e) => {
            var t;
            let n =
                null === (t = e.children.props.className) || void 0 === t
                  ? void 0
                  : t.replace(/language-/, ""),
              o = e.children.props.children;
            return (0, s.jsx)(Pre, { language: n, code: o });
          },
          Video: Video,
          img: Image,
          Image: Image,
          hr: function (e) {
            return (0, s.jsx)("hr", { className: _().hr, ...e });
          },
          table: function (e) {
            return (0, s.jsx)("table", { className: _().table, ...e });
          },
          Quote: Quote,
          blockquote: Quote,
          CallToAction: CallToAction,
          Callout: Callout,
        },
        k = n(11151),
        C = n(27484),
        P = n.n(C),
        S = n(49438),
        A = n(6998),
        I = n.n(A),
        L = n(13913);
      function PortableTextTable(e) {
        let { data: t } = e;
        return (0, s.jsxs)("table", {
          className: _().table,
          children: [
            (0, s.jsx)("thead", {
              children: (0, s.jsx)("tr", {
                children: t.rows[0].cells.map((e, t) =>
                  (0, s.jsx)(
                    "th",
                    { children: e },
                    "th-".concat(e, "-").concat(t),
                  ),
                ),
              }),
            }),
            (0, s.jsx)("tbody", {
              children: t.rows.slice(1).map((e) => {
                let { _key: t, cells: n } = e;
                return (0, s.jsx)(
                  "tr",
                  {
                    children: n.map((e) =>
                      (0, s.jsx)(
                        "td",
                        { children: e },
                        "".concat(t, "-").concat(e),
                      ),
                    ),
                  },
                  t,
                );
              }),
            }),
          ],
        });
      }
      var T = {
          block: {
            h1: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(H1, { children: t });
            },
            h2: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(H2, { children: t });
            },
            h3: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(H3, { children: t });
            },
            h4: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(H4, { children: t });
            },
            h5: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(H5, { children: t });
            },
            h6: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(H6, { children: t });
            },
            normal: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(Paragraph, { children: t });
            },
            blockquote: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(Quote, { children: t });
            },
          },
          list: {
            bullet: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(UnorderedList, { children: t });
            },
            number: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(OrderedList, { children: t });
            },
          },
          marks: {
            link: (e) => {
              let { children: t, value: n } = e;
              return (0, s.jsxs)(Anchor, {
                href: n.href,
                children: [" ", t, " "],
              });
            },
            code: (e) => {
              let { children: t } = e;
              return (0, s.jsx)(Code, { children: t });
            },
          },
          types: {
            code: (e) => {
              let { value: t } = e;
              return (0, s.jsx)(Pre, { language: t.language, code: t.code });
            },
            youtube: (e) => {
              let { value: t } = e;
              return (0, s.jsx)("div", {
                className: _().youtube,
                children: (0, s.jsx)(L.Z, { videoId: I()(t.url) }),
              });
            },
            image: (e) =>
              e.value ? (0, s.jsx)(SanityImage, { image: e.value }) : null,
            imageCollection: (e) => (0, s.jsx)(ImageCollection, { ...e }),
            video: (e) => {
              let { value: t } = e,
                n = (0, l.BR)(t);
              return (0, s.jsx)(Video, {
                src: n.asset.url,
                caption: t.caption,
                maxWidth: t.maxWidth,
              });
            },
            callToAction: (e) => {
              let { value: t } = e;
              return (0, s.jsx)(CallToAction, {
                title: t.title,
                content: t.content,
                buttonText: t.buttonText,
                url: t.url,
              });
            },
            callout: (e) => {
              let { value: t } = e;
              return (0, s.jsx)(Callout, { content: t.content });
            },
            table: (e) => {
              let { value: t } = e;
              return (0, s.jsx)(PortableTextTable, { data: t });
            },
          },
        },
        B = n(5152),
        D = n.n(B),
        H = n(16893),
        M = n(92520),
        Z = n(53541),
        W = n.n(Z),
        E = n(67294);
      function AuthorDetails(e) {
        let { author: t } = e,
          n = (0, l.W6)(t.image, 200);
        return (0, s.jsxs)("div", {
          className: W().container,
          children: [
            t.image && (0, s.jsx)(h(), { className: W().avatar, ...n }),
            (0, s.jsx)("h5", {
              className: W().name,
              children: (0, s.jsx)("a", {
                href: t.twitter || "#",
                target: "_blank",
                rel: "noopener noreferrer",
                children: t.name,
              }),
            }),
            (0, s.jsx)("p", { className: W().role, children: t.role }),
            t.signature && (0, s.jsx)(Signature, { path: t.signature }),
          ],
        });
      }
      function Signature(e) {
        let { path: t } = e,
          n = (0, E.useRef)(null),
          o = (0, H.Y)(n);
        return (0, s.jsx)("svg", {
          ref: n,
          xmlns: "http://www.w3.org/2000/svg",
          width: "400",
          height: "120",
          fill: "none",
          viewBox: "0 0 400 120",
          children: (0, s.jsx)(M.E.path, {
            stroke: "#000",
            strokeLinecap: "round",
            strokeWidth: "2.5",
            animate: { opacity: o ? 1 : 0, pathLength: o ? 1 : 0 },
            transition: { delay: 0.2, duration: 2, ease: "easeInOut" },
            d: t,
          }),
        });
      }
      var F = n(15433),
        R = n(53219),
        z = n(94184),
        q = n.n(z),
        O = n(52490),
        Y = n(45510),
        J = n.n(Y),
        U = n(82701);
      function FeaturedAuthor(e) {
        var t;
        let { post: n } = e,
          { author: o } = n,
          r = (0, l.W6)(o.image, 500);
        return (0, s.jsxs)("div", {
          className: J().container,
          children: [
            (0, s.jsx)(h(), { className: J().image, ...r }),
            (0, s.jsxs)("div", {
              className: J().details,
              children: [
                (0, s.jsx)("h4", {
                  className: J().name,
                  children: (0, s.jsx)("a", {
                    href: o.twitter || "#",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: o.name,
                  }),
                }),
                (0, s.jsx)("h5", { className: J().role, children: o.role }),
                (0, s.jsx)("p", { className: J().bio, children: o.bio }),
                (null === (t = n.authorCta) || void 0 === t ? void 0 : t.url) &&
                  (0, s.jsxs)(j.Z, {
                    className: J().cta,
                    href: n.authorCta.url,
                    type: "secondary",
                    children: [n.authorCta.label, (0, s.jsx)(U.Z, {})],
                  }),
              ],
            }),
          ],
        });
      }
      var X = n(11163);
      let Q = D()(
        () =>
          Promise.all([n.e(5880), n.e(9772), n.e(3307), n.e(4584)]).then(
            n.bind(n, 74584),
          ),
        { loadableGenerated: { webpack: () => [74584] }, ssr: !1 },
      );
      function RenderMarkdown(e) {
        let { content: t, preview: n } = e;
        return n ? (0, s.jsx)(Q, { content: t }) : (0, s.jsx)(S.R, { ...t });
      }
      function BlogCover(e) {
        let { image: t } = e,
          n = (0, l.W6)(t);
        return (0, s.jsx)(h(), { className: _().cover, ...n });
      }
      function BlogLayout(e) {
        var t, n, o, r;
        let { post: a, preview: c } = e,
          m = (0, X.useRouter)(),
          h = (0, l.W6)(a.img),
          p = P()(a.publishedAt).format("MMMM DD, YYYY"),
          g = a.categories || [];
        return (0, s.jsx)(d.Z, {
          title: "".concat(a.title, " — Blog — evervault"),
          description: a.subtitle,
          socialImage: null == h ? void 0 : h.src,
          children: (0, s.jsxs)("div", {
            className: _().container,
            children: [
              (0, s.jsxs)(u(), {
                href: "#",
                onClick: (e) => {
                  e.preventDefault(), m.push("/blog");
                },
                className: _().backButton,
                children: [
                  (0, s.jsx)("div", {
                    className: _().backButtonIcon,
                    children: (0, s.jsx)(R.Z, {}),
                  }),
                  "Back",
                ],
              }),
              (0, s.jsxs)("article", {
                className: _().content,
                children: [
                  (0, s.jsxs)("ul", {
                    className: _().top,
                    children: [
                      (0, s.jsx)("li", { children: p }),
                      a.timeToRead &&
                        (0, s.jsx)("li", { children: a.timeToRead }),
                    ],
                  }),
                  (0, s.jsx)("h1", { className: _().title, children: a.title }),
                  a.img && (0, s.jsx)(BlogCover, { image: a.img }),
                  (0, s.jsxs)("div", {
                    className: _().meta,
                    children: [
                      (0, s.jsx)("div", {
                        className: _().metaDetail,
                        children: (0, s.jsxs)("div", {
                          className: _().author,
                          children: [
                            (null === (t = a.author) || void 0 === t
                              ? void 0
                              : t.image) &&
                              (0, s.jsx)("img", {
                                className: _().authorAvatar,
                                src: (0, l.PX)(a.author.image).url(),
                              }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("h5", {
                                  children: (0, s.jsx)("a", {
                                    href:
                                      (null === (n = a.author) || void 0 === n
                                        ? void 0
                                        : n.twitter) || "#",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children:
                                      null === (o = a.author) || void 0 === o
                                        ? void 0
                                        : o.name,
                                  }),
                                }),
                                (0, s.jsx)("p", {
                                  children:
                                    null === (r = a.author) || void 0 === r
                                      ? void 0
                                      : r.role,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      g.length > 0 &&
                        (0, s.jsxs)("div", {
                          className: q()(_().metaDetail, _().categories),
                          children: [
                            (0, s.jsx)("h5", { children: "Categories" }),
                            (0, s.jsx)("p", {
                              children: g.map((e) =>
                                (0, s.jsx)(
                                  u(),
                                  {
                                    className: _().category,
                                    href: "/blog?category=".concat(
                                      e.slug,
                                      "#posts",
                                    ),
                                    children: e.name,
                                  },
                                  e.slug,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: _().prose,
                    children: (0, s.jsx)(k.Zo, {
                      components: w,
                      children: a.portableTextContent
                        ? (0, s.jsx)(i.YI, {
                            value: a.portableTextContent,
                            components: T,
                          })
                        : (0, s.jsx)(RenderMarkdown, {
                            content: a.content,
                            preview: c,
                          }),
                    }),
                  }),
                  a.author &&
                    (a.featuredAuthor
                      ? (0, s.jsx)(FeaturedAuthor, { post: a })
                      : (0, s.jsx)(AuthorDetails, { author: a.author })),
                ],
              }),
              (0, s.jsx)("h4", {
                className: _().relatedTitle,
                children: "Related Posts",
              }),
              (0, s.jsx)("div", {
                className: _().postFooter,
                children: (0, s.jsx)("div", {
                  className: _().relatedPosts,
                  children: a.relatedPosts.map((e) => {
                    var t;
                    return (0, s.jsx)(
                      O.Z,
                      { children: (0, s.jsx)(F.Z, { post: e }) },
                      e.title ||
                        (null === (t = e.slug) || void 0 === t
                          ? void 0
                          : t.current),
                    );
                  }),
                }),
              }),
            ],
          }),
        });
      }
      function _templateObject() {
        let e = (0, o._)([
          '*[_type == "post" && slug.current == $page][0]{\n  slug, img, title, subtitle, publishedAt, content, portableTextContent, authorCta, featuredAuthor,\n  author->,\n  categories[]->,\n  "relatedPosts": *[_type == "post" && count(categories[@._ref in ^.^.categories[]._ref]) > 0 && slug.current != $page] | order(publishedAt desc, _createdAt desc) [0..1] {\n    title,\n    subtitle,\n    slug,\n    img,\n    publishedAt,\n    author->\n  }\n}',
        ]);
        return (
          (_templateObject = function () {
            return e;
          }),
          e
        );
      }
      function Article(e) {
        let { post: t, preview: n } = e;
        return (0, s.jsx)(BlogLayout, { post: t, preview: n });
      }
      function PreviewPost(e) {
        let { queryParams: t } = e,
          n = (0, l.uL)(null, V, t);
        return (0, s.jsx)(Article, { post: n, preview: !0 });
      }
      var G = !0;
      function PostPage(e) {
        let { post: t, preview: n, queryParams: o } = e;
        return n
          ? (0, s.jsx)(a.Dz, {
              fallback: (0, s.jsx)("div", { children: "Loading..." }),
              children: (0, s.jsx)(PreviewPost, { queryParams: o }),
            })
          : t
            ? (0, s.jsx)(Article, { post: t })
            : null;
      }
      let V = (0, r.Z)(_templateObject());
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
    78272: function (e, t, n) {
      "use strict";
      n.d(t, {
        BR: function () {
          return sanityFile;
        },
        PX: function () {
          return sanityImage;
        },
        W6: function () {
          return useSanityImage;
        },
        uL: function () {
          return h;
        },
      });
      var o = n(47613),
        s = n(93725),
        r = n(6803),
        a = n.n(r),
        l = n(81548),
        i = n(61979);
      let c = "r000fwn3",
        u = "production",
        d = { projectId: c, dataset: u, apiVersion: "2022-09-28", useCdn: !1 },
        m = (0, o.eI)(d),
        h = (0, s.R2)({
          projectId: c,
          dataset: u,
          onPublicAccessOnly: function () {
            throw Error("Unable to load preview as you're not logged in");
          },
        }),
        p = a()(m);
      function sanityImage(e) {
        return p.image(e);
      }
      function sanityFile(e) {
        return (0, l.hn)(e, d);
      }
      function useSanityImage(e, t) {
        return (0, i.J)(m, e, { imageBuilder: (e) => e.width(t) });
      }
    },
    67233: function (e) {
      e.exports = {
        image: "styles_image__M_kUo",
        author: "styles_author__7UX2M",
      };
    },
    49277: function (e) {
      e.exports = {
        cell: "styles_cell__zizwl",
        border: "styles_border__SFmKt",
        joint: "styles_joint__sEJDX",
      };
    },
    45510: function (e) {
      e.exports = {
        container: "styles_container__6pYD3",
        image: "styles_image__Xi6Zc",
        details: "styles_details__nACWC",
        name: "styles_name__XxG_S",
        role: "styles_role__ZuhWc",
        bio: "styles_bio__ihNo9",
        cta: "styles_cta__7c9hs",
      };
    },
    53541: function (e) {
      e.exports = {
        container: "AuthorDetails_container__lLsD3",
        avatar: "AuthorDetails_avatar__vli9m",
        name: "AuthorDetails_name__2CioD",
        role: "AuthorDetails_role__zwkDG",
      };
    },
    73675: function (e) {
      e.exports = {
        callToAction: "styles_callToAction__Zq9JZ",
        content: "styles_content__Z0VJK",
        title: "styles_title__6AI1i",
        text: "styles_text__maSZD",
      };
    },
    70132: function (e) {
      e.exports = {
        callout: "styles_callout__SdpPs",
        icon: "styles_icon__0W9wc",
      };
    },
    59994: function (e) {
      e.exports = {
        container: "styles_container__mUoL5",
        backButton: "styles_backButton__bWxmR",
        backButtonIcon: "styles_backButtonIcon__Mk53y",
        content: "styles_content__x_xxV",
        title: "styles_title__2fs0m",
        cover: "styles_cover__DlD3i",
        top: "styles_top__S5lda",
        topDetail: "styles_topDetail__SIAb2",
        meta: "styles_meta__4rGpM",
        metaDetail: "styles_metaDetail__Qkl4K",
        categories: "styles_categories__TrPpu",
        category: "styles_category__3QPAq",
        author: "styles_author__4rrPH",
        authorAvatar: "styles_authorAvatar__M18K2",
        paragraph: "styles_paragraph__nJwDC",
        bold: "styles_bold__9nCog",
        link: "styles_link__mS_BL",
        heading: "styles_heading__cjbxP",
        codeBlock: "styles_codeBlock__J8wXK",
        image: "styles_image__MFlZ3",
        video: "styles_video__B9mI7",
        list: "styles_list__gnUVb",
        inlineCode: "styles_inlineCode__Igbcs",
        quote: "styles_quote__Pt1B3",
        quoteAuthor: "styles_quoteAuthor__hCLlc",
        quoteRole: "styles_quoteRole__13N7s",
        hr: "styles_hr__6whF6",
        table: "styles_table__V_HJh",
        prose: "styles_prose__ZfM0Q",
        postFooter: "styles_postFooter__XlfFy",
        relatedTitle: "styles_relatedTitle__EBQ65",
        relatedPosts: "styles_relatedPosts__hgBrl",
        imageCollection: "styles_imageCollection__kesNr",
        collectionImage: "styles_collectionImage__G4XQw",
      };
    },
    218: function (e) {
      e.exports = {
        row: "Post_row__Lriyj",
        post: "Post_post__4FUo0",
        postTitle: "Post_postTitle__0t1R_",
        cover: "Post_cover__EU_B0",
        pixels: "Post_pixels__cztEC",
        postImage: "Post_postImage__ev2Fe",
        postContent: "Post_postContent__3iR1H",
        meta: "Post_meta__JNeen",
        postSubTitle: "Post_postSubTitle__Zg4WY",
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
  },
  function (e) {
    e.O(0, [1140, 8764, 9663, 947, 5619, 9774, 2888, 179], function () {
      return e((e.s = 48535));
    }),
      (_N_E = e.O());
  },
]);
