(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9068],
  {
    3144: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/solutions/encryption-as-a-service",
        function () {
          return n(76891);
        },
      ]);
    },
    62811: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return HeroBreadcrumb;
        },
      });
      var a = n(85893),
        i = n(70184),
        r = n.n(i);
      function HeroBreadcrumb(e) {
        let { parent: t, child: n } = e;
        return (0, a.jsxs)("div", {
          className: r().container,
          children: [
            (0, a.jsx)("div", { className: r().parent, children: t }),
            (0, a.jsx)("div", { className: r().divider }),
            (0, a.jsx)("div", { className: r().child, children: n }),
          ],
        });
      }
    },
    55578: function (e, t, n) {
      "use strict";
      n.d(t, {
        Q: function () {
          return EncryptDiagram;
        },
      });
      var a = n(85893);
      n(50618), n(29405);
      var i = n(92628),
        r = n.n(i),
        s = n(56190),
        l = n(77387),
        o = n(92520);
      n(67294);
      var q = n(3965);
      let c = /^(.*\:\s")(.*)(\".*)$/;
      function randomChar() {
        let e =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return e[Math.floor(Math.random() * e.length)];
      }
      function EncryptedText(e) {
        let { value: t } = e,
          n = (0, q.s)();
        if (!n) return null;
        let i = t
            .split("")
            .map((e, t) =>
              (0, a.jsx)(
                o.E.span,
                {
                  animate: { opacity: [1, 0] },
                  transition: {
                    duration: 0.2,
                    delay: 0.04 * t,
                    repeat: 1 / 0,
                    repeatDelay: 3,
                    repeatType: "mirror",
                  },
                  children: e,
                },
                t,
              ),
            ),
          s = [
            "e",
            "v",
            ":",
            ...Array(t.length - 3)
              .fill(0)
              .map(randomChar),
          ].map((e, t) =>
            (0, a.jsx)(
              o.E.span,
              {
                animate: { opacity: [0, 1] },
                transition: {
                  duration: 0.2,
                  delay: 0.04 * t,
                  repeat: 1 / 0,
                  repeatDelay: 3,
                  repeatType: "mirror",
                },
                children: e,
              },
              t,
            ),
          );
        return (0, a.jsxs)("span", {
          className: r().value,
          children: [
            i,
            (0, a.jsx)("span", { className: r().encryptedValue, children: s }),
          ],
        });
      }
      function EncryptDiagram() {
        let e =
          '{\n  "id": "550e8400-e29b",\n  "name": "Thomas Cullen",\n  "telephone": "+353 1 234 5678",\n  "address": {\n    "street": "123 Fake Street",\n    "city": "Dublin",\n    "country": "Ireland",\n  }\n}'
            .split("\n")
            .map((e, t) => {
              let n = e.split(c),
                i = e.match(c);
              return i
                ? (0, a.jsxs)(
                    "div",
                    {
                      className: r().line,
                      children: [
                        i[1],
                        (0, a.jsx)(EncryptedText, { value: i[2] }),
                        n[3],
                      ],
                    },
                    t,
                  )
                : (0, a.jsx)("div", { className: r().line, children: e }, t);
            });
        return (0, a.jsxs)("div", {
          className: r().codeFrame,
          children: [
            (0, a.jsx)(o.E.div, {
              className: r().highlight,
              animate: { y: [21, 0] },
              transition: {
                duration: 0.2,
                repeat: 1 / 0,
                repeatType: "mirror",
                repeatDelay: 3,
              },
            }),
            (0, a.jsx)("div", {
              className: r().payload,
              children: (0, a.jsx)("pre", { children: e }),
            }),
            (0, a.jsx)("div", {
              className: r().code,
              children: (0, a.jsx)(s.Z, {
                language: "javascript",
                style: l.Z,
                showLineNumbers: !0,
                wrapLines: !0,
                customStyle: { background: "transparent" },
                children:
                  'const data = {...}\nconst evervault = new evervault("TEAM", "APP")\nconst encrypted = await evervault.encrypt(data);\nconst decrypted = await evervault.decrypt(data);',
              }),
            }),
          ],
        });
      }
    },
    83106: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return ProcessDiagram;
        },
      });
      var a = n(85893),
        i = n(92520),
        r = n(50618),
        s = n(29405),
        l = n(25358),
        o = n(28101),
        q = n(92628),
        c = n.n(q);
      function ProcessDiagram() {
        let e = (0, r.Z)("(min-width: 768px)");
        return (0, a.jsxs)(s.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, a.jsxs)(s.S.Nodes, {
              children: [
                (0, a.jsx)(s.S.Group, {
                  children: (0, a.jsx)(s.S.Node, {
                    id: "server",
                    children: (0, a.jsx)(s.S.Service, {
                      payload: {
                        key: "phone",
                        value: "ev:Tk9D",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, a.jsx)(s.S.Group, {
                  children: (0, a.jsxs)("div", {
                    className: c().functions,
                    children: [
                      (0, a.jsx)(i.E.div, {
                        className: c().functionCall,
                        transition: {
                          duration: 1,
                          delay: 1.5,
                          repeatDelay: 3,
                          repeat: 1 / 0,
                        },
                        animate: {
                          y: [20, 0, 0, 0],
                          opacity: [0, 1, 1, 0],
                          rotate: [0, 0, 360, 360],
                          scale: [0.6, 1, 1, 0.6],
                        },
                        children: (0, a.jsx)(l.Z, {}),
                      }),
                      (0, a.jsx)(s.S.Node, {
                        id: "functions",
                        children: (0, a.jsx)(s.S.Service, {
                          icon: (0, a.jsx)(o.Z, {}),
                          glow: !0,
                          children: "Functions",
                        }),
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(s.S.Group, {
                  children: (0, a.jsx)(s.S.Node, {
                    id: "api",
                    children: (0, a.jsx)(s.S.Service, {
                      payload: { key: "isValid", value: "true" },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(s.S.Connection, {
              nodes: ["server", "functions"],
              children: (0, a.jsx)(s.S.Request, {
                delay: 0,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeIn",
              }),
            }),
            (0, a.jsx)(s.S.Connection, {
              nodes: ["functions", "api"],
              children: (0, a.jsx)(s.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 2.5,
                ease: "easeOut",
                delay: 3,
              }),
            }),
          ],
        });
      }
    },
    45509: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return RelayDiagram;
        },
      });
      var a = n(85893),
        i = n(50618),
        r = n(29405),
        s = n(41962),
        l = n(67338);
      function RelayDiagram() {
        let e = (0, i.Z)("(min-width: 768px)");
        return (0, a.jsxs)(r.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, a.jsxs)(r.S.Nodes, {
              children: [
                (0, a.jsx)(r.S.Group, {
                  children: (0, a.jsx)(r.S.Node, {
                    id: "client",
                    children: (0, a.jsx)(r.S.Service, {
                      icon: (0, a.jsx)(s.Z, {}),
                      payload: { key: "name", value: "Thomas" },
                      children: "Client",
                    }),
                  }),
                }),
                (0, a.jsx)(r.S.Group, {
                  children: (0, a.jsx)(r.S.Node, {
                    id: "relay",
                    children: (0, a.jsx)(r.S.Service, {
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, a.jsx)(r.S.Group, {
                  children: (0, a.jsx)(r.S.Node, {
                    id: "server",
                    children: (0, a.jsx)(r.S.Service, {
                      icon: (0, a.jsx)(l.Z, {}),
                      payload: {
                        key: "name",
                        value: "ev:TkDnO",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(r.S.Connection, {
              nodes: ["client", "relay"],
              children: (0, a.jsx)(r.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, a.jsx)(r.S.Connection, {
              nodes: ["relay", "server"],
              children: (0, a.jsx)(r.S.Request, {
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
    },
    87626: function (e, t, n) {
      "use strict";
      n.d(t, {
        p: function () {
          return ShareDiagram;
        },
      });
      var a = n(85893),
        i = n(50618),
        r = n(29405),
        s = n(33587);
      function ShareDiagram() {
        let e = (0, i.Z)("(min-width: 768px)");
        return (0, a.jsxs)(r.S, {
          direction: e ? "horizontal" : "vertical",
          children: [
            (0, a.jsxs)(r.S.Nodes, {
              children: [
                (0, a.jsx)(r.S.Group, {
                  children: (0, a.jsx)(r.S.Node, {
                    id: "file",
                    children: (0, a.jsx)(r.S.Service, {
                      icon: (0, a.jsx)(s.Z, {}),
                      payload: {
                        key: "name",
                        value: "ev:TkDnO",
                        highlight: !0,
                      },
                      children: "Server",
                    }),
                  }),
                }),
                (0, a.jsx)(r.S.Group, {
                  children: (0, a.jsx)(r.S.Node, {
                    id: "relay",
                    children: (0, a.jsx)(r.S.Service, {
                      glow: !0,
                      children: "Relay",
                    }),
                  }),
                }),
                (0, a.jsx)(r.S.Group, {
                  children: (0, a.jsx)(r.S.Node, {
                    id: "thirdparty",
                    children: (0, a.jsx)(r.S.Service, {
                      payload: { key: "name", value: "Thomas" },
                      children: "Third Party API",
                    }),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(r.S.Connection, {
              nodes: ["file", "relay"],
              children: (0, a.jsx)(r.S.Request, {
                encrypted: !0,
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeIn",
              }),
            }),
            (0, a.jsx)(r.S.Connection, {
              nodes: ["relay", "thirdparty"],
              children: (0, a.jsx)(r.S.Request, {
                duration: 1.5,
                repeatDelay: 1.5,
                ease: "easeOut",
                delay: 1.5,
              }),
            }),
          ],
        });
      }
    },
    76891: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return EncryptionAsAService;
          },
        });
      var a,
        i = n(85893),
        r = n(91693),
        s = n(39892),
        l = n(62654),
        o = n(32494),
        q = n(61609),
        c = n(74098),
        d = n(60777),
        m = n(40173),
        u = n.n(m),
        p = n(67294),
        h = n(3965),
        x = n(208),
        v = n.n(x);
      let y = "MENU",
        f = "PLAYING",
        _ = "GAME_OVER",
        j = (0, p.createContext)(),
        useGame = () => (0, p.useContext)(j),
        g = (0, p.createRef)(0),
        useGameState = () => {
          let e = (function () {
              let e = (0, p.useRef)({
                up: !1,
                down: !1,
                left: !1,
                right: !1,
                shoot: !1,
                shift: !1,
              });
              return (
                (0, p.useEffect)(() => {
                  let handleKeyDown = (t) => {
                      "Shift" === t.key &&
                        (t.preventDefault(), (e.current.shift = !0)),
                        ["ArrowUp", "w", "W"].includes(t.key) &&
                          (t.preventDefault(), (e.current.up = !0)),
                        ["ArrowDown", "s", "S"].includes(t.key) &&
                          (t.preventDefault(), (e.current.down = !0)),
                        ["ArrowLeft", "a", "A"].includes(t.key) &&
                          (t.preventDefault(), (e.current.left = !0)),
                        ["ArrowRight", "d", "D"].includes(t.key) &&
                          (t.preventDefault(), (e.current.right = !0)),
                        [" "].includes(t.key) &&
                          (t.preventDefault(), (e.current.shoot = !0));
                    },
                    handleKeyUp = (t) => {
                      "Shift" === t.key &&
                        (t.preventDefault(), (e.current.shift = !1)),
                        ["ArrowUp", "w", "W"].includes(t.key) &&
                          (t.preventDefault(), (e.current.up = !1)),
                        ["ArrowDown", "s", "S"].includes(t.key) &&
                          (t.preventDefault(), (e.current.down = !1)),
                        ["ArrowLeft", "a", "A"].includes(t.key) &&
                          (t.preventDefault(), (e.current.left = !1)),
                        ["ArrowRight", "d", "D"].includes(t.key) &&
                          (t.preventDefault(), (e.current.right = !1)),
                        [" "].includes(t.key) &&
                          (t.preventDefault(), (e.current.shoot = !1));
                    },
                    handleJoyStick = (t) => {
                      let { up: n, down: a, left: i, right: r } = t.detail;
                      (e.current.up = n),
                        (e.current.down = a),
                        (e.current.left = i),
                        (e.current.right = r);
                    },
                    handleCustomEvent = (t) => {
                      Object.keys(t.detail).forEach((n) => {
                        e.current[n] = t.detail[n];
                      });
                    };
                  return (
                    window.addEventListener("CONTROLS", handleCustomEvent),
                    window.addEventListener("JOYSTICK", handleJoyStick),
                    window.addEventListener("keydown", handleKeyDown),
                    window.addEventListener("keyup", handleKeyUp),
                    () => {
                      window.removeEventListener("CONTROLS", handleCustomEvent),
                        window.removeEventListener("JOYSTICK", handleJoyStick),
                        window.removeEventListener("keydown", handleKeyDown),
                        window.removeEventListener("keyup", handleKeyUp);
                    }
                  );
                }, []),
                e
              );
            })(),
            [t, n] = (0, p.useState)(0),
            [a, i] = (0, p.useState)(y),
            r = (0, p.useCallback)(() => {
              n(0), i(f), (g.current = 0);
            }, []);
          return (
            (0, p.useEffect)(() => {
              let handleBulletHit = () => {
                  n((e) => e + 10), (g.current += 1);
                },
                handleGameOver = () => {
                  i(_);
                };
              return (
                window.addEventListener("BULLET_HIT", handleBulletHit),
                window.addEventListener("GAME_OVER", handleGameOver),
                () => {
                  window.removeEventListener("BULLET_HIT", handleBulletHit),
                    window.removeEventListener("GAME_OVER", handleGameOver);
                }
              );
            }, []),
            {
              score: t,
              play: r,
              setScore: n,
              stage: a,
              setStage: i,
              controls: e,
            }
          );
        };
      var w = n(41766),
        E = n(15029),
        C = n(88849),
        b = n(99477),
        S = n(38715),
        k = n(69542);
      let N = new w.Howl({ src: ["/audio/pii/lazer.mp3"], volume: 3 });
      function Bullets() {
        let e = (0, p.useRef)(!1),
          { controls: t } = useGameState(),
          [n, a] = (0, p.useState)([]),
          shoot = () => {
            N.play();
            let e = en.current.position;
            (e.z = 0),
              a((t) => [
                ...t,
                { id: "".concat("bullet", "_").concat((0, k.DO)()), pos: e },
              ]);
          };
        return (
          (0, p.useEffect)(() => {
            let removeBullet = (e) => {
              let { detail: t } = e,
                { id: n } = t;
              a((e) => e.filter((e) => e.id !== n));
            };
            return (
              window.addEventListener("BULLET_HIT", removeBullet),
              window.addEventListener("REMOVE_BULLET", removeBullet),
              () => {
                window.removeEventListener("BULLET_HIT", removeBullet),
                  window.removeEventListener("REMOVE_BULLET", removeBullet);
              }
            );
          }, []),
          (0, S.A)(() => {
            e.current && t.current.shoot && (shoot(), (e.current = !1)),
              e.current || t.current.shoot || (e.current = !0);
          }),
          n.map((e) => (0, i.jsx)(Bullet, { id: e.id, position: e.pos }, e.id))
        );
      }
      function Bullet(e) {
        let { id: t, position: n } = e,
          a = (0, p.useRef)(),
          r = (0, p.useRef)(!0);
        return (
          (0, S.A)((e, t) => {
            if (!a.current || !r.current) return;
            let n = (0, C.R3)(a.current.translation());
            (n.x += 6 * t), a.current.setTranslation(n, !0);
          }),
          (0, i.jsx)(C.ib, {
            position: n,
            sensor: !0,
            ref: a,
            name: t,
            colliders: "cuboid",
            onIntersectionEnter: (e) => {
              let { other: n } = e;
              if (n.rigidBodyObject.name.startsWith("bounds")) {
                let e = new CustomEvent("REMOVE_BULLET", { detail: { id: t } });
                window.dispatchEvent(e);
              }
            },
            children: (0, i.jsxs)("mesh", {
              children: [
                (0, i.jsx)("boxGeometry", { args: [0.4, 0.06, 0.025] }),
                (0, i.jsx)("meshBasicMaterial", {
                  color: "white",
                  transparent: !0,
                }),
                (0, i.jsx)("shaderMaterial", {
                  transparent: !0,
                  vertexShader: P,
                  fragmentShader: L,
                  uniforms: { uColor: { value: new b.Color("#8C61FF") } },
                }),
              ],
            }),
          })
        );
      }
      let P =
          "\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n}\n",
        L =
          "\nuniform vec3 uColor;\nvarying vec2 vUv;\n\nvoid main() {\n  vec3 white = vec3(1.0);\n  vec3 color = mix(uColor, white, vUv.x - 0.1);\n  gl_FragColor = vec4(color, vUv.x);\n}\n";
      var M = JSON.parse(
          '{"glyphs":{"0":{"ha":556,"x_min":92,"x_max":464,"o":"m 353 722 q 347 667 353 690 l 208 667 q 203 722 203 690 q 208 778 203 756 l 347 778 q 353 722 353 756 m 208 222 q 214 167 214 200 q 208 111 214 135 l 139 111 q 133 167 133 135 q 139 222 133 200 l 97 222 q 92 278 92 246 q 97 333 92 311 q 92 389 92 357 q 97 444 92 422 q 92 500 92 468 q 97 556 92 533 l 139 556 q 133 611 133 579 q 139 667 133 644 l 208 667 q 214 611 214 644 q 208 556 214 579 q 214 500 214 533 q 208 444 214 468 q 214 389 214 422 q 208 333 214 357 q 214 278 214 311 q 208 222 214 246 m 458 444 q 464 389 464 422 q 458 333 464 357 q 464 278 464 311 q 458 222 464 246 l 417 222 q 422 167 422 200 q 417 111 422 135 l 347 111 q 342 167 342 135 q 347 222 342 200 q 342 278 342 246 q 347 333 342 311 q 342 389 342 357 q 347 444 342 422 q 342 500 342 468 q 347 556 342 533 q 342 611 342 579 q 347 667 342 644 l 417 667 q 422 611 422 644 q 417 556 422 579 l 458 556 q 464 500 464 533 q 458 444 464 468 m 203 56 q 208 111 203 89 l 347 111 q 353 56 353 89 q 347 0 353 24 l 208 0 q 203 56 203 24 z "},"1":{"ha":556,"x_min":106,"x_max":450,"o":"m 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 222 111 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 l 139 556 q 133 611 133 579 q 139 667 133 644 l 222 667 q 217 722 217 690 q 222 778 217 756 l 333 778 q 339 722 339 756 q 333 667 339 690 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 l 444 111 z "},"2":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 500 q 472 444 478 468 l 403 444 q 408 389 408 422 q 403 333 408 357 l 333 333 q 339 278 339 311 q 333 222 339 246 l 264 222 q 269 167 269 200 q 264 111 269 135 l 472 111 q 478 56 478 89 q 472 0 478 24 l 83 0 q 78 56 78 24 q 83 111 78 89 l 153 111 q 147 167 147 135 q 153 222 147 200 l 222 222 q 217 278 217 246 q 222 333 217 311 l 292 333 q 286 389 286 357 q 292 444 286 422 l 361 444 q 356 500 356 468 q 361 556 356 533 q 356 611 356 579 q 361 667 356 644 l 167 667 q 172 611 172 644 q 167 556 172 579 l 83 556 q 78 611 78 579 q 83 667 78 644 l 139 667 q 133 722 133 690 q 139 778 133 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 472 667 q 478 611 478 644 q 472 556 478 579 q 478 500 478 533 z "},"3":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 500 q 472 444 478 468 l 417 444 q 422 389 422 422 q 417 333 422 357 l 472 333 q 478 278 478 311 q 472 222 478 246 q 478 167 478 200 q 472 111 478 135 l 417 111 q 422 56 422 89 q 417 0 422 24 l 139 0 q 133 56 133 24 q 139 111 133 89 l 83 111 q 78 167 78 135 q 83 222 78 200 l 194 222 q 200 167 200 200 q 194 111 200 135 l 361 111 q 356 167 356 135 q 361 222 356 200 q 356 278 356 246 q 361 333 356 311 l 222 333 q 217 389 217 357 q 222 444 217 422 l 361 444 q 356 500 356 468 q 361 556 356 533 q 356 611 356 579 q 361 667 356 644 l 194 667 q 200 611 200 644 q 194 556 200 579 l 83 556 q 78 611 78 579 q 83 667 78 644 l 139 667 q 133 722 133 690 q 139 778 133 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 472 667 q 478 611 478 644 q 472 556 478 579 q 478 500 478 533 z "},"4":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 278 q 500 222 506 246 l 444 222 q 450 167 450 200 q 444 111 450 135 q 450 56 450 89 q 444 0 450 24 l 333 0 q 328 56 328 24 q 333 111 328 89 q 328 167 328 135 q 333 222 328 200 l 56 222 q 50 278 50 246 q 56 333 50 311 l 97 333 q 92 389 92 357 q 97 444 92 422 l 139 444 q 133 500 133 468 q 139 556 133 533 l 181 556 q 175 611 175 579 q 181 667 175 644 l 250 667 q 256 611 256 644 q 250 556 256 579 l 208 556 q 214 500 214 533 q 208 444 214 468 l 167 444 q 172 389 172 422 q 167 333 172 357 l 333 333 q 328 389 328 357 q 333 444 328 422 q 328 500 328 468 q 333 556 328 533 q 328 611 328 579 q 333 667 328 644 l 250 667 q 244 722 244 690 q 250 778 244 756 l 444 778 q 450 722 450 756 q 444 667 450 690 q 450 611 450 644 q 444 556 450 579 q 450 500 450 533 q 444 444 450 468 q 450 389 450 422 q 444 333 450 357 l 500 333 q 506 278 506 311 z "},"5":{"ha":556,"x_min":78,"x_max":506,"o":"m 200 500 q 194 444 200 468 l 236 444 q 242 389 242 422 q 236 333 242 357 l 83 333 q 78 389 78 357 q 83 444 78 422 q 78 500 78 468 q 83 556 78 533 q 78 611 78 579 q 83 667 78 644 q 78 722 78 690 q 83 778 78 756 l 458 778 q 464 722 464 756 q 458 667 464 690 l 194 667 q 200 611 200 644 q 194 556 200 579 q 200 500 200 533 m 506 278 q 500 222 506 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 139 0 q 133 56 133 24 q 139 111 133 89 l 83 111 q 78 167 78 135 q 83 222 78 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 347 111 q 342 167 342 135 q 347 222 342 200 l 389 222 q 383 278 383 246 q 389 333 383 311 l 347 333 q 342 389 342 357 q 347 444 342 422 l 236 444 q 231 500 231 468 q 236 556 231 533 l 389 556 q 394 500 394 533 q 389 444 394 468 l 458 444 q 464 389 464 422 q 458 333 464 357 l 500 333 q 506 278 506 311 z "},"6":{"ha":556,"x_min":71,"x_max":485,"o":"m 429 722 q 424 667 429 690 l 229 667 q 224 722 224 690 q 229 778 224 756 l 424 778 q 429 722 429 756 m 229 222 q 235 167 235 200 q 229 111 235 135 l 118 111 q 113 167 113 135 q 118 222 113 200 l 76 222 q 71 278 71 246 q 76 333 71 311 q 71 389 71 357 q 76 444 71 422 q 71 500 71 468 q 76 556 71 533 l 118 556 q 113 611 113 579 q 118 667 113 644 l 229 667 q 235 611 235 644 q 229 556 235 579 l 188 556 q 193 500 193 533 q 188 444 193 468 q 193 389 193 422 q 188 333 193 357 l 229 333 q 235 278 235 311 q 229 222 235 246 m 485 278 q 479 222 485 246 q 485 167 485 200 q 479 111 485 135 l 396 111 q 401 56 401 89 q 396 0 401 24 l 229 0 q 224 56 224 24 q 229 111 224 89 l 368 111 q 363 167 363 135 q 368 222 363 200 q 363 278 363 246 q 368 333 363 311 l 229 333 q 224 389 224 357 q 229 444 224 422 l 424 444 q 429 389 429 422 q 424 333 429 357 l 479 333 q 485 278 485 311 z "},"7":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 722 q 472 667 478 690 q 478 611 478 644 q 472 556 478 579 l 431 556 q 436 500 436 533 q 431 444 436 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 347 333 q 353 278 353 311 q 347 222 353 246 l 306 222 q 311 167 311 200 q 306 111 311 135 l 264 111 q 269 56 269 89 q 264 0 269 24 l 153 0 q 147 56 147 24 q 153 111 147 89 l 194 111 q 189 167 189 135 q 194 222 189 200 l 236 222 q 231 278 231 246 q 236 333 231 311 l 278 333 q 272 389 272 357 q 278 444 272 422 l 319 444 q 314 500 314 468 q 319 556 314 533 l 361 556 q 356 611 356 579 q 361 667 356 644 l 83 667 q 78 722 78 690 q 83 778 78 756 l 472 778 q 478 722 478 756 z "},"8":{"ha":556,"x_min":92,"x_max":464,"o":"m 464 500 q 458 444 464 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 458 333 q 464 278 464 311 q 458 222 464 246 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 97 111 q 92 167 92 135 q 97 222 92 200 q 92 278 92 246 q 97 333 92 311 l 167 333 q 161 389 161 357 q 167 444 161 422 l 97 444 q 92 500 92 468 q 97 556 92 533 q 92 611 92 579 q 97 667 92 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 458 667 q 464 611 464 644 q 458 556 464 579 q 464 500 464 533 m 347 444 q 342 500 342 468 q 347 556 342 533 q 342 611 342 579 q 347 667 342 644 l 208 667 q 214 611 214 644 q 208 556 214 579 q 214 500 214 533 q 208 444 214 468 l 347 444 m 347 222 q 342 278 342 246 q 347 333 342 311 l 208 333 q 214 278 214 311 q 208 222 214 246 q 214 167 214 200 q 208 111 214 135 l 347 111 q 342 167 342 135 q 347 222 342 200 z "},"9":{"ha":556,"x_min":71,"x_max":485,"o":"m 193 500 q 188 444 193 468 l 326 444 q 332 389 332 422 q 326 333 332 357 l 132 333 q 126 389 126 357 q 132 444 126 422 l 76 444 q 71 500 71 468 q 76 556 71 533 q 71 611 71 579 q 76 667 71 644 l 160 667 q 154 722 154 690 q 160 778 154 756 l 326 778 q 332 722 332 756 q 326 667 332 690 l 188 667 q 193 611 193 644 q 188 556 193 579 q 193 500 193 533 m 479 444 q 485 389 485 422 q 479 333 485 357 q 485 278 485 311 q 479 222 485 246 l 438 222 q 443 167 443 200 q 438 111 443 135 l 326 111 q 321 167 321 135 q 326 222 321 200 l 368 222 q 363 278 363 246 q 368 333 363 311 q 363 389 363 357 q 368 444 363 422 l 326 444 q 321 500 321 468 q 326 556 321 533 q 321 611 321 579 q 326 667 321 644 l 438 667 q 443 611 443 644 q 438 556 443 579 l 479 556 q 485 500 485 533 q 479 444 485 468 m 126 56 q 132 111 126 89 l 326 111 q 332 56 332 89 q 326 0 332 24 l 132 0 q 126 56 126 24 z "}," ":{"ha":556,"x_min":0,"x_max":0,"o":""},"A":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 167 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 l 167 222 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 l 97 222 q 92 278 92 246 q 97 333 92 311 q 92 389 92 357 q 97 444 92 422 l 125 444 q 119 500 119 468 q 125 556 119 533 l 167 556 q 161 611 161 579 q 167 667 161 644 l 194 667 q 189 722 189 690 q 194 778 189 756 l 361 778 q 367 722 367 756 q 361 667 367 690 l 389 667 q 394 611 394 644 q 389 556 394 579 l 431 556 q 436 500 436 533 q 431 444 436 468 l 458 444 q 464 389 464 422 q 458 333 464 357 q 464 278 464 311 q 458 222 464 246 l 500 222 q 506 167 506 200 m 347 333 q 342 389 342 357 q 347 444 342 422 l 319 444 q 314 500 314 468 q 319 556 314 533 l 236 556 q 242 500 242 533 q 236 444 242 468 l 208 444 q 214 389 214 422 q 208 333 214 357 l 347 333 z "},"B":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 500 q 500 444 506 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 500 333 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 m 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 389 444 m 389 222 q 383 278 383 246 q 389 333 383 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 389 111 q 383 167 383 135 q 389 222 383 200 z "},"C":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 222 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 111 111 q 106 167 106 135 q 111 222 106 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 111 556 q 106 611 106 579 q 111 667 106 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 222 667 q 228 611 228 644 q 222 556 228 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 222 222 q 228 167 228 200 q 222 111 228 135 l 389 111 q 383 167 383 135 q 389 222 383 200 l 500 222 z "},"D":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 444 222 q 450 167 450 200 q 444 111 450 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 444 667 q 450 611 450 644 q 444 556 450 579 l 500 556 q 506 500 506 533 q 500 444 506 468 m 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 333 556 q 328 611 328 579 q 333 667 328 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 333 111 q 328 167 328 135 q 333 222 328 200 l 389 222 z "},"E":{"ha":556,"x_min":106,"x_max":450,"o":"m 222 333 q 228 278 228 311 q 222 222 228 246 q 228 167 228 200 q 222 111 228 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 q 106 167 106 135 q 111 222 106 200 q 106 278 106 246 q 111 333 106 311 q 106 389 106 357 q 111 444 106 422 q 106 500 106 468 q 111 556 106 533 q 106 611 106 579 q 111 667 106 644 q 106 722 106 690 q 111 778 106 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 222 667 q 228 611 228 644 q 222 556 228 579 q 228 500 228 533 q 222 444 228 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 222 333 z "},"F":{"ha":556,"x_min":106,"x_max":450,"o":"m 444 444 q 450 389 450 422 q 444 333 450 357 l 222 333 q 228 278 228 311 q 222 222 228 246 q 228 167 228 200 q 222 111 228 135 q 228 56 228 89 q 222 0 228 24 l 111 0 q 106 56 106 24 q 111 111 106 89 q 106 167 106 135 q 111 222 106 200 q 106 278 106 246 q 111 333 106 311 q 106 389 106 357 q 111 444 106 422 q 106 500 106 468 q 111 556 106 533 q 106 611 106 579 q 111 667 106 644 q 106 722 106 690 q 111 778 106 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 222 667 q 228 611 228 644 q 222 556 228 579 q 228 500 228 533 q 222 444 228 468 l 444 444 z "},"G":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 111 111 q 106 167 106 135 q 111 222 106 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 111 556 q 106 611 106 579 q 111 667 106 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 222 667 q 228 611 228 644 q 222 556 228 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 222 222 q 228 167 228 200 q 222 111 228 135 l 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 306 333 q 300 389 300 357 q 306 444 300 422 l 500 444 z "},"H":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"I":{"ha":556,"x_min":133,"x_max":422,"o":"m 417 111 q 422 56 422 89 q 417 0 422 24 l 139 0 q 133 56 133 24 q 139 111 133 89 l 222 111 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 l 139 667 q 133 722 133 690 q 139 778 133 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 l 417 111 z "},"J":{"ha":556,"x_min":50,"x_max":478,"o":"m 478 722 q 472 667 478 690 l 389 667 q 394 611 394 644 q 389 556 394 579 q 394 500 394 533 q 389 444 394 468 q 394 389 394 422 q 389 333 394 357 q 394 278 394 311 q 389 222 394 246 q 394 167 394 200 q 389 111 394 135 l 333 111 q 339 56 339 89 q 333 0 339 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 278 111 q 272 167 272 135 q 278 222 272 200 q 272 278 272 246 q 278 333 272 311 q 272 389 272 357 q 278 444 272 422 q 272 500 272 468 q 278 556 272 533 q 272 611 272 579 q 278 667 272 644 l 194 667 q 189 722 189 690 q 194 778 189 756 l 472 778 q 478 722 478 756 z "},"K":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 347 111 q 342 167 342 135 q 347 222 342 200 l 264 222 q 258 278 258 246 q 264 333 258 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 264 444 q 258 500 258 468 q 264 556 258 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 389 667 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 375 556 q 381 500 381 533 q 375 444 381 468 l 306 444 q 311 389 311 422 q 306 333 311 357 l 375 333 q 381 278 381 311 q 375 222 381 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 500 111 z "},"L":{"ha":556,"x_min":106,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 111 0 q 106 56 106 24 q 111 111 106 89 q 106 167 106 135 q 111 222 106 200 q 106 278 106 246 q 111 333 106 311 q 106 389 106 357 q 111 444 106 422 q 106 500 106 468 q 111 556 106 533 q 106 611 106 579 q 111 667 106 644 q 106 722 106 690 q 111 778 106 756 l 222 778 q 228 722 228 756 q 222 667 228 690 q 228 611 228 644 q 222 556 228 579 q 228 500 228 533 q 222 444 228 468 q 228 389 228 422 q 222 333 228 357 q 228 278 228 311 q 222 222 228 246 q 228 167 228 200 q 222 111 228 135 l 500 111 z "},"M":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 347 556 q 353 500 353 533 q 347 444 353 468 q 353 389 353 422 q 347 333 353 357 l 319 333 q 325 278 325 311 q 319 222 325 246 q 325 167 325 200 q 319 111 325 135 l 236 111 q 231 167 231 135 q 236 222 231 200 q 231 278 231 246 q 236 333 231 311 l 208 333 q 203 389 203 357 q 208 444 203 422 q 203 500 203 468 q 208 556 203 533 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 194 778 q 200 722 200 756 q 194 667 200 690 l 236 667 q 242 611 242 644 q 236 556 242 579 l 257 556 q 263 500 263 533 q 257 444 263 468 l 299 444 q 293 500 293 468 q 299 556 293 533 l 319 556 q 314 611 314 579 q 319 667 314 644 l 361 667 q 356 722 356 690 q 361 778 356 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"N":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 319 111 q 314 167 314 135 q 319 222 314 200 l 278 222 q 272 278 272 246 q 278 333 272 311 l 222 333 q 217 389 217 357 q 222 444 217 422 l 167 444 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 194 778 q 200 722 200 756 q 194 667 200 690 l 236 667 q 242 611 242 644 q 236 556 242 579 l 278 556 q 283 500 283 533 q 278 444 283 468 l 333 444 q 339 389 339 422 q 333 333 339 357 l 389 333 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"O":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 97 111 q 92 167 92 135 q 97 222 92 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 97 556 q 92 611 92 579 q 97 667 92 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 500 556 q 506 500 506 533 q 500 444 506 468 m 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 208 667 q 214 611 214 644 q 208 556 214 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 208 222 q 214 167 214 200 q 208 111 214 135 l 347 111 q 342 167 342 135 q 347 222 342 200 l 389 222 z "},"P":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 611 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 m 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 389 444 z "},"Q":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 444 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 389 111 q 394 56 394 89 q 389 0 394 24 l 444 0 q 450 -56 450 -22 q 444 -111 450 -87 l 500 -111 q 506 -167 506 -133 q 500 -222 506 -199 l 389 -222 q 383 -167 383 -199 q 389 -111 383 -133 l 333 -111 q 328 -56 328 -87 q 333 0 328 -22 l 167 0 q 161 56 161 24 q 167 111 161 89 l 97 111 q 92 167 92 135 q 97 222 92 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 l 97 556 q 92 611 92 579 q 97 667 92 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 389 778 q 394 722 394 756 q 389 667 394 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 500 556 q 506 500 506 533 q 500 444 506 468 m 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 208 667 q 214 611 214 644 q 208 556 214 579 l 167 556 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 208 222 q 214 167 214 200 q 208 111 214 135 l 347 111 q 342 167 342 135 q 347 222 342 200 l 389 222 z "},"R":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 347 111 q 342 167 342 135 q 347 222 342 200 l 306 222 q 300 278 300 246 q 306 333 300 311 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 472 556 q 478 500 478 533 q 472 444 478 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 417 333 q 422 278 422 311 q 417 222 422 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 500 111 m 361 444 q 356 500 356 468 q 361 556 356 533 q 356 611 356 579 q 361 667 356 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 361 444 z "},"S":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 333 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 111 333 q 106 389 106 357 q 111 444 106 422 l 56 444 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 l 111 667 q 106 722 106 690 q 111 778 106 756 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 500 333 z "},"T":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 722 q 500 667 506 690 l 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 l 56 667 q 50 722 50 690 q 56 778 50 756 l 500 778 q 506 722 506 756 z "},"U":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"V":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 l 458 444 q 464 389 464 422 q 458 333 464 357 l 417 333 q 422 278 422 311 q 417 222 422 246 l 389 222 q 394 167 394 200 q 389 111 394 135 l 333 111 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 l 167 111 q 161 167 161 135 q 167 222 161 200 l 139 222 q 133 278 133 246 q 139 333 133 311 l 97 333 q 92 389 92 357 q 97 444 92 422 l 56 444 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 208 444 q 214 389 214 422 q 208 333 214 357 l 250 333 q 256 278 256 311 q 250 222 256 246 l 306 222 q 300 278 300 246 q 306 333 300 311 l 347 333 q 342 389 342 357 q 347 444 342 422 l 389 444 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"W":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 667 q 506 611 506 644 q 500 556 506 579 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 l 458 333 q 464 278 464 311 q 458 222 464 246 q 464 167 464 200 q 458 111 464 135 l 431 111 q 436 56 436 89 q 431 0 436 24 l 347 0 q 342 56 342 24 q 347 111 342 89 l 319 111 q 314 167 314 135 q 319 222 314 200 l 236 222 q 242 167 242 200 q 236 111 242 135 l 208 111 q 214 56 214 89 q 208 0 214 24 l 125 0 q 119 56 119 24 q 125 111 119 89 l 97 111 q 92 167 92 135 q 97 222 92 200 q 92 278 92 246 q 97 333 92 311 l 56 333 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 q 172 389 172 422 q 167 333 172 357 q 172 278 172 311 q 167 222 172 246 l 208 222 q 203 278 203 246 q 208 333 203 311 l 236 333 q 231 389 231 357 q 236 444 231 422 q 231 500 231 468 q 236 556 231 533 q 231 611 231 579 q 236 667 231 644 q 231 722 231 690 q 236 778 231 756 l 319 778 q 325 722 325 756 q 319 667 325 690 q 325 611 325 644 q 319 556 325 579 q 325 500 325 533 q 319 444 325 468 q 325 389 325 422 q 319 333 325 357 l 347 333 q 353 278 353 311 q 347 222 353 246 l 389 222 q 383 278 383 246 q 389 333 383 311 q 383 389 383 357 q 389 444 383 422 q 383 500 383 468 q 389 556 383 533 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 z "},"X":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 l 347 111 q 342 167 342 135 q 347 222 342 200 l 319 222 q 314 278 314 246 q 319 333 314 311 l 236 333 q 242 278 242 311 q 236 222 242 246 l 208 222 q 214 167 214 200 q 208 111 214 135 l 167 111 q 172 56 172 89 q 167 0 172 24 l 56 0 q 50 56 50 24 q 56 111 50 89 l 97 111 q 92 167 92 135 q 97 222 92 200 l 153 222 q 147 278 147 246 q 153 333 147 311 l 194 333 q 189 389 189 357 q 194 444 189 422 l 153 444 q 147 500 147 468 q 153 556 147 533 l 97 556 q 92 611 92 579 q 97 667 92 644 l 56 667 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 l 208 667 q 214 611 214 644 q 208 556 214 579 l 236 556 q 242 500 242 533 q 236 444 242 468 l 319 444 q 314 500 314 468 q 319 556 314 533 l 347 556 q 342 611 342 579 q 347 667 342 644 l 389 667 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 q 500 667 506 690 l 458 667 q 464 611 464 644 q 458 556 464 579 l 403 556 q 408 500 408 533 q 403 444 408 468 l 361 444 q 367 389 367 422 q 361 333 367 357 l 403 333 q 408 278 408 311 q 403 222 408 246 l 458 222 q 464 167 464 200 q 458 111 464 135 l 500 111 z "},"Y":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 722 q 500 667 506 690 q 506 611 506 644 q 500 556 506 579 l 444 556 q 450 500 450 533 q 444 444 450 468 l 389 444 q 394 389 394 422 q 389 333 394 357 l 333 333 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 l 167 333 q 161 389 161 357 q 167 444 161 422 l 111 444 q 106 500 106 468 q 111 556 106 533 l 56 556 q 50 611 50 579 q 56 667 50 644 q 50 722 50 690 q 56 778 50 756 l 167 778 q 172 722 172 756 q 167 667 172 690 q 172 611 172 644 q 167 556 172 579 l 222 556 q 228 500 228 533 q 222 444 228 468 l 333 444 q 328 500 328 468 q 333 556 328 533 l 389 556 q 383 611 383 579 q 389 667 383 644 q 383 722 383 690 q 389 778 383 756 l 500 778 q 506 722 506 756 z "},"Z":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 611 q 472 556 478 579 l 431 556 q 436 500 436 533 q 431 444 436 468 l 347 444 q 353 389 353 422 q 347 333 353 357 l 264 333 q 269 278 269 311 q 264 222 269 246 l 194 222 q 200 167 200 200 q 194 111 200 135 l 472 111 q 478 56 478 89 q 472 0 478 24 l 83 0 q 78 56 78 24 q 83 111 78 89 q 78 167 78 135 q 83 222 78 200 l 153 222 q 147 278 147 246 q 153 333 147 311 l 236 333 q 231 389 231 357 q 236 444 231 422 l 319 444 q 314 500 314 468 q 319 556 314 533 l 361 556 q 356 611 356 579 q 361 667 356 644 l 83 667 q 78 722 78 690 q 83 778 78 756 l 472 778 q 478 722 478 756 q 472 667 478 690 q 478 611 478 644 z "},":":{"ha":556,"x_min":203,"x_max":353,"o":"m 353 611 q 347 556 353 579 q 353 500 353 533 q 347 444 353 468 l 208 444 q 203 500 203 468 q 208 556 203 533 q 203 611 203 579 q 208 667 203 644 l 347 667 q 353 611 353 644 m 347 222 q 353 167 353 200 q 347 111 353 135 q 353 56 353 89 q 347 0 353 24 l 208 0 q 203 56 203 24 q 208 111 203 89 q 203 167 203 135 q 208 222 203 200 l 347 222 z "},"!":{"ha":556,"x_min":217,"x_max":339,"o":"m 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 q 339 389 339 422 q 333 333 339 357 q 339 278 339 311 q 333 222 339 246 l 222 222 q 217 278 217 246 q 222 333 217 311 q 217 389 217 357 q 222 444 217 422 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 q 217 722 217 690 q 222 778 217 756 l 333 778 q 339 722 339 756 q 333 667 339 690 m 333 111 q 339 56 339 89 q 333 0 339 24 l 222 0 q 217 56 217 24 q 222 111 217 89 l 333 111 z "},"$":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 333 q 506 278 506 311 q 500 222 506 246 q 506 167 506 200 q 500 111 506 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 319 0 q 325 -56 325 -22 q 319 -111 325 -87 l 236 -111 q 231 -56 231 -87 q 236 0 231 -22 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 l 167 222 q 172 167 172 200 q 167 111 172 135 l 236 111 q 231 167 231 135 q 236 222 231 200 q 231 278 231 246 q 236 333 231 311 l 111 333 q 106 389 106 357 q 111 444 106 422 l 56 444 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 l 111 667 q 106 722 106 690 q 111 778 106 756 l 236 778 q 231 833 231 801 q 236 889 231 867 l 319 889 q 325 833 325 867 q 319 778 325 801 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 319 667 q 325 611 325 644 q 319 556 325 579 q 325 500 325 533 q 319 444 325 468 l 444 444 q 450 389 450 422 q 444 333 450 357 l 500 333 m 236 444 q 231 500 231 468 q 236 556 231 533 q 231 611 231 579 q 236 667 231 644 l 167 667 q 172 611 172 644 q 167 556 172 579 q 172 500 172 533 q 167 444 172 468 l 236 444 m 389 111 q 383 167 383 135 q 389 222 383 200 q 383 278 383 246 q 389 333 383 311 l 319 333 q 325 278 325 311 q 319 222 325 246 q 325 167 325 200 q 319 111 325 135 l 389 111 z "},"\xa3":{"ha":556,"x_min":50,"x_max":506,"o":"m 250 222 q 256 167 256 200 q 250 111 256 135 l 194 111 q 200 56 200 89 q 194 0 200 24 l 56 0 q 50 56 50 24 q 56 111 50 89 l 139 111 q 133 167 133 135 q 139 222 133 200 q 133 278 133 246 q 139 333 133 311 l 56 333 q 50 389 50 357 q 56 444 50 422 l 139 444 q 133 500 133 468 q 139 556 133 533 q 133 611 133 579 q 139 667 133 644 l 194 667 q 189 722 189 690 q 194 778 189 756 l 417 778 q 422 722 422 756 q 417 667 422 690 l 472 667 q 478 611 478 644 q 472 556 478 579 l 389 556 q 383 611 383 579 q 389 667 383 644 l 250 667 q 256 611 256 644 q 250 556 256 579 q 256 500 256 533 q 250 444 256 468 l 333 444 q 339 389 339 422 q 333 333 339 357 l 250 333 q 256 278 256 311 q 250 222 256 246 m 506 167 q 500 111 506 135 l 472 111 q 478 56 478 89 q 472 0 478 24 l 250 0 q 244 56 244 24 q 250 111 244 89 l 417 111 q 411 167 411 135 q 417 222 411 200 l 500 222 q 506 167 506 200 z "},"+":{"ha":556,"x_min":78,"x_max":478,"o":"m 478 389 q 472 333 478 357 l 333 333 q 339 278 339 311 q 333 222 339 246 q 339 167 339 200 q 333 111 339 135 l 222 111 q 217 167 217 135 q 222 222 217 200 q 217 278 217 246 q 222 333 217 311 l 83 333 q 78 389 78 357 q 83 444 78 422 l 222 444 q 217 500 217 468 q 222 556 217 533 q 217 611 217 579 q 222 667 217 644 l 333 667 q 339 611 339 644 q 333 556 339 579 q 339 500 339 533 q 333 444 339 468 l 472 444 q 478 389 478 422 z "},"=":{"ha":556,"x_min":106,"x_max":450,"o":"m 111 444 q 106 500 106 468 q 111 556 106 533 l 444 556 q 450 500 450 533 q 444 444 450 468 l 111 444 m 444 333 q 450 278 450 311 q 444 222 450 246 l 111 222 q 106 278 106 246 q 111 333 106 311 l 444 333 z "},"%":{"ha":556,"x_min":50,"x_max":506,"o":"m 257 333 q 263 278 263 311 q 257 222 263 246 l 201 222 q 207 167 207 200 q 201 111 207 135 l 139 111 q 144 56 144 89 q 139 0 144 24 l 56 0 q 50 56 50 24 q 56 111 50 89 l 118 111 q 113 167 113 135 q 118 222 113 200 l 174 222 q 168 278 168 246 q 174 333 168 311 l 236 333 q 231 389 231 357 q 236 444 231 422 l 299 444 q 293 500 293 468 q 299 556 293 533 l 354 556 q 349 611 349 579 q 354 667 349 644 l 417 667 q 411 722 411 690 q 417 778 411 756 l 500 778 q 506 722 506 756 q 500 667 506 690 l 438 667 q 443 611 443 644 q 438 556 443 579 l 382 556 q 388 500 388 533 q 382 444 388 468 l 319 444 q 325 389 325 422 q 319 333 325 357 l 257 333 m 56 556 q 50 611 50 579 q 56 667 50 644 l 104 667 q 99 722 99 690 q 104 778 99 756 l 215 778 q 221 722 221 756 q 215 667 221 690 l 264 667 q 269 611 269 644 q 264 556 269 579 l 215 556 q 221 500 221 533 q 215 444 221 468 l 104 444 q 99 500 99 468 q 104 556 99 533 l 56 556 m 139 667 q 144 611 144 644 q 139 556 144 579 l 181 556 q 175 611 175 579 q 181 667 175 644 l 139 667 m 500 222 q 506 167 506 200 q 500 111 506 135 l 451 111 q 457 56 457 89 q 451 0 457 24 l 340 0 q 335 56 335 24 q 340 111 335 89 l 292 111 q 286 167 286 135 q 292 222 286 200 l 340 222 q 335 278 335 246 q 340 333 335 311 l 451 333 q 457 278 457 311 q 451 222 457 246 l 500 222 m 417 111 q 411 167 411 135 q 417 222 411 200 l 375 222 q 381 167 381 200 q 375 111 381 135 l 417 111 z "},"@":{"ha":556,"x_min":50,"x_max":506,"o":"m 500 556 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 q 500 333 506 357 q 506 278 506 311 q 500 222 506 246 l 278 222 q 272 278 272 246 q 278 333 272 311 l 236 333 q 231 389 231 357 q 236 444 231 422 q 231 500 231 468 q 236 556 231 533 l 278 556 q 272 611 272 579 q 278 667 272 644 l 333 667 q 328 722 328 690 q 333 778 328 756 l 194 778 q 200 722 200 756 q 194 667 200 690 l 139 667 q 144 611 144 644 q 139 556 144 579 q 144 500 144 533 q 139 444 144 468 q 144 389 144 422 q 139 333 144 357 q 144 278 144 311 q 139 222 144 246 l 194 222 q 200 167 200 200 q 194 111 200 135 l 444 111 q 450 56 450 89 q 444 0 450 24 l 167 0 q 161 56 161 24 q 167 111 161 89 l 111 111 q 106 167 106 135 q 111 222 106 200 l 56 222 q 50 278 50 246 q 56 333 50 311 q 50 389 50 357 q 56 444 50 422 q 50 500 50 468 q 56 556 50 533 q 50 611 50 579 q 56 667 50 644 l 111 667 q 106 722 106 690 q 111 778 106 756 l 167 778 q 161 833 161 801 q 167 889 161 867 l 389 889 q 394 833 394 867 q 389 778 394 801 l 444 778 q 450 722 450 756 q 444 667 450 690 l 500 667 q 506 611 506 644 q 500 556 506 579 m 417 333 q 411 389 411 357 q 417 444 411 422 q 411 500 411 468 q 417 556 411 533 l 319 556 q 325 500 325 533 q 319 444 325 468 q 325 389 325 422 q 319 333 325 357 l 417 333 z "},"&":{"ha":556,"x_min":50,"x_max":506,"o":"m 506 389 q 500 333 506 357 l 431 333 q 436 278 436 311 q 431 222 436 246 l 472 222 q 478 167 478 200 q 472 111 478 135 l 500 111 q 506 56 506 89 q 500 0 506 24 l 389 0 q 383 56 383 24 q 389 111 383 89 q 383 167 383 135 q 389 222 383 200 l 347 222 q 353 167 353 200 q 347 111 353 135 l 306 111 q 311 56 311 89 q 306 0 311 24 l 111 0 q 106 56 106 24 q 111 111 106 89 l 56 111 q 50 167 50 135 q 56 222 50 200 q 50 278 50 246 q 56 333 50 311 l 111 333 q 106 389 106 357 q 111 444 106 422 l 167 444 q 161 500 161 468 q 167 556 161 533 l 111 556 q 106 611 106 579 q 111 667 106 644 l 167 667 q 161 722 161 690 q 167 778 161 756 l 333 778 q 339 722 339 756 q 333 667 339 690 l 389 667 q 394 611 394 644 q 389 556 394 579 l 306 556 q 300 611 300 579 q 306 667 300 644 l 194 667 q 200 611 200 644 q 194 556 200 579 l 306 556 q 311 500 311 533 q 306 444 311 468 l 347 444 q 353 389 353 422 q 347 333 353 357 l 417 333 q 411 389 411 357 q 417 444 411 422 q 411 500 411 468 q 417 556 411 533 l 500 556 q 506 500 506 533 q 500 444 506 468 q 506 389 506 422 m 306 222 q 300 278 300 246 q 306 333 300 311 l 264 333 q 258 389 258 357 q 264 444 258 422 l 222 444 q 228 389 228 422 q 222 333 228 357 l 167 333 q 172 278 172 311 q 167 222 172 246 q 172 167 172 200 q 167 111 172 135 l 264 111 q 258 167 258 135 q 264 222 258 200 l 306 222 z "}},"familyName":"VT323","ascender":1111,"descender":-278,"underlinePosition":-172,"underlineThickness":69,"boundingBox":{"yMin":-333,"xMin":-561,"yMax":1444,"xMax":589},"resolution":1000,"original_font_information":{"format":0,"copyright":"Copyright 2011, The VT323 Project Authors (peter.hull@oikoi.com)","fontFamily":"VT323","fontSubfamily":"Regular","uniqueID":"2.000;UKWN;VT323-Regular","fullName":"VT323 Regular","version":"Version 2.000","postScriptName":"VT323-Regular","designer":"Peter Hull","licence":"This Font Software is licensed under the SIL Open Font License, Version 1.1. This license is available with a FAQ at: http://scripts.sil.org/OFL","licenceURL":"http://scripts.sil.org/OFL"},"cssFontWeight":"normal","cssFontStyle":"normal"}',
        ),
        T = n(66673);
      let A = [
          "Name",
          "Address",
          "Phone",
          "Email",
          "IP Address",
          "Passport",
          "ID Number",
          "Medical ID",
          "Birthday",
          "Employment",
          "Location",
          "Credit Card",
          "Bank Account",
          "Social Security",
          "Driver License",
          "Fingerprint",
          "Vehicle",
          "License Plate",
          "MAC Address",
          "Cookies",
          "Browser History",
          "Search History",
        ],
        randomPII = () => A[Math.floor(Math.random() * A.length)],
        useRandomPII = () => {
          let e = (0, p.useRef)(randomPII().toUpperCase());
          return e.current;
        };
      function randomChar() {
        let e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789=+&%$@";
        return e.charAt(Math.floor(Math.random() * e.length));
      }
      var R = n(92520),
        B = n(4960),
        O = n(80578),
        D = n(66354),
        EncryptionAsAService_FingerPrint = (e) => {
          let { onComplete: t, active: n, ...a } = e,
            r = (0, p.useRef)(),
            [{ x: s, y: l }, o] = (0, p.useState)({}),
            q = (0, B.c)(0),
            c = (0, O.H)(q, [1, 0], [0, 80]),
            handleMouseDown = () => {
              let e = (0, D.j)(q, 1, {
                duration: 3,
                ease: "linear",
                onComplete: t,
              });
              window.addEventListener(
                "mouseup",
                () => {
                  e.stop(), (0, D.j)(q, 0, { duration: 0.3 });
                },
                { once: !0 },
              );
            };
          return (
            (0, p.useEffect)(() => {
              let handleMouseMove = (e) => {
                let t = r.current.getBoundingClientRect();
                o({
                  x: ((e.clientX - t.x) / t.width) * 100,
                  y: ((e.clientY - t.y) / t.height) * 100,
                });
              };
              return (
                window.addEventListener("mousemove", handleMouseMove),
                () => {
                  window.removeEventListener("mousemove", handleMouseMove);
                }
              );
            }, []),
            (0, i.jsxs)(R.E.svg, {
              ref: r,
              width: 164,
              height: 166,
              fill: "none",
              className: u().fingerPrint,
              onMouseDown: handleMouseDown,
              onTapStart: handleMouseDown,
              xmlns: "http://www.w3.org/2000/svg",
              ...a,
              children: [
                (0, i.jsx)(R.E.path, {
                  d: "M78.99 70.384c6.128-1.642 12.427 1.994 14.068 8.122a179.609 179.609 0 0 1 4.733 24.151m-91.563 8.777a87.148 87.148 0 0 0-1.933-9.144 82.29 82.29 0 0 1-.597-2.367m80.861-7.248a169.016 169.016 0 0 0-2.596-11.196m.737 83.493a166.01 166.01 0 0 0 2.082-9.463m1.014-5.935a165.476 165.476 0 0 0-.156-50.796m3.04 65.929a171.42 171.42 0 0 0 3.707-21.21m-4.51-62.116c-.12-.463-.242-.926-.366-1.388a5.743 5.743 0 0 0-11.096 2.973 161.908 161.908 0 0 1 4.794 26.513m11.731 28.073c1.251-16.583.101-33.598-3.713-50.587m-12.402 77.797a159.741 159.741 0 0 0 4.842-49.311m-10.6 48.624c.515-1.949.993-3.911 1.433-5.884m1.108-5.434a153.991 153.991 0 0 0 1.272-48.123m-.905-6a157.03 157.03 0 0 0-3.107-14.182 11.48 11.48 0 0 1 2.778-10.899m21.083 90.519a177.255 177.255 0 0 0 2.664-14.383m.73-5.796a176.735 176.735 0 0 0 .323-35.168m2.452 54.046a182.553 182.553 0 0 0 3.914-31.968m.102-6.27c-.014-15.691-2.054-31.638-6.308-47.514a17.15 17.15 0 0 0-5.496-8.68M88.3 65.455a17.153 17.153 0 0 0-10.797-.62c-8.725 2.338-14.083 10.969-12.499 19.7m.386 78.533a148.503 148.503 0 0 0 4.893-31.487m.16-6.137a149.259 149.259 0 0 0-4.101-35.47m-6.501 71.608a143.02 143.02 0 0 0 3.746-19.139m.648-6.268c1.292-15.957-.083-32.402-4.464-48.751a22.867 22.867 0 0 1 .398-13.226m2.799-5.644a22.884 22.884 0 0 1 13.048-9.267c9.08-2.433 18.346.928 23.875 7.817m3.004 4.9a23.16 23.16 0 0 1 1.258 3.528 192.094 192.094 0 0 1 3.225 14.15m-.275 71.426c.215-1.094.421-2.189.617-3.288m1.027-6.369a188.324 188.324 0 0 0-.342-55.801m4.97 63.182a193.99 193.99 0 0 0 1.976-13.956m-5.176-69.025c-.155-.602-.313-1.204-.474-1.806-2.261-8.436-8.053-14.984-15.359-18.48m21.556 83.118c1.351-18.682.014-37.84-4.305-56.969M88.679 53.553a28.59 28.59 0 0 0-14.148.187c-12.36 3.312-20.667 14.203-21.258 26.333m.3 5.743c.159 1.031.375 2.064.651 3.096a138.813 138.813 0 0 1 4.037 21.988 136.805 136.805 0 0 1-.851 34.281m-2.99 14.436a137.594 137.594 0 0 0 1.96-8.525m-7.342 6.399a131.369 131.369 0 0 0 4.034-26.797m.139-5.983a131.735 131.735 0 0 0-2.297-24.507m-1.321-6.187a134.633 134.633 0 0 0-.916-3.619c-3.884-14.493 2.075-29.305 13.779-37.338m5.164-2.92a34.694 34.694 0 0 1 5.424-1.947c10.383-2.783 20.93-.513 29.031 5.302m4.594 3.951a34.304 34.304 0 0 1 8.58 15.114 203.072 203.072 0 0 1 4.982 24.53m-.568 59.018c.351-2.206.666-4.422.944-6.645m.675-6.175a199.627 199.627 0 0 0-.35-40.588m5.096 49.622a205.025 205.025 0 0 0 1.856-25.62m-.036-6.301a206.181 206.181 0 0 0-3.301-32.643m-1.199-6.07a210.787 210.787 0 0 0-2.551-10.615c-3.048-11.376-10.683-20.3-20.381-25.313m-5.427-2.32a40.017 40.017 0 0 0-23.432-.795 40.017 40.017 0 0 0-18.527 10.91m-3.839 4.633c-6.692 9.428-9.288 21.656-6.062 33.697a127.686 127.686 0 0 1 2.958 14.221m-2.276 48.624a125.82 125.82 0 0 0 2.413-12.458m.724-6.221c.716-7.858.698-15.856-.108-23.904m-8.201 39.509a119.803 119.803 0 0 0 3.073-28.472m-.236-6.18a121.183 121.183 0 0 0-3.895-23.633 45.799 45.799 0 0 1-1.11-18.433m1.23-5.817c3.987-14.227 14.743-26.185 29.553-31.173m5.405-1.466c11.4-2.368 22.8-.262 32.265 5.198m21.028 26.526c.137.456.268.917.393 1.38a214.183 214.183 0 0 1 6.052 32.272m-22.488-56.854a45.73 45.73 0 0 1 13.92 17.527m8.543 85.266c.427-3.88.748-7.783.96-11.703m.242-6.16a211.05 211.05 0 0 0-.592-21.841m5.676 34.304c.674-8.225.881-16.534.603-24.895m-.29-6.109a218.734 218.734 0 0 0-4.978-34.788m-1.482-6.143c-.201-.788-.408-1.575-.619-2.362-2.179-8.132-6.18-15.29-11.448-21.15M90.527 30.49a51.904 51.904 0 0 1 25.525 12.125M84.404 29.832a51.662 51.662 0 0 0-15.82 1.717 51.636 51.636 0 0 0-15.187 6.832M30.393 85.143a51.961 51.961 0 0 0 1.64 9.715 116.44 116.44 0 0 1 1.869 8.121m-3.583-24.014c.694-14.315 7.356-27.672 18.131-36.857M33.57 147.96c.367-1.761.694-3.534.978-5.316m.765-5.705c1-9.232.884-18.692-.452-28.197m-6.31 34.914c.704-3.947 1.191-7.949 1.453-11.991m.224-6.148a109.232 109.232 0 0 0-3.742-29.173c-.212-.79-.406-1.58-.583-2.37m-1-5.876c-2.766-23.598 9.421-46.417 30.17-57.384m5.275-2.453a58.011 58.011 0 0 1 6.75-2.26c23.176-6.21 46.841 2.682 60.548 20.643m3.272 4.771a57.439 57.439 0 0 1 6.522 15.199 226.796 226.796 0 0 1 4.515 20.642m2.893 48.577c.09-1.799.158-3.601.205-5.407m.073-5.965a222.877 222.877 0 0 0-2.276-31.5m8.008 34.423c.083-7.127-.168-14.3-.765-21.498m-.586-6.086a231.493 231.493 0 0 0-6.519-34.673c-3.582-13.366-11.192-24.578-21.174-32.678M75.746 18.6c14.883-1.49 29.429 2.407 41.336 10.361m-47.481-9.44c-1.33.267-2.66.578-3.99.934C50.485 24.507 38.12 33.72 29.9 45.69m-3.255 5.273c-7.613 13.798-10.107 30.444-5.706 46.868a104.264 104.264 0 0 1 2.779 14.269m-.184 26.509a102.608 102.608 0 0 0 .75-20.418m-5.864 14.356c.125-1.521.213-3.048.266-4.581m.006-6.463a97.93 97.93 0 0 0-3.3-22.186c-2.685-10.016-3.018-20.11-1.339-29.692m1.326-5.98c5.69-21.168 21.346-39.086 43.035-46.943m5.712-1.796c13.88-3.719 27.908-2.924 40.522 1.485m5.592 2.232c15.281 6.885 27.959 19.27 34.935 35.364m2.164 5.664c.436 1.31.836 2.64 1.198 3.99a237.984 237.984 0 0 1 5.55 26.756m2.402 26.56a234.352 234.352 0 0 0-1.589-20.534m2.05-22.401a244.684 244.684 0 0 0-2.866-11.868 74.53 74.53 0 0 0-10.755-23.244m17.967 63.232a241.434 241.434 0 0 0-3.148-22.198M95.197 7.98a74.953 74.953 0 0 1 44.722 26.398M89.177 7.142A74.503 74.503 0 0 0 62.638 9.36a74.642 74.642 0 0 0-20.558 8.976M7.34 84.425a74.923 74.923 0 0 0 2.503 16.379 93.213 93.213 0 0 1 1.372 5.875M7.324 78.884c.779-22.635 11.898-43.711 29.862-57.178m-24.19 102.515a91.46 91.46 0 0 0-.77-11.421M2.543 94.09a79.98 79.98 0 0 1 4.463-41.73m2.404-5.55c7.246-15.146 19.178-27.966 34.472-36.17m5.521-2.695a81.02 81.02 0 0 1 11.748-4.134c19.677-5.273 39.606-2.77 56.524 5.625m5.199 2.822a80.738 80.738 0 0 1 11.5 8.232m28.006 51.482a250.087 250.087 0 0 0-2.602-10.75m-21.058-36.718a79.929 79.929 0 0 1 19.414 31.213",
                  stroke: "url(#gradient)",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                }),
                (0, i.jsx)(R.E.path, {
                  d: "M78.99 70.384c6.128-1.642 12.427 1.994 14.068 8.122a179.609 179.609 0 0 1 4.733 24.151m-91.563 8.777a87.148 87.148 0 0 0-1.933-9.144 82.29 82.29 0 0 1-.597-2.367m80.861-7.248a169.016 169.016 0 0 0-2.596-11.196m.737 83.493a166.01 166.01 0 0 0 2.082-9.463m1.014-5.935a165.476 165.476 0 0 0-.156-50.796m3.04 65.929a171.42 171.42 0 0 0 3.707-21.21m-4.51-62.116c-.12-.463-.242-.926-.366-1.388a5.743 5.743 0 0 0-11.096 2.973 161.908 161.908 0 0 1 4.794 26.513m11.731 28.073c1.251-16.583.101-33.598-3.713-50.587m-12.402 77.797a159.741 159.741 0 0 0 4.842-49.311m-10.6 48.624c.515-1.949.993-3.911 1.433-5.884m1.108-5.434a153.991 153.991 0 0 0 1.272-48.123m-.905-6a157.03 157.03 0 0 0-3.107-14.182 11.48 11.48 0 0 1 2.778-10.899m21.083 90.519a177.255 177.255 0 0 0 2.664-14.383m.73-5.796a176.735 176.735 0 0 0 .323-35.168m2.452 54.046a182.553 182.553 0 0 0 3.914-31.968m.102-6.27c-.014-15.691-2.054-31.638-6.308-47.514a17.15 17.15 0 0 0-5.496-8.68M88.3 65.455a17.153 17.153 0 0 0-10.797-.62c-8.725 2.338-14.083 10.969-12.499 19.7m.386 78.533a148.503 148.503 0 0 0 4.893-31.487m.16-6.137a149.259 149.259 0 0 0-4.101-35.47m-6.501 71.608a143.02 143.02 0 0 0 3.746-19.139m.648-6.268c1.292-15.957-.083-32.402-4.464-48.751a22.867 22.867 0 0 1 .398-13.226m2.799-5.644a22.884 22.884 0 0 1 13.048-9.267c9.08-2.433 18.346.928 23.875 7.817m3.004 4.9a23.16 23.16 0 0 1 1.258 3.528 192.094 192.094 0 0 1 3.225 14.15m-.275 71.426c.215-1.094.421-2.189.617-3.288m1.027-6.369a188.324 188.324 0 0 0-.342-55.801m4.97 63.182a193.99 193.99 0 0 0 1.976-13.956m-5.176-69.025c-.155-.602-.313-1.204-.474-1.806-2.261-8.436-8.053-14.984-15.359-18.48m21.556 83.118c1.351-18.682.014-37.84-4.305-56.969M88.679 53.553a28.59 28.59 0 0 0-14.148.187c-12.36 3.312-20.667 14.203-21.258 26.333m.3 5.743c.159 1.031.375 2.064.651 3.096a138.813 138.813 0 0 1 4.037 21.988 136.805 136.805 0 0 1-.851 34.281m-2.99 14.436a137.594 137.594 0 0 0 1.96-8.525m-7.342 6.399a131.369 131.369 0 0 0 4.034-26.797m.139-5.983a131.735 131.735 0 0 0-2.297-24.507m-1.321-6.187a134.633 134.633 0 0 0-.916-3.619c-3.884-14.493 2.075-29.305 13.779-37.338m5.164-2.92a34.694 34.694 0 0 1 5.424-1.947c10.383-2.783 20.93-.513 29.031 5.302m4.594 3.951a34.304 34.304 0 0 1 8.58 15.114 203.072 203.072 0 0 1 4.982 24.53m-.568 59.018c.351-2.206.666-4.422.944-6.645m.675-6.175a199.627 199.627 0 0 0-.35-40.588m5.096 49.622a205.025 205.025 0 0 0 1.856-25.62m-.036-6.301a206.181 206.181 0 0 0-3.301-32.643m-1.199-6.07a210.787 210.787 0 0 0-2.551-10.615c-3.048-11.376-10.683-20.3-20.381-25.313m-5.427-2.32a40.017 40.017 0 0 0-23.432-.795 40.017 40.017 0 0 0-18.527 10.91m-3.839 4.633c-6.692 9.428-9.288 21.656-6.062 33.697a127.686 127.686 0 0 1 2.958 14.221m-2.276 48.624a125.82 125.82 0 0 0 2.413-12.458m.724-6.221c.716-7.858.698-15.856-.108-23.904m-8.201 39.509a119.803 119.803 0 0 0 3.073-28.472m-.236-6.18a121.183 121.183 0 0 0-3.895-23.633 45.799 45.799 0 0 1-1.11-18.433m1.23-5.817c3.987-14.227 14.743-26.185 29.553-31.173m5.405-1.466c11.4-2.368 22.8-.262 32.265 5.198m21.028 26.526c.137.456.268.917.393 1.38a214.183 214.183 0 0 1 6.052 32.272m-22.488-56.854a45.73 45.73 0 0 1 13.92 17.527m8.543 85.266c.427-3.88.748-7.783.96-11.703m.242-6.16a211.05 211.05 0 0 0-.592-21.841m5.676 34.304c.674-8.225.881-16.534.603-24.895m-.29-6.109a218.734 218.734 0 0 0-4.978-34.788m-1.482-6.143c-.201-.788-.408-1.575-.619-2.362-2.179-8.132-6.18-15.29-11.448-21.15M90.527 30.49a51.904 51.904 0 0 1 25.525 12.125M84.404 29.832a51.662 51.662 0 0 0-15.82 1.717 51.636 51.636 0 0 0-15.187 6.832M30.393 85.143a51.961 51.961 0 0 0 1.64 9.715 116.44 116.44 0 0 1 1.869 8.121m-3.583-24.014c.694-14.315 7.356-27.672 18.131-36.857M33.57 147.96c.367-1.761.694-3.534.978-5.316m.765-5.705c1-9.232.884-18.692-.452-28.197m-6.31 34.914c.704-3.947 1.191-7.949 1.453-11.991m.224-6.148a109.232 109.232 0 0 0-3.742-29.173c-.212-.79-.406-1.58-.583-2.37m-1-5.876c-2.766-23.598 9.421-46.417 30.17-57.384m5.275-2.453a58.011 58.011 0 0 1 6.75-2.26c23.176-6.21 46.841 2.682 60.548 20.643m3.272 4.771a57.439 57.439 0 0 1 6.522 15.199 226.796 226.796 0 0 1 4.515 20.642m2.893 48.577c.09-1.799.158-3.601.205-5.407m.073-5.965a222.877 222.877 0 0 0-2.276-31.5m8.008 34.423c.083-7.127-.168-14.3-.765-21.498m-.586-6.086a231.493 231.493 0 0 0-6.519-34.673c-3.582-13.366-11.192-24.578-21.174-32.678M75.746 18.6c14.883-1.49 29.429 2.407 41.336 10.361m-47.481-9.44c-1.33.267-2.66.578-3.99.934C50.485 24.507 38.12 33.72 29.9 45.69m-3.255 5.273c-7.613 13.798-10.107 30.444-5.706 46.868a104.264 104.264 0 0 1 2.779 14.269m-.184 26.509a102.608 102.608 0 0 0 .75-20.418m-5.864 14.356c.125-1.521.213-3.048.266-4.581m.006-6.463a97.93 97.93 0 0 0-3.3-22.186c-2.685-10.016-3.018-20.11-1.339-29.692m1.326-5.98c5.69-21.168 21.346-39.086 43.035-46.943m5.712-1.796c13.88-3.719 27.908-2.924 40.522 1.485m5.592 2.232c15.281 6.885 27.959 19.27 34.935 35.364m2.164 5.664c.436 1.31.836 2.64 1.198 3.99a237.984 237.984 0 0 1 5.55 26.756m2.402 26.56a234.352 234.352 0 0 0-1.589-20.534m2.05-22.401a244.684 244.684 0 0 0-2.866-11.868 74.53 74.53 0 0 0-10.755-23.244m17.967 63.232a241.434 241.434 0 0 0-3.148-22.198M95.197 7.98a74.953 74.953 0 0 1 44.722 26.398M89.177 7.142A74.503 74.503 0 0 0 62.638 9.36a74.642 74.642 0 0 0-20.558 8.976M7.34 84.425a74.923 74.923 0 0 0 2.503 16.379 93.213 93.213 0 0 1 1.372 5.875M7.324 78.884c.779-22.635 11.898-43.711 29.862-57.178m-24.19 102.515a91.46 91.46 0 0 0-.77-11.421M2.543 94.09a79.98 79.98 0 0 1 4.463-41.73m2.404-5.55c7.246-15.146 19.178-27.966 34.472-36.17m5.521-2.695a81.02 81.02 0 0 1 11.748-4.134c19.677-5.273 39.606-2.77 56.524 5.625m5.199 2.822a80.738 80.738 0 0 1 11.5 8.232m28.006 51.482a250.087 250.087 0 0 0-2.602-10.75m-21.058-36.718a79.929 79.929 0 0 1 19.414 31.213",
                  stroke: "white",
                  strokeWidth: 2,
                  strokeLinecap: "round",
                  strokeDasharray: "80 80",
                  strokeDashoffset: n ? 0 : c,
                }),
                (0, i.jsx)("defs", {
                  children: (0, i.jsxs)("radialGradient", {
                    id: "gradient",
                    cx: s ? "".concat(s, "%") : "-100%",
                    cy: l ? "".concat(l, "%") : "-100%",
                    r: "0.8",
                    children: [
                      (0, i.jsx)("stop", {
                        stopColor: "#D6C7FF",
                        stopOpacity: "1",
                      }),
                      (0, i.jsx)("stop", {
                        offset: "1",
                        stopColor: "#8951FF",
                        stopOpacity: "1",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        };
      function Graphic(e) {
        let { onScan: t } = e,
          n = (0, h.s)(),
          [a, r] = (0, p.useState)(!1);
        return n
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)("div", {
                  className: u().center,
                  children: [
                    (0, i.jsx)(EncryptionAsAService_FingerPrint, {
                      active: a,
                      onComplete: () => {
                        r(!0),
                          t(),
                          setTimeout(() => {
                            r(!1);
                          }, 1e3);
                      },
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 1.2 },
                    }),
                    (0, i.jsx)(R.E.div, {
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.7 },
                      className: u().circle,
                    }),
                  ],
                }),
                (0, i.jsx)("svg", {
                  width: "700",
                  height: "700",
                  viewBox: "0 0 700 700",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: F.map((e, t) =>
                    (0, i.jsx)(
                      Path,
                      { active: a, index: t, points: e.points },
                      t,
                    ),
                  ),
                }),
              ],
            })
          : null;
      }
      function Path(e) {
        let { index: t, points: n, active: a } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(R.E.circle, {
              initial: { scale: 0, opacity: 0 },
              animate: { scale: 1, opacity: 0.7 },
              transition: { delay: 0.07 * t, duration: 0.5 },
              cx: n[0][0],
              cy: n[0][1],
              r: "5",
              fill: "none",
              stroke: "#EFE9FF",
              strokeWidth: "1.5",
              style: { pointerEvents: "none" },
            }),
            (0, i.jsx)(R.E.path, {
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { delay: 0.08 * t, duration: 0.5, ease: "easeIn" },
              d: generatePath(n),
              fill: "none",
              stroke: "url(#gradient-".concat(t, ")"),
              strokeWidth: "2",
            }),
            (0, i.jsx)(R.E.path, {
              d: generatePath(n),
              fill: "none",
              stroke: "url(#glow-".concat(t, ")"),
              strokeWidth: "2",
            }),
            (0, i.jsx)(R.E.path, {
              d: generatePath(n),
              fill: "none",
              stroke: "url(#active-".concat(t, ")"),
              strokeWidth: "2",
              strokeDasharray: "300 300",
              initial: { strokeDashoffset: -300 },
              animate: { strokeDashoffset: a ? 0 : -300 },
              transition: {
                delay: 0.01 * t,
                duration: randomFloatBetween(0.3, 0.5),
                ease: "easeIn",
              },
            }),
            (0, i.jsx)(PingGradient, { index: t, points: n }),
            (0, i.jsx)(ActiveGradient, { isActive: a, index: t, points: n }, t),
            (0, i.jsxs)("linearGradient", {
              id: "gradient-".concat(t),
              gradientUnits: "userSpaceOnUse",
              x1: n[0][0],
              y1: n[0][1],
              x2: n[n.length - 1][0],
              y2: n[n.length - 1][1],
              children: [
                (0, i.jsx)("stop", {
                  offset: "0%",
                  stopColor: "rgb(239 233 255 / 0.3)",
                }),
                (0, i.jsx)("stop", {
                  offset: "40%",
                  stopColor: "rgb(239 233 255 / 0.12)",
                }),
                (0, i.jsx)("stop", {
                  offset: "100%",
                  stopColor: "rgb(239 233 255 / 0.08)",
                }),
              ],
            }),
          ],
        });
      }
      function PingGradient(e) {
        let { index: t, points: n } = e,
          a = n[0],
          r = n[n.length - 1],
          [s, l] = (function (e, t) {
            let n = t[0] - e[0],
              a = t[1] - e[1],
              i = Math.sqrt(n * n + a * a);
            return (
              (n /= i),
              (a /= i),
              [
                [e[0] - 50 * n, e[1] - 50 * a],
                [t[0] + 50 * n, t[1] + 50 * a],
              ]
            );
          })(a, r);
        return (0, i.jsxs)(
          R.E.linearGradient,
          {
            id: "glow-".concat(t),
            gradientUnits: "userSpaceOnUse",
            initial: { x1: s[0], y1: s[1], x2: a[0], y2: a[1] },
            animate: { x1: r[0], y1: r[1], x2: l[0], y2: l[1] },
            transition: {
              duration: randomFloatBetween(0.7, 1.2),
              ease: "easeIn",
              repeat: 1 / 0,
              delay: 2 + t * randomFloatBetween(0.4, 0.9),
              repeatDelay: randomFloatBetween(3, 8),
            },
            children: [
              (0, i.jsx)("stop", {
                offset: "0%",
                stopColor: "rgba(239, 233, 255, 0)",
              }),
              (0, i.jsx)("stop", {
                offset: "90%",
                stopColor: "rgba(239, 233, 255, 1)",
              }),
              (0, i.jsx)("stop", {
                offset: "100%",
                stopColor: "rgba(239, 233, 255, 0)",
              }),
            ],
          },
          t,
        );
      }
      function ActiveGradient(e) {
        let { index: t, points: n } = e,
          a = n[0],
          r = n[n.length - 1];
        return (0, i.jsxs)(
          "linearGradient",
          {
            id: "active-".concat(t),
            gradientUnits: "userSpaceOnUse",
            x1: a[0],
            y1: a[1],
            x2: r[0],
            y2: r[1],
            children: [
              (0, i.jsx)("stop", {
                offset: "40%",
                stopColor: "rgb(215 200 255 / 0)",
              }),
              (0, i.jsx)("stop", {
                offset: "70%",
                stopColor: "rgb(100 20 255 / 1)",
              }),
              (0, i.jsx)("stop", {
                offset: "100%",
                stopColor: "rgb(240 230 255 / 1)",
              }),
            ],
          },
          t,
        );
      }
      function generatePath(e) {
        let [t, ...n] = e,
          a = e[0][0],
          i = e[0][1];
        return (
          i < n[0][1] && (i += 10),
          i > n[0][1] && (i -= 10),
          a < n[0][0] && (a += 10),
          a > n[0][0] && (a -= 10),
          " M "
            .concat(a, " ")
            .concat(i, " ")
            .concat(n.map((e) => "L ".concat(e[0], " ").concat(e[1])).join(" "))
        );
      }
      let F = (function (e) {
        for (let t = e.length - 1; t > 0; t--) {
          let n = Math.floor(Math.random() * (t + 1)),
            a = e[t];
          (e[t] = e[n]), (e[n] = a);
        }
        return e;
      })([
        {
          points: [
            [170, 10],
            [170, 100],
            [280, 210],
            [280, 268],
          ],
        },
        {
          points: [
            [260, 50],
            [260, 130],
            [320, 190],
            [320, 246],
          ],
        },
        {
          points: [
            [450, 70],
            [450, 120],
            [370, 200],
            [370, 245],
          ],
        },
        {
          points: [
            [570, 20],
            [570, 90],
            [410, 240],
            [410, 260],
          ],
        },
        {
          points: [
            [600, 220],
            [540, 220],
            [480, 280],
            [432, 280],
          ],
        },
        {
          points: [
            [680, 280],
            [600, 280],
            [550, 330],
            [455, 330],
          ],
        },
        {
          points: [
            [640, 440],
            [600, 440],
            [530, 370],
            [455, 370],
          ],
        },
        {
          points: [
            [690, 490],
            [560, 490],
            [490, 420],
            [432, 420],
          ],
        },
        {
          points: [
            [490, 630],
            [490, 560],
            [410, 480],
            [410, 440],
          ],
        },
        {
          points: [
            [440, 690],
            [440, 590],
            [370, 520],
            [370, 455],
          ],
        },
        {
          points: [
            [260, 640],
            [260, 600],
            [330, 530],
            [330, 455],
          ],
        },
        {
          points: [
            [180, 600],
            [180, 560],
            [280, 460],
            [280, 432],
          ],
        },
        {
          points: [
            [30, 500],
            [90, 500],
            [190, 400],
            [255, 400],
          ],
        },
        {
          points: [
            [70, 420],
            [100, 420],
            [160, 360],
            [240, 360],
          ],
        },
        {
          points: [
            [90, 280],
            [140, 280],
            [180, 320],
            [245, 320],
          ],
        },
        {
          points: [
            [40, 180],
            [100, 180],
            [200, 280],
            [268, 280],
          ],
        },
      ]);
      function randomFloatBetween(e, t) {
        return Math.random() * (t - e) + e;
      }
      let I = new w.Howl({ src: ["/audio/pii/hit.mp3"], volume: 1.5 });
      function DataStream() {
        let [e, t] = (0, p.useState)([]),
          n = (0, p.useRef)(0);
        return (
          (0, S.A)((e, a) => {
            let { clock: i } = e,
              r = 3 - Math.min(0.0025 * g.current, 1) * a;
            i.elapsedTime - n.current < r ||
              ((n.current = i.elapsedTime),
              t((e) => [
                ...e,
                { id: (0, k.DO)(), y: randomFloatBetween(-2.5, 2.5) },
              ]));
          }),
          (0, p.useEffect)(() => {
            let handleRemoveData = (e) => {
              let { detail: n } = e,
                { id: a } = n;
              t((e) => e.filter((e) => e.id !== a));
            };
            return (
              window.addEventListener("REMOVE_DATA", handleRemoveData),
              () => {
                window.removeEventListener("REMOVE_DATA", handleRemoveData);
              }
            );
          }, []),
          e.map((e) => (0, i.jsx)(Z, { data: e }, e.id))
        );
      }
      let Z = (0, p.memo)(function (e) {
          let { data: t } = e,
            n = (0, p.useRef)(),
            a = (0, p.useRef)(),
            r = (0, p.useRef)(),
            s = (0, p.useRef)(!1),
            l = (0, p.useRef)(!1),
            o = useRandomPII();
          return (
            (0, S.A)((e, t) => {
              if (!n.current || s.current) return;
              let a = (0, C.R3)(n.current.translation());
              (a.x -= (2 + 0.1 * g.current) * t),
                n.current.setTranslation(a, !0);
            }),
            (0, i.jsxs)(C.ib, {
              ref: n,
              sensor: !0,
              colliders: "cuboid",
              position: [8, t.y, 0],
              onIntersectionEnter: (e) => {
                let { other: i } = e;
                if (
                  i.rigidBodyObject.name.startsWith("deadZone") &&
                  !l.current
                ) {
                  let e = new CustomEvent("GAME_OVER");
                  window.dispatchEvent(e);
                }
                if (i.rigidBodyObject.name.startsWith("bounds")) {
                  let e = new CustomEvent("REMOVE_DATA", {
                    detail: { id: t.id },
                  });
                  window.dispatchEvent(e);
                }
                if (!l.current && i.rigidBodyObject.name.startsWith("bullet")) {
                  I.play(),
                    (a.current.opacity = 0),
                    (r.current.opacity = 1),
                    i.rigidBody.setEnabled(!1),
                    (l.current = !0);
                  let e = new CustomEvent("BULLET_HIT", {
                    detail: { id: i.rigidBodyObject.name },
                  });
                  window.dispatchEvent(e);
                  let t = new CustomEvent("EXPLOSION", {
                    detail: { position: (0, C.R3)(n.current.translation()) },
                  });
                  window.dispatchEvent(t);
                }
              },
              children: [
                (0, i.jsxs)(T.o, {
                  font: M,
                  size: 0.17,
                  letterSpacing: 0.05,
                  height: 0.001,
                  children: [
                    o,
                    (0, i.jsx)("meshBasicMaterial", {
                      ref: a,
                      color: "white",
                      transparent: !0,
                    }),
                  ],
                }),
                (0, i.jsxs)(T.o, {
                  font: M,
                  size: 0.17,
                  letterSpacing: 0.05,
                  height: 0.001,
                  children: [
                    (function (e) {
                      let t = e.split("").map(randomChar).join("");
                      return "EV:".concat(t.slice(3));
                    })(o),
                    (0, i.jsx)("meshBasicMaterial", {
                      ref: r,
                      color: "#6A6684",
                      transparent: !0,
                      opacity: 0,
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        z = (0, p.memo)(function () {
          let e = (0, p.useRef)(),
            t = (0, p.useMemo)(() => {
              let e = new Float32Array(150),
                t = new Float32Array(50);
              for (let n = 0; n < 50; n++)
                (e[3 * n] = Math.random() - 0.5),
                  (e[3 * n + 1] = Math.random() - 0.5),
                  (e[3 * n + 2] = 0),
                  (t[n] = Math.random());
              let n = new b.BufferGeometry();
              return (
                n.setAttribute("position", new b.BufferAttribute(e, 3)),
                n.setAttribute("random", new b.BufferAttribute(t, 1)),
                n
              );
            }, []);
          return (
            (0, S.A)((t) => {
              let { clock: n } = t;
              e.current.uniforms.uTime.value = n.getElapsedTime();
            }),
            (0, i.jsxs)("points", {
              scale: [0.2, 0.06, 1],
              "position-x": -0.45,
              children: [
                (0, i.jsx)("bufferGeometry", { attach: "geometry", ...t }),
                (0, i.jsx)("shaderMaterial", {
                  ref: e,
                  transparent: !0,
                  vertexShader: U,
                  fragmentShader: W,
                  uniforms: {
                    uTime: { value: 0 },
                    uColorPrimary: { value: new b.Color("#FF4F28") },
                    uColorSecondary: { value: new b.Color("#FFFFFF") },
                  },
                }),
              ],
            })
          );
        }),
        U =
          "\nuniform float uTime;\nattribute float random;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  vRandom = random;\n  float speed = 1.0;\n  speed = speed + (speed * random);\n  vec3 pos = position;\n  pos.x -= uTime * speed;\n  pos.x = -0.5 + mod(pos.x, 1.0);\n  x = pos.x;\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n  gl_PointSize = 2.5 + (2.5 * random);\n}\n",
        W =
          "\nuniform vec3 uColorPrimary;\nuniform vec3 uColorSecondary;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  vec3 color = mix(uColorPrimary, uColorSecondary, vRandom);\n  float alpha = clamp(vRandom, 0.0, 0.5);\n  gl_FragColor = vec4(color, 0.5 + x);\n}\n";
      function Player() {
        let { controls: e } = useGameState();
        return (
          (0, S.A)((t, n) => {
            if (!en.current) return;
            let a = (e.current.shift ? 2 : 1) * n,
              i = en.current.position.y,
              r = en.current.position.x;
            if (e.current.up | e.current.down) {
              let t = i + (e.current.up ? 2 * a : -2 * a);
              if (t > 3.5 || t < -3.5) return;
              en.current.position.y = t;
            }
            if (e.current.left | e.current.right) {
              let t = r + (e.current.left ? -2 * a : 2 * a);
              if (t > 6.5 || t < -6.5) return;
              en.current.position.x = t;
            }
          }),
          (0, i.jsxs)("group", {
            ref: en,
            "position-x": -4,
            children: [
              (0, i.jsx)(z, {}),
              (0, i.jsx)(Pixel, {}),
              (0, i.jsx)(Pixel, { x: -1, y: -1 }),
              (0, i.jsx)(Pixel, { x: -1, y: 0 }),
              (0, i.jsx)(Pixel, { x: -1, y: 1 }),
              (0, i.jsx)(Pixel, { x: -2, y: -1 }),
              (0, i.jsx)(Pixel, { x: -2, y: 0, color: "#63e" }),
              (0, i.jsx)(Pixel, { x: -2, y: 1 }),
              (0, i.jsx)(Pixel, { x: -3, y: -2 }),
              (0, i.jsx)(Pixel, { x: -3, y: -1 }),
              (0, i.jsx)(Pixel, { x: -3, y: 0 }),
              (0, i.jsx)(Pixel, { x: -3, y: 1 }),
              (0, i.jsx)(Pixel, { x: -3, y: 2 }),
              (0, i.jsx)(Pixel, { x: -4, y: 3 }),
              (0, i.jsx)(Pixel, { x: -4, y: 2 }),
              (0, i.jsx)(Pixel, { x: -4, y: 1 }),
              (0, i.jsx)(Pixel, { x: -4, y: -1 }),
              (0, i.jsx)(Pixel, { x: -4, y: -2 }),
              (0, i.jsx)(Pixel, { x: -4, y: -3 }),
              (0, i.jsx)(Pixel, { x: -5, y: 3 }),
              (0, i.jsx)(Pixel, { x: -5, y: -3 }),
            ],
          })
        );
      }
      function Pixel(e) {
        let { x: t = 0, y: n = 0, color: a = "white" } = e;
        return (0, i.jsxs)("mesh", {
          "position-x": 0.06 * t,
          "position-y": 0.06 * n,
          "position-z": 0.5,
          children: [
            (0, i.jsx)("planeGeometry", { args: [0.06, 0.06] }),
            (0, i.jsx)("meshBasicMaterial", { color: a }),
          ],
        });
      }
      function Explosions() {
        let [e, t] = (0, p.useState)([]);
        return (
          (0, p.useEffect)(() => {
            let handleExplosion = (e) => {
                t((t) => [
                  ...t,
                  { id: Math.random(), position: e.detail.position },
                ]);
              },
              removeExplosion = (e) => {
                let { detail: n } = e,
                  { id: a } = n;
                t((e) => e.filter((e) => e.id !== a));
              };
            return (
              window.addEventListener("EXPLOSION", handleExplosion),
              window.addEventListener("EXPLOSION_COMPLETE", removeExplosion),
              () => {
                window.removeEventListener("EXPLOSION", handleExplosion),
                  window.removeEventListener(
                    "EXPLOSION_COMPLETE",
                    removeExplosion,
                  );
              }
            );
          }, []),
          e.map((e) => (0, i.jsx)(V, { explosion: e }, e.id))
        );
      }
      let V = (0, p.memo)(function (e) {
          let { explosion: t } = e,
            n = (0, p.useRef)(),
            a = (0, p.useRef)(),
            r = (0, p.useMemo)(() => {
              let e = new Float32Array(75),
                t = new Float32Array(25),
                n = new Float32Array(25),
                a = new Float32Array(25);
              for (let i = 0; i < 25; i++)
                (e[3 * i + 0] = 0),
                  (e[3 * i + 1] = 0),
                  (e[3 * i + 2] = 0),
                  (t[i] = randomFloatBetween(-1, 1)),
                  (n[i] = randomFloatBetween(-1, 1)),
                  (a[i] = randomFloatBetween(0, 1));
              let i = new b.BufferGeometry();
              return (
                i.setAttribute("position", new b.BufferAttribute(e, 3)),
                i.setAttribute("xDirection", new b.BufferAttribute(t, 1)),
                i.setAttribute("yDirection", new b.BufferAttribute(n, 1)),
                i.setAttribute("random", new b.BufferAttribute(a, 1)),
                i
              );
            }, []);
          return (
            (0, S.A)((e, i) => {
              let { clock: r } = e;
              a.current || (a.current = r.elapsedTime);
              let s = r.elapsedTime - a.current;
              if (s > 2) {
                let e = new CustomEvent("EXPLOSION_COMPLETE", {
                  detail: { id: t.id },
                });
                window.dispatchEvent(e);
              }
              n.current && (n.current.uniforms.uTime.value = s);
            }),
            (0, i.jsxs)("points", {
              position: t.position,
              children: [
                (0, i.jsx)("bufferGeometry", { attach: "geometry", ...r }),
                (0, i.jsx)("shaderMaterial", {
                  ref: n,
                  transparent: !0,
                  vertexShader: G,
                  fragmentShader: H,
                  uniforms: {
                    uTime: { value: 0 },
                    uColor: { value: new b.Color("#8C61FF") },
                  },
                }),
              ],
            })
          );
        }),
        G =
          "\nuniform float uTime;\nattribute float xDirection;\nattribute float yDirection;\nattribute float random;\n\nvarying float vRandom;\n\nvoid main() {\n  vRandom = random;\n  float speed = 0.8 + (0.8 * random);\n  vec3 particlePosition = position;\n  particlePosition.x += xDirection * uTime * speed;\n  particlePosition.y += yDirection * uTime * speed;\n  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectedPosition = projectionMatrix * viewPosition;\n\n  gl_Position = projectedPosition;\n  gl_PointSize = 5.0 + (2.0 * random);\n}\n",
        H =
          "\nuniform float uTime;\nuniform vec3 uColor;\nvarying float vRandom;\n\nvoid main() {\n  float speed = 0.8;\n  vec3 white = vec3(1.0, 1.0, 1.0);\n  vec3 color = mix(white, uColor, vRandom);\n  float alpha = clamp(1.0 - uTime, 0.0, 1.0);\n  gl_FragColor = vec4(color, alpha);\n}\n",
        K = (0, p.memo)(function () {
          let e = (0, p.useRef)(),
            t = (0, p.useMemo)(() => {
              let e = new Float32Array(1500),
                t = new Float32Array(500);
              for (let n = 0; n < 500; n++)
                (e[3 * n] = Math.random() - 0.5),
                  (e[3 * n + 1] = Math.random() - 0.5),
                  (e[3 * n + 2] = Math.random() - 0.5),
                  (t[n] = Math.random());
              let n = new b.BufferGeometry();
              return (
                n.setAttribute("position", new b.BufferAttribute(e, 3)),
                n.setAttribute("random", new b.BufferAttribute(t, 1)),
                n
              );
            }, []);
          return (
            (0, S.A)((t) => {
              let { clock: n } = t;
              e.current.uniforms.uTime.value = n.getElapsedTime();
            }),
            (0, i.jsxs)("points", {
              scale: [20, 10, 1],
              children: [
                (0, i.jsx)("bufferGeometry", { attach: "geometry", ...t }),
                (0, i.jsx)("shaderMaterial", {
                  ref: e,
                  transparent: !0,
                  vertexShader: Q,
                  fragmentShader: Y,
                  uniforms: { uTime: { value: 0 } },
                }),
              ],
            })
          );
        }),
        Q =
          "\nuniform float uTime;\nattribute float random;\nvarying float vRandom;\n\nvoid main() {\n  vRandom = random;\n  float speed = 0.03;\n  speed = speed + (speed * random);\n  vec3 pos = position;\n  pos.x -= uTime * speed;\n  pos.x = -0.5 + mod(pos.x, 1.0);\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n  gl_PointSize = 2.0 + (2.0 * random);\n}\n",
        Y =
          "\nvarying float vRandom;\n\nvoid main() {\n  float alpha = clamp(vRandom, 0.0, 0.5);\n  gl_FragColor = vec4(1.0, 1.0, 1.0, alpha);\n}\n",
        X = (0, p.memo)(function () {
          let e = (0, p.useRef)(),
            t = (0, p.useMemo)(() => {
              let e = new Float32Array(3e3),
                t = new Float32Array(1e3);
              for (let n = 0; n < 1e3; n++)
                (e[3 * n] = Math.random() - 0.5),
                  (e[3 * n + 1] = Math.random() - 0.5),
                  (e[3 * n + 2] = Math.random() - 0.5),
                  (t[n] = Math.random());
              let n = new b.BufferGeometry();
              return (
                n.setAttribute("position", new b.BufferAttribute(e, 3)),
                n.setAttribute("random", new b.BufferAttribute(t, 1)),
                n
              );
            }, []);
          return (
            (0, S.A)((t) => {
              let { clock: n } = t;
              e.current.uniforms.uTime.value = n.getElapsedTime();
            }),
            (0, i.jsxs)("group", {
              "position-x": -5.3,
              children: [
                (0, i.jsxs)("points", {
                  scale: [1, 10, 1],
                  children: [
                    (0, i.jsx)("bufferGeometry", { attach: "geometry", ...t }),
                    (0, i.jsx)("shaderMaterial", {
                      ref: e,
                      transparent: !0,
                      vertexShader: J,
                      fragmentShader: $,
                      uniforms: {
                        uTime: { value: 0 },
                        uColor: { value: new b.Color("#8C61FF") },
                      },
                    }),
                  ],
                }),
                (0, i.jsxs)("mesh", {
                  "position-z": 0.1,
                  "position-x": -0.1,
                  children: [
                    (0, i.jsx)("planeGeometry", { args: [0.5, 10] }),
                    (0, i.jsx)("shaderMaterial", {
                      transparent: !0,
                      vertexShader: ee,
                      fragmentShader: et,
                      uniforms: { uColor: { value: new b.Color("#6F47DC") } },
                    }),
                  ],
                }),
              ],
            })
          );
        }),
        J =
          "\nuniform float uTime;\nattribute float random;\nvarying float vRandom;\nvarying float x;\n\nvoid main() {\n  vRandom = random;\n  float speed = 0.1;\n  speed = speed + (speed * random);\n  vec3 pos = position;\n  pos.x += uTime * speed;\n  pos.x = -0.5 + mod(pos.x, 1.0);\n  x = pos.x;\n  vec4 modelPosition = modelMatrix * vec4(pos, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n  gl_PointSize = 2.5 + (2.5 * random);\n}\n",
        $ =
          "\nvarying float vRandom;\nuniform vec3 uColor;\nvarying float x;\n\nvoid main() {\n  float alpha = x * (1.0 - (abs(x) * 2.0));\n  vec3 white = vec3(1.0);\n  vec3 color = mix(white, uColor, vRandom);\n  gl_FragColor = vec4(color, 1.0 - (0.5 + x));\n}\n",
        ee =
          "\nvarying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  vec4 modelPosition = modelMatrix * vec4(position, 1.0); \n  vec4 viewPosition = viewMatrix * modelPosition;\n  gl_Position = projectionMatrix * viewPosition;\n}\n",
        et =
          "\nvarying vec2 vUv;\nuniform vec3 uColor;\n\nvoid main() {\n  gl_FragColor = vec4(uColor, 1.0- vUv.x);\n}\n";
      function Zone(e) {
        let { name: t, position: n } = e;
        return (0, i.jsx)(C.ib, {
          position: n,
          colliders: "cuboid",
          name: t,
          sensor: !0,
          children: (0, i.jsxs)("mesh", {
            children: [
              (0, i.jsx)("boxGeometry", { args: [0.5, 10, 1] }),
              (0, i.jsx)("meshBasicMaterial", {
                color: "white",
                opacity: 0,
                transparent: !0,
              }),
            ],
          }),
        });
      }
      function Play() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(HUD, {}),
            (0, i.jsxs)(E.Xz, {
              dpr: window.devicePixelRatio,
              className: v().canvas,
              camera: { fov: 10, position: [0, 0, 50] },
              children: [
                (0, i.jsx)(K, {}),
                (0, i.jsx)(X, {}),
                (0, i.jsx)(p.Suspense, {
                  fallback: null,
                  children: (0, i.jsxs)(C.wI, {
                    gravity: [0, 0, 0],
                    children: [
                      (0, i.jsx)(Player, {}),
                      (0, i.jsx)(Bullets, {}),
                      (0, i.jsx)(Explosions, {}),
                      (0, i.jsx)(DataStream, {}),
                      (0, i.jsx)(Zone, {
                        name: "deadZone",
                        position: [-6, 0, 0],
                      }),
                      (0, i.jsx)(Zone, {
                        name: "bounds",
                        position: [12, 0, 0],
                      }),
                      (0, i.jsx)(Zone, {
                        name: "bounds",
                        position: [-9, 0, 0],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function HUD() {
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(Score, {}),
            (0, i.jsxs)("div", {
              className: v().hudBottom,
              children: [
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("span", {
                      className: v().hudLabel,
                      children: "Move",
                    }),
                    (0, i.jsx)("span", {
                      className: v().hudValue,
                      children: "WASD",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("span", {
                      className: v().hudLabel,
                      children: "Shoot",
                    }),
                    (0, i.jsx)("span", {
                      className: v().hudValue,
                      children: "Space",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)("span", {
                      className: v().hudLabel,
                      children: "Boost",
                    }),
                    (0, i.jsx)("span", {
                      className: v().hudValue,
                      children: "Shift",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function Score() {
        let { score: e } = useGame();
        return (0, i.jsxs)("div", {
          className: v().score,
          children: [
            (0, i.jsx)("span", { className: v().hudLabel, children: "Score" }),
            (0, i.jsx)("span", { className: v().hudValue, children: e }),
          ],
        });
      }
      var Game_Arrows = (e) =>
        (0, i.jsx)("svg", {
          width: 42,
          height: 42,
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "m18 4 3-3 3 3M4 24l-3-3 3-3M18 38l3 3 3-3M38 24l3-3-3-3",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        });
      let en = (0, p.createRef)(),
        ea = new w.Howl({
          src: ["/audio/pii/music.mp3"],
          loop: !0,
          volume: 0.5,
        });
      function Game(e) {
        let { onQuit: t } = e,
          n = (0, h.s)(),
          a = useGameState(),
          handleQuit = () => {
            ea.stop(), t();
          };
        return ((0, p.useEffect)(
          () => (
            ea.playing() || ea.play(),
            (document.body.style.overflow = "hidden"),
            () => {
              document.body.style.overflow = "visible";
            }
          ),
          [],
        ),
        n)
          ? (0, i.jsx)(j.Provider, {
              value: a,
              children: (0, i.jsxs)("div", {
                className: v().game,
                "data-playing": a.stage === f,
                children: [
                  (0, i.jsxs)("div", {
                    className: v().screen,
                    children: [
                      a.stage === y && (0, i.jsx)(Menu, { onQuit: handleQuit }),
                      a.stage === _ &&
                        (0, i.jsx)(GameOver, { onQuit: handleQuit }),
                      a.stage === f && (0, i.jsx)(Play, {}),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: v().controls,
                    children: [
                      (0, i.jsx)(JoyStick, {}),
                      (0, i.jsxs)("div", {
                        className: v().buttons,
                        children: [
                          (0, i.jsx)(SpecialWeaponButton, {}),
                          (0, i.jsx)(ShootButton, {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      }
      function SpecialWeaponButton() {
        return (0, i.jsx)("div", {
          className: v().controllerButton,
          "data-variant": "special",
          onTouchStart: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !0 } });
            window.dispatchEvent(e);
          },
          onTouchEnd: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !1 } });
            window.dispatchEvent(e);
          },
          children: "B",
        });
      }
      function ShootButton() {
        return (0, i.jsx)("div", {
          className: v().controllerButton,
          onTouchStart: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !0 } });
            window.dispatchEvent(e);
          },
          onTouchEnd: () => {
            let e = new CustomEvent("CONTROLS", { detail: { shoot: !1 } });
            window.dispatchEvent(e);
          },
          children: "A",
        });
      }
      function JoyStick() {
        return (0, i.jsx)("div", {
          onTouchStart: (e) => {
            e.preventDefault();
            let t = e.touches[0],
              handleMove = (e) => {
                e.preventDefault();
                let n = e.touches[0],
                  a = n.clientX - t.clientX,
                  i = n.clientY - t.clientY,
                  r = Math.abs(i) > 20,
                  s = Math.abs(a) > 20,
                  l = new CustomEvent("JOYSTICK", {
                    detail: {
                      up: r && i < 0,
                      down: r && i > 0,
                      left: s && a < 0,
                      right: s && a > 0,
                    },
                  });
                window.dispatchEvent(l);
              },
              handleEnd = (e) => {
                e.preventDefault();
                let t = new CustomEvent("JOYSTICK", {
                  detail: { up: !1, down: !1, left: !1, right: !1 },
                });
                window.dispatchEvent(t),
                  e.target.removeEventListener("touchmove", handleMove),
                  e.target.removeEventListener("touchend", handleEnd);
              };
            e.target.addEventListener("touchmove", handleMove),
              e.target.addEventListener("touchend", handleEnd);
          },
          className: v().control,
          children: (0, i.jsx)(Game_Arrows, {}),
        });
      }
      function Menu(e) {
        let { onQuit: t } = e,
          { play: n } = useGame();
        return (0, i.jsxs)("div", {
          className: v().menu,
          children: [
            (0, i.jsxs)("h1", {
              children: ["Data ", (0, i.jsx)("br", {}), "Defender"],
            }),
            (0, i.jsx)("p", {
              children:
                "Prevent a breach by encrypting any sensitive data before it reaches your server.",
            }),
            (0, i.jsx)("button", { onClick: n, children: "Play" }),
            (0, i.jsx)("button", { onClick: t, children: "quit" }),
          ],
        });
      }
      let ei = new w.Howl({ src: ["/audio/pii/gameOver.mp3"], volume: 2 });
      function GameOver(e) {
        let { onQuit: t } = e,
          { play: n, score: a } = useGame();
        return (
          (0, p.useEffect)(() => {
            ei.playing() || ei.play();
          }, []),
          (0, i.jsxs)("div", {
            className: v().menu,
            children: [
              (0, i.jsx)("h1", { children: "GAME OVER" }),
              (0, i.jsxs)("p", { children: ["Score: ", a] }),
              (0, i.jsx)("p", {
                children:
                  "Prevent a data breach by encrypting any PII before it reaches your server.",
              }),
              (0, i.jsx)("button", { onClick: n, children: "Play Again" }),
              (0, i.jsx)("button", { onClick: t, children: "quit" }),
            ],
          })
        );
      }
      var er = n(37519),
        es = n(35800),
        el = n(62811);
      function Hero() {
        let [e, t] = (0, p.useState)(!1),
          { openSalesForm: n } = (0, p.useContext)(er.G);
        return (0, i.jsxs)(o.Z, {
          className: u().hero,
          children: [
            (0, i.jsx)(es.ErrorBoundary, {
              fallback: (0, i.jsx)("div", {}),
              children: e && (0, i.jsx)(Game, { onQuit: () => t(!1) }),
            }),
            (0, i.jsxs)(c.Z, {
              className: u().container,
              children: [
                (0, i.jsx)(el.Z, {
                  parent: "Solution",
                  child: "Encryption as a Service",
                }),
                (0, i.jsx)(q.Z, {
                  as: "h1",
                  className: u().title,
                  children: "Effortless encryption for developers",
                }),
                (0, i.jsx)(q.Z, {
                  as: "p",
                  className: u().subText,
                  children:
                    "Encryption as a Service gives developers a set of highly secure building blocks that can be used to encrypt, decrypt and process sensitive customer data.",
                }),
                (0, i.jsxs)("div", {
                  children: [
                    (0, i.jsx)(d.Z, {
                      size: "large",
                      onClick: () => n({ context: "HIPAA — Hero" }),
                      children: "API docs",
                    }),
                    (0, i.jsx)(d.Z, {
                      type: "transparent",
                      size: "large",
                      href: "https://app.evervault.com/register",
                      as: "a",
                      target: "_blank",
                      children: "Try for free",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: u().graphic,
                  children: (0, i.jsx)(Graphic, {
                    onScan: () => {
                      setTimeout(() => {
                        t(!0);
                      }, [1e3]);
                    },
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var eo = n(16893),
        eq = n(84297);
      let ec = (0, eq.Z)("ShieldHalf", [
          [
            "path",
            { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10", key: "1irkt0" },
          ],
          ["path", { d: "M12 22V2", key: "zs6s6o" }],
        ]),
        ed = (0, eq.Z)("Blocks", [
          [
            "rect",
            {
              width: "7",
              height: "7",
              x: "14",
              y: "3",
              rx: "1",
              key: "6d4xhi",
            },
          ],
          [
            "path",
            {
              d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
              key: "1fpvtg",
            },
          ],
        ]),
        em = (0, eq.Z)("FileSignature", [
          [
            "path",
            {
              d: "M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5",
              key: "kd5d3",
            },
          ],
          ["path", { d: "M8 18h1", key: "13wk12" }],
          [
            "path",
            {
              d: "M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z",
              key: "johvi5",
            },
          ],
        ]),
        eu = [
          {
            title: "Benefits of evervault",
            features: [
              {
                icon: (0, i.jsx)(ec, { width: 16 }),
                title: "Dual Security Model",
                description:
                  "We store encryption keys, you store encrypted data. Using evervault means your architecture stays the same, but your sensitive data is encrypted.",
              },
              {
                icon: (0, i.jsx)(ed, { width: 16 }),
                title: "Plug-and-Play",
                description:
                  "evervault Primitives are like building blocks for developers. Combine different Primitives to construct any encryption-powered data security or compliance workflow.",
              },
              {
                icon: (0, i.jsx)(em, { width: 16 }),
                title: "Write and Deploy in Minutes",
                description:
                  "Encryption as a Service was built so that developers could spend less time on data security, and more time solving core engineering problems.",
              },
            ],
          },
        ],
        ep = [
          "encrypt PII",
          "secure HIPAA data",
          "encrypt passports",
          "process encrypted data",
          "encrypt access tokens",
          "share encrypted data",
          "encrypt medical records",
          "use encrypted data",
        ];
      var eh = n(79190),
        ex = n.n(eh);
      function randomChars(e) {
        return Array.from({ length: e }, () =>
          String.fromCharCode(Math.floor(26 * Math.random()) + 97),
        ).join("");
      }
      function Benefits() {
        let e = (0, p.useRef)(),
          {
            chars: t,
            scramble: n,
            cancel: a,
          } = (function (e) {
            let [t, n] = (0, p.useState)(0),
              [a, i] = (0, p.useState)({ prefix: e[0], suffix: "" }),
              r = (0, p.useRef)(null),
              s = (0, p.useCallback)(() => {
                clearInterval(r.current),
                  i({ prefix: "", suffix: randomChars(e[t].length) }),
                  (r.current = setInterval(() => {
                    i((n) => {
                      let { prefix: a } = n,
                        i = e[t].charAt(a.length);
                      return "" === i
                        ? (clearInterval(r.current), n)
                        : {
                            prefix: a + i,
                            suffix: randomChars(e[t].length - 1 - a.length),
                          };
                    });
                  }, 50));
              }, [e, t]),
              l = (0, p.useCallback)(() => {
                i({ prefix: e[t], suffix: "" }), clearInterval(r.current);
              }, [e, t]);
            return (
              (0, p.useEffect)(() => {
                let t = setInterval(() => {
                  n((t) => (t + 1) % e.length);
                }, 3e3);
                return () => clearInterval(t);
              }, [e]),
              (0, p.useEffect)(() => (s(), () => l()), [t, s, l]),
              { chars: a, scramble: s, cancel: l }
            );
          })(ep),
          r = (0, eo.Y)(e);
        return (
          (0, p.useEffect)(() => {
            r ? n(ep) : a();
          }, [r]),
          (0, i.jsx)("div", {
            className: ex().container,
            ref: e,
            children: (0, i.jsxs)("div", {
              className: ex().maxWidthWrapper,
              children: [
                (0, i.jsx)("div", {
                  className: ex().heading,
                  children: (0, i.jsxs)(q.Z, {
                    as: "h2",
                    children: [
                      "Use evervault to",
                      (0, i.jsx)("br", {}),
                      t.prefix,
                      (0, i.jsx)("span", {
                        className: ex().suffix,
                        children: t.suffix,
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)("div", {
                  children: eu.map((e) => {
                    let { title: t, features: n } = e;
                    return (0, i.jsxs)(
                      "div",
                      {
                        children: [
                          (0, i.jsx)("div", { className: ex().divider }),
                          (0, i.jsx)("div", {
                            className: ex().features,
                            children: n.map((e) => {
                              let { icon: t, title: n, description: a } = e;
                              return (0, i.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, i.jsxs)("div", {
                                      className: ex().featureTitle,
                                      children: [
                                        t,
                                        (0, i.jsx)("h5", { children: n }),
                                      ],
                                    }),
                                    (0, i.jsx)("p", { children: a }),
                                  ],
                                },
                                n,
                              );
                            }),
                          }),
                        ],
                      },
                      t,
                    );
                  }),
                }),
              ],
            }),
          })
        );
      }
      var ev = n(5152),
        ey = n.n(ev),
        ef = n(80034),
        e_ = n.n(ef);
      let ej = ey()(() => n.e(5001).then(n.bind(n, 5001)), {
        loadableGenerated: { webpack: () => [5001] },
        ssr: !1,
      });
      var eg = n(53223),
        ew = n.n(eg),
        eE = n(32233),
        eC = n(11544),
        eb = n(56190),
        eS = n(23191),
        ek = n(19037),
        eN = n(75964),
        eP = n(77387),
        eL = n(51673),
        eM = n.n(eL);
      let eT = ey()(() => n.e(3847).then(n.bind(n, 63847)), {
        loadableGenerated: { webpack: () => [63847] },
        ssr: !1,
      });
      function FunctionsAnimation() {
        let [e, t] = (0, p.useState)(void 0),
          [n, a] = (0, p.useState)(void 0),
          [r, s] = (0, p.useState)([]),
          [l, o] = (0, p.useState)("server.js"),
          [q, c] = (0, p.useState)("validateEmail.js"),
          d = (0, eE.E)(),
          animate = async () => {
            t("animateIn"),
              await wait(1e3),
              await d.start({
                boxShadow: [
                  "0px 0px 0px 0px rgba(255,255,255,.3)",
                  "0px 0px 0px 20px rgba(255,255,255,0)",
                ],
                transition: { duration: 1, ease: "easeOut" },
              }),
              t("animateOut"),
              a("animateIn"),
              await wait(1e3),
              a("animateOut");
            let e = [...r];
            e.unshift({ id: 10 * Math.random(), language: l }),
              s(e),
              await wait(1e3),
              t(void 0),
              a(void 0);
          },
          wait = async (e) =>
            new Promise((t) => {
              setTimeout(() => {
                t();
              }, e);
            });
        return (
          (0, p.useEffect)(
            () =>
              "validateEmail.js" === q && "server.py" === l
                ? c("validate-email.py")
                : "validate-email.py" === q && "server.js" === l
                  ? c("validateEmail.js")
                  : void 0,
            [l],
          ),
          (0, p.useEffect)(
            () =>
              "server.js" === l && "validate-email.py" === q
                ? o("server.py")
                : "server.py" === l && "validateEmail.js" === q
                  ? o("server.js")
                  : void 0,
            [q],
          ),
          (0, i.jsxs)("div", {
            className: eM().container,
            children: [
              (0, i.jsxs)("div", {
                className: eM().serverCode,
                children: [
                  (0, i.jsxs)("div", {
                    className: eM().playgroundControl,
                    children: [
                      (0, i.jsxs)("div", {
                        className: eM().playground,
                        children: [
                          (0, i.jsx)(eS.Z, { size: 12, className: "me-4" }),
                          "Playground",
                        ],
                      }),
                      (0, i.jsxs)(eT, {
                        onClick: animate,
                        type: "tertiary",
                        size: "extra-small",
                        pulse: !0,
                        children: [
                          (0, i.jsx)(ek.Z, { size: 12, className: "me-4" }),
                          "Run",
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(eN.Z, {
                    tabs: ["server.js", "server.py"],
                    onChange: (e) => o(e),
                    value: l,
                  }),
                  (0, i.jsxs)(eC.M, {
                    mode: "wait",
                    children: [
                      "server.js" === l &&
                        (0, i.jsx)(
                          R.E.div,
                          {
                            initial: { opacity: 0, y: -5 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 5 },
                            transition: { duration: 0.3 },
                            children: (0, i.jsx)(eb.Z, {
                              language: "javascript",
                              style: eP.Z,
                              showLineNumbers: !0,
                              wrapLines: !0,
                              customStyle: { background: "transparent" },
                              lineProps: (t) => {
                                let a;
                                let i = {};
                                return (
                                  1 === t &&
                                    e &&
                                    ((i.paddingBottom = "3px"),
                                    (i.paddingTop = "1px"),
                                    (i.borderRadius = "3px"),
                                    (a = e)),
                                  2 === t &&
                                    n &&
                                    ((i.paddingBottom = "3px"),
                                    (i.paddingTop = "1px"),
                                    (i.borderRadius = "3px"),
                                    (a = n)),
                                  { style: i, "data-animate": a }
                                );
                              },
                              children:
                                "const isValid = await ev.run('validateEmail', { encrypted });\nconsole.log(isValid ? 'Valid Email' : 'Invalid Email')",
                            }),
                          },
                          "server.js-code",
                        ),
                      "server.py" === l &&
                        (0, i.jsx)(
                          R.E.div,
                          {
                            initial: { opacity: 0, y: -5 },
                            animate: { opacity: 1, y: 0 },
                            exit: { opacity: 0, y: 5 },
                            transition: { duration: 0.35 },
                            children: (0, i.jsx)(eb.Z, {
                              language: "python",
                              style: eP.Z,
                              showLineNumbers: !0,
                              wrapLines: !0,
                              customStyle: { background: "transparent" },
                              lineProps: (t) => {
                                let a;
                                let i = {};
                                return (
                                  1 === t &&
                                    e &&
                                    ((i.paddingBottom = "3px"),
                                    (i.paddingTop = "1px"),
                                    (i.borderRadius = "3px"),
                                    (a = e)),
                                  2 === t &&
                                    n &&
                                    ((i.paddingBottom = "3px"),
                                    (i.paddingTop = "1px"),
                                    (i.borderRadius = "3px"),
                                    (a = n)),
                                  { style: i, "data-animate": a }
                                );
                              },
                              children:
                                "is_valid = ev.run('validateEmail', { \"encrypted\": encrypted })\nconsole.log('Valid Email' if is_valid else 'Invalid Email')",
                            }),
                          },
                          "server.py-code",
                        ),
                    ],
                  }),
                  (0, i.jsx)("div", { className: eM().divider }),
                  (0, i.jsx)(eN.Z, {
                    tabs: ["Terminal"],
                    className: eM().terminalTabs,
                  }),
                  (0, i.jsx)(R.E.div, {
                    className: eM().terminal,
                    layout: !0,
                    layoutRoot: !0,
                    children: r.map((e, t) => {
                      let { id: n, language: a } = e;
                      return (0, i.jsxs)(
                        R.E.div,
                        {
                          layout: !0,
                          initial: { opacity: 0, y: -5 },
                          animate: { opacity: 1, y: 0 },
                          transition: {
                            delay: 0 === t ? 0.25 : 0,
                            duration: 0.25,
                          },
                          className: eM().log,
                          children: [
                            (0, i.jsx)("p", { children: "Valid Email" }),
                            (0, i.jsx)("p", {
                              children:
                                "server.js" === a
                                  ? "server.js:2"
                                  : "server.py:2",
                            }),
                          ],
                        },
                        n,
                      );
                    }),
                  }),
                ],
              }),
              (0, i.jsx)(R.E.div, {
                className: eM().functionCodeWrapper,
                animate: d,
                children: (0, i.jsxs)("div", {
                  className: eM().functionCode,
                  children: [
                    (0, i.jsx)(eN.Z, {
                      tabs: ["validateEmail.js", "validate-email.py"],
                      onChange: (e) => c(e),
                      value: q,
                    }),
                    (0, i.jsxs)(eC.M, {
                      mode: "wait",
                      children: [
                        "validateEmail.js" === q &&
                          (0, i.jsx)(
                            R.E.div,
                            {
                              initial: { opacity: 0, y: -5 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 5 },
                              transition: { duration: 0.3 },
                              children: (0, i.jsx)(eb.Z, {
                                language: "javascript",
                                style: eP.Z,
                                showLineNumbers: !0,
                                wrapLines: !0,
                                customStyle: { background: "transparent" },
                                children:
                                  "// Encrypted payloads are automatically decrypted\nexports.handler = async function({ encrypted }){\n  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]');\n  return regex.test(encrypted.emailAddress);\n};",
                              }),
                            },
                            "validateEmail.js-code",
                          ),
                        "validate-email.py" === q &&
                          (0, i.jsx)(
                            R.E.div,
                            {
                              initial: { opacity: 0, y: -5 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 5 },
                              transition: { duration: 0.3 },
                              children: (0, i.jsx)(eb.Z, {
                                language: "javascript",
                                style: eP.Z,
                                showLineNumbers: !0,
                                wrapLines: !0,
                                customStyle: { background: "transparent" },
                                children:
                                  "import re\n// Encrypted payloads are automatically decrypted\ndef handler(data, context):\n  regex = re.search('[a-z0-9]+@[a-z]+.[a-z]', data.encrypted)\n  return bool(regex)",
                              }),
                            },
                            "validate-email.py-code",
                          ),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var eA = n(93762),
        eR = n(86221),
        eB = n.n(eR);
      let eO = ey()(() => n.e(3847).then(n.bind(n, 63847)), {
        loadableGenerated: { webpack: () => [63847] },
        ssr: !1,
      });
      var eD =
          ((a = function (e) {
            let { active: t } = e,
              n = (0, eA.useEvervault)(),
              [a, r] = (0, p.useState)([]),
              [s, l] = (0, p.useState)("4242 4242 4242 4242"),
              encrypt = async () => {
                let e = await n.encrypt(s || "cardNumber"),
                  t = [...a];
                t.unshift(e), r(t);
              };
            return (0, i.jsxs)("div", {
              className: eB().container,
              "data-active": t,
              children: [
                (0, i.jsxs)("div", {
                  className: eB().text,
                  children: [
                    (0, i.jsx)("h3", {
                      className: "mb-4",
                      children: "UI Components",
                    }),
                    (0, i.jsx)("p", {
                      className: "mb-0",
                      children:
                        "Embeddable components which minimize your compliance burden by allowing you to collect and display cardholder data without touching it in plaintext.",
                    }),
                    (0, i.jsx)(d.Z, {
                      className: "mt-16",
                      type: "tertiary",
                      href: "https://docs.evervault.com/products/inputs",
                      target: "_blank",
                      size: "small",
                      children: "Read the docs",
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: eB().inputsContainer,
                  children: [
                    (0, i.jsxs)("div", {
                      className: eB().inputs,
                      children: [
                        (0, i.jsxs)("div", {
                          className: eB().playground,
                          children: [
                            (0, i.jsx)(eS.Z, { size: 12, className: "me-4" }),
                            "Playground",
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: eB().inputContainer,
                          children: [
                            (0, i.jsx)("input", {
                              className: eB().input,
                              placeholder: "4242424242424242",
                              value: s,
                              onChange: (e) => l(e.target.value),
                            }),
                            (0, i.jsx)("div", {
                              className: eB().encryptButtonContainer,
                              children: (0, i.jsxs)(eO, {
                                onClick: encrypt,
                                size: "extra-small",
                                type: "tertiary",
                                className: "me-12",
                                pulse: !0,
                                children: [
                                  (0, i.jsx)(ek.Z, {
                                    size: 12,
                                    className: "me-4",
                                  }),
                                  "Encrypt",
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: eB().terminal,
                      children: [
                        (0, i.jsx)(eN.Z, { tabs: ["Terminal"] }),
                        (0, i.jsx)(R.E.div, {
                          className: eB().terminalOutput,
                          layout: !0,
                          layoutRoot: !0,
                          children: a.map((e, t) =>
                            (0, i.jsxs)(
                              R.E.p,
                              {
                                layout: "position",
                                initial: { opacity: 0, y: -5 },
                                animate: { opacity: 1, y: 0 },
                                transition: {
                                  delay: 0 === t ? 0.25 : 0,
                                  duration: 0.25,
                                },
                                className: eB().encryptedString,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: eB().key,
                                    children: "Card number:",
                                  }),
                                  " ",
                                  e,
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
          (e) => {
            let { active: t } = e;
            return (0, i.jsx)(eA.EvervaultProvider, {
              teamId: "team_40d916301f58",
              appId: "app_f8359ae223fb",
              children: (0, i.jsx)(a, { active: t }),
            });
          }),
        eF = n(66820),
        eI = n(87290),
        eZ = n.n(eI);
      let ez = [
        { key: "ssn", plaintext: "123-45-6789", encrypted: "ev:ybCk5..." },
        {
          key: "email",
          plaintext: "claude@shannon.org",
          encrypted: "ev:F/kSPiMA8a=f...",
        },
        {
          key: "password",
          plaintext: "shannon10e120num",
          encrypted: "ev:DjOpXSdjn4...",
        },
        { key: "phone", plaintext: "+123456789", encrypted: "ev:iO=x..." },
        {
          key: "pan",
          plaintext: "4242424242424242",
          encrypted: "ev:l$9jAtm1SW...",
        },
        {
          key: "name",
          plaintext: "Claude Shannon",
          encrypted: "ev:7pB2&6hq...",
        },
        { key: "ssn", plaintext: "123-45-6789", encrypted: "ev:ybCk5..." },
        {
          key: "email",
          plaintext: "claude@shannon.org",
          encrypted: "ev:F/kSPiMA8a=f...",
        },
        {
          key: "password",
          plaintext: "shannon10e120num",
          encrypted: "ev:DjOpXSdjn4...",
        },
        { key: "phone", plaintext: "+123456789", encrypted: "ev:iO=x..." },
        {
          key: "pan",
          plaintext: "4242424242424242",
          encrypted: "ev:l$9jAtm1SW...",
        },
        {
          key: "name",
          plaintext: "Claude Shannon",
          encrypted: "ev:7pB2&6hq...",
        },
      ];
      var eU = n(76685),
        eW = n.n(eU),
        eV = n(45338);
      let eG = {
        primitives: [
          function (e) {
            let { active: t } = e,
              [n, a] = (0, eF.H)(),
              r = (0, eE.E)(),
              [s, l] = (0, p.useState)(0),
              o = (0, B.c)(0),
              q = (0, p.useRef)();
            return (
              (0, p.useEffect)(() => {
                if (!window.safari)
                  return (
                    (q.current = setTimeout(() => {
                      a(o, o.get() - 40, {
                        duration: 0.35,
                        onComplete: () => {
                          s === ez.length / 2 - 1 ? (o.set(0), l(0)) : l(s + 1);
                        },
                      });
                    }, 1750)),
                    () => {
                      clearTimeout(q.current);
                    }
                  );
              }, [s]),
              (0, i.jsxs)("div", {
                className: eZ().container,
                "data-active": t,
                ref: n,
                children: [
                  (0, i.jsxs)("div", {
                    className: eZ().text,
                    children: [
                      (0, i.jsx)("h3", {
                        className: "mb-4",
                        children: "Relay",
                      }),
                      (0, i.jsx)("p", {
                        className: "mb-0",
                        children:
                          "An encryption proxy which can be configured to encrypt or decrypt data within a network request. No additional configuration required.",
                      }),
                      (0, i.jsx)(d.Z, {
                        className: "mt-16",
                        type: "tertiary",
                        href: "https://docs.evervault.com/primitives/inbound-relay",
                        target: "_blank",
                        size: "small",
                        children: "Read the docs",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: eZ().animation,
                    children: [
                      (0, i.jsxs)("div", {
                        className: eZ().server,
                        children: [
                          (0, i.jsx)("div", {
                            className: eZ().console,
                            children: (0, i.jsxs)("p", {
                              children: [
                                "Server listening on ",
                                (0, i.jsx)("span", { children: "port 8080" }),
                              ],
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: eZ().cursor,
                            children: "▮",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: eZ().requestsContainer,
                        children: [
                          (0, i.jsx)(R.E.div, {
                            className: eZ().requests,
                            style: { y: o },
                            transition: { duration: 0.35 },
                            children: ez.map((e, t) => {
                              let { plaintext: n, key: a, encrypted: l } = e;
                              return (0, i.jsx)(
                                "div",
                                {
                                  className: eZ().requestBlock,
                                  style: {
                                    gridColumnStart: (t % 2) + 1,
                                    gridRowStart: t + 1,
                                    justifyContent:
                                      t % 2 ? "flex-start" : "flex-end",
                                  },
                                  children: (0, i.jsxs)("div", {
                                    custom: t,
                                    animate: r,
                                    className: eZ().request,
                                    id: "request-".concat(t),
                                    children: [
                                      (0, i.jsxs)("p", { children: [a, ":"] }),
                                      (0, i.jsxs)("div", {
                                        className: eZ().valueContainer,
                                        children: [
                                          (0, i.jsx)(R.E.p, {
                                            initial: { y: 0, opacity: 0 },
                                            animate: {
                                              y: s + 3 > t ? -16 : 0,
                                              opacity: s + 3 > t ? 0 : 1,
                                            },
                                            transition: {
                                              delay: 0 === s ? 0 : 0.75,
                                              duration: 0 === s ? 0 : 0.3,
                                            },
                                            children: n,
                                          }),
                                          (0, i.jsx)(R.E.p, {
                                            initial: { y: 16, opacity: 0 },
                                            animate: {
                                              y: s + 3 > t ? 0 : 16,
                                              opacity: s + 3 > t ? 1 : 0,
                                            },
                                            className: eZ().encryptedValue,
                                            transition: {
                                              delay: 0 === s ? 0 : 0.75,
                                              duration: 0 === s ? 0 : 0.3,
                                            },
                                            children: l,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                },
                                "request-block-".concat(t),
                              );
                            }),
                          }),
                          (0, i.jsx)("div", { className: eZ().spinner }),
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: eZ().client,
                        children: (0, i.jsx)("div", {
                          className: eZ().toolbar,
                          children: (0, i.jsx)("div", {
                            className: eZ().addressBar,
                            children: "https://",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          function (e) {
            let { active: t } = e;
            return (0, i.jsxs)("div", {
              className: ew().container,
              "data-active": t,
              children: [
                (0, i.jsxs)("div", {
                  className: ew().text,
                  children: [
                    (0, i.jsx)("h3", {
                      className: "mb-4",
                      children: "Players",
                    }),
                    (0, i.jsx)("p", {
                      className: "mb-0",
                      children:
                        "Secure serverless functions that allow you to run logic on encrypted data, without exposing your infrastructure to sensitive information.",
                    }),
                    (0, i.jsx)(d.Z, {
                      className: "mt-16",
                      type: "tertiary",
                      href: "https://docs.evervault.com/primitives/functions",
                      target: "_blank",
                      size: "small",
                      children: "Read the docs",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: ew().animation,
                  children: (0, i.jsx)(FunctionsAnimation, {}),
                }),
              ],
            });
          },
          eD,
          function (e) {
            let { active: t } = e;
            return (0, i.jsxs)("div", {
              className: e_().container,
              "data-active": t,
              children: [
                (0, i.jsxs)("div", {
                  className: e_().text,
                  children: [
                    (0, i.jsx)("h3", { className: "mb-4", children: "Cages" }),
                    (0, i.jsx)("p", {
                      className: "mb-0",
                      children:
                        "Deploy any Docker Container to a Secure Enclave with no additional configuring or provisioning required. Verify the integrity of your code using built-in attestation.",
                    }),
                    (0, i.jsxs)("div", {
                      className: e_().buttonGroup,
                      children: [
                        (0, i.jsx)(d.Z, {
                          size: "small",
                          className: "mt-16",
                          type: "tertiary",
                          href: "/cages",
                          children: "Learn more",
                        }),
                        (0, i.jsx)(d.Z, {
                          size: "small",
                          className: "mt-16",
                          type: "transparent",
                          href: "https://docs.evervault.com/primitives/cages",
                          children: "Read the docs",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: e_().animation,
                  children: (0, i.jsx)(ej, {}),
                }),
              ],
            });
          },
        ],
        icons: [
          function (e) {
            let { active: t } = e;
            return (0, i.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              opacity: t ? 1 : 0.4,
              children: [
                (0, i.jsx)("rect", { width: "128", height: "128" }),
                (0, i.jsx)("path", {
                  d: "M91.9237 13.7622L70.2151 26.3105C67.7419 27.7401 66.2186 30.38 66.2186 33.2367V58.1515C66.2186 60.9917 67.7245 63.6189 70.1753 65.0544L91.8839 77.7701C94.381 79.2328 97.4735 79.2328 99.9706 77.7701L121.679 65.0544C124.13 63.6189 125.636 60.9917 125.636 58.1515V33.2367C125.636 30.38 124.113 27.7401 121.639 26.3105L99.9308 13.7622C97.4538 12.3304 94.4007 12.3304 91.9237 13.7622Z",
                  stroke: "white",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M66.7778 29.5476L95.9275 45.9647L124.863 28.9253",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, i.jsx)("path", {
                  d: "M95.9274 45.9363V78.9201",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  d: "M28.7051 50.2956L6.99645 62.844C4.52324 64.2736 3 66.9135 3 69.7701V94.6849C3 97.5251 4.50589 100.152 6.95663 101.588L28.6653 114.304C31.1624 115.766 34.2548 115.766 36.752 114.304L58.4606 101.588C60.9114 100.152 62.4173 97.5251 62.4173 94.6849V69.7701C62.4173 66.9135 60.894 64.2736 58.4208 62.844L36.7122 50.2956C34.2352 48.8638 31.1821 48.8638 28.7051 50.2956Z",
                  stroke: "white",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M4.03027 65.8411L32.7085 82.4985L61.3868 65.8411",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, i.jsx)("path", {
                  d: "M32.7085 82.4985V115.298",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("circle", {
                  cx: "1.88881",
                  cy: "1.88881",
                  r: "1.88881",
                  transform:
                    "matrix(0.866009 0.500028 3.1686e-05 1 79.5233 51.2886)",
                  fill: "white",
                }),
                (0, i.jsx)("path", {
                  d: "M81.1589 54.1223L61.6702 65.4631",
                  stroke: "white",
                  strokeWidth: "0.75",
                }),
              ],
            });
          },
          function (e) {
            let { active: t } = e;
            return (0, i.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              opacity: t ? 1 : 0.4,
              children: [
                (0, i.jsx)("rect", { width: "128", height: "128" }),
                (0, i.jsx)("path", {
                  d: "M60.0022 32.3064L29.0022 50.191C26.5258 51.6198 25 54.2615 25 57.1205V92.6101C25 95.4527 26.5084 98.0818 28.9624 99.5165L59.9624 117.64C62.4567 119.098 65.5433 119.098 68.0376 117.64L99.0376 99.5165C101.492 98.0818 103 95.4527 103 92.6101V57.1205C103 54.2615 101.474 51.6198 98.9978 50.191L67.9978 32.3064C65.5237 30.8791 62.4763 30.8791 60.0022 32.3064Z",
                  stroke: "white",
                  strokeWidth: "1",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M26 54.6778L64.4129 76L102 54",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, i.jsx)("path", {
                  d: "M64 76V119",
                  stroke: "white",
                  strokeOpacity: "0.3",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  d: "M60.0223 9.27945L27.514 27.9088C25.9591 28.7998 25 30.4549 25 32.247V38.4742C25 40.256 25.9483 41.9032 27.4891 42.798L59.9826 61.6671C62.4666 63.1096 65.5334 63.1096 68.0174 61.6671L100.511 42.798C102.052 41.9032 103 40.256 103 38.4742V32.247C103 30.4549 102.041 28.7998 100.486 27.9088L67.9777 9.27945C65.5138 7.86752 62.4862 7.86752 60.0223 9.27945Z",
                  stroke: "white",
                  strokeWidth: "1",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M26 30L63.8699 52L102 30",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, i.jsx)("path", {
                  d: "M64 52V63",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
              ],
            });
          },
          function (e) {
            let { active: t } = e;
            return (0, i.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              shapeRendering: "optimizeSpeed",
              opacity: t ? 1 : 0.4,
              children: [
                (0, i.jsx)("rect", { width: "128", height: "128" }),
                (0, i.jsx)("path", {
                  d: "M35.6477 6.75776L28.981 10.6393C27.1353 11.714 26 13.6887 26 15.8245V82.6755C26 84.8113 27.1353 86.786 28.981 87.8607L86.3144 121.242C88.1804 122.329 90.4863 122.329 92.3523 121.242L99.019 117.361C100.865 116.286 102 114.311 102 112.176V45.3245C102 43.1887 100.865 41.214 99.019 40.1393L41.6856 6.75776C39.8196 5.67129 37.5137 5.67129 35.6477 6.75776Z",
                  stroke: "white",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M36.9275 35.0145L33.7488 36.8513C32.6666 37.4767 32 38.6318 32 39.8818V80.5683C32 81.8091 32.657 82.9572 33.7268 83.5858L68.3633 103.939C69.4748 104.592 70.8554 104.582 71.9566 103.911L75.3135 101.868C76.3603 101.23 76.9975 100.092 76.9934 98.8665L76.8582 58.1758C76.854 56.9328 76.1909 55.7852 75.116 55.1609L40.4366 35.0184C39.3521 34.3885 38.0134 34.387 36.9275 35.0145Z",
                  stroke: "white",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  opacity: "0.4",
                  d: "M89 49V122",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  opacity: "0.4",
                  d: "M70 60V104",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
                (0, i.jsx)("path", {
                  opacity: "0.4",
                  d: "M27 13L89.0359 49L101 42.0656",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, i.jsx)("path", {
                  opacity: "0.4",
                  d: "M33 39L70.1895 60L76 56.6311",
                  stroke: "white",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
              ],
            });
          },
          function (e) {
            let { active: t } = e;
            return (0, i.jsxs)("svg", {
              width: "128",
              height: "128",
              viewBox: "0 0 128 128",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              shapeRendering: "geometricPrecision",
              opacity: t ? 1 : 0.4,
              children: [
                (0, i.jsx)("rect", { width: "128", height: "128" }),
                (0, i.jsx)("path", {
                  d: "M56.7887 10.0711L20.9781 30.8329C16.6588 33.337 14 37.9519 14 42.9445V84.2382C14 89.202 16.6285 93.7948 20.9084 96.3092L56.719 117.348C61.0969 119.92 66.5243 119.92 70.9023 117.348L106.713 96.3092C110.993 93.7947 113.621 89.202 113.621 84.2382V42.9445C113.621 37.9519 110.962 33.337 106.643 30.8329L70.8325 10.0711C66.4898 7.5533 61.1314 7.5533 56.7887 10.0711Z",
                  stroke: "white",
                  fill: t ? "rgba(255,255,255,.1)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M59.0318 28.0837L33.5017 42.841C31.0285 44.2706 29.5052 46.9105 29.5052 49.7671V79.0704C29.5052 81.9106 31.0111 84.5379 33.4619 85.9734L58.992 100.927C61.4891 102.39 64.5816 102.39 67.0787 100.927L92.6088 85.9734C95.0595 84.5379 96.5654 81.9106 96.5654 79.0704V49.7672C96.5654 46.9105 95.0422 44.2706 92.569 42.841L67.0389 28.0837C64.5619 26.6519 61.5088 26.6519 59.0318 28.0837Z",
                  fillOpacity: "1",
                  stroke: "white",
                  fill: t ? "var(--primary)" : "transparent",
                }),
                (0, i.jsx)("path", {
                  d: "M15.873 36.3143L63.475 64.0613L111.394 35.967",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                  strokeLinejoin: "bevel",
                }),
                (0, i.jsx)("path", {
                  d: "M63.6332 64.0615L63.6332 119.314",
                  stroke: "white",
                  strokeOpacity: "0.4",
                  strokeWidth: "0.75",
                  strokeLinecap: "round",
                }),
              ],
            });
          },
        ],
        labels: ["Relay", "Functions", "UI Components", "Cages"],
      };
      function Primitives() {
        let [e, t] = (0, p.useState)(0),
          n = (0, eV.QS)({
            onSwiped: function (n) {
              "Left" === n.dir && e < eG.primitives.length - 1 && t(e + 1),
                "Right" === n.dir && e > 0 && t(e - 1);
            },
          });
        return (0, i.jsx)("div", {
          className: eW().container,
          children: (0, i.jsx)("div", {
            className: eW().gradientWrapper,
            children: (0, i.jsxs)("div", {
              className: eW().maxWidthWrapper,
              children: [
                (0, i.jsxs)("div", {
                  className: eW().heading,
                  children: [
                    (0, i.jsx)(q.Z, {
                      as: "h2",
                      className: "mb-16",
                      children: "Secure data with four simple Primitives",
                    }),
                    " ",
                    (0, i.jsx)("p", {
                      children:
                        "Primitives are building blocks for developers. They're fundamental, interoperable products for constructing any data security or compliance workflow.",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: eW().controls,
                  children: (0, i.jsx)(R.E.div, {
                    className: eW().primitivesTrack,
                    animate: { x: "".concat(-(25 * e), "%") },
                    transition: {
                      type: "spring",
                      damping: 40,
                      mass: 3,
                      stiffness: 160,
                    },
                    children: eG.icons.map((n, a) =>
                      (0, i.jsxs)(
                        "button",
                        {
                          className: eW().primitive,
                          onClick: () => t(a),
                          children: [
                            (0, i.jsx)(n, { active: a === e }),
                            (0, i.jsx)("span", {
                              className: eW().label,
                              "data-active": e === a,
                              children: eG.labels[a],
                            }),
                          ],
                        },
                        "primitive-icon-".concat(a),
                      ),
                    ),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: eW().carouselWrapper,
                  ...n,
                  children: (0, i.jsx)(R.E.div, {
                    className: eW().carouselSlides,
                    animate: {
                      x: "calc("
                        .concat(-(25 * e), "% - ")
                        .concat(20 * e, "px)"),
                    },
                    transition: {
                      type: "spring",
                      damping: 40,
                      mass: 3,
                      stiffness: 160,
                    },
                    children: eG.primitives.map((t, n) =>
                      (0, i.jsx)(
                        "div",
                        {
                          className: eW().slide,
                          style: {
                            transform: "translateX(".concat(20 * n, "px)"),
                          },
                          children: (0, i.jsx)(t, { active: n === e }),
                        },
                        "primitive-".concat(n),
                      ),
                    ),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var eH = n(70406),
        eK = n(55578),
        eQ = n(83106),
        eY = n(45509),
        eX = n(87626),
        eJ = n(18660),
        e$ = n(17103),
        e1 = n(63494),
        e3 = n(57307),
        e2 = n(40146),
        e0 = n.n(e2);
      function PIIDiagrams() {
        return (0, i.jsx)(eH.h, {
          className: e0().diagrams,
          diagrams: [
            {
              value: "ENCRYPT",
              title: "Encrypt with our SDKs",
              icon: (0, i.jsx)(eJ.Z, {}),
              description:
                "Use our client or server SDKs to encrypt and decrypt sensitive data anywhere in your stack.",
              diagram: (0, i.jsx)(eK.Q, {}),
            },
            {
              value: "RELAY",
              title: "Encrypt at the edge",
              icon: (0, i.jsx)(e$.Z, {}),
              description:
                "Use Relay to encrypt data at the edge before it reaches your infrastructure.",
              diagram: (0, i.jsx)(eY.l, {}),
            },
            {
              value: "PROCESS",
              title: "Process using your own code",
              icon: (0, i.jsx)(e1.Z, {}),
              description:
                "With evervault Functions or Cages, you have the building blocks to process sensitive data using your own code or Docker containers with full code attestation guarantees.",
              diagram: (0, i.jsx)(eQ.q, {}),
            },
            {
              value: "SHARE",
              title: "Share sensitive data anywhere",
              icon: (0, i.jsx)(e3.Z, {}),
              description:
                "Share encrypted PII with third party APIs and decrypt it at the edge so they see the plaintext but you never do.",
              diagram: (0, i.jsx)(eX.p, {}),
            },
          ],
        });
      }
      var e6 = n(18792),
        e5 = n(24561),
        e4 = n(9714),
        e7 = n(27863),
        e8 = n(17346),
        e9 = n(33587);
      function EPHIDiagrams() {
        return (0, i.jsx)(eH.h, {
          className: e0().diagrams,
          diagrams: [
            {
              value: "ENCRYPT",
              title: "Encrypt sensitive ePHI",
              icon: (0, i.jsx)(e8.Z, {}),
              description:
                "Use evervault to encrypt Electronic Personal Health Information (ePHI) before it touches your infrastructure.",
              diagram: (0, i.jsx)(e6.Z, {}),
            },
            {
              value: "STORE",
              title: "Store anywhere",
              icon: (0, i.jsx)(e9.Z, {}),
              description:
                "Store encrypted patient records in the same places you normally do. No need to change storage providers. evervault never stores your sensitive data.",
              diagram: (0, i.jsx)(e7.Z, {}),
            },
            {
              value: "PROCESS",
              title: "Process",
              icon: (0, i.jsx)(e1.Z, {}),
              description:
                "Securely process ePHI outside of your infrastructure using Functions or Cages.",
              diagram: (0, i.jsx)(e5.Z, {}),
            },
            {
              value: "SHARE",
              title: "Decrypt and share",
              icon: (0, i.jsx)(e3.Z, {}),
              description:
                "Share encrypted files, documents or ePHI with third-party services and decrypt them after they leave your infrastructure through Outbound Relay.",
              diagram: (0, i.jsx)(e4.Z, {}),
            },
          ],
        });
      }
      var te = n(425),
        tt = n(97789);
      function FilesDiagrams() {
        return (0, i.jsx)(eH.h, {
          className: e0().diagrams,
          diagrams: [
            {
              value: "ENCRYPT",
              title: "Encrypt files",
              icon: (0, i.jsx)(eJ.Z, {}),
              description:
                "Encrypt any file or document and make sure it never touches your infrastructure in plaintext.",
              diagram: (0, i.jsx)(te.Z, { className: e0().encryptFileDiagram }),
            },
            {
              value: "STORE",
              title: "Store anywhere",
              icon: (0, i.jsx)(e$.Z, {}),
              description:
                "Store encrypted files in the same places you are used to. After encrypting your files, we don't store anything.",
              diagram: (0, i.jsx)(tt.Z, {}),
            },
            {
              value: "SHARE",
              title: "Decrypt & share",
              icon: (0, i.jsx)(e1.Z, {}),
              description:
                "Share encrypted files or documents with third-party services and decrypt them after they leave your infrastructure.",
              diagram: (0, i.jsx)(e5.Z, {}),
            },
          ],
        });
      }
      var tn = n(53756);
      function CredentialsDiagrams() {
        return (0, i.jsx)(eH.h, {
          className: e0().diagrams,
          diagrams: [
            {
              value: "INBOUND",
              title: "Encrypt credentials",
              icon: (0, i.jsx)(e8.Z, {}),
              description:
                "Collect third-party API credentials from your users and encrypt them before they touch your infrastructure, using Inbound Relay or any of our client-side SDKs.",
              diagram: (0, i.jsx)(tn.$9, {}),
            },
            {
              value: "OUTBOUND",
              title: "Authenticate with APIs",
              icon: (0, i.jsx)(e9.Z, {}),
              description:
                "Easily use encrypted authentication tokens with any HTTP API through Outbound Relay. OAuth 2, Bearer Tokens, Basic Auth and API keys are all supported.",
              diagram: (0, i.jsx)(e7.Z, {}),
            },
            {
              value: "FUNCTIONS",
              title: "Sign transactions",
              icon: (0, i.jsx)(e1.Z, {}),
              description:
                "For any APIs or services that require signatures, evervault Functions can be used to sign requests. You never handle authentication tokens or private keys in plaintext.",
              diagram: (0, i.jsx)(e5.Z, {}),
            },
          ],
        });
      }
      var ta = n(94184),
        ti = n.n(ta),
        tr = n(663),
        ts = n.n(tr),
        tl = n(6963);
      let to = (0, p.forwardRef)((e, t) => {
        let { children: n, active: a, onClick: r } = e,
          s = (0, tl.Z)("(max-width: 999px)");
        return (0, i.jsxs)("button", {
          ref: t,
          className: ti()(ts().tab, a && ts().active),
          onClick: r,
          children: [
            a &&
              !s &&
              (0, i.jsx)(R.E.div, {
                layoutId: "indicator",
                className: ts().indicator,
                style: { borderRadius: 32 },
                transition: { type: "spring", stiffness: 120, damping: 20 },
              }),
            n,
          ],
        });
      });
      function Tabs(e) {
        let { tabs: t, onChange: n, value: a, className: r } = e,
          s = t.reduce((e, t) => ((e[t] = (0, p.useRef)()), e), {}),
          handleClick = (e) => {
            n(e),
              s[e].current.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
          };
        return (0, i.jsx)("div", {
          className: ti()(ts().tabs, r),
          children: t.map((e) =>
            (0, i.jsx)(
              to,
              {
                active: e === a,
                onClick: () => handleClick(e),
                ref: s[e],
                children: e,
              },
              e,
            ),
          ),
        });
      }
      let tq = ["User PII", "User ePHI", "Credentials", "Files"];
      function Examples() {
        let [e, t] = (0, p.useState)("User PII");
        return (0, i.jsx)("div", {
          className: e0().container,
          children: (0, i.jsx)("div", {
            className: e0().gradientWrapper,
            children: (0, i.jsxs)("div", {
              className: e0().maxWidthWrapper,
              children: [
                (0, i.jsx)(q.Z, {
                  as: "h2",
                  className: e0().heading,
                  children:
                    "Flexible enough to secure any type of data in any workflow",
                }),
                (0, i.jsx)(Tabs, {
                  className: e0().tabs,
                  value: e,
                  onChange: (e) => t(e),
                  tabs: tq,
                }),
                "User PII" === e && (0, i.jsx)(PIIDiagrams, {}),
                "User ePHI" === e && (0, i.jsx)(EPHIDiagrams, {}),
                "Credentials" === e && (0, i.jsx)(CredentialsDiagrams, {}),
                "Files" === e && (0, i.jsx)(FilesDiagrams, {}),
              ],
            }),
          }),
        });
      }
      function EncryptionAsAService() {
        return (0, i.jsxs)(s.Z, {
          title: "Encryption as a Service — evervault",
          description:
            "Encryption as a Service gives developers a set of highly secure building blocks that can be used to encrypt, decrypt and process sensitive customer data.",
          socialImage: "https://evervault.com/social/eaas.jpg",
          children: [
            (0, i.jsx)(Hero, {}),
            (0, i.jsx)(Benefits, {}),
            (0, i.jsx)(Primitives, {}),
            (0, i.jsx)(Examples, {}),
            (0, i.jsx)(l.Z, {
              testimonailsConfig: tc,
              rotationMap: [90, 0, -90],
              logos: "/_next/static/media/logo-wheel.2d69489e.svg",
            }),
            (0, i.jsx)(r.Z, {
              maxWidth: 500,
              heading: "Start encrypting sensitive data",
              subheading:
                "Use evervault’s flexible building blocks to keep your customers’ data secure and compliant at all times.",
              href: "https://app.evervault.com/register",
              cta: "API docs",
            }),
          ],
        });
      }
      let tc = [
        {
          quote:
            "evervault contributed to our security efforts and allowed us to sign larger, security-conscious customers.",
          encryptedQuote:
            "esbB/Ba8P mdjrihwnslf /R pYx n+3nfi=l dngw$jk f/s nif=wjd n= ag m/j= jqFknf, nv/fjd+=-jfAeN/jsd kdjfWker/.",
          author: "Karolis",
          title: "CTO - Humaans",
          id: "humaans-quote",
        },
        {
          quote:
            "Being able to say ‘We use evervault’ ensures that our customers and partners relax as soon as the security question comes up.",
          encryptedQuote:
            "QLLHP X+PQ uh AIL azi Uzl gZsCLvn+XE iG+QTaa VYdo RLc a/WhTzaaL SAo CgLKD$bN @WfCD Mj Dalo wH xWq $+DBrWwY cjATilrG spdqS lQD",
          author: "Eoin Cambay",
          title: "CEO - Swan",
          id: "swan-quote",
        },
        {
          quote:
            "evervault helped us quickly encrypt patient data without having to re-engineer our entire stack. We managed to get it set up and live in less than a day.",
          encryptedQuote:
            "u1q4WI=EL #%Ux)= Lb z/n(bHm fdVh(yc UqUDS@: :cFh i#m3gKR QMo#ro Fw FU%:TSSffUi mm3 dGNiOT Ls4XmS Pl Pzhef:D Th B(n i0 xBA p/ :JO ol@m 4m g%Nk PFd4 i 739d",
          author: "Abdullah Abdulkareem",
          title: "Enna Health Founder",
          id: "enna-health",
        },
      ];
    },
    6963: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useMediaQuery;
        },
      });
      var a = n(67294);
      function useMediaQuery(e) {
        let [t, n] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let onUpdateMatch = (e) => {
                let { matches: t } = e;
                n(t);
              },
              t = window.matchMedia(e);
            return (
              t.addListener(onUpdateMatch),
              onUpdateMatch(t),
              () => t.removeListener(onUpdateMatch)
            );
          }, [e, n]),
          t
        );
      }
    },
    79190: function (e) {
      e.exports = {
        container: "Benefits_container__lciKY",
        maxWidthWrapper: "Benefits_maxWidthWrapper__Oe1Hf",
        heading: "Benefits_heading__b0j6Z",
        title: "Benefits_title__bbTB9",
        slide: "Benefits_slide__GY3gD",
        divider: "Benefits_divider__j0Sig",
        features: "Benefits_features__qDPCl",
        featureTitle: "Benefits_featureTitle__Uu4s2",
        titleContainer: "Benefits_titleContainer___Xtbk",
        suffix: "Benefits_suffix__RWiq9",
      };
    },
    40146: function (e) {
      e.exports = {
        container: "Examples_container__ZEups",
        gradientWrapper: "Examples_gradientWrapper__rw_Zv",
        maxWidthWrapper: "Examples_maxWidthWrapper__UBYvG Home_maxWidth__uUqbF",
        heading: "Examples_heading__LiNBb",
        tabs: "Examples_tabs__L3_re",
        encryptFileDiagram: "Examples_encryptFileDiagram__J6IwR",
        diagrams: "Examples_diagrams__MBUBk",
      };
    },
    663: function (e) {
      e.exports = {
        tabs: "Tabs_tabs__k6lkO",
        tab: "Tabs_tab__f5UbM",
        indicator: "Tabs_indicator__vyOZj",
        active: "Tabs_active__6jrYC",
        prefix: "Tabs_prefix__7uCTi",
        suffix: "Tabs_suffix__AWH3_",
      };
    },
    208: function (e) {
      e.exports = {
        game: "styles_game__dfFRu",
        screen: "styles_screen__lo1ht",
        controls: "styles_controls__WABd0",
        control: "styles_control__B9FX3",
        menu: "styles_menu__uHOYL",
        score: "styles_score__kJwhR",
        hudBottom: "styles_hudBottom__7pQhU",
        hudLabel: "styles_hudLabel__tmGwz",
        hudValue: "styles_hudValue__xOoda",
        buttons: "styles_buttons__w9QzV",
        controllerButton: "styles_controllerButton__BgqeE",
      };
    },
    80034: function (e) {
      e.exports = {
        container: "Cages_container__q08uA",
        text: "Cages_text__k7354",
        buttonGroup: "Cages_buttonGroup__qH_bd",
        animation: "Cages_animation__YPUaA",
      };
    },
    53223: function (e) {
      e.exports = {
        container: "Functions_container__8lZTS",
        text: "Functions_text__N56aw",
        animation: "Functions_animation__UavB7",
      };
    },
    51673: function (e) {
      e.exports = {
        container: "FunctionsAnimation_container__CFOuD",
        serverCode: "FunctionsAnimation_serverCode__xmRSl",
        animateIn: "FunctionsAnimation_animateIn__PDoo6",
        animateOut: "FunctionsAnimation_animateOut__ZW5Dj",
        playgroundControl: "FunctionsAnimation_playgroundControl__m3ds3",
        playground: "FunctionsAnimation_playground__4jPKl",
        functionCodeWrapper: "FunctionsAnimation_functionCodeWrapper__HKYJk",
        functionCode: "FunctionsAnimation_functionCode__NOTOs",
        terminal: "FunctionsAnimation_terminal__KlMJW",
        terminalTabs: "FunctionsAnimation_terminalTabs___TItU",
        divider: "FunctionsAnimation_divider__VNkI3",
        log: "FunctionsAnimation_log__TXrYi",
        cursor: "FunctionsAnimation_cursor__8KZqc",
        blink: "FunctionsAnimation_blink__1jbW_",
        screen: "FunctionsAnimation_screen__9LjuO",
      };
    },
    76685: function (e) {
      e.exports = {
        container: "Primitives_container__SXLsK",
        gradientWrapper: "Primitives_gradientWrapper__UJTIB",
        maxWidthWrapper:
          "Primitives_maxWidthWrapper__7Mo06 Home_maxWidth__uUqbF",
        heading: "Primitives_heading__59XBQ",
        carouselSlides: "Primitives_carouselSlides__oCayO",
        slide: "Primitives_slide___GEIl",
        controls: "Primitives_controls___P_YI",
        primitivesTrack: "Primitives_primitivesTrack__514oi",
        primitive: "Primitives_primitive__kFkO9",
        label: "Primitives_label__gK1ZH",
      };
    },
    87290: function (e) {
      e.exports = {
        container: "Relay_container____Bwa",
        text: "Relay_text__f3Bf2",
        animation: "Relay_animation__gvAc3",
        server: "Relay_server__asZsv",
        console: "Relay_console__5avPD",
        cursor: "Relay_cursor__HrErU",
        blink: "Relay_blink__cVSQJ",
        requestsContainer: "Relay_requestsContainer__PssTA",
        requests: "Relay_requests___NGVM",
        requestBlock: "Relay_requestBlock__86Cas",
        request: "Relay_request__vv516",
        valueContainer: "Relay_valueContainer__Bwc_h",
        encryptedValue: "Relay_encryptedValue__Fgdxr",
        client: "Relay_client__5vrfU",
        toolbar: "Relay_toolbar__uT_Ea",
        addressBar: "Relay_addressBar__t7rJT",
      };
    },
    86221: function (e) {
      e.exports = {
        container: "UIComponents_container__Figgg",
        text: "UIComponents_text__IIfSV",
        playground: "UIComponents_playground__O21L0",
        inputsContainer: "UIComponents_inputsContainer__NSQDk",
        inputs: "UIComponents_inputs___NkKW",
        inputContainer: "UIComponents_inputContainer__JT_S0",
        input: "UIComponents_input__1TQP5",
        encryptButtonContainer: "UIComponents_encryptButtonContainer__9Dai6",
        terminal: "UIComponents_terminal__K_ZFz",
        terminalOutput: "UIComponents_terminalOutput__Ab_Nv",
        key: "UIComponents_key__TOr55",
        encryptedString: "UIComponents_encryptedString__ImBWj",
      };
    },
    40173: function (e) {
      e.exports = {
        hero: "styles_hero__v8lNu",
        container: "styles_container__ZC2ng",
        title: "styles_title__eUW3R",
        subText: "styles_subText__Jc_Aq",
        heading: "styles_heading___m97U",
        graphic: "styles_graphic__gKCSN",
        center: "styles_center__Yz5iP",
        fingerPrint: "styles_fingerPrint__KvBqx",
        circle: "styles_circle__8i_qh",
      };
    },
    70184: function (e) {
      e.exports = {
        container: "HeroBreadcrumb_container__uJCQO",
        divider: "HeroBreadcrumb_divider__OxtTZ",
      };
    },
    92628: function (e) {
      e.exports = {
        functions: "styles_functions__Zh2V0",
        functionCall: "styles_functionCall__2_ViN",
        codeFrame: "styles_codeFrame__MxcTZ",
        code: "styles_code__tGUc_",
        line: "styles_line__4zCra",
        value: "styles_value__QOHWE",
        highlight: "styles_highlight__FYk_W",
        encryptedValue: "styles_encryptedValue__HxVPH",
        payload: "styles_payload__CHZxI",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        3737, 2685, 1140, 5029, 9142, 7842, 1766, 8838, 8729, 1044, 2670, 8001,
        3756, 7896, 9774, 2888, 179,
      ],
      function () {
        return e((e.s = 3144));
      },
    ),
      (_N_E = e.O());
  },
]);
