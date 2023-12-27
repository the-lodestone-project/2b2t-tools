(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8001],
  {
    17346: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(84297);
      let o = (0, r.Z)("FileKey", [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2",
          },
        ],
        ["circle", { cx: "10", cy: "16", r: "2", key: "4ckbqe" }],
        ["path", { d: "m16 10-4.5 4.5", key: "7p3ebg" }],
        ["path", { d: "m15 11 1 1", key: "1bsyx3" }],
      ]);
    },
    75964: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return CodeTabs;
        },
      });
      var r = n(85893),
        o = n(94184),
        i = n.n(o),
        a = n(898),
        s = n.n(a);
      function CodeTabs(e) {
        let { tabs: t, onChange: n, value: o, className: a } = e,
          l = t.indexOf(o || t[0]);
        return (0, r.jsx)("div", {
          className: i()(s().container, a),
          children: (0, r.jsxs)("div", {
            className: s().tabs,
            children: [
              t.map((e, o) =>
                (0, r.jsx)(
                  "button",
                  {
                    className: i()(
                      s().tab,
                      l === o && s().active,
                      l + 1 === o && s().afterActive,
                      l - 1 === o && s().beforeActive,
                      0 === o && 0 !== l && s().firstActive,
                    ),
                    onClick: () => n && n(t[o]),
                    children: e,
                  },
                  e,
                ),
              ),
              (0, r.jsx)("div", {
                className: i()(
                  s().filler,
                  l === t.length - 1 && s().fillerAfterActive,
                ),
              }),
            ],
          }),
        });
      }
    },
    74098: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Container;
        },
      });
      var r = n(85893),
        o = n(94184),
        i = n.n(o),
        a = n(31555),
        s = n.n(a);
      function Container(e) {
        let { className: t, children: n, ...o } = e;
        return (0, r.jsx)("div", {
          className: i()(s().container, t),
          children: n,
        });
      }
    },
    24057: function (e, t, n) {
      "use strict";
      var r = n(85893),
        o = n(67294),
        i = n(68592),
        a = n.n(i);
      t.Z = (0, o.forwardRef)(function (e, t) {
        let { href: n, children: o } = e;
        return (0, r.jsxs)("a", {
          ref: t,
          className: a().learnMore,
          href: n,
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            o,
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
                  className: a().chevronOne,
                  d: "M6 17L11 12 6 7",
                }),
                (0, r.jsx)("path", {
                  className: a().chevronTwo,
                  d: "M13 17L18 12 13 7",
                }),
              ],
            }),
          ],
        });
      });
    },
    425: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return EncryptFileDiagram;
        },
      });
      var r = n(85893),
        o = n(68896),
        i = n.n(o),
        a = n(99477),
        s = n(74084),
        l = n.n(s),
        c = n(67294),
        d = n(15029),
        _ = n(38715),
        u = n(26695);
      function EncryptedFile() {
        let [e, t] = (0, c.useState)(!1);
        if (
          ((0, c.useEffect)(() => {
            t(!0);
          }, []),
          e)
        )
          return (0, r.jsxs)("div", {
            className: l().container,
            children: [
              (0, r.jsx)(u.Z.PassportScan, {}),
              (0, r.jsx)("div", {
                className: l().particles,
                children: (0, r.jsx)(d.Xz, {
                  dpr: Math.min(window.devicePixelRatio, 2),
                  style: { width: "100%" },
                  children: (0, r.jsx)(Particles, {}),
                }),
              }),
              (0, r.jsx)(u.Z.Encrypted, {
                name: "passport.ev",
                size: "2.4 MB",
              }),
            ],
          });
      }
      function Particles() {
        let e = (0, c.useRef)();
        (0, _.A)((t) => {
          let { clock: n } = t,
            r = e.current;
          r.uniforms.uTime.value = n.getElapsedTime();
        });
        let { geometry: t } = (0, c.useMemo)(() => {
            let e = new Float32Array(1050),
              t = new Float32Array(350),
              n = new Float32Array(350),
              r = new Float32Array(350),
              o = new Float32Array(350);
            for (let i = 0; i < 350; i++)
              (e[3 * i] = -0.5),
                (e[3 * i + 1] = Math.random() - 0.5),
                (e[3 * i + 2] = 0),
                (t[i] = randomFloatBetween(0.3, 1)),
                (n[i] = randomFloatBetween(1, 12) * window.devicePixelRatio),
                (r[i] = randomFloatBetween(1, 20)),
                (o[i] = randomFloatBetween(0, 1));
            let i = new a.BufferGeometry();
            return (
              i.setAttribute("position", new a.BufferAttribute(e, 3)),
              i.setAttribute("velocity", new a.BufferAttribute(t, 1)),
              i.setAttribute("size", new a.BufferAttribute(n, 1)),
              i.setAttribute("delay", new a.BufferAttribute(r, 1)),
              i.setAttribute("random", new a.BufferAttribute(o, 1)),
              { geometry: i }
            );
          }, []),
          n = (0, c.useMemo)(
            () => ({
              uTime: { value: 0 },
              uColor: { value: new a.Color("#A482FF") },
              uSpeed: { value: 0.3 },
            }),
            [],
          );
        return (0, r.jsxs)("points", {
          scale: [30, 7, 1],
          children: [
            (0, r.jsx)("bufferGeometry", { attach: "geometry", ...t }),
            (0, r.jsx)("shaderMaterial", {
              ref: e,
              vertexShader: f,
              fragmentShader: h,
              uniforms: n,
              transparent: !0,
              blending: a.AdditiveBlending,
            }),
          ],
        });
      }
      function randomFloatBetween(e, t) {
        return Math.random() * (t - e) + e;
      }
      let f =
          "\nuniform float uTime;\nuniform float uSpeed;\nattribute float random;\nattribute float size;\nattribute float velocity;\nattribute float delay;\nvarying float x;\nvarying float vRandom;\n\nfloat ease(float t) {\n  return t < 0.5\n    ? +8.0 * pow(t, 4.0)\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\n}\n\n\nvoid main() {\n    vec3 pos = position;\n\n    float t = ease(mod((uTime * velocity * uSpeed) - delay, 1.0));\n    pos.x = -0.5 + mod(t, 1.0);\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n    gl_PointSize = size + (abs(pos.x) * 10.0);\n    gl_PointSize *= (1.0 / - viewPosition.z);\n\n    x = pos.x;\n    vRandom = random;\n}\n",
        h =
          "\nvarying float x;\nvarying float vRandom;\nuniform float uTime;\nuniform vec3 uColor;\n\nvoid main() {\n  float distanceFromCenter = distance(gl_PointCoord, vec2(0.5));\n  if (distanceFromCenter > 0.5) {\n   discard;\n  }\n\n  vec3 color = mix(vec3(1.0), uColor, x * 2.5);\n  float opacity = 0.1 + vRandom;\n\n  gl_FragColor = vec4(color, opacity);\n}\n";
      var m = n(56190),
        p = n(77387),
        y = n(94184),
        v = n.n(y);
      function EncryptFileDiagram(e) {
        let { className: t } = e;
        return (0, r.jsxs)("div", {
          className: v()(i().codeFrame, t),
          children: [
            (0, r.jsx)("div", {
              className: i().frame,
              children: (0, r.jsx)(EncryptedFile, {}),
            }),
            (0, r.jsx)("div", {
              className: i().code,
              children: (0, r.jsx)(m.Z, {
                language: "javascript",
                style: p.Z,
                showLineNumbers: !0,
                wrapLines: !0,
                customStyle: { background: "transparent" },
                children:
                  "const evervault = new evervault(“TEAM”, “APP”);\n\ninput.addEventListener(“change”, async (e) => {\n  const file = e.target.files[0];\n  const encrypted = await evervault.encrypt(file);\n})",
              }),
            }),
          ],
        });
      }
    },
    26695: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var r = n(85893),
        o = n(67294),
        i = n(96072),
        a = n.n(i),
        s = n(70010),
        l = n(16893);
      function File(e) {
        let { name: t, size: n, children: o } = e;
        return (0, r.jsxs)("div", {
          className: a().file,
          children: [
            (0, r.jsx)("div", { className: a().filePreview, children: o }),
            (0, r.jsx)("h5", { children: t }),
            (0, r.jsx)("strong", { children: n }),
          ],
        });
      }
      function EncryptedText() {
        let e = (0, o.useRef)(),
          t = (0, l.Y)(e),
          [n, i] = (0, o.useState)((0, s.D)(100));
        return (
          (0, o.useEffect)(() => {
            if (!t) return;
            let e = setInterval(() => {
              i((0, s.D)(100));
            }, 200);
            return () => clearInterval(e);
          }, [t]),
          (0, r.jsx)("span", { ref: e, children: n })
        );
      }
      (File.PassportScan = function () {
        return (0, r.jsx)(File, {
          name: "passport.pdf",
          size: "2.4MB",
          children: (0, r.jsx)("div", {
            className: a().scan,
            children: (0, r.jsx)("img", {
              src: "/_next/static/media/scan.35762fb6.jpg",
            }),
          }),
        });
      }),
        (File.Encrypted = function (e) {
          let { name: t, size: n } = e;
          return (0, r.jsx)(File, {
            name: t,
            size: n,
            children: (0, r.jsx)("div", {
              className: a().encrypted,
              children: (0, r.jsx)(EncryptedText, {}),
            }),
          });
        });
      var c = File;
    },
    97789: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return StorageDiagram;
        },
      });
      var r = n(85893),
        o = n(50618),
        i = n(26695),
        a = n(68896),
        s = n.n(a),
        l = n(29405);
      function StorageDiagram() {
        let e = (0, o.Z)("(min-width: 768px)");
        return (0, r.jsx)("div", {
          className: s().nodes,
          children: (0, r.jsxs)(l.S, {
            direction: e ? "horizontal" : "vertical",
            children: [
              (0, r.jsxs)(l.S.Nodes, {
                children: [
                  (0, r.jsx)(l.S.Group, {
                    children: (0, r.jsx)(l.S.Node, {
                      id: "file",
                      children: (0, r.jsx)("div", {
                        style: { marginTop: e ? 30 : 10 },
                        children: (0, r.jsx)(i.Z.Encrypted, {
                          name: "passport.ev",
                          size: "2.4 MB",
                        }),
                      }),
                    }),
                  }),
                  (0, r.jsxs)(l.S.Group, {
                    children: [
                      (0, r.jsx)(l.S.Node, {
                        id: "aws",
                        style: { marginLeft: e ? -10 : 0 },
                        children: (0, r.jsx)(l.S.Service, {
                          payload: e && {
                            key: "file",
                            value: "passport.ev",
                            highlight: !0,
                          },
                          children: "Amazon S3",
                        }),
                      }),
                      e &&
                        (0, r.jsx)(l.S.Node, {
                          id: "google",
                          children: (0, r.jsx)(l.S.Service, {
                            payload: {
                              key: "file",
                              value: "passport.ev",
                              highlight: !0,
                            },
                            children: "Google Cloud",
                          }),
                        }),
                      (0, r.jsx)(l.S.Node, {
                        id: "azure",
                        style: { marginLeft: e ? -10 : 0 },
                        children: (0, r.jsx)(l.S.Service, {
                          payload: e && {
                            key: "file",
                            value: "passport.ev",
                            highlight: !0,
                          },
                          children: "Azure Blob",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(l.S.Connection, {
                nodes: ["file", "aws"],
                anchors: { file: "right", aws: "left" },
                children: (0, r.jsx)(l.S.Request, {
                  className: s().encryptedRequest,
                  duration: 1.5,
                  repeatDelay: 1.5,
                  ease: "easeOut",
                  delay: 1.5,
                }),
              }),
              e &&
                (0, r.jsx)(l.S.Connection, {
                  nodes: ["file", "google"],
                  anchors: { file: "right", google: "left" },
                  children: (0, r.jsx)(l.S.Request, {
                    className: s().encryptedRequest,
                    duration: 1.5,
                    repeatDelay: 1.5,
                    ease: "easeOut",
                    delay: 1.5,
                  }),
                }),
              (0, r.jsx)(l.S.Connection, {
                nodes: ["file", "azure"],
                anchors: { file: "right", azure: "left" },
                children: (0, r.jsx)(l.S.Request, {
                  className: s().encryptedRequest,
                  duration: 1.5,
                  repeatDelay: 1.5,
                  ease: "easeOut",
                  delay: 1.5,
                }),
              }),
            ],
          }),
        });
      }
    },
    3965: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return useEncryptedText;
        },
        s: function () {
          return useMounted;
        },
      });
      var r = n(67294),
        o = n(70010);
      function useMounted() {
        let [e, t] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            t(!0);
          }, []),
          e
        );
      }
      function useEncryptedText(e) {
        let [t, n] = (0, r.useState)(""),
          i = (0, r.useCallback)(() => {
            n((0, o.D)(e));
          }, [e]);
        return (
          (0, r.useEffect)(() => {
            i();
          }, [i]),
          { text: t, generate: i }
        );
      }
    },
    70010: function (e, t, n) {
      "use strict";
      function generateRandomCharacters(e) {
        let t = "",
          n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+$#!",
          r = n.length;
        for (let o = 0; o < e; o++)
          t += n.charAt(Math.floor(Math.random() * r));
        return "%EVENC".concat(t);
      }
      function randomFloatBetween(e, t) {
        return Math.random() * (t - e) + e;
      }
      n.d(t, {
        D: function () {
          return generateRandomCharacters;
        },
        n: function () {
          return randomFloatBetween;
        },
      });
    },
    32494: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return GradientHero;
        },
      });
      var r = n(85893),
        o = n(18120),
        i = n.n(o);
      function GradientHero(e) {
        let { children: t, className: n } = e,
          o = [i().hero, n].filter(Boolean).join(" ");
        return (0, r.jsx)("div", {
          className: o,
          children: (0, r.jsx)("div", { className: i().gradient, children: t }),
        });
      }
    },
    62654: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Testimonials;
        },
      });
      var r = n(85893),
        o = n(92520),
        i = n(13589),
        a = n(11544),
        s = n(98814),
        l = n(64998),
        c = n(94184),
        d = n.n(c),
        _ = n(67294),
        u = n(35182),
        f = n.n(u);
      function Testimonials(e) {
        let { testimonailsConfig: t, rotationMap: n, logos: c, onClick: u } = e,
          [h, m] = (0, _.useState)(0),
          decrypt = () => {
            let e = document.getElementById(t[h].id),
              n = t[h].quote,
              r = n.split(""),
              o = 0;
            !(function animate() {
              setTimeout(() => {
                let t = e.children[o];
                (t.style.opacity = 1),
                  (t.innerHTML = r[o]),
                  ++o < n.length && animate();
              }, 10);
            })();
          };
        return (0, r.jsx)("div", {
          className: f().container,
          children: (0, r.jsxs)("div", {
            className: f().maxWidthWrapper,
            children: [
              (0, r.jsx)("div", {
                className: f().logosContainer,
                children: (0, r.jsx)(o.E.img, {
                  initial: !1,
                  animate: { rotate: n[h] },
                  src: c,
                  className: f().logosWheel,
                  transition: { duration: 1.5, ease: "anticipate" },
                }),
              }),
              (0, r.jsxs)(i.S, {
                children: [
                  (0, r.jsx)(a.M, {
                    mode: "wait",
                    children: t.map((e, t) => {
                      let { encryptedQuote: n, id: i } = e;
                      return t !== h
                        ? null
                        : (0, r.jsx)(
                            o.E.h3,
                            {
                              className: f().quote,
                              id: i,
                              initial: { opacity: 0 },
                              whileInView: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.5 },
                              onAnimationComplete: decrypt,
                              children: n
                                .split("")
                                .map((e, t) =>
                                  (0, r.jsx)(
                                    "span",
                                    { className: f().character, children: e },
                                    t + e,
                                  ),
                                ),
                            },
                            i,
                          );
                    }),
                  }),
                  (0, r.jsx)(o.E.div, {
                    className: f().authors,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: t.map((e, n) => {
                      let { author: o, title: i } = e;
                      return (0, r.jsxs)(
                        "button",
                        {
                          onClick: u || (() => m(n)),
                          className: d()(
                            f().author,
                            n === h && f().active,
                            1 === t.length && f().solo,
                          ),
                          children: [
                            o,
                            " ",
                            (0, r.jsx)("span", {
                              className: f().title,
                              children: i,
                            }),
                          ],
                        },
                        o,
                      );
                    }),
                  }),
                  (0, r.jsxs)(o.E.div, {
                    className: f().authorsMobile,
                    layout: !0,
                    transition: { duration: 0.25 },
                    children: [
                      (0, r.jsx)("button", {
                        className: f().mobileNavButton,
                        onClick: () => {
                          if (0 === h) return m(t.length - 1);
                          m((e) => e - 1);
                        },
                        "data-solo": 1 === t.length,
                        children: (0, r.jsx)(s.Z, {}),
                      }),
                      (0, r.jsxs)(
                        "button",
                        {
                          onClick: () => m(index),
                          className: f().mobileAuthor,
                          children: [
                            t[h].author,
                            " ",
                            (0, r.jsx)("span", {
                              className: f().title,
                              children: t[h].title,
                            }),
                          ],
                        },
                        t[h].author,
                      ),
                      (0, r.jsx)("button", {
                        className: f().mobileNavButton,
                        onClick: () => {
                          if (h === t.length - 1) return m(0);
                          m((e) => e + 1);
                        },
                        "data-solo": 1 === t.length,
                        children: (0, r.jsx)(l.Z, {}),
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
    74084: function (e) {
      e.exports = {
        container: "styles_container__zZd_3",
        scan: "styles_scan__Y92gE",
        particles: "styles_particles__psjYa",
        encrypted: "styles_encrypted__J_Gfu",
      };
    },
    96072: function (e) {
      e.exports = {
        file: "styles_file__qJ7xu",
        filePreview: "styles_filePreview__M9jJq",
        scan: "styles_scan__Z5M8c",
        encrypted: "styles_encrypted__iw2a7",
      };
    },
    68896: function (e) {
      e.exports = {
        container: "styles_container__MFY8W",
        heroContent: "styles_heroContent__UhsLt",
        heroCopy: "styles_heroCopy__d9bod",
        title: "styles_title__h7tJj",
        subTitle: "styles_subTitle__ClqD_",
        heroButton: "styles_heroButton__mpYkf",
        cardsContainer: "styles_cardsContainer__byfYR",
        xray: "styles_xray__mWk3I",
        horizon: "styles_horizon__Yx361",
        horizonLine: "styles_horizonLine__dsdR1",
        horizonGlow: "styles_horizonGlow__WaS7q",
        fileStream: "styles_fileStream__LmIDq",
        mask: "styles_mask__go63f",
        scroller: "styles_scroller__Xo6Ne",
        decrypted: "styles_decrypted__eopCn",
        encrypted: "styles_encrypted__SgSYx",
        chars: "styles_chars__KVMjv",
        original: "styles_original__Cc0DQ",
        line: "styles_line__sQ41U",
        heading: "styles_heading__hx0q8",
        accordion: "styles_accordion__qebZ2",
        accordionItem: "styles_accordionItem__teubw",
        accordionIndicator: "styles_accordionIndicator__MGZc_",
        accordionTrigger: "styles_accordionTrigger__XyesC",
        accordionContent: "styles_accordionContent__48FR8",
        slideOpen: "styles_slideOpen__sVxv1",
        slideClosed: "styles_slideClosed___mADQ",
        accordionText: "styles_accordionText__bXarw",
        accordionIcon: "styles_accordionIcon__fOSZC",
        demo: "styles_demo__fF9Ke",
        diagram: "styles_diagram__2ElzR",
        code: "styles_code__y7x_7",
        codeFrame: "styles_codeFrame__utYux",
        frame: "styles_frame__zaWqx",
        glow: "styles_glow__kr0_t",
        nodes: "styles_nodes__7FGNB",
        encryptedRequest: "styles_encryptedRequest__wAFYZ",
        learnMore: "styles_learnMore__hgbJ8",
        chevronOne: "styles_chevronOne__UMGHZ",
        chevronTwo: "styles_chevronTwo__ThPue",
        guidesCodeBlock: "styles_guidesCodeBlock__WcQuE",
      };
    },
    18120: function (e) {
      e.exports = {
        hero: "GradientHero_hero__XyNzf",
        gradient: "GradientHero_gradient___P5iQ",
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
    16893: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return useInView;
        },
      });
      var r = n(67294),
        o = n(37301);
      let i = { any: 0, all: 1 };
      function useInView(
        e,
        { root: t, margin: n, amount: a, once: s = !1 } = {},
      ) {
        let [l, c] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (s && l)) return;
            let r = {
              root: (t && t.current) || void 0,
              margin: n,
              amount: "some" === a ? "any" : a,
            };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: a = "any" } = {},
            ) {
              let s = (0, o.I)(e),
                l = new WeakMap(),
                c = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = l.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          "function" == typeof n
                            ? l.set(e.target, n)
                            : c.unobserve(e.target);
                        } else n && (n(e), l.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof a ? a : i[a],
                  },
                );
              return s.forEach((e) => c.observe(e)), () => c.disconnect();
            })(e.current, () => (c(!0), s ? void 0 : () => c(!1)), r);
          }, [t, e, n, s]),
          l
        );
      }
    },
  },
]);
