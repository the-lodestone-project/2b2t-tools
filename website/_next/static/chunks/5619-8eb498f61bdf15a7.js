(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5619],
  {
    64063: function (e) {
      "use strict";
      e.exports = function equal(e, t) {
        if (e === t) return !0;
        if (e && t && "object" == typeof e && "object" == typeof t) {
          if (e.constructor !== t.constructor) return !1;
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!equal(e[r], t[r])) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === t.source && e.flags === t.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === t.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === t.toString();
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!Object.prototype.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            var n,
              r,
              o,
              l = o[r];
            if (!equal(e[l], t[l])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      };
    },
    6998: function (e) {
      e.exports = function (e, t) {
        if ((void 0 == t && (t = { fuzzy: !0 }), /youtu\.?be/.test(e))) {
          var n,
            r = [
              /youtu\.be\/([^#\&\?]{11})/,
              /\?v=([^#\&\?]{11})/,
              /\&v=([^#\&\?]{11})/,
              /embed\/([^#\&\?]{11})/,
              /\/v\/([^#\&\?]{11})/,
            ];
          for (n = 0; n < r.length; ++n)
            if (r[n].test(e)) return r[n].exec(e)[1];
          if (t.fuzzy) {
            var o = e.split(/[\/\&\?=#\.\s]/g);
            for (n = 0; n < o.length; ++n)
              if (/^[^#\&\?]{11}$/.test(o[n])) return o[n];
          }
        }
        return null;
      };
    },
    37288: function (e, t, n) {
      "use strict";
      function groq(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        let o = e.length - 1;
        return e.slice(0, o).reduce((e, t, r) => e + t + n[r], "") + e[o];
      }
      n.d(t, {
        Z: function () {
          return groq;
        },
      });
    },
    49090: function (e) {
      function stdOnEnd(e, t) {
        (e.onload = function () {
          (this.onerror = this.onload = null), t(null, e);
        }),
          (e.onerror = function () {
            (this.onerror = this.onload = null),
              t(Error("Failed to load " + this.src), e);
          });
      }
      e.exports = function (e, t, n) {
        var r = document.head || document.getElementsByTagName("head")[0],
          o = document.createElement("script");
        "function" == typeof t && ((n = t), (t = {})),
          (t = t || {}),
          (n = n || function () {}),
          (o.type = t.type || "text/javascript"),
          (o.charset = t.charset || "utf8"),
          (o.async = !("async" in t) || !!t.async),
          (o.src = e),
          t.attrs &&
            (function (e, t) {
              for (var n in t) e.setAttribute(n, t[n]);
            })(o, t.attrs),
          t.text && (o.text = "" + t.text),
          ("onload" in o
            ? stdOnEnd
            : function (e, t) {
                e.onreadystatechange = function () {
                  ("complete" == this.readyState ||
                    "loaded" == this.readyState) &&
                    ((this.onreadystatechange = null), t(null, e));
                };
              })(o, n),
          o.onload || stdOnEnd(o, n),
          r.appendChild(o);
      };
    },
    53219: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(84297);
      let o = (0, r.Z)("ArrowLeft", [
        ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
        ["path", { d: "M19 12H5", key: "x3x0zl" }],
      ]);
    },
    56989: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(84297);
      let o = (0, r.Z)("Info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]);
    },
    13913: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var r = n(45697),
        o = n.n(r),
        l = n(67294),
        a = n(64063),
        i = n.n(a),
        s = n(11062),
        u = n.n(s),
        c = Object.defineProperty,
        d = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        f = Object.getOwnPropertySymbols,
        y = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, n) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        __spreadValues = (e, t) => {
          for (var n in t || (t = {}))
            y.call(t, n) && __defNormalProp(e, n, t[n]);
          if (f)
            for (var n of f(t)) h.call(t, n) && __defNormalProp(e, n, t[n]);
          return e;
        },
        __spreadProps = (e, t) => d(e, p(t)),
        __async = (e, t, n) =>
          new Promise((r, o) => {
            var fulfilled = (e) => {
                try {
                  step(n.next(e));
                } catch (e) {
                  o(e);
                }
              },
              rejected = (e) => {
                try {
                  step(n.throw(e));
                } catch (e) {
                  o(e);
                }
              },
              step = (e) =>
                e.done
                  ? r(e.value)
                  : Promise.resolve(e.value).then(fulfilled, rejected);
            step((n = n.apply(e, t)).next());
          });
      function filterResetOptions(e = {}) {
        return __spreadProps(__spreadValues({}, e), {
          height: 0,
          width: 0,
          playerVars: __spreadProps(__spreadValues({}, e.playerVars), {
            autoplay: 0,
            start: 0,
            end: 0,
          }),
        });
      }
      var m = {
          videoId: o().string,
          id: o().string,
          className: o().string,
          iframeClassName: o().string,
          style: o().object,
          title: o().string,
          loading: o().oneOf(["lazy", "eager"]),
          opts: o().objectOf(o().any),
          onReady: o().func,
          onError: o().func,
          onPlay: o().func,
          onPause: o().func,
          onEnd: o().func,
          onStateChange: o().func,
          onPlaybackRateChange: o().func,
          onPlaybackQualityChange: o().func,
        },
        g = class extends l.Component {
          constructor(e) {
            super(e),
              (this.destroyPlayerPromise = void 0),
              (this.onPlayerReady = (e) => {
                var t, n;
                return null == (n = (t = this.props).onReady)
                  ? void 0
                  : n.call(t, e);
              }),
              (this.onPlayerError = (e) => {
                var t, n;
                return null == (n = (t = this.props).onError)
                  ? void 0
                  : n.call(t, e);
              }),
              (this.onPlayerStateChange = (e) => {
                var t, n, r, o, l, a, i, s;
                switch (
                  (null == (n = (t = this.props).onStateChange) || n.call(t, e),
                  e.data)
                ) {
                  case g.PlayerState.ENDED:
                    null == (o = (r = this.props).onEnd) || o.call(r, e);
                    break;
                  case g.PlayerState.PLAYING:
                    null == (a = (l = this.props).onPlay) || a.call(l, e);
                    break;
                  case g.PlayerState.PAUSED:
                    null == (s = (i = this.props).onPause) || s.call(i, e);
                }
              }),
              (this.onPlayerPlaybackRateChange = (e) => {
                var t, n;
                return null == (n = (t = this.props).onPlaybackRateChange)
                  ? void 0
                  : n.call(t, e);
              }),
              (this.onPlayerPlaybackQualityChange = (e) => {
                var t, n;
                return null == (n = (t = this.props).onPlaybackQualityChange)
                  ? void 0
                  : n.call(t, e);
              }),
              (this.destroyPlayer = () =>
                this.internalPlayer
                  ? ((this.destroyPlayerPromise = this.internalPlayer
                      .destroy()
                      .then(() => (this.destroyPlayerPromise = void 0))),
                    this.destroyPlayerPromise)
                  : Promise.resolve()),
              (this.createPlayer = () => {
                if ("undefined" == typeof document) return;
                if (this.destroyPlayerPromise) {
                  this.destroyPlayerPromise.then(this.createPlayer);
                  return;
                }
                let e = __spreadProps(__spreadValues({}, this.props.opts), {
                  videoId: this.props.videoId,
                });
                (this.internalPlayer = u()(this.container, e)),
                  this.internalPlayer.on("ready", this.onPlayerReady),
                  this.internalPlayer.on("error", this.onPlayerError),
                  this.internalPlayer.on(
                    "stateChange",
                    this.onPlayerStateChange,
                  ),
                  this.internalPlayer.on(
                    "playbackRateChange",
                    this.onPlayerPlaybackRateChange,
                  ),
                  this.internalPlayer.on(
                    "playbackQualityChange",
                    this.onPlayerPlaybackQualityChange,
                  ),
                  (this.props.title || this.props.loading) &&
                    this.internalPlayer.getIframe().then((e) => {
                      this.props.title &&
                        e.setAttribute("title", this.props.title),
                        this.props.loading &&
                          e.setAttribute("loading", this.props.loading);
                    });
              }),
              (this.resetPlayer = () =>
                this.destroyPlayer().then(this.createPlayer)),
              (this.updatePlayer = () => {
                var e;
                null == (e = this.internalPlayer) ||
                  e.getIframe().then((e) => {
                    this.props.id
                      ? e.setAttribute("id", this.props.id)
                      : e.removeAttribute("id"),
                      this.props.iframeClassName
                        ? e.setAttribute("class", this.props.iframeClassName)
                        : e.removeAttribute("class"),
                      this.props.opts && this.props.opts.width
                        ? e.setAttribute(
                            "width",
                            this.props.opts.width.toString(),
                          )
                        : e.removeAttribute("width"),
                      this.props.opts && this.props.opts.height
                        ? e.setAttribute(
                            "height",
                            this.props.opts.height.toString(),
                          )
                        : e.removeAttribute("height"),
                      this.props.title
                        ? e.setAttribute("title", this.props.title)
                        : e.setAttribute("title", "YouTube video player"),
                      this.props.loading
                        ? e.setAttribute("loading", this.props.loading)
                        : e.removeAttribute("loading");
                  });
              }),
              (this.getInternalPlayer = () => this.internalPlayer),
              (this.updateVideo = () => {
                var e, t, n, r;
                if (
                  void 0 === this.props.videoId ||
                  null === this.props.videoId
                ) {
                  null == (e = this.internalPlayer) || e.stopVideo();
                  return;
                }
                let o = !1,
                  l = { videoId: this.props.videoId };
                if (
                  ((null == (t = this.props.opts) ? void 0 : t.playerVars) &&
                    ((o = 1 === this.props.opts.playerVars.autoplay),
                    "start" in this.props.opts.playerVars &&
                      (l.startSeconds = this.props.opts.playerVars.start),
                    "end" in this.props.opts.playerVars &&
                      (l.endSeconds = this.props.opts.playerVars.end)),
                  o)
                ) {
                  null == (n = this.internalPlayer) || n.loadVideoById(l);
                  return;
                }
                null == (r = this.internalPlayer) || r.cueVideoById(l);
              }),
              (this.refContainer = (e) => {
                this.container = e;
              }),
              (this.container = null),
              (this.internalPlayer = null);
          }
          componentDidMount() {
            this.createPlayer();
          }
          componentDidUpdate(e) {
            return __async(this, null, function* () {
              var t, n, r, o, l, a;
              (t = this.props),
                (e.id !== t.id ||
                  e.className !== t.className ||
                  (null == (n = e.opts) ? void 0 : n.width) !==
                    (null == (r = t.opts) ? void 0 : r.width) ||
                  (null == (o = e.opts) ? void 0 : o.height) !==
                    (null == (l = t.opts) ? void 0 : l.height) ||
                  e.iframeClassName !== t.iframeClassName ||
                  e.title !== t.title) &&
                  this.updatePlayer(),
                (a = this.props),
                (e.videoId === a.videoId &&
                  i()(
                    filterResetOptions(e.opts),
                    filterResetOptions(a.opts),
                  )) ||
                  (yield this.resetPlayer()),
                (function (e, t) {
                  var n, r;
                  if (e.videoId !== t.videoId) return !0;
                  let o = (null == (n = e.opts) ? void 0 : n.playerVars) || {},
                    l = (null == (r = t.opts) ? void 0 : r.playerVars) || {};
                  return o.start !== l.start || o.end !== l.end;
                })(e, this.props) && this.updateVideo();
            });
          }
          componentWillUnmount() {
            this.destroyPlayer();
          }
          render() {
            return l.createElement(
              "div",
              { className: this.props.className, style: this.props.style },
              l.createElement("div", {
                id: this.props.id,
                className: this.props.iframeClassName,
                ref: this.refContainer,
              }),
            );
          }
        };
      (g.propTypes = m),
        (g.defaultProps = {
          videoId: "",
          id: "",
          className: "",
          iframeClassName: "",
          style: {},
          title: "",
          loading: void 0,
          opts: {},
          onReady: () => {},
          onError: () => {},
          onPlay: () => {},
          onPause: () => {},
          onEnd: () => {},
          onStateChange: () => {},
          onPlaybackRateChange: () => {},
          onPlaybackQualityChange: () => {},
        }),
        (g.PlayerState = {
          UNSTARTED: -1,
          ENDED: 0,
          PLAYING: 1,
          PAUSED: 2,
          BUFFERING: 3,
          CUED: 5,
        });
      var b = g;
    },
    33988: function (e) {
      "use strict";
      e.exports = function () {
        var e = {},
          t = {};
        return (
          (e.on = function (e, n) {
            var r = { name: e, handler: n };
            return (t[e] = t[e] || []), t[e].unshift(r), r;
          }),
          (e.off = function (e) {
            var n = t[e.name].indexOf(e);
            -1 !== n && t[e.name].splice(n, 1);
          }),
          (e.trigger = function (e, n) {
            var r,
              o = t[e];
            if (o) for (r = o.length; r--; ) o[r].handler(n);
          }),
          e
        );
      };
    },
    66006: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (r = n(22275)) && r.__esModule ? r : { default: r };
      (t.default = {
        pauseVideo: {
          acceptableStates: [o.default.ENDED, o.default.PAUSED],
          stateChangeRequired: !1,
        },
        playVideo: {
          acceptableStates: [o.default.ENDED, o.default.PLAYING],
          stateChangeRequired: !1,
        },
        seekTo: {
          acceptableStates: [
            o.default.ENDED,
            o.default.PLAYING,
            o.default.PAUSED,
          ],
          stateChangeRequired: !0,
          timeout: 3e3,
        },
      }),
        (e.exports = t.default);
    },
    89125: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = _interopRequireDefault(n(9215)),
        o = _interopRequireDefault(n(28255)),
        l = _interopRequireDefault(n(65279)),
        a = _interopRequireDefault(n(66006));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = (0, r.default)("youtube-player"),
        s = {};
      (s.proxyEvents = function (e) {
        var t = {},
          _loop = function (n) {
            var r = "on" + n.slice(0, 1).toUpperCase() + n.slice(1);
            t[r] = function (t) {
              i('event "%s"', r, t), e.trigger(n, t);
            };
          },
          n = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var a, s = l.default[Symbol.iterator]();
            !(n = (a = s.next()).done);
            n = !0
          ) {
            var u = a.value;
            _loop(u);
          }
        } catch (e) {
          (r = !0), (o = e);
        } finally {
          try {
            !n && s.return && s.return();
          } finally {
            if (r) throw o;
          }
        }
        return t;
      }),
        (s.promisifyPlayer = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = {},
            _loop2 = function (r) {
              t && a.default[r]
                ? (n[r] = function () {
                    for (
                      var t = arguments.length, n = Array(t), o = 0;
                      o < t;
                      o++
                    )
                      n[o] = arguments[o];
                    return e.then(function (e) {
                      var t = a.default[r],
                        o = e.getPlayerState(),
                        l = e[r].apply(e, n);
                      return t.stateChangeRequired ||
                        (Array.isArray(t.acceptableStates) &&
                          -1 === t.acceptableStates.indexOf(o))
                        ? new Promise(function (n) {
                            e.addEventListener(
                              "onStateChange",
                              function onPlayerStateChange() {
                                var r = e.getPlayerState(),
                                  o = void 0;
                                "number" == typeof t.timeout &&
                                  (o = setTimeout(function () {
                                    e.removeEventListener(
                                      "onStateChange",
                                      onPlayerStateChange,
                                    ),
                                      n();
                                  }, t.timeout)),
                                  Array.isArray(t.acceptableStates) &&
                                    -1 !== t.acceptableStates.indexOf(r) &&
                                    (e.removeEventListener(
                                      "onStateChange",
                                      onPlayerStateChange,
                                    ),
                                    clearTimeout(o),
                                    n());
                              },
                            );
                          }).then(function () {
                            return l;
                          })
                        : l;
                    });
                  })
                : (n[r] = function () {
                    for (
                      var t = arguments.length, n = Array(t), o = 0;
                      o < t;
                      o++
                    )
                      n[o] = arguments[o];
                    return e.then(function (e) {
                      return e[r].apply(e, n);
                    });
                  });
            },
            r = !0,
            l = !1,
            i = void 0;
          try {
            for (
              var s, u = o.default[Symbol.iterator]();
              !(r = (s = u.next()).done);
              r = !0
            ) {
              var c = s.value;
              _loop2(c);
            }
          } catch (e) {
            (l = !0), (i = e);
          } finally {
            try {
              !r && u.return && u.return();
            } finally {
              if (l) throw i;
            }
          }
          return n;
        }),
        (t.default = s),
        (e.exports = t.default);
    },
    22275: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          BUFFERING: 3,
          ENDED: 0,
          PAUSED: 2,
          PLAYING: 1,
          UNSTARTED: -1,
          VIDEO_CUED: 5,
        }),
        (e.exports = t.default);
    },
    65279: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = [
          "ready",
          "stateChange",
          "playbackQualityChange",
          "playbackRateChange",
          "error",
          "apiChange",
          "volumeChange",
        ]),
        (e.exports = t.default);
    },
    28255: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = [
          "cueVideoById",
          "loadVideoById",
          "cueVideoByUrl",
          "loadVideoByUrl",
          "playVideo",
          "pauseVideo",
          "stopVideo",
          "getVideoLoadedFraction",
          "cuePlaylist",
          "loadPlaylist",
          "nextVideo",
          "previousVideo",
          "playVideoAt",
          "setShuffle",
          "setLoop",
          "getPlaylist",
          "getPlaylistIndex",
          "setOption",
          "mute",
          "unMute",
          "isMuted",
          "setVolume",
          "getVolume",
          "seekTo",
          "getPlayerState",
          "getPlaybackRate",
          "setPlaybackRate",
          "getAvailablePlaybackRates",
          "getPlaybackQuality",
          "setPlaybackQuality",
          "getAvailableQualityLevels",
          "getCurrentTime",
          "getDuration",
          "removeEventListener",
          "getVideoUrl",
          "getVideoEmbedCode",
          "getOptions",
          "getOption",
          "addEventListener",
          "destroy",
          "setSize",
          "getIframe",
        ]),
        (e.exports = t.default);
    },
    11062: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        o = _interopRequireDefault(n(33988)),
        l = _interopRequireDefault(n(55900)),
        a = _interopRequireDefault(n(89125));
      function _interopRequireDefault(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var i = void 0;
      (t.default = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          s = (0, o.default)();
        if ((i || (i = (0, l.default)(s)), t.events))
          throw Error("Event handlers cannot be overwritten.");
        if ("string" == typeof e && !document.getElementById(e))
          throw Error('Element "' + e + '" does not exist.');
        t.events = a.default.proxyEvents(s);
        var u = new Promise(function (n) {
            (void 0 === e ? "undefined" : r(e)) === "object" &&
            e.playVideo instanceof Function
              ? n(e)
              : i.then(function (r) {
                  var o = new r.Player(e, t);
                  return (
                    s.on("ready", function () {
                      n(o);
                    }),
                    null
                  );
                });
          }),
          c = a.default.promisifyPlayer(u, n);
        return (c.on = s.on), (c.off = s.off), c;
      }),
        (e.exports = t.default);
    },
    55900: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r,
        o = (r = n(49090)) && r.__esModule ? r : { default: r };
      (t.default = function (e) {
        return new Promise(function (t) {
          if (
            window.YT &&
            window.YT.Player &&
            window.YT.Player instanceof Function
          ) {
            t(window.YT);
            return;
          }
          var n = "http:" === window.location.protocol ? "http:" : "https:";
          (0, o.default)(n + "//www.youtube.com/iframe_api", function (t) {
            t && e.trigger("error", t);
          });
          var r = window.onYouTubeIframeAPIReady;
          window.onYouTubeIframeAPIReady = function () {
            r && r(), t(window.YT);
          };
        });
      }),
        (e.exports = t.default);
    },
    9215: function (e, t, n) {
      var r = n(34155);
      function load() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        return !e && void 0 !== r && "env" in r && (e = r.env.DEBUG), e;
      }
      ((t = e.exports = n(55046)).log = function () {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var n = this.useColors;
          if (
            ((e[0] =
              (n ? "%c" : "") +
              this.namespace +
              (n ? " %c" : " ") +
              e[0] +
              (n ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            n)
          ) {
            var r = "color: " + this.color;
            e.splice(1, 0, r, "color: inherit");
            var o = 0,
              l = 0;
            e[0].replace(/%[a-zA-Z%]/g, function (e) {
              "%%" !== e && (o++, "%c" === e && (l = o));
            }),
              e.splice(l, 0, r);
          }
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (e) {}
        }),
        (t.load = load),
        (t.useColors = function () {
          return (
            ("undefined" != typeof window &&
              !!window.process &&
              "renderer" === window.process.type) ||
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        }),
        t.enable(load());
    },
    55046: function (e, t, n) {
      var r;
      function createDebug(e) {
        function debug() {
          if (debug.enabled) {
            var e = +new Date(),
              n = e - (r || e);
            (debug.diff = n), (debug.prev = r), (debug.curr = e), (r = e);
            for (var o = Array(arguments.length), l = 0; l < o.length; l++)
              o[l] = arguments[l];
            (o[0] = t.coerce(o[0])), "string" != typeof o[0] && o.unshift("%O");
            var a = 0;
            (o[0] = o[0].replace(/%([a-zA-Z%])/g, function (e, n) {
              if ("%%" === e) return e;
              a++;
              var r = t.formatters[n];
              if ("function" == typeof r) {
                var l = o[a];
                (e = r.call(debug, l)), o.splice(a, 1), a--;
              }
              return e;
            })),
              t.formatArgs.call(debug, o),
              (debug.log || t.log || console.log.bind(console)).apply(debug, o);
          }
        }
        return (
          (debug.namespace = e),
          (debug.enabled = t.enabled(e)),
          (debug.useColors = t.useColors()),
          (debug.color = (function (e) {
            var n,
              r = 0;
            for (n in e) r = ((r << 5) - r + e.charCodeAt(n)) | 0;
            return t.colors[Math.abs(r) % t.colors.length];
          })(e)),
          "function" == typeof t.init && t.init(debug),
          debug
        );
      }
      ((t =
        e.exports =
        createDebug.debug =
        createDebug.default =
          createDebug).coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }),
        (t.disable = function () {
          t.enable("");
        }),
        (t.enable = function (e) {
          t.save(e), (t.names = []), (t.skips = []);
          for (
            var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
              r = n.length,
              o = 0;
            o < r;
            o++
          )
            n[o] &&
              ("-" === (e = n[o].replace(/\*/g, ".*?"))[0]
                ? t.skips.push(RegExp("^" + e.substr(1) + "$"))
                : t.names.push(RegExp("^" + e + "$")));
        }),
        (t.enabled = function (e) {
          var n, r;
          for (n = 0, r = t.skips.length; n < r; n++)
            if (t.skips[n].test(e)) return !1;
          for (n = 0, r = t.names.length; n < r; n++)
            if (t.names[n].test(e)) return !0;
          return !1;
        }),
        (t.humanize = n(14680)),
        (t.names = []),
        (t.skips = []),
        (t.formatters = {});
    },
    14680: function (e) {
      function plural(e, t, n) {
        return e < t
          ? void 0
          : e < 1.5 * t
            ? Math.floor(e / t) + " " + n
            : Math.ceil(e / t) + " " + n + "s";
      }
      e.exports = function (e, t) {
        t = t || {};
        var n = typeof e;
        if ("string" === n && e.length > 0)
          return (function (e) {
            if (!((e = String(e)).length > 100)) {
              var t =
                /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
                  e,
                );
              if (t) {
                var n = parseFloat(t[1]);
                switch ((t[2] || "ms").toLowerCase()) {
                  case "years":
                  case "year":
                  case "yrs":
                  case "yr":
                  case "y":
                    return 315576e5 * n;
                  case "days":
                  case "day":
                  case "d":
                    return 864e5 * n;
                  case "hours":
                  case "hour":
                  case "hrs":
                  case "hr":
                  case "h":
                    return 36e5 * n;
                  case "minutes":
                  case "minute":
                  case "mins":
                  case "min":
                  case "m":
                    return 6e4 * n;
                  case "seconds":
                  case "second":
                  case "secs":
                  case "sec":
                  case "s":
                    return 1e3 * n;
                  case "milliseconds":
                  case "millisecond":
                  case "msecs":
                  case "msec":
                  case "ms":
                    return n;
                  default:
                    return;
                }
              }
            }
          })(e);
        if ("number" === n && !1 === isNaN(e))
          return t.long
            ? plural(e, 864e5, "day") ||
                plural(e, 36e5, "hour") ||
                plural(e, 6e4, "minute") ||
                plural(e, 1e3, "second") ||
                e + " ms"
            : e >= 864e5
              ? Math.round(e / 864e5) + "d"
              : e >= 36e5
                ? Math.round(e / 36e5) + "h"
                : e >= 6e4
                  ? Math.round(e / 6e4) + "m"
                  : e >= 1e3
                    ? Math.round(e / 1e3) + "s"
                    : e + "ms";
        throw Error(
          "val is not a non-empty string or a valid number. val=" +
            JSON.stringify(e),
        );
      };
    },
    32746: function (e, t, n) {
      e.exports.jsxRuntime = n(85893);
    },
    67373: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          MDXContext: function () {
            return r.pC;
          },
          MDXProvider: function () {
            return r.Zo;
          },
          useMDXComponents: function () {
            return r.ah;
          },
          withMDXComponents: function () {
            return r.NF;
          },
        });
      var r = n(11151);
    },
    11151: function (e, t, n) {
      "use strict";
      n.d(t, {
        NF: function () {
          return withMDXComponents;
        },
        Zo: function () {
          return MDXProvider;
        },
        ah: function () {
          return useMDXComponents;
        },
        pC: function () {
          return o;
        },
      });
      var r = n(67294);
      let o = r.createContext({});
      function withMDXComponents(e) {
        return function (t) {
          let n = useMDXComponents(t.components);
          return r.createElement(e, { ...t, allComponents: n });
        };
      }
      function useMDXComponents(e) {
        let t = r.useContext(o);
        return r.useMemo(
          () => ("function" == typeof e ? e(t) : { ...t, ...e }),
          [t, e],
        );
      }
      let l = {};
      function MDXProvider({
        components: e,
        children: t,
        disableParentContext: n,
      }) {
        let a;
        return (
          (a = n
            ? "function" == typeof e
              ? e({})
              : e || l
            : useMDXComponents(e)),
          r.createElement(o.Provider, { value: a }, t)
        );
      }
    },
    94279: function (e, t, n) {
      "use strict";
      n.d(t, {
        YI: function () {
          return PortableText;
        },
      });
      var r = Object.defineProperty,
        o = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        a = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable,
        __defNormalProp = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        __spreadValues = (e, t) => {
          for (var n in t || (t = {}))
            i.call(t, n) && __defNormalProp(e, n, t[n]);
          if (a)
            for (var n of a(t)) s.call(t, n) && __defNormalProp(e, n, t[n]);
          return e;
        },
        __spreadProps = (e, t) => o(e, l(t));
      function isPortableTextSpan(e) {
        return (
          "span" === e._type &&
          "text" in e &&
          "string" == typeof e.text &&
          (void 0 === e.marks ||
            (Array.isArray(e.marks) &&
              e.marks.every((e) => "string" == typeof e)))
        );
      }
      function isPortableTextBlock(e) {
        return (
          "string" == typeof e._type &&
          "@" !== e._type[0] &&
          (!("markDefs" in e) ||
            (Array.isArray(e.markDefs) &&
              e.markDefs.every((e) => "string" == typeof e._key))) &&
          "children" in e &&
          Array.isArray(e.children) &&
          e.children.every((e) => "object" == typeof e && "_type" in e)
        );
      }
      function isPortableTextListItemBlock(e) {
        return (
          isPortableTextBlock(e) &&
          "listItem" in e &&
          "string" == typeof e.listItem &&
          (void 0 === e.level || "number" == typeof e.level)
        );
      }
      function isPortableTextToolkitList(e) {
        return "@list" === e._type;
      }
      function isPortableTextToolkitSpan(e) {
        return "@span" === e._type;
      }
      function isPortableTextToolkitTextNode(e) {
        return "@text" === e._type;
      }
      let u = ["strong", "em", "code", "underline", "strike-through"];
      function sortMarksByOccurences(e, t, n) {
        if (!isPortableTextSpan(e) || !e.marks || !e.marks.length) return [];
        let r = e.marks.slice(),
          o = {};
        return (
          r.forEach((e) => {
            o[e] = 1;
            for (let r = t + 1; r < n.length; r++) {
              let t = n[r];
              if (
                t &&
                isPortableTextSpan(t) &&
                Array.isArray(t.marks) &&
                -1 !== t.marks.indexOf(e)
              )
                o[e]++;
              else break;
            }
          }),
          r.sort((e, t) =>
            (function (e, t, n) {
              let r = e[t],
                o = e[n];
              if (r !== o) return o - r;
              let l = u.indexOf(t),
                a = u.indexOf(n);
              return l !== a ? l - a : t.localeCompare(n);
            })(o, e, t),
          )
        );
      }
      function listFromBlock(e, t, n) {
        return {
          _type: "@list",
          _key: `${e._key || `${t}`}-parent`,
          mode: n,
          level: e.level || 1,
          listItem: e.listItem,
          children: [e],
        };
      }
      function findListMatching(e, t) {
        let n = t.level || 1,
          r = t.listItem || "normal",
          o = "string" == typeof t.listItem;
        if (
          isPortableTextToolkitList(e) &&
          (e.level || 1) === n &&
          o &&
          (e.listItem || "normal") === r
        )
          return e;
        if (!("children" in e)) return;
        let l = e.children[e.children.length - 1];
        return l && !isPortableTextSpan(l) ? findListMatching(l, t) : void 0;
      }
      var c = n(67294),
        d = Object.defineProperty,
        p = Object.defineProperties,
        f = Object.getOwnPropertyDescriptors,
        y = Object.getOwnPropertySymbols,
        h = Object.prototype.hasOwnProperty,
        m = Object.prototype.propertyIsEnumerable,
        react_portable_text_defNormalProp = (e, t, n) =>
          t in e
            ? d(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        react_portable_text_spreadValues = (e, t) => {
          for (var n in t || (t = {}))
            h.call(t, n) && react_portable_text_defNormalProp(e, n, t[n]);
          if (y)
            for (var n of y(t))
              m.call(t, n) && react_portable_text_defNormalProp(e, n, t[n]);
          return e;
        },
        react_portable_text_spreadProps = (e, t) => p(e, f(t)),
        __objRest = (e, t) => {
          var n = {};
          for (var r in e) h.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
          if (null != e && y)
            for (var r of y(e))
              0 > t.indexOf(r) && m.call(e, r) && (n[r] = e[r]);
          return n;
        };
      function mergeDeeply(e, t, n) {
        let r = t[n],
          o = e[n];
        return "function" == typeof r || (r && "function" == typeof o)
          ? r
          : r
            ? react_portable_text_spreadValues(
                react_portable_text_spreadValues({}, o),
                r,
              )
            : o;
      }
      let g = { textDecoration: "underline" },
        getTemplate = (e, t) =>
          `Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        unknownTypeWarning = (e) => getTemplate(`block type "${e}"`, "types"),
        unknownMarkWarning = (e) => getTemplate(`mark type "${e}"`, "marks"),
        unknownBlockStyleWarning = (e) =>
          getTemplate(`block style "${e}"`, "block"),
        unknownListStyleWarning = (e) =>
          getTemplate(`list style "${e}"`, "list"),
        unknownListItemStyleWarning = (e) =>
          getTemplate(`list item style "${e}"`, "listItem");
      function printWarning(e) {
        console.warn(e);
      }
      let b = { display: "none" },
        v = (0, c.createContext)({
          types: {},
          block: {
            normal: ({ children: e }) => c.createElement("p", null, e),
            blockquote: ({ children: e }) =>
              c.createElement("blockquote", null, e),
            h1: ({ children: e }) => c.createElement("h1", null, e),
            h2: ({ children: e }) => c.createElement("h2", null, e),
            h3: ({ children: e }) => c.createElement("h3", null, e),
            h4: ({ children: e }) => c.createElement("h4", null, e),
            h5: ({ children: e }) => c.createElement("h5", null, e),
            h6: ({ children: e }) => c.createElement("h6", null, e),
          },
          marks: {
            em: ({ children: e }) => c.createElement("em", null, e),
            strong: ({ children: e }) => c.createElement("strong", null, e),
            code: ({ children: e }) => c.createElement("code", null, e),
            underline: ({ children: e }) =>
              c.createElement("span", { style: g }, e),
            "strike-through": ({ children: e }) =>
              c.createElement("del", null, e),
            link: ({ children: e, value: t }) =>
              c.createElement("a", { href: null == t ? void 0 : t.href }, e),
          },
          list: {
            number: ({ children: e }) => c.createElement("ol", null, e),
            bullet: ({ children: e }) => c.createElement("ul", null, e),
          },
          listItem: ({ children: e }) => c.createElement("li", null, e),
          hardBreak: () => c.createElement("br", null),
          unknownType: ({ value: e, isInline: t }) => {
            let n = unknownTypeWarning(e._type);
            return t
              ? c.createElement("span", { style: b }, n)
              : c.createElement("div", { style: b }, n);
          },
          unknownMark: ({ markType: e, children: t }) =>
            c.createElement(
              "span",
              { className: `unknown__pt__mark__${e}` },
              t,
            ),
          unknownList: ({ children: e }) => c.createElement("ul", null, e),
          unknownListItem: ({ children: e }) => c.createElement("li", null, e),
          unknownBlockStyle: ({ children: e }) => c.createElement("p", null, e),
        });
      function PortableText({
        value: e,
        components: t,
        listNestingMode: n,
        onMissingComponent: r = printWarning,
      }) {
        let o = r || noop,
          l = Array.isArray(e) ? e : [e],
          a = (function (e, t) {
            let n;
            let r = [];
            for (let l = 0; l < e.length; l++) {
              let a = e[l];
              if (a) {
                var o;
                if (!isPortableTextListItemBlock(a)) {
                  r.push(a), (n = void 0);
                  continue;
                }
                if (!n) {
                  (n = listFromBlock(a, l, t)), r.push(n);
                  continue;
                }
                if (
                  ((o = n),
                  (a.level || 1) === o.level && a.listItem === o.listItem)
                ) {
                  n.children.push(a);
                  continue;
                }
                if ((a.level || 1) > n.level) {
                  let e = listFromBlock(a, l, t);
                  if ("html" === t) {
                    let t = n.children[n.children.length - 1],
                      r = __spreadProps(__spreadValues({}, t), {
                        children: [...t.children, e],
                      });
                    n.children[n.children.length - 1] = r;
                  } else n.children.push(e);
                  n = e;
                  continue;
                }
                if ((a.level || 1) < n.level) {
                  let e = r[r.length - 1],
                    o = e && findListMatching(e, a);
                  if (o) {
                    (n = o).children.push(a);
                    continue;
                  }
                  (n = listFromBlock(a, l, t)), r.push(n);
                  continue;
                }
                if (a.listItem !== n.listItem) {
                  let e = r[r.length - 1],
                    o = e && findListMatching(e, { level: a.level || 1 });
                  if (o && o.listItem === a.listItem) {
                    (n = o).children.push(a);
                    continue;
                  }
                  (n = listFromBlock(a, l, t)), r.push(n);
                  continue;
                }
                console.warn("Unknown state encountered for block", a),
                  r.push(a);
              }
            }
            return r;
          })(l, n || "html"),
          i = (0, c.useContext)(v),
          s = (0, c.useMemo)(
            () =>
              t
                ? (function (e, t) {
                    let {
                        block: n,
                        list: r,
                        listItem: o,
                        marks: l,
                        types: a,
                      } = t,
                      i = __objRest(t, [
                        "block",
                        "list",
                        "listItem",
                        "marks",
                        "types",
                      ]);
                    return react_portable_text_spreadValues(
                      react_portable_text_spreadProps(
                        react_portable_text_spreadValues({}, e),
                        {
                          block: mergeDeeply(e, t, "block"),
                          list: mergeDeeply(e, t, "list"),
                          listItem: mergeDeeply(e, t, "listItem"),
                          marks: mergeDeeply(e, t, "marks"),
                          types: mergeDeeply(e, t, "types"),
                        },
                      ),
                      i,
                    );
                  })(i, t)
                : i,
            [i, t],
          ),
          u = (0, c.useMemo)(() => getNodeRenderer(s, o), [s, o]),
          d = a.map((e, t) =>
            u({ node: e, index: t, isInline: !1, renderNode: u }),
          );
        return t
          ? c.createElement(v.Provider, { value: s }, d)
          : c.createElement(c.Fragment, null, d);
      }
      let getNodeRenderer = (e, t) =>
        function renderNode(n) {
          let { node: r, index: o, isInline: l } = n,
            a = r._key || `node-${o}`;
          return isPortableTextToolkitList(r)
            ? (function (n, r, o) {
                let l = n.children.map((e, t) =>
                    renderNode({
                      node: e._key
                        ? e
                        : react_portable_text_spreadProps(
                            react_portable_text_spreadValues({}, e),
                            { _key: `li-${r}-${t}` },
                          ),
                      index: r,
                      isInline: !1,
                      renderNode,
                    }),
                  ),
                  a = e.list,
                  i = "function" == typeof a ? a : a[n.listItem],
                  s = i || e.unknownList;
                if (s === e.unknownList) {
                  let e = n.listItem || "bullet";
                  t(unknownListStyleWarning(e), {
                    nodeType: "listStyle",
                    type: e,
                  });
                }
                return c.createElement(
                  s,
                  { key: o, value: n, index: r, isInline: !1, renderNode },
                  l,
                );
              })(r, o, a)
            : isPortableTextListItemBlock(r)
              ? (function (n, r, o) {
                  let l = serializeBlock({
                      node: n,
                      index: r,
                      isInline: !1,
                      renderNode,
                    }),
                    a = e.listItem,
                    i = "function" == typeof a ? a : a[n.listItem],
                    s = i || e.unknownListItem;
                  if (s === e.unknownListItem) {
                    let e = n.listItem || "bullet";
                    t(unknownListItemStyleWarning(e), {
                      type: e,
                      nodeType: "listItemStyle",
                    });
                  }
                  let u = l.children;
                  if (n.style && "normal" !== n.style) {
                    let { listItem: e } = n,
                      t = __objRest(n, ["listItem"]);
                    u = renderNode({
                      node: t,
                      index: r,
                      isInline: !1,
                      renderNode,
                    });
                  }
                  return c.createElement(
                    s,
                    { key: o, value: n, index: r, isInline: !1, renderNode },
                    u,
                  );
                })(r, o, a)
              : isPortableTextToolkitSpan(r)
                ? (function (n, r, o) {
                    let { markDef: l, markType: a, markKey: i } = n,
                      s = e.marks[a] || e.unknownMark,
                      u = n.children.map((e, t) =>
                        renderNode({
                          node: e,
                          index: t,
                          isInline: !0,
                          renderNode,
                        }),
                      );
                    return (
                      s === e.unknownMark &&
                        t(unknownMarkWarning(a), { nodeType: "mark", type: a }),
                      c.createElement(
                        s,
                        {
                          key: o,
                          text: (function spanToPlainText(e) {
                            let t = "";
                            return (
                              e.children.forEach((e) => {
                                isPortableTextToolkitTextNode(e)
                                  ? (t += e.text)
                                  : isPortableTextToolkitSpan(e) &&
                                    (t += spanToPlainText(e));
                              }),
                              t
                            );
                          })(n),
                          value: l,
                          markType: a,
                          markKey: i,
                          renderNode,
                        },
                        u,
                      )
                    );
                  })(r, 0, a)
                : isPortableTextBlock(r)
                  ? (function (n, r, o, l) {
                      let a = serializeBlock({
                          node: n,
                          index: r,
                          isInline: l,
                          renderNode,
                        }),
                        { _key: i } = a,
                        s = __objRest(a, ["_key"]),
                        u = s.node.style || "normal",
                        d = "function" == typeof e.block ? e.block : e.block[u],
                        p = d || e.unknownBlockStyle;
                      return (
                        p === e.unknownBlockStyle &&
                          t(unknownBlockStyleWarning(u), {
                            nodeType: "blockStyle",
                            type: u,
                          }),
                        c.createElement(
                          p,
                          react_portable_text_spreadProps(
                            react_portable_text_spreadValues({ key: o }, s),
                            { value: s.node, renderNode },
                          ),
                        )
                      );
                    })(r, o, a, l)
                  : isPortableTextToolkitTextNode(r)
                    ? (function (t, n) {
                        if ("\n" === t.text) {
                          let t = e.hardBreak;
                          return t ? c.createElement(t, { key: n }) : "\n";
                        }
                        return t.text;
                      })(r, a)
                    : (function (n, r, o, l) {
                        let a = e.types[n._type],
                          i = { value: n, isInline: l, index: r, renderNode };
                        if (a)
                          return c.createElement(
                            a,
                            react_portable_text_spreadValues({ key: o }, i),
                          );
                        t(unknownTypeWarning(n._type), {
                          nodeType: "block",
                          type: n._type,
                        });
                        let s = e.unknownType;
                        return c.createElement(
                          s,
                          react_portable_text_spreadValues({ key: o }, i),
                        );
                      })(r, o, a, l);
        };
      function serializeBlock(e) {
        let { node: t, index: n, isInline: r, renderNode: o } = e,
          l = (function (e) {
            var t;
            let { children: n, markDefs: r = [] } = e;
            if (!n || !n.length) return [];
            let o = n.map(sortMarksByOccurences),
              l = { _type: "@span", children: [], markType: "<unknown>" },
              a = [l];
            for (let e = 0; e < n.length; e++) {
              let l = n[e];
              if (!l) continue;
              let i = o[e] || [],
                s = 1;
              if (a.length > 1)
                for (; s < a.length; s++) {
                  let e = (null == (t = a[s]) ? void 0 : t.markKey) || "",
                    n = i.indexOf(e);
                  if (-1 === n) break;
                  i.splice(n, 1);
                }
              let u = (a = a.slice(0, s))[a.length - 1];
              if (u) {
                for (let e of i) {
                  let t = r.find((t) => t._key === e),
                    n = t ? t._type : e,
                    o = {
                      _type: "@span",
                      _key: l._key,
                      children: [],
                      markDef: t,
                      markType: n,
                      markKey: e,
                    };
                  u.children.push(o), a.push(o), (u = o);
                }
                if (isPortableTextSpan(l)) {
                  let e = l.text.split("\n");
                  for (let t = e.length; t-- > 1; ) e.splice(t, 0, "\n");
                  u.children = u.children.concat(
                    e.map((e) => ({ _type: "@text", text: e })),
                  );
                } else u.children = u.children.concat(l);
              }
            }
            return l.children;
          })(t),
          a = l.map((e, t) =>
            o({ node: e, isInline: !0, index: t, renderNode: o }),
          );
        return {
          _key: t._key || `block-${n}`,
          children: a,
          index: n,
          isInline: r,
          node: t,
        };
      }
      function noop() {}
    },
    82729: function (e, t, n) {
      "use strict";
      function _tagged_template_literal(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          )
        );
      }
      n.d(t, {
        _: function () {
          return _tagged_template_literal;
        },
      });
    },
    37301: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return resolveElements;
        },
      });
      var r = n(45487);
      function resolveElements(e, t, n) {
        var o;
        if ("string" == typeof e) {
          let l = document;
          t &&
            ((0, r.k)(!!t.current, "Scope provided, but no element detected."),
            (l = t.current)),
            n
              ? ((null !== (o = n[e]) && void 0 !== o) ||
                  (n[e] = l.querySelectorAll(e)),
                (e = n[e]))
              : (e = l.querySelectorAll(e));
        } else e instanceof Element && (e = [e]);
        return Array.from(e || []);
      }
    },
    16893: function (e, t, n) {
      "use strict";
      n.d(t, {
        Y: function () {
          return useInView;
        },
      });
      var r = n(67294),
        o = n(37301);
      let l = { any: 0, all: 1 };
      function useInView(
        e,
        { root: t, margin: n, amount: a, once: i = !1 } = {},
      ) {
        let [s, u] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!e.current || (i && s)) return;
            let r = {
              root: (t && t.current) || void 0,
              margin: n,
              amount: "some" === a ? "any" : a,
            };
            return (function (
              e,
              t,
              { root: n, margin: r, amount: a = "any" } = {},
            ) {
              let i = (0, o.I)(e),
                s = new WeakMap(),
                u = new IntersectionObserver(
                  (e) => {
                    e.forEach((e) => {
                      let n = s.get(e.target);
                      if (!!n !== e.isIntersecting) {
                        if (e.isIntersecting) {
                          let n = t(e);
                          "function" == typeof n
                            ? s.set(e.target, n)
                            : u.unobserve(e.target);
                        } else n && (n(e), s.delete(e.target));
                      }
                    });
                  },
                  {
                    root: n,
                    rootMargin: r,
                    threshold: "number" == typeof a ? a : l[a],
                  },
                );
              return i.forEach((e) => u.observe(e)), () => u.disconnect();
            })(e.current, () => (u(!0), i ? void 0 : () => u(!1)), r);
          }, [t, e, n, i]),
          s
        );
      }
    },
    49438: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return MDXRemote;
        },
      });
      var r = n(67294),
        o = n(32746),
        l = n(67373),
        a = n(11151);
      function MDXRemote({
        compiledSource: e,
        frontmatter: t,
        scope: n,
        components: i = {},
        lazy: s,
      }) {
        let [u, c] = (0, r.useState)(!s || "undefined" == typeof window);
        (0, r.useEffect)(() => {
          if (s) {
            let e = window.requestIdleCallback(() => {
              c(!0);
            });
            return () => window.cancelIdleCallback(e);
          }
        }, []);
        let d = (0, r.useMemo)(() => {
          let r = Object.assign(
              { opts: { ...l, ...o.jsxRuntime } },
              { frontmatter: t },
              n,
            ),
            a = Object.keys(r),
            i = Object.values(r),
            s = Reflect.construct(Function, a.concat(`${e}`));
          return s.apply(s, i).default;
        }, [n, e]);
        if (!u)
          return r.createElement("div", {
            dangerouslySetInnerHTML: { __html: "" },
            suppressHydrationWarning: !0,
          });
        let p = r.createElement(
          a.Zo,
          { components: i },
          r.createElement(d, null),
        );
        return s ? r.createElement("div", null, p) : p;
      }
      "undefined" != typeof window &&
        ((window.requestIdleCallback =
          window.requestIdleCallback ||
          function (e) {
            var t = Date.now();
            return setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          }),
        (window.cancelIdleCallback =
          window.cancelIdleCallback ||
          function (e) {
            clearTimeout(e);
          }));
    },
  },
]);
