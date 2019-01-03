"use strict";
document.webL10n = function(e, t, n) {
        function i() {
            return t.querySelectorAll('link[type="application/l10n"]')
        }

        function r() {
            var e = t.querySelector('script[type="application/l10n"]');
            return e ? JSON.parse(e.innerHTML) : null
        }

        function a(e) {
            return e ? e.querySelectorAll("*[data-l10n-id]") : []
        }

        function s(e) {
            if (!e) return {};
            var t = e.getAttribute("data-l10n-id"),
                n = e.getAttribute("data-l10n-args"),
                i = {};
            if (n) try {
                i = JSON.parse(n)
            } catch (e) {
                console.warn("could not parse arguments for #" + t)
            }
            return {
                id: t,
                args: i
            }
        }

        function o(e) {
            var n = t.createEvent("Event");
            n.initEvent("localized", !0, !1), n.language = e, t.dispatchEvent(n)
        }

        function c(e, t, n) {
            t = t || function(e) {}, n = n || function() {};
            var i = new XMLHttpRequest;
            i.open("GET", e, C), i.overrideMimeType && i.overrideMimeType("text/plain; charset=utf-8"), i.onreadystatechange = function() {
                4 == i.readyState && (200 == i.status || 0 === i.status ? t(i.responseText) : n())
            }, i.onerror = n, i.ontimeout = n;
            try {
                i.send(null)
            } catch (e) {
                n()
            }
        }

        function l(e, t, n, i) {
            function r(e) {
                return e.lastIndexOf("\\") < 0 ? e : e.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "\t").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'")
            }

            function a(e, n) {
                function i(e, n, i) {
                    function c() {
                        for (;;) {
                            if (!p.length) return void i();
                            var e = p.shift();
                            if (!h.test(e)) {
                                if (n) {
                                    if (b = u.exec(e)) {
                                        g = b[1].toLowerCase(), v = "*" !== g && g !== t && g !== m;
                                        continue
                                    }
                                    if (v) continue;
                                    if (b = d.exec(e)) return void a(s + b[1], c)
                                }
                                var l = e.match(f);
                                l && 3 == l.length && (o[l[1]] = r(l[2]))
                            }
                        }
                    }
                    var p = e.replace(l, "").split(/[\r\n]+/),
                        g = "*",
                        m = t.split("-", 1)[0],
                        v = !1,
                        b = "";
                    c()
                }

                function a(e, t) {
                    c(e, function(e) {
                        i(e, !1, t)
                    }, function() {
                        console.warn(e + " not found."), t()
                    })
                }
                var o = {},
                    l = /^\s*|\s*$/,
                    h = /^\s*#|^\s*$/,
                    u = /^\s*\[(.*)\]\s*$/,
                    d = /^\s*@import\s+url\((.*)\)\s*$/i,
                    f = /^([^=\s]*)\s*=\s*(.+)$/;
                i(e, !0, function() {
                    n(o)
                })
            }
            var s = e.replace(/[^\/]*$/, "") || "./";
            c(e, function(e) {
                w += e, a(e, function(e) {
                    for (var t in e) {
                        var i, r, a = t.lastIndexOf(".");
                        a > 0 ? (i = t.substring(0, a), r = t.substr(a + 1)) : (i = t, r = A), y[i] || (y[i] = {}), y[i][r] = e[t]
                    }
                    n && n()
                })
            }, i)
        }

        function h(e, t) {
            function n(e) {
                var t = e.href;
                this.load = function(e, n) {
                    l(t, e, n, function() {
                        console.warn(t + " not found."), console.warn('"' + e + '" resource not found'), S = "", n()
                    })
                }
            }
            e && (e = e.toLowerCase()), t = t || function() {}, u(), S = e;
            var a = i(),
                s = a.length;
            if (0 === s) {
                var c = r();
                if (c && c.locales && c.default_locale) {
                    if (console.log("using the embedded JSON directory, early way out"), !(y = c.locales[e])) {
                        var h = c.default_locale.toLowerCase();
                        for (var d in c.locales) {
                            if ((d = d.toLowerCase()) === e) {
                                y = c.locales[e];
                                break
                            }
                            d === h && (y = c.locales[h])
                        }
                    }
                    t()
                } else console.log("no resource to load, early way out");
                return o(e), void(_ = "complete")
            }
            var f = null,
                p = 0;
            f = function() {
                ++p >= s && (t(), o(e), _ = "complete")
            };
            for (var g = 0; g < s; g++) {
                new n(a[g]).load(e, f)
            }
        }

        function u() {
            y = {}, w = "", S = ""
        }

        function d(e) {
            function t(e, t) {
                return -1 !== t.indexOf(e)
            }

            function n(e, t, n) {
                return t <= e && e <= n
            }
            var i = {
                    af: 3,
                    ak: 4,
                    am: 4,
                    ar: 1,
                    asa: 3,
                    az: 0,
                    be: 11,
                    bem: 3,
                    bez: 3,
                    bg: 3,
                    bh: 4,
                    bm: 0,
                    bn: 3,
                    bo: 0,
                    br: 20,
                    brx: 3,
                    bs: 11,
                    ca: 3,
                    cgg: 3,
                    chr: 3,
                    cs: 12,
                    cy: 17,
                    da: 3,
                    de: 3,
                    dv: 3,
                    dz: 0,
                    ee: 3,
                    el: 3,
                    en: 3,
                    eo: 3,
                    es: 3,
                    et: 3,
                    eu: 3,
                    fa: 0,
                    ff: 5,
                    fi: 3,
                    fil: 4,
                    fo: 3,
                    fr: 5,
                    fur: 3,
                    fy: 3,
                    ga: 8,
                    gd: 24,
                    gl: 3,
                    gsw: 3,
                    gu: 3,
                    guw: 4,
                    gv: 23,
                    ha: 3,
                    haw: 3,
                    he: 2,
                    hi: 4,
                    hr: 11,
                    hu: 0,
                    id: 0,
                    ig: 0,
                    ii: 0,
                    is: 3,
                    it: 3,
                    iu: 7,
                    ja: 0,
                    jmc: 3,
                    jv: 0,
                    ka: 0,
                    kab: 5,
                    kaj: 3,
                    kcg: 3,
                    kde: 0,
                    kea: 0,
                    kk: 3,
                    kl: 3,
                    km: 0,
                    kn: 0,
                    ko: 0,
                    ksb: 3,
                    ksh: 21,
                    ku: 3,
                    kw: 7,
                    lag: 18,
                    lb: 3,
                    lg: 3,
                    ln: 4,
                    lo: 0,
                    lt: 10,
                    lv: 6,
                    mas: 3,
                    mg: 4,
                    mk: 16,
                    ml: 3,
                    mn: 3,
                    mo: 9,
                    mr: 3,
                    ms: 0,
                    mt: 15,
                    my: 0,
                    nah: 3,
                    naq: 7,
                    nb: 3,
                    nd: 3,
                    ne: 3,
                    nl: 3,
                    nn: 3,
                    no: 3,
                    nr: 3,
                    nso: 4,
                    ny: 3,
                    nyn: 3,
                    om: 3,
                    or: 3,
                    pa: 3,
                    pap: 3,
                    pl: 13,
                    ps: 3,
                    pt: 3,
                    rm: 3,
                    ro: 9,
                    rof: 3,
                    ru: 11,
                    rwk: 3,
                    sah: 0,
                    saq: 3,
                    se: 7,
                    seh: 3,
                    ses: 0,
                    sg: 0,
                    sh: 11,
                    shi: 19,
                    sk: 12,
                    sl: 14,
                    sma: 7,
                    smi: 7,
                    smj: 7,
                    smn: 7,
                    sms: 7,
                    sn: 3,
                    so: 3,
                    sq: 3,
                    sr: 11,
                    ss: 3,
                    ssy: 3,
                    st: 3,
                    sv: 3,
                    sw: 3,
                    syr: 3,
                    ta: 3,
                    te: 3,
                    teo: 3,
                    th: 0,
                    ti: 4,
                    tig: 3,
                    tk: 3,
                    tl: 4,
                    tn: 3,
                    to: 0,
                    tr: 0,
                    ts: 3,
                    tzm: 22,
                    uk: 11,
                    ur: 3,
                    ve: 3,
                    vi: 0,
                    vun: 3,
                    wa: 4,
                    wae: 3,
                    wo: 0,
                    xh: 3,
                    xog: 3,
                    yo: 0,
                    zh: 0,
                    zu: 3
                },
                r = {
                    0: function(e) {
                        return "other"
                    },
                    1: function(e) {
                        return n(e % 100, 3, 10) ? "few" : 0 === e ? "zero" : n(e % 100, 11, 99) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    2: function(e) {
                        return 0 !== e && e % 10 == 0 ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    3: function(e) {
                        return 1 == e ? "one" : "other"
                    },
                    4: function(e) {
                        return n(e, 0, 1) ? "one" : "other"
                    },
                    5: function(e) {
                        return n(e, 0, 2) && 2 != e ? "one" : "other"
                    },
                    6: function(e) {
                        return 0 === e ? "zero" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
                    },
                    7: function(e) {
                        return 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    8: function(e) {
                        return n(e, 3, 6) ? "few" : n(e, 7, 10) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    9: function(e) {
                        return 0 === e || 1 != e && n(e % 100, 1, 19) ? "few" : 1 == e ? "one" : "other"
                    },
                    10: function(e) {
                        return n(e % 10, 2, 9) && !n(e % 100, 11, 19) ? "few" : e % 10 != 1 || n(e % 100, 11, 19) ? "other" : "one"
                    },
                    11: function(e) {
                        return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : e % 10 == 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14) ? "many" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
                    },
                    12: function(e) {
                        return n(e, 2, 4) ? "few" : 1 == e ? "one" : "other"
                    },
                    13: function(e) {
                        return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : 1 != e && n(e % 10, 0, 1) || n(e % 10, 5, 9) || n(e % 100, 12, 14) ? "many" : 1 == e ? "one" : "other"
                    },
                    14: function(e) {
                        return n(e % 100, 3, 4) ? "few" : e % 100 == 2 ? "two" : e % 100 == 1 ? "one" : "other"
                    },
                    15: function(e) {
                        return 0 === e || n(e % 100, 2, 10) ? "few" : n(e % 100, 11, 19) ? "many" : 1 == e ? "one" : "other"
                    },
                    16: function(e) {
                        return e % 10 == 1 && 11 != e ? "one" : "other"
                    },
                    17: function(e) {
                        return 3 == e ? "few" : 0 === e ? "zero" : 6 == e ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
                    },
                    18: function(e) {
                        return 0 === e ? "zero" : n(e, 0, 2) && 0 !== e && 2 != e ? "one" : "other"
                    },
                    19: function(e) {
                        return n(e, 2, 10) ? "few" : n(e, 0, 1) ? "one" : "other"
                    },
                    20: function(e) {
                        return !n(e % 10, 3, 4) && e % 10 != 9 || n(e % 100, 10, 19) || n(e % 100, 70, 79) || n(e % 100, 90, 99) ? e % 1e6 == 0 && 0 !== e ? "many" : e % 10 != 2 || t(e % 100, [12, 72, 92]) ? e % 10 != 1 || t(e % 100, [11, 71, 91]) ? "other" : "one" : "two" : "few"
                    },
                    21: function(e) {
                        return 0 === e ? "zero" : 1 == e ? "one" : "other"
                    },
                    22: function(e) {
                        return n(e, 0, 1) || n(e, 11, 99) ? "one" : "other"
                    },
                    23: function(e) {
                        return n(e % 10, 1, 2) || e % 20 == 0 ? "one" : "other"
                    },
                    24: function(e) {
                        return n(e, 3, 10) || n(e, 13, 19) ? "few" : t(e, [2, 12]) ? "two" : t(e, [1, 11]) ? "one" : "other"
                    }
                },
                a = i[e.replace(/-.*$/, "")];
            return a in r ? r[a] : (console.warn("plural form unknown for [" + e + "]"), function() {
                return "other"
            })
        }

        function f(e, t, n) {
            var i = y[e];
            if (!i) {
                if (console.warn("#" + e + " is undefined."), !n) return null;
                i = n
            }
            var r = {};
            for (var a in i) {
                var s = i[a];
                s = p(s, t, e, a), s = g(s, t, e), r[a] = s
            }
            return r
        }

        function p(e, t, n, i) {
            var r = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,
                a = r.exec(e);
            if (!a || !a.length) return e;
            var s, o = a[1],
                c = a[2];
            if (t && c in t ? s = t[c] : c in y && (s = y[c]), o in P) {
                e = (0, P[o])(e, s, n, i)
            }
            return e
        }

        function g(e, t, n) {
            return e.replace(/\{\{\s*(.+?)\s*\}\}/g, function(e, i) {
                return t && i in t ? t[i] : i in y ? y[i] : (console.log("argument {{" + i + "}} for #" + n + " is undefined."), e)
            })
        }

        function m(e) {
            var n = s(e);
            if (n.id) {
                var i = f(n.id, n.args);
                if (!i) return void console.warn("#" + n.id + " is undefined.");
                if (i[A]) {
                    if (0 === v(e)) e[A] = i[A];
                    else {
                        for (var r = e.childNodes, a = !1, o = 0, c = r.length; o < c; o++) 3 === r[o].nodeType && /\S/.test(r[o].nodeValue) && (a ? r[o].nodeValue = "" : (r[o].nodeValue = i[A], a = !0));
                        if (!a) {
                            var l = t.createTextNode(i[A]);
                            e.insertBefore(l, e.firstChild)
                        }
                    }
                    delete i[A]
                }
                for (var h in i) e[h] = i[h]
            }
        }

        function v(e) {
            if (e.children) return e.children.length;
            if (void 0 !== e.childElementCount) return e.childElementCount;
            for (var t = 0, n = 0; n < e.childNodes.length; n++) t += 1 === e.nodeType ? 1 : 0;
            return t
        }

        function b(e) {
            e = e || t.documentElement;
            for (var n = a(e), i = n.length, r = 0; r < i; r++) m(n[r]);
            m(e)
        }
        var y = {},
            w = "",
            A = "textContent",
            S = "",
            P = {},
            _ = "loading",
            C = !0;
        return P.plural = function(e, t, n, i) {
            var r = parseFloat(t);
            if (isNaN(r)) return e;
            if (i != A) return e;
            P._pluralRules || (P._pluralRules = d(S));
            var a = "[" + P._pluralRules(r) + "]";
            return 0 === r && n + "[zero]" in y ? e = y[n + "[zero]"][i] : 1 == r && n + "[one]" in y ? e = y[n + "[one]"][i] : 2 == r && n + "[two]" in y ? e = y[n + "[two]"][i] : n + a in y ? e = y[n + a][i] : n + "[other]" in y && (e = y[n + "[other]"][i]), e
        }, {
            get: function(e, t, n) {
                var i = e.lastIndexOf("."),
                    r = A;
                i > 0 && (r = e.substr(i + 1), e = e.substring(0, i));
                var a;
                n && (a = {}, a[r] = n);
                var s = f(e, t, a);
                return s && r in s ? s[r] : "{{" + e + "}}"
            },
            getData: function() {
                return y
            },
            getText: function() {
                return w
            },
            getLanguage: function() {
                return S
            },
            setLanguage: function(e, t) {
                h(e, function() {
                    t && t(), b()
                })
            },
            getDirection: function() {
                var e = ["ar", "he", "fa", "ps", "ur"],
                    t = S.split("-", 1)[0];
                return e.indexOf(t) >= 0 ? "rtl" : "ltr"
            },
            translate: b,
            getReadyState: function() {
                return _
            },
            ready: function(n) {
                n && ("complete" == _ || "interactive" == _ ? e.setTimeout(function() {
                    n()
                }) : t.addEventListener && t.addEventListener("localized", function e() {
                    t.removeEventListener("localized", e), n()
                }))
            }
        }
    }(window, document),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], t) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = t() : e["pdfjs-dist/build/pdf"] = e.pdfjsDistBuildPdf = t()
    }(this, function() {
        return function(e) {
            function t(i) {
                if (n[i]) return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.i = function(e) {
                return e
            }, t.d = function(e, n, i) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                })
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 13)
        }([function(e, t, n) {
            (function(e) {
                function i(e) {
                    ie = e
                }

                function r() {
                    return ie
                }

                function a(e) {
                    ie >= ee.infos && console.log("Info: " + e)
                }

                function s(e) {
                    ie >= ee.warnings && console.log("Warning: " + e)
                }

                function o(e) {
                    console.log("Deprecated API usage: " + e)
                }

                function c(e) {
                    throw ie >= ee.errors && (console.log("Error: " + e), console.log(l())), new Error(e)
                }

                function l() {
                    try {
                        throw new Error
                    } catch (e) {
                        return e.stack ? e.stack.split("\n").slice(2).join("\n") : ""
                    }
                }

                function h(e, t) {
                    e || c(t)
                }

                function u(e, t) {
                    try {
                        var n = new URL(e);
                        if (!n.origin || "null" === n.origin) return !1
                    } catch (e) {
                        return !1
                    }
                    var i = new URL(t, n);
                    return n.origin === i.origin
                }

                function d(e) {
                    if (!e) return !1;
                    switch (e.protocol) {
                        case "http:":
                        case "https:":
                        case "ftp:":
                        case "mailto:":
                        case "tel:":
                            return !0;
                        default:
                            return !1
                    }
                }

                function f(e, t) {
                    if (!e) return null;
                    try {
                        var n = t ? new URL(e, t) : new URL(e);
                        if (d(n)) return n
                    } catch (e) {}
                    return null
                }

                function p(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !1
                    }), n
                }

                function g(e) {
                    var t;
                    return function() {
                        return e && (t = Object.create(null), e(t), e = null), t
                    }
                }

                function m(e) {
                    return "string" != typeof e ? (s("The argument for removeNullCharacters must be a string."), e) : e.replace(pe, "")
                }

                function v(e) {
                    h(null !== e && "object" === (void 0 === e ? "undefined" : H(e)) && void 0 !== e.length, "Invalid argument for bytesToString");
                    var t = e.length;
                    if (t < 8192) return String.fromCharCode.apply(null, e);
                    for (var n = [], i = 0; i < t; i += 8192) {
                        var r = Math.min(i + 8192, t),
                            a = e.subarray(i, r);
                        n.push(String.fromCharCode.apply(null, a))
                    }
                    return n.join("")
                }

                function b(e) {
                    h("string" == typeof e, "Invalid argument for stringToBytes");
                    for (var t = e.length, n = new Uint8Array(t), i = 0; i < t; ++i) n[i] = 255 & e.charCodeAt(i);
                    return n
                }

                function y(e) {
                    return void 0 !== e.length ? e.length : (h(void 0 !== e.byteLength), e.byteLength)
                }

                function w(e) {
                    if (1 === e.length && e[0] instanceof Uint8Array) return e[0];
                    var t, n, i, r = 0,
                        a = e.length;
                    for (t = 0; t < a; t++) n = e[t], i = y(n), r += i;
                    var s = 0,
                        o = new Uint8Array(r);
                    for (t = 0; t < a; t++) n = e[t], n instanceof Uint8Array || (n = "string" == typeof n ? b(n) : new Uint8Array(n)), i = n.byteLength, o.set(n, s), s += i;
                    return o
                }

                function A(e) {
                    return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
                }

                function S(e) {
                    for (var t = 1, n = 0; e > t;) t <<= 1, n++;
                    return n
                }

                function P(e, t) {
                    return e[t] << 24 >> 24
                }

                function _(e, t) {
                    return e[t] << 8 | e[t + 1]
                }

                function C(e, t) {
                    return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
                }

                function x() {
                    var e = new Uint8Array(4);
                    return e[0] = 1, 1 === new Uint32Array(e.buffer, 0, 1)[0]
                }

                function L() {
                    try {
                        return new Function(""), !0
                    } catch (e) {
                        return !1
                    }
                }

                function T(e) {
                    var t, n = e.length,
                        i = [];
                    if ("þ" === e[0] && "ÿ" === e[1])
                        for (t = 2; t < n; t += 2) i.push(String.fromCharCode(e.charCodeAt(t) << 8 | e.charCodeAt(t + 1)));
                    else
                        for (t = 0; t < n; ++t) {
                            var r = be[e.charCodeAt(t)];
                            i.push(r ? String.fromCharCode(r) : e.charAt(t))
                        }
                    return i.join("")
                }

                function k(e) {
                    return decodeURIComponent(escape(e))
                }

                function E(e) {
                    return unescape(encodeURIComponent(e))
                }

                function I(e) {
                    for (var t in e) return !1;
                    return !0
                }

                function F(e) {
                    return "boolean" == typeof e
                }

                function D(e) {
                    return "number" == typeof e && (0 | e) === e
                }

                function O(e) {
                    return "number" == typeof e
                }

                function R(e) {
                    return "string" == typeof e
                }

                function N(e) {
                    return e instanceof Array
                }

                function M(e) {
                    return "object" === (void 0 === e ? "undefined" : H(e)) && null !== e && void 0 !== e.byteLength
                }

                function B(e) {
                    return 32 === e || 9 === e || 13 === e || 10 === e
                }

                function j() {
                    return "undefined" == typeof __pdfjsdev_webpack__ && ("object" === ("undefined" == typeof process ? "undefined" : H(process)) && process + "" == "[object process]")
                }

                function U() {
                    var e = {};
                    return e.promise = new Promise(function(t, n) {
                        e.resolve = t, e.reject = n
                    }), e
                }

                function V(e, t, n) {
                    this.sourceName = e, this.targetName = t, this.comObj = n, this.callbackIndex = 1, this.postMessageTransfers = !0;
                    var i = this.callbacksCapabilities = Object.create(null),
                        r = this.actionHandler = Object.create(null);
                    this._onComObjOnMessage = function(e) {
                        var t = e.data;
                        if (t.targetName === this.sourceName)
                            if (t.isReply) {
                                var a = t.callbackId;
                                if (t.callbackId in i) {
                                    var s = i[a];
                                    delete i[a], "error" in t ? s.reject(t.error) : s.resolve(t.data)
                                } else c("Cannot resolve callback " + a)
                            } else if (t.action in r) {
                            var o = r[t.action];
                            if (t.callbackId) {
                                var l = this.sourceName,
                                    h = t.sourceName;
                                Promise.resolve().then(function() {
                                    return o[0].call(o[1], t.data)
                                }).then(function(e) {
                                    n.postMessage({
                                        sourceName: l,
                                        targetName: h,
                                        isReply: !0,
                                        callbackId: t.callbackId,
                                        data: e
                                    })
                                }, function(e) {
                                    e instanceof Error && (e += ""), n.postMessage({
                                        sourceName: l,
                                        targetName: h,
                                        isReply: !0,
                                        callbackId: t.callbackId,
                                        error: e
                                    })
                                })
                            } else o[0].call(o[1], t.data)
                        } else c("Unknown action from worker: " + t.action)
                    }.bind(this), n.addEventListener("message", this._onComObjOnMessage)
                }

                function z(e, t, n) {
                    var i = new Image;
                    i.onload = function() {
                        n.resolve(e, i)
                    }, i.onerror = function() {
                        n.resolve(e, null), s("Error during JPEG image loading")
                    }, i.src = t
                }
                var H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    },
                    W = (n(14), "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : void 0),
                    G = [.001, 0, 0, .001, 0, 0],
                    X = {
                        FILL: 0,
                        STROKE: 1,
                        FILL_STROKE: 2,
                        INVISIBLE: 3,
                        FILL_ADD_TO_PATH: 4,
                        STROKE_ADD_TO_PATH: 5,
                        FILL_STROKE_ADD_TO_PATH: 6,
                        ADD_TO_PATH: 7,
                        FILL_STROKE_MASK: 3,
                        ADD_TO_PATH_FLAG: 4
                    },
                    J = {
                        GRAYSCALE_1BPP: 1,
                        RGB_24BPP: 2,
                        RGBA_32BPP: 3
                    },
                    q = {
                        TEXT: 1,
                        LINK: 2,
                        FREETEXT: 3,
                        LINE: 4,
                        SQUARE: 5,
                        CIRCLE: 6,
                        POLYGON: 7,
                        POLYLINE: 8,
                        HIGHLIGHT: 9,
                        UNDERLINE: 10,
                        SQUIGGLY: 11,
                        STRIKEOUT: 12,
                        STAMP: 13,
                        CARET: 14,
                        INK: 15,
                        POPUP: 16,
                        FILEATTACHMENT: 17,
                        SOUND: 18,
                        MOVIE: 19,
                        WIDGET: 20,
                        SCREEN: 21,
                        PRINTERMARK: 22,
                        TRAPNET: 23,
                        WATERMARK: 24,
                        THREED: 25,
                        REDACT: 26
                    },
                    Y = {
                        INVISIBLE: 1,
                        HIDDEN: 2,
                        PRINT: 4,
                        NOZOOM: 8,
                        NOROTATE: 16,
                        NOVIEW: 32,
                        READONLY: 64,
                        LOCKED: 128,
                        TOGGLENOVIEW: 256,
                        LOCKEDCONTENTS: 512
                    },
                    Q = {
                        READONLY: 1,
                        REQUIRED: 2,
                        NOEXPORT: 4,
                        MULTILINE: 4096,
                        PASSWORD: 8192,
                        NOTOGGLETOOFF: 16384,
                        RADIO: 32768,
                        PUSHBUTTON: 65536,
                        COMBO: 131072,
                        EDIT: 262144,
                        SORT: 524288,
                        FILESELECT: 1048576,
                        MULTISELECT: 2097152,
                        DONOTSPELLCHECK: 4194304,
                        DONOTSCROLL: 8388608,
                        COMB: 16777216,
                        RICHTEXT: 33554432,
                        RADIOSINUNISON: 33554432,
                        COMMITONSELCHANGE: 67108864
                    },
                    K = {
                        SOLID: 1,
                        DASHED: 2,
                        BEVELED: 3,
                        INSET: 4,
                        UNDERLINE: 5
                    },
                    Z = {
                        UNKNOWN: 0,
                        FLATE: 1,
                        LZW: 2,
                        DCT: 3,
                        JPX: 4,
                        JBIG: 5,
                        A85: 6,
                        AHX: 7,
                        CCF: 8,
                        RL: 9
                    },
                    $ = {
                        UNKNOWN: 0,
                        TYPE1: 1,
                        TYPE1C: 2,
                        CIDFONTTYPE0: 3,
                        CIDFONTTYPE0C: 4,
                        TRUETYPE: 5,
                        CIDFONTTYPE2: 6,
                        TYPE3: 7,
                        OPENTYPE: 8,
                        TYPE0: 9,
                        MMTYPE1: 10
                    },
                    ee = {
                        errors: 0,
                        warnings: 1,
                        infos: 5
                    },
                    te = {
                        NONE: 0,
                        BINARY: 1,
                        STREAM: 2
                    },
                    ne = {
                        dependency: 1,
                        setLineWidth: 2,
                        setLineCap: 3,
                        setLineJoin: 4,
                        setMiterLimit: 5,
                        setDash: 6,
                        setRenderingIntent: 7,
                        setFlatness: 8,
                        setGState: 9,
                        save: 10,
                        restore: 11,
                        transform: 12,
                        moveTo: 13,
                        lineTo: 14,
                        curveTo: 15,
                        curveTo2: 16,
                        curveTo3: 17,
                        closePath: 18,
                        rectangle: 19,
                        stroke: 20,
                        closeStroke: 21,
                        fill: 22,
                        eoFill: 23,
                        fillStroke: 24,
                        eoFillStroke: 25,
                        closeFillStroke: 26,
                        closeEOFillStroke: 27,
                        endPath: 28,
                        clip: 29,
                        eoClip: 30,
                        beginText: 31,
                        endText: 32,
                        setCharSpacing: 33,
                        setWordSpacing: 34,
                        setHScale: 35,
                        setLeading: 36,
                        setFont: 37,
                        setTextRenderingMode: 38,
                        setTextRise: 39,
                        moveText: 40,
                        setLeadingMoveText: 41,
                        setTextMatrix: 42,
                        nextLine: 43,
                        showText: 44,
                        showSpacedText: 45,
                        nextLineShowText: 46,
                        nextLineSetSpacingShowText: 47,
                        setCharWidth: 48,
                        setCharWidthAndBounds: 49,
                        setStrokeColorSpace: 50,
                        setFillColorSpace: 51,
                        setStrokeColor: 52,
                        setStrokeColorN: 53,
                        setFillColor: 54,
                        setFillColorN: 55,
                        setStrokeGray: 56,
                        setFillGray: 57,
                        setStrokeRGBColor: 58,
                        setFillRGBColor: 59,
                        setStrokeCMYKColor: 60,
                        setFillCMYKColor: 61,
                        shadingFill: 62,
                        beginInlineImage: 63,
                        beginImageData: 64,
                        endInlineImage: 65,
                        paintXObject: 66,
                        markPoint: 67,
                        markPointProps: 68,
                        beginMarkedContent: 69,
                        beginMarkedContentProps: 70,
                        endMarkedContent: 71,
                        beginCompat: 72,
                        endCompat: 73,
                        paintFormXObjectBegin: 74,
                        paintFormXObjectEnd: 75,
                        beginGroup: 76,
                        endGroup: 77,
                        beginAnnotations: 78,
                        endAnnotations: 79,
                        beginAnnotation: 80,
                        endAnnotation: 81,
                        paintJpegXObject: 82,
                        paintImageMaskXObject: 83,
                        paintImageMaskXObjectGroup: 84,
                        paintImageXObject: 85,
                        paintInlineImageXObject: 86,
                        paintInlineImageXObjectGroup: 87,
                        paintImageXObjectRepeat: 88,
                        paintImageMaskXObjectRepeat: 89,
                        paintSolidColorImageMask: 90,
                        constructPath: 91
                    },
                    ie = ee.warnings,
                    re = {
                        unknown: "unknown",
                        forms: "forms",
                        javaScript: "javaScript",
                        smask: "smask",
                        shadingPattern: "shadingPattern",
                        font: "font"
                    },
                    ae = {
                        NEED_PASSWORD: 1,
                        INCORRECT_PASSWORD: 2
                    },
                    se = function() {
                        function e(e, t) {
                            this.name = "PasswordException", this.message = e, this.code = t
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    oe = function() {
                        function e(e, t) {
                            this.name = "UnknownErrorException", this.message = e, this.details = t
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    ce = function() {
                        function e(e) {
                            this.name = "InvalidPDFException", this.message = e
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    le = function() {
                        function e(e) {
                            this.name = "MissingPDFException", this.message = e
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    he = function() {
                        function e(e, t) {
                            this.name = "UnexpectedResponseException", this.message = e, this.status = t
                        }
                        return e.prototype = new Error, e.constructor = e, e
                    }(),
                    ue = function() {
                        function e(e) {
                            this.message = e
                        }
                        return e.prototype = new Error, e.prototype.name = "NotImplementedException", e.constructor = e, e
                    }(),
                    de = function() {
                        function e(e, t) {
                            this.begin = e, this.end = t, this.message = "Missing data [" + e + ", " + t + ")"
                        }
                        return e.prototype = new Error, e.prototype.name = "MissingDataException", e.constructor = e, e
                    }(),
                    fe = function() {
                        function e(e) {
                            this.message = e
                        }
                        return e.prototype = new Error, e.prototype.name = "XRefParseException", e.constructor = e, e
                    }(),
                    pe = /\x00/g,
                    ge = [1, 0, 0, 1, 0, 0],
                    me = function() {
                        function e() {}
                        var t = ["rgb(", 0, ",", 0, ",", 0, ")"];
                        e.makeCssRgb = function(e, n, i) {
                            return t[1] = e, t[3] = n, t[5] = i, t.join("")
                        }, e.transform = function(e, t) {
                            return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
                        }, e.applyTransform = function(e, t) {
                            return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]]
                        }, e.applyInverseTransform = function(e, t) {
                            var n = t[0] * t[3] - t[1] * t[2];
                            return [(e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / n, (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / n]
                        }, e.getAxialAlignedBoundingBox = function(t, n) {
                            var i = e.applyTransform(t, n),
                                r = e.applyTransform(t.slice(2, 4), n),
                                a = e.applyTransform([t[0], t[3]], n),
                                s = e.applyTransform([t[2], t[1]], n);
                            return [Math.min(i[0], r[0], a[0], s[0]), Math.min(i[1], r[1], a[1], s[1]), Math.max(i[0], r[0], a[0], s[0]), Math.max(i[1], r[1], a[1], s[1])]
                        }, e.inverseTransform = function(e) {
                            var t = e[0] * e[3] - e[1] * e[2];
                            return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t]
                        }, e.apply3dTransform = function(e, t) {
                            return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]]
                        }, e.singularValueDecompose2dScale = function(e) {
                            var t = [e[0], e[2], e[1], e[3]],
                                n = e[0] * t[0] + e[1] * t[2],
                                i = e[0] * t[1] + e[1] * t[3],
                                r = e[2] * t[0] + e[3] * t[2],
                                a = e[2] * t[1] + e[3] * t[3],
                                s = (n + a) / 2,
                                o = Math.sqrt((n + a) * (n + a) - 4 * (n * a - r * i)) / 2,
                                c = s + o || 1,
                                l = s - o || 1;
                            return [Math.sqrt(c), Math.sqrt(l)]
                        }, e.normalizeRect = function(e) {
                            var t = e.slice(0);
                            return e[0] > e[2] && (t[0] = e[2], t[2] = e[0]), e[1] > e[3] && (t[1] = e[3], t[3] = e[1]), t
                        }, e.intersect = function(t, n) {
                            function i(e, t) {
                                return e - t
                            }
                            var r = [t[0], t[2], n[0], n[2]].sort(i),
                                a = [t[1], t[3], n[1], n[3]].sort(i),
                                s = [];
                            return t = e.normalizeRect(t), n = e.normalizeRect(n), (r[0] === t[0] && r[1] === n[0] || r[0] === n[0] && r[1] === t[0]) && (s[0] = r[1], s[2] = r[2], (a[0] === t[1] && a[1] === n[1] || a[0] === n[1] && a[1] === t[1]) && (s[1] = a[1], s[3] = a[2], s))
                        }, e.sign = function(e) {
                            return e < 0 ? -1 : 1
                        };
                        var n = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                        return e.toRoman = function(e, t) {
                            h(D(e) && e > 0, "The number should be a positive integer.");
                            for (var i, r = []; e >= 1e3;) e -= 1e3, r.push("M");
                            i = e / 100 | 0, e %= 100, r.push(n[i]), i = e / 10 | 0, e %= 10, r.push(n[10 + i]), r.push(n[20 + e]);
                            var a = r.join("");
                            return t ? a.toLowerCase() : a
                        }, e.appendToArray = function(e, t) {
                            Array.prototype.push.apply(e, t)
                        }, e.prependToArray = function(e, t) {
                            Array.prototype.unshift.apply(e, t)
                        }, e.extendObj = function(e, t) {
                            for (var n in t) e[n] = t[n]
                        }, e.getInheritableProperty = function(e, t, n) {
                            for (; e && !e.has(t);) e = e.get("Parent");
                            return e ? n ? e.getArray(t) : e.get(t) : null
                        }, e.inherit = function(e, t, n) {
                            e.prototype = Object.create(t.prototype), e.prototype.constructor = e;
                            for (var i in n) e.prototype[i] = n[i]
                        }, e.loadScript = function(e, t) {
                            var n = document.createElement("script"),
                                i = !1;
                            n.setAttribute("src", e), t && (n.onload = function() {
                                i || t(), i = !0
                            }), document.getElementsByTagName("head")[0].appendChild(n)
                        }, e
                    }(),
                    ve = function() {
                        function e(e, t, n, i, r, a) {
                            this.viewBox = e, this.scale = t, this.rotation = n, this.offsetX = i, this.offsetY = r;
                            var s, o, c, l, h = (e[2] + e[0]) / 2,
                                u = (e[3] + e[1]) / 2;
                            switch (n %= 360, n = n < 0 ? n + 360 : n) {
                                case 180:
                                    s = -1, o = 0, c = 0, l = 1;
                                    break;
                                case 90:
                                    s = 0, o = 1, c = 1, l = 0;
                                    break;
                                case 270:
                                    s = 0, o = -1, c = -1, l = 0;
                                    break;
                                default:
                                    s = 1, o = 0, c = 0, l = -1
                            }
                            a && (c = -c, l = -l);
                            var d, f, p, g;
                            0 === s ? (d = Math.abs(u - e[1]) * t + i, f = Math.abs(h - e[0]) * t + r, p = Math.abs(e[3] - e[1]) * t, g = Math.abs(e[2] - e[0]) * t) : (d = Math.abs(h - e[0]) * t + i, f = Math.abs(u - e[1]) * t + r, p = Math.abs(e[2] - e[0]) * t, g = Math.abs(e[3] - e[1]) * t), this.transform = [s * t, o * t, c * t, l * t, d - s * t * h - c * t * u, f - o * t * h - l * t * u], this.width = p, this.height = g, this.fontScale = t
                        }
                        return e.prototype = {
                            clone: function(t) {
                                t = t || {};
                                var n = "scale" in t ? t.scale : this.scale,
                                    i = "rotation" in t ? t.rotation : this.rotation;
                                return new e(this.viewBox.slice(), n, i, this.offsetX, this.offsetY, t.dontFlip)
                            },
                            convertToViewportPoint: function(e, t) {
                                return me.applyTransform([e, t], this.transform)
                            },
                            convertToViewportRectangle: function(e) {
                                var t = me.applyTransform([e[0], e[1]], this.transform),
                                    n = me.applyTransform([e[2], e[3]], this.transform);
                                return [t[0], t[1], n[0], n[1]]
                            },
                            convertToPdfPoint: function(e, t) {
                                return me.applyInverseTransform([e, t], this.transform)
                            }
                        }, e
                    }(),
                    be = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364],
                    ye = function() {
                        function e(e, t, n) {
                            for (; e.length < n;) e += t;
                            return e
                        }

                        function t() {
                            this.started = Object.create(null), this.times = [], this.enabled = !0
                        }
                        return t.prototype = {
                            time: function(e) {
                                this.enabled && (e in this.started && s("Timer is already running for " + e), this.started[e] = Date.now())
                            },
                            timeEnd: function(e) {
                                this.enabled && (e in this.started || s("Timer has not been started for " + e), this.times.push({
                                    name: e,
                                    start: this.started[e],
                                    end: Date.now()
                                }), delete this.started[e])
                            },
                            toString: function() {
                                var t, n, i = this.times,
                                    r = "",
                                    a = 0;
                                for (t = 0, n = i.length; t < n; ++t) {
                                    var s = i[t].name;
                                    s.length > a && (a = s.length)
                                }
                                for (t = 0, n = i.length; t < n; ++t) {
                                    var o = i[t],
                                        c = o.end - o.start;
                                    r += e(o.name, " ", a) + " " + c + "ms\n"
                                }
                                return r
                            }
                        }, t
                    }(),
                    we = function(e, t) {
                        if ("undefined" != typeof Blob) return new Blob([e], {
                            type: t
                        });
                        throw new Error('The "Blob" constructor is not supported.')
                    },
                    Ae = function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                        return function(t, n) {
                            if (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2])) {
                                var i = we(t, n);
                                return URL.createObjectURL(i)
                            }
                            for (var r = "data:" + n + ";base64,", a = 0, s = t.length; a < s; a += 3) {
                                var o = 255 & t[a],
                                    c = 255 & t[a + 1],
                                    l = 255 & t[a + 2];
                                r += e[o >> 2] + e[(3 & o) << 4 | c >> 4] + e[a + 1 < s ? (15 & c) << 2 | l >> 6 : 64] + e[a + 2 < s ? 63 & l : 64]
                            }
                            return r
                        }
                    }();
                V.prototype = {
                    on: function(e, t, n) {
                        var i = this.actionHandler;
                        i[e] && c('There is already an actionName called "' + e + '"'), i[e] = [t, n]
                    },
                    send: function(e, t, n) {
                        var i = {
                            sourceName: this.sourceName,
                            targetName: this.targetName,
                            action: e,
                            data: t
                        };
                        this.postMessage(i, n)
                    },
                    sendWithPromise: function(e, t, n) {
                        var i = this.callbackIndex++,
                            r = {
                                sourceName: this.sourceName,
                                targetName: this.targetName,
                                action: e,
                                data: t,
                                callbackId: i
                            },
                            a = U();
                        this.callbacksCapabilities[i] = a;
                        try {
                            this.postMessage(r, n)
                        } catch (e) {
                            a.reject(e)
                        }
                        return a.promise
                    },
                    postMessage: function(e, t) {
                        t && this.postMessageTransfers ? this.comObj.postMessage(e, t) : this.comObj.postMessage(e)
                    },
                    destroy: function() {
                        this.comObj.removeEventListener("message", this._onComObjOnMessage)
                    }
                }, t.FONT_IDENTITY_MATRIX = G, t.IDENTITY_MATRIX = ge, t.OPS = ne, t.VERBOSITY_LEVELS = ee, t.UNSUPPORTED_FEATURES = re, t.AnnotationBorderStyleType = K, t.AnnotationFieldFlag = Q, t.AnnotationFlag = Y, t.AnnotationType = q, t.FontType = $, t.ImageKind = J, t.CMapCompressionType = te, t.InvalidPDFException = ce, t.MessageHandler = V, t.MissingDataException = de, t.MissingPDFException = le, t.NotImplementedException = ue, t.PageViewport = ve, t.PasswordException = se, t.PasswordResponses = ae, t.StatTimer = ye, t.StreamType = Z, t.TextRenderingMode = X, t.UnexpectedResponseException = he, t.UnknownErrorException = oe, t.Util = me, t.XRefParseException = fe, t.arrayByteLength = y, t.arraysToBytes = w, t.assert = h, t.bytesToString = v, t.createBlob = we, t.createPromiseCapability = U, t.createObjectURL = Ae, t.deprecated = o, t.error = c, t.getLookupTableFactory = g, t.getVerbosityLevel = r, t.globalScope = W, t.info = a, t.isArray = N, t.isArrayBuffer = M, t.isBool = F, t.isEmptyObj = I, t.isInt = D, t.isNum = O, t.isString = R, t.isSpace = B, t.isNodeJS = j, t.isSameOrigin = u, t.createValidAbsoluteUrl = f, t.isLittleEndian = x, t.isEvalSupported = L, t.loadJpegStream = z, t.log2 = S, t.readInt8 = P, t.readUint16 = _, t.readUint32 = C, t.removeNullCharacters = m, t.setVerbosityLevel = i, t.shadow = p, t.string32 = A, t.stringToBytes = b, t.stringToPDFString = T, t.stringToUTF8String = k, t.utf8StringToString = E, t.warn = s
            }).call(t, n(6))
        }, function(e, t, n) {
            function i() {}

            function r(e, t) {
                var n = t && t.url;
                if (e.href = e.title = n ? (0, l.removeNullCharacters)(n) : "", n) {
                    var i = t.target;
                    void 0 === i && (i = s("externalLinkTarget")), e.target = g[i];
                    var r = t.rel;
                    void 0 === r && (r = s("externalLinkRel")), e.rel = r
                }
            }

            function a(e) {
                var t = e.indexOf("#"),
                    n = e.indexOf("?"),
                    i = Math.min(t > 0 ? t : e.length, n > 0 ? n : e.length);
                return e.substring(e.lastIndexOf("/", i) + 1, i)
            }

            function s(e) {
                var t = l.globalScope.PDFJS;
                switch (e) {
                    case "pdfBug":
                        return !!t && t.pdfBug;
                    case "disableAutoFetch":
                        return !!t && t.disableAutoFetch;
                    case "disableStream":
                        return !!t && t.disableStream;
                    case "disableRange":
                        return !!t && t.disableRange;
                    case "disableFontFace":
                        return !!t && t.disableFontFace;
                    case "disableCreateObjectURL":
                        return !!t && t.disableCreateObjectURL;
                    case "disableWebGL":
                        return !t || t.disableWebGL;
                    case "cMapUrl":
                        return t ? t.cMapUrl : null;
                    case "cMapPacked":
                        return !!t && t.cMapPacked;
                    case "postMessageTransfers":
                        return !t || t.postMessageTransfers;
                    case "workerPort":
                        return t ? t.workerPort : null;
                    case "workerSrc":
                        return t ? t.workerSrc : null;
                    case "disableWorker":
                        return !!t && t.disableWorker;
                    case "maxImageSize":
                        return t ? t.maxImageSize : -1;
                    case "imageResourcesPath":
                        return t ? t.imageResourcesPath : "";
                    case "isEvalSupported":
                        return !t || t.isEvalSupported;
                    case "externalLinkTarget":
                        if (!t) return p.NONE;
                        switch (t.externalLinkTarget) {
                            case p.NONE:
                            case p.SELF:
                            case p.BLANK:
                            case p.PARENT:
                            case p.TOP:
                                return t.externalLinkTarget
                        }
                        return (0, l.warn)("PDFJS.externalLinkTarget is invalid: " + t.externalLinkTarget), t.externalLinkTarget = p.NONE, p.NONE;
                    case "externalLinkRel":
                        return t ? t.externalLinkRel : h;
                    case "enableStats":
                        return !(!t || !t.enableStats);
                    case "pdfjsNext":
                        return !(!t || !t.pdfjsNext);
                    default:
                        throw new Error("Unknown default setting: " + e)
                }
            }

            function o() {
                switch (s("externalLinkTarget")) {
                    case p.NONE:
                        return !1;
                    case p.SELF:
                    case p.BLANK:
                    case p.PARENT:
                    case p.TOP:
                        return !0
                }
            }

            function c(e, t) {
                (0, l.deprecated)("isValidUrl(), please use createValidAbsoluteUrl() instead.");
                var n = t ? "http://example.com" : null;
                return null !== (0, l.createValidAbsoluteUrl)(e, n)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.getDefaultSetting = t.LinkTarget = t.getFilenameFromUrl = t.isValidUrl = t.isExternalLinkTargetSet = t.addLinkAttributes = t.RenderingCancelledException = t.CustomStyle = void 0;
            var l = n(0),
                h = "noopener noreferrer nofollow";
            i.prototype = {
                create: function(e, t) {
                    (0, l.assert)(e > 0 && t > 0, "invalid canvas size");
                    var n = document.createElement("canvas"),
                        i = n.getContext("2d");
                    return n.width = e, n.height = t, {
                        canvas: n,
                        context: i
                    }
                },
                reset: function(e, t, n) {
                    (0, l.assert)(e.canvas, "canvas is not specified"), (0, l.assert)(t > 0 && n > 0, "invalid canvas size"), e.canvas.width = t, e.canvas.height = n
                },
                destroy: function(e) {
                    (0, l.assert)(e.canvas, "canvas is not specified"), e.canvas.width = 0, e.canvas.height = 0, e.canvas = null, e.context = null
                }
            };
            var u = function() {
                    function e(e) {
                        this.baseUrl = e.baseUrl || null, this.isCompressed = e.isCompressed || !1
                    }
                    return e.prototype = {
                        fetch: function(e) {
                            var t = e.name;
                            return t ? new Promise(function(e, n) {
                                var i = this.baseUrl + t + (this.isCompressed ? ".bcmap" : ""),
                                    r = new XMLHttpRequest;
                                r.open("GET", i, !0), this.isCompressed && (r.responseType = "arraybuffer"), r.onreadystatechange = function() {
                                    if (r.readyState === XMLHttpRequest.DONE) {
                                        if (200 === r.status || 0 === r.status) {
                                            var t;
                                            if (this.isCompressed && r.response ? t = new Uint8Array(r.response) : !this.isCompressed && r.responseText && (t = (0, l.stringToBytes)(r.responseText)), t) return void e({
                                                cMapData: t,
                                                compressionType: this.isCompressed ? l.CMapCompressionType.BINARY : l.CMapCompressionType.NONE
                                            })
                                        }
                                        n(new Error("Unable to load " + (this.isCompressed ? "binary " : "") + "CMap at: " + i))
                                    }
                                }.bind(this), r.send(null)
                            }.bind(this)) : Promise.reject(new Error("CMap name must be specified."))
                        }
                    }, e
                }(),
                d = function() {
                    function e() {}
                    var t = ["ms", "Moz", "Webkit", "O"],
                        n = Object.create(null);
                    return e.getProp = function(e, i) {
                        if (1 === arguments.length && "string" == typeof n[e]) return n[e];
                        i = i || document.documentElement;
                        var r, a, s = i.style;
                        if ("string" == typeof s[e]) return n[e] = e;
                        a = e.charAt(0).toUpperCase() + e.slice(1);
                        for (var o = 0, c = t.length; o < c; o++)
                            if (r = t[o] + a, "string" == typeof s[r]) return n[e] = r;
                        return n[e] = "undefined"
                    }, e.setProp = function(e, t, n) {
                        var i = this.getProp(e);
                        "undefined" !== i && (t.style[i] = n)
                    }, e
                }(),
                f = function() {
                    function e(e, t) {
                        this.message = e, this.type = t
                    }
                    return e.prototype = new Error, e.prototype.name = "RenderingCancelledException", e.constructor = e, e
                }(),
                p = {
                    NONE: 0,
                    SELF: 1,
                    BLANK: 2,
                    PARENT: 3,
                    TOP: 4
                },
                g = ["", "_self", "_blank", "_parent", "_top"];
            t.CustomStyle = d, t.RenderingCancelledException = f, t.addLinkAttributes = r, t.isExternalLinkTargetSet = o, t.isValidUrl = c, t.getFilenameFromUrl = a, t.LinkTarget = p, t.getDefaultSetting = s, t.DEFAULT_LINK_REL = h, t.DOMCanvasFactory = i, t.DOMCMapReaderFactory = u
        }, function(e, t, n) {
            function i() {}
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AnnotationLayer = void 0;
            var r = n(1),
                a = n(0);
            i.prototype = {
                create: function(e) {
                    switch (e.data.annotationType) {
                        case a.AnnotationType.LINK:
                            return new o(e);
                        case a.AnnotationType.TEXT:
                            return new c(e);
                        case a.AnnotationType.WIDGET:
                            switch (e.data.fieldType) {
                                case "Tx":
                                    return new h(e);
                                case "Btn":
                                    if (e.data.radioButton) return new d(e);
                                    if (e.data.checkBox) return new u(e);
                                    (0, a.warn)("Unimplemented button widget annotation: pushbutton");
                                    break;
                                case "Ch":
                                    return new f(e)
                            }
                            return new l(e);
                        case a.AnnotationType.POPUP:
                            return new p(e);
                        case a.AnnotationType.LINE:
                            return new m(e);
                        case a.AnnotationType.HIGHLIGHT:
                            return new v(e);
                        case a.AnnotationType.UNDERLINE:
                            return new b(e);
                        case a.AnnotationType.SQUIGGLY:
                            return new y(e);
                        case a.AnnotationType.STRIKEOUT:
                            return new w(e);
                        case a.AnnotationType.FILEATTACHMENT:
                            return new A(e);
                        default:
                            return new s(e)
                    }
                }
            };
            var s = function() {
                    function e(e, t, n) {
                        this.isRenderable = t || !1, this.data = e.data, this.layer = e.layer, this.page = e.page, this.viewport = e.viewport, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.imageResourcesPath = e.imageResourcesPath, this.renderInteractiveForms = e.renderInteractiveForms, t && (this.container = this._createContainer(n))
                    }
                    return e.prototype = {
                        _createContainer: function(e) {
                            var t = this.data,
                                n = this.page,
                                i = this.viewport,
                                s = document.createElement("section"),
                                o = t.rect[2] - t.rect[0],
                                c = t.rect[3] - t.rect[1];
                            s.setAttribute("data-annotation-id", t.id);
                            var l = a.Util.normalizeRect([t.rect[0], n.view[3] - t.rect[1] + n.view[1], t.rect[2], n.view[3] - t.rect[3] + n.view[1]]);
                            if (r.CustomStyle.setProp("transform", s, "matrix(" + i.transform.join(",") + ")"),
                                r.CustomStyle.setProp("transformOrigin", s, -l[0] + "px " + -l[1] + "px"), !e && t.borderStyle.width > 0) {
                                s.style.borderWidth = t.borderStyle.width + "px", t.borderStyle.style !== a.AnnotationBorderStyleType.UNDERLINE && (o -= 2 * t.borderStyle.width, c -= 2 * t.borderStyle.width);
                                var h = t.borderStyle.horizontalCornerRadius,
                                    u = t.borderStyle.verticalCornerRadius;
                                if (h > 0 || u > 0) {
                                    var d = h + "px / " + u + "px";
                                    r.CustomStyle.setProp("borderRadius", s, d)
                                }
                                switch (t.borderStyle.style) {
                                    case a.AnnotationBorderStyleType.SOLID:
                                        s.style.borderStyle = "solid";
                                        break;
                                    case a.AnnotationBorderStyleType.DASHED:
                                        s.style.borderStyle = "dashed";
                                        break;
                                    case a.AnnotationBorderStyleType.BEVELED:
                                        (0, a.warn)("Unimplemented border style: beveled");
                                        break;
                                    case a.AnnotationBorderStyleType.INSET:
                                        (0, a.warn)("Unimplemented border style: inset");
                                        break;
                                    case a.AnnotationBorderStyleType.UNDERLINE:
                                        s.style.borderBottomStyle = "solid"
                                }
                                t.color ? s.style.borderColor = a.Util.makeCssRgb(0 | t.color[0], 0 | t.color[1], 0 | t.color[2]) : s.style.borderWidth = 0
                            }
                            return s.style.left = l[0] + "px", s.style.top = l[1] + "px", s.style.width = o + "px", s.style.height = c + "px", s
                        },
                        _createPopup: function(e, t, n) {
                            t || (t = document.createElement("div"), t.style.height = e.style.height, t.style.width = e.style.width, e.appendChild(t));
                            var i = new g({
                                    container: e,
                                    trigger: t,
                                    color: n.color,
                                    title: n.title,
                                    contents: n.contents,
                                    hideWrapper: !0
                                }),
                                r = i.render();
                            r.style.left = e.style.width, e.appendChild(r)
                        },
                        render: function() {
                            throw new Error("Abstract method AnnotationElement.render called")
                        }
                    }, e
                }(),
                o = function() {
                    function e(e) {
                        s.call(this, e, !0)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            this.container.className = "linkAnnotation";
                            var e = document.createElement("a");
                            return (0, r.addLinkAttributes)(e, {
                                url: this.data.url,
                                target: this.data.newWindow ? r.LinkTarget.BLANK : void 0
                            }), this.data.url || (this.data.action ? this._bindNamedAction(e, this.data.action) : this._bindLink(e, this.data.dest)), this.container.appendChild(e), this.container
                        },
                        _bindLink: function(e, t) {
                            var n = this;
                            e.href = this.linkService.getDestinationHash(t), e.onclick = function() {
                                return t && n.linkService.navigateTo(t), !1
                            }, t && (e.className = "internalLink")
                        },
                        _bindNamedAction: function(e, t) {
                            var n = this;
                            e.href = this.linkService.getAnchorUrl(""), e.onclick = function() {
                                return n.linkService.executeNamedAction(t), !1
                            }, e.className = "internalLink"
                        }
                    }), e
                }(),
                c = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        s.call(this, e, t)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            this.container.className = "textAnnotation";
                            var e = document.createElement("img");
                            return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", e.alt = "[{{type}} Annotation]", e.dataset.l10nId = "text_annotation_type", e.dataset.l10nArgs = JSON.stringify({
                                type: this.data.name
                            }), this.data.hasPopup || this._createPopup(this.container, e, this.data), this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                l = function() {
                    function e(e, t) {
                        s.call(this, e, t)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            return this.container
                        }
                    }), e
                }(),
                h = function() {
                    function e(e) {
                        var t = e.renderInteractiveForms || !e.data.hasAppearance && !!e.data.fieldValue;
                        l.call(this, e, t)
                    }
                    var t = ["left", "center", "right"];
                    return a.Util.inherit(e, l, {
                        render: function() {
                            this.container.className = "textWidgetAnnotation";
                            var e = null;
                            if (this.renderInteractiveForms) {
                                if (this.data.multiLine ? (e = document.createElement("textarea"), e.textContent = this.data.fieldValue) : (e = document.createElement("input"), e.type = "text", e.setAttribute("value", this.data.fieldValue)), e.disabled = this.data.readOnly, null !== this.data.maxLen && (e.maxLength = this.data.maxLen), this.data.comb) {
                                    var n = this.data.rect[2] - this.data.rect[0],
                                        i = n / this.data.maxLen;
                                    e.classList.add("comb"), e.style.letterSpacing = "calc(" + i + "px - 1ch)"
                                }
                            } else {
                                e = document.createElement("div"), e.textContent = this.data.fieldValue, e.style.verticalAlign = "middle", e.style.display = "table-cell";
                                var r = null;
                                this.data.fontRefName && (r = this.page.commonObjs.getData(this.data.fontRefName)), this._setTextStyle(e, r)
                            }
                            return null !== this.data.textAlignment && (e.style.textAlign = t[this.data.textAlignment]), this.container.appendChild(e), this.container
                        },
                        _setTextStyle: function(e, t) {
                            var n = e.style;
                            if (n.fontSize = this.data.fontSize + "px", n.direction = this.data.fontDirection < 0 ? "rtl" : "ltr", t) {
                                n.fontWeight = t.black ? t.bold ? "900" : "bold" : t.bold ? "bold" : "normal", n.fontStyle = t.italic ? "italic" : "normal";
                                var i = t.loadedName ? '"' + t.loadedName + '", ' : "",
                                    r = t.fallbackName || "Helvetica, sans-serif";
                                n.fontFamily = i + r
                            }
                        }
                    }), e
                }(),
                u = function() {
                    function e(e) {
                        l.call(this, e, e.renderInteractiveForms)
                    }
                    return a.Util.inherit(e, l, {
                        render: function() {
                            this.container.className = "buttonWidgetAnnotation checkBox";
                            var e = document.createElement("input");
                            return e.disabled = this.data.readOnly, e.type = "checkbox", this.data.fieldValue && "Off" !== this.data.fieldValue && e.setAttribute("checked", !0), this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                d = function() {
                    function e(e) {
                        l.call(this, e, e.renderInteractiveForms)
                    }
                    return a.Util.inherit(e, l, {
                        render: function() {
                            this.container.className = "buttonWidgetAnnotation radioButton";
                            var e = document.createElement("input");
                            return e.disabled = this.data.readOnly, e.type = "radio", e.name = this.data.fieldName, this.data.fieldValue === this.data.buttonValue && e.setAttribute("checked", !0), this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                f = function() {
                    function e(e) {
                        l.call(this, e, e.renderInteractiveForms)
                    }
                    return a.Util.inherit(e, l, {
                        render: function() {
                            this.container.className = "choiceWidgetAnnotation";
                            var e = document.createElement("select");
                            e.disabled = this.data.readOnly, this.data.combo || (e.size = this.data.options.length, this.data.multiSelect && (e.multiple = !0));
                            for (var t = 0, n = this.data.options.length; t < n; t++) {
                                var i = this.data.options[t],
                                    r = document.createElement("option");
                                r.textContent = i.displayValue, r.value = i.exportValue, this.data.fieldValue.indexOf(i.displayValue) >= 0 && r.setAttribute("selected", !0), e.appendChild(r)
                            }
                            return this.container.appendChild(e), this.container
                        }
                    }), e
                }(),
                p = function() {
                    function e(e) {
                        var t = !(!e.data.title && !e.data.contents);
                        s.call(this, e, t)
                    }
                    var t = ["Line"];
                    return a.Util.inherit(e, s, {
                        render: function() {
                            if (this.container.className = "popupAnnotation", t.indexOf(this.data.parentType) >= 0) return this.container;
                            var e = '[data-annotation-id="' + this.data.parentId + '"]',
                                n = this.layer.querySelector(e);
                            if (!n) return this.container;
                            var i = new g({
                                    container: this.container,
                                    trigger: n,
                                    color: this.data.color,
                                    title: this.data.title,
                                    contents: this.data.contents
                                }),
                                a = parseFloat(n.style.left),
                                s = parseFloat(n.style.width);
                            return r.CustomStyle.setProp("transformOrigin", this.container, -(a + s) + "px -" + n.style.top), this.container.style.left = a + s + "px", this.container.appendChild(i.render()), this.container
                        }
                    }), e
                }(),
                g = function() {
                    function e(e) {
                        this.container = e.container, this.trigger = e.trigger, this.color = e.color, this.title = e.title, this.contents = e.contents, this.hideWrapper = e.hideWrapper || !1, this.pinned = !1
                    }
                    return e.prototype = {
                        render: function() {
                            var e = document.createElement("div");
                            e.className = "popupWrapper", this.hideElement = this.hideWrapper ? e : this.container, this.hideElement.setAttribute("hidden", !0);
                            var t = document.createElement("div");
                            t.className = "popup";
                            var n = this.color;
                            if (n) {
                                var i = .7 * (255 - n[0]) + n[0],
                                    r = .7 * (255 - n[1]) + n[1],
                                    s = .7 * (255 - n[2]) + n[2];
                                t.style.backgroundColor = a.Util.makeCssRgb(0 | i, 0 | r, 0 | s)
                            }
                            var o = this._formatContents(this.contents),
                                c = document.createElement("h1");
                            return c.textContent = this.title, this.trigger.addEventListener("click", this._toggle.bind(this)), this.trigger.addEventListener("mouseover", this._show.bind(this, !1)), this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)), t.addEventListener("click", this._hide.bind(this, !0)), t.appendChild(c), t.appendChild(o), e.appendChild(t), e
                        },
                        _formatContents: function(e) {
                            for (var t = document.createElement("p"), n = e.split(/(?:\r\n?|\n)/), i = 0, r = n.length; i < r; ++i) {
                                var a = n[i];
                                t.appendChild(document.createTextNode(a)), i < r - 1 && t.appendChild(document.createElement("br"))
                            }
                            return t
                        },
                        _toggle: function() {
                            this.pinned ? this._hide(!0) : this._show(!0)
                        },
                        _show: function(e) {
                            e && (this.pinned = !0), this.hideElement.hasAttribute("hidden") && (this.hideElement.removeAttribute("hidden"), this.container.style.zIndex += 1)
                        },
                        _hide: function(e) {
                            e && (this.pinned = !1), this.hideElement.hasAttribute("hidden") || this.pinned || (this.hideElement.setAttribute("hidden", !0), this.container.style.zIndex -= 1)
                        }
                    }, e
                }(),
                m = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        s.call(this, e, t, !0)
                    }
                    var t = "http://www.w3.org/2000/svg";
                    return a.Util.inherit(e, s, {
                        render: function() {
                            this.container.className = "lineAnnotation";
                            var e = this.data,
                                n = e.rect[2] - e.rect[0],
                                i = e.rect[3] - e.rect[1],
                                r = document.createElementNS(t, "svg:svg");
                            r.setAttributeNS(null, "version", "1.1"), r.setAttributeNS(null, "width", n + "px"), r.setAttributeNS(null, "height", i + "px"), r.setAttributeNS(null, "preserveAspectRatio", "none"), r.setAttributeNS(null, "viewBox", "0 0 " + n + " " + i);
                            var a = document.createElementNS(t, "svg:line");
                            return a.setAttributeNS(null, "x1", e.rect[2] - e.lineCoordinates[0]), a.setAttributeNS(null, "y1", e.rect[3] - e.lineCoordinates[1]), a.setAttributeNS(null, "x2", e.rect[2] - e.lineCoordinates[2]), a.setAttributeNS(null, "y2", e.rect[3] - e.lineCoordinates[3]), a.setAttributeNS(null, "stroke-width", e.borderStyle.width), a.setAttributeNS(null, "stroke", "transparent"), r.appendChild(a), this.container.append(r), this._createPopup(this.container, a, this.data), this.container
                        }
                    }), e
                }(),
                v = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        s.call(this, e, t, !0)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            return this.container.className = "highlightAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                b = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        s.call(this, e, t, !0)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            return this.container.className = "underlineAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                y = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        s.call(this, e, t, !0)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            return this.container.className = "squigglyAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                w = function() {
                    function e(e) {
                        var t = !!(e.data.hasPopup || e.data.title || e.data.contents);
                        s.call(this, e, t, !0)
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            return this.container.className = "strikeoutAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                        }
                    }), e
                }(),
                A = function() {
                    function e(e) {
                        s.call(this, e, !0);
                        var t = this.data.file;
                        this.filename = (0, r.getFilenameFromUrl)(t.filename), this.content = t.content, this.linkService.onFileAttachmentAnnotation({
                            id: (0, a.stringToPDFString)(t.filename),
                            filename: t.filename,
                            content: t.content
                        })
                    }
                    return a.Util.inherit(e, s, {
                        render: function() {
                            this.container.className = "fileAttachmentAnnotation";
                            var e = document.createElement("div");
                            return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.addEventListener("dblclick", this._download.bind(this)), this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(this.container, e, this.data), this.container.appendChild(e), this.container
                        },
                        _download: function() {
                            if (!this.downloadManager) return void(0, a.warn)("Download cannot be started due to unavailable download manager");
                            this.downloadManager.downloadData(this.content, this.filename, "")
                        }
                    }), e
                }(),
                S = function() {
                    return {
                        render: function(e) {
                            for (var t = new i, n = 0, a = e.annotations.length; n < a; n++) {
                                var s = e.annotations[n];
                                if (s) {
                                    var o = t.create({
                                        data: s,
                                        layer: e.div,
                                        page: e.page,
                                        viewport: e.viewport,
                                        linkService: e.linkService,
                                        downloadManager: e.downloadManager,
                                        imageResourcesPath: e.imageResourcesPath || (0, r.getDefaultSetting)("imageResourcesPath"),
                                        renderInteractiveForms: e.renderInteractiveForms || !1
                                    });
                                    o.isRenderable && e.div.appendChild(o.render())
                                }
                            }
                        },
                        update: function(e) {
                            for (var t = 0, n = e.annotations.length; t < n; t++) {
                                var i = e.annotations[t],
                                    a = e.div.querySelector('[data-annotation-id="' + i.id + '"]');
                                a && r.CustomStyle.setProp("transform", a, "matrix(" + e.viewport.transform.join(",") + ")")
                            }
                            e.div.removeAttribute("hidden")
                        }
                    }
                }();
            t.AnnotationLayer = S
        }, function(e, t, n) {
            function i(e, t, n, i) {
                var a = new A;
                arguments.length > 1 && (0, o.deprecated)("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"), t && (t instanceof S || (t = Object.create(t), t.length = e.length, t.initialData = e.initialData, t.abort || (t.abort = function() {})), e = Object.create(e), e.range = t), a.onPassword = n || null, a.onProgress = i || null;
                var l;
                "string" == typeof e ? l = {
                    url: e
                } : (0, o.isArrayBuffer)(e) ? l = {
                    data: e
                } : e instanceof S ? l = {
                    range: e
                } : ("object" !== (void 0 === e ? "undefined" : s(e)) && (0, o.error)("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"), e.url || e.data || e.range || (0, o.error)("Invalid parameter object: need either .data, .range or .url"), l = e);
                var h = {},
                    u = null,
                    f = null;
                for (var p in l)
                    if ("url" !== p || "undefined" == typeof window)
                        if ("range" !== p)
                            if ("worker" !== p)
                                if ("data" !== p || l[p] instanceof Uint8Array) h[p] = l[p];
                                else {
                                    var g = l[p];
                                    "string" == typeof g ? h[p] = (0, o.stringToBytes)(g) : "object" !== (void 0 === g ? "undefined" : s(g)) || null === g || isNaN(g.length) ? (0, o.isArrayBuffer)(g) ? h[p] = new Uint8Array(g) : (0, o.error)("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.") : h[p] = new Uint8Array(g)
                                }
                else f = l[p];
                else u = l[p];
                else h[p] = new URL(l[p], window.location).href;
                h.rangeChunkSize = h.rangeChunkSize || d, h.disableNativeImageDecoder = !0 === h.disableNativeImageDecoder, h.ignoreErrors = !0 !== h.stopAtErrors;
                var m = h.CMapReaderFactory || c.DOMCMapReaderFactory;
                if (!f) {
                    var v = (0, c.getDefaultSetting)("workerPort");
                    f = v ? new C(null, v) : new C, a._worker = f
                }
                var b = a.docId;
                return f.promise.then(function() {
                    if (a.destroyed) throw new Error("Loading aborted");
                    return r(f, h, u, b).then(function(e) {
                        if (a.destroyed) throw new Error("Loading aborted");
                        var t = new o.MessageHandler(b, e, f.port),
                            n = new x(t, a, u, m);
                        a._transport = n, t.send("Ready", null)
                    })
                }).catch(a._capability.reject), a
            }

            function r(e, t, n, i) {
                return e.destroyed ? Promise.reject(new Error("Worker was destroyed")) : (t.disableAutoFetch = (0, c.getDefaultSetting)("disableAutoFetch"), t.disableStream = (0, c.getDefaultSetting)("disableStream"), t.chunkedViewerLoading = !!n, n && (t.length = n.length, t.initialData = n.initialData), e.messageHandler.sendWithPromise("GetDocRequest", {
                    docId: i,
                    source: t,
                    disableRange: (0, c.getDefaultSetting)("disableRange"),
                    maxImageSize: (0, c.getDefaultSetting)("maxImageSize"),
                    disableFontFace: (0, c.getDefaultSetting)("disableFontFace"),
                    disableCreateObjectURL: (0, c.getDefaultSetting)("disableCreateObjectURL"),
                    postMessageTransfers: (0, c.getDefaultSetting)("postMessageTransfers") && !p,
                    docBaseUrl: t.docBaseUrl,
                    disableNativeImageDecoder: t.disableNativeImageDecoder,
                    ignoreErrors: t.ignoreErrors
                }).then(function(t) {
                    if (e.destroyed) throw new Error("Worker was destroyed");
                    return t
                }))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.build = t.version = t._UnsupportedManager = t.PDFPageProxy = t.PDFDocumentProxy = t.PDFWorker = t.PDFDataRangeTransport = t.getDocument = void 0;
            var a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = n(0),
                c = n(1),
                l = n(11),
                h = n(10),
                u = n(7),
                d = 65536,
                f = !1,
                p = !1,
                g = "undefined" != typeof document && document.currentScript ? document.currentScript.src : null,
                m = null,
                v = !1;
            if ("undefined" == typeof __pdfjsdev_webpack__) {
                "undefined" == typeof window ? (f = !0, void 0 === require.ensure && (require.ensure = require("node-ensure")), v = !0) : "undefined" != typeof require && "function" == typeof require.ensure && (v = !0), "undefined" != typeof requirejs && requirejs.toUrl && (a = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
                var b = "undefined" != typeof requirejs && requirejs.load;
                m = v ? function(e) {
                    require.ensure([], function() {
                        var t = require("./pdf.worker.js");
                        e(t.WorkerMessageHandler)
                    })
                } : b ? function(e) {
                    requirejs(["pdfjs-dist/build/pdf.worker"], function(t) {
                        e(t.WorkerMessageHandler)
                    })
                } : null
            }
            var y, w, A = function() {
                    function e() {
                        this._capability = (0, o.createPromiseCapability)(), this._transport = null, this._worker = null, this.docId = "d" + t++, this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null
                    }
                    var t = 0;
                    return e.prototype = {
                        get promise() {
                            return this._capability.promise
                        },
                        destroy: function() {
                            return this.destroyed = !0, (this._transport ? this._transport.destroy() : Promise.resolve()).then(function() {
                                this._transport = null, this._worker && (this._worker.destroy(), this._worker = null)
                            }.bind(this))
                        },
                        then: function(e, t) {
                            return this.promise.then.apply(this.promise, arguments)
                        }
                    }, e
                }(),
                S = function() {
                    function e(e, t) {
                        this.length = e, this.initialData = t, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._readyCapability = (0, o.createPromiseCapability)()
                    }
                    return e.prototype = {
                        addRangeListener: function(e) {
                            this._rangeListeners.push(e)
                        },
                        addProgressListener: function(e) {
                            this._progressListeners.push(e)
                        },
                        addProgressiveReadListener: function(e) {
                            this._progressiveReadListeners.push(e)
                        },
                        onDataRange: function(e, t) {
                            for (var n = this._rangeListeners, i = 0, r = n.length; i < r; ++i) n[i](e, t)
                        },
                        onDataProgress: function(e) {
                            this._readyCapability.promise.then(function() {
                                for (var t = this._progressListeners, n = 0, i = t.length; n < i; ++n) t[n](e)
                            }.bind(this))
                        },
                        onDataProgressiveRead: function(e) {
                            this._readyCapability.promise.then(function() {
                                for (var t = this._progressiveReadListeners, n = 0, i = t.length; n < i; ++n) t[n](e)
                            }.bind(this))
                        },
                        transportReady: function() {
                            this._readyCapability.resolve()
                        },
                        requestDataRange: function(e, t) {
                            throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")
                        },
                        abort: function() {}
                    }, e
                }(),
                P = function() {
                    function e(e, t, n) {
                        this.pdfInfo = e, this.transport = t, this.loadingTask = n
                    }
                    return e.prototype = {
                        get numPages() {
                            return this.pdfInfo.numPages
                        },
                        get fingerprint() {
                            return this.pdfInfo.fingerprint
                        },
                        getPage: function(e) {
                            return this.transport.getPage(e)
                        },
                        getPageIndex: function(e) {
                            return this.transport.getPageIndex(e)
                        },
                        getDestinations: function() {
                            return this.transport.getDestinations()
                        },
                        getDestination: function(e) {
                            return this.transport.getDestination(e)
                        },
                        getPageLabels: function() {
                            return this.transport.getPageLabels()
                        },
                        getAttachments: function() {
                            return this.transport.getAttachments()
                        },
                        getJavaScript: function() {
                            return this.transport.getJavaScript()
                        },
                        getOutline: function() {
                            return this.transport.getOutline()
                        },
                        getMetadata: function() {
                            return this.transport.getMetadata()
                        },
                        getData: function() {
                            return this.transport.getData()
                        },
                        getDownloadInfo: function() {
                            return this.transport.downloadInfoCapability.promise
                        },
                        getStats: function() {
                            return this.transport.getStats()
                        },
                        cleanup: function() {
                            this.transport.startCleanup()
                        },
                        destroy: function() {
                            return this.loadingTask.destroy()
                        }
                    }, e
                }(),
                _ = function() {
                    function e(e, t, n) {
                        this.pageIndex = e, this.pageInfo = t, this.transport = n, this.stats = new o.StatTimer, this.stats.enabled = (0, c.getDefaultSetting)("enableStats"), this.commonObjs = n.commonObjs, this.objs = new L, this.cleanupAfterRender = !1, this.pendingCleanup = !1, this.intentStates = Object.create(null), this.destroyed = !1
                    }
                    return e.prototype = {
                        get pageNumber() {
                            return this.pageIndex + 1
                        },
                        get rotate() {
                            return this.pageInfo.rotate
                        },
                        get ref() {
                            return this.pageInfo.ref
                        },
                        get userUnit() {
                            return this.pageInfo.userUnit
                        },
                        get view() {
                            return this.pageInfo.view
                        },
                        getViewport: function(e, t) {
                            return arguments.length < 2 && (t = this.rotate), new o.PageViewport(this.view, e, t, 0, 0)
                        },
                        getAnnotations: function(e) {
                            var t = e && e.intent || null;
                            return this.annotationsPromise && this.annotationsIntent === t || (this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, t), this.annotationsIntent = t), this.annotationsPromise
                        },
                        render: function(e) {
                            function t(e) {
                                var t = a.renderTasks.indexOf(s);
                                t >= 0 && a.renderTasks.splice(t, 1), h.cleanupAfterRender && (h.pendingCleanup = !0), h._tryCleanup(), e ? s.capability.reject(e) : s.capability.resolve(), n.timeEnd("Rendering"), n.timeEnd("Overall")
                            }
                            var n = this.stats;
                            n.time("Overall"), this.pendingCleanup = !1;
                            var i = "print" === e.intent ? "print" : "display",
                                r = e.canvasFactory || new c.DOMCanvasFactory;
                            this.intentStates[i] || (this.intentStates[i] = Object.create(null));
                            var a = this.intentStates[i];
                            a.displayReadyCapability || (a.receivingOperatorList = !0, a.displayReadyCapability = (0, o.createPromiseCapability)(), a.operatorList = {
                                fnArray: [],
                                argsArray: [],
                                lastChunk: !1
                            }, this.stats.time("Page Request"), this.transport.messageHandler.send("RenderPageRequest", {
                                pageIndex: this.pageNumber - 1,
                                intent: i,
                                renderInteractiveForms: !0 === e.renderInteractiveForms
                            }));
                            var s = new k(t, e, this.objs, this.commonObjs, a.operatorList, this.pageNumber, r);
                            s.useRequestAnimationFrame = "print" !== i, a.renderTasks || (a.renderTasks = []), a.renderTasks.push(s);
                            var l = s.task;
                            e.continueCallback && ((0, o.deprecated)("render is used with continueCallback parameter"), l.onContinue = e.continueCallback);
                            var h = this;
                            return a.displayReadyCapability.promise.then(function(e) {
                                if (h.pendingCleanup) return void t();
                                n.time("Rendering"), s.initializeGraphics(e), s.operatorListChanged()
                            }, function(e) {
                                t(e)
                            }), l
                        },
                        getOperatorList: function() {
                            function e() {
                                if (n.operatorList.lastChunk) {
                                    n.opListReadCapability.resolve(n.operatorList);
                                    var e = n.renderTasks.indexOf(t);
                                    e >= 0 && n.renderTasks.splice(e, 1)
                                }
                            }
                            this.intentStates.oplist || (this.intentStates.oplist = Object.create(null));
                            var t, n = this.intentStates.oplist;
                            return n.opListReadCapability || (t = {}, t.operatorListChanged = e, n.receivingOperatorList = !0, n.opListReadCapability = (0, o.createPromiseCapability)(), n.renderTasks = [], n.renderTasks.push(t), n.operatorList = {
                                fnArray: [],
                                argsArray: [],
                                lastChunk: !1
                            }, this.transport.messageHandler.send("RenderPageRequest", {
                                pageIndex: this.pageIndex,
                                intent: "oplist"
                            })), n.opListReadCapability.promise
                        },
                        getTextContent: function(e) {
                            return e = e || {}, this.transport.messageHandler.sendWithPromise("GetTextContent", {
                                pageIndex: this.pageNumber - 1,
                                normalizeWhitespace: !0 === e.normalizeWhitespace,
                                combineTextItems: !0 !== e.disableCombineTextItems
                            })
                        },
                        _destroy: function() {
                            this.destroyed = !0, this.transport.pageCache[this.pageIndex] = null;
                            var e = [];
                            return Object.keys(this.intentStates).forEach(function(t) {
                                if ("oplist" !== t) {
                                    this.intentStates[t].renderTasks.forEach(function(t) {
                                        var n = t.capability.promise.catch(function() {});
                                        e.push(n), t.cancel()
                                    })
                                }
                            }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1, Promise.all(e)
                        },
                        destroy: function() {
                            (0, o.deprecated)("page destroy method, use cleanup() instead"), this.cleanup()
                        },
                        cleanup: function() {
                            this.pendingCleanup = !0, this._tryCleanup()
                        },
                        _tryCleanup: function() {
                            this.pendingCleanup && !Object.keys(this.intentStates).some(function(e) {
                                var t = this.intentStates[e];
                                return 0 !== t.renderTasks.length || t.receivingOperatorList
                            }, this) && (Object.keys(this.intentStates).forEach(function(e) {
                                delete this.intentStates[e]
                            }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1)
                        },
                        _startRenderPage: function(e, t) {
                            var n = this.intentStates[t];
                            n.displayReadyCapability && n.displayReadyCapability.resolve(e)
                        },
                        _renderPageChunk: function(e, t) {
                            var n, i, r = this.intentStates[t];
                            for (n = 0, i = e.length; n < i; n++) r.operatorList.fnArray.push(e.fnArray[n]), r.operatorList.argsArray.push(e.argsArray[n]);
                            for (r.operatorList.lastChunk = e.lastChunk, n = 0; n < r.renderTasks.length; n++) r.renderTasks[n].operatorListChanged();
                            e.lastChunk && (r.receivingOperatorList = !1, this._tryCleanup())
                        }
                    }, e
                }(),
                C = function() {
                    function e() {
                        return void 0 !== a ? a : (0, c.getDefaultSetting)("workerSrc") ? (0, c.getDefaultSetting)("workerSrc") : g ? g.replace(/(\.(?:min\.)?js)$/i, ".worker$1") : void(0, o.error)("No PDFJS.workerSrc specified")
                    }

                    function t() {
                        return l ? l.promise : (l = (0, o.createPromiseCapability)(), (m || function(t) {
                            o.Util.loadScript(e(), function() {
                                t(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)
                            })
                        })(l.resolve), l.promise)
                    }

                    function n(e) {
                        this._listeners = [], this._defer = e, this._deferred = Promise.resolve(void 0)
                    }

                    function i(e) {
                        var t = "importScripts('" + e + "');";
                        return URL.createObjectURL(new Blob([t]))
                    }

                    function r(e, t) {
                        if (this.name = e, this.destroyed = !1, this._readyCapability = (0, o.createPromiseCapability)(), this._port = null, this._webWorker = null, this._messageHandler = null, t) return void this._initializeFromPort(t);
                        this._initialize()
                    }
                    var l, h = 0;
                    return n.prototype = {
                        postMessage: function(e, t) {
                            function n(e) {
                                if ("object" !== (void 0 === e ? "undefined" : s(e)) || null === e) return e;
                                if (i.has(e)) return i.get(e);
                                var r, a;
                                if ((a = e.buffer) && (0, o.isArrayBuffer)(a)) {
                                    var c = t && t.indexOf(a) >= 0;
                                    return r = e === a ? e : c ? new e.constructor(a, e.byteOffset, e.byteLength) : new e.constructor(e), i.set(e, r), r
                                }
                                r = (0, o.isArray)(e) ? [] : {}, i.set(e, r);
                                for (var l in e) {
                                    for (var h, u = e; !(h = Object.getOwnPropertyDescriptor(u, l));) u = Object.getPrototypeOf(u);
                                    void 0 !== h.value && "function" != typeof h.value && (r[l] = n(h.value))
                                }
                                return r
                            }
                            if (!this._defer) return void this._listeners.forEach(function(t) {
                                t.call(this, {
                                    data: e
                                })
                            }, this);
                            var i = new WeakMap,
                                r = {
                                    data: n(e)
                                };
                            this._deferred.then(function() {
                                this._listeners.forEach(function(e) {
                                    e.call(this, r)
                                }, this)
                            }.bind(this))
                        },
                        addEventListener: function(e, t) {
                            this._listeners.push(t)
                        },
                        removeEventListener: function(e, t) {
                            var n = this._listeners.indexOf(t);
                            this._listeners.splice(n, 1)
                        },
                        terminate: function() {
                            this._listeners = []
                        }
                    }, r.prototype = {
                        get promise() {
                            return this._readyCapability.promise
                        },
                        get port() {
                            return this._port
                        },
                        get messageHandler() {
                            return this._messageHandler
                        },
                        _initializeFromPort: function(e) {
                            this._port = e, this._messageHandler = new o.MessageHandler("main", "worker", e), this._messageHandler.on("ready", function() {}), this._readyCapability.resolve()
                        },
                        _initialize: function() {
                            if (!f && !(0, c.getDefaultSetting)("disableWorker") && "undefined" != typeof Worker) {
                                var t = e();
                                try {
                                    (0, o.isSameOrigin)(window.location.href, t) || (t = i(new URL(t, window.location).href));
                                    var n = new Worker(t),
                                        r = new o.MessageHandler("main", "worker", n),
                                        a = function() {
                                            n.removeEventListener("error", s), r.destroy(), n.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                                        }.bind(this),
                                        s = function(e) {
                                            this._webWorker || a()
                                        }.bind(this);
                                    n.addEventListener("error", s), r.on("test", function(e) {
                                        if (n.removeEventListener("error", s), this.destroyed) return void a();
                                        e && e.supportTypedArray ? (this._messageHandler = r, this._port = n, this._webWorker = n, e.supportTransfers || (p = !0), this._readyCapability.resolve(), r.send("configure", {
                                            verbosity: (0, o.getVerbosityLevel)()
                                        })) : (this._setupFakeWorker(), r.destroy(), n.terminate())
                                    }.bind(this)), r.on("console_log", function(e) {
                                        console.log.apply(console, e)
                                    }), r.on("console_error", function(e) {
                                        console.error.apply(console, e)
                                    }), r.on("ready", function(e) {
                                        if (n.removeEventListener("error", s), this.destroyed) return void a();
                                        try {
                                            l()
                                        } catch (e) {
                                            this._setupFakeWorker()
                                        }
                                    }.bind(this));
                                    var l = function() {
                                        var e = (0, c.getDefaultSetting)("postMessageTransfers") && !p,
                                            t = new Uint8Array([e ? 255 : 0]);
                                        try {
                                            r.send("test", t, [t.buffer])
                                        } catch (e) {
                                            (0, o.info)("Cannot use postMessage transfers"), t[0] = 0, r.send("test", t)
                                        }
                                    };
                                    return void l()
                                } catch (e) {
                                    (0, o.info)("The worker has been disabled.")
                                }
                            }
                            this._setupFakeWorker()
                        },
                        _setupFakeWorker: function() {
                            f || (0, c.getDefaultSetting)("disableWorker") || ((0, o.warn)("Setting up fake worker."), f = !0), t().then(function(e) {
                                if (this.destroyed) return void this._readyCapability.reject(new Error("Worker was destroyed"));
                                var t = Uint8Array !== Float32Array,
                                    i = new n(t);
                                this._port = i;
                                var r = "fake" + h++,
                                    a = new o.MessageHandler(r + "_worker", r, i);
                                e.setup(a, i);
                                var s = new o.MessageHandler(r, r + "_worker", i);
                                this._messageHandler = s, this._readyCapability.resolve()
                            }.bind(this))
                        },
                        destroy: function() {
                            this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
                        }
                    }, r
                }(),
                x = function() {
                    function e(e, t, n, i) {
                        this.messageHandler = e, this.loadingTask = t, this.pdfDataRangeTransport = n, this.commonObjs = new L, this.fontLoader = new l.FontLoader(t.docId), this.CMapReaderFactory = new i({
                            baseUrl: (0, c.getDefaultSetting)("cMapUrl"),
                            isCompressed: (0, c.getDefaultSetting)("cMapPacked")
                        }), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this.pageCache = [], this.pagePromises = [], this.downloadInfoCapability = (0, o.createPromiseCapability)(), this.setupMessageHandler()
                    }
                    return e.prototype = {
                        destroy: function() {
                            if (this.destroyCapability) return this.destroyCapability.promise;
                            this.destroyed = !0, this.destroyCapability = (0, o.createPromiseCapability)(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                            var e = [];
                            this.pageCache.forEach(function(t) {
                                t && e.push(t._destroy())
                            }), this.pageCache = [], this.pagePromises = [];
                            var t = this,
                                n = this.messageHandler.sendWithPromise("Terminate", null);
                            return e.push(n), Promise.all(e).then(function() {
                                t.fontLoader.clear(), t.pdfDataRangeTransport && (t.pdfDataRangeTransport.abort(), t.pdfDataRangeTransport = null), t.messageHandler && (t.messageHandler.destroy(), t.messageHandler = null), t.destroyCapability.resolve()
                            }, this.destroyCapability.reject), this.destroyCapability.promise
                        },
                        setupMessageHandler: function() {
                            var e = this.messageHandler,
                                t = this.loadingTask,
                                n = this.pdfDataRangeTransport;
                            n && (n.addRangeListener(function(t, n) {
                                e.send("OnDataRange", {
                                    begin: t,
                                    chunk: n
                                })
                            }), n.addProgressListener(function(t) {
                                e.send("OnDataProgress", {
                                    loaded: t
                                })
                            }), n.addProgressiveReadListener(function(t) {
                                e.send("OnDataRange", {
                                    chunk: t
                                })
                            }), e.on("RequestDataRange", function(e) {
                                n.requestDataRange(e.begin, e.end)
                            }, this)), e.on("GetDoc", function(e) {
                                var t = e.pdfInfo;
                                this.numPages = e.pdfInfo.numPages;
                                var n = this.loadingTask,
                                    i = new P(t, this, n);
                                this.pdfDocument = i, n._capability.resolve(i)
                            }, this), e.on("PasswordRequest", function(e) {
                                if (this._passwordCapability = (0, o.createPromiseCapability)(), t.onPassword) {
                                    var n = function(e) {
                                        this._passwordCapability.resolve({
                                            password: e
                                        })
                                    }.bind(this);
                                    t.onPassword(n, e.code)
                                } else this._passwordCapability.reject(new o.PasswordException(e.message, e.code));
                                return this._passwordCapability.promise
                            }, this), e.on("PasswordException", function(e) {
                                t._capability.reject(new o.PasswordException(e.message, e.code))
                            }, this), e.on("InvalidPDF", function(e) {
                                this.loadingTask._capability.reject(new o.InvalidPDFException(e.message))
                            }, this), e.on("MissingPDF", function(e) {
                                this.loadingTask._capability.reject(new o.MissingPDFException(e.message))
                            }, this), e.on("UnexpectedResponse", function(e) {
                                this.loadingTask._capability.reject(new o.UnexpectedResponseException(e.message, e.status))
                            }, this), e.on("UnknownError", function(e) {
                                this.loadingTask._capability.reject(new o.UnknownErrorException(e.message, e.details))
                            }, this), e.on("DataLoaded", function(e) {
                                this.downloadInfoCapability.resolve(e)
                            }, this), e.on("PDFManagerReady", function(e) {
                                this.pdfDataRangeTransport && this.pdfDataRangeTransport.transportReady()
                            }, this), e.on("StartRenderPage", function(e) {
                                if (!this.destroyed) {
                                    var t = this.pageCache[e.pageIndex];
                                    t.stats.timeEnd("Page Request"), t._startRenderPage(e.transparency, e.intent)
                                }
                            }, this), e.on("RenderPageChunk", function(e) {
                                if (!this.destroyed) {
                                    this.pageCache[e.pageIndex]._renderPageChunk(e.operatorList, e.intent)
                                }
                            }, this), e.on("commonobj", function(e) {
                                if (!this.destroyed) {
                                    var t = e[0],
                                        n = e[1];
                                    if (!this.commonObjs.hasData(t)) switch (n) {
                                        case "Font":
                                            var i = e[2];
                                            if ("error" in i) {
                                                var r = i.error;
                                                (0, o.warn)("Error during font loading: " + r), this.commonObjs.resolve(t, r);
                                                break
                                            }
                                            var a = null;
                                            (0, c.getDefaultSetting)("pdfBug") && o.globalScope.FontInspector && o.globalScope.FontInspector.enabled && (a = {
                                                registerFont: function(e, t) {
                                                    o.globalScope.FontInspector.fontAdded(e, t)
                                                }
                                            });
                                            var s = new l.FontFaceObject(i, {
                                                isEvalSuported: (0, c.getDefaultSetting)("isEvalSupported"),
                                                disableFontFace: (0, c.getDefaultSetting)("disableFontFace"),
                                                fontRegistry: a
                                            });
                                            this.fontLoader.bind([s], function(e) {
                                                this.commonObjs.resolve(t, s)
                                            }.bind(this));
                                            break;
                                        case "FontPath":
                                            this.commonObjs.resolve(t, e[2]);
                                            break;
                                        default:
                                            (0, o.error)("Got unknown common object type " + n)
                                    }
                                }
                            }, this), e.on("obj", function(e) {
                                if (!this.destroyed) {
                                    var t, n = e[0],
                                        i = e[1],
                                        r = e[2],
                                        a = this.pageCache[i];
                                    if (!a.objs.hasData(n)) switch (r) {
                                        case "JpegStream":
                                            t = e[3], (0, o.loadJpegStream)(n, t, a.objs);
                                            break;
                                        case "Image":
                                            t = e[3], a.objs.resolve(n, t);
                                            t && "data" in t && t.data.length > 8e6 && (a.cleanupAfterRender = !0);
                                            break;
                                        default:
                                            (0, o.error)("Got unknown object type " + r)
                                    }
                                }
                            }, this), e.on("DocProgress", function(e) {
                                if (!this.destroyed) {
                                    var t = this.loadingTask;
                                    t.onProgress && t.onProgress({
                                        loaded: e.loaded,
                                        total: e.total
                                    })
                                }
                            }, this), e.on("PageError", function(e) {
                                if (!this.destroyed) {
                                    var t = this.pageCache[e.pageNum - 1],
                                        n = t.intentStates[e.intent];
                                    if (n.displayReadyCapability ? n.displayReadyCapability.reject(e.error) : (0, o.error)(e.error), n.operatorList) {
                                        n.operatorList.lastChunk = !0;
                                        for (var i = 0; i < n.renderTasks.length; i++) n.renderTasks[i].operatorListChanged()
                                    }
                                }
                            }, this), e.on("UnsupportedFeature", function(e) {
                                if (!this.destroyed) {
                                    var t = e.featureId,
                                        n = this.loadingTask;
                                    n.onUnsupportedFeature && n.onUnsupportedFeature(t), E.notify(t)
                                }
                            }, this), e.on("JpegDecode", function(e) {
                                if (this.destroyed) return Promise.reject(new Error("Worker was destroyed"));
                                if ("undefined" == typeof document) return Promise.reject(new Error('"document" is not defined.'));
                                var t = e[0],
                                    n = e[1];
                                return 3 !== n && 1 !== n ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(e, i) {
                                    var r = new Image;
                                    r.onload = function() {
                                        var t = r.width,
                                            i = r.height,
                                            a = t * i,
                                            s = 4 * a,
                                            o = new Uint8Array(a * n),
                                            c = document.createElement("canvas");
                                        c.width = t, c.height = i;
                                        var l = c.getContext("2d");
                                        l.drawImage(r, 0, 0);
                                        var h, u, d = l.getImageData(0, 0, t, i).data;
                                        if (3 === n)
                                            for (h = 0, u = 0; h < s; h += 4, u += 3) o[u] = d[h], o[u + 1] = d[h + 1], o[u + 2] = d[h + 2];
                                        else if (1 === n)
                                            for (h = 0, u = 0; h < s; h += 4, u++) o[u] = d[h];
                                        e({
                                            data: o,
                                            width: t,
                                            height: i
                                        })
                                    }, r.onerror = function() {
                                        i(new Error("JpegDecode failed to load image"))
                                    }, r.src = t
                                })
                            }, this), e.on("FetchBuiltInCMap", function(e) {
                                return this.destroyed ? Promise.reject(new Error("Worker was destroyed")) : this.CMapReaderFactory.fetch({
                                    name: e.name
                                })
                            }, this)
                        },
                        getData: function() {
                            return this.messageHandler.sendWithPromise("GetData", null)
                        },
                        getPage: function(e, t) {
                            if (!(0, o.isInt)(e) || e <= 0 || e > this.numPages) return Promise.reject(new Error("Invalid page request"));
                            var n = e - 1;
                            if (n in this.pagePromises) return this.pagePromises[n];
                            var i = this.messageHandler.sendWithPromise("GetPage", {
                                pageIndex: n
                            }).then(function(e) {
                                if (this.destroyed) throw new Error("Transport destroyed");
                                var t = new _(n, e, this);
                                return this.pageCache[n] = t, t
                            }.bind(this));
                            return this.pagePromises[n] = i, i
                        },
                        getPageIndex: function(e) {
                            return this.messageHandler.sendWithPromise("GetPageIndex", {
                                ref: e
                            }).catch(function(e) {
                                return Promise.reject(new Error(e))
                            })
                        },
                        getAnnotations: function(e, t) {
                            return this.messageHandler.sendWithPromise("GetAnnotations", {
                                pageIndex: e,
                                intent: t
                            })
                        },
                        getDestinations: function() {
                            return this.messageHandler.sendWithPromise("GetDestinations", null)
                        },
                        getDestination: function(e) {
                            return this.messageHandler.sendWithPromise("GetDestination", {
                                id: e
                            })
                        },
                        getPageLabels: function() {
                            return this.messageHandler.sendWithPromise("GetPageLabels", null)
                        },
                        getAttachments: function() {
                            return this.messageHandler.sendWithPromise("GetAttachments", null)
                        },
                        getJavaScript: function() {
                            return this.messageHandler.sendWithPromise("GetJavaScript", null)
                        },
                        getOutline: function() {
                            return this.messageHandler.sendWithPromise("GetOutline", null)
                        },
                        getMetadata: function() {
                            return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(e) {
                                return {
                                    info: e[0],
                                    metadata: e[1] ? new u.Metadata(e[1]) : null
                                }
                            })
                        },
                        getStats: function() {
                            return this.messageHandler.sendWithPromise("GetStats", null)
                        },
                        startCleanup: function() {
                            this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
                                for (var e = 0, t = this.pageCache.length; e < t; e++) {
                                    var n = this.pageCache[e];
                                    n && n.cleanup()
                                }
                                this.commonObjs.clear(), this.fontLoader.clear()
                            }.bind(this))
                        }
                    }, e
                }(),
                L = function() {
                    function e() {
                        this.objs = Object.create(null)
                    }
                    return e.prototype = {
                        ensureObj: function(e) {
                            if (this.objs[e]) return this.objs[e];
                            var t = {
                                capability: (0, o.createPromiseCapability)(),
                                data: null,
                                resolved: !1
                            };
                            return this.objs[e] = t, t
                        },
                        get: function(e, t) {
                            if (t) return this.ensureObj(e).capability.promise.then(t), null;
                            var n = this.objs[e];
                            return n && n.resolved || (0, o.error)("Requesting object that isn't resolved yet " + e), n.data
                        },
                        resolve: function(e, t) {
                            var n = this.ensureObj(e);
                            n.resolved = !0, n.data = t, n.capability.resolve(t)
                        },
                        isResolved: function(e) {
                            var t = this.objs;
                            return !!t[e] && t[e].resolved
                        },
                        hasData: function(e) {
                            return this.isResolved(e)
                        },
                        getData: function(e) {
                            var t = this.objs;
                            return t[e] && t[e].resolved ? t[e].data : null
                        },
                        clear: function() {
                            this.objs = Object.create(null)
                        }
                    }, e
                }(),
                T = function() {
                    function e(e) {
                        this._internalRenderTask = e, this.onContinue = null
                    }
                    return e.prototype = {
                        get promise() {
                            return this._internalRenderTask.capability.promise
                        },
                        cancel: function() {
                            this._internalRenderTask.cancel()
                        },
                        then: function(e, t) {
                            return this.promise.then.apply(this.promise, arguments)
                        }
                    }, e
                }(),
                k = function() {
                    function e(e, t, n, i, r, a, s) {
                        this.callback = e, this.params = t, this.objs = n, this.commonObjs = i, this.operatorListIdx = null, this.operatorList = r, this.pageNumber = a, this.canvasFactory = s, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this.useRequestAnimationFrame = !1, this.cancelled = !1, this.capability = (0, o.createPromiseCapability)(), this.task = new T(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this)
                    }
                    return e.prototype = {
                        initializeGraphics: function(e) {
                            if (!this.cancelled) {
                                (0, c.getDefaultSetting)("pdfBug") && o.globalScope.StepperManager && o.globalScope.StepperManager.enabled && (this.stepper = o.globalScope.StepperManager.create(this.pageNumber - 1), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                                var t = this.params;
                                this.gfx = new h.CanvasGraphics(t.canvasContext, this.commonObjs, this.objs, this.canvasFactory, t.imageLayer), this.gfx.beginDrawing(t.transform, t.viewport, e), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback()
                            }
                        },
                        cancel: function() {
                            this.running = !1, this.cancelled = !0, (0, c.getDefaultSetting)("pdfjsNext") ? this.callback(new c.RenderingCancelledException("Rendering cancelled, page " + this.pageNumber, "canvas")) : this.callback("cancelled")
                        },
                        operatorListChanged: function() {
                            if (!this.graphicsReady) return void(this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound));
                            this.stepper && this.stepper.updateOperatorList(this.operatorList), this.running || this._continue()
                        },
                        _continue: function() {
                            this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                        },
                        _scheduleNext: function() {
                            this.useRequestAnimationFrame && "undefined" != typeof window ? window.requestAnimationFrame(this._nextBound) : Promise.resolve(void 0).then(this._nextBound)
                        },
                        _next: function() {
                            this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this.callback())))
                        }
                    }, e
                }(),
                E = function() {
                    var e = [];
                    return {
                        listen: function(t) {
                            (0, o.deprecated)("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"), e.push(t)
                        },
                        notify: function(t) {
                            for (var n = 0, i = e.length; n < i; n++) e[n](t)
                        }
                    }
                }();
            t.version = y = "1.8.246", t.build = w = "0e8f020", t.getDocument = i, t.PDFDataRangeTransport = S, t.PDFWorker = C, t.PDFDocumentProxy = P, t.PDFPageProxy = _, t._UnsupportedManager = E, t.version = y, t.build = w
        }, function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SVGGraphics = void 0;
            var i = n(0),
                r = function() {
                    throw new Error("Not implemented: SVGGraphics")
                },
                a = {
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fillColor: "#000000"
                },
                s = function() {
                    function e(e, t, n) {
                        for (var i = -1, r = t; r < n; r++) {
                            var a = 255 & (i ^ e[r]);
                            i = i >>> 8 ^ o[a]
                        }
                        return -1 ^ i
                    }

                    function t(t, n, i, r) {
                        var a = r,
                            s = n.length;
                        i[a] = s >> 24 & 255, i[a + 1] = s >> 16 & 255, i[a + 2] = s >> 8 & 255, i[a + 3] = 255 & s, a += 4, i[a] = 255 & t.charCodeAt(0), i[a + 1] = 255 & t.charCodeAt(1), i[a + 2] = 255 & t.charCodeAt(2), i[a + 3] = 255 & t.charCodeAt(3), a += 4, i.set(n, a), a += n.length;
                        var o = e(i, r + 4, a);
                        i[a] = o >> 24 & 255, i[a + 1] = o >> 16 & 255, i[a + 2] = o >> 8 & 255, i[a + 3] = 255 & o
                    }

                    function n(e, t, n) {
                        for (var i = 1, r = 0, a = t; a < n; ++a) i = (i + (255 & e[a])) % 65521, r = (r + i) % 65521;
                        return r << 16 | i
                    }

                    function r(e, r, o) {
                        var c, l, h, u = e.width,
                            d = e.height,
                            f = e.data;
                        switch (r) {
                            case i.ImageKind.GRAYSCALE_1BPP:
                                l = 0, c = 1, h = u + 7 >> 3;
                                break;
                            case i.ImageKind.RGB_24BPP:
                                l = 2, c = 8, h = 3 * u;
                                break;
                            case i.ImageKind.RGBA_32BPP:
                                l = 6, c = 8, h = 4 * u;
                                break;
                            default:
                                throw new Error("invalid format")
                        }
                        var p, g, m = new Uint8Array((1 + h) * d),
                            v = 0,
                            b = 0;
                        for (p = 0; p < d; ++p) m[v++] = 0, m.set(f.subarray(b, b + h), v), b += h, v += h;
                        if (r === i.ImageKind.GRAYSCALE_1BPP)
                            for (v = 0, p = 0; p < d; p++)
                                for (v++, g = 0; g < h; g++) m[v++] ^= 255;
                        var y = new Uint8Array([u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, c, l, 0, 0, 0]),
                            w = m.length,
                            A = Math.ceil(w / 65535),
                            S = new Uint8Array(2 + w + 5 * A + 4),
                            P = 0;
                        S[P++] = 120, S[P++] = 156;
                        for (var _ = 0; w > 65535;) S[P++] = 0, S[P++] = 255, S[P++] = 255, S[P++] = 0, S[P++] = 0, S.set(m.subarray(_, _ + 65535), P), P += 65535, _ += 65535, w -= 65535;
                        S[P++] = 1, S[P++] = 255 & w, S[P++] = w >> 8 & 255, S[P++] = 255 & ~w, S[P++] = (65535 & ~w) >> 8 & 255, S.set(m.subarray(_), P), P += m.length - _;
                        var C = n(m, 0, m.length);
                        S[P++] = C >> 24 & 255, S[P++] = C >> 16 & 255, S[P++] = C >> 8 & 255, S[P++] = 255 & C;
                        var x = a.length + 3 * s + y.length + S.length,
                            L = new Uint8Array(x),
                            T = 0;
                        return L.set(a, T), T += a.length, t("IHDR", y, L, T), T += s + y.length, t("IDATA", S, L, T), T += s + S.length, t("IEND", new Uint8Array(0), L, T), (0, i.createObjectURL)(L, "image/png", o)
                    }
                    for (var a = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = 12, o = new Int32Array(256), c = 0; c < 256; c++) {
                        for (var l = c, h = 0; h < 8; h++) l = 1 & l ? 3988292384 ^ l >> 1 & 2147483647 : l >> 1 & 2147483647;
                        o[c] = l
                    }
                    return function(e, t) {
                        return r(e, void 0 === e.kind ? i.ImageKind.GRAYSCALE_1BPP : e.kind, t)
                    }
                }(),
                o = function() {
                    function e() {
                        this.fontSizeScale = 1, this.fontWeight = a.fontWeight, this.fontSize = 0, this.textMatrix = i.IDENTITY_MATRIX, this.fontMatrix = i.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = a.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = ""
                    }
                    return e.prototype = {
                        clone: function() {
                            return Object.create(this)
                        },
                        setCurrentPoint: function(e, t) {
                            this.x = e, this.y = t
                        }
                    }, e
                }();
            t.SVGGraphics = r = function() {
                function e(e) {
                    for (var t = [], n = [], i = e.length, r = 0; r < i; r++) "save" !== e[r].fn ? "restore" === e[r].fn ? t = n.pop() : t.push(e[r]) : (t.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                    }), n.push(t), t = t[t.length - 1].items);
                    return t
                }

                function t(e) {
                    if (e === (0 | e)) return e.toString();
                    var t = e.toFixed(10),
                        n = t.length - 1;
                    if ("0" !== t[n]) return t;
                    do {
                        n--
                    } while ("0" === t[n]);
                    return t.substr(0, "." === t[n] ? n : n + 1)
                }

                function n(e) {
                    if (0 === e[4] && 0 === e[5]) {
                        if (0 === e[1] && 0 === e[2]) return 1 === e[0] && 1 === e[3] ? "" : "scale(" + t(e[0]) + " " + t(e[3]) + ")";
                        if (e[0] === e[3] && e[1] === -e[2]) {
                            return "rotate(" + t(180 * Math.acos(e[0]) / Math.PI) + ")"
                        }
                    } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]) return "translate(" + t(e[4]) + " " + t(e[5]) + ")";
                    return "matrix(" + t(e[0]) + " " + t(e[1]) + " " + t(e[2]) + " " + t(e[3]) + " " + t(e[4]) + " " + t(e[5]) + ")"
                }

                function r(e, t, n) {
                    this.current = new o, this.transformMatrix = i.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = e, this.objs = t, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = Object.create(null), this.cssStyle = null, this.forceDataSchema = !!n
                }
                var c = "http://www.w3.org/2000/svg",
                    l = "http://www.w3.org/1999/xlink",
                    h = ["butt", "round", "square"],
                    u = ["miter", "round", "bevel"],
                    d = 0,
                    f = 0;
                return r.prototype = {
                    save: function() {
                        this.transformStack.push(this.transformMatrix);
                        var e = this.current;
                        this.extraStack.push(e), this.current = e.clone()
                    },
                    restore: function() {
                        this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.tgrp = null
                    },
                    group: function(e) {
                        this.save(), this.executeOpTree(e), this.restore()
                    },
                    loadDependencies: function(e) {
                        for (var t = e.fnArray, n = t.length, r = e.argsArray, a = this, s = 0; s < n; s++)
                            if (i.OPS.dependency === t[s])
                                for (var o = r[s], c = 0, l = o.length; c < l; c++) {
                                    var h, u = o[c],
                                        d = "g_" === u.substring(0, 2);
                                    h = d ? new Promise(function(e) {
                                        a.commonObjs.get(u, e)
                                    }) : new Promise(function(e) {
                                        a.objs.get(u, e)
                                    }), this.current.dependencies.push(h)
                                }
                        return Promise.all(this.current.dependencies)
                    },
                    transform: function(e, t, n, r, a, s) {
                        var o = [e, t, n, r, a, s];
                        this.transformMatrix = i.Util.transform(this.transformMatrix, o), this.tgrp = null
                    },
                    getSVG: function(e, t) {
                        this.viewport = t;
                        var n = this._initialize(t);
                        return this.loadDependencies(e).then(function() {
                            this.transformMatrix = i.IDENTITY_MATRIX;
                            var t = this.convertOpList(e);
                            return this.executeOpTree(t), n
                        }.bind(this))
                    },
                    convertOpList: function(t) {
                        var n = t.argsArray,
                            r = t.fnArray,
                            a = r.length,
                            s = [],
                            o = [];
                        for (var c in i.OPS) s[i.OPS[c]] = c;
                        for (var l = 0; l < a; l++) {
                            var h = r[l];
                            o.push({
                                fnId: h,
                                fn: s[h],
                                args: n[l]
                            })
                        }
                        return e(o)
                    },
                    executeOpTree: function(e) {
                        for (var t = e.length, n = 0; n < t; n++) {
                            var r = e[n].fn,
                                a = e[n].fnId,
                                s = e[n].args;
                            switch (0 | a) {
                                case i.OPS.beginText:
                                    this.beginText();
                                    break;
                                case i.OPS.setLeading:
                                    this.setLeading(s);
                                    break;
                                case i.OPS.setLeadingMoveText:
                                    this.setLeadingMoveText(s[0], s[1]);
                                    break;
                                case i.OPS.setFont:
                                    this.setFont(s);
                                    break;
                                case i.OPS.showText:
                                case i.OPS.showSpacedText:
                                    this.showText(s[0]);
                                    break;
                                case i.OPS.endText:
                                    this.endText();
                                    break;
                                case i.OPS.moveText:
                                    this.moveText(s[0], s[1]);
                                    break;
                                case i.OPS.setCharSpacing:
                                    this.setCharSpacing(s[0]);
                                    break;
                                case i.OPS.setWordSpacing:
                                    this.setWordSpacing(s[0]);
                                    break;
                                case i.OPS.setHScale:
                                    this.setHScale(s[0]);
                                    break;
                                case i.OPS.setTextMatrix:
                                    this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                                    break;
                                case i.OPS.setLineWidth:
                                    this.setLineWidth(s[0]);
                                    break;
                                case i.OPS.setLineJoin:
                                    this.setLineJoin(s[0]);
                                    break;
                                case i.OPS.setLineCap:
                                    this.setLineCap(s[0]);
                                    break;
                                case i.OPS.setMiterLimit:
                                    this.setMiterLimit(s[0]);
                                    break;
                                case i.OPS.setFillRGBColor:
                                    this.setFillRGBColor(s[0], s[1], s[2]);
                                    break;
                                case i.OPS.setStrokeRGBColor:
                                    this.setStrokeRGBColor(s[0], s[1], s[2]);
                                    break;
                                case i.OPS.setDash:
                                    this.setDash(s[0], s[1]);
                                    break;
                                case i.OPS.setGState:
                                    this.setGState(s[0]);
                                    break;
                                case i.OPS.fill:
                                    this.fill();
                                    break;
                                case i.OPS.eoFill:
                                    this.eoFill();
                                    break;
                                case i.OPS.stroke:
                                    this.stroke();
                                    break;
                                case i.OPS.fillStroke:
                                    this.fillStroke();
                                    break;
                                case i.OPS.eoFillStroke:
                                    this.eoFillStroke();
                                    break;
                                case i.OPS.clip:
                                    this.clip("nonzero");
                                    break;
                                case i.OPS.eoClip:
                                    this.clip("evenodd");
                                    break;
                                case i.OPS.paintSolidColorImageMask:
                                    this.paintSolidColorImageMask();
                                    break;
                                case i.OPS.paintJpegXObject:
                                    this.paintJpegXObject(s[0], s[1], s[2]);
                                    break;
                                case i.OPS.paintImageXObject:
                                    this.paintImageXObject(s[0]);
                                    break;
                                case i.OPS.paintInlineImageXObject:
                                    this.paintInlineImageXObject(s[0]);
                                    break;
                                case i.OPS.paintImageMaskXObject:
                                    this.paintImageMaskXObject(s[0]);
                                    break;
                                case i.OPS.paintFormXObjectBegin:
                                    this.paintFormXObjectBegin(s[0], s[1]);
                                    break;
                                case i.OPS.paintFormXObjectEnd:
                                    this.paintFormXObjectEnd();
                                    break;
                                case i.OPS.closePath:
                                    this.closePath();
                                    break;
                                case i.OPS.closeStroke:
                                    this.closeStroke();
                                    break;
                                case i.OPS.closeFillStroke:
                                    this.closeFillStroke();
                                    break;
                                case i.OPS.nextLine:
                                    this.nextLine();
                                    break;
                                case i.OPS.transform:
                                    this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                                    break;
                                case i.OPS.constructPath:
                                    this.constructPath(s[0], s[1]);
                                    break;
                                case i.OPS.endPath:
                                    this.endPath();
                                    break;
                                case 92:
                                    this.group(e[n].items);
                                    break;
                                default:
                                    (0, i.warn)("Unimplemented operator " + r)
                            }
                        }
                    },
                    setWordSpacing: function(e) {
                        this.current.wordSpacing = e
                    },
                    setCharSpacing: function(e) {
                        this.current.charSpacing = e
                    },
                    nextLine: function() {
                        this.moveText(0, this.current.leading)
                    },
                    setTextMatrix: function(e, n, i, r, a, s) {
                        var o = this.current;
                        this.current.textMatrix = this.current.lineMatrix = [e, n, i, r, a, s], this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, o.xcoords = [], o.tspan = document.createElementNS(c, "svg:tspan"), o.tspan.setAttributeNS(null, "font-family", o.fontFamily), o.tspan.setAttributeNS(null, "font-size", t(o.fontSize) + "px"), o.tspan.setAttributeNS(null, "y", t(-o.y)), o.txtElement = document.createElementNS(c, "svg:text"), o.txtElement.appendChild(o.tspan)
                    },
                    beginText: function() {
                        this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.current.textMatrix = i.IDENTITY_MATRIX, this.current.lineMatrix = i.IDENTITY_MATRIX, this.current.tspan = document.createElementNS(c, "svg:tspan"), this.current.txtElement = document.createElementNS(c, "svg:text"), this.current.txtgrp = document.createElementNS(c, "svg:g"), this.current.xcoords = []
                    },
                    moveText: function(e, n) {
                        var i = this.current;
                        this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += n, i.xcoords = [], i.tspan = document.createElementNS(c, "svg:tspan"), i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", t(i.fontSize) + "px"), i.tspan.setAttributeNS(null, "y", t(-i.y))
                    },
                    showText: function(e) {
                        var r = this.current,
                            s = r.font,
                            o = r.fontSize;
                        if (0 !== o) {
                            var c, l = r.charSpacing,
                                h = r.wordSpacing,
                                u = r.fontDirection,
                                d = r.textHScale * u,
                                f = e.length,
                                p = s.vertical,
                                g = o * r.fontMatrix[0],
                                m = 0;
                            for (c = 0; c < f; ++c) {
                                var v = e[c];
                                if (null !== v)
                                    if ((0, i.isNum)(v)) m += -v * o * .001;
                                    else {
                                        r.xcoords.push(r.x + m * d);
                                        var b = v.width,
                                            y = v.fontChar,
                                            w = b * g + l * u;
                                        m += w, r.tspan.textContent += y
                                    }
                                else m += u * h
                            }
                            p ? r.y -= m * d : r.x += m * d, r.tspan.setAttributeNS(null, "x", r.xcoords.map(t).join(" ")), r.tspan.setAttributeNS(null, "y", t(-r.y)), r.tspan.setAttributeNS(null, "font-family", r.fontFamily), r.tspan.setAttributeNS(null, "font-size", t(r.fontSize) + "px"), r.fontStyle !== a.fontStyle && r.tspan.setAttributeNS(null, "font-style", r.fontStyle), r.fontWeight !== a.fontWeight && r.tspan.setAttributeNS(null, "font-weight", r.fontWeight), r.fillColor !== a.fillColor && r.tspan.setAttributeNS(null, "fill", r.fillColor), r.txtElement.setAttributeNS(null, "transform", n(r.textMatrix) + " scale(1, -1)"), r.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), r.txtElement.appendChild(r.tspan), r.txtgrp.appendChild(r.txtElement), this._ensureTransformGroup().appendChild(r.txtElement)
                        }
                    },
                    setLeadingMoveText: function(e, t) {
                        this.setLeading(-t), this.moveText(e, t)
                    },
                    addFontStyle: function(e) {
                        this.cssStyle || (this.cssStyle = document.createElementNS(c, "svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
                        var t = (0, i.createObjectURL)(e.data, e.mimetype, this.forceDataSchema);
                        this.cssStyle.textContent += '@font-face { font-family: "' + e.loadedName + '"; src: url(' + t + "); }\n"
                    },
                    setFont: function(e) {
                        var n = this.current,
                            r = this.commonObjs.get(e[0]),
                            a = e[1];
                        this.current.font = r, this.embedFonts && r.data && !this.embeddedFonts[r.loadedName] && (this.addFontStyle(r), this.embeddedFonts[r.loadedName] = r), n.fontMatrix = r.fontMatrix ? r.fontMatrix : i.FONT_IDENTITY_MATRIX;
                        var s = r.black ? r.bold ? "bolder" : "bold" : r.bold ? "bold" : "normal",
                            o = r.italic ? "italic" : "normal";
                        a < 0 ? (a = -a, n.fontDirection = -1) : n.fontDirection = 1, n.fontSize = a, n.fontFamily = r.loadedName, n.fontWeight = s, n.fontStyle = o, n.tspan = document.createElementNS(c, "svg:tspan"), n.tspan.setAttributeNS(null, "y", t(-n.y)), n.xcoords = []
                    },
                    endText: function() {},
                    setLineWidth: function(e) {
                        this.current.lineWidth = e
                    },
                    setLineCap: function(e) {
                        this.current.lineCap = h[e]
                    },
                    setLineJoin: function(e) {
                        this.current.lineJoin = u[e]
                    },
                    setMiterLimit: function(e) {
                        this.current.miterLimit = e
                    },
                    setStrokeRGBColor: function(e, t, n) {
                        var r = i.Util.makeCssRgb(e, t, n);
                        this.current.strokeColor = r
                    },
                    setFillRGBColor: function(e, t, n) {
                        var r = i.Util.makeCssRgb(e, t, n);
                        this.current.fillColor = r, this.current.tspan = document.createElementNS(c, "svg:tspan"), this.current.xcoords = []
                    },
                    setDash: function(e, t) {
                        this.current.dashArray = e, this.current.dashPhase = t
                    },
                    constructPath: function(e, n) {
                        var r = this.current,
                            a = r.x,
                            s = r.y;
                        r.path = document.createElementNS(c, "svg:path");
                        for (var o = [], l = e.length, h = 0, u = 0; h < l; h++) switch (0 | e[h]) {
                            case i.OPS.rectangle:
                                a = n[u++], s = n[u++];
                                var d = n[u++],
                                    f = n[u++],
                                    p = a + d,
                                    g = s + f;
                                o.push("M", t(a), t(s), "L", t(p), t(s), "L", t(p), t(g), "L", t(a), t(g), "Z");
                                break;
                            case i.OPS.moveTo:
                                a = n[u++], s = n[u++], o.push("M", t(a), t(s));
                                break;
                            case i.OPS.lineTo:
                                a = n[u++], s = n[u++], o.push("L", t(a), t(s));
                                break;
                            case i.OPS.curveTo:
                                a = n[u + 4], s = n[u + 5], o.push("C", t(n[u]), t(n[u + 1]), t(n[u + 2]), t(n[u + 3]), t(a), t(s)), u += 6;
                                break;
                            case i.OPS.curveTo2:
                                a = n[u + 2], s = n[u + 3], o.push("C", t(a), t(s), t(n[u]), t(n[u + 1]), t(n[u + 2]), t(n[u + 3])), u += 4;
                                break;
                            case i.OPS.curveTo3:
                                a = n[u + 2], s = n[u + 3], o.push("C", t(n[u]), t(n[u + 1]), t(a), t(s), t(a), t(s)), u += 4;
                                break;
                            case i.OPS.closePath:
                                o.push("Z")
                        }
                        r.path.setAttributeNS(null, "d", o.join(" ")), r.path.setAttributeNS(null, "stroke-miterlimit", t(r.miterLimit)), r.path.setAttributeNS(null, "stroke-linecap", r.lineCap), r.path.setAttributeNS(null, "stroke-linejoin", r.lineJoin), r.path.setAttributeNS(null, "stroke-width", t(r.lineWidth) + "px"), r.path.setAttributeNS(null, "stroke-dasharray", r.dashArray.map(t).join(" ")), r.path.setAttributeNS(null, "stroke-dashoffset", t(r.dashPhase) + "px"), r.path.setAttributeNS(null, "fill", "none"), this._ensureTransformGroup().appendChild(r.path), r.element = r.path, r.setCurrentPoint(a, s)
                    },
                    endPath: function() {},
                    clip: function(e) {
                        var t = this.current,
                            i = "clippath" + d;
                        d++;
                        var r = document.createElementNS(c, "svg:clipPath");
                        r.setAttributeNS(null, "id", i), r.setAttributeNS(null, "transform", n(this.transformMatrix));
                        var a = t.element.cloneNode();
                        "evenodd" === e ? a.setAttributeNS(null, "clip-rule", "evenodd") : a.setAttributeNS(null, "clip-rule", "nonzero"), r.appendChild(a), this.defs.appendChild(r), t.activeClipUrl && (t.clipGroup = null, this.extraStack.forEach(function(e) {
                            e.clipGroup = null
                        })), t.activeClipUrl = "url(#" + i + ")", this.tgrp = null
                    },
                    closePath: function() {
                        var e = this.current,
                            t = e.path.getAttributeNS(null, "d");
                        t += "Z", e.path.setAttributeNS(null, "d", t)
                    },
                    setLeading: function(e) {
                        this.current.leading = -e
                    },
                    setTextRise: function(e) {
                        this.current.textRise = e
                    },
                    setHScale: function(e) {
                        this.current.textHScale = e / 100
                    },
                    setGState: function(e) {
                        for (var t = 0, n = e.length; t < n; t++) {
                            var r = e[t],
                                a = r[0],
                                s = r[1];
                            switch (a) {
                                case "LW":
                                    this.setLineWidth(s);
                                    break;
                                case "LC":
                                    this.setLineCap(s);
                                    break;
                                case "LJ":
                                    this.setLineJoin(s);
                                    break;
                                case "ML":
                                    this.setMiterLimit(s);
                                    break;
                                case "D":
                                    this.setDash(s[0], s[1]);
                                    break;
                                case "Font":
                                    this.setFont(s);
                                    break;
                                default:
                                    (0, i.warn)("Unimplemented graphic state " + a)
                            }
                        }
                    },
                    fill: function() {
                        var e = this.current;
                        e.element.setAttributeNS(null, "fill", e.fillColor)
                    },
                    stroke: function() {
                        var e = this.current;
                        e.element.setAttributeNS(null, "stroke", e.strokeColor), e.element.setAttributeNS(null, "fill", "none")
                    },
                    eoFill: function() {
                        var e = this.current;
                        e.element.setAttributeNS(null, "fill", e.fillColor), e.element.setAttributeNS(null, "fill-rule", "evenodd")
                    },
                    fillStroke: function() {
                        this.stroke(), this.fill()
                    },
                    eoFillStroke: function() {
                        this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke()
                    },
                    closeStroke: function() {
                        this.closePath(), this.stroke()
                    },
                    closeFillStroke: function() {
                        this.closePath(), this.fillStroke()
                    },
                    paintSolidColorImageMask: function() {
                        var e = this.current,
                            t = document.createElementNS(c, "svg:rect");
                        t.setAttributeNS(null, "x", "0"), t.setAttributeNS(null, "y", "0"), t.setAttributeNS(null, "width", "1px"), t.setAttributeNS(null, "height", "1px"), t.setAttributeNS(null, "fill", e.fillColor), this._ensureTransformGroup().appendChild(t)
                    },
                    paintJpegXObject: function(e, n, i) {
                        var r = this.objs.get(e),
                            a = document.createElementNS(c, "svg:image");
                        a.setAttributeNS(l, "xlink:href", r.src), a.setAttributeNS(null, "width", r.width + "px"), a.setAttributeNS(null, "height", r.height + "px"), a.setAttributeNS(null, "x", "0"), a.setAttributeNS(null, "y", t(-i)), a.setAttributeNS(null, "transform", "scale(" + t(1 / n) + " " + t(-1 / i) + ")"), this._ensureTransformGroup().appendChild(a)
                    },
                    paintImageXObject: function(e) {
                        var t = this.objs.get(e);
                        if (!t) return void(0, i.warn)("Dependent image isn't ready yet");
                        this.paintInlineImageXObject(t)
                    },
                    paintInlineImageXObject: function(e, n) {
                        var i = e.width,
                            r = e.height,
                            a = s(e, this.forceDataSchema),
                            o = document.createElementNS(c, "svg:rect");
                        o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", "0"), o.setAttributeNS(null, "width", t(i)), o.setAttributeNS(null, "height", t(r)), this.current.element = o, this.clip("nonzero");
                        var h = document.createElementNS(c, "svg:image");
                        h.setAttributeNS(l, "xlink:href", a), h.setAttributeNS(null, "x", "0"), h.setAttributeNS(null, "y", t(-r)), h.setAttributeNS(null, "width", t(i) + "px"), h.setAttributeNS(null, "height", t(r) + "px"), h.setAttributeNS(null, "transform", "scale(" + t(1 / i) + " " + t(-1 / r) + ")"), n ? n.appendChild(h) : this._ensureTransformGroup().appendChild(h)
                    },
                    paintImageMaskXObject: function(e) {
                        var n = this.current,
                            i = e.width,
                            r = e.height,
                            a = n.fillColor;
                        n.maskId = "mask" + f++;
                        var s = document.createElementNS(c, "svg:mask");
                        s.setAttributeNS(null, "id", n.maskId);
                        var o = document.createElementNS(c, "svg:rect");
                        o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", "0"), o.setAttributeNS(null, "width", t(i)), o.setAttributeNS(null, "height", t(r)), o.setAttributeNS(null, "fill", a), o.setAttributeNS(null, "mask", "url(#" + n.maskId + ")"), this.defs.appendChild(s), this._ensureTransformGroup().appendChild(o), this.paintInlineImageXObject(e, s)
                    },
                    paintFormXObjectBegin: function(e, n) {
                        if ((0, i.isArray)(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]), (0, i.isArray)(n) && 4 === n.length) {
                            var r = n[2] - n[0],
                                a = n[3] - n[1],
                                s = document.createElementNS(c, "svg:rect");
                            s.setAttributeNS(null, "x", n[0]), s.setAttributeNS(null, "y", n[1]), s.setAttributeNS(null, "width", t(r)), s.setAttributeNS(null, "height", t(a)), this.current.element = s, this.clip("nonzero"), this.endPath()
                        }
                    },
                    paintFormXObjectEnd: function() {},
                    _initialize: function(e) {
                        var t = document.createElementNS(c, "svg:svg");
                        t.setAttributeNS(null, "version", "1.1"), t.setAttributeNS(null, "width", e.width + "px"), t.setAttributeNS(null, "height", e.height + "px"), t.setAttributeNS(null, "preserveAspectRatio", "none"), t.setAttributeNS(null, "viewBox", "0 0 " + e.width + " " + e.height);
                        var i = document.createElementNS(c, "svg:defs");
                        t.appendChild(i), this.defs = i;
                        var r = document.createElementNS(c, "svg:g");
                        return r.setAttributeNS(null, "transform", n(e.transform)), t.appendChild(r), this.svg = r, t
                    },
                    _ensureClipGroup: function() {
                        if (!this.current.clipGroup) {
                            var e = document.createElementNS(c, "svg:g");
                            e.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.appendChild(e), this.current.clipGroup = e
                        }
                        return this.current.clipGroup
                    },
                    _ensureTransformGroup: function() {
                        return this.tgrp || (this.tgrp = document.createElementNS(c, "svg:g"), this.tgrp.setAttributeNS(null, "transform", n(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)), this.tgrp
                    }
                }, r
            }(), t.SVGGraphics = r
        }, function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.renderTextLayer = void 0;
            var i = n(0),
                r = n(1),
                a = function() {
                    function e(e) {
                        return !u.test(e)
                    }

                    function t(t, n, a) {
                        var s = document.createElement("div"),
                            o = {
                                style: null,
                                angle: 0,
                                canvasWidth: 0,
                                isWhitespace: !1,
                                originalTransform: null,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingRight: 0,
                                paddingTop: 0,
                                scale: 1
                            };
                        if (t._textDivs.push(s), e(n.str)) return o.isWhitespace = !0, void t._textDivProperties.set(s, o);
                        var c = i.Util.transform(t._viewport.transform, n.transform),
                            l = Math.atan2(c[1], c[0]),
                            h = a[n.fontName];
                        h.vertical && (l += Math.PI / 2);
                        var u = Math.sqrt(c[2] * c[2] + c[3] * c[3]),
                            f = u;
                        h.ascent ? f = h.ascent * f : h.descent && (f = (1 + h.descent) * f);
                        var p, g;
                        if (0 === l ? (p = c[4], g = c[5] - f) : (p = c[4] + f * Math.sin(l), g = c[5] - f * Math.cos(l)), d[1] = p, d[3] = g, d[5] = u, d[7] = h.fontFamily, o.style = d.join(""), s.setAttribute("style", o.style), s.textContent = n.str, (0, r.getDefaultSetting)("pdfBug") && (s.dataset.fontName = n.fontName), 0 !== l && (o.angle = l * (180 / Math.PI)), n.str.length > 1 && (h.vertical ? o.canvasWidth = n.height * t._viewport.scale : o.canvasWidth = n.width * t._viewport.scale), t._textDivProperties.set(s, o), t._enhanceTextSelection) {
                            var m = 1,
                                v = 0;
                            0 !== l && (m = Math.cos(l), v = Math.sin(l));
                            var b, y, w = (h.vertical ? n.height : n.width) * t._viewport.scale,
                                A = u;
                            0 !== l ? (b = [m, v, -v, m, p, g], y = i.Util.getAxialAlignedBoundingBox([0, 0, w, A], b)) : y = [p, g, p + w, g + A], t._bounds.push({
                                left: y[0],
                                top: y[1],
                                right: y[2],
                                bottom: y[3],
                                div: s,
                                size: [w, A],
                                m: b
                            })
                        }
                    }

                    function n(e) {
                        if (!e._canceled) {
                            var t = e._container,
                                n = e._textDivs,
                                i = e._capability,
                                a = n.length;
                            if (a > h) return e._renderingDone = !0, void i.resolve();
                            var s = document.createElement("canvas");
                            s.mozOpaque = !0;
                            for (var o, c, l = s.getContext("2d", {
                                    alpha: !1
                                }), u = 0; u < a; u++) {
                                var d = n[u],
                                    f = e._textDivProperties.get(d);
                                if (!f.isWhitespace) {
                                    var p = d.style.fontSize,
                                        g = d.style.fontFamily;
                                    p === o && g === c || (l.font = p + " " + g, o = p, c = g);
                                    var m = l.measureText(d.textContent).width;
                                    t.appendChild(d);
                                    var v = "";
                                    0 !== f.canvasWidth && m > 0 && (f.scale = f.canvasWidth / m, v = "scaleX(" + f.scale + ")"), 0 !== f.angle && (v = "rotate(" + f.angle + "deg) " + v), "" !== v && (f.originalTransform = v, r.CustomStyle.setProp("transform", d, v)), e._textDivProperties.set(d, f)
                                }
                            }
                            e._renderingDone = !0, i.resolve()
                        }
                    }

                    function a(e) {
                        for (var t = e._bounds, n = e._viewport, r = s(n.width, n.height, t), a = 0; a < r.length; a++) {
                            var o = t[a].div,
                                c = e._textDivProperties.get(o);
                            if (0 !== c.angle) {
                                var l = r[a],
                                    h = t[a],
                                    u = h.m,
                                    d = u[0],
                                    f = u[1],
                                    p = [
                                        [0, 0],
                                        [0, h.size[1]],
                                        [h.size[0], 0], h.size
                                    ],
                                    g = new Float64Array(64);
                                p.forEach(function(e, t) {
                                    var n = i.Util.applyTransform(e, u);
                                    g[t + 0] = d && (l.left - n[0]) / d, g[t + 4] = f && (l.top - n[1]) / f, g[t + 8] = d && (l.right - n[0]) / d, g[t + 12] = f && (l.bottom - n[1]) / f, g[t + 16] = f && (l.left - n[0]) / -f, g[t + 20] = d && (l.top - n[1]) / d, g[t + 24] = f && (l.right - n[0]) / -f, g[t + 28] = d && (l.bottom - n[1]) / d, g[t + 32] = d && (l.left - n[0]) / -d, g[t + 36] = f && (l.top - n[1]) / -f, g[t + 40] = d && (l.right - n[0]) / -d, g[t + 44] = f && (l.bottom - n[1]) / -f, g[t + 48] = f && (l.left - n[0]) / f, g[t + 52] = d && (l.top - n[1]) / -d, g[t + 56] = f && (l.right - n[0]) / f, g[t + 60] = d && (l.bottom - n[1]) / -d
                                });
                                var m = function(e, t, n) {
                                        for (var i = 0, r = 0; r < n; r++) {
                                            var a = e[t++];
                                            a > 0 && (i = i ? Math.min(a, i) : a)
                                        }
                                        return i
                                    },
                                    v = 1 + Math.min(Math.abs(d), Math.abs(f));
                                c.paddingLeft = m(g, 32, 16) / v, c.paddingTop = m(g, 48, 16) / v, c.paddingRight = m(g, 0, 16) / v, c.paddingBottom = m(g, 16, 16) / v, e._textDivProperties.set(o, c)
                            } else c.paddingLeft = t[a].left - r[a].left, c.paddingTop = t[a].top - r[a].top, c.paddingRight = r[a].right - t[a].right, c.paddingBottom = r[a].bottom - t[a].bottom, e._textDivProperties.set(o, c)
                        }
                    }

                    function s(e, t, n) {
                        var i = n.map(function(e, t) {
                            return {
                                x1: e.left,
                                y1: e.top,
                                x2: e.right,
                                y2: e.bottom,
                                index: t,
                                x1New: void 0,
                                x2New: void 0
                            }
                        });
                        o(e, i);
                        var r = new Array(n.length);
                        return i.forEach(function(e) {
                            var t = e.index;
                            r[t] = {
                                left: e.x1New,
                                top: 0,
                                right: e.x2New,
                                bottom: 0
                            }
                        }), n.map(function(t, n) {
                            var a = r[n],
                                s = i[n];
                            s.x1 = t.top, s.y1 = e - a.right, s.x2 = t.bottom, s.y2 = e - a.left, s.index = n, s.x1New = void 0, s.x2New = void 0
                        }), o(t, i), i.forEach(function(e) {
                            var t = e.index;
                            r[t].top = e.x1New, r[t].bottom = e.x2New
                        }), r
                    }

                    function o(e, t) {
                        t.sort(function(e, t) {
                            return e.x1 - t.x1 || e.index - t.index
                        });
                        var n = {
                                x1: -1 / 0,
                                y1: -1 / 0,
                                x2: 0,
                                y2: 1 / 0,
                                index: -1,
                                x1New: 0,
                                x2New: 0
                            },
                            i = [{
                                start: -1 / 0,
                                end: 1 / 0,
                                boundary: n
                            }];
                        t.forEach(function(e) {
                            for (var t = 0; t < i.length && i[t].end <= e.y1;) t++;
                            for (var n = i.length - 1; n >= 0 && i[n].start >= e.y2;) n--;
                            var r, a, s, o, c = -1 / 0;
                            for (s = t; s <= n; s++) {
                                r = i[s], a = r.boundary;
                                var l;
                                l = a.x2 > e.x1 ? a.index > e.index ? a.x1New : e.x1 : void 0 === a.x2New ? (a.x2 + e.x1) / 2 : a.x2New, l > c && (c = l)
                            }
                            for (e.x1New = c, s = t; s <= n; s++) r = i[s], a = r.boundary, void 0 === a.x2New ? a.x2 > e.x1 ? a.index > e.index && (a.x2New = a.x2) : a.x2New = c : a.x2New > c && (a.x2New = Math.max(c, a.x2));
                            var h = [],
                                u = null;
                            for (s = t; s <= n; s++) {
                                r = i[s], a = r.boundary;
                                var d = a.x2 > e.x2 ? a : e;
                                u === d ? h[h.length - 1].end = r.end : (h.push({
                                    start: r.start,
                                    end: r.end,
                                    boundary: d
                                }), u = d)
                            }
                            for (i[t].start < e.y1 && (h[0].start = e.y1, h.unshift({
                                    start: i[t].start,
                                    end: e.y1,
                                    boundary: i[t].boundary
                                })), e.y2 < i[n].end && (h[h.length - 1].end = e.y2, h.push({
                                    start: e.y2,
                                    end: i[n].end,
                                    boundary: i[n].boundary
                                })), s = t; s <= n; s++)
                                if (r = i[s], a = r.boundary, void 0 === a.x2New) {
                                    var f = !1;
                                    for (o = t - 1; !f && o >= 0 && i[o].start >= a.y1; o--) f = i[o].boundary === a;
                                    for (o = n + 1; !f && o < i.length && i[o].end <= a.y2; o++) f = i[o].boundary === a;
                                    for (o = 0; !f && o < h.length; o++) f = h[o].boundary === a;
                                    f || (a.x2New = c)
                                } Array.prototype.splice.apply(i, [t, n - t + 1].concat(h))
                        }), i.forEach(function(t) {
                            var n = t.boundary;
                            void 0 === n.x2New && (n.x2New = Math.max(e, n.x2))
                        })
                    }

                    function c(e, t, n, r, a) {
                        this._textContent = e, this._container = t, this._viewport = n, this._textDivs = r || [], this._textDivProperties = new WeakMap, this._renderingDone = !1, this._canceled = !1, this._capability = (0, i.createPromiseCapability)(), this._renderTimer = null, this._bounds = [], this._enhanceTextSelection = !!a
                    }

                    function l(e) {
                        var t = new c(e.textContent, e.container, e.viewport, e.textDivs, e.enhanceTextSelection);
                        return t._render(e.timeout), t
                    }
                    var h = 1e5,
                        u = /\S/,
                        d = ["left: ", 0, "px; top: ", 0, "px; font-size: ", 0, "px; font-family: ", "", ";"];
                    return c.prototype = {
                        get promise() {
                            return this._capability.promise
                        },
                        cancel: function() {
                            this._canceled = !0, null !== this._renderTimer && (clearTimeout(this._renderTimer), this._renderTimer = null), this._capability.reject("canceled")
                        },
                        _render: function(e) {
                            for (var i = this._textContent.items, r = this._textContent.styles, a = 0, s = i.length; a < s; a++) t(this, i[a], r);
                            if (e) {
                                var o = this;
                                this._renderTimer = setTimeout(function() {
                                    n(o), o._renderTimer = null
                                }, e)
                            } else n(this)
                        },
                        expandTextDivs: function(e) {
                            if (this._enhanceTextSelection && this._renderingDone) {
                                null !== this._bounds && (a(this), this._bounds = null);
                                for (var t = 0, n = this._textDivs.length; t < n; t++) {
                                    var i = this._textDivs[t],
                                        s = this._textDivProperties.get(i);
                                    if (!s.isWhitespace)
                                        if (e) {
                                            var o = "",
                                                c = "";
                                            1 !== s.scale && (o = "scaleX(" + s.scale + ")"), 0 !== s.angle && (o = "rotate(" + s.angle + "deg) " + o),
                                                0 !== s.paddingLeft && (c += " padding-left: " + s.paddingLeft / s.scale + "px;", o += " translateX(" + -s.paddingLeft / s.scale + "px)"), 0 !== s.paddingTop && (c += " padding-top: " + s.paddingTop + "px;", o += " translateY(" + -s.paddingTop + "px)"), 0 !== s.paddingRight && (c += " padding-right: " + s.paddingRight / s.scale + "px;"), 0 !== s.paddingBottom && (c += " padding-bottom: " + s.paddingBottom + "px;"), "" !== c && i.setAttribute("style", s.style + c), "" !== o && r.CustomStyle.setProp("transform", i, o)
                                        } else i.style.padding = 0, r.CustomStyle.setProp("transform", i, s.originalTransform || "")
                                }
                            }
                        }
                    }, l
                }();
            t.renderTextLayer = a
        }, function(e, t, n) {
            var i, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
            i = function() {
                return this
            }();
            try {
                i = i || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" === ("undefined" == typeof window ? "undefined" : r(window)) && (i = window)
            }
            e.exports = i
        }, function(e, t, n) {
            function i(e) {
                return e.replace(/>\\376\\377([^<]+)/g, function(e, t) {
                    for (var n = t.replace(/\\([0-3])([0-7])([0-7])/g, function(e, t, n, i) {
                            return String.fromCharCode(64 * t + 8 * n + 1 * i)
                        }), i = "", r = 0; r < n.length; r += 2) {
                        var a = 256 * n.charCodeAt(r) + n.charCodeAt(r + 1);
                        i += a >= 32 && a < 127 && 60 !== a && 62 !== a && 38 !== a ? String.fromCharCode(a) : "&#x" + (65536 + a).toString(16).substring(1) + ";"
                    }
                    return ">" + i
                })
            }

            function r(e) {
                if ("string" == typeof e) {
                    e = i(e);
                    e = (new DOMParser).parseFromString(e, "application/xml")
                } else e instanceof Document || (0, a.error)("Metadata: Invalid metadata object");
                this.metaDocument = e, this.metadata = Object.create(null), this.parse()
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Metadata = void 0;
            var a = n(0);
            r.prototype = {
                parse: function() {
                    var e = this.metaDocument,
                        t = e.documentElement;
                    if ("rdf:rdf" !== t.nodeName.toLowerCase())
                        for (t = t.firstChild; t && "rdf:rdf" !== t.nodeName.toLowerCase();) t = t.nextSibling;
                    var n = t ? t.nodeName.toLowerCase() : null;
                    if (t && "rdf:rdf" === n && t.hasChildNodes()) {
                        var i, r, a, s, o, c, l, h = t.childNodes;
                        for (s = 0, c = h.length; s < c; s++)
                            if (i = h[s], "rdf:description" === i.nodeName.toLowerCase())
                                for (o = 0, l = i.childNodes.length; o < l; o++) "#text" !== i.childNodes[o].nodeName.toLowerCase() && (r = i.childNodes[o], a = r.nodeName.toLowerCase(), this.metadata[a] = r.textContent.trim())
                    }
                },
                get: function(e) {
                    return this.metadata[e] || null
                },
                has: function(e) {
                    return void 0 !== this.metadata[e]
                }
            }, t.Metadata = r
        }, function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WebGLUtils = void 0;
            var i = n(1),
                r = n(0),
                a = function() {
                    function e(e, t, n) {
                        var i = e.createShader(n);
                        if (e.shaderSource(i, t), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
                            var r = e.getShaderInfoLog(i);
                            throw new Error("Error during shader compilation: " + r)
                        }
                        return i
                    }

                    function t(t, n) {
                        return e(t, n, t.VERTEX_SHADER)
                    }

                    function n(t, n) {
                        return e(t, n, t.FRAGMENT_SHADER)
                    }

                    function a(e, t) {
                        for (var n = e.createProgram(), i = 0, r = t.length; i < r; ++i) e.attachShader(n, t[i]);
                        if (e.linkProgram(n), !e.getProgramParameter(n, e.LINK_STATUS)) {
                            var a = e.getProgramInfoLog(n);
                            throw new Error("Error during program linking: " + a)
                        }
                        return n
                    }

                    function s(e, t, n) {
                        e.activeTexture(n);
                        var i = e.createTexture();
                        return e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), i
                    }

                    function o() {
                        f || (p = document.createElement("canvas"), f = p.getContext("webgl", {
                            premultipliedalpha: !1
                        }))
                    }

                    function c() {
                        var e, i;
                        o(), e = p, p = null, i = f, f = null;
                        var r = t(i, g),
                            s = n(i, m),
                            c = a(i, [r, s]);
                        i.useProgram(c);
                        var l = {};
                        l.gl = i, l.canvas = e, l.resolutionLocation = i.getUniformLocation(c, "u_resolution"), l.positionLocation = i.getAttribLocation(c, "a_position"), l.backdropLocation = i.getUniformLocation(c, "u_backdrop"), l.subtypeLocation = i.getUniformLocation(c, "u_subtype");
                        var h = i.getAttribLocation(c, "a_texCoord"),
                            u = i.getUniformLocation(c, "u_image"),
                            d = i.getUniformLocation(c, "u_mask"),
                            b = i.createBuffer();
                        i.bindBuffer(i.ARRAY_BUFFER, b), i.bufferData(i.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), i.STATIC_DRAW), i.enableVertexAttribArray(h), i.vertexAttribPointer(h, 2, i.FLOAT, !1, 0, 0), i.uniform1i(u, 0), i.uniform1i(d, 1), v = l
                    }

                    function l(e, t, n) {
                        var i = e.width,
                            r = e.height;
                        v || c();
                        var a = v,
                            o = a.canvas,
                            l = a.gl;
                        o.width = i, o.height = r, l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight), l.uniform2f(a.resolutionLocation, i, r), n.backdrop ? l.uniform4f(a.resolutionLocation, n.backdrop[0], n.backdrop[1], n.backdrop[2], 1) : l.uniform4f(a.resolutionLocation, 0, 0, 0, 0), l.uniform1i(a.subtypeLocation, "Luminosity" === n.subtype ? 1 : 0);
                        var h = s(l, e, l.TEXTURE0),
                            u = s(l, t, l.TEXTURE1),
                            d = l.createBuffer();
                        return l.bindBuffer(l.ARRAY_BUFFER, d), l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, i, 0, 0, r, 0, r, i, 0, i, r]), l.STATIC_DRAW), l.enableVertexAttribArray(a.positionLocation), l.vertexAttribPointer(a.positionLocation, 2, l.FLOAT, !1, 0, 0), l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA), l.clear(l.COLOR_BUFFER_BIT), l.drawArrays(l.TRIANGLES, 0, 6), l.flush(), l.deleteTexture(h), l.deleteTexture(u), l.deleteBuffer(d), o
                    }

                    function h() {
                        var e, i;
                        o(), e = p, p = null, i = f, f = null;
                        var r = t(i, b),
                            s = n(i, y),
                            c = a(i, [r, s]);
                        i.useProgram(c);
                        var l = {};
                        l.gl = i, l.canvas = e, l.resolutionLocation = i.getUniformLocation(c, "u_resolution"), l.scaleLocation = i.getUniformLocation(c, "u_scale"), l.offsetLocation = i.getUniformLocation(c, "u_offset"), l.positionLocation = i.getAttribLocation(c, "a_position"), l.colorLocation = i.getAttribLocation(c, "a_color"), w = l
                    }

                    function u(e, t, n, i, r) {
                        w || h();
                        var a = w,
                            s = a.canvas,
                            o = a.gl;
                        s.width = e, s.height = t, o.viewport(0, 0, o.drawingBufferWidth, o.drawingBufferHeight), o.uniform2f(a.resolutionLocation, e, t);
                        var c, l, u, d = 0;
                        for (c = 0, l = i.length; c < l; c++) switch (i[c].type) {
                            case "lattice":
                                u = i[c].coords.length / i[c].verticesPerRow | 0, d += (u - 1) * (i[c].verticesPerRow - 1) * 6;
                                break;
                            case "triangles":
                                d += i[c].coords.length
                        }
                        var f = new Float32Array(2 * d),
                            p = new Uint8Array(3 * d),
                            g = r.coords,
                            m = r.colors,
                            v = 0,
                            b = 0;
                        for (c = 0, l = i.length; c < l; c++) {
                            var y = i[c],
                                A = y.coords,
                                S = y.colors;
                            switch (y.type) {
                                case "lattice":
                                    var P = y.verticesPerRow;
                                    u = A.length / P | 0;
                                    for (var _ = 1; _ < u; _++)
                                        for (var C = _ * P + 1, x = 1; x < P; x++, C++) f[v] = g[A[C - P - 1]], f[v + 1] = g[A[C - P - 1] + 1], f[v + 2] = g[A[C - P]], f[v + 3] = g[A[C - P] + 1], f[v + 4] = g[A[C - 1]], f[v + 5] = g[A[C - 1] + 1], p[b] = m[S[C - P - 1]], p[b + 1] = m[S[C - P - 1] + 1], p[b + 2] = m[S[C - P - 1] + 2], p[b + 3] = m[S[C - P]], p[b + 4] = m[S[C - P] + 1], p[b + 5] = m[S[C - P] + 2], p[b + 6] = m[S[C - 1]], p[b + 7] = m[S[C - 1] + 1], p[b + 8] = m[S[C - 1] + 2], f[v + 6] = f[v + 2], f[v + 7] = f[v + 3], f[v + 8] = f[v + 4], f[v + 9] = f[v + 5], f[v + 10] = g[A[C]], f[v + 11] = g[A[C] + 1], p[b + 9] = p[b + 3], p[b + 10] = p[b + 4], p[b + 11] = p[b + 5], p[b + 12] = p[b + 6], p[b + 13] = p[b + 7], p[b + 14] = p[b + 8], p[b + 15] = m[S[C]], p[b + 16] = m[S[C] + 1], p[b + 17] = m[S[C] + 2], v += 12, b += 18;
                                    break;
                                case "triangles":
                                    for (var L = 0, T = A.length; L < T; L++) f[v] = g[A[L]], f[v + 1] = g[A[L] + 1], p[b] = m[S[L]], p[b + 1] = m[S[L] + 1], p[b + 2] = m[S[L] + 2], v += 2, b += 3
                            }
                        }
                        n ? o.clearColor(n[0] / 255, n[1] / 255, n[2] / 255, 1) : o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT);
                        var k = o.createBuffer();
                        o.bindBuffer(o.ARRAY_BUFFER, k), o.bufferData(o.ARRAY_BUFFER, f, o.STATIC_DRAW), o.enableVertexAttribArray(a.positionLocation), o.vertexAttribPointer(a.positionLocation, 2, o.FLOAT, !1, 0, 0);
                        var E = o.createBuffer();
                        return o.bindBuffer(o.ARRAY_BUFFER, E), o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW), o.enableVertexAttribArray(a.colorLocation), o.vertexAttribPointer(a.colorLocation, 3, o.UNSIGNED_BYTE, !1, 0, 0), o.uniform2f(a.scaleLocation, r.scaleX, r.scaleY), o.uniform2f(a.offsetLocation, r.offsetX, r.offsetY), o.drawArrays(o.TRIANGLES, 0, d), o.flush(), o.deleteBuffer(k), o.deleteBuffer(E), s
                    }

                    function d() {
                        v && v.canvas && (v.canvas.width = 0, v.canvas.height = 0), w && w.canvas && (w.canvas.width = 0, w.canvas.height = 0), v = null, w = null
                    }
                    var f, p, g = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
                        m = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
                        v = null,
                        b = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
                        y = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
                        w = null;
                    return {
                        get isEnabled() {
                            if ((0, i.getDefaultSetting)("disableWebGL")) return !1;
                            var e = !1;
                            try {
                                o(), e = !!f
                            } catch (e) {}
                            return (0, r.shadow)(this, "isEnabled", e)
                        },
                        composeSMask: l,
                        drawFigures: u,
                        clear: d
                    }
                }();
            t.WebGLUtils = a
        }, function(e, t, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PDFJS = t.isWorker = t.globalScope = void 0;
            var i = n(3),
                r = n(1),
                a = n(0),
                s = n(2),
                o = n(7),
                c = n(5),
                l = n(4),
                h = "undefined" == typeof window;
            a.globalScope.PDFJS || (a.globalScope.PDFJS = {});
            var u = a.globalScope.PDFJS;
            u.version = "1.8.246", u.build = "0e8f020", u.pdfBug = !1, void 0 !== u.verbosity && (0, a.setVerbosityLevel)(u.verbosity), delete u.verbosity, Object.defineProperty(u, "verbosity", {
                get: function() {
                    return (0, a.getVerbosityLevel)()
                },
                set: function(e) {
                    (0, a.setVerbosityLevel)(e)
                },
                enumerable: !0,
                configurable: !0
            }), u.VERBOSITY_LEVELS = a.VERBOSITY_LEVELS, u.OPS = a.OPS, u.UNSUPPORTED_FEATURES = a.UNSUPPORTED_FEATURES, u.isValidUrl = r.isValidUrl, u.shadow = a.shadow, u.createBlob = a.createBlob, u.createObjectURL = function(e, t) {
                return (0, a.createObjectURL)(e, t, u.disableCreateObjectURL)
            }, Object.defineProperty(u, "isLittleEndian", {
                configurable: !0,
                get: function() {
                    return (0, a.shadow)(u, "isLittleEndian", (0, a.isLittleEndian)())
                }
            }), u.removeNullCharacters = a.removeNullCharacters, u.PasswordResponses = a.PasswordResponses, u.PasswordException = a.PasswordException, u.UnknownErrorException = a.UnknownErrorException, u.InvalidPDFException = a.InvalidPDFException, u.MissingPDFException = a.MissingPDFException, u.UnexpectedResponseException = a.UnexpectedResponseException, u.Util = a.Util, u.PageViewport = a.PageViewport, u.createPromiseCapability = a.createPromiseCapability, u.maxImageSize = void 0 === u.maxImageSize ? -1 : u.maxImageSize, u.cMapUrl = void 0 === u.cMapUrl ? null : u.cMapUrl, u.cMapPacked = void 0 !== u.cMapPacked && u.cMapPacked, u.disableFontFace = void 0 !== u.disableFontFace && u.disableFontFace, u.imageResourcesPath = void 0 === u.imageResourcesPath ? "" : u.imageResourcesPath, u.disableWorker = void 0 !== u.disableWorker && u.disableWorker, u.workerSrc = void 0 === u.workerSrc ? null : u.workerSrc, u.workerPort = void 0 === u.workerPort ? null : u.workerPort, u.disableRange = void 0 !== u.disableRange && u.disableRange, u.disableStream = void 0 !== u.disableStream && u.disableStream, u.disableAutoFetch = void 0 !== u.disableAutoFetch && u.disableAutoFetch, u.pdfBug = void 0 !== u.pdfBug && u.pdfBug, u.postMessageTransfers = void 0 === u.postMessageTransfers || u.postMessageTransfers, u.disableCreateObjectURL = void 0 !== u.disableCreateObjectURL && u.disableCreateObjectURL, u.disableWebGL = void 0 === u.disableWebGL || u.disableWebGL, u.externalLinkTarget = void 0 === u.externalLinkTarget ? r.LinkTarget.NONE : u.externalLinkTarget, u.externalLinkRel = void 0 === u.externalLinkRel ? r.DEFAULT_LINK_REL : u.externalLinkRel, u.isEvalSupported = void 0 === u.isEvalSupported || u.isEvalSupported, u.pdfjsNext = void 0 !== u.pdfjsNext && u.pdfjsNext;
            var d = u.openExternalLinksInNewWindow;
            delete u.openExternalLinksInNewWindow, Object.defineProperty(u, "openExternalLinksInNewWindow", {
                get: function() {
                    return u.externalLinkTarget === r.LinkTarget.BLANK
                },
                set: function(e) {
                    if (e && (0, a.deprecated)('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'), u.externalLinkTarget !== r.LinkTarget.NONE) return void(0, a.warn)("PDFJS.externalLinkTarget is already initialized");
                    u.externalLinkTarget = e ? r.LinkTarget.BLANK : r.LinkTarget.NONE
                },
                enumerable: !0,
                configurable: !0
            }), d && (u.openExternalLinksInNewWindow = d), u.getDocument = i.getDocument, u.PDFDataRangeTransport = i.PDFDataRangeTransport, u.PDFWorker = i.PDFWorker, u.hasCanvasTypedArrays = !0, u.CustomStyle = r.CustomStyle, u.LinkTarget = r.LinkTarget, u.addLinkAttributes = r.addLinkAttributes, u.getFilenameFromUrl = r.getFilenameFromUrl, u.isExternalLinkTargetSet = r.isExternalLinkTargetSet, u.AnnotationLayer = s.AnnotationLayer, u.renderTextLayer = c.renderTextLayer, u.Metadata = o.Metadata, u.SVGGraphics = l.SVGGraphics, u.UnsupportedManager = i._UnsupportedManager, t.globalScope = a.globalScope, t.isWorker = h, t.PDFJS = u
        }, function(e, t, n) {
            function i(e) {
                e.mozCurrentTransform || (e._originalSave = e.save, e._originalRestore = e.restore, e._originalRotate = e.rotate, e._originalScale = e.scale, e._originalTranslate = e.translate, e._originalTransform = e.transform, e._originalSetTransform = e.setTransform, e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0], e._transformStack = [], Object.defineProperty(e, "mozCurrentTransform", {
                    get: function() {
                        return this._transformMatrix
                    }
                }), Object.defineProperty(e, "mozCurrentTransformInverse", {
                    get: function() {
                        var e = this._transformMatrix,
                            t = e[0],
                            n = e[1],
                            i = e[2],
                            r = e[3],
                            a = e[4],
                            s = e[5],
                            o = t * r - n * i,
                            c = n * i - t * r;
                        return [r / o, n / c, i / c, t / o, (r * a - i * s) / c, (n * a - t * s) / o]
                    }
                }), e.save = function() {
                    var e = this._transformMatrix;
                    this._transformStack.push(e), this._transformMatrix = e.slice(0, 6), this._originalSave()
                }, e.restore = function() {
                    var e = this._transformStack.pop();
                    e && (this._transformMatrix = e, this._originalRestore())
                }, e.translate = function(e, t) {
                    var n = this._transformMatrix;
                    n[4] = n[0] * e + n[2] * t + n[4], n[5] = n[1] * e + n[3] * t + n[5], this._originalTranslate(e, t)
                }, e.scale = function(e, t) {
                    var n = this._transformMatrix;
                    n[0] = n[0] * e, n[1] = n[1] * e, n[2] = n[2] * t, n[3] = n[3] * t, this._originalScale(e, t)
                }, e.transform = function(t, n, i, r, a, s) {
                    var o = this._transformMatrix;
                    this._transformMatrix = [o[0] * t + o[2] * n, o[1] * t + o[3] * n, o[0] * i + o[2] * r, o[1] * i + o[3] * r, o[0] * a + o[2] * s + o[4], o[1] * a + o[3] * s + o[5]], e._originalTransform(t, n, i, r, a, s)
                }, e.setTransform = function(t, n, i, r, a, s) {
                    this._transformMatrix = [t, n, i, r, a, s], e._originalSetTransform(t, n, i, r, a, s)
                }, e.rotate = function(e) {
                    var t = Math.cos(e),
                        n = Math.sin(e),
                        i = this._transformMatrix;
                    this._transformMatrix = [i[0] * t + i[2] * n, i[1] * t + i[3] * n, i[0] * -n + i[2] * t, i[1] * -n + i[3] * t, i[4], i[5]], this._originalRotate(e)
                })
            }

            function r(e) {
                var t, n, i, r, a = e.width,
                    s = e.height,
                    o = a + 1,
                    c = new Uint8Array(o * (s + 1)),
                    l = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
                    h = a + 7 & -8,
                    u = e.data,
                    d = new Uint8Array(h * s),
                    f = 0;
                for (t = 0, r = u.length; t < r; t++)
                    for (var p = 128, g = u[t]; p > 0;) d[f++] = g & p ? 0 : 255, p >>= 1;
                var m = 0;
                for (f = 0, 0 !== d[f] && (c[0] = 1, ++m), n = 1; n < a; n++) d[f] !== d[f + 1] && (c[n] = d[f] ? 2 : 1, ++m), f++;
                for (0 !== d[f] && (c[n] = 2, ++m), t = 1; t < s; t++) {
                    f = t * h, i = t * o, d[f - h] !== d[f] && (c[i] = d[f] ? 1 : 8, ++m);
                    var v = (d[f] ? 4 : 0) + (d[f - h] ? 8 : 0);
                    for (n = 1; n < a; n++) v = (v >> 2) + (d[f + 1] ? 4 : 0) + (d[f - h + 1] ? 8 : 0), l[v] && (c[i + n] = l[v], ++m), f++;
                    if (d[f - h] !== d[f] && (c[i + n] = d[f] ? 2 : 4, ++m), m > 1e3) return null
                }
                for (f = h * (s - 1), i = t * o, 0 !== d[f] && (c[i] = 8, ++m), n = 1; n < a; n++) d[f] !== d[f + 1] && (c[i + n] = d[f] ? 4 : 8, ++m), f++;
                if (0 !== d[f] && (c[i + n] = 4, ++m), m > 1e3) return null;
                var b = new Int32Array([0, o, -1, 0, -o, 0, 0, 0, 1]),
                    y = [];
                for (t = 0; m && t <= s; t++) {
                    for (var w = t * o, A = w + a; w < A && !c[w];) w++;
                    if (w !== A) {
                        var S, P = [w % o, t],
                            _ = c[w],
                            C = w;
                        do {
                            var x = b[_];
                            do {
                                w += x
                            } while (!c[w]);
                            S = c[w], 5 !== S && 10 !== S ? (_ = S, c[w] = 0) : (_ = S & 51 * _ >> 4, c[w] &= _ >> 2 | _ << 2), P.push(w % o), P.push(w / o | 0), --m
                        } while (C !== w);
                        y.push(P), --t
                    }
                }
                return function(e) {
                    e.save(), e.scale(1 / a, -1 / s), e.translate(0, -s), e.beginPath();
                    for (var t = 0, n = y.length; t < n; t++) {
                        var i = y[t];
                        e.moveTo(i[0], i[1]);
                        for (var r = 2, o = i.length; r < o; r += 2) e.lineTo(i[r], i[r + 1])
                    }
                    e.fill(), e.beginPath(), e.restore()
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CanvasGraphics = void 0;
            var a = n(0),
                s = n(12),
                o = n(8),
                c = 16,
                l = {
                    get value() {
                        return (0, a.shadow)(l, "value", (0, a.isLittleEndian)())
                    }
                },
                h = function() {
                    function e(e) {
                        this.canvasFactory = e, this.cache = Object.create(null)
                    }
                    return e.prototype = {
                        getCanvas: function(e, t, n, r) {
                            var a;
                            return void 0 !== this.cache[e] ? (a = this.cache[e], this.canvasFactory.reset(a, t, n), a.context.setTransform(1, 0, 0, 1, 0, 0)) : (a = this.canvasFactory.create(t, n), this.cache[e] = a), r && i(a.context), a
                        },
                        clear: function() {
                            for (var e in this.cache) {
                                var t = this.cache[e];
                                this.canvasFactory.destroy(t), delete this.cache[e]
                            }
                        }
                    }, e
                }(),
                u = function() {
                    function e(e) {
                        this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = a.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = a.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = a.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.resumeSMaskCtx = null, this.old = e
                    }
                    return e.prototype = {
                        clone: function() {
                            return Object.create(this)
                        },
                        setCurrentPoint: function(e, t) {
                            this.x = e, this.y = t
                        }
                    }, e
                }(),
                d = function() {
                    function e(e, t, n, r, a) {
                        this.ctx = e, this.current = new u, this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = t, this.objs = n, this.canvasFactory = r, this.imageLayer = a, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.cachedCanvases = new h(this.canvasFactory), e && i(e), this.cachedGetSinglePixelWidth = null
                    }

                    function t(e, t) {
                        if ("undefined" != typeof ImageData && t instanceof ImageData) return void e.putImageData(t, 0, 0);
                        var n, i, r, s, o, h = t.height,
                            u = t.width,
                            d = h % c,
                            f = (h - d) / c,
                            p = 0 === d ? f : f + 1,
                            g = e.createImageData(u, c),
                            m = 0,
                            v = t.data,
                            b = g.data;
                        if (t.kind === a.ImageKind.GRAYSCALE_1BPP) {
                            var y = v.byteLength,
                                w = new Uint32Array(b.buffer, 0, b.byteLength >> 2),
                                A = w.length,
                                S = u + 7 >> 3,
                                P = 4294967295,
                                _ = l.value ? 4278190080 : 255;
                            for (i = 0; i < p; i++) {
                                for (s = i < f ? c : d, n = 0, r = 0; r < s; r++) {
                                    for (var C = y - m, x = 0, L = C > S ? u : 8 * C - 7, T = -8 & L, k = 0, E = 0; x < T; x += 8) E = v[m++], w[n++] = 128 & E ? P : _, w[n++] = 64 & E ? P : _, w[n++] = 32 & E ? P : _, w[n++] = 16 & E ? P : _, w[n++] = 8 & E ? P : _, w[n++] = 4 & E ? P : _, w[n++] = 2 & E ? P : _, w[n++] = 1 & E ? P : _;
                                    for (; x < L; x++) 0 === k && (E = v[m++], k = 128), w[n++] = E & k ? P : _, k >>= 1
                                }
                                for (; n < A;) w[n++] = 0;
                                e.putImageData(g, 0, i * c)
                            }
                        } else if (t.kind === a.ImageKind.RGBA_32BPP) {
                            for (r = 0, o = u * c * 4, i = 0; i < f; i++) b.set(v.subarray(m, m + o)), m += o, e.putImageData(g, 0, r), r += c;
                            i < p && (o = u * d * 4, b.set(v.subarray(m, m + o)), e.putImageData(g, 0, r))
                        } else if (t.kind === a.ImageKind.RGB_24BPP)
                            for (s = c, o = u * s, i = 0; i < p; i++) {
                                for (i >= f && (s = d, o = u * s), n = 0, r = o; r--;) b[n++] = v[m++], b[n++] = v[m++], b[n++] = v[m++], b[n++] = 255;
                                e.putImageData(g, 0, i * c)
                            } else(0, a.error)("bad image kind: " + t.kind)
                    }

                    function n(e, t) {
                        for (var n = t.height, i = t.width, r = n % c, a = (n - r) / c, s = 0 === r ? a : a + 1, o = e.createImageData(i, c), l = 0, h = t.data, u = o.data, d = 0; d < s; d++) {
                            for (var f = d < a ? c : r, p = 3, g = 0; g < f; g++)
                                for (var m = 0, v = 0; v < i; v++) {
                                    if (!m) {
                                        var b = h[l++];
                                        m = 128
                                    }
                                    u[p] = b & m ? 0 : 255, p += 4, m >>= 1
                                }
                            e.putImageData(o, 0, d * c)
                        }
                    }

                    function d(e, t) {
                        for (var n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            void 0 !== e[a] && (t[a] = e[a])
                        }
                        void 0 !== e.setLineDash && (t.setLineDash(e.getLineDash()), t.lineDashOffset = e.lineDashOffset)
                    }

                    function f(e, t, n, i) {
                        for (var r = e.length, a = 3; a < r; a += 4) {
                            var s = e[a];
                            if (0 === s) e[a - 3] = t, e[a - 2] = n, e[a - 1] = i;
                            else if (s < 255) {
                                var o = 255 - s;
                                e[a - 3] = e[a - 3] * s + t * o >> 8, e[a - 2] = e[a - 2] * s + n * o >> 8, e[a - 1] = e[a - 1] * s + i * o >> 8
                            }
                        }
                    }

                    function p(e, t, n) {
                        for (var i = e.length, r = 3; r < i; r += 4) {
                            var a = n ? n[e[r]] : e[r];
                            t[r] = t[r] * a * (1 / 255) | 0
                        }
                    }

                    function g(e, t, n) {
                        for (var i = e.length, r = 3; r < i; r += 4) {
                            var a = 77 * e[r - 3] + 152 * e[r - 2] + 28 * e[r - 1];
                            t[r] = n ? t[r] * n[a >> 8] >> 8 : t[r] * a >> 16
                        }
                    }

                    function m(e, t, n, i, r, a, s) {
                        var o, c = !!a,
                            l = c ? a[0] : 0,
                            h = c ? a[1] : 0,
                            u = c ? a[2] : 0;
                        o = "Luminosity" === r ? g : p;
                        for (var d = Math.min(i, Math.ceil(1048576 / n)), m = 0; m < i; m += d) {
                            var v = Math.min(d, i - m),
                                b = e.getImageData(0, m, n, v),
                                y = t.getImageData(0, m, n, v);
                            c && f(b.data, l, h, u), o(b.data, y.data, s), e.putImageData(y, 0, m)
                        }
                    }

                    function v(e, t, n) {
                        var i = t.canvas,
                            r = t.context;
                        e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
                        var a = t.backdrop || null;
                        if (!t.transferMap && o.WebGLUtils.isEnabled) {
                            var s = o.WebGLUtils.composeSMask(n.canvas, i, {
                                subtype: t.subtype,
                                backdrop: a
                            });
                            return e.setTransform(1, 0, 0, 1, 0, 0), void e.drawImage(s, t.offsetX, t.offsetY)
                        }
                        m(r, n, i.width, i.height, t.subtype, a, t.transferMap), e.drawImage(i, 0, 0)
                    }
                    var b = ["butt", "round", "square"],
                        y = ["miter", "round", "bevel"],
                        w = {},
                        A = {};
                    e.prototype = {
                        beginDrawing: function(e, t, n) {
                            var i = this.ctx.canvas.width,
                                r = this.ctx.canvas.height;
                            if (this.ctx.save(), this.ctx.fillStyle = "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, i, r), this.ctx.restore(), n) {
                                var a = this.cachedCanvases.getCanvas("transparent", i, r, !0);
                                this.compositeCtx = this.ctx, this.transparentCanvas = a.canvas, this.ctx = a.context, this.ctx.save(), this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
                            }
                            this.ctx.save(), e && this.ctx.transform.apply(this.ctx, e), this.ctx.transform.apply(this.ctx, t.transform), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this.imageLayer && this.imageLayer.beginLayout()
                        },
                        executeOperatorList: function(e, t, n, i) {
                            var r = e.argsArray,
                                s = e.fnArray,
                                o = t || 0,
                                c = r.length;
                            if (c === o) return o;
                            for (var l, h = c - o > 10 && "function" == typeof n, u = h ? Date.now() + 15 : 0, d = 0, f = this.commonObjs, p = this.objs;;) {
                                if (void 0 !== i && o === i.nextBreakPoint) return i.breakIt(o, n), o;
                                if ((l = s[o]) !== a.OPS.dependency) this[l].apply(this, r[o]);
                                else
                                    for (var g = r[o], m = 0, v = g.length; m < v; m++) {
                                        var b = g[m],
                                            y = "g" === b[0] && "_" === b[1],
                                            w = y ? f : p;
                                        if (!w.isResolved(b)) return w.get(b, n), o
                                    }
                                if (++o === c) return o;
                                if (h && ++d > 10) {
                                    if (Date.now() > u) return n(), o;
                                    d = 0
                                }
                            }
                        },
                        endDrawing: function() {
                            null !== this.current.activeSMask && this.endSMaskGroup(), this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null), this.cachedCanvases.clear(), o.WebGLUtils.clear(), this.imageLayer && this.imageLayer.endLayout()
                        },
                        setLineWidth: function(e) {
                            this.current.lineWidth = e, this.ctx.lineWidth = e
                        },
                        setLineCap: function(e) {
                            this.ctx.lineCap = b[e]
                        },
                        setLineJoin: function(e) {
                            this.ctx.lineJoin = y[e]
                        },
                        setMiterLimit: function(e) {
                            this.ctx.miterLimit = e
                        },
                        setDash: function(e, t) {
                            var n = this.ctx;
                            void 0 !== n.setLineDash && (n.setLineDash(e), n.lineDashOffset = t)
                        },
                        setRenderingIntent: function(e) {},
                        setFlatness: function(e) {},
                        setGState: function(e) {
                            for (var t = 0, n = e.length; t < n; t++) {
                                var i = e[t],
                                    r = i[0],
                                    a = i[1];
                                switch (r) {
                                    case "LW":
                                        this.setLineWidth(a);
                                        break;
                                    case "LC":
                                        this.setLineCap(a);
                                        break;
                                    case "LJ":
                                        this.setLineJoin(a);
                                        break;
                                    case "ML":
                                        this.setMiterLimit(a);
                                        break;
                                    case "D":
                                        this.setDash(a[0], a[1]);
                                        break;
                                    case "RI":
                                        this.setRenderingIntent(a);
                                        break;
                                    case "FL":
                                        this.setFlatness(a);
                                        break;
                                    case "Font":
                                        this.setFont(a[0], a[1]);
                                        break;
                                    case "CA":
                                        this.current.strokeAlpha = i[1];
                                        break;
                                    case "ca":
                                        this.current.fillAlpha = i[1], this.ctx.globalAlpha = i[1];
                                        break;
                                    case "BM":
                                        this.ctx.globalCompositeOperation = a;
                                        break;
                                    case "SMask":
                                        this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup()), this.current.activeSMask = a ? this.tempSMask : null, this.current.activeSMask && this.beginSMaskGroup(), this.tempSMask = null
                                }
                            }
                        },
                        beginSMaskGroup: function() {
                            var e = this.current.activeSMask,
                                t = e.canvas.width,
                                n = e.canvas.height,
                                i = "smaskGroupAt" + this.groupLevel,
                                r = this.cachedCanvases.getCanvas(i, t, n, !0),
                                a = this.ctx,
                                s = a.mozCurrentTransform;
                            this.ctx.save();
                            var o = r.context;
                            o.scale(1 / e.scaleX, 1 / e.scaleY), o.translate(-e.offsetX, -e.offsetY), o.transform.apply(o, s), e.startTransformInverse = o.mozCurrentTransformInverse, d(a, o), this.ctx = o, this.setGState([
                                ["BM", "source-over"],
                                ["ca", 1],
                                ["CA", 1]
                            ]), this.groupStack.push(a), this.groupLevel++
                        },
                        suspendSMaskGroup: function() {
                            var e = this.ctx;
                            this.groupLevel--, this.ctx = this.groupStack.pop(), v(this.ctx, this.current.activeSMask, e), this.ctx.restore(), this.ctx.save(), d(e, this.ctx), this.current.resumeSMaskCtx = e;
                            var t = a.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                            this.ctx.transform.apply(this.ctx, t), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.restore()
                        },
                        resumeSMaskGroup: function() {
                            var e = this.current.resumeSMaskCtx,
                                t = this.ctx;
                            this.ctx = e, this.groupStack.push(t), this.groupLevel++
                        },
                        endSMaskGroup: function() {
                            var e = this.ctx;
                            this.groupLevel--, this.ctx = this.groupStack.pop(), v(this.ctx, this.current.activeSMask, e), this.ctx.restore(), d(e, this.ctx);
                            var t = a.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                            this.ctx.transform.apply(this.ctx, t)
                        },
                        save: function() {
                            this.ctx.save();
                            var e = this.current;
                            this.stateStack.push(e), this.current = e.clone(), this.current.resumeSMaskCtx = null
                        },
                        restore: function() {
                            this.current.resumeSMaskCtx && this.resumeSMaskGroup(), null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.ctx.restore(), this.pendingClip = null, this.cachedGetSinglePixelWidth = null)
                        },
                        transform: function(e, t, n, i, r, a) {
                            this.ctx.transform(e, t, n, i, r, a), this.cachedGetSinglePixelWidth = null
                        },
                        constructPath: function(e, t) {
                            for (var n = this.ctx, i = this.current, r = i.x, s = i.y, o = 0, c = 0, l = e.length; o < l; o++) switch (0 | e[o]) {
                                case a.OPS.rectangle:
                                    r = t[c++], s = t[c++];
                                    var h = t[c++],
                                        u = t[c++];
                                    0 === h && (h = this.getSinglePixelWidth()), 0 === u && (u = this.getSinglePixelWidth());
                                    var d = r + h,
                                        f = s + u;
                                    this.ctx.moveTo(r, s), this.ctx.lineTo(d, s), this.ctx.lineTo(d, f), this.ctx.lineTo(r, f), this.ctx.lineTo(r, s), this.ctx.closePath();
                                    break;
                                case a.OPS.moveTo:
                                    r = t[c++], s = t[c++], n.moveTo(r, s);
                                    break;
                                case a.OPS.lineTo:
                                    r = t[c++], s = t[c++], n.lineTo(r, s);
                                    break;
                                case a.OPS.curveTo:
                                    r = t[c + 4], s = t[c + 5], n.bezierCurveTo(t[c], t[c + 1], t[c + 2], t[c + 3], r, s), c += 6;
                                    break;
                                case a.OPS.curveTo2:
                                    n.bezierCurveTo(r, s, t[c], t[c + 1], t[c + 2], t[c + 3]), r = t[c + 2], s = t[c + 3], c += 4;
                                    break;
                                case a.OPS.curveTo3:
                                    r = t[c + 2], s = t[c + 3], n.bezierCurveTo(t[c], t[c + 1], r, s, r, s), c += 4;
                                    break;
                                case a.OPS.closePath:
                                    n.closePath()
                            }
                            i.setCurrentPoint(r, s)
                        },
                        closePath: function() {
                            this.ctx.closePath()
                        },
                        stroke: function(e) {
                            e = void 0 === e || e;
                            var t = this.ctx,
                                n = this.current.strokeColor;
                            t.lineWidth = Math.max(.65 * this.getSinglePixelWidth(), this.current.lineWidth), t.globalAlpha = this.current.strokeAlpha, n && n.hasOwnProperty("type") && "Pattern" === n.type ? (t.save(), t.strokeStyle = n.getPattern(t, this), t.stroke(), t.restore()) : t.stroke(), e && this.consumePath(), t.globalAlpha = this.current.fillAlpha
                        },
                        closeStroke: function() {
                            this.closePath(), this.stroke()
                        },
                        fill: function(e) {
                            e = void 0 === e || e;
                            var t = this.ctx,
                                n = this.current.fillColor,
                                i = this.current.patternFill,
                                r = !1;
                            i && (t.save(), this.baseTransform && t.setTransform.apply(t, this.baseTransform), t.fillStyle = n.getPattern(t, this), r = !0), this.pendingEOFill ? (t.fill("evenodd"), this.pendingEOFill = !1) : t.fill(), r && t.restore(), e && this.consumePath()
                        },
                        eoFill: function() {
                            this.pendingEOFill = !0, this.fill()
                        },
                        fillStroke: function() {
                            this.fill(!1), this.stroke(!1), this.consumePath()
                        },
                        eoFillStroke: function() {
                            this.pendingEOFill = !0, this.fillStroke()
                        },
                        closeFillStroke: function() {
                            this.closePath(), this.fillStroke()
                        },
                        closeEOFillStroke: function() {
                            this.pendingEOFill = !0, this.closePath(), this.fillStroke()
                        },
                        endPath: function() {
                            this.consumePath()
                        },
                        clip: function() {
                            this.pendingClip = w
                        },
                        eoClip: function() {
                            this.pendingClip = A
                        },
                        beginText: function() {
                            this.current.textMatrix = a.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                        },
                        endText: function() {
                            var e = this.pendingTextPaths,
                                t = this.ctx;
                            if (void 0 === e) return void t.beginPath();
                            t.save(), t.beginPath();
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                t.setTransform.apply(t, i.transform), t.translate(i.x, i.y), i.addToPath(t, i.fontSize)
                            }
                            t.restore(), t.clip(), t.beginPath(), delete this.pendingTextPaths
                        },
                        setCharSpacing: function(e) {
                            this.current.charSpacing = e
                        },
                        setWordSpacing: function(e) {
                            this.current.wordSpacing = e
                        },
                        setHScale: function(e) {
                            this.current.textHScale = e / 100
                        },
                        setLeading: function(e) {
                            this.current.leading = -e
                        },
                        setFont: function(e, t) {
                            var n = this.commonObjs.get(e),
                                i = this.current;
                            if (n || (0, a.error)("Can't find font for " + e), i.fontMatrix = n.fontMatrix ? n.fontMatrix : a.FONT_IDENTITY_MATRIX, 0 !== i.fontMatrix[0] && 0 !== i.fontMatrix[3] || (0, a.warn)("Invalid font matrix for font " + e), t < 0 ? (t = -t, i.fontDirection = -1) : i.fontDirection = 1, this.current.font = n, this.current.fontSize = t, !n.isType3Font) {
                                var r = n.loadedName || "sans-serif",
                                    s = n.black ? "900" : n.bold ? "bold" : "normal",
                                    o = n.italic ? "italic" : "normal",
                                    c = '"' + r + '", ' + n.fallbackName,
                                    l = t < 16 ? 16 : t > 100 ? 100 : t;
                                this.current.fontSizeScale = t / l;
                                var h = o + " " + s + " " + l + "px " + c;
                                this.ctx.font = h
                            }
                        },
                        setTextRenderingMode: function(e) {
                            this.current.textRenderingMode = e
                        },
                        setTextRise: function(e) {
                            this.current.textRise = e
                        },
                        moveText: function(e, t) {
                            this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += t
                        },
                        setLeadingMoveText: function(e, t) {
                            this.setLeading(-t), this.moveText(e, t)
                        },
                        setTextMatrix: function(e, t, n, i, r, a) {
                            this.current.textMatrix = [e, t, n, i, r, a], this.current.textMatrixScale = Math.sqrt(e * e + t * t), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                        },
                        nextLine: function() {
                            this.moveText(0, this.current.leading)
                        },
                        paintChar: function(e, t, n) {
                            var i, r = this.ctx,
                                s = this.current,
                                o = s.font,
                                c = s.textRenderingMode,
                                l = s.fontSize / s.fontSizeScale,
                                h = c & a.TextRenderingMode.FILL_STROKE_MASK,
                                u = !!(c & a.TextRenderingMode.ADD_TO_PATH_FLAG);
                            if ((o.disableFontFace || u) && (i = o.getPathGenerator(this.commonObjs, e)), o.disableFontFace ? (r.save(), r.translate(t, n), r.beginPath(), i(r, l), h !== a.TextRenderingMode.FILL && h !== a.TextRenderingMode.FILL_STROKE || r.fill(), h !== a.TextRenderingMode.STROKE && h !== a.TextRenderingMode.FILL_STROKE || r.stroke(), r.restore()) : (h !== a.TextRenderingMode.FILL && h !== a.TextRenderingMode.FILL_STROKE || r.fillText(e, t, n), h !== a.TextRenderingMode.STROKE && h !== a.TextRenderingMode.FILL_STROKE || r.strokeText(e, t, n)), u) {
                                (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                                    transform: r.mozCurrentTransform,
                                    x: t,
                                    y: n,
                                    fontSize: l,
                                    addToPath: i
                                })
                            }
                        },
                        get isFontSubpixelAAEnabled() {
                            var e = this.canvasFactory.create(10, 10).context;
                            e.scale(1.5, 1), e.fillText("I", 0, 10);
                            for (var t = e.getImageData(0, 0, 10, 10).data, n = !1, i = 3; i < t.length; i += 4)
                                if (t[i] > 0 && t[i] < 255) {
                                    n = !0;
                                    break
                                } return (0, a.shadow)(this, "isFontSubpixelAAEnabled", n)
                        },
                        showText: function(e) {
                            var t = this.current,
                                n = t.font;
                            if (n.isType3Font) return this.showType3Text(e);
                            var i = t.fontSize;
                            if (0 !== i) {
                                var r = this.ctx,
                                    s = t.fontSizeScale,
                                    o = t.charSpacing,
                                    c = t.wordSpacing,
                                    l = t.fontDirection,
                                    h = t.textHScale * l,
                                    u = e.length,
                                    d = n.vertical,
                                    f = d ? 1 : -1,
                                    p = n.defaultVMetrics,
                                    g = i * t.fontMatrix[0],
                                    m = t.textRenderingMode === a.TextRenderingMode.FILL && !n.disableFontFace;
                                r.save(), r.transform.apply(r, t.textMatrix), r.translate(t.x, t.y + t.textRise), t.patternFill && (r.fillStyle = t.fillColor.getPattern(r, this)), l > 0 ? r.scale(h, -1) : r.scale(h, 1);
                                var v = t.lineWidth,
                                    b = t.textMatrixScale;
                                if (0 === b || 0 === v) {
                                    var y = t.textRenderingMode & a.TextRenderingMode.FILL_STROKE_MASK;
                                    y !== a.TextRenderingMode.STROKE && y !== a.TextRenderingMode.FILL_STROKE || (this.cachedGetSinglePixelWidth = null, v = .65 * this.getSinglePixelWidth())
                                } else v /= b;
                                1 !== s && (r.scale(s, s), v /= s), r.lineWidth = v;
                                var w, A = 0;
                                for (w = 0; w < u; ++w) {
                                    var S = e[w];
                                    if ((0, a.isNum)(S)) A += f * S * i / 1e3;
                                    else {
                                        var P, _, C, x, L = !1,
                                            T = (S.isSpace ? c : 0) + o,
                                            k = S.fontChar,
                                            E = S.accent,
                                            I = S.width;
                                        if (d) {
                                            var F, D, O;
                                            F = S.vmetric || p, D = S.vmetric ? F[1] : .5 * I, D = -D * g, O = F[2] * g, I = F ? -F[0] : I, P = D / s, _ = (A + O) / s
                                        } else P = A / s, _ = 0;
                                        if (n.remeasure && I > 0) {
                                            var R = 1e3 * r.measureText(k).width / i * s;
                                            if (I < R && this.isFontSubpixelAAEnabled) {
                                                var N = I / R;
                                                L = !0, r.save(), r.scale(N, 1), P /= N
                                            } else I !== R && (P += (I - R) / 2e3 * i / s)
                                        }(S.isInFont || n.missingFile) && (m && !E ? r.fillText(k, P, _) : (this.paintChar(k, P, _), E && (C = P + E.offset.x / s, x = _ - E.offset.y / s, this.paintChar(E.fontChar, C, x))));
                                        A += I * g + T * l, L && r.restore()
                                    }
                                }
                                d ? t.y -= A * h : t.x += A * h, r.restore()
                            }
                        },
                        showType3Text: function(e) {
                            var t, n, i, r, s = this.ctx,
                                o = this.current,
                                c = o.font,
                                l = o.fontSize,
                                h = o.fontDirection,
                                u = c.vertical ? 1 : -1,
                                d = o.charSpacing,
                                f = o.wordSpacing,
                                p = o.textHScale * h,
                                g = o.fontMatrix || a.FONT_IDENTITY_MATRIX,
                                m = e.length,
                                v = o.textRenderingMode === a.TextRenderingMode.INVISIBLE;
                            if (!v && 0 !== l) {
                                for (this.cachedGetSinglePixelWidth = null, s.save(), s.transform.apply(s, o.textMatrix), s.translate(o.x, o.y), s.scale(p, h), t = 0; t < m; ++t)
                                    if (n = e[t], (0, a.isNum)(n)) r = u * n * l / 1e3, this.ctx.translate(r, 0), o.x += r * p;
                                    else {
                                        var b = (n.isSpace ? f : 0) + d,
                                            y = c.charProcOperatorList[n.operatorListId];
                                        if (y) {
                                            this.processingType3 = n, this.save(), s.scale(l, l), s.transform.apply(s, g), this.executeOperatorList(y), this.restore();
                                            var w = a.Util.applyTransform([n.width, 0], g);
                                            i = w[0] * l + b, s.translate(i, 0), o.x += i * p
                                        } else(0, a.warn)('Type3 character "' + n.operatorListId + '" is not available')
                                    } s.restore(), this.processingType3 = null
                            }
                        },
                        setCharWidth: function(e, t) {},
                        setCharWidthAndBounds: function(e, t, n, i, r, a) {
                            this.ctx.rect(n, i, r - n, a - i), this.clip(), this.endPath()
                        },
                        getColorN_Pattern: function(t) {
                            var n;
                            if ("TilingPattern" === t[0]) {
                                var i = t[1],
                                    r = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                                    a = this,
                                    o = {
                                        createCanvasGraphics: function(t) {
                                            return new e(t, a.commonObjs, a.objs, a.canvasFactory)
                                        }
                                    };
                                n = new s.TilingPattern(t, i, this.ctx, o, r)
                            } else n = (0, s.getShadingPatternFromIR)(t);
                            return n
                        },
                        setStrokeColorN: function() {
                            this.current.strokeColor = this.getColorN_Pattern(arguments)
                        },
                        setFillColorN: function() {
                            this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
                        },
                        setStrokeRGBColor: function(e, t, n) {
                            var i = a.Util.makeCssRgb(e, t, n);
                            this.ctx.strokeStyle = i, this.current.strokeColor = i
                        },
                        setFillRGBColor: function(e, t, n) {
                            var i = a.Util.makeCssRgb(e, t, n);
                            this.ctx.fillStyle = i, this.current.fillColor = i, this.current.patternFill = !1
                        },
                        shadingFill: function(e) {
                            var t = this.ctx;
                            this.save();
                            var n = (0, s.getShadingPatternFromIR)(e);
                            t.fillStyle = n.getPattern(t, this, !0);
                            var i = t.mozCurrentTransformInverse;
                            if (i) {
                                var r = t.canvas,
                                    o = r.width,
                                    c = r.height,
                                    l = a.Util.applyTransform([0, 0], i),
                                    h = a.Util.applyTransform([0, c], i),
                                    u = a.Util.applyTransform([o, 0], i),
                                    d = a.Util.applyTransform([o, c], i),
                                    f = Math.min(l[0], h[0], u[0], d[0]),
                                    p = Math.min(l[1], h[1], u[1], d[1]),
                                    g = Math.max(l[0], h[0], u[0], d[0]),
                                    m = Math.max(l[1], h[1], u[1], d[1]);
                                this.ctx.fillRect(f, p, g - f, m - p)
                            } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                            this.restore()
                        },
                        beginInlineImage: function() {
                            (0, a.error)("Should not call beginInlineImage")
                        },
                        beginImageData: function() {
                            (0, a.error)("Should not call beginImageData")
                        },
                        paintFormXObjectBegin: function(e, t) {
                            if (this.save(), this.baseTransformStack.push(this.baseTransform), (0, a.isArray)(e) && 6 === e.length && this.transform.apply(this, e), this.baseTransform = this.ctx.mozCurrentTransform, (0, a.isArray)(t) && 4 === t.length) {
                                var n = t[2] - t[0],
                                    i = t[3] - t[1];
                                this.ctx.rect(t[0], t[1], n, i), this.clip(), this.endPath()
                            }
                        },
                        paintFormXObjectEnd: function() {
                            this.restore(), this.baseTransform = this.baseTransformStack.pop()
                        },
                        beginGroup: function(e) {
                            this.save();
                            var t = this.ctx;
                            e.isolated || (0, a.info)("TODO: Support non-isolated groups."), e.knockout && (0, a.warn)("Knockout groups not supported.");
                            var n = t.mozCurrentTransform;
                            e.matrix && t.transform.apply(t, e.matrix), (0, a.assert)(e.bbox, "Bounding box is required.");
                            var i = a.Util.getAxialAlignedBoundingBox(e.bbox, t.mozCurrentTransform),
                                r = [0, 0, t.canvas.width, t.canvas.height];
                            i = a.Util.intersect(i, r) || [0, 0, 0, 0];
                            var s = Math.floor(i[0]),
                                o = Math.floor(i[1]),
                                c = Math.max(Math.ceil(i[2]) - s, 1),
                                l = Math.max(Math.ceil(i[3]) - o, 1),
                                h = 1,
                                u = 1;
                            c > 4096 && (h = c / 4096, c = 4096), l > 4096 && (u = l / 4096, l = 4096);
                            var f = "groupAt" + this.groupLevel;
                            e.smask && (f += "_smask_" + this.smaskCounter++ % 2);
                            var p = this.cachedCanvases.getCanvas(f, c, l, !0),
                                g = p.context;
                            g.scale(1 / h, 1 / u), g.translate(-s, -o), g.transform.apply(g, n), e.smask ? this.smaskStack.push({
                                canvas: p.canvas,
                                context: g,
                                offsetX: s,
                                offsetY: o,
                                scaleX: h,
                                scaleY: u,
                                subtype: e.smask.subtype,
                                backdrop: e.smask.backdrop,
                                transferMap: e.smask.transferMap || null,
                                startTransformInverse: null
                            }) : (t.setTransform(1, 0, 0, 1, 0, 0), t.translate(s, o), t.scale(h, u)), d(t, g), this.ctx = g, this.setGState([
                                ["BM", "source-over"],
                                ["ca", 1],
                                ["CA", 1]
                            ]), this.groupStack.push(t), this.groupLevel++, this.current.activeSMask = null
                        },
                        endGroup: function(e) {
                            this.groupLevel--;
                            var t = this.ctx;
                            this.ctx = this.groupStack.pop(), void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1, e.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(t.canvas, 0, 0), this.restore()
                        },
                        beginAnnotations: function() {
                            this.save(), this.current = new u, this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
                        },
                        endAnnotations: function() {
                            this.restore()
                        },
                        beginAnnotation: function(e, t, n) {
                            if (this.save(), (0, a.isArray)(e) && 4 === e.length) {
                                var i = e[2] - e[0],
                                    r = e[3] - e[1];
                                this.ctx.rect(e[0], e[1], i, r), this.clip(), this.endPath()
                            }
                            this.transform.apply(this, t), this.transform.apply(this, n)
                        },
                        endAnnotation: function() {
                            this.restore()
                        },
                        paintJpegXObject: function(e, t, n) {
                            var i = this.objs.get(e);
                            if (!i) return void(0, a.warn)("Dependent image isn't ready yet");
                            this.save();
                            var r = this.ctx;
                            if (r.scale(1 / t, -1 / n), r.drawImage(i, 0, 0, i.width, i.height, 0, -n, t, n), this.imageLayer) {
                                var s = r.mozCurrentTransformInverse,
                                    o = this.getCanvasPosition(0, 0);
                                this.imageLayer.appendImage({
                                    objId: e,
                                    left: o[0],
                                    top: o[1],
                                    width: t / s[0],
                                    height: n / s[3]
                                })
                            }
                            this.restore()
                        },
                        paintImageMaskXObject: function(e) {
                            var t = this.ctx,
                                i = e.width,
                                a = e.height,
                                s = this.current.fillColor,
                                o = this.current.patternFill,
                                c = this.processingType3;
                            if (c && void 0 === c.compiled && (c.compiled = i <= 1e3 && a <= 1e3 ? r({
                                    data: e.data,
                                    width: i,
                                    height: a
                                }) : null), c && c.compiled) return void c.compiled(t);
                            var l = this.cachedCanvases.getCanvas("maskCanvas", i, a),
                                h = l.context;
                            h.save(), n(h, e), h.globalCompositeOperation = "source-in", h.fillStyle = o ? s.getPattern(h, this) : s, h.fillRect(0, 0, i, a), h.restore(), this.paintInlineImageXObject(l.canvas)
                        },
                        paintImageMaskXObjectRepeat: function(e, t, i, r) {
                            var a = e.width,
                                s = e.height,
                                o = this.current.fillColor,
                                c = this.current.patternFill,
                                l = this.cachedCanvases.getCanvas("maskCanvas", a, s),
                                h = l.context;
                            h.save(), n(h, e), h.globalCompositeOperation = "source-in", h.fillStyle = c ? o.getPattern(h, this) : o, h.fillRect(0, 0, a, s), h.restore();
                            for (var u = this.ctx, d = 0, f = r.length; d < f; d += 2) u.save(), u.transform(t, 0, 0, i, r[d], r[d + 1]), u.scale(1, -1), u.drawImage(l.canvas, 0, 0, a, s, 0, -1, 1, 1), u.restore()
                        },
                        paintImageMaskXObjectGroup: function(e) {
                            for (var t = this.ctx, i = this.current.fillColor, r = this.current.patternFill, a = 0, s = e.length; a < s; a++) {
                                var o = e[a],
                                    c = o.width,
                                    l = o.height,
                                    h = this.cachedCanvases.getCanvas("maskCanvas", c, l),
                                    u = h.context;
                                u.save(), n(u, o), u.globalCompositeOperation = "source-in", u.fillStyle = r ? i.getPattern(u, this) : i, u.fillRect(0, 0, c, l), u.restore(), t.save(), t.transform.apply(t, o.transform), t.scale(1, -1), t.drawImage(h.canvas, 0, 0, c, l, 0, -1, 1, 1), t.restore()
                            }
                        },
                        paintImageXObject: function(e) {
                            var t = this.objs.get(e);
                            if (!t) return void(0, a.warn)("Dependent image isn't ready yet");
                            this.paintInlineImageXObject(t)
                        },
                        paintImageXObjectRepeat: function(e, t, n, i) {
                            var r = this.objs.get(e);
                            if (!r) return void(0, a.warn)("Dependent image isn't ready yet");
                            for (var s = r.width, o = r.height, c = [], l = 0, h = i.length; l < h; l += 2) c.push({
                                transform: [t, 0, 0, n, i[l], i[l + 1]],
                                x: 0,
                                y: 0,
                                w: s,
                                h: o
                            });
                            this.paintInlineImageXObjectGroup(r, c)
                        },
                        paintInlineImageXObject: function(e) {
                            var n = e.width,
                                i = e.height,
                                r = this.ctx;
                            this.save(), r.scale(1 / n, -1 / i);
                            var a, s, o = r.mozCurrentTransformInverse,
                                c = o[0],
                                l = o[1],
                                h = Math.max(Math.sqrt(c * c + l * l), 1),
                                u = o[2],
                                d = o[3],
                                f = Math.max(Math.sqrt(u * u + d * d), 1);
                            if (e instanceof HTMLElement || !e.data) a = e;
                            else {
                                s = this.cachedCanvases.getCanvas("inlineImage", n, i);
                                var p = s.context;
                                t(p, e), a = s.canvas
                            }
                            for (var g = n, m = i, v = "prescale1"; h > 2 && g > 1 || f > 2 && m > 1;) {
                                var b = g,
                                    y = m;
                                h > 2 && g > 1 && (b = Math.ceil(g / 2), h /= g / b), f > 2 && m > 1 && (y = Math.ceil(m / 2), f /= m / y), s = this.cachedCanvases.getCanvas(v, b, y), p = s.context, p.clearRect(0, 0, b, y), p.drawImage(a, 0, 0, g, m, 0, 0, b, y), a = s.canvas, g = b, m = y, v = "prescale1" === v ? "prescale2" : "prescale1"
                            }
                            if (r.drawImage(a, 0, 0, g, m, 0, -i, n, i), this.imageLayer) {
                                var w = this.getCanvasPosition(0, -i);
                                this.imageLayer.appendImage({
                                    imgData: e,
                                    left: w[0],
                                    top: w[1],
                                    width: n / o[0],
                                    height: i / o[3]
                                })
                            }
                            this.restore()
                        },
                        paintInlineImageXObjectGroup: function(e, n) {
                            var i = this.ctx,
                                r = e.width,
                                a = e.height,
                                s = this.cachedCanvases.getCanvas("inlineImage", r, a);
                            t(s.context, e);
                            for (var o = 0, c = n.length; o < c; o++) {
                                var l = n[o];
                                if (i.save(), i.transform.apply(i, l.transform), i.scale(1, -1), i.drawImage(s.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1), this.imageLayer) {
                                    var h = this.getCanvasPosition(l.x, l.y);
                                    this.imageLayer.appendImage({
                                        imgData: e,
                                        left: h[0],
                                        top: h[1],
                                        width: r,
                                        height: a
                                    })
                                }
                                i.restore()
                            }
                        },
                        paintSolidColorImageMask: function() {
                            this.ctx.fillRect(0, 0, 1, 1)
                        },
                        paintXObject: function() {
                            (0, a.warn)("Unsupported 'paintXObject' command.")
                        },
                        markPoint: function(e) {},
                        markPointProps: function(e, t) {},
                        beginMarkedContent: function(e) {},
                        beginMarkedContentProps: function(e, t) {},
                        endMarkedContent: function() {},
                        beginCompat: function() {},
                        endCompat: function() {},
                        consumePath: function() {
                            var e = this.ctx;
                            this.pendingClip && (this.pendingClip === A ? e.clip("evenodd") : e.clip(), this.pendingClip = null), e.beginPath()
                        },
                        getSinglePixelWidth: function(e) {
                            if (null === this.cachedGetSinglePixelWidth) {
                                this.ctx.save();
                                var t = this.ctx.mozCurrentTransformInverse;
                                this.ctx.restore(), this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1], t[2] * t[2] + t[3] * t[3]))
                            }
                            return this.cachedGetSinglePixelWidth
                        },
                        getCanvasPosition: function(e, t) {
                            var n = this.ctx.mozCurrentTransform;
                            return [n[0] * e + n[2] * t + n[4], n[1] * e + n[3] * t + n[5]]
                        }
                    };
                    for (var S in a.OPS) e.prototype[a.OPS[S]] = e.prototype[S];
                    return e
                }();
            t.CanvasGraphics = d
        }, function(e, t, n) {
            function i(e) {
                this.docId = e, this.styleElement = null, this.nativeFontFaces = [], this.loadTestFontId = 0, this.loadingContext = {
                    requests: [],
                    nextRequestId: 0
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FontLoader = t.FontFaceObject = void 0;
            var r = n(0);
            i.prototype = {
                insertRule: function(e) {
                    var t = this.styleElement;
                    t || (t = this.styleElement = document.createElement("style"), t.id = "PDFJS_FONT_STYLE_TAG_" + this.docId, document.documentElement.getElementsByTagName("head")[0].appendChild(t));
                    var n = t.sheet;
                    n.insertRule(e, n.cssRules.length)
                },
                clear: function() {
                    this.styleElement && (this.styleElement.remove(), this.styleElement = null), this.nativeFontFaces.forEach(function(e) {
                        document.fonts.delete(e)
                    }), this.nativeFontFaces.length = 0
                }
            };
            var a = function() {
                return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")
            };
            Object.defineProperty(i.prototype, "loadTestFont", {
                get: function() {
                    return (0, r.shadow)(this, "loadTestFont", a())
                },
                configurable: !0
            }), i.prototype.addNativeFontFace = function(e) {
                this.nativeFontFaces.push(e), document.fonts.add(e)
            }, i.prototype.bind = function(e, t) {
                for (var n = [], a = [], s = [], o = i.isFontLoadingAPISupported && !i.isSyncFontLoadingSupported, c = 0, l = e.length; c < l; c++) {
                    var h = e[c];
                    if (!h.attached && !1 !== h.loading)
                        if (h.attached = !0, o) {
                            var u = h.createNativeFontFace();
                            u && (this.addNativeFontFace(u), s.push(function(e) {
                                return e.loaded.catch(function(t) {
                                    (0, r.warn)('Failed to load font "' + e.family + '": ' + t)
                                })
                            }(u)))
                        } else {
                            var d = h.createFontFaceRule();
                            d && (this.insertRule(d), n.push(d), a.push(h))
                        }
                }
                var f = this.queueLoadingCallback(t);
                o ? Promise.all(s).then(function() {
                    f.complete()
                }) : n.length > 0 && !i.isSyncFontLoadingSupported ? this.prepareFontLoadEvent(n, a, f) : f.complete()
            }, i.prototype.queueLoadingCallback = function(e) {
                function t() {
                    for ((0, r.assert)(!a.end, "completeRequest() cannot be called twice"), a.end = Date.now(); n.requests.length > 0 && n.requests[0].end;) {
                        var e = n.requests.shift();
                        setTimeout(e.callback, 0)
                    }
                }
                var n = this.loadingContext,
                    i = "pdfjs-font-loading-" + n.nextRequestId++,
                    a = {
                        id: i,
                        complete: t,
                        callback: e,
                        started: Date.now()
                    };
                return n.requests.push(a), a
            }, i.prototype.prepareFontLoadEvent = function(e, t, n) {
                function i(e, t) {
                    return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3)
                }

                function a(e, t, n, i) {
                    return e.substr(0, t) + i + e.substr(t + n)
                }

                function s(e, t) {
                    return ++u > 30 ? ((0, r.warn)("Load test font never loaded."), void t()) : (h.font = "30px " + e, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0 ? void t() : void setTimeout(s.bind(null, e, t)))
                }
                var o, c, l = document.createElement("canvas");
                l.width = 1, l.height = 1;
                var h = l.getContext("2d"),
                    u = 0,
                    d = "lt" + Date.now() + this.loadTestFontId++,
                    f = this.loadTestFont;
                f = a(f, 976, d.length, d);
                var p = i(f, 16);
                for (o = 0, c = d.length - 3; o < c; o += 4) p = p - 1482184792 + i(d, o) | 0;
                o < d.length && (p = p - 1482184792 + i(d + "XXX", o) | 0), f = a(f, 16, 4, (0, r.string32)(p));
                var g = "url(data:font/opentype;base64," + btoa(f) + ");",
                    m = '@font-face { font-family:"' + d + '";src:' + g + "}";
                this.insertRule(m);
                var v = [];
                for (o = 0, c = t.length; o < c; o++) v.push(t[o].loadedName);
                v.push(d);
                var b = document.createElement("div");
                for (b.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"), o = 0, c = v.length; o < c; ++o) {
                    var y = document.createElement("span");
                    y.textContent = "Hi", y.style.fontFamily = v[o], b.appendChild(y)
                }
                document.body.appendChild(b), s(d, function() {
                    document.body.removeChild(b), n.complete()
                })
            }, i.isFontLoadingAPISupported = "undefined" != typeof document && !!document.fonts;
            var s = function() {
                if ("undefined" == typeof navigator) return !0;
                var e = !1,
                    t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
                return t && t[1] >= 14 && (e = !0), e
            };
            Object.defineProperty(i, "isSyncFontLoadingSupported", {
                get: function() {
                    return (0, r.shadow)(i, "isSyncFontLoadingSupported", s())
                },
                enumerable: !0,
                configurable: !0
            });
            var o = {
                    get value() {
                        return (0, r.shadow)(this, "value", (0, r.isEvalSupported)())
                    }
                },
                c = function() {
                    function e(e, t) {
                        this.compiledGlyphs = Object.create(null);
                        for (var n in e) this[n] = e[n];
                        this.options = t
                    }
                    return e.prototype = {
                        createNativeFontFace: function() {
                            if (!this.data) return null;
                            if (this.options.disableFontFace) return this.disableFontFace = !0, null;
                            var e = new FontFace(this.loadedName, this.data, {});
                            return this.options.fontRegistry && this.options.fontRegistry.registerFont(this), e
                        },
                        createFontFaceRule: function() {
                            if (!this.data) return null;
                            if (this.options.disableFontFace) return this.disableFontFace = !0, null;
                            var e = (0, r.bytesToString)(new Uint8Array(this.data)),
                                t = this.loadedName,
                                n = "url(data:" + this.mimetype + ";base64," + btoa(e) + ");",
                                i = '@font-face { font-family:"' + t + '";src:' + n + "}";
                            return this.options.fontRegistry && this.options.fontRegistry.registerFont(this, n), i
                        },
                        getPathGenerator: function(e, t) {
                            if (!(t in this.compiledGlyphs)) {
                                var n, i, r, a = e.get(this.loadedName + "_path_" + t);
                                if (this.options.isEvalSupported && o.value) {
                                    var s, c = "";
                                    for (i = 0, r = a.length; i < r; i++) n = a[i], s = void 0 !== n.args ? n.args.join(",") : "", c += "c." + n.cmd + "(" + s + ");\n";
                                    this.compiledGlyphs[t] = new Function("c", "size", c)
                                } else this.compiledGlyphs[t] = function(e, t) {
                                    for (i = 0, r = a.length; i < r; i++) n = a[i], "scale" === n.cmd && (n.args = [t, -t]), e[n.cmd].apply(e, n.args)
                                }
                            }
                            return this.compiledGlyphs[t]
                        }
                    }, e
                }();
            t.FontFaceObject = c, t.FontLoader = i
        }, function(e, t, n) {
            function i(e) {
                var t = s[e[0]];
                return t || (0, r.error)("Unknown IR type: " + e[0]), t.fromIR(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TilingPattern = t.getShadingPatternFromIR = void 0;
            var r = n(0),
                a = n(8),
                s = {};
            s.RadialAxial = {
                fromIR: function(e) {
                    var t = e[1],
                        n = e[2],
                        i = e[3],
                        r = e[4],
                        a = e[5],
                        s = e[6];
                    return {
                        type: "Pattern",
                        getPattern: function(e) {
                            var o;
                            "axial" === t ? o = e.createLinearGradient(i[0], i[1], r[0], r[1]) : "radial" === t && (o = e.createRadialGradient(i[0], i[1], a, r[0], r[1], s));
                            for (var c = 0, l = n.length; c < l; ++c) {
                                var h = n[c];
                                o.addColorStop(h[0], h[1])
                            }
                            return o
                        }
                    }
                }
            };
            var o = function() {
                function e(e, t, n, i, r, a, s, o) {
                    var c, l = t.coords,
                        h = t.colors,
                        u = e.data,
                        d = 4 * e.width;
                    l[n + 1] > l[i + 1] && (c = n, n = i, i = c, c = a, a = s, s = c), l[i + 1] > l[r + 1] && (c = i, i = r, r = c, c = s, s = o, o = c), l[n + 1] > l[i + 1] && (c = n, n = i, i = c, c = a, a = s, s = c);
                    var f = (l[n] + t.offsetX) * t.scaleX,
                        p = (l[n + 1] + t.offsetY) * t.scaleY,
                        g = (l[i] + t.offsetX) * t.scaleX,
                        m = (l[i + 1] + t.offsetY) * t.scaleY,
                        v = (l[r] + t.offsetX) * t.scaleX,
                        b = (l[r + 1] + t.offsetY) * t.scaleY;
                    if (!(p >= b))
                        for (var y, w, A, S, P, _, C, x, L, T = h[a], k = h[a + 1], E = h[a + 2], I = h[s], F = h[s + 1], D = h[s + 2], O = h[o], R = h[o + 1], N = h[o + 2], M = Math.round(p), B = Math.round(b), j = M; j <= B; j++) {
                            j < m ? (L = j < p ? 0 : p === m ? 1 : (p - j) / (p - m), y = f - (f - g) * L, w = T - (T - I) * L, A = k - (k - F) * L, S = E - (E - D) * L) : (L = j > b ? 1 : m === b ? 0 : (m - j) / (m - b), y = g - (g - v) * L, w = I - (I - O) * L, A = F - (F - R) * L, S = D - (D - N) * L), L = j < p ? 0 : j > b ? 1 : (p - j) / (p - b), P = f - (f - v) * L, _ = T - (T - O) * L, C = k - (k - R) * L, x = E - (E - N) * L;
                            for (var U = Math.round(Math.min(y, P)), V = Math.round(Math.max(y, P)), z = d * j + 4 * U, H = U; H <= V; H++) L = (y - H) / (y - P), L = L < 0 ? 0 : L > 1 ? 1 : L, u[z++] = w - (w - _) * L | 0, u[z++] = A - (A - C) * L | 0, u[z++] = S - (S - x) * L | 0, u[z++] = 255
                        }
                }

                function t(t, n, i) {
                    var a, s, o = n.coords,
                        c = n.colors;
                    switch (n.type) {
                        case "lattice":
                            var l = n.verticesPerRow,
                                h = Math.floor(o.length / l) - 1,
                                u = l - 1;
                            for (a = 0; a < h; a++)
                                for (var d = a * l, f = 0; f < u; f++, d++) e(t, i, o[d], o[d + 1], o[d + l], c[d], c[d + 1], c[d + l]), e(t, i, o[d + l + 1], o[d + 1], o[d + l], c[d + l + 1], c[d + 1], c[d + l]);
                            break;
                        case "triangles":
                            for (a = 0, s = o.length; a < s; a += 3) e(t, i, o[a], o[a + 1], o[a + 2], c[a], c[a + 1], c[a + 2]);
                            break;
                        default:
                            (0, r.error)("illigal figure")
                    }
                }

                function n(e, n, i, r, s, o, c) {
                    var l, h, u, d, f = Math.floor(e[0]),
                        p = Math.floor(e[1]),
                        g = Math.ceil(e[2]) - f,
                        m = Math.ceil(e[3]) - p,
                        v = Math.min(Math.ceil(Math.abs(g * n[0] * 1.1)), 3e3),
                        b = Math.min(Math.ceil(Math.abs(m * n[1] * 1.1)), 3e3),
                        y = g / v,
                        w = m / b,
                        A = {
                            coords: i,
                            colors: r,
                            offsetX: -f,
                            offsetY: -p,
                            scaleX: 1 / y,
                            scaleY: 1 / w
                        },
                        S = v + 4,
                        P = b + 4;
                    if (a.WebGLUtils.isEnabled) l = a.WebGLUtils.drawFigures(v, b, o, s, A), h = c.getCanvas("mesh", S, P, !1), h.context.drawImage(l, 2, 2), l = h.canvas;
                    else {
                        h = c.getCanvas("mesh", S, P, !1);
                        var _ = h.context,
                            C = _.createImageData(v, b);
                        if (o) {
                            var x = C.data;
                            for (u = 0, d = x.length; u < d; u += 4) x[u] = o[0], x[u + 1] = o[1], x[u + 2] = o[2], x[u + 3] = 255
                        }
                        for (u = 0; u < s.length; u++) t(C, s[u], A);
                        _.putImageData(C, 2, 2), l = h.canvas
                    }
                    return {
                        canvas: l,
                        offsetX: f - 2 * y,
                        offsetY: p - 2 * w,
                        scaleX: y,
                        scaleY: w
                    }
                }
                return n
            }();
            s.Mesh = {
                fromIR: function(e) {
                    var t = e[2],
                        n = e[3],
                        i = e[4],
                        a = e[5],
                        s = e[6],
                        c = e[8];
                    return {
                        type: "Pattern",
                        getPattern: function(e, l, h) {
                            var u;
                            if (h) u = r.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
                            else if (u = r.Util.singularValueDecompose2dScale(l.baseTransform), s) {
                                var d = r.Util.singularValueDecompose2dScale(s);
                                u = [u[0] * d[0], u[1] * d[1]]
                            }
                            var f = o(a, u, t, n, i, h ? null : c, l.cachedCanvases);
                            return h || (e.setTransform.apply(e, l.baseTransform), s && e.transform.apply(e, s)), e.translate(f.offsetX, f.offsetY), e.scale(f.scaleX, f.scaleY), e.createPattern(f.canvas, "no-repeat")
                        }
                    }
                }
            }, s.Dummy = {
                fromIR: function() {
                    return {
                        type: "Pattern",
                        getPattern: function() {
                            return "hotpink"
                        }
                    }
                }
            };
            var c = function() {
                function e(e, t, n, i, a) {
                    this.operatorList = e[2], this.matrix = e[3] || [1, 0, 0, 1, 0, 0], this.bbox = r.Util.normalizeRect(e[4]), this.xstep = e[5], this.ystep = e[6], this.paintType = e[7], this.tilingType = e[8], this.color = t, this.canvasGraphicsFactory = i, this.baseTransform = a, this.type = "Pattern", this.ctx = n
                }
                var t = {
                    COLORED: 1,
                    UNCOLORED: 2
                };
                return e.prototype = {
                    createPatternCanvas: function(e) {
                        var t = this.operatorList,
                            n = this.bbox,
                            i = this.xstep,
                            a = this.ystep,
                            s = this.paintType,
                            o = this.tilingType,
                            c = this.color,
                            l = this.canvasGraphicsFactory;
                        (0, r.info)("TilingType: " + o);
                        var h = n[0],
                            u = n[1],
                            d = n[2],
                            f = n[3],
                            p = [h, u],
                            g = [h + i, u + a],
                            m = g[0] - p[0],
                            v = g[1] - p[1],
                            b = r.Util.singularValueDecompose2dScale(this.matrix),
                            y = r.Util.singularValueDecompose2dScale(this.baseTransform),
                            w = [b[0] * y[0], b[1] * y[1]];
                        m = Math.min(Math.ceil(Math.abs(m * w[0])), 3e3), v = Math.min(Math.ceil(Math.abs(v * w[1])), 3e3);
                        var A = e.cachedCanvases.getCanvas("pattern", m, v, !0),
                            S = A.context,
                            P = l.createCanvasGraphics(S);
                        P.groupLevel = e.groupLevel, this.setFillAndStrokeStyleToContext(S, s, c), this.setScale(m, v, i, a), this.transformToScale(P);
                        var _ = [1, 0, 0, 1, -p[0], -p[1]];
                        return P.transform.apply(P, _), this.clipBbox(P, n, h, u, d, f), P.executeOperatorList(t), A.canvas
                    },
                    setScale: function(e, t, n, i) {
                        this.scale = [e / n, t / i]
                    },
                    transformToScale: function(e) {
                        var t = this.scale,
                            n = [t[0], 0, 0, t[1], 0, 0];
                        e.transform.apply(e, n)
                    },
                    scaleToContext: function() {
                        var e = this.scale;
                        this.ctx.scale(1 / e[0], 1 / e[1])
                    },
                    clipBbox: function(e, t, n, i, a, s) {
                        if ((0, r.isArray)(t) && 4 === t.length) {
                            var o = a - n,
                                c = s - i;
                            e.ctx.rect(n, i, o, c), e.clip(), e.endPath()
                        }
                    },
                    setFillAndStrokeStyleToContext: function(e, n, i) {
                        switch (n) {
                            case t.COLORED:
                                var a = this.ctx;
                                e.fillStyle = a.fillStyle, e.strokeStyle = a.strokeStyle;
                                break;
                            case t.UNCOLORED:
                                var s = r.Util.makeCssRgb(i[0], i[1], i[2]);
                                e.fillStyle = s, e.strokeStyle = s;
                                break;
                            default:
                                (0, r.error)("Unsupported paint type: " + n)
                        }
                    },
                    getPattern: function(e, t) {
                        var n = this.createPatternCanvas(t);
                        return e = this.ctx, e.setTransform.apply(e, this.baseTransform), e.transform.apply(e, this.matrix), this.scaleToContext(), e.createPattern(n, "repeat")
                    }
                }, e
            }();
            t.getShadingPatternFromIR = i, t.TilingPattern = c
        }, function(e, t, n) {
            var i = n(0),
                r = n(9),
                a = n(3),
                s = n(5),
                o = n(2),
                c = n(1),
                l = n(4);
            t.PDFJS = r.PDFJS, t.build = a.build, t.version = a.version, t.getDocument = a.getDocument, t.PDFDataRangeTransport = a.PDFDataRangeTransport, t.PDFWorker = a.PDFWorker, t.renderTextLayer = s.renderTextLayer, t.AnnotationLayer = o.AnnotationLayer, t.CustomStyle = c.CustomStyle, t.createPromiseCapability = i.createPromiseCapability, t.PasswordResponses = i.PasswordResponses, t.InvalidPDFException = i.InvalidPDFException, t.MissingPDFException = i.MissingPDFException, t.SVGGraphics = l.SVGGraphics, t.UnexpectedResponseException = i.UnexpectedResponseException, t.OPS = i.OPS, t.UNSUPPORTED_FEATURES = i.UNSUPPORTED_FEATURES, t.isValidUrl = c.isValidUrl, t.createValidAbsoluteUrl = i.createValidAbsoluteUrl, t.createObjectURL = i.createObjectURL, t.removeNullCharacters = i.removeNullCharacters, t.shadow = i.shadow, t.createBlob = i.createBlob, t.RenderingCancelledException = c.RenderingCancelledException, t.getFilenameFromUrl = c.getFilenameFromUrl, t.addLinkAttributes = c.addLinkAttributes
        }, function(e, t, n) {
            (function(e) {
                var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                };
                if ("undefined" == typeof PDFJS || !PDFJS.compatibilityChecked) {
                    var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : void 0,
                        i = "undefined" != typeof navigator && navigator.userAgent || "",
                        r = /Android/.test(i),
                        a = /Android\s[0-2][^\d]/.test(i),
                        s = /Android\s[0-4][^\d]/.test(i),
                        o = i.indexOf("Chrom") >= 0,
                        c = /Chrome\/(39|40)\./.test(i),
                        l = i.indexOf("CriOS") >= 0,
                        h = i.indexOf("Trident") >= 0,
                        u = /\b(iPad|iPhone|iPod)(?=;)/.test(i),
                        d = i.indexOf("Opera") >= 0,
                        f = /Safari\//.test(i) && !/(Chrome\/|Android\s)/.test(i),
                        p = "object" === ("undefined" == typeof window ? "undefined" : t(window)) && "object" === ("undefined" == typeof document ? "undefined" : t(document));
                    "undefined" == typeof PDFJS && (n.PDFJS = {}), PDFJS.compatibilityChecked = !0,
                        function() {
                            function e(e, t) {
                                return new o(this.slice(e, t))
                            }

                            function i(e, t) {
                                arguments.length < 2 && (t = 0);
                                for (var n = 0, i = e.length; n < i; ++n, ++t) this[t] = 255 & e[n]
                            }

                            function r(e, t) {
                                this.buffer = e, this.byteLength = e.length, this.length = t, s(this.length)
                            }

                            function a(e) {
                                return {
                                    get: function() {
                                        var t = this.buffer,
                                            n = e << 2;
                                        return (t[n] | t[n + 1] << 8 | t[n + 2] << 16 | t[n + 3] << 24) >>> 0
                                    },
                                    set: function(t) {
                                        var n = this.buffer,
                                            i = e << 2;
                                        n[i] = 255 & t, n[i + 1] = t >> 8 & 255, n[i + 2] = t >> 16 & 255, n[i + 3] = t >>> 24 & 255
                                    }
                                }
                            }

                            function s(e) {
                                for (; c < e;) Object.defineProperty(r.prototype, c, a(c)), c++
                            }

                            function o(n) {
                                var r, a, s;
                                if ("number" == typeof n)
                                    for (r = [], a = 0; a < n; ++a) r[a] = 0;
                                else if ("slice" in n) r = n.slice(0);
                                else
                                    for (r = [], a = 0, s = n.length; a < s; ++a) r[a] = n[a];
                                return r.subarray = e, r.buffer = r, r.byteLength = r.length, r.set = i, "object" === (void 0 === n ? "undefined" : t(n)) && n.buffer && (r.buffer = n.buffer), r
                            }
                            if ("undefined" != typeof Uint8Array) return void 0 === Uint8Array.prototype.subarray && (Uint8Array.prototype.subarray = function(e, t) {
                                return new Uint8Array(this.slice(e, t))
                            }, Float32Array.prototype.subarray = function(e, t) {
                                return new Float32Array(this.slice(e, t))
                            }), void("undefined" == typeof Float64Array && (n.Float64Array = Float32Array));
                            r.prototype = Object.create(null);
                            var c = 0;
                            n.Uint8Array = o, n.Int8Array = o, n.Int32Array = o, n.Uint16Array = o, n.Float32Array = o, n.Float64Array = o, n.Uint32Array = function() {
                                if (3 === arguments.length) {
                                    if (0 !== arguments[1]) throw new Error("offset !== 0 is not supported");
                                    return new r(arguments[0], arguments[2])
                                }
                                return o.apply(this, arguments)
                            }
                        }(),
                        function() {
                            if (p && window.CanvasPixelArray) {
                                var e = window.CanvasPixelArray.prototype;
                                "buffer" in e || (Object.defineProperty(e, "buffer", {
                                    get: function() {
                                        return this
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }), Object.defineProperty(e, "byteLength", {
                                    get: function() {
                                        return this.length
                                    },
                                    enumerable: !1,
                                    configurable: !0
                                }))
                            }
                        }(),
                        function() {
                            n.URL || (n.URL = n.webkitURL)
                        }(),
                        function() {
                            if (void 0 !== Object.defineProperty) {
                                var e = !0;
                                try {
                                    p && Object.defineProperty(new Image, "id", {
                                        value: "test"
                                    });
                                    var t = function() {};
                                    t.prototype = {
                                        get id() {}
                                    }, Object.defineProperty(new t, "id", {
                                        value: "",
                                        configurable: !0,
                                        enumerable: !0,
                                        writable: !1
                                    })
                                } catch (t) {
                                    e = !1
                                }
                                if (e) return
                            }
                            Object.defineProperty = function(e, t, n) {
                                delete e[t], "get" in n && e.__defineGetter__(t, n.get), "set" in n && e.__defineSetter__(t, n.set), "value" in n && (e.__defineSetter__(t, function(e) {
                                    return this.__defineGetter__(t, function() {
                                        return e
                                    }), e
                                }), e[t] = n.value)
                            }
                        }(),
                        function() {
                            if ("undefined" != typeof XMLHttpRequest) {
                                var e = XMLHttpRequest.prototype,
                                    t = new XMLHttpRequest;
                                if ("overrideMimeType" in t || Object.defineProperty(e, "overrideMimeType", {
                                        value: function(e) {}
                                    }), !("responseType" in t)) {
                                    if (Object.defineProperty(e, "responseType", {
                                            get: function() {
                                                return this._responseType || "text"
                                            },
                                            set: function(e) {
                                                "text" !== e && "arraybuffer" !== e || (this._responseType = e, "arraybuffer" === e && "function" == typeof this.overrideMimeType && this.overrideMimeType("text/plain; charset=x-user-defined"))
                                            }
                                        }), "undefined" != typeof VBArray) return void Object.defineProperty(e, "response", {
                                        get: function() {
                                            return "arraybuffer" === this.responseType ? new Uint8Array(new VBArray(this.responseBody).toArray()) : this.responseText
                                        }
                                    });
                                    Object.defineProperty(e, "response", {
                                        get: function() {
                                            if ("arraybuffer" !== this.responseType) return this.responseText;
                                            var e, t = this.responseText,
                                                n = t.length,
                                                i = new Uint8Array(n);
                                            for (e = 0; e < n; ++e) i[e] = 255 & t.charCodeAt(e);
                                            return i.buffer
                                        }
                                    })
                                }
                            }
                        }(),
                        function() {
                            if (!("btoa" in n)) {
                                var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                                n.btoa = function(t) {
                                    var n, i, r = "";
                                    for (n = 0, i = t.length; n < i; n += 3) {
                                        var a = 255 & t.charCodeAt(n),
                                            s = 255 & t.charCodeAt(n + 1),
                                            o = 255 & t.charCodeAt(n + 2),
                                            c = a >> 2,
                                            l = (3 & a) << 4 | s >> 4,
                                            h = n + 1 < i ? (15 & s) << 2 | o >> 6 : 64,
                                            u = n + 2 < i ? 63 & o : 64;
                                        r += e.charAt(c) + e.charAt(l) + e.charAt(h) + e.charAt(u)
                                    }
                                    return r
                                }
                            }
                        }(),
                        function() {
                            if (!("atob" in n)) {
                                n.atob = function(e) {
                                    if (e = e.replace(/=+$/, ""), e.length % 4 == 1) throw new Error("bad atob input");
                                    for (var t, n, i = 0, r = 0, a = ""; n = e.charAt(r++); ~n && (t = i % 4 ? 64 * t + n : n, i++ % 4) ? a += String.fromCharCode(255 & t >> (-2 * i & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                                    return a
                                }
                            }
                        }(),
                        function() {
                            void 0 === Function.prototype.bind && (Function.prototype.bind = function(e) {
                                var t = this,
                                    n = Array.prototype.slice.call(arguments, 1);
                                return function() {
                                    var i = n.concat(Array.prototype.slice.call(arguments));
                                    return t.apply(e, i)
                                }
                            })
                        }(),
                        function() {
                            if (p) {
                                "dataset" in document.createElement("div") || Object.defineProperty(HTMLElement.prototype, "dataset", {
                                    get: function() {
                                        if (this._dataset) return this._dataset;
                                        for (var e = {}, t = 0, n = this.attributes.length; t < n; t++) {
                                            var i = this.attributes[t];
                                            if ("data-" === i.name.substring(0, 5)) {
                                                e[i.name.substring(5).replace(/\-([a-z])/g, function(e, t) {
                                                    return t.toUpperCase()
                                                })] = i.value
                                            }
                                        }
                                        return Object.defineProperty(this, "_dataset", {
                                            value: e,
                                            writable: !1,
                                            enumerable: !1
                                        }), e
                                    },
                                    enumerable: !0
                                })
                            }
                        }(),
                        function() {
                            function e(e, t, n, i) {
                                var r = e.className || "",
                                    a = r.split(/\s+/g);
                                "" === a[0] && a.shift();
                                var s = a.indexOf(t);
                                return s < 0 && n && a.push(t), s >= 0 && i && a.splice(s, 1), e.className = a.join(" "), s >= 0
                            }
                            if (p) {
                                if (!("classList" in document.createElement("div"))) {
                                    var t = {
                                        add: function(t) {
                                            e(this.element, t, !0, !1)
                                        },
                                        contains: function(t) {
                                            return e(this.element, t, !1, !1)
                                        },
                                        remove: function(t) {
                                            e(this.element, t, !1, !0)
                                        },
                                        toggle: function(t) {
                                            e(this.element, t, !0, !0)
                                        }
                                    };
                                    Object.defineProperty(HTMLElement.prototype, "classList", {
                                        get: function() {
                                            if (this._classList) return this._classList;
                                            var e = Object.create(t, {
                                                element: {
                                                    value: this,
                                                    writable: !1,
                                                    enumerable: !0
                                                }
                                            });
                                            return Object.defineProperty(this, "_classList", {
                                                value: e,
                                                writable: !1,
                                                enumerable: !1
                                            }), e
                                        },
                                        enumerable: !0
                                    })
                                }
                            }
                        }(),
                        function() {
                            if (!("undefined" == typeof importScripts || "console" in n)) {
                                var e = {},
                                    t = {
                                        log: function() {
                                            var e = Array.prototype.slice.call(arguments);
                                            n.postMessage({
                                                targetName: "main",
                                                action: "console_log",
                                                data: e
                                            })
                                        },
                                        error: function() {
                                            var e = Array.prototype.slice.call(arguments);
                                            n.postMessage({
                                                targetName: "main",
                                                action: "console_error",
                                                data: e
                                            })
                                        },
                                        time: function(t) {
                                            e[t] = Date.now()
                                        },
                                        timeEnd: function(t) {
                                            var n = e[t];
                                            if (!n) throw new Error("Unknown timer name " + t);
                                            this.log("Timer:", t, Date.now() - n)
                                        }
                                    };
                                n.console = t
                            }
                        }(),
                        function() {
                            if (p) "console" in window ? "bind" in console.log || (console.log = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }(console.log), console.error = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }(console.error), console.warn = function(e) {
                                return function(t) {
                                    return e(t)
                                }
                            }(console.warn)) : window.console = {
                                log: function() {},
                                error: function() {},
                                warn: function() {}
                            }
                        }(),
                        function() {
                            function e(e) {
                                t(e.target) && e.stopPropagation()
                            }

                            function t(e) {
                                return e.disabled || e.parentNode && t(e.parentNode)
                            }
                            d && document.addEventListener("click", e, !0)
                        }(),
                        function() {
                            (h || l) && (PDFJS.disableCreateObjectURL = !0)
                        }(),
                        function() {
                            "undefined" != typeof navigator && ("language" in navigator || (PDFJS.locale = navigator.userLanguage || "en-US"))
                        }(),
                        function() {
                            (f || a || c || u) && (PDFJS.disableRange = !0, PDFJS.disableStream = !0)
                        }(),
                        function() {
                            p && (history.pushState && !a || (PDFJS.disableHistory = !0))
                        }(),
                        function() {
                            if (p)
                                if (window.CanvasPixelArray) "function" != typeof window.CanvasPixelArray.prototype.set && (window.CanvasPixelArray.prototype.set = function(e) {
                                    for (var t = 0, n = this.length; t < n; t++) this[t] = e[t]
                                });
                                else {
                                    var e, t = !1;
                                    if (o ? (e = i.match(/Chrom(e|ium)\/([0-9]+)\./), t = e && parseInt(e[2]) < 21) : r ? t = s : f && (e = i.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//), t = e && parseInt(e[1]) < 6), t) {
                                        var n = window.CanvasRenderingContext2D.prototype,
                                            a = n.createImageData;
                                        n.createImageData = function(e, t) {
                                            var n = a.call(this, e, t);
                                            return n.data.set = function(e) {
                                                for (var t = 0, n = this.length; t < n; t++) this[t] = e[t]
                                            }, n
                                        }, n = null
                                    }
                                }
                        }(),
                        function() {
                            function e() {
                                window.requestAnimationFrame = function(e) {
                                    return window.setTimeout(e, 20)
                                }, window.cancelAnimationFrame = function(e) {
                                    window.clearTimeout(e)
                                }
                            }
                            if (p) u ? e() : "requestAnimationFrame" in window || (window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame || e())
                        }(),
                        function() {
                            (u || r) && (PDFJS.maxCanvasPixels = 5242880)
                        }(),
                        function() {
                            p && h && window.parent !== window && (PDFJS.disableFullscreen = !0)
                        }(),
                        function() {
                            p && ("currentScript" in document || Object.defineProperty(document, "currentScript", {
                                get: function() {
                                    var e = document.getElementsByTagName("script");
                                    return e[e.length - 1]
                                },
                                enumerable: !0,
                                configurable: !0
                            }))
                        }(),
                        function() {
                            if (p) {
                                var e = document.createElement("input");
                                try {
                                    e.type = "number"
                                } catch (i) {
                                    var t = e.constructor.prototype,
                                        n = Object.getOwnPropertyDescriptor(t, "type");
                                    Object.defineProperty(t, "type", {
                                        get: function() {
                                            return n.get.call(this)
                                        },
                                        set: function(e) {
                                            n.set.call(this, "number" === e ? "text" : e)
                                        },
                                        enumerable: !0,
                                        configurable: !0
                                    })
                                }
                            }
                        }(),
                        function() {
                            if (p && document.attachEvent) {
                                var e = document.constructor.prototype,
                                    t = Object.getOwnPropertyDescriptor(e, "readyState");
                                Object.defineProperty(e, "readyState", {
                                    get: function() {
                                        var e = t.get.call(this);
                                        return "interactive" === e ? "loading" : e
                                    },
                                    set: function(e) {
                                        t.set.call(this, e)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                })
                            }
                        }(),
                        function() {
                            p && void 0 === Element.prototype.remove && (Element.prototype.remove = function() {
                                this.parentNode && this.parentNode.removeChild(this)
                            })
                        }(),
                        function() {
                            if (n.Promise) return "function" != typeof n.Promise.all && (n.Promise.all = function(e) {
                                var t, i, r = 0,
                                    a = [],
                                    s = new n.Promise(function(e, n) {
                                        t = e, i = n
                                    });
                                return e.forEach(function(e, n) {
                                    r++, e.then(function(e) {
                                        a[n] = e, 0 === --r && t(a)
                                    }, i)
                                }), 0 === r && t(a), s
                            }), "function" != typeof n.Promise.resolve && (n.Promise.resolve = function(e) {
                                return new n.Promise(function(t) {
                                    t(e)
                                })
                            }), "function" != typeof n.Promise.reject && (n.Promise.reject = function(e) {
                                return new n.Promise(function(t, n) {
                                    n(e)
                                })
                            }), void("function" != typeof n.Promise.prototype.catch && (n.Promise.prototype.catch = function(e) {
                                return n.Promise.prototype.then(void 0, e)
                            }));
                            var e = 2,
                                t = {
                                    handlers: [],
                                    running: !1,
                                    unhandledRejections: [],
                                    pendingRejectionCheck: !1,
                                    scheduleHandlers: function(e) {
                                        0 !== e._status && (this.handlers = this.handlers.concat(e._handlers), e._handlers = [], this.running || (this.running = !0, setTimeout(this.runHandlers.bind(this), 0)))
                                    },
                                    runHandlers: function() {
                                        for (var t = Date.now() + 1; this.handlers.length > 0;) {
                                            var n = this.handlers.shift(),
                                                i = n.thisPromise._status,
                                                r = n.thisPromise._value;
                                            try {
                                                1 === i ? "function" == typeof n.onResolve && (r = n.onResolve(r)) : "function" == typeof n.onReject && (r = n.onReject(r), i = 1, n.thisPromise._unhandledRejection && this.removeUnhandeledRejection(n.thisPromise))
                                            } catch (t) {
                                                i = e, r = t
                                            }
                                            if (n.nextPromise._updateStatus(i, r), Date.now() >= t) break
                                        }
                                        if (this.handlers.length > 0) return void setTimeout(this.runHandlers.bind(this), 0);
                                        this.running = !1
                                    },
                                    addUnhandledRejection: function(e) {
                                        this.unhandledRejections.push({
                                            promise: e,
                                            time: Date.now()
                                        }), this.scheduleRejectionCheck()
                                    },
                                    removeUnhandeledRejection: function(e) {
                                        e._unhandledRejection = !1;
                                        for (var t = 0; t < this.unhandledRejections.length; t++) this.unhandledRejections[t].promise === e && (this.unhandledRejections.splice(t), t--)
                                    },
                                    scheduleRejectionCheck: function() {
                                        this.pendingRejectionCheck || (this.pendingRejectionCheck = !0, setTimeout(function() {
                                            this.pendingRejectionCheck = !1;
                                            for (var e = Date.now(), t = 0; t < this.unhandledRejections.length; t++)
                                                if (e - this.unhandledRejections[t].time > 500) {
                                                    var n = this.unhandledRejections[t].promise._value,
                                                        i = "Unhandled rejection: " + n;
                                                    n.stack && (i += "\n" + n.stack);
                                                    try {
                                                        throw new Error(i)
                                                    } catch (e) {
                                                        console.warn(i)
                                                    }
                                                    this.unhandledRejections.splice(t), t--
                                                } this.unhandledRejections.length && this.scheduleRejectionCheck()
                                        }.bind(this), 500))
                                    }
                                },
                                i = function(e) {
                                    this._status = 0, this._handlers = [];
                                    try {
                                        e.call(this, this._resolve.bind(this), this._reject.bind(this))
                                    } catch (e) {
                                        this._reject(e)
                                    }
                                };
                            i.all = function(t) {
                                function n(t) {
                                    s._status !== e && (c = [], a(t))
                                }
                                var r, a, s = new i(function(e, t) {
                                        r = e, a = t
                                    }),
                                    o = t.length,
                                    c = [];
                                if (0 === o) return r(c), s;
                                for (var l = 0, h = t.length; l < h; ++l) {
                                    var u = t[l],
                                        d = function(t) {
                                            return function(n) {
                                                s._status !== e && (c[t] = n, 0 === --o && r(c))
                                            }
                                        }(l);
                                    i.isPromise(u) ? u.then(d, n) : d(u)
                                }
                                return s
                            }, i.isPromise = function(e) {
                                return e && "function" == typeof e.then
                            }, i.resolve = function(e) {
                                return new i(function(t) {
                                    t(e)
                                })
                            }, i.reject = function(e) {
                                return new i(function(t, n) {
                                    n(e)
                                })
                            }, i.prototype = {
                                _status: null,
                                _value: null,
                                _handlers: null,
                                _unhandledRejection: null,
                                _updateStatus: function(n, r) {
                                    if (1 !== this._status && this._status !== e) {
                                        if (1 === n && i.isPromise(r)) return void r.then(this._updateStatus.bind(this, 1), this._updateStatus.bind(this, e));
                                        this._status = n, this._value = r, n === e && 0 === this._handlers.length && (this._unhandledRejection = !0, t.addUnhandledRejection(this)), t.scheduleHandlers(this)
                                    }
                                },
                                _resolve: function(e) {
                                    this._updateStatus(1, e)
                                },
                                _reject: function(t) {
                                    this._updateStatus(e, t)
                                },
                                then: function(e, n) {
                                    var r = new i(function(e, t) {
                                        this.resolve = e, this.reject = t
                                    });
                                    return this._handlers.push({
                                        thisPromise: this,
                                        onResolve: e,
                                        onReject: n,
                                        nextPromise: r
                                    }), t.scheduleHandlers(this), r
                                },
                                catch: function(e) {
                                    return this.then(void 0, e)
                                }
                            }, n.Promise = i
                        }(),
                        function() {
                            function e() {
                                this.id = "$weakmap" + t++
                            }
                            if (!n.WeakMap) {
                                var t = 0;
                                e.prototype = {
                                    has: function(e) {
                                        return !!Object.getOwnPropertyDescriptor(e, this.id)
                                    },
                                    get: function(e, t) {
                                        return this.has(e) ? e[this.id] : t
                                    },
                                    set: function(e, t) {
                                        Object.defineProperty(e, this.id, {
                                            value: t,
                                            enumerable: !1,
                                            configurable: !0
                                        })
                                    },
                                    delete: function(e) {
                                        delete e[this.id]
                                    }
                                }, n.WeakMap = e
                            }
                        }(),
                        function() {
                            function e(e) {
                                return void 0 !== d[e]
                            }

                            function i() {
                                c.call(this), this._isInvalid = !0
                            }

                            function r(e) {
                                return "" === e && i.call(this), e.toLowerCase()
                            }

                            function a(e) {
                                var t = e.charCodeAt(0);
                                return t > 32 && t < 127 && -1 === [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
                            }

                            function s(e) {
                                var t = e.charCodeAt(0);
                                return t > 32 && t < 127 && -1 === [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
                            }

                            function o(t, n, o) {
                                function c(e) {
                                    y.push(e)
                                }
                                var l = n || "scheme start",
                                    h = 0,
                                    u = "",
                                    v = !1,
                                    b = !1,
                                    y = [];
                                e: for (;
                                    (t[h - 1] !== p || 0 === h) && !this._isInvalid;) {
                                    var w = t[h];
                                    switch (l) {
                                        case "scheme start":
                                            if (!w || !g.test(w)) {
                                                if (n) {
                                                    c("Invalid scheme.");
                                                    break e
                                                }
                                                u = "", l = "no scheme";
                                                continue
                                            }
                                            u += w.toLowerCase(), l = "scheme";
                                            break;
                                        case "scheme":
                                            if (w && m.test(w)) u += w.toLowerCase();
                                            else {
                                                if (":" !== w) {
                                                    if (n) {
                                                        if (w === p) break e;
                                                        c("Code point not allowed in scheme: " + w);
                                                        break e
                                                    }
                                                    u = "", h = 0, l = "no scheme";
                                                    continue
                                                }
                                                if (this._scheme = u, u = "", n) break e;
                                                e(this._scheme) && (this._isRelative = !0), l = "file" === this._scheme ? "relative" : this._isRelative && o && o._scheme === this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                                            }
                                            break;
                                        case "scheme data":
                                            "?" === w ? (this._query = "?", l = "query") : "#" === w ? (this._fragment = "#", l = "fragment") : w !== p && "\t" !== w && "\n" !== w && "\r" !== w && (this._schemeData += a(w));
                                            break;
                                        case "no scheme":
                                            if (o && e(o._scheme)) {
                                                l = "relative";
                                                continue
                                            }
                                            c("Missing scheme."), i.call(this);
                                            break;
                                        case "relative or authority":
                                            if ("/" !== w || "/" !== t[h + 1]) {
                                                c("Expected /, got: " + w), l = "relative";
                                                continue
                                            }
                                            l = "authority ignore slashes";
                                            break;
                                        case "relative":
                                            if (this._isRelative = !0, "file" !== this._scheme && (this._scheme = o._scheme), w === p) {
                                                this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = o._query, this._username = o._username, this._password = o._password;
                                                break e
                                            }
                                            if ("/" === w || "\\" === w) "\\" === w && c("\\ is an invalid code point."), l = "relative slash";
                                            else if ("?" === w) this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = "?", this._username = o._username, this._password = o._password, l = "query";
                                            else {
                                                if ("#" !== w) {
                                                    var A = t[h + 1],
                                                        S = t[h + 2];
                                                    ("file" !== this._scheme || !g.test(w) || ":" !== A && "|" !== A || S !== p && "/" !== S && "\\" !== S && "?" !== S && "#" !== S) && (this._host = o._host, this._port = o._port, this._username = o._username, this._password = o._password, this._path = o._path.slice(), this._path.pop()), l = "relative path";
                                                    continue
                                                }
                                                this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = o._query, this._fragment = "#", this._username = o._username, this._password = o._password, l = "fragment"
                                            }
                                            break;
                                        case "relative slash":
                                            if ("/" !== w && "\\" !== w) {
                                                "file" !== this._scheme && (this._host = o._host, this._port = o._port, this._username = o._username, this._password = o._password), l = "relative path";
                                                continue
                                            }
                                            "\\" === w && c("\\ is an invalid code point."), l = "file" === this._scheme ? "file host" : "authority ignore slashes";
                                            break;
                                        case "authority first slash":
                                            if ("/" !== w) {
                                                c("Expected '/', got: " + w), l = "authority ignore slashes";
                                                continue
                                            }
                                            l = "authority second slash";
                                            break;
                                        case "authority second slash":
                                            if (l = "authority ignore slashes", "/" !== w) {
                                                c("Expected '/', got: " + w);
                                                continue
                                            }
                                            break;
                                        case "authority ignore slashes":
                                            if ("/" !== w && "\\" !== w) {
                                                l = "authority";
                                                continue
                                            }
                                            c("Expected authority, got: " + w);
                                            break;
                                        case "authority":
                                            if ("@" === w) {
                                                v && (c("@ already seen."), u += "%40"), v = !0;
                                                for (var P = 0; P < u.length; P++) {
                                                    var _ = u[P];
                                                    if ("\t" !== _ && "\n" !== _ && "\r" !== _)
                                                        if (":" !== _ || null !== this._password) {
                                                            var C = a(_);
                                                            null !== this._password ? this._password += C : this._username += C
                                                        } else this._password = "";
                                                    else c("Invalid whitespace in authority.")
                                                }
                                                u = ""
                                            } else {
                                                if (w === p || "/" === w || "\\" === w || "?" === w || "#" === w) {
                                                    h -= u.length, u = "", l = "host";
                                                    continue
                                                }
                                                u += w
                                            }
                                            break;
                                        case "file host":
                                            if (w === p || "/" === w || "\\" === w || "?" === w || "#" === w) {
                                                2 !== u.length || !g.test(u[0]) || ":" !== u[1] && "|" !== u[1] ? 0 === u.length ? l = "relative path start" : (this._host = r.call(this, u), u = "", l = "relative path start") : l = "relative path";
                                                continue
                                            }
                                            "\t" === w || "\n" === w || "\r" === w ? c("Invalid whitespace in file host.") : u += w;
                                            break;
                                        case "host":
                                        case "hostname":
                                            if (":" !== w || b) {
                                                if (w === p || "/" === w || "\\" === w || "?" === w || "#" === w) {
                                                    if (this._host = r.call(this, u), u = "", l = "relative path start", n) break e;
                                                    continue
                                                }
                                                "\t" !== w && "\n" !== w && "\r" !== w ? ("[" === w ? b = !0 : "]" === w && (b = !1), u += w) : c("Invalid code point in host/hostname: " + w)
                                            } else if (this._host = r.call(this, u), u = "", l = "port", "hostname" === n) break e;
                                            break;
                                        case "port":
                                            if (/[0-9]/.test(w)) u += w;
                                            else {
                                                if (w === p || "/" === w || "\\" === w || "?" === w || "#" === w || n) {
                                                    if ("" !== u) {
                                                        var x = parseInt(u, 10);
                                                        x !== d[this._scheme] && (this._port = x + ""), u = ""
                                                    }
                                                    if (n) break e;
                                                    l = "relative path start";
                                                    continue
                                                }
                                                "\t" === w || "\n" === w || "\r" === w ? c("Invalid code point in port: " + w) : i.call(this)
                                            }
                                            break;
                                        case "relative path start":
                                            if ("\\" === w && c("'\\' not allowed in path."), l = "relative path", "/" !== w && "\\" !== w) continue;
                                            break;
                                        case "relative path":
                                            if (w !== p && "/" !== w && "\\" !== w && (n || "?" !== w && "#" !== w)) "\t" !== w && "\n" !== w && "\r" !== w && (u += a(w));
                                            else {
                                                "\\" === w && c("\\ not allowed in relative path.");
                                                var L;
                                                (L = f[u.toLowerCase()]) && (u = L), ".." === u ? (this._path.pop(), "/" !== w && "\\" !== w && this._path.push("")) : "." === u && "/" !== w && "\\" !== w ? this._path.push("") : "." !== u && ("file" === this._scheme && 0 === this._path.length && 2 === u.length && g.test(u[0]) && "|" === u[1] && (u = u[0] + ":"), this._path.push(u)), u = "", "?" === w ? (this._query = "?", l = "query") : "#" === w && (this._fragment = "#", l = "fragment")
                                            }
                                            break;
                                        case "query":
                                            n || "#" !== w ? w !== p && "\t" !== w && "\n" !== w && "\r" !== w && (this._query += s(w)) : (this._fragment = "#", l = "fragment");
                                            break;
                                        case "fragment":
                                            w !== p && "\t" !== w && "\n" !== w && "\r" !== w && (this._fragment += w)
                                    }
                                    h++
                                }
                            }

                            function c() {
                                this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
                            }

                            function l(e, t) {
                                void 0 === t || t instanceof l || (t = new l(String(t))), this._url = e, c.call(this);
                                var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                                o.call(this, n, null, t)
                            }
                            var h = !1;
                            try {
                                if ("function" == typeof URL && "object" === t(URL.prototype) && "origin" in URL.prototype) {
                                    var u = new URL("b", "http://a");
                                    u.pathname = "c%20d", h = "http://a/c%20d" === u.href
                                }
                            } catch (e) {}
                            if (!h) {
                                var d = Object.create(null);
                                d.ftp = 21, d.file = 0, d.gopher = 70, d.http = 80, d.https = 443, d.ws = 80, d.wss = 443;
                                var f = Object.create(null);
                                f["%2e"] = ".", f[".%2e"] = "..", f["%2e."] = "..", f["%2e%2e"] = "..";
                                var p, g = /[a-zA-Z]/,
                                    m = /[a-zA-Z0-9\+\-\.]/;
                                l.prototype = {
                                    toString: function() {
                                        return this.href
                                    },
                                    get href() {
                                        if (this._isInvalid) return this._url;
                                        var e = "";
                                        return "" === this._username && null === this._password || (e = this._username + (null !== this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
                                    },
                                    set href(e) {
                                        c.call(this), o.call(this, e)
                                    },
                                    get protocol() {
                                        return this._scheme + ":"
                                    },
                                    set protocol(e) {
                                        this._isInvalid || o.call(this, e + ":", "scheme start")
                                    },
                                    get host() {
                                        return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                                    },
                                    set host(e) {
                                        !this._isInvalid && this._isRelative && o.call(this, e, "host")
                                    },
                                    get hostname() {
                                        return this._host
                                    },
                                    set hostname(e) {
                                        !this._isInvalid && this._isRelative && o.call(this, e, "hostname")
                                    },
                                    get port() {
                                        return this._port
                                    },
                                    set port(e) {
                                        !this._isInvalid && this._isRelative && o.call(this, e, "port")
                                    },
                                    get pathname() {
                                        return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                                    },
                                    set pathname(e) {
                                        !this._isInvalid && this._isRelative && (this._path = [], o.call(this, e, "relative path start"))
                                    },
                                    get search() {
                                        return this._isInvalid || !this._query || "?" === this._query ? "" : this._query
                                    },
                                    set search(e) {
                                        !this._isInvalid && this._isRelative && (this._query = "?", "?" === e[0] && (e = e.slice(1)), o.call(this, e, "query"))
                                    },
                                    get hash() {
                                        return this._isInvalid || !this._fragment || "#" === this._fragment ? "" : this._fragment
                                    },
                                    set hash(e) {
                                        this._isInvalid || (this._fragment = "#", "#" === e[0] && (e = e.slice(1)), o.call(this, e, "fragment"))
                                    },
                                    get origin() {
                                        var e;
                                        if (this._isInvalid || !this._scheme) return "";
                                        switch (this._scheme) {
                                            case "data":
                                            case "file":
                                            case "javascript":
                                            case "mailto":
                                                return "null"
                                        }
                                        return e = this.host, e ? this._scheme + "://" + e : ""
                                    }
                                };
                                var v = n.URL;
                                v && (l.createObjectURL = function(e) {
                                    return v.createObjectURL.apply(v, arguments)
                                }, l.revokeObjectURL = function(e) {
                                    v.revokeObjectURL(e)
                                }), n.URL = l
                            }
                        }()
                }
            }).call(t, n(6))
        }])
    }),
    function(e) {
        function t(i) {
            if (n[i]) return n[i].exports;
            var r = n[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        t.m = e, t.c = n, t.i = function(e) {
            return e
        }, t.d = function(e, n, i) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: i
            })
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 31)
    }([function(e, t, n) {
        function i(e) {
            var t = window.devicePixelRatio || 1,
                n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1,
                i = t / n;
            return {
                sx: i,
                sy: i,
                scaled: 1 !== i
            }
        }

        function r(e, t, n) {
            var i = e.offsetParent;
            if (!i) return void console.error("offsetParent is not set -- cannot scroll");
            for (var r = n || !1, a = e.offsetTop + e.clientTop, s = e.offsetLeft + e.clientLeft; i.clientHeight === i.scrollHeight || r && "hidden" === getComputedStyle(i).overflow;)
                if (i.dataset._scaleY && (a /= i.dataset._scaleY, s /= i.dataset._scaleX), a += i.offsetTop, s += i.offsetLeft, !(i = i.offsetParent)) return;
            t && (void 0 !== t.top && (a += t.top), void 0 !== t.left && (s += t.left, i.scrollLeft = s)), i.scrollTop = a
        }

        function a(e, t) {
            var n = function(n) {
                    r || (r = window.requestAnimationFrame(function() {
                        r = null;
                        var n = e.scrollTop,
                            a = i.lastY;
                        n !== a && (i.down = n > a), i.lastY = n, t(i)
                    }))
                },
                i = {
                    down: !0,
                    lastY: e.scrollTop,
                    _eventHandler: n
                },
                r = null;
            return e.addEventListener("scroll", n, !0), i
        }

        function s(e) {
            for (var t = e.split("&"), n = {}, i = 0, r = t.length; i < r; ++i) {
                var a = t[i].split("="),
                    s = a[0].toLowerCase(),
                    o = a.length > 1 ? a[1] : null;
                n[decodeURIComponent(s)] = decodeURIComponent(o)
            }
            return n
        }

        function o(e, t) {
            var n = 0,
                i = e.length - 1;
            if (0 === e.length || !t(e[i])) return e.length;
            if (t(e[n])) return n;
            for (; n < i;) {
                var r = n + i >> 1;
                t(e[r]) ? i = r : n = r + 1
            }
            return n
        }

        function c(e) {
            if (Math.floor(e) === e) return [e, 1];
            var t = 1 / e;
            if (t > 8) return [1, 8];
            if (Math.floor(t) === t) return [1, t];
            for (var n = e > 1 ? t : e, i = 0, r = 1, a = 1, s = 1;;) {
                var o = i + a,
                    c = r + s;
                if (c > 8) break;
                n <= o / c ? (a = o, s = c) : (i = o, r = c)
            }
            return n - i / r < a / s - n ? n === e ? [i, r] : [r, i] : n === e ? [a, s] : [s, a]
        }

        function l(e, t) {
            var n = e % t;
            return 0 === n ? e : Math.round(e - n + t)
        }

        function h(e, t, n) {
            function i(e) {
                var t = e.div;
                return t.offsetTop + t.clientTop + t.clientHeight > f
            }
            for (var r, a, s, c, l, h, u, d, f = e.scrollTop, p = f + e.clientHeight, g = e.scrollLeft, m = g + e.clientWidth, v = [], b = 0 === t.length ? 0 : o(t, i), y = b, w = t.length; y < w && (r = t[y], a = r.div, s = a.offsetTop + a.clientTop, c = a.clientHeight, !(s > p)); y++) u = a.offsetLeft + a.clientLeft, d = a.clientWidth, u + d < g || u > m || (l = Math.max(0, f - s) + Math.max(0, s + c - p), h = 100 * (c - l) / c | 0, v.push({
                id: r.id,
                x: u,
                y: s,
                view: r,
                percent: h
            }));
            var A = v[0],
                S = v[v.length - 1];
            return n && v.sort(function(e, t) {
                var n = e.percent - t.percent;
                return Math.abs(n) > .001 ? -n : e.id - t.id
            }), {
                first: A,
                last: S,
                views: v
            }
        }

        function u(e) {
            e.preventDefault()
        }

        function d(e) {
            for (var t = 0, n = e.length; t < n && "" === e[t].trim();) t++;
            return "data:" === e.substr(t, 5).toLowerCase()
        }

        function f(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "document.pdf";
            if (d(e)) return console.warn('getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'), t;
            var n = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
                i = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
                r = n.exec(e),
                a = i.exec(r[1]) || i.exec(r[2]) || i.exec(r[3]);
            if (a && (a = a[0], -1 !== a.indexOf("%"))) try {
                a = i.exec(decodeURIComponent(a))[0]
            } catch (e) {}
            return a || t
        }

        function p(e) {
            var t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY),
                n = Math.atan2(e.deltaY, e.deltaX); - .25 * Math.PI < n && n < .75 * Math.PI && (t = -t);
            return 0 === e.deltaMode ? t /= 900 : 1 === e.deltaMode && (t /= 30), t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.localized = t.animationStarted = t.normalizeWheelEventDelta = t.binarySearchFirstItem = t.watchScroll = t.scrollIntoView = t.getOutputScale = t.approximateFraction = t.roundToDivide = t.getVisibleElements = t.parseQueryString = t.noContextMenuHandler = t.getPDFFileNameFromURL = t.ProgressBar = t.EventBus = t.mozL10n = t.RendererType = t.VERTICAL_PADDING = t.SCROLLBAR_PADDING = t.MAX_AUTO_SCALE = t.UNKNOWN_SCALE = t.MAX_SCALE = t.MIN_SCALE = t.DEFAULT_SCALE = t.DEFAULT_SCALE_VALUE = t.CSS_UNITS = void 0;
        var g = n(1),
            m = {
                CANVAS: "canvas",
                SVG: "svg"
            },
            v = document.mozL10n || document.webL10n;
        g.PDFJS.disableFullscreen = void 0 !== g.PDFJS.disableFullscreen && g.PDFJS.disableFullscreen, g.PDFJS.useOnlyCssZoom = void 0 !== g.PDFJS.useOnlyCssZoom && g.PDFJS.useOnlyCssZoom, g.PDFJS.maxCanvasPixels = void 0 === g.PDFJS.maxCanvasPixels ? 16777216 : g.PDFJS.maxCanvasPixels, g.PDFJS.disableHistory = void 0 !== g.PDFJS.disableHistory && g.PDFJS.disableHistory, g.PDFJS.disableTextLayer = void 0 !== g.PDFJS.disableTextLayer && g.PDFJS.disableTextLayer, g.PDFJS.ignoreCurrentPositionOnZoom = void 0 !== g.PDFJS.ignoreCurrentPositionOnZoom && g.PDFJS.ignoreCurrentPositionOnZoom, g.PDFJS.locale = void 0 === g.PDFJS.locale ? navigator.language : g.PDFJS.locale;
        var b = new Promise(function(e) {
                window.requestAnimationFrame(e)
            }),
            y = new Promise(function(e, t) {
                return v ? "loading" !== v.getReadyState() ? void e() : void window.addEventListener("localized", function(t) {
                    e()
                }) : void e()
            }),
            w = function() {
                function e() {
                    this._listeners = Object.create(null)
                }
                return e.prototype = {
                    on: function(e, t) {
                        var n = this._listeners[e];
                        n || (n = [], this._listeners[e] = n), n.push(t)
                    },
                    off: function(e, t) {
                        var n, i = this._listeners[e];
                        !i || (n = i.indexOf(t)) < 0 || i.splice(n, 1)
                    },
                    dispatch: function(e) {
                        var t = this._listeners[e];
                        if (t && 0 !== t.length) {
                            var n = Array.prototype.slice.call(arguments, 1);
                            t.slice(0).forEach(function(e) {
                                e.apply(null, n)
                            })
                        }
                    }
                }, e
            }(),
            A = function() {
                function e(e, t, n) {
                    return Math.min(Math.max(e, t), n)
                }

                function t(e, t) {
                    this.visible = !0, this.div = document.querySelector(e + " .progress"), this.bar = this.div.parentNode, this.height = t.height || 100, this.width = t.width || 100, this.units = t.units || "%", this.div.style.height = this.height + this.units, this.percent = 0
                }
                return t.prototype = {
                    updateBar: function() {
                        if (this._indeterminate) return this.div.classList.add("indeterminate"), void(this.div.style.width = this.width + this.units);
                        this.div.classList.remove("indeterminate");
                        var e = this.width * this._percent / 100;
                        this.div.style.width = e + this.units
                    },
                    get percent() {
                        return this._percent
                    },
                    set percent(t) {
                        this._indeterminate = isNaN(t), this._percent = e(t, 0, 100), this.updateBar()
                    },
                    setWidth: function(e) {
                        if (e) {
                            var t = e.parentNode,
                                n = t.offsetWidth - e.offsetWidth;
                            n > 0 && this.bar.setAttribute("style", "width: calc(100% - " + n + "px);")
                        }
                    },
                    hide: function() {
                        this.visible && (this.visible = !1, this.bar.classList.add("hidden"), document.body.classList.remove("loadingInProgress"))
                    },
                    show: function() {
                        this.visible || (this.visible = !0, document.body.classList.add("loadingInProgress"), this.bar.classList.remove("hidden"))
                    }
                }, t
            }();
        t.CSS_UNITS = 96 / 72, t.DEFAULT_SCALE_VALUE = "auto", t.DEFAULT_SCALE = 1, t.MIN_SCALE = .25, t.MAX_SCALE = 10, t.UNKNOWN_SCALE = 0, t.MAX_AUTO_SCALE = 1.25, t.SCROLLBAR_PADDING = 40, t.VERTICAL_PADDING = 5, t.RendererType = m, t.mozL10n = v, t.EventBus = w, t.ProgressBar = A, t.getPDFFileNameFromURL = f, t.noContextMenuHandler = u, t.parseQueryString = s, t.getVisibleElements = h, t.roundToDivide = l, t.approximateFraction = c, t.getOutputScale = i, t.scrollIntoView = r, t.watchScroll = a, t.binarySearchFirstItem = o, t.normalizeWheelEventDelta = p, t.animationStarted = b, t.localized = y
    }, function(e, t, n) {
        var i;
        if ("undefined" == typeof __pdfjsdev_webpack__)
            if ("undefined" != typeof window && window["pdfjs-dist/build/pdf"]) i = window["pdfjs-dist/build/pdf"];
            else {
                if ("function" != typeof require) throw new Error("Neither `require` nor `window` found");
                i = require("../build/pdf.js")
            } e.exports = i
    }, function(e, t, n) {
        function i(e) {
            e.on("documentload", function() {
                var e = document.createEvent("CustomEvent");
                e.initCustomEvent("documentload", !0, !0, {}), window.dispatchEvent(e)
            }), e.on("pagerendered", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagerendered", !0, !0, {
                    pageNumber: e.pageNumber,
                    cssTransform: e.cssTransform
                }), e.source.div.dispatchEvent(t)
            }), e.on("textlayerrendered", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("textlayerrendered", !0, !0, {
                    pageNumber: e.pageNumber
                }), e.source.textLayerDiv.dispatchEvent(t)
            }), e.on("pagechange", function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("pagechange", !0, !0, window, 0), t.pageNumber = e.pageNumber, e.source.container.dispatchEvent(t)
            }), e.on("pagesinit", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagesinit", !0, !0, null), e.source.container.dispatchEvent(t)
            }), e.on("pagesloaded", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagesloaded", !0, !0, {
                    pagesCount: e.pagesCount
                }), e.source.container.dispatchEvent(t)
            }), e.on("scalechange", function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("scalechange", !0, !0, window, 0), t.scale = e.scale, t.presetValue = e.presetValue, e.source.container.dispatchEvent(t)
            }), e.on("updateviewarea", function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("updateviewarea", !0, !0, window, 0), t.location = e.location, e.source.container.dispatchEvent(t)
            }), e.on("find", function(e) {
                if (e.source !== window) {
                    var t = document.createEvent("CustomEvent");
                    t.initCustomEvent("find" + e.type, !0, !0, {
                        query: e.query,
                        phraseSearch: e.phraseSearch,
                        caseSensitive: e.caseSensitive,
                        highlightAll: e.highlightAll,
                        findPrevious: e.findPrevious
                    }), window.dispatchEvent(t)
                }
            }), e.on("attachmentsloaded", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("attachmentsloaded", !0, !0, {
                    attachmentsCount: e.attachmentsCount
                }), e.source.container.dispatchEvent(t)
            }), e.on("sidebarviewchanged", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("sidebarviewchanged", !0, !0, {
                    view: e.view
                }), e.source.outerContainer.dispatchEvent(t)
            }), e.on("pagemode", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("pagemode", !0, !0, {
                    mode: e.mode
                }), e.source.pdfViewer.container.dispatchEvent(t)
            }), e.on("namedaction", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("namedaction", !0, !0, {
                    action: e.action
                }), e.source.pdfViewer.container.dispatchEvent(t)
            }), e.on("presentationmodechanged", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("presentationmodechanged", !0, !0, {
                    active: e.active,
                    switchInProgress: e.switchInProgress
                }), window.dispatchEvent(t)
            }), e.on("outlineloaded", function(e) {
                var t = document.createEvent("CustomEvent");
                t.initCustomEvent("outlineloaded", !0, !0, {
                    outlineCount: e.outlineCount
                }), e.source.container.dispatchEvent(t)
            })
        }

        function r() {
            return s || (s = new a.EventBus, i(s), s)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobalEventBus = t.attachDOMEventsToEventBus = void 0;
        var a = n(0),
            s = null;
        t.attachDOMEventsToEventBus = i, t.getGlobalEventBus = r
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
                INITIAL: 0,
                RUNNING: 1,
                PAUSED: 2,
                FINISHED: 3
            },
            r = function() {
                function e() {
                    this.pdfViewer = null, this.pdfThumbnailViewer = null, this.onIdle = null, this.highestPriorityPage = null, this.idleTimeout = null, this.printing = !1, this.isThumbnailViewEnabled = !1
                }
                return e.prototype = {
                    setViewer: function(e) {
                        this.pdfViewer = e
                    },
                    setThumbnailViewer: function(e) {
                        this.pdfThumbnailViewer = e
                    },
                    isHighestPriority: function(e) {
                        return this.highestPriorityPage === e.renderingId
                    },
                    renderHighestPriority: function(e) {
                        this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), this.pdfViewer.forceRendering(e) || this.pdfThumbnailViewer && this.isThumbnailViewEnabled && this.pdfThumbnailViewer.forceRendering() || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), 3e4))
                    },
                    getHighestPriority: function(e, t, n) {
                        var i = e.views,
                            r = i.length;
                        if (0 === r) return !1;
                        for (var a = 0; a < r; ++a) {
                            var s = i[a].view;
                            if (!this.isViewFinished(s)) return s
                        }
                        if (n) {
                            var o = e.last.id;
                            if (t[o] && !this.isViewFinished(t[o])) return t[o]
                        } else {
                            var c = e.first.id - 2;
                            if (t[c] && !this.isViewFinished(t[c])) return t[c]
                        }
                        return null
                    },
                    isViewFinished: function(e) {
                        return e.renderingState === i.FINISHED
                    },
                    renderView: function(e) {
                        switch (e.renderingState) {
                            case i.FINISHED:
                                return !1;
                            case i.PAUSED:
                                this.highestPriorityPage = e.renderingId, e.resume();
                                break;
                            case i.RUNNING:
                                this.highestPriorityPage = e.renderingId;
                                break;
                            case i.INITIAL:
                                this.highestPriorityPage = e.renderingId;
                                var t = function() {
                                    this.renderHighestPriority()
                                }.bind(this);
                                e.draw().then(t, t)
                        }
                        return !0
                    }
                }, e
            }();
        t.RenderingStates = i, t.PDFRenderingQueue = r
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = {
            overlays: {},
            active: null,
            register: function(e, t, n, i) {
                return new Promise(function(r) {
                    var a;
                    if (!(e && t && (a = t.parentNode))) throw new Error("Not enough parameters.");
                    if (this.overlays[e]) throw new Error("The overlay is already registered.");
                    this.overlays[e] = {
                        element: t,
                        container: a,
                        callerCloseMethod: n || null,
                        canForceClose: i || !1
                    }, r()
                }.bind(this))
            },
            unregister: function(e) {
                return new Promise(function(t) {
                    if (!this.overlays[e]) throw new Error("The overlay does not exist.");
                    if (this.active === e) throw new Error("The overlay cannot be removed while it is active.");
                    delete this.overlays[e], t()
                }.bind(this))
            },
            open: function(e) {
                return new Promise(function(t) {
                    if (!this.overlays[e]) throw new Error("The overlay does not exist.");
                    if (this.active) {
                        if (!this.overlays[e].canForceClose) throw this.active === e ? new Error("The overlay is already active.") : new Error("Another overlay is currently active.");
                        this._closeThroughCaller()
                    }
                    this.active = e, this.overlays[this.active].element.classList.remove("hidden"), this.overlays[this.active].container.classList.remove("hidden"), window.addEventListener("keydown", this._keyDown), t()
                }.bind(this))
            },
            close: function(e) {
                return new Promise(function(t) {
                    if (!this.overlays[e]) throw new Error("The overlay does not exist.");
                    if (!this.active) throw new Error("The overlay is currently not active.");
                    if (this.active !== e) throw new Error("Another overlay is currently active.");
                    this.overlays[this.active].container.classList.add("hidden"), this.overlays[this.active].element.classList.add("hidden"), this.active = null, window.removeEventListener("keydown", this._keyDown), t()
                }.bind(this))
            },
            _keyDown: function(e) {
                var t = i;
                t.active && 27 === e.keyCode && (t._closeThroughCaller(), e.preventDefault())
            },
            _closeThroughCaller: function() {
                this.overlays[this.active].callerCloseMethod && this.overlays[this.active].callerCloseMethod(), this.active && this.close(this.active)
            }
        };
        t.OverlayManager = i
    }, function(e, t, n) {
        function i(e) {
            e.imageResourcesPath = "./images/", e.workerSrc = "../build/pdf.worker.js", e.cMapUrl = "../web/cmaps/", e.cMapPacked = !0
        }

        function r(e) {
            return new Promise(function(t, n) {
                var i = oe.appConfig,
                    r = document.createElement("script");
                r.src = i.debuggerScriptPath, r.onload = function() {
                    PDFBug.enable(e), PDFBug.init({
                        PDFJS: j.PDFJS,
                        OPS: j.OPS
                    }, i.mainContainer), t()
                }, r.onerror = function() {
                    n(new Error("Cannot load debugger at " + r.src))
                }, (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
            })
        }

        function a() {
            var e, t = oe.appConfig,
                n = document.location.search.substring(1),
                i = (0, B.parseQueryString)(n);
            e = "file" in i ? i.file : t.defaultUrl, M(e);
            var a = [],
                s = document.createElement("input");
            if (s.id = t.openFileInputName, s.className = "fileInput", s.setAttribute("type", "file"), s.oncontextmenu = B.noContextMenuHandler, document.body.appendChild(s), window.File && window.FileReader && window.FileList && window.Blob ? s.value = null : (t.toolbar.openFile.setAttribute("hidden", "true"), t.secondaryToolbar.openFileButton.setAttribute("hidden", "true")), oe.viewerPrefs.pdfBugEnabled) {
                var o = document.location.hash.substring(1),
                    c = (0, B.parseQueryString)(o);
                if ("disableworker" in c && (j.PDFJS.disableWorker = "true" === c.disableworker), "disablerange" in c && (j.PDFJS.disableRange = "true" === c.disablerange), "disablestream" in c && (j.PDFJS.disableStream = "true" === c.disablestream), "disableautofetch" in c && (j.PDFJS.disableAutoFetch = "true" === c.disableautofetch), "disablefontface" in c && (j.PDFJS.disableFontFace = "true" === c.disablefontface), "disablehistory" in c && (j.PDFJS.disableHistory = "true" === c.disablehistory), "webgl" in c && (j.PDFJS.disableWebGL = "true" !== c.webgl), "useonlycsszoom" in c && (j.PDFJS.useOnlyCssZoom = "true" === c.useonlycsszoom), "verbosity" in c && (j.PDFJS.verbosity = 0 | c.verbosity), "ignorecurrentpositiononzoom" in c && (j.PDFJS.ignoreCurrentPositionOnZoom = "true" === c.ignorecurrentpositiononzoom), "locale" in c && (j.PDFJS.locale = c.locale), "textlayer" in c) switch (c.textlayer) {
                    case "off":
                        j.PDFJS.disableTextLayer = !0;
                        break;
                    case "visible":
                    case "shadow":
                    case "hover":
                        t.viewerContainer.classList.add("textLayer-" + c.textlayer)
                }
                if ("pdfbug" in c) {
                    j.PDFJS.pdfBug = !0;
                    var l = c.pdfbug,
                        h = l.split(",");
                    a.push(r(h))
                }
            }
            B.mozL10n.setLanguage(j.PDFJS.locale), oe.supportsPrinting || (t.toolbar.print.classList.add("hidden"), t.secondaryToolbar.printButton.classList.add("hidden")), oe.supportsFullscreen || (t.toolbar.presentationModeButton.classList.add("hidden"), t.secondaryToolbar.presentationModeButton.classList.add("hidden")), oe.supportsIntegratedFind && t.toolbar.viewFind.classList.add("hidden"), t.sidebar.mainContainer.addEventListener("transitionend", function(e) {
                e.target === this && oe.eventBus.dispatch("resize")
            }, !0), t.sidebar.toggleButton.addEventListener("click", function() {
                oe.pdfSidebar.toggle()
            }), Promise.all(a).then(function() {
                le(e)
            }).catch(function(e) {
                oe.error(B.mozL10n.get("loading_error", null, "An error occurred while opening."), e)
            })
        }

        function s(e) {
            var t = e.pageNumber,
                n = t - 1,
                i = oe.pdfViewer.getPageView(n);
            if (t === oe.page && oe.toolbar.updateLoadingIndicatorState(!1), i) {
                if (oe.pdfSidebar.isThumbnailViewVisible) {
                    oe.pdfThumbnailViewer.getThumbnail(n).setImage(i)
                }
                j.PDFJS.pdfBug && Stats.enabled && i.stats && Stats.add(t, i.stats), i.error && oe.error(B.mozL10n.get("rendering_error", null, "An error occurred while rendering the page."), i.error)
            }
        }

        function o(e) {}

        function c(e) {
            var t, n = e.mode;
            switch (n) {
                case "thumbs":
                    t = V.SidebarView.THUMBS;
                    break;
                case "bookmarks":
                case "outline":
                    t = V.SidebarView.OUTLINE;
                    break;
                case "attachments":
                    t = V.SidebarView.ATTACHMENTS;
                    break;
                case "none":
                    t = V.SidebarView.NONE;
                    break;
                default:
                    return void console.error('Invalid "pagemode" hash parameter: ' + n)
            }
            oe.pdfSidebar.switchView(t, !0)
        }

        function l(e) {
            switch (e.action) {
                case "GoToPage":
                    oe.appConfig.toolbar.pageNumber.select();
                    break;
                case "Find":
                    oe.supportsIntegratedFind || oe.findBar.toggle()
            }
        }

        function h(e) {
            var t = e.active,
                n = e.switchInProgress;
            oe.pdfViewer.presentationModeState = n ? z.PresentationModeState.CHANGING : t ? z.PresentationModeState.FULLSCREEN : z.PresentationModeState.NORMAL
        }

        function u(e) {
            oe.pdfRenderingQueue.isThumbnailViewEnabled = oe.pdfSidebar.isThumbnailViewVisible;
            var t = oe.store;
            t && oe.isInitialViewSet && t.initializedPromise.then(function() {
                t.set("sidebarView", e.view).catch(function() {})
            })
        }

        function d(e) {
            var t = e.location,
                n = oe.store;
            n && n.initializedPromise.then(function() {
                n.setMultiple({
                    exists: !0,
                    page: t.pageNumber,
                    zoom: t.scale,
                    scrollLeft: t.left,
                    scrollTop: t.top
                }).catch(function() {})
            });
            var i = oe.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
            oe.appConfig.toolbar.viewBookmark.href = i, oe.appConfig.secondaryToolbar.viewBookmarkButton.href = i, oe.pdfHistory.updateCurrentBookmark(t.pdfOpenParams, t.pageNumber);
            var r = oe.pdfViewer.getPageView(oe.page - 1),
                a = r.renderingState !== U.RenderingStates.FINISHED;
            oe.toolbar.updateLoadingIndicatorState(a)
        }

        function f() {
            var e = oe.pdfViewer.currentScaleValue;
            "auto" === e || "page-fit" === e || "page-width" === e ? oe.pdfViewer.currentScaleValue = e : e || (oe.pdfViewer.currentScaleValue = B.DEFAULT_SCALE_VALUE), oe.pdfViewer.update()
        }

        function p(e) {
            if (oe.pdfHistory.isHashChangeUnlocked) {
                var t = e.hash;
                if (!t) return;
                oe.isInitialViewSet ? oe.pdfLinkService.setHash(t) : oe.initialBookmark = t
            }
        }

        function g() {
            oe.requestPresentationMode()
        }

        function m() {
            var e = oe.appConfig.openFileInputName;
            document.getElementById(e).click()
        }

        function v() {
            window.print()
        }

        function b() {
            oe.download()
        }

        function y() {
            oe.pdfDocument && (oe.page = 1)
        }

        function w() {
            oe.pdfDocument && (oe.page = oe.pagesCount)
        }

        function A() {
            oe.page++
        }

        function S() {
            oe.page--
        }

        function P() {
            oe.zoomIn()
        }

        function _() {
            oe.zoomOut()
        }

        function C(e) {
            var t = oe.pdfViewer;
            t.currentPageLabel = e.value, e.value !== t.currentPageNumber.toString() && e.value !== t.currentPageLabel && oe.toolbar.setPageNumber(t.currentPageNumber, t.currentPageLabel)
        }

        function x(e) {
            oe.pdfViewer.currentScaleValue = e.value
        }

        function L() {
            oe.rotatePages(90)
        }

        function T() {
            oe.rotatePages(-90)
        }

        function k() {
            oe.pdfDocumentProperties.open()
        }

        function E(e) {
            oe.findController.executeCommand("find" + e.type, {
                query: e.query,
                phraseSearch: e.phraseSearch,
                caseSensitive: e.caseSensitive,
                highlightAll: e.highlightAll,
                findPrevious: e.findPrevious
            })
        }

        function I(e) {
            oe.findController.executeCommand("find", {
                query: e.query,
                phraseSearch: e.phraseSearch,
                caseSensitive: !1,
                highlightAll: !0,
                findPrevious: !1
            })
        }

        function F(e) {
            oe.toolbar.setPageScale(e.presetValue, e.scale), oe.pdfViewer.update()
        }

        function D(e) {
            var t = e.pageNumber;
            if (oe.toolbar.setPageNumber(t, e.pageLabel || null), oe.secondaryToolbar.setPageNumber(t), oe.pdfSidebar.isThumbnailViewVisible && oe.pdfThumbnailViewer.scrollThumbnailIntoView(t), j.PDFJS.pdfBug && Stats.enabled) {
                var n = oe.pdfViewer.getPageView(t - 1);
                n.stats && Stats.add(t, n.stats)
            }
        }

        function O(e) {
            var t = oe.pdfViewer;
            if (!t.isInPresentationMode)
                if (e.ctrlKey || e.metaKey) {
                    var n = oe.supportedMouseWheelZoomModifierKeys;
                    if (e.ctrlKey && !n.ctrlKey || e.metaKey && !n.metaKey) return;
                    if (e.preventDefault(), de) return;
                    var i = t.currentScale,
                        r = (0, B.normalizeWheelEventDelta)(e),
                        a = 3 * r;
                    a < 0 ? oe.zoomOut(-a) : oe.zoomIn(a);
                    var s = t.currentScale;
                    if (i !== s) {
                        var o = s / i - 1,
                            c = t.container.getBoundingClientRect(),
                            l = e.clientX - c.left,
                            h = e.clientY - c.top;
                        t.container.scrollLeft += l * o, t.container.scrollTop += h * o
                    }
                } else de = !0, clearTimeout(ue), ue = setTimeout(function() {
                    de = !1
                }, 1e3)
        }

        function R(e) {
            if (oe.secondaryToolbar.isOpen) {
                var t = oe.appConfig;
                (oe.pdfViewer.containsElement(e.target) || t.toolbar.container.contains(e.target) && e.target !== t.secondaryToolbar.toggleButton) && oe.secondaryToolbar.close()
            }
        }

        function N(e) {
            if (!G.OverlayManager.active) {
                var t = !1,
                    n = !1,
                    i = (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0),
                    r = oe.pdfViewer,
                    a = r && r.isInPresentationMode;
                if (1 === i || 8 === i || 5 === i || 12 === i) switch (e.keyCode) {
                    case 70:
                        oe.supportsIntegratedFind || (oe.findBar.open(), t = !0);
                        break;
                    case 71:
                        if (!oe.supportsIntegratedFind) {
                            var s = oe.findController.state;
                            s && oe.findController.executeCommand("findagain", {
                                query: s.query,
                                phraseSearch: s.phraseSearch,
                                caseSensitive: s.caseSensitive,
                                highlightAll: s.highlightAll,
                                findPrevious: 5 === i || 12 === i
                            }), t = !0
                        }
                        break;
                    case 61:
                    case 107:
                    case 187:
                    case 171:
                        a || oe.zoomIn(), t = !0;
                        break;
                    case 173:
                    case 109:
                    case 189:
                        a || oe.zoomOut(), t = !0;
                        break;
                    case 48:
                    case 96:
                        a || (setTimeout(function() {
                            r.currentScaleValue = B.DEFAULT_SCALE_VALUE
                        }), t = !1);
                        break;
                    case 38:
                        (a || oe.page > 1) && (oe.page = 1, t = !0, n = !0);
                        break;
                    case 40:
                        (a || oe.page < oe.pagesCount) && (oe.page = oe.pagesCount, t = !0, n = !0)
                }
                if (1 === i || 8 === i) switch (e.keyCode) {
                    case 83:
                        oe.download(), t = !0
                }
                if (3 === i || 10 === i) switch (e.keyCode) {
                    case 80:
                        oe.requestPresentationMode(), t = !0;
                        break;
                    case 71:
                        oe.appConfig.toolbar.pageNumber.select(), t = !0
                }
                if (t) return n && !a && r.focus(), void e.preventDefault();
                var o = document.activeElement || document.querySelector(":focus"),
                    c = o && o.tagName.toUpperCase();
                if ("INPUT" !== c && "TEXTAREA" !== c && "SELECT" !== c || 27 === e.keyCode) {
                    if (0 === i) switch (e.keyCode) {
                        case 38:
                        case 33:
                        case 8:
                            if (!a && "page-fit" !== r.currentScaleValue) break;
                        case 37:
                            if (r.isHorizontalScrollbarEnabled) break;
                        case 75:
                        case 80:
                            oe.page > 1 && oe.page--, t = !0;
                            break;
                        case 27:
                            oe.secondaryToolbar.isOpen && (oe.secondaryToolbar.close(), t = !0), !oe.supportsIntegratedFind && oe.findBar.opened && (oe.findBar.close(), t = !0);
                            break;
                        case 40:
                        case 34:
                        case 32:
                            if (!a && "page-fit" !== r.currentScaleValue) break;
                        case 39:
                            if (r.isHorizontalScrollbarEnabled) break;
                        case 74:
                        case 78:
                            oe.page < oe.pagesCount && oe.page++, t = !0;
                            break;
                        case 36:
                            (a || oe.page > 1) && (oe.page = 1, t = !0, n = !0);
                            break;
                        case 35:
                            (a || oe.page < oe.pagesCount) && (oe.page = oe.pagesCount, t = !0, n = !0);
                            break;
                        case 72:
                            a || oe.handTool.toggle();
                            break;
                        case 82:
                            oe.rotatePages(90)
                    }
                    if (4 === i) switch (e.keyCode) {
                        case 32:
                            if (!a && "page-fit" !== r.currentScaleValue) break;
                            oe.page > 1 && oe.page--, t = !0;
                            break;
                        case 82:
                            oe.rotatePages(-90)
                    }
                    if (t || a || (e.keyCode >= 33 && e.keyCode <= 40 || 32 === e.keyCode && "BUTTON" !== c) && (n = !0), 2 === i) switch (e.keyCode) {
                        case 37:
                            a && (oe.pdfHistory.back(), t = !0);
                            break;
                        case 39:
                            a && (oe.pdfHistory.forward(), t = !0)
                    }
                    n && !r.containsElement(o) && r.focus(), t && e.preventDefault()
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFPrintServiceFactory = t.DefaultExternalServices = t.PDFViewerApplication = void 0;
        var M, B = n(0),
            j = n(1),
            U = n(3),
            V = n(23),
            z = n(26),
            H = n(2),
            W = n(14),
            G = n(4),
            X = n(15),
            J = n(16),
            q = n(17),
            Y = n(18),
            Q = n(7),
            K = n(19),
            Z = n(6),
            $ = n(20),
            ee = n(22),
            te = n(25),
            ne = n(8),
            ie = n(27),
            re = n(29),
            ae = n(30),
            se = {
                updateFindControlState: function(e) {},
                initPassiveLoading: function(e) {},
                fallback: function(e, t) {},
                reportTelemetry: function(e) {},
                createDownloadManager: function() {
                    throw new Error("Not implemented: createDownloadManager")
                },
                supportsIntegratedFind: !1,
                supportsDocumentFonts: !0,
                supportsDocumentColors: !0,
                supportedMouseWheelZoomModifierKeys: {
                    ctrlKey: !0,
                    metaKey: !0
                }
            },
            oe = {
                initialBookmark: document.location.hash.substring(1),
                initialDestination: null,
                initialized: !1,
                fellback: !1,
                appConfig: null,
                pdfDocument: null,
                pdfLoadingTask: null,
                printService: null,
                pdfViewer: null,
                pdfThumbnailViewer: null,
                pdfRenderingQueue: null,
                pdfPresentationMode: null,
                pdfDocumentProperties: null,
                pdfLinkService: null,
                pdfHistory: null,
                pdfSidebar: null,
                pdfOutlineViewer: null,
                pdfAttachmentViewer: null,
                store: null,
                downloadManager: null,
                toolbar: null,
                secondaryToolbar: null,
                eventBus: null,
                pageRotation: 0,
                isInitialViewSet: !1,
                viewerPrefs: {
                    sidebarViewOnLoad: V.SidebarView.NONE,
                    pdfBugEnabled: !1,
                    showPreviousViewOnLoad: !0,
                    defaultZoomValue: "",
                    disablePageLabels: !1,
                    renderer: "canvas",
                    enhanceTextSelection: !1,
                    renderInteractiveForms: !1,
                    enablePrintAutoRotate: !1
                },
                isViewerEmbedded: window.parent !== window,
                url: "",
                baseUrl: "",
                externalServices: se,
                initialize: function(e) {
                    var t = this;
                    return ne.Preferences.initialize(), this.preferences = ne.Preferences, i(j.PDFJS), this.appConfig = e, this._readPreferences().then(function() {
                        return t._initializeViewerComponents()
                    }).then(function() {
                        t.bindEvents(), t.bindWindowEvents(), B.localized.then(function() {
                            t.eventBus.dispatch("localized")
                        }), t.isViewerEmbedded && !j.PDFJS.isExternalLinkTargetSet() && (j.PDFJS.externalLinkTarget = j.PDFJS.LinkTarget.TOP), t.initialized = !0
                    })
                },
                _readPreferences: function() {
                    var e = this;
                    return Promise.all([ne.Preferences.get("enableWebGL").then(function(e) {
                        j.PDFJS.disableWebGL = !e
                    }), ne.Preferences.get("sidebarViewOnLoad").then(function(t) {
                        e.viewerPrefs.sidebarViewOnLoad = t
                    }), ne.Preferences.get("pdfBugEnabled").then(function(t) {
                        e.viewerPrefs.pdfBugEnabled = t
                    }), ne.Preferences.get("showPreviousViewOnLoad").then(function(t) {
                        e.viewerPrefs.showPreviousViewOnLoad = t
                    }), ne.Preferences.get("defaultZoomValue").then(function(t) {
                        e.viewerPrefs.defaultZoomValue = t
                    }), ne.Preferences.get("enhanceTextSelection").then(function(t) {
                        e.viewerPrefs.enhanceTextSelection = t
                    }), ne.Preferences.get("disableTextLayer").then(function(e) {
                        !0 !== j.PDFJS.disableTextLayer && (j.PDFJS.disableTextLayer = e)
                    }), ne.Preferences.get("disableRange").then(function(e) {
                        !0 !== j.PDFJS.disableRange && (j.PDFJS.disableRange = e)
                    }), ne.Preferences.get("disableStream").then(function(e) {
                        !0 !== j.PDFJS.disableStream && (j.PDFJS.disableStream = e)
                    }), ne.Preferences.get("disableAutoFetch").then(function(e) {
                        j.PDFJS.disableAutoFetch = e
                    }), ne.Preferences.get("disableFontFace").then(function(e) {
                        !0 !== j.PDFJS.disableFontFace && (j.PDFJS.disableFontFace = e)
                    }), ne.Preferences.get("useOnlyCssZoom").then(function(e) {
                        j.PDFJS.useOnlyCssZoom = e
                    }), ne.Preferences.get("externalLinkTarget").then(function(e) {
                        j.PDFJS.isExternalLinkTargetSet() || (j.PDFJS.externalLinkTarget = e)
                    }), ne.Preferences.get("renderer").then(function(t) {
                        e.viewerPrefs.renderer = t
                    }), ne.Preferences.get("renderInteractiveForms").then(function(t) {
                        e.viewerPrefs.renderInteractiveForms = t
                    }), ne.Preferences.get("disablePageLabels").then(function(t) {
                        e.viewerPrefs.disablePageLabels = t
                    }), ne.Preferences.get("enablePrintAutoRotate").then(function(t) {
                        e.viewerPrefs.enablePrintAutoRotate = t
                    })]).catch(function(e) {})
                },
                _initializeViewerComponents: function() {
                    var e = this,
                        t = this.appConfig;
                    return new Promise(function(n, i) {
                        var r = t.eventBus || (0, H.getGlobalEventBus)();
                        e.eventBus = r;
                        var a = new U.PDFRenderingQueue;
                        a.onIdle = e.cleanup.bind(e), e.pdfRenderingQueue = a;
                        var s = new Z.PDFLinkService({
                            eventBus: r
                        });
                        e.pdfLinkService = s;
                        var o = e.externalServices.createDownloadManager();
                        e.downloadManager = o;
                        var c = t.mainContainer,
                            l = t.viewerContainer;
                        e.pdfViewer = new z.PDFViewer({
                            container: c,
                            viewer: l,
                            eventBus: r,
                            renderingQueue: a,
                            linkService: s,
                            downloadManager: o,
                            renderer: e.viewerPrefs.renderer,
                            enhanceTextSelection: e.viewerPrefs.enhanceTextSelection,
                            renderInteractiveForms: e.viewerPrefs.renderInteractiveForms,
                            enablePrintAutoRotate: e.viewerPrefs.enablePrintAutoRotate
                        }), a.setViewer(e.pdfViewer), s.setViewer(e.pdfViewer);
                        var h = t.sidebar.thumbnailView;
                        e.pdfThumbnailViewer = new te.PDFThumbnailViewer({
                            container: h,
                            renderingQueue: a,
                            linkService: s
                        }), a.setThumbnailViewer(e.pdfThumbnailViewer), e.pdfHistory = new K.PDFHistory({
                            linkService: s,
                            eventBus: r
                        }), s.setHistory(e.pdfHistory), e.findController = new Q.PDFFindController({
                            pdfViewer: e.pdfViewer
                        }), e.findController.onUpdateResultsCount = function(t) {
                            e.supportsIntegratedFind || e.findBar.updateResultsCount(t)
                        }, e.findController.onUpdateState = function(t, n, i) {
                            e.supportsIntegratedFind ? e.externalServices.updateFindControlState({
                                result: t,
                                findPrevious: n
                            }) : e.findBar.updateUIState(t, n, i)
                        }, e.pdfViewer.setFindController(e.findController);
                        var u = Object.create(t.findBar);
                        u.findController = e.findController, u.eventBus = r, e.findBar = new Y.PDFFindBar(u), e.overlayManager = G.OverlayManager, e.handTool = new W.HandTool({
                            container: c,
                            eventBus: r
                        }), e.pdfDocumentProperties = new q.PDFDocumentProperties(t.documentProperties), e.toolbar = new re.Toolbar(t.toolbar, c, r), e.secondaryToolbar = new ie.SecondaryToolbar(t.secondaryToolbar, c, r), e.supportsFullscreen && (e.pdfPresentationMode = new ee.PDFPresentationMode({
                            container: c,
                            viewer: l,
                            pdfViewer: e.pdfViewer,
                            eventBus: r,
                            contextMenuItems: t.fullscreen
                        })), e.passwordPrompt = new X.PasswordPrompt(t.passwordOverlay), e.pdfOutlineViewer = new $.PDFOutlineViewer({
                            container: t.sidebar.outlineView,
                            eventBus: r,
                            linkService: s
                        }), e.pdfAttachmentViewer = new J.PDFAttachmentViewer({
                            container: t.sidebar.attachmentsView,
                            eventBus: r,
                            downloadManager: o
                        });
                        var d = Object.create(t.sidebar);
                        d.pdfViewer = e.pdfViewer, d.pdfThumbnailViewer = e.pdfThumbnailViewer, d.pdfOutlineViewer = e.pdfOutlineViewer, d.eventBus = r, e.pdfSidebar = new V.PDFSidebar(d), e.pdfSidebar.onToggled = e.forceRendering.bind(e), n(void 0)
                    })
                },
                run: function(e) {
                    this.initialize(e).then(a)
                },
                zoomIn: function(e) {
                    var t = this.pdfViewer.currentScale;
                    do {
                        t = (1.1 * t).toFixed(2), t = Math.ceil(10 * t) / 10, t = Math.min(B.MAX_SCALE, t)
                    } while (--e > 0 && t < B.MAX_SCALE);
                    this.pdfViewer.currentScaleValue = t
                },
                zoomOut: function(e) {
                    var t = this.pdfViewer.currentScale;
                    do {
                        t = (t / 1.1).toFixed(2), t = Math.floor(10 * t) / 10, t = Math.max(B.MIN_SCALE, t)
                    } while (--e > 0 && t > B.MIN_SCALE);
                    this.pdfViewer.currentScaleValue = t
                },
                get pagesCount() {
                    return this.pdfDocument ? this.pdfDocument.numPages : 0
                },
                set page(e) {
                    this.pdfViewer.currentPageNumber = e
                },
                get page() {
                    return this.pdfViewer.currentPageNumber
                },
                get printing() {
                    return !!this.printService
                },
                get supportsPrinting() {
                    return fe.instance.supportsPrinting
                },
                get supportsFullscreen() {
                    var e, t = document.documentElement;
                    return e = !!(t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen), !1 !== document.fullscreenEnabled && !1 !== document.mozFullScreenEnabled && !1 !== document.webkitFullscreenEnabled && !1 !== document.msFullscreenEnabled || (e = !1), e && !0 === j.PDFJS.disableFullscreen && (e = !1), (0, j.shadow)(this, "supportsFullscreen", e)
                },
                get supportsIntegratedFind() {
                    return this.externalServices.supportsIntegratedFind
                },
                get supportsDocumentFonts() {
                    return this.externalServices.supportsDocumentFonts
                },
                get supportsDocumentColors() {
                    return this.externalServices.supportsDocumentColors
                },
                get loadingBar() {
                    var e = new B.ProgressBar("#loadingBar", {});
                    return (0, j.shadow)(this, "loadingBar", e)
                },
                get supportedMouseWheelZoomModifierKeys() {
                    return this.externalServices.supportedMouseWheelZoomModifierKeys
                },
                initPassiveLoading: function() {
                    throw new Error("Not implemented: initPassiveLoading")
                },
                setTitleUsingUrl: function(e) {
                    this.url = e, this.baseUrl = e.split("#")[0];
                    var t = (0, B.getPDFFileNameFromURL)(e, "");
                    if (!t) try {
                        t = decodeURIComponent((0, j.getFilenameFromUrl)(e)) || e
                    } catch (n) {
                        t = e
                    }
                    this.setTitle(t)
                },
                setTitle: function(e) {
                    this.isViewerEmbedded || (document.title = e)
                },
                close: function() {
                    if (this.appConfig.errorWrapper.container.setAttribute("hidden", "true"), !this.pdfLoadingTask) return Promise.resolve();
                    var e = this.pdfLoadingTask.destroy();
                    return this.pdfLoadingTask = null, this.pdfDocument && (this.pdfDocument = null, this.pdfThumbnailViewer.setDocument(null), this.pdfViewer.setDocument(null), this.pdfLinkService.setDocument(null, null)), this.store = null, this.isInitialViewSet = !1, this.pdfSidebar.reset(), this.pdfOutlineViewer.reset(), this.pdfAttachmentViewer.reset(), this.findController.reset(), this.findBar.reset(), this.toolbar.reset(), this.secondaryToolbar.reset(), "undefined" != typeof PDFBug && PDFBug.cleanup(), e
                },
                open: function(e, t) {
                    if (arguments.length > 2 || "number" == typeof t) return Promise.reject(new Error("Call of open() with obsolete signature."));
                    if (this.pdfLoadingTask) return this.close().then(function() {
                        return ne.Preferences.reload(), this.open(e, t)
                    }.bind(this));
                    var n, i = Object.create(null);
                    if ("string" == typeof e ? (this.setTitleUsingUrl(e), i.url = e) : e && "byteLength" in e ? i.data = e : e.url && e.originalUrl && (this.setTitleUsingUrl(e.originalUrl), i.url = e.url), t) {
                        for (var r in t) i[r] = t[r];
                        t.scale && (n = t.scale), t.length && this.pdfDocumentProperties.setFileSize(t.length)
                    }
                    var a = this;
                    a.downloadComplete = !1;
                    var s = (0, j.getDocument)(i);
                    return this.pdfLoadingTask = s, s.onPassword = function(e, t) {
                        a.passwordPrompt.setUpdateCallback(e, t), a.passwordPrompt.open()
                    }, s.onProgress = function(e) {
                        a.progress(e.loaded / e.total)
                    }, s.onUnsupportedFeature = this.fallback.bind(this), s.promise.then(function(e) {
                        a.load(e, n)
                    }, function(e) {
                        var t = e && e.message,
                            n = B.mozL10n.get("loading_error", null, "An error occurred while loading the PDF.");
                        e instanceof j.InvalidPDFException ? n = B.mozL10n.get("invalid_file_error", null, "Invalid or corrupted PDF file.") : e instanceof j.MissingPDFException ? n = B.mozL10n.get("missing_file_error", null, "Missing PDF file.") : e instanceof j.UnexpectedResponseException && (n = B.mozL10n.get("unexpected_response_error", null, "Unexpected server response."));
                        var i = {
                            message: t
                        };
                        throw a.error(n, i), new Error(n)
                    })
                },
                download: function() {
                    function e() {
                        i.downloadUrl(t, n)
                    }
                    var t = this.baseUrl,
                        n = (0, B.getPDFFileNameFromURL)(this.url),
                        i = this.downloadManager;
                    return i.onerror = function(e) {
                        oe.error("PDF failed to download.")
                    }, this.pdfDocument && this.downloadComplete ? void this.pdfDocument.getData().then(function(e) {
                        var r = (0, j.createBlob)(e, "application/pdf");
                        i.download(r, t, n)
                    }, e).then(null, e) : void e()
                },
                fallback: function(e) {},
                error: function(e, t) {
                    var n = B.mozL10n.get("error_version_info", {
                        version: j.version || "?",
                        build: j.build || "?"
                    }, "PDF.js v{{version}} (build: {{build}})") + "\n";
                    t && (n += B.mozL10n.get("error_message", {
                        message: t.message
                    }, "Message: {{message}}"), t.stack ? n += "\n" + B.mozL10n.get("error_stack", {
                        stack: t.stack
                    }, "Stack: {{stack}}") : (t.filename && (n += "\n" + B.mozL10n.get("error_file", {
                        file: t.filename
                    }, "File: {{file}}")), t.lineNumber && (n += "\n" + B.mozL10n.get("error_line", {
                        line: t.lineNumber
                    }, "Line: {{line}}"))));
                    var i = this.appConfig.errorWrapper,
                        r = i.container;
                    r.removeAttribute("hidden"), i.errorMessage.textContent = e;
                    var a = i.closeButton;
                    a.onclick = function() {
                        r.setAttribute("hidden", "true")
                    };
                    var s = i.errorMoreInfo,
                        o = i.moreInfoButton,
                        c = i.lessInfoButton;
                    o.onclick = function() {
                        s.removeAttribute("hidden"), o.setAttribute("hidden", "true"), c.removeAttribute("hidden"), s.style.height = s.scrollHeight + "px"
                    }, c.onclick = function() {
                        s.setAttribute("hidden", "true"), o.removeAttribute("hidden"), c.setAttribute("hidden", "true")
                    }, o.oncontextmenu = B.noContextMenuHandler, c.oncontextmenu = B.noContextMenuHandler, a.oncontextmenu = B.noContextMenuHandler, o.removeAttribute("hidden"), c.setAttribute("hidden", "true"), s.value = n
                },
                progress: function(e) {
                    var t = Math.round(100 * e);
                    (t > this.loadingBar.percent || isNaN(t)) && (this.loadingBar.percent = t, j.PDFJS.disableAutoFetch && t && (this.disableAutoFetchLoadingBarTimeout && (clearTimeout(this.disableAutoFetchLoadingBarTimeout), this.disableAutoFetchLoadingBarTimeout = null), this.loadingBar.show(), this.disableAutoFetchLoadingBarTimeout = setTimeout(function() {
                        this.loadingBar.hide(), this.disableAutoFetchLoadingBarTimeout = null
                    }.bind(this), 5e3)))
                },
                load: function(e, t) {
                    var n = this;
                    t = t || B.UNKNOWN_SCALE, this.pdfDocument = e, this.pdfDocumentProperties.setDocumentAndUrl(e, this.url);
                    var i = e.getDownloadInfo().then(function() {
                        n.downloadComplete = !0, n.loadingBar.hide()
                    });
                    this.toolbar.setPagesCount(e.numPages, !1), this.secondaryToolbar.setPagesCount(e.numPages);
                    var r, a = this.documentFingerprint = e.fingerprint,
                        s = this.store = new ae.ViewHistory(a);
                    r = null, this.pdfLinkService.setDocument(e, r);
                    var o = this.pdfViewer;
                    o.currentScale = t, o.setDocument(e);
                    var c = o.firstPagePromise,
                        l = o.pagesPromise,
                        h = o.onePageRendered;
                    this.pageRotation = 0;
                    var u = this.pdfThumbnailViewer;
                    u.setDocument(e), c.then(function(e) {
                        i.then(function() {
                            n.eventBus.dispatch("documentload", {
                                source: n
                            })
                        }), n.loadingBar.setWidth(n.appConfig.viewerContainer), j.PDFJS.disableHistory || n.isViewerEmbedded || (n.viewerPrefs.showPreviousViewOnLoad || n.pdfHistory.clearHistoryState(), n.pdfHistory.initialize(n.documentFingerprint), n.pdfHistory.initialDestination ? n.initialDestination = n.pdfHistory.initialDestination : n.pdfHistory.initialBookmark && (n.initialBookmark = n.pdfHistory.initialBookmark));
                        var r = {
                            destination: n.initialDestination,
                            bookmark: n.initialBookmark,
                            hash: null
                        };
                        s.initializedPromise.then(function() {
                            var e = null,
                                i = null;
                            if (n.viewerPrefs.showPreviousViewOnLoad && s.get("exists", !1)) {
                                e = "page=" + s.get("page", "1") + "&zoom=" + (n.viewerPrefs.defaultZoomValue || s.get("zoom", B.DEFAULT_SCALE_VALUE)) + "," + s.get("scrollLeft", "0") + "," + s.get("scrollTop", "0"), i = s.get("sidebarView", V.SidebarView.NONE)
                            } else n.viewerPrefs.defaultZoomValue && (e = "page=1&zoom=" + n.viewerPrefs.defaultZoomValue);
                            n.setInitialView(e, {
                                scale: t,
                                sidebarView: i
                            }), r.hash = e, n.isViewerEmbedded || n.pdfViewer.focus()
                        }, function(e) {
                            console.error(e), n.setInitialView(null, {
                                scale: t
                            })
                        }), l.then(function() {
                            (r.destination || r.bookmark || r.hash) && (n.hasEqualPageSizes || (n.initialDestination = r.destination, n.initialBookmark = r.bookmark, n.pdfViewer.currentScaleValue = n.pdfViewer.currentScaleValue, n.setInitialView(r.hash)))
                        })
                    }), e.getPageLabels().then(function(t) {
                        if (t && !n.viewerPrefs.disablePageLabels) {
                            var i = 0,
                                r = t.length;
                            if (r !== n.pagesCount) return void console.error("The number of Page Labels does not match the number of pages in the document.");
                            for (; i < r && t[i] === (i + 1).toString();) i++;
                            i !== r && (o.setPageLabels(t), u.setPageLabels(t), n.toolbar.setPagesCount(e.numPages, !0), n.toolbar.setPageNumber(o.currentPageNumber, o.currentPageLabel))
                        }
                    }), l.then(function() {
                        n.supportsPrinting && e.getJavaScript().then(function(e) {
                            e.length && (console.warn("Warning: JavaScript is not supported"), n.fallback(j.UNSUPPORTED_FEATURES.javaScript));
                            for (var t = /\bprint\s*\(/, i = 0, r = e.length; i < r; i++) {
                                var a = e[i];
                                if (a && t.test(a)) return void setTimeout(function() {
                                    window.print()
                                })
                            }
                        })
                    }), Promise.all([h, B.animationStarted]).then(function() {
                        e.getOutline().then(function(e) {
                            n.pdfOutlineViewer.render({
                                outline: e
                            })
                        }), e.getAttachments().then(function(e) {
                            n.pdfAttachmentViewer.render({
                                attachments: e
                            })
                        })
                    }), e.getMetadata().then(function(t) {
                        var i = t.info,
                            r = t.metadata;
                        n.documentInfo = i, n.metadata = r, console.log("PDF " + e.fingerprint + " [" + i.PDFFormatVersion + " " + (i.Producer || "-").trim() + " / " + (i.Creator || "-").trim() + "] (PDF.js: " + (j.version || "-") + (j.PDFJS.disableWebGL ? "" : " [WebGL]") + ")");
                        var a;
                        if (r && r.has("dc:title")) {
                            var s = r.get("dc:title");
                            "Untitled" !== s && (a = s)
                        }!a && i && i.Title && (a = i.Title), a && n.setTitle(a + " - " + document.title), i.IsAcroFormPresent && (console.warn("Warning: AcroForm/XFA is not supported"), n.fallback(j.UNSUPPORTED_FEATURES.forms))
                    })
                },
                setInitialView: function(e, t) {
                    var n = t && t.scale,
                        i = t && t.sidebarView;
                    this.isInitialViewSet = !0, this.pdfSidebar.setInitialView(this.viewerPrefs.sidebarViewOnLoad || 0 | i), this.initialDestination ? (this.pdfLinkService.navigateTo(this.initialDestination), this.initialDestination = null) : this.initialBookmark ? (this.pdfLinkService.setHash(this.initialBookmark), this.pdfHistory.push({
                        hash: this.initialBookmark
                    }, !0), this.initialBookmark = null) : e ? this.pdfLinkService.setHash(e) : n && (this.pdfViewer.currentScaleValue = n, this.page = 1), this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel), this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber), this.pdfViewer.currentScaleValue || (this.pdfViewer.currentScaleValue = B.DEFAULT_SCALE_VALUE)
                },
                cleanup: function() {
                    this.pdfDocument && (this.pdfViewer.cleanup(), this.pdfThumbnailViewer.cleanup(), this.pdfViewer.renderer !== B.RendererType.SVG && this.pdfDocument.cleanup())
                },
                forceRendering: function() {
                    this.pdfRenderingQueue.printing = this.printing, this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible, this.pdfRenderingQueue.renderHighestPriority()
                },
                beforePrint: function() {
                    if (!this.printService) {
                        if (!this.supportsPrinting) {
                            var e = B.mozL10n.get("printing_not_supported", null, "Warning: Printing is not fully supported by this browser.");
                            return void this.error(e)
                        }
                        if (!this.pdfViewer.pageViewsReady) {
                            var t = B.mozL10n.get("printing_not_ready", null, "Warning: The PDF is not fully loaded for printing.");
                            return void window.alert(t)
                        }
                        var n = this.pdfViewer.getPagesOverview(),
                            i = this.appConfig.printContainer,
                            r = fe.instance.createPrintService(this.pdfDocument, n, i);
                        this.printService = r, this.forceRendering(), r.layout()
                    }
                },
                get hasEqualPageSizes() {
                    for (var e = this.pdfViewer.getPageView(0), t = 1, n = this.pagesCount; t < n; ++t) {
                        var i = this.pdfViewer.getPageView(t);
                        if (i.width !== e.width || i.height !== e.height) return !1
                    }
                    return !0
                },
                afterPrint: function() {
                    this.printService && (this.printService.destroy(), this.printService = null), this.forceRendering()
                },
                rotatePages: function(e) {
                    var t = this.page;
                    this.pageRotation = (this.pageRotation + 360 + e) % 360, this.pdfViewer.pagesRotation = this.pageRotation, this.pdfThumbnailViewer.pagesRotation = this.pageRotation, this.forceRendering(), this.pdfViewer.currentPageNumber = t
                },
                requestPresentationMode: function() {
                    this.pdfPresentationMode && this.pdfPresentationMode.request()
                },
                bindEvents: function() {
                    var e = this.eventBus;
                    e.on("resize", f), e.on("hashchange", p), e.on("beforeprint", this.beforePrint.bind(this)), e.on("afterprint", this.afterPrint.bind(this)), e.on("pagerendered", s), e.on("textlayerrendered", o), e.on("updateviewarea", d), e.on("pagechanging", D), e.on("scalechanging", F), e.on("sidebarviewchanged", u), e.on("pagemode", c), e.on("namedaction", l), e.on("presentationmodechanged", h), e.on("presentationmode", g), e.on("openfile", m), e.on("print", v), e.on("download", b), e.on("firstpage", y), e.on("lastpage", w), e.on("nextpage", A), e.on("previouspage", S), e.on("zoomin", P), e.on("zoomout", _), e.on("pagenumberchanged", C), e.on("scalechanged", x), e.on("rotatecw", L), e.on("rotateccw", T), e.on("documentproperties", k), e.on("find", E), e.on("findfromurlhash", I), e.on("fileinputchange", he)
                },
                bindWindowEvents: function() {
                    var e = this.eventBus;
                    window.addEventListener("wheel", O), window.addEventListener("click", R), window.addEventListener("keydown", N), window.addEventListener("resize", function() {
                        e.dispatch("resize")
                    }), window.addEventListener("hashchange", function() {
                        e.dispatch("hashchange", {
                            hash: document.location.hash.substring(1)
                        })
                    }), window.addEventListener("beforeprint", function() {
                        e.dispatch("beforeprint")
                    }), window.addEventListener("afterprint", function() {
                        e.dispatch("afterprint")
                    }), window.addEventListener("change", function(t) {
                        var n = t.target.files;
                        n && 0 !== n.length && e.dispatch("fileinputchange", {
                            fileInput: t.target
                        })
                    })
                }
            },
            ce = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];
        M = function(e) {
            try {
                var t = new URL(window.location.href).origin || "null";
                if (ce.indexOf(t) >= 0) return;
                if (new URL(e, window.location.href).origin !== t) throw new Error("file origin does not match viewer's")
            } catch (e) {
                var n = e && e.message,
                    i = B.mozL10n.get("loading_error", null, "An error occurred while loading the PDF."),
                    r = {
                        message: n
                    };
                throw oe.error(i, r), e
            }
        };
        var le;
        le = function(e) {
            if (e && 0 === e.lastIndexOf("file:", 0)) {
                oe.setTitleUsingUrl(e);
                var t = new XMLHttpRequest;
                t.onload = function() {
                    oe.open(new Uint8Array(t.response))
                };
                try {
                    t.open("GET", e), t.responseType = "arraybuffer", t.send()
                } catch (e) {
                    oe.error(B.mozL10n.get("loading_error", null, "An error occurred while loading the PDF."), e)
                }
            } else e && oe.open(e)
        };
        var he;
        he = function(e) {
            var t = e.fileInput.files[0];
            if (!j.PDFJS.disableCreateObjectURL && "undefined" != typeof URL && URL.createObjectURL) oe.open(URL.createObjectURL(t));
            else {
                var n = new FileReader;
                n.onload = function(e) {
                    var t = e.target.result,
                        n = new Uint8Array(t);
                    oe.open(n)
                }, n.readAsArrayBuffer(t)
            }
            oe.setTitleUsingUrl(t.name);
            var i = oe.appConfig;
            i.toolbar.viewBookmark.setAttribute("hidden", "true"), i.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true"), i.toolbar.download.setAttribute("hidden", "true"), i.secondaryToolbar.downloadButton.setAttribute("hidden", "true")
        };
        var ue, de = !1;
        B.localized.then(function() {
            document.getElementsByTagName("html")[0].dir = B.mozL10n.getDirection()
        });
        var fe = {
            instance: {
                supportsPrinting: !1,
                createPrintService: function() {
                    throw new Error("Not implemented: createPrintService")
                }
            }
        };
        t.PDFViewerApplication = oe, t.DefaultExternalServices = se, t.PDFPrintServiceFactory = fe
    }, function(e, t, n) {
        function i(e) {
            return o.test(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SimpleLinkService = t.PDFLinkService = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            a = n(2),
            s = n(0),
            o = /^\d+$/,
            c = function() {
                function e(e) {
                    e = e || {}, this.eventBus = e.eventBus || (0, a.getGlobalEventBus)(), this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null, this._pagesRefCache = null
                }

                function t(e) {
                    if (!(e instanceof Array)) return !1;
                    var t = e.length,
                        n = !0;
                    if (t < 2) return !1;
                    var i = e[0];
                    if (!("object" === (void 0 === i ? "undefined" : r(i)) && "number" == typeof i.num && (0 | i.num) === i.num && "number" == typeof i.gen && (0 | i.gen) === i.gen || "number" == typeof i && (0 | i) === i && i >= 0)) return !1;
                    var a = e[1];
                    if ("object" !== (void 0 === a ? "undefined" : r(a)) || "string" != typeof a.name) return !1;
                    switch (a.name) {
                        case "XYZ":
                            if (5 !== t) return !1;
                            break;
                        case "Fit":
                        case "FitB":
                            return 2 === t;
                        case "FitH":
                        case "FitBH":
                        case "FitV":
                        case "FitBV":
                            if (3 !== t) return !1;
                            break;
                        case "FitR":
                            if (6 !== t) return !1;
                            n = !1;
                            break;
                        default:
                            return !1
                    }
                    for (var s = 2; s < t; s++) {
                        var o = e[s];
                        if (!("number" == typeof o || n && null === o)) return !1
                    }
                    return !0
                }
                return e.prototype = {
                    setDocument: function(e, t) {
                        this.baseUrl = t, this.pdfDocument = e, this._pagesRefCache = Object.create(null)
                    },
                    setViewer: function(e) {
                        this.pdfViewer = e
                    },
                    setHistory: function(e) {
                        this.pdfHistory = e
                    },
                    get pagesCount() {
                        return this.pdfDocument ? this.pdfDocument.numPages : 0
                    },
                    get page() {
                        return this.pdfViewer.currentPageNumber
                    },
                    set page(e) {
                        this.pdfViewer.currentPageNumber = e
                    },
                    navigateTo: function(e) {
                        var t, n = "",
                            i = this,
                            r = function t(r) {
                                var a;
                                if (r instanceof Object) a = i._cachedPageNumber(r);
                                else {
                                    if ((0 | r) !== r) return void console.error('PDFLinkService_navigateTo: "' + r + '" is not a valid destination reference.');
                                    a = r + 1
                                }
                                if (a) {
                                    if (a < 1 || a > i.pagesCount) return void console.error('PDFLinkService_navigateTo: "' + a + '" is a non-existent page number.');
                                    i.pdfViewer.scrollPageIntoView({
                                        pageNumber: a,
                                        destArray: e
                                    }), i.pdfHistory && i.pdfHistory.push({
                                        dest: e,
                                        hash: n,
                                        page: a
                                    })
                                } else i.pdfDocument.getPageIndex(r).then(function(e) {
                                    i.cachePageRef(e + 1, r), t(r)
                                }).catch(function() {
                                    console.error('PDFLinkService_navigateTo: "' + r + '" is not a valid page reference.')
                                })
                            };
                        "string" == typeof e ? (n = e, t = this.pdfDocument.getDestination(e)) : t = Promise.resolve(e), t.then(function(t) {
                            if (e = t, !(t instanceof Array)) return void console.error('PDFLinkService_navigateTo: "' + t + '" is not a valid destination array.');
                            r(t[0])
                        })
                    },
                    getDestinationHash: function(e) {
                        if ("string" == typeof e) return this.getAnchorUrl("#" + (i(e) ? "nameddest=" : "") + escape(e));
                        if (e instanceof Array) {
                            var t = JSON.stringify(e);
                            return this.getAnchorUrl("#" + escape(t))
                        }
                        return this.getAnchorUrl("")
                    },
                    getAnchorUrl: function(e) {
                        return (this.baseUrl || "") + e
                    },
                    setHash: function(e) {
                        var n, r;
                        if (e.indexOf("=") >= 0) {
                            var a = (0, s.parseQueryString)(e);
                            if ("search" in a && this.eventBus.dispatch("findfromurlhash", {
                                    source: this,
                                    query: a.search.replace(/"/g, ""),
                                    phraseSearch: "true" === a.phrase
                                }), "nameddest" in a) return this.pdfHistory && this.pdfHistory.updateNextHashParam(a.nameddest), void this.navigateTo(a.nameddest);
                            if ("page" in a && (n = 0 | a.page || 1), "zoom" in a) {
                                var o = a.zoom.split(","),
                                    c = o[0],
                                    l = parseFloat(c); - 1 === c.indexOf("Fit") ? r = [null, {
                                    name: "XYZ"
                                }, o.length > 1 ? 0 | o[1] : null, o.length > 2 ? 0 | o[2] : null, l ? l / 100 : c] : "Fit" === c || "FitB" === c ? r = [null, {
                                    name: c
                                }] : "FitH" === c || "FitBH" === c || "FitV" === c || "FitBV" === c ? r = [null, {
                                    name: c
                                }, o.length > 1 ? 0 | o[1] : null] : "FitR" === c ? 5 !== o.length ? console.error("PDFLinkService_setHash: Not enough parameters for 'FitR'.") : r = [null, {
                                    name: c
                                }, 0 | o[1], 0 | o[2], 0 | o[3], 0 | o[4]] : console.error("PDFLinkService_setHash: '" + c + "' is not a valid zoom value.")
                            }
                            r ? this.pdfViewer.scrollPageIntoView({
                                pageNumber: n || this.page,
                                destArray: r,
                                allowNegativeOffset: !0
                            }) : n && (this.page = n), "pagemode" in a && this.eventBus.dispatch("pagemode", {
                                source: this,
                                mode: a.pagemode
                            })
                        } else {
                            i(e) && e <= this.pagesCount && (console.warn('PDFLinkService_setHash: specifying a page number directly after the hash symbol (#) is deprecated, please use the "#page=' + e + '" form instead.'), this.page = 0 | e), r = unescape(e);
                            try {
                                r = JSON.parse(r), r instanceof Array || (r = r.toString())
                            } catch (e) {}
                            if ("string" == typeof r || t(r)) return this.pdfHistory && this.pdfHistory.updateNextHashParam(r), void this.navigateTo(r);
                            console.error("PDFLinkService_setHash: '" + unescape(e) + "' is not a valid destination.")
                        }
                    },
                    executeNamedAction: function(e) {
                        switch (e) {
                            case "GoBack":
                                this.pdfHistory && this.pdfHistory.back();
                                break;
                            case "GoForward":
                                this.pdfHistory && this.pdfHistory.forward();
                                break;
                            case "NextPage":
                                this.page < this.pagesCount && this.page++;
                                break;
                            case "PrevPage":
                                this.page > 1 && this.page--;
                                break;
                            case "LastPage":
                                this.page = this.pagesCount;
                                break;
                            case "FirstPage":
                                this.page = 1
                        }
                        this.eventBus.dispatch("namedaction", {
                            source: this,
                            action: e
                        })
                    },
                    onFileAttachmentAnnotation: function(e) {
                        this.eventBus.dispatch("fileattachmentannotation", {
                            source: this,
                            id: e.id,
                            filename: e.filename,
                            content: e.content
                        })
                    },
                    cachePageRef: function(e, t) {
                        var n = t.num + " " + t.gen + " R";
                        this._pagesRefCache[n] = e
                    },
                    _cachedPageNumber: function(e) {
                        var t = e.num + " " + e.gen + " R";
                        return this._pagesRefCache && this._pagesRefCache[t] || null
                    }
                }, e
            }(),
            l = function() {
                function e() {}
                return e.prototype = {
                    get page() {
                        return 0
                    },
                    set page(e) {},
                    navigateTo: function(e) {},
                    getDestinationHash: function(e) {
                        return "#"
                    },
                    getAnchorUrl: function(e) {
                        return "#"
                    },
                    setHash: function(e) {},
                    executeNamedAction: function(e) {},
                    onFileAttachmentAnnotation: function(e) {},
                    cachePageRef: function(e, t) {}
                }, e
            }();
        t.PDFLinkService = c, t.SimpleLinkService = l
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFFindController = t.FindStates = void 0;
        var i = n(0),
            r = {
                FIND_FOUND: 0,
                FIND_NOTFOUND: 1,
                FIND_WRAPPED: 2,
                FIND_PENDING: 3
            },
            a = {
                "‘": "'",
                "’": "'",
                "‚": "'",
                "‛": "'",
                "“": '"',
                "”": '"',
                "„": '"',
                "‟": '"',
                "¼": "1/4",
                "½": "1/2",
                "¾": "3/4"
            },
            s = function() {
                function e(e) {
                    this.pdfViewer = e.pdfViewer || null, this.onUpdateResultsCount = null, this.onUpdateState = null, this.reset();
                    var t = Object.keys(a).join("");
                    this.normalizationRegex = new RegExp("[" + t + "]", "g")
                }
                return e.prototype = {
                    reset: function() {
                        var e = this;
                        this.startedTextExtraction = !1, this.extractTextPromises = [], this.pendingFindMatches = Object.create(null), this.active = !1, this.pageContents = [], this.pageMatches = [], this.pageMatchesLength = null, this.matchCount = 0, this.selected = {
                            pageIdx: -1,
                            matchIdx: -1
                        }, this.offset = {
                            pageIdx: null,
                            matchIdx: null
                        }, this.pagesToSearch = null, this.resumePageIdx = null, this.state = null, this.dirtyMatch = !1, this.findTimeout = null, this._firstPagePromise = new Promise(function(t) {
                            e.resolveFirstPage = t
                        })
                    },
                    normalize: function(e) {
                        return e.replace(this.normalizationRegex, function(e) {
                            return a[e]
                        })
                    },
                    _prepareMatches: function(e, t, n) {
                        var i, r;
                        for (e.sort(function(e, t) {
                                return e.match === t.match ? e.matchLength - t.matchLength : e.match - t.match
                            }), i = 0, r = e.length; i < r; i++)(function(e, t) {
                            var n, i, r;
                            if (n = e[t], r = e[t + 1], t < e.length - 1 && n.match === r.match) return n.skipped = !0, !0;
                            for (var a = t - 1; a >= 0; a--)
                                if (i = e[a], !i.skipped) {
                                    if (i.match + i.matchLength < n.match) break;
                                    if (i.match + i.matchLength >= n.match + n.matchLength) return n.skipped = !0, !0
                                } return !1
                        })(e, i) || (t.push(e[i].match), n.push(e[i].matchLength))
                    },
                    calcFindPhraseMatch: function(e, t, n) {
                        for (var i = [], r = e.length, a = -r;;) {
                            if (-1 === (a = n.indexOf(e, a + r))) break;
                            i.push(a)
                        }
                        this.pageMatches[t] = i
                    },
                    calcFindWordMatch: function(e, t, n) {
                        for (var i, r, a, s = [], o = e.match(/\S+/g), c = 0, l = o.length; c < l; c++)
                            for (i = o[c], r = i.length, a = -r;;) {
                                if (-1 === (a = n.indexOf(i, a + r))) break;
                                s.push({
                                    match: a,
                                    matchLength: r,
                                    skipped: !1
                                })
                            }
                        this.pageMatchesLength || (this.pageMatchesLength = []), this.pageMatchesLength[t] = [], this.pageMatches[t] = [], this._prepareMatches(s, this.pageMatches[t], this.pageMatchesLength[t])
                    },
                    calcFindMatch: function(e) {
                        var t = this.normalize(this.pageContents[e]),
                            n = this.normalize(this.state.query),
                            i = this.state.caseSensitive,
                            r = this.state.phraseSearch;
                        0 !== n.length && (i || (t = t.toLowerCase(), n = n.toLowerCase()), r ? this.calcFindPhraseMatch(n, e, t) : this.calcFindWordMatch(n, e, t), this.updatePage(e), this.resumePageIdx === e && (this.resumePageIdx = null, this.nextPageMatch()), this.pageMatches[e].length > 0 && (this.matchCount += this.pageMatches[e].length, this.updateUIResultsCount()))
                    },
                    extractText: function() {
                        function e(n) {
                            r.pdfViewer.getPageTextContent(n).then(function(i) {
                                for (var a = i.items, s = [], o = 0, c = a.length; o < c; o++) s.push(a[o].str);
                                r.pageContents.push(s.join("")), t[n](n), n + 1 < r.pdfViewer.pagesCount && e(n + 1)
                            })
                        }
                        if (!this.startedTextExtraction) {
                            this.startedTextExtraction = !0, this.pageContents = [];
                            for (var t = [], n = this.pdfViewer.pagesCount, i = 0; i < n; i++) this.extractTextPromises.push(new Promise(function(e) {
                                t.push(e)
                            }));
                            var r = this;
                            e(0)
                        }
                    },
                    executeCommand: function(e, t) {
                        null !== this.state && "findagain" === e || (this.dirtyMatch = !0), this.state = t, this.updateUIState(r.FIND_PENDING), this._firstPagePromise.then(function() {
                            this.extractText(), clearTimeout(this.findTimeout), "find" === e ? this.findTimeout = setTimeout(this.nextMatch.bind(this), 250) : this.nextMatch()
                        }.bind(this))
                    },
                    updatePage: function(e) {
                        this.selected.pageIdx === e && (this.pdfViewer.currentPageNumber = e + 1);
                        var t = this.pdfViewer.getPageView(e);
                        t.textLayer && t.textLayer.updateMatches()
                    },
                    nextMatch: function() {
                        var e = this.state.findPrevious,
                            t = this.pdfViewer.currentPageNumber - 1,
                            n = this.pdfViewer.pagesCount;
                        if (this.active = !0, this.dirtyMatch) {
                            this.dirtyMatch = !1, this.selected.pageIdx = this.selected.matchIdx = -1, this.offset.pageIdx = t, this.offset.matchIdx = null, this.hadMatch = !1, this.resumePageIdx = null, this.pageMatches = [], this.matchCount = 0, this.pageMatchesLength = null;
                            for (var i = this, a = 0; a < n; a++) this.updatePage(a), a in this.pendingFindMatches || (this.pendingFindMatches[a] = !0, this.extractTextPromises[a].then(function(e) {
                                delete i.pendingFindMatches[e], i.calcFindMatch(e)
                            }))
                        }
                        if ("" === this.state.query) return void this.updateUIState(r.FIND_FOUND);
                        if (!this.resumePageIdx) {
                            var s = this.offset;
                            if (this.pagesToSearch = n, null !== s.matchIdx) {
                                var o = this.pageMatches[s.pageIdx].length;
                                if (!e && s.matchIdx + 1 < o || e && s.matchIdx > 0) return this.hadMatch = !0, s.matchIdx = e ? s.matchIdx - 1 : s.matchIdx + 1, void this.updateMatch(!0);
                                this.advanceOffsetPage(e)
                            }
                            this.nextPageMatch()
                        }
                    },
                    matchesReady: function(e) {
                        var t = this.offset,
                            n = e.length,
                            i = this.state.findPrevious;
                        return n ? (this.hadMatch = !0, t.matchIdx = i ? n - 1 : 0, this.updateMatch(!0), !0) : (this.advanceOffsetPage(i), !!(t.wrapped && (t.matchIdx = null, this.pagesToSearch < 0)) && (this.updateMatch(!1), !0))
                    },
                    updateMatchPosition: function(e, t, n, r) {
                        if (this.selected.matchIdx === t && this.selected.pageIdx === e) {
                            var a = {
                                top: -50,
                                left: -400
                            };
                            (0, i.scrollIntoView)(n[r], a, !0)
                        }
                    },
                    nextPageMatch: function() {
                        null !== this.resumePageIdx && console.error("There can only be one pending page.");
                        do {
                            var e = this.offset.pageIdx,
                                t = this.pageMatches[e];
                            if (!t) {
                                this.resumePageIdx = e;
                                break
                            }
                        } while (!this.matchesReady(t))
                    },
                    advanceOffsetPage: function(e) {
                        var t = this.offset,
                            n = this.extractTextPromises.length;
                        t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this.pagesToSearch--, (t.pageIdx >= n || t.pageIdx < 0) && (t.pageIdx = e ? n - 1 : 0, t.wrapped = !0)
                    },
                    updateMatch: function(e) {
                        var t = r.FIND_NOTFOUND,
                            n = this.offset.wrapped;
                        if (this.offset.wrapped = !1, e) {
                            var i = this.selected.pageIdx;
                            this.selected.pageIdx = this.offset.pageIdx, this.selected.matchIdx = this.offset.matchIdx, t = n ? r.FIND_WRAPPED : r.FIND_FOUND, -1 !== i && i !== this.selected.pageIdx && this.updatePage(i)
                        }
                        this.updateUIState(t, this.state.findPrevious), -1 !== this.selected.pageIdx && this.updatePage(this.selected.pageIdx)
                    },
                    updateUIResultsCount: function() {
                        this.onUpdateResultsCount && this.onUpdateResultsCount(this.matchCount)
                    },
                    updateUIState: function(e, t) {
                        this.onUpdateState && this.onUpdateState(e, t, this.matchCount)
                    }
                }, e
            }();
        t.FindStates = r, t.PDFFindController = s
    }, function(e, t, n) {
        function i() {
            return s || (s = Promise.resolve({
                showPreviousViewOnLoad: !0,
                defaultZoomValue: "",
                sidebarViewOnLoad: 0,
                enableHandToolOnLoad: !1,
                enableWebGL: !1,
                pdfBugEnabled: !1,
                disableRange: !1,
                disableStream: !1,
                disableAutoFetch: !1,
                disableFontFace: !1,
                disableTextLayer: !1,
                useOnlyCssZoom: !1,
                externalLinkTarget: 0,
                enhanceTextSelection: !1,
                renderer: "canvas",
                renderInteractiveForms: !1,
                enablePrintAutoRotate: !1,
                disablePageLabels: !1
            })), s
        }

        function r(e) {
            var t = {};
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            s = null,
            o = {
                prefs: null,
                isInitializedPromiseResolved: !1,
                initializedPromise: null,
                initialize: function() {
                    return this.initializedPromise = i().then(function(e) {
                        return Object.defineProperty(this, "defaults", {
                            value: Object.freeze(e),
                            writable: !1,
                            enumerable: !0,
                            configurable: !1
                        }), this.prefs = r(e), this._readFromStorage(e)
                    }.bind(this)).then(function(e) {
                        this.isInitializedPromiseResolved = !0, e && (this.prefs = e)
                    }.bind(this))
                },
                _writeToStorage: function(e) {
                    return Promise.resolve()
                },
                _readFromStorage: function(e) {
                    return Promise.resolve()
                },
                reset: function() {
                    return this.initializedPromise.then(function() {
                        return this.prefs = r(this.defaults), this._writeToStorage(this.defaults)
                    }.bind(this))
                },
                reload: function() {
                    return this.initializedPromise.then(function() {
                        this._readFromStorage(this.defaults).then(function(e) {
                            e && (this.prefs = e)
                        }.bind(this))
                    }.bind(this))
                },
                set: function(e, t) {
                    return this.initializedPromise.then(function() {
                        if (void 0 === this.defaults[e]) throw new Error("preferencesSet: '" + e + "' is undefined.");
                        if (void 0 === t) throw new Error("preferencesSet: no value is specified.");
                        var n = void 0 === t ? "undefined" : a(t),
                            i = a(this.defaults[e]);
                        if (n !== i) {
                            if ("number" !== n || "string" !== i) throw new Error("Preferences_set: '" + t + "' is a \"" + n + '", expected "' + i + '".');
                            t = t.toString()
                        } else if ("number" === n && (0 | t) !== t) throw new Error("Preferences_set: '" + t + '\' must be an "integer".');
                        return this.prefs[e] = t, this._writeToStorage(this.prefs)
                    }.bind(this))
                },
                get: function(e) {
                    return this.initializedPromise.then(function() {
                        var t = this.defaults[e];
                        if (void 0 === t) throw new Error("preferencesGet: '" + e + "' is undefined.");
                        var n = this.prefs[e];
                        return void 0 !== n ? n : t
                    }.bind(this))
                }
            };
        o._writeToStorage = function(e) {
            return new Promise(function(t) {
                localStorage.setItem("pdfjs.preferences", JSON.stringify(e)), t()
            })
        }, o._readFromStorage = function(e) {
            return new Promise(function(e) {
                e(JSON.parse(localStorage.getItem("pdfjs.preferences")))
            })
        }, t.Preferences = o
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.GenericCom = void 0;
        var i = n(5),
            r = n(12),
            a = {},
            s = Object.create(i.DefaultExternalServices);
        s.createDownloadManager = function() {
            return new r.DownloadManager
        }, i.PDFViewerApplication.externalServices = s, t.GenericCom = a
    }, function(e, t, n) {
        function i(e, t, n, i) {
            var r = f.scratchCanvas;
            r.width = Math.floor(i.width * (150 / 72)), r.height = Math.floor(i.height * (150 / 72));
            var a = Math.floor(i.width * l.CSS_UNITS) + "px",
                s = Math.floor(i.height * l.CSS_UNITS) + "px",
                o = r.getContext("2d");
            return o.save(), o.fillStyle = "rgb(255, 255, 255)", o.fillRect(0, 0, r.width, r.height), o.restore(), t.getPage(n).then(function(e) {
                var t = {
                    canvasContext: o,
                    transform: [150 / 72, 0, 0, 150 / 72, 0, 0],
                    viewport: e.getViewport(1, i.rotation),
                    intent: "print"
                };
                return e.render(t).promise
            }).then(function() {
                return {
                    width: a,
                    height: s
                }
            })
        }

        function r(e, t, n) {
            this.pdfDocument = e, this.pagesOverview = t, this.printContainer = n, this.currentPage = -1, this.scratchCanvas = document.createElement("canvas")
        }

        function a(e) {
            var t = document.createEvent("CustomEvent");
            t.initCustomEvent(e, !1, !1, "custom"), window.dispatchEvent(t)
        }

        function s() {
            f && (f.destroy(), a("afterprint"))
        }

        function o(e, t) {
            var n = document.getElementById("printServiceOverlay"),
                i = Math.round(100 * e / t),
                r = n.querySelector("progress"),
                a = n.querySelector(".relative-progress");
            r.value = i, a.textContent = l.mozL10n.get("print_progress_percent", {
                progress: i
            }, i + "%")
        }

        function c() {
            return v || (v = h.OverlayManager.register("printServiceOverlay", document.getElementById("printServiceOverlay"), s, !0), document.getElementById("printCancel").onclick = s), v
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFPrintService = void 0;
        var l = n(0),
            h = n(4),
            u = n(1),
            d = n(5),
            f = null;
        r.prototype = {
            layout: function() {
                this.throwIfInactive();
                var e = document.querySelector("body");
                e.setAttribute("data-pdfjsprinting", !0), this.pagesOverview.every(function(e) {
                    return e.width === this.pagesOverview[0].width && e.height === this.pagesOverview[0].height
                }, this) || console.warn("Not all pages have the same size. The printed result may be incorrect!"), this.pageStyleSheet = document.createElement("style");
                var t = this.pagesOverview[0];
                this.pageStyleSheet.textContent = "@supports ((size:A4) and (size:1pt 1pt)) {@page { size: " + t.width + "pt " + t.height + "pt;}}", e.appendChild(this.pageStyleSheet)
            },
            destroy: function() {
                f === this && (this.printContainer.textContent = "", this.pageStyleSheet && this.pageStyleSheet.parentNode && (this.pageStyleSheet.parentNode.removeChild(this.pageStyleSheet), this.pageStyleSheet = null), this.scratchCanvas.width = this.scratchCanvas.height = 0, this.scratchCanvas = null, f = null, c().then(function() {
                    "printServiceOverlay" === h.OverlayManager.active && h.OverlayManager.close("printServiceOverlay")
                }))
            },
            renderPages: function() {
                var e = this.pagesOverview.length,
                    t = function(n, r) {
                        if (this.throwIfInactive(), ++this.currentPage >= e) return o(e, e), void n();
                        var a = this.currentPage;
                        o(a, e), i(this, this.pdfDocument, a + 1, this.pagesOverview[a]).then(this.useRenderedPage.bind(this)).then(function() {
                            t(n, r)
                        }, r)
                    }.bind(this);
                return new Promise(t)
            },
            useRenderedPage: function(e) {
                this.throwIfInactive();
                var t = document.createElement("img");
                t.style.width = e.width, t.style.height = e.height;
                var n = this.scratchCanvas;
                "toBlob" in n && !u.PDFJS.disableCreateObjectURL ? n.toBlob(function(e) {
                    t.src = URL.createObjectURL(e)
                }) : t.src = n.toDataURL();
                var i = document.createElement("div");
                return i.appendChild(t), this.printContainer.appendChild(i), new Promise(function(e, n) {
                    t.onload = e, t.onerror = n
                })
            },
            performPrint: function() {
                return this.throwIfInactive(), new Promise(function(e) {
                    setTimeout(function() {
                        if (!this.active) return void e();
                        p.call(window), setTimeout(e, 20)
                    }.bind(this), 0)
                }.bind(this))
            },
            get active() {
                return this === f
            },
            throwIfInactive: function() {
                if (!this.active) throw new Error("This print request was cancelled or completed.")
            }
        };
        var p = window.print;
        window.print = function() {
            if (f) return void console.warn("Ignored window.print() because of a pending print job.");
            c().then(function() {
                f && h.OverlayManager.open("printServiceOverlay")
            });
            try {
                a("beforeprint")
            } finally {
                if (!f) return console.error("Expected print service to be initialized."), void("printServiceOverlay" === h.OverlayManager.active && h.OverlayManager.close("printServiceOverlay"));
                var e = f;
                f.renderPages().then(function() {
                    return e.performPrint()
                }).catch(function() {}).then(function() {
                    e.active && s()
                })
            }
        };
        var g = !!document.attachEvent;
        if (window.addEventListener("keydown", function(e) {
                if (80 === e.keyCode && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
                    if (window.print(), g) return;
                    return e.preventDefault(), void(e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.stopPropagation())
                }
            }, !0), g && document.attachEvent("onkeydown", function(e) {
                if (e = e || window.event, 80 === e.keyCode && e.ctrlKey) return e.keyCode = 0, !1
            }), "onbeforeprint" in window) {
            var m = function(e) {
                "custom" !== e.detail && e.stopImmediatePropagation && e.stopImmediatePropagation()
            };
            window.addEventListener("beforeprint", m), window.addEventListener("afterprint", m)
        }
        var v;
        d.PDFPrintServiceFactory.instance = {
            supportsPrinting: !0,
            createPrintService: function(e, t, n) {
                if (f) throw new Error("The print service is created and active.");
                return f = new r(e, t, n)
            }
        }, t.PDFPrintService = r
    }, function(e, t, n) {
        function i() {}
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DefaultAnnotationLayerFactory = t.AnnotationLayerBuilder = void 0;
        var r = n(1),
            a = n(0),
            s = n(6),
            o = function() {
                function e(e) {
                    this.pageDiv = e.pageDiv, this.pdfPage = e.pdfPage, this.renderInteractiveForms = e.renderInteractiveForms, this.linkService = e.linkService, this.downloadManager = e.downloadManager, this.div = null
                }
                return e.prototype = {
                    render: function(e, t) {
                        var n = this,
                            i = {
                                intent: void 0 === t ? "display" : t
                            };
                        this.pdfPage.getAnnotations(i).then(function(t) {
                            if (e = e.clone({
                                    dontFlip: !0
                                }), i = {
                                    viewport: e,
                                    div: n.div,
                                    annotations: t,
                                    page: n.pdfPage,
                                    renderInteractiveForms: n.renderInteractiveForms,
                                    linkService: n.linkService,
                                    downloadManager: n.downloadManager
                                }, n.div) r.AnnotationLayer.update(i);
                            else {
                                if (0 === t.length) return;
                                n.div = document.createElement("div"), n.div.className = "annotationLayer", n.pageDiv.appendChild(n.div), i.div = n.div, r.AnnotationLayer.render(i), void 0 !== a.mozL10n && a.mozL10n.translate(n.div)
                            }
                        })
                    },
                    hide: function() {
                        this.div && this.div.setAttribute("hidden", "true")
                    }
                }, e
            }();
        i.prototype = {
            createAnnotationLayerBuilder: function(e, t, n) {
                return new o({
                    pageDiv: e,
                    pdfPage: t,
                    renderInteractiveForms: n,
                    linkService: new s.SimpleLinkService
                })
            }
        }, t.AnnotationLayerBuilder = o, t.DefaultAnnotationLayerFactory = i
    }, function(e, t, n) {
        function i(e, t) {
            var n = document.createElement("a");
            if (n.click) n.href = e, n.target = "_parent", "download" in n && (n.download = t), (document.body || document.documentElement).appendChild(n), n.click(), n.parentNode.removeChild(n);
            else {
                if (window.top === window && e.split("#")[0] === window.location.href.split("#")[0]) {
                    var i = -1 === e.indexOf("?") ? "?" : "&";
                    e = e.replace(/#|$/, i + "$&")
                }
                window.open(e, "_parent")
            }
        }

        function r() {}
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DownloadManager = void 0;
        var a = n(1);
        r.prototype = {
            downloadUrl: function(e, t) {
                (0, a.createValidAbsoluteUrl)(e, "http://example.com") && i(e + "#pdfjs.action=download", t)
            },
            downloadData: function(e, t, n) {
                if (navigator.msSaveBlob) return navigator.msSaveBlob(new Blob([e], {
                    type: n
                }), t);
                i((0, a.createObjectURL)(e, n, a.PDFJS.disableCreateObjectURL), t)
            },
            download: function(e, t, n) {
                return navigator.msSaveBlob ? void(navigator.msSaveBlob(e, n) || this.downloadUrl(t, n)) : a.PDFJS.disableCreateObjectURL ? void this.downloadUrl(t, n) : void i(URL.createObjectURL(e), n)
            }
        }, t.DownloadManager = r
    }, function(e, t, n) {
        function i(e) {
            this.element = e.element, this.document = e.element.ownerDocument, "function" == typeof e.ignoreTarget && (this.ignoreTarget = e.ignoreTarget), this.onActiveChanged = e.onActiveChanged, this.activate = this.activate.bind(this), this.deactivate = this.deactivate.bind(this), this.toggle = this.toggle.bind(this), this._onmousedown = this._onmousedown.bind(this), this._onmousemove = this._onmousemove.bind(this), this._endPan = this._endPan.bind(this), (this.overlay = document.createElement("div")).className = "grab-to-pan-grabbing"
        }

        function r(e) {
            return "buttons" in e && s ? !(1 & e.buttons) : c || l ? 0 === e.which : void 0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i.prototype = {
            CSS_CLASS_GRAB: "grab-to-pan-grab",
            activate: function() {
                this.active || (this.active = !0, this.element.addEventListener("mousedown", this._onmousedown, !0), this.element.classList.add(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!0))
            },
            deactivate: function() {
                this.active && (this.active = !1, this.element.removeEventListener("mousedown", this._onmousedown, !0), this._endPan(), this.element.classList.remove(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!1))
            },
            toggle: function() {
                this.active ? this.deactivate() : this.activate()
            },
            ignoreTarget: function(e) {
                return e[a]("a[href], a[href] *, input, textarea, button, button *, select, option")
            },
            _onmousedown: function(e) {
                if (0 === e.button && !this.ignoreTarget(e.target)) {
                    if (e.originalTarget) try {
                        e.originalTarget.tagName
                    } catch (e) {
                        return
                    }
                    this.scrollLeftStart = this.element.scrollLeft, this.scrollTopStart = this.element.scrollTop, this.clientXStart = e.clientX, this.clientYStart = e.clientY, this.document.addEventListener("mousemove", this._onmousemove, !0), this.document.addEventListener("mouseup", this._endPan, !0), this.element.addEventListener("scroll", this._endPan, !0), e.preventDefault(), e.stopPropagation();
                    var t = document.activeElement;
                    t && !t.contains(e.target) && t.blur()
                }
            },
            _onmousemove: function(e) {
                if (this.element.removeEventListener("scroll", this._endPan, !0), r(e)) return void this._endPan();
                var t = e.clientX - this.clientXStart,
                    n = e.clientY - this.clientYStart,
                    i = this.scrollTopStart - n,
                    a = this.scrollLeftStart - t;
                this.element.scrollTo ? this.element.scrollTo({
                    top: i,
                    left: a,
                    behavior: "instant"
                }) : (this.element.scrollTop = i, this.element.scrollLeft = a), this.overlay.parentNode || document.body.appendChild(this.overlay)
            },
            _endPan: function() {
                this.element.removeEventListener("scroll", this._endPan, !0), this.document.removeEventListener("mousemove", this._onmousemove, !0), this.document.removeEventListener("mouseup", this._endPan, !0), this.overlay.remove()
            }
        };
        var a;
        ["webkitM", "mozM", "msM", "oM", "m"].some(function(e) {
            var t = e + "atches";
            return t in document.documentElement && (a = t), t += "Selector", t in document.documentElement && (a = t), a
        });
        var s = !document.documentMode || document.documentMode > 9,
            o = window.chrome,
            c = o && (o.webstore || o.app),
            l = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
        t.GrabToPan = i
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.HandTool = void 0;
        var i = n(13),
            r = n(0),
            a = n(8),
            s = function() {
                function e(e) {
                    this.container = e.container, this.eventBus = e.eventBus, this.wasActive = !1, this.handTool = new i.GrabToPan({
                        element: this.container,
                        onActiveChanged: function(e) {
                            this.eventBus.dispatch("handtoolchanged", {
                                isActive: e
                            })
                        }.bind(this)
                    }), this.eventBus.on("togglehandtool", this.toggle.bind(this)), Promise.all([r.localized, a.Preferences.get("enableHandToolOnLoad")]).then(function(e) {
                        !0 === e[1] && this.handTool.activate()
                    }.bind(this)).catch(function(e) {}), this.eventBus.on("presentationmodechanged", function(e) {
                        e.switchInProgress || (e.active ? this.enterPresentationMode() : this.exitPresentationMode())
                    }.bind(this))
                }
                return e.prototype = {
                    get isActive() {
                        return !!this.handTool.active
                    },
                    toggle: function() {
                        this.handTool.toggle()
                    },
                    enterPresentationMode: function() {
                        this.isActive && (this.wasActive = !0, this.handTool.deactivate())
                    },
                    exitPresentationMode: function() {
                        this.wasActive && (this.wasActive = !1, this.handTool.activate())
                    }
                }, e
            }();
        t.HandTool = s
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PasswordPrompt = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(0),
            s = n(4),
            o = n(1),
            c = function() {
                function e(t) {
                    var n = this;
                    i(this, e), this.overlayName = t.overlayName, this.container = t.container, this.label = t.label, this.input = t.input, this.submitButton = t.submitButton, this.cancelButton = t.cancelButton, this.updateCallback = null, this.reason = null, this.submitButton.addEventListener("click", this.verify.bind(this)), this.cancelButton.addEventListener("click", this.close.bind(this)), this.input.addEventListener("keydown", function(e) {
                        13 === e.keyCode && n.verify()
                    }), s.OverlayManager.register(this.overlayName, this.container, this.close.bind(this), !0)
                }
                return r(e, [{
                    key: "open",
                    value: function() {
                        var e = this;
                        s.OverlayManager.open(this.overlayName).then(function() {
                            e.input.focus();
                            var t = a.mozL10n.get("password_label", null, "Enter the password to open this PDF file.");
                            e.reason === o.PasswordResponses.INCORRECT_PASSWORD && (t = a.mozL10n.get("password_invalid", null, "Invalid password. Please try again.")), e.label.textContent = t
                        })
                    }
                }, {
                    key: "close",
                    value: function() {
                        var e = this;
                        s.OverlayManager.close(this.overlayName).then(function() {
                            e.input.value = ""
                        })
                    }
                }, {
                    key: "verify",
                    value: function() {
                        var e = this.input.value;
                        if (e && e.length > 0) return this.close(), this.updateCallback(e)
                    }
                }, {
                    key: "setUpdateCallback",
                    value: function(e, t) {
                        this.updateCallback = e, this.reason = t
                    }
                }]), e
            }();
        t.PasswordPrompt = c
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFAttachmentViewer = void 0;
        var i = n(1),
            r = function() {
                function e(e) {
                    this.attachments = null, this.container = e.container, this.eventBus = e.eventBus, this.downloadManager = e.downloadManager, this._renderedCapability = (0, i.createPromiseCapability)(), this.eventBus.on("fileattachmentannotation", this._appendAttachment.bind(this))
                }
                return e.prototype = {
                    reset: function(e) {
                        this.attachments = null, this.container.textContent = "", e || (this._renderedCapability = (0, i.createPromiseCapability)())
                    },
                    _dispatchEvent: function(e) {
                        this.eventBus.dispatch("attachmentsloaded", {
                            source: this,
                            attachmentsCount: e
                        }), this._renderedCapability.resolve()
                    },
                    _bindPdfLink: function(e, t, n) {
                        if (i.PDFJS.disableCreateObjectURL) throw new Error('bindPdfLink: Unsupported "PDFJS.disableCreateObjectURL" value.');
                        var r;
                        e.onclick = function() {
                            r || (r = (0, i.createObjectURL)(t, "application/pdf"));
                            var e;
                            return e = "?file=" + encodeURIComponent(r + "#" + n), window.open(e), !1
                        }
                    },
                    _bindLink: function(e, t, n) {
                        e.onclick = function(e) {
                            return this.downloadManager.downloadData(t, n, ""), !1
                        }.bind(this)
                    },
                    render: function(e) {
                        e = e || {};
                        var t = e.attachments || null,
                            n = 0;
                        if (this.attachments) {
                            var r = !0 === e.keepRenderedCapability;
                            this.reset(r)
                        }
                        if (this.attachments = t, !t) return void this._dispatchEvent(n);
                        var a = Object.keys(t).sort(function(e, t) {
                            return e.toLowerCase().localeCompare(t.toLowerCase())
                        });
                        n = a.length;
                        for (var s = 0; s < n; s++) {
                            var o = t[a[s]],
                                c = (0, i.removeNullCharacters)((0, i.getFilenameFromUrl)(o.filename)),
                                l = document.createElement("div");
                            l.className = "attachmentsItem";
                            var h = document.createElement("button");
                            h.textContent = c, /\.pdf$/i.test(c) && !i.PDFJS.disableCreateObjectURL ? this._bindPdfLink(h, o.content, c) : this._bindLink(h, o.content, c), l.appendChild(h), this.container.appendChild(l)
                        }
                        this._dispatchEvent(n)
                    },
                    _appendAttachment: function(e) {
                        this._renderedCapability.promise.then(function(e, t, n) {
                            var i = this.attachments;
                            if (i) {
                                for (var r in i)
                                    if (e === r) return
                            } else i = Object.create(null);
                            i[e] = {
                                filename: t,
                                content: n
                            }, this.render({
                                attachments: i,
                                keepRenderedCapability: !0
                            })
                        }.bind(this, e.id, e.filename, e.content))
                    }
                }, e
            }();
        t.PDFAttachmentViewer = r
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFDocumentProperties = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(0),
            s = n(1),
            o = n(4),
            c = function() {
                function e(t) {
                    i(this, e), this.overlayName = t.overlayName, this.fields = t.fields, this.container = t.container, this.rawFileSize = 0, this.url = null, this.pdfDocument = null, t.closeButton && t.closeButton.addEventListener("click", this.close.bind(this)), this._dataAvailableCapability = (0, s.createPromiseCapability)(), o.OverlayManager.register(this.overlayName, this.container, this.close.bind(this))
                }
                return r(e, [{
                    key: "open",
                    value: function() {
                        var e = this;
                        Promise.all([o.OverlayManager.open(this.overlayName), this._dataAvailableCapability.promise]).then(function() {
                            e._getProperties()
                        })
                    }
                }, {
                    key: "close",
                    value: function() {
                        o.OverlayManager.close(this.overlayName)
                    }
                }, {
                    key: "setFileSize",
                    value: function(e) {
                        e > 0 && (this.rawFileSize = e)
                    }
                }, {
                    key: "setDocumentAndUrl",
                    value: function(e, t) {
                        this.pdfDocument = e, this.url = t, this._dataAvailableCapability.resolve()
                    }
                }, {
                    key: "_getProperties",
                    value: function() {
                        var e = this;
                        o.OverlayManager.active && (this.pdfDocument.getDownloadInfo().then(function(t) {
                            t.length !== e.rawFileSize && (e.setFileSize(t.length), e._updateUI(e.fields.fileSize, e._parseFileSize()))
                        }), this.pdfDocument.getMetadata().then(function(t) {
                            var n = {
                                fileName: (0, a.getPDFFileNameFromURL)(e.url),
                                fileSize: e._parseFileSize(),
                                title: t.info.Title,
                                author: t.info.Author,
                                subject: t.info.Subject,
                                keywords: t.info.Keywords,
                                creationDate: e._parseDate(t.info.CreationDate),
                                modificationDate: e._parseDate(t.info.ModDate),
                                creator: t.info.Creator,
                                producer: t.info.Producer,
                                version: t.info.PDFFormatVersion,
                                pageCount: e.pdfDocument.numPages
                            };
                            for (var i in n) e._updateUI(e.fields[i], n[i])
                        }))
                    }
                }, {
                    key: "_updateUI",
                    value: function(e, t) {
                        e && void 0 !== t && "" !== t && (e.textContent = t)
                    }
                }, {
                    key: "_parseFileSize",
                    value: function() {
                        var e = this.rawFileSize,
                            t = e / 1024;
                        if (t) return t < 1024 ? a.mozL10n.get("document_properties_kb", {
                            size_kb: (+t.toPrecision(3)).toLocaleString(),
                            size_b: e.toLocaleString()
                        }, "{{size_kb}} KB ({{size_b}} bytes)") : a.mozL10n.get("document_properties_mb", {
                            size_mb: (+(t / 1024).toPrecision(3)).toLocaleString(),
                            size_b: e.toLocaleString()
                        }, "{{size_mb}} MB ({{size_b}} bytes)")
                    }
                }, {
                    key: "_parseDate",
                    value: function(e) {
                        var t = e;
                        if (void 0 === t) return "";
                        "D:" === t.substring(0, 2) && (t = t.substring(2));
                        var n = parseInt(t.substring(0, 4), 10),
                            i = parseInt(t.substring(4, 6), 10) - 1,
                            r = parseInt(t.substring(6, 8), 10),
                            s = parseInt(t.substring(8, 10), 10),
                            o = parseInt(t.substring(10, 12), 10),
                            c = parseInt(t.substring(12, 14), 10),
                            l = t.substring(14, 15),
                            h = parseInt(t.substring(15, 17), 10),
                            u = parseInt(t.substring(18, 20), 10);
                        "-" === l ? (s += h, o += u) : "+" === l && (s -= h, o -= u);
                        var d = new Date(Date.UTC(n, i, r, s, o, c)),
                            f = d.toLocaleDateString(),
                            p = d.toLocaleTimeString();
                        return a.mozL10n.get("document_properties_date_string", {
                            date: f,
                            time: p
                        }, "{{date}}, {{time}}")
                    }
                }]), e
            }();
        t.PDFDocumentProperties = c
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFFindBar = void 0;
        var r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            a = n(7),
            s = n(0),
            o = function() {
                function e(t) {
                    var n = this;
                    if (i(this, e), this.opened = !1, this.bar = t.bar || null, this.toggleButton = t.toggleButton || null, this.findField = t.findField || null, this.highlightAll = t.highlightAllCheckbox || null, this.caseSensitive = t.caseSensitiveCheckbox || null, this.findMsg = t.findMsg || null, this.findResultsCount = t.findResultsCount || null, this.findStatusIcon = t.findStatusIcon || null, this.findPreviousButton = t.findPreviousButton || null, this.findNextButton = t.findNextButton || null, this.findController = t.findController || null, this.eventBus = t.eventBus, null === this.findController) throw new Error("PDFFindBar cannot be used without a PDFFindController instance.");
                    this.toggleButton.addEventListener("click", function() {
                        n.toggle()
                    }), this.findField.addEventListener("input", function() {
                        n.dispatchEvent("")
                    }), this.bar.addEventListener("keydown", function(e) {
                        switch (e.keyCode) {
                            case 13:
                                e.target === n.findField && n.dispatchEvent("again", e.shiftKey);
                                break;
                            case 27:
                                n.close()
                        }
                    }), this.findPreviousButton.addEventListener("click", function() {
                        n.dispatchEvent("again", !0)
                    }), this.findNextButton.addEventListener("click", function() {
                        n.dispatchEvent("again", !1)
                    }), this.highlightAll.addEventListener("click", function() {
                        n.dispatchEvent("highlightallchange")
                    }), this.caseSensitive.addEventListener("click", function() {
                        n.dispatchEvent("casesensitivitychange")
                    }), this.eventBus.on("resize", this._adjustWidth.bind(this))
                }
                return r(e, [{
                    key: "reset",
                    value: function() {
                        this.updateUIState()
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e, t) {
                        this.eventBus.dispatch("find", {
                            source: this,
                            type: e,
                            query: this.findField.value,
                            caseSensitive: this.caseSensitive.checked,
                            phraseSearch: !0,
                            highlightAll: this.highlightAll.checked,
                            findPrevious: t
                        })
                    }
                }, {
                    key: "updateUIState",
                    value: function(e, t, n) {
                        var i = !1,
                            r = "",
                            o = "";
                        switch (e) {
                            case a.FindStates.FIND_FOUND:
                                break;
                            case a.FindStates.FIND_PENDING:
                                o = "pending";
                                break;
                            case a.FindStates.FIND_NOTFOUND:
                                r = s.mozL10n.get("find_not_found", null, "Phrase not found"), i = !0;
                                break;
                            case a.FindStates.FIND_WRAPPED:
                                r = t ? s.mozL10n.get("find_reached_top", null, "Reached top of document, continued from bottom") : s.mozL10n.get("find_reached_bottom", null, "Reached end of document, continued from top")
                        }
                        i ? this.findField.classList.add("notFound") : this.findField.classList.remove("notFound"), this.findField.setAttribute("data-status", o), this.findMsg.textContent = r, this.updateResultsCount(n), this._adjustWidth()
                    }
                }, {
                    key: "updateResultsCount",
                    value: function(e) {
                        if (this.findResultsCount) {
                            if (!e) return void this.findResultsCount.classList.add("hidden");
                            this.findResultsCount.textContent = e.toLocaleString(), this.findResultsCount.classList.remove("hidden")
                        }
                    }
                }, {
                    key: "open",
                    value: function() {
                        this.opened || (this.opened = !0, this.toggleButton.classList.add("toggled"), this.bar.classList.remove("hidden")), this.findField.select(), this.findField.focus(), this._adjustWidth()
                    }
                }, {
                    key: "close",
                    value: function() {
                        this.opened && (this.opened = !1, this.toggleButton.classList.remove("toggled"), this.bar.classList.add("hidden"), this.findController.active = !1)
                    }
                }, {
                    key: "toggle",
                    value: function() {
                        this.opened ? this.close() : this.open()
                    }
                }, {
                    key: "_adjustWidth",
                    value: function() {
                        if (this.opened) {
                            this.bar.classList.remove("wrapContainers");
                            this.bar.clientHeight > this.bar.firstElementChild.clientHeight && this.bar.classList.add("wrapContainers")
                        }
                    }
                }]), e
            }();
        t.PDFFindBar = o
    }, function(e, t, n) {
        function i(e) {
            this.linkService = e.linkService, this.eventBus = e.eventBus || (0, r.getGlobalEventBus)(), this.initialized = !1, this.initialDestination = null, this.initialBookmark = null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFHistory = void 0;
        var r = n(2);
        i.prototype = {
            initialize: function(e) {
                function t() {
                    a.previousHash = window.location.hash.slice(1), a._pushToHistory({
                        hash: a.previousHash
                    }, !1, !0), a._updatePreviousBookmark()
                }

                function n(e, t) {
                    function n() {
                        window.removeEventListener("popstate", n), window.addEventListener("popstate", i), a._pushToHistory(e, !1, !0), history.forward()
                    }

                    function i() {
                        window.removeEventListener("popstate", i), a.allowHashChange = !0, a.historyUnlocked = !0, t()
                    }
                    a.historyUnlocked = !1, a.allowHashChange = !1, window.addEventListener("popstate", n), history.back()
                }

                function i() {
                    var e = a._getPreviousParams(null, !0);
                    if (e) {
                        var t = !a.current.dest && a.current.hash !== a.previousHash;
                        a._pushToHistory(e, !1, t), a._updatePreviousBookmark()
                    }
                    window.removeEventListener("beforeunload", i)
                }
                this.initialized = !0, this.reInitialized = !1, this.allowHashChange = !0, this.historyUnlocked = !0,
                    this.isViewerInPresentationMode = !1, this.previousHash = window.location.hash.substring(1), this.currentBookmark = "", this.currentPage = 0, this.updatePreviousBookmark = !1, this.previousBookmark = "", this.previousPage = 0, this.nextHashParam = "", this.fingerprint = e, this.currentUid = this.uid = 0, this.current = {};
                var r = window.history.state;
                this._isStateObjectDefined(r) ? (r.target.dest ? this.initialDestination = r.target.dest : this.initialBookmark = r.target.hash, this.currentUid = r.uid, this.uid = r.uid + 1, this.current = r.target) : (r && r.fingerprint && this.fingerprint !== r.fingerprint && (this.reInitialized = !0), this._pushOrReplaceState({
                    fingerprint: this.fingerprint
                }, !0));
                var a = this;
                window.addEventListener("popstate", function(e) {
                    if (a.historyUnlocked) {
                        if (e.state) return void a._goTo(e.state);
                        if (0 === a.uid) {
                            n(a.previousHash && a.currentBookmark && a.previousHash !== a.currentBookmark ? {
                                hash: a.currentBookmark,
                                page: a.currentPage
                            } : {
                                page: 1
                            }, function() {
                                t()
                            })
                        } else t()
                    }
                }), window.addEventListener("beforeunload", i), window.addEventListener("pageshow", function(e) {
                    window.addEventListener("beforeunload", i)
                }), a.eventBus.on("presentationmodechanged", function(e) {
                    a.isViewerInPresentationMode = e.active
                })
            },
            clearHistoryState: function() {
                this._pushOrReplaceState(null, !0)
            },
            _isStateObjectDefined: function(e) {
                return !!(e && e.uid >= 0 && e.fingerprint && this.fingerprint === e.fingerprint && e.target && e.target.hash)
            },
            _pushOrReplaceState: function(e, t) {
                t ? window.history.replaceState(e, "", document.URL) : window.history.pushState(e, "", document.URL)
            },
            get isHashChangeUnlocked() {
                return !this.initialized || this.allowHashChange
            },
            _updatePreviousBookmark: function() {
                this.updatePreviousBookmark && this.currentBookmark && this.currentPage && (this.previousBookmark = this.currentBookmark, this.previousPage = this.currentPage, this.updatePreviousBookmark = !1)
            },
            updateCurrentBookmark: function(e, t) {
                this.initialized && (this.currentBookmark = e.substring(1), this.currentPage = 0 | t, this._updatePreviousBookmark())
            },
            updateNextHashParam: function(e) {
                this.initialized && (this.nextHashParam = e)
            },
            push: function(e, t) {
                if (this.initialized && this.historyUnlocked) {
                    if (e.dest && !e.hash && (e.hash = this.current.hash && this.current.dest && this.current.dest === e.dest ? this.current.hash : this.linkService.getDestinationHash(e.dest).split("#")[1]), e.page && (e.page |= 0), t) {
                        var n = window.history.state.target;
                        return n || (this._pushToHistory(e, !1), this.previousHash = window.location.hash.substring(1)), this.updatePreviousBookmark = !this.nextHashParam, void(n && this._updatePreviousBookmark())
                    }
                    if (this.nextHashParam) {
                        if (this.nextHashParam === e.hash) return this.nextHashParam = null, void(this.updatePreviousBookmark = !0);
                        this.nextHashParam = null
                    }
                    e.hash ? this.current.hash ? this.current.hash !== e.hash ? this._pushToHistory(e, !0) : (!this.current.page && e.page && this._pushToHistory(e, !1, !0), this.updatePreviousBookmark = !0) : this._pushToHistory(e, !0) : this.current.page && e.page && this.current.page !== e.page && this._pushToHistory(e, !0)
                }
            },
            _getPreviousParams: function(e, t) {
                if (!this.currentBookmark || !this.currentPage) return null;
                if (this.updatePreviousBookmark && (this.updatePreviousBookmark = !1), this.uid > 0 && (!this.previousBookmark || !this.previousPage)) return null;
                if (!this.current.dest && !e || t) {
                    if (this.previousBookmark === this.currentBookmark) return null
                } else {
                    if (!this.current.page && !e) return null;
                    if (this.previousPage === this.currentPage) return null
                }
                var n = {
                    hash: this.currentBookmark,
                    page: this.currentPage
                };
                return this.isViewerInPresentationMode && (n.hash = null), n
            },
            _stateObj: function(e) {
                return {
                    fingerprint: this.fingerprint,
                    uid: this.uid,
                    target: e
                }
            },
            _pushToHistory: function(e, t, n) {
                if (this.initialized) {
                    if (!e.hash && e.page && (e.hash = "page=" + e.page), t && !n) {
                        var i = this._getPreviousParams();
                        if (i) {
                            var r = !this.current.dest && this.current.hash !== this.previousHash;
                            this._pushToHistory(i, !1, r)
                        }
                    }
                    this._pushOrReplaceState(this._stateObj(e), n || 0 === this.uid), this.currentUid = this.uid++, this.current = e, this.updatePreviousBookmark = !0
                }
            },
            _goTo: function(e) {
                if (this.initialized && this.historyUnlocked && this._isStateObjectDefined(e)) {
                    if (!this.reInitialized && e.uid < this.currentUid) {
                        var t = this._getPreviousParams(!0);
                        if (t) return this._pushToHistory(this.current, !1), this._pushToHistory(t, !1), this.currentUid = e.uid, void window.history.back()
                    }
                    this.historyUnlocked = !1, e.target.dest ? this.linkService.navigateTo(e.target.dest) : this.linkService.setHash(e.target.hash), this.currentUid = e.uid, e.uid > this.uid && (this.uid = e.uid), this.current = e.target, this.updatePreviousBookmark = !0;
                    var n = window.location.hash.substring(1);
                    this.previousHash !== n && (this.allowHashChange = !1), this.previousHash = n, this.historyUnlocked = !0
                }
            },
            back: function() {
                this.go(-1)
            },
            forward: function() {
                this.go(1)
            },
            go: function(e) {
                if (this.initialized && this.historyUnlocked) {
                    var t = window.history.state; - 1 === e && t && t.uid > 0 ? window.history.back() : 1 === e && t && t.uid < this.uid - 1 && window.history.forward()
                }
            }
        }, t.PDFHistory = i
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFOutlineViewer = void 0;
        var i = n(1),
            r = function() {
                function e(e) {
                    this.outline = null, this.lastToggleIsShow = !0, this.container = e.container, this.linkService = e.linkService, this.eventBus = e.eventBus
                }
                return e.prototype = {
                    reset: function() {
                        this.outline = null, this.lastToggleIsShow = !0, this.container.textContent = "", this.container.classList.remove("outlineWithDeepNesting")
                    },
                    _dispatchEvent: function(e) {
                        this.eventBus.dispatch("outlineloaded", {
                            source: this,
                            outlineCount: e
                        })
                    },
                    _bindLink: function(e, t) {
                        if (t.url) return void(0, i.addLinkAttributes)(e, {
                            url: t.url,
                            target: t.newWindow ? i.PDFJS.LinkTarget.BLANK : void 0
                        });
                        var n = this,
                            r = t.dest;
                        e.href = n.linkService.getDestinationHash(r), e.onclick = function() {
                            return r && n.linkService.navigateTo(r), !1
                        }
                    },
                    _setStyles: function(e, t) {
                        var n = "";
                        t.bold && (n += "font-weight: bold;"), t.italic && (n += "font-style: italic;"), n && e.setAttribute("style", n)
                    },
                    _addToggleButton: function(e) {
                        var t = document.createElement("div");
                        t.className = "outlineItemToggler", t.onclick = function(n) {
                            if (n.stopPropagation(), t.classList.toggle("outlineItemsHidden"), n.shiftKey) {
                                var i = !t.classList.contains("outlineItemsHidden");
                                this._toggleOutlineItem(e, i)
                            }
                        }.bind(this), e.insertBefore(t, e.firstChild)
                    },
                    _toggleOutlineItem: function(e, t) {
                        this.lastToggleIsShow = t;
                        for (var n = e.querySelectorAll(".outlineItemToggler"), i = 0, r = n.length; i < r; ++i) n[i].classList[t ? "remove" : "add"]("outlineItemsHidden")
                    },
                    toggleOutlineTree: function() {
                        this.outline && this._toggleOutlineItem(this.container, !this.lastToggleIsShow)
                    },
                    render: function(e) {
                        var t = e && e.outline || null,
                            n = 0;
                        if (this.outline && this.reset(), this.outline = t, !t) return void this._dispatchEvent(n);
                        for (var r = document.createDocumentFragment(), a = [{
                                parent: r,
                                items: this.outline
                            }], s = !1; a.length > 0;)
                            for (var o = a.shift(), c = 0, l = o.items.length; c < l; c++) {
                                var h = o.items[c],
                                    u = document.createElement("div");
                                u.className = "outlineItem";
                                var d = document.createElement("a");
                                if (this._bindLink(d, h), this._setStyles(d, h), d.textContent = (0, i.removeNullCharacters)(h.title) || "–", u.appendChild(d), h.items.length > 0) {
                                    s = !0, this._addToggleButton(u);
                                    var f = document.createElement("div");
                                    f.className = "outlineItems", u.appendChild(f), a.push({
                                        parent: f,
                                        items: h.items
                                    })
                                }
                                o.parent.appendChild(u), n++
                            }
                        s && this.container.classList.add("outlineWithDeepNesting"), this.container.appendChild(r), this._dispatchEvent(n)
                    }
                }, e
            }();
        t.PDFOutlineViewer = r
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFPageView = void 0;
        var i = n(0),
            r = n(1),
            a = n(2),
            s = n(3),
            o = function() {
                function e(e) {
                    var t = e.container,
                        n = e.id,
                        r = e.scale,
                        o = e.defaultViewport,
                        c = e.renderingQueue,
                        l = e.textLayerFactory,
                        h = e.annotationLayerFactory,
                        u = e.enhanceTextSelection || !1,
                        d = e.renderInteractiveForms || !1;
                    this.id = n, this.renderingId = "page" + n, this.pageLabel = null, this.rotation = 0, this.scale = r || i.DEFAULT_SCALE, this.viewport = o, this.pdfPageRotate = o.rotation, this.hasRestrictedScaling = !1, this.enhanceTextSelection = u, this.renderInteractiveForms = d, this.eventBus = e.eventBus || (0, a.getGlobalEventBus)(), this.renderingQueue = c, this.textLayerFactory = l, this.annotationLayerFactory = h, this.renderer = e.renderer || i.RendererType.CANVAS, this.paintTask = null, this.paintedViewportMap = new WeakMap, this.renderingState = s.RenderingStates.INITIAL, this.resume = null, this.error = null, this.onBeforeDraw = null, this.onAfterDraw = null, this.textLayer = null, this.zoomLayer = null, this.annotationLayer = null;
                    var f = document.createElement("div");
                    f.className = "page", f.style.width = Math.floor(this.viewport.width) + "px", f.style.height = Math.floor(this.viewport.height) + "px", f.setAttribute("data-page-number", this.id), this.div = f, t.appendChild(f)
                }
                return e.prototype = {
                    setPdfPage: function(e) {
                        this.pdfPage = e, this.pdfPageRotate = e.rotate;
                        var t = (this.rotation + this.pdfPageRotate) % 360;
                        this.viewport = e.getViewport(this.scale * i.CSS_UNITS, t), this.stats = e.stats, this.reset()
                    },
                    destroy: function() {
                        this.reset(), this.pdfPage && this.pdfPage.cleanup()
                    },
                    _resetZoomLayer: function(e) {
                        if (this.zoomLayer) {
                            var t = this.zoomLayer.firstChild;
                            this.paintedViewportMap.delete(t), t.width = 0, t.height = 0, e && this.zoomLayer.remove(), this.zoomLayer = null
                        }
                    },
                    reset: function(e, t) {
                        this.cancelRendering();
                        var n = this.div;
                        n.style.width = Math.floor(this.viewport.width) + "px", n.style.height = Math.floor(this.viewport.height) + "px";
                        for (var i = n.childNodes, r = e && this.zoomLayer || null, a = t && this.annotationLayer && this.annotationLayer.div || null, s = i.length - 1; s >= 0; s--) {
                            var o = i[s];
                            r !== o && a !== o && n.removeChild(o)
                        }
                        n.removeAttribute("data-loaded"), a ? this.annotationLayer.hide() : this.annotationLayer = null, r || (this.canvas && (this.paintedViewportMap.delete(this.canvas), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this._resetZoomLayer()), this.svg && (this.paintedViewportMap.delete(this.svg), delete this.svg), this.loadingIconDiv = document.createElement("div"), this.loadingIconDiv.className = "loadingIcon", n.appendChild(this.loadingIconDiv)
                    },
                    update: function(e, t) {
                        this.scale = e || this.scale, void 0 !== t && (this.rotation = t);
                        var n = (this.rotation + this.pdfPageRotate) % 360;
                        if (this.viewport = this.viewport.clone({
                                scale: this.scale * i.CSS_UNITS,
                                rotation: n
                            }), this.svg) return this.cssTransform(this.svg, !0), void this.eventBus.dispatch("pagerendered", {
                            source: this,
                            pageNumber: this.id,
                            cssTransform: !0
                        });
                        var a = !1;
                        if (this.canvas && r.PDFJS.maxCanvasPixels > 0) {
                            var s = this.outputScale;
                            (Math.floor(this.viewport.width) * s.sx | 0) * (Math.floor(this.viewport.height) * s.sy | 0) > r.PDFJS.maxCanvasPixels && (a = !0)
                        }
                        if (this.canvas) {
                            if (r.PDFJS.useOnlyCssZoom || this.hasRestrictedScaling && a) return this.cssTransform(this.canvas, !0), void this.eventBus.dispatch("pagerendered", {
                                source: this,
                                pageNumber: this.id,
                                cssTransform: !0
                            });
                            this.zoomLayer || (this.zoomLayer = this.canvas.parentNode, this.zoomLayer.style.position = "absolute")
                        }
                        this.zoomLayer && this.cssTransform(this.zoomLayer.firstChild), this.reset(!0, !0)
                    },
                    cancelRendering: function() {
                        this.paintTask && (this.paintTask.cancel(), this.paintTask = null), this.renderingState = s.RenderingStates.INITIAL, this.resume = null, this.textLayer && (this.textLayer.cancel(), this.textLayer = null)
                    },
                    updatePosition: function() {
                        this.textLayer && this.textLayer.render(200)
                    },
                    cssTransform: function(e, t) {
                        var n = this.viewport.width,
                            i = this.viewport.height,
                            a = this.div;
                        e.style.width = e.parentNode.style.width = a.style.width = Math.floor(n) + "px", e.style.height = e.parentNode.style.height = a.style.height = Math.floor(i) + "px";
                        var s = this.viewport.rotation - this.paintedViewportMap.get(e).rotation,
                            o = Math.abs(s),
                            c = 1,
                            l = 1;
                        90 !== o && 270 !== o || (c = i / n, l = n / i);
                        var h = "rotate(" + s + "deg) scale(" + c + "," + l + ")";
                        if (r.CustomStyle.setProp("transform", e, h), this.textLayer) {
                            var u = this.textLayer.viewport,
                                d = this.viewport.rotation - u.rotation,
                                f = Math.abs(d),
                                p = n / u.width;
                            90 !== f && 270 !== f || (p = n / u.height);
                            var g, m, v = this.textLayer.textLayerDiv;
                            switch (f) {
                                case 0:
                                    g = m = 0;
                                    break;
                                case 90:
                                    g = 0, m = "-" + v.style.height;
                                    break;
                                case 180:
                                    g = "-" + v.style.width, m = "-" + v.style.height;
                                    break;
                                case 270:
                                    g = "-" + v.style.width, m = 0;
                                    break;
                                default:
                                    console.error("Bad rotation value.")
                            }
                            r.CustomStyle.setProp("transform", v, "rotate(" + f + "deg) scale(" + p + ", " + p + ") translate(" + g + ", " + m + ")"), r.CustomStyle.setProp("transformOrigin", v, "0% 0%")
                        }
                        t && this.annotationLayer && this.annotationLayer.render(this.viewport, "display")
                    },
                    get width() {
                        return this.viewport.width
                    },
                    get height() {
                        return this.viewport.height
                    },
                    getPagePoint: function(e, t) {
                        return this.viewport.convertToPdfPoint(e, t)
                    },
                    draw: function() {
                        this.renderingState !== s.RenderingStates.INITIAL && (console.error("Must be in new state before drawing"), this.reset()), this.renderingState = s.RenderingStates.RUNNING;
                        var e = this,
                            t = this.pdfPage,
                            n = this.div,
                            a = document.createElement("div");
                        a.style.width = n.style.width, a.style.height = n.style.height, a.classList.add("canvasWrapper"), this.annotationLayer && this.annotationLayer.div ? n.insertBefore(a, this.annotationLayer.div) : n.appendChild(a);
                        var o = null,
                            c = null;
                        this.textLayerFactory && (o = document.createElement("div"), o.className = "textLayer", o.style.width = a.style.width, o.style.height = a.style.height, this.annotationLayer && this.annotationLayer.div ? n.insertBefore(o, this.annotationLayer.div) : n.appendChild(o), c = this.textLayerFactory.createTextLayerBuilder(o, this.id - 1, this.viewport, this.enhanceTextSelection)), this.textLayer = c;
                        var l = null;
                        this.renderingQueue && (l = function(t) {
                            if (!e.renderingQueue.isHighestPriority(e)) return e.renderingState = s.RenderingStates.PAUSED, void(e.resume = function() {
                                e.renderingState = s.RenderingStates.RUNNING, t()
                            });
                            t()
                        });
                        var h = function(i) {
                                return u === e.paintTask && (e.paintTask = null), "cancelled" === i || i instanceof r.RenderingCancelledException ? (e.error = null, Promise.resolve(void 0)) : (e.renderingState = s.RenderingStates.FINISHED, e.loadingIconDiv && (n.removeChild(e.loadingIconDiv), delete e.loadingIconDiv), e._resetZoomLayer(!0), e.error = i, e.stats = t.stats, e.onAfterDraw && e.onAfterDraw(), e.eventBus.dispatch("pagerendered", {
                                    source: e,
                                    pageNumber: e.id,
                                    cssTransform: !1
                                }), i ? Promise.reject(i) : Promise.resolve(void 0))
                            },
                            u = this.renderer === i.RendererType.SVG ? this.paintOnSvg(a) : this.paintOnCanvas(a);
                        u.onRenderContinue = l, this.paintTask = u;
                        var d = u.promise.then(function() {
                            return h(null).then(function() {
                                c && t.getTextContent({
                                    normalizeWhitespace: !0
                                }).then(function(e) {
                                    c.setTextContent(e), c.render(200)
                                })
                            })
                        }, function(e) {
                            return h(e)
                        });
                        return this.annotationLayerFactory && (this.annotationLayer || (this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(n, t, this.renderInteractiveForms)), this.annotationLayer.render(this.viewport, "display")), n.setAttribute("data-loaded", !0), this.onBeforeDraw && this.onBeforeDraw(), d
                    },
                    paintOnCanvas: function(e) {
                        var t = (0, r.createPromiseCapability)(),
                            n = {
                                promise: t.promise,
                                onRenderContinue: function(e) {
                                    e()
                                },
                                cancel: function() {
                                    b.cancel()
                                }
                            },
                            a = this.viewport,
                            s = document.createElement("canvas");
                        s.id = "page" + this.id, s.setAttribute("hidden", "hidden");
                        var o = !0,
                            c = function() {
                                o && (s.removeAttribute("hidden"), o = !1)
                            };
                        e.appendChild(s), this.canvas = s, s.mozOpaque = !0;
                        var l = s.getContext("2d", {
                                alpha: !1
                            }),
                            h = (0, i.getOutputScale)(l);
                        if (this.outputScale = h, r.PDFJS.useOnlyCssZoom) {
                            var u = a.clone({
                                scale: i.CSS_UNITS
                            });
                            h.sx *= u.width / a.width, h.sy *= u.height / a.height, h.scaled = !0
                        }
                        if (r.PDFJS.maxCanvasPixels > 0) {
                            var d = a.width * a.height,
                                f = Math.sqrt(r.PDFJS.maxCanvasPixels / d);
                            h.sx > f || h.sy > f ? (h.sx = f, h.sy = f, h.scaled = !0, this.hasRestrictedScaling = !0) : this.hasRestrictedScaling = !1
                        }
                        var p = (0, i.approximateFraction)(h.sx),
                            g = (0, i.approximateFraction)(h.sy);
                        s.width = (0, i.roundToDivide)(a.width * h.sx, p[0]), s.height = (0, i.roundToDivide)(a.height * h.sy, g[0]), s.style.width = (0, i.roundToDivide)(a.width, p[1]) + "px", s.style.height = (0, i.roundToDivide)(a.height, g[1]) + "px", this.paintedViewportMap.set(s, a);
                        var m = h.scaled ? [h.sx, 0, 0, h.sy, 0, 0] : null,
                            v = {
                                canvasContext: l,
                                transform: m,
                                viewport: this.viewport,
                                renderInteractiveForms: this.renderInteractiveForms
                            },
                            b = this.pdfPage.render(v);
                        return b.onContinue = function(e) {
                            c(), n.onRenderContinue ? n.onRenderContinue(e) : e()
                        }, b.promise.then(function() {
                            c(), t.resolve(void 0)
                        }, function(e) {
                            c(), t.reject(e)
                        }), n
                    },
                    paintOnSvg: function(e) {
                        var t = !1,
                            n = function() {
                                if (t) throw r.PDFJS.pdfjsNext ? new r.RenderingCancelledException("Rendering cancelled, page " + a.id, "svg") : "cancelled"
                            },
                            a = this,
                            o = this.pdfPage,
                            c = this.viewport.clone({
                                scale: i.CSS_UNITS
                            });
                        return {
                            promise: o.getOperatorList().then(function(t) {
                                return n(), new r.SVGGraphics(o.commonObjs, o.objs).getSVG(t, c).then(function(t) {
                                    n(), a.svg = t, a.paintedViewportMap.set(t, c), t.style.width = e.style.width, t.style.height = e.style.height, a.renderingState = s.RenderingStates.FINISHED, e.appendChild(t)
                                })
                            }),
                            onRenderContinue: function(e) {
                                e()
                            },
                            cancel: function() {
                                t = !0
                            }
                        }
                    },
                    setPageLabel: function(e) {
                        this.pageLabel = "string" == typeof e ? e : null, null !== this.pageLabel ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label")
                    }
                }, e
            }();
        t.PDFPageView = o
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFPresentationMode = void 0;
        var i = n(0),
            r = function() {
                function e(e) {
                    this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, this.pdfViewer = e.pdfViewer, this.eventBus = e.eventBus;
                    var t = e.contextMenuItems || null;
                    this.active = !1, this.args = null, this.contextMenuOpen = !1, this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0, this.touchSwipeState = null, t && (t.contextFirstPage.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("firstpage")
                    }.bind(this)), t.contextLastPage.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("lastpage")
                    }.bind(this)), t.contextPageRotateCw.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("rotatecw")
                    }.bind(this)), t.contextPageRotateCcw.addEventListener("click", function(e) {
                        this.contextMenuOpen = !1, this.eventBus.dispatch("rotateccw")
                    }.bind(this)))
                }
                return e.prototype = {
                    request: function() {
                        if (this.switchInProgress || this.active || !this.viewer.hasChildNodes()) return !1;
                        if (this._addFullscreenChangeListeners(), this._setSwitchInProgress(), this._notifyStateChange(), this.container.requestFullscreen) this.container.requestFullscreen();
                        else if (this.container.mozRequestFullScreen) this.container.mozRequestFullScreen();
                        else if (this.container.webkitRequestFullscreen) this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                        else {
                            if (!this.container.msRequestFullscreen) return !1;
                            this.container.msRequestFullscreen()
                        }
                        return this.args = {
                            page: this.pdfViewer.currentPageNumber,
                            previousScale: this.pdfViewer.currentScaleValue
                        }, !0
                    },
                    _mouseWheel: function(e) {
                        if (this.active) {
                            e.preventDefault();
                            var t = (0, i.normalizeWheelEventDelta)(e),
                                n = (new Date).getTime(),
                                r = this.mouseScrollTimeStamp;
                            if (!(n > r && n - r < 50) && ((this.mouseScrollDelta > 0 && t < 0 || this.mouseScrollDelta < 0 && t > 0) && this._resetMouseScrollState(), this.mouseScrollDelta += t, Math.abs(this.mouseScrollDelta) >= .1)) {
                                var a = this.mouseScrollDelta;
                                this._resetMouseScrollState();
                                (a > 0 ? this._goToPreviousPage() : this._goToNextPage()) && (this.mouseScrollTimeStamp = n)
                            }
                        }
                    },
                    get isFullscreen() {
                        return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement)
                    },
                    _goToPreviousPage: function() {
                        var e = this.pdfViewer.currentPageNumber;
                        return !(e <= 1) && (this.pdfViewer.currentPageNumber = e - 1, !0)
                    },
                    _goToNextPage: function() {
                        var e = this.pdfViewer.currentPageNumber;
                        return !(e >= this.pdfViewer.pagesCount) && (this.pdfViewer.currentPageNumber = e + 1, !0)
                    },
                    _notifyStateChange: function() {
                        this.eventBus.dispatch("presentationmodechanged", {
                            source: this,
                            active: this.active,
                            switchInProgress: !!this.switchInProgress
                        })
                    },
                    _setSwitchInProgress: function() {
                        this.switchInProgress && clearTimeout(this.switchInProgress), this.switchInProgress = setTimeout(function() {
                            this._removeFullscreenChangeListeners(), delete this.switchInProgress, this._notifyStateChange()
                        }.bind(this), 1500)
                    },
                    _resetSwitchInProgress: function() {
                        this.switchInProgress && (clearTimeout(this.switchInProgress), delete this.switchInProgress)
                    },
                    _enter: function() {
                        this.active = !0, this._resetSwitchInProgress(), this._notifyStateChange(), this.container.classList.add("pdfPresentationMode"), setTimeout(function() {
                            this.pdfViewer.currentPageNumber = this.args.page, this.pdfViewer.currentScaleValue = "page-fit"
                        }.bind(this), 0), this._addWindowListeners(), this._showControls(), this.contextMenuOpen = !1, this.container.setAttribute("contextmenu", "viewerContextMenu"), window.getSelection().removeAllRanges()
                    },
                    _exit: function() {
                        var e = this.pdfViewer.currentPageNumber;
                        this.container.classList.remove("pdfPresentationMode"), setTimeout(function() {
                            this.active = !1, this._removeFullscreenChangeListeners(), this._notifyStateChange(), this.pdfViewer.currentScaleValue = this.args.previousScale, this.pdfViewer.currentPageNumber = e, this.args = null
                        }.bind(this), 0), this._removeWindowListeners(), this._hideControls(), this._resetMouseScrollState(), this.container.removeAttribute("contextmenu"), this.contextMenuOpen = !1
                    },
                    _mouseDown: function(e) {
                        if (this.contextMenuOpen) return this.contextMenuOpen = !1, void e.preventDefault();
                        if (0 === e.button) {
                            e.target.href && e.target.classList.contains("internalLink") || (e.preventDefault(), this.pdfViewer.currentPageNumber += e.shiftKey ? -1 : 1)
                        }
                    },
                    _contextMenu: function() {
                        this.contextMenuOpen = !0
                    },
                    _showControls: function() {
                        this.controlsTimeout ? clearTimeout(this.controlsTimeout) : this.container.classList.add("pdfPresentationModeControls"), this.controlsTimeout = setTimeout(function() {
                            this.container.classList.remove("pdfPresentationModeControls"), delete this.controlsTimeout
                        }.bind(this), 3e3)
                    },
                    _hideControls: function() {
                        this.controlsTimeout && (clearTimeout(this.controlsTimeout), this.container.classList.remove("pdfPresentationModeControls"), delete this.controlsTimeout)
                    },
                    _resetMouseScrollState: function() {
                        this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0
                    },
                    _touchSwipe: function(e) {
                        if (this.active) {
                            var t = Math.PI / 6;
                            if (e.touches.length > 1) return void(this.touchSwipeState = null);
                            switch (e.type) {
                                case "touchstart":
                                    this.touchSwipeState = {
                                        startX: e.touches[0].pageX,
                                        startY: e.touches[0].pageY,
                                        endX: e.touches[0].pageX,
                                        endY: e.touches[0].pageY
                                    };
                                    break;
                                case "touchmove":
                                    if (null === this.touchSwipeState) return;
                                    this.touchSwipeState.endX = e.touches[0].pageX, this.touchSwipeState.endY = e.touches[0].pageY, e.preventDefault();
                                    break;
                                case "touchend":
                                    if (null === this.touchSwipeState) return;
                                    var n = 0,
                                        i = this.touchSwipeState.endX - this.touchSwipeState.startX,
                                        r = this.touchSwipeState.endY - this.touchSwipeState.startY,
                                        a = Math.abs(Math.atan2(r, i));
                                    Math.abs(i) > 50 && (a <= t || a >= Math.PI - t) ? n = i : Math.abs(r) > 50 && Math.abs(a - Math.PI / 2) <= t && (n = r), n > 0 ? this._goToPreviousPage() : n < 0 && this._goToNextPage()
                            }
                        }
                    },
                    _addWindowListeners: function() {
                        this.showControlsBind = this._showControls.bind(this), this.mouseDownBind = this._mouseDown.bind(this), this.mouseWheelBind = this._mouseWheel.bind(this), this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this), this.contextMenuBind = this._contextMenu.bind(this), this.touchSwipeBind = this._touchSwipe.bind(this), window.addEventListener("mousemove", this.showControlsBind), window.addEventListener("mousedown", this.mouseDownBind), window.addEventListener("wheel", this.mouseWheelBind), window.addEventListener("keydown", this.resetMouseScrollStateBind), window.addEventListener("contextmenu", this.contextMenuBind), window.addEventListener("touchstart", this.touchSwipeBind), window.addEventListener("touchmove", this.touchSwipeBind), window.addEventListener("touchend", this.touchSwipeBind)
                    },
                    _removeWindowListeners: function() {
                        window.removeEventListener("mousemove", this.showControlsBind), window.removeEventListener("mousedown", this.mouseDownBind), window.removeEventListener("wheel", this.mouseWheelBind), window.removeEventListener("keydown", this.resetMouseScrollStateBind), window.removeEventListener("contextmenu", this.contextMenuBind), window.removeEventListener("touchstart", this.touchSwipeBind), window.removeEventListener("touchmove", this.touchSwipeBind), window.removeEventListener("touchend", this.touchSwipeBind), delete this.showControlsBind, delete this.mouseDownBind, delete this.mouseWheelBind, delete this.resetMouseScrollStateBind, delete this.contextMenuBind, delete this.touchSwipeBind
                    },
                    _fullscreenChange: function() {
                        this.isFullscreen ? this._enter() : this._exit()
                    },
                    _addFullscreenChangeListeners: function() {
                        this.fullscreenChangeBind = this._fullscreenChange.bind(this), window.addEventListener("fullscreenchange", this.fullscreenChangeBind), window.addEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.addEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.addEventListener("MSFullscreenChange", this.fullscreenChangeBind)
                    },
                    _removeFullscreenChangeListeners: function() {
                        window.removeEventListener("fullscreenchange", this.fullscreenChangeBind), window.removeEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("MSFullscreenChange", this.fullscreenChangeBind), delete this.fullscreenChangeBind
                    }
                }, e
            }();
        t.PDFPresentationMode = r
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFSidebar = t.SidebarView = void 0;
        var i = n(0),
            r = n(3),
            a = {
                NONE: 0,
                THUMBS: 1,
                OUTLINE: 2,
                ATTACHMENTS: 3
            },
            s = function() {
                function e(e) {
                    this.isOpen = !1, this.active = a.THUMBS, this.isInitialViewSet = !1, this.onToggled = null, this.pdfViewer = e.pdfViewer, this.pdfThumbnailViewer = e.pdfThumbnailViewer, this.pdfOutlineViewer = e.pdfOutlineViewer, this.mainContainer = e.mainContainer, this.outerContainer = e.outerContainer, this.eventBus = e.eventBus, this.toggleButton = e.toggleButton, this.thumbnailButton = e.thumbnailButton, this.outlineButton = e.outlineButton, this.attachmentsButton = e.attachmentsButton, this.thumbnailView = e.thumbnailView, this.outlineView = e.outlineView, this.attachmentsView = e.attachmentsView, this.disableNotification = e.disableNotification || !1, this._addEventListeners()
                }
                return e.prototype = {
                    reset: function() {
                        this.isInitialViewSet = !1, this._hideUINotification(null), this.switchView(a.THUMBS), this.outlineButton.disabled = !1, this.attachmentsButton.disabled = !1
                    },
                    get visibleView() {
                        return this.isOpen ? this.active : a.NONE
                    },
                    get isThumbnailViewVisible() {
                        return this.isOpen && this.active === a.THUMBS
                    },
                    get isOutlineViewVisible() {
                        return this.isOpen && this.active === a.OUTLINE
                    },
                    get isAttachmentsViewVisible() {
                        return this.isOpen && this.active === a.ATTACHMENTS
                    },
                    setInitialView: function(e) {
                        if (!this.isInitialViewSet) {
                            if (this.isInitialViewSet = !0, this.isOpen && e === a.NONE) return void this._dispatchEvent();
                            var t = e === this.visibleView;
                            this.switchView(e, !0), t && this._dispatchEvent()
                        }
                    },
                    switchView: function(e, t) {
                        if (e === a.NONE) return void this.close();
                        var n = e !== this.active,
                            i = !1;
                        switch (e) {
                            case a.THUMBS:
                                this.thumbnailButton.classList.add("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.remove("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.add("hidden"), this.isOpen && n && (this._updateThumbnailViewer(), i = !0);
                                break;
                            case a.OUTLINE:
                                if (this.outlineButton.disabled) return;
                                this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.add("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.remove("hidden"), this.attachmentsView.classList.add("hidden");
                                break;
                            case a.ATTACHMENTS:
                                if (this.attachmentsButton.disabled) return;
                                this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.add("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.remove("hidden");
                                break;
                            default:
                                return void console.error('PDFSidebar_switchView: "' + e + '" is an unsupported value.')
                        }
                        if (this.active = 0 | e, t && !this.isOpen) return void this.open();
                        i && this._forceRendering(), n && this._dispatchEvent(), this._hideUINotification(this.active)
                    },
                    open: function() {
                        this.isOpen || (this.isOpen = !0, this.toggleButton.classList.add("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.add("sidebarOpen"), this.active === a.THUMBS && this._updateThumbnailViewer(), this._forceRendering(), this._dispatchEvent(), this._hideUINotification(this.active))
                    },
                    close: function() {
                        this.isOpen && (this.isOpen = !1, this.toggleButton.classList.remove("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.remove("sidebarOpen"), this._forceRendering(), this._dispatchEvent())
                    },
                    toggle: function() {
                        this.isOpen ? this.close() : this.open()
                    },
                    _dispatchEvent: function() {
                        this.eventBus.dispatch("sidebarviewchanged", {
                            source: this,
                            view: this.visibleView
                        })
                    },
                    _forceRendering: function() {
                        this.onToggled ? this.onToggled() : (this.pdfViewer.forceRendering(), this.pdfThumbnailViewer.forceRendering())
                    },
                    _updateThumbnailViewer: function() {
                        for (var e = this.pdfViewer, t = this.pdfThumbnailViewer, n = e.pagesCount, i = 0; i < n; i++) {
                            var a = e.getPageView(i);
                            if (a && a.renderingState === r.RenderingStates.FINISHED) {
                                t.getThumbnail(i).setImage(a)
                            }
                        }
                        t.scrollThumbnailIntoView(e.currentPageNumber)
                    },
                    _showUINotification: function(e) {
                        if (!this.disableNotification) {
                            if (this.toggleButton.title = i.mozL10n.get("toggle_sidebar_notification.title", null, "Toggle Sidebar (document contains outline/attachments)"), this.isOpen) {
                                if (e === this.active) return
                            } else this.toggleButton.classList.add("pdfSidebarNotification");
                            switch (e) {
                                case a.OUTLINE:
                                    this.outlineButton.classList.add("pdfSidebarNotification");
                                    break;
                                case a.ATTACHMENTS:
                                    this.attachmentsButton.classList.add("pdfSidebarNotification")
                            }
                        }
                    },
                    _hideUINotification: function(e) {
                        if (!this.disableNotification) {
                            var t = function(e) {
                                switch (e) {
                                    case a.OUTLINE:
                                        this.outlineButton.classList.remove("pdfSidebarNotification");
                                        break;
                                    case a.ATTACHMENTS:
                                        this.attachmentsButton.classList.remove("pdfSidebarNotification")
                                }
                            }.bind(this);
                            if (this.isOpen || null === e) {
                                if (this.toggleButton.classList.remove("pdfSidebarNotification"), null !== e) return void t(e);
                                for (e in a) t(a[e]);
                                this.toggleButton.title = i.mozL10n.get("toggle_sidebar.title", null, "Toggle Sidebar")
                            }
                        }
                    },
                    _addEventListeners: function() {
                        var e = this;
                        e.mainContainer.addEventListener("transitionend", function(t) {
                            t.target === this && e.outerContainer.classList.remove("sidebarMoving")
                        }), e.thumbnailButton.addEventListener("click", function() {
                            e.switchView(a.THUMBS)
                        }), e.outlineButton.addEventListener("click", function() {
                            e.switchView(a.OUTLINE)
                        }), e.outlineButton.addEventListener("dblclick", function() {
                            e.pdfOutlineViewer.toggleOutlineTree()
                        }), e.attachmentsButton.addEventListener("click", function() {
                            e.switchView(a.ATTACHMENTS)
                        }), e.eventBus.on("outlineloaded", function(t) {
                            var n = t.outlineCount;
                            e.outlineButton.disabled = !n, n ? e._showUINotification(a.OUTLINE) : e.active === a.OUTLINE && e.switchView(a.THUMBS)
                        }), e.eventBus.on("attachmentsloaded", function(t) {
                            var n = t.attachmentsCount;
                            e.attachmentsButton.disabled = !n, n ? e._showUINotification(a.ATTACHMENTS) : e.active === a.ATTACHMENTS && e.switchView(a.THUMBS)
                        }), e.eventBus.on("presentationmodechanged", function(t) {
                            t.active || t.switchInProgress || !e.isThumbnailViewVisible || e._updateThumbnailViewer()
                        })
                    }
                }, e
            }();
        t.SidebarView = a, t.PDFSidebar = s
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFThumbnailView = void 0;
        var i = n(1),
            r = n(0),
            a = n(3),
            s = 98,
            o = 1,
            c = function() {
                function e(e, n) {
                    var i = t.tempImageCache;
                    i || (i = document.createElement("canvas"), t.tempImageCache = i), i.width = e, i.height = n, i.mozOpaque = !0;
                    var r = i.getContext("2d", {
                        alpha: !1
                    });
                    return r.save(), r.fillStyle = "rgb(255, 255, 255)", r.fillRect(0, 0, e, n), r.restore(), i
                }

                function t(e) {
                    var t = e.container,
                        n = e.id,
                        i = e.defaultViewport,
                        c = e.linkService,
                        l = e.renderingQueue,
                        h = e.disableCanvasToImageConversion || !1;
                    this.id = n, this.renderingId = "thumbnail" + n, this.pageLabel = null, this.pdfPage = null, this.rotation = 0, this.viewport = i, this.pdfPageRotate = i.rotation, this.linkService = c, this.renderingQueue = l, this.renderTask = null, this.renderingState = a.RenderingStates.INITIAL, this.resume = null, this.disableCanvasToImageConversion = h, this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasWidth = s, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth;
                    var u = document.createElement("a");
                    u.href = c.getAnchorUrl("#page=" + n), u.title = r.mozL10n.get("thumb_page_title", {
                        page: n
                    }, "Page {{page}}"), u.onclick = function() {
                        return c.page = n, !1
                    }, this.anchor = u;
                    var d = document.createElement("div");
                    d.className = "thumbnail", d.setAttribute("data-page-number", this.id), this.div = d, 1 === n && d.classList.add("selected");
                    var f = document.createElement("div");
                    f.className = "thumbnailSelectionRing";
                    var p = 2 * o;
                    f.style.width = this.canvasWidth + p + "px", f.style.height = this.canvasHeight + p + "px", this.ring = f, d.appendChild(f), u.appendChild(d), t.appendChild(u)
                }
                return t.prototype = {
                    setPdfPage: function(e) {
                        this.pdfPage = e, this.pdfPageRotate = e.rotate;
                        var t = (this.rotation + this.pdfPageRotate) % 360;
                        this.viewport = e.getViewport(1, t), this.reset()
                    },
                    reset: function() {
                        this.cancelRendering(), this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth, this.div.removeAttribute("data-loaded");
                        for (var e = this.ring, t = e.childNodes, n = t.length - 1; n >= 0; n--) e.removeChild(t[n]);
                        var i = 2 * o;
                        e.style.width = this.canvasWidth + i + "px", e.style.height = this.canvasHeight + i + "px", this.canvas && (this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this.image && (this.image.removeAttribute("src"), delete this.image)
                    },
                    update: function(e) {
                        void 0 !== e && (this.rotation = e);
                        var t = (this.rotation + this.pdfPageRotate) % 360;
                        this.viewport = this.viewport.clone({
                            scale: 1,
                            rotation: t
                        }), this.reset()
                    },
                    cancelRendering: function() {
                        this.renderTask && (this.renderTask.cancel(), this.renderTask = null), this.renderingState = a.RenderingStates.INITIAL, this.resume = null
                    },
                    _getPageDrawContext: function(e) {
                        var t = document.createElement("canvas");
                        this.canvas = t, t.mozOpaque = !0;
                        var n = t.getContext("2d", {
                                alpha: !1
                            }),
                            i = (0, r.getOutputScale)(n);
                        return t.width = this.canvasWidth * i.sx | 0, t.height = this.canvasHeight * i.sy | 0, t.style.width = this.canvasWidth + "px", t.style.height = this.canvasHeight + "px", !e && i.scaled && n.scale(i.sx, i.sy), n
                    },
                    _convertCanvasToImage: function() {
                        if (this.canvas && this.renderingState === a.RenderingStates.FINISHED) {
                            var e = this.renderingId,
                                t = r.mozL10n.get("thumb_page_canvas", {
                                    page: this.pageId
                                }, "Thumbnail of Page {{page}}");
                            if (this.disableCanvasToImageConversion) return this.canvas.id = e, this.canvas.className = "thumbnailImage", this.canvas.setAttribute("aria-label", t), this.div.setAttribute("data-loaded", !0), void this.ring.appendChild(this.canvas);
                            var n = document.createElement("img");
                            n.id = e, n.className = "thumbnailImage", n.setAttribute("aria-label", t), n.style.width = this.canvasWidth + "px", n.style.height = this.canvasHeight + "px", n.src = this.canvas.toDataURL(), this.image = n, this.div.setAttribute("data-loaded", !0), this.ring.appendChild(n), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas
                        }
                    },
                    draw: function() {
                        function e(e) {
                            if (l === n.renderTask && (n.renderTask = null), "cancelled" === e || e instanceof i.RenderingCancelledException) return void t.resolve(void 0);
                            n.renderingState = a.RenderingStates.FINISHED, n._convertCanvasToImage(), e ? t.reject(e) : t.resolve(void 0)
                        }
                        if (this.renderingState !== a.RenderingStates.INITIAL) return console.error("Must be in new state before drawing"), Promise.resolve(void 0);
                        this.renderingState = a.RenderingStates.RUNNING;
                        var t = (0, i.createPromiseCapability)(),
                            n = this,
                            r = this._getPageDrawContext(),
                            s = this.viewport.clone({
                                scale: this.scale
                            }),
                            o = function(e) {
                                if (!n.renderingQueue.isHighestPriority(n)) return n.renderingState = a.RenderingStates.PAUSED, void(n.resume = function() {
                                    n.renderingState = a.RenderingStates.RUNNING, e()
                                });
                                e()
                            },
                            c = {
                                canvasContext: r,
                                viewport: s
                            },
                            l = this.renderTask = this.pdfPage.render(c);
                        return l.onContinue = o, l.promise.then(function() {
                            e(null)
                        }, function(t) {
                            e(t)
                        }), t.promise
                    },
                    setImage: function(t) {
                        if (this.renderingState === a.RenderingStates.INITIAL) {
                            var n = t.canvas;
                            if (n) {
                                this.pdfPage || this.setPdfPage(t.pdfPage), this.renderingState = a.RenderingStates.FINISHED;
                                var i = this._getPageDrawContext(!0),
                                    r = i.canvas;
                                if (n.width <= 2 * r.width) return i.drawImage(n, 0, 0, n.width, n.height, 0, 0, r.width, r.height), void this._convertCanvasToImage();
                                for (var s = r.width << 3, o = r.height << 3, c = e(s, o), l = c.getContext("2d"); s > n.width || o > n.height;) s >>= 1, o >>= 1;
                                for (l.drawImage(n, 0, 0, n.width, n.height, 0, 0, s, o); s > 2 * r.width;) l.drawImage(c, 0, 0, s, o, 0, 0, s >> 1, o >> 1), s >>= 1, o >>= 1;
                                i.drawImage(c, 0, 0, s, o, 0, 0, r.width, r.height), this._convertCanvasToImage()
                            }
                        }
                    },
                    get pageId() {
                        return null !== this.pageLabel ? this.pageLabel : this.id
                    },
                    setPageLabel: function(e) {
                        if (this.pageLabel = "string" == typeof e ? e : null, this.anchor.title = r.mozL10n.get("thumb_page_title", {
                                page: this.pageId
                            }, "Page {{page}}"), this.renderingState === a.RenderingStates.FINISHED) {
                            var t = r.mozL10n.get("thumb_page_canvas", {
                                page: this.pageId
                            }, "Thumbnail of Page {{page}}");
                            this.image ? this.image.setAttribute("aria-label", t) : this.disableCanvasToImageConversion && this.canvas && this.canvas.setAttribute("aria-label", t)
                        }
                    }
                }, t
            }();
        c.tempImageCache = null, t.PDFThumbnailView = c
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFThumbnailViewer = void 0;
        var i = n(0),
            r = n(24),
            a = function() {
                function e(e) {
                    this.container = e.container, this.renderingQueue = e.renderingQueue, this.linkService = e.linkService, this.scroll = (0, i.watchScroll)(this.container, this._scrollUpdated.bind(this)), this._resetView()
                }
                return e.prototype = {
                    _scrollUpdated: function() {
                        this.renderingQueue.renderHighestPriority()
                    },
                    getThumbnail: function(e) {
                        return this.thumbnails[e]
                    },
                    _getVisibleThumbs: function() {
                        return (0, i.getVisibleElements)(this.container, this.thumbnails)
                    },
                    scrollThumbnailIntoView: function(e) {
                        var t = document.querySelector(".thumbnail.selected");
                        t && t.classList.remove("selected");
                        var n = document.querySelector('div.thumbnail[data-page-number="' + e + '"]');
                        n && n.classList.add("selected");
                        var r = this._getVisibleThumbs(),
                            a = r.views.length;
                        if (a > 0) {
                            var s = r.first.id,
                                o = a > 1 ? r.last.id : s;
                            (e <= s || e >= o) && (0, i.scrollIntoView)(n, {
                                top: -19
                            })
                        }
                    },
                    get pagesRotation() {
                        return this._pagesRotation
                    },
                    set pagesRotation(e) {
                        this._pagesRotation = e;
                        for (var t = 0, n = this.thumbnails.length; t < n; t++) {
                            this.thumbnails[t].update(e)
                        }
                    },
                    cleanup: function() {
                        var e = r.PDFThumbnailView.tempImageCache;
                        e && (e.width = 0, e.height = 0), r.PDFThumbnailView.tempImageCache = null
                    },
                    _resetView: function() {
                        this.thumbnails = [], this._pageLabels = null, this._pagesRotation = 0, this._pagesRequests = [], this.container.textContent = ""
                    },
                    setDocument: function(e) {
                        return this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e ? e.getPage(1).then(function(t) {
                            for (var n = e.numPages, i = t.getViewport(1), a = 1; a <= n; ++a) {
                                var s = new r.PDFThumbnailView({
                                    container: this.container,
                                    id: a,
                                    defaultViewport: i.clone(),
                                    linkService: this.linkService,
                                    renderingQueue: this.renderingQueue,
                                    disableCanvasToImageConversion: !1
                                });
                                this.thumbnails.push(s)
                            }
                        }.bind(this)) : Promise.resolve()
                    },
                    _cancelRendering: function() {
                        for (var e = 0, t = this.thumbnails.length; e < t; e++) this.thumbnails[e] && this.thumbnails[e].cancelRendering()
                    },
                    setPageLabels: function(e) {
                        if (this.pdfDocument) {
                            e ? e instanceof Array && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.")) : this._pageLabels = null;
                            for (var t = 0, n = this.thumbnails.length; t < n; t++) {
                                var i = this.thumbnails[t],
                                    r = this._pageLabels && this._pageLabels[t];
                                i.setPageLabel(r)
                            }
                        }
                    },
                    _ensurePdfPageLoaded: function(e) {
                        if (e.pdfPage) return Promise.resolve(e.pdfPage);
                        var t = e.id;
                        if (this._pagesRequests[t]) return this._pagesRequests[t];
                        var n = this.pdfDocument.getPage(t).then(function(n) {
                            return e.setPdfPage(n), this._pagesRequests[t] = null, n
                        }.bind(this));
                        return this._pagesRequests[t] = n, n
                    },
                    forceRendering: function() {
                        var e = this._getVisibleThumbs(),
                            t = this.renderingQueue.getHighestPriority(e, this.thumbnails, this.scroll.down);
                        return !!t && (this._ensurePdfPageLoaded(t).then(function() {
                            this.renderingQueue.renderView(t)
                        }.bind(this)), !0)
                    }
                }, e
            }();
        t.PDFThumbnailViewer = a
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.PDFViewer = t.PresentationModeState = void 0;
        var i = n(1),
            r = n(0),
            a = n(3),
            s = n(11),
            o = n(2),
            c = n(21),
            l = n(6),
            h = n(28),
            u = {
                UNKNOWN: 0,
                NORMAL: 1,
                CHANGING: 2,
                FULLSCREEN: 3
            },
            d = function() {
                function e(e) {
                    var t = [];
                    this.push = function(n) {
                        var i = t.indexOf(n);
                        i >= 0 && t.splice(i, 1), t.push(n), t.length > e && t.shift().destroy()
                    }, this.resize = function(n) {
                        for (e = n; t.length > e;) t.shift().destroy()
                    }
                }

                function t(e, t) {
                    return t === e || Math.abs(t - e) < 1e-15
                }

                function n(e) {
                    return e.width <= e.height
                }

                function d(e) {
                    this.container = e.container, this.viewer = e.viewer || e.container.firstElementChild, this.eventBus = e.eventBus || (0, o.getGlobalEventBus)(), this.linkService = e.linkService || new l.SimpleLinkService, this.downloadManager = e.downloadManager || null, this.removePageBorders = e.removePageBorders || !1, this.enhanceTextSelection = e.enhanceTextSelection || !1, this.renderInteractiveForms = e.renderInteractiveForms || !1, this.enablePrintAutoRotate = e.enablePrintAutoRotate || !1, this.renderer = e.renderer || r.RendererType.CANVAS, this.defaultRenderingQueue = !e.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new a.PDFRenderingQueue, this.renderingQueue.setViewer(this)) : this.renderingQueue = e.renderingQueue, this.scroll = (0, r.watchScroll)(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = u.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders")
                }
                return d.prototype = {
                    get pagesCount() {
                        return this._pages.length
                    },
                    getPageView: function(e) {
                        return this._pages[e]
                    },
                    get pageViewsReady() {
                        return this._pageViewsReady
                    },
                    get currentPageNumber() {
                        return this._currentPageNumber
                    },
                    set currentPageNumber(e) {
                        if ((0 | e) !== e) throw new Error("Invalid page number.");
                        if (!this.pdfDocument) return void(this._currentPageNumber = e);
                        this._setCurrentPageNumber(e, !0)
                    },
                    _setCurrentPageNumber: function(e, t) {
                        if (this._currentPageNumber === e) return void(t && this._resetCurrentPageView());
                        if (!(0 < e && e <= this.pagesCount)) return void console.error('PDFViewer_setCurrentPageNumber: "' + e + '" is out of bounds.');
                        var n = {
                            source: this,
                            pageNumber: e,
                            pageLabel: this._pageLabels && this._pageLabels[e - 1]
                        };
                        this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", n), this.eventBus.dispatch("pagechange", n), t && this._resetCurrentPageView()
                    },
                    get currentPageLabel() {
                        return this._pageLabels && this._pageLabels[this._currentPageNumber - 1]
                    },
                    set currentPageLabel(e) {
                        var t = 0 | e;
                        if (this._pageLabels) {
                            var n = this._pageLabels.indexOf(e);
                            n >= 0 && (t = n + 1)
                        }
                        this.currentPageNumber = t
                    },
                    get currentScale() {
                        return this._currentScale !== r.UNKNOWN_SCALE ? this._currentScale : r.DEFAULT_SCALE
                    },
                    set currentScale(e) {
                        if (isNaN(e)) throw new Error("Invalid numeric scale");
                        if (!this.pdfDocument) return this._currentScale = e, void(this._currentScaleValue = e !== r.UNKNOWN_SCALE ? e.toString() : null);
                        this._setScale(e, !1)
                    },
                    get currentScaleValue() {
                        return this._currentScaleValue
                    },
                    set currentScaleValue(e) {
                        if (!this.pdfDocument) return this._currentScale = isNaN(e) ? r.UNKNOWN_SCALE : e, void(this._currentScaleValue = e.toString());
                        this._setScale(e, !1)
                    },
                    get pagesRotation() {
                        return this._pagesRotation
                    },
                    set pagesRotation(e) {
                        if ("number" != typeof e || e % 90 != 0) throw new Error("Invalid pages rotation angle.");
                        if (this._pagesRotation = e, this.pdfDocument) {
                            for (var t = 0, n = this._pages.length; t < n; t++) {
                                var i = this._pages[t];
                                i.update(i.scale, e)
                            }
                            this._setScale(this._currentScaleValue, !0), this.defaultRenderingQueue && this.update()
                        }
                    },
                    setDocument: function(e) {
                        var t = this;
                        if (this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e) {
                            var n = e.numPages,
                                a = (0, i.createPromiseCapability)();
                            this.pagesPromise = a.promise, a.promise.then(function() {
                                t._pageViewsReady = !0, t.eventBus.dispatch("pagesloaded", {
                                    source: t,
                                    pagesCount: n
                                })
                            });
                            var s = !1,
                                o = (0, i.createPromiseCapability)();
                            this.onePageRendered = o.promise;
                            var l = function(e) {
                                    e.onBeforeDraw = function() {
                                        t._buffer.push(e)
                                    }, e.onAfterDraw = function() {
                                        s || (s = !0, o.resolve())
                                    }
                                },
                                h = e.getPage(1);
                            return this.firstPagePromise = h, h.then(function(s) {
                                for (var h = t.currentScale, u = s.getViewport(h * r.CSS_UNITS), d = 1; d <= n; ++d) {
                                    var f = null;
                                    i.PDFJS.disableTextLayer || (f = t);
                                    var p = new c.PDFPageView({
                                        container: t.viewer,
                                        eventBus: t.eventBus,
                                        id: d,
                                        scale: h,
                                        defaultViewport: u.clone(),
                                        renderingQueue: t.renderingQueue,
                                        textLayerFactory: f,
                                        annotationLayerFactory: t,
                                        enhanceTextSelection: t.enhanceTextSelection,
                                        renderInteractiveForms: t.renderInteractiveForms,
                                        renderer: t.renderer
                                    });
                                    l(p), t._pages.push(p)
                                }
                                o.promise.then(function() {
                                    if (i.PDFJS.disableAutoFetch) return void a.resolve();
                                    for (var r = n, s = 1; s <= n; ++s) e.getPage(s).then(function(e, t) {
                                        var n = this._pages[e - 1];
                                        n.pdfPage || n.setPdfPage(t), this.linkService.cachePageRef(e, t.ref), 0 == --r && a.resolve()
                                    }.bind(t, s))
                                }), t.eventBus.dispatch("pagesinit", {
                                    source: t
                                }), t.defaultRenderingQueue && t.update(), t.findController && t.findController.resolveFirstPage()
                            })
                        }
                    },
                    setPageLabels: function(e) {
                        if (this.pdfDocument) {
                            e ? e instanceof Array && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("PDFViewer_setPageLabels: Invalid page labels.")) : this._pageLabels = null;
                            for (var t = 0, n = this._pages.length; t < n; t++) {
                                var i = this._pages[t],
                                    r = this._pageLabels && this._pageLabels[t];
                                i.setPageLabel(r)
                            }
                        }
                    },
                    _resetView: function() {
                        this._pages = [], this._currentPageNumber = 1, this._currentScale = r.UNKNOWN_SCALE, this._currentScaleValue = null, this._pageLabels = null, this._buffer = new e(10), this._location = null, this._pagesRotation = 0, this._pagesRequests = [], this._pageViewsReady = !1, this.viewer.textContent = ""
                    },
                    _scrollUpdate: function() {
                        if (0 !== this.pagesCount) {
                            this.update();
                            for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e].updatePosition()
                        }
                    },
                    _setScaleDispatchEvent: function(e, t, n) {
                        var i = {
                            source: this,
                            scale: e,
                            presetValue: n ? t : void 0
                        };
                        this.eventBus.dispatch("scalechanging", i), this.eventBus.dispatch("scalechange", i)
                    },
                    _setScaleUpdatePages: function(e, n, r, a) {
                        if (this._currentScaleValue = n.toString(), t(this._currentScale, e)) return void(a && this._setScaleDispatchEvent(e, n, !0));
                        for (var s = 0, o = this._pages.length; s < o; s++) this._pages[s].update(e);
                        if (this._currentScale = e, !r) {
                            var c, l = this._currentPageNumber;
                            !this._location || i.PDFJS.ignoreCurrentPositionOnZoom || this.isInPresentationMode || this.isChangingPresentationMode || (l = this._location.pageNumber, c = [null, {
                                name: "XYZ"
                            }, this._location.left, this._location.top, null]), this.scrollPageIntoView({
                                pageNumber: l,
                                destArray: c,
                                allowNegativeOffset: !0
                            })
                        }
                        this._setScaleDispatchEvent(e, n, a), this.defaultRenderingQueue && this.update()
                    },
                    _setScale: function(e, t) {
                        var n = parseFloat(e);
                        if (n > 0) this._setScaleUpdatePages(n, e, t, !1);
                        else {
                            var i = this._pages[this._currentPageNumber - 1];
                            if (!i) return;
                            var a = this.isInPresentationMode || this.removePageBorders ? 0 : r.SCROLLBAR_PADDING,
                                s = this.isInPresentationMode || this.removePageBorders ? 0 : r.VERTICAL_PADDING,
                                o = (this.container.clientWidth - a) / i.width * i.scale,
                                c = (this.container.clientHeight - s) / i.height * i.scale;
                            switch (e) {
                                case "page-actual":
                                    n = 1;
                                    break;
                                case "page-width":
                                    n = o;
                                    break;
                                case "page-height":
                                    n = c;
                                    break;
                                case "page-fit":
                                    n = Math.min(o, c);
                                    break;
                                case "auto":
                                    var l = i.width > i.height,
                                        h = l ? Math.min(c, o) : o;
                                    n = Math.min(r.MAX_AUTO_SCALE, h);
                                    break;
                                default:
                                    return void console.error('PDFViewer_setScale: "' + e + '" is an unknown zoom value.')
                            }
                            this._setScaleUpdatePages(n, e, t, !0)
                        }
                    },
                    _resetCurrentPageView: function() {
                        this.isInPresentationMode && this._setScale(this._currentScaleValue, !0);
                        var e = this._pages[this._currentPageNumber - 1];
                        (0, r.scrollIntoView)(e.div)
                    },
                    scrollPageIntoView: function(e) {
                        if (this.pdfDocument) {
                            if (arguments.length > 1 || "number" == typeof e) {
                                console.warn("Call of scrollPageIntoView() with obsolete signature.");
                                var t = {};
                                "number" == typeof e && (t.pageNumber = e), arguments[1] instanceof Array && (t.destArray = arguments[1]), e = t
                            }
                            var n = e.pageNumber || 0,
                                i = e.destArray || null,
                                a = e.allowNegativeOffset || !1;
                            if (this.isInPresentationMode || !i) return void this._setCurrentPageNumber(n, !0);
                            var s = this._pages[n - 1];
                            if (!s) return void console.error('PDFViewer_scrollPageIntoView: Invalid "pageNumber" parameter.');
                            var o, c, l = 0,
                                h = 0,
                                u = 0,
                                d = 0,
                                f = s.rotation % 180 != 0,
                                p = (f ? s.height : s.width) / s.scale / r.CSS_UNITS,
                                g = (f ? s.width : s.height) / s.scale / r.CSS_UNITS,
                                m = 0;
                            switch (i[1].name) {
                                case "XYZ":
                                    l = i[2], h = i[3], m = i[4], l = null !== l ? l : 0, h = null !== h ? h : g;
                                    break;
                                case "Fit":
                                case "FitB":
                                    m = "page-fit";
                                    break;
                                case "FitH":
                                case "FitBH":
                                    h = i[2], m = "page-width", null === h && this._location && (l = this._location.left, h = this._location.top);
                                    break;
                                case "FitV":
                                case "FitBV":
                                    l = i[2], u = p, d = g, m = "page-height";
                                    break;
                                case "FitR":
                                    l = i[2], h = i[3], u = i[4] - l, d = i[5] - h;
                                    var v = this.removePageBorders ? 0 : r.SCROLLBAR_PADDING,
                                        b = this.removePageBorders ? 0 : r.VERTICAL_PADDING;
                                    o = (this.container.clientWidth - v) / u / r.CSS_UNITS, c = (this.container.clientHeight - b) / d / r.CSS_UNITS, m = Math.min(Math.abs(o), Math.abs(c));
                                    break;
                                default:
                                    return void console.error("PDFViewer_scrollPageIntoView: '" + i[1].name + "' is not a valid destination type.")
                            }
                            if (m && m !== this._currentScale ? this.currentScaleValue = m : this._currentScale === r.UNKNOWN_SCALE && (this.currentScaleValue = r.DEFAULT_SCALE_VALUE), "page-fit" === m && !i[4]) return void(0, r.scrollIntoView)(s.div);
                            var y = [s.viewport.convertToViewportPoint(l, h), s.viewport.convertToViewportPoint(l + u, h + d)],
                                w = Math.min(y[0][0], y[1][0]),
                                A = Math.min(y[0][1], y[1][1]);
                            a || (w = Math.max(w, 0), A = Math.max(A, 0)), (0, r.scrollIntoView)(s.div, {
                                left: w,
                                top: A
                            })
                        }
                    },
                    _updateLocation: function(e) {
                        var t = this._currentScale,
                            n = this._currentScaleValue,
                            i = parseFloat(n) === t ? Math.round(1e4 * t) / 100 : n,
                            r = e.id,
                            a = "#page=" + r;
                        a += "&zoom=" + i;
                        var s = this._pages[r - 1],
                            o = this.container,
                            c = s.getPagePoint(o.scrollLeft - e.x, o.scrollTop - e.y),
                            l = Math.round(c[0]),
                            h = Math.round(c[1]);
                        a += "," + l + "," + h, this._location = {
                            pageNumber: r,
                            scale: i,
                            top: h,
                            left: l,
                            pdfOpenParams: a
                        }
                    },
                    update: function() {
                        var e = this._getVisiblePages(),
                            t = e.views;
                        if (0 !== t.length) {
                            var n = Math.max(10, 2 * t.length + 1);
                            this._buffer.resize(n), this.renderingQueue.renderHighestPriority(e);
                            for (var i = this._currentPageNumber, r = e.first, a = 0, s = t.length, o = !1; a < s; ++a) {
                                var c = t[a];
                                if (c.percent < 100) break;
                                if (c.id === i) {
                                    o = !0;
                                    break
                                }
                            }
                            o || (i = t[0].id), this.isInPresentationMode || this._setCurrentPageNumber(i), this._updateLocation(r), this.eventBus.dispatch("updateviewarea", {
                                source: this,
                                location: this._location
                            })
                        }
                    },
                    containsElement: function(e) {
                        return this.container.contains(e)
                    },
                    focus: function() {
                        this.container.focus()
                    },
                    get isInPresentationMode() {
                        return this.presentationModeState === u.FULLSCREEN
                    },
                    get isChangingPresentationMode() {
                        return this.presentationModeState === u.CHANGING
                    },
                    get isHorizontalScrollbarEnabled() {
                        return !this.isInPresentationMode && this.container.scrollWidth > this.container.clientWidth
                    },
                    _getVisiblePages: function() {
                        if (!this.isInPresentationMode) return (0, r.getVisibleElements)(this.container, this._pages, !0);
                        var e = [],
                            t = this._pages[this._currentPageNumber - 1];
                        return e.push({
                            id: t.id,
                            view: t
                        }), {
                            first: t,
                            last: t,
                            views: e
                        }
                    },
                    cleanup: function() {
                        for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e] && this._pages[e].renderingState !== a.RenderingStates.FINISHED && this._pages[e].reset()
                    },
                    _cancelRendering: function() {
                        for (var e = 0, t = this._pages.length; e < t; e++) this._pages[e] && this._pages[e].cancelRendering()
                    },
                    _ensurePdfPageLoaded: function(e) {
                        var t = this;
                        if (e.pdfPage) return Promise.resolve(e.pdfPage);
                        var n = e.id;
                        if (this._pagesRequests[n]) return this._pagesRequests[n];
                        var i = this.pdfDocument.getPage(n).then(function(i) {
                            return e.pdfPage || e.setPdfPage(i), t._pagesRequests[n] = null, i
                        });
                        return this._pagesRequests[n] = i, i
                    },
                    forceRendering: function(e) {
                        var t = this,
                            n = e || this._getVisiblePages(),
                            i = this.renderingQueue.getHighestPriority(n, this._pages, this.scroll.down);
                        return !!i && (this._ensurePdfPageLoaded(i).then(function() {
                            t.renderingQueue.renderView(i)
                        }), !0)
                    },
                    getPageTextContent: function(e) {
                        return this.pdfDocument.getPage(e + 1).then(function(e) {
                            return e.getTextContent({
                                normalizeWhitespace: !0
                            })
                        })
                    },
                    createTextLayerBuilder: function(e, t, n, i) {
                        return new h.TextLayerBuilder({
                            textLayerDiv: e,
                            eventBus: this.eventBus,
                            pageIndex: t,
                            viewport: n,
                            findController: this.isInPresentationMode ? null : this.findController,
                            enhanceTextSelection: !this.isInPresentationMode && i
                        })
                    },
                    createAnnotationLayerBuilder: function(e, t, n) {
                        return new s.AnnotationLayerBuilder({
                            pageDiv: e,
                            pdfPage: t,
                            renderInteractiveForms: n,
                            linkService: this.linkService,
                            downloadManager: this.downloadManager
                        })
                    },
                    setFindController: function(e) {
                        this.findController = e
                    },
                    getPagesOverview: function() {
                        var e = this._pages.map(function(e) {
                            var t = e.pdfPage.getViewport(1);
                            return {
                                width: t.width,
                                height: t.height,
                                rotation: t.rotation
                            }
                        });
                        if (!this.enablePrintAutoRotate) return e;
                        var t = n(e[0]);
                        return e.map(function(e) {
                            return t === n(e) ? e : {
                                width: e.height,
                                height: e.width,
                                rotation: (e.rotation + 90) % 360
                            }
                        })
                    }
                }, d
            }();
        t.PresentationModeState = u, t.PDFViewer = d
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SecondaryToolbar = void 0;
        var i = n(0),
            r = function() {
                function e(e, t, n) {
                    this.toolbar = e.toolbar, this.toggleButton = e.toggleButton, this.toolbarButtonContainer = e.toolbarButtonContainer, this.buttons = [{
                        element: e.presentationModeButton,
                        eventName: "presentationmode",
                        close: !0
                    }, {
                        element: e.openFileButton,
                        eventName: "openfile",
                        close: !0
                    }, {
                        element: e.printButton,
                        eventName: "print",
                        close: !0
                    }, {
                        element: e.downloadButton,
                        eventName: "download",
                        close: !0
                    }, {
                        element: e.viewBookmarkButton,
                        eventName: null,
                        close: !0
                    }, {
                        element: e.firstPageButton,
                        eventName: "firstpage",
                        close: !0
                    }, {
                        element: e.lastPageButton,
                        eventName: "lastpage",
                        close: !0
                    }, {
                        element: e.pageRotateCwButton,
                        eventName: "rotatecw",
                        close: !1
                    }, {
                        element: e.pageRotateCcwButton,
                        eventName: "rotateccw",
                        close: !1
                    }, {
                        element: e.toggleHandToolButton,
                        eventName: "togglehandtool",
                        close: !0
                    }, {
                        element: e.documentPropertiesButton,
                        eventName: "documentproperties",
                        close: !0
                    }], this.items = {
                        firstPage: e.firstPageButton,
                        lastPage: e.lastPageButton,
                        pageRotateCw: e.pageRotateCwButton,
                        pageRotateCcw: e.pageRotateCcwButton
                    }, this.mainContainer = t, this.eventBus = n, this.opened = !1, this.containerHeight = null, this.previousContainerHeight = null, this.reset(), this._bindClickListeners(), this._bindHandToolListener(e.toggleHandToolButton), this.eventBus.on("resize", this._setMaxHeight.bind(this))
                }
                return e.prototype = {
                    get isOpen() {
                        return this.opened
                    },
                    setPageNumber: function(e) {
                        this.pageNumber = e, this._updateUIState()
                    },
                    setPagesCount: function(e) {
                        this.pagesCount = e, this._updateUIState()
                    },
                    reset: function() {
                        this.pageNumber = 0, this.pagesCount = 0, this._updateUIState()
                    },
                    _updateUIState: function() {
                        var e = this.items;
                        e.firstPage.disabled = this.pageNumber <= 1, e.lastPage.disabled = this.pageNumber >= this.pagesCount, e.pageRotateCw.disabled = 0 === this.pagesCount, e.pageRotateCcw.disabled = 0 === this.pagesCount
                    },
                    _bindClickListeners: function() {
                        this.toggleButton.addEventListener("click", this.toggle.bind(this));
                        for (var e in this.buttons) {
                            var t = this.buttons[e].element,
                                n = this.buttons[e].eventName,
                                i = this.buttons[e].close;
                            t.addEventListener("click", function(e, t) {
                                null !== e && this.eventBus.dispatch(e, {
                                    source: this
                                }), t && this.close()
                            }.bind(this, n, i))
                        }
                    },
                    _bindHandToolListener: function(e) {
                        var t = !1;
                        this.eventBus.on("handtoolchanged", function(n) {
                            t !== n.isActive && (t = n.isActive, t ? (e.title = i.mozL10n.get("hand_tool_disable.title", null, "Disable hand tool"), e.firstElementChild.textContent = i.mozL10n.get("hand_tool_disable_label", null, "Disable hand tool")) : (e.title = i.mozL10n.get("hand_tool_enable.title", null, "Enable hand tool"), e.firstElementChild.textContent = i.mozL10n.get("hand_tool_enable_label", null, "Enable hand tool")))
                        })
                    },
                    open: function() {
                        this.opened || (this.opened = !0, this._setMaxHeight(), this.toggleButton.classList.add("toggled"), this.toolbar.classList.remove("hidden"))
                    },
                    close: function() {
                        this.opened && (this.opened = !1, this.toolbar.classList.add("hidden"), this.toggleButton.classList.remove("toggled"))
                    },
                    toggle: function() {
                        this.opened ? this.close() : this.open()
                    },
                    _setMaxHeight: function() {
                        this.opened && (this.containerHeight = this.mainContainer.clientHeight, this.containerHeight !== this.previousContainerHeight && (this.toolbarButtonContainer.setAttribute("style", "max-height: " + (this.containerHeight - i.SCROLLBAR_PADDING) + "px;"), this.previousContainerHeight = this.containerHeight))
                    }
                }, e
            }();
        t.SecondaryToolbar = r
    }, function(e, t, n) {
        function i() {}
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DefaultTextLayerFactory = t.TextLayerBuilder = void 0;
        var r = n(2),
            a = n(1),
            s = function() {
                function e(e) {
                    this.textLayerDiv = e.textLayerDiv, this.eventBus = e.eventBus || (0, r.getGlobalEventBus)(), this.textContent = null, this.renderingDone = !1, this.pageIdx = e.pageIndex, this.pageNumber = this.pageIdx + 1, this.matches = [], this.viewport = e.viewport, this.textDivs = [], this.findController = e.findController || null, this.textLayerRenderTask = null, this.enhanceTextSelection = e.enhanceTextSelection, this._bindMouse()
                }
                return e.prototype = {
                    _finishRendering: function() {
                        if (this.renderingDone = !0, !this.enhanceTextSelection) {
                            var e = document.createElement("div");
                            e.className = "endOfContent", this.textLayerDiv.appendChild(e)
                        }
                        this.eventBus.dispatch("textlayerrendered", {
                            source: this,
                            pageNumber: this.pageNumber,
                            numTextDivs: this.textDivs.length
                        })
                    },
                    render: function(e) {
                        if (this.textContent && !this.renderingDone) {
                            this.cancel(), this.textDivs = [];
                            var t = document.createDocumentFragment();
                            this.textLayerRenderTask = (0, a.renderTextLayer)({
                                textContent: this.textContent,
                                container: t,
                                viewport: this.viewport,
                                textDivs: this.textDivs,
                                timeout: e,
                                enhanceTextSelection: this.enhanceTextSelection
                            }), this.textLayerRenderTask.promise.then(function() {
                                this.textLayerDiv.appendChild(t), this._finishRendering(), this.updateMatches()
                            }.bind(this), function(e) {})
                        }
                    },
                    cancel: function() {
                        this.textLayerRenderTask && (this.textLayerRenderTask.cancel(), this.textLayerRenderTask = null)
                    },
                    setTextContent: function(e) {
                        this.cancel(), this.textContent = e
                    },
                    convertMatches: function(e, t) {
                        var n = 0,
                            i = 0,
                            r = this.textContent.items,
                            a = r.length - 1,
                            s = null === this.findController ? 0 : this.findController.state.query.length,
                            o = [];
                        if (!e) return o;
                        for (var c = 0, l = e.length; c < l; c++) {
                            for (var h = e[c]; n !== a && h >= i + r[n].str.length;) i += r[n].str.length, n++;
                            n === r.length && console.error("Could not find a matching mapping");
                            var u = {
                                begin: {
                                    divIdx: n,
                                    offset: h - i
                                }
                            };
                            for (h += t ? t[c] : s; n !== a && h > i + r[n].str.length;) i += r[n].str.length, n++;
                            u.end = {
                                divIdx: n,
                                offset: h - i
                            }, o.push(u)
                        }
                        return o
                    },
                    renderMatches: function(e) {
                        function t(e, t) {
                            var i = e.divIdx;
                            r[i].textContent = "", n(i, 0, e.offset, t)
                        }

                        function n(e, t, n, a) {
                            var s = r[e],
                                o = i[e].str.substring(t, n),
                                c = document.createTextNode(o);
                            if (a) {
                                var l = document.createElement("span");
                                return l.className = a, l.appendChild(c), void s.appendChild(l)
                            }
                            s.appendChild(c)
                        }
                        if (0 !== e.length) {
                            var i = this.textContent.items,
                                r = this.textDivs,
                                a = null,
                                s = this.pageIdx,
                                o = null !== this.findController && s === this.findController.selected.pageIdx,
                                c = null === this.findController ? -1 : this.findController.selected.matchIdx,
                                l = null !== this.findController && this.findController.state.highlightAll,
                                h = {
                                    divIdx: -1,
                                    offset: void 0
                                },
                                u = c,
                                d = u + 1;
                            if (l) u = 0, d = e.length;
                            else if (!o) return;
                            for (var f = u; f < d; f++) {
                                var p = e[f],
                                    g = p.begin,
                                    m = p.end,
                                    v = o && f === c,
                                    b = v ? " selected" : "";
                                if (this.findController && this.findController.updateMatchPosition(s, f, r, g.divIdx), a && g.divIdx === a.divIdx ? n(a.divIdx, a.offset, g.offset) : (null !== a && n(a.divIdx, a.offset, h.offset), t(g)), g.divIdx === m.divIdx) n(g.divIdx, g.offset, m.offset, "highlight" + b);
                                else {
                                    n(g.divIdx, g.offset, h.offset, "highlight begin" + b);
                                    for (var y = g.divIdx + 1, w = m.divIdx; y < w; y++) r[y].className = "highlight middle" + b;
                                    t(m, "highlight end" + b)
                                }
                                a = m
                            }
                            a && n(a.divIdx, a.offset, h.offset)
                        }
                    },
                    updateMatches: function() {
                        if (this.renderingDone) {
                            for (var e = this.matches, t = this.textDivs, n = this.textContent.items, i = -1, r = 0, a = e.length; r < a; r++) {
                                for (var s = e[r], o = Math.max(i, s.begin.divIdx), c = o, l = s.end.divIdx; c <= l; c++) {
                                    var h = t[c];
                                    h.textContent = n[c].str, h.className = ""
                                }
                                i = s.end.divIdx + 1
                            }
                            if (null !== this.findController && this.findController.active) {
                                var u, d;
                                null !== this.findController && (u = this.findController.pageMatches[this.pageIdx] || null, d = this.findController.pageMatchesLength ? this.findController.pageMatchesLength[this.pageIdx] || null : null), this.matches = this.convertMatches(u, d), this.renderMatches(this.matches)
                            }
                        }
                    },
                    _bindMouse: function() {
                        var e = this.textLayerDiv,
                            t = this,
                            n = null;
                        e.addEventListener("mousedown", function(i) {
                            if (t.enhanceTextSelection && t.textLayerRenderTask) return t.textLayerRenderTask.expandTextDivs(!0), void(n && (clearTimeout(n), n = null));
                            var r = e.querySelector(".endOfContent");
                            if (r) {
                                var a = i.target !== e;
                                if (a = a && "none" !== window.getComputedStyle(r).getPropertyValue("-moz-user-select")) {
                                    var s = e.getBoundingClientRect(),
                                        o = Math.max(0, (i.pageY - s.top) / s.height);
                                    r.style.top = (100 * o).toFixed(2) + "%"
                                }
                                r.classList.add("active")
                            }
                        }), e.addEventListener("mouseup", function(i) {
                            if (t.enhanceTextSelection && t.textLayerRenderTask) return void(n = setTimeout(function() {
                                t.textLayerRenderTask && t.textLayerRenderTask.expandTextDivs(!1), n = null
                            }, 300));
                            var r = e.querySelector(".endOfContent");
                            r && (r.style.top = "", r.classList.remove("active"))
                        })
                    }
                }, e
            }();
        i.prototype = {
            createTextLayerBuilder: function(e, t, n, i) {
                return new s({
                    textLayerDiv: e,
                    pageIndex: t,
                    viewport: n,
                    enhanceTextSelection: i
                })
            }
        }, t.TextLayerBuilder = s, t.DefaultTextLayerFactory = i
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Toolbar = void 0;
        var i = n(0),
            r = function() {
                function e(e, t, n) {
                    this.toolbar = e.container, this.mainContainer = t, this.eventBus = n, this.items = e, this._wasLocalized = !1, this.reset(), this._bindListeners()
                }
                return e.prototype = {
                    setPageNumber: function(e, t) {
                        this.pageNumber = e, this.pageLabel = t, this._updateUIState(!1)
                    },
                    setPagesCount: function(e, t) {
                        this.pagesCount = e, this.hasPageLabels = t, this._updateUIState(!0)
                    },
                    setPageScale: function(e, t) {
                        this.pageScaleValue = e, this.pageScale = t, this._updateUIState(!1)
                    },
                    reset: function() {
                        this.pageNumber = 0, this.pageLabel = null, this.hasPageLabels = !1, this.pagesCount = 0, this.pageScaleValue = i.DEFAULT_SCALE_VALUE, this.pageScale = i.DEFAULT_SCALE, this._updateUIState(!0)
                    },
                    _bindListeners: function() {
                        var e = this.eventBus,
                            t = this,
                            n = this.items;
                        n.previous.addEventListener("click", function() {
                            e.dispatch("previouspage")
                        }), n.next.addEventListener("click", function() {
                            e.dispatch("nextpage")
                        }), n.zoomIn.addEventListener("click", function() {
                            e.dispatch("zoomin")
                        }), n.zoomOut.addEventListener("click", function() {
                            e.dispatch("zoomout")
                        }), n.pageNumber.addEventListener("click", function() {
                            this.select()
                        }), n.pageNumber.addEventListener("change", function() {
                            e.dispatch("pagenumberchanged", {
                                source: t,
                                value: this.value
                            })
                        }), n.scaleSelect.addEventListener("change", function() {
                            "custom" !== this.value && e.dispatch("scalechanged", {
                                source: t,
                                value: this.value
                            })
                        }), n.presentationModeButton.addEventListener("click", function(t) {
                            e.dispatch("presentationmode")
                        }), n.openFile.addEventListener("click", function(t) {
                            e.dispatch("openfile")
                        }), n.print.addEventListener("click", function(t) {
                            e.dispatch("print")
                        }), n.download.addEventListener("click", function(t) {
                            e.dispatch("download")
                        }), n.scaleSelect.oncontextmenu = i.noContextMenuHandler, i.localized.then(this._localized.bind(this))
                    },
                    _localized: function() {
                        this._wasLocalized = !0, this._adjustScaleWidth(), this._updateUIState(!0)
                    },
                    _updateUIState: function(e) {
                        if (this._wasLocalized) {
                            var t = this.pageNumber,
                                n = (this.pageScaleValue || this.pageScale).toString(),
                                r = this.pageScale,
                                a = this.items,
                                s = this.pagesCount;
                            e && (this.hasPageLabels ? a.pageNumber.type = "text" : (a.pageNumber.type = "number", a.numPages.textContent = i.mozL10n.get("of_pages", {
                                    pagesCount: s
                                }, "of {{pagesCount}}")), a.pageNumber.max = s), this.hasPageLabels ? (a.pageNumber.value = this.pageLabel, a.numPages.textContent = i.mozL10n.get("page_of_pages", {
                                    pageNumber: t,
                                    pagesCount: s
                                }, "({{pageNumber}} of {{pagesCount}})")) : a.pageNumber.value = t, a.previous.disabled = t <= 1, a.next.disabled = t >= s, a.zoomOut.disabled = r <= i.MIN_SCALE, a.zoomIn.disabled = r >= i.MAX_SCALE,
                                function(e, t) {
                                    for (var n = a.scaleSelect.options, r = !1, s = 0, o = n.length; s < o; s++) {
                                        var c = n[s];
                                        c.value === e ? (c.selected = !0, r = !0) : c.selected = !1
                                    }
                                    if (!r) {
                                        var l = Math.round(1e4 * t) / 100;
                                        a.customScaleOption.textContent = i.mozL10n.get("page_scale_percent", {
                                            scale: l
                                        }, "{{scale}}%"), a.customScaleOption.selected = !0
                                    }
                                }(n, r)
                        }
                    },
                    updateLoadingIndicatorState: function(e) {
                        var t = this.items.pageNumber;
                        e ? t.classList.add("visiblePageIsLoading") : t.classList.remove("visiblePageIsLoading")
                    },
                    _adjustScaleWidth: function() {
                        var e = this.items.scaleSelectContainer,
                            t = this.items.scaleSelect;
                        i.animationStarted.then(function() {
                            if (0 === e.clientWidth && e.setAttribute("style", "display: inherit;"), e.clientWidth > 0) {
                                t.setAttribute("style", "min-width: inherit;");
                                var n = t.clientWidth + 8;
                                t.setAttribute("style", "min-width: " + (n + 22) + "px;"), e.setAttribute("style", "min-width: " + n + "px; max-width: " + n + "px;")
                            }
                        })
                    }
                }, e
            }();
        t.Toolbar = r
    }, function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = 20,
            r = function() {
                function e(e, t) {
                    this.fingerprint = e, this.cacheSize = t || i, this.isInitializedPromiseResolved = !1, this.initializedPromise = this._readFromStorage().then(function(e) {
                        this.isInitializedPromiseResolved = !0;
                        var t = JSON.parse(e || "{}");
                        "files" in t || (t.files = []), t.files.length >= this.cacheSize && t.files.shift();
                        for (var n, i = 0, r = t.files.length; i < r; i++) {
                            if (t.files[i].fingerprint === this.fingerprint) {
                                n = i;
                                break
                            }
                        }
                        "number" != typeof n && (n = t.files.push({
                            fingerprint: this.fingerprint
                        }) - 1), this.file = t.files[n], this.database = t
                    }.bind(this))
                }
                return e.prototype = {
                    _writeToStorage: function() {
                        return new Promise(function(e) {
                            var t = JSON.stringify(this.database);
                            localStorage.setItem("pdfjs.history", t), e()
                        }.bind(this))
                    },
                    _readFromStorage: function() {
                        return new Promise(function(e) {
                            var t = localStorage.getItem("pdfjs.history");
                            if (!t) {
                                var n = localStorage.getItem("database");
                                if (n) try {
                                    "string" == typeof JSON.parse(n).files[0].fingerprint && (localStorage.setItem("pdfjs.history", n), localStorage.removeItem("database"), t = n)
                                } catch (e) {}
                            }
                            e(t)
                        })
                    },
                    set: function(e, t) {
                        if (this.isInitializedPromiseResolved) return this.file[e] = t, this._writeToStorage()
                    },
                    setMultiple: function(e) {
                        if (this.isInitializedPromiseResolved) {
                            for (var t in e) this.file[t] = e[t];
                            return this._writeToStorage()
                        }
                    },
                    get: function(e, t) {
                        return this.isInitializedPromiseResolved ? this.file[e] || t : t
                    }
                }, e
            }();
        t.ViewHistory = r
    }, function(e, t, n) {
        var i = "compressed.tracemonkey-pldi-09.pdf";
        new QWebChannel(qt.webChannelTransport, function(e) {
            function t() {
                return {
                    appContainer: document.body,
                    mainContainer: document.getElementById("viewerContainer"),
                    viewerContainer: document.getElementById("viewer"),
                    eventBus: null,
                    toolbar: {
                        container: document.getElementById("toolbarViewer"),
                        numPages: document.getElementById("numPages"),
                        pageNumber: document.getElementById("pageNumber"),
                        scaleSelectContainer: document.getElementById("scaleSelectContainer"),
                        scaleSelect: document.getElementById("scaleSelect"),
                        customScaleOption: document.getElementById("customScaleOption"),
                        previous: document.getElementById("previous"),
                        next: document.getElementById("next"),
                        zoomIn: document.getElementById("zoomIn"),
                        zoomOut: document.getElementById("zoomOut"),
                        viewFind: document.getElementById("viewFind"),
                        openFile: document.getElementById("openFile"),
                        print: document.getElementById("print"),
                        presentationModeButton: document.getElementById("presentationMode"),
                        download: document.getElementById("download"),
                        viewBookmark: document.getElementById("viewBookmark")
                    },
                    secondaryToolbar: {
                        toolbar: document.getElementById("secondaryToolbar"),
                        toggleButton: document.getElementById("secondaryToolbarToggle"),
                        toolbarButtonContainer: document.getElementById("secondaryToolbarButtonContainer"),
                        presentationModeButton: document.getElementById("secondaryPresentationMode"),
                        openFileButton: document.getElementById("secondaryOpenFile"),
                        printButton: document.getElementById("secondaryPrint"),
                        downloadButton: document.getElementById("secondaryDownload"),
                        viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
                        firstPageButton: document.getElementById("firstPage"),
                        lastPageButton: document.getElementById("lastPage"),
                        pageRotateCwButton: document.getElementById("pageRotateCw"),
                        pageRotateCcwButton: document.getElementById("pageRotateCcw"),
                        toggleHandToolButton: document.getElementById("toggleHandTool"),
                        documentPropertiesButton: document.getElementById("documentProperties")
                    },
                    fullscreen: {
                        contextFirstPage: document.getElementById("contextFirstPage"),
                        contextLastPage: document.getElementById("contextLastPage"),
                        contextPageRotateCw: document.getElementById("contextPageRotateCw"),
                        contextPageRotateCcw: document.getElementById("contextPageRotateCcw")
                    },
                    sidebar: {
                        mainContainer: document.getElementById("mainContainer"),
                        outerContainer: document.getElementById("outerContainer"),
                        toggleButton: document.getElementById("sidebarToggle"),
                        thumbnailButton: document.getElementById("viewThumbnail"),
                        outlineButton: document.getElementById("viewOutline"),
                        attachmentsButton: document.getElementById("viewAttachments"),
                        thumbnailView: document.getElementById("thumbnailView"),
                        outlineView: document.getElementById("outlineView"),
                        attachmentsView: document.getElementById("attachmentsView")
                    },
                    findBar: {
                        bar: document.getElementById("findbar"),
                        toggleButton: document.getElementById("viewFind"),
                        findField: document.getElementById("findInput"),
                        highlightAllCheckbox: document.getElementById("findHighlightAll"),
                        caseSensitiveCheckbox: document.getElementById("findMatchCase"),
                        findMsg: document.getElementById("findMsg"),
                        findResultsCount: document.getElementById("findResultsCount"),
                        findStatusIcon: document.getElementById("findStatusIcon"),
                        findPreviousButton: document.getElementById("findPrevious"),
                        findNextButton: document.getElementById("findNext")
                    },
                    passwordOverlay: {
                        overlayName: "passwordOverlay",
                        container: document.getElementById("passwordOverlay"),
                        label: document.getElementById("passwordText"),
                        input: document.getElementById("password"),
                        submitButton: document.getElementById("passwordSubmit"),
                        cancelButton: document.getElementById("passwordCancel")
                    },
                    documentProperties: {
                        overlayName: "documentPropertiesOverlay",
                        container: document.getElementById("documentPropertiesOverlay"),
                        closeButton: document.getElementById("documentPropertiesClose"),
                        fields: {
                            fileName: document.getElementById("fileNameField"),
                            fileSize: document.getElementById("fileSizeField"),
                            title: document.getElementById("titleField"),
                            author: document.getElementById("authorField"),
                            subject: document.getElementById("subjectField"),
                            keywords: document.getElementById("keywordsField"),
                            creationDate: document.getElementById("creationDateField"),
                            modificationDate: document.getElementById("modificationDateField"),
                            creator: document.getElementById("creatorField"),
                            producer: document.getElementById("producerField"),
                            version: document.getElementById("versionField"),
                            pageCount: document.getElementById("pageCountField")
                        }
                    },
                    errorWrapper: {
                        container: document.getElementById("errorWrapper"),
                        errorMessage: document.getElementById("errorMessage"),
                        closeButton: document.getElementById("errorClose"),
                        errorMoreInfo: document.getElementById("errorMoreInfo"),
                        moreInfoButton: document.getElementById("errorShowMore"),
                        lessInfoButton: document.getElementById("errorShowLess")
                    },
                    printContainer: document.getElementById("printContainer"),
                    openFileInputName: "fileInput",
                    debuggerScriptPath: "./debugger.js",
                    defaultUrl: i
                }
            }

            function r() {
                var e = t();
                window.PDFViewerApplication = s.PDFViewerApplication, s.PDFViewerApplication.run(e)
            }
            document.getElementById("download").setAttribute("hidden", "true");
            var a = e.objects.communicator;
            i = a.url;
            var s;
            s = n(5), n(9), n(10), "interactive" === document.readyState || "complete" === document.readyState ? r() : document.addEventListener("DOMContentLoaded", r, !0)
        })
    }]);
