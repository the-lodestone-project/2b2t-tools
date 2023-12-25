(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7442],
  {
    74110: function (e, s, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/customers/[[...customer]]",
        function () {
          return a(60568);
        },
      ]);
    },
    75964: function (e, s, a) {
      "use strict";
      a.d(s, {
        Z: function () {
          return CodeTabs;
        },
      });
      var t = a(85893),
        i = a(94184),
        n = a.n(i),
        r = a(898),
        o = a.n(r);
      function CodeTabs(e) {
        let { tabs: s, onChange: a, value: i, className: r } = e,
          l = s.indexOf(i || s[0]);
        return (0, t.jsx)("div", {
          className: n()(o().container, r),
          children: (0, t.jsxs)("div", {
            className: o().tabs,
            children: [
              s.map((e, i) =>
                (0, t.jsx)(
                  "button",
                  {
                    className: n()(
                      o().tab,
                      l === i && o().active,
                      l + 1 === i && o().afterActive,
                      l - 1 === i && o().beforeActive,
                      0 === i && 0 !== l && o().firstActive,
                    ),
                    onClick: () => a && a(s[i]),
                    children: e,
                  },
                  e,
                ),
              ),
              (0, t.jsx)("div", {
                className: n()(
                  o().filler,
                  l === s.length - 1 && o().fillerAfterActive,
                ),
              }),
            ],
          }),
        });
      }
    },
    60568: function (e, s, a) {
      "use strict";
      a.r(s),
        a.d(s, {
          default: function () {
            return Customers;
          },
        });
      var t = a(85893),
        i = a(67294),
        n = a(91693),
        r = a(11163),
        o = a(69919),
        l = a.n(o),
        c = a(94184),
        d = a.n(c);
      function GridSection(e) {
        let { children: s, contained: a, className: i } = e;
        return (0, t.jsxs)("div", {
          className: d()(l().container, i),
          "data-container": a,
          children: [
            s,
            (0, t.jsx)("span", { className: d()(l().joint, l().bl) }),
            (0, t.jsx)("span", { className: d()(l().joint, l().br) }),
            (0, t.jsx)("span", { className: d()(l().joint, l().tr) }),
            (0, t.jsx)("span", { className: d()(l().joint, l().tl) }),
          ],
        });
      }
      var u = a(57178),
        h = a(41664),
        m = a.n(h),
        p = a(49409),
        g = a.n(p);
      function Card(e) {
        let { description: s, useCases: a, logo: n, slug: r } = e,
          o = (0, i.useRef)(),
          [{ x: l, y: c }, d] = (0, i.useState)({ x: 0, y: 0 }),
          [h, p] = (0, i.useState)("");
        return (0, t.jsx)(GridSection, {
          children: (0, t.jsxs)("div", {
            ref: o,
            className: g().container,
            style: { "--x": "".concat(l, "px"), "--y": "".concat(c, "px") },
            children: [
              (0, t.jsx)(m(), {
                href: "/customers/".concat(r),
                scroll: !1,
                children: (0, t.jsx)(u.f, {
                  ratio: 1,
                  className: g().logoContainer,
                  children: (0, t.jsxs)("div", {
                    className: g().hoverContainer,
                    onMouseMove: function (e) {
                      let s = o.current.getBoundingClientRect();
                      d({ x: e.clientX - s.x, y: e.clientY - s.y }),
                        p(
                          (function (e) {
                            let s = "",
                              a =
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                              t = a.length,
                              i = 0;
                            for (; i < 1800; )
                              (s += a.charAt(Math.floor(Math.random() * t))),
                                (i += 1);
                            return s;
                          })(0),
                        );
                    },
                    children: [
                      (0, t.jsx)("img", { src: n }),
                      (0, t.jsx)("div", {
                        className: g().characters,
                        children: h,
                      }),
                    ],
                  }),
                }),
              }),
              (0, t.jsxs)("div", {
                className: g().metaContainer,
                children: [
                  (0, t.jsx)("div", {
                    className: g().description,
                    children: s,
                  }),
                  a.map((e, s) =>
                    (0, t.jsx)(
                      "div",
                      { className: g().useCase, children: e },
                      s,
                    ),
                  ),
                ],
              }),
            ],
          }),
        });
      }
      var v = a(72361),
        x = a.n(v);
      let y = [
        {
          slug: "ness",
          description:
            "Ness shipped their credit card product in record time with evervault.",
          useCases: ["PCI Compliance"],
          logo: "/images/logos/ness.svg",
        },
        {
          slug: "humaans",
          description:
            "Humaans easily passes vendor audits from larger, more security-conscious customers.",
          useCases: ["Credentials Encryption"],
          logo: "/images/logos/humaans.svg",
        },
        {
          slug: "swan",
          description:
            "Swan builds customer trust by encrypting users’ video files for virtual fitting rooms.",
          useCases: ["PII Encryption"],
          logo: "/images/logos/swan.svg",
        },
        {
          slug: "vital",
          description:
            "Vital ensures customer privacy by keeping credentials encrypted at all times.",
          useCases: ["Credentials Encryption"],
          logo: "/images/logos/vital.svg",
        },
        {
          slug: "meili",
          description:
            "Meili uses evervault to give their customers a seamless and secure payment experience.",
          useCases: ["PCI Compliance"],
          logo: "/images/logos/meili.svg",
        },
        {
          slug: "bridgecard",
          description:
            "How Bridgecard used evervault to save 80%+ on their PCI DSS compliance audit.",
          useCases: ["PCI Compliance"],
          logo: "/images/logos/bridgecard.svg",
        },
        { logo: "/images/logos/sorare.svg" },
        { logo: "/images/logos/stitch.svg" },
        { logo: "/images/logos/visa.svg" },
        { logo: "/images/logos/xp.svg" },
        { logo: "/images/logos/safety-wing.svg" },
        { logo: "/images/logos/the-irish-times.svg" },
        { logo: "/images/logos/edge.svg" },
        { logo: "/images/logos/encore.svg" },
        { logo: "/images/logos/kennek.svg" },
        { logo: "/images/logos/brass.svg" },
        { logo: "/images/logos/billergenie.svg" },
        { logo: "/images/logos/square1.svg" },
        { logo: "/images/logos/supermojo.svg" },
        { logo: "/images/logos/legitimate.svg" },
        { logo: "/images/logos/resly.svg" },
        { logo: "/images/logos/ultra.svg" },
        { logo: "/images/logos/manna-aero.svg" },
        { logo: "/images/logos/allawee.svg" },
        { logo: "/images/logos/hitpay.svg" },
        { logo: "/images/logos/slipstream.svg" },
        { logo: "/images/logos/ethos.svg" },
        { logo: "/images/logos/zelus.svg" },
        { logo: "/images/logos/principally.svg" },
        { logo: "/images/logos/unbanx.svg" },
        { logo: "/images/logos/nmible.svg" },
        { logo: "/images/logos/payday.svg" },
        { logo: "/images/logos/identity.svg" },
      ];
      var j = a(29405),
        _ = a(28101),
        S = a(50618),
        b = a(33587),
        f = a(19202),
        C = a.n(f),
        w = a(75964),
        N = a(11544),
        k = a(92520),
        R = a(41962),
        I = a(25358),
        q = a(67908),
        D = a.n(q),
        E = a(15662),
        A = a(44703),
        G = a.n(A),
        O = a(13542),
        P = a(37023),
        T = a.n(P),
        H = a(61533),
        Z = a.n(H),
        B = a(38996),
        z = a.n(B);
      let M = {
        ness: {
          logo: "/images/logos/ness.svg",
          name: (0, t.jsx)("a", {
            href: "https://nesswell.com/",
            target: "_blank",
            children: "Ness",
          }),
          description:
            "A points-based health and wellness credit card offering rewards and benefits with top brands to incentivize Cardmembers to spend and live healthily.",
          size: "<100",
          location: "USA",
          industry: "Fintech",
          useCase: "PCI Compliance",
          products: ["Inbound Relay", "Outbound Relay", "Functions"],
          quote:
            "If we tried to build everything that evervault gives us, it would take at least two full time security engineers.",
          challenge:
            "The Ness Card is a premium card for people who care more about health and wellness than travel. They needed to work with a third-party card issuer, with a rigorous and mandatory PCI DSS review process before they were allow access to their production environment to issue cards. Ness had a tight launch deadline and needed to be able to secure their environment and become PCI DSS compliant, quickly.",
          solution:
            "Using Outbound Relay, Ness fetch card data from their processor’s API and have it encrypted before it touches their infrastructure. Using Functions, they can fetch card data from their mobile app and render it—without it touching their infrastructure in plaintext.",
          impact:
            "Ness was able to launch a custom credit card program with their processor in less than four weeks. Not only was it faster, they did it at a price that was 60% less than what it would cost to manage the PCI compliance process themselves.",
          diagram: (0, t.jsx)(function () {
            let e = (0, S.Z)("(min-width: 768px)"),
              [s, a] = (0, i.useState)("Functions");
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: D().container,
                children: [
                  (0, t.jsx)(w.Z, {
                    tabs: ["Functions", "Outbound Relay"],
                    onChange: a,
                    value: s,
                  }),
                  (0, t.jsxs)("div", {
                    className: D().diagram,
                    children: [
                      "Functions" === s &&
                        (0, t.jsxs)(j.S, {
                          direction: e ? "horizontal" : "vertical",
                          children: [
                            (0, t.jsxs)(j.S.Nodes, {
                              children: [
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "client-1",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(R.Z, {}),
                                      payload: {
                                        key: "pan",
                                        value: "ev:Tk9D",
                                        highlight: !0,
                                      },
                                      children: "Ness Mobile App",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "function",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(_.Z, {}),
                                      glow: !0,
                                      children: "Function",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "client-2",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(R.Z, {}),
                                      payload: { key: "pan", value: "4242" },
                                      children: "Ness Mobile App",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["client-1", "function"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: D().encryptedRequest,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeIn",
                              }),
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["function", "client-2"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: D().request,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeOut",
                                delay: 1.5,
                              }),
                            }),
                          ],
                        }),
                      "Outbound Relay" === s &&
                        (0, t.jsxs)(j.S, {
                          direction: e ? "horizontal" : "vertical",
                          children: [
                            (0, t.jsxs)(j.S.Nodes, {
                              children: [
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "ness-server",
                                    children: (0, t.jsx)(j.S.Service, {
                                      payload: {
                                        key: "pan",
                                        value: "ev:Tk9D",
                                        highlight: !0,
                                      },
                                      children: "Ness Server",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "outbound-relay",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(_.Z, {}),
                                      glow: !0,
                                      children: "Outbound Relay",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "card-issuer",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(I.Z, {}),
                                      payload: { key: "pan", value: "4242" },
                                      children: "Card Issuer API",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["ness-server", "outbound-relay"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: D().encryptedRequest,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeIn",
                              }),
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["outbound-relay", "card-issuer"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: D().request,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeOut",
                                delay: 1.5,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: D().description,
                    children: (0, t.jsxs)(N.M, {
                      mode: "wait",
                      children: [
                        "Functions" === s &&
                          (0, t.jsx)(
                            k.E.span,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.25 },
                              children:
                                "The Ness mobile app uses an evervault Function to decrypt card numbers and present them to the user.",
                            },
                            "functions",
                          ),
                        "Outbound Relay" === s &&
                          (0, t.jsx)(
                            k.E.span,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.25 },
                              children:
                                "The Ness server uses Outbound Relay to fetch card numbers from a card issuer and encrypt them.",
                            },
                            "outbound-relay",
                          ),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }, {}),
        },
        humaans: {
          logo: "/images/logos/humaans.svg",
          name: (0, t.jsx)("a", {
            href: "https://humaans.io/",
            target: "_blank",
            children: "Humaans",
          }),
          description:
            "Humaans helps globally scaling organizations transform their HR processes with a human-centric approach. Humaans offers flexibility and scalability to efficiently customize organizations’ HR tech stack, seamlessly integrates with other best in class platforms and point solutions, such as Google Workspace, Slack, Okta, Greenhouse, Lattice, DocuSign and more. Humaans also reduces ongoing administrative work by 65% and onboarding time by an average of 55%.",
          location: "London/Dublin/Remote",
          industry: "HR Tech",
          useCase: "Credentials Encryption",
          products: ["Outbound Relay"],
          quote:
            "evervault contributed to our security efforts and allowed us to sign larger, security-conscious customers.",
          challenge:
            "Humaans is an HR employee management tool that is supporting growing organizations and being enterprise-ready often comes at high costs and months building enterprise features. Humaans is focused on building many integrations with other best in class platforms and point solutions and further securing those integrations is important to provide extra peace of mind to their customers. For example, if a customer’s Google Workspace or Okta credentials were lost or breached, hackers might gain access to those integrated systems. Humaans wanted to offer the convenience of many powerful integrations, while also passing the stringent security concerns of enterprise security and compliance teams.",
          solution:
            "Insert evervault. Humaans use Outbound Relay response encryption to encrypt access tokens for Google Workspace and Okta as they’re requested, so Humaans servers never see them in plaintext.",
          impact:
            "Humaans are able to close large, security-conscious customers, without having to detract from the product roadmap.",
          diagram: (0, t.jsx)(function () {
            let e = (0, S.Z)("(min-width: 768px)");
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: C().container,
                children: [
                  (0, t.jsx)("div", {
                    className: C().diagram,
                    children: (0, t.jsxs)(j.S, {
                      direction: e ? "horizontal" : "vertical",
                      children: [
                        (0, t.jsxs)(j.S.Nodes, {
                          children: [
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "server",
                                children: (0, t.jsx)(j.S.Service, {
                                  payload: {
                                    key: "token",
                                    value: "ev:Tk9D",
                                    highlight: !0,
                                  },
                                  children: "Humaans Server",
                                }),
                              }),
                            }),
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "outbound-relay",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(_.Z, {}),
                                  glow: !0,
                                  children: "Outbound Relay",
                                }),
                              }),
                            }),
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "google-admin",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(b.Z, {}),
                                  payload: { key: "token", value: "eYJ" },
                                  children: "Google Admin",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(j.S.Connection, {
                          nodes: ["server", "outbound-relay"],
                          children: (0, t.jsx)(j.S.Request, {
                            className: C().encryptedRequest,
                            duration: 1.5,
                            repeatDelay: 1.5,
                            ease: "easeIn",
                          }),
                        }),
                        (0, t.jsx)(j.S.Connection, {
                          nodes: ["outbound-relay", "google-admin"],
                          children: (0, t.jsx)(j.S.Request, {
                            className: C().request,
                            duration: 1.5,
                            repeatDelay: 1.5,
                            ease: "easeOut",
                            delay: 1.5,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: C().description,
                    children: (0, t.jsx)("span", {
                      children:
                        "Humaans uses Outbound Relay to encrypt access tokens that are returned on authorization from Google Admin. All subsequent requests to Google Admin are automatically decrypted.",
                    }),
                  }),
                ],
              }),
            });
          }, {}),
        },
        swan: {
          logo: "/images/logos/swan.svg",
          name: (0, t.jsx)("a", {
            href: "https://www.getswan.co/",
            target: "_blank",
            children: "Swan",
          }),
          description:
            "Swan provides a technology to fashion retailers that creates an accurate, 3D model of shoppers for the purpose of trying on garments virtually. Shoppers, simply take a mobile phone video of themselves.",
          size: "<10",
          location: "Ireland",
          industry: "Fashion/eCommerce",
          useCase: "PII Encryption",
          products: ["Node SDK", "Inbound Relay"],
          quote:
            "Being able to say ‘We use evervault’ ensures that our customers and partners relax as soon as the security question comes up. File protection ceases to be a concern.",
          challenge:
            "Swan’s virtual fitting room technology, used by shoppers to understand how and what size clothes will fit, is powered by an accurate 3D model of their bodies. Shoppers must upload a short video of themselves wearing form-fitting clothes, trusting Swan completely to keep that content secure. To convince customers to use the platform, Swan needs to be able to prove that no-one can access the videos once they’re stored on Swan’s servers.",
          solution:
            "Swan uses evervault to encrypt the video files after the shoppers upload them. Each file, which is essential to the creation of the shopper’s personal 3D model - is routed through evervault’s File Encryption proxy, and is fully encrypted before being stored on their servers.",
          impact:
            "Being able to prove that user videos are secure, Swan is able to build trust with their users and onboard new customers more quickly.",
          diagram: (0, t.jsx)(function () {
            let e = (0, S.Z)("(min-width: 768px)");
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: T().container,
                children: [
                  (0, t.jsx)("div", {
                    className: T().diagram,
                    children: (0, t.jsxs)(j.S, {
                      direction: e ? "horizontal" : "vertical",
                      children: [
                        (0, t.jsxs)(j.S.Nodes, {
                          children: [
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "client",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(O.Z, {}),
                                  payload: { key: "file", value: "video.mp4" },
                                  children: "Swan User",
                                }),
                              }),
                            }),
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "node-sdk",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(_.Z, {}),
                                  glow: !0,
                                  children: "Node SDK",
                                }),
                              }),
                            }),
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "s3",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(b.Z, {}),
                                  payload: {
                                    key: "file",
                                    value: "ev:Tk9D",
                                    highlight: !0,
                                  },
                                  children: "S3 Bucket",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(j.S.Connection, {
                          nodes: ["client", "node-sdk"],
                          children: (0, t.jsx)(j.S.Request, {
                            className: T().request,
                            duration: 1.5,
                            repeatDelay: 1.5,
                            ease: "easeIn",
                          }),
                        }),
                        (0, t.jsx)(j.S.Connection, {
                          nodes: ["node-sdk", "s3"],
                          children: (0, t.jsx)(j.S.Request, {
                            className: T().encryptedRequest,
                            duration: 1.5,
                            repeatDelay: 1.5,
                            ease: "easeOut",
                            delay: 1.5,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: T().description,
                    children: (0, t.jsx)("span", {
                      children:
                        "Swan uses the evervault Node SDK to encrypt images before storing them in an S3 bucket.",
                    }),
                  }),
                ],
              }),
            });
          }, {}),
        },
        vital: {
          logo: "/images/logos/vital.svg",
          name: (0, t.jsx)("a", {
            href: "https://tryvital.io/",
            target: "_blank",
            children: "Vital",
          }),
          description:
            'The API for at home health tech and wearables. "The Stripe for health care”.',
          size: "<100",
          location: "UK/US",
          industry: "Health Tech",
          useCase: "Credentials Encryption",
          products: ["Outbound Relay"],
          quote:
            "evervault allows us to convinced the most security-conscious, compliance-bound customers that we could be trusted to keep their sensitive data safe.",
          challenge:
            "Vital is an API for collecting large volumes of sensitive health data from wearable devices like Whoop, Oura and Fitbit. As a developer product in the healthcare space, it was doubly important for Vital to have a solid security posture. Not only do they have to win over developers, but they have to stay HIPAA and GDPR compliant.",
          solution:
            "Using evervault Functions, Vital can keep credentials encrypted at all times and still interact with third-party wearables APIs using a variety of authentication systems like OAuth1, OAuth2 and OpenID Connect.",
          impact: (0, t.jsxs)("span", {
            children: [
              "Vital are able to prove customers, like Una Health and Crescent, that their security was best-in-class by communicating that they use evervault to encrypt their credentials, see",
              " ",
              (0, t.jsx)("a", {
                href: "https://docs.tryvital.io/home/privacy",
                target: "_blank",
                children: "Vitals’ privacy page",
              }),
              ".",
            ],
          }),
          diagram: (0, t.jsx)(function () {
            let e = (0, S.Z)("(min-width: 768px)");
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: Z().container,
                children: [
                  (0, t.jsx)("div", {
                    className: Z().diagram,
                    children: (0, t.jsxs)(j.S, {
                      direction: e ? "horizontal" : "vertical",
                      children: [
                        (0, t.jsxs)(j.S.Nodes, {
                          children: [
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "server",
                                children: (0, t.jsx)(j.S.Service, {
                                  payload: {
                                    key: "token",
                                    value: "ev:Tk9D",
                                    highlight: !0,
                                  },
                                  children: "Vital Server",
                                }),
                              }),
                            }),
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "outbound-relay",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(_.Z, {}),
                                  glow: !0,
                                  children: "Outbound Relay",
                                }),
                              }),
                            }),
                            (0, t.jsx)(j.S.Group, {
                              children: (0, t.jsx)(j.S.Node, {
                                id: "wearables-api",
                                children: (0, t.jsx)(j.S.Service, {
                                  icon: (0, t.jsx)(b.Z, {}),
                                  payload: { key: "token", value: "eYJ" },
                                  children: "Wearables API",
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, t.jsx)(j.S.Connection, {
                          nodes: ["server", "outbound-relay"],
                          children: (0, t.jsx)(j.S.Request, {
                            className: Z().encryptedRequest,
                            duration: 1.5,
                            repeatDelay: 1.5,
                            ease: "easeIn",
                          }),
                        }),
                        (0, t.jsx)(j.S.Connection, {
                          nodes: ["outbound-relay", "wearables-api"],
                          children: (0, t.jsx)(j.S.Request, {
                            className: Z().request,
                            duration: 1.5,
                            repeatDelay: 1.5,
                            ease: "easeOut",
                            delay: 1.5,
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: Z().description,
                    children: (0, t.jsx)("span", {
                      children:
                        "Vital uses Outbound Relay to encrypt access tokens that are returned from their users' wearable APIs.",
                    }),
                  }),
                ],
              }),
            });
          }, {}),
        },
        meili: {
          logo: "/images/logos/meili.svg",
          name: (0, t.jsx)("a", {
            href: "https://www.meili.travel/",
            target: "_blank",
            children: "Meili",
          }),
          description:
            "Meili builds technology that enables mobility companies to integrate seamlessly with airlines, travel & technology partners, creating a friction free customer experience.",
          size: "20-50",
          location: "Ireland",
          industry: "Travel Tech",
          useCase: "PCI Compliance",
          products: ["Inputs, Outbound Relay"],
          quote:
            "Using evervault gives us the ability to allow for prepayment, if evervault did not exist, we would have had to go through months of development and PCI processes.",
          challenge:
            "Meili builds integration software for mobility companies, like car rental providers, that allows them to seamlessly interact with travel partners, like Airlines and Hotel Groups. One of the challenges is that the Meili Platform is consumer facing and for prepayment has to be fully PCI compliant when taking payment information. The payment information is then passed directly to car rental company using evervault to allow the payment to be processed safely.",
          solution:
            "Using evervault Inputs (embeddable iFrame for collecting cardholder data), Meili can collect users’ credit cards at the point of booking. This means that when Meili’s platform is used by their customers, Meili will actually store that card data (fully encrypted), and be able to route it wherever required. This gives them the ability to pass sensitive information to their partners through Outbound Relay — with complete flexibility.",
          impact:
            "Using evervault helps make Meili PCI compliant, increasing the long-term performance of their business by enabling their platform to handle cardholder data before sharing it with their partners.",
          diagram: (0, t.jsx)(function () {
            let e = (0, S.Z)("(min-width: 768px)"),
              [s, a] = (0, i.useState)("Inputs");
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: G().container,
                children: [
                  (0, t.jsx)(w.Z, {
                    tabs: ["Inputs", "Outbound Relay"],
                    onChange: a,
                    value: s,
                  }),
                  (0, t.jsxs)("div", {
                    className: G().diagram,
                    children: [
                      "Inputs" === s &&
                        (0, t.jsxs)(j.S, {
                          direction: e ? "horizontal" : "vertical",
                          children: [
                            (0, t.jsxs)(j.S.Nodes, {
                              children: [
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "server",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(E.Z, {}),
                                      payload: { key: "pan", value: "4242..." },
                                      children: "Meili Client",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "outbound-relay",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(_.Z, {}),
                                      glow: !0,
                                      children: "Inputs",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "bank-api",
                                    children: (0, t.jsx)(j.S.Service, {
                                      payload: {
                                        key: "pan",
                                        value: "ev:Tk9d",
                                        highlight: !0,
                                      },
                                      children: "Meili Server",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["server", "outbound-relay"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: G().encryptedRequest,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeIn",
                              }),
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["outbound-relay", "bank-api"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: G().request,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeOut",
                                delay: 1.5,
                              }),
                            }),
                          ],
                        }),
                      "Outbound Relay" === s &&
                        (0, t.jsxs)(j.S, {
                          direction: e ? "horizontal" : "vertical",
                          children: [
                            (0, t.jsxs)(j.S.Nodes, {
                              children: [
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "server",
                                    children: (0, t.jsx)(j.S.Service, {
                                      payload: {
                                        key: "pan",
                                        value: "ev:Tk9d",
                                        highlight: !0,
                                      },
                                      children: "Meili Server",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "outbound-relay",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(_.Z, {}),
                                      glow: !0,
                                      children: "Outbound Relay",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "bank-api",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(I.Z, {}),
                                      payload: { key: "pan", value: "4242..." },
                                      children: "Booking API",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["server", "outbound-relay"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: G().encryptedRequest,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeIn",
                              }),
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["outbound-relay", "bank-api"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: G().request,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeOut",
                                delay: 1.5,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: G().description,
                    children: (0, t.jsxs)(N.M, {
                      mode: "wait",
                      children: [
                        "Inputs" === s &&
                          (0, t.jsx)(
                            k.E.span,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.25 },
                              children:
                                "Meili use evervault Inputs to collect and encrypt card data in the client. Using Inputs allows them to minimize their PCI scope and reduce their compliance burden.",
                            },
                            "functions",
                          ),
                        "Outbound Relay" === s &&
                          (0, t.jsx)(
                            k.E.span,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.25 },
                              children:
                                "Meili use evervault's Outbound Relay to send encrypted card data payloads to Booking APIs. The card data is decrypted during the request.",
                            },
                            "outbound-relay",
                          ),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }, {}),
        },
        bridgecard: {
          logo: "/images/logos/bridgecard.svg",
          name: (0, t.jsx)("a", {
            href: "https://bridgecard.co/",
            target: "_blank",
            children: "Bridgecard",
          }),
          description:
            "Bridgecard makes it easy for Fintechs in Africa to issue cards to their customers that will work anywhere in the world.",
          size: "<25",
          location: "Africa",
          industry: "Fintech",
          useCase: "PCI Compliance",
          products: ["Inbound Relay", "Outbound Relay"],
          quote:
            "Using evervault allowed us to ship a fully PCI DSS compliant product in days instead of months.",
          challenge:
            "With a small team and tight deadline to market, Bridgecard decided to leverage a third-party card issuer to generate the cards for their customers. They use the issuer to create the card account information, then their customers interact and manage their cards across Bridgecard’s mobile app. While they saved a lot of time with issuing, Bridgecard still had the challenge of handling the card data directly on their systems before surfacing it to their customers – bringing them into PCI DSS compliance scope, and expensive an arduous process.",
          solution:
            "Bridgecard solved this by using a combination of Functions and Outbound Relay to fetch card data from their third-party issuer, fully encrypting it before it touches their infrastructure. Bridgecard then stores this encrypted card data in their database, until their customers fetch the card data. The data is decrypted on the fly by evervault once it leaves Bridgecard and is presented to their customer.  This is all done instantly so their customers never notice any of the evervault encryption.",
          impact:
            "Bridgecard reduced their PCI DSS scope to the smallest possible set of controls (SAQ A) and saved 80%+ on their PCI compliance and audit costs. The risk of High Impact card data breach is also minimal as the decryption keys and encrypted data are never resident in the BridgeCard environment.",
          diagram: (0, t.jsx)(function () {
            let e = (0, S.Z)("(min-width: 768px)"),
              [s, a] = (0, i.useState)("Inbound Relay");
            return (0, t.jsx)(t.Fragment, {
              children: (0, t.jsxs)("div", {
                className: z().container,
                children: [
                  (0, t.jsx)(w.Z, {
                    tabs: ["Inbound Relay", "Outbound Relay"],
                    onChange: a,
                    value: s,
                  }),
                  (0, t.jsxs)("div", {
                    className: z().diagram,
                    children: [
                      "Inbound Relay" === s &&
                        (0, t.jsxs)(j.S, {
                          direction: e ? "horizontal" : "vertical",
                          children: [
                            (0, t.jsxs)(j.S.Nodes, {
                              children: [
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "client-1",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(I.Z, {}),
                                      payload: { key: "pan", value: "4242" },
                                      children: "Bridgecard User",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "function",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(_.Z, {}),
                                      glow: !0,
                                      children: "Inbound Relay",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "client-2",
                                    children: (0, t.jsx)(j.S.Service, {
                                      payload: {
                                        key: "pan",
                                        value: "ev:Tk9D",
                                        highlight: !0,
                                      },
                                      children: "Bridgecard API",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["client-1", "function"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: z().request,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeIn",
                              }),
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["function", "client-2"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: z().encryptedRequest,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeOut",
                                delay: 1.5,
                              }),
                            }),
                          ],
                        }),
                      "Outbound Relay" === s &&
                        (0, t.jsxs)(j.S, {
                          direction: e ? "horizontal" : "vertical",
                          children: [
                            (0, t.jsxs)(j.S.Nodes, {
                              children: [
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "ness-server",
                                    children: (0, t.jsx)(j.S.Service, {
                                      payload: {
                                        key: "pan",
                                        value: "ev:Tk9D",
                                        highlight: !0,
                                      },
                                      children: "Bridgecard API",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "outbound-relay",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(_.Z, {}),
                                      glow: !0,
                                      children: "Outbound Relay",
                                    }),
                                  }),
                                }),
                                (0, t.jsx)(j.S.Group, {
                                  children: (0, t.jsx)(j.S.Node, {
                                    id: "card-issuer",
                                    children: (0, t.jsx)(j.S.Service, {
                                      icon: (0, t.jsx)(I.Z, {}),
                                      payload: { key: "pan", value: "4242" },
                                      children: "Card Issuer API",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["ness-server", "outbound-relay"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: z().encryptedRequest,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeIn",
                              }),
                            }),
                            (0, t.jsx)(j.S.Connection, {
                              nodes: ["outbound-relay", "card-issuer"],
                              children: (0, t.jsx)(j.S.Request, {
                                className: z().request,
                                duration: 1.5,
                                repeatDelay: 1.5,
                                ease: "easeOut",
                                delay: 1.5,
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, t.jsx)("div", {
                    className: z().description,
                    children: (0, t.jsxs)(N.M, {
                      mode: "wait",
                      children: [
                        "Inbound Relay" === s &&
                          (0, t.jsx)(
                            k.E.span,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.25 },
                              children:
                                "Bridgecard customers send requests to the Bridgecard API through Inbound Relay and credit card numbers in the response are automatically decrypted.",
                            },
                            "functions",
                          ),
                        "Outbound Relay" === s &&
                          (0, t.jsx)(
                            k.E.span,
                            {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              exit: { opacity: 0 },
                              transition: { duration: 0.25 },
                              children:
                                "Bridgecard fetches credit card numbers from the Card Issuer API through Outbound Relay and automatically encrypts them in the response.",
                            },
                            "outbound-relay",
                          ),
                      ],
                    }),
                  }),
                ],
              }),
            });
          }, {}),
        },
      };
      var F = a(67169),
        U = a.n(F),
        W = a(98814);
      function ExpandedCard() {
        let e = (0, r.useRouter)(),
          s = e.query.customer[0];
        return (0, t.jsx)("div", {
          className: U().container,
          children: (0, t.jsx)("div", {
            className: U().scrollContainer,
            children: (0, t.jsxs)("div", {
              className: U().contentContainer,
              children: [
                (0, t.jsxs)("div", {
                  className: U().overview,
                  children: [
                    (0, t.jsx)(GridSection, {
                      contained: !0,
                      className: U().logoContainer,
                      children: (0, t.jsx)("img", { src: M[s].logo }),
                    }),
                    (0, t.jsxs)(GridSection, {
                      className: U().overviewItem,
                      contained: !0,
                      children: [
                        (0, t.jsx)("p", {
                          className: U().category,
                          children: "Name",
                        }),
                        (0, t.jsx)("p", { children: M[s].name }),
                      ],
                    }),
                    (0, t.jsxs)(GridSection, {
                      className: U().overviewItem,
                      contained: !0,
                      children: [
                        (0, t.jsx)("p", {
                          className: U().category,
                          children: "Description",
                        }),
                        (0, t.jsx)("p", { children: M[s].description }),
                      ],
                    }),
                    (0, t.jsxs)(GridSection, {
                      className: U().overviewItem,
                      contained: !0,
                      children: [
                        (0, t.jsx)("p", {
                          className: U().category,
                          children: "Location",
                        }),
                        (0, t.jsx)("p", { children: M[s].location }),
                      ],
                    }),
                    (0, t.jsxs)(GridSection, {
                      className: U().overviewItem,
                      contained: !0,
                      children: [
                        (0, t.jsx)("p", {
                          className: U().category,
                          children: "Industry",
                        }),
                        (0, t.jsx)("p", { children: M[s].industry }),
                      ],
                    }),
                    (0, t.jsxs)(GridSection, {
                      className: U().overviewItem,
                      contained: !0,
                      children: [
                        (0, t.jsx)("p", {
                          className: U().category,
                          children: "Products",
                        }),
                        (0, t.jsx)("p", { children: M[s].products.join(", ") }),
                      ],
                    }),
                    (0, t.jsxs)(GridSection, {
                      className: U().overviewItem,
                      contained: !0,
                      children: [
                        (0, t.jsx)("p", {
                          className: U().category,
                          children: "Solution",
                        }),
                        (0, t.jsx)("p", { children: M[s].useCase }),
                      ],
                    }),
                    M[s].size &&
                      (0, t.jsxs)(GridSection, {
                        className: U().overviewItem,
                        contained: !0,
                        children: [
                          (0, t.jsx)("p", {
                            className: U().category,
                            children: "Size",
                          }),
                          (0, t.jsxs)("p", {
                            children: [M[s].size, " Employees"],
                          }),
                        ],
                      }),
                    (0, t.jsx)("span", {
                      className: U().backButton,
                      children: (0, t.jsx)(m(), {
                        href: "/customers",
                        children: (0, t.jsxs)("span", {
                          children: [(0, t.jsx)(W.Z, { size: 14 }), " Go Back"],
                        }),
                      }),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: U().content,
                  children: [
                    (0, t.jsx)("div", {
                      className: U().quoteWrapper,
                      children: (0, t.jsxs)("h3", {
                        className: U().quote,
                        children: ["“", M[s].quote, "”"],
                      }),
                    }),
                    M[s].diagram,
                    (0, t.jsx)("div", {
                      className: d()(U().pill, "mb-12"),
                      children: "Challenge",
                    }),
                    (0, t.jsx)("p", { children: M[s].challenge }),
                    (0, t.jsx)("div", {
                      className: d()(U().pill, "mb-12"),
                      children: "Solution",
                    }),
                    (0, t.jsx)("p", { children: M[s].solution }),
                    (0, t.jsx)("div", {
                      className: d()(U().pill, "mb-12"),
                      children: "Impact",
                    }),
                    (0, t.jsx)("p", { children: M[s].impact }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      function Cards() {
        let { query: e } = (0, r.useRouter)();
        return (
          (0, i.useEffect)(() => {
            e.customer
              ? (document.body.style.overflow = "hidden")
              : (document.body.style.overflow = "unset");
          }, [e.customer]),
          (0, t.jsxs)("div", {
            className: x().container,
            children: [
              (0, t.jsx)("div", {
                className: x().cards,
                children: y.map((e) =>
                  e.slug
                    ? (0, i.createElement)(Card, { ...e, key: e.slug })
                    : (0, t.jsx)(
                        GridSection,
                        {
                          children: (0, t.jsx)("div", {
                            className: x().logoContainer,
                            children: (0, t.jsx)("img", {
                              src: e.logo,
                              className: x().logo,
                            }),
                          }),
                        },
                        e.logo,
                      ),
                ),
              }),
              e.customer && (0, t.jsx)(ExpandedCard, {}),
              (0, t.jsx)(n.Z, {
                heading: "Encrypt the web.",
                subheading:
                  "Join engineering teams all over the world who protect their most sensitive data with evervault.",
                cta: "Get started",
                href: "https://app.evervault.com/register",
              }),
            ],
          })
        );
      }
      var V = a(9849),
        L = a(38329),
        X = a.n(L),
        J = a(44613),
        K = a.n(J),
        CircularIndicator_CircularIndicator = (e) => {
          let { width: s } = e;
          return (0, t.jsx)(k.E.div, {
            className: K().container,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 1, delay: 0.5 },
            style: { width: s, height: s },
            children: (0, t.jsx)("div", {
              className: K().loader,
              children: (0, t.jsx)("div", { className: K().face }),
            }),
          });
        },
        Y = a(35800),
        Q = a(8971);
      let $ = (0, k.E)(V.Z);
      function Hero() {
        let [e, s] = (0, i.useState)(!1),
          [a, n] = (0, i.useState)(!0),
          r = (0, i.useRef)(),
          [o, l] = (0, i.useState)(!1);
        return (0, t.jsxs)("div", {
          className: X().container,
          ref: r,
          children: [
            (0, t.jsx)(Y.ErrorBoundary, {
              fallback: (0, t.jsx)("div", {}),
              children: (0, t.jsx)($, {
                scene: "/scene.splinecode",
                onLoad: () => l(!0),
                initial: !1,
                animate: { opacity: o ? 1 : 0 },
                transition: { delay: 0.1, duration: 0.5 },
                onAnimationComplete: () => s(!0),
                onClick: () => n(!1),
              }),
            }),
            e &&
              (0, t.jsxs)("div", {
                className: X().heroCopy,
                children: [
                  (0, t.jsx)("h1", {
                    className: X().title,
                    children: "Customers",
                  }),
                  (0, t.jsx)("p", {
                    className: X().subTitle,
                    children:
                      "evervault is trusted by the world’s most innovative companies to secure their most sensitive data.",
                  }),
                ],
              }),
            e &&
              (0, t.jsx)(N.M, {
                children:
                  a &&
                  (0, t.jsx)(CircularIndicator_CircularIndicator, {
                    width: "".concat(0.18 * r.current.offsetHeight, "px"),
                  }),
              }),
            (0, t.jsxs)("button", {
              className: X().scroll,
              onClick: function () {
                window.scrollTo({
                  top: r.current.offsetHeight,
                  behavior: "smooth",
                });
              },
              children: [
                (0, t.jsx)(Q.Z, {
                  className: X().chevron,
                  strokeWidth: 1.5,
                  height: 32,
                }),
                (0, t.jsx)(Q.Z, {
                  className: X().chevron,
                  strokeWidth: 1.5,
                  height: 32,
                }),
              ],
            }),
          ],
        });
      }
      var ee = a(39892),
        es = a(36050),
        ea = a.n(es);
      function Customers() {
        let e = (0, r.useRouter)(),
          s = (0, i.useRef)(0);
        return (
          (0, i.useEffect)(() => {
            let onRouteChangeStart = () => {
                "/customers" === e.asPath && (s.current = window.scrollY);
              },
              onRouteChangeComplete = (e) => {
                "/customers" === e &&
                  window.scroll({ top: s.current, behavior: "auto" });
              };
            return (
              e.events.on("routeChangeStart", onRouteChangeStart),
              e.events.on("routeChangeComplete", onRouteChangeComplete),
              () => {
                e.events.off("routeChangeStart", onRouteChangeStart),
                  e.events.off("routeChangeComplete", onRouteChangeComplete);
              }
            );
          }, [e]),
          (0, t.jsx)(ee.Z, {
            title: "Customers — evervault",
            description:
              "evervault is trusted by the world’s most innovative companies to secure their most sensitive data.",
            socialImage: "https://evervault.com/social/customers.jpg",
            children: (0, t.jsxs)("div", {
              className: ea().container,
              children: [(0, t.jsx)(Hero, {}), (0, t.jsx)(Cards, {})],
            }),
          })
        );
      }
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
    49409: function (e) {
      e.exports = {
        container: "Card_container__rgpnr",
        logoContainer: "Card_logoContainer__i0jjK",
        hoverContainer: "Card_hoverContainer__CP2qo",
        characters: "Card_characters__mS7bd",
        metaContainer: "Card_metaContainer__gwmgx",
        description: "Card_description__mNRrU",
        useCase: "Card_useCase__EREbB",
      };
    },
    72361: function (e) {
      e.exports = {
        container: "Cards_container__O2VPh",
        cards: "Cards_cards__DAnJJ",
        logoContainer: "Cards_logoContainer__2henO",
        logo: "Cards_logo__z5TXd",
      };
    },
    38996: function (e) {
      e.exports = {
        container: "BridgecardDiagram_container__LvqtH",
        diagram: "BridgecardDiagram_diagram__2bwnK",
        description: "BridgecardDiagram_description__waZ_k",
        request: "BridgecardDiagram_request__aOXlA",
        encryptedRequest: "BridgecardDiagram_encryptedRequest__CSZcn",
      };
    },
    67169: function (e) {
      e.exports = {
        container: "ExpandedCard_container__PcMcC",
        scrollContainer: "ExpandedCard_scrollContainer__N3aIm",
        contentContainer: "ExpandedCard_contentContainer__B0qpv",
        overview: "ExpandedCard_overview__SlgG2",
        logoContainer: "ExpandedCard_logoContainer__9IWlX",
        content: "ExpandedCard_content__f7LWg",
        overviewItem: "ExpandedCard_overviewItem__eOWVe",
        category: "ExpandedCard_category__6NpCj",
        quote: "ExpandedCard_quote__3f0nU",
        pill: "ExpandedCard_pill__Kkv4z",
        backButton: "ExpandedCard_backButton__OsOIi",
        diagram: "ExpandedCard_diagram__jcUIn",
      };
    },
    19202: function (e) {
      e.exports = {
        container: "HumaansDiagram_container__ZzSNr",
        diagram: "HumaansDiagram_diagram__IPvPA",
        description: "HumaansDiagram_description__FqnLr",
        request: "HumaansDiagram_request__Z2hXK",
        encryptedRequest: "HumaansDiagram_encryptedRequest__8zWST",
      };
    },
    44703: function (e) {
      e.exports = {
        container: "MeiliDiagram_container__eqh_I",
        diagram: "MeiliDiagram_diagram__LUmLq",
        description: "MeiliDiagram_description__SANwT",
        request: "MeiliDiagram_request__aJQPZ",
        encryptedRequest: "MeiliDiagram_encryptedRequest__bHZsO",
      };
    },
    67908: function (e) {
      e.exports = {
        container: "NessDiagram_container__3bkqL",
        diagram: "NessDiagram_diagram__gP4kF",
        description: "NessDiagram_description__z9ZFi",
        request: "NessDiagram_request__v_H8h",
        encryptedRequest: "NessDiagram_encryptedRequest__g0ZVM",
      };
    },
    37023: function (e) {
      e.exports = {
        container: "SwanDiagram_container__k0XlP",
        diagram: "SwanDiagram_diagram__Y3ywS",
        description: "SwanDiagram_description__9hXjs",
        request: "SwanDiagram_request__w8pkT",
        encryptedRequest: "SwanDiagram_encryptedRequest__RP53H",
      };
    },
    61533: function (e) {
      e.exports = {
        container: "VitalDiagram_container__8LxAt",
        diagram: "VitalDiagram_diagram__i_PjE",
        description: "VitalDiagram_description__hVJ05",
        request: "VitalDiagram_request__vdxQa",
        encryptedRequest: "VitalDiagram_encryptedRequest__yRzCm",
      };
    },
    36050: function (e) {
      e.exports = {
        container: "Customers_container__BK2ur",
        heading: "Customers_heading__8vPBv",
      };
    },
    69919: function (e) {
      e.exports = {
        container: "GridSection_container__aD83r",
        joint: "GridSection_joint__3AfU7",
        bl: "GridSection_bl__6vURw",
        br: "GridSection_br__AUY5M",
        tl: "GridSection_tl__AnAX2",
        tr: "GridSection_tr__NMCvH",
      };
    },
    44613: function (e) {
      e.exports = {
        container: "CircularIndicator_container__xZoj_",
        loader: "CircularIndicator_loader__yHp6P",
        face: "CircularIndicator_face__3J9gy",
        animate: "CircularIndicator_animate__TUIxr",
      };
    },
    38329: function (e) {
      e.exports = {
        container: "Hero_container__YFQBO",
        modelWrapper: "Hero_modelWrapper__uzEBi",
        heroCopy: "Hero_heroCopy__sCR92",
        title: "Hero_title__11rLl",
        subTitle: "Hero_subTitle__uXPB0",
        helper: "Hero_helper__pUQ9d",
        scroll: "Hero_scroll__iQh0j",
        chevron: "Hero_chevron__mM1TF",
        glow: "Hero_glow__Ae_GH",
      };
    },
  },
  function (e) {
    e.O(0, [2918, 8764, 8921, 1044, 9774, 2888, 179], function () {
      return e((e.s = 74110));
    }),
      (_N_E = e.O());
  },
]);
