"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8243],
  {
    48243: function (e, n, r) {
      r.d(n, {
        E: function () {
          return e2;
        },
      });
      var i,
        a,
        o,
        s,
        l,
        u = r(67294);
      function isAnimationControls(e) {
        return "object" == typeof e && "function" == typeof e.start;
      }
      let c = (0, u.createContext)(null);
      function resolveVariantFromProps(e, n, r, i = {}, a = {}) {
        return (
          "function" == typeof n && (n = n(void 0 !== r ? r : e.custom, i, a)),
          "string" == typeof n && (n = e.variants && e.variants[n]),
          "function" == typeof n && (n = n(void 0 !== r ? r : e.custom, i, a)),
          n
        );
      }
      function useConstant(e) {
        let n = (0, u.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      let isKeyframesTarget = (e) => Array.isArray(e),
        isCustomValue = (e) =>
          !!(e && "object" == typeof e && e.mix && e.toValue),
        resolveFinalValueInKeyframes = (e) =>
          isKeyframesTarget(e) ? e[e.length - 1] || 0 : e,
        isMotionValue = (e) => !!(null == e ? void 0 : e.getVelocity);
      function resolveMotionValue(e) {
        let n = isMotionValue(e) ? e.get() : e;
        return isCustomValue(n) ? n.toValue() : n;
      }
      let p = (0, u.createContext)({});
      function isVariantLabel(e) {
        return "string" == typeof e || Array.isArray(e);
      }
      let d = [
        "initial",
        "animate",
        "exit",
        "whileHover",
        "whileDrag",
        "whileTap",
        "whileFocus",
        "whileInView",
      ];
      function isControllingVariants(e) {
        return (
          isAnimationControls(e.animate) || d.some((n) => isVariantLabel(e[n]))
        );
      }
      function isVariantNode(e) {
        return !!(isControllingVariants(e) || e.variants);
      }
      function shallowCompare(e, n) {
        if (!Array.isArray(n)) return !1;
        let r = n.length;
        if (r !== e.length) return !1;
        for (let i = 0; i < r; i++) if (n[i] !== e[i]) return !1;
        return !0;
      }
      let isNumericalString = (e) => /^\-?\d*\.?\d+$/.test(e),
        isZeroValueString = (e) => /^0[^.\s]+$/.test(e),
        h = { delta: 0, timestamp: 0 },
        m = (1 / 60) * 1e3,
        f =
          "undefined" != typeof performance
            ? () => performance.now()
            : () => Date.now(),
        g =
          "undefined" != typeof window
            ? (e) => window.requestAnimationFrame(e)
            : (e) => setTimeout(() => e(f()), m),
        v = !0,
        y = !1,
        V = !1,
        b = ["read", "update", "preRender", "render", "postRender"],
        A = b.reduce(
          (e, n) => (
            (e[n] = (function (e) {
              let n = [],
                r = [],
                i = 0,
                a = !1,
                o = !1,
                s = new WeakSet(),
                l = {
                  schedule: (e, o = !1, l = !1) => {
                    let u = l && a,
                      c = u ? n : r;
                    return (
                      o && s.add(e),
                      -1 === c.indexOf(e) &&
                        (c.push(e), u && a && (i = n.length)),
                      e
                    );
                  },
                  cancel: (e) => {
                    let n = r.indexOf(e);
                    -1 !== n && r.splice(n, 1), s.delete(e);
                  },
                  process: (u) => {
                    if (a) {
                      o = !0;
                      return;
                    }
                    if (
                      ((a = !0),
                      ([n, r] = [r, n]),
                      (r.length = 0),
                      (i = n.length))
                    )
                      for (let r = 0; r < i; r++) {
                        let i = n[r];
                        i(u), s.has(i) && (l.schedule(i), e());
                      }
                    (a = !1), o && ((o = !1), l.process(u));
                  },
                };
              return l;
            })(() => (y = !0))),
            e
          ),
          {},
        ),
        C = b.reduce((e, n) => {
          let r = A[n];
          return (
            (e[n] = (e, n = !1, i = !1) => (
              y || startLoop(), r.schedule(e, n, i)
            )),
            e
          );
        }, {}),
        w = b.reduce((e, n) => ((e[n] = A[n].cancel), e), {});
      b.reduce((e, n) => ((e[n] = () => A[n].process(h)), e), {});
      let processStep = (e) => A[e].process(h),
        processFrame = (e) => {
          (y = !1),
            (h.delta = v ? m : Math.max(Math.min(e - h.timestamp, 40), 1)),
            (h.timestamp = e),
            (V = !0),
            b.forEach(processStep),
            (V = !1),
            y && ((v = !1), g(processFrame));
        },
        startLoop = () => {
          (y = !0), (v = !0), V || g(processFrame);
        };
      let SubscriptionManager = class SubscriptionManager {
        constructor() {
          this.subscriptions = [];
        }
        add(e) {
          var n;
          return (
            -1 === (n = this.subscriptions).indexOf(e) && n.push(e),
            () =>
              (function (e, n) {
                let r = e.indexOf(n);
                r > -1 && e.splice(r, 1);
              })(this.subscriptions, e)
          );
        }
        notify(e, n, r) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](e, n, r);
            else
              for (let a = 0; a < i; a++) {
                let i = this.subscriptions[a];
                i && i(e, n, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      };
      function velocityPerSecond(e, n) {
        return n ? e * (1e3 / n) : 0;
      }
      let isFloat = (e) => !isNaN(parseFloat(e));
      let MotionValue = class MotionValue {
        constructor(e, n = {}) {
          (this.version = "8.5.2"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (e, n = !0) => {
              (this.prev = this.current), (this.current = e);
              let { delta: r, timestamp: i } = h;
              this.lastUpdated !== i &&
                ((this.timeDelta = r),
                (this.lastUpdated = i),
                C.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                n &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              C.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: e }) => {
              e !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = e),
            (this.canTrackVelocity = isFloat(this.current)),
            (this.owner = n.owner);
        }
        onChange(e) {
          return this.on("change", e);
        }
        on(e, n) {
          this.events[e] || (this.events[e] = new SubscriptionManager());
          let r = this.events[e].add(n);
          return "change" === e
            ? () => {
                r(),
                  C.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let e in this.events) this.events[e].clear();
        }
        attach(e, n) {
          (this.passiveEffect = e), (this.stopPassiveEffect = n);
        }
        set(e, n = !0) {
          n && this.passiveEffect
            ? this.passiveEffect(e, this.updateAndNotify)
            : this.updateAndNotify(e, n);
        }
        setWithVelocity(e, n, r) {
          this.set(n), (this.prev = e), (this.timeDelta = r);
        }
        jump(e) {
          this.updateAndNotify(e),
            (this.prev = e),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? velocityPerSecond(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta,
              )
            : 0;
        }
        start(e) {
          return (
            this.stop(),
            new Promise((n) => {
              (this.hasAnimated = !0),
                (this.animation = e(n) || null),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = null;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      };
      function motionValue(e, n) {
        return new MotionValue(e, n);
      }
      let sanitize = (e) => Math.round(1e5 * e) / 1e5,
        T = /(-)?([\d]*\.?[\d])+/g,
        M =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        S =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function isString(e) {
        return "string" == typeof e;
      }
      let clamp = (e, n, r) => Math.min(Math.max(r, e), n),
        x = {
          test: (e) => "number" == typeof e,
          parse: parseFloat,
          transform: (e) => e,
        },
        P = { ...x, transform: (e) => clamp(0, 1, e) },
        E = { ...x, default: 1 },
        isColorString = (e, n) => (r) =>
          !!(
            (isString(r) && S.test(r) && r.startsWith(e)) ||
            (n && Object.prototype.hasOwnProperty.call(r, n))
          ),
        splitColor = (e, n, r) => (i) => {
          if (!isString(i)) return i;
          let [a, o, s, l] = i.match(T);
          return {
            [e]: parseFloat(a),
            [n]: parseFloat(o),
            [r]: parseFloat(s),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        },
        clampRgbUnit = (e) => clamp(0, 255, e),
        k = { ...x, transform: (e) => Math.round(clampRgbUnit(e)) },
        F = {
          test: isColorString("rgb", "red"),
          parse: splitColor("red", "green", "blue"),
          transform: ({ red: e, green: n, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            k.transform(e) +
            ", " +
            k.transform(n) +
            ", " +
            k.transform(r) +
            ", " +
            sanitize(P.transform(i)) +
            ")",
        },
        D = {
          test: isColorString("#"),
          parse: function (e) {
            let n = "",
              r = "",
              i = "",
              a = "";
            return (
              e.length > 5
                ? ((n = e.substring(1, 3)),
                  (r = e.substring(3, 5)),
                  (i = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((n = e.substring(1, 2)),
                  (r = e.substring(2, 3)),
                  (i = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (n += n),
                  (r += r),
                  (i += i),
                  (a += a)),
              {
                red: parseInt(n, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: F.transform,
        },
        createUnitType = (e) => ({
          test: (n) =>
            isString(n) && n.endsWith(e) && 1 === n.split(" ").length,
          parse: parseFloat,
          transform: (n) => `${n}${e}`,
        }),
        I = createUnitType("deg"),
        R = createUnitType("%"),
        O = createUnitType("px"),
        L = createUnitType("vh"),
        N = createUnitType("vw"),
        z = {
          ...R,
          parse: (e) => R.parse(e) / 100,
          transform: (e) => R.transform(100 * e),
        },
        B = {
          test: isColorString("hsl", "hue"),
          parse: splitColor("hue", "saturation", "lightness"),
          transform: ({ hue: e, saturation: n, lightness: r, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            R.transform(sanitize(n)) +
            ", " +
            R.transform(sanitize(r)) +
            ", " +
            sanitize(P.transform(i)) +
            ")",
        },
        j = {
          test: (e) => F.test(e) || D.test(e) || B.test(e),
          parse: (e) =>
            F.test(e) ? F.parse(e) : B.test(e) ? B.parse(e) : D.parse(e),
          transform: (e) =>
            isString(e)
              ? e
              : e.hasOwnProperty("red")
                ? F.transform(e)
                : B.transform(e),
        },
        U = "${c}",
        $ = "${n}";
      function analyseComplexValue(e) {
        "number" == typeof e && (e = `${e}`);
        let n = [],
          r = 0,
          i = 0,
          a = e.match(M);
        a && ((r = a.length), (e = e.replace(M, U)), n.push(...a.map(j.parse)));
        let o = e.match(T);
        return (
          o &&
            ((i = o.length), (e = e.replace(T, $)), n.push(...o.map(x.parse))),
          { values: n, numColors: r, numNumbers: i, tokenised: e }
        );
      }
      function parse(e) {
        return analyseComplexValue(e).values;
      }
      function createTransformer(e) {
        let { values: n, numColors: r, tokenised: i } = analyseComplexValue(e),
          a = n.length;
        return (e) => {
          let n = i;
          for (let i = 0; i < a; i++)
            n = n.replace(
              i < r ? U : $,
              i < r ? j.transform(e[i]) : sanitize(e[i]),
            );
          return n;
        };
      }
      let convertNumbersToZero = (e) => ("number" == typeof e ? 0 : e),
        Z = {
          test: function (e) {
            var n, r;
            return (
              isNaN(e) &&
              isString(e) &&
              ((null === (n = e.match(T)) || void 0 === n
                ? void 0
                : n.length) || 0) +
                ((null === (r = e.match(M)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse,
          createTransformer,
          getAnimatableNone: function (e) {
            let n = parse(e),
              r = createTransformer(e);
            return r(n.map(convertNumbersToZero));
          },
        },
        _ = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function applyDefaultFilter(e) {
        let [n, r] = e.slice(0, -1).split("(");
        if ("drop-shadow" === n) return e;
        let [i] = r.match(T) || [];
        if (!i) return e;
        let a = r.replace(i, ""),
          o = _.has(n) ? 1 : 0;
        return i !== r && (o *= 100), n + "(" + o + a + ")";
      }
      let H = /([a-z-]*)\(.*?\)/g,
        X = {
          ...Z,
          getAnimatableNone: (e) => {
            let n = e.match(H);
            return n ? n.map(applyDefaultFilter).join(" ") : e;
          },
        },
        W = { ...x, transform: Math.round },
        Y = {
          borderWidth: O,
          borderTopWidth: O,
          borderRightWidth: O,
          borderBottomWidth: O,
          borderLeftWidth: O,
          borderRadius: O,
          radius: O,
          borderTopLeftRadius: O,
          borderTopRightRadius: O,
          borderBottomRightRadius: O,
          borderBottomLeftRadius: O,
          width: O,
          maxWidth: O,
          height: O,
          maxHeight: O,
          size: O,
          top: O,
          right: O,
          bottom: O,
          left: O,
          padding: O,
          paddingTop: O,
          paddingRight: O,
          paddingBottom: O,
          paddingLeft: O,
          margin: O,
          marginTop: O,
          marginRight: O,
          marginBottom: O,
          marginLeft: O,
          rotate: I,
          rotateX: I,
          rotateY: I,
          rotateZ: I,
          scale: E,
          scaleX: E,
          scaleY: E,
          scaleZ: E,
          skew: I,
          skewX: I,
          skewY: I,
          distance: O,
          translateX: O,
          translateY: O,
          translateZ: O,
          x: O,
          y: O,
          z: O,
          perspective: O,
          transformPerspective: O,
          opacity: P,
          originX: z,
          originY: z,
          originZ: O,
          zIndex: W,
          fillOpacity: P,
          strokeOpacity: P,
          numOctaves: W,
          color: j,
          backgroundColor: j,
          outlineColor: j,
          fill: j,
          stroke: j,
          borderColor: j,
          borderTopColor: j,
          borderRightColor: j,
          borderBottomColor: j,
          borderLeftColor: j,
          filter: X,
          WebkitFilter: X,
        },
        getDefaultValueType = (e) => Y[e];
      function animatable_none_getAnimatableNone(e, n) {
        var r;
        let i = getDefaultValueType(e);
        return (
          i !== X && (i = Z),
          null === (r = i.getAnimatableNone) || void 0 === r
            ? void 0
            : r.call(i, n)
        );
      }
      let test_testValueType = (e) => (n) => n.test(e),
        q = [
          x,
          O,
          R,
          I,
          N,
          L,
          { test: (e) => "auto" === e, parse: (e) => e },
          j,
          Z,
        ],
        findValueType = (e) => q.find(test_testValueType(e));
      function resolveVariant(e, n, r) {
        let i = e.getProps();
        return resolveVariantFromProps(
          i,
          n,
          void 0 !== r ? r : i.custom,
          (function (e) {
            let n = {};
            return e.values.forEach((e, r) => (n[r] = e.get())), n;
          })(e),
          (function (e) {
            let n = {};
            return e.values.forEach((e, r) => (n[r] = e.getVelocity())), n;
          })(e),
        );
      }
      let K = new Set([
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
      ]);
      function isWillChangeMotionValue(e) {
        return !!(isMotionValue(e) && e.add);
      }
      let G =
        "data-" +
        "framerAppearId".replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      var warning = function () {},
        invariant = function () {};
      let secondsToMilliseconds = (e) => 1e3 * e,
        J = { current: !1 },
        mirrorEasing = (e) => (n) =>
          n <= 0.5 ? e(2 * n) / 2 : (2 - e(2 * (1 - n))) / 2,
        reverseEasing = (e) => (n) => 1 - e(1 - n),
        easeIn = (e) => e * e,
        Q = reverseEasing(easeIn),
        ee = mirrorEasing(easeIn),
        mix = (e, n, r) => -r * e + r * n + e;
      function hueToRgb(e, n, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? e + (n - e) * 6 * r
          : r < 0.5
            ? n
            : r < 2 / 3
              ? e + (n - e) * (2 / 3 - r) * 6
              : e;
      }
      let mixLinearColor = (e, n, r) => {
          let i = e * e;
          return Math.sqrt(Math.max(0, r * (n * n - i) + i));
        },
        et = [D, F, B],
        getColorType = (e) => et.find((n) => n.test(e));
      function asRGBA(e) {
        let n = getColorType(e);
        invariant(
          !!n,
          `'${e}' is not an animatable color. Use the equivalent color code instead.`,
        );
        let r = n.parse(e);
        return (
          n === B &&
            (r = (function ({ hue: e, saturation: n, lightness: r, alpha: i }) {
              (e /= 360), (r /= 100);
              let a = 0,
                o = 0,
                s = 0;
              if ((n /= 100)) {
                let i = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  l = 2 * r - i;
                (a = hueToRgb(l, i, e + 1 / 3)),
                  (o = hueToRgb(l, i, e)),
                  (s = hueToRgb(l, i, e - 1 / 3));
              } else a = o = s = r;
              return {
                red: Math.round(255 * a),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      let mixColor = (e, n) => {
          let r = asRGBA(e),
            i = asRGBA(n),
            a = { ...r };
          return (e) => (
            (a.red = mixLinearColor(r.red, i.red, e)),
            (a.green = mixLinearColor(r.green, i.green, e)),
            (a.blue = mixLinearColor(r.blue, i.blue, e)),
            (a.alpha = mix(r.alpha, i.alpha, e)),
            F.transform(a)
          );
        },
        combineFunctions = (e, n) => (r) => n(e(r)),
        pipe = (...e) => e.reduce(combineFunctions);
      function getMixer(e, n) {
        return "number" == typeof e
          ? (r) => mix(e, n, r)
          : j.test(e)
            ? mixColor(e, n)
            : mixComplex(e, n);
      }
      let mixArray = (e, n) => {
          let r = [...e],
            i = r.length,
            a = e.map((e, r) => getMixer(e, n[r]));
          return (e) => {
            for (let n = 0; n < i; n++) r[n] = a[n](e);
            return r;
          };
        },
        mixObject = (e, n) => {
          let r = { ...e, ...n },
            i = {};
          for (let a in r)
            void 0 !== e[a] && void 0 !== n[a] && (i[a] = getMixer(e[a], n[a]));
          return (e) => {
            for (let n in i) r[n] = i[n](e);
            return r;
          };
        },
        mixComplex = (e, n) => {
          let r = Z.createTransformer(n),
            i = analyseComplexValue(e),
            a = analyseComplexValue(n),
            o = i.numColors === a.numColors && i.numNumbers >= a.numNumbers;
          return o
            ? pipe(mixArray(i.values, a.values), r)
            : (warning(
                !0,
                `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              ),
              (r) => `${r > 0 ? n : e}`);
        },
        progress = (e, n, r) => {
          let i = n - e;
          return 0 === i ? 1 : (r - e) / i;
        },
        mixNumber = (e, n) => (r) => mix(e, n, r);
      function interpolate(e, n, { clamp: r = !0, ease: i, mixer: a } = {}) {
        let o = e.length;
        invariant(
          o === n.length,
          "Both input and output ranges must be the same length",
        ),
          invariant(
            !i || !Array.isArray(i) || i.length === o - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.",
          ),
          e[0] > e[o - 1] && ((e = [...e].reverse()), (n = [...n].reverse()));
        let s = (function (e, n, r) {
            let i = [],
              a =
                r ||
                (function (e) {
                  if ("number" == typeof e);
                  else if ("string" == typeof e)
                    return j.test(e) ? mixColor : mixComplex;
                  else if (Array.isArray(e)) return mixArray;
                  else if ("object" == typeof e) return mixObject;
                  return mixNumber;
                })(e[0]),
              o = e.length - 1;
            for (let r = 0; r < o; r++) {
              let o = a(e[r], e[r + 1]);
              if (n) {
                let e = Array.isArray(n) ? n[r] : n;
                o = pipe(e, o);
              }
              i.push(o);
            }
            return i;
          })(n, i, a),
          l = s.length,
          interpolator = (n) => {
            let r = 0;
            if (l > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
            let i = progress(e[r], e[r + 1], n);
            return s[r](i);
          };
        return r ? (n) => interpolator(clamp(e[0], e[o - 1], n)) : interpolator;
      }
      let noop = (e) => e,
        calcBezier = (e, n, r) =>
          (((1 - 3 * r + 3 * n) * e + (3 * r - 6 * n)) * e + 3 * n) * e;
      function cubicBezier(e, n, r, i) {
        if (e === n && r === i) return noop;
        let getTForX = (n) =>
          (function (e, n, r, i, a) {
            let o, s;
            let l = 0;
            do
              (o = calcBezier((s = n + (r - n) / 2), i, a) - e) > 0
                ? (r = s)
                : (n = s);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return s;
          })(n, 0, 1, e, r);
        return (e) => (0 === e || 1 === e ? e : calcBezier(getTForX(e), n, i));
      }
      let circIn = (e) => 1 - Math.sin(Math.acos(e)),
        en = reverseEasing(circIn),
        er = mirrorEasing(en),
        ei = cubicBezier(0.33, 1.53, 0.69, 0.99),
        ea = reverseEasing(ei),
        eo = mirrorEasing(ea),
        es = {
          linear: noop,
          easeIn: easeIn,
          easeInOut: ee,
          easeOut: Q,
          circIn: circIn,
          circInOut: er,
          circOut: en,
          backIn: ea,
          backInOut: eo,
          backOut: ei,
          anticipate: (e) =>
            (e *= 2) < 1 ? 0.5 * ea(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
        },
        easingDefinitionToFunction = (e) => {
          if (Array.isArray(e)) {
            invariant(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values.",
            );
            let [n, r, i, a] = e;
            return cubicBezier(n, r, i, a);
          }
          return "string" == typeof e
            ? (invariant(void 0 !== es[e], `Invalid easing type '${e}'`), es[e])
            : e;
        },
        isEasingArray = (e) => Array.isArray(e) && "number" != typeof e[0];
      function keyframes({
        keyframes: e,
        ease: n = ee,
        times: r,
        duration: i = 300,
      }) {
        e = [...e];
        let a = isEasingArray(n)
            ? n.map(easingDefinitionToFunction)
            : easingDefinitionToFunction(n),
          o = { done: !1, value: e[0] },
          s = (
            r && r.length === e.length
              ? r
              : (function (e) {
                  let n = e.length;
                  return e.map((e, r) => (0 !== r ? r / (n - 1) : 0));
                })(e)
          ).map((e) => e * i);
        function createInterpolator() {
          var n;
          return interpolate(s, e, {
            ease: Array.isArray(a)
              ? a
              : (n = e).map(() => a || ee).splice(0, n.length - 1),
          });
        }
        let l = createInterpolator();
        return {
          next: (e) => ((o.value = l(e)), (o.done = e >= i), o),
          flipTarget: () => {
            e.reverse(), (l = createInterpolator());
          },
        };
      }
      function calcAngularFreq(e, n) {
        return e * Math.sqrt(1 - n * n);
      }
      let el = ["duration", "bounce"],
        eu = ["stiffness", "damping", "mass"];
      function isSpringType(e, n) {
        return n.some((n) => void 0 !== e[n]);
      }
      function spring({ keyframes: e, restDelta: n, restSpeed: r, ...i }) {
        let a = e[0],
          o = e[e.length - 1],
          s = { done: !1, value: a },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: p,
            duration: d,
            isResolvedFromDuration: h,
          } = (function (e) {
            let n = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...e,
            };
            if (!isSpringType(e, eu) && isSpringType(e, el)) {
              let r = (function ({
                duration: e = 800,
                bounce: n = 0.25,
                velocity: r = 0,
                mass: i = 1,
              }) {
                let a, o;
                warning(e <= 1e4, "Spring duration must be 10 seconds or less");
                let s = 1 - n;
                (s = clamp(0.05, 1, s)),
                  (e = clamp(0.01, 10, e / 1e3)),
                  s < 1
                    ? ((a = (n) => {
                        let i = n * s,
                          a = i * e,
                          o = calcAngularFreq(n, s);
                        return 0.001 - ((i - r) / o) * Math.exp(-a);
                      }),
                      (o = (n) => {
                        let i = n * s,
                          o = i * e,
                          l = Math.pow(s, 2) * Math.pow(n, 2) * e,
                          u = calcAngularFreq(Math.pow(n, 2), s),
                          c = -a(n) + 0.001 > 0 ? -1 : 1;
                        return (c * ((o * r + r - l) * Math.exp(-o))) / u;
                      }))
                    : ((a = (n) => {
                        let i = Math.exp(-n * e),
                          a = (n - r) * e + 1;
                        return -0.001 + i * a;
                      }),
                      (o = (n) => {
                        let i = Math.exp(-n * e),
                          a = (r - n) * (e * e);
                        return i * a;
                      }));
                let l = 5 / e,
                  u = (function (e, n, r) {
                    let i = r;
                    for (let r = 1; r < 12; r++) i -= e(i) / n(i);
                    return i;
                  })(a, o, l);
                if (((e *= 1e3), isNaN(u)))
                  return { stiffness: 100, damping: 10, duration: e };
                {
                  let n = Math.pow(u, 2) * i;
                  return {
                    stiffness: n,
                    damping: 2 * s * Math.sqrt(i * n),
                    duration: e,
                  };
                }
              })(e);
              (n = {
                ...n,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return n;
          })(i),
          m = zero,
          f = p ? -(p / 1e3) : 0,
          g = u / (2 * Math.sqrt(l * c));
        function createSpring() {
          let e = o - a,
            i = Math.sqrt(l / c) / 1e3,
            s = 5 > Math.abs(e);
          if ((r || (r = s ? 0.01 : 2), n || (n = s ? 0.005 : 0.5), g < 1)) {
            let n = calcAngularFreq(i, g);
            m = (r) => {
              let a = Math.exp(-g * i * r);
              return (
                o -
                a *
                  (((f + g * i * e) / n) * Math.sin(n * r) +
                    e * Math.cos(n * r))
              );
            };
          } else if (1 === g)
            m = (n) => o - Math.exp(-i * n) * (e + (f + i * e) * n);
          else {
            let n = i * Math.sqrt(g * g - 1);
            m = (r) => {
              let a = Math.exp(-g * i * r),
                s = Math.min(n * r, 300);
              return (
                o -
                (a * ((f + g * i * e) * Math.sinh(s) + n * e * Math.cosh(s))) /
                  n
              );
            };
          }
        }
        return (
          createSpring(),
          {
            next: (e) => {
              let i = m(e);
              if (h) s.done = e >= d;
              else {
                let a = f;
                if (0 !== e) {
                  if (g < 1) {
                    let n = Math.max(0, e - 5);
                    a = velocityPerSecond(i - m(n), e - n);
                  } else a = 0;
                }
                let l = Math.abs(a) <= r,
                  u = Math.abs(o - i) <= n;
                s.done = l && u;
              }
              return (s.value = s.done ? o : i), s;
            },
            flipTarget: () => {
              (f = -f), ([a, o] = [o, a]), createSpring();
            },
          }
        );
      }
      spring.needsInterpolation = (e, n) =>
        "string" == typeof e || "string" == typeof n;
      let zero = (e) => 0,
        ec = {
          decay: function ({
            keyframes: e = [0],
            velocity: n = 0,
            power: r = 0.8,
            timeConstant: i = 350,
            restDelta: a = 0.5,
            modifyTarget: o,
          }) {
            let s = e[0],
              l = { done: !1, value: s },
              u = r * n,
              c = s + u,
              p = void 0 === o ? c : o(c);
            return (
              p !== c && (u = p - s),
              {
                next: (e) => {
                  let n = -u * Math.exp(-e / i);
                  return (
                    (l.done = !(n > a || n < -a)),
                    (l.value = l.done ? p : p + n),
                    l
                  );
                },
                flipTarget: () => {},
              }
            );
          },
          keyframes: keyframes,
          tween: keyframes,
          spring: spring,
        };
      function loopElapsed(e, n, r = 0) {
        return e - n - r;
      }
      let framesync = (e) => {
        let passTimestamp = ({ delta: n }) => e(n);
        return {
          start: () => C.update(passTimestamp, !0),
          stop: () => w.update(passTimestamp),
        };
      };
      function animate({
        duration: e,
        driver: n = framesync,
        elapsed: r = 0,
        repeat: i = 0,
        repeatType: a = "loop",
        repeatDelay: o = 0,
        keyframes: s,
        autoplay: l = !0,
        onPlay: u,
        onStop: c,
        onComplete: p,
        onRepeat: d,
        onUpdate: h,
        type: m = "keyframes",
        ...f
      }) {
        var g;
        let v, y;
        let V = r,
          b = 0,
          A = e,
          C = !1,
          w = !0,
          T = ec[s.length > 2 ? "keyframes" : m] || keyframes,
          M = s[0],
          S = s[s.length - 1],
          x = { done: !1, value: M };
        (null === (g = T.needsInterpolation) || void 0 === g
          ? void 0
          : g.call(T, M, S)) &&
          ((y = interpolate([0, 100], [M, S], { clamp: !1 })), (s = [0, 100]));
        let P = T({ ...f, duration: e, keyframes: s });
        function update(e) {
          if (
            (w || (e = -e),
            (r += e),
            C ||
              ((x = P.next(Math.max(0, r))),
              y && (x.value = y(x.value)),
              (C = w ? x.done : r <= 0)),
            h && h(x.value),
            C)
          ) {
            if ((0 === b && (A = void 0 !== A ? A : r), b < i)) {
              var n, s;
              (n = r),
                (s = A),
                (w ? n >= s + o : n <= -o) &&
                  (b++,
                  "reverse" === a
                    ? (r = (function (e, n = 0, r = 0, i = !0) {
                        return i ? loopElapsed(n + -e, n, r) : n - (e - n) + r;
                      })(r, A, o, (w = b % 2 == 0)))
                    : ((r = loopElapsed(r, A, o)),
                      "mirror" === a && P.flipTarget()),
                  (C = !1),
                  d && d());
            } else v && v.stop(), p && p();
          }
        }
        return (
          l && (u && u(), (v = n(update)).start()),
          {
            stop: () => {
              c && c(), v && v.stop();
            },
            set currentTime(t) {
              (r = V), update(t);
            },
            sample: (n) => {
              r = V;
              let i = e && "number" == typeof e ? Math.max(0.5 * e, 50) : 50,
                a = 0;
              for (update(0); a <= n; ) {
                let e = n - a;
                update(Math.min(e, i)), (a += i);
              }
              return x;
            },
          }
        );
      }
      let cubicBezierAsString = ([e, n, r, i]) =>
          `cubic-bezier(${e}, ${n}, ${r}, ${i})`,
        ep = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: cubicBezierAsString([0, 0.65, 0.55, 1]),
          circOut: cubicBezierAsString([0.55, 0, 1, 0.45]),
          backIn: cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
          backOut: cubicBezierAsString([0.33, 1.53, 0.69, 0.99]),
        },
        ed = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
        },
        eh = {},
        em = {};
      for (let e in ed)
        em[e] = () => (void 0 === eh[e] && (eh[e] = ed[e]()), eh[e]);
      let ef = new Set(["opacity"]),
        underDampedSpring = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10,
        }),
        criticallyDampedSpring = (e) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === e ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        linearTween = () => ({
          type: "keyframes",
          ease: "linear",
          duration: 0.3,
        }),
        eg = { type: "keyframes", duration: 0.8 },
        ev = {
          x: underDampedSpring,
          y: underDampedSpring,
          z: underDampedSpring,
          rotate: underDampedSpring,
          rotateX: underDampedSpring,
          rotateY: underDampedSpring,
          rotateZ: underDampedSpring,
          scaleX: criticallyDampedSpring,
          scaleY: criticallyDampedSpring,
          scale: criticallyDampedSpring,
          opacity: linearTween,
          backgroundColor: linearTween,
          color: linearTween,
          default: criticallyDampedSpring,
        },
        getDefaultTransition = (e, { keyframes: n }) => {
          if (n.length > 2) return eg;
          {
            let r = ev[e] || ev.default;
            return r(n[1]);
          }
        },
        isAnimatable = (e, n) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof n ||
            Array.isArray(n) ||
            ("string" == typeof n && Z.test(n) && !n.startsWith("url("))
          );
      function isZero(e) {
        return (
          0 === e ||
          ("string" == typeof e && 0 === parseFloat(e) && -1 === e.indexOf(" "))
        );
      }
      function getZeroUnit(e) {
        return "number" == typeof e
          ? 0
          : animatable_none_getAnimatableNone("", e);
      }
      let createMotionValueAnimation =
        (e, n, r, i = {}) =>
        (a) => {
          let o = i[e] || i.default || i || {},
            s = o.delay || i.delay || 0,
            { elapsed: l = 0 } = i;
          l -= secondsToMilliseconds(s);
          let u = (function (e, n, r, i) {
              let a = isAnimatable(n, r),
                o = void 0 !== i.from ? i.from : e.get();
              return ("none" === o && a && "string" == typeof r
                ? (o = animatable_none_getAnimatableNone(n, r))
                : isZero(o) && "string" == typeof r
                  ? (o = getZeroUnit(r))
                  : !Array.isArray(r) &&
                    isZero(r) &&
                    "string" == typeof o &&
                    (r = getZeroUnit(o)),
              Array.isArray(r))
                ? (null === r[0] && (r[0] = o), r)
                : [o, r];
            })(n, e, r, o),
            c = u[0],
            p = u[u.length - 1],
            d = isAnimatable(e, c),
            m = isAnimatable(e, p);
          warning(
            d === m,
            `You are trying to animate ${e} from "${c}" to "${p}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${p} via the \`style\` property.`,
          );
          let f = {
            keyframes: u,
            velocity: n.getVelocity(),
            ...o,
            elapsed: l,
            onUpdate: (e) => {
              n.set(e), o.onUpdate && o.onUpdate(e);
            },
            onComplete: () => {
              a(), o.onComplete && o.onComplete();
            },
          };
          if (!d || !m || J.current || !1 === o.type)
            return (function ({
              keyframes: e,
              elapsed: n,
              onUpdate: r,
              onComplete: i,
            }) {
              let setValue = () => {
                r && r(e[e.length - 1]), i && i();
              };
              return n
                ? {
                    stop: (function (e, n) {
                      let r = performance.now(),
                        checkElapsed = ({ timestamp: i }) => {
                          let a = i - r;
                          a >= n && (w.read(checkElapsed), e(a - n));
                        };
                      return (
                        C.read(checkElapsed, !0), () => w.read(checkElapsed)
                      );
                    })(setValue, -n),
                  }
                : setValue();
            })(f);
          if ("inertia" === o.type)
            return (function ({
              keyframes: e,
              velocity: n = 0,
              min: r,
              max: i,
              power: a = 0.8,
              timeConstant: o = 750,
              bounceStiffness: s = 500,
              bounceDamping: l = 10,
              restDelta: u = 1,
              modifyTarget: c,
              driver: p,
              onUpdate: d,
              onComplete: m,
              onStop: f,
            }) {
              let g;
              let v = e[0];
              function isOutOfBounds(e) {
                return (void 0 !== r && e < r) || (void 0 !== i && e > i);
              }
              function findNearestBoundary(e) {
                return void 0 === r
                  ? i
                  : void 0 === i
                    ? r
                    : Math.abs(r - e) < Math.abs(i - e)
                      ? r
                      : i;
              }
              function startAnimation(e) {
                null == g || g.stop(),
                  (g = animate({
                    keyframes: [0, 1],
                    velocity: 0,
                    ...e,
                    driver: p,
                    onUpdate: (n) => {
                      var r;
                      null == d || d(n),
                        null === (r = e.onUpdate) ||
                          void 0 === r ||
                          r.call(e, n);
                    },
                    onComplete: m,
                    onStop: f,
                  }));
              }
              function startSpring(e) {
                startAnimation({
                  type: "spring",
                  stiffness: s,
                  damping: l,
                  restDelta: u,
                  ...e,
                });
              }
              if (isOutOfBounds(v))
                startSpring({
                  velocity: n,
                  keyframes: [v, findNearestBoundary(v)],
                });
              else {
                let e,
                  i,
                  s = a * n + v;
                void 0 !== c && (s = c(s));
                let l = findNearestBoundary(s),
                  p = l === r ? -1 : 1;
                startAnimation({
                  type: "decay",
                  keyframes: [v, 0],
                  velocity: n,
                  timeConstant: o,
                  power: a,
                  restDelta: u,
                  modifyTarget: c,
                  onUpdate: isOutOfBounds(s)
                    ? (r) => {
                        (e = i),
                          (i = r),
                          (n = velocityPerSecond(r - e, h.delta)),
                          ((1 === p && r > l) || (-1 === p && r < l)) &&
                            startSpring({ keyframes: [r, l], velocity: n });
                      }
                    : void 0,
                });
              }
              return { stop: () => (null == g ? void 0 : g.stop()) };
            })(f);
          !(function ({
            when: e,
            delay: n,
            delayChildren: r,
            staggerChildren: i,
            staggerDirection: a,
            repeat: o,
            repeatType: s,
            repeatDelay: l,
            from: u,
            elapsed: c,
            ...p
          }) {
            return !!Object.keys(p).length;
          })(o) && (f = { ...f, ...getDefaultTransition(e, f) }),
            f.duration && (f.duration = secondsToMilliseconds(f.duration)),
            f.repeatDelay &&
              (f.repeatDelay = secondsToMilliseconds(f.repeatDelay));
          let g = n.owner,
            v = g && g.current;
          if (
            g &&
            v instanceof HTMLElement &&
            !(null == g ? void 0 : g.getProps().onUpdate)
          ) {
            let r = (function (e, n, { onUpdate: r, onComplete: i, ...a }) {
              var o;
              let s =
                em.waapi() &&
                ef.has(n) &&
                !a.repeatDelay &&
                "mirror" !== a.repeatType &&
                0 !== a.damping;
              if (!s) return !1;
              let {
                keyframes: l,
                duration: u = 300,
                elapsed: c = 0,
                ease: p,
              } = a;
              if (
                "spring" === a.type ||
                !(
                  !(o = a.ease) ||
                  Array.isArray(o) ||
                  ("string" == typeof o && ep[o])
                )
              ) {
                if (a.repeat === 1 / 0) return;
                let e = animate({ ...a, elapsed: 0 }),
                  n = { done: !1, value: l[0] },
                  r = [],
                  i = 0;
                for (; !n.done && i < 2e4; )
                  (n = e.sample(i)), r.push(n.value), (i += 10);
                (l = r), (u = i - 10), (p = "linear");
              }
              let d = (function (
                e,
                n,
                r,
                {
                  delay: i = 0,
                  duration: a,
                  repeat: o = 0,
                  repeatType: s = "loop",
                  ease: l,
                  times: u,
                } = {},
              ) {
                return e.animate(
                  { [n]: r, offset: u },
                  {
                    delay: i,
                    duration: a,
                    easing: (function (e) {
                      if (e)
                        return Array.isArray(e)
                          ? cubicBezierAsString(e)
                          : ep[e];
                    })(l),
                    fill: "both",
                    iterations: o + 1,
                    direction: "reverse" === s ? "alternate" : "normal",
                  },
                );
              })(e.owner.current, n, l, {
                ...a,
                delay: -c,
                duration: u,
                ease: p,
              });
              return (
                (d.onfinish = () => {
                  e.set(
                    (function (e, { repeat: n, repeatType: r = "loop" }) {
                      let i =
                        n && "loop" !== r && n % 2 == 1 ? 0 : e.length - 1;
                      return e[i];
                    })(l, a),
                  ),
                    i && i();
                }),
                {
                  get currentTime() {
                    return d.currentTime || 0;
                  },
                  set currentTime(t) {
                    d.currentTime = t;
                  },
                  stop: () => {
                    let { currentTime: n } = d;
                    if (n) {
                      let r = animate({ ...a, autoplay: !1 });
                      e.setWithVelocity(
                        r.sample(n - 10).value,
                        r.sample(n).value,
                        10,
                      );
                    }
                    C.update(() => d.cancel());
                  },
                }
              );
            })(n, e, f);
            if (r) return r;
          }
          return animate(f);
        };
      function animateVariant(e, n, r = {}) {
        var i;
        let a = resolveVariant(e, n, r.custom),
          { transition: o = e.getDefaultTransition() || {} } = a || {};
        r.transitionOverride && (o = r.transitionOverride);
        let s = a ? () => animateTarget(e, a, r) : () => Promise.resolve(),
          l = (
            null === (i = e.variantChildren) || void 0 === i ? void 0 : i.size
          )
            ? (i = 0) => {
                let {
                  delayChildren: a = 0,
                  staggerChildren: s,
                  staggerDirection: l,
                } = o;
                return (function (e, n, r = 0, i = 0, a = 1, o) {
                  let s = [],
                    l = (e.variantChildren.size - 1) * i,
                    u = 1 === a ? (e = 0) => e * i : (e = 0) => l - e * i;
                  return (
                    Array.from(e.variantChildren)
                      .sort(sortByTreeOrder)
                      .forEach((e, i) => {
                        e.notify("AnimationStart", n),
                          s.push(
                            animateVariant(e, n, {
                              ...o,
                              delay: r + u(i),
                            }).then(() => e.notify("AnimationComplete", n)),
                          );
                      }),
                    Promise.all(s)
                  );
                })(e, n, a + i, s, l, r);
              }
            : () => Promise.resolve(),
          { when: u } = o;
        if (!u) return Promise.all([s(), l(r.delay)]);
        {
          let [e, n] = "beforeChildren" === u ? [s, l] : [l, s];
          return e().then(n);
        }
      }
      function animateTarget(
        e,
        n,
        { delay: r = 0, transitionOverride: i, type: a } = {},
      ) {
        var o;
        let {
            transition: s = e.getDefaultTransition(),
            transitionEnd: l,
            ...u
          } = e.makeTargetAnimatable(n),
          c = e.getValue("willChange");
        i && (s = i);
        let p = [],
          d =
            a &&
            (null === (o = e.animationState) || void 0 === o
              ? void 0
              : o.getState()[a]);
        for (let n in u) {
          let i = e.getValue(n),
            a = u[n];
          if (
            !i ||
            void 0 === a ||
            (d &&
              (function ({ protectedKeys: e, needsAnimating: n }, r) {
                let i = e.hasOwnProperty(r) && !0 !== n[r];
                return (n[r] = !1), i;
              })(d, n))
          )
            continue;
          let o = { delay: r, elapsed: 0, ...s };
          if (window.HandoffAppearAnimations && !i.hasAnimated) {
            let r = e.getProps()[G];
            r && (o.elapsed = window.HandoffAppearAnimations(r, n, i, C));
          }
          let l = i.start(
            createMotionValueAnimation(
              n,
              i,
              a,
              e.shouldReduceMotion && K.has(n) ? { type: !1 } : o,
            ),
          );
          isWillChangeMotionValue(c) &&
            (c.add(n), (l = l.then(() => c.remove(n)))),
            p.push(l);
        }
        return Promise.all(p).then(() => {
          l &&
            (function (e, n) {
              let r = resolveVariant(e, n),
                {
                  transitionEnd: i = {},
                  transition: a = {},
                  ...o
                } = r ? e.makeTargetAnimatable(r, !1) : {};
              for (let n in (o = { ...o, ...i })) {
                let r = resolveFinalValueInKeyframes(o[n]);
                e.hasValue(n)
                  ? e.getValue(n).set(r)
                  : e.addValue(n, motionValue(r));
              }
            })(e, l);
        });
      }
      function sortByTreeOrder(e, n) {
        return e.sortNodePosition(n);
      }
      ((i = l || (l = {})).Animate = "animate"),
        (i.Hover = "whileHover"),
        (i.Tap = "whileTap"),
        (i.Drag = "whileDrag"),
        (i.Focus = "whileFocus"),
        (i.InView = "whileInView"),
        (i.Exit = "exit");
      let ey = [l.Animate, l.InView, l.Focus, l.Hover, l.Tap, l.Drag, l.Exit],
        eV = [...ey].reverse(),
        eb = ey.length;
      function createTypeState(e = !1) {
        return {
          isActive: e,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let makeRenderlessComponent = (e) => (n) => (e(n), null),
        eA = {
          animation: makeRenderlessComponent(
            ({ visualElement: e, animate: n }) => {
              e.animationState ||
                (e.animationState = (function (e) {
                  let animate = (n) =>
                      Promise.all(
                        n.map(({ animation: n, options: r }) =>
                          (function (e, n, r = {}) {
                            let i;
                            if (
                              (e.notify("AnimationStart", n), Array.isArray(n))
                            ) {
                              let a = n.map((n) => animateVariant(e, n, r));
                              i = Promise.all(a);
                            } else if ("string" == typeof n)
                              i = animateVariant(e, n, r);
                            else {
                              let a =
                                "function" == typeof n
                                  ? resolveVariant(e, n, r.custom)
                                  : n;
                              i = animateTarget(e, a, r);
                            }
                            return i.then(() =>
                              e.notify("AnimationComplete", n),
                            );
                          })(e, n, r),
                        ),
                      ),
                    n = {
                      [l.Animate]: createTypeState(!0),
                      [l.InView]: createTypeState(),
                      [l.Hover]: createTypeState(),
                      [l.Tap]: createTypeState(),
                      [l.Drag]: createTypeState(),
                      [l.Focus]: createTypeState(),
                      [l.Exit]: createTypeState(),
                    },
                    r = !0,
                    buildResolvedTypeValues = (n, r) => {
                      let i = resolveVariant(e, r);
                      if (i) {
                        let { transition: e, transitionEnd: r, ...a } = i;
                        n = { ...n, ...a, ...r };
                      }
                      return n;
                    };
                  function animateChanges(i, a) {
                    let o = e.getProps(),
                      s = e.getVariantContext(!0) || {},
                      l = [],
                      u = new Set(),
                      c = {},
                      p = 1 / 0;
                    for (let h = 0; h < eb; h++) {
                      var d;
                      let m = eV[h],
                        f = n[m],
                        g = void 0 !== o[m] ? o[m] : s[m],
                        v = isVariantLabel(g),
                        y = m === a ? f.isActive : null;
                      !1 === y && (p = h);
                      let V = g === s[m] && g !== o[m] && v;
                      if (
                        (V && r && e.manuallyAnimateOnMount && (V = !1),
                        (f.protectedKeys = { ...c }),
                        (!f.isActive && null === y) ||
                          (!g && !f.prevProp) ||
                          isAnimationControls(g) ||
                          "boolean" == typeof g)
                      )
                        continue;
                      let b =
                          ((d = f.prevProp),
                          "string" == typeof g
                            ? g !== d
                            : !!Array.isArray(g) && !shallowCompare(g, d)),
                        A =
                          b ||
                          (m === a && f.isActive && !V && v) ||
                          (h > p && v),
                        C = Array.isArray(g) ? g : [g],
                        w = C.reduce(buildResolvedTypeValues, {});
                      !1 === y && (w = {});
                      let { prevResolvedValues: T = {} } = f,
                        M = { ...T, ...w },
                        markToAnimate = (e) => {
                          (A = !0), u.delete(e), (f.needsAnimating[e] = !0);
                        };
                      for (let e in M) {
                        let n = w[e],
                          r = T[e];
                        c.hasOwnProperty(e) ||
                          (n !== r
                            ? isKeyframesTarget(n) && isKeyframesTarget(r)
                              ? !shallowCompare(n, r) || b
                                ? markToAnimate(e)
                                : (f.protectedKeys[e] = !0)
                              : void 0 !== n
                                ? markToAnimate(e)
                                : u.add(e)
                            : void 0 !== n && u.has(e)
                              ? markToAnimate(e)
                              : (f.protectedKeys[e] = !0));
                      }
                      (f.prevProp = g),
                        (f.prevResolvedValues = w),
                        f.isActive && (c = { ...c, ...w }),
                        r && e.blockInitialAnimation && (A = !1),
                        A &&
                          !V &&
                          l.push(
                            ...C.map((e) => ({
                              animation: e,
                              options: { type: m, ...i },
                            })),
                          );
                    }
                    if (u.size) {
                      let n = {};
                      u.forEach((r) => {
                        let i = e.getBaseTarget(r);
                        void 0 !== i && (n[r] = i);
                      }),
                        l.push({ animation: n });
                    }
                    let h = !!l.length;
                    return (
                      r &&
                        !1 === o.initial &&
                        !e.manuallyAnimateOnMount &&
                        (h = !1),
                      (r = !1),
                      h ? animate(l) : Promise.resolve()
                    );
                  }
                  return {
                    animateChanges,
                    setActive: function (r, i, a) {
                      var o;
                      if (n[r].isActive === i) return Promise.resolve();
                      null === (o = e.variantChildren) ||
                        void 0 === o ||
                        o.forEach((e) => {
                          var n;
                          return null === (n = e.animationState) || void 0 === n
                            ? void 0
                            : n.setActive(r, i);
                        }),
                        (n[r].isActive = i);
                      let s = animateChanges(a, r);
                      for (let e in n) n[e].protectedKeys = {};
                      return s;
                    },
                    setAnimateFunction: function (n) {
                      animate = n(e);
                    },
                    getState: () => n,
                  };
                })(e)),
                isAnimationControls(n) &&
                  (0, u.useEffect)(() => n.subscribe(e), [n]);
            },
          ),
          exit: makeRenderlessComponent((e) => {
            let { custom: n, visualElement: r } = e,
              [i, a] = (function () {
                let e = (0, u.useContext)(c);
                if (null === e) return [!0, null];
                let { isPresent: n, onExitComplete: r, register: i } = e,
                  a = (0, u.useId)();
                return (
                  (0, u.useEffect)(() => i(a), []),
                  !n && r ? [!1, () => r && r(a)] : [!0]
                );
              })(),
              o = (0, u.useContext)(c);
            (0, u.useEffect)(() => {
              r.isPresent = i;
              let e =
                r.animationState &&
                r.animationState.setActive(l.Exit, !i, {
                  custom: (o && o.custom) || n,
                });
              e && !i && e.then(a);
            }, [i]);
          }),
        },
        eC = (0, u.createContext)({
          transformPagePoint: (e) => e,
          isStatic: !1,
          reducedMotion: "never",
        }),
        ew = "undefined" != typeof document,
        eT = ew ? u.useLayoutEffect : u.useEffect,
        eM = (0, u.createContext)({ strict: !1 });
      function isRefObject(e) {
        return (
          "object" == typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function variantLabelsAsDependency(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      let createDefinition = (e) => ({
          isEnabled: (n) => e.some((e) => !!n[e]),
        }),
        eS = {
          measureLayout: createDefinition(["layout", "layoutId", "drag"]),
          animation: createDefinition([
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ]),
          exit: createDefinition(["exit"]),
          drag: createDefinition(["drag", "dragControls"]),
          focus: createDefinition(["whileFocus"]),
          hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: createDefinition([
            "whileTap",
            "onTap",
            "onTapStart",
            "onTapCancel",
          ]),
          pan: createDefinition([
            "onPan",
            "onPanStart",
            "onPanSessionStart",
            "onPanEnd",
          ]),
          inView: createDefinition([
            "whileInView",
            "onViewportEnter",
            "onViewportLeave",
          ]),
        },
        ex = { hasEverUpdated: !1 },
        eP = 1,
        eE = (0, u.createContext)({});
      let VisualElementHandler = class VisualElementHandler extends u.Component {
        getSnapshotBeforeUpdate() {
          let { visualElement: e, props: n } = this.props;
          return e && e.setProps(n), null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      };
      let ek = (0, u.createContext)({}),
        eF = Symbol.for("motionComponentSymbol"),
        eD = new Set([
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "transformValues",
          "custom",
          "inherit",
          "layout",
          "layoutId",
          "layoutDependency",
          "layoutScroll",
          "layoutRoot",
          "onLayoutAnimationStart",
          "onLayoutAnimationComplete",
          "onLayoutMeasure",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "drag",
          "dragControls",
          "dragListener",
          "dragConstraints",
          "dragDirectionLock",
          "dragSnapToOrigin",
          "_dragX",
          "_dragY",
          "dragElastic",
          "dragMomentum",
          "dragPropagation",
          "dragTransition",
          "onHoverStart",
          "onHoverEnd",
          "whileInView",
          "onViewportEnter",
          "onViewportLeave",
          "viewport",
          "whileTap",
          "onTap",
          "onTapStart",
          "onTapCancel",
          "animate",
          "exit",
          "variants",
          "whileHover",
          "whileTap",
          "whileFocus",
          "whileDrag",
          "whileInView",
          "onPan",
          "onPanStart",
          "onPanSessionStart",
          "onPanEnd",
        ]);
      function isValidMotionProp(e) {
        return eD.has(e);
      }
      let shouldForward = (e) => !isValidMotionProp(e);
      try {
        (a = require("@emotion/is-prop-valid").default) &&
          (shouldForward = (e) =>
            e.startsWith("on") ? !isValidMotionProp(e) : a(e));
      } catch (e) {}
      function createLock(e) {
        let n = null;
        return () =>
          null === n &&
          ((n = e),
          () => {
            n = null;
          });
      }
      let eI = createLock("dragHorizontal"),
        eR = createLock("dragVertical"),
        isPrimaryPointer = (e) =>
          "mouse" === e.pointerType
            ? "number" != typeof e.button || e.button <= 0
            : !1 !== e.isPrimary,
        event_info_addPointerInfo = (e) => (n) =>
          isPrimaryPointer(n) &&
          e(
            n,
            (function (e, n = "page") {
              return { point: { x: e[n + "X"], y: e[n + "Y"] } };
            })(n),
          );
      function addPointerEvent(e, n, r, i) {
        return (function (e, n, r, i = { passive: !0 }) {
          return e.addEventListener(n, r, i), () => e.removeEventListener(n, r);
        })(e, n, event_info_addPointerInfo(r), i);
      }
      let useRender = (e, n, r, i, a, o, s) => {
        let c = (0, u.useMemo)(() => {
          let e = {};
          for (let r in n) {
            let i = n[r];
            isMotionValue(i)
              ? (e[r] = i.get())
              : Array.isArray(i) &&
                i.includes(isMotionValue) &&
                (e[r] = i.map(resolveMotionValue));
          }
          return e;
        }, []);
        return (0, u.createElement)(
          e,
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(
                    { ref: i },
                    (function (e, n, r) {
                      let i = {};
                      for (let a in e)
                        ("values" !== a || "object" != typeof e.values) &&
                          (shouldForward(a) ||
                            (!0 === r && isValidMotionProp(a)) ||
                            (!n && !isValidMotionProp(a)) ||
                            (e.draggable && a.startsWith("onDrag"))) &&
                          (i[a] = e[a]);
                      return i;
                    })(n, !1, !1),
                  ),
                  c,
                ),
                { onUpdate: n.onInstanceUpdate },
              ),
              (function (
                e,
                {
                  whileHover: n,
                  onHoverStart: r,
                  onHoverEnd: i,
                  onPointerOver: a,
                  onPointerOut: o,
                },
                s,
              ) {
                return !e && s && (n || r || i)
                  ? {
                      onPointerOver: (e) => {
                        var n;
                        null === (n = s.animationState) ||
                          void 0 === n ||
                          n.setActive(l.Hover, !0),
                          null == a || a(e);
                      },
                      onPointerOut: (e) => {
                        var n;
                        null === (n = s.animationState) ||
                          void 0 === n ||
                          n.setActive(l.Hover, !1),
                          null == o || o(e);
                      },
                    }
                  : {};
              })(o, n, s),
            ),
            (function (
              e,
              {
                whileTap: n,
                onTapStart: r,
                onTap: i,
                onTapCancel: a,
                onPointerDown: o,
              },
              s,
            ) {
              let c = i || r || a || n,
                p = (0, u.useRef)(!1),
                d = (0, u.useRef)(null);
              if (e || !s || !c) return {};
              function removePointerEndListener() {
                var e;
                null === (e = d.current) || void 0 === e || e.call(d),
                  (d.current = null);
              }
              function checkPointerEnd() {
                var e;
                return (
                  removePointerEndListener(),
                  (p.current = !1),
                  null === (e = s.animationState) ||
                    void 0 === e ||
                    e.setActive(l.Tap, !1),
                  !(function () {
                    let e = (function (e) {
                      let n = !1;
                      if ("y" === e) n = eR();
                      else if ("x" === e) n = eI();
                      else {
                        let e = eI(),
                          r = eR();
                        e && r
                          ? (n = () => {
                              e(), r();
                            })
                          : (e && e(), r && r());
                      }
                      return n;
                    })(!0);
                    return !e || (e(), !1);
                  })()
                );
              }
              function onPointerUp(e, n) {
                checkPointerEnd() && (null == i || i(e, n));
              }
              function onPointerCancel(e, n) {
                checkPointerEnd() && (null == a || a(e, n));
              }
              return {
                onPointerDown: event_info_addPointerInfo((e, n) => {
                  var u;
                  if ((removePointerEndListener(), p.current)) return;
                  p.current = !0;
                  let c = { passive: !(r || i || a || o) };
                  (d.current = pipe(
                    addPointerEvent(window, "pointerup", onPointerUp, c),
                    addPointerEvent(
                      window,
                      "pointercancel",
                      onPointerCancel,
                      c,
                    ),
                  )),
                    null === (u = s.animationState) ||
                      void 0 === u ||
                      u.setActive(l.Tap, !0),
                    null == o || o(e),
                    null == r || r(e, n);
                }),
              };
            })(o, n, s),
          ),
        );
      };
      var eO = r(70655);
      let createAxis = () => ({ min: 0, max: 0 }),
        createBox = () => ({ x: createAxis(), y: createAxis() }),
        eL = { current: null },
        eN = { current: !1 },
        ez = Object.keys(eS),
        eB = ez.length,
        ej = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ];
      let VisualElement = class VisualElement {
        constructor(
          { parent: e, props: n, reducedMotionConfig: r, visualState: i },
          a = {},
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.isPresent = !0),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.scheduleRender = () => C.render(this.render, !1, !0));
          let { latestValues: o, renderState: s } = i;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = n.initial ? { ...o } : {}),
            (this.renderState = s),
            (this.parent = e),
            (this.props = n),
            (this.depth = e ? e.depth + 1 : 0),
            (this.reducedMotionConfig = r),
            (this.options = a),
            (this.isControllingVariants = isControllingVariants(n)),
            (this.isVariantNode = isVariantNode(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(e && e.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(n, {});
          for (let e in u) {
            let n = u[e];
            void 0 !== o[e] &&
              isMotionValue(n) &&
              (n.set(o[e], !1), isWillChangeMotionValue(l) && l.add(e));
          }
        }
        scrapeMotionValuesFromProps(e, n) {
          return {};
        }
        mount(e) {
          var n;
          (this.current = e),
            this.projection && this.projection.mount(e),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree =
                null === (n = this.parent) || void 0 === n
                  ? void 0
                  : n.addVariantChild(this)),
            this.values.forEach((e, n) => this.bindToMotionValue(n, e)),
            eN.current ||
              (function () {
                if (((eN.current = !0), ew)) {
                  if (window.matchMedia) {
                    let e = window.matchMedia("(prefers-reduced-motion)"),
                      setReducedMotionPreferences = () =>
                        (eL.current = e.matches);
                    e.addListener(setReducedMotionPreferences),
                      setReducedMotionPreferences();
                  } else eL.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || eL.current)),
            this.parent && this.parent.children.add(this),
            this.setProps(this.props);
        }
        unmount() {
          var e, n, r;
          for (let i in (null === (e = this.projection) ||
            void 0 === e ||
            e.unmount(),
          w.update(this.notifyUpdate),
          w.render(this.render),
          this.valueSubscriptions.forEach((e) => e()),
          null === (n = this.removeFromVariantTree) ||
            void 0 === n ||
            n.call(this),
          null === (r = this.parent) || void 0 === r || r.children.delete(this),
          this.events))
            this.events[i].clear();
          this.current = null;
        }
        bindToMotionValue(e, n) {
          let r = K.has(e),
            i = n.on("change", (n) => {
              (this.latestValues[e] = n),
                this.props.onUpdate && C.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            a = n.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(e, () => {
            i(), a();
          });
        }
        sortNodePosition(e) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === e.type
            ? this.sortInstanceNodePosition(this.current, e.current)
            : 0;
        }
        loadFeatures({ children: e, ...n }, r, i, a, o, s) {
          let l = [];
          for (let e = 0; e < eB; e++) {
            let r = ez[e],
              { isEnabled: i, Component: a } = eS[r];
            i(n) &&
              a &&
              l.push(
                (0, u.createElement)(a, { key: r, ...n, visualElement: this }),
              );
          }
          if (!this.projection && o) {
            this.projection = new o(
              a,
              this.latestValues,
              this.parent && this.parent.projection,
            );
            let {
              layoutId: e,
              layout: r,
              drag: i,
              dragConstraints: l,
              layoutScroll: u,
              layoutRoot: c,
            } = n;
            this.projection.setOptions({
              layoutId: e,
              layout: r,
              alwaysMeasureLayout: !!i || (l && isRefObject(l)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: s,
              layoutScroll: u,
              layoutRoot: c,
            });
          }
          return l;
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props,
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : createBox();
        }
        getStaticValue(e) {
          return this.latestValues[e];
        }
        setStaticValue(e, n) {
          this.latestValues[e] = n;
        }
        makeTargetAnimatable(e, n = !0) {
          return this.makeTargetAnimatableFromInstance(e, this.props, n);
        }
        setProps(e) {
          (e.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender();
          let n = this.props;
          this.props = e;
          for (let n = 0; n < ej.length; n++) {
            let r = ej[n];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let i = e["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          (this.prevMotionValues = (function (e, n, r) {
            let { willChange: i } = n;
            for (let a in n) {
              let o = n[a],
                s = r[a];
              if (isMotionValue(o))
                e.addValue(a, o), isWillChangeMotionValue(i) && i.add(a);
              else if (isMotionValue(s))
                e.addValue(a, motionValue(o, { owner: e })),
                  isWillChangeMotionValue(i) && i.remove(a);
              else if (s !== o) {
                if (e.hasValue(a)) {
                  let n = e.getValue(a);
                  n.hasAnimated || n.set(o);
                } else {
                  let n = e.getStaticValue(a);
                  e.addValue(
                    a,
                    motionValue(void 0 !== n ? n : o, { owner: e }),
                  );
                }
              }
            }
            for (let i in r) void 0 === n[i] && e.removeValue(i);
            return n;
          })(
            this,
            this.scrapeMotionValuesFromProps(e, n),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(e) {
          var n;
          return null === (n = this.props.variants) || void 0 === n
            ? void 0
            : n[e];
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          var e;
          return this.isVariantNode
            ? this
            : null === (e = this.parent) || void 0 === e
              ? void 0
              : e.getClosestVariantNode();
        }
        getVariantContext(e = !1) {
          var n, r;
          if (e)
            return null === (n = this.parent) || void 0 === n
              ? void 0
              : n.getVariantContext();
          if (!this.isControllingVariants) {
            let e =
              (null === (r = this.parent) || void 0 === r
                ? void 0
                : r.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (e.initial = this.props.initial),
              e
            );
          }
          let i = {};
          for (let e = 0; e < e$; e++) {
            let n = eU[e],
              r = this.props[n];
            (isVariantLabel(r) || !1 === r) && (i[n] = r);
          }
          return i;
        }
        addVariantChild(e) {
          var n;
          let r = this.getClosestVariantNode();
          if (r)
            return (
              null === (n = r.variantChildren) || void 0 === n || n.add(e),
              () => r.variantChildren.delete(e)
            );
        }
        addValue(e, n) {
          n !== this.values.get(e) &&
            (this.removeValue(e), this.bindToMotionValue(e, n)),
            this.values.set(e, n),
            (this.latestValues[e] = n.get());
        }
        removeValue(e) {
          var n;
          this.values.delete(e),
            null === (n = this.valueSubscriptions.get(e)) ||
              void 0 === n ||
              n(),
            this.valueSubscriptions.delete(e),
            delete this.latestValues[e],
            this.removeValueFromRenderState(e, this.renderState);
        }
        hasValue(e) {
          return this.values.has(e);
        }
        getValue(e, n) {
          if (this.props.values && this.props.values[e])
            return this.props.values[e];
          let r = this.values.get(e);
          return (
            void 0 === r &&
              void 0 !== n &&
              ((r = motionValue(n, { owner: this })), this.addValue(e, r)),
            r
          );
        }
        readValue(e) {
          return void 0 === this.latestValues[e] && this.current
            ? this.readValueFromInstance(this.current, e, this.options)
            : this.latestValues[e];
        }
        setBaseTarget(e, n) {
          this.baseTarget[e] = n;
        }
        getBaseTarget(e) {
          var n;
          let { initial: r } = this.props,
            i =
              "string" == typeof r || "object" == typeof r
                ? null === (n = resolveVariantFromProps(this.props, r)) ||
                  void 0 === n
                  ? void 0
                  : n[e]
                : void 0;
          if (r && void 0 !== i) return i;
          let a = this.getBaseTargetFromProps(this.props, e);
          return void 0 === a || isMotionValue(a)
            ? void 0 !== this.initialValues[e] && void 0 === i
              ? void 0
              : this.baseTarget[e]
            : a;
        }
        on(e, n) {
          return (
            this.events[e] || (this.events[e] = new SubscriptionManager()),
            this.events[e].add(n)
          );
        }
        notify(e, ...n) {
          var r;
          null === (r = this.events[e]) || void 0 === r || r.notify(...n);
        }
      };
      let eU = ["initial", ...ey],
        e$ = eU.length;
      var eZ = r(99477);
      let setVector = (e, n) => (r) => (i, a) => {
          void 0 === i[e] && (i[e] = new eZ.Vector3(n));
          let o = i[e];
          o.setComponent(r, a);
        },
        setColor = (e) => (n, r) => {
          void 0 === n[e] && (n[e] = new eZ.Color(r)), n[e].set(r);
        },
        e_ = setVector("scale", 1),
        eH = setVector("position", 0),
        eX =
          ((o = "rotation"),
          (e) => (n, r) => {
            void 0 === n[o] && (n[o] = new eZ.Euler(0));
            let i = n[o];
            i[e] = r;
          }),
        eW = {
          x: eH(0),
          y: eH(1),
          z: eH(2),
          scale: (e, n) => {
            void 0 === e.scale && (e.scale = new eZ.Vector3(1));
            let r = e.scale;
            r.set(n, n, n);
          },
          scaleX: e_(0),
          scaleY: e_(1),
          scaleZ: e_(2),
          rotateX: eX("x"),
          rotateY: eX("y"),
          rotateZ: eX("z"),
          color: setColor("color"),
          specular: setColor("specular"),
        },
        readVector = (e, n) => (r) => (i) => {
          let a = i[e];
          return a ? a[r] : n;
        },
        eY = readVector("position", 0),
        eq = readVector("scale", 1),
        eK = readVector("rotation", 0),
        eG = {
          x: eY("x"),
          y: eY("y"),
          z: eY("z"),
          scale: eq("x"),
          scaleX: eq("x"),
          scaleY: eq("y"),
          scaleZ: eq("z"),
          rotateX: eK("x"),
          rotateY: eK("y"),
          rotateZ: eK("z"),
        },
        eJ = ["x", "y", "z"],
        eQ = {
          "position-x": "x",
          "position-y": "y",
          "position-z": "z",
          "rotation-x": "rotateX",
          "rotation-y": "rotateY",
          "rotation-z": "rotateZ",
          "scale-x": "scaleX",
          "scale-y": "scaleY",
          "scale-z": "scaleZ",
        },
        scrapeMotionValuesFromProps = (e, n) => {
          let r = {};
          for (let i in e) {
            let a = e[i];
            if (isMotionValue(a) || isMotionValue(n[i])) r[eQ[i] || i] = a;
            else if (Array.isArray(a))
              for (let e = 0; e < a.length; e++) {
                let o = a[e];
                if (
                  isMotionValue(o) ||
                  (Array.isArray(n[i]) && isMotionValue(n[i][e]))
                ) {
                  let n = eQ[i + "-" + eJ[e]];
                  r[n] = o;
                }
              }
          }
          return r;
        };
      let ThreeVisualElement = class ThreeVisualElement extends VisualElement {
        constructor() {
          super(...arguments), (this.type = "three");
        }
        readValueFromInstance(e, n) {
          var r;
          return eG[n]
            ? eG[n](e)
            : (void 0 === (r = e[n])
                ? void 0
                : r instanceof eZ.Color
                  ? r.getStyle()
                  : r) || 0;
        }
        getBaseTargetFromProps() {}
        sortInstanceNodePosition(e, n) {
          return e.id - n.id;
        }
        makeTargetAnimatableFromInstance(e) {
          var { transition: n, transitionEnd: r } = e,
            i = (0, eO._T)(e, ["transition", "transitionEnd"]);
          return (
            !(function (e, n, r) {
              var i, a;
              let o = Object.keys(n).filter((n) => !e.hasValue(n)),
                s = o.length;
              if (s)
                for (let l = 0; l < s; l++) {
                  let s = o[l],
                    u = n[s],
                    c = null;
                  Array.isArray(u) && (c = u[0]),
                    null === c &&
                      (c =
                        null !==
                          (a =
                            null !== (i = r[s]) && void 0 !== i
                              ? i
                              : e.readValue(s)) && void 0 !== a
                          ? a
                          : n[s]),
                    null != c &&
                      ("string" == typeof c &&
                      (isNumericalString(c) || isZeroValueString(c))
                        ? (c = parseFloat(c))
                        : !findValueType(c) &&
                          Z.test(u) &&
                          (c = animatable_none_getAnimatableNone(s, u)),
                      e.addValue(s, motionValue(c, { owner: e })),
                      void 0 === r[s] && (r[s] = c),
                      null !== c && e.setBaseTarget(s, c));
                }
            })(this, i, {}),
            Object.assign(Object.assign({}, i), {
              transition: n,
              transitionEnd: r,
            })
          );
        }
        removeValueFromRenderState() {}
        measureInstanceViewportBox() {
          return createBox();
        }
        scrapeMotionValuesFromProps(e, n) {
          return scrapeMotionValuesFromProps(e, n);
        }
        build(e, n) {
          for (let r in n) e[r] = n[r];
        }
        renderInstance(e, n) {
          for (let r in n)
            eW[r]
              ? eW[r](e, n[r])
              : ("opacity" !== r || e.transparent || (e.transparent = !0),
                (e[r] = n[r]));
        }
      };
      let createVisualElement = (e, n) => new ThreeVisualElement(n, {}),
        e0 =
          ((s = {
            scrapeMotionValuesFromProps: scrapeMotionValuesFromProps,
            createRenderState: () => ({}),
          }),
          (e, n) => {
            let r = (0, u.useContext)(p),
              i = (0, u.useContext)(c),
              make = () =>
                (function (
                  {
                    scrapeMotionValuesFromProps: e,
                    createRenderState: n,
                    onMount: r,
                  },
                  i,
                  a,
                  o,
                ) {
                  let s = {
                    latestValues: (function (e, n, r, i) {
                      let a = {},
                        o = i(e, {});
                      for (let e in o) a[e] = resolveMotionValue(o[e]);
                      let { initial: s, animate: l } = e,
                        u = isControllingVariants(e),
                        c = isVariantNode(e);
                      n &&
                        c &&
                        !u &&
                        !1 !== e.inherit &&
                        (void 0 === s && (s = n.initial),
                        void 0 === l && (l = n.animate));
                      let p = !!r && !1 === r.initial;
                      p = p || !1 === s;
                      let d = p ? l : s;
                      if (
                        d &&
                        "boolean" != typeof d &&
                        !isAnimationControls(d)
                      ) {
                        let n = Array.isArray(d) ? d : [d];
                        n.forEach((n) => {
                          let r = resolveVariantFromProps(e, n);
                          if (!r) return;
                          let { transitionEnd: i, transition: o, ...s } = r;
                          for (let e in s) {
                            let n = s[e];
                            if (Array.isArray(n)) {
                              let e = p ? n.length - 1 : 0;
                              n = n[e];
                            }
                            null !== n && (a[e] = n);
                          }
                          for (let e in i) a[e] = i[e];
                        });
                      }
                      return a;
                    })(i, a, o, e),
                    renderState: n(),
                  };
                  return r && (s.mount = (e) => r(i, e, s)), s;
                })(s, e, r, i);
            return n ? make() : useConstant(make);
          }),
        e1 = Object.assign({}, eA);
      function custom(e) {
        return (function ({
          preloadedFeatures: e,
          createVisualElement: n,
          projectionNodeConstructor: r,
          useRender: i,
          useVisualState: a,
          Component: o,
        }) {
          e &&
            (function (e) {
              for (let n in e)
                "projectionNodeConstructor" === n
                  ? (eS.projectionNodeConstructor = e[n])
                  : (eS[n].Component = e[n]);
            })(e);
          let s = (0, u.forwardRef)(function (s, l) {
            var d;
            let h = {
                ...(0, u.useContext)(eC),
                ...s,
                layoutId: (function ({ layoutId: e }) {
                  let n = (0, u.useContext)(eE).id;
                  return n && void 0 !== e ? n + "-" + e : e;
                })(s),
              },
              { isStatic: m } = h,
              f = null,
              g = (function (e) {
                let { initial: n, animate: r } = (function (e, n) {
                  if (isControllingVariants(e)) {
                    let { initial: n, animate: r } = e;
                    return {
                      initial: !1 === n || isVariantLabel(n) ? n : void 0,
                      animate: isVariantLabel(r) ? r : void 0,
                    };
                  }
                  return !1 !== e.inherit ? n : {};
                })(e, (0, u.useContext)(p));
                return (0, u.useMemo)(
                  () => ({ initial: n, animate: r }),
                  [variantLabelsAsDependency(n), variantLabelsAsDependency(r)],
                );
              })(s),
              v = m
                ? void 0
                : useConstant(() => {
                    if (ex.hasEverUpdated) return eP++;
                  }),
              y = a(s, m);
            if (!m && ew) {
              g.visualElement = (function (e, n, r, i) {
                let a = (0, u.useContext)(p).visualElement,
                  o = (0, u.useContext)(eM),
                  s = (0, u.useContext)(c),
                  l = (0, u.useContext)(eC).reducedMotion,
                  d = (0, u.useRef)();
                (i = i || o.renderer),
                  !d.current &&
                    i &&
                    (d.current = i(e, {
                      visualState: n,
                      parent: a,
                      props: r,
                      presenceId: s ? s.id : void 0,
                      blockInitialAnimation: !!s && !1 === s.initial,
                      reducedMotionConfig: l,
                    }));
                let h = d.current;
                eT(() => {
                  h && h.render();
                });
                let m = window.HandoffAppearAnimations ? eT : u.useEffect;
                return (
                  m(() => {
                    h && h.animationState && h.animationState.animateChanges();
                  }),
                  h
                );
              })(o, y, h, n);
              let i = (0, u.useContext)(eM).strict,
                a = (0, u.useContext)(ek);
              g.visualElement &&
                (f = g.visualElement.loadFeatures(
                  h,
                  i,
                  e,
                  v,
                  r || eS.projectionNodeConstructor,
                  a,
                ));
            }
            return u.createElement(
              VisualElementHandler,
              { visualElement: g.visualElement, props: h },
              f,
              u.createElement(
                p.Provider,
                { value: g },
                i(
                  o,
                  s,
                  v,
                  ((d = g.visualElement),
                  (0, u.useCallback)(
                    (e) => {
                      e && y.mount && y.mount(e),
                        d && (e ? d.mount(e) : d.unmount()),
                        l &&
                          ("function" == typeof l
                            ? l(e)
                            : isRefObject(l) && (l.current = e));
                    },
                    [d],
                  )),
                  y,
                  m,
                  g.visualElement,
                ),
              ),
            );
          });
          return (s[eF] = o), s;
        })({
          Component: e,
          preloadedFeatures: e1,
          useRender: useRender,
          useVisualState: e0,
          createVisualElement: createVisualElement,
        });
      }
      let e5 = new Map(),
        e2 = new Proxy(custom, {
          get: (e, n) => (e5.has(n) || e5.set(n, custom(n)), e5.get(n)),
        });
    },
  },
]);
