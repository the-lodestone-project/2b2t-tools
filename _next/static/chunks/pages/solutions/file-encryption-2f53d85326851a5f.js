(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7730],
  {
    33587: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = s(84297);
      let a = (0, i.Z)("Database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
      ]);
    },
    47128: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = s(84297);
      let a = (0, i.Z)("Fingerprint", [
        [
          "path",
          { d: "M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4", key: "1jc9o5" },
        ],
        [
          "path",
          { d: "M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2", key: "1mxgy1" },
        ],
        ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
        [
          "path",
          { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" },
        ],
        ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
        ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
        ["path", { d: "M2 16h.01", key: "1gqxmh" }],
        ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
        [
          "path",
          { d: "M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2", key: "1fgabc" },
        ],
      ]);
    },
    41962: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = s(84297);
      let a = (0, i.Z)("Smartphone", [
        [
          "rect",
          {
            width: "14",
            height: "20",
            x: "5",
            y: "2",
            rx: "2",
            ry: "2",
            key: "1yt0o3",
          },
        ],
        ["path", { d: "M12 18h.01", key: "mhygvu" }],
      ]);
    },
    23335: function (e, t, s) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/file-encryption",
        function () {
          return s(82382);
        },
      ]);
    },
    336: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return CalloutLink;
        },
      });
      var i = s(85893),
        a = s(74098),
        h = s(24057),
        l = s(67294),
        n = s(9737),
        r = s.n(n),
        v = s(94184),
        d = s.n(v);
      function CalloutLink(e) {
        let {
            href: t,
            hrefTitle: s,
            title: n,
            tagline: v,
            children: o,
            asset: A,
            className: c,
          } = e,
          p = (0, l.useRef)();
        return (0, i.jsx)(a.Z, {
          children: (0, i.jsxs)("div", {
            className: d()(r().container, c),
            onClick: () => {
              p.current.click();
            },
            children: [
              (0, i.jsxs)("div", {
                className: r().content,
                children: [
                  (0, i.jsx)("h6", { className: r().guidesLabel, children: v }),
                  (0, i.jsx)("h4", { className: r().title, children: n }),
                  (0, i.jsx)("p", { className: r().description, children: o }),
                  (0, i.jsx)(h.Z, { ref: p, href: t, children: s }),
                ],
              }),
              A,
            ],
          }),
        });
      }
    },
    97004: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return Features;
        },
      });
      var i = s(85893),
        a = s(5152),
        h = s.n(a),
        l = s(91452),
        n = s.n(l),
        r = s(94184),
        v = s.n(r),
        d = s(61609);
      let o = h()(() => s.e(3531).then(s.bind(s, 3531)), {
        loadableGenerated: { webpack: () => [3531] },
        ssr: !1,
      });
      function Features(e) {
        let { heading: t, size: s, subheading: a, config: h, className: l } = e;
        return (0, i.jsx)("div", {
          className: v()(n().container, l),
          children: (0, i.jsxs)("div", {
            className: n().maxWidthWrapper,
            children: [
              (0, i.jsxs)("div", {
                className: n().heading,
                "data-size": s,
                children: [
                  (0, i.jsx)(d.Z, {
                    as: "h2",
                    width: "70%",
                    interactive: !0,
                    children: t,
                  }),
                  a &&
                    (0, i.jsx)("p", { className: n().subHeading, children: a }),
                ],
              }),
              (0, i.jsx)("div", {
                className: n().grid,
                children: h.map((e, t) => {
                  let { title: s, features: a } = e;
                  return (0, i.jsxs)(
                    "div",
                    {
                      children: [
                        s &&
                          (0, i.jsx)("div", {
                            className: n().titleContainer,
                            children: (0, i.jsx)(o, { children: s }),
                          }),
                        (0, i.jsx)("div", { className: n().divider }),
                        (0, i.jsx)("div", {
                          className: n().features,
                          children: a.map((e) => {
                            let { icon: t, title: s, description: a } = e;
                            return (0, i.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, i.jsxs)("div", {
                                    className: n().featureTitle,
                                    children: [
                                      t,
                                      (0, i.jsx)("h5", { children: s }),
                                    ],
                                  }),
                                  (0, i.jsx)("p", { children: a }),
                                ],
                              },
                              s,
                            );
                          }),
                        }),
                      ],
                    },
                    s || t,
                  );
                }),
              }),
            ],
          }),
        });
      }
    },
    82382: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return FileEncryption;
          },
        });
      var i = s(85893),
        a = s(336),
        h = s(91693);
      function FileEncryptionCTA() {
        return (0, i.jsx)(h.Z, {
          heading: "Encrypt your most sensitive files",
          subheading:
            "Use evervault to securely manage and store your most sensitive files and documents, without changing your infrastructure or data flows.",
          href: "https://app.evervault.com/register",
          cta: "Get Started",
        });
      }
      var l = s(67294),
        n = s(55141),
        r = s(74098),
        v = s(68896),
        d = s.n(v),
        o = s(17346),
        A = s(33587),
        c = s(84297);
      let p = (0, c.Z)("FileTerminal", [
        [
          "path",
          {
            d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
            key: "1nnpy2",
          },
        ],
        ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
        ["path", { d: "m8 16 2-2-2-2", key: "10vzyd" }],
        ["path", { d: "M12 18h4", key: "1wd2n7" }],
      ]);
      var x = s(8971),
        M = s(425),
        u = s(97789),
        j = s(50618),
        Z = s(26695),
        m = s(33420),
        f = s.n(m),
        C = s(29405),
        g = { src: "/_next/static/media/plaid.d085630c.jpg" },
        y = s(41962);
      function ShareDiagram() {
        let e = (0, j.Z)("(min-width: 768px)");
        return (0, i.jsx)("div", {
          className: f().nodes,
          children: (0, i.jsxs)(C.S, {
            direction: e ? "horizontal" : "vertical",
            children: [
              (0, i.jsxs)(C.S.Nodes, {
                children: [
                  (0, i.jsx)(C.S.Group, {
                    children: (0, i.jsx)(C.S.Node, {
                      id: "file",
                      children: (0, i.jsx)("div", {
                        style: { marginTop: e ? 30 : 10 },
                        children: (0, i.jsx)(Z.Z.Encrypted, {
                          name: "passport.ev",
                          size: "2.4 MB",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)(C.S.Group, {
                    children: (0, i.jsx)(C.S.Node, {
                      id: "relay",
                      children: (0, i.jsx)(C.S.Service, {
                        glow: !0,
                        children: "Relay",
                      }),
                    }),
                  }),
                  (0, i.jsxs)(C.S.Group, {
                    children: [
                      (0, i.jsx)(C.S.Node, {
                        id: "stripe",
                        children: (0, i.jsx)(C.S.Service, {
                          icon: (0, i.jsx)("img", {
                            className: f().logo,
                            src: "/_next/static/media/stripe.8bd82e5c.jpg",
                          }),
                          payload: { key: "file", value: "passport.pdf" },
                          children: "Stripe",
                        }),
                      }),
                      e &&
                        (0, i.jsx)(C.S.Node, {
                          id: "client",
                          children: (0, i.jsx)(C.S.Service, {
                            icon: (0, i.jsx)(y.Z, {}),
                            payload: { key: "file", value: "passport.pdf" },
                            children: "User",
                          }),
                        }),
                      e &&
                        (0, i.jsx)(C.S.Node, {
                          id: "plaid",
                          children: (0, i.jsx)(C.S.Service, {
                            icon: (0, i.jsx)("img", {
                              className: f().logo,
                              src: g.src,
                            }),
                            payload: { key: "file", value: "passport.pdf" },
                            children: "Plaid",
                          }),
                        }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(C.S.Connection, {
                nodes: ["file", "relay"],
                children: (0, i.jsx)(C.S.Request, {
                  className: f().encryptedRequest,
                  duration: 1.5,
                  repeatDelay: 1.5,
                  ease: "easeIn",
                }),
              }),
              (0, i.jsx)(C.S.Connection, {
                nodes: ["relay", "stripe"],
                children: (0, i.jsx)(C.S.Request, {
                  className: f().encryptedRequest,
                  duration: 1.5,
                  repeatDelay: 1.5,
                  ease: "easeOut",
                  delay: 1.5,
                }),
              }),
              e &&
                (0, i.jsx)(C.S.Connection, {
                  nodes: ["relay", "client"],
                  children: (0, i.jsx)(C.S.Request, {
                    className: f().encryptedRequest,
                    duration: 1.5,
                    repeatDelay: 1.5,
                    ease: "easeOut",
                    delay: 1.5,
                  }),
                }),
              e &&
                (0, i.jsx)(C.S.Connection, {
                  nodes: ["relay", "plaid"],
                  children: (0, i.jsx)(C.S.Request, {
                    className: f().encryptedRequest,
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
      var H = (0, l.forwardRef)(function (e, t) {
          let { href: s, children: a } = e;
          return (0, i.jsxs)("a", {
            ref: t,
            className: d().learnMore,
            href: s,
            rel: "noopener noreferrer",
            target: "_blank",
            children: [
              a,
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
                    className: d().chevronOne,
                    d: "M6 17L11 12 6 7",
                  }),
                  (0, i.jsx)("path", {
                    className: d().chevronTwo,
                    d: "M13 17L18 12 13 7",
                  }),
                ],
              }),
            ],
          });
        }),
        E = s(61609);
      let N = "ENCRYPT",
        _ = "STORE",
        V = "SHARE";
      function FileEncryptionDemo() {
        let [e, t] = (0, l.useState)(N);
        return (0, i.jsxs)(r.Z, {
          className: d().container,
          children: [
            (0, i.jsxs)("div", {
              className: d().heading,
              children: [
                (0, i.jsx)(E.Z, {
                  className: "mb-5",
                  as: "h2",
                  width: "70%",
                  interactive: !0,
                  children: "Your existing data flows, but encrypted.",
                }),
                (0, i.jsx)(E.Z, {
                  as: "p",
                  children:
                    "Use evervault to securely encrypt sensitive files before they touch your server. Store them where you normally do and share them with third-parties without handling anything in plaintext.",
                }),
              ],
            }),
            (0, i.jsxs)("div", {
              className: d().demo,
              children: [
                (0, i.jsxs)(n.fC, {
                  value: e,
                  onValueChange: t,
                  className: d().accordion,
                  children: [
                    (0, i.jsxs)(AccordionItem, {
                      value: N,
                      icon: (0, i.jsx)(o.Z, {}),
                      title: "Encrypt files",
                      children: [
                        (0, i.jsx)("p", {
                          children:
                            "Encrypt any file or document and make sure it never touches your infrastructure in plaintext.",
                        }),
                        (0, i.jsx)(H, {
                          href: "https://docs.evervault.com/sdks/platforms",
                          children: "Learn more",
                        }),
                      ],
                    }),
                    (0, i.jsx)(AccordionItem, {
                      value: _,
                      icon: (0, i.jsx)(A.Z, {}),
                      title: "Store anywhere",
                      children: (0, i.jsx)("p", {
                        children:
                          "Store encrypted files in the same places you are used to. After encrypting your files, we don't store anything.",
                      }),
                    }),
                    (0, i.jsxs)(AccordionItem, {
                      value: V,
                      icon: (0, i.jsx)(p, {}),
                      title: "Decrypt & share",
                      children: [
                        (0, i.jsx)("p", {
                          children:
                            "Share encrypted files or documents with third-party services and decrypt them after they leave your infrastructure.",
                        }),
                        (0, i.jsx)(H, {
                          href: "https://docs.evervault.com/products/outbound-relay",
                          children: "Learn more",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: d().diagram,
                  children: [
                    e === N && (0, i.jsx)(M.Z, {}),
                    e === _ && (0, i.jsx)(u.Z, {}),
                    e === V && (0, i.jsx)(ShareDiagram, {}),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", { className: d().glow }),
          ],
        });
      }
      function AccordionItem(e) {
        let { value: t, title: s, icon: a, children: h } = e;
        return (0, i.jsxs)(n.ck, {
          className: d().accordionItem,
          value: t,
          children: [
            (0, i.jsxs)(n.xz, {
              className: d().accordionTrigger,
              children: [
                (0, i.jsx)("div", {
                  className: d().accordionIcon,
                  children: a,
                }),
                s,
                (0, i.jsx)("div", {
                  className: d().accordionIndicator,
                  children: (0, i.jsx)(x.Z, {}),
                }),
              ],
            }),
            (0, i.jsx)(n.VY, {
              className: d().accordionContent,
              children: (0, i.jsx)("div", {
                className: d().accordionText,
                children: h,
              }),
            }),
          ],
        });
      }
      var w = s(97004),
        O = s(47128);
      let B = (0, c.Z)("FileKey2", [
          [
            "path",
            {
              d: "M4 10V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2H4",
              key: "1nw5t3",
            },
          ],
          ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
          ["circle", { cx: "4", cy: "16", r: "2", key: "1ehqvc" }],
          ["path", { d: "m10 10-4.5 4.5", key: "7fwrp6" }],
          ["path", { d: "m9 11 1 1", key: "wa6s5q" }],
        ]),
        D = (0, c.Z)("FileImage", [
          [
            "path",
            {
              d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",
              key: "1nnpy2",
            },
          ],
          ["polyline", { points: "14 2 14 8 20 8", key: "1ew0cm" }],
          ["circle", { cx: "10", cy: "13", r: "2", key: "6v46hv" }],
          [
            "path",
            { d: "m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22", key: "17vly1" },
          ],
        ]),
        z = (0, c.Z)("HeartPulse", [
          [
            "path",
            {
              d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
              key: "c3ymky",
            },
          ],
          [
            "path",
            { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" },
          ],
        ]),
        S = (0, c.Z)("Bot", [
          ["path", { d: "M12 8V4H8", key: "hb8ula" }],
          [
            "rect",
            {
              width: "16",
              height: "12",
              x: "4",
              y: "8",
              rx: "2",
              key: "enze0r",
            },
          ],
          ["path", { d: "M2 14h2", key: "vft8re" }],
          ["path", { d: "M20 14h2", key: "4cs60a" }],
          ["path", { d: "M15 13v2", key: "1xurst" }],
          ["path", { d: "M9 13v2", key: "rq6x2g" }],
        ]);
      var b = s(13766);
      function FileEncryptionFeatures() {
        return (0, i.jsx)(w.Z, {
          heading: "Encrypt anything and everything",
          subheading:
            "Flexible enough to support any solution and every file type. ",
          config: I,
        });
      }
      let I = [
        {
          title: "Examples",
          features: [
            {
              icon: (0, i.jsx)(O.Z, { width: 16 }),
              title: "KYC and AML",
              description:
                "Encrypt sensitive identity documents like passports and driving licences before sharing them with identity verification services.",
            },
            {
              icon: (0, i.jsx)(B, { width: 16 }),
              title: "Contracts",
              description:
                "Store sensitive commercial contracts and agreements encrypted at all times.",
            },
            {
              icon: (0, i.jsx)(D, { width: 16 }),
              title: "Sensitive Images",
              description:
                "Securely collect and encrypt sensitive images like biometric, healthcare or CCTV imagery.",
            },
            {
              icon: (0, i.jsx)(z, { width: 16 }),
              title: "Medical Records",
              description:
                "Easily encrypt and share sensitive medical records and documentation in a HIPAA-compliant way.",
            },
            {
              icon: (0, i.jsx)(S, { width: 16 }),
              title: "AI Models",
              description:
                "Encrypt your proprietary machine learning models and use them without worrying about IP theft.",
            },
            {
              icon: (0, i.jsx)(b.Z, { width: 16 }),
              title: "Proprietary Documents",
              description:
                "Securely store and encrypt sensitive commercial documents and prevent leaks.",
            },
          ],
        },
      ];
      var L = s(62654);
      function FileEncryptionTestimonial() {
        return (0, i.jsx)(L.Z, {
          testimonailsConfig: R,
          rotationMap: [0, 0],
          logos: "/_next/static/media/logo-wheel.e71e91f2.svg",
        });
      }
      let R = [
        {
          quote:
            "Being able to say ‘We use evervault’ ensures that our customers and partners relax as soon as the security question comes up. File protection ceases to be a concern.",
          encryptedQuote:
            "QLLHP X+PQ uh AIL azi Uzl gZsCLvn+XE iG+QTaa VYdo RLc a/WhTzaaL SAo CgLKD$bN @WfCD Mj Dalo wH xWq $+DBrWwY cjATilrG spdqS lQD @GPa pbjXEfHABD xkkpjV hO SA + @nvSnVLH",
          author: "Swan",
          id: "swan-quote",
        },
      ];
      var F = s(75964),
        T = s(56190),
        k = s(77387);
      function GuideCodeBlock() {
        return (0, i.jsxs)("div", {
          className: d().guidesCodeBlock,
          children: [
            (0, i.jsx)(F.Z, { tabs: ["FileUpload.jsx"] }),
            (0, i.jsx)(T.Z, {
              language: "javascript",
              style: k.Z,
              showLineNumbers: !0,
              wrapLines: !0,
              customStyle: { background: "transparent" },
              children:
                "function FileUpload() {\n  const evervault = useEvervault();\n\n  const uploadFile = async file => {\n    const encrypted = await evervault.encrypt(file);\n    await fetch(url, {\n      method: 'PUT',\n      body: encrypted,\n      headers: { \"Content-Type\": fileType }\n    })\n  }\n  \n  const handleChange = e => {\n    const file = e.target.files[0];\n    uploadFile(file);\n  }\n}\n",
            }),
          ],
        });
      }
      var P = s(60777),
        Q = s(16893),
        U = s(4960),
        W = s(16014),
        K = s(2074);
      function useAnimationFrame(e) {
        let t = (0, l.useRef)(0),
          { isStatic: s } = (0, l.useContext)(W._);
        (0, l.useEffect)(() => {
          if (s) return;
          let provideTimeSinceStart = ({ timestamp: s, delta: i }) => {
            t.current || (t.current = s), e(s - t.current, i);
          };
          return (
            K.Wi.update(provideTimeSinceStart, !0),
            () => (0, K.Pn)(provideTimeSinceStart)
          );
        }, [e]);
      }
      var G = s(92520),
        Y = s(32494),
        J = s(15029),
        q = s(38715),
        X = s(99477),
        $ = s(61819),
        ee = s.n($),
        et = s(3271),
        es = s(70010),
        ei = s(3965);
      let ea = (0, l.createRef)();
      function Particles() {
        let e = (0, et.M4)("Horizon", {
          count: { value: 2500, min: 500, max: 5e3, step: 100 },
          size: { value: 1, min: 0.5, max: 2, step: 0.1 },
        });
        (0, q.A)((t) => {
          let { clock: s } = t;
          (ea.current.uniforms.uTime.value = s.getElapsedTime()),
            (ea.current.uniforms.uSize.value = e.size);
        });
        let { geometry: t } = (0, l.useMemo)(() => {
            let t = new Float32Array(3 * e.count),
              s = new Float32Array(e.count),
              i = new Float32Array(e.count),
              a = new Float32Array(e.count);
            for (let h = 0; h < e.count; h++)
              (t[3 * h] = 0),
                (t[3 * h + 1] =
                  (Math.random() - 0.5 + (Math.random() - 0.5)) / 2),
                (t[3 * h + 2] = 0),
                (s[h] = (0, es.n)(0.1, 1)),
                (a[h] = (0, es.n)(0.2, 1)),
                (i[h] = (0, es.n)(1, 25) * window.devicePixelRatio);
            let h = new X.BufferGeometry();
            return (
              h.setAttribute("position", new X.BufferAttribute(t, 3)),
              h.setAttribute("velocity", new X.BufferAttribute(s, 1)),
              h.setAttribute("size", new X.BufferAttribute(i, 1)),
              h.setAttribute("distance", new X.BufferAttribute(a, 1)),
              { geometry: h }
            );
          }, [e.count]),
          s = (0, l.useMemo)(
            () => ({ uTime: { value: 0 }, uSize: { value: e.size } }),
            [],
          );
        return (0, i.jsxs)("points", {
          scale: [1, 6.05, 1],
          children: [
            (0, i.jsx)("bufferGeometry", { attach: "geometry", ...t }),
            (0, i.jsx)("shaderMaterial", {
              ref: ea,
              vertexShader:
                "\nuniform float uTime;\nuniform float uSize;\nattribute float velocity;\nattribute float size;\nattribute float distance;\nvarying float x;\n\nvoid main() {\n    vec3 pos = position;\n    pos.x = mod(uTime * velocity, distance);\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n\n    x = pos.x;\n    gl_Position = projectedPosition;\n    gl_PointSize = size * uSize;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n}\n",
              fragmentShader:
                "\nuniform float uTime;\nvarying float x;\n\nvoid main() {\n  float distanceFromCenter = distance(gl_PointCoord, vec2(0.5));\n  if (distanceFromCenter > 0.5) {\n    discard;\n  }\n\n  float maxAlpha = 0.4;\n  float alpha = 1.0 - x;\n  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * maxAlpha);\n}\n",
              uniforms: s,
              transparent: !0,
              blending: X.AdditiveBlending,
            }),
          ],
        });
      }
      var eh = (0, l.memo)(function () {
          let { active: e } = useHero(),
            t = (0, ei.s)();
          if (t)
            return (0, i.jsx)(G.E.div, {
              initial: { opacity: 0 },
              animate: { opacity: e ? 1 : 0 },
              transition: { duration: 0.5 },
              className: ee().particles,
              children: (0, i.jsx)(J.Xz, {
                dpr: Math.min(window.devicePixelRatio, 2),
                style: { pointerEvents: "none" },
                children: (0, i.jsx)(Particles, {}),
              }),
            });
        }),
        el = s(87777),
        en = s.n(el),
        Passport_BioChip = (e) =>
          (0, i.jsxs)("svg", {
            width: 30,
            height: 20,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M30 3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v6h8.07a7.002 7.002 0 0 1 13.86 0H30V3Z",
                fill: "url(#a)",
              }),
              (0, i.jsx)("path", {
                d: "M8.07 11a7.002 7.002 0 0 0 13.86 0H30v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6h8.07Z",
                fill: "url(#b)",
              }),
              (0, i.jsx)("path", {
                d: "M20 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z",
                fill: "url(#c)",
              }),
              (0, i.jsxs)("defs", {
                children: [
                  (0, i.jsxs)("linearGradient", {
                    id: "a",
                    x1: 0,
                    y1: 0,
                    x2: 30,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        offset: 0.041,
                        stopColor: "#E7CCCC",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.214,
                        stopColor: "#FFF6E9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.396,
                        stopColor: "#EAD7CA",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.578,
                        stopColor: "#F9FFD7",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.771,
                        stopColor: "#FFE2B7",
                      }),
                      (0, i.jsx)("stop", { offset: 1, stopColor: "#CEBABA" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "b",
                    x1: 0,
                    y1: 0,
                    x2: 30,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        offset: 0.041,
                        stopColor: "#E7CCCC",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.214,
                        stopColor: "#FFF6E9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.396,
                        stopColor: "#EAD7CA",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.578,
                        stopColor: "#F9FFD7",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.771,
                        stopColor: "#FFE2B7",
                      }),
                      (0, i.jsx)("stop", { offset: 1, stopColor: "#CEBABA" }),
                    ],
                  }),
                  (0, i.jsxs)("linearGradient", {
                    id: "c",
                    x1: 0,
                    y1: 0,
                    x2: 30,
                    y2: 20,
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, i.jsx)("stop", {
                        offset: 0.041,
                        stopColor: "#E7CCCC",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.214,
                        stopColor: "#FFF6E9",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.396,
                        stopColor: "#EAD7CA",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.578,
                        stopColor: "#F9FFD7",
                      }),
                      (0, i.jsx)("stop", {
                        offset: 0.771,
                        stopColor: "#FFE2B7",
                      }),
                      (0, i.jsx)("stop", { offset: 1, stopColor: "#CEBABA" }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        Patterns_PatternOne = (e) =>
          (0, i.jsxs)("svg", {
            width: "200",
            height: "200",
            ...e,
            children: [
              (0, i.jsx)("pattern", {
                id: "pattern",
                x: "0",
                y: "0",
                width: "11",
                height: "14",
                viewBox: "0 0 11 14",
                patternUnits: "userSpaceOnUse",
                children: (0, i.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M0 0h2v12H0V0Zm7 8a2 2 0 1 0 .001-3.999A2 2 0 0 0 7 8Z",
                  fill: "#000",
                }),
              }),
              (0, i.jsx)("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(#pattern)",
              }),
            ],
          });
      function generateMrz(e) {
        let t = "P".concat(e.cardNumber, "<<<").concat(e.lastName);
        t = t.padEnd(44, "<");
        let s = "299IE132<<<".concat(e.firstName);
        return { line1: t, line2: (s = s.padEnd(42, "<") + "IE") };
      }
      var er = s(77261),
        ev = s.n(er),
        Xray_Signature = (e) =>
          (0, i.jsx)("svg", {
            width: 38,
            height: 16,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M6.829 15c0-2.415-.253-4.808-.485-7.205m0 0c-.209-2.166-.4-4.335-.373-6.525.01-.72.42.202.562.422a25.09 25.09 0 0 1 2.162 4.113c.14.345.283.687.427 1.028m-2.778.962C4.743 8.332 3.068 8.864 1.6 9.64c-.233.123-.34.197-.6.197m5.344-2.043c.266-.09.53-.179.79-.27l1.988-.692m0 0c.882 2.084 1.843 4.1 3.02 6.07m-3.02-6.07a947.98 947.98 0 0 1 3.872-1.342m0 0c3.605-1.238 5.344-1.775 11.663-3.719M12.994 5.491l-.09-.394c-.289-1.31-.814-2.632-.933-3.97m1.023 4.364c.515 2.242 1.18 4.368 1.968 6.552.228.632.634 1.879 1.21 2.312.227.171.226-.447.257-.637.19-1.167.43-2 .685-3.199.19-.89 1.029-3.75 1.029-2.84 0 .957.272 1.965.666 2.84.093.206.17.757.4.448.464-.623 1.703-1.571 2.496-1.738.815-.173 1.2.9 1.886 1.057.634.145 2.292-1.5 2.857-1.846.837-.515.742-.741 1.504-.215 1.252.863 2.978-.648 3.79-1.452-.913 0 1.806-1.26 1.83-1.13.213 1.206 2.43.043 3.428.646",
              stroke: "#000",
              strokeLinecap: "round",
            }),
          }),
        ed = s(73630),
        eo = s.n(ed),
        DriversLicense_Signature = (e) =>
          (0, i.jsx)("svg", {
            width: 53,
            height: 18,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
              d: "M6.218 17c-.456-.924-1.172-1.727-1.824-2.558m0 0-.086-.111m.086.111a.505.505 0 0 1-.132-.055c-.044-.028-.014-.044.046-.056m.086.111c.163.046.38.06.47.069 1.233.12 2.479.125 3.717.13 2.479.012 4.819.08 7.254.525M4.308 14.33c-.22-.284-.43-.571-.618-.868-.978-1.544-1.562-3.245-2.024-4.993l-.014-.052C1.221 6.79.73 4.935 1.177 3.26 1.56 1.821 3.162.804 4.698 1.032c2.503.371 4.562 3.547 5.072 5.72.596 2.541-1.093 4.451-2.927 6.02-.66.564-1.369 1.161-2.19 1.499-.077.031-.25.04-.345.06Zm12.475-2.44c-.135.233-.562.826-.27.262m2.302-11.136c.44 3.32 1.205 6.56 1.956 9.819.275 1.19.819 2.587.889 3.806.013.231.07.312.338.255.276-.06.566-.272.82-.386.635-.286 1.326-.377 1.987-.59.234-.075 1.053-.189 1.189-.254.437-.212.488-1.58.572-1.936.084-.356.266-2.263.451-1.165.061.364.374 3.67 1.204 3.377.197-.07 1.028-2.528 1.129-2.387.395.556 1.097 1.21 1.881.968.482-.148 2.363-1.687 2.649-1.361.936 1.067 1.773.227 2.393-.786.002-.003.446-.976.527-.946.18.067.32.555.481.691.642.543 1.68.596 2.468.444.533-.102 1.833-.908 2.348-.742.346.111.428.3.858.342 1.913.19 3.864-.367 5.644-.983 1.231-.426 2.082-.786 3.401-.96",
              stroke: "#000",
              strokeLinecap: "round",
            }),
          }),
        Contract_Stamp = (e) =>
          (0, i.jsxs)("svg", {
            width: 64,
            height: 42,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M54.526 2.467 3.468 25.469a2 2 0 0 0-1.002 2.644l4.518 10.03a2 2 0 0 0 2.645 1.002l51.058-23.002a2 2 0 0 0 1.002-2.645l-4.518-10.03a2 2 0 0 0-2.645-1.001ZM2.646 23.645a4 4 0 0 0-2.003 5.29l4.518 10.03a4 4 0 0 0 5.29 2.003l51.058-23.002a4 4 0 0 0 2.004-5.29L58.995 2.647a4 4 0 0 0-5.29-2.004L2.647 23.645Z",
                fill: "#00B649",
              }),
              (0, i.jsx)("path", {
                d: "m12.97 31.624-1.945.877.227 1.525-1.318.594-.796-7.439 1.135-.511 5.004 5.543-1.318.594-.988-1.183Zm-2.117-.326 1.345-.605-1.739-2.088.394 2.693ZM16.676 28.723l1.071 2.378-1.251.563-2.92-6.482 2.217-.999c.353-.159.695-.25 1.027-.275.33-.027.637.004.92.094.283.094.534.245.756.452.225.206.408.465.548.776.131.291.197.584.198.88.005.295-.053.576-.171.843-.12.273-.3.523-.54.752a3.13 3.13 0 0 1-.889.583l-.966.435Zm-.457-1.015.966-.435c.178-.08.32-.177.427-.289.106-.112.183-.234.23-.366a.971.971 0 0 0 .05-.403 1.2 1.2 0 0 0-.104-.408 1.43 1.43 0 0 0-.257-.393 1.04 1.04 0 0 0-.346-.257 1.037 1.037 0 0 0-.434-.083 1.275 1.275 0 0 0-.5.124l-.967.436.935 2.074ZM22.699 26.01l1.07 2.377-1.25.564-2.92-6.482 2.217-1c.353-.158.695-.25 1.027-.274.33-.028.637.003.92.094.282.094.534.245.756.452.225.206.408.464.548.776.131.29.197.584.198.88.004.294-.053.576-.172.843-.12.272-.3.523-.54.752-.239.23-.535.424-.888.583l-.966.435Zm-.457-1.015.966-.435c.178-.08.32-.177.427-.29.106-.111.183-.234.23-.366a.973.973 0 0 0 .05-.402 1.2 1.2 0 0 0-.104-.409 1.43 1.43 0 0 0-.257-.392 1.039 1.039 0 0 0-.346-.257 1.034 1.034 0 0 0-.434-.083 1.274 1.274 0 0 0-.5.124l-.967.435.935 2.075ZM29.57 22.86l-.948.428 1.09 2.422-1.25.563-2.92-6.482 2.172-.978c.36-.162.704-.265 1.033-.31.328-.048.633-.037.915.032.278.071.527.204.746.398.223.192.406.449.55.77.105.23.17.453.199.665.03.208.026.408-.01.598-.036.196-.103.38-.199.556a2.62 2.62 0 0 1-.352.502l2.599 2.048.026.058-1.34.603-2.311-1.872Zm-1.406-.587.926-.417c.193-.087.35-.19.472-.309a.984.984 0 0 0 .252-.403.886.886 0 0 0 .04-.376 1.25 1.25 0 0 0-.113-.416 1.311 1.311 0 0 0-.285-.418.85.85 0 0 0-.38-.225 1.06 1.06 0 0 0-.418-.026 1.69 1.69 0 0 0-.487.145l-.921.415.914 2.03ZM37.762 18.758c.126.279.22.556.283.83.062.273.094.537.095.793-.004.26-.04.512-.109.757-.068.245-.17.47-.307.673-.125.182-.28.348-.461.498-.178.151-.386.28-.624.387-.252.114-.5.186-.743.217a2.358 2.358 0 0 1-.707-.013 2.508 2.508 0 0 1-.666-.24 2.895 2.895 0 0 1-.613-.448 3.77 3.77 0 0 1-.493-.581 4.894 4.894 0 0 1-.405-.733l-.425-.944a4.852 4.852 0 0 1-.294-.842 3.73 3.73 0 0 1-.1-.806c-.001-.247.027-.482.083-.707a2.207 2.207 0 0 1 .715-1.158 2.64 2.64 0 0 1 .643-.403c.25-.112.497-.184.743-.216.248-.037.486-.035.715.004.226.034.44.102.643.203.206.1.4.226.581.376.203.172.39.377.561.615.174.235.328.5.46.794l.425.944Zm-1.698-.381a4.368 4.368 0 0 0-.24-.46 2.689 2.689 0 0 0-.263-.385 1.914 1.914 0 0 0-.371-.347 1.197 1.197 0 0 0-.403-.193 1.027 1.027 0 0 0-.334-.016 1.14 1.14 0 0 0-.351.1 1.16 1.16 0 0 0-.296.187.91.91 0 0 0-.191.241 1.22 1.22 0 0 0-.118.428c-.012.155 0 .325.036.509.028.14.068.29.122.448.056.157.122.318.197.485l.429.952c.07.157.145.306.222.446.078.14.16.266.245.377.104.143.216.265.337.368.123.098.245.168.367.21a.964.964 0 0 0 .724-.059c.125-.056.23-.125.319-.208a.922.922 0 0 0 .206-.28c.063-.128.1-.27.113-.426.014-.16.005-.329-.026-.508a4.269 4.269 0 0 0-.295-.917l-.429-.952ZM42.021 20.165l-4.879-5.6 1.38-.621 3.007 3.738.308.386-.078-.495-.802-4.726 1.38-.622.957 7.366-1.273.574ZM49.24 13.496l-2.663 1.2.825 1.83 3.112-1.403.455 1.01-4.367 1.968-2.92-6.482 4.353-1.961.46 1.02-3.099 1.395.736 1.634 2.662-1.2.446.99ZM52.526 15.432l-2.92-6.482 1.679-.756c.3-.135.597-.224.891-.268.293-.046.577-.05.85-.013.237.025.464.085.682.18.22.09.426.204.62.342.23.171.442.38.635.624.195.244.363.522.504.834l.24.534c.135.3.23.598.285.894.056.297.074.583.055.86-.023.249-.072.493-.147.73-.077.234-.18.449-.31.643-.15.228-.338.436-.56.622a3.26 3.26 0 0 1-.763.472l-1.74.784Zm-1.203-6.034 2.01 4.46.48-.216a1.7 1.7 0 0 0 .407-.253c.116-.098.212-.21.288-.333.078-.128.135-.272.17-.43a2.041 2.041 0 0 0-.042-1.047 3.595 3.595 0 0 0-.206-.576l-.245-.544a3.302 3.302 0 0 0-.283-.51 2.512 2.512 0 0 0-.329-.408 1.81 1.81 0 0 0-.459-.329 1.47 1.47 0 0 0-.51-.156 1.486 1.486 0 0 0-.42.018 1.703 1.703 0 0 0-.442.135l-.418.189Z",
                fill: "#00B649",
              }),
            ],
          });
      let Text = (e) =>
        (0, i.jsx)("svg", {
          width: 151,
          height: 157,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M0 0h36v1H0V0ZM0 3h151v1H0V3ZM0 6h151v1H0V6ZM0 9h151v1H0V9ZM0 12h151v1H0v-1ZM0 15h151v1H0v-1ZM0 18h52v1H0v-1ZM0 24h151v1H0v-1ZM0 27h151v1H0v-1ZM0 30h151v1H0v-1ZM0 33h151v1H0v-1ZM0 36h151v1H0v-1ZM0 39h151v1H0v-1ZM0 42h151v1H0v-1ZM0 45h151v1H0v-1ZM0 48h151v1H0v-1ZM0 51h151v1H0v-1ZM0 54h151v1H0v-1ZM0 57h151v1H0v-1ZM0 60h151v1H0v-1ZM0 63h151v1H0v-1ZM0 66h151v1H0v-1ZM0 69h151v1H0v-1ZM0 72h151v1H0v-1ZM0 75h151v1H0v-1ZM0 78h151v1H0v-1ZM0 81h151v1H0v-1ZM0 84h131v1H0v-1ZM0 93h151v1H0v-1ZM0 96h151v1H0v-1ZM0 99h151v1H0v-1ZM0 102h151v1H0v-1ZM0 105h151v1H0v-1ZM0 108h151v1H0v-1ZM0 111h151v1H0v-1ZM0 114h151v1H0v-1ZM0 117h151v1H0v-1ZM0 120h82v1H0v-1ZM0 126h151v1H0v-1ZM0 129h151v1H0v-1ZM0 132h151v1H0v-1ZM0 135h151v1H0v-1ZM0 138h151v1H0v-1ZM0 141h151v1H0v-1ZM0 144h151v1H0v-1ZM0 147h151v1H0v-1ZM0 150h151v1H0v-1ZM0 153h151v1H0v-1ZM0 156h43v1H0v-1Z",
            fill: "#D2D2D2",
          }),
        });
      var eA = {
          src: "/_next/static/media/person03.cc845d37.jpg",
          height: 512,
          width: 512,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAACAQQDAQAAAAAAAAAAAAABAgADBBESBiFRI//EABUBAQEAAAAAAAAAAAAAAAAAAAEE/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAECERP/2gAMAwEAAhEDEQA/AKWpFXnNy5Zj8FrI/eBT0KlM+bd49iIiqa0q4zSR/9k=",
          blurWidth: 8,
          blurHeight: 8,
        },
        ec = [
          {
            type: "BLOOD_TEST",
            name: "Rosie Murphy",
            pid: "PAC0242",
            tid: "MB24LL34",
            date: "16/05/23",
            results: [
              { name: "HEMOGLOBIN", amount: 12, unit: "g/dL" },
              { name: "RBC", amount: 3.3, unit: "10^6/ul", highlight: !0 },
              { name: "HCT", amount: 36, unit: "%", highlight: !0 },
              { name: "MCV", amount: 83, unit: "fl" },
              { name: "MCH", amount: 27, unit: "pg" },
              { name: "MCHC", amount: 33, unit: "g/dL" },
              { name: "RDW", amount: 13, unit: "%" },
              { name: "WBC", amount: 6.7, unit: "10^3/ul" },
              { name: "NEU%", amount: 60, unit: "%" },
              { name: "LYM%", amount: 30, unit: "%" },
            ],
          },
          {
            type: "PASSPORT",
            photo: {
              src: "/_next/static/media/person06.340610c4.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABBAICAwAAAAAAAAAAAAABAAIDEQQFBhIhMUH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABoRAAICAwAAAAAAAAAAAAAAAAACAXEDETH/2gAMAwEAAhEDEQA/AKmPttG3lufnSbSEwgwxMnEh6Nd1IMd3VeLPyz7REVEWNTYMjco//9k=",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Zach",
            lastName: "Lynch",
            nationality: "Irish",
            cardNumber: "CM0224D292",
            dob: "25 Oct 1990",
            issueDate: "18 May 2022",
            expirationDate: "18 May 2027",
          },
          {
            type: "STATEMENT",
            name: "THOMAS CULLEN",
            address: "BR\xc9IGE, STRAND ROAD, BRAY, CO.WICKLOW",
            account: "EB294049K",
            transactions: [
              { date: "140523", description: "SPROUT", amount: "-€12.00" },
              { date: "130523", description: "DUCK", amount: "-€12.20" },
              { date: "120523", description: "BOOJUM", amount: "-€11.40" },
              { date: "110523", description: "DUNNES", amount: "-€09.20" },
              { date: "100523", description: "F&B", amount: "-€07.90" },
              { date: "090523", description: "AVOCA", amount: "-€13.10" },
              { date: "080523", description: "NANDOS", amount: "-€14.20" },
              { date: "070523", description: "TANG", amount: "-€12.50" },
              { date: "060523", description: "UMI", amount: "-€08.20" },
              { date: "050523", description: "LEMON", amount: "-€10.20" },
              { date: "040523", description: "MASA", amount: "-€12.40" },
            ],
          },
          {
            type: "IDENTITY_CARD",
            photo: eA,
            firstName: "Lucy",
            lastName: "Lockman",
            cardNumber: "IG2099LL23",
            dob: "12 Oct 1990",
            expiration: "15 Feb 2025",
            address: "BR\xc9IGE, STRAND ROAD, BRAY, CO.WICKLOW",
          },
          {
            type: "DRIVING_LICENSE",
            photo: {
              src: "/_next/static/media/person07.ecd981bd.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAACAgIDAQAAAAAAAAAAAAABAwACBTEREyJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAL/xAAWEQEBAQAAAAAAAAAAAAAAAAARAAH/2gAMAwEAAhEDEQA/ALiMPkGZd7RRhV00usm/k7BqPnOrRESwm63/2Q==",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Ken",
            lastName: "Dunne",
            dob: "20.06.1963 IRELAND",
            issueDate: "01.05.16",
            issueAuthority: "ROAD SAFETY AUTHORITY",
            expirationDate: "01.05.26",
            cardNumber: "922891101",
            driverNumber: "94L11N81",
            class: "B",
            address: "br\xe9ige,STRAND Road,BRAY,CO.WICKLOW",
          },
          { type: "XRAY", patient: "Rachel Kelly" },
          {
            type: "PASSPORT",
            photo: {
              src: "/_next/static/media/person02.0e252f5b.png",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAZlBMVEWetsbw9v2ovM1kYWWYssKvwtF8Tj+uxdW5y9m9z955cnN/YlvD0+HCiHSPlZ3Z2Nt/nq+Oq7t7WEpvVEn1ybLuyLieem+Go7Svm5aegX20e2nOzdWmY1BiMCRHKifS3eixtsH5/v9leMprAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARElEQVR4nAXBhQHAMAwDMBeTFMcM3f9PTgJImwDbgSQMo6Ee4vw0Rw0wxyMvBHDar7yxhZNy+0IWkPb46la8Sp31U+kHXJEC8SWCxJMAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Nev",
            lastName: "Flynn",
            nationality: "Irish",
            cardNumber: "CM1193L921",
            dob: "22 Jan 1992",
            issueDate: "20 Jun 2020",
            expirationDate: "20 Jun 2025",
          },
          {
            type: "DRIVING_LICENSE",
            photo: {
              src: "/_next/static/media/person04.309bb0b0.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAfEAABBAEFAQAAAAAAAAAAAAABAAIDBBIFBxEVMSL/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGBEBAQEBAQAAAAAAAAAAAAAAAQMAAmH/2gAMAwEAAhEDEQA/AL6m4mgd5dvGSV1RwjgYS365AOTg33HxERInMRxq06EPN//Z",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Thomas",
            lastName: "Cullen",
            dob: "14.06.1972 IRELAND",
            issueDate: "05.09.19",
            issueAuthority: "ROAD SAFETY AUTHORITY",
            expirationDate: "05.09.29",
            cardNumber: "938232209",
            driverNumber: "01M23KF2",
            class: "B",
            address: "br\xe9ige,STRAND Road,BRAY,CO.WICKLOW",
          },
          {
            type: "DRIVING_LICENSE",
            photo: {
              src: "/_next/static/media/person05.e127194a.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAjEAAABAUEAwAAAAAAAAAAAAAAAQIDBAURFCEGEhMjMVFy/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABgRAAIDAAAAAAAAAAAAAAAAAAACASFx/9oADAMBAAIRAxEAPwC2OnBt6hYmBLXZXioRT5O9WzjLFPszz7LzQAAKq3OhPNLh/9k=",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Lucy",
            lastName: "Parker",
            dob: "20.06.1993 IRELAND",
            issueDate: "02.08.20",
            issueAuthority: "ROAD SAFETY AUTHORITY",
            expirationDate: "02.08.30",
            cardNumber: "124322590",
            driverNumber: "02M59ND4",
            class: "B",
            address: "br\xe9ige,STRAND Road,BRAY,CO.WICKLOW",
          },
          { type: "CONTRACT" },
          {
            type: "VET_REPORT",
            photo: {
              src: "/_next/static/media/cat.6eba4eeb.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAACAgEFAAAAAAAAAAAAAAABAgAEEQMFBiFh/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABcRAAMBAAAAAAAAAAAAAAAAAAABAzH/2gAMAwEAAhEDEQA/ALOJVq1rZbF16oCaCBFcr0Vzgn05iIjTWg01H//Z",
              blurWidth: 8,
              blurHeight: 8,
            },
            details: {
              name: "Mr.Jeremy",
              breed: "Japanese Bobtail",
              age: "6 years",
              weight: "4.5 kg",
              color: "Brown",
              sex: "Male",
            },
            procedures: [
              { name: "TT4", amount: 13, unit: "nmol/L" },
              { name: "TT3", amount: 1.1, unit: "nmol/L" },
              { name: "FT4", amount: "3L", unit: "pnmol/L" },
              { name: "FT3", amount: "4.0", unit: "pnmol/L" },
              { name: "T4 Antibody", amount: "6", unit: "%" },
              { name: "T3 Antibody", amount: "6", unit: "%" },
              { name: "THYROID STIM H", amount: "0.41", unit: "ng/ml" },
              { name: "THYROGLOBULIN", amount: "8", unit: "%" },
            ],
          },
          {
            type: "IDENTITY_CARD",
            photo: eA,
            firstName: "Lucy",
            lastName: "Lockman",
            cardNumber: "IG2099LL23",
            dob: "12 Oct 1990",
            expiration: "15 Feb 2025",
            address: "BR\xc9IGE, STRAND ROAD, BRAY, CO.WICKLOW",
          },
          {
            type: "PASSPORT",
            photo: {
              src: "/_next/static/media/person09.17fb0dbc.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAgEAABAgUFAAAAAAAAAAAAAAABAAIDBhETFAQFElKB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIx/9oADAMBAAIRAxEAPwChOe0unkx80CFlDSigPIstlpBb0uUNfURFQTp5f//Z",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Julie",
            lastName: "Harper",
            nationality: "Irish",
            cardNumber: "PM1192K192",
            dob: "19 Nov 1989",
            issueDate: "12 Aug 2020",
            expirationDate: "12 Aug 2025",
          },
          {
            type: "IDENTITY_CARD",
            photo: {
              src: "/_next/static/media/person01.6d843f8c.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAACAgIBBQAAAAAAAAAAAAABAwAEAhEFBhIhQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAACQf/aAAwDAQACEQMRAD8AqOQoWE9a07WCHBWSGZNcASCO0ALPwb86PuIiJWsf/9k=",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Daniel",
            lastName: "Murphy",
            cardNumber: "IO1922MR02",
            dob: "02 May 1990",
            expiration: "27 Jun 2028",
            address: "BR\xc9IGE, STRAND ROAD, BRAY, CO.WICKLOW",
          },
          {
            type: "STATEMENT",
            name: "THOMAS CULLEN",
            address: "BR\xc9IGE, STRAND ROAD, BRAY, CO.WICKLOW",
            account: "EB294049K",
            transactions: [
              { date: "140523", description: "SPROUT", amount: "-€12.00" },
              { date: "130523", description: "DUCK", amount: "-€12.20" },
              { date: "120523", description: "BOOJUM", amount: "-€11.40" },
              { date: "110523", description: "DUNNES", amount: "-€09.20" },
              { date: "100523", description: "F&B", amount: "-€07.90" },
              { date: "090523", description: "AVOCA", amount: "-€13.10" },
              { date: "080523", description: "NANDOS", amount: "-€14.20" },
              { date: "070523", description: "TANG", amount: "-€12.50" },
              { date: "060523", description: "UMI", amount: "-€08.20" },
              { date: "050523", description: "LEMON", amount: "-€10.20" },
              { date: "040523", description: "MASA", amount: "-€12.40" },
            ],
          },
          {
            type: "PASSPORT",
            photo: {
              src: "/_next/static/media/person08.2336c0d6.jpg",
              height: 512,
              width: 512,
              blurDataURL:
                "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIEEQMFBxMiUf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIRAxEAPwCkk60MG58fC6dkbEdEcXdjxE0AG+XYJtERWZI03//Z",
              blurWidth: 8,
              blurHeight: 8,
            },
            firstName: "Marcus",
            lastName: "Edwards",
            nationality: "Irish",
            cardNumber: "CM0224D292",
            dob: "25 Oct 1990",
            issueDate: "18 May 2022",
            expirationDate: "18 May 2027",
          },
        ],
        ep = s(14329),
        ex = s.n(ep),
        DriversLicense_Pattern = (e) =>
          (0, i.jsxs)("svg", {
            width: "200",
            height: "200",
            ...e,
            children: [
              (0, i.jsx)("pattern", {
                id: "driversLicensePattern",
                x: "0",
                y: "0",
                width: "25",
                height: "25",
                viewBox: "0 0 25 25",
                patternUnits: "userSpaceOnUse",
                children: (0, i.jsx)("path", {
                  d: "M0 8.57527V0.00480677H8.57212C8.69962 0.365585 8.67856 0.762229 8.51357 1.10748C8.34857 1.45273 8.05315 1.71832 7.69231 1.8458C7.33146 1.97328 6.93474 1.95223 6.58942 1.78726C6.2441 1.6223 5.97847 1.32694 5.85096 0.96616H2.83654C2.74232 1.42804 2.51434 1.85202 2.18095 2.18534C1.84757 2.51866 1.42351 2.7466 0.961538 2.8408V5.85464C1.32239 5.98213 1.6178 6.24771 1.7828 6.59296C1.94779 6.93821 1.96885 7.33486 1.84135 7.69564C1.71384 8.05641 1.44821 8.35177 1.10289 8.51674C0.757568 8.6817 0.360847 8.70276 0 8.57527ZM0 17.3909C0.360847 17.2634 0.757568 17.2845 1.10289 17.4494C1.44821 17.6144 1.71384 17.9097 1.84135 18.2705C1.96885 18.6313 1.94779 19.0279 1.7828 19.3732C1.6178 19.7185 1.32239 19.984 0.961538 20.1115V23.1254C1.42351 23.2196 1.84757 23.4475 2.18095 23.7808C2.51434 24.1141 2.74232 24.5381 2.83654 25H5.85096C5.95007 24.7183 6.13418 24.4744 6.37789 24.3018C6.6216 24.1292 6.91289 24.0365 7.21154 24.0365C7.51019 24.0365 7.80147 24.1292 8.04518 24.3018C8.28889 24.4744 8.47301 24.7183 8.57212 25H0V17.3909ZM17.3894 25C17.4885 24.7183 17.6726 24.4744 17.9164 24.3018C18.1601 24.1292 18.4514 24.0365 18.75 24.0365C19.0486 24.0365 19.3399 24.1292 19.5836 24.3018C19.8274 24.4744 20.0115 24.7183 20.1106 25H23.125C23.2192 24.5381 23.4472 24.1141 23.7806 23.7808C24.114 23.4475 24.538 23.2196 25 23.1254V20.1115C24.7183 20.0124 24.4743 19.8283 24.3016 19.5847C24.129 19.341 24.0363 19.0498 24.0363 18.7512C24.0363 18.4526 24.129 18.1614 24.3016 17.9177C24.4743 17.6741 24.7183 17.49 25 17.3909V25H17.3894ZM0 15.3528V10.6518C0.312247 10.5853 0.634615 10.5817 0.948286 10.6411C1.26196 10.7005 1.56065 10.8218 1.82692 10.9979L3.95673 8.86849C3.80909 8.56204 3.77455 8.21328 3.85921 7.88384C3.94387 7.55439 4.14228 7.26548 4.41939 7.06814C4.69649 6.87081 5.03445 6.77776 5.37353 6.80544C5.71261 6.83312 6.03099 6.97975 6.2724 7.21942C6.51381 7.45909 6.66272 7.77636 6.6928 8.11517C6.72289 8.45399 6.63221 8.79252 6.4368 9.07096C6.24139 9.3494 5.95383 9.54981 5.62493 9.63678C5.29603 9.72375 4.94696 9.69168 4.63942 9.54624L2.5 11.6756C2.7605 12.0691 2.89941 12.5305 2.89941 13.0023C2.89941 13.4741 2.7605 13.9355 2.5 14.329L4.63462 16.4584C4.94168 16.3123 5.2905 16.2794 5.61947 16.3655C5.94845 16.4515 6.23643 16.6511 6.43256 16.9288C6.62869 17.2066 6.72035 17.5446 6.69138 17.8834C6.6624 18.2222 6.51464 18.5398 6.27418 18.7802C6.03372 19.0206 5.71604 19.1683 5.37722 19.1973C5.03841 19.2263 4.70025 19.1346 4.42245 18.9385C4.14465 18.7424 3.94509 18.4545 3.859 18.1256C3.7729 17.7967 3.80582 17.4479 3.95192 17.1409L1.82692 15.0019C1.56065 15.178 1.26196 15.2993 0.948286 15.3587C0.634615 15.4181 0.312247 15.4145 0 15.348L0 15.3528ZM25 8.57527C24.7183 8.47619 24.4743 8.29211 24.3016 8.04844C24.129 7.80478 24.0363 7.51355 24.0363 7.21496C24.0363 6.91637 24.129 6.62514 24.3016 6.38147C24.4743 6.13781 24.7183 5.95373 25 5.85464V2.8408C24.538 2.7466 24.114 2.51866 23.7806 2.18534C23.4472 1.85202 23.2192 1.42804 23.125 0.96616H20.1106C19.9831 1.32694 19.7174 1.6223 19.3721 1.78726C19.0268 1.95223 18.6301 1.97328 18.2692 1.8458C17.9084 1.71832 17.613 1.45273 17.448 1.10748C17.283 0.762229 17.2619 0.365585 17.3894 0.00480677H25V8.57527ZM25 15.3528C24.705 15.2906 24.4244 15.1732 24.1731 15.0067L22.0433 17.1409C22.1887 17.4484 22.2208 17.7974 22.1338 18.1262C22.0468 18.4551 21.8464 18.7426 21.5679 18.938C21.2894 19.1333 20.9508 19.224 20.6119 19.1939C20.273 19.1638 19.9557 19.015 19.716 18.7736C19.4763 18.5322 19.3296 18.2139 19.3019 17.8749C19.2743 17.5359 19.3673 17.198 19.5647 16.9209C19.7621 16.6439 20.051 16.4455 20.3805 16.3609C20.7101 16.2762 21.0589 16.3108 21.3654 16.4584L23.4952 14.329C23.2347 13.9355 23.0958 13.4741 23.0958 13.0023C23.0958 12.5305 23.2347 12.0691 23.4952 11.6756L21.3654 9.54624C21.0584 9.69322 20.7093 9.72692 20.3799 9.64138C20.0505 9.55585 19.7619 9.35658 19.5652 9.07883C19.3686 8.80108 19.2765 8.46274 19.3053 8.12367C19.3341 7.78459 19.4819 7.46661 19.7226 7.22598C19.9632 6.98536 20.2813 6.83758 20.6204 6.80879C20.9596 6.78 21.298 6.87206 21.5758 7.06868C21.8536 7.2653 22.0529 7.55381 22.1384 7.88318C22.224 8.21255 22.1903 8.56157 22.0433 8.86849L24.1731 10.9979C24.4279 10.8296 24.7115 10.7095 25 10.6518V15.3528ZM10.649 0.00480677H15.351C15.4175 0.316994 15.4211 0.6393 15.3617 0.952911C15.3022 1.26652 15.1809 1.56515 15.0048 1.83138L17.1394 3.96078C17.4465 3.8147 17.7953 3.78179 18.1243 3.86787C18.4533 3.95395 18.7412 4.15347 18.9374 4.43121C19.1335 4.70896 19.2252 5.04705 19.1962 5.3858C19.1672 5.72456 19.0194 6.04218 18.779 6.28259C18.5385 6.523 18.2208 6.67073 17.882 6.6997C17.5432 6.72868 17.2051 6.63703 16.9273 6.44093C16.6495 6.24484 16.4499 5.95692 16.3638 5.62801C16.2777 5.29909 16.3106 4.95035 16.4567 4.64334L14.3269 2.50433C13.9334 2.76478 13.4719 2.90366 13 2.90366C12.5281 2.90366 12.0666 2.76478 11.6731 2.50433L9.54327 4.63853C9.68874 4.94601 9.72082 5.29501 9.63383 5.62385C9.54684 5.95268 9.34639 6.24019 9.0679 6.43556C8.78941 6.63094 8.4508 6.72159 8.11193 6.69152C7.77305 6.66144 7.45571 6.51256 7.216 6.27119C6.97629 6.02983 6.82963 5.71151 6.80194 5.37249C6.77425 5.03348 6.86732 4.69559 7.06469 4.41854C7.26206 4.14149 7.55104 3.94311 7.88055 3.85847C8.21005 3.77382 8.55888 3.80836 8.86538 3.95597L10.9952 1.82657C10.8191 1.56035 10.6978 1.26171 10.6383 0.948104C10.5789 0.634493 10.5825 0.312187 10.649 0V0.00480677ZM10.649 25C10.7115 24.7116 10.8269 24.428 10.9952 24.1732L8.86538 22.0438C8.5584 22.1908 8.20933 22.2245 7.87989 22.139C7.55045 22.0534 7.26189 21.8542 7.06523 21.5764C6.86857 21.2987 6.7765 20.9603 6.80529 20.6213C6.83409 20.2822 6.98189 19.9642 7.22257 19.7236C7.46324 19.483 7.78127 19.3352 8.12042 19.3064C8.45956 19.2776 8.79796 19.3697 9.07577 19.5663C9.35357 19.7629 9.55288 20.0514 9.63843 20.3808C9.72399 20.7101 9.69028 21.0592 9.54327 21.3661L11.6731 23.4955C12.0666 23.235 12.5281 23.0961 13 23.0961C13.4719 23.0961 13.9334 23.235 14.3269 23.4955L16.4567 21.3661C16.3091 21.0596 16.2745 20.7109 16.3592 20.3814C16.4439 20.052 16.6423 19.7631 16.9194 19.5657C17.1965 19.3684 17.5344 19.2754 17.8735 19.303C18.2126 19.3307 18.531 19.4774 18.7724 19.717C19.0138 19.9567 19.1627 20.274 19.1928 20.6128C19.2229 20.9516 19.1322 21.2901 18.9368 21.5686C18.7414 21.847 18.4538 22.0474 18.1249 22.1344C17.796 22.2214 17.447 22.1893 17.1394 22.0438L15.0048 24.1732C15.1779 24.428 15.2933 24.7116 15.351 25H10.649ZM15.3365 13.4638C15.2423 13.9256 15.0143 14.3496 14.681 14.6829C14.3476 15.0163 13.9235 15.2442 13.4615 15.3384V18.3522C13.7823 18.4656 14.0527 18.6887 14.2248 18.9822C14.397 19.2756 14.4598 19.6204 14.4023 19.9556C14.3448 20.2909 14.1705 20.5951 13.9104 20.8143C13.6503 21.0336 13.321 21.1538 12.9808 21.1538C12.6405 21.1538 12.3113 21.0336 12.0511 20.8143C11.791 20.5951 11.6168 20.2909 11.5592 19.9556C11.5017 19.6204 11.5646 19.2756 11.7367 18.9822C11.9089 18.6887 12.1792 18.4656 12.5 18.3522V15.3384C12.038 15.2442 11.614 15.0163 11.2806 14.6829C10.9472 14.3496 10.7192 13.9256 10.625 13.4638H7.61058C7.49717 13.7845 7.27401 14.0548 6.98054 14.2269C6.68707 14.399 6.34219 14.4619 6.00686 14.4043C5.67152 14.3468 5.36733 14.1726 5.14803 13.9125C4.92873 13.6525 4.80845 13.3232 4.80845 12.9831C4.80845 12.6429 4.92873 12.3137 5.14803 12.0536C5.36733 11.7935 5.67152 11.6193 6.00686 11.5618C6.34219 11.5043 6.68707 11.5671 6.98054 11.7393C7.27401 11.9114 7.49717 12.1817 7.61058 12.5024H10.625C10.7192 12.0405 10.9472 11.6165 11.2806 11.2832C11.614 10.9499 12.038 10.722 12.5 10.6278V7.61392C12.1792 7.50053 11.9089 7.27741 11.7367 6.984C11.5646 6.69059 11.5017 6.34578 11.5592 6.01051C11.6168 5.67524 11.791 5.3711 12.0511 5.15184C12.3113 4.93259 12.6405 4.81233 12.9808 4.81233C13.321 4.81233 13.6503 4.93259 13.9104 5.15184C14.1705 5.3711 14.3448 5.67524 14.4023 6.01051C14.4598 6.34578 14.397 6.69059 14.2248 6.984C14.0527 7.27741 13.7823 7.50053 13.4615 7.61392V10.6278C13.9235 10.722 14.3476 10.9499 14.681 11.2832C15.0143 11.6165 15.2423 12.0405 15.3365 12.5024H18.351C18.4644 12.1817 18.6875 11.9114 18.981 11.7393C19.2745 11.5671 19.6193 11.5043 19.9547 11.5618C20.29 11.6193 20.5942 11.7935 20.8135 12.0536C21.0328 12.3137 21.1531 12.6429 21.1531 12.9831C21.1531 13.3232 21.0328 13.6525 20.8135 13.9125C20.5942 14.1726 20.29 14.3468 19.9547 14.4043C19.6193 14.4619 19.2745 14.399 18.981 14.2269C18.6875 14.0548 18.4644 13.7845 18.351 13.4638H15.3365Z",
                  fill: "black",
                }),
              }),
              (0, i.jsx)("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(#driversLicensePattern)",
              }),
            ],
          });
      function Detail(e) {
        let { name: t, value: s } = e;
        return (0, i.jsxs)("div", {
          className: ex().detail,
          children: [(0, i.jsx)("span", { children: t }), s],
        });
      }
      var eM = s(73242),
        eu = s.n(eM),
        IdentityCard_Pattern = (e) =>
          (0, i.jsxs)("svg", {
            width: "200",
            height: "200",
            ...e,
            children: [
              (0, i.jsx)("pattern", {
                id: "identificationCardPattern",
                x: "0",
                y: "0",
                width: "20",
                height: "35",
                viewBox: "0 0 20 35",
                patternUnits: "userSpaceOnUse",
                children: (0, i.jsx)("path", {
                  d: "m9.993 6.607 9.286 5.357V22.68l-9.286 5.357-9.279-5.357V11.964l9.279-5.357Zm-7.85 6.179v9.071l7.85 4.529 7.857-4.536v-9.064L9.993 8.257l-7.85 4.529ZM0 10.714l9.271-5.357V0H7.843v4.536L0 9.064v1.65ZM0 23.93l9.271 5.357V35H7.843v-4.893L0 25.58v-1.65ZM10.714 0v5.357l9.279 5.357H20v-1.65h-.007l-7.85-4.528V0h-1.429Zm0 35v-5.714l9.279-5.357H20v1.65h-.007l-7.85 4.528V35h-1.429Z",
                  fill: "#F7F4FF",
                }),
              }),
              (0, i.jsx)("rect", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                fill: "url(#identificationCardPattern)",
              }),
            ],
          }),
        ej = s(91323),
        eZ = s.n(ej),
        BloodTest_QRCode = (e) =>
          (0, i.jsxs)("svg", {
            width: 39,
            height: 39,
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: [
              (0, i.jsx)("path", {
                d: "M11.98.324h-1.196v1.197h1.197V.324ZM14.305.324h-1.197v1.197h1.197V.324Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M15.467.324H14.27v1.197h1.197V.324ZM17.791.324h-1.197v1.197h1.197V.324ZM22.44.324h-1.197v1.197h1.197V.324Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M23.602.324h-1.197v1.197h1.197V.324Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765.324h-1.198v1.197h1.198V.324Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927.324H24.73v1.197h1.197V.324ZM28.251.324h-1.197v1.197h1.197V.324ZM13.143 1.486h-1.197v1.198h1.197V1.486Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 1.486h-1.197v1.198h1.197V1.486Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M15.467 1.486H14.27v1.198h1.197V1.486ZM18.954 1.486h-1.197v1.198h1.197V1.486ZM22.44 1.486h-1.197v1.198h1.197V1.486ZM24.765 1.486h-1.198v1.198h1.198V1.486Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 1.486H24.73v1.198h1.197V1.486ZM10.819 2.649H9.622v1.197h1.197V2.649ZM14.305 2.649h-1.197v1.197h1.197V2.649ZM17.791 2.649h-1.197v1.197h1.197V2.649Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 2.649h-1.197v1.197h1.197V2.649ZM23.602 2.649h-1.197v1.197h1.197V2.649ZM25.927 2.649H24.73v1.197h1.197V2.649Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 2.649h-1.197v1.197h1.197V2.649ZM29.413 2.649h-1.197v1.197h1.197V2.649ZM10.819 3.81H9.622v1.198h1.197V3.81Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 3.81h-1.196v1.198h1.197V3.81Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 3.81h-1.197v1.198h1.197V3.81ZM22.44 3.81h-1.197v1.198h1.197V3.81ZM25.927 3.81H24.73v1.198h1.197V3.81ZM28.251 3.81h-1.197v1.198h1.197V3.81Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 3.81h-1.197v1.198h1.197V3.81ZM10.819 4.973H9.622V6.17h1.197V4.973ZM16.63 4.973h-1.198V6.17h1.197V4.973Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 4.973h-1.197V6.17h1.197V4.973Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 4.973h-1.197V6.17h1.197V4.973Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 4.973h-1.197V6.17h1.197V4.973Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 4.973h-1.197V6.17h1.197V4.973ZM24.765 4.973h-1.198V6.17h1.198V4.973ZM27.089 4.973h-1.197V6.17h1.197V4.973ZM10.819 6.135H9.622v1.197h1.197V6.135ZM13.143 6.135h-1.197v1.197h1.197V6.135ZM15.467 6.135H14.27v1.197h1.197V6.135Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 6.135h-1.198v1.197h1.197V6.135Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 6.135h-1.197v1.197h1.197V6.135ZM21.278 6.135h-1.197v1.197h1.197V6.135ZM23.602 6.135h-1.197v1.197h1.197V6.135ZM27.089 6.135h-1.197v1.197h1.197V6.135Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 6.135h-1.197v1.197h1.197V6.135Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 6.135h-1.197v1.197h1.197V6.135ZM10.819 7.297H9.622v1.197h1.197V7.297ZM13.143 7.297h-1.197v1.197h1.197V7.297ZM15.467 7.297H14.27v1.197h1.197V7.297ZM17.791 7.297h-1.197v1.197h1.197V7.297ZM20.116 7.297h-1.197v1.197h1.197V7.297ZM22.44 7.297h-1.197v1.197h1.197V7.297ZM24.765 7.297h-1.198v1.197h1.198V7.297ZM27.089 7.297h-1.197v1.197h1.197V7.297Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 7.297h-1.197v1.197h1.197V7.297ZM10.819 8.46H9.622v1.196h1.197V8.46ZM13.143 8.46h-1.197v1.196h1.197V8.46ZM15.467 8.46H14.27v1.196h1.197V8.46ZM17.791 8.46h-1.197v1.196h1.197V8.46ZM20.116 8.46h-1.197v1.196h1.197V8.46ZM23.602 8.46h-1.197v1.196h1.197V8.46Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765 8.46h-1.198v1.196h1.198V8.46Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 8.46H24.73v1.196h1.197V8.46Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 8.46h-1.197v1.196h1.197V8.46Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 8.46h-1.197v1.196h1.197V8.46ZM1.521 9.622H.324v1.197h1.197V9.622ZM3.846 9.622H2.649v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M5.008 9.622H3.81v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M6.17 9.622H4.973v1.197H6.17V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M7.332 9.622H6.135v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M8.494 9.622H7.297v1.197h1.197V9.622ZM11.98 9.622h-1.196v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 9.622h-1.197v1.197h1.197V9.622ZM15.467 9.622H14.27v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 9.622h-1.198v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 9.622h-1.197v1.197h1.197V9.622ZM21.278 9.622h-1.197v1.197h1.197V9.622ZM23.602 9.622h-1.197v1.197h1.197V9.622ZM27.089 9.622h-1.197v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 9.622h-1.197v1.197h1.197V9.622ZM31.738 9.622H30.54v1.197h1.198V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 9.622h-1.197v1.197H32.9V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 9.622h-1.197v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 9.622h-1.197v1.197h1.197V9.622Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 9.622H35.19v1.197h1.197V9.622ZM3.846 10.784H2.649v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M5.008 10.784H3.81v1.197h1.197v-1.197ZM7.332 10.784H6.135v1.197h1.197v-1.197ZM10.819 10.784H9.622v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 10.784h-1.196v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 10.784h-1.197v1.197h1.197v-1.197ZM16.63 10.784h-1.198v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 10.784h-1.197v1.197h1.197v-1.197ZM20.116 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M22.44 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M23.602 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765 10.784h-1.198v1.197h1.198v-1.197ZM27.089 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 10.784h-1.197v1.197h1.197v-1.197ZM31.738 10.784H30.54v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 10.784h-1.197v1.197H32.9v-1.197ZM35.224 10.784h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 10.784H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 10.784h-1.197v1.197h1.197v-1.197ZM3.846 11.946H2.649v1.197h1.197v-1.197ZM8.494 11.946H7.297v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M9.656 11.946H8.46v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M10.819 11.946H9.622v1.197h1.197v-1.197ZM13.143 11.946h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 11.946h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M15.467 11.946H14.27v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 11.946h-1.198v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 11.946h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 11.946h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 11.946h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 11.946h-1.197v1.197h1.197v-1.197ZM27.089 11.946h-1.197v1.197h1.197v-1.197ZM29.413 11.946h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 11.946h-1.197v1.197h1.197v-1.197ZM34.062 11.946h-1.197v1.197h1.197v-1.197ZM36.386 11.946H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 11.946h-1.197v1.197h1.197v-1.197ZM1.521 13.108H.324v1.197h1.197v-1.197ZM3.846 13.108H2.649v1.197h1.197v-1.197ZM7.332 13.108H6.135v1.197h1.197v-1.197ZM9.656 13.108H8.46v1.197h1.197v-1.197ZM14.305 13.108h-1.197v1.197h1.197v-1.197ZM16.63 13.108h-1.198v1.197h1.197v-1.197ZM21.278 13.108h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M22.44 13.108h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M23.602 13.108h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765 13.108h-1.198v1.197h1.198v-1.197ZM28.251 13.108h-1.197v1.197h1.197v-1.197ZM30.575 13.108h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 13.108H30.54v1.197h1.198v-1.197ZM34.062 13.108h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 13.108h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 13.108H35.19v1.197h1.197v-1.197ZM1.521 14.27H.324v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M2.683 14.27H1.486v1.197h1.197V14.27ZM8.494 14.27H7.297v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M9.656 14.27H8.46v1.197h1.197V14.27ZM11.98 14.27h-1.196v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 14.27h-1.197v1.197h1.197V14.27ZM15.467 14.27H14.27v1.197h1.197V14.27ZM17.791 14.27h-1.197v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 14.27h-1.197v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 14.27h-1.197v1.197h1.197V14.27ZM23.602 14.27h-1.197v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765 14.27h-1.198v1.197h1.198V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 14.27H24.73v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 14.27h-1.197v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 14.27h-1.197v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 14.27h-1.197v1.197h1.197V14.27Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 14.27h-1.197v1.197h1.197V14.27ZM35.224 14.27h-1.197v1.197h1.197V14.27ZM37.548 14.27h-1.197v1.197h1.197V14.27ZM1.521 15.432H.324v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M2.683 15.432H1.486v1.197h1.197v-1.197ZM6.17 15.432H4.973v1.197H6.17v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M7.332 15.432H6.135v1.197h1.197v-1.197ZM10.819 15.432H9.622v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 15.432h-1.196v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 15.432h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 15.432h-1.197v1.197h1.197v-1.197ZM16.63 15.432h-1.198v1.197h1.197v-1.197ZM18.954 15.432h-1.197v1.197h1.197v-1.197ZM21.278 15.432h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M22.44 15.432h-1.197v1.197h1.197v-1.197ZM25.927 15.432H24.73v1.197h1.197v-1.197ZM29.413 15.432h-1.197v1.197h1.197v-1.197ZM31.738 15.432H30.54v1.197h1.198v-1.197ZM36.386 15.432H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 15.432h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M38.71 15.432h-1.197v1.197h1.197v-1.197ZM1.521 16.595H.324v1.197h1.197v-1.197ZM3.846 16.595H2.649v1.197h1.197v-1.197ZM8.494 16.595H7.297v1.197h1.197v-1.197ZM17.791 16.595h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 16.595h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 16.595h-1.197v1.197h1.197v-1.197ZM24.765 16.595h-1.198v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 16.595H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 16.595h-1.197v1.197h1.197v-1.197ZM30.575 16.595h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 16.595H30.54v1.197h1.198v-1.197ZM35.224 16.595h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 16.595H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 16.595h-1.197v1.197h1.197v-1.197ZM2.683 17.757H1.486v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M3.846 17.757H2.649v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M5.008 17.757H3.81v1.197h1.197v-1.197ZM7.332 17.757H6.135v1.197h1.197v-1.197ZM9.656 17.757H8.46v1.197h1.197v-1.197ZM15.467 17.757H14.27v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 17.757h-1.198v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 17.757h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 17.757h-1.197v1.197h1.197v-1.197ZM25.927 17.757H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 17.757h-1.197v1.197h1.197v-1.197ZM29.413 17.757h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 17.757h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 17.757H30.54v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 17.757h-1.197v1.197H32.9v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 17.757h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 17.757h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 17.757H35.19v1.197h1.197v-1.197ZM1.521 18.919H.324v1.197h1.197v-1.197ZM3.846 18.919H2.649v1.197h1.197v-1.197ZM6.17 18.919H4.973v1.197H6.17v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M7.332 18.919H6.135v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M8.494 18.919H7.297v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M9.656 18.919H8.46v1.197h1.197v-1.197ZM15.467 18.919H14.27v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 18.919h-1.198v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 18.919h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 18.919h-1.197v1.197h1.197v-1.197ZM21.278 18.919h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M22.44 18.919h-1.197v1.197h1.197v-1.197ZM27.089 18.919h-1.197v1.197h1.197v-1.197ZM29.413 18.919h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 18.919h-1.197v1.197h1.197v-1.197ZM32.9 18.919h-1.197v1.197H32.9v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 18.919h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 18.919h-1.197v1.197h1.197v-1.197ZM38.71 18.919h-1.197v1.197h1.197v-1.197ZM1.521 20.081H.324v1.197h1.197v-1.197ZM3.846 20.081H2.649v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M5.008 20.081H3.81v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M6.17 20.081H4.973v1.197H6.17v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M7.332 20.081H6.135v1.197h1.197v-1.197ZM13.143 20.081h-1.197v1.197h1.197v-1.197ZM16.63 20.081h-1.198v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 20.081h-1.197v1.197h1.197v-1.197ZM20.116 20.081h-1.197v1.197h1.197v-1.197ZM22.44 20.081h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M23.602 20.081h-1.197v1.197h1.197v-1.197ZM25.927 20.081H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 20.081h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 20.081h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 20.081h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 20.081h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 20.081H30.54v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 20.081h-1.197v1.197H32.9v-1.197ZM35.224 20.081h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 20.081H35.19v1.197h1.197v-1.197ZM38.71 20.081h-1.197v1.197h1.197v-1.197ZM3.846 21.243H2.649v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M5.008 21.243H3.81v1.197h1.197v-1.197ZM7.332 21.243H6.135v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M8.494 21.243H7.297v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M9.656 21.243H8.46v1.197h1.197v-1.197ZM14.305 21.243h-1.197v1.197h1.197v-1.197ZM16.63 21.243h-1.198v1.197h1.197v-1.197ZM18.954 21.243h-1.197v1.197h1.197v-1.197ZM22.44 21.243h-1.197v1.197h1.197v-1.197ZM24.765 21.243h-1.198v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 21.243H24.73v1.197h1.197v-1.197ZM30.575 21.243h-1.197v1.197h1.197v-1.197ZM32.9 21.243h-1.197v1.197H32.9v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 21.243h-1.197v1.197h1.197v-1.197ZM36.386 21.243H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 21.243h-1.197v1.197h1.197v-1.197ZM1.521 22.405H.324v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M2.683 22.405H1.486v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M3.846 22.405H2.649v1.197h1.197v-1.197ZM7.332 22.405H6.135v1.197h1.197v-1.197ZM9.656 22.405H8.46v1.197h1.197v-1.197ZM14.305 22.405h-1.197v1.197h1.197v-1.197ZM16.63 22.405h-1.198v1.197h1.197v-1.197ZM18.954 22.405h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 22.405h-1.197v1.197h1.197v-1.197ZM24.765 22.405h-1.198v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 22.405H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 22.405h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 22.405h-1.197v1.197h1.197v-1.197ZM30.575 22.405h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 22.405H30.54v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 22.405h-1.197v1.197H32.9v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 22.405h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 22.405h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 22.405H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 22.405h-1.197v1.197h1.197v-1.197ZM1.521 23.568H.324v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M2.683 23.568H1.486v1.197h1.197v-1.197ZM5.008 23.568H3.81v1.197h1.197v-1.197ZM7.332 23.568H6.135v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M8.494 23.568H7.297v1.197h1.197v-1.197ZM10.819 23.568H9.622v1.197h1.197v-1.197ZM14.305 23.568h-1.197v1.197h1.197v-1.197ZM18.954 23.568h-1.197v1.197h1.197v-1.197ZM22.44 23.568h-1.197v1.197h1.197v-1.197ZM25.927 23.568H24.73v1.197h1.197v-1.197ZM30.575 23.568h-1.197v1.197h1.197v-1.197ZM34.062 23.568h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 23.568h-1.197v1.197h1.197v-1.197ZM37.548 23.568h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M38.71 23.568h-1.197v1.197h1.197v-1.197ZM1.521 24.73H.324v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M2.683 24.73H1.486v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M3.846 24.73H2.649v1.197h1.197V24.73ZM7.332 24.73H6.135v1.197h1.197V24.73ZM9.656 24.73H8.46v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M10.819 24.73H9.622v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 24.73h-1.196v1.197h1.197V24.73ZM15.467 24.73H14.27v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 24.73h-1.198v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 24.73h-1.197v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 24.73h-1.197v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 24.73h-1.197v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 24.73h-1.197v1.197h1.197V24.73ZM24.765 24.73h-1.198v1.197h1.198V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 24.73H24.73v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 24.73h-1.197v1.197h1.197V24.73ZM30.575 24.73h-1.197v1.197h1.197V24.73ZM32.9 24.73h-1.197v1.197H32.9V24.73ZM35.224 24.73h-1.197v1.197h1.197V24.73Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 24.73H35.19v1.197h1.197V24.73ZM38.71 24.73h-1.197v1.197h1.197V24.73ZM1.521 25.892H.324v1.197h1.197v-1.197ZM8.494 25.892H7.297v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M9.656 25.892H8.46v1.197h1.197v-1.197ZM13.143 25.892h-1.197v1.197h1.197v-1.197ZM17.791 25.892h-1.197v1.197h1.197v-1.197ZM21.278 25.892h-1.197v1.197h1.197v-1.197ZM23.602 25.892h-1.197v1.197h1.197v-1.197ZM25.927 25.892H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 25.892h-1.197v1.197h1.197v-1.197ZM30.575 25.892h-1.197v1.197h1.197v-1.197ZM34.062 25.892h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 25.892h-1.197v1.197h1.197v-1.197ZM37.548 25.892h-1.197v1.197h1.197v-1.197ZM1.521 27.054H.324v1.197h1.197v-1.197ZM5.008 27.054H3.81v1.197h1.197v-1.197ZM9.656 27.054H8.46v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M10.819 27.054H9.622v1.197h1.197v-1.197ZM14.305 27.054h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M15.467 27.054H14.27v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M16.63 27.054h-1.198v1.197h1.197v-1.197ZM20.116 27.054h-1.197v1.197h1.197v-1.197ZM23.602 27.054h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765 27.054h-1.198v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 27.054H24.73v1.197h1.197v-1.197ZM28.251 27.054h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 27.054h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 27.054h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 27.054H30.54v1.197h1.198v-1.197ZM36.386 27.054H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 27.054h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M38.71 27.054h-1.197v1.197h1.197v-1.197ZM1.521 28.216H.324v1.197h1.197v-1.197ZM5.008 28.216H3.81v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M6.17 28.216H4.973v1.197H6.17v-1.197ZM8.494 28.216H7.297v1.197h1.197v-1.197ZM10.819 28.216H9.622v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 28.216h-1.196v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 28.216h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 28.216h-1.197v1.197h1.197v-1.197ZM20.116 28.216h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 28.216h-1.197v1.197h1.197v-1.197ZM23.602 28.216h-1.197v1.197h1.197v-1.197ZM27.089 28.216h-1.197v1.197h1.197v-1.197ZM29.413 28.216h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 28.216h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 28.216H30.54v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 28.216h-1.197v1.197H32.9v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 28.216h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 28.216h-1.197v1.197h1.197v-1.197ZM38.71 28.216h-1.197v1.197h1.197v-1.197ZM10.819 29.378H9.622v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 29.378h-1.196v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 29.378h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 29.378h-1.197v1.197h1.197v-1.197ZM20.116 29.378h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 29.378h-1.197v1.197h1.197v-1.197ZM23.602 29.378h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M24.765 29.378h-1.198v1.197h1.198v-1.197ZM27.089 29.378h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 29.378h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 29.378h-1.197v1.197h1.197v-1.197ZM34.062 29.378h-1.197v1.197h1.197v-1.197ZM36.386 29.378H35.19v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M37.548 29.378h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M38.71 29.378h-1.197v1.197h1.197v-1.197ZM11.98 30.54h-1.196v1.198h1.197V30.54ZM14.305 30.54h-1.197v1.198h1.197V30.54Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M15.467 30.54H14.27v1.198h1.197V30.54ZM17.791 30.54h-1.197v1.198h1.197V30.54Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 30.54h-1.197v1.198h1.197V30.54Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 30.54h-1.197v1.198h1.197V30.54Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 30.54h-1.197v1.198h1.197V30.54ZM27.089 30.54h-1.197v1.198h1.197V30.54Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 30.54h-1.197v1.198h1.197V30.54Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 30.54h-1.197v1.198h1.197V30.54ZM31.738 30.54H30.54v1.198h1.198V30.54ZM34.062 30.54h-1.197v1.198h1.197V30.54ZM36.386 30.54H35.19v1.198h1.197V30.54ZM10.819 31.703H9.622V32.9h1.197v-1.197ZM13.143 31.703h-1.197V32.9h1.197v-1.197ZM15.467 31.703H14.27V32.9h1.197v-1.197ZM17.791 31.703h-1.197V32.9h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 31.703h-1.197V32.9h1.197v-1.197ZM21.278 31.703h-1.197V32.9h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M22.44 31.703h-1.197V32.9h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M23.602 31.703h-1.197V32.9h1.197v-1.197ZM28.251 31.703h-1.197V32.9h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 31.703h-1.197V32.9h1.197v-1.197ZM34.062 31.703h-1.197V32.9h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 31.703h-1.197V32.9h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 31.703H35.19V32.9h1.197v-1.197ZM38.71 31.703h-1.197V32.9h1.197v-1.197ZM10.819 32.865H9.622v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 32.865h-1.196v1.197h1.197v-1.197ZM14.305 32.865h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M15.467 32.865H14.27v1.197h1.197v-1.197ZM18.954 32.865h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 32.865h-1.197v1.197h1.197v-1.197ZM24.765 32.865h-1.198v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 32.865H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 32.865h-1.197v1.197h1.197v-1.197ZM29.413 32.865h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 32.865h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 32.865H30.54v1.197h1.198v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 32.865h-1.197v1.197H32.9v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M34.062 32.865h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 32.865h-1.197v1.197h1.197v-1.197ZM37.548 32.865h-1.197v1.197h1.197v-1.197ZM10.819 34.027H9.622v1.197h1.197v-1.197ZM13.143 34.027h-1.197v1.197h1.197v-1.197ZM15.467 34.027H14.27v1.197h1.197v-1.197ZM17.791 34.027h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 34.027h-1.197v1.197h1.197v-1.197ZM22.44 34.027h-1.197v1.197h1.197v-1.197ZM25.927 34.027H24.73v1.197h1.197v-1.197ZM28.251 34.027h-1.197v1.197h1.197v-1.197ZM30.575 34.027h-1.197v1.197h1.197v-1.197ZM34.062 34.027h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 34.027h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 34.027H35.19v1.197h1.197v-1.197ZM38.71 34.027h-1.197v1.197h1.197v-1.197ZM10.819 35.19H9.622v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 35.19h-1.196v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M14.305 35.19h-1.197v1.196h1.197V35.19ZM17.791 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M20.116 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M21.278 35.19h-1.197v1.196h1.197V35.19ZM24.765 35.19h-1.198v1.196h1.198V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M25.927 35.19H24.73v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M30.575 35.19h-1.197v1.196h1.197V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M31.738 35.19H30.54v1.196h1.198V35.19Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M32.9 35.19h-1.197v1.196H32.9V35.19ZM36.386 35.19H35.19v1.196h1.197V35.19ZM13.143 36.351h-1.197v1.197h1.197v-1.197ZM16.63 36.351h-1.198v1.197h1.197v-1.197ZM18.954 36.351h-1.197v1.197h1.197v-1.197ZM25.927 36.351H24.73v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M27.089 36.351h-1.197v1.197h1.197v-1.197ZM31.738 36.351H30.54v1.197h1.198v-1.197ZM34.062 36.351h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M35.224 36.351h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M36.386 36.351H35.19v1.197h1.197v-1.197ZM10.819 37.514H9.622v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M11.98 37.514h-1.196v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M13.143 37.514h-1.197v1.197h1.197v-1.197ZM16.63 37.514h-1.198v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M17.791 37.514h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M18.954 37.514h-1.197v1.197h1.197v-1.197ZM21.278 37.514h-1.197v1.197h1.197v-1.197ZM27.089 37.514h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M28.251 37.514h-1.197v1.197h1.197v-1.197Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M29.413 37.514h-1.197v1.197h1.197v-1.197ZM32.9 37.514h-1.197v1.197H32.9v-1.197ZM35.224 37.514h-1.197v1.197h1.197v-1.197ZM37.548 37.514h-1.197v1.197h1.197v-1.197ZM.324.324V8.46H8.46V.324H.324Zm6.973 6.973h-5.81v-5.81h5.81v5.81ZM30.54.324V8.46h8.136V.324H30.54Zm6.973 6.973h-5.81v-5.81h5.81v5.81ZM.324 30.54v8.136H8.46V30.54H.324Zm6.973 6.974h-5.81v-5.811h5.81v5.81Z",
                fill: "#000",
              }),
              (0, i.jsx)("path", {
                d: "M6.135 2.649H2.649v3.486h3.486V2.65ZM36.351 2.649h-3.486v3.486h3.486V2.65ZM6.135 32.865H2.649v3.486h3.486v-3.486Z",
                fill: "#000",
              }),
            ],
          }),
        em = s(4544),
        ef = s.n(em),
        eC = s(28074),
        eg = s.n(eC),
        ey = s(32213),
        eH = s.n(ey);
      let eE = (0, l.createRef)();
      function ParticleStream_Particles(e) {
        let { speed: t } = e,
          s = (0, et.M4)("Particles", {
            count: { value: 3e3, min: 500, max: 1e4, step: 100 },
            size: { value: 1.2, min: 1, max: 5, step: 0.1 },
          });
        (0, q.A)((e) => {
          let { clock: i } = e;
          (eE.current.uniforms.uTime.value = i.getElapsedTime()),
            (eE.current.uniforms.uSpeed.value = t),
            (eE.current.uniforms.uSize.value = s.size);
        });
        let { geometry: a } = (0, l.useMemo)(() => {
            let e = new Float32Array(3 * s.count),
              t = new Float32Array(s.count),
              i = new Float32Array(s.count),
              a = new Float32Array(s.count),
              h = new Float32Array(s.count);
            for (let l = 0; l < s.count; l++)
              (e[3 * l] = Math.random() - 0.5),
                (e[3 * l + 1] = Math.random() - 0.5),
                (e[3 * l + 2] = Math.random() - 0.5),
                (t[l] = (0, es.n)(4, 12) * window.devicePixelRatio),
                (i[l] = (0, es.n)(0.1, 0.3)),
                (a[l] = (0, es.n)(-0.2, 0.2)),
                (h[l] = Math.random());
            let l = new X.BufferGeometry();
            return (
              l.setAttribute("position", new X.BufferAttribute(e, 3)),
              l.setAttribute("size", new X.BufferAttribute(t, 1)),
              l.setAttribute("velocity", new X.BufferAttribute(i, 1)),
              l.setAttribute("verticalMovement", new X.BufferAttribute(a, 1)),
              l.setAttribute("random", new X.BufferAttribute(h, 1)),
              { geometry: l }
            );
          }, [s.count]),
          h = (0, l.useMemo)(
            () => ({
              uTime: { value: 0 },
              uSpeed: { value: t },
              uSize: { value: s.size },
              uColor: { value: new X.Color("#B397FF") },
            }),
            [],
          );
        return (0, i.jsxs)("points", {
          scale: [100, 6, 1],
          children: [
            (0, i.jsx)("bufferGeometry", { attach: "geometry", ...a }),
            (0, i.jsx)("shaderMaterial", {
              ref: eE,
              vertexShader:
                "\nuniform float uTime;\nuniform float uSpeed;\nuniform float uSize;\nattribute float size;\nattribute float velocity;\nattribute float verticalMovement;\nattribute float random;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n    vRandom = random;\n    vec3 pos = position;\n    pos.x += velocity * (uTime * (uSpeed * 0.1));\n    pos.x = -0.5 + mod(pos.x, 1.0);\n    pos.y += sin(uTime * (velocity * random)) * (verticalMovement * random);\n    pos.z += sin(uTime * (velocity * 0.2)) * verticalMovement;\n\n    vec4 modelPosition = modelMatrix * vec4(pos, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n    gl_PointSize = size * uSize;\n    gl_PointSize *= (1.0 / - viewPosition.z);\n\n    x = pos.x;\n}\n",
              fragmentShader:
                "\nuniform float uTime;\nuniform vec3 uColor;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  float alpha = vRandom * 0.8;\n\n  float distanceFromCenter = distance(gl_PointCoord, vec2(0.5));\n  if (distanceFromCenter > 0.5) {\n    discard;\n  }\n\n  vec3 color = mix(uColor, vec3(1.0), vRandom);\n\n  float burst = 0.1;\n  if (x > 0.0 && x < burst) {\n    alpha = mix(1.0, alpha, smoothstep(0.0, burst, x));\n    color = mix(uColor, color, smoothstep(0.0, burst - 0.08, x));\n  }\n\n  gl_FragColor = vec4(color, alpha);\n}\n",
              uniforms: h,
              transparent: !0,
              blending: X.AdditiveBlending,
            }),
          ],
        });
      }
      var eN = (0, l.memo)(function (e) {
          let { speed: t } = e,
            s = (0, ei.s)();
          if (s)
            return (0, i.jsx)(G.E.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 2 },
              className: eH().stream,
              children: (0, i.jsx)(J.Xz, {
                dpr: Math.min(window.devicePixelRatio, 2),
                children: (0, i.jsx)(ParticleStream_Particles, { speed: t }),
              }),
            });
        }),
        e_ = (0, l.memo)(function (e) {
          let { chars: t } = e;
          return t
            .split("")
            .map((e, t) =>
              Math.random() > 0.95
                ? (0, i.jsx)("strong", { children: e }, t)
                : e,
            );
        }),
        eV = s(37519);
      let ew = (0, l.createContext)();
      function useHero() {
        return (0, l.useContext)(ew);
      }
      function wrapScroll(e) {
        let t =
          (document.querySelector(".".concat(d().scroller)).clientWidth + 300) /
          3;
        return e > t ? e - t : e < -t ? e + t : e;
      }
      let eO = (0, l.memo)(function () {
        let { openSalesForm: e } = (0, l.useContext)(eV.G),
          t = (0, l.useRef)(),
          s = (0, Q.Y)(t),
          a = (0, et.M4)("Global", {
            speed: { value: 1.5, min: -10, max: 10, step: 0.1 },
          }),
          [h, n] = (0, l.useState)(!1),
          r = (0, U.c)(-90);
        return (
          useAnimationFrame(() => {
            if (h || !s) return;
            let e = r.get() + a.speed;
            (e = wrapScroll(e)), r.set(e);
          }),
          (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(Y.Z, {
              children: (0, i.jsxs)("div", {
                className: d().heroContent,
                children: [
                  (0, i.jsxs)("div", {
                    ref: t,
                    className: d().fileStream,
                    onMouseDown: (e) => {
                      let t = e.clientX,
                        s = r.get(),
                        handleMouseMove = (e) => {
                          h || n(!0);
                          let i = e.clientX - t,
                            a = wrapScroll(s + i);
                          r.set(a);
                        },
                        handleMouseUp = () => {
                          n(!1),
                            window.removeEventListener(
                              "mousemove",
                              handleMouseMove,
                            ),
                            window.removeEventListener(
                              "mouseup",
                              handleMouseUp,
                            );
                        };
                      window.addEventListener("mousemove", handleMouseMove),
                        window.addEventListener("mouseup", handleMouseUp);
                    },
                    children: [
                      (0, i.jsx)(eh, {}),
                      (0, i.jsx)(eS, {}),
                      (0, i.jsx)(Mask, {
                        position: "right",
                        children: (0, i.jsx)(Scroller, {
                          x: r,
                          children: (0, i.jsx)(eB, {}),
                        }),
                      }),
                      (0, i.jsx)(Mask, {
                        position: "left",
                        children: (0, i.jsx)(Scroller, {
                          x: r,
                          children: (0, i.jsx)(eD, {}),
                        }),
                      }),
                      (0, i.jsx)(eN, { speed: a.speed }),
                    ],
                  }),
                  (0, i.jsxs)(G.E.div, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 1 },
                    className: d().heroCopy,
                    children: [
                      (0, i.jsx)(E.Z, {
                        as: "h1",
                        className: d().title,
                        children: "File Encryption",
                      }),
                      (0, i.jsx)(E.Z, {
                        as: "p",
                        className: d().subTitle,
                        children:
                          "Effortlessly encrypt files at rest and in transit with minimal changes to your code.",
                      }),
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(P.Z, {
                            size: "large",
                            onClick: () =>
                              e({ context: "File Encryption — Hero" }),
                            children: "API docs",
                          }),
                          (0, i.jsx)(P.Z, {
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
                ],
              }),
            }),
          })
        );
      });
      function Mask(e) {
        let { position: t, children: s } = e;
        return (0, i.jsx)(G.E.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1, delay: 0.2 },
          className: d().mask,
          "data-position": t,
          children: s,
        });
      }
      function Scroller(e) {
        let { x: t, children: s } = e;
        return (0, i.jsxs)(G.E.div, {
          style: { x: t, "--gap": 300 },
          className: d().scroller,
          children: [s, s, s],
        });
      }
      let eB = (0, l.memo)(function () {
          return ec.map((e, t) =>
            (0, i.jsx)(
              "div",
              {
                className: d().decrypted,
                children: (0, i.jsx)(Hero_File, { file: e }),
              },
              t,
            ),
          );
        }),
        eD = (0, l.memo)(function () {
          return ec.map((e, t) =>
            (0, i.jsx)(
              Encrypted,
              { children: (0, i.jsx)(Hero_File, { file: e }) },
              t,
            ),
          );
        }),
        ez = {
          PASSPORT: function (e) {
            let { info: t } = e;
            return (0, i.jsxs)("div", {
              className: en().passport,
              children: [
                (0, i.jsxs)("div", {
                  className: en().content,
                  children: [
                    (0, i.jsx)("div", {
                      className: en().identificationTitle,
                      children: "PASSPORT",
                    }),
                    (0, i.jsx)("div", {
                      className: en().bio,
                      children: (0, i.jsx)(Passport_BioChip, {}),
                    }),
                    (0, i.jsx)("div", {
                      className: en().photo,
                      style: {
                        backgroundImage: "url(".concat(t.photo.src, ")"),
                      },
                    }),
                    (0, i.jsxs)("div", {
                      className: en().details,
                      children: [
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "SURNAME" }),
                            (0, i.jsx)("p", { children: t.lastName }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "FIRST NAME" }),
                            (0, i.jsx)("p", { children: t.firstName }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "CARD NUMBER" }),
                            (0, i.jsx)("p", { children: t.cardNumber }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "NATIONALITY" }),
                            (0, i.jsx)("p", { children: t.nationality }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "DATE OF BIRTH" }),
                            (0, i.jsx)("p", { children: t.dob }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "DATE OF ISSUE" }),
                            (0, i.jsx)("p", { children: t.issueDate }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: en().keyValue,
                          children: [
                            (0, i.jsx)("h5", { children: "EXPIRATION" }),
                            (0, i.jsx)("p", { children: t.expirationDate }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: en().mrz,
                      children: [
                        generateMrz(t).line1,
                        (0, i.jsx)("br", {}),
                        generateMrz(t).line2,
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(Patterns_PatternOne, { className: en().pattern }),
              ],
            });
          },
          XRAY: function (e) {
            let { info: t } = e;
            return (0, i.jsxs)("div", {
              className: ev().xray,
              children: [
                (0, i.jsx)("h5", { children: "XRAY" }),
                (0, i.jsx)("img", {
                  draggable: !1,
                  src: "/_next/static/media/scan.dcde68e1.jpg",
                }),
                (0, i.jsx)("h6", { children: "Patient" }),
                (0, i.jsx)("p", { children: t.patient }),
                (0, i.jsx)(Xray_Signature, { className: ev().signature }),
              ],
            });
          },
          DRIVING_LICENSE: function (e) {
            let t,
              { info: s } = e;
            return (0, i.jsxs)("div", {
              className: ex().card,
              children: [
                (0, i.jsxs)("div", {
                  className: ex().grid,
                  children: [
                    (0, i.jsxs)("div", {
                      className: ex().header,
                      children: [
                        (0, i.jsx)("h5", { children: "Drivers License" }),
                        (0, i.jsx)("h6", { children: "\xc9ire" }),
                      ],
                    }),
                    (0, i.jsx)("img", {
                      draggable: !1,
                      src: s.photo.src,
                      className: ex().photo,
                    }),
                    (0, i.jsxs)("div", {
                      className: ex().details,
                      children: [
                        (0, i.jsx)(Detail, { name: "1", value: s.lastName }),
                        (0, i.jsx)(Detail, { name: "2", value: s.firstName }),
                        (0, i.jsx)(Detail, { name: "3", value: s.dob }),
                        (0, i.jsx)(Detail, { name: "4a", value: s.issueDate }),
                        (0, i.jsx)(Detail, {
                          name: "4c",
                          value: s.issueAuthority,
                        }),
                        (0, i.jsx)(Detail, {
                          name: "4b",
                          value: s.expirationDate,
                        }),
                        (0, i.jsx)(Detail, { name: "4d", value: s.cardNumber }),
                        (0, i.jsx)(Detail, {
                          name: "5",
                          value: s.driverNumber,
                        }),
                        (0, i.jsx)(Detail, { name: "6", value: s.class }),
                        (0, i.jsx)(Detail, { name: "7", value: s.address }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: ex().mrz,
                      children:
                        ""
                          .concat(s.cardNumber, "<<<")
                          .concat(s.lastName)
                          .padEnd(28, "<") + s.issueDate.replace(/\./g, ""),
                    }),
                    (0, i.jsx)(DriversLicense_Signature, {
                      className: ex().signature,
                    }),
                  ],
                }),
                (0, i.jsx)(DriversLicense_Pattern, { className: ex().pattern }),
              ],
            });
          },
          CONTRACT: function () {
            return (0, i.jsxs)("div", {
              className: eo().card,
              children: [
                (0, i.jsx)("h5", { children: "Contract" }),
                (0, i.jsx)(Text, { className: eo().text }),
                (0, i.jsx)(DriversLicense_Signature, {}),
                (0, i.jsx)(Contract_Stamp, { className: eo().stamp }),
              ],
            });
          },
          STATEMENT: function (e) {
            let { info: t } = e;
            return (0, i.jsxs)("div", {
              className: eu().statement,
              children: [
                (0, i.jsx)("h5", { children: "Bank Statement" }),
                (0, i.jsxs)("div", {
                  className: eu().account,
                  children: [
                    (0, i.jsx)("strong", { children: "ACC:" }),
                    " ",
                    t.account,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: eu().recipient,
                  children: [t.name, ",", (0, i.jsx)("br", {}), t.address],
                }),
                (0, i.jsx)("hr", {}),
                (0, i.jsx)("table", {
                  children: (0, i.jsx)("tbody", {
                    children: t.transactions.map((e, t) =>
                      (0, i.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, i.jsx)("td", { children: e.date }),
                            (0, i.jsx)("td", { children: e.description }),
                            (0, i.jsx)("td", { children: e.amount }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                (0, i.jsx)("hr", {}),
              ],
            });
          },
          IDENTITY_CARD: function (e) {
            let t,
              { info: s } = e;
            return (0, i.jsxs)("div", {
              className: eZ().card,
              children: [
                (0, i.jsxs)("div", {
                  className: eZ().content,
                  children: [
                    (0, i.jsx)("h4", {
                      className: eZ().title,
                      children: "Identity Card",
                    }),
                    (0, i.jsxs)("div", {
                      className: eZ().photo,
                      children: [
                        (0, i.jsx)("img", {
                          draggable: !1,
                          src: s.photo.src,
                          alt: "Photo",
                        }),
                        (0, i.jsx)("div", {
                          className: eZ().barcode,
                          children: Array(32)
                            .fill(0)
                            .map((e, t) =>
                              (0, i.jsx)("div", { className: eZ().bar }, t),
                            ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: eZ().details,
                      children: [
                        (0, i.jsxs)("div", {
                          className: eZ().detail,
                          children: [
                            (0, i.jsx)("h6", { children: "Surname" }),
                            (0, i.jsx)("p", { children: s.lastName }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eZ().detail,
                          children: [
                            (0, i.jsx)("h6", { children: "First Name" }),
                            (0, i.jsx)("p", { children: s.firstName }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eZ().detail,
                          children: [
                            (0, i.jsx)("h6", { children: "Card Number" }),
                            (0, i.jsx)("p", { children: s.cardNumber }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eZ().detail,
                          children: [
                            (0, i.jsx)("h6", { children: "Date of Birth" }),
                            (0, i.jsx)("p", { children: s.dob }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eZ().detail,
                          children: [
                            (0, i.jsx)("h6", { children: "Expiration" }),
                            (0, i.jsx)("p", { children: s.expiration }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eZ().detail,
                          children: [
                            (0, i.jsx)("h6", { children: "Address" }),
                            (0, i.jsx)("p", { children: s.address }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: eZ().mrz,
                      children:
                        ""
                          .concat(s.cardNumber, "<<<")
                          .concat(s.lastName)
                          .padEnd(28, "<") + "ID",
                    }),
                  ],
                }),
                (0, i.jsx)(IdentityCard_Pattern, { className: eZ().pattern }),
              ],
            });
          },
          BLOOD_TEST: function (e) {
            let { info: t } = e;
            return (0, i.jsxs)("div", {
              className: ef().test,
              children: [
                (0, i.jsx)(BloodTest_QRCode, { className: ef().qr }),
                (0, i.jsx)("h4", {
                  className: ef().title,
                  children: "Blood Test",
                }),
                (0, i.jsxs)("div", {
                  className: ef().detail,
                  children: [
                    (0, i.jsx)("strong", { children: "Name" }),
                    " ",
                    t.name,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: ef().detail,
                  children: [
                    (0, i.jsx)("strong", { children: "pid" }),
                    " ",
                    t.pid,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: ef().detail,
                  children: [
                    (0, i.jsx)("strong", { children: "tid" }),
                    " ",
                    t.tid,
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: ef().detail,
                  children: [
                    (0, i.jsx)("strong", { children: "date" }),
                    " ",
                    t.date,
                  ],
                }),
                (0, i.jsx)("hr", {}),
                (0, i.jsx)("table", {
                  children: (0, i.jsx)("tbody", {
                    children: t.results.map((e, t) =>
                      (0, i.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, i.jsx)("td", { children: e.name }),
                            (0, i.jsx)("td", { children: e.amount }),
                            (0, i.jsx)("td", { children: e.unit }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                (0, i.jsx)("hr", {}),
              ],
            });
          },
          VET_REPORT: function (e) {
            let { info: t } = e;
            return (0, i.jsxs)("div", {
              className: eg().report,
              children: [
                (0, i.jsx)("h5", {
                  className: eg().title,
                  children: "VET REPORT",
                }),
                Object.keys(t.details).map((e) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      className: eg().detail,
                      children: [
                        (0, i.jsx)("strong", { children: e }),
                        " ",
                        t.details[e],
                      ],
                    },
                    e,
                  ),
                ),
                (0, i.jsx)("img", {
                  className: eg().photo,
                  draggable: !1,
                  src: t.photo.src,
                  alt: "Photo",
                }),
                (0, i.jsx)("hr", {}),
                (0, i.jsx)("table", {
                  children: (0, i.jsx)("tbody", {
                    children: t.procedures.map((e, t) =>
                      (0, i.jsxs)(
                        "tr",
                        {
                          children: [
                            (0, i.jsx)("td", { children: e.name }),
                            (0, i.jsx)("td", { children: e.amount }),
                            (0, i.jsx)("td", { children: e.unit }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
                (0, i.jsx)("hr", {}),
              ],
            });
          },
        };
      function Hero_File(e) {
        let { file: t } = e,
          s = ez[t.type];
        return s ? (0, i.jsx)(s, { info: t }) : null;
      }
      function Encrypted(e) {
        let { children: t } = e,
          s = (0, l.useId)(),
          a = (0, l.useRef)(),
          h = (0, l.useRef)(),
          { active: n, setActive: r } = useHero(),
          { text: v, generate: o } = (0, ei.L)(900),
          A = (0, l.useMemo)(() => n === s, [n, s]);
        return (
          (0, l.useEffect)(() => {
            clearTimeout(h.current),
              A &&
                (h.current = setInterval(() => {
                  o();
                }, 200));
          }, [A]),
          useAnimationFrame(() => {
            let e = window.innerWidth / 2,
              { x: t, width: i } = a.current.getBoundingClientRect(),
              h = t + i > e && t < e;
            h && !A && r(s), !h && A && r(null);
          }),
          (0, i.jsxs)("div", {
            ref: a,
            className: d().encrypted,
            children: [
              (0, i.jsx)("div", {
                className: d().chars,
                children: (0, i.jsx)(e_, { chars: v }),
              }),
              (0, i.jsx)("div", { className: d().original, children: t }),
            ],
          })
        );
      }
      let eS = (0, l.memo)(function () {
        let { active: e } = useHero();
        return (0, i.jsxs)(G.E.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.75 },
          className: d().horizon,
          "data-active": !!e,
          children: [
            (0, i.jsx)("div", { className: d().horizonLine }),
            (0, i.jsx)("div", { className: d().horizonGlow }),
          ],
        });
      });
      var FileEncryption_Hero = function () {
          let [e, t] = (0, l.useState)(null),
            s = (0, l.useMemo)(() => ({ active: e, setActive: t }), [e]);
          return (0, i.jsx)(ew.Provider, {
            value: s,
            children: (0, i.jsx)(eO, {}),
          });
        },
        eb = s(39892);
      function FileEncryption() {
        return (0, i.jsxs)(eb.Z, {
          title: "File Encryption — evervault",
          socialImage: "https://evervault.com/social/file-encryption.jpg",
          description:
            "Effortlessly encrypt files at rest and in transit with minimal changes to your code.",
          children: [
            (0, i.jsx)(FileEncryption_Hero, {}),
            (0, i.jsx)(FileEncryptionDemo, {}),
            (0, i.jsx)(a.Z, {
              asset: (0, i.jsx)(GuideCodeBlock, {}),
              href: "https://docs.evervault.com/guides/file-to-s3",
              hrefTitle: "Read Guide",
              tagline: "Developer Guides",
              title: "Upload an Encrypted File to S3 Using Next.js",
              children:
                "In this guide you will create a simple Next.js app that encrypts an uploaded file using the evervault React SDK and and saves the encrypted file to a S3 bucket via a presigned url.",
            }),
            (0, i.jsx)(FileEncryptionFeatures, {}),
            (0, i.jsx)(FileEncryptionTestimonial, {}),
            (0, i.jsx)(FileEncryptionCTA, {}),
          ],
        });
      }
    },
    9737: function (e) {
      e.exports = {
        container: "CalloutLink_container__QZ6v8",
        guidesLabel: "CalloutLink_guidesLabel__B_WSN",
        title: "CalloutLink_title__U_XBy",
        description: "CalloutLink_description__iRb39",
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
    4544: function (e) {
      e.exports = {
        test: "styles_test__jC446",
        title: "styles_title__BG1nx",
        detail: "styles_detail__KQ5NA",
        qr: "styles_qr__V78fD",
      };
    },
    73630: function (e) {
      e.exports = {
        card: "styles_card__KFxT_",
        text: "styles_text__LaeJM",
        stamp: "styles_stamp__p2dXx",
      };
    },
    14329: function (e) {
      e.exports = {
        card: "styles_card__IGZKV",
        grid: "styles_grid__o4ygw",
        signature: "styles_signature__gbLbN",
        header: "styles_header__rIUCj",
        photo: "styles_photo__tfNLH",
        details: "styles_details__gxYbG",
        detail: "styles_detail__b6nLe",
        mrz: "styles_mrz__GPMi7",
        pattern: "styles_pattern__fKMPR",
      };
    },
    91323: function (e) {
      e.exports = {
        card: "styles_card__SO0Bb",
        content: "styles_content__QKlLz",
        title: "styles_title__CwaGx",
        photo: "styles_photo__qmIPF",
        barcode: "styles_barcode__1tx_k",
        bar: "styles_bar__XAndo",
        details: "styles_details__Fcnx_",
        detail: "styles_detail__g2R3p",
        mrz: "styles_mrz___NU7R",
        pattern: "styles_pattern__h0bqH",
      };
    },
    32213: function (e) {
      e.exports = { stream: "styles_stream__Zd_vP" };
    },
    61819: function (e) {
      e.exports = { particles: "styles_particles__q_tiE" };
    },
    87777: function (e) {
      e.exports = {
        passport: "styles_passport__fMQie",
        content: "styles_content__4JU9G",
        identificationTitle: "styles_identificationTitle__YxLKc",
        bio: "styles_bio__Sryw8",
        photo: "styles_photo__06nj9",
        details: "styles_details__Igr2O",
        keyValue: "styles_keyValue__anpvw",
        mrz: "styles_mrz__KwoGx",
        pattern: "styles_pattern__odlBd",
      };
    },
    33420: function (e) {
      e.exports = {
        nodes: "styles_nodes__Qm4OL",
        logo: "styles_logo__rqIGE",
        encryptedRequest: "styles_encryptedRequest__BqWH_",
      };
    },
    73242: function (e) {
      e.exports = {
        statement: "styles_statement__OfJZS",
        account: "styles_account__0h_yb",
        recipient: "styles_recipient__ntBnl",
      };
    },
    28074: function (e) {
      e.exports = {
        report: "styles_report__EXha_",
        title: "styles_title__djAci",
        detail: "styles_detail__5wbP2",
        photo: "styles_photo__HApEa",
      };
    },
    77261: function (e) {
      e.exports = {
        xray: "styles_xray___YXi6",
        signature: "styles_signature__NCSyn",
      };
    },
    4960: function (e, t, s) {
      "use strict";
      s.d(t, {
        c: function () {
          return useMotionValue;
        },
      });
      var i = s(67294),
        a = s(33234),
        h = s(16014),
        l = s(96681);
      function useMotionValue(e) {
        let t = (0, l.h)(() => (0, a.B)(e)),
          { isStatic: s } = (0, i.useContext)(h._);
        if (s) {
          let [, s] = (0, i.useState)(e);
          (0, i.useEffect)(() => t.on("change", s), []);
        }
        return t;
      }
    },
  },
  function (e) {
    e.O(
      0,
      [3737, 1140, 5029, 9142, 1044, 2670, 8001, 9774, 2888, 179],
      function () {
        return e((e.s = 23335));
      },
    ),
      (_N_E = e.O());
  },
]);
