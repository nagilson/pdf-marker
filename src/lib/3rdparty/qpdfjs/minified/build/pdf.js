! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], e) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = e() : t["pdfjs-dist/build/pdf"] = t.pdfjsDistBuildPdf = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.i = function(t) {
            return t
        }, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 13)
    }([function(t, e, n) {
        "use strict";
        (function(t) {
            function r(t) {
                rt = t
            }

            function i() {
                return rt
            }

            function a(t) {
                rt >= tt.infos && console.log("Info: " + t)
            }

            function s(t) {
                rt >= tt.warnings && console.log("Warning: " + t)
            }

            function o(t) {
                console.log("Deprecated API usage: " + t)
            }

            function c(t) {
                throw rt >= tt.errors && (console.log("Error: " + t), console.log(l())), new Error(t)
            }

            function l() {
                try {
                    throw new Error
                } catch (t) {
                    return t.stack ? t.stack.split("\n").slice(2).join("\n") : ""
                }
            }

            function h(t, e) {
                t || c(e)
            }

            function u(t, e) {
                try {
                    var n = new URL(t);
                    if (!n.origin || "null" === n.origin) return !1
                } catch (t) {
                    return !1
                }
                var r = new URL(e, n);
                return n.origin === r.origin
            }

            function d(t) {
                if (!t) return !1;
                switch (t.protocol) {
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

            function f(t, e) {
                if (!t) return null;
                try {
                    var n = e ? new URL(t, e) : new URL(t);
                    if (d(n)) return n
                } catch (t) {}
                return null
            }

            function p(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !1
                }), n
            }

            function g(t) {
                var e;
                return function() {
                    return t && (e = Object.create(null), t(e), t = null), e
                }
            }

            function m(t) {
                return "string" != typeof t ? (s("The argument for removeNullCharacters must be a string."), t) : t.replace(pt, "")
            }

            function A(t) {
                h(null !== t && "object" === (void 0 === t ? "undefined" : X(t)) && void 0 !== t.length, "Invalid argument for bytesToString");
                var e = t.length;
                if (e < 8192) return String.fromCharCode.apply(null, t);
                for (var n = [], r = 0; r < e; r += 8192) {
                    var i = Math.min(r + 8192, e),
                        a = t.subarray(r, i);
                    n.push(String.fromCharCode.apply(null, a))
                }
                return n.join("")
            }

            function v(t) {
                h("string" == typeof t, "Invalid argument for stringToBytes");
                for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; ++r) n[r] = 255 & t.charCodeAt(r);
                return n
            }

            function b(t) {
                return void 0 !== t.length ? t.length : (h(void 0 !== t.byteLength), t.byteLength)
            }

            function y(t) {
                if (1 === t.length && t[0] instanceof Uint8Array) return t[0];
                var e, n, r, i = 0,
                    a = t.length;
                for (e = 0; e < a; e++) n = t[e], r = b(n), i += r;
                var s = 0,
                    o = new Uint8Array(i);
                for (e = 0; e < a; e++) n = t[e], n instanceof Uint8Array || (n = "string" == typeof n ? v(n) : new Uint8Array(n)), r = n.byteLength, o.set(n, s), s += r;
                return o
            }

            function S(t) {
                return String.fromCharCode(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t)
            }

            function x(t) {
                for (var e = 1, n = 0; t > e;) e <<= 1, n++;
                return n
            }

            function w(t, e) {
                return t[e] << 24 >> 24
            }

            function _(t, e) {
                return t[e] << 8 | t[e + 1]
            }

            function T(t, e) {
                return (t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3]) >>> 0
            }

            function C() {
                var t = new Uint8Array(4);
                return t[0] = 1, 1 === new Uint32Array(t.buffer, 0, 1)[0]
            }

            function k() {
                try {
                    return new Function(""), !0
                } catch (t) {
                    return !1
                }
            }

            function P(t) {
                var e, n = t.length,
                    r = [];
                if ("þ" === t[0] && "ÿ" === t[1])
                    for (e = 2; e < n; e += 2) r.push(String.fromCharCode(t.charCodeAt(e) << 8 | t.charCodeAt(e + 1)));
                else
                    for (e = 0; e < n; ++e) {
                        var i = vt[t.charCodeAt(e)];
                        r.push(i ? String.fromCharCode(i) : t.charAt(e))
                    }
                return r.join("")
            }

            function L(t) {
                return decodeURIComponent(escape(t))
            }

            function E(t) {
                return unescape(encodeURIComponent(t))
            }

            function R(t) {
                for (var e in t) return !1;
                return !0
            }

            function O(t) {
                return "boolean" == typeof t
            }

            function I(t) {
                return "number" == typeof t && (0 | t) === t
            }

            function F(t) {
                return "number" == typeof t
            }

            function M(t) {
                return "string" == typeof t
            }

            function D(t) {
                return t instanceof Array
            }

            function N(t) {
                return "object" === (void 0 === t ? "undefined" : X(t)) && null !== t && void 0 !== t.byteLength
            }

            function j(t) {
                return 32 === t || 9 === t || 13 === t || 10 === t
            }

            function U() {
                return "undefined" == typeof __pdfjsdev_webpack__ && ("object" === ("undefined" == typeof process ? "undefined" : X(process)) && process + "" == "[object process]")
            }

            function B() {
                var t = {};
                return t.promise = new Promise(function(e, n) {
                    t.resolve = e, t.reject = n
                }), t
            }

            function W(t, e, n) {
                this.sourceName = t, this.targetName = e, this.comObj = n, this.callbackIndex = 1, this.postMessageTransfers = !0;
                var r = this.callbacksCapabilities = Object.create(null),
                    i = this.actionHandler = Object.create(null);
                this._onComObjOnMessage = function(t) {
                    var e = t.data;
                    if (e.targetName === this.sourceName)
                        if (e.isReply) {
                            var a = e.callbackId;
                            if (e.callbackId in r) {
                                var s = r[a];
                                delete r[a], "error" in e ? s.reject(e.error) : s.resolve(e.data)
                            } else c("Cannot resolve callback " + a)
                        } else if (e.action in i) {
                        var o = i[e.action];
                        if (e.callbackId) {
                            var l = this.sourceName,
                                h = e.sourceName;
                            Promise.resolve().then(function() {
                                return o[0].call(o[1], e.data)
                            }).then(function(t) {
                                n.postMessage({
                                    sourceName: l,
                                    targetName: h,
                                    isReply: !0,
                                    callbackId: e.callbackId,
                                    data: t
                                })
                            }, function(t) {
                                t instanceof Error && (t += ""), n.postMessage({
                                    sourceName: l,
                                    targetName: h,
                                    isReply: !0,
                                    callbackId: e.callbackId,
                                    error: t
                                })
                            })
                        } else o[0].call(o[1], e.data)
                    } else c("Unknown action from worker: " + e.action)
                }.bind(this), n.addEventListener("message", this._onComObjOnMessage)
            }

            function G(t, e, n) {
                var r = new Image;
                r.onload = function() {
                    n.resolve(t, r)
                }, r.onerror = function() {
                    n.resolve(t, null), s("Error during JPEG image loading")
                }, r.src = e
            }
            var X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                H = (n(14), "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : void 0),
                Y = [.001, 0, 0, .001, 0, 0],
                z = {
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
                V = {
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
                J = {
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
                tt = {
                    errors: 0,
                    warnings: 1,
                    infos: 5
                },
                et = {
                    NONE: 0,
                    BINARY: 1,
                    STREAM: 2
                },
                nt = {
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
                rt = tt.warnings,
                it = {
                    unknown: "unknown",
                    forms: "forms",
                    javaScript: "javaScript",
                    smask: "smask",
                    shadingPattern: "shadingPattern",
                    font: "font"
                },
                at = {
                    NEED_PASSWORD: 1,
                    INCORRECT_PASSWORD: 2
                },
                st = function() {
                    function t(t, e) {
                        this.name = "PasswordException", this.message = t, this.code = e
                    }
                    return t.prototype = new Error, t.constructor = t, t
                }(),
                ot = function() {
                    function t(t, e) {
                        this.name = "UnknownErrorException", this.message = t, this.details = e
                    }
                    return t.prototype = new Error, t.constructor = t, t
                }(),
                ct = function() {
                    function t(t) {
                        this.name = "InvalidPDFException", this.message = t
                    }
                    return t.prototype = new Error, t.constructor = t, t
                }(),
                lt = function() {
                    function t(t) {
                        this.name = "MissingPDFException", this.message = t
                    }
                    return t.prototype = new Error, t.constructor = t, t
                }(),
                ht = function() {
                    function t(t, e) {
                        this.name = "UnexpectedResponseException", this.message = t, this.status = e
                    }
                    return t.prototype = new Error, t.constructor = t, t
                }(),
                ut = function() {
                    function t(t) {
                        this.message = t
                    }
                    return t.prototype = new Error, t.prototype.name = "NotImplementedException", t.constructor = t, t
                }(),
                dt = function() {
                    function t(t, e) {
                        this.begin = t, this.end = e, this.message = "Missing data [" + t + ", " + e + ")"
                    }
                    return t.prototype = new Error, t.prototype.name = "MissingDataException", t.constructor = t, t
                }(),
                ft = function() {
                    function t(t) {
                        this.message = t
                    }
                    return t.prototype = new Error, t.prototype.name = "XRefParseException", t.constructor = t, t
                }(),
                pt = /\x00/g,
                gt = [1, 0, 0, 1, 0, 0],
                mt = function() {
                    function t() {}
                    var e = ["rgb(", 0, ",", 0, ",", 0, ")"];
                    t.makeCssRgb = function(t, n, r) {
                        return e[1] = t, e[3] = n, e[5] = r, e.join("")
                    }, t.transform = function(t, e) {
                        return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]]
                    }, t.applyTransform = function(t, e) {
                        return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]]
                    }, t.applyInverseTransform = function(t, e) {
                        var n = e[0] * e[3] - e[1] * e[2];
                        return [(t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / n, (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / n]
                    }, t.getAxialAlignedBoundingBox = function(e, n) {
                        var r = t.applyTransform(e, n),
                            i = t.applyTransform(e.slice(2, 4), n),
                            a = t.applyTransform([e[0], e[3]], n),
                            s = t.applyTransform([e[2], e[1]], n);
                        return [Math.min(r[0], i[0], a[0], s[0]), Math.min(r[1], i[1], a[1], s[1]), Math.max(r[0], i[0], a[0], s[0]), Math.max(r[1], i[1], a[1], s[1])]
                    }, t.inverseTransform = function(t) {
                        var e = t[0] * t[3] - t[1] * t[2];
                        return [t[3] / e, -t[1] / e, -t[2] / e, t[0] / e, (t[2] * t[5] - t[4] * t[3]) / e, (t[4] * t[1] - t[5] * t[0]) / e]
                    }, t.apply3dTransform = function(t, e) {
                        return [t[0] * e[0] + t[1] * e[1] + t[2] * e[2], t[3] * e[0] + t[4] * e[1] + t[5] * e[2], t[6] * e[0] + t[7] * e[1] + t[8] * e[2]]
                    }, t.singularValueDecompose2dScale = function(t) {
                        var e = [t[0], t[2], t[1], t[3]],
                            n = t[0] * e[0] + t[1] * e[2],
                            r = t[0] * e[1] + t[1] * e[3],
                            i = t[2] * e[0] + t[3] * e[2],
                            a = t[2] * e[1] + t[3] * e[3],
                            s = (n + a) / 2,
                            o = Math.sqrt((n + a) * (n + a) - 4 * (n * a - i * r)) / 2,
                            c = s + o || 1,
                            l = s - o || 1;
                        return [Math.sqrt(c), Math.sqrt(l)]
                    }, t.normalizeRect = function(t) {
                        var e = t.slice(0);
                        return t[0] > t[2] && (e[0] = t[2], e[2] = t[0]), t[1] > t[3] && (e[1] = t[3], e[3] = t[1]), e
                    }, t.intersect = function(e, n) {
                        function r(t, e) {
                            return t - e
                        }
                        var i = [e[0], e[2], n[0], n[2]].sort(r),
                            a = [e[1], e[3], n[1], n[3]].sort(r),
                            s = [];
                        return e = t.normalizeRect(e), n = t.normalizeRect(n), (i[0] === e[0] && i[1] === n[0] || i[0] === n[0] && i[1] === e[0]) && (s[0] = i[1], s[2] = i[2], (a[0] === e[1] && a[1] === n[1] || a[0] === n[1] && a[1] === e[1]) && (s[1] = a[1], s[3] = a[2], s))
                    }, t.sign = function(t) {
                        return t < 0 ? -1 : 1
                    };
                    var n = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
                    return t.toRoman = function(t, e) {
                        h(I(t) && t > 0, "The number should be a positive integer.");
                        for (var r, i = []; t >= 1e3;) t -= 1e3, i.push("M");
                        r = t / 100 | 0, t %= 100, i.push(n[r]), r = t / 10 | 0, t %= 10, i.push(n[10 + r]), i.push(n[20 + t]);
                        var a = i.join("");
                        return e ? a.toLowerCase() : a
                    }, t.appendToArray = function(t, e) {
                        Array.prototype.push.apply(t, e)
                    }, t.prependToArray = function(t, e) {
                        Array.prototype.unshift.apply(t, e)
                    }, t.extendObj = function(t, e) {
                        for (var n in e) t[n] = e[n]
                    }, t.getInheritableProperty = function(t, e, n) {
                        for (; t && !t.has(e);) t = t.get("Parent");
                        return t ? n ? t.getArray(e) : t.get(e) : null
                    }, t.inherit = function(t, e, n) {
                        t.prototype = Object.create(e.prototype), t.prototype.constructor = t;
                        for (var r in n) t.prototype[r] = n[r]
                    }, t.loadScript = function(t, e) {
                        var n = document.createElement("script"),
                            r = !1;
                        n.setAttribute("src", t), e && (n.onload = function() {
                            r || e(), r = !0
                        }), document.getElementsByTagName("head")[0].appendChild(n)
                    }, t
                }(),
                At = function() {
                    function t(t, e, n, r, i, a) {
                        this.viewBox = t, this.scale = e, this.rotation = n, this.offsetX = r, this.offsetY = i;
                        var s, o, c, l, h = (t[2] + t[0]) / 2,
                            u = (t[3] + t[1]) / 2;
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
                        0 === s ? (d = Math.abs(u - t[1]) * e + r, f = Math.abs(h - t[0]) * e + i, p = Math.abs(t[3] - t[1]) * e, g = Math.abs(t[2] - t[0]) * e) : (d = Math.abs(h - t[0]) * e + r, f = Math.abs(u - t[1]) * e + i, p = Math.abs(t[2] - t[0]) * e, g = Math.abs(t[3] - t[1]) * e), this.transform = [s * e, o * e, c * e, l * e, d - s * e * h - c * e * u, f - o * e * h - l * e * u], this.width = p, this.height = g, this.fontScale = e
                    }
                    return t.prototype = {
                        clone: function(e) {
                            e = e || {};
                            var n = "scale" in e ? e.scale : this.scale,
                                r = "rotation" in e ? e.rotation : this.rotation;
                            return new t(this.viewBox.slice(), n, r, this.offsetX, this.offsetY, e.dontFlip)
                        },
                        convertToViewportPoint: function(t, e) {
                            return mt.applyTransform([t, e], this.transform)
                        },
                        convertToViewportRectangle: function(t) {
                            var e = mt.applyTransform([t[0], t[1]], this.transform),
                                n = mt.applyTransform([t[2], t[3]], this.transform);
                            return [e[0], e[1], n[0], n[1]]
                        },
                        convertToPdfPoint: function(t, e) {
                            return mt.applyInverseTransform([t, e], this.transform)
                        }
                    }, t
                }(),
                vt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364],
                bt = function() {
                    function t(t, e, n) {
                        for (; t.length < n;) t += e;
                        return t
                    }

                    function e() {
                        this.started = Object.create(null), this.times = [], this.enabled = !0
                    }
                    return e.prototype = {
                        time: function(t) {
                            this.enabled && (t in this.started && s("Timer is already running for " + t), this.started[t] = Date.now())
                        },
                        timeEnd: function(t) {
                            this.enabled && (t in this.started || s("Timer has not been started for " + t), this.times.push({
                                name: t,
                                start: this.started[t],
                                end: Date.now()
                            }), delete this.started[t])
                        },
                        toString: function() {
                            var e, n, r = this.times,
                                i = "",
                                a = 0;
                            for (e = 0, n = r.length; e < n; ++e) {
                                var s = r[e].name;
                                s.length > a && (a = s.length)
                            }
                            for (e = 0, n = r.length; e < n; ++e) {
                                var o = r[e],
                                    c = o.end - o.start;
                                i += t(o.name, " ", a) + " " + c + "ms\n"
                            }
                            return i
                        }
                    }, e
                }(),
                yt = function(t, e) {
                    if ("undefined" != typeof Blob) return new Blob([t], {
                        type: e
                    });
                    throw new Error('The "Blob" constructor is not supported.')
                },
                St = function() {
                    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    return function(e, n) {
                        if (!(arguments.length > 2 && void 0 !== arguments[2] && arguments[2])) {
                            var r = yt(e, n);
                            return URL.createObjectURL(r)
                        }
                        for (var i = "data:" + n + ";base64,", a = 0, s = e.length; a < s; a += 3) {
                            var o = 255 & e[a],
                                c = 255 & e[a + 1],
                                l = 255 & e[a + 2];
                            i += t[o >> 2] + t[(3 & o) << 4 | c >> 4] + t[a + 1 < s ? (15 & c) << 2 | l >> 6 : 64] + t[a + 2 < s ? 63 & l : 64]
                        }
                        return i
                    }
                }();
            W.prototype = {
                on: function(t, e, n) {
                    var r = this.actionHandler;
                    r[t] && c('There is already an actionName called "' + t + '"'), r[t] = [e, n]
                },
                send: function(t, e, n) {
                    var r = {
                        sourceName: this.sourceName,
                        targetName: this.targetName,
                        action: t,
                        data: e
                    };
                    this.postMessage(r, n)
                },
                sendWithPromise: function(t, e, n) {
                    var r = this.callbackIndex++,
                        i = {
                            sourceName: this.sourceName,
                            targetName: this.targetName,
                            action: t,
                            data: e,
                            callbackId: r
                        },
                        a = B();
                    this.callbacksCapabilities[r] = a;
                    try {
                        this.postMessage(i, n)
                    } catch (t) {
                        a.reject(t)
                    }
                    return a.promise
                },
                postMessage: function(t, e) {
                    e && this.postMessageTransfers ? this.comObj.postMessage(t, e) : this.comObj.postMessage(t)
                },
                destroy: function() {
                    this.comObj.removeEventListener("message", this._onComObjOnMessage)
                }
            }, e.FONT_IDENTITY_MATRIX = Y, e.IDENTITY_MATRIX = gt, e.OPS = nt, e.VERBOSITY_LEVELS = tt, e.UNSUPPORTED_FEATURES = it, e.AnnotationBorderStyleType = K, e.AnnotationFieldFlag = Q, e.AnnotationFlag = J, e.AnnotationType = q, e.FontType = $, e.ImageKind = V, e.CMapCompressionType = et, e.InvalidPDFException = ct, e.MessageHandler = W, e.MissingDataException = dt, e.MissingPDFException = lt, e.NotImplementedException = ut, e.PageViewport = At, e.PasswordException = st, e.PasswordResponses = at, e.StatTimer = bt, e.StreamType = Z, e.TextRenderingMode = z, e.UnexpectedResponseException = ht, e.UnknownErrorException = ot, e.Util = mt, e.XRefParseException = ft, e.arrayByteLength = b, e.arraysToBytes = y, e.assert = h, e.bytesToString = A, e.createBlob = yt, e.createPromiseCapability = B, e.createObjectURL = St, e.deprecated = o, e.error = c, e.getLookupTableFactory = g, e.getVerbosityLevel = i, e.globalScope = H, e.info = a, e.isArray = D, e.isArrayBuffer = N, e.isBool = O, e.isEmptyObj = R, e.isInt = I, e.isNum = F, e.isString = M, e.isSpace = j, e.isNodeJS = U, e.isSameOrigin = u, e.createValidAbsoluteUrl = f, e.isLittleEndian = C, e.isEvalSupported = k, e.loadJpegStream = G, e.log2 = x, e.readInt8 = w, e.readUint16 = _, e.readUint32 = T, e.removeNullCharacters = m, e.setVerbosityLevel = r, e.shadow = p, e.string32 = S, e.stringToBytes = v, e.stringToPDFString = P, e.stringToUTF8String = L, e.utf8StringToString = E, e.warn = s
        }).call(e, n(6))
    }, function(t, e, n) {
        "use strict";

        function r() {}

        function i(t, e) {
            var n = e && e.url;
            if (t.href = t.title = n ? (0, l.removeNullCharacters)(n) : "", n) {
                var r = e.target;
                void 0 === r && (r = s("externalLinkTarget")), t.target = g[r];
                var i = e.rel;
                void 0 === i && (i = s("externalLinkRel")), t.rel = i
            }
        }

        function a(t) {
            var e = t.indexOf("#"),
                n = t.indexOf("?"),
                r = Math.min(e > 0 ? e : t.length, n > 0 ? n : t.length);
            return t.substring(t.lastIndexOf("/", r) + 1, r)
        }

        function s(t) {
            var e = l.globalScope.PDFJS;
            switch (t) {
                case "pdfBug":
                    return !!e && e.pdfBug;
                case "disableAutoFetch":
                    return !!e && e.disableAutoFetch;
                case "disableStream":
                    return !!e && e.disableStream;
                case "disableRange":
                    return !!e && e.disableRange;
                case "disableFontFace":
                    return !!e && e.disableFontFace;
                case "disableCreateObjectURL":
                    return !!e && e.disableCreateObjectURL;
                case "disableWebGL":
                    return !e || e.disableWebGL;
                case "cMapUrl":
                    return e ? e.cMapUrl : null;
                case "cMapPacked":
                    return !!e && e.cMapPacked;
                case "postMessageTransfers":
                    return !e || e.postMessageTransfers;
                case "workerPort":
                    return e ? e.workerPort : null;
                case "workerSrc":
                    return e ? e.workerSrc : null;
                case "disableWorker":
                    return !!e && e.disableWorker;
                case "maxImageSize":
                    return e ? e.maxImageSize : -1;
                case "imageResourcesPath":
                    return e ? e.imageResourcesPath : "";
                case "isEvalSupported":
                    return !e || e.isEvalSupported;
                case "externalLinkTarget":
                    if (!e) return p.NONE;
                    switch (e.externalLinkTarget) {
                        case p.NONE:
                        case p.SELF:
                        case p.BLANK:
                        case p.PARENT:
                        case p.TOP:
                            return e.externalLinkTarget
                    }
                    return (0, l.warn)("PDFJS.externalLinkTarget is invalid: " + e.externalLinkTarget), e.externalLinkTarget = p.NONE, p.NONE;
                case "externalLinkRel":
                    return e ? e.externalLinkRel : h;
                case "enableStats":
                    return !(!e || !e.enableStats);
                case "pdfjsNext":
                    return !(!e || !e.pdfjsNext);
                default:
                    throw new Error("Unknown default setting: " + t)
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

        function c(t, e) {
            (0, l.deprecated)("isValidUrl(), please use createValidAbsoluteUrl() instead.");
            var n = e ? "http://example.com" : null;
            return null !== (0, l.createValidAbsoluteUrl)(t, n)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.DOMCMapReaderFactory = e.DOMCanvasFactory = e.DEFAULT_LINK_REL = e.getDefaultSetting = e.LinkTarget = e.getFilenameFromUrl = e.isValidUrl = e.isExternalLinkTargetSet = e.addLinkAttributes = e.RenderingCancelledException = e.CustomStyle = void 0;
        var l = n(0),
            h = "noopener noreferrer nofollow";
        r.prototype = {
            create: function(t, e) {
                (0, l.assert)(t > 0 && e > 0, "invalid canvas size");
                var n = document.createElement("canvas"),
                    r = n.getContext("2d");
                return n.width = t, n.height = e, {
                    canvas: n,
                    context: r
                }
            },
            reset: function(t, e, n) {
                (0, l.assert)(t.canvas, "canvas is not specified"), (0, l.assert)(e > 0 && n > 0, "invalid canvas size"), t.canvas.width = e, t.canvas.height = n
            },
            destroy: function(t) {
                (0, l.assert)(t.canvas, "canvas is not specified"), t.canvas.width = 0, t.canvas.height = 0, t.canvas = null, t.context = null
            }
        };
        var u = function() {
                function t(t) {
                    this.baseUrl = t.baseUrl || null, this.isCompressed = t.isCompressed || !1
                }
                return t.prototype = {
                    fetch: function(t) {
                        var e = t.name;
                        return e ? new Promise(function(t, n) {
                            var r = this.baseUrl + e + (this.isCompressed ? ".bcmap" : ""),
                                i = new XMLHttpRequest;
                            i.open("GET", r, !0), this.isCompressed && (i.responseType = "arraybuffer"), i.onreadystatechange = function() {
                                if (i.readyState === XMLHttpRequest.DONE) {
                                    if (200 === i.status || 0 === i.status) {
                                        var e;
                                        if (this.isCompressed && i.response ? e = new Uint8Array(i.response) : !this.isCompressed && i.responseText && (e = (0, l.stringToBytes)(i.responseText)), e) return void t({
                                            cMapData: e,
                                            compressionType: this.isCompressed ? l.CMapCompressionType.BINARY : l.CMapCompressionType.NONE
                                        })
                                    }
                                    n(new Error("Unable to load " + (this.isCompressed ? "binary " : "") + "CMap at: " + r))
                                }
                            }.bind(this), i.send(null)
                        }.bind(this)) : Promise.reject(new Error("CMap name must be specified."))
                    }
                }, t
            }(),
            d = function() {
                function t() {}
                var e = ["ms", "Moz", "Webkit", "O"],
                    n = Object.create(null);
                return t.getProp = function(t, r) {
                    if (1 === arguments.length && "string" == typeof n[t]) return n[t];
                    r = r || document.documentElement;
                    var i, a, s = r.style;
                    if ("string" == typeof s[t]) return n[t] = t;
                    a = t.charAt(0).toUpperCase() + t.slice(1);
                    for (var o = 0, c = e.length; o < c; o++)
                        if (i = e[o] + a, "string" == typeof s[i]) return n[t] = i;
                    return n[t] = "undefined"
                }, t.setProp = function(t, e, n) {
                    var r = this.getProp(t);
                    "undefined" !== r && (e.style[r] = n)
                }, t
            }(),
            f = function() {
                function t(t, e) {
                    this.message = t, this.type = e
                }
                return t.prototype = new Error, t.prototype.name = "RenderingCancelledException", t.constructor = t, t
            }(),
            p = {
                NONE: 0,
                SELF: 1,
                BLANK: 2,
                PARENT: 3,
                TOP: 4
            },
            g = ["", "_self", "_blank", "_parent", "_top"];
        e.CustomStyle = d, e.RenderingCancelledException = f, e.addLinkAttributes = i, e.isExternalLinkTargetSet = o, e.isValidUrl = c, e.getFilenameFromUrl = a, e.LinkTarget = p, e.getDefaultSetting = s, e.DEFAULT_LINK_REL = h, e.DOMCanvasFactory = r, e.DOMCMapReaderFactory = u
    }, function(t, e, n) {
        "use strict";

        function r() {}
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.AnnotationLayer = void 0;
        var i = n(1),
            a = n(0);
        r.prototype = {
            create: function(t) {
                switch (t.data.annotationType) {
                    case a.AnnotationType.LINK:
                        return new o(t);
                    case a.AnnotationType.TEXT:
                        return new c(t);
                    case a.AnnotationType.WIDGET:
                        switch (t.data.fieldType) {
                            case "Tx":
                                return new h(t);
                            case "Btn":
                                if (t.data.radioButton) return new d(t);
                                if (t.data.checkBox) return new u(t);
                                (0, a.warn)("Unimplemented button widget annotation: pushbutton");
                                break;
                            case "Ch":
                                return new f(t)
                        }
                        return new l(t);
                    case a.AnnotationType.POPUP:
                        return new p(t);
                    case a.AnnotationType.LINE:
                        return new m(t);
                    case a.AnnotationType.HIGHLIGHT:
                        return new A(t);
                    case a.AnnotationType.UNDERLINE:
                        return new v(t);
                    case a.AnnotationType.SQUIGGLY:
                        return new b(t);
                    case a.AnnotationType.STRIKEOUT:
                        return new y(t);
                    case a.AnnotationType.FILEATTACHMENT:
                        return new S(t);
                    default:
                        return new s(t)
                }
            }
        };
        var s = function() {
                function t(t, e, n) {
                    this.isRenderable = e || !1, this.data = t.data, this.layer = t.layer, this.page = t.page, this.viewport = t.viewport, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderInteractiveForms = t.renderInteractiveForms, e && (this.container = this._createContainer(n))
                }
                return t.prototype = {
                    _createContainer: function(t) {
                        var e = this.data,
                            n = this.page,
                            r = this.viewport,
                            s = document.createElement("section"),
                            o = e.rect[2] - e.rect[0],
                            c = e.rect[3] - e.rect[1];
                        s.setAttribute("data-annotation-id", e.id);
                        var l = a.Util.normalizeRect([e.rect[0], n.view[3] - e.rect[1] + n.view[1], e.rect[2], n.view[3] - e.rect[3] + n.view[1]]);
                        if (i.CustomStyle.setProp("transform", s, "matrix(" + r.transform.join(",") + ")"), i.CustomStyle.setProp("transformOrigin", s, -l[0] + "px " + -l[1] + "px"), !t && e.borderStyle.width > 0) {
                            s.style.borderWidth = e.borderStyle.width + "px", e.borderStyle.style !== a.AnnotationBorderStyleType.UNDERLINE && (o -= 2 * e.borderStyle.width, c -= 2 * e.borderStyle.width);
                            var h = e.borderStyle.horizontalCornerRadius,
                                u = e.borderStyle.verticalCornerRadius;
                            if (h > 0 || u > 0) {
                                var d = h + "px / " + u + "px";
                                i.CustomStyle.setProp("borderRadius", s, d)
                            }
                            switch (e.borderStyle.style) {
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
                            e.color ? s.style.borderColor = a.Util.makeCssRgb(0 | e.color[0], 0 | e.color[1], 0 | e.color[2]) : s.style.borderWidth = 0
                        }
                        return s.style.left = l[0] + "px", s.style.top = l[1] + "px", s.style.width = o + "px", s.style.height = c + "px", s
                    },
                    _createPopup: function(t, e, n) {
                        e || (e = document.createElement("div"), e.style.height = t.style.height, e.style.width = t.style.width, t.appendChild(e));
                        var r = new g({
                                container: t,
                                trigger: e,
                                color: n.color,
                                title: n.title,
                                contents: n.contents,
                                hideWrapper: !0
                            }),
                            i = r.render();
                        i.style.left = t.style.width, t.appendChild(i)
                    },
                    render: function() {
                        throw new Error("Abstract method AnnotationElement.render called")
                    }
                }, t
            }(),
            o = function() {
                function t(t) {
                    s.call(this, t, !0)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        this.container.className = "linkAnnotation";
                        var t = document.createElement("a");
                        return (0, i.addLinkAttributes)(t, {
                            url: this.data.url,
                            target: this.data.newWindow ? i.LinkTarget.BLANK : void 0
                        }), this.data.url || (this.data.action ? this._bindNamedAction(t, this.data.action) : this._bindLink(t, this.data.dest)), this.container.appendChild(t), this.container
                    },
                    _bindLink: function(t, e) {
                        var n = this;
                        t.href = this.linkService.getDestinationHash(e), t.onclick = function() {
                            return e && n.linkService.navigateTo(e), !1
                        }, e && (t.className = "internalLink")
                    },
                    _bindNamedAction: function(t, e) {
                        var n = this;
                        t.href = this.linkService.getAnchorUrl(""), t.onclick = function() {
                            return n.linkService.executeNamedAction(e), !1
                        }, t.className = "internalLink"
                    }
                }), t
            }(),
            c = function() {
                function t(t) {
                    var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                    s.call(this, t, e)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        this.container.className = "textAnnotation";
                        var t = document.createElement("img");
                        return t.style.height = this.container.style.height, t.style.width = this.container.style.width, t.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t.alt = "[{{type}} Annotation]", t.dataset.l10nId = "text_annotation_type", t.dataset.l10nArgs = JSON.stringify({
                            type: this.data.name
                        }), this.data.hasPopup || this._createPopup(this.container, t, this.data), this.container.appendChild(t), this.container
                    }
                }), t
            }(),
            l = function() {
                function t(t, e) {
                    s.call(this, t, e)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        return this.container
                    }
                }), t
            }(),
            h = function() {
                function t(t) {
                    var e = t.renderInteractiveForms || !t.data.hasAppearance && !!t.data.fieldValue;
                    l.call(this, t, e)
                }
                var e = ["left", "center", "right"];
                return a.Util.inherit(t, l, {
                    render: function() {
                        this.container.className = "textWidgetAnnotation";
                        var t = null;
                        if (this.renderInteractiveForms) {
                            if (this.data.multiLine ? (t = document.createElement("textarea"), t.textContent = this.data.fieldValue) : (t = document.createElement("input"), t.type = "text", t.setAttribute("value", this.data.fieldValue)), t.disabled = this.data.readOnly, null !== this.data.maxLen && (t.maxLength = this.data.maxLen), this.data.comb) {
                                var n = this.data.rect[2] - this.data.rect[0],
                                    r = n / this.data.maxLen;
                                t.classList.add("comb"), t.style.letterSpacing = "calc(" + r + "px - 1ch)"
                            }
                        } else {
                            t = document.createElement("div"), t.textContent = this.data.fieldValue, t.style.verticalAlign = "middle", t.style.display = "table-cell";
                            var i = null;
                            this.data.fontRefName && (i = this.page.commonObjs.getData(this.data.fontRefName)), this._setTextStyle(t, i)
                        }
                        return null !== this.data.textAlignment && (t.style.textAlign = e[this.data.textAlignment]), this.container.appendChild(t), this.container
                    },
                    _setTextStyle: function(t, e) {
                        var n = t.style;
                        if (n.fontSize = this.data.fontSize + "px", n.direction = this.data.fontDirection < 0 ? "rtl" : "ltr", e) {
                            n.fontWeight = e.black ? e.bold ? "900" : "bold" : e.bold ? "bold" : "normal", n.fontStyle = e.italic ? "italic" : "normal";
                            var r = e.loadedName ? '"' + e.loadedName + '", ' : "",
                                i = e.fallbackName || "Helvetica, sans-serif";
                            n.fontFamily = r + i
                        }
                    }
                }), t
            }(),
            u = function() {
                function t(t) {
                    l.call(this, t, t.renderInteractiveForms)
                }
                return a.Util.inherit(t, l, {
                    render: function() {
                        this.container.className = "buttonWidgetAnnotation checkBox";
                        var t = document.createElement("input");
                        return t.disabled = this.data.readOnly, t.type = "checkbox", this.data.fieldValue && "Off" !== this.data.fieldValue && t.setAttribute("checked", !0), this.container.appendChild(t), this.container
                    }
                }), t
            }(),
            d = function() {
                function t(t) {
                    l.call(this, t, t.renderInteractiveForms)
                }
                return a.Util.inherit(t, l, {
                    render: function() {
                        this.container.className = "buttonWidgetAnnotation radioButton";
                        var t = document.createElement("input");
                        return t.disabled = this.data.readOnly, t.type = "radio", t.name = this.data.fieldName, this.data.fieldValue === this.data.buttonValue && t.setAttribute("checked", !0), this.container.appendChild(t), this.container
                    }
                }), t
            }(),
            f = function() {
                function t(t) {
                    l.call(this, t, t.renderInteractiveForms)
                }
                return a.Util.inherit(t, l, {
                    render: function() {
                        this.container.className = "choiceWidgetAnnotation";
                        var t = document.createElement("select");
                        t.disabled = this.data.readOnly, this.data.combo || (t.size = this.data.options.length, this.data.multiSelect && (t.multiple = !0));
                        for (var e = 0, n = this.data.options.length; e < n; e++) {
                            var r = this.data.options[e],
                                i = document.createElement("option");
                            i.textContent = r.displayValue, i.value = r.exportValue, this.data.fieldValue.indexOf(r.displayValue) >= 0 && i.setAttribute("selected", !0), t.appendChild(i)
                        }
                        return this.container.appendChild(t), this.container
                    }
                }), t
            }(),
            p = function() {
                function t(t) {
                    var e = !(!t.data.title && !t.data.contents);
                    s.call(this, t, e)
                }
                var e = ["Line"];
                return a.Util.inherit(t, s, {
                    render: function() {
                        if (this.container.className = "popupAnnotation", e.indexOf(this.data.parentType) >= 0) return this.container;
                        var t = '[data-annotation-id="' + this.data.parentId + '"]',
                            n = this.layer.querySelector(t);
                        if (!n) return this.container;
                        var r = new g({
                                container: this.container,
                                trigger: n,
                                color: this.data.color,
                                title: this.data.title,
                                contents: this.data.contents
                            }),
                            a = parseFloat(n.style.left),
                            s = parseFloat(n.style.width);
                        return i.CustomStyle.setProp("transformOrigin", this.container, -(a + s) + "px -" + n.style.top), this.container.style.left = a + s + "px", this.container.appendChild(r.render()), this.container
                    }
                }), t
            }(),
            g = function() {
                function t(t) {
                    this.container = t.container, this.trigger = t.trigger, this.color = t.color, this.title = t.title, this.contents = t.contents, this.hideWrapper = t.hideWrapper || !1, this.pinned = !1
                }
                return t.prototype = {
                    render: function() {
                        var t = document.createElement("div");
                        t.className = "popupWrapper", this.hideElement = this.hideWrapper ? t : this.container, this.hideElement.setAttribute("hidden", !0);
                        var e = document.createElement("div");
                        e.className = "popup";
                        var n = this.color;
                        if (n) {
                            var r = .7 * (255 - n[0]) + n[0],
                                i = .7 * (255 - n[1]) + n[1],
                                s = .7 * (255 - n[2]) + n[2];
                            e.style.backgroundColor = a.Util.makeCssRgb(0 | r, 0 | i, 0 | s)
                        }
                        var o = this._formatContents(this.contents),
                            c = document.createElement("h1");
                        return c.textContent = this.title, this.trigger.addEventListener("click", this._toggle.bind(this)), this.trigger.addEventListener("mouseover", this._show.bind(this, !1)), this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)), e.addEventListener("click", this._hide.bind(this, !0)), e.appendChild(c), e.appendChild(o), t.appendChild(e), t
                    },
                    _formatContents: function(t) {
                        for (var e = document.createElement("p"), n = t.split(/(?:\r\n?|\n)/), r = 0, i = n.length; r < i; ++r) {
                            var a = n[r];
                            e.appendChild(document.createTextNode(a)), r < i - 1 && e.appendChild(document.createElement("br"))
                        }
                        return e
                    },
                    _toggle: function() {
                        this.pinned ? this._hide(!0) : this._show(!0)
                    },
                    _show: function(t) {
                        t && (this.pinned = !0), this.hideElement.hasAttribute("hidden") && (this.hideElement.removeAttribute("hidden"), this.container.style.zIndex += 1)
                    },
                    _hide: function(t) {
                        t && (this.pinned = !1),
                            this.hideElement.hasAttribute("hidden") || this.pinned || (this.hideElement.setAttribute("hidden", !0), this.container.style.zIndex -= 1)
                    }
                }, t
            }(),
            m = function() {
                function t(t) {
                    var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                    s.call(this, t, e, !0)
                }
                var e = "http://www.w3.org/2000/svg";
                return a.Util.inherit(t, s, {
                    render: function() {
                        this.container.className = "lineAnnotation";
                        var t = this.data,
                            n = t.rect[2] - t.rect[0],
                            r = t.rect[3] - t.rect[1],
                            i = document.createElementNS(e, "svg:svg");
                        i.setAttributeNS(null, "version", "1.1"), i.setAttributeNS(null, "width", n + "px"), i.setAttributeNS(null, "height", r + "px"), i.setAttributeNS(null, "preserveAspectRatio", "none"), i.setAttributeNS(null, "viewBox", "0 0 " + n + " " + r);
                        var a = document.createElementNS(e, "svg:line");
                        return a.setAttributeNS(null, "x1", t.rect[2] - t.lineCoordinates[0]), a.setAttributeNS(null, "y1", t.rect[3] - t.lineCoordinates[1]), a.setAttributeNS(null, "x2", t.rect[2] - t.lineCoordinates[2]), a.setAttributeNS(null, "y2", t.rect[3] - t.lineCoordinates[3]), a.setAttributeNS(null, "stroke-width", t.borderStyle.width), a.setAttributeNS(null, "stroke", "transparent"), i.appendChild(a), this.container.append(i), this._createPopup(this.container, a, this.data), this.container
                    }
                }), t
            }(),
            A = function() {
                function t(t) {
                    var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                    s.call(this, t, e, !0)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        return this.container.className = "highlightAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                    }
                }), t
            }(),
            v = function() {
                function t(t) {
                    var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                    s.call(this, t, e, !0)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        return this.container.className = "underlineAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                    }
                }), t
            }(),
            b = function() {
                function t(t) {
                    var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                    s.call(this, t, e, !0)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        return this.container.className = "squigglyAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                    }
                }), t
            }(),
            y = function() {
                function t(t) {
                    var e = !!(t.data.hasPopup || t.data.title || t.data.contents);
                    s.call(this, t, e, !0)
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        return this.container.className = "strikeoutAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
                    }
                }), t
            }(),
            S = function() {
                function t(t) {
                    s.call(this, t, !0);
                    var e = this.data.file;
                    this.filename = (0, i.getFilenameFromUrl)(e.filename), this.content = e.content, this.linkService.onFileAttachmentAnnotation({
                        id: (0, a.stringToPDFString)(e.filename),
                        filename: e.filename,
                        content: e.content
                    })
                }
                return a.Util.inherit(t, s, {
                    render: function() {
                        this.container.className = "fileAttachmentAnnotation";
                        var t = document.createElement("div");
                        return t.style.height = this.container.style.height, t.style.width = this.container.style.width, t.addEventListener("dblclick", this._download.bind(this)), this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(this.container, t, this.data), this.container.appendChild(t), this.container
                    },
                    _download: function() {
                        if (!this.downloadManager) return void(0, a.warn)("Download cannot be started due to unavailable download manager");
                        this.downloadManager.downloadData(this.content, this.filename, "")
                    }
                }), t
            }(),
            x = function() {
                return {
                    render: function(t) {
                        for (var e = new r, n = 0, a = t.annotations.length; n < a; n++) {
                            var s = t.annotations[n];
                            if (s) {
                                var o = e.create({
                                    data: s,
                                    layer: t.div,
                                    page: t.page,
                                    viewport: t.viewport,
                                    linkService: t.linkService,
                                    downloadManager: t.downloadManager,
                                    imageResourcesPath: t.imageResourcesPath || (0, i.getDefaultSetting)("imageResourcesPath"),
                                    renderInteractiveForms: t.renderInteractiveForms || !1
                                });
                                o.isRenderable && t.div.appendChild(o.render())
                            }
                        }
                    },
                    update: function(t) {
                        for (var e = 0, n = t.annotations.length; e < n; e++) {
                            var r = t.annotations[e],
                                a = t.div.querySelector('[data-annotation-id="' + r.id + '"]');
                            a && i.CustomStyle.setProp("transform", a, "matrix(" + t.viewport.transform.join(",") + ")")
                        }
                        t.div.removeAttribute("hidden")
                    }
                }
            }();
        e.AnnotationLayer = x
    }, function(t, e, n) {
        "use strict";

        function r(t, e, n, r) {
            var a = new S;
            arguments.length > 1 && (0, o.deprecated)("getDocument is called with pdfDataRangeTransport, passwordCallback or progressCallback argument"), e && (e instanceof x || (e = Object.create(e), e.length = t.length, e.initialData = t.initialData, e.abort || (e.abort = function() {})), t = Object.create(t), t.range = e), a.onPassword = n || null, a.onProgress = r || null;
            var l;
            "string" == typeof t ? l = {
                url: t
            } : (0, o.isArrayBuffer)(t) ? l = {
                data: t
            } : t instanceof x ? l = {
                range: t
            } : ("object" !== (void 0 === t ? "undefined" : s(t)) && (0, o.error)("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object"), t.url || t.data || t.range || (0, o.error)("Invalid parameter object: need either .data, .range or .url"), l = t);
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
                var A = (0, c.getDefaultSetting)("workerPort");
                f = A ? new T(null, A) : new T, a._worker = f
            }
            var v = a.docId;
            return f.promise.then(function() {
                if (a.destroyed) throw new Error("Loading aborted");
                return i(f, h, u, v).then(function(t) {
                    if (a.destroyed) throw new Error("Loading aborted");
                    var e = new o.MessageHandler(v, t, f.port),
                        n = new C(e, a, u, m);
                    a._transport = n, e.send("Ready", null)
                })
            }).catch(a._capability.reject), a
        }

        function i(t, e, n, r) {
            return t.destroyed ? Promise.reject(new Error("Worker was destroyed")) : (e.disableAutoFetch = (0, c.getDefaultSetting)("disableAutoFetch"), e.disableStream = (0, c.getDefaultSetting)("disableStream"), e.chunkedViewerLoading = !!n, n && (e.length = n.length, e.initialData = n.initialData), t.messageHandler.sendWithPromise("GetDocRequest", {
                docId: r,
                source: e,
                disableRange: (0, c.getDefaultSetting)("disableRange"),
                maxImageSize: (0, c.getDefaultSetting)("maxImageSize"),
                disableFontFace: (0, c.getDefaultSetting)("disableFontFace"),
                disableCreateObjectURL: (0, c.getDefaultSetting)("disableCreateObjectURL"),
                postMessageTransfers: (0, c.getDefaultSetting)("postMessageTransfers") && !p,
                docBaseUrl: e.docBaseUrl,
                disableNativeImageDecoder: e.disableNativeImageDecoder,
                ignoreErrors: e.ignoreErrors
            }).then(function(e) {
                if (t.destroyed) throw new Error("Worker was destroyed");
                return e
            }))
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.build = e.version = e._UnsupportedManager = e.PDFPageProxy = e.PDFDocumentProxy = e.PDFWorker = e.PDFDataRangeTransport = e.getDocument = void 0;
        var a, s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
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
            A = !1;
        if ("undefined" == typeof __pdfjsdev_webpack__) {
            "undefined" == typeof window ? (f = !0, void 0 === require.ensure && (require.ensure = require("node-ensure")), A = !0) : "undefined" != typeof require && "function" == typeof require.ensure && (A = !0), "undefined" != typeof requirejs && requirejs.toUrl && (a = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
            var v = "undefined" != typeof requirejs && requirejs.load;
            m = A ? function(t) {
                require.ensure([], function() {
                    var e = require("./pdf.worker.js");
                    t(e.WorkerMessageHandler)
                })
            } : v ? function(t) {
                requirejs(["pdfjs-dist/build/pdf.worker"], function(e) {
                    t(e.WorkerMessageHandler)
                })
            } : null
        }
        var b, y, S = function() {
                function t() {
                    this._capability = (0, o.createPromiseCapability)(), this._transport = null, this._worker = null, this.docId = "d" + e++, this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null
                }
                var e = 0;
                return t.prototype = {
                    get promise() {
                        return this._capability.promise
                    },
                    destroy: function() {
                        return this.destroyed = !0, (this._transport ? this._transport.destroy() : Promise.resolve()).then(function() {
                            this._transport = null, this._worker && (this._worker.destroy(), this._worker = null)
                        }.bind(this))
                    },
                    then: function(t, e) {
                        return this.promise.then.apply(this.promise, arguments)
                    }
                }, t
            }(),
            x = function() {
                function t(t, e) {
                    this.length = t, this.initialData = e, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._readyCapability = (0, o.createPromiseCapability)()
                }
                return t.prototype = {
                    addRangeListener: function(t) {
                        this._rangeListeners.push(t)
                    },
                    addProgressListener: function(t) {
                        this._progressListeners.push(t)
                    },
                    addProgressiveReadListener: function(t) {
                        this._progressiveReadListeners.push(t)
                    },
                    onDataRange: function(t, e) {
                        for (var n = this._rangeListeners, r = 0, i = n.length; r < i; ++r) n[r](t, e)
                    },
                    onDataProgress: function(t) {
                        this._readyCapability.promise.then(function() {
                            for (var e = this._progressListeners, n = 0, r = e.length; n < r; ++n) e[n](t)
                        }.bind(this))
                    },
                    onDataProgressiveRead: function(t) {
                        this._readyCapability.promise.then(function() {
                            for (var e = this._progressiveReadListeners, n = 0, r = e.length; n < r; ++n) e[n](t)
                        }.bind(this))
                    },
                    transportReady: function() {
                        this._readyCapability.resolve()
                    },
                    requestDataRange: function(t, e) {
                        throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")
                    },
                    abort: function() {}
                }, t
            }(),
            w = function() {
                function t(t, e, n) {
                    this.pdfInfo = t, this.transport = e, this.loadingTask = n
                }
                return t.prototype = {
                    get numPages() {
                        return this.pdfInfo.numPages
                    },
                    get fingerprint() {
                        return this.pdfInfo.fingerprint
                    },
                    getPage: function(t) {
                        return this.transport.getPage(t)
                    },
                    getPageIndex: function(t) {
                        return this.transport.getPageIndex(t)
                    },
                    getDestinations: function() {
                        return this.transport.getDestinations()
                    },
                    getDestination: function(t) {
                        return this.transport.getDestination(t)
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
                }, t
            }(),
            _ = function() {
                function t(t, e, n) {
                    this.pageIndex = t, this.pageInfo = e, this.transport = n, this.stats = new o.StatTimer, this.stats.enabled = (0, c.getDefaultSetting)("enableStats"), this.commonObjs = n.commonObjs, this.objs = new k, this.cleanupAfterRender = !1, this.pendingCleanup = !1, this.intentStates = Object.create(null), this.destroyed = !1
                }
                return t.prototype = {
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
                    getViewport: function(t, e) {
                        return arguments.length < 2 && (e = this.rotate), new o.PageViewport(this.view, t, e, 0, 0)
                    },
                    getAnnotations: function(t) {
                        var e = t && t.intent || null;
                        return this.annotationsPromise && this.annotationsIntent === e || (this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, e), this.annotationsIntent = e), this.annotationsPromise
                    },
                    render: function(t) {
                        function e(t) {
                            var e = a.renderTasks.indexOf(s);
                            e >= 0 && a.renderTasks.splice(e, 1), h.cleanupAfterRender && (h.pendingCleanup = !0), h._tryCleanup(), t ? s.capability.reject(t) : s.capability.resolve(), n.timeEnd("Rendering"), n.timeEnd("Overall")
                        }
                        var n = this.stats;
                        n.time("Overall"), this.pendingCleanup = !1;
                        var r = "print" === t.intent ? "print" : "display",
                            i = t.canvasFactory || new c.DOMCanvasFactory;
                        this.intentStates[r] || (this.intentStates[r] = Object.create(null));
                        var a = this.intentStates[r];
                        a.displayReadyCapability || (a.receivingOperatorList = !0, a.displayReadyCapability = (0, o.createPromiseCapability)(), a.operatorList = {
                            fnArray: [],
                            argsArray: [],
                            lastChunk: !1
                        }, this.stats.time("Page Request"), this.transport.messageHandler.send("RenderPageRequest", {
                            pageIndex: this.pageNumber - 1,
                            intent: r,
                            renderInteractiveForms: !0 === t.renderInteractiveForms
                        }));
                        var s = new L(e, t, this.objs, this.commonObjs, a.operatorList, this.pageNumber, i);
                        s.useRequestAnimationFrame = "print" !== r, a.renderTasks || (a.renderTasks = []), a.renderTasks.push(s);
                        var l = s.task;
                        t.continueCallback && ((0, o.deprecated)("render is used with continueCallback parameter"), l.onContinue = t.continueCallback);
                        var h = this;
                        return a.displayReadyCapability.promise.then(function(t) {
                            if (h.pendingCleanup) return void e();
                            n.time("Rendering"), s.initializeGraphics(t), s.operatorListChanged()
                        }, function(t) {
                            e(t)
                        }), l
                    },
                    getOperatorList: function() {
                        function t() {
                            if (n.operatorList.lastChunk) {
                                n.opListReadCapability.resolve(n.operatorList);
                                var t = n.renderTasks.indexOf(e);
                                t >= 0 && n.renderTasks.splice(t, 1)
                            }
                        }
                        this.intentStates.oplist || (this.intentStates.oplist = Object.create(null));
                        var e, n = this.intentStates.oplist;
                        return n.opListReadCapability || (e = {}, e.operatorListChanged = t, n.receivingOperatorList = !0, n.opListReadCapability = (0, o.createPromiseCapability)(), n.renderTasks = [], n.renderTasks.push(e), n.operatorList = {
                            fnArray: [],
                            argsArray: [],
                            lastChunk: !1
                        }, this.transport.messageHandler.send("RenderPageRequest", {
                            pageIndex: this.pageIndex,
                            intent: "oplist"
                        })), n.opListReadCapability.promise
                    },
                    getTextContent: function(t) {
                        return t = t || {}, this.transport.messageHandler.sendWithPromise("GetTextContent", {
                            pageIndex: this.pageNumber - 1,
                            normalizeWhitespace: !0 === t.normalizeWhitespace,
                            combineTextItems: !0 !== t.disableCombineTextItems
                        })
                    },
                    _destroy: function() {
                        this.destroyed = !0, this.transport.pageCache[this.pageIndex] = null;
                        var t = [];
                        return Object.keys(this.intentStates).forEach(function(e) {
                            if ("oplist" !== e) {
                                this.intentStates[e].renderTasks.forEach(function(e) {
                                    var n = e.capability.promise.catch(function() {});
                                    t.push(n), e.cancel()
                                })
                            }
                        }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1, Promise.all(t)
                    },
                    destroy: function() {
                        (0, o.deprecated)("page destroy method, use cleanup() instead"), this.cleanup()
                    },
                    cleanup: function() {
                        this.pendingCleanup = !0, this._tryCleanup()
                    },
                    _tryCleanup: function() {
                        this.pendingCleanup && !Object.keys(this.intentStates).some(function(t) {
                            var e = this.intentStates[t];
                            return 0 !== e.renderTasks.length || e.receivingOperatorList
                        }, this) && (Object.keys(this.intentStates).forEach(function(t) {
                            delete this.intentStates[t]
                        }, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1)
                    },
                    _startRenderPage: function(t, e) {
                        var n = this.intentStates[e];
                        n.displayReadyCapability && n.displayReadyCapability.resolve(t)
                    },
                    _renderPageChunk: function(t, e) {
                        var n, r, i = this.intentStates[e];
                        for (n = 0, r = t.length; n < r; n++) i.operatorList.fnArray.push(t.fnArray[n]), i.operatorList.argsArray.push(t.argsArray[n]);
                        for (i.operatorList.lastChunk = t.lastChunk, n = 0; n < i.renderTasks.length; n++) i.renderTasks[n].operatorListChanged();
                        t.lastChunk && (i.receivingOperatorList = !1, this._tryCleanup())
                    }
                }, t
            }(),
            T = function() {
                function t() {
                    return void 0 !== a ? a : (0, c.getDefaultSetting)("workerSrc") ? (0, c.getDefaultSetting)("workerSrc") : g ? g.replace(/(\.(?:min\.)?js)$/i, ".worker$1") : void(0, o.error)("No PDFJS.workerSrc specified")
                }

                function e() {
                    return l ? l.promise : (l = (0, o.createPromiseCapability)(), (m || function(e) {
                        o.Util.loadScript(t(), function() {
                            e(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)
                        })
                    })(l.resolve), l.promise)
                }

                function n(t) {
                    this._listeners = [], this._defer = t, this._deferred = Promise.resolve(void 0)
                }

                function r(t) {
                    var e = "importScripts('" + t + "');";
                    return URL.createObjectURL(new Blob([e]))
                }

                function i(t, e) {
                    if (this.name = t, this.destroyed = !1, this._readyCapability = (0, o.createPromiseCapability)(), this._port = null, this._webWorker = null, this._messageHandler = null, e) return void this._initializeFromPort(e);
                    this._initialize()
                }
                var l, h = 0;
                return n.prototype = {
                    postMessage: function(t, e) {
                        function n(t) {
                            if ("object" !== (void 0 === t ? "undefined" : s(t)) || null === t) return t;
                            if (r.has(t)) return r.get(t);
                            var i, a;
                            if ((a = t.buffer) && (0, o.isArrayBuffer)(a)) {
                                var c = e && e.indexOf(a) >= 0;
                                return i = t === a ? t : c ? new t.constructor(a, t.byteOffset, t.byteLength) : new t.constructor(t), r.set(t, i), i
                            }
                            i = (0, o.isArray)(t) ? [] : {}, r.set(t, i);
                            for (var l in t) {
                                for (var h, u = t; !(h = Object.getOwnPropertyDescriptor(u, l));) u = Object.getPrototypeOf(u);
                                void 0 !== h.value && "function" != typeof h.value && (i[l] = n(h.value))
                            }
                            return i
                        }
                        if (!this._defer) return void this._listeners.forEach(function(e) {
                            e.call(this, {
                                data: t
                            })
                        }, this);
                        var r = new WeakMap,
                            i = {
                                data: n(t)
                            };
                        this._deferred.then(function() {
                            this._listeners.forEach(function(t) {
                                t.call(this, i)
                            }, this)
                        }.bind(this))
                    },
                    addEventListener: function(t, e) {
                        this._listeners.push(e)
                    },
                    removeEventListener: function(t, e) {
                        var n = this._listeners.indexOf(e);
                        this._listeners.splice(n, 1)
                    },
                    terminate: function() {
                        this._listeners = []
                    }
                }, i.prototype = {
                    get promise() {
                        return this._readyCapability.promise
                    },
                    get port() {
                        return this._port
                    },
                    get messageHandler() {
                        return this._messageHandler
                    },
                    _initializeFromPort: function(t) {
                        this._port = t, this._messageHandler = new o.MessageHandler("main", "worker", t), this._messageHandler.on("ready", function() {}), this._readyCapability.resolve()
                    },
                    _initialize: function() {
                        if (!f && !(0, c.getDefaultSetting)("disableWorker") && "undefined" != typeof Worker) {
                            var e = t();
                            try {
                                (0, o.isSameOrigin)(window.location.href, e) || (e = r(new URL(e, window.location).href));
                                var n = new Worker(e),
                                    i = new o.MessageHandler("main", "worker", n),
                                    a = function() {
                                        n.removeEventListener("error", s), i.destroy(), n.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                                    }.bind(this),
                                    s = function(t) {
                                        this._webWorker || a()
                                    }.bind(this);
                                n.addEventListener("error", s), i.on("test", function(t) {
                                    if (n.removeEventListener("error", s), this.destroyed) return void a();
                                    t && t.supportTypedArray ? (this._messageHandler = i, this._port = n, this._webWorker = n, t.supportTransfers || (p = !0), this._readyCapability.resolve(), i.send("configure", {
                                        verbosity: (0, o.getVerbosityLevel)()
                                    })) : (this._setupFakeWorker(), i.destroy(), n.terminate())
                                }.bind(this)), i.on("console_log", function(t) {
                                    console.log.apply(console, t)
                                }), i.on("console_error", function(t) {
                                    console.error.apply(console, t)
                                }), i.on("ready", function(t) {
                                    if (n.removeEventListener("error", s), this.destroyed) return void a();
                                    try {
                                        l()
                                    } catch (t) {
                                        this._setupFakeWorker()
                                    }
                                }.bind(this));
                                var l = function() {
                                    var t = (0, c.getDefaultSetting)("postMessageTransfers") && !p,
                                        e = new Uint8Array([t ? 255 : 0]);
                                    try {
                                        i.send("test", e, [e.buffer])
                                    } catch (t) {
                                        (0, o.info)("Cannot use postMessage transfers"), e[0] = 0, i.send("test", e)
                                    }
                                };
                                return void l()
                            } catch (t) {
                                (0, o.info)("The worker has been disabled.")
                            }
                        }
                        this._setupFakeWorker()
                    },
                    _setupFakeWorker: function() {
                        f || (0, c.getDefaultSetting)("disableWorker") || ((0, o.warn)("Setting up fake worker."), f = !0), e().then(function(t) {
                            if (this.destroyed) return void this._readyCapability.reject(new Error("Worker was destroyed"));
                            var e = Uint8Array !== Float32Array,
                                r = new n(e);
                            this._port = r;
                            var i = "fake" + h++,
                                a = new o.MessageHandler(i + "_worker", i, r);
                            t.setup(a, r);
                            var s = new o.MessageHandler(i, i + "_worker", r);
                            this._messageHandler = s, this._readyCapability.resolve()
                        }.bind(this))
                    },
                    destroy: function() {
                        this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
                    }
                }, i
            }(),
            C = function() {
                function t(t, e, n, r) {
                    this.messageHandler = t, this.loadingTask = e, this.pdfDataRangeTransport = n, this.commonObjs = new k, this.fontLoader = new l.FontLoader(e.docId), this.CMapReaderFactory = new r({
                        baseUrl: (0, c.getDefaultSetting)("cMapUrl"),
                        isCompressed: (0, c.getDefaultSetting)("cMapPacked")
                    }), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this.pageCache = [], this.pagePromises = [], this.downloadInfoCapability = (0, o.createPromiseCapability)(), this.setupMessageHandler()
                }
                return t.prototype = {
                    destroy: function() {
                        if (this.destroyCapability) return this.destroyCapability.promise;
                        this.destroyed = !0, this.destroyCapability = (0, o.createPromiseCapability)(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                        var t = [];
                        this.pageCache.forEach(function(e) {
                            e && t.push(e._destroy())
                        }), this.pageCache = [], this.pagePromises = [];
                        var e = this,
                            n = this.messageHandler.sendWithPromise("Terminate", null);
                        return t.push(n), Promise.all(t).then(function() {
                            e.fontLoader.clear(), e.pdfDataRangeTransport && (e.pdfDataRangeTransport.abort(), e.pdfDataRangeTransport = null), e.messageHandler && (e.messageHandler.destroy(), e.messageHandler = null), e.destroyCapability.resolve()
                        }, this.destroyCapability.reject), this.destroyCapability.promise
                    },
                    setupMessageHandler: function() {
                        var t = this.messageHandler,
                            e = this.loadingTask,
                            n = this.pdfDataRangeTransport;
                        n && (n.addRangeListener(function(e, n) {
                            t.send("OnDataRange", {
                                begin: e,
                                chunk: n
                            })
                        }), n.addProgressListener(function(e) {
                            t.send("OnDataProgress", {
                                loaded: e
                            })
                        }), n.addProgressiveReadListener(function(e) {
                            t.send("OnDataRange", {
                                chunk: e
                            })
                        }), t.on("RequestDataRange", function(t) {
                            n.requestDataRange(t.begin, t.end)
                        }, this)), t.on("GetDoc", function(t) {
                            var e = t.pdfInfo;
                            this.numPages = t.pdfInfo.numPages;
                            var n = this.loadingTask,
                                r = new w(e, this, n);
                            this.pdfDocument = r, n._capability.resolve(r)
                        }, this), t.on("PasswordRequest", function(t) {
                            if (this._passwordCapability = (0, o.createPromiseCapability)(), e.onPassword) {
                                var n = function(t) {
                                    this._passwordCapability.resolve({
                                        password: t
                                    })
                                }.bind(this);
                                e.onPassword(n, t.code)
                            } else this._passwordCapability.reject(new o.PasswordException(t.message, t.code));
                            return this._passwordCapability.promise
                        }, this), t.on("PasswordException", function(t) {
                            e._capability.reject(new o.PasswordException(t.message, t.code))
                        }, this), t.on("InvalidPDF", function(t) {
                            this.loadingTask._capability.reject(new o.InvalidPDFException(t.message))
                        }, this), t.on("MissingPDF", function(t) {
                            this.loadingTask._capability.reject(new o.MissingPDFException(t.message))
                        }, this), t.on("UnexpectedResponse", function(t) {
                            this.loadingTask._capability.reject(new o.UnexpectedResponseException(t.message, t.status))
                        }, this), t.on("UnknownError", function(t) {
                            this.loadingTask._capability.reject(new o.UnknownErrorException(t.message, t.details))
                        }, this), t.on("DataLoaded", function(t) {
                            this.downloadInfoCapability.resolve(t)
                        }, this), t.on("PDFManagerReady", function(t) {
                            this.pdfDataRangeTransport && this.pdfDataRangeTransport.transportReady()
                        }, this), t.on("StartRenderPage", function(t) {
                            if (!this.destroyed) {
                                var e = this.pageCache[t.pageIndex];
                                e.stats.timeEnd("Page Request"), e._startRenderPage(t.transparency, t.intent)
                            }
                        }, this), t.on("RenderPageChunk", function(t) {
                            if (!this.destroyed) {
                                this.pageCache[t.pageIndex]._renderPageChunk(t.operatorList, t.intent)
                            }
                        }, this), t.on("commonobj", function(t) {
                            if (!this.destroyed) {
                                var e = t[0],
                                    n = t[1];
                                if (!this.commonObjs.hasData(e)) switch (n) {
                                    case "Font":
                                        var r = t[2];
                                        if ("error" in r) {
                                            var i = r.error;
                                            (0, o.warn)("Error during font loading: " + i), this.commonObjs.resolve(e, i);
                                            break
                                        }
                                        var a = null;
                                        (0, c.getDefaultSetting)("pdfBug") && o.globalScope.FontInspector && o.globalScope.FontInspector.enabled && (a = {
                                            registerFont: function(t, e) {
                                                o.globalScope.FontInspector.fontAdded(t, e)
                                            }
                                        });
                                        var s = new l.FontFaceObject(r, {
                                            isEvalSuported: (0, c.getDefaultSetting)("isEvalSupported"),
                                            disableFontFace: (0, c.getDefaultSetting)("disableFontFace"),
                                            fontRegistry: a
                                        });
                                        this.fontLoader.bind([s], function(t) {
                                            this.commonObjs.resolve(e, s)
                                        }.bind(this));
                                        break;
                                    case "FontPath":
                                        this.commonObjs.resolve(e, t[2]);
                                        break;
                                    default:
                                        (0, o.error)("Got unknown common object type " + n)
                                }
                            }
                        }, this), t.on("obj", function(t) {
                            if (!this.destroyed) {
                                var e, n = t[0],
                                    r = t[1],
                                    i = t[2],
                                    a = this.pageCache[r];
                                if (!a.objs.hasData(n)) switch (i) {
                                    case "JpegStream":
                                        e = t[3], (0, o.loadJpegStream)(n, e, a.objs);
                                        break;
                                    case "Image":
                                        e = t[3], a.objs.resolve(n, e);
                                        e && "data" in e && e.data.length > 8e6 && (a.cleanupAfterRender = !0);
                                        break;
                                    default:
                                        (0, o.error)("Got unknown object type " + i)
                                }
                            }
                        }, this), t.on("DocProgress", function(t) {
                            if (!this.destroyed) {
                                var e = this.loadingTask;
                                e.onProgress && e.onProgress({
                                    loaded: t.loaded,
                                    total: t.total
                                })
                            }
                        }, this), t.on("PageError", function(t) {
                            if (!this.destroyed) {
                                var e = this.pageCache[t.pageNum - 1],
                                    n = e.intentStates[t.intent];
                                if (n.displayReadyCapability ? n.displayReadyCapability.reject(t.error) : (0, o.error)(t.error), n.operatorList) {
                                    n.operatorList.lastChunk = !0;
                                    for (var r = 0; r < n.renderTasks.length; r++) n.renderTasks[r].operatorListChanged()
                                }
                            }
                        }, this), t.on("UnsupportedFeature", function(t) {
                            if (!this.destroyed) {
                                var e = t.featureId,
                                    n = this.loadingTask;
                                n.onUnsupportedFeature && n.onUnsupportedFeature(e), E.notify(e)
                            }
                        }, this), t.on("JpegDecode", function(t) {
                            if (this.destroyed) return Promise.reject(new Error("Worker was destroyed"));
                            if ("undefined" == typeof document) return Promise.reject(new Error('"document" is not defined.'));
                            var e = t[0],
                                n = t[1];
                            return 3 !== n && 1 !== n ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(t, r) {
                                var i = new Image;
                                i.onload = function() {
                                    var e = i.width,
                                        r = i.height,
                                        a = e * r,
                                        s = 4 * a,
                                        o = new Uint8Array(a * n),
                                        c = document.createElement("canvas");
                                    c.width = e, c.height = r;
                                    var l = c.getContext("2d");
                                    l.drawImage(i, 0, 0);
                                    var h, u, d = l.getImageData(0, 0, e, r).data;
                                    if (3 === n)
                                        for (h = 0, u = 0; h < s; h += 4, u += 3) o[u] = d[h], o[u + 1] = d[h + 1], o[u + 2] = d[h + 2];
                                    else if (1 === n)
                                        for (h = 0, u = 0; h < s; h += 4, u++) o[u] = d[h];
                                    t({
                                        data: o,
                                        width: e,
                                        height: r
                                    })
                                }, i.onerror = function() {
                                    r(new Error("JpegDecode failed to load image"))
                                }, i.src = e
                            })
                        }, this), t.on("FetchBuiltInCMap", function(t) {
                            return this.destroyed ? Promise.reject(new Error("Worker was destroyed")) : this.CMapReaderFactory.fetch({
                                name: t.name
                            })
                        }, this)
                    },
                    getData: function() {
                        return this.messageHandler.sendWithPromise("GetData", null)
                    },
                    getPage: function(t, e) {
                        if (!(0, o.isInt)(t) || t <= 0 || t > this.numPages) return Promise.reject(new Error("Invalid page request"));
                        var n = t - 1;
                        if (n in this.pagePromises) return this.pagePromises[n];
                        var r = this.messageHandler.sendWithPromise("GetPage", {
                            pageIndex: n
                        }).then(function(t) {
                            if (this.destroyed) throw new Error("Transport destroyed");
                            var e = new _(n, t, this);
                            return this.pageCache[n] = e, e
                        }.bind(this));
                        return this.pagePromises[n] = r, r
                    },
                    getPageIndex: function(t) {
                        return this.messageHandler.sendWithPromise("GetPageIndex", {
                            ref: t
                        }).catch(function(t) {
                            return Promise.reject(new Error(t))
                        })
                    },
                    getAnnotations: function(t, e) {
                        return this.messageHandler.sendWithPromise("GetAnnotations", {
                            pageIndex: t,
                            intent: e
                        })
                    },
                    getDestinations: function() {
                        return this.messageHandler.sendWithPromise("GetDestinations", null)
                    },
                    getDestination: function(t) {
                        return this.messageHandler.sendWithPromise("GetDestination", {
                            id: t
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
                        return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(t) {
                            return {
                                info: t[0],
                                metadata: t[1] ? new u.Metadata(t[1]) : null
                            }
                        })
                    },
                    getStats: function() {
                        return this.messageHandler.sendWithPromise("GetStats", null)
                    },
                    startCleanup: function() {
                        this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
                            for (var t = 0, e = this.pageCache.length; t < e; t++) {
                                var n = this.pageCache[t];
                                n && n.cleanup()
                            }
                            this.commonObjs.clear(), this.fontLoader.clear()
                        }.bind(this))
                    }
                }, t
            }(),
            k = function() {
                function t() {
                    this.objs = Object.create(null)
                }
                return t.prototype = {
                    ensureObj: function(t) {
                        if (this.objs[t]) return this.objs[t];
                        var e = {
                            capability: (0, o.createPromiseCapability)(),
                            data: null,
                            resolved: !1
                        };
                        return this.objs[t] = e, e
                    },
                    get: function(t, e) {
                        if (e) return this.ensureObj(t).capability.promise.then(e), null;
                        var n = this.objs[t];
                        return n && n.resolved || (0, o.error)("Requesting object that isn't resolved yet " + t), n.data
                    },
                    resolve: function(t, e) {
                        var n = this.ensureObj(t);
                        n.resolved = !0, n.data = e, n.capability.resolve(e)
                    },
                    isResolved: function(t) {
                        var e = this.objs;
                        return !!e[t] && e[t].resolved
                    },
                    hasData: function(t) {
                        return this.isResolved(t)
                    },
                    getData: function(t) {
                        var e = this.objs;
                        return e[t] && e[t].resolved ? e[t].data : null
                    },
                    clear: function() {
                        this.objs = Object.create(null)
                    }
                }, t
            }(),
            P = function() {
                function t(t) {
                    this._internalRenderTask = t, this.onContinue = null
                }
                return t.prototype = {
                    get promise() {
                        return this._internalRenderTask.capability.promise
                    },
                    cancel: function() {
                        this._internalRenderTask.cancel()
                    },
                    then: function(t, e) {
                        return this.promise.then.apply(this.promise, arguments)
                    }
                }, t
            }(),
            L = function() {
                function t(t, e, n, r, i, a, s) {
                    this.callback = t, this.params = e, this.objs = n, this.commonObjs = r, this.operatorListIdx = null, this.operatorList = i, this.pageNumber = a, this.canvasFactory = s, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this.useRequestAnimationFrame = !1, this.cancelled = !1, this.capability = (0, o.createPromiseCapability)(), this.task = new P(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this)
                }
                return t.prototype = {
                    initializeGraphics: function(t) {
                        if (!this.cancelled) {
                            (0, c.getDefaultSetting)("pdfBug") && o.globalScope.StepperManager && o.globalScope.StepperManager.enabled && (this.stepper = o.globalScope.StepperManager.create(this.pageNumber - 1), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                            var e = this.params;
                            this.gfx = new h.CanvasGraphics(e.canvasContext, this.commonObjs, this.objs, this.canvasFactory, e.imageLayer), this.gfx.beginDrawing(e.transform, e.viewport, t), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback()
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
                }, t
            }(),
            E = function() {
                var t = [];
                return {
                    listen: function(e) {
                        (0, o.deprecated)("Global UnsupportedManager.listen is used:  use PDFDocumentLoadingTask.onUnsupportedFeature instead"), t.push(e)
                    },
                    notify: function(e) {
                        for (var n = 0, r = t.length; n < r; n++) t[n](e)
                    }
                }
            }();
        e.version = b = "1.8.246", e.build = y = "0e8f020", e.getDocument = r, e.PDFDataRangeTransport = x, e.PDFWorker = T, e.PDFDocumentProxy = w, e.PDFPageProxy = _, e._UnsupportedManager = E, e.version = b, e.build = y
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.SVGGraphics = void 0;
        var r = n(0),
            i = function() {
                throw new Error("Not implemented: SVGGraphics")
            },
            a = {
                fontStyle: "normal",
                fontWeight: "normal",
                fillColor: "#000000"
            },
            s = function() {
                function t(t, e, n) {
                    for (var r = -1, i = e; i < n; i++) {
                        var a = 255 & (r ^ t[i]);
                        r = r >>> 8 ^ o[a]
                    }
                    return -1 ^ r
                }

                function e(e, n, r, i) {
                    var a = i,
                        s = n.length;
                    r[a] = s >> 24 & 255, r[a + 1] = s >> 16 & 255, r[a + 2] = s >> 8 & 255, r[a + 3] = 255 & s, a += 4, r[a] = 255 & e.charCodeAt(0), r[a + 1] = 255 & e.charCodeAt(1), r[a + 2] = 255 & e.charCodeAt(2), r[a + 3] = 255 & e.charCodeAt(3), a += 4, r.set(n, a), a += n.length;
                    var o = t(r, i + 4, a);
                    r[a] = o >> 24 & 255, r[a + 1] = o >> 16 & 255, r[a + 2] = o >> 8 & 255, r[a + 3] = 255 & o
                }

                function n(t, e, n) {
                    for (var r = 1, i = 0, a = e; a < n; ++a) r = (r + (255 & t[a])) % 65521, i = (i + r) % 65521;
                    return i << 16 | r
                }

                function i(t, i, o) {
                    var c, l, h, u = t.width,
                        d = t.height,
                        f = t.data;
                    switch (i) {
                        case r.ImageKind.GRAYSCALE_1BPP:
                            l = 0, c = 1, h = u + 7 >> 3;
                            break;
                        case r.ImageKind.RGB_24BPP:
                            l = 2, c = 8, h = 3 * u;
                            break;
                        case r.ImageKind.RGBA_32BPP:
                            l = 6, c = 8, h = 4 * u;
                            break;
                        default:
                            throw new Error("invalid format")
                    }
                    var p, g, m = new Uint8Array((1 + h) * d),
                        A = 0,
                        v = 0;
                    for (p = 0; p < d; ++p) m[A++] = 0, m.set(f.subarray(v, v + h), A), v += h, A += h;
                    if (i === r.ImageKind.GRAYSCALE_1BPP)
                        for (A = 0, p = 0; p < d; p++)
                            for (A++, g = 0; g < h; g++) m[A++] ^= 255;
                    var b = new Uint8Array([u >> 24 & 255, u >> 16 & 255, u >> 8 & 255, 255 & u, d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, c, l, 0, 0, 0]),
                        y = m.length,
                        S = Math.ceil(y / 65535),
                        x = new Uint8Array(2 + y + 5 * S + 4),
                        w = 0;
                    x[w++] = 120, x[w++] = 156;
                    for (var _ = 0; y > 65535;) x[w++] = 0, x[w++] = 255, x[w++] = 255, x[w++] = 0, x[w++] = 0, x.set(m.subarray(_, _ + 65535), w), w += 65535, _ += 65535, y -= 65535;
                    x[w++] = 1, x[w++] = 255 & y, x[w++] = y >> 8 & 255, x[w++] = 255 & ~y, x[w++] = (65535 & ~y) >> 8 & 255, x.set(m.subarray(_), w), w += m.length - _;
                    var T = n(m, 0, m.length);
                    x[w++] = T >> 24 & 255, x[w++] = T >> 16 & 255, x[w++] = T >> 8 & 255, x[w++] = 255 & T;
                    var C = a.length + 3 * s + b.length + x.length,
                        k = new Uint8Array(C),
                        P = 0;
                    return k.set(a, P), P += a.length, e("IHDR", b, k, P), P += s + b.length, e("IDATA", x, k, P), P += s + x.length, e("IEND", new Uint8Array(0), k, P), (0, r.createObjectURL)(k, "image/png", o)
                }
                for (var a = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), s = 12, o = new Int32Array(256), c = 0; c < 256; c++) {
                    for (var l = c, h = 0; h < 8; h++) l = 1 & l ? 3988292384 ^ l >> 1 & 2147483647 : l >> 1 & 2147483647;
                    o[c] = l
                }
                return function(t, e) {
                    return i(t, void 0 === t.kind ? r.ImageKind.GRAYSCALE_1BPP : t.kind, e)
                }
            }(),
            o = function() {
                function t() {
                    this.fontSizeScale = 1, this.fontWeight = a.fontWeight, this.fontSize = 0, this.textMatrix = r.IDENTITY_MATRIX, this.fontMatrix = r.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = a.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = ""
                }
                return t.prototype = {
                    clone: function() {
                        return Object.create(this)
                    },
                    setCurrentPoint: function(t, e) {
                        this.x = t, this.y = e
                    }
                }, t
            }();
        e.SVGGraphics = i = function() {
            function t(t) {
                for (var e = [], n = [], r = t.length, i = 0; i < r; i++) "save" !== t[i].fn ? "restore" === t[i].fn ? e = n.pop() : e.push(t[i]) : (e.push({
                    fnId: 92,
                    fn: "group",
                    items: []
                }), n.push(e), e = e[e.length - 1].items);
                return e
            }

            function e(t) {
                if (t === (0 | t)) return t.toString();
                var e = t.toFixed(10),
                    n = e.length - 1;
                if ("0" !== e[n]) return e;
                do {
                    n--
                } while ("0" === e[n]);
                return e.substr(0, "." === e[n] ? n : n + 1)
            }

            function n(t) {
                if (0 === t[4] && 0 === t[5]) {
                    if (0 === t[1] && 0 === t[2]) return 1 === t[0] && 1 === t[3] ? "" : "scale(" + e(t[0]) + " " + e(t[3]) + ")";
                    if (t[0] === t[3] && t[1] === -t[2]) {
                        return "rotate(" + e(180 * Math.acos(t[0]) / Math.PI) + ")"
                    }
                } else if (1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3]) return "translate(" + e(t[4]) + " " + e(t[5]) + ")";
                return "matrix(" + e(t[0]) + " " + e(t[1]) + " " + e(t[2]) + " " + e(t[3]) + " " + e(t[4]) + " " + e(t[5]) + ")"
            }

            function i(t, e, n) {
                this.current = new o, this.transformMatrix = r.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = t, this.objs = e, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = Object.create(null), this.cssStyle = null, this.forceDataSchema = !!n
            }
            var c = "http://www.w3.org/2000/svg",
                l = "http://www.w3.org/1999/xlink",
                h = ["butt", "round", "square"],
                u = ["miter", "round", "bevel"],
                d = 0,
                f = 0;
            return i.prototype = {
                save: function() {
                    this.transformStack.push(this.transformMatrix);
                    var t = this.current;
                    this.extraStack.push(t), this.current = t.clone()
                },
                restore: function() {
                    this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.tgrp = null
                },
                group: function(t) {
                    this.save(), this.executeOpTree(t), this.restore()
                },
                loadDependencies: function(t) {
                    for (var e = t.fnArray, n = e.length, i = t.argsArray, a = this, s = 0; s < n; s++)
                        if (r.OPS.dependency === e[s])
                            for (var o = i[s], c = 0, l = o.length; c < l; c++) {
                                var h, u = o[c],
                                    d = "g_" === u.substring(0, 2);
                                h = d ? new Promise(function(t) {
                                    a.commonObjs.get(u, t)
                                }) : new Promise(function(t) {
                                    a.objs.get(u, t)
                                }), this.current.dependencies.push(h)
                            }
                    return Promise.all(this.current.dependencies)
                },
                transform: function(t, e, n, i, a, s) {
                    var o = [t, e, n, i, a, s];
                    this.transformMatrix = r.Util.transform(this.transformMatrix, o), this.tgrp = null
                },
                getSVG: function(t, e) {
                    this.viewport = e;
                    var n = this._initialize(e);
                    return this.loadDependencies(t).then(function() {
                        this.transformMatrix = r.IDENTITY_MATRIX;
                        var e = this.convertOpList(t);
                        return this.executeOpTree(e), n
                    }.bind(this))
                },
                convertOpList: function(e) {
                    var n = e.argsArray,
                        i = e.fnArray,
                        a = i.length,
                        s = [],
                        o = [];
                    for (var c in r.OPS) s[r.OPS[c]] = c;
                    for (var l = 0; l < a; l++) {
                        var h = i[l];
                        o.push({
                            fnId: h,
                            fn: s[h],
                            args: n[l]
                        })
                    }
                    return t(o)
                },
                executeOpTree: function(t) {
                    for (var e = t.length, n = 0; n < e; n++) {
                        var i = t[n].fn,
                            a = t[n].fnId,
                            s = t[n].args;
                        switch (0 | a) {
                            case r.OPS.beginText:
                                this.beginText();
                                break;
                            case r.OPS.setLeading:
                                this.setLeading(s);
                                break;
                            case r.OPS.setLeadingMoveText:
                                this.setLeadingMoveText(s[0], s[1]);
                                break;
                            case r.OPS.setFont:
                                this.setFont(s);
                                break;
                            case r.OPS.showText:
                            case r.OPS.showSpacedText:
                                this.showText(s[0]);
                                break;
                            case r.OPS.endText:
                                this.endText();
                                break;
                            case r.OPS.moveText:
                                this.moveText(s[0], s[1]);
                                break;
                            case r.OPS.setCharSpacing:
                                this.setCharSpacing(s[0]);
                                break;
                            case r.OPS.setWordSpacing:
                                this.setWordSpacing(s[0]);
                                break;
                            case r.OPS.setHScale:
                                this.setHScale(s[0]);
                                break;
                            case r.OPS.setTextMatrix:
                                this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                                break;
                            case r.OPS.setLineWidth:
                                this.setLineWidth(s[0]);
                                break;
                            case r.OPS.setLineJoin:
                                this.setLineJoin(s[0]);
                                break;
                            case r.OPS.setLineCap:
                                this.setLineCap(s[0]);
                                break;
                            case r.OPS.setMiterLimit:
                                this.setMiterLimit(s[0]);
                                break;
                            case r.OPS.setFillRGBColor:
                                this.setFillRGBColor(s[0], s[1], s[2]);
                                break;
                            case r.OPS.setStrokeRGBColor:
                                this.setStrokeRGBColor(s[0], s[1], s[2]);
                                break;
                            case r.OPS.setDash:
                                this.setDash(s[0], s[1]);
                                break;
                            case r.OPS.setGState:
                                this.setGState(s[0]);
                                break;
                            case r.OPS.fill:
                                this.fill();
                                break;
                            case r.OPS.eoFill:
                                this.eoFill();
                                break;
                            case r.OPS.stroke:
                                this.stroke();
                                break;
                            case r.OPS.fillStroke:
                                this.fillStroke();
                                break;
                            case r.OPS.eoFillStroke:
                                this.eoFillStroke();
                                break;
                            case r.OPS.clip:
                                this.clip("nonzero");
                                break;
                            case r.OPS.eoClip:
                                this.clip("evenodd");
                                break;
                            case r.OPS.paintSolidColorImageMask:
                                this.paintSolidColorImageMask();
                                break;
                            case r.OPS.paintJpegXObject:
                                this.paintJpegXObject(s[0], s[1], s[2]);
                                break;
                            case r.OPS.paintImageXObject:
                                this.paintImageXObject(s[0]);
                                break;
                            case r.OPS.paintInlineImageXObject:
                                this.paintInlineImageXObject(s[0]);
                                break;
                            case r.OPS.paintImageMaskXObject:
                                this.paintImageMaskXObject(s[0]);
                                break;
                            case r.OPS.paintFormXObjectBegin:
                                this.paintFormXObjectBegin(s[0], s[1]);
                                break;
                            case r.OPS.paintFormXObjectEnd:
                                this.paintFormXObjectEnd();
                                break;
                            case r.OPS.closePath:
                                this.closePath();
                                break;
                            case r.OPS.closeStroke:
                                this.closeStroke();
                                break;
                            case r.OPS.closeFillStroke:
                                this.closeFillStroke();
                                break;
                            case r.OPS.nextLine:
                                this.nextLine();
                                break;
                            case r.OPS.transform:
                                this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                                break;
                            case r.OPS.constructPath:
                                this.constructPath(s[0], s[1]);
                                break;
                            case r.OPS.endPath:
                                this.endPath();
                                break;
                            case 92:
                                this.group(t[n].items);
                                break;
                            default:
                                (0, r.warn)("Unimplemented operator " + i)
                        }
                    }
                },
                setWordSpacing: function(t) {
                    this.current.wordSpacing = t
                },
                setCharSpacing: function(t) {
                    this.current.charSpacing = t
                },
                nextLine: function() {
                    this.moveText(0, this.current.leading)
                },
                setTextMatrix: function(t, n, r, i, a, s) {
                    var o = this.current;
                    this.current.textMatrix = this.current.lineMatrix = [t, n, r, i, a, s], this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, o.xcoords = [], o.tspan = document.createElementNS(c, "svg:tspan"), o.tspan.setAttributeNS(null, "font-family", o.fontFamily), o.tspan.setAttributeNS(null, "font-size", e(o.fontSize) + "px"), o.tspan.setAttributeNS(null, "y", e(-o.y)), o.txtElement = document.createElementNS(c, "svg:text"), o.txtElement.appendChild(o.tspan)
                },
                beginText: function() {
                    this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.current.textMatrix = r.IDENTITY_MATRIX, this.current.lineMatrix = r.IDENTITY_MATRIX, this.current.tspan = document.createElementNS(c, "svg:tspan"), this.current.txtElement = document.createElementNS(c, "svg:text"), this.current.txtgrp = document.createElementNS(c, "svg:g"), this.current.xcoords = []
                },
                moveText: function(t, n) {
                    var r = this.current;
                    this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += n, r.xcoords = [], r.tspan = document.createElementNS(c, "svg:tspan"), r.tspan.setAttributeNS(null, "font-family", r.fontFamily), r.tspan.setAttributeNS(null, "font-size", e(r.fontSize) + "px"), r.tspan.setAttributeNS(null, "y", e(-r.y))
                },
                showText: function(t) {
                    var i = this.current,
                        s = i.font,
                        o = i.fontSize;
                    if (0 !== o) {
                        var c, l = i.charSpacing,
                            h = i.wordSpacing,
                            u = i.fontDirection,
                            d = i.textHScale * u,
                            f = t.length,
                            p = s.vertical,
                            g = o * i.fontMatrix[0],
                            m = 0;
                        for (c = 0; c < f; ++c) {
                            var A = t[c];
                            if (null !== A)
                                if ((0, r.isNum)(A)) m += -A * o * .001;
                                else {
                                    i.xcoords.push(i.x + m * d);
                                    var v = A.width,
                                        b = A.fontChar,
                                        y = v * g + l * u;
                                    m += y, i.tspan.textContent += b
                                }
                            else m += u * h
                        }
                        p ? i.y -= m * d : i.x += m * d, i.tspan.setAttributeNS(null, "x", i.xcoords.map(e).join(" ")), i.tspan.setAttributeNS(null, "y", e(-i.y)), i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", e(i.fontSize) + "px"), i.fontStyle !== a.fontStyle && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== a.fontWeight && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight), i.fillColor !== a.fillColor && i.tspan.setAttributeNS(null, "fill", i.fillColor), i.txtElement.setAttributeNS(null, "transform", n(i.textMatrix) + " scale(1, -1)"), i.txtElement.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), i.txtElement.appendChild(i.tspan), i.txtgrp.appendChild(i.txtElement), this._ensureTransformGroup().appendChild(i.txtElement)
                    }
                },
                setLeadingMoveText: function(t, e) {
                    this.setLeading(-e), this.moveText(t, e)
                },
                addFontStyle: function(t) {
                    this.cssStyle || (this.cssStyle = document.createElementNS(c, "svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
                    var e = (0, r.createObjectURL)(t.data, t.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += '@font-face { font-family: "' + t.loadedName + '"; src: url(' + e + "); }\n"
                },
                setFont: function(t) {
                    var n = this.current,
                        i = this.commonObjs.get(t[0]),
                        a = t[1];
                    this.current.font = i, this.embedFonts && i.data && !this.embeddedFonts[i.loadedName] && (this.addFontStyle(i), this.embeddedFonts[i.loadedName] = i), n.fontMatrix = i.fontMatrix ? i.fontMatrix : r.FONT_IDENTITY_MATRIX;
                    var s = i.black ? i.bold ? "bolder" : "bold" : i.bold ? "bold" : "normal",
                        o = i.italic ? "italic" : "normal";
                    a < 0 ? (a = -a, n.fontDirection = -1) : n.fontDirection = 1, n.fontSize = a, n.fontFamily = i.loadedName, n.fontWeight = s, n.fontStyle = o, n.tspan = document.createElementNS(c, "svg:tspan"), n.tspan.setAttributeNS(null, "y", e(-n.y)), n.xcoords = []
                },
                endText: function() {},
                setLineWidth: function(t) {
                    this.current.lineWidth = t
                },
                setLineCap: function(t) {
                    this.current.lineCap = h[t]
                },
                setLineJoin: function(t) {
                    this.current.lineJoin = u[t]
                },
                setMiterLimit: function(t) {
                    this.current.miterLimit = t
                },
                setStrokeRGBColor: function(t, e, n) {
                    var i = r.Util.makeCssRgb(t, e, n);
                    this.current.strokeColor = i
                },
                setFillRGBColor: function(t, e, n) {
                    var i = r.Util.makeCssRgb(t, e, n);
                    this.current.fillColor = i, this.current.tspan = document.createElementNS(c, "svg:tspan"), this.current.xcoords = []
                },
                setDash: function(t, e) {
                    this.current.dashArray = t, this.current.dashPhase = e
                },
                constructPath: function(t, n) {
                    var i = this.current,
                        a = i.x,
                        s = i.y;
                    i.path = document.createElementNS(c, "svg:path");
                    for (var o = [], l = t.length, h = 0, u = 0; h < l; h++) switch (0 | t[h]) {
                        case r.OPS.rectangle:
                            a = n[u++], s = n[u++];
                            var d = n[u++],
                                f = n[u++],
                                p = a + d,
                                g = s + f;
                            o.push("M", e(a), e(s), "L", e(p), e(s), "L", e(p), e(g), "L", e(a), e(g), "Z");
                            break;
                        case r.OPS.moveTo:
                            a = n[u++], s = n[u++], o.push("M", e(a), e(s));
                            break;
                        case r.OPS.lineTo:
                            a = n[u++], s = n[u++], o.push("L", e(a), e(s));
                            break;
                        case r.OPS.curveTo:
                            a = n[u + 4], s = n[u + 5], o.push("C", e(n[u]), e(n[u + 1]), e(n[u + 2]), e(n[u + 3]), e(a), e(s)), u += 6;
                            break;
                        case r.OPS.curveTo2:
                            a = n[u + 2], s = n[u + 3], o.push("C", e(a), e(s), e(n[u]), e(n[u + 1]), e(n[u + 2]), e(n[u + 3])), u += 4;
                            break;
                        case r.OPS.curveTo3:
                            a = n[u + 2], s = n[u + 3], o.push("C", e(n[u]), e(n[u + 1]), e(a), e(s), e(a), e(s)), u += 4;
                            break;
                        case r.OPS.closePath:
                            o.push("Z")
                    }
                    i.path.setAttributeNS(null, "d", o.join(" ")), i.path.setAttributeNS(null, "stroke-miterlimit", e(i.miterLimit)), i.path.setAttributeNS(null, "stroke-linecap", i.lineCap), i.path.setAttributeNS(null, "stroke-linejoin", i.lineJoin), i.path.setAttributeNS(null, "stroke-width", e(i.lineWidth) + "px"), i.path.setAttributeNS(null, "stroke-dasharray", i.dashArray.map(e).join(" ")), i.path.setAttributeNS(null, "stroke-dashoffset", e(i.dashPhase) + "px"), i.path.setAttributeNS(null, "fill", "none"), this._ensureTransformGroup().appendChild(i.path), i.element = i.path, i.setCurrentPoint(a, s)
                },
                endPath: function() {},
                clip: function(t) {
                    var e = this.current,
                        r = "clippath" + d;
                    d++;
                    var i = document.createElementNS(c, "svg:clipPath");
                    i.setAttributeNS(null, "id", r), i.setAttributeNS(null, "transform", n(this.transformMatrix));
                    var a = e.element.cloneNode();
                    "evenodd" === t ? a.setAttributeNS(null, "clip-rule", "evenodd") : a.setAttributeNS(null, "clip-rule", "nonzero"), i.appendChild(a), this.defs.appendChild(i), e.activeClipUrl && (e.clipGroup = null, this.extraStack.forEach(function(t) {
                        t.clipGroup = null
                    })), e.activeClipUrl = "url(#" + r + ")", this.tgrp = null
                },
                closePath: function() {
                    var t = this.current,
                        e = t.path.getAttributeNS(null, "d");
                    e += "Z", t.path.setAttributeNS(null, "d", e)
                },
                setLeading: function(t) {
                    this.current.leading = -t
                },
                setTextRise: function(t) {
                    this.current.textRise = t
                },
                setHScale: function(t) {
                    this.current.textHScale = t / 100
                },
                setGState: function(t) {
                    for (var e = 0, n = t.length; e < n; e++) {
                        var i = t[e],
                            a = i[0],
                            s = i[1];
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
                                (0, r.warn)("Unimplemented graphic state " + a)
                        }
                    }
                },
                fill: function() {
                    var t = this.current;
                    t.element.setAttributeNS(null, "fill", t.fillColor)
                },
                stroke: function() {
                    var t = this.current;
                    t.element.setAttributeNS(null, "stroke", t.strokeColor), t.element.setAttributeNS(null, "fill", "none")
                },
                eoFill: function() {
                    var t = this.current;
                    t.element.setAttributeNS(null, "fill", t.fillColor), t.element.setAttributeNS(null, "fill-rule", "evenodd")
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
                    var t = this.current,
                        e = document.createElementNS(c, "svg:rect");
                    e.setAttributeNS(null, "x", "0"), e.setAttributeNS(null, "y", "0"), e.setAttributeNS(null, "width", "1px"), e.setAttributeNS(null, "height", "1px"), e.setAttributeNS(null, "fill", t.fillColor), this._ensureTransformGroup().appendChild(e)
                },
                paintJpegXObject: function(t, n, r) {
                    var i = this.objs.get(t),
                        a = document.createElementNS(c, "svg:image");
                    a.setAttributeNS(l, "xlink:href", i.src), a.setAttributeNS(null, "width", i.width + "px"), a.setAttributeNS(null, "height", i.height + "px"), a.setAttributeNS(null, "x", "0"), a.setAttributeNS(null, "y", e(-r)), a.setAttributeNS(null, "transform", "scale(" + e(1 / n) + " " + e(-1 / r) + ")"), this._ensureTransformGroup().appendChild(a)
                },
                paintImageXObject: function(t) {
                    var e = this.objs.get(t);
                    if (!e) return void(0, r.warn)("Dependent image isn't ready yet");
                    this.paintInlineImageXObject(e)
                },
                paintInlineImageXObject: function(t, n) {
                    var r = t.width,
                        i = t.height,
                        a = s(t, this.forceDataSchema),
                        o = document.createElementNS(c, "svg:rect");
                    o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", "0"), o.setAttributeNS(null, "width", e(r)), o.setAttributeNS(null, "height", e(i)), this.current.element = o, this.clip("nonzero");
                    var h = document.createElementNS(c, "svg:image");
                    h.setAttributeNS(l, "xlink:href", a), h.setAttributeNS(null, "x", "0"), h.setAttributeNS(null, "y", e(-i)), h.setAttributeNS(null, "width", e(r) + "px"), h.setAttributeNS(null, "height", e(i) + "px"), h.setAttributeNS(null, "transform", "scale(" + e(1 / r) + " " + e(-1 / i) + ")"), n ? n.appendChild(h) : this._ensureTransformGroup().appendChild(h)
                },
                paintImageMaskXObject: function(t) {
                    var n = this.current,
                        r = t.width,
                        i = t.height,
                        a = n.fillColor;
                    n.maskId = "mask" + f++;
                    var s = document.createElementNS(c, "svg:mask");
                    s.setAttributeNS(null, "id", n.maskId);
                    var o = document.createElementNS(c, "svg:rect");
                    o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", "0"), o.setAttributeNS(null, "width", e(r)), o.setAttributeNS(null, "height", e(i)), o.setAttributeNS(null, "fill", a), o.setAttributeNS(null, "mask", "url(#" + n.maskId + ")"), this.defs.appendChild(s), this._ensureTransformGroup().appendChild(o), this.paintInlineImageXObject(t, s)
                },
                paintFormXObjectBegin: function(t, n) {
                    if ((0, r.isArray)(t) && 6 === t.length && this.transform(t[0], t[1], t[2], t[3], t[4], t[5]), (0, r.isArray)(n) && 4 === n.length) {
                        var i = n[2] - n[0],
                            a = n[3] - n[1],
                            s = document.createElementNS(c, "svg:rect");
                        s.setAttributeNS(null, "x", n[0]), s.setAttributeNS(null, "y", n[1]), s.setAttributeNS(null, "width", e(i)), s.setAttributeNS(null, "height", e(a)), this.current.element = s, this.clip("nonzero"), this.endPath()
                    }
                },
                paintFormXObjectEnd: function() {},
                _initialize: function(t) {
                    var e = document.createElementNS(c, "svg:svg");
                    e.setAttributeNS(null, "version", "1.1"), e.setAttributeNS(null, "width", t.width + "px"), e.setAttributeNS(null, "height", t.height + "px"), e.setAttributeNS(null, "preserveAspectRatio", "none"), e.setAttributeNS(null, "viewBox", "0 0 " + t.width + " " + t.height);
                    var r = document.createElementNS(c, "svg:defs");
                    e.appendChild(r), this.defs = r;
                    var i = document.createElementNS(c, "svg:g");
                    return i.setAttributeNS(null, "transform", n(t.transform)), e.appendChild(i), this.svg = i, e
                },
                _ensureClipGroup: function() {
                    if (!this.current.clipGroup) {
                        var t = document.createElementNS(c, "svg:g");
                        t.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.appendChild(t), this.current.clipGroup = t
                    }
                    return this.current.clipGroup
                },
                _ensureTransformGroup: function() {
                    return this.tgrp || (this.tgrp = document.createElementNS(c, "svg:g"), this.tgrp.setAttributeNS(null, "transform", n(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)), this.tgrp
                }
            }, i
        }(), e.SVGGraphics = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.renderTextLayer = void 0;
        var r = n(0),
            i = n(1),
            a = function() {
                function t(t) {
                    return !u.test(t)
                }

                function e(e, n, a) {
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
                    if (e._textDivs.push(s), t(n.str)) return o.isWhitespace = !0, void e._textDivProperties.set(s, o);
                    var c = r.Util.transform(e._viewport.transform, n.transform),
                        l = Math.atan2(c[1], c[0]),
                        h = a[n.fontName];
                    h.vertical && (l += Math.PI / 2);
                    var u = Math.sqrt(c[2] * c[2] + c[3] * c[3]),
                        f = u;
                    h.ascent ? f = h.ascent * f : h.descent && (f = (1 + h.descent) * f);
                    var p, g;
                    if (0 === l ? (p = c[4], g = c[5] - f) : (p = c[4] + f * Math.sin(l), g = c[5] - f * Math.cos(l)), d[1] = p, d[3] = g, d[5] = u, d[7] = h.fontFamily, o.style = d.join(""), s.setAttribute("style", o.style), s.textContent = n.str, (0, i.getDefaultSetting)("pdfBug") && (s.dataset.fontName = n.fontName), 0 !== l && (o.angle = l * (180 / Math.PI)), n.str.length > 1 && (h.vertical ? o.canvasWidth = n.height * e._viewport.scale : o.canvasWidth = n.width * e._viewport.scale), e._textDivProperties.set(s, o), e._enhanceTextSelection) {
                        var m = 1,
                            A = 0;
                        0 !== l && (m = Math.cos(l), A = Math.sin(l));
                        var v, b, y = (h.vertical ? n.height : n.width) * e._viewport.scale,
                            S = u;
                        0 !== l ? (v = [m, A, -A, m, p, g], b = r.Util.getAxialAlignedBoundingBox([0, 0, y, S], v)) : b = [p, g, p + y, g + S], e._bounds.push({
                            left: b[0],
                            top: b[1],
                            right: b[2],
                            bottom: b[3],
                            div: s,
                            size: [y, S],
                            m: v
                        })
                    }
                }

                function n(t) {
                    if (!t._canceled) {
                        var e = t._container,
                            n = t._textDivs,
                            r = t._capability,
                            a = n.length;
                        if (a > h) return t._renderingDone = !0, void r.resolve();
                        var s = document.createElement("canvas");
                        s.mozOpaque = !0;
                        for (var o, c, l = s.getContext("2d", {
                                alpha: !1
                            }), u = 0; u < a; u++) {
                            var d = n[u],
                                f = t._textDivProperties.get(d);
                            if (!f.isWhitespace) {
                                var p = d.style.fontSize,
                                    g = d.style.fontFamily;
                                p === o && g === c || (l.font = p + " " + g, o = p, c = g);
                                var m = l.measureText(d.textContent).width;
                                e.appendChild(d);
                                var A = "";
                                0 !== f.canvasWidth && m > 0 && (f.scale = f.canvasWidth / m, A = "scaleX(" + f.scale + ")"), 0 !== f.angle && (A = "rotate(" + f.angle + "deg) " + A), "" !== A && (f.originalTransform = A, i.CustomStyle.setProp("transform", d, A)), t._textDivProperties.set(d, f)
                            }
                        }
                        t._renderingDone = !0, r.resolve()
                    }
                }

                function a(t) {
                    for (var e = t._bounds, n = t._viewport, i = s(n.width, n.height, e), a = 0; a < i.length; a++) {
                        var o = e[a].div,
                            c = t._textDivProperties.get(o);
                        if (0 !== c.angle) {
                            var l = i[a],
                                h = e[a],
                                u = h.m,
                                d = u[0],
                                f = u[1],
                                p = [
                                    [0, 0],
                                    [0, h.size[1]],
                                    [h.size[0], 0], h.size
                                ],
                                g = new Float64Array(64);
                            p.forEach(function(t, e) {
                                var n = r.Util.applyTransform(t, u);
                                g[e + 0] = d && (l.left - n[0]) / d, g[e + 4] = f && (l.top - n[1]) / f, g[e + 8] = d && (l.right - n[0]) / d, g[e + 12] = f && (l.bottom - n[1]) / f, g[e + 16] = f && (l.left - n[0]) / -f, g[e + 20] = d && (l.top - n[1]) / d, g[e + 24] = f && (l.right - n[0]) / -f, g[e + 28] = d && (l.bottom - n[1]) / d, g[e + 32] = d && (l.left - n[0]) / -d, g[e + 36] = f && (l.top - n[1]) / -f, g[e + 40] = d && (l.right - n[0]) / -d, g[e + 44] = f && (l.bottom - n[1]) / -f, g[e + 48] = f && (l.left - n[0]) / f, g[e + 52] = d && (l.top - n[1]) / -d, g[e + 56] = f && (l.right - n[0]) / f, g[e + 60] = d && (l.bottom - n[1]) / -d
                            });
                            var m = function(t, e, n) {
                                    for (var r = 0, i = 0; i < n; i++) {
                                        var a = t[e++];
                                        a > 0 && (r = r ? Math.min(a, r) : a)
                                    }
                                    return r
                                },
                                A = 1 + Math.min(Math.abs(d), Math.abs(f));
                            c.paddingLeft = m(g, 32, 16) / A, c.paddingTop = m(g, 48, 16) / A, c.paddingRight = m(g, 0, 16) / A, c.paddingBottom = m(g, 16, 16) / A, t._textDivProperties.set(o, c)
                        } else c.paddingLeft = e[a].left - i[a].left, c.paddingTop = e[a].top - i[a].top, c.paddingRight = i[a].right - e[a].right, c.paddingBottom = i[a].bottom - e[a].bottom, t._textDivProperties.set(o, c)
                    }
                }

                function s(t, e, n) {
                    var r = n.map(function(t, e) {
                        return {
                            x1: t.left,
                            y1: t.top,
                            x2: t.right,
                            y2: t.bottom,
                            index: e,
                            x1New: void 0,
                            x2New: void 0
                        }
                    });
                    o(t, r);
                    var i = new Array(n.length);
                    return r.forEach(function(t) {
                        var e = t.index;
                        i[e] = {
                            left: t.x1New,
                            top: 0,
                            right: t.x2New,
                            bottom: 0
                        }
                    }), n.map(function(e, n) {
                        var a = i[n],
                            s = r[n];
                        s.x1 = e.top, s.y1 = t - a.right, s.x2 = e.bottom, s.y2 = t - a.left, s.index = n, s.x1New = void 0, s.x2New = void 0
                    }), o(e, r), r.forEach(function(t) {
                        var e = t.index;
                        i[e].top = t.x1New, i[e].bottom = t.x2New
                    }), i
                }

                function o(t, e) {
                    e.sort(function(t, e) {
                        return t.x1 - e.x1 || t.index - e.index
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
                        r = [{
                            start: -1 / 0,
                            end: 1 / 0,
                            boundary: n
                        }];
                    e.forEach(function(t) {
                        for (var e = 0; e < r.length && r[e].end <= t.y1;) e++;
                        for (var n = r.length - 1; n >= 0 && r[n].start >= t.y2;) n--;
                        var i, a, s, o, c = -1 / 0;
                        for (s = e; s <= n; s++) {
                            i = r[s], a = i.boundary;
                            var l;
                            l = a.x2 > t.x1 ? a.index > t.index ? a.x1New : t.x1 : void 0 === a.x2New ? (a.x2 + t.x1) / 2 : a.x2New, l > c && (c = l)
                        }
                        for (t.x1New = c, s = e; s <= n; s++) i = r[s], a = i.boundary, void 0 === a.x2New ? a.x2 > t.x1 ? a.index > t.index && (a.x2New = a.x2) : a.x2New = c : a.x2New > c && (a.x2New = Math.max(c, a.x2));
                        var h = [],
                            u = null;
                        for (s = e; s <= n; s++) {
                            i = r[s], a = i.boundary;
                            var d = a.x2 > t.x2 ? a : t;
                            u === d ? h[h.length - 1].end = i.end : (h.push({
                                start: i.start,
                                end: i.end,
                                boundary: d
                            }), u = d)
                        }
                        for (r[e].start < t.y1 && (h[0].start = t.y1, h.unshift({
                                start: r[e].start,
                                end: t.y1,
                                boundary: r[e].boundary
                            })), t.y2 < r[n].end && (h[h.length - 1].end = t.y2, h.push({
                                start: t.y2,
                                end: r[n].end,
                                boundary: r[n].boundary
                            })), s = e; s <= n; s++)
                            if (i = r[s], a = i.boundary, void 0 === a.x2New) {
                                var f = !1;
                                for (o = e - 1; !f && o >= 0 && r[o].start >= a.y1; o--) f = r[o].boundary === a;
                                for (o = n + 1; !f && o < r.length && r[o].end <= a.y2; o++) f = r[o].boundary === a;
                                for (o = 0; !f && o < h.length; o++) f = h[o].boundary === a;
                                f || (a.x2New = c)
                            } Array.prototype.splice.apply(r, [e, n - e + 1].concat(h))
                    }), r.forEach(function(e) {
                        var n = e.boundary;
                        void 0 === n.x2New && (n.x2New = Math.max(t, n.x2))
                    })
                }

                function c(t, e, n, i, a) {
                    this._textContent = t, this._container = e, this._viewport = n, this._textDivs = i || [], this._textDivProperties = new WeakMap, this._renderingDone = !1, this._canceled = !1, this._capability = (0, r.createPromiseCapability)(), this._renderTimer = null, this._bounds = [], this._enhanceTextSelection = !!a
                }

                function l(t) {
                    var e = new c(t.textContent, t.container, t.viewport, t.textDivs, t.enhanceTextSelection);
                    return e._render(t.timeout), e
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
                    _render: function(t) {
                        for (var r = this._textContent.items, i = this._textContent.styles, a = 0, s = r.length; a < s; a++) e(this, r[a], i);
                        if (t) {
                            var o = this;
                            this._renderTimer = setTimeout(function() {
                                n(o), o._renderTimer = null
                            }, t)
                        } else n(this)
                    },
                    expandTextDivs: function(t) {
                        if (this._enhanceTextSelection && this._renderingDone) {
                            null !== this._bounds && (a(this), this._bounds = null);
                            for (var e = 0, n = this._textDivs.length; e < n; e++) {
                                var r = this._textDivs[e],
                                    s = this._textDivProperties.get(r);
                                if (!s.isWhitespace)
                                    if (t) {
                                        var o = "",
                                            c = "";
                                        1 !== s.scale && (o = "scaleX(" + s.scale + ")"), 0 !== s.angle && (o = "rotate(" + s.angle + "deg) " + o), 0 !== s.paddingLeft && (c += " padding-left: " + s.paddingLeft / s.scale + "px;", o += " translateX(" + -s.paddingLeft / s.scale + "px)"), 0 !== s.paddingTop && (c += " padding-top: " + s.paddingTop + "px;", o += " translateY(" + -s.paddingTop + "px)"), 0 !== s.paddingRight && (c += " padding-right: " + s.paddingRight / s.scale + "px;"), 0 !== s.paddingBottom && (c += " padding-bottom: " + s.paddingBottom + "px;"), "" !== c && r.setAttribute("style", s.style + c), "" !== o && i.CustomStyle.setProp("transform", r, o)
                                    } else r.style.padding = 0, i.CustomStyle.setProp("transform", r, s.originalTransform || "")
                            }
                        }
                    }
                }, l
            }();
        e.renderTextLayer = a
    }, function(t, e, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        r = function() {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (r = window)
        }
        t.exports = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t.replace(/>\\376\\377([^<]+)/g, function(t, e) {
                for (var n = e.replace(/\\([0-3])([0-7])([0-7])/g, function(t, e, n, r) {
                        return String.fromCharCode(64 * e + 8 * n + 1 * r)
                    }), r = "", i = 0; i < n.length; i += 2) {
                    var a = 256 * n.charCodeAt(i) + n.charCodeAt(i + 1);
                    r += a >= 32 && a < 127 && 60 !== a && 62 !== a && 38 !== a ? String.fromCharCode(a) : "&#x" + (65536 + a).toString(16).substring(1) + ";"
                }
                return ">" + r
            })
        }

        function i(t) {
            if ("string" == typeof t) {
                t = r(t);
                t = (new DOMParser).parseFromString(t, "application/xml")
            } else t instanceof Document || (0, a.error)("Metadata: Invalid metadata object");
            this.metaDocument = t, this.metadata = Object.create(null), this.parse()
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.Metadata = void 0;
        var a = n(0);
        i.prototype = {
            parse: function() {
                var t = this.metaDocument,
                    e = t.documentElement;
                if ("rdf:rdf" !== e.nodeName.toLowerCase())
                    for (e = e.firstChild; e && "rdf:rdf" !== e.nodeName.toLowerCase();) e = e.nextSibling;
                var n = e ? e.nodeName.toLowerCase() : null;
                if (e && "rdf:rdf" === n && e.hasChildNodes()) {
                    var r, i, a, s, o, c, l, h = e.childNodes;
                    for (s = 0, c = h.length; s < c; s++)
                        if (r = h[s], "rdf:description" === r.nodeName.toLowerCase())
                            for (o = 0, l = r.childNodes.length; o < l; o++) "#text" !== r.childNodes[o].nodeName.toLowerCase() && (i = r.childNodes[o], a = i.nodeName.toLowerCase(), this.metadata[a] = i.textContent.trim())
                }
            },
            get: function(t) {
                return this.metadata[t] || null
            },
            has: function(t) {
                return void 0 !== this.metadata[t]
            }
        }, e.Metadata = i
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.WebGLUtils = void 0;
        var r = n(1),
            i = n(0),
            a = function() {
                function t(t, e, n) {
                    var r = t.createShader(n);
                    if (t.shaderSource(r, e), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
                        var i = t.getShaderInfoLog(r);
                        throw new Error("Error during shader compilation: " + i)
                    }
                    return r
                }

                function e(e, n) {
                    return t(e, n, e.VERTEX_SHADER)
                }

                function n(e, n) {
                    return t(e, n, e.FRAGMENT_SHADER)
                }

                function a(t, e) {
                    for (var n = t.createProgram(), r = 0, i = e.length; r < i; ++r) t.attachShader(n, e[r]);
                    if (t.linkProgram(n), !t.getProgramParameter(n, t.LINK_STATUS)) {
                        var a = t.getProgramInfoLog(n);
                        throw new Error("Error during program linking: " + a)
                    }
                    return n
                }

                function s(t, e, n) {
                    t.activeTexture(n);
                    var r = t.createTexture();
                    return t.bindTexture(t.TEXTURE_2D, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), r
                }

                function o() {
                    f || (p = document.createElement("canvas"), f = p.getContext("webgl", {
                        premultipliedalpha: !1
                    }))
                }

                function c() {
                    var t, r;
                    o(), t = p, p = null, r = f, f = null;
                    var i = e(r, g),
                        s = n(r, m),
                        c = a(r, [i, s]);
                    r.useProgram(c);
                    var l = {};
                    l.gl = r, l.canvas = t, l.resolutionLocation = r.getUniformLocation(c, "u_resolution"), l.positionLocation = r.getAttribLocation(c, "a_position"), l.backdropLocation = r.getUniformLocation(c, "u_backdrop"), l.subtypeLocation = r.getUniformLocation(c, "u_subtype");
                    var h = r.getAttribLocation(c, "a_texCoord"),
                        u = r.getUniformLocation(c, "u_image"),
                        d = r.getUniformLocation(c, "u_mask"),
                        v = r.createBuffer();
                    r.bindBuffer(r.ARRAY_BUFFER, v), r.bufferData(r.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), r.STATIC_DRAW), r.enableVertexAttribArray(h), r.vertexAttribPointer(h, 2, r.FLOAT, !1, 0, 0), r.uniform1i(u, 0), r.uniform1i(d, 1), A = l
                }

                function l(t, e, n) {
                    var r = t.width,
                        i = t.height;
                    A || c();
                    var a = A,
                        o = a.canvas,
                        l = a.gl;
                    o.width = r, o.height = i, l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight), l.uniform2f(a.resolutionLocation, r, i), n.backdrop ? l.uniform4f(a.resolutionLocation, n.backdrop[0], n.backdrop[1], n.backdrop[2], 1) : l.uniform4f(a.resolutionLocation, 0, 0, 0, 0), l.uniform1i(a.subtypeLocation, "Luminosity" === n.subtype ? 1 : 0);
                    var h = s(l, t, l.TEXTURE0),
                        u = s(l, e, l.TEXTURE1),
                        d = l.createBuffer();
                    return l.bindBuffer(l.ARRAY_BUFFER, d), l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, r, 0, 0, i, 0, i, r, 0, r, i]), l.STATIC_DRAW), l.enableVertexAttribArray(a.positionLocation), l.vertexAttribPointer(a.positionLocation, 2, l.FLOAT, !1, 0, 0), l.clearColor(0, 0, 0, 0), l.enable(l.BLEND), l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA), l.clear(l.COLOR_BUFFER_BIT), l.drawArrays(l.TRIANGLES, 0, 6), l.flush(), l.deleteTexture(h), l.deleteTexture(u), l.deleteBuffer(d), o
                }

                function h() {
                    var t, r;
                    o(), t = p, p = null, r = f, f = null;
                    var i = e(r, v),
                        s = n(r, b),
                        c = a(r, [i, s]);
                    r.useProgram(c);
                    var l = {};
                    l.gl = r, l.canvas = t, l.resolutionLocation = r.getUniformLocation(c, "u_resolution"), l.scaleLocation = r.getUniformLocation(c, "u_scale"), l.offsetLocation = r.getUniformLocation(c, "u_offset"), l.positionLocation = r.getAttribLocation(c, "a_position"), l.colorLocation = r.getAttribLocation(c, "a_color"), y = l
                }

                function u(t, e, n, r, i) {
                    y || h();
                    var a = y,
                        s = a.canvas,
                        o = a.gl;
                    s.width = t, s.height = e, o.viewport(0, 0, o.drawingBufferWidth, o.drawingBufferHeight), o.uniform2f(a.resolutionLocation, t, e);
                    var c, l, u, d = 0;
                    for (c = 0, l = r.length; c < l; c++) switch (r[c].type) {
                        case "lattice":
                            u = r[c].coords.length / r[c].verticesPerRow | 0, d += (u - 1) * (r[c].verticesPerRow - 1) * 6;
                            break;
                        case "triangles":
                            d += r[c].coords.length
                    }
                    var f = new Float32Array(2 * d),
                        p = new Uint8Array(3 * d),
                        g = i.coords,
                        m = i.colors,
                        A = 0,
                        v = 0;
                    for (c = 0, l = r.length; c < l; c++) {
                        var b = r[c],
                            S = b.coords,
                            x = b.colors;
                        switch (b.type) {
                            case "lattice":
                                var w = b.verticesPerRow;
                                u = S.length / w | 0;
                                for (var _ = 1; _ < u; _++)
                                    for (var T = _ * w + 1, C = 1; C < w; C++, T++) f[A] = g[S[T - w - 1]], f[A + 1] = g[S[T - w - 1] + 1], f[A + 2] = g[S[T - w]], f[A + 3] = g[S[T - w] + 1], f[A + 4] = g[S[T - 1]], f[A + 5] = g[S[T - 1] + 1], p[v] = m[x[T - w - 1]], p[v + 1] = m[x[T - w - 1] + 1], p[v + 2] = m[x[T - w - 1] + 2], p[v + 3] = m[x[T - w]], p[v + 4] = m[x[T - w] + 1], p[v + 5] = m[x[T - w] + 2], p[v + 6] = m[x[T - 1]], p[v + 7] = m[x[T - 1] + 1], p[v + 8] = m[x[T - 1] + 2], f[A + 6] = f[A + 2], f[A + 7] = f[A + 3], f[A + 8] = f[A + 4], f[A + 9] = f[A + 5], f[A + 10] = g[S[T]], f[A + 11] = g[S[T] + 1], p[v + 9] = p[v + 3], p[v + 10] = p[v + 4], p[v + 11] = p[v + 5], p[v + 12] = p[v + 6], p[v + 13] = p[v + 7], p[v + 14] = p[v + 8], p[v + 15] = m[x[T]], p[v + 16] = m[x[T] + 1], p[v + 17] = m[x[T] + 2], A += 12, v += 18;
                                break;
                            case "triangles":
                                for (var k = 0, P = S.length; k < P; k++) f[A] = g[S[k]], f[A + 1] = g[S[k] + 1], p[v] = m[x[k]], p[v + 1] = m[x[k] + 1], p[v + 2] = m[x[k] + 2], A += 2, v += 3
                        }
                    }
                    n ? o.clearColor(n[0] / 255, n[1] / 255, n[2] / 255, 1) : o.clearColor(0, 0, 0, 0), o.clear(o.COLOR_BUFFER_BIT);
                    var L = o.createBuffer();
                    o.bindBuffer(o.ARRAY_BUFFER, L), o.bufferData(o.ARRAY_BUFFER, f, o.STATIC_DRAW), o.enableVertexAttribArray(a.positionLocation), o.vertexAttribPointer(a.positionLocation, 2, o.FLOAT, !1, 0, 0);
                    var E = o.createBuffer();
                    return o.bindBuffer(o.ARRAY_BUFFER, E), o.bufferData(o.ARRAY_BUFFER, p, o.STATIC_DRAW), o.enableVertexAttribArray(a.colorLocation), o.vertexAttribPointer(a.colorLocation, 3, o.UNSIGNED_BYTE, !1, 0, 0), o.uniform2f(a.scaleLocation, i.scaleX, i.scaleY), o.uniform2f(a.offsetLocation, i.offsetX, i.offsetY), o.drawArrays(o.TRIANGLES, 0, d), o.flush(), o.deleteBuffer(L), o.deleteBuffer(E), s
                }

                function d() {
                    A && A.canvas && (A.canvas.width = 0, A.canvas.height = 0), y && y.canvas && (y.canvas.width = 0, y.canvas.height = 0), A = null, y = null
                }
                var f, p, g = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
                    m = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
                    A = null,
                    v = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
                    b = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
                    y = null;
                return {
                    get isEnabled() {
                        if ((0, r.getDefaultSetting)("disableWebGL")) return !1;
                        var t = !1;
                        try {
                            o(), t = !!f
                        } catch (t) {}
                        return (0, i.shadow)(this, "isEnabled", t)
                    },
                    composeSMask: l,
                    drawFigures: u,
                    clear: d
                }
            }();
        e.WebGLUtils = a
    }, function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.PDFJS = e.isWorker = e.globalScope = void 0;
        var r = n(3),
            i = n(1),
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
            set: function(t) {
                (0, a.setVerbosityLevel)(t)
            },
            enumerable: !0,
            configurable: !0
        }), u.VERBOSITY_LEVELS = a.VERBOSITY_LEVELS, u.OPS = a.OPS, u.UNSUPPORTED_FEATURES = a.UNSUPPORTED_FEATURES, u.isValidUrl = i.isValidUrl, u.shadow = a.shadow, u.createBlob = a.createBlob, u.createObjectURL = function(t, e) {
            return (0, a.createObjectURL)(t, e, u.disableCreateObjectURL)
        }, Object.defineProperty(u, "isLittleEndian", {
            configurable: !0,
            get: function() {
                return (0, a.shadow)(u, "isLittleEndian", (0, a.isLittleEndian)())
            }
        }), u.removeNullCharacters = a.removeNullCharacters, u.PasswordResponses = a.PasswordResponses, u.PasswordException = a.PasswordException, u.UnknownErrorException = a.UnknownErrorException, u.InvalidPDFException = a.InvalidPDFException, u.MissingPDFException = a.MissingPDFException, u.UnexpectedResponseException = a.UnexpectedResponseException, u.Util = a.Util, u.PageViewport = a.PageViewport, u.createPromiseCapability = a.createPromiseCapability, u.maxImageSize = void 0 === u.maxImageSize ? -1 : u.maxImageSize, u.cMapUrl = void 0 === u.cMapUrl ? null : u.cMapUrl, u.cMapPacked = void 0 !== u.cMapPacked && u.cMapPacked, u.disableFontFace = void 0 !== u.disableFontFace && u.disableFontFace, u.imageResourcesPath = void 0 === u.imageResourcesPath ? "" : u.imageResourcesPath, u.disableWorker = void 0 !== u.disableWorker && u.disableWorker, u.workerSrc = void 0 === u.workerSrc ? null : u.workerSrc, u.workerPort = void 0 === u.workerPort ? null : u.workerPort, u.disableRange = void 0 !== u.disableRange && u.disableRange, u.disableStream = void 0 !== u.disableStream && u.disableStream, u.disableAutoFetch = void 0 !== u.disableAutoFetch && u.disableAutoFetch, u.pdfBug = void 0 !== u.pdfBug && u.pdfBug, u.postMessageTransfers = void 0 === u.postMessageTransfers || u.postMessageTransfers, u.disableCreateObjectURL = void 0 !== u.disableCreateObjectURL && u.disableCreateObjectURL, u.disableWebGL = void 0 === u.disableWebGL || u.disableWebGL, u.externalLinkTarget = void 0 === u.externalLinkTarget ? i.LinkTarget.NONE : u.externalLinkTarget, u.externalLinkRel = void 0 === u.externalLinkRel ? i.DEFAULT_LINK_REL : u.externalLinkRel, u.isEvalSupported = void 0 === u.isEvalSupported || u.isEvalSupported, u.pdfjsNext = void 0 !== u.pdfjsNext && u.pdfjsNext;
        var d = u.openExternalLinksInNewWindow;
        delete u.openExternalLinksInNewWindow, Object.defineProperty(u, "openExternalLinksInNewWindow", {
            get: function() {
                return u.externalLinkTarget === i.LinkTarget.BLANK
            },
            set: function(t) {
                if (t && (0, a.deprecated)('PDFJS.openExternalLinksInNewWindow, please use "PDFJS.externalLinkTarget = PDFJS.LinkTarget.BLANK" instead.'), u.externalLinkTarget !== i.LinkTarget.NONE) return void(0, a.warn)("PDFJS.externalLinkTarget is already initialized");
                u.externalLinkTarget = t ? i.LinkTarget.BLANK : i.LinkTarget.NONE
            },
            enumerable: !0,
            configurable: !0
        }), d && (u.openExternalLinksInNewWindow = d), u.getDocument = r.getDocument, u.PDFDataRangeTransport = r.PDFDataRangeTransport, u.PDFWorker = r.PDFWorker, u.hasCanvasTypedArrays = !0, u.CustomStyle = i.CustomStyle, u.LinkTarget = i.LinkTarget, u.addLinkAttributes = i.addLinkAttributes, u.getFilenameFromUrl = i.getFilenameFromUrl, u.isExternalLinkTargetSet = i.isExternalLinkTargetSet, u.AnnotationLayer = s.AnnotationLayer, u.renderTextLayer = c.renderTextLayer, u.Metadata = o.Metadata, u.SVGGraphics = l.SVGGraphics, u.UnsupportedManager = r._UnsupportedManager, e.globalScope = a.globalScope, e.isWorker = h, e.PDFJS = u
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            t.mozCurrentTransform || (t._originalSave = t.save, t._originalRestore = t.restore, t._originalRotate = t.rotate, t._originalScale = t.scale, t._originalTranslate = t.translate, t._originalTransform = t.transform, t._originalSetTransform = t.setTransform, t._transformMatrix = t._transformMatrix || [1, 0, 0, 1, 0, 0], t._transformStack = [], Object.defineProperty(t, "mozCurrentTransform", {
                get: function() {
                    return this._transformMatrix
                }
            }), Object.defineProperty(t, "mozCurrentTransformInverse", {
                get: function() {
                    var t = this._transformMatrix,
                        e = t[0],
                        n = t[1],
                        r = t[2],
                        i = t[3],
                        a = t[4],
                        s = t[5],
                        o = e * i - n * r,
                        c = n * r - e * i;
                    return [i / o, n / c, r / c, e / o, (i * a - r * s) / c, (n * a - e * s) / o]
                }
            }), t.save = function() {
                var t = this._transformMatrix;
                this._transformStack.push(t), this._transformMatrix = t.slice(0, 6), this._originalSave()
            }, t.restore = function() {
                var t = this._transformStack.pop();
                t && (this._transformMatrix = t, this._originalRestore())
            }, t.translate = function(t, e) {
                var n = this._transformMatrix;
                n[4] = n[0] * t + n[2] * e + n[4], n[5] = n[1] * t + n[3] * e + n[5], this._originalTranslate(t, e)
            }, t.scale = function(t, e) {
                var n = this._transformMatrix;
                n[0] = n[0] * t, n[1] = n[1] * t, n[2] = n[2] * e, n[3] = n[3] * e, this._originalScale(t, e)
            }, t.transform = function(e, n, r, i, a, s) {
                var o = this._transformMatrix;
                this._transformMatrix = [o[0] * e + o[2] * n, o[1] * e + o[3] * n, o[0] * r + o[2] * i, o[1] * r + o[3] * i, o[0] * a + o[2] * s + o[4], o[1] * a + o[3] * s + o[5]], t._originalTransform(e, n, r, i, a, s)
            }, t.setTransform = function(e, n, r, i, a, s) {
                this._transformMatrix = [e, n, r, i, a, s], t._originalSetTransform(e, n, r, i, a, s)
            }, t.rotate = function(t) {
                var e = Math.cos(t),
                    n = Math.sin(t),
                    r = this._transformMatrix;
                this._transformMatrix = [r[0] * e + r[2] * n, r[1] * e + r[3] * n, r[0] * -n + r[2] * e, r[1] * -n + r[3] * e, r[4], r[5]], this._originalRotate(t)
            })
        }

        function i(t) {
            var e, n, r, i, a = t.width,
                s = t.height,
                o = a + 1,
                c = new Uint8Array(o * (s + 1)),
                l = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
                h = a + 7 & -8,
                u = t.data,
                d = new Uint8Array(h * s),
                f = 0;
            for (e = 0, i = u.length; e < i; e++)
                for (var p = 128, g = u[e]; p > 0;) d[f++] = g & p ? 0 : 255, p >>= 1;
            var m = 0;
            for (f = 0, 0 !== d[f] && (c[0] = 1, ++m), n = 1; n < a; n++) d[f] !== d[f + 1] && (c[n] = d[f] ? 2 : 1, ++m), f++;
            for (0 !== d[f] && (c[n] = 2, ++m), e = 1; e < s; e++) {
                f = e * h, r = e * o, d[f - h] !== d[f] && (c[r] = d[f] ? 1 : 8, ++m);
                var A = (d[f] ? 4 : 0) + (d[f - h] ? 8 : 0);
                for (n = 1; n < a; n++) A = (A >> 2) + (d[f + 1] ? 4 : 0) + (d[f - h + 1] ? 8 : 0), l[A] && (c[r + n] = l[A], ++m), f++;
                if (d[f - h] !== d[f] && (c[r + n] = d[f] ? 2 : 4, ++m), m > 1e3) return null
            }
            for (f = h * (s - 1), r = e * o, 0 !== d[f] && (c[r] = 8, ++m), n = 1; n < a; n++) d[f] !== d[f + 1] && (c[r + n] = d[f] ? 4 : 8, ++m), f++;
            if (0 !== d[f] && (c[r + n] = 4, ++m), m > 1e3) return null;
            var v = new Int32Array([0, o, -1, 0, -o, 0, 0, 0, 1]),
                b = [];
            for (e = 0; m && e <= s; e++) {
                for (var y = e * o, S = y + a; y < S && !c[y];) y++;
                if (y !== S) {
                    var x, w = [y % o, e],
                        _ = c[y],
                        T = y;
                    do {
                        var C = v[_];
                        do {
                            y += C
                        } while (!c[y]);
                        x = c[y], 5 !== x && 10 !== x ? (_ = x, c[y] = 0) : (_ = x & 51 * _ >> 4, c[y] &= _ >> 2 | _ << 2), w.push(y % o), w.push(y / o | 0), --m
                    } while (T !== y);
                    b.push(w), --e
                }
            }
            return function(t) {
                t.save(), t.scale(1 / a, -1 / s), t.translate(0, -s), t.beginPath();
                for (var e = 0, n = b.length; e < n; e++) {
                    var r = b[e];
                    t.moveTo(r[0], r[1]);
                    for (var i = 2, o = r.length; i < o; i += 2) t.lineTo(r[i], r[i + 1])
                }
                t.fill(), t.beginPath(), t.restore()
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.CanvasGraphics = void 0;
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
                function t(t) {
                    this.canvasFactory = t, this.cache = Object.create(null)
                }
                return t.prototype = {
                    getCanvas: function(t, e, n, i) {
                        var a;
                        return void 0 !== this.cache[t] ? (a = this.cache[t], this.canvasFactory.reset(a, e, n), a.context.setTransform(1, 0, 0, 1, 0, 0)) : (a = this.canvasFactory.create(e, n), this.cache[t] = a), i && r(a.context), a
                    },
                    clear: function() {
                        for (var t in this.cache) {
                            var e = this.cache[t];
                            this.canvasFactory.destroy(e), delete this.cache[t]
                        }
                    }
                }, t
            }(),
            u = function() {
                function t(t) {
                    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = a.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = a.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = a.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.resumeSMaskCtx = null, this.old = t
                }
                return t.prototype = {
                    clone: function() {
                        return Object.create(this)
                    },
                    setCurrentPoint: function(t, e) {
                        this.x = t, this.y = e
                    }
                }, t
            }(),
            d = function() {
                function t(t, e, n, i, a) {
                    this.ctx = t, this.current = new u, this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = n, this.canvasFactory = i, this.imageLayer = a, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.cachedCanvases = new h(this.canvasFactory), t && r(t), this.cachedGetSinglePixelWidth = null
                }

                function e(t, e) {
                    if ("undefined" != typeof ImageData && e instanceof ImageData) return void t.putImageData(e, 0, 0);
                    var n, r, i, s, o, h = e.height,
                        u = e.width,
                        d = h % c,
                        f = (h - d) / c,
                        p = 0 === d ? f : f + 1,
                        g = t.createImageData(u, c),
                        m = 0,
                        A = e.data,
                        v = g.data;
                    if (e.kind === a.ImageKind.GRAYSCALE_1BPP) {
                        var b = A.byteLength,
                            y = new Uint32Array(v.buffer, 0, v.byteLength >> 2),
                            S = y.length,
                            x = u + 7 >> 3,
                            w = 4294967295,
                            _ = l.value ? 4278190080 : 255;
                        for (r = 0; r < p; r++) {
                            for (s = r < f ? c : d, n = 0, i = 0; i < s; i++) {
                                for (var T = b - m, C = 0, k = T > x ? u : 8 * T - 7, P = -8 & k, L = 0, E = 0; C < P; C += 8) E = A[m++], y[n++] = 128 & E ? w : _, y[n++] = 64 & E ? w : _, y[n++] = 32 & E ? w : _, y[n++] = 16 & E ? w : _, y[n++] = 8 & E ? w : _, y[n++] = 4 & E ? w : _, y[n++] = 2 & E ? w : _, y[n++] = 1 & E ? w : _;
                                for (; C < k; C++) 0 === L && (E = A[m++], L = 128), y[n++] = E & L ? w : _, L >>= 1
                            }
                            for (; n < S;) y[n++] = 0;
                            t.putImageData(g, 0, r * c)
                        }
                    } else if (e.kind === a.ImageKind.RGBA_32BPP) {
                        for (i = 0, o = u * c * 4, r = 0; r < f; r++) v.set(A.subarray(m, m + o)), m += o, t.putImageData(g, 0, i), i += c;
                        r < p && (o = u * d * 4, v.set(A.subarray(m, m + o)), t.putImageData(g, 0, i))
                    } else if (e.kind === a.ImageKind.RGB_24BPP)
                        for (s = c, o = u * s, r = 0; r < p; r++) {
                            for (r >= f && (s = d, o = u * s), n = 0, i = o; i--;) v[n++] = A[m++], v[n++] = A[m++], v[n++] = A[m++], v[n++] = 255;
                            t.putImageData(g, 0, r * c)
                        } else(0, a.error)("bad image kind: " + e.kind)
                }

                function n(t, e) {
                    for (var n = e.height, r = e.width, i = n % c, a = (n - i) / c, s = 0 === i ? a : a + 1, o = t.createImageData(r, c), l = 0, h = e.data, u = o.data, d = 0; d < s; d++) {
                        for (var f = d < a ? c : i, p = 3, g = 0; g < f; g++)
                            for (var m = 0, A = 0; A < r; A++) {
                                if (!m) {
                                    var v = h[l++];
                                    m = 128
                                }
                                u[p] = v & m ? 0 : 255, p += 4, m >>= 1
                            }
                        t.putImageData(o, 0, d * c)
                    }
                }

                function d(t, e) {
                    for (var n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], r = 0, i = n.length; r < i; r++) {
                        var a = n[r];
                        void 0 !== t[a] && (e[a] = t[a])
                    }
                    void 0 !== t.setLineDash && (e.setLineDash(t.getLineDash()), e.lineDashOffset = t.lineDashOffset)
                }

                function f(t, e, n, r) {
                    for (var i = t.length, a = 3; a < i; a += 4) {
                        var s = t[a];
                        if (0 === s) t[a - 3] = e, t[a - 2] = n, t[a - 1] = r;
                        else if (s < 255) {
                            var o = 255 - s;
                            t[a - 3] = t[a - 3] * s + e * o >> 8, t[a - 2] = t[a - 2] * s + n * o >> 8, t[a - 1] = t[a - 1] * s + r * o >> 8
                        }
                    }
                }

                function p(t, e, n) {
                    for (var r = t.length, i = 3; i < r; i += 4) {
                        var a = n ? n[t[i]] : t[i];
                        e[i] = e[i] * a * (1 / 255) | 0
                    }
                }

                function g(t, e, n) {
                    for (var r = t.length, i = 3; i < r; i += 4) {
                        var a = 77 * t[i - 3] + 152 * t[i - 2] + 28 * t[i - 1];
                        e[i] = n ? e[i] * n[a >> 8] >> 8 : e[i] * a >> 16
                    }
                }

                function m(t, e, n, r, i, a, s) {
                    var o, c = !!a,
                        l = c ? a[0] : 0,
                        h = c ? a[1] : 0,
                        u = c ? a[2] : 0;
                    o = "Luminosity" === i ? g : p;
                    for (var d = Math.min(r, Math.ceil(1048576 / n)), m = 0; m < r; m += d) {
                        var A = Math.min(d, r - m),
                            v = t.getImageData(0, m, n, A),
                            b = e.getImageData(0, m, n, A);
                        c && f(v.data, l, h, u), o(v.data, b.data, s), t.putImageData(b, 0, m)
                    }
                }

                function A(t, e, n) {
                    var r = e.canvas,
                        i = e.context;
                    t.setTransform(e.scaleX, 0, 0, e.scaleY, e.offsetX, e.offsetY);
                    var a = e.backdrop || null;
                    if (!e.transferMap && o.WebGLUtils.isEnabled) {
                        var s = o.WebGLUtils.composeSMask(n.canvas, r, {
                            subtype: e.subtype,
                            backdrop: a
                        });
                        return t.setTransform(1, 0, 0, 1, 0, 0), void t.drawImage(s, e.offsetX, e.offsetY)
                    }
                    m(i, n, r.width, r.height, e.subtype, a, e.transferMap), t.drawImage(r, 0, 0)
                }
                var v = ["butt", "round", "square"],
                    b = ["miter", "round", "bevel"],
                    y = {},
                    S = {};
                t.prototype = {
                    beginDrawing: function(t, e, n) {
                        var r = this.ctx.canvas.width,
                            i = this.ctx.canvas.height;
                        if (this.ctx.save(), this.ctx.fillStyle = "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, r, i), this.ctx.restore(), n) {
                            var a = this.cachedCanvases.getCanvas("transparent", r, i, !0);
                            this.compositeCtx = this.ctx, this.transparentCanvas = a.canvas, this.ctx = a.context, this.ctx.save(), this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
                        }
                        this.ctx.save(), t && this.ctx.transform.apply(this.ctx, t), this.ctx.transform.apply(this.ctx, e.transform), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this.imageLayer && this.imageLayer.beginLayout()
                    },
                    executeOperatorList: function(t, e, n, r) {
                        var i = t.argsArray,
                            s = t.fnArray,
                            o = e || 0,
                            c = i.length;
                        if (c === o) return o;
                        for (var l, h = c - o > 10 && "function" == typeof n, u = h ? Date.now() + 15 : 0, d = 0, f = this.commonObjs, p = this.objs;;) {
                            if (void 0 !== r && o === r.nextBreakPoint) return r.breakIt(o, n), o;
                            if ((l = s[o]) !== a.OPS.dependency) this[l].apply(this, i[o]);
                            else
                                for (var g = i[o], m = 0, A = g.length; m < A; m++) {
                                    var v = g[m],
                                        b = "g" === v[0] && "_" === v[1],
                                        y = b ? f : p;
                                    if (!y.isResolved(v)) return y.get(v, n), o
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
                    setLineWidth: function(t) {
                        this.current.lineWidth = t, this.ctx.lineWidth = t
                    },
                    setLineCap: function(t) {
                        this.ctx.lineCap = v[t]
                    },
                    setLineJoin: function(t) {
                        this.ctx.lineJoin = b[t]
                    },
                    setMiterLimit: function(t) {
                        this.ctx.miterLimit = t
                    },
                    setDash: function(t, e) {
                        var n = this.ctx;
                        void 0 !== n.setLineDash && (n.setLineDash(t), n.lineDashOffset = e)
                    },
                    setRenderingIntent: function(t) {},
                    setFlatness: function(t) {},
                    setGState: function(t) {
                        for (var e = 0, n = t.length; e < n; e++) {
                            var r = t[e],
                                i = r[0],
                                a = r[1];
                            switch (i) {
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
                                    this.current.strokeAlpha = r[1];
                                    break;
                                case "ca":
                                    this.current.fillAlpha = r[1], this.ctx.globalAlpha = r[1];
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
                        var t = this.current.activeSMask,
                            e = t.canvas.width,
                            n = t.canvas.height,
                            r = "smaskGroupAt" + this.groupLevel,
                            i = this.cachedCanvases.getCanvas(r, e, n, !0),
                            a = this.ctx,
                            s = a.mozCurrentTransform;
                        this.ctx.save();
                        var o = i.context;
                        o.scale(1 / t.scaleX, 1 / t.scaleY), o.translate(-t.offsetX, -t.offsetY), o.transform.apply(o, s), t.startTransformInverse = o.mozCurrentTransformInverse, d(a, o), this.ctx = o, this.setGState([
                            ["BM", "source-over"],
                            ["ca", 1],
                            ["CA", 1]
                        ]), this.groupStack.push(a), this.groupLevel++
                    },
                    suspendSMaskGroup: function() {
                        var t = this.ctx;
                        this.groupLevel--, this.ctx = this.groupStack.pop(), A(this.ctx, this.current.activeSMask, t), this.ctx.restore(), this.ctx.save(), d(t, this.ctx), this.current.resumeSMaskCtx = t;
                        var e = a.Util.transform(this.current.activeSMask.startTransformInverse, t.mozCurrentTransform);
                        this.ctx.transform.apply(this.ctx, e), t.save(), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, t.canvas.width, t.canvas.height), t.restore()
                    },
                    resumeSMaskGroup: function() {
                        var t = this.current.resumeSMaskCtx,
                            e = this.ctx;
                        this.ctx = t, this.groupStack.push(e), this.groupLevel++
                    },
                    endSMaskGroup: function() {
                        var t = this.ctx;
                        this.groupLevel--, this.ctx = this.groupStack.pop(), A(this.ctx, this.current.activeSMask, t), this.ctx.restore(), d(t, this.ctx);
                        var e = a.Util.transform(this.current.activeSMask.startTransformInverse, t.mozCurrentTransform);
                        this.ctx.transform.apply(this.ctx, e)
                    },
                    save: function() {
                        this.ctx.save();
                        var t = this.current;
                        this.stateStack.push(t), this.current = t.clone(), this.current.resumeSMaskCtx = null
                    },
                    restore: function() {
                        this.current.resumeSMaskCtx && this.resumeSMaskGroup(), null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.ctx.restore(), this.pendingClip = null, this.cachedGetSinglePixelWidth = null)
                    },
                    transform: function(t, e, n, r, i, a) {
                        this.ctx.transform(t, e, n, r, i, a), this.cachedGetSinglePixelWidth = null
                    },
                    constructPath: function(t, e) {
                        for (var n = this.ctx, r = this.current, i = r.x, s = r.y, o = 0, c = 0, l = t.length; o < l; o++) switch (0 | t[o]) {
                            case a.OPS.rectangle:
                                i = e[c++], s = e[c++];
                                var h = e[c++],
                                    u = e[c++];
                                0 === h && (h = this.getSinglePixelWidth()), 0 === u && (u = this.getSinglePixelWidth());
                                var d = i + h,
                                    f = s + u;
                                this.ctx.moveTo(i, s), this.ctx.lineTo(d, s), this.ctx.lineTo(d, f), this.ctx.lineTo(i, f), this.ctx.lineTo(i, s), this.ctx.closePath();
                                break;
                            case a.OPS.moveTo:
                                i = e[c++], s = e[c++], n.moveTo(i, s);
                                break;
                            case a.OPS.lineTo:
                                i = e[c++], s = e[c++], n.lineTo(i, s);
                                break;
                            case a.OPS.curveTo:
                                i = e[c + 4], s = e[c + 5], n.bezierCurveTo(e[c], e[c + 1], e[c + 2], e[c + 3], i, s), c += 6;
                                break;
                            case a.OPS.curveTo2:
                                n.bezierCurveTo(i, s, e[c], e[c + 1], e[c + 2], e[c + 3]), i = e[c + 2], s = e[c + 3], c += 4;
                                break;
                            case a.OPS.curveTo3:
                                i = e[c + 2], s = e[c + 3], n.bezierCurveTo(e[c], e[c + 1], i, s, i, s), c += 4;
                                break;
                            case a.OPS.closePath:
                                n.closePath()
                        }
                        r.setCurrentPoint(i, s)
                    },
                    closePath: function() {
                        this.ctx.closePath()
                    },
                    stroke: function(t) {
                        t = void 0 === t || t;
                        var e = this.ctx,
                            n = this.current.strokeColor;
                        e.lineWidth = Math.max(.65 * this.getSinglePixelWidth(), this.current.lineWidth), e.globalAlpha = this.current.strokeAlpha, n && n.hasOwnProperty("type") && "Pattern" === n.type ? (e.save(), e.strokeStyle = n.getPattern(e, this), e.stroke(), e.restore()) : e.stroke(), t && this.consumePath(), e.globalAlpha = this.current.fillAlpha
                    },
                    closeStroke: function() {
                        this.closePath(), this.stroke()
                    },
                    fill: function(t) {
                        t = void 0 === t || t;
                        var e = this.ctx,
                            n = this.current.fillColor,
                            r = this.current.patternFill,
                            i = !1;
                        r && (e.save(), this.baseTransform && e.setTransform.apply(e, this.baseTransform), e.fillStyle = n.getPattern(e, this), i = !0), this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill(), i && e.restore(), t && this.consumePath()
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
                        this.pendingClip = y
                    },
                    eoClip: function() {
                        this.pendingClip = S
                    },
                    beginText: function() {
                        this.current.textMatrix = a.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                    },
                    endText: function() {
                        var t = this.pendingTextPaths,
                            e = this.ctx;
                        if (void 0 === t) return void e.beginPath();
                        e.save(), e.beginPath();
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            e.setTransform.apply(e, r.transform), e.translate(r.x, r.y), r.addToPath(e, r.fontSize)
                        }
                        e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths
                    },
                    setCharSpacing: function(t) {
                        this.current.charSpacing = t
                    },
                    setWordSpacing: function(t) {
                        this.current.wordSpacing = t
                    },
                    setHScale: function(t) {
                        this.current.textHScale = t / 100
                    },
                    setLeading: function(t) {
                        this.current.leading = -t
                    },
                    setFont: function(t, e) {
                        var n = this.commonObjs.get(t),
                            r = this.current;
                        if (n || (0, a.error)("Can't find font for " + t), r.fontMatrix = n.fontMatrix ? n.fontMatrix : a.FONT_IDENTITY_MATRIX, 0 !== r.fontMatrix[0] && 0 !== r.fontMatrix[3] || (0, a.warn)("Invalid font matrix for font " + t), e < 0 ? (e = -e, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = n, this.current.fontSize = e, !n.isType3Font) {
                            var i = n.loadedName || "sans-serif",
                                s = n.black ? "900" : n.bold ? "bold" : "normal",
                                o = n.italic ? "italic" : "normal",
                                c = '"' + i + '", ' + n.fallbackName,
                                l = e < 16 ? 16 : e > 100 ? 100 : e;
                            this.current.fontSizeScale = e / l;
                            var h = o + " " + s + " " + l + "px " + c;
                            this.ctx.font = h
                        }
                    },
                    setTextRenderingMode: function(t) {
                        this.current.textRenderingMode = t
                    },
                    setTextRise: function(t) {
                        this.current.textRise = t
                    },
                    moveText: function(t, e) {
                        this.current.x = this.current.lineX += t, this.current.y = this.current.lineY += e
                    },
                    setLeadingMoveText: function(t, e) {
                        this.setLeading(-e), this.moveText(t, e)
                    },
                    setTextMatrix: function(t, e, n, r, i, a) {
                        this.current.textMatrix = [t, e, n, r, i, a], this.current.textMatrixScale = Math.sqrt(t * t + e * e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
                    },
                    nextLine: function() {
                        this.moveText(0, this.current.leading)
                    },
                    paintChar: function(t, e, n) {
                        var r, i = this.ctx,
                            s = this.current,
                            o = s.font,
                            c = s.textRenderingMode,
                            l = s.fontSize / s.fontSizeScale,
                            h = c & a.TextRenderingMode.FILL_STROKE_MASK,
                            u = !!(c & a.TextRenderingMode.ADD_TO_PATH_FLAG);
                        if ((o.disableFontFace || u) && (r = o.getPathGenerator(this.commonObjs, t)), o.disableFontFace ? (i.save(), i.translate(e, n), i.beginPath(), r(i, l), h !== a.TextRenderingMode.FILL && h !== a.TextRenderingMode.FILL_STROKE || i.fill(), h !== a.TextRenderingMode.STROKE && h !== a.TextRenderingMode.FILL_STROKE || i.stroke(), i.restore()) : (h !== a.TextRenderingMode.FILL && h !== a.TextRenderingMode.FILL_STROKE || i.fillText(t, e, n), h !== a.TextRenderingMode.STROKE && h !== a.TextRenderingMode.FILL_STROKE || i.strokeText(t, e, n)), u) {
                            (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                                transform: i.mozCurrentTransform,
                                x: e,
                                y: n,
                                fontSize: l,
                                addToPath: r
                            })
                        }
                    },
                    get isFontSubpixelAAEnabled() {
                        var t = this.canvasFactory.create(10, 10).context;
                        t.scale(1.5, 1), t.fillText("I", 0, 10);
                        for (var e = t.getImageData(0, 0, 10, 10).data, n = !1, r = 3; r < e.length; r += 4)
                            if (e[r] > 0 && e[r] < 255) {
                                n = !0;
                                break
                            } return (0, a.shadow)(this, "isFontSubpixelAAEnabled", n)
                    },
                    showText: function(t) {
                        var e = this.current,
                            n = e.font;
                        if (n.isType3Font) return this.showType3Text(t);
                        var r = e.fontSize;
                        if (0 !== r) {
                            var i = this.ctx,
                                s = e.fontSizeScale,
                                o = e.charSpacing,
                                c = e.wordSpacing,
                                l = e.fontDirection,
                                h = e.textHScale * l,
                                u = t.length,
                                d = n.vertical,
                                f = d ? 1 : -1,
                                p = n.defaultVMetrics,
                                g = r * e.fontMatrix[0],
                                m = e.textRenderingMode === a.TextRenderingMode.FILL && !n.disableFontFace;
                            i.save(), i.transform.apply(i, e.textMatrix), i.translate(e.x, e.y + e.textRise), e.patternFill && (i.fillStyle = e.fillColor.getPattern(i, this)), l > 0 ? i.scale(h, -1) : i.scale(h, 1);
                            var A = e.lineWidth,
                                v = e.textMatrixScale;
                            if (0 === v || 0 === A) {
                                var b = e.textRenderingMode & a.TextRenderingMode.FILL_STROKE_MASK;
                                b !== a.TextRenderingMode.STROKE && b !== a.TextRenderingMode.FILL_STROKE || (this.cachedGetSinglePixelWidth = null, A = .65 * this.getSinglePixelWidth())
                            } else A /= v;
                            1 !== s && (i.scale(s, s), A /= s), i.lineWidth = A;
                            var y, S = 0;
                            for (y = 0; y < u; ++y) {
                                var x = t[y];
                                if ((0, a.isNum)(x)) S += f * x * r / 1e3;
                                else {
                                    var w, _, T, C, k = !1,
                                        P = (x.isSpace ? c : 0) + o,
                                        L = x.fontChar,
                                        E = x.accent,
                                        R = x.width;
                                    if (d) {
                                        var O, I, F;
                                        O = x.vmetric || p, I = x.vmetric ? O[1] : .5 * R, I = -I * g, F = O[2] * g, R = O ? -O[0] : R, w = I / s, _ = (S + F) / s
                                    } else w = S / s, _ = 0;
                                    if (n.remeasure && R > 0) {
                                        var M = 1e3 * i.measureText(L).width / r * s;
                                        if (R < M && this.isFontSubpixelAAEnabled) {
                                            var D = R / M;
                                            k = !0, i.save(), i.scale(D, 1), w /= D
                                        } else R !== M && (w += (R - M) / 2e3 * r / s)
                                    }(x.isInFont || n.missingFile) && (m && !E ? i.fillText(L, w, _) : (this.paintChar(L, w, _), E && (T = w + E.offset.x / s, C = _ - E.offset.y / s, this.paintChar(E.fontChar, T, C))));
                                    S += R * g + P * l, k && i.restore()
                                }
                            }
                            d ? e.y -= S * h : e.x += S * h, i.restore()
                        }
                    },
                    showType3Text: function(t) {
                        var e, n, r, i, s = this.ctx,
                            o = this.current,
                            c = o.font,
                            l = o.fontSize,
                            h = o.fontDirection,
                            u = c.vertical ? 1 : -1,
                            d = o.charSpacing,
                            f = o.wordSpacing,
                            p = o.textHScale * h,
                            g = o.fontMatrix || a.FONT_IDENTITY_MATRIX,
                            m = t.length,
                            A = o.textRenderingMode === a.TextRenderingMode.INVISIBLE;
                        if (!A && 0 !== l) {
                            for (this.cachedGetSinglePixelWidth = null, s.save(), s.transform.apply(s, o.textMatrix), s.translate(o.x, o.y), s.scale(p, h), e = 0; e < m; ++e)
                                if (n = t[e], (0, a.isNum)(n)) i = u * n * l / 1e3, this.ctx.translate(i, 0), o.x += i * p;
                                else {
                                    var v = (n.isSpace ? f : 0) + d,
                                        b = c.charProcOperatorList[n.operatorListId];
                                    if (b) {
                                        this.processingType3 = n, this.save(), s.scale(l, l), s.transform.apply(s, g), this.executeOperatorList(b), this.restore();
                                        var y = a.Util.applyTransform([n.width, 0], g);
                                        r = y[0] * l + v, s.translate(r, 0), o.x += r * p
                                    } else(0, a.warn)('Type3 character "' + n.operatorListId + '" is not available')
                                } s.restore(), this.processingType3 = null
                        }
                    },
                    setCharWidth: function(t, e) {},
                    setCharWidthAndBounds: function(t, e, n, r, i, a) {
                        this.ctx.rect(n, r, i - n, a - r), this.clip(), this.endPath()
                    },
                    getColorN_Pattern: function(e) {
                        var n;
                        if ("TilingPattern" === e[0]) {
                            var r = e[1],
                                i = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                                a = this,
                                o = {
                                    createCanvasGraphics: function(e) {
                                        return new t(e, a.commonObjs, a.objs, a.canvasFactory)
                                    }
                                };
                            n = new s.TilingPattern(e, r, this.ctx, o, i)
                        } else n = (0, s.getShadingPatternFromIR)(e);
                        return n
                    },
                    setStrokeColorN: function() {
                        this.current.strokeColor = this.getColorN_Pattern(arguments)
                    },
                    setFillColorN: function() {
                        this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
                    },
                    setStrokeRGBColor: function(t, e, n) {
                        var r = a.Util.makeCssRgb(t, e, n);
                        this.ctx.strokeStyle = r, this.current.strokeColor = r
                    },
                    setFillRGBColor: function(t, e, n) {
                        var r = a.Util.makeCssRgb(t, e, n);
                        this.ctx.fillStyle = r, this.current.fillColor = r, this.current.patternFill = !1
                    },
                    shadingFill: function(t) {
                        var e = this.ctx;
                        this.save();
                        var n = (0, s.getShadingPatternFromIR)(t);
                        e.fillStyle = n.getPattern(e, this, !0);
                        var r = e.mozCurrentTransformInverse;
                        if (r) {
                            var i = e.canvas,
                                o = i.width,
                                c = i.height,
                                l = a.Util.applyTransform([0, 0], r),
                                h = a.Util.applyTransform([0, c], r),
                                u = a.Util.applyTransform([o, 0], r),
                                d = a.Util.applyTransform([o, c], r),
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
                    paintFormXObjectBegin: function(t, e) {
                        if (this.save(), this.baseTransformStack.push(this.baseTransform), (0, a.isArray)(t) && 6 === t.length && this.transform.apply(this, t), this.baseTransform = this.ctx.mozCurrentTransform, (0, a.isArray)(e) && 4 === e.length) {
                            var n = e[2] - e[0],
                                r = e[3] - e[1];
                            this.ctx.rect(e[0], e[1], n, r), this.clip(), this.endPath()
                        }
                    },
                    paintFormXObjectEnd: function() {
                        this.restore(), this.baseTransform = this.baseTransformStack.pop()
                    },
                    beginGroup: function(t) {
                        this.save();
                        var e = this.ctx;
                        t.isolated || (0, a.info)("TODO: Support non-isolated groups."), t.knockout && (0, a.warn)("Knockout groups not supported.");
                        var n = e.mozCurrentTransform;
                        t.matrix && e.transform.apply(e, t.matrix), (0, a.assert)(t.bbox, "Bounding box is required.");
                        var r = a.Util.getAxialAlignedBoundingBox(t.bbox, e.mozCurrentTransform),
                            i = [0, 0, e.canvas.width, e.canvas.height];
                        r = a.Util.intersect(r, i) || [0, 0, 0, 0];
                        var s = Math.floor(r[0]),
                            o = Math.floor(r[1]),
                            c = Math.max(Math.ceil(r[2]) - s, 1),
                            l = Math.max(Math.ceil(r[3]) - o, 1),
                            h = 1,
                            u = 1;
                        c > 4096 && (h = c / 4096, c = 4096), l > 4096 && (u = l / 4096, l = 4096);
                        var f = "groupAt" + this.groupLevel;
                        t.smask && (f += "_smask_" + this.smaskCounter++ % 2);
                        var p = this.cachedCanvases.getCanvas(f, c, l, !0),
                            g = p.context;
                        g.scale(1 / h, 1 / u), g.translate(-s, -o), g.transform.apply(g, n), t.smask ? this.smaskStack.push({
                            canvas: p.canvas,
                            context: g,
                            offsetX: s,
                            offsetY: o,
                            scaleX: h,
                            scaleY: u,
                            subtype: t.smask.subtype,
                            backdrop: t.smask.backdrop,
                            transferMap: t.smask.transferMap || null,
                            startTransformInverse: null
                        }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(s, o), e.scale(h, u)), d(e, g), this.ctx = g, this.setGState([
                            ["BM", "source-over"],
                            ["ca", 1],
                            ["CA", 1]
                        ]), this.groupStack.push(e), this.groupLevel++, this.current.activeSMask = null
                    },
                    endGroup: function(t) {
                        this.groupLevel--;
                        var e = this.ctx;
                        this.ctx = this.groupStack.pop(), void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1, t.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(e.canvas, 0, 0), this.restore()
                    },
                    beginAnnotations: function() {
                        this.save(), this.current = new u, this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
                    },
                    endAnnotations: function() {
                        this.restore()
                    },
                    beginAnnotation: function(t, e, n) {
                        if (this.save(), (0, a.isArray)(t) && 4 === t.length) {
                            var r = t[2] - t[0],
                                i = t[3] - t[1];
                            this.ctx.rect(t[0], t[1], r, i), this.clip(), this.endPath()
                        }
                        this.transform.apply(this, e), this.transform.apply(this, n)
                    },
                    endAnnotation: function() {
                        this.restore()
                    },
                    paintJpegXObject: function(t, e, n) {
                        var r = this.objs.get(t);
                        if (!r) return void(0, a.warn)("Dependent image isn't ready yet");
                        this.save();
                        var i = this.ctx;
                        if (i.scale(1 / e, -1 / n), i.drawImage(r, 0, 0, r.width, r.height, 0, -n, e, n), this.imageLayer) {
                            var s = i.mozCurrentTransformInverse,
                                o = this.getCanvasPosition(0, 0);
                            this.imageLayer.appendImage({
                                objId: t,
                                left: o[0],
                                top: o[1],
                                width: e / s[0],
                                height: n / s[3]
                            })
                        }
                        this.restore()
                    },
                    paintImageMaskXObject: function(t) {
                        var e = this.ctx,
                            r = t.width,
                            a = t.height,
                            s = this.current.fillColor,
                            o = this.current.patternFill,
                            c = this.processingType3;
                        if (c && void 0 === c.compiled && (c.compiled = r <= 1e3 && a <= 1e3 ? i({
                                data: t.data,
                                width: r,
                                height: a
                            }) : null), c && c.compiled) return void c.compiled(e);
                        var l = this.cachedCanvases.getCanvas("maskCanvas", r, a),
                            h = l.context;
                        h.save(), n(h, t), h.globalCompositeOperation = "source-in", h.fillStyle = o ? s.getPattern(h, this) : s, h.fillRect(0, 0, r, a), h.restore(), this.paintInlineImageXObject(l.canvas)
                    },
                    paintImageMaskXObjectRepeat: function(t, e, r, i) {
                        var a = t.width,
                            s = t.height,
                            o = this.current.fillColor,
                            c = this.current.patternFill,
                            l = this.cachedCanvases.getCanvas("maskCanvas", a, s),
                            h = l.context;
                        h.save(), n(h, t), h.globalCompositeOperation = "source-in", h.fillStyle = c ? o.getPattern(h, this) : o, h.fillRect(0, 0, a, s), h.restore();
                        for (var u = this.ctx, d = 0, f = i.length; d < f; d += 2) u.save(), u.transform(e, 0, 0, r, i[d], i[d + 1]), u.scale(1, -1), u.drawImage(l.canvas, 0, 0, a, s, 0, -1, 1, 1), u.restore()
                    },
                    paintImageMaskXObjectGroup: function(t) {
                        for (var e = this.ctx, r = this.current.fillColor, i = this.current.patternFill, a = 0, s = t.length; a < s; a++) {
                            var o = t[a],
                                c = o.width,
                                l = o.height,
                                h = this.cachedCanvases.getCanvas("maskCanvas", c, l),
                                u = h.context;
                            u.save(), n(u, o), u.globalCompositeOperation = "source-in", u.fillStyle = i ? r.getPattern(u, this) : r, u.fillRect(0, 0, c, l), u.restore(), e.save(), e.transform.apply(e, o.transform), e.scale(1, -1), e.drawImage(h.canvas, 0, 0, c, l, 0, -1, 1, 1), e.restore()
                        }
                    },
                    paintImageXObject: function(t) {
                        var e = this.objs.get(t);
                        if (!e) return void(0, a.warn)("Dependent image isn't ready yet");
                        this.paintInlineImageXObject(e)
                    },
                    paintImageXObjectRepeat: function(t, e, n, r) {
                        var i = this.objs.get(t);
                        if (!i) return void(0, a.warn)("Dependent image isn't ready yet");
                        for (var s = i.width, o = i.height, c = [], l = 0, h = r.length; l < h; l += 2) c.push({
                            transform: [e, 0, 0, n, r[l], r[l + 1]],
                            x: 0,
                            y: 0,
                            w: s,
                            h: o
                        });
                        this.paintInlineImageXObjectGroup(i, c)
                    },
                    paintInlineImageXObject: function(t) {
                        var n = t.width,
                            r = t.height,
                            i = this.ctx;
                        this.save(), i.scale(1 / n, -1 / r);
                        var a, s, o = i.mozCurrentTransformInverse,
                            c = o[0],
                            l = o[1],
                            h = Math.max(Math.sqrt(c * c + l * l), 1),
                            u = o[2],
                            d = o[3],
                            f = Math.max(Math.sqrt(u * u + d * d), 1);
                        if (t instanceof HTMLElement || !t.data) a = t;
                        else {
                            s = this.cachedCanvases.getCanvas("inlineImage", n, r);
                            var p = s.context;
                            e(p, t), a = s.canvas
                        }
                        for (var g = n, m = r, A = "prescale1"; h > 2 && g > 1 || f > 2 && m > 1;) {
                            var v = g,
                                b = m;
                            h > 2 && g > 1 && (v = Math.ceil(g / 2), h /= g / v), f > 2 && m > 1 && (b = Math.ceil(m / 2), f /= m / b), s = this.cachedCanvases.getCanvas(A, v, b), p = s.context, p.clearRect(0, 0, v, b), p.drawImage(a, 0, 0, g, m, 0, 0, v, b), a = s.canvas, g = v, m = b, A = "prescale1" === A ? "prescale2" : "prescale1"
                        }
                        if (i.drawImage(a, 0, 0, g, m, 0, -r, n, r), this.imageLayer) {
                            var y = this.getCanvasPosition(0, -r);
                            this.imageLayer.appendImage({
                                imgData: t,
                                left: y[0],
                                top: y[1],
                                width: n / o[0],
                                height: r / o[3]
                            })
                        }
                        this.restore()
                    },
                    paintInlineImageXObjectGroup: function(t, n) {
                        var r = this.ctx,
                            i = t.width,
                            a = t.height,
                            s = this.cachedCanvases.getCanvas("inlineImage", i, a);
                        e(s.context, t);
                        for (var o = 0, c = n.length; o < c; o++) {
                            var l = n[o];
                            if (r.save(), r.transform.apply(r, l.transform), r.scale(1, -1), r.drawImage(s.canvas, l.x, l.y, l.w, l.h, 0, -1, 1, 1), this.imageLayer) {
                                var h = this.getCanvasPosition(l.x, l.y);
                                this.imageLayer.appendImage({
                                    imgData: t,
                                    left: h[0],
                                    top: h[1],
                                    width: i,
                                    height: a
                                })
                            }
                            r.restore()
                        }
                    },
                    paintSolidColorImageMask: function() {
                        this.ctx.fillRect(0, 0, 1, 1)
                    },
                    paintXObject: function() {
                        (0, a.warn)("Unsupported 'paintXObject' command.")
                    },
                    markPoint: function(t) {},
                    markPointProps: function(t, e) {},
                    beginMarkedContent: function(t) {},
                    beginMarkedContentProps: function(t, e) {},
                    endMarkedContent: function() {},
                    beginCompat: function() {},
                    endCompat: function() {},
                    consumePath: function() {
                        var t = this.ctx;
                        this.pendingClip && (this.pendingClip === S ? t.clip("evenodd") : t.clip(), this.pendingClip = null), t.beginPath()
                    },
                    getSinglePixelWidth: function(t) {
                        if (null === this.cachedGetSinglePixelWidth) {
                            this.ctx.save();
                            var e = this.ctx.mozCurrentTransformInverse;
                            this.ctx.restore(), this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1], e[2] * e[2] + e[3] * e[3]))
                        }
                        return this.cachedGetSinglePixelWidth
                    },
                    getCanvasPosition: function(t, e) {
                        var n = this.ctx.mozCurrentTransform;
                        return [n[0] * t + n[2] * e + n[4], n[1] * t + n[3] * e + n[5]]
                    }
                };
                for (var x in a.OPS) t.prototype[a.OPS[x]] = t.prototype[x];
                return t
            }();
        e.CanvasGraphics = d
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            this.docId = t, this.styleElement = null, this.nativeFontFaces = [], this.loadTestFontId = 0, this.loadingContext = {
                requests: [],
                nextRequestId: 0
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.FontLoader = e.FontFaceObject = void 0;
        var i = n(0);
        r.prototype = {
            insertRule: function(t) {
                var e = this.styleElement;
                e || (e = this.styleElement = document.createElement("style"), e.id = "PDFJS_FONT_STYLE_TAG_" + this.docId, document.documentElement.getElementsByTagName("head")[0].appendChild(e));
                var n = e.sheet;
                n.insertRule(t, n.cssRules.length)
            },
            clear: function() {
                this.styleElement && (this.styleElement.remove(), this.styleElement = null), this.nativeFontFaces.forEach(function(t) {
                    document.fonts.delete(t)
                }), this.nativeFontFaces.length = 0
            }
        };
        var a = function() {
            return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")
        };
        Object.defineProperty(r.prototype, "loadTestFont", {
            get: function() {
                return (0, i.shadow)(this, "loadTestFont", a())
            },
            configurable: !0
        }), r.prototype.addNativeFontFace = function(t) {
            this.nativeFontFaces.push(t), document.fonts.add(t)
        }, r.prototype.bind = function(t, e) {
            for (var n = [], a = [], s = [], o = r.isFontLoadingAPISupported && !r.isSyncFontLoadingSupported, c = 0, l = t.length; c < l; c++) {
                var h = t[c];
                if (!h.attached && !1 !== h.loading)
                    if (h.attached = !0, o) {
                        var u = h.createNativeFontFace();
                        u && (this.addNativeFontFace(u), s.push(function(t) {
                            return t.loaded.catch(function(e) {
                                (0, i.warn)('Failed to load font "' + t.family + '": ' + e)
                            })
                        }(u)))
                    } else {
                        var d = h.createFontFaceRule();
                        d && (this.insertRule(d), n.push(d), a.push(h))
                    }
            }
            var f = this.queueLoadingCallback(e);
            o ? Promise.all(s).then(function() {
                f.complete()
            }) : n.length > 0 && !r.isSyncFontLoadingSupported ? this.prepareFontLoadEvent(n, a, f) : f.complete()
        }, r.prototype.queueLoadingCallback = function(t) {
            function e() {
                for ((0, i.assert)(!a.end, "completeRequest() cannot be called twice"), a.end = Date.now(); n.requests.length > 0 && n.requests[0].end;) {
                    var t = n.requests.shift();
                    setTimeout(t.callback, 0)
                }
            }
            var n = this.loadingContext,
                r = "pdfjs-font-loading-" + n.nextRequestId++,
                a = {
                    id: r,
                    complete: e,
                    callback: t,
                    started: Date.now()
                };
            return n.requests.push(a), a
        }, r.prototype.prepareFontLoadEvent = function(t, e, n) {
            function r(t, e) {
                return t.charCodeAt(e) << 24 | t.charCodeAt(e + 1) << 16 | t.charCodeAt(e + 2) << 8 | 255 & t.charCodeAt(e + 3)
            }

            function a(t, e, n, r) {
                return t.substr(0, e) + r + t.substr(e + n)
            }

            function s(t, e) {
                return ++u > 30 ? ((0, i.warn)("Load test font never loaded."), void e()) : (h.font = "30px " + t, h.fillText(".", 0, 20), h.getImageData(0, 0, 1, 1).data[3] > 0 ? void e() : void setTimeout(s.bind(null, t, e)))
            }
            var o, c, l = document.createElement("canvas");
            l.width = 1, l.height = 1;
            var h = l.getContext("2d"),
                u = 0,
                d = "lt" + Date.now() + this.loadTestFontId++,
                f = this.loadTestFont;
            f = a(f, 976, d.length, d);
            var p = r(f, 16);
            for (o = 0, c = d.length - 3; o < c; o += 4) p = p - 1482184792 + r(d, o) | 0;
            o < d.length && (p = p - 1482184792 + r(d + "XXX", o) | 0), f = a(f, 16, 4, (0, i.string32)(p));
            var g = "url(data:font/opentype;base64," + btoa(f) + ");",
                m = '@font-face { font-family:"' + d + '";src:' + g + "}";
            this.insertRule(m);
            var A = [];
            for (o = 0, c = e.length; o < c; o++) A.push(e[o].loadedName);
            A.push(d);
            var v = document.createElement("div");
            for (v.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"), o = 0, c = A.length; o < c; ++o) {
                var b = document.createElement("span");
                b.textContent = "Hi", b.style.fontFamily = A[o], v.appendChild(b)
            }
            document.body.appendChild(v), s(d, function() {
                document.body.removeChild(v), n.complete()
            })
        }, r.isFontLoadingAPISupported = "undefined" != typeof document && !!document.fonts;
        var s = function() {
            if ("undefined" == typeof navigator) return !0;
            var t = !1,
                e = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
            return e && e[1] >= 14 && (t = !0), t
        };
        Object.defineProperty(r, "isSyncFontLoadingSupported", {
            get: function() {
                return (0, i.shadow)(r, "isSyncFontLoadingSupported", s())
            },
            enumerable: !0,
            configurable: !0
        });
        var o = {
                get value() {
                    return (0, i.shadow)(this, "value", (0, i.isEvalSupported)())
                }
            },
            c = function() {
                function t(t, e) {
                    this.compiledGlyphs = Object.create(null);
                    for (var n in t) this[n] = t[n];
                    this.options = e
                }
                return t.prototype = {
                    createNativeFontFace: function() {
                        if (!this.data) return null;
                        if (this.options.disableFontFace) return this.disableFontFace = !0, null;
                        var t = new FontFace(this.loadedName, this.data, {});
                        return this.options.fontRegistry && this.options.fontRegistry.registerFont(this), t
                    },
                    createFontFaceRule: function() {
                        if (!this.data) return null;
                        if (this.options.disableFontFace) return this.disableFontFace = !0, null;
                        var t = (0, i.bytesToString)(new Uint8Array(this.data)),
                            e = this.loadedName,
                            n = "url(data:" + this.mimetype + ";base64," + btoa(t) + ");",
                            r = '@font-face { font-family:"' + e + '";src:' + n + "}";
                        return this.options.fontRegistry && this.options.fontRegistry.registerFont(this, n), r
                    },
                    getPathGenerator: function(t, e) {
                        if (!(e in this.compiledGlyphs)) {
                            var n, r, i, a = t.get(this.loadedName + "_path_" + e);
                            if (this.options.isEvalSupported && o.value) {
                                var s, c = "";
                                for (r = 0, i = a.length; r < i; r++) n = a[r], s = void 0 !== n.args ? n.args.join(",") : "", c += "c." + n.cmd + "(" + s + ");\n";
                                this.compiledGlyphs[e] = new Function("c", "size", c)
                            } else this.compiledGlyphs[e] = function(t, e) {
                                for (r = 0, i = a.length; r < i; r++) n = a[r], "scale" === n.cmd && (n.args = [e, -e]), t[n.cmd].apply(t, n.args)
                            }
                        }
                        return this.compiledGlyphs[e]
                    }
                }, t
            }();
        e.FontFaceObject = c, e.FontLoader = r
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            var e = s[t[0]];
            return e || (0, i.error)("Unknown IR type: " + t[0]), e.fromIR(t)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.TilingPattern = e.getShadingPatternFromIR = void 0;
        var i = n(0),
            a = n(8),
            s = {};
        s.RadialAxial = {
            fromIR: function(t) {
                var e = t[1],
                    n = t[2],
                    r = t[3],
                    i = t[4],
                    a = t[5],
                    s = t[6];
                return {
                    type: "Pattern",
                    getPattern: function(t) {
                        var o;
                        "axial" === e ? o = t.createLinearGradient(r[0], r[1], i[0], i[1]) : "radial" === e && (o = t.createRadialGradient(r[0], r[1], a, i[0], i[1], s));
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
            function t(t, e, n, r, i, a, s, o) {
                var c, l = e.coords,
                    h = e.colors,
                    u = t.data,
                    d = 4 * t.width;
                l[n + 1] > l[r + 1] && (c = n, n = r, r = c, c = a, a = s, s = c), l[r + 1] > l[i + 1] && (c = r, r = i, i = c, c = s, s = o, o = c), l[n + 1] > l[r + 1] && (c = n, n = r, r = c, c = a, a = s, s = c);
                var f = (l[n] + e.offsetX) * e.scaleX,
                    p = (l[n + 1] + e.offsetY) * e.scaleY,
                    g = (l[r] + e.offsetX) * e.scaleX,
                    m = (l[r + 1] + e.offsetY) * e.scaleY,
                    A = (l[i] + e.offsetX) * e.scaleX,
                    v = (l[i + 1] + e.offsetY) * e.scaleY;
                if (!(p >= v))
                    for (var b, y, S, x, w, _, T, C, k, P = h[a], L = h[a + 1], E = h[a + 2], R = h[s], O = h[s + 1], I = h[s + 2], F = h[o], M = h[o + 1], D = h[o + 2], N = Math.round(p), j = Math.round(v), U = N; U <= j; U++) {
                        U < m ? (k = U < p ? 0 : p === m ? 1 : (p - U) / (p - m), b = f - (f - g) * k, y = P - (P - R) * k, S = L - (L - O) * k, x = E - (E - I) * k) : (k = U > v ? 1 : m === v ? 0 : (m - U) / (m - v), b = g - (g - A) * k, y = R - (R - F) * k, S = O - (O - M) * k, x = I - (I - D) * k), k = U < p ? 0 : U > v ? 1 : (p - U) / (p - v), w = f - (f - A) * k, _ = P - (P - F) * k, T = L - (L - M) * k, C = E - (E - D) * k;
                        for (var B = Math.round(Math.min(b, w)), W = Math.round(Math.max(b, w)), G = d * U + 4 * B, X = B; X <= W; X++) k = (b - X) / (b - w), k = k < 0 ? 0 : k > 1 ? 1 : k, u[G++] = y - (y - _) * k | 0, u[G++] = S - (S - T) * k | 0, u[G++] = x - (x - C) * k | 0, u[G++] = 255
                    }
            }

            function e(e, n, r) {
                var a, s, o = n.coords,
                    c = n.colors;
                switch (n.type) {
                    case "lattice":
                        var l = n.verticesPerRow,
                            h = Math.floor(o.length / l) - 1,
                            u = l - 1;
                        for (a = 0; a < h; a++)
                            for (var d = a * l, f = 0; f < u; f++, d++) t(e, r, o[d], o[d + 1], o[d + l], c[d], c[d + 1], c[d + l]), t(e, r, o[d + l + 1], o[d + 1], o[d + l], c[d + l + 1], c[d + 1], c[d + l]);
                        break;
                    case "triangles":
                        for (a = 0, s = o.length; a < s; a += 3) t(e, r, o[a], o[a + 1], o[a + 2], c[a], c[a + 1], c[a + 2]);
                        break;
                    default:
                        (0, i.error)("illigal figure")
                }
            }

            function n(t, n, r, i, s, o, c) {
                var l, h, u, d, f = Math.floor(t[0]),
                    p = Math.floor(t[1]),
                    g = Math.ceil(t[2]) - f,
                    m = Math.ceil(t[3]) - p,
                    A = Math.min(Math.ceil(Math.abs(g * n[0] * 1.1)), 3e3),
                    v = Math.min(Math.ceil(Math.abs(m * n[1] * 1.1)), 3e3),
                    b = g / A,
                    y = m / v,
                    S = {
                        coords: r,
                        colors: i,
                        offsetX: -f,
                        offsetY: -p,
                        scaleX: 1 / b,
                        scaleY: 1 / y
                    },
                    x = A + 4,
                    w = v + 4;
                if (a.WebGLUtils.isEnabled) l = a.WebGLUtils.drawFigures(A, v, o, s, S), h = c.getCanvas("mesh", x, w, !1), h.context.drawImage(l, 2, 2), l = h.canvas;
                else {
                    h = c.getCanvas("mesh", x, w, !1);
                    var _ = h.context,
                        T = _.createImageData(A, v);
                    if (o) {
                        var C = T.data;
                        for (u = 0, d = C.length; u < d; u += 4) C[u] = o[0], C[u + 1] = o[1], C[u + 2] = o[2], C[u + 3] = 255
                    }
                    for (u = 0; u < s.length; u++) e(T, s[u], S);
                    _.putImageData(T, 2, 2), l = h.canvas
                }
                return {
                    canvas: l,
                    offsetX: f - 2 * b,
                    offsetY: p - 2 * y,
                    scaleX: b,
                    scaleY: y
                }
            }
            return n
        }();
        s.Mesh = {
            fromIR: function(t) {
                var e = t[2],
                    n = t[3],
                    r = t[4],
                    a = t[5],
                    s = t[6],
                    c = t[8];
                return {
                    type: "Pattern",
                    getPattern: function(t, l, h) {
                        var u;
                        if (h) u = i.Util.singularValueDecompose2dScale(t.mozCurrentTransform);
                        else if (u = i.Util.singularValueDecompose2dScale(l.baseTransform), s) {
                            var d = i.Util.singularValueDecompose2dScale(s);
                            u = [u[0] * d[0], u[1] * d[1]]
                        }
                        var f = o(a, u, e, n, r, h ? null : c, l.cachedCanvases);
                        return h || (t.setTransform.apply(t, l.baseTransform), s && t.transform.apply(t, s)), t.translate(f.offsetX, f.offsetY), t.scale(f.scaleX, f.scaleY), t.createPattern(f.canvas, "no-repeat")
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
            function t(t, e, n, r, a) {
                this.operatorList = t[2], this.matrix = t[3] || [1, 0, 0, 1, 0, 0], this.bbox = i.Util.normalizeRect(t[4]), this.xstep = t[5], this.ystep = t[6], this.paintType = t[7], this.tilingType = t[8], this.color = e, this.canvasGraphicsFactory = r, this.baseTransform = a, this.type = "Pattern", this.ctx = n
            }
            var e = {
                COLORED: 1,
                UNCOLORED: 2
            };
            return t.prototype = {
                createPatternCanvas: function(t) {
                    var e = this.operatorList,
                        n = this.bbox,
                        r = this.xstep,
                        a = this.ystep,
                        s = this.paintType,
                        o = this.tilingType,
                        c = this.color,
                        l = this.canvasGraphicsFactory;
                    (0, i.info)("TilingType: " + o);
                    var h = n[0],
                        u = n[1],
                        d = n[2],
                        f = n[3],
                        p = [h, u],
                        g = [h + r, u + a],
                        m = g[0] - p[0],
                        A = g[1] - p[1],
                        v = i.Util.singularValueDecompose2dScale(this.matrix),
                        b = i.Util.singularValueDecompose2dScale(this.baseTransform),
                        y = [v[0] * b[0], v[1] * b[1]];
                    m = Math.min(Math.ceil(Math.abs(m * y[0])), 3e3), A = Math.min(Math.ceil(Math.abs(A * y[1])), 3e3);
                    var S = t.cachedCanvases.getCanvas("pattern", m, A, !0),
                        x = S.context,
                        w = l.createCanvasGraphics(x);
                    w.groupLevel = t.groupLevel, this.setFillAndStrokeStyleToContext(x, s, c), this.setScale(m, A, r, a), this.transformToScale(w);
                    var _ = [1, 0, 0, 1, -p[0], -p[1]];
                    return w.transform.apply(w, _), this.clipBbox(w, n, h, u, d, f), w.executeOperatorList(e), S.canvas
                },
                setScale: function(t, e, n, r) {
                    this.scale = [t / n, e / r]
                },
                transformToScale: function(t) {
                    var e = this.scale,
                        n = [e[0], 0, 0, e[1], 0, 0];
                    t.transform.apply(t, n)
                },
                scaleToContext: function() {
                    var t = this.scale;
                    this.ctx.scale(1 / t[0], 1 / t[1])
                },
                clipBbox: function(t, e, n, r, a, s) {
                    if ((0, i.isArray)(e) && 4 === e.length) {
                        var o = a - n,
                            c = s - r;
                        t.ctx.rect(n, r, o, c), t.clip(), t.endPath()
                    }
                },
                setFillAndStrokeStyleToContext: function(t, n, r) {
                    switch (n) {
                        case e.COLORED:
                            var a = this.ctx;
                            t.fillStyle = a.fillStyle, t.strokeStyle = a.strokeStyle;
                            break;
                        case e.UNCOLORED:
                            var s = i.Util.makeCssRgb(r[0], r[1], r[2]);
                            t.fillStyle = s, t.strokeStyle = s;
                            break;
                        default:
                            (0, i.error)("Unsupported paint type: " + n)
                    }
                },
                getPattern: function(t, e) {
                    var n = this.createPatternCanvas(e);
                    return t = this.ctx, t.setTransform.apply(t, this.baseTransform), t.transform.apply(t, this.matrix), this.scaleToContext(), t.createPattern(n, "repeat")
                }
            }, t
        }();
        e.getShadingPatternFromIR = r, e.TilingPattern = c
    }, function(t, e, n) {
        "use strict";
        var r = n(0),
            i = n(9),
            a = n(3),
            s = n(5),
            o = n(2),
            c = n(1),
            l = n(4);
        e.PDFJS = i.PDFJS, e.build = a.build, e.version = a.version, e.getDocument = a.getDocument, e.PDFDataRangeTransport = a.PDFDataRangeTransport, e.PDFWorker = a.PDFWorker, e.renderTextLayer = s.renderTextLayer, e.AnnotationLayer = o.AnnotationLayer, e.CustomStyle = c.CustomStyle, e.createPromiseCapability = r.createPromiseCapability, e.PasswordResponses = r.PasswordResponses, e.InvalidPDFException = r.InvalidPDFException, e.MissingPDFException = r.MissingPDFException, e.SVGGraphics = l.SVGGraphics, e.UnexpectedResponseException = r.UnexpectedResponseException, e.OPS = r.OPS, e.UNSUPPORTED_FEATURES = r.UNSUPPORTED_FEATURES, e.isValidUrl = c.isValidUrl, e.createValidAbsoluteUrl = r.createValidAbsoluteUrl, e.createObjectURL = r.createObjectURL, e.removeNullCharacters = r.removeNullCharacters, e.shadow = r.shadow, e.createBlob = r.createBlob, e.RenderingCancelledException = c.RenderingCancelledException, e.getFilenameFromUrl = c.getFilenameFromUrl, e.addLinkAttributes = c.addLinkAttributes
    }, function(t, e, n) {
        "use strict";
        (function(t) {
            var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            if ("undefined" == typeof PDFJS || !PDFJS.compatibilityChecked) {
                var n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : void 0,
                    r = "undefined" != typeof navigator && navigator.userAgent || "",
                    i = /Android/.test(r),
                    a = /Android\s[0-2][^\d]/.test(r),
                    s = /Android\s[0-4][^\d]/.test(r),
                    o = r.indexOf("Chrom") >= 0,
                    c = /Chrome\/(39|40)\./.test(r),
                    l = r.indexOf("CriOS") >= 0,
                    h = r.indexOf("Trident") >= 0,
                    u = /\b(iPad|iPhone|iPod)(?=;)/.test(r),
                    d = r.indexOf("Opera") >= 0,
                    f = /Safari\//.test(r) && !/(Chrome\/|Android\s)/.test(r),
                    p = "object" === ("undefined" == typeof window ? "undefined" : e(window)) && "object" === ("undefined" == typeof document ? "undefined" : e(document));
                "undefined" == typeof PDFJS && (n.PDFJS = {}), PDFJS.compatibilityChecked = !0,
                    function() {
                        function t(t, e) {
                            return new o(this.slice(t, e))
                        }

                        function r(t, e) {
                            arguments.length < 2 && (e = 0);
                            for (var n = 0, r = t.length; n < r; ++n, ++e) this[e] = 255 & t[n]
                        }

                        function i(t, e) {
                            this.buffer = t, this.byteLength = t.length, this.length = e, s(this.length)
                        }

                        function a(t) {
                            return {
                                get: function() {
                                    var e = this.buffer,
                                        n = t << 2;
                                    return (e[n] | e[n + 1] << 8 | e[n + 2] << 16 | e[n + 3] << 24) >>> 0
                                },
                                set: function(e) {
                                    var n = this.buffer,
                                        r = t << 2;
                                    n[r] = 255 & e, n[r + 1] = e >> 8 & 255, n[r + 2] = e >> 16 & 255, n[r + 3] = e >>> 24 & 255
                                }
                            }
                        }

                        function s(t) {
                            for (; c < t;) Object.defineProperty(i.prototype, c, a(c)), c++
                        }

                        function o(n) {
                            var i, a, s;
                            if ("number" == typeof n)
                                for (i = [], a = 0; a < n; ++a) i[a] = 0;
                            else if ("slice" in n) i = n.slice(0);
                            else
                                for (i = [], a = 0, s = n.length; a < s; ++a) i[a] = n[a];
                            return i.subarray = t, i.buffer = i, i.byteLength = i.length, i.set = r, "object" === (void 0 === n ? "undefined" : e(n)) && n.buffer && (i.buffer = n.buffer), i
                        }
                        if ("undefined" != typeof Uint8Array) return void 0 === Uint8Array.prototype.subarray && (Uint8Array.prototype.subarray = function(t, e) {
                            return new Uint8Array(this.slice(t, e))
                        }, Float32Array.prototype.subarray = function(t, e) {
                            return new Float32Array(this.slice(t, e))
                        }), void("undefined" == typeof Float64Array && (n.Float64Array = Float32Array));
                        i.prototype = Object.create(null);
                        var c = 0;
                        n.Uint8Array = o, n.Int8Array = o, n.Int32Array = o, n.Uint16Array = o, n.Float32Array = o, n.Float64Array = o, n.Uint32Array = function() {
                            if (3 === arguments.length) {
                                if (0 !== arguments[1]) throw new Error("offset !== 0 is not supported");
                                return new i(arguments[0], arguments[2])
                            }
                            return o.apply(this, arguments)
                        }
                    }(),
                    function() {
                        if (p && window.CanvasPixelArray) {
                            var t = window.CanvasPixelArray.prototype;
                            "buffer" in t || (Object.defineProperty(t, "buffer", {
                                get: function() {
                                    return this
                                },
                                enumerable: !1,
                                configurable: !0
                            }), Object.defineProperty(t, "byteLength", {
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
                            var t = !0;
                            try {
                                p && Object.defineProperty(new Image, "id", {
                                    value: "test"
                                });
                                var e = function() {};
                                e.prototype = {
                                    get id() {}
                                }, Object.defineProperty(new e, "id", {
                                    value: "",
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !1
                                })
                            } catch (e) {
                                t = !1
                            }
                            if (t) return
                        }
                        Object.defineProperty = function(t, e, n) {
                            delete t[e], "get" in n && t.__defineGetter__(e, n.get), "set" in n && t.__defineSetter__(e, n.set), "value" in n && (t.__defineSetter__(e, function(t) {
                                return this.__defineGetter__(e, function() {
                                    return t
                                }), t
                            }), t[e] = n.value)
                        }
                    }(),
                    function() {
                        if ("undefined" != typeof XMLHttpRequest) {
                            var t = XMLHttpRequest.prototype,
                                e = new XMLHttpRequest;
                            if ("overrideMimeType" in e || Object.defineProperty(t, "overrideMimeType", {
                                    value: function(t) {}
                                }), !("responseType" in e)) {
                                if (Object.defineProperty(t, "responseType", {
                                        get: function() {
                                            return this._responseType || "text"
                                        },
                                        set: function(t) {
                                            "text" !== t && "arraybuffer" !== t || (this._responseType = t, "arraybuffer" === t && "function" == typeof this.overrideMimeType && this.overrideMimeType("text/plain; charset=x-user-defined"))
                                        }
                                    }), "undefined" != typeof VBArray) return void Object.defineProperty(t, "response", {
                                    get: function() {
                                        return "arraybuffer" === this.responseType ? new Uint8Array(new VBArray(this.responseBody).toArray()) : this.responseText
                                    }
                                });
                                Object.defineProperty(t, "response", {
                                    get: function() {
                                        if ("arraybuffer" !== this.responseType) return this.responseText;
                                        var t, e = this.responseText,
                                            n = e.length,
                                            r = new Uint8Array(n);
                                        for (t = 0; t < n; ++t) r[t] = 255 & e.charCodeAt(t);
                                        return r.buffer
                                    }
                                })
                            }
                        }
                    }(),
                    function() {
                        if (!("btoa" in n)) {
                            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                            n.btoa = function(e) {
                                var n, r, i = "";
                                for (n = 0, r = e.length; n < r; n += 3) {
                                    var a = 255 & e.charCodeAt(n),
                                        s = 255 & e.charCodeAt(n + 1),
                                        o = 255 & e.charCodeAt(n + 2),
                                        c = a >> 2,
                                        l = (3 & a) << 4 | s >> 4,
                                        h = n + 1 < r ? (15 & s) << 2 | o >> 6 : 64,
                                        u = n + 2 < r ? 63 & o : 64;
                                    i += t.charAt(c) + t.charAt(l) + t.charAt(h) + t.charAt(u)
                                }
                                return i
                            }
                        }
                    }(),
                    function() {
                        if (!("atob" in n)) {
                            n.atob = function(t) {
                                if (t = t.replace(/=+$/, ""), t.length % 4 == 1) throw new Error("bad atob input");
                                for (var e, n, r = 0, i = 0, a = ""; n = t.charAt(i++); ~n && (e = r % 4 ? 64 * e + n : n, r++ % 4) ? a += String.fromCharCode(255 & e >> (-2 * r & 6)) : 0) n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(n);
                                return a
                            }
                        }
                    }(),
                    function() {
                        void 0 === Function.prototype.bind && (Function.prototype.bind = function(t) {
                            var e = this,
                                n = Array.prototype.slice.call(arguments, 1);
                            return function() {
                                var r = n.concat(Array.prototype.slice.call(arguments));
                                return e.apply(t, r)
                            }
                        })
                    }(),
                    function() {
                        if (p) {
                            "dataset" in document.createElement("div") || Object.defineProperty(HTMLElement.prototype, "dataset", {
                                get: function() {
                                    if (this._dataset) return this._dataset;
                                    for (var t = {}, e = 0, n = this.attributes.length; e < n; e++) {
                                        var r = this.attributes[e];
                                        if ("data-" === r.name.substring(0, 5)) {
                                            t[r.name.substring(5).replace(/\-([a-z])/g, function(t, e) {
                                                return e.toUpperCase()
                                            })] = r.value
                                        }
                                    }
                                    return Object.defineProperty(this, "_dataset", {
                                        value: t,
                                        writable: !1,
                                        enumerable: !1
                                    }), t
                                },
                                enumerable: !0
                            })
                        }
                    }(),
                    function() {
                        function t(t, e, n, r) {
                            var i = t.className || "",
                                a = i.split(/\s+/g);
                            "" === a[0] && a.shift();
                            var s = a.indexOf(e);
                            return s < 0 && n && a.push(e), s >= 0 && r && a.splice(s, 1), t.className = a.join(" "), s >= 0
                        }
                        if (p) {
                            if (!("classList" in document.createElement("div"))) {
                                var e = {
                                    add: function(e) {
                                        t(this.element, e, !0, !1)
                                    },
                                    contains: function(e) {
                                        return t(this.element, e, !1, !1)
                                    },
                                    remove: function(e) {
                                        t(this.element, e, !1, !0)
                                    },
                                    toggle: function(e) {
                                        t(this.element, e, !0, !0)
                                    }
                                };
                                Object.defineProperty(HTMLElement.prototype, "classList", {
                                    get: function() {
                                        if (this._classList) return this._classList;
                                        var t = Object.create(e, {
                                            element: {
                                                value: this,
                                                writable: !1,
                                                enumerable: !0
                                            }
                                        });
                                        return Object.defineProperty(this, "_classList", {
                                            value: t,
                                            writable: !1,
                                            enumerable: !1
                                        }), t
                                    },
                                    enumerable: !0
                                })
                            }
                        }
                    }(),
                    function() {
                        if (!("undefined" == typeof importScripts || "console" in n)) {
                            var t = {},
                                e = {
                                    log: function() {
                                        var t = Array.prototype.slice.call(arguments);
                                        n.postMessage({
                                            targetName: "main",
                                            action: "console_log",
                                            data: t
                                        })
                                    },
                                    error: function() {
                                        var t = Array.prototype.slice.call(arguments);
                                        n.postMessage({
                                            targetName: "main",
                                            action: "console_error",
                                            data: t
                                        })
                                    },
                                    time: function(e) {
                                        t[e] = Date.now()
                                    },
                                    timeEnd: function(e) {
                                        var n = t[e];
                                        if (!n) throw new Error("Unknown timer name " + e);
                                        this.log("Timer:", e, Date.now() - n)
                                    }
                                };
                            n.console = e
                        }
                    }(),
                    function() {
                        if (p) "console" in window ? "bind" in console.log || (console.log = function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }(console.log), console.error = function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }(console.error), console.warn = function(t) {
                            return function(e) {
                                return t(e)
                            }
                        }(console.warn)) : window.console = {
                            log: function() {},
                            error: function() {},
                            warn: function() {}
                        }
                    }(),
                    function() {
                        function t(t) {
                            e(t.target) && t.stopPropagation()
                        }

                        function e(t) {
                            return t.disabled || t.parentNode && e(t.parentNode)
                        }
                        d && document.addEventListener("click", t, !0)
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
                            if (window.CanvasPixelArray) "function" != typeof window.CanvasPixelArray.prototype.set && (window.CanvasPixelArray.prototype.set = function(t) {
                                for (var e = 0, n = this.length; e < n; e++) this[e] = t[e]
                            });
                            else {
                                var t, e = !1;
                                if (o ? (t = r.match(/Chrom(e|ium)\/([0-9]+)\./), e = t && parseInt(t[2]) < 21) : i ? e = s : f && (t = r.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//), e = t && parseInt(t[1]) < 6), e) {
                                    var n = window.CanvasRenderingContext2D.prototype,
                                        a = n.createImageData;
                                    n.createImageData = function(t, e) {
                                        var n = a.call(this, t, e);
                                        return n.data.set = function(t) {
                                            for (var e = 0, n = this.length; e < n; e++) this[e] = t[e]
                                        }, n
                                    }, n = null
                                }
                            }
                    }(),
                    function() {
                        function t() {
                            window.requestAnimationFrame = function(t) {
                                return window.setTimeout(t, 20)
                            }, window.cancelAnimationFrame = function(t) {
                                window.clearTimeout(t)
                            }
                        }
                        if (p) u ? t() : "requestAnimationFrame" in window || (window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame || t())
                    }(),
                    function() {
                        (u || i) && (PDFJS.maxCanvasPixels = 5242880)
                    }(),
                    function() {
                        p && h && window.parent !== window && (PDFJS.disableFullscreen = !0)
                    }(),
                    function() {
                        p && ("currentScript" in document || Object.defineProperty(document, "currentScript", {
                            get: function() {
                                var t = document.getElementsByTagName("script");
                                return t[t.length - 1]
                            },
                            enumerable: !0,
                            configurable: !0
                        }))
                    }(),
                    function() {
                        if (p) {
                            var t = document.createElement("input");
                            try {
                                t.type = "number"
                            } catch (r) {
                                var e = t.constructor.prototype,
                                    n = Object.getOwnPropertyDescriptor(e, "type");
                                Object.defineProperty(e, "type", {
                                    get: function() {
                                        return n.get.call(this)
                                    },
                                    set: function(t) {
                                        n.set.call(this, "number" === t ? "text" : t)
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                })
                            }
                        }
                    }(),
                    function() {
                        if (p && document.attachEvent) {
                            var t = document.constructor.prototype,
                                e = Object.getOwnPropertyDescriptor(t, "readyState");
                            Object.defineProperty(t, "readyState", {
                                get: function() {
                                    var t = e.get.call(this);
                                    return "interactive" === t ? "loading" : t
                                },
                                set: function(t) {
                                    e.set.call(this, t)
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
                        if (n.Promise) return "function" != typeof n.Promise.all && (n.Promise.all = function(t) {
                            var e, r, i = 0,
                                a = [],
                                s = new n.Promise(function(t, n) {
                                    e = t, r = n
                                });
                            return t.forEach(function(t, n) {
                                i++, t.then(function(t) {
                                    a[n] = t, 0 === --i && e(a)
                                }, r)
                            }), 0 === i && e(a), s
                        }), "function" != typeof n.Promise.resolve && (n.Promise.resolve = function(t) {
                            return new n.Promise(function(e) {
                                e(t)
                            })
                        }), "function" != typeof n.Promise.reject && (n.Promise.reject = function(t) {
                            return new n.Promise(function(e, n) {
                                n(t)
                            })
                        }), void("function" != typeof n.Promise.prototype.catch && (n.Promise.prototype.catch = function(t) {
                            return n.Promise.prototype.then(void 0, t)
                        }));
                        var t = 2,
                            e = {
                                handlers: [],
                                running: !1,
                                unhandledRejections: [],
                                pendingRejectionCheck: !1,
                                scheduleHandlers: function(t) {
                                    0 !== t._status && (this.handlers = this.handlers.concat(t._handlers), t._handlers = [], this.running || (this.running = !0, setTimeout(this.runHandlers.bind(this), 0)))
                                },
                                runHandlers: function() {
                                    for (var e = Date.now() + 1; this.handlers.length > 0;) {
                                        var n = this.handlers.shift(),
                                            r = n.thisPromise._status,
                                            i = n.thisPromise._value;
                                        try {
                                            1 === r ? "function" == typeof n.onResolve && (i = n.onResolve(i)) : "function" == typeof n.onReject && (i = n.onReject(i), r = 1, n.thisPromise._unhandledRejection && this.removeUnhandeledRejection(n.thisPromise))
                                        } catch (e) {
                                            r = t, i = e
                                        }
                                        if (n.nextPromise._updateStatus(r, i), Date.now() >= e) break
                                    }
                                    if (this.handlers.length > 0) return void setTimeout(this.runHandlers.bind(this), 0);
                                    this.running = !1
                                },
                                addUnhandledRejection: function(t) {
                                    this.unhandledRejections.push({
                                        promise: t,
                                        time: Date.now()
                                    }), this.scheduleRejectionCheck()
                                },
                                removeUnhandeledRejection: function(t) {
                                    t._unhandledRejection = !1;
                                    for (var e = 0; e < this.unhandledRejections.length; e++) this.unhandledRejections[e].promise === t && (this.unhandledRejections.splice(e), e--)
                                },
                                scheduleRejectionCheck: function() {
                                    this.pendingRejectionCheck || (this.pendingRejectionCheck = !0, setTimeout(function() {
                                        this.pendingRejectionCheck = !1;
                                        for (var t = Date.now(), e = 0; e < this.unhandledRejections.length; e++)
                                            if (t - this.unhandledRejections[e].time > 500) {
                                                var n = this.unhandledRejections[e].promise._value,
                                                    r = "Unhandled rejection: " + n;
                                                n.stack && (r += "\n" + n.stack);
                                                try {
                                                    throw new Error(r)
                                                } catch (t) {
                                                    console.warn(r)
                                                }
                                                this.unhandledRejections.splice(e), e--
                                            } this.unhandledRejections.length && this.scheduleRejectionCheck()
                                    }.bind(this), 500))
                                }
                            },
                            r = function(t) {
                                this._status = 0, this._handlers = [];
                                try {
                                    t.call(this, this._resolve.bind(this), this._reject.bind(this))
                                } catch (t) {
                                    this._reject(t)
                                }
                            };
                        r.all = function(e) {
                            function n(e) {
                                s._status !== t && (c = [], a(e))
                            }
                            var i, a, s = new r(function(t, e) {
                                    i = t, a = e
                                }),
                                o = e.length,
                                c = [];
                            if (0 === o) return i(c), s;
                            for (var l = 0, h = e.length; l < h; ++l) {
                                var u = e[l],
                                    d = function(e) {
                                        return function(n) {
                                            s._status !== t && (c[e] = n, 0 === --o && i(c))
                                        }
                                    }(l);
                                r.isPromise(u) ? u.then(d, n) : d(u)
                            }
                            return s
                        }, r.isPromise = function(t) {
                            return t && "function" == typeof t.then
                        }, r.resolve = function(t) {
                            return new r(function(e) {
                                e(t)
                            })
                        }, r.reject = function(t) {
                            return new r(function(e, n) {
                                n(t)
                            })
                        }, r.prototype = {
                            _status: null,
                            _value: null,
                            _handlers: null,
                            _unhandledRejection: null,
                            _updateStatus: function(n, i) {
                                if (1 !== this._status && this._status !== t) {
                                    if (1 === n && r.isPromise(i)) return void i.then(this._updateStatus.bind(this, 1), this._updateStatus.bind(this, t));
                                    this._status = n, this._value = i, n === t && 0 === this._handlers.length && (this._unhandledRejection = !0, e.addUnhandledRejection(this)), e.scheduleHandlers(this)
                                }
                            },
                            _resolve: function(t) {
                                this._updateStatus(1, t)
                            },
                            _reject: function(e) {
                                this._updateStatus(t, e)
                            },
                            then: function(t, n) {
                                var i = new r(function(t, e) {
                                    this.resolve = t, this.reject = e
                                });
                                return this._handlers.push({
                                    thisPromise: this,
                                    onResolve: t,
                                    onReject: n,
                                    nextPromise: i
                                }), e.scheduleHandlers(this), i
                            },
                            catch: function(t) {
                                return this.then(void 0, t)
                            }
                        }, n.Promise = r
                    }(),
                    function() {
                        function t() {
                            this.id = "$weakmap" + e++
                        }
                        if (!n.WeakMap) {
                            var e = 0;
                            t.prototype = {
                                has: function(t) {
                                    return !!Object.getOwnPropertyDescriptor(t, this.id)
                                },
                                get: function(t, e) {
                                    return this.has(t) ? t[this.id] : e
                                },
                                set: function(t, e) {
                                    Object.defineProperty(t, this.id, {
                                        value: e,
                                        enumerable: !1,
                                        configurable: !0
                                    })
                                },
                                delete: function(t) {
                                    delete t[this.id]
                                }
                            }, n.WeakMap = t
                        }
                    }(),
                    function() {
                        function t(t) {
                            return void 0 !== d[t]
                        }

                        function r() {
                            c.call(this), this._isInvalid = !0
                        }

                        function i(t) {
                            return "" === t && r.call(this), t.toLowerCase()
                        }

                        function a(t) {
                            var e = t.charCodeAt(0);
                            return e > 32 && e < 127 && -1 === [34, 35, 60, 62, 63, 96].indexOf(e) ? t : encodeURIComponent(t)
                        }

                        function s(t) {
                            var e = t.charCodeAt(0);
                            return e > 32 && e < 127 && -1 === [34, 35, 60, 62, 96].indexOf(e) ? t : encodeURIComponent(t)
                        }

                        function o(e, n, o) {
                            function c(t) {
                                b.push(t)
                            }
                            var l = n || "scheme start",
                                h = 0,
                                u = "",
                                A = !1,
                                v = !1,
                                b = [];
                            t: for (;
                                (e[h - 1] !== p || 0 === h) && !this._isInvalid;) {
                                var y = e[h];
                                switch (l) {
                                    case "scheme start":
                                        if (!y || !g.test(y)) {
                                            if (n) {
                                                c("Invalid scheme.");
                                                break t
                                            }
                                            u = "", l = "no scheme";
                                            continue
                                        }
                                        u += y.toLowerCase(), l = "scheme";
                                        break;
                                    case "scheme":
                                        if (y && m.test(y)) u += y.toLowerCase();
                                        else {
                                            if (":" !== y) {
                                                if (n) {
                                                    if (y === p) break t;
                                                    c("Code point not allowed in scheme: " + y);
                                                    break t
                                                }
                                                u = "", h = 0, l = "no scheme";
                                                continue
                                            }
                                            if (this._scheme = u, u = "", n) break t;
                                            t(this._scheme) && (this._isRelative = !0), l = "file" === this._scheme ? "relative" : this._isRelative && o && o._scheme === this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                                        }
                                        break;
                                    case "scheme data":
                                        "?" === y ? (this._query = "?", l = "query") : "#" === y ? (this._fragment = "#",
                                            l = "fragment") : y !== p && "\t" !== y && "\n" !== y && "\r" !== y && (this._schemeData += a(y));
                                        break;
                                    case "no scheme":
                                        if (o && t(o._scheme)) {
                                            l = "relative";
                                            continue
                                        }
                                        c("Missing scheme."), r.call(this);
                                        break;
                                    case "relative or authority":
                                        if ("/" !== y || "/" !== e[h + 1]) {
                                            c("Expected /, got: " + y), l = "relative";
                                            continue
                                        }
                                        l = "authority ignore slashes";
                                        break;
                                    case "relative":
                                        if (this._isRelative = !0, "file" !== this._scheme && (this._scheme = o._scheme), y === p) {
                                            this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = o._query, this._username = o._username, this._password = o._password;
                                            break t
                                        }
                                        if ("/" === y || "\\" === y) "\\" === y && c("\\ is an invalid code point."), l = "relative slash";
                                        else if ("?" === y) this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = "?", this._username = o._username, this._password = o._password, l = "query";
                                        else {
                                            if ("#" !== y) {
                                                var S = e[h + 1],
                                                    x = e[h + 2];
                                                ("file" !== this._scheme || !g.test(y) || ":" !== S && "|" !== S || x !== p && "/" !== x && "\\" !== x && "?" !== x && "#" !== x) && (this._host = o._host, this._port = o._port, this._username = o._username, this._password = o._password, this._path = o._path.slice(), this._path.pop()), l = "relative path";
                                                continue
                                            }
                                            this._host = o._host, this._port = o._port, this._path = o._path.slice(), this._query = o._query, this._fragment = "#", this._username = o._username, this._password = o._password, l = "fragment"
                                        }
                                        break;
                                    case "relative slash":
                                        if ("/" !== y && "\\" !== y) {
                                            "file" !== this._scheme && (this._host = o._host, this._port = o._port, this._username = o._username, this._password = o._password), l = "relative path";
                                            continue
                                        }
                                        "\\" === y && c("\\ is an invalid code point."), l = "file" === this._scheme ? "file host" : "authority ignore slashes";
                                        break;
                                    case "authority first slash":
                                        if ("/" !== y) {
                                            c("Expected '/', got: " + y), l = "authority ignore slashes";
                                            continue
                                        }
                                        l = "authority second slash";
                                        break;
                                    case "authority second slash":
                                        if (l = "authority ignore slashes", "/" !== y) {
                                            c("Expected '/', got: " + y);
                                            continue
                                        }
                                        break;
                                    case "authority ignore slashes":
                                        if ("/" !== y && "\\" !== y) {
                                            l = "authority";
                                            continue
                                        }
                                        c("Expected authority, got: " + y);
                                        break;
                                    case "authority":
                                        if ("@" === y) {
                                            A && (c("@ already seen."), u += "%40"), A = !0;
                                            for (var w = 0; w < u.length; w++) {
                                                var _ = u[w];
                                                if ("\t" !== _ && "\n" !== _ && "\r" !== _)
                                                    if (":" !== _ || null !== this._password) {
                                                        var T = a(_);
                                                        null !== this._password ? this._password += T : this._username += T
                                                    } else this._password = "";
                                                else c("Invalid whitespace in authority.")
                                            }
                                            u = ""
                                        } else {
                                            if (y === p || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                                h -= u.length, u = "", l = "host";
                                                continue
                                            }
                                            u += y
                                        }
                                        break;
                                    case "file host":
                                        if (y === p || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                            2 !== u.length || !g.test(u[0]) || ":" !== u[1] && "|" !== u[1] ? 0 === u.length ? l = "relative path start" : (this._host = i.call(this, u), u = "", l = "relative path start") : l = "relative path";
                                            continue
                                        }
                                        "\t" === y || "\n" === y || "\r" === y ? c("Invalid whitespace in file host.") : u += y;
                                        break;
                                    case "host":
                                    case "hostname":
                                        if (":" !== y || v) {
                                            if (y === p || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                                if (this._host = i.call(this, u), u = "", l = "relative path start", n) break t;
                                                continue
                                            }
                                            "\t" !== y && "\n" !== y && "\r" !== y ? ("[" === y ? v = !0 : "]" === y && (v = !1), u += y) : c("Invalid code point in host/hostname: " + y)
                                        } else if (this._host = i.call(this, u), u = "", l = "port", "hostname" === n) break t;
                                        break;
                                    case "port":
                                        if (/[0-9]/.test(y)) u += y;
                                        else {
                                            if (y === p || "/" === y || "\\" === y || "?" === y || "#" === y || n) {
                                                if ("" !== u) {
                                                    var C = parseInt(u, 10);
                                                    C !== d[this._scheme] && (this._port = C + ""), u = ""
                                                }
                                                if (n) break t;
                                                l = "relative path start";
                                                continue
                                            }
                                            "\t" === y || "\n" === y || "\r" === y ? c("Invalid code point in port: " + y) : r.call(this)
                                        }
                                        break;
                                    case "relative path start":
                                        if ("\\" === y && c("'\\' not allowed in path."), l = "relative path", "/" !== y && "\\" !== y) continue;
                                        break;
                                    case "relative path":
                                        if (y !== p && "/" !== y && "\\" !== y && (n || "?" !== y && "#" !== y)) "\t" !== y && "\n" !== y && "\r" !== y && (u += a(y));
                                        else {
                                            "\\" === y && c("\\ not allowed in relative path.");
                                            var k;
                                            (k = f[u.toLowerCase()]) && (u = k), ".." === u ? (this._path.pop(), "/" !== y && "\\" !== y && this._path.push("")) : "." === u && "/" !== y && "\\" !== y ? this._path.push("") : "." !== u && ("file" === this._scheme && 0 === this._path.length && 2 === u.length && g.test(u[0]) && "|" === u[1] && (u = u[0] + ":"), this._path.push(u)), u = "", "?" === y ? (this._query = "?", l = "query") : "#" === y && (this._fragment = "#", l = "fragment")
                                        }
                                        break;
                                    case "query":
                                        n || "#" !== y ? y !== p && "\t" !== y && "\n" !== y && "\r" !== y && (this._query += s(y)) : (this._fragment = "#", l = "fragment");
                                        break;
                                    case "fragment":
                                        y !== p && "\t" !== y && "\n" !== y && "\r" !== y && (this._fragment += y)
                                }
                                h++
                            }
                        }

                        function c() {
                            this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
                        }

                        function l(t, e) {
                            void 0 === e || e instanceof l || (e = new l(String(e))), this._url = t, c.call(this);
                            var n = t.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                            o.call(this, n, null, e)
                        }
                        var h = !1;
                        try {
                            if ("function" == typeof URL && "object" === e(URL.prototype) && "origin" in URL.prototype) {
                                var u = new URL("b", "http://a");
                                u.pathname = "c%20d", h = "http://a/c%20d" === u.href
                            }
                        } catch (t) {}
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
                                    var t = "";
                                    return "" === this._username && null === this._password || (t = this._username + (null !== this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + t + this.host : "") + this.pathname + this._query + this._fragment
                                },
                                set href(t) {
                                    c.call(this), o.call(this, t)
                                },
                                get protocol() {
                                    return this._scheme + ":"
                                },
                                set protocol(t) {
                                    this._isInvalid || o.call(this, t + ":", "scheme start")
                                },
                                get host() {
                                    return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                                },
                                set host(t) {
                                    !this._isInvalid && this._isRelative && o.call(this, t, "host")
                                },
                                get hostname() {
                                    return this._host
                                },
                                set hostname(t) {
                                    !this._isInvalid && this._isRelative && o.call(this, t, "hostname")
                                },
                                get port() {
                                    return this._port
                                },
                                set port(t) {
                                    !this._isInvalid && this._isRelative && o.call(this, t, "port")
                                },
                                get pathname() {
                                    return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                                },
                                set pathname(t) {
                                    !this._isInvalid && this._isRelative && (this._path = [], o.call(this, t, "relative path start"))
                                },
                                get search() {
                                    return this._isInvalid || !this._query || "?" === this._query ? "" : this._query
                                },
                                set search(t) {
                                    !this._isInvalid && this._isRelative && (this._query = "?", "?" === t[0] && (t = t.slice(1)), o.call(this, t, "query"))
                                },
                                get hash() {
                                    return this._isInvalid || !this._fragment || "#" === this._fragment ? "" : this._fragment
                                },
                                set hash(t) {
                                    this._isInvalid || (this._fragment = "#", "#" === t[0] && (t = t.slice(1)), o.call(this, t, "fragment"))
                                },
                                get origin() {
                                    var t;
                                    if (this._isInvalid || !this._scheme) return "";
                                    switch (this._scheme) {
                                        case "data":
                                        case "file":
                                        case "javascript":
                                        case "mailto":
                                            return "null"
                                    }
                                    return t = this.host, t ? this._scheme + "://" + t : ""
                                }
                            };
                            var A = n.URL;
                            A && (l.createObjectURL = function(t) {
                                return A.createObjectURL.apply(A, arguments)
                            }, l.revokeObjectURL = function(t) {
                                A.revokeObjectURL(t)
                            }), n.URL = l
                        }
                    }()
            }
        }).call(e, n(6))
    }])
});
