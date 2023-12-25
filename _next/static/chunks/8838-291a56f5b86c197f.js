"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8838],
  {
    66673: function (e, t, r) {
      r.d(t, {
        o: function () {
          return d;
        },
      });
      var o = r(87462),
        n = r(67294),
        i = r(38715),
        l = r(94881),
        a = r(99477);
      let TextGeometry = class TextGeometry extends a.ExtrudeGeometry {
        constructor(e, t = {}) {
          let {
            bevelEnabled: r = !1,
            bevelSize: o = 8,
            bevelThickness: n = 10,
            font: i,
            height: l = 50,
            size: a = 100,
            lineHeight: s = 1,
            letterSpacing: c = 0,
            ...d
          } = t;
          if (void 0 === i) super();
          else {
            let t = i.generateShapes(e, a, { lineHeight: s, letterSpacing: c });
            super(t, {
              ...d,
              bevelEnabled: r,
              bevelSize: o,
              bevelThickness: n,
              depth: l,
            });
          }
          this.type = "TextGeometry";
        }
      };
      var s = r(64950);
      let c = ["string", "number"],
        getTextFromChildren = (e) => {
          let t = "",
            r = [];
          return (
            n.Children.forEach(e, (e) => {
              c.includes(typeof e) ? (t += e + "") : r.push(e);
            }),
            [t, ...r]
          );
        },
        d = n.forwardRef(
          (
            {
              font: e,
              letterSpacing: t = 0,
              lineHeight: r = 1,
              size: a = 1,
              height: c = 0.2,
              bevelThickness: d = 0.1,
              bevelSize: u = 0.01,
              bevelEnabled: p = !1,
              bevelOffset: f = 0,
              bevelSegments: m = 4,
              curveSegments: y = 8,
              children: g,
              ...h
            },
            v,
          ) => {
            n.useMemo(
              () => (0, i.e)({ RenamedTextGeometry: TextGeometry }),
              [],
            );
            let b = (0, l.Rq)(async () => {
                let t =
                  "string" == typeof e ? await (await fetch(e)).json() : e;
                return new s.J().parse(t);
              }, [e]),
              x = (0, n.useMemo)(
                () => ({
                  font: b,
                  size: a,
                  height: c,
                  bevelThickness: d,
                  bevelSize: u,
                  bevelEnabled: p,
                  bevelSegments: m,
                  bevelOffset: f,
                  curveSegments: y,
                  letterSpacing: t,
                  lineHeight: r,
                }),
                [b, a, c, d, u, p, m, f, y, t, r],
              ),
              [C, ...E] = (0, n.useMemo)(() => getTextFromChildren(g), [g]),
              S = n.useMemo(() => [C, x], [C, x]);
            return n.createElement(
              "mesh",
              (0, o.Z)({}, h, { ref: v }),
              n.createElement("renamedTextGeometry", { args: S }),
              E,
            );
          },
        );
    },
    88849: function (e, t, r) {
      r.d(t, {
        wI: function () {
          return Physics;
        },
        ib: function () {
          return q;
        },
        R3: function () {
          return vec3;
        },
      });
      var o = r(4162),
        n = r(38715),
        i = r(67294),
        l = r(99477),
        a = r(64063),
        s = r.n(a);
      let c = [];
      function handleAsset(e, t, r, o = 0, n = !1) {
        for (let e of t)
          if (s()(r, e.args)) {
            if (n) return;
            if (e.error) throw e.error;
            if (e.response) return e.response;
            throw e.promise;
          }
        let i = {
          args: r,
          promise: e(...r)
            .then((e) => (i.response = null == e || e))
            .catch((e) => (i.error = null != e ? e : "unknown error"))
            .then(() => {
              o > 0 &&
                setTimeout(() => {
                  let e = t.indexOf(i);
                  -1 !== e && t.splice(e, 1);
                }, o);
            }),
        };
        if ((t.push(i), !n)) throw i.promise;
      }
      function useAsset(e, ...t) {
        return handleAsset(e, c, t, useAsset.lifespan);
      }
      function ownKeys(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function _objectSpread2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                var o;
                (o = r[t]),
                  t in e
                    ? Object.defineProperty(e, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[t] = o);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ownKeys(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      (useAsset.lifespan = 0),
        (useAsset.clear = (...e) =>
          (function (e, ...t) {
            if (void 0 === t || 0 === t.length) e.splice(0, e.length);
            else {
              let r = e.find((e) => s()(t, e.args));
              if (r) {
                let t = e.indexOf(r);
                -1 !== t && e.splice(t, 1);
              }
            }
          })(c, ...e)),
        (useAsset.preload = (e, ...t) =>
          void handleAsset(e, c, t, useAsset.lifespan, !0)),
        (useAsset.peek = (...e) => {
          var t;
          return null == (t = c.find((t) => s()(e, t.args)))
            ? void 0
            : t.response;
        });
      let d = new l.Quaternion();
      new l.Euler();
      let u = new l.Vector3();
      new l.Object3D();
      let p = new l.Matrix4(),
        f = new l.Vector3(),
        m = new l.Quaternion(),
        y = new l.Vector3(),
        vectorArrayToVector3 = (e) => {
          let [t, r, o] = e;
          return new l.Vector3(t, r, o);
        },
        rapierQuaternionToQuaternion = ({ x: e, y: t, z: r, w: o }) =>
          d.set(e, t, r, o),
        g = {
          fixed: 1,
          dynamic: 0,
          kinematicPosition: 2,
          kinematicVelocity: 3,
        },
        rigidBodyTypeFromString = (e) => g[e],
        scaleVertices = (e, t) => {
          let r = Array.from(e);
          for (let o = 0; o < e.length / 3; o++)
            (r[3 * o] *= t.x), (r[3 * o + 1] *= t.y), (r[3 * o + 2] *= t.z);
          return r;
        },
        vectorToTuple = (e) =>
          e
            ? e instanceof l.Quaternion
              ? [e.x, e.y, e.z, e.w]
              : e instanceof l.Vector3 || e instanceof l.Euler
                ? [e.x, e.y, e.z]
                : Array.isArray(e)
                  ? e
                  : [e]
            : [0];
      function useConst(e) {
        let t = (0, i.useRef)();
        return (
          void 0 === t.current &&
            (t.current = { value: "function" == typeof e ? e() : e }),
          t.current.value
        );
      }
      let useRaf = (e) => {
          let t = (0, i.useRef)(e),
            r = (0, i.useRef)(0),
            o = (0, i.useRef)(0);
          (0, i.useEffect)(() => {
            t.current = e;
          }, [e]),
            (0, i.useEffect)(() => {
              let loop = () => {
                let e = performance.now(),
                  n = e - o.current;
                (r.current = requestAnimationFrame(loop)),
                  t.current(n / 1e3),
                  (o.current = e);
              };
              return (
                (r.current = requestAnimationFrame(loop)),
                () => cancelAnimationFrame(r.current)
              );
            }, []);
        },
        UseFrameStepper = ({ onStep: e, updatePriority: t }) => (
          (0, n.A)((t, r) => {
            e(r);
          }, t),
          null
        ),
        RafStepper = ({ onStep: e }) => (
          useRaf((t) => {
            e(t);
          }),
          null
        );
      var h = (0, i.memo)(({ onStep: e, type: t, updatePriority: r }) =>
        "independent" === t
          ? i.createElement(RafStepper, { onStep: e })
          : i.createElement(UseFrameStepper, { onStep: e, updatePriority: r }),
      );
      function _objectWithoutProperties(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (r = i[o]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (n[r] = e[r]);
        }
        return n;
      }
      let v = [
          "mass",
          "linearDamping",
          "angularDamping",
          "type",
          "onCollisionEnter",
          "onCollisionExit",
          "onIntersectionEnter",
          "onIntersectionExit",
          "onContactForce",
          "children",
          "canSleep",
          "ccd",
          "gravityScale",
        ],
        scaleColliderArgs = (e, t, r) => {
          let o = t.slice();
          if ("heightfield" === e) {
            let e = o[3];
            return (e.x *= r.x), (e.x *= r.y), (e.x *= r.z), o;
          }
          if ("trimesh" === e || "convexHull" === e)
            return (o[0] = scaleVertices(o[0], r)), o;
          let n = [r.x, r.y, r.z, r.x, r.x];
          return o.map((e, t) => n[t] * e);
        },
        createColliderFromOptions = (e, t, r, n) => {
          let i = scaleColliderArgs(e.shape, e.args, r),
            l = o.ColliderDesc[e.shape](...i);
          return t.createCollider(l, null == n ? void 0 : n());
        },
        b = ["shape", "args"],
        x =
          "Please pick ONLY ONE of the `density`, `mass` and `massProperties` options.",
        setColliderMassOptions = (e, t) => {
          if (void 0 !== t.density) {
            if (void 0 !== t.mass || void 0 !== t.massProperties)
              throw Error(x);
            e.setDensity(t.density);
            return;
          }
          if (void 0 !== t.mass) {
            if (void 0 !== t.massProperties) throw Error(x);
            e.setMass(t.mass);
            return;
          }
          void 0 !== t.massProperties &&
            e.setMassProperties(
              t.massProperties.mass,
              t.massProperties.centerOfMass,
              t.massProperties.principalAngularInertia,
              t.massProperties.angularInertiaLocalFrame,
            );
        },
        C = {
          sensor: (e, t) => {
            e.setSensor(t);
          },
          collisionGroups: (e, t) => {
            e.setCollisionGroups(t);
          },
          solverGroups: (e, t) => {
            e.setSolverGroups(t);
          },
          friction: (e, t) => {
            e.setFriction(t);
          },
          frictionCombineRule: (e, t) => {
            e.setFrictionCombineRule(t);
          },
          restitution: (e, t) => {
            e.setRestitution(t);
          },
          restitutionCombineRule: (e, t) => {
            e.setRestitutionCombineRule(t);
          },
          quaternion: () => {},
          position: () => {},
          rotation: () => {},
          scale: () => {},
        },
        E = Object.keys(C),
        setColliderOptions = (e, t, r) => {
          let o = r.get(e.handle);
          if (o) {
            var n;
            let r = o.object.parent.getWorldScale(u),
              i =
                null === (n = o.worldParent) || void 0 === n
                  ? void 0
                  : n.matrixWorld.clone().invert();
            o.object.updateWorldMatrix(!0, !1),
              p.copy(o.object.matrixWorld),
              i && p.premultiply(i),
              p.decompose(f, m, y),
              e.parent()
                ? (e.setTranslationWrtParent({
                    x: f.x * r.x,
                    y: f.y * r.y,
                    z: f.z * r.z,
                  }),
                  e.setRotationWrtParent(m))
                : (e.setTranslation({
                    x: f.x * r.x,
                    y: f.y * r.y,
                    z: f.z * r.z,
                  }),
                  e.setRotation(m)),
              E.forEach((r) => {
                if (r in t) {
                  let o = t[r];
                  C[r](e, o, t);
                }
              }),
              setColliderMassOptions(e, t);
          }
        },
        useUpdateColliderOptions = (e, t, r) => {
          let o = (0, i.useMemo)(
            () => E.flatMap((e) => vectorToTuple(t[e])),
            [t],
          );
          (0, i.useEffect)(() => {
            let o = e();
            setColliderOptions(o, t, r);
          }, [...o, e]);
        },
        isChildOfMeshCollider = (e) => {
          let t = !1;
          return (
            e.traverseAncestors((e) => {
              "MeshCollider" === e.userData.r3RapierType && (t = !0);
            }),
            t
          );
        },
        createColliderState = (e, t, r) => ({
          collider: e,
          worldParent: r || void 0,
          object: t,
        }),
        S = {
          cuboid: "cuboid",
          ball: "ball",
          hull: "convexHull",
          trimesh: "trimesh",
        },
        createColliderPropsFromChildren = ({
          object: e,
          ignoreMeshColliders: t = !0,
          options: r,
        }) => {
          let o = [];
          e.updateWorldMatrix(!0, !1);
          let n = e.matrixWorld.clone().invert(),
            colliderFromChild = (e) => {
              if ("isMesh" in e) {
                if (t && isChildOfMeshCollider(e)) return;
                let i = e.getWorldScale(y),
                  a = S[r.colliders || "cuboid"];
                e.updateWorldMatrix(!0, !1),
                  p.copy(e.matrixWorld).premultiply(n).decompose(f, m, y);
                let s = new l.Euler().setFromQuaternion(m, "XYZ"),
                  { geometry: c } = e,
                  { args: d, offset: u } = getColliderArgsFromGeometry(
                    c,
                    r.colliders || "cuboid",
                  ),
                  g = _objectSpread2(
                    _objectSpread2({}, cleanRigidBodyPropsForCollider(r)),
                    {},
                    {
                      args: d,
                      shape: a,
                      rotation: [s.x, s.y, s.z],
                      position: [
                        f.x + u.x * i.x,
                        f.y + u.y * i.y,
                        f.z + u.z * i.z,
                      ],
                      scale: [i.x, i.y, i.z],
                    },
                  );
                o.push(g);
              }
            };
          return (
            r.includeInvisible
              ? e.traverse(colliderFromChild)
              : e.traverseVisible(colliderFromChild),
            o
          );
        },
        getColliderArgsFromGeometry = (e, t) => {
          switch (t) {
            case "cuboid": {
              e.computeBoundingBox();
              let { boundingBox: t } = e,
                r = t.getSize(new l.Vector3());
              return {
                args: [r.x / 2, r.y / 2, r.z / 2],
                offset: t.getCenter(new l.Vector3()),
              };
            }
            case "ball": {
              e.computeBoundingSphere();
              let { boundingSphere: t } = e,
                r = t.radius;
              return { args: [r], offset: t.center };
            }
            case "trimesh": {
              var r;
              let t = e.index
                ? e.clone()
                : (function (e, t = 1e-4) {
                    t = Math.max(t, Number.EPSILON);
                    let r = {},
                      o = e.getIndex(),
                      n = e.getAttribute("position"),
                      i = o ? o.count : n.count,
                      a = 0,
                      s = Object.keys(e.attributes),
                      c = {},
                      d = {},
                      u = [],
                      p = ["getX", "getY", "getZ", "getW"];
                    for (let t = 0, r = s.length; t < r; t++) {
                      let r = s[t];
                      c[r] = [];
                      let o = e.morphAttributes[r];
                      o &&
                        (d[r] = Array(o.length)
                          .fill(0)
                          .map(() => []));
                    }
                    let f = Math.log10(1 / t),
                      m = Math.pow(10, f);
                    for (let t = 0; t < i; t++) {
                      let n = o ? o.getX(t) : t,
                        i = "";
                      for (let t = 0, r = s.length; t < r; t++) {
                        let r = s[t],
                          o = e.getAttribute(r),
                          l = o.itemSize;
                        for (let e = 0; e < l; e++)
                          i += `${~~(o[p[e]](n) * m)},`;
                      }
                      if (i in r) u.push(r[i]);
                      else {
                        for (let t = 0, r = s.length; t < r; t++) {
                          let r = s[t],
                            o = e.getAttribute(r),
                            i = e.morphAttributes[r],
                            l = o.itemSize,
                            a = c[r],
                            u = d[r];
                          for (let e = 0; e < l; e++) {
                            let t = p[e];
                            if ((a.push(o[t](n)), i))
                              for (let e = 0, r = i.length; e < r; e++)
                                u[e].push(i[e][t](n));
                          }
                        }
                        (r[i] = a), u.push(a), a++;
                      }
                    }
                    let y = e.clone();
                    for (let t = 0, r = s.length; t < r; t++) {
                      let r = s[t],
                        o = e.getAttribute(r),
                        n = new o.array.constructor(c[r]),
                        i = new l.BufferAttribute(n, o.itemSize, o.normalized);
                      if ((y.setAttribute(r, i), r in d))
                        for (let t = 0; t < d[r].length; t++) {
                          let o = e.morphAttributes[r][t],
                            n = new o.array.constructor(d[r][t]),
                            i = new l.BufferAttribute(
                              n,
                              o.itemSize,
                              o.normalized,
                            );
                          y.morphAttributes[r][t] = i;
                        }
                    }
                    return y.setIndex(u), y;
                  })(e);
              return {
                args: [
                  t.attributes.position.array,
                  null === (r = t.index) || void 0 === r ? void 0 : r.array,
                ],
                offset: new l.Vector3(),
              };
            }
            case "hull": {
              let t = e.clone();
              return {
                args: [t.attributes.position.array],
                offset: new l.Vector3(),
              };
            }
          }
          return { args: [], offset: new l.Vector3() };
        },
        getActiveCollisionEventsFromProps = (e) => ({
          collision: !!(
            (null != e && e.onCollisionEnter) ||
            (null != e && e.onCollisionExit) ||
            (null != e && e.onIntersectionEnter) ||
            (null != e && e.onIntersectionExit)
          ),
          contactForce: !!(null != e && e.onContactForce),
        }),
        useColliderEvents = (e, t, r, n = {}) => {
          let {
            onCollisionEnter: l,
            onCollisionExit: a,
            onIntersectionEnter: s,
            onIntersectionExit: c,
            onContactForce: d,
          } = t;
          (0, i.useEffect)(() => {
            let i = e();
            if (i) {
              let { collision: e, contactForce: u } =
                  getActiveCollisionEventsFromProps(t),
                p = e || n.collision,
                f = u || n.contactForce;
              p && f
                ? i.setActiveEvents(
                    o.ActiveEvents.COLLISION_EVENTS |
                      o.ActiveEvents.CONTACT_FORCE_EVENTS,
                  )
                : p
                  ? i.setActiveEvents(o.ActiveEvents.COLLISION_EVENTS)
                  : f && i.setActiveEvents(o.ActiveEvents.CONTACT_FORCE_EVENTS),
                r.set(i.handle, {
                  onCollisionEnter: l,
                  onCollisionExit: a,
                  onIntersectionEnter: s,
                  onIntersectionExit: c,
                  onContactForce: d,
                });
            }
            return () => {
              i && r.delete(i.handle);
            };
          }, [l, a, s, c, d, n]);
        },
        cleanRigidBodyPropsForCollider = (e = {}) => {
          let t = _objectWithoutProperties(e, v);
          return t;
        },
        useRapier = () => (0, i.useContext)(w),
        useChildColliderProps = (e, t, r = !0) => {
          let [o, n] = (0, i.useState)([]);
          return (
            (0, i.useEffect)(() => {
              let o = e.current;
              o &&
                !1 !== t.colliders &&
                n(
                  createColliderPropsFromChildren({
                    object: e.current,
                    options: t,
                    ignoreMeshColliders: r,
                  }),
                );
            }, [t.colliders]),
            o
          );
        },
        j = (0, i.memo)(() => {
          let { world: e } = useRapier(),
            t = (0, i.useRef)(null);
          return (
            (0, n.A)(() => {
              let r = t.current;
              if (!r) return;
              let o = e.debugRender();
              r.geometry.setAttribute(
                "position",
                new l.BufferAttribute(o.vertices, 3),
              ),
                r.geometry.setAttribute(
                  "color",
                  new l.BufferAttribute(o.colors, 4),
                );
            }),
            i.createElement(
              "group",
              null,
              i.createElement(
                "lineSegments",
                { ref: t, frustumCulled: !1 },
                i.createElement("lineBasicMaterial", {
                  color: 16777215,
                  vertexColors: !0,
                }),
                i.createElement("bufferGeometry", null),
              ),
            )
          );
        }),
        createSingletonProxy = (e) => {
          let t;
          let r = new Proxy(
            {},
            {
              get: (r, o) => (t || (t = e()), Reflect.get(t, o)),
              set: (r, o, n) => (t || (t = e()), Reflect.set(t, o, n)),
            },
          );
          return {
            proxy: r,
            reset: () => {
              t = void 0;
            },
          };
        },
        w = (0, i.createContext)(void 0),
        getCollisionPayloadFromSource = (e, t) => {
          var r, o, n, i, l, a;
          return {
            target: {
              rigidBody: e.rigidBody.object,
              collider: e.collider.object,
              colliderObject:
                null === (r = e.collider.state) || void 0 === r
                  ? void 0
                  : r.object,
              rigidBodyObject:
                null === (o = e.rigidBody.state) || void 0 === o
                  ? void 0
                  : o.object,
            },
            other: {
              rigidBody: t.rigidBody.object,
              collider: t.collider.object,
              colliderObject:
                null === (n = t.collider.state) || void 0 === n
                  ? void 0
                  : n.object,
              rigidBodyObject:
                null === (i = t.rigidBody.state) || void 0 === i
                  ? void 0
                  : i.object,
            },
            rigidBody: t.rigidBody.object,
            collider: t.collider.object,
            colliderObject:
              null === (l = t.collider.state) || void 0 === l
                ? void 0
                : l.object,
            rigidBodyObject:
              null === (a = t.rigidBody.state) || void 0 === a
                ? void 0
                : a.object,
          };
        },
        importRapier = async () => {
          let e = await Promise.resolve().then(r.bind(r, 4162));
          return await e.init(), e;
        },
        Physics = (e) => {
          let {
              colliders: t = "cuboid",
              children: r,
              timeStep: a = 1 / 60,
              paused: s = !1,
              interpolate: c = !0,
              updatePriority: d,
              updateLoop: u = "follow",
              debug: g = !1,
              gravity: v = [0, -9.81, 0],
              maxStabilizationIterations: b = 1,
              maxVelocityFrictionIterations: x = 8,
              maxVelocityIterations: C = 4,
              predictionDistance: E = 0.002,
              erp: S = 0.8,
            } = e,
            F = useAsset(importRapier),
            { invalidate: M } = (0, n.z)(),
            R = useConst(() => new Map()),
            O = useConst(() => new Map()),
            A = useConst(() => new Map()),
            _ = useConst(() => new Map()),
            P = useConst(() => new o.EventQueue(!1)),
            B = useConst(() => new Set()),
            k = useConst(() => new Set()),
            { proxy: T, reset: I } = useConst(() =>
              createSingletonProxy(() => new F.World(vectorArrayToVector3(v))),
            );
          (0, i.useEffect)(
            () => () => {
              T.free(), I();
            },
            [],
          ),
            (0, i.useEffect)(() => {
              (T.gravity = vectorArrayToVector3(v)),
                (T.integrationParameters.maxStabilizationIterations = b),
                (T.integrationParameters.maxVelocityFrictionIterations = x),
                (T.integrationParameters.maxVelocityIterations = C),
                (T.integrationParameters.predictionDistance = E),
                (T.integrationParameters.erp = S);
            }, [T, ...v, b, C, x, E, S]);
          let D = (0, i.useCallback)((e) => {
              var t;
              let r = T.getCollider(e),
                o = _.get(e),
                n = O.get(e),
                i =
                  null == r
                    ? void 0
                    : null === (t = r.parent()) || void 0 === t
                      ? void 0
                      : t.handle,
                l = void 0 !== i ? T.getRigidBody(i) : void 0,
                a = l && void 0 !== i ? A.get(i) : void 0,
                s = void 0 !== i ? R.get(i) : void 0;
              return {
                collider: { object: r, events: o, state: n },
                rigidBody: { object: l, events: a, state: s },
              };
            }, []),
            [V] = (0, i.useState)({ previousState: {}, accumulator: 0 }),
            z = (0, i.useCallback)(
              (e) => {
                let t = "vary" === a,
                  r = l.MathUtils.clamp(e, 0, 0.5),
                  stepWorld = (e) => {
                    B.forEach((e) => {
                      e.current(T);
                    }),
                      (T.timestep = e),
                      T.step(P),
                      k.forEach((e) => {
                        e.current(T);
                      });
                  };
                if (t) stepWorld(r);
                else
                  for (V.accumulator += r; V.accumulator >= a; )
                    c &&
                      ((V.previousState = {}),
                      T.forEachRigidBody((e) => {
                        V.previousState[e.handle] = {
                          position: e.translation(),
                          rotation: e.rotation(),
                        };
                      })),
                      stepWorld(a),
                      (V.accumulator -= a);
                let o = t || !c || s ? 1 : V.accumulator / a;
                R.forEach((e, t) => {
                  let r = T.getRigidBody(t),
                    n = A.get(t);
                  if ((null != n && n.onSleep) || (null != n && n.onWake)) {
                    var i, l;
                    r.isSleeping() &&
                      !e.isSleeping &&
                      (null == n ||
                        null === (i = n.onSleep) ||
                        void 0 === i ||
                        i.call(n)),
                      !r.isSleeping() &&
                        e.isSleeping &&
                        (null == n ||
                          null === (l = n.onWake) ||
                          void 0 === l ||
                          l.call(n)),
                      (e.isSleeping = r.isSleeping());
                  }
                  if (
                    !r ||
                    (r.isSleeping() && !("isInstancedMesh" in e.object)) ||
                    !e.setMatrix
                  )
                    return;
                  let a = r.translation(),
                    s = r.rotation(),
                    c = V.previousState[t];
                  c &&
                    (p
                      .compose(
                        c.position,
                        rapierQuaternionToQuaternion(c.rotation),
                        e.scale,
                      )
                      .premultiply(e.invertedWorldMatrix)
                      .decompose(f, m, y),
                    "mesh" == e.meshType &&
                      (e.object.position.copy(f), e.object.quaternion.copy(m))),
                    p
                      .compose(a, rapierQuaternionToQuaternion(s), e.scale)
                      .premultiply(e.invertedWorldMatrix)
                      .decompose(f, m, y),
                    "instancedMesh" == e.meshType
                      ? e.setMatrix(p)
                      : (e.object.position.lerp(f, o),
                        e.object.quaternion.slerp(m, o));
                }),
                  P.drainCollisionEvents((e, t, r) => {
                    var o,
                      n,
                      i,
                      l,
                      a,
                      s,
                      c,
                      d,
                      u,
                      p,
                      f,
                      m,
                      y,
                      g,
                      h,
                      v,
                      b,
                      x,
                      C,
                      E,
                      S,
                      j,
                      w,
                      F;
                    let M = D(e),
                      R = D(t);
                    if (
                      !(null != M && M.collider.object) ||
                      !(null != R && R.collider.object)
                    )
                      return;
                    let O = getCollisionPayloadFromSource(M, R),
                      A = getCollisionPayloadFromSource(R, M);
                    r
                      ? T.contactPair(
                          M.collider.object,
                          R.collider.object,
                          (e, t) => {
                            var r, o, n, i, l, a, s, c;
                            null === (r = M.rigidBody.events) ||
                              void 0 === r ||
                              null === (o = r.onCollisionEnter) ||
                              void 0 === o ||
                              o.call(
                                r,
                                _objectSpread2(
                                  _objectSpread2({}, O),
                                  {},
                                  { manifold: e, flipped: t },
                                ),
                              ),
                              null === (n = R.rigidBody.events) ||
                                void 0 === n ||
                                null === (i = n.onCollisionEnter) ||
                                void 0 === i ||
                                i.call(
                                  n,
                                  _objectSpread2(
                                    _objectSpread2({}, A),
                                    {},
                                    { manifold: e, flipped: t },
                                  ),
                                ),
                              null === (l = M.collider.events) ||
                                void 0 === l ||
                                null === (a = l.onCollisionEnter) ||
                                void 0 === a ||
                                a.call(
                                  l,
                                  _objectSpread2(
                                    _objectSpread2({}, O),
                                    {},
                                    { manifold: e, flipped: t },
                                  ),
                                ),
                              null === (s = R.collider.events) ||
                                void 0 === s ||
                                null === (c = s.onCollisionEnter) ||
                                void 0 === c ||
                                c.call(
                                  s,
                                  _objectSpread2(
                                    _objectSpread2({}, A),
                                    {},
                                    { manifold: e, flipped: t },
                                  ),
                                );
                          },
                        )
                      : (null === (o = M.rigidBody.events) ||
                          void 0 === o ||
                          null === (n = o.onCollisionExit) ||
                          void 0 === n ||
                          n.call(o, O),
                        null === (i = R.rigidBody.events) ||
                          void 0 === i ||
                          null === (l = i.onCollisionExit) ||
                          void 0 === l ||
                          l.call(i, A),
                        null === (a = M.collider.events) ||
                          void 0 === a ||
                          null === (s = a.onCollisionExit) ||
                          void 0 === s ||
                          s.call(a, O),
                        null === (c = R.collider.events) ||
                          void 0 === c ||
                          null === (d = c.onCollisionExit) ||
                          void 0 === d ||
                          d.call(c, A)),
                      r
                        ? T.intersectionPair(
                            M.collider.object,
                            R.collider.object,
                          ) &&
                          (null === (u = M.rigidBody.events) ||
                            void 0 === u ||
                            null === (p = u.onIntersectionEnter) ||
                            void 0 === p ||
                            p.call(u, O),
                          null === (f = R.rigidBody.events) ||
                            void 0 === f ||
                            null === (m = f.onIntersectionEnter) ||
                            void 0 === m ||
                            m.call(f, A),
                          null === (y = M.collider.events) ||
                            void 0 === y ||
                            null === (g = y.onIntersectionEnter) ||
                            void 0 === g ||
                            g.call(y, O),
                          null === (h = R.collider.events) ||
                            void 0 === h ||
                            null === (v = h.onIntersectionEnter) ||
                            void 0 === v ||
                            v.call(h, A))
                        : (null === (b = M.rigidBody.events) ||
                            void 0 === b ||
                            null === (x = b.onIntersectionExit) ||
                            void 0 === x ||
                            x.call(b, O),
                          null === (C = R.rigidBody.events) ||
                            void 0 === C ||
                            null === (E = C.onIntersectionExit) ||
                            void 0 === E ||
                            E.call(C, A),
                          null === (S = M.collider.events) ||
                            void 0 === S ||
                            null === (j = S.onIntersectionExit) ||
                            void 0 === j ||
                            j.call(S, O),
                          null === (w = R.collider.events) ||
                            void 0 === w ||
                            null === (F = w.onIntersectionExit) ||
                            void 0 === F ||
                            F.call(w, A));
                  }),
                  P.drainContactForceEvents((e) => {
                    var t, r, o, n, i, l, a, s;
                    let c = D(e.collider1()),
                      d = D(e.collider2());
                    if (
                      !(null != c && c.collider.object) ||
                      !(null != d && d.collider.object)
                    )
                      return;
                    let u = getCollisionPayloadFromSource(c, d),
                      p = getCollisionPayloadFromSource(d, c);
                    null === (t = c.rigidBody.events) ||
                      void 0 === t ||
                      null === (r = t.onContactForce) ||
                      void 0 === r ||
                      r.call(
                        t,
                        _objectSpread2(
                          _objectSpread2({}, u),
                          {},
                          {
                            totalForce: e.totalForce(),
                            totalForceMagnitude: e.totalForceMagnitude(),
                            maxForceDirection: e.maxForceDirection(),
                            maxForceMagnitude: e.maxForceMagnitude(),
                          },
                        ),
                      ),
                      null === (o = d.rigidBody.events) ||
                        void 0 === o ||
                        null === (n = o.onContactForce) ||
                        void 0 === n ||
                        n.call(
                          o,
                          _objectSpread2(
                            _objectSpread2({}, p),
                            {},
                            {
                              totalForce: e.totalForce(),
                              totalForceMagnitude: e.totalForceMagnitude(),
                              maxForceDirection: e.maxForceDirection(),
                              maxForceMagnitude: e.maxForceMagnitude(),
                            },
                          ),
                        ),
                      null === (i = c.collider.events) ||
                        void 0 === i ||
                        null === (l = i.onContactForce) ||
                        void 0 === l ||
                        l.call(
                          i,
                          _objectSpread2(
                            _objectSpread2({}, u),
                            {},
                            {
                              totalForce: e.totalForce(),
                              totalForceMagnitude: e.totalForceMagnitude(),
                              maxForceDirection: e.maxForceDirection(),
                              maxForceMagnitude: e.maxForceMagnitude(),
                            },
                          ),
                        ),
                      null === (a = d.collider.events) ||
                        void 0 === a ||
                        null === (s = a.onContactForce) ||
                        void 0 === s ||
                        s.call(
                          a,
                          _objectSpread2(
                            _objectSpread2({}, p),
                            {},
                            {
                              totalForce: e.totalForce(),
                              totalForceMagnitude: e.totalForceMagnitude(),
                              maxForceDirection: e.maxForceDirection(),
                              maxForceMagnitude: e.maxForceMagnitude(),
                            },
                          ),
                        );
                  }),
                  T.forEachActiveRigidBody(() => {
                    M();
                  });
              },
              [s, a, c, T],
            ),
            N = (0, i.useMemo)(
              () => ({
                rapier: F,
                world: T,
                physicsOptions: { colliders: t, gravity: v },
                rigidBodyStates: R,
                colliderStates: O,
                rigidBodyEvents: A,
                colliderEvents: _,
                beforeStepCallbacks: B,
                afterStepCallbacks: k,
                isPaused: s,
                isDebug: g,
                step: z,
              }),
              [s, z, g, t, v],
            ),
            W = (0, i.useCallback)(
              (e) => {
                s || z(e);
              },
              [s, z],
            );
          return i.createElement(
            w.Provider,
            { value: N },
            i.createElement(h, { onStep: W, type: u, updatePriority: d }),
            g && i.createElement(j, null),
            r,
          );
        };
      function _extends() {
        return (_extends = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r)
                  Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      let useImperativeInstance = (e, t, r) => {
          let o = (0, i.useRef)(),
            n = (0, i.useCallback)(
              () => (o.current || (o.current = e()), o.current),
              r,
            );
          return (
            (0, i.useEffect)(() => {
              let e = n(),
                destroy = () => t(e);
              return () => {
                destroy(), (o.current = void 0);
              };
            }, [n]),
            n
          );
        },
        vec3 = ({ x: e, y: t, z: r } = { x: 0, y: 0, z: 0 }) =>
          new l.Vector3(e, t, r),
        useForwardedRef = (e, t = null) => {
          let r = (0, i.useRef)(t);
          return e && "function" != typeof e
            ? (e.current || (e.current = r.current), e)
            : r;
        },
        F = (0, i.memo)(
          (0, i.forwardRef)((e, t) => {
            let {
                children: r,
                position: o,
                rotation: n,
                quaternion: l,
                scale: a,
                name: s,
              } = e,
              { world: c, colliderEvents: d, colliderStates: u } = useRapier(),
              p = useRigidBodyContext(),
              f = useForwardedRef(t),
              m = (0, i.useRef)(null),
              y = b.flatMap((t) => (Array.isArray(e[t]) ? [...e[t]] : e[t])),
              g = useImperativeInstance(
                () => {
                  let r = m.current.getWorldScale(vec3()),
                    o = createColliderFromOptions(
                      e,
                      c,
                      r,
                      null == p ? void 0 : p.getRigidBody,
                    );
                  return "function" == typeof t && t(o), (f.current = o), o;
                },
                (e) => {
                  c.getCollider(e.handle) && c.removeCollider(e, !0);
                },
                [...y, p],
              );
            (0, i.useEffect)(() => {
              let e = g();
              return (
                u.set(
                  e.handle,
                  createColliderState(
                    e,
                    m.current,
                    null == p ? void 0 : p.ref.current,
                  ),
                ),
                () => {
                  u.delete(e.handle);
                }
              );
            }, [g]);
            let h = (0, i.useMemo)(
              () =>
                _objectSpread2(
                  _objectSpread2(
                    {},
                    cleanRigidBodyPropsForCollider(
                      null == p ? void 0 : p.options,
                    ),
                  ),
                  e,
                ),
              [e, null == p ? void 0 : p.options],
            );
            return (
              useUpdateColliderOptions(g, h, u),
              useColliderEvents(
                g,
                h,
                d,
                getActiveCollisionEventsFromProps(
                  null == p ? void 0 : p.options,
                ),
              ),
              i.createElement(
                "object3D",
                {
                  position: o,
                  rotation: n,
                  quaternion: l,
                  scale: a,
                  ref: m,
                  name: s,
                },
                r,
              )
            );
          }),
        ),
        M = i.forwardRef((e, t) =>
          i.createElement(F, _extends({}, e, { shape: "cuboid", ref: t })),
        );
      M.displayName = "CuboidCollider";
      let R = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "roundCuboid", ref: t })),
      );
      R.displayName = "RoundCuboidCollider";
      let O = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "ball", ref: t })),
      );
      O.displayName = "BallCollider";
      let A = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "capsule", ref: t })),
      );
      A.displayName = "CapsuleCollider";
      let _ = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "heightfield", ref: t })),
      );
      _.displayName = "HeightfieldCollider";
      let P = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "trimesh", ref: t })),
      );
      P.displayName = "TrimeshCollider";
      let B = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "cone", ref: t })),
      );
      B.displayName = "ConeCollider";
      let k = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "roundCone", ref: t })),
      );
      k.displayName = "RoundConeCollider";
      let T = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "cylinder", ref: t })),
      );
      (T.displayName = "CylinderCollider"),
        (T.displayName = "RoundCylinderCollider");
      let I = i.forwardRef((e, t) =>
        i.createElement(F, _extends({}, e, { shape: "convexHull", ref: t })),
      );
      I.displayName = "ConvexHullCollider";
      let rigidBodyDescFromOptions = (e) => {
          var t;
          let r = rigidBodyTypeFromString(
              (null == e ? void 0 : e.type) || "dynamic",
            ),
            n = new o.RigidBodyDesc(r);
          return (
            (n.canSleep =
              null === (t = null == e ? void 0 : e.canSleep) ||
              void 0 === t ||
              t),
            n
          );
        },
        createRigidBodyState = ({
          rigidBody: e,
          object: t,
          setMatrix: r,
          getMatrix: o,
          worldScale: n,
          meshType: i = "mesh",
        }) => {
          t.updateWorldMatrix(!0, !1);
          let l = t.parent.matrixWorld.clone().invert();
          return {
            object: t,
            rigidBody: e,
            invertedWorldMatrix: l,
            setMatrix:
              r ||
              ((e) => {
                t.matrix.copy(e);
              }),
            getMatrix: o || ((e) => e.copy(t.matrix)),
            scale: n || t.getWorldScale(y).clone(),
            isSleeping: !1,
            meshType: i,
          };
        },
        D = ["args", "colliders", "canSleep"],
        V = {
          gravityScale: (e, t) => {
            e.setGravityScale(t, !0);
          },
          linearDamping: (e, t) => {
            e.setLinearDamping(t);
          },
          angularDamping: (e, t) => {
            e.setAngularDamping(t);
          },
          dominanceGroup: (e, t) => {
            e.setDominanceGroup(t);
          },
          enabledRotations: (e, [t, r, o]) => {
            e.setEnabledRotations(t, r, o, !0);
          },
          enabledTranslations: (e, [t, r, o]) => {
            e.setEnabledTranslations(t, r, o, !0);
          },
          lockRotations: (e, t) => {
            e.lockRotations(t, !0);
          },
          lockTranslations: (e, t) => {
            e.lockTranslations(t, !0);
          },
          angularVelocity: (e, [t, r, o]) => {
            e.setAngvel({ x: t, y: r, z: o }, !0);
          },
          linearVelocity: (e, [t, r, o]) => {
            e.setLinvel({ x: t, y: r, z: o }, !0);
          },
          ccd: (e, t) => {
            e.enableCcd(t);
          },
          userData: (e, t) => {
            e.userData = t;
          },
          type(e, t) {
            e.setBodyType(rigidBodyTypeFromString(t), !0);
          },
          position: () => {},
          rotation: () => {},
          quaternion: () => {},
          scale: () => {},
        },
        z = Object.keys(V),
        setRigidBodyOptions = (e, t, r, o = !0) => {
          if (!e) return;
          let n = r.get(e.handle);
          n &&
            (o &&
              (n.object.updateWorldMatrix(!0, !1),
              p.copy(n.object.matrixWorld).decompose(f, m, y),
              e.setTranslation(f, !1),
              e.setRotation(m, !1)),
            z.forEach((r) => {
              r in t && V[r](e, t[r]);
            }));
        },
        useUpdateRigidBodyOptions = (e, t, r, o = !0) => {
          let n = (0, i.useMemo)(
            () => z.flatMap((e) => vectorToTuple(t[e])),
            [t],
          );
          (0, i.useEffect)(() => {
            let n = e();
            setRigidBodyOptions(n, t, r, o);
          }, n);
        },
        useRigidBodyEvents = (e, t, r) => {
          let {
              onWake: o,
              onSleep: n,
              onCollisionEnter: l,
              onCollisionExit: a,
              onIntersectionEnter: s,
              onIntersectionExit: c,
              onContactForce: d,
            } = t,
            u = {
              onWake: o,
              onSleep: n,
              onCollisionEnter: l,
              onCollisionExit: a,
              onIntersectionEnter: s,
              onIntersectionExit: c,
              onContactForce: d,
            };
          (0, i.useEffect)(() => {
            let t = e();
            return (
              r.set(t.handle, u),
              () => {
                r.delete(t.handle);
              }
            );
          }, [o, n, l, a, s, c, d]);
        },
        N = [
          "children",
          "type",
          "position",
          "rotation",
          "scale",
          "quaternion",
          "transformState",
        ],
        W = (0, i.createContext)(void 0),
        useRigidBodyContext = () => (0, i.useContext)(W),
        q = (0, i.memo)(
          (0, i.forwardRef)((e, t) => {
            let {
                children: r,
                type: o,
                position: n,
                rotation: l,
                scale: a,
                quaternion: s,
                transformState: c,
              } = e,
              d = _objectWithoutProperties(e, N),
              u = (0, i.useRef)(null),
              p = useForwardedRef(t),
              {
                world: f,
                rigidBodyStates: m,
                physicsOptions: y,
                rigidBodyEvents: g,
              } = useRapier(),
              h = (0, i.useMemo)(
                () =>
                  _objectSpread2(
                    _objectSpread2(_objectSpread2({}, y), e),
                    {},
                    { children: void 0 },
                  ),
                [y, e],
              ),
              v = D.flatMap((e) => (Array.isArray(h[e]) ? [...h[e]] : h[e])),
              b = useChildColliderProps(u, h),
              x = useImperativeInstance(
                () => {
                  let e = rigidBodyDescFromOptions(h),
                    r = f.createRigidBody(e);
                  return "function" == typeof t && t(r), (p.current = r), r;
                },
                (e) => {
                  f.getRigidBody(e.handle) && f.removeRigidBody(e);
                },
                v,
              );
            (0, i.useEffect)(() => {
              let t = x(),
                r = createRigidBodyState({ rigidBody: t, object: u.current });
              return (
                m.set(t.handle, e.transformState ? e.transformState(r) : r),
                () => {
                  m.delete(t.handle);
                }
              );
            }, [x]),
              useUpdateRigidBodyOptions(x, h, m),
              useRigidBodyEvents(x, h, g);
            let C = (0, i.useMemo)(
              () => ({ ref: u, getRigidBody: x, options: h }),
              [x],
            );
            return i.createElement(
              W.Provider,
              { value: C },
              i.createElement(
                "object3D",
                _extends({ ref: u }, d, {
                  position: n,
                  rotation: l,
                  quaternion: s,
                  scale: a,
                }),
                r,
                b.map((e, t) => i.createElement(F, _extends({ key: t }, e))),
              ),
            );
          }),
        );
      q.displayName = "RigidBody";
      let L = (0, i.memo)((e) => {
        let { children: t, type: r } = e,
          { physicsOptions: o } = useRapier(),
          n = (0, i.useRef)(null),
          { options: l } = useRigidBodyContext(),
          a = (0, i.useMemo)(
            () =>
              _objectSpread2(
                _objectSpread2(_objectSpread2({}, o), l),
                {},
                { children: void 0, colliders: r },
              ),
            [o, l],
          ),
          s = useChildColliderProps(n, a, !1);
        return i.createElement(
          "object3D",
          { ref: n, userData: { r3RapierType: "MeshCollider" } },
          t,
          s.map((e, t) => i.createElement(F, _extends({ key: t }, e))),
        );
      });
      L.displayName = "MeshCollider";
      let G = [
          "children",
          "instances",
          "colliderNodes",
          "position",
          "rotation",
          "quaternion",
          "scale",
        ],
        U = (0, i.memo)(
          (0, i.forwardRef)((e, t) => {
            let r = useForwardedRef(t, []),
              o = (0, i.useRef)(null),
              n = (0, i.useRef)(null),
              {
                children: a,
                instances: s,
                colliderNodes: c = [],
                position: d,
                rotation: u,
                quaternion: p,
                scale: f,
              } = e,
              m = _objectWithoutProperties(e, G),
              y = useChildColliderProps(
                o,
                _objectSpread2(_objectSpread2({}, e), {}, { children: void 0 }),
              ),
              getInstancedMesh = () => {
                let e = n.current.children[0];
                if (e && "isInstancedMesh" in e) return e;
              };
            (0, i.useEffect)(() => {
              let e = getInstancedMesh();
              e
                ? e.instanceMatrix.setUsage(l.DynamicDrawUsage)
                : console.warn(
                    "InstancedRigidBodies expects exactly one child, which must be an InstancedMesh",
                  );
            }, []);
            let applyInstancedState = (e, t) => {
              let r = getInstancedMesh();
              return r
                ? _objectSpread2(
                    _objectSpread2({}, e),
                    {},
                    {
                      getMatrix: (e) => (r.getMatrixAt(t, e), e),
                      setMatrix: (e) => {
                        r.setMatrixAt(t, e),
                          (r.instanceMatrix.needsUpdate = !0);
                      },
                      meshType: "instancedMesh",
                    },
                  )
                : e;
            };
            return i.createElement(
              "object3D",
              _extends({ ref: o }, m, {
                position: d,
                rotation: u,
                quaternion: p,
                scale: f,
              }),
              i.createElement("object3D", { ref: n }, a),
              null == s
                ? void 0
                : s.map((e, t) =>
                    i.createElement(
                      q,
                      _extends({}, m, e, {
                        ref: (e) => (r.current[t] = e),
                        transformState: (e) => applyInstancedState(e, t),
                      }),
                      i.createElement(
                        i.Fragment,
                        null,
                        c.map((e, t) =>
                          i.createElement(i.Fragment, { key: t }, e),
                        ),
                        y.map((e, t) =>
                          i.createElement(F, _extends({ key: t }, e)),
                        ),
                      ),
                    ),
                  ),
            );
          }),
        );
      U.displayName = "InstancedRigidBodies";
    },
    64063: function (e) {
      e.exports = function equal(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          if (e.constructor !== t.constructor) return !1;
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (o = r; 0 != o--; ) if (!equal(e[o], t[o])) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
          if ((r = (n = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (o = r; 0 != o--; )
            if (!Object.prototype.hasOwnProperty.call(t, n[o])) return !1;
          for (o = r; 0 != o--; ) {
            var r,
              o,
              n,
              i = n[o];
            if (!equal(e[i], t[i])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      };
    },
    17103: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(84297);
      let n = (0, o.Z)("ArrowLeftRight", [
        ["path", { d: "M8 3 4 7l4 4", key: "9rb6wj" }],
        ["path", { d: "M4 7h16", key: "6tx8e3" }],
        ["path", { d: "m16 21 4-4-4-4", key: "siv7j2" }],
        ["path", { d: "M20 17H4", key: "h6l3hr" }],
      ]);
    },
    63494: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(84297);
      let n = (0, o.Z)("Cpu", [
        [
          "rect",
          { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
        ],
        ["rect", { x: "9", y: "9", width: "6", height: "6", key: "o3kz5p" }],
        ["path", { d: "M15 2v2", key: "13l42r" }],
        ["path", { d: "M15 20v2", key: "15mkzm" }],
        ["path", { d: "M2 15h2", key: "1gxd5l" }],
        ["path", { d: "M2 9h2", key: "1bbxkp" }],
        ["path", { d: "M20 15h2", key: "19e6y8" }],
        ["path", { d: "M20 9h2", key: "19tzq7" }],
        ["path", { d: "M9 2v2", key: "165o2o" }],
        ["path", { d: "M9 20v2", key: "i2bqo8" }],
      ]);
    },
    33587: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(84297);
      let n = (0, o.Z)("Database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
      ]);
    },
    57307: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(84297);
      let n = (0, o.Z)("Share2", [
        ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
        ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
        ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
        [
          "line",
          { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
        ],
        [
          "line",
          { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
        ],
      ]);
    },
    41962: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(84297);
      let n = (0, o.Z)("Smartphone", [
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
    18660: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var o = r(84297);
      let n = (0, o.Z)("TerminalSquare", [
        ["path", { d: "m7 11 2-2-2-2", key: "1lz0vl" }],
        ["path", { d: "M11 13h4", key: "1p7l4v" }],
        [
          "rect",
          {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn",
          },
        ],
      ]);
    },
    64950: function (e, t, r) {
      r.d(t, {
        J: function () {
          return FontLoader;
        },
        Z: function () {
          return Font;
        },
      });
      var o = r(99477),
        n = Object.defineProperty,
        __defNormalProp = (e, t, r) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        __publicField = (e, t, r) => (
          __defNormalProp(e, "symbol" != typeof t ? t + "" : t, r), r
        );
      let FontLoader = class FontLoader extends o.Loader {
        constructor(e) {
          super(e);
        }
        load(e, t, r, n) {
          let i = new o.FileLoader(this.manager);
          i.setPath(this.path),
            i.setRequestHeader(this.requestHeader),
            i.setWithCredentials(this.withCredentials),
            i.load(
              e,
              (e) => {
                if ("string" != typeof e) throw Error("unsupported data type");
                let r = JSON.parse(e),
                  o = this.parse(r);
                t && t(o);
              },
              r,
              n,
            );
        }
        loadAsync(e, t) {
          return super.loadAsync(e, t);
        }
        parse(e) {
          return new Font(e);
        }
      };
      let Font = class Font {
        constructor(e) {
          __publicField(this, "data"), (this.data = e);
        }
        generateShapes(e, t = 100, r) {
          let n = [],
            i = { letterSpacing: 0, lineHeight: 1, ...r },
            l = (function (e, t, r, n) {
              let i = Array.from(e),
                l = t / r.resolution,
                a =
                  (r.boundingBox.yMax -
                    r.boundingBox.yMin +
                    r.underlineThickness) *
                  l,
                s = [],
                c = 0,
                d = 0;
              for (let e = 0; e < i.length; e++) {
                let t = i[e];
                if ("\n" === t) (c = 0), (d -= a * n.lineHeight);
                else {
                  let e = (function (e, t, r, n, i) {
                    let l, a, s, c, d, u, p, f;
                    let m = i.glyphs[e] || i.glyphs["?"];
                    if (!m) {
                      console.error(
                        'THREE.Font: character "' +
                          e +
                          '" does not exists in font family ' +
                          i.familyName +
                          ".",
                      );
                      return;
                    }
                    let y = new o.ShapePath();
                    if (m.o) {
                      let e =
                        m._cachedOutline || (m._cachedOutline = m.o.split(" "));
                      for (let o = 0, i = e.length; o < i; ) {
                        let i = e[o++];
                        switch (i) {
                          case "m":
                            (l = parseInt(e[o++]) * t + r),
                              (a = parseInt(e[o++]) * t + n),
                              y.moveTo(l, a);
                            break;
                          case "l":
                            (l = parseInt(e[o++]) * t + r),
                              (a = parseInt(e[o++]) * t + n),
                              y.lineTo(l, a);
                            break;
                          case "q":
                            (s = parseInt(e[o++]) * t + r),
                              (c = parseInt(e[o++]) * t + n),
                              (d = parseInt(e[o++]) * t + r),
                              (u = parseInt(e[o++]) * t + n),
                              y.quadraticCurveTo(d, u, s, c);
                            break;
                          case "b":
                            (s = parseInt(e[o++]) * t + r),
                              (c = parseInt(e[o++]) * t + n),
                              (d = parseInt(e[o++]) * t + r),
                              (u = parseInt(e[o++]) * t + n),
                              (p = parseInt(e[o++]) * t + r),
                              (f = parseInt(e[o++]) * t + n),
                              y.bezierCurveTo(d, u, p, f, s, c);
                        }
                      }
                    }
                    return { offsetX: m.ha * t, path: y };
                  })(t, l, c, d, r);
                  e && ((c += e.offsetX + n.letterSpacing), s.push(e.path));
                }
              }
              return s;
            })(e, t, this.data, i);
          for (let e = 0, t = l.length; e < t; e++)
            Array.prototype.push.apply(n, l[e].toShapes(!1));
          return n;
        }
      };
      __publicField(Font, "isFont"), __publicField(Font, "type");
    },
    80578: function (e, t, r) {
      r.d(t, {
        H: function () {
          return useTransform;
        },
      });
      var o = r(64606);
      let isCustomValueType = (e) => "object" == typeof e && e.mix,
        getMixer = (e) => (isCustomValueType(e) ? e.mix : void 0);
      var n = r(4960),
        i = r(58868),
        l = r(2074),
        a = r(96681);
      function useTransform(e, t, r, n) {
        let i =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  r = t ? 0 : -1,
                  n = e[0 + r],
                  i = e[1 + r],
                  l = e[2 + r],
                  a = e[3 + r],
                  s = (0, o.s)(i, l, { mixer: getMixer(l[0]), ...a });
                return t ? s(n) : s;
              })(t, r, n);
        return Array.isArray(e)
          ? useListTransform(e, i)
          : useListTransform([e], ([e]) => i(e));
      }
      function useListTransform(e, t) {
        let r = (0, a.h)(() => []);
        return (function (e, t) {
          let r = (0, n.c)(t()),
            updateValue = () => r.set(t());
          return (
            updateValue(),
            (0, i.L)(() => {
              let scheduleUpdate = () => l.Wi.update(updateValue, !1, !0),
                t = e.map((e) => e.on("change", scheduleUpdate));
              return () => {
                t.forEach((e) => e()), (0, l.Pn)(updateValue);
              };
            }),
            r
          );
        })(e, () => {
          r.length = 0;
          let o = e.length;
          for (let t = 0; t < o; t++) r[t] = e[t].get();
          return t(r);
        });
      }
    },
    69542: function (e, t, r) {
      r.d(t, {
        DO: function () {
          return generateUUID;
        },
      });
      let o = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "0a",
        "0b",
        "0c",
        "0d",
        "0e",
        "0f",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "1a",
        "1b",
        "1c",
        "1d",
        "1e",
        "1f",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "2a",
        "2b",
        "2c",
        "2d",
        "2e",
        "2f",
        "30",
        "31",
        "32",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "3a",
        "3b",
        "3c",
        "3d",
        "3e",
        "3f",
        "40",
        "41",
        "42",
        "43",
        "44",
        "45",
        "46",
        "47",
        "48",
        "49",
        "4a",
        "4b",
        "4c",
        "4d",
        "4e",
        "4f",
        "50",
        "51",
        "52",
        "53",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "5a",
        "5b",
        "5c",
        "5d",
        "5e",
        "5f",
        "60",
        "61",
        "62",
        "63",
        "64",
        "65",
        "66",
        "67",
        "68",
        "69",
        "6a",
        "6b",
        "6c",
        "6d",
        "6e",
        "6f",
        "70",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "78",
        "79",
        "7a",
        "7b",
        "7c",
        "7d",
        "7e",
        "7f",
        "80",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "89",
        "8a",
        "8b",
        "8c",
        "8d",
        "8e",
        "8f",
        "90",
        "91",
        "92",
        "93",
        "94",
        "95",
        "96",
        "97",
        "98",
        "99",
        "9a",
        "9b",
        "9c",
        "9d",
        "9e",
        "9f",
        "a0",
        "a1",
        "a2",
        "a3",
        "a4",
        "a5",
        "a6",
        "a7",
        "a8",
        "a9",
        "aa",
        "ab",
        "ac",
        "ad",
        "ae",
        "af",
        "b0",
        "b1",
        "b2",
        "b3",
        "b4",
        "b5",
        "b6",
        "b7",
        "b8",
        "b9",
        "ba",
        "bb",
        "bc",
        "bd",
        "be",
        "bf",
        "c0",
        "c1",
        "c2",
        "c3",
        "c4",
        "c5",
        "c6",
        "c7",
        "c8",
        "c9",
        "ca",
        "cb",
        "cc",
        "cd",
        "ce",
        "cf",
        "d0",
        "d1",
        "d2",
        "d3",
        "d4",
        "d5",
        "d6",
        "d7",
        "d8",
        "d9",
        "da",
        "db",
        "dc",
        "dd",
        "de",
        "df",
        "e0",
        "e1",
        "e2",
        "e3",
        "e4",
        "e5",
        "e6",
        "e7",
        "e8",
        "e9",
        "ea",
        "eb",
        "ec",
        "ed",
        "ee",
        "ef",
        "f0",
        "f1",
        "f2",
        "f3",
        "f4",
        "f5",
        "f6",
        "f7",
        "f8",
        "f9",
        "fa",
        "fb",
        "fc",
        "fd",
        "fe",
        "ff",
      ];
      function generateUUID() {
        let e = (4294967295 * Math.random()) | 0,
          t = (4294967295 * Math.random()) | 0,
          r = (4294967295 * Math.random()) | 0,
          n = (4294967295 * Math.random()) | 0,
          i =
            o[255 & e] +
            o[(e >> 8) & 255] +
            o[(e >> 16) & 255] +
            o[(e >> 24) & 255] +
            "-" +
            o[255 & t] +
            o[(t >> 8) & 255] +
            "-" +
            o[((t >> 16) & 15) | 64] +
            o[(t >> 24) & 255] +
            "-" +
            o[(63 & r) | 128] +
            o[(r >> 8) & 255] +
            "-" +
            o[(r >> 16) & 255] +
            o[(r >> 24) & 255] +
            o[255 & n] +
            o[(n >> 8) & 255] +
            o[(n >> 16) & 255] +
            o[(n >> 24) & 255];
        return i.toLowerCase();
      }
    },
  },
]);
