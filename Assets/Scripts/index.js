var Ho = Object.defineProperty;
var Qo = (e, t, n) =>
  t in e
    ? Ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var M = (e, t, n) => (Qo(e, typeof t != "symbol" ? t + "" : t, n), n);
const Zo = function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
};
Zo();
var Zt,
  $,
  _i,
  Me,
  lr,
  gi,
  yi,
  Vt = {},
  vi = [],
  Xo = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function me(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function bi(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function Ae(e, t, n) {
  var r,
    i,
    o,
    s = {};
  for (o in t)
    o == "key" ? (r = t[o]) : o == "ref" ? (i = t[o]) : (s[o] = t[o]);
  if (
    (arguments.length > 2 &&
      (s.children = arguments.length > 3 ? Zt.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
  )
    for (o in e.defaultProps) s[o] === void 0 && (s[o] = e.defaultProps[o]);
  return Ct(e, s, r, i, null);
}
function Ct(e, t, n, r, i) {
  var o = {
    type: e,
    props: t,
    key: n,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: i == null ? ++_i : i,
  };
  return i == null && $.vnode != null && $.vnode(o), o;
}
function Z(e) {
  return e.children;
}
function ae(e, t) {
  (this.props = e), (this.context = t);
}
function it(e, t) {
  if (t == null) return e.__ ? it(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
  return typeof e.type == "function" ? it(e) : null;
}
function xi(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return xi(e);
  }
}
function $n(e) {
  ((!e.__d && (e.__d = !0) && Me.push(e) && !qt.__r++) ||
    lr !== $.debounceRendering) &&
    ((lr = $.debounceRendering) || gi)(qt);
}
function qt() {
  var e, t, n, r, i, o, s, l;
  for (
    Me.sort(function (u, c) {
      return u.__v.__b - c.__v.__b;
    });
    (e = Me.shift());

  )
    e.__d &&
      ((t = Me.length),
      (r = void 0),
      (i = void 0),
      (s = (o = (n = e).__v).__e),
      (l = n.__P) &&
        ((r = []),
        ((i = me({}, o)).__v = o.__v + 1),
        Fn(
          l,
          o,
          i,
          n.__n,
          l.ownerSVGElement !== void 0,
          o.__h != null ? [s] : null,
          r,
          s == null ? it(o) : s,
          o.__h
        ),
        ki(r, o),
        o.__e != s && xi(o)),
      Me.length > t &&
        Me.sort(function (u, c) {
          return u.__v.__b - c.__v.__b;
        }));
  qt.__r = 0;
}
function wi(e, t, n, r, i, o, s, l, u, c) {
  var a,
    f,
    h,
    _,
    p,
    m,
    d,
    g = (r && r.__k) || vi,
    y = g.length;
  for (n.__k = [], a = 0; a < t.length; a++)
    if (
      (_ = n.__k[a] =
        (_ = t[a]) == null || typeof _ == "boolean"
          ? null
          : typeof _ == "string" || typeof _ == "number" || typeof _ == "bigint"
          ? Ct(null, _, null, null, _)
          : Array.isArray(_)
          ? Ct(Z, { children: _ }, null, null, null)
          : _.__b > 0
          ? Ct(_.type, _.props, _.key, _.ref ? _.ref : null, _.__v)
          : _) != null
    ) {
      if (
        ((_.__ = n),
        (_.__b = n.__b + 1),
        (h = g[a]) === null || (h && _.key == h.key && _.type === h.type))
      )
        g[a] = void 0;
      else
        for (f = 0; f < y; f++) {
          if ((h = g[f]) && _.key == h.key && _.type === h.type) {
            g[f] = void 0;
            break;
          }
          h = null;
        }
      Fn(e, _, (h = h || Vt), i, o, s, l, u, c),
        (p = _.__e),
        (f = _.ref) &&
          h.ref != f &&
          (d || (d = []),
          h.ref && d.push(h.ref, null, _),
          d.push(f, _.__c || p, _)),
        p != null
          ? (m == null && (m = p),
            typeof _.type == "function" && _.__k === h.__k
              ? (_.__d = u = $i(_, u, e))
              : (u = Mi(e, _, h, g, p, u)),
            typeof n.type == "function" && (n.__d = u))
          : u && h.__e == u && u.parentNode != e && (u = it(h));
    }
  for (n.__e = m, a = y; a--; )
    g[a] != null &&
      (typeof n.type == "function" &&
        g[a].__e != null &&
        g[a].__e == n.__d &&
        (n.__d = Pi(r).nextSibling),
      Ai(g[a], g[a]));
  if (d) for (a = 0; a < d.length; a++) Ci(d[a], d[++a], d[++a]);
}
function $i(e, t, n) {
  for (var r, i = e.__k, o = 0; i && o < i.length; o++)
    (r = i[o]) &&
      ((r.__ = e),
      (t =
        typeof r.type == "function" ? $i(r, t, n) : Mi(n, r, r, i, r.__e, t)));
  return t;
}
function Ce(e, t) {
  return (
    (t = t || []),
    e == null ||
      typeof e == "boolean" ||
      (Array.isArray(e)
        ? e.some(function (n) {
            Ce(n, t);
          })
        : t.push(e)),
    t
  );
}
function Mi(e, t, n, r, i, o) {
  var s, l, u;
  if (t.__d !== void 0) (s = t.__d), (t.__d = void 0);
  else if (n == null || i != o || i.parentNode == null)
    e: if (o == null || o.parentNode !== e) e.appendChild(i), (s = null);
    else {
      for (l = o, u = 0; (l = l.nextSibling) && u < r.length; u += 1)
        if (l == i) break e;
      e.insertBefore(i, o), (s = o);
    }
  return s !== void 0 ? s : i.nextSibling;
}
function Pi(e) {
  var t, n, r;
  if (e.type == null || typeof e.type == "string") return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (r = Pi(n))) return r;
  }
  return null;
}
function Wo(e, t, n, r, i) {
  var o;
  for (o in n)
    o === "children" || o === "key" || o in t || jt(e, o, null, n[o], r);
  for (o in t)
    (i && typeof t[o] != "function") ||
      o === "children" ||
      o === "key" ||
      o === "value" ||
      o === "checked" ||
      n[o] === t[o] ||
      jt(e, o, t[o], n[o], r);
}
function ur(e, t, n) {
  t[0] === "-"
    ? e.setProperty(t, n == null ? "" : n)
    : (e[t] =
        n == null ? "" : typeof n != "number" || Xo.test(t) ? n : n + "px");
}
function jt(e, t, n, r, i) {
  var o;
  e: if (t === "style")
    if (typeof n == "string") e.style.cssText = n;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (t in r) (n && t in n) || ur(e.style, t, "");
      if (n) for (t in n) (r && n[t] === r[t]) || ur(e.style, t, n[t]);
    }
  else if (t[0] === "o" && t[1] === "n")
    (o = t !== (t = t.replace(/Capture$/, ""))),
      (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
      e.l || (e.l = {}),
      (e.l[t + o] = n),
      n
        ? r || e.addEventListener(t, o ? fr : cr, o)
        : e.removeEventListener(t, o ? fr : cr, o);
  else if (t !== "dangerouslySetInnerHTML") {
    if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      t !== "width" &&
      t !== "height" &&
      t !== "href" &&
      t !== "list" &&
      t !== "form" &&
      t !== "tabIndex" &&
      t !== "download" &&
      t in e
    )
      try {
        e[t] = n == null ? "" : n;
        break e;
      } catch {}
    typeof n == "function" ||
      (n == null || (n === !1 && t.indexOf("-") == -1)
        ? e.removeAttribute(t)
        : e.setAttribute(t, n));
  }
}
function cr(e) {
  return this.l[e.type + !1]($.event ? $.event(e) : e);
}
function fr(e) {
  return this.l[e.type + !0]($.event ? $.event(e) : e);
}
function Fn(e, t, n, r, i, o, s, l, u) {
  var c,
    a,
    f,
    h,
    _,
    p,
    m,
    d,
    g,
    y,
    b,
    v,
    w,
    N,
    k,
    S = t.type;
  if (t.constructor !== void 0) return null;
  n.__h != null &&
    ((u = n.__h), (l = t.__e = n.__e), (t.__h = null), (o = [l])),
    (c = $.__b) && c(t);
  try {
    e: if (typeof S == "function") {
      if (
        ((d = t.props),
        (g = (c = S.contextType) && r[c.__c]),
        (y = c ? (g ? g.props.value : c.__) : r),
        n.__c
          ? (m = (a = t.__c = n.__c).__ = a.__E)
          : ("prototype" in S && S.prototype.render
              ? (t.__c = a = new S(d, y))
              : ((t.__c = a = new ae(d, y)),
                (a.constructor = S),
                (a.render = Go)),
            g && g.sub(a),
            (a.props = d),
            a.state || (a.state = {}),
            (a.context = y),
            (a.__n = r),
            (f = a.__d = !0),
            (a.__h = []),
            (a._sb = [])),
        a.__s == null && (a.__s = a.state),
        S.getDerivedStateFromProps != null &&
          (a.__s == a.state && (a.__s = me({}, a.__s)),
          me(a.__s, S.getDerivedStateFromProps(d, a.__s))),
        (h = a.props),
        (_ = a.state),
        (a.__v = t),
        f)
      )
        S.getDerivedStateFromProps == null &&
          a.componentWillMount != null &&
          a.componentWillMount(),
          a.componentDidMount != null && a.__h.push(a.componentDidMount);
      else {
        if (
          (S.getDerivedStateFromProps == null &&
            d !== h &&
            a.componentWillReceiveProps != null &&
            a.componentWillReceiveProps(d, y),
          (!a.__e &&
            a.shouldComponentUpdate != null &&
            a.shouldComponentUpdate(d, a.__s, y) === !1) ||
            t.__v === n.__v)
        ) {
          for (
            t.__v !== n.__v && ((a.props = d), (a.state = a.__s), (a.__d = !1)),
              a.__e = !1,
              t.__e = n.__e,
              t.__k = n.__k,
              t.__k.forEach(function (V) {
                V && (V.__ = t);
              }),
              b = 0;
            b < a._sb.length;
            b++
          )
            a.__h.push(a._sb[b]);
          (a._sb = []), a.__h.length && s.push(a);
          break e;
        }
        a.componentWillUpdate != null && a.componentWillUpdate(d, a.__s, y),
          a.componentDidUpdate != null &&
            a.__h.push(function () {
              a.componentDidUpdate(h, _, p);
            });
      }
      if (
        ((a.context = y),
        (a.props = d),
        (a.__P = e),
        (v = $.__r),
        (w = 0),
        "prototype" in S && S.prototype.render)
      ) {
        for (
          a.state = a.__s,
            a.__d = !1,
            v && v(t),
            c = a.render(a.props, a.state, a.context),
            N = 0;
          N < a._sb.length;
          N++
        )
          a.__h.push(a._sb[N]);
        a._sb = [];
      } else
        do
          (a.__d = !1),
            v && v(t),
            (c = a.render(a.props, a.state, a.context)),
            (a.state = a.__s);
        while (a.__d && ++w < 25);
      (a.state = a.__s),
        a.getChildContext != null && (r = me(me({}, r), a.getChildContext())),
        f ||
          a.getSnapshotBeforeUpdate == null ||
          (p = a.getSnapshotBeforeUpdate(h, _)),
        (k = c != null && c.type === Z && c.key == null ? c.props.children : c),
        wi(e, Array.isArray(k) ? k : [k], t, n, r, i, o, s, l, u),
        (a.base = t.__e),
        (t.__h = null),
        a.__h.length && s.push(a),
        m && (a.__E = a.__ = null),
        (a.__e = !1);
    } else
      o == null && t.__v === n.__v
        ? ((t.__k = n.__k), (t.__e = n.__e))
        : (t.__e = Yo(n.__e, t, n, r, i, o, s, u));
    (c = $.diffed) && c(t);
  } catch (V) {
    (t.__v = null),
      (u || o != null) &&
        ((t.__e = l), (t.__h = !!u), (o[o.indexOf(l)] = null)),
      $.__e(V, t, n);
  }
}
function ki(e, t) {
  $.__c && $.__c(t, e),
    e.some(function (n) {
      try {
        (e = n.__h),
          (n.__h = []),
          e.some(function (r) {
            r.call(n);
          });
      } catch (r) {
        $.__e(r, n.__v);
      }
    });
}
function Yo(e, t, n, r, i, o, s, l) {
  var u,
    c,
    a,
    f = n.props,
    h = t.props,
    _ = t.type,
    p = 0;
  if ((_ === "svg" && (i = !0), o != null)) {
    for (; p < o.length; p++)
      if (
        (u = o[p]) &&
        "setAttribute" in u == !!_ &&
        (_ ? u.localName === _ : u.nodeType === 3)
      ) {
        (e = u), (o[p] = null);
        break;
      }
  }
  if (e == null) {
    if (_ === null) return document.createTextNode(h);
    (e = i
      ? document.createElementNS("http://www.w3.org/2000/svg", _)
      : document.createElement(_, h.is && h)),
      (o = null),
      (l = !1);
  }
  if (_ === null) f === h || (l && e.data === h) || (e.data = h);
  else {
    if (
      ((o = o && Zt.call(e.childNodes)),
      (c = (f = n.props || Vt).dangerouslySetInnerHTML),
      (a = h.dangerouslySetInnerHTML),
      !l)
    ) {
      if (o != null)
        for (f = {}, p = 0; p < e.attributes.length; p++)
          f[e.attributes[p].name] = e.attributes[p].value;
      (a || c) &&
        ((a && ((c && a.__html == c.__html) || a.__html === e.innerHTML)) ||
          (e.innerHTML = (a && a.__html) || ""));
    }
    if ((Wo(e, h, f, i, l), a)) t.__k = [];
    else if (
      ((p = t.props.children),
      wi(
        e,
        Array.isArray(p) ? p : [p],
        t,
        n,
        r,
        i && _ !== "foreignObject",
        o,
        s,
        o ? o[0] : n.__k && it(n, 0),
        l
      ),
      o != null)
    )
      for (p = o.length; p--; ) o[p] != null && bi(o[p]);
    l ||
      ("value" in h &&
        (p = h.value) !== void 0 &&
        (p !== e.value ||
          (_ === "progress" && !p) ||
          (_ === "option" && p !== f.value)) &&
        jt(e, "value", p, f.value, !1),
      "checked" in h &&
        (p = h.checked) !== void 0 &&
        p !== e.checked &&
        jt(e, "checked", p, f.checked, !1));
  }
  return e;
}
function Ci(e, t, n) {
  try {
    typeof e == "function" ? e(t) : (e.current = t);
  } catch (r) {
    $.__e(r, n);
  }
}
function Ai(e, t, n) {
  var r, i;
  if (
    ($.unmount && $.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || Ci(r, null, t)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        $.__e(o, t);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (i = 0; i < r.length; i++)
      r[i] && Ai(r[i], t, n || typeof e.type != "function");
  n || e.__e == null || bi(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function Go(e, t, n) {
  return this.constructor(e, n);
}
function Jo(e, t, n) {
  var r, i, o;
  $.__ && $.__(e, t),
    (i = (r = typeof n == "function") ? null : (n && n.__k) || t.__k),
    (o = []),
    Fn(
      t,
      (e = ((!r && n) || t).__k = Ae(Z, null, [e])),
      i || Vt,
      Vt,
      t.ownerSVGElement !== void 0,
      !r && n ? [n] : i ? null : t.firstChild ? Zt.call(t.childNodes) : null,
      o,
      !r && n ? n : i ? i.__e : t.firstChild,
      r
    ),
    ki(o, e);
}
function Si(e, t) {
  Jo(e, t, Si);
}
function Ko(e, t) {
  var n = {
    __c: (t = "__cC" + yi++),
    __: e,
    Consumer: function (r, i) {
      return r.children(i);
    },
    Provider: function (r) {
      var i, o;
      return (
        this.getChildContext ||
          ((i = []),
          ((o = {})[t] = this),
          (this.getChildContext = function () {
            return o;
          }),
          (this.shouldComponentUpdate = function (s) {
            this.props.value !== s.value &&
              i.some(function (l) {
                (l.__e = !0), $n(l);
              });
          }),
          (this.sub = function (s) {
            i.push(s);
            var l = s.componentWillUnmount;
            s.componentWillUnmount = function () {
              i.splice(i.indexOf(s), 1), l && l.call(s);
            };
          })),
        r.children
      );
    },
  };
  return (n.Provider.__ = n.Consumer.contextType = n);
}
(Zt = vi.slice),
  ($ = {
    __e: function (e, t, n, r) {
      for (var i, o, s; (t = t.__); )
        if ((i = t.__c) && !i.__)
          try {
            if (
              ((o = i.constructor) &&
                o.getDerivedStateFromError != null &&
                (i.setState(o.getDerivedStateFromError(e)), (s = i.__d)),
              i.componentDidCatch != null &&
                (i.componentDidCatch(e, r || {}), (s = i.__d)),
              s)
            )
              return (i.__E = i);
          } catch (l) {
            e = l;
          }
      throw e;
    },
  }),
  (_i = 0),
  (ae.prototype.setState = function (e, t) {
    var n;
    (n =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = me({}, this.state))),
      typeof e == "function" && (e = e(me({}, n), this.props)),
      e && me(n, e),
      e != null && this.__v && (t && this._sb.push(t), $n(this));
  }),
  (ae.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), $n(this));
  }),
  (ae.prototype.render = Z),
  (Me = []),
  (gi =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  (qt.__r = 0),
  (yi = 0);
var Fe,
  j,
  hn,
  hr,
  ot = 0,
  Ni = [],
  At = [],
  dr = $.__b,
  pr = $.__r,
  mr = $.diffed,
  _r = $.__c,
  gr = $.unmount;
function mt(e, t) {
  $.__h && $.__h(j, e, ot || t), (ot = 0);
  var n = j.__H || (j.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: At }), n.__[e];
}
function te(e) {
  return (ot = 1), es(Ei, e);
}
function es(e, t, n) {
  var r = mt(Fe++, 2);
  if (
    ((r.t = e),
    !r.__c &&
      ((r.__ = [
        n ? n(t) : Ei(void 0, t),
        function (o) {
          var s = r.__N ? r.__N[0] : r.__[0],
            l = r.t(s, o);
          s !== l && ((r.__N = [l, r.__[1]]), r.__c.setState({}));
        },
      ]),
      (r.__c = j),
      !j.u))
  ) {
    j.u = !0;
    var i = j.shouldComponentUpdate;
    j.shouldComponentUpdate = function (o, s, l) {
      if (!r.__c.__H) return !0;
      var u = r.__c.__H.__.filter(function (a) {
        return a.__c;
      });
      if (
        u.every(function (a) {
          return !a.__N;
        })
      )
        return !i || i.call(this, o, s, l);
      var c = !1;
      return (
        u.forEach(function (a) {
          if (a.__N) {
            var f = a.__[0];
            (a.__ = a.__N), (a.__N = void 0), f !== a.__[0] && (c = !0);
          }
        }),
        !(!c && r.__c.props === o) && (!i || i.call(this, o, s, l))
      );
    };
  }
  return r.__N || r.__;
}
function ue(e, t) {
  var n = mt(Fe++, 3);
  !$.__s && zn(n.__H, t) && ((n.__ = e), (n.i = t), j.__H.__h.push(n));
}
function Oi(e, t) {
  var n = mt(Fe++, 4);
  !$.__s && zn(n.__H, t) && ((n.__ = e), (n.i = t), j.__h.push(n));
}
function ce(e) {
  return (
    (ot = 5),
    Y(function () {
      return { current: e };
    }, [])
  );
}
function Y(e, t) {
  var n = mt(Fe++, 7);
  return zn(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
}
function ts(e, t) {
  return (
    (ot = 8),
    Y(function () {
      return e;
    }, t)
  );
}
function Li(e) {
  var t = j.context[e.__c],
    n = mt(Fe++, 9);
  return (
    (n.c = e),
    t ? (n.__ == null && ((n.__ = !0), t.sub(j)), t.props.value) : e.__
  );
}
function ns() {
  for (var e; (e = Ni.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(St), e.__H.__h.forEach(Mn), (e.__H.__h = []);
      } catch (t) {
        (e.__H.__h = []), $.__e(t, e.__v);
      }
}
($.__b = function (e) {
  (j = null), dr && dr(e);
}),
  ($.__r = function (e) {
    pr && pr(e), (Fe = 0);
    var t = (j = e.__c).__H;
    t &&
      (hn === j
        ? ((t.__h = []),
          (j.__h = []),
          t.__.forEach(function (n) {
            n.__N && (n.__ = n.__N), (n.__V = At), (n.__N = n.i = void 0);
          }))
        : (t.__h.forEach(St), t.__h.forEach(Mn), (t.__h = []))),
      (hn = j);
  }),
  ($.diffed = function (e) {
    mr && mr(e);
    var t = e.__c;
    t &&
      t.__H &&
      (t.__H.__h.length &&
        ((Ni.push(t) !== 1 && hr === $.requestAnimationFrame) ||
          ((hr = $.requestAnimationFrame) || rs)(ns)),
      t.__H.__.forEach(function (n) {
        n.i && (n.__H = n.i),
          n.__V !== At && (n.__ = n.__V),
          (n.i = void 0),
          (n.__V = At);
      })),
      (hn = j = null);
  }),
  ($.__c = function (e, t) {
    t.some(function (n) {
      try {
        n.__h.forEach(St),
          (n.__h = n.__h.filter(function (r) {
            return !r.__ || Mn(r);
          }));
      } catch (r) {
        t.some(function (i) {
          i.__h && (i.__h = []);
        }),
          (t = []),
          $.__e(r, n.__v);
      }
    }),
      _r && _r(e, t);
  }),
  ($.unmount = function (e) {
    gr && gr(e);
    var t,
      n = e.__c;
    n &&
      n.__H &&
      (n.__H.__.forEach(function (r) {
        try {
          St(r);
        } catch (i) {
          t = i;
        }
      }),
      (n.__H = void 0),
      t && $.__e(t, n.__v));
  });
var yr = typeof requestAnimationFrame == "function";
function rs(e) {
  var t,
    n = function () {
      clearTimeout(r), yr && cancelAnimationFrame(t), setTimeout(e);
    },
    r = setTimeout(n, 100);
  yr && (t = requestAnimationFrame(n));
}
function St(e) {
  var t = j,
    n = e.__c;
  typeof n == "function" && ((e.__c = void 0), n()), (j = t);
}
function Mn(e) {
  var t = j;
  (e.__c = e.__()), (j = t);
}
function zn(e, t) {
  return (
    !e ||
    e.length !== t.length ||
    t.some(function (n, r) {
      return n !== e[r];
    })
  );
}
function Ei(e, t) {
  return typeof t == "function" ? t(e) : t;
}
const vr = (1 + Math.sqrt(5)) / 2;
function br(e) {
  return 2 - (Math.floor((e + 2) * vr) - Math.floor((e + 1) * vr));
}
function is(e) {
  return Math.round(e / 1.453);
}
function _t(e) {
  var r;
  let t = [],
    n = Ce(e);
  for (; n.length > 0; ) {
    const i = n.shift();
    i.type === "path" || i.type === "use"
      ? t.push(i)
      : i.type === "g"
      ? (n = n.concat(Ce(i.props.children)))
      : typeof i.type == "function" &&
        i.type.call &&
        i.props &&
        ((r = i.props.d) != null && r.animation
          ? t.push(i)
          : (n = n.concat(Ce(i.type.call(void 0, i.props)))));
  }
  return t;
}
/*!
 * SVGPathCommander v1.0.5 (http://thednp.github.io/svg-path-commander)
 * Copyright 2022 © thednp
 * Licensed under MIT (https://github.com/thednp/svg-path-commander/blob/master/LICENSE)
 */ const gt = { origin: [0, 0, 0], round: 4 },
  We = { a: 7, c: 6, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, z: 0 };
function xr(e) {
  let t = e.pathValue[e.segmentStart],
    n = t.toLowerCase();
  const { data: r } = e;
  for (
    ;
    r.length >= We[n] &&
    (n === "m" && r.length > 2
      ? (e.segments.push([t, ...r.splice(0, 2)]),
        (n = "l"),
        (t = t === "m" ? "l" : "L"))
      : e.segments.push([t, ...r.splice(0, We[n])]),
    !!We[n]);

  );
}
const se = "SVGPathCommander error";
function os(e) {
  const { index: t, pathValue: n } = e,
    r = n.charCodeAt(t);
  if (r === 48) {
    (e.param = 0), (e.index += 1);
    return;
  }
  if (r === 49) {
    (e.param = 1), (e.index += 1);
    return;
  }
  e.err = `${se}: invalid Arc flag "${n[t]}", expecting 0 or 1 at index ${t}`;
}
function Oe(e) {
  return e >= 48 && e <= 57;
}
const Te = "Invalid path value";
function ss(e) {
  const { max: t, pathValue: n, index: r } = e;
  let i = r,
    o = !1,
    s = !1,
    l = !1,
    u = !1,
    c;
  if (i >= t) {
    e.err = `${se}: ${Te} at index ${i}, "pathValue" is missing param`;
    return;
  }
  if (
    ((c = n.charCodeAt(i)),
    (c === 43 || c === 45) && ((i += 1), (c = n.charCodeAt(i))),
    !Oe(c) && c !== 46)
  ) {
    e.err = `${se}: ${Te} at index ${i}, "${n[i]}" is not a number`;
    return;
  }
  if (c !== 46) {
    if (
      ((o = c === 48),
      (i += 1),
      (c = n.charCodeAt(i)),
      o && i < t && c && Oe(c))
    ) {
      e.err = `${se}: ${Te} at index ${r}, "${n[r]}" illegal number`;
      return;
    }
    for (; i < t && Oe(n.charCodeAt(i)); ) (i += 1), (s = !0);
    c = n.charCodeAt(i);
  }
  if (c === 46) {
    for (u = !0, i += 1; Oe(n.charCodeAt(i)); ) (i += 1), (l = !0);
    c = n.charCodeAt(i);
  }
  if (c === 101 || c === 69) {
    if (u && !s && !l) {
      e.err = `${se}: ${Te} at index ${i}, "${n[i]}" invalid float exponent`;
      return;
    }
    if (
      ((i += 1),
      (c = n.charCodeAt(i)),
      (c === 43 || c === 45) && (i += 1),
      i < t && Oe(n.charCodeAt(i)))
    )
      for (; i < t && Oe(n.charCodeAt(i)); ) i += 1;
    else {
      e.err = `${se}: ${Te} at index ${i}, "${n[i]}" invalid integer exponent`;
      return;
    }
  }
  (e.index = i), (e.param = +e.pathValue.slice(r, i));
}
function as(e) {
  const t = [
    5760, 6158, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201,
    8202, 8239, 8287, 12288, 65279,
  ];
  return (
    e === 10 ||
    e === 13 ||
    e === 8232 ||
    e === 8233 ||
    e === 32 ||
    e === 9 ||
    e === 11 ||
    e === 12 ||
    e === 160 ||
    (e >= 5760 && t.includes(e))
  );
}
function Ye(e) {
  const { pathValue: t, max: n } = e;
  for (; e.index < n && as(t.charCodeAt(e.index)); ) e.index += 1;
}
function ls(e) {
  switch (e | 32) {
    case 109:
    case 122:
    case 108:
    case 104:
    case 118:
    case 99:
    case 115:
    case 113:
    case 116:
    case 97:
      return !0;
    default:
      return !1;
  }
}
function us(e) {
  return (e >= 48 && e <= 57) || e === 43 || e === 45 || e === 46;
}
function cs(e) {
  return (e | 32) === 97;
}
function Ti(e) {
  const { max: t, pathValue: n, index: r } = e,
    i = n.charCodeAt(r),
    o = We[n[r].toLowerCase()];
  if (((e.segmentStart = r), !ls(i))) {
    e.err = `${se}: ${Te} "${n[r]}" is not a path command`;
    return;
  }
  if (((e.index += 1), Ye(e), (e.data = []), !o)) {
    xr(e);
    return;
  }
  for (;;) {
    for (let s = o; s > 0; s -= 1) {
      if ((cs(i) && (s === 3 || s === 4) ? os(e) : ss(e), e.err.length)) return;
      e.data.push(e.param),
        Ye(e),
        e.index < t && n.charCodeAt(e.index) === 44 && ((e.index += 1), Ye(e));
    }
    if (e.index >= e.max || !us(n.charCodeAt(e.index))) break;
  }
  xr(e);
}
function J(e) {
  return e.map((t) => (Array.isArray(t) ? [...t] : t));
}
function Vi(e) {
  (this.segments = []),
    (this.pathValue = e),
    (this.max = e.length),
    (this.index = 0),
    (this.param = 0),
    (this.segmentStart = 0),
    (this.data = []),
    (this.err = "");
}
function Xt(e) {
  return (
    Array.isArray(e) &&
    e.every((t) => {
      const n = t[0].toLowerCase();
      return We[n] === t.length - 1 && "achlmqstvz".includes(n);
    })
  );
}
function ve(e) {
  if (Xt(e)) return J(e);
  const t = new Vi(e);
  for (Ye(t); t.index < t.max && !t.err.length; ) Ti(t);
  return t.err ? t.err : t.segments;
}
function Rn(e) {
  return Xt(e) && e.every(([t]) => t === t.toUpperCase());
}
function ze(e) {
  if (Rn(e)) return J(e);
  const t = ve(e);
  let n = 0,
    r = 0,
    i = 0,
    o = 0;
  return t.map((s) => {
    const l = s.slice(1).map(Number),
      [u] = s,
      c = u.toUpperCase();
    if (u === "M") return ([n, r] = l), (i = n), (o = r), ["M", n, r];
    let a = [];
    if (u !== c)
      switch (c) {
        case "A":
          a = [c, l[0], l[1], l[2], l[3], l[4], l[5] + n, l[6] + r];
          break;
        case "V":
          a = [c, l[0] + r];
          break;
        case "H":
          a = [c, l[0] + n];
          break;
        default: {
          const h = l.map((_, p) => _ + (p % 2 ? r : n));
          a = [c, ...h];
        }
      }
    else a = [c, ...l];
    const f = a.length;
    switch (c) {
      case "Z":
        (n = i), (r = o);
        break;
      case "H":
        [, n] = a;
        break;
      case "V":
        [, r] = a;
        break;
      default:
        (n = a[f - 2]), (r = a[f - 1]), c === "M" && ((i = n), (o = r));
    }
    return a;
  });
}
function qi(e) {
  return Xt(e) && e.slice(1).every(([t]) => t === t.toLowerCase());
}
function Un(e) {
  if (qi(e)) return J(e);
  const t = ve(e);
  let n = 0,
    r = 0,
    i = 0,
    o = 0;
  return t.map((s) => {
    const l = s.slice(1).map(Number),
      [u] = s,
      c = u.toLowerCase();
    if (u === "M") return ([n, r] = l), (i = n), (o = r), ["M", n, r];
    let a = [];
    if (u !== c)
      switch (c) {
        case "a":
          a = [c, l[0], l[1], l[2], l[3], l[4], l[5] - n, l[6] - r];
          break;
        case "v":
          a = [c, l[0] - r];
          break;
        case "h":
          a = [c, l[0] - n];
          break;
        default: {
          const h = l.map((_, p) => _ - (p % 2 ? r : n));
          a = [c, ...h];
        }
      }
    else u === "m" && ((i = l[0] + n), (o = l[1] + r)), (a = [c, ...l]);
    const f = a.length;
    switch (c) {
      case "z":
        (n = i), (r = o);
        break;
      case "h":
        n += a[1];
        break;
      case "v":
        r += a[1];
        break;
      default:
        (n += a[f - 2]), (r += a[f - 1]);
    }
    return a;
  });
}
function Pn(e, t, n) {
  if (e[n].length > 7) {
    e[n].shift();
    const r = e[n];
    let i = n;
    for (; r.length; )
      (t[n] = "A"), e.splice((i += 1), 0, ["C", ...r.splice(0, 6)]);
    e.splice(n, 1);
  }
}
function Bn(e) {
  return Rn(e) && e.every(([t]) => "ACLMQZ".includes(t));
}
function ji(e) {
  return Bn(e) && e.every(([t]) => "MC".includes(t));
}
function fs(e, t) {
  const [n] = e,
    { x1: r, y1: i, x2: o, y2: s } = t,
    l = e.slice(1).map(Number);
  let u = e;
  if (("TQ".includes(n) || ((t.qx = null), (t.qy = null)), n === "H"))
    u = ["L", e[1], i];
  else if (n === "V") u = ["L", r, e[1]];
  else if (n === "S") {
    const c = r * 2 - o,
      a = i * 2 - s;
    (t.x1 = c), (t.y1 = a), (u = ["C", c, a, ...l]);
  } else if (n === "T") {
    const c = r * 2 - t.qx,
      a = i * 2 - t.qy;
    (t.qx = c), (t.qy = a), (u = ["Q", c, a, ...l]);
  } else if (n === "Q") {
    const [c, a] = l;
    (t.qx = c), (t.qy = a);
  }
  return u;
}
const Wt = { x1: 0, y1: 0, x2: 0, y2: 0, x: 0, y: 0, qx: null, qy: null };
function fe(e) {
  if (Bn(e)) return J(e);
  const t = ze(e),
    n = { ...Wt },
    r = t.length;
  for (let i = 0; i < r; i += 1) {
    t[i], (t[i] = fs(t[i], n));
    const o = t[i],
      s = o.length;
    (n.x1 = +o[s - 2]),
      (n.y1 = +o[s - 1]),
      (n.x2 = +o[s - 4] || n.x1),
      (n.y2 = +o[s - 3] || n.y1);
  }
  return t;
}
function wt(e, t, n) {
  const r = e * Math.cos(n) - t * Math.sin(n),
    i = e * Math.sin(n) + t * Math.cos(n);
  return { x: r, y: i };
}
function Ii(e, t, n, r, i, o, s, l, u, c) {
  let a = e,
    f = t,
    h = n,
    _ = r,
    p = l,
    m = u;
  const d = (Math.PI * 120) / 180,
    g = (Math.PI / 180) * (+i || 0);
  let y = [],
    b,
    v,
    w,
    N,
    k;
  if (c) [v, w, N, k] = c;
  else {
    (b = wt(a, f, -g)),
      (a = b.x),
      (f = b.y),
      (b = wt(p, m, -g)),
      (p = b.x),
      (m = b.y);
    const T = (a - p) / 2,
      F = (f - m) / 2;
    let X = (T * T) / (h * h) + (F * F) / (_ * _);
    X > 1 && ((X = Math.sqrt(X)), (h *= X), (_ *= X));
    const xe = h * h,
      we = _ * _,
      $e =
        (o === s ? -1 : 1) *
        Math.sqrt(
          Math.abs(
            (xe * we - xe * F * F - we * T * T) / (xe * F * F + we * T * T)
          )
        );
    (N = ($e * h * F) / _ + (a + p) / 2),
      (k = ($e * -_ * T) / h + (f + m) / 2),
      (v = Math.asin(((((f - k) / _) * 10 ** 9) >> 0) / 10 ** 9)),
      (w = Math.asin(((((m - k) / _) * 10 ** 9) >> 0) / 10 ** 9)),
      (v = a < N ? Math.PI - v : v),
      (w = p < N ? Math.PI - w : w),
      v < 0 && (v = Math.PI * 2 + v),
      w < 0 && (w = Math.PI * 2 + w),
      s && v > w && (v -= Math.PI * 2),
      !s && w > v && (w -= Math.PI * 2);
  }
  let S = w - v;
  if (Math.abs(S) > d) {
    const T = w,
      F = p,
      X = m;
    (w = v + d * (s && w > v ? 1 : -1)),
      (p = N + h * Math.cos(w)),
      (m = k + _ * Math.sin(w)),
      (y = Ii(p, m, h, _, i, 0, s, F, X, [w, T, N, k]));
  }
  S = w - v;
  const V = Math.cos(v),
    P = Math.sin(v),
    A = Math.cos(w),
    C = Math.sin(w),
    q = Math.tan(S / 4),
    D = (4 / 3) * h * q,
    he = (4 / 3) * _ * q,
    I = [a, f],
    U = [a + D * P, f - he * V],
    de = [p + D * C, m - he * A],
    re = [p, m];
  if (((U[0] = 2 * I[0] - U[0]), (U[1] = 2 * I[1] - U[1]), c))
    return [...U, ...de, ...re, ...y];
  y = [...U, ...de, ...re, ...y];
  const be = [];
  for (let T = 0, F = y.length; T < F; T += 1)
    be[T] = T % 2 ? wt(y[T - 1], y[T], g).y : wt(y[T], y[T + 1], g).x;
  return be;
}
function hs(e, t, n, r, i, o) {
  const s = 0.3333333333333333,
    l = 2 / 3;
  return [s * e + l * n, s * t + l * r, s * i + l * n, s * o + l * r, i, o];
}
function Ve(e, t, n) {
  const [r, i] = e,
    [o, s] = t;
  return [r + (o - r) * n, i + (s - i) * n];
}
function Yt(e, t) {
  return Math.sqrt(
    (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])
  );
}
function st(e, t, n, r, i) {
  const o = Yt([e, t], [n, r]);
  let s = { x: 0, y: 0 };
  if (typeof i == "number")
    if (i <= 0) s = { x: e, y: t };
    else if (i >= o) s = { x: n, y: r };
    else {
      const [l, u] = Ve([e, t], [n, r], i / o);
      s = { x: l, y: u };
    }
  return {
    length: o,
    point: s,
    min: { x: Math.min(e, n), y: Math.min(t, r) },
    max: { x: Math.max(e, n), y: Math.max(t, r) },
  };
}
function wr(e, t, n, r) {
  const o = [e, t],
    s = [n, r],
    l = Ve(o, s, 0.5),
    u = Ve(s, l, 0.5),
    c = Ve(l, u, 0.5),
    a = Ve(u, c, 0.5),
    f = Ve(c, a, 0.5),
    h = [...o, ...l, ...c, ...f, 0.5],
    _ = st(...h).point,
    p = [...f, ...a, ...u, ...s, 0],
    m = st(...p).point;
  return [_.x, _.y, m.x, m.y, n, r];
}
function Nt(e, t) {
  const [n] = e,
    r = e.slice(1).map(Number),
    [i, o] = r;
  let s;
  const { x1: l, y1: u, x: c, y: a } = t;
  switch (("TQ".includes(n) || ((t.qx = null), (t.qy = null)), n)) {
    case "M":
      return (t.x = i), (t.y = o), e;
    case "A":
      return (s = [l, u, ...r]), ["C", ...Ii(...s)];
    case "Q":
      return (t.qx = i), (t.qy = o), (s = [l, u, ...r]), ["C", ...hs(...s)];
    case "L":
      return ["C", ...wr(l, u, i, o)];
    case "Z":
      return ["C", ...wr(l, u, c, a)];
  }
  return e;
}
function Gt(e) {
  if (ji(e)) return J(e);
  const t = fe(e),
    n = { ...Wt },
    r = [];
  let i = "",
    o = t.length;
  for (let s = 0; s < o; s += 1) {
    ([i] = t[s]), (r[s] = i), (t[s] = Nt(t[s], n)), Pn(t, r, s), (o = t.length);
    const l = t[s],
      u = l.length;
    (n.x1 = +l[u - 2]),
      (n.y1 = +l[u - 1]),
      (n.x2 = +l[u - 4] || n.x1),
      (n.y2 = +l[u - 3] || n.y1);
  }
  return t;
}
function It(e, t) {
  let { round: n } = gt;
  if (t === "off" || n === "off") return J(e);
  n = t >= 0 ? t : n;
  const r = typeof n == "number" && n >= 1 ? 10 ** n : 1;
  return e.map((i) => {
    const o = i
      .slice(1)
      .map(Number)
      .map((s) => (n ? Math.round(s * r) / r : Math.round(s)));
    return [i[0], ...o];
  });
}
function Pe(e, t) {
  return It(e, t)
    .map((n) => n[0] + n.slice(1).join(" "))
    .join("");
}
function Ot(e) {
  const t = ze(e),
    n = t.slice(-1)[0][0] === "Z",
    r = fe(t)
      .map((i, o) => {
        const [s, l] = i.slice(-2).map(Number);
        return { seg: t[o], n: i, c: t[o][0], x: s, y: l };
      })
      .map((i, o, s) => {
        const l = i.seg,
          u = i.n,
          c = o && s[o - 1],
          a = s[o + 1],
          f = i.c,
          h = s.length,
          _ = o ? s[o - 1].x : s[h - 1].x,
          p = o ? s[o - 1].y : s[h - 1].y;
        let m = [];
        switch (f) {
          case "M":
            m = n ? ["Z"] : [f, _, p];
            break;
          case "A":
            m = [f, ...l.slice(1, -3), l[5] === 1 ? 0 : 1, _, p];
            break;
          case "C":
            a && a.c === "S"
              ? (m = ["S", l[1], l[2], _, p])
              : (m = [f, l[3], l[4], l[1], l[2], _, p]);
            break;
          case "S":
            c && "CS".includes(c.c) && (!a || a.c !== "S")
              ? (m = ["C", u[3], u[4], u[1], u[2], _, p])
              : (m = [f, u[1], u[2], _, p]);
            break;
          case "Q":
            a && a.c === "T"
              ? (m = ["T", _, p])
              : (m = [f, ...l.slice(1, -2), _, p]);
            break;
          case "T":
            c && "QT".includes(c.c) && (!a || a.c !== "T")
              ? (m = ["Q", u[1], u[2], _, p])
              : (m = [f, _, p]);
            break;
          case "Z":
            m = ["M", _, p];
            break;
          case "H":
            m = [f, _];
            break;
          case "V":
            m = [f, p];
            break;
          default:
            m = [f, ...l.slice(1, -2), _, p];
        }
        return m;
      });
  return n ? r.reverse() : [r[0], ...r.slice(1).reverse()];
}
function Di(e) {
  const t = [];
  let n,
    r = -1;
  return (
    e.forEach((i) => {
      i[0] === "M" ? ((n = [i]), (r += 1)) : (n = [...n, i]), (t[r] = n);
    }),
    t
  );
}
function ds(e, t, n, r) {
  const [i] = e,
    o = (g) => Math.round(g * 10 ** 4) / 10 ** 4,
    s = e.slice(1).map((g) => +g),
    l = t.slice(1).map((g) => +g),
    { x1: u, y1: c, x2: a, y2: f, x: h, y: _ } = n;
  let p = e;
  const [m, d] = l.slice(-2);
  if (
    ("TQ".includes(i) || ((n.qx = null), (n.qy = null)),
    ["V", "H", "S", "T", "Z"].includes(i))
  )
    p = [i, ...s];
  else if (i === "L")
    o(h) === o(m) ? (p = ["V", d]) : o(_) === o(d) && (p = ["H", m]);
  else if (i === "C") {
    const [g, y] = l;
    "CS".includes(r) &&
      ((o(g) === o(u * 2 - a) && o(y) === o(c * 2 - f)) ||
        (o(u) === o(a * 2 - h) && o(c) === o(f * 2 - _))) &&
      (p = ["S", ...l.slice(-4)]),
      (n.x1 = g),
      (n.y1 = y);
  } else if (i === "Q") {
    const [g, y] = l;
    (n.qx = g),
      (n.qy = y),
      "QT".includes(r) &&
        ((o(g) === o(u * 2 - a) && o(y) === o(c * 2 - f)) ||
          (o(u) === o(a * 2 - h) && o(c) === o(f * 2 - _))) &&
        (p = ["T", ...l.slice(-2)]);
  }
  return p;
}
function Fi(e, t) {
  const n = ze(e),
    r = fe(n),
    i = { ...Wt },
    o = [],
    s = n.length;
  let l = "",
    u = "",
    c = 0,
    a = 0,
    f = 0,
    h = 0;
  for (let m = 0; m < s; m += 1) {
    ([l] = n[m]),
      (o[m] = l),
      m && (u = o[m - 1]),
      (n[m] = ds(n[m], r[m], i, u));
    const d = n[m],
      g = d.length;
    switch (
      ((i.x1 = +d[g - 2]),
      (i.y1 = +d[g - 1]),
      (i.x2 = +d[g - 4] || i.x1),
      (i.y2 = +d[g - 3] || i.y1),
      l)
    ) {
      case "Z":
        (c = f), (a = h);
        break;
      case "H":
        [, c] = d;
        break;
      case "V":
        [, a] = d;
        break;
      default:
        ([c, a] = d.slice(-2).map(Number)), l === "M" && ((f = c), (h = a));
    }
    (i.x = c), (i.y = a);
  }
  const _ = It(n, t),
    p = It(Un(n), t);
  return _.map((m, d) =>
    d ? (m.join("").length < p[d].join("").length ? m : p[d]) : m
  );
}
function yt(e) {
  const t = new R(),
    n = Array.from(e);
  if (!n.every((r) => !Number.isNaN(r)))
    throw TypeError(`CSSMatrix: "${e}" must only have numbers.`);
  if (n.length === 16) {
    const [r, i, o, s, l, u, c, a, f, h, _, p, m, d, g, y] = n;
    (t.m11 = r),
      (t.a = r),
      (t.m21 = l),
      (t.c = l),
      (t.m31 = f),
      (t.m41 = m),
      (t.e = m),
      (t.m12 = i),
      (t.b = i),
      (t.m22 = u),
      (t.d = u),
      (t.m32 = h),
      (t.m42 = d),
      (t.f = d),
      (t.m13 = o),
      (t.m23 = c),
      (t.m33 = _),
      (t.m43 = g),
      (t.m14 = s),
      (t.m24 = a),
      (t.m34 = p),
      (t.m44 = y);
  } else if (n.length === 6) {
    const [r, i, o, s, l, u] = n;
    (t.m11 = r),
      (t.a = r),
      (t.m12 = i),
      (t.b = i),
      (t.m21 = o),
      (t.c = o),
      (t.m22 = s),
      (t.d = s),
      (t.m41 = l),
      (t.e = l),
      (t.m42 = u),
      (t.f = u);
  } else throw new TypeError("CSSMatrix: expecting an Array of 6/16 values.");
  return t;
}
function zi(e) {
  const t = Object.keys(new R());
  if (typeof e == "object" && t.every((n) => n in e))
    return yt([
      e.m11,
      e.m12,
      e.m13,
      e.m14,
      e.m21,
      e.m22,
      e.m23,
      e.m24,
      e.m31,
      e.m32,
      e.m33,
      e.m34,
      e.m41,
      e.m42,
      e.m43,
      e.m44,
    ]);
  throw TypeError(
    `CSSMatrix: "${JSON.stringify(
      e
    )}" is not a DOMMatrix / CSSMatrix / JSON compatible object.`
  );
}
function Ri(e) {
  if (typeof e != "string")
    throw TypeError(`CSSMatrix: "${e}" is not a string.`);
  const t = String(e).replace(/\s/g, "");
  let n = new R();
  const r = `CSSMatrix: invalid transform string "${e}"`;
  return (
    t
      .split(")")
      .filter((i) => i)
      .forEach((i) => {
        const [o, s] = i.split("(");
        if (!s) throw TypeError(r);
        const l = s
            .split(",")
            .map((p) =>
              p.includes("rad")
                ? parseFloat(p) * (180 / Math.PI)
                : parseFloat(p)
            ),
          [u, c, a, f] = l,
          h = [u, c, a],
          _ = [u, c, a, f];
        if (o === "perspective" && u && [c, a].every((p) => p === void 0))
          n.m34 = -1 / u;
        else if (
          o.includes("matrix") &&
          [6, 16].includes(l.length) &&
          l.every((p) => !Number.isNaN(+p))
        ) {
          const p = l.map((m) => (Math.abs(m) < 1e-6 ? 0 : m));
          n = n.multiply(yt(p));
        } else if (o === "translate3d" && h.every((p) => !Number.isNaN(+p)))
          n = n.translate(u, c, a);
        else if (o === "translate" && u && a === void 0)
          n = n.translate(u, c || 0, 0);
        else if (o === "rotate3d" && _.every((p) => !Number.isNaN(+p)) && f)
          n = n.rotateAxisAngle(u, c, a, f);
        else if (o === "rotate" && u && [c, a].every((p) => p === void 0))
          n = n.rotate(0, 0, u);
        else if (
          o === "scale3d" &&
          h.every((p) => !Number.isNaN(+p)) &&
          h.some((p) => p !== 1)
        )
          n = n.scale(u, c, a);
        else if (o === "scale" && !Number.isNaN(u) && u !== 1 && a === void 0) {
          const m = Number.isNaN(+c) ? u : c;
          n = n.scale(u, m, 1);
        } else if (
          o === "skew" &&
          (u || (!Number.isNaN(u) && c)) &&
          a === void 0
        )
          n = n.skew(u, c || 0);
        else if (
          /[XYZ]/.test(o) &&
          u &&
          [c, a].every((p) => p === void 0) &&
          ["translate", "rotate", "scale", "skew"].some((p) => o.includes(p))
        )
          if (["skewX", "skewY"].includes(o)) n = n[o](u);
          else {
            const p = o.replace(/[XYZ]/, ""),
              m = o.replace(p, ""),
              d = ["X", "Y", "Z"].indexOf(m),
              g = p === "scale" ? 1 : 0,
              y = [d === 0 ? u : g, d === 1 ? u : g, d === 2 ? u : g];
            n = n[p](...y);
          }
        else throw TypeError(r);
      }),
    n
  );
}
function kn(e, t) {
  return t
    ? [e.a, e.b, e.c, e.d, e.e, e.f]
    : [
        e.m11,
        e.m12,
        e.m13,
        e.m14,
        e.m21,
        e.m22,
        e.m23,
        e.m24,
        e.m31,
        e.m32,
        e.m33,
        e.m34,
        e.m41,
        e.m42,
        e.m43,
        e.m44,
      ];
}
function Hn(e, t, n) {
  const r = new R();
  return (r.m41 = e), (r.e = e), (r.m42 = t), (r.f = t), (r.m43 = n), r;
}
function Ui(e, t, n) {
  const r = new R(),
    i = Math.PI / 180,
    o = e * i,
    s = t * i,
    l = n * i,
    u = Math.cos(o),
    c = -Math.sin(o),
    a = Math.cos(s),
    f = -Math.sin(s),
    h = Math.cos(l),
    _ = -Math.sin(l),
    p = a * h,
    m = -a * _;
  (r.m11 = p), (r.a = p), (r.m12 = m), (r.b = m), (r.m13 = f);
  const d = c * f * h + u * _;
  (r.m21 = d), (r.c = d);
  const g = u * h - c * f * _;
  return (
    (r.m22 = g),
    (r.d = g),
    (r.m23 = -c * a),
    (r.m31 = c * _ - u * f * h),
    (r.m32 = c * h + u * f * _),
    (r.m33 = u * a),
    r
  );
}
function Bi(e, t, n, r) {
  const i = new R(),
    o = Math.sqrt(e * e + t * t + n * n);
  if (o === 0) return i;
  const s = e / o,
    l = t / o,
    u = n / o,
    c = r * (Math.PI / 360),
    a = Math.sin(c),
    f = Math.cos(c),
    h = a * a,
    _ = s * s,
    p = l * l,
    m = u * u,
    d = 1 - 2 * (p + m) * h;
  (i.m11 = d), (i.a = d);
  const g = 2 * (s * l * h + u * a * f);
  (i.m12 = g), (i.b = g), (i.m13 = 2 * (s * u * h - l * a * f));
  const y = 2 * (l * s * h - u * a * f);
  (i.m21 = y), (i.c = y);
  const b = 1 - 2 * (m + _) * h;
  return (
    (i.m22 = b),
    (i.d = b),
    (i.m23 = 2 * (l * u * h + s * a * f)),
    (i.m31 = 2 * (u * s * h + l * a * f)),
    (i.m32 = 2 * (u * l * h - s * a * f)),
    (i.m33 = 1 - 2 * (_ + p) * h),
    i
  );
}
function Hi(e, t, n) {
  const r = new R();
  return (r.m11 = e), (r.a = e), (r.m22 = t), (r.d = t), (r.m33 = n), r;
}
function Jt(e, t) {
  const n = new R();
  if (e) {
    const r = (e * Math.PI) / 180,
      i = Math.tan(r);
    (n.m21 = i), (n.c = i);
  }
  if (t) {
    const r = (t * Math.PI) / 180,
      i = Math.tan(r);
    (n.m12 = i), (n.b = i);
  }
  return n;
}
function Qi(e) {
  return Jt(e, 0);
}
function Zi(e) {
  return Jt(0, e);
}
function ie(e, t) {
  const n = t.m11 * e.m11 + t.m12 * e.m21 + t.m13 * e.m31 + t.m14 * e.m41,
    r = t.m11 * e.m12 + t.m12 * e.m22 + t.m13 * e.m32 + t.m14 * e.m42,
    i = t.m11 * e.m13 + t.m12 * e.m23 + t.m13 * e.m33 + t.m14 * e.m43,
    o = t.m11 * e.m14 + t.m12 * e.m24 + t.m13 * e.m34 + t.m14 * e.m44,
    s = t.m21 * e.m11 + t.m22 * e.m21 + t.m23 * e.m31 + t.m24 * e.m41,
    l = t.m21 * e.m12 + t.m22 * e.m22 + t.m23 * e.m32 + t.m24 * e.m42,
    u = t.m21 * e.m13 + t.m22 * e.m23 + t.m23 * e.m33 + t.m24 * e.m43,
    c = t.m21 * e.m14 + t.m22 * e.m24 + t.m23 * e.m34 + t.m24 * e.m44,
    a = t.m31 * e.m11 + t.m32 * e.m21 + t.m33 * e.m31 + t.m34 * e.m41,
    f = t.m31 * e.m12 + t.m32 * e.m22 + t.m33 * e.m32 + t.m34 * e.m42,
    h = t.m31 * e.m13 + t.m32 * e.m23 + t.m33 * e.m33 + t.m34 * e.m43,
    _ = t.m31 * e.m14 + t.m32 * e.m24 + t.m33 * e.m34 + t.m34 * e.m44,
    p = t.m41 * e.m11 + t.m42 * e.m21 + t.m43 * e.m31 + t.m44 * e.m41,
    m = t.m41 * e.m12 + t.m42 * e.m22 + t.m43 * e.m32 + t.m44 * e.m42,
    d = t.m41 * e.m13 + t.m42 * e.m23 + t.m43 * e.m33 + t.m44 * e.m43,
    g = t.m41 * e.m14 + t.m42 * e.m24 + t.m43 * e.m34 + t.m44 * e.m44;
  return yt([n, r, i, o, s, l, u, c, a, f, h, _, p, m, d, g]);
}
class R {
  constructor(...t) {
    const n = this;
    if (
      ((n.a = 1),
      (n.b = 0),
      (n.c = 0),
      (n.d = 1),
      (n.e = 0),
      (n.f = 0),
      (n.m11 = 1),
      (n.m12 = 0),
      (n.m13 = 0),
      (n.m14 = 0),
      (n.m21 = 0),
      (n.m22 = 1),
      (n.m23 = 0),
      (n.m24 = 0),
      (n.m31 = 0),
      (n.m32 = 0),
      (n.m33 = 1),
      (n.m34 = 0),
      (n.m41 = 0),
      (n.m42 = 0),
      (n.m43 = 0),
      (n.m44 = 1),
      t.length)
    ) {
      const r = [16, 6].some((i) => i === t.length) ? t : t[0];
      return n.setMatrixValue(r);
    }
    return n;
  }
  get isIdentity() {
    const t = this;
    return (
      t.m11 === 1 &&
      t.m12 === 0 &&
      t.m13 === 0 &&
      t.m14 === 0 &&
      t.m21 === 0 &&
      t.m22 === 1 &&
      t.m23 === 0 &&
      t.m24 === 0 &&
      t.m31 === 0 &&
      t.m32 === 0 &&
      t.m33 === 1 &&
      t.m34 === 0 &&
      t.m41 === 0 &&
      t.m42 === 0 &&
      t.m43 === 0 &&
      t.m44 === 1
    );
  }
  get is2D() {
    const t = this;
    return (
      t.m31 === 0 &&
      t.m32 === 0 &&
      t.m33 === 1 &&
      t.m34 === 0 &&
      t.m43 === 0 &&
      t.m44 === 1
    );
  }
  setMatrixValue(t) {
    const n = this;
    return typeof t == "string" && t.length && t !== "none"
      ? Ri(t)
      : [Array, Float64Array, Float32Array].some((r) => t instanceof r)
      ? yt(t)
      : [R, DOMMatrix, Object].some((r) => t instanceof r)
      ? zi(t)
      : n;
  }
  toFloat32Array(t) {
    return Float32Array.from(kn(this, t));
  }
  toFloat64Array(t) {
    return Float64Array.from(kn(this, t));
  }
  toString() {
    const t = this,
      { is2D: n } = t,
      r = t.toFloat64Array(n).join(", ");
    return `${n ? "matrix" : "matrix3d"}(${r})`;
  }
  toJSON() {
    const t = this,
      { is2D: n, isIdentity: r } = t;
    return { ...t, is2D: n, isIdentity: r };
  }
  multiply(t) {
    return ie(this, t);
  }
  translate(t, n, r) {
    const i = t;
    let o = n,
      s = r;
    return (
      o === void 0 && (o = 0), s === void 0 && (s = 0), ie(this, Hn(i, o, s))
    );
  }
  scale(t, n, r) {
    const i = t;
    let o = n,
      s = r;
    return (
      o === void 0 && (o = t), s === void 0 && (s = 1), ie(this, Hi(i, o, s))
    );
  }
  rotate(t, n, r) {
    let i = t,
      o = n || 0,
      s = r || 0;
    return (
      typeof t == "number" &&
        n === void 0 &&
        r === void 0 &&
        ((s = i), (i = 0), (o = 0)),
      ie(this, Ui(i, o, s))
    );
  }
  rotateAxisAngle(t, n, r, i) {
    if ([t, n, r, i].some((o) => Number.isNaN(+o)))
      throw new TypeError("CSSMatrix: expecting 4 values");
    return ie(this, Bi(t, n, r, i));
  }
  skewX(t) {
    return ie(this, Qi(t));
  }
  skewY(t) {
    return ie(this, Zi(t));
  }
  skew(t, n) {
    return ie(this, Jt(t, n));
  }
  transformPoint(t) {
    const n = this,
      r = n.m11 * t.x + n.m21 * t.y + n.m31 * t.z + n.m41 * t.w,
      i = n.m12 * t.x + n.m22 * t.y + n.m32 * t.z + n.m42 * t.w,
      o = n.m13 * t.x + n.m23 * t.y + n.m33 * t.z + n.m43 * t.w,
      s = n.m14 * t.x + n.m24 * t.y + n.m34 * t.z + n.m44 * t.w;
    return t instanceof DOMPoint
      ? new DOMPoint(r, i, o, s)
      : { x: r, y: i, z: o, w: s };
  }
}
Object.assign(R, {
  Translate: Hn,
  Rotate: Ui,
  RotateAxisAngle: Bi,
  Scale: Hi,
  SkewX: Qi,
  SkewY: Zi,
  Skew: Jt,
  Multiply: ie,
  fromArray: yt,
  fromMatrix: zi,
  fromString: Ri,
  toArray: kn,
});
var ps = "1.0.3";
const ms = ps;
Object.assign(R, { Version: ms });
function _s(e) {
  let t = new R();
  const { origin: n } = e,
    [r, i] = n,
    { translate: o } = e,
    { rotate: s } = e,
    { skew: l } = e,
    { scale: u } = e;
  return (
    Array.isArray(o) &&
    o.every((c) => !Number.isNaN(+c)) &&
    o.some((c) => c !== 0)
      ? (t = t.translate(...o))
      : typeof o == "number" && !Number.isNaN(o) && (t = t.translate(o)),
    (s || l || u) &&
      ((t = t.translate(r, i)),
      Array.isArray(s) &&
      s.every((c) => !Number.isNaN(+c)) &&
      s.some((c) => c !== 0)
        ? (t = t.rotate(...s))
        : typeof s == "number" && !Number.isNaN(s) && (t = t.rotate(s)),
      Array.isArray(l) &&
      l.every((c) => !Number.isNaN(+c)) &&
      l.some((c) => c !== 0)
        ? ((t = l[0] ? t.skewX(l[0]) : t), (t = l[1] ? t.skewY(l[1]) : t))
        : typeof l == "number" && !Number.isNaN(l) && (t = t.skewX(l)),
      Array.isArray(u) &&
      u.every((c) => !Number.isNaN(+c)) &&
      u.some((c) => c !== 1)
        ? (t = t.scale(...u))
        : typeof u == "number" && !Number.isNaN(u) && (t = t.scale(u)),
      (t = t.translate(-r, -i))),
    t
  );
}
function gs(e, t) {
  let n = Hn(...t);
  return ([, , , n.m44] = t), (n = e.multiply(n)), [n.m41, n.m42, n.m43, n.m44];
}
function $r(e, t, n) {
  const [r, i, o] = n,
    [s, l, u] = gs(e, [...t, 0, 1]),
    c = s - r,
    a = l - i,
    f = u - o;
  return [
    c * (Math.abs(o) / Math.abs(f) || 1) + r,
    a * (Math.abs(o) / Math.abs(f) || 1) + i,
  ];
}
function Xi(e, t) {
  let n = 0,
    r = 0,
    i,
    o,
    s,
    l,
    u,
    c;
  const a = ze(e),
    f = t && Object.keys(t);
  if (!t || !f.length) return J(a);
  const h = fe(a);
  if (!t.origin) {
    const { origin: w } = gt;
    Object.assign(t, { origin: w });
  }
  const _ = _s(t),
    { origin: p } = t,
    m = { ...Wt };
  let d = [],
    g = 0,
    y = "",
    b = [];
  const v = [];
  if (!_.isIdentity) {
    for (i = 0, s = a.length; i < s; i += 1) {
      (d = a[i]),
        a[i] && ([y] = d),
        (v[i] = y),
        y === "A" &&
          ((d = Nt(h[i], m)),
          (a[i] = Nt(h[i], m)),
          Pn(a, v, i),
          (h[i] = Nt(h[i], m)),
          Pn(h, v, i),
          (s = Math.max(a.length, h.length))),
        (d = h[i]),
        (g = d.length),
        (m.x1 = +d[g - 2]),
        (m.y1 = +d[g - 1]),
        (m.x2 = +d[g - 4] || m.x1),
        (m.y2 = +d[g - 3] || m.y1);
      const w = { s: a[i], c: a[i][0], x: m.x1, y: m.y1 };
      b = [...b, w];
    }
    return b.map((w) => {
      switch (((y = w.c), (d = w.s), y)) {
        case "L":
        case "H":
        case "V":
          return (
            ([u, c] = $r(_, [w.x, w.y], p)),
            n !== u && r !== c
              ? (d = ["L", u, c])
              : r === c
              ? (d = ["H", u])
              : n === u && (d = ["V", c]),
            (n = u),
            (r = c),
            d
          );
        default:
          for (o = 1, l = d.length; o < l; o += 2)
            ([n, r] = $r(_, [+d[o], +d[o + 1]], p)), (d[o] = n), (d[o + 1] = r);
          return d;
      }
    });
  }
  return J(a);
}
function Mr(e, t) {
  const { x: n, y: r } = e,
    { x: i, y: o } = t,
    s = n * i + r * o,
    l = Math.sqrt((n ** 2 + r ** 2) * (i ** 2 + o ** 2));
  return (n * o - r * i < 0 ? -1 : 1) * Math.acos(s / l);
}
function ys(e, t, n, r, i, o, s, l, u, c) {
  const { abs: a, sin: f, cos: h, sqrt: _, PI: p } = Math;
  let m = a(n),
    d = a(r);
  const y = (((i % 360) + 360) % 360) * (p / 180);
  if (e === l && t === u) return { x: e, y: t };
  if (m === 0 || d === 0) return st(e, t, l, u, c).point;
  const b = (e - l) / 2,
    v = (t - u) / 2,
    w = { x: h(y) * b + f(y) * v, y: -f(y) * b + h(y) * v },
    N = w.x ** 2 / m ** 2 + w.y ** 2 / d ** 2;
  N > 1 && ((m *= _(N)), (d *= _(N)));
  const k = m ** 2 * d ** 2 - m ** 2 * w.y ** 2 - d ** 2 * w.x ** 2,
    S = m ** 2 * w.y ** 2 + d ** 2 * w.x ** 2;
  let V = k / S;
  V = V < 0 ? 0 : V;
  const P = (o !== s ? 1 : -1) * _(V),
    A = { x: P * ((m * w.y) / d), y: P * (-(d * w.x) / m) },
    C = {
      x: h(y) * A.x - f(y) * A.y + (e + l) / 2,
      y: f(y) * A.x + h(y) * A.y + (t + u) / 2,
    },
    q = { x: (w.x - A.x) / m, y: (w.y - A.y) / d },
    D = Mr({ x: 1, y: 0 }, q),
    he = { x: (-w.x - A.x) / m, y: (-w.y - A.y) / d };
  let I = Mr(q, he);
  !s && I > 0 ? (I -= 2 * p) : s && I < 0 && (I += 2 * p), (I %= 2 * p);
  const U = D + I * c,
    de = m * h(U),
    re = d * f(U);
  return { x: h(y) * de - f(y) * re + C.x, y: f(y) * de + h(y) * re + C.y };
}
function vs(e, t, n, r, i, o, s, l, u, c) {
  const a = typeof c == "number";
  let f = e,
    h = t,
    _ = 0,
    p = [f, h, _],
    m = [f, h],
    d = 0,
    g = { x: 0, y: 0 },
    y = [{ x: f, y: h }];
  a && c <= 0 && (g = { x: f, y: h });
  const b = 300;
  for (let v = 0; v <= b; v += 1) {
    if (
      ((d = v / b),
      ({ x: f, y: h } = ys(e, t, n, r, i, o, s, l, u, d)),
      (y = [...y, { x: f, y: h }]),
      (_ += Yt(m, [f, h])),
      (m = [f, h]),
      a && _ > c && c > p[2])
    ) {
      const w = (_ - c) / (_ - p[2]);
      g = { x: m[0] * (1 - w) + p[0] * w, y: m[1] * (1 - w) + p[1] * w };
    }
    p = [f, h, _];
  }
  return (
    a && c >= _ && (g = { x: l, y: u }),
    {
      length: _,
      point: g,
      min: {
        x: Math.min(...y.map((v) => v.x)),
        y: Math.min(...y.map((v) => v.y)),
      },
      max: {
        x: Math.max(...y.map((v) => v.x)),
        y: Math.max(...y.map((v) => v.y)),
      },
    }
  );
}
function bs(e, t, n, r, i, o, s, l, u) {
  const c = 1 - u;
  return {
    x: c ** 3 * e + 3 * c ** 2 * u * n + 3 * c * u ** 2 * i + u ** 3 * s,
    y: c ** 3 * t + 3 * c ** 2 * u * r + 3 * c * u ** 2 * o + u ** 3 * l,
  };
}
function xs(e, t, n, r, i, o, s, l, u) {
  const c = typeof u == "number";
  let a = e,
    f = t,
    h = 0,
    _ = [a, f, h],
    p = [a, f],
    m = 0,
    d = { x: 0, y: 0 },
    g = [{ x: a, y: f }];
  c && u <= 0 && (d = { x: a, y: f });
  const y = 300;
  for (let b = 0; b <= y; b += 1) {
    if (
      ((m = b / y),
      ({ x: a, y: f } = bs(e, t, n, r, i, o, s, l, m)),
      (g = [...g, { x: a, y: f }]),
      (h += Yt(p, [a, f])),
      (p = [a, f]),
      c && h > u && u > _[2])
    ) {
      const v = (h - u) / (h - _[2]);
      d = { x: p[0] * (1 - v) + _[0] * v, y: p[1] * (1 - v) + _[1] * v };
    }
    _ = [a, f, h];
  }
  return (
    c && u >= h && (d = { x: s, y: l }),
    {
      length: h,
      point: d,
      min: {
        x: Math.min(...g.map((b) => b.x)),
        y: Math.min(...g.map((b) => b.y)),
      },
      max: {
        x: Math.max(...g.map((b) => b.x)),
        y: Math.max(...g.map((b) => b.y)),
      },
    }
  );
}
function ws(e, t, n, r, i, o, s) {
  const l = 1 - s;
  return {
    x: l ** 2 * e + 2 * l * s * n + s ** 2 * i,
    y: l ** 2 * t + 2 * l * s * r + s ** 2 * o,
  };
}
function $s(e, t, n, r, i, o, s) {
  const l = typeof s == "number";
  let u = e,
    c = t,
    a = 0,
    f = [u, c, a],
    h = [u, c],
    _ = 0,
    p = { x: 0, y: 0 },
    m = [{ x: u, y: c }];
  l && s <= 0 && (p = { x: u, y: c });
  const d = 300;
  for (let g = 0; g <= d; g += 1) {
    if (
      ((_ = g / d),
      ({ x: u, y: c } = ws(e, t, n, r, i, o, _)),
      (m = [...m, { x: u, y: c }]),
      (a += Yt(h, [u, c])),
      (h = [u, c]),
      l && a > s && s > f[2])
    ) {
      const y = (a - s) / (a - f[2]);
      p = { x: h[0] * (1 - y) + f[0] * y, y: h[1] * (1 - y) + f[1] * y };
    }
    f = [u, c, a];
  }
  return (
    l && s >= a && (p = { x: i, y: o }),
    {
      length: a,
      point: p,
      min: {
        x: Math.min(...m.map((g) => g.x)),
        y: Math.min(...m.map((g) => g.y)),
      },
      max: {
        x: Math.max(...m.map((g) => g.x)),
        y: Math.max(...m.map((g) => g.y)),
      },
    }
  );
}
function Kt(e, t) {
  const n = fe(e),
    r = typeof t == "number";
  let i,
    o = [],
    s,
    l = 0,
    u = 0,
    c = 0,
    a = 0,
    f,
    h = [],
    _ = [],
    p = 0,
    m = { x: 0, y: 0 },
    d = m,
    g = m,
    y = m,
    b = 0;
  for (let v = 0, w = n.length; v < w; v += 1)
    (f = n[v]),
      ([s] = f),
      (i = s === "M"),
      (o = i ? o : [l, u, ...f.slice(1)]),
      i
        ? (([, c, a] = f),
          (m = { x: c, y: a }),
          (d = m),
          (p = 0),
          r && t < 0.001 && (y = m))
        : s === "L"
        ? ({ length: p, min: m, max: d, point: g } = st(...o, (t || 0) - b))
        : s === "A"
        ? ({ length: p, min: m, max: d, point: g } = vs(...o, (t || 0) - b))
        : s === "C"
        ? ({ length: p, min: m, max: d, point: g } = xs(...o, (t || 0) - b))
        : s === "Q"
        ? ({ length: p, min: m, max: d, point: g } = $s(...o, (t || 0) - b))
        : s === "Z" &&
          ((o = [l, u, c, a]),
          ({ length: p, min: m, max: d, point: g } = st(...o, (t || 0) - b))),
      r && b < t && b + p >= t && (y = g),
      (_ = [..._, d]),
      (h = [...h, m]),
      (b += p),
      ([l, u] = s !== "Z" ? f.slice(-2) : [c, a]);
  return (
    r && t >= b && (y = { x: l, y: u }),
    {
      length: b,
      point: y,
      min: {
        x: Math.min(...h.map((v) => v.x)),
        y: Math.min(...h.map((v) => v.y)),
      },
      max: {
        x: Math.max(..._.map((v) => v.x)),
        y: Math.max(..._.map((v) => v.y)),
      },
    }
  );
}
function Wi(e) {
  if (!e)
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      x2: 0,
      y2: 0,
      cx: 0,
      cy: 0,
      cz: 0,
    };
  const {
      min: { x: t, y: n },
      max: { x: r, y: i },
    } = Kt(e),
    o = r - t,
    s = i - n;
  return {
    width: o,
    height: s,
    x: t,
    y: n,
    x2: r,
    y2: i,
    cx: t + o / 2,
    cy: n + s / 2,
    cz: Math.max(o, s) + Math.min(o, s) / 2,
  };
}
function qe(e) {
  return Kt(e).length;
}
function Ge(e, t) {
  return Kt(e, t).point;
}
class le {
  constructor(t, n) {
    const r = n || {},
      i = typeof t == "undefined";
    if (i || !t.length)
      throw TypeError(`${se}: "pathValue" is ${i ? "undefined" : "empty"}`);
    const o = ve(t);
    if (typeof o == "string") throw TypeError(o);
    this.segments = o;
    const { width: s, height: l, cx: u, cy: c, cz: a } = this.getBBox(),
      { round: f, origin: h } = r;
    let _;
    if (f === "auto") {
      const m = `${Math.floor(Math.max(s, l))}`.length;
      _ = m >= 4 ? 0 : 4 - m;
    } else Number.isInteger(f) || f === "off" ? (_ = f) : ({ round: _ } = gt);
    let p;
    if (Array.isArray(h) && h.length >= 2) {
      const [m, d, g] = h.map(Number);
      p = [
        Number.isNaN(m) ? u : m,
        Number.isNaN(d) ? c : d,
        Number.isNaN(g) ? a : g,
      ];
    } else p = [u, c, a];
    return (this.round = _), (this.origin = p), this;
  }
  getBBox() {
    return Wi(this.segments);
  }
  getTotalLength() {
    return qe(this.segments);
  }
  getPointAtLength(t) {
    return Ge(this.segments, t);
  }
  toAbsolute() {
    const { segments: t } = this;
    return (this.segments = ze(t)), this;
  }
  toRelative() {
    const { segments: t } = this;
    return (this.segments = Un(t)), this;
  }
  toCurve() {
    const { segments: t } = this;
    return (this.segments = Gt(t)), this;
  }
  reverse(t) {
    this.toAbsolute();
    const { segments: n } = this,
      r = Di(n),
      i = r.length > 1 ? r : 0,
      o = i && J(i).map((l, u) => (t ? (u ? Ot(l) : ve(l)) : Ot(l)));
    let s = [];
    return (
      i ? (s = o.flat(1)) : (s = t ? n : Ot(n)), (this.segments = J(s)), this
    );
  }
  normalize() {
    const { segments: t } = this;
    return (this.segments = fe(t)), this;
  }
  optimize() {
    const { segments: t } = this;
    return (this.segments = Fi(t, this.round)), this;
  }
  transform(t) {
    if (
      !t ||
      typeof t != "object" ||
      (typeof t == "object" &&
        !["translate", "rotate", "skew", "scale"].some((u) => u in t))
    )
      return this;
    const n = {};
    Object.keys(t).forEach((u) => {
      n[u] = Array.isArray(t[u]) ? [...t[u]] : Number(t[u]);
    });
    const { segments: r } = this,
      [i, o, s] = this.origin,
      { origin: l } = n;
    if (Array.isArray(l) && l.length >= 2) {
      const [u, c, a] = l.map(Number);
      n.origin = [Number.isNaN(u) ? i : u, Number.isNaN(c) ? o : c, a || s];
    } else n.origin = [i, o, s];
    return (this.segments = Xi(r, n)), this;
  }
  flipX() {
    return this.transform({ rotate: [0, 180, 0] }), this;
  }
  flipY() {
    return this.transform({ rotate: [180, 0, 0] }), this;
  }
  toString() {
    return Pe(this.segments, this.round);
  }
}
function Ms(e, t, n, r, i, o, s, l) {
  return (
    (3 *
      ((l - t) * (n + i) -
        (s - e) * (r + o) +
        r * (e - i) -
        n * (t - o) +
        l * (i + e / 3) -
        s * (o + t / 3))) /
    20
  );
}
function Yi(e) {
  let t = 0,
    n = 0,
    r = 0;
  return Gt(e)
    .map((i) => {
      switch (i[0]) {
        case "M":
          return ([, t, n] = i), 0;
        default:
          return (r = Ms(t, n, ...i.slice(1))), ([t, n] = i.slice(-2)), r;
      }
    })
    .reduce((i, o) => i + o, 0);
}
function Ps(e) {
  return Yi(Gt(e)) >= 0;
}
function Qn(e, t) {
  const n = ve(e);
  if (typeof n == "string") throw TypeError(n);
  let r = [...n],
    i = qe(r),
    o = r.length - 1,
    s = 0,
    l = 0,
    u = n[0];
  const [c, a] = u.slice(-2),
    f = { x: c, y: a };
  if (o <= 0 || !t || !Number.isFinite(t))
    return { segment: u, index: 0, length: l, point: f, lengthAtSegment: s };
  if (t >= i)
    return (
      (r = n.slice(0, -1)),
      (s = qe(r)),
      (l = i - s),
      { segment: n[o], index: o, length: l, lengthAtSegment: s }
    );
  const h = [];
  for (; o > 0; )
    (u = r[o]),
      (r = r.slice(0, -1)),
      (s = qe(r)),
      (l = i - s),
      (i = s),
      h.push({ segment: u, index: o, length: l, lengthAtSegment: s }),
      (o -= 1);
  return h.find(({ lengthAtSegment: _ }) => _ <= t);
}
function en(e, t) {
  const n = ve(e),
    r = fe(n),
    i = qe(n),
    o = (v) => {
      const w = v.x - t.x,
        N = v.y - t.y;
      return w * w + N * N;
    };
  let s = 8,
    l,
    u = 0,
    c,
    a = 0,
    f = 1 / 0;
  for (let v = 0; v <= i; v += s)
    (l = Ge(r, v)), (u = o(l)), u < f && ((c = l), (a = v), (f = u));
  s /= 2;
  let h,
    _,
    p = 0,
    m = 0,
    d = 0,
    g = 0;
  for (; s > 0.5; )
    (p = a - s),
      (h = Ge(r, p)),
      (d = o(h)),
      (m = a + s),
      (_ = Ge(r, m)),
      (g = o(_)),
      p >= 0 && d < f
        ? ((c = h), (a = p), (f = d))
        : m <= i && g < f
        ? ((c = _), (a = m), (f = g))
        : (s /= 2);
  const y = Qn(n, a),
    b = Math.sqrt(f);
  return { closest: c, distance: b, segment: y };
}
function ks(e, t) {
  return en(e, t).closest;
}
function Cs(e, t) {
  return en(e, t).segment;
}
function As(e, t) {
  return Qn(e, t).segment;
}
function Ss(e, t) {
  const { distance: n } = en(e, t);
  return Math.abs(n) < 0.001;
}
function Gi(e) {
  if (typeof e != "string") return !1;
  const t = new Vi(e);
  for (Ye(t); t.index < t.max && !t.err.length; ) Ti(t);
  return !t.err.length && "mM".includes(t.segments[0][0]);
}
const Pr = {
  line: ["x1", "y1", "x2", "y2"],
  circle: ["cx", "cy", "r"],
  ellipse: ["cx", "cy", "rx", "ry"],
  rect: ["width", "height", "x", "y", "rx", "ry"],
  polygon: ["points"],
  polyline: ["points"],
  glyph: ["d"],
};
function Ns(e) {
  const { x1: t, y1: n, x2: r, y2: i } = e;
  return [
    ["M", t, n],
    ["L", r, i],
  ];
}
function Os(e) {
  const t = [],
    n = (e.points || "")
      .trim()
      .split(/[\s|,]/)
      .map(Number);
  let r = 0;
  for (; r < n.length; ) t.push([r ? "L" : "M", n[r], n[r + 1]]), (r += 2);
  return e.type === "polygon" ? [...t, ["z"]] : t;
}
function Ls(e) {
  const { cx: t, cy: n, r } = e;
  return [
    ["M", t - r, n],
    ["a", r, r, 0, 1, 0, 2 * r, 0],
    ["a", r, r, 0, 1, 0, -2 * r, 0],
  ];
}
function Es(e) {
  const { cx: t, cy: n, rx: r, ry: i } = e;
  return [
    ["M", t - r, n],
    ["a", r, i, 0, 1, 0, 2 * r, 0],
    ["a", r, i, 0, 1, 0, -2 * r, 0],
  ];
}
function Ts(e) {
  const t = +e.x || 0,
    n = +e.y || 0,
    r = +e.width,
    i = +e.height;
  let o = +e.rx,
    s = +e.ry;
  return o || s
    ? ((o = o || s),
      (s = s || o),
      o * 2 > r && (o -= (o * 2 - r) / 2),
      s * 2 > i && (s -= (s * 2 - i) / 2),
      [
        ["M", t + o, n],
        ["h", r - o * 2],
        ["s", o, 0, o, s],
        ["v", i - s * 2],
        ["s", 0, s, -o, s],
        ["h", -r + o * 2],
        ["s", -o, 0, -o, -s],
        ["v", -i + s * 2],
        ["s", 0, -s, o, -s],
      ])
    : [["M", t, n], ["h", r], ["v", i], ["H", t], ["Z"]];
}
function Vs(e, t) {
  const n = Object.keys(Pr),
    { tagName: r } = e;
  if (r && !n.some((a) => r === a))
    throw TypeError(`${se}: "${r}" is not SVGElement`);
  const i = document.createElementNS("http://www.w3.org/2000/svg", "path"),
    o = r || e.type,
    s = {};
  s.type = o;
  const l = Pr[o];
  r
    ? (l.forEach((a) => {
        s[a] = e.getAttribute(a);
      }),
      Object.values(e.attributes).forEach(({ name: a, value: f }) => {
        l.includes(a) || i.setAttribute(a, f);
      }))
    : (Object.assign(s, e),
      Object.keys(s).forEach((a) => {
        !l.includes(a) &&
          a !== "type" &&
          i.setAttribute(
            a.replace(/[A-Z]/g, (f) => `-${f.toLowerCase()}`),
            s[a]
          );
      }));
  let u;
  const { round: c } = gt;
  return (
    o === "circle"
      ? (u = Pe(Ls(s), c))
      : o === "ellipse"
      ? (u = Pe(Es(s), c))
      : ["polyline", "polygon"].includes(o)
      ? (u = Pe(Os(s), c))
      : o === "rect"
      ? (u = Pe(Ts(s), c))
      : o === "line"
      ? (u = Pe(Ns(s), c))
      : o === "glyph" && (u = r ? e.getAttribute("d") : e.d),
    Gi(u)
      ? (i.setAttribute("d", u), t && r && (e.before(i, e), e.remove()), i)
      : !1
  );
}
function qs(e) {
  const t = e
    .slice(1)
    .map((n, r, i) =>
      r
        ? [...i[r - 1].slice(-2), ...n.slice(1)]
        : [...e[0].slice(1), ...n.slice(1)]
    )
    .map((n) => n.map((r, i) => n[n.length - i - 2 * (1 - (i % 2))]))
    .reverse();
  return [["M", ...t[0].slice(0, 2)], ...t.map((n) => ["C", ...n.slice(2)])];
}
function js(e) {
  const t = ve(e),
    n = fe(t),
    { length: r } = t,
    i = n.slice(-1)[0][0] === "Z",
    o = i ? r - 2 : r - 1,
    [s, l] = n[0].slice(1),
    [u, c] = n[o].slice(-2);
  return i && s === u && l === c ? t.slice(0, -1) : t;
}
const Is = {
  CSSMatrix: R,
  parsePathString: ve,
  isPathArray: Xt,
  isCurveArray: ji,
  isAbsoluteArray: Rn,
  isRelativeArray: qi,
  isNormalizedArray: Bn,
  isValidPath: Gi,
  pathToAbsolute: ze,
  pathToRelative: Un,
  pathToCurve: Gt,
  pathToString: Pe,
  getDrawDirection: Ps,
  getPathArea: Yi,
  getPathBBox: Wi,
  pathLengthFactory: Kt,
  getTotalLength: qe,
  getPointAtLength: Ge,
  getClosestPoint: ks,
  getSegmentOfPoint: Cs,
  getPropertiesAtPoint: en,
  getPropertiesAtLength: Qn,
  getSegmentAtLength: As,
  isPointInStroke: Ss,
  clonePath: J,
  splitPath: Di,
  fixPath: js,
  roundPath: It,
  optimizePath: Fi,
  reverseCurve: qs,
  reversePath: Ot,
  normalizePath: fe,
  transformPath: Xi,
  shapeToPath: Vs,
  options: gt,
};
var Ds = "1.0.5";
const Fs = Ds;
Object.assign(le, Is, { Version: Fs });
function tn(e) {
  return Y(
    () =>
      le.getPathBBox(e.map((t) => t.props.originalD || t.props.d).join(" ")),
    [e]
  );
}
var zs = {
    aqua: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
    azure: /#f0ffff(ff)?(?!\w)/gi,
    beige: /#f5f5dc(ff)?(?!\w)/gi,
    bisque: /#ffe4c4(ff)?(?!\w)/gi,
    black: /#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,
    blue: /#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,
    brown: /#a52a2a(ff)?(?!\w)/gi,
    coral: /#ff7f50(ff)?(?!\w)/gi,
    cornsilk: /#fff8dc(ff)?(?!\w)/gi,
    crimson: /#dc143c(ff)?(?!\w)/gi,
    cyan: /#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,
    darkblue: /#00008b(ff)?(?!\w)/gi,
    darkcyan: /#008b8b(ff)?(?!\w)/gi,
    darkgrey: /#a9a9a9(ff)?(?!\w)/gi,
    darkred: /#8b0000(ff)?(?!\w)/gi,
    deeppink: /#ff1493(ff)?(?!\w)/gi,
    dimgrey: /#696969(ff)?(?!\w)/gi,
    gold: /#ffd700(ff)?(?!\w)/gi,
    green: /#008000(ff)?(?!\w)/gi,
    grey: /#808080(ff)?(?!\w)/gi,
    honeydew: /#f0fff0(ff)?(?!\w)/gi,
    hotpink: /#ff69b4(ff)?(?!\w)/gi,
    indigo: /#4b0082(ff)?(?!\w)/gi,
    ivory: /#fffff0(ff)?(?!\w)/gi,
    khaki: /#f0e68c(ff)?(?!\w)/gi,
    lavender: /#e6e6fa(ff)?(?!\w)/gi,
    lime: /#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,
    linen: /#faf0e6(ff)?(?!\w)/gi,
    maroon: /#800000(ff)?(?!\w)/gi,
    moccasin: /#ffe4b5(ff)?(?!\w)/gi,
    navy: /#000080(ff)?(?!\w)/gi,
    oldlace: /#fdf5e6(ff)?(?!\w)/gi,
    olive: /#808000(ff)?(?!\w)/gi,
    orange: /#ffa500(ff)?(?!\w)/gi,
    orchid: /#da70d6(ff)?(?!\w)/gi,
    peru: /#cd853f(ff)?(?!\w)/gi,
    pink: /#ffc0cb(ff)?(?!\w)/gi,
    plum: /#dda0dd(ff)?(?!\w)/gi,
    purple: /#800080(ff)?(?!\w)/gi,
    red: /#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,
    salmon: /#fa8072(ff)?(?!\w)/gi,
    seagreen: /#2e8b57(ff)?(?!\w)/gi,
    seashell: /#fff5ee(ff)?(?!\w)/gi,
    sienna: /#a0522d(ff)?(?!\w)/gi,
    silver: /#c0c0c0(ff)?(?!\w)/gi,
    skyblue: /#87ceeb(ff)?(?!\w)/gi,
    snow: /#fffafa(ff)?(?!\w)/gi,
    tan: /#d2b48c(ff)?(?!\w)/gi,
    teal: /#008080(ff)?(?!\w)/gi,
    thistle: /#d8bfd8(ff)?(?!\w)/gi,
    tomato: /#ff6347(ff)?(?!\w)/gi,
    violet: /#ee82ee(ff)?(?!\w)/gi,
    wheat: /#f5deb3(ff)?(?!\w)/gi,
    white: /#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi,
  },
  dn = zs,
  Zn = { whitespace: /\s+/g, urlHexPairs: /%[\dA-F]{2}/g, quotes: /"/g };
function Rs(e) {
  return e.trim().replace(Zn.whitespace, " ");
}
function Us(e) {
  return encodeURIComponent(e).replace(Zn.urlHexPairs, Hs);
}
function Bs(e) {
  return (
    Object.keys(dn).forEach(function (t) {
      dn[t].test(e) && (e = e.replace(dn[t], t));
    }),
    e
  );
}
function Hs(e) {
  switch (e) {
    case "%20":
      return " ";
    case "%3D":
      return "=";
    case "%3A":
      return ":";
    case "%2F":
      return "/";
    default:
      return e.toLowerCase();
  }
}
function Cn(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string, but received " + typeof e);
  e.charCodeAt(0) === 65279 && (e = e.slice(1));
  var t = Bs(Rs(e)).replace(Zn.quotes, "'");
  return "data:image/svg+xml," + Us(t);
}
Cn.toSrcset = function (t) {
  return Cn(t).replace(/ /g, "%20");
};
var Lt = Cn,
  Qs = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
  Ji =
    /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
  Dt = /[\s\n\\/='"\0<>]/,
  Ki = /^xlink:?./,
  Zs = /["&<]/;
function Je(e) {
  if (Zs.test((e += "")) === !1) return e;
  for (var t = 0, n = 0, r = "", i = ""; n < e.length; n++) {
    switch (e.charCodeAt(n)) {
      case 34:
        i = "&quot;";
        break;
      case 38:
        i = "&amp;";
        break;
      case 60:
        i = "&lt;";
        break;
      default:
        continue;
    }
    n !== t && (r += e.slice(t, n)), (r += i), (t = n + 1);
  }
  return n !== t && (r += e.slice(t, n)), r;
}
var kr = function (e, t) {
    return String(e).replace(/(\n+)/g, "$1" + (t || "	"));
  },
  Cr = function (e, t, n) {
    return (
      String(e).length > (t || 40) ||
      (!n &&
        String(e).indexOf(`
`) !== -1) ||
      String(e).indexOf("<") !== -1
    );
  },
  Ar = {},
  Xs = /([A-Z])/g;
function eo(e) {
  var t = "";
  for (var n in e) {
    var r = e[n];
    r != null &&
      r !== "" &&
      (t && (t += " "),
      (t +=
        n[0] == "-"
          ? n
          : Ar[n] || (Ar[n] = n.replace(Xs, "-$1").toLowerCase())),
      (t =
        typeof r == "number" && Qs.test(n) === !1
          ? t + ": " + r + "px;"
          : t + ": " + r + ";"));
  }
  return t || void 0;
}
function An(e, t) {
  return (
    Array.isArray(t) ? t.reduce(An, e) : t != null && t !== !1 && e.push(t), e
  );
}
function Sr() {
  this.__d = !0;
}
function to(e, t) {
  return {
    __v: e,
    context: t,
    props: e.props,
    setState: Sr,
    forceUpdate: Sr,
    __d: !0,
    __h: [],
  };
}
function Ft(e, t) {
  var n = e.contextType,
    r = n && t[n.__c];
  return n != null ? (r ? r.props.value : n.__) : t;
}
var pn = [];
function Qe(e, t, n, r, i, o) {
  if (e == null || typeof e == "boolean") return "";
  if (typeof e != "object") return typeof e == "function" ? "" : Je(e);
  var s = n.pretty,
    l = s && typeof s == "string" ? s : "	";
  if (Array.isArray(e)) {
    for (var u = "", c = 0; c < e.length; c++)
      s &&
        c > 0 &&
        (u += `
`),
        (u += Qe(e[c], t, n, r, i, o));
    return u;
  }
  if (e.constructor !== void 0) return "";
  var a,
    f = e.type,
    h = e.props,
    _ = !1;
  if (typeof f == "function") {
    if (((_ = !0), !n.shallow || (!r && n.renderRootComponent !== !1))) {
      if (f === Z) {
        var p = [];
        return (
          An(p, e.props.children), Qe(p, t, n, n.shallowHighOrder !== !1, i, o)
        );
      }
      var m,
        d = (e.__c = to(e, t));
      $.__b && $.__b(e);
      var g = $.__r;
      if (f.prototype && typeof f.prototype.render == "function") {
        var y = Ft(f, t);
        ((d = e.__c = new f(h, y)).__v = e),
          (d._dirty = d.__d = !0),
          (d.props = h),
          d.state == null && (d.state = {}),
          d._nextState == null &&
            d.__s == null &&
            (d._nextState = d.__s = d.state),
          (d.context = y),
          f.getDerivedStateFromProps
            ? (d.state = Object.assign(
                {},
                d.state,
                f.getDerivedStateFromProps(d.props, d.state)
              ))
            : d.componentWillMount &&
              (d.componentWillMount(),
              (d.state =
                d._nextState !== d.state
                  ? d._nextState
                  : d.__s !== d.state
                  ? d.__s
                  : d.state)),
          g && g(e),
          (m = d.render(d.props, d.state, d.context));
      } else
        for (var b = Ft(f, t), v = 0; d.__d && v++ < 25; )
          (d.__d = !1), g && g(e), (m = f.call(e.__c, h, b));
      return (
        d.getChildContext && (t = Object.assign({}, t, d.getChildContext())),
        $.diffed && $.diffed(e),
        Qe(m, t, n, n.shallowHighOrder !== !1, i, o)
      );
    }
    f =
      (a = f).displayName ||
      (a !== Function && a.name) ||
      (function (xe) {
        var we = (Function.prototype.toString
          .call(xe)
          .match(/^\s*function\s+([^( ]+)/) || "")[1];
        if (!we) {
          for (var $e = -1, fn = pn.length; fn--; )
            if (pn[fn] === xe) {
              $e = fn;
              break;
            }
          $e < 0 && ($e = pn.push(xe) - 1), (we = "UnnamedComponent" + $e);
        }
        return we;
      })(a);
  }
  var w,
    N,
    k = "<" + f;
  if (h) {
    var S = Object.keys(h);
    n && n.sortAttributes === !0 && S.sort();
    for (var V = 0; V < S.length; V++) {
      var P = S[V],
        A = h[P];
      if (P !== "children") {
        if (
          !Dt.test(P) &&
          ((n && n.allAttributes) ||
            (P !== "key" && P !== "ref" && P !== "__self" && P !== "__source"))
        ) {
          if (P === "defaultValue") P = "value";
          else if (P === "defaultChecked") P = "checked";
          else if (P === "defaultSelected") P = "selected";
          else if (P === "className") {
            if (h.class !== void 0) continue;
            P = "class";
          } else
            i &&
              Ki.test(P) &&
              (P = P.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if (P === "htmlFor") {
            if (h.for) continue;
            P = "for";
          }
          P === "style" && A && typeof A == "object" && (A = eo(A)),
            P[0] === "a" &&
              P[1] === "r" &&
              typeof A == "boolean" &&
              (A = String(A));
          var C = n.attributeHook && n.attributeHook(P, A, t, n, _);
          if (C || C === "") k += C;
          else if (P === "dangerouslySetInnerHTML") N = A && A.__html;
          else if (f === "textarea" && P === "value") w = A;
          else if ((A || A === 0 || A === "") && typeof A != "function") {
            if (!((A !== !0 && A !== "") || ((A = P), n && n.xml))) {
              k = k + " " + P;
              continue;
            }
            if (P === "value") {
              if (f === "select") {
                o = A;
                continue;
              }
              f === "option" &&
                o == A &&
                h.selected === void 0 &&
                (k += " selected");
            }
            k = k + " " + P + '="' + Je(A) + '"';
          }
        }
      } else w = A;
    }
  }
  if (s) {
    var q = k.replace(/\n\s*/, " ");
    q === k ||
    ~q.indexOf(`
`)
      ? s &&
        ~k.indexOf(`
`) &&
        (k += `
`)
      : (k = q);
  }
  if (((k += ">"), Dt.test(f)))
    throw new Error(f + " is not a valid HTML tag name in " + k);
  var D,
    he = Ji.test(f) || (n.voidElements && n.voidElements.test(f)),
    I = [];
  if (N)
    s &&
      Cr(N) &&
      (N =
        `
` +
        l +
        kr(N, l)),
      (k += N);
  else if (w != null && An((D = []), w).length) {
    for (
      var U =
          s &&
          ~k.indexOf(`
`),
        de = !1,
        re = 0;
      re < D.length;
      re++
    ) {
      var be = D[re];
      if (be != null && be !== !1) {
        var T = Qe(
          be,
          t,
          n,
          !0,
          f === "svg" || (f !== "foreignObject" && i),
          o
        );
        if ((s && !U && Cr(T) && (U = !0), T))
          if (s) {
            var F = T.length > 0 && T[0] != "<";
            de && F ? (I[I.length - 1] += T) : I.push(T), (de = F);
          } else I.push(T);
      }
    }
    if (s && U)
      for (var X = I.length; X--; )
        I[X] =
          `
` +
          l +
          kr(I[X], l);
  }
  if (I.length || N) k += I.join("");
  else if (n && n.xml) return k.substring(0, k.length - 1) + " />";
  return (
    !he || D || N
      ? (s &&
          ~k.indexOf(`
`) &&
          (k += `
`),
        (k = k + "</" + f + ">"))
      : (k = k.replace(/>$/, " />")),
    k
  );
}
var Ws = { shallow: !0 };
zt.render = zt;
var Ys = function (e, t) {
    return zt(e, t, Ws);
  },
  Nr = [];
function zt(e, t, n) {
  t = t || {};
  var r = $.__s;
  $.__s = !0;
  var i,
    o = Ae(Z, null);
  return (
    (o.__k = [e]),
    (i =
      n &&
      (n.pretty ||
        n.voidElements ||
        n.sortAttributes ||
        n.shallow ||
        n.allAttributes ||
        n.xml ||
        n.attributeHook)
        ? Qe(e, t, n)
        : Ze(e, t, !1, void 0, o)),
    $.__c && $.__c(e, Nr),
    ($.__s = r),
    (Nr.length = 0),
    i
  );
}
function mn(e) {
  return e == null || typeof e == "boolean"
    ? null
    : typeof e == "string" || typeof e == "number" || typeof e == "bigint"
    ? Ae(null, null, e)
    : e;
}
function Gs(e, t) {
  return e === "className"
    ? "class"
    : e === "htmlFor"
    ? "for"
    : e === "defaultValue"
    ? "value"
    : e === "defaultChecked"
    ? "checked"
    : e === "defaultSelected"
    ? "selected"
    : t && Ki.test(e)
    ? e.toLowerCase().replace(/^xlink:?/, "xlink:")
    : e;
}
function Js(e, t) {
  return e === "style" && t != null && typeof t == "object"
    ? eo(t)
    : e[0] === "a" && e[1] === "r" && typeof t == "boolean"
    ? String(t)
    : t;
}
var Or = Array.isArray,
  Lr = Object.assign;
function Ze(e, t, n, r, i) {
  if (e == null || e === !0 || e === !1 || e === "") return "";
  if (typeof e != "object") return typeof e == "function" ? "" : Je(e);
  if (Or(e)) {
    var o = "";
    i.__k = e;
    for (var s = 0; s < e.length; s++)
      (o += Ze(e[s], t, n, r, i)), (e[s] = mn(e[s]));
    return o;
  }
  if (e.constructor !== void 0) return "";
  (e.__ = i), $.__b && $.__b(e);
  var l = e.type,
    u = e.props;
  if (typeof l == "function") {
    var c;
    if (l === Z) c = u.children;
    else {
      c =
        l.prototype && typeof l.prototype.render == "function"
          ? (function (S, V) {
              var P = S.type,
                A = Ft(P, V),
                C = new P(S.props, A);
              (S.__c = C),
                (C.__v = S),
                (C.__d = !0),
                (C.props = S.props),
                C.state == null && (C.state = {}),
                C.__s == null && (C.__s = C.state),
                (C.context = A),
                P.getDerivedStateFromProps
                  ? (C.state = Lr(
                      {},
                      C.state,
                      P.getDerivedStateFromProps(C.props, C.state)
                    ))
                  : C.componentWillMount &&
                    (C.componentWillMount(),
                    (C.state = C.__s !== C.state ? C.__s : C.state));
              var q = $.__r;
              return q && q(S), C.render(C.props, C.state, C.context);
            })(e, t)
          : (function (S, V) {
              var P,
                A = to(S, V),
                C = Ft(S.type, V);
              S.__c = A;
              for (var q = $.__r, D = 0; A.__d && D++ < 25; )
                (A.__d = !1), q && q(S), (P = S.type.call(A, S.props, C));
              return P;
            })(e, t);
      var a = e.__c;
      a.getChildContext && (t = Lr({}, t, a.getChildContext()));
    }
    var f = Ze(
      (c = c != null && c.type === Z && c.key == null ? c.props.children : c),
      t,
      n,
      r,
      e
    );
    return (
      $.diffed && $.diffed(e), (e.__ = void 0), $.unmount && $.unmount(e), f
    );
  }
  var h,
    _,
    p = "<";
  if (((p += l), u))
    for (var m in ((h = u.children), u)) {
      var d = u[m];
      if (
        !(
          m === "key" ||
          m === "ref" ||
          m === "__self" ||
          m === "__source" ||
          m === "children" ||
          (m === "className" && "class" in u) ||
          (m === "htmlFor" && "for" in u) ||
          Dt.test(m)
        )
      ) {
        if (((d = Js((m = Gs(m, n)), d)), m === "dangerouslySetInnerHTML"))
          _ = d && d.__html;
        else if (l === "textarea" && m === "value") h = d;
        else if ((d || d === 0 || d === "") && typeof d != "function") {
          if (d === !0 || d === "") {
            (d = m), (p = p + " " + m);
            continue;
          }
          if (m === "value") {
            if (l === "select") {
              r = d;
              continue;
            }
            l !== "option" || r != d || "selected" in u || (p += " selected");
          }
          p = p + " " + m + '="' + Je(d) + '"';
        }
      }
    }
  var g = p;
  if (((p += ">"), Dt.test(l)))
    throw new Error(l + " is not a valid HTML tag name in " + p);
  var y = "",
    b = !1;
  if (_) (y += _), (b = !0);
  else if (typeof h == "string") (y += Je(h)), (b = !0);
  else if (Or(h)) {
    e.__k = h;
    for (var v = 0; v < h.length; v++) {
      var w = h[v];
      if (((h[v] = mn(w)), w != null && w !== !1)) {
        var N = Ze(w, t, l === "svg" || (l !== "foreignObject" && n), r, e);
        N && ((y += N), (b = !0));
      }
    }
  } else if (h != null && h !== !1 && h !== !0) {
    e.__k = [mn(h)];
    var k = Ze(h, t, l === "svg" || (l !== "foreignObject" && n), r, e);
    k && ((y += k), (b = !0));
  }
  if (($.diffed && $.diffed(e), (e.__ = void 0), $.unmount && $.unmount(e), b))
    p += y;
  else if (Ji.test(l)) return g + " />";
  return p + "</" + l + ">";
}
zt.shallowRender = Ys;
function no(e, t) {
  const n = _t(e),
    r = tn(n);
  return (
    `<svg id="${t}" xmlns="http://www.w3.org/2000/svg" viewBox="${r.x} ${r.y} ${r.width} ${r.height}">` +
    Ks(n) +
    "</svg>"
  );
}
function Ks(e) {
  return e
    .map(
      (n) =>
        `<path ${Object.entries(n.props)
          .map(([i, o]) => `${i}="${o}"`)
          .join(" ")} />`
    )
    .join("");
}
function ea() {
  const e = document.querySelector("svg");
  e.addEventListener("DOMSubtreeModified", function (t) {}),
    document.addEventListener("keydown", function (t) {
      if (t.metaKey && t.key === "s") {
        t.preventDefault(),
          e.removeAttribute("style"),
          e.removeAttribute("onload");
        let n = new Blob([e.outerHTML], { type: "image/svg+xml" });
        const r = document.createElement("a");
        return (
          (r.style.display = "none"),
          (r.href = URL.createObjectURL(n)),
          (r.download = "pattern.svg"),
          document.body.appendChild(r),
          r.click(),
          !1
        );
      }
      return !0;
    });
}
var Xn = bt(),
  O = (e) => vt(e, Xn),
  Wn = bt();
O.write = (e) => vt(e, Wn);
var nn = bt();
O.onStart = (e) => vt(e, nn);
var Yn = bt();
O.onFrame = (e) => vt(e, Yn);
var Gn = bt();
O.onFinish = (e) => vt(e, Gn);
var je = [];
O.setTimeout = (e, t) => {
  let n = O.now() + t,
    r = () => {
      let o = je.findIndex((s) => s.cancel == r);
      ~o && je.splice(o, 1), (ge -= ~o ? 1 : 0);
    },
    i = { time: n, handler: e, cancel: r };
  return je.splice(ro(n), 0, i), (ge += 1), io(), i;
};
var ro = (e) => ~(~je.findIndex((t) => t.time > e) || ~je.length);
O.cancel = (e) => {
  nn.delete(e), Yn.delete(e), Gn.delete(e), Xn.delete(e), Wn.delete(e);
};
O.sync = (e) => {
  (Sn = !0), O.batchedUpdates(e), (Sn = !1);
};
O.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...i) {
    (t = i), O.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      nn.delete(n), (t = null);
    }),
    r
  );
};
var Jn = typeof window < "u" ? window.requestAnimationFrame : () => {};
O.use = (e) => (Jn = e);
O.now = typeof performance < "u" ? () => performance.now() : Date.now;
O.batchedUpdates = (e) => e();
O.catch = console.error;
O.frameLoop = "always";
O.advance = () => {
  O.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : so();
};
var _e = -1,
  ge = 0,
  Sn = !1;
function vt(e, t) {
  Sn ? (t.delete(e), e(0)) : (t.add(e), io());
}
function io() {
  _e < 0 && ((_e = 0), O.frameLoop !== "demand" && Jn(oo));
}
function ta() {
  _e = -1;
}
function oo() {
  ~_e && (Jn(oo), O.batchedUpdates(so));
}
function so() {
  let e = _e;
  _e = O.now();
  let t = ro(_e);
  if ((t && (ao(je.splice(0, t), (n) => n.handler()), (ge -= t)), !ge)) {
    ta();
    return;
  }
  nn.flush(),
    Xn.flush(e ? Math.min(64, _e - e) : 16.667),
    Yn.flush(),
    Wn.flush(),
    Gn.flush();
}
function bt() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (ge += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (ge -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (ge -= t.size),
        ao(t, (r) => r(n) && e.add(r)),
        (ge += e.size),
        (t = e));
    },
  };
}
function ao(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      O.catch(r);
    }
  });
}
function lo(e, t) {
  for (var n in t) e[n] = t[n];
  return e;
}
function Er(e, t) {
  for (var n in e) if (n !== "__source" && !(n in t)) return !0;
  for (var r in t) if (r !== "__source" && e[r] !== t[r]) return !0;
  return !1;
}
function Tr(e) {
  this.props = e;
}
((Tr.prototype = new ae()).isPureReactComponent = !0),
  (Tr.prototype.shouldComponentUpdate = function (e, t) {
    return Er(this.props, e) || Er(this.state, t);
  });
