//Version 2.1.0.9
var DopPresentation = function (gobal_events, global_options) {
    function loadPres(t, i) {
        function e(t, i) {
            return -1 !== t.indexOf(i, t.length - i.length)
        }
        i = isNaN(i) ? 1 : parseInt(i, 10),
            gc = i || 1,
            gv.b = i,
        isNaN(gc) && (gc = 1),
            gc = 1 > gc ? 1 : gc,
            _events.a();
        for (var s = document.getElementsByTagName("head")[0], n = s.getElementsByTagName("script"), a = 0; a < n.length; a++) e(n[a].src, "scriptInit.js") && s.removeChild(n[a]);
        var c = gv.o("DopFontFamily");
        c && s.removeChild(c);
        var r = document.createElement("script");
        r.setAttribute("type", "text/javascript"),
            gv.a = t,
            r.src = gv.d + t + "/scriptInit.js",
            s.appendChild(r)
    }
    function loadContent(t, i, e) {
        function s() {
            function t() {
                if (clearTimeout(gli), !cfc.l(gc)) return void(gli = setTimeout(t, 100));
                acc.t(),
                    gpc === gc ? gStartTime = gtct - gslength[gc - 1] : gc > gpc ? gStartTime -= gslength[gc - 1] - anima["s" + gpc].f : gpc > gc && (gStartTime += anima["s" + gpc].f - gslength[gc - 1]),
                    gt = gslength[gc - 1],
                    cfc.hf.add(gc);
                var i = ShowPlayButton();
                i || ncc.y()
            }
            if (0 !== gv.m.length && !gv.mo) return void setTimeout(s, 5);
            if (n(), gv.bs) {
                if (addMedia(i), gc !== i) return
            } else addMedia(gc);
            t()
        }
        function n() {
            function t(t, i) {
                for (var s = e(i), n = t.parentNode, a = s.length, c = a - 1; c >= 0; c--) {
                    var r = s[c];
                    n.insertBefore(r, t),
                        t = r
                }
            }
            function i(t, i) {
                for (var s = e(i); s.length > 0;) {
                    var n = s[0];
                    t.appendChild(n)
                }
            }
            function e(t) {
                var i = document.createElement("div");
                return i.innerHTML = t,
                    i.childNodes
            }
            if (0 !== gv.m.length) for (var s = 1; s <= gv.t; s++) {
                var n = gv.m[s - 1],
                    a = n[0],
                    c = n[1],
                    r = gv.o("s" + s + "s0");
                if (r) {
                    var o = r.getElementsByTagName("div"),
                        d = 0 === a ? "" : gv.mo["m" + a],
                        l = 0 === c ? "" : gv.mo["l" + c],
                        h = d + l;
                    if (o.length > 0) {
                        var f = o[0];
                        t(f, h)
                    } else i(r, h)
                }
            }
        }
        var a = gv.o("resizer"),
            c = a.getAttribute("style");
        c += "-moz-font-feature-settings: 'liga' 0;-ms-font-feature-settings: 'liga' 0;-o-font-feature-settings: 'liga' 0;font-feature-settings: 'liga' 0;text-rendering: optimizeSpeed;-webkit-font-variant-ligatures: no-common-ligatures;font-variant-ligatures:no-common-ligatures;",
            a.setAttribute("style", c);
        var r = gv.o("giItT1WQy");
        if (r && r.parentNode.removeChild(r), gv.bs || (a.innerHTML = "", a.innerHTML = e.join("")), a.innerHTML += gv.e, "" !== document.createElement("detect").style.textShadow) for (var o = document.getElementsByTagName("pre"), d = o.length, l = 0; d > l; l++) if ("transparent" === o[l].style.color) {
            var h = o[l].getAttribute("style"),
                f = h.indexOf("rgba");
            0 > f || (h = h.substring(f, h.length), o[l].style.color = h.substring(0, h.indexOf(")") + 1))
        }
        gc = gc > gv.t ? gv.t : gc,
            s()
    }
    function loadMaster(t) {
        gv.mo = t
    }
    function addSlideShapes(t) {
        0 === gln && (gln = 1, _events.a());
        var i = document.getElementsByTagName("head")[0],
            e = document.createElement("script");
        return 0 !== gv.m.length && (e = document.createElement("script"), e.setAttribute("charset", "UTF-8"), e.setAttribute("src", gv.d + gv.a + "/master/slideVault.js"), i.appendChild(e)),
            gv.bs ? void loadContent("", t, "") : (e = document.createElement("script"), e.setAttribute("charset", "UTF-8"), e.setAttribute("src", gv.d + gv.a + "/slideVault.js"), void i.appendChild(e))
    }
    function ShowPlayButton(t) {
        function i() {
            var t = document.createElement("div");
            t.onclick = function () {
                ncc.y(),
                    this.style.display = "none";
                try {
                    caS.play(),
                        caS.pause()
                } catch (t) {}
            },
                t.style.width = "100%",
                t.style.height = "100%";
            var i = '<svg version="1.1" x="0px" y="0px" width="256px" height="256px" viewBox="0 0 314.068 314.068" style="position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);-webkit-transform:translate(-50%, -50%);" xml:space="preserve"> <g id="_x33_56._Play"> <g> <path d="M293.002,78.53C249.646,3.435,153.618-22.296,78.529,21.068C3.434,64.418-22.298,160.442,21.066,235.534 c43.35,75.095,139.375,100.83,214.465,57.47C310.627,249.639,336.371,153.62,293.002,78.53z M219.834,265.801 c-60.067,34.692-136.894,14.106-171.576-45.973C13.568,159.761,34.161,82.935,94.23,48.26 c60.071-34.69,136.894-14.106,171.578,45.971C300.493,154.307,279.906,231.117,219.834,265.801z M213.555,150.652l-82.214-47.949 c-7.492-4.374-13.535-0.877-13.493,7.789l0.421,95.174c0.038,8.664,6.155,12.191,13.669,7.851l81.585-47.103 C221.029,162.082,221.045,155.026,213.555,150.652z"/></g></g></svg>';
            t.innerHTML = i,
                gv.o("resizer").appendChild(t)
        }
        var e = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (0 === gv.p) return !1;
        if (!e && -1 === gv.p) return !1;
        var s = !1,
            n = anima["s" + gc];
        for (var a in n.c) if ("i" !== a) {
            var c = n.c[a];
            for (var r in c) if ("i" !== r && (animation = c[r], typeof animation.c6 !== _undefined && 5 !== animation.c5 && 6 !== animation.c5 && 7 !== animation.c5 && 8 !== animation.c5 && 9 !== animation.c5 && 0 !== animation.c5)) {
                s = !0;
                break
            }
            if (s) break
        }
        return s || 1 === gv.p ? (i(), !0) : !1
    }
    function play() {
        gStartTime += (new Date).getTime() - gtct,
            gpp = 0,
            gafi = UpdategT(),
        0 !== gafi && (gp = 1, _events.S())
    }
    function pause() {
        gpp = 1,
            gp = 0,
            _events.s()
    }
    function addMedia(t, i) {
        for (var e = i ? t : t - 2, s = i ? t + 1 : t + 5; s > e; e++) if (gv.bs && (e = t), !(1 > e || e > gv.t)) {
            if (gv.bs && anima["s" + e].s.c) return;
            if (!(gv.i[e] < 1)) {
                var n = gv.o("s" + e + "s0"),
                    a = n.getElementsByTagName("img");
                a[0].src = gv.d + gv.a + "/sb" + gv.i[e] + gv.c;
                for (var c = 1; c < a.length; c++) {
                    var r = a[c],
                        o = r.getAttribute("data-ext");
                    switch (o) {
                        case "jpg":
                            o = ".jpg";
                            break;
                        case "gif":
                            o = ".gif";
                            break;
                        default:
                            o = ".png"
                    }
                    var d = r.parentNode,
                        l = "";
                    d.id.indexOf("m") > -1 && (l = "/master"),
                        r.src = gv.d + gv.a + l + "/" + d.id.replace("c", "") + o
                }
                for (var h = n.getElementsByTagName("video"), c = 0; c < h.length; c++) {
                    var f, p = h[c],
                        d = p.parentNode,
                        u = d.parentNode.id,
                        v = d.getElementsByTagName("img");
                    v.length > 0 && d.removeChild(v[0]),
                        f = -1 !== p.id.indexOf("narration") ? "narration" + e : "v" + u;
                    var m = document.createElement("video");
                    m.style.height = p.height + "px",
                        m.style.width = p.width + "px",
                        m.setAttribute("id", f),
                        m.setAttribute("controls", ""),
                        m.controls = !0,
                        m.dopLoaded = 0,
                        m.addEventListener("canplaythrough", function () {
                            this.dopLoaded = 1
                        }, !1),
                        m.addEventListener("error", function () {
                            this.dopLoaded = 1
                        }, !1),
                        "mp3" === gv.v ? m.setAttribute("src", gv.d + gv.a + "/" + f + ".mp4") : m.setAttribute("src", gv.d + gv.a + "/" + f + ".ogg"),
                        m.setAttribute("poster", gv.d + gv.a + "/" + u + ".png"),
                        m.style.backgroundImage = "url(" + gv.d + gv.a + "/" + u + ".png)",
                        m.setAttribute("preload", ""),
                        m.setAttribute("webkit-playsinline", ""),
                        d.removeChild(p),
                        d.appendChild(m),
                        m.onplay = function () {
                            video(this)
                        },
                        m.onclick = function (t) {
                            t.preventDefault()
                        };
                    try {
                        m.load()
                    } catch (g) {
                        m.dopLoaded = 1
                    }
                }
                for (var y = n.getElementsByTagName("audio"), c = 0; c < y.length; c++) {
                    var S = y[c],
                        d = S.parentNode,
                        b = document.createElement("audio");
                    b.dopLoaded = 0,
                        b.addEventListener("canplaythrough", function () {
                            this.dopLoaded = 1
                        }, !1),
                        b.addEventListener("error", function () {
                            this.dopLoaded = 1
                        }, !1),
                        "mp3" === gv.v ? b.setAttribute("src", gv.d + gv.a + "/a" + d.id + ".mp3") : b.setAttribute("src", gv.d + gv.a + "/a" + d.id + ".ogg"),
                        b.setAttribute("id", "a" + d.id),
                        b.setAttribute("preload", ""),
                        d.removeChild(S),
                        d.appendChild(b);
                    try {
                        b.load()
                    } catch (g) {
                        b.dopLoaded = 1
                    }
                }
                var C = anima["s" + e],
                    w = C.c;
                for (var A in w) if ("i" !== A) for (var V in w[A]) if ("i" !== V && typeof w[A][V].c6 !== _undefined && 5 !== w[A][V].c5 && 6 !== w[A][V].c5 && 7 !== w[A][V].c5 && 8 !== w[A][V].c5 && 9 !== w[A][V].c5 && 0 !== w[A][V].c5) {
                    var M = document.createElement("audio");
                    M.dopLoaded = 0,
                        M.addEventListener("canplaythrough", function () {
                            this.dopLoaded = 1
                        }, !1),
                        M.addEventListener("error", function () {
                            this.dopLoaded = 1
                        }, !1),
                        M.setAttribute("id", w[A][V].c6);
                    var o = "mp3" === gv.v ? ".mp3" : ".ogg";
                    M.setAttribute("src", gv.d + gv.a + "/" + w[A][V].c6 + o),
                        M.setAttribute("preload", ""),
                        n.appendChild(M);
                    try {
                        M.load()
                    } catch (g) {
                        M.dopLoaded = 1
                    }
                }
                C.s.c = !0,
                    processLink(e),
                    gv.i[e] = 0
            }
        }
    }
    function processLink(t) {
        function i(t) {
            t.getElementsByTagName("video").length > 0 ? t.DopPhVdo = !0 : t.getElementsByTagName("audio").length > 0 && (t.DopPhAdo = !0)
        }
        function e(t) {
            var i = document.createElement("a");
            i.setAttribute("style", t.getAttribute("style")),
                i.innerHTML = t.innerHTML,
                i.className = "DopPhAnchor " + t.className;
            try {
                n(i, t)
            } catch (e) {}
            var s = t.parentNode;
            s.appendChild(i),
                s.removeChild(t)
        }
        function s(t) {
            var i = t.childNodes,
                e = t;
            "div" === i[0].tagName.toLowerCase() && (e = i[0]);
            var s = document.createElement("a");
            s.setAttribute("style", "height:100%;width:100%;top:0px;left:0px;"),
                s.innerHTML = e.innerHTML,
                s.className = "DopPhAnchor";
            try {
                n(s, t)
            } catch (a) {}
            t.setAttribute("onclick", ""),
                e.innerHTML = "",
                e.appendChild(s)
        }
        function n(t, i) {
            var e = document.createElement("div");
            e.innerHTML = i.onclick;
            var s = e.innerHTML,
                n = s.split(",");
            "2" === n[1] ? (t.setAttribute("target", "_blank"), t.href = gv.d + gv.a + "/" + n[2].split("'")[1]) : "1" === n[1] ? (t.setAttribute("target", "_blank"), t.href = n[2].split("'")[1]) : "0" === n[1] && (t.DopPhGoto = n[2].split(")")[0], t.setAttribute("onclick", ""), t.onclick = function (t) {
                    hwr(t.target, 0, n[2].split(")")[0])
                })
        }
        function a(t, i) {
            for (var e = [], s = t.getElementsByTagName("*"), n = 0; n < s.length; n++) s[n].getAttribute(i) && (e[e.length] = s[n]);
            return e
        }
        for (var c = gv.o("s" + t + "s0"), r = a(c, "onclick"), o = r.length - 1; o >= 0; o--) {
            var d = r[o];
            "pre" === d.tagName.toLowerCase() ? e(d) : "div" === d.tagName.toLowerCase() && (d.getElementsByTagName("video").length > 0 || d.getElementsByTagName("audio").length > 0 ? i(d) : s(d)),
                d.removeAttribute("onclick")
        }
    }
    function scormGoTo(t) {
        "" !== t && (gc = parseInt(t))
    }
    function RListener(t) {
        return 0 !== gv.q ? void(t.style.opacity = .7) : void(gv.o("resizer").onclick = null)
    }
    function AListener(t) {
        return 0 !== gv.q ? void(t.style.opacity = 1) : void(1 === gv.g && (gv.o("resizer").onclick = ncc.n))
    }
    function hwr(element, urlType, hyperlink) {
        var divElement = element.getElementsByTagName("div");
        if (divElement.length > 0) {
            if ("0" === DOPStyle.s(divElement[0], "opacity") && 0 === element.getElementsByTagName("canvas").length) return
        } else if ("0" === DOPStyle.s(element.parentNode, "opacity") && 0 === element.parentNode.parentNode.getElementsByTagName("canvas").length) return;
        if (1 === urlType && window.open(hyperlink), 0 === urlType) if (0 === customGoto.length) ncc.z(hyperlink);
        else try {
                eval(customGoto.replace("%%slideindex%%", hyperlink))
            } catch (e) {}
    }
    function GetCurrentXYSlide(t) {
        var i = gv.w,
            e = gv.h,
            s = parseInt(t.sV.d.style.left),
            n = parseInt(t.sV.d.style.top),
            a = t.sV.w,
            c = t.sV.h;
        switch (t.c.s0) {
            case 1:
                t.dX = s,
                    t.dY = -1 * c;
                break;
            case 2:
                t.dX = i,
                    t.dY = n;
                break;
            case 3:
                t.dX = s,
                    t.dY = e;
                break;
            case 4:
                t.dX = -1 * a,
                    t.dY = n;
                break;
            case 6:
                t.dX = -1 * a,
                    t.dY = -1 * c;
                break;
            case 7:
                t.dX = i,
                    t.dY = -1 * c;
                break;
            case 8:
                t.dX = i,
                    t.dY = e;
                break;
            case 9:
                t.dX = -1 * a,
                    t.dY = e
        }
        if (t.fX = s, t.fY = n, 2 == t.c.c4) {
            var r = t.fY;
            t.fY = t.dY,
                t.dY = r,
                r = t.fX,
                t.fX = t.dX,
                t.dX = r
        }
    }
    function todec(t) {
        return Math.min(255, Math.round(256 * t))
    }
    function hsv2color(t, i, e) {
        var s, n, a, c = Math.floor(t / 60 % 6),
            r = t / 60 - c,
            o = e * (1 - i),
            d = e * (1 - r * i),
            l = e * (1 - (1 - r) * i);
        switch (c) {
            case 0:
                s = e,
                    n = l,
                    a = o;
                break;
            case 1:
                s = d,
                    n = e,
                    a = o;
                break;
            case 2:
                s = o,
                    n = e,
                    a = l;
                break;
            case 3:
                s = o,
                    n = d,
                    a = e;
                break;
            case 4:
                s = l,
                    n = o,
                    a = e;
                break;
            case 5:
                s = e,
                    n = o,
                    a = d
        }
        return s = todec(s),
            n = todec(n),
            a = todec(a),
            [s, n, a]
    }
    function rgb2hsv(t) {
        r = t[0] / 255,
            g = t[1] / 255,
            b = t[2] / 255;
        var i, e, s, n = Math.min(Math.min(r, g), b),
            a = Math.max(Math.max(r, g), b);
        switch (i = a - n, a) {
            case n:
                e = 0;
                break;
            case r:
                e = 60 * (g - b) / i,
                g < b && (e += 360);
                break;
            case g:
                e = 60 * (b - r) / i + 120;
                break;
            case b:
                e = 60 * (r - g) / i + 240
        }
        s = 0 === a ? 0 : 1 - n / a;
        var c = [Math.round(e), s, a];
        return c
    }
    function tranend(t) {
        if (pause(), 1 !== t) return gStartTime -= gslength[gc - 1] + anima["s" + gc].t.i - gt,
            void play();
        gx = 0;
        var i = gv.o("s" + gpc + "s0");
        gpc != gc && null != i && (i.style.display = "none"),
        gpc > gc && null != i && (i.style.zIndex = "0");
        for (var e = gv.o("resizer").parentNode, s = e.getElementsByTagName("embed"), n = s.length - 1; n >= 0; n--) {
            var a = parseInt(s[n].id.split("s")[1]);
            a == gc ? s[n].style.display = "block" : s[n].style.display = "none"
        }
        gpc = 0;
        var c = gt - (gslength[gc - 1] + anima["s" + gc].t.i);
        gtct -= c,
            anima["s" + gc].f === gslength[gc - 1] ? (anima["s" + gc].f = gslength[gc - 1] + anima["s" + gc].t.i, gt = anima["s" + gc].f) : (gStartTime -= anima["s" + gc].f - (gslength[gc - 1] + anima["s" + gc].t.i), gt = anima["s" + gc].f),
            gobal_events.OnProgressChange(gt),
            anima["s" + gc].f === gslength[gc - 1] + anima["s" + gc].t.i ? 1 === anima["s" + gc].t.n && 0 === anima["s" + gc].g && ("undefined" == typeof gv.z.playAnimationsOnLoad || gv.z.playAnimationsOnLoad) && (stepToGoto.s > -1 ? StepToGotoHelper() : (acc.P(), play())) : -1 == acc.g.indexOf(anima["s" + gc].f) && anima["s" + gc].f != gslength[gc] && (stepToGoto.s > -1 ? StepToGotoHelper() : (acc.P(), play())),
            StepToGotoHelper()
    }
    function StepToGotoHelper() {
        function t(i, s) {
            return "undefined" == typeof s && (s = e()),
                i === s ? void(stepToGoto.l = 0) : (i > s ? (s++, ncc.n()) : (s--, ncc.p()), void setTimeout(function () {
                    t(i, s)
                }, 50))
        }
        function i(i) {
            anima["s" + gc].g = 0,
                ncc.r(gc),
                cfc.m(),
                anima["s" + gc].f = gt = gslength[gc - 1],
                gStartTime -= gslength[gc - 1] - anima["s" + gc].f,
                acc.t(),
                ncc.y(),
            0 === anima["s" + gc].t.n && tranend(),
                t(i, 0)
        }
        function e() {
            return 1 === gp ? anima["s" + gc].g + 1 : anima["s" + gc].g
        }
        function s(t) {
            stepToGoto.l = 0;
            var i = acc.c(),
                e = anima["s" + gc];
            if (e.t.n && i++, 0 !== i) {
                t > i ? t = i : 1 > t && (t = 0);
                var e = anima["s" + gc],
                    s = e.t.i;
                anima["s" + gc].g = t - 1;
                var n = anima["s" + gc].f,
                    a = acc.g[t - 2];
                a || (a = s > 0 ? acc.g[0] - s : gslength[gc - 1]),
                    gStartTime -= a - n,
                    acc.P(),
                    play()
            }
        }
        if (!(stepToGoto.s < 0)) {
            var n = dopPresentation.c();
            if (0 === n) return stepToGoto.s = -1,
                void(stepToGoto.l = 0);
            var a = stepToGoto.s;
            if (stepToGoto.s = -1, a = a > n ? n : a, a = 0 > a ? 0 : a, !stepToGoto.p) return void s(a);
            var c = e();
            a > c ? t(a, c) : i(a)
        }
    }
    function video(t) {
        if (0 != gv.v) {
            var i = t.getElementsByTagName("img");
            i.length > 0 && (i[0].style.display = "none");
            var e = t.tagName.toLowerCase();
            if ("video" === e) return t.play(),
                void cfc.a(t, 1);
            var s = t.getElementsByTagName("video")[0];
            s.style.backgroundImage = "",
                s.paused ? (s.play(), cfc.a(s, 1)) : s.pause()
        }
    }
    function audio(t) {
        var i = t.getElementsByTagName("audio")[0];
        0 != gv.v && "undefined" != typeof i.play && (i.paused ? (i.play(), cfc.a(i, 1)) : (i.pause(), i.currentTime = 0))
    }
    var gc = 1,
        gd = 0,
        gli = 0,
        gln = 0,
        gpc = 1,
        au = [],
        gx = 0,
        gxf = !1,
        gt = 0,
        gpp = 1,
        gp = 0,
        gStartTime = 0,
        gtct = 0,
        gafi = 0,
        gplength = 0,
        gslength = [],
        fcon = 0,
        objDopPhSco, _undefined = "undefined",
        gft = [],
        stepToGoto = {
            s: -1,
            p: 1,
            l: 0
        },
        anima, gv = {
            n: 0,
            o: function (t) {
                return document.getElementById(t)
            }
        },
        init = function () {
            function l(t) {
                for (var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), e = 0; e < i.length; e++) v[i[e]] = e;
                t = t.replace(new RegExp("[^" + i.join("") + "=]", "g"), "");
                var s = "=" == t.charAt(t.length - 1) ? "=" == t.charAt(t.length - 2) ? "AA" : "A" : "",
                    n = "";
                t = t.substr(0, t.length - s.length) + s;
                for (var a = 0; a < t.length; a += 4) {
                    var c = (v[t.charAt(a)] << 18) + (v[t.charAt(a + 1)] << 12) + (v[t.charAt(a + 2)] << 6) + v[t.charAt(a + 3)];
                    n += String.fromCharCode(c >>> 16 & 255, c >>> 8 & 255, 255 & c)
                }
                return n.substring(0, n.length - s.length)
            }
            function k(t) {
                return t.substring(0, t.indexOf("{"))
            }
            function m(t) {
                return t.substring(t.indexOf("{") + 1)
            }
            function j(s) {
                return eval(s)
            }
            function w(t) {
                return document.createElement(t)
            }
            function x(t, i) {
                return i.appendChild(t)
            }
            function u(t, i, e) {
                t.setAttribute(i, e)
            }
            function cTs(t) {
                var i = document.createElement("div");
                return i.appendChild(t),
                    i.innerHTML
            }
            function siv() {
                gslength[0] = 0;
                for (var t = 1; t <= gv.t; t++) {
                    var i = anima["s" + t];
                    i.f = gslength[t] = gslength[t - 1],
                        gslength[t] += i.t.i;
                    var e = i.c;
                    if (0 !== e) for (var s in e) typeof e[s].i !== _undefined && (gslength[t] += e[s].i)
                }
                gplength = gslength[gslength.length - 1]
            }
            function pan_Zoom(t, i) {
                if (gv.dz) return !1;
                var e = t.touches.length;
                return 1 === e ? pan(t, i) : 2 === e ? (zoom(i), !0) : !1
            }
            function pan(t, i) {
                function e(t) {
                    var e = t.touches[0].clientX,
                        l = t.touches[0].clientY,
                        h = c + (e - n),
                        f = r + (l - a);
                    h = h > 0 ? 0 : h,
                        f = f > 0 ? 0 : f;
                    var p = o * s + f - o * gv.r,
                        u = d * s + h - d * gv.r;
                    f = 0 > p ? f - p : f,
                        h = 0 > u ? h - u : h,
                        i.style.left = h + "px",
                        i.style.top = f + "px",
                        t.preventDefault(),
                        this.ontouchend = function () {
                            this.ontouchmove = null,
                                this.ontouchend = null
                        }
                }
                var s = parseFloat(i.style.webkitTransform.split("(")[1].split(")")[0]);
                if (s.toFixed(2) === gv.r.toFixed(2)) return !1;
                var n = t.touches[0].clientX,
                    a = t.touches[0].clientY,
                    c = parseFloat(i.style.left),
                    r = parseFloat(i.style.top),
                    o = parseFloat(i.style.height),
                    d = parseFloat(i.style.width);
                return this.ontouchmove = e,
                    !0
            }
            function zoom(t) {
                var i = parseFloat(t.style.webkitTransform.split("(")[1].split(")")[0]),
                    e = i,
                    s = null,
                    n = parseFloat(t.style.height),
                    a = parseFloat(t.style.width),
                    c = parseFloat(t.style.left),
                    r = parseFloat(t.style.top);
                this.ontouchend = function () {
                    this.ontouchmove = null,
                        this.ontouchend = null
                },
                    this.ontouchmove = function (o) {
                        var d = o.touches.length;
                        if (2 === d) {
                            o.preventDefault();
                            var l = o.touches[0].clientX,
                                h = o.touches[1].clientX,
                                f = o.touches[0].clientY,
                                p = o.touches[1].clientY,
                                u = l - h,
                                v = f - p,
                                m = Math.pow(u, 2) + Math.pow(v, 2);
                            if (m = Math.sqrt(m), null === s) return void(s = m);
                            var g = e,
                                y = (m - s) / (m + s);
                            e = i + y,
                                e = 0 > e ? 0 : e,
                                e = gv.r > e ? gv.r : e;
                            var S = (l + h) / 2,
                                b = (f + p) / 2,
                                C = qSC.findPos(t),
                                w = (S - C[0]) / g,
                                A = (b - C[1]) / g,
                                V = w * (e - g),
                                M = A * (e - g),
                                k = c - V,
                                T = r - M;
                            k = k > 0 ? 0 : k,
                                T = T > 0 ? 0 : T;
                            var I = n * e + T - n * gv.r,
                                x = a * e + k - a * gv.r;
                            k = 0 > x ? k - x : k,
                                T = 0 > I ? T - I : T,
                                c = k,
                                r = T,
                                t.style.left = k + "px",
                                t.style.top = T + "px",
                                t.style.webkitTransform = "scale(" + e + ")"
                        } else s = null
                    }
            }
            function CreateOutlineJson() {
                function t(t) {
                    var i = {};
                    if (null === t) return gv.ol = 0,
                        void _events.o(i);
                    for (var e = t.getElementsByTagName("Outline")[0], s = e.getElementsByTagName("sld"), n = 0, a = s.length; a > n; n++) {
                        var c = i["slide" + (n + 1)] = {};
                        c.title = "",
                            c.para = [];
                        for (var r = s[n], o = r.getElementsByTagName("shp"), d = 0, l = o.length; l > d; d++) for (var h = o[d], f = h.getElementsByTagName("para"), p = 0, u = f.length; u > p; p++) {
                            var v = f[p],
                                m = v.getAttribute("txt"),
                                g = h.getAttribute("lvl");
                            "1" === g ? (c.title.length > 0 && (c.title += " "), c.title += m) : c.para[c.para.length] = m
                        }
                    }
                    gv.ol = i,
                        _events.o(i)
                }
                if (0 !== gv.ol) {
                    var i = gv.d + gv.a + "/outline.xml";
                    try {
                        presenter.lxf(i, t)
                    } catch (e) {
                        gv.ol = 0
                    }
                }
            }
            var v = {},
                y = {},
                globals = function (t, i, e) {
                    function s(t) {
                        function i(t, i) {
                            var e = "s" + t + "s0";
                            try {
                                for (; i.id !== e;) {
                                    if ("a" === i.tagName.toLowerCase()) return i.href;
                                    i = i.parentNode
                                }
                            } catch (s) {
                                return ""
                            }
                            return ""
                        }
                        function e(t, i) {
                            var e = "s" + t + "s0";
                            try {
                                for (; i.id != e;) {
                                    if (i.DopPhGoto || i.DopPhVdo || i.DopPhAdo) return i;
                                    i = i.parentNode
                                }
                            } catch (s) {
                                return ""
                            }
                            return ""
                        }
                        var s = i(gc, t.target);
                        if ("" === s) {
                            var n = e(gc, t.target);
                            if (n.DopPhGoto) hwr(n, 0, n.DopPhGoto);
                            else if (n.DopPhVdo) video(n);
                            else {
                                if (!n.DopPhAdo) return !0;
                                audio(n)
                            }
                        } else try {
                            window.open(s, "_blank")
                        } catch (a) {}
                    }
                    gv.fn = i,
                        y.t = t.substring(0, 5),
                        t = t.substring(5),
                        y.i = k(t),
                        t = m(t);
                    var n = k(t),
                        a = l(n);
                    if (y.a = j(a), t = m(t), n = k(t), a = l(n), y.f = a, t = m(t), y.s = l(t), j(y.f), stepToGoto.s > -1) {
                        var c = stepToGoto.s,
                            r = anima["s" + gc],
                            o = r.t.n,
                            d = acc.c();
                        o && (d++, c++),
                            c = c > d ? d : c,
                            c = 0 > c ? 0 : c,
                            stepToGoto.s = c
                    }
                    cfc.f(e, gft),
                        CreateOutlineJson(),
                        siv();
                    var h;
                    try {
                        _events.i(cfc.dl())
                    } catch (f) {}
                    try {
                        0 != gv.s && (h = presenter.loadXml("courseInfo.xml"), Player.SetPresenterDetails(h))
                    } catch (p) {}
                    if (0 != gv.q) if (typeof zenler !== _undefined) {
                        var u = zenler.GetStringFromCurrentNode();
                        qSC.loadXmlFrmTxt(u)
                    } else gv.q.zXml = "";
                    var v = gv.o("resizer");
                    if (v.style.backgroundColor = gv.bc, 0 !== gv.s && (objDopPhSco = new DopPhSco(gv.s), objDopPhSco.Load()), 0 !== gv.q) {
                        var g = document.createElement("link");
                        g.setAttribute("rel", "stylesheet"),
                            g.setAttribute("href", gv.d + gv.a + "/template.css"),
                            document.getElementsByTagName("head")[0].appendChild(g),
                        0 === gv.s && (qsh.initQuestionStruct(), qSC.loadQuizFromXml())
                    }
                    try {
                        document.createEvent("TouchEvent"),
                            gd = "ontouchstart" in window ? 1 : 0
                    } catch (S) {
                        gd = 0
                    }
                    1 === gd ? 0 === gv.q ? v.ontouchstart = function (t) {
                        function i(t) {
                            return t.changedTouches[0].clientX
                        }
                        if (!pan_Zoom(t, this)) {
                            var e = i(t);
                            v.ontouchend = function (n) {
                                var a = i(n);
                                v.ontouchmove = v.ontouchend = null,
                                    e - a > 100 && 1 === gv.j ? ncc.n() : -100 > e - a && 1 === gv.j ? ncc.p() : Math.abs(e - a) < 10 && s(t)
                            }
                        }
                    } : v.ontouchstart = null : 0 === gv.q && 1 === gv.g ? v.onclick = function (t) {
                        t.preventDefault(),
                        s(t) && ncc.n()
                    } : v.onclick = null,
                        0 === gv.q && 1 === gv.k ? document.body.onkeydown = function (t) {
                            var i;
                            t || (t = window.event),
                                t.keyCode ? i = t.keyCode : t.which && (i = t.which),
                            (39 === i || 40 === i) && ncc.n(),
                            (37 === i || 38 === i) && ncc.p()
                        } : document.body.onkeydown = null,
                        addSlideShapes(gc),
                        _events.c(gc)
                };
            return globals
        }();
    Cbfun = function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (t) {
                return window.setTimeout(t, 1e3 / 60)
            }
    }(),
        UpdategT = function () {
            if (1 === gpp) return null;
            if (gtct = (new Date).getTime(), gt = gtct - gStartTime, _events.t(gt), 1 === gx) {
                if (gt >= gslength[gc - 1] + anima["s" + gc].t.i) {
                    if (gxf) return gxf = !1,
                        tranend(1),
                    gslength[gc] <= gt && _events.e(gc),
                        0;
                    gxf = !0
                }
                return gafi = Cbfun(UpdategT),
                    null
            }
            if (anima["s" + gc].f = gt, gt >= acc.g[anima["s" + gc].g]) {
                pause();
                var t = gt - acc.g[anima["s" + gc].g];
                return gtct -= t,
                    anima["s" + gc].f = gt = acc.g[anima["s" + gc].g],
                    anima["s" + gc].g++,
                    1 === fcon ? (typeof acc.g[anima["s" + gc].g] != _undefined && (_events.n(anima["s" + gc].g), acc.P(), play()), fcon = 0) : 1 == anima["s" + gc].a && (typeof acc.g[anima["s" + gc].g] != _undefined ? (acc.P(), play()) : ncc.n()),
                gslength[gc] <= gt && _events.e(gc),
                    0
            }
            return gafi = Cbfun(UpdategT),
                null
        },
        AnCl = function () {
            function initAnimation(animationStep, time) {
                console.trace(animationStep , time);
                for (var index in animationStep) if ("i" !== index) switch (animationStep[index].c4) {
                    case 1:
                    case 2:
                        if (0 === animationStep[index].v) {
                            if (typeof window[animationStep[index].c5] !== _undefined) {
                                var animation = {};
                                animation = gv.n ? eval(gv.n) : eval(animationStep[index].c5),
                                    animationStep[index].v = new animation(animationStep[index])
                            } else animationStep[index].v = new Fade(animationStep[index]);
                            animationStep[index].v.Initialize(time)
                        }
                        break;
                    case 3:
                        if (0 === animationStep[index].v) {
                            if (typeof window[animationStep[index].c5] !== _undefined) {
                                var animation = eval(animationStep[index].c5);
                                animationStep[index].v = new animation(animationStep[index])
                            } else animationStep[index].v = new Spin(animationStep[index]);
                            animationStep[index].v.Initialize(time)
                        }
                        break;
                    case 4:
                        if (0 === animationStep[index].v) {
                            var animation = eval(animationStep[index].c5);
                            animationStep[index].v = new animation(animationStep[index]),
                                animationStep[index].v.Initialize(time)
                        }
                        break;
                    case 5:
                        if (0 === animationStep[index].v) switch (animationStep[index].c5) {
                            case 5:
                                animationStep[index].v = new aVideo(animationStep[index], time);
                                break;
                            case 6:
                                animationStep[index].v = new aVideo(animationStep[index], time);
                                break;
                            case 7:
                                animationStep[index].v = new aVideo(animationStep[index], time)
                        }
                        break;
                    case 8:
                        if (0 === animationStep[index].v) switch (animationStep[index].c5) {
                            case 8:
                                animationStep[index].v = new aaudio(animationStep[index], time);
                                break;
                            case 9:
                                animationStep[index].v = new aaudio(animationStep[index], time);
                                break;
                            case 0:
                                animationStep[index].v = new aaudio(animationStep[index], time)
                        }
                        break;
                    case "n":
                        animationStep[index].v = new autoAdvance(animationStep[index])
                }
            }
            var _this = this;
            _this.g = new Array,
                _this.P = function () {
                    for (var t = _this.l(_this.g), i = 0; i < t.length; i++) t[i].IniTSd && t[i].play()
                },
                _this.p = function () {
                    for (var t = _this.l(_this.g), i = 0; i < t.length; i++) t[i].IniTSd && t[i].pause()
                },
                _this.s = function () {
                    for (var t = _this.l(_this.g), i = 0; i < t.length; i++) t[i].IniTSd && t[i].stop()
                },
                _this.r = function () {
                    for (var t = _this.l(_this.g), i = 0; i < t.length; i++) t[i].IniTSd && t[i].reset()
                },
                this.l = function (t) {
                    var i = new Array,
                        e = anima["s" + gc],
                        s = e.g,
                        n = e.c,
                        a = n["c" + s];
                    for (var c in a)"i" !== c && (0 === a[c].v && initAnimation(a, t[s] - a.i), i[i.length] = a[c].v);
                    return i
                },
                _this.t = function () {
                    _this.g.splice(0, _this.g.length);
                    var t = anima["s" + gc],
                        i = t.t.i,
                        e = t.c;
                    if (0 !== e) for (var s in e)"i" !== s && (i += e[s].i, _this.g[_this.g.length] = gslength[gc - 1] + i);
                    else _this.g[0] = 0
                },
                this.c = function (t) {
                    t = parseInt(t),
                    t || (t = gc),
                        t = t > gv.t ? gv.t : t,
                        t = 1 > t ? 1 : t;
                    var i = 0;
                    return anima["s" + t].c && (i = anima["s" + t].c.i),
                        i -= anima["s" + t].t.n
                }
        };
    var acc = new AnCl;
    NvCl = function () {
        function t(t, e) {
            t.p = gv.o("narration" + e);
            try {
                i(t)
            } catch (s) {}
        }
        function i(t) {
            t.p.height = t.h,
                t.p.width = t.w,
                t.p.setAttribute("style", "top:" + t.t + "px;left:" + t.l + "px;position:absolute;"),
                t.p.play()
        }
        this.P = function () {
            return 0 === gp ? acc.g[anima["s" + gc].g] > gt ? (play(), void acc.P()) : void ncc.n() : (pause(), void acc.p())
        },
            this.Ps = function () {
                pause();
                for (var t = au.length - 1; t >= 0; t--) au[t][0].pause()
            },
            this.n = function (t) {
                function i(i) {
                    if (gc < gv.t || 1 === t || i) {
                        if (0 !== gpc || gv.bs || (gpc = gc, cfc.sn(gc), cfc.hf.remove(gc)), 1 !== t) {
                            if (i ? gc = 1 : gc++, gv.bs) return _events.c(gc),
                                void(gc = parseInt(gv.b));
                            addMedia(gc)
                        }
                        if (!cfc.l(gc)) return void(gli = setTimeout(function () {
                            ncc.n(1)
                        }, 50));
                        gv.x && ncc.c(gc),
                            anima["s" + gc].g = 0,
                            ncc.r(gc),
                            cfc.m(),
                            anima["s" + gc].f = gt = gslength[gc - 1],
                            gStartTime -= gslength[gc - 1] - anima["s" + gpc].f,
                            acc.t(),
                            ncc.y(),
                            cfc.hf.add(gc),
                        0 !== gv.s && objDopPhSco.UpdateLesson(gc, gv.t),
                            _events.c(gc)
                    }
                }
                if (1 === gx) return void tranend();
                if (1 !== t && 0 !== gln) {
                    if (gc === gv.t) return;
                    return clearTimeout(gli),
                        void i(!1)
                }
                if (1 !== t && 0 === gln) {
                    if (gslength[gc] <= gt && (anima["s" + gc].g >= acc.g.length || 0 === anima["s" + gc].c)) return gc === gv.t ? (ncc.a(1), void(gv.loop && i(!0))) : (pause(), anima["s" + gc].f < anima["s" + gc].c.i && anima["s" + gc].g++, void i(!1));
                    if (1 === gp) return gStartTime -= acc.g[anima["s" + gc].g] - gt,
                        anima["s" + gc].f = gt = acc.g[anima["s" + gc].g],
                        _events.t(gt),
                        void(fcon = 1);
                    if (acc.g[anima["s" + gc].g] >= gt) {
                        if (1 === gp) pause(),
                            gStartTime = gStartTime + gt - acc.g[anima["s" + gc].g],
                            anima["s" + gc].f = gt = acc.g[anima["s" + gc].g],
                            _events.t(gt),
                            anima["s" + gc].g++;
                        else {
                            _events.n(anima["s" + gc].g),
                                acc.P();
                            for (var e = 0; e < au.length; e++) au[e][0].play();
                            play()
                        }
                        return
                    }
                }
                i(!1)
            },
            this.c = function (t) {
                anima["s" + t].g = 0,
                    ncc.r(t),
                    cfc.m();
                var i = anima["s" + t].f;
                anima["s" + t].f = gslength[t - 1],
                t === gc && (gt = gslength[t - 1], gStartTime -= gslength[t - 1] - i)
            },
            this.r = function (t) {
                function i(t) {
                    if (1 > t || t > gv.t) return [];
                    var i = [],
                        e = anima["s" + t],
                        s = e.c;
                    if (0 !== s) for (n in s) if ("i" !== n) {
                        var a = s[n];
                        for (var c in a) if ("i" !== c) {
                            if (0 === a[c].v) return i;
                            i[i.length] = a[c].v
                        }
                    }
                    return i
                }
                for (var e = i(t), s = e.length - 1; s >= 0; s--) {
                    var a = e[s];
                    a.reset()
                }
            },
            this.p = function (t) {
                function i() {
                    gc > 1 ? e(!1) : gv.loop && e(!0)
                }
                function e(i) {
                    if (clearTimeout(gli), 0 === gpc && (gpc = gc, cfc.sn(gc), cfc.hf.remove(gc)), 1 !== t) {
                        if (i ? gc = gv.t : gc--, gv.bs) return _events.c(gc),
                            void(gc = parseInt(gv.b));
                        _events.c(gc),
                            addMedia(gc)
                    }
                    return cfc.l(gc) ? void s() : void(gli = setTimeout(function () {
                        ncc.p(1)
                    }, 100))
                }
                function s() {
                    gv.x && ncc.c(gc),
                        cfc.hf.add(gc),
                        cfc.m(),
                        acc.t(),
                        gStartTime += anima["s" + gpc].f - gslength[gc - 1],
                        gt = gslength[gc - 1],
                        _events.t(gt),
                        ncc.y()
                }
                if (1 === gx) return void tranend();
                if (1 !== t && 0 !== gln) return 1 === gc ? void ncc.a(0) : void e(!1);
                if (1 !== t && 0 === gln) {
                    var n = anima["s" + gc].g;
                    if (gv.u && 2 > n && anima["s" + gc].t.n) return void i();
                    if (gt - anima["s" + gc].t.i > gslength[gc - 1]) return 1 === gp ? pause() : acc.g.indexOf(gt) > -1 && anima["s" + gc].g--,
                        acc.r(),
                        acc.s(),
                        anima["s" + gc].g > 0 ? (gStartTime += gt - acc.g[anima["s" + gc].g - 1], anima["s" + gc].f = gt = acc.g[anima["s" + gc].g - 1]) : (gStartTime += gt - gslength[gc - 1] - anima["s" + gc].t.i, anima["s" + gc].f = gt = gslength[gc - 1] + anima["s" + gc].t.i),
                        _events.p(anima["s" + gc].g),
                        void _events.t(gt);
                    i()
                }
            },
            this.z = function (t, i) {
                function e(t) {
                    pause(),
                        acc.s(),
                        addMedia(t)
                }
                function s() {
                    return cfc.l(gc) ? (acc.t(), gStartTime -= gslength[gc - 1] - anima["s" + gpc].f, void a()) : void(gli = setTimeout(function () {
                        s()
                    }, 100))
                }
                function n() {
                    return cfc.l(gc) ? (acc.t(), gStartTime += anima["s" + gpc].f - gslength[gc - 1], void a()) : void(gli = setTimeout(function () {
                        n()
                    }, 100))
                }
                function a() {
                    gt = gslength[gc - 1],
                        _events.t(gt),
                        cfc.hf.add(gc),
                        ncc.y(),
                        _events.c(gc)
                }
                function c() {
                    clearTimeout(gli),
                        _events.c(gc),
                        cfc.m()
                }
                if (i || (stepToGoto.l = 0, stepToGoto.s = -1), t = parseInt(t), !isNaN(t) && !gv.bs) if (1 === gx && tranend(1), 0 === gpc && (gpc = gc, cfc.sn(gc), cfc.hf.remove(gc)), t === gv.t || t > gv.t) e(gv.t),
                    gc = gv.t,
                    c(),
                    s();
                else if (t > gc) e(t),
                    gc = t,
                    c(),
                    s();
                else {
                    if (t === gc) return;
                    t > 0 ? (e(t), gc = t, c(), n()) : 0 > t && (e(1), gc = 1, c(), n())
                }
            },
            this.y = function () {
                var i = anima["s" + gc];
                if (typeof i.q !== _undefined) {
                    var e = qsh.initQuestionSlide();
                    if (e > 0) return void ncc.z(e)
                }
                0 !== i.n && t(i.n, gc);
                var s = i.t;
                if (0 !== s.c) 0 === s.v && (s.v = new tran(s.c), s.v.initialize(gslength[gc - 1])),
                    s.v.play(),
                    play();
                else {
                    if (gpc !== gc && gpc > 0) {
                        var n = gv.o("s" + gpc + "s0");
                        null !== n && (gv.o("s" + gpc + "s0").style.display = "none")
                    }
                    gv.o("s" + gc + "s0").style.display = "block",
                        gpc = 0,
                        gt = anima["s" + gc].f,
                        gStartTime -= gt - gslength[gc - 1],
                        _events.t(gt),
                        anima["s" + gc].f === gslength[gc - 1] + anima["s" + gc].t.i ? 1 === anima["s" + gc].t.n && (typeof gv.z.playAnimationsOnLoad === _undefined || gv.z.playAnimationsOnLoad) && (acc.P(), play()) : -1 === acc.g.indexOf(anima["s" + gc].f) && (acc.P(), play())
                }
            },
            this.a = function (t) {
                0 !== gv.s && (objDopPhSco.scormendStatus || objDopPhSco.Quit(), objDopPhSco.scormendStatus = !0),
                typeof loadCourseXml !== _undefined && (1 === t ? _events.c(-1) : _events.c(0))
            }
    };
    var ncc = new NvCl;
    Cfc = function () {
        this.l = function (t) {
            if (1 === gv.asc) return _events.b(gc),
                gln = 0,
                gv.i[t] = -1,
                anima["s" + t].s.d = !0,
                !0;
            if (-1 === gv.i[t]) return 1 === gln ? _events.b(gc) : gln = 0,
                !0;
            if ("" !== window.location.host) {
                var i = gv.o("s" + t + "s0").getElementsByTagName("img");
                try {
                    if (0 === i.length) throw "adsf"
                } catch (e) {}
                for (var s = i.length - 1; s >= 0; s--) if (!i[s].complete) return 0 === gln && _events.a(),
                    gln = 1,
                    !1;
                if (-1 === navigator.platform.indexOf("iPhone") && -1 === navigator.platform.indexOf("iPod") && null === navigator.userAgent.match(/iPad/i)) {
                    for (var n = gv.o("s" + t + "s0").getElementsByTagName("audio"), s = n.length - 1; s >= 0; s--) if (0 === n[s].dopLoaded) return 0 === gln && _events.a(),
                        gln = 1,
                        !1;
                    for (var a = gv.o("s" + t + "s0").getElementsByTagName("video"), s = a.length - 1; s >= 0; s--) if (0 === a[s].dopLoaded) return 0 === gln && _events.a(),
                        gln = 1,
                        !1
                }
            }
            return _events.b(gc),
                gln = 0,
                gv.i[t] = -1,
                anima["s" + t].s.d = !0,
                !0
        },
            this.g = function () {
                var t = {
                        ogg: !1,
                        mp4: !1
                    },
                    i = document.createElement("video");
                try {
                    if (!i.canPlayType) return void(gv.v = 0);
                    0 === gv.v ? t.mp4 = !0 : i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, "") ? t.ogg = !0 : i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, "") && (t.mp4 = !0)
                } catch (e) {
                    return void(gv.v = 0)
                }
                gv.v = t.mp4 ? "mp3" : "ogg"
            },
            this.f = function (t, i) {
                if (0 !== t.length) {
                    var e = document.createElement("style"),
                        s = document.createElement("div");
                    s.id = "giItT1WQy";
                    var n = "giItT1WQy@!-/#";
                    e.setAttribute("type", "text/css"),
                        e.setAttribute("id", "DopFontFamily");
                    for (var a = 0; a < t.length; a++) {
                        var c = 1 === t[a][2] ? 'src: url("' + gv.d + gv.a + "/" + t[a][0] + "." + i + '");' : "",
                            r = 1 === t[a][3] ? "font-weight: bold;" : "",
                            o = 1 === t[a][4] ? "font-style: italic;" : "";
                        e.innerHTML += '@font-face{ font-family: "' + t[a][0] + '";' + c + r + o + "}";
                        var d = document.createElement("pre");
                        d.setAttribute("style", "font-family:" + t[a] + ";color:" + gv.bc + ";"),
                            d.innerHTML = n,
                            s.appendChild(d)
                    }
                    var l = document.getElementsByTagName("head")[0];
                    l.appendChild(e);
                    var h = gv.o("resizer");
                    h.appendChild(s)
                }
            },
            this.a = function (t, i) {
                if (typeof t !== _undefined && typeof t.play !== _undefined) {
                    for (var e = [t, i], s = 0; s < au.length; s++) if (au[s][0].id === t.id) return void(au[s][1] < i && (au[s][1] = i));
                    au[au.length] = e
                }
            },
            this.m = function () {
                function t(t) {
                    if (0 !== gv.v) {
                        var i = au[t][0];
                        try {
                            i.paused || i.pause(),
                            0 !== i.currentTime && (i.currentTime = 0)
                        } catch (e) {}
                    }
                }
                for (var i = 0; i < au.length; i++) 1 === au[i][1] ? (t(i), au.splice(i, 1), i--) : au[i][1]--
            },
            this.dl = function () {
                var t = {};
                try {
                    t.Width = gv.w,
                        t.Height = gv.h,
                        t.TotalSlides = gv.t,
                        t.ShowNotes = gv.fn.length > 0,
                        t.TotalTime = gplength,
                        t.MaxScale = gv.f,
                        t.BackColr = gv.bc
                } catch (i) {
                    t = null
                }
                return t
            },
            this.sn = function (t) {
                var i = gv.o("narration" + t);
                null !== i && (i.currentTime = 0, i.pause())
            },
            this.pn = function (t) {
                var i = gv.o("narration" + t);
                null !== i && i.play()
            },
            this.hf = function () {
                function t(t) {
                    for (var i = gv.o("s" + t + "s0"), s = i.getElementsByTagName("embed"), n = s.length - 1; n >= 0; n--) {
                        var a = s[n].parentNode,
                            c = "f" + a.id;
                        if (null === gv.o(c)) {
                            var r, o = s[n].src,
                                d = {
                                    src: "",
                                    delay: 0,
                                    openInNewWindow: !1
                                },
                                l = document.createElement("div");
                            r = "" === o ? document.createElement("embed") : document.createElement("iframe"),
                                r.setAttribute("id", c),
                                r.setAttribute("height", "100%"),
                                r.setAttribute("width", "100%"),
                                r.setAttribute("style", "position:absolute;top:0px;left:0px;border:none;"),
                                "" === o ? (d.src = gv.d + gv.a + "/f" + a.id + ".swf", r.setAttribute("src", d.src), r.setAttribute("wmode", "transparent")) : (o = o.split("+++"), d.src = o[0], o[1] && (d.delay = parseFloat(o[1])), o[2] && (d.openInNewWindow = "true" === o[2].toLowerCase().replace("/", "")));
                            var h, f = parseInt(a.style.top),
                                p = parseInt(a.style.left),
                                u = parseInt(a.style.width),
                                v = parseInt(a.style.height);
                            (0 > v + f || 0 > u + p || f > gv.h || p > gv.w) && (f = p = v = u = 0),
                            0 > f && (h = f, f = 0, v += h),
                            0 > p && (h = p, p = 0, u += h),
                            v + f > gv.h && (v = gv.h - f),
                            u + p > gv.w && (u = gv.w - p),
                                l.setAttribute("style", "top:" + f / gv.h * 100 + "%;left:" + p / gv.w * 100 + "%;height:" + v / gv.h * 100 + "%;width:" + u / gv.w * 100 + "%;-webkit-overflow-scrolling:touch;overflow:auto;"),
                                l.setAttribute("eCntnt", "true"),
                                a = gv.o("resizer"),
                                a = a.parentNode,
                                r.DopOtherOptions = d,


                                function () {
                                    var t = r;
                                    t.style.display = "none",
                                        t.DopTimeOut = function (t) {
                                            if (t.parentNode.style.display = "block", t.DopOtherOptions.openInNewWindow) t.src = "",
                                                window.open(t.DopOtherOptions.src);
                                            else {
                                                if (!e(t)) return;
                                                t.src = t.DopOtherOptions.src,
                                                    t.style.display = "block"
                                            }
                                        },
                                        l.DopTimeOutKey = setTimeout(function () {
                                            t.DopTimeOut(t)
                                        }, d.delay)
                                }(),
                            d.openInNewWindow || l.appendChild(r),
                                a.appendChild(l),
                                l.style.display = "none"
                        }
                    }
                }
                function i() {
                    var t = gv.o("resizer");
                    t = t.parentNode;
                    for (var i = t.childNodes, e = [], s = i.length - 1; s >= 0; s--) if (typeof i[s].tagName !== _undefined) {
                        var n = "true" === i[s].getAttribute("eCntnt");
                        n && (e[e.length] = i[s], i[s].DopTimeOutKey && clearTimeout(i[s].DopTimeOutKey))
                    }
                    for (var s = e.length - 1; s >= 0; s--) t.removeChild(e[s])
                }
                function e(t) {
                    if ("https:" !== location.protocol) return !0;
                    var i = t.DopOtherOptions.src;
                    if (0 === i.indexOf("https:")) return !0;
                    if (0 === i.indexOf("http:")) {
                        var e = document.createElement("a");
                        return e.innerHTML = i + "</br> !! WARNING !! </br> Trying to load insecure content in secure page. Please click here to open content in new window.",
                            e.setAttribute("href", i),
                            e.setAttribute("target", "blank"),
                            t.parentNode.appendChild(e),
                            e.setAttribute("style", "color:black;font-family:arial;position:absolute;background-color:#b2b2b9"),
                            !1
                    }
                    return !0
                }
                return {
                    add: t,
                    remove: i
                }
            }()
    };
    var cfc = new Cfc,
        presenter = function () {
            function t(t) {
                for (var n = {}, a = s(t), c = 0; c < a.childNodes.length; c++) if ("presenter" === a.childNodes[c].nodeName.toLowerCase()) {
                    var r = a.childNodes[c];
                    n.Presenter = i(r)
                } else if ("attachments" === a.childNodes[c].nodeName.toLowerCase()) {
                    var o = a.childNodes[c].childNodes,
                        d = e(o);
                    n.Attachment = d
                }
                return n
            }
            function i(t) {
                var i = {};
                i.Details = {};
                for (var e = 0; e < t.attributes.length; e++) {
                    var s = t.attributes[e];
                    i.Details[s.name] = s.value
                }
                for (var n = t.childNodes, a = 0; a < n.length; a++) if ("#text" !== n[a].nodeName.toLowerCase()) {
                    var c = n[a];
                    i[c.nodeName] = {};
                    for (var e = 0; e < c.attributes.length; e++) {
                        var s = c.attributes[e];
                        i[c.nodeName][s.name] = s.value
                    }
                }
                return i
            }
            function e(t) {
                for (var i = {}, e = 0; e < t.length; e++) if ("#text" !== t[e].nodeName.toLowerCase()) {
                    i[e] = {};
                    for (var s = t[e], n = 0; n < s.attributes.length; n++) {
                        var a = s.attributes[n];
                        i[e][a.name] = a.value
                    }
                }
                return i
            }
            function s(t, i) {
                var e;
                e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                    e.open("GET", t, !0),
                    e.onreadystatechange = function (t) {
                        if (4 === e.readyState) if (200 === e.status) {
                            var s = e.responseXML;
                            i && i(s)
                        } else(404 === e.status || 403 === e.status) && i && i(null)
                    },
                    e.onerror = function (t) {
                        i(null)
                    },
                    e.send(null)
            }
            return {
                loadXml: t,
                lxf: s
            }
        }(),
        arrayOfDivs = new Array,
        larrayOfDivs = new Array,
        gdS = new Object;
    QuestionHandler = function () {
        function t(t) {
            if (1 === t[0] || 2 === t[0] || 3 === t[0]) {
                for (var i = !1, e = 0; e < arrayOfDivs.length; e++) 1 === arrayOfDivs[e].c && (i = !0);
                if (!i) return 1 === t[0] || 2 === t[0] ? alert("Please choose an answer and then click Submit button.") : alert("Please select at least one answer and then click Submit button."),
                    !1
            } else {
                for (var e = 0; e < arrayOfDivs.length; e++) if (5 === t[0] && 0 === arrayOfDivs[e].c) return alert("Please match the answers and then click submit button."),
                    !1;
                arrayOfDivs.sort(function (t, i) {
                    return parseInt(t.style.top) - parseInt(i.style.top)
                });
                for (var e = 0; e < arrayOfDivs.length; e++) 5 === t[0] && 0 === arrayOfDivs[e].c ? arrayOfDivs[e].c = -1 : arrayOfDivs[e].c = e
            }
            return !0
        }
        function i(t) {
            switch (gv.q.sCW || (t = 0), t) {
                case 0:
                case 1:
                    ncc.z(gc + 1);
                    break;
                case 2:
                    ncc.z(gc + 2)
            }
        }
        function e(t, i) {
            function e(t) {
                for (var i = [], e = 0, s = t.length; s > e; e++) {
                    var n = i.length;
                    i[n] = {},
                        i[n].h = parseInt(t[e].style.height),
                        i[n].w = parseInt(t[e].style.width),
                        i[n].t = parseInt(t[e].style.top),
                        i[n].l = parseInt(t[e].style.left),
                        i[n].node = t[e]
                }
                return i
            }
            gdS.node = i,
                gdS.node.style.zIndex = 10,
                gdS.node.style.opacity = .8,
                gdS.node.style.webkitTransform = "scale(1.05)",
                gdS.node.style.MozTransform = "scale(1.05)",
                gdS.node.style.OTransform = "scale(1.05)",
                gdS.node.style.msTransform = "scale(1.05)",
                gdS.dAray = e(arrayOfDivs);
            var n, c;
            1 === gd ? (n = t.changedTouches[0].clientX, c = t.changedTouches[0].clientY) : (n = t.clientX, c = t.clientY);
            var r = qSC.findPos(gv.o("resizer"));
            n -= r[0],
                c -= r[1];
            var o = parseInt(gdS.node.style.left),
                d = parseInt(gdS.node.style.top);
            gdS.comX = n / gv.r - o,
                gdS.comY = c / gv.r - d,
                t.preventDefault(),
                qSC.unclip(gdS.node),
                s(t),
                1 === gd ? (document.addEventListener("touchmove", s, !0), document.addEventListener("touchend", a, !0)) : (document.addEventListener("mousemove", s, !0), document.addEventListener("mouseup", a, !0))
        }
        function s(t) {
            var i, e;
            1 === gd ? (i = t.changedTouches[0].clientX, e = t.changedTouches[0].clientY) : (i = t.clientX, e = t.clientY);
            var s = qSC.findPos(gv.o("resizer"));
            i -= s[0],
                e -= s[1];
            var a = i / gv.r - gdS.comX,
                c = e / gv.r - gdS.comY;
            gdS.node.style.left = a + "px",
                gdS.node.style.top = c + "px",
                n(a, c),
                t.preventDefault()
        }
        function n(t, i) {
            for (var e = parseInt(gdS.node.style.width), s = parseInt(gdS.node.style.height), n = i + s / 2, a = gdS.dAray.length - 1, c = null; a >= 0;) {
                if (gdS.dAray[a].t < n && n < gdS.dAray[a].t + gdS.dAray[a].h) {
                    c = gdS.dAray[a].node.id;
                    break
                }
                a--
            }
            if (c !== gdS.node.id && null !== c && 0 === gdS.dAray[a].node.c) {
                var r = gdS.dAray[a].l <= t && t < gdS.dAray[a].l + gdS.dAray[a].w,
                    o = gdS.dAray[a].l < t + e && t + e < gdS.dAray[a].l + gdS.dAray[a].w;
                if (r || o) {
                    for (var d = gdS.dAray.length - 1; d >= 0 && gdS.dAray[d].node.hy !== gdS.node.hy;) d--;
                    var l = gdS.node.hy;
                    gdS.node.hy = gdS.dAray[a].node.hy,
                        gdS.dAray[a].node.hy = l,
                        gdS.dAray[a].node.style.top = l + "px";
                    var h = gdS.dAray[a].l;
                    gdS.dAray[a].l = gdS.dAray[d].l,
                        gdS.dAray[d].l = h,
                        h = gdS.dAray[a].t,
                        gdS.dAray[a].t = gdS.dAray[d].t,
                        gdS.dAray[d].t = h,
                        h = gdS.dAray[a].h,
                        gdS.dAray[a].h = gdS.dAray[d].h,
                        gdS.dAray[d].h = h,
                        h = gdS.dAray[a].w,
                        gdS.dAray[a].w = gdS.dAray[d].w,
                        gdS.dAray[d].w = h
                }
            }
        }
        function a() {
            function t(t) {
                var i = parseInt(gdS.node.style.left),
                    e = i + parseInt(gdS.node.style.width),
                    s = parseInt(t.style.left),
                    n = s + parseInt(t.style.width);
                return i > s && n > i ? !0 : e > s && n > e ? !0 : !1
            }
            var i = parseInt(gdS.node.style.top);
            i += parseInt(gdS.node.style.height) / 2;
            for (var e = 0; e < larrayOfDivs.length; e++) {
                var c = larrayOfDivs[e].hy;
                if (i >= c && i <= c + parseInt(larrayOfDivs[e].style.height)) {
                    if (0 !== larrayOfDivs[e].c) break;
                    t(larrayOfDivs[e]) && qSC.clip(larrayOfDivs[e], gdS.node);
                    break
                }
            }
            n(parseInt(gdS.node.style.left), parseInt(gdS.node.style.top)),
                gdS.node.style.top = gdS.node.hy + "px",
            0 === gdS.node.c && (gdS.node.style.left = gdS.node.hx + "px"),
                1 === gd ? (document.removeEventListener("touchmove", s, !0), document.removeEventListener("touchend", a, !0)) : (document.removeEventListener("mousemove", s, !0), document.removeEventListener("mouseup", a, !0)),
                gdS.node.style.opacity = 1,
                gdS.node.style.webkitTransform = "scale(1)",
                gdS.node.style.MozTransform = "scale(1)",
                gdS.node.style.OTransform = "scale(1)",
                gdS.node.style.msTransform = "scale(1)",
                gdS.node.style.zIndex = 0
        }
        this.initQuestionStruct = function () {
            for (var t = gv.q.info.split("|"), i = 0; i < t.length; i++) gv.q.sAray[i] = QH.LoadQuestionStruct(i)
        },
            this.initQuestionSlide = function () {
                var t = anima["s" + gc].q;
                if (0 === t[0]) {
                    var i = qSC.HandleUnattendedQuestions();
                    return i > 0 ? i : (0 !== gv.s && objDopPhSco.End(), qSC.modifyResultSlide(gc) && qSC.updateXmlAtEnd(), gv.q.cmpltd = !0, typeof Player !== _undefined && typeof Player.sndFdBk !== _undefined && Player.sndFdBk(), !1)
                }
                if (qSC.modifySlideAtInit(t), typeof t[4] !== _undefined || gv.q.cmpltd) {
                    var s = gv.o("s" + gc + "s" + t[3]);
                    s.onclick = null,
                        s.onmousedown = null,
                        s.onmouseover = null,
                        s.onmouseout = null,
                        s.style.cursor = "default",
                        s.style.opacity = 0;
                    for (var n = 0; n < t[2].length; n++) {
                        if ("object" == typeof t[2][n]) {
                            for (var a = 0; a < t[2][n].length; a++) {
                                var c = gv.o("s" + gc + "s" + t[2][n][a]);
                                c.style.cursor = "default",
                                    c.ontouchstart = null,
                                    c.ontouchmove = null,
                                    c.ontouchend = null,
                                    c.onmousedown = null,
                                    c.onclick = null,
                                    c.onmouseover = null,
                                    c.onmouseout = null
                            }
                            return !1
                        }
                        var r = gv.o("s" + gc + "s" + t[2][n]);
                        r.ontouchstart = null,
                            r.ontouchmove = null,
                            r.ontouchend = null,
                            r.onmouseover = null,
                            r.onmouseout = null,
                            r.onclick = null,
                            r.onmousedown = null,
                            r.style.cursor = "default"
                    }
                    return !1
                }
                if (arrayOfDivs.length > 0 && arrayOfDivs.splice(0, arrayOfDivs.length), larrayOfDivs.length > 0 && larrayOfDivs.splice(0, larrayOfDivs.length), null !== t[3]) {
                    var s = gv.o("s" + gc + "s" + t[3]);
                    s.style.cursor = "pointer",
                        s.onmouseover = function () {
                            RListener(this)
                        },
                        s.onmouseout = function () {
                            AListener(this)
                        },
                        s.onclick = function () {
                            qsh.sb()
                        }
                }
                for (var n = 0; n < t[2].length; n++) if ("object" != typeof t[2][n]) {
                    var r = gv.o("s" + gc + "s" + t[2][n]);
                    if (typeof r.c === _undefined && (r.hy = parseInt(r.style.top), r.hx = parseInt(r.style.left), r.c = 0, r.onmouseover = function () {
                            RListener(this)
                        }, r.onmouseout = function () {
                            AListener(this)
                        }, r.style.cursor = "pointer", 4 !== t[0] && 5 !== t[0] && qSC.checkUncheckOrder(r, t[0], 0, "")), 1 === t[0] || 2 === t[0]) r.onclick = function () {
                        for (var t = 0; t < arrayOfDivs.length; t++) arrayOfDivs[t].c = 0,
                            qSC.checkUncheckOrder(arrayOfDivs[t], 1, 0, "");
                        this.c = 1,
                            qSC.checkUncheckOrder(this, 1, 1, "")
                    };
                    else if (3 === t[0]) r.onclick = function () {
                        0 === this.c ? (this.c = 1, qSC.checkUncheckOrder(this, 3, 1, "")) : (this.c = 0, qSC.checkUncheckOrder(this, 3, 0, ""))
                    };
                    else if ((4 === t[0] || 5 === t[0]) && (1 === gd ? r.ontouchstart = function () {
                            e(event, this)
                        } : r.onmousedown = function () {
                            e(arguments[0] || event, this)
                        }, 0 === larrayOfDivs.length && 5 === t[0])) for (var o = 0; o < t[2][t[2].length - 1].length; o++) {
                        var d = gv.o("s" + gc + "s" + t[2][t[2].length - 1][o]);
                        typeof d.c === _undefined && (d.hy = parseInt(d.style.top), d.hx = parseInt(d.style.left), d.c = 0),
                            larrayOfDivs.push(d)
                    }
                    arrayOfDivs.push(r)
                }
            },
            this.sb = function () {
                var e = anima["s" + gc].q,
                    s = e[2],
                    n = t(e);
                if (n) {
                    for (var a = 0; a < arrayOfDivs.length; a++) {
                        var c = arrayOfDivs[a].id.split("s");
                        c = parseInt(c[c.length - 1]),
                            c = s.indexOf(c),
                            gv.q.sAray[e[1] - 1].Answers[c] = arrayOfDivs[a].c
                    }
                    QH.SubmitAnswer(gv.q.sAray[e[1] - 1]),
                        qSC.updateAnsXml(gc);
                    var r = QH.GetResult();
                    r.qnsAtnd === r.tQns && (gv.q.cmpltd = !0),
                    0 !== gv.s && objDopPhSco.Submit(),
                        i("b" === QH.GetStatus(e[1] - 1) ? 1 : 2)
                }
            }
    };
    var qsh = new QuestionHandler;
    QuizSupportClass = function () {
        function t(t, i, e) {
            var s = i.slice(0);
            "object" == typeof s[s.length - 1] && s.pop(),
                s.sort(function (i, e) {
                    return parseInt(gv.o("s" + t + "s" + i).style.top) - parseInt(gv.o("s" + t + "s" + e).style.top)
                });
            for (var n = 0; n < e.length; n++) s[n] = gv.o("s" + t + "s" + s[n]).style.top;
            for (var n = 0; n < e.length; n++) {
                var a = e.indexOf(n);
                gv.o("s" + t + "s" + i[a]).style.top = s[n]
            }
        }
        function i(t) {
            function i(t, i, e) {
                var s = document.createElement("div"),
                    n = parseInt(t.style.left) - 30;
                4 === e && (n = parseInt(t.style.left) - 70);
                var a = parseInt(t.style.top),
                    c = parseInt(t.style.height),
                    r = a + (c - 22) / 2,
                    o = "height:24px;width:24px;top:" + r + "px;left:" + n + "px;";
                s.setAttribute("style", o);
                var d = document.createElement("img");
                0 === i ? d.setAttribute("src", gv.d + "player/cross.png") : d.setAttribute("src", gv.d + "player/tick.png"),
                    s.appendChild(d);
                var l = t.parentNode;
                l.appendChild(s)
            }
            var e = anima["s" + t].q;
            if (gv.q.sRv) for (var s = e[2], n = e[1], a = e[0], c = new Question(n - 1, "a").Answers, r = gv.q.sAray[n - 1].Answers, o = gv.q.sAray[n - 1].Status, d = 0; d < s.length; d++) {
                var l = gv.o("s" + t + "s" + s[d]);
                switch (a) {
                    case 1:
                    case 2:
                    case 3:
                        1 === c[d] && i(l, 1, a);
                        break;
                    case 4:
                        c[d] === r[d] ? "a" === o ? i(l, 0, a) : i(l, 1, a) : i(l, 0, a);
                        break;
                    case 5:
                        if (null === l) break;
                        var h = s[s.length - 1][d];
                        l = gv.o("s" + t + "s" + h),
                            c[d] === r[d] ? "a" === o ? i(l, 0, a) : i(l, 1, a) : i(l, 0, a)
                }
            }
        }
        this.loadXmlFrmTxt = function (t) {
            if (window.ActiveXObject) {
                var i = new ActiveXObject("Microsoft.XMLDOM");
                i.async = !1,
                    i.loadXML(t),
                    gv.q.zXml = i
            } else {
                var e = new DOMParser;
                gv.q.zXml = e.parseFromString(t, "text/xml")
            }
            var s, n = gv.q.zXml.getElementsByTagName("Track")[0];
            try {
                s = n.attributes.getNamedItem("cmpltd").value
            } catch (a) {
                s = "false",
                    n.setAttribute("cmpltd", s)
            }
            "true" === s ? gv.q.cmpltd = !0 : gv.q.cmpltd = !1
        },
            this.loadQuizFromXml = function () {
                function t(t, i) {
                    for (var e = new Array, s = 0; s < t.length; s++) e.push(t[s]);
                    return e.sort(function (t, i) {
                        return parseInt(t.getAttribute("NewPos_y")) - parseInt(i.getAttribute("NewPos_y"))
                    }),
                        e.indexOf(i)
                }
                if ("" !== gv.q.zXml) {
                    var i = gv.q.zXml.getElementsByTagName("Track")[0],
                        e = i.getElementsByTagName("Question"),
                        s = i.attributes.getNamedItem("status").value;
                    "nc" === s || "sd" === s ? gv.q.cmpltd = !1 : gv.q.cmpltd = !0;
                    for (var n = 0, a = gv.q.info.split("|"), c = 0; c < e.length; c++) {
                        "Passed" === e[c].attributes.getNamedItem("Flag").value && (n += gv.q.sAray[c].Score);
                        var r = e[c].getElementsByTagName("Answer");
                        if (r.length > 0) {
                            var o = a[c],
                                d = parseInt(o.substring(8, 9)),
                                l = o.substring(10, o.length);
                            l = l.split("");
                            for (var h = 0; h < r.length; h++) 0 === d || 1 === d || 2 === d ? gv.q.sAray[c].Answers[h] = "Passed" === r[h].getAttribute("Flag") ? parseInt(l[h]) : 0 === parseInt(l[h]) ? 1 : 0 : gv.q.sAray[c].Answers[h] = t(r, r[h]);
                            QH.SubmitAnswer(gv.q.sAray[c])
                        } else "Failed" === e[c].attributes.getNamedItem("Flag").value && QH.SubmitAnswer(gv.q.sAray[c])
                    }
                    i.setAttribute("score", n)
                }
            },
            this.modifySlideAtInit = function (e) {
                var s = e[1],
                    n = e[0],
                    a = gv.q.sAray[s - 1];
                if ((gv.q.cmpltd || "a" !== a.Status) && 0 !== n && 0 !== e[4]) {
                    e[4] = 0;
                    var c = e[2],
                        r = a.Answers,
                        o = new Question(s - 1, "a").Answers;
                    (4 === n || 5 === n) && "a" !== a.Status && t(gc, c, r);
                    for (var d = 0; d < r.length; d++) if ("object" != typeof c[d]) {
                        var l = gv.o("s" + gc + "s" + c[d]);
                        switch (n) {
                            case 1:
                            case 2:
                            case 3:
                                if ("a" === a.Status) qSC.checkUncheckOrder(l, n, 0, "");
                                else {
                                    if (!gv.q.sRv) {
                                        1 === r[d] ? qSC.checkUncheckOrder(l, n, 1, "") : qSC.checkUncheckOrder(l, n, 0, "");
                                        break
                                    }
                                    r[d] === o[d] ? 1 === o[d] ? qSC.checkUncheckOrder(l, n, r[d], "g") : qSC.checkUncheckOrder(l, n, o[d], "") : qSC.checkUncheckOrder(l, n, r[d], "r")
                                }
                                break;
                            case 4:
                                if (!gv.q.sRv) break;
                                "a" === a.Status ? qSC.checkUncheckOrder(l, n, o[d] + 1, "red") : r[d] === o[d] ? qSC.checkUncheckOrder(l, n, r[d] + 1, "green") : qSC.checkUncheckOrder(l, n, o[d] + 1, "red");
                                break;
                            case 5:
                                if ("a" === a.Status) gv.q.sRv && qSC.checkUncheckOrder(l, n, o[d] + 1, "red");
                                else {
                                    var h = c[c.length - 1];
                                    qSC.clip(gv.o("s" + gc + "s" + h[d]), l),
                                    gv.q.sRv && (r[d] === o[d] ? qSC.checkUncheckOrder(l, n, r[d] + 1, "green") : qSC.checkUncheckOrder(l, n, o[d] + 1, "red"))
                                }
                        }
                    }
                    i(gc)
                }
            },
            this.updateAnsXml = function (t) {
                if ("" !== gv.q.zXml) {
                    var i = anima["s" + t].q,
                        e = i[2],
                        s = i[1],
                        n = new Question(s - 1, "a"),
                        a = "b" === gv.q.sAray[s - 1].Status ? "Passed" : "Failed",
                        c = gv.q.zXml.createElement("Question");
                    c.setAttribute("Index", s),
                        c.setAttribute("Flag", a);
                    for (var r = 0; r < n.Answers.length; r++) {
                        var o = gv.q.zXml.createElement("Answer");
                        n.Answers[r] === gv.q.sAray[s - 1].Answers[r] ? o.setAttribute("Flag", "Passed") : o.setAttribute("Flag", "Failed"),
                            o.setAttribute("NewPos_y", parseInt(gv.o("s" + t + "s" + e[r]).style.top)),
                            c.appendChild(o)
                    }
                    var d = gv.q.zXml.getElementsByTagName("Track")[0];
                    d.setAttribute("time", zenler.GetTime(selectedContentIndex)),
                        d.setAttribute("currentpageIndex", gc),
                        d.setAttribute("currentquestionindex", s);
                    var l = parseFloat(d.attributes.getNamedItem("score").value);
                    "Passed" === a && (l += gv.q.sAray[s - 1].Score),
                        d.setAttribute("score", l),
                        d.setAttribute("status", "sd");
                    var h = d.getElementsByTagName("Question")[s - 1];
                    d.replaceChild(c, h);
                    var f, p = gv.q.zXml;
                    f = window.ActiveXObject ? p.xml : (new XMLSerializer).serializeToString(p),
                        zenler.UpdateNodeContent(f)
                }
            },
            this.updateXmlAtEnd = function () {
                if ("" !== gv.q.zXml) {
                    var t = gv.q.zXml.getElementsByTagName("Track")[0];
                    t.setAttribute("currentpageIndex", gc),
                        t.setAttribute("currentquestionindex", t.parentNode.attributes.getNamedItem("questioncount").value);
                    var i = QH.GetResult();
                    i.Status ? t.setAttribute("status", "pd") : t.setAttribute("status", "fd");
                    var e;
                    if (window.ActiveXObject) {
                        var s = gv.q.zXml;
                        e = s.xml
                    } else e = (new XMLSerializer).serializeToString(gv.q.zXml);
                    zenler.UpdateNodeContent(e)
                }
            },
            this.modifyResultSlide = function (t) {
                function i(t, i) {
                    if (t = gv.o("s" + gc + "s" + t), null !== t) {
                        var e = t.getElementsByTagName("pre");
                        if (e.length > 0) e[e.length - 1].innerHTML += " : " + i;
                        else {
                            var s = document.createElement("pre"),
                                n = parseInt(t.style.height),
                                a = t.style.width,
                                c = "left:" + a + ";top:" + n / 4 + "px;font-weight:bold;";
                            s.setAttribute("style", c),
                                s.innerHTML = " : " + i,
                                t.appendChild(s)
                        }
                    }
                }
                function e(t, i) {
                    var e, s = "s" + gc + "s" + t,
                        n = 1,
                        a = new Array;
                    for (e = gv.o(s), e && (e.style.display = i); null !== gv.o(s + "p" + n);) a[a.length] = gv.o(s + "p" + n),
                        n++;
                    for (n = 0; n < a.length; n++) a[n] && (a[n].style.display = i)
                }
                var s = anima["s" + t].q;
                if (typeof s[4] !== _undefined) return !1;
                var n = QH.GetResult(),
                    a = s[1];
                return i(a[0], n.tQns),
                    i(a[1], n.tScore),
                    i(a[2], n.pRate + " %"),
                    i(a[3], n.qnsAtnd),
                    i(a[4], n.cAnswrs),
                    i(a[5], n.wAnswrs),
                    i(a[6], n.yScore),
                null !== a[8] && null !== gv.o("s" + gc + "s" + a[7]) && (n.Status ? (e(a[7], "block"), e(a[8], "none")) : (e(a[7], "none"), e(a[8], "block"))),
                    s[4] = 0,
                    !0
            },
            this.HandleUnattendedQuestions = function () {
                function t(t) {
                    for (var i = 1; i < gv.t; i++) {
                        var e = anima["s" + i];
                        if (e = e.q, typeof e !== _undefined && e[1] === t) return i
                    }
                    return 0
                }
                if (gv.q.cmpltd) return 0;
                if (1 === anima["s" + gv.t].q[5]) return 0;
                for (var i = 0; i < gv.q.sAray.length; i++) if ("a" === gv.q.sAray[i].Status) {
                    var e = function () {
                        this.yes = function () {
                            anima["s" + gv.t].q[5] = 0
                        },
                            this.no = function () {
                                anima["s" + gv.t].q[5] = 1,
                                    ncc.z(gv.t)
                            }
                    };
                    return Player.ShowMsg('You have not attended one or more questions.\n\nClick "Yes" to attend remaining questions. \nClick "No" to finish the quiz without attending the remaining questions.', "Zenler", "yesno", new e),
                        t(gv.q.sAray[i].Index)
                }
                return 0
            },
            this.checkUncheckOrder = function (t, i, e, s) {
                for (var n = t.getElementsByTagName("div"), a = null, c = 0; c < n.length; c++) if (n[c].id.indexOf("qc") > 0) {
                    a = n[c];
                    break
                }
                switch (null === a && (a = qSC.addDiv(t, t.id + "qc", 0, 0, i)), a.className = "", i) {
                    case 1:
                    case 2:
                        1 === e ? a.className = "DOPrOn" + s : a.className = "DOPrOff" + s;
                        break;
                    case 3:
                        1 === e ? a.className = "DOPtOn" + s : a.className = "DOPtOff" + s;
                        break;
                    case 4:
                        if (0 > e) break;
                        var r, o = parseInt(t.style.height);
                        r = "" === a.innerHTML.trim(" ") ? qSC.addPre(a, e, o) : a.getElementsByTagName("pre")[0],
                            r.style.color = s,
                            a.style.left = "20px";
                        break;
                    case 5:
                        if (0 > e) break;
                        var r, o = parseInt(t.style.height);
                        r = "" === a.innerHTML.trim(" ") ? qSC.addPre(a, e, o) : a.getElementsByTagName("pre")[0],
                            r.style.color = s,
                            a.style.left = "45px"
                }
            },
            this.addDiv = function (t, i, e, s, n) {
                var a = document.createElement("div");
                return (4 === n || 5 === n) && a.setAttribute("style", "top:" + e + "px;left:" + s + "px;"),
                    a.setAttribute("id", i),
                    t.appendChild(a),
                    a
            },
            this.addPre = function (t, i, e) {
                var s = document.createElement("pre");
                return s.setAttribute("style", "font-size:20px;font-family:tahoma;font-weight:bold;"),
                    s.innerHTML = i,
                    t.appendChild(s),
                    s.style.top = (e - 24) / 2 + "px",
                    s
            },
            this.clip = function (t, i) {
                var e = typeof t.hx === _undefined ? t.style.left : t.hx;
                e = parseInt(e);
                var s = parseInt(t.style.width),
                    n = parseInt(typeof i.hx === _undefined ? i.style.left : i.hx),
                    a = parseInt(i.style.width),
                    c = e + (n + a - e) / 2,
                    r = a - s;
                t.style.left = c - s + "px",
                    i.style.left = c - r - 10 + "px",
                    t.c = i.id,
                    i.c = t.id
            },
            this.unclip = function (t) {
                if (0 !== t.c) {
                    var i = gv.o(t.c);
                    t.c = 0,
                        i.c = 0,
                        t.style.left = t.hx + "px",
                        i.style.left = i.hx + "px"
                }
            },
            this.findPos = function (t) {
                var i = 0,
                    e = 0;
                if (t.offsetParent) do i += t.offsetLeft,
                    e += t.offsetTop;
                while (t = t.offsetParent);
                return [i, e]
            }
    };
    var qSC = new QuizSupportClass;
    QuizHandler = function () {
        this.LoadQuestionStruct = function (t) {
            return new Question(t, "s")
        },
            this.GetStatus = function (t) {
                var i = -1;
                return null != gv.q.sAray[t] && (i = gv.q.sAray[t].Status),
                    i
            },
            this.SubmitAnswer = function (t) {
                t.Status = "b";
                for (var i = t.Index - 1, e = new Question(i, "a"), s = 0; s < e.Answers.length; s++) if (e.Answers[s] != t.Answers[s]) {
                    t.Status = "c";
                    break
                }
                gv.q.sAray[i] = t
            },
            this.GetResult = function () {
                for (var t = gv.q.sAray.length, i = 0, e = 0, s = 0, n = 0, a = 0; t > a; a++) {
                    var c = gv.q.sAray[a];
                    i += c.Score,
                        "b" == c.Status ? (e++, n += c.Score) : "c" == c.Status && s++
                }
                var r = e + s,
                    o = n / i * 100 >= gv.q.psRate,
                    d = {
                        Status: o,
                        tQns: t,
                        tScore: i,
                        pRate: gv.q.psRate,
                        qnsAtnd: r,
                        cAnswrs: e,
                        wAnswrs: s,
                        yScore: n
                    };
                return d
            }
    },
        Question = function (t, i) {
            var e = gv.q.info.split("|"),
                s = e[t];
            this.Index = parseInt(s.substring(0, 3)),
                this.Score = parseFloat(s.substring(3, 8)),
                this.Type = parseInt(s.substring(8, 9)),
                this.Status = "a",
                this.Answers = new Array;
            for (var n = 0, a = 10; a < s.length; a++, n++) this.Answers[n] = "s" == i ? 0 : parseInt(s.substring(a, a + 1), 16)
        };
    var QH = new QuizHandler,
        DopPhSco = function (t) {
            var i;
            this.scormendStatus = !1;
            var e, s = function () {
                    function t() {
                        e = new a,
                            0 == gv.q ? n.Load() : c.Load(),
                            window.onunload = s.onUnload
                    }
                    var s = function () {
                            function t() {
                                i = (new Date).getTime()
                            }
                            function n() {
                                gv.t !== gc && (e.doLMSSetValue("cmi.core.exit", "suspend"), a())
                            }
                            function a() {
                                s.GetTime(),
                                    e.doLMSCommit(),
                                    e.doLMSFinish()
                            }
                            function c() {
                                if (0 != i) var t = (new Date).getTime(),
                                    s = (t - i) / 1e3,
                                    n = r(s);
                                else n = "00:00:00.0";
                                e.doLMSSetValue("cmi.core.session_time", n)
                            }
                            function r(t) {
                                var i = t % 60;
                                t -= i;
                                var e = t % 3600;
                                t -= e,
                                    i = Math.round(100 * i) / 100;
                                var s = new String(i),
                                    n = s,
                                    a = ""; - 1 != s.indexOf(".") && (n = s.substring(0, s.indexOf(".")), a = s.substring(s.indexOf(".") + 1, s.length)),
                                n.length < 2 && (n = "0" + n),
                                    s = n,
                                a.length && (s = s + "." + a);
                                var c;
                                c = t % 3600 != 0 ? 0 : t / 3600;
                                var r;
                                r = e % 60 != 0 ? 0 : e / 60,
                                new String(c).length < 2 && (c = "0" + c),
                                new String(r).length < 2 && (r = "0" + r);
                                var o = c + ":" + r + ":" + s;
                                return o
                            }
                            return {
                                InitiateTimer: t,
                                GetTime: c,
                                onUnload: n,
                                Quit: a
                            }
                        }(),
                        n = function () {
                            function t() {
                                e.doLMSInitialize();
                                var t = e.doLMSGetValue("cmi.core.lesson_status"),
                                    n = e.doLMSGetValue("cmi.core.lesson_location");
                                ("" == n || null == n) && (n = 1, i(1, gv.t)),
                                    scormGoTo(n),
                                    "completed" == t || "passed" == t ? this.scormendStatus = !0 : e.doLMSSetValue("cmi.core.lesson_status", "incomplete"),
                                    s.InitiateTimer(),
                                    e.doLMSCommit(),
                                    i(n, gv.t)
                            }
                            function i(t, i) {
                                if (!this.scormendStatus) {
                                    e.doLMSSetValue("cmi.core.lesson_location", t);
                                    var s = t / i * 100;
                                    s = Math.round(100 * s) / 100,
                                        e.doLMSSetValue("cmi.core.score.raw", s);
                                    var a;
                                    a = 100 == s ? "completed" : "incomplete",
                                        n(a),
                                        e.doLMSCommit()
                                }
                            }
                            function n(t) {
                                e.doLMSSetValue("cmi.core.lesson_status", t),
                                "completed" == t && (t = "passed", e.doLMSSetValue("cmi.core.lesson_status", t))
                            }
                            return {
                                Load: t,
                                UpdateLesson: i
                            }
                        }(),
                        c = function () {
                            function t() {
                                e.doLMSInitialize();
                                var t = e.doLMSGetValue("cmi.core.lesson_location");
                                (null == t || "" == t) && (t = 1),
                                    scormGoTo(t),
                                    e.doLMSSetValue("cmi.core.lesson_location", t);
                                var i = e.doLMSGetValue("cmi.core.lesson_status");
                                "failed" == i || "passed" == i || "completed" == i ? i = "completed" : (i = "incomplete", e.doLMSSetValue("cmi.core.lesson_status", i)),
                                    "incomplete" == i ? gv.q.cmpltd = !1 : gv.q.cmpltd = !0;
                                var n = e.doLMSGetValue("cmi.suspend_data");
                                "" == n || null == n ? (qsh.initQuestionStruct(), n = a(gv.q.sAray), e.doLMSSetValue("cmi.suspend_data", n)) : gv.q.sAray = c(n);
                                var r = QH.GetResult();
                                r.Status ? gv.q.pasd = !0 : gv.q.pasd = !1,
                                    e.doLMSCommit(),
                                    s.InitiateTimer()
                            }
                            function i() {
                                var t = QH.GetResult(),
                                    i = t.yScore / t.tScore * 100;
                                i = Math.round(100 * i) / 100,
                                    e.doLMSSetValue("cmi.core.score.raw", i);
                                var s = a(gv.q.sAray);
                                e.doLMSSetValue("cmi.suspend_data", s),
                                    e.doLMSSetValue("cmi.core.lesson_location", gc),
                                t.tQns == t.qnsAtnd && (gv.q.cmpltd = !0);
                                var n;
                                n = gv.q.cmpltd ? "completed" : "incomplete",
                                    e.doLMSSetValue("cmi.core.lesson_status", n);
                                var c;
                                t.Status ? (c = "passed", e.doLMSSetValue("cmi.core.lesson_status", c)) : gv.q.cmpltd && (c = "failed", e.doLMSSetValue("cmi.core.lesson_status", c)),
                                    e.doLMSCommit()
                            }
                            function n() {
                                var t, i = QH.GetResult();
                                t = i.Status ? "passed" : "failed";
                                var s = i.yScore / i.tScore * 100;
                                s = Math.round(100 * s) / 100,
                                    e.doLMSSetValue("cmi.core.score.raw", s),
                                    e.doLMSSetValue("cmi.core.lesson_status", t),
                                    e.doLMSCommit()
                            }
                            function a(t) {
                                for (var i = "", e = 0; e < t.length; e++) {
                                    i += r(t[e].Index, 3) + o(t[e].Score) + t[e].Status + t[e].Type + t[e].Answers.length;
                                    for (var s = 0; s < t[e].Answers.length; s++) i += t[e].Answers[s];
                                    i += "|"
                                }
                                return i.substring(0, i.length - 1)
                            }
                            function c(t) {
                                for (var i = t.split("|"), e = new Array, s = 0; s < i.length; s++) e[s] = new d(i[s]);
                                return e
                            }
                            function r(t, i) {
                                for (t += ""; t.length < i;) t = "0" + t;
                                return t
                            }
                            function o(t) {
                                return t = t.toFixed(2),
                                    t = r(t, 5)
                            }
                            var d = function (t) {
                                this.Index = parseInt(t.substring(0, 3)),
                                    this.Score = parseFloat(t.substring(3, 8)),
                                    this.Status = t.substring(8, 9),
                                    this.Type = parseInt(t.substring(9, 10)),
                                    t = t.substring(11, t.length),
                                    this.Answers = t.split("");
                                for (var i = 0; i < this.Answers.length; i++) this.Answers[i] = parseInt(this.Answers[i])
                            };
                            return {
                                createString: a,
                                createArray: c,
                                Load: t,
                                Submit: i,
                                End: n
                            }
                        }();
                    return {
                        Load: t,
                        Quit: s.Quit,
                        UpdateLesson: n.UpdateLesson,
                        End: c.End,
                        Submit: c.Submit
                    }
                },
                n = function () {
                    function t() {
                        e = new c,
                            0 == gv.q ? n.Load() : a.Load(),
                            window.onunload = s.onUnload
                    }
                    var s = function () {
                            function t() {
                                i = (new Date).getTime()
                            }
                            function n() {
                                gv.t !== gc && (e.doSetValue("cmi.exit", "suspend"), a())
                            }
                            function a() {
                                s.GetTime(),
                                    e.doCommit(),
                                    e.doTerminate()
                            }
                            function c() {
                                if (0 != i) var t = (new Date).getTime(),
                                    s = (t - i) / 1e3,
                                    n = r(s);
                                else n = "PT00H00M00S";
                                e.doSetValue("cmi.session_time", n)
                            }
                            function r(t) {
                                var i = t % 60;
                                t -= i;
                                var e = t % 3600;
                                t -= e,
                                    i = Math.round(100 * i) / 100;
                                var s = new String(i),
                                    n = s,
                                    a = ""; - 1 != s.indexOf(".") && (n = s.substring(0, s.indexOf(".")), a = s.substring(s.indexOf(".") + 1, s.length)),
                                n.length < 2 && (n = "0" + n),
                                    s = n,
                                a.length && (s = s + "." + a);
                                var c;
                                c = t % 3600 != 0 ? 0 : t / 3600;
                                var r;
                                r = e % 60 != 0 ? 0 : e / 60,
                                new String(c).length < 2 && (c = "0" + c),
                                new String(r).length < 2 && (r = "0" + r);
                                var o = "PT" + c + "H" + r + "M" + s + "S";
                                return o
                            }
                            return {
                                InitiateTimer: t,
                                GetTime: c,
                                onUnload: n,
                                Quit: a
                            }
                        }(),
                        n = function () {
                            function t() {
                                e.doInitialize();
                                var t = e.doGetValue("cmi.completion_status"),
                                    n = e.doGetValue("cmi.location");
                                ("" == n || null == n) && (n = 1, i(1, gv.t)),
                                    scormGoTo(n),
                                    "completed" == t ? this.scormendStatus = !0 : e.doSetValue("cmi.completion_status", "incomplete"),
                                    s.InitiateTimer(),
                                    e.doCommit(),
                                    i(n, gv.t)
                            }
                            function i(t, i) {
                                if (!this.scormendStatus) {
                                    e.doSetValue("cmi.location", t);
                                    var s = t / i * 100;
                                    n(s);
                                    var c;
                                    c = 100 == s ? "completed" : "incomplete",
                                        a(c),
                                        e.doCommit()
                                }
                            }
                            function n(t) {
                                e.doSetValue("cmi.score.min", 0),
                                    e.doSetValue("cmi.score.max", 100),
                                    e.doSetValue("cmi.score.raw", t),
                                    e.doSetValue("cmi.score.scaled", t / 100),
                                    e.doSetValue("cmi.progress_measure", t / 100)
                            }
                            function a(t) {
                                e.doSetValue("cmi.completion_status", t),
                                    t = "completed" == t ? "passed" : "failed",
                                    e.doSetValue("cmi.success_status", t)
                            }
                            return {
                                Load: t,
                                UpdateLesson: i
                            }
                        }(),
                        a = function () {
                            function t() {
                                e.doInitialize();
                                var t = e.doGetValue("cmi.location");
                                (null == t || "" == t) && (t = 1),
                                    scormGoTo(t),
                                    e.doSetValue("cmi.location", t);
                                var i = e.doGetValue("cmi.completion_status");
                                ("not_attempted" == i || "unknown" == i || "" == i) && (i = "incomplete", e.doSetValue("cmi.completion_status", i)),
                                    "incomplete" == i ? gv.q.cmpltd = !1 : gv.q.cmpltd = !0;
                                var n = e.doGetValue("cmi.suspend_data");
                                "" == n || null == n ? (qsh.initQuestionStruct(), n = a(gv.q.sAray), e.doSetValue("cmi.suspend_data", n)) : gv.q.sAray = c(n),
                                "completed" != i && gc == gv.t && e.doSetValue("cmi.completion_status", "completed");
                                var r = e.doGetValue("cmi.success_status");
                                "passed" == r ? gv.q.pasd = !0 : gv.q.pasd = !1,
                                    e.doCommit(),
                                    s.InitiateTimer()
                            }
                            function i() {
                                var t = QH.GetResult(),
                                    i = t.yScore,
                                    n = t.yScore / t.tScore;
                                e.doSetValue("cmi.score.min", 0),
                                    e.doSetValue("cmi.score.max", t.tScore),
                                    e.doSetValue("cmi.score.raw", i),
                                    e.doSetValue("cmi.score.scaled", n);
                                var c = a(gv.q.sAray);
                                e.doSetValue("cmi.suspend_data", c),
                                    e.doSetValue("cmi.location", gc),
                                t.tQns == t.qnsAtnd && (gv.q.cmpltd = !0);
                                var r;
                                r = gv.q.cmpltd ? "completed" : "incomplete",
                                    e.doSetValue("cmi.completion_status", r);
                                var o;
                                o = t.Status ? "passed" : gv.q.cmpltd ? "failed" : "unknown",
                                    e.doSetValue("cmi.success_status", o),
                                    e.doCommit(),
                                gv.q.cmpltd && s.Quit()
                            }
                            function n() {
                                var t = QH.GetResult(),
                                    i = t.yScore,
                                    n = t.yScore / t.tScore;
                                e.doSetValue("cmi.score.min", 0),
                                    e.doSetValue("cmi.score.max", t.tScore),
                                    e.doSetValue("cmi.score.raw", i),
                                    e.doSetValue("cmi.score.scaled", n),
                                    e.doSetValue("cmi.location", gc);
                                var a = "completed";
                                e.doSetValue("cmi.completion_status", a);
                                var c;
                                c = t.Status ? "passed" : "failed",
                                    e.doSetValue("cmi.success_status", c),
                                    e.doCommit(),
                                    s.Quit()
                            }
                            function a(t) {
                                for (var i = "", e = 0; e < t.length; e++) {
                                    i += r(t[e].Index, 3) + o(t[e].Score) + t[e].Status + t[e].Type + t[e].Answers.length;
                                    for (var s = 0; s < t[e].Answers.length; s++) i += t[e].Answers[s];
                                    i += "|"
                                }
                                return i.substring(0, i.length - 1)
                            }
                            function c(t) {
                                for (var i = t.split("|"), e = new Array, s = 0; s < i.length; s++) e[s] = new d(i[s]);
                                return e
                            }
                            function r(t, i) {
                                for (t += ""; t.length < i;) t = "0" + t;
                                return t
                            }
                            function o(t) {
                                return t = t.toFixed(2),
                                    t = r(t, 5)
                            }
                            var d = function (t) {
                                this.Index = parseInt(t.substring(0, 3)),
                                    this.Score = parseFloat(t.substring(3, 8)),
                                    this.Status = t.substring(8, 9),
                                    this.Type = parseInt(t.substring(9, 10)),
                                    t = t.substring(11, t.length),
                                    this.Answers = t.split("");
                                for (var i = 0; i < this.Answers.length; i++) this.Answers[i] = parseInt(this.Answers[i])
                            };
                            return {
                                createString: a,
                                createArray: c,
                                Load: t,
                                Submit: i,
                                End: n
                            }
                        }();
                    return {
                        Load: t,
                        Quit: s.Quit,
                        UpdateLesson: n.UpdateLesson,
                        End: a.End,
                        Submit: a.Submit
                    }
                },
                a = function () {
                    function t() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nLMSInitialize was not successful."),
                            "false";
                        var i = t.LMSInitialize("");
                        return "true" != i.toString() && d(),
                            i.toString()
                    }
                    function i() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nLMSFinish was not successful."),
                            "false";
                        var i = t.LMSFinish("");
                        return "true" != i.toString() && d(),
                            i.toString()
                    }
                    function e(t) {
                        var i = l();
                        if (null == i) return alert("Unable to locate the LMS's API Implementation.\nLMSGetValue was not successful."),
                            "";
                        var e = i.LMSGetValue(t),
                            s = i.LMSGetLastError().toString();
                        if (s != u._NoError) {
                            var n = i.LMSGetErrorString(s);
                            return alert("LMSGetValue(" + t + ") failed. \n" + n),
                                ""
                        }
                        return e.toString()
                    }
                    function s(t, i) {
                        var e = l();
                        if (null == e) return void alert("Unable to locate the LMS's API Implementation.\nLMSSetValue was not successful.");
                        var s = e.LMSSetValue(t, i);
                        "true" != s.toString() && d()
                    }
                    function n() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nLMSCommit was not successful."),
                            "false";
                        var i = t.LMSCommit("");
                        return "true" != i && d(),
                            i.toString()
                    }
                    function a() {
                        var t = l();
                        return null == t && alert("Unable to locate the LMS's API Implementation.\nLMSGetLastError was not successful."),
                            t.LMSGetLastError().toString()
                    }
                    function c(t) {
                        var i = l();
                        return null == i && alert("Unable to locate the LMS's API Implementation.\nLMSGetErrorString was not successful."),
                            i.LMSGetErrorString(t).toString()
                    }
                    function r(t) {
                        var i = l();
                        return null == i && alert("Unable to locate the LMS's API Implementation.\nLMSGetDiagnostic was not successful."),
                            i.LMSGetDiagnostic(t).toString()
                    }
                    function o() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nLMSIsInitialized() failed."),
                            !1;
                        t.LMSGetValue("cmi.core.student_name");
                        var i = t.LMSGetLastError().toString();
                        return i == u._NotInitialized ? !1 : !0
                    }
                    function d() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code."),
                            null;
                        var i = t.LMSGetLastError().toString();
                        if (i != u._NoError) {
                            var e = t.LMSGetErrorString(i);
                            1 == p && (e += "\n", e += t.LMSGetDiagnostic(null)),
                                alert(e)
                        }
                        return i
                    }
                    function l() {
                        return null == v && (v = f()),
                            v
                    }
                    function h(t) {
                        for (; null == t.API && null != t.parent && t.parent != t;) {
                            if (m++, m > 7) return alert("Error finding API -- too deeply nested."),
                                null;
                            t = t.parent
                        }
                        return t.API
                    }
                    function f() {
                        var t = h(window);
                        return null == t && null != window.opener && typeof window.opener != _undefined && (t = h(window.opener)),
                        null == t && alert("Unable to find an API adapter"),
                            t
                    }
                    var p = !1,
                        u = {
                            _NoError: 0,
                            _NotInitialized: 301
                        },
                        v = null,
                        m = 0;
                    return {
                        doLMSFinish: i,
                        doLMSInitialize: t,
                        doLMSGetValue: e,
                        doLMSSetValue: s,
                        doLMSCommit: n,
                        doLMSGetLastError: a,
                        doLMSGetErrorString: c,
                        doLMSGetDiagnostic: r,
                        LMSIsInitialized: o
                    }
                },
                c = function () {
                    function t() {
                        var t = l();
                        if (null === t) return alert("Unable to locate the LMS's API Implementation.\nInitialize was not successful."),
                            "false";
                        var i = t.Initialize("");
                        return "true" != i.toString() && d(),
                            i.toString()
                    }
                    function i() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nTerminate was not successful."),
                            "false";
                        var i = t.Terminate("");
                        return "true" != i.toString() && d(),
                            i.toString()
                    }
                    function e(t) {
                        var i = l();
                        if (null == i) return alert("Unable to locate the LMS's API Implementation.\nGetValue was not successful."),
                            "";
                        var e = i.GetValue(t),
                            s = i.GetLastError().toString();
                        return s != u._NoError ? "" : e.toString()
                    }
                    function s(t, i) {
                        var e = l();
                        if (null == e) return alert("Unable to locate the LMS's API Implementation.\nSetValue was not successful."),
                            null;
                        var s = e.SetValue(t, i);
                        if ("true" != s.toString()) {
                            var n = d();
                            s = n
                        }
                        return s
                    }
                    function n() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nCommit was not successful."),
                            "false";
                        var i = t.Commit("");
                        return "true" != i && d(),
                            i.toString()
                    }
                    function a() {
                        var t = l();
                        return null == t ? (alert("Unable to locate the LMS's API Implementation.\nGetLastError was not successful."), null) : t.GetLastError().toString()
                    }
                    function c(t) {
                        var i = l();
                        return null == i && alert("Unable to locate the LMS's API Implementation.\nGetErrorString was not successful."),
                            i.GetErrorString(t).toString()
                    }
                    function r(t) {
                        var i = l();
                        return null == i && alert("Unable to locate the LMS's API Implementation.\nGetDiagnostic was not successful."),
                            i.GetDiagnostic(t).toString()
                    }
                    function o() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nlmsIsInitialized() failed."),
                            !1;
                        t.GetValue("cmi.core.student_name");
                        var i = t.GetLastError().toString();
                        return i == _NotInitialized ? !1 : !0
                    }
                    function d() {
                        var t = l();
                        if (null == t) return alert("Unable to locate the LMS's API Implementation.\nCannot determine LMS error code."),
                            null;
                        var i = t.GetLastError().toString();
                        if (i != u._NoError) {
                            var e = t.GetErrorString(i);
                            1 == p && (e += "\n", e += t.GetDiagnostic(null)),
                                alert(e)
                        }
                        return i
                    }
                    function l() {
                        return null == v && (v = f()),
                            v
                    }
                    function h(t) {
                        for (var i = 0; null == t.API_1484_11 && null != t.parent && t.parent != t && m >= i;) i++,
                            t = t.parent;
                        return t.API_1484_11
                    }
                    function f() {
                        var t = null;
                        return null != window.parent && window.parent != window && (t = h(window.parent)),
                        null == t && null != window.top.opener && (t = h(window.top.opener)),
                            t
                    }
                    var p = !1,
                        u = {
                            _NoError: 0
                        },
                        v = null,
                        m = 500;
                    return {
                        doInitialize: t,
                        doTerminate: i,
                        doGetValue: e,
                        doSetValue: s,
                        doCommit: n,
                        doGetLastError: a,
                        doGetErrorString: c,
                        doGetDiagnostic: r,
                        LMSIsInitialized: o
                    }
                };
            return "2004" == t ? new n : new s
        },
        caS = document.createElement("audio");
    StylePpty = function () {},
        StylePpty.Transform = function () {
            if ("undefined" == typeof this.transform) {
                this.transform = "transform";
                for (var t, i = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"], e = document.documentElement; t = i.shift();) if ("string" == typeof e.style[t]) return this.transform = t,
                    t
            }
            return this.transform
        };
    var DOPStyle = new
    function () {
        "undefined" == typeof window.getComputedStyle ? this.s = function (t, i) {
            return "undefined" != typeof t.tagName ? t.currentStyle[i] : void 0
        } : this.s = function (t, i) {
            return "undefined" != typeof t.tagName ? document.defaultView.getComputedStyle(t, null)[i] : void 0
        }
    };
    ClntH = function (t) {
        for (var i = t.childNodes, e = -1, s = -1, n = {
            h: 0,
            w: 0
        }, a = 0; a < i.length; a++) {
            var c = i[a];
            1 == c.nodeType && "PRE" == c.nodeName && (c.style.left != s && (n.w += parseFloat(c.scrollWidth), s = c.style.left), c.style.top != e && (n.h += parseFloat(c.scrollHeight), e = c.style.top))
        }
        return n
    },
        InItD = function (t) {
            if (this.p = t, this.IniTSd = !0, 5 != this.p.c.e0 ? (this.d = gv.o("s" + gc + "s" + this.p.c.c0), this.dpd = gv.o("s" + gc + "s" + this.p.c.c0 + "c")) : (this.d = gv.o(this.p.c.c0), this.dpd = gv.o(this.p.c.c0 + "c")), null == this.d) return void(this.IniTSd = !1);
            if (null == this.dpd && (this.dpd = this.d), this.h = this.d.style.height ? parseFloat(this.d.style.height) : this.d.parentNode.style.height ? parseFloat(this.d.parentNode.style.height) : parseFloat(this.d.scrollHeight), this.w = this.d.style.width ? parseFloat(this.d.style.width) : this.d.parentNode.style.width ? parseFloat(this.d.parentNode.style.width) : parseFloat(this.d.scrollWidth), 0 == this.h || 0 == this.w) {
                var i = ClntH(this.dpd);
                this.h = i.h,
                    this.w = i.w
            }
            this.l = this.d.style.left ? parseFloat(this.d.style.left) : parseFloat(this.d.parentNode.style.left),
                this.t = this.d.style.top ? parseFloat(this.d.style.top) : parseFloat(this.d.parentNode.style.top),
                this.op = parseFloat(DOPStyle.s(this.dpd, "opacity")),
                this.st = gt,
                this.setTrasform = function () {
                    this.trns = this.p.getTranslate(),
                        this.scl = this.p.getScale(),
                        this.rta = this.p.getRotate(),
                        this.skw = this.p.getSkewX()
                },
                this.reset = function () {
                    this.d.style.height = this.h + "px",
                        this.d.style.width = this.w + "px",
                        this.d.style.left = this.l + "px",
                        this.d.style.top = this.t + "px",
                        this.dpd.style.opacity = this.op,
                        this.p.setTranslate(this.trns.x, this.trns.y),
                        this.p.setScale(this.scl.x, this.scl.y),
                        this.p.setRotate(this.rta),
                        this.p.setSkewX(this.skw)
                }
        },
        Banim = function (c) {
            function resetColors(t, i) {
                try {
                    for (var e = t.sV.d.getElementsByTagName("pre"), s = e.length, n = 0; s > n; n++) {
                        var a = e[n];
                        a.style.color = i[n]
                    }
                } catch (c) {}
            }
            this.c = c,
                this.blks = new Array,
                this.gtime = function () {
                    var t = gt;
                    return this.c.c3 < 0 && this.rpdCnt > 0 && (t = (new Date).getTime()),
                        t
                },
                this.initBanim = function (t) {
                    return "undefined" != typeof this.sV ? !1 : (this.sV = new InItD(this), this.IniTSd = this.sV.IniTSd, this.IniTSd ? (this.sV.setTrasform(), this.rpdCnt = 0, this.initT = this.st = t, "undefined" != typeof this.c.c6 && (this.aSrc = gv.o(this.c.c6).src), this.at = "undefined" == typeof this.c.e1 ? 1 : this.c.e1, this.InitAnimBlocks(), !0) : void 0)
                },
                this.InitAnimBlocks = function () {
                    if (1 != this.at) for (var p = this, cBlk = 0, cPara = 0, cBlkI = 1;;) {
                        var nblkId = p.c.e3[cPara] + "b" + cBlkI;
                        if (null != gv.o(nblkId)) {
                            var nBtm = 3 === p.c.e0 ? p.st + p.c.c1 + p.c.c2 + p.c.e2 * cBlk : p.st + p.c.e2 * cBlk;
                            nBtm = 3 === p.c.e0 && 0 === p.c.e2 ? p.st + p.c.e2 * cBlk : nBtm;
                            var pc = p.c,
                                nC = {
                                    c0: nblkId,
                                    c1: pc.c1,
                                    c2: pc.c2,
                                    c3: 0,
                                    c4: pc.c4,
                                    c5: pc.c5,
                                    c7: pc.c7,
                                    s0: pc.s0,
                                    s1: pc.s1,
                                    s2: pc.s2,
                                    s3: pc.s3,
                                    s4: pc.s4,
                                    s5: pc.s5,
                                    s6: pc.s6,
                                    v: pc.v0,
                                    e0: 5,
                                    e1: 1,
                                    e2: pc.e2,
                                    e3: 0
                                };
                            "undefined" != typeof window[p.c.c5] ? p.blks[cBlk] = eval("new " + p.c.c5 + "(nC)") : p.blks[cBlk] = new Fade(nC);
                            var blk = p.blks[cBlk];
                            blk.Initialize(nBtm),
                                cBlk++,
                                cBlkI++
                        } else {
                            if (!(cPara + 1 < p.c.e3.length)) break;
                            cPara++,
                                cBlkI = 1
                        }
                    }
                },
                this.resetBanim = function () {
                    this.pozd = !1,
                        this.stpd = !1;
                    for (x in this.blks) this.blks[x].pozd = !1,
                        this.blks[x].stpd = !1
                },
                this.pause = function () {
                    this.pozd = !0;
                    for (x in this.blks) this.blks[x].pozd = !0
                },
                this.stop = function () {
                    this.pozd = !1,
                        this.stpd = !0;
                    for (x in this.blks) this.blks[x].pozd = !1,
                        this.blks[x].stpd = !0
                },
                this.reset = function () {
                    this.rpdCnt = 0,
                        this.st = this.initT,
                        this.stop(),
                        this.stopCaS(),
                    "undefined" != typeof this.dltCv && this.dltCv(),
                    "undefined" != typeof this.mc && this.mc.cvt.clearRect(0, 0, this.w, this.h),
                    "undefined" != typeof this.sV && this.sV.reset && this.sV.reset();
                    for (x in this.blks) this.blks[x].reset();
                    "undefined" != typeof this.preColors && resetColors(this, this.preColors)
                },
                this.stopCaS = function () {
                    this.aSrc == caS.src && caS.canPlayType && (caS.paused || caS.pause(), this.pozd || (caS.src = null))
                },
                this.playCaS = function () {
                    caS.canPlayType && "undefined" != typeof this.aSrc && (this.aSrc != caS.src || caS.paused) && (this.aSrc != caS.src && (caS.src = this.aSrc), caS.play())
                },
                this.doRepeat = function () {
                    this.rpdCnt++,
                        this.rpdCnt < this.c.c3 || this.c.c3 < 0 ? (this.st = this.c.c3 < 0 ? this.gtime() : this.st + this.c.c2, this.stopCaS(), this.play()) : 1 == c.c8 && (this.sV.dpd.style.opacity = 0)
                },
                this.setTranslate = function (t, i) {
                    var e = StylePpty.Transform(),
                        s = this.sV.d.style[e],
                        n = /translate\(+[^\)]+\)/,
                        a = "translate(" + t + "px," + i + "px)"; - 1 != s.search(n) ? s = s.replace(n, a) : null != s && (s = a + s),
                        this.sV.d.style[e] = s
                },
                this.getTranslate = function () {
                    var t = {
                            x: 0,
                            y: 0
                        },
                        i = StylePpty.Transform(),
                        e = this.sV.d.style[i],
                        s = /translate\(+[^\)]+\)/,
                        n = e.match(s);
                    if (null != n) {
                        var a = n[0].match(/[0-9.-]+|[\d]+[^p]/g);
                        t.x = parseFloat(a[0]),
                            t.y = parseFloat(a[1])
                    }
                    return t
                },
                this.setScale = function (t, i) {
                    var e = StylePpty.Transform(),
                        s = this.sV.d.style[e],
                        n = /scale\(+[^\)]+\)/,
                        a = "scale(" + t + "," + i + ")"; - 1 != s.search(n) ? s = s.replace(n, a) : null != s && (s += a),
                        this.sV.d.style[e] = s
                },
                this.getScale = function () {
                    var t = {
                            x: 1,
                            y: 1
                        },
                        i = StylePpty.Transform(),
                        e = this.sV.d.style[i],
                        s = /scale\(+[^\)]+\)/,
                        n = e.match(s);
                    if (null != n) {
                        var a = n[0].match(/[0-9.-]+|[\d]+[^p]/g);
                        t.x = parseFloat(a[0]),
                            t.y = parseFloat(a[1])
                    }
                    return t
                },
                this.setRotate = function (t) {
                    var i = StylePpty.Transform(),
                        e = this.sV.d.style[i],
                        s = /rotate\(+[^\)]+\)/,
                        n = "rotate(" + t + "deg)"; - 1 != e.search(s) ? e = e.replace(s, n) : null != e && (e += n),
                        this.sV.d.style[i] = e
                },
                this.getRotate = function () {
                    var t = 0,
                        i = StylePpty.Transform(),
                        e = this.sV.d.style[i],
                        s = /rotate\(+[^\)]+\)/,
                        n = e.match(s);
                    if (null != n) {
                        var a = n[0].match(/[0-9.-]+|[\d]+[^d]/g);
                        t = parseFloat(a[0])
                    }
                    return t
                },
                this.setSkewX = function (t) {
                    var i = StylePpty.Transform(),
                        e = this.sV.d.style[i],
                        s = /skewX\(+[^\)]+\)/,
                        n = "skewX(" + t + "deg)"; - 1 != e.search(s) ? e = e.replace(s, n) : null != e && (e += n),
                        this.sV.d.style[i] = e
                },
                this.getSkewX = function () {
                    var t = 0,
                        i = StylePpty.Transform(),
                        e = this.sV.d.style[i],
                        s = /skewX\(+[^\)]+\)/,
                        n = e.match(s);
                    if (null != n) {
                        var a = n[0].match(/[0-9.-]+|[\d]+[^d]/g);
                        t = parseFloat(a[0])
                    }
                    return t
                },
                this.plyBlockAnim = function () {
                    function t() {
                        if (!(i.pozd || i.stpd || e >= i.blks.length)) {
                            for (;;) {
                                if (e >= i.blks.length) return;
                                var s = i.blks[e];
                                if (!(s.st <= i.gtime())) break;
                                s.play(),
                                    e++
                            }
                            Cbfun(t)
                        }
                    }
                    var i = this;
                    if (1 != i.at) {
                        var e = 0;
                        Cbfun(t)
                    }
                }
        },
        Cv = function (t, i) {
            this.cv = document.createElement("canvas"),
                this.cv.height = i,
                this.cv.width = t,
                this.cvt = this.cv.getContext("2d"),
                this.bdrawn = !1,
                this.drawCmpltDiv = function (t, i, e) {
                    for (var s = t.childNodes, n = s.length, a = 0; n > a; a++) {
                        var c = s[a];
                        if (1 == c.nodeType && "IMG" == c.nodeName) {
                            var r = DOPStyle.s(t, "height"),
                                o = DOPStyle.s(t, "width"),
                                d = DOPStyle.s(t.parentNode, "height"),
                                l = DOPStyle.s(t.parentNode, "width"),
                                h = r && "100%" != r ? parseFloat(r) : parseFloat(d),
                                f = o && "100%" != o ? parseFloat(o) : parseFloat(l);
                            try {
                                this.cvt.drawImage(c, i, e, f, h)
                            } catch (p) {}
                        }
                    }
                    for (var a = 0; n > a; a++) {
                        var c = s[a];
                        if (1 == c.nodeType && "PRE" == c.nodeName) {
                            var u = c.style.left ? i + parseFloat(c.style.left) : i,
                                v = c.style.top ? e + parseFloat(c.style.top) : e;
                            this.cvt.font = DOPStyle.s(c, "fontStyle") + " " + DOPStyle.s(c, "fontWeight") + " " + DOPStyle.s(c, "fontSize") + " " + DOPStyle.s(c, "fontFamily"),
                                this.cvt.fillStyle = DOPStyle.s(c, "color"),
                                this.cvt.textBaseline = "top",
                                this.cvt.fillText(c.innerHTML, u, v);
                            var m = DOPStyle.s(c, "textDecoration");
                            if ("underline" == m) {
                                var g = parseFloat(DOPStyle.s(c, "fontSize")),
                                    y = v + g;
                                this.drawUline(this.cvt, c, u, y)
                            }
                        }
                    }
                    for (var a = 0; n > a; a++) {
                        var c = s[a],
                            S = DOPStyle.s(c, "opacity");
                        if (1 == c.nodeType && "DIV" == c.nodeName && "0" != S) {
                            var b = DOPStyle.s(c, "left"),
                                C = DOPStyle.s(c, "top"),
                                u = b ? i + parseFloat(b) : 0,
                                v = C ? e + parseFloat(C) : 0;
                            this.drawCmpltDiv(c, u, v)
                        }
                    }
                    this.bdrawn = !0
                },
                this.drawDiv = function (t) {
                    var i = t.getElementsByTagName("img"),
                        e = new Image,
                        s = this;
                    i.length > 0 ? e.src = i[0].src : this.drawText(t),
                        e.onload = function () {
                            s.cvt.drawImage(e, 0, 0, e.width, e.height, 0, 0, s.cv.width, s.cv.height),
                                s.drawText(t)
                        }
                },
                this.drawText = function (t) {
                    for (var i = t.getElementsByTagName("pre"), e = i.length, s = 0; e > s; s++) {
                        var n = i[s];
                        this.cvt.font = DOPStyle.s(n, "fontStyle") + " " + DOPStyle.s(n, "fontWeight") + " " + DOPStyle.s(n, "fontSize") + " " + DOPStyle.s(n, "fontFamily"),
                            this.cvt.fillStyle = DOPStyle.s(n, "color");
                        var a = parseFloat(n.style.left),
                            c = parseFloat(n.style.top) + n.scrollHeight;
                        this.cvt.textBaseline = "bottom",
                            this.cvt.fillText(n.innerHTML, a, c);
                        var r = DOPStyle.s(n, "textDecoration");
                        if ("underline" == r) {
                            var o = parseFloat(DOPStyle.s(n, "fontSize")),
                                d = c - o / 18 * 4.5;
                            this.drawUline(this.cvt, n, a, d)
                        }
                    }
                    this.bdrawn = !0
                },
                this.drawUline = function (t, i, e, s) {
                    var n = t.measureText(i.innerHTML).width;
                    t.strokeStyle = DOPStyle.s(i, "color"),
                        t.lineWidth = 1,
                        t.beginPath(),
                        t.moveTo(e, s),
                        t.lineTo(e + n, s),
                        t.stroke()
                },
                this.apndTo = function (t) {
                    t.appendChild(this.cv)
                },
                this.draw = function (t, i) {
                    t.bdrawn && (i && this.cvt.clearRect(0, 0, this.cv.width, this.cv.height), this.cvt.drawImage(t.cv, 0, 0))
                }
        },
        MskAnim = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.initMskAnim = function (t) {
                    return this.initBanim(t) ? (this.h = this.sV.h, this.w = this.sV.w, this.im = new Image, this.bgcv = new Cv(this.w, this.h), this.frcv = new Cv(this.w, this.h), -1 == this.c.c4 ? this.bgcv.drawCmpltDiv(this.sV.d, 0, 0) : this.bgcv.drawDiv(this.sV.dpd), this.fct = this.frcv.cvt, this.cp = "destination-in", 2 == this.c.c4 && (this.cp = "destination-out"), !0) : !1
                },
                this.resetMskAnim = function () {
                    this.pozd || (-1 == this.c.c4 ? this.frcv.apndTo(this.sV.d.parentNode) : this.frcv.apndTo(this.sV.d)),
                        this.resetBanim()
                },
                this.doAfterEffect = function () {
                    -1 == this.c.c4 && (this.sV.d.style.opacity = 1, this.reset())
                },
                this.dltCv = function () {
                    try {
                        2 == this.c.c4 && (this.sV.dpd.style.opacity = 0),
                        1 == this.c.c4 && (this.sV.dpd.style.opacity = 1),
                            this.fct.clearRect(0, 0, this.w, this.h),
                            -1 == this.c.c4 ? this.sV.d.parentNode.removeChild(this.frcv.cv) : this.sV.d.removeChild(this.frcv.cv)
                    } catch (t) {}
                }
        },
        BCurve = function (t, i, e, s, n, a, c, r, o) {
            this.x0 = t,
                this.y0 = i,
                this.x1 = e,
                this.y1 = s,
                this.x2 = n,
                this.y2 = a,
                this.x3 = c,
                this.y3 = r,
                this.dn = o,
                this.getPointAfterT = function (t) {
                    var i = 1 / this.dn * t,
                        e = 3 * (this.x1 - this.x0),
                        s = 3 * (this.x2 - this.x1) - e,
                        n = this.x3 - this.x0 - e - s,
                        a = 3 * (this.y1 - this.y0),
                        c = 3 * (this.y2 - this.y1) - a,
                        r = this.y3 - this.y0 - a - c,
                        o = n * i * i * i + s * i * i + e * i + this.x0,
                        d = r * i * i * i + c * i * i + a * i + this.y0,
                        l = {
                            x: o,
                            y: d
                        };
                    return l
                },
                this.getRevPointAfterT = function (t) {
                    var i = 1 / this.dn * t,
                        e = 3 * (this.x2 - this.x3),
                        s = 3 * (this.x1 - this.x2) - e,
                        n = this.x0 - this.x3 - e - s,
                        a = 3 * (this.y2 - this.y3),
                        c = 3 * (this.y1 - this.y2) - a,
                        r = this.y0 - this.y3 - a - c,
                        o = n * i * i * i + s * i * i + e * i + this.x3,
                        d = r * i * i * i + c * i * i + a * i + this.y3,
                        l = {
                            x: o,
                            y: d
                        };
                    return l
                }
        },
        Line = function (t, i, e, s, n) {
            this.x0 = t,
                this.y0 = i,
                this.x1 = e,
                this.y1 = s,
                this.dn = n,
                this.xd = Math.abs(this.x0 - this.x1),
                this.yd = Math.abs(this.y0 - this.y1),
                this.getPointAfterT = function (t) {
                    var i = this.xd / this.dn * t,
                        e = this.yd / this.dn * t,
                        s = this.x0 < this.x1 ? this.x0 + i : this.x0 - i,
                        n = this.y0 < this.y1 ? this.y0 + e : this.y0 - e,
                        a = {
                            x: s,
                            y: n
                        };
                    return a
                },
                this.getRevPointAfterT = function (t) {
                    var i = this.xd / this.dn * t,
                        e = this.yd / this.dn * t,
                        s = this.x1 < this.x0 ? this.x1 + i : this.x1 - i,
                        n = this.y1 < this.y0 ? this.y1 + e : this.y1 - e,
                        a = {
                            x: s,
                            y: n
                        };
                    return a
                }
        },
        MNode = function (t) {
            var i = t.split(",");
            switch (this.tp = i[0], this.x0 = parseFloat(i[1]), this.y0 = parseFloat(i[2]), this.dn = 0, this.tp) {
                case "L":
                    this.x1 = parseFloat(i[3]),
                        this.y1 = parseFloat(i[4]),
                        this.dn = 1e3 * parseFloat(i[5]),
                        this.ln = new Line(this.x0, this.y0, this.x1, this.y1, this.dn);
                    break;
                case "C":
                    this.x1 = parseFloat(i[3]),
                        this.y1 = parseFloat(i[4]),
                        this.x2 = parseFloat(i[5]),
                        this.y2 = parseFloat(i[6]),
                        this.x3 = parseFloat(i[7]),
                        this.y3 = parseFloat(i[8]),
                        this.dn = 1e3 * parseFloat(i[9]),
                        this.bc = new BCurve(this.x0, this.y0, this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.dn)
            }
            this.getNextPoint = function (t, i) {
                var e;
                switch (this.tp) {
                    case "M":
                    case "E":
                        e = {
                            x: this.x0,
                            y: this.y0
                        };
                        break;
                    case "L":
                        e = this.ln.getPointAfterT(i);
                        break;
                    case "C":
                        e = this.bc.getPointAfterT(i)
                }
                return e
            },
                this.getRevNextPoint = function (t, i) {
                    var e;
                    switch (this.tp) {
                        case "M":
                        case "E":
                            e = {
                                x: this.x0,
                                y: this.y0
                            };
                            break;
                        case "L":
                            e = this.ln.getRevPointAfterT(i);
                            break;
                        case "C":
                            e = this.bc.getRevPointAfterT(i)
                    }
                    return e
                }
        },
        MAnim = function (t) {
            this.pnt = t,
                this.Mns = new Array,
                this.prvTm = 0,
                this.rpd = this.pnt.c.s1;
            for (var i = this.pnt.c.s0.split("|"), e = 0, s = 0; s < i.length; s++) i[s].length > 1 && (this.Mns[e++] = new MNode(i[s].replace(" ", ",")));
            this.cNode = 1 == this.rpd ? this.Mns.length - 1 : 0,
                this.sDirn = 1 == this.rpd ? "rpd" : "fpd",
                this.resetMAnim = function (t) {
                    t.pozd || (this.prvTm = 0, this.cNode = 1 == this.rpd ? this.Mns.length - 1 : 0, this.sDirn = 1 == this.rpd ? "rpd" : "fpd"),
                        this.pnt.resetBanim()
                },
                this.setEndPoint = function () {
                    var t = this.Mns[this.Mns.length - 1];
                    this.pnt.setTranslate(t.x0, t.y0)
                },
                this.getNextPoint = function (t, i) {
                    var e, s = this.Mns[this.cNode];
                    return "rpd" == this.sDirn && (this.cNode = 0, this.sDirn = "None"),
                        i > this.prvTm + s.dn ? this.cNode + 1 >= this.Mns.length ? e : (this.prvTm += s.dn, this.cNode++, this.getNextPoint(t, i)) : e = s.getNextPoint(t, i - this.prvTm)
                },
                this.setRevEndPoint = function () {
                    var t = this.Mns[0];
                    this.pnt.setTranslate(t.x0, t.y0)
                },
                this.getRevNextPoint = function (t, i) {
                    var e, s = this.Mns[this.cNode];
                    return "fpd" == this.sDirn && (this.cNode = this.Mns.length - 1, this.sDirn = "None"),
                        i > this.prvTm + s.dn ? this.cNode - 1 < 0 ? e : (this.prvTm += s.dn, this.cNode--, this.getRevNextPoint(t, i)) : e = s.getRevNextPoint(t, i - this.prvTm)
                }
        },
        Split = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initMskAnim(t)) {
                        this.mc = new Cv(this.w, this.h),
                            this.cp = "destination-in";
                        var i = this.c.c4,
                            e = this.c.s0;
                        ((1 == i || -1 == i) && 23 == e || (1 == i || -1 == i) && 25 == e || 2 == i && 24 == e || 2 == i && 26 == e) && (this.cp = "destination-out")
                    }
                }
        },
        Split.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s = 24 == i.c.s0 || 26 == i.c.s0 ? i.w / i.c.c2 * e : i.w / i.c.c2 * (i.c.c2 - e),
                    n = 24 == i.c.s0 || 26 == i.c.s0 ? i.h / i.c.c2 * e : i.h / i.c.c2 * (i.c.c2 - e);
                return 24 != i.c.s0 && 26 != i.c.s0 || !(s > i.w || n > i.h) ? 23 != i.c.s0 && 25 != i.c.s0 || !(0 > s || 0 > n) || (s = n = 0) : (s = i.w, n = i.h),
                    i.fct.save(),
                    i.frcv.draw(i.bgcv, !0),
                    i.sV.dpd.style.opacity = 0,
                    i.mc.cvt.save(),
                    i.mc.cvt.clearRect(0, 0, i.w, i.h),
                (23 == i.c.s0 || 24 == i.c.s0) && (i.mc.cvt.beginPath(), i.mc.cvt.fillRect(0, (i.h - n) / 2, i.w, n), i.mc.cvt.closePath()),
                (25 == i.c.s0 || 26 == i.c.s0) && (i.mc.cvt.beginPath(), i.mc.cvt.fillRect((i.w - s) / 2, 0, s, i.h), i.mc.cvt.closePath()),
                    i.mc.cvt.restore(),
                    i.mc.bdrawn = !0,
                    i.fct.globalCompositeOperation = i.cp,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Plus = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-in", ((1 == this.c.c4 || -1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"))
                }
        },
        Plus.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s = 20 == i.c.s0 ? i.w / i.c.c2 * e : i.w / i.c.c2 * (i.c.c2 - e),
                    n = 20 == i.c.s0 ? i.h / i.c.c2 * e : i.h / i.c.c2 * (i.c.c2 - e);
                return 20 == i.c.s0 && (s > i.w || n > i.h) ? (s = i.w, n = i.h) : 19 == i.c.s0 && (0 > s || 0 > n) && (s = n = 0),
                    i.fct.save(),
                    i.frcv.draw(i.bgcv, !0),
                    i.sV.dpd.style.opacity = 0,
                    i.mc.cvt.save(),
                    i.mc.cvt.clearRect(0, 0, i.w, i.h),
                    i.mc.cvt.beginPath(),
                    i.mc.cvt.fillRect(0, (i.h - n) / 2, i.w, n),
                    i.mc.cvt.closePath(),
                    i.mc.cvt.beginPath(),
                    i.mc.cvt.fillRect((i.w - s) / 2, 0, s, i.h),
                    i.mc.cvt.closePath(),
                    i.mc.cvt.restore(),
                    i.mc.bdrawn = !0,
                    i.fct.globalCompositeOperation = i.cp,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        PeekOut = PeekIn = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.mxDiff = 1 == this.c.s0 || 3 == this.c.s0 ? this.h : this.w)
                }
        },
        PeekOut.prototype.play = PeekIn.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s = i.mxDiff / i.c.c2 * e,
                    n = 0,
                    a = 0;
                return e >= i.c.c2 && (s = i.mxDiff),
                    1 == i.c.s0 || 3 == i.c.s0 ? a = 1 == i.c.c4 ? i.mxDiff - s : s : (2 == i.c.s0 || 4 == i.c.s0) && (n = 1 == i.c.c4 ? i.mxDiff - s : s),
                    a = 1 == i.c.s0 ? -a : a,
                    n = 4 == i.c.s0 ? -n : n,
                    i.sV.dpd.style.opacity = 0,
                    i.fct.save(),
                    i.fct.clearRect(0, 0, i.w, i.h),
                    i.mc.cvt.save(),
                    i.mc.cvt.clearRect(0, 0, i.w, i.h),
                    i.mc.cvt.drawImage(i.bgcv.cv, n, a),
                    i.mc.cvt.restore(),
                    i.mc.bdrawn = !0,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    e >= i.c.c2 ? (i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        EaseOut = EaseIn = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (1 == this.c.c4 && (this.mc = new Cv(this.w, this.h)), this.trDiff = 140)
                }
        },
        EaseOut.prototype.play = EaseIn.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                if (i.playCaS(), 1 == i.c.c4) {
                    var s = e >= i.c.c2 ? i.w : i.w / i.c.c2 * e,
                        n = i.trDiff * (1 - s / i.w);
                    i.sV.dpd.style.opacity = 0,
                        i.fct.save(),
                        i.fct.clearRect(0, 0, i.w, i.h),
                        i.mc.cvt.save(),
                        i.mc.cvt.clearRect(0, 0, i.w, i.h),
                        i.mc.cvt.drawImage(i.bgcv.cv, i.w - s, 0),
                        i.mc.cvt.restore(),
                        i.mc.bdrawn = !0,
                        i.frcv.draw(i.mc, !1),
                        i.fct.restore(),
                        i.setTranslate(-n, 0)
                } else if (2 == i.c.c4) {
                    var n = e >= i.c.c2 ? 0 : i.trDiff / i.c.c2 * e,
                        a = e >= i.c.c2 ? 0 : 1 - 1 / i.c.c2 * e;
                    i.sV.dpd.style.opacity = a,
                        i.setTranslate(-n, 0)
                }
                return e >= i.c.c2 ? (i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Box = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-in", ((-1 == this.c.c4 || 1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"))
                }
        },
        Box.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s = 20 == i.c.s0 ? i.w / i.c.c2 * e : i.w / i.c.c2 * (i.c.c2 - e),
                    n = 20 == i.c.s0 ? i.h / i.c.c2 * e : i.h / i.c.c2 * (i.c.c2 - e);
                return 20 == i.c.s0 && (s > i.w || n > i.h) ? (s = i.w, n = i.h) : 19 == i.c.s0 && (0 > s || 0 > n) && (s = n = 0),
                    i.fct.save(),
                    i.frcv.draw(i.bgcv, !0),
                    i.sV.dpd.style.opacity = 0,
                    i.mc.cvt.save(),
                    i.mc.cvt.clearRect(0, 0, i.w, i.h),
                    i.mc.cvt.beginPath(),
                    i.mc.cvt.fillRect((i.w - s) / 2, (i.h - n) / 2, s, n),
                    i.mc.cvt.restore(),
                    i.mc.bdrawn = !0,
                    i.fct.globalCompositeOperation = i.cp,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Checkerboard = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.strC = 6, this.strH = this.h / this.strC, this.strW = this.w / this.strC, 16 == this.c.s0 ? this.mm = this.strW / this.c.c2 : this.mm = this.strH / this.c.c2)
                }
        },
        Checkerboard.prototype.play = function () {
            function i() {
                if (s.pozd || s.stpd) return void s.stopCaS();
                var t = s.gtime() - s.st - s.c.c1;
                return 0 >= t ? void(Math.abs(t) > s.c.c1 ? s.reset() : Cbfun(i)) : (s.playCaS(), s.fct.save(), s.frcv.draw(s.bgcv, !0), s.fct.beginPath(), s.fct.globalCompositeOperation = s.cp, s.sV.dpd.style.opacity = 0, e(s, t), s.mc.bdrawn = !0, s.frcv.draw(s.mc, !1), s.fct.restore(), t >= s.c.c2 ? (s.doAfterEffect(), s.dltCv(), void s.doRepeat()) : void Cbfun(i))
            }
            function e(i, e) {
                i.mc.cvt.clearRect(0, 0, i.mc.cv.width, i.mc.cv.height),
                    i.mc.cvt.beginPath();
                for (i.mc.cvt.fillStyle = "green", l = i.mm * e, ir = 0; ir < i.strC; ir++) for (t = ir % 2, 16 == i.c.s0 ? (y = i.strH * ir, x = 0 - i.strW / 2 * t) : (y = 0 - i.strH / 2 * t, x = i.strW * ir), cc = i.strC + t, ic = 0; ic < cc; ic++) 16 == i.c.s0 ? (i.mc.cvt.fillRect(2 == i.c.c4 ? x + i.strW - l : x, y, l, i.strH + 1), x += i.strW) : 17 == i.c.s0 ? (i.mc.cvt.fillRect(x, y, i.strW + 1, l), y += i.strH) : (i.mc.cvt.fillRect(x, 2 == i.c.c4 ? y + i.strH - l : y, i.strW + 1, l), y += i.strH);
                i.mc.cvt.restore()
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var s = this;
            Cbfun(i)
        },
        Blinds = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.strC = 6, 16 == this.c.s0 ? (this.strW = this.w, this.strH = this.h / this.strC, this.mm = this.strH / this.c.c2) : (this.strW = this.w / this.strC, this.strH = this.h, this.mm = this.strW / this.c.c2))
                }
        },
        Blinds.prototype.play = function () {
            function t() {
                if (e.pozd || e.stpd) return void e.stopCaS();
                var s = e.gtime() - e.st - e.c.c1;
                return 0 >= s ? void(Math.abs(s) > e.c.c1 ? e.reset() : Cbfun(t)) : (e.playCaS(), e.fct.save(), e.frcv.draw(e.bgcv, !0), e.fct.beginPath(), e.fct.globalCompositeOperation = e.cp, e.sV.dpd.style.opacity = 0, i(e, s), e.mc.bdrawn = !0, e.frcv.draw(e.mc, !1), e.fct.restore(), s >= e.c.c2 ? (e.doAfterEffect(), e.dltCv(), void e.doRepeat()) : void Cbfun(t))
            }
            function i(t, i) {
                t.mc.cvt.clearRect(0, 0, t.mc.cv.width, t.mc.cv.height),
                    t.mc.cvt.beginPath();
                for (t.mc.cvt.fillStyle = "green", l = t.mm * i, x = 0, y = 0, ir = 0; ir < t.strC; ir++) 16 == t.c.s0 ? (t.mc.cvt.fillRect(0, 2 == t.c.c4 ? y + t.strH - l : y, t.strW, l), y += t.strH) : (t.mc.cvt.fillRect(2 == t.c.c4 ? x + t.strW - l : x, 0, l, t.strH), x += t.strW);
                t.mc.cvt.restore()
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var e = this;
            Cbfun(t)
        },
        Wipe = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), 4 == this.c.s0 || 2 == this.c.s0 ? this.mm = this.w / this.c.c2 : this.mm = this.h / this.c.c2)
                }
        },
        Wipe.prototype.play = function () {
            function t() {
                if (e.pozd || e.stpd) return void e.stopCaS();
                var s = e.gtime() - e.st - e.c.c1;
                return 0 >= s ? void(Math.abs(s) > e.c.c1 ? e.reset() : Cbfun(t)) : (e.playCaS(), e.fct.save(), e.frcv.draw(e.bgcv, !0), e.fct.beginPath(), e.fct.globalCompositeOperation = e.cp, e.sV.dpd.style.opacity = 0, i(e, s), e.mc.bdrawn = !0, e.frcv.draw(e.mc, !1), e.fct.restore(), s >= e.c.c2 ? (e.doAfterEffect(), e.dltCv(), void e.doRepeat()) : void Cbfun(t))
            }
            function i(t, i) {
                t.mc.cvt.clearRect(0, 0, t.mc.cv.width, t.mc.cv.height),
                    t.mc.cvt.beginPath(),
                    t.mc.cvt.fillStyle = "green",
                    l = t.mm * i,
                    x = 0,
                    y = 0,
                    w = 0,
                    h = 0,
                    4 == t.c.s0 ? (w = l, h = t.h) : 2 == t.c.s0 ? (w = l, x = t.w - l, h = t.h) : 1 == t.c.s0 ? (w = t.w, h = l) : 3 == t.c.s0 && (w = t.w, h = l, y = t.h - l),
                    t.mc.cvt.fillRect(x, y, w, h),
                    t.mc.cvt.restore()
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var e = this;
            Cbfun(t)
        },
        Circle = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.cp = "destination-in", ((-1 == this.c.c4 || 1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"), this.mc = new Cv(100, 100), this.rm = Math.sqrt(this.mc.cv.width * this.mc.cv.width + this.mc.cv.height * this.mc.cv.height) / 2, this.mm = this.rm / this.c.c2, this.b = 3)
                }
        },
        Circle.prototype.play = function () {
            function t() {
                if (e.pozd || e.stpd) return void e.stopCaS();
                var s = e.gtime() - e.st - e.c.c1;
                if (0 >= s) return void(Math.abs(s) > e.c.c1 ? e.reset() : Cbfun(t));
                e.playCaS();
                var n = 20 == e.c.s0 ? s * e.mm : s * e.mm > e.rm ? e.rm : e.rm - s * e.mm;
                return e.fct.save(),
                    e.frcv.draw(e.bgcv, !0),
                    e.fct.beginPath(),
                    e.fct.globalCompositeOperation = e.cp,
                    e.sV.dpd.style.opacity = 0,
                    i(e, n),
                    e.fct.scale(e.frcv.cv.width / e.mc.cv.width, e.frcv.cv.height / e.mc.cv.height),
                    e.mc.bdrawn = !0,
                    e.frcv.draw(e.mc, !1),
                    e.fct.restore(),
                    s >= e.c.c2 ? (e.doAfterEffect(), e.dltCv(), void e.doRepeat()) : void Cbfun(t)
            }
            function i(t, i) {
                var e = t.mc.cvt.createRadialGradient(t.mc.cv.width / 2, t.mc.cv.height / 2, i, t.mc.cv.width / 2, t.mc.cv.height / 2, i + t.b);
                e.addColorStop(0, "red"),
                    e.addColorStop(1, "rgba(0,255,0,0)"),
                    t.mc.cvt.fillStyle = e,
                    t.mc.cvt.clearRect(0, 0, t.mc.cv.width, t.mc.cv.height),
                    t.mc.cvt.beginPath(),
                    t.mc.cvt.arc(t.mc.cv.width / 2, t.mc.cv.width / 2, i + t.b, 0, 2 * Math.PI, !1),
                    t.mc.cvt.fill(),
                    t.mc.cvt.restore()
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var e = this;
            Cbfun(t)
        },
        Diamond = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-in", ((1 == this.c.c4 || -1 == this.c.c4) && 19 == this.c.s0 || 2 == this.c.c4 && 20 == this.c.s0) && (this.cp = "destination-out"))
                }
        },
        Diamond.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s = 20 == i.c.s0 ? i.w / i.c.c2 * e : i.w / i.c.c2 * (i.c.c2 - e),
                    n = 20 == i.c.s0 ? i.h / i.c.c2 * e : i.h / i.c.c2 * (i.c.c2 - e);
                20 == i.c.s0 && (s > i.w || n > i.h) ? (s = i.w, n = i.h) : 19 == i.c.s0 && (0 > s || 0 > n) && (s = n = 0),
                    i.fct.save(),
                    i.frcv.draw(i.bgcv, !0),
                    i.sV.dpd.style.opacity = 0;
                var a = i.w / 2 - s,
                    c = i.h / 2,
                    r = i.w / 2,
                    o = i.h / 2 - n,
                    d = i.w / 2 + s,
                    l = i.h / 2 + n;
                return i.mc.cvt.save(),
                    i.mc.cvt.clearRect(0, 0, i.w, i.h),
                    i.mc.cvt.beginPath(),
                    i.mc.cvt.moveTo(a, c),
                    i.mc.cvt.lineTo(r, o),
                    i.mc.cvt.lineTo(d, c),
                    i.mc.cvt.lineTo(r, l),
                    i.mc.cvt.lineTo(a, c),
                    i.mc.cvt.fill(),
                    i.mc.cvt.restore(),
                    i.mc.bdrawn = !0,
                    i.fct.globalCompositeOperation = i.cp,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        DissolveIn = DissolveOut = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initMskAnim(t)) {
                        this.bxs = new Array,
                            this.mc = new Cv(this.w, this.h);
                        var i = this.w < this.h ? this.w : this.h,
                            e = 50 > i ? i : 50,
                            s = 0;
                        this.thick = this.h / e;
                        for (var n = 0; n <= this.w; n += this.thick) for (var a = 0; a <= this.h; a += this.thick) this.bxs[s++] = {
                            x: n,
                            y: a
                        };
                        this.arrayShuffle(this.bxs)
                    }
                },
                this.arrayShuffle = function (t) {
                    for (var i = t.length, e = i; e--;) {
                        var s = parseInt(Math.random() * i),
                            n = t[e];
                        t[e] = t[s],
                            t[s] = n
                    }
                }
        },
        DissolveIn.prototype.play = DissolveOut.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                    i.fct.save(),
                    i.frcv.draw(i.bgcv, !0),
                    i.sV.dpd.style.opacity = 0;
                var s = Math.floor(i.bxs.length / i.c.c2 * e);
                i.fct.lineWidth = 1;
                for (var n = i.sr; s >= n; n++) {
                    var a = i.bxs[n];
                    if ("undefined" == typeof a) break;
                    i.mc.cvt.save(),
                        i.mc.cvt.beginPath(),
                        i.mc.cvt.fillRect(a.x, a.y, i.thick + 1, i.thick + 1),
                        i.mc.cvt.restore()
                }
                return i.fct.globalCompositeOperation = i.cp,
                    i.mc.bdrawn = !0,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    i.sr = s,
                    e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim(),
                this.sr = 0;
            var i = this;
            Cbfun(t)
        },
        MotionPath = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.aRev = 1 == this.c.c7 ? !0 : !1, this.Rpd = 1 == this.c.s1 ? !0 : !1, this.mAnim = new MAnim(this))
                }
        },
        MotionPath.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s;
                return s = i.Rpd ? i.aRev && e > i.c.c2 / 2 ? i.mAnim.getNextPoint(i.sV.d, e) : i.mAnim.getRevNextPoint(i.sV.d, e) : i.aRev && e > i.c.c2 / 2 ? i.mAnim.getRevNextPoint(i.sV.d, e) : i.mAnim.getNextPoint(i.sV.d, e),
                null != s && i.setTranslate(s.x, s.y),
                    e >= i.c.c2 ? (i.Rpd ^ i.aRev ? i.mAnim.setRevEndPoint() : i.mAnim.setEndPoint(), void i.doRepeat()) : void Cbfun(t)
            }
            this.mAnim.resetMAnim(this),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        RandomBars = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initMskAnim(t)) {
                        this.bars = new Array,
                            this.mc = new Cv(this.w, this.h),
                            this.len = 16 == this.c.s0 ? Math.ceil(this.h) : Math.ceil(this.w);
                        for (var i = 0; i <= this.len; i++) this.bars[i] = i;
                        this.arrayShuffle(this.bars)
                    }
                },
                this.arrayShuffle = function (t) {
                    for (var i = t.length, e = i; e--;) {
                        var s = parseInt(Math.random() * i),
                            n = t[e];
                        t[e] = t[s],
                            t[s] = n
                    }
                }
        },
        RandomBars.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                    i.fct.save(),
                    i.frcv.draw(i.bgcv, !0),
                    i.sV.dpd.style.opacity = 0;
                var s = Math.floor(i.len / i.c.c2 * e);
                i.fct.lineWidth = 1;
                for (var n = i.sr; s >= n; n++) 16 == i.c.s0 ? (i.mc.cvt.save(), i.mc.cvt.beginPath(), i.mc.cvt.fillRect(0, i.bars[n], i.w, 1), i.mc.cvt.restore()) : 17 == i.c.s0 && (i.mc.cvt.save(), i.mc.cvt.beginPath(), i.mc.cvt.fillRect(i.bars[n], 0, 1, i.h), i.mc.cvt.restore());
                return i.fct.globalCompositeOperation = i.cp,
                    i.mc.bdrawn = !0,
                    i.frcv.draw(i.mc, !1),
                    i.fct.restore(),
                    i.sr = s,
                    e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetMskAnim(),
                this.plyBlockAnim(),
                this.sr = 0;
            var i = this;
            Cbfun(t)
        },
        Strips = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.cp = "destination-in", 2 == this.c.c4 && (this.cp = "destination-out"), this.mc = new Cv(this.w, this.h), this.stc = 13, this.stt = this.c.c2 / 2, this.mm = this.w / this.stt, this.std = this.stt / (this.stc - 1), this.sth = this.h / (this.stc - 2), this.b = 3)
                }
        },
        Strips.prototype.play = function () {
            function t() {
                if (s.pozd || s.stpd) return void s.stopCaS();
                var i = s.gtime() - s.st - s.c.c1;
                return 0 >= i ? void(Math.abs(i) > s.c.c1 ? s.reset() : Cbfun(t)) : (s.playCaS(), s.fct.save(), s.frcv.draw(s.bgcv, !0), s.fct.beginPath(), s.fct.globalCompositeOperation = s.cp, s.sV.dpd.style.opacity = 0, e(s, i), s.mc.bdrawn = !0, s.frcv.draw(s.mc, !1), s.fct.restore(), i >= s.c.c2 ? (s.doAfterEffect(), s.dltCv(), void s.doRepeat()) : void Cbfun(t))
            }
            function e(t, e) {
                t.mc.cvt.clearRect(0, 0, t.mc.cv.width, t.mc.cv.height),
                    t.mc.cvt.beginPath();
                var s = 70;
                for (i = 0; i < t.stc; i++) {
                    var n = 0,
                        a = 0,
                        c = 0,
                        r = 0;
                    if (n = e - i * t.std, r = n * t.mm, 2 == t.c.c4 ? 8 == t.c.s0 ? (a = t.h - (i + 1) * t.sth, c = t.w - n * t.mm, r = c - s) : 7 == t.c.s0 ? (a = i * t.sth, c = t.w - n * t.mm, r = c - s) : 9 == t.c.s0 ? a = t.h - (i + 1) * t.sth : 6 == t.c.s0 && (a = i * t.sth) : 8 == t.c.s0 ? a = i * t.sth : 7 == t.c.s0 ? a = t.h - (i + 1) * t.sth : 9 == t.c.s0 ? (a = i * t.sth, c = t.w - n * t.mm, r = c - s) : 6 == t.c.s0 && (a = t.h - (i + 1) * t.sth, c = t.w - n * t.mm, r = c - s), !(n > 0)) break;
                    t.mc.cvt.fillStyle = "green",
                        t.mc.cvt.fillRect(c, a, n * t.mm + 1, t.sth + 1)
                }
                t.mc.cvt.restore()
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var s = this;
            Cbfun(t)
        },
        Wedge = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.mxDif = 1, this.r = (Math.sqrt(this.h * this.h + this.w * this.w) + 8) / 2, this.x = this.w / 2, this.y = this.h / 2)
                }
        },
        Wedge.prototype.play = function () {
            function t() {
                if (e.pozd || e.stpd) return void e.stopCaS();
                var s = e.gtime() - e.st - e.c.c1;
                if (0 >= s) return void(Math.abs(s) > e.c.c1 ? e.reset() : Cbfun(t));
                e.playCaS();
                var n = e.mxDif / e.c.c2 * s;
                return n > e.mxDif && (n = e.mxDif),
                    e.fct.save(),
                    e.frcv.draw(e.bgcv, !0),
                    e.sV.dpd.style.opacity = 0,
                    e.mc.cvt.save(),
                    e.mc.cvt.clearRect(0, 0, e.w, e.h),
                    e.mc.cvt.beginPath(),
                    i(e, 1.5, n, !0),
                    i(e, 1.5, n, !1),
                    e.mc.cvt.fill(),
                    e.mc.cvt.restore(),
                    e.mc.bdrawn = !0,
                    e.fct.globalCompositeOperation = e.cp,
                    e.frcv.draw(e.mc, !1),
                    e.fct.restore(),
                    s >= e.c.c2 ? (e.doAfterEffect(), e.dltCv(), void e.doRepeat()) : void Cbfun(t)
            }
            function i(t, i, e, s) {
                var n = s ? i + e : i - e;
                t.mc.cvt.moveTo(t.x, t.y),
                    t.mc.cvt.arc(t.x, t.y, t.r, i * Math.PI, n * Math.PI, s)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var e = this;
            Cbfun(t)
        },
        LightSpeed = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.tDiff = this.sV.w + this.sV.l, this.xSpDist = (this.sV.h + .2 * this.sV.w) / 2, 2 == this.c.c4 && (this.tDiff = gv.w - this.sV.l))
                }
        },
        LightSpeed.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.animStarted = !0, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY);
                var s = e / i.c.c2 * 100,
                    n = i.getTranslate(),
                    a = 0;
                if (1 == i.c.c4) {
                    if (60 > s) a = [s / 60 - 1] * i.tDiff,
                        i.setTranslate(a, n.y);
                    else if (s > 60) {
                        var c = 180 * [(s - 60) / 40],
                            r = Math.sin(Math.PI / 180 * c),
                            o = s >= 100 ? 0 : -45 * r,
                            d = s >= 100 ? 1 : 1 - .2 * r;
                        a = s >= 100 ? 0 : i.xSpDist * r,
                            i.setSkewX(o),
                            i.setScale(d * i.csX, i.csY),
                            i.setTranslate(a, n.y)
                    }
                    i.sV.dpd.style.opacity = 1
                } else if (2 == i.c.c4) if (20 > s) {
                    var c = s / 20 * 90,
                        r = Math.sin(Math.PI / 180 * c),
                        o = -45 * r;
                    a = i.xSpDist * r,
                        i.setSkewX(o),
                        i.setTranslate(a, n.y)
                } else a = s >= 100 ? i.tDiff : e / i.c.c2 * i.tDiff,
                    i.setTranslate(a, n.y);
                return e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        FadedSwivel = Swivel = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.isFaded = 0 == this.c.s0 ? !0 : !1)
                }
        },
        FadedSwivel.prototype.play = Swivel.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.animStarted = !0, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY);
                var s = e / i.c.c2 * 450,
                    n = 1 == i.c.c4 ? Math.sin(Math.PI / 180 * s) : Math.cos(Math.PI / 180 * s),
                    a = 16 == i.c.s0 || i.isFaded ? n * i.csX : i.csX,
                    c = 16 == i.c.s0 || i.isFaded ? i.csY : n * i.csY,
                    r = e >= i.c.c2 ? 1 : e / i.c.c2 * 1;
                return i.isFaded ? i.sV.dpd.style.opacity = 1 == i.c.c4 ? r : 1 - r : i.sV.dpd.style.opacity = 2 == i.c.c4 && e >= i.c.c2 ? 0 : 1,
                e >= i.c.c2 && (a = i.csX, xY = i.csY),
                    i.setScale(a, c),
                    e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Wheel = function (t) {
            this.inheritFrom = MskAnim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.spks = this.c.s0, this.mxDif = 2 / this.spks, this.r = (Math.sqrt(this.h * this.h + this.w * this.w) + 8) / 2, this.x = this.w / 2, this.y = this.h / 2)
                }
        },
        Wheel.prototype.play = function () {
            function t() {
                if (e.pozd || e.stpd) return void e.stopCaS();
                var s = e.gtime() - e.st - e.c.c1;
                if (0 >= s) return void(Math.abs(s) > e.c.c1 ? e.reset() : Cbfun(t));
                e.playCaS();
                var n = e.mxDif / e.c.c2 * s;
                return n > e.mxDif && (n = e.mxDif),
                    e.fct.save(),
                    e.frcv.draw(e.bgcv, !0),
                    e.sV.dpd.style.opacity = 0,
                    e.mc.cvt.save(),
                    e.mc.cvt.clearRect(0, 0, e.w, e.h),
                    e.mc.cvt.beginPath(),
                e.spks >= 1 && i(e, 1.5, n),
                e.spks >= 2 && 3 != e.spks && i(e, .5, n),
                3 == e.spks && (i(e, .1666, n), i(e, .8333, n)),
                e.spks > 3 && (i(e, 0, n), i(e, 1, n)),
                e.spks > 4 && (i(e, 1.75, n), i(e, .25, n), i(e, .75, n), i(e, 1.25, n)),
                    e.mc.cvt.fill(),
                    e.mc.cvt.restore(),
                    e.mc.bdrawn = !0,
                    e.fct.globalCompositeOperation = e.cp,
                    e.frcv.draw(e.mc, !1),
                    e.fct.restore(),
                    s >= e.c.c2 ? (e.doAfterEffect(), e.dltCv(), void e.doRepeat()) : void Cbfun(t)
            }
            function i(t, i, e) {
                var s = (i + e) % 2;
                t.mc.cvt.moveTo(t.x, t.y),
                    t.mc.cvt.arc(t.x, t.y, t.r, i * Math.PI, s * Math.PI)
            }
            this.resetMskAnim(),
                this.plyBlockAnim();
            var e = this;
            Cbfun(t)
        },
        FlyIn = FlyOut = CrawlOut = CrawlIn = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (GetCurrentXYSlide(this), this.xDif = this.fX - this.dX, this.yDif = this.fY - this.dY, this.mX = this.xDif / this.c.c2, this.mY = this.yDif / this.c.c2)
                }
        },
        FlyIn.prototype.play = FlyOut.prototype.play = CrawlIn.prototype.play = CrawlOut.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                if (0 == i.animStarted) {
                    if (i.animStarted = !0, 2 == i.c.c4) {
                        var s = i.getTranslate();
                        null == i.left ? i.left = i.sV.d.style.left = parseInt(i.sV.d.style.left) + s.x + "px" : i.sV.d.style.left = i.left,
                            null == i.top ? i.top = i.sV.d.style.top = parseInt(i.sV.d.style.top) + s.y + "px" : i.sV.d.style.top = i.top,
                            GetCurrentXYSlide(i),
                            i.xDif = i.fX - parseInt(i.sV.d.style.left),
                            i.yDif = i.fY - parseInt(i.sV.d.style.top),
                            i.mX = i.xDif / i.c.c2,
                            i.mY = i.yDif / i.c.c2
                    } else i.sV.d.style.left = this.dx + "px",
                        i.sV.d.style.top = this.dx + "py",
                        i.setTranslate(-1 * this.xDif, -1 * this.yDif);
                    i.sV.dpd.style.opacity = 1
                }
                i.playCaS();
                var n = 0,
                    a = 0;
                return 1 == i.c.c4 ? (n = e * i.mX - i.cX, a = e * i.mY - i.cY) : (n = e * i.mX, a = e * i.mY),
                    i.setTranslate(n, a),
                    e >= i.c.c2 ? (1 == i.c.c4 ? i.setTranslate(0, 0) : (i.sV.dpd.style.opacity = 0, i.setTranslate(0, 0)), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.cX = this.xDif,
                this.cY = this.yDif,
                this.pt = 0;
            var i = this;
            this.animStarted = !1,
                Cbfun(t)
        },
        Fade = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2)
                }
        },
        Fade.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.animStarted = !0, 2 == i.c.c4 ? i.oF = 0 : i.oF = 1);
                var s = e * i.mO;
                return 0 == i.oF ? i.sV.dpd.style.opacity = 1 - s : i.sV.dpd.style.opacity = s,
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = i.oF, void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Pinwheel = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2)
                }
        },
        Pinwheel.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.animStarted = !0, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.mA = 720 / i.c.c2, i.msX = i.csX / i.c.c2, i.msY = i.csY / i.c.c2);
                var s, n, a = e * i.mA,
                    c = 0;
                return 1 == i.c.c4 ? (c = e * i.mO, s = e * i.msX, n = e * i.msY, a = -1 * a) : (c = 1 - e * i.mO, s = i.csX - e * i.msX, n = i.csY - e * i.msY),
                    i.sV.dpd.style.opacity = c,
                    i.setScale(s, n),
                    i.setRotate(a + i.cA),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setScale(i.csX, i.csY), i.setRotate(i.cA), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Ascend = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mY = 48 / this.c.c2, this.mO = 1 / this.c.c2, 2 == this.c.c4 ? this.fO = 0 : this.fO = 1)
                }
        },
        Ascend.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s;
                s = 1 == i.c.c4 ? 48 - e * i.mY : -(e * i.mY);
                var n;
                return n = 0 == i.fO ? 1 - e * i.mO : e * i.mO,
                    i.sV.dpd.style.opacity = n,
                    i.setTranslate(0, s),
                    e >= i.c.c2 ? (i.setTranslate(0, 0), i.sV.dpd.style.opacity = i.fO, void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Descend = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mY = -1 * (48 / this.c.c2), this.mO = 1 / this.c.c2, 2 == this.c.c4 ? this.fO = 0 : this.fO = 1)
                }
        },
        Descend.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s;
                s = 1 == i.c.c4 ? -48 - e * i.mY : -(e * i.mY);
                var n;
                return n = 0 == i.fO ? 1 - e * i.mO : e * i.mO,
                    i.sV.dpd.style.opacity = n,
                    i.setTranslate(0, s),
                    e >= i.c.c2 ? (i.setTranslate(0, 0), i.sV.dpd.style.opacity = i.fO, void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        GrowTurn = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.fAngle = 90,
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2)
                }
        },
        GrowTurn.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.msX = i.csX / i.c.c2, i.msY = i.csY / i.c.c2, i.mA = i.fAngle / i.c.c2, i.animStarted = !0);
                var s, n, a, c = 0;
                return 1 == i.c.c4 ? (s = 90 - e * i.mA + i.cA, c = e * i.mO, n = e * i.msX, a = e * i.msY) : (s = e * i.mA + i.cA, c = 1 - e * i.mO, n = i.csX - e * i.msX, a = i.csY - e * i.msY),
                    i.sV.dpd.style.opacity = c,
                    i.setScale(n, a),
                    i.setRotate(s),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setScale(i.csX, i.csY), i.setRotate(i.cA), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Spinner = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.fAngle = 360,
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mA = this.fAngle / this.c.c2, this.mO = 1 / this.c.c2, this.mS = 1 / this.c.c2, 2 != this.c.c4 ? (this.fO = 1, this.fAngle = 360, this.fSCale = 1, this.mA = -1 * this.mA) : (this.mS = -1 * this.mO, this.fO = 0, this.fAngle = 0, this.fSCale = 0))
                }
        },
        Spinner = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2)
                }
        },
        Spinner.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.msX = i.csX / i.c.c2, i.msY = i.csY / i.c.c2, i.mA = 360 / i.c.c2, i.animStarted = !0);
                var s, n, a, c = 0;
                return 1 == i.c.c4 ? (s = 360 - e * i.mA + i.cA, c = e * i.mO, n = e * i.msX, a = e * i.msY) : (s = e * i.mA + i.cA, c = 1 - e * i.mO, n = i.csX - e * i.msX, a = i.csY - e * i.msY),
                    i.sV.dpd.style.opacity = c,
                    i.setScale(n, a),
                    i.setRotate(s),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setScale(i.csX, i.csY), i.setRotate(i.cA), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Expand = Contract = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2, 2 != this.c.c4 ? (this.fO = 1, this.fSCale = 1, this.mA = -1 * this.mA) : (this.mO = -1 * this.mO, this.fO = 0, this.fSCale = .75))
                }
        },
        Expand.prototype.play = Contract.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.msX = .25 * i.csX / i.c.c2, i.animStarted = !0);
                var s, n = 0;
                if (0 == i.fO) s = i.csX - e * i.msX,
                    n = 1 - e * i.mO * -1;
                else {
                    var a = i.csX - .25 * i.csX;
                    s = a + e * i.msX,
                        n = e * i.mO
                }
                return i.sV.dpd.style.opacity = n,
                    i.setScale(s, i.csY),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = i.fO, i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.animStarted = !1,
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        FadedZoom = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2, 2 != this.c.c4 ? (this.fO = 1, this.fSCale = 1) : (this.mO = -1 * this.mO, this.fO = 0, this.fSCale = 0))
                }
        },
        FadedZoom.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.msX = i.csX / i.c.c2, i.msY = i.csY / i.c.c2, i.animStarted = !0);
                var s, n, a = 0;
                return 0 == i.fO ? (s = i.csX - e * i.msX, n = i.csY - e * i.msY, a = 1 - e * i.mO * -1) : (s = e * i.msX, n = e * i.msY, a = e * i.mO),
                    i.sV.dpd.style.opacity = a,
                    i.setScale(s, n),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = i.fO, i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Zoom = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initBanim(t)) {
                        var i = gv.w,
                            e = gv.h,
                            s = parseInt(this.sV.d.style.left),
                            n = parseInt(this.sV.d.style.top),
                            a = parseInt(this.sV.h),
                            c = parseInt(this.sV.w);
                        switch (this.difX = 0, this.difY = 0, this.c.s0) {
                            case 19:
                                1 == this.c.c4 ? (this.difScale = 1, this.startScale = 0) : (this.difScale = 3, this.startScale = 1);
                                break;
                            case 30:
                            case 33:
                                var r = i / 2 - s - c / 2,
                                    o = e / 2 - n - a / 2;
                                this.difScale = 1,
                                    this.startScale = 0,
                                    this.difX = r / this.c.c2,
                                    this.difY = o / this.c.c2,
                                    this.startX = r,
                                    this.startY = o,
                                2 == this.c.c4 && (this.difX = -this.difX, this.difY = -this.difY, this.startX = 0, this.startY = 0, this.startScale = 1, this.difScale = -1);
                                break;
                            case 29:
                                1 == this.c.c4 ? (this.difScale = .3, this.startScale = .7) : (this.difScale = .3, this.startScale = 1);
                                break;
                            case 20:
                                1 == this.c.c4 ? (this.difScale = -3, this.startScale = 4) : (this.difScale = -1, this.startScale = 1);
                                break;
                            case 34:
                            case 31:
                                this.difScale = -7,
                                    this.startScale = 8;
                                var o = e - n;
                                this.difX = 0,
                                    this.difY = o / this.c.c2,
                                    this.startX = 0,
                                    this.startY = o,
                                2 == this.c.c4 && (this.difX = 0, this.difY = -this.difY, this.startX = 0, this.startY = 0, this.startScale = 1, this.difScale = 7);
                                break;
                            case 32:
                                1 == this.c.c4 ? (this.difScale = -.3, this.startScale = 1.3) : (this.difScale = -.3, this.startScale = 1)
                        }
                    }
                }
        },
        Zoom.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.sV.dpd.style.opacity = 1, i.animStarted = !0);
                var s = i.startX - i.difX * e,
                    n = i.startY - i.difY * e,
                    a = i.csX * i.startScale + i.csX * i.difScale * (e / i.c.c2),
                    c = i.csY * i.startScale + i.csY * i.difScale * (e / i.c.c2);
                return i.setScale(a, c),
                    i.setTranslate(s, n),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setScale(i.csX, i.csY), i.setTranslate(0, 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Stretch = Collapse = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t)
                }
        },
        Stretch.prototype.play = Collapse.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.animStarted = !0, i.sV.dpd.style.opacity = 1);
                var s = i.csX,
                    n = i.csY,
                    a = 0,
                    c = 0;
                if (1 == i.c.c4) switch (i.c.s0) {
                    case 1:
                        c = (i.sV.h / i.c.c2 * e - i.sV.h) / 2,
                            n = e * (i.csY / i.c.c2);
                        break;
                    case 2:
                        a = (i.sV.w - i.sV.w / i.c.c2 * e) / 2,
                            s = e * (i.csX / i.c.c2);
                        break;
                    case 3:
                        c = (i.sV.h - i.sV.h / i.c.c2 * e) / 2,
                            n = e * (i.csY / i.c.c2);
                        break;
                    case 4:
                        a = (i.sV.w / i.c.c2 * e - i.sV.w) / 2,
                            s = e * (i.csX / i.c.c2);
                        break;
                    case 16:
                        s = e * (i.csX / i.c.c2)
                } else switch (i.c.s0) {
                    case 1:
                        c = i.sV.h / 2 - (i.sV.h / i.c.c2 * e - i.sV.h) / 2 - i.sV.h,
                            n = i.csY - e * (i.csY / i.c.c2);
                        break;
                    case 2:
                        a = i.sV.w / 2 - (i.sV.w - i.sV.w / i.c.c2 * e) / 2,
                            s = i.csX - e * (i.csX / i.c.c2);
                        break;
                    case 3:
                        c = i.sV.h / 2 - (i.sV.h - i.sV.h / i.c.c2 * e) / 2,
                            n = i.csY - e * (i.csY / i.c.c2);
                        break;
                    case 4:
                        a = i.sV.w / 2 - (i.sV.w / i.c.c2 * e - i.sV.w) / 2 - i.sV.w,
                            s = i.csX - e * (i.csX / i.c.c2);
                        break;
                    case 16:
                        s = i.csX - e * (i.csX / i.c.c2)
                }
                return i.setTranslate(a, c),
                    i.setScale(s, n),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setScale(i.csX, i.csY), i.setTranslate(0, 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Glide = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mX = 150 / this.c.c2, this.mO = 1 / this.c.c2)
                }
        },
        Glide.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.animStarted = !0, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.mS = i.csX / i.c.c2);
                var s, n, a;
                return 2 == i.c.c4 ? (s = i.csX - e * i.mS, a = 150 - e * i.mX - 150, n = 1 - e * i.mO) : (a = e * i.mX - 150, s = e * i.mS, n = e * i.mO),
                    i.setTranslate(a, 0),
                    i.setScale(s, i.csY),
                    i.sV.dpd.style.opacity = n,
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setScale(i.csX, i.csY), i.setTranslate(0, 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Compress = Stretchy = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = 1 / this.c.c2)
                }
        },
        Compress.prototype.play = Stretchy.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                if (i.playCaS(), 0 == i.animStarted) {
                    i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX,
                        i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY;
                    var s = i.sV.w;
                    s = (s + 120) / s,
                        i.cX = i.csX * s,
                        i.sDif = i.cX / i.c.c2,
                        i.animStarted = !1
                }
                var n, a;
                return 2 == i.c.c4 ? (n = i.csX + e * i.sDif, a = 1 - e * i.mO) : (n = i.cX + i.csX - e * i.sDif, a = e * i.mO),
                    i.sV.dpd.style.opacity = a,
                    i.setScale(n, i.csY),
                    e >= i.c.c2 ? (i.sV.dpd.style.opacity = 2 == i.c.c4 ? 0 : 1, i.setScale(i.csX, i.cY), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Credits = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.slH = parseInt(gv.h), this.shT = parseInt(this.sV.d.style.top), this.shH = parseInt(this.sV.h), this.yDif = 2 * this.slH, this.mY = this.yDif / this.c.c2, 2 == this.c.c4 && (this.slH = -1 * this.slH))
                }
        },
        Credits.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.setTranslate(0, i.slH), i.sV.dpd.style.opacity = 1, i.animStarted = !0);
                var s = 1 == i.c.c4 ? i.cY - e * i.mY : i.cY + e * i.mY;
                return i.setTranslate(0, s),
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1,
                this.cY = this.slH;
            var i = this;
            this.df = !1,
                Cbfun(t)
        },
        FlashBulb = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mO = .5 / (this.c.c2 / 2), this.mS = .025 / (this.c.c2 / 2), this.fO = 1, this.fSCale = 1)
                }
        },
        FlashBulb.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s, n = e / i.c.c2 * 100,
                    a = 0;
                return 50 > n ? (s = 1 + e * i.mS, a = 1 - e * i.mO) : (s = 1.05 - e * i.mS, a = e * i.mO),
                    i.sV.dpd.style.opacity = a,
                    i.setScale(s, s),
                    e >= i.c.c2 ? (i.setScale(i.fScale, i.fScale), i.sV.dpd.style.opacity = i.fO, void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Appear = Disappear = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t)
                }
        },
        Appear.prototype.play = Disappear.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                return 0 > e ? void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t)) : (i.playCaS(), e >= i.c.c2 ? (1 == i.c.c4 ? i.sV.dpd.style.opacity = 1 : i.sV.dpd.style.opacity = 0, void i.doRepeat()) : void Cbfun(t))
            }
            this.resetBanim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        FlashOnce = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t)
                }
        },
        FlashOnce.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 > e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                if (i.playCaS(), 1 == i.c.c4) i.sV.dpd.style.opacity = 1;
                else {
                    var s = e / i.c.c2 * 100;
                    50 > s ? i.sV.dpd.style.opacity = 0 : i.sV.dpd.style.opacity = 1
                }
                return e >= i.c.c2 ? (i.sV.dpd.style.opacity = 0, void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Bounce = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.dX = 187, this.tDif = this.dX / this.c.c2, this.bTh = 630)
                }
        },
        Bounce.prototype.play = function () {
            function t(t, i, s, n) {
                var a = s - i;
                if (s > t) {
                    var c = (t - i) / a * n;
                    e.setScale(e.csX, (1 - c) * e.csY)
                } else if (s + a > t) {
                    var c = (t - (i + a)) / a * n;
                    e.setScale(e.csX, (1 - n + c) * e.csY)
                }
            }
            function i() {
                if (e.pozd || e.stpd) return void e.stopCaS();
                var s = e.gtime() - e.st - e.c.c1;
                if (0 >= s) return void(Math.abs(s) > e.c.c1 ? e.reset() : Cbfun(i));
                e.playCaS(),
                0 == e.animStarted && (e.csX = void 0 == e.sV.d.dpsX ? 1 : e.sV.d.dpsX, e.csY = void 0 == e.sV.d.dpsY ? 1 : e.sV.d.dpsY, 1 == e.c.c4 && (e.setTranslate(e.dX, e.dX), e.sV.dpd.style.opacity = 1), this.animStarted = !0);
                var n, a = s / e.c.c2 * 100,
                    c = (s * e.tDif, s / e.c.c2 * 630),
                    r = 90 - s / e.c.c2 * 90;
                90 > c ? n = 187 : 270 > c ? (n = 75, t(a, 14, 18, .3)) : 450 > c ? (n = 37, t(a, 41, 45, .15)) : 630 > c && (n = 17, t(a, 71, 75, .07));
                var o = Math.cos(Math.PI / 180 * c),
                    d = 187 * (1 - Math.cos(Math.PI / 180 * r)),
                    l = n * Math.abs(o);
                return 1 == e.c.c4 ? e.setTranslate(-d, -l) : e.setTranslate(187 - d, 187 - l),
                    s >= e.c.c2 ? (2 == e.c.c4 && (e.sV.dpd.style.opacity = 0), e.setTranslate(0, 0), e.setScale(e.csX, e.csY), void e.doRepeat()) : void Cbfun(i)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var e = this;
            Cbfun(i)
        },
        CenterRevolve = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.dY = 175, this.dX = 115, this.tDif = this.dY / (.6 * this.c.c2), this.dO = 1 / (.1 * this.c.c2))
                }
        },
        CenterRevolve.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.bStdAnm && 1 == i.c.c4 && (i.sV.dpd.style.opacity = 1, i.setTranslate(0, i.dY), 1 == i.bStdAnm);
                var s = e / i.c.c2 * 100;
                if (10 > s && 1 == i.c.c4) {
                    var n = (e - .1 * i.c.c2) * i.dO;
                    i.sV.dpd.style.opacity = 1 + n
                } else if (s > 90 && 2 == i.c.c4) {
                    var n = (e - .9 * i.c.c2) * i.dO;
                    i.sV.dpd.style.opacity = 1 - n
                } else if (s > 40 && 1 == i.c.c4) {
                    var a = (e - .4 * i.c.c2) * i.tDif,
                        c = (e - .4 * i.c.c2) / (.6 * i.c.c2) * 180,
                        r = Math.sin(Math.PI / 180 * c),
                        o = i.dX * Math.abs(r);
                    i.setTranslate(o, 175 - a)
                } else if (60 > s && 2 == i.c.c4) {
                    var a = (e - .6 * i.c.c2) * i.tDif,
                        c = (e - .6 * i.c.c2) / (.6 * i.c.c2) * 180,
                        r = Math.sin(Math.PI / 180 * c),
                        o = i.dX * Math.abs(r);
                    i.setTranslate(o, 175 + a)
                }
                return e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), i.setScale(1, 1), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.bStdAnm = !1;
            var i = this;
            Cbfun(t)
        },
        CurveUp = CurveDown = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.dY = 550, this.dX = 200, this.yDif = this.dY / this.c.c2, this.sDif = 2 / this.c.c2, this.oDif = 1 / this.c.c2)
                }
        },
        CurveUp.prototype.play = CurveDown.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.bStdAnm && 1 == i.c.c4 && (i.sV.dpd.style.opacity = 1, i.setTranslate(i.dX, i.dY), 1 == i.bStdAnm);
                var s, n, a = e * i.yDif,
                    c = e / i.c.c2 * 270;
                if (1 == i.c.c4) {
                    var r = Math.cos(Math.PI / 180 * c),
                        o = i.dX * r;
                    i.setTranslate(-o, i.dY - a),
                        s = 3 - e * i.sDif,
                        n = e * i.oDif
                } else {
                    var r = Math.sin(Math.PI / 180 * c),
                        o = i.dX * r;
                    i.setTranslate(o, a),
                        s = 1 + e * i.sDif,
                        n = 1 - e * i.oDif
                }
                return i.setScale(s, s),
                    i.sV.dpd.style.opacity = n,
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), i.setScale(1, 1), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.bStdAnm = !1;
            var i = this;
            Cbfun(t)
        },
        RiseUp = SinkDown = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initBanim(t)) {
                        var i = gv.h,
                            e = parseInt(this.sV.d.style.top);
                        parseInt(this.sV.h);
                        this.dY = i - e + 20,
                            this.yDif1 = this.dY / (.9 * this.c.c2),
                            this.yDif2 = 20 / (.1 * this.c.c2),
                            this.oDif = 1 / this.c.c2
                    }
                }
        },
        RiseUp.prototype.play = SinkDown.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.bStdAnm && 1 == i.c.c4 && (i.sV.dpd.style.opacity = 1, i.setTranslate(0, i.dY - 20), i.bStdAnm = !0);
                var s, n = e / i.c.c2 * 100,
                    a = 0;
                if (1 == i.c.c4) {
                    if (90 > n) var c = (e - .1 * i.c.c2) / (.9 * i.c.c2) * 90,
                        r = Math.cos(Math.PI / 180 * c),
                        a = r * ((.9 * i.c.c2 - e) * i.yDif1);
                    else a = (e - .9 * i.c.c2) * i.yDif2;
                    i.setTranslate(0, a - 20),
                        s = e * i.oDif
                } else {
                    if (10 > n) var a = -(e * i.yDif2);
                    else {
                        var c = (e - .1 * i.c.c2) / (.9 * i.c.c2) * 90,
                            r = Math.cos(Math.PI / 180 * c);
                        a = i.dY - i.dY * r - 20
                    }
                    i.setTranslate(0, a),
                        s = 1 - e * i.oDif
                }
                return i.sV.dpd.style.opacity = s,
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.bStdAnm = !1;
            var i = this;
            Cbfun(t)
        },
        Float = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.mX1 = 340 / (.8 * this.c.c2), this.mY1 = 280 / (.8 * this.c.c2), this.mX2 = 37 / (.2 * this.c.c2), this.mY2 = 56 / (.2 * this.c.c2), this.oDif = 1 / (.8 * this.c.c2), this.rDif = 90 / (.8 * this.c.c2))
                }
        },
        Float.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.animStarted = !0);
                var s = 0,
                    n = e / i.c.c2 * 100,
                    a = 0,
                    c = 0,
                    r = 0;
                if (1 == i.c.c4) {
                    if (80 > n) {
                        var o = (e - .2 * i.c.c2) / (.8 * i.c.c2) * 90,
                            d = Math.cos(Math.PI / 180 * o);
                        c = (.8 * i.c.c2 - e) * i.mX1 * d - 37,
                            a = (.8 * i.c.c2 - e) * i.mY1 * d - 56,
                            r = (e - .8 * i.c.c2) * i.rDif * d,
                            s = 1 + (e - .8 * i.c.c2) * i.oDif
                    } else {
                        var o = (e - .8 * i.c.c2) / (.2 * i.c.c2) * 90,
                            d = Math.sin(Math.PI / 180 * o);
                        c = (e - .8 * i.c.c2) * i.mX2 * d - 37,
                            a = (e - .8 * i.c.c2) * i.mY2 * d - 56,
                            s = 1
                    }
                    i.setTranslate(c, -a),
                        i.setRotate(r + i.cA)
                } else {
                    if (n > 20) {
                        var o = (e - .2 * i.c.c2) / (.8 * i.c.c2) * 90,
                            d = Math.cos(Math.PI / 180 * o);
                        c = 340 - 340 * d - 37,
                            a = 280 - 280 * d - 56,
                            r = 360 - (90 - 90 * d),
                            s = 1 * d
                    } else {
                        var o = (e - .8 * i.c.c2) / (.2 * i.c.c2) * 90,
                            d = Math.sin(Math.PI / 180 * o);
                        c = -(e * i.mX2),
                            a = -(e * i.mY2),
                            r = 0,
                            s = 1
                    }
                    i.setTranslate(c, -a),
                        i.setRotate(r + i.cA)
                }
                return i.sV.dpd.style.opacity = s,
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), i.setRotate(i.cA), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Boomerang = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t)
                }
        },
        Boomerang.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.animStarted = !0);
                var s, n = 0,
                    a = e / i.c.c2 * 100,
                    c = 0,
                    r = 0,
                    o = 0;
                2 == i.c.c4 && (a = 100 - a);
                var d = (e - .5 * i.c.c2) / (.5 * i.c.c2) * 90,
                    l = Math.cos(Math.PI / 180 * d);
                return 50 > a ? (r = 220 - 220 * l, c = -(140 - 140 * l - 56), o = -(45 - 45 * l), s = i.csX - .9 * l * i.csX, n = l) : (c = 56 * l, s = i.csX - .9 * l * i.csX, n = 1),
                    i.setTranslate(r, c),
                    i.setRotate(o + i.cA),
                    i.setScale(s, i.csY),
                    i.sV.dpd.style.opacity = n,
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), i.setRotate(i.cA), i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Sling = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initBanim(t)) {
                        var i = parseInt(this.sV.w),
                            e = parseInt(this.sV.h),
                            s = parseInt(this.sV.d.style.left),
                            n = gv.w,
                            a = n - (s + (i - e) / 2);
                        this.x1 = a - 38 - e / 2,
                            this.difX2 = 1400 / (.5 * this.c.c2),
                            this.difX1 = this.x1 / (.5 * this.c.c2),
                            this.cX = this.x1 - 1400,
                            this.difO = 1 / this.c.c2
                    }
                }
        },
        Sling.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.difA = 90 / (.2 * i.c.c2), 1 == i.c.c4 && (i.setTranslate(i.cX, 0), i.setRotate(i.cA + 90), i.sV.dpd.style.opacity = 1), i.animStarted = !0);
                var s = 0,
                    n = e / i.c.c2 * 100,
                    a = 0,
                    c = 0;
                return 1 == i.c.c4 ? (50 > n ? (a = i.difX2 * (e - .5 * i.c.c2) + i.x1, i.setTranslate(a, 0)) : (a = i.x1 - i.difX1 * (e - .5 * i.c.c2), i.setTranslate(a, 0), n > 80 && (c = 90 - (e - .8 * i.c.c2) * i.difA, i.setRotate(i.cA + c))), s = e * i.difO) : (50 >= n ? (a = i.difX1 * e, i.setTranslate(a, 0), 20 >= n ? (c = e * i.difA, i.setRotate(i.cA + c)) : i.setRotate(i.cA + 90)) : (i.setRotate(i.cA + 90), a = 1400 + i.x1 - i.difX2 * (e - .5 * i.c.c4), i.setTranslate(a, 0)), s = 1 - e * i.difO),
                    i.sV.dpd.style.opacity = s,
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), i.setRotate(i.cA), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Fold = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initBanim(t)) {
                        var i = parseInt(this.sV.d.style.top),
                            e = gv.h;
                        this.cY = e - i,
                            this.difY = this.cY / this.c.c2,
                            this.difO = 1 / this.c.c2
                    }
                }
        },
        Fold.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.animStarted && (i.animStarted = !0, i.sV.dpd.style.opacity = 1 == i.c.c4 ? 0 : 1, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.difSX = 2.5 / i.c.c2, i.difSY = i.csY / i.c.c2);
                var s = 0,
                    n = 0,
                    a = 1,
                    c = 1;
                return 1 == i.c.c4 ? (n = i.cY - e * i.difY, s = e * i.difO, a = i.csX + 2.5 - e * i.difSX, c = e * i.difSY) : (n = e * i.difY, s = 1 - e * i.difO, a = i.csX + e * i.difSX, c = i.csY - e * i.difSY),
                    i.setTranslate(0, n),
                    i.setScale(a, c),
                    i.sV.dpd.style.opacity = s,
                    e >= i.c.c2 ? (2 == i.c.c4 && (i.sV.dpd.style.opacity = 0), i.setTranslate(0, 0), i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.animStarted = !1;
            var i = this;
            Cbfun(t)
        },
        Magnify = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    if (this.initBanim(t)) {
                        var i = parseInt(this.sV.d.style.left),
                            e = (parseInt(this.sV.d.style.top), parseInt(this.sV.w)),
                            s = parseInt(this.sV.h),
                            n = gv.h,
                            a = gv.w;
                        this.cY = n / 2 - s / 2,
                            a / 2 > i ? this.cX = a / 2 - e / 2 - i : this.cX = -(i - (a / 2 - e / 2)),
                            this.difX = this.cX / (.6 * this.c.c2),
                            this.difY = this.cY / (.6 * this.c.c2),
                            this.difO = 1 / (.4 * this.c.c2),
                            this.difSX1 = 2 / (.4 * this.c.c2),
                            this.difSY1 = 4.5 / (.4 * this.c.c2),
                            this.difSX2 = 1 / (.6 * this.c.c2),
                            this.difSY2 = 3.5 / (.6 * this.c.c2)
                    }
                }
        },
        Magnify.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS(),
                0 == i.bStdAnm && 1 == i.c.c4 && (i.setTranslate(i.cX, i.cY), i.sV.dpd.style.opacity = 1, i.bStdAnm = !0);
                var s = 0,
                    n = 0,
                    a = 0,
                    c = 1,
                    r = 1,
                    o = e / i.c.c2 * 100;
                return 1 == i.c.c4 ? 40 > o ? (c = e * i.difSX1, r = e * i.difSY1, i.setScale(c, r), s = e * i.difO, i.sV.dpd.style.opacity = s) : (n = i.cX - (e - .4 * i.c.c2) * i.difX, a = i.cY - (e - .4 * i.c.c2) * i.difY, i.setTranslate(n, a), c = 2 - (e - .4 * i.c.c2) * i.difSX2, r = 4.5 - (e - .4 * i.c.c2) * i.difSY2, i.setScale(c, r)) : 60 > o ? (n = e * i.difX, a = e * i.difY, i.setTranslate(n, a), c = 1 + e * i.difSX2, r = 1 + e * i.difSY2, i.setScale(c, r)) : (c = 2 - (e - .6 * i.c.c2) * i.difSX1, r = 4.5 - (e - .6 * i.c.c2) * i.difSY1, i.setScale(c, r), s = 1 - (e - .6 * i.c.c2) * i.difO, i.sV.dpd.style.opacity = s),
                    e >= i.c.c2 ? (2 == i.c.c4 ? i.sV.dpd.style.opacity = 0 : i.sV.dpd.style.opacity = 1, i.setTranslate(0, 0), i.setScale(1, 1), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim(),
                this.bStdAnm = !1;
            var i = this;
            Cbfun(t)
        },
        Unfold = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.difX = 48 / this.c.c2, this.difO = 1 / this.c.c2)
                }
        },
        Unfold.prototype.play = function () {
            function t() {
                if (i.pozd || i.stpd) return void i.stopCaS();
                var e = i.gtime() - i.st - i.c.c1;
                if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
                i.playCaS();
                var s = 0,
                    n = 0;
                return 1 == i.c.c4 ? (s = e * i.difX - 48, n = e * i.difO) : (s = -(e * i.difX), n = 1 - e * i.difO),
                    i.sV.dpd.style.opacity = n,
                    i.setTranslate(s, 0),
                    e >= i.c.c2 ? (1 == i.c.c4 ? i.sV.dpd.style.opacity = 1 : i.sV.dpd.style.opacity = 0, i.setTranslate(0, 0), void i.doRepeat()) : void Cbfun(t)
            }
            this.resetBanim(),
                this.plyBlockAnim();
            var i = this;
            Cbfun(t)
        },
        Whip = function (t) {
            this.inheritFrom = Banim,
                this.inheritFrom(t),
                this.Initialize = function (t) {
                    this.initBanim(t) && (this.animStarted = !1)
                }
        },
    Whip.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.animStarted && (i.animStarted = !0, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.difX = 70 / (.5 * i.c.c2), i.difO = 1 / (.5 * i.c.c2), i.difSX = i.csX / (.5 * i.c.c2), i.difSY = i.csY / (.5 * i.c.c2));
            var s = 0,
                n = 0,
                a = i.csX,
                c = i.csY,
                r = e / i.c.c2 * 100;
            return 1 == i.c.c4 ? 50 > r ? (s = e * i.difX, n = e * i.difO, a = e * i.difSX, c = e * i.difSY, i.sV.dpd.style.opacity = n) : (s = 70 - (e - .5 * i.c.c2) * i.difX, nS = 1) : 50 > r ? (s = 70 + (e - .5 * i.c.c2) * i.difX, nS = 1) : (s = 70 - (e - .5 * i.c.c2) * i.difX, n = 1 - (e - .5 * i.c.c2) * i.difO, a = i.csX - (e - .5 * i.c.c2) * i.difSX, c = i.csY - (e - .5 * i.c.c2) * i.difSY, i.sV.dpd.style.opacity = n),
                i.setTranslate(s, 0),
                i.setScale(a, c),
                e >= i.c.c2 ? (1 == i.c.c4 ? i.sV.dpd.style.opacity = 1 : i.sV.dpd.style.opacity = 0, i.setTranslate(0, 0), i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Thread = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t) && (this.cX = -225, this.difX = this.cX / (.7 * this.c.c2))
            }
    },
    Thread.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            if (i.playCaS(), 0 == i.animStarted) {
                i.animStarted = !0,
                    i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX,
                    i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY;
                var s = parseInt(i.sV.w);
                i.sX = i.csX * ((s + 225) / s),
                    i.difSX = (i.sX - i.csX) / (.3 * i.c.c2),
                    i.difSY = .95 * i.csY / (.3 * i.c.c2),
                1 == i.c.c4 && (i.setTranslate(i.cX, 0), i.sV.dpd.style.opacity = 1)
            }
            var n = 0,
                a = 1,
                c = 1,
                r = e / i.c.c2 * 100;
            return 1 == i.c.c4 ? (70 > r ? (n = i.cX - e * i.difX, a = i.sX, c = .05 * i.csY) : (a = i.sX - (e - .7 * i.c.c2) * i.difSX, c = (e - .7 * i.c.c2) * i.difSY), i.setTranslate(n, 0), i.setScale(a, c)) : (30 > r ? (a = i.csX + e * i.difSX, c = i.csY - e * i.difSY) : (n = (e - .3 * i.c.c2) * i.difX, a = i.sX, c = .05 * i.csY), i.setTranslate(n, 0), i.setScale(a, c)),
                e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setTranslate(0, 0), i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim(),
            this.animStarted = !1;
        var i = this;
        Cbfun(t)
    },
    Swish = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                if (this.initBanim(t)) {
                    var i = (parseInt(this.sV.d.style.top), parseInt(this.sV.h), gv.h);
                    this.cY = i,
                        this.difY1 = this.cY / (.5 * this.c.c2),
                        this.difY2 = 50 / (.2 * this.c.c2),
                        this.difA = 45 / (.2 * this.c.c2),
                        this.difA2 = 45 / (.5 * this.c.c2),
                        this.difA3 = 45 / this.c.c2
                }
            }
    },
    Swish.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.bStdAnm && 1 == i.c.c4 && (i.setTranslate(0, i.cY), i.setRotate(-45), i.sV.dpd.style.opacity = 1, i.bStdAnm = !0);
            var s, n = e / i.c.c2 * 100;
            if (1 == i.c.c4) {
                if (50 >= n) {
                    var a = -(i.cY - e * i.difY1);
                    i.setTranslate(0, a)
                } else if (n > 50) {
                    var c = 360 * ((e - .5 * i.c.c2) / (.5 * i.c.c2)),
                        r = Math.sin(Math.PI / 180 * c),
                        o = 0;
                    180 >= c ? s = 50 : c > 180 && (s = 10);
                    var a = s * Math.abs(r);
                    i.setTranslate(0, -a),
                        75 > n ? (o = -45 + i.difA * (e - .5 * i.c.c2), i.setRotate(o)) : 88 > n ? (o = 11 - i.difA2 * (e - .75 * i.c.c2), i.setRotate(o)) : i.setRotate(0)
                }
            } else {
                var c = 90 * (e / i.c.c2),
                    r = Math.sin(Math.PI / 180 * c),
                    a = r * (e * i.difY1);
                i.setTranslate(0, a),
                    o = i.difA3 * e,
                    i.setRotate(o)
            }
            return e >= i.c.c2 ? (1 == i.c.c4 ? i.sV.dpd.style.opacity = 1 : i.sV.dpd.style.opacity = 0, i.setTranslate(0, 0), i.setRotate(0), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim(),
            this.bStdAnm = !1;
        var i = this;
        Cbfun(t)
    },
    Flip = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                if (this.initBanim(t)) {
                    var i = parseInt(this.sV.h);
                    this.cY = parseInt(this.sV.d.style.top) + i,
                        this.difY = this.cY / this.c.c2,
                        this.difA = 360 / this.c.c2
                }
            }
    },
    Flip.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.animStarted && (i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.cA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, 1 == i.c.c4 && (i.setTranslate(0, i.cY), i.sV.dpd.style.opacity = 1), i.animStarted = !0);
            var s = 0,
                n = 0;
            s = 1 == i.c.c4 ? -(i.cY - e * i.difY) : e * i.difY;
            var a = e / i.c.c2 * 180,
                c = 37 * Math.sin(Math.PI / 180 * a);
            i.setTranslate(c, s),
                n = e * i.difA,
                i.setRotate(i.cA + n);
            var r = e / i.c.c2 * 360,
                o = i.csX * Math.cos(Math.PI / 180 * r);
            return i.setScale(o, i.csY),
                e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setTranslate(0, 0), i.setRotate(i.cA), i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim(),
            this.animStarted = !1;
        var i = this;
        Cbfun(t)
    },
    SpiralIn = SpiralOut = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t) && (this.cX = parseInt(this.sV.d.style.left) + parseInt(this.sV.w), this.difX = this.cX / this.c.c2)
            }
    },
    SpiralIn.prototype.play = SpiralOut.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.animStarted && (i.animStarted = !0, i.csX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.csY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, 1 == i.c.c4 && (i.setTranslate(i.cX, 0), i.sV.dpd.style.opacity = 1), i.msX = i.csX / i.c.c2, i.msY = i.csY / i.c.c2);
            var s = 1 == i.c.c4 ? i.cX - i.difX * e : i.difX * e,
                n = -180 + e / i.c.c2 * 360,
                a = Math.cos(n * Math.PI / 180) * s,
                c = Math.sin(n * Math.PI / 180) * s;
            i.setTranslate(a, c);
            var r, o;
            return 1 == i.c.c4 ? (r = e * i.msX, o = e * i.msY) : (r = i.csX - e * i.msX, o = i.csY - e * i.msY),
                i.setScale(r, o),
                e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1 == i.c.c4 ? 1 : 0, i.setTranslate(0, 0), i.setScale(i.csX, i.csY), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim(),
            this.animStarted = !1;
        var i = this;
        Cbfun(t)
    },
    GrowShrink = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t) && (this.rev = 1 == this.c.c7 ? !0 : !1, this.animStarted = !1)
            }
    },
    GrowShrink.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.animStarted && (i.sV.d.dpsX = void 0 == i.sV.d.dpsX ? 1 : i.sV.d.dpsX, i.sV.d.dpsY = void 0 == i.sV.d.dpsY ? 1 : i.sV.d.dpsY, i.scaleX = i.c.s2 / 100 * i.sV.d.dpsX - i.sV.d.dpsX, i.scaleY = i.c.s3 / 100 * i.sV.d.dpsY - i.sV.d.dpsY, i.CSX = i.sV.d.dpsX, i.CSY = i.sV.d.dpsY, i.animStarted = !0);
            var s = i.rev ? e / i.c.c2 * 180 : e / i.c.c2 * 90,
                n = i.CSX + i.scaleX * Math.sin(Math.PI / 180 * s),
                a = i.CSY + i.scaleY * Math.sin(Math.PI / 180 * s);
            return i.setScale(n, a),
                i.sV.d.dpsX = n,
                i.sV.d.dpsY = a,
                e >= i.c.c2 ? (1 == i.rev ? (n = i.CSX, a = i.CSY) : (n = i.CSX + i.scaleX, a = i.CSY + i.scaleY), i.setScale(n, a), i.sV.d.dpsX = n, i.sV.d.dpsY = a, void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Spin = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (i) {
                this.initBanim(i) && (this.rev = 1 == this.c.c7 ? !0 : !1, this.angle = t.s0, this.mA = 1 == this.rev ? this.angle / (this.c.c2 / 2) : this.angle / this.c.c2, this.animStarted = !1)
            }
    },
    Spin.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.animStarted && (i.sV.d.dpA = void 0 == i.sV.d.dpA ? 0 : i.sV.d.dpA, i.cA = i.sV.d.dpA, i.animStarted = !0);
            var s = 0;
            if (0 == i.rev) s = i.cA + e * i.mA;
            else {
                var n = e / i.c.c2 * 100;
                s = 50 > n ? i.cA + e * i.mA : i.cA + (i.angle - (e - i.c.c2 / 2) * i.mA)
            }
            return i.setRotate(s),
                i.sV.d.dpA = s,
                e >= i.c.c2 ? (1 == i.rev ? i.setRotate(i.cA) : i.setRotate(i.cA + i.angle), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Transparency = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t) && (this.opac = this.c.s5)
            }
    },
    Transparency.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            return 0 >= e ? void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t)) : (i.playCaS(), i.sV.dpd.style.opacity = i.opac, e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1, void i.doRepeat()) : void Cbfun(t))
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Blink = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t)
            }
    },
    Blink.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = e / i.c.c2 * 100;
            return i.sV.dpd.style.opacity = 50 > s ? 0 : 1,
                e >= i.c.c2 ? (i.sV.dpd.style.opacity = 1, void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Teeter = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4)
            }
    },
    Teeter.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = (e / i.c.c2 * 100, e / i.c.c2 * 720),
                n = 2 * Math.sin(Math.PI / 180 * s);
            return i.setRotate(n),
                e >= i.c.c2 ? (i.setRotate(0), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Darken = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = [0, 0, 0])
            }
    },
    Darken.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) n[a] = i.Color[0],
                        n[a + 1] = i.Color[1],
                        n[a + 2] = i.Color[2];
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            return i.frcv.cv.style.opacity = e >= i.c.c2 ? .6 : e / i.c.c2 * .6,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Desaturate = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t)
            }
    },
    Desaturate.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) {
                        var r = .3 * n[a] + .59 * n[a + 1] + .11 * n[a + 2];
                        n[a] = r,
                            n[a + 1] = r,
                            n[a + 2] = r
                    }
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (o) {}
            return i.frcv.cv.style.opacity = e >= i.c.c2 ? 1 : e / i.c.c2 * 1,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    ColorBlend = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4)
            }
    },
    ColorBlend.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) n[a] = i.Color[0],
                        n[a + 1] = i.Color[1],
                        n[a + 2] = i.Color[2];
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            return i.frcv.cv.style.opacity = e >= i.c.c2 ? 1 : e / i.c.c2 * 1,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    GrowwithColor = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4)
            }
    },
    GrowwithColor.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = e / i.c.c2 * 90,
                n = Math.sin(Math.PI / 180 * s);
            i.setScale(1 + n, 1 + n);
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var a = i.fct.getImageData(0, 0, i.w, i.h), c = a.data, r = 0, o = c.length; o > r; r += 4) c[r] = i.Color[0],
                        c[r + 1] = i.Color[1],
                        c[r + 2] = i.Color[2];
                    i.fct.putImageData(a, 0, 0)
                }
            } catch (d) {}
            return i.frcv.cv.style.opacity = e >= i.c.c2 ? 1 : e / i.c.c2 * 1,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Lighten = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t)
            }
    },
    Lighten.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) n[a] = 255,
                        n[a + 1] = 255,
                        n[a + 2] = 255;
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            return i.frcv.cv.style.opacity = e >= i.c.c2 ? .5 : e / i.c.c2 * .5,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Flicker = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4)
            }
    },
    Flicker.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) {.3 * n[a] + .59 * n[a + 1] + .11 * n[a + 2];
                        n[a] = i.Color[0],
                            n[a + 1] = i.Color[1],
                            n[a + 2] = i.Color[2]
                    }
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            var o = e / i.c.c2 * 180,
                d = Math.sin(Math.PI / 180 * o);
            return i.frcv.cv.style.opacity = e >= i.c.c2 ? 0 : d,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    VerticalHighlight = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4, this.difSY = .4 / (.25 * this.c.c2), this.difC = 1 / (.25 * this.c.c2))
            }
    },
    VerticalHighlight.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) {.3 * n[a] + .59 * n[a + 1] + .11 * n[a + 2];
                        n[a] = i.Color[0],
                            n[a + 1] = i.Color[1],
                            n[a + 2] = i.Color[2]
                    }
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            var o = e / i.c.c2 * 100,
                d = 1,
                l = 0;
            return 25 > o ? (d = 1 + e * i.difSY, l = i.difC * e) : o > 75 ? (d = 1.4 - (e - .75 * i.c.c2) * i.difSY, l = 1 - i.difC * (e - .75 * i.c.c2)) : (d = 1.4, l = 1),
                i.setScale(1, d),
                i.frcv.cv.style.opacity = l,
                e >= i.c.c2 ? (i.setScale(1, 1), i.frcv.cv.style.opacity = 0, void i.doRepeat()) : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    ChangeFillColor = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4, this.ColorStyle = 2, this.rev = 1 == this.c.c7 ? !0 : !1)
            }
    },
    ChangeFillColor.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) n[a] = i.Color[0],
                        n[a + 1] = i.Color[1],
                        n[a + 2] = i.Color[2];
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            if (1 != i.ColorStyle) {
                var o = 0 == i.rev ? e / i.c.c2 * 90 : e / i.c.c2 * 180,
                    d = Math.sin(Math.PI / 180 * o);
                1 == i.rev ? i.frcv.cv.style.opacity = e >= i.c.c2 ? 0 : d : i.frcv.cv.style.opacity = e >= i.c.c2 ? 1 : d
            } else 1 == i.rev ? i.frcv.cv.style.opacity = e >= i.c.c2 ? 0 : 1 : i.frcv.cv.style.opacity = 1;
            return e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    ChangeFontColor = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                var i = this;
                if (i.initBanim(t)) {
                    i.Color = this.c.s4,
                        i.ColorStyle = 2,
                        i.rev = 1 == i.c.c7 ? !0 : !1,
                        i.preColors = new Array;
                    try {
                        for (var e = i.sV.d.getElementsByTagName("pre"), s = e.length, n = 0; s > n; n++) {
                            var a = e[n];
                            i.preColors[i.preColors.length] = a.style.color
                        }
                    } catch (c) {}
                }
            }
    },
    ChangeFontColor.prototype.play = function () {
        function t() {
            function e(t, i, e) {
                for (var s = t.length, n = 0; s > n; n++) {
                    var a = t[n];
                    a.style[i] = e
                }
            }
            if (i.pozd || i.stpd) return void i.stopCaS();
            var s = i.gtime() - i.st - i.c.c1;
            if (0 >= s) return void(Math.abs(s) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var n = i.sV.d.getElementsByTagName("pre");
            if (e(n, "color", "rgb(" + i.Color[0] + "," + i.Color[1] + "," + i.Color[2] + ")"), 1 != i.ColorStyle) {
                var a = 0 == i.rev ? s / i.c.c2 * 90 : s / i.c.c2 * 180,
                    c = Math.sin(Math.PI / 180 * a);
                1 == i.rev ? e(n, "opacity", s >= i.c.c2 ? 0 : c) : e(n, "opacity", s >= i.c.c2 ? 1 : c)
            } else 1 == i.rev ? e(n, "opacity", s >= i.c.c2 ? 0 : 1) : e(n, "opacity", 1);
            return s >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Blast = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4, this.animStarted = !1)
            }
    },
    Blast.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS(),
            0 == i.animStarted && (i.animStarted = !0, i.difSY1 = 1 / (.1 * i.c.c2), i.difSY2 = 1.5 / (.1 * i.c.c2), i.difSX2 = .2 / (.1 * i.c.c2));
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) n[a] = i.Color[0],
                        n[a + 1] = i.Color[1],
                        n[a + 2] = i.Color[2];
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            var o = e / i.c.c2 * 100,
                d = i.csY,
                l = i.csX;
            return 10 > o ? (d = 1 - i.difSY1 * e, l = 1) : 20 > o ? (d = i.difSY2 * (e - .1 * i.c.c2), l = 1 + i.difSX2 * (e - .1 * i.c.c2)) : (d = 1.5, l = 1.2),
                i.setScale(l, d),
                i.sV.d.dpsY = d,
                i.sV.d.dpsX = l,
                i.frcv.cv.style.opacity = e >= i.c.c2 ? 1 : e / i.c.c2,
                e >= i.c.c2 ? (i.setScale(1.2, 1.5), i.sV.d.dpsY = 1.5, i.sV.d.dpsX = 1.2, void i.doRepeat()) : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    BrushOnColor = ColorWave = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4)
            }
    },
    BrushOnColor.prototype.play = ColorWave.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var s = i.fct.getImageData(0, 0, i.w, i.h), n = s.data, a = 0, c = n.length; c > a; a += 4) n[a] = i.Color[0],
                        n[a + 1] = i.Color[1],
                        n[a + 2] = i.Color[2];
                    i.fct.putImageData(s, 0, 0)
                }
            } catch (r) {}
            return i.frcv.cv.style.opacity = 1,
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Wave = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t)
            }
    },
    Wave.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = 180 * -(e / i.c.c2),
                n = Math.sin(Math.PI / 180 * s),
                a = 40 * n;
            i.setTranslate(0, a);
            var c = e / i.c.c2 * 360,
                r = 25 * Math.sin(Math.PI / 180 * c);
            return i.setRotate(r),
                i.sV.dpd.style.opacity = 1,
                e >= i.c.c2 ? (i.setTranslate(0, 0), i.setRotate(0), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    ComplementaryColor = ComplementaryColor2 = ContrastingColor = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color = this.c.s4, "ComplementaryColor" == this.c.c5 ? this.colMax = 120 : "ComplementaryColor2" == this.c.c5 ? this.colMax = 240 : this.colMax = 180, this.dif = this.colMax / this.c.c2, this.animStarted = !1)
            }
    },
    ComplementaryColor.prototype.play = ComplementaryColor2.prototype.play = ContrastingColor.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            if (i.playCaS(), 0 == i.animStarted) {
                i.animStarted = !0;
                var s = rgb2hsv(i.Color);
                i.curr_h = s[0],
                    i.bs = s[1],
                    i.bv = s[2],
                    i.cc = i.curr_h
            }
            i.curr_h = i.cc + i.dif * e,
                i.curr_h = i.curr_h % 360;
            var n = e >= i.c.c2 ? hsv2color((i.colMax + i.cc) % 360, i.bs, i.bv) : hsv2color(i.curr_h, i.bs, i.bv);
            try {
                if (1 == i.bgcv.bdrawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var a = i.fct.getImageData(0, 0, i.w, i.h), c = a.data, r = 0, o = c.length; o > r; r += 4) c[r] = n[0],
                        c[r + 1] = n[1],
                        c[r + 2] = n[2];
                    i.fct.putImageData(a, 0, 0)
                }
            } catch (d) {}
            return e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Shimmer = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t)
            }
    },
    Shimmer.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = e / i.c.c2 * 180,
                n = Math.sin(Math.PI / 180 * s),
                a = 1 - .2 * n,
                c = 10 * n,
                r = i.sV.w / 2 * n,
                o = i.sV.h / 6 * n;
            return i.setScale(a, 1),
                i.setRotate(-c),
                i.setTranslate(r, -o),
                e >= i.c.c2 ? (i.setTranslate(0, 0), i.setRotate(0), i.setScale(1, 1), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    ColorTypewriter = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.Color1 = [192, 80, 77], this.Color2 = [0, 0, 255])
            }
    },
    ColorTypewriter.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = e / i.c.c2 * 100,
                n = new Array;
            50 > s ? (i.drawn = !1, n = i.Color1) : (i.drawn = !1, n = i.Color2);
            try {
                if (1 == i.bgcv.bdrawn && 0 == i.drawn) {
                    i.fct.save(),
                        i.frcv.draw(i.bgcv, !0),
                        i.sV.dpd.style.opacity = 1,
                        i.drawn = !0,
                        i.fct.restore();
                    for (var a = i.fct.getImageData(0, 0, i.w, i.h), c = a.data, r = 0, o = c.length; o > r; r += 4) c[r] = n[0],
                        c[r + 1] = n[1],
                        c[r + 2] = n[2];
                    i.fct.putImageData(a, 0, 0)
                }
                i.drawn = !0
            } catch (d) {}
            return i.frcv.cv.style.opacity = 1,
                e >= i.c.c2 ? (i.dltCv(), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        this.drawn = !1,
            Cbfun(t)
    },
    Cover = UnCover = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                if (this.initBanim(t)) {
                    this.csld = null;
                    var i = this.sV.d,
                        e = i.style.height && "100%" != i.style.height ? parseFloat(i.style.height) : parseFloat(i.parentNode.style.height),
                        s = i.style.width && "100%" != i.style.width ? parseFloat(i.style.width) : parseFloat(i.parentNode.style.width);
                    this.x1 = this.x2 = this.y1 = this.y2 = 0;
                    var n = this.c.s0 > 8 ? this.c.s0 - 8 : this.c.s0;
                    2 == n || 5 == n || 6 == n ? this.x1 = s : (3 == n || 7 == n || 8 == n) && (this.x1 = -1 * s),
                        4 == n || 6 == n || 8 == n ? this.y1 = e : (1 == n || 5 == n || 7 == n) && (this.y1 = -1 * e),
                    this.c.s0 > 8 && (this.x2 = -1 * this.x1, this.y2 = -1 * this.y1, this.x1 = this.y1 = 0),
                        this.LMove = new Line(this.x1, this.y1, this.x2, this.y2, this.c.c2)
                }
            }
    },
    Cover.prototype.play = UnCover.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            if (i.playCaS(), i.c.s0 < 9) {
                var s = e >= i.c.c2 ? {
                    x: 0,
                    y: 0
                } : i.LMove.getPointAfterT(e);
                i.setTranslate(s.x, s.y),
                null != i.sV.d && (i.sV.d.style.opacity = 1)
            } else if (null == i.csld && (i.csld = gv.o("s" + gc + "s0"), i.sV.d = gv.o("s" + gpc + "s0"), null === i.sV.d && (i.sV.d = i.csld), gpc > gc ? (null != i.sV.d && (i.sV.d.style.zIndex = "0"), i.csld.style.zIndex = "0") : null != i.sV.d && (i.sV.d.style.zIndex += 1), null != i.sV.d && (i.sV.d.style.opacity = 1), i.csld.style.opacity = 1), null == i.sV.d || i.csld.id == i.sV.d.id) {
                var s = e >= i.c.c2 ? {
                    x: 0,
                    y: 0
                } : i.LMove.getRevPointAfterT(e);
                i.setTranslate(-s.x, -s.y)
            } else {
                var s = e >= i.c.c2 ? {
                    x: 0,
                    y: 0
                } : i.LMove.getPointAfterT(e);
                i.setTranslate(s.x, s.y)
            }
            return e >= i.c.c2 ? (i.csld = null, i.s0 > 8 && null != i.sV.d && (i.sV.d.style.opacity = 0), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Push = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                if (this.initBanim(t)) {
                    this.csld = null;
                    var i = this.sV.d,
                        e = i.style.height && "100%" != i.style.height ? parseFloat(i.style.height) : parseFloat(i.parentNode.style.height),
                        s = i.style.width && "100%" != i.style.width ? parseFloat(i.style.width) : parseFloat(i.parentNode.style.width);
                    switch (this.x1 = this.x2 = this.y1 = this.y2 = 0, this.c.s0) {
                        case 1:
                            this.y1 = -e;
                            break;
                        case 2:
                            this.x1 = s;
                            break;
                        case 3:
                            this.x1 = -s;
                            break;
                        case 4:
                            this.y1 = e
                    }
                    this.LMove = new Line(this.x1, this.y1, this.x2, this.y2, this.c.c2)
                }
            }
    },
    Push.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            if (i.playCaS(), null == i.csld && (i.csld = gv.o("s" + gc + "s0"), i.sV.d = gv.o("s" + gpc + "s0"), null === i.sV.d && (i.sV.d = i.csld), gpc > gc ? (null != i.sV.d && (i.sV.d.style.zIndex = "0"), i.csld.style.zIndex = "0") : null != i.sV.d && (i.sV.d.style.zIndex += 1), null != i.sV.d && (i.sV.d.style.opacity = 1), i.csld.style.opacity = 1), null == i.sV.d || i.csld.id == i.sV.d.id) {
                var s = e >= i.c.c2 ? {
                    x: 0,
                    y: 0
                } : i.LMove.getPointAfterT(e);
                i.setTranslate(s.x, s.y)
            } else {
                var s = e >= i.c.c2 ? {
                    x: 0,
                    y: 0
                } : i.LMove.getRevPointAfterT(e);
                i.setTranslate(-s.x, -s.y),
                    s = e >= i.c.c2 ? {
                        x: 0,
                        y: 0
                    } : i.LMove.getPointAfterT(e);
                var n = i.sV.d;
                i.sV.d = i.csld,
                    i.setTranslate(s.x, s.y),
                    i.sV.d = n
            }
            return e >= i.c.c2 ? (i.csld = null, void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    NewsFlash = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t) && (this.tAng = 360, this.tScl = 1)
            }
    },
    NewsFlash.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = e >= i.c.c2 ? 0 : i.tAng * (1 - e / i.c.c2),
                n = e >= i.c.c2 ? 1 : i.tScl * (e / i.c.c2);
            return i.sV.d.style.opacity = 1,
                i.setScale(n, n),
                i.setRotate(s),
                e >= i.c.c2 ? void i.doRepeat() : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Cut = FadeThroughBlack = CutThroughBlack = function (t) {
        this.inheritFrom = Banim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initBanim(t) && (this.csld = null)
            }
    },
    Cut.prototype.play = FadeThroughBlack.prototype.play = CutThroughBlack.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            switch (i.playCaS(), null == i.csld && (i.csld = gv.o("s" + gc + "s0"), i.sV.d = gv.o("s" + gpc + "s0"), null === i.sV.d && (i.sV.d = i.csld)), i.c.s0) {
                case 1:
                    var s = e >= i.c.c2 ? 1 : e / i.c.c2;.5 > s ? i.sV.d.style.opacity = i.csld.style.opacity = 0 : i.csld.style.opacity = s;
                    break;
                case 2:
                    i.csld.style.opacity = 1;
                    break;
                case 3:
                    var s = e >= i.c.c2 ? 1 : e / i.c.c2;.5 > s ? i.sV.d.style.opacity = i.csld.style.opacity = 0 : i.csld.style.opacity = 1
            }
            return e >= i.c.c2 ? (i.csld = null, i.sV.d.style.opacity = 1, void i.doRepeat()) : void Cbfun(t)
        }
        this.resetBanim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    Comb = function (t) {
        this.inheritFrom = MskAnim,
            this.inheritFrom(t),
            this.Initialize = function (t) {
                this.initMskAnim(t) && (this.mc = new Cv(this.w, this.h), this.cp = "destination-out", this.dH = 1 == this.c.s0 ? this.h / 20 : this.h, this.dW = 1 == this.c.s0 ? this.w : this.w / 20, this.len = 1 == this.c.s0 ? this.w : this.h)
            }
    },
    Comb.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.stopCaS();
            var e = i.gtime() - i.st - i.c.c1;
            if (0 >= e) return void(Math.abs(e) > i.c.c1 ? i.reset() : Cbfun(t));
            i.playCaS();
            var s = e >= i.c.c2 ? i.len : i.len * (e / i.c.c2);
            i.fct.save(),
                i.frcv.draw(i.bgcv, !0),
                i.sV.dpd.style.opacity = 0,
                i.mc.cvt.save(),
                i.mc.cvt.clearRect(0, 0, i.w, i.h);
            for (var n = 0, a = 0, c = 0; 10 > c; c++) i.mc.cvt.beginPath(),
                1 == i.c.s0 ? (i.mc.cvt.fillRect(n, a, i.dW - s, i.dH), a += i.dH, i.mc.cvt.fillRect(s, a, i.dW - s, i.dH), a += i.dH) : 2 == i.c.s0 && (i.mc.cvt.fillRect(n, a, i.dW, i.dH - s), n += i.dW, i.mc.cvt.fillRect(n, s, i.dW, i.dH - s), n += i.dW),
                i.mc.cvt.closePath();
            return i.mc.cvt.restore(),
                i.mc.bdrawn = !0,
                i.fct.globalCompositeOperation = i.cp,
                i.frcv.draw(i.mc, !1),
                i.fct.restore(),
                e >= i.c.c2 ? (i.doAfterEffect(), i.dltCv(), void i.doRepeat()) : void Cbfun(t)
        }
        this.resetMskAnim(),
            this.plyBlockAnim();
        var i = this;
        Cbfun(t)
    },
    tran = function (transitionData) {
        var _this = this;
        if (1 === transitionData) _this.a = 1;
        else if ("undefined" != typeof window[transitionData.c5]) {
            var animation = eval(transitionData.c5);
            _this.a = new animation(transitionData)
        } else _this.a = new Fade(transitionData);
        this.IniTSd = !0,
            _this.initialize = function (t) {
                1 !== this.a && this.a.Initialize(t)
            },
            _this.play = function () {
                if (gx = 1, 1 !== this.a) {
                    if (gv.o("s" + gc + "s0").style.opacity = 0, gv.o("s" + gc + "s0").style.display = "block", gpc > gc) {
                        var t = gv.o("s" + gpc + "s0");
                        null != t && (t.style.zIndex = "-1")
                    }
                    this.a.play()
                } else {
                    if (gStartTime -= anima["s" + gc].t.i, gv.o("s" + gc + "s0").style.display = "block", gc !== gpc) {
                        var t = gv.o("s" + gpc + "s0");
                        null != t && (t.style.display = "none")
                    }
                    if (gpc > gc) {
                        var t = gv.o("s" + gpc + "s0");
                        null != t && (t.style.zIndex = "-1")
                    }
                }
            },
            _this.pause = function () {
                this.a.pause()
            },
            _this.stop = function () {
                this.a.stop()
            },
            _this.reset = function () {
                this.a.resert()
            }
    },
    autoAdvance = function (t) {
        this.play = function () {},
            this.pause = function () {},
            this.reset = function () {},
            this.stop = function () {},
            this.IniTSd = !0
    },
    aVideo = function (t, i) {
        var e = this;
        e.s = i,
            e.d = t.c1,
            e.t = t.c2,
            e.r = t.s0;
        var s = gv.o("s" + gc + "s" + t.c0),
            n = s.getElementsByTagName("img");
        n.length > 0 && (n[0].style.display = "none"),
            e.o = s.getElementsByTagName("video")[0],
            e.a = 0,
            e.IniTSd = !0,
        e.d + e.t > 0 && (e.a = 1)
    },
    aVideo.prototype.play = function () {
        function t() {
            if (0 == gp) return void i.pause();
            var e = gt - i.s - i.d;
            if (0 > e) return void(Math.abs(e) > i.d ? i.reset() : Cbfun(t));
            if (e >= i.t) return void i.reset();
            try {
                "undefined" != typeof i.o.play && i.o.paused && i.o.play()
            } catch (s) {}
            Cbfun(t)
        }
        var i = this;
        if (cfc.a(i.o, i.r), 0 == i.a) try {
            i.o.play()
        } catch (e) {} else Cbfun(t)
    },
    aVideo.prototype.pause = function () {
        var t = this;
        try {
            t.o.pause()
        } catch (i) {}
    },
    aVideo.prototype.reset = aVideo.prototype.stop = function () {
        var t = this;
        if (0 != t.t) {
            if (!(t.r > 0 && 0 == t.t)) {
                try {
                    0 != t.o.currentTime && (t.o.currentTime = 0),
                        t.o.pause()
                } catch (i) {}
                if ("undefined" != typeof t.o && "undefined" != typeof t.o.play) for (var e = 0; e < au.length; e++) if (au[e].id == t.o.id) return void au.splice(e, 1)
            }
        } else try {
            t.o.currentTime = 0,
                t.o.play()
        } catch (i) {}
    },
    aaudio = function (t, i) {
        var e = this;
        e.s = i,
            e.d = t.c1,
            e.t = t.c2,
            e.r = t.s0,
            e.o = gv.o("s" + gc + "s" + t.c0).getElementsByTagName("audio")[0],
        e.o || (e.o = gv.o("s" + gc + "s" + t.c0).getElementsByTagName("video")[0]),
            e.a = 0,
            e.IniTSd = !0,
        e.d + e.t > 0 && (e.a = 1)
    },
    aaudio.prototype.play = function () {
        function t() {
            if (i.pozd || i.stpd) return void i.pause();
            var e = gt - i.s - i.d;
            if (0 > e) return void(Math.abs(e) > i.d ? i.reset() : Cbfun(t));
            if (e >= i.t) return void i.reset();
            try {
                "undefined" != typeof i.o.play && i.o.paused && (cfc.a(i.o, i.r, 1), i.o.play())
            } catch (s) {}
            Cbfun(t)
        }
        var i = this;
        if (i.pozd = i.stpd = !1, 0 === i.a) try {
            i.o.play()
        } catch (e) {} else Cbfun(t)
    },
    aaudio.prototype.pause = function () {
        var t = this;
        try {
            t.pozd = 1,
                t.o.pause()
        } catch (i) {}
    },
    aaudio.prototype.reset = aaudio.prototype.stop = function () {
        var t = this;
        if (0 !== t.t) {
            if (!(t.r > 0 && 0 === t.t)) {
                try {
                    0 !== t.o.currentTime && (t.o.currentTime = 0),
                        t.o.pause(),
                        t.stpd = 1
                } catch (i) {}
                if ("undefined" != typeof t.o && "undefined" != typeof t.o.play) for (var e = 0; e < au.length; e++) if (au[e][0].id === t.o.id) return void au.splice(e, 1)
            }
        } else try {
            t.o.currentTime = 0,
                t.o.play()
        } catch (i) {}
    };
    var Events = function () {
            var t = this;
            t.a = function () {
                typeof gv.y.OnLoadingStart !== _undefined && gv.y.OnLoadingStart()
            },
                t.b = function (t) {
                    typeof gv.y.OnLoadingEnd !== _undefined && gv.y.OnLoadingEnd(t)
                },
                t.c = function (t) {
                    typeof gv.y.OnSlideChange !== _undefined && gv.y.OnSlideChange(t)
                },
                t.n = function (t) {
                    var i = anima["s" + gc],
                        e = i.t.n;
                    e || (t += 1),
                        gv.y.OnMovToNxtAnim(t)
                },
                t.p = function (t) {
                    var i = anima["s" + gc],
                        e = i.t.n;
                    e && (t -= 1),
                        gv.y.OnMovToPrvAnim(t)
                },
                t.t = function (t) {
                    typeof gv.y.OnProgressChange !== _undefined && gv.y.OnProgressChange(t)
                },
                t.S = function () {
                    typeof gv.y.OnPlayingStart !== _undefined && gv.y.OnPlayingStart()
                },
                t.s = function () {
                    typeof gv.y.OnPlayingEnd !== _undefined && gv.y.OnPlayingEnd()
                },
                t.e = function (t) {
                    typeof gv.y.OnSlideEnd !== _undefined && gv.y.OnSlideEnd(t)
                },
                t.o = function (t) {
                    typeof gv.y.OnSldOutlineLoad !== _undefined && gv.y.OnSldOutlineLoad(t)
                },
                t.i = function (t) {
                    gv.y.InitaliseSettings(t)
                }
        },
        _events = new Events,
        DopPresentation = function (t, i, e) {
            function s(t) {
                t || (t = gc),
                    t--;
                for (var i = gv.fn[t], e = "", s = i.length, n = 0; s > n; n++) for (var a = i[n], c = a[1], r = c.length, o = 0; r > o; o++) {
                    var d = c[o],
                        l = d[0];
                    e += l
                }
                return e
            }
            function n(t) {
                function i(t, i) {
                    for (var e = ""; i--;) e += t >> i & 1;
                    return e
                }
                t || (t = gc),
                    t--;
                var e = gv.fn[t];
                typeof e === _undefined && (e = []);
                for (var s = [], n = e.length, a = 0; n > a; a++) {
                    var c = e[a],
                        r = {};
                    r.words = [],
                        r.level = c[0];
                    for (var o = c[1], d = o.length, l = 0; d > l; l++) {
                        var h = o[l],
                            f = {};
                        f.text = h[0];
                        var p = h[1];
                        p = i(p, 4),
                            "1" === p[0] ? f.bold = !0 : f.bold = !1,
                            "1" === p[1] ? f.italic = !0 : f.italic = !1,
                            "1" === p[2] ? f.line_through = !0 : f.line_through = !1,
                            "1" === p[3] ? f.underline = !0 : f.underline = !1,
                            r.words[r.words.length] = f
                    }
                    s[s.length] = r
                }
                return s
            }
            function a() {
                ncc.z(gc + 1)
            }
            function c() {
                ncc.z(gc - 1)
            }
            function r(t) {
                gv.d = t
            }
            function o(t) {
                gv.r = t
            }
            function d(t) {
                t || (t = gc),
                    t = 1 > t || t > gc ? gc : t;
                var i = 0;
                return anima["s" + t].c && (i = anima["s" + t].c.i),
                    i
            }
            function l() {
                return 1 === anima["s" + gc].t.n ? (acc.P(), play(), !0) : !1
            }
            function h(t, i, e) {
                stepToGoto.l = 1,
                    e = typeof e !== _undefined ? e : !0,
                    i = typeof i !== _undefined ? i : !0;
                var s = !0;
                if (i !== gc && (ncc.z(i, !0), s = !1), typeof t === _undefined) return stepToGoto.l = 0,
                    void(stepToGoto.s = -1);
                var n = anima["s" + gc],
                    a = n.t.n,
                    c = acc.c();
                a && (c++, t++),
                    t = t > c ? c : t,
                    t = 0 > t ? 0 : t,
                    stepToGoto.s = t,
                    stepToGoto.p = e,
                s && StepToGotoHelper()
            }
            function f() {
                acc.t();
                var t = acc.c(),
                    i = 0;
                if (0 !== n && t > 0) {
                    var e = anima["s" + gc],
                        s = acc.g.slice(),
                        n = s.length;
                    for (s.unshift(gslength[gc - 1]), i = 0; n > i; i++) {
                        var a = s[i],
                            c = s[i + 1];
                        if (a <= e.f && e.f <= c) {
                            !e.t.n && e.f > a && i++;
                            break
                        }
                    }
                }
                return {
                    slide: gc,
                    time: gt,
                    step: i
                }
            }
            function p(t) {
                t = parseInt(t),
                t && addMedia(t, !0)
            }
            function u() {
                return gv.ol
            }
            function v() {
                var t = 0;
                return anima["s" + gc].c && (t = anima["s" + gc].c.i, t -= anima["s" + gc].t.n),
                    t
            }
            function m() {
                return !stepToGoto.l
            }
            function g(t) {
                return typeof t === _undefined && (t = gc),
                    1 > t || t > gv.t ? !1 : void ncc.c(t)
            }
            if (gv.y = t, i ? gv.z = i : gv.z = {}, gv.z.jumpTo) {
                var y = gv.z.jumpTo.step;
                y = isNaN(y) ? 0 : parseInt(y, 10),
                    stepToGoto.s = y,
                    stepToGoto.p = gv.z.jumpTo.playPrev
            }
            return gv.z.dgradeAnim ? "string" == typeof gv.z.dgradeAnim ? gv.n = gv.z.dgradeAnim : gv.n = "Fade" : gv.n = !1,
                gv.u = 0,
            gv.z.skipBlankSlide && (gv.u = 1),
                gv.x = gv.z.resetAllSlide ? !0 : !1,
                typeof gv.z.disablePinchZoom === _undefined ? gv.dz = gv.z.disablePinchZoom = !1 : gv.dz = gv.z.disablePinchZoom,
                e.init = init,
                e.loadContent = loadContent,
                e.loadMaster = loadMaster,
                {
                    n: s,
                    fn: n,
                    ns: a,
                    ps: c,
                    r: r,
                    s: o,
                    c: d,
                    p: l,
                    b: h,
                    a: f,
                    d: p,
                    o: u,
                    e: v,
                    f: m,
                    g: g
                }
        };
    this.init = init,
        this.loadContent = loadContent,
        this.loadMaster = loadMaster;
    var dopPresentation = new DopPresentation(gobal_events, global_options, window);
    this.Next = ncc.n,
        this.Prev = ncc.p,
        this.Play = ncc.P,
        this.Pause = ncc.Ps,
        this.GetNotes = dopPresentation.n,
        this.NxtSlide = dopPresentation.ns,
        this.PrvSlide = dopPresentation.ps,
        this.GotoSlide = ncc.z,
        this.SetRPath = dopPresentation.r,
        this.LoadPres = loadPres,
        this.SetScale = dopPresentation.s,
        this.ClickCount = dopPresentation.e,
        this.JumpToAnim = dopPresentation.b,
        this.CurrentStatus = dopPresentation.a,
        this.PreloadSlide = dopPresentation.d,
        this.GetOutline = dopPresentation.o,
        this.resetSlide = dopPresentation.g,
        this.GetContentDetails = cfc.dl,
        this.GetFormatedNotes = dopPresentation.fn,
        this.GetCurrentAnimationCount = dopPresentation.c,
        this.playAutomaticAnimations = dopPresentation.p,
        this.ReportProgress = dopPresentation.f
};