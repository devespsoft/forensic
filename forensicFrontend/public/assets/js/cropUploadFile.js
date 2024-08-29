/**
 * @license uploadcare-widget v3.21.0
 *
 * Copyright (c) 2022 Uploadcare, Inc.
 *
 * This source code is licensed under the BSD 2-Clause License
 * found in the LICENSE file in the root directory of this source tree.
 */

!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = "undefined" != typeof globalThis ? globalThis : e || self).uploadcare = t());
})(this, function () {
    "use strict";
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t &&
                (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                n.push.apply(n, i);
        }
        return n;
    }
    function t(t) {
        for (var n = 1; n < arguments.length; n++) {
            var i = null != arguments[n] ? arguments[n] : {};
            n % 2
                ? e(Object(i), !0).forEach(function (e) {
                      s(t, e, i[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
                : e(Object(i)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                  });
        }
        return t;
    }
    function n(e) {
        return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                      return typeof e;
                  }
                : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  })(e);
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function a(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
        }
    }
    function o(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
    }
    function s(e, t, n) {
        return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && d(e, t);
    }
    function c(e) {
        return (c = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
    }
    function d(e, t) {
        return (d =
            Object.setPrototypeOf ||
            function (e, t) {
                return (e.__proto__ = t), e;
            })(e, t);
    }
    function p(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e;
    }
    function f(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return p(e);
    }
    function h(e) {
        var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
                return !1;
            }
        })();
        return function () {
            var n,
                i = c(e);
            if (t) {
                var r = c(this).constructor;
                n = Reflect.construct(i, arguments, r);
            } else n = i.apply(this, arguments);
            return f(this, n);
        };
    }
    function g(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); );
        return e;
    }
    function m() {
        return (m =
            "undefined" != typeof Reflect && Reflect.get
                ? Reflect.get
                : function (e, t, n) {
                      var i = g(e, t);
                      if (i) {
                          var r = Object.getOwnPropertyDescriptor(i, t);
                          return r.get ? r.get.call(arguments.length < 3 ? e : n) : r.value;
                      }
                  }).apply(this, arguments);
    }
    function v(e, t) {
        return (
            (function (e) {
                if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null == n) return;
                var i,
                    r,
                    a = [],
                    o = !0,
                    l = !1;
                try {
                    for (n = n.call(e); !(o = (i = n.next()).done) && (a.push(i.value), !t || a.length !== t); o = !0);
                } catch (e) {
                    (l = !0), (r = e);
                } finally {
                    try {
                        o || null == n.return || n.return();
                    } finally {
                        if (l) throw r;
                    }
                }
                return a;
            })(e, t) ||
            _(e, t) ||
            (function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function b(e) {
        return (
            (function (e) {
                if (Array.isArray(e)) return y(e);
            })(e) ||
            (function (e) {
                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            })(e) ||
            _(e) ||
            (function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            })()
        );
    }
    function _(e, t) {
        if (e) {
            if ("string" == typeof e) return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0;
        }
    }
    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
    }
    var w = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function x(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
    }
    var k = x(function (e) {
            /*!
             * jQuery JavaScript Library v3.6.0
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright OpenJS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2021-03-02T17:08Z
             */
            !(function (t, n) {
                e.exports = t.document
                    ? n(t, !0)
                    : function (e) {
                          if (!e.document) throw new Error("jQuery requires a window with a document");
                          return n(e);
                      };
            })("undefined" != typeof window ? window : w, function (e, t) {
                var n = [],
                    i = Object.getPrototypeOf,
                    r = n.slice,
                    a = n.flat
                        ? function (e) {
                              return n.flat.call(e);
                          }
                        : function (e) {
                              return n.concat.apply([], e);
                          },
                    o = n.push,
                    l = n.indexOf,
                    s = {},
                    u = s.toString,
                    c = s.hasOwnProperty,
                    d = c.toString,
                    p = d.call(Object),
                    f = {},
                    h = function (e) {
                        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item;
                    },
                    g = function (e) {
                        return null != e && e === e.window;
                    },
                    m = e.document,
                    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
                function b(e, t, n) {
                    var i,
                        r,
                        a = (n = n || m).createElement("script");
                    if (((a.text = e), t)) for (i in v) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && a.setAttribute(i, r);
                    n.head.appendChild(a).parentNode.removeChild(a);
                }
                function _(e) {
                    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[u.call(e)] || "object" : typeof e;
                }
                var y = function (e, t) {
                    return new y.fn.init(e, t);
                };
                function w(e) {
                    var t = !!e && "length" in e && e.length,
                        n = _(e);
                    return !h(e) && !g(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
                }
                (y.fn = y.prototype = {
                    jquery: "3.6.0",
                    constructor: y,
                    length: 0,
                    toArray: function () {
                        return r.call(this);
                    },
                    get: function (e) {
                        return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
                    },
                    pushStack: function (e) {
                        var t = y.merge(this.constructor(), e);
                        return (t.prevObject = this), t;
                    },
                    each: function (e) {
                        return y.each(this, e);
                    },
                    map: function (e) {
                        return this.pushStack(
                            y.map(this, function (t, n) {
                                return e.call(t, n, t);
                            })
                        );
                    },
                    slice: function () {
                        return this.pushStack(r.apply(this, arguments));
                    },
                    first: function () {
                        return this.eq(0);
                    },
                    last: function () {
                        return this.eq(-1);
                    },
                    even: function () {
                        return this.pushStack(
                            y.grep(this, function (e, t) {
                                return (t + 1) % 2;
                            })
                        );
                    },
                    odd: function () {
                        return this.pushStack(
                            y.grep(this, function (e, t) {
                                return t % 2;
                            })
                        );
                    },
                    eq: function (e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                    },
                    end: function () {
                        return this.prevObject || this.constructor();
                    },
                    push: o,
                    sort: n.sort,
                    splice: n.splice,
                }),
                    (y.extend = y.fn.extend = function () {
                        var e,
                            t,
                            n,
                            i,
                            r,
                            a,
                            o = arguments[0] || {},
                            l = 1,
                            s = arguments.length,
                            u = !1;
                        for ("boolean" == typeof o && ((u = o), (o = arguments[l] || {}), l++), "object" == typeof o || h(o) || (o = {}), l === s && ((o = this), l--); l < s; l++)
                            if (null != (e = arguments[l]))
                                for (t in e)
                                    (i = e[t]),
                                        "__proto__" !== t &&
                                            o !== i &&
                                            (u && i && (y.isPlainObject(i) || (r = Array.isArray(i)))
                                                ? ((n = o[t]), (a = r && !Array.isArray(n) ? [] : r || y.isPlainObject(n) ? n : {}), (r = !1), (o[t] = y.extend(u, a, i)))
                                                : void 0 !== i && (o[t] = i));
                        return o;
                    }),
                    y.extend({
                        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function (e) {
                            throw new Error(e);
                        },
                        noop: function () {},
                        isPlainObject: function (e) {
                            var t, n;
                            return !(!e || "[object Object]" !== u.call(e)) && (!(t = i(e)) || ("function" == typeof (n = c.call(t, "constructor") && t.constructor) && d.call(n) === p));
                        },
                        isEmptyObject: function (e) {
                            var t;
                            for (t in e) return !1;
                            return !0;
                        },
                        globalEval: function (e, t, n) {
                            b(e, { nonce: t && t.nonce }, n);
                        },
                        each: function (e, t) {
                            var n,
                                i = 0;
                            if (w(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                            else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                            return e;
                        },
                        makeArray: function (e, t) {
                            var n = t || [];
                            return null != e && (w(Object(e)) ? y.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)), n;
                        },
                        inArray: function (e, t, n) {
                            return null == t ? -1 : l.call(t, e, n);
                        },
                        merge: function (e, t) {
                            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                            return (e.length = r), e;
                        },
                        grep: function (e, t, n) {
                            for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
                            return i;
                        },
                        map: function (e, t, n) {
                            var i,
                                r,
                                o = 0,
                                l = [];
                            if (w(e)) for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && l.push(r);
                            else for (o in e) null != (r = t(e[o], o, n)) && l.push(r);
                            return a(l);
                        },
                        guid: 1,
                        support: f,
                    }),
                    "function" == typeof Symbol && (y.fn[Symbol.iterator] = n[Symbol.iterator]),
                    y.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                        s["[object " + t + "]"] = t.toLowerCase();
                    });
                var x =
                    /*!
                     * Sizzle CSS Selector Engine v2.3.6
                     * https://sizzlejs.com/
                     *
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2021-02-16
                     */
                    (function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a,
                            o,
                            l,
                            s,
                            u,
                            c,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m,
                            v,
                            b,
                            _,
                            y = "sizzle" + 1 * new Date(),
                            w = e.document,
                            x = 0,
                            k = 0,
                            C = se(),
                            A = se(),
                            z = se(),
                            T = se(),
                            S = function (e, t) {
                                return e === t && (d = !0), 0;
                            },
                            j = {}.hasOwnProperty,
                            D = [],
                            F = D.pop,
                            E = D.push,
                            I = D.push,
                            P = D.slice,
                            M = function (e, t) {
                                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                                return -1;
                            },
                            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            L = "[\\x20\\t\\r\\n\\f]",
                            N = "(?:\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            R = "\\[" + L + "*(" + N + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
                            B = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                            q = new RegExp(L + "+", "g"),
                            U = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                            V = new RegExp("^" + L + "*," + L + "*"),
                            H = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                            W = new RegExp(L + "|>"),
                            K = new RegExp(B),
                            G = new RegExp("^" + N + "$"),
                            X = {
                                ID: new RegExp("^#(" + N + ")"),
                                CLASS: new RegExp("^\\.(" + N + ")"),
                                TAG: new RegExp("^(" + N + "|[*])"),
                                ATTR: new RegExp("^" + R),
                                PSEUDO: new RegExp("^" + B),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                                bool: new RegExp("^(?:" + O + ")$", "i"),
                                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i"),
                            },
                            Y = /HTML$/i,
                            $ = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            Z = /^[^{]+\{\s*\[native \w/,
                            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + L + "?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function (e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                            },
                            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            re = function (e, t) {
                                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                            },
                            ae = function () {
                                p();
                            },
                            oe = ye(
                                function (e) {
                                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                                },
                                { dir: "parentNode", next: "legend" }
                            );
                        try {
                            I.apply((D = P.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
                        } catch (e) {
                            I = {
                                apply: D.length
                                    ? function (e, t) {
                                          E.apply(e, P.call(t));
                                      }
                                    : function (e, t) {
                                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                                          e.length = n - 1;
                                      },
                            };
                        }
                        function le(e, t, i, r) {
                            var a,
                                l,
                                u,
                                c,
                                d,
                                h,
                                v,
                                b = t && t.ownerDocument,
                                w = t ? t.nodeType : 9;
                            if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
                            if (!r && (p(t), (t = t || f), g)) {
                                if (11 !== w && (d = Q.exec(e)))
                                    if ((a = d[1])) {
                                        if (9 === w) {
                                            if (!(u = t.getElementById(a))) return i;
                                            if (u.id === a) return i.push(u), i;
                                        } else if (b && (u = b.getElementById(a)) && _(t, u) && u.id === a) return i.push(u), i;
                                    } else {
                                        if (d[2]) return I.apply(i, t.getElementsByTagName(e)), i;
                                        if ((a = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return I.apply(i, t.getElementsByClassName(a)), i;
                                    }
                                if (n.qsa && !T[e + " "] && (!m || !m.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                                    if (((v = e), (b = t), 1 === w && (W.test(e) || H.test(e)))) {
                                        for (((b = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(ie, re)) : t.setAttribute("id", (c = y))), l = (h = o(e)).length; l--; )
                                            h[l] = (c ? "#" + c : ":scope") + " " + _e(h[l]);
                                        v = h.join(",");
                                    }
                                    try {
                                        return I.apply(i, b.querySelectorAll(v)), i;
                                    } catch (t) {
                                        T(e, !0);
                                    } finally {
                                        c === y && t.removeAttribute("id");
                                    }
                                }
                            }
                            return s(e.replace(U, "$1"), t, i, r);
                        }
                        function se() {
                            var e = [];
                            return function t(n, r) {
                                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
                            };
                        }
                        function ue(e) {
                            return (e[y] = !0), e;
                        }
                        function ce(e) {
                            var t = f.createElement("fieldset");
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), (t = null);
                            }
                        }
                        function de(e, t) {
                            for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
                        }
                        function pe(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function fe(e) {
                            return function (t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e;
                            };
                        }
                        function he(e) {
                            return function (t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e;
                            };
                        }
                        function ge(e) {
                            return function (t) {
                                return "form" in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? "label" in t
                                            ? "label" in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                                        : t.disabled === e
                                    : "label" in t && t.disabled === e;
                            };
                        }
                        function me(e) {
                            return ue(function (t) {
                                return (
                                    (t = +t),
                                    ue(function (n, i) {
                                        for (var r, a = e([], n.length, t), o = a.length; o--; ) n[(r = a[o])] && (n[r] = !(i[r] = n[r]));
                                    })
                                );
                            });
                        }
                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = le.support = {}),
                        (a = le.isXML = function (e) {
                            var t = e && e.namespaceURI,
                                n = e && (e.ownerDocument || e).documentElement;
                            return !Y.test(t || (n && n.nodeName) || "HTML");
                        }),
                        (p = le.setDocument = function (e) {
                            var t,
                                r,
                                o = e ? e.ownerDocument || e : w;
                            return o != f && 9 === o.nodeType && o.documentElement
                                ? ((h = (f = o).documentElement),
                                  (g = !a(f)),
                                  w != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ae, !1) : r.attachEvent && r.attachEvent("onunload", ae)),
                                  (n.scope = ce(function (e) {
                                      return h.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                                  })),
                                  (n.attributes = ce(function (e) {
                                      return (e.className = "i"), !e.getAttribute("className");
                                  })),
                                  (n.getElementsByTagName = ce(function (e) {
                                      return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length;
                                  })),
                                  (n.getElementsByClassName = Z.test(f.getElementsByClassName)),
                                  (n.getById = ce(function (e) {
                                      return (h.appendChild(e).id = y), !f.getElementsByName || !f.getElementsByName(y).length;
                                  })),
                                  n.getById
                                      ? ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                return e.getAttribute("id") === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((i.filter.ID = function (e) {
                                            var t = e.replace(te, ne);
                                            return function (e) {
                                                var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                                return n && n.value === t;
                                            };
                                        }),
                                        (i.find.ID = function (e, t) {
                                            if (void 0 !== t.getElementById && g) {
                                                var n,
                                                    i,
                                                    r,
                                                    a = t.getElementById(e);
                                                if (a) {
                                                    if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                                    for (r = t.getElementsByName(e), i = 0; (a = r[i++]); ) if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                                                }
                                                return [];
                                            }
                                        })),
                                  (i.find.TAG = n.getElementsByTagName
                                      ? function (e, t) {
                                            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                        }
                                      : function (e, t) {
                                            var n,
                                                i = [],
                                                r = 0,
                                                a = t.getElementsByTagName(e);
                                            if ("*" === e) {
                                                for (; (n = a[r++]); ) 1 === n.nodeType && i.push(n);
                                                return i;
                                            }
                                            return a;
                                        }),
                                  (i.find.CLASS =
                                      n.getElementsByClassName &&
                                      function (e, t) {
                                          if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                      }),
                                  (v = []),
                                  (m = []),
                                  (n.qsa = Z.test(f.querySelectorAll)) &&
                                      (ce(function (e) {
                                          var t;
                                          (h.appendChild(e).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + L + "*(?:''|\"\")"),
                                              e.querySelectorAll("[selected]").length || m.push("\\[" + L + "*(?:value|" + O + ")"),
                                              e.querySelectorAll("[id~=" + y + "-]").length || m.push("~="),
                                              (t = f.createElement("input")).setAttribute("name", ""),
                                              e.appendChild(t),
                                              e.querySelectorAll("[name='']").length || m.push("\\[" + L + "*name" + L + "*=" + L + "*(?:''|\"\")"),
                                              e.querySelectorAll(":checked").length || m.push(":checked"),
                                              e.querySelectorAll("a#" + y + "+*").length || m.push(".#.+[+~]"),
                                              e.querySelectorAll("\\\f"),
                                              m.push("[\\r\\n\\f]");
                                      }),
                                      ce(function (e) {
                                          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = f.createElement("input");
                                          t.setAttribute("type", "hidden"),
                                              e.appendChild(t).setAttribute("name", "D"),
                                              e.querySelectorAll("[name=d]").length && m.push("name" + L + "*[*^$|!~]?="),
                                              2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                              (h.appendChild(e).disabled = !0),
                                              2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                              e.querySelectorAll("*,:x"),
                                              m.push(",.*:");
                                      })),
                                  (n.matchesSelector = Z.test((b = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector))) &&
                                      ce(function (e) {
                                          (n.disconnectedMatch = b.call(e, "*")), b.call(e, "[s!='']:x"), v.push("!=", B);
                                      }),
                                  (m = m.length && new RegExp(m.join("|"))),
                                  (v = v.length && new RegExp(v.join("|"))),
                                  (t = Z.test(h.compareDocumentPosition)),
                                  (_ =
                                      t || Z.test(h.contains)
                                          ? function (e, t) {
                                                var n = 9 === e.nodeType ? e.documentElement : e,
                                                    i = t && t.parentNode;
                                                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                                            }
                                          : function (e, t) {
                                                if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                                return !1;
                                            }),
                                  (S = t
                                      ? function (e, t) {
                                            if (e === t) return (d = !0), 0;
                                            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                            return (
                                                i ||
                                                (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                                    ? e == f || (e.ownerDocument == w && _(w, e))
                                                        ? -1
                                                        : t == f || (t.ownerDocument == w && _(w, t))
                                                        ? 1
                                                        : c
                                                        ? M(c, e) - M(c, t)
                                                        : 0
                                                    : 4 & i
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function (e, t) {
                                            if (e === t) return (d = !0), 0;
                                            var n,
                                                i = 0,
                                                r = e.parentNode,
                                                a = t.parentNode,
                                                o = [e],
                                                l = [t];
                                            if (!r || !a) return e == f ? -1 : t == f ? 1 : r ? -1 : a ? 1 : c ? M(c, e) - M(c, t) : 0;
                                            if (r === a) return pe(e, t);
                                            for (n = e; (n = n.parentNode); ) o.unshift(n);
                                            for (n = t; (n = n.parentNode); ) l.unshift(n);
                                            for (; o[i] === l[i]; ) i++;
                                            return i ? pe(o[i], l[i]) : o[i] == w ? -1 : l[i] == w ? 1 : 0;
                                        }),
                                  f)
                                : f;
                        }),
                        (le.matches = function (e, t) {
                            return le(e, null, null, t);
                        }),
                        (le.matchesSelector = function (e, t) {
                            if ((p(e), n.matchesSelector && g && !T[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                                try {
                                    var i = b.call(e, t);
                                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                                } catch (e) {
                                    T(t, !0);
                                }
                            return le(t, f, null, [e]).length > 0;
                        }),
                        (le.contains = function (e, t) {
                            return (e.ownerDocument || e) != f && p(e), _(e, t);
                        }),
                        (le.attr = function (e, t) {
                            (e.ownerDocument || e) != f && p(e);
                            var r = i.attrHandle[t.toLowerCase()],
                                a = r && j.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                            return void 0 !== a ? a : n.attributes || !g ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
                        }),
                        (le.escape = function (e) {
                            return (e + "").replace(ie, re);
                        }),
                        (le.error = function (e) {
                            throw new Error("Syntax error, unrecognized expression: " + e);
                        }),
                        (le.uniqueSort = function (e) {
                            var t,
                                i = [],
                                r = 0,
                                a = 0;
                            if (((d = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(S), d)) {
                                for (; (t = e[a++]); ) t === e[a] && (r = i.push(a));
                                for (; r--; ) e.splice(i[r], 1);
                            }
                            return (c = null), e;
                        }),
                        (r = le.getText = function (e) {
                            var t,
                                n = "",
                                i = 0,
                                a = e.nodeType;
                            if (a) {
                                if (1 === a || 9 === a || 11 === a) {
                                    if ("string" == typeof e.textContent) return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                                } else if (3 === a || 4 === a) return e.nodeValue;
                            } else for (; (t = e[i++]); ) n += r(t);
                            return n;
                        }),
                        ((i = le.selectors = {
                            cacheLength: 50,
                            createPseudo: ue,
                            match: X,
                            attrHandle: {},
                            find: {},
                            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                            preFilter: {
                                ATTR: function (e) {
                                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                                },
                                CHILD: function (e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        "nth" === e[1].slice(0, 3)
                                            ? (e[3] || le.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                            : e[3] && le.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function (e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return X.CHILD.test(e[0])
                                        ? null
                                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && K.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                                },
                            },
                            filter: {
                                TAG: function (e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return "*" === e
                                        ? function () {
                                              return !0;
                                          }
                                        : function (e) {
                                              return e.nodeName && e.nodeName.toLowerCase() === t;
                                          };
                                },
                                CLASS: function (e) {
                                    var t = C[e + " "];
                                    return (
                                        t ||
                                        ((t = new RegExp("(^|" + L + ")" + e + "(" + L + "|$)")) &&
                                            C(e, function (e) {
                                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                            }))
                                    );
                                },
                                ATTR: function (e, t, n) {
                                    return function (i) {
                                        var r = le.attr(i, e);
                                        return null == r
                                            ? "!=" === t
                                            : !t ||
                                                  ((r += ""),
                                                  "=" === t
                                                      ? r === n
                                                      : "!=" === t
                                                      ? r !== n
                                                      : "^=" === t
                                                      ? n && 0 === r.indexOf(n)
                                                      : "*=" === t
                                                      ? n && r.indexOf(n) > -1
                                                      : "$=" === t
                                                      ? n && r.slice(-n.length) === n
                                                      : "~=" === t
                                                      ? (" " + r.replace(q, " ") + " ").indexOf(n) > -1
                                                      : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                                    };
                                },
                                CHILD: function (e, t, n, i, r) {
                                    var a = "nth" !== e.slice(0, 3),
                                        o = "last" !== e.slice(-4),
                                        l = "of-type" === t;
                                    return 1 === i && 0 === r
                                        ? function (e) {
                                              return !!e.parentNode;
                                          }
                                        : function (t, n, s) {
                                              var u,
                                                  c,
                                                  d,
                                                  p,
                                                  f,
                                                  h,
                                                  g = a !== o ? "nextSibling" : "previousSibling",
                                                  m = t.parentNode,
                                                  v = l && t.nodeName.toLowerCase(),
                                                  b = !s && !l,
                                                  _ = !1;
                                              if (m) {
                                                  if (a) {
                                                      for (; g; ) {
                                                          for (p = t; (p = p[g]); ) if (l ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                                                          h = g = "only" === e && !h && "nextSibling";
                                                      }
                                                      return !0;
                                                  }
                                                  if (((h = [o ? m.firstChild : m.lastChild]), o && b)) {
                                                      for (
                                                          _ = (f = (u = (c = (d = (p = m)[y] || (p[y] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], p = f && m.childNodes[f];
                                                          (p = (++f && p && p[g]) || (_ = f = 0) || h.pop());

                                                      )
                                                          if (1 === p.nodeType && ++_ && p === t) {
                                                              c[e] = [x, f, _];
                                                              break;
                                                          }
                                                  } else if ((b && (_ = f = (u = (c = (d = (p = t)[y] || (p[y] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === _))
                                                      for (
                                                          ;
                                                          (p = (++f && p && p[g]) || (_ = f = 0) || h.pop()) &&
                                                          ((l ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++_ || (b && ((c = (d = p[y] || (p[y] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[e] = [x, _]), p !== t));

                                                      );
                                                  return (_ -= r) === i || (_ % i == 0 && _ / i >= 0);
                                              }
                                          };
                                },
                                PSEUDO: function (e, t) {
                                    var n,
                                        r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || le.error("unsupported pseudo: " + e);
                                    return r[y]
                                        ? r(t)
                                        : r.length > 1
                                        ? ((n = [e, e, "", t]),
                                          i.setFilters.hasOwnProperty(e.toLowerCase())
                                              ? ue(function (e, n) {
                                                    for (var i, a = r(e, t), o = a.length; o--; ) e[(i = M(e, a[o]))] = !(n[i] = a[o]);
                                                })
                                              : function (e) {
                                                    return r(e, 0, n);
                                                })
                                        : r;
                                },
                            },
                            pseudos: {
                                not: ue(function (e) {
                                    var t = [],
                                        n = [],
                                        i = l(e.replace(U, "$1"));
                                    return i[y]
                                        ? ue(function (e, t, n, r) {
                                              for (var a, o = i(e, null, r, []), l = e.length; l--; ) (a = o[l]) && (e[l] = !(t[l] = a));
                                          })
                                        : function (e, r, a) {
                                              return (t[0] = e), i(t, null, a, n), (t[0] = null), !n.pop();
                                          };
                                }),
                                has: ue(function (e) {
                                    return function (t) {
                                        return le(e, t).length > 0;
                                    };
                                }),
                                contains: ue(function (e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function (t) {
                                            return (t.textContent || r(t)).indexOf(e) > -1;
                                        }
                                    );
                                }),
                                lang: ue(function (e) {
                                    return (
                                        G.test(e || "") || le.error("unsupported lang: " + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function (t) {
                                            var n;
                                            do {
                                                if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                            } while ((t = t.parentNode) && 1 === t.nodeType);
                                            return !1;
                                        }
                                    );
                                }),
                                target: function (t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function (e) {
                                    return e === h;
                                },
                                focus: function (e) {
                                    return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                                },
                                enabled: ge(!1),
                                disabled: ge(!0),
                                checked: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                                },
                                selected: function (e) {
                                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                                },
                                empty: function (e) {
                                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function (e) {
                                    return !i.pseudos.empty(e);
                                },
                                header: function (e) {
                                    return J.test(e.nodeName);
                                },
                                input: function (e) {
                                    return $.test(e.nodeName);
                                },
                                button: function (e) {
                                    var t = e.nodeName.toLowerCase();
                                    return ("input" === t && "button" === e.type) || "button" === t;
                                },
                                text: function (e) {
                                    var t;
                                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                                },
                                first: me(function () {
                                    return [0];
                                }),
                                last: me(function (e, t) {
                                    return [t - 1];
                                }),
                                eq: me(function (e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: me(function (e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: me(function (e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: me(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0; ) e.push(i);
                                    return e;
                                }),
                                gt: me(function (e, t, n) {
                                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                                    return e;
                                }),
                            },
                        }).pseudos.nth = i.pseudos.eq),
                        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                            i.pseudos[t] = fe(t);
                        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = he(t);
                        function be() {}
                        function _e(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i;
                        }
                        function ye(e, t, n) {
                            var i = t.dir,
                                r = t.next,
                                a = r || i,
                                o = n && "parentNode" === a,
                                l = k++;
                            return t.first
                                ? function (t, n, r) {
                                      for (; (t = t[i]); ) if (1 === t.nodeType || o) return e(t, n, r);
                                      return !1;
                                  }
                                : function (t, n, s) {
                                      var u,
                                          c,
                                          d,
                                          p = [x, l];
                                      if (s) {
                                          for (; (t = t[i]); ) if ((1 === t.nodeType || o) && e(t, n, s)) return !0;
                                      } else
                                          for (; (t = t[i]); )
                                              if (1 === t.nodeType || o)
                                                  if (((c = (d = t[y] || (t[y] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                                  else {
                                                      if ((u = c[a]) && u[0] === x && u[1] === l) return (p[2] = u[2]);
                                                      if (((c[a] = p), (p[2] = e(t, n, s)))) return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function we(e) {
                            return e.length > 1
                                ? function (t, n, i) {
                                      for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function xe(e, t, n, i, r) {
                            for (var a, o = [], l = 0, s = e.length, u = null != t; l < s; l++) (a = e[l]) && ((n && !n(a, i, r)) || (o.push(a), u && t.push(l)));
                            return o;
                        }
                        function ke(e, t, n, i, r, a) {
                            return (
                                i && !i[y] && (i = ke(i)),
                                r && !r[y] && (r = ke(r, a)),
                                ue(function (a, o, l, s) {
                                    var u,
                                        c,
                                        d,
                                        p = [],
                                        f = [],
                                        h = o.length,
                                        g =
                                            a ||
                                            (function (e, t, n) {
                                                for (var i = 0, r = t.length; i < r; i++) le(e, t[i], n);
                                                return n;
                                            })(t || "*", l.nodeType ? [l] : l, []),
                                        m = !e || (!a && t) ? g : xe(g, p, e, l, s),
                                        v = n ? (r || (a ? e : h || i) ? [] : o) : m;
                                    if ((n && n(m, v, l, s), i)) for (u = xe(v, f), i(u, [], l, s), c = u.length; c--; ) (d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                                    if (a) {
                                        if (r || e) {
                                            if (r) {
                                                for (u = [], c = v.length; c--; ) (d = v[c]) && u.push((m[c] = d));
                                                r(null, (v = []), u, s);
                                            }
                                            for (c = v.length; c--; ) (d = v[c]) && (u = r ? M(a, d) : p[c]) > -1 && (a[u] = !(o[u] = d));
                                        }
                                    } else (v = xe(v === o ? v.splice(h, v.length) : v)), r ? r(null, o, v, s) : I.apply(o, v);
                                })
                            );
                        }
                        function Ce(e) {
                            for (
                                var t,
                                    n,
                                    r,
                                    a = e.length,
                                    o = i.relative[e[0].type],
                                    l = o || i.relative[" "],
                                    s = o ? 1 : 0,
                                    c = ye(
                                        function (e) {
                                            return e === t;
                                        },
                                        l,
                                        !0
                                    ),
                                    d = ye(
                                        function (e) {
                                            return M(t, e) > -1;
                                        },
                                        l,
                                        !0
                                    ),
                                    p = [
                                        function (e, n, i) {
                                            var r = (!o && (i || n !== u)) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                                            return (t = null), r;
                                        },
                                    ];
                                s < a;
                                s++
                            )
                                if ((n = i.relative[e[s].type])) p = [ye(we(p), n)];
                                else {
                                    if ((n = i.filter[e[s].type].apply(null, e[s].matches))[y]) {
                                        for (r = ++s; r < a && !i.relative[e[r].type]; r++);
                                        return ke(
                                            s > 1 && we(p),
                                            s > 1 && _e(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(U, "$1"),
                                            n,
                                            s < r && Ce(e.slice(s, r)),
                                            r < a && Ce((e = e.slice(r))),
                                            r < a && _e(e)
                                        );
                                    }
                                    p.push(n);
                                }
                            return we(p);
                        }
                        return (
                            (be.prototype = i.filters = i.pseudos),
                            (i.setFilters = new be()),
                            (o = le.tokenize = function (e, t) {
                                var n,
                                    r,
                                    a,
                                    o,
                                    l,
                                    s,
                                    u,
                                    c = A[e + " "];
                                if (c) return t ? 0 : c.slice(0);
                                for (l = e, s = [], u = i.preFilter; l; ) {
                                    for (o in ((n && !(r = V.exec(l))) || (r && (l = l.slice(r[0].length) || l), s.push((a = []))),
                                    (n = !1),
                                    (r = H.exec(l)) && ((n = r.shift()), a.push({ value: n, type: r[0].replace(U, " ") }), (l = l.slice(n.length))),
                                    i.filter))
                                        !(r = X[o].exec(l)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), a.push({ value: n, type: o, matches: r }), (l = l.slice(n.length)));
                                    if (!n) break;
                                }
                                return t ? l.length : l ? le.error(e) : A(e, s).slice(0);
                            }),
                            (l = le.compile = function (e, t) {
                                var n,
                                    r = [],
                                    a = [],
                                    l = z[e + " "];
                                if (!l) {
                                    for (t || (t = o(e)), n = t.length; n--; ) (l = Ce(t[n]))[y] ? r.push(l) : a.push(l);
                                    (l = z(
                                        e,
                                        (function (e, t) {
                                            var n = t.length > 0,
                                                r = e.length > 0,
                                                a = function (a, o, l, s, c) {
                                                    var d,
                                                        h,
                                                        m,
                                                        v = 0,
                                                        b = "0",
                                                        _ = a && [],
                                                        y = [],
                                                        w = u,
                                                        k = a || (r && i.find.TAG("*", c)),
                                                        C = (x += null == w ? 1 : Math.random() || 0.1),
                                                        A = k.length;
                                                    for (c && (u = o == f || o || c); b !== A && null != (d = k[b]); b++) {
                                                        if (r && d) {
                                                            for (h = 0, o || d.ownerDocument == f || (p(d), (l = !g)); (m = e[h++]); )
                                                                if (m(d, o || f, l)) {
                                                                    s.push(d);
                                                                    break;
                                                                }
                                                            c && (x = C);
                                                        }
                                                        n && ((d = !m && d) && v--, a && _.push(d));
                                                    }
                                                    if (((v += b), n && b !== v)) {
                                                        for (h = 0; (m = t[h++]); ) m(_, y, o, l);
                                                        if (a) {
                                                            if (v > 0) for (; b--; ) _[b] || y[b] || (y[b] = F.call(s));
                                                            y = xe(y);
                                                        }
                                                        I.apply(s, y), c && !a && y.length > 0 && v + t.length > 1 && le.uniqueSort(s);
                                                    }
                                                    return c && ((x = C), (u = w)), _;
                                                };
                                            return n ? ue(a) : a;
                                        })(a, r)
                                    )).selector = e;
                                }
                                return l;
                            }),
                            (s = le.select = function (e, t, n, r) {
                                var a,
                                    s,
                                    u,
                                    c,
                                    d,
                                    p = "function" == typeof e && e,
                                    f = !r && o((e = p.selector || e));
                                if (((n = n || []), 1 === f.length)) {
                                    if ((s = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = s[0]).type && 9 === t.nodeType && g && i.relative[s[1].type]) {
                                        if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                                        p && (t = t.parentNode), (e = e.slice(s.shift().value.length));
                                    }
                                    for (a = X.needsContext.test(e) ? 0 : s.length; a-- && ((u = s[a]), !i.relative[(c = u.type)]); )
                                        if ((d = i.find[c]) && (r = d(u.matches[0].replace(te, ne), (ee.test(s[0].type) && ve(t.parentNode)) || t))) {
                                            if ((s.splice(a, 1), !(e = r.length && _e(s)))) return I.apply(n, r), n;
                                            break;
                                        }
                                }
                                return (p || l(e, f))(r, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                            }),
                            (n.sortStable = y.split("").sort(S).join("") === y),
                            (n.detectDuplicates = !!d),
                            p(),
                            (n.sortDetached = ce(function (e) {
                                return 1 & e.compareDocumentPosition(f.createElement("fieldset"));
                            })),
                            ce(function (e) {
                                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                            }) ||
                                de("type|href|height|width", function (e, t, n) {
                                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                                }),
                            (n.attributes &&
                                ce(function (e) {
                                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                                })) ||
                                de("value", function (e, t, n) {
                                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                                }),
                            ce(function (e) {
                                return null == e.getAttribute("disabled");
                            }) ||
                                de(O, function (e, t, n) {
                                    var i;
                                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                                }),
                            le
                        );
                    })(e);
                (y.find = x), (y.expr = x.selectors), (y.expr[":"] = y.expr.pseudos), (y.uniqueSort = y.unique = x.uniqueSort), (y.text = x.getText), (y.isXMLDoc = x.isXML), (y.contains = x.contains), (y.escapeSelector = x.escape);
                var k = function (e, t, n) {
                        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                            if (1 === e.nodeType) {
                                if (r && y(e).is(n)) break;
                                i.push(e);
                            }
                        return i;
                    },
                    C = function (e, t) {
                        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                        return n;
                    },
                    A = y.expr.match.needsContext;
                function z(e, t) {
                    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
                }
                var T = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function S(e, t, n) {
                    return h(t)
                        ? y.grep(e, function (e, i) {
                              return !!t.call(e, i, e) !== n;
                          })
                        : t.nodeType
                        ? y.grep(e, function (e) {
                              return (e === t) !== n;
                          })
                        : "string" != typeof t
                        ? y.grep(e, function (e) {
                              return l.call(t, e) > -1 !== n;
                          })
                        : y.filter(t, e, n);
                }
                (y.filter = function (e, t, n) {
                    var i = t[0];
                    return (
                        n && (e = ":not(" + e + ")"),
                        1 === t.length && 1 === i.nodeType
                            ? y.find.matchesSelector(i, e)
                                ? [i]
                                : []
                            : y.find.matches(
                                  e,
                                  y.grep(t, function (e) {
                                      return 1 === e.nodeType;
                                  })
                              )
                    );
                }),
                    y.fn.extend({
                        find: function (e) {
                            var t,
                                n,
                                i = this.length,
                                r = this;
                            if ("string" != typeof e)
                                return this.pushStack(
                                    y(e).filter(function () {
                                        for (t = 0; t < i; t++) if (y.contains(r[t], this)) return !0;
                                    })
                                );
                            for (n = this.pushStack([]), t = 0; t < i; t++) y.find(e, r[t], n);
                            return i > 1 ? y.uniqueSort(n) : n;
                        },
                        filter: function (e) {
                            return this.pushStack(S(this, e || [], !1));
                        },
                        not: function (e) {
                            return this.pushStack(S(this, e || [], !0));
                        },
                        is: function (e) {
                            return !!S(this, "string" == typeof e && A.test(e) ? y(e) : e || [], !1).length;
                        },
                    });
                var j,
                    D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                ((y.fn.init = function (e, t, n) {
                    var i, r;
                    if (!e) return this;
                    if (((n = n || j), "string" == typeof e)) {
                        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                        if (i[1]) {
                            if (((t = t instanceof y ? t[0] : t), y.merge(this, y.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : m, !0)), T.test(i[1]) && y.isPlainObject(t)))
                                for (i in t) h(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                            return this;
                        }
                        return (r = m.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
                    }
                    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : h(e) ? (void 0 !== n.ready ? n.ready(e) : e(y)) : y.makeArray(e, this);
                }).prototype = y.fn),
                    (j = y(m));
                var F = /^(?:parents|prev(?:Until|All))/,
                    E = { children: !0, contents: !0, next: !0, prev: !0 };
                function I(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; );
                    return e;
                }
                y.fn.extend({
                    has: function (e) {
                        var t = y(e, this),
                            n = t.length;
                        return this.filter(function () {
                            for (var e = 0; e < n; e++) if (y.contains(this, t[e])) return !0;
                        });
                    },
                    closest: function (e, t) {
                        var n,
                            i = 0,
                            r = this.length,
                            a = [],
                            o = "string" != typeof e && y(e);
                        if (!A.test(e))
                            for (; i < r; i++)
                                for (n = this[i]; n && n !== t; n = n.parentNode)
                                    if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && y.find.matchesSelector(n, e))) {
                                        a.push(n);
                                        break;
                                    }
                        return this.pushStack(a.length > 1 ? y.uniqueSort(a) : a);
                    },
                    index: function (e) {
                        return e ? ("string" == typeof e ? l.call(y(e), this[0]) : l.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                    },
                    add: function (e, t) {
                        return this.pushStack(y.uniqueSort(y.merge(this.get(), y(e, t))));
                    },
                    addBack: function (e) {
                        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                    },
                }),
                    y.each(
                        {
                            parent: function (e) {
                                var t = e.parentNode;
                                return t && 11 !== t.nodeType ? t : null;
                            },
                            parents: function (e) {
                                return k(e, "parentNode");
                            },
                            parentsUntil: function (e, t, n) {
                                return k(e, "parentNode", n);
                            },
                            next: function (e) {
                                return I(e, "nextSibling");
                            },
                            prev: function (e) {
                                return I(e, "previousSibling");
                            },
                            nextAll: function (e) {
                                return k(e, "nextSibling");
                            },
                            prevAll: function (e) {
                                return k(e, "previousSibling");
                            },
                            nextUntil: function (e, t, n) {
                                return k(e, "nextSibling", n);
                            },
                            prevUntil: function (e, t, n) {
                                return k(e, "previousSibling", n);
                            },
                            siblings: function (e) {
                                return C((e.parentNode || {}).firstChild, e);
                            },
                            children: function (e) {
                                return C(e.firstChild);
                            },
                            contents: function (e) {
                                return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (z(e, "template") && (e = e.content || e), y.merge([], e.childNodes));
                            },
                        },
                        function (e, t) {
                            y.fn[e] = function (n, i) {
                                var r = y.map(this, t, n);
                                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = y.filter(i, r)), this.length > 1 && (E[e] || y.uniqueSort(r), F.test(e) && r.reverse()), this.pushStack(r);
                            };
                        }
                    );
                var P = /[^\x20\t\r\n\f]+/g;
                function M(e) {
                    return e;
                }
                function O(e) {
                    throw e;
                }
                function L(e, t, n, i) {
                    var r;
                    try {
                        e && h((r = e.promise)) ? r.call(e).done(t).fail(n) : e && h((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
                    } catch (e) {
                        n.apply(void 0, [e]);
                    }
                }
                (y.Callbacks = function (e) {
                    e =
                        "string" == typeof e
                            ? (function (e) {
                                  var t = {};
                                  return (
                                      y.each(e.match(P) || [], function (e, n) {
                                          t[n] = !0;
                                      }),
                                      t
                                  );
                              })(e)
                            : y.extend({}, e);
                    var t,
                        n,
                        i,
                        r,
                        a = [],
                        o = [],
                        l = -1,
                        s = function () {
                            for (r = r || e.once, i = t = !0; o.length; l = -1) for (n = o.shift(); ++l < a.length; ) !1 === a[l].apply(n[0], n[1]) && e.stopOnFalse && ((l = a.length), (n = !1));
                            e.memory || (n = !1), (t = !1), r && (a = n ? [] : "");
                        },
                        u = {
                            add: function () {
                                return (
                                    a &&
                                        (n && !t && ((l = a.length - 1), o.push(n)),
                                        (function t(n) {
                                            y.each(n, function (n, i) {
                                                h(i) ? (e.unique && u.has(i)) || a.push(i) : i && i.length && "string" !== _(i) && t(i);
                                            });
                                        })(arguments),
                                        n && !t && s()),
                                    this
                                );
                            },
                            remove: function () {
                                return (
                                    y.each(arguments, function (e, t) {
                                        for (var n; (n = y.inArray(t, a, n)) > -1; ) a.splice(n, 1), n <= l && l--;
                                    }),
                                    this
                                );
                            },
                            has: function (e) {
                                return e ? y.inArray(e, a) > -1 : a.length > 0;
                            },
                            empty: function () {
                                return a && (a = []), this;
                            },
                            disable: function () {
                                return (r = o = []), (a = n = ""), this;
                            },
                            disabled: function () {
                                return !a;
                            },
                            lock: function () {
                                return (r = o = []), n || t || (a = n = ""), this;
                            },
                            locked: function () {
                                return !!r;
                            },
                            fireWith: function (e, n) {
                                return r || ((n = [e, (n = n || []).slice ? n.slice() : n]), o.push(n), t || s()), this;
                            },
                            fire: function () {
                                return u.fireWith(this, arguments), this;
                            },
                            fired: function () {
                                return !!i;
                            },
                        };
                    return u;
                }),
                    y.extend({
                        Deferred: function (t) {
                            var n = [
                                    ["notify", "progress", y.Callbacks("memory"), y.Callbacks("memory"), 2],
                                    ["resolve", "done", y.Callbacks("once memory"), y.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", y.Callbacks("once memory"), y.Callbacks("once memory"), 1, "rejected"],
                                ],
                                i = "pending",
                                r = {
                                    state: function () {
                                        return i;
                                    },
                                    always: function () {
                                        return a.done(arguments).fail(arguments), this;
                                    },
                                    catch: function (e) {
                                        return r.then(null, e);
                                    },
                                    pipe: function () {
                                        var e = arguments;
                                        return y
                                            .Deferred(function (t) {
                                                y.each(n, function (n, i) {
                                                    var r = h(e[i[4]]) && e[i[4]];
                                                    a[i[1]](function () {
                                                        var e = r && r.apply(this, arguments);
                                                        e && h(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
                                                    });
                                                }),
                                                    (e = null);
                                            })
                                            .promise();
                                    },
                                    then: function (t, i, r) {
                                        var a = 0;
                                        function o(t, n, i, r) {
                                            return function () {
                                                var l = this,
                                                    s = arguments,
                                                    u = function () {
                                                        var e, u;
                                                        if (!(t < a)) {
                                                            if ((e = i.apply(l, s)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                            (u = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                                h(u)
                                                                    ? r
                                                                        ? u.call(e, o(a, n, M, r), o(a, n, O, r))
                                                                        : (a++, u.call(e, o(a, n, M, r), o(a, n, O, r), o(a, n, M, n.notifyWith)))
                                                                    : (i !== M && ((l = void 0), (s = [e])), (r || n.resolveWith)(l, s));
                                                        }
                                                    },
                                                    c = r
                                                        ? u
                                                        : function () {
                                                              try {
                                                                  u();
                                                              } catch (e) {
                                                                  y.Deferred.exceptionHook && y.Deferred.exceptionHook(e, c.stackTrace), t + 1 >= a && (i !== O && ((l = void 0), (s = [e])), n.rejectWith(l, s));
                                                              }
                                                          };
                                                t ? c() : (y.Deferred.getStackHook && (c.stackTrace = y.Deferred.getStackHook()), e.setTimeout(c));
                                            };
                                        }
                                        return y
                                            .Deferred(function (e) {
                                                n[0][3].add(o(0, e, h(r) ? r : M, e.notifyWith)), n[1][3].add(o(0, e, h(t) ? t : M)), n[2][3].add(o(0, e, h(i) ? i : O));
                                            })
                                            .promise();
                                    },
                                    promise: function (e) {
                                        return null != e ? y.extend(e, r) : r;
                                    },
                                },
                                a = {};
                            return (
                                y.each(n, function (e, t) {
                                    var o = t[2],
                                        l = t[5];
                                    (r[t[1]] = o.add),
                                        l &&
                                            o.add(
                                                function () {
                                                    i = l;
                                                },
                                                n[3 - e][2].disable,
                                                n[3 - e][3].disable,
                                                n[0][2].lock,
                                                n[0][3].lock
                                            ),
                                        o.add(t[3].fire),
                                        (a[t[0]] = function () {
                                            return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                                        }),
                                        (a[t[0] + "With"] = o.fireWith);
                                }),
                                r.promise(a),
                                t && t.call(a, a),
                                a
                            );
                        },
                        when: function (e) {
                            var t = arguments.length,
                                n = t,
                                i = Array(n),
                                a = r.call(arguments),
                                o = y.Deferred(),
                                l = function (e) {
                                    return function (n) {
                                        (i[e] = this), (a[e] = arguments.length > 1 ? r.call(arguments) : n), --t || o.resolveWith(i, a);
                                    };
                                };
                            if (t <= 1 && (L(e, o.done(l(n)).resolve, o.reject, !t), "pending" === o.state() || h(a[n] && a[n].then))) return o.then();
                            for (; n--; ) L(a[n], l(n), o.reject);
                            return o.promise();
                        },
                    });
                var N = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                (y.Deferred.exceptionHook = function (t, n) {
                    e.console && e.console.warn && t && N.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
                }),
                    (y.readyException = function (t) {
                        e.setTimeout(function () {
                            throw t;
                        });
                    });
                var R = y.Deferred();
                function B() {
                    m.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), y.ready();
                }
                (y.fn.ready = function (e) {
                    return (
                        R.then(e).catch(function (e) {
                            y.readyException(e);
                        }),
                        this
                    );
                }),
                    y.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function (e) {
                            (!0 === e ? --y.readyWait : y.isReady) || ((y.isReady = !0), (!0 !== e && --y.readyWait > 0) || R.resolveWith(m, [y]));
                        },
                    }),
                    (y.ready.then = R.then),
                    "complete" === m.readyState || ("loading" !== m.readyState && !m.documentElement.doScroll) ? e.setTimeout(y.ready) : (m.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
                var q = function (e, t, n, i, r, a, o) {
                        var l = 0,
                            s = e.length,
                            u = null == n;
                        if ("object" === _(n)) for (l in ((r = !0), n)) q(e, t, l, n[l], !0, a, o);
                        else if (
                            void 0 !== i &&
                            ((r = !0),
                            h(i) || (o = !0),
                            u &&
                                (o
                                    ? (t.call(e, i), (t = null))
                                    : ((u = t),
                                      (t = function (e, t, n) {
                                          return u.call(y(e), n);
                                      }))),
                            t)
                        )
                            for (; l < s; l++) t(e[l], n, o ? i : i.call(e[l], l, t(e[l], n)));
                        return r ? e : u ? t.call(e) : s ? t(e[0], n) : a;
                    },
                    U = /^-ms-/,
                    V = /-([a-z])/g;
                function H(e, t) {
                    return t.toUpperCase();
                }
                function W(e) {
                    return e.replace(U, "ms-").replace(V, H);
                }
                var K = function (e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
                function G() {
                    this.expando = y.expando + G.uid++;
                }
                (G.uid = 1),
                    (G.prototype = {
                        cache: function (e) {
                            var t = e[this.expando];
                            return t || ((t = {}), K(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                        },
                        set: function (e, t, n) {
                            var i,
                                r = this.cache(e);
                            if ("string" == typeof t) r[W(t)] = n;
                            else for (i in t) r[W(i)] = t[i];
                            return r;
                        },
                        get: function (e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][W(t)];
                        },
                        access: function (e, t, n) {
                            return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                        },
                        remove: function (e, t) {
                            var n,
                                i = e[this.expando];
                            if (void 0 !== i) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(W) : (t = W(t)) in i ? [t] : t.match(P) || []).length;
                                    for (; n--; ) delete i[t[n]];
                                }
                                (void 0 === t || y.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                            }
                        },
                        hasData: function (e) {
                            var t = e[this.expando];
                            return void 0 !== t && !y.isEmptyObject(t);
                        },
                    });
                var X = new G(),
                    Y = new G(),
                    $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    J = /[A-Z]/g;
                function Z(e, t, n) {
                    var i;
                    if (void 0 === n && 1 === e.nodeType)
                        if (((i = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                            try {
                                n = (function (e) {
                                    return "true" === e || ("false" !== e && ("null" === e ? null : e === +e + "" ? +e : $.test(e) ? JSON.parse(e) : e));
                                })(n);
                            } catch (e) {}
                            Y.set(e, t, n);
                        } else n = void 0;
                    return n;
                }
                y.extend({
                    hasData: function (e) {
                        return Y.hasData(e) || X.hasData(e);
                    },
                    data: function (e, t, n) {
                        return Y.access(e, t, n);
                    },
                    removeData: function (e, t) {
                        Y.remove(e, t);
                    },
                    _data: function (e, t, n) {
                        return X.access(e, t, n);
                    },
                    _removeData: function (e, t) {
                        X.remove(e, t);
                    },
                }),
                    y.fn.extend({
                        data: function (e, t) {
                            var n,
                                i,
                                r,
                                a = this[0],
                                o = a && a.attributes;
                            if (void 0 === e) {
                                if (this.length && ((r = Y.get(a)), 1 === a.nodeType && !X.get(a, "hasDataAttrs"))) {
                                    for (n = o.length; n--; ) o[n] && 0 === (i = o[n].name).indexOf("data-") && ((i = W(i.slice(5))), Z(a, i, r[i]));
                                    X.set(a, "hasDataAttrs", !0);
                                }
                                return r;
                            }
                            return "object" == typeof e
                                ? this.each(function () {
                                      Y.set(this, e);
                                  })
                                : q(
                                      this,
                                      function (t) {
                                          var n;
                                          if (a && void 0 === t) return void 0 !== (n = Y.get(a, e)) || void 0 !== (n = Z(a, e)) ? n : void 0;
                                          this.each(function () {
                                              Y.set(this, e, t);
                                          });
                                      },
                                      null,
                                      t,
                                      arguments.length > 1,
                                      null,
                                      !0
                                  );
                        },
                        removeData: function (e) {
                            return this.each(function () {
                                Y.remove(this, e);
                            });
                        },
                    }),
                    y.extend({
                        queue: function (e, t, n) {
                            var i;
                            if (e) return (t = (t || "fx") + "queue"), (i = X.get(e, t)), n && (!i || Array.isArray(n) ? (i = X.access(e, t, y.makeArray(n))) : i.push(n)), i || [];
                        },
                        dequeue: function (e, t) {
                            t = t || "fx";
                            var n = y.queue(e, t),
                                i = n.length,
                                r = n.shift(),
                                a = y._queueHooks(e, t);
                            "inprogress" === r && ((r = n.shift()), i--),
                                r &&
                                    ("fx" === t && n.unshift("inprogress"),
                                    delete a.stop,
                                    r.call(
                                        e,
                                        function () {
                                            y.dequeue(e, t);
                                        },
                                        a
                                    )),
                                !i && a && a.empty.fire();
                        },
                        _queueHooks: function (e, t) {
                            var n = t + "queueHooks";
                            return (
                                X.get(e, n) ||
                                X.access(e, n, {
                                    empty: y.Callbacks("once memory").add(function () {
                                        X.remove(e, [t + "queue", n]);
                                    }),
                                })
                            );
                        },
                    }),
                    y.fn.extend({
                        queue: function (e, t) {
                            var n = 2;
                            return (
                                "string" != typeof e && ((t = e), (e = "fx"), n--),
                                arguments.length < n
                                    ? y.queue(this[0], e)
                                    : void 0 === t
                                    ? this
                                    : this.each(function () {
                                          var n = y.queue(this, e, t);
                                          y._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && y.dequeue(this, e);
                                      })
                            );
                        },
                        dequeue: function (e) {
                            return this.each(function () {
                                y.dequeue(this, e);
                            });
                        },
                        clearQueue: function (e) {
                            return this.queue(e || "fx", []);
                        },
                        promise: function (e, t) {
                            var n,
                                i = 1,
                                r = y.Deferred(),
                                a = this,
                                o = this.length,
                                l = function () {
                                    --i || r.resolveWith(a, [a]);
                                };
                            for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (n = X.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(l));
                            return l(), r.promise(t);
                        },
                    });
                var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    ee = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
                    te = ["Top", "Right", "Bottom", "Left"],
                    ne = m.documentElement,
                    ie = function (e) {
                        return y.contains(e.ownerDocument, e);
                    },
                    re = { composed: !0 };
                ne.getRootNode &&
                    (ie = function (e) {
                        return y.contains(e.ownerDocument, e) || e.getRootNode(re) === e.ownerDocument;
                    });
                var ae = function (e, t) {
                    return "none" === (e = t || e).style.display || ("" === e.style.display && ie(e) && "none" === y.css(e, "display"));
                };
                function oe(e, t, n, i) {
                    var r,
                        a,
                        o = 20,
                        l = i
                            ? function () {
                                  return i.cur();
                              }
                            : function () {
                                  return y.css(e, t, "");
                              },
                        s = l(),
                        u = (n && n[3]) || (y.cssNumber[t] ? "" : "px"),
                        c = e.nodeType && (y.cssNumber[t] || ("px" !== u && +s)) && ee.exec(y.css(e, t));
                    if (c && c[3] !== u) {
                        for (s /= 2, u = u || c[3], c = +s || 1; o--; ) y.style(e, t, c + u), (1 - a) * (1 - (a = l() / s || 0.5)) <= 0 && (o = 0), (c /= a);
                        (c *= 2), y.style(e, t, c + u), (n = n || []);
                    }
                    return n && ((c = +c || +s || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
                }
                var le = {};
                function se(e) {
                    var t,
                        n = e.ownerDocument,
                        i = e.nodeName,
                        r = le[i];
                    return r || ((t = n.body.appendChild(n.createElement(i))), (r = y.css(t, "display")), t.parentNode.removeChild(t), "none" === r && (r = "block"), (le[i] = r), r);
                }
                function ue(e, t) {
                    for (var n, i, r = [], a = 0, o = e.length; a < o; a++)
                        (i = e[a]).style &&
                            ((n = i.style.display),
                            t ? ("none" === n && ((r[a] = X.get(i, "display") || null), r[a] || (i.style.display = "")), "" === i.style.display && ae(i) && (r[a] = se(i))) : "none" !== n && ((r[a] = "none"), X.set(i, "display", n)));
                    for (a = 0; a < o; a++) null != r[a] && (e[a].style.display = r[a]);
                    return e;
                }
                y.fn.extend({
                    show: function () {
                        return ue(this, !0);
                    },
                    hide: function () {
                        return ue(this);
                    },
                    toggle: function (e) {
                        return "boolean" == typeof e
                            ? e
                                ? this.show()
                                : this.hide()
                            : this.each(function () {
                                  ae(this) ? y(this).show() : y(this).hide();
                              });
                    },
                });
                var ce,
                    de,
                    pe = /^(?:checkbox|radio)$/i,
                    fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    he = /^$|^module$|\/(?:java|ecma)script/i;
                (ce = m.createDocumentFragment().appendChild(m.createElement("div"))),
                    (de = m.createElement("input")).setAttribute("type", "radio"),
                    de.setAttribute("checked", "checked"),
                    de.setAttribute("name", "t"),
                    ce.appendChild(de),
                    (f.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
                    (ce.innerHTML = "<textarea>x</textarea>"),
                    (f.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
                    (ce.innerHTML = "<option></option>"),
                    (f.option = !!ce.lastChild);
                var ge = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
                function me(e, t) {
                    var n;
                    return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && z(e, t)) ? y.merge([e], n) : n;
                }
                function ve(e, t) {
                    for (var n = 0, i = e.length; n < i; n++) X.set(e[n], "globalEval", !t || X.get(t[n], "globalEval"));
                }
                (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), f.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
                var be = /<|&#?\w+;/;
                function _e(e, t, n, i, r) {
                    for (var a, o, l, s, u, c, d = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
                        if ((a = e[f]) || 0 === a)
                            if ("object" === _(a)) y.merge(p, a.nodeType ? [a] : a);
                            else if (be.test(a)) {
                                for (o = o || d.appendChild(t.createElement("div")), l = (fe.exec(a) || ["", ""])[1].toLowerCase(), s = ge[l] || ge._default, o.innerHTML = s[1] + y.htmlPrefilter(a) + s[2], c = s[0]; c--; ) o = o.lastChild;
                                y.merge(p, o.childNodes), ((o = d.firstChild).textContent = "");
                            } else p.push(t.createTextNode(a));
                    for (d.textContent = "", f = 0; (a = p[f++]); )
                        if (i && y.inArray(a, i) > -1) r && r.push(a);
                        else if (((u = ie(a)), (o = me(d.appendChild(a), "script")), u && ve(o), n)) for (c = 0; (a = o[c++]); ) he.test(a.type || "") && n.push(a);
                    return d;
                }
                var ye = /^([^.]*)(?:\.(.+)|)/;
                function we() {
                    return !0;
                }
                function xe() {
                    return !1;
                }
                function ke(e, t) {
                    return (
                        (e ===
                            (function () {
                                try {
                                    return m.activeElement;
                                } catch (e) {}
                            })()) ==
                        ("focus" === t)
                    );
                }
                function Ce(e, t, n, i, r, a) {
                    var o, l;
                    if ("object" == typeof t) {
                        for (l in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ce(e, l, n, i, t[l], a);
                        return e;
                    }
                    if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = xe;
                    else if (!r) return e;
                    return (
                        1 === a &&
                            ((o = r),
                            ((r = function (e) {
                                return y().off(e), o.apply(this, arguments);
                            }).guid = o.guid || (o.guid = y.guid++))),
                        e.each(function () {
                            y.event.add(this, t, r, i, n);
                        })
                    );
                }
                function Ae(e, t, n) {
                    n
                        ? (X.set(e, t, !1),
                          y.event.add(e, t, {
                              namespace: !1,
                              handler: function (e) {
                                  var i,
                                      a,
                                      o = X.get(this, t);
                                  if (1 & e.isTrigger && this[t]) {
                                      if (o.length) (y.event.special[t] || {}).delegateType && e.stopPropagation();
                                      else if (((o = r.call(arguments)), X.set(this, t, o), (i = n(this, t)), this[t](), o !== (a = X.get(this, t)) || i ? X.set(this, t, !1) : (a = {}), o !== a))
                                          return e.stopImmediatePropagation(), e.preventDefault(), a && a.value;
                                  } else o.length && (X.set(this, t, { value: y.event.trigger(y.extend(o[0], y.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
                              },
                          }))
                        : void 0 === X.get(e, t) && y.event.add(e, t, we);
                }
                (y.event = {
                    global: {},
                    add: function (e, t, n, i, r) {
                        var a,
                            o,
                            l,
                            s,
                            u,
                            c,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m = X.get(e);
                        if (K(e))
                            for (
                                n.handler && ((n = (a = n).handler), (r = a.selector)),
                                    r && y.find.matchesSelector(ne, r),
                                    n.guid || (n.guid = y.guid++),
                                    (s = m.events) || (s = m.events = Object.create(null)),
                                    (o = m.handle) ||
                                        (o = m.handle = function (t) {
                                            return void 0 !== y && y.event.triggered !== t.type ? y.event.dispatch.apply(e, arguments) : void 0;
                                        }),
                                    u = (t = (t || "").match(P) || [""]).length;
                                u--;

                            )
                                (f = g = (l = ye.exec(t[u]) || [])[1]),
                                    (h = (l[2] || "").split(".").sort()),
                                    f &&
                                        ((d = y.event.special[f] || {}),
                                        (f = (r ? d.delegateType : d.bindType) || f),
                                        (d = y.event.special[f] || {}),
                                        (c = y.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && y.expr.match.needsContext.test(r), namespace: h.join(".") }, a)),
                                        (p = s[f]) || (((p = s[f] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, i, h, o)) || (e.addEventListener && e.addEventListener(f, o))),
                                        d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                                        r ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                                        (y.event.global[f] = !0));
                    },
                    remove: function (e, t, n, i, r) {
                        var a,
                            o,
                            l,
                            s,
                            u,
                            c,
                            d,
                            p,
                            f,
                            h,
                            g,
                            m = X.hasData(e) && X.get(e);
                        if (m && (s = m.events)) {
                            for (u = (t = (t || "").match(P) || [""]).length; u--; )
                                if (((f = g = (l = ye.exec(t[u]) || [])[1]), (h = (l[2] || "").split(".").sort()), f)) {
                                    for (d = y.event.special[f] || {}, p = s[(f = (i ? d.delegateType : d.bindType) || f)] || [], l = l[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = p.length; a--; )
                                        (c = p[a]),
                                            (!r && g !== c.origType) ||
                                                (n && n.guid !== c.guid) ||
                                                (l && !l.test(c.namespace)) ||
                                                (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                                (p.splice(a, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                                    o && !p.length && ((d.teardown && !1 !== d.teardown.call(e, h, m.handle)) || y.removeEvent(e, f, m.handle), delete s[f]);
                                } else for (f in s) y.event.remove(e, f + t[u], n, i, !0);
                            y.isEmptyObject(s) && X.remove(e, "handle events");
                        }
                    },
                    dispatch: function (e) {
                        var t,
                            n,
                            i,
                            r,
                            a,
                            o,
                            l = new Array(arguments.length),
                            s = y.event.fix(e),
                            u = (X.get(this, "events") || Object.create(null))[s.type] || [],
                            c = y.event.special[s.type] || {};
                        for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
                        if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
                            for (o = y.event.handlers.call(this, s, u), t = 0; (r = o[t++]) && !s.isPropagationStopped(); )
                                for (s.currentTarget = r.elem, n = 0; (a = r.handlers[n++]) && !s.isImmediatePropagationStopped(); )
                                    (s.rnamespace && !1 !== a.namespace && !s.rnamespace.test(a.namespace)) ||
                                        ((s.handleObj = a),
                                        (s.data = a.data),
                                        void 0 !== (i = ((y.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
                            return c.postDispatch && c.postDispatch.call(this, s), s.result;
                        }
                    },
                    handlers: function (e, t) {
                        var n,
                            i,
                            r,
                            a,
                            o,
                            l = [],
                            s = t.delegateCount,
                            u = e.target;
                        if (s && u.nodeType && !("click" === e.type && e.button >= 1))
                            for (; u !== this; u = u.parentNode || this)
                                if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                    for (a = [], o = {}, n = 0; n < s; n++) void 0 === o[(r = (i = t[n]).selector + " ")] && (o[r] = i.needsContext ? y(r, this).index(u) > -1 : y.find(r, this, null, [u]).length), o[r] && a.push(i);
                                    a.length && l.push({ elem: u, handlers: a });
                                }
                        return (u = this), s < t.length && l.push({ elem: u, handlers: t.slice(s) }), l;
                    },
                    addProp: function (e, t) {
                        Object.defineProperty(y.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: h(t)
                                ? function () {
                                      if (this.originalEvent) return t(this.originalEvent);
                                  }
                                : function () {
                                      if (this.originalEvent) return this.originalEvent[e];
                                  },
                            set: function (t) {
                                Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                            },
                        });
                    },
                    fix: function (e) {
                        return e[y.expando] ? e : new y.Event(e);
                    },
                    special: {
                        load: { noBubble: !0 },
                        click: {
                            setup: function (e) {
                                var t = this || e;
                                return pe.test(t.type) && t.click && z(t, "input") && Ae(t, "click", we), !1;
                            },
                            trigger: function (e) {
                                var t = this || e;
                                return pe.test(t.type) && t.click && z(t, "input") && Ae(t, "click"), !0;
                            },
                            _default: function (e) {
                                var t = e.target;
                                return (pe.test(t.type) && t.click && z(t, "input") && X.get(t, "click")) || z(t, "a");
                            },
                        },
                        beforeunload: {
                            postDispatch: function (e) {
                                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                            },
                        },
                    },
                }),
                    (y.removeEvent = function (e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n);
                    }),
                    (y.Event = function (e, t) {
                        if (!(this instanceof y.Event)) return new y.Event(e, t);
                        e && e.type
                            ? ((this.originalEvent = e),
                              (this.type = e.type),
                              (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : xe),
                              (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                              (this.currentTarget = e.currentTarget),
                              (this.relatedTarget = e.relatedTarget))
                            : (this.type = e),
                            t && y.extend(this, t),
                            (this.timeStamp = (e && e.timeStamp) || Date.now()),
                            (this[y.expando] = !0);
                    }),
                    (y.Event.prototype = {
                        constructor: y.Event,
                        isDefaultPrevented: xe,
                        isPropagationStopped: xe,
                        isImmediatePropagationStopped: xe,
                        isSimulated: !1,
                        preventDefault: function () {
                            var e = this.originalEvent;
                            (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
                        },
                        stopPropagation: function () {
                            var e = this.originalEvent;
                            (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
                        },
                        stopImmediatePropagation: function () {
                            var e = this.originalEvent;
                            (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                        },
                    }),
                    y.each(
                        {
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            code: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: !0,
                        },
                        y.event.addProp
                    ),
                    y.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        y.event.special[e] = {
                            setup: function () {
                                return Ae(this, e, ke), !1;
                            },
                            trigger: function () {
                                return Ae(this, e), !0;
                            },
                            _default: function () {
                                return !0;
                            },
                            delegateType: t,
                        };
                    }),
                    y.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                        y.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function (e) {
                                var n,
                                    i = this,
                                    r = e.relatedTarget,
                                    a = e.handleObj;
                                return (r && (r === i || y.contains(i, r))) || ((e.type = a.origType), (n = a.handler.apply(this, arguments)), (e.type = t)), n;
                            },
                        };
                    }),
                    y.fn.extend({
                        on: function (e, t, n, i) {
                            return Ce(this, e, t, n, i);
                        },
                        one: function (e, t, n, i) {
                            return Ce(this, e, t, n, i, 1);
                        },
                        off: function (e, t, n) {
                            var i, r;
                            if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                            if ("object" == typeof e) {
                                for (r in e) this.off(r, t, e[r]);
                                return this;
                            }
                            return (
                                (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                                !1 === n && (n = xe),
                                this.each(function () {
                                    y.event.remove(this, e, n, t);
                                })
                            );
                        },
                    });
                var ze = /<script|<style|<link/i,
                    Te = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function je(e, t) {
                    return (z(e, "table") && z(11 !== t.nodeType ? t : t.firstChild, "tr") && y(e).children("tbody")[0]) || e;
                }
                function De(e) {
                    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
                }
                function Fe(e) {
                    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
                }
                function Ee(e, t) {
                    var n, i, r, a, o, l;
                    if (1 === t.nodeType) {
                        if (X.hasData(e) && (l = X.get(e).events)) for (r in (X.remove(t, "handle events"), l)) for (n = 0, i = l[r].length; n < i; n++) y.event.add(t, r, l[r][n]);
                        Y.hasData(e) && ((a = Y.access(e)), (o = y.extend({}, a)), Y.set(t, o));
                    }
                }
                function Ie(e, t) {
                    var n = t.nodeName.toLowerCase();
                    "input" === n && pe.test(e.type) ? (t.checked = e.checked) : ("input" !== n && "textarea" !== n) || (t.defaultValue = e.defaultValue);
                }
                function Pe(e, t, n, i) {
                    t = a(t);
                    var r,
                        o,
                        l,
                        s,
                        u,
                        c,
                        d = 0,
                        p = e.length,
                        g = p - 1,
                        m = t[0],
                        v = h(m);
                    if (v || (p > 1 && "string" == typeof m && !f.checkClone && Te.test(m)))
                        return e.each(function (r) {
                            var a = e.eq(r);
                            v && (t[0] = m.call(this, r, a.html())), Pe(a, t, n, i);
                        });
                    if (p && ((o = (r = _e(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = o), o || i)) {
                        for (s = (l = y.map(me(r, "script"), De)).length; d < p; d++) (u = r), d !== g && ((u = y.clone(u, !0, !0)), s && y.merge(l, me(u, "script"))), n.call(e[d], u, d);
                        if (s)
                            for (c = l[l.length - 1].ownerDocument, y.map(l, Fe), d = 0; d < s; d++)
                                (u = l[d]),
                                    he.test(u.type || "") &&
                                        !X.access(u, "globalEval") &&
                                        y.contains(c, u) &&
                                        (u.src && "module" !== (u.type || "").toLowerCase() ? y._evalUrl && !u.noModule && y._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : b(u.textContent.replace(Se, ""), u, c));
                    }
                    return e;
                }
                function Me(e, t, n) {
                    for (var i, r = t ? y.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || y.cleanData(me(i)), i.parentNode && (n && ie(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
                    return e;
                }
                y.extend({
                    htmlPrefilter: function (e) {
                        return e;
                    },
                    clone: function (e, t, n) {
                        var i,
                            r,
                            a,
                            o,
                            l = e.cloneNode(!0),
                            s = ie(e);
                        if (!(f.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || y.isXMLDoc(e))) for (o = me(l), i = 0, r = (a = me(e)).length; i < r; i++) Ie(a[i], o[i]);
                        if (t)
                            if (n) for (a = a || me(e), o = o || me(l), i = 0, r = a.length; i < r; i++) Ee(a[i], o[i]);
                            else Ee(e, l);
                        return (o = me(l, "script")).length > 0 && ve(o, !s && me(e, "script")), l;
                    },
                    cleanData: function (e) {
                        for (var t, n, i, r = y.event.special, a = 0; void 0 !== (n = e[a]); a++)
                            if (K(n)) {
                                if ((t = n[X.expando])) {
                                    if (t.events) for (i in t.events) r[i] ? y.event.remove(n, i) : y.removeEvent(n, i, t.handle);
                                    n[X.expando] = void 0;
                                }
                                n[Y.expando] && (n[Y.expando] = void 0);
                            }
                    },
                }),
                    y.fn.extend({
                        detach: function (e) {
                            return Me(this, e, !0);
                        },
                        remove: function (e) {
                            return Me(this, e);
                        },
                        text: function (e) {
                            return q(
                                this,
                                function (e) {
                                    return void 0 === e
                                        ? y.text(this)
                                        : this.empty().each(function () {
                                              (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                          });
                                },
                                null,
                                e,
                                arguments.length
                            );
                        },
                        append: function () {
                            return Pe(this, arguments, function (e) {
                                (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
                            });
                        },
                        prepend: function () {
                            return Pe(this, arguments, function (e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = je(this, e);
                                    t.insertBefore(e, t.firstChild);
                                }
                            });
                        },
                        before: function () {
                            return Pe(this, arguments, function (e) {
                                this.parentNode && this.parentNode.insertBefore(e, this);
                            });
                        },
                        after: function () {
                            return Pe(this, arguments, function (e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                            });
                        },
                        empty: function () {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (y.cleanData(me(e, !1)), (e.textContent = ""));
                            return this;
                        },
                        clone: function (e, t) {
                            return (
                                (e = null != e && e),
                                (t = null == t ? e : t),
                                this.map(function () {
                                    return y.clone(this, e, t);
                                })
                            );
                        },
                        html: function (e) {
                            return q(
                                this,
                                function (e) {
                                    var t = this[0] || {},
                                        n = 0,
                                        i = this.length;
                                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                    if ("string" == typeof e && !ze.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                                        e = y.htmlPrefilter(e);
                                        try {
                                            for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (y.cleanData(me(t, !1)), (t.innerHTML = e));
                                            t = 0;
                                        } catch (e) {}
                                    }
                                    t && this.empty().append(e);
                                },
                                null,
                                e,
                                arguments.length
                            );
                        },
                        replaceWith: function () {
                            var e = [];
                            return Pe(
                                this,
                                arguments,
                                function (t) {
                                    var n = this.parentNode;
                                    y.inArray(this, e) < 0 && (y.cleanData(me(this)), n && n.replaceChild(t, this));
                                },
                                e
                            );
                        },
                    }),
                    y.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                        y.fn[e] = function (e) {
                            for (var n, i = [], r = y(e), a = r.length - 1, l = 0; l <= a; l++) (n = l === a ? this : this.clone(!0)), y(r[l])[t](n), o.apply(i, n.get());
                            return this.pushStack(i);
                        };
                    });
                var Oe = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
                    Le = function (t) {
                        var n = t.ownerDocument.defaultView;
                        return (n && n.opener) || (n = e), n.getComputedStyle(t);
                    },
                    Ne = function (e, t, n) {
                        var i,
                            r,
                            a = {};
                        for (r in t) (a[r] = e.style[r]), (e.style[r] = t[r]);
                        for (r in ((i = n.call(e)), t)) e.style[r] = a[r];
                        return i;
                    },
                    Re = new RegExp(te.join("|"), "i");
                function Be(e, t, n) {
                    var i,
                        r,
                        a,
                        o,
                        l = e.style;
                    return (
                        (n = n || Le(e)) &&
                            ("" !== (o = n.getPropertyValue(t) || n[t]) || ie(e) || (o = y.style(e, t)),
                            !f.pixelBoxStyles() && Oe.test(o) && Re.test(t) && ((i = l.width), (r = l.minWidth), (a = l.maxWidth), (l.minWidth = l.maxWidth = l.width = o), (o = n.width), (l.width = i), (l.minWidth = r), (l.maxWidth = a))),
                        void 0 !== o ? o + "" : o
                    );
                }
                function qe(e, t) {
                    return {
                        get: function () {
                            if (!e()) return (this.get = t).apply(this, arguments);
                            delete this.get;
                        },
                    };
                }
                !(function () {
                    function t() {
                        if (c) {
                            (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                                (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                                ne.appendChild(u).appendChild(c);
                            var t = e.getComputedStyle(c);
                            (i = "1%" !== t.top),
                                (s = 12 === n(t.marginLeft)),
                                (c.style.right = "60%"),
                                (o = 36 === n(t.right)),
                                (r = 36 === n(t.width)),
                                (c.style.position = "absolute"),
                                (a = 12 === n(c.offsetWidth / 3)),
                                ne.removeChild(u),
                                (c = null);
                        }
                    }
                    function n(e) {
                        return Math.round(parseFloat(e));
                    }
                    var i,
                        r,
                        a,
                        o,
                        l,
                        s,
                        u = m.createElement("div"),
                        c = m.createElement("div");
                    c.style &&
                        ((c.style.backgroundClip = "content-box"),
                        (c.cloneNode(!0).style.backgroundClip = ""),
                        (f.clearCloneStyle = "content-box" === c.style.backgroundClip),
                        y.extend(f, {
                            boxSizingReliable: function () {
                                return t(), r;
                            },
                            pixelBoxStyles: function () {
                                return t(), o;
                            },
                            pixelPosition: function () {
                                return t(), i;
                            },
                            reliableMarginLeft: function () {
                                return t(), s;
                            },
                            scrollboxSize: function () {
                                return t(), a;
                            },
                            reliableTrDimensions: function () {
                                var t, n, i, r;
                                return (
                                    null == l &&
                                        ((t = m.createElement("table")),
                                        (n = m.createElement("tr")),
                                        (i = m.createElement("div")),
                                        (t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate"),
                                        (n.style.cssText = "border:1px solid"),
                                        (n.style.height = "1px"),
                                        (i.style.height = "9px"),
                                        (i.style.display = "block"),
                                        ne.appendChild(t).appendChild(n).appendChild(i),
                                        (r = e.getComputedStyle(n)),
                                        (l = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === n.offsetHeight),
                                        ne.removeChild(t)),
                                    l
                                );
                            },
                        }));
                })();
                var Ue = ["Webkit", "Moz", "ms"],
                    Ve = m.createElement("div").style,
                    He = {};
                function We(e) {
                    var t = y.cssProps[e] || He[e];
                    return (
                        t ||
                        (e in Ve
                            ? e
                            : (He[e] =
                                  (function (e) {
                                      for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Ve) return e;
                                  })(e) || e))
                    );
                }
                var Ke = /^(none|table(?!-c[ea]).+)/,
                    Ge = /^--/,
                    Xe = { position: "absolute", visibility: "hidden", display: "block" },
                    Ye = { letterSpacing: "0", fontWeight: "400" };
                function $e(e, t, n) {
                    var i = ee.exec(t);
                    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
                }
                function Je(e, t, n, i, r, a) {
                    var o = "width" === t ? 1 : 0,
                        l = 0,
                        s = 0;
                    if (n === (i ? "border" : "content")) return 0;
                    for (; o < 4; o += 2)
                        "margin" === n && (s += y.css(e, n + te[o], !0, r)),
                            i
                                ? ("content" === n && (s -= y.css(e, "padding" + te[o], !0, r)), "margin" !== n && (s -= y.css(e, "border" + te[o] + "Width", !0, r)))
                                : ((s += y.css(e, "padding" + te[o], !0, r)), "padding" !== n ? (s += y.css(e, "border" + te[o] + "Width", !0, r)) : (l += y.css(e, "border" + te[o] + "Width", !0, r)));
                    return !i && a >= 0 && (s += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - s - l - 0.5)) || 0), s;
                }
                function Ze(e, t, n) {
                    var i = Le(e),
                        r = (!f.boxSizingReliable() || n) && "border-box" === y.css(e, "boxSizing", !1, i),
                        a = r,
                        o = Be(e, t, i),
                        l = "offset" + t[0].toUpperCase() + t.slice(1);
                    if (Oe.test(o)) {
                        if (!n) return o;
                        o = "auto";
                    }
                    return (
                        ((!f.boxSizingReliable() && r) || (!f.reliableTrDimensions() && z(e, "tr")) || "auto" === o || (!parseFloat(o) && "inline" === y.css(e, "display", !1, i))) &&
                            e.getClientRects().length &&
                            ((r = "border-box" === y.css(e, "boxSizing", !1, i)), (a = l in e) && (o = e[l])),
                        (o = parseFloat(o) || 0) + Je(e, t, n || (r ? "border" : "content"), a, i, o) + "px"
                    );
                }
                function Qe(e, t, n, i, r) {
                    return new Qe.prototype.init(e, t, n, i, r);
                }
                y.extend({
                    cssHooks: {
                        opacity: {
                            get: function (e, t) {
                                if (t) {
                                    var n = Be(e, "opacity");
                                    return "" === n ? "1" : n;
                                }
                            },
                        },
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                    },
                    cssProps: {},
                    style: function (e, t, n, i) {
                        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                            var r,
                                a,
                                o,
                                l = W(t),
                                s = Ge.test(t),
                                u = e.style;
                            if ((s || (t = We(l)), (o = y.cssHooks[t] || y.cssHooks[l]), void 0 === n)) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : u[t];
                            "string" === (a = typeof n) && (r = ee.exec(n)) && r[1] && ((n = oe(e, t, r)), (a = "number")),
                                null != n &&
                                    n == n &&
                                    ("number" !== a || s || (n += (r && r[3]) || (y.cssNumber[l] ? "" : "px")),
                                    f.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                                    (o && "set" in o && void 0 === (n = o.set(e, n, i))) || (s ? u.setProperty(t, n) : (u[t] = n)));
                        }
                    },
                    css: function (e, t, n, i) {
                        var r,
                            a,
                            o,
                            l = W(t);
                        return (
                            Ge.test(t) || (t = We(l)),
                            (o = y.cssHooks[t] || y.cssHooks[l]) && "get" in o && (r = o.get(e, !0, n)),
                            void 0 === r && (r = Be(e, t, i)),
                            "normal" === r && t in Ye && (r = Ye[t]),
                            "" === n || n ? ((a = parseFloat(r)), !0 === n || isFinite(a) ? a || 0 : r) : r
                        );
                    },
                }),
                    y.each(["height", "width"], function (e, t) {
                        y.cssHooks[t] = {
                            get: function (e, n, i) {
                                if (n)
                                    return !Ke.test(y.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                        ? Ze(e, t, i)
                                        : Ne(e, Xe, function () {
                                              return Ze(e, t, i);
                                          });
                            },
                            set: function (e, n, i) {
                                var r,
                                    a = Le(e),
                                    o = !f.scrollboxSize() && "absolute" === a.position,
                                    l = (o || i) && "border-box" === y.css(e, "boxSizing", !1, a),
                                    s = i ? Je(e, t, i, l, a) : 0;
                                return (
                                    l && o && (s -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - Je(e, t, "border", !1, a) - 0.5)),
                                    s && (r = ee.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = y.css(e, t))),
                                    $e(0, n, s)
                                );
                            },
                        };
                    }),
                    (y.cssHooks.marginLeft = qe(f.reliableMarginLeft, function (e, t) {
                        if (t)
                            return (
                                (parseFloat(Be(e, "marginLeft")) ||
                                    e.getBoundingClientRect().left -
                                        Ne(e, { marginLeft: 0 }, function () {
                                            return e.getBoundingClientRect().left;
                                        })) + "px"
                            );
                    })),
                    y.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                        (y.cssHooks[e + t] = {
                            expand: function (n) {
                                for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + te[i] + t] = a[i] || a[i - 2] || a[0];
                                return r;
                            },
                        }),
                            "margin" !== e && (y.cssHooks[e + t].set = $e);
                    }),
                    y.fn.extend({
                        css: function (e, t) {
                            return q(
                                this,
                                function (e, t, n) {
                                    var i,
                                        r,
                                        a = {},
                                        o = 0;
                                    if (Array.isArray(t)) {
                                        for (i = Le(e), r = t.length; o < r; o++) a[t[o]] = y.css(e, t[o], !1, i);
                                        return a;
                                    }
                                    return void 0 !== n ? y.style(e, t, n) : y.css(e, t);
                                },
                                e,
                                t,
                                arguments.length > 1
                            );
                        },
                    }),
                    (y.Tween = Qe),
                    (Qe.prototype = {
                        constructor: Qe,
                        init: function (e, t, n, i, r, a) {
                            (this.elem = e), (this.prop = n), (this.easing = r || y.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = a || (y.cssNumber[n] ? "" : "px"));
                        },
                        cur: function () {
                            var e = Qe.propHooks[this.prop];
                            return e && e.get ? e.get(this) : Qe.propHooks._default.get(this);
                        },
                        run: function (e) {
                            var t,
                                n = Qe.propHooks[this.prop];
                            return (
                                this.options.duration ? (this.pos = t = y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                                (this.now = (this.end - this.start) * t + this.start),
                                this.options.step && this.options.step.call(this.elem, this.now, this),
                                n && n.set ? n.set(this) : Qe.propHooks._default.set(this),
                                this
                            );
                        },
                    }),
                    (Qe.prototype.init.prototype = Qe.prototype),
                    (Qe.propHooks = {
                        _default: {
                            get: function (e) {
                                var t;
                                return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = y.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                            },
                            set: function (e) {
                                y.fx.step[e.prop] ? y.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!y.cssHooks[e.prop] && null == e.elem.style[We(e.prop)]) ? (e.elem[e.prop] = e.now) : y.style(e.elem, e.prop, e.now + e.unit);
                            },
                        },
                    }),
                    (Qe.propHooks.scrollTop = Qe.propHooks.scrollLeft = {
                        set: function (e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
                        },
                    }),
                    (y.easing = {
                        linear: function (e) {
                            return e;
                        },
                        swing: function (e) {
                            return 0.5 - Math.cos(e * Math.PI) / 2;
                        },
                        _default: "swing",
                    }),
                    (y.fx = Qe.prototype.init),
                    (y.fx.step = {});
                var et,
                    tt,
                    nt = /^(?:toggle|show|hide)$/,
                    it = /queueHooks$/;
                function rt() {
                    tt && (!1 === m.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(rt) : e.setTimeout(rt, y.fx.interval), y.fx.tick());
                }
                function at() {
                    return (
                        e.setTimeout(function () {
                            et = void 0;
                        }),
                        (et = Date.now())
                    );
                }
                function ot(e, t) {
                    var n,
                        i = 0,
                        r = { height: e };
                    for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = te[i])] = r["padding" + n] = e;
                    return t && (r.opacity = r.width = e), r;
                }
                function lt(e, t, n) {
                    for (var i, r = (st.tweeners[t] || []).concat(st.tweeners["*"]), a = 0, o = r.length; a < o; a++) if ((i = r[a].call(n, t, e))) return i;
                }
                function st(e, t, n) {
                    var i,
                        r,
                        a = 0,
                        o = st.prefilters.length,
                        l = y.Deferred().always(function () {
                            delete s.elem;
                        }),
                        s = function () {
                            if (r) return !1;
                            for (var t = et || at(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), a = 0, o = u.tweens.length; a < o; a++) u.tweens[a].run(i);
                            return l.notifyWith(e, [u, i, n]), i < 1 && o ? n : (o || l.notifyWith(e, [u, 1, 0]), l.resolveWith(e, [u]), !1);
                        },
                        u = l.promise({
                            elem: e,
                            props: y.extend({}, t),
                            opts: y.extend(!0, { specialEasing: {}, easing: y.easing._default }, n),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: et || at(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function (t, n) {
                                var i = y.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                return u.tweens.push(i), i;
                            },
                            stop: function (t) {
                                var n = 0,
                                    i = t ? u.tweens.length : 0;
                                if (r) return this;
                                for (r = !0; n < i; n++) u.tweens[n].run(1);
                                return t ? (l.notifyWith(e, [u, 1, 0]), l.resolveWith(e, [u, t])) : l.rejectWith(e, [u, t]), this;
                            },
                        }),
                        c = u.props;
                    for (
                        !(function (e, t) {
                            var n, i, r, a, o;
                            for (n in e)
                                if (((r = t[(i = W(n))]), (a = e[n]), Array.isArray(a) && ((r = a[1]), (a = e[n] = a[0])), n !== i && ((e[i] = a), delete e[n]), (o = y.cssHooks[i]) && ("expand" in o)))
                                    for (n in ((a = o.expand(a)), delete e[i], a)) (n in e) || ((e[n] = a[n]), (t[n] = r));
                                else t[i] = r;
                        })(c, u.opts.specialEasing);
                        a < o;
                        a++
                    )
                        if ((i = st.prefilters[a].call(u, e, c, u.opts))) return h(i.stop) && (y._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                    return (
                        y.map(c, lt, u),
                        h(u.opts.start) && u.opts.start.call(e, u),
                        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
                        y.fx.timer(y.extend(s, { elem: e, anim: u, queue: u.opts.queue })),
                        u
                    );
                }
                (y.Animation = y.extend(st, {
                    tweeners: {
                        "*": [
                            function (e, t) {
                                var n = this.createTween(e, t);
                                return oe(n.elem, e, ee.exec(t), n), n;
                            },
                        ],
                    },
                    tweener: function (e, t) {
                        h(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
                        for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (st.tweeners[n] = st.tweeners[n] || []), st.tweeners[n].unshift(t);
                    },
                    prefilters: [
                        function (e, t, n) {
                            var i,
                                r,
                                a,
                                o,
                                l,
                                s,
                                u,
                                c,
                                d = "width" in t || "height" in t,
                                p = this,
                                f = {},
                                h = e.style,
                                g = e.nodeType && ae(e),
                                m = X.get(e, "fxshow");
                            for (i in (n.queue ||
                                (null == (o = y._queueHooks(e, "fx")).unqueued &&
                                    ((o.unqueued = 0),
                                    (l = o.empty.fire),
                                    (o.empty.fire = function () {
                                        o.unqueued || l();
                                    })),
                                o.unqueued++,
                                p.always(function () {
                                    p.always(function () {
                                        o.unqueued--, y.queue(e, "fx").length || o.empty.fire();
                                    });
                                })),
                            t))
                                if (((r = t[i]), nt.test(r))) {
                                    if ((delete t[i], (a = a || "toggle" === r), r === (g ? "hide" : "show"))) {
                                        if ("show" !== r || !m || void 0 === m[i]) continue;
                                        g = !0;
                                    }
                                    f[i] = (m && m[i]) || y.style(e, i);
                                }
                            if ((s = !y.isEmptyObject(t)) || !y.isEmptyObject(f))
                                for (i in (d &&
                                    1 === e.nodeType &&
                                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                                    null == (u = m && m.display) && (u = X.get(e, "display")),
                                    "none" === (c = y.css(e, "display")) && (u ? (c = u) : (ue([e], !0), (u = e.style.display || u), (c = y.css(e, "display")), ue([e]))),
                                    ("inline" === c || ("inline-block" === c && null != u)) &&
                                        "none" === y.css(e, "float") &&
                                        (s ||
                                            (p.done(function () {
                                                h.display = u;
                                            }),
                                            null == u && ((c = h.display), (u = "none" === c ? "" : c))),
                                        (h.display = "inline-block"))),
                                n.overflow &&
                                    ((h.overflow = "hidden"),
                                    p.always(function () {
                                        (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                                    })),
                                (s = !1),
                                f))
                                    s ||
                                        (m ? "hidden" in m && (g = m.hidden) : (m = X.access(e, "fxshow", { display: u })),
                                        a && (m.hidden = !g),
                                        g && ue([e], !0),
                                        p.done(function () {
                                            for (i in (g || ue([e]), X.remove(e, "fxshow"), f)) y.style(e, i, f[i]);
                                        })),
                                        (s = lt(g ? m[i] : 0, i, p)),
                                        i in m || ((m[i] = s.start), g && ((s.end = s.start), (s.start = 0)));
                        },
                    ],
                    prefilter: function (e, t) {
                        t ? st.prefilters.unshift(e) : st.prefilters.push(e);
                    },
                })),
                    (y.speed = function (e, t, n) {
                        var i = e && "object" == typeof e ? y.extend({}, e) : { complete: n || (!n && t) || (h(e) && e), duration: e, easing: (n && t) || (t && !h(t) && t) };
                        return (
                            y.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in y.fx.speeds ? (i.duration = y.fx.speeds[i.duration]) : (i.duration = y.fx.speeds._default)),
                            (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                            (i.old = i.complete),
                            (i.complete = function () {
                                h(i.old) && i.old.call(this), i.queue && y.dequeue(this, i.queue);
                            }),
                            i
                        );
                    }),
                    y.fn.extend({
                        fadeTo: function (e, t, n, i) {
                            return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
                        },
                        animate: function (e, t, n, i) {
                            var r = y.isEmptyObject(e),
                                a = y.speed(t, n, i),
                                o = function () {
                                    var t = st(this, y.extend({}, e), a);
                                    (r || X.get(this, "finish")) && t.stop(!0);
                                };
                            return (o.finish = o), r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o);
                        },
                        stop: function (e, t, n) {
                            var i = function (e) {
                                var t = e.stop;
                                delete e.stop, t(n);
                            };
                            return (
                                "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                                t && this.queue(e || "fx", []),
                                this.each(function () {
                                    var t = !0,
                                        r = null != e && e + "queueHooks",
                                        a = y.timers,
                                        o = X.get(this);
                                    if (r) o[r] && o[r].stop && i(o[r]);
                                    else for (r in o) o[r] && o[r].stop && it.test(r) && i(o[r]);
                                    for (r = a.length; r--; ) a[r].elem !== this || (null != e && a[r].queue !== e) || (a[r].anim.stop(n), (t = !1), a.splice(r, 1));
                                    (!t && n) || y.dequeue(this, e);
                                })
                            );
                        },
                        finish: function (e) {
                            return (
                                !1 !== e && (e = e || "fx"),
                                this.each(function () {
                                    var t,
                                        n = X.get(this),
                                        i = n[e + "queue"],
                                        r = n[e + "queueHooks"],
                                        a = y.timers,
                                        o = i ? i.length : 0;
                                    for (n.finish = !0, y.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--; ) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                                    for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                    delete n.finish;
                                })
                            );
                        },
                    }),
                    y.each(["toggle", "show", "hide"], function (e, t) {
                        var n = y.fn[t];
                        y.fn[t] = function (e, i, r) {
                            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, i, r);
                        };
                    }),
                    y.each({ slideDown: ot("show"), slideUp: ot("hide"), slideToggle: ot("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
                        y.fn[e] = function (e, n, i) {
                            return this.animate(t, e, n, i);
                        };
                    }),
                    (y.timers = []),
                    (y.fx.tick = function () {
                        var e,
                            t = 0,
                            n = y.timers;
                        for (et = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || y.fx.stop(), (et = void 0);
                    }),
                    (y.fx.timer = function (e) {
                        y.timers.push(e), y.fx.start();
                    }),
                    (y.fx.interval = 13),
                    (y.fx.start = function () {
                        tt || ((tt = !0), rt());
                    }),
                    (y.fx.stop = function () {
                        tt = null;
                    }),
                    (y.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                    (y.fn.delay = function (t, n) {
                        return (
                            (t = (y.fx && y.fx.speeds[t]) || t),
                            (n = n || "fx"),
                            this.queue(n, function (n, i) {
                                var r = e.setTimeout(n, t);
                                i.stop = function () {
                                    e.clearTimeout(r);
                                };
                            })
                        );
                    }),
                    (function () {
                        var e = m.createElement("input"),
                            t = m.createElement("select").appendChild(m.createElement("option"));
                        (e.type = "checkbox"), (f.checkOn = "" !== e.value), (f.optSelected = t.selected), ((e = m.createElement("input")).value = "t"), (e.type = "radio"), (f.radioValue = "t" === e.value);
                    })();
                var ut,
                    ct = y.expr.attrHandle;
                y.fn.extend({
                    attr: function (e, t) {
                        return q(this, y.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function (e) {
                        return this.each(function () {
                            y.removeAttr(this, e);
                        });
                    },
                }),
                    y.extend({
                        attr: function (e, t, n) {
                            var i,
                                r,
                                a = e.nodeType;
                            if (3 !== a && 8 !== a && 2 !== a)
                                return void 0 === e.getAttribute
                                    ? y.prop(e, t, n)
                                    : ((1 === a && y.isXMLDoc(e)) || (r = y.attrHooks[t.toLowerCase()] || (y.expr.match.bool.test(t) ? ut : void 0)),
                                      void 0 !== n
                                          ? null === n
                                              ? void y.removeAttr(e, t)
                                              : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                              ? i
                                              : (e.setAttribute(t, n + ""), n)
                                          : r && "get" in r && null !== (i = r.get(e, t))
                                          ? i
                                          : null == (i = y.find.attr(e, t))
                                          ? void 0
                                          : i);
                        },
                        attrHooks: {
                            type: {
                                set: function (e, t) {
                                    if (!f.radioValue && "radio" === t && z(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t;
                                    }
                                },
                            },
                        },
                        removeAttr: function (e, t) {
                            var n,
                                i = 0,
                                r = t && t.match(P);
                            if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
                        },
                    }),
                    (ut = {
                        set: function (e, t, n) {
                            return !1 === t ? y.removeAttr(e, n) : e.setAttribute(n, n), n;
                        },
                    }),
                    y.each(y.expr.match.bool.source.match(/\w+/g), function (e, t) {
                        var n = ct[t] || y.find.attr;
                        ct[t] = function (e, t, i) {
                            var r,
                                a,
                                o = t.toLowerCase();
                            return i || ((a = ct[o]), (ct[o] = r), (r = null != n(e, t, i) ? o : null), (ct[o] = a)), r;
                        };
                    });
                var dt = /^(?:input|select|textarea|button)$/i,
                    pt = /^(?:a|area)$/i;
                function ft(e) {
                    return (e.match(P) || []).join(" ");
                }
                function ht(e) {
                    return (e.getAttribute && e.getAttribute("class")) || "";
                }
                function gt(e) {
                    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
                }
                y.fn.extend({
                    prop: function (e, t) {
                        return q(this, y.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function (e) {
                        return this.each(function () {
                            delete this[y.propFix[e] || e];
                        });
                    },
                }),
                    y.extend({
                        prop: function (e, t, n) {
                            var i,
                                r,
                                a = e.nodeType;
                            if (3 !== a && 8 !== a && 2 !== a)
                                return (
                                    (1 === a && y.isXMLDoc(e)) || ((t = y.propFix[t] || t), (r = y.propHooks[t])),
                                    void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                                );
                        },
                        propHooks: {
                            tabIndex: {
                                get: function (e) {
                                    var t = y.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : dt.test(e.nodeName) || (pt.test(e.nodeName) && e.href) ? 0 : -1;
                                },
                            },
                        },
                        propFix: { for: "htmlFor", class: "className" },
                    }),
                    f.optSelected ||
                        (y.propHooks.selected = {
                            get: function (e) {
                                var t = e.parentNode;
                                return t && t.parentNode && t.parentNode.selectedIndex, null;
                            },
                            set: function (e) {
                                var t = e.parentNode;
                                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                            },
                        }),
                    y.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                        y.propFix[this.toLowerCase()] = this;
                    }),
                    y.fn.extend({
                        addClass: function (e) {
                            var t,
                                n,
                                i,
                                r,
                                a,
                                o,
                                l,
                                s = 0;
                            if (h(e))
                                return this.each(function (t) {
                                    y(this).addClass(e.call(this, t, ht(this)));
                                });
                            if ((t = gt(e)).length)
                                for (; (n = this[s++]); )
                                    if (((r = ht(n)), (i = 1 === n.nodeType && " " + ft(r) + " "))) {
                                        for (o = 0; (a = t[o++]); ) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                                        r !== (l = ft(i)) && n.setAttribute("class", l);
                                    }
                            return this;
                        },
                        removeClass: function (e) {
                            var t,
                                n,
                                i,
                                r,
                                a,
                                o,
                                l,
                                s = 0;
                            if (h(e))
                                return this.each(function (t) {
                                    y(this).removeClass(e.call(this, t, ht(this)));
                                });
                            if (!arguments.length) return this.attr("class", "");
                            if ((t = gt(e)).length)
                                for (; (n = this[s++]); )
                                    if (((r = ht(n)), (i = 1 === n.nodeType && " " + ft(r) + " "))) {
                                        for (o = 0; (a = t[o++]); ) for (; i.indexOf(" " + a + " ") > -1; ) i = i.replace(" " + a + " ", " ");
                                        r !== (l = ft(i)) && n.setAttribute("class", l);
                                    }
                            return this;
                        },
                        toggleClass: function (e, t) {
                            var n = typeof e,
                                i = "string" === n || Array.isArray(e);
                            return "boolean" == typeof t && i
                                ? t
                                    ? this.addClass(e)
                                    : this.removeClass(e)
                                : h(e)
                                ? this.each(function (n) {
                                      y(this).toggleClass(e.call(this, n, ht(this), t), t);
                                  })
                                : this.each(function () {
                                      var t, r, a, o;
                                      if (i) for (r = 0, a = y(this), o = gt(e); (t = o[r++]); ) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                                      else (void 0 !== e && "boolean" !== n) || ((t = ht(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : X.get(this, "__className__") || ""));
                                  });
                        },
                        hasClass: function (e) {
                            var t,
                                n,
                                i = 0;
                            for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && (" " + ft(ht(n)) + " ").indexOf(t) > -1) return !0;
                            return !1;
                        },
                    });
                var mt = /\r/g;
                y.fn.extend({
                    val: function (e) {
                        var t,
                            n,
                            i,
                            r = this[0];
                        return arguments.length
                            ? ((i = h(e)),
                              this.each(function (n) {
                                  var r;
                                  1 === this.nodeType &&
                                      (null == (r = i ? e.call(this, n, y(this).val()) : e)
                                          ? (r = "")
                                          : "number" == typeof r
                                          ? (r += "")
                                          : Array.isArray(r) &&
                                            (r = y.map(r, function (e) {
                                                return null == e ? "" : e + "";
                                            })),
                                      ((t = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                              }))
                            : r
                            ? (t = y.valHooks[r.type] || y.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                                ? n
                                : "string" == typeof (n = r.value)
                                ? n.replace(mt, "")
                                : null == n
                                ? ""
                                : n
                            : void 0;
                    },
                }),
                    y.extend({
                        valHooks: {
                            option: {
                                get: function (e) {
                                    var t = y.find.attr(e, "value");
                                    return null != t ? t : ft(y.text(e));
                                },
                            },
                            select: {
                                get: function (e) {
                                    var t,
                                        n,
                                        i,
                                        r = e.options,
                                        a = e.selectedIndex,
                                        o = "select-one" === e.type,
                                        l = o ? null : [],
                                        s = o ? a + 1 : r.length;
                                    for (i = a < 0 ? s : o ? a : 0; i < s; i++)
                                        if (((n = r[i]).selected || i === a) && !n.disabled && (!n.parentNode.disabled || !z(n.parentNode, "optgroup"))) {
                                            if (((t = y(n).val()), o)) return t;
                                            l.push(t);
                                        }
                                    return l;
                                },
                                set: function (e, t) {
                                    for (var n, i, r = e.options, a = y.makeArray(t), o = r.length; o--; ) ((i = r[o]).selected = y.inArray(y.valHooks.option.get(i), a) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), a;
                                },
                            },
                        },
                    }),
                    y.each(["radio", "checkbox"], function () {
                        (y.valHooks[this] = {
                            set: function (e, t) {
                                if (Array.isArray(t)) return (e.checked = y.inArray(y(e).val(), t) > -1);
                            },
                        }),
                            f.checkOn ||
                                (y.valHooks[this].get = function (e) {
                                    return null === e.getAttribute("value") ? "on" : e.value;
                                });
                    }),
                    (f.focusin = "onfocusin" in e);
                var vt = /^(?:focusinfocus|focusoutblur)$/,
                    bt = function (e) {
                        e.stopPropagation();
                    };
                y.extend(y.event, {
                    trigger: function (t, n, i, r) {
                        var a,
                            o,
                            l,
                            s,
                            u,
                            d,
                            p,
                            f,
                            v = [i || m],
                            b = c.call(t, "type") ? t.type : t,
                            _ = c.call(t, "namespace") ? t.namespace.split(".") : [];
                        if (
                            ((o = f = l = i = i || m),
                            3 !== i.nodeType &&
                                8 !== i.nodeType &&
                                !vt.test(b + y.event.triggered) &&
                                (b.indexOf(".") > -1 && ((_ = b.split(".")), (b = _.shift()), _.sort()),
                                (u = b.indexOf(":") < 0 && "on" + b),
                                ((t = t[y.expando] ? t : new y.Event(b, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                                (t.namespace = _.join(".")),
                                (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + _.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                                (t.result = void 0),
                                t.target || (t.target = i),
                                (n = null == n ? [t] : y.makeArray(n, [t])),
                                (p = y.event.special[b] || {}),
                                r || !p.trigger || !1 !== p.trigger.apply(i, n)))
                        ) {
                            if (!r && !p.noBubble && !g(i)) {
                                for (s = p.delegateType || b, vt.test(s + b) || (o = o.parentNode); o; o = o.parentNode) v.push(o), (l = o);
                                l === (i.ownerDocument || m) && v.push(l.defaultView || l.parentWindow || e);
                            }
                            for (a = 0; (o = v[a++]) && !t.isPropagationStopped(); )
                                (f = o),
                                    (t.type = a > 1 ? s : p.bindType || b),
                                    (d = (X.get(o, "events") || Object.create(null))[t.type] && X.get(o, "handle")) && d.apply(o, n),
                                    (d = u && o[u]) && d.apply && K(o) && ((t.result = d.apply(o, n)), !1 === t.result && t.preventDefault());
                            return (
                                (t.type = b),
                                r ||
                                    t.isDefaultPrevented() ||
                                    (p._default && !1 !== p._default.apply(v.pop(), n)) ||
                                    !K(i) ||
                                    (u &&
                                        h(i[b]) &&
                                        !g(i) &&
                                        ((l = i[u]) && (i[u] = null),
                                        (y.event.triggered = b),
                                        t.isPropagationStopped() && f.addEventListener(b, bt),
                                        i[b](),
                                        t.isPropagationStopped() && f.removeEventListener(b, bt),
                                        (y.event.triggered = void 0),
                                        l && (i[u] = l))),
                                t.result
                            );
                        }
                    },
                    simulate: function (e, t, n) {
                        var i = y.extend(new y.Event(), n, { type: e, isSimulated: !0 });
                        y.event.trigger(i, null, t);
                    },
                }),
                    y.fn.extend({
                        trigger: function (e, t) {
                            return this.each(function () {
                                y.event.trigger(e, t, this);
                            });
                        },
                        triggerHandler: function (e, t) {
                            var n = this[0];
                            if (n) return y.event.trigger(e, t, n, !0);
                        },
                    }),
                    f.focusin ||
                        y.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                            var n = function (e) {
                                y.event.simulate(t, e.target, y.event.fix(e));
                            };
                            y.event.special[t] = {
                                setup: function () {
                                    var i = this.ownerDocument || this.document || this,
                                        r = X.access(i, t);
                                    r || i.addEventListener(e, n, !0), X.access(i, t, (r || 0) + 1);
                                },
                                teardown: function () {
                                    var i = this.ownerDocument || this.document || this,
                                        r = X.access(i, t) - 1;
                                    r ? X.access(i, t, r) : (i.removeEventListener(e, n, !0), X.remove(i, t));
                                },
                            };
                        });
                var _t = e.location,
                    yt = { guid: Date.now() },
                    wt = /\?/;
                y.parseXML = function (t) {
                    var n, i;
                    if (!t || "string" != typeof t) return null;
                    try {
                        n = new e.DOMParser().parseFromString(t, "text/xml");
                    } catch (e) {}
                    return (
                        (i = n && n.getElementsByTagName("parsererror")[0]),
                        (n && !i) ||
                            y.error(
                                "Invalid XML: " +
                                    (i
                                        ? y
                                              .map(i.childNodes, function (e) {
                                                  return e.textContent;
                                              })
                                              .join("\n")
                                        : t)
                            ),
                        n
                    );
                };
                var xt = /\[\]$/,
                    kt = /\r?\n/g,
                    Ct = /^(?:submit|button|image|reset|file)$/i,
                    At = /^(?:input|select|textarea|keygen)/i;
                function zt(e, t, n, i) {
                    var r;
                    if (Array.isArray(t))
                        y.each(t, function (t, r) {
                            n || xt.test(e) ? i(e, r) : zt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
                        });
                    else if (n || "object" !== _(t)) i(e, t);
                    else for (r in t) zt(e + "[" + r + "]", t[r], n, i);
                }
                (y.param = function (e, t) {
                    var n,
                        i = [],
                        r = function (e, t) {
                            var n = h(t) ? t() : t;
                            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                        };
                    if (null == e) return "";
                    if (Array.isArray(e) || (e.jquery && !y.isPlainObject(e)))
                        y.each(e, function () {
                            r(this.name, this.value);
                        });
                    else for (n in e) zt(n, e[n], t, r);
                    return i.join("&");
                }),
                    y.fn.extend({
                        serialize: function () {
                            return y.param(this.serializeArray());
                        },
                        serializeArray: function () {
                            return this.map(function () {
                                var e = y.prop(this, "elements");
                                return e ? y.makeArray(e) : this;
                            })
                                .filter(function () {
                                    var e = this.type;
                                    return this.name && !y(this).is(":disabled") && At.test(this.nodeName) && !Ct.test(e) && (this.checked || !pe.test(e));
                                })
                                .map(function (e, t) {
                                    var n = y(this).val();
                                    return null == n
                                        ? null
                                        : Array.isArray(n)
                                        ? y.map(n, function (e) {
                                              return { name: t.name, value: e.replace(kt, "\r\n") };
                                          })
                                        : { name: t.name, value: n.replace(kt, "\r\n") };
                                })
                                .get();
                        },
                    });
                var Tt = /%20/g,
                    St = /#.*$/,
                    jt = /([?&])_=[^&]*/,
                    Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Ft = /^(?:GET|HEAD)$/,
                    Et = /^\/\//,
                    It = {},
                    Pt = {},
                    Mt = "*/".concat("*"),
                    Ot = m.createElement("a");
                function Lt(e) {
                    return function (t, n) {
                        "string" != typeof t && ((n = t), (t = "*"));
                        var i,
                            r = 0,
                            a = t.toLowerCase().match(P) || [];
                        if (h(n)) for (; (i = a[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
                    };
                }
                function Nt(e, t, n, i) {
                    var r = {},
                        a = e === Pt;
                    function o(l) {
                        var s;
                        return (
                            (r[l] = !0),
                            y.each(e[l] || [], function (e, l) {
                                var u = l(t, n, i);
                                return "string" != typeof u || a || r[u] ? (a ? !(s = u) : void 0) : (t.dataTypes.unshift(u), o(u), !1);
                            }),
                            s
                        );
                    }
                    return o(t.dataTypes[0]) || (!r["*"] && o("*"));
                }
                function Rt(e, t) {
                    var n,
                        i,
                        r = y.ajaxSettings.flatOptions || {};
                    for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                    return i && y.extend(!0, e, i), e;
                }
                (Ot.href = _t.href),
                    y.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: _t.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_t.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: { "*": Mt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                            responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                            converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": y.parseXML },
                            flatOptions: { url: !0, context: !0 },
                        },
                        ajaxSetup: function (e, t) {
                            return t ? Rt(Rt(e, y.ajaxSettings), t) : Rt(y.ajaxSettings, e);
                        },
                        ajaxPrefilter: Lt(It),
                        ajaxTransport: Lt(Pt),
                        ajax: function (t, n) {
                            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                            var i,
                                r,
                                a,
                                o,
                                l,
                                s,
                                u,
                                c,
                                d,
                                p,
                                f = y.ajaxSetup({}, n),
                                h = f.context || f,
                                g = f.context && (h.nodeType || h.jquery) ? y(h) : y.event,
                                v = y.Deferred(),
                                b = y.Callbacks("once memory"),
                                _ = f.statusCode || {},
                                w = {},
                                x = {},
                                k = "canceled",
                                C = {
                                    readyState: 0,
                                    getResponseHeader: function (e) {
                                        var t;
                                        if (u) {
                                            if (!o) for (o = {}; (t = Dt.exec(a)); ) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = o[e.toLowerCase() + " "];
                                        }
                                        return null == t ? null : t.join(", ");
                                    },
                                    getAllResponseHeaders: function () {
                                        return u ? a : null;
                                    },
                                    setRequestHeader: function (e, t) {
                                        return null == u && ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e), (w[e] = t)), this;
                                    },
                                    overrideMimeType: function (e) {
                                        return null == u && (f.mimeType = e), this;
                                    },
                                    statusCode: function (e) {
                                        var t;
                                        if (e)
                                            if (u) C.always(e[C.status]);
                                            else for (t in e) _[t] = [_[t], e[t]];
                                        return this;
                                    },
                                    abort: function (e) {
                                        var t = e || k;
                                        return i && i.abort(t), A(0, t), this;
                                    },
                                };
                            if (
                                (v.promise(C),
                                (f.url = ((t || f.url || _t.href) + "").replace(Et, _t.protocol + "//")),
                                (f.type = n.method || n.type || f.method || f.type),
                                (f.dataTypes = (f.dataType || "*").toLowerCase().match(P) || [""]),
                                null == f.crossDomain)
                            ) {
                                s = m.createElement("a");
                                try {
                                    (s.href = f.url), (s.href = s.href), (f.crossDomain = Ot.protocol + "//" + Ot.host != s.protocol + "//" + s.host);
                                } catch (e) {
                                    f.crossDomain = !0;
                                }
                            }
                            if ((f.data && f.processData && "string" != typeof f.data && (f.data = y.param(f.data, f.traditional)), Nt(It, f, n, C), u)) return C;
                            for (d in ((c = y.event && f.global) && 0 == y.active++ && y.event.trigger("ajaxStart"),
                            (f.type = f.type.toUpperCase()),
                            (f.hasContent = !Ft.test(f.type)),
                            (r = f.url.replace(St, "")),
                            f.hasContent
                                ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Tt, "+"))
                                : ((p = f.url.slice(r.length)),
                                  f.data && (f.processData || "string" == typeof f.data) && ((r += (wt.test(r) ? "&" : "?") + f.data), delete f.data),
                                  !1 === f.cache && ((r = r.replace(jt, "$1")), (p = (wt.test(r) ? "&" : "?") + "_=" + yt.guid++ + p)),
                                  (f.url = r + p)),
                            f.ifModified && (y.lastModified[r] && C.setRequestHeader("If-Modified-Since", y.lastModified[r]), y.etag[r] && C.setRequestHeader("If-None-Match", y.etag[r])),
                            ((f.data && f.hasContent && !1 !== f.contentType) || n.contentType) && C.setRequestHeader("Content-Type", f.contentType),
                            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : f.accepts["*"]),
                            f.headers))
                                C.setRequestHeader(d, f.headers[d]);
                            if (f.beforeSend && (!1 === f.beforeSend.call(h, C, f) || u)) return C.abort();
                            if (((k = "abort"), b.add(f.complete), C.done(f.success), C.fail(f.error), (i = Nt(Pt, f, n, C)))) {
                                if (((C.readyState = 1), c && g.trigger("ajaxSend", [C, f]), u)) return C;
                                f.async &&
                                    f.timeout > 0 &&
                                    (l = e.setTimeout(function () {
                                        C.abort("timeout");
                                    }, f.timeout));
                                try {
                                    (u = !1), i.send(w, A);
                                } catch (e) {
                                    if (u) throw e;
                                    A(-1, e);
                                }
                            } else A(-1, "No Transport");
                            function A(t, n, o, s) {
                                var d,
                                    p,
                                    m,
                                    w,
                                    x,
                                    k = n;
                                u ||
                                    ((u = !0),
                                    l && e.clearTimeout(l),
                                    (i = void 0),
                                    (a = s || ""),
                                    (C.readyState = t > 0 ? 4 : 0),
                                    (d = (t >= 200 && t < 300) || 304 === t),
                                    o &&
                                        (w = (function (e, t, n) {
                                            for (var i, r, a, o, l = e.contents, s = e.dataTypes; "*" === s[0]; ) s.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                            if (i)
                                                for (r in l)
                                                    if (l[r] && l[r].test(i)) {
                                                        s.unshift(r);
                                                        break;
                                                    }
                                            if (s[0] in n) a = s[0];
                                            else {
                                                for (r in n) {
                                                    if (!s[0] || e.converters[r + " " + s[0]]) {
                                                        a = r;
                                                        break;
                                                    }
                                                    o || (o = r);
                                                }
                                                a = a || o;
                                            }
                                            if (a) return a !== s[0] && s.unshift(a), n[a];
                                        })(f, C, o)),
                                    !d && y.inArray("script", f.dataTypes) > -1 && y.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function () {}),
                                    (w = (function (e, t, n, i) {
                                        var r,
                                            a,
                                            o,
                                            l,
                                            s,
                                            u = {},
                                            c = e.dataTypes.slice();
                                        if (c[1]) for (o in e.converters) u[o.toLowerCase()] = e.converters[o];
                                        for (a = c.shift(); a; )
                                            if ((e.responseFields[a] && (n[e.responseFields[a]] = t), !s && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (s = a), (a = c.shift())))
                                                if ("*" === a) a = s;
                                                else if ("*" !== s && s !== a) {
                                                    if (!(o = u[s + " " + a] || u["* " + a]))
                                                        for (r in u)
                                                            if ((l = r.split(" "))[1] === a && (o = u[s + " " + l[0]] || u["* " + l[0]])) {
                                                                !0 === o ? (o = u[r]) : !0 !== u[r] && ((a = l[0]), c.unshift(l[1]));
                                                                break;
                                                            }
                                                    if (!0 !== o)
                                                        if (o && e.throws) t = o(t);
                                                        else
                                                            try {
                                                                t = o(t);
                                                            } catch (e) {
                                                                return { state: "parsererror", error: o ? e : "No conversion from " + s + " to " + a };
                                                            }
                                                }
                                        return { state: "success", data: t };
                                    })(f, w, C, d)),
                                    d
                                        ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (y.lastModified[r] = x), (x = C.getResponseHeader("etag")) && (y.etag[r] = x)),
                                          204 === t || "HEAD" === f.type ? (k = "nocontent") : 304 === t ? (k = "notmodified") : ((k = w.state), (p = w.data), (d = !(m = w.error))))
                                        : ((m = k), (!t && k) || ((k = "error"), t < 0 && (t = 0))),
                                    (C.status = t),
                                    (C.statusText = (n || k) + ""),
                                    d ? v.resolveWith(h, [p, k, C]) : v.rejectWith(h, [C, k, m]),
                                    C.statusCode(_),
                                    (_ = void 0),
                                    c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? p : m]),
                                    b.fireWith(h, [C, k]),
                                    c && (g.trigger("ajaxComplete", [C, f]), --y.active || y.event.trigger("ajaxStop")));
                            }
                            return C;
                        },
                        getJSON: function (e, t, n) {
                            return y.get(e, t, n, "json");
                        },
                        getScript: function (e, t) {
                            return y.get(e, void 0, t, "script");
                        },
                    }),
                    y.each(["get", "post"], function (e, t) {
                        y[t] = function (e, n, i, r) {
                            return h(n) && ((r = r || i), (i = n), (n = void 0)), y.ajax(y.extend({ url: e, type: t, dataType: r, data: n, success: i }, y.isPlainObject(e) && e));
                        };
                    }),
                    y.ajaxPrefilter(function (e) {
                        var t;
                        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
                    }),
                    (y._evalUrl = function (e, t, n) {
                        return y.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: { "text script": function () {} },
                            dataFilter: function (e) {
                                y.globalEval(e, t, n);
                            },
                        });
                    }),
                    y.fn.extend({
                        wrapAll: function (e) {
                            var t;
                            return (
                                this[0] &&
                                    (h(e) && (e = e.call(this[0])),
                                    (t = y(e, this[0].ownerDocument).eq(0).clone(!0)),
                                    this[0].parentNode && t.insertBefore(this[0]),
                                    t
                                        .map(function () {
                                            for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                            return e;
                                        })
                                        .append(this)),
                                this
                            );
                        },
                        wrapInner: function (e) {
                            return h(e)
                                ? this.each(function (t) {
                                      y(this).wrapInner(e.call(this, t));
                                  })
                                : this.each(function () {
                                      var t = y(this),
                                          n = t.contents();
                                      n.length ? n.wrapAll(e) : t.append(e);
                                  });
                        },
                        wrap: function (e) {
                            var t = h(e);
                            return this.each(function (n) {
                                y(this).wrapAll(t ? e.call(this, n) : e);
                            });
                        },
                        unwrap: function (e) {
                            return (
                                this.parent(e)
                                    .not("body")
                                    .each(function () {
                                        y(this).replaceWith(this.childNodes);
                                    }),
                                this
                            );
                        },
                    }),
                    (y.expr.pseudos.hidden = function (e) {
                        return !y.expr.pseudos.visible(e);
                    }),
                    (y.expr.pseudos.visible = function (e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                    }),
                    (y.ajaxSettings.xhr = function () {
                        try {
                            return new e.XMLHttpRequest();
                        } catch (e) {}
                    });
                var Bt = { 0: 200, 1223: 204 },
                    qt = y.ajaxSettings.xhr();
                (f.cors = !!qt && "withCredentials" in qt),
                    (f.ajax = qt = !!qt),
                    y.ajaxTransport(function (t) {
                        var n, i;
                        if (f.cors || (qt && !t.crossDomain))
                            return {
                                send: function (r, a) {
                                    var o,
                                        l = t.xhr();
                                    if ((l.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (o in t.xhrFields) l[o] = t.xhrFields[o];
                                    for (o in (t.mimeType && l.overrideMimeType && l.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) l.setRequestHeader(o, r[o]);
                                    (n = function (e) {
                                        return function () {
                                            n &&
                                                ((n = i = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null),
                                                "abort" === e
                                                    ? l.abort()
                                                    : "error" === e
                                                    ? "number" != typeof l.status
                                                        ? a(0, "error")
                                                        : a(l.status, l.statusText)
                                                    : a(
                                                          Bt[l.status] || l.status,
                                                          l.statusText,
                                                          "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? { binary: l.response } : { text: l.responseText },
                                                          l.getAllResponseHeaders()
                                                      ));
                                        };
                                    }),
                                        (l.onload = n()),
                                        (i = l.onerror = l.ontimeout = n("error")),
                                        void 0 !== l.onabort
                                            ? (l.onabort = i)
                                            : (l.onreadystatechange = function () {
                                                  4 === l.readyState &&
                                                      e.setTimeout(function () {
                                                          n && i();
                                                      });
                                              }),
                                        (n = n("abort"));
                                    try {
                                        l.send((t.hasContent && t.data) || null);
                                    } catch (e) {
                                        if (n) throw e;
                                    }
                                },
                                abort: function () {
                                    n && n();
                                },
                            };
                    }),
                    y.ajaxPrefilter(function (e) {
                        e.crossDomain && (e.contents.script = !1);
                    }),
                    y.ajaxSetup({
                        accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                        contents: { script: /\b(?:java|ecma)script\b/ },
                        converters: {
                            "text script": function (e) {
                                return y.globalEval(e), e;
                            },
                        },
                    }),
                    y.ajaxPrefilter("script", function (e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
                    }),
                    y.ajaxTransport("script", function (e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs)
                            return {
                                send: function (i, r) {
                                    (t = y("<script>")
                                        .attr(e.scriptAttrs || {})
                                        .prop({ charset: e.scriptCharset, src: e.url })
                                        .on(
                                            "load error",
                                            (n = function (e) {
                                                t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                            })
                                        )),
                                        m.head.appendChild(t[0]);
                                },
                                abort: function () {
                                    n && n();
                                },
                            };
                    });
                var Ut,
                    Vt = [],
                    Ht = /(=)\?(?=&|$)|\?\?/;
                y.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function () {
                        var e = Vt.pop() || y.expando + "_" + yt.guid++;
                        return (this[e] = !0), e;
                    },
                }),
                    y.ajaxPrefilter("json jsonp", function (t, n, i) {
                        var r,
                            a,
                            o,
                            l = !1 !== t.jsonp && (Ht.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ht.test(t.data) && "data");
                        if (l || "jsonp" === t.dataTypes[0])
                            return (
                                (r = t.jsonpCallback = h(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                                l ? (t[l] = t[l].replace(Ht, "$1" + r)) : !1 !== t.jsonp && (t.url += (wt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                                (t.converters["script json"] = function () {
                                    return o || y.error(r + " was not called"), o[0];
                                }),
                                (t.dataTypes[0] = "json"),
                                (a = e[r]),
                                (e[r] = function () {
                                    o = arguments;
                                }),
                                i.always(function () {
                                    void 0 === a ? y(e).removeProp(r) : (e[r] = a), t[r] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(r)), o && h(a) && a(o[0]), (o = a = void 0);
                                }),
                                "script"
                            );
                    }),
                    (f.createHTMLDocument = (((Ut = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ut.childNodes.length)),
                    (y.parseHTML = function (e, t, n) {
                        return "string" != typeof e
                            ? []
                            : ("boolean" == typeof t && ((n = t), (t = !1)),
                              t || (f.createHTMLDocument ? (((i = (t = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href), t.head.appendChild(i)) : (t = m)),
                              (a = !n && []),
                              (r = T.exec(e)) ? [t.createElement(r[1])] : ((r = _e([e], t, a)), a && a.length && y(a).remove(), y.merge([], r.childNodes)));
                        var i, r, a;
                    }),
                    (y.fn.load = function (e, t, n) {
                        var i,
                            r,
                            a,
                            o = this,
                            l = e.indexOf(" ");
                        return (
                            l > -1 && ((i = ft(e.slice(l))), (e = e.slice(0, l))),
                            h(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                            o.length > 0 &&
                                y
                                    .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                                    .done(function (e) {
                                        (a = arguments), o.html(i ? y("<div>").append(y.parseHTML(e)).find(i) : e);
                                    })
                                    .always(
                                        n &&
                                            function (e, t) {
                                                o.each(function () {
                                                    n.apply(this, a || [e.responseText, t, e]);
                                                });
                                            }
                                    ),
                            this
                        );
                    }),
                    (y.expr.pseudos.animated = function (e) {
                        return y.grep(y.timers, function (t) {
                            return e === t.elem;
                        }).length;
                    }),
                    (y.offset = {
                        setOffset: function (e, t, n) {
                            var i,
                                r,
                                a,
                                o,
                                l,
                                s,
                                u = y.css(e, "position"),
                                c = y(e),
                                d = {};
                            "static" === u && (e.style.position = "relative"),
                                (l = c.offset()),
                                (a = y.css(e, "top")),
                                (s = y.css(e, "left")),
                                ("absolute" === u || "fixed" === u) && (a + s).indexOf("auto") > -1 ? ((o = (i = c.position()).top), (r = i.left)) : ((o = parseFloat(a) || 0), (r = parseFloat(s) || 0)),
                                h(t) && (t = t.call(e, n, y.extend({}, l))),
                                null != t.top && (d.top = t.top - l.top + o),
                                null != t.left && (d.left = t.left - l.left + r),
                                "using" in t ? t.using.call(e, d) : c.css(d);
                        },
                    }),
                    y.fn.extend({
                        offset: function (e) {
                            if (arguments.length)
                                return void 0 === e
                                    ? this
                                    : this.each(function (t) {
                                          y.offset.setOffset(this, e, t);
                                      });
                            var t,
                                n,
                                i = this[0];
                            return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                        },
                        position: function () {
                            if (this[0]) {
                                var e,
                                    t,
                                    n,
                                    i = this[0],
                                    r = { top: 0, left: 0 };
                                if ("fixed" === y.css(i, "position")) t = i.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === y.css(e, "position"); ) e = e.parentNode;
                                    e && e !== i && 1 === e.nodeType && (((r = y(e).offset()).top += y.css(e, "borderTopWidth", !0)), (r.left += y.css(e, "borderLeftWidth", !0)));
                                }
                                return { top: t.top - r.top - y.css(i, "marginTop", !0), left: t.left - r.left - y.css(i, "marginLeft", !0) };
                            }
                        },
                        offsetParent: function () {
                            return this.map(function () {
                                for (var e = this.offsetParent; e && "static" === y.css(e, "position"); ) e = e.offsetParent;
                                return e || ne;
                            });
                        },
                    }),
                    y.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                        var n = "pageYOffset" === t;
                        y.fn[e] = function (i) {
                            return q(
                                this,
                                function (e, i, r) {
                                    var a;
                                    if ((g(e) ? (a = e) : 9 === e.nodeType && (a = e.defaultView), void 0 === r)) return a ? a[t] : e[i];
                                    a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : (e[i] = r);
                                },
                                e,
                                i,
                                arguments.length
                            );
                        };
                    }),
                    y.each(["top", "left"], function (e, t) {
                        y.cssHooks[t] = qe(f.pixelPosition, function (e, n) {
                            if (n) return (n = Be(e, t)), Oe.test(n) ? y(e).position()[t] + "px" : n;
                        });
                    }),
                    y.each({ Height: "height", Width: "width" }, function (e, t) {
                        y.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                            y.fn[i] = function (r, a) {
                                var o = arguments.length && (n || "boolean" != typeof r),
                                    l = n || (!0 === r || !0 === a ? "margin" : "border");
                                return q(
                                    this,
                                    function (t, n, r) {
                                        var a;
                                        return g(t)
                                            ? 0 === i.indexOf("outer")
                                                ? t["inner" + e]
                                                : t.document.documentElement["client" + e]
                                            : 9 === t.nodeType
                                            ? ((a = t.documentElement), Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e]))
                                            : void 0 === r
                                            ? y.css(t, n, l)
                                            : y.style(t, n, r, l);
                                    },
                                    t,
                                    o ? r : void 0,
                                    o
                                );
                            };
                        });
                    }),
                    y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
                        y.fn[t] = function (e) {
                            return this.on(t, e);
                        };
                    }),
                    y.fn.extend({
                        bind: function (e, t, n) {
                            return this.on(e, null, t, n);
                        },
                        unbind: function (e, t) {
                            return this.off(e, null, t);
                        },
                        delegate: function (e, t, n, i) {
                            return this.on(t, e, n, i);
                        },
                        undelegate: function (e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                        },
                        hover: function (e, t) {
                            return this.mouseenter(e).mouseleave(t || e);
                        },
                    }),
                    y.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                        y.fn[t] = function (e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
                        };
                    });
                var Wt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                (y.proxy = function (e, t) {
                    var n, i, a;
                    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), h(e)))
                        return (
                            (i = r.call(arguments, 2)),
                            ((a = function () {
                                return e.apply(t || this, i.concat(r.call(arguments)));
                            }).guid = e.guid = e.guid || y.guid++),
                            a
                        );
                }),
                    (y.holdReady = function (e) {
                        e ? y.readyWait++ : y.ready(!0);
                    }),
                    (y.isArray = Array.isArray),
                    (y.parseJSON = JSON.parse),
                    (y.nodeName = z),
                    (y.isFunction = h),
                    (y.isWindow = g),
                    (y.camelCase = W),
                    (y.type = _),
                    (y.now = Date.now),
                    (y.isNumeric = function (e) {
                        var t = y.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                    }),
                    (y.trim = function (e) {
                        return null == e ? "" : (e + "").replace(Wt, "");
                    });
                var Kt = e.jQuery,
                    Gt = e.$;
                return (
                    (y.noConflict = function (t) {
                        return e.$ === y && (e.$ = Gt), t && e.jQuery === y && (e.jQuery = Kt), y;
                    }),
                    void 0 === t && (e.jQuery = e.$ = y),
                    y
                );
            });
        }),
        C = function () {
            var e;
            try {
                var t;
                return null != (e = window.console) && "function" == typeof e.log ? (t = e).log.apply(t, arguments) : void 0;
            } catch (e) {}
        },
        A = function () {
            var e;
            if (!(null != (e = window.console) ? e.debug : void 0)) return C.apply(void 0, ["Debug:"].concat(Array.prototype.slice.call(arguments)));
            try {
                var t;
                return (t = window.console).debug.apply(t, arguments);
            } catch (e) {}
        },
        z = function () {
            var e;
            if (!(null != (e = window.console) ? e.warn : void 0)) return C.apply(void 0, ["Warning:"].concat(Array.prototype.slice.call(arguments)));
            try {
                var t;
                return (t = window.console).warn.apply(t, arguments);
            } catch (e) {}
        },
        T = {},
        S = function (e) {
            if (null == T[e]) return (T[e] = !0), z(e);
        },
        j = function () {
            return "object" === ("undefined" == typeof window ? "undefined" : n(window));
        },
        D = Object.freeze({ __proto__: null, isWindowDefined: j });
    function F(e, t, n) {
        var i, r;
        if ("RequestThrottledError" === (null == e || null === (i = e.responseJSON) || void 0 === i || null === (r = i.error) || void 0 === r ? void 0 : r.error_code) && n.attempt < t.throttledAttempts) {
            var a = Number.parseFloat(e.getResponseHeader("retry-after"));
            return { shouldRetry: !0, retryTimeout: Number.isFinite(a) ? Math.ceil(1e3 * a) : 15e3 };
        }
        return -1 !== ["error", "timeout"].indexOf(e.statusText) && n.attempt < t.attempts ? { shouldRetry: !0, retryTimeout: Math.round(t.baseTimeout * Math.pow(t.factor, n.attempt)) } : { shouldRetry: !1 };
    }
    function E(e, n, i, r) {
        var a = ["baseTimeout", "attempts", "factor"].find(function (e) {
            return void 0 === i[e];
        });
        if (a) return z('Option key "'.concat(a, '" is missed in the retry config.')), e;
        (r = { attempt: r.attempt || 0, timeoutId: null, jqXHR: null }), (i = t({ baseTimeout: null, attempts: null, factor: null, onAttemptFail: null, debugUploads: !1 }, i));
        var o = (function (e, n, i, r) {
                return function () {
                    var a = k.Deferred();
                    function o() {
                        r.jqXHR = k
                            .ajax(n)
                            .retry(i, t(t({}, r), {}, { attempt: r.attempt + 1 }))
                            .done(a.resolve)
                            .fail(a.reject);
                    }
                    for (var l, s = F(e, i, r), u = s.shouldRetry, c = s.retryTimeout, d = arguments.length, p = new Array(d), f = 0; f < d; f++) p[f] = arguments[f];
                    u
                        ? (null === (l = i.onAttemptFail) || void 0 === l || l.call(i, { attempt: r.attempt }),
                          i.debugUploads && C("Attempt failed. Retry #".concat(r.attempt + 1, " in ").concat(c, "ms"), e),
                          (r.timeoutId = setTimeout(o, c)))
                        : "resolved" === e.state()
                        ? a.resolveWith(e, p)
                        : a.rejectWith(e, p);
                    return a;
                };
            })(e, n, i, r),
            l = e.then(o, o);
        return (
            (l.abort = function () {
                var t;
                clearTimeout(r.timeoutId);
                for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                e.abort.apply(e, i), null === (t = r.jqXHR) || void 0 === t || t.abort.apply(t, i);
            }),
            l
        );
    }
    j() &&
        k.ajaxPrefilter(function (e, t, n) {
            n.retry = function (t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return E(n, e, t, i);
            };
        }),
        j() &&
            window.XDomainRequest &&
            k.ajaxTransport(function (e) {
                var t;
                if (e.crossDomain && e.async)
                    return (
                        e.timeout && ((e.xdrTimeout = e.timeout), delete e.timeout),
                        {
                            send: function (n, i) {
                                function r(e, n, r, a) {
                                    (t.onload = t.onerror = t.ontimeout = function () {}), (t = void 0), i(e, n, r, a);
                                }
                                ((t = new XDomainRequest()).onload = function () {
                                    r(200, "OK", { text: t.responseText }, "Content-Type: " + t.contentType);
                                }),
                                    (t.onerror = function () {
                                        r(404, "Not Found");
                                    }),
                                    (t.onprogress = function () {}),
                                    (t.ontimeout = function () {
                                        r(0, "timeout");
                                    }),
                                    (t.timeout = e.xdrTimeout || Number.MAX_VALUE),
                                    t.open(e.type, e.url.replace(/^https?:/, "")),
                                    t.send((e.hasContent && e.data) || null);
                            },
                            abort: function () {
                                t && ((t.onerror = function () {}), t.abort());
                            },
                        }
                    );
            });
    var I = j() && !!(window.File && window.FileList && window.FileReader),
        P = j() && !(!window.FormData || !I),
        M =
            j() &&
            (function () {
                var e;
                return "draggable" in (e = document.createElement("div")) || ("ondragstart" in e && "ondrop" in e);
            })(),
        O =
            j() &&
            (function () {
                var e;
                return !(!(e = document.createElement("canvas")).getContext || !e.getContext("2d"));
            })(),
        L = I && M,
        N = null,
        R = j() && /^[^(]+\(iP(?:hone|od|ad);\s*(.+?)\)/.exec(navigator.userAgent);
    if (R) {
        var B = /OS (\d*)_(\d*)/.exec(R[1]);
        B && (N = +B[1] + B[2] / 10);
    }
    var q = j() && navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform),
        U = !1;
    try {
        j() && new window.Blob() && (U = window.Blob);
    } catch (e) {}
    var V = j() && (window.URL || window.webkitURL || !1),
        H = V && V.createObjectURL && V,
        W = j() && (null != window.FileReader ? window.FileReader.prototype.readAsArrayBuffer : void 0) && window.FileReader,
        K = [].indexOf,
        G = function (e) {
            var t, n, i, r;
            for (r = [], n = 0, i = e.length; n < i; n++) (t = e[n]), K.call(r, t) < 0 && r.push(t);
            return r;
        },
        X = function (e) {
            return setTimeout(e, 0);
        },
        Y = function (e, t) {
            for (var n; t; ) (n = e % t), (e = t), (t = n);
            return e;
        },
        $ = function (e) {
            var t, n;
            return (
                (t = !1),
                (n = null),
                function () {
                    return t || ((n = e.apply(this, arguments)), (t = !0)), n;
                }
            );
        },
        J = function (e) {
            return k.Deferred().resolve(e).promise();
        },
        Z = function (e, t, n, i) {
            var r, a;
            return (
                (a = k.Deferred()),
                (r = function (e, t) {
                    return e && t
                        ? function () {
                              return t.call(this, e.apply(this, arguments));
                          }
                        : e || t;
                }),
                e.then(r(t, a.resolve), r(n, a.reject), r(i, a.notify)),
                a.promise()
            );
        },
        Q = function (e, t) {
            var n;
            return (
                (n = {}),
                k.each(t, function (t, i) {
                    var r = e[i];
                    k.isFunction(r)
                        ? (n[i] = function () {
                              for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                              var o = r.apply(e, i);
                              return o === e ? n : o;
                          })
                        : (n[i] = r);
                }),
                n
            );
        },
        ee = function (e) {
            return e.replace(/([A-Z])/g, "_$1").toUpperCase();
        },
        te = function (e) {
            var t;
            return ((t = e.add).add = e.add), (t.remove = e.remove), t;
        },
        ne = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" === e ? t : (3 & t) | 8).toString(16);
            });
        },
        ie = /^(?:([^:/?#]+):)?(?:\/\/([^/?#]*))?([^?#]*)\??([^#]*)#?(.*)$/,
        re = /[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i,
        ae = new RegExp("".concat(re.source, "~[0-9]+"), "i"),
        oe = new RegExp("^/?(".concat(re.source, ")(?:/(-/(?:[^/]+/)+)?([^/]*))?$"), "i"),
        le = function (e) {
            return oe.exec(ie.exec(e)[3]);
        },
        se = function (e) {
            return e.replace(/[\\-\\[]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        },
        ue = function (e) {
            var t,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "i";
            return (t = k.map(e.split("*"), se)), new RegExp("^" + t.join(".+") + "$", n);
        },
        ce = function (e) {
            var t;
            return "http:" !== (t = document.location.protocol) && (t = "https:"), e.replace(/^\/\//, t + "//").replace(/\/+$/, "");
        },
        de = function (e, t) {
            if (e.length > t) {
                var n = Math.ceil((t - 3) / 2),
                    i = Math.floor((t - 3) / 2);
                return e.slice(0, n) + "..." + e.slice(-i);
            }
            return e;
        },
        pe = function (e, t, n) {
            var i, r;
            return e[0] > t[0] || e[1] > t[1] || n ? ((r = t[0] / e[0]), (i = t[1] / e[1]), !t[0] || (t[1] && r > i) ? [Math.round(i * e[0]), t[1]] : [t[0], Math.round(r * e[1])]) : e.slice();
        },
        fe = function (e, t, n, i) {
            var r, a, o, l, s, u, c;
            if (
                ((u = i.width),
                (a = i.height),
                (l = t.preferedSize),
                (o = ""),
                (c = u === n[0] && a === n[1]) || (o += "-/crop/".concat(u, "x").concat(a, "/").concat(i.left, ",").concat(i.top, "/")),
                (r = t.downscale && (u > l[0] || a > l[1])),
                (s = t.upscale && (u < l[0] || a < l[1])),
                r || s)
            ) {
                var d = v(l, 2);
                (i.sw = d[0]), (i.sh = d[1]), (o += "-/resize/".concat(l.join("x"), "/"));
            } else c || (o += "-/preview/");
            return ((e = k.extend({}, e)).cdnUrlModifiers = o), (e.cdnUrl = "".concat(e.originalUrl).concat(o || "")), (e.crop = i), e;
        },
        he = ["image/*", "image/heif", "image/heif-sequence", "image/heic", "image/heic-sequence", "image/avif", "image/avif-sequence", ".heif", ".heifs", ".heic", ".heics", ".avif", ".avifs"].join(","),
        ge = function (e, t, n) {
            var i, r, a;
            return (
                (r = null),
                "" === (i = t.inputAcceptTypes) && (i = t.imagesOnly ? he : null),
                (a = function () {
                    return (
                        (r = (t.multiple ? k('<input type="file" multiple>') : k('<input type="file">'))
                            .attr("accept", i)
                            .css({ position: "absolute", top: 0, opacity: 0, margin: 0, padding: 0, width: "auto", height: "auto", cursor: e.css("cursor") })
                            .on("change", function () {
                                return n(this), k(this).hide(), a();
                            })),
                        e.append(r)
                    );
                })(),
                e.css({ position: "relative", overflow: "hidden" }).mousemove(function (e) {
                    var t,
                        n,
                        i,
                        a = k(this).offset();
                    return (t = a.left), (n = a.top), (i = r.width()), r.css({ left: e.pageX - t - i + 10, top: e.pageY - n - 10 });
                })
            );
        },
        me = function (e, t, n) {
            var i,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return (
                "" === (i = t.inputAcceptTypes) && (i = t.imagesOnly ? he : null),
                k(t.multiple ? '<input type="file" multiple>' : '<input type="file">')
                    .attr("accept", i)
                    .attr(r)
                    .css({ position: "fixed", bottom: 0, opacity: 0 })
                    .on("change", function () {
                        return n(this), k(this).remove();
                    })
                    .appendTo(e)
                    .focus()
                    .click()
                    .hide()
            );
        },
        ve = "B KB MB GB TB PB EB ZB YB".split(" "),
        be = function (e) {
            var t,
                n,
                i,
                r,
                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            if (((e = parseInt(e, 10)), isNaN(e))) return a;
            for (t = 2, i = 0, r = 1e3 - 5 * Math.pow(10, 2 - Math.max(t, 3)); e > r && i < ve.length - 1; ) i++, (e /= 1024);
            return (e += 1e-15), (n = Math.max(0, t - Math.floor(e).toFixed(0).length)), (e = Number(e.toFixed(n))), "".concat(o).concat(e, " ").concat(ve[i]).concat(l);
        },
        _e = { dataType: "json", crossDomain: !0, cache: !1 },
        ye = function (e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                r = k
                    .ajax(k.extend({ url: e, type: t, data: n }, i, _e))
                    .retry(i.retryConfig)
                    .fail(function (t, n, i) {
                        var r = "".concat(n, " (").concat(i, ")");
                        z("JSONP unexpected error: ".concat(r, " while loading ").concat(e));
                    }),
                a = r.then(function (e) {
                    var t, n;
                    return e.error ? ("string" == typeof e.error ? ((t = e.error), (n = e.error_code)) : ((t = e.error.content), (n = e.error.error_code)), k.Deferred().reject({ message: t, code: n })) : e;
                });
            return (a.abort = r.abort.bind(r)), a;
        },
        we = function (e, t, n, i) {
            var r, a, o, l, s, u;
            if (window.HTMLCanvasElement.prototype.toBlob) return e.toBlob(i, t, n);
            for (o = (o = e.toDataURL(t, n)).split(","), a = window.atob(o[1]), r = new Uint8Array(a.length), l = s = 0, u = a.length; s < u; l = s += 1) r[l] = a.charCodeAt(l);
            return i(new window.Blob([r], { type: /:(.+\/.+);/.exec(o[0])[1] }));
        },
        xe = function (e) {
            var t, n, i;
            return (
                (i = 0),
                (t = []),
                (n = function () {
                    var e;
                    return t.length
                        ? ((e = t.shift()),
                          X(function () {
                              return e(n);
                          }))
                        : (i -= 1);
                }),
                function (r) {
                    return !e || i < e
                        ? ((i += 1),
                          X(function () {
                              return r(n);
                          }))
                        : t.push(r);
                }
            );
        },
        ke = [
            ["notify", "progress", 2],
            ["resolve", "done", 0],
            ["reject", "fail", 1],
        ],
        Ce = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return k
                .Deferred(function (t) {
                    return k.each(ke, function (i, r) {
                        var a;
                        return (
                            (a = k.isFunction(n[r[2]]) && n[r[2]]),
                            e[r[1]](function () {
                                var n;
                                return (n = a && a.apply(this, arguments)) && k.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this === e ? t.promise() : this, a ? [n] : arguments);
                            })
                        );
                    });
                })
                .promise();
        },
        Ae = function (e) {
            var n;
            return (
                (n = t({}, (n = e.metadataCallback ? e.metadataCallback() || {} : e.metadata || {}))),
                k.each(n, function (e, t) {
                    n[e] = String(t);
                }),
                n
            );
        },
        ze = 55,
        Te = 110,
        Se = 165,
        je = 255,
        De = "rgba("
            .concat(ze, ", ")
            .concat(Te, ", ")
            .concat(Se, ", ")
            .concat(je / 255, ")");
    function Fe(e, t) {
        try {
            var n = [e - 1, t - 1, 1, 1],
                i = document.createElement("canvas");
            (i.width = 1), (i.height = 1);
            var r = document.createElement("canvas");
            (r.width = e), (r.height = t);
            var a = i.getContext("2d"),
                o = r.getContext("2d");
            o && ((o.fillStyle = De), o.fillRect.apply(o, n), a.drawImage(r, e - 1, t - 1, 1, 1, 0, 0, 1, 1));
            var l = a && a.getImageData(0, 0, 1, 1).data,
                s = !1;
            return l && (s = l[0] === ze && l[1] === Te && l[2] === Se && l[3] === je), (r.width = r.height = 1), s;
        } catch (n) {
            return C("Failed to test for max canvas size of ".concat(e, "x").concat(t, "."), n), !1;
        }
    }
    function Ee(e, t) {
        var n = {};
        return function () {
            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
            var o = t(r, n);
            return o in n ? n[o] : (n[o] = e.apply(void 0, r));
        };
    }
    var Ie = { squareSide: [Math.floor(Math.sqrt(5e6)), 4096, 8192, 11180, 10836, 11402, 14188, 16384], dimension: [4096, 8192, 16384, 32767, 65535] },
        Pe = Ie.squareSide[Ie.squareSide.length - 1];
    function Me(e) {
        return function () {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            var r = k.Deferred();
            return (
                X(function () {
                    var t = e.apply(void 0, n);
                    r.resolve(t);
                }),
                r.promise()
            );
        };
    }
    function Oe(e, t) {
        for (
            var n = v(e, 1)[0],
                i = Object.keys(t)
                    .map(function (e) {
                        return parseInt(e, 10);
                    })
                    .sort(function (e, t) {
                        return e - t;
                    }),
                r = 0;
            r < i.length;
            r++
        ) {
            var a = i[r],
                o = !!t[a];
            if (a > n && o) return a;
            if (a < n && !o) return a;
        }
        return n;
    }
    var Le = Me(Ee(Fe, Oe)),
        Ne = Me(Ee(Fe, Oe));
    function Re(e, t) {
        var n = k.Deferred(),
            i = Ie.squareSide.find(function (n) {
                return n * n >= e * t;
            }),
            r = Ie.dimension.find(function (n) {
                return n >= e && n >= t;
            });
        if (!i || !r) return n.reject();
        var a = [Le(i, i), Ne(r, 1)];
        return (
            k.when.apply(k, a).done(function (e, t) {
                e && t ? n.resolve() : n.reject();
            }),
            n.promise()
        );
    }
    var Be,
        qe,
        Ue,
        Ve,
        He,
        We,
        Ke,
        Ge,
        Xe,
        Ye,
        $e,
        Je,
        Ze,
        Qe,
        et,
        tt,
        nt,
        it,
        rt,
        at,
        ot,
        lt,
        st,
        ut = [].indexOf;
    (He = {
        live: !0,
        manualStart: !1,
        locale: null,
        localePluralize: null,
        localeTranslations: null,
        systemDialog: !1,
        crop: !1,
        previewStep: !1,
        imagesOnly: !1,
        clearable: !1,
        multiple: !1,
        multipleMax: 1e3,
        multipleMin: 1,
        multipleMaxStrict: !1,
        imageShrink: !1,
        pathValue: !0,
        tabs: "file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive",
        preferredTypes: "",
        inputAcceptTypes: "",
        doNotStore: !1,
        publicKey: null,
        secureSignature: "",
        secureExpire: "",
        pusherKey: "79ae88bd931ea68464d9",
        cdnBase: "https://ucarecdn.com",
        urlBase: "https://upload.uploadcare.com",
        socialBase: "https://social.uploadcare.com",
        previewProxy: null,
        previewUrlCallback: null,
        remoteTabSessionKey: null,
        metadata: null,
        metadataCallback: null,
        imagePreviewMaxSize: 26214400,
        multipartMinSize: 10485760,
        multipartPartSize: 5242880,
        multipartMinLastPartSize: 1048576,
        multipartConcurrency: 4,
        multipartMaxAttempts: null,
        retryAttempts: 3,
        retryThrottledAttempts: 10,
        retryBaseTimeout: 1e3,
        retryFactor: 2,
        parallelDirectUploads: 10,
        passWindowOpen: !1,
        cameraMirrorDefault: !0,
        enableAudioRecording: !0,
        enableVideoRecording: !0,
        videoPreferredMimeTypes: null,
        audioBitsPerSecond: null,
        videoBitsPerSecond: null,
        scriptBase: "//ucarecdn.com/widget/".concat("3.21.0", "/uploadcare/"),
        debugUploads: !1,
        integration: "",
    }),
        (We = t({}, He)),
        (rt = { multipleMax: { from: 0, to: 1e3 } }),
        (Ue = { multipleMax: { min: 1, max: 1e3 } }),
        (et = { tabs: { all: "file camera url facebook gdrive gphotos dropbox instagram evernote flickr onedrive box vk huddle", default: He.tabs } }),
        (tt = j() && (document.currentScript || (st = document.getElementsByTagName("script"))[st.length - 1])),
        (Xe = j() && k(tt).data("integration")) && null != Xe && (He = k.extend(He, { integration: Xe })),
        (nt = function (e) {
            return k.isArray(e) || (e = (e = k.trim(e)) ? e.split(" ") : []), e;
        }),
        (Be = function (e, t) {
            var n,
                i,
                r,
                a,
                o,
                l,
                s,
                u,
                c = Object.prototype.hasOwnProperty;
            for (n = 0, o = t.length; n < o; n++) {
                if (((a = t[n]), (u = s = nt(e[a])), c.apply(et, [a]))) for (u = [], r = 0, l = s.length; r < l; r++) (i = s[r]), c.apply(et[a], [i]) ? (u = u.concat(nt(et[a][i]))) : u.push(i);
                e[a] = G(u);
            }
            return e;
        }),
        (at = function (e, t) {
            var n, i, r;
            for (n = 0, r = t.length; n < r; n++) null != e[(i = t[n])] && (e[i] = ce(e[i]));
            return e;
        }),
        (Ke = function (e, t) {
            var n, i, r, a;
            for (n = 0, r = t.length; n < r; n++) null != e[(i = t[n])] && ("string" == typeof (a = e[i]) ? ((a = k.trim(a).toLowerCase()), (e[i] = !("false" === a || "disabled" === a))) : (e[i] = !!a));
            return e;
        }),
        (Ge = function (e, t) {
            var n, i, r;
            for (n = 0, r = t.length; n < r; n++) null != e[(i = t[n])] && (e[i] = parseInt(e[i]));
            return e;
        }),
        (Ye = function (e) {
            return (
                (e._userAgent = "UploadcareWidget/"
                    .concat("3.21.0", "/")
                    .concat(e.publicKey, " (JavaScript")
                    .concat(e.integration ? "; ".concat(e.integration) : "", ")")),
                e
            );
        }),
        ($e = function (e) {
            e.retryAttempts === We.retryAttempts && null !== e.multipartMaxAttempts && (e.retryAttempts = e.multipartMaxAttempts),
                (e.retryConfig = { baseTimeout: e.retryBaseTimeout, factor: e.retryFactor, attempts: e.retryAttempts, debugUploads: e.debugUploads, throttledAttempts: e.retryThrottledAttempts });
        }),
        (it = function (e, t) {
            var n, i;
            for (n in t) (i = t[n]), null != e[n] && e[n] === i.from && (e[n] = i.to);
            return e;
        }),
        (qe = function (e, t) {
            var n, i, r;
            for (n in t) {
                var a = t[n];
                (r = a.min), (i = a.max), null != e[n] && (e[n] = Math.min(Math.max(e[n], r), i));
            }
            return e;
        }),
        (ot = function (e, t) {
            for (var i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                e[a] && "function" != typeof e[a] && S('Option "'.concat(a, '" is expected to be a function. Instead got: ').concat(n(e[a])));
            }
        }),
        (lt = function (e, t) {
            for (var i = 0, r = t.length; i < r; i++) {
                var a = t[i];
                e[a] && ((o = e[a]), "[object Object]" !== Object.prototype.toString.call(o)) && S('Option "'.concat(a, '" is expected to be an object. Instead got: ').concat(n(e[a])));
            }
            var o;
        }),
        (Ze = function (e) {
            var t;
            return { downscale: "x" === (t = /^([0-9]+)([x:])([0-9]+)\s*(|upscale|minimum)$/i.exec(k.trim(e.toLowerCase())) || [])[2], upscale: !!t[4], notLess: "minimum" === t[4], preferedSize: t.length ? [+t[1], +t[3]] : void 0 };
        }),
        (Qe = function (e) {
            var t = /^([0-9]+)x([0-9]+)(?:\s+(\d{1,2}|100)%)?$/i.exec(k.trim(e.toLowerCase())) || [];
            if (!t.length) return !1;
            var n = t[1] * t[2],
                i = Pe * Pe;
            return n > i
                ? (S("Shrinked size can not be larger than ".concat(Math.floor(i / 1e3 / 1e3), "MP. ") + "You have set ".concat(t[1], "x").concat(t[2], " (") + "".concat(Math.ceil(n / 1e3 / 100) / 10, "MP).")), !1)
                : { quality: t[3] ? t[3] / 100 : void 0, size: n };
        }),
        (Ve = function (e, t) {
            var n, i, r, a;
            return this.previewProxy
                ? ((i = (r = !/\?/.test(this.previewProxy)) || !/=$/.test(this.previewProxy)),
                  (n = !r && !/[&?=]$/.test(this.previewProxy)),
                  (a = encodeURIComponent(e)),
                  i && (a = "url=" + a),
                  n && (a = "&" + a),
                  r && (a = "?" + a),
                  this.previewProxy + a)
                : e;
        }),
        (Je = function (e) {
            Be(e, ["tabs", "preferredTypes", "videoPreferredMimeTypes"]),
                at(e, ["cdnBase", "socialBase", "urlBase", "scriptBase"]),
                Ke(e, ["doNotStore", "imagesOnly", "multiple", "clearable", "pathValue", "previewStep", "systemDialog", "debugUploads", "multipleMaxStrict", "cameraMirrorDefault"]),
                Ge(e, [
                    "multipleMax",
                    "multipleMin",
                    "multipartMinSize",
                    "multipartPartSize",
                    "multipartMinLastPartSize",
                    "multipartConcurrency",
                    "multipartMaxAttempts",
                    "retryAttempts",
                    "retryThrottledAttempts",
                    "retryBaseTimeout",
                    "retryFactor",
                    "parallelDirectUploads",
                ]),
                ot(e, ["previewUrlCallback", "metadataCallback"]),
                lt(e, ["metadata"]),
                it(e, rt),
                qe(e, Ue),
                Ye(e),
                $e(e),
                !1 === e.crop || k.isArray(e.crop) || (/^(disabled?|false|null)$/i.test(e.crop) ? (e.crop = !1) : k.isPlainObject(e.crop) ? (e.crop = [e.crop]) : (e.crop = k.map(("" + e.crop).split(","), Ze))),
                e.imageShrink && !k.isPlainObject(e.imageShrink) && (e.imageShrink = Qe(e.imageShrink)),
                (e.crop || e.multiple) && (e.previewStep = !0),
                P || (e.systemDialog = !1),
                e.validators && (e.validators = e.validators.slice()),
                e.previewProxy && !e.previewUrlCallback && (e.previewUrlCallback = Ve);
            var t = e.tabs.indexOf("skydrive");
            return -1 !== t && (e.tabs[t] = "onedrive"), e;
        });
    var ct,
        dt = function () {
            var e, t, n;
            for (e in ((t = {}), He)) null != (n = window["UPLOADCARE_".concat(ee(e))]) && (t[e] = n);
            return t;
        },
        pt = $(function (e, t) {
            var n;
            return t || (He = k.extend(He, dt())), (n = Je(k.extend(He, e || {}))), ht.fire(n), n;
        }),
        ft = function (e) {
            var t;
            return (t = k.extend({}, pt())), k.isEmptyObject(e) || (t = Je(k.extend(t, e))), t;
        },
        ht = j() && k.Callbacks("once memory"),
        gt = (function () {
            function e() {
                r(this, e), (this.urls = []), (this.styles = []);
            }
            return (
                o(e, [
                    {
                        key: "addUrl",
                        value: function (e) {
                            if (!/^https?:\/\//i.test(e)) throw new Error("Embedded urls should be absolute. " + e);
                            if (!(ut.call(this.urls, e) >= 0)) return this.urls.push(e);
                        },
                    },
                    {
                        key: "addStyle",
                        value: function (e) {
                            return this.styles.push(e);
                        },
                    },
                ]),
                e
            );
        })(),
        mt = function (e, t) {
            var n;
            return (
                (n = k.Deferred()),
                t && (e.src = t),
                e.complete
                    ? n.resolve(e)
                    : (k(e).one("load", function () {
                          return n.resolve(e);
                      }),
                      k(e).one("error", function () {
                          return n.reject(e);
                      })),
                n.promise()
            );
        },
        vt = function e(t) {
            return k.isArray(t) ? k.when.apply(null, k.map(t, e)) : t.src ? mt(t) : mt(new window.Image(), t);
        },
        bt = function (e) {
            var t = k.Deferred();
            return k("<video></video>").on("loadeddata", t.resolve).on("error", t.reject).attr("src", e).get(0).load(), t.promise();
        },
        _t = function () {
            var e = k.Deferred();
            if (void 0 !== ct) e.resolve(ct);
            else {
                var t = new window.Image();
                (t.onload = function () {
                    (ct = t.naturalWidth < t.naturalHeight), (t.src = "//:0"), e.resolve(ct);
                }),
                    (t.src =
                        "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4QA6RXhpZgAATU0AKgAAAAgAAwESAAMAAAABAAYAAAEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////wAALCAABAAIBASIA/8QAJgABAAAAAAAAAAAAAAAAAAAAAxABAAAAAAAAAAAAAAAAAAAAAP/aAAgBAQAAPwBH/9k=");
            }
            return e.promise();
        },
        yt = function (e, t, n) {
            var i = k.Deferred();
            return (
                X(function () {
                    try {
                        var r = document.createElement("canvas"),
                            a = r.getContext("2d");
                        (r.width = t), (r.height = n), (a.imageSmoothingQuality = "high"), a.drawImage(e, 0, 0, t, n), (e.src = "//:0"), (e.width = e.height = 1), i.resolve(r);
                    } catch (e) {
                        C("Failed to shrink image to size ".concat(t, "x").concat(n, "."), e), i.reject(e);
                    }
                }),
                i.promise()
            );
        },
        wt = function (e, t, n, i, r) {
            var a = (function (e, t, n, i) {
                    var r = [],
                        a = t,
                        o = n;
                    do {
                        r.push([a, o]), (a = Math.round(a / i)), (o = Math.round(o / i));
                    } while (a < e * i);
                    return r.reverse();
                })(t, n, i, r),
                o = k.Deferred(),
                l = k.Deferred();
            l.resolve(e);
            var s,
                u = (function (e, t) {
                    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = _(e)) || (t && e && "number" == typeof e.length)) {
                            n && (e = n);
                            var i = 0,
                                r = function () {};
                            return {
                                s: r,
                                n: function () {
                                    return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: r,
                            };
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    var a,
                        o = !0,
                        l = !1;
                    return {
                        s: function () {
                            n = n.call(e);
                        },
                        n: function () {
                            var e = n.next();
                            return (o = e.done), e;
                        },
                        e: function (e) {
                            (l = !0), (a = e);
                        },
                        f: function () {
                            try {
                                o || null == n.return || n.return();
                            } finally {
                                if (l) throw a;
                            }
                        },
                    };
                })(a);
            try {
                var c = function () {
                    var e = v(s.value, 2),
                        i = e[0],
                        r = e[1];
                    l = l
                        .then(function (e) {
                            var t = k.Deferred();
                            return (
                                Re(i, r)
                                    .then(function () {
                                        return t.resolve(e, !1);
                                    })
                                    .fail(function () {
                                        return t.resolve(e, !0);
                                    }),
                                t.promise()
                            );
                        })
                        .then(function (e, t) {
                            return t ? e : yt(e, i, r);
                        })
                        .then(function (e) {
                            return o.notify((t - i) / (t - n)), e;
                        });
                };
                for (u.s(); !(s = u.n()).done; ) c();
            } catch (e) {
                u.e(e);
            } finally {
                u.f();
            }
            return (
                l.done(function (e) {
                    o.resolve(e);
                }),
                l.fail(function (e) {
                    o.reject(e);
                }),
                o.promise()
            );
        },
        xt = function (e, t) {
            var n = k.Deferred();
            if (0.71 * e.width * e.height * 0.71 < t.size) return n.reject("not required");
            var i = e.width,
                r = e.height,
                a = i / r,
                o = Math.floor(Math.sqrt(t.size * a)),
                l = Math.floor(t.size / Math.sqrt(t.size * a));
            return (
                Re(o, l)
                    .fail(function () {
                        n.reject("not supported");
                    })
                    .then(function () {
                        ("imageSmoothingQuality" in document.createElement("canvas").getContext("2d") && !N && !q
                            ? (function (e, t, n) {
                                  return yt(e, t, n);
                              })(e, o, l)
                            : wt(e, i, o, l, 0.71)
                        )
                            .done(function (e) {
                                return n.resolve(e);
                            })
                            .progress(function (e) {
                                return n.notify(e);
                            })
                            .fail(function () {
                                return n.reject("not supported");
                            });
                    }),
                n.promise()
            );
        },
        kt = j() && window.DataView,
        Ct = xe(1),
        At = function (e, t) {
            var n = k.Deferred();
            return H && kt && U
                ? (Ct(function (i) {
                      n.always(i),
                          Pt(e)
                              .then(function (e) {
                                  if (e) return n.reject("skipped"), k.Deferred().reject();
                              })
                              .then(function () {
                                  return It(e).fail(function () {
                                      n.reject("not image");
                                  });
                              })
                              .done(function (i) {
                                  n.notify(0.1);
                                  var r = k.when(jt(e), _t(), Dt(e)).always(function (e, a, o) {
                                      n.notify(0.2);
                                      var l = "resolved" === r.state(),
                                          s = xt(i, t);
                                      s.progress(function (e) {
                                          return n.notify(0.2 + 0.6 * e);
                                      }),
                                          s.fail(n.reject),
                                          s.done(function (i) {
                                              var r = "image/jpeg",
                                                  s = t.quality || 0.8;
                                              !l && Nt(i) && ((r = "image/png"), (s = void 0)),
                                                  we(i, r, s, function (t) {
                                                      (i.width = i.height = 1), n.notify(0.9);
                                                      var r = k.Deferred().resolve(t);
                                                      e &&
                                                          (r = r
                                                              .then(function (t) {
                                                                  return Ft(t, e, a);
                                                              })
                                                              .catch(function () {
                                                                  return t;
                                                              })),
                                                          (null == o ? void 0 : o.length) > 0 &&
                                                              (r = r
                                                                  .then(function (e) {
                                                                      return Et(e, o);
                                                                  })
                                                                  .catch(function () {
                                                                      return t;
                                                                  })),
                                                          r.done(n.resolve),
                                                          r.fail(function () {
                                                              return n.resolve(t);
                                                          });
                                                  });
                                          });
                                  });
                              });
                  }),
                  n.promise())
                : n.reject("support");
        },
        zt = function (e, t, n, i, r) {
            var a, o;
            return (
                (a = k.Deferred()),
                H
                    ? ((o = vt(H.createObjectURL(e))).always(function (e) {
                          return H.revokeObjectURL(e.src);
                      }),
                      o.fail(function () {
                          return a.reject("not image");
                      }),
                      o.done(function (o) {
                          return (
                              a.always(function () {
                                  o.src = "//:0";
                              }),
                              r && o.width * o.height > r
                                  ? a.reject("max source")
                                  : k.when(jt(e), _t()).always(function (e, r) {
                                        var l = r ? 1 : Ot(e) || 1,
                                            s = l > 4,
                                            u = s ? [o.height, o.width] : [o.width, o.height],
                                            c = v(pe(u, [t, n]), 2),
                                            d = c[0],
                                            p = c[1],
                                            f = [
                                                [1, 0, 0, 1, 0, 0],
                                                [-1, 0, 0, 1, d, 0],
                                                [-1, 0, 0, -1, d, p],
                                                [1, 0, 0, -1, 0, p],
                                                [0, 1, 1, 0, 0, 0],
                                                [0, 1, -1, 0, d, 0],
                                                [0, -1, -1, 0, d, p],
                                                [0, -1, 1, 0, 0, p],
                                            ][l - 1];
                                        if (!f) return a.reject("bad image");
                                        var h = document.createElement("canvas");
                                        (h.width = d), (h.height = p);
                                        var g = h.getContext("2d");
                                        if ((g.transform.apply(g, f), s)) {
                                            var m = [p, d];
                                            (d = m[0]), (p = m[1]);
                                        }
                                        return i && ((g.fillStyle = i), g.fillRect(0, 0, d, p)), g.drawImage(o, 0, 0, d, p), a.resolve(h, u);
                                    })
                          );
                      }),
                      a.promise())
                    : a.reject("support")
            );
        },
        Tt = function (e) {
            var t, n, i, r, a;
            return (
                (a = function (e, n) {
                    var i;
                    return (
                        ((i = new W()).onload = function () {
                            return n(new kt(i.result));
                        }),
                        (i.onerror = function (e) {
                            return t.reject("reader", e);
                        }),
                        i.readAsArrayBuffer(e)
                    );
                }),
                (i = function () {
                    return a(e.slice(n, n + 128), function (e) {
                        var t, i, a;
                        for (t = i = 0, a = e.byteLength; a >= 0 ? i < a : i > a; t = a >= 0 ? ++i : --i)
                            if (255 === e.getUint8(t)) {
                                n += t;
                                break;
                            }
                        return r();
                    });
                }),
                (r = function () {
                    var r;
                    return (
                        (r = n),
                        a(e.slice(n, (n += 4)), function (o) {
                            var l, s;
                            return 4 !== o.byteLength || 255 !== o.getUint8(0)
                                ? t.reject("corrupted")
                                : 218 === (s = o.getUint8(1))
                                ? t.resolve()
                                : ((l = o.getUint16(2) - 2),
                                  a(e.slice(n, (n += l)), function (e) {
                                      return e.byteLength !== l ? t.reject("corrupted") : (t.notify(r, l, s, e), i());
                                  }));
                        })
                    );
                }),
                (t = k.Deferred()),
                W && kt
                    ? ((n = 2),
                      a(e.slice(0, 2), function (e) {
                          return 65496 !== e.getUint16(0) ? t.reject("not jpeg") : i();
                      }),
                      t.promise())
                    : t.reject("support")
            );
        },
        St = function (e, t, n) {
            var i, r, a, o;
            return (
                (i = k.Deferred()),
                (a = []),
                (r = []),
                (o = Tt(e)).fail(i.reject),
                o.progress(function (e, n, i) {
                    if (i === t) return a.push(e), r.push(n);
                }),
                o.done(function () {
                    var o, l, s, u, c, d, p, f, h;
                    for (p = [e.slice(0, 2)], u = 0, d = n.length; u < d; u++) (o = n[u]), (s = new kt(new ArrayBuffer(4))).setUint16(0, 65280 + t), s.setUint16(2, o.byteLength + 2), p.push(s.buffer), p.push(o);
                    for (f = 2, l = c = 0, h = a.length; h >= 0 ? c < h : c > h; l = h >= 0 ? ++c : --c) a[l] > f && p.push(e.slice(f, a[l])), (f = a[l] + r[l] + 4);
                    return p.push(e.slice(f, e.size)), i.resolve(new U(p, { type: e.type }));
                }),
                i.promise()
            );
        },
        jt = function (e) {
            var t = null,
                n = Tt(e);
            return (
                n.progress(function (e, n, i, r) {
                    if (!t && 225 === i && r.byteLength >= 14 && 1165519206 === r.getUint32(0) && 0 === r.getUint16(4)) return (t = r);
                }),
                n.then(
                    function () {
                        return t;
                    },
                    function () {
                        return k.Deferred().reject(t);
                    }
                )
            );
        },
        Dt = function (e) {
            var t = [],
                n = Tt(e);
            return (
                n.progress(function (e, n, i, r) {
                    226 === i && 1229144927 === r.getUint32(0) && 1347571526 === r.getUint32(4) && 1229735168 === r.getUint32(8) && t.push(r);
                }),
                n.then(
                    function () {
                        return t;
                    },
                    function () {
                        return k.Deferred().reject(t);
                    }
                )
            );
        },
        Ft = function (e, t, n) {
            return n && Mt(t, 1), St(e, 225, [t.buffer]);
        },
        Et = function (e, t) {
            return St(
                e,
                226,
                t.map(function (e) {
                    return e.buffer;
                })
            );
        },
        It = function (e) {
            var t = k.Deferred();
            return (
                Et(e, [])
                    .catch(function () {
                        return e;
                    })
                    .then(function (e) {
                        var n = vt(H.createObjectURL(e));
                        n.always(function (e) {
                            H.revokeObjectURL(e.src);
                        }),
                            n.fail(function () {
                                t.reject();
                            }),
                            n.done(function (e) {
                                t.resolve(e);
                            });
                    })
                    .fail(function () {
                        t.reject();
                    }),
                t.promise()
            );
        },
        Pt = function (e) {
            var t = [1, 3],
                n = [192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207],
                i = !1,
                r = Tt(e);
            return (
                r.progress(function (e, r, a, o) {
                    if (!i && n.indexOf(a) >= 0) {
                        var l = o.getUint8(5);
                        t.indexOf(l) < 0 && (i = !0);
                    }
                }),
                r
                    .then(function () {
                        return i;
                    })
                    .catch(function () {
                        return i;
                    })
            );
        },
        Mt = function (e, t) {
            Lt(e, function (n, i) {
                return e.setUint16(n, t, i);
            });
        },
        Ot = function (e) {
            return Lt(e, function (t, n) {
                return e.getUint16(t, n);
            });
        },
        Lt = function (e, t) {
            var n, i, r, a;
            if (!e || e.byteLength < 14 || 1165519206 !== e.getUint32(0) || 0 !== e.getUint16(4)) return null;
            if (18761 === e.getUint16(6)) i = !0;
            else {
                if (19789 !== e.getUint16(6)) return null;
                i = !1;
            }
            if (42 !== e.getUint16(8, i)) return null;
            for (r = 8 + e.getUint32(10, i), n = 0, a = e.getUint16(r - 2, i); a >= 0 ? n < a : n > a; a >= 0 ? ++n : --n) {
                if (e.byteLength < r + 10) return null;
                if (274 === e.getUint16(r, i)) return t(r + 8, i);
                r += 12;
            }
            return null;
        },
        Nt = function (e) {
            var t, n, i, r, a, o;
            for (
                50, (t = document.createElement("canvas")).width = t.height = 50, (n = t.getContext("2d")).drawImage(e, 0, 0, 50, 50), i = n.getImageData(0, 0, 50, 50).data, t.width = t.height = 1, r = a = 3, o = i.length;
                a < o;
                r = a += 4
            )
                if (i[r] < 254) return !0;
            return !1;
        },
        Rt = (function () {
            function e(t, n) {
                var i,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r(this, e),
                    (this.settings = n),
                    (this.sourceInfo = a),
                    (this.fileId = null),
                    (this.fileName = null),
                    (this.sanitizedName = null),
                    (this.fileSize = null),
                    (this.isStored = null),
                    (this.cdnUrlModifiers = null),
                    (this.isImage = null),
                    (this.imageInfo = null),
                    (this.videoInfo = null),
                    (this.contentInfo = null),
                    (this.mimeType = null),
                    (this.s3Bucket = null),
                    (this.metadata = null),
                    (i = this.sourceInfo).source || (i.source = this.sourceName),
                    this.__setupValidation(),
                    this.__initApi();
            }
            return (
                o(e, [
                    {
                        key: "__startUpload",
                        value: function () {
                            return k.Deferred().resolve();
                        },
                    },
                    {
                        key: "__completeUpload",
                        value: function () {
                            var e,
                                t,
                                n,
                                i,
                                r = this;
                            return (
                                (n = 0),
                                this.settings.debugUploads &&
                                    (A("Load file info.", this.fileId, this.settings.publicKey),
                                    (t = setInterval(function () {
                                        return A("Still waiting for file ready.", n, r.fileId, r.settings.publicKey);
                                    }, 5e3)),
                                    this.apiDeferred
                                        .done(function () {
                                            return A("File uploaded.", n, r.fileId, r.settings.publicKey);
                                        })
                                        .always(function () {
                                            return clearInterval(t);
                                        })),
                                (i = 100),
                                (e = function () {
                                    if ("pending" === r.apiDeferred.state())
                                        return (
                                            (n += 1),
                                            r.__updateInfo().done(function () {
                                                return setTimeout(e, i), (i += 50);
                                            })
                                        );
                                })()
                            );
                        },
                    },
                    {
                        key: "__updateInfo",
                        value: function () {
                            var e = this;
                            return ye(
                                "".concat(this.settings.urlBase, "/info/"),
                                "GET",
                                { jsonerrors: 1, file_id: this.fileId, pub_key: this.settings.publicKey, wait_is_ready: +(null === this.isImage) },
                                { headers: { "X-UC-User-Agent": this.settings._userAgent }, retryConfig: this.settings.retryConfig }
                            )
                                .fail(function (t) {
                                    return e.settings.debugUploads && C("Can't load file info. Probably removed.", e.fileId, e.settings.publicKey, t.message), e.__rejectApi("info", t);
                                })
                                .done(this.__handleFileData.bind(this));
                        },
                    },
                    {
                        key: "__handleFileData",
                        value: function (e) {
                            if (
                                ((this.fileName = e.original_filename),
                                (this.sanitizedName = e.filename),
                                (this.fileSize = e.size),
                                (this.isImage = e.is_image),
                                (this.imageInfo = e.image_info),
                                (this.videoInfo = e.video_info),
                                (this.contentInfo = e.content_info),
                                (this.mimeType = e.mime_type),
                                (this.isStored = e.is_stored),
                                (this.s3Bucket = e.s3_bucket),
                                (this.metadata = e.metadata),
                                e.default_effects && (this.cdnUrlModifiers = "-/" + e.default_effects),
                                this.s3Bucket && this.cdnUrlModifiers && this.__rejectApi("baddata"),
                                this.__runValidators(),
                                e.is_ready)
                            )
                                return this.__resolveApi();
                        },
                    },
                    {
                        key: "__progressInfo",
                        value: function () {
                            var e;
                            return { state: this.__progressState, uploadProgress: this.__progress, progress: "ready" === (e = this.__progressState) || "error" === e ? 1 : 0.9 * this.__progress, incompleteFileInfo: this.__fileInfo() };
                        },
                    },
                    {
                        key: "__fileInfo",
                        value: function () {
                            var e;
                            return (
                                (e = this.s3Bucket ? "https://".concat(this.s3Bucket, ".s3.amazonaws.com/").concat(this.fileId, "/").concat(this.sanitizedName) : "".concat(this.settings.cdnBase, "/").concat(this.fileId, "/")),
                                {
                                    uuid: this.fileId,
                                    name: this.fileName,
                                    size: this.fileSize,
                                    isStored: this.isStored,
                                    isImage: !this.s3Bucket && this.isImage,
                                    originalImageInfo: this.imageInfo,
                                    originalVideoInfo: this.videoInfo,
                                    originalContentInfo: this.contentInfo,
                                    mimeType: this.mimeType,
                                    originalUrl: this.fileId ? e : null,
                                    cdnUrl: this.fileId ? "".concat(e).concat(this.cdnUrlModifiers || "") : null,
                                    cdnUrlModifiers: this.cdnUrlModifiers,
                                    sourceInfo: this.sourceInfo,
                                    metadata: this.metadata,
                                }
                            );
                        },
                    },
                    {
                        key: "__setupValidation",
                        value: function () {
                            if (((this.validators = this.settings.validators || this.settings.__validators || []), this.settings.imagesOnly))
                                return this.validators.push(function (e) {
                                    if (!1 === e.isImage) throw new Error("image");
                                });
                        },
                    },
                    {
                        key: "__runValidators",
                        value: function () {
                            var e, t, n, i, r, a, o;
                            n = this.__fileInfo();
                            try {
                                for (r = this.validators, a = [], t = 0, i = r.length; t < i; t++) (o = r[t]), a.push(o(n));
                                return a;
                            } catch (t) {
                                return (e = t), this.__rejectApi(e.message);
                            }
                        },
                    },
                    {
                        key: "__initApi",
                        value: function () {
                            return (this.apiDeferred = k.Deferred()), (this.__progressState = "uploading"), (this.__progress = 0), this.__notifyApi();
                        },
                    },
                    {
                        key: "__notifyApi",
                        value: function () {
                            return this.apiDeferred.notify(this.__progressInfo());
                        },
                    },
                    {
                        key: "__rejectApi",
                        value: function (e, t) {
                            return (this.__progressState = "error"), this.__notifyApi(), this.apiDeferred.reject(e, this.__fileInfo(), t);
                        },
                    },
                    {
                        key: "__resolveApi",
                        value: function () {
                            return (this.__progressState = "ready"), this.__notifyApi(), this.apiDeferred.resolve(this.__fileInfo());
                        },
                    },
                    {
                        key: "__cancel",
                        value: function () {
                            return this.__rejectApi("user");
                        },
                    },
                    {
                        key: "__extendApi",
                        value: function (e) {
                            var t = this;
                            return (
                                (e.cancel = this.__cancel.bind(this)),
                                (e.pipe = e.then = function () {
                                    for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                                    return t.__extendApi(Ce.apply(void 0, [e].concat(i)));
                                }),
                                e
                            );
                        },
                    },
                    {
                        key: "promise",
                        value: function () {
                            var e,
                                t = this;
                            return (
                                this.__apiPromise ||
                                    ((this.__apiPromise = this.__extendApi(this.apiDeferred.promise())),
                                    this.__runValidators(),
                                    "pending" === this.apiDeferred.state() &&
                                        ((e = this.__startUpload()).done(function () {
                                            return (t.__progressState = "uploaded"), (t.__progress = 1), t.__notifyApi(), t.__completeUpload();
                                        }),
                                        e.progress(function (e) {
                                            if (e > t.__progress) return (t.__progress = e), t.__notifyApi();
                                        }),
                                        e.fail(function (e) {
                                            return t.__rejectApi("upload", e);
                                        }),
                                        this.apiDeferred.always(e.reject))),
                                this.__apiPromise
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        Bt = null,
        qt = (function (e) {
            u(i, e);
            var n = h(i);
            function i(e) {
                var t;
                return r(this, i), ((t = n.apply(this, arguments)).__file = e), (t.fileName = t.__file.name || "original"), t.__notifyApi(), t;
            }
            return (
                o(i, [
                    {
                        key: "setFile",
                        value: function (e) {
                            if ((e && (this.__file = e), (this.sourceInfo.file = this.__file), this.__file))
                                return (
                                    (this.fileSize = this.__file.size),
                                    (this.fileType = this.__file.type || "application/octet-stream"),
                                    this.settings.debugUploads && A("Use local file.", this.fileName, this.fileType, this.fileSize),
                                    this.__runValidators(),
                                    this.__notifyApi()
                                );
                        },
                    },
                    {
                        key: "__startUpload",
                        value: function () {
                            var e,
                                t,
                                n,
                                i = this;
                            return (
                                this.apiDeferred.always(function () {
                                    return (i.__file = null), i.__file;
                                }),
                                this.__file.size >= this.settings.multipartMinSize && U
                                    ? (this.setFile(), this.multipartUpload())
                                    : ((t = N),
                                      !this.settings.imageShrink || (t && t < 8)
                                          ? (this.setFile(), this.directUpload())
                                          : ((e = k.Deferred()),
                                            (n = 0.4),
                                            At(this.__file, this.settings.imageShrink)
                                                .progress(function (t) {
                                                    return e.notify(t * n);
                                                })
                                                .done(this.setFile.bind(this))
                                                .fail(function () {
                                                    return i.setFile(), (n *= 0.1);
                                                })
                                                .always(function () {
                                                    return (
                                                        e.notify(n),
                                                        i
                                                            .directUpload()
                                                            .done(e.resolve)
                                                            .fail(e.reject)
                                                            .progress(function (t) {
                                                                return e.notify(n + t * (1 - n));
                                                            })
                                                    );
                                                }),
                                            e))
                            );
                        },
                    },
                    {
                        key: "__autoAbort",
                        value: function (e) {
                            return (
                                this.apiDeferred.fail(function () {
                                    return e.abort();
                                }),
                                e
                            );
                        },
                    },
                    {
                        key: "directRunner",
                        value: function (e) {
                            return Bt || (Bt = xe(this.settings.parallelDirectUploads)), Bt(e);
                        },
                    },
                    {
                        key: "directUpload",
                        value: function () {
                            var e,
                                t = this;
                            return (
                                (e = k.Deferred()),
                                this.__file
                                    ? this.fileSize > 104857600
                                        ? (this.__rejectApi("size"), e)
                                        : (this.directRunner(function (n) {
                                              if ((e.always(n), "pending" === t.apiDeferred.state())) {
                                                  var i = new window.FormData();
                                                  return (
                                                      i.append("UPLOADCARE_PUB_KEY", t.settings.publicKey),
                                                      i.append("signature", t.settings.secureSignature),
                                                      i.append("expire", t.settings.secureExpire),
                                                      i.append("UPLOADCARE_STORE", t.settings.doNotStore ? "" : "auto"),
                                                      i.append("file", t.__file, t.fileName),
                                                      i.append("file_name", t.fileName),
                                                      i.append("source", t.sourceInfo.source),
                                                      k.each(Ae(t.settings), function (e, t) {
                                                          i.append("metadata[".concat(e, "]"), t);
                                                      }),
                                                      t.__autoAbort(
                                                          k
                                                              .ajax({
                                                                  xhr: function () {
                                                                      var t;
                                                                      return (
                                                                          (t = k.ajaxSettings.xhr()),
                                                                          t.upload &&
                                                                              t.upload.addEventListener(
                                                                                  "progress",
                                                                                  function (t) {
                                                                                      return e.notify(t.loaded / t.total);
                                                                                  },
                                                                                  !1
                                                                              ),
                                                                          t
                                                                      );
                                                                  },
                                                                  crossDomain: !0,
                                                                  type: "POST",
                                                                  url: "".concat(t.settings.urlBase, "/base/?jsonerrors=1"),
                                                                  headers: { "X-UC-User-Agent": t.settings._userAgent },
                                                                  contentType: !1,
                                                                  processData: !1,
                                                                  data: i,
                                                                  dataType: "json",
                                                              })
                                                              .retry(t.settings.retryConfig)
                                                              .done(function (n) {
                                                                  if (null != n ? n.file : void 0) return (t.fileId = n.file), e.resolve();
                                                                  if (n.error) {
                                                                      var i = n.error,
                                                                          r = i.content,
                                                                          a = i.error_code;
                                                                      return e.reject({ message: r, code: a });
                                                                  }
                                                                  return e.reject();
                                                              })
                                                              .fail(e.reject)
                                                      )
                                                  );
                                              }
                                          }),
                                          e)
                                    : (this.__rejectApi("baddata"), e)
                            );
                        },
                    },
                    {
                        key: "multipartUpload",
                        value: function () {
                            var e,
                                t = this;
                            return (
                                (e = k.Deferred()),
                                this.__file
                                    ? (this.multipartStart()
                                          .done(function (n) {
                                              return t
                                                  .uploadParts(n.parts, n.uuid)
                                                  .done(function () {
                                                      return t
                                                          .multipartComplete(n.uuid)
                                                          .done(function (n) {
                                                              return (t.fileId = n.uuid), t.__handleFileData(n), e.resolve();
                                                          })
                                                          .fail(e.reject);
                                                  })
                                                  .progress(e.notify)
                                                  .fail(e.reject);
                                          })
                                          .fail(e.reject),
                                      e)
                                    : e
                            );
                        },
                    },
                    {
                        key: "multipartStart",
                        value: function () {
                            var e = this,
                                t = {
                                    UPLOADCARE_PUB_KEY: this.settings.publicKey,
                                    signature: this.settings.secureSignature,
                                    expire: this.settings.secureExpire,
                                    filename: this.fileName,
                                    source: this.sourceInfo.source,
                                    size: this.fileSize,
                                    content_type: this.fileType,
                                    part_size: this.settings.multipartPartSize,
                                    UPLOADCARE_STORE: this.settings.doNotStore ? "" : "auto",
                                };
                            return (
                                k.each(Ae(this.settings), function (e, n) {
                                    t["metadata[".concat(e, "]")] = n;
                                }),
                                this.__autoAbort(ye("".concat(this.settings.urlBase, "/multipart/start/?jsonerrors=1"), "POST", t, { headers: { "X-UC-User-Agent": this.settings._userAgent }, retryConfig: this.settings.retryConfig })).fail(
                                    function (n) {
                                        if (e.settings.debugUploads) return C("Can't start multipart upload.", n.message, t);
                                    }
                                )
                            );
                        },
                    },
                    {
                        key: "uploadParts",
                        value: function (e, n) {
                            var i,
                                r,
                                a,
                                o,
                                l,
                                s,
                                u,
                                c,
                                d,
                                p,
                                f = this;
                            for (
                                l = [],
                                    o = Date.now(),
                                    p = function (e, t) {
                                        var n, r, a;
                                        if (((l[e] = t), !(Date.now() - o < 250))) {
                                            for (o = Date.now(), a = 0, n = 0, r = l.length; n < r; n++) a += t = l[n];
                                            return i.notify(a / f.fileSize);
                                        }
                                    },
                                    i = k.Deferred(),
                                    r = 0,
                                    d = 0,
                                    c = 0,
                                    u = function () {
                                        if (!(c >= f.fileSize)) {
                                            var a = c + f.settings.multipartPartSize;
                                            f.fileSize < a + f.settings.multipartMinLastPartSize && (a = f.fileSize);
                                            var o = f.__file.slice(c, a);
                                            c = a;
                                            var s = d;
                                            return (
                                                (r += 1),
                                                (d += 1),
                                                (function () {
                                                    if ("pending" === f.apiDeferred.state())
                                                        return (
                                                            (l[s] = 0),
                                                            f.__autoAbort(
                                                                k
                                                                    .ajax({
                                                                        xhr: function () {
                                                                            var e;
                                                                            return (
                                                                                (e = k.ajaxSettings.xhr()),
                                                                                (e.responseType = "text"),
                                                                                e.upload &&
                                                                                    e.upload.addEventListener(
                                                                                        "progress",
                                                                                        function (e) {
                                                                                            return p(s, e.loaded);
                                                                                        },
                                                                                        !1
                                                                                    ),
                                                                                e
                                                                            );
                                                                        },
                                                                        url: e[s],
                                                                        crossDomain: !0,
                                                                        type: "PUT",
                                                                        processData: !1,
                                                                        contentType: f.fileType,
                                                                        data: o,
                                                                    })
                                                                    .retry(
                                                                        t(
                                                                            t({}, f.settings.retryConfig),
                                                                            {},
                                                                            {
                                                                                onAttemptFail: function (e) {
                                                                                    var t = e.attempt;
                                                                                    f.settings.debugUploads && A("Part #".concat(s, "(").concat(t, ") upload is failed."), n);
                                                                                },
                                                                            }
                                                                        )
                                                                    )
                                                                    .done(function () {
                                                                        if (((r -= 1), u(), !r)) return i.resolve();
                                                                    })
                                                                    .fail(function () {
                                                                        return f.settings.debugUploads && C("Part #".concat(s, " and file upload is failed."), n), i.reject();
                                                                    })
                                                            )
                                                        );
                                                })()
                                            );
                                        }
                                    },
                                    a = 0,
                                    s = this.settings.multipartConcurrency;
                                s >= 0 ? a < s : a > s;
                                s >= 0 ? ++a : --a
                            )
                                u();
                            return i;
                        },
                    },
                    {
                        key: "multipartComplete",
                        value: function (e) {
                            var t,
                                n = this;
                            return (
                                (t = { UPLOADCARE_PUB_KEY: this.settings.publicKey, uuid: e }),
                                this.__autoAbort(
                                    ye("".concat(this.settings.urlBase, "/multipart/complete/?jsonerrors=1"), "POST", t, { headers: { "X-UC-User-Agent": this.settings._userAgent }, retryConfig: this.settings.retryConfig })
                                ).fail(function (t) {
                                    if (n.settings.debugUploads) return C("Can't complete multipart upload.", e, n.settings.publicKey, t.message);
                                })
                            );
                        },
                    },
                ]),
                i
            );
        })(Rt);
    qt.prototype.sourceName = "local";
    var Ut = (function (e) {
        u(n, e);
        var t = h(n);
        function n(e) {
            var i;
            return r(this, n), ((i = t.apply(this, arguments)).__input = e), (i.fileId = ne()), (i.fileName = k(i.__input).val().split("\\").pop()), i.__notifyApi(), i;
        }
        return (
            o(n, [
                {
                    key: "__startUpload",
                    value: function () {
                        var e, t, n, i;
                        return (
                            (e = k.Deferred()),
                            (i = "".concat(this.settings.urlBase, "/iframe/")),
                            (n = "uploadcare--iframe-".concat(this.fileId)),
                            (this.__iframe = k("<iframe>").attr({ id: n, name: n }).css("display", "none").appendTo("body").on("load", e.resolve).on("error", e.reject)),
                            (t = function (e, t) {
                                return k("<input/>", { type: "hidden", name: e, value: t });
                            }),
                            k(this.__input).attr("name", "file"),
                            (this.__iframeForm = k("<form>")
                                .attr({ method: "POST", action: i, enctype: "multipart/form-data", target: n })
                                .append(t("UPLOADCARE_PUB_KEY", this.settings.publicKey))
                                .append(t("UPLOADCARE_SIGNATURE", this.settings.secureSignature))
                                .append(t("UPLOADCARE_EXPIRE", this.settings.secureExpire))
                                .append(t("UPLOADCARE_FILE_ID", this.fileId))
                                .append(t("UPLOADCARE_STORE", this.settings.doNotStore ? "" : "auto"))
                                .append(t("UPLOADCARE_SOURCE", this.sourceInfo.source))
                                .append(this.__input)
                                .css("display", "none")
                                .appendTo("body")
                                .submit()),
                            e.always(this.__cleanUp.bind(this))
                        );
                    },
                },
                {
                    key: "__cleanUp",
                    value: function () {
                        var e, t;
                        return null != (e = this.__iframe) && e.off("load error").remove(), null != (t = this.__iframeForm) && t.remove(), (this.__iframe = null), (this.__iframeForm = null), this.__iframeForm;
                    },
                },
            ]),
            n
        );
    })(Rt);
    Ut.prototype.sourceName = "local-compat";
    var Vt = x(function (e, t) {
            /*!
             * Pusher JavaScript Library v1.12.2
             * http://pusherapp.com/
             *
             * Copyright 2011, Pusher
             * Released under the MIT licence.
             */
            var n = D.isWindowDefined;
            (function () {
                var e, t;
                ((e = function (t, n) {
                    (this.options = n || {}), (this.key = t), (this.channels = new e.Channels()), (this.global_emitter = new e.EventsDispatcher());
                    var i = this;
                    this.checkAppKey(),
                        (this.connection = new e.Connection(this.key, this.options)),
                        this.connection
                            .bind("connected", function () {
                                i.subscribeAll();
                            })
                            .bind("message", function (e) {
                                var t,
                                    n = 0 === e.event.indexOf("pusher_internal:");
                                e.channel && (t = i.channel(e.channel)) && t.emit(e.event, e.data), n || i.global_emitter.emit(e.event, e.data);
                            })
                            .bind("disconnected", function () {
                                i.channels.disconnect();
                            })
                            .bind("error", function (t) {
                                e.warn("Error", t);
                            }),
                        e.instances.push(this),
                        e.isReady && i.connect();
                }).instances = []),
                    (e.prototype = {
                        channel: function (e) {
                            return this.channels.find(e);
                        },
                        connect: function () {
                            this.connection.connect();
                        },
                        disconnect: function () {
                            this.connection.disconnect();
                        },
                        bind: function (e, t) {
                            return this.global_emitter.bind(e, t), this;
                        },
                        bind_all: function (e) {
                            return this.global_emitter.bind_all(e), this;
                        },
                        subscribeAll: function () {
                            var e;
                            for (e in this.channels.channels) this.channels.channels.hasOwnProperty(e) && this.subscribe(e);
                        },
                        subscribe: function (e) {
                            var t = this,
                                n = this.channels.add(e, this);
                            return (
                                "connected" === this.connection.state &&
                                    n.authorize(this.connection.socket_id, this.options, function (i, r) {
                                        i ? n.emit("pusher:subscription_error", r) : t.send_event("pusher:subscribe", { channel: e, auth: r.auth, channel_data: r.channel_data });
                                    }),
                                n
                            );
                        },
                        unsubscribe: function (e) {
                            this.channels.remove(e), "connected" === this.connection.state && this.send_event("pusher:unsubscribe", { channel: e });
                        },
                        send_event: function (e, t, n) {
                            return this.connection.send_event(e, t, n);
                        },
                        checkAppKey: function () {
                            (null !== this.key && void 0 !== this.key) || e.warn("Warning", "You must pass your app key when you instantiate Pusher.");
                        },
                    }),
                    (e.Util = {
                        extend: function e(t, n) {
                            for (var i in n) n[i] && n[i].constructor && n[i].constructor === Object ? (t[i] = e(t[i] || {}, n[i])) : (t[i] = n[i]);
                            return t;
                        },
                        stringify: function () {
                            for (var e = ["Pusher"], t = 0; t < arguments.length; t++) "string" == typeof arguments[t] ? e.push(arguments[t]) : null == window.JSON ? e.push(arguments[t].toString()) : e.push(JSON.stringify(arguments[t]));
                            return e.join(" : ");
                        },
                        arrayIndexOf: function (e, t) {
                            var n = Array.prototype.indexOf;
                            if (null == e) return -1;
                            if (n && e.indexOf === n) return e.indexOf(t);
                            for (i = 0, l = e.length; i < l; i++) if (e[i] === t) return i;
                            return -1;
                        },
                    }),
                    (e.debug = function () {
                        e.log && e.log(e.Util.stringify.apply(this, arguments));
                    }),
                    (e.warn = function () {
                        if (window.console && window.console.warn) window.console.warn(e.Util.stringify.apply(this, arguments));
                        else {
                            if (!e.log) return;
                            e.log(e.Util.stringify.apply(this, arguments));
                        }
                    }),
                    (e.VERSION = "1.12.2"),
                    (e.host = "ws.pusherapp.com"),
                    (e.ws_port = 80),
                    (e.wss_port = 443),
                    (e.channel_auth_endpoint = "/pusher/auth"),
                    (e.cdn_http = "http://js.pusher.com/"),
                    (e.cdn_https = "https://d3dy5gmtp8yhk7.cloudfront.net/"),
                    (e.dependency_suffix = ".min"),
                    (e.channel_auth_transport = "ajax"),
                    (e.activity_timeout = 12e4),
                    (e.pong_timeout = 3e4),
                    (e.isReady = !1),
                    (e.ready = function () {
                        e.isReady = !0;
                        for (var t = 0, n = e.instances.length; t < n; t++) e.instances[t].connect();
                    }),
                    (function () {
                        function t() {
                            this._callbacks = {};
                        }
                        function n(e) {
                            (this.callbacks = new t()), (this.global_callbacks = []), (this.failThrough = e);
                        }
                        (t.prototype.get = function (e) {
                            return this._callbacks[this._prefix(e)];
                        }),
                            (t.prototype.add = function (e, t) {
                                var n = this._prefix(e);
                                (this._callbacks[n] = this._callbacks[n] || []), this._callbacks[n].push(t);
                            }),
                            (t.prototype.remove = function (t, n) {
                                if (this.get(t)) {
                                    var i = e.Util.arrayIndexOf(this.get(t), n);
                                    this._callbacks[this._prefix(t)].splice(i, 1);
                                }
                            }),
                            (t.prototype._prefix = function (e) {
                                return "_" + e;
                            }),
                            (n.prototype.bind = function (e, t) {
                                return this.callbacks.add(e, t), this;
                            }),
                            (n.prototype.unbind = function (e, t) {
                                return this.callbacks.remove(e, t), this;
                            }),
                            (n.prototype.emit = function (e, t) {
                                for (var n = 0; n < this.global_callbacks.length; n++) this.global_callbacks[n](e, t);
                                var i = this.callbacks.get(e);
                                if (i) for (n = 0; n < i.length; n++) i[n](t);
                                else this.failThrough && this.failThrough(e, t);
                                return this;
                            }),
                            (n.prototype.bind_all = function (e) {
                                return this.global_callbacks.push(e), this;
                            }),
                            (e.EventsDispatcher = n);
                    })(),
                    (function () {
                        function t(e, t, n) {
                            void 0 !== t[e] && t[e](n);
                        }
                        function n(t, n, i) {
                            e.EventsDispatcher.call(this), (this.state = void 0), (this.errors = []), (this.stateActions = i), (this.transitions = n), this.transition(t);
                        }
                        (n.prototype.transition = function (n, i) {
                            var r,
                                a = this.state,
                                o = this.stateActions;
                            if (a && -1 == e.Util.arrayIndexOf(this.transitions[a], n)) throw (this.emit("invalid_transition_attempt", { oldState: a, newState: n }), new Error("Invalid transition [" + a + " to " + n + "]"));
                            t(a + "Exit", o, i), t(a + "To" + ((r = n).substr(0, 1).toUpperCase() + r.substr(1)), o, i), t(n + "Pre", o, i), (this.state = n), this.emit("state_change", { oldState: a, newState: n }), t(n + "Post", o, i);
                        }),
                            (n.prototype.is = function (e) {
                                return this.state === e;
                            }),
                            (n.prototype.isNot = function (e) {
                                return this.state !== e;
                            }),
                            e.Util.extend(n.prototype, e.EventsDispatcher.prototype),
                            (e.Machine = n);
                    })(),
                    ((t = function () {
                        var t = this;
                        e.EventsDispatcher.call(this),
                            void 0 !== window.addEventListener &&
                                (window.addEventListener(
                                    "online",
                                    function () {
                                        t.emit("online", null);
                                    },
                                    !1
                                ),
                                window.addEventListener(
                                    "offline",
                                    function () {
                                        t.emit("offline", null);
                                    },
                                    !1
                                ));
                    }).prototype.isOnLine = function () {
                        return void 0 === window.navigator.onLine || window.navigator.onLine;
                    }),
                    e.Util.extend(t.prototype, e.EventsDispatcher.prototype),
                    (e.NetInfo = t),
                    (function () {
                        var t = {
                            initialized: ["waiting", "failed"],
                            waiting: ["connecting", "permanentlyClosed"],
                            connecting: ["open", "permanentlyClosing", "impermanentlyClosing", "waiting"],
                            open: ["connected", "permanentlyClosing", "impermanentlyClosing", "waiting"],
                            connected: ["permanentlyClosing", "waiting"],
                            impermanentlyClosing: ["waiting", "permanentlyClosing"],
                            permanentlyClosing: ["permanentlyClosed"],
                            permanentlyClosed: ["waiting", "failed"],
                            failed: ["permanentlyClosed"],
                        };
                        function n(t) {
                            (t.connectionWait = 0), "flash" === e.TransportType ? (t.openTimeout = 5e3) : (t.openTimeout = 2e3), (t.connectedTimeout = 2e3), (t.connectionSecure = t.compulsorySecure), (t.connectionAttempts = 0);
                        }
                        function i(i, r) {
                            var a = this;
                            function o() {
                                a.connectionWait < 1e4 && (a.connectionWait += 2e3),
                                    a.openTimeout < 1e4 && (a.openTimeout += 2e3),
                                    a.connectedTimeout < 1e4 && (a.connectedTimeout += 2e3),
                                    !0 !== a.compulsorySecure && (a.connectionSecure = !a.connectionSecure),
                                    a.connectionAttempts++;
                            }
                            function l() {
                                a._machine.transition("impermanentlyClosing");
                            }
                            function s() {
                                a._activityTimer && clearTimeout(a._activityTimer),
                                    (a._activityTimer = setTimeout(function () {
                                        a.send_event("pusher:ping", {}),
                                            (a._activityTimer = setTimeout(function () {
                                                a.socket.close();
                                            }, a.options.pong_timeout || e.pong_timeout));
                                    }, a.options.activity_timeout || e.activity_timeout));
                            }
                            function u() {
                                a._machine.transition("open");
                            }
                            function c(e) {
                                var t,
                                    n,
                                    i = p(e);
                                void 0 !== i &&
                                    ("pusher:connection_established" === i.event
                                        ? a._machine.transition("connected", i.data.socket_id)
                                        : "pusher:error" === i.event &&
                                          ((t = i.data.code),
                                          (n = i.data.message),
                                          a.emit("error", { type: "PusherError", data: { code: t, message: n } }),
                                          4e3 === t
                                              ? ((a.compulsorySecure = !0), (a.connectionSecure = !0), (a.options.encrypted = !0), l())
                                              : t < 4100
                                              ? a._machine.transition("permanentlyClosing")
                                              : t < 4200
                                              ? ((a.connectionWait = 1e3), a._machine.transition("waiting"))
                                              : t < 4300
                                              ? l()
                                              : a._machine.transition("permanentlyClosing")));
                            }
                            function d(t) {
                                s();
                                var n = p(t);
                                if (void 0 !== n) {
                                    switch ((e.debug("Event recd", n), n.event)) {
                                        case "pusher:error":
                                            a.emit("error", { type: "PusherError", data: n.data });
                                            break;
                                        case "pusher:ping":
                                            a.send_event("pusher:pong", {});
                                    }
                                    a.emit("message", n);
                                }
                            }
                            function p(e) {
                                try {
                                    var t = JSON.parse(e.data);
                                    if ("string" == typeof t.data)
                                        try {
                                            t.data = JSON.parse(t.data);
                                        } catch (e) {
                                            if (!(e instanceof SyntaxError)) throw e;
                                        }
                                    return t;
                                } catch (t) {
                                    a.emit("error", { type: "MessageParseError", error: t, data: e.data });
                                }
                            }
                            function f() {
                                a._machine.transition("waiting");
                            }
                            function h(e) {
                                a.emit("error", { type: "WebSocketError", error: e });
                            }
                            function g(t, n) {
                                var i = a.state;
                                (a.state = t), i !== t && (e.debug("State changed", i + " -> " + t), a.emit("state_change", { previous: i, current: t }), a.emit(t, n));
                            }
                            e.EventsDispatcher.call(this),
                                (this.options = e.Util.extend({ encrypted: !1 }, r)),
                                (this.netInfo = new e.NetInfo()),
                                this.netInfo.bind("online", function () {
                                    a._machine.is("waiting") && (a._machine.transition("connecting"), g("connecting"));
                                }),
                                this.netInfo.bind("offline", function () {
                                    a._machine.is("connected") &&
                                        ((a.socket.onclose = void 0), (a.socket.onmessage = void 0), (a.socket.onerror = void 0), (a.socket.onopen = void 0), a.socket.close(), (a.socket = void 0), a._machine.transition("waiting"));
                                }),
                                (this._machine = new e.Machine("initialized", t, {
                                    initializedPre: function () {
                                        (a.compulsorySecure = a.options.encrypted), (a.key = i), (a.socket = null), (a.socket_id = null), (a.state = "initialized");
                                    },
                                    waitingPre: function () {
                                        a.connectionWait > 0 && a.emit("connecting_in", a.connectionWait),
                                            a.netInfo.isOnLine() && a.connectionAttempts <= 4 ? g("connecting") : g("unavailable"),
                                            a.netInfo.isOnLine() &&
                                                (a._waitingTimer = setTimeout(
                                                    function () {
                                                        a._machine.transition("connecting");
                                                    },
                                                    (function () {
                                                        var e = a.connectionWait;
                                                        if (0 === e && a.connectedAt) {
                                                            var t = new Date().getTime() - a.connectedAt;
                                                            t < 1e3 && (e = 1e3 - t);
                                                        }
                                                        return e;
                                                    })()
                                                ));
                                    },
                                    waitingExit: function () {
                                        clearTimeout(a._waitingTimer);
                                    },
                                    connectingPre: function () {
                                        if (!1 === a.netInfo.isOnLine()) return a._machine.transition("waiting"), void g("unavailable");
                                        var t = (function (t, n) {
                                            var i = e.ws_port,
                                                r = "ws://";
                                            (n || "https:" === document.location.protocol) && ((i = e.wss_port), (r = "wss://"));
                                            var a = "flash" === e.TransportType ? "true" : "false";
                                            return r + e.host + ":" + i + "/app/" + t + "?protocol=5&client=js&version=" + e.VERSION + "&flash=" + a;
                                        })(a.key, a.connectionSecure);
                                        e.debug("Connecting", t), (a.socket = new e.Transport(t)), (a.socket.onopen = u), (a.socket.onclose = f), (a.socket.onerror = h), (a._connectingTimer = setTimeout(l, a.openTimeout));
                                    },
                                    connectingExit: function () {
                                        clearTimeout(a._connectingTimer), (a.socket.onopen = void 0);
                                    },
                                    connectingToWaiting: function () {
                                        o();
                                    },
                                    connectingToImpermanentlyClosing: function () {
                                        o();
                                    },
                                    openPre: function () {
                                        (a.socket.onmessage = c), (a.socket.onerror = h), (a.socket.onclose = f), (a._openTimer = setTimeout(l, a.connectedTimeout));
                                    },
                                    openExit: function () {
                                        clearTimeout(a._openTimer), (a.socket.onmessage = void 0);
                                    },
                                    openToWaiting: function () {
                                        o();
                                    },
                                    openToImpermanentlyClosing: function () {
                                        o();
                                    },
                                    connectedPre: function (e) {
                                        (a.socket_id = e), (a.socket.onmessage = d), (a.socket.onerror = h), (a.socket.onclose = f), n(a), (a.connectedAt = new Date().getTime()), s();
                                    },
                                    connectedPost: function () {
                                        g("connected");
                                    },
                                    connectedExit: function () {
                                        a._activityTimer && clearTimeout(a._activityTimer), g("disconnected");
                                    },
                                    impermanentlyClosingPost: function () {
                                        a.socket && ((a.socket.onclose = f), a.socket.close());
                                    },
                                    permanentlyClosingPost: function () {
                                        a.socket
                                            ? ((a.socket.onclose = function () {
                                                  n(a), a._machine.transition("permanentlyClosed");
                                              }),
                                              a.socket.close())
                                            : (n(a), a._machine.transition("permanentlyClosed"));
                                    },
                                    failedPre: function () {
                                        g("failed"), e.debug("WebSockets are not available in this browser.");
                                    },
                                    permanentlyClosedPost: function () {
                                        g("disconnected");
                                    },
                                }));
                        }
                        (i.prototype.connect = function () {
                            this._machine.is("failed") || e.Transport
                                ? this._machine.is("initialized")
                                    ? (n(this), this._machine.transition("waiting"))
                                    : this._machine.is("waiting") && !0 === this.netInfo.isOnLine()
                                    ? this._machine.transition("connecting")
                                    : this._machine.is("permanentlyClosed") && (n(this), this._machine.transition("waiting"))
                                : this._machine.transition("failed");
                        }),
                            (i.prototype.send = function (e) {
                                if (this._machine.is("connected")) {
                                    var t = this;
                                    return (
                                        setTimeout(function () {
                                            t.socket.send(e);
                                        }, 0),
                                        !0
                                    );
                                }
                                return !1;
                            }),
                            (i.prototype.send_event = function (t, n, i) {
                                var r = { event: t, data: n };
                                return i && (r.channel = i), e.debug("Event sent", r), this.send(JSON.stringify(r));
                            }),
                            (i.prototype.disconnect = function () {
                                this._machine.is("permanentlyClosed") || (this._machine.is("waiting") || this._machine.is("failed") ? this._machine.transition("permanentlyClosed") : this._machine.transition("permanentlyClosing"));
                            }),
                            e.Util.extend(i.prototype, e.EventsDispatcher.prototype),
                            (e.Connection = i);
                    })(),
                    (function () {
                        (e.Channels = function () {
                            this.channels = {};
                        }),
                            (e.Channels.prototype = {
                                add: function (t, n) {
                                    var i = this.find(t);
                                    if (i) return i;
                                    var r = e.Channel.factory(t, n);
                                    return (this.channels[t] = r), r;
                                },
                                find: function (e) {
                                    return this.channels[e];
                                },
                                remove: function (e) {
                                    delete this.channels[e];
                                },
                                disconnect: function () {
                                    for (var e in this.channels) this.channels[e].disconnect();
                                },
                            }),
                            (e.Channel = function (t, n) {
                                var i = this;
                                e.EventsDispatcher.call(this, function (n, i) {
                                    e.debug("No callbacks on " + t + " for " + n);
                                }),
                                    (this.pusher = n),
                                    (this.name = t),
                                    (this.subscribed = !1),
                                    this.bind("pusher_internal:subscription_succeeded", function (e) {
                                        i.onSubscriptionSucceeded(e);
                                    });
                            }),
                            (e.Channel.prototype = {
                                init: function () {},
                                disconnect: function () {
                                    (this.subscribed = !1), this.emit("pusher_internal:disconnected");
                                },
                                onSubscriptionSucceeded: function (e) {
                                    (this.subscribed = !0), this.emit("pusher:subscription_succeeded");
                                },
                                authorize: function (e, t, n) {
                                    return n(!1, {});
                                },
                                trigger: function (e, t) {
                                    return this.pusher.send_event(e, t, this.name);
                                },
                            }),
                            e.Util.extend(e.Channel.prototype, e.EventsDispatcher.prototype),
                            (e.Channel.PrivateChannel = {
                                authorize: function (t, n, i) {
                                    var r = this;
                                    return new e.Channel.Authorizer(this, e.channel_auth_transport, n).authorize(t, function (e, t) {
                                        e || r.emit("pusher_internal:authorized", t), i(e, t);
                                    });
                                },
                            }),
                            (e.Channel.PresenceChannel = {
                                init: function () {
                                    this.members = new t(this);
                                },
                                onSubscriptionSucceeded: function (e) {
                                    this.subscribed = !0;
                                },
                            });
                        var t = function (e) {
                            var t = this,
                                n = function () {
                                    (this._members_map = {}), (this.count = 0), (this.me = null);
                                };
                            n.call(this),
                                e.bind("pusher_internal:authorized", function (n) {
                                    var i = JSON.parse(n.channel_data);
                                    e.bind("pusher_internal:subscription_succeeded", function (n) {
                                        (t._members_map = n.presence.hash), (t.count = n.presence.count), (t.me = t.get(i.user_id)), e.emit("pusher:subscription_succeeded", t);
                                    });
                                }),
                                e.bind("pusher_internal:member_added", function (n) {
                                    null === t.get(n.user_id) && t.count++, (t._members_map[n.user_id] = n.user_info), e.emit("pusher:member_added", t.get(n.user_id));
                                }),
                                e.bind("pusher_internal:member_removed", function (n) {
                                    var i = t.get(n.user_id);
                                    i && (delete t._members_map[n.user_id], t.count--, e.emit("pusher:member_removed", i));
                                }),
                                e.bind("pusher_internal:disconnected", function () {
                                    n.call(t);
                                });
                        };
                        (t.prototype = {
                            each: function (e) {
                                for (var t in this._members_map) e(this.get(t));
                            },
                            get: function (e) {
                                return this._members_map.hasOwnProperty(e) ? { id: e, info: this._members_map[e] } : null;
                            },
                        }),
                            (e.Channel.factory = function (t, n) {
                                var i = new e.Channel(t, n);
                                return (
                                    0 === t.indexOf("private-") ? e.Util.extend(i, e.Channel.PrivateChannel) : 0 === t.indexOf("presence-") && (e.Util.extend(i, e.Channel.PrivateChannel), e.Util.extend(i, e.Channel.PresenceChannel)),
                                    i.init(),
                                    i
                                );
                            });
                    })(),
                    (e.Channel.Authorizer = function (e, t, n) {
                        (this.channel = e), (this.type = t), (this.authOptions = (n || {}).auth || {});
                    }),
                    (e.Channel.Authorizer.prototype = {
                        composeQuery: function (e) {
                            var t = "&socket_id=" + encodeURIComponent(e) + "&channel_name=" + encodeURIComponent(this.channel.name);
                            for (var n in this.authOptions.params) t += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(this.authOptions.params[n]);
                            return t;
                        },
                        authorize: function (t, n) {
                            return e.authorizers[this.type].call(this, t, n);
                        },
                    }),
                    (e.auth_callbacks = {}),
                    (e.authorizers = {
                        ajax: function (t, n) {
                            var i;
                            for (var r in ((i = e.XHR ? new e.XHR() : window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")).open("POST", e.channel_auth_endpoint, !0),
                            i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                            this.authOptions.headers))
                                i.setRequestHeader(r, this.authOptions.headers[r]);
                            return (
                                (i.onreadystatechange = function () {
                                    if (4 == i.readyState)
                                        if (200 == i.status) {
                                            var t,
                                                r = !1;
                                            try {
                                                (t = JSON.parse(i.responseText)), (r = !0);
                                            } catch (e) {
                                                n(!0, "JSON returned from webapp was invalid, yet status code was 200. Data was: " + i.responseText);
                                            }
                                            r && n(!1, t);
                                        } else e.warn("Couldn't get auth info from your webapp", i.status), n(!0, i.status);
                                }),
                                i.send(this.composeQuery(t)),
                                i
                            );
                        },
                        jsonp: function (t, n) {
                            void 0 !== this.authOptions.headers && e.warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
                            var i = document.createElement("script");
                            e.auth_callbacks[this.channel.name] = function (e) {
                                n(!1, e);
                            };
                            var r = "Pusher.auth_callbacks['" + this.channel.name + "']";
                            i.src = e.channel_auth_endpoint + "?callback=" + encodeURIComponent(r) + this.composeQuery(t);
                            var a = document.getElementsByTagName("head")[0] || document.documentElement;
                            a.insertBefore(i, a.firstChild);
                        },
                    });
                var r = (function () {
                    function e(e, t) {
                        var n = document.getElementsByTagName("head")[0],
                            i = document.createElement("script");
                        i.setAttribute("src", e),
                            i.setAttribute("type", "text/javascript"),
                            i.setAttribute("async", !0),
                            (function (e, t) {
                                document.addEventListener
                                    ? e.addEventListener("load", t, !1)
                                    : e.attachEvent("onreadystatechange", function () {
                                          ("loaded" != e.readyState && "complete" != e.readyState) || t();
                                      });
                            })(i, function () {
                                t();
                            }),
                            n.appendChild(i);
                    }
                    return function (t, n) {
                        for (var i = 0, r = 0; r < t.length; r++)
                            e(t[r], function () {
                                t.length == ++i && setTimeout(n, 0);
                            });
                    };
                })();
                !(function () {
                    n() && !window.WebSocket && window.MozWebSocket && (window.WebSocket = window.MozWebSocket), n() && window.WebSocket && ((e.Transport = window.WebSocket), (e.TransportType = "native"));
                    var t = (n() && ("http:" == document.location.protocol ? e.cdn_http : e.cdn_https)) + e.VERSION,
                        i = [];
                    n() && !window.JSON && i.push(t + "/json2" + e.dependency_suffix + ".js"), n() && !window.WebSocket && ((window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = !0), i.push(t + "/flashfallback" + e.dependency_suffix + ".js"));
                    var a =
                            n() && window.WebSocket
                                ? function () {
                                      e.ready();
                                  }
                                : function () {
                                      window.WebSocket
                                          ? ((e.Transport = window.WebSocket),
                                            (e.TransportType = "flash"),
                                            (window.WEB_SOCKET_SWF_LOCATION = "https://s3.amazonaws.com/uploadcare-static/WebSocketMainInsecure.swf"),
                                            WebSocket.__addTask(function () {
                                                e.ready();
                                            }),
                                            WebSocket.__initialize())
                                          : ((e.Transport = null), (e.TransportType = "none"), e.ready());
                                  },
                        o = function () {
                            var e;
                            (e = a),
                                (function t() {
                                    n() && (document.body ? e() : setTimeout(t, 0));
                                })();
                        };
                    i.length > 0 ? r(i, o) : o();
                })(),
                    (this.Pusher = e);
            }.call(t));
        }).Pusher,
        Ht = {};
    Vt.prototype.constructor = Vt;
    var Wt = (function (e) {
            u(n, e);
            var t = h(n);
            function n() {
                return r(this, n), t.apply(this, arguments);
            }
            return (
                o(n, [
                    {
                        key: "subscribe",
                        value: function (e) {
                            return this.disconnectTimeout && (clearTimeout(this.disconnectTimeout), (this.disconnectTimeout = null)), this.connect(), m(c(n.prototype), "subscribe", this).apply(this, arguments);
                        },
                    },
                    {
                        key: "unsubscribe",
                        value: function (e) {
                            var t = this;
                            m(c(n.prototype), "unsubscribe", this).apply(this, arguments),
                                k.isEmptyObject(this.channels.channels) &&
                                    (this.disconnectTimeout = setTimeout(function () {
                                        return (t.disconnectTimeout = null), t.disconnect();
                                    }, 5e3));
                        },
                    },
                ]),
                n
            );
        })(Vt),
        Kt = function (e) {
            return null == Ht[e] && (Ht[e] = new Wt(e)), Ht[e].connect(), Ht[e];
        },
        Gt = (function (e) {
            u(n, e);
            var t = h(n);
            function n(e) {
                var i, a;
                if ((r(this, n), ((i = t.apply(this, arguments)).__url = e), (a = ie.exec(i.__url)[3].split("/").pop())))
                    try {
                        i.fileName = decodeURIComponent(a);
                    } catch (e) {
                        i.fileName = a;
                    }
                return i.__notifyApi(), i;
            }
            return (
                o(n, [
                    {
                        key: "setName",
                        value: function (e) {
                            return (this.fileName = e), (this.__realFileName = e), this.__notifyApi();
                        },
                    },
                    {
                        key: "setIsImage",
                        value: function (e) {
                            return (this.isImage = e), this.__notifyApi();
                        },
                    },
                    {
                        key: "__startUpload",
                        value: function () {
                            var e = this,
                                t = k.Deferred(),
                                n = new Xt(this.settings),
                                i = new Yt(this.settings),
                                r = {
                                    pub_key: this.settings.publicKey,
                                    signature: this.settings.secureSignature,
                                    expire: this.settings.secureExpire,
                                    source_url: this.__url,
                                    filename: this.__realFileName || "",
                                    source: this.sourceInfo.source,
                                    store: this.settings.doNotStore ? "" : "auto",
                                    jsonerrors: 1,
                                };
                            return (
                                k.each(Ae(this.settings), function (e, t) {
                                    r["metadata[".concat(e, "]")] = t;
                                }),
                                X(function () {
                                    if ("pending" === e.apiDeferred.state())
                                        return ye("".concat(e.settings.urlBase, "/from_url/"), "GET", r, { headers: { "X-UC-User-Agent": e.settings._userAgent }, retryConfig: e.settings.retryConfig })
                                            .fail(function (n) {
                                                return e.settings.debugUploads && A("Can't start upload from URL.", n.message, r), t.reject(n);
                                            })
                                            .done(function (r) {
                                                var a;
                                                if ("pending" === e.apiDeferred.state())
                                                    return (
                                                        e.settings.debugUploads &&
                                                            (A("Start watchers.", r.token),
                                                            (a = setInterval(function () {
                                                                return A("Still watching.", r.token);
                                                            }, 5e3)),
                                                            t
                                                                .done(function () {
                                                                    return A("Stop watchers.", r.token);
                                                                })
                                                                .always(function () {
                                                                    return clearInterval(a);
                                                                })),
                                                        e.__listenWatcher(t, k([n, i])),
                                                        t.always(function () {
                                                            return k([n, i]).off(e.allEvents), n.stopWatching(), i.stopWatching();
                                                        }),
                                                        k(n).one(e.allEvents, function () {
                                                            if (i.interval) return e.settings.debugUploads && A("Start using pusher.", r.token), i.stopWatching();
                                                        }),
                                                        n.watch(r.token),
                                                        i.watch(r.token)
                                                    );
                                            });
                                }),
                                t
                            );
                        },
                    },
                    {
                        key: "__listenWatcher",
                        value: function (e, t) {
                            var n = this;
                            return t
                                .on("progress", function (t, i) {
                                    return (n.fileSize = i.total), e.notify(i.done / i.total);
                                })
                                .on("success", function (t, i) {
                                    return k(t.target).trigger("progress", i), (n.fileId = i.uuid), n.__handleFileData(i), e.resolve();
                                })
                                .on("error fail", function (t, n) {
                                    if (n.error_code) {
                                        var i = n.error_code,
                                            r = n.msg;
                                        e.reject({ code: i, message: r });
                                    } else e.reject(n);
                                });
                        },
                    },
                ]),
                n
            );
        })(Rt);
    (Gt.prototype.sourceName = "url"), (Gt.prototype.allEvents = "progress success error fail");
    var Xt = (function () {
            function e(t) {
                r(this, e), (this.settings = t);
                try {
                    this.pusher = Kt(this.settings.pusherKey);
                } catch (e) {
                    this.pusher = null;
                }
            }
            return (
                o(e, [
                    {
                        key: "watch",
                        value: function (e) {
                            var t = this;
                            if (((this.token = e), this.pusher))
                                return this.pusher.subscribe("task-status-".concat(this.token)).bind_all(function (e, n) {
                                    return k(t).trigger(e, n);
                                });
                        },
                    },
                    {
                        key: "stopWatching",
                        value: function () {
                            if (this.pusher) return this.pusher.unsubscribe("task-status-".concat(this.token));
                        },
                    },
                ]),
                e
            );
        })(),
        Yt = (function () {
            function e(t) {
                r(this, e), (this.settings = t), (this.poolUrl = "".concat(this.settings.urlBase, "/from_url/status/"));
            }
            return (
                o(e, [
                    {
                        key: "watch",
                        value: function (e) {
                            var t = this;
                            this.token = e;
                            return (function e() {
                                return (
                                    (t.interval = setTimeout(function () {
                                        t.__updateStatus().done(function () {
                                            t.interval && e();
                                        });
                                    }, 333)),
                                    t.interval
                                );
                            })();
                        },
                    },
                    {
                        key: "stopWatching",
                        value: function () {
                            return this.interval && clearTimeout(this.interval), (this.interval = null), this.interval;
                        },
                    },
                    {
                        key: "__updateStatus",
                        value: function () {
                            var e = this;
                            return ye(this.poolUrl, "GET", { token: this.token }, { headers: { "X-UC-User-Agent": this.settings._userAgent }, retryConfig: this.settings.retryConfig })
                                .fail(function (t) {
                                    return k(e).trigger("error", t);
                                })
                                .done(function (t) {
                                    return k(e).trigger(t.status, t);
                                });
                        },
                    },
                ]),
                e
            );
        })(),
        $t = (function (e) {
            u(n, e);
            var t = h(n);
            function n(e) {
                var i, a;
                return r(this, n), (i = t.apply(this, arguments)), (a = le(e)) ? ((i.fileId = a[1]), a[2] && (i.cdnUrlModifiers = a[2])) : i.__rejectApi("baddata"), i;
            }
            return o(n);
        })(Rt);
    $t.prototype.sourceName = "uploaded";
    var Jt = (function (e) {
        u(n, e);
        var t = h(n);
        function n(e) {
            var i;
            return r(this, n), (i = t.apply(this, arguments)), e ? ((i.fileId = e.uuid), i.__handleFileData(e)) : i.__rejectApi("deleted"), i;
        }
        return o(n);
    })(Rt);
    Jt.prototype.sourceName = "uploaded";
    var Zt = { object: qt, input: Ut, url: Gt, uploaded: $t, ready: Jt },
        Qt = function (e, t, n) {
            return en(e, [t], n)[0];
        },
        en = function (e, t, n) {
            var i, r, a, o, l;
            for (n = ft(n || {}), l = [], i = 0, a = t.length; i < a; i++) (o = t[i]), (r = void 0), k.isArray(o) && ((r = o[1]), (o = o[0])), l.push(new Zt[e](o, n, r).promise());
            return l;
        },
        tn = function (e) {
            return e && e.done && e.fail && e.cancel;
        },
        nn = function (e, t) {
            return e && !tn(e) && (e = Qt("uploaded", e, t)), e || null;
        },
        rn = function (e) {
            return e && e.files && e.promise;
        },
        an = function (e, t) {
            var n, i;
            if (e)
                if (k.isArray(e))
                    (n = (function () {
                        var n, r, a;
                        for (a = [], n = 0, r = e.length; n < r; n++) (i = e[n]), a.push(nn(i, t));
                        return a;
                    })()),
                        (e = _n(n, t));
                else if (!rn(e)) return yn(e, t);
            return J(e || null);
        },
        on = function (e, t) {
            var n, i, r, a, o;
            if (e === t) return !0;
            if (!rn(e) || !rn(t)) return !1;
            if (((n = e.files()), (i = t.files()), n.length !== i.length)) return !1;
            for (r = a = 0, o = n.length; a < o; r = ++a) if (n[r] !== i[r]) return !1;
            return !0;
        },
        ln = [].indexOf,
        sn = (function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                r(this, e), (this.onAdd = k.Callbacks()), (this.onRemove = k.Callbacks()), (this.onSort = k.Callbacks()), (this.onReplace = k.Callbacks()), (this.__items = []), n || this.init(t);
            }
            return (
                o(e, [
                    {
                        key: "init",
                        value: function (e) {
                            var t, n, i;
                            for (n = 0, i = e.length; n < i; n++) (t = e[n]), this.add(t);
                        },
                    },
                    {
                        key: "add",
                        value: function (e) {
                            return this.__add(e, this.__items.length);
                        },
                    },
                    {
                        key: "__add",
                        value: function (e, t) {
                            return this.__items.splice(t, 0, e), this.onAdd.fire(e, t);
                        },
                    },
                    {
                        key: "remove",
                        value: function (e) {
                            var t;
                            if (-1 !== (t = k.inArray(e, this.__items))) return this.__remove(e, t);
                        },
                    },
                    {
                        key: "__remove",
                        value: function (e, t) {
                            return this.__items.splice(t, 1), this.onRemove.fire(e, t);
                        },
                    },
                    {
                        key: "clear",
                        value: function () {
                            var e, t, n, i, r, a;
                            for (n = this.get(), this.__items.length = 0, a = [], e = i = 0, r = n.length; i < r; e = ++i) (t = n[e]), a.push(this.onRemove.fire(t, e));
                            return a;
                        },
                    },
                    {
                        key: "replace",
                        value: function (e, t) {
                            var n;
                            if (e !== t && -1 !== (n = k.inArray(e, this.__items))) return this.__replace(e, t, n);
                        },
                    },
                    {
                        key: "__replace",
                        value: function (e, t, n) {
                            return (this.__items[n] = t), this.onReplace.fire(e, t, n);
                        },
                    },
                    {
                        key: "sort",
                        value: function (e) {
                            return this.__items.sort(e), this.onSort.fire();
                        },
                    },
                    {
                        key: "get",
                        value: function (e) {
                            return null != e ? this.__items[e] : this.__items.slice(0);
                        },
                    },
                    {
                        key: "length",
                        value: function () {
                            return this.__items.length;
                        },
                    },
                ]),
                e
            );
        })(),
        un = (function (e) {
            u(n, e);
            var t = h(n);
            function n() {
                return r(this, n), t.apply(this, arguments);
            }
            return (
                o(n, [
                    {
                        key: "add",
                        value: function (e) {
                            if (!(ln.call(this.__items, e) >= 0)) return m(c(n.prototype), "add", this).apply(this, arguments);
                        },
                    },
                    {
                        key: "__replace",
                        value: function (e, t, i) {
                            return ln.call(this.__items, t) >= 0 ? this.remove(e) : m(c(n.prototype), "__replace", this).apply(this, arguments);
                        },
                    },
                ]),
                n
            );
        })(sn),
        cn = (function (e) {
            u(n, e);
            var t = h(n);
            function n() {
                var e, i;
                return (
                    r(this, n),
                    ((i = t.call.apply(t, [this].concat(Array.prototype.slice.call(arguments), [!0]))).anyDoneList = k.Callbacks()),
                    (i.anyFailList = k.Callbacks()),
                    (i.anyProgressList = k.Callbacks()),
                    (i._thenArgs = null),
                    i.anyProgressList.add(function (e, t) {
                        return k(e).data("lastProgress", t);
                    }),
                    m(((e = p(i)), c(n.prototype)), "init", e).call(e, arguments[0]),
                    i
                );
            }
            return (
                o(n, [
                    {
                        key: "onAnyDone",
                        value: function (e) {
                            var t, n, i, r, a;
                            for (this.anyDoneList.add(e), a = [], n = 0, i = (r = this.__items).length; n < i; n++)
                                "resolved" === (t = r[n]).state()
                                    ? a.push(
                                          t.done(function () {
                                              for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                                              return e.apply(void 0, [t].concat(i));
                                          })
                                      )
                                    : a.push(void 0);
                            return a;
                        },
                    },
                    {
                        key: "onAnyFail",
                        value: function (e) {
                            var t, n, i, r, a;
                            for (this.anyFailList.add(e), a = [], n = 0, i = (r = this.__items).length; n < i; n++)
                                "rejected" === (t = r[n]).state()
                                    ? a.push(
                                          t.fail(function () {
                                              for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                                              return e.apply(void 0, [t].concat(i));
                                          })
                                      )
                                    : a.push(void 0);
                            return a;
                        },
                    },
                    {
                        key: "onAnyProgress",
                        value: function (e) {
                            var t, n, i, r, a;
                            for (this.anyProgressList.add(e), a = [], n = 0, i = (r = this.__items).length; n < i; n++) (t = r[n]), a.push(e(t, k(t).data("lastProgress")));
                            return a;
                        },
                    },
                    {
                        key: "lastProgresses",
                        value: function () {
                            var e, t, n, i, r;
                            for (r = [], t = 0, n = (i = this.__items).length; t < n; t++) (e = i[t]), r.push(k(e).data("lastProgress"));
                            return r;
                        },
                    },
                    {
                        key: "add",
                        value: function (e) {
                            if (e && e.then) {
                                var t;
                                if (this._thenArgs) e = (t = e).then.apply(t, b(this._thenArgs));
                                return m(c(n.prototype), "add", this).call(this, e), this.__watchItem(e);
                            }
                        },
                    },
                    {
                        key: "__replace",
                        value: function (e, t, i) {
                            return t && t.then ? (m(c(n.prototype), "__replace", this).apply(this, arguments), this.__watchItem(t)) : this.remove(e);
                        },
                    },
                    {
                        key: "__watchItem",
                        value: function (e) {
                            var t = this,
                                n = function (n) {
                                    return function () {
                                        if (ln.call(t.__items, e) >= 0) {
                                            for (var i = arguments.length, r = new Array(i), a = 0; a < i; a++) r[a] = arguments[a];
                                            return n.fire.apply(n, [e].concat(r));
                                        }
                                    };
                                };
                            return e.then(n(this.anyDoneList), n(this.anyFailList), n(this.anyProgressList));
                        },
                    },
                    {
                        key: "autoThen",
                        value: function () {
                            var e, t, n, i, r, a;
                            if (this._thenArgs) throw new Error("CollectionOfPromises.then() could be used only once");
                            for (var o = arguments.length, l = new Array(o), s = 0; s < o; s++) l[s] = arguments[s];
                            for (this._thenArgs = l, a = [], e = n = 0, i = (r = this.__items).length; n < i; e = ++n) {
                                var u;
                                (t = r[e]), a.push(this.__replace(t, (u = t).then.apply(u, b(this._thenArgs)), e));
                            }
                            return a;
                        },
                    },
                ]),
                n
            );
        })(un),
        dn = {
            ar: {
                translations: {
                    uploading: "جاري الرفع... الرجاء الانتظار",
                    loadingInfo: "جار تحميل المعلومات ...",
                    errors: {
                        default: "خطأ",
                        baddata: "قيمة غير صحيحة",
                        size: "ملف كبير جداً",
                        upload: "يتعذر الرفع",
                        user: "تم إلغاء الرفع",
                        info: "يتعذر تحميل المعلومات",
                        image: "يسمح بالصور فقط",
                        createGroup: "لا يمكن إنشاء مجموعة ملفات",
                        deleted: "تم حذف الملف",
                    },
                    draghere: "أسقط ملف هنا",
                    file: { one: "%1 ملف", other: "%1 ملفات" },
                    buttons: { cancel: "إلغاء", remove: "إزالة", choose: { files: { one: "اختر ملف", other: "اختر ملفات" }, images: { one: "اختر صورة", other: "اختر صور" } } },
                    dialog: {
                        close: "أغلق",
                        openMenu: "افتح القائمة",
                        done: "موافق",
                        showFiles: "اظهار الملفات",
                        tabs: {
                            names: {
                                "empty-pubkey": "مرحبا!",
                                preview: "معاينة",
                                file: "ملفات محلية",
                                url: "رابط مباشر",
                                camera: "كاميرا",
                                facebook: "فيس بوك",
                                dropbox: "دروب بوكس",
                                gdrive: "جوجل دريف",
                                gphotos: "صور غوغل",
                                instagram: "إينستجرام",
                                vk: "في كي",
                                evernote: "إيفرنوت",
                                box: "بوكس",
                                onedrive: "ون درايف",
                                flickr: "فليكر",
                                huddle: "هادل",
                            },
                            file: { drag: "سحب وإفلات<br>أي ملف", nodrop: "رفع ملفات من&nbsp;الحاسوب", cloudsTip: "مخازن على السحابة<br>والشبكات الاجتماعية", or: "أو", button: "اختر ملف محلي", also: "أو اختر من" },
                            url: { title: "ملفات من شبكة الإنترنت", line1: "التقاط أي ملف من على شبكة الإنترنت", line2: "فقط قم بتوفير الرابط", input: "الصق الرابط هنا...", button: "رفع" },
                            camera: {
                                title: "ملف من كاميرا الويب",
                                capture: "التقاط صورة",
                                mirror: "عكس الصورة",
                                startRecord: "سجل فيديو",
                                stopRecord: "توقف",
                                cancelRecord: "إلغاء",
                                retry: "طلب الإذن مرة أخرى",
                                pleaseAllow: { title: "يرجى السماح بالوصول إلى الكاميرا", text: "تمت مطالبتك بالسماح بالدخول إلى الكاميرا من هذا الموقع<br>من أجل التقاط الصور من الكاميرا يجب عليك الموافقة على هذا الطلب" },
                                notFound: { title: "لم يتم اكتشاف أي كاميرا", text: "يبدو أنه ليس لديك كاميرا متصلة بهذا الجهاز" },
                            },
                            preview: {
                                unknownName: "غير معروف",
                                change: "إلغاء",
                                back: "الرجوع",
                                done: "إضافة",
                                unknown: { title: "جار الرفع ... يرجى الانتظار للحصول على معاينة", done: "تخطي المعاينة والقبول" },
                                regular: { title: "إضافة هذا الملف؟", line1: "أنت على وشك إضافة الملف أعلاه", line2: "يرجى التأكيد" },
                                image: { title: "إضافة هذة الصورة", change: "إلغاء" },
                                crop: { title: "قص وإضافة هذه الصورة", done: "موافق", free: "حر" },
                                video: { title: "إضافة هذا الفيديو", change: "إلغاء" },
                                error: {
                                    default: { title: "عفوا آسف", text: "حدث خطأ أثناء الرفع", back: "حاول مرة اخرى" },
                                    image: { title: "يتم قبول ملفات الصور فقط", text: "الرجاء إعادة المحاولة باستخدام ملف آخر", back: "اختر صورة" },
                                    size: { title: "الملف الذي حددتة يتجاوز الحد المسموح بة", text: "الرجاء إعادة المحاولة باستخدام ملف آخر" },
                                    loadImage: { title: "خطأ", text: "لا يمكن تحميل الصورة" },
                                },
                                multiple: {
                                    title: "لقد اخترت %files%",
                                    question: "إضافة %files%?",
                                    tooManyFiles: "لقد اخترت عددا كبيرا جدا من الملفات %max% هو الحد الأقصى",
                                    tooFewFiles: "لقد اخترت %files%. على الأقل %min% مطلوب",
                                    clear: "حذف الكل",
                                    done: "إضافة",
                                    file: { preview: "معاينة %file%", remove: "حذف %file%" },
                                },
                            },
                        },
                        footer: { text: "مدعوم بواسطة", link: "ابلود كير" },
                    },
                },
                pluralize: function (e) {
                    var t;
                    return 0 === e ? "zero" : 1 === e ? "one" : 2 === e ? "two" : (t = e % 100) >= 3 && t <= 10 ? "few" : t >= 11 && t <= 99 ? "many" : "other";
                },
            },
            az: {
                translations: {
                    uploading: "Yüklənilir... Lütfən, gözləyin.",
                    loadingInfo: "İnfo yüklənilir...",
                    errors: {
                        default: "Xəta",
                        baddata: "Yanlış dəyər",
                        size: "Fayl çox böyükdür",
                        upload: "Yüklənilə bilmədi",
                        user: "Yükləmə ləğv edildi",
                        info: "İnfo yüklənə bilmədi",
                        image: "Yalnız təsvirlərə icazə verilir",
                        createGroup: "Fayl qrupu yaradıla bilmir",
                        deleted: "Fayl silindi",
                    },
                    draghere: "Faylı bura atın",
                    file: { one: "%1 fayl", other: "%1 fayl" },
                    buttons: { cancel: "Ləğv edin", remove: "Silin", choose: { files: { one: "Fayl seçin", other: "Fayllar seçin" }, images: { one: "Təsvir seçin", other: "Təsvirlər seçin" } } },
                    dialog: {
                        done: "Hazırdır",
                        showFiles: "Faylları göstərin",
                        tabs: {
                            names: { "empty-pubkey": "Xoş gəlmisiniz", preview: "Önbaxış", file: "Lokal Fayllar", url: "İxtiyari linklər", camera: "Kamera", gdrive: "Google Disk" },
                            file: {
                                drag: "Faylı bura atın",
                                nodrop: "Kompüterinizdən faylları yükləyin",
                                cloudsTip: "Bulud yaddaşlar <br>və sosial xidmətlər",
                                or: "or",
                                button: "Lokal fayl seçin",
                                also: "Həmçinin, buradan seçə bilərsiniz",
                            },
                            url: { title: "Vebdən fayllar", line1: "Vebdən istənilən faylı götürün.", line2: "Sadəcə, link verin.", input: "Linkinizi bura yerləşdirin...", button: "Yükləyin" },
                            camera: {
                                capture: "Şəkil çəkin",
                                mirror: "Güzgü",
                                retry: "Yenidən icazə sorğusu göndərin.",
                                pleaseAllow: { title: "Lütfən, kameranıza giriş hüququ verin", text: "Bu saytdan kameranıza daxil olmaq icazəsi verildi. Kameranız ilə şəkil çəkmək üçün bu sorğunu təsdiq etməlisiniz." },
                                notFound: { title: "Kamera aşkar edilmədi", text: "Görünür, bu cihaza kamera qoşulmayıb." },
                            },
                            preview: {
                                unknownName: "naməlum",
                                change: "Ləğv edin",
                                back: "Geri",
                                done: "Əlavə edin",
                                unknown: { title: "Yüklənilir... Lütfən, önbaxış üçün gözləyin.", done: "Önbaxışı ötürün və qəbul edin" },
                                regular: { title: "Bu fayl əlavə edilsin?", line1: "Yuxarıdakı faylı əlavə etmək üzrəsiniz.", line2: "Lütfən, təsdiq edin." },
                                image: { title: "Bu təsvir əlavə edilsin?", change: "Ləğv edin" },
                                crop: { title: "Bu təsviri kəsin və əlavə edin", done: "Hazırdır", free: "pulsuz" },
                                error: {
                                    default: { title: "Ups!", text: "Yükləmə zamanı nəsə xəta baş verdi.", back: "Lütfən, y enidən cəhd edin." },
                                    image: { title: "Yaınız təsvir faylları qəbul olunur.", text: "Lütfən, başqa fayl ilə cəhd edin.", back: "Təsvir seçin" },
                                    size: { title: "Seçdiyiniz fayl limiti keçir.", text: "Lütfən, başqa fayl ilə cəhd edin." },
                                    loadImage: { title: "Xəta", text: "Təsvir yüklənilə bilmir" },
                                },
                                multiple: {
                                    title: "%files% fayl seçdiniz.",
                                    question: "Bütün bu faylları əlavə etmək istəyirsiniz?",
                                    tooManyFiles: "Həddindən çox fayl seçdiniz. %max% maksimumdur.",
                                    tooFewFiles: "%files% fayl seçdiniz. Ən azı %min% tələb olunur.",
                                    clear: "Hamısını silin",
                                    done: "Hazırdır",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return "other";
                },
            },
            ca: {
                translations: {
                    uploading: "Carregant... Si us plau esperi.",
                    loadingInfo: "Carregant informació...",
                    errors: {
                        default: "Error",
                        baddata: "Valor incorrecte",
                        size: "Massa gran",
                        upload: "No s'ha pogut carregar",
                        user: "Carrega cancel·lada",
                        info: "No s'ha pogut carregar la informació",
                        image: "Només es permeten imatges",
                        createGroup: "No es pot crear el grup d'arxius",
                        deleted: "Fitxer eliminat",
                    },
                    draghere: "Arrossega els fitxers fins aquí",
                    file: { one: "%1 fitxer", other: "%1 fitxers" },
                    buttons: { cancel: "Cancel·lar", remove: "Eliminar", choose: { files: { one: "Escull un fitxer", other: "Escull fitxers" }, images: { one: "Escull una imatge", other: "Escull imatges" } } },
                    dialog: {
                        done: "Fet",
                        showFiles: "Mostra fitxers",
                        tabs: {
                            names: { "empty-pubkey": "Benvingut", preview: "Avanci", file: "Ordinador", url: "Enllaços arbitraris", camera: "Càmera" },
                            file: {
                                drag: "Arrossega un fitxer aquí",
                                nodrop: "Carrega fitxers des del teu ordinador",
                                cloudsTip: "Emmagatzematge al núvol<br>i xarxes socials",
                                or: "o",
                                button: "Escull un fitxer des del teu ordinador",
                                also: "També pots seleccionar-lo de",
                            },
                            url: { title: "Fitxers de la web", line1: "Selecciona qualsevol fitxer de la web.", line2: "Només proporcioni el link.", input: "Copiï el link aquí...", button: "Pujar" },
                            camera: {
                                capture: "Realitza una foto",
                                mirror: "Mirall",
                                retry: "Demanar permisos una altra vegada",
                                pleaseAllow: {
                                    title: "Si us plau, permet accés a la teva càmera",
                                    text: "Aquest lloc t'ha demanat de permetre accés a la càmera. Per tal de realitzar imatges amb la teva càmera has d'acceptar aquesta petició.",
                                },
                                notFound: { title: "No s'ha detectat cap càmera", text: "Sembla que no tens cap càmera connectada a aquest dispositiu." },
                            },
                            preview: {
                                unknownName: "desconegut",
                                change: "Cancel·lar",
                                back: "Endarrere",
                                done: "Pujar",
                                unknown: { title: "Carregant. Si us plau esperi per la visualització prèvia.", done: "Saltar visualització prèvia i acceptar" },
                                regular: { title: "Vols pujar aquest fitxer?", line1: "Estàs a punt de pujar el fitxer superior.", line2: "Confirmi, si us plau." },
                                image: { title: "Vols pujar aquesta imatge?", change: "Cancel·lar" },
                                crop: { title: "Tallar i pujar aquesta imatge", done: "Fet", free: "lliure" },
                                error: {
                                    default: { title: "La pujada ha fallat!", text: "S'ha produït un error durant la pujada.", back: "Si us plau, provi-ho de nou." },
                                    image: { title: "Només s'accepten fitxers d'imatges.", text: "Si us plau, provi-ho de nou amb un altre fitxer.", back: "Escull imatge" },
                                    size: { title: "La mida del fitxer que has seleccionat sobrepassa el límit.", text: "Si us plau, provi-ho de nou amb un altre fitxer." },
                                    loadImage: { title: "Error", text: "No s'ha pogut carregar la imatge" },
                                },
                                multiple: {
                                    title: "N'has escollit %files%",
                                    question: "Vols afegir tots aquests fitxers?",
                                    tooManyFiles: "Has escollit massa fitxers. %max% és el màxim.",
                                    tooFewFiles: "Has escollit %files%. Com a mínim en calen %min%.",
                                    clear: "Eliminar-los tots",
                                    done: "Fet",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            cs: {
                translations: {
                    uploading: "Nahrávám... Malý moment.",
                    loadingInfo: "Nahrávám informace...",
                    errors: {
                        default: "Chyba",
                        baddata: "Neplatná hodnota",
                        size: "Soubor je příliš velký",
                        upload: "Nelze nahrát",
                        user: "Nahrávání zrušeno",
                        info: "Nelze nahrát informace",
                        image: "Lze nahrát pouze obrázky",
                        createGroup: "Nelze vytvořit adresář",
                        deleted: "Soubor byl smazán",
                    },
                    draghere: "Přetáhněte soubor sem",
                    file: { one: "%1 soubor", few: "%1 soubory", many: "%1 souborů" },
                    buttons: { cancel: "Zrušit", remove: "Odstranit", choose: { files: { one: "Vyberte soubor", other: "Vyberte soubory" }, images: { one: "Vyberte obrázek", other: "Vyberte obrázky" } } },
                    dialog: {
                        done: "Hotovo",
                        showFiles: "Zobrazit soubory",
                        tabs: {
                            names: {
                                "empty-pubkey": "Vítejte",
                                preview: "Náhled",
                                file: "Soubor z počítače",
                                url: "Soubor z internetu",
                                camera: "Webkamera",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                instagram: "Instagram",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: {
                                drag: "Přetáhněte soubor sem",
                                nodrop: "Nahrajte soubory z vašeho počítače",
                                cloudsTip: "Cloudové úložiště<br>a sociální sítě",
                                or: "nebo",
                                button: "Vyberte soubor z počítače",
                                also: "Můžete také nahrát soubor z",
                            },
                            url: { title: "Soubory z internetu", line1: "Nahrajte jakýkoliv soubor z internetu.", line2: "Stačí vložit odkaz.", input: "Odkaz vložte zde...", button: "Nahrát" },
                            camera: {
                                capture: "Pořídit fotografii",
                                mirror: "Zrcadlo",
                                retry: "Znovu požádat o povolení",
                                pleaseAllow: { title: "Prosím povolte přístup k webkameře", text: "Byl(a) jste požádán(a) o přístup k webkameře. Abyste mohl(a) pořídit fotografii, musíte přístup povolit." },
                                notFound: { title: "Nebyla nalezena webkamera", text: "Zdá se, že k tomuto zařízení není připojena žádná webkamera." },
                            },
                            preview: {
                                unknownName: "neznámý",
                                change: "Zrušit",
                                back: "Zpět",
                                done: "Přidat",
                                unknown: { title: "Nahrávám... Prosím vyčkejte na náhled.", done: "Přeskočit náhled a odeslat" },
                                regular: { title: "Přidat tento soubor?", line1: "Tímto přidáte výše vybraný soubor.", line2: "Prosím potvrďte." },
                                image: { title: "Přidat tento obrázek?", change: "Zrušit" },
                                crop: { title: "Oříznout a přidat tento obrázek", done: "Hotovo", free: "zdarma" },
                                error: {
                                    default: { title: "Jejda!", text: "Něco se v průběhu nahrávání nepodařilo.", back: "Zkuste to prosím znovu." },
                                    image: { title: "Lze nahrávat pouze obrázky.", text: "Zkuste to prosím s jiným souborem.", back: "Vyberte obrázek" },
                                    size: { title: "Soubor přesahuje povolenou velikost.", text: "Prosím zkuste to s jiným souborem." },
                                    loadImage: { title: "Chyba", text: "Nelze nahrát obrázek" },
                                },
                                multiple: {
                                    title: "Bylo vybráno %files% souborů",
                                    question: "Chcete přidat všechny tyto soubory?",
                                    tooManyFiles: "Bylo vybráno moc souborů. Maximum je %max%",
                                    tooFewFiles: "Bylo vybráno %files% souborů. Musíte vybrat minimálně %min%",
                                    clear: "Odstranit vše",
                                    done: "Hotovo",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : e >= 2 && e <= 4 ? "few" : "many";
                },
            },
            da: {
                translations: {
                    uploading: "Uploader... Vent venligst.",
                    loadingInfo: "Henter information...",
                    errors: {
                        default: "Fejl",
                        baddata: "Forkert værdi",
                        size: "Filen er for stor",
                        upload: "Kan ikke uploade / sende fil",
                        user: "Upload fortrudt",
                        info: "Kan ikke hente information",
                        image: "Kun billeder er tilladt",
                        createGroup: "Kan ikke oprette fil gruppe",
                        deleted: "Filen blev slettet",
                    },
                    draghere: "Drop en fil her",
                    file: { one: "%1 fil", other: "%1 filer" },
                    buttons: { cancel: "Annuller", remove: "Fjern", choose: { files: { one: "Vælg en fil", other: "Vælg filer" }, images: { one: "Vælg et billede", other: "Vælg billeder" } } },
                    dialog: {
                        done: "Færdig",
                        showFiles: "Vis filer",
                        tabs: {
                            names: { preview: "Vis", file: "Computer", gdrive: "Google Drev", url: "Direkte link" },
                            file: { drag: "Drop en fil her", nodrop: "Hent filer fra din computer", or: "eller", button: "Hent fil fra din computer", also: "Du kan også hente fra" },
                            url: { title: "Filer fra en Web adresse", line1: "Vælg en fil fra en web adresse.", line2: "Skriv bare linket til filen.", input: "Indsæt link her...", button: "Upload / Send" },
                            preview: {
                                unknownName: "ukendt",
                                change: "Annuller",
                                back: "Tilbage",
                                done: "Fortsæt",
                                unknown: { title: "Uploader / sender... Vent for at se mere.", done: "Fortsæt uden at vente på resultat" },
                                regular: { title: "Tilføje fil?", line1: "Du er ved at tilføje filen ovenfor.", line2: "Venligst accepter." },
                                image: { title: "Tilføj billede?", change: "Annuller" },
                                crop: { title: "Beskær og tilføj dette billede", done: "Udfør" },
                                error: {
                                    default: { title: "Hov!", text: "Noget gik galt under upload.", back: "Venligst prøv igen" },
                                    image: { title: "Du kan kun vælge billeder.", text: "Prøv igen med en billedfil.", back: "Vælg billede" },
                                    size: { title: "Den fil du valgte, er desværre større end tilladt.", text: "Venligst prøv med en mindre fil." },
                                    loadImage: { title: "Fejl", text: "Kan ikke åbne billede" },
                                },
                                multiple: {
                                    title: "Du har valgt %files% filer",
                                    question: "Vil du tilføje alle disse filer?",
                                    tooManyFiles: "Du har valgt for mange filer. %max% er maximum.",
                                    tooFewFiles: "Du har valgt %files% filer. Men du skal vælge mindst %min%.",
                                    clear: "Fjern alle",
                                    done: "Fortsæt",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            de: {
                translations: {
                    uploading: "Upload läuft… Bitte warten…",
                    loadingInfo: "Informationen werden geladen…",
                    errors: {
                        default: "Fehler",
                        baddata: "Falscher Wert",
                        size: "Datei zu groß",
                        upload: "Kann nicht hochgeladen werden",
                        user: "Hochladen abgebrochen",
                        info: "Informationen können nicht geladen werden",
                        image: "Nur Bilder sind erlaubt",
                        createGroup: "Datei-Gruppe kann nicht erstellt werden",
                        deleted: "Datei wurde gelöscht",
                    },
                    draghere: "Ziehen Sie eine Datei hierhin",
                    file: { one: "%1 Datei", other: "%1 Dateien" },
                    buttons: { cancel: "Abbrechen", remove: "Löschen", choose: { files: { one: "Datei auswählen", other: "Dateien auswählen" }, images: { one: "Bild auswählen", other: "Bilder auswählen" } } },
                    dialog: {
                        close: "Schließen",
                        openMenu: "Menü öffnen",
                        done: "Fertig",
                        showFiles: "Dateien anzeigen",
                        tabs: {
                            names: { "empty-pubkey": "Willkommen", preview: "Vorschau", file: "Lokale Dateien", url: "Web-Links", camera: "Kamera" },
                            file: {
                                drag: "Ziehen Sie eine Datei hierhin",
                                nodrop: "Laden Sie Dateien von Ihrem PC hoch",
                                cloudsTip: "Cloud-Speicher<br>und soziale Dienste",
                                or: "oder",
                                button: "Wählen Sie eine Datei",
                                also: "Sie können sie auch Dateien wählen aus",
                            },
                            url: {
                                title: "Eine Datei aus dem Web hochladen",
                                line1: "Sie können eine Datei aus dem Internet hochladen.",
                                line2: "Geben Sie hier einfach den Link ein.",
                                input: "Bitte geben Sie hier den Link ein…",
                                button: "Hochladen",
                            },
                            camera: {
                                title: "Foto mit Webcam aufnehmen",
                                capture: "Machen Sie ein Foto",
                                mirror: "Andere Kamera",
                                retry: "Berechtigungen erneut anfordern",
                                pleaseAllow: {
                                    title: "Bitte erlauben Sie den Zugriff auf Ihre Kamera",
                                    text: "Sie wurden gebeten, dieser Website den Zugriff auf Ihre Kamera zu erlauben. Um mit Ihrer Kamera Fotos machen zu können, müssen Sie diese Erlaubnis erteilen.",
                                },
                                notFound: { title: "Keine Kamera gefunden", text: "Es sieht so aus, als hätten Sie keine Kamera an dieses Gerät angeschlossen." },
                            },
                            preview: {
                                unknownName: "nicht bekannt",
                                change: "Abbrechen",
                                back: "Zurück",
                                done: "Hinzufügen",
                                unknown: { title: "Upload läuft… Bitte warten Sie auf die Vorschau.", done: "Vorschau überspringen und Datei annehmen" },
                                regular: { title: "Diese Datei hinzufügen?", line1: "Diese Datei wird nun hinzugefügt.", line2: "Bitte bestätigen Sie." },
                                image: { title: "Nur Bilder sind akzeptiert.", text: "Bitte veruschen Sie es erneut mit einer anderen Datei.", back: "Bild wählen" },
                                error: {
                                    default: { title: "Oops!", text: "Etwas ist während dem Hochladen schief gelaufen.", back: "Bitte versuchen Sie es erneut" },
                                    image: { title: "Nur Bilder sind akzeptiert.", text: "Bitte veruschen Sie es erneut mit einer anderen Datei.", back: "Bild wählen" },
                                    size: { title: "Die gewählte Datei ist zu groß.", text: "Bitte versuchen Sie es erneut mit einer anderen Datei." },
                                    loadImage: { title: "Fehler", text: "Das Bild kann nicht geladen werden" },
                                },
                                multiple: {
                                    title: "Sie haben %files% Dateien gewählt",
                                    question: "Möchten Sie all diese Dateien hinzufügen?",
                                    tooManyFiles: "Sie haben zu viele Dateien gewählt. %max% ist das Maximum.",
                                    tooFewFiles: "Sie haben %files% Dateien gewählt. Es sind mindestens %min% nötig.",
                                    clear: "Alle löschen",
                                    done: "Fertig",
                                    file: { preview: "Vorschau: %file%", remove: "Datei löschen: %file%" },
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            el: {
                translations: {
                    loadingInfo: "Φόρτωση πληροφοριών...",
                    errors: {
                        default: "Σφάλμα",
                        baddata: "Λανθασμένη αξία",
                        size: "Πολύ μεγάλο αρχείο",
                        upload: "Δεν μπορεί να γίνει φόρτωση",
                        user: "Η φόρτωση ακυρώθηκε",
                        info: "Δεν μπορούν να φορτωθούν πληροφορίες",
                        image: "Μόνο εικόνες επιτρέπονται",
                        createGroup: "Δεν μπορεί να δημιουργηθεί ομάδα αρχείων",
                        deleted: "Το αρχείο διαγράφηκε",
                    },
                    uploading: "Φόρτωση... Παρακαλούμε περιμένετε.",
                    draghere: "Αποθέστε ένα αρχείο εδώ",
                    file: { one: "%1 αρχείο", other: "%1 αρχεία" },
                    buttons: { cancel: "Ακύρωση", remove: "Κατάργηση", choose: { files: { one: "Επιλέξτε ένα αρχείο", other: "Επιλέξτε αρχεία" }, images: { one: "Επιλέξτε μία εικόνα", other: "Επιλέξτε εικόνες" } } },
                    dialog: {
                        close: "Κλείσιμο",
                        openMenu: "Άνοιγμα μενού",
                        done: "Εντάξει",
                        showFiles: "Προβολή αρχείων",
                        tabs: {
                            names: {
                                "empty-pubkey": "Καλώς ήρθατε",
                                preview: "Προεπισκόπηση",
                                file: "Τοπικά αρχεία",
                                url: "Απευθείας σύνδεσμος",
                                camera: "Κάμερα",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                instagram: "Instagram",
                                gphotos: "Google Photos",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: {
                                drag: "σύρετε & αποθέστε<br>οποιαδήποτε αρχεία",
                                nodrop: "Φορτώστε αρχεία από τον&nbsp;υπολογιστή σας",
                                cloudsTip: "Αποθήκευση νέφους<br>και κοινωνικά δίκτυα",
                                or: "ή",
                                button: "Επιλέξτε ένα τοπικό αρχείο",
                                also: "ή επιλέξτε από",
                            },
                            url: { title: "Αρχεία από τον Ιστό", line1: "Πάρτε οποιοδήποτε αρχείο από το διαδίκτυο.", line2: "Γράψτε απλώς τον σύνδεσμο.", input: "Επικολλήστε τον σύνδεσμό σας εδώ...", button: "Φόρτωση" },
                            camera: {
                                title: "Αρχείο από κάμερα web",
                                capture: "Τραβήξτε μια φωτογραφία",
                                mirror: "Καθρέφτης",
                                startRecord: "Εγγραφή βίντεο",
                                cancelRecord: "Ακύρωση",
                                stopRecord: "Διακοπή",
                                retry: "Νέο αίτημα για άδεια",
                                pleaseAllow: {
                                    text: "Έχετε δεχτεί υπόδειξη να επιτρέψετε την πρόσβαση στην κάμερα από αυτόν τον ιστότοπο.<br>Για να τραβήξετε φωτογραφίες με την κάμερά σας πρέπει να εγκρίνετε αυτό το αίτημα.",
                                    title: "Παρακαλούμε επιτρέψτε την πρόσβαση στην κάμερά σας",
                                },
                                notFound: { title: "Δεν εντοπίστηκε κάμερα", text: "Φαίνεται ότι δεν έχετε κάμερα συνδεδεμένη με αυτή τη συσκευή." },
                            },
                            preview: {
                                unknownName: "άγνωστο",
                                change: "Ακύρωση",
                                back: "Πίσω",
                                done: "Προσθήκη",
                                unknown: { title: "Φόρτωση... Παρακαλούμε περιμένετε για προεπισκόπηση.", done: "Παράλειψη επισκόπησης και αποδοχή" },
                                regular: { title: "Να προστεθεί αυτό το αρχείο;", line1: "Πρόκειται να προσθέσετε το παραπάνω αρχείο.", line2: "Παρακαλούμε επιβεβαιώστε." },
                                image: { title: "Να προστεθεί αυτή η εικόνα;", change: "Ακύρωση" },
                                crop: { title: "Περικοπή και προσθήκη αυτής της εικόνας", done: "Εντάξει", free: "δωρεάν" },
                                video: { title: "Να προστεθεί αυτό το βίντεο;", change: "Ακύρωση" },
                                error: {
                                    default: { title: "Ουπς!", back: "Παρακαλούμε προσπαθήστε ξανά", text: "Κάτι πήγε στραβά κατά τη φόρτωση." },
                                    image: { title: "Μόνο αρχεία εικόνων γίνονται δεκτά.", text: "Δοκιμάστε ξανά με άλλο αρχείο.", back: "Επιλέξτε εικόνα" },
                                    size: { title: "Το αρχείο που επιλέξατε υπερβαίνει το όριο.", text: "Δοκιμάστε ξανά με άλλο αρχείο." },
                                    loadImage: { title: "Σφάλμα", text: "Δεν μπορεί να φορτωθεί η εικόνα" },
                                },
                                multiple: {
                                    title: "Έχετε επιλέξει %files%",
                                    question: "Προσθήκη %files%;",
                                    tooManyFiles: "Έχετε επιλέξει πάρα πολλά αρχεία. Το μέγιστο είναι %max%.",
                                    tooFewFiles: "Έχετε επιλέξει %files%. Απαιτούνται τουλάχιστον %min%.",
                                    clear: "Κατάργηση όλων",
                                    file: { preview: "Προεπισκόπηση %file%", remove: "Αφαίρεση %file%" },
                                    done: "Προσθήκη",
                                },
                            },
                        },
                        footer: { text: "παρέχεται από", link: "uploadcare" },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            en: {
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
                translations: {
                    uploading: "Uploading... Please wait.",
                    loadingInfo: "Loading info...",
                    errors: {
                        default: "Error",
                        baddata: "Incorrect value",
                        size: "File too big",
                        upload: "Can’t upload",
                        user: "Upload canceled",
                        info: "Can’t load info",
                        image: "Only images allowed",
                        createGroup: "Can’t create file group",
                        deleted: "File was deleted",
                    },
                    draghere: "Drop a file here",
                    file: { one: "%1 file", other: "%1 files" },
                    buttons: { cancel: "Cancel", remove: "Remove", choose: { files: { one: "Choose a file", other: "Choose files" }, images: { one: "Choose an image", other: "Choose images" } } },
                    dialog: {
                        close: "Close",
                        openMenu: "Open menu",
                        done: "Done",
                        showFiles: "Show files",
                        tabs: {
                            names: {
                                "empty-pubkey": "Welcome",
                                preview: "Preview",
                                file: "Local Files",
                                url: "Direct Link",
                                camera: "Camera",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                gphotos: "Google Photos",
                                instagram: "Instagram",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                                nft: "NFT",
                            },
                            file: { drag: "Drag & Drop<br>Any Files", nodrop: "Upload files from your&nbsp;computer", cloudsTip: "Cloud storages<br>and social networks", or: "or", button: "Choose a local file", also: "or choose from" },
                            url: { title: "Files from the Web", line1: "Grab any file off the web.", line2: "Just provide the link.", input: "Paste your link here...", button: "Upload" },
                            camera: {
                                camera: "Camera",
                                title: "File from web camera",
                                capture: "Take a photo",
                                mirror: "Mirror",
                                startRecord: "Record a video",
                                stopRecord: "Stop",
                                cancelRecord: "Cancel",
                                retry: "Request permissions again",
                                pleaseAllow: {
                                    title: "Please allow access to your camera",
                                    text: "You have been prompted to allow camera access from this site.<br>In order to take pictures with your camera you must approve this request.",
                                },
                                notFound: { title: "No camera detected", text: "Looks like you have no camera connected to this device." },
                            },
                            preview: {
                                unknownName: "unknown",
                                change: "Cancel",
                                back: "Back",
                                done: "Add",
                                unknown: { title: "Uploading... Please wait for a preview.", done: "Skip preview and accept" },
                                regular: { title: "Add this file?", line1: "You are about to add the file above.", line2: "Please confirm." },
                                image: { title: "Add this image?", change: "Cancel" },
                                crop: { title: "Crop and add this image", done: "Done", free: "free" },
                                video: { title: "Add this video?", change: "Cancel" },
                                error: {
                                    default: { title: "Oops!", text: "Something went wrong during the upload.", back: "Please try again" },
                                    image: { title: "Only image files are accepted.", text: "Please try again with another file.", back: "Choose image" },
                                    size: { title: "The file you selected exceeds the limit.", text: "Please try again with another file." },
                                    loadImage: { title: "Error", text: "Can’t load image" },
                                },
                                multiple: {
                                    title: "You’ve chosen %files%.",
                                    question: "Add %files%?",
                                    tooManyFiles: "You’ve chosen too many files. %max% is maximum.",
                                    tooFewFiles: "You’ve chosen %files%. At least %min% required.",
                                    clear: "Remove all",
                                    done: "Add",
                                    file: { preview: "Preview %file%", remove: "Remove %file%" },
                                },
                            },
                        },
                        footer: { text: "powered by", link: "uploadcare" },
                    },
                    serverErrors: {
                        AccountBlockedError: "Administrator's account has been blocked. Please, contact support.",
                        AccountUnpaidError: "Administrator's account has been blocked. Please, contact support.",
                        AccountLimitsExceededError: "Administrator's account has reached its limits. Please, contact support.",
                        FileSizeLimitExceededError: "File is too large.",
                        MultipartFileSizeLimitExceededError: "File is too large.",
                        FileTypeForbiddenOnCurrentPlanError: "Uploading of these files types is not allowed.",
                        DownloadFileSizeLimitExceededError: "Downloaded file is too big.",
                    },
                },
            },
            es: {
                translations: {
                    uploading: "Subiendo... Por favor espere.",
                    loadingInfo: "Cargando información...",
                    errors: {
                        default: "Error",
                        baddata: "Valor incorrecto",
                        size: "Archivo demasiado grande",
                        upload: "No se puede subir",
                        user: "Subida cancelada",
                        info: "No se puede cargar la información",
                        image: "Solo se permiten imágenes",
                        createGroup: "No se puede crear el grupo de archivos",
                        deleted: "El archivo fue eliminado",
                    },
                    draghere: "Arrastra un archivo aquí",
                    file: { one: "%1 archivo", other: "%1 archivos" },
                    buttons: { cancel: "Cancelar", remove: "Eliminar", choose: { files: { one: "Escoge un archivo", other: "Escoge archivos" }, images: { one: "Escoge una imagen", other: "Escoge imágenes" } } },
                    dialog: {
                        close: "Cerrar",
                        openMenu: "Menú abierto",
                        done: "Hecho",
                        showFiles: "Mostrar archivos",
                        tabs: {
                            names: { "empty-pubkey": "Bienvenido", preview: "Previsualización", file: "Archivos locales", url: "Enlaces arbitrarios", camera: "Cámara" },
                            file: {
                                drag: "Arrastra un archivo aquí",
                                nodrop: "Sube fotos desde tu dispositivo",
                                cloudsTip: "Almacenamiento en la nube<br>y redes sociales",
                                or: "o",
                                button: "Elige un archivo de tu dispositivo",
                                also: "Tambien puedes seleccionarlo de",
                            },
                            url: { title: "Archivos de la Web", line1: "Coge cualquier archivo de la web.", line2: "Solo danos el link.", input: "Pega tu link aquí...", button: "Subir" },
                            camera: {
                                title: "Archivo desde la cámara web",
                                capture: "Hacer una foto",
                                mirror: "Espejo",
                                startRecord: "Grabar un video",
                                stopRecord: "Detener",
                                cancelRecord: "Cancelar",
                                retry: "Solicitar permisos de nuevo",
                                pleaseAllow: { title: "Por favor, permite el acceso a tu cámara", text: "Este sitio ha pedido permiso para acceder a la cámara. Para tomar imágenes con tu cámara debes aceptar esta petición." },
                                notFound: { title: "No se ha detectado ninguna cámara", text: "Parece que no tienes ninguna cámara conectada a este dispositivo." },
                            },
                            preview: {
                                unknownName: "desconocido",
                                change: "Cancelar",
                                back: "Atrás",
                                done: "Añadir",
                                unknown: { title: "Subiendo. Por favor espera para una vista previa.", done: "Saltar vista previa y aceptar" },
                                regular: { title: "¿Quieres subir este archivo?", line1: "Estás a punto de subir el archivo de arriba.", line2: "Confírmalo por favor." },
                                image: { title: "¿Quieres subir esta imagen?", change: "Cancelar" },
                                crop: { title: "Cortar y añadir esta imagen", done: "Listo", free: "libre" },
                                video: { title: "¿Añadir este video?", change: "Cancelar" },
                                error: {
                                    default: { title: "Ups!", text: "Algo salió mal durante la subida.", back: "Por favor, inténtalo de nuevo." },
                                    image: { title: "Solo se aceptan archivos de imagen.", text: "Por favor, inténtalo de nuevo con otro archivo.", back: "Escoger imagen" },
                                    size: { title: "El archivo que has seleccinado excede el límite.", text: "Por favor, inténtalo de nuevo con otro archivo." },
                                    loadImage: { title: "Error", text: "No puede cargar la imagen" },
                                },
                                multiple: {
                                    title: "Has escogido %files%",
                                    question: "¿Quieres añadir todos estos archivos?",
                                    tooManyFiles: "Has escogido demasiados archivos. %max% es el máximo.",
                                    tooFewFiles: "Has escogido %files%. Hacen falta al menos %min%.",
                                    clear: "Eliminar todo",
                                    done: "Hecho",
                                    file: { preview: "Vista previa %file%", remove: "Quitar %file%" },
                                },
                            },
                        },
                        footer: { text: "alimentado por" },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            et: {
                translations: {
                    uploading: "Üleslaadimine… Palun oota.",
                    loadingInfo: "Info laadimine...",
                    errors: {
                        default: "Viga",
                        baddata: "Incorrect value",
                        size: "Fail on liiga suur",
                        upload: "Ei saa üles laadida",
                        user: "Üleslaadimine tühistatud",
                        info: "Ei saa infot laadida",
                        image: "Ainult pildid lubatud",
                        createGroup: "Ei saa luua failigruppi",
                        deleted: "Fail on kustutatud",
                    },
                    draghere: "Tiri fail siia",
                    file: { one: "%1 fail", other: "%1 failid" },
                    buttons: { cancel: "Tühista", remove: "Kustuta", choose: { files: { one: "Vali fail", other: "Vali failid" }, images: { one: "Vali pilt", other: "Vali pildid" } } },
                    dialog: {
                        done: "Valmis",
                        showFiles: "Näita faile",
                        tabs: {
                            names: { "empty-pubkey": "Tere", preview: "Eelvaade", file: "Failid Kõvakettalt", url: "Veebilink", camera: "Kaamera" },
                            file: { drag: "Tiri failid siia", nodrop: "Lae failid arvutist", cloudsTip: "Pilv<br>ja sotsiaalmeedia", or: "või", button: "Vali fail kõvakettalt", also: "Saad samuti valida" },
                            url: { title: "Failid veebist", line1: "Ükskõik mis fail otse veebist.", line2: "Lihtsalt sisesta URL.", input: "Kleebi link siia...", button: "Lae üles" },
                            camera: {
                                capture: "Take a photo",
                                mirror: "Mirror",
                                startRecord: "Record a video",
                                stopRecord: "Stop",
                                cancelRecord: "Cancel",
                                retry: "Request permissions again",
                                pleaseAllow: { title: "Please allow access to your camera", text: "You have been prompted to allow camera access from this site. In order to take pictures with your camera you must approve this request." },
                                notFound: { title: "No camera detected", text: "Looks like you have no camera connected to this device." },
                            },
                            preview: {
                                unknownName: "teadmata",
                                change: "Tühista",
                                back: "Tagasi",
                                done: "Lisa",
                                unknown: { title: "Üleslaadimine... Palun oota eelvaadet.", done: "Jäta eelvaade vahele ja nõustu" },
                                regular: { title: "Lisa see fail?", line1: "Oled lisamas ülaltoodud faili.", line2: "Palun kinnita." },
                                image: { title: "Lisa pilt?", change: "Tühista" },
                                crop: { title: "Lõika ja lisa pilt", done: "Valmis", free: "vaba" },
                                video: { title: "Lisa video?", change: "Tühista" },
                                error: {
                                    default: { title: "Oihh!", text: "Midagi läks üleslaadimisel valesti.", back: "Palun proovi uuesti" },
                                    image: { title: "Ainult pildifailid on lubatud.", text: "Palun proovi uuesti teise failiga.", back: "Vali pilt" },
                                    size: { title: "Valitud fail ületab maksimaalse suuruse.", text: "Palun proovi uuesti teise failiga." },
                                    loadImage: { title: "Viga", text: "Ei saa pilti laadida" },
                                },
                                multiple: {
                                    title: "Oled valinud %files%",
                                    question: "Kas sa soovid lisada kõik failid?",
                                    tooManyFiles: "Oled valinud liiga suure hulga faile. %max% on maksimaalne.",
                                    tooFewFiles: "Oled valinud %files%. Vähemalt %min% nõutud.",
                                    clear: "Eemalda kõik",
                                    done: "Valmis",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            fr: {
                translations: {
                    uploading: "Envoi en cours... Merci de patienter.",
                    loadingInfo: "Chargement des informations...",
                    errors: {
                        default: "Erreur",
                        baddata: "Valeur incorrecte",
                        size: "Fichier trop volumineux",
                        upload: "Envoi impossible",
                        user: "Envoi annulé",
                        info: "Impossible de charger les informations",
                        image: "Seules les images sont autorisées",
                        createGroup: "Création d'1 groupe impossible",
                        deleted: "Le fichier a été supprimé",
                    },
                    draghere: "Glissez-déposez un fichier ici",
                    file: { one: "%1 fichier", other: "%1 fichiers" },
                    buttons: { cancel: "Annuler", remove: "Supprimer", choose: { files: { one: "Sélectionner un fichier", other: "Sélectionner des fichiers" }, images: { one: "Sélectionner une image", other: "Sélectionner des images" } } },
                    dialog: {
                        close: "Fermer",
                        openMenu: "Ouvrir le menu",
                        done: "Terminer",
                        showFiles: "Voir les fichiers",
                        tabs: {
                            names: {
                                "empty-pubkey": "Bienvenue",
                                preview: "Avant-première",
                                file: "Fichier en local",
                                url: "Une adresse web",
                                camera: "Caméra",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                gphotos: "Google Photos",
                                instagram: "Instagram",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: {
                                drag: "Glissez-déposez un fichier ici",
                                nodrop: "Envoyez des fichiers depuis votre ordinateur",
                                cloudsTip: "Stockage sur le cloud<br>et réseaux sociaux",
                                or: "ou",
                                button: "Choisir un fichier local",
                                also: "Vous pouvez également le sélectionner depuis",
                            },
                            url: { title: "Fichiers depuis le Web", line1: "Prenez n'importe quel fichier depuis un site web.", line2: "Saisissez simplement son adresse.", input: "Collez le lien ici...", button: "Envoi" },
                            camera: {
                                title: "Fichier depuis la caméra",
                                capture: "Prendre une photo",
                                mirror: "Miroir",
                                startRecord: "Enregistrer une vidéo",
                                stopRecord: "Arrêter",
                                cancelRecord: "Annuler",
                                retry: "Envoyer une nouvelle demande de permission",
                                pleaseAllow: {
                                    title: "Autorisez l'accès à votre appareil photo",
                                    text: "Vous avez été invité à autoriser l'accès à votre appareil photo. Pour prendre des photos avec votre caméra vous devez approuver cette demande.",
                                },
                                notFound: { title: "Aucun appareil photo détecté", text: "Il semblerait que vous n'ayez pas d'appareil photo connecté à cet appareil." },
                            },
                            preview: {
                                unknownName: "inconnu",
                                change: "Annuler",
                                back: "Retour",
                                done: "Ajouter",
                                unknown: { title: "Envoi en cours... Merci de patienter pour prévisualiser.", done: "Passer la prévisualisation et accepter" },
                                regular: { title: "Ajouter ce fichier ?", line1: "Vous êtes sur le point d'ajouter le fichier ci-dessus.", line2: "Merci de confirmer." },
                                image: { title: "Ajouter cette image ?", change: "Annuler" },
                                crop: { title: "Recadrer et ajouter cette image", done: "Terminer", free: "libre" },
                                video: { title: "Ajouter cette vidéo ?", change: "Annuler" },
                                error: {
                                    default: { title: "Oups!", text: "Quelque chose n'a pas fonctionné pendant l'envoi.", back: "Merci de bien vouloir recommencer" },
                                    image: { title: "Seules les images sont acceptées.", text: "Merci de bien vouloir recommencer avec un autre fichier.", back: "Choisir une image" },
                                    size: { title: "Le fichier sélectionné est trop volumineux.", text: "Merci de bien vouloir recommencer avec un autre fichier." },
                                    loadImage: { title: "Erreur", text: "Impossible de charger l'image" },
                                },
                                multiple: {
                                    title: "Vous avez choisi %files%",
                                    question: "Voulez vous ajouter tous ces fichiers ?",
                                    tooManyFiles: "Vous avez choisi trop de fichiers. %max% est le maximum.",
                                    tooFewFiles: "Vous avez choisi %fichiers%. %min% est le minimum.",
                                    clear: "Tout retirer",
                                    done: "Terminer",
                                    file: { preview: "Prévisualiser %file%", remove: "Supprimer %file%" },
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            he: {
                translations: {
                    uploading: "טוען... אנא המתן.",
                    loadingInfo: "טוען מידע...",
                    errors: {
                        default: "שגיאה",
                        baddata: "ערך שגוי",
                        size: "קובץ גדול מידי",
                        upload: "לא ניתן להעלות",
                        user: "העלאה בוטלה",
                        info: "לא ניתן לטעון מידע",
                        image: "ניתן להעלות רק תמונות",
                        createGroup: "לא ניתן ליצור קבוצה",
                        deleted: "הקובץ נמחק",
                    },
                    draghere: "שחרר כאן קובץ",
                    file: { one: "קובץ %1", other: "%1 קבצים" },
                    buttons: { cancel: "ביטול", remove: "הסר", choose: { files: { one: "בחר קובץ", other: "בחר קבצים" }, images: { one: "בחר תמונה", other: "בחר תמונות" } } },
                    dialog: {
                        done: "סיום",
                        showFiles: "הצג קבצים",
                        tabs: {
                            names: { facebook: "פייסבוק", dropbox: "דרופבוקס", gdrive: "כונן גוגל", instagram: "אינסטגרם", url: "לינק מהאינטרנט" },
                            file: { drag: "שחרר כאן קובץ", nodrop: "העלה קבצים מהמחשב", or: "או", button: "בחר קובץ מהמחשב", also: "ניתן לבחור גם מ" },
                            url: { title: "קובץ מהאינטרנט", line1: "גרור קובץ מהאינטרנט", line2: "ספק את כתובת הקובץ", input: "הדבק את כתובת הקובץ...", button: "העלה" },
                            preview: {
                                unknownName: "לא ידוע",
                                change: "ביטול",
                                back: "חזרה",
                                done: "הוסף",
                                unknown: { title: "מעלה... נא המתן לתצוגה מקדימה.", done: "דלג על תצוגה מקדימה" },
                                regular: { title: "להוסיף קובץ זה?", line1: "קובץ זה יועלה", line2: "נא אשר." },
                                image: { title: "להוסיף תמונה זו?", change: "ביטול" },
                                crop: { title: "חתוך והוסף תמונה זו", done: "סיום" },
                                error: {
                                    default: { title: "אופס!", text: "משהו השתבש בזמן ההעלאה.", back: "נא נסה שוב" },
                                    image: { title: "ניתן לקבל רק קבצי תמונות.", text: "נא נסה שוב עם קובץ אחר.", back: "בחר תמונה" },
                                    size: { title: "הקובץ שבחרת חורג מהגבול.", text: "נא נסה שוב עם קובץ אחר." },
                                    loadImage: { title: "שגיאה", text: "טעינת התמונה נכשלה" },
                                },
                                multiple: {
                                    title: "בחרת %files%",
                                    question: "אתה מעוניין להוסיף את כל הקבצים האלו?",
                                    tooManyFiles: "בחרת יותר מידי קבצים. יש לבחור מקסימום %max% קבצים.",
                                    tooFewFiles: "בחרת %files%. יש לבחור לפחות %min%.",
                                    clear: "הסר הכל",
                                    done: "סיום",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            is: {
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
                translations: {
                    uploading: "Hleð upp... Vinsamlegast bíðið.",
                    loadingInfo: "Hleð upp upplýsingum...",
                    errors: {
                        default: "Villa",
                        baddata: "Rangt gildi",
                        size: "Skráin er of stór",
                        upload: "Ekki tókst að hlaða upp skrá",
                        user: "Hætt var við",
                        info: "Ekki tókst að sækja upplýsingar",
                        image: "Myndir eru einungis leyfðar",
                        createGroup: "Ekki tókst að búa til hóp",
                        deleted: "Skrá hefur verið eytt",
                    },
                    draghere: "Dragðu skrá hingað",
                    file: { one: "%1 skrá", other: "%1 skráa" },
                    buttons: { cancel: "Hætta við", remove: "Fjarlægja", choose: { files: { one: "Veldu skrá", other: "Veldu skrár" }, images: { one: "Veldu mynd", other: "Veldu myndir" } } },
                    dialog: {
                        close: "Loka",
                        openMenu: "Opna valmynd",
                        done: "Búið",
                        showFiles: "Sjá skrár",
                        tabs: {
                            names: {
                                "empty-pubkey": "Velkomin/n/ð",
                                preview: "Forskoðun",
                                file: "Staðbundnar skrár",
                                url: "Beinn hlekkur",
                                camera: "Myndavél",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                gphotos: "Google Photos",
                                instagram: "Instagram",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: { drag: "dragðu & slepptu<br>skrám", nodrop: "Hlaða upp þínum skrám", cloudsTip: "Skýjaþjónustur<br>og samfélagsmiðlar", or: "eða", button: "Veldu staðbundna skrá", also: "eða veldu" },
                            url: { title: "Skrár af netinu", line1: "Sæktu hvaða skrá sem er frá netinu", line2: "Settu bara inn hlekk", input: "Límdu hlekkinn hér...", button: "Hlaða upp" },
                            camera: {
                                title: "Skrá frá myndavél",
                                capture: "Taktu mynd",
                                mirror: "Spegill",
                                startRecord: "Taktu upp myndband",
                                stopRecord: "Stopp",
                                cancelRecord: "Hætta við",
                                retry: "Biðja aftur um heimild",
                                pleaseAllow: {
                                    title: "Vinsamlegast gefðu heimild til þess að nota myndavélina",
                                    text: "Þú hefur verið beðin/n/ð um að gefa heimild til myndavélanotkunar frá þessari síðu<br>Til þess að geta tekið myndir er nauðsynlegt að gefa heimild.",
                                },
                                notFound: { title: "Engin myndavél fannst.", text: "Það lítur út fyrir að það sé engin myndavél tengd." },
                            },
                            preview: {
                                unknownName: "óþekkt",
                                change: "Hætta við",
                                back: "Bakka",
                                done: "Bæta við",
                                unknown: { title: "Hleð upp ... vinsamlegast bíðið eftir forskoðun. ", done: "Sleppa forskoðun og samþykkja" },
                                regular: { title: "Bæta þessari skrá við?", line1: "Þú ert að fara bæta þessari skrá við.", line2: "Vinsamlegast staðfestið." },
                                image: { title: "Bæta þessari mynd við?", change: "Hætta við" },
                                crop: { title: "Kroppa og bæta þessari mynd við?", done: "Búið", free: "frítt" },
                                video: { title: "Bæta þessu myndbandi við?", change: "Hætta við" },
                                error: {
                                    default: { title: "Úps!", text: "Eitthvað fór úrskeiðis.", back: "Vinsamlegast reyndu aftur" },
                                    image: { title: "Myndir eru einungis leyfðar.", text: "Vinsamlegast reyndu aftur.", back: "Velja mynd" },
                                    size: { title: "Skráin er of stór.", text: "Vinsamlegast reyndu aftur." },
                                    loadImage: { title: "Villa", text: "Gat ekki hlaðið upp mynd." },
                                },
                                multiple: {
                                    title: "Þú hefur valið %files%.",
                                    question: "Bæta við %files%?",
                                    tooManyFiles: "Þú hefur valið of margar skrár. %max% er hámarkið.",
                                    tooFewFiles: "Þú hefur valið %files%. Að minnsta kosti %min% er lágmarkið.",
                                    clear: "Fjarlægja allar skrár",
                                    done: "Bæta við",
                                    file: { preview: "Forskoða %file%", remove: "Fjarlægja %file%" },
                                },
                            },
                        },
                    },
                },
            },
            it: {
                translations: {
                    uploading: "Caricamento in corso... Si prega di attendere.",
                    loadingInfo: "Caricamento informazioni in corso...",
                    errors: {
                        default: "Errore",
                        baddata: "Valore errato",
                        size: "Il file è troppo grande",
                        upload: "Impossibile fare l’upload",
                        user: "Upload cancellato",
                        info: "Impossibile caricare le informazioni",
                        image: "Sono ammesse solo immagini",
                        createGroup: "Impossibile creare gruppo di file",
                        deleted: "Il file è stato eliminato",
                    },
                    draghere: "Trascina un file qui",
                    file: { one: "file %1", other: "file %1" },
                    buttons: { cancel: "Cancella", remove: "Rimuovi", choose: { files: { one: "Seleziona un file", other: "Seleziona file" }, images: { one: "Seleziona un’immagine", other: "Seleziona immagini" } } },
                    dialog: {
                        done: "Fatto",
                        showFiles: "Mostra file",
                        tabs: {
                            names: { "empty-pubkey": "Benvenuto", preview: "Anteprima", file: "File locali", url: "Link arbitrari", camera: "Fotocamera" },
                            file: {
                                drag: "Trascina un file qui",
                                nodrop: "Carica file dal tuo computer",
                                cloudsTip: "Salvataggi nel cloud<br>e servizi sociali",
                                or: "o",
                                button: "Seleziona un file locale",
                                also: "Puoi anche scegliere da",
                            },
                            url: { title: "File dal web", line1: "Preleva un file dal web.", line2: "È sufficiente fornire il link.", input: "Incolla il tuo link qui...", button: "Carica" },
                            camera: {
                                capture: "Scatta una foto",
                                mirror: "Specchio",
                                retry: "Richiedi di nuovo le autorizzazioni",
                                pleaseAllow: {
                                    title: "Consenti l’accesso alla tua fotocamera",
                                    text: "Ti è stato richiesto di consentire l’accesso alla fotocamera da questo sito. Per scattare le foto con la tua fotocamera devi accettare questa richiesta.",
                                },
                                notFound: { title: "Nessuna fotocamera rilevata", text: "Non risulta che tu non abbia una fotocamera collegata a questo dispositivo." },
                            },
                            preview: {
                                unknownName: "sconosciuto",
                                change: "Cancella",
                                back: "Indietro",
                                done: "Aggiungi",
                                unknown: { title: "Caricamento in corso... Attendi l’anteprima.", done: "Salta l’anteprima e accetta" },
                                regular: { title: "Vuoi aggiungere questo file?", line1: "Stai per aggiungere il file sopra.", line2: "Conferma." },
                                image: { title: "Vuoi aggiungere questa immagine?", change: "Cancella" },
                                crop: { title: "Ritaglia e aggiungi questa immagine", done: "Fatto", free: "gratis" },
                                error: {
                                    default: { title: "Ops!", text: "Si è verificato un problema durante l’upload.", back: "Si prega di riprovare" },
                                    image: { title: "Sono accettati solo file immagine.", text: "Riprova con un altro file.", back: "Scegli immagine" },
                                    size: { title: "Il file selezionato supera il limite.", text: "Riprova con un altro file." },
                                    loadImage: { title: "Errore", text: "Impossibile caricare l’immagine" },
                                },
                                multiple: {
                                    title: "Hai selezionato %files%",
                                    question: "Vuoi aggiungere tutti questi file?",
                                    tooManyFiles: "Hai selezionato troppi file. %max% è il massimo.",
                                    tooFewFiles: "Hai selezionato %files%. È richiesto almeno %min%.",
                                    clear: "Rimuovi tutto",
                                    done: "Fatto",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            ja: {
                translations: {
                    uploading: "アップロードしています… 完了までお待ち下さい。",
                    loadingInfo: "読み込み中…",
                    errors: {
                        default: "エラー",
                        baddata: "間違った値",
                        size: "ファイルが大きすぎます",
                        upload: "アップロードできませんでした",
                        user: "アップロードがキャンセルされました",
                        info: "読み込みに失敗しました",
                        image: "アップロードできるのは画像ファイルのみです",
                        createGroup: "グループの作成に失敗しました",
                        deleted: "削除されたファイルです",
                    },
                    draghere: "ここにファイルをドロップ",
                    file: { other: "%1ファイル" },
                    buttons: { cancel: "キャンセル", remove: "削除", choose: { files: { one: "ファイルを選択", other: "ファイルを選択" }, images: { one: "画像を選択", other: "画像を選択" } } },
                    dialog: {
                        done: "完了",
                        showFiles: "ファイルを表示",
                        tabs: {
                            names: { preview: "プレビュー", file: "ローカルファイル", url: "URLを直接入力" },
                            file: {
                                drag: "ここにファイルをドロップ",
                                nodrop: "ファイルを選択してアップロード",
                                cloudsTip: "クラウドストレージ<br>およびソーシャルサービス",
                                or: "もしくは",
                                button: "ローカルのファイルを選択",
                                also: "次からも選択可能です：",
                            },
                            url: { title: "ウェブ上のファイル", line1: "ウェブ上からファイルを取得します。", line2: "URLを入力してください。", input: "ここにURLを貼り付けしてください…", button: "アップロード" },
                            preview: {
                                unknownName: "不明なファイル",
                                change: "キャンセル",
                                back: "戻る",
                                done: "追加",
                                unknown: { title: "アップロードしています… プレビューの表示をお待ちください。", done: "プレビューの確認をスキップして完了" },
                                regular: { title: "このファイルを追加しますか？", line1: "こちらのファイルを追加しようとしています。", line2: "確認してください。" },
                                image: { title: "この画像を追加しますか？", change: "キャンセル" },
                                crop: { title: "画像の切り取りと追加", done: "完了", free: "リセット" },
                                error: {
                                    default: { title: "失敗しました", text: "アップロード中に不明なエラーが発生しました。", back: "もう一度お試し下さい" },
                                    image: { title: "画像ファイルのみ許可されています", text: "他のファイルで再度お試し下さい。", back: "画像を選択" },
                                    size: { title: "ファイルサイズが大きすぎます。", text: "他のファイルで再度お試し下さい。" },
                                    loadImage: { title: "エラー", text: "画像のロードに失敗しました。" },
                                },
                                multiple: {
                                    title: "%files%つのファイルを選択中",
                                    question: "これら全てのファイルを追加しますか？",
                                    tooManyFiles: "選択ファイルが多すぎます。%max%つ以下にしてください。",
                                    tooFewFiles: "選択ファイルが少なすぎます。%files%つ選択中です。少なくとも%min%つ選択してください。",
                                    clear: "全て削除",
                                    done: "完了",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return "other";
                },
            },
            ko: {
                translations: {
                    uploading: "업로드중 기다려주세요",
                    loadingInfo: "정보 로드중...",
                    errors: {
                        default: "오류",
                        baddata: "잘못된 값",
                        size: "파일용량 초과",
                        upload: "업로드 실패",
                        user: "업로드 취소됨",
                        info: "정보를 불러올 수 없습니다",
                        image: "허용된 이미지만 가능",
                        createGroup: "파일 그룹 만들기 실패",
                        deleted: "파일이 삭제되었습니다",
                    },
                    draghere: "여기에 끌어다 놓기",
                    file: { one: "%1 파일", other: "%1 파일" },
                    buttons: { cancel: "취소", remove: "삭제", choose: { files: { one: "파일 첨부", other: "파일 첨부" }, images: { one: "이미지 첨부", other: "이미지 첨부" } } },
                    dialog: {
                        close: "닫기",
                        openMenu: "메뉴 열기",
                        done: "완료",
                        showFiles: "파일 표시",
                        tabs: {
                            names: {
                                "empty-pubkey": "반갑습니다",
                                preview: "미리보기",
                                file: "파일 첨부",
                                url: "링크 연결",
                                camera: "카메라",
                                facebook: "페이스북",
                                dropbox: "드롭박스",
                                gdrive: "구글 드라이브",
                                gphotos: "구글 포토",
                                instagram: "인스타그램",
                                evernote: "에버노트",
                                box: "박스",
                                onedrive: "스카이드라이브",
                                flickr: "플리커",
                            },
                            file: { drag: "모든 파일을<br>드래그 & 드롭", nodrop: "파일 업로드", cloudsTip: "클라우드 스토리지 및 소셜", or: "또는", button: "파일 선택", also: "또는 선택하십시오" },
                            url: { title: "웹에서 파일 링크 연결", line1: "웹에서 모든파일을 가져옵니다", line2: "링크만 연결합니다.", input: "링크 붙여 넣기...", button: "업로드" },
                            camera: {
                                title: "카메라 연결",
                                capture: "사진 찍기",
                                mirror: "거울",
                                startRecord: "비디오 녹화",
                                stopRecord: "정지",
                                cancelRecord: "취소",
                                retry: "재 시도",
                                pleaseAllow: { title: "카메라 접근 허용", text: "카메라 접근을 허용하시겠습니까?<br>승인 요청을 해주셔야 합니다" },
                                notFound: { title: "카메라가 없습니다", text: "이 기기에 연결된 카메라가 없습니다" },
                            },
                            preview: {
                                unknownName: "알수없음",
                                change: "취소",
                                back: "뒤로",
                                done: "추가",
                                unknown: { title: "업로드중, 기다려주세요", done: "미리보기 건너뛰기" },
                                regular: { title: "이 파일을 추가하시겠습니까?", line1: "위 파일을 추가하려고 합니다", line2: "확인 하십시오" },
                                image: { title: "이미지를 추가하시겠습니까?", change: "취소" },
                                crop: { title: "이미지 자르기 및 추가", done: "완료", free: "무료" },
                                video: { title: "비디오를 추가하시겠습니까?", change: "취소" },
                                error: {
                                    default: { title: "죄송합니다", text: "업로드에 문제가 있습니다", back: "다시 시도해 주세요" },
                                    image: { title: "이미지 파일만 허용됩니다", text: "다른 파일로 다시 시도하세요", back: "이미지 선택" },
                                    size: { title: "선택한 파일이 한도 초과하였습니다", text: "다른 파일로 다시 시도하세요" },
                                    loadImage: { title: "오류", text: "이미지를 불러올 수 없습니다" },
                                },
                                multiple: {
                                    title: "%files%을(를) 선택하였습니다",
                                    question: "%files%을 추가하시겠습니까?",
                                    tooManyFiles: "너무 많은 파일을 추가하셨습니다. %max%가 최대 한도입니다",
                                    tooFewFiles: "%files%을(를) 선택하였습니다 최소 %min%이상 필요합니다",
                                    clear: "모두 삭제",
                                    done: "추가",
                                    file: { preview: "%file% 미리보기", remove: "%file% 삭제" },
                                },
                            },
                        },
                        footer: { text: "powered by", link: "uploadcare" },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            lv: {
                translations: {
                    uploading: "Augšupielādē... Lūdzu, gaidiet.",
                    errors: { default: "Kļūda", image: "Atļauti tikai attēli" },
                    draghere: "Velciet failus šeit",
                    file: { zero: "%1 failu", one: "%1 fails", other: "%1 faili" },
                    buttons: { cancel: "Atcelt", remove: "Dzēst" },
                    dialog: {
                        title: "Ielādēt jebko no jebkurienes",
                        poweredby: "Darbināts ar",
                        support: { images: "Attēli", audio: "Audio", video: "Video", documents: "Dokumenti" },
                        tabs: {
                            file: { title: "Mans dators", line1: "Paņemiet jebkuru failu no jūsu datora.", line2: "Izvēlēties ar dialogu vai ievelciet iekšā.", button: "Meklēt failus" },
                            url: { title: "Faili no tīmekļa", line1: "Paņemiet jebkuru failu no tīmekļa.", line2: "Tikai uzrādiet linku.", input: "Ielīmējiet linku šeit...", button: "Ielādēt" },
                        },
                    },
                },
                pluralize: function (e) {
                    return 0 === e ? "zero" : e % 10 == 1 && e % 100 != 11 ? "one" : "other";
                },
            },
            nb: {
                translations: {
                    uploading: "Laster opp... Vennligst vent.",
                    loadingInfo: "Laster inn info...",
                    errors: {
                        default: "Feil",
                        baddata: "Ugyldig verdi",
                        size: "Filen er for stor",
                        upload: "Kan ikke laste opp",
                        user: "Opplasting avbrutt",
                        info: "Kan ikke laste inn info",
                        image: "Kun bilder er tillatt",
                        createGroup: "Kan ikke opprette filgruppe",
                        deleted: "Filen er slettet",
                    },
                    draghere: "Dra en fil hit",
                    file: { one: "%1 fil", other: "%1 filer" },
                    buttons: { cancel: "Avbryt", remove: "Fjern", choose: { files: { one: "Velg en fil", other: "Velg filer" }, images: { one: "Velg et bilde", other: "Velg bilder" } } },
                    dialog: {
                        done: "Ferdig",
                        showFiles: "Vis filer",
                        tabs: {
                            names: { preview: "Forhåndsvising", file: "Lokale filer", url: "Direktelink" },
                            file: { drag: "Dra og slipp en fil her", nodrop: "Last opp filer fra datamaskinen", cloudsTip: "Skylagring<br>og sosiale tjenester", or: "eller", button: "Velg en lokal fil", also: "Du kan også velge det fra" },
                            url: { title: "Filer fra internett", line1: "Velg hvilken som helst fil fra internett.", line2: "Bare gi oss linken.", input: "Lim inn linken her...", button: "Last opp" },
                            preview: {
                                unknownName: "ukjent",
                                change: "Avbryt",
                                back: "Tilbake",
                                done: "Legg til",
                                unknown: { title: "Laster opp... Vennligst vent på forhåndsvisning.", done: "Hopp over forhåndsvisning og godkjenn" },
                                regular: { title: "Legge til denne filen?", line1: "Filen legges nå til.", line2: "Vennligst bekreft." },
                                image: { title: "Legge til dette bildet?", change: "Avbryt" },
                                crop: { title: "Kutt og legg til dette bildet", done: "Ferdig", free: "frigjør" },
                                error: {
                                    default: { title: "Ops!", text: "Noe gikk galt under opplastingen.", back: "Vennligst prøv igjen" },
                                    image: { title: "Kun bilder er akseptert.", text: "Prøv igjen med en annen fil.", back: "Velg bilde" },
                                    size: { title: "Den valgte filen overskrider tilatt størrelse.", text: "Vennligst prøv igjen med en annen fil." },
                                    loadImage: { title: "Feil", text: "Kan ikke laste bildet" },
                                },
                                multiple: {
                                    title: "Du har valgt %files%",
                                    question: "Ønsker du å legge til alle filene?",
                                    tooManyFiles: "Du har valgt for mange filer. %max% er maksimum.",
                                    tooFewFiles: "Du har valgt %files%. Minimum %min% er påkrevd.",
                                    clear: "Fjern alle",
                                    done: "Ferdig",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            nl: {
                translations: {
                    uploading: "Uploaden... Even geduld.",
                    loadingInfo: "Laden informatie...",
                    errors: {
                        default: "Fout",
                        baddata: "Ongeldige waarde",
                        size: "Bestand is te groot",
                        upload: "Kan niet uploaden",
                        user: "Upload geannuleerd",
                        info: "Kan informatie niet laden",
                        image: "Alleen afbeeldingen toegestaan",
                        createGroup: "Kan bestandsgroep niet maken",
                        deleted: "Bestand is verwijderd",
                    },
                    draghere: "Drop hier een bestand",
                    file: { one: "%1 bestand", other: "%1 bestanden" },
                    buttons: { cancel: "Annuleren", remove: "Verwijderen", choose: { files: { one: "Kies een bestand", other: "Kies bestanden" }, images: { one: "Kies een afbeelding", other: "Kies afbeeldingen" } } },
                    dialog: {
                        done: "Klaar",
                        showFiles: "Toon bestanden",
                        tabs: {
                            names: { preview: "Voorvertoning", file: "Computer", url: "Directe links" },
                            file: { drag: "Drop hier een bestand", nodrop: "Upload bestanden van je computer", or: "of", button: "Selecteer een bestand op je computer", also: "Je kan ook selecteren van" },
                            camera: { title: "Bestand van webcamera", retry: "Opnieuw toegang aanvragen" },
                            url: { title: "Bestanden op het web", line1: "Selecteer een bestand op het web.", line2: "Voer de link in.", input: "Plak de link hier...", button: "Upload" },
                            preview: {
                                unknownName: "onbekend",
                                change: "Annuleren",
                                back: "Terug",
                                done: "Toevoegen",
                                unknown: { title: "Uploaden... Wacht op de voorvertoning.", done: "Voorvertoning overslaan an accepteren" },
                                regular: { title: "Dit bestand toevoegen?", line1: "Je staat op het punt bovenstaand bestand toe te voegen.", line2: "Bevestig" },
                                image: { title: "Voeg deze afbeelding toe?", change: "Annuleren" },
                                crop: { title: "Afbeelding bijknippen en toevoegen", done: "Klaar" },
                                error: {
                                    default: { title: "Oeps!", text: "Er is een fout opgetreden tijdens het uploaden.", back: "Probeer opnieuw" },
                                    image: { title: "Alleen afbeeldingen worden geaccepteerd.", text: "Probeer opnieuw met een andere bestand.", back: "Selecteer afbeelding" },
                                    size: { title: "Het geselecteerd bestand is groter dan de limiet.", text: "Probeer opnieuw met een andere bestand." },
                                    loadImage: { title: "Fout", text: "Kan afbeelding niet laden" },
                                },
                                multiple: {
                                    title: "Je hebt de volgende bestanden geselecteerd %files%",
                                    question: "Wil je al deze bestanden toevoegen?",
                                    tooManyFiles: "Je hebt teveel bestanden geselecteerd. %max% is het maximum.",
                                    tooFewFiles: "Je hebt de volgende bestanden geselecteerd %files%. Minimaal %min% is verplicht.",
                                    clear: "Verwijder alle bestanden",
                                    done: "Klaar",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            pl: {
                translations: {
                    uploading: "Przesyłanie... Proszę czekać.",
                    loadingInfo: "Ładowanie...",
                    errors: {
                        default: "Błąd",
                        baddata: "Niepoprawna wartość",
                        size: "Plik zbyt duży",
                        upload: "Nie udało się przesłać",
                        user: "Przesyłanie anulowane",
                        info: "Nie udało się załadować informacji",
                        image: "Dozwolone są tylko obrazy",
                        createGroup: "Nie udało się utworzyć grupy plików",
                        deleted: "Plik został usunięty",
                    },
                    draghere: "Upuść plik tutaj",
                    file: { one: "%1 plik", few: "%1 pliki", many: "%1 plików" },
                    buttons: { cancel: "Anuluj", remove: "Usuń", choose: { files: { one: "Wybierz plik", other: "Wybierz pliki" }, images: { one: "Wybierz obraz", other: "Wybierz obrazy" } } },
                    dialog: {
                        close: "Zamknij",
                        openMenu: "Otwórz menu",
                        done: "Wykonano",
                        showFiles: "Pokaż pliki",
                        tabs: {
                            names: { "empty-pubkey": "Witaj", preview: "Podgląd", file: "Pliki lokalne", url: "Plik z Sieci", camera: "Aparat" },
                            file: {
                                drag: "Upuść plik tutaj",
                                nodrop: "Prześlij pliki z Twojego komputera",
                                cloudsTip: "Dane w chmurze<br>i sieci społecznościowe",
                                or: "lub",
                                button: "Wybierz plik lokalny",
                                also: "Możesz również wybrać z",
                            },
                            url: { title: "Pliki z Sieci", line1: "Złap jakikolwiej plik z sieci.", line2: "Podaj adres.", input: "Wklej link...", button: "Prześlij" },
                            camera: {
                                title: "Plik z kamery internetowej",
                                capture: "Zrób zdjęcie",
                                mirror: "Odbicie lustrzane",
                                startRecord: "Nagraj film",
                                stopRecord: "Zakończ",
                                cancelRecord: "Anuluj",
                                retry: "Poproś ponownie o dostęp",
                                pleaseAllow: { title: "Prośba o udostępnienie aparatu", text: "Zostałeś poproszony przez tę stronę o dostęp do aparatu. Aby robić zdjecia, musisz zaakceptować tę prośbę." },
                                notFound: { title: "Nie wykryto aparatu.", text: "Wygląda na to, że nie masz podłączonego aparatu do tego urządzenia." },
                            },
                            preview: {
                                unknownName: "nieznany",
                                change: "Anuluj",
                                back: "Wstecz",
                                done: "Dodaj",
                                unknown: { title: "Przesyłanie... Proszę czekać na podgląd.", done: "Omiń podgląd i zaakceptuj." },
                                regular: { title: "Dodać ten plik?", line1: "Zamierzasz dodać nowy plik.", line2: "Potwierdź, proszę." },
                                image: { title: "Dodać ten obraz?", change: "Anuluj" },
                                crop: { title: "Przytnij i dodaj ten obraz", done: "Wykonano", free: "wolny" },
                                video: { title: "Dodać ten film?", change: "Anuluj" },
                                error: {
                                    default: { title: "Oops!", text: "Coś poszło nie tak podczas przesyłania.", back: "Spróbuj ponownie" },
                                    image: { title: "Akceptowane są tylko obrazy.", text: "Spróbuj ponownie z innym plikiem.", back: "Wybierz obraz" },
                                    size: { title: "Plik, który wybrałeś, przekracza dopuszczalny rozmiar", text: "Spróbuj ponownie z innym plikiem." },
                                    loadImage: { title: "Błąd", text: "Nie udało się załadować obrazu" },
                                },
                                multiple: {
                                    title: "Wybrałeś %files%",
                                    question: "Czy chcesz dodać wszystkie te pliki?",
                                    tooManyFiles: "Wybrałeś zbyt wiele plików. Maksimum to %max%.",
                                    tooFewFiles: "Wybrałeś %files%. Wymagane jest co najmniej %min%.",
                                    clear: "Usuń wszystkie",
                                    done: "Wykonano",
                                    file: { preview: "Zobacz %file%", remove: "Usuń %file%" },
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    var t;
                    return 1 === e ? "one" : (t = e % 10) >= 2 && t <= 4 && 1 != ((e / 10) % 10 | 0) ? "few" : "many";
                },
            },
            pt: {
                translations: {
                    uploading: "Fazendo upload... Aguarde.",
                    loadingInfo: "Carregando informações...",
                    errors: {
                        default: "Erro",
                        baddata: "Valor incorreto",
                        size: "Arquivo muito grande",
                        upload: "Não foi possível fazer o upload",
                        user: "Upload cancelado",
                        info: "Não foi possível carregar as informações",
                        image: "Apenas imagens são permitidas",
                        createGroup: "Não foi possível criar o grupo de arquivos",
                        deleted: "O arquivo foi excluído",
                    },
                    draghere: "Arraste um arquivo aqui",
                    file: { one: "%1 arquivo", other: "%1 arquivos" },
                    buttons: { cancel: "Cancelar", remove: "Excluir", choose: { files: { one: "Escolha um arquivo", other: "Escolha arquivos" }, images: { one: "Escolha uma imagem", other: "Escolha imagens" } } },
                    dialog: {
                        done: "OK",
                        showFiles: "Mostrar arquivos",
                        tabs: {
                            names: { preview: "Visualizar", file: "Computador", url: "Link da web" },
                            file: { drag: "Arraste um arquivo aqui", nodrop: "Faça upload de arquivos do seu computador", or: "ou", button: "Escolha um arquivo do computador", also: "Você também pode escolher arquivos de" },
                            url: { title: "Arquivos da web", line1: "Faça upload de qualquer arquivo da web.", line2: "Apenas informe o link.", input: "Cole seu link aqui...", button: "Upload" },
                            camera: {
                                capture: "Tirar uma foto",
                                mirror: "Espelhar",
                                startRecord: "Gravar um vídeo",
                                stopRecord: "Parar",
                                cancelRecord: "Cancelar",
                                retry: "Requisitar permissão novamente",
                                pleaseAllow: {
                                    title: "Por favor permita o acesso a sua câmera",
                                    text: "Você foi solicitado a permitir o acesso à câmera a partir deste site. Para tirar fotos com sua câmera, você deve aprovar este pedido.",
                                },
                                notFoud: { title: "Câmera não detectada", text: "Parece que você não tem uma câmera conectada a este dispositivo" },
                            },
                            preview: {
                                unknownName: "desconhecido",
                                change: "Cancelar",
                                back: "Voltar",
                                done: "Adicionar",
                                unknown: { title: "Fazendo upload... Aguarde a visualização.", done: "Pular visualização e aceitar" },
                                regular: { title: "Adicionar esse arquivo?", line1: "Você está prestes a adicionar o arquivo acima.", line2: "Por favor, confirme." },
                                image: { title: "Adicionar essa imagem?", change: "Cancelar" },
                                crop: { title: "Cortar e adicionar essa imagem", done: "OK", free: "livre" },
                                error: {
                                    default: { title: "Oops!", text: "Alguma coisa deu errado durante o upload.", back: "Por favor, tente novamente" },
                                    image: { title: "Apenas arquivos de imagem são aceitos.", text: "Por favor, tente novamente com outro arquivo.", back: "Escolher a imagem" },
                                    size: { title: "O arquivo que você escolheu excede o limite.", text: "Por favor, tente novamente com outro arquivo." },
                                    loadImage: { title: "Erro", text: "Não foi possível carregar a imagem" },
                                },
                                multiple: { title: "Você escolheu", question: "Você quer adicionar todos esses arquivos?", clear: "Excluir todos", done: "OK" },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            ro: {
                translations: {
                    uploading: "Se încarcă... Răbdare.",
                    loadingInfo: "Info încărcare...",
                    errors: {
                        default: "Eroare",
                        baddata: "Valoare incorectă",
                        size: "Fișier prea mare",
                        upload: "Nu pot încărca",
                        user: "Încărcare anulată",
                        info: "Nu pot încărca info",
                        image: "Doar imagini, vă rog",
                        createGroup: "Nu pot crea grup de fișiere",
                        deleted: "Fișierul a fost șters",
                    },
                    draghere: "Trage un fișier aici",
                    file: { one: "%1 fișier", other: "%1 fișiere" },
                    buttons: { cancel: "Anulare", remove: "Șterge", choose: { files: { one: "Alege un fișier", other: "Alege fișiere" }, images: { one: "Alege o imagine", other: "Alege imagini" } } },
                    dialog: {
                        close: "Închide",
                        openMenu: "Deschide meniu",
                        done: "Gata",
                        showFiles: "Arată fișiere",
                        tabs: {
                            names: {
                                "empty-pubkey": "Bine ai venit",
                                preview: "Previzualizare",
                                file: "Fișiere locale",
                                url: "Link direct",
                                camera: "Camera",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                gphotos: "Google Photos",
                                instagram: "Instagram",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: { drag: "trage aici<br>fișierele", nodrop: "Încarcă fișiere din computer", cloudsTip: "Cloud <br>și rețle sociale", or: "sau", button: "Alege un fișier local", also: "sau alege din" },
                            url: { title: "Fișiere din Web", line1: "Ia orice fișier din Web.", line2: "Trebuie să ai doar linkul.", input: "Lipește linkul aici...", button: "Încarcă" },
                            camera: {
                                title: "Fișier din camera web",
                                capture: "Fă o fotografie",
                                mirror: "Mirror",
                                startRecord: "Înregistrează un video",
                                stopRecord: "Stop",
                                cancelRecord: "Anulează",
                                retry: "Cere permisiune din nou",
                                pleaseAllow: { title: "Te rog sa-mi dai acces la cameră", text: "Ai fost rugat să dai acces la cameră de acest site.<br>Pentru a putea face fotografii cu camera, trebuie să aprobi această cerere." },
                                notFound: { title: "Nicio cameră detectată", text: "Se pare că nu ai nicio cameră atașată acestui device." },
                            },
                            preview: {
                                unknownName: "necunoscut",
                                change: "Anulează",
                                back: "Înapoi",
                                done: "Adaugă",
                                unknown: { title: "Se încarcă... Te rog așteaptă previzualizarea.", done: "Sari peste previzualizare și acceptă" },
                                regular: { title: "Adaug acest fișier?", line1: "Ești pe punctul de a adăuga fișierul de mai sus.", line2: "Te rog confirmă." },
                                image: { title: "Adaug această imagine?", change: "Anulează" },
                                crop: { title: "Decupează și adaugă aceasta imagine", done: "Gata", free: "gratis" },
                                video: { title: "Adaug acest video?", change: "anulează" },
                                error: {
                                    default: { title: "Oops!", text: "A intervenit o problemă la încărcare.", back: "te rog încearcă din nou" },
                                    image: { title: "Sunt acceptate doar imagini.", text: "Te rog încearcă din nou cu un alt fișier.", back: "Alege imagine" },
                                    size: { title: "Fișierul selectat de tine este prea mare.", text: "Te rog să încerci cu alt fișier." },
                                    loadImage: { title: "Eroare", text: "Nu pot încărca imaginea" },
                                },
                                multiple: {
                                    title: "Ai ales %files%.",
                                    question: "Adaug %files%?",
                                    tooManyFiles: "Ai ales prea multe fișiere. %max% is maximum.",
                                    tooFewFiles: "Ai ales %files%. Minimul este %min% .",
                                    clear: "Șterge toate",
                                    done: "Adaugă",
                                    file: { preview: "Previzualizare %file%", remove: "Șterge %file%" },
                                },
                            },
                        },
                        footer: { text: "powered by", link: "uploadcare" },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            ru: {
                translations: {
                    uploading: "Идет загрузка",
                    loadingInfo: "Загрузка информации...",
                    errors: {
                        default: "Ошибка",
                        baddata: "Некорректные данные",
                        size: "Слишком большой файл",
                        upload: "Ошибка при загрузке",
                        user: "Загрузка прервана",
                        info: "Ошибка при загрузке информации",
                        image: "Разрешены только изображения",
                        createGroup: "Не удалось создать группу файлов",
                        deleted: "Файл удалён",
                    },
                    draghere: "Перетащите файл сюда",
                    file: { one: "%1 файл", few: "%1 файла", many: "%1 файлов" },
                    buttons: { cancel: "Отмена", remove: "Удалить", choose: { files: { one: "Выбрать файл", other: "Выбрать файлы" }, images: { one: "Выбрать изображение", other: "Выбрать изображения" } } },
                    dialog: {
                        done: "Готово",
                        showFiles: "Показать файлы",
                        tabs: {
                            names: { preview: "Предпросмотр", "empty-pubkey": "Приветствие", file: "Локальные файлы", vk: "ВКонтакте", url: "Ссылка", camera: "Камера" },
                            file: {
                                drag: "Перетащите файл сюда",
                                nodrop: "Загрузка файлов с вашего компьютера",
                                cloudsTip: "Облачные хранилища<br>и социальные сети",
                                or: "или",
                                button: "Выберите локальный файл",
                                also: "Вы также можете загрузить файлы, используя:",
                            },
                            url: { title: "Файлы с других сайтов", line1: "Загрузите любой файл из сети.", line2: "", input: "Укажите здесь ссылку...", button: "Загрузить" },
                            camera: {
                                title: "Файл из видеокамеры",
                                capture: "Сделать снимок",
                                mirror: "Отразить",
                                retry: "Повторно запросить разрешение",
                                pleaseAllow: { title: "Пожалуйста, разрешите доступ к камере", text: "Для того, чтобы сделать снимок, мы запросили разрешение на доступ к камере с этого сайта." },
                                notFound: { title: "Камера не найдена", text: "Скорее всего камера не подключена или не настроена." },
                            },
                            preview: {
                                unknownName: "неизвестно",
                                change: "Отмена",
                                back: "Назад",
                                done: "Добавить",
                                unknown: { title: "Загрузка... Пожалуйста подождите.", done: "Пропустить предварительный просмотр" },
                                regular: { title: "Загрузить этот файл?", line1: "Вы собираетесь добавить этот файл:", line2: "Пожалуйста, подтвердите." },
                                image: { title: "Добавить это изображение?", change: "Отмена" },
                                video: { title: "Добавить это видео?", change: "Отмена" },
                                crop: { title: "Обрезать и добавить это изображение", done: "Готово", free: "произв." },
                                error: {
                                    default: { title: "Ой!", text: "Что-то пошло не так во время загрузки.", back: "Пожалуйста, попробуйте ещё раз" },
                                    image: { title: "Можно загружать только изображения.", text: "Попробуйте загрузить другой файл.", back: "Выберите изображение" },
                                    size: { title: "Размер выбранного файла превышает лимит.", text: "Попробуйте загрузить другой файл." },
                                    loadImage: { title: "Ошибка", text: "Изображение не удалось загрузить" },
                                },
                                multiple: {
                                    title: "Вы выбрали %files%",
                                    question: "Добавить все эти файлы?",
                                    tooManyFiles: "Вы выбрали слишком много файлов. %max% максимум.",
                                    tooFewFiles: "Вы выбрали %files%. Нужно не меньше %min%.",
                                    clear: "Удалить все",
                                    done: "Добавить",
                                    file: { preview: "Предпросмотр %file%", remove: "Удалить %file%" },
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 == ((e / 10) % 10 | 0) || e % 10 == 0 || e % 10 > 4 ? "many" : e % 10 == 1 ? "one" : "few";
                },
            },
            sk: {
                translations: {
                    uploading: "Nahrávam... Prosím počkajte.",
                    loadingInfo: "Nahrávam informácie...",
                    errors: {
                        default: "Chyba",
                        baddata: "Nesprávna hodnota",
                        size: "Súbor je príliš veľký",
                        upload: "Nedá sa nahrať",
                        user: "Nahrávanie bolo zrušené",
                        info: "Informácie sa nedajú nahrať",
                        image: "Povolené sú len obrázky",
                        createGroup: "Nie je možné vytvoriť priečinok",
                        deleted: "Súbor bol odstránený",
                    },
                    draghere: "Sem presuňte súbor",
                    file: { one: "%1 súbor", few: "%1 súbory", other: "%1 súborov" },
                    buttons: { cancel: "Zrušiť", remove: "Odstrániť", choose: { files: { one: "Vyberte súbor", other: "Vyberte súbory" }, images: { one: "Vyberte obrázok", other: "Vyberte obrázky" } } },
                    dialog: {
                        close: "Zavrieť",
                        openMenu: "Otvoriť menu",
                        done: "Hotovo",
                        showFiles: "Ukázať súbory",
                        tabs: {
                            names: {
                                "empty-pubkey": "Vitajte",
                                preview: "Náhľad",
                                file: "Z počítača",
                                url: "Z internetu",
                                camera: "Kamera",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Disk Google",
                                gphotos: "Google Obrázky",
                                instagram: "Instagram",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: {
                                drag: "presuňte a vložte<br>akékoľvek súbory",
                                nodrop: "Nahrajte súbory z vášho&nbsp;počítača",
                                cloudsTip: "Cloud úložiská<br>a sociálne siete",
                                or: "alebo",
                                button: "Vyberte súbor z počítača",
                                also: "alebo vyberte z",
                            },
                            url: { title: "Súbory z internetu", line1: "Uložte akýkoľvek súbor z internetu.", line2: "Stačí pridať odkaz na neho.", input: "Vložte svoj odkaz sem...", button: "Nahrať" },
                            camera: {
                                title: "Súbor z webkamery",
                                capture: "Odfotiť",
                                mirror: "Zrkadliť",
                                startRecord: "Natočte video",
                                stopRecord: "Prestať natáčať",
                                cancelRecord: "Zrušiť",
                                retry: "Znovu požiadať o prístup",
                                pleaseAllow: { title: "Prosím povoľte prístup k vašej kamere", text: "Boli ste vyzvaní aby ste umožnili tejto stránke prístup ku kamere.<br>Prístup musíte povolit aby ste mohli fotiť s vašou kamerou." },
                                notFound: { title: "Kamera nebola nájdená", text: "Zdá sa, že k tomuto zariadeniu nemáte pripojenú kameru." },
                            },
                            preview: {
                                unknownName: "neznámy",
                                change: "Zrušiť",
                                back: "Späť",
                                done: "Pridať",
                                unknown: { title: "Nahráva sa... Prosím počkajte na náhľad.", done: "Preskočiť náhľad a nahrať" },
                                regular: { title: "Pridať tento súbor?", line1: "Chystáte sa pridať vyššie uvedený súbor.", line2: "Prosím potvrďte váš výber." },
                                image: { title: "Pridať tento obrázok?", change: "Zrušiť" },
                                crop: { title: "Orezať a pridať túto fotku", done: "Hotovo", free: "obnoviť" },
                                video: { title: "Pridať toto video?", change: "Zrušiť" },
                                error: {
                                    default: { title: "Ejha!", text: "Pri nahrávaní sa vyskytla chyba.", back: "Skúste to znovu" },
                                    image: { title: "Je možné nahrávať len obrázky", text: "Skúste to znovu s iným súborom.", back: "Vybrať obrázok" },
                                    size: { title: "Súbor, ktorý ste vybrali presahuje povolenú veľkosť.", text: "Skúste to znovu s iným súborom." },
                                    loadImage: { title: "Chyba", text: "Obrázok nie je možné vyhľadať" },
                                },
                                multiple: {
                                    title: "Vybrali ste %files%.",
                                    question: "Pridať %files%?",
                                    tooManyFiles: "Vybrali ste príliš veľa súborov. Maximum je %max%.",
                                    tooFewFiles: "Vybrali ste %files%. Potrebných je aspoň %min%.",
                                    clear: "Odstrániť všetky",
                                    done: "Pridať",
                                    file: { preview: "Nahliadnuť na %file%", remove: "Odstrániť %file%" },
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : e >= 2 && e <= 4 ? "few" : "many";
                },
            },
            sr: {
                translations: {
                    uploading: "Шаљем... Молимо сачекајте.",
                    loadingInfo: "Учитавам информације...",
                    errors: {
                        default: "Грешка",
                        baddata: "Погрешна вредност",
                        size: "Фајл је сувише велик",
                        upload: "Не могу да пошаљем",
                        user: "Слање прекинуто",
                        info: "Не могу да учитам информације",
                        image: "Дозвољене су само слике",
                        createGroup: "Не могу да направим групу фајлова",
                        deleted: "Фајл је обрисан",
                    },
                    draghere: "Убаците фајл овде",
                    file: { one: "%1 фајл", other: "%1 фајлова" },
                    buttons: { cancel: "Поништи", remove: "Избаци", choose: { files: { one: "Изабери фајл", other: "Изабери фајлове" }, images: { one: "Изабери слику", other: "Изабери слике" } } },
                    dialog: {
                        close: "Затвори",
                        openMenu: "Отвори мени",
                        done: "Готово",
                        showFiles: "Покажи фајлове",
                        tabs: {
                            names: {
                                "empty-pubkey": "Добродошли",
                                preview: "Погледај",
                                file: "Локални фајлови",
                                url: "Директан линк",
                                camera: "Камера",
                                facebook: "Фејсбук",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                gphotos: "Google Photos",
                                instagram: "Инстаграм",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: { drag: "превуци<br>било које фајлове", nodrop: "Пошаљи фајлове са твог&nbsp;компјутера", cloudsTip: "Клауд<br>и социјалне мреже", or: "или", button: "Изабери локални фајл", also: "или изабери" },
                            url: { title: "Фајлове са Интернета", line1: "Изабери било који фајл са Интернета.", line2: "Само убаци линк.", input: "Убаци линк овде...", button: "Пошаљи" },
                            camera: {
                                title: "Фајл са камере",
                                capture: "Усликај",
                                mirror: "Огледало",
                                startRecord: "Сними видео",
                                stopRecord: "Заустави",
                                cancelRecord: "Поништи",
                                retry: "Тражи дозволу поново",
                                pleaseAllow: { title: "Молимо вас да дозволите приступ вашој камери", text: "Упитани сте да дозволите приступ вашој камери са овог сајта.<br>Уколико желите да сликате, морате одобрити овај захтев." },
                                notFound: { title: "Камера није препозната", text: "Изгледа да немате камеру на овом уређају." },
                            },
                            preview: {
                                unknownName: "непознато",
                                change: "Поништи",
                                back: "Назад",
                                done: "Додај",
                                unknown: { title: "Шаљем... Сачекајте за приказ.", done: "Прескочи приказ и прихвати" },
                                regular: { title: "Додај овај фајл?", line1: "Управо ћете додати овај фајл изнад.", line2: "Молимо потврдите." },
                                image: { title: "Додај ову слику?", change: "Поништи" },
                                crop: { title: "Кропуј и додај ову слику", done: "Урађено", free: "слободно" },
                                video: { title: "Додај овај видео?", change: "Поништи" },
                                error: {
                                    default: { title: "Ооопс!", text: "Нешто је искрсло у току слања.", back: "Молимо покушајте поново" },
                                    image: { title: "Дозвљене су само слике.", text: "Молимо покушајте са другим фајлом.", back: "Изабери слику" },
                                    size: { title: "Фајл који сте изабрали премашује лимит.", text: "Молимо покушајте са другим фајлом." },
                                    loadImage: { title: "Грешка", text: "Не могу да учитам слику" },
                                },
                                multiple: {
                                    title: "Изабрали сте %files%.",
                                    question: "Додај %files%?",
                                    tooManyFiles: "Изабрали сте превише фајлова. %max% је максимално.",
                                    tooFewFiles: "Изабрали сте %files%. Морате најмање %min% фајла.",
                                    clear: "Избаци све",
                                    done: "Додај",
                                    file: { preview: "Прегледај %file%", remove: "Избаци %file%" },
                                },
                            },
                        },
                        footer: { text: "направио", link: "uploadcare" },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            sv: {
                translations: {
                    uploading: "Laddar... Var god vänta.",
                    loadingInfo: "Laddar info...",
                    errors: {
                        default: "Fel",
                        baddata: "Felaktigt värde",
                        size: "Filen är för stor",
                        upload: "Kan inte ladda upp",
                        user: "Uppladdning avbruten",
                        info: "Kan inte ladda informationen",
                        image: "Endast bilder tillåtna",
                        createGroup: "Kan inte skapa filgrupp",
                        deleted: "Fil raderad",
                    },
                    draghere: "Dra filen hit",
                    file: { one: "%1 fil", other: "%1 filer" },
                    buttons: { cancel: "Avbryt", remove: "Ta bort", choose: { files: { one: "Välj fil", other: "Välj filer" }, images: { one: "Välj en bild", other: "Välj bilder" } } },
                    dialog: {
                        done: "Klar",
                        showFiles: "Visa filer",
                        tabs: {
                            names: { "empty-pubkey": "Välkommen", preview: "Förhandsgranskning", file: "Lokala filer", url: "Direkta länkar", camera: "Kamera" },
                            file: { drag: "Släpp filen här", nodrop: "Ladda upp filer från din dator", cloudsTip: "Molnlagring<br>och sociala nätverk", or: "eller", button: "Välj en lokal fil", also: "Du kan också välja den från" },
                            url: { title: "Filer från webben", line1: "Välj en fil från en webbadress.", line2: "Ange bara länken till filen.", input: "Klistra in din länk här...", button: "Ladda upp" },
                            camera: {
                                capture: "Ta ett foto",
                                mirror: "Spegel",
                                retry: "Begär tillstånd igen",
                                pleaseAllow: {
                                    title: "Vänligen ge tillgång till din kamera",
                                    text: "Du har uppmanats att tillåta att denna webbplats får tillgång till din kamera.För att ta bilder med din kamera måste du godkänna denna begäran.",
                                },
                                notFound: { title: "Ingen kamera hittades", text: "Det verkar som att du inte har någon kamera ansluten till denna enheten." },
                            },
                            preview: {
                                unknownName: "okänd",
                                change: "Avbryt",
                                back: "Tillbaka",
                                done: "Lägg till",
                                unknown: { title: "Laddar... Vänligen vänta på förhandsgranskning.", done: "Skippa förhandsgranskning och acceptera" },
                                regular: { title: "Lägg till denna filen?", line1: "Du håller på att lägga till filen ovan.", line2: "Vänligen bekräfta." },
                                image: { title: "Lägg till denna bilden?", change: "Avbryt" },
                                crop: { title: "Beskär och lägg till denna bild", done: "Klar", free: "fri" },
                                error: {
                                    default: { title: "Oops!", text: "Någonting gick fel under uppladdningen.", back: "Vänligen försök igen" },
                                    image: { title: "Endast bildfiler accepteras.", text: "Vänligen försök igen med en annan fil.", back: "Välj bild" },
                                    size: { title: "Filen du har valt är för stor.", text: "Vänligen försök igen med en annan fil." },
                                    loadImage: { title: "Fel", text: "Kan inte ladda bild" },
                                },
                                multiple: {
                                    title: "Du har valt %files%",
                                    question: "Vill du lägga till alla dessa filer?",
                                    tooManyFiles: "Du har valt för många filer. %max% är max.",
                                    tooFewFiles: "Du har valt %files%. Minst %min% krävs.",
                                    clear: "Ta bort alla",
                                    done: "Klar",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return 1 === e ? "one" : "other";
                },
            },
            tr: {
                translations: {
                    uploading: "Yükleniyor... Lütfen bekleyin.",
                    loadingInfo: "Bilgiler yükleniyor...",
                    errors: {
                        default: "Hata",
                        baddata: "Geçersiz değer",
                        size: "Dosya çok büyük",
                        upload: "Yüklenemedi",
                        user: "Yükleme iptal edildi",
                        info: "Bilgiler getirilemedi",
                        image: "Sadece resim dosyası yüklenebilir",
                        createGroup: "Dosya grubu yaratılamıyor",
                        deleted: "Dosya silinmiş",
                    },
                    draghere: "Buraya bir dosya bırakın",
                    file: { other: "%1 dosya" },
                    buttons: { cancel: "İptal", remove: "Kaldır", choose: { files: { one: "Dosya Seçin", other: "Dosya Seçin" }, images: { one: "Resim Dosyası Seçin", other: "Resim Dosyası Seçin" } } },
                    dialog: {
                        done: "Bitti",
                        showFiles: "Dosyaları Göster",
                        tabs: {
                            names: { "empty-pubkey": "Hoş geldiniz", preview: "Önizleme", file: "Bilgisayar", url: "Dış Bağlantılar", camera: "Kamera" },
                            file: {
                                drag: "Buraya bir dosya bırakın",
                                nodrop: "Bilgisayarınızdan dosya yükleyin",
                                or: "ya da",
                                button: "Bilgisayardan bir dosya seç",
                                also: "Diğer yükleme seçenekleri",
                                cloudsTip: "Bulut depolamalar<br>ve sosyal hizmetler",
                            },
                            url: { title: "Webden dosyalar", line1: "Webden herhangi bir dosya seçin.", line2: "Dosya bağlantısını sağlayın.", input: "Bağlantınızı buraya yapıştırın...", button: "Yükle" },
                            camera: {
                                capture: "Fotoğraf çek",
                                mirror: "Ayna",
                                retry: "Tekrar izin iste",
                                pleaseAllow: { title: "Lütfen kameranıza erişilmesine izin verin", text: "Bu siteden kamera erişimine izin vermeniz talep ediliyor. Kameranızla fotoğraf çekmek için bu isteği onaylamanız gerekmektedir." },
                                notFound: { title: "Kamera algılanamadı", text: "Bu cihaza kamera bağlantısının olmadığı görünüyor." },
                            },
                            preview: {
                                unknownName: "bilinmeyen",
                                change: "İptal",
                                back: "Geri",
                                done: "Ekle",
                                unknown: { title: "Yükleniyor... Önizleme için lütfen bekleyin.", done: "Önizlemeyi geç ve kabul et" },
                                regular: { title: "Bu dosya eklensin mi?", line1: "Yukarıdaki dosyayı eklemek üzeresiniz.", line2: "Lütfen onaylayın." },
                                image: { title: "Bu görsel eklensin mi?", change: "İptal" },
                                crop: { title: "Bu görseli kes ve ekle", done: "Bitti" },
                                error: {
                                    default: { title: "Aman!", text: "Yükleme sırasında bir hata oluştu.", back: "Lütfen tekrar deneyin." },
                                    image: { title: "Sadece resim dosyaları kabul edilmektedir.", text: "Lütfen başka bir dosya ile tekrar deneyin.", back: "Resim dosyası seç" },
                                    size: { title: "Seçtiğiniz dosya limitleri aşıyor.", text: "Lütfen başka bir dosya ile tekrar deneyin." },
                                    loadImage: { title: "Hata", text: "Resim dosyası yüklenemedi" },
                                },
                                multiple: {
                                    title: "%files% dosya seçtiniz",
                                    question: "Bu dosyaların hepsini eklemek istiyor musunuz?",
                                    tooManyFiles: "Fazla sayıda dosya seçtiniz, en fazla %max% dosya olabilir.",
                                    tooFewFiles: "%files% dosya seçtiniz, en az %min% dosya olmalıdır.",
                                    clear: "Hepsini kaldır",
                                    done: "Bitti",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return "other";
                },
            },
            uk: {
                translations: {
                    uploading: "Завантаження... Зачекайте.",
                    loadingInfo: "Завантаження інформації...",
                    errors: {
                        default: "Помилка",
                        baddata: "Неправильне значення",
                        size: "Завеликий файл",
                        upload: "Помилка завантаження",
                        user: "Завантаження скасовано",
                        info: "Помилка завантаження інформації",
                        image: "Дозволені лише зображення",
                        createGroup: "Неможливо створити групу файлів",
                        deleted: "Файл видалено",
                    },
                    draghere: "Перетягніть файл сюди",
                    file: { one: "%1 файл", few: "%1 файли", many: "%1 файлів" },
                    buttons: { cancel: "Скасувати", remove: "Видалити", choose: { files: { one: "Вибрати файл", other: "Вибрати файли" }, images: { one: "Вибрати зображення", other: "Вибрати зображення" } } },
                    dialog: {
                        close: "Закрити",
                        openMenu: "Відкрити меню",
                        done: "Готово",
                        showFiles: "Показати файли",
                        tabs: {
                            names: { "empty-pubkey": "Вітання", preview: "Попередній перегляд", file: "Локальні файли", url: "Пряме посилання", camera: "Камера" },
                            file: {
                                drag: "Перетягніть<br>будь-які файли",
                                nodrop: "Завантаження файлів з вашого комп'ютера",
                                cloudsTip: "Хмарні сховища<br>та соціальні мережі",
                                or: "або",
                                button: "Обрати локальний файл",
                                also: "або обрати з",
                            },
                            url: { title: "Файли з інших сайтів", line1: "Візьміть будь-який файл з Інтернету..", line2: "Вкажіть тут посилання.", input: "Вставте ваше посилання тут...", button: "Завантажити" },
                            camera: {
                                title: "Файл із відеокамери",
                                capture: "Зробити знімок",
                                mirror: "Віддзеркалити",
                                startRecord: "Записати відео",
                                stopRecord: "Стоп",
                                cancelRecord: "Скасувати",
                                retry: "Повторний запит дозволу",
                                pleaseAllow: {
                                    title: "Будь ласка, надайте доступ до вашої камери",
                                    text: "Вам буде запропоновано дозволити доступ до камери з цього сайту.<br>Для того, щоб фотографувати за допомогою камери, ви повинні схвалити цей запит.",
                                },
                                notFound: { title: "Камера не виявлена", text: "Схоже, у вас немає камери, підключеної до цього пристрою." },
                            },
                            preview: {
                                unknownName: "невідомо",
                                change: "Скасувати",
                                back: "Назад",
                                done: "Додати",
                                unknown: { title: "Завантаження... Зачекайте на попередній перегляд.", done: "Пропустити перегляд і прийняти" },
                                regular: { title: "Додати цей файл?", line1: "Ви збираєтеся додати файл вище.", line2: "Будь ласка, підтвердіть." },
                                image: { title: "Додати це зображення?", change: "Скасувати" },
                                crop: { title: "Обрізати та додати це зображення", done: "Готово", free: "довільно" },
                                video: { title: "Додати це відео?", change: "Скасувати" },
                                error: {
                                    default: { title: "Ой!", text: "Під час завантаження сталася помилка.", back: "Будь ласка, спробуйте ще раз" },
                                    image: { title: "Приймаються лише файли зображень.", text: "Повторіть спробу з іншим файлом.", back: "Виберіть зображення" },
                                    size: { title: "Розмір вибраного файлу перевищує ліміт.", text: "Повторіть спробу з іншим файлом." },
                                    loadImage: { title: "Помилка", text: "Помилка завантаження зображення" },
                                },
                                multiple: {
                                    title: "Ви вибрали %files%.",
                                    question: "Додати %files%?",
                                    tooManyFiles: "Ви вибрали забагато файлів. Максимальна кількість %max%.",
                                    tooFewFiles: "Ви вибрали %files%. Мінімальна кількість %min%.",
                                    clear: "Видалити все",
                                    done: "Додати",
                                    file: { preview: "Попередній перегляд %file%", remove: "Видалити %file%" },
                                },
                            },
                        },
                        footer: { text: "працює на", link: "uploadcare" },
                    },
                },
                pluralize: function (e) {
                    return 1 == ((e / 10) % 10 | 0) || e % 10 == 0 || e % 10 > 4 ? "many" : e % 10 == 1 ? "one" : "few";
                },
            },
            vi: {
                translations: {
                    loadingInfo: "Đang tải thông tin...",
                    errors: {
                        default: "Lỗi",
                        baddata: "Giá trị không đúng",
                        size: "Tệp quá lớn",
                        upload: "Không thể tải lên",
                        user: "Tải lên bị hủy",
                        info: "Không thể nạp thông tin",
                        image: "Chỉ cho phép các hình ảnh",
                        createGroup: "Không thể tạo nhóm tệp",
                        deleted: "Tệp đã bị xóa",
                    },
                    uploading: "Đang tải lên... Vui lòng chờ đợi.",
                    draghere: "Thả một tệp vào đây",
                    file: { other: "%1 tệp" },
                    buttons: { cancel: "Hủy", remove: "Xóa", choose: { files: { other: "Lựa chọn các tệp" }, images: { other: "Lựa chọn hình ảnh" } } },
                    dialog: {
                        close: "Đóng",
                        openMenu: "Mở menu",
                        done: "Xong",
                        showFiles: "Hiển thị tệp",
                        tabs: {
                            names: {
                                "empty-pubkey": "Chào mừng",
                                preview: "Xem trước",
                                file: "Các tệp trên máy",
                                url: "Liên kết tr.tiếp",
                                camera: "Máy ảnh",
                                facebook: "Facebook",
                                dropbox: "Dropbox",
                                gdrive: "Google Drive",
                                instagram: "Instagram",
                                gphotos: "Google Photos",
                                vk: "VK",
                                evernote: "Evernote",
                                box: "Box",
                                onedrive: "OneDrive",
                                flickr: "Flickr",
                                huddle: "Huddle",
                            },
                            file: {
                                drag: "kéo & thả<br>bất kỳ tệp nào",
                                nodrop: "Tải lên các tệp từ &nbsp;máy tính của bạn",
                                cloudsTip: "Lưu trữ Đám mây<br>và các mạng xã hội",
                                or: "hoặc",
                                button: "Lựa chọn một tệp trên máy",
                                also: "hoặc lựa chọn từ",
                            },
                            url: { title: "Các tệp trên Web", line1: "Chọn bất từ tệp nào từ web.", line2: "Chỉ cần cung cấp liên kết.", input: "Dán liên kết của bạn xuống đây...", button: "Tải lên" },
                            camera: {
                                title: "Tệp từ web cam",
                                capture: "Chụp một bức ảnh",
                                mirror: "Gương",
                                startRecord: "Quay một video",
                                cancelRecord: "Hủy",
                                stopRecord: "Dừng",
                                retry: "Yêu cầu cấp phép lần nữa",
                                pleaseAllow: {
                                    text: "Bạn đã được nhắc nhở để cho phép truy cập vào camera từ trang này.<br>Để có thể chụp ảnh với camera, bạn phải chấp thuận yêu cầu này.",
                                    title: "Vui lòng cho phép truy cập tới camera của bạn",
                                },
                                notFound: { title: "Không tìm thấy camera nào", text: "Có vẻ như bạn không có camera nào nối với thiết bị này." },
                            },
                            preview: {
                                unknownName: "vô danh",
                                change: "Hủy",
                                back: "Quay lại",
                                done: "Thêm",
                                unknown: { title: "Đang tải lên...Vui lòng đợi để xem trước.", done: "Bỏ qua và chấp nhận" },
                                regular: { title: "Thêm tệp này?", line1: "Bạn dự định thêm tệp ở trên.", line2: "Vui lòng chấp thuận." },
                                image: { title: "Thêm hình ảnh này?", change: "Hủy" },
                                crop: { title: "Cắt và thêm ảnh này", done: "Xong", free: "miễn phí" },
                                video: { title: "Thêm video này?", change: "Hủy" },
                                error: {
                                    default: { title: "Ồ!", back: "Vui lòng thử lại", text: "Có lỗi gì đó trong quá trình tải lên." },
                                    image: { title: "Chỉ chấp thuận các tệp hình ảnh.", text: "Vui lòng thử lại với một tệp mới.", back: "Lựa chọn hình ảnh" },
                                    size: { title: "Tệp bạn đã lựa chọn vượt quá giới hạn", text: "Vui lòng thử lại với một tệp khác." },
                                    loadImage: { title: "Lỗi", text: "Không thể tải hình ảnh" },
                                },
                                multiple: {
                                    title: "Bạn đã lựa chọn %files%",
                                    question: "Thêm %files%?",
                                    tooManyFiles: "Bạn đã lựa chọn quá nhiều tệp. %max% là tối đa.",
                                    tooFewFiles: "Bạn đã lựa chọn %files%. Ít nhất cần %min%",
                                    clear: "Xoá Tất cả",
                                    file: { preview: "Xem trước %file%", remove: "Xóa %file%" },
                                    done: "Thêm",
                                },
                            },
                        },
                        footer: { text: "được hỗ trợ bởi", link: "uploadcare" },
                    },
                },
                pluralize: function (e) {
                    return "other";
                },
            },
            zhTW: {
                translations: {
                    uploading: "上傳中...請等待",
                    loadingInfo: "正在讀取資訊...",
                    errors: { default: "錯誤", baddata: "錯誤資料", size: "檔案太大", upload: "無法上傳", user: "上傳被取消", info: "無法讀取資訊", image: "只允許圖片檔案", createGroup: "無法建立檔案群組", deleted: "檔案已被刪除" },
                    draghere: "拖放檔案到這裡",
                    file: { other: "%1 個檔案" },
                    buttons: { cancel: "取消", remove: "刪除", choose: { files: { one: "選擇檔案", other: "選擇檔案" }, images: { one: "選擇圖片", other: "選擇圖片" } } },
                    dialog: {
                        done: "完成",
                        showFiles: "顯示檔案",
                        tabs: {
                            names: { "empty-pubkey": "歡迎", preview: "預覽", file: "從本機上傳", url: "任意圖片連結", camera: "相機" },
                            file: { drag: "拖放檔案到這裡", nodrop: "從你的本機中上傳", cloudsTip: "雲端硬碟<br>與社群網站", or: "或者", button: "從本機中選取檔案", also: "你也可以選自" },
                            url: { title: "來自網際網路的檔案", line1: "從網際網路選取檔案", line2: "只需提供連結", input: "將連結複製至此...", button: "上傳" },
                            camera: {
                                capture: "拍照",
                                mirror: "鏡像",
                                retry: "重新取得相機權限",
                                pleaseAllow: { title: "請允許使存取您的相機", text: "你一直在提示允許來自這個網站的訪問攝像頭。為了拍照用你的相機，你必須批准這一請求。" },
                                notFound: { title: "沒有找到相機", text: "看起來你有沒有將連接相機。" },
                            },
                            preview: {
                                unknownName: "未知",
                                change: "取消",
                                back: "返回",
                                done: "加入",
                                unknown: { title: "上傳中...請等待預覽", done: "跳過預覽，直接接受" },
                                regular: { title: "加入這個檔案？", line1: "你將加入上面的檔案。", line2: "請確認。" },
                                image: { title: "加入這個圖片？", change: "取消" },
                                crop: { title: "裁切並加入這個圖片", done: "完成", free: "自由裁切" },
                                error: {
                                    default: { title: "錯誤！", text: "上傳過程中出錯。", back: "請重試" },
                                    image: { title: "只允許上傳圖片檔案。", text: "請選擇其他檔案重新上傳。", back: "選擇圖片" },
                                    size: { title: "你選取的檔案超過了100MB的上限", text: "請用另一個檔案再試一次。" },
                                    loadImage: { title: "錯誤", text: "無法讀取圖片" },
                                },
                                multiple: {
                                    title: "你已經選擇 %files%",
                                    question: "你要加入所有檔案嗎？",
                                    tooManyFiles: "你選了太多的檔案. 最多可選擇%max%. 請刪除一些。",
                                    tooFewFiles: "你所選擇的檔案 %files%. 至少要 %min% .",
                                    clear: "清空",
                                    done: "完成",
                                },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return "other";
                },
            },
            zh: {
                translations: {
                    uploading: "上传中...请等待",
                    loadingInfo: "正在读取信息...",
                    errors: { default: "错误", baddata: "错误数据", size: "文件太大", upload: "无法上传", user: "上传被取消", info: "无法读取信息", image: "只允许图形文件", createGroup: "无法建立文件组", deleted: "文件已被删除" },
                    draghere: "拖放文件到这里",
                    file: { other: "%1 个文件" },
                    buttons: { cancel: "取消", remove: "删除" },
                    dialog: {
                        done: "完成",
                        showFiles: "显示文件",
                        tabs: {
                            names: { url: "任意图片链接" },
                            file: { drag: "拖放文件到这里", nodrop: "从你的电脑中上传", or: "或者", button: "从电脑中选取文件", also: "你也可以选自" },
                            url: { title: "来自互联网的文件", line1: "从互联网选取文件", line2: "只需提供链接", input: "将链接拷贝至此...", button: "上传" },
                            preview: {
                                unknownName: "未知",
                                change: "取消",
                                back: "返回",
                                done: "添加",
                                unknown: { title: "上传中...请等待预览", done: "跳过预览，直接接受" },
                                regular: { title: "添加这个文件?", line1: "你将添加上面的文件。", line2: "请确认。" },
                                image: { title: "添加这个图片?", change: "取消" },
                                crop: { title: "剪裁并添加这个图片", done: "完成" },
                                error: {
                                    default: { title: "错误!", text: "上传过程中出错。", back: "请重试" },
                                    image: { title: "只允许上传图片文件。", text: "请选择其他文件重新上传。", back: "选择图片" },
                                    size: { title: "你选取的文件超过了100MB的上限", text: "请用另一个文件再试一次。" },
                                    loadImage: { title: "错误", text: "无法读取图片" },
                                },
                                multiple: { title: "你已经选择 %files%", question: "你要添加所有文件吗？", tooManyFiles: "你选了太多的文件. 最多可选择%max%. 请删除一些。", clear: "清空", done: "完成" },
                            },
                        },
                    },
                },
                pluralize: function (e) {
                    return "other";
                },
            },
        },
        pn = null,
        fn = {
            translations: Object.keys(dn).reduce(function (e, t) {
                return (e[t] = dn[t].translations), e;
            }, {}),
            pluralize: Object.keys(dn).reduce(function (e, t) {
                return (e[t] = dn[t].pluralize), e;
            }, {}),
            rebuild: function (e) {
                return (pn = null), gn(e);
            },
            t: function (e, t) {
                var n, i, r;
                return (
                    (n = gn()),
                    null == (r = mn(e, n.translations)) && n.lang !== hn.lang && (r = mn(e, (n = hn).translations)),
                    null != t && (r = null != n.pluralize ? (null != (i = r[n.pluralize(t)]) ? i.replace("%1", t) : void 0) || t : ""),
                    r || ""
                );
            },
        },
        hn = { lang: "en", translations: dn.en.translations, pluralize: dn.en.pluralize },
        gn = function (e) {
            if (!pn) {
                var t = ft(e),
                    n = t.locale || hn.lang,
                    i = k.extend(!0, {}, fn.translations[n], t.localeTranslations),
                    r = k.isFunction(t.localePluralize) ? t.localePluralize : fn.pluralize[n];
                pn = { lang: n, translations: i, pluralize: r };
            }
            return pn;
        },
        mn = function (e, t) {
            for (var n = e.split("."), i = 0, r = n.length; i < r; i++) {
                var a = n[i];
                if (null == t) return null;
                t = t[a];
            }
            return t;
        },
        vn = (function () {
            function e(t, n) {
                var i,
                    a = this;
                r(this, e),
                    (this.__uuid = null),
                    (this.settings = ft(n)),
                    (this.__fileColl = new cn(t)),
                    (this.__allFilesDf = k.when.apply(k, b(this.files()))),
                    (this.__fileInfosDf =
                        ((t = function () {
                            var e, t, n, r;
                            for (r = [], e = 0, t = (n = this.files()).length; e < t; e++)
                                (i = n[e]),
                                    r.push(
                                        i.then(null, function (e, t) {
                                            return k.when(t);
                                        })
                                    );
                            return r;
                        }.call(a)),
                        k.when.apply(k, b(t)))),
                    (this.__createGroupDf = k.Deferred()),
                    this.__initApiDeferred();
            }
            return (
                o(e, [
                    {
                        key: "files",
                        value: function () {
                            return this.__fileColl.get();
                        },
                    },
                    {
                        key: "__save",
                        value: function () {
                            var e = this;
                            if (!this.__saved)
                                return (
                                    (this.__saved = !0),
                                    this.__allFilesDf.done(function () {
                                        return e
                                            .__createGroup()
                                            .done(function (t) {
                                                return (
                                                    (e.__uuid = t.id),
                                                    e.__buildInfo(function (t) {
                                                        return e.settings.imagesOnly && !t.isImage ? e.__createGroupDf.reject("image", t) : e.__createGroupDf.resolve(t);
                                                    })
                                                );
                                            })
                                            .fail(function (t) {
                                                return e.__createGroupDf.reject("createGroup", t);
                                            });
                                    })
                                );
                        },
                    },
                    {
                        key: "promise",
                        value: function () {
                            return this.__save(), this.__apiDf.promise();
                        },
                    },
                    {
                        key: "__initApiDeferred",
                        value: function () {
                            var e,
                                t,
                                n,
                                i = this;
                            return (
                                (this.__apiDf = k.Deferred()),
                                (this.__progressState = "uploading"),
                                (t = function (e) {
                                    return i.__buildInfo(function (t) {
                                        return i.__apiDf.reject(e, t);
                                    });
                                }),
                                (n = function (e) {
                                    return i.__apiDf.resolve(e);
                                }),
                                (e = function () {
                                    return i.__apiDf.notify(i.__progressInfo());
                                })(),
                                this.__fileColl.onAnyProgress(e),
                                this.__allFilesDf
                                    .done(function () {
                                        return (i.__progressState = "uploaded"), e();
                                    })
                                    .fail(t),
                                this.__createGroupDf
                                    .done(function (t) {
                                        return (i.__progressState = "ready"), e(), n(t);
                                    })
                                    .fail(t)
                            );
                        },
                    },
                    {
                        key: "__progressInfo",
                        value: function () {
                            var e, t, n, i, r;
                            for (n = 0, e = 0, t = (r = this.__fileColl.lastProgresses()).length; e < t; e++) n += ((null != (i = r[e]) ? i.progress : void 0) || 0) / r.length;
                            return { state: this.__progressState, uploadProgress: n, progress: "ready" === this.__progressState ? 1 : 0.9 * n };
                        },
                    },
                    {
                        key: "__buildInfo",
                        value: function (e) {
                            var t;
                            return (
                                (t = {
                                    uuid: this.__uuid,
                                    cdnUrl: this.__uuid ? "".concat(this.settings.cdnBase, "/").concat(this.__uuid, "/") : null,
                                    name: fn.t("file", this.__fileColl.length()),
                                    count: this.__fileColl.length(),
                                    size: 0,
                                    isImage: !0,
                                    isStored: !0,
                                }),
                                this.__fileInfosDf.done(function () {
                                    for (var n, i, r, a = arguments.length, o = new Array(a), l = 0; l < a; l++) o[l] = arguments[l];
                                    for (i = 0, r = o.length; i < r; i++) (n = o[i]), (t.size += n.size), n.isImage || (t.isImage = !1), n.isStored || (t.isStored = !1);
                                    return e(t);
                                })
                            );
                        },
                    },
                    {
                        key: "__createGroup",
                        value: function () {
                            var e,
                                t = this;
                            return (
                                (e = k.Deferred()),
                                this.__fileColl.length()
                                    ? this.__fileInfosDf.done(function () {
                                          for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                                          var a;
                                          return ye(
                                              "".concat(t.settings.urlBase, "/group/?jsonerrors=1"),
                                              "POST",
                                              {
                                                  pub_key: t.settings.publicKey,
                                                  signature: t.settings.secureSignature,
                                                  expire: t.settings.secureExpire,
                                                  files: (function () {
                                                      var e, t, n;
                                                      for (n = [], e = 0, t = i.length; e < t; e++) (a = i[e]), n.push("/".concat(a.uuid, "/").concat(a.cdnUrlModifiers || ""));
                                                      return n;
                                                  })(),
                                              },
                                              { headers: { "X-UC-User-Agent": t.settings._userAgent }, retryConfig: t.settings.retryConfig }
                                          )
                                              .fail(function (n) {
                                                  return t.settings.debugUploads && C("Can't create group.", t.settings.publicKey, n.message), e.reject(n);
                                              })
                                              .done(e.resolve);
                                      })
                                    : e.reject(),
                                e.promise()
                            );
                        },
                    },
                    {
                        key: "api",
                        value: function () {
                            return this.__api || (this.__api = Q(this, ["promise", "files"])), this.__api;
                        },
                    },
                ]),
                e
            );
        })(),
        bn = (function (e) {
            u(n, e);
            var t = h(n);
            function n(e, i) {
                var a, o;
                return r(this, n), (o = en("ready", e.files, i)), ((a = t.call(this, o, i)).__data = e), a;
            }
            return (
                o(n, [
                    {
                        key: "__createGroup",
                        value: function () {
                            return J(this.__data);
                        },
                    },
                ]),
                n
            );
        })(vn),
        _n = function () {
            var e,
                t,
                n,
                i,
                r,
                a,
                o,
                l,
                s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                u = arguments.length > 1 ? arguments[1] : void 0;
            for (t = [], i = 0, a = s.length; i < a; i++)
                if (((n = s[i]), tn(n))) t.push(n);
                else if (rn(n)) for (r = 0, o = (l = n.files()).length; r < o; r++) (e = l[r]), t.push(e);
            return new vn(t, u).api();
        },
        yn = function (e, t) {
            var n, i;
            return (
                (t = ft(t)),
                (n = k.Deferred()),
                (i = ae.exec(e))
                    ? ye("".concat(t.urlBase, "/group/info/"), "GET", { jsonerrors: 1, pub_key: t.publicKey, group_id: i[0] }, { headers: { "X-UC-User-Agent": t._userAgent }, retryConfig: t.retryConfig })
                          .fail(function (e) {
                              return t.debugUploads && C("Can't load group info. Probably removed.", i[0], t.publicKey, e.message), n.reject(e);
                          })
                          .done(function (e) {
                              var i;
                              return (i = new bn(e, t)), n.resolve(i.api());
                          })
                    : n.reject(),
                n.promise()
            );
        },
        wn = {};
    j() &&
        k(window).on("message", function (e) {
            var t,
                n,
                i,
                r,
                a,
                o,
                l = e.originalEvent;
            try {
                r = JSON.parse(l.data);
            } catch (e) {
                return;
            }
            if ((null != r ? r.type : void 0) && r.type in wn) {
                for (o = [], t = 0, i = (a = wn[r.type]).length; t < i; t++) (n = a[t]), l.source === n[0] ? o.push(n[1](r)) : o.push(void 0);
                return o;
            }
        });
    var xn = function (e, t, n) {
            return e in wn || (wn[e] = []), wn[e].push([t, n]);
        },
        kn = function (e, t) {
            if (e in wn)
                return (
                    (wn[e] = k.grep(wn[e], function (e) {
                        return e[0] !== t;
                    })),
                    wn[e]
                );
        },
        Cn = new gt(),
        An = (function () {
            function e(t, n, i, a, o) {
                var l = this;
                r(this, e),
                    (this.__createIframe = this.__createIframe.bind(this)),
                    (this.container = t),
                    (this.tabButton = n),
                    (this.dialogApi = i),
                    (this.settings = a),
                    (this.name = o),
                    this.dialogApi.progress(function (e) {
                        return e === l.name && (l.__createIframe(), l.container.find(".uploadcare--tab__iframe").focus()), l.__sendMessage({ type: "visibility-changed", visible: e === l.name });
                    });
            }
            return (
                o(e, [
                    {
                        key: "remoteUrl",
                        value: function () {
                            var e = { lang: this.settings.locale, public_key: this.settings.publicKey, widget_version: "3.21.0", images_only: this.settings.imagesOnly, pass_window_open: this.settings.passWindowOpen };
                            return this.settings.remoteTabSessionKey && (e.session_key = this.settings.remoteTabSessionKey), "".concat(this.settings.socialBase, "/window3/").concat(this.name, "?") + k.param(e);
                        },
                    },
                    {
                        key: "__sendMessage",
                        value: function (e) {
                            var t, n;
                            return null != (t = this.iframe) && null != (n = t[0].contentWindow) ? n.postMessage(JSON.stringify(e), "*") : void 0;
                        },
                    },
                    {
                        key: "__createIframe",
                        value: function () {
                            var e,
                                t = this;
                            if (!this.iframe)
                                return (
                                    (this.iframe = k("<iframe>", { src: this.remoteUrl(), marginheight: 0, marginwidth: 0, frameborder: 0, allowTransparency: "true" })
                                        .addClass("uploadcare--tab__iframe")
                                        .appendTo(this.container)
                                        .on("load", function () {
                                            var e, n, i, r, a, o, l, s;
                                            for (t.iframe.css("opacity", "1"), e = 0, i = (a = Cn.urls).length; e < i; e++) (s = a[e]), t.__sendMessage({ type: "embed-css", url: s });
                                            for (n = 0, r = (o = Cn.styles).length; n < r; n++) (l = o[n]), t.__sendMessage({ type: "embed-css", style: l });
                                        })),
                                    this.container.addClass("uploadcare--tab_remote"),
                                    (e = this.iframe[0].contentWindow),
                                    xn("file-selected", e, function (e) {
                                        var n, i, r;
                                        return (
                                            (r = (function () {
                                                var n, i, r, a, o;
                                                if (e.alternatives) for (n = 0, r = (a = t.settings.preferredTypes).length; n < r; n++) for (i in ((o = a[n]), (o = ue(o)), e.alternatives)) if (o.test(i)) return e.alternatives[i];
                                                return e.url;
                                            })()),
                                            (i = k.extend({ source: t.name }, e.info || {})),
                                            (n = new Gt(r, t.settings, i)),
                                            e.filename && n.setName(e.filename),
                                            null != e.is_image && n.setIsImage(e.is_image),
                                            t.dialogApi.addFiles([n.promise()])
                                        );
                                    }),
                                    xn("open-new-window", e, function (e) {
                                        var n, i, r;
                                        if ((t.settings.debugUploads && A("Open new window message.", t.name), (i = window.open(e.url, "_blank"))))
                                            return (
                                                (r = function () {
                                                    return t.settings.debugUploads && A("Window is closed.", t.name), t.__sendMessage({ type: "navigate", fragment: "" });
                                                }),
                                                "closed" in i
                                                    ? (n = setInterval(function () {
                                                          if (i.closed) return clearInterval(n), r();
                                                      }, 100))
                                                    : i.addEventListener("exit", r)
                                            );
                                        z("Can't open new window. Possible blocked.", t.name);
                                    }),
                                    this.dialogApi.done(function () {
                                        return kn("file-selected", e), kn("open-new-window", e);
                                    })
                                );
                        },
                    },
                ]),
                e
            );
        })(),
        zn = {
            version: "3.21.0",
            jQuery: k,
            utils: {
                abilities: { fileAPI: I, sendFileAPI: P, dragAndDrop: M, canvas: O, fileDragAndDrop: L, iOSVersion: N, Blob: U, URL: H, FileReader: W },
                Collection: sn,
                UniqCollection: un,
                CollectionOfPromises: cn,
                imageLoader: vt,
                videoLoader: bt,
                log: C,
                debug: A,
                warn: z,
                warnOnce: S,
                registerMessage: xn,
                unregisterMessage: kn,
                unique: G,
                defer: X,
                gcd: Y,
                once: $,
                wrapToPromise: J,
                then: Z,
                bindAll: Q,
                upperCase: ee,
                publicCallbacks: te,
                uuid: ne,
                splitUrlRegex: ie,
                uuidRegex: re,
                groupIdRegex: ae,
                cdnUrlRegex: oe,
                splitCdnUrl: le,
                escapeRegExp: se,
                globRegexp: ue,
                normalizeUrl: ce,
                fitText: de,
                fitSizeInCdnLimit: function (e) {
                    return pe(e, [2048, 2048]);
                },
                fitSize: pe,
                applyCropCoordsToInfo: fe,
                fileInput: ge,
                fileSelectDialog: me,
                fileSizeLabels: ve,
                readableFileSize: be,
                ajaxDefaults: _e,
                jsonp: ye,
                canvasToBlob: we,
                taskRunner: xe,
                fixedPipe: Ce,
                isFile: tn,
                valueToFile: nn,
                image: { shrinkFile: At, shrinkImage: xt, drawFileToCanvas: zt, readJpegChunks: Tt, replaceJpegChunk: St, getExif: jt, parseExifOrientation: Ot, hasTransparency: Nt },
                pusher: { getPusher: Kt },
                isFileGroup: rn,
                valueToGroup: an,
                isFileGroupsEqual: on,
            },
            settings: { globals: dt, build: ft, common: pt, waitForSettings: ht, CssCollector: gt },
            locale: fn,
            tabsCss: Cn,
            files: { BaseFile: Rt, ObjectFile: qt, InputFile: Ut, UrlFile: Gt, UploadedFile: $t, ReadyFile: Jt, FileGroup: vn, SavedFileGroup: bn },
            Pusher: Vt,
            FileGroup: _n,
            loadFileGroup: yn,
            fileFrom: Qt,
            filesFrom: en,
            __exports: {},
            namespace: function (e, t) {
                var n = zn;
                if (e)
                    for (var i = e.split("."), r = 0, a = i.length; r < a; r++) {
                        var o = i[r];
                        n[o] || (n[o] = {}), (n = n[o]);
                    }
                return t(n);
            },
            expose: function (e, t) {
                for (var n = e.split("."), i = n.pop(), r = zn.__exports, a = zn, o = 0, l = n.length; o < l; o++) {
                    var s = n[o];
                    r[s] || (r[s] = {}), (r = r[s]), (a = null != a ? a[s] : void 0);
                }
                r[i] = t || a[i];
            },
        };
    function Tn(e) {
        return function (t) {
            return t(e);
        };
    }
    var Sn = { plugin: Tn(zn), version: "3.21.0", jQuery: k, defaults: t(t({}, He), {}, { allTabs: et.tabs.all }), globals: pt, start: pt, fileFrom: Qt, filesFrom: en, FileGroup: _n, loadFileGroup: yn, locales: ["en"] },
        jn = /["'&<>]/,
        Dn = function (e) {
            var t,
                n = "" + e,
                i = jn.exec(n);
            if (!i) return n;
            var r = "",
                a = 0,
                o = 0;
            for (a = i.index; a < n.length; a++) {
                switch (n.charCodeAt(a)) {
                    case 34:
                        t = "&quot;";
                        break;
                    case 38:
                        t = "&amp;";
                        break;
                    case 39:
                        t = "&#39;";
                        break;
                    case 60:
                        t = "&lt;";
                        break;
                    case 62:
                        t = "&gt;";
                        break;
                    default:
                        continue;
                }
                o !== a && (r += n.substring(o, a)), (o = a + 1), (r += t);
            }
            return o !== a ? r + n.substring(o, a) : r;
        };
    var Fn = {
            dialog: function () {
                return '<div class="uploadcare--dialog"><div class="uploadcare--dialog__container"><button type="button" title="'
                    .concat(fn.t("dialog.close"), '" aria-label="')
                    .concat(
                        fn.t("dialog.close"),
                        '" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--dialog__close"><svg role="presentation" width="32" height="32" class="uploadcare--icon"><use xlink:href="#uploadcare--icon-close"></use></svg></button><div class="uploadcare--dialog__placeholder"></div></div><div class="uploadcare--powered-by uploadcare--dialog__powered-by">'
                    )
                    .concat(fn.t("dialog.footer.text"), ' <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/')
                    .concat("3.21.0", '/" target="_blank"><svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg> ')
                    .concat(fn.t("dialog.footer.link"), "</a></div></div>");
            },
            dialog__panel: function () {
                return '<div class="uploadcare--panel"><div class="uploadcare--menu uploadcare--panel__menu"><button type="button" title="'
                    .concat(fn.t("dialog.openMenu"), '" aria-label="')
                    .concat(
                        fn.t("dialog.openMenu"),
                        '" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--menu__toggle"><svg role="presentation" width="32" height="32" class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_menu"><use xlink:href="#uploadcare--icon-menu"></use></svg> <svg role="presentation" width="32" height="32" class="uploadcare--icon uploadcare--menu__toggle-icon uploadcare--menu__toggle-icon_back"><use xlink:href="#uploadcare--icon-back"></use></svg></button><div class="uploadcare--menu__items"></div></div><div class="uploadcare--panel__content"><div class="uploadcare--footer uploadcare--panel__footer"><div class="uploadcare--footer__additions uploadcare--panel__message"></div><button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--panel__show-files">'
                    )
                    .concat(
                        fn.t("dialog.showFiles"),
                        '<div class="uploadcare--panel__file-counter"></div></button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--panel__done">'
                    )
                    .concat(fn.t("dialog.done"), '</button></div><div class="uploadcare--powered-by uploadcare--panel__powered-by">')
                    .concat(fn.t("dialog.footer.text"), ' <a class="uploadcare--link uploadcare--powered-by__link" href="https://uploadcare.com/uploader/')
                    .concat("3.21.0", '/" target="_blank"><svg width="32" height="32" role="presentation" class="uploadcare--icon uploadcare--powered-by__logo"><use xlink:href="#uploadcare--icon-uploadcare"></use></svg> ')
                    .concat(fn.t("dialog.footer.link"), "</a></div></div></div>");
            },
            progress__text: function () {
                return '<div class="uploadcare--progress__text-container"><div class="uploadcare--progress__text"></div></div>';
            },
            "tab-camera-capture": function () {
                return '<div class="uploadcare--tab__content"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">'
                    .concat(
                        fn.t("dialog.tabs.camera.title"),
                        '</div><div class="uploadcare--camera__controls"><button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_photo">'
                    )
                    .concat(
                        fn.t("dialog.tabs.camera.capture"),
                        '</button> <button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_video">'
                    )
                    .concat(fn.t("dialog.tabs.camera.startRecord"), "</button></div></div>");
            },
            "tab-camera": function () {
                return '<div class="uploadcare--tab__content"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">'
                    .concat(
                        fn.t("dialog.tabs.camera.title"),
                        '</div><select class="uploadcare--camera__device-select"></select><div class="uploadcare--media uploadcare--camera__video-container"><video muted class="uploadcare--media__video uploadcare--camera__video uploadcare--camera__video_mirrored"></video><button type="button" class="uploadcare--button uploadcare--button_size_small uploadcare--button_overlay uploadcare--camera__button uploadcare--camera__button_type_mirror">'
                    )
                    .concat(
                        fn.t("dialog.tabs.camera.mirror"),
                        '</button></div><div class="uploadcare--camera__controls"><button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_start-record">'
                    )
                    .concat(fn.t("dialog.tabs.camera.startRecord"), '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_capture">')
                    .concat(fn.t("dialog.tabs.camera.capture"), '</button> <button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_cancel-record">')
                    .concat(fn.t("dialog.tabs.camera.cancelRecord"), '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--camera__button uploadcare--camera__button_type_stop-record">')
                    .concat(fn.t("dialog.tabs.camera.stopRecord"), '</button></div><div class="uploadcare--camera__please-allow"><div class="uploadcare--text uploadcare--text_size_medium">')
                    .concat(fn.t("dialog.tabs.camera.pleaseAllow.title"), '</div><div class="uploadcare--text">')
                    .concat(fn.t("dialog.tabs.camera.pleaseAllow.text"), '</div></div><div class="uploadcare--camera__not-found"><div class="uploadcare--text uploadcare--text_size_medium">')
                    .concat(fn.t("dialog.tabs.camera.notFound.title"), '</div><div class="uploadcare--text">')
                    .concat(fn.t("dialog.tabs.camera.notFound.text"), '</div></div><button type="button" class="uploadcare--button uploadcare--camera__button uploadcare--camera__button_type_retry">')
                    .concat(fn.t("dialog.tabs.camera.retry"), "</button></div>");
            },
            "tab-file": function () {
                return '<div class="uploadcare--tab__content uploadcare--draganddrop"><div class="uploadcare--text uploadcare--text_size_extra-large uploadcare--dragging__show">'
                    .concat(fn.t("draghere"), '</div><div class="uploadcare--draganddrop__title uploadcare--dragging__hide"><div class="uploadcare--draganddrop__supported"><div class="uploadcare--text uploadcare--text_size_extra-large">')
                    .concat(fn.t("dialog.tabs.file.drag"), '</div><div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted">')
                    .concat(fn.t("dialog.tabs.file.or"), '</div></div><div class="uploadcare--text uploadcare--text_size_large uploadcare--draganddrop__not-supported">')
                    .concat(
                        fn.t("dialog.tabs.file.nodrop"),
                        '</div></div><button type="button" class="uploadcare--button uploadcare--button_size_big uploadcare--button_primary uploadcare--tab__action-button needsclick uploadcare--dragging__hide">'
                    )
                    .concat(
                        fn.t("dialog.tabs.file.button"),
                        '</button><div class="uploadcare--file-sources uploadcare--dragging__hide"><div class="uploadcare--text uploadcare--text_size_small uploadcare--text_muted uploadcare--file-sources__caption">'
                    )
                    .concat(
                        fn.t("dialog.tabs.file.also"),
                        '</div><div class="uploadcare--file-sources__items"><button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--file-source uploadcare--file-source_all uploadcare--file-sources__item"><svg role="presentation" width="32" height="32" class="uploadcare--icon"><use xlink:href="#uploadcare--icon-more"></use></svg></button></div></div></div>'
                    );
            },
            "tab-preview-error": function (e) {
                var t = e.debugUploads,
                    n = e.errorType,
                    i = e.error;
                return '<div class="uploadcare--tab__content uploadcare--preview__content uploadcare--error"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">'
                    .concat(fn.t("dialog.tabs.preview.error." + n + ".title") || fn.t("dialog.tabs.preview.error.default.title"), '</div><div class="uploadcare--text">')
                    .concat(
                        (t && (null == i ? void 0 : i.message)) ||
                            fn.t("serverErrors.".concat(null == i ? void 0 : i.code)) ||
                            (null == i ? void 0 : i.message) ||
                            fn.t("dialog.tabs.preview.error." + n + ".text") ||
                            fn.t("dialog.tabs.preview.error.default.text"),
                        '</div><button type="button" class="uploadcare--button uploadcare--preview__back">'
                    )
                    .concat(fn.t("dialog.tabs.preview.error." + n + ".back") || fn.t("dialog.tabs.preview.error.default.back"), "</button></div>");
            },
            "tab-preview-image": function (e) {
                var t = e.src,
                    n = e.name,
                    i = void 0 === n ? "" : n,
                    r = e.crop;
                return '<div class="uploadcare--tab__header"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">'
                    .concat(fn.t("dialog.tabs.preview.image.title"), '</div></div><div class="uploadcare--tab__content uploadcare--preview__content"><div class="uploadcare--media"><img src="')
                    .concat(t, '" title="')
                    .concat(Dn(i), '" alt="')
                    .concat(Dn(i), '" class="uploadcare--media__image uploadcare--preview__image"></div></div><div class="uploadcare--footer uploadcare--tab__footer"><div class="uploadcare--footer__additions">')
                    .concat(
                        r
                            ? '<div class="uploadcare--crop-sizes"><div role="button" tabindex="0" class="uploadcare--button uploadcare--button_icon uploadcare--crop-sizes__item" data-caption="free"><div class="uploadcare--crop-sizes__icon"></div></div></div>'
                            : "",
                        '</div><button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">'
                    )
                    .concat(fn.t("dialog.tabs.preview.image.change"), '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">')
                    .concat(fn.t("dialog.tabs.preview.done"), "</button></div>");
            },
            "tab-preview-multiple-file": function () {
                return '<div class="uploadcare--file uploadcare--files__item uploadcare--file_status_uploading"><div class="uploadcare--file__description" tabindex="0"><div class="uploadcare--file__preview"></div><div class="uploadcare--file__name">'.concat(
                    fn.t("dialog.tabs.preview.unknownName"),
                    '</div><div class="uploadcare--file__size"></div><div class="uploadcare--file__error"></div></div><div class="uploadcare--file__progressbar"><div class="uploadcare--progressbar"><div class="uploadcare--progressbar__value"></div></div></div><button type="button" class="uploadcare--button uploadcare--button_icon uploadcare--button_muted uploadcare--file__remove"><svg role="presentation" width="32" height="32" class="uploadcare--icon"><use xlink:href="#uploadcare--icon-remove"></use></svg></button></div>'
                );
            },
            "tab-preview-multiple": function () {
                return '<div class="uploadcare--tab__header"><div id="preview__title" class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title" role="status" aria-live="assertive"></div></div><div class="uploadcare--tab__content uploadcare--preview__content"><div class="uploadcare--files"></div></div><div class="uploadcare--footer uploadcare--tab__footer"><div class="uploadcare--footer__additions uploadcare--preview__message"></div><button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">'
                    .concat(
                        fn.t("dialog.tabs.preview.multiple.clear"),
                        '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done" aria-describedby="preview_title">'
                    )
                    .concat(fn.t("dialog.tabs.preview.multiple.done"), "</button></div>");
            },
            "tab-preview-regular": function (e) {
                var t = e.file;
                return '<div class="uploadcare--tab__header"><div id="tab__title" class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title" role="status" aria-live="assertive">'
                    .concat(fn.t("dialog.tabs.preview.regular.title"), '</div></div><div class="uploadcare--tab__content uploadcare--preview__content"><div class="uploadcare--text uploadcare--preview__file-name">')
                    .concat(Dn(t.name) || fn.t("dialog.tabs.preview.unknownName"), " ")
                    .concat(be(t.size, "", ", "), '</div></div><div class="uploadcare--footer uploadcare--tab__footer"><button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">')
                    .concat(fn.t("dialog.tabs.preview.change"), '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done" aria-describedby="tab__title">')
                    .concat(fn.t("dialog.tabs.preview.done"), "</button></div>");
            },
            "tab-preview-unknown": function () {
                return '<div class="uploadcare--tab__header"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">'
                    .concat(
                        fn.t("dialog.tabs.preview.unknown.title"),
                        '</div></div><div class="uploadcare--tab__content uploadcare--preview__content"><div class="uploadcare--text uploadcare--preview__file-name"></div></div><div class="uploadcare--footer uploadcare--tab__footer"><button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">'
                    )
                    .concat(fn.t("dialog.tabs.preview.change"), '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">')
                    .concat(fn.t("dialog.tabs.preview.unknown.done"), "</button></div>");
            },
            "tab-preview-video": function () {
                return '<div class="uploadcare--tab__header"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title uploadcare--preview__title">'
                    .concat(
                        fn.t("dialog.tabs.preview.video.title"),
                        '</div></div><div class="uploadcare--tab__content uploadcare--preview__content"><div class="uploadcare--media"><video controls class="uploadcare--media__video uploadcare--preview__video"></video></div></div><div class="uploadcare--footer uploadcare--tab__footer"><button type="button" class="uploadcare--button uploadcare--footer__button uploadcare--preview__back">'
                    )
                    .concat(fn.t("dialog.tabs.preview.video.change"), '</button> <button type="button" class="uploadcare--button uploadcare--button_primary uploadcare--footer__button uploadcare--preview__done">')
                    .concat(fn.t("dialog.tabs.preview.done"), "</button></div>");
            },
            "tab-url": function () {
                return '<div class="uploadcare--tab__content"><div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">'
                    .concat(fn.t("dialog.tabs.url.title"), '</div><div class="uploadcare--text">')
                    .concat(fn.t("dialog.tabs.url.line1"), '</div><div class="uploadcare--text">')
                    .concat(fn.t("dialog.tabs.url.line2"), '</div><form class="uploadcare--form"><input type="text" class="uploadcare--input" placeholder="')
                    .concat(fn.t("dialog.tabs.url.input"), '"> <button type="submit" class="uploadcare--button uploadcare--button_primary uploadcare--tab__action-button" type="submit">')
                    .concat(fn.t("dialog.tabs.url.button"), "</button></form></div>");
            },
            "widget-button": function (e) {
                var t = e.caption,
                    n = e.name;
                return '<button type="button" class="uploadcare--widget__button uploadcare--widget__button_type_'.concat(n, '">').concat(t, "</button>");
            },
            "widget-file-name": function (e) {
                var t = e.name,
                    n = e.size;
                return '<div class="uploadcare--link uploadcare--widget__file-name" tabindex="0" role="link">'.concat(Dn(de(t, 20)), '</div><div class="uploadcare--widget__file-size">, ').concat(be(n), "</div>");
            },
            widget: function () {
                return '<div class="uploadcare--widget" aria-describedby="uploadcare--widget__text uploadcare--widget__progress"><div class="uploadcare--widget__dragndrop-area">'.concat(
                    fn.t("draghere"),
                    '</div><div id="uploadcare--widget__progress" class="uploadcare--widget__progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div><div id="uploadcare--widget__text" class="uploadcare--widget__text" aria-live="polite"></div></div>'
                );
            },
            icons: function () {
                return '<svg class="uploadcare--icons" width="0" height="0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><symbol viewBox="0 0 32 32" id="uploadcare--icon-back" xmlns="http://www.w3.org/2000/svg"><path d="M21.132 9.06a1.5 1.5 0 00-2.122-2.12L9.88 16.07l9.06 9.061a1.5 1.5 0 102.122-2.121l-6.94-6.94 7.01-7.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-box" xmlns="http://www.w3.org/2000/svg"><path d="M4.962 9C4.385 9 4 9.384 4 9.96v8.243C4 20.793 6.213 23 8.811 23c1.829 0 3.464-1.043 4.33-2.578.866 1.535 2.406 2.578 4.33 2.578 2.695 0 4.812-2.206 4.812-4.797 0-2.686-2.117-4.886-4.811-4.886-1.829 0-3.465 1.043-4.33 2.578-.77-1.535-2.406-2.578-4.33-2.578a4.957 4.957 0 00-2.887.96V9.958c0-.48-.482-.959-.963-.959zm17.08 4.257a.841.841 0 00-.33.15c-.385.288-.5.965-.211 1.349l2.526 3.357-2.526 3.358c-.289.384-.174 1.061.21 1.35.385.287 1.065.173 1.354-.21l2.105-2.879 2.105 2.878c.288.384.968.498 1.353.21.385-.288.499-.965.21-1.349l-2.526-3.358 2.526-3.357c.289-.384.175-1.061-.21-1.35-.385-.287-1.065-.203-1.353.18l-2.105 2.879-2.105-2.878c-.217-.288-.657-.406-1.023-.33zm-13.23 2.068c1.539 0 2.886 1.344 2.886 2.878.096 1.535-1.25 2.878-2.887 2.878a2.89 2.89 0 01-2.886-2.878c0-1.63 1.347-2.878 2.886-2.878zm8.66 0a2.89 2.89 0 012.886 2.878c0 1.535-1.347 2.878-2.886 2.878a2.89 2.89 0 01-2.887-2.878c0-1.63 1.347-2.878 2.887-2.878z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-camera" xmlns="http://www.w3.org/2000/svg"><path d="M21 10h3c1.653 0 3 1.343 3 3v9c0 1.656-1.344 3-3.001 3H8A3 3 0 015 22v-9a3 3 0 013-3h3v-.999C11 7.901 11.895 7 13 7h6c1.113 0 2 .896 2 2.001V10zm-5 12a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-2a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-close" xmlns="http://www.w3.org/2000/svg"><path d="M10.06 7.94a1.5 1.5 0 00-2.12 2.12L13.878 16l-5.94 5.94a1.5 1.5 0 002.122 2.12L16 18.122l5.94 5.94a1.5 1.5 0 002.12-2.122L18.122 16l5.94-5.94a1.5 1.5 0 00-2.122-2.12L16 13.878l-5.94-5.94z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-crop-free" xmlns="http://www.w3.org/2000/svg"><path d="M8 12a2.004 2.004 0 01-2-2.01V8.01C6 6.897 6.893 6 8.01 6h1.98c1.109 0 2.005.888 2.01 2h8c.005-1.107.896-2 2.01-2h1.98C25.103 6 26 6.893 26 8.01v1.98A2.004 2.004 0 0124 12v8c1.107.005 2 .896 2 2.01v1.98c0 1.112-.893 2.01-2.01 2.01h-1.98A2.004 2.004 0 0120 24h-8a2.004 2.004 0 01-2.01 2H8.01A2.004 2.004 0 016 23.99v-1.98c0-1.109.888-2.005 2-2.01v-8zm2 0v8a2.004 2.004 0 012 2h8a2.004 2.004 0 012-2v-8a2.004 2.004 0 01-2-2h-8a2.004 2.004 0 01-2 2zm12 10.01v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01h-1.98c-.01 0-.01 0-.01.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C24 8 24 8 23.99 8h-1.98C22 8 22 8 22 8.01zm-14 14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01v-1.98c0-.01 0-.01-.01-.01H8.01C8 22 8 22 8 22.01zm0-14v1.98c0 .01 0 .01.01.01h1.98c.01 0 .01 0 .01-.01V8.01C10 8 10 8 9.99 8H8.01C8 8 8 8 8 8.01z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-dropbox" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 5L16 9.141l-6.5 4.141L3 9.141 9.5 5zm13 0L29 9.141l-6.5 4.141L16 9.141 22.5 5zM3 17.423l6.5-4.141 6.5 4.141-6.5 4.141L3 17.423zm19.5-4.141l6.5 4.141-6.5 4.141-6.5-4.141 6.5-4.141zm-13 9.662l6.5-4.14 6.5 4.14-6.5 4.141-6.5-4.14z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-empty-pubkey" xmlns="http://www.w3.org/2000/svg"><path d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 100-2.592 1.296 1.296 0 000 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-error" xmlns="http://www.w3.org/2000/svg"><path d="M18.122 23.93V21a.583.583 0 00-.179-.434.585.585 0 00-.423-.175h-2.616a.585.585 0 00-.424.175.583.583 0 00-.179.434v2.93c0 .172.06.316.18.433.118.117.26.175.423.175h2.616a.585.585 0 00.423-.175.583.583 0 00.18-.434zm-.037-6.326l.339-9.05a.404.404 0 00-.189-.351c-.163-.135-.313-.203-.452-.203H14.64c-.138 0-.288.068-.452.203-.125.086-.188.215-.188.388l.32 9.013c0 .123.063.224.188.304.126.08.277.12.452.12h2.484c.176 0 .324-.04.443-.12a.41.41 0 00.198-.304z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-evernote" xmlns="http://www.w3.org/2000/svg"><path d="M7.998 8.648h2.245a.233.233 0 00.232-.233s-.028-1.931-.028-2.468v-.006c0-.441.093-.825.253-1.148l.077-.144a.05.05 0 00-.026.014l-4.359 4.34a.05.05 0 00-.016.025c.09-.044.213-.106.23-.113.38-.172.84-.267 1.392-.267M24.196 6.56c-.553-.2-1.675-.408-3.084-.575-1.134-.134-2.467-.123-3.272-.098-.097-.665-.56-1.272-1.08-1.482-1.384-.56-3.523-.424-4.071-.27-.437.123-.92.373-1.188.76-.18.258-.297.59-.298 1.051 0 .262.007.878.014 1.426.006.548.014 1.04.014 1.043a.887.887 0 01-.884.888H8.103c-.479 0-.845.08-1.124.208-.28.127-.478.3-.628.503-.3.404-.352.902-.351 1.411 0 0 .004.416.104 1.22.083.622.756 4.971 1.394 6.294.248.514.413.73.9.956 1.083.466 3.559.984 4.72 1.133 1.158.148 1.885.46 2.318-.451.002-.003.087-.227.204-.557.377-1.144.43-2.16.43-2.894 0-.075.108-.078.108 0 0 .519-.098 2.354 1.283 2.847.545.194 1.676.367 2.826.502 1.039.12 1.793.53 1.793 3.208 0 1.628-.34 1.851-2.122 1.851-1.444 0-1.994.038-1.994-1.113 0-.932.917-.834 1.596-.834.304 0 .083-.226.083-.8 0-.572.357-.902.02-.91-2.35-.066-3.733-.003-3.733 2.947 0 2.679 1.021 3.176 4.357 3.176 2.614 0 3.536-.086 4.616-3.45.213-.663.73-2.69 1.043-6.092.197-2.15-.187-8.644-.491-10.282-.178-.958-.746-1.43-1.259-1.616zm-3.3 8.792a4.75 4.75 0 00-.923.056c.081-.66.353-1.473 1.316-1.439 1.066.037 1.216 1.049 1.22 1.734-.45-.201-1.006-.33-1.613-.35"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-facebook" xmlns="http://www.w3.org/2000/svg"><path d="M28 16c0-6.627-5.373-12-12-12S4 9.373 4 16c0 5.99 4.388 10.954 10.125 11.854V19.47h-3.047V16h3.047v-2.644c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H19.83c-1.491 0-1.956.925-1.956 1.875V16h3.328l-.532 3.469h-2.796v8.385C23.612 26.954 28 21.99 28 16z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-file" xmlns="http://www.w3.org/2000/svg"><path d="M19 6l5 5h-4c-.556 0-1-.448-1-1V6zm5 7v11.192c0 .995-.808 1.808-1.804 1.808H9.804A1.808 1.808 0 018 24.2V7.74C8 6.602 8.627 6 9.778 6H17v4.994c0 1.12.898 2.006 2.006 2.006H24z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-flickr" xmlns="http://www.w3.org/2000/svg"><path d="M11 20c-2.212 0-4-1.79-4-4s1.79-4 4-4a4 4 0 010 8zm10.001 0a4 4 0 11-.002-8 4 4 0 01.002 8z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gdrive" xmlns="http://www.w3.org/2000/svg"><path d="M19.461 6l7.109 12h-7.004L12.539 6h6.922zm-9.27 19l3.467-6H27l-3.466 6H10.192zM5 18.841l6.618-11.36 3.566 5.929-6.722 11.36L5 18.84z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-gphotos" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.318 11.39V4.681A.682.682 0 0116 4h.682a6.341 6.341 0 013.929 11.318h6.707A.682.682 0 0128 16v.682a6.342 6.342 0 01-11.318 3.929v6.707A.682.682 0 0116 28h-.682a6.342 6.342 0 01-3.929-11.318H4.682A.682.682 0 014 16v-.682a6.341 6.341 0 0111.318-3.929zm1.362 5.292a4.977 4.977 0 109.955 0H16.68zm0-11.318a4.977 4.977 0 010 9.954V5.364zm-1.362 9.954H5.364a4.977 4.977 0 119.954 0zm0 1.362v9.956a4.977 4.977 0 01-.056-9.954l.056-.002z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-huddle" xmlns="http://www.w3.org/2000/svg"><path d="M13.63 14.39c.07-.102.17-.26.2-.313 1.474-2.683 6.857-2.686 8.49 1.002.43.968.67 1.97.675 3.023.008 1.978.004 3.957.002 5.936 0 1.192-.68 1.945-1.763 1.962-1.087.016-1.856-.766-1.865-1.944-.014-1.874.003-3.749-.006-5.623-.006-1.351-.654-2.388-1.719-2.793-1.775-.675-3.59.305-3.892 2.159-.122.747-.104 1.52-.114 2.281-.016 1.336-.002 2.673-.005 4.01-.003 1.125-.669 1.866-1.707 1.907-1.06.042-1.828-.668-1.922-1.78-.007-.086-.003-.173-.003-.26 0-5.31-.002-10.622.002-15.932 0-1.2.731-2.016 1.79-2.025 1.05-.01 1.832.74 1.837 1.792.01 2.013.003 4.026.005 6.04 0 .12.002.391-.005.558"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-instagram" xmlns="http://www.w3.org/2000/svg"><path d="M16 5c2.987 0 3.362.013 4.535.066 1.171.054 1.97.24 2.67.511a5.391 5.391 0 011.949 1.27 5.392 5.392 0 011.269 1.948c.272.7.457 1.499.51 2.67.054 1.173.067 1.548.067 4.535s-.013 3.362-.066 4.535c-.054 1.171-.24 1.97-.511 2.67a5.392 5.392 0 01-1.27 1.949 5.391 5.391 0 01-1.948 1.269c-.7.271-1.499.457-2.67.51-1.173.054-1.548.067-4.535.067s-3.362-.013-4.535-.066c-1.171-.054-1.97-.24-2.67-.511a5.392 5.392 0 01-1.949-1.27 5.391 5.391 0 01-1.268-1.948c-.273-.7-.458-1.499-.512-2.67C5.013 19.362 5 18.987 5 16s.013-3.362.066-4.535c.054-1.171.24-1.97.512-2.67a5.391 5.391 0 011.268-1.949 5.392 5.392 0 011.949-1.269c.7-.271 1.499-.457 2.67-.51C12.638 5.012 13.013 5 16 5zm0 1.982c-2.937 0-3.285.011-4.445.064-1.072.049-1.655.228-2.042.379-.514.2-.88.438-1.265.823a3.41 3.41 0 00-.823 1.264c-.15.388-.33.97-.379 2.043-.053 1.16-.064 1.508-.064 4.445 0 2.937.011 3.285.064 4.445.049 1.072.228 1.655.379 2.043.2.513.438.88.823 1.264.385.385.751.624 1.265.823.387.15.97.33 2.042.379 1.16.053 1.508.064 4.445.064 2.937 0 3.285-.011 4.445-.064 1.072-.049 1.655-.228 2.042-.379.514-.2.88-.438 1.265-.823.385-.385.624-.751.823-1.264.15-.388.33-.97.379-2.043.053-1.16.064-1.508.064-4.445 0-2.937-.011-3.285-.064-4.445-.049-1.072-.228-1.655-.379-2.043-.2-.513-.438-.88-.823-1.264a3.408 3.408 0 00-1.265-.823c-.387-.15-.97-.33-2.042-.379-1.16-.053-1.508-.064-4.445-.064zm0 3.37a5.649 5.649 0 110 11.297 5.649 5.649 0 010-11.298zm0 9.315a3.667 3.667 0 100-7.334 3.667 3.667 0 000 7.334zm7.192-9.539a1.32 1.32 0 11-2.64 0 1.32 1.32 0 012.64 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-menu" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 10a1.5 1.5 0 010-3h17a1.5 1.5 0 010 3h-17zm0 7a1.5 1.5 0 010-3h17a1.5 1.5 0 010 3h-17zm0 7a1.5 1.5 0 010-3h17a1.5 1.5 0 010 3h-17z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-more" xmlns="http://www.w3.org/2000/svg"><path d="M21 16a3 3 0 116 0 3 3 0 01-6 0zm-8 0a3 3 0 116 0 3 3 0 01-6 0zm-8 0a3 3 0 116 0 3 3 0 01-6 0z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-nft" xmlns="http://www.w3.org/2000/svg"><path d="M15.76 3.252c-.059.138-1.805 3.07-3.881 6.515-2.077 3.446-3.793 6.31-3.814 6.365-.028.072 1.1.773 3.955 2.46l3.995 2.36 3.992-2.36c2.87-1.697 3.983-2.39 3.955-2.463C23.817 15.753 16.052 3 15.968 3c-.057 0-.151.113-.209.252zM8.073 17.829c.154.263 7.908 11.172 7.94 11.171.053-.002 7.98-11.203 7.95-11.234-.03-.029-7.439 4.335-7.748 4.563l-.19.14-3.835-2.265a734.48 734.48 0 01-4.01-2.377c-.158-.101-.167-.101-.107.002z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-onedrive" xmlns="http://www.w3.org/2000/svg"><path d="M11.715 16.427c.584-2.413 2.699-4.177 5.209-4.177 1.483 0 2.873.621 3.878 1.7.425-.14.922-.248 1.364-.258v-.16c0-3.054-2.214-5.532-4.944-5.532-1.952 0-3.624 1.278-4.428 3.115a3.55 3.55 0 00-2.033-.658c-2.142 0-3.877 1.94-3.877 4.336 0 .258.028.51.068.754-1.652.167-2.946 1.9-2.946 3.79 0 .02.005.037.005.056-.001.017-.011.035-.011.052 0 .757.257 1.449.673 2.007a3.14 3.14 0 002.568 1.317h1.513a4.49 4.49 0 01-.477-1.987c-.001-2.138 1.476-3.93 3.438-4.355zm13.752 2.375c-.03 0-.06.01-.09.01.008-.09.026-.18.026-.273 0-1.812-1.431-3.279-3.198-3.279-.703 0-1.347.24-1.877.635-.655-1.249-1.924-2.107-3.405-2.107-2.146 0-3.885 1.784-3.885 3.984 0 .029.008.053.009.082a2.764 2.764 0 00-.431-.045c-1.602 0-2.898 1.33-2.898 2.973 0 .205.02.406.059.599C10.05 22.87 11.322 24 12.856 24h12.847v-.023C26.99 23.85 28 22.753 28 21.402c0-1.435-1.134-2.6-2.533-2.6z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-remove" xmlns="http://www.w3.org/2000/svg"><path d="M22.142 24.009c-.078 1.1-1.044 1.991-2.15 1.991h-7.983c-1.11 0-2.073-.897-2.151-1.991l-.786-11.002A.924.924 0 0110.007 12h11.986c.556 0 .975.45.935 1.007l-.786 11.002zM13 7V6c0-.556.444-1 .99-1h4.02A1 1 0 0119 6v1h4c.556 0 1 .447 1 .999v1.002A.997.997 0 0123 10H9c-.555 0-1-.447-1-.999V7.999A.996.996 0 019 7h4z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-uploadcare" xmlns="http://www.w3.org/2000/svg"><path fill="#ffd800" d="M16 31C7.716 31 1 24.284 1 16 1 7.716 7.716 1 16 1c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15zm0-13.704a1.296 1.296 0 100-2.592 1.296 1.296 0 000 2.592z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-url" xmlns="http://www.w3.org/2000/svg"><path d="M16 5c6.074 0 11 4.926 11 11s-4.926 11-11 11S5 22.074 5 16 9.926 5 16 5zm6.076 6.327a.992.992 0 10-1.403-1.403l-1.128 1.128c-1.431-.92-3.47-.768-4.697.461l-3.186 3.185a3.7 3.7 0 00-1.09 2.636c0 .748.22 1.46.624 2.067l-1.272 1.272a.992.992 0 101.402 1.403l1.273-1.272c.606.405 1.32.623 2.067.623.997 0 1.933-.386 2.634-1.089l3.187-3.186a3.729 3.729 0 00.464-4.7l1.125-1.125zm-4.252 3.841a.982.982 0 00.701-.29l.95-.95c.067.188.114.385.114.591 0 .466-.178.904-.505 1.23l-3.186 3.187c-.472.47-1.197.588-1.813.382l.793-.792a.992.992 0 10-1.404-1.404l-.801.802a1.752 1.752 0 01-.115-.59c0-.468.179-.905.506-1.232l3.186-3.186a1.736 1.736 0 011.23-.507c.207 0 .404.049.592.116l-.948.95a.992.992 0 00.7 1.693z"/></symbol><symbol viewBox="0 0 32 32" id="uploadcare--icon-vk" xmlns="http://www.w3.org/2000/svg"><path d="M27.791 21.484c-.416-.767-1.212-1.708-2.386-2.824l-.038-.038c-.558-.532-.895-.882-1.037-1.06-.258-.341-.316-.686-.175-1.036.1-.264.475-.821 1.125-1.673.341-.451.612-.813.812-1.086 1.441-1.959 2.066-3.21 1.874-3.756l-.074-.127c-.05-.077-.18-.147-.387-.211-.209-.064-.475-.075-.8-.032l-3.599.025a.457.457 0 00-.25.007l-.163.038-.062.032-.05.039a.56.56 0 00-.137.134.882.882 0 00-.125.223 21.072 21.072 0 01-1.337 2.875 27.31 27.31 0 01-.85 1.373c-.258.388-.475.673-.65.856a4.57 4.57 0 01-.475.44c-.141.112-.25.158-.324.141a8.987 8.987 0 01-.213-.05.843.843 0 01-.281-.314 1.425 1.425 0 01-.144-.498c-.025-.2-.04-.373-.044-.518-.003-.144-.002-.349.007-.613.008-.264.012-.443.012-.536 0-.324.007-.675.019-1.054l.031-.901c.009-.222.013-.456.013-.703 0-.247-.015-.44-.044-.581a2.02 2.02 0 00-.131-.409.684.684 0 00-.256-.307 1.426 1.426 0 00-.419-.172c-.441-.102-1.004-.158-1.687-.166-1.55-.017-2.545.085-2.986.307a1.69 1.69 0 00-.475.383c-.15.187-.171.29-.063.306.5.077.854.26 1.062.55l.075.153c.059.11.117.307.175.588.059.28.096.592.113.932.041.622.041 1.154 0 1.597-.042.443-.081.788-.119 1.035a2.107 2.107 0 01-.169.6 2.55 2.55 0 01-.15.281.217.217 0 01-.062.064.918.918 0 01-.337.064c-.117 0-.259-.06-.425-.179a3.024 3.024 0 01-.519-.492c-.179-.208-.38-.5-.606-.875a15.385 15.385 0 01-.7-1.328l-.2-.37a32.156 32.156 0 01-.512-1.042 20.306 20.306 0 01-.575-1.323.84.84 0 00-.3-.408l-.062-.039a.85.85 0 00-.2-.108 1.304 1.304 0 00-.287-.083L4.8 9.64c-.35 0-.587.081-.712.243l-.05.077a.421.421 0 00-.038.204c0 .094.025.209.075.345.5 1.201 1.043 2.36 1.63 3.475C6.294 15.1 6.804 16 7.237 16.68c.433.681.875 1.324 1.325 1.929.45.604.748.992.893 1.162.146.17.26.298.344.384l.312.306c.2.205.494.45.881.735.388.285.817.566 1.287.843.471.277 1.019.503 1.644.677a5.564 5.564 0 001.824.211h1.437c.292-.026.512-.12.662-.281l.05-.064a.858.858 0 00.094-.236c.029-.107.044-.224.044-.351a4.301 4.301 0 01.08-.99c.063-.294.134-.516.213-.665a1.632 1.632 0 01.482-.562.806.806 0 01.1-.045c.2-.068.434-.002.705.199.271.2.525.447.763.74.237.295.522.625.856.99.333.367.625.64.874.818l.25.154c.167.102.384.196.65.28.266.086.5.107.7.065l3.199-.051c.316 0 .562-.054.737-.16.175-.107.279-.224.312-.351.034-.128.035-.273.007-.435a1.632 1.632 0 00-.088-.338 1.694 1.694 0 00-.082-.16z"/></symbol></svg>';
            },
            styles: function () {
                return '.uploadcare--jcrop-handle{box-sizing:border-box;padding:12.5px;width:45px;height:45px;background:transparent;z-index:2147483621}@media (min-width:760px){.uploadcare--jcrop-handle{height:35px;width:35px;padding:10px}}.uploadcare--jcrop-handle:before{content:"";display:block;width:20px;height:20px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.2);border-radius:50%}@media (min-width:760px){.uploadcare--jcrop-handle:before{height:15px;width:15px}}.uploadcare--jcrop-handle.ord-nw{margin-top:-22.5px;margin-left:-22.5px;top:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-nw{margin-left:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-ne{margin-top:-22.5px;margin-right:-22.5px;top:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-ne{margin-right:-17.5px;margin-top:-17.5px}}.uploadcare--jcrop-handle.ord-se{margin-bottom:-22.5px;margin-right:-22.5px;bottom:0;right:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-se{margin-right:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-handle.ord-sw{margin-bottom:-22.5px;margin-left:-22.5px;bottom:0;left:0}@media (min-width:760px){.uploadcare--jcrop-handle.ord-sw{margin-left:-17.5px;margin-bottom:-17.5px}}.uploadcare--jcrop-hline{width:100%;height:1px!important;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-hline.bottom{bottom:0}.uploadcare--jcrop-vline{width:1px!important;height:100%;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,.2);z-index:2147483620}.uploadcare--jcrop-vline.right{right:0}.uploadcare--jcrop-tracker{height:100%;width:100%;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.uploadcare--jcrop-holder img{max-width:none;max-height:none}.uploadcare--text{margin:0 0 10px;padding:0;font-size:17.5px;line-height:25px}.uploadcare--text:empty{display:none}.uploadcare--text_muted{color:#a4a2a1}.uploadcare--text_pre{box-sizing:border-box;overflow-x:auto;padding:20px;max-width:100%;background:#e3e1e1;font-family:monospace;white-space:pre;text-align:left}.uploadcare--text_size_small{font-size:15px;line-height:20px}.uploadcare--text_size_medium{font-size:20px;font-weight:700;line-height:25px}.uploadcare--text_size_large{font-size:22px;font-weight:700;line-height:25px}.uploadcare--text_size_extra-large{font-size:35px;line-height:45px}@media (min-width:760px){.uploadcare--text_size_extra-large{font-size:42.5px;line-height:50px}}.uploadcare--icon{all:initial;color:inherit;fill:currentColor;margin:0;padding:0;max-width:100%;width:32px;height:32px;cursor:inherit}.uploadcare--link,.uploadcare--link:link,.uploadcare--link:visited{cursor:pointer;color:#157cfc;text-decoration:underline}.uploadcare--link:focus,.uploadcare--link:hover{color:#3891ff;text-decoration:none}.uploadcare--link:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--link:active{color:#0969ee}.uploadcare--button{all:initial;-ms-flex-negative:0;flex-shrink:0;display:inline-block;overflow:hidden;box-sizing:border-box;margin:0;padding:10px;width:auto;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;background:transparent;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s}.uploadcare--button svg{pointer-events:none}.uploadcare--button:focus,.uploadcare--button:hover{background:transparent;border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--button:active{border-color:#0969ee;color:#0969ee}.uploadcare--button:disabled,.uploadcare--button[aria-disabled=true]{background:transparent!important;border-color:#d4d2d2!important;color:#d4d2d2!important;cursor:not-allowed}@media (min-width:760px){.uploadcare--button{padding:10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--button_icon{padding:14px;min-width:0;width:60px;height:60px}.uploadcare--button_muted{border-color:transparent!important;color:#a4a2a1;border-radius:0}.uploadcare--button_muted:focus,.uploadcare--button_muted:hover{color:#157cfc}.uploadcare--button_muted:disabled,.uploadcare--button_muted[aria-disabled=true]{border-color:transparent!important}.uploadcare--button_overlay{background:rgba(53,53,53,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:focus,.uploadcare--button_overlay:hover{background:hsla(0,0%,40%,.5);border-color:transparent;color:#fff}.uploadcare--button_overlay:active{background:rgba(33,33,33,.5)}.uploadcare--button_primary{background:#157cfc;border-color:#157cfc;color:#fff}.uploadcare--button_primary:focus,.uploadcare--button_primary:hover{background:#3891ff;border-color:#3891ff;color:#fff}.uploadcare--button_primary:active{background:#0969ee;border-color:#0969ee}.uploadcare--button_primary:disabled,.uploadcare--button_primary[aria-disabled=true]{background:#d4d2d2!important;border-color:#d4d2d2!important;color:#fff!important}.uploadcare--button_size_big{padding:10px 25px;font-size:20px;line-height:30px}.uploadcare--button_size_small{padding:5px 10px;min-width:80px;font-size:15px;line-height:20px}.uploadcare--input{-webkit-appearance:none;appearance:none;-ms-flex-negative:0;flex-shrink:0;display:block;box-sizing:border-box;margin:5px 0 15px;padding:10px 15px;width:100%;font-size:17.5px;line-height:25px;background:#fff;color:#353535;border:1px solid #a4a2a1;border-radius:2px;box-shadow:none}.uploadcare--input:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--input::placeholder{color:#a4a2a1}.uploadcare--form{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;box-sizing:border-box;max-width:400px;width:100%}.uploadcare--error{color:#e66a6a}.uploadcare--powered-by{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:7.5px 0;font-size:12.5px;line-height:15px;color:#fff;text-align:center}.uploadcare--powered-by__link{display:-ms-inline-flexbox;display:inline-flex;color:inherit!important;text-decoration:none!important}.uploadcare--powered-by__logo{display:-ms-inline-flexbox;display:inline-flex;width:20px;height:15px;vertical-align:text-bottom}.uploadcare--progress__canvas{width:100%;height:100%}.uploadcare--progress__text{display:table-cell;vertical-align:middle;text-align:center;font-size:60%;line-height:1}.uploadcare--progress__text-container{width:100%;height:100%;display:table;white-space:normal}.uploadcare--progress_type_canvas{padding:2px;width:32px;height:32px;color:#ffd800;border-color:#e3e1e1}.uploadcare--progressbar{overflow:hidden;width:100%;height:100%;background:#e3e1e1;border-radius:6px}.uploadcare--progressbar__value{width:0;height:100%;background:#ffd800}.uploadcare--menu{-ms-flex-negative:0;flex-shrink:0;width:100%;width:100vw;max-width:100%;height:100%;overflow:hidden}@media (min-width:760px){.uploadcare--menu{width:60px}}@media (max-width:759px){.uploadcare--menu{height:60px}}.uploadcare--menu__icon{-ms-flex-negative:0;flex-shrink:0;margin:14px}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__item_current:not(.uploadcare--menu__item_tab_file) .uploadcare--menu__icon{position:absolute;top:0;left:50%;transform:translateX(-50%);margin-left:0}}.uploadcare--menu__item{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100vw;height:60px;overflow:hidden;cursor:default;background:#e3e1e1;color:#666;transition:background .3s,color .3s}@media (min-width:760px){.uploadcare--menu__item{width:60px}}.uploadcare--menu__item:focus,.uploadcare--menu__item:hover{color:#157cfc}.uploadcare--menu__item:active{background-color:#fff;color:#0969ee}.uploadcare--menu__item:focus{outline:none;box-shadow:inset 0 0 0 2px rgba(21,124,252,.5)}.uploadcare--menu__item[aria-disabled=true]{background:#e3e1e1!important;color:#666!important;cursor:not-allowed}.uploadcare--menu__item:after{content:attr(title);-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;height:30px;font-size:17px;line-height:30px;white-space:nowrap}@media (min-width:760px){.uploadcare--menu__item:after{overflow:hidden;max-width:170px;text-overflow:ellipsis}}.uploadcare--menu__item_current,.uploadcare--menu__item_current:active,.uploadcare--menu__item_current:focus,.uploadcare--menu__item_current:hover{background-color:#fff;color:#353535}.uploadcare--menu__item_hidden{display:none}.uploadcare--menu__items{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;padding-right:100vw;overflow-y:auto;overflow-x:hidden;background:#e3e1e1}.uploadcare--menu__toggle{width:60px;height:60px;transition:none}.uploadcare--menu__toggle:focus{outline-offset:-2px}@media (min-width:760px){.uploadcare--menu__toggle{display:none}}@media (max-width:759px){.uploadcare--menu:not(.uploadcare--menu_opened) .uploadcare--menu__toggle-icon_back{display:none}}@media (max-width:759px){.uploadcare--menu_opened{position:relative;z-index:1000;height:100%}.uploadcare--menu_opened .uploadcare--menu__toggle{-ms-flex-pack:start;justify-content:flex-start;width:100%;text-align:left;background:#e3e1e1}.uploadcare--menu_opened .uploadcare--menu__toggle-icon_menu{display:none}.uploadcare--menu_opened .uploadcare--menu__items{height:calc(100% - 60px)}}.uploadcare--footer{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;box-sizing:border-box;width:100%;margin-top:10px;padding:5px 20px 15px}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer{display:block}}.uploadcare--footer:empty{display:none}.uploadcare--footer__additions{-ms-flex-positive:1;flex-grow:1;-ms-flex-order:1;order:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;box-sizing:border-box;padding:0 0 15px;text-align:center}@media (max-width:759px) and (orientation:landscape){.uploadcare--footer__additions{padding:0 20px}}@media (max-width:500px) and (orientation:landscape){.uploadcare--footer__additions{display:none}}@media (min-width:760px){.uploadcare--footer__additions{padding:0 20px}}.uploadcare--footer__additions:empty{visibility:hidden;padding:0}.uploadcare--footer__button{margin-top:5px;margin-bottom:5px}.uploadcare--footer__button:first-of-type{-ms-flex-order:0;order:0}.uploadcare--footer__button:nth-of-type(2){-ms-flex-order:2;order:2}@media (max-width:759px){.uploadcare--footer__button{max-width:calc(50% - 20px)}}@media (max-width:759px) and (orientation:portrait){.uploadcare--footer__button:first-of-type{float:left}.uploadcare--footer__button:nth-of-type(2){float:right}}.uploadcare--dragging .uploadcare--draganddrop{margin:20px;background:#e3e1e1;color:#a4a2a1;border:2px dashed;border-radius:20px}.uploadcare--draganddrop.uploadcare--dragging{color:#157cfc!important}@media (max-width:759px){.uploadcare--draganddrop__title{display:none}}.uploadcare--draganddrop:not(.uploadcare--draganddrop_supported) .uploadcare--draganddrop__supported,.uploadcare--draganddrop_supported .uploadcare--draganddrop__not-supported,.uploadcare--dragging .uploadcare--dialog__close,.uploadcare--dragging__show{display:none}.uploadcare--dragging .uploadcare--dragging__show{display:block}.uploadcare--dragging .uploadcare--dragging__hide{display:none}.uploadcare--file{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:justify;justify-content:space-between;box-sizing:border-box;padding:5px 0 5px 20px;color:#353535;cursor:default}.uploadcare--file:hover{background:rgba(21,124,252,.1)}.uploadcare--file__description{-ms-flex-positive:1;flex-grow:1;min-width:0;padding-right:20px;text-align:left}.uploadcare--file__description:focus,.uploadcare--file__description:focus .uploadcare--file__preview,.uploadcare--file__description:hover,.uploadcare--file__description:hover .uploadcare--file__preview{color:#157cfc}.uploadcare--file__description:active,.uploadcare--file__description:active .uploadcare--file__preview{color:#0969ee}.uploadcare--file__description:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:2px}.uploadcare--file__icon{max-width:100%;max-height:100%}.uploadcare--file__name{overflow:hidden;margin:0;max-width:calc(100vw - 200px);line-height:25px;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}@media (min-width:760px){.uploadcare--file__name{max-width:350px}}.uploadcare--file__preview{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;float:left;box-sizing:border-box;margin-right:10px;padding:2px;width:60px;height:60px;overflow:hidden;border:1px solid;border-radius:6px;background:transparent;color:#e3e1e1;transition:border .3s}.uploadcare--file__progressbar{-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;margin:0 10px;width:60px;height:10px}.uploadcare--file__size{font-size:12.5px;color:#a4a2a1}.uploadcare--file_status_error,.uploadcare--file_status_error .uploadcare--file__description,.uploadcare--file_status_error .uploadcare--file__preview{color:#e66a6a!important}.uploadcare--file_status_error .uploadcare--file__name{color:rgba(230,106,106,.5)!important}.uploadcare--file_status_error .uploadcare--file__progressbar,.uploadcare--file_status_error .uploadcare--file__size,.uploadcare--file_status_uploaded .uploadcare--file__progressbar{display:none}.uploadcare--file_status_uploading,.uploadcare--file_status_uploading .uploadcare--file__description{color:#353535!important}.uploadcare--file_status_uploading .uploadcare--file__name{max-width:calc(100vw - 280px)}@media (min-width:760px){.uploadcare--file_status_uploading .uploadcare--file__name{max-width:270px}}.uploadcare--file_status_uploading .uploadcare--file__preview{background:#ffd800;color:#ffd800!important}.uploadcare--files{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto;width:100%;height:100%}.uploadcare--files__item{-ms-flex-negative:0;flex-shrink:0}.uploadcare--crop-sizes{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.uploadcare--crop-sizes__item{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center;padding:0;height:65px;background:transparent;border-color:transparent;color:#353535}.uploadcare--crop-sizes__item:focus,.uploadcare--crop-sizes__item:hover{background:transparent;border-color:transparent;color:#157cfc}.uploadcare--crop-sizes__item:active{background:transparent;border-color:transparent;color:#0969ee}.uploadcare--crop-sizes__item:disabled,.uploadcare--crop-sizes__item[aria-disabled=true]{border-color:transparent!important}.uploadcare--crop-sizes__item:after{content:attr(data-caption);display:block;font-size:14px;line-height:25px;text-transform:uppercase}@media (max-width:400px),(max-width:600px) and (orientation:landscape){.uploadcare--crop-sizes__item:after{font-size:12px}}.uploadcare--crop-sizes__item:before{content:"";display:block;-ms-flex-order:1;order:1;margin:1px 0;width:6px;height:6px;background:transparent;border-radius:50%}.uploadcare--crop-sizes__item_current:active,.uploadcare--crop-sizes__item_current:focus,.uploadcare--crop-sizes__item_current:hover{color:#353535}.uploadcare--crop-sizes__item_current:before{background:#157cfc}.uploadcare--crop-sizes__icon{box-sizing:border-box;width:30px;height:30px;border:2px solid;border-radius:2px;color:inherit;transform:scale(.666)}.uploadcare--crop-sizes__icon_free{border:none;border-radius:0;transform:none}.uploadcare--file-source{margin:10px;border-color:#e3e1e1;background:#e3e1e1;color:#353535}.uploadcare--file-source_all{-ms-flex-order:1;order:1;border-color:currentColor;background:transparent;color:#157cfc}.uploadcare--file-sources{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;width:100%}@media (max-width:759px) and (max-height:450px),(min-width:760px){.uploadcare--file-sources{display:none}}.uploadcare--file-sources__caption{margin:15px 0 5px}@media (max-width:759px) and (max-height:550px){.uploadcare--file-sources__item:nth-child(4),.uploadcare--file-sources__item:nth-child(5),.uploadcare--file-sources__item:nth-child(6){display:none}}.uploadcare--file-sources__items{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:center;justify-content:center;max-width:300px}.uploadcare--file-sources__items:empty,.uploadcare--file-sources__items:not(.uploadcare--file-sources__items_many) .uploadcare--file-source__all{display:none}.uploadcare--media{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative;width:100%}.uploadcare--media__image{position:absolute;top:50%;left:50%;max-width:100%;max-height:100%;transform:translateX(-50%) translateY(-50%)}.uploadcare--media__video{all:initial;width:auto;max-width:100%;height:auto;min-height:100px;max-height:100%}@media (max-width:759px) and (max-height:379px){.uploadcare--media__video{max-height:120px}}@media (max-width:759px) and (min-height:380px) and (max-height:499px){.uploadcare--media__video{max-height:160px}}@media (max-width:759px) and (min-height:500px),(min-width:760px){.uploadcare--media__video{max-height:300px}}.uploadcare--camera__button{margin:5px 10px}.uploadcare--camera__button_type_mirror{position:absolute;top:15px;left:50%;margin:0;transform:translateX(-50%)}.uploadcare--camera__video{transition:transform .8s cubic-bezier(.23,1,.32,1)}.uploadcare--camera__video_mirrored{transform:scaleX(-1)}.uploadcare--camera__video-container{-ms-flex-positive:0;flex-grow:0;position:relative;margin-bottom:10px}.uploadcare--camera_status_denied .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_capture,.uploadcare--camera_status_denied .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_denied .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_denied .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_denied .uploadcare--camera__controls,.uploadcare--camera_status_denied .uploadcare--camera__not-found,.uploadcare--camera_status_denied .uploadcare--camera__please-allow,.uploadcare--camera_status_denied .uploadcare--camera__video-container,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_capture,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_retry,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_not-founded .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_not-founded .uploadcare--camera__controls,.uploadcare--camera_status_not-founded .uploadcare--camera__please-allow,.uploadcare--camera_status_not-founded .uploadcare--camera__video-container,.uploadcare--camera_status_ready .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_ready .uploadcare--camera__button_type_retry,.uploadcare--camera_status_ready .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_ready .uploadcare--camera__not-found,.uploadcare--camera_status_ready .uploadcare--camera__please-allow,.uploadcare--camera_status_recording .uploadcare--camera__button_type_capture,.uploadcare--camera_status_recording .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_recording .uploadcare--camera__button_type_retry,.uploadcare--camera_status_recording .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_recording .uploadcare--camera__device-select,.uploadcare--camera_status_recording .uploadcare--camera__not-found,.uploadcare--camera_status_recording .uploadcare--camera__please-allow,.uploadcare--camera_status_requested .uploadcare--camera__button_type_cancel-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_capture,.uploadcare--camera_status_requested .uploadcare--camera__button_type_mirror,.uploadcare--camera_status_requested .uploadcare--camera__button_type_retry,.uploadcare--camera_status_requested .uploadcare--camera__button_type_start-record,.uploadcare--camera_status_requested .uploadcare--camera__button_type_stop-record,.uploadcare--camera_status_requested .uploadcare--camera__controls,.uploadcare--camera_status_requested .uploadcare--camera__device-select,.uploadcare--camera_status_requested .uploadcare--camera__not-found,.uploadcare--camera_status_requested .uploadcare--camera__video-container{display:none}.uploadcare--camera__device-select{all:initial;display:none;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;box-sizing:border-box;margin:5px 10px 15px;padding:10px 60px 10px 10px;width:auto;max-width:500px;min-width:100px;height:auto;min-height:0;border-radius:6px;border:1px solid #157cfc;color:#157cfc;cursor:default;white-space:nowrap;text-overflow:ellipsis;text-align:center;font-family:inherit;font-size:15px;font-weight:400;font-style:normal;line-height:20px;box-shadow:none;text-shadow:none;transition:background .3s,color .3s,border .3s;background-image:linear-gradient(45deg,transparent 50%,#3891ff 0),linear-gradient(135deg,#3891ff 50%,transparent 0),linear-gradient(90deg,#ccc,#ccc);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) .5em;background-size:5px 5px,5px 5px,1px 1.5em;background-repeat:no-repeat}.uploadcare--camera__device-select svg{pointer-events:none}.uploadcare--camera__device-select:focus,.uploadcare--camera__device-select:hover{border-color:#3891ff;color:#3891ff;font-weight:400;font-style:normal;box-shadow:none;text-shadow:none}.uploadcare--camera__device-select:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--camera__device-select:active{border-color:#0969ee;color:#0969ee}@media (min-width:760px){.uploadcare--camera__device-select{padding:10px 60px 10px 20px;font-size:17.5px;line-height:25px}}.uploadcare--camera__device-select.uploadcare--camera__device-select_has-options{display:block}.uploadcare--crop-widget>.uploadcare--preview__image{filter:brightness(60%);transform:none}.uploadcare--tab{overflow:hidden;-ms-flex-align:stretch;align-items:stretch;text-align:center}.uploadcare--tab,.uploadcare--tab__content{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.uploadcare--tab__content{-ms-flex-negative:1;flex-shrink:1;-ms-flex-align:center;align-items:center;overflow-y:auto;padding:0 20px}.uploadcare--tab__header{-ms-flex-negative:0;flex-shrink:0;padding:0 20px;overflow:hidden}@media (min-width:760px){.uploadcare--tab__header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-right:60px;height:60px}}.uploadcare--tab__iframe{-ms-flex-positive:1;flex-grow:1;width:100%;height:100%;border:0;opacity:0}.uploadcare--tab__title{margin-top:10px;margin-bottom:10px}.uploadcare--tab:not(.uploadcare--tab_current),.uploadcare--tab_name_preview.uploadcare--tab_current~.uploadcare--panel__footer{display:none}.uploadcare--tab_remote.uploadcare--tab_current~.uploadcare--panel__footer{margin-top:0}.uploadcare--panel{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;box-sizing:border-box;overflow:hidden;width:100%;height:500px;border:1px solid #a4a2a1;border-radius:6px;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px}@media (min-width:760px){.uploadcare--panel{-ms-flex-direction:row;flex-direction:row}}.uploadcare--panel>.uploadcare--icons{position:absolute}.uploadcare--panel__content{-ms-flex-positive:1;flex-grow:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}.uploadcare--panel__file-counter{display:inline}.uploadcare--panel__footer{padding-top:15px;background:#fff9d8}.uploadcare--panel__icon{box-sizing:border-box;padding:3px}.uploadcare--panel__menu_hidden{display:none}.uploadcare--panel__message_hidden{color:#d4d2d2}.uploadcare--panel__powered-by{background:#353535;color:hsla(0,0%,100%,.5)}@media (min-width:760px){.uploadcare--panel__powered-by{display:none}}.uploadcare--tab:not(:nth-child(2)).uploadcare--tab_current~.uploadcare--panel__powered-by{display:none}@media (max-width:759px){.uploadcare--panel_menu-hidden .uploadcare--tab__header{padding:6px 60px 0;min-height:60px}}.uploadcare--panel:not(.uploadcare--panel_multiple) .uploadcare--panel__footer{display:none}.uploadcare--panel_multiple .uploadcare--panel__content{position:relative}.uploadcare--panel_multiple .uploadcare--tab_name_preview{position:absolute;top:0;left:0;height:100%;width:100%}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__content{padding-left:0;padding-right:0}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer{position:relative;margin-top:0;padding-top:15px}.uploadcare--panel_multiple .uploadcare--tab_name_preview .uploadcare--tab__footer:before{content:"";position:absolute;top:0;left:20px;width:calc(100% - 40px);height:1px;background:#e3e1e1}.uploadcare--preview__content{overflow:hidden}.uploadcare--preview__content_crop{padding:10px 20px}.uploadcare--dialog{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:stretch;align-items:stretch;position:fixed;top:0;left:0;z-index:2147483647;box-sizing:border-box;overflow:hidden;-ms-touch-action:none;touch-action:none;width:100%;height:100%;background:#fff;color:#353535;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Arial,sans-serif;font-weight:400;font-size:15px;line-height:20px;opacity:0;transition:opacity .33s cubic-bezier(.05,.7,.25,1)}@media (min-width:760px){.uploadcare--dialog{-ms-flex-align:center;align-items:center;overflow-y:auto;background:rgba(0,0,0,.5)}}@media (min-width:760px) and (max-height:559px){.uploadcare--dialog{padding-top:30px}}@media (min-width:760px) and (min-height:560px){.uploadcare--dialog{-ms-flex-pack:center;justify-content:center}}.uploadcare--dialog__close{position:absolute;top:0;right:0;z-index:49}.uploadcare--dialog__close:focus{outline-offset:-2px}.uploadcare--dialog__container{display:-ms-flexbox;display:flex;position:relative;overflow:hidden}@media (max-width:759px){.uploadcare--dialog__container{-ms-flex-positive:1;flex-grow:1;height:100%}}@media (min-width:760px){.uploadcare--dialog__container{width:calc(100% - 60px);max-width:900px;height:calc(100% - 60px);min-height:500px;max-height:660px;border-radius:6px;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}}@media (min-width:1210px){.uploadcare--dialog__container{max-width:1050px}}.uploadcare--dialog__panel{height:100%;border:none;border-radius:0}@media (min-width:1210px){.uploadcare--dialog__panel .uploadcare--menu,.uploadcare--dialog__panel .uploadcare--menu__item{width:250px}}.uploadcare--dialog__powered-by{-ms-flex-negative:0;flex-shrink:0}@media (max-width:759px){.uploadcare--dialog__powered-by{display:none}}.uploadcare--dialog_status_active{opacity:1}.uploadcare--widget{display:inline-block;vertical-align:baseline}.uploadcare--dragging .uploadcare--widget,.uploadcare--widget.uploadcare--dragging{position:relative}.uploadcare--widget__button{all:initial;display:inline-block;box-sizing:border-box;margin:0;padding:.4em 1em;width:auto;min-width:0;height:auto;min-height:0;border-radius:6px;border:none;background:#c3c3c3;color:#fff;cursor:default;text-align:center;white-space:nowrap;font:inherit;line-height:inherit;box-shadow:none;text-shadow:inherit;transition:background .3s}.uploadcare--widget__button:focus,.uploadcare--widget__button:hover{background:#b3b3b3;color:#fff;font:inherit;box-shadow:none;text-shadow:inherit}.uploadcare--widget__button:focus{outline:2px solid rgba(21,124,252,.5);outline-offset:1px}.uploadcare--widget__button:active{background:#b3b3b3}.uploadcare--widget__button:disabled{background:#c3c3c3;color:#fff;cursor:not-allowed}.uploadcare--widget__button_type_open{background:#157cfc;color:#fff}.uploadcare--widget__button_type_open:focus,.uploadcare--widget__button_type_open:hover{background:#3891ff}.uploadcare--widget__button_type_open:active{background:#0969ee}.uploadcare--widget__button_type_open:disabled{background:#c3c3c3}.uploadcare--widget__dragndrop-area{position:absolute;top:0;left:0;box-sizing:border-box;min-width:100%;min-height:100%;margin:0;padding:calc(.4em - 1.5px) 1em;font:inherit;line-height:inherit;text-align:center;white-space:nowrap;border:1.5px dashed;border-radius:6px;background:#e3e1e1;color:#a4a2a1;transition:color .3s;display:none}.uploadcare--dragging .uploadcare--widget__dragndrop-area{display:block}.uploadcare--widget.uploadcare--dragging .uploadcare--widget__dragndrop-area{color:#157cfc}.uploadcare--widget__file-name,.uploadcare--widget__file-size{display:inline}.uploadcare--widget__progress{display:inline-block;width:1.8em;height:1.8em;margin:0 .2em 0 0;padding:0;line-height:0;vertical-align:middle}.uploadcare--widget__text{display:inline-block;box-sizing:border-box;margin-right:.2em;padding:.4em 0;white-space:nowrap}.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_error .uploadcare--widget__button_type_remove,.uploadcare--widget:not(.uploadcare--widget_option_clearable).uploadcare--widget_status_loaded .uploadcare--widget__button_type_remove,.uploadcare--widget_option_clearable.uploadcare--widget_status_error .uploadcare--widget__button_type_open,.uploadcare--widget_status_error .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_error .uploadcare--widget__progress,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_loaded .uploadcare--widget__button_type_open,.uploadcare--widget_status_loaded .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__button_type_cancel,.uploadcare--widget_status_ready .uploadcare--widget__button_type_remove,.uploadcare--widget_status_ready .uploadcare--widget__progress,.uploadcare--widget_status_ready .uploadcare--widget__text,.uploadcare--widget_status_started .uploadcare--widget__button_type_open,.uploadcare--widget_status_started .uploadcare--widget__button_type_remove{display:none}.uploadcare--page{width:auto;min-width:0;max-width:100%;height:auto;min-height:0;max-height:100%;overflow:hidden}.uploadcare--mouse-focused:focus{outline:none}';
            },
        },
        En = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = Fn[e];
            return null != i ? i(t({}, n)) : "";
        };
    j() &&
        ht.add(function (e) {
            var t = En("styles", { settings: e }),
                n = document.createElement("style");
            return n.setAttribute("type", "text/css"), null != n.styleSheet ? (n.styleSheet.cssText = t) : n.appendChild(document.createTextNode(t)), k("head").prepend(n);
        });
    var In = function (e) {
            return "[data-status=started], [data-status=error]", !e.find(".uploadcare--widget").is("[data-status=started], [data-status=error]");
        },
        Pn = function (e, t) {
            return e.attr("data-uploadcare-submitted", t), e.find(":submit").attr("disabled", t);
        },
        Mn = '[role~="uploadcare-upload-form"]',
        On = Mn + "[data-uploadcare-submitted]";
    if (j()) {
        k(document).on("submit", Mn, function () {
            var e;
            return (e = k(this)), !!In(e) || (Pn(e, !0), !1);
        }),
            k(document).on("loaded.uploadcare", On, function () {
                return k(this).submit();
            });
        k(document).on("ready.uploadcare error.uploadcare", On, function () {
            var e;
            if (((e = k(this)), In(e))) return Pn(e, !1);
        });
    }
    var Ln = [".uploadcare--menu__item", ".uploadcare--file__description", ".uploadcare--crop-sizes__item"].join(", ");
    j() &&
        k(document.documentElement)
            .on("mousedown", Ln, function (e) {
                return X(function () {
                    var e;
                    if ((e = document.activeElement) && e !== document.body)
                        return k(e)
                            .addClass("uploadcare--mouse-focused")
                            .one("blur", function () {
                                return k(e).removeClass("uploadcare--mouse-focused");
                            });
                });
            })
            .on("keypress", Ln, function (e) {
                if (13 === e.which || 32 === e.which) return k(this).click(), e.preventDefault(), e.stopPropagation();
            });
    var Nn = (function () {
            function e(t) {
                r(this, e), (this.renderer = O ? new qn(t) : new Bn(t)), (this.observed = null);
            }
            return (
                o(e, [
                    {
                        key: "listen",
                        value: function (e, t) {
                            var n,
                                i = this;
                            return (
                                this.reset(),
                                (n =
                                    null != t
                                        ? function (e) {
                                              return e[t];
                                          }
                                        : function (e) {
                                              return e;
                                          }),
                                (this.observed = e),
                                "resolved" === this.observed.state()
                                    ? this.renderer.setValue(1, !0)
                                    : this.observed
                                          .progress(function (t) {
                                              e === i.observed && i.renderer.setValue(n(t));
                                          })
                                          .always(function (t) {
                                              e === i.observed && i.renderer.setValue(1, !1);
                                          }),
                                this
                            );
                        },
                    },
                    {
                        key: "reset",
                        value: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            (this.observed = null), this.renderer.setValue(e ? 1 : 0, !0);
                        },
                    },
                    {
                        key: "update",
                        value: function () {
                            this.renderer.update();
                        },
                    },
                ]),
                e
            );
        })(),
        Rn = (function () {
            function e(t) {
                r(this, e), (this.element = k(t)), this.element.data("uploadcare-progress-renderer", this), this.element.addClass("uploadcare--progress");
            }
            return o(e, [{ key: "update", value: function () {} }]), e;
        })(),
        Bn = (function (e) {
            u(n, e);
            var t = h(n);
            function n() {
                var e;
                return r(this, n), (e = t.apply(this, arguments)).element.addClass("uploadcare--progress_type_text"), e.element.html(En("progress__text")), (e.text = e.element.find(".uploadcare--progress__text")), e;
            }
            return (
                o(n, [
                    {
                        key: "setValue",
                        value: function (e) {
                            (e = Math.round(100 * e)), this.text.html("".concat(e, " %"));
                        },
                    },
                ]),
                n
            );
        })(Rn),
        qn = (function (e) {
            u(n, e);
            var t = h(n);
            function n() {
                var e;
                return (
                    r(this, n),
                    ((e = t.apply(this, arguments)).canvasEl = k("<canvas>").addClass("uploadcare--progress__canvas").get(0)),
                    e.element.addClass("uploadcare--progress_type_canvas"),
                    e.element.html(e.canvasEl),
                    e.setValue(0, !0),
                    e
                );
            }
            return (
                o(n, [
                    {
                        key: "update",
                        value: function () {
                            var e = this;
                            window.cancelAnimationFrame(this.__rafId),
                                (this.__rafId = window.requestAnimationFrame(function () {
                                    var t = Math.floor(Math.min(e.element.width(), e.element.height())),
                                        n = 2 * t;
                                    if (t) {
                                        (e.canvasEl.width === n && e.canvasEl.height === n) || ((e.canvasEl.width = n), (e.canvasEl.height = n));
                                        var i = e.canvasEl.getContext("2d"),
                                            r = function (e, n) {
                                                var r;
                                                (r = -Math.PI / 2), i.beginPath(), i.moveTo(t, t), i.arc(t, t, e, r, r + 2 * Math.PI * n, !1), i.fill();
                                            };
                                        i.clearRect(0, 0, n, n),
                                            (i.globalCompositeOperation = "source-over"),
                                            (i.fillStyle = e.element.css("border-left-color")),
                                            r(t - 0.5, 1),
                                            (i.fillStyle = e.element.css("color")),
                                            r(t, e.val),
                                            (i.globalCompositeOperation = "destination-out"),
                                            r(t / 7, 1);
                                    }
                                }));
                        },
                    },
                    {
                        key: "__animateValue",
                        value: function (e) {
                            var t,
                                n,
                                i,
                                r = this;
                            (i = this.val),
                                (n = new Date()),
                                (t = e > i ? 2 : -2),
                                (this.__animIntervalId = setInterval(function () {
                                    var a;
                                    (a = i + ((new Date() - n) / 1e3) * t), (a = (t > 0 ? Math.min : Math.max)(a, e)) === e && r.__stopAnimation(), r.__setValue(a);
                                }, 15));
                        },
                    },
                    {
                        key: "__stopAnimation",
                        value: function () {
                            this.__animIntervalId && clearInterval(this.__animIntervalId), (this.__animIntervalId = null);
                        },
                    },
                    {
                        key: "__setValue",
                        value: function (e) {
                            (this.val = e), this.element.attr("aria-valuenow", (100 * e).toFixed(0)), this.update();
                        },
                    },
                    {
                        key: "setValue",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.__stopAnimation(), t ? this.__setValue(e) : this.__animateValue(e);
                        },
                    },
                ]),
                n
            );
        })(Rn),
        Un = L,
        Vn = function (e, t, n) {
            return (
                (n = ft(n)),
                Hn(e, function (e, i) {
                    return t(n.multiple ? en(e, i, n) : Qt(e, i[0], n));
                })
            );
        },
        Hn = Un
            ? function (e, t) {
                  Wn(e),
                      k(e).on({
                          dragover: function (e) {
                              e.preventDefault(), (e.originalEvent.dataTransfer.dropEffect = "copy");
                          },
                          drop: function (e) {
                              var n, i, r, a, o, l;
                              if ((e.preventDefault(), (n = e.originalEvent.dataTransfer))) {
                                  if (n.files.length) return t("object", n.files);
                                  for (l = [], i = 0, r = (a = n.getData("text/uri-list").split()).length; i < r; i++) (o = a[i]), (o = k.trim(o)) && "#" !== o[0] && l.push(o);
                                  return l ? t("url", l) : void 0;
                              }
                          },
                      });
              }
            : function () {},
        Wn = Un
            ? function (e, t) {
                  var n, i, r;
                  return (
                      (r = !1),
                      (i = 0),
                      (n = function (t) {
                          if (r !== t) return (r = t), k(e).toggleClass("uploadcare--dragging", t);
                      }),
                      k(t || e).on({
                          dragenter: function () {
                              return (i += 1), n(!0);
                          },
                          dragleave: function () {
                              if (0 === (i -= 1)) return n(!1);
                          },
                          "drop mouseenter": function () {
                              return (i = 0), n(!1);
                          },
                      })
                  );
              }
            : function () {};
    j() && Wn("body", document);
    var Kn,
        Gn,
        Xn = (function () {
            function e(t, n) {
                r(this, e),
                    (this.settings = t),
                    (this.element = n),
                    (this.content = k(En("widget"))),
                    this.element.after(this.content),
                    (this.circle = new Nn(this.content.find(".uploadcare--widget__progress").removeClass("uploadcare--widget__progress"))),
                    this.content.find(".uploadcare--progress").addClass("uploadcare--widget__progress"),
                    (this.statusText = this.content.find(".uploadcare--widget__text")),
                    this.content.toggleClass("uploadcare--widget_option_clearable", this.settings.clearable);
            }
            return (
                o(e, [
                    {
                        key: "addButton",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            return k(En("widget-button", { name: e, caption: t })).appendTo(this.content);
                        },
                    },
                    {
                        key: "setStatus",
                        value: function (e) {
                            var t;
                            return (
                                (t = "uploadcare--widget_status_"),
                                this.content.removeClass(t + this.content.attr("data-status")),
                                this.content.attr("data-status", e),
                                this.content.addClass(t + e),
                                this.element.trigger("".concat(e, ".uploadcare"))
                            );
                        },
                    },
                    {
                        key: "reset",
                        value: function () {
                            return this.circle.reset(), this.setStatus("ready"), this.content.attr("aria-busy", !1), (this.__file = void 0), this.__file;
                        },
                    },
                    {
                        key: "loaded",
                        value: function () {
                            return this.setStatus("loaded"), this.content.attr("aria-busy", !1), this.circle.reset(!0);
                        },
                    },
                    {
                        key: "listen",
                        value: function (e) {
                            var t = this;
                            return (
                                (this.__file = e),
                                this.circle.listen(e, "uploadProgress"),
                                this.setStatus("started"),
                                this.content.attr("aria-busy", !0),
                                e.progress(function (n) {
                                    if (e === t.__file)
                                        switch (n.state) {
                                            case "uploading":
                                                return t.statusText.text(fn.t("uploading"));
                                            case "uploaded":
                                                return t.statusText.text(fn.t("loadingInfo"));
                                        }
                                })
                            );
                        },
                    },
                    {
                        key: "error",
                        value: function (e, t) {
                            var n = (this.settings.debugUploads && (null == t ? void 0 : t.message)) || fn.t("serverErrors.".concat(null == t ? void 0 : t.code)) || (null == t ? void 0 : t.message) || fn.t("errors.".concat(e || "default"));
                            return this.statusText.text(n), this.content.attr("aria-busy", !1), this.setStatus("error");
                        },
                    },
                    {
                        key: "setFileInfo",
                        value: function (e) {
                            return this.statusText.html(En("widget-file-name", e)).find(".uploadcare--widget__file-name").toggleClass("needsclick", this.settings.systemDialog);
                        },
                    },
                ]),
                e
            );
        })(),
        Yn = (function () {
            function e(t, n, i, a, o) {
                r(this, e),
                    (this.__initTabsList = this.__initTabsList.bind(this)),
                    (this.container = t),
                    (this.tabButton = n),
                    (this.dialogApi = i),
                    (this.settings = a),
                    (this.name = o),
                    this.container.append(En("tab-file")),
                    this.__setupFileButton(),
                    this.__initDragNDrop(),
                    this.__initTabsList();
            }
            return (
                o(e, [
                    {
                        key: "__initDragNDrop",
                        value: function () {
                            var e,
                                t = this;
                            if (((e = this.container.find(".uploadcare--draganddrop")), L))
                                return (
                                    Hn(e, function (e, n) {
                                        return t.settings.multiple ? t.dialogApi.addFiles(e, n) : t.dialogApi.addFiles(e, [n[0]]), t.dialogApi.switchTab("preview");
                                    }),
                                    e.addClass("uploadcare--draganddrop_supported")
                                );
                        },
                    },
                    {
                        key: "__setupFileButton",
                        value: function () {
                            var e,
                                t = this;
                            return (
                                (e = this.container.find(".uploadcare--tab__action-button")),
                                P
                                    ? e.on("click", function () {
                                          return (
                                              me(t.container, t.settings, function (e) {
                                                  return t.dialogApi.addFiles("object", e.files), t.dialogApi.switchTab("preview");
                                              }),
                                              !1
                                          );
                                      })
                                    : ge(e, this.settings, function (e) {
                                          return t.dialogApi.addFiles("input", [e]), t.dialogApi.switchTab("preview");
                                      })
                            );
                        },
                    },
                    {
                        key: "__initTabsList",
                        value: function () {
                            var e,
                                t,
                                n,
                                i,
                                r,
                                a,
                                o = this;
                            for ((n = this.container.find(".uploadcare--file-sources__items")).remove(".uploadcare--file-sources__item:not(.uploadcare--file-source_all)"), i = 0, e = 0, t = (r = this.settings.tabs).length; e < t; e++)
                                "file" !== (a = r[e]) && "url" !== a && "camera" !== a && this.dialogApi.isTabVisible(a) && ((i += 1) > 5 || n.append([this.__tabButton(a), " "]));
                            return (
                                n.find(".uploadcare--file-source_all").on("click", function () {
                                    return o.dialogApi.openMenu();
                                }),
                                i > 5 && n.addClass("uploadcare--file-sources__items_many"),
                                this.container.find(".uploadcare--file-sources").attr("hidden", 0 === i)
                            );
                        },
                    },
                    {
                        key: "__tabButton",
                        value: function (e) {
                            var t,
                                n = this;
                            return (
                                (t = k("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-".concat(e, "'/></svg>")).attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--file-source__icon")),
                                k("<button>")
                                    .addClass("uploadcare--button")
                                    .addClass("uploadcare--button_icon")
                                    .addClass("uploadcare--file-source")
                                    .addClass("uploadcare--file-source_".concat(e))
                                    .addClass("uploadcare--file-sources__item")
                                    .attr("type", "button")
                                    .attr("title", fn.t("dialog.tabs.names.".concat(e)))
                                    .attr("data-tab", e)
                                    .append(t)
                                    .on("click", function () {
                                        return n.dialogApi.switchTab(e);
                                    })
                            );
                        },
                    },
                    {
                        key: "displayed",
                        value: function () {
                            this.dialogApi.takeFocus() && this.container.find(".uploadcare--tab__action-button").focus();
                        },
                    },
                ]),
                e
            );
        })(),
        $n = (function () {
            function e(t, n, i, a, o) {
                var l,
                    s,
                    u = this;
                r(this, e),
                    (this.container = t),
                    (this.tabButton = n),
                    (this.dialogApi = i),
                    (this.settings = a),
                    (this.name = o),
                    this.container.append(En("tab-url")),
                    (s = this.container.find(".uploadcare--input")).on("change keyup input", function () {
                        var e = !k.trim(this.value);
                        return l.attr("disabled", e).attr("aria-disabled", e);
                    }),
                    (l = this.container.find(".uploadcare--button[type=submit]").attr("disabled", !0)),
                    this.container.find(".uploadcare--form").on("submit", function () {
                        var e = Kn(s.val());
                        return e && (u.dialogApi.addFiles("url", [[e, { source: "url-tab" }]]), s.val("").trigger("change")), !1;
                    });
            }
            return (
                o(e, [
                    {
                        key: "displayed",
                        value: function () {
                            this.dialogApi.takeFocus() && this.container.find(".uploadcare--input").focus();
                        },
                    },
                ]),
                e
            );
        })();
    (Gn = /^[a-z][a-z0-9+\-.]*:?\/\//),
        (Kn = function (e) {
            return (e = k.trim(e)), Gn.test(e) ? e : "http://" + e;
        });
    var Jn,
        Zn = j() && "https:" === document.location.protocol,
        Qn = (function () {
            function e(t, n, i, a, o) {
                var l;
                if (
                    (r(this, e),
                    (this.__captureInput = this.__captureInput.bind(this)),
                    (this.__captureInputHandle = this.__captureInputHandle.bind(this)),
                    (this.__setState = this.__setState.bind(this)),
                    (this.__requestCamera = this.__requestCamera.bind(this)),
                    (this.__revoke = this.__revoke.bind(this)),
                    (this.__mirror = this.__mirror.bind(this)),
                    (this.__capture = this.__capture.bind(this)),
                    (this.__startRecording = this.__startRecording.bind(this)),
                    (this.__stopRecording = this.__stopRecording.bind(this)),
                    (this.__cancelRecording = this.__cancelRecording.bind(this)),
                    (this.__onDeviceSelect = this.__onDeviceSelect.bind(this)),
                    (this.__requestDevicesList = this.__requestDevicesList.bind(this)),
                    (this.container = t),
                    (this.tabButton = n),
                    (this.dialogApi = i),
                    (this.settings = a),
                    (this.name = o),
                    this.__checkCapture())
                )
                    this.container.append(En("tab-camera-capture")),
                        this.container.addClass("uploadcare--camera"),
                        this.container.find(".uploadcare--camera__button_type_photo").on("click", this.__captureInput("image/*")),
                        (l = this.container.find(".uploadcare--camera__button_type_video").on("click", this.__captureInput("video/*"))),
                        this.settings.imagesOnly && l.hide();
                else {
                    if (!this.__checkCompatibility()) return void this.dialogApi.hideTab(this.name);
                    this.__initCamera();
                }
            }
            return (
                o(e, [
                    {
                        key: "__captureInput",
                        value: function (e) {
                            var t = this;
                            return function () {
                                return me(t.container, { inputAcceptTypes: e }, t.__captureInputHandle, { capture: "camera" });
                            };
                        },
                    },
                    {
                        key: "__captureInputHandle",
                        value: function (e) {
                            return this.dialogApi.addFiles("object", e.files), this.dialogApi.switchTab("preview");
                        },
                    },
                    {
                        key: "__subscribePermissions",
                        value: function () {
                            var e = this;
                            navigator.permissions
                                .query({ name: "camera" })
                                .then(function (t) {
                                    t.addEventListener("change", function () {
                                        e.__requestDevicesList();
                                    });
                                })
                                .catch(function () {});
                        },
                    },
                    {
                        key: "__initCamera",
                        value: function () {
                            var e = this;
                            (this.__loaded = !1),
                                (this.mirrored = this.settings.cameraMirrorDefault),
                                this.container.append(En("tab-camera")),
                                this.container.addClass("uploadcare--camera"),
                                this.container.addClass("uploadcare--camera_status_requested"),
                                this.container.find(".uploadcare--camera__button_type_capture").on("click", this.__capture);
                            var t = this.container.find(".uploadcare--camera__button_type_start-record").on("click", this.__startRecording);
                            this.container.find(".uploadcare--camera__button_type_stop-record").on("click", this.__stopRecording),
                                this.container.find(".uploadcare--camera__button_type_cancel-record").on("click", this.__cancelRecording),
                                this.container.find(".uploadcare--camera__button_type_mirror").on("click", this.__mirror),
                                this.container.find(".uploadcare--camera__button_type_retry").on("click", this.__requestDevicesList),
                                this.container.find(".uploadcare--camera__device-select").on("change", this.__onDeviceSelect),
                                void 0 !== navigator.permissions && this.__subscribePermissions(),
                                (this.MediaRecorder && !this.settings.imagesOnly && this.settings.enableVideoRecording) || t.hide(),
                                (this.video = this.container.find(".uploadcare--camera__video")),
                                this.video.toggleClass("uploadcare--camera__video_mirrored", this.mirrored),
                                this.video.on("loadeddata", function () {
                                    return this.play();
                                }),
                                this.dialogApi.progress(function (t) {
                                    t === e.name ? e.__loaded || e.__requestDevicesList() : e.__loaded && Zn && e.__revoke();
                                }),
                                this.dialogApi.always(this.__revoke);
                        },
                    },
                    {
                        key: "__checkCompatibility",
                        value: function () {
                            navigator.mediaDevices &&
                                navigator.mediaDevices.enumerateDevices &&
                                (this.enumerateVideoDevices = function () {
                                    return navigator.mediaDevices.enumerateDevices().then(function (e) {
                                        return e.filter(function (e) {
                                            return "videoinput" === e.kind;
                                        });
                                    });
                                }),
                                navigator.mediaDevices && navigator.mediaDevices.getUserMedia
                                    ? (this.getUserMedia = function (e) {
                                          return navigator.mediaDevices.getUserMedia(e);
                                      })
                                    : (this.getUserMedia = function (e) {
                                          var t = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia,
                                              n = k.Deferred();
                                          return (
                                              t.call(
                                                  navigator,
                                                  e,
                                                  function (e) {
                                                      return n.resolve(e);
                                                  },
                                                  function (e) {
                                                      return n.reject(e);
                                                  }
                                              ),
                                              n.promise()
                                          );
                                      }),
                                (this.URL = window.URL || window.webkitURL),
                                (this.MediaRecorder = window.MediaRecorder),
                                Zn || z("Camera is not allowed for HTTP. Please use HTTPS connection.");
                            var e = "localhost" === document.location.hostname;
                            return !!this.getUserMedia && Uint8Array && (Zn || e);
                        },
                    },
                    {
                        key: "__checkCapture",
                        value: function () {
                            var e;
                            return (e = document.createElement("input")).setAttribute("capture", "camera"), !!e.capture;
                        },
                    },
                    {
                        key: "__setState",
                        value: function (e) {
                            var t = ["", "ready", "requested", "denied", "not-founded", "recording", "error"].join(" uploadcare--camera_status_");
                            this.container.removeClass(t).addClass("uploadcare--camera_status_".concat(e)), this.container.find(".uploadcare--camera__button").focus();
                        },
                    },
                    {
                        key: "__requestDevicesList",
                        value: function () {
                            var e = this;
                            this.enumerateVideoDevices
                                ? this.getUserMedia({ video: !0, audio: !0 })
                                      .then(function (t) {
                                          return e.enumerateVideoDevices().then(function (e) {
                                              return (
                                                  t.getTracks().forEach(function (e) {
                                                      return e.stop();
                                                  }),
                                                  e
                                              );
                                          });
                                      })
                                      .then(function (t) {
                                          var n;
                                          (e.__groupId = null == t || null === (n = t[0]) || void 0 === n ? void 0 : n.groupId), e.__renderDevicesList(t);
                                      })
                                      .then(function () {
                                          return e.__requestCamera();
                                      })
                                      .catch(function () {
                                          return e.__requestCamera();
                                      })
                                : this.__requestCamera();
                        },
                    },
                    {
                        key: "__requestCamera",
                        value: function () {
                            var e = this;
                            this.__stream && this.__revoke(), (this.__loaded = !0);
                            var t = { audio: this.settings.enableAudioRecording, video: { width: { ideal: 1920 }, height: { ideal: 1080 }, frameRate: { ideal: 30 } } };
                            return (
                                this.__groupId && ((t.video.groupId = { exact: this.__groupId }), (t.audio = t.audio && { exact: this.__groupId })),
                                this.getUserMedia
                                    .call(navigator, t)
                                    .then(function (t) {
                                        e.__setState("ready"),
                                            (e.__stream = t),
                                            t.addEventListener("inactive", function () {
                                                e.__setState("denied");
                                            });
                                        var n = e.__getGroupIdByStream(t);
                                        return (
                                            (e.__groupId = n),
                                            "srcObject" in e.video[0]
                                                ? (e.video.prop("srcObject", t),
                                                  e.video.on("loadedmetadata", function () {
                                                      return e.video[0].play();
                                                  }))
                                                : (e.URL ? ((e.__streamObject = e.URL.createObjectURL(t)), e.video.prop("src", e.__streamObject)) : e.video.prop("src", t), e.video[0].play())
                                        );
                                    })
                                    .catch(function (t) {
                                        var n = Object.create(null);
                                        return (
                                            (n.NotFoundError = function () {
                                                e.__setState("not-founded");
                                            }),
                                            (n.NotAllowedError = function () {
                                                e.__setState("denied");
                                            }),
                                            (n.other = function () {
                                                e.__setState("denied"), console.warn("Camera error occurred: " + t.name);
                                            }),
                                            (n[t.name] || n.other)(),
                                            (e.__loaded = !1),
                                            e.__loaded
                                        );
                                    })
                            );
                        },
                    },
                    {
                        key: "__revoke",
                        value: function () {
                            var e;
                            this.__setState("requested"),
                                (this.__loaded = !1),
                                this.__stream &&
                                    (this.__streamObject && this.URL.revokeObjectURL(this.__streamObject),
                                    this.__stream.getTracks
                                        ? k.each(this.__stream.getTracks(), function () {
                                              return "function" == typeof this.stop ? this.stop() : void 0;
                                          })
                                        : "function" == typeof (e = this.__stream).stop && e.stop(),
                                    (this.__stream = null));
                        },
                    },
                    {
                        key: "__mirror",
                        value: function () {
                            return (this.mirrored = !this.mirrored), this.video.toggleClass("uploadcare--camera__video_mirrored", this.mirrored);
                        },
                    },
                    {
                        key: "__capture",
                        value: function () {
                            var e,
                                t,
                                n,
                                i,
                                r,
                                a = this;
                            return (
                                (r = (i = this.video[0]).videoWidth),
                                (n = i.videoHeight),
                                ((e = document.createElement("canvas")).width = r),
                                (e.height = n),
                                (t = e.getContext("2d")),
                                this.mirrored && (t.translate(r, 0), t.scale(-1, 1)),
                                t.drawImage(i, 0, 0, r, n),
                                we(e, "image/jpeg", 0.9, function (t) {
                                    return (e.width = e.height = 1), (t.name = "camera.jpg"), a.dialogApi.addFiles("object", [[t, { source: "camera" }]]), a.dialogApi.switchTab("preview");
                                })
                            );
                        },
                    },
                    {
                        key: "__startRecording",
                        value: function () {
                            var e = this;
                            this.__setState("recording"), (this.__chunks = []);
                            var t = {},
                                n = this.settings.videoPreferredMimeTypes;
                            if (null != n) {
                                var i = (function (e, t) {
                                    for (var n = e.length, i = 0; i < n; ) {
                                        var r = e[i];
                                        if (t(r)) return r;
                                        i++;
                                    }
                                })(k.isArray(n) ? n : [n], function (t) {
                                    return e.MediaRecorder.isTypeSupported(t);
                                });
                                null != i && (t.mimeType = i);
                            }
                            var r = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
                            return (
                                null == t.mimeType && r && this.MediaRecorder.isTypeSupported("video/webm") && (t.mimeType = "video/webm"),
                                null !== this.settings.audioBitsPerSecond && (t.audioBitsPerSecond = this.settings.audioBitsPerSecond),
                                null !== this.settings.videoBitsPerSecond && (t.videoBitsPerSecond = this.settings.videoBitsPerSecond),
                                0 !== Object.keys(t).length ? (this.__recorder = new this.MediaRecorder(this.__stream, t)) : (this.__recorder = new this.MediaRecorder(this.__stream)),
                                this.__recorder.start(),
                                (this.__recorder.ondataavailable = function (t) {
                                    return e.__chunks.push(t.data);
                                }),
                                this.__recorder.ondataavailable
                            );
                        },
                    },
                    {
                        key: "__stopRecording",
                        value: function () {
                            var e = this;
                            return (
                                this.__setState("ready"),
                                (this.__recorder.onstop = function () {
                                    var t, n;
                                    return (
                                        (t = new window.Blob(e.__chunks, { type: e.__recorder.mimeType })),
                                        (n = e.__guessExtensionByMime(e.__recorder.mimeType)),
                                        (t.name = "record.".concat(n)),
                                        e.dialogApi.addFiles("object", [[t, { source: "camera" }]]),
                                        e.dialogApi.switchTab("preview"),
                                        (e.__chunks = []),
                                        e.__chunks
                                    );
                                }),
                                this.__recorder.stop()
                            );
                        },
                    },
                    {
                        key: "__cancelRecording",
                        value: function () {
                            return this.__setState("ready"), this.__recorder.stop(), (this.__chunks = []), this.__chunks;
                        },
                    },
                    {
                        key: "__onDeviceSelect",
                        value: function (e) {
                            var t = e.target.value;
                            (this.__groupId = t), this.__requestCamera();
                        },
                    },
                    {
                        key: "__renderDevicesList",
                        value: function (e) {
                            var t = this,
                                n = this.container.find(".uploadcare--camera__device-select");
                            n.empty(),
                                e.forEach(function (e, i) {
                                    var r = t.__groupId ? e.groupId === t.__groupId : 0 === i;
                                    n.append(k("<option>", { value: e.groupId, text: e.label || "".concat(fn.t("dialog.tabs.camera.camera"), " #").concat(i + 1), selected: r }));
                                }),
                                n.toggleClass("uploadcare--camera__device-select_has-options", !0);
                        },
                    },
                    {
                        key: "__getGroupIdByStream",
                        value: function (e) {
                            var t = e.getVideoTracks();
                            if (0 !== t.length) return t[0].getSettings().groupId;
                        },
                    },
                    {
                        key: "__guessExtensionByMime",
                        value: function (e) {
                            var t = { mp4: "mp4", ogg: "ogg", webm: "webm", quicktime: "mov", "x-matroska": "mkv" };
                            if ("" === e) return "webm";
                            if (e && "video" === (e = e.split("/"))[0]) {
                                var n = (e = e.slice(1).join("/")).split(";")[0];
                                if (t[n]) return t[n];
                            }
                            return "avi";
                        },
                    },
                    {
                        key: "displayed",
                        value: function () {
                            this.dialogApi.takeFocus() && this.container.find(".uploadcare--camera__button").focus();
                        },
                    },
                ]),
                e
            );
        })();
    j() &&
        (((Jn = k).Jcrop = function (e, t) {
            var i,
                r = Jn.extend({}, Jn.Jcrop.defaults);
            function a(e) {
                return Math.round(e) + "px";
            }
            function o(e) {
                return r.baseClass + "-" + e;
            }
            function l(e) {
                var t = Jn(e).offset();
                return [t.left, t.top];
            }
            function s(e) {
                return [e.pageX - i[0], e.pageY - i[1]];
            }
            function u(e) {
                "object" !== n(e) && (e = {}),
                    (r = Jn.extend(r, e)),
                    Jn.each(["onChange", "onSelect", "onRelease", "onDblClick"], function (e, t) {
                        "function" != typeof r[t] && (r[t] = function () {});
                    });
            }
            function c(e, t) {
                if (((i = l(A)), "move" === e))
                    return G.activateHandlers(
                        (function (e) {
                            var t = e;
                            return (
                                X.watchKeys(),
                                function (e) {
                                    H.moveOffset([e[0] - t[0], e[1] - t[1]]), (t = e), K.update();
                                }
                            );
                        })(t),
                        h
                    );
                var n = H.getFixed(),
                    a = d(e),
                    o = H.getCorner(d(a));
                H.setPressed(H.getCorner(a)),
                    H.setCurrent(o),
                    G.activateHandlers(
                        (function (e, t) {
                            return function (n) {
                                if (r.aspectRatio)
                                    switch (e) {
                                        case "e":
                                        case "w":
                                            n[1] = t.y + 1;
                                            break;
                                        case "n":
                                        case "s":
                                            n[0] = t.x + 1;
                                    }
                                else
                                    switch (e) {
                                        case "e":
                                        case "w":
                                            n[1] = t.y2;
                                            break;
                                        case "n":
                                        case "s":
                                            n[0] = t.x2;
                                    }
                                H.setCurrent(n), K.update();
                            };
                        })(e, n),
                        h
                    );
            }
            function d(e) {
                switch (e) {
                    case "n":
                        return "sw";
                    case "s":
                    case "e":
                        return "nw";
                    case "w":
                        return "ne";
                    case "ne":
                        return "sw";
                    case "nw":
                        return "se";
                    case "se":
                        return "nw";
                    case "sw":
                        return "ne";
                }
            }
            function p(e) {
                return function (t) {
                    return !(r.disabled || ("move" === e && !r.allowMove) || ((i = l(A)), (N = !0), c(e, s(t)), t.stopPropagation(), t.preventDefault(), 1));
                };
            }
            function f(e) {
                return { x: e.x * O, y: e.y * L, x2: e.x2 * O, y2: e.y2 * L, w: e.w * O, h: e.h * L };
            }
            function h(e) {
                H.getFixed(), K.enableHandles(), K.done();
            }
            function g() {
                var e = Jn("<div></div>").addClass(o("tracker"));
                return e.css({ opacity: 0, backgroundColor: "white" }), e;
            }
            "object" !== n(e) && (e = Jn(e)[0]), "object" !== n(t) && (t = {}), u(t);
            var m,
                v,
                b,
                _,
                y,
                w = { border: "none", visibility: "visible", margin: 0, padding: 0, position: "absolute", top: 0, left: 0 },
                x = Jn(e),
                k = !0;
            if ("IMG" == e.tagName) {
                if (0 != x[0].width && 0 != x[0].height) x.width(x[0].width), x.height(x[0].height);
                else {
                    var C = new Image();
                    (C.src = x[0].src), x.width(C.width), x.height(C.height);
                }
                var A = x.clone().removeAttr("id").css(w).show();
                A.width(x.width()), A.height(x.height()), x.after(A).hide();
            } else (A = x.css(w).show()), (k = !1), null === r.shade && (r.shade = !0);
            (m = A),
                (v = r.boxWidth),
                (b = r.boxHeight),
                (_ = m.width()),
                (y = m.height()),
                _ > v && v > 0 && ((_ = v), (y = (v / m.width()) * m.height())),
                y > b && b > 0 && ((y = b), (_ = (b / m.height()) * m.width())),
                (O = m.width() / _),
                (L = m.height() / y),
                m.width(_).height(y);
            var z = A.width(),
                T = A.height(),
                S = Jn("<div></div>").width(z).height(T).addClass(o("holder")).css({ position: "relative", backgroundColor: r.bgColor }).insertAfter(x).append(A);
            r.addClass && S.addClass(r.addClass);
            var j = Jn("<div></div>"),
                D = Jn("<div></div>").width("100%").height("100%").css({ zIndex: 310, position: "absolute", overflow: "hidden" }),
                F = Jn("<div></div>")
                    .css({ position: "absolute", zIndex: 600 })
                    .dblclick(function () {
                        var e = H.getFixed();
                        r.onDblClick.call(Z, e);
                    })
                    .insertBefore(A)
                    .append(D);
            k && ((j = Jn("<img />").attr("src", A.attr("src")).css(w).width(z).height(T)), D.append(j));
            var E,
                I,
                P,
                M,
                O,
                L,
                N,
                R = r.boundary,
                B = g()
                    .width(z + 2 * R)
                    .height(T + 2 * R)
                    .css({ position: "absolute", top: a(-R), left: a(-R), zIndex: 290 }),
                q = r.bgColor,
                U = r.bgOpacity;
            i = l(A);
            var V = (function () {
                    function e() {
                        var e,
                            t = {},
                            n = ["touchstart", "touchmove", "touchend"],
                            i = document.createElement("div");
                        try {
                            for (e = 0; e < n.length; e++) {
                                var r = n[e],
                                    a = (r = "on" + r) in i;
                                a || (i.setAttribute(r, "return;"), (a = "function" == typeof i[r])), (t[n[e]] = a);
                            }
                            return t.touchstart && t.touchend && t.touchmove;
                        } catch (e) {
                            return !1;
                        }
                    }
                    return {
                        createDragger: function (e) {
                            return function (t) {
                                return (
                                    (t.pageX = t.originalEvent.changedTouches[0].pageX),
                                    (t.pageY = t.originalEvent.changedTouches[0].pageY),
                                    !(r.disabled || ("move" === e && !r.allowMove) || ((N = !0), c(e, s(t)), t.stopPropagation(), t.preventDefault(), 1))
                                );
                            };
                        },
                        isSupported: e,
                        support: !0 === r.touchSupport || !1 === r.touchSupport ? r.touchSupport : e(),
                    };
                })(),
                H = (function () {
                    var e,
                        t,
                        n = 0,
                        i = 0,
                        a = 0,
                        o = 0;
                    function l() {
                        if (!r.aspectRatio)
                            return (
                                (t = a - n),
                                (l = o - i),
                                E && Math.abs(t) > E && (a = t > 0 ? n + E : n - E),
                                I && Math.abs(l) > I && (o = l > 0 ? i + I : i - I),
                                M / L && Math.abs(l) < M / L && (o = l > 0 ? i + M / L : i - M / L),
                                P / O && Math.abs(t) < P / O && (a = t > 0 ? n + P / O : n - P / O),
                                n < 0 && ((a -= n), (n -= n)),
                                i < 0 && ((o -= i), (i -= i)),
                                a < 0 && ((n -= a), (a -= a)),
                                o < 0 && ((i -= o), (o -= o)),
                                a > z && ((n -= e = a - z), (a -= e)),
                                o > T && ((i -= e = o - T), (o -= e)),
                                n > z && ((o -= e = n - T), (i -= e)),
                                i > T && ((o -= e = i - T), (i -= e)),
                                c(u(n, i, a, o))
                            );
                        var e,
                            t,
                            l,
                            s = r.aspectRatio,
                            d = r.minSize[0] / O,
                            p = r.maxSize[0] / O;
                        r.maxSize[1];
                        var f,
                            h,
                            g,
                            m,
                            v = a - n,
                            b = o - i,
                            _ = Math.abs(v),
                            y = Math.abs(b);
                        return (
                            0 === p && (p = 10 * z),
                            _ / y < s
                                ? ((h = o), (g = y * s), (f = v < 0 ? n - g : g + n) < 0 ? ((f = 0), (m = Math.abs((f - n) / s)), (h = b < 0 ? i - m : m + i)) : f > z && ((f = z), (m = Math.abs((f - n) / s)), (h = b < 0 ? i - m : m + i)))
                                : ((f = a), (m = _ / s), (h = b < 0 ? i - m : i + m) < 0 ? ((h = 0), (g = Math.abs((h - i) * s)), (f = v < 0 ? n - g : g + n)) : h > T && ((h = T), (g = Math.abs(h - i) * s), (f = v < 0 ? n - g : g + n))),
                            f > n
                                ? (f - n < d ? (f = n + d) : f - n > p && (f = n + p), (h = h > i ? i + (f - n) / s : i - (f - n) / s))
                                : f < n && (n - f < d ? (f = n - d) : n - f > p && (f = n - p), (h = h > i ? i + (n - f) / s : i - (n - f) / s)),
                            f < 0 ? ((n -= f), (f = 0)) : f > z && ((n -= f - z), (f = z)),
                            h < 0 ? ((i -= h), (h = 0)) : h > T && ((i -= h - T), (h = T)),
                            c(u(n, i, f, h))
                        );
                    }
                    function s(e) {
                        return e[0] < 0 && (e[0] = 0), e[1] < 0 && (e[1] = 0), e[0] > z && (e[0] = z), e[1] > T && (e[1] = T), [e[0], e[1]];
                    }
                    function u(e, t, n, i) {
                        var r = e,
                            a = n,
                            o = t,
                            l = i;
                        return n < e && ((r = n), (a = e)), i < t && ((o = i), (l = t)), [r, o, a, l];
                    }
                    function c(e) {
                        return { x: e[0], y: e[1], x2: e[2], y2: e[3], w: e[2] - e[0], h: e[3] - e[1] };
                    }
                    return {
                        flipCoords: u,
                        setPressed: function (e) {
                            (e = s(e)), (a = n = e[0]), (o = i = e[1]);
                        },
                        setCurrent: function (n) {
                            (n = s(n)), (e = n[0] - a), (t = n[1] - o), (a = n[0]), (o = n[1]);
                        },
                        getOffset: function () {
                            return [e, t];
                        },
                        moveOffset: function (e) {
                            var t = e[0],
                                r = e[1];
                            0 > n + t && (t -= t + n), 0 > i + r && (r -= r + i), T < o + r && (r += T - (o + r)), z < a + t && (t += z - (a + t)), (n += t), (a += t), (i += r), (o += r);
                        },
                        getCorner: function (e) {
                            var t = l();
                            switch (e) {
                                case "ne":
                                    return [t.x2, t.y];
                                case "nw":
                                    return [t.x, t.y];
                                case "se":
                                    return [t.x2, t.y2];
                                case "sw":
                                    return [t.x, t.y2];
                            }
                        },
                        getFixed: l,
                    };
                })(),
                W = (function () {
                    var e = !1,
                        t = Jn("<div></div>").css({ position: "absolute", zIndex: 240, opacity: 0 }),
                        n = { top: l(), left: l().height(T), right: l().height(T), bottom: l() };
                    function i() {
                        return o(H.getFixed());
                    }
                    function o(e) {
                        n.top.css({ left: a(e.x), width: a(e.w), height: a(e.y) }),
                            n.bottom.css({ top: a(e.y2), left: a(e.x), width: a(e.w), height: a(T - e.y2) }),
                            n.right.css({ left: a(e.x2), width: a(z - e.x2) }),
                            n.left.css({ width: a(e.x) });
                    }
                    function l() {
                        return Jn("<div></div>")
                            .css({ position: "absolute", backgroundColor: r.shadeColor || r.bgColor })
                            .appendTo(t);
                    }
                    function s() {
                        e || ((e = !0), t.insertBefore(A), i(), K.setBgOpacity(1, 0, 1), j.hide(), u(r.shadeColor || r.bgColor, 1), K.isAwake() ? d(r.bgOpacity, 1) : d(1, 1));
                    }
                    function u(e, t) {
                        $(p(), e, t);
                    }
                    function c() {
                        e && (t.remove(), j.show(), (e = !1), K.isAwake() ? K.setBgOpacity(r.bgOpacity, 1, 1) : K.setBgOpacity(1, 1, 1), $(S, 0, 1));
                    }
                    function d(n, i) {
                        e && (r.bgFade && !i ? t.animate({ opacity: 1 - n }, { queue: !1, duration: r.fadeTime }) : t.css({ opacity: 1 - n }));
                    }
                    function p() {
                        return t.children();
                    }
                    return {
                        update: i,
                        updateRaw: o,
                        getShades: p,
                        setBgColor: u,
                        enable: s,
                        disable: c,
                        resize: function (e, t) {
                            n.left.css({ height: a(t) }), n.right.css({ height: a(t) });
                        },
                        refresh: function () {
                            r.shade ? s() : c(), K.isAwake() && d(r.bgOpacity);
                        },
                        opacity: d,
                    };
                })(),
                K = (function () {
                    var e,
                        t = {},
                        n = {};
                    function i(e) {
                        return (function (e) {
                            var t = Jn("<div></div>")
                                .mousedown(p(e))
                                .css({ cursor: e + "-resize", position: "absolute" })
                                .append("<div></div>")
                                .addClass("ord-" + e);
                            return V.support && t.on("touchstart.jcrop", V.createDragger(e)), F.append(t), t;
                        })(e).addClass(o("handle"));
                    }
                    function l() {
                        var e = H.getFixed();
                        H.setPressed([e.x, e.y]), H.setCurrent([e.x2, e.y2]), s();
                    }
                    function s(t) {
                        if (e) return u(t);
                    }
                    function u(t) {
                        var n,
                            i,
                            o = H.getFixed();
                        !(function (e, t) {
                            F.width(Math.round(e)).height(Math.round(t));
                        })(o.w, o.h),
                            (n = o.x),
                            (i = o.y),
                            r.shade || j.css({ top: a(-i), left: a(-n) }),
                            F.css({ top: a(i), left: a(n) }),
                            r.shade && W.updateRaw(o),
                            e || (F.show(), r.shade ? W.opacity(U) : c(U, !0), (e = !0)),
                            t ? r.onSelect.call(Z, f(o)) : r.onChange.call(Z, f(o));
                    }
                    function c(t, n, i) {
                        (e || n) && (r.bgFade && !i ? A.animate({ opacity: t }, { queue: !1, duration: r.fadeTime }) : A.css("opacity", t));
                    }
                    function d() {
                        if (r.allowResize) return !0;
                    }
                    function h(e) {
                        e || d();
                    }
                    Jn.isArray(r.createHandles) &&
                        (function (e) {
                            var t;
                            for (t = 0; t < e.length; t++) n[e[t]] = i(e[t]);
                        })(r.createHandles),
                        r.drawBorders &&
                            Jn.isArray(r.createBorders) &&
                            (function (e) {
                                var n, i, r, a;
                                for (i = 0; i < e.length; i++) {
                                    switch (e[i]) {
                                        case "n":
                                            n = "hline";
                                            break;
                                        case "s":
                                            n = "hline bottom";
                                            break;
                                        case "e":
                                            n = "vline right";
                                            break;
                                        case "w":
                                            n = "vline";
                                    }
                                    t[e[i]] = ((r = n), (a = void 0), (a = Jn("<div></div>").css({ position: "absolute" }).addClass(o(r))), F.append(a), a);
                                }
                            })(r.createBorders),
                        Jn(document).on("touchstart.jcrop-ios", function (e) {
                            Jn(e.currentTarget).hasClass("jcrop-tracker") && e.stopPropagation();
                        });
                    var m = g().mousedown(p("move")).css({ cursor: "move", position: "absolute", zIndex: 360 });
                    return (
                        V.support && m.on("touchstart.jcrop", V.createDragger("move")),
                        D.append(m),
                        {
                            updateVisible: s,
                            update: u,
                            release: function () {
                                F.hide(), r.shade ? W.opacity(1) : c(1), (e = !1), r.onRelease.call(Z);
                            },
                            refresh: l,
                            isAwake: function () {
                                return e;
                            },
                            setCursor: function (e) {
                                m.css("cursor", e);
                            },
                            enableHandles: d,
                            enableOnly: function () {},
                            disableHandles: function () {},
                            animMode: h,
                            setBgOpacity: c,
                            done: function () {
                                h(!1), l();
                            },
                        }
                    );
                })(),
                G = (function () {
                    var e = function () {},
                        t = function () {},
                        n = r.trackDocument;
                    function i(t) {
                        return e(s(t)), !1;
                    }
                    function a(n) {
                        return (
                            n.preventDefault(),
                            n.stopPropagation(),
                            N && ((N = !1), t(s(n)), K.isAwake() && r.onSelect.call(Z, f(H.getFixed())), B.css({ zIndex: 290 }), Jn(document).off(".jcrop"), (e = function () {}), (t = function () {})),
                            !1
                        );
                    }
                    function o(e) {
                        return (e.pageX = e.originalEvent.changedTouches[0].pageX), (e.pageY = e.originalEvent.changedTouches[0].pageY), i(e);
                    }
                    function l(e) {
                        return (e.pageX = e.originalEvent.changedTouches[0].pageX), (e.pageY = e.originalEvent.changedTouches[0].pageY), a(e);
                    }
                    return (
                        n || B.mousemove(i).mouseup(a).mouseout(a),
                        A.before(B),
                        {
                            activateHandlers: function (r, s) {
                                return (N = !0), (e = r), (t = s), B.css({ zIndex: 450 }), V.support && Jn(document).on("touchmove.jcrop", o).on("touchend.jcrop", l), n && Jn(document).on("mousemove.jcrop", i).on("mouseup.jcrop", a), !1;
                            },
                        }
                    );
                })(),
                X = (function () {
                    var e = Jn('<input type="radio" />').css({ position: "fixed", left: "-120px", width: "12px" }).addClass("jcrop-keymgr"),
                        t = Jn("<div></div>").css({ position: "absolute", overflow: "hidden" }).append(e);
                    function n(e, t, n) {
                        r.allowMove && (H.moveOffset([t, n]), K.updateVisible(!0)), e.preventDefault(), e.stopPropagation();
                    }
                    return (
                        r.keySupport &&
                            (e
                                .keydown(function (e) {
                                    if (e.ctrlKey || e.metaKey) return !0;
                                    var t = e.shiftKey ? 10 : 1;
                                    switch (e.keyCode) {
                                        case 37:
                                            n(e, -t, 0);
                                            break;
                                        case 39:
                                            n(e, t, 0);
                                            break;
                                        case 38:
                                            n(e, 0, -t);
                                            break;
                                        case 40:
                                            n(e, 0, t);
                                            break;
                                        case 9:
                                            return !0;
                                    }
                                    return !1;
                                })
                                .blur(function (t) {
                                    e.hide();
                                }),
                            e.css({ position: "absolute", left: "-20px" }),
                            t.append(e).insertBefore(A)),
                        {
                            watchKeys: function () {
                                r.keySupport && (e.show(), e.focus());
                            },
                        }
                    );
                })();
            function Y(e) {
                !(function (e) {
                    H.setPressed([e[0], e[1]]), H.setCurrent([e[2], e[3]]), K.update();
                })([e[0] / O, e[1] / L, e[2] / O, e[3] / L]),
                    r.onSelect.call(Z, f(H.getFixed())),
                    K.enableHandles();
            }
            function $(e, t, n) {
                var i = t || r.bgColor;
                r.bgFade && Jn.fx.step.hasOwnProperty("backgroundColor") && r.fadeTime && !n ? e.animate({ backgroundColor: i }, { queue: !1, duration: r.fadeTime }) : e.css("backgroundColor", i);
            }
            function J(e) {
                r.allowResize && (e || K.enableHandles()),
                    K.setCursor(r.allowMove ? "move" : "default"),
                    r.hasOwnProperty("trueSize") && ((O = r.trueSize[0] / z), (L = r.trueSize[1] / T)),
                    r.hasOwnProperty("setSelect") && (Y(r.setSelect), K.done(), delete r.setSelect),
                    W.refresh(),
                    r.bgColor != q && ($(r.shade ? W.getShades() : S, (r.shade && r.shadeColor) || r.bgColor), (q = r.bgColor)),
                    U != r.bgOpacity && ((U = r.bgOpacity), r.shade ? W.refresh() : K.setBgOpacity(U)),
                    (E = r.maxSize[0] || 0),
                    (I = r.maxSize[1] || 0),
                    (P = r.minSize[0] || 0),
                    (M = r.minSize[1] || 0),
                    r.hasOwnProperty("outerImage") && (A.attr("src", r.outerImage), delete r.outerImage),
                    K.refresh();
            }
            J(!0);
            var Z = {
                setSelect: Y,
                setOptions: function (e) {
                    u(e), J();
                },
                tellSelect: function () {
                    return f(H.getFixed());
                },
                tellScaled: function () {
                    return H.getFixed();
                },
                setClass: function (e) {
                    S.removeClass().addClass(o("holder")).addClass(e);
                },
                disable: function () {
                    (r.disabled = !0), K.setCursor("default");
                },
                enable: function () {
                    (r.disabled = !1), J();
                },
                cancel: function () {
                    K.done(), G.activateHandlers(null, null);
                },
                release: K.release,
                destroy: function () {
                    S.remove(), x.show(), x.css("visibility", "visible"), Jn(e).removeData("Jcrop");
                },
                focus: X.watchKeys,
                getBounds: function () {
                    return [z * O, T * L];
                },
                getWidgetSize: function () {
                    return [z, T];
                },
                getScaleFactor: function () {
                    return [O, L];
                },
                getOptions: function () {
                    return r;
                },
                ui: { holder: S, selection: F },
            };
            return x.data("Jcrop", Z), Z;
        }),
        (Jn.fn.Jcrop = function (e, t) {
            var n;
            return (
                this.each(function () {
                    if (Jn(this).data("Jcrop")) {
                        if ("api" === e) return Jn(this).data("Jcrop");
                        Jn(this).data("Jcrop").setOptions(e);
                    } else
                        "IMG" == this.tagName
                            ? Jn.Jcrop.Loader(this, function () {
                                  Jn(this).css({ display: "block", visibility: "hidden" }), (n = Jn.Jcrop(this, e)), Jn.isFunction(t) && t.call(n);
                              })
                            : (Jn(this).css({ display: "block", visibility: "hidden" }), (n = Jn.Jcrop(this, e)), Jn.isFunction(t) && t.call(n));
                }),
                this
            );
        }),
        (Jn.Jcrop.Loader = function (e, t, n) {
            var i = Jn(e),
                r = i[0];
            i
                .on("load.jcloader", function e() {
                    r.complete ? (i.off(".jcloader"), Jn.isFunction(t) && t.call(r)) : window.setTimeout(e, 50);
                })
                .on("error.jcloader", function (e) {
                    i.off(".jcloader"), Jn.isFunction(n) && n.call(r);
                }),
                r.complete && Jn.isFunction(t) && (i.off(".jcloader"), t.call(r));
        }),
        (Jn.Jcrop.defaults = {
            allowMove: !0,
            allowResize: !0,
            trackDocument: !0,
            baseClass: "jcrop",
            addClass: null,
            bgColor: "black",
            bgOpacity: 0.6,
            bgFade: !1,
            aspectRatio: 0,
            keySupport: !0,
            createHandles: ["n", "s", "e", "w", "nw", "ne", "se", "sw"],
            createBorders: ["n", "s", "e", "w"],
            drawBorders: !0,
            dragEdges: !0,
            fixedSupport: !0,
            touchSupport: null,
            shade: null,
            boxWidth: 0,
            boxHeight: 0,
            boundary: 2,
            fadeTime: 400,
            animationDelay: 20,
            swingSpeed: 3,
            maxSize: [0, 0],
            minSize: [0, 0],
            onChange: function () {},
            onSelect: function () {},
            onDblClick: function () {},
            onRelease: function () {},
        }));
    var ei = /-\/crop\/([0-9]+)x([0-9]+)(\/(center|([0-9]+),([0-9]+)))?\//i,
        ti = (function () {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                r(this, e),
                    (this.element = t),
                    (this.originalSize = n),
                    (this.__api = k.Jcrop(this.element[0], {
                        trueSize: this.originalSize,
                        baseClass: "uploadcare--jcrop",
                        addClass: "uploadcare--crop-widget",
                        createHandles: ["nw", "ne", "se", "sw"],
                        bgColor: "transparent",
                        bgOpacity: 0.8,
                    })),
                    this.setCrop(i),
                    this.setSelection();
            }
            return (
                o(e, [
                    {
                        key: "setCrop",
                        value: function (e) {
                            return (this.crop = e), this.__api.setOptions({ aspectRatio: e.preferedSize ? e.preferedSize[0] / e.preferedSize[1] : 0, minSize: e.notLess ? pe(e.preferedSize, this.originalSize) : [0, 0] });
                        },
                    },
                    {
                        key: "setSelection",
                        value: function (e) {
                            var t, n, i, r;
                            return (
                                e ? ((t = e.center), (i = [e.width, e.height])) : ((t = !0), (i = this.originalSize)),
                                this.crop.preferedSize && (i = pe(this.crop.preferedSize, i, !0)),
                                t ? ((n = (this.originalSize[0] - i[0]) / 2), (r = (this.originalSize[1] - i[1]) / 2)) : ((n = e.left || 0), (r = e.top || 0)),
                                this.__api.setSelect([n, r, i[0] + n, i[1] + r])
                            );
                        },
                    },
                    {
                        key: "__parseModifiers",
                        value: function (e) {
                            var t = null != e ? e.match(ei) : void 0;
                            if (t) return { width: parseInt(t[1], 10), height: parseInt(t[2], 10), center: "center" === t[4], left: parseInt(t[5], 10) || void 0, top: parseInt(t[6], 10) || void 0 };
                        },
                    },
                    {
                        key: "setSelectionFromModifiers",
                        value: function (e) {
                            return this.setSelection(this.__parseModifiers(e));
                        },
                    },
                    {
                        key: "getSelection",
                        value: function () {
                            var e, t, n;
                            return (
                                (e = this.__api.tellSelect()),
                                { left: (t = Math.round(Math.max(0, e.x))), top: (n = Math.round(Math.max(0, e.y))), width: Math.round(Math.min(this.originalSize[0], e.x2)) - t, height: Math.round(Math.min(this.originalSize[1], e.y2)) - n }
                            );
                        },
                    },
                    {
                        key: "applySelectionToFile",
                        value: function (e) {
                            var t = this;
                            return e.then(function (e) {
                                return fe(e, t.crop, t.originalSize, t.getSelection());
                            });
                        },
                    },
                ]),
                e
            );
        })(),
        ni = (function () {
            function e(t, n, i, a, o) {
                var l = this;
                r(this, e),
                    (this.container = t),
                    (this.tabButton = n),
                    (this.dialogApi = i),
                    (this.settings = a),
                    (this.name = o),
                    this.__initTabButtonCircle(),
                    this.container.addClass("uploadcare--preview"),
                    this.container.on("click", ".uploadcare--preview__back:not(:disabled)", function () {
                        return l.dialogApi.fileColl.clear();
                    }),
                    this.container.on("click", ".uploadcare--preview__done:not(:disabled)", this.dialogApi.resolve);
            }
            return (
                o(e, [
                    {
                        key: "__initTabButtonCircle",
                        value: function () {
                            var e,
                                t,
                                n,
                                i,
                                r = this;
                            return (
                                (n = this.tabButton.find(".uploadcare--panel__icon")),
                                (t = k.Deferred()),
                                (i = function () {
                                    var e, n, i, a, o;
                                    for (a = 0, e = 0, i = (n = r.dialogApi.fileColl.lastProgresses()).length; e < i; e++) a += ((null != (o = n[e]) ? o.progress : void 0) || 0) / n.length;
                                    return t.notify(a);
                                }),
                                this.dialogApi.fileColl.onAnyProgress(i),
                                this.dialogApi.fileColl.onAdd.add(i),
                                this.dialogApi.fileColl.onRemove.add(i),
                                i(),
                                (e = new Nn(n).listen(t.promise())),
                                this.dialogApi.progress(function () {
                                    var t;
                                    return (t = e).update.apply(t, arguments);
                                })
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        ii = (function (e) {
            u(i, e);
            var n = h(i);
            function i(e, t, a, o, l) {
                var s;
                return (
                    r(this, i),
                    ((s = n.apply(this, arguments)).container = e),
                    (s.tabButton = t),
                    (s.dialogApi = a),
                    (s.settings = o),
                    (s.name = l),
                    k.each(s.dialogApi.fileColl.get(), function (e, t) {
                        return s.__setFile(t);
                    }),
                    s.dialogApi.fileColl.onAdd.add(s.__setFile.bind(p(s))),
                    (s.widget = null),
                    (s.__state = null),
                    s
                );
            }
            return (
                o(i, [
                    {
                        key: "__setFile",
                        value: function (e) {
                            var t,
                                n,
                                i,
                                r = this;
                            return (
                                (this.file = e),
                                (t = function (t) {
                                    return function () {
                                        if (e === r.file) {
                                            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                                            return t.apply(null, i);
                                        }
                                    };
                                }),
                                (n = $(this.__tryToLoadImagePreview.bind(this))),
                                (i = $(this.__tryToLoadVideoPreview.bind(this))),
                                this.__setState("unknown", {}),
                                this.file.progress(
                                    t(function (t) {
                                        var a, o, l;
                                        if (
                                            ((o = ((t = t.incompleteFileInfo).name || "") + be(t.size, "", ", ")), r.container.find(".uploadcare--preview__file-name").text(o), (l = t.sourceInfo), (a = U), l.file && a && l.file instanceof a)
                                        )
                                            return l.file.type && -1 !== l.file.type.search(/^image\//i)
                                                ? n(e, l.file)
                                                : l.file.type && -1 !== l.file.type.search(/^video\//i)
                                                ? i(e, l.file)
                                                : n(e, l.file).fail(function () {
                                                      return i(e, l.file);
                                                  });
                                    })
                                ),
                                this.file.done(
                                    t(function (e) {
                                        var t, n;
                                        if ("video" !== r.__state)
                                            return e.isImage
                                                ? "image" !== r.__state
                                                    ? ((n = e.originalUrl),
                                                      (n += "-/preview/1162x693/-/setfill/ffffff/-/format/jpeg/-/progressive/yes/"),
                                                      r.settings.previewUrlCallback && (n = r.settings.previewUrlCallback(n, e)),
                                                      (t = e.originalImageInfo),
                                                      r.__setState("image", { src: n, name: e.name, info: e }),
                                                      r.initImage([t.width, t.height], e.cdnUrlModifiers))
                                                    : void 0
                                                : r.__setState("regular", { file: e });
                                    })
                                ),
                                this.file.fail(
                                    t(function (e, t, n) {
                                        return r.__setState("error", { errorType: e, error: n, file: t });
                                    })
                                )
                            );
                        },
                    },
                    {
                        key: "__tryToLoadImagePreview",
                        value: function (e, t) {
                            var n,
                                i = this;
                            return (
                                (n = k.Deferred()),
                                "pending" !== e.state() || !t.size || t.size >= this.settings.multipartMinSize
                                    ? n.reject().promise()
                                    : (zt(t, 1550, 924, "#ffffff", this.settings.imagePreviewMaxSize)
                                          .done(function (t, r) {
                                              return we(t, "image/jpeg", 0.95, function (a) {
                                                  var o;
                                                  if ((n.resolve(), (t.width = t.height = 1), "pending" === e.state() && "pending" === i.dialogApi.state() && i.file === e))
                                                      return (
                                                          (o = H.createObjectURL(a)),
                                                          i.dialogApi.always(function () {
                                                              return H.revokeObjectURL(o);
                                                          }),
                                                          "image" !== i.__state ? (i.__setState("image", { src: o, name: "" }), i.initImage(r)) : void 0
                                                      );
                                              });
                                          })
                                          .fail(n.reject),
                                      n.promise())
                            );
                        },
                    },
                    {
                        key: "__tryToLoadVideoPreview",
                        value: function (e, t) {
                            var n,
                                i,
                                r = this;
                            return (
                                (n = k.Deferred()),
                                H && t.size
                                    ? ((i = H.createObjectURL(t)),
                                      bt(i)
                                          .fail(function () {
                                              return H.revokeObjectURL(i), n.reject();
                                          })
                                          .done(function () {
                                              if ("pending" === e.state() && "pending" === r.dialogApi.state() && r.file === e) {
                                                  r.dialogApi.always(function () {
                                                      return H.revokeObjectURL(i);
                                                  }),
                                                      n.resolve(),
                                                      r.__setState("video");
                                                  var t = r.container.find(".uploadcare--preview__video");
                                                  return (
                                                      t.on("loadeddata", function () {
                                                          return (t.get(0).currentTime = 36e4), t.off("loadeddata");
                                                      }),
                                                      t.on("ended", function () {
                                                          return (t.get(0).currentTime = 0), t.off("ended");
                                                      }),
                                                      t.attr("src", i),
                                                      t.get(0).load()
                                                  );
                                              }
                                              H.revokeObjectURL(i);
                                          }),
                                      n.promise())
                                    : n.reject().promise()
                            );
                        },
                    },
                    {
                        key: "__setState",
                        value: function (e, n) {
                            (this.__state = e),
                                ((n = n || {}).crop = this.settings.crop),
                                this.container.empty().append(En("tab-preview-".concat(e), t(t({}, n), {}, { debugUploads: this.settings.debugUploads }))),
                                this.container.removeClass(function (e, t) {
                                    return t
                                        .split(" ")
                                        .filter(function (e) {
                                            return !!~e.indexOf("uploadcare--preview_status_");
                                        })
                                        .join(" ");
                                }),
                                "unknown" === e && this.settings.crop && this.container.find(".uploadcare--preview__done").hide(),
                                "error" === e && this.container.addClass("uploadcare--preview_status_error-" + n.errorType),
                                this.container.find(".uploadcare--preview__done").focus();
                        },
                    },
                    {
                        key: "initImage",
                        value: function (e, t) {
                            var n,
                                i,
                                r,
                                a,
                                o = this;
                            if (
                                ((i = this.container.find(".uploadcare--preview__image")),
                                (n = this.container.find(".uploadcare--preview__done")),
                                (r = vt(i[0])
                                    .done(function () {
                                        return o.container.addClass("uploadcare--preview_status_loaded");
                                    })
                                    .fail(function () {
                                        return (o.file = null), o.__setState("error", { error: "loadImage" });
                                    })),
                                (a = function () {
                                    return (
                                        o.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled", !1).attr("tabindex", 0),
                                        n.attr("disabled", !1).attr("aria-disabled", !1),
                                        (o.widget = new ti(i, e, o.settings.crop[0])),
                                        t && o.widget.setSelectionFromModifiers(t),
                                        n.on("click", function () {
                                            var e;
                                            return (e = o.widget.applySelectionToFile(o.file)), o.dialogApi.fileColl.replace(o.file, e), !0;
                                        })
                                    );
                                }),
                                this.settings.crop)
                            )
                                return (
                                    this.container.find(".uploadcare--preview__title").text(fn.t("dialog.tabs.preview.crop.title")),
                                    this.container.find(".uploadcare--preview__content").addClass("uploadcare--preview__content_crop"),
                                    n.attr("disabled", !0).attr("aria-disabled", !0),
                                    n.text(fn.t("dialog.tabs.preview.crop.done")),
                                    this.populateCropSizes(),
                                    this.container.find(".uploadcare--crop-sizes__item").attr("aria-disabled", !0).attr("tabindex", -1),
                                    r.done(function () {
                                        return X(a);
                                    })
                                );
                        },
                    },
                    {
                        key: "populateCropSizes",
                        value: function () {
                            var e,
                                t,
                                n,
                                i = this;
                            return (
                                (e = this.container.find(".uploadcare--crop-sizes")),
                                (n = e.children()),
                                (t = "uploadcare--crop-sizes__item_current"),
                                k.each(this.settings.crop, function (r, a) {
                                    var o, l, s, u, c, d;
                                    return (
                                        (c = a.preferedSize) ? ((l = Y(c[0], c[1])), (o = "".concat(c[0] / l, ":").concat(c[1] / l))) : (o = fn.t("dialog.tabs.preview.crop.free")),
                                        (u = n
                                            .clone()
                                            .appendTo(e)
                                            .attr("data-caption", o)
                                            .on("click", function (n) {
                                                "true" !== k(n.currentTarget).attr("aria-disabled") &&
                                                    !k(n.currentTarget).hasClass(t) &&
                                                    i.settings.crop.length > 1 &&
                                                    i.widget &&
                                                    (i.widget.setCrop(a), e.find(">*").removeClass(t), u.addClass(t));
                                            })),
                                        c
                                            ? ((d = pe(c, [30, 30], !0)), u.children().css({ width: Math.max(20, d[0]), height: Math.max(12, d[1]) }))
                                            : ((s = k("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-crop-free'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon")),
                                              u.children().append(s).addClass("uploadcare--crop-sizes__icon_free"))
                                    );
                                }),
                                n.remove(),
                                e.find(">*").eq(0).addClass(t)
                            );
                        },
                    },
                    {
                        key: "displayed",
                        value: function () {
                            this.dialogApi.takeFocus() && this.container.find(".uploadcare--preview__done").focus();
                        },
                    },
                ]),
                i
            );
        })(ni);
    j() &&
        (function (e) {
            function t(e) {
                (this.targets = e), (this.last = null), this.update();
            }
            t.prototype = {
                update: function () {
                    var t = {};
                    this.targets.each(function (n) {
                        var i = e(this).offset();
                        i.top in t || (t[i.top] = []), t[i.top].push([i.left + this.offsetWidth / 2, this]);
                    }),
                        (this.rows = t);
                },
                find: function (e, t) {
                    var n,
                        i,
                        r,
                        a = 1 / 0,
                        o = this.rows;
                    for (i in o) {
                        (s = Math.abs(i - t)) < a && ((a = s), (n = o[i]));
                    }
                    (a = Math.abs(n[0][0] - e)), (r = n[0][1]);
                    for (var l = 1; l < n.length; l++) {
                        var s;
                        (s = Math.abs(n[l][0] - e)) < a && ((a = s), (r = n[l][1]));
                    }
                    return r;
                },
                findNotLast: function (e, t) {
                    var n = this.find(e, t);
                    return this.last && n && this.last == n ? null : (this.last = n);
                },
            };
            var n = "uploadcareMovable",
                i = {
                    uploadcareMovable: function (t) {
                        function i(e) {
                            if (t.touch) {
                                var n, i;
                                if ((i = e.originalEvent.touches) && i.length) n = i[0];
                                else {
                                    if (!(i = e.originalEvent.changedTouches) || !i.length) return;
                                    n = i[0];
                                }
                                (e.pageX = n.pageX), (e.pageY = n.pageY), (e.which = 1);
                            }
                        }
                        t = e.extend({ distance: 4, anyButton: !1, axis: !1, zIndex: 1e3, start: e.noop, move: e.noop, finish: e.noop, items: null, keepFake: !1, touch: !0 }, t);
                        var r = "mousedown.{} touchstart.{}".replace(/\{}/g, n);
                        this.on(r, t.items, null, function (r) {
                            if ((i(r), t.anyButton || 1 == r.which)) {
                                r.preventDefault();
                                var a = !1,
                                    o = e(this),
                                    l = !1,
                                    s = o.position();
                                (s.top += o.offsetParent().scrollTop()), (s.left += o.offsetParent().scrollLeft());
                                var u = "mousemove.{} touchmove.{}".replace(/\{}/g, n);
                                e(document).on(u, function (e) {
                                    if (
                                        (i(e),
                                        !a &&
                                            (Math.abs(e.pageX - r.pageX) > t.distance || Math.abs(e.pageY - r.pageY) > t.distance) &&
                                            ((a = !0), (l = o.clone().css({ position: "absolute", zIndex: t.zIndex, width: o.width() }).appendTo(o.offsetParent())), t.start({ event: e, dragged: o, fake: l })),
                                        a)
                                    ) {
                                        e.preventDefault();
                                        var n = "y" == t.axis ? 0 : e.pageX - r.pageX,
                                            u = "x" == t.axis ? 0 : e.pageY - r.pageY;
                                        l.css({ left: n + s.left, top: u + s.top }), t.move({ event: e, dragged: o, fake: l, dx: n, dy: u });
                                    }
                                });
                                u = "mouseup.{} touchend.{} touchcancel.{} touchleave.{}";
                                e(document).on(u.replace(/\{}/g, n), function (s) {
                                    i(s);
                                    if ((e(document).off("mousemove.{} touchmove.{} mouseup.{} touchend.{} touchcancel.{} touchleave.{}".replace(/\{}/g, n)), a)) {
                                        s.preventDefault();
                                        var u = s.pageX - r.pageX,
                                            c = s.pageY - r.pageY;
                                        (a = !1), t.finish({ event: s, dragged: o, fake: l, dx: u, dy: c }), t.keepFake || l.remove();
                                    }
                                });
                            }
                        });
                    },
                    uploadcareSortable: function (i) {
                        var r,
                            a = e.extend({ items: ">*" }, i),
                            o =
                                ((i = e.extend(
                                    {
                                        checkBounds: function () {
                                            return !0;
                                        },
                                        start: e.noop,
                                        attach: e.noop,
                                        move: e.noop,
                                        finish: e.noop,
                                    },
                                    i
                                )),
                                !1),
                            l = this;
                        return (
                            (a.start = function (e) {
                                i.start(e), (r = new t(l.find(a.items).not(e.fake))), (o = e.dragged.next());
                            }),
                            (a.move = function (t) {
                                if (((t.nearest = null), i.checkBounds(t))) {
                                    var n = t.fake.offset(),
                                        a = r.findNotLast(n.left + t.dragged.width() / 2, n.top);
                                    (t.nearest = e(a)), a && a != t.dragged[0] && (t.dragged.nextAll().filter(a).length > 0 ? t.dragged.insertAfter(a) : t.dragged.insertBefore(a), i.attach(t), (r.last = null), r.update());
                                } else null !== r.last && ((r.last = null), o.length ? t.dragged.insertBefore(o) : t.dragged.parent().append(t.dragged), i.attach(t), r.update());
                                i.move(t);
                            }),
                            (a.finish = function (t) {
                                var n = t.fake.offset();
                                (t.nearest = null), i.checkBounds(t) && (t.nearest = e(r.find(n.left + t.dragged.width() / 2, n.top))), i.finish(t), (r = null);
                            }),
                            this[n](a)
                        );
                    },
                };
            e.fn.extend(i);
        })(k);
    var ri = (function (e) {
        u(n, e);
        var t = h(n);
        function n() {
            var e;
            return (
                r(this, n),
                (e = t.apply(this, arguments)).container.append(En("tab-preview-multiple")),
                (e.__fileTpl = k(En("tab-preview-multiple-file"))),
                (e.fileListEl = e.container.find(".uploadcare--files")),
                (e.doneBtnEl = e.container.find(".uploadcare--preview__done")),
                k.each(e.dialogApi.fileColl.get(), function (t, n) {
                    return e.__fileAdded(n);
                }),
                e.__updateContainerView(),
                e.dialogApi.fileColl.onAdd.add(e.__fileAdded.bind(p(e)), function () {
                    return e.__updateContainerView();
                }),
                e.dialogApi.fileColl.onRemove.add(e.__fileRemoved.bind(p(e)), function () {
                    return e.__updateContainerView();
                }),
                e.dialogApi.fileColl.onReplace.add(e.__fileReplaced.bind(p(e)), function () {
                    return e.__updateContainerView();
                }),
                e.dialogApi.fileColl.onAnyProgress(e.__fileProgress.bind(p(e))),
                e.dialogApi.fileColl.onAnyDone(e.__fileDone.bind(p(e))),
                e.dialogApi.fileColl.onAnyFail(e.__fileFailed.bind(p(e))),
                e.fileListEl.addClass(e.settings.imagesOnly ? "uploadcare--files_type_tiles" : "uploadcare--files_type_table"),
                e.__setupSorting(),
                e
            );
        }
        return (
            o(n, [
                {
                    key: "__setupSorting",
                    value: function () {
                        var e = this;
                        return this.fileListEl.uploadcareSortable({
                            touch: !1,
                            axis: this.settings.imagesOnly ? "xy" : "y",
                            start: function (e) {
                                return e.dragged.css("visibility", "hidden");
                            },
                            finish: function (t) {
                                var n, i;
                                return (
                                    t.dragged.css("visibility", "visible"),
                                    (n = e.container.find(".uploadcare--file")),
                                    (i = function (t) {
                                        return n.index(e.__fileToEl(t));
                                    }),
                                    e.dialogApi.fileColl.sort(function (e, t) {
                                        return i(e) - i(t);
                                    })
                                );
                            },
                        });
                    },
                },
                {
                    key: "__updateContainerView",
                    value: function () {
                        var e, t, n, i, r, a, o;
                        if (
                            ((a = (t = this.dialogApi.fileColl.length()) > this.settings.multipleMax),
                            (r = t < this.settings.multipleMin),
                            (n = a || r),
                            this.doneBtnEl.attr("disabled", n).attr("aria-disabled", n),
                            (i = fn.t("dialog.tabs.preview.multiple.question").replace("%files%", fn.t("file", t))),
                            this.container.find(".uploadcare--preview__title").text(i),
                            (e = this.container.find(".uploadcare--preview__message")).empty(),
                            n)
                        )
                            return (
                                (o = a
                                    ? fn.t("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%", this.settings.multipleMax)
                                    : t && r
                                    ? fn.t("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%", this.settings.multipleMin).replace("%files%", fn.t("file", t))
                                    : void 0),
                                e.addClass("uploadcare--error").text(o)
                            );
                    },
                },
                {
                    key: "__updateFileInfo",
                    value: function (e, t) {
                        var n;
                        return (
                            (n = t.name || fn.t("dialog.tabs.preview.unknownName")),
                            e.find(".uploadcare--file__name").text(n),
                            e.find(".uploadcare--file__description").attr("aria-label", fn.t("dialog.tabs.preview.multiple.file.preview").replace("%file%", n)),
                            e.find(".uploadcare--file__remove").attr("title", fn.t("dialog.tabs.preview.multiple.file.remove").replace("%file%", n)).attr("aria-label", fn.t("dialog.tabs.preview.multiple.file.remove").replace("%file%", n)),
                            e.find(".uploadcare--file__size").text(be(t.size, "–"))
                        );
                    },
                },
                {
                    key: "__fileProgress",
                    value: function (e, t) {
                        var n;
                        return (n = this.__fileToEl(e)).find(".uploadcare--progressbar__value").css("width", Math.round(100 * t.progress) + "%"), this.__updateFileInfo(n, t.incompleteFileInfo);
                    },
                },
                {
                    key: "__fileDone",
                    value: function (e, t) {
                        var n,
                            i,
                            r,
                            a,
                            o = this;
                        return (
                            (i = this.__fileToEl(e).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_uploaded")).find(".uploadcare--progressbar__value").css("width", "100%"),
                            this.__updateFileInfo(i, t),
                            t.isImage
                                ? ((n = "".concat(t.cdnUrl, "-/quality/lightest/-/preview/108x108/")),
                                  this.settings.previewUrlCallback && (n = this.settings.previewUrlCallback(n, t)),
                                  (a = i.find(".uploadcare--file__name").text()),
                                  (r = k("<img>").attr("src", n).attr("alt", a).addClass("uploadcare--file__icon")))
                                : (r = k("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-file'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--file__icon")),
                            i.find(".uploadcare--file__preview").html(r),
                            i.find(".uploadcare--file__description").on("click", function () {
                                return di(e, o.settings).done(function (t) {
                                    return o.dialogApi.fileColl.replace(e, t);
                                });
                            })
                        );
                    },
                },
                {
                    key: "__fileFailed",
                    value: function (e, t, n, i) {
                        var r = (this.settings.debugUploads && (null == i ? void 0 : i.message)) || fn.t("serverErrors.".concat(null == i ? void 0 : i.code)) || (null == i ? void 0 : i.message) || fn.t("errors.".concat(t)),
                            a = this.__fileToEl(e).removeClass("uploadcare--file_status_uploading").addClass("uploadcare--file_status_error");
                        a.find(".uploadcare--file__error").text(r);
                        var o = k("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-error'/></svg>").attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--file__icon");
                        return a.find(".uploadcare--file__preview").html(o);
                    },
                },
                {
                    key: "__fileAdded",
                    value: function (e) {
                        return this.__createFileEl(e).appendTo(this.fileListEl);
                    },
                },
                {
                    key: "__fileRemoved",
                    value: function (e) {
                        return this.__fileToEl(e).remove(), k(e).removeData();
                    },
                },
                {
                    key: "__fileReplaced",
                    value: function (e, t) {
                        return this.__createFileEl(t).insertAfter(this.__fileToEl(e)), this.__fileRemoved(e);
                    },
                },
                {
                    key: "__fileToEl",
                    value: function (e) {
                        return k(e).data("dpm-el") || k();
                    },
                },
                {
                    key: "__createFileEl",
                    value: function (e) {
                        var t,
                            n = this;
                        return (
                            (t = this.__fileTpl.clone().on("click", ".uploadcare--file__remove", function () {
                                return n.dialogApi.fileColl.remove(e);
                            })),
                            k(e).data("dpm-el", t),
                            t
                        );
                    },
                },
                {
                    key: "displayed",
                    value: function () {
                        this.container.find(".uploadcare--preview__done").focus();
                    },
                },
            ]),
            n
        );
    })(ni);
    j() &&
        k(window).on("keydown", function (e) {
            if (si() && (27 === e.which && (e.stopImmediatePropagation(), null != ai && ai.reject()), 9 === e.which))
                return (function (e) {
                    return !e.shiftKey && li.last().is(e.target) ? (e.preventDefault(), li.first().focus()) : e.shiftKey && li.first().is(e.target) ? (e.preventDefault(), li.last().focus()) : void 0;
                })(e);
        });
    var ai = null,
        oi = null,
        li = null,
        si = function () {
            return null !== ai;
        },
        ui = function () {
            ai && (ai.reject(), (ai = null));
        },
        ci = function (e, t, n) {
            var i, r, a;
            return (
                ui(),
                (oi = document.activeElement),
                (r = k(En("dialog")).appendTo("body")),
                (a = pi(r.find(".uploadcare--dialog__placeholder"), e, t, n, { inModal: !0 })),
                r.find(".uploadcare--panel").addClass("uploadcare--dialog__panel"),
                r.addClass("uploadcare--dialog_status_active"),
                (a.dialogElement = r),
                (li = r.find("select, input, textarea, button, a[href]")).first().focus(),
                (i = (function (e, t) {
                    var n, i;
                    return (
                        (i = e.scrollTop()),
                        (n = e.scrollLeft()),
                        t && e.scrollTop(0).scrollLeft(0),
                        function () {
                            return e.scrollTop(i).scrollLeft(n);
                        }
                    );
                })(k(window), "absolute" === r.css("position"))),
                k("html, body").addClass("uploadcare--page"),
                r.find(".uploadcare--dialog__close").on("click", a.reject),
                r.on("dblclick", function (e) {
                    var t;
                    if (k.contains(document.documentElement, e.target) && ((t = ".uploadcare--dialog__panel, .uploadcare--dialog__powered-by"), !k(e.target).is(t) && !k(e.target).parents(t).length)) return a.reject();
                }),
                (ai = a.always(function () {
                    return k("html, body").removeClass("uploadcare--page"), (ai = null), r.remove(), i(), oi.focus();
                }))
            );
        },
        di = function (e, t) {
            var n, i;
            return (
                (i = ai),
                (ai = null),
                (t = k.extend({}, t, { multiple: !1, tabs: "" })),
                (n = ci(e, "preview", t)),
                null != i && i.dialogElement.addClass("uploadcare--dialog_status_inactive"),
                n.always(function () {
                    if (((ai = i), null != i)) return k("html, body").addClass("uploadcare--page"), i.dialogElement.removeClass("uploadcare--dialog_status_inactive");
                }),
                n.onTabVisibility(function (e, t) {
                    if ("preview" === e && !t) return n.reject();
                }),
                n
            );
        },
        pi = function (e, t, n, i) {
            var r,
                a,
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { inModal: !1 };
            return (
                k.isPlainObject(n) && ((i = n), (n = null)),
                t ? (rn(t) ? (t = t.files()) : k.isArray(t) || (t = [t])) : (t = []),
                (i = ft(i)),
                (a = new gi(i, e, t, n, o).publicPromise()),
                Z(
                    a,
                    (r = function (e) {
                        return i.multiple ? _n(e, i) : e[0];
                    }),
                    r
                ).promise(a)
            );
        },
        fi = {},
        hi = function (e, t) {
            return (fi[e] = t), fi[e];
        };
    hi("file", Yn),
        hi("url", $n),
        hi("camera", Qn),
        hi("facebook", An),
        hi("dropbox", An),
        hi("gdrive", An),
        hi("gphotos", An),
        hi("instagram", An),
        hi("flickr", An),
        hi("vk", An),
        hi("evernote", An),
        hi("box", An),
        hi("onedrive", An),
        hi("huddle", An),
        hi("nft", An),
        hi("empty-pubkey", function (e, t, n, i) {
            return e.append(
                '<div class="uploadcare--tab__content">\n<div class="uploadcare--text uploadcare--text_size_large uploadcare--tab__title">Hello!</div>\n<div class="uploadcare--text">Your <a class="uploadcare--link" href="https://uploadcare.com/dashboard/">public key</a> is not set.</div>\n<div class="uploadcare--text">Add this to the &lt;head&gt; tag to start uploading files:</div>\n<div class="uploadcare--text uploadcare--text_pre">&lt;script&gt;\nUPLOADCARE_PUBLIC_KEY = \'your_public_key\';\n&lt;/script&gt;</div>\n</div>'
            );
        }),
        hi("preview", function (e, t, n, i, r) {
            if (i.previewStep || 0 !== n.fileColl.length()) return new (i.multiple ? ri : ii)(e, t, n, i, r);
        });
    var gi = (function () {
            function e(t, n, i, a, o) {
                var l,
                    s = this;
                r(this, e),
                    (this.inModal = o.inModal || !1),
                    (this.addFiles = this.addFiles.bind(this)),
                    (this.__resolve = this.__resolve.bind(this)),
                    (this.__reject = this.__reject.bind(this)),
                    (this.__updateFooter = this.__updateFooter.bind(this)),
                    (this.__closePanel = this.__closePanel.bind(this)),
                    (this.switchTab = this.switchTab.bind(this)),
                    (this.showTab = this.showTab.bind(this)),
                    (this.hideTab = this.hideTab.bind(this)),
                    (this.isTabVisible = this.isTabVisible.bind(this)),
                    (this.openMenu = this.openMenu.bind(this)),
                    (this.settings = t),
                    (this.dfd = k.Deferred()),
                    this.dfd.always(this.__closePanel),
                    (l = ".uploadcare--panel"),
                    (this.content = k(En("dialog__panel"))),
                    (this.panel = this.content.find(l).add(this.content.filter(l))),
                    (this.placeholder = k(n)),
                    this.placeholder.replaceWith(this.content),
                    this.panel.append(k(En("icons"))),
                    this.settings.multiple && this.panel.addClass("uploadcare--panel_multiple"),
                    this.panel.find(".uploadcare--menu__toggle").on("click", function () {
                        return s.panel.find(".uploadcare--menu").toggleClass("uploadcare--menu_opened");
                    }),
                    (this.files = new cn(i)),
                    this.files.onRemove.add(function () {
                        if (0 === s.files.length()) return s.hideTab("preview");
                    }),
                    this.__autoCrop(this.files),
                    (this.tabs = {}),
                    this.__prepareFooter(),
                    (this.onTabVisibility = k.Callbacks().add(function (e, t) {
                        return s.panel.find(".uploadcare--menu__item_tab_".concat(e)).toggleClass("uploadcare--menu__item_hidden", !t);
                    })),
                    this.settings.publicKey ? this.__prepareTabs(a) : this.__welcome();
            }
            return (
                o(e, [
                    {
                        key: "takeFocus",
                        value: function () {
                            return this.inModal;
                        },
                    },
                    {
                        key: "publicPromise",
                        value: function () {
                            return (
                                this.promise ||
                                    (this.promise = this.dfd.promise({
                                        reject: this.__reject,
                                        resolve: this.__resolve,
                                        fileColl: this.files,
                                        addFiles: this.addFiles,
                                        switchTab: this.switchTab,
                                        hideTab: this.hideTab,
                                        showTab: this.showTab,
                                        isTabVisible: this.isTabVisible,
                                        openMenu: this.openMenu,
                                        takeFocus: this.takeFocus.bind(this),
                                        onTabVisibility: te(this.onTabVisibility),
                                    })),
                                this.promise
                            );
                        },
                    },
                    {
                        key: "addFiles",
                        value: function (e, t) {
                            var n, i, r;
                            for (t && (e = en(e, t, this.settings)), this.settings.multiple || (this.files.clear(), (e = [e[0]])), i = 0, r = e.length; i < r; i++)
                                (n = e[i]), this.settings.multipleMaxStrict && this.files.length() >= this.settings.multipleMax ? n.cancel() : this.files.add(n);
                            return this.settings.previewStep ? (this.showTab("preview"), this.settings.multiple ? void 0 : this.switchTab("preview")) : this.__resolve();
                        },
                    },
                    {
                        key: "__autoCrop",
                        value: function (e) {
                            var t,
                                n,
                                i,
                                r = this;
                            if (this.settings.crop && this.settings.multiple) {
                                for (t = 0, n = (i = this.settings.crop).length; t < n; t++) if (!i[t].preferedSize) return;
                                return e.autoThen(function (e) {
                                    var t, n;
                                    return !e.isImage || e.cdnUrlModifiers || e.crop
                                        ? e
                                        : ((t = e.originalImageInfo),
                                          (n = pe(r.settings.crop[0].preferedSize, [t.width, t.height], !0)),
                                          fe(e, r.settings.crop[0], [t.width, t.height], { width: n[0], height: n[1], left: Math.round((t.width - n[0]) / 2), top: Math.round((t.height - n[1]) / 2) }));
                                });
                            }
                        },
                    },
                    {
                        key: "__resolve",
                        value: function () {
                            return this.dfd.resolve(this.files.get());
                        },
                    },
                    {
                        key: "__reject",
                        value: function () {
                            return this.dfd.reject(this.files.get());
                        },
                    },
                    {
                        key: "__prepareTabs",
                        value: function (e) {
                            var t, n, i, r;
                            for (this.addTab("preview"), t = 0, n = (i = this.settings.tabs).length; t < n; t++) (r = i[t]), this.addTab(r);
                            if ((this.files.length() ? (this.showTab("preview"), this.switchTab("preview")) : (this.hideTab("preview"), this.switchTab(e || this.__firstVisibleTab())), 0 === this.settings.tabs.length))
                                return this.panel.addClass("uploadcare--panel_menu-hidden"), this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--panel__menu_hidden");
                        },
                    },
                    {
                        key: "__prepareFooter",
                        value: function () {
                            var e = this;
                            return (
                                (this.footer = this.panel.find(".uploadcare--panel__footer")),
                                ":not(:disabled)",
                                this.footer.on("click", ".uploadcare--panel__show-files:not(:disabled)", function () {
                                    return e.switchTab("preview");
                                }),
                                this.footer.on("click", ".uploadcare--panel__done:not(:disabled)", this.__resolve),
                                this.__updateFooter(),
                                this.files.onAdd.add(this.__updateFooter),
                                this.files.onRemove.add(this.__updateFooter)
                            );
                        },
                    },
                    {
                        key: "__updateFooter",
                        value: function () {
                            var e,
                                t,
                                n,
                                i = this.files.length();
                            return (
                                (n = i > this.settings.multipleMax),
                                (t = i < this.settings.multipleMin),
                                this.footer
                                    .find(".uploadcare--panel__done")
                                    .attr("disabled", n || t)
                                    .attr("aria-disabled", n || t),
                                this.footer
                                    .find(".uploadcare--panel__show-files")
                                    .attr("disabled", 0 === i)
                                    .attr("aria-disabled", 0 === i),
                                (e = n
                                    ? fn.t("dialog.tabs.preview.multiple.tooManyFiles").replace("%max%", this.settings.multipleMax)
                                    : i && t
                                    ? fn.t("dialog.tabs.preview.multiple.tooFewFiles").replace("%min%", this.settings.multipleMin)
                                    : fn.t("dialog.tabs.preview.multiple.title")),
                                this.footer
                                    .find(".uploadcare--panel__message")
                                    .toggleClass("uploadcare--panel__message_hidden", 0 === i)
                                    .toggleClass("uploadcare--error", n || t)
                                    .text(e.replace("%files%", fn.t("file", i))),
                                this.footer
                                    .find(".uploadcare--panel__file-counter")
                                    .toggleClass("uploadcare--error", n || t)
                                    .text(i ? "(".concat(i, ")") : "")
                            );
                        },
                    },
                    {
                        key: "__closePanel",
                        value: function () {
                            return this.panel.replaceWith(this.placeholder), this.content.remove();
                        },
                    },
                    {
                        key: "addTab",
                        value: function (e) {
                            var t,
                                n,
                                i,
                                r,
                                a = this;
                            if (!(e in this.tabs)) {
                                if (!(t = fi[e])) throw new Error("No such tab: ".concat(e));
                                return (
                                    (r = k("<div>").addClass("uploadcare--tab").addClass("uploadcare--tab_name_".concat(e)).insertBefore(this.footer)),
                                    (i =
                                        "preview" === e
                                            ? k('<div class="uploadcare--menu__icon uploadcare--panel__icon" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">')
                                            : k("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-".concat(e, "'/></svg>")).attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--menu__icon")),
                                    (n = k("<div>", { role: "button", tabindex: "0" })
                                        .addClass("uploadcare--menu__item")
                                        .addClass("uploadcare--menu__item_tab_".concat(e))
                                        .attr("title", fn.t("dialog.tabs.names.".concat(e)))
                                        .append(i)
                                        .appendTo(this.panel.find(".uploadcare--menu__items"))
                                        .on("click", function () {
                                            return e === a.currentTab ? a.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened") : a.switchTab(e);
                                        })),
                                    (this.tabs[e] = new t(r, n, this.publicPromise(), this.settings, e)),
                                    this.tabs[e]
                                );
                            }
                        },
                    },
                    {
                        key: "switchTab",
                        value: function (e) {
                            var t;
                            if (e && this.currentTab !== e)
                                return (
                                    (this.currentTab = e),
                                    this.panel.find(".uploadcare--panel__menu").removeClass("uploadcare--menu_opened").attr("data-current", e),
                                    this.panel.find(".uploadcare--menu__item").removeClass("uploadcare--menu__item_current").filter(".uploadcare--menu__item_tab_".concat(e)).addClass("uploadcare--menu__item_current"),
                                    (t = "uploadcare--tab"),
                                    this.panel.find(".".concat(t)).removeClass("".concat(t, "_current")).filter(".".concat(t, "_name_").concat(e)).addClass("".concat(t, "_current")),
                                    this.tabs[e].displayed && this.tabs[e].displayed(),
                                    this.dfd.notify(e)
                                );
                        },
                    },
                    {
                        key: "showTab",
                        value: function (e) {
                            return this.onTabVisibility.fire(e, !0);
                        },
                    },
                    {
                        key: "hideTab",
                        value: function (e) {
                            if ((this.onTabVisibility.fire(e, !1), this.currentTab === e)) return this.switchTab(this.__firstVisibleTab());
                        },
                    },
                    {
                        key: "isTabVisible",
                        value: function (e) {
                            return !this.panel.find(".uploadcare--menu__item_tab_".concat(e)).is(".uploadcare--menu__item_hidden");
                        },
                    },
                    {
                        key: "openMenu",
                        value: function () {
                            return this.panel.find(".uploadcare--panel__menu").addClass("uploadcare--menu_opened");
                        },
                    },
                    {
                        key: "__firstVisibleTab",
                        value: function () {
                            var e, t, n, i;
                            for (e = 0, t = (n = this.settings.tabs).length; e < t; e++) if (((i = n[e]), this.isTabVisible(i))) return i;
                        },
                    },
                    {
                        key: "__welcome",
                        value: function () {
                            var e, t, n, i;
                            for (this.addTab("empty-pubkey"), this.switchTab("empty-pubkey"), e = 0, t = (n = this.settings.tabs).length; e < t; e++) (i = n[e]), this.__addFakeTab(i);
                            return null;
                        },
                    },
                    {
                        key: "__addFakeTab",
                        value: function (e) {
                            var t;
                            return (
                                (t = k("<svg width='32' height='32'><use xlink:href='#uploadcare--icon-".concat(e, "'/></svg>")).attr("role", "presentation").attr("class", "uploadcare--icon uploadcare--menu__icon")),
                                "empty-pubkey" === e && t.addClass("uploadcare--panel__icon"),
                                k("<div>")
                                    .addClass("uploadcare--menu__item")
                                    .addClass("uploadcare--menu__item_tab_".concat(e))
                                    .attr("aria-disabled", !0)
                                    .attr("title", fn.t("dialog.tabs.names.".concat(e)))
                                    .append(t)
                                    .appendTo(this.panel.find(".uploadcare--menu__items"))
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        mi = (function () {
            function e(t, n) {
                var i = this;
                r(this, e),
                    (this.element = t),
                    (this.settings = n),
                    (this.validators = this.settings.validators = []),
                    (this.currentObject = null),
                    (this.__onDialogOpen = k.Callbacks()),
                    (this.__onUploadComplete = k.Callbacks()),
                    (this.__onChange = k.Callbacks().add(function (e) {
                        return null != e
                            ? e.promise().done(function (e) {
                                  return i.__onUploadComplete.fire(e);
                              })
                            : void 0;
                    })),
                    this.__setupWidget(),
                    this.element.on("change.uploadcare", this.reloadInfo.bind(this)),
                    (this.__hasValue = !1),
                    X(function () {
                        if (!i.__hasValue) return i.reloadInfo();
                    });
            }
            return (
                o(e, [
                    {
                        key: "__setupWidget",
                        value: function () {
                            var e,
                                t = this;
                            return (
                                (this.template = new Xn(this.settings, this.element)),
                                (e = ["buttons.choose"]).push(this.settings.imagesOnly ? "images" : "files"),
                                e.push(this.settings.multiple ? "other" : "one"),
                                this.template
                                    .addButton("open", fn.t(e.join(".")))
                                    .toggleClass("needsclick", this.settings.systemDialog)
                                    .on("click", function () {
                                        return t.openDialog();
                                    }),
                                this.template.addButton("cancel", fn.t("buttons.cancel")).on("click", function () {
                                    return t.__setObject(null);
                                }),
                                this.template.addButton("remove", fn.t("buttons.remove")).on("click", function () {
                                    return t.__setObject(null);
                                }),
                                this.template.content.on("click", ".uploadcare--widget__file-name", function () {
                                    return t.openDialog();
                                }),
                                Hn(this.template.content, this.__handleDirectSelection.bind(this)),
                                this.template.reset()
                            );
                        },
                    },
                    {
                        key: "__infoToValue",
                        value: function (e) {
                            return e.cdnUrlModifiers || this.settings.pathValue ? e.cdnUrl : e.uuid;
                        },
                    },
                    {
                        key: "__reset",
                        value: function () {
                            var e;
                            return (e = this.currentObject), (this.currentObject = null), null != e && "function" == typeof e.cancel && e.cancel(), this.template.reset();
                        },
                    },
                    {
                        key: "__setObject",
                        value: function (e) {
                            if (e !== this.currentObject) return this.__reset(), e ? ((this.currentObject = e), this.__watchCurrentObject()) : this.element.val(""), this.__onChange.fire(this.currentObject);
                        },
                    },
                    {
                        key: "__watchCurrentObject",
                        value: function () {
                            var e,
                                t = this;
                            if ((e = this.__currentFile()))
                                return (
                                    this.template.listen(e),
                                    e
                                        .done(function (n) {
                                            if (e === t.__currentFile()) return t.__onUploadingDone(n);
                                        })
                                        .fail(function (n, i, r) {
                                            if (e === t.__currentFile()) return t.__onUploadingFailed(n, r);
                                        })
                                );
                        },
                    },
                    {
                        key: "__onUploadingDone",
                        value: function (e) {
                            return this.element.val(this.__infoToValue(e)), this.template.setFileInfo(e), this.template.loaded();
                        },
                    },
                    {
                        key: "__onUploadingFailed",
                        value: function (e, t) {
                            return this.template.reset(), this.template.error(e, t);
                        },
                    },
                    {
                        key: "__setExternalValue",
                        value: function (e) {
                            return this.__setObject(nn(e, this.settings));
                        },
                    },
                    {
                        key: "value",
                        value: function (e) {
                            return void 0 !== e ? ((this.__hasValue = !0), this.__setExternalValue(e), this) : this.currentObject;
                        },
                    },
                    {
                        key: "reloadInfo",
                        value: function () {
                            return this.value(this.element.val());
                        },
                    },
                    {
                        key: "openDialog",
                        value: function (e) {
                            var t = this;
                            return this.settings.systemDialog
                                ? me(this.template.content, this.settings, function (e) {
                                      return t.__handleDirectSelection("object", e.files);
                                  })
                                : this.__openDialog(e);
                        },
                    },
                    {
                        key: "__openDialog",
                        value: function (e) {
                            var t;
                            return (t = ci(this.currentObject, e, this.settings)), this.__onDialogOpen.fire(t), t.done(this.__setObject.bind(this));
                        },
                    },
                    {
                        key: "api",
                        value: function () {
                            return (
                                this.__api ||
                                    ((this.__api = Q(this, ["openDialog", "reloadInfo", "value", "validators"])),
                                    (this.__api.onChange = te(this.__onChange)),
                                    (this.__api.onUploadComplete = te(this.__onUploadComplete)),
                                    (this.__api.onDialogOpen = te(this.__onDialogOpen)),
                                    (this.__api.inputElement = this.element.get(0))),
                                this.__api
                            );
                        },
                    },
                ]),
                e
            );
        })(),
        vi = (function (e) {
            u(n, e);
            var t = h(n);
            function n() {
                return r(this, n), t.apply(this, arguments);
            }
            return (
                o(n, [
                    {
                        key: "__currentFile",
                        value: function () {
                            return this.currentObject;
                        },
                    },
                    {
                        key: "__handleDirectSelection",
                        value: function (e, t) {
                            var n = Qt(e, t[0], this.settings);
                            return this.settings.systemDialog || !this.settings.previewStep ? this.__setObject(n) : this.__openDialog("preview").addFiles([n]);
                        },
                    },
                ]),
                n
            );
        })(mi);
    vi._name = "SingleWidget";
    var bi = (function (e) {
        u(n, e);
        var t = h(n);
        function n() {
            return r(this, n), t.apply(this, arguments);
        }
        return (
            o(n, [
                {
                    key: "__currentFile",
                    value: function () {
                        var e;
                        return null != (e = this.currentObject) ? e.promise() : void 0;
                    },
                },
                {
                    key: "__setObject",
                    value: function (e) {
                        return on(this.currentObject, e) ? (e ? void 0 : (this.__reset(), this.element.val(""))) : m(c(n.prototype), "__setObject", this).call(this, e);
                    },
                },
                {
                    key: "__setExternalValue",
                    value: function (e) {
                        var t,
                            n = this;
                        return (
                            (this.__lastGroupPr = t = an(e, this.settings)),
                            e && (this.template.setStatus("started"), this.template.statusText.text(fn.t("loadingInfo"))),
                            t
                                .done(function (e) {
                                    if (n.__lastGroupPr === t) return n.__setObject(e);
                                })
                                .fail(function () {
                                    if (n.__lastGroupPr === t) return n.__onUploadingFailed("createGroup");
                                })
                        );
                    },
                },
                {
                    key: "__handleDirectSelection",
                    value: function (e, t) {
                        var n = en(e, t, this.settings);
                        return this.settings.systemDialog ? this.__setObject(_n(n, this.settings)) : this.__openDialog("preview").addFiles(n);
                    },
                },
            ]),
            n
        );
    })(mi);
    bi._name = "MultipleWidget";
    var _i = "uploadcareWidget",
        yi = '[role~="uploadcare-uploader"]',
        wi = function () {
            var e,
                t,
                n,
                i,
                r,
                a,
                o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ":root";
            for (r = [], t = 0, n = (i = k(o)).length; t < n; t++) (e = i[t]), (a = xi(e.querySelectorAll(yi))), (r = r.concat(a));
            return r;
        },
        xi = function (e) {
            var t, n, i, r, a;
            for (i = [], t = 0, n = e.length; t < n; t++) (r = e[t]), ((a = k(r).data(_i)) && a.inputElement === r) || i.push(zi(r));
            return i;
        },
        ki = function (e, t) {
            return zi(e, t, vi);
        },
        Ci = function (e, t) {
            return zi(e, t, bi);
        },
        Ai = function (e, t) {
            return zi(e, t);
        },
        zi = function (e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = k(e);
            if (0 === r.length) throw new Error("No DOM elements found matching selector");
            r.length > 1 && z("There are multiple DOM elements matching selector"), (e = r.eq(0));
            var a = ft(t(t({}, n), e.data())),
                o = a.multiple ? bi : vi;
            if (i && o !== i) throw new Error("This element should be processed using ".concat(o._name));
            var l = e.data(_i);
            if (!l || l.inputElement !== e[0]) {
                Ti(e);
                var s = new o(e, a);
                (l = s.api()), e.data(_i, l), s.template.content.data(_i, l);
            }
            return l;
        },
        Ti = function (e) {
            return e.off(".uploadcare").each(function () {
                var e, t;
                if ((e = (t = k(this).next(".uploadcare--widget")).data(_i)) && e.inputElement === this) return t.remove();
            });
        },
        Si = $(function (e, t) {
            if (((e = pt(e, t)), !t)) return e.live && setInterval(wi, 100), wi();
        });
    j() &&
        k(function () {
            window.UPLOADCARE_MANUAL_START || Si();
        });
    var ji = t(
            t({}, zn),
            {},
            {
                templates: { JST: Fn, tpl: En },
                crop: { CropWidget: ti },
                dragdrop: { support: Un, uploadDrop: Vn, watchDragging: Wn, receiveDrop: Hn },
                ui: { progress: { Circle: Nn, BaseRenderer: Rn, TextRenderer: Bn, CanvasRenderer: qn } },
                widget: { tabs: { FileTab: Yn, UrlTab: $n, CameraTab: Qn, RemoteTab: An, BasePreviewTab: ni, PreviewTab: ii, PreviewTabMultiple: ri }, Template: Xn, BaseWidget: mi, Widget: vi, MultipleWidget: bi },
                isDialogOpened: si,
                closeDialog: ui,
                openDialog: ci,
                openPreviewDialog: di,
                openPanel: pi,
                registerTab: hi,
                initialize: wi,
                SingleWidget: ki,
                MultipleWidget: Ci,
                Widget: Ai,
                start: Si,
            }
        ),
        Di = Tn(ji),
        Fi = t(
            t({}, Sn),
            {},
            {
                plugin: Di,
                start: Si,
                initialize: wi,
                openDialog: ci,
                closeDialog: ui,
                openPanel: pi,
                registerTab: hi,
                Circle: Nn,
                SingleWidget: ki,
                MultipleWidget: Ci,
                Widget: Ai,
                tabsCss: Cn,
                dragdrop: { receiveDrop: Hn, support: Un, uploadDrop: Vn },
            }
        ),
        Ei = Tn(ji),
        Ii = t(t({}, Fi), {}, { plugin: Ei, locales: Object.keys(fn.translations) });
    return k.noConflict(!0), t({}, Ii);
});
