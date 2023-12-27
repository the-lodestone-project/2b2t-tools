(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5029],
  {
    38715: function (t, a, i) {
      "use strict";
      let o, u, s;
      i.d(a, {
        A: function () {
          return useFrame;
        },
        B: function () {
          return Block;
        },
        C: function () {
          return useGraph;
        },
        D: function () {
          return useLoader;
        },
        E: function () {
          return ErrorBoundary;
        },
        a: function () {
          return createRoot;
        },
        b: function () {
          return A;
        },
        c: function () {
          return createEvents;
        },
        d: function () {
          return unmountComponentAtNode;
        },
        e: function () {
          return extend;
        },
        i: function () {
          return isRef;
        },
        u: function () {
          return useMutableCallback;
        },
        z: function () {
          return useThree;
        },
      });
      var p,
        S,
        w = i(99477),
        _ = i(67294),
        E = i(32576),
        N = i(14671),
        L = i(76525),
        j = i.n(L),
        F = i(63840),
        D = i(94881);
      let isOrthographicCamera = (t) => t && t.isOrthographicCamera,
        isRef = (t) => t && t.hasOwnProperty("current"),
        A =
          "undefined" != typeof window &&
          ((null != (p = window.document) && p.createElement) ||
            (null == (S = window.navigator) ? void 0 : S.product) ===
              "ReactNative")
            ? _.useLayoutEffect
            : _.useEffect;
      function useMutableCallback(t) {
        let a = _.useRef(t);
        return A(() => void (a.current = t), [t]), a;
      }
      function Block({ set: t }) {
        return A(() => (t(new Promise(() => null)), () => t(!1)), [t]), null;
      }
      let ErrorBoundary = class ErrorBoundary extends _.Component {
        constructor(...t) {
          super(...t), (this.state = { error: !1 });
        }
        componentDidCatch(t) {
          this.props.set(t);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      };
      ErrorBoundary.getDerivedStateFromError = () => ({ error: !0 });
      let B = "__default",
        isDiffSet = (t) => t && !!t.memoized && !!t.changes;
      function calculateDpr(t) {
        let a = "undefined" != typeof window ? window.devicePixelRatio : 1;
        return Array.isArray(t) ? Math.min(Math.max(t[0], a), t[1]) : t;
      }
      let getRootState = (t) => {
          var a;
          return null == (a = t.__r3f) ? void 0 : a.root.getState();
        },
        U = {
          obj: (t) => t === Object(t) && !U.arr(t) && "function" != typeof t,
          fun: (t) => "function" == typeof t,
          str: (t) => "string" == typeof t,
          num: (t) => "number" == typeof t,
          boo: (t) => "boolean" == typeof t,
          und: (t) => void 0 === t,
          arr: (t) => Array.isArray(t),
          equ(
            t,
            a,
            {
              arrays: i = "shallow",
              objects: o = "reference",
              strict: u = !0,
            } = {},
          ) {
            let s;
            if (typeof t != typeof a || !!t != !!a) return !1;
            if (U.str(t) || U.num(t)) return t === a;
            let p = U.obj(t);
            if (p && "reference" === o) return t === a;
            let S = U.arr(t);
            if (S && "reference" === i) return t === a;
            if ((S || p) && t === a) return !0;
            for (s in t) if (!(s in a)) return !1;
            for (s in u ? a : t) if (t[s] !== a[s]) return !1;
            if (U.und(s)) {
              if (
                (S && 0 === t.length && 0 === a.length) ||
                (p &&
                  0 === Object.keys(t).length &&
                  0 === Object.keys(a).length)
              )
                return !0;
              if (t !== a) return !1;
            }
            return !0;
          },
        };
      function buildGraph(t) {
        let a = { nodes: {}, materials: {} };
        return (
          t &&
            t.traverse((t) => {
              t.name && (a.nodes[t.name] = t),
                t.material &&
                  !a.materials[t.material.name] &&
                  (a.materials[t.material.name] = t.material);
            }),
          a
        );
      }
      function prepare(t, a) {
        return (
          ((null != a && a.primitive) || !t.__r3f) &&
            (t.__r3f = {
              type: "",
              root: null,
              previousAttach: null,
              memoizedProps: {},
              eventCount: 0,
              handlers: {},
              objects: [],
              parent: null,
              ...a,
            }),
          t
        );
      }
      function resolve(t, a) {
        let i = t;
        if (!a.includes("-")) return { target: i, key: a };
        {
          let o = a.split("-"),
            u = o.pop();
          return { target: (i = o.reduce((t, a) => t[a], t)), key: u };
        }
      }
      let Q = /-\d+$/;
      function attach(t, a, i) {
        if (U.str(i)) {
          if (Q.test(i)) {
            let a = i.replace(Q, ""),
              { target: o, key: u } = resolve(t, a);
            Array.isArray(o[u]) || (o[u] = []);
          }
          let { target: o, key: u } = resolve(t, i);
          (a.__r3f.previousAttach = o[u]), (o[u] = a);
        } else a.__r3f.previousAttach = i(t, a);
      }
      function detach(t, a, i) {
        var o, u;
        if (U.str(i)) {
          let { target: o, key: u } = resolve(t, i),
            s = a.__r3f.previousAttach;
          void 0 === s ? delete o[u] : (o[u] = s);
        } else
          null == (o = a.__r3f) ||
            null == o.previousAttach ||
            o.previousAttach(t, a);
        null == (u = a.__r3f) || delete u.previousAttach;
      }
      function diffProps(
        t,
        { children: a, key: i, ref: o, ...u },
        { children: s, key: p, ref: S, ...w } = {},
        _ = !1,
      ) {
        var E;
        let N = null != (E = null == t ? void 0 : t.__r3f) ? E : {},
          L = Object.entries(u),
          j = [];
        if (_) {
          let t = Object.keys(w);
          for (let a = 0; a < t.length; a++)
            u.hasOwnProperty(t[a]) || L.unshift([t[a], B + "remove"]);
        }
        L.forEach(([a, i]) => {
          var o;
          if (
            (null != (o = t.__r3f) && o.primitive && "object" === a) ||
            U.equ(i, w[a])
          )
            return;
          if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(a))
            return j.push([a, i, !0, []]);
          let s = [];
          for (let t in (a.includes("-") && (s = a.split("-")),
          j.push([a, i, !1, s]),
          u)) {
            let i = u[t];
            t.startsWith(`${a}-`) && j.push([t, i, !1, t.split("-")]);
          }
        });
        let F = { ...u };
        return (
          N.memoizedProps &&
            N.memoizedProps.args &&
            (F.args = N.memoizedProps.args),
          N.memoizedProps &&
            N.memoizedProps.attach &&
            (F.attach = N.memoizedProps.attach),
          { memoized: F, changes: j }
        );
      }
      function applyProps$1(t, a) {
        var i, o, u, s, p;
        let S = null != (i = t.__r3f) ? i : {},
          _ = S.root,
          E =
            null !=
            (o =
              null == _ ? void 0 : null == _.getState ? void 0 : _.getState())
              ? o
              : {},
          { memoized: N, changes: L } = isDiffSet(a) ? a : diffProps(t, a),
          j = S.eventCount;
        t.__r3f && (t.__r3f.memoizedProps = N);
        for (let a = 0; a < L.length; a++) {
          let [i, o, u, _] = L[a],
            j = t,
            F = j[i];
          if (_.length && !((F = _.reduce((t, a) => t[a], t)) && F.set)) {
            let [a, ...o] = _.reverse();
            (j = o.reverse().reduce((t, a) => t[a], t)), (i = a);
          }
          if (o === B + "remove") {
            if (F && F.constructor)
              o = new F.constructor(...(null != (s = N.args) ? s : []));
            else if (j.constructor) {
              let t = new j.constructor(
                ...(null != (p = j.__r3f.memoizedProps.args) ? p : []),
              );
              (o = t[F]), t.dispose && t.dispose();
            } else o = 0;
          }
          if (u)
            o ? (S.handlers[i] = o) : delete S.handlers[i],
              (S.eventCount = Object.keys(S.handlers).length);
          else if (F && F.set && (F.copy || F instanceof w.Layers)) {
            if (Array.isArray(o)) F.fromArray ? F.fromArray(o) : F.set(...o);
            else if (
              F.copy &&
              o &&
              o.constructor &&
              F.constructor.name === o.constructor.name
            )
              F.copy(o);
            else if (void 0 !== o) {
              let t = F instanceof w.Color;
              !t && F.setScalar
                ? F.setScalar(o)
                : F instanceof w.Layers && o instanceof w.Layers
                  ? (F.mask = o.mask)
                  : F.set(o);
            }
          } else
            (j[i] = o),
              !E.linear &&
                j[i] instanceof w.Texture &&
                (j[i].encoding = w.sRGBEncoding);
          invalidateInstance(t);
        }
        if (S.parent && E.internal && t.raycast && j !== S.eventCount) {
          let a = E.internal.interaction.indexOf(t);
          a > -1 && E.internal.interaction.splice(a, 1),
            S.eventCount && E.internal.interaction.push(t);
        }
        return (
          L.length && null != (u = t.__r3f) && u.parent && updateInstance(t), t
        );
      }
      function invalidateInstance(t) {
        var a, i;
        let o =
          null == (a = t.__r3f)
            ? void 0
            : null == (i = a.root)
              ? void 0
              : null == i.getState
                ? void 0
                : i.getState();
        o && 0 === o.internal.frames && o.invalidate();
      }
      function updateInstance(t) {
        null == t.onUpdate || t.onUpdate(t);
      }
      function makeId(t) {
        return (t.eventObject || t.object).uuid + "/" + t.index + t.instanceId;
      }
      function releaseInternalPointerCapture(t, a, i, o) {
        let u = i.get(a);
        u &&
          (i.delete(a),
          0 === i.size && (t.delete(o), u.target.releasePointerCapture(o)));
      }
      function createEvents(t) {
        function filterPointerEvents(t) {
          return t.filter((t) =>
            ["Move", "Over", "Enter", "Out", "Leave"].some((a) => {
              var i;
              return null == (i = t.__r3f)
                ? void 0
                : i.handlers["onPointer" + a];
            }),
          );
        }
        function cancelPointer(a) {
          let { internal: i } = t.getState();
          for (let t of i.hovered.values())
            if (
              !a.length ||
              !a.find(
                (a) =>
                  a.object === t.object &&
                  a.index === t.index &&
                  a.instanceId === t.instanceId,
              )
            ) {
              let o = t.eventObject,
                u = o.__r3f,
                s = null == u ? void 0 : u.handlers;
              if ((i.hovered.delete(makeId(t)), null != u && u.eventCount)) {
                let i = { ...t, intersections: a };
                null == s.onPointerOut || s.onPointerOut(i),
                  null == s.onPointerLeave || s.onPointerLeave(i);
              }
            }
        }
        function pointerMissed(t, a) {
          for (let i = 0; i < a.length; i++) {
            let o = a[i].__r3f;
            null == o ||
              null == o.handlers.onPointerMissed ||
              o.handlers.onPointerMissed(t);
          }
        }
        return {
          handlePointer: function (a) {
            switch (a) {
              case "onPointerLeave":
              case "onPointerCancel":
                return () => cancelPointer([]);
              case "onLostPointerCapture":
                return (a) => {
                  let { internal: i } = t.getState();
                  "pointerId" in a &&
                    i.capturedMap.has(a.pointerId) &&
                    (i.capturedMap.delete(a.pointerId), cancelPointer([]));
                };
            }
            return function (i) {
              let { onPointerMissed: o, internal: u } = t.getState();
              u.lastEvent.current = i;
              let s = "onPointerMove" === a,
                p =
                  "onClick" === a ||
                  "onContextMenu" === a ||
                  "onDoubleClick" === a,
                S = (function (a, i) {
                  let o = t.getState(),
                    u = new Set(),
                    s = [],
                    p = i ? i(o.internal.interaction) : o.internal.interaction;
                  for (let t = 0; t < p.length; t++) {
                    let a = getRootState(p[t]);
                    a && (a.raycaster.camera = void 0);
                  }
                  o.previousRoot ||
                    null == o.events.compute ||
                    o.events.compute(a, o);
                  let S = p
                    .flatMap(function (t) {
                      let i = getRootState(t);
                      if (
                        !i ||
                        !i.events.enabled ||
                        null === i.raycaster.camera
                      )
                        return [];
                      if (void 0 === i.raycaster.camera) {
                        var o;
                        null == i.events.compute ||
                          i.events.compute(
                            a,
                            i,
                            null == (o = i.previousRoot)
                              ? void 0
                              : o.getState(),
                          ),
                          void 0 === i.raycaster.camera &&
                            (i.raycaster.camera = null);
                      }
                      return i.raycaster.camera
                        ? i.raycaster.intersectObject(t, !0)
                        : [];
                    })
                    .sort((t, a) => {
                      let i = getRootState(t.object),
                        o = getRootState(a.object);
                      return (
                        (i && o && o.events.priority - i.events.priority) ||
                        t.distance - a.distance
                      );
                    })
                    .filter((t) => {
                      let a = makeId(t);
                      return !u.has(a) && (u.add(a), !0);
                    });
                  for (let t of (o.events.filter && (S = o.events.filter(S, o)),
                  S)) {
                    let a = t.object;
                    for (; a; ) {
                      var w;
                      null != (w = a.__r3f) &&
                        w.eventCount &&
                        s.push({ ...t, eventObject: a }),
                        (a = a.parent);
                    }
                  }
                  if (
                    "pointerId" in a &&
                    o.internal.capturedMap.has(a.pointerId)
                  )
                    for (let t of o.internal.capturedMap
                      .get(a.pointerId)
                      .values())
                      u.has(makeId(t.intersection)) || s.push(t.intersection);
                  return s;
                })(i, s ? filterPointerEvents : void 0),
                _ = p
                  ? (function (a) {
                      let { internal: i } = t.getState(),
                        o = a.offsetX - i.initialClick[0],
                        u = a.offsetY - i.initialClick[1];
                      return Math.round(Math.sqrt(o * o + u * u));
                    })(i)
                  : 0;
              "onPointerDown" === a &&
                ((u.initialClick = [i.offsetX, i.offsetY]),
                (u.initialHits = S.map((t) => t.eventObject))),
                p &&
                  !S.length &&
                  _ <= 2 &&
                  (pointerMissed(i, u.interaction), o && o(i)),
                s && cancelPointer(S),
                (function (a, i, o, u) {
                  let s = t.getState();
                  if (a.length) {
                    let t = { stopped: !1 };
                    for (let p of a) {
                      let S = getRootState(p.object) || s,
                        {
                          raycaster: _,
                          pointer: E,
                          camera: N,
                          internal: L,
                        } = S,
                        j = new w.Vector3(E.x, E.y, 0).unproject(N),
                        hasPointerCapture = (t) => {
                          var a, i;
                          return (
                            null !=
                              (a =
                                null == (i = L.capturedMap.get(t))
                                  ? void 0
                                  : i.has(p.eventObject)) && a
                          );
                        },
                        setPointerCapture = (t) => {
                          let a = { intersection: p, target: i.target };
                          L.capturedMap.has(t)
                            ? L.capturedMap.get(t).set(p.eventObject, a)
                            : L.capturedMap.set(
                                t,
                                new Map([[p.eventObject, a]]),
                              ),
                            i.target.setPointerCapture(t);
                        },
                        releasePointerCapture = (t) => {
                          let a = L.capturedMap.get(t);
                          a &&
                            releaseInternalPointerCapture(
                              L.capturedMap,
                              p.eventObject,
                              a,
                              t,
                            );
                        },
                        F = {};
                      for (let t in i) {
                        let a = i[t];
                        "function" != typeof a && (F[t] = a);
                      }
                      let D = {
                        ...p,
                        ...F,
                        pointer: E,
                        intersections: a,
                        stopped: t.stopped,
                        delta: o,
                        unprojectedPoint: j,
                        ray: _.ray,
                        camera: N,
                        stopPropagation() {
                          let o =
                            "pointerId" in i && L.capturedMap.get(i.pointerId);
                          if (
                            (!o || o.has(p.eventObject)) &&
                            ((D.stopped = t.stopped = !0),
                            L.hovered.size &&
                              Array.from(L.hovered.values()).find(
                                (t) => t.eventObject === p.eventObject,
                              ))
                          ) {
                            let t = a.slice(0, a.indexOf(p));
                            cancelPointer([...t, p]);
                          }
                        },
                        target: {
                          hasPointerCapture,
                          setPointerCapture,
                          releasePointerCapture,
                        },
                        currentTarget: {
                          hasPointerCapture,
                          setPointerCapture,
                          releasePointerCapture,
                        },
                        nativeEvent: i,
                      };
                      if ((u(D), !0 === t.stopped)) break;
                    }
                  }
                })(S, i, _, function (t) {
                  let o = t.eventObject,
                    S = o.__r3f,
                    w = null == S ? void 0 : S.handlers;
                  if (null != S && S.eventCount) {
                    if (s) {
                      if (
                        w.onPointerOver ||
                        w.onPointerEnter ||
                        w.onPointerOut ||
                        w.onPointerLeave
                      ) {
                        let a = makeId(t),
                          i = u.hovered.get(a);
                        i
                          ? i.stopped && t.stopPropagation()
                          : (u.hovered.set(a, t),
                            null == w.onPointerOver || w.onPointerOver(t),
                            null == w.onPointerEnter || w.onPointerEnter(t));
                      }
                      null == w.onPointerMove || w.onPointerMove(t);
                    } else {
                      let s = w[a];
                      s
                        ? (!p || u.initialHits.includes(o)) &&
                          (pointerMissed(
                            i,
                            u.interaction.filter(
                              (t) => !u.initialHits.includes(t),
                            ),
                          ),
                          s(t))
                        : p &&
                          u.initialHits.includes(o) &&
                          pointerMissed(
                            i,
                            u.interaction.filter(
                              (t) => !u.initialHits.includes(t),
                            ),
                          );
                    }
                  }
                });
            };
          },
        };
      }
      let $ = {},
        extend = (t) => void ($ = { ...$, ...t }),
        isRenderer = (t) => !!(null != t && t.render),
        W = _.createContext(null),
        createStore = (t, a) => {
          let i = (0, N.Z)((i, o) => {
              let u;
              let s = new w.Vector3(),
                p = new w.Vector3(),
                S = new w.Vector3();
              function getCurrentViewport(t = o().camera, a = p, i = o().size) {
                let { width: u, height: _, top: E, left: N } = i,
                  L = u / _;
                a instanceof w.Vector3 ? S.copy(a) : S.set(...a);
                let j = t.getWorldPosition(s).distanceTo(S);
                if (isOrthographicCamera(t))
                  return {
                    width: u / t.zoom,
                    height: _ / t.zoom,
                    top: E,
                    left: N,
                    factor: 1,
                    distance: j,
                    aspect: L,
                  };
                {
                  let a = (t.fov * Math.PI) / 180,
                    i = 2 * Math.tan(a / 2) * j,
                    o = i * (u / _);
                  return {
                    width: o,
                    height: i,
                    top: E,
                    left: N,
                    factor: u / o,
                    distance: j,
                    aspect: L,
                  };
                }
              }
              let setPerformanceCurrent = (t) =>
                  i((a) => ({ performance: { ...a.performance, current: t } })),
                E = new w.Vector2(),
                N = {
                  set: i,
                  get: o,
                  gl: null,
                  camera: null,
                  raycaster: null,
                  events: { priority: 1, enabled: !0, connected: !1 },
                  xr: null,
                  invalidate: (a = 1) => t(o(), a),
                  advance: (t, i) => a(t, i, o()),
                  legacy: !1,
                  linear: !1,
                  flat: !1,
                  scene: prepare(new w.Scene()),
                  controls: null,
                  clock: new w.Clock(),
                  pointer: E,
                  mouse: E,
                  frameloop: "always",
                  onPointerMissed: void 0,
                  performance: {
                    current: 1,
                    min: 0.5,
                    max: 1,
                    debounce: 200,
                    regress: () => {
                      let t = o();
                      u && clearTimeout(u),
                        t.performance.current !== t.performance.min &&
                          setPerformanceCurrent(t.performance.min),
                        (u = setTimeout(
                          () => setPerformanceCurrent(o().performance.max),
                          t.performance.debounce,
                        ));
                    },
                  },
                  size: {
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    updateStyle: !1,
                  },
                  viewport: {
                    initialDpr: 0,
                    dpr: 0,
                    width: 0,
                    height: 0,
                    top: 0,
                    left: 0,
                    aspect: 0,
                    distance: 0,
                    factor: 0,
                    getCurrentViewport,
                  },
                  setEvents: (t) =>
                    i((a) => ({ ...a, events: { ...a.events, ...t } })),
                  setSize: (t, a, u, s, S) => {
                    let w = o().camera,
                      _ = {
                        width: t,
                        height: a,
                        top: s || 0,
                        left: S || 0,
                        updateStyle: u,
                      };
                    i((t) => ({
                      size: _,
                      viewport: {
                        ...t.viewport,
                        ...getCurrentViewport(w, p, _),
                      },
                    }));
                  },
                  setDpr: (t) =>
                    i((a) => {
                      let i = calculateDpr(t);
                      return {
                        viewport: {
                          ...a.viewport,
                          dpr: i,
                          initialDpr: a.viewport.initialDpr || i,
                        },
                      };
                    }),
                  setFrameloop: (t = "always") => {
                    let a = o().clock;
                    a.stop(),
                      (a.elapsedTime = 0),
                      "never" !== t && (a.start(), (a.elapsedTime = 0)),
                      i(() => ({ frameloop: t }));
                  },
                  previousRoot: void 0,
                  internal: {
                    active: !1,
                    priority: 0,
                    frames: 0,
                    lastEvent: _.createRef(),
                    interaction: [],
                    hovered: new Map(),
                    subscribers: [],
                    initialClick: [0, 0],
                    initialHits: [],
                    capturedMap: new Map(),
                    subscribe: (t, a, i) => {
                      let u = o().internal;
                      return (
                        (u.priority = u.priority + (a > 0 ? 1 : 0)),
                        u.subscribers.push({ ref: t, priority: a, store: i }),
                        (u.subscribers = u.subscribers.sort(
                          (t, a) => t.priority - a.priority,
                        )),
                        () => {
                          let i = o().internal;
                          null != i &&
                            i.subscribers &&
                            ((i.priority = i.priority - (a > 0 ? 1 : 0)),
                            (i.subscribers = i.subscribers.filter(
                              (a) => a.ref !== t,
                            )));
                        }
                      );
                    },
                  },
                };
              return N;
            }),
            o = i.getState(),
            u = o.size,
            s = o.viewport.dpr,
            p = o.camera;
          return (
            i.subscribe(() => {
              let {
                camera: t,
                size: a,
                viewport: o,
                gl: S,
                set: w,
              } = i.getState();
              (a !== u || o.dpr !== s) &&
                ((u = a),
                (s = o.dpr),
                t.manual ||
                  (isOrthographicCamera(t)
                    ? ((t.left = -(a.width / 2)),
                      (t.right = a.width / 2),
                      (t.top = a.height / 2),
                      (t.bottom = -(a.height / 2)))
                    : (t.aspect = a.width / a.height),
                  t.updateProjectionMatrix(),
                  t.updateMatrixWorld()),
                S.setPixelRatio(o.dpr),
                S.setSize(a.width, a.height, a.updateStyle)),
                t !== p &&
                  ((p = t),
                  w((a) => ({
                    viewport: {
                      ...a.viewport,
                      ...a.viewport.getCurrentViewport(t),
                    },
                  })));
            }),
            i.subscribe((a) => t(a)),
            i
          );
        },
        q = new Set(),
        V = new Set(),
        Y = new Set();
      function run(t, a) {
        if (t.size) for (let { callback: i } of t.values()) i(a);
      }
      function flushGlobalEffects(t, a) {
        switch (t) {
          case "before":
            return run(q, a);
          case "after":
            return run(V, a);
          case "tail":
            return run(Y, a);
        }
      }
      function render$1(t, a, i) {
        let p = a.clock.getDelta();
        for (
          "never" === a.frameloop &&
            "number" == typeof t &&
            ((p = t - a.clock.elapsedTime),
            (a.clock.oldTime = a.clock.elapsedTime),
            (a.clock.elapsedTime = t)),
            u = a.internal.subscribers,
            o = 0;
          o < u.length;
          o++
        )
          (s = u[o]).ref.current(s.store.getState(), p, i);
        return (
          !a.internal.priority && a.gl.render && a.gl.render(a.scene, a.camera),
          (a.internal.frames = Math.max(0, a.internal.frames - 1)),
          "always" === a.frameloop ? 1 : a.internal.frames
        );
      }
      function useStore() {
        let t = _.useContext(W);
        if (!t)
          throw Error(
            "R3F: Hooks can only be used within the Canvas component!",
          );
        return t;
      }
      function useThree(t = (t) => t, a) {
        return useStore()(t, a);
      }
      function useFrame(t, a = 0) {
        let i = useStore(),
          o = i.getState().internal.subscribe,
          u = useMutableCallback(t);
        return A(() => o(u, a, i), [a, o, i]), null;
      }
      function useGraph(t) {
        return _.useMemo(() => buildGraph(t), [t]);
      }
      function loadingFn(t, a) {
        return function (i, ...o) {
          let u = new i();
          return (
            t && t(u),
            Promise.all(
              o.map(
                (t) =>
                  new Promise((i, o) =>
                    u.load(
                      t,
                      (t) => {
                        t.scene && Object.assign(t, buildGraph(t.scene)), i(t);
                      },
                      a,
                      (a) => o(Error(`Could not load ${t}: ${a.message})`)),
                    ),
                  ),
              ),
            )
          );
        };
      }
      function useLoader(t, a, i, o) {
        let u = Array.isArray(a) ? a : [a],
          s = (0, D.Rq)(loadingFn(i, o), [t, ...u], { equal: U.equ });
        return Array.isArray(a) ? s : s[0];
      }
      (useLoader.preload = function (t, a, i) {
        let o = Array.isArray(a) ? a : [a];
        return (0, D.MA)(loadingFn(i), [t, ...o]);
      }),
        (useLoader.clear = function (t, a) {
          let i = Array.isArray(a) ? a : [a];
          return (0, D.ZH)([t, ...i]);
        });
      let X = new Map(),
        { invalidate: et, advance: en } = (function (t) {
          let a,
            i,
            o,
            u = !1;
          function loop(s) {
            for (let S of ((i = requestAnimationFrame(loop)),
            (u = !0),
            (a = 0),
            flushGlobalEffects("before", s),
            t.values())) {
              var p;
              (o = S.store.getState()).internal.active &&
                ("always" === o.frameloop || o.internal.frames > 0) &&
                !(null != (p = o.gl.xr) && p.isPresenting) &&
                (a += render$1(s, o));
            }
            if ((flushGlobalEffects("after", s), 0 === a))
              return (
                flushGlobalEffects("tail", s), (u = !1), cancelAnimationFrame(i)
              );
          }
          return {
            loop,
            invalidate: function invalidate(a, i = 1) {
              var o;
              if (!a)
                return t.forEach((t) => invalidate(t.store.getState()), i);
              (null != (o = a.gl.xr) && o.isPresenting) ||
                !a.internal.active ||
                "never" === a.frameloop ||
                ((a.internal.frames = Math.min(60, a.internal.frames + i)),
                u || ((u = !0), requestAnimationFrame(loop)));
            },
            advance: function (a, i = !0, o, u) {
              if ((i && flushGlobalEffects("before", a), o)) render$1(a, o, u);
              else for (let i of t.values()) render$1(a, i.store.getState());
              i && flushGlobalEffects("after", a);
            },
          };
        })(X),
        { reconciler: er, applyProps: el } = (function (t, a) {
          function createInstance(t, { args: a = [], attach: i, ...o }, u) {
            let s,
              p = `${t[0].toUpperCase()}${t.slice(1)}`;
            if ("primitive" === t) {
              if (void 0 === o.object)
                throw Error("R3F: Primitives without 'object' are invalid!");
              let a = o.object;
              s = prepare(a, { type: t, root: u, attach: i, primitive: !0 });
            } else {
              let o = $[p];
              if (!o)
                throw Error(
                  `R3F: ${p} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`,
                );
              if (!Array.isArray(a))
                throw Error("R3F: The args prop must be an array!");
              s = prepare(new o(...a), {
                type: t,
                root: u,
                attach: i,
                memoizedProps: { args: a },
              });
            }
            return (
              void 0 === s.__r3f.attach &&
                (s instanceof w.BufferGeometry
                  ? (s.__r3f.attach = "geometry")
                  : s instanceof w.Material && (s.__r3f.attach = "material")),
              "inject" !== p && applyProps$1(s, o),
              s
            );
          }
          function appendChild(t, a) {
            let i = !1;
            if (a) {
              var o, u;
              null != (o = a.__r3f) && o.attach
                ? attach(t, a, a.__r3f.attach)
                : a.isObject3D && t.isObject3D && (t.add(a), (i = !0)),
                i || null == (u = t.__r3f) || u.objects.push(a),
                a.__r3f || prepare(a, {}),
                (a.__r3f.parent = t),
                updateInstance(a),
                invalidateInstance(a);
            }
          }
          function insertBefore(t, a, i) {
            let o = !1;
            if (a) {
              var u, s;
              if (null != (u = a.__r3f) && u.attach)
                attach(t, a, a.__r3f.attach);
              else if (a.isObject3D && t.isObject3D) {
                (a.parent = t), a.dispatchEvent({ type: "added" });
                let u = t.children.filter((t) => t !== a),
                  s = u.indexOf(i);
                (t.children = [...u.slice(0, s), a, ...u.slice(s)]), (o = !0);
              }
              o || null == (s = t.__r3f) || s.objects.push(a),
                a.__r3f || prepare(a, {}),
                (a.__r3f.parent = t),
                updateInstance(a),
                invalidateInstance(a);
            }
          }
          function removeRecursive(t, a, i = !1) {
            t && [...t].forEach((t) => removeChild(a, t, i));
          }
          function removeChild(t, a, i) {
            if (a) {
              var o, u, s, p, S;
              a.__r3f && (a.__r3f.parent = null),
                null != (o = t.__r3f) &&
                  o.objects &&
                  (t.__r3f.objects = t.__r3f.objects.filter((t) => t !== a)),
                null != (u = a.__r3f) && u.attach
                  ? detach(t, a, a.__r3f.attach)
                  : a.isObject3D &&
                    t.isObject3D &&
                    (t.remove(a),
                    null != (p = a.__r3f) &&
                      p.root &&
                      (function (t, a) {
                        let { internal: i } = t.getState();
                        (i.interaction = i.interaction.filter((t) => t !== a)),
                          (i.initialHits = i.initialHits.filter(
                            (t) => t !== a,
                          )),
                          i.hovered.forEach((t, o) => {
                            (t.eventObject === a || t.object === a) &&
                              i.hovered.delete(o);
                          }),
                          i.capturedMap.forEach((t, o) => {
                            releaseInternalPointerCapture(
                              i.capturedMap,
                              a,
                              t,
                              o,
                            );
                          });
                      })(a.__r3f.root, a));
              let w = null == (s = a.__r3f) ? void 0 : s.primitive,
                _ = void 0 === i ? null !== a.dispose && !w : i;
              w ||
                (removeRecursive(
                  null == (S = a.__r3f) ? void 0 : S.objects,
                  a,
                  _,
                ),
                removeRecursive(a.children, a, _)),
                a.__r3f &&
                  (delete a.__r3f.root,
                  delete a.__r3f.objects,
                  delete a.__r3f.handlers,
                  delete a.__r3f.memoizedProps,
                  w || delete a.__r3f),
                _ &&
                  a.dispose &&
                  "Scene" !== a.type &&
                  (0, F.unstable_scheduleCallback)(
                    F.unstable_IdlePriority,
                    () => {
                      try {
                        a.dispose();
                      } catch (t) {}
                    },
                  ),
                invalidateInstance(t);
            }
          }
          let handleTextInstance = () =>
              console.warn(
                "Text is not allowed in the R3F tree! This could be stray whitespace or characters.",
              ),
            i = j()({
              createInstance,
              removeChild,
              appendChild,
              appendInitialChild: appendChild,
              insertBefore,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              supportsPersistence: !1,
              supportsHydration: !1,
              noTimeout: -1,
              appendChildToContainer: (t, a) => {
                if (!a) return;
                let i = t.getState().scene;
                i.__r3f && ((i.__r3f.root = t), appendChild(i, a));
              },
              removeChildFromContainer: (t, a) => {
                a && removeChild(t.getState().scene, a);
              },
              insertInContainerBefore: (t, a, i) => {
                if (!a || !i) return;
                let o = t.getState().scene;
                o.__r3f && insertBefore(o, a, i);
              },
              getRootHostContext: () => null,
              getChildHostContext: (t) => t,
              finalizeInitialChildren(t) {
                var a;
                let i = null != (a = null == t ? void 0 : t.__r3f) ? a : {};
                return !!i.handlers;
              },
              prepareUpdate(t, a, i, o) {
                if (t.__r3f.primitive && o.object && o.object !== t)
                  return [!0];
                {
                  let { args: a = [], children: u, ...s } = o,
                    { args: p = [], children: S, ...w } = i;
                  if (!Array.isArray(a))
                    throw Error("R3F: the args prop must be an array!");
                  if (a.some((t, a) => t !== p[a])) return [!0];
                  let _ = diffProps(t, s, w, !0);
                  return _.changes.length ? [!1, _] : null;
                }
              },
              commitUpdate(t, [a, i], o, u, s, p) {
                a
                  ? (function (t, a, i, o) {
                      var u;
                      let s = null == (u = t.__r3f) ? void 0 : u.parent;
                      if (!s) return;
                      let p = createInstance(a, i, t.__r3f.root);
                      if (t.children) {
                        for (let a of t.children) a.__r3f && appendChild(p, a);
                        t.children = t.children.filter((t) => !t.__r3f);
                      }
                      if (
                        (t.__r3f.objects.forEach((t) => appendChild(p, t)),
                        (t.__r3f.objects = []),
                        t.__r3f.autoRemovedBeforeAppend || removeChild(s, t),
                        p.parent && (p.__r3f.autoRemovedBeforeAppend = !0),
                        appendChild(s, p),
                        p.raycast && p.__r3f.eventCount)
                      ) {
                        let t = p.__r3f.root.getState();
                        t.internal.interaction.push(p);
                      }
                      [o, o.alternate].forEach((t) => {
                        null !== t &&
                          ((t.stateNode = p),
                          t.ref &&
                            ("function" == typeof t.ref
                              ? t.ref(p)
                              : (t.ref.current = p)));
                      });
                    })(t, o, s, p)
                  : applyProps$1(t, i);
              },
              commitMount(t, a, i, o) {
                var u;
                let s = null != (u = t.__r3f) ? u : {};
                t.raycast &&
                  s.handlers &&
                  s.eventCount &&
                  t.__r3f.root.getState().internal.interaction.push(t);
              },
              getPublicInstance: (t) => t,
              prepareForCommit: () => null,
              preparePortalMount: (t) => prepare(t.getState().scene),
              resetAfterCommit: () => {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
              hideInstance(t) {
                var a;
                let { attach: i, parent: o } = null != (a = t.__r3f) ? a : {};
                i && o && detach(o, t, i),
                  t.isObject3D && (t.visible = !1),
                  invalidateInstance(t);
              },
              unhideInstance(t, a) {
                var i;
                let { attach: o, parent: u } = null != (i = t.__r3f) ? i : {};
                o && u && attach(u, t, o),
                  ((t.isObject3D && null == a.visible) || a.visible) &&
                    (t.visible = !0),
                  invalidateInstance(t);
              },
              createTextInstance: handleTextInstance,
              hideTextInstance: handleTextInstance,
              unhideTextInstance: handleTextInstance,
              getCurrentEventPriority: () => (a ? a() : E.DefaultEventPriority),
              beforeActiveInstanceBlur: () => {},
              afterActiveInstanceBlur: () => {},
              detachDeletedInstance: () => {},
              now:
                "undefined" != typeof performance && U.fun(performance.now)
                  ? performance.now
                  : U.fun(Date.now)
                    ? Date.now
                    : () => 0,
              scheduleTimeout: U.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: U.fun(clearTimeout) ? clearTimeout : void 0,
            });
          return { reconciler: i, applyProps: applyProps$1 };
        })(0, function () {
          var t;
          let a =
            ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window);
          if (!a) return E.DefaultEventPriority;
          let i = null == (t = a.event) ? void 0 : t.type;
          switch (i) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
              return E.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
              return E.ContinuousEventPriority;
            default:
              return E.DefaultEventPriority;
          }
        }),
        ea = { objects: "shallow", strict: !1 },
        createRendererInstance = (t, a) => {
          let i = "function" == typeof t ? t(a) : t;
          return isRenderer(i)
            ? i
            : new w.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: a,
                antialias: !0,
                alpha: !0,
                ...t,
              });
        };
      function createRoot(t) {
        let a;
        let i = X.get(t),
          o = null == i ? void 0 : i.fiber,
          u = null == i ? void 0 : i.store;
        i && console.warn("R3F.createRoot should only be called once!");
        let s = "function" == typeof reportError ? reportError : console.error,
          p = u || createStore(et, en),
          S =
            o ||
            er.createContainer(
              p,
              E.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              s,
              null,
            );
        i || X.set(t, { fiber: S, store: p });
        let N = !1;
        return {
          configure(i = {}) {
            let {
                gl: o,
                size: u,
                events: s,
                onCreated: S,
                shadows: _ = !1,
                linear: E = !1,
                flat: L = !1,
                legacy: j = !1,
                orthographic: F = !1,
                frameloop: D = "always",
                dpr: A = [1, 2],
                performance: B,
                raycaster: Q,
                camera: $,
                onPointerMissed: W,
              } = i,
              q = p.getState(),
              V = q.gl;
            q.gl || q.set({ gl: (V = createRendererInstance(o, t)) });
            let Y = q.raycaster;
            Y || q.set({ raycaster: (Y = new w.Raycaster()) });
            let { params: X, ...er } = Q || {};
            if (
              (U.equ(er, Y, ea) || el(Y, { ...er }),
              U.equ(X, Y.params, ea) ||
                el(Y, { params: { ...Y.params, ...X } }),
              !q.camera)
            ) {
              let t = $ instanceof w.Camera,
                a = t
                  ? $
                  : F
                    ? new w.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                    : new w.PerspectiveCamera(75, 0, 0.1, 1e3);
              t ||
                ((a.position.z = 5),
                $ && el(a, $),
                (null != $ && $.rotation) || a.lookAt(0, 0, 0)),
                q.set({ camera: a });
            }
            if (!q.xr) {
              let handleXRFrame = (t, a) => {
                  let i = p.getState();
                  "never" !== i.frameloop && en(t, !0, i, a);
                },
                handleSessionChange = () => {
                  let t = p.getState();
                  (t.gl.xr.enabled = t.gl.xr.isPresenting),
                    t.gl.xr.setAnimationLoop(
                      t.gl.xr.isPresenting ? handleXRFrame : null,
                    ),
                    t.gl.xr.isPresenting || et(t);
                },
                t = {
                  connect() {
                    let t = p.getState().gl;
                    t.xr.addEventListener("sessionstart", handleSessionChange),
                      t.xr.addEventListener("sessionend", handleSessionChange);
                  },
                  disconnect() {
                    let t = p.getState().gl;
                    t.xr.removeEventListener(
                      "sessionstart",
                      handleSessionChange,
                    ),
                      t.xr.removeEventListener(
                        "sessionend",
                        handleSessionChange,
                      );
                  },
                };
              V.xr && t.connect(), q.set({ xr: t });
            }
            if (V.shadowMap) {
              let t = V.shadowMap.enabled,
                a = V.shadowMap.type;
              if (((V.shadowMap.enabled = !!_), U.boo(_)))
                V.shadowMap.type = w.PCFSoftShadowMap;
              else if (U.str(_)) {
                var eo;
                let t = {
                  basic: w.BasicShadowMap,
                  percentage: w.PCFShadowMap,
                  soft: w.PCFSoftShadowMap,
                  variance: w.VSMShadowMap,
                };
                V.shadowMap.type =
                  null != (eo = t[_]) ? eo : w.PCFSoftShadowMap;
              } else U.obj(_) && Object.assign(V.shadowMap, _);
              (t !== V.shadowMap.enabled || a !== V.shadowMap.type) &&
                (V.shadowMap.needsUpdate = !0);
            }
            !(function (t, a, i) {
              let o = i.pop(),
                u = i.reduce((t, a) => t[a], t);
              u[o] = a;
            })(w, j, ["ColorManagement", "legacyMode"]);
            let eu = E ? w.LinearEncoding : w.sRGBEncoding,
              es = L ? w.NoToneMapping : w.ACESFilmicToneMapping;
            V.outputEncoding !== eu && (V.outputEncoding = eu),
              V.toneMapping !== es && (V.toneMapping = es),
              q.legacy !== j && q.set(() => ({ legacy: j })),
              q.linear !== E && q.set(() => ({ linear: E })),
              q.flat !== L && q.set(() => ({ flat: L })),
              !o || U.fun(o) || isRenderer(o) || U.equ(o, V, ea) || el(V, o),
              s && !q.events.handlers && q.set({ events: s(p) }),
              A && q.viewport.dpr !== calculateDpr(A) && q.setDpr(A);
            let ec = (function (t, a) {
              if (a) return a;
              if (t instanceof HTMLCanvasElement && t.parentElement) {
                let {
                  width: a,
                  height: i,
                  top: o,
                  left: u,
                } = t.parentElement.getBoundingClientRect();
                return { width: a, height: i, top: o, left: u };
              }
              return { width: 0, height: 0, top: 0, left: 0 };
            })(t, u);
            return (
              U.equ(ec, q.size, ea) ||
                q.setSize(ec.width, ec.height, ec.updateStyle, ec.top, ec.left),
              q.frameloop !== D && q.setFrameloop(D),
              q.onPointerMissed || q.set({ onPointerMissed: W }),
              B &&
                !U.equ(B, q.performance, ea) &&
                q.set((t) => ({ performance: { ...t.performance, ...B } })),
              (a = S),
              (N = !0),
              this
            );
          },
          render(i) {
            return (
              N || this.configure(),
              er.updateContainer(
                _.createElement(Provider, {
                  store: p,
                  children: i,
                  onCreated: a,
                  rootElement: t,
                }),
                S,
                null,
                () => void 0,
              ),
              p
            );
          },
          unmount() {
            unmountComponentAtNode(t);
          },
        };
      }
      function Provider({
        store: t,
        children: a,
        onCreated: i,
        rootElement: o,
      }) {
        return (
          A(() => {
            let a = t.getState();
            a.set((t) => ({ internal: { ...t.internal, active: !0 } })),
              i && i(a),
              t.getState().events.connected ||
                null == a.events.connect ||
                a.events.connect(o);
          }, []),
          _.createElement(W.Provider, { value: t }, a)
        );
      }
      function unmountComponentAtNode(t, a) {
        let i = X.get(t),
          o = null == i ? void 0 : i.fiber;
        if (o) {
          let u = null == i ? void 0 : i.store.getState();
          u && (u.internal.active = !1),
            er.updateContainer(null, o, null, () => {
              u &&
                setTimeout(() => {
                  try {
                    var i, o, s, p;
                    null == u.events.disconnect || u.events.disconnect(),
                      null == (i = u.gl) ||
                        null == (o = i.renderLists) ||
                        null == o.dispose ||
                        o.dispose(),
                      null == (s = u.gl) ||
                        null == s.forceContextLoss ||
                        s.forceContextLoss(),
                      null != (p = u.gl) && p.xr && u.xr.disconnect(),
                      (function (t) {
                        for (let a in (t.dispose &&
                          "Scene" !== t.type &&
                          t.dispose(),
                        t))
                          null == a.dispose || a.dispose(), delete t[a];
                      })(u),
                      X.delete(t),
                      a && a(t);
                  } catch (t) {}
                }, 500);
            });
        }
      }
      er.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: _.version,
      }),
        _.unstable_act;
    },
    15029: function (t, a, i) {
      "use strict";
      i.d(a, {
        Xz: function () {
          return W;
        },
      });
      var o = i(38715),
        u = i(87462),
        s = i(67294),
        p = i(99477),
        S = i(20296),
        w = i.n(S);
      let _ = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        areBoundsEqual = (t, a) => _.every((i) => t[i] === a[i]);
      var E = Object.defineProperty,
        N = Object.defineProperties,
        L = Object.getOwnPropertyDescriptors,
        j = Object.getOwnPropertySymbols,
        F = Object.prototype.hasOwnProperty,
        D = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (t, a, i) =>
          a in t
            ? E(t, a, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (t[a] = i),
        __spreadValues = (t, a) => {
          for (var i in a || (a = {}))
            F.call(a, i) && __defNormalProp(t, i, a[i]);
          if (j)
            for (var i of j(a)) D.call(a, i) && __defNormalProp(t, i, a[i]);
          return t;
        },
        __spreadProps = (t, a) => N(t, L(a));
      function wrapContext(t) {
        try {
          return Object.defineProperties(t, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (a) {
          return t;
        }
      }
      let A = wrapContext(s.createContext(null));
      let FiberProvider = class FiberProvider extends s.Component {
        render() {
          return s.createElement(
            A.Provider,
            { value: this._reactInternals },
            this.props.children,
          );
        }
      };
      let { ReactCurrentOwner: B, ReactCurrentDispatcher: U } =
        s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      i(32576), i(76525), i(63840);
      let Q = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function createPointerEvents(t) {
        let { handlePointer: a } = (0, o.c)(t);
        return {
          priority: 1,
          enabled: !0,
          compute(t, a, i) {
            a.pointer.set(
              (t.offsetX / a.size.width) * 2 - 1,
              -(2 * (t.offsetY / a.size.height)) + 1,
            ),
              a.raycaster.setFromCamera(a.pointer, a.camera);
          },
          connected: void 0,
          handlers: Object.keys(Q).reduce((t, i) => ({ ...t, [i]: a(i) }), {}),
          connect: (a) => {
            var i;
            let { set: o, events: u } = t.getState();
            null == u.disconnect || u.disconnect(),
              o((t) => ({ events: { ...t.events, connected: a } })),
              Object.entries(null != (i = u.handlers) ? i : []).forEach(
                ([t, i]) => {
                  let [o, u] = Q[t];
                  a.addEventListener(o, i, { passive: u });
                },
              );
          },
          disconnect: () => {
            let { set: a, events: i } = t.getState();
            if (i.connected) {
              var o;
              Object.entries(null != (o = i.handlers) ? o : []).forEach(
                ([t, a]) => {
                  if (i && i.connected instanceof HTMLElement) {
                    let [o] = Q[t];
                    i.connected.removeEventListener(o, a);
                  }
                },
              ),
                a((t) => ({ events: { ...t.events, connected: void 0 } }));
            }
          },
        };
      }
      let $ = s.forwardRef(function (
          {
            children: t,
            fallback: a,
            resize: i,
            style: S,
            gl: _,
            events: E = createPointerEvents,
            eventSource: N,
            eventPrefix: L,
            shadows: j,
            linear: F,
            flat: D,
            legacy: Q,
            orthographic: $,
            frameloop: W,
            dpr: q,
            performance: V,
            raycaster: Y,
            camera: X,
            onPointerMissed: et,
            onCreated: en,
            ...er
          },
          el,
        ) {
          s.useMemo(() => (0, o.e)(p), []);
          let ea = (function () {
              var t, a;
              let i = (function () {
                  let t = s.useContext(A);
                  if (!t)
                    throw Error(
                      "its-fine: useFiber must be called within a <FiberProvider />!",
                    );
                  let a = s.useId(),
                    i = s.useMemo(() => {
                      var i;
                      return null != (i = B.current)
                        ? i
                        : (function traverseFiber(t, a, i) {
                            if (!t) return;
                            if (!0 === i(t)) return t;
                            let o = a ? t.return : t.child;
                            for (; o; ) {
                              let t = traverseFiber(o, a, i);
                              if (t) return t;
                              o = a ? null : o.sibling;
                            }
                          })(t, !1, (t) => {
                            let i = t.memoizedState;
                            for (; i; ) {
                              if (i.memoizedState === a) return !0;
                              i = i.next;
                            }
                          });
                    }, [t, a]);
                  return i;
                })(),
                [o] = s.useState(() => new Map());
              o.clear();
              let u = i;
              for (; u; ) {
                let i = null == (t = u.type) ? void 0 : t._context;
                i &&
                  i !== A &&
                  !o.has(i) &&
                  o.set(
                    i,
                    null == (a = U.current)
                      ? void 0
                      : a.readContext(wrapContext(i)),
                  ),
                  (u = u.return);
              }
              return s.useMemo(
                () =>
                  Array.from(o.keys()).reduce(
                    (t, a) => (i) =>
                      s.createElement(
                        t,
                        null,
                        s.createElement(
                          a.Provider,
                          __spreadProps(__spreadValues({}, i), {
                            value: o.get(a),
                          }),
                        ),
                      ),
                    (t) =>
                      s.createElement(FiberProvider, __spreadValues({}, t)),
                  ),
                [o],
              );
            })(),
            [eo, eu] = (function (t) {
              var a;
              let {
                  debounce: i,
                  scroll: o,
                  polyfill: u,
                  offsetSize: p,
                } = void 0 === t
                  ? { debounce: 0, scroll: !1, offsetSize: !1 }
                  : t,
                S =
                  u ||
                  ("undefined" == typeof window
                    ? class {}
                    : window.ResizeObserver);
              if (!S)
                throw Error(
                  "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills",
                );
              let [_, E] = (0, s.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  bottom: 0,
                  right: 0,
                  x: 0,
                  y: 0,
                }),
                N = (0, s.useRef)({
                  element: null,
                  scrollContainers: null,
                  resizeObserver: null,
                  lastBounds: _,
                }),
                L = i ? ("number" == typeof i ? i : i.scroll) : null,
                j = i ? ("number" == typeof i ? i : i.resize) : null,
                F = (0, s.useRef)(!1);
              (0, s.useEffect)(
                () => ((F.current = !0), () => void (F.current = !1)),
              );
              let [D, A, B] = (0, s.useMemo)(() => {
                let callback = () => {
                  if (!N.current.element) return;
                  let {
                      left: t,
                      top: a,
                      width: i,
                      height: o,
                      bottom: u,
                      right: s,
                      x: S,
                      y: w,
                    } = N.current.element.getBoundingClientRect(),
                    _ = {
                      left: t,
                      top: a,
                      width: i,
                      height: o,
                      bottom: u,
                      right: s,
                      x: S,
                      y: w,
                    };
                  N.current.element instanceof HTMLElement &&
                    p &&
                    ((_.height = N.current.element.offsetHeight),
                    (_.width = N.current.element.offsetWidth)),
                    Object.freeze(_),
                    F.current &&
                      !areBoundsEqual(N.current.lastBounds, _) &&
                      E((N.current.lastBounds = _));
                };
                return [
                  callback,
                  j ? w()(callback, j) : callback,
                  L ? w()(callback, L) : callback,
                ];
              }, [E, p, L, j]);
              function removeListeners() {
                N.current.scrollContainers &&
                  (N.current.scrollContainers.forEach((t) =>
                    t.removeEventListener("scroll", B, !0),
                  ),
                  (N.current.scrollContainers = null)),
                  N.current.resizeObserver &&
                    (N.current.resizeObserver.disconnect(),
                    (N.current.resizeObserver = null));
              }
              function addListeners() {
                N.current.element &&
                  ((N.current.resizeObserver = new S(B)),
                  N.current.resizeObserver.observe(N.current.element),
                  o &&
                    N.current.scrollContainers &&
                    N.current.scrollContainers.forEach((t) =>
                      t.addEventListener("scroll", B, {
                        capture: !0,
                        passive: !0,
                      }),
                    ));
              }
              return (
                (a = !!o),
                (0, s.useEffect)(() => {
                  if (a)
                    return (
                      window.addEventListener("scroll", B, {
                        capture: !0,
                        passive: !0,
                      }),
                      () => void window.removeEventListener("scroll", B, !0)
                    );
                }, [B, a]),
                (0, s.useEffect)(
                  () => (
                    window.addEventListener("resize", A),
                    () => void window.removeEventListener("resize", A)
                  ),
                  [A],
                ),
                (0, s.useEffect)(() => {
                  removeListeners(), addListeners();
                }, [o, B, A]),
                (0, s.useEffect)(() => removeListeners, []),
                [
                  (t) => {
                    t &&
                      t !== N.current.element &&
                      (removeListeners(),
                      (N.current.element = t),
                      (N.current.scrollContainers =
                        (function findScrollContainers(t) {
                          let a = [];
                          if (!t || t === document.body) return a;
                          let {
                            overflow: i,
                            overflowX: o,
                            overflowY: u,
                          } = window.getComputedStyle(t);
                          return (
                            [i, o, u].some(
                              (t) => "auto" === t || "scroll" === t,
                            ) && a.push(t),
                            [...a, ...findScrollContainers(t.parentElement)]
                          );
                        })(t)),
                      addListeners());
                  },
                  _,
                  D,
                ]
              );
            })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...i }),
            es = s.useRef(null),
            ec = s.useRef(null),
            [ed, ep] = s.useState(null);
          s.useImperativeHandle(el, () => es.current);
          let eh = (0, o.u)(et),
            [eg, em] = s.useState(!1),
            [ev, eb] = s.useState(!1);
          if (eg) throw eg;
          if (ev) throw ev;
          let ey = s.useRef(null);
          eu.width > 0 &&
            eu.height > 0 &&
            ed &&
            (ey.current || (ey.current = (0, o.a)(ed)),
            ey.current.configure({
              gl: _,
              events: E,
              shadows: j,
              linear: F,
              flat: D,
              legacy: Q,
              orthographic: $,
              frameloop: W,
              dpr: q,
              performance: V,
              raycaster: Y,
              camera: X,
              size: eu,
              onPointerMissed: (...t) =>
                null == eh.current ? void 0 : eh.current(...t),
              onCreated: (t) => {
                null == t.events.connect ||
                  t.events.connect(
                    N ? ((0, o.i)(N) ? N.current : N) : ec.current,
                  ),
                  L &&
                    t.setEvents({
                      compute: (t, a) => {
                        let i = t[L + "X"],
                          o = t[L + "Y"];
                        a.pointer.set(
                          (i / a.size.width) * 2 - 1,
                          -(2 * (o / a.size.height)) + 1,
                        ),
                          a.raycaster.setFromCamera(a.pointer, a.camera);
                      },
                    }),
                  null == en || en(t);
              },
            }),
            ey.current.render(
              s.createElement(
                ea,
                null,
                s.createElement(
                  o.E,
                  { set: eb },
                  s.createElement(
                    s.Suspense,
                    { fallback: s.createElement(o.B, { set: em }) },
                    t,
                  ),
                ),
              ),
            )),
            (0, o.b)(() => {
              ep(es.current);
            }, []),
            s.useEffect(() => {
              if (ed) return () => (0, o.d)(ed);
            }, [ed]);
          let eS = N ? "none" : "auto";
          return s.createElement(
            "div",
            (0, u.Z)(
              {
                ref: ec,
                style: {
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: eS,
                  ...S,
                },
              },
              er,
            ),
            s.createElement(
              "div",
              { ref: eo, style: { width: "100%", height: "100%" } },
              s.createElement(
                "canvas",
                { ref: es, style: { display: "block" } },
                a,
              ),
            ),
          );
        }),
        W = s.forwardRef(function (t, a) {
          return s.createElement(
            FiberProvider,
            null,
            s.createElement($, (0, u.Z)({}, t, { ref: a })),
          );
        });
    },
    20296: function (t) {
      function debounce(t, a, i) {
        function later() {
          var w = Date.now() - p;
          w < a && w >= 0
            ? (o = setTimeout(later, a - w))
            : ((o = null), i || ((S = t.apply(s, u)), (s = u = null)));
        }
        null == a && (a = 100);
        var o,
          u,
          s,
          p,
          S,
          debounced = function () {
            (s = this), (u = arguments), (p = Date.now());
            var w = i && !o;
            return (
              o || (o = setTimeout(later, a)),
              w && ((S = t.apply(s, u)), (s = u = null)),
              S
            );
          };
        return (
          (debounced.clear = function () {
            o && (clearTimeout(o), (o = null));
          }),
          (debounced.flush = function () {
            o &&
              ((S = t.apply(s, u)),
              (s = u = null),
              clearTimeout(o),
              (o = null));
          }),
          debounced
        );
      }
      (debounce.debounce = debounce), (t.exports = debounce);
    },
    46511: function (t, a) {
      "use strict";
      /**
       * @license React
       * react-reconciler-constants.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ (a.ConcurrentRoot = 1),
        (a.ContinuousEventPriority = 4),
        (a.DefaultEventPriority = 16),
        (a.DiscreteEventPriority = 1);
    },
    67287: function (t, a, i) {
      /**
       * @license React
       * react-reconciler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ t.exports = function (t) {
        "use strict";
        var a,
          o,
          u,
          s,
          p,
          S = {},
          w = i(67294),
          _ = i(63840),
          E = Object.assign;
        function n(t) {
          for (
            var a =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + t,
              i = 1;
            i < arguments.length;
            i++
          )
            a += "&args[]=" + encodeURIComponent(arguments[i]);
          return (
            "Minified React error #" +
            t +
            "; visit " +
            a +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var N = w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          L = Symbol.for("react.element"),
          j = Symbol.for("react.portal"),
          F = Symbol.for("react.fragment"),
          D = Symbol.for("react.strict_mode"),
          A = Symbol.for("react.profiler"),
          B = Symbol.for("react.provider"),
          U = Symbol.for("react.context"),
          Q = Symbol.for("react.forward_ref"),
          $ = Symbol.for("react.suspense"),
          W = Symbol.for("react.suspense_list"),
          q = Symbol.for("react.memo"),
          V = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var Y = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var X = Symbol.iterator;
        function ua(t) {
          return null === t || "object" != typeof t
            ? null
            : "function" == typeof (t = (X && t[X]) || t["@@iterator"])
              ? t
              : null;
        }
        function va(t) {
          if (null == t) return null;
          if ("function" == typeof t) return t.displayName || t.name || null;
          if ("string" == typeof t) return t;
          switch (t) {
            case F:
              return "Fragment";
            case j:
              return "Portal";
            case A:
              return "Profiler";
            case D:
              return "StrictMode";
            case $:
              return "Suspense";
            case W:
              return "SuspenseList";
          }
          if ("object" == typeof t)
            switch (t.$$typeof) {
              case U:
                return (t.displayName || "Context") + ".Consumer";
              case B:
                return (t._context.displayName || "Context") + ".Provider";
              case Q:
                var a = t.render;
                return (
                  (t = t.displayName) ||
                    (t =
                      "" !== (t = a.displayName || a.name || "")
                        ? "ForwardRef(" + t + ")"
                        : "ForwardRef"),
                  t
                );
              case q:
                return null !== (a = t.displayName || null)
                  ? a
                  : va(t.type) || "Memo";
              case V:
                (a = t._payload), (t = t._init);
                try {
                  return va(t(a));
                } catch (t) {}
            }
          return null;
        }
        function ya(t) {
          var a = t,
            i = t;
          if (t.alternate) for (; a.return; ) a = a.return;
          else {
            t = a;
            do 0 != (4098 & (a = t).flags) && (i = a.return), (t = a.return);
            while (t);
          }
          return 3 === a.tag ? i : null;
        }
        function za(t) {
          if (ya(t) !== t) throw Error(n(188));
        }
        function Aa(t) {
          var a = t.alternate;
          if (!a) {
            if (null === (a = ya(t))) throw Error(n(188));
            return a !== t ? null : t;
          }
          for (var i = t, o = a; ; ) {
            var u = i.return;
            if (null === u) break;
            var s = u.alternate;
            if (null === s) {
              if (null !== (o = u.return)) {
                i = o;
                continue;
              }
              break;
            }
            if (u.child === s.child) {
              for (s = u.child; s; ) {
                if (s === i) return za(u), t;
                if (s === o) return za(u), a;
                s = s.sibling;
              }
              throw Error(n(188));
            }
            if (i.return !== o.return) (i = u), (o = s);
            else {
              for (var p = !1, S = u.child; S; ) {
                if (S === i) {
                  (p = !0), (i = u), (o = s);
                  break;
                }
                if (S === o) {
                  (p = !0), (o = u), (i = s);
                  break;
                }
                S = S.sibling;
              }
              if (!p) {
                for (S = s.child; S; ) {
                  if (S === i) {
                    (p = !0), (i = s), (o = u);
                    break;
                  }
                  if (S === o) {
                    (p = !0), (o = s), (i = u);
                    break;
                  }
                  S = S.sibling;
                }
                if (!p) throw Error(n(189));
              }
            }
            if (i.alternate !== o) throw Error(n(190));
          }
          if (3 !== i.tag) throw Error(n(188));
          return i.stateNode.current === i ? t : a;
        }
        function Ba(t) {
          return null !== (t = Aa(t))
            ? (function Ca(t) {
                if (5 === t.tag || 6 === t.tag) return t;
                for (t = t.child; null !== t; ) {
                  var a = Ca(t);
                  if (null !== a) return a;
                  t = t.sibling;
                }
                return null;
              })(t)
            : null;
        }
        var et,
          en = Array.isArray,
          er = t.getPublicInstance,
          el = t.getRootHostContext,
          ea = t.getChildHostContext,
          eo = t.prepareForCommit,
          eu = t.resetAfterCommit,
          es = t.createInstance,
          ec = t.appendInitialChild,
          ed = t.finalizeInitialChildren,
          ep = t.prepareUpdate,
          eh = t.shouldSetTextContent,
          eg = t.createTextInstance,
          em = t.scheduleTimeout,
          ev = t.cancelTimeout,
          eb = t.noTimeout,
          ey = t.isPrimaryRenderer,
          eS = t.supportsMutation,
          ew = t.supportsPersistence,
          ek = t.supportsHydration,
          eP = t.getInstanceFromNode,
          e_ = t.preparePortalMount,
          eC = t.getCurrentEventPriority,
          ex = t.detachDeletedInstance,
          eE = t.supportsMicrotasks,
          ez = t.scheduleMicrotask,
          eN = t.supportsTestSelectors,
          eR = t.findFiberRoot,
          eI = t.getBoundingRect,
          eT = t.getTextContent,
          eL = t.isHiddenSubtree,
          eM = t.matchAccessibilityRole,
          ej = t.setFocusIfFocusable,
          eF = t.setupIntersectionObserver,
          eO = t.appendChild,
          eD = t.appendChildToContainer,
          eA = t.commitTextUpdate,
          eB = t.commitMount,
          eH = t.commitUpdate,
          eU = t.insertBefore,
          eQ = t.insertInContainerBefore,
          e$ = t.removeChild,
          eW = t.removeChildFromContainer,
          eq = t.resetTextContent,
          eV = t.hideInstance,
          eZ = t.hideTextInstance,
          eG = t.unhideInstance,
          eY = t.unhideTextInstance,
          eX = t.clearContainer,
          eJ = t.cloneInstance,
          eK = t.createContainerChildSet,
          e0 = t.appendChildToContainerChildSet,
          e1 = t.finalizeContainerChildren,
          e2 = t.replaceContainerChildren,
          e3 = t.cloneHiddenInstance,
          e4 = t.cloneHiddenTextInstance,
          e6 = t.canHydrateInstance,
          e5 = t.canHydrateTextInstance,
          e8 = t.canHydrateSuspenseInstance,
          e7 = t.isSuspenseInstancePending,
          e9 = t.isSuspenseInstanceFallback,
          te = t.registerSuspenseInstanceRetry,
          tt = t.getNextHydratableSibling,
          tn = t.getFirstHydratableChild,
          tr = t.getFirstHydratableChildWithinContainer,
          tl = t.getFirstHydratableChildWithinSuspenseInstance,
          ta = t.hydrateInstance,
          ti = t.hydrateTextInstance,
          to = t.hydrateSuspenseInstance,
          tu = t.getNextHydratableInstanceAfterSuspenseInstance,
          ts = t.commitHydratedContainer,
          tc = t.commitHydratedSuspenseInstance,
          tp = t.clearSuspenseBoundary,
          th = t.clearSuspenseBoundaryFromContainer,
          tm = t.shouldDeleteUnhydratedTailInstances,
          tv = t.didNotMatchHydratedContainerTextInstance,
          tb = t.didNotMatchHydratedTextInstance;
        function ac(t) {
          if (void 0 === et)
            try {
              throw Error();
            } catch (t) {
              var a = t.stack.trim().match(/\n( *(at )?)/);
              et = (a && a[1]) || "";
            }
          return "\n" + et + t;
        }
        var ty = !1;
        function cc(t, a) {
          if (!t || ty) return "";
          ty = !0;
          var i = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (a) {
              if (
                ((a = function () {
                  throw Error();
                }),
                Object.defineProperty(a.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(a, []);
                } catch (t) {
                  var o = t;
                }
                Reflect.construct(t, [], a);
              } else {
                try {
                  a.call();
                } catch (t) {
                  o = t;
                }
                t.call(a.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (t) {
                o = t;
              }
              t();
            }
          } catch (a) {
            if (a && o && "string" == typeof a.stack) {
              for (
                var u = a.stack.split("\n"),
                  s = o.stack.split("\n"),
                  p = u.length - 1,
                  S = s.length - 1;
                1 <= p && 0 <= S && u[p] !== s[S];

              )
                S--;
              for (; 1 <= p && 0 <= S; p--, S--)
                if (u[p] !== s[S]) {
                  if (1 !== p || 1 !== S)
                    do
                      if ((p--, 0 > --S || u[p] !== s[S])) {
                        var w = "\n" + u[p].replace(" at new ", " at ");
                        return (
                          t.displayName &&
                            w.includes("<anonymous>") &&
                            (w = w.replace("<anonymous>", t.displayName)),
                          w
                        );
                      }
                    while (1 <= p && 0 <= S);
                  break;
                }
            }
          } finally {
            (ty = !1), (Error.prepareStackTrace = i);
          }
          return (t = t ? t.displayName || t.name : "") ? ac(t) : "";
        }
        var tS = Object.prototype.hasOwnProperty,
          tw = [],
          tk = -1;
        function gc(t) {
          return { current: t };
        }
        function x(t) {
          0 > tk || ((t.current = tw[tk]), (tw[tk] = null), tk--);
        }
        function y(t, a) {
          (tw[++tk] = t.current), (t.current = a);
        }
        var tP = {},
          t_ = gc(tP),
          tC = gc(!1),
          tx = tP;
        function jc(t, a) {
          var i = t.type.contextTypes;
          if (!i) return tP;
          var o = t.stateNode;
          if (o && o.__reactInternalMemoizedUnmaskedChildContext === a)
            return o.__reactInternalMemoizedMaskedChildContext;
          var u,
            s = {};
          for (u in i) s[u] = a[u];
          return (
            o &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (t.__reactInternalMemoizedMaskedChildContext = s)),
            s
          );
        }
        function C(t) {
          return null != (t = t.childContextTypes);
        }
        function kc() {
          x(tC), x(t_);
        }
        function lc(t, a, i) {
          if (t_.current !== tP) throw Error(n(168));
          y(t_, a), y(tC, i);
        }
        function mc(t, a, i) {
          var o = t.stateNode;
          if (
            ((a = a.childContextTypes), "function" != typeof o.getChildContext)
          )
            return i;
          for (var u in (o = o.getChildContext()))
            if (!(u in a))
              throw Error(
                n(
                  108,
                  (function (t) {
                    var a = t.type;
                    switch (t.tag) {
                      case 24:
                        return "Cache";
                      case 9:
                        return (a.displayName || "Context") + ".Consumer";
                      case 10:
                        return (
                          (a._context.displayName || "Context") + ".Provider"
                        );
                      case 18:
                        return "DehydratedFragment";
                      case 11:
                        return (
                          (t = (t = a.render).displayName || t.name || ""),
                          a.displayName ||
                            ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                        );
                      case 7:
                        return "Fragment";
                      case 5:
                        return a;
                      case 4:
                        return "Portal";
                      case 3:
                        return "Root";
                      case 6:
                        return "Text";
                      case 16:
                        return va(a);
                      case 8:
                        return a === D ? "StrictMode" : "Mode";
                      case 22:
                        return "Offscreen";
                      case 12:
                        return "Profiler";
                      case 21:
                        return "Scope";
                      case 13:
                        return "Suspense";
                      case 19:
                        return "SuspenseList";
                      case 25:
                        return "TracingMarker";
                      case 1:
                      case 0:
                      case 17:
                      case 2:
                      case 14:
                      case 15:
                        if ("function" == typeof a)
                          return a.displayName || a.name || null;
                        if ("string" == typeof a) return a;
                    }
                    return null;
                  })(t) || "Unknown",
                  u,
                ),
              );
          return E({}, i, o);
        }
        function nc(t) {
          return (
            (t =
              ((t = t.stateNode) &&
                t.__reactInternalMemoizedMergedChildContext) ||
              tP),
            (tx = t_.current),
            y(t_, t),
            y(tC, tC.current),
            !0
          );
        }
        function oc(t, a, i) {
          var o = t.stateNode;
          if (!o) throw Error(n(169));
          i
            ? ((t = mc(t, a, tx)),
              (o.__reactInternalMemoizedMergedChildContext = t),
              x(tC),
              x(t_),
              y(t_, t))
            : x(tC),
            y(tC, i);
        }
        var tE = Math.clz32
            ? Math.clz32
            : function (t) {
                return 0 == (t >>>= 0) ? 32 : (31 - ((tz(t) / tN) | 0)) | 0;
              },
          tz = Math.log,
          tN = Math.LN2,
          tR = 64,
          tI = 4194304;
        function vc(t) {
          switch (t & -t) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & t;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & t;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return t;
          }
        }
        function wc(t, a) {
          var i = t.pendingLanes;
          if (0 === i) return 0;
          var o = 0,
            u = t.suspendedLanes,
            s = t.pingedLanes,
            p = 268435455 & i;
          if (0 !== p) {
            var S = p & ~u;
            0 !== S ? (o = vc(S)) : 0 != (s &= p) && (o = vc(s));
          } else 0 != (p = i & ~u) ? (o = vc(p)) : 0 !== s && (o = vc(s));
          if (0 === o) return 0;
          if (
            0 !== a &&
            a !== o &&
            0 == (a & u) &&
            ((u = o & -o) >= (s = a & -a) || (16 === u && 0 != (4194240 & s)))
          )
            return a;
          if ((0 != (4 & o) && (o |= 16 & i), 0 !== (a = t.entangledLanes)))
            for (t = t.entanglements, a &= o; 0 < a; )
              (u = 1 << (i = 31 - tE(a))), (o |= t[i]), (a &= ~u);
          return o;
        }
        function zc(t) {
          return 0 != (t = -1073741825 & t.pendingLanes)
            ? t
            : 1073741824 & t
              ? 1073741824
              : 0;
        }
        function Ac(t) {
          for (var a = [], i = 0; 31 > i; i++) a.push(t);
          return a;
        }
        function Bc(t, a, i) {
          (t.pendingLanes |= a),
            536870912 !== a && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
            ((t = t.eventTimes)[(a = 31 - tE(a))] = i);
        }
        function Dc(t, a) {
          var i = (t.entangledLanes |= a);
          for (t = t.entanglements; i; ) {
            var o = 31 - tE(i),
              u = 1 << o;
            (u & a) | (t[o] & a) && (t[o] |= a), (i &= ~u);
          }
        }
        var tT = 0;
        function Ec(t) {
          return 1 < (t &= -t)
            ? 4 < t
              ? 0 != (268435455 & t)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var tL = _.unstable_scheduleCallback,
          tM = _.unstable_cancelCallback,
          tj = _.unstable_shouldYield,
          tF = _.unstable_requestPaint,
          tO = _.unstable_now,
          tD = _.unstable_ImmediatePriority,
          tA = _.unstable_UserBlockingPriority,
          tB = _.unstable_NormalPriority,
          tH = _.unstable_IdlePriority,
          tU = null,
          tQ = null,
          t$ =
            "function" == typeof Object.is
              ? Object.is
              : function (t, a) {
                  return (
                    (t === a && (0 !== t || 1 / t == 1 / a)) ||
                    (t != t && a != a)
                  );
                },
          tW = null,
          tq = !1,
          tV = !1;
        function Vc(t) {
          null === tW ? (tW = [t]) : tW.push(t);
        }
        function Xc() {
          if (!tV && null !== tW) {
            tV = !0;
            var t = 0,
              a = tT;
            try {
              var i = tW;
              for (tT = 1; t < i.length; t++) {
                var o = i[t];
                do o = o(!0);
                while (null !== o);
              }
              (tW = null), (tq = !1);
            } catch (a) {
              throw (null !== tW && (tW = tW.slice(t + 1)), tL(tD, Xc), a);
            } finally {
              (tT = a), (tV = !1);
            }
          }
          return null;
        }
        var tZ = N.ReactCurrentBatchConfig;
        function Zc(t, a) {
          if (t$(t, a)) return !0;
          if (
            "object" != typeof t ||
            null === t ||
            "object" != typeof a ||
            null === a
          )
            return !1;
          var i = Object.keys(t),
            o = Object.keys(a);
          if (i.length !== o.length) return !1;
          for (o = 0; o < i.length; o++) {
            var u = i[o];
            if (!tS.call(a, u) || !t$(t[u], a[u])) return !1;
          }
          return !0;
        }
        function ad(t, a) {
          if (t && t.defaultProps)
            for (var i in ((a = E({}, a)), (t = t.defaultProps)))
              void 0 === a[i] && (a[i] = t[i]);
          return a;
        }
        var tG = gc(null),
          tY = null,
          tX = null,
          tJ = null;
        function fd() {
          tJ = tX = tY = null;
        }
        function gd(t, a, i) {
          ey
            ? (y(tG, a._currentValue), (a._currentValue = i))
            : (y(tG, a._currentValue2), (a._currentValue2 = i));
        }
        function hd(t) {
          var a = tG.current;
          x(tG), ey ? (t._currentValue = a) : (t._currentValue2 = a);
        }
        function id(t, a, i) {
          for (; null !== t; ) {
            var o = t.alternate;
            if (
              ((t.childLanes & a) !== a
                ? ((t.childLanes |= a), null !== o && (o.childLanes |= a))
                : null !== o && (o.childLanes & a) !== a && (o.childLanes |= a),
              t === i)
            )
              break;
            t = t.return;
          }
        }
        function jd(t, a) {
          (tY = t),
            (tJ = tX = null),
            null !== (t = t.dependencies) &&
              null !== t.firstContext &&
              (0 != (t.lanes & a) && (nj = !0), (t.firstContext = null));
        }
        function ld(t) {
          var a = ey ? t._currentValue : t._currentValue2;
          if (tJ !== t) {
            if (
              ((t = { context: t, memoizedValue: a, next: null }), null === tX)
            ) {
              if (null === tY) throw Error(n(308));
              (tX = t), (tY.dependencies = { lanes: 0, firstContext: t });
            } else tX = tX.next = t;
          }
          return a;
        }
        var tK = null,
          t0 = !1;
        function od(t) {
          t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function pd(t, a) {
          (t = t.updateQueue),
            a.updateQueue === t &&
              (a.updateQueue = {
                baseState: t.baseState,
                firstBaseUpdate: t.firstBaseUpdate,
                lastBaseUpdate: t.lastBaseUpdate,
                shared: t.shared,
                effects: t.effects,
              });
        }
        function qd(t, a) {
          return {
            eventTime: t,
            lane: a,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function rd(t, a) {
          var i = t.updateQueue;
          null !== i &&
            ((i = i.shared),
            null !== nK && 0 != (1 & t.mode) && 0 == (2 & nJ)
              ? (null === (t = i.interleaved)
                  ? ((a.next = a), null === tK ? (tK = [i]) : tK.push(i))
                  : ((a.next = t.next), (t.next = a)),
                (i.interleaved = a))
              : (null === (t = i.pending)
                  ? (a.next = a)
                  : ((a.next = t.next), (t.next = a)),
                (i.pending = a)));
        }
        function sd(t, a, i) {
          if (
            null !== (a = a.updateQueue) &&
            ((a = a.shared), 0 != (4194240 & i))
          ) {
            var o = a.lanes;
            (o &= t.pendingLanes), (i |= o), (a.lanes = i), Dc(t, i);
          }
        }
        function td(t, a) {
          var i = t.updateQueue,
            o = t.alternate;
          if (null !== o && i === (o = o.updateQueue)) {
            var u = null,
              s = null;
            if (null !== (i = i.firstBaseUpdate)) {
              do {
                var p = {
                  eventTime: i.eventTime,
                  lane: i.lane,
                  tag: i.tag,
                  payload: i.payload,
                  callback: i.callback,
                  next: null,
                };
                null === s ? (u = s = p) : (s = s.next = p), (i = i.next);
              } while (null !== i);
              null === s ? (u = s = a) : (s = s.next = a);
            } else u = s = a;
            (i = {
              baseState: o.baseState,
              firstBaseUpdate: u,
              lastBaseUpdate: s,
              shared: o.shared,
              effects: o.effects,
            }),
              (t.updateQueue = i);
            return;
          }
          null === (t = i.lastBaseUpdate)
            ? (i.firstBaseUpdate = a)
            : (t.next = a),
            (i.lastBaseUpdate = a);
        }
        function ud(t, a, i, o) {
          var u = t.updateQueue;
          t0 = !1;
          var s = u.firstBaseUpdate,
            p = u.lastBaseUpdate,
            S = u.shared.pending;
          if (null !== S) {
            u.shared.pending = null;
            var w = S,
              _ = w.next;
            (w.next = null), null === p ? (s = _) : (p.next = _), (p = w);
            var N = t.alternate;
            null !== N &&
              (S = (N = N.updateQueue).lastBaseUpdate) !== p &&
              (null === S ? (N.firstBaseUpdate = _) : (S.next = _),
              (N.lastBaseUpdate = w));
          }
          if (null !== s) {
            var L = u.baseState;
            for (p = 0, N = _ = w = null, S = s; ; ) {
              var j = S.lane,
                F = S.eventTime;
              if ((o & j) === j) {
                null !== N &&
                  (N = N.next =
                    {
                      eventTime: F,
                      lane: 0,
                      tag: S.tag,
                      payload: S.payload,
                      callback: S.callback,
                      next: null,
                    });
                e: {
                  var D = t,
                    A = S;
                  switch (((j = a), (F = i), A.tag)) {
                    case 1:
                      if ("function" == typeof (D = A.payload)) {
                        L = D.call(F, L, j);
                        break e;
                      }
                      L = D;
                      break e;
                    case 3:
                      D.flags = (-65537 & D.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (j =
                          "function" == typeof (D = A.payload)
                            ? D.call(F, L, j)
                            : D)
                      )
                        break e;
                      L = E({}, L, j);
                      break e;
                    case 2:
                      t0 = !0;
                  }
                }
                null !== S.callback &&
                  0 !== S.lane &&
                  ((t.flags |= 64),
                  null === (j = u.effects) ? (u.effects = [S]) : j.push(S));
              } else
                (F = {
                  eventTime: F,
                  lane: j,
                  tag: S.tag,
                  payload: S.payload,
                  callback: S.callback,
                  next: null,
                }),
                  null === N ? ((_ = N = F), (w = L)) : (N = N.next = F),
                  (p |= j);
              if (null === (S = S.next)) {
                if (null === (S = u.shared.pending)) break;
                (S = (j = S).next),
                  (j.next = null),
                  (u.lastBaseUpdate = j),
                  (u.shared.pending = null);
              }
            }
            if (
              (null === N && (w = L),
              (u.baseState = w),
              (u.firstBaseUpdate = _),
              (u.lastBaseUpdate = N),
              null !== (a = u.shared.interleaved))
            ) {
              u = a;
              do (p |= u.lane), (u = u.next);
              while (u !== a);
            } else null === s && (u.shared.lanes = 0);
            (n5 |= p), (t.lanes = p), (t.memoizedState = L);
          }
        }
        function wd(t, a, i) {
          if (((t = a.effects), (a.effects = null), null !== t))
            for (a = 0; a < t.length; a++) {
              var o = t[a],
                u = o.callback;
              if (null !== u) {
                if (((o.callback = null), (o = i), "function" != typeof u))
                  throw Error(n(191, u));
                u.call(o);
              }
            }
        }
        var t1 = new w.Component().refs;
        function yd(t, a, i, o) {
          (i = null == (i = i(o, (a = t.memoizedState))) ? a : E({}, a, i)),
            (t.memoizedState = i),
            0 === t.lanes && (t.updateQueue.baseState = i);
        }
        var t2 = {
          isMounted: function (t) {
            return !!(t = t._reactInternals) && ya(t) === t;
          },
          enqueueSetState: function (t, a, i) {
            t = t._reactInternals;
            var o = H(),
              u = zd(t),
              s = qd(o, u);
            (s.payload = a),
              null != i && (s.callback = i),
              rd(t, s),
              null !== (a = Ad(t, u, o)) && sd(a, t, u);
          },
          enqueueReplaceState: function (t, a, i) {
            t = t._reactInternals;
            var o = H(),
              u = zd(t),
              s = qd(o, u);
            (s.tag = 1),
              (s.payload = a),
              null != i && (s.callback = i),
              rd(t, s),
              null !== (a = Ad(t, u, o)) && sd(a, t, u);
          },
          enqueueForceUpdate: function (t, a) {
            t = t._reactInternals;
            var i = H(),
              o = zd(t),
              u = qd(i, o);
            (u.tag = 2),
              null != a && (u.callback = a),
              rd(t, u),
              null !== (a = Ad(t, o, i)) && sd(a, t, o);
          },
        };
        function Cd(t, a, i, o, u, s, p) {
          return "function" == typeof (t = t.stateNode).shouldComponentUpdate
            ? t.shouldComponentUpdate(o, s, p)
            : !a.prototype ||
                !a.prototype.isPureReactComponent ||
                !Zc(i, o) ||
                !Zc(u, s);
        }
        function Dd(t, a, i) {
          var o = !1,
            u = tP,
            s = a.contextType;
          return (
            "object" == typeof s && null !== s
              ? (s = ld(s))
              : ((u = C(a) ? tx : t_.current),
                (s = (o = null != (o = a.contextTypes)) ? jc(t, u) : tP)),
            (a = new a(i, s)),
            (t.memoizedState =
              null !== a.state && void 0 !== a.state ? a.state : null),
            (a.updater = t2),
            (t.stateNode = a),
            (a._reactInternals = t),
            o &&
              (((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                u),
              (t.__reactInternalMemoizedMaskedChildContext = s)),
            a
          );
        }
        function Ed(t, a, i, o) {
          (t = a.state),
            "function" == typeof a.componentWillReceiveProps &&
              a.componentWillReceiveProps(i, o),
            "function" == typeof a.UNSAFE_componentWillReceiveProps &&
              a.UNSAFE_componentWillReceiveProps(i, o),
            a.state !== t && t2.enqueueReplaceState(a, a.state, null);
        }
        function Fd(t, a, i, o) {
          var u = t.stateNode;
          (u.props = i), (u.state = t.memoizedState), (u.refs = t1), od(t);
          var s = a.contextType;
          "object" == typeof s && null !== s
            ? (u.context = ld(s))
            : ((s = C(a) ? tx : t_.current), (u.context = jc(t, s))),
            (u.state = t.memoizedState),
            "function" == typeof (s = a.getDerivedStateFromProps) &&
              (yd(t, a, s, i), (u.state = t.memoizedState)),
            "function" == typeof a.getDerivedStateFromProps ||
              "function" == typeof u.getSnapshotBeforeUpdate ||
              ("function" != typeof u.UNSAFE_componentWillMount &&
                "function" != typeof u.componentWillMount) ||
              ((a = u.state),
              "function" == typeof u.componentWillMount &&
                u.componentWillMount(),
              "function" == typeof u.UNSAFE_componentWillMount &&
                u.UNSAFE_componentWillMount(),
              a !== u.state && t2.enqueueReplaceState(u, u.state, null),
              ud(t, i, u, o),
              (u.state = t.memoizedState)),
            "function" == typeof u.componentDidMount && (t.flags |= 4194308);
        }
        var t3 = [],
          t4 = 0,
          t6 = null,
          t5 = 0,
          t8 = [],
          t7 = 0,
          t9 = null,
          nt = 1,
          nn = "";
        function Pd(t, a) {
          (t3[t4++] = t5), (t3[t4++] = t6), (t6 = t), (t5 = a);
        }
        function Qd(t, a, i) {
          (t8[t7++] = nt), (t8[t7++] = nn), (t8[t7++] = t9), (t9 = t);
          var o = nt;
          t = nn;
          var u = 32 - tE(o) - 1;
          (o &= ~(1 << u)), (i += 1);
          var s = 32 - tE(a) + u;
          if (30 < s) {
            var p = u - (u % 5);
            (s = (o & ((1 << p) - 1)).toString(32)),
              (o >>= p),
              (u -= p),
              (nt = (1 << (32 - tE(a) + u)) | (i << u) | o),
              (nn = s + t);
          } else (nt = (1 << s) | (i << u) | o), (nn = t);
        }
        function Rd(t) {
          null !== t.return && (Pd(t, 1), Qd(t, 1, 0));
        }
        function Sd(t) {
          for (; t === t6; )
            (t6 = t3[--t4]), (t3[t4] = null), (t5 = t3[--t4]), (t3[t4] = null);
          for (; t === t9; )
            (t9 = t8[--t7]),
              (t8[t7] = null),
              (nn = t8[--t7]),
              (t8[t7] = null),
              (nt = t8[--t7]),
              (t8[t7] = null);
        }
        var nr = null,
          nl = null,
          na = !1,
          ni = !1,
          no = null;
        function Xd(t, a) {
          var i = Yd(5, null, null, 0);
          (i.elementType = "DELETED"),
            (i.stateNode = a),
            (i.return = t),
            null === (a = t.deletions)
              ? ((t.deletions = [i]), (t.flags |= 16))
              : a.push(i);
        }
        function Zd(t, a) {
          switch (t.tag) {
            case 5:
              return (
                null !== (a = e6(a, t.type, t.pendingProps)) &&
                ((t.stateNode = a), (nr = t), (nl = tn(a)), !0)
              );
            case 6:
              return (
                null !== (a = e5(a, t.pendingProps)) &&
                ((t.stateNode = a), (nr = t), (nl = null), !0)
              );
            case 13:
              if (null !== (a = e8(a))) {
                var i = null !== t9 ? { id: nt, overflow: nn } : null;
                return (
                  (t.memoizedState = {
                    dehydrated: a,
                    treeContext: i,
                    retryLane: 1073741824,
                  }),
                  ((i = Yd(18, null, null, 0)).stateNode = a),
                  (i.return = t),
                  (t.child = i),
                  (nr = t),
                  (nl = null),
                  !0
                );
              }
              return !1;
            default:
              return !1;
          }
        }
        function $d(t) {
          return 0 != (1 & t.mode) && 0 == (128 & t.flags);
        }
        function ae(t) {
          if (na) {
            var a = nl;
            if (a) {
              var i = a;
              if (!Zd(t, a)) {
                if ($d(t)) throw Error(n(418));
                a = tt(i);
                var o = nr;
                a && Zd(t, a)
                  ? Xd(o, i)
                  : ((t.flags = (-4097 & t.flags) | 2), (na = !1), (nr = t));
              }
            } else {
              if ($d(t)) throw Error(n(418));
              (t.flags = (-4097 & t.flags) | 2), (na = !1), (nr = t);
            }
          }
        }
        function be(t) {
          for (
            t = t.return;
            null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;

          )
            t = t.return;
          nr = t;
        }
        function ce(t) {
          if (!ek || t !== nr) return !1;
          if (!na) return be(t), (na = !0), !1;
          if (
            3 !== t.tag &&
            (5 !== t.tag || (tm(t.type) && !eh(t.type, t.memoizedProps)))
          ) {
            var a = nl;
            if (a) {
              if ($d(t)) {
                for (t = nl; t; ) t = tt(t);
                throw Error(n(418));
              }
              for (; a; ) Xd(t, a), (a = tt(a));
            }
          }
          if ((be(t), 13 === t.tag)) {
            if (!ek) throw Error(n(316));
            if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null))
              throw Error(n(317));
            nl = tu(t);
          } else nl = nr ? tt(t.stateNode) : null;
          return !0;
        }
        function de() {
          ek && ((nl = nr = null), (ni = na = !1));
        }
        function ee(t) {
          null === no ? (no = [t]) : no.push(t);
        }
        function fe(t, a, i) {
          if (
            null !== (t = i.ref) &&
            "function" != typeof t &&
            "object" != typeof t
          ) {
            if (i._owner) {
              if ((i = i._owner)) {
                if (1 !== i.tag) throw Error(n(309));
                var o = i.stateNode;
              }
              if (!o) throw Error(n(147, t));
              var u = o,
                s = "" + t;
              return null !== a &&
                null !== a.ref &&
                "function" == typeof a.ref &&
                a.ref._stringRef === s
                ? a.ref
                : (((a = function (t) {
                    var a = u.refs;
                    a === t1 && (a = u.refs = {}),
                      null === t ? delete a[s] : (a[s] = t);
                  })._stringRef = s),
                  a);
            }
            if ("string" != typeof t) throw Error(n(284));
            if (!i._owner) throw Error(n(290, t));
          }
          return t;
        }
        function ge(t, a) {
          throw Error(
            n(
              31,
              "[object Object]" === (t = Object.prototype.toString.call(a))
                ? "object with keys {" + Object.keys(a).join(", ") + "}"
                : t,
            ),
          );
        }
        function he(t) {
          return (0, t._init)(t._payload);
        }
        function ie(t) {
          function b(a, i) {
            if (t) {
              var o = a.deletions;
              null === o ? ((a.deletions = [i]), (a.flags |= 16)) : o.push(i);
            }
          }
          function c(a, i) {
            if (!t) return null;
            for (; null !== i; ) b(a, i), (i = i.sibling);
            return null;
          }
          function d(t, a) {
            for (t = new Map(); null !== a; )
              null !== a.key ? t.set(a.key, a) : t.set(a.index, a),
                (a = a.sibling);
            return t;
          }
          function e(t, a) {
            return ((t = je(t, a)).index = 0), (t.sibling = null), t;
          }
          function f(a, i, o) {
            return ((a.index = o), t)
              ? null !== (o = a.alternate)
                ? (o = o.index) < i
                  ? ((a.flags |= 2), i)
                  : o
                : ((a.flags |= 2), i)
              : ((a.flags |= 1048576), i);
          }
          function g(a) {
            return t && null === a.alternate && (a.flags |= 2), a;
          }
          function h(t, a, i, o) {
            return (
              null === a || 6 !== a.tag
                ? ((a = ke(i, t.mode, o)).return = t)
                : ((a = e(a, i)).return = t),
              a
            );
          }
          function k(t, a, i, o) {
            var u = i.type;
            return u === F
              ? m(t, a, i.props.children, o, i.key)
              : (null !== a &&
                (a.elementType === u ||
                  ("object" == typeof u &&
                    null !== u &&
                    u.$$typeof === V &&
                    he(u) === a.type))
                  ? ((o = e(a, i.props)).ref = fe(t, a, i))
                  : ((o = le(i.type, i.key, i.props, null, t.mode, o)).ref = fe(
                      t,
                      a,
                      i,
                    )),
                (o.return = t),
                o);
          }
          function l(t, a, i, o) {
            return (
              null === a ||
              4 !== a.tag ||
              a.stateNode.containerInfo !== i.containerInfo ||
              a.stateNode.implementation !== i.implementation
                ? ((a = me(i, t.mode, o)).return = t)
                : ((a = e(a, i.children || [])).return = t),
              a
            );
          }
          function m(t, a, i, o, u) {
            return (
              null === a || 7 !== a.tag
                ? ((a = ne(i, t.mode, o, u)).return = t)
                : ((a = e(a, i)).return = t),
              a
            );
          }
          function v(t, a, i) {
            if (("string" == typeof a && "" !== a) || "number" == typeof a)
              return ((a = ke("" + a, t.mode, i)).return = t), a;
            if ("object" == typeof a && null !== a) {
              switch (a.$$typeof) {
                case L:
                  return (
                    ((i = le(a.type, a.key, a.props, null, t.mode, i)).ref = fe(
                      t,
                      null,
                      a,
                    )),
                    (i.return = t),
                    i
                  );
                case j:
                  return ((a = me(a, t.mode, i)).return = t), a;
                case V:
                  return v(t, (0, a._init)(a._payload), i);
              }
              if (en(a) || ua(a))
                return ((a = ne(a, t.mode, i, null)).return = t), a;
              ge(t, a);
            }
            return null;
          }
          function r(t, a, i, o) {
            var u = null !== a ? a.key : null;
            if (("string" == typeof i && "" !== i) || "number" == typeof i)
              return null !== u ? null : h(t, a, "" + i, o);
            if ("object" == typeof i && null !== i) {
              switch (i.$$typeof) {
                case L:
                  return i.key === u ? k(t, a, i, o) : null;
                case j:
                  return i.key === u ? l(t, a, i, o) : null;
                case V:
                  return r(t, a, (u = i._init)(i._payload), o);
              }
              if (en(i) || ua(i))
                return null !== u ? null : m(t, a, i, o, null);
              ge(t, i);
            }
            return null;
          }
          function z(t, a, i, o, u) {
            if (("string" == typeof o && "" !== o) || "number" == typeof o)
              return h(a, (t = t.get(i) || null), "" + o, u);
            if ("object" == typeof o && null !== o) {
              switch (o.$$typeof) {
                case L:
                  return k(
                    a,
                    (t = t.get(null === o.key ? i : o.key) || null),
                    o,
                    u,
                  );
                case j:
                  return l(
                    a,
                    (t = t.get(null === o.key ? i : o.key) || null),
                    o,
                    u,
                  );
                case V:
                  return z(t, a, i, (0, o._init)(o._payload), u);
              }
              if (en(o) || ua(o))
                return m(a, (t = t.get(i) || null), o, u, null);
              ge(a, o);
            }
            return null;
          }
          return function da(a, i, o, u) {
            if (
              ("object" == typeof o &&
                null !== o &&
                o.type === F &&
                null === o.key &&
                (o = o.props.children),
              "object" == typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case L:
                  e: {
                    for (var s = o.key, p = i; null !== p; ) {
                      if (p.key === s) {
                        if ((s = o.type) === F) {
                          if (7 === p.tag) {
                            c(a, p.sibling),
                              ((i = e(p, o.props.children)).return = a),
                              (a = i);
                            break e;
                          }
                        } else if (
                          p.elementType === s ||
                          ("object" == typeof s &&
                            null !== s &&
                            s.$$typeof === V &&
                            he(s) === p.type)
                        ) {
                          c(a, p.sibling),
                            ((i = e(p, o.props)).ref = fe(a, p, o)),
                            (i.return = a),
                            (a = i);
                          break e;
                        }
                        c(a, p);
                        break;
                      }
                      b(a, p), (p = p.sibling);
                    }
                    o.type === F
                      ? (((i = ne(o.props.children, a.mode, u, o.key)).return =
                          a),
                        (a = i))
                      : (((u = le(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          a.mode,
                          u,
                        )).ref = fe(a, i, o)),
                        (u.return = a),
                        (a = u));
                  }
                  return g(a);
                case j:
                  e: {
                    for (p = o.key; null !== i; ) {
                      if (i.key === p) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          c(a, i.sibling),
                            ((i = e(i, o.children || [])).return = a),
                            (a = i);
                          break e;
                        }
                        c(a, i);
                        break;
                      }
                      b(a, i), (i = i.sibling);
                    }
                    ((i = me(o, a.mode, u)).return = a), (a = i);
                  }
                  return g(a);
                case V:
                  return da(a, i, (p = o._init)(o._payload), u);
              }
              if (en(o))
                return (function (a, i, o, u) {
                  for (
                    var s = null, p = null, S = i, w = (i = 0), _ = null;
                    null !== S && w < o.length;
                    w++
                  ) {
                    S.index > w ? ((_ = S), (S = null)) : (_ = S.sibling);
                    var E = r(a, S, o[w], u);
                    if (null === E) {
                      null === S && (S = _);
                      break;
                    }
                    t && S && null === E.alternate && b(a, S),
                      (i = f(E, i, w)),
                      null === p ? (s = E) : (p.sibling = E),
                      (p = E),
                      (S = _);
                  }
                  if (w === o.length) return c(a, S), na && Pd(a, w), s;
                  if (null === S) {
                    for (; w < o.length; w++)
                      null !== (S = v(a, o[w], u)) &&
                        ((i = f(S, i, w)),
                        null === p ? (s = S) : (p.sibling = S),
                        (p = S));
                    return na && Pd(a, w), s;
                  }
                  for (S = d(a, S); w < o.length; w++)
                    null !== (_ = z(S, a, w, o[w], u)) &&
                      (t &&
                        null !== _.alternate &&
                        S.delete(null === _.key ? w : _.key),
                      (i = f(_, i, w)),
                      null === p ? (s = _) : (p.sibling = _),
                      (p = _));
                  return (
                    t &&
                      S.forEach(function (t) {
                        return b(a, t);
                      }),
                    na && Pd(a, w),
                    s
                  );
                })(a, i, o, u);
              if (ua(o))
                return (function (a, i, o, u) {
                  var s = ua(o);
                  if ("function" != typeof s) throw Error(n(150));
                  if (null == (o = s.call(o))) throw Error(n(151));
                  for (
                    var p = (s = null),
                      S = i,
                      w = (i = 0),
                      _ = null,
                      E = o.next();
                    null !== S && !E.done;
                    w++, E = o.next()
                  ) {
                    S.index > w ? ((_ = S), (S = null)) : (_ = S.sibling);
                    var N = r(a, S, E.value, u);
                    if (null === N) {
                      null === S && (S = _);
                      break;
                    }
                    t && S && null === N.alternate && b(a, S),
                      (i = f(N, i, w)),
                      null === p ? (s = N) : (p.sibling = N),
                      (p = N),
                      (S = _);
                  }
                  if (E.done) return c(a, S), na && Pd(a, w), s;
                  if (null === S) {
                    for (; !E.done; w++, E = o.next())
                      null !== (E = v(a, E.value, u)) &&
                        ((i = f(E, i, w)),
                        null === p ? (s = E) : (p.sibling = E),
                        (p = E));
                    return na && Pd(a, w), s;
                  }
                  for (S = d(a, S); !E.done; w++, E = o.next())
                    null !== (E = z(S, a, w, E.value, u)) &&
                      (t &&
                        null !== E.alternate &&
                        S.delete(null === E.key ? w : E.key),
                      (i = f(E, i, w)),
                      null === p ? (s = E) : (p.sibling = E),
                      (p = E));
                  return (
                    t &&
                      S.forEach(function (t) {
                        return b(a, t);
                      }),
                    na && Pd(a, w),
                    s
                  );
                })(a, i, o, u);
              ge(a, o);
            }
            return ("string" == typeof o && "" !== o) || "number" == typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (c(a, i.sibling), ((i = e(i, o)).return = a))
                  : (c(a, i), ((i = ke(o, a.mode, u)).return = a)),
                g((a = i)))
              : c(a, i);
          };
        }
        var nu = ie(!0),
          ns = ie(!1),
          nd = {},
          np = gc(nd),
          nh = gc(nd),
          nm = gc(nd);
        function ue(t) {
          if (t === nd) throw Error(n(174));
          return t;
        }
        function ve(t, a) {
          y(nm, a), y(nh, t), y(np, nd), (t = el(a)), x(np), y(np, t);
        }
        function we() {
          x(np), x(nh), x(nm);
        }
        function xe(t) {
          var a = ue(nm.current),
            i = ue(np.current);
          (a = ea(i, t.type, a)), i !== a && (y(nh, t), y(np, a));
        }
        function ye(t) {
          nh.current === t && (x(np), x(nh));
        }
        var nv = gc(0);
        function ze(t) {
          for (var a = t; null !== a; ) {
            if (13 === a.tag) {
              var i = a.memoizedState;
              if (null !== i && (null === (i = i.dehydrated) || e7(i) || e9(i)))
                return a;
            } else if (19 === a.tag && void 0 !== a.memoizedProps.revealOrder) {
              if (0 != (128 & a.flags)) return a;
            } else if (null !== a.child) {
              (a.child.return = a), (a = a.child);
              continue;
            }
            if (a === t) break;
            for (; null === a.sibling; ) {
              if (null === a.return || a.return === t) return null;
              a = a.return;
            }
            (a.sibling.return = a.return), (a = a.sibling);
          }
          return null;
        }
        var nb = [];
        function Be() {
          for (var t = 0; t < nb.length; t++) {
            var a = nb[t];
            ey
              ? (a._workInProgressVersionPrimary = null)
              : (a._workInProgressVersionSecondary = null);
          }
          nb.length = 0;
        }
        var ny = N.ReactCurrentDispatcher,
          nS = N.ReactCurrentBatchConfig,
          nw = 0,
          nk = null,
          nP = null,
          n_ = null,
          nC = !1,
          nx = !1,
          nE = 0,
          nz = 0;
        function O() {
          throw Error(n(321));
        }
        function Je(t, a) {
          if (null === a) return !1;
          for (var i = 0; i < a.length && i < t.length; i++)
            if (!t$(t[i], a[i])) return !1;
          return !0;
        }
        function Ke(t, a, i, o, u, s) {
          if (
            ((nw = s),
            (nk = a),
            (a.memoizedState = null),
            (a.updateQueue = null),
            (a.lanes = 0),
            (ny.current = null === t || null === t.memoizedState ? nR : nI),
            (t = i(o, u)),
            nx)
          ) {
            s = 0;
            do {
              if (((nx = !1), (nE = 0), 25 <= s)) throw Error(n(301));
              (s += 1),
                (n_ = nP = null),
                (a.updateQueue = null),
                (ny.current = nT),
                (t = i(o, u));
            } while (nx);
          }
          if (
            ((ny.current = nN),
            (a = null !== nP && null !== nP.next),
            (nw = 0),
            (n_ = nP = nk = null),
            (nC = !1),
            a)
          )
            throw Error(n(300));
          return t;
        }
        function Pe() {
          var t = 0 !== nE;
          return (nE = 0), t;
        }
        function Qe() {
          var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === n_ ? (nk.memoizedState = n_ = t) : (n_ = n_.next = t), n_
          );
        }
        function Re() {
          if (null === nP) {
            var t = nk.alternate;
            t = null !== t ? t.memoizedState : null;
          } else t = nP.next;
          var a = null === n_ ? nk.memoizedState : n_.next;
          if (null !== a) (n_ = a), (nP = t);
          else {
            if (null === t) throw Error(n(310));
            (t = {
              memoizedState: (nP = t).memoizedState,
              baseState: nP.baseState,
              baseQueue: nP.baseQueue,
              queue: nP.queue,
              next: null,
            }),
              null === n_ ? (nk.memoizedState = n_ = t) : (n_ = n_.next = t);
          }
          return n_;
        }
        function Se(t, a) {
          return "function" == typeof a ? a(t) : a;
        }
        function Te(t) {
          var a = Re(),
            i = a.queue;
          if (null === i) throw Error(n(311));
          i.lastRenderedReducer = t;
          var o = nP,
            u = o.baseQueue,
            s = i.pending;
          if (null !== s) {
            if (null !== u) {
              var p = u.next;
              (u.next = s.next), (s.next = p);
            }
            (o.baseQueue = u = s), (i.pending = null);
          }
          if (null !== u) {
            (s = u.next), (o = o.baseState);
            var S = (p = null),
              w = null,
              _ = s;
            do {
              var E = _.lane;
              if ((nw & E) === E)
                null !== w &&
                  (w = w.next =
                    {
                      lane: 0,
                      action: _.action,
                      hasEagerState: _.hasEagerState,
                      eagerState: _.eagerState,
                      next: null,
                    }),
                  (o = _.hasEagerState ? _.eagerState : t(o, _.action));
              else {
                var N = {
                  lane: E,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                };
                null === w ? ((S = w = N), (p = o)) : (w = w.next = N),
                  (nk.lanes |= E),
                  (n5 |= E);
              }
              _ = _.next;
            } while (null !== _ && _ !== s);
            null === w ? (p = o) : (w.next = S),
              t$(o, a.memoizedState) || (nj = !0),
              (a.memoizedState = o),
              (a.baseState = p),
              (a.baseQueue = w),
              (i.lastRenderedState = o);
          }
          if (null !== (t = i.interleaved)) {
            u = t;
            do (s = u.lane), (nk.lanes |= s), (n5 |= s), (u = u.next);
            while (u !== t);
          } else null === u && (i.lanes = 0);
          return [a.memoizedState, i.dispatch];
        }
        function Ue(t) {
          var a = Re(),
            i = a.queue;
          if (null === i) throw Error(n(311));
          i.lastRenderedReducer = t;
          var o = i.dispatch,
            u = i.pending,
            s = a.memoizedState;
          if (null !== u) {
            i.pending = null;
            var p = (u = u.next);
            do (s = t(s, p.action)), (p = p.next);
            while (p !== u);
            t$(s, a.memoizedState) || (nj = !0),
              (a.memoizedState = s),
              null === a.baseQueue && (a.baseState = s),
              (i.lastRenderedState = s);
          }
          return [s, o];
        }
        function Ve() {}
        function We(t, a) {
          var i = nk,
            o = Re(),
            u = a(),
            s = !t$(o.memoizedState, u);
          if (
            (s && ((o.memoizedState = u), (nj = !0)),
            (o = o.queue),
            Xe(Ye.bind(null, i, o, t), [t]),
            o.getSnapshot !== a ||
              s ||
              (null !== n_ && 1 & n_.memoizedState.tag))
          ) {
            if (
              ((i.flags |= 2048),
              Ze(9, $e.bind(null, i, o, u, a), void 0, null),
              null === nK)
            )
              throw Error(n(349));
            0 != (30 & nw) || af(i, a, u);
          }
          return u;
        }
        function af(t, a, i) {
          (t.flags |= 16384),
            (t = { getSnapshot: a, value: i }),
            null === (a = nk.updateQueue)
              ? ((a = { lastEffect: null, stores: null }),
                (nk.updateQueue = a),
                (a.stores = [t]))
              : null === (i = a.stores)
                ? (a.stores = [t])
                : i.push(t);
        }
        function $e(t, a, i, o) {
          (a.value = i), (a.getSnapshot = o), bf(a) && Ad(t, 1, -1);
        }
        function Ye(t, a, i) {
          return i(function () {
            bf(a) && Ad(t, 1, -1);
          });
        }
        function bf(t) {
          var a = t.getSnapshot;
          t = t.value;
          try {
            var i = a();
            return !t$(t, i);
          } catch (t) {
            return !0;
          }
        }
        function cf(t) {
          var a = Qe();
          return (
            "function" == typeof t && (t = t()),
            (a.memoizedState = a.baseState = t),
            (t = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Se,
              lastRenderedState: t,
            }),
            (a.queue = t),
            (t = t.dispatch = df.bind(null, nk, t)),
            [a.memoizedState, t]
          );
        }
        function Ze(t, a, i, o) {
          return (
            (t = { tag: t, create: a, destroy: i, deps: o, next: null }),
            null === (a = nk.updateQueue)
              ? ((a = { lastEffect: null, stores: null }),
                (nk.updateQueue = a),
                (a.lastEffect = t.next = t))
              : null === (i = a.lastEffect)
                ? (a.lastEffect = t.next = t)
                : ((o = i.next),
                  (i.next = t),
                  (t.next = o),
                  (a.lastEffect = t)),
            t
          );
        }
        function ef() {
          return Re().memoizedState;
        }
        function ff(t, a, i, o) {
          var u = Qe();
          (nk.flags |= t),
            (u.memoizedState = Ze(1 | a, i, void 0, void 0 === o ? null : o));
        }
        function gf(t, a, i, o) {
          var u = Re();
          o = void 0 === o ? null : o;
          var s = void 0;
          if (null !== nP) {
            var p = nP.memoizedState;
            if (((s = p.destroy), null !== o && Je(o, p.deps))) {
              u.memoizedState = Ze(a, i, s, o);
              return;
            }
          }
          (nk.flags |= t), (u.memoizedState = Ze(1 | a, i, s, o));
        }
        function hf(t, a) {
          return ff(8390656, 8, t, a);
        }
        function Xe(t, a) {
          return gf(2048, 8, t, a);
        }
        function jf(t, a) {
          return gf(4, 2, t, a);
        }
        function kf(t, a) {
          return gf(4, 4, t, a);
        }
        function lf(t, a) {
          return "function" == typeof a
            ? (a((t = t())),
              function () {
                a(null);
              })
            : null != a
              ? ((t = t()),
                (a.current = t),
                function () {
                  a.current = null;
                })
              : void 0;
        }
        function mf(t, a, i) {
          return (
            (i = null != i ? i.concat([t]) : null),
            gf(4, 4, lf.bind(null, a, t), i)
          );
        }
        function nf() {}
        function of(t, a) {
          var i = Re();
          a = void 0 === a ? null : a;
          var o = i.memoizedState;
          return null !== o && null !== a && Je(a, o[1])
            ? o[0]
            : ((i.memoizedState = [t, a]), t);
        }
        function pf(t, a) {
          var i = Re();
          a = void 0 === a ? null : a;
          var o = i.memoizedState;
          return null !== o && null !== a && Je(a, o[1])
            ? o[0]
            : ((t = t()), (i.memoizedState = [t, a]), t);
        }
        function qf(t, a) {
          var i = tT;
          (tT = 0 !== i && 4 > i ? i : 4), t(!0);
          var o = nS.transition;
          nS.transition = {};
          try {
            t(!1), a();
          } finally {
            (tT = i), (nS.transition = o);
          }
        }
        function rf() {
          return Re().memoizedState;
        }
        function sf(t, a, i) {
          var o = zd(t);
          (i = {
            lane: o,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            tf(t)
              ? uf(a, i)
              : (vf(t, a, i),
                null !== (t = Ad(t, o, (i = H()))) && wf(t, a, o));
        }
        function df(t, a, i) {
          var o = zd(t),
            u = {
              lane: o,
              action: i,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (tf(t)) uf(a, u);
          else {
            vf(t, a, u);
            var s = t.alternate;
            if (
              0 === t.lanes &&
              (null === s || 0 === s.lanes) &&
              null !== (s = a.lastRenderedReducer)
            )
              try {
                var p = a.lastRenderedState,
                  S = s(p, i);
                if (((u.hasEagerState = !0), (u.eagerState = S), t$(S, p)))
                  return;
              } catch (t) {
              } finally {
              }
            null !== (t = Ad(t, o, (i = H()))) && wf(t, a, o);
          }
        }
        function tf(t) {
          var a = t.alternate;
          return t === nk || (null !== a && a === nk);
        }
        function uf(t, a) {
          nx = nC = !0;
          var i = t.pending;
          null === i ? (a.next = a) : ((a.next = i.next), (i.next = a)),
            (t.pending = a);
        }
        function vf(t, a, i) {
          null !== nK && 0 != (1 & t.mode) && 0 == (2 & nJ)
            ? (null === (t = a.interleaved)
                ? ((i.next = i), null === tK ? (tK = [a]) : tK.push(a))
                : ((i.next = t.next), (t.next = i)),
              (a.interleaved = i))
            : (null === (t = a.pending)
                ? (i.next = i)
                : ((i.next = t.next), (t.next = i)),
              (a.pending = i));
        }
        function wf(t, a, i) {
          if (0 != (4194240 & i)) {
            var o = a.lanes;
            (o &= t.pendingLanes), (i |= o), (a.lanes = i), Dc(t, i);
          }
        }
        var nN = {
            readContext: ld,
            useCallback: O,
            useContext: O,
            useEffect: O,
            useImperativeHandle: O,
            useInsertionEffect: O,
            useLayoutEffect: O,
            useMemo: O,
            useReducer: O,
            useRef: O,
            useState: O,
            useDebugValue: O,
            useDeferredValue: O,
            useTransition: O,
            useMutableSource: O,
            useSyncExternalStore: O,
            useId: O,
            unstable_isNewReconciler: !1,
          },
          nR = {
            readContext: ld,
            useCallback: function (t, a) {
              return (Qe().memoizedState = [t, void 0 === a ? null : a]), t;
            },
            useContext: ld,
            useEffect: hf,
            useImperativeHandle: function (t, a, i) {
              return (
                (i = null != i ? i.concat([t]) : null),
                ff(4194308, 4, lf.bind(null, a, t), i)
              );
            },
            useLayoutEffect: function (t, a) {
              return ff(4194308, 4, t, a);
            },
            useInsertionEffect: function (t, a) {
              return ff(4, 2, t, a);
            },
            useMemo: function (t, a) {
              var i = Qe();
              return (
                (a = void 0 === a ? null : a),
                (t = t()),
                (i.memoizedState = [t, a]),
                t
              );
            },
            useReducer: function (t, a, i) {
              var o = Qe();
              return (
                (a = void 0 !== i ? i(a) : a),
                (o.memoizedState = o.baseState = a),
                (t = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: t,
                  lastRenderedState: a,
                }),
                (o.queue = t),
                (t = t.dispatch = sf.bind(null, nk, t)),
                [o.memoizedState, t]
              );
            },
            useRef: function (t) {
              return (t = { current: t }), (Qe().memoizedState = t);
            },
            useState: cf,
            useDebugValue: nf,
            useDeferredValue: function (t) {
              var a = cf(t),
                i = a[0],
                o = a[1];
              return (
                hf(
                  function () {
                    var a = nS.transition;
                    nS.transition = {};
                    try {
                      o(t);
                    } finally {
                      nS.transition = a;
                    }
                  },
                  [t],
                ),
                i
              );
            },
            useTransition: function () {
              var t = cf(!1),
                a = t[0];
              return (
                (t = qf.bind(null, t[1])), (Qe().memoizedState = t), [a, t]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (t, a, i) {
              var o = nk,
                u = Qe();
              if (na) {
                if (void 0 === i) throw Error(n(407));
                i = i();
              } else {
                if (((i = a()), null === nK)) throw Error(n(349));
                0 != (30 & nw) || af(o, a, i);
              }
              u.memoizedState = i;
              var s = { value: i, getSnapshot: a };
              return (
                (u.queue = s),
                hf(Ye.bind(null, o, s, t), [t]),
                (o.flags |= 2048),
                Ze(9, $e.bind(null, o, s, i, a), void 0, null),
                i
              );
            },
            useId: function () {
              var t = Qe(),
                a = nK.identifierPrefix;
              if (na) {
                var i = nn,
                  o = nt;
                (a =
                  ":" +
                  a +
                  "R" +
                  (i = (o & ~(1 << (32 - tE(o) - 1))).toString(32) + i)),
                  0 < (i = nE++) && (a += "H" + i.toString(32)),
                  (a += ":");
              } else a = ":" + a + "r" + (i = nz++).toString(32) + ":";
              return (t.memoizedState = a);
            },
            unstable_isNewReconciler: !1,
          },
          nI = {
            readContext: ld,
            useCallback: of,
            useContext: ld,
            useEffect: Xe,
            useImperativeHandle: mf,
            useInsertionEffect: jf,
            useLayoutEffect: kf,
            useMemo: pf,
            useReducer: Te,
            useRef: ef,
            useState: function () {
              return Te(Se);
            },
            useDebugValue: nf,
            useDeferredValue: function (t) {
              var a = Te(Se),
                i = a[0],
                o = a[1];
              return (
                Xe(
                  function () {
                    var a = nS.transition;
                    nS.transition = {};
                    try {
                      o(t);
                    } finally {
                      nS.transition = a;
                    }
                  },
                  [t],
                ),
                i
              );
            },
            useTransition: function () {
              return [Te(Se)[0], Re().memoizedState];
            },
            useMutableSource: Ve,
            useSyncExternalStore: We,
            useId: rf,
            unstable_isNewReconciler: !1,
          },
          nT = {
            readContext: ld,
            useCallback: of,
            useContext: ld,
            useEffect: Xe,
            useImperativeHandle: mf,
            useInsertionEffect: jf,
            useLayoutEffect: kf,
            useMemo: pf,
            useReducer: Ue,
            useRef: ef,
            useState: function () {
              return Ue(Se);
            },
            useDebugValue: nf,
            useDeferredValue: function (t) {
              var a = Ue(Se),
                i = a[0],
                o = a[1];
              return (
                Xe(
                  function () {
                    var a = nS.transition;
                    nS.transition = {};
                    try {
                      o(t);
                    } finally {
                      nS.transition = a;
                    }
                  },
                  [t],
                ),
                i
              );
            },
            useTransition: function () {
              return [Ue(Se)[0], Re().memoizedState];
            },
            useMutableSource: Ve,
            useSyncExternalStore: We,
            useId: rf,
            unstable_isNewReconciler: !1,
          };
        function xf(t, a) {
          try {
            var i = "",
              o = a;
            do
              (i += (function (t) {
                switch (t.tag) {
                  case 5:
                    return ac(t.type);
                  case 16:
                    return ac("Lazy");
                  case 13:
                    return ac("Suspense");
                  case 19:
                    return ac("SuspenseList");
                  case 0:
                  case 2:
                  case 15:
                    return (t = cc(t.type, !1));
                  case 11:
                    return (t = cc(t.type.render, !1));
                  case 1:
                    return (t = cc(t.type, !0));
                  default:
                    return "";
                }
              })(o)),
                (o = o.return);
            while (o);
            var u = i;
          } catch (t) {
            u = "\nError generating stack: " + t.message + "\n" + t.stack;
          }
          return { value: t, source: a, stack: u };
        }
        function yf(t, a) {
          try {
            console.error(a.value);
          } catch (t) {
            setTimeout(function () {
              throw t;
            });
          }
        }
        var nL = "function" == typeof WeakMap ? WeakMap : Map;
        function Af(t, a, i) {
          ((i = qd(-1, i)).tag = 3), (i.payload = { element: null });
          var o = a.value;
          return (
            (i.callback = function () {
              rr || ((rr = !0), (rl = o)), yf(t, a);
            }),
            i
          );
        }
        function Df(t, a, i) {
          (i = qd(-1, i)).tag = 3;
          var o = t.type.getDerivedStateFromError;
          if ("function" == typeof o) {
            var u = a.value;
            (i.payload = function () {
              return o(u);
            }),
              (i.callback = function () {
                yf(t, a);
              });
          }
          var s = t.stateNode;
          return (
            null !== s &&
              "function" == typeof s.componentDidCatch &&
              (i.callback = function () {
                yf(t, a),
                  "function" != typeof o &&
                    (null === ra ? (ra = new Set([this])) : ra.add(this));
                var i = a.stack;
                this.componentDidCatch(a.value, {
                  componentStack: null !== i ? i : "",
                });
              }),
            i
          );
        }
        function Ff(t, a, i) {
          var o = t.pingCache;
          if (null === o) {
            o = t.pingCache = new nL();
            var u = new Set();
            o.set(a, u);
          } else void 0 === (u = o.get(a)) && ((u = new Set()), o.set(a, u));
          u.has(i) || (u.add(i), (t = Gf.bind(null, t, a, i)), a.then(t, t));
        }
        function Hf(t) {
          do {
            var a;
            if (
              ((a = 13 === t.tag) &&
                (a = null === (a = t.memoizedState) || null !== a.dehydrated),
              a)
            )
              return t;
            t = t.return;
          } while (null !== t);
          return null;
        }
        function If(t, a, i, o, u) {
          return (
            0 == (1 & t.mode)
              ? t === a
                ? (t.flags |= 65536)
                : ((t.flags |= 128),
                  (i.flags |= 131072),
                  (i.flags &= -52805),
                  1 === i.tag &&
                    (null === i.alternate
                      ? (i.tag = 17)
                      : (((a = qd(-1, 1)).tag = 2), rd(i, a))),
                  (i.lanes |= 1))
              : ((t.flags |= 65536), (t.lanes = u)),
            t
          );
        }
        function Jf(t) {
          t.flags |= 4;
        }
        function Kf(t, a) {
          if (null !== t && t.child === a.child) return !0;
          if (0 != (16 & a.flags)) return !1;
          for (t = a.child; null !== t; ) {
            if (0 != (12854 & t.flags) || 0 != (12854 & t.subtreeFlags))
              return !1;
            t = t.sibling;
          }
          return !0;
        }
        if (eS)
          (a = function (t, a) {
            for (var i = a.child; null !== i; ) {
              if (5 === i.tag || 6 === i.tag) ec(t, i.stateNode);
              else if (4 !== i.tag && null !== i.child) {
                (i.child.return = i), (i = i.child);
                continue;
              }
              if (i === a) break;
              for (; null === i.sibling; ) {
                if (null === i.return || i.return === a) return;
                i = i.return;
              }
              (i.sibling.return = i.return), (i = i.sibling);
            }
          }),
            (o = function () {}),
            (u = function (t, a, i, o, u) {
              (t = t.memoizedProps) !== o &&
                ((i = ep(a.stateNode, i, t, o, u, ue(np.current))),
                (a.updateQueue = i) && Jf(a));
            }),
            (s = function (t, a, i, o) {
              i !== o && Jf(a);
            });
        else if (ew) {
          a = function (t, i, o, u) {
            for (var s = i.child; null !== s; ) {
              if (5 === s.tag) {
                var p = s.stateNode;
                o && u && (p = e3(p, s.type, s.memoizedProps, s)), ec(t, p);
              } else if (6 === s.tag)
                (p = s.stateNode),
                  o && u && (p = e4(p, s.memoizedProps, s)),
                  ec(t, p);
              else if (4 !== s.tag) {
                if (22 === s.tag && null !== s.memoizedState)
                  null !== (p = s.child) && (p.return = s), a(t, s, !0, !0);
                else if (null !== s.child) {
                  (s.child.return = s), (s = s.child);
                  continue;
                }
              }
              if (s === i) break;
              for (; null === s.sibling; ) {
                if (null === s.return || s.return === i) return;
                s = s.return;
              }
              (s.sibling.return = s.return), (s = s.sibling);
            }
          };
          var Pf = function (t, a, i, o) {
            for (var u = a.child; null !== u; ) {
              if (5 === u.tag) {
                var s = u.stateNode;
                i && o && (s = e3(s, u.type, u.memoizedProps, u)), e0(t, s);
              } else if (6 === u.tag)
                (s = u.stateNode),
                  i && o && (s = e4(s, u.memoizedProps, u)),
                  e0(t, s);
              else if (4 !== u.tag) {
                if (22 === u.tag && null !== u.memoizedState)
                  null !== (s = u.child) && (s.return = u), Pf(t, u, !0, !0);
                else if (null !== u.child) {
                  (u.child.return = u), (u = u.child);
                  continue;
                }
              }
              if (u === a) break;
              for (; null === u.sibling; ) {
                if (null === u.return || u.return === a) return;
                u = u.return;
              }
              (u.sibling.return = u.return), (u = u.sibling);
            }
          };
          (o = function (t, a) {
            var i = a.stateNode;
            if (!Kf(t, a)) {
              var o = eK((t = i.containerInfo));
              Pf(o, a, !1, !1), (i.pendingChildren = o), Jf(a), e1(t, o);
            }
          }),
            (u = function (t, i, o, u, s) {
              var p = t.stateNode,
                S = t.memoizedProps;
              if ((t = Kf(t, i)) && S === u) i.stateNode = p;
              else {
                var w = i.stateNode,
                  _ = ue(np.current),
                  E = null;
                S !== u && (E = ep(w, o, S, u, s, _)),
                  t && null === E
                    ? (i.stateNode = p)
                    : (ed((p = eJ(p, E, o, S, u, i, t, w)), o, u, s, _) &&
                        Jf(i),
                      (i.stateNode = p),
                      t ? Jf(i) : a(p, i, !1, !1));
              }
            }),
            (s = function (t, a, i, o) {
              i !== o
                ? ((t = ue(nm.current)),
                  (i = ue(np.current)),
                  (a.stateNode = eg(o, t, i, a)),
                  Jf(a))
                : (a.stateNode = t.stateNode);
            });
        } else (o = function () {}), (u = function () {}), (s = function () {});
        function Qf(t, a) {
          if (!na)
            switch (t.tailMode) {
              case "hidden":
                a = t.tail;
                for (var i = null; null !== a; )
                  null !== a.alternate && (i = a), (a = a.sibling);
                null === i ? (t.tail = null) : (i.sibling = null);
                break;
              case "collapsed":
                i = t.tail;
                for (var o = null; null !== i; )
                  null !== i.alternate && (o = i), (i = i.sibling);
                null === o
                  ? a || null === t.tail
                    ? (t.tail = null)
                    : (t.tail.sibling = null)
                  : (o.sibling = null);
            }
        }
        function P(t) {
          var a = null !== t.alternate && t.alternate.child === t.child,
            i = 0,
            o = 0;
          if (a)
            for (var u = t.child; null !== u; )
              (i |= u.lanes | u.childLanes),
                (o |= 14680064 & u.subtreeFlags),
                (o |= 14680064 & u.flags),
                (u.return = t),
                (u = u.sibling);
          else
            for (u = t.child; null !== u; )
              (i |= u.lanes | u.childLanes),
                (o |= u.subtreeFlags),
                (o |= u.flags),
                (u.return = t),
                (u = u.sibling);
          return (t.subtreeFlags |= o), (t.childLanes = i), a;
        }
        var nM = N.ReactCurrentOwner,
          nj = !1;
        function R(t, a, i, o) {
          a.child = null === t ? ns(a, null, i, o) : nu(a, t.child, i, o);
        }
        function Yf(t, a, i, o, u) {
          i = i.render;
          var s = a.ref;
          return (jd(a, u),
          (o = Ke(t, a, i, o, s, u)),
          (i = Pe()),
          null === t || nj)
            ? (na && i && Rd(a), (a.flags |= 1), R(t, a, o, u), a.child)
            : ((a.updateQueue = t.updateQueue),
              (a.flags &= -2053),
              (t.lanes &= ~u),
              Zf(t, a, u));
        }
        function $f(t, a, i, o, u) {
          if (null === t) {
            var s = i.type;
            return "function" != typeof s ||
              ag(s) ||
              void 0 !== s.defaultProps ||
              null !== i.compare ||
              void 0 !== i.defaultProps
              ? (((t = le(i.type, null, o, a, a.mode, u)).ref = a.ref),
                (t.return = a),
                (a.child = t))
              : ((a.tag = 15), (a.type = s), bg(t, a, s, o, u));
          }
          if (((s = t.child), 0 == (t.lanes & u))) {
            var p = s.memoizedProps;
            if (
              (i = null !== (i = i.compare) ? i : Zc)(p, o) &&
              t.ref === a.ref
            )
              return Zf(t, a, u);
          }
          return (
            (a.flags |= 1),
            ((t = je(s, o)).ref = a.ref),
            (t.return = a),
            (a.child = t)
          );
        }
        function bg(t, a, i, o, u) {
          if (null !== t && Zc(t.memoizedProps, o) && t.ref === a.ref) {
            if (((nj = !1), 0 == (t.lanes & u)))
              return (a.lanes = t.lanes), Zf(t, a, u);
            0 != (131072 & t.flags) && (nj = !0);
          }
          return cg(t, a, i, o, u);
        }
        function dg(t, a, i) {
          var o = a.pendingProps,
            u = o.children,
            s = null !== t ? t.memoizedState : null;
          if ("hidden" === o.mode) {
            if (0 == (1 & a.mode))
              (a.memoizedState = { baseLanes: 0, cachePool: null }),
                y(n3, n2),
                (n2 |= i);
            else {
              if (0 == (1073741824 & i))
                return (
                  (t = null !== s ? s.baseLanes | i : i),
                  (a.lanes = a.childLanes = 1073741824),
                  (a.memoizedState = { baseLanes: t, cachePool: null }),
                  (a.updateQueue = null),
                  y(n3, n2),
                  (n2 |= t),
                  null
                );
              (a.memoizedState = { baseLanes: 0, cachePool: null }),
                (o = null !== s ? s.baseLanes : i),
                y(n3, n2),
                (n2 |= o);
            }
          } else
            null !== s
              ? ((o = s.baseLanes | i), (a.memoizedState = null))
              : (o = i),
              y(n3, n2),
              (n2 |= o);
          return R(t, a, u, i), a.child;
        }
        function fg(t, a) {
          var i = a.ref;
          ((null === t && null !== i) || (null !== t && t.ref !== i)) &&
            ((a.flags |= 512), (a.flags |= 2097152));
        }
        function cg(t, a, i, o, u) {
          var s = C(i) ? tx : t_.current;
          return ((s = jc(a, s)),
          jd(a, u),
          (i = Ke(t, a, i, o, s, u)),
          (o = Pe()),
          null === t || nj)
            ? (na && o && Rd(a), (a.flags |= 1), R(t, a, i, u), a.child)
            : ((a.updateQueue = t.updateQueue),
              (a.flags &= -2053),
              (t.lanes &= ~u),
              Zf(t, a, u));
        }
        function gg(t, a, i, o, u) {
          if (C(i)) {
            var s = !0;
            nc(a);
          } else s = !1;
          if ((jd(a, u), null === a.stateNode))
            null !== t &&
              ((t.alternate = null), (a.alternate = null), (a.flags |= 2)),
              Dd(a, i, o),
              Fd(a, i, o, u),
              (o = !0);
          else if (null === t) {
            var p = a.stateNode,
              S = a.memoizedProps;
            p.props = S;
            var w = p.context,
              _ = i.contextType;
            _ =
              "object" == typeof _ && null !== _
                ? ld(_)
                : jc(a, (_ = C(i) ? tx : t_.current));
            var E = i.getDerivedStateFromProps,
              N =
                "function" == typeof E ||
                "function" == typeof p.getSnapshotBeforeUpdate;
            N ||
              ("function" != typeof p.UNSAFE_componentWillReceiveProps &&
                "function" != typeof p.componentWillReceiveProps) ||
              ((S !== o || w !== _) && Ed(a, p, o, _)),
              (t0 = !1);
            var L = a.memoizedState;
            (p.state = L),
              ud(a, o, p, u),
              (w = a.memoizedState),
              S !== o || L !== w || tC.current || t0
                ? ("function" == typeof E &&
                    (yd(a, i, E, o), (w = a.memoizedState)),
                  (S = t0 || Cd(a, i, S, o, L, w, _))
                    ? (N ||
                        ("function" != typeof p.UNSAFE_componentWillMount &&
                          "function" != typeof p.componentWillMount) ||
                        ("function" == typeof p.componentWillMount &&
                          p.componentWillMount(),
                        "function" == typeof p.UNSAFE_componentWillMount &&
                          p.UNSAFE_componentWillMount()),
                      "function" == typeof p.componentDidMount &&
                        (a.flags |= 4194308))
                    : ("function" == typeof p.componentDidMount &&
                        (a.flags |= 4194308),
                      (a.memoizedProps = o),
                      (a.memoizedState = w)),
                  (p.props = o),
                  (p.state = w),
                  (p.context = _),
                  (o = S))
                : ("function" == typeof p.componentDidMount &&
                    (a.flags |= 4194308),
                  (o = !1));
          } else {
            (p = a.stateNode),
              pd(t, a),
              (S = a.memoizedProps),
              (_ = a.type === a.elementType ? S : ad(a.type, S)),
              (p.props = _),
              (N = a.pendingProps),
              (L = p.context),
              (w =
                "object" == typeof (w = i.contextType) && null !== w
                  ? ld(w)
                  : jc(a, (w = C(i) ? tx : t_.current)));
            var j = i.getDerivedStateFromProps;
            (E =
              "function" == typeof j ||
              "function" == typeof p.getSnapshotBeforeUpdate) ||
              ("function" != typeof p.UNSAFE_componentWillReceiveProps &&
                "function" != typeof p.componentWillReceiveProps) ||
              ((S !== N || L !== w) && Ed(a, p, o, w)),
              (t0 = !1),
              (L = a.memoizedState),
              (p.state = L),
              ud(a, o, p, u);
            var F = a.memoizedState;
            S !== N || L !== F || tC.current || t0
              ? ("function" == typeof j &&
                  (yd(a, i, j, o), (F = a.memoizedState)),
                (_ = t0 || Cd(a, i, _, o, L, F, w) || !1)
                  ? (E ||
                      ("function" != typeof p.UNSAFE_componentWillUpdate &&
                        "function" != typeof p.componentWillUpdate) ||
                      ("function" == typeof p.componentWillUpdate &&
                        p.componentWillUpdate(o, F, w),
                      "function" == typeof p.UNSAFE_componentWillUpdate &&
                        p.UNSAFE_componentWillUpdate(o, F, w)),
                    "function" == typeof p.componentDidUpdate && (a.flags |= 4),
                    "function" == typeof p.getSnapshotBeforeUpdate &&
                      (a.flags |= 1024))
                  : ("function" != typeof p.componentDidUpdate ||
                      (S === t.memoizedProps && L === t.memoizedState) ||
                      (a.flags |= 4),
                    "function" != typeof p.getSnapshotBeforeUpdate ||
                      (S === t.memoizedProps && L === t.memoizedState) ||
                      (a.flags |= 1024),
                    (a.memoizedProps = o),
                    (a.memoizedState = F)),
                (p.props = o),
                (p.state = F),
                (p.context = w),
                (o = _))
              : ("function" != typeof p.componentDidUpdate ||
                  (S === t.memoizedProps && L === t.memoizedState) ||
                  (a.flags |= 4),
                "function" != typeof p.getSnapshotBeforeUpdate ||
                  (S === t.memoizedProps && L === t.memoizedState) ||
                  (a.flags |= 1024),
                (o = !1));
          }
          return hg(t, a, i, o, s, u);
        }
        function hg(t, a, i, o, u, s) {
          fg(t, a);
          var p = 0 != (128 & a.flags);
          if (!o && !p) return u && oc(a, i, !1), Zf(t, a, s);
          (o = a.stateNode), (nM.current = a);
          var S =
            p && "function" != typeof i.getDerivedStateFromError
              ? null
              : o.render();
          return (
            (a.flags |= 1),
            null !== t && p
              ? ((a.child = nu(a, t.child, null, s)),
                (a.child = nu(a, null, S, s)))
              : R(t, a, S, s),
            (a.memoizedState = o.state),
            u && oc(a, i, !0),
            a.child
          );
        }
        function ig(t) {
          var a = t.stateNode;
          a.pendingContext
            ? lc(t, a.pendingContext, a.pendingContext !== a.context)
            : a.context && lc(t, a.context, !1),
            ve(t, a.containerInfo);
        }
        function jg(t, a, i, o, u) {
          return de(), ee(u), (a.flags |= 256), R(t, a, i, o), a.child;
        }
        var nF = { dehydrated: null, treeContext: null, retryLane: 0 };
        function lg(t) {
          return { baseLanes: t, cachePool: null };
        }
        function mg(t, a, i) {
          var o,
            u,
            s,
            p,
            S,
            w,
            _,
            E,
            N,
            L,
            j,
            F,
            D,
            A,
            B = a.pendingProps,
            U = nv.current,
            Q = !1,
            $ = 0 != (128 & a.flags);
          if (
            ((A = $) ||
              (A = (null === t || null !== t.memoizedState) && 0 != (2 & U)),
            A
              ? ((Q = !0), (a.flags &= -129))
              : (null === t || null !== t.memoizedState) && (U |= 1),
            y(nv, 1 & U),
            null === t)
          )
            return (ae(a),
            null !== (t = a.memoizedState) && null !== (t = t.dehydrated))
              ? (0 == (1 & a.mode)
                  ? (a.lanes = 1)
                  : e9(t)
                    ? (a.lanes = 8)
                    : (a.lanes = 1073741824),
                null)
              : ((U = B.children),
                (t = B.fallback),
                Q
                  ? ((B = a.mode),
                    (Q = a.child),
                    (U = { mode: "hidden", children: U }),
                    0 == (1 & B) && null !== Q
                      ? ((Q.childLanes = 0), (Q.pendingProps = U))
                      : (Q = ng(U, B, 0, null)),
                    (t = ne(t, B, i, null)),
                    (Q.return = a),
                    (t.return = a),
                    (Q.sibling = t),
                    (a.child = Q),
                    (a.child.memoizedState = lg(i)),
                    (a.memoizedState = nF),
                    t)
                  : og(a, U));
          if (null !== (U = t.memoizedState) && null !== (A = U.dehydrated)) {
            if ($)
              return 256 & a.flags
                ? ((a.flags &= -257), pg(t, a, i, Error(n(422))))
                : null !== a.memoizedState
                  ? ((a.child = t.child), (a.flags |= 128), null)
                  : ((Q = B.fallback),
                    (U = a.mode),
                    (B = ng(
                      { mode: "visible", children: B.children },
                      U,
                      0,
                      null,
                    )),
                    (Q = ne(Q, U, i, null)),
                    (Q.flags |= 2),
                    (B.return = a),
                    (Q.return = a),
                    (B.sibling = Q),
                    (a.child = B),
                    0 != (1 & a.mode) && nu(a, t.child, null, i),
                    (a.child.memoizedState = lg(i)),
                    (a.memoizedState = nF),
                    Q);
            if (0 == (1 & a.mode)) a = pg(t, a, i, null);
            else if (e9(A)) a = pg(t, a, i, Error(n(419)));
            else if (((B = 0 != (i & t.childLanes)), nj || B)) {
              if (null !== (B = nK)) {
                switch (i & -i) {
                  case 4:
                    Q = 2;
                    break;
                  case 16:
                    Q = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    Q = 32;
                    break;
                  case 536870912:
                    Q = 268435456;
                    break;
                  default:
                    Q = 0;
                }
                0 !== (B = 0 != (Q & (B.suspendedLanes | i)) ? 0 : Q) &&
                  B !== U.retryLane &&
                  ((U.retryLane = B), Ad(t, B, -1));
              }
              Tf(), (a = pg(t, a, i, Error(n(421))));
            } else
              e7(A)
                ? ((a.flags |= 128),
                  (a.child = t.child),
                  te(A, (a = qg.bind(null, t))),
                  (a = null))
                : ((i = U.treeContext),
                  ek &&
                    ((nl = tl(A)),
                    (nr = a),
                    (na = !0),
                    (no = null),
                    (ni = !1),
                    null !== i &&
                      ((t8[t7++] = nt),
                      (t8[t7++] = nn),
                      (t8[t7++] = t9),
                      (nt = i.id),
                      (nn = i.overflow),
                      (t9 = a))),
                  (a = og(a, a.pendingProps.children)),
                  (a.flags |= 4096));
            return a;
          }
          return Q
            ? ((o = t),
              (u = a),
              (s = B.children),
              (p = B.fallback),
              (S = i),
              (w = u.mode),
              (_ = (o = o.child).sibling),
              (E = { mode: "hidden", children: s }),
              0 == (1 & w) && u.child !== o
                ? (((s = u.child).childLanes = 0),
                  (s.pendingProps = E),
                  (u.deletions = null))
                : ((s = je(o, E)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== _
                ? (p = je(_, p))
                : ((p = ne(p, w, S, null)), (p.flags |= 2)),
              (p.return = u),
              (s.return = u),
              (s.sibling = p),
              (u.child = s),
              (B = p),
              (Q = a.child),
              (U = t.child.memoizedState),
              (Q.memoizedState =
                null === U
                  ? lg(i)
                  : { baseLanes: U.baseLanes | i, cachePool: null }),
              (Q.childLanes = t.childLanes & ~i),
              (a.memoizedState = nF),
              B)
            : ((N = t),
              (L = a),
              (j = B.children),
              (F = i),
              (N = (D = N.child).sibling),
              (j = je(D, { mode: "visible", children: j })),
              0 == (1 & L.mode) && (j.lanes = F),
              (j.return = L),
              (j.sibling = null),
              null !== N &&
                (null === (F = L.deletions)
                  ? ((L.deletions = [N]), (L.flags |= 16))
                  : F.push(N)),
              (i = L.child = j),
              (a.memoizedState = null),
              i);
        }
        function og(t, a) {
          return (
            ((a = ng(
              { mode: "visible", children: a },
              t.mode,
              0,
              null,
            )).return = t),
            (t.child = a)
          );
        }
        function pg(t, a, i, o) {
          return (
            null !== o && ee(o),
            nu(a, t.child, null, i),
            (t = og(a, a.pendingProps.children)),
            (t.flags |= 2),
            (a.memoizedState = null),
            t
          );
        }
        function tg(t, a, i) {
          t.lanes |= a;
          var o = t.alternate;
          null !== o && (o.lanes |= a), id(t.return, a, i);
        }
        function ug(t, a, i, o, u) {
          var s = t.memoizedState;
          null === s
            ? (t.memoizedState = {
                isBackwards: a,
                rendering: null,
                renderingStartTime: 0,
                last: o,
                tail: i,
                tailMode: u,
              })
            : ((s.isBackwards = a),
              (s.rendering = null),
              (s.renderingStartTime = 0),
              (s.last = o),
              (s.tail = i),
              (s.tailMode = u));
        }
        function vg(t, a, i) {
          var o = a.pendingProps,
            u = o.revealOrder,
            s = o.tail;
          if ((R(t, a, o.children, i), 0 != (2 & (o = nv.current))))
            (o = (1 & o) | 2), (a.flags |= 128);
          else {
            if (null !== t && 0 != (128 & t.flags))
              e: for (t = a.child; null !== t; ) {
                if (13 === t.tag) null !== t.memoizedState && tg(t, i, a);
                else if (19 === t.tag) tg(t, i, a);
                else if (null !== t.child) {
                  (t.child.return = t), (t = t.child);
                  continue;
                }
                if (t === a) break;
                for (; null === t.sibling; ) {
                  if (null === t.return || t.return === a) break e;
                  t = t.return;
                }
                (t.sibling.return = t.return), (t = t.sibling);
              }
            o &= 1;
          }
          if ((y(nv, o), 0 == (1 & a.mode))) a.memoizedState = null;
          else
            switch (u) {
              case "forwards":
                for (u = null, i = a.child; null !== i; )
                  null !== (t = i.alternate) && null === ze(t) && (u = i),
                    (i = i.sibling);
                null === (i = u)
                  ? ((u = a.child), (a.child = null))
                  : ((u = i.sibling), (i.sibling = null)),
                  ug(a, !1, u, i, s);
                break;
              case "backwards":
                for (i = null, u = a.child, a.child = null; null !== u; ) {
                  if (null !== (t = u.alternate) && null === ze(t)) {
                    a.child = u;
                    break;
                  }
                  (t = u.sibling), (u.sibling = i), (i = u), (u = t);
                }
                ug(a, !0, i, null, s);
                break;
              case "together":
                ug(a, !1, null, null, void 0);
                break;
              default:
                a.memoizedState = null;
            }
          return a.child;
        }
        function Zf(t, a, i) {
          if (
            (null !== t && (a.dependencies = t.dependencies),
            (n5 |= a.lanes),
            0 == (i & a.childLanes))
          )
            return null;
          if (null !== t && a.child !== t.child) throw Error(n(153));
          if (null !== a.child) {
            for (
              i = je((t = a.child), t.pendingProps), a.child = i, i.return = a;
              null !== t.sibling;

            )
              (t = t.sibling),
                ((i = i.sibling = je(t, t.pendingProps)).return = a);
            i.sibling = null;
          }
          return a.child;
        }
        var nO = !1,
          nD = !1,
          nA = "function" == typeof WeakSet ? WeakSet : Set,
          nB = null;
        function Bg(t, a) {
          var i = t.ref;
          if (null !== i) {
            if ("function" == typeof i)
              try {
                i(null);
              } catch (i) {
                T(t, a, i);
              }
            else i.current = null;
          }
        }
        function Cg(t, a, i) {
          try {
            i();
          } catch (i) {
            T(t, a, i);
          }
        }
        var nH = !1;
        function Fg(t, a, i) {
          var o = a.updateQueue;
          if (null !== (o = null !== o ? o.lastEffect : null)) {
            var u = (o = o.next);
            do {
              if ((u.tag & t) === t) {
                var s = u.destroy;
                (u.destroy = void 0), void 0 !== s && Cg(a, i, s);
              }
              u = u.next;
            } while (u !== o);
          }
        }
        function Gg(t, a) {
          if (
            null !== (a = null !== (a = a.updateQueue) ? a.lastEffect : null)
          ) {
            var i = (a = a.next);
            do {
              if ((i.tag & t) === t) {
                var o = i.create;
                i.destroy = o();
              }
              i = i.next;
            } while (i !== a);
          }
        }
        function Hg(t) {
          var a = t.ref;
          if (null !== a) {
            var i = t.stateNode;
            (t = 5 === t.tag ? er(i) : i),
              "function" == typeof a ? a(t) : (a.current = t);
          }
        }
        function Ig(t, a, i) {
          if (tQ && "function" == typeof tQ.onCommitFiberUnmount)
            try {
              tQ.onCommitFiberUnmount(tU, a);
            } catch (t) {}
          switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (t = a.updateQueue) && null !== (t = t.lastEffect)) {
                var o = (t = t.next);
                do {
                  var u = o,
                    s = u.destroy;
                  (u = u.tag),
                    void 0 !== s &&
                      (0 != (2 & u)
                        ? Cg(a, i, s)
                        : 0 != (4 & u) && Cg(a, i, s)),
                    (o = o.next);
                } while (o !== t);
              }
              break;
            case 1:
              if (
                (Bg(a, i),
                "function" == typeof (t = a.stateNode).componentWillUnmount)
              )
                try {
                  (t.props = a.memoizedProps),
                    (t.state = a.memoizedState),
                    t.componentWillUnmount();
                } catch (t) {
                  T(a, i, t);
                }
              break;
            case 5:
              Bg(a, i);
              break;
            case 4:
              eS
                ? Jg(t, a, i)
                : ew &&
                  ew &&
                  ((i = eK((a = a.stateNode.containerInfo))), e2(a, i));
          }
        }
        function Kg(t, a, i) {
          for (var o = a; ; )
            if ((Ig(t, o, i), null === o.child || (eS && 4 === o.tag))) {
              if (o === a) break;
              for (; null === o.sibling; ) {
                if (null === o.return || o.return === a) return;
                o = o.return;
              }
              (o.sibling.return = o.return), (o = o.sibling);
            } else (o.child.return = o), (o = o.child);
        }
        function Mg(t) {
          return 5 === t.tag || 3 === t.tag || 4 === t.tag;
        }
        function Ng(t) {
          e: for (;;) {
            for (; null === t.sibling; ) {
              if (null === t.return || Mg(t.return)) return null;
              t = t.return;
            }
            for (
              t.sibling.return = t.return, t = t.sibling;
              5 !== t.tag && 6 !== t.tag && 18 !== t.tag;

            ) {
              if (2 & t.flags || null === t.child || 4 === t.tag) continue e;
              (t.child.return = t), (t = t.child);
            }
            if (!(2 & t.flags)) return t.stateNode;
          }
        }
        function Og(t) {
          if (eS) {
            e: {
              for (var a = t.return; null !== a; ) {
                if (Mg(a)) break e;
                a = a.return;
              }
              throw Error(n(160));
            }
            var i = a;
            switch (i.tag) {
              case 5:
                (a = i.stateNode),
                  32 & i.flags && (eq(a), (i.flags &= -33)),
                  (i = Ng(t)),
                  (function Pg(t, a, i) {
                    var o = t.tag;
                    if (5 === o || 6 === o)
                      (t = t.stateNode), a ? eU(i, t, a) : eO(i, t);
                    else if (4 !== o && null !== (t = t.child))
                      for (Pg(t, a, i), t = t.sibling; null !== t; )
                        Pg(t, a, i), (t = t.sibling);
                  })(t, i, a);
                break;
              case 3:
              case 4:
                (a = i.stateNode.containerInfo),
                  (i = Ng(t)),
                  (function Qg(t, a, i) {
                    var o = t.tag;
                    if (5 === o || 6 === o)
                      (t = t.stateNode), a ? eQ(i, t, a) : eD(i, t);
                    else if (4 !== o && null !== (t = t.child))
                      for (Qg(t, a, i), t = t.sibling; null !== t; )
                        Qg(t, a, i), (t = t.sibling);
                  })(t, i, a);
                break;
              default:
                throw Error(n(161));
            }
          }
        }
        function Jg(t, a, i) {
          for (var o, u, s = a, p = !1; ; ) {
            if (!p) {
              p = s.return;
              e: for (;;) {
                if (null === p) throw Error(n(160));
                switch (((o = p.stateNode), p.tag)) {
                  case 5:
                    u = !1;
                    break e;
                  case 3:
                  case 4:
                    (o = o.containerInfo), (u = !0);
                    break e;
                }
                p = p.return;
              }
              p = !0;
            }
            if (5 === s.tag || 6 === s.tag)
              Kg(t, s, i), u ? eW(o, s.stateNode) : e$(o, s.stateNode);
            else if (18 === s.tag) u ? th(o, s.stateNode) : tp(o, s.stateNode);
            else if (4 === s.tag) {
              if (null !== s.child) {
                (o = s.stateNode.containerInfo),
                  (u = !0),
                  (s.child.return = s),
                  (s = s.child);
                continue;
              }
            } else if ((Ig(t, s, i), null !== s.child)) {
              (s.child.return = s), (s = s.child);
              continue;
            }
            if (s === a) break;
            for (; null === s.sibling; ) {
              if (null === s.return || s.return === a) return;
              4 === (s = s.return).tag && (p = !1);
            }
            (s.sibling.return = s.return), (s = s.sibling);
          }
        }
        function Rg(t, a) {
          if (eS) {
            switch (a.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Fg(3, a, a.return), Gg(3, a), Fg(5, a, a.return);
                return;
              case 1:
              case 12:
              case 17:
                return;
              case 5:
                var i = a.stateNode;
                if (null != i) {
                  var o = a.memoizedProps;
                  t = null !== t ? t.memoizedProps : o;
                  var u = a.type,
                    s = a.updateQueue;
                  (a.updateQueue = null), null !== s && eH(i, s, u, t, o, a);
                }
                return;
              case 6:
                if (null === a.stateNode) throw Error(n(162));
                (i = a.memoizedProps),
                  eA(a.stateNode, null !== t ? t.memoizedProps : i, i);
                return;
              case 3:
                ek &&
                  null !== t &&
                  t.memoizedState.isDehydrated &&
                  ts(a.stateNode.containerInfo);
                return;
              case 13:
              case 19:
                Sg(a);
                return;
            }
            throw Error(n(163));
          }
          switch (a.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              Fg(3, a, a.return), Gg(3, a), Fg(5, a, a.return);
              return;
            case 12:
            case 22:
            case 23:
              return;
            case 13:
            case 19:
              Sg(a);
              return;
            case 3:
              ek &&
                null !== t &&
                t.memoizedState.isDehydrated &&
                ts(a.stateNode.containerInfo);
          }
          e: if (ew) {
            switch (a.tag) {
              case 1:
              case 5:
              case 6:
                break e;
              case 3:
              case 4:
                e2((a = a.stateNode).containerInfo, a.pendingChildren);
                break e;
            }
            throw Error(n(163));
          }
        }
        function Sg(t) {
          var a = t.updateQueue;
          if (null !== a) {
            t.updateQueue = null;
            var i = t.stateNode;
            null === i && (i = t.stateNode = new nA()),
              a.forEach(function (a) {
                var o = Tg.bind(null, t, a);
                i.has(a) || (i.add(a), a.then(o, o));
              });
          }
        }
        function $g(t) {
          for (; null !== nB; ) {
            var a = nB;
            if (0 != (8772 & a.flags)) {
              var i = a.alternate;
              try {
                if (0 != (8772 & a.flags))
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      nD || Gg(5, a);
                      break;
                    case 1:
                      var o = a.stateNode;
                      if (4 & a.flags && !nD) {
                        if (null === i) o.componentDidMount();
                        else {
                          var u =
                            a.elementType === a.type
                              ? i.memoizedProps
                              : ad(a.type, i.memoizedProps);
                          o.componentDidUpdate(
                            u,
                            i.memoizedState,
                            o.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      }
                      var s = a.updateQueue;
                      null !== s && wd(a, s, o);
                      break;
                    case 3:
                      var p = a.updateQueue;
                      if (null !== p) {
                        if (((i = null), null !== a.child))
                          switch (a.child.tag) {
                            case 5:
                              i = er(a.child.stateNode);
                              break;
                            case 1:
                              i = a.child.stateNode;
                          }
                        wd(a, p, i);
                      }
                      break;
                    case 5:
                      var S = a.stateNode;
                      null === i &&
                        4 & a.flags &&
                        eB(S, a.type, a.memoizedProps, a);
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (ek && null === a.memoizedState) {
                        var w = a.alternate;
                        if (null !== w) {
                          var _ = w.memoizedState;
                          if (null !== _) {
                            var E = _.dehydrated;
                            null !== E && tc(E);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(n(163));
                  }
                nD || (512 & a.flags && Hg(a));
              } catch (t) {
                T(a, a.return, t);
              }
            }
            if (a === t) {
              nB = null;
              break;
            }
            if (null !== (i = a.sibling)) {
              (i.return = a.return), (nB = i);
              break;
            }
            nB = a.return;
          }
        }
        function Wg(t) {
          for (; null !== nB; ) {
            var a = nB;
            if (a === t) {
              nB = null;
              break;
            }
            var i = a.sibling;
            if (null !== i) {
              (i.return = a.return), (nB = i);
              break;
            }
            nB = a.return;
          }
        }
        function Zg(t) {
          for (; null !== nB; ) {
            var a = nB;
            try {
              switch (a.tag) {
                case 0:
                case 11:
                case 15:
                  var i = a.return;
                  try {
                    Gg(4, a);
                  } catch (t) {
                    T(a, i, t);
                  }
                  break;
                case 1:
                  var o = a.stateNode;
                  if ("function" == typeof o.componentDidMount) {
                    var u = a.return;
                    try {
                      o.componentDidMount();
                    } catch (t) {
                      T(a, u, t);
                    }
                  }
                  var s = a.return;
                  try {
                    Hg(a);
                  } catch (t) {
                    T(a, s, t);
                  }
                  break;
                case 5:
                  var p = a.return;
                  try {
                    Hg(a);
                  } catch (t) {
                    T(a, p, t);
                  }
              }
            } catch (t) {
              T(a, a.return, t);
            }
            if (a === t) {
              nB = null;
              break;
            }
            var S = a.sibling;
            if (null !== S) {
              (S.return = a.return), (nB = S);
              break;
            }
            nB = a.return;
          }
        }
        var nU = 0,
          nQ = 1,
          n$ = 2,
          nW = 3,
          nq = 4;
        if ("function" == typeof Symbol && Symbol.for) {
          var nV = Symbol.for;
          (nU = nV("selector.component")),
            (nQ = nV("selector.has_pseudo_class")),
            (n$ = nV("selector.role")),
            (nW = nV("selector.test_id")),
            (nq = nV("selector.text"));
        }
        function gh(t) {
          var a = eP(t);
          if (null != a) {
            if ("string" != typeof a.memoizedProps["data-testname"])
              throw Error(n(364));
            return a;
          }
          if (null === (t = eR(t))) throw Error(n(362));
          return t.stateNode.current;
        }
        function hh(t, a) {
          switch (a.$$typeof) {
            case nU:
              if (t.type === a.value) return !0;
              break;
            case nQ:
              e: {
                (a = a.value), (t = [t, 0]);
                for (var i = 0; i < t.length; ) {
                  var o = t[i++],
                    u = t[i++],
                    s = a[u];
                  if (5 !== o.tag || !eL(o)) {
                    for (; null != s && hh(o, s); ) s = a[++u];
                    if (u === a.length) {
                      a = !0;
                      break e;
                    }
                    for (o = o.child; null !== o; )
                      t.push(o, u), (o = o.sibling);
                  }
                }
                a = !1;
              }
              return a;
            case n$:
              if (5 === t.tag && eM(t.stateNode, a.value)) return !0;
              break;
            case nq:
              if (
                (5 === t.tag || 6 === t.tag) &&
                null !== (t = eT(t)) &&
                0 <= t.indexOf(a.value)
              )
                return !0;
              break;
            case nW:
              if (
                5 === t.tag &&
                "string" == typeof (t = t.memoizedProps["data-testname"]) &&
                t.toLowerCase() === a.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(n(365));
          }
          return !1;
        }
        function ih(t) {
          switch (t.$$typeof) {
            case nU:
              return "<" + (va(t.value) || "Unknown") + ">";
            case nQ:
              return ":has(" + (ih(t) || "") + ")";
            case n$:
              return '[role="' + t.value + '"]';
            case nq:
              return '"' + t.value + '"';
            case nW:
              return '[data-testname="' + t.value + '"]';
            default:
              throw Error(n(365));
          }
        }
        function jh(t, a) {
          var i = [];
          t = [t, 0];
          for (var o = 0; o < t.length; ) {
            var u = t[o++],
              s = t[o++],
              p = a[s];
            if (5 !== u.tag || !eL(u)) {
              for (; null != p && hh(u, p); ) p = a[++s];
              if (s === a.length) i.push(u);
              else
                for (u = u.child; null !== u; ) t.push(u, s), (u = u.sibling);
            }
          }
          return i;
        }
        function kh(t, a) {
          if (!eN) throw Error(n(363));
          (t = jh((t = gh(t)), a)), (a = []), (t = Array.from(t));
          for (var i = 0; i < t.length; ) {
            var o = t[i++];
            if (5 === o.tag) eL(o) || a.push(o.stateNode);
            else for (o = o.child; null !== o; ) t.push(o), (o = o.sibling);
          }
          return a;
        }
        var nZ = Math.ceil,
          nG = N.ReactCurrentDispatcher,
          nY = N.ReactCurrentOwner,
          nX = N.ReactCurrentBatchConfig,
          nJ = 0,
          nK = null,
          n0 = null,
          n1 = 0,
          n2 = 0,
          n3 = gc(0),
          n4 = 0,
          n6 = null,
          n5 = 0,
          n8 = 0,
          n7 = 0,
          n9 = null,
          re = null,
          rt = 0,
          rn = 1 / 0;
        function sh() {
          rn = tO() + 500;
        }
        var rr = !1,
          rl = null,
          ra = null,
          ri = !1,
          ro = null,
          ru = 0,
          rs = 0,
          rc = null,
          rp = -1,
          rh = 0;
        function H() {
          return 0 != (6 & nJ) ? tO() : -1 !== rp ? rp : (rp = tO());
        }
        function zd(t) {
          return 0 == (1 & t.mode)
            ? 1
            : 0 != (2 & nJ) && 0 !== n1
              ? n1 & -n1
              : null !== tZ.transition
                ? (0 === rh &&
                    ((t = tR),
                    0 == (4194240 & (tR <<= 1)) && (tR = 64),
                    (rh = t)),
                  rh)
                : 0 !== (t = tT)
                  ? t
                  : eC();
        }
        function Ad(t, a, i) {
          if (50 < rs) throw ((rs = 0), (rc = null), Error(n(185)));
          var o = Ah(t, a);
          return null === o
            ? null
            : (Bc(o, a, i),
              (0 == (2 & nJ) || o !== nK) &&
                (o === nK &&
                  (0 == (2 & nJ) && (n8 |= a), 4 === n4 && Bh(o, n1)),
                Z(o, i),
                1 === a && 0 === nJ && 0 == (1 & t.mode) && (sh(), tq && Xc())),
              o);
        }
        function Ah(t, a) {
          t.lanes |= a;
          var i = t.alternate;
          for (null !== i && (i.lanes |= a), i = t, t = t.return; null !== t; )
            (t.childLanes |= a),
              null !== (i = t.alternate) && (i.childLanes |= a),
              (i = t),
              (t = t.return);
          return 3 === i.tag ? i.stateNode : null;
        }
        function Z(t, a) {
          var i,
            o,
            u,
            s = t.callbackNode;
          !(function (t, a) {
            for (
              var i = t.suspendedLanes,
                o = t.pingedLanes,
                u = t.expirationTimes,
                s = t.pendingLanes;
              0 < s;

            ) {
              var p = 31 - tE(s),
                S = 1 << p,
                w = u[p];
              -1 === w
                ? (0 == (S & i) || 0 != (S & o)) &&
                  (u[p] = (function (t, a) {
                    switch (t) {
                      case 1:
                      case 2:
                      case 4:
                        return a + 250;
                      case 8:
                      case 16:
                      case 32:
                      case 64:
                      case 128:
                      case 256:
                      case 512:
                      case 1024:
                      case 2048:
                      case 4096:
                      case 8192:
                      case 16384:
                      case 32768:
                      case 65536:
                      case 131072:
                      case 262144:
                      case 524288:
                      case 1048576:
                      case 2097152:
                        return a + 5e3;
                      default:
                        return -1;
                    }
                  })(S, a))
                : w <= a && (t.expiredLanes |= S),
                (s &= ~S);
            }
          })(t, a);
          var p = wc(t, t === nK ? n1 : 0);
          if (0 === p)
            null !== s && tM(s),
              (t.callbackNode = null),
              (t.callbackPriority = 0);
          else if (((a = p & -p), t.callbackPriority !== a)) {
            if ((null != s && tM(s), 1 === a))
              0 === t.tag
                ? ((u = Ch.bind(null, t)), (tq = !0), Vc(u))
                : Vc(Ch.bind(null, t)),
                eE
                  ? ez(function () {
                      0 === nJ && Xc();
                    })
                  : tL(tD, Xc),
                (s = null);
            else {
              switch (Ec(p)) {
                case 1:
                  s = tD;
                  break;
                case 4:
                  s = tA;
                  break;
                case 16:
                default:
                  s = tB;
                  break;
                case 536870912:
                  s = tH;
              }
              s = tL(s, Eh.bind(null, t));
            }
            (t.callbackPriority = a), (t.callbackNode = s);
          }
        }
        function Eh(t, a) {
          if (((rp = -1), (rh = 0), 0 != (6 & nJ))) throw Error(n(327));
          var i = t.callbackNode;
          if (Fh() && t.callbackNode !== i) return null;
          var o = wc(t, t === nK ? n1 : 0);
          if (0 === o) return null;
          if (0 != (30 & o) || 0 != (o & t.expiredLanes) || a) a = Gh(t, o);
          else {
            a = o;
            var u = nJ;
            nJ |= 2;
            var s = Hh();
            for ((nK !== t || n1 !== a) && (sh(), Ih(t, a)); ; )
              try {
                !(function () {
                  for (; null !== n0 && !tj(); ) Rh(n0);
                })();
                break;
              } catch (a) {
                Kh(t, a);
              }
            fd(),
              (nG.current = s),
              (nJ = u),
              null !== n0 ? (a = 0) : ((nK = null), (n1 = 0), (a = n4));
          }
          if (0 !== a) {
            if (
              (2 === a && 0 !== (u = zc(t)) && ((o = u), (a = Lh(t, u))),
              1 === a)
            )
              throw ((i = n6), Ih(t, 0), Bh(t, o), Z(t, tO()), i);
            if (6 === a) Bh(t, o);
            else {
              if (
                ((u = t.current.alternate),
                0 == (30 & o) &&
                  !(function (t) {
                    for (var a = t; ; ) {
                      if (16384 & a.flags) {
                        var i = a.updateQueue;
                        if (null !== i && null !== (i = i.stores))
                          for (var o = 0; o < i.length; o++) {
                            var u = i[o],
                              s = u.getSnapshot;
                            u = u.value;
                            try {
                              if (!t$(s(), u)) return !1;
                            } catch (t) {
                              return !1;
                            }
                          }
                      }
                      if (((i = a.child), 16384 & a.subtreeFlags && null !== i))
                        (i.return = a), (a = i);
                      else {
                        if (a === t) break;
                        for (; null === a.sibling; ) {
                          if (null === a.return || a.return === t) return !0;
                          a = a.return;
                        }
                        (a.sibling.return = a.return), (a = a.sibling);
                      }
                    }
                    return !0;
                  })(u) &&
                  (2 === (a = Gh(t, o)) &&
                    0 !== (s = zc(t)) &&
                    ((o = s), (a = Lh(t, s))),
                  1 === a))
              )
                throw ((i = n6), Ih(t, 0), Bh(t, o), Z(t, tO()), i);
              switch (((t.finishedWork = u), (t.finishedLanes = o), a)) {
                case 0:
                case 1:
                  throw Error(n(345));
                case 2:
                case 5:
                  Nh(t, re);
                  break;
                case 3:
                  if (
                    (Bh(t, o),
                    (130023424 & o) === o && 10 < (a = rt + 500 - tO()))
                  ) {
                    if (0 !== wc(t, 0)) break;
                    if (((u = t.suspendedLanes) & o) !== o) {
                      H(), (t.pingedLanes |= t.suspendedLanes & u);
                      break;
                    }
                    t.timeoutHandle = em(Nh.bind(null, t, re), a);
                    break;
                  }
                  Nh(t, re);
                  break;
                case 4:
                  if ((Bh(t, o), (4194240 & o) === o)) break;
                  for (u = -1, a = t.eventTimes; 0 < o; ) {
                    var p = 31 - tE(o);
                    (s = 1 << p), (p = a[p]) > u && (u = p), (o &= ~s);
                  }
                  if (
                    ((o = u),
                    10 <
                      (o =
                        (120 > (o = tO() - o)
                          ? 120
                          : 480 > o
                            ? 480
                            : 1080 > o
                              ? 1080
                              : 1920 > o
                                ? 1920
                                : 3e3 > o
                                  ? 3e3
                                  : 4320 > o
                                    ? 4320
                                    : 1960 * nZ(o / 1960)) - o))
                  ) {
                    t.timeoutHandle = em(Nh.bind(null, t, re), o);
                    break;
                  }
                  Nh(t, re);
                  break;
                default:
                  throw Error(n(329));
              }
            }
          }
          return Z(t, tO()), t.callbackNode === i ? Eh.bind(null, t) : null;
        }
        function Lh(t, a) {
          var i = n9;
          return (
            t.current.memoizedState.isDehydrated && (Ih(t, a).flags |= 256),
            2 !== (t = Gh(t, a)) && ((a = re), (re = i), null !== a && Sf(a)),
            t
          );
        }
        function Sf(t) {
          null === re ? (re = t) : re.push.apply(re, t);
        }
        function Bh(t, a) {
          for (
            a &= ~n7,
              a &= ~n8,
              t.suspendedLanes |= a,
              t.pingedLanes &= ~a,
              t = t.expirationTimes;
            0 < a;

          ) {
            var i = 31 - tE(a),
              o = 1 << i;
            (t[i] = -1), (a &= ~o);
          }
        }
        function Ch(t) {
          if (0 != (6 & nJ)) throw Error(n(327));
          Fh();
          var a = wc(t, 0);
          if (0 == (1 & a)) return Z(t, tO()), null;
          var i = Gh(t, a);
          if (0 !== t.tag && 2 === i) {
            var o = zc(t);
            0 !== o && ((a = o), (i = Lh(t, o)));
          }
          if (1 === i) throw ((i = n6), Ih(t, 0), Bh(t, a), Z(t, tO()), i);
          if (6 === i) throw Error(n(345));
          return (
            (t.finishedWork = t.current.alternate),
            (t.finishedLanes = a),
            Nh(t, re),
            Z(t, tO()),
            null
          );
        }
        function Oh(t) {
          null !== ro && 0 === ro.tag && 0 == (6 & nJ) && Fh();
          var a = nJ;
          nJ |= 1;
          var i = nX.transition,
            o = tT;
          try {
            if (((nX.transition = null), (tT = 1), t)) return t();
          } finally {
            (tT = o), (nX.transition = i), 0 == (6 & (nJ = a)) && Xc();
          }
        }
        function Vf() {
          (n2 = n3.current), x(n3);
        }
        function Ih(t, a) {
          (t.finishedWork = null), (t.finishedLanes = 0);
          var i = t.timeoutHandle;
          if ((i !== eb && ((t.timeoutHandle = eb), ev(i)), null !== n0))
            for (i = n0.return; null !== i; ) {
              var o = i;
              switch ((Sd(o), o.tag)) {
                case 1:
                  null != (o = o.type.childContextTypes) && kc();
                  break;
                case 3:
                  we(), x(tC), x(t_), Be();
                  break;
                case 5:
                  ye(o);
                  break;
                case 4:
                  we();
                  break;
                case 13:
                case 19:
                  x(nv);
                  break;
                case 10:
                  hd(o.type._context);
                  break;
                case 22:
                case 23:
                  Vf();
              }
              i = i.return;
            }
          if (
            ((nK = t),
            (n0 = t = je(t.current, null)),
            (n1 = n2 = a),
            (n4 = 0),
            (n6 = null),
            (n7 = n8 = n5 = 0),
            (re = n9 = null),
            null !== tK)
          ) {
            for (a = 0; a < tK.length; a++)
              if (null !== (o = (i = tK[a]).interleaved)) {
                i.interleaved = null;
                var u = o.next,
                  s = i.pending;
                if (null !== s) {
                  var p = s.next;
                  (s.next = u), (o.next = p);
                }
                i.pending = o;
              }
            tK = null;
          }
          return t;
        }
        function Kh(t, a) {
          for (;;) {
            var i = n0;
            try {
              if ((fd(), (ny.current = nN), nC)) {
                for (var o = nk.memoizedState; null !== o; ) {
                  var u = o.queue;
                  null !== u && (u.pending = null), (o = o.next);
                }
                nC = !1;
              }
              if (
                ((nw = 0),
                (n_ = nP = nk = null),
                (nx = !1),
                (nE = 0),
                (nY.current = null),
                null === i || null === i.return)
              ) {
                (n4 = 1), (n6 = a), (n0 = null);
                break;
              }
              e: {
                var s = t,
                  p = i.return,
                  S = i,
                  w = a;
                if (
                  ((a = n1),
                  (S.flags |= 32768),
                  null !== w &&
                    "object" == typeof w &&
                    "function" == typeof w.then)
                ) {
                  var _ = w,
                    E = S,
                    N = E.tag;
                  if (0 == (1 & E.mode) && (0 === N || 11 === N || 15 === N)) {
                    var L = E.alternate;
                    L
                      ? ((E.updateQueue = L.updateQueue),
                        (E.memoizedState = L.memoizedState),
                        (E.lanes = L.lanes))
                      : ((E.updateQueue = null), (E.memoizedState = null));
                  }
                  var j = Hf(p);
                  if (null !== j) {
                    (j.flags &= -257),
                      If(j, p, S, s, a),
                      1 & j.mode && Ff(s, _, a),
                      (a = j),
                      (w = _);
                    var F = a.updateQueue;
                    if (null === F) {
                      var D = new Set();
                      D.add(w), (a.updateQueue = D);
                    } else F.add(w);
                    break e;
                  }
                  if (0 == (1 & a)) {
                    Ff(s, _, a), Tf();
                    break e;
                  }
                  w = Error(n(426));
                } else if (na && 1 & S.mode) {
                  var A = Hf(p);
                  if (null !== A) {
                    0 == (65536 & A.flags) && (A.flags |= 256),
                      If(A, p, S, s, a),
                      ee(w);
                    break e;
                  }
                }
                (s = w),
                  4 !== n4 && (n4 = 2),
                  null === n9 ? (n9 = [s]) : n9.push(s),
                  (w = xf(w, S)),
                  (S = p);
                do {
                  switch (S.tag) {
                    case 3:
                      (S.flags |= 65536), (a &= -a), (S.lanes |= a);
                      var B = Af(S, w, a);
                      td(S, B);
                      break e;
                    case 1:
                      s = w;
                      var U = S.type,
                        Q = S.stateNode;
                      if (
                        0 == (128 & S.flags) &&
                        ("function" == typeof U.getDerivedStateFromError ||
                          (null !== Q &&
                            "function" == typeof Q.componentDidCatch &&
                            (null === ra || !ra.has(Q))))
                      ) {
                        (S.flags |= 65536), (a &= -a), (S.lanes |= a);
                        var $ = Df(S, s, a);
                        td(S, $);
                        break e;
                      }
                  }
                  S = S.return;
                } while (null !== S);
              }
              Ph(i);
            } catch (t) {
              (a = t), n0 === i && null !== i && (n0 = i = i.return);
              continue;
            }
            break;
          }
        }
        function Hh() {
          var t = nG.current;
          return (nG.current = nN), null === t ? nN : t;
        }
        function Tf() {
          (0 === n4 || 3 === n4 || 2 === n4) && (n4 = 4),
            null === nK ||
              (0 == (268435455 & n5) && 0 == (268435455 & n8)) ||
              Bh(nK, n1);
        }
        function Gh(t, a) {
          var i = nJ;
          nJ |= 2;
          var o = Hh();
          for ((nK === t && n1 === a) || Ih(t, a); ; )
            try {
              !(function () {
                for (; null !== n0; ) Rh(n0);
              })();
              break;
            } catch (a) {
              Kh(t, a);
            }
          if ((fd(), (nJ = i), (nG.current = o), null !== n0))
            throw Error(n(261));
          return (nK = null), (n1 = 0), n4;
        }
        function Rh(t) {
          var a = p(t.alternate, t, n2);
          (t.memoizedProps = t.pendingProps),
            null === a ? Ph(t) : (n0 = a),
            (nY.current = null);
        }
        function Ph(t) {
          var i = t;
          do {
            var p = i.alternate;
            if (((t = i.return), 0 == (32768 & i.flags))) {
              if (
                null !==
                (p = (function (t, i, p) {
                  var S = i.pendingProps;
                  switch ((Sd(i), i.tag)) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                      return P(i), null;
                    case 1:
                    case 17:
                      return C(i.type) && kc(), P(i), null;
                    case 3:
                      return (
                        (S = i.stateNode),
                        we(),
                        x(tC),
                        x(t_),
                        Be(),
                        S.pendingContext &&
                          ((S.context = S.pendingContext),
                          (S.pendingContext = null)),
                        (null === t || null === t.child) &&
                          (ce(i)
                            ? Jf(i)
                            : null === t ||
                              (t.memoizedState.isDehydrated &&
                                0 == (256 & i.flags)) ||
                              ((i.flags |= 1024),
                              null !== no && (Sf(no), (no = null)))),
                        o(t, i),
                        P(i),
                        null
                      );
                    case 5:
                      ye(i), (p = ue(nm.current));
                      var w = i.type;
                      if (null !== t && null != i.stateNode)
                        u(t, i, w, S, p),
                          t.ref !== i.ref &&
                            ((i.flags |= 512), (i.flags |= 2097152));
                      else {
                        if (!S) {
                          if (null === i.stateNode) throw Error(n(166));
                          return P(i), null;
                        }
                        if (((t = ue(np.current)), ce(i))) {
                          if (!ek) throw Error(n(175));
                          (t = ta(
                            i.stateNode,
                            i.type,
                            i.memoizedProps,
                            p,
                            t,
                            i,
                            !ni,
                          )),
                            (i.updateQueue = t),
                            null !== t && Jf(i);
                        } else {
                          var _ = es(w, S, p, t, i);
                          a(_, i, !1, !1),
                            (i.stateNode = _),
                            ed(_, w, S, p, t) && Jf(i);
                        }
                        null !== i.ref &&
                          ((i.flags |= 512), (i.flags |= 2097152));
                      }
                      return P(i), null;
                    case 6:
                      if (t && null != i.stateNode) s(t, i, t.memoizedProps, S);
                      else {
                        if ("string" != typeof S && null === i.stateNode)
                          throw Error(n(166));
                        if (
                          ((t = ue(nm.current)), (p = ue(np.current)), ce(i))
                        ) {
                          if (!ek) throw Error(n(176));
                          if (
                            (p = ti(
                              (t = i.stateNode),
                              (S = i.memoizedProps),
                              i,
                              !ni,
                            )) &&
                            null !== (w = nr)
                          )
                            switch (((_ = 0 != (1 & w.mode)), w.tag)) {
                              case 3:
                                tv(w.stateNode.containerInfo, t, S, _);
                                break;
                              case 5:
                                tb(
                                  w.type,
                                  w.memoizedProps,
                                  w.stateNode,
                                  t,
                                  S,
                                  _,
                                );
                            }
                          p && Jf(i);
                        } else i.stateNode = eg(S, t, p, i);
                      }
                      return P(i), null;
                    case 13:
                      if (
                        (x(nv),
                        (S = i.memoizedState),
                        na &&
                          null !== nl &&
                          0 != (1 & i.mode) &&
                          0 == (128 & i.flags))
                      ) {
                        for (t = nl; t; ) t = tt(t);
                        return de(), (i.flags |= 98560), i;
                      }
                      if (null !== S && null !== S.dehydrated) {
                        if (((S = ce(i)), null === t)) {
                          if (!S) throw Error(n(318));
                          if (!ek) throw Error(n(344));
                          if (
                            !(t =
                              null !== (t = i.memoizedState)
                                ? t.dehydrated
                                : null)
                          )
                            throw Error(n(317));
                          to(t, i);
                        } else
                          de(),
                            0 == (128 & i.flags) && (i.memoizedState = null),
                            (i.flags |= 4);
                        return P(i), null;
                      }
                      if (
                        (null !== no && (Sf(no), (no = null)),
                        0 != (128 & i.flags))
                      )
                        return (i.lanes = p), i;
                      return (
                        (S = null !== S),
                        (p = !1),
                        null === t ? ce(i) : (p = null !== t.memoizedState),
                        S &&
                          !p &&
                          ((i.child.flags |= 8192),
                          0 != (1 & i.mode) &&
                            (null === t || 0 != (1 & nv.current)
                              ? 0 === n4 && (n4 = 3)
                              : Tf())),
                        null !== i.updateQueue && (i.flags |= 4),
                        P(i),
                        null
                      );
                    case 4:
                      return (
                        we(),
                        o(t, i),
                        null === t && e_(i.stateNode.containerInfo),
                        P(i),
                        null
                      );
                    case 10:
                      return hd(i.type._context), P(i), null;
                    case 19:
                      if ((x(nv), null === (w = i.memoizedState)))
                        return P(i), null;
                      if (
                        ((S = 0 != (128 & i.flags)), null === (_ = w.rendering))
                      ) {
                        if (S) Qf(w, !1);
                        else {
                          if (0 !== n4 || (null !== t && 0 != (128 & t.flags)))
                            for (t = i.child; null !== t; ) {
                              if (null !== (_ = ze(t))) {
                                for (
                                  i.flags |= 128,
                                    Qf(w, !1),
                                    null !== (t = _.updateQueue) &&
                                      ((i.updateQueue = t), (i.flags |= 4)),
                                    i.subtreeFlags = 0,
                                    t = p,
                                    S = i.child;
                                  null !== S;

                                )
                                  (p = S),
                                    (w = t),
                                    (p.flags &= 14680066),
                                    null === (_ = p.alternate)
                                      ? ((p.childLanes = 0),
                                        (p.lanes = w),
                                        (p.child = null),
                                        (p.subtreeFlags = 0),
                                        (p.memoizedProps = null),
                                        (p.memoizedState = null),
                                        (p.updateQueue = null),
                                        (p.dependencies = null),
                                        (p.stateNode = null))
                                      : ((p.childLanes = _.childLanes),
                                        (p.lanes = _.lanes),
                                        (p.child = _.child),
                                        (p.subtreeFlags = 0),
                                        (p.deletions = null),
                                        (p.memoizedProps = _.memoizedProps),
                                        (p.memoizedState = _.memoizedState),
                                        (p.updateQueue = _.updateQueue),
                                        (p.type = _.type),
                                        (w = _.dependencies),
                                        (p.dependencies =
                                          null === w
                                            ? null
                                            : {
                                                lanes: w.lanes,
                                                firstContext: w.firstContext,
                                              })),
                                    (S = S.sibling);
                                return y(nv, (1 & nv.current) | 2), i.child;
                              }
                              t = t.sibling;
                            }
                          null !== w.tail &&
                            tO() > rn &&
                            ((i.flags |= 128),
                            (S = !0),
                            Qf(w, !1),
                            (i.lanes = 4194304));
                        }
                      } else {
                        if (!S) {
                          if (null !== (t = ze(_))) {
                            if (
                              ((i.flags |= 128),
                              (S = !0),
                              null !== (t = t.updateQueue) &&
                                ((i.updateQueue = t), (i.flags |= 4)),
                              Qf(w, !0),
                              null === w.tail &&
                                "hidden" === w.tailMode &&
                                !_.alternate &&
                                !na)
                            )
                              return P(i), null;
                          } else
                            2 * tO() - w.renderingStartTime > rn &&
                              1073741824 !== p &&
                              ((i.flags |= 128),
                              (S = !0),
                              Qf(w, !1),
                              (i.lanes = 4194304));
                        }
                        w.isBackwards
                          ? ((_.sibling = i.child), (i.child = _))
                          : (null !== (t = w.last)
                              ? (t.sibling = _)
                              : (i.child = _),
                            (w.last = _));
                      }
                      if (null !== w.tail)
                        return (
                          (i = w.tail),
                          (w.rendering = i),
                          (w.tail = i.sibling),
                          (w.renderingStartTime = tO()),
                          (i.sibling = null),
                          (t = nv.current),
                          y(nv, S ? (1 & t) | 2 : 1 & t),
                          i
                        );
                      return P(i), null;
                    case 22:
                    case 23:
                      return (
                        Vf(),
                        (S = null !== i.memoizedState),
                        null !== t &&
                          (null !== t.memoizedState) !== S &&
                          (i.flags |= 8192),
                        S && 0 != (1 & i.mode)
                          ? 0 != (1073741824 & n2) &&
                            (P(i),
                            eS && 6 & i.subtreeFlags && (i.flags |= 8192))
                          : P(i),
                        null
                      );
                    case 24:
                    case 25:
                      return null;
                  }
                  throw Error(n(156, i.tag));
                })(p, i, n2))
              ) {
                n0 = p;
                return;
              }
            } else {
              if (
                null !==
                (p = (function (t, a) {
                  switch ((Sd(a), a.tag)) {
                    case 1:
                      return (
                        C(a.type) && kc(),
                        65536 & (t = a.flags)
                          ? ((a.flags = (-65537 & t) | 128), a)
                          : null
                      );
                    case 3:
                      return (
                        we(),
                        x(tC),
                        x(t_),
                        Be(),
                        0 != (65536 & (t = a.flags)) && 0 == (128 & t)
                          ? ((a.flags = (-65537 & t) | 128), a)
                          : null
                      );
                    case 5:
                      return ye(a), null;
                    case 13:
                      if (
                        (x(nv),
                        null !== (t = a.memoizedState) && null !== t.dehydrated)
                      ) {
                        if (null === a.alternate) throw Error(n(340));
                        de();
                      }
                      return 65536 & (t = a.flags)
                        ? ((a.flags = (-65537 & t) | 128), a)
                        : null;
                    case 19:
                      return x(nv), null;
                    case 4:
                      return we(), null;
                    case 10:
                      return hd(a.type._context), null;
                    case 22:
                    case 23:
                      return Vf(), null;
                    default:
                      return null;
                  }
                })(p, i))
              ) {
                (p.flags &= 32767), (n0 = p);
                return;
              }
              if (null !== t)
                (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
              else {
                (n4 = 6), (n0 = null);
                return;
              }
            }
            if (null !== (i = i.sibling)) {
              n0 = i;
              return;
            }
            n0 = i = t;
          } while (null !== i);
          0 === n4 && (n4 = 5);
        }
        function Nh(t, a) {
          var i = tT,
            o = nX.transition;
          try {
            (nX.transition = null),
              (tT = 1),
              (function (t, a, i) {
                do Fh();
                while (null !== ro);
                if (0 != (6 & nJ)) throw Error(n(327));
                var o = t.finishedWork,
                  u = t.finishedLanes;
                if (null !== o) {
                  if (
                    ((t.finishedWork = null),
                    (t.finishedLanes = 0),
                    o === t.current)
                  )
                    throw Error(n(177));
                  (t.callbackNode = null), (t.callbackPriority = 0);
                  var s = o.lanes | o.childLanes;
                  if (
                    ((function (t, a) {
                      var i = t.pendingLanes & ~a;
                      (t.pendingLanes = a),
                        (t.suspendedLanes = 0),
                        (t.pingedLanes = 0),
                        (t.expiredLanes &= a),
                        (t.mutableReadLanes &= a),
                        (t.entangledLanes &= a),
                        (a = t.entanglements);
                      var o = t.eventTimes;
                      for (t = t.expirationTimes; 0 < i; ) {
                        var u = 31 - tE(i),
                          s = 1 << u;
                        (a[u] = 0), (o[u] = -1), (t[u] = -1), (i &= ~s);
                      }
                    })(t, s),
                    t === nK && ((n0 = nK = null), (n1 = 0)),
                    (0 == (2064 & o.subtreeFlags) && 0 == (2064 & o.flags)) ||
                      ri ||
                      ((ri = !0),
                      (p = tB),
                      (S = function () {
                        return Fh(), null;
                      }),
                      tL(p, S)),
                    (s = 0 != (15990 & o.flags)),
                    0 != (15990 & o.subtreeFlags) || s)
                  ) {
                    (s = nX.transition), (nX.transition = null);
                    var p,
                      S,
                      w,
                      _,
                      E = tT;
                    tT = 1;
                    var N = nJ;
                    (nJ |= 4),
                      (nY.current = null),
                      (function (t, a) {
                        for (eo(t.containerInfo), nB = a; null !== nB; )
                          if (
                            ((a = (t = nB).child),
                            0 != (1028 & t.subtreeFlags) && null !== a)
                          )
                            (a.return = t), (nB = a);
                          else
                            for (; null !== nB; ) {
                              t = nB;
                              try {
                                var i = t.alternate;
                                if (0 != (1024 & t.flags))
                                  switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== i) {
                                        var o = i.memoizedProps,
                                          u = i.memoizedState,
                                          s = t.stateNode,
                                          p = s.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                              ? o
                                              : ad(t.type, o),
                                            u,
                                          );
                                        s.__reactInternalSnapshotBeforeUpdate =
                                          p;
                                      }
                                      break;
                                    case 3:
                                      eS && eX(t.stateNode.containerInfo);
                                      break;
                                    default:
                                      throw Error(n(163));
                                  }
                              } catch (a) {
                                T(t, t.return, a);
                              }
                              if (null !== (a = t.sibling)) {
                                (a.return = t.return), (nB = a);
                                break;
                              }
                              nB = t.return;
                            }
                        (i = nH), (nH = !1);
                      })(t, o),
                      (function (t, a) {
                        for (nB = a; null !== nB; ) {
                          var i = (a = nB).deletions;
                          if (null !== i)
                            for (var o = 0; o < i.length; o++) {
                              var u = i[o];
                              try {
                                var s = t;
                                eS ? Jg(s, u, a) : Kg(s, u, a);
                                var p = u.alternate;
                                null !== p && (p.return = null),
                                  (u.return = null);
                              } catch (t) {
                                T(u, a, t);
                              }
                            }
                          if (
                            ((i = a.child),
                            0 != (12854 & a.subtreeFlags) && null !== i)
                          )
                            (i.return = a), (nB = i);
                          else
                            for (; null !== nB; ) {
                              a = nB;
                              try {
                                var S = a.flags;
                                if (
                                  (32 & S && eS && eq(a.stateNode), 512 & S)
                                ) {
                                  var w = a.alternate;
                                  if (null !== w) {
                                    var _ = w.ref;
                                    null !== _ &&
                                      ("function" == typeof _
                                        ? _(null)
                                        : (_.current = null));
                                  }
                                }
                                if (8192 & S)
                                  switch (a.tag) {
                                    case 13:
                                      if (null !== a.memoizedState) {
                                        var E = a.alternate;
                                        (null === E ||
                                          null === E.memoizedState) &&
                                          (rt = tO());
                                      }
                                      break;
                                    case 22:
                                      var N = null !== a.memoizedState,
                                        L = a.alternate,
                                        j =
                                          null !== L &&
                                          null !== L.memoizedState;
                                      if (((i = a), eS)) {
                                        e: if (
                                          ((o = i), (u = N), (s = null), eS)
                                        )
                                          for (var F = o; ; ) {
                                            if (5 === F.tag) {
                                              if (null === s) {
                                                s = F;
                                                var D = F.stateNode;
                                                u
                                                  ? eV(D)
                                                  : eG(
                                                      F.stateNode,
                                                      F.memoizedProps,
                                                    );
                                              }
                                            } else if (6 === F.tag) {
                                              if (null === s) {
                                                var A = F.stateNode;
                                                u
                                                  ? eZ(A)
                                                  : eY(A, F.memoizedProps);
                                              }
                                            } else if (
                                              ((22 !== F.tag && 23 !== F.tag) ||
                                                null === F.memoizedState ||
                                                F === o) &&
                                              null !== F.child
                                            ) {
                                              (F.child.return = F),
                                                (F = F.child);
                                              continue;
                                            }
                                            if (F === o) break;
                                            for (; null === F.sibling; ) {
                                              if (
                                                null === F.return ||
                                                F.return === o
                                              )
                                                break e;
                                              s === F && (s = null),
                                                (F = F.return);
                                            }
                                            s === F && (s = null),
                                              (F.sibling.return = F.return),
                                              (F = F.sibling);
                                          }
                                      }
                                      if (N && !j && 0 != (1 & i.mode)) {
                                        nB = i;
                                        for (var B = i.child; null !== B; ) {
                                          for (i = nB = B; null !== nB; ) {
                                            var U = (o = nB).child;
                                            switch (o.tag) {
                                              case 0:
                                              case 11:
                                              case 14:
                                              case 15:
                                                Fg(4, o, o.return);
                                                break;
                                              case 1:
                                                Bg(o, o.return);
                                                var Q = o.stateNode;
                                                if (
                                                  "function" ==
                                                  typeof Q.componentWillUnmount
                                                ) {
                                                  var $ = o.return;
                                                  try {
                                                    (Q.props = o.memoizedProps),
                                                      (Q.state =
                                                        o.memoizedState),
                                                      Q.componentWillUnmount();
                                                  } catch (t) {
                                                    T(o, $, t);
                                                  }
                                                }
                                                break;
                                              case 5:
                                                Bg(o, o.return);
                                                break;
                                              case 22:
                                                if (null !== o.memoizedState) {
                                                  Wg(i);
                                                  continue;
                                                }
                                            }
                                            null !== U
                                              ? ((U.return = o), (nB = U))
                                              : Wg(i);
                                          }
                                          B = B.sibling;
                                        }
                                      }
                                  }
                                switch (4102 & S) {
                                  case 2:
                                    Og(a), (a.flags &= -3);
                                    break;
                                  case 6:
                                    Og(a), (a.flags &= -3), Rg(a.alternate, a);
                                    break;
                                  case 4096:
                                    a.flags &= -4097;
                                    break;
                                  case 4100:
                                    (a.flags &= -4097), Rg(a.alternate, a);
                                    break;
                                  case 4:
                                    Rg(a.alternate, a);
                                }
                              } catch (t) {
                                T(a, a.return, t);
                              }
                              if (null !== (i = a.sibling)) {
                                (i.return = a.return), (nB = i);
                                break;
                              }
                              nB = a.return;
                            }
                        }
                      })(t, o, u),
                      eu(t.containerInfo),
                      (t.current = o),
                      (w = o),
                      (_ = t),
                      (nB = w),
                      (function Yg(t, a, i) {
                        for (var o = 0 != (1 & t.mode); null !== nB; ) {
                          var u = nB,
                            s = u.child;
                          if (22 === u.tag && o) {
                            var p = null !== u.memoizedState || nO;
                            if (!p) {
                              var S = u.alternate,
                                w =
                                  (null !== S && null !== S.memoizedState) ||
                                  nD;
                              S = nO;
                              var _ = nD;
                              if (((nO = p), (nD = w) && !_))
                                for (nB = u; null !== nB; )
                                  (w = (p = nB).child),
                                    22 === p.tag && null !== p.memoizedState
                                      ? Zg(u)
                                      : null !== w
                                        ? ((w.return = p), (nB = w))
                                        : Zg(u);
                              for (; null !== s; )
                                (nB = s), Yg(s, a, i), (s = s.sibling);
                              (nB = u), (nO = S), (nD = _);
                            }
                            $g(t, a, i);
                          } else
                            0 != (8772 & u.subtreeFlags) && null !== s
                              ? ((s.return = u), (nB = s))
                              : $g(t, a, i);
                        }
                      })(w, _, u),
                      tF(),
                      (nJ = N),
                      (tT = E),
                      (nX.transition = s);
                  } else t.current = o;
                  if (
                    (ri && ((ri = !1), (ro = t), (ru = u)),
                    0 === (s = t.pendingLanes) && (ra = null),
                    (function (t) {
                      if (tQ && "function" == typeof tQ.onCommitFiberRoot)
                        try {
                          tQ.onCommitFiberRoot(
                            tU,
                            t,
                            void 0,
                            128 == (128 & t.current.flags),
                          );
                        } catch (t) {}
                    })(o.stateNode, i),
                    Z(t, tO()),
                    null !== a)
                  )
                    for (i = t.onRecoverableError, o = 0; o < a.length; o++)
                      i(a[o]);
                  if (rr) throw ((rr = !1), (t = rl), (rl = null), t);
                  0 != (1 & ru) && 0 !== t.tag && Fh(),
                    0 != (1 & (s = t.pendingLanes))
                      ? t === rc
                        ? rs++
                        : ((rs = 0), (rc = t))
                      : (rs = 0),
                    Xc();
                }
              })(t, a, i);
          } finally {
            (nX.transition = o), (tT = i);
          }
          return null;
        }
        function Fh() {
          if (null !== ro) {
            var t = Ec(ru),
              a = nX.transition,
              i = tT;
            try {
              if (((nX.transition = null), (tT = 16 > t ? 16 : t), null === ro))
                var o = !1;
              else {
                if (((t = ro), (ro = null), (ru = 0), 0 != (6 & nJ)))
                  throw Error(n(331));
                var u = nJ;
                for (nJ |= 4, nB = t.current; null !== nB; ) {
                  var s = nB,
                    p = s.child;
                  if (0 != (16 & nB.flags)) {
                    var S = s.deletions;
                    if (null !== S) {
                      for (var w = 0; w < S.length; w++) {
                        var _ = S[w];
                        for (nB = _; null !== nB; ) {
                          var E = nB;
                          switch (E.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Fg(8, E, s);
                          }
                          var N = E.child;
                          if (null !== N) (N.return = E), (nB = N);
                          else
                            for (; null !== nB; ) {
                              var L = (E = nB).sibling,
                                j = E.return;
                              if (
                                (!(function Lg(t) {
                                  var a = t.alternate;
                                  null !== a && ((t.alternate = null), Lg(a)),
                                    (t.child = null),
                                    (t.deletions = null),
                                    (t.sibling = null),
                                    5 === t.tag &&
                                      null !== (a = t.stateNode) &&
                                      ex(a),
                                    (t.stateNode = null),
                                    (t.return = null),
                                    (t.dependencies = null),
                                    (t.memoizedProps = null),
                                    (t.memoizedState = null),
                                    (t.pendingProps = null),
                                    (t.stateNode = null),
                                    (t.updateQueue = null);
                                })(E),
                                E === _)
                              ) {
                                nB = null;
                                break;
                              }
                              if (null !== L) {
                                (L.return = j), (nB = L);
                                break;
                              }
                              nB = j;
                            }
                        }
                      }
                      var F = s.alternate;
                      if (null !== F) {
                        var D = F.child;
                        if (null !== D) {
                          F.child = null;
                          do {
                            var A = D.sibling;
                            (D.sibling = null), (D = A);
                          } while (null !== D);
                        }
                      }
                      nB = s;
                    }
                  }
                  if (0 != (2064 & s.subtreeFlags) && null !== p)
                    (p.return = s), (nB = p);
                  else
                    for (; null !== nB; ) {
                      if (((s = nB), 0 != (2048 & s.flags)))
                        switch (s.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Fg(9, s, s.return);
                        }
                      var B = s.sibling;
                      if (null !== B) {
                        (B.return = s.return), (nB = B);
                        break;
                      }
                      nB = s.return;
                    }
                }
                var U = t.current;
                for (nB = U; null !== nB; ) {
                  var Q = (p = nB).child;
                  if (0 != (2064 & p.subtreeFlags) && null !== Q)
                    (Q.return = p), (nB = Q);
                  else
                    for (p = U; null !== nB; ) {
                      if (((S = nB), 0 != (2048 & S.flags)))
                        try {
                          switch (S.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Gg(9, S);
                          }
                        } catch (t) {
                          T(S, S.return, t);
                        }
                      if (S === p) {
                        nB = null;
                        break;
                      }
                      var $ = S.sibling;
                      if (null !== $) {
                        ($.return = S.return), (nB = $);
                        break;
                      }
                      nB = S.return;
                    }
                }
                if (
                  ((nJ = u),
                  Xc(),
                  tQ && "function" == typeof tQ.onPostCommitFiberRoot)
                )
                  try {
                    tQ.onPostCommitFiberRoot(tU, t);
                  } catch (t) {}
                o = !0;
              }
              return o;
            } finally {
              (tT = i), (nX.transition = a);
            }
          }
          return !1;
        }
        function Uh(t, a, i) {
          (a = Af(t, (a = xf(i, a)), 1)),
            rd(t, a),
            (a = H()),
            null !== (t = Ah(t, 1)) && (Bc(t, 1, a), Z(t, a));
        }
        function T(t, a, i) {
          if (3 === t.tag) Uh(t, t, i);
          else
            for (; null !== a; ) {
              if (3 === a.tag) {
                Uh(a, t, i);
                break;
              }
              if (1 === a.tag) {
                var o = a.stateNode;
                if (
                  "function" == typeof a.type.getDerivedStateFromError ||
                  ("function" == typeof o.componentDidCatch &&
                    (null === ra || !ra.has(o)))
                ) {
                  (t = Df(a, (t = xf(i, t)), 1)),
                    rd(a, t),
                    (t = H()),
                    null !== (a = Ah(a, 1)) && (Bc(a, 1, t), Z(a, t));
                  break;
                }
              }
              a = a.return;
            }
        }
        function Gf(t, a, i) {
          var o = t.pingCache;
          null !== o && o.delete(a),
            (a = H()),
            (t.pingedLanes |= t.suspendedLanes & i),
            nK === t &&
              (n1 & i) === i &&
              (4 === n4 ||
              (3 === n4 && (130023424 & n1) === n1 && 500 > tO() - rt)
                ? Ih(t, 0)
                : (n7 |= i)),
            Z(t, a);
        }
        function Vh(t, a) {
          0 === a &&
            (0 == (1 & t.mode)
              ? (a = 1)
              : ((a = tI), 0 == (130023424 & (tI <<= 1)) && (tI = 4194304)));
          var i = H();
          null !== (t = Ah(t, a)) && (Bc(t, a, i), Z(t, i));
        }
        function qg(t) {
          var a = t.memoizedState,
            i = 0;
          null !== a && (i = a.retryLane), Vh(t, i);
        }
        function Tg(t, a) {
          var i = 0;
          switch (t.tag) {
            case 13:
              var o = t.stateNode,
                u = t.memoizedState;
              null !== u && (i = u.retryLane);
              break;
            case 19:
              o = t.stateNode;
              break;
            default:
              throw Error(n(314));
          }
          null !== o && o.delete(a), Vh(t, i);
        }
        function Xh(t, a, i, o) {
          (this.tag = t),
            (this.key = i),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = a),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = o),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Yd(t, a, i, o) {
          return new Xh(t, a, i, o);
        }
        function ag(t) {
          return !(!(t = t.prototype) || !t.isReactComponent);
        }
        function je(t, a) {
          var i = t.alternate;
          return (
            null === i
              ? (((i = Yd(t.tag, a, t.key, t.mode)).elementType =
                  t.elementType),
                (i.type = t.type),
                (i.stateNode = t.stateNode),
                (i.alternate = t),
                (t.alternate = i))
              : ((i.pendingProps = a),
                (i.type = t.type),
                (i.flags = 0),
                (i.subtreeFlags = 0),
                (i.deletions = null)),
            (i.flags = 14680064 & t.flags),
            (i.childLanes = t.childLanes),
            (i.lanes = t.lanes),
            (i.child = t.child),
            (i.memoizedProps = t.memoizedProps),
            (i.memoizedState = t.memoizedState),
            (i.updateQueue = t.updateQueue),
            (a = t.dependencies),
            (i.dependencies =
              null === a
                ? null
                : { lanes: a.lanes, firstContext: a.firstContext }),
            (i.sibling = t.sibling),
            (i.index = t.index),
            (i.ref = t.ref),
            i
          );
        }
        function le(t, a, i, o, u, s) {
          var p = 2;
          if (((o = t), "function" == typeof t)) ag(t) && (p = 1);
          else if ("string" == typeof t) p = 5;
          else
            e: switch (t) {
              case F:
                return ne(i.children, u, s, a);
              case D:
                (p = 8), (u |= 8);
                break;
              case A:
                return (
                  ((t = Yd(12, i, a, 2 | u)).elementType = A), (t.lanes = s), t
                );
              case $:
                return (
                  ((t = Yd(13, i, a, u)).elementType = $), (t.lanes = s), t
                );
              case W:
                return (
                  ((t = Yd(19, i, a, u)).elementType = W), (t.lanes = s), t
                );
              case Y:
                return ng(i, u, s, a);
              default:
                if ("object" == typeof t && null !== t)
                  switch (t.$$typeof) {
                    case B:
                      p = 10;
                      break e;
                    case U:
                      p = 9;
                      break e;
                    case Q:
                      p = 11;
                      break e;
                    case q:
                      p = 14;
                      break e;
                    case V:
                      (p = 16), (o = null);
                      break e;
                  }
                throw Error(n(130, null == t ? t : typeof t, ""));
            }
          return (
            ((a = Yd(p, i, a, u)).elementType = t),
            (a.type = o),
            (a.lanes = s),
            a
          );
        }
        function ne(t, a, i, o) {
          return ((t = Yd(7, t, o, a)).lanes = i), t;
        }
        function ng(t, a, i, o) {
          return (
            ((t = Yd(22, t, o, a)).elementType = Y),
            (t.lanes = i),
            (t.stateNode = {}),
            t
          );
        }
        function ke(t, a, i) {
          return ((t = Yd(6, t, null, a)).lanes = i), t;
        }
        function me(t, a, i) {
          return (
            ((a = Yd(
              4,
              null !== t.children ? t.children : [],
              t.key,
              a,
            )).lanes = i),
            (a.stateNode = {
              containerInfo: t.containerInfo,
              pendingChildren: null,
              implementation: t.implementation,
            }),
            a
          );
        }
        function Yh(t, a, i, o, u) {
          (this.tag = a),
            (this.containerInfo = t),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = eb),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ac(0)),
            (this.expirationTimes = Ac(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ac(0)),
            (this.identifierPrefix = o),
            (this.onRecoverableError = u),
            ek && (this.mutableSourceEagerHydrationData = null);
        }
        function Zh(t, a, i, o, u, s, p, S, w) {
          return (
            (t = new Yh(t, a, i, S, w)),
            1 === a ? ((a = 1), !0 === s && (a |= 8)) : (a = 0),
            (s = Yd(3, null, null, a)),
            (t.current = s),
            (s.stateNode = t),
            (s.memoizedState = {
              element: o,
              isDehydrated: i,
              cache: null,
              transitions: null,
            }),
            od(s),
            t
          );
        }
        function $h(t) {
          if (!t) return tP;
          t = t._reactInternals;
          e: {
            if (ya(t) !== t || 1 !== t.tag) throw Error(n(170));
            var a = t;
            do {
              switch (a.tag) {
                case 3:
                  a = a.stateNode.context;
                  break e;
                case 1:
                  if (C(a.type)) {
                    a = a.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              a = a.return;
            } while (null !== a);
            throw Error(n(171));
          }
          if (1 === t.tag) {
            var i = t.type;
            if (C(i)) return mc(t, i, a);
          }
          return a;
        }
        function ai(t) {
          var a = t._reactInternals;
          if (void 0 === a) {
            if ("function" == typeof t.render) throw Error(n(188));
            throw Error(n(268, (t = Object.keys(t).join(","))));
          }
          return null === (t = Ba(a)) ? null : t.stateNode;
        }
        function bi(t, a) {
          if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
            var i = t.retryLane;
            t.retryLane = 0 !== i && i < a ? i : a;
          }
        }
        function ci(t, a) {
          bi(t, a), (t = t.alternate) && bi(t, a);
        }
        function di(t) {
          return null === (t = Ba(t)) ? null : t.stateNode;
        }
        function ei() {
          return null;
        }
        return (
          (p = function (t, a, i) {
            if (null !== t) {
              if (t.memoizedProps !== a.pendingProps || tC.current) nj = !0;
              else {
                if (0 == (t.lanes & i) && 0 == (128 & a.flags))
                  return (
                    (nj = !1),
                    (function (t, a, i) {
                      switch (a.tag) {
                        case 3:
                          ig(a), de();
                          break;
                        case 5:
                          xe(a);
                          break;
                        case 1:
                          C(a.type) && nc(a);
                          break;
                        case 4:
                          ve(a, a.stateNode.containerInfo);
                          break;
                        case 10:
                          gd(a, a.type._context, a.memoizedProps.value);
                          break;
                        case 13:
                          var o = a.memoizedState;
                          if (null !== o) {
                            if (null !== o.dehydrated)
                              return (
                                y(nv, 1 & nv.current), (a.flags |= 128), null
                              );
                            if (0 != (i & a.child.childLanes))
                              return mg(t, a, i);
                            return (
                              y(nv, 1 & nv.current),
                              null !== (t = Zf(t, a, i)) ? t.sibling : null
                            );
                          }
                          y(nv, 1 & nv.current);
                          break;
                        case 19:
                          if (
                            ((o = 0 != (i & a.childLanes)),
                            0 != (128 & t.flags))
                          ) {
                            if (o) return vg(t, a, i);
                            a.flags |= 128;
                          }
                          var u = a.memoizedState;
                          if (
                            (null !== u &&
                              ((u.rendering = null),
                              (u.tail = null),
                              (u.lastEffect = null)),
                            y(nv, nv.current),
                            !o)
                          )
                            return null;
                          break;
                        case 22:
                        case 23:
                          return (a.lanes = 0), dg(t, a, i);
                      }
                      return Zf(t, a, i);
                    })(t, a, i)
                  );
                nj = 0 != (131072 & t.flags);
              }
            } else
              (nj = !1), na && 0 != (1048576 & a.flags) && Qd(a, t5, a.index);
            switch (((a.lanes = 0), a.tag)) {
              case 2:
                var o = a.type;
                null !== t &&
                  ((t.alternate = null), (a.alternate = null), (a.flags |= 2)),
                  (t = a.pendingProps);
                var u = jc(a, t_.current);
                jd(a, i), (u = Ke(null, a, o, t, u, i));
                var s = Pe();
                return (
                  (a.flags |= 1),
                  "object" == typeof u &&
                  null !== u &&
                  "function" == typeof u.render &&
                  void 0 === u.$$typeof
                    ? ((a.tag = 1),
                      (a.memoizedState = null),
                      (a.updateQueue = null),
                      C(o) ? ((s = !0), nc(a)) : (s = !1),
                      (a.memoizedState =
                        null !== u.state && void 0 !== u.state
                          ? u.state
                          : null),
                      od(a),
                      (u.updater = t2),
                      (a.stateNode = u),
                      (u._reactInternals = a),
                      Fd(a, o, t, i),
                      (a = hg(null, a, o, !0, s, i)))
                    : ((a.tag = 0),
                      na && s && Rd(a),
                      R(null, a, u, i),
                      (a = a.child)),
                  a
                );
              case 16:
                o = a.elementType;
                e: {
                  switch (
                    (null !== t &&
                      ((t.alternate = null),
                      (a.alternate = null),
                      (a.flags |= 2)),
                    (t = a.pendingProps),
                    (o = (u = o._init)(o._payload)),
                    (a.type = o),
                    (u = a.tag =
                      (function (t) {
                        if ("function" == typeof t) return ag(t) ? 1 : 0;
                        if (null != t) {
                          if ((t = t.$$typeof) === Q) return 11;
                          if (t === q) return 14;
                        }
                        return 2;
                      })(o)),
                    (t = ad(o, t)),
                    u)
                  ) {
                    case 0:
                      a = cg(null, a, o, t, i);
                      break e;
                    case 1:
                      a = gg(null, a, o, t, i);
                      break e;
                    case 11:
                      a = Yf(null, a, o, t, i);
                      break e;
                    case 14:
                      a = $f(null, a, o, ad(o.type, t), i);
                      break e;
                  }
                  throw Error(n(306, o, ""));
                }
                return a;
              case 0:
                return (
                  (o = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === o ? u : ad(o, u)),
                  cg(t, a, o, u, i)
                );
              case 1:
                return (
                  (o = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === o ? u : ad(o, u)),
                  gg(t, a, o, u, i)
                );
              case 3:
                e: {
                  if ((ig(a), null === t)) throw Error(n(387));
                  (o = a.pendingProps),
                    (u = (s = a.memoizedState).element),
                    pd(t, a),
                    ud(a, o, null, i);
                  var p = a.memoizedState;
                  if (((o = p.element), ek && s.isDehydrated)) {
                    if (
                      ((s = {
                        element: o,
                        isDehydrated: !1,
                        cache: p.cache,
                        transitions: p.transitions,
                      }),
                      (a.updateQueue.baseState = s),
                      (a.memoizedState = s),
                      256 & a.flags)
                    ) {
                      a = jg(t, a, o, i, (u = Error(n(423))));
                      break e;
                    }
                    if (o !== u) {
                      a = jg(t, a, o, i, (u = Error(n(424))));
                      break e;
                    }
                    for (
                      ek &&
                        ((nl = tr(a.stateNode.containerInfo)),
                        (nr = a),
                        (na = !0),
                        (no = null),
                        (ni = !1)),
                        i = ns(a, null, o, i),
                        a.child = i;
                      i;

                    )
                      (i.flags = (-3 & i.flags) | 4096), (i = i.sibling);
                  } else {
                    if ((de(), o === u)) {
                      a = Zf(t, a, i);
                      break e;
                    }
                    R(t, a, o, i);
                  }
                  a = a.child;
                }
                return a;
              case 5:
                return (
                  xe(a),
                  null === t && ae(a),
                  (o = a.type),
                  (u = a.pendingProps),
                  (s = null !== t ? t.memoizedProps : null),
                  (p = u.children),
                  eh(o, u)
                    ? (p = null)
                    : null !== s && eh(o, s) && (a.flags |= 32),
                  fg(t, a),
                  R(t, a, p, i),
                  a.child
                );
              case 6:
                return null === t && ae(a), null;
              case 13:
                return mg(t, a, i);
              case 4:
                return (
                  ve(a, a.stateNode.containerInfo),
                  (o = a.pendingProps),
                  null === t ? (a.child = nu(a, null, o, i)) : R(t, a, o, i),
                  a.child
                );
              case 11:
                return (
                  (o = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === o ? u : ad(o, u)),
                  Yf(t, a, o, u, i)
                );
              case 7:
                return R(t, a, a.pendingProps, i), a.child;
              case 8:
              case 12:
                return R(t, a, a.pendingProps.children, i), a.child;
              case 10:
                e: {
                  if (
                    ((o = a.type._context),
                    (u = a.pendingProps),
                    (s = a.memoizedProps),
                    gd(a, o, (p = u.value)),
                    null !== s)
                  ) {
                    if (t$(s.value, p)) {
                      if (s.children === u.children && !tC.current) {
                        a = Zf(t, a, i);
                        break e;
                      }
                    } else
                      for (
                        null !== (s = a.child) && (s.return = a);
                        null !== s;

                      ) {
                        var S = s.dependencies;
                        if (null !== S) {
                          p = s.child;
                          for (var w = S.firstContext; null !== w; ) {
                            if (w.context === o) {
                              if (1 === s.tag) {
                                (w = qd(-1, i & -i)).tag = 2;
                                var _ = s.updateQueue;
                                if (null !== _) {
                                  var E = (_ = _.shared).pending;
                                  null === E
                                    ? (w.next = w)
                                    : ((w.next = E.next), (E.next = w)),
                                    (_.pending = w);
                                }
                              }
                              (s.lanes |= i),
                                null !== (w = s.alternate) && (w.lanes |= i),
                                id(s.return, i, a),
                                (S.lanes |= i);
                              break;
                            }
                            w = w.next;
                          }
                        } else if (10 === s.tag)
                          p = s.type === a.type ? null : s.child;
                        else if (18 === s.tag) {
                          if (null === (p = s.return)) throw Error(n(341));
                          (p.lanes |= i),
                            null !== (S = p.alternate) && (S.lanes |= i),
                            id(p, i, a),
                            (p = s.sibling);
                        } else p = s.child;
                        if (null !== p) p.return = s;
                        else
                          for (p = s; null !== p; ) {
                            if (p === a) {
                              p = null;
                              break;
                            }
                            if (null !== (s = p.sibling)) {
                              (s.return = p.return), (p = s);
                              break;
                            }
                            p = p.return;
                          }
                        s = p;
                      }
                  }
                  R(t, a, u.children, i), (a = a.child);
                }
                return a;
              case 9:
                return (
                  (u = a.type),
                  (o = a.pendingProps.children),
                  jd(a, i),
                  (o = o((u = ld(u)))),
                  (a.flags |= 1),
                  R(t, a, o, i),
                  a.child
                );
              case 14:
                return (
                  (u = ad((o = a.type), a.pendingProps)),
                  (u = ad(o.type, u)),
                  $f(t, a, o, u, i)
                );
              case 15:
                return bg(t, a, a.type, a.pendingProps, i);
              case 17:
                return (
                  (o = a.type),
                  (u = a.pendingProps),
                  (u = a.elementType === o ? u : ad(o, u)),
                  null !== t &&
                    ((t.alternate = null),
                    (a.alternate = null),
                    (a.flags |= 2)),
                  (a.tag = 1),
                  C(o) ? ((t = !0), nc(a)) : (t = !1),
                  jd(a, i),
                  Dd(a, o, u),
                  Fd(a, o, u, i),
                  hg(null, a, o, !0, t, i)
                );
              case 19:
                return vg(t, a, i);
              case 22:
                return dg(t, a, i);
            }
            throw Error(n(156, a.tag));
          }),
          (S.attemptContinuousHydration = function (t) {
            13 === t.tag && (Ad(t, 134217728, H()), ci(t, 134217728));
          }),
          (S.attemptHydrationAtCurrentPriority = function (t) {
            if (13 === t.tag) {
              var a = H(),
                i = zd(t);
              Ad(t, i, a), ci(t, i);
            }
          }),
          (S.attemptSynchronousHydration = function (t) {
            switch (t.tag) {
              case 3:
                var a = t.stateNode;
                if (a.current.memoizedState.isDehydrated) {
                  var i = vc(a.pendingLanes);
                  0 !== i &&
                    (Dc(a, 1 | i), Z(a, tO()), 0 == (6 & nJ) && (sh(), Xc()));
                }
                break;
              case 13:
                var o = H();
                Oh(function () {
                  return Ad(t, 1, o);
                }),
                  ci(t, 1);
            }
          }),
          (S.batchedUpdates = function (t, a) {
            var i = nJ;
            nJ |= 1;
            try {
              return t(a);
            } finally {
              0 === (nJ = i) && (sh(), tq && Xc());
            }
          }),
          (S.createComponentSelector = function (t) {
            return { $$typeof: nU, value: t };
          }),
          (S.createContainer = function (t, a, i, o, u, s, p) {
            return Zh(t, a, !1, null, i, o, u, s, p);
          }),
          (S.createHasPseudoClassSelector = function (t) {
            return { $$typeof: nQ, value: t };
          }),
          (S.createHydrationContainer = function (t, a, i, o, u, s, p, S, w) {
            return (
              ((t = Zh(i, o, !0, t, u, s, p, S, w)).context = $h(null)),
              (i = t.current),
              ((s = qd((o = H()), (u = zd(i)))).callback =
                null != a ? a : null),
              rd(i, s),
              (t.current.lanes = u),
              Bc(t, u, o),
              Z(t, o),
              t
            );
          }),
          (S.createPortal = function (t, a, i) {
            var o =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: j,
              key: null == o ? null : "" + o,
              children: t,
              containerInfo: a,
              implementation: i,
            };
          }),
          (S.createRoleSelector = function (t) {
            return { $$typeof: n$, value: t };
          }),
          (S.createTestNameSelector = function (t) {
            return { $$typeof: nW, value: t };
          }),
          (S.createTextSelector = function (t) {
            return { $$typeof: nq, value: t };
          }),
          (S.deferredUpdates = function (t) {
            var a = tT,
              i = nX.transition;
            try {
              return (nX.transition = null), (tT = 16), t();
            } finally {
              (tT = a), (nX.transition = i);
            }
          }),
          (S.discreteUpdates = function (t, a, i, o, u) {
            var s = tT,
              p = nX.transition;
            try {
              return (nX.transition = null), (tT = 1), t(a, i, o, u);
            } finally {
              (tT = s), (nX.transition = p), 0 === nJ && sh();
            }
          }),
          (S.findAllNodes = kh),
          (S.findBoundingRects = function (t, a) {
            if (!eN) throw Error(n(363));
            (a = kh(t, a)), (t = []);
            for (var i = 0; i < a.length; i++) t.push(eI(a[i]));
            for (a = t.length - 1; 0 < a; a--) {
              i = t[a];
              for (
                var o = i.x,
                  u = o + i.width,
                  s = i.y,
                  p = s + i.height,
                  S = a - 1;
                0 <= S;
                S--
              )
                if (a !== S) {
                  var w = t[S],
                    _ = w.x,
                    E = _ + w.width,
                    N = w.y,
                    L = N + w.height;
                  if (o >= _ && s >= N && u <= E && p <= L) {
                    t.splice(a, 1);
                    break;
                  }
                  if (o !== _ || i.width !== w.width || L < s || N > p) {
                    if (!(s !== N || i.height !== w.height || E < o || _ > u)) {
                      _ > o && ((w.width += _ - o), (w.x = o)),
                        E < u && (w.width = u - _),
                        t.splice(a, 1);
                      break;
                    }
                  } else {
                    N > s && ((w.height += N - s), (w.y = s)),
                      L < p && (w.height = p - N),
                      t.splice(a, 1);
                    break;
                  }
                }
            }
            return t;
          }),
          (S.findHostInstance = ai),
          (S.findHostInstanceWithNoPortals = function (t) {
            return null ===
              (t =
                null !== (t = Aa(t))
                  ? (function Da(t) {
                      if (5 === t.tag || 6 === t.tag) return t;
                      for (t = t.child; null !== t; ) {
                        if (4 !== t.tag) {
                          var a = Da(t);
                          if (null !== a) return a;
                        }
                        t = t.sibling;
                      }
                      return null;
                    })(t)
                  : null)
              ? null
              : t.stateNode;
          }),
          (S.findHostInstanceWithWarning = function (t) {
            return ai(t);
          }),
          (S.flushControlled = function (t) {
            var a = nJ;
            nJ |= 1;
            var i = nX.transition,
              o = tT;
            try {
              (nX.transition = null), (tT = 1), t();
            } finally {
              (tT = o), (nX.transition = i), 0 === (nJ = a) && (sh(), Xc());
            }
          }),
          (S.flushPassiveEffects = Fh),
          (S.flushSync = Oh),
          (S.focusWithin = function (t, a) {
            if (!eN) throw Error(n(363));
            for (
              a = Array.from((a = jh((t = gh(t)), a))), t = 0;
              t < a.length;

            ) {
              var i = a[t++];
              if (!eL(i)) {
                if (5 === i.tag && ej(i.stateNode)) return !0;
                for (i = i.child; null !== i; ) a.push(i), (i = i.sibling);
              }
            }
            return !1;
          }),
          (S.getCurrentUpdatePriority = function () {
            return tT;
          }),
          (S.getFindAllNodesFailureDescription = function (t, a) {
            if (!eN) throw Error(n(363));
            var i = 0,
              o = [];
            t = [gh(t), 0];
            for (var u = 0; u < t.length; ) {
              var s = t[u++],
                p = t[u++],
                S = a[p];
              if (
                (5 !== s.tag || !eL(s)) &&
                (hh(s, S) && (o.push(ih(S)), ++p > i && (i = p)), p < a.length)
              )
                for (s = s.child; null !== s; ) t.push(s, p), (s = s.sibling);
            }
            if (i < a.length) {
              for (t = []; i < a.length; i++) t.push(ih(a[i]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                o.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                t.join(" > ")
              );
            }
            return null;
          }),
          (S.getPublicRootInstance = function (t) {
            return (t = t.current).child
              ? 5 === t.child.tag
                ? er(t.child.stateNode)
                : t.child.stateNode
              : null;
          }),
          (S.injectIntoDevTools = function (t) {
            if (
              ((t = {
                bundleType: t.bundleType,
                version: t.version,
                rendererPackageName: t.rendererPackageName,
                rendererConfig: t.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: N.ReactCurrentDispatcher,
                findHostInstanceByFiber: di,
                findFiberByHostInstance: t.findFiberByHostInstance || ei,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.0.0-fc46dba67-20220329",
              }),
              "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              t = !1;
            else {
              var a = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (a.isDisabled || !a.supportsFiber) t = !0;
              else {
                try {
                  (tU = a.inject(t)), (tQ = a);
                } catch (t) {}
                t = !!a.checkDCE;
              }
            }
            return t;
          }),
          (S.isAlreadyRendering = function () {
            return !1;
          }),
          (S.observeVisibleRects = function (t, a, i, o) {
            if (!eN) throw Error(n(363));
            var u = eF((t = kh(t, a)), i, o).disconnect;
            return {
              disconnect: function () {
                u();
              },
            };
          }),
          (S.registerMutableSourceForHydration = function (t, a) {
            var i = a._getVersion;
            (i = i(a._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [a, i])
                : t.mutableSourceEagerHydrationData.push(a, i);
          }),
          (S.runWithPriority = function (t, a) {
            var i = tT;
            try {
              return (tT = t), a();
            } finally {
              tT = i;
            }
          }),
          (S.shouldError = function () {
            return null;
          }),
          (S.shouldSuspend = function () {
            return !1;
          }),
          (S.updateContainer = function (t, a, i, o) {
            var u = a.current,
              s = H(),
              p = zd(u);
            return (
              (i = $h(i)),
              null === a.context ? (a.context = i) : (a.pendingContext = i),
              ((a = qd(s, p)).payload = { element: t }),
              null !== (o = void 0 === o ? null : o) && (a.callback = o),
              rd(u, a),
              null !== (t = Ad(u, p, s)) && sd(t, u, p),
              p
            );
          }),
          S
        );
      };
    },
    32576: function (t, a, i) {
      "use strict";
      t.exports = i(46511);
    },
    76525: function (t, a, i) {
      "use strict";
      t.exports = i(67287);
    },
    60053: function (t, a) {
      "use strict";
      /**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function f(t, a) {
        var i = t.length;
        for (t.push(a); 0 < i; ) {
          var o = (i - 1) >>> 1,
            u = t[o];
          if (0 < g(u, a)) (t[o] = a), (t[i] = u), (i = o);
          else break;
        }
      }
      function h(t) {
        return 0 === t.length ? null : t[0];
      }
      function k(t) {
        if (0 === t.length) return null;
        var a = t[0],
          i = t.pop();
        if (i !== a) {
          t[0] = i;
          for (var o = 0, u = t.length, s = u >>> 1; o < s; ) {
            var p = 2 * (o + 1) - 1,
              S = t[p],
              w = p + 1,
              _ = t[w];
            if (0 > g(S, i))
              w < u && 0 > g(_, S)
                ? ((t[o] = _), (t[w] = i), (o = w))
                : ((t[o] = S), (t[p] = i), (o = p));
            else if (w < u && 0 > g(_, i)) (t[o] = _), (t[w] = i), (o = w);
            else break;
          }
        }
        return a;
      }
      function g(t, a) {
        var i = t.sortIndex - a.sortIndex;
        return 0 !== i ? i : t.id - a.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var i,
          o = performance;
        a.unstable_now = function () {
          return o.now();
        };
      } else {
        var u = Date,
          s = u.now();
        a.unstable_now = function () {
          return u.now() - s;
        };
      }
      var p = [],
        S = [],
        w = 1,
        _ = null,
        E = 3,
        N = !1,
        L = !1,
        j = !1,
        F = "function" == typeof setTimeout ? setTimeout : null,
        D = "function" == typeof clearTimeout ? clearTimeout : null,
        A = "undefined" != typeof setImmediate ? setImmediate : null;
      function G(t) {
        for (var a = h(S); null !== a; ) {
          if (null === a.callback) k(S);
          else if (a.startTime <= t)
            k(S), (a.sortIndex = a.expirationTime), f(p, a);
          else break;
          a = h(S);
        }
      }
      function H(t) {
        if (((j = !1), G(t), !L)) {
          if (null !== h(p)) (L = !0), I(J);
          else {
            var a = h(S);
            null !== a && K(H, a.startTime - t);
          }
        }
      }
      function J(t, i) {
        (L = !1), j && ((j = !1), D(Q), (Q = -1)), (N = !0);
        var o = E;
        try {
          for (
            G(i), _ = h(p);
            null !== _ && (!(_.expirationTime > i) || (t && !M()));

          ) {
            var u = _.callback;
            if ("function" == typeof u) {
              (_.callback = null), (E = _.priorityLevel);
              var s = u(_.expirationTime <= i);
              (i = a.unstable_now()),
                "function" == typeof s ? (_.callback = s) : _ === h(p) && k(p),
                G(i);
            } else k(p);
            _ = h(p);
          }
          if (null !== _) var w = !0;
          else {
            var F = h(S);
            null !== F && K(H, F.startTime - i), (w = !1);
          }
          return w;
        } finally {
          (_ = null), (E = o), (N = !1);
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var B = !1,
        U = null,
        Q = -1,
        $ = 5,
        W = -1;
      function M() {
        return !(a.unstable_now() - W < $);
      }
      function R() {
        if (null !== U) {
          var t = a.unstable_now();
          W = t;
          var o = !0;
          try {
            o = U(!0, t);
          } finally {
            o ? i() : ((B = !1), (U = null));
          }
        } else B = !1;
      }
      if ("function" == typeof A)
        i = function () {
          A(R);
        };
      else if ("undefined" != typeof MessageChannel) {
        var q = new MessageChannel(),
          V = q.port2;
        (q.port1.onmessage = R),
          (i = function () {
            V.postMessage(null);
          });
      } else
        i = function () {
          F(R, 0);
        };
      function I(t) {
        (U = t), B || ((B = !0), i());
      }
      function K(t, i) {
        Q = F(function () {
          t(a.unstable_now());
        }, i);
      }
      (a.unstable_IdlePriority = 5),
        (a.unstable_ImmediatePriority = 1),
        (a.unstable_LowPriority = 4),
        (a.unstable_NormalPriority = 3),
        (a.unstable_Profiling = null),
        (a.unstable_UserBlockingPriority = 2),
        (a.unstable_cancelCallback = function (t) {
          t.callback = null;
        }),
        (a.unstable_continueExecution = function () {
          L || N || ((L = !0), I(J));
        }),
        (a.unstable_forceFrameRate = function (t) {
          0 > t || 125 < t
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
              )
            : ($ = 0 < t ? Math.floor(1e3 / t) : 5);
        }),
        (a.unstable_getCurrentPriorityLevel = function () {
          return E;
        }),
        (a.unstable_getFirstCallbackNode = function () {
          return h(p);
        }),
        (a.unstable_next = function (t) {
          switch (E) {
            case 1:
            case 2:
            case 3:
              var a = 3;
              break;
            default:
              a = E;
          }
          var i = E;
          E = a;
          try {
            return t();
          } finally {
            E = i;
          }
        }),
        (a.unstable_pauseExecution = function () {}),
        (a.unstable_requestPaint = function () {}),
        (a.unstable_runWithPriority = function (t, a) {
          switch (t) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              t = 3;
          }
          var i = E;
          E = t;
          try {
            return a();
          } finally {
            E = i;
          }
        }),
        (a.unstable_scheduleCallback = function (t, i, o) {
          var u = a.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? u + o
                : u),
            t)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (s = o + s),
            (t = {
              id: w++,
              callback: i,
              priorityLevel: t,
              startTime: o,
              expirationTime: s,
              sortIndex: -1,
            }),
            o > u
              ? ((t.sortIndex = o),
                f(S, t),
                null === h(p) &&
                  t === h(S) &&
                  (j ? (D(Q), (Q = -1)) : (j = !0), K(H, o - u)))
              : ((t.sortIndex = s), f(p, t), L || N || ((L = !0), I(J))),
            t
          );
        }),
        (a.unstable_shouldYield = M),
        (a.unstable_wrapCallback = function (t) {
          var a = E;
          return function () {
            var i = E;
            E = a;
            try {
              return t.apply(this, arguments);
            } finally {
              E = i;
            }
          };
        });
    },
    63840: function (t, a, i) {
      "use strict";
      t.exports = i(60053);
    },
    94881: function (t, a, i) {
      "use strict";
      function shallowEqualArrays(t, a, i = (t, a) => t === a) {
        if (t === a) return !0;
        if (!t || !a) return !1;
        let o = t.length;
        if (a.length !== o) return !1;
        for (let u = 0; u < o; u++) if (!i(t[u], a[u])) return !1;
        return !0;
      }
      i.d(a, {
        MA: function () {
          return preload;
        },
        Rq: function () {
          return suspend;
        },
        ZH: function () {
          return clear;
        },
      });
      let o = [];
      function query(t, a, i = !1, u = {}) {
        for (let t of o)
          if (shallowEqualArrays(a, t.keys, t.equal)) {
            if (i) return;
            if (Object.prototype.hasOwnProperty.call(t, "error")) throw t.error;
            if (Object.prototype.hasOwnProperty.call(t, "response"))
              return t.response;
            if (!i) throw t.promise;
          }
        let s = {
          keys: a,
          equal: u.equal,
          promise: t(...a)
            .then((t) => (s.response = t))
            .then(() => {
              u.lifespan &&
                u.lifespan > 0 &&
                setTimeout(() => {
                  let t = o.indexOf(s);
                  -1 !== t && o.splice(t, 1);
                }, u.lifespan);
            })
            .catch((t) => (s.error = t)),
        };
        if ((o.push(s), !i)) throw s.promise;
      }
      let suspend = (t, a, i) => query(t, a, !1, i),
        preload = (t, a, i) => void query(t, a, !0, i),
        clear = (t) => {
          if (void 0 === t || 0 === t.length) o.splice(0, o.length);
          else {
            let a = o.find((a) => shallowEqualArrays(t, a.keys, a.equal));
            if (a) {
              let t = o.indexOf(a);
              -1 !== t && o.splice(t, 1);
            }
          }
        };
    },
  },
]);