var Vr = $.__b;
$.__b = function (e) {
  e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
    Vr && Vr(e);
};
var na =
  (typeof Symbol != "undefined" &&
    Symbol.for &&
    Symbol.for("react.forward_ref")) ||
  3911;
function ra(e) {
  function t(n) {
    var r = lo({}, n);
    return delete r.ref, e(r, n.ref || null);
  }
  return (
    (t.$$typeof = na),
    (t.render = t),
    (t.prototype.isReactComponent = t.__f = !0),
    (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
    t
  );
}
var ia = $.__e;
$.__e = function (e, t, n, r) {
  if (e.then) {
    for (var i, o = t; (o = o.__); )
      if ((i = o.__c) && i.__c)
        return t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
  }
  ia(e, t, n, r);
};
var qr = $.unmount;
function uo(e, t, n) {
  return (
    e &&
      (e.__c &&
        e.__c.__H &&
        (e.__c.__H.__.forEach(function (r) {
          typeof r.__c == "function" && r.__c();
        }),
        (e.__c.__H = null)),
      (e = lo({}, e)).__c != null &&
        (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return uo(r, t, n);
        }))),
    e
  );
}
function co(e, t, n) {
  return (
    e &&
      ((e.__v = null),
      (e.__k =
        e.__k &&
        e.__k.map(function (r) {
          return co(r, t, n);
        })),
      e.__c &&
        e.__c.__P === t &&
        (e.__e && n.insertBefore(e.__e, e.__d),
        (e.__c.__e = !0),
        (e.__c.__P = n))),
    e
  );
}
function _n() {
  (this.__u = 0), (this.t = null), (this.__b = null);
}
function fo(e) {
  var t = e.__.__c;
  return t && t.__a && t.__a(e);
}
function $t() {
  (this.u = null), (this.o = null);
}
($.unmount = function (e) {
  var t = e.__c;
  t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), qr && qr(e);
}),
  ((_n.prototype = new ae()).__c = function (e, t) {
    var n = t.__c,
      r = this;
    r.t == null && (r.t = []), r.t.push(n);
    var i = fo(r.__v),
      o = !1,
      s = function () {
        o || ((o = !0), (n.__R = null), i ? i(l) : l());
      };
    n.__R = s;
    var l = function () {
        if (!--r.__u) {
          if (r.state.__a) {
            var c = r.state.__a;
            r.__v.__k[0] = co(c, c.__c.__P, c.__c.__O);
          }
          var a;
          for (r.setState({ __a: (r.__b = null) }); (a = r.t.pop()); )
            a.forceUpdate();
        }
      },
      u = t.__h === !0;
    r.__u++ || u || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(s, s);
  }),
  (_n.prototype.componentWillUnmount = function () {
    this.t = [];
  }),
  (_n.prototype.render = function (e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var n = document.createElement("div"),
          r = this.__v.__k[0].__c;
        this.__v.__k[0] = uo(this.__b, n, (r.__O = r.__P));
      }
      this.__b = null;
    }
    var i = t.__a && Ae(Z, null, e.fallback);
    return i && (i.__h = null), [Ae(Z, null, t.__a ? null : e.children), i];
  });
