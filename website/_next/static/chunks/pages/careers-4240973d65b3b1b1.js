(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1698],
  {
    99687: function (e, t, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/careers",
        function () {
          return i(87061);
        },
      ]);
    },
    90218: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Hero;
        },
      });
      var n = i(85893),
        s = i(93296),
        o = i.n(s);
      function Hero(e) {
        let { title: t, subtitle: i, description: s } = e;
        return (0, n.jsx)("section", {
          className: o().hero,
          children: (0, n.jsx)("div", {
            className: "container",
            children: (0, n.jsx)(
              "div",
              {
                className: "row justify-content-center",
                children: (0, n.jsxs)("div", {
                  className: "col-12",
                  children: [
                    (0, n.jsx)("h1", { className: o().title, children: t }),
                    i &&
                      (0, n.jsx)("h3", {
                        className: o().subtitle,
                        children: i,
                      }),
                    s && s,
                  ],
                }),
              },
              t.split(" ").join("-").toLowerCase(),
            ),
          }),
        });
      }
    },
    39892: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return Layout;
        },
      });
      var n = i(85893),
        s = i(9008),
        o = i.n(s),
        r = i(4298),
        a = i.n(r),
        c = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        l = i(12034),
        h = i.n(l),
        d = i(41664),
        p = i.n(d);
      function Layout(e) {
        let {
          children: t,
          preview: i,
          title:
            s = "evervault — Developer building blocks for data security and compliance",
          description:
            r = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: l = "https://evervault.com/social/og.jpg",
          head: d,
          ...u
        } = e;
        return (0, n.jsxs)("div", {
          className: h().layout,
          ...u,
          children: [
            (0, n.jsxs)(o(), {
              children: [
                (0, n.jsx)("title", { children: s }),
                (0, n.jsx)("meta", { name: "description", content: r }),
                (0, n.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, user-scalable=no",
                }),
                (0, n.jsx)("meta", { name: "theme-color", content: "#63e" }),
                (0, n.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  href: "/favicon.png",
                }),
                (0, n.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: "/logo192.png",
                }),
                (0, n.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
                (0, n.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, n.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "true",
                }),
                (0, n.jsx)("meta", { property: "og:title", content: s }),
                (0, n.jsx)("meta", { property: "og:description", content: r }),
                (0, n.jsx)("meta", { property: "og:image", content: l }),
                (0, n.jsx)("meta", {
                  property: "og:site_name",
                  content: "evervault",
                }),
                (0, n.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, n.jsx)("meta", {
                  name: "twitter:site",
                  content: "@evervault",
                }),
                (0, n.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@evervault",
                }),
                (0, n.jsx)("meta", { name: "twitter:title", content: s }),
                (0, n.jsx)("meta", { name: "twitter:description", content: r }),
                (0, n.jsx)("meta", { name: "twitter:image", content: l }),
                (0, n.jsx)("meta", { name: "twitter:image:alt", content: s }),
                (0, n.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(c) },
                }),
                (0, n.jsx)(a(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                d,
              ],
            }),
            i &&
              (0, n.jsxs)("div", {
                className: h().preview,
                children: [
                  (0, n.jsx)("p", { children: "You are in preview mode" }),
                  (0, n.jsx)(p(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, n.jsx)("main", { className: h().main, children: t }),
          ],
        });
      }
    },
    87061: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          __N_SSG: function () {
            return j;
          },
          default: function () {
            return Careers;
          },
        });
      var n = i(85893),
        s = i(67294),
        o = i(60777),
        r = i(7417),
        a = i.n(r);
      function Benefits(e) {
        let { scrollToJobsListings: t } = e;
        return (0, n.jsxs)("div", {
          className: a().wrapper,
          children: [
            (0, n.jsxs)("div", {
              className: a().container,
              children: [
                (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsxs)("h2", {
                      children: [
                        "Support to do your ",
                        (0, n.jsx)("br", {}),
                        "best work",
                      ],
                    }),
                    (0, n.jsx)("p", {
                      children:
                        "We offer competitive and comprehensive benefits, although lots of companies can offer you those. We also have a rarer opportunity: the legacy you can impart on the world from being at a nimble startup, working on a product that operates at a significant (and quickly growing) scale.",
                    }),
                    (0, n.jsx)(o.Z, {
                      "data-type": "primary",
                      onClick: t,
                      children: "View open roles",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: a().benefits,
                  children: [
                    (0, n.jsx)("h4", {
                      className: "mb-8",
                      children: "Benefits",
                    }),
                    (0, n.jsxs)("ul", {
                      className: a().benefitsList,
                      children: [
                        (0, n.jsx)("li", {
                          children:
                            "Stock options (with extended exercise window)",
                        }),
                        (0, n.jsx)("li", { children: "Competitive salary" }),
                        (0, n.jsx)("li", { children: "Health insurance" }),
                        (0, n.jsx)("li", {
                          children:
                            "Unlimited vacation policy with recommended 25 day minimum",
                        }),
                        (0, n.jsx)("li", {
                          children: "Maternity and Paternity Cover",
                        }),
                        (0, n.jsx)("li", {
                          children: "Flexible working hours",
                        }),
                        (0, n.jsx)("li", {
                          children: "Catered lunch and dinner",
                        }),
                        (0, n.jsx)("li", { children: "Bike to Work Scheme" }),
                        (0, n.jsx)("li", {
                          children: "Tax Saver Travel Cards",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("img", {
              className: a().glow,
              src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGOSURBVHgBvVFLbhNBEH1V3T2emdg4AfxJFO9AoMkKxAFYI3Ens+YEnIMDsEKsWIDIbIgQigSWg+wIz3i+1d00YkMukFq9V6pXVa+K3rx8mw6UOo5EZd65pyB+WCTR8Nf9dH85H3/7OR1/Xs2HX7Ykq++fDkuNODYd9Ahwp6qRx8rSI80YcYOGOgzZ+XogcoWJuc4yVHprYo6I4oh5zK27y8RHda9HVZt0Ukd7bnnetxhzqaJqAta0SFyxIdhCgZRRYrXuxKimZG2v44SMSZXSJhoiDAX0x9msm63LPUlcoQ+1jfbOKvY9MwnMoGd15EPnBO59D6fx4dTWd1Y77v0Vi157RwsvKqjg2VEdwTcHrm8aBEcvguDsDHJ+botY4gtj6R6YOjaYeGIVDrEN7Oug4PVBLu3yNRwBnrIsN8+OF6Owwwm1/kQRDsWSUoYqR3bVS3L5YJNuljl1GiCf5+im03e/n1w8r3aL3Y/wk8hJzZ2NJZn6tlynNfJXEjyDcCP8X07L/zIB+3+IPG4l/gCInrnOZomQAAAAAABJRU5ErkJggg==",
            }),
          ],
        });
      }
      var c = i(90218),
        l = i(39892),
        h = i(29853),
        d = i.n(h);
      function LifeAtEvervault() {
        return (0, n.jsxs)("div", {
          className: d().container,
          children: [
            (0, n.jsxs)("div", {
              className: d().introduction,
              children: [
                (0, n.jsx)("h2", {
                  className: "mb-12",
                  children: "Life at evervault",
                }),
                (0, n.jsxs)("p", {
                  children: [
                    "We will hire hundreds of people who read this. We cannot possibly succeed in encrypting the web without doing so. We would be thrilled if you had questions about opportunities or just wanted to chat to explore options. Don’t worry too much about picking exactly the right job; we can always give you more options after starting the conversation.",
                    " ",
                    (0, n.jsx)("b", {
                      children:
                        "Our recruiting philosophy is that we hire people; not roles.",
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className: d().content,
              children: [
                (0, n.jsx)("h3", {
                  className: "mb-12",
                  children: "Our People",
                }),
                (0, n.jsx)("p", {
                  children:
                    "The evervault team come from a range of backgrounds. While some have come from big tech companies like AWS, Stripe, and Zendesk; many others have come from less-obvious backgrounds. Some of our team joined straight out of college, others had started their own companies. Outside work, some of us mountain-bike, climb, swim, busk, write, do standup comedy, teach Bollywood-inspired fitness classes, and edit maths books.",
                }),
                (0, n.jsx)("h3", {
                  className: "mb-12",
                  children: "Where we work",
                }),
                (0, n.jsx)("p", {
                  children:
                    "We see the office as a centre of gravity. While you can work-from-home whenever you need; we think creative magic comes from in-person interactions. We believe being in the same physical space is key to building a lasting culture. (This philosophy will likely develop over time to become more remote-friendly.)",
                }),
                (0, n.jsx)("p", {
                  children:
                    "With that office-centricity; we’ve designed our Dublin office to have a room for every mood. If you’re heads-down on a deadline, head to our library or focus room. Want that coffee shop vibe? Make yourself a flat white on our barista-grade espresso machine and pull up a chair at one of our long tables. It’s a cosy, well-designed space located in the heart of Dublin city: a perfect launchpad to head out after work; or grab some groceries before heading home to the family.",
                }),
              ],
            }),
          ],
        });
      }
      var p = i(74156),
        u = i.n(p);
      function Mission() {
        return (0, n.jsx)("section", {
          className: u().wrapper,
          children: (0, n.jsxs)("div", {
            className: "container",
            children: [
              (0, n.jsx)("h2", { children: "Our mission" }),
              (0, n.jsxs)("div", {
                className: u().paragraphs,
                children: [
                  (0, n.jsxs)("p", {
                    children: [
                      "Our mission is to ",
                      (0, n.jsx)("b", { children: "encrypt the web" }),
                      ". Large-scale data breaches are unfortunately an increasingly regular occurrence, and not a week goes by without a data breach. Just under",
                      " ",
                      (0, n.jsx)("a", {
                        href: "https://businesswire.com/news/home/20200603005175/en/Ermetic-Reports-80-Companies-Experienced-Cloud-Data",
                        children:
                          "80% of companies experienced a cloud data breach in the past 18 months",
                      }),
                      " ",
                      "and nearly half reported 10 or more breaches.",
                    ],
                  }),
                  (0, n.jsx)("p", {
                    children:
                      "The important part about data breaches isn’t that they happen; it’s difficult to predict and prevent all attacks & breaches. What’s important is that what gets breached is plaintext, readable data. evervault exists to solve this — by making it easy for developers to encrypt all data on the web.",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var m = i(92520),
        g = i(55541),
        v = i.n(g);
      function Testimonial(e) {
        let { quote: t, author: i, image: s } = e;
        return (0, n.jsx)("div", {
          className: v().testimonial,
          children: (0, n.jsx)("div", {
            className: v().container,
            children: (0, n.jsxs)(m.E.div, {
              initial: "hidden",
              whileInView: "visible",
              transition: { duration: 0.8 },
              viewport: { once: !0 },
              variants: { visible: { opacity: 1 }, hidden: { opacity: 0 } },
              children: [
                (0, n.jsx)("h4", { className: v().quote, children: t }),
                (0, n.jsx)("h4", { children: i }),
                s,
              ],
            }),
          }),
        });
      }
      var x = i(95137),
        f = i.n(x);
      function WhyChooseEvervault() {
        return (0, n.jsx)("section", {
          className: f().wrapper,
          children: (0, n.jsxs)("div", {
            className: f().container,
            children: [
              (0, n.jsxs)("div", {
                className: f().heading,
                children: [
                  (0, n.jsx)("h2", {
                    className: "mb-12",
                    children: "Why choose evervault?",
                  }),
                  (0, n.jsx)("p", {
                    children:
                      "We’re growing quickly; but hiring deliberately. We hire people; not just roles. We look for aptitude, compounded by attitude. We want people to do their best work at evervault.",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: f().paragraphs,
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("img", { src: "/images/jobs-benefit-1.svg" }),
                      (0, n.jsx)("h4", {
                        className: "mb-0",
                        children: "Work on big problems",
                      }),
                      (0, n.jsxs)("p", {
                        className: "mb-40",
                        children: [
                          "The internet is broken. Data privacy is ignored or solved by cookie preference pop-ups. Imagine a world without data breaches and never having to check ",
                          (0, n.jsx)("a", {
                            href: "https://haveibeenpwned.com",
                            children: "haveibeenpwned.com",
                          }),
                          " again.",
                        ],
                      }),
                      (0, n.jsx)("img", { src: "/images/jobs-benefit-2.svg" }),
                      (0, n.jsx)("h4", {
                        className: "mb-0",
                        children: "Build for the builder",
                      }),
                      (0, n.jsx)("p", {
                        className: "mb-0",
                        children:
                          "We shape our tools, and thereafter our tools shape us. We think that creating the tools which empower the next generation of builders is one of the most powerful things to be working on. It is a legacy that all of us at evervault will be proud of in years to come.",
                      }),
                    ],
                  }),
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("img", { src: "/images/jobs-benefit-3.svg" }),
                      (0, n.jsx)("h4", {
                        className: "mb-0",
                        children: "Goldilocks opportunity",
                      }),
                      (0, n.jsx)("p", {
                        className: "mb-0",
                        children:
                          "evervault offers an exciting middle ground between joining a tiny, high-risk startup and going to work for an established company. You get the ownership and opportunity of getting in early; but with a roster of customers who care deeply about our product, and an existing team of dedicated builders. Our proposition: get the experience of building a startup from the ground up, with a solid funding bedrock and a huge scale of opportunity.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var w = i(8623),
        y = i.n(w),
        j = !0;
      function Careers() {
        let e = (0, s.useRef)(),
          scrollToJobsListings = () => {
            e.current.scrollIntoView();
          };
        return (0, n.jsxs)(l.Z, {
          title: "Careers — evervault",
          description:
            "We’re recruiting engineers and designers to help us encrypt the web.",
          children: [
            (0, n.jsx)(c.Z, {
              title: "Help us encrypt the web",
              description: (0, n.jsx)("div", {
                className: y().buttonContainer,
                children: (0, n.jsx)(o.Z, {
                  "data-type": "primary",
                  onClick: scrollToJobsListings,
                  children: "View open roles",
                }),
              }),
              glow: !0,
            }),
            (0, n.jsx)(Mission, {}),
            (0, n.jsx)(Testimonial, {
              quote:
                "“Dance like no one is watching; encrypt like everyone is. Encrypt everything.”",
              author: "Werner Vogels, Amazon CTO",
              image: (0, n.jsx)("img", {
                src: "/images/amazon.svg",
                style: { width: "var(--token-48" },
              }),
            }),
            (0, n.jsx)(WhyChooseEvervault, {}),
            (0, n.jsx)(LifeAtEvervault, {}),
            (0, n.jsx)(Benefits, {
              scrollToJobsListings: scrollToJobsListings,
            }),
            (0, n.jsx)("div", {
              id: "ashby_embed",
              className: "py-64",
              ref: e,
            }),
          ],
        });
      }
    },
    7417: function (e) {
      e.exports = {
        wrapper: "Benefits_wrapper__mVz_2",
        container: "Benefits_container__IwLXu container",
        benefits: "Benefits_benefits__hjZcc",
        benefitsList: "Benefits_benefitsList__8FrtM",
        glow: "Benefits_glow__2YZJj",
      };
    },
    8623: function (e) {
      e.exports = { buttonContainer: "Careers_buttonContainer__41Wfy" };
    },
    29853: function (e) {
      e.exports = {
        container: "LifeAtEvervault_container__kNDJs container",
        introduction: "LifeAtEvervault_introduction__yIRGm",
      };
    },
    74156: function (e) {
      e.exports = {
        wrapper: "Mission_wrapper__z20h9",
        paragraphs: "Mission_paragraphs__Qls11",
      };
    },
    95137: function (e) {
      e.exports = {
        wrapper: "WhyChooseEvervault_wrapper__ZGTK8",
        container: "WhyChooseEvervault_container__n9Ed_ container",
        heading: "WhyChooseEvervault_heading__a3d3e",
        paragraphs: "WhyChooseEvervault_paragraphs__HqVJ1",
      };
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
    55541: function (e) {
      e.exports = {
        testimonial: "Testimonial_testimonial__jbMgs",
        container: "Testimonial_container__y8YsS container",
        quote: "Testimonial_quote__GbMRg",
        image: "Testimonial_image__U8y9Y",
      };
    },
    9008: function (e, t, i) {
      e.exports = i(79201);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 99687));
    }),
      (_N_E = e.O());
  },
]);
