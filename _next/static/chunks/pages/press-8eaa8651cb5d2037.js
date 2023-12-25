(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8313],
  {
    38923: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/press",
        function () {
          return t(23566);
        },
      ]);
    },
    90218: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return Hero;
        },
      });
      var a = t(85893),
        n = t(93296),
        r = t.n(n);
      function Hero(e) {
        let { title: s, subtitle: t, description: n } = e;
        return (0, a.jsx)("section", {
          className: r().hero,
          children: (0, a.jsx)("div", {
            className: "container",
            children: (0, a.jsx)(
              "div",
              {
                className: "row justify-content-center",
                children: (0, a.jsxs)("div", {
                  className: "col-12",
                  children: [
                    (0, a.jsx)("h1", { className: r().title, children: s }),
                    t &&
                      (0, a.jsx)("h3", {
                        className: r().subtitle,
                        children: t,
                      }),
                    n && n,
                  ],
                }),
              },
              s.split(" ").join("-").toLowerCase(),
            ),
          }),
        });
      }
    },
    39892: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return Layout;
        },
      });
      var a = t(85893),
        n = t(9008),
        r = t.n(n),
        i = t(4298),
        o = t.n(i),
        c = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        l = t(12034),
        m = t.n(l),
        d = t(41664),
        h = t.n(d);
      function Layout(e) {
        let {
          children: s,
          preview: t,
          title:
            n = "evervault — Developer building blocks for data security and compliance",
          description:
            i = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: l = "https://evervault.com/social/og.jpg",
          head: d,
          ...u
        } = e;
        return (0, a.jsxs)("div", {
          className: m().layout,
          ...u,
          children: [
            (0, a.jsxs)(r(), {
              children: [
                (0, a.jsx)("title", { children: n }),
                (0, a.jsx)("meta", { name: "description", content: i }),
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
                (0, a.jsx)("meta", { property: "og:title", content: n }),
                (0, a.jsx)("meta", { property: "og:description", content: i }),
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
                (0, a.jsx)("meta", { name: "twitter:title", content: n }),
                (0, a.jsx)("meta", { name: "twitter:description", content: i }),
                (0, a.jsx)("meta", { name: "twitter:image", content: l }),
                (0, a.jsx)("meta", { name: "twitter:image:alt", content: n }),
                (0, a.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(c) },
                }),
                (0, a.jsx)(o(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                d,
              ],
            }),
            t &&
              (0, a.jsxs)("div", {
                className: m().preview,
                children: [
                  (0, a.jsx)("p", { children: "You are in preview mode" }),
                  (0, a.jsx)(h(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, a.jsx)("main", { className: m().main, children: s }),
          ],
        });
      }
    },
    23566: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          default: function () {
            return Press;
          },
        });
      var a = t(85893),
        n = t(47133),
        r = t.n(n);
      function About() {
        return (0, a.jsxs)("div", {
          className: r().container,
          children: [
            (0, a.jsx)("h2", {
              className: "mb-12",
              children: "About evervault",
            }),
            (0, a.jsx)("p", {
              className: "mb-0",
              children:
                "evervault is a data encryption company enabling developers to put security first without disrupting their existing workflows. evervault provides the tools developers need to build encrypted apps, in which data stays encrypted at all times, yet can still be processed and shared. evervault never stores data and developers never configure crypto algorithms or manage keys. Founded in 2019, the company is headquartered in Dublin, Ireland.",
            }),
          ],
        });
      }
      var i = t(90218),
        o = t(39892);
      t(67294);
      let c = [
        {
          logo: "/images/logos/the-business-post.svg",
          link: "https://www.businesspost.ie/tech/evervault-to-treble-its-staff-count-in-next-year-68530b28",
        },
        {
          logo: "/images/logos/fast-company.svg",
          link: "https://www.fastcompany.com/90724466/most-innovative-companies-security-2022",
        },
        {
          logo: "/images/logos/techcrunch.svg",
          link: "https://techcrunch.com/2021/08/18/evervaults-encryption-as-a-service-is-now-open-access/",
        },
        {
          logo: "/images/logos/wired.svg",
          link: "https://www.wired.com/sponsored/story/aws-ec2-evervault/",
        },
        {
          logo: "/images/logos/coindesk.svg",
          link: "https://www.coindesk.com/business/2022/02/16/encryption-firm-evervault-launches-service-to-protect-crypto-seed-phrases/",
        },
      ];
      var l = t(46063),
        m = t.n(l);
      function Logos() {
        return (0, a.jsx)("div", {
          className: m().container,
          children: (0, a.jsx)("div", {
            className: m().logos,
            children: c.map((e) => {
              let { logo: s, link: t } = e;
              return (0, a.jsx)(
                "a",
                {
                  href: t,
                  target: "_blank",
                  children: (0, a.jsx)("img", { src: s }, s),
                },
                s,
              );
            }),
          }),
        });
      }
      var d = t(28092),
        h = t.n(d);
      function Resources() {
        return (0, a.jsxs)("div", {
          className: h().container,
          children: [
            (0, a.jsx)("h3", { children: "Press Resources" }),
            (0, a.jsxs)("div", {
              className: h().links,
              children: [
                (0, a.jsx)("a", {
                  href: "https://drive.google.com/drive/u/0/folders/1SRHnT_wDKC8ytZnwWCdpgfDTYRsErSew",
                  className: h().link,
                  target: "_blank",
                  children: (0, a.jsx)("h5", {
                    className: "mb-0",
                    children: "Download team photos →",
                  }),
                }),
                (0, a.jsx)("a", {
                  href: "https://drive.google.com/drive/folders/16pVdhe_HlaCIIpkhTQmPX45ffI_b0GOk",
                  className: h().link,
                  target: "_blank",
                  children: (0, a.jsx)("h5", {
                    className: "mb-0",
                    children: "Download brand assets →",
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: h().otherLinks,
              children: [
                (0, a.jsx)("h5", {
                  className: "mb-0",
                  children: "Press Contact",
                }),
                (0, a.jsx)("a", {
                  href: "mailto:press@evervault.com",
                  children: (0, a.jsx)("p", {
                    className: "mb-40",
                    children: "press@evervault.com",
                  }),
                }),
                (0, a.jsx)("h5", {
                  className: "mb-0",
                  children: "Social Profiles",
                }),
                (0, a.jsxs)("div", {
                  className: h().socialLinks,
                  children: [
                    (0, a.jsx)("a", {
                      href: "https://twitter.com/evervault",
                      target: "_blank",
                      children: (0, a.jsx)("span", {
                        className: h().socialLink,
                        children: (0, a.jsx)("img", {
                          src: "/images/twitter.svg",
                        }),
                      }),
                    }),
                    (0, a.jsx)("a", {
                      href: "https://www.linkedin.com/company/evervault",
                      target: "_blank",
                      children: (0, a.jsx)("span", {
                        className: h().socialLink,
                        children: (0, a.jsx)("img", {
                          src: "/images/linkedin.svg",
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var u = t(931),
        p = t.n(u);
      function Team() {
        return (0, a.jsxs)("div", {
          className: p().container,
          children: [
            (0, a.jsx)("h3", { children: "Team" }),
            (0, a.jsxs)("div", {
              className: p().team,
              children: [
                (0, a.jsxs)("div", {
                  className: p().teamMember,
                  children: [
                    (0, a.jsx)("div", {
                      className: p().imageContainer,
                      children: (0, a.jsx)("img", { src: "/shane-curran.jpg" }),
                    }),
                    (0, a.jsx)("h4", {
                      className: "mb-8",
                      children: "Shane Curran",
                    }),
                    (0, a.jsx)("h5", {
                      className: "mb-8",
                      children: "CEO and Founder",
                    }),
                    (0, a.jsx)("p", {
                      className: "mb-8",
                      children:
                        "Shane founded evervault in 2019 after working as the head of encryption at MyWallSt. He’s also a Thiel Fellow as well as a scout at Sequoia Capital.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: p().teamMember,
                  children: [
                    (0, a.jsx)("div", {
                      className: p().imageContainer,
                      children: (0, a.jsx)("img", { src: "/ben-butler.jpg" }),
                    }),
                    (0, a.jsx)("h4", {
                      className: "mb-8",
                      children: "Ben Butler",
                    }),
                    (0, a.jsx)("h5", {
                      className: "mb-8",
                      children: "Head of Operations",
                    }),
                    (0, a.jsx)("p", {
                      className: "mb-8",
                      children:
                        "Ben joined evervault in 2021 after working at Stripe for more than five years, including for almost two years in Stripe’s Seattle office.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: p().teamMember,
                  children: [
                    (0, a.jsx)("h4", {
                      className: "mb-8",
                      children: "Phil Watson",
                    }),
                    (0, a.jsx)("h5", {
                      className: "mb-8",
                      children: "Head of Sales",
                    }),
                    (0, a.jsx)("p", {
                      className: "mb-8",
                      children:
                        "Phil leads evervault’s sales team. He joined evervault from Slack, where he was the regional vice president of mid market sales in EMEA. He previously worked in sales at LinkedIn for more than five years.",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: p().teamMember,
                  children: [
                    (0, a.jsx)("h4", {
                      className: "mb-8",
                      children: "John Hetherton",
                    }),
                    (0, a.jsx)("h5", {
                      className: "mb-8",
                      children: "Head of Compliance",
                    }),
                    (0, a.jsx)("p", {
                      className: "mb-8",
                      children:
                        "John leads evervault’s compliance division. He worked as the global practice lead of PCI-DSS at BSI and previously worked at AIB for more than five years.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var v = t(75884),
        x = t.n(v);
      function Press() {
        return (0, a.jsxs)(o.Z, {
          title: "Press — evervault",
          description:
            "Learn about evervault and get access to press resources",
          children: [
            (0, a.jsx)(i.Z, {
              subtitle:
                "Learn about evervault and get access to press resources",
              title: "Press",
            }),
            (0, a.jsx)("div", { className: x().divider }),
            (0, a.jsx)(About, {}),
            (0, a.jsx)(Logos, {}),
            (0, a.jsx)(Resources, {}),
            (0, a.jsx)("div", { className: x().divider }),
            (0, a.jsx)(Team, {}),
            (0, a.jsx)("div", { className: x().divider }),
          ],
        });
      }
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
    47133: function (e) {
      e.exports = { container: "About_container__9kD7k container" };
    },
    46063: function (e) {
      e.exports = {
        container: "Logos_container__4tbrl",
        logos: "Logos_logos__Bw2QV container",
      };
    },
    75884: function (e) {
      e.exports = { divider: "Press_divider__MLOym" };
    },
    28092: function (e) {
      e.exports = {
        container: "Resources_container__ZbY_s container",
        links: "Resources_links__MYvSo",
        link: "Resources_link__AvlGN",
        socialLinks: "Resources_socialLinks__DCudY",
        images: "Resources_images__HbDg4",
        image: "Resources_image__wPGQ5",
        otherLinks: "Resources_otherLinks__BQx6N",
        socialLink: "Resources_socialLink__ym_6K",
      };
    },
    931: function (e) {
      e.exports = {
        container: "Team_container__PgN4n container",
        team: "Team_team__aOZV2",
        imageContainer: "Team_imageContainer__15SHU",
      };
    },
    9008: function (e, s, t) {
      e.exports = t(79201);
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 38923));
    }),
      (_N_E = e.O());
  },
]);