var jr = function (e, t, n) {
  if (
    (++n[1] === n[0] && e.o.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
  )
    for (n = e.u; n; ) {
      for (; n.length > 3; ) n.pop()();
      if (n[1] < n[0]) break;
      e.u = n = n[2];
    }
};
(($t.prototype = new ae()).__a = function (e) {
  var t = this,
    n = fo(t.__v),
    r = t.o.get(e);
  return (
    r[0]++,
    function (i) {
      var o = function () {
        t.props.revealOrder ? (r.push(i), jr(t, e, r)) : i();
      };
      n ? n(o) : o();
    }
  );
}),
  ($t.prototype.render = function (e) {
    (this.u = null), (this.o = new Map());
    var t = Ce(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
    return e.children;
  }),
  ($t.prototype.componentDidUpdate = $t.prototype.componentDidMount =
    function () {
      var e = this;
      this.o.forEach(function (t, n) {
        jr(e, n, t);
      });
    });
var oa =
    (typeof Symbol != "undefined" &&
      Symbol.for &&
      Symbol.for("react.element")) ||
    60103,
  sa =
    /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
  aa = typeof document != "undefined",
  la = function (e) {
    return (
      typeof Symbol != "undefined" && typeof Symbol() == "symbol"
        ? /fil|che|rad/i
        : /fil|che|ra/i
    ).test(e);
  };
(ae.prototype.isReactComponent = {}),
  [
    "componentWillMount",
    "componentWillReceiveProps",
    "componentWillUpdate",
  ].forEach(function (e) {
    Object.defineProperty(ae.prototype, e, {
      configurable: !0,
      get: function () {
        return this["UNSAFE_" + e];
      },
      set: function (t) {
        Object.defineProperty(this, e, {
          configurable: !0,
          writable: !0,
          value: t,
        });
      },
    });
  });
var Ir = $.event;
function ua() {}
function ca() {
  return this.cancelBubble;
}
function fa() {
  return this.defaultPrevented;
}
$.event = function (e) {
  return (
    Ir && (e = Ir(e)),
    (e.persist = ua),
    (e.isPropagationStopped = ca),
    (e.isDefaultPrevented = fa),
    (e.nativeEvent = e)
  );
};
var Dr = {
    configurable: !0,
    get: function () {
      return this.class;
    },
  },
  Fr = $.vnode;
$.vnode = function (e) {
  var t = e.type,
    n = e.props,
    r = n;
  if (typeof t == "string") {
    var i = t.indexOf("-") === -1;
    for (var o in ((r = {}), n)) {
      var s = n[o];
      (aa && o === "children" && t === "noscript") ||
        (o === "value" && "defaultValue" in n && s == null) ||
        (o === "defaultValue" && "value" in n && n.value == null
          ? (o = "value")
          : o === "download" && s === !0
          ? (s = "")
          : /ondoubleclick/i.test(o)
          ? (o = "ondblclick")
          : /^onchange(textarea|input)/i.test(o + t) && !la(n.type)
          ? (o = "oninput")
          : /^onfocus$/i.test(o)
          ? (o = "onfocusin")
          : /^onblur$/i.test(o)
          ? (o = "onfocusout")
          : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
          ? (o = o.toLowerCase())
          : i && sa.test(o)
          ? (o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
          : s === null && (s = void 0),
        /^oninput$/i.test(o) &&
          ((o = o.toLowerCase()), r[o] && (o = "oninputCapture")),
        (r[o] = s));
    }
    t == "select" &&
      r.multiple &&
      Array.isArray(r.value) &&
      (r.value = Ce(n.children).forEach(function (l) {
        l.props.selected = r.value.indexOf(l.props.value) != -1;
      })),
      t == "select" &&
        r.defaultValue != null &&
        (r.value = Ce(n.children).forEach(function (l) {
          l.props.selected = r.multiple
            ? r.defaultValue.indexOf(l.props.value) != -1
            : r.defaultValue == l.props.value;
        })),
      (e.props = r),
      n.class != n.className &&
        ((Dr.enumerable = "className" in n),
        n.className != null && (r.class = n.className),
        Object.defineProperty(r, "className", Dr));
  }
  (e.$$typeof = oa), Fr && Fr(e);
};
var zr = $.__r;
$.__r = function (e) {
  zr && zr(e), e.__c;
};
var Rr = $.diffed;
$.diffed = function (e) {
  Rr && Rr(e);
  var t = e.props,
    n = e.__e;
  n != null &&
    e.type === "textarea" &&
    "value" in t &&
    t.value !== n.value &&
    (n.value = t.value == null ? "" : t.value);
};
var ha = function (e, t) {
    return e(t);
  },
  da = Object.defineProperty,
  pa = (e, t) => {
    for (var n in t) da(e, n, { get: t[n], enumerable: !0 });
  },
  K = {};
pa(K, {
  assign: () => _a,
  colors: () => ye,
  createStringInterpolator: () => er,
  skipAnimation: () => po,
  to: () => ho,
  willAdvance: () => tr,
});
function Nn() {}
var ma = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  x = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function oe(e, t) {
  if (x.arr(e)) {
    if (!x.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var E = (e, t) => e.forEach(t);
function ne(e, t, n) {
  if (x.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var B = (e) => (x.und(e) ? [] : x.arr(e) ? e : [e]);
function Ke(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), E(n, t);
  }
}
var Xe = (e, ...t) => Ke(e, (n) => n(...t)),
  Kn = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  er,
  ho,
  ye = null,
  po = !1,
  tr = Nn,
  _a = (e) => {
    e.to && (ho = e.to),
      e.now && (O.now = e.now),
      e.colors !== void 0 && (ye = e.colors),
      e.skipAnimation != null && (po = e.skipAnimation),
      e.createStringInterpolator && (er = e.createStringInterpolator),
      e.requestAnimationFrame && O.use(e.requestAnimationFrame),
      e.batchedUpdates && (O.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (tr = e.willAdvance),
      e.frameLoop && (O.frameLoop = e.frameLoop);
  },
  et = new Set(),
  Q = [],
  gn = [],
  Rt = 0,
  rn = {
    get idle() {
      return !et.size && !Q.length;
    },
    start(e) {
      Rt > e.priority ? (et.add(e), O.onStart(ga)) : (mo(e), O(On));
    },
    advance: On,
    sort(e) {
      if (Rt) O.onFrame(() => rn.sort(e));
      else {
        let t = Q.indexOf(e);
        ~t && (Q.splice(t, 1), _o(e));
      }
    },
    clear() {
      (Q = []), et.clear();
    },
  };
function ga() {
  et.forEach(mo), et.clear(), O(On);
}
function mo(e) {
  Q.includes(e) || _o(e);
}
function _o(e) {
  Q.splice(
    ya(Q, (t) => t.priority > e.priority),
    0,
    e
  );
}
function On(e) {
  let t = gn;
  for (let n = 0; n < Q.length; n++) {
    let r = Q[n];
    (Rt = r.priority), r.idle || (tr(r), r.advance(e), r.idle || t.push(r));
  }
  return (Rt = 0), (gn = Q), (gn.length = 0), (Q = t), Q.length > 0;
}
function ya(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var va = (e, t, n) => Math.min(Math.max(n, e), t),
  ba = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  G = "[-+]?\\d*\\.?\\d+",
  Ut = G + "%";
function on(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var xa = new RegExp("rgb" + on(G, G, G)),
  wa = new RegExp("rgba" + on(G, G, G, G)),
  $a = new RegExp("hsl" + on(G, Ut, Ut)),
  Ma = new RegExp("hsla" + on(G, Ut, Ut, G)),
  Pa = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  ka = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  Ca = /^#([0-9a-fA-F]{6})$/,
  Aa = /^#([0-9a-fA-F]{8})$/;
function Sa(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = Ca.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : ye && ye[e] !== void 0
    ? ye[e]
    : (t = xa.exec(e))
    ? ((Le(t[1]) << 24) | (Le(t[2]) << 16) | (Le(t[3]) << 8) | 255) >>> 0
    : (t = wa.exec(e))
    ? ((Le(t[1]) << 24) | (Le(t[2]) << 16) | (Le(t[3]) << 8) | Hr(t[4])) >>> 0
    : (t = Pa.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = Aa.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = ka.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = $a.exec(e))
    ? (Ur(Br(t[1]), Mt(t[2]), Mt(t[3])) | 255) >>> 0
    : (t = Ma.exec(e))
    ? (Ur(Br(t[1]), Mt(t[2]), Mt(t[3])) | Hr(t[4])) >>> 0
    : null;
}
function yn(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Ur(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    i = 2 * n - r,
    o = yn(i, r, e + 1 / 3),
    s = yn(i, r, e),
    l = yn(i, r, e - 1 / 3);
  return (
    (Math.round(o * 255) << 24) |
    (Math.round(s * 255) << 16) |
    (Math.round(l * 255) << 8)
  );
}
function Le(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function Br(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function Hr(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Mt(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function Qr(e) {
  let t = Sa(e);
  if (t === null) return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    i = (t & 65280) >>> 8,
    o = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${i}, ${o})`;
}
var at = (e, t, n) => {
  if (x.fun(e)) return e;
  if (x.arr(e)) return at({ range: e, output: t, extrapolate: n });
  if (x.str(e.output[0])) return er(e);
  let r = e,
    i = r.output,
    o = r.range || [0, 1],
    s = r.extrapolateLeft || r.extrapolate || "extend",
    l = r.extrapolateRight || r.extrapolate || "extend",
    u = r.easing || ((c) => c);
  return (c) => {
    let a = Oa(c, o);
    return Na(c, o[a], o[a + 1], i[a], i[a + 1], u, s, l, r.map);
  };
};
function Na(e, t, n, r, i, o, s, l, u) {
  let c = u ? u(e) : e;
  if (c < t) {
    if (s === "identity") return c;
    s === "clamp" && (c = t);
  }
  if (c > n) {
    if (l === "identity") return c;
    l === "clamp" && (c = n);
  }
  return r === i
    ? r
    : t === n
    ? e <= t
      ? r
      : i
    : (t === -1 / 0
        ? (c = -c)
        : n === 1 / 0
        ? (c = c - t)
        : (c = (c - t) / (n - t)),
      (c = o(c)),
      r === -1 / 0
        ? (c = -c)
        : i === 1 / 0
        ? (c = c + r)
        : (c = c * (i - r) + r),
      c);
}
function Oa(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var La =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      let r = n * e,
        i = t === "end" ? Math.floor(r) : Math.ceil(r);
      return va(0, 1, i / e);
    },
  Bt = 1.70158,
  Pt = Bt * 1.525,
  Zr = Bt + 1,
  Xr = (2 * Math.PI) / 3,
  Wr = (2 * Math.PI) / 4.5,
  kt = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  Ea = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => Zr * e * e * e - Bt * e * e,
    easeOutBack: (e) => 1 + Zr * Math.pow(e - 1, 3) + Bt * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((Pt + 1) * 2 * e - Pt)) / 2
        : (Math.pow(2 * e - 2, 2) * ((Pt + 1) * (e * 2 - 2) + Pt) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * Xr),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * Xr) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * Wr)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * Wr)) / 2 +
          1,
    easeInBounce: (e) => 1 - kt(1 - e),
    easeOutBounce: kt,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - kt(1 - 2 * e)) / 2 : (1 + kt(2 * e - 1)) / 2,
    steps: La,
  },
  De = Symbol.for("FluidValue.get"),
  Se = Symbol.for("FluidValue.observers"),
  H = (e) => Boolean(e && e[De]),
  z = (e) => (e && e[De] ? e[De]() : e),
  Yr = (e) => e[Se] || null;
function Ta(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function lt(e, t) {
  let n = e[Se];
  n &&
    n.forEach((r) => {
      Ta(r, t);
    });
}
var Jl,
  Kl,
  mi,
  go =
    ((mi = class {
      constructor(e) {
        M(this, Jl);
        M(this, Kl);
        if (!e && !(e = this.get)) throw Error("Unknown getter");
        Va(this, e);
      }
    }),
    (Jl = De),
    (Kl = Se),
    mi),
  Va = (e, t) => yo(e, De, t);
function Re(e, t) {
  if (e[De]) {
    let n = e[Se];
    n || yo(e, Se, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function ut(e, t) {
  let n = e[Se];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : (e[Se] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var yo = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  Et = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  qa =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  Gr = new RegExp(`(${Et.source})(%|[a-z]+)`, "i"),
  ja = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  sn = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  vo = (e) => {
    let [t, n] = Ia(e);
    if (!t || Kn()) return e;
    let r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    return r
      ? r.trim()
      : n && n.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(n) ||
        e
      : n && sn.test(n)
      ? vo(n)
      : n || e;
  },
  Ia = (e) => {
    let t = sn.exec(e);
    if (!t) return [,];
    let [, n, r] = t;
    return [n, r];
  },
  vn,
  Da = (e, t, n, r, i) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,
  bo = (e) => {
    vn ||
      (vn = ye
        ? new RegExp(`(${Object.keys(ye).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    let t = e.output.map((i) =>
        z(i).replace(sn, vo).replace(qa, Qr).replace(vn, Qr)
      ),
      n = t.map((i) => i.match(Et).map(Number)),
      r = n[0]
        .map((i, o) =>
          n.map((s) => {
            if (!(o in s))
              throw Error('The arity of each "output" value must be equal');
            return s[o];
          })
        )
        .map((i) => at({ ...e, output: i }));
    return (i) => {
      var l;
      let o =
          !Gr.test(t[0]) &&
          ((l = t.find((u) => Gr.test(u))) == null
            ? void 0
            : l.replace(Et, "")),
        s = 0;
      return t[0].replace(Et, () => `${r[s++](i)}${o || ""}`).replace(ja, Da);
    };
  },
  nr = "react-spring: ",
  xo = (e) => {
    let t = e,
      n = !1;
    if (typeof t != "function")
      throw new TypeError(`${nr}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  Fa = xo(console.warn);
function za() {
  Fa(`${nr}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var Ra = xo(console.warn);
function Ua() {
  Ra(
    `${nr}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function an(e) {
  return (
    x.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!Kn() && sn.test(e)) || e in (ye || {}))
  );
}
var rr = Kn() ? ue : Oi,
  Ba = () => {
    let e = ce(!1);
    return (
      rr(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function wo() {
  let e = te()[1],
    t = Ba();
  return () => {
    t.current && e(Math.random());
  };
}
function Ha(e, t) {
  let [n] = te(() => ({ inputs: t, result: e() })),
    r = ce(),
    i = r.current,
    o = i;
  return (
    o
      ? Boolean(t && o.inputs && Qa(t, o.inputs)) ||
        (o = { inputs: t, result: e() })
      : (o = n),
    ue(() => {
      (r.current = o), i == n && (n.inputs = n.result = void 0);
    }, [o]),
    o.result
  );
}
function Qa(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var $o = (e) => ue(e, Za),
  Za = [];
function Jr(e) {
  let t = ce();
  return (
    ue(() => {
      t.current = e;
    }),
    t.current
  );
}
var ct = Symbol.for("Animated:node"),
  Xa = (e) => !!e && e[ct] === e,
  ee = (e) => e && e[ct],
  ir = (e, t) => ma(e, ct, t),
  ln = (e) => e && e[ct] && e[ct].getPayload(),
  Mo = class {
    constructor() {
      M(this, "payload");
      ir(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  xt = class extends Mo {
    constructor(t) {
      super();
      M(this, "done", !0);
      M(this, "elapsedTime");
      M(this, "lastPosition");
      M(this, "lastVelocity");
      M(this, "v0");
      M(this, "durationProgress", 0);
      (this._value = t),
        x.num(this._value) && (this.lastPosition = this._value);
    }
    static create(t) {
      return new xt(t);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(t, n) {
      return (
        x.num(t) &&
          ((this.lastPosition = t),
          n &&
            ((t = Math.round(t / n) * n),
            this.done && (this.lastPosition = t))),
        this._value === t ? !1 : ((this._value = t), !0)
      );
    }
    reset() {
      let { done: t } = this;
      (this.done = !1),
        x.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          t && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  ft = class extends xt {
    constructor(t) {
      super(0);
      M(this, "_string", null);
      M(this, "_toString");
      this._toString = at({ output: [t, t] });
    }
    static create(t) {
      return new ft(t);
    }
    getValue() {
      let t = this._string;
      return t != null ? t : (this._string = this._toString(this._value));
    }
    setValue(t) {
      if (x.str(t)) {
        if (t == this._string) return !1;
        (this._string = t), (this._value = 1);
      } else if (super.setValue(t)) this._string = null;
      else return !1;
      return !0;
    }
    reset(t) {
      t && (this._toString = at({ output: [this.getValue(), t] })),
        (this._value = 0),
        super.reset();
    }
  },
  Ht = { dependencies: null },
  un = class extends Mo {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      let t = {};
      return (
        ne(this.source, (n, r) => {
          Xa(n)
            ? (t[r] = n.getValue(e))
            : H(n)
            ? (t[r] = z(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && E(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        let t = new Set();
        return ne(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Ht.dependencies && H(e) && Ht.dependencies.add(e);
      let t = ln(e);
      t && E(t, (n) => this.add(n));
    }
  },
  Po = class extends un {
    constructor(e) {
      super(e);
    }
    static create(e) {
      return new Po(e);
    }
    getValue() {
      return this.source.map((e) => e.getValue());
    }
    setValue(e) {
      let t = this.getPayload();
      return e.length == t.length
        ? t.map((n, r) => n.setValue(e[r])).some(Boolean)
        : (super.setValue(e.map(Wa)), !0);
    }
  };
function Wa(e) {
  return (an(e) ? ft : xt).create(e);
}
function Ln(e) {
  let t = ee(e);
  return t ? t.constructor : x.arr(e) ? Po : an(e) ? ft : xt;
}
var Kr = (e, t) => {
    let n = !x.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return ra((r, i) => {
      let o = ce(null),
        s =
          n &&
          ts(
            (p) => {
              o.current = Ja(i, p);
            },
            [i]
          ),
        [l, u] = Ga(r, t),
        c = wo(),
        a = () => {
          let p = o.current;
          (n && !p) ||
            ((p ? t.applyAnimatedValues(p, l.getValue(!0)) : !1) === !1 && c());
        },
        f = new Ya(a, u),
        h = ce();
      rr(
        () => (
          (h.current = f),
          E(u, (p) => Re(p, f)),
          () => {
            h.current &&
              (E(h.current.deps, (p) => ut(p, h.current)),
              O.cancel(h.current.update));
          }
        )
      ),
        ue(a, []),
        $o(() => () => {
          let p = h.current;
          E(p.deps, (m) => ut(m, p));
        });
      let _ = t.getComponentProps(l.getValue());
      return Ae(e, { ..._, ref: s });
    });
  },
  Ya = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && O.write(this.update);
    }
  };
function Ga(e, t) {
  let n = new Set();
  return (
    (Ht.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new un(e)),
    (Ht.dependencies = null),
    [e, n]
  );
}
function Ja(e, t) {
  return e && (x.fun(e) ? e(t) : (e.current = t)), t;
}
var ei = Symbol.for("AnimatedComponent"),
  Ka = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (i) => new un(i),
      getComponentProps: r = (i) => i,
    } = {}
  ) => {
    let i = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      o = (s) => {
        let l = ti(s) || "Anonymous";
        return (
          x.str(s)
            ? (s = o[s] || (o[s] = Kr(s, i)))
            : (s = s[ei] || (s[ei] = Kr(s, i))),
          (s.displayName = `Animated(${l})`),
          s
        );
      };
    return (
      ne(e, (s, l) => {
        x.arr(e) && (l = ti(s)), (o[l] = o(s));
      }),
      { animated: o }
    );
  },
  ti = (e) =>
    x.str(e)
      ? e
      : e && x.str(e.displayName)
      ? e.displayName
      : (x.fun(e) && e.name) || null;
function ke(e, ...t) {
  return x.fun(e) ? e(...t) : e;
}
var tt = (e, t) =>
    e === !0 || !!(t && e && (x.fun(e) ? e(t) : B(e).includes(t))),
  ko = (e, t) => (x.obj(e) ? t && e[t] : e),
  Co = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  el = (e) => e,
  or = (e, t = el) => {
    let n = tl;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    let r = {};
    for (let i of n) {
      let o = t(e[i], i);
      x.und(o) || (r[i] = o);
    }
    return r;
  },
  tl = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  nl = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function rl(e) {
  let t = {},
    n = 0;
  if (
    (ne(e, (r, i) => {
      nl[i] || ((t[i] = r), n++);
    }),
    n)
  )
    return t;
}
function Ao(e) {
  let t = rl(e);
  if (t) {
    let n = { to: t };
    return ne(e, (r, i) => i in t || (n[i] = r)), n;
  }
  return { ...e };
}
function ht(e) {
  return (
    (e = z(e)),
    x.arr(e)
      ? e.map(ht)
      : an(e)
      ? K.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function il(e) {
  for (let t in e) return !0;
  return !1;
}
function En(e) {
  return x.fun(e) || (x.arr(e) && x.obj(e[0]));
}
function ol(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function sl(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var al = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  Tn = { ...al.default, mass: 1, damping: 1, easing: Ea.linear, clamp: !1 },
  ll = class {
    constructor() {
      M(this, "tension");
      M(this, "friction");
      M(this, "frequency");
      M(this, "damping");
      M(this, "mass");
      M(this, "velocity", 0);
      M(this, "restVelocity");
      M(this, "precision");
      M(this, "progress");
      M(this, "duration");
      M(this, "easing");
      M(this, "clamp");
      M(this, "bounce");
      M(this, "decay");
      M(this, "round");
      Object.assign(this, Tn);
    }
  };
function ul(e, t, n) {
  n && ((n = { ...n }), ni(n, t), (t = { ...n, ...t })),
    ni(e, t),
    Object.assign(e, t);
  for (let s in Tn) e[s] == null && (e[s] = Tn[s]);
  let { mass: r, frequency: i, damping: o } = e;
  return (
    x.und(i) ||
      (i < 0.01 && (i = 0.01),
      o < 0 && (o = 0),
      (e.tension = Math.pow((2 * Math.PI) / i, 2) * r),
      (e.friction = (4 * Math.PI * o * r) / i)),
    e
  );
}
function ni(e, t) {
  if (!x.und(t.decay)) e.duration = void 0;
  else {
    let n = !x.und(t.tension) || !x.und(t.friction);
    (n || !x.und(t.frequency) || !x.und(t.damping) || !x.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var ri = [],
  cl = class {
    constructor() {
      M(this, "changed", !1);
      M(this, "values", ri);
      M(this, "toValues", null);
      M(this, "fromValues", ri);
      M(this, "to");
      M(this, "from");
      M(this, "config", new ll());
      M(this, "immediate", !1);
    }
  };
function So(e, { key: t, props: n, defaultProps: r, state: i, actions: o }) {
  return new Promise((s, l) => {
    var p;
    let u,
      c,
      a = tt((p = n.cancel) != null ? p : r == null ? void 0 : r.cancel, t);
    if (a) _();
    else {
      x.und(n.pause) || (i.paused = tt(n.pause, t));
      let m = r == null ? void 0 : r.pause;
      m !== !0 && (m = i.paused || tt(m, t)),
        (u = ke(n.delay || 0, t)),
        m ? (i.resumeQueue.add(h), o.pause()) : (o.resume(), h());
    }
    function f() {
      i.resumeQueue.add(h),
        i.timeouts.delete(c),
        c.cancel(),
        (u = c.time - O.now());
    }
    function h() {
      u > 0 && !K.skipAnimation
        ? ((i.delayed = !0),
          (c = O.setTimeout(_, u)),
          i.pauseQueue.add(f),
          i.timeouts.add(c))
        : _();
    }
    function _() {
      i.delayed && (i.delayed = !1),
        i.pauseQueue.delete(f),
        i.timeouts.delete(c),
        e <= (i.cancelId || 0) && (a = !0);
      try {
        o.start({ ...n, callId: e, cancel: a }, s);
      } catch (m) {
        l(m);
      }
    }
  });
}
var sr = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Ie(e.get())
      : t.every((n) => n.noop)
      ? No(e.get())
      : W(
          e.get(),
          t.every((n) => n.finished)
        ),
  No = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  W = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Ie = (e) => ({ value: e, cancelled: !0, finished: !1 });
function Oo(e, t, n, r) {
  let { callId: i, parentId: o, onRest: s } = t,
    { asyncTo: l, promise: u } = n;
  return !o && e === l && !t.reset
    ? u
    : (n.promise = (async () => {
        (n.asyncId = i), (n.asyncTo = e);
        let c = or(t, (d, g) => (g === "onRest" ? void 0 : d)),
          a,
          f,
          h = new Promise((d, g) => ((a = d), (f = g))),
          _ = (d) => {
            let g =
              (i <= (n.cancelId || 0) && Ie(r)) ||
              (i !== n.asyncId && W(r, !1));
            if (g) throw ((d.result = g), f(d), d);
          },
          p = (d, g) => {
            let y = new ii(),
              b = new oi();
            return (async () => {
              if (K.skipAnimation)
                throw (dt(n), (b.result = W(r, !1)), f(b), b);
              _(y);
              let v = x.obj(d) ? { ...d } : { ...g, to: d };
              (v.parentId = i),
                ne(c, (N, k) => {
                  x.und(v[k]) && (v[k] = N);
                });
              let w = await r.start(v);
              return (
                _(y),
                n.paused &&
                  (await new Promise((N) => {
                    n.resumeQueue.add(N);
                  })),
                w
              );
            })();
          },
          m;
        if (K.skipAnimation) return dt(n), W(r, !1);
        try {
          let d;
          x.arr(e)
            ? (d = (async (g) => {
                for (let y of g) await p(y);
              })(e))
            : (d = Promise.resolve(e(p, r.stop.bind(r)))),
            await Promise.all([d.then(a), h]),
            (m = W(r.get(), !0, !1));
        } catch (d) {
          if (d instanceof ii) m = d.result;
          else if (d instanceof oi) m = d.result;
          else throw d;
        } finally {
          i == n.asyncId &&
            ((n.asyncId = o),
            (n.asyncTo = o ? l : void 0),
            (n.promise = o ? u : void 0));
        }
        return (
          x.fun(s) &&
            O.batchedUpdates(() => {
              s(m, r, r.item);
            }),
          m
        );
      })());
}
function dt(e, t) {
  Ke(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var ii = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
      M(this, "result");
    }
  },
  oi = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
      M(this, "result");
    }
  },
  Vn = (e) => e instanceof ar,
  fl = 1,
  ar = class extends go {
    constructor() {
      super(...arguments);
      M(this, "id", fl++);
      M(this, "_priority", 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(t) {
      this._priority != t && ((this._priority = t), this._onPriorityChange(t));
    }
    get() {
      let t = ee(this);
      return t && t.getValue();
    }
    to(...t) {
      return K.to(this, t);
    }
    interpolate(...t) {
      return za(), K.to(this, t);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(t) {
      t == 1 && this._attach();
    }
    observerRemoved(t) {
      t == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(t, n = !1) {
      lt(this, { type: "change", parent: this, value: t, idle: n });
    }
    _onPriorityChange(t) {
      this.idle || rn.sort(this),
        lt(this, { type: "priority", parent: this, priority: t });
    }
  },
  Ne = Symbol.for("SpringPhase"),
  Lo = 1,
  qn = 2,
  jn = 4,
  bn = (e) => (e[Ne] & Lo) > 0,
  pe = (e) => (e[Ne] & qn) > 0,
  Ue = (e) => (e[Ne] & jn) > 0,
  si = (e, t) => (t ? (e[Ne] |= qn | Lo) : (e[Ne] &= ~qn)),
  ai = (e, t) => (t ? (e[Ne] |= jn) : (e[Ne] &= ~jn)),
  hl = class extends ar {
    constructor(t, n) {
      super();
      M(this, "key");
      M(this, "animation", new cl());
      M(this, "queue");
      M(this, "defaultProps", {});
      M(this, "_state", {
        paused: !1,
        delayed: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set(),
      });
      M(this, "_pendingCalls", new Set());
      M(this, "_lastCallId", 0);
      M(this, "_lastToId", 0);
      M(this, "_memoizedDuration", 0);
      if (!x.und(t) || !x.und(n)) {
        let r = x.obj(t) ? { ...t } : { ...n, from: t };
        x.und(r.default) && (r.default = !0), this.start(r);
      }
    }
    get idle() {
      return !(pe(this) || this._state.asyncTo) || Ue(this);
    }
    get goal() {
      return z(this.animation.to);
    }
    get velocity() {
      let t = ee(this);
      return t instanceof xt
        ? t.lastVelocity || 0
        : t.getPayload().map((n) => n.lastVelocity || 0);
    }
    get hasAnimated() {
      return bn(this);
    }
    get isAnimating() {
      return pe(this);
    }
    get isPaused() {
      return Ue(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(t) {
      let n = !0,
        r = !1,
        i = this.animation,
        { config: o, toValues: s } = i,
        l = ln(i.to);
      !l && H(i.to) && (s = B(z(i.to))),
        i.values.forEach((a, f) => {
          if (a.done) return;
          let h = a.constructor == ft ? 1 : l ? l[f].lastPosition : s[f],
            _ = i.immediate,
            p = h;
          if (!_) {
            if (((p = a.lastPosition), o.tension <= 0)) {
              a.done = !0;
              return;
            }
            let m = (a.elapsedTime += t),
              d = i.fromValues[f],
              g =
                a.v0 != null
                  ? a.v0
                  : (a.v0 = x.arr(o.velocity) ? o.velocity[f] : o.velocity),
              y,
              b =
                o.precision ||
                (d == h ? 0.005 : Math.min(1, Math.abs(h - d) * 0.001));
            if (x.und(o.duration))
              if (o.decay) {
                let v = o.decay === !0 ? 0.998 : o.decay,
                  w = Math.exp(-(1 - v) * m);
                (p = d + (g / (1 - v)) * (1 - w)),
                  (_ = Math.abs(a.lastPosition - p) <= b),
                  (y = g * w);
              } else {
                y = a.lastVelocity == null ? g : a.lastVelocity;
                let v = o.restVelocity || b / 10,
                  w = o.clamp ? 0 : o.bounce,
                  N = !x.und(w),
                  k = d == h ? a.v0 > 0 : d < h,
                  S,
                  V = !1,
                  P = 1,
                  A = Math.ceil(t / P);
                for (
                  let C = 0;
                  C < A &&
                  ((S = Math.abs(y) > v),
                  !(!S && ((_ = Math.abs(h - p) <= b), _)));
                  ++C
                ) {
                  N &&
                    ((V = p == h || p > h == k), V && ((y = -y * w), (p = h)));
                  let q = -o.tension * 1e-6 * (p - h),
                    D = -o.friction * 0.001 * y,
                    he = (q + D) / o.mass;
                  (y = y + he * P), (p = p + y * P);
                }
              }
            else {
              let v = 1;
              o.duration > 0 &&
                (this._memoizedDuration !== o.duration &&
                  ((this._memoizedDuration = o.duration),
                  a.durationProgress > 0 &&
                    ((a.elapsedTime = o.duration * a.durationProgress),
                    (m = a.elapsedTime += t))),
                (v = (o.progress || 0) + m / this._memoizedDuration),
                (v = v > 1 ? 1 : v < 0 ? 0 : v),
                (a.durationProgress = v)),
                (p = d + o.easing(v) * (h - d)),
                (y = (p - a.lastPosition) / t),
                (_ = v == 1);
            }
            (a.lastVelocity = y),
              Number.isNaN(p) &&
                (console.warn("Got NaN while animating:", this), (_ = !0));
          }
          l && !l[f].done && (_ = !1),
            _ ? (a.done = !0) : (n = !1),
            a.setValue(p, o.round) && (r = !0);
        });
      let u = ee(this),
        c = u.getValue();
      if (n) {
        let a = z(i.to);
        (c !== a || r) && !o.decay
          ? (u.setValue(a), this._onChange(a))
          : r && o.decay && this._onChange(c),
          this._stop();
      } else r && this._onChange(c);
    }
    set(t) {
      return (
        O.batchedUpdates(() => {
          this._stop(), this._focus(t), this._set(t);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (pe(this)) {
        let { to: t, config: n } = this.animation;
        O.batchedUpdates(() => {
          this._onStart(), n.decay || this._set(t, !1), this._stop();
        });
      }
      return this;
    }
    update(t) {
      return (this.queue || (this.queue = [])).push(t), this;
    }
    start(t, n) {
      let r;
      return (
        x.und(t)
          ? ((r = this.queue || []), (this.queue = []))
          : (r = [x.obj(t) ? t : { ...n, to: t }]),
        Promise.all(r.map((i) => this._update(i))).then((i) => sr(this, i))
      );
    }
    stop(t) {
      let { to: n } = this.animation;
      return (
        this._focus(this.get()),
        dt(this._state, t && this._lastCallId),
        O.batchedUpdates(() => this._stop(n, t)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(t) {
      t.type == "change"
        ? this._start()
        : t.type == "priority" && (this.priority = t.priority + 1);
    }
    _prepareNode(t) {
      let n = this.key || "",
        { to: r, from: i } = t;
      (r = x.obj(r) ? r[n] : r),
        (r == null || En(r)) && (r = void 0),
        (i = x.obj(i) ? i[n] : i),
        i == null && (i = void 0);
      let o = { to: r, from: i };
      return (
        bn(this) ||
          (t.reverse && ([r, i] = [i, r]),
          (i = z(i)),
          x.und(i) ? ee(this) || this._set(r) : this._set(i)),
        o
      );
    }
    _update({ ...t }, n) {
      let { key: r, defaultProps: i } = this;
      t.default &&
        Object.assign(
          i,
          or(t, (l, u) => (/^on/.test(u) ? ko(l, r) : l))
        ),
        ui(this, t, "onProps"),
        He(this, "onProps", t, this);
      let o = this._prepareNode(t);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      let s = this._state;
      return So(++this._lastCallId, {
        key: r,
        props: t,
        defaultProps: i,
        state: s,
        actions: {
          pause: () => {
            Ue(this) ||
              (ai(this, !0),
              Xe(s.pauseQueue),
              He(this, "onPause", W(this, Be(this, this.animation.to)), this));
          },
          resume: () => {
            Ue(this) &&
              (ai(this, !1),
              pe(this) && this._resume(),
              Xe(s.resumeQueue),
              He(this, "onResume", W(this, Be(this, this.animation.to)), this));
          },
          start: this._merge.bind(this, o),
        },
      }).then((l) => {
        if (t.loop && l.finished && !(n && l.noop)) {
          let u = Eo(t);
          if (u) return this._update(u, !0);
        }
        return l;
      });
    }
    _merge(t, n, r) {
      if (n.cancel) return this.stop(!0), r(Ie(this));
      let i = !x.und(t.to),
        o = !x.und(t.from);
      if (i || o)
        if (n.callId > this._lastToId) this._lastToId = n.callId;
        else return r(Ie(this));
      let { key: s, defaultProps: l, animation: u } = this,
        { to: c, from: a } = u,
        { to: f = c, from: h = a } = t;
      o && !i && (!n.default || x.und(f)) && (f = h),
        n.reverse && ([f, h] = [h, f]);
      let _ = !oe(h, a);
      _ && (u.from = h), (h = z(h));
      let p = !oe(f, c);
      p && this._focus(f);
      let m = En(n.to),
        { config: d } = u,
        { decay: g, velocity: y } = d;
      (i || o) && (d.velocity = 0),
        n.config &&
          !m &&
          ul(
            d,
            ke(n.config, s),
            n.config !== l.config ? ke(l.config, s) : void 0
          );
      let b = ee(this);
      if (!b || x.und(f)) return r(W(this, !0));
      let v = x.und(n.reset) ? o && !n.default : !x.und(h) && tt(n.reset, s),
        w = v ? h : this.get(),
        N = ht(f),
        k = x.num(N) || x.arr(N) || an(N),
        S = !m && (!k || tt(l.immediate || n.immediate, s));
      if (p) {
        let C = Ln(f);
        if (C !== b.constructor)
          if (S) b = this._set(N);
          else
            throw Error(
              `Cannot animate between ${b.constructor.name} and ${C.name}, as the "to" prop suggests`
            );
      }
      let V = b.constructor,
        P = H(f),
        A = !1;
      if (!P) {
        let C = v || (!bn(this) && _);
        (p || C) && ((A = oe(ht(w), N)), (P = !A)),
          ((!oe(u.immediate, S) && !S) ||
            !oe(d.decay, g) ||
            !oe(d.velocity, y)) &&
            (P = !0);
      }
      if (
        (A && pe(this) && (u.changed && !v ? (P = !0) : P || this._stop(c)),
        !m &&
          ((P || H(c)) &&
            ((u.values = b.getPayload()),
            (u.toValues = H(f) ? null : V == ft ? [1] : B(N))),
          u.immediate != S && ((u.immediate = S), !S && !v && this._set(c)),
          P))
      ) {
        let { onRest: C } = u;
        E(pl, (D) => ui(this, n, D));
        let q = W(this, Be(this, c));
        Xe(this._pendingCalls, q),
          this._pendingCalls.add(r),
          u.changed &&
            O.batchedUpdates(() => {
              var D;
              (u.changed = !v),
                C == null || C(q, this),
                v
                  ? ke(l.onRest, q)
                  : (D = u.onStart) == null || D.call(u, q, this);
            });
      }
      v && this._set(w),
        m
          ? r(Oo(n.to, n, this._state, this))
          : P
          ? this._start()
          : pe(this) && !p
          ? this._pendingCalls.add(r)
          : r(No(w));
    }
    _focus(t) {
      let n = this.animation;
      t !== n.to &&
        (Yr(this) && this._detach(), (n.to = t), Yr(this) && this._attach());
    }
    _attach() {
      let t = 0,
        { to: n } = this.animation;
      H(n) && (Re(n, this), Vn(n) && (t = n.priority + 1)), (this.priority = t);
    }
    _detach() {
      let { to: t } = this.animation;
      H(t) && ut(t, this);
    }
    _set(t, n = !0) {
      let r = z(t);
      if (!x.und(r)) {
        let i = ee(this);
        if (!i || !oe(r, i.getValue())) {
          let o = Ln(r);
          !i || i.constructor != o ? ir(this, o.create(r)) : i.setValue(r),
            i &&
              O.batchedUpdates(() => {
                this._onChange(r, n);
              });
        }
      }
      return ee(this);
    }
    _onStart() {
      let t = this.animation;
      t.changed ||
        ((t.changed = !0), He(this, "onStart", W(this, Be(this, t.to)), this));
    }
    _onChange(t, n) {
      n || (this._onStart(), ke(this.animation.onChange, t, this)),
        ke(this.defaultProps.onChange, t, this),
        super._onChange(t, n);
    }
    _start() {
      let t = this.animation;
      ee(this).reset(z(t.to)),
        t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)),
        pe(this) || (si(this, !0), Ue(this) || this._resume());
    }
    _resume() {
      K.skipAnimation ? this.finish() : rn.start(this);
    }
    _stop(t, n) {
      if (pe(this)) {
        si(this, !1);
        let r = this.animation;
        E(r.values, (o) => {
          o.done = !0;
        }),
          r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
          lt(this, { type: "idle", parent: this });
        let i = n
          ? Ie(this.get())
          : W(this.get(), Be(this, t != null ? t : r.to));
        Xe(this._pendingCalls, i),
          r.changed && ((r.changed = !1), He(this, "onRest", i, this));
      }
    }
  };
function Be(e, t) {
  let n = ht(t),
    r = ht(e.get());
  return oe(r, n);
}
function Eo(e, t = e.loop, n = e.to) {
  let r = ke(t);
  if (r) {
    let i = r !== !0 && Ao(r),
      o = (i || e).reverse,
      s = !i || i.reset;
    return pt({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !o || En(n) ? n : void 0,
      from: s ? e.from : void 0,
      reset: s,
      ...i,
    });
  }
}
function pt(e) {
  let { to: t, from: n } = (e = Ao(e)),
    r = new Set();
  return (
    x.obj(t) && li(t, r),
    x.obj(n) && li(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function dl(e) {
  let t = pt(e);
  return x.und(t.default) && (t.default = or(t)), t;
}
function li(e, t) {
  ne(e, (n, r) => n != null && t.add(r));
}
var pl = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function ui(e, t, n) {
  e.animation[n] = t[n] !== Co(t, n) ? ko(t[n], e.key) : void 0;
}
function He(e, t, ...n) {
  var r, i, o, s;
  (i = (r = e.animation)[t]) == null || i.call(r, ...n),
    (s = (o = e.defaultProps)[t]) == null || s.call(o, ...n);
}
var ml = ["onStart", "onChange", "onRest"],
  _l = 1,
  gl = class {
    constructor(e, t) {
      M(this, "id", _l++);
      M(this, "springs", {});
      M(this, "queue", []);
      M(this, "ref");
      M(this, "_flush");
      M(this, "_initialProps");
      M(this, "_lastAsyncId", 0);
      M(this, "_active", new Set());
      M(this, "_changed", new Set());
      M(this, "_started", !1);
      M(this, "_item");
      M(this, "_state", {
        paused: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set(),
      });
      M(this, "_events", {
        onStart: new Map(),
        onChange: new Map(),
        onRest: new Map(),
      });
      (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      let e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (let t in e) {
        let n = e[t];
        x.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(pt(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = B(e).map(pt)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (Io(this, t), In(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        let n = this.springs;
        E(B(t), (r) => n[r].stop(!!e));
      } else dt(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (x.und(e)) this.start({ pause: !0 });
      else {
        let t = this.springs;
        E(B(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (x.und(e)) this.start({ pause: !1 });
      else {
        let t = this.springs;
        E(B(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      ne(this.springs, e);
    }
    _onFrame() {
      let { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        i = this._changed.size > 0;
      ((r && !this._started) || (i && !this._started)) &&
        ((this._started = !0),
        Ke(e, ([l, u]) => {
          (u.value = this.get()), l(u, this, this._item);
        }));
      let o = !r && this._started,
        s = i || (o && n.size) ? this.get() : null;
      i &&
        t.size &&
        Ke(t, ([l, u]) => {
          (u.value = s), l(u, this, this._item);
        }),
        o &&
          ((this._started = !1),
          Ke(n, ([l, u]) => {
            (u.value = s), l(u, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      O.onFrame(this._onFrame);
    }
  };
function In(e, t) {
  return Promise.all(t.map((n) => To(e, n))).then((n) => sr(e, n));
}
async function To(e, t, n) {
  let { keys: r, to: i, from: o, loop: s, onRest: l, onResolve: u } = t,
    c = x.obj(t.default) && t.default;
  s && (t.loop = !1), i === !1 && (t.to = null), o === !1 && (t.from = null);
  let a = x.arr(i) || x.fun(i) ? i : void 0;
  a
    ? ((t.to = void 0), (t.onRest = void 0), c && (c.onRest = void 0))
    : E(ml, (m) => {
        let d = t[m];
        if (x.fun(d)) {
          let g = e._events[m];
          (t[m] = ({ finished: y, cancelled: b }) => {
            let v = g.get(d);
            v
              ? (y || (v.finished = !1), b && (v.cancelled = !0))
              : g.set(d, {
                  value: null,
                  finished: y || !1,
                  cancelled: b || !1,
                });
          }),
            c && (c[m] = t[m]);
        }
      });
  let f = e._state;
  t.pause === !f.paused
    ? ((f.paused = t.pause), Xe(t.pause ? f.pauseQueue : f.resumeQueue))
    : f.paused && (t.pause = !0);
  let h = (r || Object.keys(e.springs)).map((m) => e.springs[m].start(t)),
    _ = t.cancel === !0 || Co(t, "cancel") === !0;
  (a || (_ && f.asyncId)) &&
    h.push(
      So(++e._lastAsyncId, {
        props: t,
        state: f,
        actions: {
          pause: Nn,
          resume: Nn,
          start(m, d) {
            _
              ? (dt(f, e._lastAsyncId), d(Ie(e)))
              : ((m.onRest = l), d(Oo(a, m, f, e)));
          },
        },
      })
    ),
    f.paused &&
      (await new Promise((m) => {
        f.resumeQueue.add(m);
      }));
  let p = sr(e, await Promise.all(h));
  if (s && p.finished && !(n && p.noop)) {
    let m = Eo(t, s, i);
    if (m) return Io(e, [m]), To(e, m, !0);
  }
  return u && O.batchedUpdates(() => u(p, e, e.item)), p;
}
function ci(e, t) {
  let n = { ...e.springs };
  return (
    t &&
      E(B(t), (r) => {
        x.und(r.keys) && (r = pt(r)),
          x.obj(r.to) || (r = { ...r, to: void 0 }),
          jo(n, r, (i) => qo(i));
      }),
    Vo(e, n),
    n
  );
}
function Vo(e, t) {
  ne(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), Re(n, e));
  });
}
function qo(e, t) {
  let n = new hl();
  return (n.key = e), t && Re(n, t), n;
}
function jo(e, t, n) {
  t.keys &&
    E(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function Io(e, t) {
  E(t, (n) => {
    jo(e.springs, n, (r) => qo(r, e));
  });
}
var cn = ({ children: e, ...t }) => {
    let n = Li(Qt),
      r = t.pause || !!n.pause,
      i = t.immediate || !!n.immediate;
    t = Ha(() => ({ pause: r, immediate: i }), [r, i]);
    let { Provider: o } = Qt;
    return Ae(o, { value: t }, e);
  },
  Qt = yl(cn, {});
cn.Provider = Qt.Provider;
cn.Consumer = Qt.Consumer;
function yl(e, t) {
  return (
    Object.assign(e, Ko(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var vl = () => {
  let e = [],
    t = function (r) {
      Ua();
      let i = [];
      return (
        E(e, (o, s) => {
          if (x.und(r)) i.push(o.start());
          else {
            let l = n(r, o, s);
            l && i.push(o.start(l));
          }
        }),
        i
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      let i = e.indexOf(r);
      ~i && e.splice(i, 1);
    }),
    (t.pause = function () {
      return E(e, (r) => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return E(e, (r) => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      E(e, (i, o) => {
        let s = x.fun(r) ? r(o, i) : r;
        s && i.set(s);
      });
    }),
    (t.start = function (r) {
      let i = [];
      return (
        E(e, (o, s) => {
          if (x.und(r)) i.push(o.start());
          else {
            let l = this._getProps(r, o, s);
            l && i.push(o.start(l));
          }
        }),
        i
      );
    }),
    (t.stop = function () {
      return E(e, (r) => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return E(e, (i, o) => i.update(this._getProps(r, i, o))), this;
    });
  let n = function (r, i, o) {
    return x.fun(r) ? r(o, i) : r;
  };
  return (t._getProps = n), t;
};
function bl(e, t, n) {
  let r = x.fun(t) && t;
  r && !n && (n = []);
  let i = Y(() => (r || arguments.length == 3 ? vl() : void 0), []),
    o = ce(0),
    s = wo(),
    l = Y(
      () => ({
        ctrls: [],
        queue: [],
        flush(g, y) {
          let b = ci(g, y);
          return o.current > 0 &&
            !l.queue.length &&
            !Object.keys(b).some((v) => !g.springs[v])
            ? In(g, y)
            : new Promise((v) => {
                Vo(g, b),
                  l.queue.push(() => {
                    v(In(g, y));
                  }),
                  s();
              });
        },
      }),
      []
    ),
    u = ce([...l.ctrls]),
    c = [],
    a = Jr(e) || 0;
  Y(() => {
    E(u.current.slice(e, a), (g) => {
      ol(g, i), g.stop(!0);
    }),
      (u.current.length = e),
      f(a, e);
  }, [e]),
    Y(() => {
      f(0, Math.min(a, e));
    }, n);
  function f(g, y) {
    for (let b = g; b < y; b++) {
      let v = u.current[b] || (u.current[b] = new gl(null, l.flush)),
        w = r ? r(b, v) : t[b];
      w && (c[b] = dl(w));
    }
  }
  let h = u.current.map((g, y) => ci(g, c[y])),
    _ = Li(cn),
    p = Jr(_),
    m = _ !== p && il(_);
  rr(() => {
    o.current++, (l.ctrls = u.current);
    let { queue: g } = l;
    g.length && ((l.queue = []), E(g, (y) => y())),
      E(u.current, (y, b) => {
        i == null || i.add(y), m && y.start({ default: _ });
        let v = c[b];
        v && (sl(y, v.ref), y.ref ? y.queue.push(v) : y.start(v));
      });
  }),
    $o(() => () => {
      E(l.ctrls, (g) => g.stop(!0));
    });
  let d = h.map((g) => ({ ...g }));
  return i ? [d, i] : d;
}
function Do(e, t) {
  let n = x.fun(e),
    [[r], i] = bl(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, i] : r;
}
var xl = class extends ar {
  constructor(t, n) {
    super();
    M(this, "key");
    M(this, "idle", !0);
    M(this, "calc");
    M(this, "_active", new Set());
    (this.source = t), (this.calc = at(...n));
    let r = this._get(),
      i = Ln(r);
    ir(this, i.create(r));
  }
  advance(t) {
    let n = this._get(),
      r = this.get();
    oe(n, r) || (ee(this).setValue(n), this._onChange(n, this.idle)),
      !this.idle && fi(this._active) && xn(this);
  }
  _get() {
    let t = x.arr(this.source) ? this.source.map(z) : B(z(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle &&
      !fi(this._active) &&
      ((this.idle = !1),
      E(ln(this), (t) => {
        t.done = !1;
      }),
      K.skipAnimation
        ? (O.batchedUpdates(() => this.advance()), xn(this))
        : rn.start(this));
  }
  _attach() {
    let t = 1;
    E(B(this.source), (n) => {
      H(n) && Re(n, this),
        Vn(n) &&
          (n.idle || this._active.add(n), (t = Math.max(t, n.priority + 1)));
    }),
      (this.priority = t),
      this._start();
  }
  _detach() {
    E(B(this.source), (t) => {
      H(t) && ut(t, this);
    }),
      this._active.clear(),
      xn(this);
  }
  eventObserved(t) {
    t.type == "change"
      ? t.idle
        ? this.advance()
        : (this._active.add(t.parent), this._start())
      : t.type == "idle"
      ? this._active.delete(t.parent)
      : t.type == "priority" &&
        (this.priority = B(this.source).reduce(
          (n, r) => Math.max(n, (Vn(r) ? r.priority : 0) + 1),
          0
        ));
  }
};
function wl(e) {
  return e.idle !== !1;
}
function fi(e) {
  return !e.size || Array.from(e).every(wl);
}
function xn(e) {
  e.idle ||
    ((e.idle = !0),
    E(ln(e), (t) => {
      t.done = !0;
    }),
    lt(e, { type: "idle", parent: e }));
}
K.assign({ createStringInterpolator: bo, to: (e, t) => new xl(e, t) });
var Fo = /^--/;
function $l(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !Fo.test(e) &&
      !(nt.hasOwnProperty(e) && nt[e])
    ? t + "px"
    : ("" + t).trim();
}
var hi = {};
function Ml(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  let n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: i,
      scrollTop: o,
      scrollLeft: s,
      viewBox: l,
      ...u
    } = t,
    c = Object.values(u),
    a = Object.keys(u).map((f) =>
      n || e.hasAttribute(f)
        ? f
        : hi[f] || (hi[f] = f.replace(/([A-Z])/g, (h) => "-" + h.toLowerCase()))
    );
  i !== void 0 && (e.textContent = i);
  for (let f in r)
    if (r.hasOwnProperty(f)) {
      let h = $l(f, r[f]);
      Fo.test(f) ? e.style.setProperty(f, h) : (e.style[f] = h);
    }
  a.forEach((f, h) => {
    e.setAttribute(f, c[h]);
  }),
    o !== void 0 && (e.scrollTop = o),
    s !== void 0 && (e.scrollLeft = s),
    l !== void 0 && e.setAttribute("viewBox", l);
}
var nt = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Pl = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  kl = ["Webkit", "Ms", "Moz", "O"];
nt = Object.keys(nt).reduce(
  (e, t) => (kl.forEach((n) => (e[Pl(n, t)] = e[t])), e),
  nt
);
var Cl = /^(matrix|translate|scale|rotate|skew)/,
  Al = /^(translate)/,
  Sl = /^(rotate|skew)/,
  wn = (e, t) => (x.num(e) && e !== 0 ? e + t : e),
  Tt = (e, t) =>
    x.arr(e)
      ? e.every((n) => Tt(n, t))
      : x.num(e)
      ? e === t
      : parseFloat(e) === t,
  Nl = class extends un {
    constructor({ x: e, y: t, z: n, ...r }) {
      let i = [],
        o = [];
      (e || t || n) &&
        (i.push([e || 0, t || 0, n || 0]),
        o.push((s) => [
          `translate3d(${s.map((l) => wn(l, "px")).join(",")})`,
          Tt(s, 0),
        ])),
        ne(r, (s, l) => {
          if (l === "transform")
            i.push([s || ""]), o.push((u) => [u, u === ""]);
          else if (Cl.test(l)) {
            if ((delete r[l], x.und(s))) return;
            let u = Al.test(l) ? "px" : Sl.test(l) ? "deg" : "";
            i.push(B(s)),
              o.push(
                l === "rotate3d"
                  ? ([c, a, f, h]) => [
                      `rotate3d(${c},${a},${f},${wn(h, u)})`,
                      Tt(h, 0),
                    ]
                  : (c) => [
                      `${l}(${c.map((a) => wn(a, u)).join(",")})`,
                      Tt(c, l.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        i.length && (r.transform = new Ol(i, o)),
        super(r);
    }
  },
  Ol = class extends go {
    constructor(t, n) {
      super();
      M(this, "_value", null);
      (this.inputs = t), (this.transforms = n);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let t = "",
        n = !0;
      return (
        E(this.inputs, (r, i) => {
          let o = z(r[0]),
            [s, l] = this.transforms[i](x.arr(o) ? o : r.map(z));
          (t += " " + s), (n = n && l);
        }),
        n ? "none" : t
      );
    }
    observerAdded(t) {
      t == 1 && E(this.inputs, (n) => E(n, (r) => H(r) && Re(r, this)));
    }
    observerRemoved(t) {
      t == 0 && E(this.inputs, (n) => E(n, (r) => H(r) && ut(r, this)));
    }
    eventObserved(t) {
      t.type == "change" && (this._value = null), lt(this, t);
    }
  },
  Ll = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
K.assign({ batchedUpdates: ha, createStringInterpolator: bo, colors: ba });
var El = Ka(Ll, {
    applyAnimatedValues: Ml,
    createAnimatedStyle: (e) => new Nl(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  zo = El.animated;
const Tl = (e, t) => {
  const [{ x: n, y: r }, i] = Do(() => ({ x: 0, y: 0, ...e }), t);
  return (
    ue(() => {
      const o = (s) => {
        const l = "ontouchstart" in window || navigator.msMaxTouchPoints,
          u = l ? s.touches[0].clientX : s.clientX,
          c = l ? s.touches[0].clientY : s.clientY;
        i.start({ x: u, y: c });
      };
      return (
        window.addEventListener("mousemove", o),
        window.addEventListener("touchstart", o),
        window.addEventListener("touchmove", o),
        () => {
          window.removeEventListener("mousemove", o),
            window.removeEventListener("touchstart", o),
            window.removeEventListener("touchmove", o);
        }
      );
    }, [i]),
    Y(() => ({ x: n, y: r }), [n, r])
  );
};
var Vl = 0;
function L(e, t, n, r, i, o) {
  var s,
    l,
    u = {};
  for (l in t) l == "ref" ? (s = t[l]) : (u[l] = t[l]);
  var c = {
    type: e,
    props: u,
    key: n,
    ref: s,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    __h: null,
    constructor: void 0,
    __v: --Vl,
    __source: i,
    __self: o,
  };
  if (typeof e == "function" && (s = e.defaultProps))
    for (l in s) u[l] === void 0 && (u[l] = s[l]);
  return $.vnode && $.vnode(c), c;
}
function ql({
  children: e,
  width: t,
  height: n,
  m: r,
  cover: i,
  noimage: o,
  frontend: s,
  ...l
}) {
  const u = ce(),
    [c, a] = Dl(u);
  let f = { x: 0, y: 0, width: 0, height: 0 };
  if (!window.isBrowser) {
    const _ = _t(e);
    f = tn(_);
  }
  const h = L("g", {
    filter: "url(#HighRelief)",
    transform: `translate(${-f.x}, ${-f.y})`,
    children: e,
  });
  return L(Z, {
    children: [
      L(Il, { script: ea }),
      L("svg", {
        ref: u,
        viewBox: `0 0 ${c || f.width} ${a || f.height}`,
        style: "margin:" + r + "px",
        width: o ? void 0 : t || "100%",
        height: o ? void 0 : n || "100%",
        xmlns: o ? void 0 : "http://www.w3.org/2000/svg",
        preserveAspectRatio: i ? "xMidYMid slice" : void 0,
        ...l,
        children: [
          L("rect", {
            height: "100%",
            width: "100%",
            fill: "#323232",
            filter: "url(#LowRelief)",
          }),
          L(jl, { width: c || f.width, height: a || f.height }),
          h,
        ],
      }),
    ],
  });
}
const jl = (e) => {
  const [t, n] = te(e.width / 2),
    [r, i] = te(e.height / 2),
    [o, s] = te(1e4);
  return (
    window.isBrowser &&
      (Tl(
        {
          onChange: ({ value: l }) => {
            n((l.x / window.innerWidth) * e.width),
              i((l.y / window.innerHeight) * e.height);
          },
        },
        [window.innerWidth, window.innerHeight, e.width, e.height]
      ),
      Fl("wheel", (l) => {
        l.deltaY < 0 ? s((u) => u + 2e3) : s((u) => u - 2e3);
      })),
    L(Z, {
      children: [
        L("filter", {
          id: "HighRelief",
          children: [
            L("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "10000",
              result: "blur",
            }),
            L("feDiffuseLighting", {
              in: "blur",
              surfaceScale: "0.5",
              children: L("fePointLight", { x: t, y: r, z: o }),
            }),
            L("feComposite", {
              in: "SourceGraphic",
              operator: "arithmetic",
              k1: "1",
              k2: "0",
              k3: "0",
              k4: "0",
            }),
          ],
        }),
        L("filter", {
          id: "LowRelief",
          children: [
            L("feGaussianBlur", {
              in: "SourceAlpha",
              stdDeviation: "0.08",
              result: "blur",
            }),
            L("feDiffuseLighting", {
              in: "blur",
              surfaceScale: "-25",
              children: L("fePointLight", { z: "20" }),
            }),
            L("feComposite", {
              in: "SourceGraphic",
              operator: "arithmetic",
              k1: "1",
              k2: "0",
              k3: "0",
              k4: "0",
            }),
          ],
        }),
      ],
    })
  );
};
function Il({ script: e }) {
  return window.isBrowser
    ? L("script", { children: [e.toString(), `${e.name}()`] })
    : null;
}
function Dl(e) {
  const [t, n] = te(),
    [r, i] = te();
  return (
    Oi(() => {
      const o = e.current.getBBox();
      n(Math.round(o.width)), i(Math.round(o.height));
    }),
    [t, r]
  );
}
function Fl(e, t, n = window) {
  const r = ce();
  ue(() => {
    r.current = t;
  }, [t]),
    ue(() => {
      if (!(n && n.addEventListener)) return;
      const o = (s) => r.current(s);
      return (
        n.addEventListener(e, o),
        () => {
          n.removeEventListener(e, o);
        }
      );
    }, [e, n]);
}
function zl(e, { id: t, render: n = "fileRef", general: r, ...i }) {
  if (!t) return e;
  const s = `./Cache/${r ? "general" : t}.svg`,
    l = r ? "#" + t : "#c";
  if (globalThis.isBrowser)
    return n === "inline" || a
      ? e
      : L("use", { href: (n === "dataURI" && u ? Lt(u) : s) + l, ...i });
  try {
    Deno.statSync(s);
    const u = Deno.readTextFileSync(s);
    return n === "inline"
      ? di(u)
      : L("use", { href: (n === "dataURI" ? Lt(u) : s) + l, ...i });
  } catch {
    const u = no(e, r ? t : "c");
    return (
      Deno.writeTextFile(s, u, { create: !0 }),
      u === "dataURI" ? L("use", { href: Lt(u) + l, ...i }) : di(u)
    );
  }
}
function di(e) {
  return Y(() => {
    const t = /<path[^>]*>/g;
    return [...e.matchAll(t)].map((r, i) => {
      const o = Rl(r);
      return L("path", { ...o });
    });
  }, [e]);
}
function Rl(e) {
  const t = {},
    n = e[0],
    r = /(\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/gi;
  let i;
  for (; (i = r.exec(n)); ) t[i[1]] = i[2];
  return t;
}
const Ul = ({ children: e, dataURI: t, ...n }) => {
    ue(() => {
      i(e);
    }, [e]);
    const [r, i] = te(e),
      o = _t(r);
    if (t) {
      const l = no(r, "c");
      return L("use", { href: Lt(l) + "#c", ...n });
    }
    const s = Y(
      () => o.map((l) => l.props.originalD || l.props.d).join(""),
      [o]
    );
    return L("path", {
      d: s,
      ...n,
      children: o.map((l, u) => l.props.children),
    });
  },
  Ee = (e, t, n) => {
    const [r, i] = e,
      [o, s] = t;
    return [r + (o - r) * n, i + (s - i) * n];
  },
  Bl = (e) => {
    const n = e.slice(0, 2),
      r = e.slice(2, 4),
      i = e.slice(4, 6),
      o = e.slice(6, 8),
      s = Ee(n, r, 0.5),
      l = Ee(r, i, 0.5),
      u = Ee(i, o, 0.5),
      c = Ee(s, l, 0.5),
      a = Ee(l, u, 0.5),
      f = Ee(c, a, 0.5);
    return [
      ["C", ...s, ...c, ...f],
      ["C", ...a, ...u, ...o],
    ];
  };
function Ro(e, t, n, r) {
  if (n) {
    const o = Uo(e, t);
    (e = le.pathToString(o[0])), (t = le.pathToString(o[1]));
  }
  return {
    ...Do({
      from: { d: e },
      to: { d: t },
      config: { mass: 0.3, tension: 280, friction: 80, ...r },
      loop: { reverse: !0 },
    }),
    originalD: e,
    transformeD: t,
  };
}
function pi(e) {
  return le
    .pathToCurve(le.splitPath(le.pathToAbsolute(e))[0])
    .map((t, n, r) => {
      const i = n && [...r[n - 1].slice(-2), ...t.slice(1)],
        o = n ? Zl(...i).length : 0;
      let s;
      return n ? (s = o ? Bl(i) : [t, t]) : (s = [t]), { s: t, ss: s, l: o };
    });
}
function Uo(e, t, n) {
  const r = pi(e),
    i = pi(t),
    o = r.length,
    s = i.length,
    l = r.filter((d) => d.l).length,
    u = i.filter((d) => d.l).length,
    c = r.filter((d) => d.l).reduce((d, { l: g }) => d + g, 0) / l || 0,
    a = i.filter((d) => d.l).reduce((d, { l: g }) => d + g, 0) / u || 0,
    f = n || Math.max(o, s),
    h = [c, a],
    _ = [f - o, f - s];
  let p = 0;
  const m = [r, i].map((d, g) =>
    d.l === f
      ? d.map((y) => y.s)
      : d
          .map(
            (y, b) => (
              (p = b && _[g] && y.l >= h[g]),
              (_[g] -= p ? 1 : 0),
              p ? y.ss : [y.s]
            )
          )
          .flat()
  );
  return m[0].length === m[1].length ? m : Uo(m[0], m[1], f);
}
const Hl = (e, t, n, r, i, o, s, l, u) => {
    const c = 1 - u;
    return {
      x: c ** 3 * e + 3 * c ** 2 * u * n + 3 * c * u ** 2 * i + u ** 3 * s,
      y: c ** 3 * t + 3 * c ** 2 * u * r + 3 * c * u ** 2 * o + u ** 3 * l,
    };
  },
  Ql = (e, t) =>
    Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1])),
  Zl = (e, t, n, r, i, o, s, l, u) => {
    const c = typeof u == "number";
    let a = e,
      f = t,
      h = 0,
      _ = [a, f, h],
      p = [a, f],
      m = 0,
      d = { x: 0, y: 0 },
      g = [{ x: a, y: f }];
    c && u <= 0 && (d = { x: a, y: f });
    const y = 300;
    for (let b = 0; b <= y; b += 1) {
      if (
        ((m = b / y),
        ({ x: a, y: f } = Hl(e, t, n, r, i, o, s, l, m)),
        (g = [...g, { x: a, y: f }]),
        (h += Ql(p, [a, f])),
        (p = [a, f]),
        c && h > u && u > _[2])
      ) {
        const v = (h - u) / (h - _[2]);
        d = { x: p[0] * (1 - v) + _[0] * v, y: p[1] * (1 - v) + _[1] * v };
      }
      _ = [a, f, h];
    }
    return (
      c && u >= h && (d = { x: s, y: l }),
      {
        length: h,
        point: d,
        min: {
          x: Math.min(...g.map((b) => b.x)),
          y: Math.min(...g.map((b) => b.y)),
        },
        max: {
          x: Math.max(...g.map((b) => b.x)),
          y: Math.max(...g.map((b) => b.y)),
        },
      }
    );
  };
le.options.round = 0;
function Dn(e, t) {
  let n = "";
  try {
    n = new le(e);
    const {
      flipX: r,
      flipY: i,
      rotate: o,
      scale: s,
      scaleX: l,
      scaleY: u,
      x: c = 0,
      y: a = 0,
      origin: f,
      optimize: h,
      reverse: _,
    } = t;
    r && n.transform({ rotate: [0, 180, 0], origin: f }),
      i && n.transform({ rotate: [180, 0, 0], origin: f }),
      o && n.transform({ rotate: o, origin: f }),
      (s || l || u) &&
        n.transform({ origin: f, scale: [l || s || 1, u || s || 1] }),
      (c || a) && n.transform({ translate: [c, a] }),
      h && n.optimize().optimize();
  } catch {
    console.error("tried to transform an element that was not a path");
  }
  return n.toString();
}
const rt = ({ children: e, animated: t, merged: n = !0, ...r }) => {
    if ((e == null ? void 0 : e.type) === "use") return e;
    const i = _t(e),
      o = tn(i),
      s = n ? [o.cx, o.cy] : void 0;
    return t
      ? L(Xl, { origin: s, ...r, children: i })
      : L(Bo, { origin: s, ...r, children: i });
  },
  Bo = ({ children: e, fill: t, ...n }) =>
    e.map((r) => {
      const { transformeD: i, originalD: o, d: s, ...l } = r.props,
        u = Dn(i || s, { ...n });
      if (i) {
        const c = Dn(o || s, { ...n });
        return L(zo.path, { ...Ro(c, u, !1) });
      }
      return L("path", { ...l, d: u });
    }),
  Xl = ({ children: e, style: t, reverse: n, morph: r, loop: i, ...o }) =>
    window.isBrowser
      ? e.map((s) => {
          const { transformeD: l, originalD: u, d: c, ...a } = s.props,
            f = Dn(l || c, { ...o }),
            h = u || c;
          return L(zo.path, { ...a, ...Ro(h, f, r, {}) });
        })
      : n
      ? L(Bo, { ...o, children: e })
      : e;
function Wl(e, t) {
  let n = e;
  const {
      x: r,
      y: i,
      flipX: o,
      flipY: s,
      rotate: l,
      scale: u,
      optimize: c,
      fill: a,
      animated: f,
      loop: h,
      morph: _,
    } = t,
    { id: p, render: m, general: d } = t,
    g = {
      x: r,
      y: i,
      flipX: o,
      flipY: s,
      rotate: l,
      scale: u,
      optimize: c,
      fill: a,
      animated: f,
      loop: h,
      morph: _,
    },
    y = { id: p, render: m, general: d };
  return (
    (n = rt({ children: n, ...g })),
    (n = zl(n, y)),
    t.merged && (n = Ul({ children: n, dataURI: m === "dataURI" })),
    n
  );
}
const Yl = ({
  scaledPattern: e,
  width: t,
  height: n,
  spacing: r = 0,
  vSpacing: i = r,
  hSpacing: o = r,
  children: s,
  onlyLogo: l,
  halfWidth: u = !0,
  evenOddVerticalFlip: c = !0,
  evenOddHorizontalFlip: a,
  ...f
}) => {
  const h = _t(s),
    _ = tn(h);
  l && ((n = 5), (t = 9), (u = !0), (i = is(r) * 2));
  const p = Y(
    () =>
      (l
        ? [
            4, 12, 13, 14, 20, 21, 23, 24, 28, 29, 30, 33, 34, 36, 37, 39, 40,
            43, 44,
          ]
        : Array.from({ length: t * n }, (g, y) => y)
      ).map((g) =>
        L(rt, {
          merged: !1,
          scale: e ? (br(g) ? 0.5 : 1) : void 0,
          x: (g % t) * (o + _.width) - (u ? (_.width / 2) * (g % t) : 0),
          y: Math.floor(g / t) * (i + _.height),
          flipX: br(g),
          flipY: ((g % t) + Math.floor(g / t)) % 2 === 1 && c,
          children: h,
        })
      ),
    [h, n, o, l, t, i, c, u]
  );
  return Wl(p, f);
};
window.retroCompatible = !1;
function Gl() {
  const e = L("path", {
    d: "M4640 8517L6187 10645H9281L6187 6387L7734 4259L12375 10646H15469L7734 0L0 10645H3094L4640 8517Z",
  });
  return L(ql, {
    cover: !0,
    children: L(Yl, {
      width: 20,
      height: 10,
      spacing: 1e4,
      children: [
        L(rt, { x: -9e3, loop: !0, children: e }),
        L(rt, {
          x: 9e3,
          loop: !0,
          children: L(rt, { y: 17500, scale: 0.5, children: e }),
        }),
      ],
    }),
  });
}
window.isBrowser = typeof document != "undefined";
window.isBrowser && Si(L(Gl, {}), document.querySelector("#app"));
