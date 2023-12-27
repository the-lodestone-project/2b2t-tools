(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7179],
  {
    62705: function (e, n, t) {
      var r = t(55639).Symbol;
      e.exports = r;
    },
    44239: function (e, n, t) {
      var r = t(62705),
        o = t(89607),
        i = t(2333),
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
            ? o(e)
            : i(e);
      };
    },
    69877: function (e) {
      var n = Math.floor,
        t = Math.random;
      e.exports = function (e, r) {
        return e + n(t() * (r - e + 1));
      };
    },
    27561: function (e, n, t) {
      var r = t(67990),
        o = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e;
      };
    },
    31957: function (e, n, t) {
      var r = "object" == typeof t.g && t.g && t.g.Object === Object && t.g;
      e.exports = r;
    },
    89607: function (e, n, t) {
      var r = t(62705),
        o = Object.prototype,
        i = o.hasOwnProperty,
        s = o.toString,
        a = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var n = i.call(e, a),
          t = e[a];
        try {
          e[a] = void 0;
          var r = !0;
        } catch (e) {}
        var o = s.call(e);
        return r && (n ? (e[a] = t) : delete e[a]), o;
      };
    },
    65776: function (e) {
      var n = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, t) {
        var r = typeof e;
        return (
          !!(t = null == t ? 9007199254740991 : t) &&
          ("number" == r || ("symbol" != r && n.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      };
    },
    16612: function (e, n, t) {
      var r = t(77813),
        o = t(98612),
        i = t(65776),
        s = t(13218);
      e.exports = function (e, n, t) {
        if (!s(t)) return !1;
        var a = typeof n;
        return (
          ("number" == a
            ? !!(o(t) && i(n, t.length))
            : "string" == a && n in t) && r(t[n], e)
        );
      };
    },
    2333: function (e) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    55639: function (e, n, t) {
      var r = t(31957),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      e.exports = i;
    },
    67990: function (e) {
      var n = /\s/;
      e.exports = function (e) {
        for (var t = e.length; t-- && n.test(e.charAt(t)); );
        return t;
      };
    },
    77813: function (e) {
      e.exports = function (e, n) {
        return e === n || (e != e && n != n);
      };
    },
    98612: function (e, n, t) {
      var r = t(23560),
        o = t(41780);
      e.exports = function (e) {
        return null != e && o(e.length) && !r(e);
      };
    },
    23560: function (e, n, t) {
      var r = t(44239),
        o = t(13218);
      e.exports = function (e) {
        if (!o(e)) return !1;
        var n = r(e);
        return (
          "[object Function]" == n ||
          "[object GeneratorFunction]" == n ||
          "[object AsyncFunction]" == n ||
          "[object Proxy]" == n
        );
      };
    },
    41780: function (e) {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    13218: function (e) {
      e.exports = function (e) {
        var n = typeof e;
        return null != e && ("object" == n || "function" == n);
      };
    },
    37005: function (e) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    33448: function (e, n, t) {
      var r = t(44239),
        o = t(37005);
      e.exports = function (e) {
        return "symbol" == typeof e || (o(e) && "[object Symbol]" == r(e));
      };
    },
    83608: function (e, n, t) {
      var r = t(69877),
        o = t(16612),
        i = t(18601),
        s = parseFloat,
        a = Math.min,
        l = Math.random;
      e.exports = function (e, n, t) {
        if (
          (t && "boolean" != typeof t && o(e, n, t) && (n = t = void 0),
          void 0 === t &&
            ("boolean" == typeof n
              ? ((t = n), (n = void 0))
              : "boolean" == typeof e && ((t = e), (e = void 0))),
          void 0 === e && void 0 === n
            ? ((e = 0), (n = 1))
            : ((e = i(e)), void 0 === n ? ((n = e), (e = 0)) : (n = i(n))),
          e > n)
        ) {
          var c = e;
          (e = n), (n = c);
        }
        if (t || e % 1 || n % 1) {
          var h = l();
          return a(e + h * (n - e + s("1e-" + ((h + "").length - 1))), n);
        }
        return r(e, n);
      };
    },
    18601: function (e, n, t) {
      var r = t(14841),
        o = 1 / 0;
      e.exports = function (e) {
        return e
          ? (e = r(e)) === o || e === -o
            ? (e < 0 ? -1 : 1) * 17976931348623157e292
            : e == e
              ? e
              : 0
          : 0 === e
            ? e
            : 0;
      };
    },
    14841: function (e, n, t) {
      var r = t(27561),
        o = t(13218),
        i = t(33448),
        s = 0 / 0,
        a = /^[-+]0x[0-9a-f]+$/i,
        l = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        h = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return s;
        if (o(e)) {
          var n = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(n) ? n + "" : n;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var t = l.test(e);
        return t || c.test(e) ? h(e.slice(2), t ? 2 : 8) : a.test(e) ? s : +e;
      };
    },
    88767: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/legal/terms",
        function () {
          return t(62281);
        },
      ]);
    },
    62281: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return terms;
          },
        });
      var r = t(85893),
        o = t(11151),
        i = t(83608),
        s = t.n(i),
        a = t(32233),
        l = t(92520),
        c = t(67294),
        h = t(70131);
      let d = [
          "M240 0L320 -40L400 0L320 40L240 0Z",
          "M720 0L800 -40L880 0L800 40L720 0Z",
          "M1360 0L1440 -40L1520 0L1440 40L1360 0Z",
          "M1680 0L1760 -40L1840 0L1760 40L1680 0Z",
          "M1520 0L1600 -40L1680 0L1600 40L1520 0Z",
          "M320 40L400 0L480 40L400 80L320 40Z",
          "M800 40L880 0L960 40L880 80L800 40Z",
          "M1120 40L1200 0L1280 40L1200 80L1120 40Z",
          "M160 40L240 0L320 40L240 80L160 40Z",
          "M1600 40L1680 0L1760 40L1680 80L1600 40Z",
          "M1440 40L1520 0L1600 40L1520 80L1440 40Z",
          "M400 80L480 40L560 80L480 120L400 80Z",
          "M560 80L640 40L720 80L640 120L560 80Z",
          "M720 80L800 40L880 80L800 120L720 80Z",
          "M880 80L960 40L1040 80L960 120L880 80Z",
          "M1040 80L1120 40L1200 80L1120 120L1040 80Z",
          "M1200 80L1280 40L1360 80L1280 120L1200 80Z",
          "M1680 80L1760 40L1840 80L1760 120L1680 80Z",
          "M240 80L320 40L400 80L320 120L240 80Z",
          "M320 120L400 80L480 120L400 160L320 120Z",
          "M0 120L80 80L160 120L80 160L0 120Z",
          "M480 120L560 80L640 120L560 160L480 120Z",
          "M640 120L720 80L800 120L720 160L640 120Z",
          "M800 120L880 80L960 120L880 160L800 120Z",
          "M960 120L1040 80L1120 120L1040 160L960 120Z",
          "M1120 120L1200 80L1280 120L1200 160L1120 120Z",
          "M400 160L480 120L560 160L480 200L400 160Z",
          "M80 160L160 120L240 160L160 200L80 160Z",
          "M720 160L800 120L880 160L800 200L720 160Z",
          "M880 160L960 120L1040 160L960 200L880 160Z",
          "M1040 160L1120 120L1200 160L1120 200L1040 160Z",
          "M1200 160L1280 120L1360 160L1280 200L1200 160Z",
          "M1360 160L1440 120L1520 160L1440 200L1360 160Z",
          "M1520 160L1600 120L1680 160L1600 200L1520 160Z",
          "M800 200L880 160L960 200L880 240L800 200Z",
          "M960 200L1040 160L1120 200L1040 240L960 200Z",
          "M1120 200L1200 160L1280 200L1200 240L1120 200Z",
          "M1280 200L1360 160L1440 200L1360 240L1280 200Z",
          "M1440 200L1520 160L1600 200L1520 240L1440 200Z",
          "M160 200L240 160L320 200L240 240L160 200Z",
          "M560 240L640 200L720 240L640 280L560 240Z",
          "M80 240L160 200L240 240L160 280L80 240Z",
          "M720 240L800 200L880 240L800 280L720 240Z",
          "M880 240L960 200L1040 240L960 280L880 240Z",
          "M1040 240L1120 200L1200 240L1120 280L1040 240Z",
          "M1200 240L1280 200L1360 240L1280 280L1200 240Z",
          "M1360 240L1440 200L1520 240L1440 280L1360 240Z",
          "M1520 240L1600 200L1680 240L1600 280L1520 240Z",
          "M1680 240L1760 200L1840 240L1760 280L1680 240Z",
          "M320 280L400 240L480 280L400 320L320 280Z",
          "M480 280L560 240L640 280L560 320L480 280Z",
          "M640 280L720 240L800 280L720 320L640 280Z",
          "M800 280L880 240L960 280L880 320L800 280Z",
          "M960 280L1040 240L1120 280L1040 320L960 280Z",
          "M1120 280L1200 240L1280 280L1200 320L1120 280Z",
          "M1280 280L1360 240L1440 280L1360 320L1280 280Z",
          "M1440 280L1520 240L1600 280L1520 320L1440 280Z",
          "M1600 280L1680 240L1760 280L1680 320L1600 280Z",
          "M160 280L240 240L320 280L240 320L160 280Z",
          "M400 320L480 280L560 320L480 360L400 320Z",
          "M560 320L640 280L720 320L640 360L560 320Z",
          "M720 320L800 280L880 320L800 360L720 320Z",
          "M880 320L960 280L1040 320L960 360L880 320Z",
          "M1040 320L1120 280L1200 320L1120 360L1040 320Z",
          "M1200 320L1280 280L1360 320L1280 360L1200 320Z",
          "M1360 320L1440 280L1520 320L1440 360L1360 320Z",
          "M1520 320L1600 280L1680 320L1600 360L1520 320Z",
          "M1680 320L1760 280L1840 320L1760 360L1680 320Z",
          "M240 320L320 280L400 320L320 360L240 320Z",
          "M80 320L160 280L240 320L160 360L80 320Z",
          "M320 360L400 320L480 360L400 400L320 360Z",
          "M480 360L560 320L640 360L560 400L480 360Z",
          "M640 360L720 320L800 360L720 400L640 360Z",
          "M800 360L880 320L960 360L880 400L800 360Z",
          "M960 360L1040 320L1120 360L1040 400L960 360Z",
          "M1120 360L1200 320L1280 360L1200 400L1120 360Z",
          "M1280 360L1360 320L1440 360L1360 400L1280 360Z",
          "M1440 360L1520 320L1600 360L1520 400L1440 360Z",
          "M1600 360L1680 320L1760 360L1680 400L1600 360Z",
          "M1760 360L1840 320L1920 360L1840 400L1760 360Z",
          "M400 400L480 360L560 400L480 440L400 400Z",
          "M560 400L640 360L720 400L640 440L560 400Z",
          "M720 400L800 360L880 400L800 440L720 400Z",
          "M880 400L960 360L1040 400L960 440L880 400Z",
          "M1040 400L1120 360L1200 400L1120 440L1040 400Z",
          "M1200 400L1280 360L1360 400L1280 440L1200 400Z",
          "M1520 400L1600 360L1680 400L1600 440L1520 400Z",
          "M240 400L320 360L400 400L320 440L240 400Z",
          "M480 440L560 400L640 440L560 480L480 440Z",
          "M640 440L720 400L800 440L720 480L640 440Z",
          "M800 440L880 400L960 440L880 480L800 440Z",
          "M960 440L1040 400L1120 440L1040 480L960 440Z",
          "M1120 440L1200 400L1280 440L1200 480L1120 440Z",
          "M1280 440L1360 400L1440 440L1360 480L1280 440Z",
          "M1600 440L1680 400L1760 440L1680 480L1600 440Z",
          "M560 480L640 440L720 480L640 520L560 480Z",
          "M720 480L800 440L880 480L800 520L720 480Z",
          "M880 480L960 440L1040 480L960 520L880 480Z",
          "M1040 480L1120 440L1200 480L1120 520L1040 480Z",
          "M1200 480L1280 440L1360 480L1280 520L1200 480Z",
          "M1360 480L1440 440L1520 480L1440 520L1360 480Z",
          "M1680 480L1760 440L1840 480L1760 520L1680 480Z",
          "M480 520L560 480L640 520L560 560L480 520Z",
          "M800 520L880 480L960 520L880 560L800 520Z",
          "M960 520L1040 480L1120 520L1040 560L960 520Z",
          "M1120 520L1200 480L1280 520L1200 560L1120 520Z",
          "M1280 520L1360 480L1440 520L1360 560L1280 520Z",
          "M1600 520L1680 480L1760 520L1680 560L1600 520Z",
          "M560 560L640 520L720 560L640 600L560 560Z",
          "M880 560L960 520L1040 560L960 600L880 560Z",
          "M1040 560L1120 520L1200 560L1120 600L1040 560Z",
          "M1200 560L1280 520L1360 560L1280 600L1200 560Z",
          "M1360 560L1440 520L1520 560L1440 600L1360 560Z",
          "M480 600L560 560L640 600L560 640L480 600Z",
          "M800 600L880 560L960 600L880 640L800 600Z",
          "M960 600L1040 560L1120 600L1040 640L960 600Z",
          "M1280 600L1360 560L1440 600L1360 640L1280 600Z",
          "M1440 600L1520 560L1600 600L1520 640L1440 600Z",
          "M720 640L800 600L880 640L800 680L720 640Z",
          "M880 640L960 600L1040 640L960 680L880 640Z",
          "M1520 640L1600 600L1680 640L1600 680L1520 640Z",
          "M640 680L720 640L800 680L720 720L640 680Z",
          "M800 680L880 640L960 680L880 720L800 680Z",
          "M960 680L1040 640L1120 680L1040 720L960 680Z",
          "M1440 680L1520 640L1600 680L1520 720L1440 680Z",
          "M880 720L960 680L1040 720L960 760L880 720Z",
          "M720 720L800 680L880 720L800 760L720 720Z",
          "M1200 720L1280 680L1360 720L1280 760L1200 720Z",
          "M1360 720L1440 680L1520 720L1440 760L1360 720Z",
          "M1120 760L1200 720L1280 760L1200 800L1120 760Z",
          "M1280 760L1360 720L1440 760L1360 800L1280 760Z",
          "M1440 760L1520 720L1600 760L1520 800L1440 760Z",
          "M1040 800L1120 760L1200 800L1120 840L1040 800Z",
          "M1200 800L1280 760L1360 800L1280 840L1200 800Z",
        ],
        u = [
          "M160 40L240 0L320 40L240 80L160 40Z",
          "M320 40L400 0L480 40L400 80L320 40Z",
          "M240 80L320 40L400 80L320 120L240 80Z",
          "M160 120L240 80L320 120L240 160L160 120Z",
          "M0 120L80 80L160 120L80 160L0 120Z",
          "M320 120L400 80L480 120L400 160L320 120Z",
          "M480 120L560 80L640 120L560 160L480 120Z",
          "M240 160L320 120L400 160L320 200L240 160Z",
          "M80 160L160 120L240 160L160 200L80 160Z",
          "M400 160L480 120L560 160L480 200L400 160Z",
          "M560 160L640 120L720 160L640 200L560 160Z",
          "M160 200L240 160L320 200L240 240L160 200Z",
          "M320 200L400 160L480 200L400 240L320 200Z",
          "M240 240L320 200L400 240L320 280L240 240Z",
          "M400 240L480 200L560 240L480 280L400 240Z",
          "M720 240L800 200L880 240L800 280L720 240Z",
          "M320 280L400 240L480 280L400 320L320 280Z",
          "M640 280L720 240L800 280L720 320L640 280Z",
          "M800 280L880 240L960 280L880 320L800 280Z",
          "M960 280L1040 240L1120 280L1040 320L960 280Z",
          "M400 320L480 280L560 320L480 360L400 320Z",
          "M720 320L800 280L880 320L800 360L720 320Z",
          "M880 320L960 280L1040 320L960 360L880 320Z",
          "M1040 320L1120 280L1200 320L1120 360L1040 320Z",
          "M1200 320L1280 280L1360 320L1280 360L1200 320Z",
          "M240 320L320 280L400 320L320 360L240 320Z",
          "M480 360L560 320L640 360L560 400L480 360Z",
          "M640 360L720 320L800 360L720 400L640 360Z",
          "M800 360L880 320L960 360L880 400L800 360Z",
          "M960 360L1040 320L1120 360L1040 400L960 360Z",
          "M1120 360L1200 320L1280 360L1200 400L1120 360Z",
          "M560 400L640 360L720 400L640 440L560 400Z",
          "M720 400L800 360L880 400L800 440L720 400Z",
          "M880 400L960 360L1040 400L960 440L880 400Z",
          "M1040 400L1120 360L1200 400L1120 440L1040 400Z",
          "M1200 400L1280 360L1360 400L1280 440L1200 400Z",
          "M1360 400L1440 360L1520 400L1440 440L1360 400Z",
          "M1520 400L1600 360L1680 400L1600 440L1520 400Z",
          "M320 440L400 400L480 440L400 480L320 440Z",
          "M640 440L720 400L800 440L720 480L640 440Z",
          "M800 440L880 400L960 440L880 480L800 440Z",
          "M960 440L1040 400L1120 440L1040 480L960 440Z",
          "M1120 440L1200 400L1280 440L1200 480L1120 440Z",
          "M1280 440L1360 400L1440 440L1360 480L1280 440Z",
          "M1440 440L1520 400L1600 440L1520 480L1440 440Z",
          "M1600 440L1680 400L1760 440L1680 480L1600 440Z",
          "M560 480L640 440L720 480L640 520L560 480Z",
          "M720 480L800 440L880 480L800 520L720 480Z",
          "M880 480L960 440L1040 480L960 520L880 480Z",
          "M1040 480L1120 440L1200 480L1120 520L1040 480Z",
          "M1200 480L1280 440L1360 480L1280 520L1200 480Z",
          "M1520 480L1600 440L1680 480L1600 520L1520 480Z",
          "M1680 480L1760 440L1840 480L1760 520L1680 480Z",
          "M160 520L240 480L320 520L240 560L160 520Z",
          "M320 520L400 480L480 520L400 560L320 520Z",
          "M480 520L560 480L640 520L560 560L480 520Z",
          "M640 520L720 480L800 520L720 560L640 520Z",
          "M800 520L880 480L960 520L880 560L800 520Z",
          "M960 520L1040 480L1120 520L1040 560L960 520Z",
          "M1120 520L1200 480L1280 520L1200 560L1120 520Z",
          "M1280 520L1360 480L1440 520L1360 560L1280 520Z",
          "M1600 520L1680 480L1760 520L1680 560L1600 520Z",
          "M1760 520L1840 480L1920 520L1840 560L1760 520Z",
          "M240 560L320 520L400 560L320 600L240 560Z",
          "M400 560L480 520L560 560L480 600L400 560Z",
          "M560 560L640 520L720 560L640 600L560 560Z",
          "M720 560L800 520L880 560L800 600L720 560Z",
          "M880 560L960 520L1040 560L960 600L880 560Z",
          "M1040 560L1120 520L1200 560L1120 600L1040 560Z",
          "M1200 560L1280 520L1360 560L1280 600L1200 560Z",
          "M1680 560L1760 520L1840 560L1760 600L1680 560Z",
          "M1520 560L1600 520L1680 560L1600 600L1520 560Z",
          "M1520 560L1600 520L1680 560L1600 600L1520 560Z",
          "M640 600L720 560L800 600L720 640L640 600Z",
          "M800 600L880 560L960 600L880 640L800 600Z",
          "M960 600L1040 560L1120 600L1040 640L960 600Z",
          "M1120 600L1200 560L1280 600L1200 640L1120 600Z",
          "M1600 600L1680 560L1760 600L1680 640L1600 600Z",
          "M560 640L640 600L720 640L640 680L560 640Z",
          "M720 640L800 600L880 640L800 680L720 640Z",
          "M880 640L960 600L1040 640L960 680L880 640Z",
          "M1040 640L1120 600L1200 640L1120 680L1040 640Z",
          "M1360 640L1440 600L1520 640L1440 680L1360 640Z",
          "M1520 640L1600 600L1680 640L1600 680L1520 640Z",
          "M1680 640L1760 600L1840 640L1760 680L1680 640Z",
          "M640 680L720 640L800 680L720 720L640 680Z",
          "M800 680L880 640L960 680L880 720L800 680Z",
          "M960 680L1040 640L1120 680L1040 720L960 680Z",
          "M1120 680L1200 640L1280 680L1200 720L1120 680Z",
          "M1440 680L1520 640L1600 680L1520 720L1440 680Z",
          "M1600 680L1680 640L1760 680L1680 720L1600 680Z",
          "M560 720L640 680L720 720L640 760L560 720Z",
          "M720 720L800 680L880 720L800 760L720 720Z",
          "M880 720L960 680L1040 720L960 760L880 720Z",
          "M1040 720L1120 680L1200 720L1120 760L1040 720Z",
          "M1200 720L1280 680L1360 720L1280 760L1200 720Z",
          "M1520 720L1600 680L1680 720L1600 760L1520 720Z",
          "M1120 760L1200 720L1280 760L1200 800L1120 760Z",
          "M1600 760L1680 720L1760 760L1680 800L1600 760Z",
        ],
        p = [
          "M1480 351L1560 311L1640 351L1560 391L1480 351Z",
          "M200 201L280 161L360 201L280 241L200 201Z",
          "M200 1581L280 1541L360 1581L280 1621L200 1581Z",
          "M280 1541L360 1501L440 1541L360 1581L280 1541Z",
          "M120 1541L200 1501L280 1541L200 1581L120 1541Z",
          "M440 1541L520 1501L600 1541L520 1581L440 1541Z",
          "M600 1541L680 1501L760 1541L680 1581L600 1541Z",
          "M520 1501L600 1461L680 1501L600 1541L520 1501Z",
          "M440 1621L520 1581L600 1621L520 1661L440 1621Z",
          "M360 1581L440 1541L520 1581L440 1621L360 1581Z",
          "M280 1621L360 1581L440 1621L360 1661L280 1621Z",
          "M200 1661L280 1621L360 1661L280 1701L200 1661Z",
          "M360 1501L440 1461L520 1501L440 1541L360 1501Z",
          "M1480 271L1560 231L1640 271L1560 311L1480 271Z",
          "M200 121L280 81L360 121L280 161L200 121Z",
          "M200 1501L280 1461L360 1501L280 1541L200 1501Z",
          "M1560 231L1640 191L1720 231L1640 271L1560 231Z",
          "M1560 1031L1640 991L1720 1031L1640 1071L1560 1031Z",
          "M1720 1031L1800 991L1880 1031L1800 1071L1720 1031Z",
          "M280 81L360 41L440 81L360 121L280 81Z",
          "M280 1461L360 1421L440 1461L360 1501L280 1461Z",
          "M360 1421L440 1381L520 1421L440 1461L360 1421Z",
          "M200 1421L280 1381L360 1421L280 1461L200 1421Z",
          "M40 1421L120 1381L200 1421L120 1461L40 1421Z",
          "M120 1381L200 1341L280 1381L200 1421L120 1381Z",
          "M200 1341L280 1301L360 1341L280 1381L200 1341Z",
          "M200 121L280 81L360 121L280 161L200 121Z",
          "M200 1501L280 1461L360 1501L280 1541L200 1501Z",
          "M200 41L280 1L360 41L280 81L200 41Z",
          "M360 121L440 81L520 121L440 161L360 121Z",
          "M1560 311L1640 271L1720 311L1640 351L1560 311Z",
          "M1720 311L1800 271L1880 311L1800 351L1720 311Z",
          "M1560 391L1640 351L1720 391L1640 431L1560 391Z",
          "M1400 231L1480 191L1560 231L1480 271L1400 231Z",
          "M120 81L200 41L280 81L200 121L120 81Z",
          "M120 1461L200 1421L280 1461L200 1501L120 1461Z",
          "M1560 151L1640 111L1720 151L1640 191L1560 151Z",
          "M1560 951L1640 911L1720 951L1640 991L1560 951Z",
          "M1480 911L1560 871L1640 911L1560 951L1480 911Z",
          "M1560 871L1640 831L1720 871L1640 911L1560 871Z",
          "M1400 871L1480 831L1560 871L1480 911L1400 871Z",
          "M1320 831L1400 791L1480 831L1400 871L1320 831Z",
          "M1320 911L1400 871L1480 911L1400 951L1320 911Z",
          "M1480 991L1560 951L1640 991L1560 1031L1480 991Z",
          "M1400 1031L1480 991L1560 1031L1480 1071L1400 1031Z",
          "M1400 951L1480 911L1560 951L1480 991L1400 951Z",
          "M1640 111L1720 71L1800 111L1720 151L1640 111Z",
          "M1640 191L1720 151L1800 191L1720 231L1640 191Z",
          "M1640 991L1720 951L1800 991L1720 1031L1640 991Z",
          "M1640 911L1720 871L1800 911L1720 951L1640 911Z",
          "M1640 271L1720 231L1800 271L1720 311L1640 271Z",
          "M1640 1071L1720 1031L1800 1071L1720 1111L1640 1071Z",
          "M1640 351L1720 311L1800 351L1720 391L1640 351Z",
          "M1640 1151L1720 1111L1800 1151L1720 1191L1640 1151Z",
          "M1560 1111L1640 1071L1720 1111L1640 1151L1560 1111Z",
          "M1640 431L1720 391L1800 431L1720 471L1640 431Z",
        ],
        y = [
          "m724.096 362.548-643.988-321.994",
          "m724.096 602.548-643.988-321.994",
          "m1090.945 14.568-850.389 425.197",
          "m838.204 541.102-357.77 178.885",
          "m500.434 171.102 357.77 178.885",
          "m1423.87 327.878-782.64 391.32",
          "m634.987 477.657 643.983 321.993",
          "m858.651 189.663 500.879 250.44",
          "m572.434 513.879 787.096-393.548",
          "m1373.53 366.994-572.433-286.217",
        ];
      var m = t(62226),
        L = t.n(m);
      function Background() {
        return null;
      }
      (Background.Top = () =>
        (0, r.jsx)("div", {
          className: L().top,
          children: (0, r.jsx)("svg", {
            width: 1920,
            height: 880,
            viewBox: "0 0 1920 880",
            children: d.map((e, n) =>
              (0, r.jsx)("path", { className: L().cell, d: e }, n),
            ),
          }),
        })),
        (Background.Middle = () =>
          (0, r.jsx)("div", {
            className: L().middle,
            children: (0, r.jsx)("svg", {
              width: 1920,
              height: 1700,
              viewBox: "0 0 1920 1700",
              children: p.map((e, n) =>
                (0, r.jsx)("path", { className: L().cell, d: e }, n),
              ),
            }),
          })),
        (Background.Bottom = () =>
          (0, r.jsx)("div", {
            className: L().bottom,
            children: (0, r.jsx)("svg", {
              width: 1920,
              height: 800,
              viewBox: "0 0 1920 800",
              children: u.map((e, n) =>
                (0, r.jsx)("path", { className: L().cell, d: e }, n),
              ),
            }),
          })),
        (Background.Lines = () => {
          let { inView: e, ref: n } = (0, h.YD)(),
            t = (0, a._)();
          return (
            (0, c.useEffect)(() => {
              e
                ? t.start((e) => ({
                    pathLength: [0, 1],
                    pathOffset: [0, 1],
                    opacity: [0, s()(1, 0.2), 0],
                    transition: {
                      repeat: 1 / 0,
                      repeatType: "loop",
                      repeatDelay: s()(e, e / 2),
                      delay: s()(e / 2, e / 4),
                      duration: s()(1, 3, !0),
                      ease: "easeInOut",
                    },
                  }))
                : t.start({ opacity: 0, pathLength: 0, pathOffset: 0 });
            }, [e]),
            (0, r.jsx)("div", {
              ref: n,
              className: L().heroHome,
              children: (0, r.jsxs)("svg", {
                width: "1440",
                height: "880",
                viewBox: "0 0 1440 880",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                children: [
                  (0, r.jsxs)("defs", {
                    children: [
                      (0, r.jsxs)("linearGradient", {
                        id: "1",
                        x1: "0%",
                        x2: "100%",
                        y1: "37.5%",
                        y2: "62.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#00B6FF",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#00B6FF",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#00B6FF",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "2",
                        x1: "0%",
                        x2: "100%",
                        y1: "37.5%",
                        y2: "62.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#8C5AFA",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "3",
                        x1: "0%",
                        x2: "100%",
                        y1: "62.5%",
                        y2: "37.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#FFD706",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#FFD706",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#FFD706",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "4",
                        x1: "0%",
                        x2: "100%",
                        y1: "62.5%",
                        y2: "37.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#00E992",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#00E992",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#00E992",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "5",
                        x1: "100%",
                        x2: "0%",
                        y1: "37.5%",
                        y2: "62.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#8C5AFA",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "6",
                        x1: "0%",
                        x2: "100%",
                        y1: "62.5%",
                        y2: "37.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#8C5AFA",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "7",
                        x1: "100%",
                        x2: "0%",
                        y1: "62.5%",
                        y2: "37.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#FF4A16",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#FF4A16",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#FF4A16",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "8",
                        x1: "0%",
                        x2: "100%",
                        y1: "37.5%",
                        y2: "62.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#00E992",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#00E992",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#00E992",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "9",
                        x1: "100%",
                        x2: "0%",
                        y1: "37.5%",
                        y2: "62.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#8C5AFA",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#8C5AFA",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                      (0, r.jsxs)("linearGradient", {
                        id: "10",
                        x1: "0%",
                        x2: "100%",
                        y1: "37.5%",
                        y2: "62.5%",
                        children: [
                          (0, r.jsx)("stop", {
                            offset: "0%",
                            stopColor: "#FFD706",
                            stopOpacity: "0",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "50%",
                            stopColor: "#FFD706",
                          }),
                          (0, r.jsx)("stop", {
                            offset: "100%",
                            stopColor: "#FFD706",
                            stopOpacity: "0",
                          }),
                        ],
                      }),
                    ],
                  }),
                  y.map((e, n) =>
                    (0, r.jsx)(
                      l.E.path,
                      {
                        d: e,
                        stroke: "url(#".concat(n, ")"),
                        custom: n,
                        animate: t,
                      },
                      n,
                    ),
                  ),
                ],
              }),
            })
          );
        });
      var f = t(39892),
        v = t(70479),
        g = t.n(v),
        x = t(90218);
      function _createMdxContent(e) {
        let n = Object.assign(
          { ol: "ol", li: "li", p: "p", strong: "strong", a: "a" },
          (0, o.ah)(),
          e.components,
        );
        return (0, r.jsxs)(f.Z, {
          title: "Terms of Service | evervault",
          children: [
            (0, r.jsx)(x.Z, {
              subtitle: "Legal",
              title: "Terms of Service",
              description: "Last updated / November / 2023",
            }),
            (0, r.jsx)("section", {
              className: g().prose,
              children: (0, r.jsx)("article", {
                className: "container",
                children: (0, r.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, r.jsxs)("div", {
                    className: "col-md-9 mb-64",
                    children: [
                      (0, r.jsxs)(n.ol, {
                        children: [
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Overview of this Agreement",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'This evervault Services Agreement ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Agreement",
                                          }),
                                          '") is a legal\nagreement between evervault Limited ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "evervault",
                                          }),
                                          '", "',
                                          (0, r.jsx)(n.strong, {
                                            children: "us",
                                          }),
                                          '",\nor "',
                                          (0, r.jsx)(n.strong, {
                                            children: "we",
                                          }),
                                          '") and the entity or person ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Customer",
                                          }),
                                          '",\n"',
                                          (0, r.jsx)(n.strong, {
                                            children: "you",
                                          }),
                                          '", "',
                                          (0, r.jsx)(n.strong, {
                                            children: "your",
                                          }),
                                          '", or "',
                                          (0, r.jsx)(n.strong, {
                                            children: "user",
                                          }),
                                          '") who registered on the\nEvervault Account page to receive certain data preserving,\ntechnology and other business services that may be offered by\nEvervault and its affiliates including evervault websites (each,\na "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Service",
                                          }),
                                          '"). This Agreement describes the terms and\nconditions that apply to your use of the Services. If you do not\nunderstand any of the terms of this Agreement, please contact us\nbefore using the Services. Before using the Services, you must\nregister with evervault and create an account (an "',
                                          (0, r.jsx)(n.strong, {
                                            children: "evervault\nAccount",
                                          }),
                                          '").',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children: (0, r.jsx)(n.strong, {
                                          children:
                                            "By creating an evervault Account or by accessing or using the\nServices, you acknowledge and agree that you have read,\nunderstand and agree to be bound by this Agreement. You further\nacknowledge and agree that you have read and understand our\nPrivacy Policy. If you do not agree to the terms and conditions\nof this Agreement, please do not access or use the Services.",
                                        }),
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          'We may amend or update the terms of this Agreement at any time,\nsolely with prospective effect or change, delete, discontinue,\nor impose conditions on use of the Services by posting such\nchanges on our website or any other website we maintain or own.\nWe will provide you with notice of any material changes through\nthe website, via email, or through other reasonable means. If\nyou are an existing evervault user, the changes will come into\neffect on the date we specify in the notice, and your use of the\nServices after a change has taken effect constitutes your\nacceptance of the terms of the modified Agreement. You can\naccess a copy of the current terms of this Agreement on our\nwebsite at any time. You can find out when this Agreement was\nlast changed by checking the "Last updated" date at the top of\nthe Agreement.',
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "Registration and unauthorized account use",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'To access the Services, you must register for an evervault\nAccount by creating a user name, password and providing other\ninformation. You agree to provide us with accurate, complete,\nand current registration information about yourself. It is your\nresponsibility to ensure that your password remains confidential\nand secure. By registering, you agree that you are fully\nresponsible for all activities that occur under your user name\nand password. We may assume that any communications we receive\nunder your account have been made by you. If you are a billing\nowner, an administrator, or if you have confirmed in writing\nthat you have the authority to make decisions on behalf of a\ncustomer ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Account Administrator",
                                          }),
                                          '"), you represent and\nwarrant that you are authorized to make decisions on behalf of\nthe Customer and agree that evervault is entitled to rely on\nyour instructions.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          "You are responsible for notifying us\nat ",
                                          (0, r.jsx)(n.a, {
                                            href: "mailto:support@evervault.com%20",
                                            children: "support@evervault.com",
                                          }),
                                          " if\nyou become aware of any unauthorized use of or access to your\naccount. You understand and agree that we may require you to\nprovide information that may be used to confirm your identity\nand help ensure the security of your account. evervault will not\nbe liable for any loss, damages, liability, expenses or legal\nfees that you may incur as a result of someone else using your\npassword or account, either with or without your knowledge\nand/or authorization, and regardless of whether you have or have\nnot advised us of such unauthorized use. You will be liable for\nlosses, damages, liability, expenses and legal fees incurred by\nEvervault or a third party due to someone else using your\naccount. In the event that the Account Administrator or Customer\nloses access to an account or otherwise requests information\nabout an evervault Account, evervault reserves the right to\nrequest from the Account Administrator or Customer any\nverification it deems necessary before restoring access to or\nproviding information about such account in its sole discretion.",
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Representative",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'You or the person or people creating an evervault Account\n("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Representative",
                                          }),
                                          "\") individually represent and warrant to\nEvervault that your Representative is authorised to provide the\nrelevant information described in the account details on your\nbehalf and to bind you to this Agreement. We may require you or\nyour Representative to provide additional information or\ndocumentation demonstrating your Representative's authority.\nWithout the express written consent of evervault, neither you\nnor your Representative may register or attempt to register for\nan evervault Account on behalf of a user evervault previously\nterminated from use of the Services.",
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The following special requirements apply in relation to persons\nthat are not at least 18 years old. If you are an individual or\nsole proprietor, and you are not at least 18 years old, but you\nare 13 years old or older, your Representative must be your\nparent or legal guardian. If you are a legal entity that is\nowned, directly or indirectly, by an individual who is not at\nleast 18 years old, but is 13 years old or older, your\nRepresentative must either obtain the consent of your board or\nof an authorised officer to create an evervault Account. Any\nsuch approving board, authorised officer, parent, or legal\nguardian is responsible to evervault and is legally bound to\nthis Agreement as if it had agreed to the terms of this\nAgreement itself. You may not use the Services if you are under\n13 years of age.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Verification and risk assessment",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "At any time during the term of this Agreement and your use of\nthe Services, we may require additional information from you to\nverify beneficial ownership or control of the business, validate\ninformation you provided, verify you or your Representative's\nidentity, and assess the risk associated with your business.\nThis additional information may include business invoices,\ncopies of government-issued identification, business licences,\nor other information related to your business, its beneficial\nowners or principals. Your failure to provide this information\nor material may result in suspension or termination of your\nEvervault Account.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You authorise us to retrieve information about you from our\nservice providers and other third parties, including credit\nreporting agencies and information bureaus and you authorise and\ndirect such third parties to compile and provide such\ninformation to us. You acknowledge that this may include your\nname, addresses, credit history, and other data about you or\nyour Representative. You acknowledge that we may use your\ninformation to verify any other information you provide to us,\nand that any information we collect may affect our assessment of\nyour overall risk to our business. You acknowledge that in some\ncases, such information may lead to suspension or termination of\nyour evervault Account. evervault may periodically update this\ninformation as part of our underwriting criteria and risk\nanalysis procedures.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "Disclosures and notices; electronic signature consent",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "By registering for an evervault Account, you agree that such\nregistration constitutes your electronic signature, and you\nconsent to electronic provision of all disclosures and notices\nfrom evervault, including those required by law. You also agree\nthat your electronic consent will have the same legal effect as\na physical signature. You agree that evervault can provide\nnotices regarding the Services to you through our website or\nplatform, or by mailing notices to the email or physical\naddresses identified in your evervault Account. Notices may\ninclude notifications about your evervault Account, changes to\nthe Services, or other information we are required to provide to\nyou. You also agree that electronic delivery of a notice has the\nsame legal effect as if we provided you with a physical copy. We\nwill consider a notice to have been received by you within 24\nhours of the time a notice is either posted to our website or\nemailed to you.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You authorise us to provide notices to you via text message to\nallow us to verify your or your Representative's control over\nyour evervault Account (such as through two-step verification),\nand to provide you with other critical information about your\nEvervault Account and the Services. In the event of a suspected\nor actual fraud or security threat to your evervault Account,\nEvervault will use SMS, email or another secure procedure to\ncontact you. Standard text or data charges may apply to such\nnotices. Due to the nature of the Services, you will not be able\nto begin using the Services without agreeing to electronic\ndelivery of notices. However, if you do not wish to receive\nnotices electronically then you must terminate your evervault\nAccount.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "evervault's obligations, services and account support",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault shall provide the Services and Documentation to for\nthe Fees in accordance with the terms of this Agreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault represents and warrants to you that for a period of\nninety (90) days from your first use of the Services, the\nServices will function in accordance with this Agreement and the\nDocumentation in all material respects. In the event of a breach\nof this warranty, evervault will use its reasonable commercial\nefforts to remedy the breach or, at evervault's discretion, may\nrefund the Fees paid for access to the Services. Such remedies\nshall be the sole remedy by you against evervault for a breach\nof this warranty.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'evervault has developed and provides access to systems,\nincluding application programming interfaces that may be used to\naccess the Services ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Systems",
                                          }),
                                          '"). You may use the Systems\nsolely as described in the Documentation. You may manage your\nEvervault Account, connect with other service providers, and\nenable additional features through the evervault dashboard\n("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Dashboard",
                                          }),
                                          '"), that may be used to access the Services\nDashboard. evervault will use the Dashboard to provide you with\ninformation about your evervault Account. You may not use the\nSystems for any purpose, function, or feature not described in\nthe Documentation or otherwise communicated to you by us. Due to\nthe nature of the Services, we will update the Systems and\nDocumentation from time to time, and may add or remove\nfunctionality. We will provide you notice in the event of\nmaterial changes, deprecations, or removal of functionality from\nthe Systems so that you may continue using the Services with\nminimal interruption.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          "We will provide you with support to resolve general issues\nrelating to your evervault Account and your use of the Services.\nThis support includes resources and documentation that we make\navailable to you through the current versions of evervault's\nsupport pages, Systems documentation, and other pages on our\nwebsite (collectively, \"",
                                          (0, r.jsx)(n.strong, {
                                            children: "Documentation",
                                          }),
                                          '"). The most efficient\nway to get answers to your questions is to review our\nDocumentation. If you still have questions after reviewing the\nDocumentation, please contact us at ',
                                          (0, r.jsx)(n.a, {
                                            href: "support@evervault.com",
                                            children: "support@evervault.com",
                                          }),
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "Customer's obligations and acceptable use",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "By accepting using the Services, you represent and warrant\nthat: (i) you are eligible to register and use the Services and\nhave the authority to execute and perform the obligations\nrequired by this Agreement; (ii) that any information you\nprovide us about your business, products, or services is\naccurate and complete; and (iii) that your employees,\ncontractors and agents will at all times act consistently with\nthe terms of this Agreement. The rights provided under this\nAgreement are granted to you only, and shall not be considered\ngranted to any of your subsidiary or holding companies.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children: "You also agree to:",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "i. provide evervault with all necessary co-operation in\nrelation to this Agreement and all necessary access to such\ninformation as may be required by evervault, in order to\nprovide the Services, including but not limited to data,\nsecurity access information and configuration services;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "ii. comply with all applicable laws and regulations with respect\nto your activities under this Agreement;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "iii. ensure that the any person who uses the Services and the\nDocumentation under or in relation to your account does so\nin accordance with the terms and conditions of this\nAgreement and you shall be responsible for any breach of\nthis Agreement by any such user;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "iv. carry out all other Customer responsibilities set out in\nthis Agreement in a timely and efficient manner. In the\nevent of any delays in your provision of such assistance as\nagreed by the parties, evervault may adjust any agreed\ntimetable or delivery schedule as reasonably necessary;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "v. ensure that the authorised users use the Services and the\nDocumentation in accordance with the terms and conditions of\nthis Agreement and you shall be responsible for any user's\nbreach of this Agreement;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "vi. obtain and shall maintain all necessary licences, consents,\nand permissions necessary for evervault, its contractors and\nagents to perform their obligations under this Agreement,\nincluding without limitation the Services;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "vii. ensure that your network and systems comply with the\nrelevant specifications provided by evervault from time to\ntime;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "viii. us all reasonable endeavours to prevent any unauthorised\naccess to, or use of, the Services and/or the\nDocumentation and, in the event of any such unauthorised\naccess or use, promptly notify evervault; and",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "ix. be, to the extent permitted by law and except as otherwise\nexpressly provided in this Agreement, solely responsible for\nprocuring, maintaining and securing its network connections\nand telecommunications links from its systems to\nEvervault's data centres, and all problems, conditions,\ndelays, delivery failures and all other loss or damage\narising from or relating to the Customer's network\nconnections or telecommunications links or caused by the\ninternet.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Except to the extent expressly permitted by applicable law, you\nshall not:",
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'i. attempt to copy, modify, duplicate, create derivative works\nfrom, frame, mirror, republish, download, display, transmit,\nor distribute all or any portion of means the online\nsoftware applications provided by evervault as part of the\nServices ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Software",
                                          }),
                                          '"), Services and/or Documentation (as\napplicable) in any form or media or by any means; or',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "i. attempt to de-compile, reverse compile, disassemble, reverse\nengineer or otherwise reduce to human-perceivable form all\nor any part of the evervault software or Services; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "ii. access all or any part of the Services and Documentation in\norder to build a product or service which competes with the\nServices and/or the Documentation; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "iii. use the Services and/or Documentation to provide services\nto third parties, e.g. on a service bureau basis; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "iv. license, sell, rent, lease, transfer, assign, distribute,\ndisplay, disclose, or otherwise commercially exploit, or\notherwise make the Services and/or Documentation available\nto any third party; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "v. attempt to obtain, or assist third parties in obtaining,\naccess to the Services and/or Documentation, other than as\nprovided under this clause; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "vi. introduce or permit the introduction of, any Virus or\nVulnerability into evervault's network and information\nsystems.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You represent and warrant that you will not use our Services:",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "i. for an unauthorised, fraudulent or illegal purpose;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "ii. to attempt to circumvent applicable law or a third party's\nlawful rights;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "iii. in any manner that interferes with the normal operation of\nthe Services;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "iv. to incorporate any material to which you do not possess all\nnecessary rights or which infringes or misappropriates any\nintellectual property or proprietary right of any party,\nincluding, without limitation, any patent, copyright,\ntrademark, trade secret or moral right or any right of\npublicity or privacy;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "v. to access, store, distribute or transmit any Viruses;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "vi. to access, store, distribute or transmit any material is\nunlawful, harmful, threatening, defamatory, obscene,\ninfringing, harassing or racially or ethnically offensive,\nfacilitates illegal activity, depicts sexually explicit\nimages, promotes unlawful violence, is discriminatory based\non race, gender, colour, religious belief, sexual\norientation, disability, or is otherwise illegal or causes\ndamage or injury to any person or property;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "vii. to send any unsolicited or unauthorized advertising,\npromotional materials, 'junk mail', 'spam', 'chain\nletters', 'pyramid schemes', or any other form of such\nsolicitation; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "viii. to exploit children or minors.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'For the purpose of this Agreement, "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Virus",
                                          }),
                                          '" means any thing\nor device (including any software, code, file or programme)\nwhich may: prevent, impair or otherwise adversely affect the\noperation of any computer software, hardware or network, any\ntelecommunications service, equipment or network or any other\nservice or device; prevent, impair or otherwise adversely affect\naccess to or the operation of any programme or data, including\nthe reliability of any programme or data (whether by\nrearranging, altering or erasing the programme or data in whole\nor part or otherwise); or adversely affect the user experience,\nincluding worms, trojan horses, viruses and other similar things\nor devices. "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Vulnerability",
                                          }),
                                          '" means a weakness in the\ncomputational logic (for example, code) found in software and\nhardware components that when exploited, results in a negative\nimpact to the confidentiality, integrity, or availability, and\nthe term Vulnerabilities shall be construed accordingly.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault reserves the right, without liability or prejudice to\nits other rights, to refuse, condition, or suspend (with notice\nto you where practicable) access to the Services that we\nbelieve: (i) may violate this Agreement or other agreements you\nmay have with evervault;; or (ii) expose you, evervault, or\nothers to material risks which in evervault's opinion, are\nunacceptable. If we suspect or know that you are using or have\nused the Services for fraudulent or illegal purposes, we may\nshare any information related to such activity with the\nappropriate financial institution, regulatory authority, or law\nenforcement agency consistent with our legal obligations. This\ninformation may include information about you, your evervault\nAccount, your customers, and transactions made through your use\nof the Services.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault is not responsible for the products or services you\npublicize or sell. You affirm that you are solely responsible\nfor the nature and quality of the products or services you\nprovide, and for delivery, support, refunds, returns, and for\nany other ancillary services you provide to your customers. You\nare responsible for knowing whether a transaction initiated by\nyour customer is erroneous or suspicious. You are solely\nresponsible for any losses you incur due to erroneous or\nfraudulent transactions in connection with your use of the\nServices. You are solely responsible for providing support to\nyour customers regarding transaction receipts, product or\nservice delivery, support, returns, refunds, and any other\nissues related to your products and services and business\nactivities. We are not responsible for providing support for the\nServices to your customers unless we agree to do so in a\nseparate agreement with you or one of your customers.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children: (0, r.jsx)(n.strong, {
                          children:
                            "Data Usage, Privacy, Security and Confidentiality",
                        }),
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "8",
                        children: [
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Data Usage Overview",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Protecting, securing, and maintaining the information processed\nand handled through the Services is one of our top priorities,\nand it should be yours too. This section describes our\nrespective obligations when handling and storing information\nconnected with the Services.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The following terms used in this section relate to data provided\nto evervault by you or your customers, or received or accessed\nby you through your use of the Services:",
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'a. "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Data Controller",
                                          }),
                                          '" means the entity that alone or jointly\ndetermines the purposes and means of processing of personal\ndata;',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'b. "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Data Processor",
                                          }),
                                          '" means the entity which processes\npersonal data on behalf of the Data Controller;',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'c. "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Personal Data",
                                          }),
                                          '" means information that directly or\nindirectly identifies a specific living person (not a\ncompany, legal entity, or machine) and is transmitted to or\naccessible through the Services.',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'd. "',
                                          (0, r.jsx)(n.strong, {
                                            children: "evervault Data",
                                          }),
                                          '" means details of the transactions over\nEvervault Systems, information used in fraud detection and\nanalysis, aggregated or anonymized information generated\nfrom Data, and any other information created by or\noriginating from evervault or the Services.',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'e. "',
                                          (0, r.jsx)(n.strong, {
                                            children: "User Data",
                                          }),
                                          '" means information that describes your\nbusiness and its operations, your products or services, and\norders placed by customers.',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'f. The term "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Data",
                                          }),
                                          '" used without a modifier means all\nPersonal Data, User Data, Payment Data, and evervault Data.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "evervault as Data Controller",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "Protection of Personal Data is extremely important to us. Our\nPrivacy Policy explains how and for what purposes we collect,\nuse, retain, disclose, and safeguard Personal Data as Data\nController for example to mitigate fraud, financial loss, or\nother harm to users, customers and evervault. You acknowledge\nthat evervault is the Data Controller with respect to the\nprocessing of Personal Data for which evervault determines the\npurposes and essential means of processing as set out in\nEvervault's Privacy Policy available at\n",
                                      (0, r.jsx)(n.a, {
                                        href: "https://evervault.com/legal/privacy",
                                        children:
                                          "https://evervault.com/legal/privacy",
                                      }),
                                      " as it is amended from time\nto time. We do not provide Personal Data to unaffiliated parties\nfor marketing their products to you. You understand evervault's\nuse of Data for the purposes and in a manner consistent with\nthis section.",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "evervault of Data Processor",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "To the extent that we are a Data Processor where we process\nPersonal Data to provide the Services to you, we will do so in\naccordance with the terms of this Agreement and lawful\ninstructions reasonably given by you to us from time to time,\nand we will employ appropriate technical and organisational\nmeasures to protect such Personal Data. evervault will only use\nUser Data as permitted by this Agreement, by other agreements\nbetween you and us, or as otherwise directed or authorised by\nyou.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault will provide some or all of the Services from systems\nlocated within the United States or other countries outside of\nIreland. As such, it is your obligation to disclose to your\ncustomers that Personal Data may be transferred, processed and\nstored outside of Ireland and, as set forth in our Privacy\nPolicy, may be subject to disclosure as required by applicable\nlaws, and to obtain from your customers all necessary consents\nunder applicable laws in relation to the foregoing. If we become\naware of an unauthorised acquisition, disclosure or loss of\nPersonal Data on our systems, we will notify you consistent with\nour obligations under applicable law. We will also notify you\nand provide you sufficient information regarding the\nunauthorised acquisition, disclosure or loss to help you\nmitigate any negative impact on your customer.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "We will not be liable for any claim brought by a data subject\narising from any action or omission by us, to the extent that\nsuch action or omission resulted from your instructions.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Your data privacy obligations",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You agree to the terms of our Privacy Policy, which we may\nupdate from time to time.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You affirm that you are now and will continue to be compliant\nwith all applicable laws governing the privacy, protection, and\nyour use of Data that you provide to us or access through your\nuse of the Services. You will provide evidence of your\ncompliance to us upon our request. If you do not provide\nevidence of such compliance to our satisfaction, we may suspend\nyour evervault Account or terminate this Agreement. You also\naffirm that you have obtained all necessary rights and consents\nunder applicable laws to disclose to evervault -- or allow\nEvervault to collect, use, retain, and disclose -- any Personal\nData that you provide to us or authorise us to collect,\nincluding Data that we may collect directly from customers using\ncookies or other similar means. You may not use any Personal\nData to market to customers unless you have received the express\nconsent from a specific customer to do so.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "evervault's Security Controls",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault is responsible for protecting the security of Data in\nour possession. We will maintain commercially reasonable\nadministrative, technical, and physical procedures to protect\nUser Data and Personal Data stored in our servers from\nunauthorised access, accidental loss, modification, or breach,\nand we will comply with applicable laws when we handle User and\nPersonal Data. However, no security system is impenetrable and\nwe cannot guarantee that unauthorised parties will never be able\nto defeat our security measures or misuse any Data in our\npossession. .In our sole discretion, we may take any action,\nincluding suspension of your evervault Account, to maintain the\nintegrity and security of the Services or Data, or to prevent\nharm to you, us, customers, or others. You waive any right to\nmake a claim against us for losses you incur that may result\nfrom such actions where we can demonstrate that there was a\nreasonable basis for such action.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          'You are solely responsible for the security of any Data on your\nwebsite, your servers, in your possession, or that you are\notherwise authorised to access or handle. You provide User Data\nand Personal Data to evervault with the understanding that any\nsecurity measures we provide may not be appropriate or adequate\nfor your business, and you agree to implement security\nprocedures and controls ("Security Controls") and any additional\ncontrols that meet your specific requirements. You are\nresponsible for assessing the security requirements of your\nbusiness, and selecting and implementing Security Controls\nappropriate to mitigate your exposure to security incidents. We\nmay provide Security Controls as part of the Services, or\nsuggest that you implement specific Security Controls. However,\nyour responsibility for securing your business is not diminished\nby any Security Controls that we provide or suggest, and if you\nbelieve that the Security Controls we provide are insufficient,\nthen you must separately implement additional controls that meet\nyour requirements. You warrant that you have conducted\nappropriate due diligence on the evervault Services and Security\nControls necessary for your business.',
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "If we believe that a security breach, leak, loss, or compromise\nof data has occurred on your systems, website, or app affecting\nyour compliance with this Agreement, we may require you to\npermit a third-party auditor approved by us to conduct a\nsecurity audit of your systems and facilities, and you must\nfully cooperate with any requests for information or assistance\nthat the auditor makes to you as part of the security audit.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Data Processing Agreement",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "Our obligations as Data Processor are set out in our Data\nProcessing Agreement located here:\n",
                                      (0, r.jsx)(n.a, {
                                        href: "https://evervault.com/legal/data-processing-agreement",
                                        children:
                                          "https://evervault.com/legal/data-processing-agreement",
                                      }),
                                      ". Please\ncontact us if you would like a signed soft copy.",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Confidentiality",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'Each party receiving Confidential Information\n("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Recipient",
                                          }),
                                          '") relating to the other or its Affiliates\n("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Disclosing Party",
                                          }),
                                          '") shall keep that information\nconfidential and in accordance with this clause 13. In\nparticular the Recipient shall:',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "a. use the Disclosing Party's Confidential Information solely\nfor the purposes of fulfilling its obligations under this\nAgreement;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "b. keep the Disclosing Party's Confidential Information secure\nand take no lesser security measures and degree of care to\nprotect the Disclosing Party's Confidential Information\nthan the Recipient applies to its own confidential or\nproprietary information; and",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "c. not disclose the Disclosing Party's Confidential\nInformation to any third party except with the prior written\nconsent of the Disclosing Party or in accordance with this\nclause 13.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Notwithstanding clause 14.1, the Recipient may disclose the\nDisclosing Party's Confidential Information to its and its\naffiliates' directors, employees, agents and professional\nadvisors, and to any other third party (including in the case of\nEvervault, a sub-contractor), in each case who are directly\ninvolved in, and need to know such Confidential Information for\nthe purpose of the provision or receipt of the Services and the\nRecipient shall ensure that each such person is subject to\nconfidentiality obligations equivalent to those set out in this\nclause 13.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The obligations of confidentiality set out in this clause 13\nshall not apply:",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "a. where the Disclosing Party has given its specific prior\nwritten consent to the disclosure;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "b. to Confidential Information which at the Effective Date is,\nor becomes at any time after that date, within the public\ndomain (other than as a result of a breach of this clause\n13);",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "c. where the Recipient can show that the information was\nobtained from a third party lawfully;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "d. where disclosure is required to any potential or actual\npurchaser of or potential or actual investor in the\nRecipient or their advisers or financiers (including,\nwithout limitation, as part of a due diligence process),\nprovided that any such person enters into confidentiality\nundertakings materially equivalent to the provisions of this\nclause 13;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "e. where the information was developed by, or for, the\nRecipient independently of any information received under\nthis Agreement and without dependence on, reference to, or\nknowledge of, that information; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "f. where the Recipient is required to disclose the Disclosing\nParty's Confidential Information by a court or regulatory\nauthority.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          '"',
                                          (0, r.jsx)(n.strong, {
                                            children:
                                              "Confidential Information",
                                          }),
                                          '" means all information which\nrelates to the business affairs, finance, products, data,\ndatabases, specifications, documentation, software listings,\ndevelopments, trade secrets, know how, personnel, customers and\nsuppliers of either party, provided that such information is\nmarked or identified as confidential, restricted, proprietary or\nwith a similar designation or, if unmarked, which the Recipient\nshould reasonably know is confidential whether disclosed orally\nor in writing.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Fees and taxes",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'evervault will provide the Services to you at the rates and for\nthe fees ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Fees",
                                          }),
                                          '") described on the Pricing page\n(',
                                          (0, r.jsx)(n.a, {
                                            href: "https://evervault.com/pricing",
                                            children:
                                              "https://evervault.com/pricing",
                                          }),
                                          ") and incorporated into this\nAgreement. We may revise the Fees at any time. However, we will\nprovide you with at least 30 days' advance notice before\nrevisions become applicable to you (or a longer period of notice\nif this is required by applicable law).",
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'You are also obligated to pay all taxes, fees and other charges\nimposed by any governmental authority, including any value added\ntax, goods and services tax, sales tax and applicable indirect\nand transactional taxes ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Taxes",
                                          }),
                                          '") on the Services provided\nunder this Agreement. Our Fees are exclusive of any applicable\nTaxes, except as expressly stated to the contrary. You have sole\nresponsibility and liability for: (i) determining what, if any,\nTaxes apply to the sale of your products and services,\nacceptance of donations, or payments you receive in connection\nwith your use of the Services; and (ii) assessing, collecting,\nreporting, and remitting Taxes for your business to the\nappropriate tax and revenue authorities. If we are required to\nwithhold any Taxes, or we are unable to validate any tax-related\nidentification information you provide to us, we may deduct such\nTaxes from amounts otherwise owed and pay them to the\nappropriate taxing authority.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Term and termination",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'This Agreement is effective upon the date you first access or\nuse the Services ("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Effective Date",
                                          }),
                                          '") and continues until\nterminated by you or evervault. You may terminate this Agreement\nby closing your evervault Account at any time and ceasing to use\nthe Services. If you use the Services again or register for\nanother evervault Account, you are consenting to and will be\nsubject to the terms of this Agreement. We may terminate this\nAgreement or close your evervault Account at any time for any\nreason by providing you with reasonable advance notice (or such\nperiod of notice as required by applicable law). We may suspend\nyour evervault Account or terminate this Agreement, if: (i) we\ndetermine in our sole discretion that you are ineligible for the\nServices, including because of suspicions of significant fraud\nor credit risk, or any other risks associated with your\nEvervault Account; (ii) you use the Services in a prohibited\nmanner or otherwise do not comply with any of the provisions of\nthis Agreement; (iii) any law requires us to do so; or (iv) we\nare otherwise entitled to do so under this Agreement.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Termination does not immediately relieve you of obligations\nincurred by you under this Agreement. In addition, upon\ntermination you understand and agree that: (i) all licences\ngranted to you by evervault under this Agreement will end; (ii)\nwe reserve the right (but have no obligation except in relation\nto Personal Data) to delete and destroy all of your information\nand account data stored on our servers; (iii) we will not be\nliable to you for compensation, reimbursement, or damages\nrelated to your use of the Services, or any termination or\nsuspension of the Services or deletion of your information or\naccount data; (iv) you shall make no further use of any\nequipment, property, Documentation and other items (and all\ncopies of them), and (v) you are still liable to us for any Fees\nor fines, or other financial obligation incurred by you or\nthrough your use of the Services prior to termination. Any\nrights, remedies, obligations or liabilities of the parties that\nhave accrued up to the date of termination, including the right\nto be reimbursed for all Services offered up to the date of\ntermination and claim damages in respect of any breach of the\nagreement which existed at or before the date of termination\nshall not be affected or prejudiced. With regard to\nreimbursement of Fees, you acknowledge and agree that you may\nchoose to pay fees on a monthly basis in which case you control\nthe payment of fees and when you terminate. On this basis, we\nwill not reimburse you for any Fees on termination.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Third party providers",
                                }),
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "You acknowledge that the Services may be used in conjunction with third\nparty websites and services. You access the content of third party\nwebsites, and correspond with, and purchase products and services from\nthird parties via third-party websites solely at your own risk.\nEvervault makes no representation, warranty or commitment and shall have\nno liability or obligation whatsoever in relation to the content or use\nof, or correspondence with, any such third-party website, or any\ntransactions completed, and any contract entered into by you, with any\nsuch third party. Any contract entered into and any transaction\ncompleted via any third-party website is between you and the relevant\nthird party, and not evervault. evervault recommends that you refer to\nthe third party's website terms and conditions and privacy policy prior\nto using the relevant third-party website. evervault does not endorse or\napprove any third-party website nor the content of any of the\nthird-party website made available via the Services.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "18",
                        children: [
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Proprietary rights",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'In this Agreement, "',
                                          (0, r.jsx)(n.strong, {
                                            children: "IP",
                                          }),
                                          '" means patents, utility models,\nrights to inventions, copyright and neighbouring and related\nrights, trade marks, service marks, logos and designs, business\nnames and domain names, rights in get-up and trade dress,\ngoodwill and the right to sue for passing off or unfair\ncompetition, rights of publicity, rights in designs, database\nrights, rights to use, and protect the confidentiality of,\nconfidential information (including know-how and trade secrets),\nmoral rights and all other intellectual property rights, in each\ncase whether registered or unregistered and including all\napplications and rights to apply for and be granted, renewals or\nextensions of, and rights to claim priority from, such rights\nand all similar or equivalent rights or forms of protection\nwhich subsist or will subsist now or in the future in any part\nof the world',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Subject to the terms and conditions of this Agreement, including\nthe payment of the applicable Fees, evervault hereby grants you,\nsolely during the term of this Agreement, a non-exclusive,\nnon-transferable, non-sublicensable right to access and use the\nServices, the Dashboard and the Documentation for your own\ncommercial use.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'Nothing in this Agreement affects evervault and its licensors\nrights, title, and interest in the IP (including rights in\nderivative works embodied by, or contained in the Systems, the\nServices, the Dashboard, and Documentation (collectively,\n"',
                                          (0, r.jsx)(n.strong, {
                                            children: "evervault IP",
                                          }),
                                          '") or any copies thereof.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "We may make updates to the evervault IP or new Services\navailable to you automatically as electronically published by\nEvervault, but we may require action on your part before you may\nuse the evervault IP or new Services (including activation\nthrough the Dashboard, or acceptance of new or additional\nterms). evervault may revoke or terminate this licence at any\ntime if you use evervault IP in a manner prohibited by this\nAgreement. Except as expressly stated herein, this Agreement\ndoes not grant you any rights to, under or in, any patents,\ncopyright, database right, trade secrets, trade names, trade\nmarks (whether registered or unregistered), or any other rights\nor licences in respect of the Services or the Documentation.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You may not: (i) claim or register ownership of evervault IP on\nyour behalf or on behalf of others; (ii) sublicence any rights\nin evervault IP granted by us; (iii) import or export any\nEvervault IP to a person or country in violation of any\ncountry's export control Laws; (iv) use evervault IP in a manner\nthat violates this Agreement or laws; or (v) attempt to do any\nof the foregoing.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You hereby grant evervault a non-exclusive, non-transferable\nlicence to use any IP that you own or have a licence to use and\nwhich is necessary for evervault to use or acces to provide the\nServices.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'You may choose to or we may invite you to submit comments or\nideas about improvements to the Services, our Systems, our\nplatform, or any other component of our products or services\n("',
                                          (0, r.jsx)(n.strong, {
                                            children: "Ideas",
                                          }),
                                          '"). If you submit an Idea to us, we will presume that\nyour submission was voluntary, unsolicited by us, and delivered\nto us without any restrictions on our use of the Idea. You also\nagree that evervault has no fiduciary or any other obligation to\nyou in connection with any Idea you submit to us, and that we\nare free to use your Ideas without any attribution or\ncompensation to you.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault has developed and provides access to the Systems that\nmay be used to access the Services. You may use the Systems\nsolely as described in the Documentation. You may manage your\nEvervault Account, connect with other service providers, and\nenable additional features through the Dashboard. evervault will\nuse the Dashboard to provide you with information about your\nEvervault Account. You may not use the Systems for any purpose,\nfunction, or feature not described in the Documentation or\notherwise communicated to you by us. Due to the nature of the\nServices, we will update the Systems and Documentation from time\nto time, and may add or remove functionality. We will provide\nyou notice in the event of material changes, deprecations, or\nremoval of functionality from the Systems so that you may\ncontinue using the Services with minimal interruption.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "This Agreement shall not prevent evervault from entering into\nsimilar agreements with third parties, or from independently\ndeveloping, using, selling or licensing documentation, products\nand/or services which are similar to those provided under this\nAgreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "IP Indemnity",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'evervault shall defend the Customer from and against any claims\nby a third party that its intellectual property rights have been\ninfringed by the receipt, possession or use of the Services\n("',
                                          (0, r.jsx)(n.strong, {
                                            children: "IPR Claim",
                                          }),
                                          '") and indemnify and hold the Customer harmless\nfrom and against any damages finally awarded by a court of\ncompetent jurisdiction or required to be paid under the terms of\na settlement as a direct result of the IPR Claim provided that:',
                                        ],
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "a. the Customer promptly notifies the Supplier in writing on\nbecoming aware of any reasonably likely or actual IPR Claim\n(such notice to include full details as to the nature and\nbasis of the IPR Claim);",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "b. the Customer makes no admission of liability, communication\nor payment to the third party making the IPR Claim or agrees\nany settlement or compromise of the relevant IPR Claim\nwithout the prior written consent of the Supplier;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "c. the Supplier is granted, at its request, the sole control\nand conduct of the defence of the IPR Claim and of any\nrelated settlement or negotiations; and",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "d. the Customer, at the Supplier's request and expense,\nprovides the Supplier with all reasonable assistance,\ninformation and authority, and acts in accordance with the\nreasonable instructions of the Supplier.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The Supplier shall not have any liability or obligation under\nthis clause 19 in respect of any IPR Claim to the extent that it\nresults from or arises in connection with:",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "a. the Customer's breach of this Agreement or the terms of any\ndocuments or materials provided by evervault to the\nCustomer;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "b. any failure by the Customer to implement changes,\nreplacements or new releases where the infringement would\nhave been avoided or mitigated by such changes, replacements\nor new releases;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "c. the Customer's wilful misconduct or negligence.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "If any IPR Claim is made or is reasonably likely to be made\nagainst the Customer, evervault may at its sole option and\nexpense, and the Customer shall permit evervault to:",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "a. procure for the Customer the right to continue using the\nServices (or any part thereof);",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "b. modify or replace the infringing part of the Services (or\nany part thereof) to avoid the infringement or alleged\ninfringement; or",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "c. on immediate written notice, terminate this Agreement or the\nCustomer's licence and access to the Services (or the\ninfringing part therein).",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The remedies in this clause 19 are the Customer's sole and\nexclusive remedies and the Supplier's sole liabilities in\nrespect of any actual, alleged or reasonably likely IPR Claim.\nNothing in this Agreement shall restrict or limit the Customer's\ngeneral obligation at law to mitigate a loss it may suffer or\nincur as a result of any event that may give rise to a claim\nunder this clause 19.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "Your Liability for Third Party Claims Against Us",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Without limiting, and in addition to, any other obligation that\nyou may owe under this Agreement, you are at all times\nresponsible for the acts and omissions of your employees,\ncontractors and agents, to the extent such persons are acting\nwithin the scope of their relationship with you.",
                                      }),
                                      "\n",
                                      (0, r.jsxs)(n.p, {
                                        children: [
                                          'a. You agree to defend evervault, our affiliates, and their\nrespective employees, agents, and service providers (each an\n"',
                                          (0, r.jsx)(n.strong, {
                                            children: "evervault Entity",
                                          }),
                                          '") against any claim, suit, demand,\naction, or proceeding (each, a "',
                                          (0, r.jsx)(n.strong, {
                                            children: "Claim",
                                          }),
                                          '") brought by a\nthird party against an evervault Entity, and you agree to\nfully reimburse the evervault Entities for any losses,\ncosts, claims, demands, actions, proceedings, fines,\npenalties, awards, damages, compensation, settlements,\nexpenses, professional costs, charges and/or liabilities\nthat result from: (i) any Fees, or any other liability we\nincur that results from your use of the Services; (ii)\nwilful misconduct of your employees, contractors, or agents;\nor (iii) contractual or other relationships between you and\ncustomers.',
                                        ],
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "If you are using Services as a sole proprietor, please keep in\nmind that the law and the terms of this Agreement consider you\nand your business to be legally one and the same. You are\npersonally responsible and liable for your use of the Services,\npayment of Fees, losses based on disputes or fraud, or for any\nother amounts you owe under this Agreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "No warranties and limitation of liability",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Except as expressly and specifically provided in this Agreement:",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "a. you assume sole responsibility for results obtained from the\nuse of the Services and the Documentation by you, and for\nconclusions drawn from such use. evervault shall have no\nliability for any damage caused by errors or omissions in\nany information, instructions or scripts provided to\nEvervault by you in connection with the Services, or any\nactions taken by evervault at your direction;",
                                      }),
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          'b. the Services are provided to you "as is" and without\nwarranty of any kind, whether express, implied, statutory,\nor otherwise, and evervault hereby disclaims and excludes,\nto the maximum extent permitted by law, all other\nwarranties, whether statutory, express, or implied,\nincluding, without limitation, non-infringement of third\nparty rights, fitness for a particular purpose,\nmerchantability, title and satisfactory quality',
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Except to the extent prohibited by law, or to the extent that\nany statutory rights apply that cannot be excluded, limited or\nwaived, evervault does not make any other warranties or\nrepresentations of any kind, whether express, implied, statutory\nor otherwise regarding the Software or the Services including,\nwithout limitation in relation to the quality of the Software or\nthe Services, your use of the Software or the Services being on\nan uninterrupted or error free basis, that the Services,\nDocumentation and/or the information obtained by you through the\nServices will meet your requirements or that the Software or the\nServices will be free from Vulnerabilities. You acknowledge and\nagree that evervault is not responsible for any delays, delivery\nfailures, or any other loss or damage resulting from the\ntransfer of data over communications networks and facilities,\nincluding the internet, and you acknowledge that the Services\nand Documentation may be subject to limitations, delays and\nother problems inherent in the use of such communications\nfacilities.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Under no circumstances will either party be responsible or\nliable to you, whether in tort (including for negligence or\nbreach of statutory duty), contract, misrepresentation,\nrestitution or otherwise for any indirect, punitive, incidental,\nspecial, consequential, or exemplary damages (including any loss\nof profits, loss of business, depletion of goodwill and/or\nsimilar losses or loss or corruption of data or information, or\npure economic loss).",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault shall not be liable for any loss or damage resulting\nfrom your use or inability to use the Services or for the\nunavailability of the Services, for lost profits, personal\ninjury, or property damage, or for any other damages arising out\nof, in connection with, or relating to this Agreement or your\nuse of the Services, even if such damages are foreseeable, and\nwhether or not you or the evervault Entities have been advised\nof the possibility of such damages. The evervault Entities are\nnot liable, and deny responsibility for, any damages, harm, or\nlosses to you arising from or relating to hacking, tampering, or\nother unauthorised access or use of the Services, your evervault\nAccount, or data, or your failure to use or implement anti-fraud\nmeasures, Security Controls, or any other data security measure.\nThe evervault Entities further deny responsibility for all\nliability and damages to you or others caused by: (a) your\naccess or use of the Services inconsistent with the\nDocumentation; (b) any unauthorised access of servers,\ninfrastructure, or data used in connection with the\nServices; (c) interruptions to or cessation of the Services; (d)\nany Viruses that may be transmitted to or through the\nServices; (e) any errors, inaccuracies, omissions, or losses in\nor to any data provided to us; (f) third-party content provided\nby you; or (g) the defamatory, offensive, or illegal conduct of\nothers.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Subject to clause 21.6, each party's aggregate liability for all\nlosses, damages, costs, charges, expenses, claims, actions,\nsuits, demands, proceedings and liabilities of any nature or\nkind arising out of or in connection with this Agreement\n(whether in contract, negligence, tort, statute or otherwise)\nshall not exceed an amount equal to the Fees paid and payable by\nyou to evervault during the twelve-month period immediately\npreceding the event that gave rise to the claim.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault's aggregate liability arising out of or in connection\nwith the IP indemnity in clause 19 shall not exceed 250% the\ntotal Fees paid by the Customer under this Agreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Nothing in this Agreement shall exclude or limit either party's\nliability for death or fraud or any other liability that cannot\nbe limited or excluded under applicable law.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Force majeure",
                                }),
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "evervault shall have no liability to you under this Agreement if it is\nprevented from or delayed in performing its obligations under this\nAgreement, or from carrying on its business, by acts, events, omissions\nor accidents beyond its reasonable control, including, without\nlimitation, strikes, lock-outs or other industrial disputes (whether\ninvolving the workforce of evervault or any other party), failure of a\nutility service or transport or telecommunications network, act of God,\npandemic, war, riot, civil commotion, malicious damage, compliance with\nany law or governmental order, rule, regulation or direction, accident,\nbreakdown of plant or machinery, fire, flood, storm or default of\nsuppliers or subcontractors, provided that you are notified of such an\nevent as soon as reasonably practicable.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "23",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Waiver",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "No failure or delay by a party to exercise any right or remedy provided\nunder this Agreement or by law shall constitute a waiver of that or any\nother right or remedy, nor shall it prevent or restrict the further\nexercise of that or any other right or remedy. No single or partial\nexercise of such right or remedy shall prevent or restrict the further\nexercise of that or any other right or remedy.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "24",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Rights and remedies",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "Except as expressly provided in this Agreement, the rights and remedies\nprovided under this Agreement are in addition to, and not exclusive of,\nany rights or remedies provided by law.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "25",
                        children: [
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Severance",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "If any provision or part-provision of this Agreement is or\nbecomes invalid, illegal or unenforceable, it shall be deemed\ndeleted, but that shall not affect the validity and\nenforceability of the rest of this Agreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "If any provision or part-provision of this Agreement is deemed\ndeleted the parties shall negotiate in good faith to agree a\nreplacement provision that, to the greatest extent possible,\nachieves the intended commercial result of the original\nprovision.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children:
                                    "PCI DSS Compliance & Responsibility",
                                }),
                              }),
                              "\n",
                              (0, r.jsx)(n.p, {
                                children:
                                  "This section is applicable to Customers who purchased and have an active evervault PCI solution subscription:",
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The Customer acknowledges and agrees that while evervault provides the tools necessary to encrypt card holder data in a PCI DSS (Payment Card Industry Data Security Standard) compliant manner, it is the responsibility of the Customer to correctly and effectively implement and manage these tools within their organization and to appropriately scope and maintain PCI DSS compliance, in line with any demarcation of responsibilities agreed with evervault.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The Customer acknowledges and agrees that while evervault provides the tools necessary to encrypt card holder data in a PCI DSS (Payment Card Industry Data Security Standard) compliant manner, it is the responsibility of the Customer to correctly and effectively implement and manage these tools within their organization and to appropriately scope and maintain PCI DSS compliance, in line with any demarcation of responsibilities agreed with evervault.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "The Customer acknowledges and agrees that while evervault provides the tools necessary to encrypt card holder data in a PCI DSS (Payment Card Industry Data Security Standard) compliant manner, it is the responsibility of the Customer to correctly and effectively implement and manage these tools within their organization and to appropriately scope and maintain PCI DSS compliance, in line with any demarcation of responsibilities agreed with evervault.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Entire agreement",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "This Agreement constitutes the entire agreement between the\nparties and supersedes and extinguishes all previous agreements,\npromises, assurances, warranties, representations and\nunderstandings between them, whether written or oral, relating\nto its subject matter.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Each party acknowledges that in entering into this Agreement it\ndoes not rely on, and shall have no remedies in respect of, any\nstatement, representation, assurance or warranty (whether made\ninnocently or negligently) that is not set out in this\nAgreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "Each party agrees that it shall have no claim for innocent or\nnegligent misrepresentation or negligent misstatement based on\nany statement in this Agreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "Assignment",
                                }),
                              }),
                              "\n",
                              (0, r.jsxs)(n.ol, {
                                children: [
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "You shall not, without the prior written consent of evervault,\nassign, transfer, charge, sub-contract or deal in any other\nmanner with all or any of its rights or obligations under this\nAgreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                  (0, r.jsxs)(n.li, {
                                    children: [
                                      "\n",
                                      (0, r.jsx)(n.p, {
                                        children:
                                          "evervault may at any time assign, transfer, charge, sub-contract\nor deal in any other manner with all or any of its rights or\nobligations under this Agreement.",
                                      }),
                                      "\n",
                                    ],
                                  }),
                                  "\n",
                                ],
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                          (0, r.jsxs)(n.li, {
                            children: [
                              "\n",
                              (0, r.jsx)(n.p, {
                                children: (0, r.jsx)(n.strong, {
                                  children: "No partnership or agency",
                                }),
                              }),
                              "\n",
                            ],
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "Nothing in this Agreement is intended to or shall operate to create a\npartnership between the parties, or authorise either party to act as\nagent for the other, and neither party shall have the authority to act\nin the name or on behalf of or otherwise to bind the other in any way\n(including, but not limited to, the making of any representation or\nwarranty, the assumption of any obligation or liability and the exercise\nof any right or power).",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "30",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Publicity",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "Customer grants evervault the right to use the Customer’s company name and logo as a reference for marketing or promotional purposes on our website and in other public or private communications with our existing or potential customers, subject to the Customer’s standard trademark usage guidelines.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "31",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Responding to legal process",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsxs)(n.p, {
                        children: [
                          'evervault may respond to and comply with any writ of attachment, lien,\nlevy, subpoena, warrant, or other legal order ("',
                          (0, r.jsx)(n.strong, { children: "Legal Process" }),
                          '") that\nwe believe to be valid. evervault will review a Legal Process to ensure\nthat it is lawful on its face. If there is a reasonable doubt as to the\nlawfulness of the Legal Process, evervault will take commercially\nreasonable steps to challenge the Legal Process. evervault may, subject\nto the terms of our Privacy Policy, hold any data as required under such\nLegal Process, even if you are receiving data on behalf of other\nparties. Where permitted by law, we will make reasonable efforts to\nprovide you notice of such Legal Process by sending a copy to the email\naddress we have on file for you. evervault is not responsible for any\nlosses, whether direct or indirect, that you may incur as a result of\nour response or compliance with a Legal Process.',
                        ],
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "32",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Language",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "The parties hereby acknowledge that they have required this Agreement\nand all related documents to be in the English language.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "33",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Governing law",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "This Agreement and any dispute or claim arising out of or in connection\nwith it or its subject matter or formation (including non-contractual\ndisputes or claims) shall be governed by and construed in accordance\nwith the laws of Ireland.",
                      }),
                      (0, r.jsxs)(n.ol, {
                        start: "34",
                        children: [
                          "\n",
                          (0, r.jsx)(n.li, {
                            children: (0, r.jsx)(n.strong, {
                              children: "Jurisdiction",
                            }),
                          }),
                          "\n",
                        ],
                      }),
                      (0, r.jsx)(n.p, {
                        children:
                          "Each party irrevocably agrees that the courts of Ireland shall have\nexclusive jurisdiction to settle any dispute or claim arising out of or\nin connection with this Agreement or its subject matter or formation\n(including non-contractual disputes or claims).",
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
      var terms = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { wrapper: n } = Object.assign({}, (0, o.ah)(), e.components);
        return n
          ? (0, r.jsx)(
              n,
              Object.assign({}, e, {
                children: (0, r.jsx)(_createMdxContent, e),
              }),
            )
          : _createMdxContent(e);
      };
    },
    90218: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Hero;
        },
      });
      var r = t(85893),
        o = t(93296),
        i = t.n(o);
      function Hero(e) {
        let { title: n, subtitle: t, description: o } = e;
        return (0, r.jsx)("section", {
          className: i().hero,
          children: (0, r.jsx)("div", {
            className: "container",
            children: (0, r.jsx)(
              "div",
              {
                className: "row justify-content-center",
                children: (0, r.jsxs)("div", {
                  className: "col-12",
                  children: [
                    (0, r.jsx)("h1", { className: i().title, children: n }),
                    t &&
                      (0, r.jsx)("h3", {
                        className: i().subtitle,
                        children: t,
                      }),
                    o && o,
                  ],
                }),
              },
              n.split(" ").join("-").toLowerCase(),
            ),
          }),
        });
      }
    },
    39892: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return Layout;
        },
      });
      var r = t(85893),
        o = t(9008),
        i = t.n(o),
        s = t(4298),
        a = t.n(s),
        l = JSON.parse(
          '{"@context":"https://schema.org","@type":"Organization","name":"evervault","legalName":"evervault Inc.","url":"https://evervault.com","logo":{"@context":"http://schema.org","@type":"ImageObject","width":"512","height":"512","url":"https://evervault.com/logo.png"},"sameAs":["https://www.linkedin.com/company/evervault/","https://twitter.com/evervault/","https://github.com/evervault/","https://angel.co/company/evervault"],"address":{"@type":"PostalAddress","addressLocality":"Dublin","addressCountry":"IE"}}',
        ),
        c = t(12034),
        h = t.n(c),
        d = t(41664),
        u = t.n(d);
      function Layout(e) {
        let {
          children: n,
          preview: t,
          title:
            o = "evervault — Developer building blocks for data security and compliance",
          description:
            s = "evervault provides developers with world-class infrastructure to solve complex data security and compliance problems in days, not months.",
          socialImage: c = "https://evervault.com/social/og.jpg",
          head: d,
          ...p
        } = e;
        return (0, r.jsxs)("div", {
          className: h().layout,
          ...p,
          children: [
            (0, r.jsxs)(i(), {
              children: [
                (0, r.jsx)("title", { children: o }),
                (0, r.jsx)("meta", { name: "description", content: s }),
                (0, r.jsx)("meta", {
                  name: "viewport",
                  content:
                    "width=device-width, initial-scale=1, user-scalable=no",
                }),
                (0, r.jsx)("meta", { name: "theme-color", content: "#63e" }),
                (0, r.jsx)("link", {
                  rel: "icon",
                  type: "image/png",
                  href: "/favicon.png",
                }),
                (0, r.jsx)("link", {
                  rel: "apple-touch-icon",
                  href: "/logo192.png",
                }),
                (0, r.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, r.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                  crossOrigin: "true",
                }),
                (0, r.jsx)("meta", { property: "og:title", content: o }),
                (0, r.jsx)("meta", { property: "og:description", content: s }),
                (0, r.jsx)("meta", { property: "og:image", content: c }),
                (0, r.jsx)("meta", {
                  property: "og:site_name",
                  content: "evervault",
                }),
                (0, r.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, r.jsx)("meta", {
                  name: "twitter:site",
                  content: "@evervault",
                }),
                (0, r.jsx)("meta", {
                  name: "twitter:creator",
                  content: "@evervault",
                }),
                (0, r.jsx)("meta", { name: "twitter:title", content: o }),
                (0, r.jsx)("meta", { name: "twitter:description", content: s }),
                (0, r.jsx)("meta", { name: "twitter:image", content: c }),
                (0, r.jsx)("meta", { name: "twitter:image:alt", content: o }),
                (0, r.jsx)("script", {
                  type: "application/ld+json",
                  dangerouslySetInnerHTML: { __html: JSON.stringify(l) },
                }),
                (0, r.jsx)(a(), {
                  src: "https://jobs.ashbyhq.com/evervault/embed",
                }),
                d,
              ],
            }),
            t &&
              (0, r.jsxs)("div", {
                className: h().preview,
                children: [
                  (0, r.jsx)("p", { children: "You are in preview mode" }),
                  (0, r.jsx)(u(), {
                    href: "/api/exit-preview",
                    children: "Exit Preview",
                  }),
                ],
              }),
            (0, r.jsx)("main", { className: h().main, children: n }),
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
    62226: function (e) {
      e.exports = {
        top: "Background_top__9hJUd",
        heroHome: "Background_heroHome__uJp_7 Background_top__9hJUd",
        middle: "Background_middle__vM0zk Background_top__9hJUd",
        bottom: "Background_bottom__sWYgp Background_top__9hJUd",
        heroAbout: "Background_heroAbout__oCznx Background_top__9hJUd",
        cell: "Background_cell__aU2Mk",
      };
    },
    70479: function (e) {
      e.exports = {
        light: "Text_light__lmRM0",
        lowercase: "Text_lowercase___q6H3",
        uppercase: "Text_uppercase__YCzKb",
        capitalize: "Text_capitalize__hgtn1",
        left: "Text_left__I2sBq",
        right: "Text_right__O7gCL",
        center: "Text_center__uX_8k",
        justify: "Text_justify___V_E0",
        break: "Text_break__1PiEY",
        wrap: "Text_wrap__SAdI1",
        nowrap: "Text_nowrap__cNcII",
        truncate: "Text_truncate__CUrhb",
        h1: "Text_h1__qO08q",
        h2: "Text_h2__rM6ht",
        h3: "Text_h3__1XqHu",
        h4: "Text_h4__Hwzj6",
        h5: "Text_h5__TiHwU",
        h6: "Text_h6__DT7nD",
        lg: "Text_lg__E1tes",
        sm: "Text_sm__L_eVA",
        xs: "Text_xs__P5SvJ",
        weightHair: "Text_weightHair__eKFgi",
        weightThin: "Text_weightThin__6SAqm",
        weightExtraLight: "Text_weightExtraLight__T7SWd",
        weightLight: "Text_weightLight__sCOEV",
        weightBook: "Text_weightBook__Cj7Qv",
        weightRegular: "Text_weightRegular__fNF3i",
        weightMedium: "Text_weightMedium__zZyDh",
        weightSemibold: "Text_weightSemibold__LwrdL",
        weightBold: "Text_weightBold__6Ovw3",
        weightBlack: "Text_weightBlack__CQsDb",
        weightHeavy: "Text_weightHeavy__dNOIZ",
        italic: "Text_italic__Cy64n",
        ul: "Text_ul__994aX",
        ol: "Text_ol__yR2tF",
        dl: "Text_dl__Moiyn",
        dt: "Text_dt__cYS8V",
        dd: "Text_dd___oq9_",
        listStyleNone: "Text_listStyleNone__KAVVO",
        listGroupFlush: "Text_listGroupFlush__EMs9b",
        listGroupFlushLink: "Text_listGroupFlushLink__zq59f",
        quote: "Text_quote__ohCTc",
        link: "Text_link__nsvjc",
        hr: "Text_hr__4magj",
        monospace: "Text_monospace__jOCPv",
        underline: "Text_underline__GDHsk",
        decorationNone: "Text_decorationNone__7_g8q",
        stretchedLink: "Text_stretchedLink__qos1E",
        prose: "Text_prose___eH_n",
        imgFluid: "Text_imgFluid__Tt3RL",
        strong: "Text_strong__VWYbB",
        subtle: "Text_subtle__qAtAw",
        inlineCode: "Text_inlineCode__Hr8zN",
        scrollHorizontally: "Text_scrollHorizontally__OKEyW",
      };
    },
    9008: function (e, n, t) {
      e.exports = t(79201);
    },
    70131: function (e, n, t) {
      "use strict";
      t.d(n, {
        YD: function () {
          return useInView;
        },
      });
      var r = t(67294);
      function _extends() {
        return (_extends =
          Object.assign ||
          function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function _setPrototypeOf(e, n) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function (e, n) {
            return (e.__proto__ = n), e;
          })(e, n);
      }
      var o = new Map(),
        i = new WeakMap(),
        s = 0,
        a = void 0;
      function observe(e, n, t, r) {
        if (
          (void 0 === t && (t = {}),
          void 0 === r && (r = a),
          void 0 === window.IntersectionObserver && void 0 !== r)
        ) {
          var l = e.getBoundingClientRect();
          return (
            n(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio:
                "number" == typeof t.threshold ? t.threshold : 0,
              time: 0,
              boundingClientRect: l,
              intersectionRect: l,
              rootBounds: l,
            }),
            function () {}
          );
        }
        var c = (function (e) {
            var n = Object.keys(e)
                .sort()
                .filter(function (n) {
                  return void 0 !== e[n];
                })
                .map(function (n) {
                  var t;
                  return (
                    n +
                    "_" +
                    ("root" === n
                      ? (t = e.root)
                        ? (i.has(t) || ((s += 1), i.set(t, s.toString())),
                          i.get(t))
                        : "0"
                      : e[n])
                  );
                })
                .toString(),
              t = o.get(n);
            if (!t) {
              var r,
                a = new Map(),
                l = new IntersectionObserver(function (n) {
                  n.forEach(function (n) {
                    var t,
                      o =
                        n.isIntersecting &&
                        r.some(function (e) {
                          return n.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      void 0 === n.isVisible &&
                      (n.isVisible = o),
                      null == (t = a.get(n.target)) ||
                        t.forEach(function (e) {
                          e(o, n);
                        });
                  });
                }, e);
              (r =
                l.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (t = { id: n, observer: l, elements: a }),
                o.set(n, t);
            }
            return t;
          })(t),
          h = c.id,
          d = c.observer,
          u = c.elements,
          p = u.get(e) || [];
        return (
          u.has(e) || u.set(e, p),
          p.push(n),
          d.observe(e),
          function () {
            p.splice(p.indexOf(n), 1),
              0 === p.length && (u.delete(e), d.unobserve(e)),
              0 === u.size && (d.disconnect(), o.delete(h));
          }
        );
      }
      var l = [
        "children",
        "as",
        "triggerOnce",
        "threshold",
        "root",
        "rootMargin",
        "onChange",
        "skip",
        "trackVisibility",
        "delay",
        "initialInView",
        "fallbackInView",
      ];
      function isPlainChildren(e) {
        return "function" != typeof e.children;
      }
      var c = (function (e) {
        function InView(n) {
          var t;
          return (
            ((t = e.call(this, n) || this).node = null),
            (t._unobserveCb = null),
            (t.handleNode = function (e) {
              !t.node ||
                (t.unobserve(),
                e ||
                  t.props.triggerOnce ||
                  t.props.skip ||
                  t.setState({
                    inView: !!t.props.initialInView,
                    entry: void 0,
                  })),
                (t.node = e || null),
                t.observeNode();
            }),
            (t.handleChange = function (e, n) {
              e && t.props.triggerOnce && t.unobserve(),
                isPlainChildren(t.props) || t.setState({ inView: e, entry: n }),
                t.props.onChange && t.props.onChange(e, n);
            }),
            (t.state = { inView: !!n.initialInView, entry: void 0 }),
            t
          );
        }
        (InView.prototype = Object.create(e.prototype)),
          (InView.prototype.constructor = InView),
          _setPrototypeOf(InView, e);
        var n = InView.prototype;
        return (
          (n.componentDidUpdate = function (e) {
            (e.rootMargin !== this.props.rootMargin ||
              e.root !== this.props.root ||
              e.threshold !== this.props.threshold ||
              e.skip !== this.props.skip ||
              e.trackVisibility !== this.props.trackVisibility ||
              e.delay !== this.props.delay) &&
              (this.unobserve(), this.observeNode());
          }),
          (n.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (n.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                n = e.threshold,
                t = e.root,
                r = e.rootMargin,
                o = e.trackVisibility,
                i = e.delay,
                s = e.fallbackInView;
              this._unobserveCb = observe(
                this.node,
                this.handleChange,
                {
                  threshold: n,
                  root: t,
                  rootMargin: r,
                  trackVisibility: o,
                  delay: i,
                },
                s,
              );
            }
          }),
          (n.unobserve = function () {
            this._unobserveCb &&
              (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (n.render = function () {
            if (!isPlainChildren(this.props)) {
              var e = this.state,
                n = e.inView,
                t = e.entry;
              return this.props.children({
                inView: n,
                entry: t,
                ref: this.handleNode,
              });
            }
            var o = this.props,
              i = o.children,
              s = o.as,
              a = (function (e, n) {
                if (null == e) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                return o;
              })(o, l);
            return r.createElement(
              s || "div",
              _extends({ ref: this.handleNode }, a),
              i,
            );
          }),
          InView
        );
      })(r.Component);
      function useInView(e) {
        var n = void 0 === e ? {} : e,
          t = n.threshold,
          o = n.delay,
          i = n.trackVisibility,
          s = n.rootMargin,
          a = n.root,
          l = n.triggerOnce,
          c = n.skip,
          h = n.initialInView,
          d = n.fallbackInView,
          u = r.useRef(),
          p = r.useState({ inView: !!h }),
          y = p[0],
          m = p[1],
          L = r.useCallback(
            function (e) {
              void 0 !== u.current && (u.current(), (u.current = void 0)),
                !c &&
                  e &&
                  (u.current = observe(
                    e,
                    function (e, n) {
                      m({ inView: e, entry: n }),
                        n.isIntersecting &&
                          l &&
                          u.current &&
                          (u.current(), (u.current = void 0));
                    },
                    {
                      root: a,
                      rootMargin: s,
                      threshold: t,
                      trackVisibility: i,
                      delay: o,
                    },
                    d,
                  ));
            },
            [Array.isArray(t) ? t.toString() : t, a, s, l, c, i, d, o],
          );
        (0, r.useEffect)(function () {
          u.current || !y.entry || l || c || m({ inView: !!h });
        });
        var f = [L, y.inView, y.entry];
        return (f.ref = f[0]), (f.inView = f[1]), (f.entry = f[2]), f;
      }
      (c.displayName = "InView"),
        (c.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
    11151: function (e, n, t) {
      "use strict";
      t.d(n, {
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
      var r = t(67294);
      let o = r.createContext({});
      function withMDXComponents(e) {
        return function (n) {
          let t = useMDXComponents(n.components);
          return r.createElement(e, { ...n, allComponents: t });
        };
      }
      function useMDXComponents(e) {
        let n = r.useContext(o);
        return r.useMemo(
          () => ("function" == typeof e ? e(n) : { ...n, ...e }),
          [n, e],
        );
      }
      let i = {};
      function MDXProvider({
        components: e,
        children: n,
        disableParentContext: t,
      }) {
        let s;
        return (
          (s = t
            ? "function" == typeof e
              ? e({})
              : e || i
            : useMDXComponents(e)),
          r.createElement(o.Provider, { value: s }, n)
        );
      }
    },
    32233: function (e, n, t) {
      "use strict";
      t.d(n, {
        _: function () {
          return l;
        },
        E: function () {
          return useAnimationControls;
        },
      });
      var r = t(45487),
        o = t(58172),
        i = t(96912);
      function animationControls() {
        let e = !1,
          n = new Set(),
          t = {
            subscribe: (e) => (n.add(e), () => void n.delete(e)),
            start(t, o) {
              (0, r.k)(
                e,
                "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              );
              let s = [];
              return (
                n.forEach((e) => {
                  s.push((0, i.d)(e, t, { transitionOverride: o }));
                }),
                Promise.all(s)
              );
            },
            set: (t) => (
              (0, r.k)(
                e,
                "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook.",
              ),
              n.forEach((e) => {
                (0, o.gg)(e, t);
              })
            ),
            stop() {
              n.forEach((e) => {
                !(function (e) {
                  e.values.forEach((e) => e.stop());
                })(e);
              });
            },
            mount: () => (
              (e = !0),
              () => {
                (e = !1), t.stop();
              }
            ),
          };
        return t;
      }
      var s = t(96681),
        a = t(58868);
      function useAnimationControls() {
        let e = (0, s.h)(animationControls);
        return (0, a.L)(e.mount, []), e;
      }
      let l = useAnimationControls;
    },
  },
  function (e) {
    e.O(0, [9774, 2888, 179], function () {
      return e((e.s = 88767));
    }),
      (_N_E = e.O());
  },
]);
