(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9195],
  {
    57286: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/blog",
        function () {
          return n(89424);
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
        i = n(25675),
        r = n.n(i),
        a = n(67233),
        l = n.n(a);
      function Author(e) {
        let { author: t, variant: n } = e,
          i = (0, s.W6)(null == t ? void 0 : t.image);
        return (0, o.jsxs)("div", {
          className: l().author,
          "data-variant": n,
          children: [
            "By",
            (0, o.jsx)(r(), { ...i, className: l().image }),
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
        i = n.n(s);
      function Cell(e) {
        let { children: t, className: n, onClick: s, dark: r = !1 } = e,
          a = [i().cell, n].filter(Boolean).join(" ");
        return (0, o.jsxs)("div", {
          className: a,
          "data-dark": r,
          onClick: s,
          children: [
            (0, o.jsx)("div", {
              className: i().border,
              "data-position": "top",
            }),
            (0, o.jsx)("div", {
              className: i().border,
              "data-position": "right",
            }),
            (0, o.jsx)("div", {
              className: i().border,
              "data-position": "bottom",
            }),
            (0, o.jsx)("div", {
              className: i().border,
              "data-position": "left",
            }),
            (0, o.jsx)("div", {
              className: i().joint,
              "data-position": "top-left",
            }),
            (0, o.jsx)("div", {
              className: i().joint,
              "data-position": "top-right",
            }),
            (0, o.jsx)("div", {
              className: i().joint,
              "data-position": "bottom-right",
            }),
            (0, o.jsx)("div", {
              className: i().joint,
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
        i = n.n(s),
        r = n(218),
        a = n.n(r),
        l = n(25675),
        u = n.n(l),
        c = n(57178),
        d = n(78272),
        m = n(6155),
        p = n(11163);
      function Post(e) {
        let { post: t } = e,
          n = (0, p.useRouter)(),
          s = (0, d.W6)(t.img, 1e3);
        return (0, o.jsxs)("div", {
          className: a().post,
          onClick: () => {
            n.push("/blog/".concat(t.slug.current));
          },
          children: [
            (0, o.jsx)("div", {
              className: a().cover,
              children: (0, o.jsx)(c.f, {
                ratio: 16 / 9,
                children: (0, o.jsx)(u(), { className: a().postImage, ...s }),
              }),
            }),
            (0, o.jsxs)("div", {
              className: a().postContent,
              children: [
                (0, o.jsx)("div", {
                  className: a().joint,
                  "data-position": "top-right",
                }),
                (0, o.jsx)("div", {
                  className: a().joint,
                  "data-position": "bottom-right",
                }),
                (0, o.jsxs)("ul", {
                  className: a().meta,
                  children: [
                    (0, o.jsx)("li", {
                      children: i()(t.publishedAt).format("DD MMMM YYYY"),
                    }),
                    (0, o.jsx)("li", { children: t.timeToRead }),
                  ],
                }),
                (0, o.jsx)("h4", {
                  className: a().postTitle,
                  children: t.title,
                }),
                (0, o.jsx)("p", {
                  className: a().postSubTitle,
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
        i = n.n(s),
        r = n(4298),
        a = n.n(r),
        l = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        u = n(12034),
        c = n.n(u),
        d = n(41664),
        m = n.n(d);
      function Layout(e) {
        let {
          children: t,
          preview: n,
          title:
            s = "evervault — Developer building blocks for data security and compliance",
          description:
            r = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: u = "https://evervault.com/social/og.jpg",
          head: d,
          ...p
        } = e;
        return (0, o.jsxs)("div", {
          className: c().layout,
          ...p,
          children: [
            (0, o.jsxs)(i(), {
              children: [
                (0, o.jsx)("title", { children: s }),
                (0, o.jsx)("meta", { name: "description", content: r }),
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
                (0, o.jsx)("meta", { property: "og:description", content: r }),
                (0, o.jsx)("meta", { property: "og:image", content: u }),
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
                (0, o.jsx)("meta", { name: "twitter:description", content: r }),
                (0, o.jsx)("meta", { name: "twitter:image", content: u }),
                (0, o.jsx)("meta", { name: "twitter:image:alt", content: s }),
                (0, o.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(l) },
                }),
                (0, o.jsx)(a(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                d,
              ],
            }),
            n &&
              (0, o.jsxs)("div", {
                className: c().preview,
                children: [
                  (0, o.jsx)("p", { children: "You are in preview mode" }),
                  (0, o.jsx)(m(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, o.jsx)("main", { className: c().main, children: t }),
          ],
        });
      }
    },
    89424: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSG: function () {
            return I;
          },
          default: function () {
            return Blog;
          },
        });
      var o = n(85893),
        s = n(27484),
        i = n.n(s),
        r = n(67294),
        a = n(39892),
        l = n(45287),
        u = n.n(l),
        c = n(41664),
        d = n.n(c),
        m = n(92520),
        p = n(1555),
        h = n.n(p),
        v = n(78272),
        _ = n(25675),
        x = n.n(_),
        f = n(6155),
        g = n(60777),
        j = n(15029),
        y = n(38715),
        w = n(99477),
        b = n(3271);
      let MovingSquaresShader = (e) => {
        let {
            spacing: t = 0.15,
            pointSize: n = 5,
            maxOpacity: s = 0.7,
            speed: i = 0.8,
            glowSize: a = 3.5,
            glowPointSize: l = 16,
            pointColor: u = "#b99eff",
            glowColor: c = "#b637de",
          } = e,
          d = (0, b.M4)({
            spacing: { value: t, min: 0.05, max: 0.3, step: 0.01 },
            pointSize: { value: n, min: 5, max: 40, step: 1 },
            maxOpacity: { value: s, min: 0.1, max: 1, step: 0.1 },
            speed: { value: i, min: 0.1, max: 2, step: 0.1 },
            glowSize: { value: a, min: 0.5, max: 5, step: 0.5 },
            glowPointSize: { value: l, min: 5, max: 50, step: 1 },
            pointColor: { value: u },
            glowColor: { value: c },
          }),
          m = (0, r.useRef)(null),
          p = (0, r.useRef)(null),
          h = (0, r.useRef)(null),
          v = { width: 500, height: 500 },
          _ = v.width * v.height,
          x = (0, r.useRef)([0, 0]),
          f = (0, r.useRef)([window.innerWidth, window.innerHeight]);
        (0, r.useEffect)(() => {
          let e = document.getElementById("pixels"),
            handleMouseMove = (t) => {
              let n = e.getBoundingClientRect(),
                o = n.top + document.body.scrollTop,
                s = n.left + document.body.scrollLeft,
                i = ((t.clientX - s) / e.clientWidth) * 2 - 1,
                r = -(2 * ((t.clientY - o) / e.clientHeight)) + 1;
              x.current = [i, r];
            },
            handleResize = () => {
              (e = document.getElementById("pixels")),
                (f.current = [window.innerWidth, window.innerHeight]);
            };
          return (
            window.addEventListener("mousemove", handleMouseMove),
            window.addEventListener("resize", handleResize),
            () => {
              window.removeEventListener("mousemove", handleMouseMove),
                window.removeEventListener("resize", handleResize);
            }
          );
        }, []);
        let g = (0, r.useMemo)(() => {
          let e = new Float32Array(3 * _),
            t = new Float32Array(_),
            n = 0;
          for (let o = 0; o < v.width; o++)
            for (let s = 0; s < v.height; s++) {
              let i = o * d.spacing - v.width * d.spacing * 0.5,
                r = s * d.spacing - v.height * d.spacing * 0.5;
              (e[3 * n] = i),
                (e[3 * n + 1] = r),
                (e[3 * n + 2] = 0),
                (t[n] = Math.random() * Math.PI * 2),
                n++;
            }
          return [e, t];
        }, [v, _, d.spacing]);
        return (
          (0, r.useEffect)(() => {
            var e, t;
            null === (e = h.current) ||
              void 0 === e ||
              e.setAttribute("position", new w.BufferAttribute(g[0], 3)),
              null === (t = h.current) ||
                void 0 === t ||
                t.setAttribute("alpha", new w.BufferAttribute(g[1], 1));
          }, [g]),
          (0, y.A)((e) => {
            let { clock: t } = e;
            p.current &&
              ((p.current.uniforms.uTime.value = t.getElapsedTime()),
              (p.current.uniforms.uSpeed.value = d.speed),
              (p.current.uniforms.uPointSize.value = d.pointSize),
              (p.current.uniforms.uColor.value = new w.Color(d.pointColor)),
              (p.current.uniforms.uGlowColor.value = new w.Color(d.glowColor)),
              (p.current.uniforms.uMaxOpacity.value = d.maxOpacity),
              (p.current.uniforms.uMouse.value = new w.Vector2(
                x.current[0],
                x.current[1],
              )),
              (p.current.uniforms.uResolution.value = new w.Vector2(
                f.current[0],
                f.current[1],
              )),
              (p.current.uniforms.uGlowSize.value = d.glowSize),
              (p.current.uniforms.uGlowPointSize.value = d.glowPointSize));
          }),
          (0, o.jsxs)("points", {
            ref: m,
            children: [
              (0, o.jsx)("bufferGeometry", { ref: h, attach: "geometry" }),
              (0, o.jsx)("shaderMaterial", {
                ref: p,
                attach: "material",
                args: [
                  {
                    vertexShader:
                      "\n  varying float vAlpha;\n  varying float vDistance;\n  attribute float alpha;\n  uniform float uTime;\n  uniform float uPointSize;\n  uniform vec3 uColor;\n  uniform vec2 uMouse;\n  uniform vec2 uResolution;\n  uniform float uGlowSize;\n  uniform float uGlowPointSize;\n\n  void main() {\n    vec3 pos = position;\n    vAlpha = alpha;\n\n    vec4 screenPos = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n    vec2 screenPosXY = screenPos.xy / screenPos.w;\n\n    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);\n    vec2 adjustedMouse = uMouse * aspectRatio;\n    vec2 adjustedPos = screenPosXY * aspectRatio;\n    float distance = length(adjustedMouse - adjustedPos);\n\n    float glowSize = 5.0 - uGlowSize;\n    float pointSizeFactor = 1.0 - clamp(distance * glowSize, 0.0, 1.0);\n    vDistance = pointSizeFactor;\n\n    gl_PointSize = uPointSize + (pointSizeFactor * uGlowPointSize);\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n  }\n",
                    fragmentShader:
                      "\n  varying float vAlpha;\n  varying float vDistance;\n  uniform float uTime;\n  uniform float uSpeed;\n  uniform vec2 uMouse;\n  uniform vec3 uColor;\n  uniform vec3 uGlowColor;\n  uniform float uMaxOpacity;\n\n  void main() {\n    float a = mod(vAlpha + (uTime * uSpeed), uMaxOpacity);\n    vec3 color = mix(uColor, uGlowColor, vDistance);\n    gl_FragColor = vec4(color, a);\n  }\n",
                    uniforms: {
                      uTime: { value: 0 },
                      uSpeed: { value: d.speed },
                      uMouse: {
                        value: new w.Vector2(x.current[0], x.current[1]),
                      },
                      uPointSize: { value: d.pointSize },
                      uColor: { value: new w.Color(d.pointColor) },
                      uGlowColor: { value: new w.Color(d.glowColor) },
                      uGlowSize: { value: d.glowSize },
                      uGlowPointSize: { value: d.glowPointSize },
                      uMaxOpacity: { value: d.maxOpacity },
                      uResolution: {
                        value: new w.Vector2(f.current[0], f.current[1]),
                      },
                    },
                    transparent: !0,
                    depthWrite: !1,
                  },
                ],
                vertexColors: !0,
              }),
            ],
          })
        );
      };
      function Pixels(e) {
        let [t, n] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
          n(!0);
        }, []),
        t)
          ? (0, o.jsx)(j.Xz, {
              id: "pixels",
              dpr: Math.max(window.devicePixelRatio, 2),
              camera: { position: [0, 0, 5] },
              children: (0, o.jsx)(MovingSquaresShader, { ...e }),
            })
          : null;
      }
      var S = n(35800);
      function FeaturedPost(e) {
        let { post: t } = e,
          n = (0, v.W6)(t.img, 1200);
        return (0, o.jsxs)("div", {
          className: h().hero,
          children: [
            (0, o.jsxs)("div", {
              className: h().container,
              children: [
                (0, o.jsxs)("div", {
                  className: h().content,
                  children: [
                    (0, o.jsxs)("ul", {
                      className: h().meta,
                      children: [
                        (0, o.jsx)("li", {
                          children: i()(t.publishedAt).format("DD MMMM YYYY"),
                        }),
                        (0, o.jsx)("li", { children: t.timeToRead }),
                      ],
                    }),
                    (0, o.jsx)("h1", {
                      className: h().title,
                      children: (0, o.jsx)(d(), {
                        href: "/blog/".concat(t.slug.current),
                        children: t.title,
                      }),
                    }),
                    (0, o.jsx)("p", {
                      className: h().subtitle,
                      children: t.subtitle,
                    }),
                    (0, o.jsx)(f.S, { author: t.author, variant: "dark" }),
                    (0, o.jsx)(g.Z, {
                      size: "large",
                      className: h().button,
                      href: "/blog/".concat(t.slug.current),
                      children: "Read More",
                    }),
                  ],
                }),
                (0, o.jsx)("div", {
                  className: h().cover,
                  children: (0, o.jsx)(d(), {
                    href: "/blog/".concat(t.slug.current),
                    children: (0, o.jsx)(x(), { ...n }),
                  }),
                }),
              ],
            }),
            (0, o.jsx)(S.ErrorBoundary, {
              fallback: (0, o.jsx)("div", {}),
              children: (0, o.jsx)(m.E.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.25, duration: 0.25 },
                className: h().pixels,
                children: (0, o.jsx)(Pixels, {}),
              }),
            }),
          ],
        });
      }
      var N = n(15433),
        P = n(93725),
        C = n(27893),
        M = n.n(C),
        z = n(11163);
      function randomChars(e) {
        return Array.from({ length: e }, () =>
          String.fromCharCode(Math.floor(26 * Math.random()) + 97),
        ).join("");
      }
      function Filter(e) {
        let { children: t, active: n, onClick: s } = e,
          {
            chars: i,
            scramble: a,
            cancel: l,
          } = (function (e) {
            let [t, n] = (0, r.useState)({ prefix: e, suffix: "" }),
              o = (0, r.useCallback)(() => {
                n({ prefix: "", suffix: randomChars(e.length) });
                let t = setInterval(() => {
                  n((n) => {
                    let { prefix: o } = n,
                      s = e.charAt(o.length);
                    return "" === s
                      ? (clearInterval(t), n)
                      : {
                          prefix: o + s,
                          suffix: randomChars(e.length - 1 - o.length),
                        };
                  });
                }, 50);
                return () => clearInterval(t);
              }, [e]),
              s = (0, r.useCallback)(() => {
                n({ prefix: e, suffix: "" });
              }, [e]);
            return { chars: t, scramble: o, cancel: s };
          })(t);
        return (
          (0, r.useEffect)(() => (n && a(), l), [n]),
          (0, o.jsxs)("div", {
            className: M().filter,
            "data-active": n,
            onClick: s,
            children: [
              n &&
                (0, o.jsx)(m.E.div, {
                  layoutId: "indicator",
                  className: M().indicator,
                }),
              (0, o.jsx)("span", { className: M().prefix, children: i.prefix }),
              (0, o.jsx)("span", { className: M().suffix, children: i.suffix }),
            ],
          })
        );
      }
      function Filters(e) {
        let { categories: t } = e,
          n = (0, z.useRouter)(),
          s = n.query.category || null,
          setCategory = (e) => {
            n.replace(
              { pathname: n.pathname, query: { ...n.query, category: e } },
              void 0,
              { scroll: !1 },
            );
          },
          i = t.sort((e, t) => t.order - e.order);
        return (0, o.jsxs)("div", {
          className: M().filters,
          children: [
            (0, o.jsx)(Filter, {
              active: !s,
              onClick: () => setCategory(null),
              children: "All",
            }),
            i.map((e) =>
              (0, o.jsx)(
                Filter,
                {
                  active: s === e.slug,
                  onClick: () => setCategory(e.slug),
                  children: e.name,
                },
                e.slug,
              ),
            ),
          ],
        });
      }
      var E = n(11544),
        L = n(37825),
        k = n(32454),
        F = n.n(k),
        R = n(74221),
        B = n(52490),
        T = n(87764);
      let Search = (e) => {
        let { open: t, setOpen: n, posts: s } = e,
          i = (0, z.useRouter)(),
          [a, l] = (0, r.useState)(""),
          [u, c] = (0, r.useState)("");
        (0, r.useEffect)(() => {
          let down = (e) => {
            "k" === e.key && e.metaKey && n((e) => !e);
          };
          return (
            document.addEventListener("keydown", down),
            () => document.removeEventListener("keydown", down)
          );
        }, []);
        let d = (0, r.useMemo)(
            () => new R.Z(s, { keys: ["title", "subtitle", "author.name"] }),
            [s],
          ),
          p = (0, r.useMemo)(() => {
            if (!u) return s.slice(0, 10);
            let e = d.search(u);
            return e.map((e) => e.item);
          }, [d, u]),
          h = (0, r.useMemo)(() => s.find((e) => e.slug.current === a), [a, s]),
          openPost = (e) => {
            i.push("/blog/".concat(e.slug.current));
          };
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(E.M, {
              children:
                t &&
                (0, o.jsx)(m.E.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: { duration: 0.2 },
                  className: F().overlay,
                }),
            }),
            (0, o.jsx)(L.mY.Dialog, {
              value: a,
              onValueChange: (e) => {
                l(e || "");
              },
              shouldFilter: !1,
              className: F().dialog,
              open: t,
              onOpenChange: n,
              label: "Global Command Menu",
              children:
                t &&
                (0, o.jsxs)(m.E.div, {
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.2 },
                  className: F().window,
                  children: [
                    (0, o.jsxs)("div", {
                      className: F().input,
                      children: [
                        (0, o.jsx)(T.Z, {}),
                        (0, o.jsx)(L.mY.Input, {
                          autoFocus: !0,
                          placeholder: "Search for a post...",
                          value: u,
                          onValueChange: c,
                        }),
                      ],
                    }),
                    (0, o.jsx)(L.mY.List, {
                      children: (0, o.jsxs)("div", {
                        className: F().list,
                        children: [
                          (0, o.jsx)(B.Z, {
                            className: F().results,
                            children: (0, o.jsxs)("div", {
                              className: F().scroll,
                              children: [
                                p.map((e) => {
                                  var t, n, s;
                                  return (0, o.jsxs)(
                                    L.mY.Item,
                                    {
                                      onSelect: () => openPost(e),
                                      className: F().item,
                                      value:
                                        (null === (t = e.slug) || void 0 === t
                                          ? void 0
                                          : t.current) || e.title,
                                      children: [
                                        (0, o.jsx)("h4", { children: e.title }),
                                        (0, o.jsxs)("h6", {
                                          children: [
                                            "by ",
                                            null === (n = e.author) ||
                                            void 0 === n
                                              ? void 0
                                              : n.name,
                                          ],
                                        }),
                                      ],
                                    },
                                    (null === (s = e.slug) || void 0 === s
                                      ? void 0
                                      : s.current) || e.title,
                                  );
                                }),
                                0 === p.length &&
                                  (0, o.jsxs)("div", {
                                    className: F().empty,
                                    children: [
                                      (0, o.jsx)("h4", {
                                        children: "No results found",
                                      }),
                                      (0, o.jsx)("p", {
                                        children:
                                          "Try searching for something else",
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                          (0, o.jsx)(B.Z, {
                            className: F().preview,
                            children: h && (0, o.jsx)(N.Z, { post: h }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            }),
          ],
        });
      };
      function Posts(e) {
        let { posts: t, categories: n } = e,
          s = (0, z.useRouter)(),
          i = t[0],
          [a, l] = (0, r.useState)(!1),
          c = (0, r.useMemo)(() => {
            let e = t.slice(1),
              n = s.query.category;
            return n
              ? e.filter((e) => (e.categories || []).some((e) => e.slug === n))
              : e;
          }, [s.query, t]);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(FeaturedPost, { post: i }),
            (0, o.jsx)("div", {
              className: u().main,
              id: "posts",
              children: (0, o.jsxs)("div", {
                className: u().container,
                children: [
                  (0, o.jsxs)("div", {
                    className: u().sidebar,
                    children: [
                      (0, o.jsxs)("button", {
                        className: u().searchButton,
                        onClick: () => l(!0),
                        children: [(0, o.jsx)(T.Z, {}), "Search"],
                      }),
                      (0, o.jsx)(Search, { posts: t, open: a, setOpen: l }),
                      (0, o.jsx)(Filters, { categories: n }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: u().posts,
                    children: (0, o.jsx)("div", {
                      className: u().grid,
                      children: c.map((e) =>
                        (0, o.jsx)(
                          B.Z,
                          { children: (0, o.jsx)(N.Z, { post: e }) },
                          e.title,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function PreviewPosts(e) {
        let { categories: t } = e,
          n = (0, v.uL)(
            null,
            '*[_type == "post" ] | order(publishedAt desc) { author->, categories[]->, slug, img, title, subtitle, publishedAt, content, portableTextContent }',
          );
        return (0, o.jsx)(Posts, { posts: n, categories: t });
      }
      var I = !0;
      function Blog(e) {
        let { preview: t, posts: n, categories: s } = e,
          r = i()(),
          l = n.filter((e) => i()(e.publishedAt).isBefore(r));
        return (0, o.jsx)(a.Z, {
          title: "Blog — evervault",
          preview: t,
          children: t
            ? (0, o.jsx)(P.Dz, {
                fallback: (0, o.jsx)("div", { children: "Loading..." }),
                children: (0, o.jsx)(PreviewPosts, { categories: s }),
              })
            : (0, o.jsx)(Posts, { posts: l, categories: s }),
        });
      }
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
          return p;
        },
      });
      var o = n(47613),
        s = n(93725),
        i = n(6803),
        r = n.n(i),
        a = n(81548),
        l = n(61979);
      let u = "r000fwn3",
        c = "production",
        d = { projectId: u, dataset: c, apiVersion: "2022-09-28", useCdn: !1 },
        m = (0, o.eI)(d),
        p = (0, s.R2)({
          projectId: u,
          dataset: c,
          onPublicAccessOnly: function () {
            throw Error("Unable to load preview as you're not logged in");
          },
        }),
        h = r()(m);
      function sanityImage(e) {
        return h.image(e);
      }
      function sanityFile(e) {
        return (0, a.hn)(e, d);
      }
      function useSanityImage(e, t) {
        return (0, l.J)(m, e, { imageBuilder: (e) => e.width(t) });
      }
    },
    67233: function (e) {
      e.exports = {
        image: "styles_image__M_kUo",
        author: "styles_author__7UX2M",
      };
    },
    45287: function (e) {
      e.exports = {
        main: "Blog_main__jPu13",
        container: "Blog_container__QIY_9",
        sidebar: "Blog_sidebar__ohXiL",
        grid: "Blog_grid__qMSvf",
        cover: "Blog_cover__fV5kT",
        postImage: "Blog_postImage___EtTT",
        postContent: "Blog_postContent__rgQ4H",
        meta: "Blog_meta__wB6rO",
        postTitle: "Blog_postTitle__hOQNb",
        postSubTitle: "Blog_postSubTitle__46Tbk",
        searchButton: "Blog_searchButton__L3NTp",
      };
    },
    49277: function (e) {
      e.exports = {
        cell: "styles_cell__zizwl",
        border: "styles_border__SFmKt",
        joint: "styles_joint__sEJDX",
      };
    },
    1555: function (e) {
      e.exports = {
        hero: "FeaturedPost_hero__85wpv",
        container: "FeaturedPost_container__gHs7n",
        title: "FeaturedPost_title__2FUhX",
        subtitle: "FeaturedPost_subtitle__tMdhe",
        content: "FeaturedPost_content__8d_GD",
        cover: "FeaturedPost_cover__8Nvdz",
        meta: "FeaturedPost_meta__SLlw_",
        button: "FeaturedPost_button___70yJ",
        glow: "FeaturedPost_glow__cDOYe",
        pixels: "FeaturedPost_pixels__pBVHk",
      };
    },
    27893: function (e) {
      e.exports = {
        filters: "styles_filters__JecgN",
        filter: "styles_filter__PbbT_",
        indicator: "styles_indicator___ulni",
        suffix: "styles_suffix__eb8I2",
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
    32454: function (e) {
      e.exports = {
        overlay: "styles_overlay__4RDa9",
        dialog: "styles_dialog__naEkC",
        window: "styles_window__Lxzsb",
        input: "styles_input___v0Nv",
        list: "styles_list__ARY1X",
        results: "styles_results__pVxyO",
        scroll: "styles_scroll__Q4jqh",
        preview: "styles_preview__4RfoP",
        item: "styles_item__SaLCS",
        empty: "styles_empty__Qfv2p",
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
    e.O(0, [3737, 5029, 8764, 9663, 947, 8849, 9774, 2888, 179], function () {
      return e((e.s = 57286));
    }),
      (_N_E = e.O());
  },
]);
