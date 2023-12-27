(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3697],
  {
    79311: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/cages",
        function () {
          return i(77346);
        },
      ]);
    },
    336: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return CalloutLink;
        },
      });
      var a = i(85893),
        n = i(74098),
        r = i(24057),
        s = i(67294),
        o = i(9737),
        l = i.n(o),
        c = i(94184),
        d = i.n(c);
      function CalloutLink(e) {
        let {
            href: t,
            hrefTitle: i,
            title: o,
            tagline: c,
            children: u,
            asset: h,
            className: p,
          } = e,
          g = (0, s.useRef)();
        return (0, a.jsx)(n.Z, {
          children: (0, a.jsxs)("div", {
            className: d()(l().container, p),
            onClick: () => {
              g.current.click();
            },
            children: [
              (0, a.jsxs)("div", {
                className: l().content,
                children: [
                  (0, a.jsx)("h6", { className: l().guidesLabel, children: c }),
                  (0, a.jsx)("h4", { className: l().title, children: o }),
                  (0, a.jsx)("p", { className: l().description, children: u }),
                  (0, a.jsx)(r.Z, { ref: g, href: t, children: i }),
                ],
              }),
              h,
            ],
          }),
        });
      }
    },
    74098: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Container;
        },
      });
      var a = i(85893),
        n = i(94184),
        r = i.n(n),
        s = i(31555),
        o = i.n(s);
      function Container(e) {
        let { className: t, children: i, ...n } = e;
        return (0, a.jsx)("div", {
          className: r()(o().container, t),
          children: i,
        });
      }
    },
    24057: function (e, t, i) {
      "use strict";
      var a = i(85893),
        n = i(67294),
        r = i(68592),
        s = i.n(r);
      t.Z = (0, n.forwardRef)(function (e, t) {
        let { href: i, children: n } = e;
        return (0, a.jsxs)("a", {
          ref: t,
          className: s().learnMore,
          href: i,
          rel: "noopener noreferrer",
          target: "_blank",
          children: [
            n,
            (0, a.jsxs)("svg", {
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
                (0, a.jsx)("path", {
                  className: s().chevronOne,
                  d: "M6 17L11 12 6 7",
                }),
                (0, a.jsx)("path", {
                  className: s().chevronTwo,
                  d: "M13 17L18 12 13 7",
                }),
              ],
            }),
          ],
        });
      });
    },
    77346: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return Cages;
          },
        });
      var a = i(85893),
        n = i(91693),
        r = i(75964),
        s = i(11544),
        o = i(92520),
        l = i(17836),
        c = i(19037),
        d = i(52981),
        u = i(11310),
        h = i(5152),
        p = i.n(h),
        g = i(67294),
        _ = i(97046),
        m = i.n(_),
        v = i(97369);
      function StatusIcon(e) {
        let { icon: t, isComplete: i, name: n, size: r } = e;
        return (0, a.jsx)(s.M, {
          mode: "wait",
          children: i
            ? (0, a.jsx)(
                o.E.div,
                {
                  className: "d-flex",
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.5 },
                  transition: { duration: 0.2 },
                  children: (0, a.jsx)(v.Z, { width: r }),
                },
                n + "-complete",
              )
            : (0, a.jsx)(
                o.E.div,
                {
                  className: "d-flex",
                  initial: { opacity: 0, scale: 0.5 },
                  animate: { opacity: 1, scale: 1 },
                  exit: { opacity: 0, scale: 0.5 },
                  transition: { duration: 0.2 },
                  children: t,
                },
                n,
              ),
        });
      }
      var C = i(79087),
        x = i.n(C),
        y = i(67209);
      let f = {
        building: [
          "claude:~$ ev-cage build -f ./Dockerfile .",
          "Converting Dockerfile into Docker Image.",
          "Installing evervault runtime.",
          "Dockerfile converted!",
          "Building Docker Image.",
          "Docker Image built!",
          "Converting Docker Image to Enclave Image.",
          "Enclave Image created!",
          "Cage build complete!",
        ],
        deploying: [
          "claude:~$ ev-cage deploy .",
          "Zipping Cage Image.",
          "Cage Image.",
          "Uploading Cage Image to evervault.",
          "Building Cage Docker Image on evervault Infrastructure.",
          "Cage built on evervault!",
          "Deploying Cage into an AWS Nitro Enclave.",
          "Starting deployment.",
          "Waiting for Secure Enclave to be initialized.",
          "Waiting for your Cage to become stable in the Secure Enclave.",
          "Cage deployed!",
        ],
        attesting: [
          "claude:~$ curl https://hello-cage.cages.evervault.com/hello",
          "Connected to hello-cage on port 443.",
          "TLSv1.2 (OUT), TLS handshake, Client hello.",
          "TLSv1.2 (IN), TLS handshake, Server hello.",
          "TLSv1.2 (IN), TLS handshake, Certificate.",
          "Attesting connection.",
          "Parsed attestation document from certificate.",
          "Validated attestation document signature.",
          "Validated attestation document PCRs.",
          "Connection attested!",
          "GET /hello HTTP/1.1",
          "Host: hello-cage.cages.evervault.com",
          "HTTP/1.1 200 OK",
          "Content-Type: text/plain",
          '"Hello from within a Secure Enclave!"',
          "Press ↵ or click to restart",
        ],
      };
      function Terminal(e) {
        let { stage: t, setStage: i } = e,
          n = (0, g.useRef)();
        return (0, a.jsxs)("div", {
          className: x().container,
          ref: n,
          children: [
            ["building", "deploy", "deploying", "attest", "attesting"].includes(
              t,
            ) &&
              (0, a.jsx)(y.Ee, {
                onFinished: () => i("deploy"),
                children: f.building.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      children: [
                        (0, a.jsx)(y.Qm, {
                          fn: () => n.current.scrollTo(0, 900),
                        }),
                        (0, a.jsx)("p", {
                          className: x().line,
                          "data-command": e.startsWith("claude:~$"),
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ["deploying", "attest", "attesting"].includes(t) &&
              (0, a.jsx)(y.Ee, {
                onFinished: () => i("attest"),
                children: f.deploying.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      children: [
                        (0, a.jsx)(y.Qm, {
                          fn: () => n.current.scrollTo(0, 900),
                        }),
                        (0, a.jsx)("p", {
                          className: x().line,
                          "data-command": e.startsWith("claude:~$"),
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
            ["attesting", "complete"].includes(t) &&
              (0, a.jsx)(y.Ee, {
                onFinished: () => i("complete"),
                children: f.attesting.map((e) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      children: [
                        (0, a.jsx)(y.Qm, {
                          fn: () => n.current.scrollTo(0, 900),
                        }),
                        (0, a.jsx)("p", {
                          className: x().line,
                          "data-command": e.startsWith("claude:~$"),
                          "data-enter": "Press ↵ or click to restart" === e,
                          children: e,
                        }),
                      ],
                    },
                    e,
                  ),
                ),
              }),
          ],
        });
      }
      let j = p()(() => i.e(3847).then(i.bind(i, 63847)), {
        loadableGenerated: { webpack: () => [63847] },
        ssr: !1,
      });
      function Demo() {
        let [e, t] = (0, g.useState)("build");
        return (
          (0, g.useEffect)(() => {
            let listener = (i) => {
              ("Enter" === i.code || "NumpadEnter" === i.code) &&
                "complete" === e &&
                t("build");
            };
            return (
              document.addEventListener("keydown", listener),
              () => {
                document.removeEventListener("keydown", listener);
              }
            );
          }, [e]),
          (0, a.jsxs)("div", {
            className: m().container,
            children: [
              (0, a.jsx)("div", {
                children: (0, a.jsxs)("div", {
                  className: m().heading,
                  children: [
                    (0, a.jsx)("h2", {
                      className: "mb-8",
                      children: "Build, deploy, attest.",
                    }),
                    (0, a.jsx)("p", {
                      children:
                        "Get all of the benefits of Secure Enclaves with none of the headaches. evervault abstracts away the hard parts of running code in a Secure Enclave, without disrupting your workflow.",
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: m().demo,
                children: [
                  (0, a.jsxs)("div", {
                    className: m().accordian,
                    children: [
                      (0, a.jsxs)("div", {
                        className: m().accordianItem,
                        children: [
                          (0, a.jsxs)("div", {
                            className: m().accordianHeader,
                            children: [
                              (0, a.jsxs)("div", {
                                className: m().accordianHeaderGroup,
                                children: [
                                  (0, a.jsx)(StatusIcon, {
                                    icon: (0, a.jsx)(l.Z, { width: 18 }),
                                    isComplete: !["build", "building"].includes(
                                      e,
                                    ),
                                    name: "build-icon",
                                    size: 18,
                                  }),
                                  (0, a.jsx)("h5", {
                                    className: "mb-0",
                                    children: "Build",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(s.M, {
                                children:
                                  "build" === e &&
                                  (0, a.jsx)(o.E.div, {
                                    initial: { opacity: 1 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    transition: { duration: 0.2 },
                                    children: (0, a.jsxs)(j, {
                                      size: "extra-small",
                                      type: "tertiary",
                                      pulse: !0,
                                      onClick: () => t("building"),
                                      children: [
                                        (0, a.jsx)(c.Z, {
                                          size: 12,
                                          className: "me-4",
                                        }),
                                        "Build",
                                      ],
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(
                            o.E.div,
                            {
                              className: m().accordianBody,
                              animate: {
                                height: ["build", "building"].includes(e)
                                  ? "auto"
                                  : 0,
                              },
                              transition: { duration: 0.3 },
                              children: (0, a.jsx)("p", {
                                children:
                                  "Use the Cages CLI to convert a Docker image to an enclave image — locally, or in your CI/CD pipeline.",
                              }),
                            },
                            "build-stage",
                          ),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: m().accordianItem,
                        children: [
                          (0, a.jsxs)("div", {
                            className: m().accordianHeader,
                            children: [
                              (0, a.jsxs)("div", {
                                className: m().accordianHeaderGroup,
                                children: [
                                  (0, a.jsx)(StatusIcon, {
                                    icon: (0, a.jsx)(d.Z, { width: 18 }),
                                    isComplete: [
                                      "attest",
                                      "attesting",
                                      "complete",
                                    ].includes(e),
                                    name: "deploy-icon",
                                    size: 18,
                                  }),
                                  (0, a.jsx)("h5", {
                                    className: "mb-0",
                                    children: "Deploy",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(s.M, {
                                children:
                                  "deploy" === e &&
                                  (0, a.jsx)(o.E.div, {
                                    initial: { opacity: 1 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    transition: { duration: 0.2 },
                                    children: (0, a.jsxs)(j, {
                                      size: "extra-small",
                                      type: "tertiary",
                                      className: "me-12",
                                      pulse: !0,
                                      onClick: () => t("deploying"),
                                      children: [
                                        (0, a.jsx)(c.Z, {
                                          size: 12,
                                          className: "me-4",
                                        }),
                                        "Deploy",
                                      ],
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(
                            o.E.div,
                            {
                              className: m().accordianBody,
                              animate: {
                                height: ["deploy", "deploying"].includes(e)
                                  ? "auto"
                                  : 0,
                              },
                              transition: { duration: 0.4 },
                              initial: { height: 0 },
                              children: (0, a.jsx)("p", {
                                children:
                                  "Upload your enclave image to evervault, and we’ll provision your enclave automatically.",
                              }),
                            },
                            "deploy-stage",
                          ),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: m().accordianItem,
                        children: [
                          (0, a.jsxs)("div", {
                            className: m().accordianHeader,
                            children: [
                              (0, a.jsxs)("div", {
                                className: m().accordianHeaderGroup,
                                children: [
                                  (0, a.jsx)(StatusIcon, {
                                    icon: (0, a.jsx)(u.Z, { width: 18 }),
                                    isComplete: ["complete"].includes(e),
                                    name: "attest-icon",
                                    size: 18,
                                  }),
                                  (0, a.jsx)("h5", {
                                    className: "mb-0",
                                    children: "Attest",
                                  }),
                                ],
                              }),
                              (0, a.jsx)(s.M, {
                                children:
                                  "attest" === e &&
                                  (0, a.jsx)(o.E.div, {
                                    initial: { opacity: 1 },
                                    animate: { opacity: 1 },
                                    exit: { opacity: 0 },
                                    transition: { duration: 0.2 },
                                    children: (0, a.jsxs)(j, {
                                      size: "extra-small",
                                      type: "tertiary",
                                      className: "me-12",
                                      pulse: !0,
                                      onClick: () => t("attesting"),
                                      children: [
                                        (0, a.jsx)(c.Z, {
                                          size: 12,
                                          className: "me-4",
                                        }),
                                        "Attest",
                                      ],
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          (0, a.jsx)(
                            o.E.div,
                            {
                              className: m().accordianBody,
                              animate: {
                                height: [
                                  "attest",
                                  "attesting",
                                  "complete",
                                ].includes(e)
                                  ? "auto"
                                  : 0,
                              },
                              transition: { duration: 0.4 },
                              initial: { height: 0 },
                              children: (0, a.jsx)("p", {
                                children:
                                  "Attest and request your application using the evervault SDK.",
                              }),
                            },
                            "attest-stage",
                          ),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: m().terminal,
                    onClick: () => "complete" === e && t("build"),
                    children: [
                      (0, a.jsx)(r.Z, { tabs: ["Terminal"] }),
                      (0, a.jsx)(Terminal, { stage: e, setStage: t }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var b = i(97004),
        w = i(51853),
        k = i(39455),
        E = i(57307),
        N = i(30443),
        L = i(57512),
        S = i(6279),
        T = i(98476),
        D = i(95067);
      let I = [
        {
          title: "Cages Use Cases",
          features: [
            {
              icon: (0, a.jsx)(w.Z, { width: 16 }),
              title: "Reduced Threat Vectors",
              description:
                "Protect applications from malware, memory scraping, hypervisor, and container breakout attacks with a hardware root of trust. Cages bring fine grained access control to data being processed by an application, its memory and runtime state.",
            },
            {
              icon: (0, a.jsx)(k.Z, { width: 16 }),
              title: "Protect Data in Use",
              description:
                "Specialized hardware combined with remote cryptographic attestation protects data from internal bad actors, nation states and cloud providers. Cages bring the highest level of application security to sensitive data.",
            },
            {
              icon: (0, a.jsx)(E.Z, { width: 16 }),
              title: "Confidential Machine Learning",
              description:
                "Use Cages for Machine Learning inference to encrypt the inputs and outputs of a model. Securely share outputs with third-parties while guaranteeing the integrity of input data.",
            },
          ],
        },
        {
          title: "Secure by Default",
          features: [
            {
              icon: (0, a.jsx)(u.Z, { width: 16 }),
              title: "Fully Attestable",
              description:
                "Attestation lets you prove the integrity of code running within a Secure Enclave. With Cages, attestation is as easy as trusting a TLS server through Attested TLS (aTLS). Verify your code hasn’t been tampered with before sending it any sensitive data.",
            },
            {
              icon: (0, a.jsx)(N.Z, { width: 16 }),
              title: "Hosted and Managed by evervault",
              description:
                "Cages run in AWS Nitro Enclaves on evervault’s infrastructure. Forget about provisioning EC2 instances, implementing routing, or scaling your service.",
            },
            {
              icon: (0, a.jsx)(L.Z, { width: 16 }),
              title: "Compliant from the Ground Up",
              description:
                "evervault is fully compliant under PCI DSS, HIPAA, GDPR and SOC 2. Use Cages to run compliance-bound workloads on sensitive healthcare or financial data.",
            },
          ],
        },
        {
          title: "Built for Developers",
          features: [
            {
              icon: (0, a.jsx)(S.Z, { width: 16 }),
              title: "Compatible with any Stack",
              description:
                "Cages can be built and deployed from any Docker container, and can be written in any language. Built on Docker, Cages simply need a TCP server running inside your container to accept requests.",
            },
            {
              icon: (0, a.jsx)(T.Z, { width: 16 }),
              title: "Integrated by Default",
              description:
                "Cages let you take advantage of evervault’s encryption platform from within your Secure Enclave. evervault-encrypted data is decrypted when it enters the enclave, and the in-enclave encryption API gives you full flexibility to encrypt and decrypt.",
            },
            {
              icon: (0, a.jsx)(D.Z, { width: 16 }),
              title: "Scalable from Zero to Infinity",
              description:
                "Cages are designed with the most intensive workloads in mind, and can be scaled from one instance to many depending on your requirements. Load balancing is handled automatically by evervault.",
            },
          ],
        },
      ];
      var Z = i(60777),
        W = i(48691),
        H = i.n(W);
      function CagesAnimation() {
        return (0, a.jsxs)("svg", {
          className: H().container,
          viewBox: "0 0 1920 1059",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)(o.E.path, {
              d: "M0.220215 337.94L921.52 798.44C933.15 804.254 942.931 813.192 949.766 824.252C956.602 835.312 960.222 848.058 960.22 861.06V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M1920.22 337.45L998.86 799.24C987.247 805.059 977.483 813.994 970.659 825.046C963.835 836.098 960.22 848.831 960.22 861.82V1059.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M1920.22 0.450012L661.88 630.65C650.262 636.467 640.493 645.403 633.665 656.457C626.837 667.511 623.221 680.247 623.22 693.24V1059.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M1920.22 251.63L913.88 755.63C902.262 761.447 892.492 770.383 885.664 781.437C878.837 792.491 875.22 805.227 875.22 818.22V1058.43",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M1920.22 167.56L829.88 713.65C818.262 719.467 808.492 728.403 801.664 739.457C794.837 750.511 791.22 763.247 791.22 776.24V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M1920.22 83.49L745.88 671.65C734.262 677.467 724.493 686.403 717.665 697.457C710.837 708.511 707.221 721.247 707.22 734.24V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M0.220215 251.63L1006.62 755.65C1018.24 761.468 1028 770.405 1034.83 781.459C1041.66 792.513 1045.27 805.248 1045.27 818.24V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M0.220215 167.56L1090.62 713.65C1102.24 719.468 1112 728.405 1118.83 739.459C1125.66 750.513 1129.27 763.248 1129.27 776.24V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M0.220215 83.45L1174.62 671.65C1186.23 677.468 1196 686.402 1202.83 697.454C1209.65 708.506 1213.27 721.24 1213.27 734.23V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
            (0, a.jsx)(o.E.path, {
              d: "M0.220215 1.45001L1256.62 630.65C1268.24 636.468 1278 645.405 1284.83 656.459C1291.66 667.513 1295.27 680.248 1295.27 693.24V1058.45",
              stroke: "white",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 3 },
            }),
          ],
        });
      }
      var M = i(37519),
        A = i(61113),
        B = i.n(A);
      function Hero() {
        let { openSalesForm: e } = (0, g.useContext)(M.G);
        return (0, a.jsx)("div", {
          className: B().container,
          children: (0, a.jsxs)("div", {
            className: B().gradientWrapper,
            children: [
              (0, a.jsx)(CagesAnimation, {}),
              (0, a.jsxs)("div", {
                className: B().textWrapper,
                children: [
                  (0, a.jsx)("div", {
                    className: B().title,
                    children: (0, a.jsx)("h1", { children: "Cages" }),
                  }),
                  (0, a.jsx)("p", {
                    children:
                      "Cages are the easiest way to build, deploy and scale Secure Enclaves. Go from a Dockerfile to an AWS Nitro Enclave in 15 minutes.",
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)(Z.Z, {
                        size: "large",
                        target: "_blank",
                        onClick: () => e({ context: "Cages — Hero" }),
                        children: "API docs",
                      }),
                      (0, a.jsx)(Z.Z, {
                        size: "large",
                        href: "https://app.evervault.com/register",
                        as: "a",
                        target: "_blank",
                        type: "transparent",
                        children: "Try for free",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var G = i(39892),
        P = i(62654);
      let z = [
        {
          quote: "evervault Cages are the holy grail of Secure Enclaves.",
          encryptedQuote:
            "esbB/Ba8P iYTMp /DR pYx yW+7 DR77M M6 NWUOJ3 Hb6hO1Gpg",
          author: "Anselm Eickhoff",
          title: "Jazz Founder",
          id: "anselm-eickhoff-quote",
        },
      ];
      var q = i(87248),
        R = i.n(q),
        V = i(336),
        U = i(54092),
        O = i.n(U);
      function GitHubAsset() {
        return (0, a.jsx)("img", {
          src: "/images/cages-os.png",
          className: O().asset,
        });
      }
      function Cages() {
        return (0, a.jsx)(G.Z, {
          title: "Cages — evervault",
          description:
            "The easiest way to build, deploy and scale Secure Enclaves",
          socialImage: "https://evervault.com/social/cages-og.jpg",
          children: (0, a.jsxs)("div", {
            className: R().container,
            children: [
              (0, a.jsx)(Hero, {}),
              (0, a.jsx)(Demo, {}),
              (0, a.jsx)(V.Z, {
                asset: (0, a.jsx)(GitHubAsset, {}),
                href: "https://github.com/evervault/cages",
                hrefTitle: "Available on GitHub",
                title: "Open Source",
                tagline: "Trust from the ground up",
                className: R().calloutLink,
                children:
                  "Security by obscurity doesn't cut it. All Cages are auditable and transparent by default. Cages run without any proprietary agents, runtimes or libraries.",
              }),
              (0, a.jsx)(b.Z, {
                heading: "Secure Enclaves with batteries included",
                subheading:
                  "Secure Enclaves are the best way to guarantee your code hasn’t been tampered with. With Cages, you can process your most sensitive data in a Secure Enclave and keep it encrypted by evervault end-to-end.",
                config: I,
              }),
              (0, a.jsx)(P.Z, {
                testimonailsConfig: z,
                rotationMap: [90, 0],
                logos: "/images/logos/cages-logoswheel.svg",
              }),
              (0, a.jsx)(n.Z, {
                heading: "Secure your most sensitive workloads.",
                subheading:
                  "The best companies go above and beyond when securing their sensitive data. Join the Cages beta to give your customers best-in-class security without the hassle.",
                href: "https://app.evervault.com/register?intent=cages",
                cta: "Join the waitlist",
              }),
            ],
          }),
        });
      }
    },
    87248: function (e) {
      e.exports = {
        container: "Cages_container__4N4nY",
        maxWidth: "Cages_maxWidth__eWcD8",
        calloutLink: "Cages_calloutLink__yygIR",
      };
    },
    97046: function (e) {
      e.exports = {
        container: "Demo_container__3ZaYL",
        demo: "Demo_demo__mCUDD Cages_maxWidth__eWcD8",
        terminal: "Demo_terminal__tiCfW",
        heading: "Demo_heading__m258i",
        accordian: "Demo_accordian__NobJR",
        accordianHeader: "Demo_accordianHeader__rKtTd",
        accordianHeaderGroup: "Demo_accordianHeaderGroup__g8TpS",
        accordianBody: "Demo_accordianBody__ycCUm",
        iconWrapper: "Demo_iconWrapper__CXav2",
      };
    },
    79087: function (e) {
      e.exports = {
        container: "Terminal_container__q0QYr",
        line: "Terminal_line__EdbXx",
      };
    },
    54092: function (e) {
      e.exports = { asset: "GitHubAsset_asset__cvaAV" };
    },
    48691: function (e) {
      e.exports = { container: "CagesAnimation_container__Fp559" };
    },
    61113: function (e) {
      e.exports = {
        container: "Hero_container__UTi_3",
        gradientWrapper: "Hero_gradientWrapper__X5xsC",
        textWrapper: "Hero_textWrapper__MEYlT",
        title: "Hero_title__nd4B0",
        beta: "Hero_beta__EBKN7",
      };
    },
    9737: function (e) {
      e.exports = {
        container: "CalloutLink_container__QZ6v8",
        guidesLabel: "CalloutLink_guidesLabel__B_WSN",
        title: "CalloutLink_title__U_XBy",
        description: "CalloutLink_description__iRb39",
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
  },
  function (e) {
    e.O(0, [5683, 2670, 9060, 9774, 2888, 179], function () {
      return e((e.s = 79311));
    }),
      (_N_E = e.O());
  },
]);
