(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7351],
  {
    67351: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Model;
          },
        });
      var a = n(85893),
        o = n(93038),
        i = n(15029),
        s = n(38715),
        r = n(48243),
        l = n(29521),
        d = n(59888),
        h = n(89e3),
        m = n(67294),
        c = n(50355),
        p = n(70131),
        u = n(60292),
        f = n.n(u);
      function Model(e) {
        let { setModelIsReady: t } = e,
          { loaded: n } = (0, l.S)();
        (0, m.useEffect)(() => {
          n && t(!0);
        }, [n]);
        let { ref: o, inView: s } = (0, p.YD)();
        return (0, a.jsx)("div", {
          className: f().wrapper,
          "data-safari": !!window.safari,
          children: (0, a.jsx)(i.Xz, {
            camera: { position: [0, 0, 500] },
            shadows: !0,
            ref: o,
            children:
              s &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("ambientLight", { intensity: 0.035 }),
                  (0, a.jsx)("spotLight", {
                    castShadow: !0,
                    angle: Math.PI,
                    position: [350, 350, 350],
                    distance: 1e3,
                    intensity: 1.5,
                    "shadow-mapSize": [2048, 2048],
                    rotation: [Math.PI / 4, Math.PI / 4, 0],
                  }),
                  (0, a.jsx)(Mesh, { inView: s }),
                  (0, a.jsx)(d.z, {
                    autoRotate: !0,
                    enableZoom: !1,
                    enablePan: !1,
                    enableDamping: !0,
                    autoRotateSpeed: 3,
                  }),
                ],
              }),
          }),
        });
      }
      function Mesh(e) {
        let { inView: t } = e,
          { nodes: n } = (0, c.Z)("/model.splinecode");
        return (0, a.jsxs)(h.M, {
          rotation: [Math.PI / 5, Math.PI / 3, 0],
          scale: 0.75,
          children: [
            (0, a.jsx)(r.E.mesh, {
              castShadow: !0,
              receiveShadow: !0,
              rotation: [Math.PI / 2, 0, 0],
              position: [0, 120, 0],
              geometry: n.path.geometry,
              children: (0, a.jsx)("meshStandardMaterial", {}),
            }),
            (0, a.jsx)(r.E.mesh, {
              castShadow: !0,
              receiveShadow: !0,
              rotation: [Math.PI / 2, 0, 0],
              position: [0, -120, 0],
              geometry: n.path.geometry,
              children: (0, a.jsx)("meshStandardMaterial", {}),
            }),
            void 0 == window.safari && (0, a.jsx)(AsciiRenderer, { inView: t }),
          ],
        });
      }
      function AsciiRenderer(e) {
        let {
            renderIndex: t = 1,
            characters: n = "  .:-=+*#%@",
            inView: a,
            ...i
          } = e,
          { size: r, gl: l, scene: d, camera: h } = (0, s.z)(),
          c = (0, m.useMemo)(() => {
            let e = new o.B(l, n, { resolution: 0.2 });
            return (
              (e.domElement.style.position = "absolute"),
              (e.domElement.style.top = "0px"),
              (e.domElement.style.left = "0px"),
              e
            );
          }, [n, i.invert]);
        (0, m.useEffect)(
          () => (
            l.domElement.parentNode.appendChild(c.domElement),
            () => l.domElement.parentNode.removeChild(c.domElement)
          ),
          [c]
        ),
          (0, m.useEffect)(() => {
            null == c || c.setSize(r.width, r.height);
          }, [c, r]),
          (0, s.A)(() => {
            let e = setTimeout(() => {
              null == c || c.render(d, h);
            });
            !1 === a && clearTimeout(e);
          }, t);
      }
    },
    60292: function (e) {
      e.exports = { wrapper: "Model_wrapper__azM97" };
    },
  },
]);
